
# Getting the Current Directory (pwd)


## Command Equivalents

| Linux Command | PowerShell Cmdlet | Aliases  |
|---------------|-------------------|----------|
| `pwd`         | `Get-Location`    | `pwd`, `gl` |

## Description

The `Get-Location` cmdlet, universally used via its `pwd` alias, gets an object that represents the current working directory. Its default output is a simple display of the path.

This command is functionally identical to `pwd` in Linux and is essential for orienting yourself in the file system, especially within scripts.

## Common Usage

### Basic Command

Running the command by itself prints your current path to the console.

```powershell
pwd
```

The output will look something like this:

```powershell
Path
----
C:\Users\YourUser\Documents
```

### Accessing Just the Path String

Although the command returns an object, you often just want the path as a string of text (for use in scripts, for example). You can get this by accessing the `Path` property of the object.

```powerShell

# The parentheses execute the command first
(Get-Location).Path
```

This command will output only the raw string, without the `Path` header:

`C:\Users\YourUser\Documents`

### Use in Scripts

This is commonly used inside scripts to construct full paths to files or other directories relative to the script's current location.

```PowerShell
$currentDir = (Get-Location).Path
$logFile = "$currentDir\logs\application.log"
Write-Host "Log file is located at: $logFile"
```
