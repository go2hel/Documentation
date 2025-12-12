---
title: "Concurrency Issue with LinkedHashMap"
date: 2025-07-24
summary: "Demonstrating a concurrency issue when LinkedHashMap is modified by multiple threads simultaneously without proper synchronization."
authors:
  - name: Yash Gohel
    link: https://github.com/go2hel
    image: https://github.com/go2hel.png
---

This post demonstrates a common concurrency issue that can arise when using non-thread-safe collections like `LinkedHashMap` in a multi-threaded environment without proper synchronization.

The Java code below illustrates how two threads concurrently modifying a `LinkedHashMap` can lead to unexpected behavior, specifically an inconsistent size of the map.

```java
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.CountDownLatch;
import java.util.concurrent.atomic.AtomicInteger;

public class Solution {

    public static void main(String[] args) throws InterruptedException {
        int numberOfIterations = 10;
        AtomicInteger count = new AtomicInteger(1);
        Map<Integer, Integer> originalSizeDistributionMap = new ConcurrentHashMap<>();
        Map<Integer, Integer> newSizeDistributionMap = new ConcurrentHashMap<>();

        for (int i = 0; i < numberOfIterations; i++) {
            final Map<String, String> map = new LinkedHashMap<>();
            final CountDownLatch latch = new CountDownLatch(2);

            Runnable task = () -> {
                try {
                    Thread.sleep(40);
                    String currentTime = String.valueOf(count.getAndIncrement());
                    map.put("timestamp", currentTime);
                } catch (InterruptedException e) {
                    Thread.currentThread().interrupt();
                } finally {
                    latch.countDown();
                }
            };

            Thread thread1 = new Thread(task);
            Thread thread2 = new Thread(task);

            thread1.start();
            thread2.start();

            latch.await();

            int size = map.size();
            originalSizeDistributionMap.put(size, originalSizeDistributionMap.getOrDefault(size, 0) + 1);

            Map<String, String> newMap = new java.util.HashMap<>(map);
            int newSize = newMap.size();
            newSizeDistributionMap.put(newSize, newSizeDistributionMap.getOrDefault(newSize, 0) + 1);

            if (size > 1) {
                System.out.println("Map with size > 1 found: " + map);
            }
        }

        System.out.println("Original LinkedHashMap Size Distribution: " + originalSizeDistributionMap);
        System.out.println("New HashMap Size Distribution: " + newSizeDistributionMap);
    }
}
```

## Explanation of the Code and the Concurrency Issue

The `main` method in the Java code simulates a scenario where two threads (`thread1` and `thread2`) attempt to modify a shared `LinkedHashMap` (`map`) concurrently.

1. **`LinkedHashMap` (Non-Thread-Safe):** `LinkedHashMap` is not designed for concurrent access. When multiple threads modify it simultaneously without external synchronization, race conditions can occur. In this example, both threads try to put a key-value pair into the `map`.

2. **Race Condition:** The `map.put("timestamp", currentTime)` operation is not atomic. It involves multiple steps (e.g., calculating hash, traversing linked list, inserting entry). If `thread1` and `thread2` interleave these steps, the internal state of the `LinkedHashMap` can become corrupted.

3. **`CountDownLatch`:** A `CountDownLatch` is used to ensure that the main thread waits until both `thread1` and `thread2` have completed their execution before proceeding. This allows us to observe the state of the `map` after concurrent modifications.

4. **Observation of `map.size()`:** After the threads complete, the code checks `map.size()`. Ideally, since both threads are putting the same key ("timestamp"), the map should only contain one entry, and its size should be 1. However, due to the race condition, it's common to observe `size` being greater than 1. This happens because the `put` operation from one thread might overwrite or interfere with the `put` operation from the other thread in an unexpected way, leading to duplicate entries or an incorrect internal count.

5. **`originalSizeDistributionMap` vs. `newSizeDistributionMap`:**
    * `originalSizeDistributionMap` tracks the size distribution of the `LinkedHashMap` directly after concurrent modification. You will likely see instances where the size is greater than 1.
    * `newSizeDistributionMap` tracks the size distribution after copying the `LinkedHashMap` to a new `HashMap`. This is done to see if the inconsistencies persist when the map is re-hashed. The inconsistencies often do persist, as the underlying data structure was already corrupted.

## Conclusion

This example highlights the importance of using thread-safe collections (like `ConcurrentHashMap`) or implementing proper synchronization mechanisms (like `synchronized` blocks or `java.util.concurrent.locks.Lock`) when shared data structures are accessed and modified by multiple threads. Failing to do so can lead to subtle and hard-to-debug concurrency bugs, where the state of the application becomes inconsistent.

## Sample Results

``` text
Map with size > 1 found: {timestamp=1, timestamp=2}
Map with size > 1 found: {timestamp=5}
Map with size > 1 found: {timestamp=9, timestamp=10}
Map with size > 1 found: {timestamp=13, timestamp=14}
Map with size > 1 found: {timestamp=15}
Original LinkedHashMap Size Distribution: {1=5, 2=5}
New HashMap Size Distribution: {1=10}
```
