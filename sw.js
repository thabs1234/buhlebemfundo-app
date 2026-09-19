
self.addEventListener('install', (e) => self.skipWaiting());
self.addEventListener('fetch', (e) => {
  // Cache-first for the app shell
  e.respondWith(
    caches.match(e.request).then((r) => r || fetch(e.request).catch(() => new Response('Offline', {status: 503})))
  );
});
