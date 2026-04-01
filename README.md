# Qelto Premium Website

A premium, conversion-focused tech company website built with Next.js, Tailwind CSS, React Three Fiber, and Framer Motion.

## Stack
- Next.js (static export)
- Tailwind CSS
- Framer Motion
- Three.js via `@react-three/fiber` and `@react-three/drei`

## Local development
```bash
npm install
npm run dev
```

## Production static export
```bash
npm run build
```
The export is generated in `out/` and is ready for GitHub Pages.

## GitHub Pages deployment notes
1. Ensure the repository name is `qeltowebsite`.
2. `next.config.js` already sets:
   - `output: 'export'`
   - `basePath: '/qeltowebsite'` in production
   - `assetPrefix: '/qeltowebsite/'` in production
3. Deploy the `out/` folder contents to the `gh-pages` branch (or via GitHub Actions).

## Components
- `components/Hero3D.jsx`
- `components/Services.jsx`
- `components/ServiceCard.jsx`
- `components/About.jsx`
- `components/Portfolio.jsx`
- `components/Process.jsx`
- `components/Contact.jsx`
- `components/Navbar.jsx`
- `components/Footer.jsx`
