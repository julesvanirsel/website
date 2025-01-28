import os

def main():
    files = os.listdir()
    pages = [f for f in files if f.endswith('.html')]
    nav = read_nav('index.html')
    for page in pages:
        print(page)
        if page == 'coming-soon.html':
            nav = remove_current(nav)
        else:
            nav = select_current(nav, page)
        replace_nav(nav, page)

def read_nav(page):
    nav = []
    write = False
    f = open(page, 'r', encoding='utf-8')
    lines = f.readlines()
    f.close()
    for line in lines:
        if '<nav' in line:
            write = True
        if write:
            nav.append(line)
        if '</nav' in line:
            write = False
    return nav

def select_current(nav, page):
    id = 0
    depth = 0
    href = 'href="' + page + '"'
    for line in nav:
        if '<li' in line and '</li' not in line:
            depth += 1
            last_id = id
            last_line = line
        elif '</li' in line and '<li' not in line:
            depth -= 1
        
        if href in line:
            if 'class="current"' in line:
                return nav
            elif depth == 0:
                nav[id] = line.replace('<li>', '<li class="current">')
            else:
                nav[last_id] = last_line.replace('<li>', '<li class="current">')
        elif 'class="current' in line:
            nav[id] = line.replace(' class="current"', '')
        
        id += 1
    return nav

def remove_current(nav):
    id = 0
    for line in nav:
        if 'class="current"' in line:
            nav[id] = line.replace('<li class="current">', '<li>')
        id += 1
    return nav

def replace_nav(nav, page):
    write = True
    with open(page, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    f = open(page, 'w', encoding='utf-8')
    for line in lines:
        if '<nav' in line:
            for new_line in nav:
                f.write(new_line)
                write = False
        elif write:
            f.write(line)
        elif '</nav' in line:
            write = True
    f.close()

if __name__ == "__main__":
    main()