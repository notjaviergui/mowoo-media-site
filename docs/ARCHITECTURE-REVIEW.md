# Moowo Media: review and implementation decisions

Reviewed baseline: `127f044` (the repository's default branch when cloned).

## Existing architecture

- React 18 / Vite 6 SPA, React Router, Tailwind utilities; no SSR or application database used by the website.
- `src/main.jsx` defines the routes and landing-page composition. `Layout`, `NavBar`, and `Footer` are the shared shell.
- Separate Express server in `server/index.js`: Beehiiv subscription and OpenAI chat endpoints. Firebase initialization exists but is not wired into the contact flow or client login.
- Existing contact collection uses Formspree (`/f/xnnpllly`). Frontend deployment script builds a GitHub Pages bundle with a `404.html` SPA fallback and `CNAME`.
- Local portfolio assets, a showreel, and a large unused image sequence already exist. Existing fonts are self-hosted through Fontsource.

## Findings and decisions

| Existing area                          | Decision and reason                                                                                                                                                                                                                                                                  |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Hero / video                           | Restore the original reel as a full-screen, muted opening at the user’s request, with pause/play controls and a readable overlay. Preserve user-controlled playback on the work page.                                                                                                |
| Ad feed                                | Reuse the portfolio concept and real repository assets. Remove mock ad statistics and unrelated stock images.                                                                                                                                                                        |
| Metrics / before-after / campaign logs | Consolidate their useful intent into the process and portfolio sections. Unsupported spend, revenue, ROAS, retention, and fictitious client claims must not be published as evidence. Old source components remain unused, allowing recovery if verified evidence is supplied later. |
| Services                               | Lead with content creation, management, then automation. Keep ad creative, AI-assisted production, websites, retention, and brand identity as supporting offerings. The baseline has no separate AI Ads component; its ad-production offering is preserved in this broader group.    |
| Process                                | Retain and revise the process as research → creation and approval → review → automation when useful.                                                                                                                                                                                 |
| Contact / CTA                          | Reuse Formspree. All primary CTAs reach `/book-demo`. Check HTTP acceptance, preserve input on error, prevent duplicate sending, and abort stalled requests. A request is explicitly not a confirmed booking.                                                                        |
| Work                                   | Preserve all five listed brands plus Inopera creative, repair case-sensitive image paths, add accessible filters and retain the showreel. No client outcome claims added.                                                                                                            |
| About                                  | Replace the construction placeholder with the agency's approach. No invented team members or credentials.                                                                                                                                                                            |
| Newsletter                             | Retain the route and editorial purpose. Replace outdated, unsupported articles with practical field notes. Show signup only when a backend URL has been deliberately configured; existing provider integration still needs external verification.                                    |
| Careers                                | Preserve creative collaboration contact, replace inert application buttons and unverified vacancies with an honest expression-of-interest flow.                                                                                                                                      |
| Client portal                          | The original login form has no authentication. Replace it with client support contact rather than collect passwords without an auth flow.                                                                                                                                            |
| Chat / telephone                       | Stop mounting the localhost-only chatbot. Add a clearly labeled scripted walkthrough, with independent call/SMS enablement only after provider setup and testing.                                                                                                                    |
| Navigation / footer                    | Persistent shared navigation and footer on every page, working aliases for old routes, mobile menu with Escape support, skip link and visible focus states.                                                                                                                          |

## Design and implementation

Black, charcoal, and restrained lime form the shared design language, preserving the requested dark color scheme. Light creative artifacts provide contrast within the dark site. A reusable service overview and project card replace repeated markup. Page-specific layouts alternate editorial rows, portfolio imagery, a process diagram, and a conversation walkthrough. Animations are brief and honor reduced-motion preferences. The hero reuses the supplied reel with metadata preload, muted playback, visibility-based pausing, and reduced-motion support. An optimized Inopera WebP provides an error fallback; the original asset is retained. The portfolio showreel remains user-controlled. Only Latin Inter font subsets load. No new application dependencies.

Existing deep service URLs remain valid and route to the consolidated services page. `/WorkUs`, `/contact`, and `/book-demo` use the same request component; `/about` remains a working alias. Unknown routes show a helpful 404 view. GitHub Pages still requires the generated `404.html` for direct navigation.

## Remaining external checks

Formspree account acceptance and inbox delivery cannot be inferred from its existing URL. The handler is tested using simulated responses; no unsolicited request was sent to the agency. Provider credentials and a scheduling URL are not present in this checkout. No telephone provider account, deployed Express server, Apify actor, or working client authentication was verified. See `INTEGRATIONS.md` before enabling these services.
