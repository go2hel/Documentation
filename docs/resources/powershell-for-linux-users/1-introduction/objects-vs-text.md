# Objects vs. Text

## The PowerShell Paradigm Shift

The single most important concept to grasp when moving from a Linux shell to PowerShell is the difference in what commands output. This fundamental change affects how you filter, process, and automate tasks.

### In Traditional Shells (like Bash)

Commands in shells like Bash primarily output **streams of unstructured text**. When you run `ls -l`, you get back a multi-line string of characters formatted for human eyes. To use this data programmatically, you must "parse" that text using other tools like `grep`, `awk`, or `sed` to extract the information you need, often by relying on column numbers or regular expressions. This can be powerful, but it's often complex and fragile.

### In PowerShell

Cmdlets (PowerShell commands) output **structured .NET objects**. When you run `Get-ChildItem` (the equivalent of `ls`), you don't get back text; you get a collection of `FileInfo` and `DirectoryInfo` objects. Each object is a container of data with well-defined properties.

- **`.Name`**: The file or directory name.
- **`.Length`**: The size of the file in bytes.
- **`.LastWriteTime`**: The date and time the file was last modified.
- **`.IsReadOnly`**: A true/false value indicating if the file is read-only.
- ...and many more.

You can access these properties directly without parsing any text.

### A Practical Example

Let's say you want to get the names of all files in the current directory that are larger than 20 kilobytes.

#### The Bash Approach

```bash
# We have to parse the text output of ls -l.
# We check if column 5 (size) is greater than 20480, then print column 9 (name).
# This is fragile; it breaks if the output of ls -l ever changes.
ls -l | awk '$5 > 20480 {print $9}'
```

#### The PowerShell Approach

```powershell
# We get file objects and filter them based on a property.
# This is robust because it uses named properties, not text positions.
Get-ChildItem | Where-Object { $_.Length -gt 20KB } | Select-Object Name
```

## Why It Matters

- No More Fragile Parsing: You no longer need to rely on text manipulation for everyday tasks.
- Discoverability: You can easily inspect an object to see all of its available properties and methods using the `Get-Member` cmdlet.
- Rich Pipeline: The pipeline becomes much more powerful, as you can pass rich, structured data between commands instead of just text.
