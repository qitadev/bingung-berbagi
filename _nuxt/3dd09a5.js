(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{264:function(t,r,e){"use strict";var n=e(6),o=e(3),c=e(61),l=e(24),f=e(35),h=e(13),d=e(4),v=e(194),m=e(134),w=e(265),x=e(266),y=e(73),k=e(267),_=[],C=o(_.sort),j=o(_.push),A=d((function(){_.sort(void 0)})),O=d((function(){_.sort(null)})),F=m("sort"),P=!d((function(){if(y)return y<70;if(!(w&&w>3)){if(x)return!0;if(k)return k<603;var code,t,r,e,n="";for(code=65;code<76;code++){switch(t=String.fromCharCode(code),code){case 66:case 69:case 70:case 72:r=3;break;case 68:case 71:r=4;break;default:r=2}for(e=0;e<47;e++)_.push({k:t+e,v:r})}for(_.sort((function(a,b){return b.v-a.v})),e=0;e<_.length;e++)t=_[e].k.charAt(0),n.charAt(n.length-1)!==t&&(n+=t);return"DGBEFHACIJK"!==n}}));n({target:"Array",proto:!0,forced:A||!O||!F||!P},{sort:function(t){void 0!==t&&c(t);var r=l(this);if(P)return void 0===t?C(r):C(r,t);var e,n,o=[],d=f(r);for(n=0;n<d;n++)n in r&&j(o,r[n]);for(v(o,function(t){return function(r,e){return void 0===e?-1:void 0===r?1:void 0!==t?+t(r,e)||0:h(r)>h(e)?1:-1}}(t)),e=o.length,n=0;n<e;)r[n]=o[n++];for(;n<d;)delete r[n++];return r}})},265:function(t,r,e){var n=e(60).match(/firefox\/(\d+)/i);t.exports=!!n&&+n[1]},266:function(t,r,e){var n=e(60);t.exports=/MSIE|Trident/.test(n)},267:function(t,r,e){var n=e(60).match(/AppleWebKit\/(\d+)\./);t.exports=!!n&&+n[1]},290:function(t,r,e){"use strict";e.r(r);var n=e(127);var o=e(171),c=e(99);function l(t){return function(t){if(Array.isArray(t))return Object(n.a)(t)}(t)||Object(o.a)(t)||Object(c.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var f=e(8),h=(e(51),e(12),e(75),e(42),e(264),{name:"GalleryPage",data:function(){return{batchPhotos:[],batches:[],isFetching:!0}},fetch:function(){var t=this;return Object(f.a)(regeneratorRuntime.mark((function r(){var e;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t.$getSheetData(1);case 2:e=r.sent,t.batchPhotos=e.reduce((function(t,a){return t[a.batch]=[].concat(l(t[a.batch]||[]),[a]),t}),{}),t.batches=Object.keys(t.batchPhotos),t.batches=t.batches.sort((function(a,b){return b-a})),t.isFetching=!1;case 7:case"end":return r.stop()}}),r)})))()},fetchOnServer:!1}),d=e(19),component=Object(d.a)(h,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"max-w-5xl mx-auto px-5 my-8"},[e("nav",[e("nuxt-link",{staticClass:"font-bold",attrs:{to:"/"}},[t._v("\n      Home\n    ")]),t._v("\n    >\n    "),e("span",[t._v("\n      Galeri\n    ")])],1),t._v(" "),t.isFetching?[e("ul",{staticClass:"grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8"},t._l(9,(function(i){return e("li",{key:i,staticClass:"relative pt-[56.25%] bg-gray-300 animate-pulse rounded-lg"})})),0)]:t._l(t.batches,(function(r){return[e("h2",{key:r,staticClass:"mt-8 font-bold text-2xl"},[t._v("\n      Bingung Berbagi Batch #"+t._s(r)+"\n    ")]),t._v(" "),e("ul",{key:"A"+r,staticClass:"grid sm-grid-cols-2 md:grid-cols-3 gap-4 mt-4"},t._l(t.batchPhotos[r],(function(t){return e("li",{key:t.id,staticClass:"w-full relative pt-[56.25%]"},[e("img",{staticClass:"absolute inset-0 rounded-lg w-full h-full object-cover",attrs:{src:t.imgUrl,alt:"Foto batch #"+r}})])})),0)]}))],2)}),[],!1,null,null,null);r.default=component.exports}}]);