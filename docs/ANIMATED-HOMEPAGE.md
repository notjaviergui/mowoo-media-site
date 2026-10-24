# Animated homepage redesign

This iteration rebuilds the homepage and applies the same black, ivory, lime, and Syne/Inter design language to shared navigation, the footer, and existing public pages. It preserves route aliases, booking submission logic, client assets, and the configured Mia demo. No backend changes or public deployment are included.

## Recording reference notes

Approximate timestamps in the supplied 30-second recording:
- 0–3 seconds: a drawn letter loader resolves into a compact stacked identity. Used for the Moowo stroke intro and centered stacked wordmark.
- 4–6 seconds: a bold hero uses generous space and very large lettering. Used for the Moowo opening composition.
- 8 seconds: an oversized paragraph gains color with scroll progress. Used for the shorter paragraph focused on content, performance, optimization, and automation.
- 10–12 seconds: image-led projects carry the page into the next section. Used for the rounded horizontal client-work carousel and reel.
- 16–18 seconds: services follow a winding drawn path. Used for looping desktop and mobile paths, scattered service labels, tilted captions, and original SVG stickers.
- 22–28 seconds: FAQs lead into a contrasting footer. Used for the factual FAQ section and lime closing composition.

The revised homepage uses more vivid lime, a large lime highlight behind the hero wordmark, rising fills on CTA/navigation/carousel buttons, and an animated native horizontal project carousel.

The footer's staggered spring lettering is the user's additional requirement. It runs once per route visit and settles without moving the layout.

## Motion and accessibility

The intro runs on a fresh homepage session, supports Skip/Escape, and bypasses reduced motion and direct section links. Main content is inert while the intro is active. The intro does not wait for video or external services.

The momentum controller intercepts vertical desktop wheel input and scrolls the real window with frame-rate-independent easing. Touch devices retain native input. Zoom gestures, horizontal input, nested scroll areas, and form controls retain native behavior. Keyboard and pointer input, native navigation, media-query changes, and cleanup cancel pending momentum. Motion's paragraph fill and service drawing read the same real window position.

The introduction stays sticky beneath the header while normal page scrolling reveals its 19-word paragraph. It releases naturally when the section ends and includes a link to skip directly to the work. Reduced-motion users get a normal-height, unpinned introduction with complete text.

The project carousel moves gently while visible, stops on hover/focus, stops after manual input, and provides pause/resume, previous/next, mouse dragging, native touch scrolling, and keyboard arrow/Home/End controls. It does not autoplay with reduced motion. Reduced-motion users also get a complete service path, stationary lettering, immediate button fills, and native scrolling. The reel has native playback controls and no autoplay.

## Validation

- `npm test`: 9 passing tests, including input bypasses, scroll interruption/cleanup, boundaries, and existing booking provider contracts/errors/timeouts.
- `npm run build`: successful; `dist/index.html`, `dist/404.html`, and `dist/CNAME` generated.
- `git diff --check`: clean.
- Browser layout checks: all 8 public routes at exact CSS widths 390, 768, and 1440; no horizontal overflow in 24 checks.
- Browser checks: intro, Skip, no replay on reload, section links, mobile menu/Escape/navigation, pinned copy and natural release, scroll-fill colors, drawn loops on desktop/mobile, footer spring settling, and reel play/pause.
- Revision checks: carousel mouse dragging, previous/next, auto motion and pause/resume, keyboard Home/End boundaries, and the rising hover fill on the header CTA. The text pin fits 390px phones at both 844px and 568px heights.
- Reel playback reached readyState 4 with advancing currentTime and no media error.
- Reduced-motion input bypass is automated; the UI fallback is implemented but was not tested using an OS-level reduced-motion setting.
- No real booking request, call, newsletter subscription, or external message was sent.

## Local review

Run `npm ci`, `npm run build`, and `npm run preview -- --host 127.0.0.1 --port 4173`. The preview uses the production bundle and local font assets. Review locally before publishing through the existing Pages workflow.
