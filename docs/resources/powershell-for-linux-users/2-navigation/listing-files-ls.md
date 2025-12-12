
# Listing Files & Directories (ls)


## Command Equivalents

| Linux Command | PowerShell Cmdlet | Aliases           |
|---------------|-------------------|-------------------|
| `ls`          | `Get-ChildItem`   | `ls`, `gci`, `dir` |

## Description

`Get-ChildItem` is the PowerShell cmdlet for listing the contents of a directory. While its alias `ls` makes it feel familiar, it is fundamentally more powerful because it returns a collection of `FileInfo` and `DirectoryInfo` objects, which you can then filter, sort, or pass down the pipeline.

## Common Usage

### Basic Listing

Running `ls` by itself lists the items in the current directory.

```powershell
ls
```

### Listing Hidden Files

To include hidden and system files, similar to `ls -a` in Linux, use the `-Force` parameter.

```powerShell
# Show all items, including hidden ones
ls -Force
```

### Recursive Listing

To list the contents of the current directory and all of its subdirectories, similar to `ls -R`, use the `-Recurse` parameter.

```powerShell
# List all files and folders recursively
ls -Recurse
```

### Filtering the List

While you can pipe the output of `ls` to `Where-Object`, a more efficient method for simple pattern matching is to use the `-Filter` parameter.

```powerShell
# List only files ending with the .log extension
ls -Filter "*.log"
```

### Listing Only Directories or Files

You can specifically request only directories or only files by using the `-Directory` or `-File` switches.

```powerShell
# List only the directories in the current location
ls -Directory

# List only the files in the current location
ls -File
```
