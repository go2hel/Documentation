
# Viewing Parts of Files (head & tail)


## Command Equivalents

| Linux Command | PowerShell Cmdlet & Parameters | Aliases |
|---------------|--------------------------------|---------|
| `head`        | `Get-Content -Head <N>`        | `cat -Head <N>` |
| `tail`        | `Get-Content -Tail <N>`        | `cat -Tail <N>` |
| `tail -f`     | `Get-Content -Wait`            | `cat -Wait` |

## Description

Instead of having separate commands for viewing the beginning and end of files, PowerShell integrates this functionality directly into the `Get-Content` cmdlet using parameters. This approach is highly efficient, especially for large files, as PowerShell does not need to read the entire file into memory just to display a small part of it.

## Viewing the Beginning of a File (head)

To view the first few lines of a file, use the **`-Head`** parameter, followed by the number of lines you wish to see.

```powershell
# Displays the first 10 lines of the log file
Get-Content -Path "application.log" -Head 10
```

This is useful for quickly checking the headers of a CSV file or the initial comments in a script.

## Viewing the End of a File (tail)

To view the last few lines of a file, use the `-Tail` parameter. This is most commonly used to see the most recent entries in a log file.

```powerShell
# Displays the last 20 lines of the log file
Get-Content -Path "application.log" -Tail 20
```

## Live-Monitoring a File (tail -f)

The PowerShell equivalent of the indispensable `tail -f` command is the `-Wait` parameter. When used, `Get-Content` will first display the last lines of a file (the number of lines can be specified with `-Tail`) and then keep the file open. It will display new lines in real-time as they are added to the file.

This is essential for monitoring application logs or web server access logs live. To exit the monitoring mode, press `Ctrl+C`.

```powerShell
# Show the last 5 lines and then wait for new lines to be added
Get-Content -Path "C:\inetpub\logs\access.log" -Tail 5 -Wait
```
