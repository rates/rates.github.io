importScripts("precache-manifest.0bce5507328c2ae952720852f61a0569.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/*
 * This file (which will be your service worker)
 * is picked up by the build system ONLY if
 * quasar.conf > pwa > workboxPluginMode is set to "InjectManifest"
 */
importScripts("OneSignalSDKWorker.js", "OneSignalSDKUpdaterWorker.js");
self.addEventListener('fetch', function(event) {
});

