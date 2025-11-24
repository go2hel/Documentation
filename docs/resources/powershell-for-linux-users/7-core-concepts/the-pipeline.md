---
title: "The Pipeline (|)"
cascade:
  type: docs
---

## Description

The pipeline operator `|` is one of the most powerful features in PowerShell. Its purpose is to take the output of one command and send it to be used as the input for the next command in the sequence. This allows you to chain multiple simple commands together to perform complex tasks.

While the concept of a pipeline also exists in Linux, how it works in PowerShell is fundamentally different and more powerful.

## The Key Difference: Objects vs. Text

### In Linux

In a Linux shell like Bash, the pipeline `|` transports **streams of unstructured text**. When you run `ps aux | grep "chrome"`, the `ps` command produces a large block of text, and the `grep` command performs a simple text search on that block.

### In PowerShell

In PowerShell, the pipeline `|` transports **live .NET objects**. When you run a command like `Get-Process | Stop-Process`, the `Get-Process` cmdlet doesn't send text; it sends a collection of `Process` objects. The `Stop-Process` cmdlet is designed to receive these objects and knows exactly how to act on them. This eliminates the need for text parsing and makes commands more reliable and predictable.

## A Practical Workflow Example

The true power of the pipeline is in chaining multiple commands. Let's find the 5 largest files in the current directory and all its subdirectories, showing only their names and sizes.

### Step 1: Get all files

First, we use `Get-ChildItem` to recursively get all file objects.

```powershell
Get-ChildItem -Recurse -File
```

### Step 2: Sort the files by size

Next, we pipe those file objects to `Sort-Object` to arrange them by their `Length` property, from largest to smallest.

```powerShell
Get-ChildItem -Recurse -File | Sort-Object -Property Length -Descending
```

### Step 3: Select the top 5

Now we pipe the sorted list to `Select-Object` to take only the first 5 objects from the pipeline.

```powerShell
Get-ChildItem -Recurse -File | Sort-Object -Property Length -Descending | Select-Object -First 5
```

### Step 4: Format the final output

Finally, we can pipe those 5 objects to another `Select-Object` command to display only the properties we care about: `Name` and `Length`.

```powerShell
Get-ChildItem -Recurse -File | Sort-Object -Property Length -Descending | Select-Object -First 5 | Select-Object Name, Length
```

This one-liner demonstrates the core philosophy of PowerShell: get a collection of objects, then filter, sort, and process them step-by-step through the pipeline until you have your desired result.
