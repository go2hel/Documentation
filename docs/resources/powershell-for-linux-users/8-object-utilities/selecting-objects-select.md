
# Selecting Objects & Properties (Select-Object)


## Command Equivalents

| Linux Task                             | PowerShell Cmdlet                                 | Aliases  |
|----------------------------------------|---------------------------------------------------|----------|
| Selecting lines (`head`, `tail`)       | `Select-Object -First <N>`, `Select-Object -Last <N>` | `select` |
| Selecting columns (`cut`, `awk '{print $1}'`) | `Select-Object -Property <name1>, <name2>`        | `select` |

## Description

`Select-Object` is a highly versatile utility cmdlet with two primary, distinct functions:

1. **Selecting Objects**: It can select a specific number of objects from the beginning or end of a collection, similar to the `head` and `tail` commands.
2. **Selecting Properties**: It can reshape objects by selecting only specific properties, effectively creating a new, custom object with just the data you need. This is similar in concept to using `cut` or `awk` to pick specific columns of text.

## Selecting a Subset of Objects

These parameters are used to filter the *number* of objects passing through the pipeline.

### `-First` and `-Last`

These parameters grab the first or last `N` items from a collection.

```powershell
# Get the 5 most CPU-intensive processes
Get-Process | Sort-Object -Property CPU -Descending | Select-Object -First 5

# Get the 10 most recent events from the System event log
Get-EventLog -LogName System -Newest 50 | Select-Object -Last 10
```

### `-Unique`

This parameter returns only the unique items from a collection. When used with `-Property`, it returns objects that have unique values for that property.

```powerShell
# Get a unique list of all file extensions in a directory
Get-ChildItem -File -Recurse | Select-Object -Property Extension -Unique
```

### `-Skip`

This parameter ignores the first `N` items and selects the rest. It's often used with `-First` to create a "page" of results.

```powerShell
# Get processes 6 through 15 from a CPU-sorted list
Get-Process | Sort-Object CPU -Descending | Select-Object -Skip 5 -First 10
```

## Selecting Specific Properties

The `-Property` parameter is used to create new objects that contain only the specified properties from the original objects.

### Basic Property Selection

You can provide a comma-separated list of property names you want to keep.

```powerShell
# Display only the name, ID, and memory usage (Working Set) for all processes
Get-Process | Select-Object -Property ProcessName, Id, WS
```

### Calculated Properties

This is a powerful feature that lets you add new, custom properties to the output object. This is done using a hash table with `Name` and `Expression` keys.

- `Name`: The name of your new custom property.
  - `Expression`: A script block (`{...}`) that calculates the value for the new property. Remember, `$_` represents the current object.

```powerShell
# Select the file name and create a new property called 'SizeInMB'
Get-ChildItem -File |
  Select-Object -Property Name, @{Name="SizeInMB"; Expression={"{0:N2}" -f ($_.Length / 1MB)}}
```

In this example, for each file, we create a new property `SizeInMB` by taking its `Length` (in bytes), dividing by 1 megabyte, and then formatting it as a number with two decimal places (`"{0:N2}" -f ...`).
