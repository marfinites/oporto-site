#!/usr/bin/env python3
"""Analisar o bitmap do logo para construir SVG limpo manualmente."""
from PIL import Image
import numpy as np
from pathlib import Path

BASE = Path(__file__).parent
src = BASE / "public" / "logo-clean-black.png"

img = Image.open(src).convert("RGBA")
arr = np.array(img)
alpha = arr[:, :, 3]
print(f"Image: {arr.shape}")
print(f"Has alpha non-zero pixels: {(alpha > 0).sum()}")

# Find centroid of "logo" region
ys, xs = np.where(alpha > 100)
print(f"Bounding box: x=[{xs.min()},{xs.max()}] y=[{ys.min()},{ys.max()}]")
print(f"Center: ({xs.mean():.1f}, {ys.mean():.1f})")

# Detect circle (most opaque pixels are on outer ring)
# Try Hough-like approach: count opaque pixels per radius around image center
h, w = alpha.shape
cy, cx = h // 2, w // 2
print(f"Image center: ({cx}, {cy})")

# For each ring radius, count edge pixels
yy, xx = np.ogrid[:h, :w]
dist = np.sqrt((xx - cx) ** 2 + (yy - cy) ** 2)
print("Ring density profile:")
for r in range(0, 85, 5):
    inner = dist >= r
    outer = dist < r + 3
    mask = inner & outer
    count = (alpha[mask] > 100).sum()
    print(f"  r={r:3d}-{r+3:3d}: {count} pixels")

# Save vertical slice down middle - where is the Torre Clérigos
print("\nVertical slice (center column, top to bottom):")
col = alpha[:, cx]
last_nonzero = -1
for y in range(h):
    if col[y] > 100:
        if last_nonzero != y - 1:
            print(f"  y={y}: pixel start (gap before)")
        last_nonzero = y

# Find letter rows
print("\nHorizontal density (counts per row):")
for y in range(h):
    count = (alpha[y, :] > 100).sum()
    if count > 30:
        print(f"  y={y}: {count} px")
