---
title: Two Sum
difficulty: Easy
tags: [Array, Hash Table]
---

# Two Sum

## Problem Description

Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.

You may assume that each input would have **exactly one solution**, and you may not use the *same* element twice.

You can return the answer in any order.

## Solution

```java
  public static int[] twoNumberSum(int[] array, int targetSum) {
    // Write your code here.
    HashSet<Integer> elementsTillNow = new HashSet<>();
        for (int j : array) {
            if (elementsTillNow.contains(targetSum - j)) {
                int[] answer = new int[2];
                answer[0] = j;
                answer[1] = targetSum - j;
                return answer;
            }
            elementsTillNow.add(j);
        }
    return new int[0];
  }
```
