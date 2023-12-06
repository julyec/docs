import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,a as t}from"./app-98225aba.js";const e={},p=t(`<h1 id="views-and-custom-pages" tabindex="-1"><a class="header-anchor" href="#views-and-custom-pages" aria-hidden="true">#</a> Views and custom pages</h1><h2 id="view" tabindex="-1"><a class="header-anchor" href="#view" aria-hidden="true">#</a> View</h2><p>In the <code>Dcat Admin</code> we can use the <code>admin_view</code> function to render the view, this function draws on the design ideas of <code>vue</code>, you can write <code>HTML</code>, <code>CSS</code> and <code>JS</code> code in the same template file, so that the code is more clear and more concise and easy to read layered code, such as</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>my-class<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
	<span class="token selector">.my-class</span> <span class="token punctuation">{</span>
		<span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">require</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>@test1,@test2<span class="token punctuation">&quot;</span></span> <span class="token attr-name">init</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>.my-class<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
	$<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">css</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token string">&#39;red&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Render the view in <code>php</code></p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">index</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Content</span> <span class="token variable">$content</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token variable">$content</span><span class="token operator">-&gt;</span><span class="token function">body</span><span class="token punctuation">(</span><span class="token function">admin_view</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;...&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="explanation-of-example" tabindex="-1"><a class="header-anchor" href="#explanation-of-example" aria-hidden="true">#</a> Explanation of Example</h4><p>The code in the above example is actually equivalent to the following code</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>my-class<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">index</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Content</span> <span class="token variable">$content</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token function">admin_require_assets</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;@test1&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;@test2&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	
	<span class="token function">admin_style</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;.my-class {
		color: blue;
	}&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	
	<span class="token function">admin_script</span><span class="token punctuation">(</span>
		<span class="token operator">&lt;&lt;</span><span class="token operator">&lt;</span><span class="token constant">JS</span>
Dcat<span class="token operator">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;.my-class&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>\\<span class="token variable">$this</span><span class="token punctuation">,</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	\\<span class="token variable">$this</span><span class="token operator">.</span><span class="token function">css</span><span class="token punctuation">(</span><span class="token punctuation">{</span>background<span class="token punctuation">:</span> <span class="token string single-quoted-string">&#39;red&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token constant">JS</span>
	<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">return</span> <span class="token variable">$content</span><span class="token operator">-&gt;</span><span class="token function">body</span><span class="token punctuation">(</span><span class="token function">view</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;...&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Obviously, using <code>admin_view</code> to render the view will make your code much easier to read. For <code>Dcat.init</code> and the use of the <code>init</code> and <code>require</code> attributes in the <code>script</code> tag, please refer to the documentation [Static Resources] (assets.md) and [Dynamic Listening Element Generation (init)] (js.md #init) chapters.</p><h2 id="custom-pages" tabindex="-1"><a class="header-anchor" href="#custom-pages" aria-hidden="true">#</a> Custom pages</h2><p>Building a custom page in <code>Dcat Admin</code> is very simple, you can refer to the following two examples</p><h3 id="example-1" tabindex="-1"><a class="header-anchor" href="#example-1" aria-hidden="true">#</a> Example 1</h3><blockquote><p>{tip} <code>Dcat Admin</code> is a single page application and the loaded <code>JS</code> script will only be executed once, so the initialization operation cannot be placed directly in the <code>JS</code> script, it should be loaded using the <code>Admin::script</code> method.</p></blockquote><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Contracts<span class="token punctuation">\\</span>Support<span class="token punctuation">\\</span>Renderable</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Admin</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">MyPage</span> <span class="token keyword">implements</span> <span class="token class-name">Renderable</span>
<span class="token punctuation">{</span>
    <span class="token comment">// Define the static resources needed for the page, which will be loaded here on demand.</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token variable">$js</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
	     <span class="token comment">// The js script cannot contain the initialization operation directly, otherwise the page refresh is invalid.</span>
		<span class="token string single-quoted-string">&#39;xxx/js/page.min.js&#39;</span><span class="token punctuation">,</span>
	<span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token variable">$css</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
		<span class="token string single-quoted-string">&#39;xxx/css/page.min.css&#39;</span><span class="token punctuation">,</span>
	<span class="token punctuation">]</span><span class="token punctuation">;</span>

	<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">script</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token string heredoc-string"><span class="token delimiter symbol"><span class="token punctuation">&lt;&lt;&lt;</span>JS</span>
		console.log(&#39;All JS scripts are loaded&#39;);
		// The initialization operation is written here.
<span class="token delimiter symbol">JS<span class="token punctuation">;</span></span></span>		
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token comment">// This is where you can bring in your js or css files.</span>
		<span class="token class-name static-context">Admin</span><span class="token operator">::</span><span class="token function">js</span><span class="token punctuation">(</span><span class="token keyword static-context">static</span><span class="token operator">::</span><span class="token variable">$js</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name static-context">Admin</span><span class="token operator">::</span><span class="token function">css</span><span class="token punctuation">(</span><span class="token keyword static-context">static</span><span class="token operator">::</span><span class="token variable">$css</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		<span class="token comment">// JS code to be executed on the page</span>
		<span class="token comment">// The JS code set by Admin::script will be executed automatically when all JS scripts are loaded.</span>
		<span class="token class-name static-context">Admin</span><span class="token operator">::</span><span class="token function">script</span><span class="token punctuation">(</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">script</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		<span class="token keyword">return</span> <span class="token function">view</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;admin.pages.my-page&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>View <code>admin.pages.my-page</code>, make sure the view code does not contain tags such as <code>&lt;body&gt;</code> and <code>&lt;html&gt;</code>.</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>自定义页面演示<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
Dcat<span class="token punctuation">.</span><span class="token function">ready</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// js代码也可以放在模板里面</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;所有JS脚本都加载完了!!!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Usage</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">index</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Content</span> <span class="token variable">$content</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token variable">$content</span><span class="token operator">-&gt;</span><span class="token function">body</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">MyPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="example-2" tabindex="-1"><a class="header-anchor" href="#example-2" aria-hidden="true">#</a> Example 2</h3><p>The dashboard page <code>/admin</code> in the background can also be seen as a custom page, the code implementation is as follows</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">index</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Content</span> <span class="token variable">$content</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token variable">$content</span>
        <span class="token operator">-&gt;</span><span class="token function">header</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Dashboard&#39;</span><span class="token punctuation">)</span>
        <span class="token operator">-&gt;</span><span class="token function">description</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Description...&#39;</span><span class="token punctuation">)</span>
        <span class="token operator">-&gt;</span><span class="token function">body</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">Row</span> <span class="token variable">$row</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token variable">$row</span><span class="token operator">-&gt;</span><span class="token function">column</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">Column</span> <span class="token variable">$column</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token variable">$column</span><span class="token operator">-&gt;</span><span class="token function">row</span><span class="token punctuation">(</span><span class="token class-name static-context">Dashboard</span><span class="token operator">::</span><span class="token function">title</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token variable">$column</span><span class="token operator">-&gt;</span><span class="token function">row</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name class-name-fully-qualified">Examples<span class="token punctuation">\\</span>Tickets</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token variable">$row</span><span class="token operator">-&gt;</span><span class="token function">column</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">Column</span> <span class="token variable">$column</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token variable">$column</span><span class="token operator">-&gt;</span><span class="token function">row</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">Row</span> <span class="token variable">$row</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token variable">$row</span><span class="token operator">-&gt;</span><span class="token function">column</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name class-name-fully-qualified">Examples<span class="token punctuation">\\</span>NewUsers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token variable">$row</span><span class="token operator">-&gt;</span><span class="token function">column</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name class-name-fully-qualified">Examples<span class="token punctuation">\\</span>NewDevices</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

                <span class="token variable">$column</span><span class="token operator">-&gt;</span><span class="token function">row</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name class-name-fully-qualified">Examples<span class="token punctuation">\\</span>Sessions</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token variable">$column</span><span class="token operator">-&gt;</span><span class="token function">row</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name class-name-fully-qualified">Examples<span class="token punctuation">\\</span>ProductOrders</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,23),c=[p];function o(i,l){return s(),a("div",null,c)}const k=n(e,[["render",o],["__file","custom-page.html.vue"]]);export{k as default};
