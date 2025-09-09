---
title: "ArrayList"
weight: 20
cascade:
  type: docs
---

## Java's Dynamic Array: `ArrayList`

If you're coming from C++ and looking for `std::vector`, your direct equivalent in Java is the **`ArrayList`**. It provides a resizable array that automatically handles memory management as it grows.

Under the hood, it's a standard array that, when it becomes full, is reallocated into a new, larger array with all the old elements copied over.

### Performance Characteristics

Understanding the time complexity of `ArrayList` operations is critical for competitive programming. They are identical to `std::vector`.

* **`get(index)`**: Accessing an element by its index.
  * **Time Complexity**: **O(1)**. This is the primary advantage of an array-based structure.
* **`set(index, element)`**: Updating an element at a given index.
  * **Time Complexity**: **O(1)**.
* **`add(element)`**: Adding an element to the **end** of the list.
  * **Time Complexity**: **Amortized O(1)**. It's almost always O(1), but becomes O(n) during the rare moments the internal array needs to be resized.
* **`add(index, element)`**: Inserting an element at the **start or middle**.
  * **Time Complexity**: **O(n)**. This is slow because all subsequent elements must be shifted to the right.
* **`remove(index)`**: Removing an element from the **start or middle**.
  * **Time Complexity**: **O(n)**. Similarly, this is slow due to shifting all subsequent elements to the left.
* **`size()`**: Getting the number of elements.
  * **Time Complexity**: **O(1)**.

### Common Usage

Here is a typical code snippet demonstrating common `ArrayList` operations.

**Key point:** Java collections require object types. You must use the wrapper class `Integer` instead of the primitive `int`.

```java
import java.util.ArrayList;
import java.util.Collections;

public class Main {
    public static void main(String[] args) {
        // Declaration
        ArrayList<Integer> nums = new ArrayList<>();

        // Add elements to the end
        nums.add(10); // [10]
        nums.add(30); // [10, 30]

        // Add an element at a specific index (slow O(n) operation)
        nums.add(1, 20); // [10, 20, 30]

        // Get and set elements (fast O(1) operations)
        int firstNumber = nums.get(0); // 10
        nums.set(2, 35); // [10, 20, 35]

        // Get size
        System.out.println("Size: " + nums.size()); // Prints 3

        // Simple iteration
        for (Integer num : nums) {
            System.out.print(num + " "); // Prints "10 20 35 "
        }
        System.out.println();

        // Sorting
        Collections.sort(nums); // [10, 20, 35]
    }
}
```

### `ArrayList<Integer>` vs. `int[]`

For performance-critical tasks, it's good to know the trade-off:

**`ArrayList<Integer>`**: More flexible and convenient. However, it stores Integer objects, which has a slight memory and speed overhead due to Java's autoboxing (converting int to Integer).

**`int[]`**: A primitive array. It's faster and uses less memory. However, it has a fixed size and fewer built-in features.

Rule of thumb: Use ArrayList for its convenience. If you have a Time Limit Exceeded error and suspect overhead in a tight loop, consider switching to a primitive int[] as an optimization.
