import{r as s,o as a,c as l,e as n,t as e,F as p,q as o,v as t,E as c,G as i,d as r,i as D,B as F,K as y,j as d,a as u}from"./chunks/framework.ee9e66be.js";const A=n("p",null,"Current component: A",-1),C={style:{"margin-right":"20px"}},v={__name:"CompA",setup(o){const t=s(0);return(s,o)=>(a(),l(p,null,[A,n("span",C,"count: "+e(t.value),1),n("button",{onClick:o[0]||(o[0]=s=>t.value++)},"+")],64))}},m=n("p",null,"Current component: B",-1),h={style:{"margin-right":"20px"}},g={__name:"CompB",setup(c){const i=s("");return(s,c)=>(a(),l(p,null,[m,n("span",h,"Message is: "+e(i.value),1),o(n("input",{"onUpdate:modelValue":c[0]||(c[0]=s=>i.value=s)},null,512),[[t,i.value]])],64))}},f={class:"demo"},b={__name:"SwitchComponent",props:{useKeepAlive:Boolean},setup(s){const e=c(v);return(p,t)=>(a(),l("div",f,[n("label",null,[o(n("input",{type:"radio","onUpdate:modelValue":t[0]||(t[0]=s=>e.value=s),value:v},null,512),[[i,e.value]]),r(" A")]),n("label",null,[o(n("input",{type:"radio","onUpdate:modelValue":t[1]||(t[1]=s=>e.value=s),value:g},null,512),[[i,e.value]]),r(" B")]),s.useKeepAlive?(a(),D(y,{key:0},[(a(),D(F(e.value)))],1024)):(a(),D(F(e.value),{key:1}))]))}},E=u("",7),k=u("",4),_=u("",20),q=JSON.parse('{"title":"KeepAlive","description":"","frontmatter":{},"headers":[{"level":2,"title":"基本使用","slug":"basic-usage","link":"#basic-usage","children":[]},{"level":2,"title":"包含/排除","slug":"include-exclude","link":"#include-exclude","children":[]},{"level":2,"title":"最大缓存实例数","slug":"max-cached-instances","link":"#max-cached-instances","children":[]},{"level":2,"title":"缓存实例的生命周期","slug":"lifecycle-of-cached-instance","link":"#lifecycle-of-cached-instance","children":[]}],"relativePath":"guide/built-ins/keep-alive.md","filePath":"guide/built-ins/keep-alive.md"}'),B={name:"guide/built-ins/keep-alive.md"},K=Object.assign(B,{setup:s=>(s,n)=>(a(),l("div",null,[E,d(b),k,d(b,{"use-KeepAlive":""}),_]))});export{q as __pageData,K as default};
