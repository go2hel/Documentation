
# Removing Files & Directories (rm)


## Command Equivalents

| Linux Command | PowerShell Cmdlet | Aliases                               |
|---------------|-------------------|---------------------------------------|
| `rm`          | `Remove-Item`     | `rm`, `del`, `erase`, `rd`, `rmdir` |

## Description

The `Remove-Item` cmdlet, most often used with its `rm` alias, is the universal command for deleting any item in PowerShell. While it can be used to remove variables or registry keys, its most common use is for deleting files and directories. It is the direct and more powerful equivalent of the Linux `rm` command.

All removal aliases, including `del`, `erase`, `rd`, and `rmdir`, point to this single `Remove-Item` cmdlet.

## Key Concepts for Removal

Two parameters are essential for using `Remove-Item` effectively and safely.

- **`-Recurse`**: When deleting a directory that contains any items (files or subdirectories), you **must** use the `-Recurse` parameter. This is a critical safety feature to prevent accidental deletion of a non-empty folder. It is equivalent to the `-r` or `-R` flag in Linux.

- **`-Force`**: This parameter serves two purposes. It will force the deletion of read-only or hidden items. It will also suppress any confirmation prompts that PowerShell might otherwise show you.

### The "rm -rf" Equivalent

The famously powerful (and dangerous) `rm -rf` command in Linux is used to recursively and forcefully remove a directory. The direct equivalent in PowerShell is the combination of the `-Recurse` and `-Force` parameters.

- **Linux:** `rm -rf <directory>`
- **PowerShell:** `rm -Recurse -Force <directory>`

This command should be used with the same level of caution in both shells.

## Common Usage

### Removing a Single File

To delete a single file, simply provide its name.

```powershell
# Deletes the file report.docx
rm report.docx
```

### Removing Multiple Files with Wildcards

You can use wildcards (`*`) to remove multiple files that match a pattern.

```powerShell
# Deletes all files in the current directory that end with .tmp
rm *.tmp
```

### Removing a Directory and Its Contents

To remove a directory and everything inside it, combine the path with the `-Recurse` parameter.

```powerShell
# Deletes the 'TempProject' folder and all its contents
rm TempProject -Recurse
```

### Forcing Removal of a Directory

To delete a directory and its contents without any prompts, and to ensure read-only items are also deleted, use both `-Recurse` and `-Force`.

```powerShell
# The PowerShell equivalent of 'rm -rf TempProject'
rm TempProject -Recurse -Force
```
