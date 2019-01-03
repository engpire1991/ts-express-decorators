(window.webpackJsonp=window.webpackJsonp||[]).push([[166],{374:function(e,t,s){"use strict";s.r(t);var r=s(0),a=Object(r.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"overridemiddleware"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#overridemiddleware","aria-hidden":"true"}},[e._v("#")]),e._v(" OverrideMiddleware "),s("Badge",{attrs:{text:"Decorator",type:"decorator"}})],1),e._v(" "),e._m(0),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),s("div",{pre:!0},[s("p",[e._v("Override a middleware which is already registered in MiddlewareRegistry.")]),e._v(" "),e._m(4),e._v(" "),e._m(5),e._m(6),e._v(" "),s("ul",[s("li",[s("router-link",{pre:!0,attrs:{to:"/docs/middlewares/override-middleware.html"}},[e._v("Usage")])],1),e._v(" "),s("li",[s("router-link",{pre:!0,attrs:{to:"/docs/middlewares/override/send-response.html"}},[e._v("Send response")])],1),e._v(" "),s("li",[s("router-link",{pre:!0,attrs:{to:"/docs/middlewares/override/authentication.html"}},[e._v("Authentication")])],1),e._v(" "),s("li",[s("router-link",{pre:!0,attrs:{to:"/docs/middlewares/override/response-view.html"}},[e._v("Response view")])],1),e._v(" "),s("li",[s("router-link",{pre:!0,attrs:{to:"/docs/middlewares/override/global-error-handler.html"}},[e._v("Global error handler")])],1)])])])},[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",{staticClass:"symbol-info"},[s("table",{staticClass:"is-full-width"},[s("tbody",[s("tr",[s("th",[e._v("Module")]),s("td",[s("div",{staticClass:"lang-typescript"},[s("span",{staticClass:"token keyword"},[e._v("import")]),e._v(" { OverrideMiddleware } "),s("span",{staticClass:"token keyword"},[e._v("from")]),e._v(" "),s("span",{staticClass:"token string"},[e._v('"@tsed/common"')])])])]),s("tr",[s("th",[e._v("Source")]),s("td",[s("a",{attrs:{href:"https://github.com/Romakita/ts-express-decorators/blob/v5.0.7/packages/common/src/mvc/decorators/class/overrideMiddleware.ts#L0-L0"}},[e._v("/packages/common/src/mvc/decorators/class/overrideMiddleware.ts")])])])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"overview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[this._v("#")]),this._v(" Overview")])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",{staticClass:"typescript-lang "},[t("span",{staticClass:"token keyword"},[this._v("const")]),this._v(" OverrideMiddleware"),t("span",{staticClass:"token punctuation"},[this._v(":")]),this._v(" typeof "),t("a",{attrs:{href:"/api/di/decorators/OverrideProvider.html"}},[t("span",{staticClass:"token"},[this._v("OverrideProvider")])]),t("span",{staticClass:"token punctuation"},[this._v(";")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#description","aria-hidden":"true"}},[this._v("#")]),this._v(" Description")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{pre:!0,attrs:{id:"usage"}},[t("a",{pre:!0,attrs:{class:"header-anchor",href:"#usage","aria-hidden":"true"}},[this._v("#")]),this._v(" Usage")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{pre:!0,attrs:{class:"language-typescript extra-class"}},[s("pre",{pre:!0,attrs:{"v-pre":"",class:"language-typescript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("import")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("OriginalMiddlware"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" OverrideMiddleware"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"@tsed/common"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n@"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("OverrideMiddleware")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("OriginalMiddlware"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("export")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("class")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("CustomMiddleware")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("extends")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("OriginalMiddlware")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("public")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("use")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{pre:!0,attrs:{id:"override-examples"}},[t("a",{pre:!0,attrs:{class:"header-anchor",href:"#override-examples","aria-hidden":"true"}},[this._v("#")]),this._v(" Override examples")])}],!1,null,null,null);a.options.__file="OverrideMiddleware.md";t.default=a.exports}}]);