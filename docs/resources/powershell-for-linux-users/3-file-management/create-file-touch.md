
# Creating Empty Files (touch)


## Command Equivalents

| Linux Command | PowerShell Cmdlet(s)        | Aliases |
|---------------|-----------------------------|---------|
| `touch`       | `New-Item`, `Set-Content` | None    |

## Description

PowerShell does not have a direct equivalent or a built-in alias for the Linux `touch` command. The two primary functions of `touch`—creating a new, empty file and updating an existing file's timestamp—are handled by different methods in PowerShell.

This page focuses on the most common use case: creating a new, empty file.

## Methods for Creating an Empty File

There are several common ways to create a zero-byte file in PowerShell.

### Method 1: Using `New-Item`

This is the most explicit or "proper" method. You use the same `New-Item` cmdlet as for creating directories, but you specify the `-ItemType` as `File`.

```powershell
# Creates a new empty file named config.json
New-Item -Path ".\config.json" -ItemType File
```

### Method 2: Using `Set-Content` (Common Shortcut)

A very popular and often quicker method is to use `Set-Content`. This cmdlet is designed to write content to a file, but if you provide no content (`$null`), it creates an empty file.

```powerShell
# Creates a new empty file, overwriting it if it exists
Set-Content -Path ".\app.log" -Value $null
```

### Method 3: Using Redirection (Quickest)

For interactive use, the fastest way to create an empty file is often with the output redirection operator `>`. By redirecting "nothing" (`$null`) to a file, you create a zero-byte file.

```powerShell
# Creates a new empty file named empty.tmp
$null > empty.tmp
```

## Updating Timestamps

For completeness, the other function of `touch` is to update a file's `LastWriteTime` timestamp. In PowerShell, this is done by directly manipulating the property on the file object.

```powerShell
# Get the file object and set its LastWriteTime property to the current time
(Get-Item ".\my-file.txt").LastWriteTime = Get-Date
```
