# Slowburn Wood Co.

Premium, naturally-fallen firewood and ritual fire kits. This is a fast, low-cost Next.js app optimized for quick launch on Vercel.

## Tech Stack
- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- Zustand (cart state, persisted)
- No external services required at launch (Stripe/Email can be added later)

## Features
- Hero section with above-the-fold autoplay looping video
- Featured Products grid (driven by JSON content)
- Product listing and product detail pages
- Cart with local persistence (Zustand)
- Checkout placeholder (no Stripe yet)
- Contact + Newsletter endpoints (validate input, no external APIs)
- Basic SEO (metadata, sitemap, favicon/preview image)

## Getting Started
Prereqs: Node 18+ / 20+

```bash
# Install deps
npm install

# Dev server (port 4000)
PORT=4000 npm run dev

# Production build preview
npm run build && npm start -p 4000
```

Visit http://localhost:4000

## Content & Images
- Products: `content/products.json`
- Product images: `public/images/products/*`
- Favicon / OG image: `public/images/favicon.png`

Update `content/products.json` to add/edit products. Mark `featured: true` to show on the homepage.

## Hero Video
- MP4 (required): `public/videos/campfire-hero.mp4`
- Optional WebM: `public/videos/campfire-hero.webm`
- Poster: `public/images/hero-poster.jpg`

Have a .mov? Convert locally without Homebrew:
```bash
# Place source
#   public/videos/source.mov

# Convert to MP4 (uses local ffmpeg binary via npm)
npm run video:convert
```
The hero will pick up the MP4 automatically (WebM is used if present). Autoplay is muted, looping, and plays inline.

## Scripts
- `npm run dev` — start dev server
- `npm run build` — build production
- `npm start` — start production server
- `npm run video:convert` — convert `public/videos/source.mov` ➜ `public/videos/campfire-hero.mp4`

## Environment
Minimal at launch:
- `NEXT_PUBLIC_URL` (for sitemap/OG URLs). Example for local: `http://localhost:4000`

## Deploy (Vercel)
1) Push to GitHub
2) Import repo in Vercel
3) Add env var `NEXT_PUBLIC_URL` to your Vercel project (e.g. https://your-domain.com)
4) Deploy (auto on `main` pushes)

## Project Structure (trimmed)
```
app/
  page.tsx              # Homepage
  products/             # Listing + product detail
  api/                  # Contact + newsletter
components/
  sections/             # Hero, Featured, etc.
content/
  products.json         # Product data
public/
  images/               # Images (favicon.png used for OG & favicon)
  videos/               # Hero video assets
```

## Notes
- No database or payment provider is required at launch. Stripe/Resend can be enabled later.
- Images and media are local for low cost and simplicity.
