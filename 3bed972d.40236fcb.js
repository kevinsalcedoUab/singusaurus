(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{102:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return c})),r.d(t,"Highlight",(function(){return u})),r.d(t,"default",(function(){return s}));var n=r(3),o=r(7),a=(r(0),r(210)),i={title:"Array practice and Vue Components",author:"Oscar Miras",author_title:"Singulars 2021",author_url:"https://github.com/omiras",author_image_url:"https://avatars1.githubusercontent.com/u/3286458?s=460&v=4",tags:["vue","components","array","methods"]},l={permalink:"/singusaurus/blog/2021/02/01/array-practice-vue-components",editUrl:"https://github.com/Singulars2021/singusaurus/tree/main/blog/blog/2021-02-01-array-practice-vue-components.mdx",source:"@site/blog\\2021-02-01-array-practice-vue-components.mdx",description:"borderRadius: '2px',",date:"2021-02-01T00:00:00.000Z",tags:[{label:"vue",permalink:"/singusaurus/blog/tags/vue"},{label:"components",permalink:"/singusaurus/blog/tags/components"},{label:"array",permalink:"/singusaurus/blog/tags/array"},{label:"methods",permalink:"/singusaurus/blog/tags/methods"}],title:"Array practice and Vue Components",truncated:!1,prevItem:{title:"Vue refactor, Vue Cli/templates, Custom Events",permalink:"/singusaurus/blog/2021/02/03/vue-refactor-cli-events copy"},nextItem:{title:"Finish Vue challange and work on Tender project",permalink:"/singusaurus/blog/2021/01/29/finish-challange-work-on-tender-project copy"}},c=[{value:'<strong><Highlight color="#ff8000">What are we going to do today?</Highlight></strong>',id:"highlight-colorff8000what-are-we-going-to-do-todayhighlight",children:[]},{value:'<strong><Highlight color="#ff8000">Daily Highlights</Highlight></strong>',id:"highlight-colorff8000daily-highlightshighlight",children:[]},{value:'<strong><Highlight color="#ff8000">What are we going to do next class?</Highlight></strong>',id:"highlight-colorff8000what-are-we-going-to-do-next-classhighlight",children:[]}],u=function(e){var t=e.children,r=e.color;return Object(a.b)("span",{style:{borderRadius:"2px",color:r,padding:"0.2rem"}},t)},g={toc:c,Highlight:u};function s(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},g,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"highlight-colorff8000what-are-we-going-to-do-todayhighlight"},Object(a.b)("strong",{parentName:"h2"},Object(a.b)(u,{color:"#ff8000",mdxType:"Highlight"},"What are we going to do today?"))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"JavaScript array methods"),Object(a.b)("li",{parentName:"ul"},"Introduction to Vue Components"),Object(a.b)("li",{parentName:"ul"},"Talk about tik tok video")),Object(a.b)("h2",{id:"highlight-colorff8000daily-highlightshighlight"},Object(a.b)("strong",{parentName:"h2"},Object(a.b)(u,{color:"#ff8000",mdxType:"Highlight"},"Daily Highlights"))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Props in components may be defined with ",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://v3.vuejs.org/guide/component-props.html#prop-validation"}),"some constraints"))),Object(a.b)("h2",{id:"highlight-colorff8000what-are-we-going-to-do-next-classhighlight"},Object(a.b)("strong",{parentName:"h2"},Object(a.b)(u,{color:"#ff8000",mdxType:"Highlight"},"What are we going to do next class?"))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Vue-Cli: a better way to develope vue apps."),Object(a.b)("li",{parentName:"ul"},"Component communication: how children and parent components communicate")))}s.isMDXComponent=!0},210:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),g=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=g(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=g(r),p=n,b=s["".concat(i,".").concat(p)]||s[p]||h[p]||a;return r?o.a.createElement(b,l(l({ref:t},u),{},{components:r})):o.a.createElement(b,l({ref:t},u))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"}}]);