---
title: "HashMap & HashSet"
---

# Hashing for O(1) Speed: `HashMap` and `HashSet`

When you need the absolute fastest average time for insertions, deletions, and lookups, hash-based data structures are the answer. In Java, these are `HashMap` and `HashSet`, which correspond directly to `std::unordered_map` and `std::unordered_set` in C++.

They work by using a **hash function** to convert an object (like a String or Integer) into an integer index. This index is used to place the object into an internal array, often called a bucket. This process allows for lookups that are, on average, instantaneous. ⚡

## Theory: `HashMap` ↔ `std::unordered_map`

A **`HashMap`** is used to store **key-value pairs**. It's one of the most frequently used data structures in competitive programming.

* **Core Concept**: It maps a unique key to a specific value. For example, you can map a `String` (a user's name) to an `Integer` (their score).
* **Performance**: The magic of `HashMap` is its **O(1) average time complexity** for the following critical operations:
  * `put(key, value)`: Inserts or updates a key-value pair.
  * `get(key)`: Retrieves the value associated with a key.
  * `containsKey(key)`: Checks if a key exists in the map.
  * `remove(key)`: Deletes a pair by its key.
* **Worst Case**: In the unlikely event that many keys produce the same hash index (a "hash collision"), performance can degrade to O(n). However, Java's hash functions are well-designed to make this extremely rare.
* **Ordering**: Like `unordered_map`, `HashMap` makes **no guarantees** about the order of its elements.

## Theory: `HashSet` ↔ `std::unordered_set`

A **`HashSet`** is used to store a collection of **unique elements**. You can think of it as a `HashMap` where you only care about the keys.

* **Core Concept**: Its main purpose is to answer one question extremely fast: "Is this element in the set?"
* **Performance**: It offers the same **O(1) average time complexity** as `HashMap` for its core operations:
  * `add(element)`: Adds an element to the set. Returns `false` if the element is already present.
  * `contains(element)`: Checks if an element exists in the set.
  * `remove(element)`: Deletes an element from the set.
* **Ordering**: Like `HashSet`, there is **no guaranteed order**.

## Key Use Cases

* **`HashMap`**: Perfect for **frequency counting** (e.g., counting occurrences of numbers or characters), or any problem that requires mapping one piece of data to another (e.g., graph problems where you map a node to its neighbors).
* **`HashSet`**: Ideal for **detecting duplicates** in a collection or for keeping track of **visited states** in search algorithms like Breadth-First Search (BFS) or Depth-First Search (DFS).

## Common Usage

Below is a single code block demonstrating the typical use of both `HashMap` and `HashSet`.

```java
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;

public class Main {
    public static void main(String[] args) {
        // --- HashMap Example (Frequency Counting) ---
        HashMap<String, Integer> wordCount = new HashMap<>();
        String[] words = {"apple", "banana", "apple", "orange", "banana", "apple"};

        for (String word : words) {
            // getOrDefault is a convenient way to handle new keys
            wordCount.put(word, wordCount.getOrDefault(word, 0) + 1);
        }

        System.out.println("Word Counts: " + wordCount);
        // Prints: {orange=1, banana=2, apple=3} (order not guaranteed)

        // --- HashSet Example (Finding Uniques) ---
        HashSet<Integer> uniqueNumbers = new HashSet<>();
        int[] numbers = {1, 5, 2, 8, 5, 1, 9, 2};

        for (int num : numbers) {
            uniqueNumbers.add(num);
        }

        System.out.println("Unique Numbers: " + uniqueNumbers);
        // Prints: [1, 2, 5, 8, 9] (order not guaranteed)

        // Fast existence check
        boolean hasFive = uniqueNumbers.contains(5); // true
        System.out.println("Set contains 5: " + hasFive);
    }
}
```
