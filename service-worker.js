self.addEventListener("install", event => {
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    clients.claim().then(() => {
      return self.clients.matchAll().then(clients => {
        clients.forEach(client => client.navigate(client.url));
      });
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(fetch(event.request));
});
