if(!self.define){let e,i={};const d=(d,a)=>(d=new URL(d+".js",a).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(a,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let f={};const s=e=>d(e,r),b={module:{uri:r},exports:f,require:s};i[r]=Promise.all(a.map((e=>b[e]||s(e)))).then((e=>(c(...e),f)))}}define(["./workbox-f2efd100"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"0a2f9d4b6270b83a3c9caf4861f0b1d7"},{url:"404/index.html",revision:"5328e63ff996ea6d92fd5f0c46aa9589"},{url:"about/index.html",revision:"4937d0d0b7cfd39700056394da3223d8"},{url:"archives/2022/12/index.html",revision:"ee63cb90b3ada6cdbf19926b7b560f6d"},{url:"archives/2022/index.html",revision:"f2dfdc190ad940072ba295d8665470fb"},{url:"archives/2023/02/index.html",revision:"83804260e450c84de243d44d2a8f9faf"},{url:"archives/2023/03/index.html",revision:"06f33ae610a3badc0166d71cf8b1ec99"},{url:"archives/2023/index.html",revision:"71df635ffc0f1dcf5a1674160f22e27f"},{url:"archives/index.html",revision:"ea73905e9a46f1a5d5b81c1c57f9a8e9"},{url:"categories/index.html",revision:"564356c19879408a255160b95f581540"},{url:"categories/技术/index.html",revision:"54e41b30d2b841cffdb6b54d240d38df"},{url:"categories/生活/index.html",revision:"f656623ce6d1cb0beb776cc424a74bc0"},{url:"contact/index.html",revision:"51a78a316eda0b78a8dc6711b6e866b2"},{url:"css/index.css",revision:"2b02af7eea3d142db0cdf569db417a52"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"friends/index.html",revision:"1087053cf2759460a9353f476b9d98c4"},{url:"img/404.jpg",revision:"8190796a570d269ef04b777d93d44e6d"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/avatar.png",revision:"07db0a0bf9fe30ce1897eeb6a0762373"},{url:"img/cat1.jpg",revision:"509b765fc4102a4f48b3411cb7a877b9"},{url:"img/comment_bg.png",revision:"34a79bf208a1c3bee9d6e491a00cd369"},{url:"img/default_cover1.jpg",revision:"de73b52348d3d259606ec95ea25f796e"},{url:"img/default_cover2.jpg",revision:"e0c30094fae85d4df8df8dc6fcaf94de"},{url:"img/default_cover3.jpg",revision:"ea9b595d5f60a537f5a76d8a75496e3c"},{url:"img/favicon.png",revision:"85ccd5d6f94198a230fa6343be147c9c"},{url:"img/friend_404.gif",revision:"d09ab53cb5bb15079ce8e3d90b157353"},{url:"img/loading.gif",revision:"05fb29f4e677ff6057ef55925f46e9b0"},{url:"img/logo.png",revision:"3bbb88dd44f7a2fdf0421488e634eb0a"},{url:"img/siteicon/128.png",revision:"d35608285935fcda1845fc71affb3c07"},{url:"img/siteicon/144.png",revision:"1e969edb1380ec1f37f2fd280c7b9fc3"},{url:"img/siteicon/16.png",revision:"3d50cd2309fc389169cd4bf414e223c8"},{url:"img/siteicon/32.png",revision:"85ccd5d6f94198a230fa6343be147c9c"},{url:"img/siteicon/48.png",revision:"349753fb49ba72796aed9c94521111a7"},{url:"img/siteicon/512.png",revision:"cb259b040d1ce304887cb28880f4b34e"},{url:"img/siteicon/64.png",revision:"8a035a035c61c6a17069c6d925947bf8"},{url:"img/tang/pic1.jpg",revision:"ff8d0b8658484807431d5fdc662c0054"},{url:"img/重庆旅游攻略/tyhwzm.jpg",revision:"e6c25912db695b4fa8382ffb49608d35"},{url:"img/重庆旅游攻略/人民解放碑.jpg",revision:"0958e37f0220db6fdebecf1988378fd2"},{url:"img/重庆旅游攻略/八一好吃街.jpg",revision:"0b66d657b41a557a11b5f81064a9942c"},{url:"img/重庆旅游攻略/小弟面馆.jpg",revision:"17e1e4ed05d7fb2c041b7ab4a7fb9c7b"},{url:"img/重庆旅游攻略/小弟面馆的重庆小面.jpg",revision:"a0cb8a9c1f5c085a8084b34bd48a55e9"},{url:"img/重庆旅游攻略/树.jpg",revision:"b96d9ade01b1e3fdcc21417e7b9fe2fe"},{url:"img/重庆旅游攻略/民宿的落地窗.jpg",revision:"7b5ba45b7a58c17f0970fed236eb4d31"},{url:"img/重庆旅游攻略/洪崖洞.jpg",revision:"91ac04ca6d5bb2338b63e1557448b327"},{url:"img/重庆旅游攻略/洪崖洞灯笼.jpg",revision:"65b202ba9cfce0be3b776d70a77e560b"},{url:"img/重庆旅游攻略/洪崖洞附近景色.jpg",revision:"0046841f2f7d6370dc0608b5f1afcc9f"},{url:"img/重庆旅游攻略/甜筒.jpg",revision:"29d8a888c770ababd80be6e1b5d00673"},{url:"img/重庆旅游攻略/眼镜火锅.jpg",revision:"5f0b4e4bca8111fb871268848c9c3580"},{url:"img/重庆旅游攻略/罗汉寺.jpg",revision:"195c36ced4c39691f60683b326f3a203"},{url:"img/重庆旅游攻略/融汇温泉.jpg",revision:"e7cba2c223d0eb36ea8554bdea6e566c"},{url:"img/重庆旅游攻略/重庆大剧院.jpg",revision:"ea23c5675e4ec1351bfac2c3b646751d"},{url:"index.html",revision:"f5334f142e23b3a31b5447d57ce08853"},{url:"js/main.js",revision:"03e2ad85599a2ca35769f4000d743f60"},{url:"js/search/algolia.js",revision:"490ac3474717299789d089b966a95d33"},{url:"js/search/local-search.js",revision:"d0bc4422e951d7c4a4380bce3028efbf"},{url:"js/tw_cn.js",revision:"c06f6c7a7b7ff0f10ed89011385fbd3c"},{url:"js/utils.js",revision:"574e8f30e938765eb57a39f5edde09a8"},{url:"link/index.html",revision:"257801273019dfdafa7ef7cb192d36e6"},{url:"live2dw/assets/moc/koharu.2048/texture_00.png",revision:"495eea8d906c2b03abfe3fa9de2f2a8b"},{url:"live2dw/lib/L2Dwidget.0.min.js",revision:"32973883fcac0a9ae6cc79c0ea25fda2"},{url:"live2dw/lib/L2Dwidget.min.js",revision:"094cbace49a39548bed64abff5988b05"},{url:"posts/1654194f.html",revision:"b058254dd890f0efdf6354504b3933c9"},{url:"posts/25e1c0d9.html",revision:"635448d9f9bd45605551bbd5f9b55e9a"},{url:"posts/314c5eec.html",revision:"63eaf76a797f3842405be8858012d006"},{url:"posts/341ca211.html",revision:"ad4ec7b4e76692300d82d27a75139099"},{url:"posts/496fb1b3.html",revision:"361b3d08428aa1ad7b0d0f2121620245"},{url:"posts/6393c1cf.html",revision:"528dbef8cb99a9fb9ab21facffc0d3ed"},{url:"posts/6820c6bc.html",revision:"63fa7cfc307415d3ae2b71d68dc42f37"},{url:"posts/7eb74ede.html",revision:"35db65ad4d2debce1c32e0525218c38a"},{url:"posts/ab5b7cc3.html",revision:"2b2f77f266fc6a3db2842c68226496c5"},{url:"posts/cff33c4a.html",revision:"0e78467a16281283012508501ff26dad"},{url:"sw.js",revision:"6f5d136790d9ea5da0ed4539407580a4"},{url:"tags/git/index.html",revision:"a6f02021ea67abaf8021fc96f91de470"},{url:"tags/GNU-Linux/index.html",revision:"1aec925a339aeeaa598aa4015bad4bf8"},{url:"tags/IC设计/index.html",revision:"b544819b4857380c00464adf5ddad295"},{url:"tags/index.html",revision:"d41841da7cafabba84cf400f1dbfac7b"},{url:"tags/tyh/index.html",revision:"1d09432afd526d207fa9c93ece77649c"},{url:"tags/Vivado/index.html",revision:"22c79c3314dc8809a7983168e4e8a4ce"},{url:"tags/VMware/index.html",revision:"c326f48d3da1033e5823726cde883f34"},{url:"tags/wzm/index.html",revision:"84ddd24fe9e97f9bf1019430908dd88d"},{url:"tags/youtube网课/index.html",revision:"fc2812875cab5b8dc78c4a7a6cd6778c"},{url:"tags/个人心得/index.html",revision:"3c3c4d06acb64a5a4cd74de4e62cd923"},{url:"tags/入门/index.html",revision:"52203409600622c71d118d58783e525b"},{url:"tags/数字设计/index.html",revision:"de30dc0dcc0da1b161e958fe40769a86"},{url:"tags/旅游/index.html",revision:"fcfc5ba0d5b5f801bd3482f70db77bfd"},{url:"tags/虚拟机/index.html",revision:"e468158c428935519133a9afa8f41757"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));