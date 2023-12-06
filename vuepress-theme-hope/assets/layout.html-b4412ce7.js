import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as d,c,a as r,b as t,d as e,e as s,w as n,f as a}from"./app-083c2955.js";const h={},u=t("p",null,"This tutorial guides you how to customize theme layout.",-1),p=t("h2",{id:"setting-theme-options",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#setting-theme-options","aria-hidden":"true"},"#"),e(" Setting Theme Options")],-1),m=a(`<h2 id="modify-scss-variables" tabindex="-1"><a class="header-anchor" href="#modify-scss-variables" aria-hidden="true">#</a> Modify SCSS Variables</h2><h3 id="theme-breakpoints" tabindex="-1"><a class="header-anchor" href="#theme-breakpoints" aria-hidden="true">#</a> Theme Breakpoints</h3><p>The theme will automatically apply responsive layouts under different screen widths. If you need to modify these breakpoints, you can modify them in the config file.</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// .vuepress/styles/config.scss</span>

<span class="token comment">// Modify the breakpoint of the desktop layout</span>
<span class="token variable">$pc</span> = 1280px<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),f=t("code",null,".vuepress/styles/config.scss",-1),y=t("code",null,"$pc",-1),v=t("code",null,"$laptop",-1),_=t("code",null,"$pad",-1),b=t("code",null,"$tablet",-1),g=t("code",null,"$mobile",-1),k=a(`<h3 id="theme-layout-size" tabindex="-1"><a class="header-anchor" href="#theme-layout-size" aria-hidden="true">#</a> Theme Layout Size</h3><p>The theme provides common size variables in the palette file, and you can modify these variables in the palette file to achieve the purpose of modifying the layout size.</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// .vuepress/styles/palette.scss</span>

<span class="token comment">// Modify the height of the navigation bar</span>
<span class="token variable">$navbar-height</span> = 80px<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),x=t("code",null,".vuepress/styles/palette.scss",-1),w=a('<h2 id="modify-other-layouts" tabindex="-1"><a class="header-anchor" href="#modify-other-layouts" aria-hidden="true">#</a> Modify Other Layouts</h2><p>If you want to change the theme layout, but the theme does not provide relevant options, you can consider the following methods:</p><h3 id="via-css" tabindex="-1"><a class="header-anchor" href="#via-css" aria-hidden="true">#</a> Via CSS</h3><ul><li><p>If you are not satisfied with the style of the theme, you can adjust the style of the theme components through the style file.</p><div class="hint-container note"><p class="hint-container-title">Note</p><p>In order to override the original style, you need to use the same or higher priority selector or use <code>!important</code> directly.</p></div></li><li><p>If you want to remove some features, you can hide related dom elements by <code>display: none</code> in the style file.</p></li></ul>',4),T={class:"hint-container note"},S=t("p",{class:"hint-container-title"},"Note",-1),C=t("code",null,".vuepress/styles/index.scss",-1),z=t("h3",{id:"by-overriding-components",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#by-overriding-components","aria-hidden":"true"},"#"),e(" By Overriding Components")],-1),N=t("p",null,"All theme components are registered and invoked through aliases, which means that you can replace any component of the theme with your own components by overriding component aliases.",-1),V=t("p",null,"If you just want to add new content at a specific position on the page, then you can replace the component and reference the original component through the slot of the original component.",-1);function $(I,B){const o=l("RouterLink");return d(),c("div",null,[u,r(" more "),p,t("p",null,[e("The theme provides many layout-related options for you to customize the layout of the theme. For details about these options, see "),s(o,{to:"/config/theme/layout.html"},{default:n(()=>[e("Theme Configuration → Layout")]),_:1}),e(".")]),m,t("p",null,[e("For details about the config file "),f,e(" and the breakpoint variables "),y,e(", "),v,e(", "),_,e(", "),b,e(", "),g,e(", see "),s(o,{to:"/config/style.html#configscss"},{default:n(()=>[e("Theme Configuration → Styles")]),_:1}),e(".")]),k,t("p",null,[e("The palette file "),x,e(" and the introduction of layout variables can be found at "),s(o,{to:"/config/style.html#palettescss"},{default:n(()=>[e("Theme Configuration → Style")]),_:1}),e(".")]),w,t("div",T,[S,t("p",null,[e("The style file is "),C,e(" in the project directory, see "),s(o,{to:"/config/style.html#indexscss"},{default:n(()=>[e("Theme Configuration → Style")]),_:1}),e(" for details")])]),z,N,V,t("p",null,[e("See "),s(o,{to:"/guide/advanced/replace.html"},{default:n(()=>[e("Advanced → Replace theme components")]),_:1}),e(" for component aliases, component slots and replacement methods.")])])}const j=i(h,[["render",$],["__file","layout.html.vue"]]);export{j as default};