
# Paging Through Content (less/more)


## Command Equivalents

| Linux Command                       | PowerShell Equivalent                                    |
|-------------------------------------|----------------------------------------------------------|
| `less <file>` or `cat <file> \| less` | `Get-Content <file> \| more` or `Get-Content <file> \| Out-Host -Paging` |

## Description

When the content of a file is too long to be displayed on a single screen, you need a "pager" to view it one page at a time. In Linux, the primary tools for this are `less` and `more`.

In PowerShell, this is not a built-in feature of `Get-Content` itself. Instead, it is achieved by taking the output of `Get-Content` and piping it `|` to a command that handles paging. There are two common ways to do this.

## Method 1: Piping to `more`

PowerShell includes a `more` function that behaves very much like the `more` and `less` commands from the Linux world. This is the most common and straightforward method for paging through text.

### Usage

You pipe the output of `Get-Content` (or its alias `cat`) directly to the `more` command.

```powershell
# Get the content of a large file and display it page by page
Get-Content -Path "C:\Windows\Logs\CBS
```

#### Interactive Controls

Once the pager is active, you can use the following keys:

- `Spacebar`: Display the next page.
- `Enter`: Display the next line.
- `q`: Quit and return to the prompt.

## Method 2: Piping to `Out-Host -Paging`

This is the more formal, "native PowerShell" way to achieve the same result. The `Out-Host` cmdlet is responsible for displaying things on the console, and its `-Paging` parameter tells it to do so with an interactive pager.

### Usage

For interactive use, the result is identical to using `more`.

```powerShell
# This command functions identically to the 'more' example
Get-Content -Path "C:\Windows\Logs\CBS\CBS.log" | Out-Host -Paging
```

## Which Method Should You Use?

For day-to-day interactive use, `| more` is quicker to type and perfectly effective. `Out-Host -Paging` is good to know as it's the underlying cmdlet that provides this functionality, but it offers no major advantage over `more` for simply viewing a file.
