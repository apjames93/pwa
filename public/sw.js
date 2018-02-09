self.addEventListener('install', function(event) {
  console.log('[Service Worker] Installing Service Worker ', event);
});

self.addEventListener('activate', function(event) {
  console.log('[Service Worker] Actvating Service Worker ', event);
  return self.clients.claim();
});

self.addEventListener('fetch', function(event) {
  console.log('[Service Worker] fetching...', event);
  event.respontWith(fetch(event.request));
});
