
# Copying Items (cp)


## Command Equivalents

| Linux Command | PowerShell Cmdlet | Aliases             |
|---------------|-------------------|---------------------|
| `cp`          | `Copy-Item`       | `cp`, `cpi`, `copy` |

## Description

The `Copy-Item` cmdlet copies files and directories from one location to another. Its basic syntax is `Copy-Item -Path <source> -Destination <destination>`. It is the direct equivalent of the `cp` command in Linux.

A critical concept for `Copy-Item` is the use of the `-Recurse` parameter when dealing with directories that contain items.

## Common Usage

### Copying a Single File

To copy a single file, provide the source path and the destination directory.

```powershell
# Copies log.txt from the source folder to the backup folder
Copy-Item -Path "C:\source\log.txt" -Destination "D:\backup\"
```

### Copying and Renaming a File

You can copy and rename a file in a single step by specifying the new name in the destination path.

```powershell
# Copies log.txt and renames the copy to log_archive.txt
Copy-Item -Path "C:\source\log.txt" -Destination "D:\backup\log_archive.txt"
```

### Copying a Directory and Its Contents

To copy a directory and everything inside it, you must use the `-Recurse` parameter. This is a safety feature to prevent accidental copying of large directory trees.

```powershell
# Copies the entire MyProject folder and its contents
Copy-Item -Path "C:\source\MyProject" -Destination "D:\backup\" -Recurse
```

### Overwriting Existing Items

By default, `Copy-Item` will ask for confirmation if it's about to overwrite an existing file. To force the overwrite without a prompt, use the `-Force` parameter. This is also required to overwrite items with the read-only attribute.

```powershell
# Copies the file, overwriting the destination file if it already exists
Copy-Item -Path "C:\source\log.txt" -Destination "D:\backup\" -Force
```
