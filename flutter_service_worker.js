'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "5b7655d466c06f3fb8d33134f0d00d22",
"assets/AssetManifest.bin.json": "7ee7a8ba480aa5d5a6005f653578953f",
"assets/AssetManifest.json": "0041e0833c1cea178136e3ddaf4aeaac",
"assets/assets/images/1_Generic_32x32.png": "48e27dc182a747eb53cec842259a57ae",
"assets/assets/images/4_Bedroom_32x32.png": "8ba54559614da6e601c2b9351b69fe34",
"assets/assets/images/animated_control_room_facebook_scrolling_32x32.png": "4b7c378838978e084816e4a7b99ddfb9",
"assets/assets/images/animated_door_4_32x32.png": "2ed7cfb3dacccbc52e73a026d0cc4830",
"assets/assets/images/animated_door_big_1_32x32.png": "f2f8c09e53504d729c9d6d25330820db",
"assets/assets/images/animated_door_big_1_locked_32x32.png": "bb15465af103452894525a183f68ce1a",
"assets/assets/images/animated_door_prison_32x32.png": "0c92f547d521b6282a56acbb87d36a74",
"assets/assets/images/animated_door_vertical_left_1_32x32.png": "2a579f6de7fd25cb67b03b9c0ea5ed98",
"assets/assets/images/animated_toytrain_32x32.png": "e8bd489bc9cda39453a3a92fc041959d",
"assets/assets/images/bkg_tile.png": "9dfecf53861b7e30d960e67ea2fce76e",
"assets/assets/images/Generic_Home_1_Layer_1_32x32.png": "1d846dd01bef07a5af0413ecb8ca69b0",
"assets/assets/images/Premade_Character_32x32_03.png": "7a72ccaf215b879deea46602cb0be37b",
"assets/assets/images/testplayer6.png": "8ad6b917dad5111321bfb345c0e0ddd4",
"assets/assets/images/testtileset7.png": "31169589e1d70f00d4009842765d8fc1",
"assets/assets/tiles/1_Generic_32x32.tsx": "343f511cb0526d257a9240dd1308cee8",
"assets/assets/tiles/4_Bedroom_32x32.tsx": "306c2d39261cd46fb651bc1b7dc12d62",
"assets/assets/tiles/animated_control_room_facebook_scrolling_32x32.tsx": "5fa83b6ebde98bd0377a7601c24ac867",
"assets/assets/tiles/animated_door_big_1_locked_32x32.tsx": "759baf7643b60fb61b5507f1e2c0c2ce",
"assets/assets/tiles/bkg_tile.tsx": "2623374716c7f0a3eaba49d1bb89957e",
"assets/assets/tiles/gameTest.tmx": "c9aeaeb110ece06ce6545fbc270fe2ea",
"assets/assets/tiles/Generic_Home_1_Layer_1_32x32.tsx": "0e327068028cadec3da0a31bec763e06",
"assets/assets/tiles/testtilemap.tmx": "478cc85d36b0dab12de1b2986e441111",
"assets/assets/tiles/testtileset7.tsx": "3a4d34e4de02f390e29e0fc12d764f87",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "7ad08c2b0805de6cd4de5323e82bfa4f",
"assets/NOTICES": "6d92094e113ccfcce854aa93b5631e8c",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "2a78bc86121028a45a36576872f8be14",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "92dce6bc1844e1334426772ef9f5d8f9",
"/": "92dce6bc1844e1334426772ef9f5d8f9",
"main.dart.js": "a6dc5b9d7b6b653d859d3e96b549b6b4",
"manifest.json": "6a804c3c5a0e48cf32e06a99f75ac260",
"version.json": "8e4a3262a9eeefc16e9aa8e3be0f65d5"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
