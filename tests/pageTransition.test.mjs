import test from "node:test";
import assert from "node:assert/strict";
import { pageTransition } from "../src/lib/pageTransition.mjs";
test("every primary page has a distinct transition", () => {
  const routes = ["/", "/services", "/pages/clients", "/pages/us", "/book-demo", "/pages/newsletter", "/pages/join-us", "/pages/clients-portal"];
  assert.equal(new Set(routes.map(pageTransition)).size, routes.length);
});
test("route aliases retain their page transition and unknown routes remain supported", () => {
  for (const alias of ["/WorkUs", "/contact"]) assert.equal(pageTransition(alias), pageTransition("/book-demo"));
  assert.equal(pageTransition("/about"), pageTransition("/pages/us"));
  assert.equal(pageTransition("/components/services/websitessection"), pageTransition("/services"));
  assert.equal(pageTransition("/missing"), "fade");
});
