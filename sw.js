// Minimal service worker: sab requests seedha network se jayengi (kuch cache nahi hota)
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", () => {});
