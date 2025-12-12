
# Finding Files (find)


## Command Equivalents

| Linux Command             | PowerShell Equivalent                     |
|---------------------------|-------------------------------------------|
| `find . -name "*.txt"`    | `Get-ChildItem -Recurse -Filter "*.txt"`  |

## Description

PowerShell does not have a separate `find` command. Instead, this functionality is built directly into `Get-ChildItem` (the same command aliased to `ls` and `gci`) through the use of specific parameters. This provides a more integrated and consistent way to both list and find files.

The core idea is to use `Get-ChildItem` and tell it to look recursively and filter the results based on your criteria.

## Key Parameters for Finding Files

- **`-Recurse`**: This is the most important parameter for finding files. It tells `Get-ChildItem` to search not only in the current directory but in all of its subdirectories as well, traversing the entire directory tree from the starting point.

- **`-Filter`**: This is the most efficient parameter for finding files that match a simple wildcard pattern. The filtering is done by the file system provider, which is generally faster than retrieving all files and then filtering them in PowerShell.

- **`-Include` / `-Exclude`**: These parameters provide more flexibility than `-Filter` and can accept multiple patterns in an array. They are used to specify which items should be explicitly included or excluded from the results. Note: When using `-Include`, you must also use `-Recurse` for it to be effective in subdirectories.

- **`-File` / `-Directory`**: These switches limit the search results to only files or only directories, respectively.

## Common Usage

### Finding Files by Extension

This is the most common use case: finding all files with a specific extension in a directory tree.

```powershell
# Find all PowerShell script files on the C: drive
Get-ChildItem -Path "C:\" -Recurse -Filter "*.ps1"
```

### Finding Files by a Specific Name

The filter can also be a specific file name.

```powerShell
# Search the entire 'Users' folder for a specific configuration file
Get-ChildItem -Path "C:\Users" -Recurse -Filter "user.config"
```

### Finding Only Directories

You can search for directories with a specific name by combining `-Directory` and `-Filter`.

```powerShell
# Find all directories named 'logs' under the Program Files folder
Get-ChildItem -Path "C:\Program Files" -Recurse -Directory -Filter "logs"
```

### Finding Multiple Types of Files

For more complex patterns, `-Include` is useful. Remember to use `-Recurse` with it.

```powerShell
# Find all Word and Excel documents in the My Documents folder tree
Get-ChildItem -Path ".\Documents" -Recurse -Include "*.docx", "*.xlsx"
```
