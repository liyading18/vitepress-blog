var e=Object.assign;import{r as t,m as n,a,n as o,i as s,d as r,h as l,b as i,o as c,c as u,w as d,e as p,f as h,g as f,t as v,j as m,p as g,k as b,l as w,q as k,s as y,u as x,v as $,F as _,x as C,y as L,z as E,A as S,B as I,C as A,D as R,E as T}from"./framework.5c8a4622.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(n){const a=new URL(e,location),o=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((n,s)=>{const r=new URL(e,a);if(self[t].moduleMap[r])return n(self[t].moduleMap[r]);const l=new Blob([`import * as m from '${r}';`,`${t}.moduleMap['${r}']=m;`],{type:"text/javascript"}),i=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(l),onerror(){s(new Error(`Failed to import: ${e}`)),o(i)},onload(){n(self[t].moduleMap[r]),o(i)}});document.head.appendChild(i)})),self[t].moduleMap={}}}("/vitepress2021/");const q="undefined"!=typeof window;function U(e,t){return`${e}${t}`.replace(/\/+/g,"/")}function j(e){let t=e.replace(/\.html$/,"");if(t.endsWith("/")&&(t+="index"),q){const e="/vitepress2021/";t=t.slice(e.length).replace(/\//g,"_")+".md";t=`${e}assets/${t}.${__VP_HASH_MAP__[t]}.js`}else t=`./${t.slice(1).replace(/\//g,"_")}.md.js`;return t}const B=Symbol();function H(){return function(){const e=s(B);if(!e)throw new Error("useRouter() is called without provider.");return e}().route}function M(e,t,n=!1){const a=document.querySelector(".nav-bar").offsetHeight,o=e.classList.contains(".header-anchor")?e:document.querySelector(decodeURIComponent(t));if(o){const e=o.offsetTop-a-15;!n||Math.abs(e-window.scrollY)>window.innerHeight?window.scrollTo(0,e):window.scrollTo({left:0,top:e,behavior:"smooth"})}}const O=r({name:"VitePressContent",setup(){const e=H();return()=>e.component?l(e.component):null}}),P=r({setup(e,{slots:t}){const n=i(!1);return c((()=>{n.value=!0})),()=>n.value&&t.default?t.default():null}});const D=i((W='{"lang":"en-US","title":"Hello VitePress","description":"Just playing around.","base":"/vitepress2021/","head":[],"themeConfig":{"docsDir":"docs","nav":[{"text":"主要页面","link":"/VitePress/"},{"text":"工作相关","link":"/work"},{"text":"Config","link":"/config"},{"text":"Navigator导航","link":"http://pengchenggang.gitee.io/navigator/"}],"sidebar":{"/config/":"auto","/VitePress/":"auto"}},"locales":{}}',a(JSON.parse(W))));var W;function z(){return D}const F="undefined"!=typeof window;function V(e,t){const n=function(e,t){t.sort(((e,t)=>{const n=t.split("/").length-e.split("/").length;return 0!==n?n:t.length-e.length}));for(const n of t)if(e.startsWith(n))return n}(t,Object.keys(e));return n?e[n]:void 0}function N(t,n){n=function(e,t){if(!F)return t;const n=e.base,a=n.endsWith("/")?n.slice(0,-1):n;return t.slice(a.length)}(t,n);const a=V(t.locales||{},n)||{},o=V(t.themeConfig&&t.themeConfig.locales||{},n)||{};return e(e(e({},t),a),{themeConfig:e(e(e({},t.themeConfig),o),{locales:{}}),locales:{}})}function K(e){const t=e||H();return u((()=>N(D.value,t.path)))}function G(e){const t=e||H();return u((()=>t.data))}function J(e,t){const n=Array.from(document.querySelectorAll("meta"));let a=!0;const o=e=>{a?a=!1:(n.forEach((e=>document.head.removeChild(e))),n.length=0,e&&e.length&&e.forEach((e=>{const t=function([e,t,n]){const a=document.createElement(e);for(const o in t)a.setAttribute(o,t[o]);n&&(a.innerHTML=n);return a}(e);document.head.appendChild(t),n.push(t)})))};d((()=>{const n=e.data,a=t.value,s=n&&n.title;document.title=(s?s+" | ":"")+a.title,o([["meta",{charset:"utf-8"}],["meta",{name:"viewport",content:"width=device-width,initial-scale=1"}],["meta",{name:"description",content:a.description}],...a.head,...n&&n.frontmatter.head||[]])}))}const Y=m("data-v-6e0ba27d");g("data-v-6e0ba27d");const X=f("p",{class:"title"},"Debug",-1),Q={class:"block"},Z={class:"block"},ee={class:"block"};b();r({expose:[],setup(e){const t=i(null),n=i(!1);return p(n,(e=>{!1===e&&(t.value.scrollTop=0)})),Y(((e,a)=>(w(),h("div",{class:["debug",{open:n.value}],ref:t,onClick:a[1]||(a[1]=e=>n.value=!n.value)},[X,f("pre",Q,"$page "+v(e.$page),1),f("pre",Z,"$siteByRoute "+v(e.$siteByRoute),1),f("pre",ee,"$site "+v(e.$site),1)],2))))}}).__scopeId="data-v-6e0ba27d";const te={},ne=m("data-v-00c3af85")(((e,t)=>(w(),h("a",{class:"nav-bar-title",href:e.$site.base,"aria-label":`${e.$site.title}, back to home`},[e.$themeConfig.logo?(w(),h("img",{key:0,class:"logo",src:e.$withBase(e.$themeConfig.logo),alt:"Logo"},null,8,["src"])):k("v-if",!0),y(" "+v(e.$site.title),1)],8,["href","aria-label"]))));te.render=ne,te.__scopeId="data-v-00c3af85";const ae=["GitHub","GitLab","Bitbucket"].map((e=>[e,new RegExp(e,"i")]));function oe(){const e=K();return u((()=>{const t=e.value.themeConfig,n=t.docsRepo||t.repo;if(!n)return null;const a=/^https?:/.test(o=n)?o:`https://github.com/${o}`;var o;return{text:function(e,t){if(t)return t;const n=e.match(/^https?:\/\/[^/]+/);if(!n)return"Source";const a=ae.find((([e,t])=>t.test(n[0])));if(a&&a[0])return a[0];return"Source"}(a,t.repoLabel),link:a}}))}const se=/#.*$/,re=/(index)?\.(md|html)$/,le=/\/$/,ie=/^[a-z]+:/i;function ce(e){return Array.isArray(e)}function ue(e){return ie.test(e)}function de(e){return decodeURI(e).replace(se,"").replace(re,"")}function pe(e){return/^\//.test(e)?e:`/${e}`}function he(e){return e.replace(/(index)?(\.(md|html))?$/,"")||"/"}function fe(e){const t=H(),{withBase:n}=function(){const e=z();return{withBase:function(t){return U(e.value.base,t)}}}(),a=ue(e.link);return{props:u((()=>{const o=ve(t.path);let s=!1;if(e.activeMatch)s=new RegExp(e.activeMatch).test(o);else{const t=ve(n(e.link));s="/"===t?t===o:o.startsWith(t)}return{class:{active:s,isExternal:a},href:a?e.link:n(e.link),target:e.target||a?"_blank":null,rel:e.rel||a?"noopener noreferrer":null,"aria-label":e.ariaLabel}})),isExternal:a}}function ve(e){return e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\.(html|md)$/,"").replace(/\/index$/,"/")}const me={},ge={class:"icon outbound",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15"},be=f("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"},null,-1),we=f("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"},null,-1);me.render=function(e,t){return w(),h("svg",ge,[be,we])};const ke=m("data-v-98431d6e");g("data-v-98431d6e");const ye={class:"nav-link"};b();var xe=r({expose:[],props:{item:{type:null,required:!0}},setup(e){const{item:t}=e,{props:n,isExternal:a}=fe(t);return ke(((e,o)=>(w(),h("div",ye,[f("a",$({class:"item"},x(n)),[y(v(t.text)+" ",1),x(a)?(w(),h(me,{key:0})):k("v-if",!0)],16)]))))}});xe.__scopeId="data-v-98431d6e";const $e=m("data-v-63e6a3ce");g("data-v-63e6a3ce");const _e={class:"nav-dropdown-link-item"},Ce=f("span",{class:"arrow"},null,-1),Le={class:"text"},Ee={class:"icon"};b();var Se=r({expose:[],props:{item:{type:null,required:!0}},setup(e){const{item:t}=e,{props:n,isExternal:a}=fe(t);return $e(((e,o)=>(w(),h("div",_e,[f("a",$({class:"item"},x(n)),[Ce,f("span",Le,v(t.text),1),f("span",Ee,[x(a)?(w(),h(me,{key:0})):k("v-if",!0)])],16)]))))}});Se.__scopeId="data-v-63e6a3ce";const Ie=m("data-v-517467a8");g("data-v-517467a8");const Ae={class:"button-text"},Re={class:"dialog"};b();var Te=r({expose:[],props:{item:{type:null,required:!0}},setup(e){const t=H(),n=i(!1);function a(){n.value=!n.value}return p((()=>t.path),(()=>{n.value=!1})),Ie(((t,o)=>(w(),h("div",{class:["nav-dropdown-link",{open:n.value}]},[f("button",{class:"button","aria-label":e.item.ariaLabel,onClick:a},[f("span",Ae,v(e.item.text),1),f("span",{class:["button-arrow",n.value?"down":"right"]},null,2)],8,["aria-label"]),f("ul",Re,[(w(!0),h(_,null,C(e.item.items,(e=>(w(),h("li",{key:e.text,class:"dialog-item"},[f(Se,{item:e},null,8,["item"])])))),128))])],2))))}});Te.__scopeId="data-v-517467a8";const qe=m("data-v-f465d38e");g("data-v-f465d38e");const Ue={key:0,class:"nav-links"},je={key:1,class:"item"},Be={key:2,class:"item"};b();var He=r({expose:[],setup(e){const t=K(),n=function(){const e=H(),t=z();return u((()=>{const n=t.value.themeConfig.locales;if(!n)return null;const a=Object.keys(n);if(a.length<=1)return null;const o=q?t.value.base:"/",s=o.endsWith("/")?o.slice(0,-1):o,r=e.path.slice(s.length),l=a.find((e=>"/"!==e&&r.startsWith(e))),i=l?r.substring(l.length-1):r,c=a.map((e=>{const t=e.endsWith("/")?e.slice(0,-1):e;return{text:n[e].label,link:`${t}${i}`}})),u=l||"/";return{text:n[u].selectText?n[u].selectText:"Languages",items:c}}))}(),a=oe(),o=u((()=>s.value||a.value)),s=u((()=>t.value.themeConfig.nav));return qe(((e,t)=>x(o)?(w(),h("nav",Ue,[x(s)?(w(!0),h(_,{key:0},C(x(s),(e=>(w(),h("div",{key:e.text,class:"item"},[e.items?(w(),h(Te,{key:0,item:e},null,8,["item"])):(w(),h(xe,{key:1,item:e},null,8,["item"]))])))),128)):k("v-if",!0),x(n)?(w(),h("div",je,[f(Te,{item:x(n)},null,8,["item"])])):k("v-if",!0),x(a)?(w(),h("div",Be,[f(xe,{item:x(a)},null,8,["item"])])):k("v-if",!0)])):k("v-if",!0)))}});He.__scopeId="data-v-f465d38e";const Me={emits:["toggle"]},Oe=f("svg",{class:"icon",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"},[f("path",{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z",class:""})],-1);Me.render=function(e,t,n,a,o,s){return w(),h("div",{class:"sidebar-button",onClick:t[1]||(t[1]=t=>e.$emit("toggle"))},[Oe])};const Pe=m("data-v-6e7c0b86");g("data-v-6e7c0b86");const De={class:"nav-bar"},We=f("div",{class:"flex-grow"},null,-1),ze={class:"nav"};b();var Fe=r({expose:[],emits:["toggle"],setup:e=>Pe(((e,t)=>(w(),h("header",De,[f(Me,{onToggle:t[1]||(t[1]=t=>e.$emit("toggle"))}),f(te),We,f("div",ze,[f(He)]),L(e.$slots,"search")]))))});function Ve(){let e=null,t=null;const n=function(e,t){let n,a=!1;return()=>{n&&clearTimeout(n),a?n=setTimeout(e,t):(e(),a=!0,setTimeout((()=>{a=!1}),t))}}(a,300);function a(){const e=function(e){return[].slice.call(document.querySelectorAll(".header-anchor")).filter((t=>e.some((e=>e.hash===t.hash))))}([].slice.call(document.querySelectorAll(".sidebar a.sidebar-link-item")));for(let t=0;t<e.length;t++){const n=e[t],a=e[t+1],[s,r]=Ke(t,n,a);if(s)return history.replaceState(null,document.title,r||" "),void o(r)}}function o(n){if(s(t),s(e),t=document.querySelector(`.sidebar a[href="${n}"]`),!t)return;t.classList.add("active");const a=t.closest(".sidebar-links > ul > li");a&&a!==t.parentElement?(e=a.querySelector("a"),e&&e.classList.add("active")):e=null}function s(e){e&&e.classList.remove("active")}c((()=>{a(),window.addEventListener("scroll",n)})),E((()=>{o(decodeURIComponent(location.hash))})),S((()=>{window.removeEventListener("scroll",n)}))}function Ne(e){const t=document.querySelector(".nav-bar").offsetHeight;return e.parentElement.offsetTop-t-15}function Ke(e,t,n){const a=window.scrollY;return 0===e&&0===a?[!0,null]:a<Ne(t)?[!1,null]:!n||a<Ne(n)?[!0,decodeURIComponent(t.hash)]:[!1,null]}function Ge(e,t){if(function(e){return!1===e||"auto"===e||ce(e)}(e))return e;t=pe(t);for(const n in e)if(t.startsWith(pe(n)))return e[n];return"auto"}function Je(e){return e.reduce(((e,t)=>(t.link&&e.push({text:t.text,link:he(t.link)}),function(e){return void 0!==e.children}(t)&&(e=[...e,...Je(t.children)]),e)),[])}function Ye(e,t){const n=[];if(void 0===e)return[];let a;return e.forEach((({level:e,title:o,slug:s})=>{if(e-1>t)return;const r={text:o,link:`#${s}`};2===e?(a=r,n.push(r)):a&&(a.children||(a.children=[])).push(r)})),n}Fe.__scopeId="data-v-6e7c0b86";const Xe=e=>{const t=H(),n=z(),a=t.data.headers,o=e.item.text,s=function(e,t){if(void 0===t)return t;if(t.startsWith("#"))return t;return function(e,t){const n=e.endsWith("/"),a=t.startsWith("/");return n&&a?e.slice(0,-1)+t:n||a?e+t:`${e}/${t}`}(e,t)}(n.value.base,e.item.link),r=e.item.children,i=function(e,t){return void 0!==t&&de(e.path)===de(t)}(t,s),c=Qe(i,r,a);return l("li",{class:"sidebar-link"},[l(s?"a":"p",{class:{"sidebar-link-item":!0,active:i},href:s},o),c])};function Qe(e,t,n){return t&&t.length>0?l("ul",{class:"sidebar-links"},t.map((e=>l(Xe,{item:e})))):e&&n?Qe(!1,function(e){return Ze(function(e){let t;return(e=e.map((e=>Object.assign({},e)))).forEach((e=>{2===e.level?t=e:t&&(t.children||(t.children=[])).push(e)})),e.filter((e=>2===e.level))}(e))}(n)):null}function Ze(e){return e.map((e=>({text:e.title,link:`#${e.slug}`,children:e.children?Ze(e.children):void 0})))}const et={key:0,class:"sidebar-links"};var tt=r({expose:[],setup(e){const t=function(){const e=H(),t=K();return Ve(),u((()=>{const n=e.data.headers,a=e.data.frontmatter.sidebar,o=e.data.frontmatter.sidebarDepth;if(!1===a)return[];if("auto"===a)return Ye(n,o);const s=Ge(t.value.themeConfig.sidebar,e.path);return!1===s?[]:"auto"===s?Ye(n,o):s}))}();return(e,n)=>x(t).length>0?(w(),h("ul",et,[(w(!0),h(_,null,C(x(t),(e=>(w(),h(x(Xe),{key:e.text,item:e},null,8,["item"])))),128))])):k("v-if",!0)}});const nt=m("data-v-58e261f2");var at=r({expose:[],props:{open:{type:Boolean,required:!0}},setup:e=>nt(((t,n)=>(w(),h("aside",{class:["sidebar",{open:e.open}]},[f(He,{class:"nav"}),L(t.$slots,"sidebar-top"),f(tt),L(t.$slots,"sidebar-bottom")],2))))});at.__scopeId="data-v-58e261f2";const ot=/bitbucket.org/;function st(){const e=K(),t=G();return{url:u((()=>{const n=null==t.value.frontmatter.editLink?e.value.themeConfig.editLinks:t.value.frontmatter.editLink;const{repo:a,docsDir:o="",docsBranch:s="master",docsRepo:r=a}=e.value.themeConfig,{relativePath:l}=t.value;return n&&l&&a?function(e,t,n,a,o){return ot.test(e)?function(e,t,n,a,o){return(ue(t)?t:e).replace(le,"")+`/src/${a}/`+(n?n.replace(le,"")+"/":"")+o+`?mode=edit&spa=0&at=${a}&fileviewer=file-view-default`}(e,t,n,a,o):function(e,t,n,a,o){return(ue(t)?t:`https://github.com/${t}`).replace(le,"")+`/edit/${a}/`+(n?n.replace(le,"")+"/":"")+o}(0,t,n,a,o)}(a,r,o,s,l):null})),text:u((()=>e.value.themeConfig.editLinkText||"Edit this page"))}}const rt=m("data-v-fb0131f2");g("data-v-fb0131f2");const lt={class:"edit-link"};b();var it=r({expose:[],setup(e){const{url:t,text:n}=st();return rt(((e,a)=>(w(),h("div",lt,[x(t)?(w(),h("a",{key:0,class:"link",href:x(t),target:"_blank",rel:"noopener noreferrer"},[y(v(x(n))+" ",1),f(me,{class:"icon"})],8,["href"])):k("v-if",!0)]))))}});it.__scopeId="data-v-fb0131f2";const ct=m("data-v-52854a16");g("data-v-52854a16");const ut={key:0,class:"last-updated"},dt={class:"prefix"},pt={class:"datetime"};b();var ht=r({expose:[],setup(e){const t=K(),n=G(),a=u((()=>{const e=t.value.themeConfig.lastUpdated;return void 0!==e&&!1!==e})),o=u((()=>{const e=t.value.themeConfig.lastUpdated;return!0===e?"Last Updated":e})),s=i("");return c((()=>{s.value=new Date(n.value.lastUpdated).toLocaleString("en-US")})),ct(((e,t)=>x(a)?(w(),h("p",ut,[f("span",dt,v(x(o))+":",1),f("span",pt,v(s.value),1)])):k("v-if",!0)))}});ht.__scopeId="data-v-52854a16";const ft=m("data-v-5a019cc9");g("data-v-5a019cc9");const vt={class:"page-footer"},mt={class:"edit"},gt={class:"updated"};b();var bt=r({expose:[],setup:e=>ft(((e,t)=>(w(),h("footer",vt,[f("div",mt,[f(it)]),f("div",gt,[f(ht)])]))))});function wt(){const e=K(),t=G(),n=u((()=>he(pe(t.value.relativePath)))),a=u((()=>{const t=Ge(e.value.themeConfig.sidebar,n.value);return ce(t)?Je(t):[]})),o=u((()=>a.value.findIndex((e=>e.link===n.value)))),s=u((()=>{if(!1!==e.value.themeConfig.nextLinks&&o.value>-1&&o.value<a.value.length-1)return a.value[o.value+1]})),r=u((()=>{if(!1!==e.value.themeConfig.prevLinks&&o.value>0)return a.value[o.value-1]})),l=u((()=>!!s.value||!!r.value));return{next:s,prev:r,hasLinks:l}}bt.__scopeId="data-v-5a019cc9";const kt={},yt={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},xt=f("path",{d:"M19,11H7.4l5.3-5.3c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0l-7,7c-0.1,0.1-0.2,0.2-0.2,0.3c-0.1,0.2-0.1,0.5,0,0.8c0.1,0.1,0.1,0.2,0.2,0.3l7,7c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4L7.4,13H19c0.6,0,1-0.4,1-1S19.6,11,19,11z"},null,-1);kt.render=function(e,t){return w(),h("svg",yt,[xt])};const $t={},_t={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Ct=f("path",{d:"M19.9,12.4c0.1-0.2,0.1-0.5,0-0.8c-0.1-0.1-0.1-0.2-0.2-0.3l-7-7c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l5.3,5.3H5c-0.6,0-1,0.4-1,1s0.4,1,1,1h11.6l-5.3,5.3c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l7-7C19.8,12.6,19.9,12.5,19.9,12.4z"},null,-1);$t.render=function(e,t){return w(),h("svg",_t,[Ct])};const Lt=m("data-v-6683615c");g("data-v-6683615c");const Et={key:0,class:"next-and-prev-link"},St={class:"container"},It={class:"prev"},At={class:"text"},Rt={class:"next"},Tt={class:"text"};b();var qt=r({expose:[],setup(e){const{hasLinks:t,prev:n,next:a}=wt();return Lt(((e,o)=>x(t)?(w(),h("div",Et,[f("div",St,[f("div",It,[x(n)?(w(),h("a",{key:0,class:"link",href:e.$withBase(x(n).link)},[f(kt,{class:"icon icon-prev"}),f("span",At,v(x(n).text),1)],8,["href"])):k("v-if",!0)]),f("div",Rt,[x(a)?(w(),h("a",{key:0,class:"link",href:e.$withBase(x(a).link)},[f("span",Tt,v(x(a).text),1),f($t,{class:"icon icon-next"})],8,["href"])):k("v-if",!0)])])])):k("v-if",!0)))}});qt.__scopeId="data-v-6683615c";const Ut=m("data-v-b109f666");g("data-v-b109f666");const jt={class:"page"},Bt={class:"container"},Ht={class:"content"};b();var Mt=r({expose:[],setup:e=>Ut(((e,t)=>{const n=I("Content");return w(),h("main",jt,[f("div",Bt,[L(e.$slots,"top"),f("div",Ht,[f(n)]),f(bt),f(qt),L(e.$slots,"bottom")])])}))});Mt.__scopeId="data-v-b109f666";var Ot=r({expose:[],setup(e){const t=A((()=>__import__("./Home.f7d03703.js"))),n=()=>null,a=n,o=n,s=n,r=H(),l=z(),c=K(),d=u((()=>l.value.themeConfig)),v=G(),m=u((()=>!!r.data.frontmatter.customLayout)),g=u((()=>!!r.data.frontmatter.home)),b=u((()=>{const{themeConfig:e}=c.value,{frontmatter:t}=r.data;return!1!==t.navbar&&!1!==e.navbar&&(l.value.title||e.logo||e.repo||e.nav)})),y=i(!1),$=u((()=>{const{frontmatter:e}=r.data,{themeConfig:t}=c.value;return!e.home&&!1!==e.sidebar&&("object"==typeof t.sidebar&&0!=Object.keys(t.sidebar).length||Array.isArray(t.sidebar)&&0!=t.sidebar.length)})),C=e=>{y.value="boolean"==typeof e?e:!y.value},E=C.bind(null,!1);p(r,E);const S=u((()=>[{"no-navbar":!b.value,"sidebar-open":y.value,"no-sidebar":!$.value}]));return(e,n)=>{const r=I("Content"),l=I("Debug");return w(),h(_,null,[f("div",{class:["theme",x(S)]},[x(b)?(w(),h(Fe,{key:0,onToggle:C},{search:R((()=>[L(e.$slots,"navbar-search",{},(()=>[x(d).algolia?(w(),h(x(s),{key:0,options:x(d).algolia},null,8,["options"])):k("v-if",!0)]))])),_:1})):k("v-if",!0),f(at,{open:y.value},{"sidebar-top":R((()=>[L(e.$slots,"sidebar-top")])),"sidebar-bottom":R((()=>[L(e.$slots,"sidebar-bottom")])),_:1},8,["open"]),k(" TODO: make this button accessible "),f("div",{class:"sidebar-mask",onClick:n[1]||(n[1]=e=>C(!1))}),x(m)?(w(),h(r,{key:1})):x(g)?(w(),h(x(t),{key:2},{hero:R((()=>[L(e.$slots,"home-hero")])),features:R((()=>[L(e.$slots,"home-features")])),footer:R((()=>[L(e.$slots,"home-footer")])),_:1})):(w(),h(Mt,{key:3},{top:R((()=>[L(e.$slots,"page-top-ads",{},(()=>[x(d).carbonAds?(w(),h(x(a),{key:"carbon"+x(v).relativePath,code:x(d).carbonAds.carbon,placement:x(d).carbonAds.placement},null,8,["code","placement"])):k("v-if",!0)])),L(e.$slots,"page-top")])),bottom:R((()=>[L(e.$slots,"page-bottom"),L(e.$slots,"page-bottom-ads",{},(()=>[x(d).carbonAds&&x(d).carbonAds.custom?(w(),h(x(o),{key:"custom"+x(v).relativePath,code:x(d).carbonAds.custom,placement:x(d).carbonAds.placement},null,8,["code","placement"])):k("v-if",!0)]))])),_:1}))],2),f(l)],64)}}});const Pt={class:"theme"},Dt=f("h1",null,"404",-1);const Wt={Layout:Ot,NotFound:r({expose:[],setup(e){const t=["There's nothing here.","How did we get here?","That's a Four-Oh-Four.","Looks like we've got some broken links."];return(e,n)=>(w(),h("div",Pt,[Dt,f("blockquote",null,v(t[Math.floor(Math.random()*t.length)]),1),f("a",{href:e.$site.base,"aria-label":"go to home"},"Take me home.",8,["href"])]))}})},zt=new Set,Ft=()=>document.createElement("link");let Vt;const Nt=q&&(Vt=Ft())&&Vt.relList&&Vt.relList.supports&&Vt.relList.supports("prefetch")?e=>{const t=Ft();t.rel="prefetch",t.href=e,document.head.appendChild(t)}:e=>{const t=new XMLHttpRequest;t.open("GET",e,t.withCredentials=!0),t.send()};const Kt=Wt.NotFound||(()=>"404 Not Found"),Gt={name:"VitePressApp",setup:()=>(function(){if(!q)return;if(!window.IntersectionObserver)return;let e;if((e=navigator.connection)&&(e.saveData||/2g/.test(e.effectiveType)))return;const t=window.requestIdleCallback||setTimeout;let n=null;const a=()=>{n&&n.disconnect(),n=new IntersectionObserver((e=>{e.forEach((e=>{if(e.isIntersecting){const t=e.target;n.unobserve(t);const{pathname:a}=t;if(!zt.has(a)){zt.add(a);const e=j(a);Nt(e)}}}))})),t((()=>{document.querySelectorAll("#app a").forEach((e=>{const{target:t,hostname:a,pathname:o}=e;"_blank"!==t&&a===location.hostname&&(o!==location.pathname?n.observe(e):zt.add(o))}))}))};c(a);const o=H();p((()=>o.path),a),S((()=>{n&&n.disconnect()}))}(),()=>l(Wt.Layout))};function Jt(){const e=function(){let e,s=q;return function(e,s){const r=t({path:"/",component:null,data:null}),l="undefined"!=typeof window;function i(e=(l?location.href:"/")){const t=new URL(e,"http://a.com");return t.pathname.endsWith("/")||t.pathname.endsWith(".html")||(t.pathname+=".html",e=t.pathname+t.search+t.hash),l&&(history.replaceState({scrollPosition:window.scrollY},document.title),history.pushState(null,"",e)),u(e)}let c=null;async function u(t,i=0){const u=new URL(t,"http://a.com"),d=c=u.pathname;try{let t=e(d);if("then"in t&&"function"==typeof t.then&&(t=await t),c===d){c=null;const{default:e,__pageData:s}=t;if(!e)throw new Error(`Invalid route component: ${e}`);r.path=d,r.component=n(e),r.data=a(JSON.parse(s)),l&&o((()=>{if(u.hash&&!i){const e=document.querySelector(decodeURIComponent(u.hash));if(e)return void M(e,u.hash)}window.scrollTo(0,i)}))}}catch(p){p.message.match(/fetch/)||console.error(p),c===d&&(c=null,r.path=d,r.component=s?n(s):null)}}return l&&(window.addEventListener("click",(e=>{const t=e.target.closest("a");if(t){const{href:n,protocol:a,hostname:o,pathname:s,hash:r,target:l}=t,c=window.location;e.ctrlKey||e.shiftKey||e.altKey||e.metaKey||"_blank"===l||a!==c.protocol||o!==c.hostname||(e.preventDefault(),s===c.pathname?r&&r!==c.hash&&(history.pushState(null,"",r),M(t,r,t.classList.contains("header-anchor"))):i(n))}}),{capture:!0}),window.addEventListener("popstate",(e=>{u(location.href,e.state&&e.state.scrollPosition||0)})),window.addEventListener("hashchange",(e=>{e.preventDefault()}))),{route:r,go:i}}((t=>{let n=j(t);return s&&(e=n),(s||e===n)&&(n=n.replace(/\.js$/,".lean.js")),q?(s=!1,__import__(n)):require(n)}),Kt)}(),s=T(Gt);s.provide(B,e);const r=K(e.route),l=G(e.route);return q&&J(e.route,r),function(e,t,n,a){Object.defineProperties(e.config.globalProperties,{$site:{get:()=>t.value},$siteByRoute:{get:()=>n.value},$themeConfig:{get:()=>n.value.themeConfig},$page:{get:()=>a.value},$frontmatter:{get:()=>a.value.frontmatter},$title:{get:()=>a.value.title?a.value.title+" | "+n.value.title:n.value.title},$description:{get:()=>a.value.description||n.value.description},$withBase:{value:e=>U(t.value.base,e)}})}(s,D,r,l),function(e){e.component("Content",O),e.component("ClientOnly",P),e.component("Debug",(()=>null))}(s),Wt.enhanceApp&&Wt.enhanceApp({app:s,router:e,siteData:D}),{app:s,router:e}}if(q){const{app:e,router:t}=Jt();t.go().then((()=>{e.mount("#app")}))}export{xe as _,K as a,Jt as createApp,G as u};
