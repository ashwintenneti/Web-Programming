const CACHE_NAME = 'simple-pwa-cache-v1';
const urlsToCache = [
  '/Web-Programming/simple-pwa/index.html',
  '/Web-Programming/simple-pwa/manifest.json',
  '/Web-Programming/simple-pwa/app.js',
  '/Web-Programming/simple-pwa/service-worker.js',
  '/Web-Programming/simple-pwa/icon.png'
];

// Install the service worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

// Fetch resources
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
