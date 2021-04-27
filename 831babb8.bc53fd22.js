(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{169:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return s})),r.d(t,"Highlight",(function(){return c})),r.d(t,"default",(function(){return u}));var o=r(3),n=r(7),a=(r(0),r(260)),i={title:"File storage & MongoDB",author:"Oscar Miras",author_title:"Singulars 2021",author_url:"https://github.com/omiras",author_image_url:"https://avatars1.githubusercontent.com/u/3286458?s=460&v=4",tags:["nodejs","express","database","files","mongodb"]},l={permalink:"/singusaurus/blog/2021/04/23/MongoDB-NodeJS-project",editUrl:"https://github.com/Singulars2021/singusaurus/tree/main/blog/blog/2021-04-23-MongoDB-NodeJS-project.mdx",source:"@site/blog\\2021-04-23-MongoDB-NodeJS-project.mdx",description:"borderRadius: '2px',",date:"2021-04-23T00:00:00.000Z",tags:[{label:"nodejs",permalink:"/singusaurus/blog/tags/nodejs"},{label:"express",permalink:"/singusaurus/blog/tags/express"},{label:"database",permalink:"/singusaurus/blog/tags/database"},{label:"files",permalink:"/singusaurus/blog/tags/files"},{label:"mongodb",permalink:"/singusaurus/blog/tags/mongodb"}],title:"File storage & MongoDB",truncated:!1,prevItem:{title:"MVC & MongoDB & Database tools",permalink:"/singusaurus/blog/2021/04/26/MongoDB-NodeJS"},nextItem:{title:"MongoDB with NodeJS",permalink:"/singusaurus/blog/2021/04/22/file-manipulation-mongodb"}},s=[{value:'<strong><Highlight color="#ff8000">What are we going to do today?</Highlight></strong>',id:"highlight-colorff8000what-are-we-going-to-do-todayhighlight",children:[]},{value:'<strong><Highlight color="#ff8000">Class highlights</Highlight></strong>',id:"highlight-colorff8000class-highlightshighlight",children:[]},{value:'<strong><Highlight color="#ff8000">What are we going to do next class?</Highlight></strong>',id:"highlight-colorff8000what-are-we-going-to-do-next-classhighlight",children:[]}],c=function(e){var t=e.children,r=e.color;return Object(a.b)("span",{style:{borderRadius:"2px",color:r,padding:"0.2rem"}},t)},g={toc:s,Highlight:c};function u(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},g,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"highlight-colorff8000what-are-we-going-to-do-todayhighlight"},Object(a.b)("strong",{parentName:"h2"},Object(a.b)(c,{color:"#ff8000",mdxType:"Highlight"},"What are we going to do today?"))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Fran will show us a solution for the ",Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://www.codewars.com/kata/5697fb83f41965761f000052"}),"algorithm of the day")),Object(a.b)("li",{parentName:"ul"},"Why do we need databases?"),Object(a.b)("li",{parentName:"ul"},"Databases in files. Transform our app to store information in files rather than in memory."),Object(a.b)("li",{parentName:"ul"},"What is MongoDB. Querying a MongoDB."),Object(a.b)("li",{parentName:"ul"},"Transform fototeca to store information in our MongoDB.")),Object(a.b)("h2",{id:"highlight-colorff8000class-highlightshighlight"},Object(a.b)("strong",{parentName:"h2"},Object(a.b)(c,{color:"#ff8000",mdxType:"Highlight"},"Class highlights"))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"MongoDB cheatsheet - ",Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://developer.mongodb.com/quickstart/cheat-sheet/"}),"Link")),Object(a.b)("li",{parentName:"ul"},"MongoDB CRUD operations with NodeJS/Express - ",Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://docs.mongodb.com/drivers/node/usage-examples/"}),"Link")),Object(a.b)("li",{parentName:"ul"},"Very well and detailed documentation how to use MongoDB driver in NodeJS - ",Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://guru99.es/node-js-mongodb/"}),"Likn")),Object(a.b)("li",{parentName:"ul"},"More practice with MongoDB queries - ",Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://www.w3resource.com/mongodb-exercises/#PracticeOnline"}),"Link"))),Object(a.b)("h2",{id:"highlight-colorff8000what-are-we-going-to-do-next-classhighlight"},Object(a.b)("strong",{parentName:"h2"},Object(a.b)(c,{color:"#ff8000",mdxType:"Highlight"},"What are we going to do next class?"))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Finish MVC project with MongoDB"),Object(a.b)("li",{parentName:"ul"},"More exercises with MongoDB library "),Object(a.b)("li",{parentName:"ul"},"Algorithm of the day - ",Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://www.codewars.com/kata/597ef546ee48603f7a000057"}),"Stock Profits")," - to be solved by Claudia Ballano")))}u.isMDXComponent=!0},260:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return p}));var o=r(0),n=r.n(o);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=n.a.createContext({}),g=function(e){var t=n.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=g(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=g(r),b=o,p=u["".concat(i,".").concat(b)]||u[b]||h[b]||a;return r?n.a.createElement(p,l(l({ref:t},c),{},{components:r})):n.a.createElement(p,l({ref:t},c))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);