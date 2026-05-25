#!/usr/bin/env python3
"""Vectorizar o logo extraido para SVG limpo via vtracer."""
import vtracer
from pathlib import Path
from PIL import Image

BASE = Path(__file__).parent
OUT = BASE / "public"

# Upscale o bitmap antes de vectorizar — melhora dramaticamente as curvas
src = OUT / "logo-clean-black.png"
upscaled_path = OUT / "logo-clean-upscale.png"

img = Image.open(src).convert("RGBA")
print(f"Original: {img.size}")
# 6x upscale com BICUBIC para curvas suaves
upscaled = img.resize((img.size[0] * 6, img.size[1] * 6), Image.BICUBIC)
upscaled.save(upscaled_path)
print(f"Upscaled: {upscaled.size}")

# Convert to RGB (vtracer espera RGB, não RGBA)
upscaled_rgb = Image.new("RGB", upscaled.size, (255, 255, 255))
upscaled_rgb.paste(upscaled, mask=upscaled.split()[-1])
upscaled_rgb_path = OUT / "logo-clean-upscale-rgb.png"
upscaled_rgb.save(upscaled_rgb_path)

# Vectorizar usando vtracer (binary mode — perfeito para logos B/W)
svg_path = OUT / "logo-traced.svg"
vtracer.convert_image_to_svg_py(
    str(upscaled_rgb_path),
    str(svg_path),
    colormode="binary",
    mode="polygon",        # mais limpo do que spline para logos com linhas rectas
    filter_speckle=4,
    color_precision=6,
    layer_difference=16,
    corner_threshold=60,
    length_threshold=4.0,
    max_iterations=10,
    splice_threshold=45,
    path_precision=3,
)
print(f"Traced (polygon): {svg_path}")

# Versão spline (curvas suaves)
svg_spline_path = OUT / "logo-traced-spline.svg"
vtracer.convert_image_to_svg_py(
    str(upscaled_rgb_path),
    str(svg_spline_path),
    colormode="binary",
    mode="spline",
    filter_speckle=4,
    corner_threshold=60,
    length_threshold=4.0,
    splice_threshold=45,
    path_precision=4,
)
print(f"Traced (spline): {svg_spline_path}")

# Cleanup intermediate
upscaled_path.unlink()
upscaled_rgb_path.unlink()
