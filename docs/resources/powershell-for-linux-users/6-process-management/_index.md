---
title: "Process Management"
weight: 60
---


This section covers the essential cmdlets for viewing and interacting with processes running on the system. These are the PowerShell equivalents of common Linux commands like `ps` and `kill`.

A major advantage of PowerShell's approach is its object-oriented nature. Instead of returning plain text that needs to be parsed, `Get-Process` returns a collection of rich `Process` objects. Each object contains detailed properties like CPU usage, memory consumption (`WS`), process ID, and name. This allows for powerful sorting, filtering, and management directly through the pipeline.

The two core cmdlets covered here are:

- **`Get-Process`**: For listing and examining running processes.
- **`Stop-Process`**: For terminating processes.
