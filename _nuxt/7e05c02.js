(window.webpackJsonp=window.webpackJsonp||[]).push([[13,2,3,4,5,6,7],{264:function(t,e,n){"use strict";var r=n(6),l=n(3),o=n(61),c=n(24),m=n(35),f=n(13),d=n(4),x=n(194),v=n(134),h=n(265),_=n(266),w=n(73),y=n(267),C=[],k=l(C.sort),j=l(C.push),B=d((function(){C.sort(void 0)})),E=d((function(){C.sort(null)})),$=v("sort"),D=!d((function(){if(w)return w<70;if(!(h&&h>3)){if(_)return!0;if(y)return y<603;var code,t,e,n,r="";for(code=65;code<76;code++){switch(t=String.fromCharCode(code),code){case 66:case 69:case 70:case 72:e=3;break;case 68:case 71:e=4;break;default:e=2}for(n=0;n<47;n++)C.push({k:t+n,v:e})}for(C.sort((function(a,b){return b.v-a.v})),n=0;n<C.length;n++)t=C[n].k.charAt(0),r.charAt(r.length-1)!==t&&(r+=t);return"DGBEFHACIJK"!==r}}));r({target:"Array",proto:!0,forced:B||!E||!$||!D},{sort:function(t){void 0!==t&&o(t);var e=c(this);if(D)return void 0===t?k(e):k(e,t);var n,r,l=[],d=m(e);for(r=0;r<d;r++)r in e&&j(l,e[r]);for(x(l,function(t){return function(e,n){return void 0===n?-1:void 0===e?1:void 0!==t?+t(e,n)||0:f(e)>f(n)?1:-1}}(t)),n=l.length,r=0;r<n;)e[r]=l[r++];for(;r<d;)delete e[r++];return e}})},265:function(t,e,n){var r=n(60).match(/firefox\/(\d+)/i);t.exports=!!r&&+r[1]},266:function(t,e,n){var r=n(60);t.exports=/MSIE|Trident/.test(r)},267:function(t,e,n){var r=n(60).match(/AppleWebKit\/(\d+)\./);t.exports=!!r&&+r[1]},273:function(t,e,n){t.exports=n.p+"img/hero-illustration.7e374db.png"},274:function(t,e,n){t.exports=n.p+"img/user-icon.8a15ad5.png"},275:function(t,e,n){t.exports=n.p+"img/batch-icon.eaa3fe5.png"},276:function(t,e,n){t.exports=n.p+"img/money-icon.bf44fce.png"},277:function(t,e,n){t.exports=n.p+"img/information.ee31730.svg"},278:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",{staticClass:"font-bold text-5xl",staticStyle:{"line-height":"1.3"}},[t._v("\n      Permudah "),n("br"),t._v(" Aktivitas "),n("br"),t._v(" Berbagimu "),n("br"),t._v(" Bersama Kami\n    ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("article",{staticClass:"image-wrapper md:w-1/2 w-full p-4"},[e("img",{staticClass:"w-full",attrs:{src:n(273),alt:"Illustration image"}})])}],l={name:"Hero",props:{nextBatch:{type:Object,default:function(){return null}}}},o=n(19),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"max-w-5xl flex md:flex-row flex-col items-center mx-auto px-5 pt-10"},[n("article",{staticClass:"content-wrapper md:w-1/2 w-full flex flex-col justify-start"},[n("p",{staticClass:"text-green-primary"},[t._v("#KitaBingungKitaBerbagi")]),t._v(" "),t._m(0),t._v(" "),n("p",{staticClass:"text-gray-500 my-4"},[t._v('\n      Mereka yang paling bahagia adalah mereka yang melakukan paling banyak untuk orang lain" - Booker T. Washington\n    ')]),t._v(" "),n("div",{staticClass:"action-wrapper flex flex-col justify-start sm:flex-row items-center my-2"},[n("NuxtLink",{staticClass:"px-4 py-2 w-full sm:w-fit rounded-md bg-orange-primary text-white text-center hover:bg-orange-700 focus:bg-orange-700",attrs:{to:t.nextBatch?"/donations/details?id="+t.nextBatch.id:"/donations"}},[t._v("\n        Yuk Donasi\n      ")]),t._v(" "),n("NuxtLink",{staticClass:"px-4 py-2 w-full sm:w-fit mt-4 sm:mt-0 sm:ml-6 rounded-md border border-orange-primary text-orange-primary text-center hover:bg-orange-primary hover:text-white",attrs:{to:"/gallery"}},[t._v("\n        Dokumentasi Berbagi\n      ")])],1)]),t._v(" "),t._m(1)])}),r,!1,null,"2f8160ae",null);e.default=component.exports},279:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"max-w-5xl mx-auto flex md:flex-row flex-col items-center justify-between px-5 mt-16",attrs:{id:"counter"}},[r("article",{staticClass:"item-wrapper border bg-white rounded-xl flex flex-row items-center w-full p-4 shadow-lg"},[r("img",{staticClass:"w-16",attrs:{src:n(274),alt:"user icon"}}),t._v(" "),r("div",{staticClass:"desc-wrap flex flex-col justify-start ml-4"},[r("h1",{staticClass:"text-3xl font-bold"},[t._v("\n        50+\n      ")]),t._v(" "),r("p",{staticClass:"text-gray-500 font-light text-sm"},[t._v("Donatur yang bergabung")])])]),t._v(" "),r("article",{staticClass:"item-wrapper border bg-white rounded-xl flex flex-row items-center w-full p-4 shadow-lg my-4 md:my-4 md:mx-4"},[r("img",{staticClass:"w-16",attrs:{src:n(275),alt:"user icon"}}),t._v(" "),r("div",{staticClass:"desc-wrap flex flex-col justify-start ml-4"},[r("h1",{staticClass:"text-3xl font-bold"},[t._v("\n        7+\n      ")]),t._v(" "),r("p",{staticClass:"text-gray-500 font-light text-sm"},[t._v("Batch terbagi")])])]),t._v(" "),r("article",{staticClass:"item-wrapper border bg-white rounded-xl flex flex-row items-center w-full p-4 shadow-lg"},[r("img",{staticClass:"w-16",attrs:{src:n(276),alt:"user icon"}}),t._v(" "),r("div",{staticClass:"desc-wrap flex flex-col justify-start ml-4"},[r("h1",{staticClass:"text-3xl font-bold"},[t._v("\n        Rp 5jt+\n      ")]),t._v(" "),r("p",{staticClass:"text-gray-500 font-light text-sm"},[t._v("Donasi telah dibagikan")])])])])}],l={name:"Counter"},o=n(19),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),r,!1,null,"3d41f597",null);e.default=component.exports},280:function(t,e,n){"use strict";n.r(e);n(62);var r={name:"Jumbotron",props:{batch:{type:Object,default:function(){return null}}},data:function(){return{countdown:{days:0,hours:0,minutes:0,seconds:0}}},mounted:function(){var t=this;setInterval((function(){if(t.batch){var e=t.$moment(t.batch.date,"DD-MM-YYYY").add(1,"days");t.countdown.days=e.diff(t.$moment(),"days"),t.countdown.hours=e.diff(t.$moment(),"hours")%24,t.countdown.minutes=e.diff(t.$moment(),"minutes")%60,t.countdown.seconds=e.diff(t.$moment(),"seconds")%60}}),1e3)}},l=n(19),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"w-full bg-green-primary my-20"},[n("article",{staticClass:"max-w-5xl px-5 mx-auto py-20 flex flex-col md:flex-row"},[n("section",{staticClass:"flex-1 mr-0 mb-4 md:mb-0 md:mr-4"},[t.batch?[n("h2",{staticClass:"text-3xl font-bold text-white"},[t._v("\n          Segera Donasi Sekarang\n        ")]),t._v(" "),n("p",{staticClass:"text-white mt-2"},[t._v("\n          Bingung Berbagi #"+t._s(t.batch.batch)+"\n        ")]),t._v(" "),n("NuxtLink",{staticClass:"block mt-4 px-4 py-2 w-44 rounded-md bg-orange-primary text-white text-center",attrs:{to:"/donations/details?id="+t.batch.id}},[t._v("Yuk Donasi")])]:[n("h2",{staticClass:"text-3xl font-bold text-white"},[t._v("\n          Belum Ada Batch Donasi Berikutnya\n        ")]),t._v(" "),n("p",{staticClass:"text-white mt-2"},[t._v("\n          Pantengin Terus Informasi Donasi Berikutnya.\n        ")])]],2),t._v(" "),t.batch?n("section",{staticClass:"flex-1"},[n("div",{staticClass:"grid grid-cols-2 md:grid-cols-4 gap-4"},[n("article",{staticClass:"item flex flex-col justify-center"},[n("h1",{staticClass:"font-semibold text-5xl text-green-primary text-center rounded-xl bg-white p-4"},[t._v("\n            "+t._s(t.countdown.days)+"\n          ")]),t._v(" "),n("p",{staticClass:"font-semibold text-lg text-white text-center mt-2"},[t._v("\n            HARI\n          ")])]),t._v(" "),n("article",{staticClass:"item flex flex-col justify-center"},[n("h1",{staticClass:"font-semibold text-5xl text-green-primary text-center rounded-xl  bg-white p-4"},[t._v("\n            "+t._s(t.countdown.hours)+"\n          ")]),t._v(" "),n("p",{staticClass:"font-semibold text-lg text-white text-center mt-2"},[t._v("\n            JAM\n          ")])]),t._v(" "),n("article",{staticClass:"item flex flex-col justify-center"},[n("h1",{staticClass:"font-semibold text-5xl text-green-primary text-center rounded-xl  bg-white p-4"},[t._v("\n            "+t._s(t.countdown.minutes)+"\n          ")]),t._v(" "),n("p",{staticClass:"font-semibold text-lg text-white text-center mt-2"},[t._v("\n            MENIT\n          ")])]),t._v(" "),n("article",{staticClass:"item flex flex-col justify-center"},[n("h1",{staticClass:"font-semibold text-5xl text-green-primary text-center rounded-xl  bg-white p-4"},[t._v("\n            "+t._s(t.countdown.seconds)+"\n          ")]),t._v(" "),n("p",{staticClass:"font-semibold text-lg text-white text-center mt-2"},[t._v("\n            DETIK\n          ")])])])]):t._e()])])}),[],!1,null,null,null);e.default=component.exports},281:function(t,e,n){"use strict";n.r(e);var r={name:"Donation",props:{batches:{type:Array,default:function(){return[]}},isFetching:{type:Boolean,default:function(){return!1}}}},l=n(19),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"max-w-5xl flex flex-col mx-auto px-5"},[n("h1",{staticClass:"text-base text-green-primary"},[t._v("Program Donasi")]),t._v(" "),t._m(0),t._v(" "),t.isFetching?n("ul",{staticClass:"w-full py-8 overflow-auto whitespace-nowrap"},t._l(6,(function(i){return n("li",{key:i,staticClass:"inline-block mr-4 w-[290px] h-[314px]"},[t._m(1,!0)])})),0):t.batches?n("section",{staticClass:"w-full py-8 overflow-auto whitespace-nowrap"},t._l(t.batches,(function(e){return n("div",{key:e.id,staticClass:"inline-block mr-4"},[n("article",{staticClass:"flex flex-col border rounded-lg"},[n("section",{staticClass:"w-full h-44"},[n("img",{staticClass:"w-full h-72 overflow-y-hidden rounded-lg",attrs:{src:e.batchImg,alt:"batch 1"}})]),t._v(" "),n("section",{staticClass:"flex-1 rounded-b-lg p-4 bg-white"},[n("div",{staticClass:"flex flex-row items-center justify-between"},[n("h1",[t._v("\n              Bingung Berbagi\n            ")]),t._v(" "),n("p",{staticClass:"py-1 px-2 bg-gray-100 rounded-lg text-gray-500",staticStyle:{"font-size":"12px"}},[t._v("Batch #"+t._s(e.batch))])]),t._v(" "),n("div",{staticClass:"flex items-center mt-2"},[n("svg",{staticClass:"h-5 w-5 text-gray-500",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"}}),t._v(" "),n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 11a3 3 0 11-6 0 3 3 0 016 0z"}})]),t._v(" "),n("p",{staticClass:"text-gray-500 ml-2 text-sm"},[t._v(t._s(e.location))])]),t._v(" "),1==e.isDone?n("NuxtLink",{staticClass:"w-full rounded-lg border border-orange-primary text-orange-primary mt-4 py-1 block text-center",attrs:{to:"/donations/details?id="+e.id}},[t._v("\n            Lihat laporan\n          ")]):n("NuxtLink",{staticClass:"w-full rounded-lg bg-orange-primary mt-4 py-1 text-white block text-center",attrs:{to:"/donations/details?id="+e.id}},[t._v("\n            Donasi Sekarang\n          ")])],1)])])})),0):t._e()])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",{staticClass:"font-bold text-2xl leading-normal"},[t._v("\n    Berbagi Senyuman dan "),n("br"),t._v(" Berbagi Kebahagiaan Bersama Kami\n  ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"flex flex-col border rounded-lg w-full h-full "},[n("div",{staticClass:"w-full h-44 bg-gray-300 animate-pulse rounded-t-lg"}),t._v(" "),n("section",{staticClass:"flex-1 rounded-b-lg p-4 bg-white"},[n("div",{staticClass:"w-full h-4 bg-gray-300 animate-pulse rounded-full"}),t._v(" "),n("div",{staticClass:"mt-2 w-3/4 h-3 bg-gray-300 animate-pulse rounded-full"}),t._v(" "),n("div",{staticClass:"mt-2 w-1/2 h-3 bg-gray-300 animate-pulse rounded-full"}),t._v(" "),n("div",{staticClass:"mt-2 w-full h-4 bg-gray-300 animate-pulse rounded-full"})])])}],!1,null,null,null);e.default=component.exports},282:function(t,e,n){"use strict";n.r(e);var r=n(8),l=(n(51),n(40),n(264),{name:"Gallery",data:function(){return{images:[]}},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$getSheetData(1);case 2:n=e.sent,t.images=n.sort((function(a,b){return b.id-a.id})).slice(0,6);case 4:case"end":return e.stop()}}),e)})))()},fetchOnServer:!1}),o=n(19),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"max-w-5xl flex flex-col mx-auto px-5 mt-20"},[n("h1",{staticClass:"text-base text-green-primary"},[t._v("Galeri")]),t._v(" "),t._m(0),t._v(" "),n("ul",{staticClass:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8"},[t.$fetchState.pending?t._l(6,(function(i){return n("div",{key:"Skeleton"+i,staticClass:"w-full relative pt-[56.25%] bg-gray-300 animate-pulse rounded-lg"})})):t._e(),t._v(" "),t._l(t.images,(function(image){return n("li",{key:image.id,staticClass:"w-full relative pt-[56.25%]"},[n("img",{staticClass:"absolute inset-0 rounded-lg w-full h-full object-cover",attrs:{src:image.imgUrl,alt:"Foto batch #"+image.batch}})])}))],2),t._v(" "),n("nuxt-link",{staticClass:"bg-orange-primary px-4 py-2 rounded-lg mt-4 w-fit text-white self-center",attrs:{to:"/gallery"}},[t._v("\n    Lihat lainnya\n  ")])],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",{staticClass:"font-bold text-2xl leading-normal"},[t._v("\n    Berbagi Senyuman dan "),n("br"),t._v(" Berbagi Kebahagiaan Bersama Kami\n  ")])}],!1,null,null,null);e.default=component.exports},283:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"w-full sm:w-1/3 flex flex-col justify-start"},[n("h1",{staticClass:"text-green-primary"},[t._v("\n      Kolaborasi\n    ")]),t._v(" "),n("h1",{staticClass:"text-2xl font-bold sm:mr-2"},[t._v("\n      Yuk bersinergi saling bahu "),n("br",{staticClass:"sm:hidden"}),t._v(" membahu untuk berbagi\n    ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{staticClass:"text-sm text-gray-500",attrs:{for:"name"}},[t._v("Nama Lengkap"),n("span",{staticClass:"text-red-500"},[t._v("*")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{staticClass:"text-sm text-gray-500",attrs:{for:"email"}},[t._v("Email"),n("span",{staticClass:"text-red-500"},[t._v("*")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{staticClass:"text-sm text-gray-500",attrs:{for:"phoneNumber"}},[t._v("Nomor Telpon"),n("span",{staticClass:"text-red-500"},[t._v("*")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{staticClass:"text-sm text-gray-500",attrs:{for:"domicile"}},[t._v("Domisili"),n("span",{staticClass:"text-red-500"},[t._v("*")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{staticClass:"text-sm text-gray-500",attrs:{for:"notes"}},[t._v("Catatan"),n("span",{staticClass:"text-red-500"},[t._v("*")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",{staticClass:"text-gray-500",staticStyle:{"font-size":"12px"}},[r("span",[r("img",{staticClass:"inline mr-2",attrs:{src:n(277),alt:"info"}})]),t._v("\n        Tuliskan pesan & keperluan dalam kolom catatan\n      ")])}],l=(n(25),n(12),{name:"Contact",data:function(){return{name:"",email:"",phoneNumber:"",domicile:"",notes:"",isError:!1,isSuccess:!1,isLoading:!1}},methods:{submitForm:function(){var t=this;if(this.name&&this.email&&this.phoneNumber&&this.domicile&&this.notes){this.isLoading=!0;var form=document.forms.collaborationForm;fetch("https://script.google.com/macros/s/AKfycbxlh1uhR2XcpRcdqBkAOMfszuhodZQ9IEtYSVHeeVMVZxC_6vhXpfqJSfY-hSEEqE-q/exec",{method:"POST",body:new FormData(form)}).then((function(e){t.isLoading=!1,t.name="",t.email="",t.phoneNumber="",t.domicile="",t.notes="",t.isError=!1,t.isSuccess=!0})).catch((function(e){t.errorMessage="Terdapat kesalahan! Ulangi lagi nanti"})).finally((function(e){t.isLoading=!1}))}}}}),o=n(19),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"max-w-5xl mx-auto flex flex-col sm:flex-row px-5 sm:items-start my-20"},[t._m(0),t._v(" "),n("form",{staticClass:"w-full sm:w-2/3 flex flex-col bg-white px-2 py-6 rounded-lg border mt-6 sm:mt-0 shadow",attrs:{name:"collaborationForm"},on:{submit:function(e){return e.preventDefault(),t.submitForm.apply(null,arguments)}}},[t.isSuccess?n("div",{staticClass:"mx-4 mb-4 p-4 text-sm text-green-700 bg-green-100 rounded-lg",attrs:{role:"alert"}},[t._v("\n      Data berhasil disimpan.\n    ")]):t._e(),t._v(" "),t.isError?n("div",{staticClass:"mx-4 p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg",attrs:{role:"alert"}},[t._v("\n      Data gagal disimpan. Silakan coba lagi.\n    ")]):t._e(),t._v(" "),n("section",{staticClass:"form-group flex flex-col sm:flex-row sm:justify-between w-full"},[n("article",{staticClass:"flex flex-col justify-start w-full sm:w-1/2 px-4 sm:px-2 md:px-4",attrs:{id:"field_name"}},[t._m(1),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"bg-primary-bg-color focus:outline-none focus:ring focus:ring-green-600 transition px-4 py-2 rounded-lg border mt-2",attrs:{id:"name",name:"name",type:"text",placeholder:"John Doe",required:""},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),t._v(" "),n("article",{staticClass:"flex flex-col justify-start w-full sm:w-1/2 px-4 sm:px-2 md:px-4 mt-4 sm:mt-0",attrs:{id:"field_email"}},[t._m(2),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"bg-primary-bg-color focus:outline-none focus:ring focus:ring-green-600 transition px-4 py-2 rounded-lg border mt-2",attrs:{id:"email",name:"email",type:"email",placeholder:"johndoe@mail.com",required:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})])]),t._v(" "),n("section",{staticClass:"form-group flex flex-col sm:flex-row sm:justify-between w-full mt-4"},[n("article",{staticClass:"flex flex-col justify-start w-full sm:w-1/2 px-4 sm:px-2 md:px-4",attrs:{id:"field_phone"}},[t._m(3),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.phoneNumber,expression:"phoneNumber"}],staticClass:"bg-primary-bg-color focus:outline-none focus:ring focus:ring-green-600 transition px-4 py-2 rounded-lg border mt-2",attrs:{id:"phoneNumber",name:"phoneNumber",type:"text",placeholder:"0812-XXXX-XXXX",required:""},domProps:{value:t.phoneNumber},on:{input:function(e){e.target.composing||(t.phoneNumber=e.target.value)}}})]),t._v(" "),n("article",{staticClass:"flex flex-col justify-start w-full sm:w-1/2 px-4 sm:px-2 md:px-4 mt-4 sm:mt-0",attrs:{id:"field-domisili"}},[t._m(4),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.domicile,expression:"domicile"}],staticClass:"bg-primary-bg-color focus:outline-none focus:ring focus:ring-green-600 transition px-4 py-2 rounded-lg border mt-2",attrs:{id:"domicile",name:"domicile",type:"text",placeholder:"Kaliurang, Sleman, DIY",required:""},domProps:{value:t.domicile},on:{input:function(e){e.target.composing||(t.domicile=e.target.value)}}})])]),t._v(" "),n("article",{staticClass:"flex flex-col justify-start w-full p-4 sm:px-2 md:px-4",attrs:{id:"field_note"}},[t._m(5),t._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.notes,expression:"notes"}],staticClass:"bg-primary-bg-color focus:outline-none focus:ring focus:ring-green-600 transition p-4 rounded-lg border mt-2",attrs:{id:"notes",rows:"4",name:"notes",placeholder:"contoh: ingin melakukan kerjasama",required:""},domProps:{value:t.notes},on:{input:function(e){e.target.composing||(t.notes=e.target.value)}}})]),t._v(" "),n("article",{staticClass:"flex flex-col justify-start w-full p-4 sm:px-2 md:px-4",attrs:{id:"field_action"}},[t._m(6),t._v(" "),n("button",{class:"w-full py-2 mt-4 rounded-lg bg-orange-primary text-white focus:ring focus:ring-yellow-400 focus:outline-none "+(t.isLoading?"opacity-50":""),attrs:{disabled:t.isLoading}},[t.isLoading?n("svg",{staticClass:"animate-spin mr-2 h-5 w-5 text-white inline-block",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"}},[n("circle",{staticClass:"opacity-25",attrs:{cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}}),t._v(" "),n("path",{staticClass:"opacity-75",attrs:{fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"}})]):n("span",[t._v("\n          Kirim\n        ")])])])])])}),r,!1,null,"c0d2e4ee",null);e.default=component.exports},295:function(t,e,n){"use strict";n.r(e);var r=n(8),l=(n(51),n(264),n(278)),o=n(279),c=n(280),m=n(281),f=n(282),d=n(283),x={name:"IndexPage",components:{Hero:l.default,Counter:o.default,Jumbotron:c.default,Donation:m.default,Gallery:f.default,Contact:d.default},data:function(){return{batches:[]}},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$getSheetData(0);case 2:n=e.sent,t.batches=n.sort((function(a,b){return b.batch-a.batch}));case 4:case"end":return e.stop()}}),e)})))()},fetchOnServer:!1,computed:{nextBatch:function(){if(0===this.batches.length)return null;var t="1"===this.batches[0].isDone?null:this.batches[0];return t}}},v=n(19),component=Object(v.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Hero",{attrs:{"next-batch":t.nextBatch}}),t._v(" "),n("Counter"),t._v(" "),n("Jumbotron",{attrs:{batch:t.nextBatch}}),t._v(" "),n("Donation",{attrs:{batches:t.batches,"is-fetching":t.$fetchState.pending}}),t._v(" "),n("Gallery"),t._v(" "),n("Contact")],1)}),[],!1,null,null,null);e.default=component.exports}}]);