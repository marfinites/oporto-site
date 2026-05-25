# Oporto Dancehall 2.0 — Site

**Cliente:** Pedro Lopes (interno Lastro)
**Tipo:** site institucional + arquivo + press kit
**Stack:** Next.js 16 + Tailwind 4 + TypeScript
**Status:** v1 dev (Maio 2026)

## URLs

- **Dev local SYS-1:** http://localhost:3030 (npm start)
- **Dev pretendido:** https://oporto.pmbl.pt (quando Docker activo + Traefik)
- **Prod pretendido:** https://oportodancehall.com (domínio a registar)

## Como correr

```bash
cd C:/Users/Administrator/LASTRO_GLOBAL/STACK/oporto-site
npm install
npm run dev    # dev mode com hot reload
npm run build  # production build
npm start      # production server
```

## Estrutura

```
src/
├── app/
│   ├── page.tsx           # Home (hero + manifesto + highlights + CTA partners)
│   ├── arquivo/page.tsx   # Galeria do arquivo por era (2014-2025)
│   ├── sobre/page.tsx     # História + timeline
│   ├── eventos/page.tsx   # Próximas datas + mailing list
│   ├── press/page.tsx     # Press kit completo
│   ├── contactos/page.tsx # Form + emails
│   ├── layout.tsx         # Layout root com fontes (Bebas Neue, Inter, etc)
│   └── globals.css        # Design tokens das 3 vibes
├── components/
│   ├── Nav.tsx
│   ├── Footer.tsx
│   ├── ArchiveCard.tsx    # Client component (hover-play video)
│   └── VibeSwitcher.tsx   # Toggle entre 3 looks
└── lib/
    └── archive.ts         # Curadoria dos 30+ items do arquivo

public/arquivo/             # 19MB — fotos, vídeos, thumbnails
```

## 3 Vibes visuais (data-vibe attribute)

- **caribean** (default): preto + amarelo/verde/vermelho jamaicano (Bebas Neue + Inter)
- **mono**: preto + amarelo fluor (Space Grotesk)
- **tropical**: roxo escuro + coral/sunset (Monoton + Outfit)

VibeSwitcher (canto inferior direito) permite alternar live. Persiste em localStorage.

## Conteúdo

Curadoria dos 146 ficheiros do arquivo Oporto Dancehall — ver `src/lib/archive.ts`.
Fonte original: `C:/Users/Administrator/LASTRO_GLOBAL/GESTAO/CLIENTES/OPORTO DANCEHALL/`

## TODO próximo

- [ ] Form submit handlers (/api/contact, /api/subscribe) — actualmente só POST sem backend
- [ ] PDF press kit downloadable (`/press-kit.pdf`)
- [ ] Optimização imagens (sharp instalado, mas `unoptimized: true` no next.config para evitar problema build)
- [ ] Animations subtis (Framer Motion?)
- [ ] Open Graph images (`/opengraph-image.tsx`)
- [ ] robots.txt + sitemap.ts
- [ ] Deploy Docker → Traefik → oporto.pmbl.pt

## Notas

- pnpm 11 dá conflict com builds aprovados, por isso uso npm. Lock file: package-lock.json.
- Tailwind 4 com `@theme inline` para tokens via CSS custom properties.
- Imagens com `unoptimized: true` para evitar dependência sharp em build.
- Output `standalone` no next.config para Docker.
