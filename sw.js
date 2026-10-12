/* Service worker do Simulador de Ágio do Garrote.
   Ao publicar uma versão nova, troque o número em VERSION para o iPhone baixar os arquivos novos. */
var VERSION = 'agio-v1.1';
var FILES = [
  './',
  './index.html',
  './manifest.webmanifest',
  './favicon.ico',
  './img/logo-creme.png',
  './icons/apple-touch-icon.png',
  './icons/favicon-16.png',
  './icons/favicon-32.png',
  './icons/favicon-48.png',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-512.png',
  './fonts/source-sans-3-latin-400-normal.woff2',
  './fonts/source-sans-3-latin-600-normal.woff2',
  './fonts/source-sans-3-latin-700-normal.woff2',
  './fonts/source-serif-4-latin-700-normal.woff2'
];

self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(VERSION).then(function (c) { return c.addAll(FILES); }).then(function () { return self.skipWaiting(); }));
});

self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) { return k !== VERSION; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});

self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET') return;
  // Página: tenta a internet primeiro (pega atualização), cai no cache se estiver offline
  if (req.mode === 'navigate') {
    e.respondWith(fetch(req).then(function (res) {
      var copy = res.clone();
      caches.open(VERSION).then(function (c) { c.put('./index.html', copy); });
      return res;
    }).catch(function () { return caches.match('./index.html'); }));
    return;
  }
  // Demais arquivos: cache primeiro
  e.respondWith(caches.match(req).then(function (hit) { return hit || fetch(req); }));
});
