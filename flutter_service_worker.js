'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"favicon.png": "1969e5b1cb33a050764af6db3aa9b6c5",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"404.html": "b95ae5e58b251ca729c1ec01262f48bf",
"manifest.json": "dbffe298664d1a2979ad0144d7a660fe",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"index.html": "7a5b9c530b95abe907f4366ddeb437a5",
"/": "7a5b9c530b95abe907f4366ddeb437a5",
"flutter_bootstrap.js": "0064eb7a15bc4863ac687f11213c1126",
"assets/FontManifest.json": "08ff4bb172b3f3fdf6d18cf5c2ce2d87",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/mesh_gradient/shaders/point_mesh_gradient.frag": "6721e3c3c3b65cb49c2709c828288ffd",
"assets/packages/mesh_gradient/shaders/animated_mesh_gradient.frag": "493d2d0ae7c3fde1106a18b240e9ba79",
"assets/assets/animations/cong_example.json": "6209fc916c53e67a58b7fdb7acae27cd",
"assets/assets/backgrounds/home_light_all_02.png": "69812138671f09ba0f8abb3c6a206164",
"assets/assets/backgrounds/gameplay_light_all_01.png": "549d47c2104fc8f8a5be4f1dc25cc293",
"assets/assets/backgrounds/activity_3-5_02.png": "40e940e8a6128049a2025962c7684ccd",
"assets/assets/backgrounds/gameplay_light_all_02.png": "c47fe24d6f0a438d6e0c6cdc4d231eb3",
"assets/assets/backgrounds/home_dark_all_01.png": "07a4c97c43a36b52f185dedb7fa8f19d",
"assets/assets/backgrounds/home_3-5_01.png": "3da05657d5e26717c94f443af28aeaec",
"assets/assets/backgrounds/home_light_all_01.png": "d3f7f2f1b6cbca6871fa81e04fbf1172",
"assets/assets/backgrounds/home_3-5_02.png": "cf80a3c8e906368286050b503ed4767d",
"assets/assets/backgrounds/home_light_3-5_03.png": "1aa1b2beba776fe1832b067fae0ff3c8",
"assets/assets/backgrounds/home_dark_3-5_02.png": "a56a1cf66ff7b1c7039c97722ff1adea",
"assets/assets/backgrounds/gameplay_dark_3-5_01.png": "151cfe0cc67323e9379636ef4b8364f7",
"assets/assets/backgrounds/gameplay_light_3-5_01.png": "1c8897c1242af21c8ba62ebfea71e26a",
"assets/assets/backgrounds/home_dark_all_02.png": "16562e566fc22ed36aa02fde3b1d81ac",
"assets/assets/backgrounds/home_dark_3-5_01.png": "b2f20e9978d7c8c10bdb36f5f68e793f",
"assets/assets/backgrounds/activity_3-5_02.webp": "d5c34b608a7aca649e880d6c696ffd76",
"assets/assets/backgrounds/home_3-5_02.webp": "ddff28ac3cecc05b57c8c6c77c027f20",
"assets/assets/backgrounds/gameplay_dark_3-5_02.png": "fb641a303d35e810f8327963704ca7b5",
"assets/assets/backgrounds/gameplay_dark_all_01.png": "a4f297ec4ee87c9b6dd5079be423a5ca",
"assets/assets/backgrounds/gameplay_dark_all_02.png": "397741594bdb26452432f93b9835b9fe",
"assets/assets/backgrounds/home_light_3-5_04.png": "fcbaa4dbb97a0dd724896dfe2f861a81",
"assets/assets/backgrounds/gameplay_light_3-5_02.png": "7e2a6aa9bb8365178f6e6688de667017",
"assets/assets/backgrounds/home_3-5_01.webp": "939c65aaf2b77e2861526d0fb7011c3a",
"assets/assets/data/activity_seed_dump.json": "d71af68a894734662cade124cc596fe4",
"assets/assets/app_sounds/error3.wav": "67c7dbb8f097093766798ba3c8a949aa",
"assets/assets/app_sounds/corect4.mp3": "6d20b5686f07d0cf6587ec482968d100",
"assets/assets/app_sounds/corect1.wav": "a7bd5386ff04aaaa4adaeb58e2693dcf",
"assets/assets/app_sounds/error1.wav": "a440632a837e2f384becbf16847eadfe",
"assets/assets/app_sounds/error_actual.wav": "12e132495528f235b4280ab588a02e02",
"assets/assets/app_sounds/error2.wav": "a440632a837e2f384becbf16847eadfe",
"assets/assets/app_sounds/corect2.mp3": "87c349125f08ce58054adb23ceb1d739",
"assets/assets/app_icons/icon.png": "9fc70f268a7772f41f949840744c4c1e",
"assets/assets/fonts/Nunito-Bold.ttf": "906ea2fa1fbce04ff240591bae558937",
"assets/assets/fonts/Nunito-SemiBold.ttf": "6b1bb102b18463e7a713549d4ac63cfb",
"assets/assets/fonts/Nunito-Regular.ttf": "d5d6e052770fea72fb75108adf7a4a95",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "55a8e92c7b6e761027893eea5aaffb6a",
"assets/AssetManifest.bin.json": "a58312f93952fb149d55ec3e0bf6c4ce",
"assets/AssetManifest.bin": "eef7652a12a1e1c1c8fdc3fd8b8c7809",
"assets/fonts/MaterialIcons-Regular.otf": "c382b947ed9acfeeb64645f757692bba",
"assets/NOTICES": "0a42d5a51fd201d28418f88b0f4862a2",
"main.dart.js": "d7dc0e744e72cd78a5a71740140f80c0",
"version.json": "8872aa6464d5d206fdde442060a73d58",
"icons/Icon-192.png": "9bcd0f92dbb46173039cda147ecb4c07",
"icons/Icon-maskable-192.png": "9bcd0f92dbb46173039cda147ecb4c07",
"icons/Icon-maskable-512.png": "31f5502224478856c4164228155535da",
"icons/Icon-512.png": "31f5502224478856c4164228155535da"};
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
