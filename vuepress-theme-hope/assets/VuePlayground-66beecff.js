import{i as _,l as f,q as m,s,u as y,v as g,x as R,y as a,C as w,_ as n}from"./app-083c2955.js";const S=e=>JSON.parse(decodeURIComponent(e));var h=_({name:"VuePlayground",props:{title:{type:String,default:""},files:{type:String,required:!0},settings:{type:String,default:"{}"}},setup(e){const r=f(),u=m(!0),t=s(),l=s(),i=s(),o=y(()=>g({},r,S(e.settings))),d=async()=>{const[{ReplStore:v,Repl:p},{default:c}]=await Promise.all([n(()=>import("./vue-repl-6c242236.js"),["assets/vue-repl-6c242236.js","assets/app-083c2955.js","assets/utils-5585d0be-60357f83.js"]),n(()=>import("./codemirror-editor-22ab2425.js"),["assets/codemirror-editor-22ab2425.js","assets/utils-5585d0be-60357f83.js","assets/app-083c2955.js"])]);t.value=p,i.value=c,l.value=new v({serializedState:decodeURIComponent(e.files)}),o.value.vueVersion&&await l.value.setVueVersion(o.value.vueVersion)};return R(async()=>{await d(),u.value=!1}),()=>[a("div",{class:"vue-playground-wrapper"},[e.title?a("div",{class:"header"},decodeURIComponent(e.title)):null,a("div",{class:"repl-container"},[u.value?a(w,{class:"preview-loading",height:192}):null,t.value?a(t.value,{editor:i.value,store:l.value,autoResize:!0,...o.value,layout:"horizontal"}):null])])]}});export{h as default};
