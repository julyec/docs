import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as t}from"./app-c17653d8.js";const p={},e=t(`<h1 id="选项卡" tabindex="-1"><a class="header-anchor" href="#选项卡" aria-hidden="true">#</a> 选项卡</h1><p>通过<code>Dcat\\Admin\\Widgets\\Tab</code>方法可以快速构建<code>tab</code>选项卡。</p><h3 id="基本用法" tabindex="-1"><a class="header-anchor" href="#基本用法" aria-hidden="true">#</a> 基本用法</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Widgets<span class="token punctuation">\\</span>Tab</span><span class="token punctuation">;</span>

<span class="token variable">$tab</span> <span class="token operator">=</span> <span class="token class-name static-context">Tab</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 第一个参数是选项卡标题，第二个参数是内容，第三个参数是是否选中</span>
<span class="token variable">$tab</span><span class="token operator">-&gt;</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;选项卡1&#39;</span><span class="token punctuation">,</span> <span class="token function">view</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;...&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token constant boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$tab</span><span class="token operator">-&gt;</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;选项2&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;html&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 添加选项卡链接</span>
<span class="token variable">$tab</span><span class="token operator">-&gt;</span><span class="token function">addLink</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;跳转链接&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;http://xxx&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">return</span> <span class="token variable">$content</span><span class="token operator">-&gt;</span><span class="token function">body</span><span class="token punctuation">(</span><span class="token variable">$tab</span><span class="token operator">-&gt;</span><span class="token function">withCard</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="切换显示模式" tabindex="-1"><a class="header-anchor" href="#切换显示模式" aria-hidden="true">#</a> 切换显示模式</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment">// 主题色</span>
<span class="token variable">$tab</span> <span class="token operator">=</span> <span class="token class-name static-context">Tab</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">theme</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="垂直-vertical" tabindex="-1"><a class="header-anchor" href="#垂直-vertical" aria-hidden="true">#</a> 垂直 (vertical)</h3><p>通过<code>vertical</code>方法可以让选项卡标题栏呈垂直排列。</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Widgets<span class="token punctuation">\\</span>Tab</span><span class="token punctuation">;</span>

<span class="token variable">$tab</span> <span class="token operator">=</span> <span class="token class-name static-context">Tab</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">$tab</span><span class="token operator">-&gt;</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;选项卡1&#39;</span><span class="token punctuation">,</span> <span class="token function">view</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;...&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$tab</span><span class="token operator">-&gt;</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;选项2&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;html&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">return</span> <span class="token variable">$content</span><span class="token operator">-&gt;</span><span class="token function">body</span><span class="token punctuation">(</span><span class="token variable">$tab</span><span class="token operator">-&gt;</span><span class="token function">withCard</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">vertical</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),o=[e];function c(i,l){return s(),a("div",null,o)}const d=n(p,[["render",c],["__file","widgets-tab.html.vue"]]);export{d as default};
