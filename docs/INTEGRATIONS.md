## Inbound telephone setup

The dedicated number **+1 (786) 463-0490** is provisioned in the upgraded Twilio account and imported into ElevenLabs as **Moowo inbound sales demo** (`phnum_8101m5dqbg5ze6y8d0j077kjre89`). It is assigned to **Moowo Media — Growth Demo**, following its published Main traffic split.

Twilio's number inventory shows **Voice enabled** and an ElevenLabs US inbound voice webhook. The user explicitly approved the number rental and credential transfer to ElevenLabs. No provider credential was written into chat, source, documentation, screenshots, or the website. The configured secret remains in the provider integration. SMS import was deliberately disabled; A2P messaging registration is not complete.

The caller confirmed that an external phone call reached the agent and that it answered and responded. The website voice button is now enabled; set `VITE_AGENT_VOICE_VERIFIED=false` and rebuild to hide it. After that test, the published voice was changed to Hope (female), with Mia as the conversational persona and a short AI disclosure. The new voice can be reviewed by calling the same number again. The number review listed $1.15 immediately and $1.15/month thereafter, with Twilio call usage and ElevenLabs usage additional.

# Current setup status

A dedicated ElevenLabs agent has now been created and published: **Moowo Media — Growth Demo**, ID `agent_2101m5dm3egyftgb8h56q4y13wrf`.

- [Agent console](https://elevenlabs.io/app/agents/agents/agent_2101m5dm3egyftgb8h56q4y13wrf/agent)
- [Public demo](https://elevenlabs.io/app/talk-to?agent_id=agent_2101m5dm3egyftgb8h56q4y13wrf)
- The local site now links to that hosted demo (set `VITE_AGENT_DEMO_ENABLED=false` and rebuild to hide it), with clear third-party and sample-data copy. The scripted on-page example stays labeled separately.
- Account-preview text tests answered a fictional content inquiry and correctly declined unsupported booking, CRM writes, and invented pricing. Replies were subsequently limited to short conversational responses.
- The public talk-to page loads and presents voice and text modes. Starting a public conversation requires the visitor to accept ElevenLabs' recording/storage terms themselves. No terms were accepted on the account owner's behalf. Public voice/audio and external telephone/SMS have not yet been end-to-end verified.
- Widget settings are published with black/lime colors, a demo label, and a clear sample-data description. The site uses a hosted link instead of loading a third-party script on every visit.
- The Twilio number is now provisioned and assigned as documented above. Inbound voice was confirmed by the caller and its website call button is enabled. SMS remains disabled.
- The exact system prompt is saved in `server/agents/moowo-demo-prompt.md`. It has no booking, email, CRM-write, or live-transfer tools attached and makes that boundary explicit.

The original setup reference follows; statements about no agent being configured describe the baseline before this setup.

# Integration setup and honest launch states

The default build does not claim that telephone, SMS, automated trend research, newsletter subscription, or client authentication is live. `.env.example` lists public frontend settings only. `.env` and server credentials are ignored by Git. Vite settings are compiled at build time: changing them requires rebuilding the static site.

## Demo requests and scheduling

The new request page reuses the repository's Formspree endpoint. Confirm ownership of `https://formspree.io/f/xnnpllly`, accepted origins, spam filtering, and inbox delivery in the existing Formspree account. Submit a controlled test with the owner's authorization before launch. HTTP failures and timeouts show a retry/email alternative, and success copy explicitly says the time still needs confirmation.

For direct scheduling, set `VITE_BOOKING_URL` to your HTTPS booking page and rebuild. Without it, the site offers a request form, not fictitious calendar availability.

## Dedicated voice and SMS demo: simplest supported path

Use ElevenLabs' native Twilio integration; a custom voice-streaming backend is unnecessary for this demo.

Needed configuration (not available or verified in this checkout):

- A dedicated purchased Twilio number provisioned for inbound voice and SMS. The old contact phone in the chatbot is not treated as an agent line.
- Twilio Account SID and Auth Token, or supported restricted API-key SID/secret, entered in the provider console only.
- An ElevenLabs account, configured agent, approved knowledge base, and agent assignment for the number. Record the agent ID in your private deployment inventory; this website does not need it.
- Channel activation and messaging registration requirements applicable to your number/account; confirm these with Twilio before public testing.
- A tested handoff destination and clear agent boundaries. Avoid collecting sensitive details in a public demo.

Steps:

1. Create a Moowo demonstration agent with approved service information and an introduction that discloses it is an AI demo. Use sample lead data. Do not claim to confirm bookings unless its scheduling tool actually does so.
2. In ElevenAgents → Phone Numbers, import the dedicated Twilio number with its credentials and assign the agent. Verify the account has inbound capability; a verified outbound caller ID is insufficient.
3. Enable SMS following the provider guide; previously imported numbers may need re-importing. Assign the inbound message agent.
4. Test from an external phone: inquiry, interruption, unknown answer, lead qualification, handoff, failed handoff, call end, and SMS reply. Review provider history. Test each channel independently.
5. Set `VITE_AGENT_PHONE_NUMBER` in E.164 format (for example `+1…`) and set `VITE_AGENT_VOICE_VERIFIED=true` and/or `VITE_AGENT_SMS_VERIFIED=true` only for channels that passed testing. Rebuild. The UI independently enables `tel:` and `sms:` links. Missing or invalid numbers keep both hidden.
6. Confirm actual calls and messages on the deployed site. Turn the relevant flag off and rebuild if a channel becomes unavailable.

The flags record operator verification; they are not a provider health check. No API keys are shipped in the browser. The website itself does not make calls, send messages, capture lead data from calls, or create provider resources. Those behaviors live in the configured agent and its tools.

Official guides checked for this implementation:
- [Twilio native integration](https://elevenlabs.io/docs/eleven-agents/phone-numbers/twilio-integration/native-integration/)
- [SMS conversations](https://elevenlabs.io/docs/eleven-agents/phone-numbers/twilio-integration/sms-conversations)
- [Twilio webhook security](https://www.twilio.com/docs/usage/webhooks/webhooks-security) — use the official SDK signature validator if you later add custom inbound endpoints. Do not add an unvalidated public webhook to the existing server.

## Apify and trend-informed content

No Apify SDK, actor, token, data store, or research integration exists in this repository. Keep research in the internal content workflow rather than trigger paid scraping from a public marketing page.

Needed: server-side `APIFY_TOKEN`, a selected actor ID with documented input schema, approved public sources, a run budget, and a place to retain source URLs/dates. These are not frontend environment variables. Select and validate an actor before writing its input payload; actor schemas differ.

A practical handoff: collect relevant public content → retain source URL, date, and engagement context → review relevance → produce tailored ideas/scripts → client approval → production/publishing → review performance. Schedule research in a protected internal workflow, not this static site. See [Apify API](https://docs.apify.com/api/v2).

For a hypothetical Fit for Life Clinical brief, research audience questions and relevant content formats around its approved services. Draft educational content ideas for clinical review. Treat the company as an example, not a portfolio client or evidence of results; do not publish treatment claims without its clinical approval.

## Existing Express server

The backend remains separate from GitHub Pages. OpenAI chat and Beehiiv subscription routes are preserved; neither has verified credentials in this checkout. Missing keys now return 503 without calling a provider. Secret and subscriber-email logging has been removed.

Do not enable `VITE_API_BASE_URL` until the HTTPS server, allowed origins, provider credentials, provider API contract, abuse limits, and actual subscription delivery have been checked. The existing Beehiiv v1 route and publication ID need account verification before use. A static GitHub Pages deployment cannot run Express.

The previous chat widget is not mounted because it targets localhost, accepts a browser-supplied system prompt, and lacks reliable error handling. Reintroducing a public live chat should use a server-owned prompt, validated input, timeouts, and abuse controls. The scripted demo requires no provider access and remains explicitly labeled.
