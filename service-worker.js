if(!self.define){let e,i={};const c=(c,d)=>(c=new URL(c+".js",d).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(d,r)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(i[a])return;let s={};const f=e=>c(e,a),n={module:{uri:a},exports:s,require:f};i[a]=Promise.all(d.map((e=>n[e]||f(e)))).then((e=>(r(...e),s)))}}define(["./workbox-f2efd100"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"9e8d0c07cb6d40f41465d26eb29678ce"},{url:"404/index.html",revision:"04f21a163bc860501d89101f9a15e15d"},{url:"about/index.html",revision:"28529613a1e5e1b5ee2b787c1d883adc"},{url:"archives/2023/02/index.html",revision:"5d39d22a86b5fd4d5e845ca9ab6d143b"},{url:"archives/2023/index.html",revision:"d1c3830bc2b825d3e36bc9549ebe9f83"},{url:"archives/index.html",revision:"7f70572827f7508a240627e3f1446731"},{url:"categories/index.html",revision:"e84188d97b531b2cc6bf7f6ce95c1376"},{url:"categories/技术/index.html",revision:"d3b323cf50ccde115cf92c7e0be8bdd3"},{url:"categories/生活/index.html",revision:"677d7364db8ce5eac19813242db3bc75"},{url:"contact/index.html",revision:"bc4b71c3278a1a595021cb7219185eab"},{url:"css/index.css",revision:"2b02af7eea3d142db0cdf569db417a52"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"friends/index.html",revision:"1807ef6f9ccdb84675210f49868f5881"},{url:"img/404.jpg",revision:"8190796a570d269ef04b777d93d44e6d"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/avatar.png",revision:"07db0a0bf9fe30ce1897eeb6a0762373"},{url:"img/cat1.jpg",revision:"509b765fc4102a4f48b3411cb7a877b9"},{url:"img/comment_bg.png",revision:"34a79bf208a1c3bee9d6e491a00cd369"},{url:"img/default_cover1.jpg",revision:"de73b52348d3d259606ec95ea25f796e"},{url:"img/default_cover2.jpg",revision:"e0c30094fae85d4df8df8dc6fcaf94de"},{url:"img/default_cover3.jpg",revision:"ea9b595d5f60a537f5a76d8a75496e3c"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/loading.gif",revision:"05fb29f4e677ff6057ef55925f46e9b0"},{url:"img/logo.png",revision:"3bbb88dd44f7a2fdf0421488e634eb0a"},{url:"img/siteicon/128.png",revision:"d35608285935fcda1845fc71affb3c07"},{url:"img/siteicon/144.png",revision:"1e969edb1380ec1f37f2fd280c7b9fc3"},{url:"img/siteicon/16.png",revision:"3d50cd2309fc389169cd4bf414e223c8"},{url:"img/siteicon/32.png",revision:"85ccd5d6f94198a230fa6343be147c9c"},{url:"img/siteicon/48.png",revision:"349753fb49ba72796aed9c94521111a7"},{url:"img/siteicon/512.png",revision:"cb259b040d1ce304887cb28880f4b34e"},{url:"img/siteicon/64.png",revision:"8a035a035c61c6a17069c6d925947bf8"},{url:"img/tang/pic1.jpg",revision:"ff8d0b8658484807431d5fdc662c0054"},{url:"index.html",revision:"47144417bafb4f15df8e79c487e729e8"},{url:"js/main.js",revision:"f6453b72fa953e98045d985ea38bca72"},{url:"js/search/algolia.js",revision:"4ec96643b63f6d8e6045cc5bc052759f"},{url:"js/search/local-search.js",revision:"d0bc4422e951d7c4a4380bce3028efbf"},{url:"js/tw_cn.js",revision:"56373849722f576f4dba2efd9b96e6c7"},{url:"js/utils.js",revision:"574e8f30e938765eb57a39f5edde09a8"},{url:"link/index.html",revision:"5af9c3a4e5cd9798b19c842a8769c05a"},{url:"live2dw/assets/moc/koharu.2048/texture_00.png",revision:"495eea8d906c2b03abfe3fa9de2f2a8b"},{url:"live2dw/lib/L2Dwidget.0.min.js",revision:"32973883fcac0a9ae6cc79c0ea25fda2"},{url:"live2dw/lib/L2Dwidget.min.js",revision:"094cbace49a39548bed64abff5988b05"},{url:"posts/1654194f.html",revision:"e19951327d53b7d3466f7635761a41b6"},{url:"posts/25e1c0d9.html",revision:"83b6b73c4a5c32ea397fa9f751d012fb"},{url:"posts/6393c1cf.html",revision:"d398b67dbaec08533cf34e06cfa61261"},{url:"posts/6820c6bc.html",revision:"6e769bd4c67f68c12c7de4183bacc450"},{url:"posts/ab5b7cc3.html",revision:"77923ef37dce837e1362c4205d161875"},{url:"sw.js",revision:"c45208a8233a9cf5744d47f145605e8f"},{url:"tags/GNU-Linux/index.html",revision:"3659364f3240ccc6b3d524d96a0261b1"},{url:"tags/IC设计/index.html",revision:"697a2d1c2f23b5e3cff3a75524dbf339"},{url:"tags/index.html",revision:"864c4358ab6a5ea66aaf39a6ccb32d9b"},{url:"tags/tyh/index.html",revision:"ee5bba4a614a118c97b8d388871e8d72"},{url:"tags/Vivado/index.html",revision:"f55d2167419af40c77cbb7951e5833b1"},{url:"tags/VMware/index.html",revision:"18b7809750844eb4c8f9d79c8c379f82"},{url:"tags/wzm/index.html",revision:"2eb46cfcf6a1536bd7cb7537e9bd3013"},{url:"tags/虚拟机/index.html",revision:"3a0ba2490d1a73d4324c591027858d2f"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
