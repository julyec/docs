import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-c17653d8.js";const p={},t=e(`<h1 id="详情字段显示扩展" tabindex="-1"><a class="header-anchor" href="#详情字段显示扩展" aria-hidden="true">#</a> 详情字段显示扩展</h1><p>这个功能用来扩展详情字段显示, 在内置的显示方法不满足需求的情况下，可以使用这个功能来实现</p><p>首先定义扩展类：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Extensions<span class="token punctuation">\\</span>Show</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Show<span class="token punctuation">\\</span>AbstractField</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">UnSerialize</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractField</span>
<span class="token punctuation">{</span>
    <span class="token comment">// 这个属性设置为false则不会转义HTML代码</span>
    <span class="token keyword">public</span> <span class="token variable">$escape</span> <span class="token operator">=</span> <span class="token constant boolean">false</span><span class="token punctuation">;</span>
    
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">render</span><span class="token punctuation">(</span><span class="token variable">$arg</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 返回任意可被渲染的内容</span>
        <span class="token keyword">return</span> <span class="token function">unserialize</span><span class="token punctuation">(</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">value</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后在<code>app/Admin/bootstrap.php</code>中注册扩展类</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Show<span class="token punctuation">\\</span>Field</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Extensions<span class="token punctuation">\\</span>Show<span class="token punctuation">\\</span>UnSerialize</span><span class="token punctuation">;</span>

<span class="token class-name static-context">Field</span><span class="token operator">::</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;unserialize&#39;</span><span class="token punctuation">,</span> <span class="token class-name static-context">UnSerialize</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后在控制器中使用这个扩展</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$show</span><span class="token operator">-&gt;</span><span class="token function">column</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">unserialize</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;xxx&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>传入unserialize()方法的参数会按顺序传入UnSerialize::render()方法中。</p><p>在父类<code>Dcat\\Admin\\Show\\AbstractField</code>中可以看到几个常用的属性</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token doc-comment comment">/**
 * Field value.
 *
 * <span class="token keyword">@var</span> <span class="token class-name"><span class="token keyword">mixed</span></span>
 */</span>
<span class="token keyword">protected</span> <span class="token variable">$value</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * Current field model.
 *
 * <span class="token keyword">@var</span> <span class="token class-name">Fluent</span>
 */</span>
<span class="token keyword">protected</span> <span class="token variable">$model</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * If this field show with a border.
 *
 * <span class="token keyword">@var</span> <span class="token class-name"><span class="token keyword">bool</span></span>
 */</span>
<span class="token keyword">public</span> <span class="token variable">$border</span> <span class="token operator">=</span> <span class="token constant boolean">true</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * If this field show escaped contents.
 *
 * <span class="token keyword">@var</span> <span class="token class-name"><span class="token keyword">bool</span></span>
 */</span>
<span class="token keyword">public</span> <span class="token variable">$escape</span> <span class="token operator">=</span> <span class="token constant boolean">true</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中<code>$value</code>和<code>$model</code>分别是当前字段值和当前详情内容的数据，在<code>render()</code>方法中可以用来获取你想要的数据。</p><p><code>$border</code>用来控制当前显示内容是否需要外边框，<code>$escape</code>分别用来设置当前显示内容要不要HTML转义。</p>`,13),c=[t];function l(i,o){return s(),a("div",null,c)}const u=n(p,[["render",l],["__file","model-show-extend.html.vue"]]);export{u as default};
