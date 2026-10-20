// Public configuration only. Never put provider API keys in VITE_ variables.
const httpsUrl = (value) => {
  try {
    const url = new URL(value);
    return url.protocol === "https:" ? url.href : null;
  } catch {
    return null;
  }
};
const number = (import.meta.env.VITE_AGENT_PHONE_NUMBER || "").trim();
export const site = {
  email: "hello@moowomedia.com",
  bookingUrl: httpsUrl(import.meta.env.VITE_BOOKING_URL),
  formEndpoint: "https://formspree.io/f/xnnpllly", // Existing contact infrastructure.
  agentPhone: /^\+[1-9]\d{7,14}$/.test(number) ? number : null,
  voiceVerified: import.meta.env.VITE_AGENT_VOICE_VERIFIED === "true",
  smsVerified: import.meta.env.VITE_AGENT_SMS_VERIFIED === "true",
  apiBase: (import.meta.env.VITE_API_BASE_URL || "").replace(/\/$/, ""),
};
