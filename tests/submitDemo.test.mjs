import test from "node:test";
import assert from "node:assert/strict";
import { submitDemo } from "../src/lib/submitDemo.mjs";

test("accepted requests preserve the details and expected provider contract", async () => {
  const details = {
    name: "Test visitor",
    email: "test@example.com",
    company: "Example",
    service: "Content creation",
    project: "A content plan",
  };
  let sent;
  await submitDemo("https://example.com/form", details, {
    fetchImpl: async (url, init) => {
      sent = { url, ...init };
      return { ok: true };
    },
  });
  assert.equal(sent.method, "POST");
  assert.deepEqual(JSON.parse(sent.body), {
    ...details,
    _subject: "Moowo Media: demo request",
  });
});
for (const status of [400, 429, 500]) {
  test(`HTTP ${status} cannot become a successful request`, async () => {
    await assert.rejects(
      submitDemo(
        "https://example.com/form",
        {},
        { fetchImpl: async () => ({ ok: false, status }) },
      ),
    );
  });
}
test("network failures propagate to the recoverable error state", async () => {
  await assert.rejects(
    submitDemo(
      "https://example.com/form",
      {},
      {
        fetchImpl: async () => {
          throw new Error("Offline");
        },
      },
    ),
    /Offline/,
  );
});
test("a stalled request is cancelled instead of leaving the form stuck", async () => {
  await assert.rejects(
    submitDemo(
      "https://example.com/form",
      {},
      {
        timeoutMs: 5,
        fetchImpl: (_, { signal }) =>
          new Promise((_, reject) =>
            signal.addEventListener("abort", () =>
              reject(new Error("Aborted")),
            ),
          ),
      },
    ),
    /Aborted/,
  );
});
