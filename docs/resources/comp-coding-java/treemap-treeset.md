---
title: "TreeMap & TreeSet"
---

# Ordered Collections: `TreeMap` and `TreeSet`

While `HashMap` and `HashSet` offer incredible O(1) average speed, they provide no guarantees about the order of elements. When you need your collection to remain **sorted** at all times, you turn to `TreeMap` and `TreeSet`. These are the direct Java equivalents of C++'s `std::map` and `std::set`.

The magic behind these structures is a **self-balancing binary search tree**, specifically a **Red-Black Tree** in Java's implementation. This internal structure ensures that elements are always kept in order and that core operations remain efficient.

## Theory: The Performance Trade-off

The primary difference between hash-based and tree-based collections is performance. By choosing a tree-based collection, you are making a conscious trade-off: you give up O(1) average time in exchange for the powerful feature of sorted order.

* **`HashMap` / `HashSet`**: O(1) average time for `get`, `put`, `add`, `contains`. No guaranteed order.
* **`TreeMap` / `TreeSet`**: **O(log n)** time for all major operations. Keys/elements are always sorted.

For most competitive programming problems, this O(log n) performance is more than fast enough, and the benefits of a sorted structure are well worth it.

## `TreeMap` ↔ `std::map`

A **`TreeMap`** stores key-value pairs, just like a `HashMap`. However, it always keeps the entries sorted based on the natural ordering of its keys.

## `TreeSet` ↔ `std::set`

A **`TreeSet`** stores a collection of unique elements, just like a `HashSet`. It always keeps the elements in their natural sorted order.

## The Superpowers of Sorted Collections

The real reason to use `TreeMap` and `TreeSet` is for their special, powerful methods that hash-based collections lack. These methods leverage the sorted nature of the underlying tree to perform efficient lookups.

All of the following are **O(log n)** operations:

* **`first()`** / **`last()`**: Retrieve the smallest or largest key/element in the collection.
* **`ceiling(e)`**: Returns the smallest element that is **greater than or equal to `e`**.
* **`floor(e)`**: Returns the largest element that is **less than or equal to `e`**.
* **`higher(e)`**: Returns the smallest element that is **strictly greater than `e`**.
* **`lower(e)`**: Returns the largest element that is **strictly less than `e`**.

These methods are incredibly useful for problems involving range queries, leaderboards, or finding the successor/predecessor of an element.

## Common Usage

The code below demonstrates the automatically sorted nature of these collections and the use of their special navigation methods.

```java
import java.util.TreeMap;
import java.util.TreeSet;

public class Main {
    public static void main(String[] args) {
        // --- TreeSet Example ---
        // Elements are automatically kept in sorted order
        TreeSet<Integer> sortedNumbers = new TreeSet<>();
        sortedNumbers.add(40);
        sortedNumbers.add(10);
        sortedNumbers.add(80);
        sortedNumbers.add(30);

        System.out.println("TreeSet (sorted): " + sortedNumbers);
        // Prints: [10, 30, 40, 80]

        // --- Using the "Superpower" Methods ---
        System.out.println("First (smallest) element: " + sortedNumbers.first()); // 10
        System.out.println("Last (largest) element: " + sortedNumbers.last());   // 80

        // Find the smallest number in the set that is >= 35
        Integer ceiling = sortedNumbers.ceiling(35);
        System.out.println("Ceiling of 35: " + ceiling); // 40

        // Find the largest number in the set that is < 40
        Integer lower = sortedNumbers.lower(40);
        System.out.println("Lower of 40: " + lower); // 30
        System.out.println();


        // --- TreeMap Example ---
        // Entries are sorted by key
        TreeMap<String, Integer> userScores = new TreeMap<>();
        userScores.put("eve", 90);
        userScores.put("alice", 100);
        userScores.put("bob", 95);

        System.out.println("TreeMap (sorted by key): " + userScores);
        // Prints: {alice=100, bob=95, eve=90}

        // The first and last keys are easily accessible
        System.out.println("First key (alphabetically): " + userScores.firstKey()); // alice
    }
}
```
