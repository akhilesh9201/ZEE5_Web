(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{274:function(t,e,r){"use strict";r.r(e);var n={data:function(){return{snackbar:!1,text:"Account Linked successfully.",timeout:2e3}}},l=r(28),c=r(48),o=r.n(c),d=r(162),v=r(322),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"text-center"},[r("v-btn",{attrs:{color:"blue"},on:{click:function(e){t.snackbar=!0}}},[t._v(" Login ")]),t._v(" "),r("v-snackbar",{attrs:{color:"green",timeout:t.timeout},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n    "+t._s(t.text)+"\n  ")])],1)}),[],!1,null,null,null);e.default=component.exports;o()(component,{VBtn:d.a,VSnackbar:v.a})},279:function(t,e,r){"use strict";r.r(e);var n={data:function(){return{items:[{text:"Homepage",disabled:!0,href:"breadcrumbs_Homepage"},{text:"Packages",disabled:!0,href:"breadcrumbs_Packages"},{text:"User Details",disabled:!0,href:"breadcrumbs_User_details"}]}}},l=r(28),c=r(48),o=r.n(c),d=r(329),v=r(121),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-breadcrumbs",{attrs:{items:t.items},scopedSlots:t._u([{key:"divider",fn:function(){return[r("v-icon",[t._v("mdi-chevron-right")])]},proxy:!0}])})],1)}),[],!1,null,null,null);e.default=component.exports;o()(component,{VBreadcrumbs:d.a,VIcon:v.a})},280:function(t,e,r){"use strict";r.r(e);var n={data:function(){return{email:"",emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/.+@.+/.test(t)||"E-mail must be valid"}]}}},l=r(28),c=r(48),o=r.n(c),d=r(257),v=r(276),m=r(323),f=r(258),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-form",{model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[r("v-container",[r("v-row",[r("v-col",{staticClass:"hidden-md-and-down",attrs:{cols:"12",sm:"4",md:"4",lg:"4"}},[r("AdvertCard")],1),t._v(" "),r("v-col",{staticClass:"hidden-md-and-down",attrs:{cols:"12",sm:"5"}},[r("LoginCard")],1),t._v(" "),r("v-col",{staticClass:"hidden-md-and-down",attrs:{cols:"12",md:"3",lg:"3",sm:"3"}},[r("CardPrmPacks")],1),t._v(" "),r("v-col",{staticClass:"hidden-sm-and-up",attrs:{cols:"12",md:"3",lg:"3",sm:"3"}},[r("CardPrmPacks")],1),t._v(" "),r("v-col",{staticClass:"hidden-sm-and-up",attrs:{cols:"12",sm:"5"}},[r("LoginCard")],1),t._v(" "),r("v-col",{staticClass:"hidden-sm-and-up",attrs:{cols:"12",sm:"4",md:"4",lg:"4"}},[r("AdvertCard")],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;o()(component,{AdvertCard:r(307).default,LoginCard:r(308).default,CardPrmPacks:r(309).default}),o()(component,{VCol:d.a,VContainer:v.a,VForm:m.a,VRow:f.a})},304:function(t,e,r){"use strict";r.r(e);var n={data:function(){return{rules:[function(t){return!!t||"Required."},function(t){return t&&t.length>=3||"Min 3 characters"}]}}},l=r(28),c=r(48),o=r.n(c),d=r(162),v=r(277),m=r(266),f=r(257),h=r(325),_=r(258),x=r(261),C=r(326),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"text-center"},[r("v-dialog",{attrs:{"max-width":"600px"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,l=e.attrs;return[r("v-btn",t._g(t._b({staticClass:"text-center rounded-circle align-center justify-center ma-3",attrs:{height:"65px",width:"65px"}},"v-btn",l,!1),n),[r("GoogleCircle")],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),r("v-card",{attrs:{light:""}},[r("v-card-title",{staticClass:"headline blue"},[r("img",{staticClass:"mr-4 md-sm-xs-5",attrs:{src:"google.png",height:"25",px:""}}),t._v("\n        Google\n      ")]),t._v(" "),r("v-col",{attrs:{cols:"12"}},[r("h3",{staticClass:"pt-md-6 ma-md-2 pl"},[t._v("Email ID")]),t._v(" "),r("v-text-field",{attrs:{rules:t.rules,"hide-details":"auto",outlined:"",required:""}})],1),t._v(" "),r("v-col",{attrs:{cols:"12"}},[r("h3",{staticClass:"pt-md-6"},[t._v("Password")]),t._v(" "),r("v-text-field",{attrs:{rules:t.rules,"hide-details":"auto",outlined:"",required:""}})],1),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-row",{attrs:{align:"center"}},[r("ToastNotif")],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;o()(component,{GoogleCircle:r(311).default,ToastNotif:r(274).default}),o()(component,{VBtn:d.a,VCard:v.a,VCardActions:m.a,VCardTitle:m.c,VCol:f.a,VDialog:h.a,VRow:_.a,VSpacer:x.a,VTextField:C.a})},305:function(t,e,r){"use strict";r.r(e);var n={data:function(){return{rules:[function(t){return!!t||"Required."},function(t){return t&&t.length>=3||"Min 3 characters"}]}}},l=r(28),c=r(48),o=r.n(c),d=r(162),v=r(277),m=r(266),f=r(257),h=r(325),_=r(258),x=r(261),C=r(326),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"text-center"},[r("v-dialog",{attrs:{"max-width":"600px"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,l=e.attrs;return[r("v-btn",t._g(t._b({staticClass:"text-center rounded-circle align-center justify-center ma-3",attrs:{height:"65px",width:"65px"}},"v-btn",l,!1),n),[r("Circles")],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),r("v-card",{attrs:{light:""}},[r("v-card-title",{staticClass:"headline blue"},[r("img",{staticClass:"mr-4 md-sm-xs-5",attrs:{src:"facebook.jpg",height:"25",px:""}}),t._v("\n        Facebook\n      ")]),t._v(" "),r("v-col",{attrs:{cols:"12"}},[r("h3",{staticClass:"pt-md-6 ma-md-2 pl"},[t._v("Email ID")]),t._v(" "),r("v-text-field",{attrs:{rules:t.rules,"hide-details":"auto",outlined:"",required:""}})],1),t._v(" "),r("v-col",{attrs:{cols:"12"}},[r("h3",{staticClass:"pt-md-6"},[t._v("Password")]),t._v(" "),r("v-text-field",{attrs:{rules:t.rules,"hide-details":"auto",outlined:"",required:""}})],1),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-row",{attrs:{align:"center"}},[r("ToastNotif")],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;o()(component,{Circles:r(312).default,ToastNotif:r(274).default}),o()(component,{VBtn:d.a,VCard:v.a,VCardActions:m.a,VCardTitle:m.c,VCol:f.a,VDialog:h.a,VRow:_.a,VSpacer:x.a,VTextField:C.a})},306:function(t,e,r){"use strict";r.r(e);var n={data:function(){return{rules:[function(t){return!!t||"Required."},function(t){return t&&t.length>=3||"Min 3 characters"}]}}},l=r(28),c=r(48),o=r.n(c),d=r(162),v=r(277),m=r(266),f=r(257),h=r(325),_=r(258),x=r(261),C=r(326),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"text-center"},[r("v-dialog",{attrs:{"max-width":"600px"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,l=e.attrs;return[r("v-btn",t._g(t._b({staticClass:"text-center rounded-circle align-center justify-center ma-3",attrs:{height:"65px",width:"65px"}},"v-btn",l,!1),n),[r("TwitterCircle")],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),r("v-card",{attrs:{light:""}},[r("v-card-title",{staticClass:"headline blue"},[r("img",{staticClass:"mr-4 md-sm-xs-5",attrs:{src:"TTwitter.png",height:"25",px:""}}),t._v("\n        Twitter\n      ")]),t._v(" "),r("v-col",{attrs:{cols:"12"}},[r("h3",{staticClass:"pt-md-6 ma-md-2 pl"},[t._v("Email ID")]),t._v(" "),r("v-text-field",{attrs:{rules:t.rules,"hide-details":"auto",outlined:"",required:""}})],1),t._v(" "),r("v-col",{attrs:{cols:"12"}},[r("h3",{staticClass:"pt-md-6"},[t._v("Password")]),t._v(" "),r("v-text-field",{attrs:{rules:t.rules,"hide-details":"auto",outlined:"",required:""}})],1),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-row",{attrs:{justify:"center"}},[r("ToastNotif")],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;o()(component,{TwitterCircle:r(313).default,ToastNotif:r(274).default}),o()(component,{VBtn:d.a,VCard:v.a,VCardActions:m.a,VCardTitle:m.c,VCol:f.a,VDialog:h.a,VRow:_.a,VSpacer:x.a,VTextField:C.a})},307:function(t,e,r){"use strict";r.r(e);var n=r(28),l=r(48),c=r.n(l),o=r(277),d=r(159),v=r(258),component=Object(n.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("v-container-fluid",[e("v-card",{staticClass:"pa-md-2 pl-sm-2 ma-sm-4 mx-lg-2 mx-sm-n5"},[e("v-img",{attrs:{src:"2611.png"}}),e("br"),this._v(" "),e("v-row",{attrs:{justify:"center"}},[this._v(" Exclusively Shows On Zee5 Originals")]),e("br"),this._v(" "),e("v-img",{attrs:{src:"Parindey.jpg"}})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VCard:o.a,VImg:d.a,VRow:v.a})},308:function(t,e,r){"use strict";r.r(e);var n=r(28),l=r(48),c=r.n(l),o=r(277),d=r(257),v=r(258),m=r(326),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-card",{staticClass:"pa-8"},[r("v-row",{attrs:{justify:"center"}},[r("h2",[t._v("Enter Email ID or Phone Number")])]),t._v(" "),r("v-text-field",{staticClass:"mx-md-sm-10",attrs:{required:""}}),t._v(" "),r("RoundedButton"),t._v(" "),r("v-row",{staticClass:"pt-10",attrs:{justify:"center"}},[r("h2",[t._v("OR")])]),t._v(" "),r("v-row",[r("v-col",{staticClass:"mr-sm-4 hidden-md-and-up",attrs:{sm:"3",md:"4",cols:"4"}},[r("Dialogbox2")],1),t._v(" "),r("v-col",{staticClass:"hidden-sm-and-down",attrs:{sm:"3",md:"4",cols:"4"}},[r("Dialogbox2")],1),t._v(" "),r("v-col",{attrs:{sm:"4",md:"4",cols:"4"}},[r("Dialogbox")],1),t._v(" "),r("v-col",{attrs:{sm:"4",md:"4",cols:"4"}},[r("Dialogbox3")],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{RoundedButton:r(310).default,Dialogbox2:r(304).default,Dialogbox:r(305).default,Dialogbox3:r(306).default}),c()(component,{VCard:o.a,VCol:d.a,VRow:v.a,VTextField:m.a})},309:function(t,e,r){"use strict";r.r(e);var n=r(28),l=r(48),c=r.n(l),o=r(277),d=r(266),v=r(261),component=Object(n.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("v-card",[e("v-card-text",{staticClass:"pa-py-auto ma-my-4"},[e("h3",[e("font",{attrs:{color:"#F50057"}},[this._v("Premium packages - INR 99 - 1 Month")])],1),this._v(" "),e("v-spacer"),this._v(" "),e("h5",[this._v("All CC/Selects banks DC")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VCard:o.a,VCardText:d.b,VSpacer:v.a})},310:function(t,e,r){"use strict";r.r(e);var n=r(28),l=r(48),c=r.n(l),o=r(162),component=Object(n.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"text-center"},[e("v-btn",{staticClass:"mt-4 sm-md-xs-4",attrs:{rounded:"",color:"pink"}},[this._v("Proceed")])],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:o.a})},311:function(t,e,r){"use strict";r.r(e);var n=r(28),l=r(48),c=r.n(l),o=r(276),d=r(159),v=r(122),component=Object(n.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("v-container",{staticClass:"text-center"},[e("v-responsive",{staticClass:"text-center rounded-circle d-inline-flex align-center justify-center ma-3",attrs:{height:"77",width:"77"}},[e("v-img",{attrs:{src:"google.png",width:"75px"}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VContainer:o.a,VImg:d.a,VResponsive:v.a})},312:function(t,e,r){"use strict";r.r(e);var n=r(28),l=r(48),c=r.n(l),o=r(276),d=r(159),v=r(122),component=Object(n.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("v-container",{staticClass:"text-center"},[e("v-responsive",{staticClass:"text-center rounded-circle d-inline-flex align-center justify-center ma-3",attrs:{height:"70",width:"70"}},[e("v-img",{attrs:{src:"facebook.png",width:"70px"}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VContainer:o.a,VImg:d.a,VResponsive:v.a})},313:function(t,e,r){"use strict";r.r(e);var n=r(28),l=r(48),c=r.n(l),o=r(276),d=r(159),v=r(122),component=Object(n.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("v-container",{staticClass:"text-center"},[e("v-responsive",{staticClass:"text-center rounded-circle d-inline-flex align-center justify-center ma-3",attrs:{height:"77",width:"77"}},[e("v-img",{attrs:{src:"TTwitter.png",width:"75px"}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VContainer:o.a,VImg:d.a,VResponsive:v.a})}}]);