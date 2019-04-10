importScripts("precache-manifest.9ae6ec7eaa575a11795bf8140a27008e.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/*
 * This file (which will be your service worker)
 * is picked up by the build system ONLY if
 * quasar.conf > pwa > workboxPluginMode is set to "InjectManifest"
 */
importScripts("OneSignalSDKWorker.js", "OneSignalSDKUpdaterWorker.js");
self.addEventListener('fetch', function(event) {
});

