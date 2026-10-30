# Frontend structure

```text
public/
  images/                  All local image files (photos, SVGs, favicon)
  credits/images.html      Public image attribution page
src/
  app/App.tsx              App composition; future providers and routing
  pages/home/              Homepage and its presentation data
  components/
    layout/Brand.tsx       Reusable branding
    ui/                    Shared Icon and accessible Modal
  features/
    flowers/data/          Typed sample flower catalogue
    health/ApiStatus.tsx   Backend connection status UI
  config/env.ts            Environment-dependent API URL
  services/api/health.ts   HTTP health contract and validation
  styles/global.css        Theme and responsive styling
  main.tsx                 React bootstrap
  vite-env.d.ts            Vite type declarations
docs/
  assets/image-sources.json Image source and license metadata
  architecture/            Folder conventions
  issues/                  Development backlog
```

## Conventions

- Add page-level screens under pages, reusable visual components under components, and feature-specific UI/data under features.
- Keep HTTP calls in services/api and environment settings in config. Components should not duplicate backend URLs.
- Keep every local image file in public/images. Reference it with /images/<filename>; Vite serves that folder unchanged. Preserve attribution under public/credits and metadata under docs/assets.
- Keep third-party image licenses intact; they are distinct from the project's source license.
- Use relative imports. Backend code must not be imported into the frontend.
- Run npm run lint and npm run build after changes. Generated dist and dependencies are not source folders.
