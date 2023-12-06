import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,a as e}from"./app-98225aba.js";const t={},p=e(`<h1 id="actions-and-form-responses" tabindex="-1"><a class="header-anchor" href="#actions-and-form-responses" aria-hidden="true">#</a> Actions and form responses</h1><p>The response methods for [action] (action.md), [data form] (model-form.md), and [tool form] (widgets-form.md) are all the same set of methods.</p><p>You can get the <code>Dcat\\Admin\\Http\\JsonResponse</code> object in the class by using <code>$this-&gt;response()</code> and respond to the data to the front end with the</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">response</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;success！&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// equal to</span>
<span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Admin</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>JsonResponse</span><span class="token punctuation">;</span>

<span class="token keyword">return</span> <span class="token class-name static-context">JsonResponse</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;success！&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">return</span> <span class="token class-name static-context">Admin</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Success!&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If used in a controller, you need to add the <code>send</code> method</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">index</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name static-context">JsonResponse</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;成功！&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="function" tabindex="-1"><a class="header-anchor" href="#function" aria-hidden="true">#</a> Function</h3><p>The following describes the main Usages of <code>JsonResponse</code>.</p><h4 id="showcasesuccess-information" tabindex="-1"><a class="header-anchor" href="#showcasesuccess-information" aria-hidden="true">#</a> showcasesuccess information</h4><p>This method takes an argument of type <code>string</code></p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">response</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;success！&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="displays-error-messages" tabindex="-1"><a class="header-anchor" href="#displays-error-messages" aria-hidden="true">#</a> displays error messages</h4><p>This method takes an argument of type <code>string</code>.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">response</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;出错了！&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="display-warning-information" tabindex="-1"><a class="header-anchor" href="#display-warning-information" aria-hidden="true">#</a> Display warning information</h4><p>This method takes an argument of type <code>string</code>.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">response</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">warning</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;警告&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="redirect" tabindex="-1"><a class="header-anchor" href="#redirect" aria-hidden="true">#</a> Redirect</h4><p>This method takes a parameter of type <code>string</code> and can be used with methods such as <code>success</code>, <code>error</code>, <code>warning</code>, etc.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">response</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">redirect</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;auth/users&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="redirect-location" tabindex="-1"><a class="header-anchor" href="#redirect-location" aria-hidden="true">#</a> Redirect (location)</h4><p>An automatic redirect ( non-partial refresh ) after <code>1</code> seconds, this method takes a <code>string</code> type parameter</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">response</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;operation successful&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">location</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;auth/users&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Refresh the current page if no parameters are passed</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">response</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;operation successful&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">location</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="refresh-current-page" tabindex="-1"><a class="header-anchor" href="#refresh-current-page" aria-hidden="true">#</a> Refresh current page</h4><p>This method can be used with methods such as <code>success</code>, <code>error</code>, <code>warning</code> etc.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">response</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;xxx&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">refresh</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Download ####</p><p>This method takes an argument of type <code>string</code>.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">response</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">download</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;auth/users?_export_=1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="show-confirmation-pop-up" tabindex="-1"><a class="header-anchor" href="#show-confirmation-pop-up" aria-hidden="true">#</a> show confirmation pop-up</h4><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment">// success</span>
<span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">response</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">alert</span><span class="token punctuation">(</span><span class="token constant boolean">true</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;...&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">detail</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Details&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// error</span>
<span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">response</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">alert</span><span class="token punctuation">(</span><span class="token constant boolean">true</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;...&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">detail</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Details&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// warning</span>
<span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">response</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">alert</span><span class="token punctuation">(</span><span class="token constant boolean">true</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">warning</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;...&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">detail</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Details&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// info</span>
<span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">response</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">alert</span><span class="token punctuation">(</span><span class="token constant boolean">true</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;...&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">detail</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Details&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="return-to-html" tabindex="-1"><a class="header-anchor" href="#return-to-html" aria-hidden="true">#</a> Return to HTML</h4><p>This method accepts a <code>string</code>, <code>Renderable</code>, <code>Htmlable</code> type parameter and can be used with <code>success</code>, <code>error</code>, <code>warning</code> methods.</p><blockquote><p>{tip} The <code>HTML</code> character will be placed on the action button element by default. If you want to control it, override the <a href="#handleHtmlResponse">handleHtmlResponse</a> method.</p></blockquote><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">response</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">html</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;&lt;a&gt;a tag&lt;/a&gt;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">response</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">html</span><span class="token punctuation">(</span><span class="token function">view</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;...&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="execute-js-code" tabindex="-1"><a class="header-anchor" href="#execute-js-code" aria-hidden="true">#</a> Execute JS code</h4><p>This method takes a parameter of type <code>string</code> and can be used with methods such as <code>success</code>, <code>error</code>, <code>warning</code>, etc.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">response</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">script</span><span class="token punctuation">(</span>
	<span class="token operator">&lt;&lt;</span><span class="token operator">&lt;</span><span class="token constant">JS</span>
console<span class="token operator">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;response&#39;</span><span class="token punctuation">,</span> response<span class="token punctuation">,</span> target<span class="token punctuation">)</span><span class="token punctuation">;</span>	
<span class="token constant">JS</span>	
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="determine-whether-to-call-or-not-based-on-conditions" tabindex="-1"><a class="header-anchor" href="#determine-whether-to-call-or-not-based-on-conditions" aria-hidden="true">#</a> Determine whether to call or not based on conditions</h3><p>All of the above functional interfaces support the <code>if</code> mode, such as the</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment">// If the value of $condition is true, then the refresh method is called</span>
<span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">response</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">ifRefresh</span><span class="token punctuation">(</span><span class="token variable">$condition</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">response</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">ifLocation</span><span class="token punctuation">(</span><span class="token variable">$condition</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;auth/users&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// $condition can also be a closure</span>
<span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">response</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">ifRefresh</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token constant boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,43),o=[p];function c(i,l){return s(),a("div",null,o)}const d=n(t,[["render",c],["__file","response.html.vue"]]);export{d as default};