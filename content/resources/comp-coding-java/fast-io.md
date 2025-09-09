---
title: "Fast I/O"
weight: 10
cascade:
  type: docs
---

## From C++ `cin`/`cout` to Java's Fast I/O

Coming from a C++ background, I'm used to optimizing I/O with `ios_base::sync_with_stdio(false);` and `cin.tie(NULL);`. In Java, the standard `Scanner` and `System.out.println` are incredibly convenient for general-purpose programming but can lead to a dreaded "Time Limit Exceeded" (TLE) verdict in competitions. Let's break down why and what the proper alternative is.

### The Problem with Standard I/O

1. **`Scanner` is Too Slow**: The `Scanner` class is powerful but its power is its downfall in a competitive setting. It uses regular expressions (regex) to parse input. This means when you call `scanner.nextInt()`, it's not just grabbing digits; it's doing complex pattern matching to handle various delimiters. This overhead is significant when reading thousands of lines.

2. **`System.out.println()` is Synchronized**: This method is "thread-safe." It uses locks to ensure that if multiple threads try to print to the console simultaneously, the output doesn't get jumbled. This is a great feature for robust applications, but in a single-threaded competitive programming solution, this locking mechanism is unnecessary overhead.

### The Solution: `BufferedReader` and `PrintWriter`

The solution is to use buffered I/O, which reads and writes data in large chunks, minimizing costly interactions with the underlying system.

#### `BufferedReader` for Fast Input

`BufferedReader` reads a large block of data into a buffer (an in-memory array). When we request a line, it's served directly from this fast buffer.

The key method is `br.readLine()`, which reads an entire line as a `String`. It's then our responsibility to parse this string into the required data type (e.g., `Integer.parseInt()`, `Double.parseDouble()`). This manual parsing is much faster than `Scanner`'s automated approach.

#### `PrintWriter` for Fast Output

Similarly, `PrintWriter` buffers our output. Instead of writing every small piece of data to the console immediately, it collects it in a buffer. The buffer is only "flushed" (written out) when it's full or when we explicitly close the writer. This turns many small, slow write operations into one large, efficient one.

### My Reusable Fast I/O Template

Here’s the template I've put together. It uses `BufferedReader` for input, `PrintWriter` for output, and `StringTokenizer` as a fast way to split lines with space-separated values (it's much faster than `String.split()`).

```java
import java.io.*;
import java.util.StringTokenizer;

// This can be the main class or any other class name
public class Main {
    public static void main(String[] args) throws IOException {
        // 1. Set up the fast reader
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        // 2. Set up the fast writer
        PrintWriter pw = new PrintWriter(new BufferedWriter(new OutputStreamWriter(System.out)));

        // 3. To read a full line of input
        // String line = br.readLine();

        // 4. To read a space-separated line (e.g., "10 20")
        StringTokenizer st = new StringTokenizer(br.readLine());
        int n = Integer.parseInt(st.nextToken());
        int k = Integer.parseInt(st.nextToken());

        // 5. To print output (it gets buffered)
        pw.println("The value of n is: " + n);
        pw.println("The value of k is: " + k);
        
        // 6. CRITICAL: Flush and close the writer
        // This ensures all buffered output is actually written to the console.
        // Forgetting this step will result in no output!
        pw.close(); 
    }
}
```

>[!IMPORTANT]
> Always remember pw.close() or pw.flush() at the end of your program. Otherwise, the output will remain stuck in the buffer, and your program will appear to produce no output at all!
