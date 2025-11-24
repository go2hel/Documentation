---
title: "Displaying Full File Content (cat)"
cascade:
  type: docs
---

## Command Equivalents

| Linux Command | PowerShell Cmdlet | Aliases             |
|---------------|-------------------|---------------------|
| `cat`         | `Get-Content`     | `cat`, `gc`, `type` |

## Description

The `Get-Content` cmdlet reads the content of a file and displays it. Its most common alias, `cat`, makes it a familiar command for Linux users wanting to quickly view the entire contents of a text file.

Behind the scenes, `Get-Content` reads the file line by line and outputs each line as a separate string object. This object-based approach makes its output incredibly easy to pipe and process in subsequent commands.

## Common Usage

### Displaying a Single File

To display the full contents of a file to the console, simply provide the path.

```powershell
# Using the alias is most common
cat C:\Windows\System32\drivers\etc\hosts

# Using the full cmdlet name
Get-Content -Path ".\my-script.ps1"
```

### Displaying Multiple Files

Like the Linux `cat` command, `Get-Content` can accept an array of paths to display multiple files one after the other.

```powerShell
# This will display the content of file1.log followed by file2.log
cat file1.log, file2.log
```

### Reading File Content into a Variable

A common use in scripts is to read the entire content of a file into a variable for later processing. The variable will contain an array of strings, with each string being one line from the file.

```powerShell
# Reads all lines from the config file into the $configFileContents variable
$configFileContents = Get-Content -Path ".\settings.conf"
```

## A Note on Large Files

Be aware that by default, `Get-Content` reads the entire file into memory. While this is fine for most configuration files and scripts, it can be slow and consume a lot of memory if used on very large log files (multiple gigabytes). For simply viewing the beginning or end of large files, it is better to use the `-Head` or `-Tail` parameters, which are covered in a separate topic.
