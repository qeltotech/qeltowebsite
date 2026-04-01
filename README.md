# Qelto Premium Website

High-end business-focused website for Qelto, built with Next.js static export + Tailwind + Framer Motion + React Three Fiber.

## What this version focuses on
- Dark, futuristic, corporate presentation
- Conversion-oriented hero and CTA flow
- Clear service communication for business buyers
- Structured sections similar to modern agency/SaaS websites

## Stack
- Next.js (static export)
- Tailwind CSS
- Framer Motion
- Three.js via `@react-three/fiber` + `@react-three/drei`

## Local development
```bash
npm install
npm run dev
```

## Production static export
```bash
npm run build
```
Output is generated in `out/`.

## GitHub Pages notes
`next.config.js` is already configured with:
- `output: 'export'`
- production `basePath: '/qeltowebsite'`
- production `assetPrefix: '/qeltowebsite/'`

Deploy `out/` to `gh-pages` (or via GitHub Actions).
