import os
import re

def remove_front_matter(directory):
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith(".md"):
                filepath = os.path.join(root, file)
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # Regex to match YAML front matter (between --- and ---)
                # It handles the case where the file starts with ---
                new_content = re.sub(r'^---\n.*?\n---\n', '', content, flags=re.DOTALL)
                
                if content != new_content:
                    with open(filepath, 'w', encoding='utf-8') as f:
                        f.write(new_content)
                    print(f"Processed: {filepath}")

if __name__ == "__main__":
    target_dir = r"c:\VS Code Projects\Documentation\docs\resources\powershell-for-linux-users"
    remove_front_matter(target_dir)
