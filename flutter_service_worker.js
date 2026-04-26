'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"favicon.png": "7a9e12f570ef70817edb6ab6d2c09866",
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
"index.html": "4eb259e160abd1423f0a4983e5773ade",
"/": "4eb259e160abd1423f0a4983e5773ade",
"flutter_bootstrap.js": "6023025304b5040f6bd9ad9439397a28",
"assets/FontManifest.json": "08ff4bb172b3f3fdf6d18cf5c2ce2d87",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/mesh_gradient/shaders/point_mesh_gradient.frag": "6721e3c3c3b65cb49c2709c828288ffd",
"assets/packages/mesh_gradient/shaders/animated_mesh_gradient.frag": "493d2d0ae7c3fde1106a18b240e9ba79",
"assets/assets/animations/cong_example.json": "6209fc916c53e67a58b7fdb7acae27cd",
"assets/assets/backgrounds/dark_1.png": "989a6c14f9ce9d90c3690fa534ec84b6",
"assets/assets/backgrounds/ligth_2.png": "590303652aa438663e2091fc8c75f16c",
"assets/assets/backgrounds/ligth_5.png": "a06c16b786ad6292405df3fc709a4ba1",
"assets/assets/backgrounds/ligth_1.png": "59730881c44ea5ad7dade8b287615266",
"assets/assets/backgrounds/ligth_6.png": "5ca25b3df860d9e0b4920431785bbc3b",
"assets/assets/backgrounds/ligth_3.png": "1f805472af71c18de10d6467c00702f2",
"assets/assets/backgrounds/dark_6.png": "97d3c78a42c28186155950e0322ff318",
"assets/assets/backgrounds/ligth_4.png": "8a056737a1f005515bd495d3de325a62",
"assets/assets/backgrounds/dark_3.png": "4a400c0589b90ebc31f9b80b96cb4da7",
"assets/assets/backgrounds/dark_4.png": "47e6a2d0ce35e028882bc15685c3d427",
"assets/assets/backgrounds/dark_5.png": "5b67442d5c5a95c95f6770484da1816a",
"assets/assets/backgrounds/dark_2.png": "b21370aedfdc4b84785b81b992901019",
"assets/assets/app_sounds/error3.wav": "67c7dbb8f097093766798ba3c8a949aa",
"assets/assets/app_sounds/corect4.mp3": "6d20b5686f07d0cf6587ec482968d100",
"assets/assets/app_sounds/corect1.wav": "a7bd5386ff04aaaa4adaeb58e2693dcf",
"assets/assets/app_sounds/error1.wav": "a440632a837e2f384becbf16847eadfe",
"assets/assets/app_sounds/error_actual.wav": "12e132495528f235b4280ab588a02e02",
"assets/assets/app_sounds/error2.wav": "a440632a837e2f384becbf16847eadfe",
"assets/assets/app_sounds/corect2.mp3": "87c349125f08ce58054adb23ceb1d739",
"assets/assets/app_icons/icon.png": "74bea354a26125ffc8f1228ce461d5cd",
"assets/assets/mascot/mascot_celebrating.png": "d773b7667f28496998c1a52c2e965b57",
"assets/assets/mascot/mascot_reading.png": "8e17e88c20d05a5e54a0832266ca1aa9",
"assets/assets/mascot/mascot_superhero.png": "0229d6bcbbe60cd003836778f82e62b3",
"assets/assets/mascot/mascot_thinking.png": "34421514b7a6fb749c402887728ae5b9",
"assets/assets/mascot/mascot_welcome.png": "f5fd33a00e5cd3ead78e522c2d1bb261",
"assets/assets/mascot/mascot_keys.png": "be5fed5f9210cf4cdebea28576797192",
"assets/assets/fonts/Nunito-Bold.ttf": "906ea2fa1fbce04ff240591bae558937",
"assets/assets/fonts/Nunito-SemiBold.ttf": "6b1bb102b18463e7a713549d4ac63cfb",
"assets/assets/fonts/Nunito-Regular.ttf": "d5d6e052770fea72fb75108adf7a4a95",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "3684b8b50b20c7619461d517b29e499b",
"assets/AssetManifest.bin.json": "ed2a6287aaee56bcbe4d861e27276184",
"assets/AssetManifest.bin": "5201488eaa02c7113996678584f641b9",
"assets/fonts/MaterialIcons-Regular.otf": "c0006ed86434918fbdf9cacb1e7f0d4a",
"assets/NOTICES": "0a42d5a51fd201d28418f88b0f4862a2",
"main.dart.js": "f257766f7d83004e1db2d718e0d31d76",
"version.json": "8872aa6464d5d206fdde442060a73d58",
"icons/Icon-192.png": "c64fccd7abd859a651d4d5c65e8657c4",
"icons/Icon-maskable-192.png": "c64fccd7abd859a651d4d5c65e8657c4",
"icons/Icon-maskable-512.png": "53ce89053a8b52e59d21d64246bdcb80",
"icons/Icon-512.png": "53ce89053a8b52e59d21d64246bdcb80"};
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
