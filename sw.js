const workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/5.1.3/workbox-sw.js"),workbox.core.setCacheNameDetails({prefix:"tyhiwzm"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"1c0a888f50e0204c143832bd1d4efa3c",url:"./404.html"},{revision:"8041f50080f219fb0174662aa3640b98",url:"./index.html"},{revision:"88aced9e00713346dbf5f92453a349b2",url:"./js/main.js"},{revision:"adb33ccf40be73637b4eb629b1cee4a1",url:"./css/index.css"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();