---
title: "Measuring Objects (Measure-Object)"
cascade:
  type: docs
---

## Command Equivalents

| Linux Command | PowerShell Cmdlet | Aliases   |
|---------------|-------------------|-----------|
| `wc`          | `Measure-Object`  | `measure` |

## Description

The `Measure-Object` cmdlet is a powerful utility for performing calculations on collections of objects. In its simplest form, it can act as a direct equivalent to the Linux `wc` (word count) command when used on the content of a text file.

However, its true power lies in its ability to calculate statistics—such as the **sum**, **average**, **minimum**, and **maximum**—on the numerical properties of any object collection passed to it through the pipeline.

## Measuring Text Files (like `wc`)

When piped the output of `Get-Content`, `Measure-Object` can count lines, words, and characters.

```powershell
# Get statistics on a text file
Get-Content -Path ".\my-document.txt" | Measure-Object -Line -Word -Character
```

This produces an object with `Lines`, `Words`, and `Characters` properties.

## Measuring Object Properties

The real utility comes from using the `-Property` parameter to specify a property, then using switches like `-Sum`, `-Average`, `-Maximum`, or `-Minimum` to perform a calculation on that property for all objects in the collection.

### Common Usage

#### Counting the Number of Files

If you just want a count of objects, you can pipe them to `Measure-Object`. The `Count` property of the result will have the total.

```powerShell
# Count the number of .log files in the current directory
Get-ChildItem -Filter "*.log" | Measure-Object
```

#### Calculating the Total Size of Files

A very common use case is to find the total size of all files in a directory tree by calculating the sum of their `Length` properties.

```powerShell
# Recursively get all files, then sum their Length (size) property
Get-ChildItem -File -Recurse | Measure-Object -Property Length -Sum
```

#### Getting Full Statistics on File Sizes

You can combine multiple measurement switches in one command to get a full statistical summary.

```powerShell
# Get the count, sum, average, max, and min size for all files in a folder
Get-ChildItem -File | Measure-Object -Property Length -Sum -Average -Maximum -Minimum
```

The output will be an object with properties like `Count`, `Sum`, `Average`, `Maximum`, and `Minimum`.

#### Calculating Average Process Memory

This command calculates the average memory (Working Set) used by all running processes.

```powerShell
# Get all processes and calculate the average of their 'WS' property
Get-Process | Measure-Object -Property WS -Average
```
