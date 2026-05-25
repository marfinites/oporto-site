#!/usr/bin/env python3
"""Refinar o logo extraido — apertar crop, limpar noise, criar versoes finais."""
from PIL import Image, ImageFilter, ImageOps, ImageDraw
from pathlib import Path

BASE = Path(__file__).parent
OUT = BASE / "public"
SRC = BASE / "public" / "arquivo" / "photos"

def auto_crop(img):
    """Crop to bounding box of non-transparent pixels."""
    bbox = img.getbbox()
    if bbox:
        return img.crop(bbox)
    return img

def clean_extract(src_path, crop_box, threshold=200, min_island=20):
    """Extract white-on-dark logo, threshold, remove small islands."""
    img = Image.open(src_path).convert("RGB")
    cropped = img.crop(crop_box)
    gray = cropped.convert("L")
    # Threshold
    binary = gray.point(lambda p: 255 if p > threshold else 0)
    # Slight dilate (median filter to remove specks)
    binary = binary.filter(ImageFilter.MedianFilter(3))
    # To alpha-mask: white = opaque
    rgba = Image.new("RGBA", binary.size, (0, 0, 0, 0))
    rgba_pixels = rgba.load()
    bin_pixels = binary.load()
    for y in range(binary.size[1]):
        for x in range(binary.size[0]):
            if bin_pixels[x, y] > 128:
                rgba_pixels[x, y] = (255, 255, 255, 255)
    rgba = auto_crop(rgba)
    return rgba

def make_black_version(white_png):
    """Recolor white→black, keep alpha."""
    img = white_png.convert("RGBA")
    pixels = img.load()
    for y in range(img.size[1]):
        for x in range(img.size[0]):
            r, g, b, a = pixels[x, y]
            if a > 30:
                pixels[x, y] = (20, 20, 19, a)
    return img

def make_red_version(white_png, color=(227, 6, 19)):
    img = white_png.convert("RGBA")
    pixels = img.load()
    for y in range(img.size[1]):
        for x in range(img.size[0]):
            r, g, b, a = pixels[x, y]
            if a > 30:
                pixels[x, y] = (*color, a)
    return img

def main():
    # Best source: p019 avatar — circulo mais grande e centrado
    # Original 565x565, logo roughly x=190-385, y=5-205
    logo_white = clean_extract(
        SRC / "p019_avatar.jpg",
        (185, 0, 390, 210),
        threshold=205,
    )
    logo_white.save(OUT / "logo-final-white.png")
    print(f"logo-final-white.png: {logo_white.size}")

    logo_black = make_black_version(logo_white.copy())
    logo_black.save(OUT / "logo-final-black.png")
    print(f"logo-final-black.png: {logo_black.size}")

    logo_red = make_red_version(logo_white.copy())
    logo_red.save(OUT / "logo-final-red.png")
    print(f"logo-final-red.png: {logo_red.size}")

    # Also a yellow/dancehall version
    logo_yellow = make_red_version(logo_white.copy(), color=(255, 214, 10))
    logo_yellow.save(OUT / "logo-final-yellow.png")
    print(f"logo-final-yellow.png: {logo_yellow.size}")

if __name__ == "__main__":
    main()
