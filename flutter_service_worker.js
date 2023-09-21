'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "f633dac77c94a46e2c032d30851cbbb5",
"index.html": "c4fcb7a3306d47c1902ddf061a6f846d",
"/": "c4fcb7a3306d47c1902ddf061a6f846d",
"main.dart.js": "58578d2167048e51bc3f50d48d04fa41",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "b76c07e055537a0eea2af36d82ecf518",
"assets/AssetManifest.json": "901fd1be9e675907c893b7a62badc646",
"assets/NOTICES": "c882eda6cbd670fa970bf89c64e5562c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.smcbin": "1376eeb78db2d8b3930447dbb5374afa",
"assets/fonts/MaterialIcons-Regular.otf": "3b99b46c88032dca9eb7521c84b13e4a",
"assets/assets/contact/mastodon_logo.svg": "0b86e21b4e85acd0f2c4c1ec30cdd8ba",
"assets/assets/contact/github_logo.svg": "91a40edc6eab6c897847f61e33397296",
"assets/assets/contact/linkedin_logo.svg": "6fd100637897d74c56be90f9f25f1aa1",
"assets/assets/contact/threads_logo.svg": "109dfcb15ee36854018d13ebc4ad121a",
"assets/assets/app_img/app_sample.jpg": "aaa60393c4a909377e107d28094477bd",
"assets/assets/img/profile_img.jpg": "a15e426e0adf1b410381a6b8ad2bf182",
"assets/assets/img/contact.jpg": "a27af9878a885c37a15c3d241552d75e",
"assets/assets/img/avatar.jpg": "5efdc7a77b1587a43cb621e4a9e63f5b",
"assets/assets/img/visits_picnic.jpg": "a1aa783ea6ea6a734786f7158d5c6f24",
"assets/assets/img/collage.jpg": "4c101d1150999d88b25c4bf7bf681513",
"assets/assets/json/projects.json": "48e3b54ade3cab4c54c5bb0c15a075ab",
"assets/assets/json/technologies.json": "96643d9172e85cd4f564ccea81eed2ee",
"assets/assets/logo/logo_svg.svg": "a4ce9b5f79e20c4826d018c0d8fa11cc",
"assets/assets/logo/tablet_logo.svg": "e01cb83cdfb69dd66a4da3a7ccc73537",
"assets/assets/icons/app_icon/citi_icon.svg": "2410cf9c009a1de4297c0d9b493b39ae",
"assets/assets/icons/app_icon/dgnotif_icon.svg": "a105fa8529ab2d44844480cf115b2d46",
"assets/assets/icons/app_icon/pocket_icon.svg": "d034254c5f2388cbf241e4275f97f7b5",
"assets/assets/icons/app_icon/jonb_icon.svg": "d118f7ac03a637934290da104f93c80c",
"assets/assets/icons/app_icon/aplus_icon.svg": "e7c8c9370df95f8dbdf2a6929774ee2e",
"assets/assets/icons/app_icon/lesson_icon.svg": "3b05fa06cce623ea94d37049c47f8049",
"assets/assets/icons/app_icon/pulse_icon.svg": "5a1858c671939ad233a74fdfcb8a29f5",
"assets/assets/icons/app_icon/toaster_icon.svg": "208c3dec2404505328eedb37f403c573",
"assets/assets/icons/app_icon/blue_icon.svg": "71feb9b0645fd2643d1b8a63d8aab957",
"assets/assets/icons/app_icon/myadt_icon.svg": "14527ce0e993687dd9491bc19609c94e",
"assets/assets/icons/app_icon/clark_icon.svg": "2b7eb4541094697135de343d54f3aa1b",
"assets/assets/icons/app_icon/fived_icon.svg": "7c79d8c169c17c632e7d73fec25825dc",
"assets/assets/icons/contrib_icon/api_icon.svg": "172c7cd65a7e94c6966c3e73912e4a21",
"assets/assets/icons/contrib_icon/dev_icon.svg": "4b8c6a89fa76dff57e3f9072ec400107",
"assets/assets/icons/contrib_icon/localdb_icon.svg": "45ebb1721917be1978aa9bd1551ea0c6",
"assets/assets/icons/contrib_icon/bluetooth_icon.svg": "61aa9128802aaafe25e43cc4e0a9e054",
"assets/assets/icons/contrib_icon/poc_icon.svg": "99a82a5c4f7e7e88ebed86441c436d21",
"assets/assets/icons/contrib_icon/appstore_icon.svg": "f230862dfa0a99e17c7e61b90319e210",
"assets/assets/icons/contrib_icon/access_icon.svg": "725a2fd25443960de833de29897e607d",
"assets/assets/icons/contrib_icon/arch_icon.svg": "0316664e770946b8539a54dc5b3963ee",
"assets/assets/icons/contrib_icon/libdev_icon.svg": "09ad75286ff9944ab364c886625adf9a",
"assets/assets/icons/contrib_icon/auth_icon.svg": "efcecabab5f9ae3ea0643e2ffb8d8610",
"assets/assets/icons/contrib_icon/unittest_icon.svg": "7fd5c75234c5d7b4fc68aaa95bb62454",
"assets/assets/icons/contrib_icon/mentor_icon.svg": "9ca2ef21594c744d5d64db2484c1496a",
"assets/assets/icons/contrib_icon/design_icon.svg": "7f3305a56f27ff4c64d993bc53a15c13",
"assets/assets/icons/contrib_icon/cloud_icon.svg": "0e9db8250fa7d2c58f239bf8998bea3c",
"assets/assets/icons/device_icon/tablet_icon.svg": "c5902386b21a586f0cc7a962c71c67df",
"assets/assets/icons/device_icon/phone_icon.svg": "84a8a8429e67766f6515a5344d0be62c",
"assets/assets/icons/device_icon/tv_icon.svg": "cd2c55e7dcd0fdf63fcde43c15d52be0",
"assets/assets/icons/device_icon/watch_icon.svg": "b0d1f0c1e4f688ce7ea0754e6c4427ba",
"assets/assets/icons/device_icon/library_icon.svg": "aaa9442ee8d2f43ddf16018c3915c5ed",
"assets/assets/icons/tech_icon/rive_icon.svg": "ae8c9f47d6d8c6b70ec6e435f2700ca3",
"assets/assets/icons/tech_icon/swiftui_icon.svg": "8c7eb8dc128f89387c45d1a6af5a4303",
"assets/assets/icons/tech_icon/git_icon.svg": "29dad515dcbc2d59e16a4b1ed8cecba7",
"assets/assets/icons/tech_icon/carthage_icon.svg": "d3bdd699c5062466a2f20765689c67bc",
"assets/assets/icons/tech_icon/firebase_icon.svg": "a6876d3e87b3d39d32f49d298162c7f8",
"assets/assets/icons/tech_icon/dart_icon.svg": "c36e142f5aed1ad1efe6b7bef191af51",
"assets/assets/icons/tech_icon/bitbucket_icon.svg": "3f278c1276035592bf3ee60a71c6cb14",
"assets/assets/icons/tech_icon/spm_icon.svg": "53114ee4dc38a2f5c4a969b12d1ba69d",
"assets/assets/icons/tech_icon/figma_icon.svg": "da9327d851c516ae853f8c30238ff57e",
"assets/assets/icons/tech_icon/github_icon.svg": "8cf2f605179d38ad27ab0fc704a0615a",
"assets/assets/icons/tech_icon/dartpkg_icon.svg": "adffbba191eecb4a45cd4f68c3a1f29e",
"assets/assets/icons/tech_icon/lottie_icon.svg": "935b553047f7e88172383da88236b0c3",
"assets/assets/icons/tech_icon/swift_icon.svg": "d260eb831c96a9337e4be3063fc11d6d",
"assets/assets/icons/tech_icon/snapkit_icon.svg": "19d4cbd037842a0cf17a7777a1fad5f3",
"assets/assets/icons/tech_icon/supabase_icon.svg": "f469a65c8845ea7fea3222129572b173",
"assets/assets/icons/tech_icon/auth0_icon.svg": "8789248c13fc97544cafada3c4b6cd35",
"assets/assets/icons/tech_icon/objc_icon.svg": "46bb5b8d74c620802b87f76f8e905493",
"assets/assets/icons/tech_icon/autolayout_icon.svg": "d8e51d084429cad1adca422363ddd9ae",
"assets/assets/icons/tech_icon/pods_icon.svg": "f1a661057df4b57f73c6f60599fbcd18",
"assets/assets/icons/tech_icon/flutter_icon.svg": "61e1b66897488aaaa26a0966a6acb04c",
"assets/assets/icons/tech_icon/sketch_icon.svg": "790199361dc2a91cfa374b400f3e18f4",
"assets/assets/icons/github_dark.png": "cc3585d70ca752f8c69d2b04da3222a2",
"assets/assets/icons/mastodon_dark.png": "0b2414b4d971bcb725dc0e974507dee1",
"assets/assets/icons/btn_icon/appstore_icon.svg": "ea278ba515d9355913b872b56519b82b",
"assets/assets/icons/btn_icon/github_icon.svg": "0317eeedf9047b7d663f6b881b77b5a8",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
