# Oporto Dancehall 2.0

> Site do regresso da festa de dancehall do Porto. 11 anos de história, novo capítulo.

## Stack

- Next.js 16 (App Router, standalone output)
- Tailwind CSS 4
- TypeScript
- Zero CMS (conteúdo curado em `src/lib/archive.ts`)

## Páginas

| Rota | O que tem |
|---|---|
| `/` | Hero + manifesto + 12 highlights + CTA partners |
| `/arquivo` | Galeria 30+ items organizada por era (2014-2025) |
| `/sobre` | História + timeline 2014→2026 |
| `/eventos` | Próximas datas (placeholders) + mailing list |
| `/press` | Press Kit completo (bio, factos, cobertura, fotos) |
| `/contactos` | Form + emails directos |

## 3 Vibes

Botão flutuante (canto inferior direito) alterna live entre:
1. **Caribean** — dark + neon jamaicano (default)
2. **Mono** — preto + amarelo fluor minimalista
3. **Tropical** — retro sunset roxo/coral

## Dev

```bash
npm install
npm run dev
# Abrir http://localhost:3000
```

## Build

```bash
npm run build
npm start
```

## Deploy

Ver `CLAUDE.md` para deploy via Docker + Traefik (`oporto.pmbl.pt`) ou Vercel.
