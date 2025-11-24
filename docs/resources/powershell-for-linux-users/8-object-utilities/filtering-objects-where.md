---
title: "Filtering Objects (Where-Object)"
cascade:
  type: docs
---

## Command Equivalents

| Linux Task                                       | PowerShell Cmdlet                  | Aliases      |
|--------------------------------------------------|------------------------------------|--------------|
| Filtering text output (e.g., `... \| grep "text"`) | `... \| Where-Object { <condition> }` | `where`, `?` |

## Description

The `Where-Object` cmdlet is a cornerstone of PowerShell, acting as a universal filter for any collection of objects. Its purpose is to examine each object coming through the pipeline and let only those that meet a specific condition pass through to the next command.

It is PowerShell's object-oriented answer to text-based filtering tools like `grep` and `awk`. Instead of matching text patterns, you filter based on the actual properties and values of the objects.

## The Script Block and `$_`

The filtering condition for `Where-Object` is defined inside a **script block**, which is enclosed in curly braces `{ ... }`.

Inside this script block, you use the special automatic variable **`$_`** to refer to **"the current object being processed"**. In PowerShell 7 and newer, you can also use the more descriptive `$PSItem`.

To build the condition, you compare a property of the current object (`$_.PropertyName`) to a value using one of PowerShell's comparison operators.

### Common Comparison Operators

| Operator | Description                    | Example                       |
|----------|--------------------------------|-------------------------------|
| `-eq`    | Equal to                       | `$_.Status -eq 'Running'`     |
| `-ne`    | Not equal to                   | `$_.Name -ne 'System'`        |
| `-gt`    | Greater than                   | `$_.Length -gt 1MB`           |
| `-lt`    | Less than                      | `$_.CPU -lt 10`               |
| `-ge`    | Greater than or equal to       | `$_.Count -ge 5`              |
| `-le`    | Less than or equal to          | `$_.WS -le 500MB`             |
| `-like`  | Wildcard comparison (`*`, `?`) | `$_.Name -like 'sql*'`        |
| `-match` | Regular expression matching    | `$_.Name -match '^svc\d+'`    |
| `-not`   | Logical NOT (reverses a check) | `-not ($_.Name -like 'System*')` |

## Common Usage

### Filtering Files by Size

This example finds all files larger than 10 megabytes.

```powershell
Get-ChildItem -File -Recurse | Where-Object { $_.Length -gt 10MB }
```

### Filtering for Running Services

This command gets all system services and filters for only those that are currently in the 'Running' state.

```powerShell
Get-Service | Where-Object { $_.Status -eq 'Running' }
```

### Filtering Processes Using Wildcards

This command finds all running processes whose names start with "sql".

```powerShell
# Using the '?' alias for brevity
Get-Process | ? { $_.ProcessName -like "sql*" }
```

### Using Multiple Conditions

You can combine conditions using `-and` or `-or`. It's a good practice to enclose each condition in parentheses `()` for clarity.

```powerShell
# Find svchost processes that are using more than 100MB of memory
Get-Process | where { ($_.ProcessName -eq "svchost") -and ($_.WS -gt 100MB) }
```
