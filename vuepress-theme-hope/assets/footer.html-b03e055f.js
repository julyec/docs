import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o,c as l,b as e,d as a,e as c,a as i,f as r}from"./app-d630ecd8.js";const d={},p=e("code",null,"vuepress-theme-hope",-1),u=r(`<h2 id="全局配置" tabindex="-1"><a class="header-anchor" href="#全局配置" aria-hidden="true">#</a> 全局配置</h2><p>在主题选项中，<code>footer</code> 字段用于全局配置页脚。你可以在主题选项中设置 <code>footer</code> 和 <code>copyright</code> 全局设置默认的页脚内容与版权信息。</p><p>默认情况下页脚不会显示在页面中。如果希望每个页面都显示页脚，需要在主题选项中设置 <code>displayFooter: true</code>。</p><div class="hint-container info"><p class="hint-container-title">多语言配置支持</p><p>你可以在主题选项中通过 <code>locales</code> 为每个语言分别设置页脚。</p></div><h2 id="页面配置" tabindex="-1"><a class="header-anchor" href="#页面配置" aria-hidden="true">#</a> 页面配置</h2><p>你可以在页面的 frontmatter 中配置 <code>footer</code>，<code>copyright</code> 字段，指定特定页面的页脚内容。</p><h3 id="footer" tabindex="-1"><a class="header-anchor" href="#footer" aria-hidden="true">#</a> footer</h3><ul><li><p>当 <code>displayFooter: true</code> 时，你可以在 frontmatter 中将 <code>footer</code> 设置为 <code>false</code> 来禁用特定页面的页脚。</p></li><li><p>当全局显示页脚未开启时，将 <code>footer</code> 设置为 <code>true</code> 会显示默认的页脚文字。</p></li><li><p>如果你填入一个字符串，它会以 <code>v-html</code> 指令的形式插入到页脚的位置作为页脚的内容，所以你可以填入 HTMLString。</p></li></ul><h3 id="copyright" tabindex="-1"><a class="header-anchor" href="#copyright" aria-hidden="true">#</a> copyright</h3><p><code>copyright</code> 字段用于设置特定页面的版权信息，它同样也支持 HTMLString (当你引用了文章且文章使用了特定许可的情况下很有用)。</p><p>当然在 <code>displayFooter: true</code> 时，你也可以填入 <code>false</code> 来隐藏特定页面的版权信息。</p><h2 id="例子" tabindex="-1"><a class="header-anchor" href="#例子" aria-hidden="true">#</a> 例子</h2><ul><li><p>显示默认的页脚文字:</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">footer</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>
<span class="token punctuation">---</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>自定义页脚文字，同时不显示版权信息:</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">footer</span><span class="token punctuation">:</span> This site is served by GitHub Pages
<span class="token key atrule">copyright</span><span class="token punctuation">:</span> <span class="token boolean important">false</span></span>
<span class="token punctuation">---</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>自定义页脚的内容和版权信息:</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">footer</span><span class="token punctuation">:</span> &lt;a href=&quot;https<span class="token punctuation">:</span>//github.com/Mister<span class="token punctuation">-</span>Hope&quot;<span class="token punctuation">&gt;</span>Mr.Hope&lt;/a<span class="token punctuation">&gt;</span>
<span class="token key atrule">copyrightText</span><span class="token punctuation">:</span> MIT LICENSE</span>
<span class="token punctuation">---</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>当你在主题选项中设置 <code>displayFooter: true</code> 时，你还可以局部禁用它:</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">footer</span><span class="token punctuation">:</span> <span class="token boolean important">false</span></span>
<span class="token punctuation">---</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>如果你希望移除默认的 footer 内容同时保持版权信息显示，请传入一个空字符串:</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">footer</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span></span>
<span class="token punctuation">---</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul>`,13);function m(k,v){const n=t("Badge");return o(),l("div",null,[e("p",null,[p,a(" 为所有页面提供了页脚功能 "),c(n,{text:"支持页面配置"}),a("。")]),i(" more "),u])}const g=s(d,[["render",m],["__file","footer.html.vue"]]);export{g as default};