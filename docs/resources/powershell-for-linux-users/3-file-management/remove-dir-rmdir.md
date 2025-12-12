
# Removing Directories (rmdir)


## Command Equivalents

| Linux Command | PowerShell Cmdlet | Aliases     |
|---------------|-------------------|-------------|
| `rmdir`       | `Remove-Item`     | `rmdir`, `rd` |

## Description

In PowerShell, `rmdir` is an alias for the versatile `Remove-Item` cmdlet. While in Linux `rmdir` can only delete empty directories, PowerShell's `rmdir` can remove both empty and non-empty directories, provided you use the correct parameters.

The most critical concept to understand is the mandatory use of the **`-Recurse`** parameter for deleting directories that contain any files or subdirectories.

## Common Usage

### Removing an Empty Directory

If a directory is empty, you can remove it by simply providing its name. This behavior is identical to the Linux `rmdir` command.

```powershell
# Removes the directory 'OldLogs' only if it is empty
rmdir OldLogs
```

### Removing a Non-Empty Directory (The `-Recurse` Parameter)

If you attempt to use `rmdir` on a directory that contains items, PowerShell will stop with an error to prevent accidental data loss.

```powerShell
# This command will FAIL if 'MyProject' contains any files or folders
rmdir MyProject

# ERROR: Remove-Item: ...Directory C:\Users\Test\MyProject is not empty.
```

To successfully remove a directory and all of its contents, you must use the `-Recurse` parameter. This is the equivalent of `rm -r` in Linux.

```powerShell
# This will delete the 'MyProject' directory and everything inside it
rmdir MyProject -Recurse
```

### Forcing a Removal

The `-Force` parameter can be combined with `-Recurse` to delete directories that have read-only items or to bypass other protections, though this is less common.

```powerShell
# Deletes a directory and its contents, forcing the removal of any read-only items
rmdir MyProject -Recurse -Force
```
