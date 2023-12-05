import{i as o,r as a,o as t,c as n,a as c,e as r,b as l,f as i}from"./app-d630ecd8.js";import{_ as d}from"./plugin-vue_export-helper-c27b6911.js";const p=l("p",null,"The theme allows you to customize theme color and even provide a picker.",-1),h=i(`<h2 id="setting-default-theme-color" tabindex="-1"><a class="header-anchor" href="#setting-default-theme-color" aria-hidden="true">#</a> Setting Default Theme Color</h2><p>You should set the default theme color of your site in <code>.vuepress/styles/palette.scss</code> through <code>$theme-color</code>:</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$theme-color</span></span><span class="token punctuation">:</span> #f00<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="theme-color-picker-title" tabindex="-1"><a class="header-anchor" href="#theme-color-picker-title" aria-hidden="true">#</a> Theme Color Picker</h2><p>You should set a list of theme colors you want to use in <code>.vuepress/styles/config.scss</code> with <code>$theme-colors</code>:</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$theme-colors</span></span><span class="token punctuation">:</span> #2196f3<span class="token punctuation">,</span> #f26d6d<span class="token punctuation">,</span> #3eaf7c<span class="token punctuation">,</span> #fb9b5f<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="try-it" tabindex="-1"><a class="header-anchor" href="#try-it" aria-hidden="true">#</a> Try it</h3>`,7),u=o({__name:"theme-color.html",setup(m){return(e,f)=>{const s=a("ThemeColorPicker");return t(),n("div",null,[p,c(" more "),h,r(s,{themeColor:e.themeColor},null,8,["themeColor"])])}}}),_=d(u,[["__file","theme-color.html.vue"]]);export{_ as default};
