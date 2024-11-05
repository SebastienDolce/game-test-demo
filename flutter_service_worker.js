'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "b4031b2db95ad4760287041371e98236",
".git/config": "68f3467a38026a9120d46cee156fac4e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "37ae70af0be54e5328edfb0acbdaf98b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "24299b119e993e885c2124e83a06b754",
".git/logs/refs/heads/main": "fa92b779988f5dca7334aeb27de34c8c",
".git/logs/refs/remotes/origin/main": "e1da4d20b5cee1188e5a4e5f2082b6d1",
".git/objects/05/367d9e672333ee9b188ede5d3b6cedab8a0d50": "1be5d72a25e77d5af0e0d956a7fe1cb3",
".git/objects/07/292d564d5881764239bcc432bc67d14133501f": "276fd2d13dba1b63d2899026b0d9b622",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1c/3437fe22c28d0879fd8986c69f839f1c844dc2": "d4a303bd275705d2ad2704a9efea3686",
".git/objects/1d/88fb5a9c4cef41741be603560d4936e8efc9d4": "bc5f8bc2df01d7a21a93c54030ae6597",
".git/objects/1f/768d2c910567c61bbe230a43035d5c5f1edb58": "bb7af1545a67e6d8f90eeb8ba3389579",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/21/b7d763b03983a8ee441df6eb2344a29f4a3c74": "f84e2487f3a3324471e6010e8c37d3e5",
".git/objects/2e/8b0d4bef6cf95edbdb9b0fa4dff342f43746eb": "e86c55a6599d03e5a559644130d3d2cf",
".git/objects/2f/51b38e1f5a6ebec83732ca1781e8acefc837ad": "11197895169a6fc7fd1cb7c7a2ef0773",
".git/objects/32/c6ccf57dac6df7173ddc29f4a837cf40c80ae8": "d81bfcc27eb80890c3e8c0b01e4bbf3d",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/40/cc284dd59b7e1226557c9803c4b356cbd5b0dc": "275a557fc1eeabf93e2b04a70992dab3",
".git/objects/46/80817fc39620a6803f84953b7c222ebed909c3": "a4c32f4238cdcc7b1220358836b28f15",
".git/objects/48/746b58c5fdb70f949baa4bbd029ebe3db41fab": "84e1cba53c924f9e56aed0a4aac0101d",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4b/48e9f74cb5d933984e5c69ae968aa10e5dff06": "e40d2f3880bb21712a5c0c0e4a7148f4",
".git/objects/54/19013900afd2caadef046ae15e7be6e1fda6a4": "9c334e8db0ae99d0276cac6fff171c5b",
".git/objects/54/7efd2837562a5e9491dafc3db0944070a0e0b4": "1b26ddce14e27aa56319082ea954b8f2",
".git/objects/55/305cb610754fe0ce3a24658cfd39bad79c6ccd": "3e02a8e3e5a57039865e5a0e917da26a",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/5a/c07e820cc66ca04e0a6a05d396ef13958918af": "25c36cb94991eef386f14c61016f0440",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/67/9496dd5b78885a009f9201e90ca55a4d3bd7a1": "fe25e69f506bfe732e8f0699de8ad4fc",
".git/objects/6b/ee485d340d55dabce1855f8d1afae3c56a8d42": "cb73d180f09cb61e9e2afe6600305d7d",
".git/objects/6d/d799528dae2282e6f6696d70be9e0bef6ebf2e": "435146ba95016011c83b6a6d3edb8222",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/7d/21aacd4516620e229b3628c1f38b30a107caea": "10a09cd0b0d9cf921fee9c0dc4811e7b",
".git/objects/84/c8efbe9d3b11bb71010330fdd4cb4572bbcf56": "cc0b24e45fd7363f8df19b4754e9fa8a",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/db827ff16e1457a40c2e00be5b0a135f57707f": "a2c8eb17ab75952dd2fbc4686a4af282",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/d3f51b3dd6325bd69c61d66419942ded9345e3": "29a713b8d9963b09c3854e58c14add80",
".git/objects/90/788dd0373445786c756ec7e76c26a96e4ed9cc": "fde8a5bde6dac06868646730fe442882",
".git/objects/92/b38653fadda6c6475fd1f714818cfcc4deb260": "260b0722e4f090f1b0566bfd4f35f9f9",
".git/objects/94/13ff65bf1a40997f89a5a532882d277dc39680": "3fbdb9cc9b988fee5cc5b2a59f2fe15b",
".git/objects/94/d90dcf6a416fcab847b0565c4a5ae79014588f": "05936ff8d087a8a6fe538a838a426f3f",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/9c/edb56eb584b514c4e3d39965b4f0273b957974": "05ea56c06533b599dd25a22648659215",
".git/objects/a2/0205c7381486937e3dfb1d78b08e4c873c2923": "2adcd6c6d47bf13cb0b934dc72bad221",
".git/objects/af/c71fadd0aa96b44d89b75cb91b30f1ad2903b9": "b4a1903eaa39cbc7a91d35902b4cc022",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c0/3d8a94e7e06690f33a661e52860f4764272461": "2fe4b4ab52827bad517d35e36327b26f",
".git/objects/c6/94168dee4555e333bdd0889be2f237ba37d3f2": "6bc5defb5322164df9cfa39a162db9d8",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/cf/5ab338ea13c9699c83503de9b5095298c57d4a": "6547b63aee12ad4ac052be7ef6152368",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dc/713151342eace07db95b8a518f43b91d2cca42": "1c55d94291fddfd0bd0a2b8372fb3c9d",
".git/objects/de/f3e11480407caa56e40bddc3441de9e40bb10f": "f80491c4e5db7229ef3e9eb4a516d7ca",
".git/objects/e7/5a5e23c8064a73ed46c708ee9f62fea6621b01": "54ed612b7482093ca0bf6eec8c31e2d6",
".git/objects/ea/d6f44461427c109e111a5a9137563b04463cd5": "01273d87aa3fc2321c818531a18db69f",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/3603487210e84a5427fed0d90919e3247e4e0f": "ef85655df787b2a6d0dbce44bf7700b7",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/7a0b34539bbd3114d782c680aaef7edd8e095a": "70648ae518b2a99648f2b8b126bf1a10",
".git/objects/f6/ddd7390533b74a05885cff773524e7be51b02d": "7dea579aeac3e2a754a53719429c07b8",
".git/objects/fb/3e086f380aab4bccca4547d6cb5dde36a25a22": "4df5b2ae862ff6e2a2dbac7dc046f931",
".git/refs/heads/main": "594636eba5a04434e7be62d70a596b83",
".git/refs/remotes/origin/main": "594636eba5a04434e7be62d70a596b83",
"assets/AssetManifest.bin": "5b7655d466c06f3fb8d33134f0d00d22",
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
"flutter_bootstrap.js": "1e778be14d13bf906aab0ea2265f00d5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d95c45768c9383bf0ddc52085aa05c5a",
"/": "d95c45768c9383bf0ddc52085aa05c5a",
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
