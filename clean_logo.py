#!/usr/bin/env python3
"""Mask circular ao logo extraido — remove tudo fora do circulo principal."""
from PIL import Image, ImageDraw
from pathlib import Path

BASE = Path(__file__).parent
OUT = BASE / "public"

def circular_mask(img, radius_factor=0.98):
    """Apply circular mask to image, keep only content inside the circle."""
    w, h = img.size
    # Square it - take min dim
    side = min(w, h)
    # Center crop to square
    left = (w - side) // 2
    top = (h - side) // 2
    square = img.crop((left, top, left + side, top + side))
    # Create circular mask
    mask = Image.new("L", (side, side), 0)
    draw = ImageDraw.Draw(mask)
    radius = int(side * radius_factor / 2)
    cx, cy = side // 2, side // 2
    draw.ellipse((cx - radius, cy - radius, cx + radius, cy + radius), fill=255)
    # Apply mask to alpha channel
    result = square.convert("RGBA")
    pixels = result.load()
    mask_pixels = mask.load()
    for y in range(side):
        for x in range(side):
            r, g, b, a = pixels[x, y]
            new_a = min(a, mask_pixels[x, y])
            pixels[x, y] = (r, g, b, new_a)
    return result

def recolor(img, color):
    img = img.convert("RGBA")
    pixels = img.load()
    for y in range(img.size[1]):
        for x in range(img.size[0]):
            r, g, b, a = pixels[x, y]
            if a > 30:
                pixels[x, y] = (*color, a)
    return img

def main():
    src = Image.open(OUT / "logo-final-white.png").convert("RGBA")
    # Crop to circle centered on top portion (logo center is ~middle-top)
    # Image is 160x189 — square to 160x160 cropping from top
    cropped = src.crop((0, 0, 160, 160))
    clean = circular_mask(cropped, radius_factor=1.0)
    clean.save(OUT / "logo-clean-white.png")
    print(f"logo-clean-white.png: {clean.size}")

    black = recolor(clean.copy(), (20, 20, 19))
    black.save(OUT / "logo-clean-black.png")
    print(f"logo-clean-black.png: {black.size}")

    red = recolor(clean.copy(), (227, 6, 19))
    red.save(OUT / "logo-clean-red.png")
    print(f"logo-clean-red.png: {red.size}")

    yellow = recolor(clean.copy(), (255, 214, 10))
    yellow.save(OUT / "logo-clean-yellow.png")
    print(f"logo-clean-yellow.png: {yellow.size}")

if __name__ == "__main__":
    main()
