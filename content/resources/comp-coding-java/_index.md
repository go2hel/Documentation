---
title: Competitive coding in Java
---

## From C++ to Java: A Quick-Start Guide

This guide is for competitive programmers who are already comfortable with data structures and algorithms in C++ (or another language) and want to quickly find the Java equivalents.

The goal is not to reteach the concepts, but to map your existing knowledge to Java's syntax and its powerful standard library.

### Core Topics & Equivalents

Here is the breakdown of the topics we will cover. Each section provides the Java alternative to common C++ tools.

1. **[Fast I/O in Java](./fast-io/)**
    * Replacing `cin`/`cout` with `BufferedReader` and `PrintWriter`.

2. **[The Collections Framework: Dynamic Arrays](./arraylist/)**
    * C++ `std::vector` ↔ Java `ArrayList`.

3. **[The Collections Framework: Hash Maps & Sets](./hashmap-hashset/)**
    * C++ `std::unordered_map` ↔ Java `HashMap`.
    * C++ `std::unordered_set` ↔ Java `HashSet`.

4. **[The Collections Framework: Heaps](./priority-queue/)**
    * C++ `std::priority_queue` ↔ Java `PriorityQueue`.

5. **[The Collections Framework: Balanced Trees](./treemap-treeset/)**
    * C++ `std::map` ↔ Java `TreeMap`.
    * C++ `std::set` ↔ Java `TreeSet`.

6. **[Stacks, Queues, and Deques](./stack-queue-deque/)**
    * C++ `std::queue` ↔ Java `Queue<T> q = new LinkedList<>();`
    * C++ `std::stack` ↔ Java `Deque<T> s = new ArrayDeque<>();`
    * C++ `std::deque` ↔ Java `Deque<T> d = new ArrayDeque<>();`

7. **[Essential Utilities](./utilities/)**
    * Custom sorting with `Arrays.sort()` and `Collections.sort()`.
    * Handling arbitrarily large numbers with `BigInteger`.
