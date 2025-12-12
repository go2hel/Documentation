
# Moving & Renaming Items (mv)


## Command Equivalents

| Linux Command | PowerShell Cmdlet | Aliases  |
|---------------|-------------------|----------|
| `mv`          | `Move-Item`       | `mv`, `mi` |

## Description

The `Move-Item` cmdlet in PowerShell serves a dual purpose, just like the `mv` command in Linux:

1. It moves a file or directory from one location to another.
2. It renames a file or directory.

A key difference from other cmdlets is that `Move-Item` **does not require the `-Recurse` parameter** when moving a directory that contains items. The command moves the entire directory tree by default.

## Common Usage

### Moving a File

To move a file, specify its current path and the destination directory.

```powershell
# Moves the report.docx file from Downloads to Documents
Move-Item -Path "C:\Users\Default\Downloads\report.docx" -Destination "C:\Users\Default\Documents\"
```

### Moving a Directory

Moving a directory and all its contents is straightforward. `-Recurse` is not needed.

```powerShell
# Moves the entire 'MyProject' directory to an archive folder
Move-Item -Path "C:\source\MyProject" -Destination "D:\Archives\"
```

### Renaming a File

To rename a file, use `Move-Item` and specify the new name as the destination, keeping the path the same.

```powerShell
# Renames 'temp-data.csv' to 'final-data.csv' in the current directory
Move-Item -Path ".\temp-data.csv" -Destination ".\final-data.csv"
```

### Renaming a Directory

The same logic applies to renaming directories.

```powerShell
# Renames the 'Build' folder to 'Build-Archive'
Move-Item -Path ".\Build" -Destination ".\Build-Archive"
```

### Forcing a Move

If an item with the same name already exists at the destination, you can use the `-Force` parameter to overwrite it without a confirmation prompt.

```powerShell
# Moves the config file, overwriting the destination if it exists
Move-Item -Path ".\config.xml" -Destination "C:\App\Deployment\" -Force
```
