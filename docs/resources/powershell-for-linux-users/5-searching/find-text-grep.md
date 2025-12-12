
# Finding Text in Files (grep)


## Command Equivalents

| Linux Command             | PowerShell Cmdlet & Parameters                  | Aliases |
|---------------------------|-------------------------------------------------|---------|
| `grep "pattern" <file>`   | `Select-String -Pattern "pattern" -Path <file>` | `sls`     |

## Description

`Select-String` is the powerful PowerShell equivalent of `grep`. It is designed to search for text patterns inside strings and files.

A key difference from `grep` is that `Select-String` doesn't just return the matching text line; it returns a **`MatchInfo` object**. This object contains rich information about each match found, including the filename, the line number, and the line's content, making the results easy to use programmatically.

By default, searches are **case-insensitive**.

## Common PowerShell Pattern: Find then Grep

For recursive searching (the equivalent of `grep -r`), the most common and powerful pattern in PowerShell is to first **find the files** you want to search using `Get-ChildItem` and then **pipe the results** to `Select-String`.

```powershell
# General Pattern
Get-ChildItem <path-and-filters> | Select-String -Pattern "my-text"
```

This approach is highly flexible, allowing you to use all the power of `Get-ChildItem`'s filtering capabilities to select a precise set of files before searching within them.

## Common Usage

### Searching in a Single File

To search for a simple text pattern in one file, use the `-Pattern` and `-Path` parameters.

```powerShell
# Find all lines containing "Error" in the application log
Select-String -Path ".\application.log" -Pattern "Error"
```

### Searching Recursively (The `grep -r` Equivalent)

This example finds all `.xml` files in the current directory and its subdirectories, then searches inside them for the text "connectionString".

```powerShell
# Find all XML files, then search within them
Get-ChildItem -Recurse -Filter "*.xml" | Select-String -Pattern "connectionString"
```

### Case-Sensitive Search

To perform a case-sensitive search, add the `-CaseSensitive` switch.

```powerShell
# Find the exact text "ADMIN", not "admin" or "Admin"
Select-String -Path ".\permissions.log" -Pattern "ADMIN" -CaseSensitive
```

### Inverting the Match (`grep -v`)

To find lines that do not contain a pattern, use the `-NotMatch` parameter.

```powerShell
# Find all lines that do not contain the word "deprecated"
Get-Content ".\config.ini" | Select-String -Pattern "deprecated" -NotMatch
```
