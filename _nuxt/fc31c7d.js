(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{267:function(t,n,r){"use strict";r.d(n,"a",(function(){return o}));r(54),r(6),r(4),r(8);var e=r(0);function o(t){return e.a.extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(n,r){var e=r.props,data=r.data,o=r.children;data.staticClass="".concat(t," ").concat(data.staticClass||"").trim();var c=data.attrs;if(c){data.attrs={};var d=Object.keys(c).filter((function(t){if("slot"===t)return!1;var n=c[t];return t.startsWith("data-")?(data.attrs[t]=n,!1):n||"string"==typeof n}));d.length&&(data.staticClass+=" ".concat(d.join(" ")))}return e.id&&(data.domProps=data.domProps||{},data.domProps.id=e.id),n(e.tag,data,o)}})}},270:function(t,n,r){"use strict";r.r(n);var e=r(271),o=r.n(e);for(var c in e)["default"].indexOf(c)<0&&function(t){r.d(n,t,(function(){return e[t]}))}(c);n.default=o.a},271:function(t,n){},276:function(t,n,r){"use strict";r(54),r(6),r(4),r(8),r(163),r(125);var e=r(267),o=r(56);n.a=Object(e.a)("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,n){var r,e=n.props,data=n.data,c=n.children,d=data.attrs;return d&&(data.attrs={},r=Object.keys(d).filter((function(t){if("slot"===t)return!1;var n=d[t];return t.startsWith("data-")?(data.attrs[t]=n,!1):n||"string"==typeof n}))),e.id&&(data.domProps=data.domProps||{},data.domProps.id=e.id),t(e.tag,Object(o.a)(data,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(r||[])}),c)}})},314:function(t,n,r){"use strict";r.d(n,"a",(function(){return e})),r.d(n,"b",(function(){return o}));var e=function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("v-content",[n("v-container",{attrs:{fluid:"","fill-height":""}},[n("v-layout",{attrs:{"justify-center":"","align-center":""}},[n("blockquote",{staticClass:"blockquote"},[this._v("\n          “First, solve the problem. Then, write the code.”\n          "),n("footer",[n("small",[n("em",[this._v("—John Johnson")])])])])])],1)],1)],1)},o=[]},320:function(t,n,r){"use strict";r.r(n);var e=r(314),o=r(270);for(var c in o)["default"].indexOf(c)<0&&function(t){r.d(n,t,(function(){return o[t]}))}(c);var d=r(28),f=r(48),l=r.n(f),v=r(276),h=r(265),m=r(321),component=Object(d.a)(o.default,e.a,e.b,!1,null,null,null);n.default=component.exports,l()(component,{Footer:r(166).default}),l()(component,{VContainer:v.a,VContent:h.a,VLayout:m.a})},321:function(t,n,r){"use strict";r(163);var e=r(267);n.a=Object(e.a)("layout")}}]);