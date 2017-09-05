"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["index.html","657af021c4723d14ea95948e31206b7e"],["service-worker.js","3ea62e9abc2575fbe76f1506b9466e07"],["static/css/app.f703c10fe3899694efde3b4f21ad2513.css","4a560ba4c48a2790d0a9604c92b071cd"],["static/js/0.d0c9b6e2a2a3c9e222c3.js","7693b4f552f89fef81d1199c6aab50fb"],["static/js/1.70588147953e7616e4fc.js","2942d49c92737c982f304deb8efb4b34"],["static/js/2.1b77ebf92672c8f60458.js","6dc184c70ac2b96d9050d8a1d92dd237"],["static/js/3.679aaf5d196d805124b2.js","aa805571f7d3da30c7cc804e037ca628"],["static/js/4.aad030db4e2c6ba30c1f.js","550f5885943fde49c7b92ece16f16e57"],["static/js/5.e33e3be8a7f1c26eb16c.js","179df993a6d39ed189b70770a26ea44b"],["static/js/6.15697792cd48b4c5913b.js","0bd6557e4f0b39b206b51ccbdb1e08f9"],["static/js/app.7a221294f440ee85abc3.js","7e362d0d53451c6ce63e9c0ce9dbd85a"],["static/js/manifest.67892d8176baebf74ba3.js","9a3717491f655a0fc5c3318664732053"],["static/js/vendor.00a42b33fc3a39025c53.js","505780576dc44dc41fab2dec79f80b2f"]],cacheName="sw-precache-v3-my-vue-app-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,!1);return[a.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var a=new Request(n,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,"index.html"),t=urlsToCacheKeys.has(n));t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});