(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{374:function(t,v,_){"use strict";_.r(v);var a=_(45),s=Object(a.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"html篇"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#html篇"}},[t._v("#")]),t._v(" html篇")]),t._v(" "),_("h2",{attrs:{id:"语义化"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#语义化"}},[t._v("#")]),t._v(" 语义化")]),t._v(" "),_("hr"),t._v(" "),_("blockquote",[_("ul",[_("li",[_("p",[t._v("更好的展示内容结构")])]),t._v(" "),_("li",[_("p",[t._v("便于维护和开发")])]),t._v(" "),_("li",[_("p",[t._v("有利于SEO")])]),t._v(" "),_("li",[_("p",[t._v("方便其他设备解析")])])])]),t._v(" "),_("h2",{attrs:{id:"seo"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#seo"}},[t._v("#")]),t._v(" SEO")]),t._v(" "),_("hr"),t._v(" "),_("blockquote",[_("ul",[_("li",[t._v("搜索引擎优化一种利用搜索引擎的搜索规则来提高目前网站在有关搜索引擎内的自然排名的方式。他的实现原来分别为，页面抓取，分析入库，检索排序")])])]),t._v(" "),_("h2",{attrs:{id:"doctype"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#doctype"}},[t._v("#")]),t._v(" doctype")]),t._v(" "),_("hr"),t._v(" "),_("blockquote",[_("ul",[_("li",[_("p",[t._v("标准模式的渲染方式和 JS 引擎的解析方式都是以该浏览器支持的最高标准运行。 兼容模式中，页面以宽松的向后兼容的方式显示 ，模拟老式浏览器的行为以防止站点无法工作。")])]),t._v(" "),_("li",[_("p",[t._v("DOCTYPE的存在，就是为了声明，该页面使用标准模式。不声明，可能一些旧的网站会出现兼容模式。")])])])]),t._v(" "),_("h2",{attrs:{id:"link与-import"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#link与-import"}},[t._v("#")]),t._v(" link与@import")]),t._v(" "),_("hr"),t._v(" "),_("blockquote",[_("ul",[_("li",[_("p",[t._v("本质上都是用来引入css")])]),t._v(" "),_("li",[_("p",[t._v("@import只能引入css,而link可以引入所有资源，包括图片、RSS等")])]),t._v(" "),_("li",[_("p",[t._v("link引入的css会同时被加载，@Import会等到页面全部被下载后再加载")])]),t._v(" "),_("li",[_("p",[t._v("link无兼容问题，import兼容IE5以上")])]),t._v(" "),_("li",[_("p",[t._v("动态引入样式 link可以后期引入样式，而import是不可以后期引入的，只能初始化页面之前引入")])]),t._v(" "),_("li",[_("p",[t._v("复用率的问题 import可以复用之前的css文件，而link只能一次引用一个文件。 当然，import复用文件时，在浏览器实际上是加载了多个文件，会有多个请求。而每一个link只是一个http请求。")])])])]),t._v(" "),_("h2",{attrs:{id:"文本元素的冒泡与委托"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#文本元素的冒泡与委托"}},[t._v("#")]),t._v(" 文本元素的冒泡与委托")]),t._v(" "),_("h1",{attrs:{id:"css篇"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#css篇"}},[t._v("#")]),t._v(" css篇")]),t._v(" "),_("h2",{attrs:{id:"盒子模型"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#盒子模型"}},[t._v("#")]),t._v(" 盒子模型")]),t._v(" "),_("blockquote",[_("ul",[_("li",[_("p",[t._v("w3c盒子模型：可通过box-sizing：content-box,它包含：content+padding+border+margin")])]),t._v(" "),_("li",[_("p",[t._v("IE盒子模型：可通过box-sizing:border-box,它包含：content+padding+border")])])])]),t._v(" "),_("h2",{attrs:{id:"bfc-块级格式化上下文"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#bfc-块级格式化上下文"}},[t._v("#")]),t._v(" BFC 块级格式化上下文")]),t._v(" "),_("blockquote",[_("p",[t._v("产生了BFC的，形成了独立容器，他的特性就是不会再布局中影响到外边的元素。")]),t._v(" "),_("p",[t._v("特性")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("BFC边距会重叠")])]),t._v(" "),_("li",[_("p",[t._v("BFC的内外元素互相不影响")])]),t._v(" "),_("li",[_("p",[t._v("BFC不会与浮动元素发生重叠")])]),t._v(" "),_("li",[_("p",[t._v("BFC元素的高度计算会包括元素内的浮动元素的高度")])])]),t._v(" "),_("p",[t._v("触发条件")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("body根元素")])]),t._v(" "),_("li",[_("p",[t._v("浮动元素：float除none以外的值")])]),t._v(" "),_("li",[_("p",[t._v("绝对定位元素：position (absolute、fixed)")])]),t._v(" "),_("li",[_("p",[t._v("display 为 inline-block、table-cells、flex，table-caption")])]),t._v(" "),_("li",[_("p",[t._v("overflow 除了 visible 以外的值 (hidden、auto、scroll)")])])]),t._v(" "),_("p",[t._v("GFC：可简单理解为grid布局")]),t._v(" "),_("p",[t._v("FFC：可简单理解为flex布局。")]),t._v(" "),_("p",[t._v("IFC:内联格式化上下文，简单理解为：inline-block。")])]),t._v(" "),_("h2",{attrs:{id:"css3-新特性"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#css3-新特性"}},[t._v("#")]),t._v(" css3 新特性")]),t._v(" "),_("blockquote",[_("ul",[_("li",[_("p",[t._v("背景，支持RGBA透明度，一次多背景图")])]),t._v(" "),_("li",[_("p",[t._v("支持阴影，渐变")])]),t._v(" "),_("li",[_("p",[t._v("支持边框图片，border-image: url(border.png) 30 30 round")])]),t._v(" "),_("li",[_("p",[t._v("支持transform位移系列、支持过渡效果transition")])]),t._v(" "),_("li",[_("p",[t._v("支持自定义字体")])]),t._v(" "),_("li",[_("p",[t._v("引入flex/grid布局")])]),t._v(" "),_("li",[_("p",[t._v("引入多种选择器")])])])]),t._v(" "),_("h2",{attrs:{id:"垂直居中"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#垂直居中"}},[t._v("#")]),t._v(" 垂直居中")]),t._v(" "),_("h2",{attrs:{id:"水平居中"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#水平居中"}},[t._v("#")]),t._v(" 水平居中")]),t._v(" "),_("h2",{attrs:{id:"实现1px"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#实现1px"}},[t._v("#")]),t._v(" 实现1px")]),t._v(" "),_("blockquote",[_("ul",[_("li",[_("p",[t._v("利用 transfrom 的 scale 缩放来实现")])]),t._v(" "),_("li",[_("p",[t._v("利用 background 的 line-gradient 线性渐变来实现")])]),t._v(" "),_("li",[_("p",[t._v("meta viewport修改成1比0.5")])]),t._v(" "),_("li",[_("p",[t._v("利用box-shadow")])])])]),t._v(" "),_("h2",{attrs:{id:"样式优化"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#样式优化"}},[t._v("#")]),t._v(" 样式优化")]),t._v(" "),_("blockquote",[_("ul",[_("li",[_("p",[t._v("避免css层级太深。有兴趣了解一下css tree如何跟html tree融合成dom tree")])]),t._v(" "),_("li",[_("p",[t._v("首屏（特别是缓冲效果图）可适当使用内联元素。这样有利于更快的显示。")])]),t._v(" "),_("li",[_("p",[t._v("异步加载CSS。非首次重要引入的css文件，不放在head里边。这样会引起阻塞。")])]),t._v(" "),_("li",[_("p",[t._v("减少回流的属性。如display:none可以考虑使用visibility")])]),t._v(" "),_("li",[_("p",[t._v("适当使用GPU渲染。如tranfrom等")])]),t._v(" "),_("li",[_("p",[t._v("css动画的性能，是远远的大于js动画性能。")])]),t._v(" "),_("li",[_("p",[t._v("利用工具压缩，去重。")])])])])])}),[],!1,null,null,null);v.default=s.exports}}]);