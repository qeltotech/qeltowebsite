# Qelto Premium Website

High-end, business-focused marketing website for Qelto built with Next.js static export, Tailwind CSS, Framer Motion, and React Three Fiber.

## Conflict-resolution snapshot
This branch contains a clean, conflict-marker-free snapshot of the full website structure so it can be merged without unresolved `<<<<<<<`, `=======`, `>>>>>>>` blocks.

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

## Conflict check
Run this before pushing if your PR shows merge warnings:
```bash
npm run check:conflicts
```

## GitHub Pages notes
`next.config.js` is preconfigured with:
- `output: 'export'`
- production `basePath: '/qeltowebsite'`
- production `assetPrefix: '/qeltowebsite/'`

Deploy `out/` to the `gh-pages` branch (or via GitHub Actions).

## Key sections
- Hero with 3D visualization + business CTAs
- About and Why Choose Us messaging
- Services (ERP, Brand Promotion, Video, Web Development)
- Portfolio outcomes
- Process timeline
- Contact form and footer navigation

## Update your branch with no merge surprises
Use this flow before pushing new commits to keep your PR conflict-free:

```bash
git fetch origin
git checkout <your-branch>
git rebase origin/main
npm run check:conflicts
git push --force-with-lease
```

If you prefer merge instead of rebase:

```bash
git fetch origin
git checkout <your-branch>
git merge origin/main
npm run check:conflicts
git push
```

Tips:
- Rebase keeps history linear and usually makes PRs easier to review.
- Run `npm run check:conflicts` before every push.
- Avoid editing the same lines as `main` when possible; split large UI changes into smaller PRs.
