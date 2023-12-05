import{r as s,c as a,e as l,t as n,q as o,v as p,M as e,G as t,N as c,a as r,o as D}from"./chunks/framework.ee9e66be.js";const F=r("",11),y={class:"demo"},i=r("",6),d={class:"demo"},u=l("span",null,"Multiline message is:",-1),C={style:{"white-space":"pre-line"}},A=r("",7),g={class:"demo"},h={for:"checkbox-demo"},m=r("",6),v={class:"demo"},b=l("label",{for:"demo-jack"},"Jack",-1),q=l("label",{for:"demo-john"},"John",-1),E=l("label",{for:"demo-mike"},"Mike",-1),k=r("",5),f={class:"demo"},x=l("label",{for:"one"},"One",-1),_=l("label",{for:"two"},"Two",-1),j=r("",5),T={class:"demo"},P=[l("option",{disabled:"",value:""},"Please select one",-1),l("option",null,"A",-1),l("option",null,"B",-1),l("option",null,"C",-1)],w=r("",5),S={class:"demo"},N=[l("option",null,"A",-1),l("option",null,"B",-1),l("option",null,"C",-1)],V=r("",38),M=JSON.parse('{"title":"表单输入绑定","description":"","frontmatter":{"outline":"deep"},"headers":[{"level":2,"title":"基本用法","slug":"basic-usage","link":"#basic-usage","children":[{"level":3,"title":"文本","slug":"text","link":"#text","children":[]},{"level":3,"title":"多行文本","slug":"multiline-text","link":"#multiline-text","children":[]},{"level":3,"title":"复选框","slug":"checkbox","link":"#checkbox","children":[]},{"level":3,"title":"单选按钮","slug":"radio","link":"#radio","children":[]},{"level":3,"title":"选择器","slug":"select","link":"#select","children":[]}]},{"level":2,"title":"值绑定","slug":"value-bindings","link":"#value-bindings","children":[{"level":3,"title":"复选框","slug":"checkbox-1","link":"#checkbox-1","children":[]},{"level":3,"title":"单选按钮","slug":"radio-1","link":"#radio-1","children":[]},{"level":3,"title":"选择器选项","slug":"select-options-2","link":"#select-options-2","children":[]}]},{"level":2,"title":"修饰符","slug":"modifiers","link":"#modifiers","children":[{"level":3,"title":".lazy","slug":"lazy","link":"#lazy","children":[]},{"level":3,"title":".number","slug":"number","link":"#number","children":[]},{"level":3,"title":".trim","slug":"trim","link":"#trim","children":[]}]},{"level":2,"title":"组件上的 v-model","slug":"v-model-with-components","link":"#v-model-with-components","children":[]}],"relativePath":"guide/essentials/forms.md","filePath":"guide/essentials/forms.md"}'),B={name:"guide/essentials/forms.md"},R=Object.assign(B,{setup(r){const M=s(""),B=s(""),R=s(!1),J=s([]),I=s(""),O=s(""),H=s([]);return(s,r)=>(D(),a("div",null,[F,l("div",y,[l("p",null,"Message is: "+n(M.value),1),o(l("input",{"onUpdate:modelValue":r[0]||(r[0]=s=>M.value=s),placeholder:"edit me"},null,512),[[p,M.value]])]),i,l("div",d,[u,l("p",C,n(B.value),1),o(l("textarea",{"onUpdate:modelValue":r[1]||(r[1]=s=>B.value=s),placeholder:"add multiple lines"},null,512),[[p,B.value]])]),A,l("div",g,[o(l("input",{type:"checkbox",id:"checkbox-demo","onUpdate:modelValue":r[2]||(r[2]=s=>R.value=s)},null,512),[[e,R.value]]),l("label",h,n(R.value),1)]),m,l("div",v,[l("div",null,"Checked names: "+n(J.value),1),o(l("input",{type:"checkbox",id:"demo-jack",value:"Jack","onUpdate:modelValue":r[3]||(r[3]=s=>J.value=s)},null,512),[[e,J.value]]),b,o(l("input",{type:"checkbox",id:"demo-john",value:"John","onUpdate:modelValue":r[4]||(r[4]=s=>J.value=s)},null,512),[[e,J.value]]),q,o(l("input",{type:"checkbox",id:"demo-mike",value:"Mike","onUpdate:modelValue":r[5]||(r[5]=s=>J.value=s)},null,512),[[e,J.value]]),E]),k,l("div",f,[l("div",null,"Picked: "+n(I.value),1),o(l("input",{type:"radio",id:"one",value:"One","onUpdate:modelValue":r[6]||(r[6]=s=>I.value=s)},null,512),[[t,I.value]]),x,o(l("input",{type:"radio",id:"two",value:"Two","onUpdate:modelValue":r[7]||(r[7]=s=>I.value=s)},null,512),[[t,I.value]]),_]),j,l("div",T,[l("div",null,"Selected: "+n(O.value),1),o(l("select",{"onUpdate:modelValue":r[8]||(r[8]=s=>O.value=s)},P,512),[[c,O.value]])]),w,l("div",S,[l("div",null,"Selected: "+n(H.value),1),o(l("select",{"onUpdate:modelValue":r[9]||(r[9]=s=>H.value=s),multiple:""},N,512),[[c,H.value]])]),V]))}});export{M as __pageData,R as default};
