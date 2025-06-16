---
title: "Changing Directories (cd)"
cascade:
  type: docs
---

## Command Equivalents

| Linux Command | PowerShell Cmdlet | Aliases  |
|---------------|-------------------|----------|
| `cd`          | `Set-Location`    | `cd`, `sl` |

## Description

The `Set-Location` cmdlet is used to change your current working directory to a specified location. Its alias, `cd`, works almost identically to the `cd` command in Linux, making it one of the easiest commands to transition.

You can navigate using absolute paths (the full path from the root) or relative paths (based on your current location).

## Common Usage

### Navigating to an Absolute Path

You can provide the full path to move directly to any directory.

```powershell
# Navigate to the System32 folder in Windows
cd C:\Windows\System32
```

### Navigating with a Relative Path

Relative paths allow you to move around from your current location.

```powerShell
# Move up one level to the parent directory
cd ..

# Move into a subdirectory named 'MyProject'
cd MyProject
```

### Handling Paths with Spaces

If a directory name contains spaces, you must enclose the entire path in quotes (`"`). This is a critical rule in PowerShell and most other shells.

```powerShell
# Navigate to the 'Program Files' directory
cd "C:\Program Files"
```

### Switching Drives

On Windows, you can quickly change your current location to a different drive by simply typing the drive letter followed by a colon.

```powerShell

# Switch to the D: drive
D:
```
