import os

def main():
    files = os.listdir()
    pages = [f for f in files if f.endswith('.html')]
    footer = read_footer('index.html')
    for page in pages:
        print(page)
        replace_footer(footer, page)

def read_footer(page):
    footer = []
    write = False
    f = open(page, 'r', encoding='utf-8')
    lines = f.readlines()
    f.close()
    for line in lines:
        if '<!-- footer -->' in line:
            write = True
        if write:
            footer.append(line)
    return footer

def replace_footer(footer, page):
    write = True
    with open(page, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    f = open(page, 'w', encoding='utf-8')
    for line in lines:
        if '<!-- footer -->' in line:
            write = False
            for new_line in footer:
                f.write(new_line)
        elif write:
            f.write(line)
    f.close()

if __name__ == "__main__":
    main()