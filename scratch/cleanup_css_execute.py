import re

def clean_css():
    with open('CSS/style.css', 'r', encoding='utf-8') as f:
        content = f.read()

    # Define the blocks to remove using regex
    # The regex matches the comment header and everything up to the next major section comment or end
    
    blocks_to_remove = [
        # 1. Offcanvas override
        r'/\* Bootstrap offcanvas dark override \*/.*?(?=\n/\* ──)',
        
        # 2. Sports Categories
        r'/\* ── SPORTS CATEGORIES ── \*/.*?(?=\n/\* ──)',
        
        # 3. Live Odds
        r'/\* ── LIVE ODDS \(BETFAIR STYLE IN PURPLE/GOLD\) ── \*/.*?(?=\n/\* ──)',
        
        # 4. Mobile App
        r'/\* ── MOBILE APP SECTION ── \*/.*?(?=\n/\* ──)',
        
        # 5. Nominations
        r'/\* ── NOMINATIONS ── \*/.*?(?=\n/\* ──)',
        
        # 6. FAQ Section
        r'/\* ── FAQ SECTION ── \*/.*?(?=\n/\* ──)',
        
        # 7. Recent Winners Marquee
        r'/\* Recent Winners Scroll Marquee \*/.*?(?=\n/\* Payment Partners Badges \*/)',
        
        # 8. Unused Carousel CSS (If any)
        r'/\* 2\. Custom Hero Carousel CSS \(Pure CSS Slide/Fade support\) \*/.*?(?=\n/\* 3\.)',
        
        # 9. Pure CSS Accordion
        r'/\* 3\. Pure CSS Accordion Transition \(FAQ\) \*/.*?(?=\n/\* 4\.)'
    ]
    
    original_len = len(content)
    
    # We will use re.sub with re.DOTALL
    for pattern in blocks_to_remove:
        # Some headers might have different number of dashes, so make them optional
        pattern = pattern.replace('──', '[-─]*').replace(' ', r'\s*')
        content = re.sub(pattern, '', content, flags=re.DOTALL | re.IGNORECASE)

    # Let's also remove the .offcanvas block explicitly if the regex missed it
    content = re.sub(r'/\*\s*Bootstrap offcanvas dark override\s*\*/.*?(?=\n/\*\s*[-─]+\s*HERO SECTION)', '', content, flags=re.DOTALL | re.IGNORECASE)

    # Let's also remove the specific LIVE ODDS block explicitly
    content = re.sub(r'/\*\s*[-─]+\s*LIVE ODDS \(BETFAIR STYLE IN PURPLE/GOLD\)\s*[-─]+\s*\*/.*?(?=\n/\*\s*[-─]+\s*MOBILE APP SECTION)', '', content, flags=re.DOTALL | re.IGNORECASE)
    
    content = re.sub(r'/\*\s*[-─]+\s*MOBILE APP SECTION\s*[-─]+\s*\*/.*?(?=\n/\*\s*[-─]+\s*TESTIMONIALS)', '', content, flags=re.DOTALL | re.IGNORECASE)
    
    content = re.sub(r'/\*\s*[-─]+\s*FAQ SECTION\s*[-─]+\s*\*/.*?(?=\n/\*\s*[-─]+\s*CTA SECTION)', '', content, flags=re.DOTALL | re.IGNORECASE)
    
    with open('CSS/style.css', 'w', encoding='utf-8') as f:
        f.write(content)
        
    print(f"Original size: {original_len} characters")
    print(f"New size: {len(content)} characters")
    print(f"Removed {original_len - len(content)} characters")

if __name__ == '__main__':
    clean_css()
