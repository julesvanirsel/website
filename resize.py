import os
from PIL import Image

def main():
    direc = 'images'
    max_width = 1920
    img_files = read_images(direc)
    for img_file in img_files:
        width, height = read_size(img_file)
        if width > max_width:
            new_height = int(max_width * height / width)



def read_images(direc):
    files = os.listdir(direc)
    img_files = [direc + os.sep + f for f in files if (f.endswith('.png') or f.endswith('.jpg'))]
    return img_files

def read_size(img_file):
    with Image.open(img_file) as img:
        width, height = img.size
    return width, height

if __name__ == '__main__':
    main()