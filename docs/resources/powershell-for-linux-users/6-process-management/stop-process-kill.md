
# Stopping Processes (kill)


## Command Equivalents

| Linux Command | PowerShell Cmdlet | Aliases      |
|---------------|-------------------|--------------|
| `kill`        | `Stop-Process`    | `kill`, `spps` |

## Description

The `Stop-Process` cmdlet is used to terminate one or more running processes. It is the PowerShell equivalent of the `kill` command in Linux and is often used with its `kill` alias for familiarity.

You can stop a process in several ways, most commonly by specifying its name, its process ID (PID), or by passing a process object directly to it through the pipeline.

## Ways to Target a Process

### By Name (`-Name`)

You can stop a process by providing its name. Be aware that this will stop **all** running processes that share that name.

### By ID (`-Id`)

To target a single, specific instance of a process, you can use its unique process ID. This is useful when multiple processes have the same name (like web browser tabs).

### By Piping (`Get-Process | Stop-Process`)

This is a powerful and common pattern in PowerShell. You can use `Get-Process` with complex filters to find specific processes, and then pipe those process objects directly to `Stop-Process` to terminate them.

## Common Usage

### Stopping a Process by Name

This is the most direct way to stop an application.

```powershell
# Stops all running instances of Notepad
Stop-Process -Name "notepad"

# Using the kill alias is shorter
kill -Name "notepad"
```

### Stopping a Process by ID

First, find the ID using `ps`, then use that ID to stop the specific process.

```powerShell
# Let's say 'ps' shows that a specific instance of chrome has ID 9876
Stop-Process -Id 9876

# Using the alias
kill -Id 9876
```

### Stopping a Process via the Pipeline

This method is useful for more advanced scenarios. For example, to stop all instances of Microsoft Edge that are not responding.

```powerShell
# First, find all Edge processes, then filter for those whose 'Responding' property is false, then stop them.
Get-Process -Name "msedge" | Where-Object { -not $_.Responding } | Stop-Process
```

### Forcing a Stop

If a process is not terminating cleanly, you can use the `-Force` parameter to attempt a more forceful shutdown.

```powerShell
kill -Name "frozen_app" -Force
```

### Requesting Confirmation

For safety, especially in scripts, you can use the `-Confirm` switch. This will cause PowerShell to prompt you for confirmation before it stops each process.

```PowerShell
# PowerShell will ask "Are you sure?" for each Chrome process it finds.
kill -Name "chrome" -Confirm
```
