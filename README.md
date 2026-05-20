# Happy Birthday Page

A festive, single-page birthday website built with React + Vite.

## Run locally

```bash
npm install
npm run dev
```

## Build for static hosting

```bash
npm run build
```

The build output is generated in `dist/` and is ready for static hosts.

## Publish on GitHub Pages

1. Push this project to a GitHub repository.
2. In GitHub, open **Settings > Pages**.
3. Set source to **GitHub Actions** and use the official Vite deploy workflow,
   or set source to **Deploy from a branch** and select the `dist` output branch.

This project uses a relative Vite base path so static assets work correctly when
served from a subpath (typical for GitHub Pages project sites).
