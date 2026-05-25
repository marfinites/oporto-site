#!/usr/bin/env python3
"""
Extrai o logo Oporto Dancehall da foto p057 (canto inferior direito).
O logo é branco sobre fundo escuro — facil de isolar via threshold.

Tambem tenta versoes alternativas com origem em p052 (watermark) e p019 (avatar).
"""
from PIL import Image, ImageFilter, ImageOps
from pathlib import Path

BASE = Path(__file__).parent
SRC = BASE / "public" / "arquivo" / "photos"
OUT = BASE / "public"

def extract_white_logo(src_path, crop_box, output_name, threshold=180, padding=10):
    """Crop region, threshold to isolate white logo, save as transparent PNG."""
    img = Image.open(src_path).convert("RGBA")
    cropped = img.crop(crop_box)
    w, h = cropped.size
    # Convert to grayscale for threshold
    gray = cropped.convert("L")
    pixels = cropped.load()
    gray_pixels = gray.load()
    # Where gray > threshold, keep white opaque; else transparent
    for y in range(h):
        for x in range(w):
            if gray_pixels[x, y] > threshold:
                pixels[x, y] = (255, 255, 255, 255)
            else:
                pixels[x, y] = (0, 0, 0, 0)
    # Pad
    final_w, final_h = w + padding * 2, h + padding * 2
    padded = Image.new("RGBA", (final_w, final_h), (0, 0, 0, 0))
    padded.paste(cropped, (padding, padding), cropped)
    padded.save(OUT / output_name)
    print(f"Saved {output_name}: {final_w}x{final_h}")

def extract_dark_logo(src_path, crop_box, output_name, threshold=100, padding=10):
    """For logos that are DARK on white background — invert before threshold."""
    img = Image.open(src_path).convert("RGBA")
    cropped = img.crop(crop_box)
    w, h = cropped.size
    gray = cropped.convert("L")
    pixels = cropped.load()
    gray_pixels = gray.load()
    for y in range(h):
        for x in range(w):
            if gray_pixels[x, y] < threshold:
                pixels[x, y] = (0, 0, 0, 255)
            else:
                pixels[x, y] = (0, 0, 0, 0)
    final_w, final_h = w + padding * 2, h + padding * 2
    padded = Image.new("RGBA", (final_w, final_h), (0, 0, 0, 0))
    padded.paste(cropped, (padding, padding), cropped)
    padded.save(OUT / output_name)
    print(f"Saved {output_name}: {final_w}x{final_h}")

def main():
    # p057 (526x526) — logo no canto inferior direito, branco sobre cinza
    # estimar coords visualmente: x=370-510, y=370-510
    extract_white_logo(
        SRC / "p057_3aniversario_16fev.jpg",
        (365, 370, 515, 520),
        "logo-p057-white.png",
        threshold=170,
    )
    # p019 (565x565) — logo no topo centro, branco sobre escuro
    # logo ocupa aprox x=200-380, y=10-200
    extract_white_logo(
        SRC / "p019_avatar.jpg",
        (195, 5, 385, 200),
        "logo-p019-white.png",
        threshold=200,
    )
    # p052 (394x590) — logo no canto inferior direito watermark
    # x=270-394, y=470-590
    extract_white_logo(
        SRC / "p052_obrigada_1.jpg",
        (275, 475, 390, 588),
        "logo-p052-white.png",
        threshold=200,
    )
    # p045 (526x526) — logo + Hard Club, no centro
    # Logo Oporto Dancehall pequeno, lado esquerdo do lockup
    extract_white_logo(
        SRC / "p045_faltam7_hardclub.jpg",
        (115, 290, 290, 405),
        "logo-p045-lockup.png",
        threshold=180,
    )
    # Versions black on transparent (for light backgrounds) - invert
    # Para usar em fundo claro, vou inverter a versao branca
    for src in ["logo-p057-white.png", "logo-p019-white.png"]:
        try:
            img = Image.open(OUT / src).convert("RGBA")
            black = Image.new("RGBA", img.size, (0, 0, 0, 0))
            pixels = img.load()
            bp = black.load()
            for y in range(img.size[1]):
                for x in range(img.size[0]):
                    r, g, b, a = pixels[x, y]
                    if a > 50:
                        bp[x, y] = (20, 20, 19, a)
            out_name = src.replace("-white.png", "-black.png")
            black.save(OUT / out_name)
            print(f"Saved {out_name}: inverted black version")
        except Exception as e:
            print(f"err invert {src}: {e}")

if __name__ == "__main__":
    main()
