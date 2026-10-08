// TD ESP service worker: push notifications + normal network
self.addEventListener("notificationclick", (event) => {
  event.stopImmediatePropagation();
  event.notification.close();
  const url = new URL("app.html", self.registration.scope).href;
  event.waitUntil(
    clients.matchAll({ type: "window", includeUncontrolled: true }).then((list) => {
      for (const c of list) { if ("focus" in c) return c.focus(); }
      return clients.openWindow(url);
    })
  );
});

importScripts("https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyDkwQvjVjrEQqpEIIgWKshbz538lGm7DL8",
  authDomain: "td-esp.firebaseapp.com",
  projectId: "td-esp",
  storageBucket: "td-esp.firebasestorage.app",
  messagingSenderId: "1074367636296",
  appId: "1:1074367636296:web:65189df5578a98cbaa097d"
});
firebase.messaging();

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", () => {});
