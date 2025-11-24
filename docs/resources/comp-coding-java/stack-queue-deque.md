---
title: "Stacks, Queues, and Deques"
---

# Stacks, Queues, and Deques in Java

In Java, `Queue` and `Deque` (Double-Ended Queue) are **interfaces**, which means they are contracts that define a set of methods. You create an actual object using a concrete class that *implements* these interfaces. For competitive programming, the two most important implementing classes are `LinkedList` and `ArrayDeque`.

## Theory: Queue (FIFO) ↔ `std::queue`

A **Queue** follows the **First-In, First-Out (FIFO)** principle, like a checkout line.

* **Implementation**: The standard way to instantiate a `Queue` is by using `LinkedList`.

    ```java
    Queue<Integer> myQueue = new LinkedList<>();
    ```

* **Key Methods**: For safety and convenience in competitive programming, it's best to use the methods that return `null` or `false` on failure instead of throwing an exception.
  * `offer(e)`: Adds an element to the back of the queue. Returns `false` if it fails. (Preferred over `add(e)`).
  * `poll()`: Removes and returns the element at the front of the queue. Returns `null` if the queue is empty. (Preferred over `remove()`).
  * `peek()`: Looks at the element at the front without removing it. Returns `null` if the queue is empty.

## Theory: Stack (LIFO) ↔ `std::stack`

A **Stack** follows the **Last-In, First-Out (LIFO)** principle, like a stack of plates.

* **Implementation (Best Practice)**: The modern, recommended way to create a stack is to use the `Deque` interface with the `ArrayDeque` class.

    ```java
    Deque<Integer> myStack = new ArrayDeque<>();
    ```

* **Why not the legacy `Stack` class?** 🚨 Java has an old `Stack` class, but you should **avoid it**. It extends `Vector`, which is a synchronized (thread-safe) class. This adds unnecessary performance overhead for single-threaded competitive programming. `ArrayDeque` is not synchronized and is significantly faster.
* **Key Methods**:
  * `push(e)`: Adds an element to the top of the stack.
  * `pop()`: Removes and returns the element from the top. Throws an exception if empty.
  * `peek()`: Looks at the element at the top without removing it.

## Theory: Deque ↔ `std::deque`

A **Deque** (pronounced "deck") is a double-ended queue, meaning you can add and remove elements from both the front and the back. It effectively combines the functionality of a stack and a queue.

* **Implementation**: The best all-around implementation for performance is **`ArrayDeque`**. It is more efficient than `LinkedList` for `add` and `remove` operations from either end.

    ```java
    Deque<Integer> myDeque = new ArrayDeque<>();
    ```

* **Key Methods**:
  * Add: `addFirst(e)` / `offerFirst(e)`, `addLast(e)` / `offerLast(e)`
  * Remove: `removeFirst()` / `pollFirst()`, `removeLast()` / `pollLast()`
  * Examine: `getFirst()` / `peekFirst()`, `getLast()` / `peekLast()`

## Common Usage

This code block demonstrates how to implement and use all three data structures according to modern best practices.

```java
import java.util.ArrayDeque;
import java.util.Deque;
import java.util.LinkedList;
import java.util.Queue;

public class Main {
    public static void main(String[] args) {

        // --- 1. Queue Example (FIFO) using LinkedList ---
        System.out.println("--- Queue (FIFO) ---");
        Queue<String> customerLine = new LinkedList<>();
        customerLine.offer("Alice");
        customerLine.offer("Bob");
        customerLine.offer("Charlie");
        System.out.println("Next to serve: " + customerLine.peek()); // Alice
        System.out.println("Serving: " + customerLine.poll());     // Alice
        System.out.println("Next to serve: " + customerLine.peek()); // Bob
        System.out.println();


        // --- 2. Stack Example (LIFO) using ArrayDeque ---
        System.out.println("--- Stack (LIFO) ---");
        Deque<String> browserHistory = new ArrayDeque<>();
        browserHistory.push("google.com");
        browserHistory.push("github.com");
        browserHistory.push("docs.oracle.com");
        System.out.println("Current page: " + browserHistory.peek()); // docs.oracle.com
        System.out.println("Going back to: " + browserHistory.pop());  // docs.oracle.com
        System.out.println("Current page: " + browserHistory.peek()); // github.com
        System.out.println();


        // --- 3. Deque Example using ArrayDeque ---
        System.out.println("--- Deque (Double-Ended) ---");
        Deque<Integer> deque = new ArrayDeque<>();
        deque.offerFirst(10);  // Deque: [10]
        deque.offerLast(20);   // Deque: [10, 20]
        deque.offerFirst(5);   // Deque: [5, 10, 20]
        deque.offerLast(25);   // Deque: [5, 10, 20, 25]
        System.out.println("Current Deque: " + deque);
        System.out.println("Removing from front: " + deque.pollFirst()); // 5
        System.out.println("Removing from back: " + deque.pollLast());   // 25
        System.out.println("Final Deque: " + deque);
    }
}
```
