import os
import re

def get_used_selectors():
    classes = set()
    ids = set()
    
    html_class_pattern = re.compile(r'class=["\']([^"\']+)["\']')
    html_id_pattern = re.compile(r'id=["\']([^"\']+)["\']')
    
    # Also parse dynamically added classes or IDs in JS
    js_class_add = re.compile(r'classList\.(?:add|remove|toggle|contains)\(["\']([^"\']+)["\']\)')
    js_classname = re.compile(r'className\s*\+?=\s*["\']([^"\']+)["\']')
    
    for file in os.listdir('.'):
        if file.endswith('.html'):
            with open(file, 'r', encoding='utf-8') as f:
                content = f.read()
                for match in html_class_pattern.findall(content):
                    for cls in match.split():
                        classes.add(cls)
                for match in html_id_pattern.findall(content):
                    ids.add(match)
                for match in js_class_add.findall(content):
                    classes.add(match)
                for match in js_classname.findall(content):
                    for cls in match.split():
                        classes.add(cls)
                        
    return classes, ids

def parse_css_blocks(css_text):
    # Basic brace-counting parser to split CSS into rules, handling nested rules (like @media)
    blocks = []
    current_selector = ""
    brace_depth = 0
    buffer = ""
    
    i = 0
    n = len(css_text)
    while i < n:
        char = css_text[i]
        
        # Handle comments
        if char == '/' and i + 1 < n and css_text[i+1] == '*':
            # Find end of comment
            comment_end = css_text.find('*/', i + 2)
            if comment_end != -1:
                comment = css_text[i:comment_end + 2]
                blocks.append(('comment', comment))
                i = comment_end + 2
                continue
            
        if char == '{':
            if brace_depth == 0:
                current_selector = buffer.strip()
                buffer = ""
            else:
                buffer += char
            brace_depth += 1
        elif char == '}':
            brace_depth -= 1
            if brace_depth == 0:
                body = buffer.strip()
                blocks.append(('rule', current_selector, body))
                buffer = ""
            else:
                buffer += char
        else:
            buffer += char
            
        i += 1
        
    if buffer.strip():
        blocks.append(('text', buffer.strip()))
        
    return blocks

def is_selector_used(selector, used_classes, used_ids):
    # If selector is a media query, keyframe definition, or import/font-face, always keep it
    if selector.startswith('@'):
        return True
    
    # Always keep tag selectors (body, html, img, etc.)
    # We only remove rules if they contain class/id selectors and NONE of them are used
    has_class_or_id = False
    
    # Find all classes like .my-class (exclude numbers, like decimals .5)
    class_matches = re.findall(r'\.([a-zA-Z_][a-zA-Z0-9_-]*)', selector)
    # Find all IDs like #my-id
    id_matches = re.findall(r'#([a-zA-Z_][a-zA-Z0-9_-]*)', selector)
    
    if class_matches:
        has_class_or_id = True
        for cls in class_matches:
            if cls in used_classes:
                return True
                
    if id_matches:
        has_class_or_id = True
        for id_val in id_matches:
            if id_val in used_ids:
                return True
                
    # If it has classes or IDs, and none matched, it's unused
    if has_class_or_id:
        return False
        
    # If it's a pure tag selector (e.g. h1, body, a), keep it
    return True

def optimize_css():
    used_classes, used_ids = get_used_selectors()
    # Always ignore/keep standard state classes or common dynamic classes
    ignore_classes = {'active', 'hover', 'focus', 'before', 'after', 'scrolled', 'fixed-top', 'show', 'open', 'revealed', 'btn-outline-gold'}
    used_classes.update(ignore_classes)
    
    with open('CSS/style.css', 'r', encoding='utf-8') as f:
        css_content = f.read()
        
    blocks = parse_css_blocks(css_content)
    
    optimized_css = []
    removed_count = 0
    kept_count = 0
    
    for block in blocks:
        if block[0] == 'comment':
            optimized_css.append(block[1])
        elif block[0] == 'text':
            optimized_css.append(block[1])
        elif block[0] == 'rule':
            selector, body = block[1], block[2]
            
            # If selector is a media query, we need to parse its inner rules recursively
            if selector.startswith('@media') or selector.startswith('@container'):
                inner_blocks = parse_css_blocks(body)
                inner_optimized = []
                for inner in inner_blocks:
                    if inner[0] == 'comment':
                        inner_optimized.append(inner[1])
                    elif inner[0] == 'rule':
                        inner_sel, inner_body = inner[1], inner[2]
                        if is_selector_used(inner_sel, used_classes, used_ids):
                            inner_optimized.append(f"{inner_sel} {{\n  {inner_body}\n}}")
                            kept_count += 1
                        else:
                            removed_count += 1
                    elif inner[0] == 'text':
                        inner_optimized.append(inner[1])
                
                # Only keep media query if it has non-comment/non-empty rules inside
                inner_content = "\n".join(inner_optimized).strip()
                if inner_content:
                    optimized_css.append(f"{selector} {{\n{inner_content}\n}}")
            else:
                if is_selector_used(selector, used_classes, used_ids):
                    optimized_css.append(f"{selector} {{\n  {body}\n}}")
                    kept_count += 1
                else:
                    removed_count += 1
                    
    # Write to a test output file first
    output_path = 'CSS/style_optimized.css'
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write("\n".join(optimized_css))
        
    print(f"CSS Optimization Complete:")
    print(f"Rules Kept: {kept_count}")
    print(f"Rules Removed: {removed_count}")
    print(f"Optimized CSS size: {os.path.getsize(output_path)} bytes (Original: {os.path.getsize('CSS/style.css')} bytes)")

if __name__ == '__main__':
    optimize_css()
