import os
import re

def get_used_identifiers():
    classes = set()
    ids = set()
    
    html_class_pattern = re.compile(r'class=["\']([^"\']+)["\']')
    html_id_pattern = re.compile(r'id=["\']([^"\']+)["\']')
    
    js_class_add = re.compile(r'classList\.(?:add|remove|toggle|contains)\(["\']([^"\']+)["\']\)')
    js_classname = re.compile(r'className\s*\+?=\s*["\']([^"\']+)["\']')
    
    for root, _, files in os.walk('.'):
        if 'node_modules' in root or '.git' in root:
            continue
        for file in files:
            if file.endswith('.html') or file.endswith('.js'):
                path = os.path.join(root, file)
                try:
                    with open(path, 'r', encoding='utf-8') as f:
                        content = f.read()
                        
                        for match in html_class_pattern.findall(content):
                            for cls in match.split():
                                classes.add(cls)
                                
                        for match in html_id_pattern.findall(content):
                            ids.add(match)
                            
                        if file.endswith('.js') or '<script>' in content:
                            for match in js_class_add.findall(content):
                                classes.add(match)
                            for match in js_classname.findall(content):
                                for cls in match.split():
                                    classes.add(cls)
                except:
                    pass
                    
    return classes, ids

def analyze_css():
    used_classes, used_ids = get_used_identifiers()
    
    with open('CSS/style.css', 'r', encoding='utf-8') as f:
        css_content = f.read()
        
    # Find all class definitions in CSS
    # Simple regex to find .classname { or .classname:hover { etc.
    # Exclude decimals like 0.5
    css_class_pattern = re.compile(r'\.([a-zA-Z_][a-zA-Z0-9_-]*)(?![0-9])')
    css_id_pattern = re.compile(r'#([a-zA-Z_][a-zA-Z0-9_-]*)')
    
    css_classes = set(css_class_pattern.findall(css_content))
    css_ids = set(css_id_pattern.findall(css_content))
    
    unused_classes = css_classes - used_classes
    unused_ids = css_ids - used_ids
    
    # Filter out Tailwind specific or known global classes that might be false positives
    ignore = {'active', 'hover', 'focus', 'before', 'after', 'scrolled', 'fixed-top', 'show'}
    unused_classes = {c for c in unused_classes if c not in ignore and not c.startswith('bi-')}
    
    print("Unused Classes in CSS:")
    print(sorted(list(unused_classes)))
    
    print("\nUnused IDs in CSS:")
    print(sorted(list(unused_ids)))

if __name__ == '__main__':
    analyze_css()
