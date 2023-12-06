import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-c17653d8.js";const t={},p=e(`<h1 id="detail-field-display-expansion" tabindex="-1"><a class="header-anchor" href="#detail-field-display-expansion" aria-hidden="true">#</a> Detail field display expansion</h1><p>This feature is used to extend the detail field display, in cases where the built-in display method is not sufficient.</p><p>First define the extension class:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Extensions<span class="token punctuation">\\</span>Show</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Show<span class="token punctuation">\\</span>AbstractField</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">UnSerialize</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractField</span>
<span class="token punctuation">{</span>
    <span class="token comment">// Setting this property to false will not escape the HTML code</span>
    <span class="token keyword">public</span> <span class="token variable">$escape</span> <span class="token operator">=</span> <span class="token constant boolean">false</span><span class="token punctuation">;</span>
    
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">render</span><span class="token punctuation">(</span><span class="token variable">$arg</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// Returns any content that can be rendered</span>
        <span class="token keyword">return</span> <span class="token function">unserialize</span><span class="token punctuation">(</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">value</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then register the extension class in <code>app/Admin/bootstrap.php</code></p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Show<span class="token punctuation">\\</span>Field</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Extensions<span class="token punctuation">\\</span>Show<span class="token punctuation">\\</span>UnSerialize</span><span class="token punctuation">;</span>

<span class="token class-name static-context">Field</span><span class="token operator">::</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;unserialize&#39;</span><span class="token punctuation">,</span> <span class="token class-name static-context">UnSerialize</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then use this extension in the controller</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$show</span><span class="token operator">-&gt;</span><span class="token function">column</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">unserialize</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;xxx&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Parameters passed into the unserialize() method are passed sequentially into the UnSerialize::render() method.</p><p>Several common attributes can be found in the parent class <code>Dcat\\Admin\\Show\\AbstractField</code></p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token doc-comment comment">/**
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Where <code>$value</code> and <code>$model</code> are the current field value and the current details of the data, in the <code>render()</code> method can be used to get the data you want.</p><p><code>$border</code> is used to control whether the current display needs a border, <code>$escape</code> is used to set the current display to not HTML escape.</p>`,13),i=[p];function l(o,c){return s(),a("div",null,i)}const u=n(t,[["render",l],["__file","model-show-extend.html.vue"]]);export{u as default};
