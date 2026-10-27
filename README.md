# FloraConnect Frontend

A responsive sample home page built with React 19, TypeScript, Vite, and Tailwind CSS.

## Development

```sh
npm install
npm run dev
```

Open http://localhost:5173, or the URL printed by Vite. No backend, database, external fonts, or environment variables are required.

## Checks and production preview

```sh
npm run lint
npm run build
npm run preview
```

The production build is generated in `dist/`. `npm start` is also available as an alias for the local production preview.

## Files

- `src/App.tsx`: home page and local grower search/category filtering.
- `src/index.css`: responsive styles.
- `src/main.tsx`: React entry point.
- `index.html`: document title and metadata.
- `vite.config.ts`: Vite, React, and Tailwind configuration.
- `public/images/flowers.jpg`: floral image from Unsplash (photo-1490750967868-88aa4486c946).

Grower profiles are sample content. The join button shows a coming-soon message and does not store or submit information.

For Vercel, select the Vite framework preset, use `npm run build`, and set the output directory to `dist`.

`.gitignore` excludes dependencies, build output, caches, local environment files, logs, editor settings, and test reports. Keep `package-lock.json` committed for reproducible installations.
