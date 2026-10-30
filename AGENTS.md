# Frontend guidance

This project uses React, TypeScript, Vite, and Tailwind CSS.

- The entry point is `src/main.tsx`; the app root is `src/app/App.tsx` and the home page is `src/pages/home/HomePage.tsx`.
- The page checks the FloraConnect backend health endpoint; grower profiles remain local sample data.
- Run `npm run lint` and `npm run build` after code changes.
- Do not commit `node_modules`, `dist`, local environment files, or generated caches.

- Follow `docs/architecture/README.md` for folder conventions. Keep image files in `public/images`.
