'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "e2eb3b7401f62bab07156b8b6ad655c2",
"assets/assets/ca/lets-encrypt-r3.pem": "9b8740c5387a2fd70006d3cbf2229a0c",
"assets/assets/images/2x/flag_en.png": "a5d3ddaa219e23d82d8809981093dc4b",
"assets/assets/images/2x/flag_ru.png": "2648f501f353395ed4dbbf65f17617c6",
"assets/assets/images/2x/flag_tk.png": "242ab4e13d8277f0e2284baa85cce926",
"assets/assets/images/2x/flag_tr.png": "15d6e3409768b307193b89bac5dcf24d",
"assets/assets/images/2x/navbar_category.png": "c39b09934be40b408a48859eaf76fece",
"assets/assets/images/2x/navbar_company.png": "9a6669c3bc33d791216b8d3e9f638abc",
"assets/assets/images/2x/navbar_home.png": "c7e98b2b9cb69eeb623661f8f512e781",
"assets/assets/images/2x/navbar_login.png": "60a8f1d57e519e57a8d1e67171a8e4f8",
"assets/assets/images/2x/navbar_settings.png": "da974160e22cdcb65489372dcd23b744",
"assets/assets/images/2x/navbar_transport.png": "d7e329a140b6eae9cdd82f3834de102b",
"assets/assets/images/3x/flag_en.png": "d0f4b5d7b61d185aab134458b2b9b0e7",
"assets/assets/images/3x/flag_ru.png": "ebae4dc16a17668459167290c6fff636",
"assets/assets/images/3x/flag_tk.png": "6ad2d4b7f7d77fdbcacedcd47cdd57cb",
"assets/assets/images/3x/flag_tr.png": "174dc67a9919442a3e0ca6e162a67d57",
"assets/assets/images/3x/navbar_category.png": "8d0cc4d404a4781eca88f5bd5a91753a",
"assets/assets/images/3x/navbar_company.png": "3fd22e12737502202c5cd70184045a47",
"assets/assets/images/3x/navbar_home.png": "9635b4f911d05cc1a03d92c335d42663",
"assets/assets/images/3x/navbar_login.png": "5bc321113804fa3eebade5f269314bce",
"assets/assets/images/3x/navbar_settings.png": "af7663a87925c1448226acaafbaeff23",
"assets/assets/images/3x/navbar_transport.png": "791ef31ffabb6979ee5f42de3d8e3c23",
"assets/assets/images/4x/flag_en.png": "aa005395c3b5c44fc9ad067be8f7c6fc",
"assets/assets/images/4x/flag_ru.png": "442d13236077dc754ba6728eaacb1d47",
"assets/assets/images/4x/flag_tk.png": "f17dc37924928491a964dd4d30854a20",
"assets/assets/images/4x/flag_tr.png": "d6ebdc67e1e8e789963a1b4687553c72",
"assets/assets/images/4x/navbar_category.png": "e6e369da6f387b3cb4c15f5aa2c2913e",
"assets/assets/images/4x/navbar_company.png": "5d381c9212ceb361a5aa75cd1ae0fec8",
"assets/assets/images/4x/navbar_home.png": "5e42635305756deb0757c88b93c509f2",
"assets/assets/images/4x/navbar_login.png": "ceafd025647c3d3c19483c767fca41d4",
"assets/assets/images/4x/navbar_settings.png": "e256ab1e5c111e95d4ae3571de6ddda9",
"assets/assets/images/4x/navbar_transport.png": "ef92b9089404e4e5e5addcaaef2f3671",
"assets/assets/images/counter_category.png": "103c0bc287d43868a2d18d9a2a4303ff",
"assets/assets/images/counter_company.png": "27997b0d870cf976840e9c39bce785ad",
"assets/assets/images/counter_transport.png": "f43e7ffab41d1e76f80a9b8040fc56fe",
"assets/assets/images/flag_en.png": "6dbcbcabe3f221eb1853f64349205e4e",
"assets/assets/images/flag_ru.png": "d844c471a79530dd987f7bfc05f3b5e4",
"assets/assets/images/flag_tk.png": "2188e3a2c797dcfe35e59d8059405508",
"assets/assets/images/flag_tr.png": "8d4ce2d53e1998764276ff7a6a8f62f8",
"assets/assets/images/navbar_category.png": "e7b256e9f506c1a159b7f6abf582e0c4",
"assets/assets/images/navbar_company.png": "b3c0feff5e8decbfe510c7ec2d239fd5",
"assets/assets/images/navbar_home.png": "ccf27c0adfc8ffe833ae0655f8352b06",
"assets/assets/images/navbar_login.png": "e9244488eddd32e725d238284d2f7dba",
"assets/assets/images/navbar_settings.png": "611c53badce23f4e35a4d01381306316",
"assets/assets/images/navbar_transport.png": "d659872c0564bf3c5d456b56b12a6441",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/lang/en.json": "079a3ba86e78c54cad934f0d699f97d5",
"assets/lang/ru.json": "39f375c601799ad94d5b6a988afd3476",
"assets/lang/tk.json": "49b50637a4c99b9ac0a9ad96e7943d11",
"assets/lang/tr.json": "cd4f58f8ed409daa9712a5ac2a227fb4",
"assets/NOTICES": "f42e6140c686452e31eba51d430dcfd3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "099b25423003b9574b693a4656e53129",
"/": "099b25423003b9574b693a4656e53129",
"main.dart.js": "f82672f71c1daab39a34841cf8934686",
"manifest.json": "8e1ebafbd1f68ce43b1ccd1f97c94bfb",
"splash/img/dark-1x.png": "c1de2fd75245e31284b65b495333be9f",
"splash/img/dark-2x.png": "c2d25129805101aa06c7966f903d5eaa",
"splash/img/dark-3x.png": "3ebee86af494010623fa63442c773815",
"splash/img/dark-4x.png": "6f5caa733e0669a3b3cdd7e5c2b0a5eb",
"splash/img/light-1x.png": "c1de2fd75245e31284b65b495333be9f",
"splash/img/light-2x.png": "c2d25129805101aa06c7966f903d5eaa",
"splash/img/light-3x.png": "3ebee86af494010623fa63442c773815",
"splash/img/light-4x.png": "6f5caa733e0669a3b3cdd7e5c2b0a5eb",
"splash/style.css": "66b8d9e3828234559a1897a9eb1deaa8",
"version.json": "450bb4b5946b4fe0d44fdfe07a02f698"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
