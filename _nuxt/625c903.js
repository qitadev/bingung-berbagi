(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{280:function(t,e,n){"use strict";n.r(e);n(62);var o={name:"Jumbotron",props:{batch:{type:Object,default:function(){return null}}},data:function(){return{countdown:{days:0,hours:0,minutes:0,seconds:0}}},mounted:function(){var t=this;setInterval((function(){if(t.batch){var e=t.$moment(t.batch.date,"DD-MM-YYYY").add(1,"days");t.countdown.days=e.diff(t.$moment(),"days"),t.countdown.hours=e.diff(t.$moment(),"hours")%24,t.countdown.minutes=e.diff(t.$moment(),"minutes")%60,t.countdown.seconds=e.diff(t.$moment(),"seconds")%60}}),1e3)}},l=n(19),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"w-full bg-green-primary my-20"},[n("article",{staticClass:"max-w-5xl px-5 mx-auto py-20 flex flex-col md:flex-row"},[n("section",{staticClass:"flex-1 mr-0 mb-4 md:mb-0 md:mr-4"},[t.batch?[n("h2",{staticClass:"text-3xl font-bold text-white"},[t._v("\n          Segera Donasi Sekarang\n        ")]),t._v(" "),n("p",{staticClass:"text-white mt-2"},[t._v("\n          Bingung Berbagi #"+t._s(t.batch.batch)+"\n        ")]),t._v(" "),n("NuxtLink",{staticClass:"block mt-4 px-4 py-2 w-44 rounded-md bg-orange-primary text-white text-center",attrs:{to:"/donations/details?id="+t.batch.id}},[t._v("Yuk Donasi")])]:[n("h2",{staticClass:"text-3xl font-bold text-white"},[t._v("\n          Belum Ada Batch Donasi Berikutnya\n        ")]),t._v(" "),n("p",{staticClass:"text-white mt-2"},[t._v("\n          Pantengin Terus Informasi Donasi Berikutnya.\n        ")])]],2),t._v(" "),t.batch?n("section",{staticClass:"flex-1"},[n("div",{staticClass:"grid grid-cols-2 md:grid-cols-4 gap-4"},[n("article",{staticClass:"item flex flex-col justify-center"},[n("h1",{staticClass:"font-semibold text-5xl text-green-primary text-center rounded-xl bg-white p-4"},[t._v("\n            "+t._s(t.countdown.days)+"\n          ")]),t._v(" "),n("p",{staticClass:"font-semibold text-lg text-white text-center mt-2"},[t._v("\n            HARI\n          ")])]),t._v(" "),n("article",{staticClass:"item flex flex-col justify-center"},[n("h1",{staticClass:"font-semibold text-5xl text-green-primary text-center rounded-xl  bg-white p-4"},[t._v("\n            "+t._s(t.countdown.hours)+"\n          ")]),t._v(" "),n("p",{staticClass:"font-semibold text-lg text-white text-center mt-2"},[t._v("\n            JAM\n          ")])]),t._v(" "),n("article",{staticClass:"item flex flex-col justify-center"},[n("h1",{staticClass:"font-semibold text-5xl text-green-primary text-center rounded-xl  bg-white p-4"},[t._v("\n            "+t._s(t.countdown.minutes)+"\n          ")]),t._v(" "),n("p",{staticClass:"font-semibold text-lg text-white text-center mt-2"},[t._v("\n            MENIT\n          ")])]),t._v(" "),n("article",{staticClass:"item flex flex-col justify-center"},[n("h1",{staticClass:"font-semibold text-5xl text-green-primary text-center rounded-xl  bg-white p-4"},[t._v("\n            "+t._s(t.countdown.seconds)+"\n          ")]),t._v(" "),n("p",{staticClass:"font-semibold text-lg text-white text-center mt-2"},[t._v("\n            DETIK\n          ")])])])]):t._e()])])}),[],!1,null,null,null);e.default=component.exports}}]);