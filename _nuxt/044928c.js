(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{277:function(t,e,r){t.exports=r.p+"img/information.ee31730.svg"},283:function(t,e,r){"use strict";r.r(e);var n=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("article",{staticClass:"w-full sm:w-1/3 flex flex-col justify-start"},[r("h1",{staticClass:"text-green-primary"},[t._v("\n      Kolaborasi\n    ")]),t._v(" "),r("h1",{staticClass:"text-2xl font-bold sm:mr-2"},[t._v("\n      Yuk bersinergi saling bahu "),r("br",{staticClass:"sm:hidden"}),t._v(" membahu untuk berbagi\n    ")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("label",{staticClass:"text-sm text-gray-500",attrs:{for:"name"}},[t._v("Nama Lengkap"),r("span",{staticClass:"text-red-500"},[t._v("*")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("label",{staticClass:"text-sm text-gray-500",attrs:{for:"email"}},[t._v("Email"),r("span",{staticClass:"text-red-500"},[t._v("*")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("label",{staticClass:"text-sm text-gray-500",attrs:{for:"phoneNumber"}},[t._v("Nomor Telpon"),r("span",{staticClass:"text-red-500"},[t._v("*")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("label",{staticClass:"text-sm text-gray-500",attrs:{for:"domicile"}},[t._v("Domisili"),r("span",{staticClass:"text-red-500"},[t._v("*")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("label",{staticClass:"text-sm text-gray-500",attrs:{for:"notes"}},[t._v("Catatan"),r("span",{staticClass:"text-red-500"},[t._v("*")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"text-gray-500",staticStyle:{"font-size":"12px"}},[n("span",[n("img",{staticClass:"inline mr-2",attrs:{src:r(277),alt:"info"}})]),t._v("\n        Tuliskan pesan & keperluan dalam kolom catatan\n      ")])}],l=(r(25),r(12),{name:"Contact",data:function(){return{name:"",email:"",phoneNumber:"",domicile:"",notes:"",isError:!1,isSuccess:!1,isLoading:!1}},methods:{submitForm:function(){var t=this;if(this.name&&this.email&&this.phoneNumber&&this.domicile&&this.notes){this.isLoading=!0;var form=document.forms.collaborationForm;fetch("https://script.google.com/macros/s/AKfycbxlh1uhR2XcpRcdqBkAOMfszuhodZQ9IEtYSVHeeVMVZxC_6vhXpfqJSfY-hSEEqE-q/exec",{method:"POST",body:new FormData(form)}).then((function(e){t.isLoading=!1,t.name="",t.email="",t.phoneNumber="",t.domicile="",t.notes="",t.isError=!1,t.isSuccess=!0})).catch((function(e){t.errorMessage="Terdapat kesalahan! Ulangi lagi nanti"})).finally((function(e){t.isLoading=!1}))}}}}),o=r(19),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"max-w-5xl mx-auto flex flex-col sm:flex-row px-5 sm:items-start my-20"},[t._m(0),t._v(" "),r("form",{staticClass:"w-full sm:w-2/3 flex flex-col bg-white px-2 py-6 rounded-lg border mt-6 sm:mt-0 shadow",attrs:{name:"collaborationForm"},on:{submit:function(e){return e.preventDefault(),t.submitForm.apply(null,arguments)}}},[t.isSuccess?r("div",{staticClass:"mx-4 mb-4 p-4 text-sm text-green-700 bg-green-100 rounded-lg",attrs:{role:"alert"}},[t._v("\n      Data berhasil disimpan.\n    ")]):t._e(),t._v(" "),t.isError?r("div",{staticClass:"mx-4 p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg",attrs:{role:"alert"}},[t._v("\n      Data gagal disimpan. Silakan coba lagi.\n    ")]):t._e(),t._v(" "),r("section",{staticClass:"form-group flex flex-col sm:flex-row sm:justify-between w-full"},[r("article",{staticClass:"flex flex-col justify-start w-full sm:w-1/2 px-4 sm:px-2 md:px-4",attrs:{id:"field_name"}},[t._m(1),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"bg-primary-bg-color focus:outline-none focus:ring focus:ring-green-600 transition px-4 py-2 rounded-lg border mt-2",attrs:{id:"name",name:"name",type:"text",placeholder:"John Doe",required:""},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),t._v(" "),r("article",{staticClass:"flex flex-col justify-start w-full sm:w-1/2 px-4 sm:px-2 md:px-4 mt-4 sm:mt-0",attrs:{id:"field_email"}},[t._m(2),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"bg-primary-bg-color focus:outline-none focus:ring focus:ring-green-600 transition px-4 py-2 rounded-lg border mt-2",attrs:{id:"email",name:"email",type:"email",placeholder:"johndoe@mail.com",required:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})])]),t._v(" "),r("section",{staticClass:"form-group flex flex-col sm:flex-row sm:justify-between w-full mt-4"},[r("article",{staticClass:"flex flex-col justify-start w-full sm:w-1/2 px-4 sm:px-2 md:px-4",attrs:{id:"field_phone"}},[t._m(3),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.phoneNumber,expression:"phoneNumber"}],staticClass:"bg-primary-bg-color focus:outline-none focus:ring focus:ring-green-600 transition px-4 py-2 rounded-lg border mt-2",attrs:{id:"phoneNumber",name:"phoneNumber",type:"text",placeholder:"0812-XXXX-XXXX",required:""},domProps:{value:t.phoneNumber},on:{input:function(e){e.target.composing||(t.phoneNumber=e.target.value)}}})]),t._v(" "),r("article",{staticClass:"flex flex-col justify-start w-full sm:w-1/2 px-4 sm:px-2 md:px-4 mt-4 sm:mt-0",attrs:{id:"field-domisili"}},[t._m(4),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.domicile,expression:"domicile"}],staticClass:"bg-primary-bg-color focus:outline-none focus:ring focus:ring-green-600 transition px-4 py-2 rounded-lg border mt-2",attrs:{id:"domicile",name:"domicile",type:"text",placeholder:"Kaliurang, Sleman, DIY",required:""},domProps:{value:t.domicile},on:{input:function(e){e.target.composing||(t.domicile=e.target.value)}}})])]),t._v(" "),r("article",{staticClass:"flex flex-col justify-start w-full p-4 sm:px-2 md:px-4",attrs:{id:"field_note"}},[t._m(5),t._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.notes,expression:"notes"}],staticClass:"bg-primary-bg-color focus:outline-none focus:ring focus:ring-green-600 transition p-4 rounded-lg border mt-2",attrs:{id:"notes",rows:"4",name:"notes",placeholder:"contoh: ingin melakukan kerjasama",required:""},domProps:{value:t.notes},on:{input:function(e){e.target.composing||(t.notes=e.target.value)}}})]),t._v(" "),r("article",{staticClass:"flex flex-col justify-start w-full p-4 sm:px-2 md:px-4",attrs:{id:"field_action"}},[t._m(6),t._v(" "),r("button",{class:"w-full py-2 mt-4 rounded-lg bg-orange-primary text-white focus:ring focus:ring-yellow-400 focus:outline-none "+(t.isLoading?"opacity-50":""),attrs:{disabled:t.isLoading}},[t.isLoading?r("svg",{staticClass:"animate-spin mr-2 h-5 w-5 text-white inline-block",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"}},[r("circle",{staticClass:"opacity-25",attrs:{cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}}),t._v(" "),r("path",{staticClass:"opacity-75",attrs:{fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"}})]):r("span",[t._v("\n          Kirim\n        ")])])])])])}),n,!1,null,"c0d2e4ee",null);e.default=component.exports}}]);