if(!self.define){let e,i={};const c=(c,r)=>(c=new URL(c+".js",r).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(r,d)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(i[a])return;let f={};const b=e=>c(e,a),s={module:{uri:a},exports:f,require:b};i[a]=Promise.all(r.map((e=>s[e]||b(e)))).then((e=>(d(...e),f)))}}define(["./workbox-f2efd100"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"c3956f589995c3d516bb57f93508588d"},{url:"404/index.html",revision:"c7993b7d2f9ed877e89c62a475f428ee"},{url:"about/index.html",revision:"c23d4d83eb3550aab1dcc34d97dace83"},{url:"archives/2023/02/index.html",revision:"bb587b395f593b08d0179f2897eacd41"},{url:"archives/2023/index.html",revision:"90894b499550aba661d1e91ec7e4b14e"},{url:"archives/index.html",revision:"74b7ec3d368bf164be6ce1900fee377f"},{url:"categories/index.html",revision:"a9c91add074c7af3e825b6baef9ae26f"},{url:"categories/技术/index.html",revision:"7e4e358cbde769612d3a1094efd22906"},{url:"categories/生活/index.html",revision:"8459946c17a58908104fb4f448774955"},{url:"contact/index.html",revision:"4e9ea1f195425d7918568b13aa69257f"},{url:"css/index.css",revision:"adb33ccf40be73637b4eb629b1cee4a1"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"friends/index.html",revision:"0b339a154ad4e05fcb2fedefbf117b0b"},{url:"img/404.jpg",revision:"8190796a570d269ef04b777d93d44e6d"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/avatar.png",revision:"07db0a0bf9fe30ce1897eeb6a0762373"},{url:"img/cat1.jpg",revision:"509b765fc4102a4f48b3411cb7a877b9"},{url:"img/comment_bg.png",revision:"34a79bf208a1c3bee9d6e491a00cd369"},{url:"img/default_cover1.jpg",revision:"de73b52348d3d259606ec95ea25f796e"},{url:"img/default_cover2.jpg",revision:"e0c30094fae85d4df8df8dc6fcaf94de"},{url:"img/default_cover3.jpg",revision:"ea9b595d5f60a537f5a76d8a75496e3c"},{url:"img/favicon.png",revision:"85ccd5d6f94198a230fa6343be147c9c"},{url:"img/friend_404.gif",revision:"d09ab53cb5bb15079ce8e3d90b157353"},{url:"img/loading.gif",revision:"05fb29f4e677ff6057ef55925f46e9b0"},{url:"img/logo.png",revision:"3bbb88dd44f7a2fdf0421488e634eb0a"},{url:"img/siteicon/128.png",revision:"d35608285935fcda1845fc71affb3c07"},{url:"img/siteicon/144.png",revision:"1e969edb1380ec1f37f2fd280c7b9fc3"},{url:"img/siteicon/16.png",revision:"3d50cd2309fc389169cd4bf414e223c8"},{url:"img/siteicon/32.png",revision:"85ccd5d6f94198a230fa6343be147c9c"},{url:"img/siteicon/48.png",revision:"349753fb49ba72796aed9c94521111a7"},{url:"img/siteicon/512.png",revision:"cb259b040d1ce304887cb28880f4b34e"},{url:"img/siteicon/64.png",revision:"8a035a035c61c6a17069c6d925947bf8"},{url:"img/tang/pic1.jpg",revision:"ff8d0b8658484807431d5fdc662c0054"},{url:"img/重庆旅游攻略/tyhwzm.jpg",revision:"e6c25912db695b4fa8382ffb49608d35"},{url:"img/重庆旅游攻略/人民解放碑.jpg",revision:"0958e37f0220db6fdebecf1988378fd2"},{url:"img/重庆旅游攻略/八一好吃街.jpg",revision:"0b66d657b41a557a11b5f81064a9942c"},{url:"img/重庆旅游攻略/小弟面馆.jpg",revision:"17e1e4ed05d7fb2c041b7ab4a7fb9c7b"},{url:"img/重庆旅游攻略/小弟面馆的重庆小面.jpg",revision:"a0cb8a9c1f5c085a8084b34bd48a55e9"},{url:"img/重庆旅游攻略/树.jpg",revision:"b96d9ade01b1e3fdcc21417e7b9fe2fe"},{url:"img/重庆旅游攻略/民宿的落地窗.jpg",revision:"7b5ba45b7a58c17f0970fed236eb4d31"},{url:"img/重庆旅游攻略/洪崖洞.jpg",revision:"91ac04ca6d5bb2338b63e1557448b327"},{url:"img/重庆旅游攻略/洪崖洞灯笼.jpg",revision:"65b202ba9cfce0be3b776d70a77e560b"},{url:"img/重庆旅游攻略/洪崖洞附近景色.jpg",revision:"0046841f2f7d6370dc0608b5f1afcc9f"},{url:"img/重庆旅游攻略/甜筒.jpg",revision:"29d8a888c770ababd80be6e1b5d00673"},{url:"img/重庆旅游攻略/眼镜火锅.jpg",revision:"5f0b4e4bca8111fb871268848c9c3580"},{url:"img/重庆旅游攻略/罗汉寺.jpg",revision:"195c36ced4c39691f60683b326f3a203"},{url:"img/重庆旅游攻略/融汇温泉.jpg",revision:"e7cba2c223d0eb36ea8554bdea6e566c"},{url:"img/重庆旅游攻略/重庆大剧院.jpg",revision:"ea23c5675e4ec1351bfac2c3b646751d"},{url:"index.html",revision:"c38b4193f93c42eefd11d0b17951a669"},{url:"js/main.js",revision:"88aced9e00713346dbf5f92453a349b2"},{url:"js/search/algolia.js",revision:"786b8da5325888c55c04e6b6687bf9f5"},{url:"js/search/local-search.js",revision:"aea55acb22a3b51ad16057b0ea52c0a9"},{url:"js/tw_cn.js",revision:"bc064917c366036544975274bb20a01d"},{url:"js/utils.js",revision:"e95ad73d5170f72ae1596b3d9abb7ed3"},{url:"link/index.html",revision:"78ed3f8b8f95b9f5341182689ed1470c"},{url:"live2dw/assets/moc/koharu.2048/texture_00.png",revision:"495eea8d906c2b03abfe3fa9de2f2a8b"},{url:"live2dw/lib/L2Dwidget.0.min.js",revision:"32973883fcac0a9ae6cc79c0ea25fda2"},{url:"live2dw/lib/L2Dwidget.min.js",revision:"094cbace49a39548bed64abff5988b05"},{url:"posts/1654194f.html",revision:"80aeb88e414909b322c7790f85c9cee8"},{url:"posts/25e1c0d9.html",revision:"26b9b60af373353f203ece62200a29c4"},{url:"posts/314c5eec.html",revision:"342395f5bf2d70d338affc5497148de0"},{url:"posts/341ca211.html",revision:"126ad652d625fd3a579056e70721815f"},{url:"posts/6393c1cf.html",revision:"8e793fe7eaff22ba38ad6ed0902751cc"},{url:"posts/6820c6bc.html",revision:"7b7ec411130cc1b49c6fc99661f24b8f"},{url:"posts/ab5b7cc3.html",revision:"364df1229c3552527f04c545add087f6"},{url:"tags/GNU-Linux/index.html",revision:"4312b3ca5ca70d573dc49a768aa33a12"},{url:"tags/IC设计/index.html",revision:"b68e9afbf9579b0bc15da873320d83c6"},{url:"tags/index.html",revision:"2619f73bd54e951cf29705757534c521"},{url:"tags/tyh/index.html",revision:"daa721542583d56dcdfe4ce205044368"},{url:"tags/Vivado/index.html",revision:"96ad795c765f6fa31f50bfeb2d15715f"},{url:"tags/VMware/index.html",revision:"41befe62930b1e717f40054ad70b5f83"},{url:"tags/wzm/index.html",revision:"217c806ed2b5577e844a31e27598e70c"},{url:"tags/旅游/index.html",revision:"27ff68dc251db0d41e7fa5d5904379b7"},{url:"tags/虚拟机/index.html",revision:"8f51647ef6a0c93fedb568d6f1ece56e"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));