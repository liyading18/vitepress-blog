import{u as e,a,_ as t}from"./app.86005033.js";import{c as s,d as l,u as o,l as i,f as r,g as n,q as c,t as f,j as v,p as u,k as d,F as m,x as p,y as k}from"./framework.ec9dd1f1.js";function h(){const a=e();return s((()=>a.value.frontmatter))}const x=v("data-v-7f697f38");u("data-v-7f697f38");const y={key:0,class:"home-hero"},g={key:0,class:"figure"},$={key:1,class:"title"},_={key:2,class:"description"};d();var I=l({expose:[],setup(e){const l=a(),v=h(),u=s((()=>v.value.heroImage||d.value||p.value||I.value)),d=s((()=>null!==v.value.heroText)),m=s((()=>v.value.heroText||l.value.title)),p=s((()=>null!==v.value.tagline)),k=s((()=>v.value.tagline||l.value.description)),I=s((()=>v.value.actionLink&&v.value.actionText)),T=s((()=>v.value.altActionLink&&v.value.altActionText));return x(((e,a)=>o(u)?(i(),r("header",y,[e.$frontmatter.heroImage?(i(),r("figure",g,[n("img",{class:"image",src:e.$withBase(e.$frontmatter.heroImage),alt:e.$frontmatter.heroAlt},null,8,["src","alt"])])):c("v-if",!0),o(d)?(i(),r("h1",$,f(o(m)),1)):c("v-if",!0),o(p)?(i(),r("p",_,f(o(k)),1)):c("v-if",!0),o(I)?(i(),r(t,{key:3,item:{link:o(v).actionLink,text:o(v).actionText},class:"action"},null,8,["item"])):c("v-if",!0),o(T)?(i(),r(t,{key:4,item:{link:o(v).altActionLink,text:o(v).altActionText},class:"action alt"},null,8,["item"])):c("v-if",!0)])):c("v-if",!0)))}});I.__scopeId="data-v-7f697f38";const T=v("data-v-e5f225ce");u("data-v-e5f225ce");const b={key:0,class:"home-features"},A={class:"wrapper"},L={class:"container"},j={class:"features"},w={key:0,class:"title"},q={key:1,class:"details"};d();var B=l({expose:[],setup(e){const a=h(),t=s((()=>a.value.features&&a.value.features.length>0)),l=s((()=>a.value.features?a.value.features:[]));return T(((e,a)=>o(t)?(i(),r("div",b,[n("div",A,[n("div",L,[n("div",j,[(i(!0),r(m,null,p(o(l),((e,a)=>(i(),r("section",{key:a,class:"feature"},[e.title?(i(),r("h2",w,f(e.title),1)):c("v-if",!0),e.details?(i(),r("p",q,f(e.details),1)):c("v-if",!0)])))),128))])])])])):c("v-if",!0)))}});B.__scopeId="data-v-e5f225ce";const F={},z=v("data-v-df8b2502");u("data-v-df8b2502");const C={key:0,class:"footer"},D={class:"container"},E={class:"text"};d();const G=z(((e,a)=>e.$frontmatter.footer?(i(),r("footer",C,[n("div",D,[n("p",E,f(e.$frontmatter.footer),1)])])):c("v-if",!0)));F.render=G,F.__scopeId="data-v-df8b2502";const H=v("data-v-24d7e9f0");u("data-v-24d7e9f0");const J={class:"home","aria-labelledby":"main-title"};d();var K=l({expose:[],setup:e=>H(((e,a)=>(i(),r("main",J,[n(I),k(e.$slots,"hero"),n(B),k(e.$slots,"features"),n(F),k(e.$slots,"footer")]))))});K.__scopeId="data-v-24d7e9f0";export default K;
