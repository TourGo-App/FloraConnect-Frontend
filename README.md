# FloraConnect Frontend

A responsive sample home page built with React 19, TypeScript, Vite, and Tailwind CSS.

## Development

```sh
npm install
npm run dev
```

Open http://localhost:5173, or the URL printed by Vite. Run the backend with `npm run dev` in FloraConnect-Backend to enable the live connection status. The sample page remains usable when the backend is unavailable.

## Checks and production preview

```sh
npm run lint
npm run build
npm run preview
```

The production build is generated in `dist/`. `npm start` is also available as an alias for the local production preview.

## Files

- `src/pages/home/HomePage.tsx`: reference-inspired home page, local flower search/category filtering, flower detail dialogs and responsive navigation.
- `src/styles/global.css`: responsive styles.
- `src/main.tsx`: React entry point.
- `index.html`: document title and metadata.
- `vite.config.ts`: Vite, React, and Tailwind configuration.
- `public/images/flowers.jpg`: floral image from Unsplash (photo-1490750967868-88aa4486c946).

Grower profiles are sample content. The join button shows a coming-soon message and does not store or submit information.

For Vercel, select the Vite framework preset, use `npm run build`, and set the output directory to `dist`.

`.gitignore` excludes dependencies, build output, caches, local environment files, logs, editor settings, and test reports. Keep `package-lock.json` committed for reproducible installations.

## Backend connection

The footer checks `/api/health` with a ten-second timeout and offers Retry on failure. Development defaults to `http://localhost:3001/api`; production defaults to `https://flora-connect-backend-gules.vercel.app/api`. Override the base URL with `VITE_API_BASE_URL` in `.env.local` or Vercel environment settings, then restart/rebuild. Include `/api` in the URL. Do not put secrets in VITE variables. No environment changes are needed for the current production domains. Preview deployments require their exact origin to be allowed by the backend.

## License

Copyright (c) 2026 TourGo organization. All rights reserved.

No use, copying, modification, distribution, or sublicensing is permitted without prior written permission from TourGo organization. See [LICENSE](LICENSE).

## Home page design

The botanical homepage includes a custom SVG wordmark, an AI-generated grower hero, six illustrative flower cards, responsive navigation, search/filter controls and accessible native dialogs. Login, registration, associations, notices, marketplace and events show clearly marked previews until their APIs are implemented. Existing API health checking remains in the footer.

Images are served locally from `public/images/`. Third-party image attribution and original license links are available at `/credits/images.html`; these assets retain their original licenses. The hero is an AI-generated illustration and does not depict a verified platform member. No production membership totals, association partnerships or government endorsement are claimed.

## Code organization

See [folder structure and conventions](docs/architecture/README.md). All local image files are in `public/images`; attribution is served at `/credits/images.html` and source/license metadata is in `docs/assets/image-sources.json`.
