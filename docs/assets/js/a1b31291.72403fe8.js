"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7336],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,a(a({ref:t},l),{},{components:n})):r.createElement(f,a({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},66301:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return p}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],u={id:"index",title:"cursorless",slug:"/contributing/api/",sidebar_label:"Readme",sidebar_position:0,custom_edit_url:null},c="Cursorless internals",s={unversionedId:"contributing/api/index",id:"contributing/api/index",title:"cursorless",description:"This document is intended to present a high-level overview of the Cursorless",source:"@site/../docs/contributing/api/index.md",sourceDirName:"contributing/api",slug:"/contributing/api/",permalink:"/docs/contributing/api/",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"index",title:"cursorless",slug:"/contributing/api/",sidebar_label:"Readme",sidebar_position:0,custom_edit_url:null},sidebar:"contributing",previous:{title:"Adding a new programming language",permalink:"/docs/contributing/adding-a-new-language"},next:{title:"Exports",permalink:"/docs/contributing/api/modules"}},l={},p=[],d={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"cursorless-internals"},"Cursorless internals"),(0,i.kt)("p",null,"This document is intended to present a high-level overview of the Cursorless\narchitecture, as well as key pointers to locations in the code base to help\ncontributors get up to speed."),(0,i.kt)("p",null,"For the time being, we recommend watching the ",(0,i.kt)("a",{parentName:"p",href:"https://youtube.com/playlist?list=PLkafpFOBVedScHi0dy_80DsHwnZIOSOTy"},"internals walk-through\nvideos"),"\nand having a look through the API docs, starting from the ",(0,i.kt)("a",{parentName:"p",href:"classes/core_commandRunner_CommandRunner.CommandRunner#runcommand"},(0,i.kt)("inlineCode",{parentName:"a"},"runCommand"),"\nfunction"),"."))}m.isMDXComponent=!0}}]);