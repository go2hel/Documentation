---
title: "Getting Help (man)"
cascade:
  type: docs
---

## Command Equivalents

| Linux Command | PowerShell Cmdlet | Aliases     |
|---------------|-------------------|-------------|
| `man`         | `Get-Help`        | `help`, `man` |

## Description

The `Get-Help` cmdlet is arguably the most important command to learn in PowerShell. It is your built-in guide to every other command, function, and concept in the shell. Using `Get-Help` effectively is the key to discovering new commands and understanding how to use them without having to search the web.

## First-Time Use: `Update-Help`

PowerShell's help files are not always shipped with the operating system and can become outdated. To ensure you have the latest information, you should run the `Update-Help` cmdlet.

You must run this command from a PowerShell session with **Administrator privileges**.

```powershell
# Run this in an Administrator PowerShell window
Update-Help
```

You only need to do this once, and then perhaps every few months to refresh the content.

## Common Usage

### Getting Help for a Cmdlet

To get the main help page for any command, simply provide its name.

```powershell
# Get help for the Get-Process cmdlet
Get-Help Get-Process

# Using the man alias is common for Linux users
man Get-Process
```

### Viewing Practical Examples (`-Examples`)

Often, the fastest way to learn a command is to see it in action. The `-Examples` parameter shows several practical, real-world examples of how the command is used.

```powershell
# Show only the usage examples for Copy-Item
Get-Help Copy-Item -Examples
```

### Viewing Full Detailed Help (`-Full`)

To see every piece of information about a cmdlet—including a detailed description of every parameter, its data type, and default values—use the `-Full` switch.

```powershell
# Get the complete, detailed help file for Stop-Process
Get-Help Stop-Process -Full
```

### Opening Help in a Web Browser (`-Online`)

For the most current and often better-formatted version of a help file, use the `-Online` parameter. This will open the official Microsoft documentation for the command in your default web browser.

```powershell
# Open the official documentation page for Select-String
Get-Help Select-String -Online
```

### Getting Help on PowerShell Concepts

`Get-Help` can also retrieve conceptual "About" topics. These are detailed explanations of core PowerShell concepts.

```powershell
# Get information about PowerShell's execution policies
Get-Help about_Execution_Policies
```
