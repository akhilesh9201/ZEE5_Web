(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{234:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r(57),r(7),r(4),r(17);var n=r(0);function o(t){return n.a.extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,r){var n=r.props,data=r.data,o=r.children;data.staticClass="".concat(t," ").concat(data.staticClass||"").trim();var c=data.attrs;if(c){data.attrs={};var l=Object.keys(c).filter((function(t){if("slot"===t)return!1;var e=c[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}));l.length&&(data.staticClass+=" ".concat(l.join(" ")))}return n.id&&(data.domProps=data.domProps||{},data.domProps.id=n.id),e(n.tag,data,o)}})}},247:function(t,e,r){"use strict";r(57),r(7),r(4),r(17),r(238),r(235);var n=r(234),o=r(107);e.a=Object(n.a)("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var r,n=e.props,data=e.data,c=e.children,l=data.attrs;return l&&(data.attrs={},r=Object.keys(l).filter((function(t){if("slot"===t)return!1;var e=l[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}))),n.id&&(data.domProps=data.domProps||{},data.domProps.id=n.id),t(n.tag,Object(o.a)(data,{staticClass:"container",class:Array({"container--fluid":n.fluid}).concat(r||[])}),c)}})},253:function(t,e,r){"use strict";r(22),r(11),r(57),r(56),r(58);var n=r(3),o=(r(42),r(249),r(51),r(7),r(4),r(17),r(32),r(235),r(0)),c=r(107),l=r(2);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],y=v.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),O=v.reduce((function(t,e){return t["offset"+Object(l.x)(e)]={type:[String,Number],default:null},t}),{}),j=v.reduce((function(t,e){return t["order"+Object(l.x)(e)]={type:[String,Number],default:null},t}),{}),m={col:Object.keys(y),offset:Object.keys(O),order:Object.keys(j)};function w(t,e,r){var n=t;if(null!=r&&!1!==r){if(e){var o=e.replace(t,"");n+="-".concat(o)}return"col"!==t||""!==r&&!0!==r?(n+="-".concat(r)).toLowerCase():n.toLowerCase()}}var h=new Map;e.a=o.a.extend({name:"v-col",functional:!0,props:d(d(d(d({cols:{type:[Boolean,String,Number],default:!1}},y),{},{offset:{type:[String,Number],default:null}},O),{},{order:{type:[String,Number],default:null}},j),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var r=e.props,data=e.data,o=e.children,l=(e.parent,"");for(var f in r)l+=String(r[f]);var d=h.get(l);return d||function(){var t,e;for(e in d=[],m)m[e].forEach((function(t){var n=r[t],o=w(e,t,n);o&&d.push(o)}));var o=d.some((function(t){return t.startsWith("col-")}));d.push((t={col:!o||!r.cols},Object(n.a)(t,"col-".concat(r.cols),r.cols),Object(n.a)(t,"offset-".concat(r.offset),r.offset),Object(n.a)(t,"order-".concat(r.order),r.order),Object(n.a)(t,"align-self-".concat(r.alignSelf),r.alignSelf),t)),h.set(l,d)}(),t(r.tag,Object(c.a)(data,{class:d}),o)}})},436:function(t,e,r){"use strict";r.r(e);var n=r(29),o=r(59),c=r.n(o),l=r(259),f=r(253),d=r(247),v=r(411),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{staticClass:"grey lighten-5"},[r("v-row",{staticClass:"mb-2",attrs:{"no-gutters":""}},t._l(4,(function(e){return r("v-col",{key:e,attrs:{cols:1.5===e?6:void 0}},[r("v-card",{staticClass:"pa-2",attrs:{outlined:"",tile:""}},[t._v("\n        "+t._s(e)+" of 6 "+t._s(4===e?"(wider)":"")+"\n      ")])],1)})),1),t._v(" "),r("v-row",{attrs:{"no-gutters":""}},t._l(3,(function(e){return r("v-col",{key:e,attrs:{cols:2===e?5:void 0}},[r("v-card",{staticClass:"pa-2",attrs:{outlined:"",tile:""}},[t._v("\n\n        \n        "+t._s(e)+" of 3 "+t._s(2===e?"(wider)":"")+"\n      ")])],1)})),1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VCard:l.a,VCol:f.a,VContainer:d.a,VRow:v.a})}}]);