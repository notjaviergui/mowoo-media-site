# Moowo Media

Performance content creation and management, supported by AI automation.

## Local development

Use Node 20 or newer and the existing npm lockfile:

```sh
npm ci
npm run dev
```

Optional settings are documented in `.env.example`. Defaults provide a complete static site with demo requests through the existing Formspree endpoint, a scripted agent preview, and no claimed live telephone integration.

```sh
npm run build
npm run preview
node --test tests/*.test.mjs
```

`npm run build` retains the existing GitHub Pages SPA fallback and custom domain. Do not run the old `npm run deploy` script casually: it commits and pushes before publishing. Review and deploy through your normal release process.

- [Architecture review and section decisions](docs/ARCHITECTURE-REVIEW.md)
- [Provider setup and configuration](docs/INTEGRATIONS.md)
- [Verification and remaining limitations](docs/VALIDATION.md)

No new production dependencies were added. Original assets and legacy source components remain available; unused legacy components are not part of the browser bundle.
