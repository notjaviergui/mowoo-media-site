/** A request is successful only when the existing form provider accepts it. */
export async function submitDemo(
  endpoint,
  details,
  { fetchImpl = fetch, timeoutMs = 15000 } = {},
) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetchImpl(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        ...details,
        _subject: "Moowo Media: demo request",
      }),
      signal: controller.signal,
    });
    if (!response.ok) throw new Error("Demo request was not accepted");
  } finally {
    clearTimeout(timeout);
  }
}
