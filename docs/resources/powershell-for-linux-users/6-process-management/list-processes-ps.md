
# Listing Processes (ps)


## Command Equivalents

| Linux Command | PowerShell Cmdlet | Aliases   |
|---------------|-------------------|-----------|
| `ps`          | `Get-Process`     | `ps`, `gps` |

## Description

The `Get-Process` cmdlet, almost always used via its `ps` alias, retrieves the list of actively running processes on the system.

Unlike the text-based output of `ps` in Linux, `Get-Process` returns a collection of live `Process` objects. This is a significant advantage, as each object is rich with properties that can be directly inspected, sorted, and filtered without complex text parsing. Key properties include:

- `Id`: The unique process ID (PID).
- `ProcessName`: The name of the process.
- `CPU`: The total processor time used by the process in seconds.
- `WS`: The "Working Set" of the process, a measure of memory usage in bytes.

## Common Usage

### Listing All Processes

Running the command with no parameters lists all current processes in a formatted table.

```powershell
ps
```

### Getting a Specific Process by Name

You can filter for one or more processes by name directly. This is much simpler than the common `ps aux | grep <name>` pattern in Linux.

```powerShell
# Get all processes named 'chrome'
Get-Process -Name "chrome"

# A shorter, equivalent command
ps chrome
```

### Getting a Process by ID

You can retrieve a single process by its unique Process ID (PID) using the `-Id` parameter.

```powerShell
# Get the process with ID 1234
Get-Process -Id 1234
```

## Finding Resource-Intensive Processes

Because `Get-Process` returns objects, it's trivial to sort them by properties like CPU or memory usage to find top consumers.

### Top 5 Processes by CPU Usage

```powerShell
# Sort processes by CPU time (descending) and select the top 5
ps | Sort-Object -Property CPU -Descending | Select-Object -First 5
```

### Top 5 Processes by Memory Usage

```PowerShell
# Sort processes by Working Set (memory) and select the top 5
ps | Sort-Object -Property WS -Descending | Select-Object -First 5
```

### Grouping and Counting Processes

You can use the object pipeline to easily group processes by name and get a count of how many instances of each are running.

```powerShell
# Group all processes by name, then sort by the instance count
ps | Group-Object -Property ProcessName | Sort-Object -Property Count -Descending
```
