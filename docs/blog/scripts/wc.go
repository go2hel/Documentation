package main

import (
	"bufio"
	"flag"
	"fmt"
	"io"
	"os"
	"unicode"
)

type Count struct {
	Lines, Words, Bytes, Chars int
}

func (c *Count) Add(other Count) {
	c.Lines += other.Lines
	c.Words += other.Words
	c.Bytes += other.Bytes
	c.Chars += other.Chars
}

func main() {

	showLines := flag.Bool("l", false, "Show number of lines")
	showWords := flag.Bool("w", false, "Show number of words")
	showBytes := flag.Bool("c", false, "Show number of bytes")
	showChars := flag.Bool("m", false, "Show number of characters")
	flag.Parse()

	if !*showBytes && !*showLines && !*showWords && !*showChars {
		*showBytes, *showLines, *showWords = true, true, true
	}

	files := flag.Args()

	if len(files) == 0 {
		count, err := countWords(os.Stdin)
		if err != nil {
			fmt.Fprintln(os.Stderr, err)
			os.Exit(1)
		}
		printWordCount(count, "", *showLines, *showWords, *showBytes, *showChars)
		return
	}

	var totalCount Count
	exitCode := 0

	for _, fileName := range files {
		file, err := os.Open(fileName)
		if err != nil {
			fmt.Fprintf(os.Stderr, "%s wc error: %v\n", fileName, err)
			exitCode = 1
			continue
		}
		count, err := countWords(file)
		file.Close()
		if err != nil {
			fmt.Fprintf(os.Stderr, "%s wc error: %v\n", fileName, err)
			exitCode = 1
			continue
		}
		printWordCount(count, fileName, *showLines, *showWords, *showBytes, *showChars)
		totalCount.Add(count)
	}

	if len(files) > 1 {
		printWordCount(totalCount, "total", *showLines, *showWords, *showBytes, *showChars)
	}
	os.Exit(exitCode)
}

func countWords(reader io.Reader) (Count, error) {

	var count Count

	bufferReader := bufio.NewReader(reader)
	isCurrentlyOnWord := false

	for {
		r, size, err := bufferReader.ReadRune()
		if err != nil {
			if err == io.EOF {
				break
			}
			return count, err
		}

		count.Bytes += size
		count.Chars++

		if r == '\n' {
			count.Lines++
		}

		if unicode.IsSpace(r) {
			isCurrentlyOnWord = false
		} else if !isCurrentlyOnWord {
			count.Words++
			isCurrentlyOnWord = true
		}
	}

	return count, nil
}

func printWordCount(count Count, fileName string, showLines, showWords, showBytes, showChars bool) {
	if showLines {
		fmt.Printf("%9d", count.Lines)
	}
	if showWords {
		fmt.Printf("%9d", count.Words)
	}
	if showBytes {
		fmt.Printf("%9d", count.Bytes)
	}
	if showChars {
		fmt.Printf("%9d", count.Chars)
	}
	if len(fileName) > 0 {
		fmt.Printf(" %s", fileName)
	}
	fmt.Println()
}
