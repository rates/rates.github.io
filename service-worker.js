importScripts("precache-manifest.a21683cf4d2fadc816e93b0ca8615cff.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/*
 * This file (which will be your service worker)
 * is picked up by the build system ONLY if
 * quasar.conf > pwa > workboxPluginMode is set to "InjectManifest"
 */
importScripts("OneSignalSDKWorker.js", "OneSignalSDKUpdaterWorker.js");
self.addEventListener('fetch', function(event) {
});

