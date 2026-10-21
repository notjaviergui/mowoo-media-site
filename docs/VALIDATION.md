# Verification

## Passed

- Installed dependencies with `npm ci` using the repository's unchanged npm lockfile. No production dependency additions or upgrades.
- `npm run build`: production bundle, `dist/404.html`, and `dist/CNAME` generated successfully.
- `node --test tests/*.test.mjs`: six passing tests for accepted form payloads, HTTP 400/429/500 failures, offline failures, and stalled-request cancellation. Provider responses are simulated; no agency submission was sent.
- `node --check server/index.js` and `git diff --check` passed.
- Local Express checks: both `/api/subscribe` and `/chat` return HTTP 503 with a clear configuration error when their provider keys are absent.
- Browser checks against the production preview: hero and portfolio images load, primary CTA reaches demo requests, mobile menu expands and closes with Escape, required fields block empty submission, portfolio filters return the expected two identity projects and restore all five projects, agent scenario buttons update their labeled example, service and newsletter disclosures expand.
- Browser route checks: home, services, work, approach, newsletter, careers, client support, legacy paid-media URL, `/WorkUs`, `/contact`, `/about`, and unknown-route fallback render correctly.
- Desktop and narrow mobile compositions reviewed. Observed CSS viewports approximately 1309px and 354px (desktop app viewport scaling applied); narrow route checks showed no horizontal document overflow.
- Mobile home, booking, and every route in the smoke test have one main landmark and no horizontal overflow. Form controls have visible associated labels; focus outlines, a skip link, semantic buttons/disclosures, live status copy, and reduced-motion styles are included.

## Limits

This is a local review build, not a production deployment. Formspree ownership/inbox delivery, scheduling availability, real telephone/SMS calls, and external subscription delivery were not tested. No provider credentials, dedicated demo number, or scheduling link were available. The agent walkthrough is a scripted UI example. The existing Express backend needs its own deployment and provider validation. The supplied showreel was retained; a caption/transcript review should be completed if its audio is important to the portfolio presentation.

The locked dependency tree emits an outdated Browserslist-data notice. Build passes; dependency updates were kept outside this redesign's scope.

## Scroll-plan and agent follow-up

The services overview now uses a vertical printed-plan layout derived from the hero graphic. A passive scroll listener batches work through requestAnimationFrame, measures three steps, and fills a lime rail as each step brightens. ResizeObserver keeps alignment correct after layout changes. Keyboard focus reveals a step immediately, and reduced-motion preference displays all steps at full opacity. Browser scroll inspection verified changing rail progress and individual opacity values. Agent setup and remaining channel checks are recorded in INTEGRATIONS.md.

## Fullscreen reel and motion refinement

Restored the original fullscreen reel with a transparent header that darkens on scroll. Verified muted playback, matching viewport height, working pause/play controls, offscreen pausing, and no horizontal overflow in the preview. The plan now uses time-based easing in a finite animation-frame loop, with geometry measured only after scroll/resize changes. Shared hover transitions and restrained hero entrances use consistent easing; reduced-motion preferences disable entrances and autoplay. Browser inspection confirmed that rail progress and step opacity change with scrolling. Production build, six existing form tests, and diff whitespace checks pass.

## Refined cake presentation

The landing growth plan uses a scalable SVG illustration with five independent layers, shared lighting, surface texture, cream seams, and a dark plinth. Existing eased scroll progress drives each layer; no animation dependency or raster payload was added. The dark presentation uses large type and a sticky graphic beside the sequence on desktop, then a compact sticky stage above the copy on mobile. Verified changing layer values, desktop and narrow viewport layouts without horizontal overflow, and successful production build. Reduced-motion preferences show the complete illustration and all bullets.
