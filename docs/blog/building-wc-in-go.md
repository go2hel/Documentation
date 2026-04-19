---
title: "Building a High-Performance 'wc' in Go: A Journey from Bytes to Runes"
date: 2026-04-19
summary: "My journey solving the Coding Challenges 'wc' tool, evolving from a basic implementation to a high-performance, standard-compliant Go utility."
authors:
  - name: Yash Gohel
    link: https://github.com/go2hel
    image: https://github.com/go2hel.png
---

## The Challenge: Building `wc`

I recently took on the [Write Your Own wc Tool](https://codingchallenges.fyi/challenges/challenge-wc) challenge from John Crickett's Coding Challenges. The goal is simple: recreate the classic Unix `wc` utility. While it sounds basic, implementing it correctly in Go taught me a lot about performance, Unicode, and idiomatic Go design.

## The First Attempt: The "Java" Way

My initial implementation followed a very straightforward, almost "Java-like" approach. I used `bufio.Reader` to read the file line-by-line and `strings.Fields` to count words.

```go
// Snippet of the first version
for {
    line, err := fileReader.ReadString('\n')
    // ... handling EOF
    numBytes += len([]byte(line))
    numLines++
    numWords += len(strings.Fields(line))
}
```

### What was wrong?
1. **Memory Inefficiency**: `ReadString('\n')` reads the entire line into memory. If a file has an extremely long line, the program could crash with an OOM (Out of Memory) error.
2. **Unnecessary Allocations**: `[]byte(line)` creates a copy of the string just to get its length, and `strings.Fields` creates a whole new slice of strings for every single line.
3. **Unicode Confusion**: In my first pass, I wasn't fully distinguishing between **bytes** (`-c`) and **characters** (`-m`).

## The Evolution: Thinking in Go

After some review and research into how the original Linux `wc` (written in C) works, I realized I needed a **single-pass, character-based approach**.

### Enter: The `rune`
Go's `rune` is an alias for `int32` and represents a Unicode Code Point. Instead of reading lines, I switched to reading **runes**. This allowed me to handle multi-byte characters (like emojis) correctly and efficiently.

### Optimization: The `inWord` State Machine
Instead of splitting strings, I implemented a simple state machine. We keep track of whether the current character is a space or part of a word. This is how the real `wc` avoids the overhead of string manipulation.

## The Final Code

I refactored the code to use a `Count` struct and methods for better encapsulation. I also ensured that the output column order matches the standard `wc` (Lines, Words, Chars, Bytes) and that a "total" line is only shown when multiple files are processed.

<<< @/blog/scripts/wc.go

## Key Lessons Learned

1. **Scope and Naming**: I learned that Go developers prefer short variable names (like `r` for reader, `c` for count) when the scope is small. It reduces visual noise and keeps the focus on the logic.
2. **Locality of Reasoning**: By moving the counting logic into its own function, the code became much easier to test and reason about.
3. **Single Pass is King**: For CLI utilities, avoiding multiple passes over the same data is the secret to performance.
4. **Safety in Types**: Unlike C, Go's handling of UTF-8 strings as byte slices and the `rune` type makes Unicode support almost transparent.

Building this tool was a great way to bridge the gap between "writing code that works" and "writing code that is production-ready." If you're looking to sharpen your Go skills, I highly recommend this challenge!
