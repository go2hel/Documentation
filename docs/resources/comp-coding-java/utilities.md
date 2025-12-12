---
title: "Utilities for Competitive Programming"
---

# Essential Java Utilities

Beyond the core data structures, several utility classes and concepts are fundamental for solving a wide range of competitive programming problems in Java.

## Theory: Custom Sorting

While many collections can maintain their own order, you will often need to sort a standard array or `ArrayList` based on a custom rule.

* **Sorting Methods**: Java provides two main static methods for this:
  * **`Arrays.sort()`**: For sorting primitive arrays (e.g., `int[]`) and object arrays.
  * **`Collections.sort()`**: For sorting lists (e.g., `ArrayList`).

* **The `Comparator` Interface**: To define a custom sorting rule, you provide a `Comparator`. The modern and most concise way to do this is with a **lambda expression**. A comparator's logic must return an `int`:
  * Return a **negative** value if the first element should come before the second.
  * Return a **positive** value if the second element should come before the first.
  * Return **zero** if they are considered equal in order.

>[!TIP]
> A common shortcut for numerical sorting is simple subtraction: `(a, b) -> a.score - b.score` sorts by score in ascending order.

## Theory: Large Numbers with `BigInteger`

A significant advantage of Java is its built-in support for arbitrarily large numbers using the `BigInteger` class. This is a lifesaver for problems involving combinatorics, factorials, or cryptography where numbers can easily exceed the capacity of a 64-bit `long`.

* **Key Point**: You **cannot** use standard arithmetic operators like `+`, `-`, or `*` with `BigInteger` objects. You must use their built-in methods.
* **Essential Methods**:
  * `.add(other)`
  * `.subtract(other)`
  * `.multiply(other)`
  * `.divide(other)`
  * `.mod(other)`
  * `.compareTo(other)`

## Theory: Primitives vs. Wrapper Classes

This is a key performance concept in Java.

* **Primitives**: These are raw data types like `int`, `long`, `double`, and `char`. They are fast, use minimal memory, and are not objects.
* **Wrapper Classes**: These are objects that "wrap" a primitive value, such as `Integer`, `Long`, `Double`, and `Character`.

The most important reason wrapper classes exist is that **Java's Collections Framework can only store objects**. You cannot have an `ArrayList<int>`; you must use `ArrayList<Integer>`.

Java handles the conversion between them automatically via a process called **autoboxing** (`int` → `Integer`) and **unboxing** (`Integer` → `int`). While convenient, this process has a small performance overhead.

**Rule of Thumb for CP**: Use collections with wrapper types for their convenience. If your solution is facing a "Time Limit Exceeded" error, one possible optimization is to switch from a collection like `ArrayList<Integer>` to a more performant primitive array (`int[]`), especially if the operations occur inside a very tight loop.

## Common Usage

This code block demonstrates how to use these utilities in practice.

```java
import java.math.BigInteger;
import java.util.ArrayList;
import java.util.Collections;

// A custom class for the sorting example
class Point {
    int x, y;
    Point(int x, int y) {
        this.x = x;
        this.y = y;
    }
    @Override
    public String toString() {
        return "(" + x + "," + y + ")";
    }
}

public class Main {
    public static void main(String[] args) {

        // --- 1. Custom Sorting Example ---
        ArrayList<Point> points = new ArrayList<>();
        points.add(new Point(5, 30));
        points.add(new Point(2, 10));
        points.add(new Point(4, 20));

        // Sort the list of points based on their y-coordinate in ascending order
        Collections.sort(points, (p1, p2) -> p1.y - p2.y);

        System.out.println("Points sorted by y-coordinate: " + points);
        // Prints: [(2,10), (4,20), (5,30)]
        System.out.println();


        // --- 2. BigInteger Example ---
        BigInteger hugeNumber1 = new BigInteger("123456789123456789123456789");
        BigInteger hugeNumber2 = new BigInteger("987654321987654321987654321");

        // You must use methods for arithmetic
        BigInteger sum = hugeNumber1.add(hugeNumber2);
        BigInteger product = hugeNumber1.multiply(hugeNumber2);

        System.out.println("Sum of big integers: " + sum);
        System.out.println("Product of big integers: " + product);
    }
}
```
