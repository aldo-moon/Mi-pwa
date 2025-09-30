// public/sw.js
const CACHE_NAME = "mi-pwa-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/manifest.json",
  // Los iconos que tengas
  "/icon-192.png",
  "/icon-512.png"
];

// Instalar el service worker y guardar archivos en caché
self.addEventListener("install", event => {
  console.log("📦 Service Worker: Instalando...");
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log("✅ Archivos agregados a caché");
        return cache.addAll(urlsToCache);
      })
      .catch(error => {
        console.error("❌ Error al cachear:", error);
      })
  );
  // Forzar que el SW se active inmediatamente
  self.skipWaiting();
});

// Activar y limpiar cachés viejos
self.addEventListener("activate", event => {
  console.log("🔄 Service Worker: Activando...");
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            console.log("🗑️ Eliminando caché antigua:", cache);
            return caches.delete(cache);
          }
        })
      );
    })
  );
  // Tomar control inmediatamente
  self.clients.claim();
});

// Interceptar peticiones y responder desde caché si es posible
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          console.log("📂 Desde caché:", event.request.url);
          return response;
        }
        
        console.log("🌐 Desde red:", event.request.url);
        return fetch(event.request).then(response => {
          // Solo cachear respuestas exitosas
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          // Clonar la respuesta para cachearla
          const responseToCache = response.clone();
          
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseToCache);
          });

          return response;
        }).catch(error => {
          console.error("❌ Error en fetch:", error);
          // Aquí puedes retornar una página de error offline
          return caches.match('/index.html');
        });
      })
  );
});