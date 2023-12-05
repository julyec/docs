import{l as e,d as a,b as s}from"./chunks/sponsors.63bbaa33.js";import{g as o,r,b as l,y as n,o as i,c as t,u,F as c,l as p,e as d,k as g,A as h,_ as v,j as m,a as b,d as f}from"./chunks/framework.ee9e66be.js";const k=["href"],j={key:0},_=["srcset"],V=["src","alt"],x=["src","alt"],P=v(o({__name:"SponsorsGroup",props:{tier:{},placement:{default:"aside"}},setup(o){const v=o,m=r(),b=r(!1);l((async()=>{const a=new IntersectionObserver((e=>{e[0].isIntersecting&&(b.value=!0,a.disconnect())}),{rootMargin:"0px 0px 300px 0px"});a.observe(m.value),n((()=>a.disconnect())),await e()}));const f={aside:"4QUPDDRU",landing:"58FLAR2Z",page:"ZXLO3IUT"};function P(e){fathom.trackGoal(e?"Y2BVYNT2":f[v.placement],0)}return(e,o)=>(i(),t("div",{ref_key:"container",ref:m,class:h(["sponsor-container",["platinum_china"===e.tier?"special":e.tier,e.placement]])},[u(a)&&b.value?(i(!0),t(c,{key:0},p(u(a)[e.tier],(({url:e,img:a,name:r})=>(i(),t("a",{class:"sponsor-item",href:e,target:"_blank",rel:"sponsored noopener",onClick:o[0]||(o[0]=e=>P())},[a.endsWith("png")?(i(),t("picture",j,[d("source",{type:"image/avif",srcset:`${u(s)}/images/${a.replace(/\.png$/,".avif")}`},null,8,_),d("img",{src:`${u(s)}/images/${a}`,alt:r},null,8,V)])):(i(),t("img",{key:1,src:`${u(s)}/images/${a}`,alt:r},null,8,x))],8,k)))),256)):g("",!0),"page"!==e.placement&&"special"!==e.tier?(i(),t("a",{key:1,href:"/sponsor/",class:"sponsor-item action",onClick:o[1]||(o[1]=e=>P(!0))},"成为赞助商")):g("",!0)],2))}}),[["__scopeId","data-v-5ef59965"]]),q=b("",26),A=d("h3",{id:"platinum",tabindex:"-1"},[f("铂金赞助商 "),d("a",{class:"header-anchor",href:"#platinum","aria-label":'Permalink to "铂金赞助商 {#platinum}"'},"​")],-1),E=d("h3",{id:"platinum-china",tabindex:"-1"},[f("铂金赞助商 (中国区) "),d("a",{class:"header-anchor",href:"#platinum-china","aria-label":'Permalink to "铂金赞助商 (中国区) {#platinum-china}"'},"​")],-1),y=d("h3",{id:"gold",tabindex:"-1"},[f("金牌赞助商 "),d("a",{class:"header-anchor",href:"#gold","aria-label":'Permalink to "金牌赞助商 {#gold}"'},"​")],-1),R=d("h3",{id:"silver",tabindex:"-1"},[f("银牌赞助商 "),d("a",{class:"header-anchor",href:"#silver","aria-label":'Permalink to "银牌赞助商 {#silver}"'},"​")],-1),S=JSON.parse('{"title":"成为 Vue.js 的赞助者","description":"","frontmatter":{"sidebar":false,"ads":false,"editLink":false,"sponsors":false},"headers":[{"level":2,"title":"中国区赞助渠道","slug":"中国区赞助渠道","link":"#中国区赞助渠道","children":[]},{"level":2,"title":"国际站赞助","slug":"how-to-sponsor","link":"#how-to-sponsor","children":[]},{"level":2,"title":"以企业名义赞助 Vue","slug":"sponsoring-vue-as-a-business","link":"#sponsoring-vue-as-a-business","children":[]},{"level":2,"title":"以个人名义赞助 Vue","slug":"sponsoring-vue-as-an-individual","link":"#sponsoring-vue-as-an-individual","children":[]},{"level":2,"title":"赞助等级","slug":"tier-benefits","link":"#tier-benefits","children":[]},{"level":2,"title":"当前赞助商","slug":"current-sponsors","link":"#current-sponsors","children":[{"level":3,"title":"全球特别赞助商","slug":"special-global-sponsor","link":"#special-global-sponsor","children":[]},{"level":3,"title":"铂金赞助商","slug":"platinum","link":"#platinum","children":[]},{"level":3,"title":"铂金赞助商 (中国区)","slug":"platinum-china","link":"#platinum-china","children":[]},{"level":3,"title":"金牌赞助商","slug":"gold","link":"#gold","children":[]},{"level":3,"title":"银牌赞助商","slug":"silver","link":"#silver","children":[]}]}],"relativePath":"sponsor/index.md","filePath":"sponsor/index.md"}'),T={name:"sponsor/index.md"},C=Object.assign(T,{setup:e=>(e,a)=>(i(),t("div",null,[q,m(P,{tier:"special",placement:"page"}),A,m(P,{tier:"platinum",placement:"page"}),E,m(P,{tier:"platinum_china",placement:"page"}),y,m(P,{tier:"gold",placement:"page"}),R,m(P,{tier:"silver",placement:"page"})]))});export{S as __pageData,C as default};
