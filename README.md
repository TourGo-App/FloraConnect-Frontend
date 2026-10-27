# FloraConnect Frontend

A responsive sample home page for Sri Lankan flower growers and plant lovers, built with the existing Next.js, React, TypeScript, and Tailwind CSS starter.

## Run locally

```sh
npm install
npm run dev
```

Open http://localhost:3000 (or the port printed by Next.js).

```sh
npm run lint
npm run build
npm start
```

The page uses local sample profiles. Grower search and category filters run in the browser. The community button displays a coming-soon message; it does not register users or store information. No backend, database, or environment variables are required.

## Files

- `app/page.tsx`: page content and browser interactions.
- `app/globals.css`: responsive styling.
- `app/layout.tsx`: page metadata and fonts.
- `public/images/flowers.jpg`: locally stored floral image from [Unsplash](https://unsplash.com/photos/88aa4486c946).

The existing Next.js font setup downloads Geist during the first production build, so that build needs internet access.

`.gitignore` excludes dependencies, build output, caches, local environment files, logs, editor settings, and test reports. Commit `package-lock.json` to keep dependency installations reproducible.
