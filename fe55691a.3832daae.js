(window.webpackJsonp=window.webpackJsonp||[]).push([[182],{254:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return g})),r.d(t,"Highlight",(function(){return c})),r.d(t,"default",(function(){return h}));var o=r(3),n=r(7),a=(r(0),r(260)),i={title:"MVC & MongoDB & Database tools",author:"Oscar Miras",author_title:"Singulars 2021",author_url:"https://github.com/omiras",author_image_url:"https://avatars1.githubusercontent.com/u/3286458?s=460&v=4",tags:["nodejs","database","mongodb","management","tools"]},l={permalink:"/singusaurus/blog/2021/04/26/MongoDB-NodeJS",editUrl:"https://github.com/Singulars2021/singusaurus/tree/main/blog/blog/2021-04-26-MongoDB-NodeJS.mdx",source:"@site/blog\\2021-04-26-MongoDB-NodeJS.mdx",description:"borderRadius: '2px',",date:"2021-04-26T00:00:00.000Z",tags:[{label:"nodejs",permalink:"/singusaurus/blog/tags/nodejs"},{label:"database",permalink:"/singusaurus/blog/tags/database"},{label:"mongodb",permalink:"/singusaurus/blog/tags/mongodb"},{label:"management",permalink:"/singusaurus/blog/tags/management"},{label:"tools",permalink:"/singusaurus/blog/tags/tools"}],title:"MVC & MongoDB & Database tools",truncated:!1,prevItem:{title:"MVC & MongoDB",permalink:"/singusaurus/blog/2021/04/27/MongoDB-Tools"},nextItem:{title:"File storage & MongoDB",permalink:"/singusaurus/blog/2021/04/23/MongoDB-NodeJS-project"}},g=[{value:'<strong><Highlight color="#ff8000">What are we going to do today?</Highlight></strong>',id:"highlight-colorff8000what-are-we-going-to-do-todayhighlight",children:[]},{value:'<strong><Highlight color="#ff8000">Class highlights</Highlight></strong>',id:"highlight-colorff8000class-highlightshighlight",children:[]},{value:'<strong><Highlight color="#ff8000">What are we going to do next class?</Highlight></strong>',id:"highlight-colorff8000what-are-we-going-to-do-next-classhighlight",children:[]}],c=function(e){var t=e.children,r=e.color;return Object(a.b)("span",{style:{borderRadius:"2px",color:r,padding:"0.2rem"}},t)},s={toc:g,Highlight:c};function h(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"highlight-colorff8000what-are-we-going-to-do-todayhighlight"},Object(a.b)("strong",{parentName:"h2"},Object(a.b)(c,{color:"#ff8000",mdxType:"Highlight"},"What are we going to do today?"))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"More exercises with MongoDB library and MVC"),Object(a.b)("li",{parentName:"ul"},"More queries with MongoDB (no MVC) & database migration"),Object(a.b)("li",{parentName:"ul"},"Algorithm of the day - ",Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://www.codewars.com/kata/550554fd08b86f84fe000a58"}),"Which are In")," - to be solved by Daniel Ruiz")),Object(a.b)("h2",{id:"highlight-colorff8000class-highlightshighlight"},Object(a.b)("strong",{parentName:"h2"},Object(a.b)(c,{color:"#ff8000",mdxType:"Highlight"},"Class highlights"))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Strategies to approach code interviews or how to code an alogrithm - ",Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://www.freecodecamp.org/news/how-to-approach-any-algorithm-interview-without-panicking-b6d7ae5c050/"}),"Link")," ")),Object(a.b)("h2",{id:"highlight-colorff8000what-are-we-going-to-do-next-classhighlight"},Object(a.b)("strong",{parentName:"h2"},Object(a.b)(c,{color:"#ff8000",mdxType:"Highlight"},"What are we going to do next class?"))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"In the following days, we'll be implementing our personal blueprints"),Object(a.b)("li",{parentName:"ul"},"We'll introduce the Mongoose library"),Object(a.b)("li",{parentName:"ul"},"Didac will code the algorithm of the day - ",Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://leetcode.com/explore/interview/card/top-interview-questions-easy/99/others/721/"}),"Link"))))}h.isMDXComponent=!0},260:function(e,t,r){"use strict";r.d(t,"a",(function(){return h})),r.d(t,"b",(function(){return p}));var o=r(0),n=r.n(o);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function g(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=n.a.createContext({}),s=function(e){var t=n.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},h=function(e){var t=s(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=g(e,["components","mdxType","originalType","parentName"]),h=s(r),b=o,p=h["".concat(i,".").concat(b)]||h[b]||u[b]||a;return r?n.a.createElement(p,l(l({ref:t},c),{},{components:r})):n.a.createElement(p,l({ref:t},c))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=b;var l={};for(var g in t)hasOwnProperty.call(t,g)&&(l[g]=t[g]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);