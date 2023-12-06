import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as t,c as p,b as n,d as s,e as c,w as i,a as l,f as r}from"./app-083c2955.js";const d={},u=n("p",null,"如果你是一个程序员，你可能希望你的用户能够一键复制你在正文中展示的代码。",-1),m=n("code",null,"vuepress-theme-hope",-1),k=n("div",{class:"hint-container info"},[n("p",{class:"hint-container-title"},"相关信息"),n("p",null,[n("code",null,"vuepress-theme-hope"),s(" 将主题选项中的 "),n("code",null,"plugins.copyCode"),s(" 选项作为插件选项提供给 "),n("code",null,"vuepress-plugin-copy-code2"),s("。")])],-1),h=r(`<h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><p>启用后，此插件会自动添加复制按钮到每个代码块的右上角。</p><p>默认情况下，按钮仅在桌面模式显示，如果你需要在移动端展示这个按钮，请在主题选项中设置 <code>plugins.copyCode.showInMobile: true</code>。</p><p>在用户点击复制按钮后，屏幕上会显示一个复制成功的提示。默认的提示时长为 2000ms，如果你需要更改这个时长，请在主题选项中设置 <code>plugins.copyCode.duration</code> (单位 ms)，如果你不需要这个提示，请设置 <code>duration</code> 设为 <code>0</code>。</p><h2 id="效果" tabindex="-1"><a class="header-anchor" href="#效果" aria-hidden="true">#</a> 效果</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// .vuepress/config.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> hopeTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress-theme-hope&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">hopeTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">copyCode</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function v(_,y){const e=o("ProjectLink");return t(),p("div",null,[u,n("p",null,[s("针对这一情况，"),m,s(" 内置了 "),c(e,{name:"copy-code2",path:"/zh/"},{default:i(()=>[s("vuepress-plugin-copy-code2")]),_:1}),s("，提供了一个复制按钮。")]),k,l(" more "),h])}const g=a(d,[["render",v],["__file","copy-code.html.vue"]]);export{g as default};
