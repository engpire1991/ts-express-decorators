(window.webpackJsonp=window.webpackJsonp||[]).push([[172],{380:function(t,s,n){"use strict";n.r(s);var a=n(0),e=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"contenttype"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#contenttype","aria-hidden":"true"}},[t._v("#")]),t._v(" ContentType "),n("Badge",{attrs:{text:"Decorator",type:"decorator"}})],1),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4)])},[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("section",{staticClass:"symbol-info"},[n("table",{staticClass:"is-full-width"},[n("tbody",[n("tr",[n("th",[t._v("Module")]),n("td",[n("div",{staticClass:"lang-typescript"},[n("span",{staticClass:"token keyword"},[t._v("import")]),t._v(" { ContentType } "),n("span",{staticClass:"token keyword"},[t._v("from")]),t._v(" "),n("span",{staticClass:"token string"},[t._v('"@tsed/common"')])])])]),n("tr",[n("th",[t._v("Source")]),n("td",[n("a",{attrs:{href:"https://github.com/Romakita/ts-express-decorators/blob/v5.0.7/packages/common/src/mvc/decorators/method/contentType.ts#L0-L0"}},[t._v("/packages/common/src/mvc/decorators/method/contentType.ts")])])])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"overview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[this._v("#")]),this._v(" Overview")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("pre",[n("code",{staticClass:"typescript-lang "},[t._v("function "),n("span",{staticClass:"token function"},[t._v("ContentType")]),n("span",{staticClass:"token punctuation"},[t._v("(")]),t._v("type"),n("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" "),n("span",{staticClass:"token keyword"},[t._v("string")]),n("span",{staticClass:"token punctuation"},[t._v(")")]),n("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" Function"),n("span",{staticClass:"token punctuation"},[t._v(";")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#description","aria-hidden":"true"}},[this._v("#")]),this._v(" Description")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{pre:!0},[n("p",[t._v("Sets the Content-Type HTTP header to the MIME type as determined by mime.lookup() for the specified type.\nIf type contains the “/” character, then it sets the "),n("code",[t._v("Content-Type")]),t._v(" to type.")]),t._v(" "),n("div",{pre:!0,attrs:{class:"language-typescript extra-class"}},[n("pre",{pre:!0,attrs:{"v-pre":"",class:"language-typescript"}},[n("code",[t._v(" @"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ContentType")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.html'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("              "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => 'text/html'")]),t._v("\n @"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ContentType")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'html'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("               "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => 'text/html'")]),t._v("\n @"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ContentType")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'json'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("               "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => 'application/json'")]),t._v("\n @"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ContentType")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'application/json'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => 'application/json'")]),t._v("\n @"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ContentType")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'png'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => image/png")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("myMethod")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}],!1,null,null,null);e.options.__file="ContentType.md";s.default=e.exports}}]);