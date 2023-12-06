import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-c17653d8.js";const o={},t=e(`<h1 id="数据详情初始化" tabindex="-1"><a class="header-anchor" href="#数据详情初始化" aria-hidden="true">#</a> 数据详情初始化</h1><p>通过<code>Show::resolving</code>方法设置的回调函数会在<code>Dcat\\Admin\\Show</code>类被实例化时触发；</p><p>通过<code>Show::composing</code>方法设置的回调函数会在<code>render()</code>方法被调用时触发；</p><p>开发者可以在这两个事件中改变<code>Show</code>的一些设置或行为，比如需要禁用掉某些操作，可以在<code>app/Admin/bootstrap.php</code>加入下面的代码：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Show</span><span class="token punctuation">;</span>

<span class="token class-name static-context">Show</span><span class="token operator">::</span><span class="token function">resolving</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">Show</span> <span class="token variable">$show</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

     <span class="token variable">$show</span><span class="token operator">-&gt;</span><span class="token function">showQuickEdit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),c=[t];function p(i,l){return s(),a("div",null,c)}const r=n(o,[["render",p],["__file","model-show-init.html.vue"]]);export{r as default};
