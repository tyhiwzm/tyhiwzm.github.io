if(!self.define){let e,i={};const c=(c,d)=>(c=new URL(c+".js",d).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(d,r)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(i[a])return;let f={};const s=e=>c(e,a),b={module:{uri:a},exports:f,require:s};i[a]=Promise.all(d.map((e=>b[e]||s(e)))).then((e=>(r(...e),f)))}}define(["./workbox-f2efd100"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"a02fac6719e91c6ce1a73baef3f2796f"},{url:"404/index.html",revision:"99c601e8a132ccb84a4e2f391b33f8e8"},{url:"about/index.html",revision:"0f3f2998c3c11c125f535a0438efd356"},{url:"archives/2022/12/index.html",revision:"abd24a63ec6e03d81fe7fcc0ff1a4526"},{url:"archives/2022/index.html",revision:"77d9fdef72176de61a0692d66d8631a8"},{url:"archives/2023/02/index.html",revision:"8fdf9c6a104a5fc1ef83ae3a0c7d6263"},{url:"archives/2023/index.html",revision:"cb7207e01410a458c1ab74e82047f6c4"},{url:"archives/index.html",revision:"9bc655c6f72ede60eb2c219021e716a8"},{url:"categories/index.html",revision:"d62e88e834cc3ac9cab5440137d70469"},{url:"categories/技术/index.html",revision:"9c5ce4d514ea6261daedd4b8f95bdee1"},{url:"categories/生活/index.html",revision:"a0d4c9e76d4197c738fe49030ad55d7f"},{url:"contact/index.html",revision:"e1c4745939f47aa64b8e11b762b94ce6"},{url:"css/index.css",revision:"2b02af7eea3d142db0cdf569db417a52"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"friends/index.html",revision:"8d75c065e1e6f8c367bbd990b956e176"},{url:"img/404.jpg",revision:"8190796a570d269ef04b777d93d44e6d"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/avatar.png",revision:"07db0a0bf9fe30ce1897eeb6a0762373"},{url:"img/cat1.jpg",revision:"509b765fc4102a4f48b3411cb7a877b9"},{url:"img/comment_bg.png",revision:"34a79bf208a1c3bee9d6e491a00cd369"},{url:"img/default_cover1.jpg",revision:"de73b52348d3d259606ec95ea25f796e"},{url:"img/default_cover2.jpg",revision:"e0c30094fae85d4df8df8dc6fcaf94de"},{url:"img/default_cover3.jpg",revision:"ea9b595d5f60a537f5a76d8a75496e3c"},{url:"img/favicon.png",revision:"85ccd5d6f94198a230fa6343be147c9c"},{url:"img/friend_404.gif",revision:"d09ab53cb5bb15079ce8e3d90b157353"},{url:"img/loading.gif",revision:"05fb29f4e677ff6057ef55925f46e9b0"},{url:"img/logo.png",revision:"3bbb88dd44f7a2fdf0421488e634eb0a"},{url:"img/siteicon/128.png",revision:"d35608285935fcda1845fc71affb3c07"},{url:"img/siteicon/144.png",revision:"1e969edb1380ec1f37f2fd280c7b9fc3"},{url:"img/siteicon/16.png",revision:"3d50cd2309fc389169cd4bf414e223c8"},{url:"img/siteicon/32.png",revision:"85ccd5d6f94198a230fa6343be147c9c"},{url:"img/siteicon/48.png",revision:"349753fb49ba72796aed9c94521111a7"},{url:"img/siteicon/512.png",revision:"cb259b040d1ce304887cb28880f4b34e"},{url:"img/siteicon/64.png",revision:"8a035a035c61c6a17069c6d925947bf8"},{url:"img/tang/pic1.jpg",revision:"ff8d0b8658484807431d5fdc662c0054"},{url:"img/重庆旅游攻略/tyhwzm.jpg",revision:"e6c25912db695b4fa8382ffb49608d35"},{url:"img/重庆旅游攻略/人民解放碑.jpg",revision:"0958e37f0220db6fdebecf1988378fd2"},{url:"img/重庆旅游攻略/八一好吃街.jpg",revision:"0b66d657b41a557a11b5f81064a9942c"},{url:"img/重庆旅游攻略/小弟面馆.jpg",revision:"17e1e4ed05d7fb2c041b7ab4a7fb9c7b"},{url:"img/重庆旅游攻略/小弟面馆的重庆小面.jpg",revision:"a0cb8a9c1f5c085a8084b34bd48a55e9"},{url:"img/重庆旅游攻略/树.jpg",revision:"b96d9ade01b1e3fdcc21417e7b9fe2fe"},{url:"img/重庆旅游攻略/民宿的落地窗.jpg",revision:"7b5ba45b7a58c17f0970fed236eb4d31"},{url:"img/重庆旅游攻略/洪崖洞.jpg",revision:"91ac04ca6d5bb2338b63e1557448b327"},{url:"img/重庆旅游攻略/洪崖洞灯笼.jpg",revision:"65b202ba9cfce0be3b776d70a77e560b"},{url:"img/重庆旅游攻略/洪崖洞附近景色.jpg",revision:"0046841f2f7d6370dc0608b5f1afcc9f"},{url:"img/重庆旅游攻略/甜筒.jpg",revision:"29d8a888c770ababd80be6e1b5d00673"},{url:"img/重庆旅游攻略/眼镜火锅.jpg",revision:"5f0b4e4bca8111fb871268848c9c3580"},{url:"img/重庆旅游攻略/罗汉寺.jpg",revision:"195c36ced4c39691f60683b326f3a203"},{url:"img/重庆旅游攻略/融汇温泉.jpg",revision:"e7cba2c223d0eb36ea8554bdea6e566c"},{url:"img/重庆旅游攻略/重庆大剧院.jpg",revision:"ea23c5675e4ec1351bfac2c3b646751d"},{url:"index.html",revision:"5b4d11dcea439a858b649b8ccf1f1614"},{url:"js/main.js",revision:"f6453b72fa953e98045d985ea38bca72"},{url:"js/search/algolia.js",revision:"4ec96643b63f6d8e6045cc5bc052759f"},{url:"js/search/local-search.js",revision:"d0bc4422e951d7c4a4380bce3028efbf"},{url:"js/tw_cn.js",revision:"56373849722f576f4dba2efd9b96e6c7"},{url:"js/utils.js",revision:"574e8f30e938765eb57a39f5edde09a8"},{url:"link/index.html",revision:"c971edc9cdfacf06ac251258de858ed1"},{url:"live2dw/assets/moc/koharu.2048/texture_00.png",revision:"495eea8d906c2b03abfe3fa9de2f2a8b"},{url:"live2dw/lib/L2Dwidget.0.min.js",revision:"32973883fcac0a9ae6cc79c0ea25fda2"},{url:"live2dw/lib/L2Dwidget.min.js",revision:"094cbace49a39548bed64abff5988b05"},{url:"posts/1654194f.html",revision:"9924c8e6f29ad3fe80c198a324f56390"},{url:"posts/25e1c0d9.html",revision:"c53618456816ece94fb925e0e46d6522"},{url:"posts/314c5eec.html",revision:"2e05c9fc232a7ddbb83626b6d94f88b7"},{url:"posts/341ca211.html",revision:"4b0bd967582de442444500f4b8b19056"},{url:"posts/6393c1cf.html",revision:"64c0338b5471461af247fb2c5282846d"},{url:"posts/6820c6bc.html",revision:"100f3fa816fc9dbe166c50305caf10cc"},{url:"posts/7eb74ede.html",revision:"d53c011ba8a49d520bbc5034c5adbde4"},{url:"posts/ab5b7cc3.html",revision:"89ac3081d65ddc2f8fddbee57704fbc2"},{url:"posts/cff33c4a.html",revision:"342b5dcb9e771f198b8f3798deaf8c75"},{url:"sw.js",revision:"2189f07ac724329f8fe0ae688c2c5bc0"},{url:"tags/git/index.html",revision:"767aa73a847153d177d3fdbbda237f2e"},{url:"tags/GNU-Linux/index.html",revision:"a8f83e5dab21e8765612a67a5f27f5b3"},{url:"tags/IC设计/index.html",revision:"4e443ab599303bcfa9cb38478499425e"},{url:"tags/index.html",revision:"3f9c02e2cdd1b24c189014834a95489d"},{url:"tags/tyh/index.html",revision:"c8e9999a167c58bb0a2515cffe9ee23e"},{url:"tags/Vivado/index.html",revision:"2489e6cdb80f6b651443973b6c82adba"},{url:"tags/VMware/index.html",revision:"0051a8cb4ca00a7b1f837a121468d838"},{url:"tags/wzm/index.html",revision:"7dedde7e26c9ee02c82dd7b80ef196f2"},{url:"tags/入门/index.html",revision:"d06a86bb1efb146d0e4161f7a22934b3"},{url:"tags/旅游/index.html",revision:"1ee3d9066f0f4321145ce3d061c70e13"},{url:"tags/虚拟机/index.html",revision:"0a43509a857af14202411d6b2e8f438e"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));