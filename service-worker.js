if(!self.define){let e,i={};const a=(a,d)=>(a=new URL(a+".js",d).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(d,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let b={};const f=e=>a(e,r),s={module:{uri:r},exports:b,require:f};i[r]=Promise.all(d.map((e=>s[e]||f(e)))).then((e=>(c(...e),b)))}}define(["./workbox-f2efd100"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"26da3c207017513f83e88e3299940125"},{url:"404/index.html",revision:"5328e63ff996ea6d92fd5f0c46aa9589"},{url:"about/index.html",revision:"77a5848629ea2cdf0cb7574f70197141"},{url:"archives/2022/12/index.html",revision:"e8538f85b0fcef6013025484ae4081d6"},{url:"archives/2022/index.html",revision:"ca157422a6976d28c516e05a02be47dc"},{url:"archives/2023/02/index.html",revision:"281babcb8e52984308cff8e7731739dd"},{url:"archives/2023/03/index.html",revision:"de326062aca0f866f013630ff0634104"},{url:"archives/2023/index.html",revision:"08abdd2c10167673396d89d7e5105fc4"},{url:"archives/index.html",revision:"3cb98d7d3912189df43a1687c4a7d898"},{url:"categories/index.html",revision:"dee422c95daa82b456937e025d95353a"},{url:"categories/技术/index.html",revision:"d98e54d08b469615639da6f57159d718"},{url:"categories/生活/index.html",revision:"dc7cd347a7e730aa6958f5c1548a8b22"},{url:"contact/index.html",revision:"2d61c6b26c5817accfbb27a16202ef4f"},{url:"css/index.css",revision:"adb33ccf40be73637b4eb629b1cee4a1"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"friends/index.html",revision:"547eb3340856b928b8caadfe17a03497"},{url:"img/404.jpg",revision:"8190796a570d269ef04b777d93d44e6d"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/avatar.png",revision:"07db0a0bf9fe30ce1897eeb6a0762373"},{url:"img/cat1.jpg",revision:"509b765fc4102a4f48b3411cb7a877b9"},{url:"img/comment_bg.png",revision:"34a79bf208a1c3bee9d6e491a00cd369"},{url:"img/default_cover1.jpg",revision:"de73b52348d3d259606ec95ea25f796e"},{url:"img/default_cover2.jpg",revision:"e0c30094fae85d4df8df8dc6fcaf94de"},{url:"img/default_cover3.jpg",revision:"ea9b595d5f60a537f5a76d8a75496e3c"},{url:"img/favicon.png",revision:"85ccd5d6f94198a230fa6343be147c9c"},{url:"img/friend_404.gif",revision:"d09ab53cb5bb15079ce8e3d90b157353"},{url:"img/loading.gif",revision:"05fb29f4e677ff6057ef55925f46e9b0"},{url:"img/logo.png",revision:"3bbb88dd44f7a2fdf0421488e634eb0a"},{url:"img/siteicon/128.png",revision:"d35608285935fcda1845fc71affb3c07"},{url:"img/siteicon/144.png",revision:"1e969edb1380ec1f37f2fd280c7b9fc3"},{url:"img/siteicon/16.png",revision:"3d50cd2309fc389169cd4bf414e223c8"},{url:"img/siteicon/32.png",revision:"85ccd5d6f94198a230fa6343be147c9c"},{url:"img/siteicon/48.png",revision:"349753fb49ba72796aed9c94521111a7"},{url:"img/siteicon/512.png",revision:"cb259b040d1ce304887cb28880f4b34e"},{url:"img/siteicon/64.png",revision:"8a035a035c61c6a17069c6d925947bf8"},{url:"img/tang/pic1.jpg",revision:"ff8d0b8658484807431d5fdc662c0054"},{url:"img/重庆旅游攻略/tyhwzm.jpg",revision:"e6c25912db695b4fa8382ffb49608d35"},{url:"img/重庆旅游攻略/人民解放碑.jpg",revision:"0958e37f0220db6fdebecf1988378fd2"},{url:"img/重庆旅游攻略/八一好吃街.jpg",revision:"0b66d657b41a557a11b5f81064a9942c"},{url:"img/重庆旅游攻略/小弟面馆.jpg",revision:"17e1e4ed05d7fb2c041b7ab4a7fb9c7b"},{url:"img/重庆旅游攻略/小弟面馆的重庆小面.jpg",revision:"a0cb8a9c1f5c085a8084b34bd48a55e9"},{url:"img/重庆旅游攻略/树.jpg",revision:"b96d9ade01b1e3fdcc21417e7b9fe2fe"},{url:"img/重庆旅游攻略/民宿的落地窗.jpg",revision:"7b5ba45b7a58c17f0970fed236eb4d31"},{url:"img/重庆旅游攻略/洪崖洞.jpg",revision:"91ac04ca6d5bb2338b63e1557448b327"},{url:"img/重庆旅游攻略/洪崖洞灯笼.jpg",revision:"65b202ba9cfce0be3b776d70a77e560b"},{url:"img/重庆旅游攻略/洪崖洞附近景色.jpg",revision:"0046841f2f7d6370dc0608b5f1afcc9f"},{url:"img/重庆旅游攻略/甜筒.jpg",revision:"29d8a888c770ababd80be6e1b5d00673"},{url:"img/重庆旅游攻略/眼镜火锅.jpg",revision:"5f0b4e4bca8111fb871268848c9c3580"},{url:"img/重庆旅游攻略/罗汉寺.jpg",revision:"195c36ced4c39691f60683b326f3a203"},{url:"img/重庆旅游攻略/融汇温泉.jpg",revision:"e7cba2c223d0eb36ea8554bdea6e566c"},{url:"img/重庆旅游攻略/重庆大剧院.jpg",revision:"ea23c5675e4ec1351bfac2c3b646751d"},{url:"index.html",revision:"626bb608453d2ba6bd2fbae9122b8def"},{url:"js/main.js",revision:"88aced9e00713346dbf5f92453a349b2"},{url:"js/search/algolia.js",revision:"786b8da5325888c55c04e6b6687bf9f5"},{url:"js/search/local-search.js",revision:"aea55acb22a3b51ad16057b0ea52c0a9"},{url:"js/tw_cn.js",revision:"bc064917c366036544975274bb20a01d"},{url:"js/utils.js",revision:"e95ad73d5170f72ae1596b3d9abb7ed3"},{url:"link/index.html",revision:"91e37b4c4fc1753c244cf0504cae81fe"},{url:"live2dw/assets/moc/koharu.2048/texture_00.png",revision:"495eea8d906c2b03abfe3fa9de2f2a8b"},{url:"live2dw/lib/L2Dwidget.0.min.js",revision:"32973883fcac0a9ae6cc79c0ea25fda2"},{url:"live2dw/lib/L2Dwidget.min.js",revision:"094cbace49a39548bed64abff5988b05"},{url:"posts/1654194f.html",revision:"b1fa6d05c210d7ed42db1ab25edc02f8"},{url:"posts/25e1c0d9.html",revision:"c857d35bfd073772a6fae7f43fe3f408"},{url:"posts/314c5eec.html",revision:"ebbbddb6d17be83a2dddac79927ddc62"},{url:"posts/341ca211.html",revision:"4b602a7116784869916f47d1f0b66280"},{url:"posts/496fb1b3.html",revision:"1a8b7fa4d5662c1195d7c2c6d5845b36"},{url:"posts/6393c1cf.html",revision:"2d81cf4ba7bbf1ca936ea8db126da7ac"},{url:"posts/6820c6bc.html",revision:"89e1ca5ac47681e2b2eb481e3294c9cd"},{url:"posts/7eb74ede.html",revision:"9bb77d8ef7ae50581bd7e941ff4df1ff"},{url:"posts/ab5b7cc3.html",revision:"e014c0d318d7a77802d09556f9b320ff"},{url:"posts/cff33c4a.html",revision:"b86aa358448dd78cb404d8ad4cad5b4f"},{url:"tags/git/index.html",revision:"445866567624ac3534ccc48adaad3755"},{url:"tags/GNU-Linux/index.html",revision:"455ec2b13e8747d0135d6f636e2ee9c5"},{url:"tags/IC设计/index.html",revision:"fe24859738cf0c8370336186bb267e2a"},{url:"tags/index.html",revision:"4b2101e4c515c94adde2c3ffc4c11c98"},{url:"tags/tyh/index.html",revision:"05200ddfc3a99a3ab71dbef282e1e50a"},{url:"tags/Vivado/index.html",revision:"2e4e3a56cf6d35ca37a553dfd1427a70"},{url:"tags/VMware/index.html",revision:"caa19fc5a4d8c71f703d91efd13b986f"},{url:"tags/wzm/index.html",revision:"fdbabb62b73d19c05a7640475ab86027"},{url:"tags/youtube网课/index.html",revision:"852a42f6c97e967831d996c1fae41880"},{url:"tags/个人心得/index.html",revision:"0f4536be7f3bd0bf95183a951f43bb76"},{url:"tags/入门/index.html",revision:"17254e759ffb439b879ca2268a96677c"},{url:"tags/数字设计/index.html",revision:"fa87d9ff72c72240260213b5af95f530"},{url:"tags/旅游/index.html",revision:"4ee91a940dd78e9960683be2bf25d2fe"},{url:"tags/虚拟机/index.html",revision:"4faaac301f0b473d2a5eca3ca10aade6"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
