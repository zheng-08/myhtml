const CACHE_NAME = "zheng-an-v1";
// 列出你需要缓存的文件
const urlsToCache = ["/", "index.html", "index.css", "index.js", "logo.png"];

// 安装阶段：把文件存起来
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// 请求阶段：有缓存就用缓存，没缓存就联网下载
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
