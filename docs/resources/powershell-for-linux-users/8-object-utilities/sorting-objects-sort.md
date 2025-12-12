
# Sorting Objects (Sort-Object)


## Command Equivalents

| Linux Command | PowerShell Cmdlet | Aliases |
|---------------|-------------------|---------|
| `sort`        | `Sort-Object`     | `sort`  |

## Description

The `Sort-Object` cmdlet arranges a collection of objects in a specified order based on the values of their properties. It is the object-oriented equivalent of the Linux `sort` command.

The key advantage of `Sort-Object` is that it sorts based on the actual data type of the property. Numbers are sorted numerically, dates are sorted chronologically, and strings are sorted alphabetically. This is much more reliable than the line-based textual sort performed by the Linux `sort` command, which can lead to incorrect results (e.g., "10" coming before "2").

## Key Parameters

- **`-Property`**: This is the most important parameter. It specifies which property of the object to use for the sort comparison. You can provide multiple properties separated by commas for multi-level sorting.

- **`-Descending`**: This is a switch parameter that reverses the sort order. By default, `Sort-Object` sorts in **ascending** order (A-Z, smallest to largest). Using `-Descending` changes the order to Z-A, largest to smallest.

- **`-Unique`**: This parameter returns only the unique items from a collection, based on the specified property. It effectively removes duplicates after sorting.

## Common Usage

### Sorting Files by Name

This is a simple alphabetical sort based on the `Name` property.

```powershell
# List all files and folders, sorted alphabetically
Get-ChildItem | Sort-Object -Property Name
```

### Sorting Files by Size (Largest First)

To sort numerically and reverse the order, combine the `-Property` and `-Descending` parameters.

```powerShell
# List all files, sorted by size, with the largest file at the top
Get-ChildItem -File | Sort-Object -Property Length -Descending
```

### Sorting by Multiple Properties

You can provide a comma-separated list to the `-Property` parameter to perform a multi-level sort. The objects are first sorted by the first property; any items with a matching value for that property are then sorted by the second property, and so on.

```powerShell
# Sort all processes first by name, and then by their ID within each name group
Get-Process | Sort-Object -Property ProcessName, Id
```

### Getting a Unique, Sorted List

You can use `-Unique` to get a sorted list with duplicates removed.

```powerShell
# Get a list of all unique file extensions in a folder, sorted alphabetically
Get-ChildItem -File | Sort-Object -Property Extension -Unique | Select-Object Extension
```
