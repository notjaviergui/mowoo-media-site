# Moowo Media

Performance content creation and management, supported by AI automation.

## Local development

Use Node 20 or newer and the existing npm lockfile:

```sh
npm ci
npm run dev
```

Optional settings are documented in `.env.example`. Defaults provide a complete static site with demo requests through the existing Formspree endpoint, a labeled scripted preview, a hosted ElevenLabs demo, and the caller-verified inbound demo number. SMS is disabled.

```sh
npm run build
npm run preview
node --test tests/*.test.mjs
```

## Publishing

GitHub Actions builds and deploys the site from `main` using [the Pages workflow](.github/workflows/pages.yml). Pull requests run tests and a production build without deploying. Merging into `main` publishes the resulting `dist/` artifact automatically; local builds and `npm run deploy` are no longer needed.

In **Settings → Pages → Build and deployment**, select **GitHub Actions** as the source. Keep the custom domain `www.moowomedia.com` and HTTPS enabled. The build preserves `CNAME` and the `404.html` SPA fallback, and Vite's `/` base matches the custom domain.

To redeploy the current `main` manually, open **Actions → Build and deploy site → Run workflow** and select `main`. Deployment uses GitHub's built-in token and needs no personal token or provider API credentials. Provider keys must never be added to frontend build variables.

The legacy `npm run deploy` script still commits local changes and publishes to `gh-pages`; do not use it with this Actions deployment. The Express backend remains a separate service and is not deployed by GitHub Pages.

- [Architecture review and section decisions](docs/ARCHITECTURE-REVIEW.md)
- [Provider setup and configuration](docs/INTEGRATIONS.md)
- [Verification and remaining limitations](docs/VALIDATION.md)

No new production dependencies were added. Original assets and legacy source components remain available; unused legacy components are not part of the browser bundle.
