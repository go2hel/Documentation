---
title: "Searching for Files & Text"
weight: 50
---


Searching is one of the most powerful capabilities of any command-line shell. This section covers the PowerShell equivalents of the indispensable Linux tools `find` (for finding files) and `grep` (for finding text within files).

PowerShell's approach leverages its object-oriented nature:

1. **Finding Files:** Instead of a separate `find` command, PowerShell expands the functionality of `Get-ChildItem` (`ls`) with parameters like `-Recurse` and `-Filter`.
2. **Finding Text:** The `grep` equivalent is `Select-String`. The common pattern is to first get a collection of files and then pipe them to `Select-String` to perform the search.

This section will detail both of these core scenarios.
