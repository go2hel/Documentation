---
title: "Redirection Operators (>, >>)"
cascade:
  type: docs
---

## Description

Redirection operators in PowerShell control where the output of a command goes and where its input comes from. They allow you to divert the standard output stream (what you see on the screen) to a file.

While several redirection operators exist, the most commonly used by far are `>` and `>>` for redirecting output to files.

## Output Redirection: `>` (Overwrite)

The `>` operator takes the output of a command and writes it to a specified file.

**Behavior:**

- If the file does not exist, it will be created.
- If the file **does exist**, its contents will be **completely overwritten** with the new output. No warning is given.

### Usage

This is often used to save the results of a command for later inspection.

```powershell
# Get a list of all services and save it to services.txt
# If services.txt already exists, it will be replaced.
Get-Service > services.txt
```

## Append Redirection: `>>` (Append)

The `>>` operator also sends a command's output to a file, but it adds the new output to the end of the file instead of overwriting it.

**Behavior**:

- If the file does not exist, it will be created.
- If the file does exist, the new output will be appended to the end of the existing content.

### Usage

This is ideal for creating log files or adding new information to a file over time.

```powerShell
# Add a timestamped entry to the end of a log file
"User logged off at $(Get-Date)" >> activity.log
```

## Relationship to `Out-File`

The `>` and `>>` operators are essentially convenient shortcuts for the `Out-File` cmdlet.

- `>` is like piping to `Out-File`.
- `>>` is like piping to `Out-File -Append`.

Using the `Out-File` cmdlet directly can be useful if you need more control, such as specifying the file encoding.

```powerShell
# This is the cmdlet equivalent of 'Get-Process > processes.txt'
Get-Process | Out-File -FilePath processes.txt

# This is the cmdlet equivalent of '... >> activity.log'
"User action" | Out-File -FilePath activity.log -Append
```

## A Note on Input Redirection (`<`)

In shells like Bash, the `<` operator is commonly used to take input from a file. In PowerShell, this is very rarely used.

The idiomatic PowerShell way to get content from a file is to use the `Get-Content` cmdlet, which reads the file and streams its content as objects into the pipeline. This is more flexible and consistent with the rest of the PowerShell ecosystem.

Legacy/Non-PowerShell way: `some-old-program.exe < input.txt`
The PowerShell Way: `Get-Content input.txt | some-powershell-cmdlet`
