---
title: "PriorityQueue (Heaps)"
---

# Heaps in Java: `PriorityQueue`

The `PriorityQueue` class in Java is the implementation of the heap data structure. It's the direct equivalent of C++'s `std::priority_queue` and is essential for problems that require efficiently retrieving the smallest or largest element from a collection.

It works by maintaining a "heap-order property" in its internal array, which ensures that the element with the highest priority is always at the root of the tree, ready for quick access.

## The Most Critical Difference: Min-Heap vs. Max-Heap 🚨

This is the single most important detail for a C++ programmer to remember: the default behaviors are opposite.

* **Java `PriorityQueue`**: Is a **Min-Heap** by default. The smallest element is considered the highest priority and will be removed first by the `poll()` method.
* **C++ `std::priority_queue`**: Is a **Max-Heap** by default. The largest element has the highest priority and is removed first by the `pop()` method.

Forgetting this difference is a very common source of bugs when switching from C++ to Java.

## Theory and Performance

The performance of a `PriorityQueue` is determined by its underlying binary heap structure.

* **`add(element)`** or **`offer(element)`**: Adds an element to the heap. This requires sifting the element up the tree to maintain the heap property.
  * **Time Complexity**: **O(log n)**.
* **`poll()`**: Removes and returns the head of the heap (the smallest element in a min-heap). This involves replacing the root with the last element and sifting it down.
  * **Time Complexity**: **O(log n)**.
* **`peek()`**: Retrieves, but does not remove, the head of the heap.
  * **Time Complexity**: **O(1)**.

## How to Create a Max-Heap in Java

Since the default is a min-heap, you must explicitly provide a reverse-order comparator to create a max-heap. There are two common ways to do this:

1. **`Collections.reverseOrder()`**: This is the simplest and most readable method.
2. **Lambda Expression**: You can provide a custom comparator, e.g., `(a, b) -> b - a`.

## Key Use Cases

`PriorityQueue` is the go-to data structure for:

* Finding the "k-th" smallest or largest element in a collection.
* Graph algorithms like **Dijkstra's** (for the shortest path) and **Prim's** (for minimum spanning trees).
* Any problem involving task scheduling or merging sorted streams (e.g., merge k-sorted lists).

## Common Usage

The following code demonstrates how to create and use both the default min-heap and a max-heap.

```java
import java.util.Collections;
import java.util.PriorityQueue;

public class Main {
    public static void main(String[] args) {
        // --- 1. Min-Heap (Default Behavior) ---
        // Smallest element has the highest priority
        PriorityQueue<Integer> minHeap = new PriorityQueue<>();
        minHeap.offer(20);
        minHeap.offer(10);
        minHeap.offer(30);

        System.out.println("Min-Heap root (peek): " + minHeap.peek()); // Prints 10

        System.out.print("Polling from Min-Heap: ");
        while (!minHeap.isEmpty()) {
            System.out.print(minHeap.poll() + " "); // Prints "10 20 30 "
        }
        System.out.println("\n");


        // --- 2. Max-Heap (Using a Custom Comparator) ---
        // Largest element has the highest priority
        PriorityQueue<Integer> maxHeap = new PriorityQueue<>(Collections.reverseOrder());
        maxHeap.offer(20);
        maxHeap.offer(10);
        maxHeap.offer(30);

        System.out.println("Max-Heap root (peek): " + maxHeap.peek()); // Prints 30

        System.out.print("Polling from Max-Heap: ");
        while (!maxHeap.isEmpty()) {
            System.out.print(maxHeap.poll() + " "); // Prints "30 20 10 "
        }
        System.out.println();
    }
}
```
