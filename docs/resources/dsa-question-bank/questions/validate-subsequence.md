---
title: Validate Subsequence
difficulty: Easy
tags: [Array, Two Pointers]
---

# Validate Subsequence

## Problem Statement

Given two non-empty arrays of integers, write a function that determines whether the second array is a subsequence of the first one.

A subsequence of an array is a set of numbers that aren't necessarily adjacent in the array but that are in the same order as they appear in the array. For instance, the numbers `[1, 3, 4]` form a subsequence of the array `[1, 2, 3, 4]`, and so do the numbers `[2, 4]`. Note that a single number in an array and the array itself are both valid subsequences of the array.

## Solution

```java
public static boolean isValidSubsequence(
    List<Integer> array, List<Integer> sequence
  ) {
    // Write your code here.
    int seqSize = sequence.size();
    int arraySize = array.size();
    if(arraySize < seqSize) {
      return false;
    }
    int start = 0;
    int seqStart = 0;
    while(start < arraySize && seqStart < seqSize) {
      if(array.get(start).equals(sequence.get(seqStart))) {
        seqStart++;
      }
      start++;
    }
    if (seqStart==seqSize) {
          return true;
        }
    return false;
  }
```


