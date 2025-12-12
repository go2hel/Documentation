
# Creating Directories (mkdir)


## Command Equivalents

| Linux Command | PowerShell Cmdlet | Aliases     |
|---------------|-------------------|-------------|
| `mkdir`       | `New-Item`        | `mkdir`, `md` |

## Description

In PowerShell, the primary cmdlet for creating any new item in a provider is `New-Item`. However, for creating directories, it's almost always used via its familiar `mkdir` alias.

When using the full `New-Item` cmdlet, you must specify that you are creating a directory by using the `-ItemType Directory` parameter. The `mkdir` alias handles this for you automatically.

## Common Usage

### Creating a Single Directory

To create a new directory in your current location, simply provide the name.

```powershell
# Creates a new folder named 'MyProject'
mkdir MyProject
```

### Creating a Directory at a Specific Path

You can create a directory anywhere in the file system by providing a full or relative path.

```powershell
# Creates a 'logs' directory inside C:\Apps
mkdir C:\Apps\logs
```

### Creating Nested Directories

A major advantage of PowerShell's `mkdir` is that it can create an entire tree of nested directories in one command by default. This is equivalent to using the `-p` flag in Linux (`mkdir -p`).

```powershell
# Creates 'FolderA', 'SubFolderB', and 'NestedFolderC' all at once
mkdir C:\Temp\FolderA\SubFolderB\NestedFolderC
```

### Using the Full `New-Item` Cmdlet

While more verbose, using the full cmdlet explicitly shows what is happening. This is the command that `mkdir` is actually running behind the scenes.

```powershell
New-Item -Path ".\AnotherProject" -ItemType Directory
```
