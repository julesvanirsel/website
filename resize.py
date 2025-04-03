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
            new_img = resize_image(img_file, max_width, new_height)
            new_img_file = img_file[:-4] + '-small' + img_file[-4:]
            print(new_img_file)
            new_img.save(new_img_file)

def read_images(direc):
    files = os.listdir(direc)
    img_files = [direc + os.sep + f for f in files if (f.endswith('.png') or f.endswith('.jpg'))]
    return img_files

def read_size(img_file):
    with Image.open(img_file) as img:
        width, height = img.size
    return width, height

def resize_image(img_file, width, height):
    with Image.open(img_file) as img:
        new_size = (width, height)
        return img.resize(new_size)

if __name__ == '__main__':
    main()