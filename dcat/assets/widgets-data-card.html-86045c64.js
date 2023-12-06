import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as c,o as i,c as l,b as s,d as n,e,w as p,a}from"./app-98225aba.js";const r="/dcat/assets/total-users-45cbb432.png",u="/dcat/assets/card-line-19cd4d93.png",d="/dcat/assets/card-donut-715b2e46.png",k="/dcat/assets/card-bar-68e4e855.png",v="/dcat/assets/card-ra-15379d88.png",m={},b=a('<h1 id="statistical-data-cards" tabindex="-1"><a class="header-anchor" href="#statistical-data-cards" aria-hidden="true">#</a> Statistical data cards</h1><p><code>Dcat Admin</code> has a variety of commonly used statistical cards built in, which can be easily interacted with the back-end API, the following is an introduction to the Usage.</p><h2 id="basic-cards" tabindex="-1"><a class="header-anchor" href="#basic-cards" aria-hidden="true">#</a> Basic cards</h2><p>The base card (<code>Dcat\\Admin\\Widgets\\Metrics\\Card</code>) is a card that does not display charts by default and is the simplest of the data cards.</p><p><img src="'+r+`" alt="" loading="lazy"></p><h3 id="simple-example" tabindex="-1"><a class="header-anchor" href="#simple-example" aria-hidden="true">#</a> Simple Example</h3><p>The use of the basic cards can be found in the built-in <code>App\\Admin\\Metrics\\Examples\\TotalUsers</code> category.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Metrics<span class="token punctuation">\\</span>Examples</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Widgets<span class="token punctuation">\\</span>Metrics<span class="token punctuation">\\</span>Card</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Contracts<span class="token punctuation">\\</span>Support<span class="token punctuation">\\</span>Renderable</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Request</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">TotalUsers</span> <span class="token keyword">extends</span> <span class="token class-name">Card</span>
<span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * Card footer content.
     *
     * <span class="token keyword">@var</span> <span class="token class-name"><span class="token keyword">string</span><span class="token punctuation">|</span>Renderable<span class="token punctuation">|</span><span class="token punctuation">\\</span>Closure</span>
     */</span>
    <span class="token keyword">protected</span> <span class="token variable">$footer</span><span class="token punctuation">;</span>
    
    <span class="token comment">// Save custom parameters</span>
    <span class="token keyword">protected</span> <span class="token variable">$data</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    
    <span class="token comment">// The method parameters must be set to default values</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">__construct</span><span class="token punctuation">(</span><span class="token keyword type-hint">array</span> <span class="token variable">$data</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> 
    <span class="token punctuation">{</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">data</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        
        <span class="token keyword static-context">parent</span><span class="token operator">::</span><span class="token function">__construct</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function-definition function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword static-context">parent</span><span class="token operator">::</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// Setting the TITLE</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">title</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Total Users&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// Setting the drop-down menu</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">dropdown</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
            <span class="token string single-quoted-string">&#39;7&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;Last 7 Days&#39;</span><span class="token punctuation">,</span>
            <span class="token string single-quoted-string">&#39;28&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;Last 28 Days&#39;</span><span class="token punctuation">,</span>
            <span class="token string single-quoted-string">&#39;30&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;Last Month&#39;</span><span class="token punctuation">,</span>
            <span class="token string single-quoted-string">&#39;365&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;Last Year&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * Processing of requests.
     *
     * <span class="token keyword">@param</span> <span class="token class-name">Request</span> <span class="token parameter">$request</span>
     *
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">void</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">handle</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Request</span> <span class="token variable">$request</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// Get custom parameters passed externally</span>
        <span class="token variable">$key1</span> <span class="token operator">=</span> <span class="token variable">$request</span><span class="token operator">-&gt;</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;key1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token keyword">switch</span> <span class="token punctuation">(</span><span class="token variable">$request</span><span class="token operator">-&gt;</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;option&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">case</span> <span class="token string single-quoted-string">&#39;365&#39;</span><span class="token punctuation">:</span>
                <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">content</span><span class="token punctuation">(</span><span class="token function">mt_rand</span><span class="token punctuation">(</span><span class="token number">600</span><span class="token punctuation">,</span> <span class="token number">1500</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">down</span><span class="token punctuation">(</span><span class="token function">mt_rand</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token keyword">case</span> <span class="token string single-quoted-string">&#39;30&#39;</span><span class="token punctuation">:</span>
                <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">content</span><span class="token punctuation">(</span><span class="token function">mt_rand</span><span class="token punctuation">(</span><span class="token number">170</span><span class="token punctuation">,</span> <span class="token number">250</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">up</span><span class="token punctuation">(</span><span class="token function">mt_rand</span><span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token keyword">case</span> <span class="token string single-quoted-string">&#39;28&#39;</span><span class="token punctuation">:</span>
                <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">content</span><span class="token punctuation">(</span><span class="token function">mt_rand</span><span class="token punctuation">(</span><span class="token number">155</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">up</span><span class="token punctuation">(</span><span class="token function">mt_rand</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token keyword">case</span> <span class="token string single-quoted-string">&#39;7&#39;</span><span class="token punctuation">:</span>
            <span class="token keyword">default</span><span class="token punctuation">:</span>
                <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">content</span><span class="token punctuation">(</span><span class="token number">143</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">up</span><span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// Passing a custom parameter to the handle method</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">parameters</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token keyword return-type">array</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">data</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token keyword">int</span></span> <span class="token parameter">$percent</span>
     *
     * <span class="token keyword">@return</span> $this
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">up</span><span class="token punctuation">(</span><span class="token variable">$percent</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">footer</span><span class="token punctuation">(</span>
            <span class="token string double-quoted-string">&quot;&lt;i class=\\&quot;feather icon-trending-up text-success\\&quot;&gt;&lt;/i&gt; <span class="token interpolation"><span class="token punctuation">{</span><span class="token variable">$percent</span><span class="token punctuation">}</span></span>% Increase&quot;</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token keyword">int</span></span> <span class="token parameter">$percent</span>
     *
     * <span class="token keyword">@return</span> $this
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">down</span><span class="token punctuation">(</span><span class="token variable">$percent</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">footer</span><span class="token punctuation">(</span>
            <span class="token string double-quoted-string">&quot;&lt;i class=\\&quot;feather icon-trending-down text-danger\\&quot;&gt;&lt;/i&gt; <span class="token interpolation"><span class="token punctuation">{</span><span class="token variable">$percent</span><span class="token punctuation">}</span></span>% Decrease&quot;</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * Set the content of the footer of the card
     *
     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token keyword">string</span><span class="token punctuation">|</span>Renderable<span class="token punctuation">|</span><span class="token punctuation">\\</span>Closure</span> <span class="token parameter">$footer</span>
     *
     * <span class="token keyword">@return</span> $this
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">footer</span><span class="token punctuation">(</span><span class="token variable">$footer</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">footer</span> <span class="token operator">=</span> <span class="token variable">$footer</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * Render the card content.
     *
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">string</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">renderContent</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$content</span> <span class="token operator">=</span> <span class="token keyword static-context">parent</span><span class="token operator">::</span><span class="token function">renderContent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> <span class="token string heredoc-string"><span class="token delimiter symbol"><span class="token punctuation">&lt;&lt;&lt;</span>HTML</span>
&lt;div class=&quot;d-flex justify-content-between align-items-center mt-1&quot; style=&quot;margin-bottom: 2px&quot;&gt;
    &lt;h2 class=&quot;ml-1 font-large-1&quot;&gt;<span class="token interpolation"><span class="token punctuation">{</span><span class="token variable">$content</span><span class="token punctuation">}</span></span>&lt;/h2&gt;
&lt;/div&gt;
&lt;div class=&quot;ml-1 mt-1 font-weight-bold text-80&quot;&gt;
    <span class="token interpolation"><span class="token punctuation">{</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">renderFooter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
&lt;/div&gt;
<span class="token delimiter symbol">HTML<span class="token punctuation">;</span></span></span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">string</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">renderFooter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">footer</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="basic-card-method" tabindex="-1"><a class="header-anchor" href="#basic-card-method" aria-hidden="true">#</a> Basic card method</h3><h4 id="initialization-init" tabindex="-1"><a class="header-anchor" href="#initialization-init" aria-hidden="true">#</a> initialization (init)</h4><p>The <code>init</code> method is called in the card constructor method and can be used for card initialization operations.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">class</span> <span class="token class-name-definition class-name">MyCard</span> extend Card
<span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function-definition function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword static-context">parent</span><span class="token operator">::</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
        <span class="token comment">// Your initialization operation</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="set-title-title" tabindex="-1"><a class="header-anchor" href="#set-title-title" aria-hidden="true">#</a> set TITLE (title)</h4><p>The <code>title</code> method allows you to set a TITLE in the top left corner of the card.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">class</span> <span class="token class-name-definition class-name">MyCard</span> extend Card
<span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function-definition function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword static-context">parent</span><span class="token operator">::</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">title</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;active user&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="set-dropdown-menu-dropdown" tabindex="-1"><a class="header-anchor" href="#set-dropdown-menu-dropdown" aria-hidden="true">#</a> Set dropdown menu (dropdown)</h4><p>The <code>dropdown</code> method allows you to set a dropdown menu button in the upper right corner of the card, which needs to be used in combination with the <code>handle</code> method to have result.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">class</span> <span class="token class-name-definition class-name">MyCard</span> extend Card
<span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function-definition function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">dropdown</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
            <span class="token string single-quoted-string">&#39;7&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;Last 7 Days&#39;</span><span class="token punctuation">,</span>
            <span class="token string single-quoted-string">&#39;28&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;Last 28 Days&#39;</span><span class="token punctuation">,</span>
            <span class="token string single-quoted-string">&#39;30&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;Last Month&#39;</span><span class="token punctuation">,</span>
            <span class="token string single-quoted-string">&#39;365&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;Last Year&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="set-subtitle-subtitle" tabindex="-1"><a class="header-anchor" href="#set-subtitle-subtitle" aria-hidden="true">#</a> set subTitle (subTitle)</h4><p>The <code>subTitle</code> method allows you to set a subTitle in the upper corner of the card.</p><blockquote><p>{tip} This method will conflict with the <code>dropdown</code> method, so if the dropdown button is set, there is no need to set a secondary TITLE.</p></blockquote><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">class</span> <span class="token class-name-definition class-name">MyCard</span> extend Card
<span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function-definition function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword static-context">parent</span><span class="token operator">::</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">subTitle</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Last 30 days&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="set-header-content-header" tabindex="-1"><a class="header-anchor" href="#set-header-content-header" aria-hidden="true">#</a> Set header content (header)</h4><p>The <code>header</code> method is used to set the content of the card header. This method accepts one parameter, which can be <code>string</code>, <code>Closure</code>, or a template view (<code>Illuminate\\Contracts\\Support\\Renderable</code>).</p><blockquote><p>{tip} The content set in this way is in the same <code>div</code> container as <code>title</code>.</p></blockquote><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">class</span> <span class="token class-name-definition class-name">MyCard</span> extend Card
<span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function-definition function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword static-context">parent</span><span class="token operator">::</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">header</span><span class="token punctuation">(</span>
            <span class="token operator">&lt;&lt;</span><span class="token operator">&lt;</span><span class="token constant">HTML</span>
            <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>Header content<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>        
<span class="token constant">HTML</span>            
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token comment">// You can also pass a closure</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">header</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token operator">...</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token comment">// You can also pass views</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">header</span><span class="token punctuation">(</span><span class="token function">view</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;...&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="set-the-main-content-content" tabindex="-1"><a class="header-anchor" href="#set-the-main-content-content" aria-hidden="true">#</a> Set the main content (content)</h4><p>The <code>content</code> method accepts one parameter, which can be <code>string</code>, <code>Closure</code>, or template view (<code>Illuminate\\Contracts\\Support\\Renderable</code>).</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">class</span> <span class="token class-name-definition class-name">MyCard</span> extend Card
<span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function-definition function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword static-context">parent</span><span class="token operator">::</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">withContent</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Custom Content&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * Card Content
     *
     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token keyword">string</span></span> <span class="token parameter">$content</span>
     *
     * <span class="token keyword">@return</span> $this
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">withContent</span><span class="token punctuation">(</span><span class="token variable">$content</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">content</span><span class="token punctuation">(</span>
            <span class="token operator">&lt;&lt;</span><span class="token operator">&lt;</span><span class="token constant">HTML</span>
<span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string double-quoted-string">&quot;d-flex flex-column flex-wrap text-center&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>h1 <span class="token keyword">class</span><span class="token operator">=</span><span class="token string double-quoted-string">&quot;font-large-2 mt-2 mb-0&quot;</span><span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token variable">$content</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>small<span class="token operator">&gt;</span>Tickets<span class="token operator">&lt;</span><span class="token operator">/</span>small<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token constant">HTML</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="setting-height-height" tabindex="-1"><a class="header-anchor" href="#setting-height-height" aria-hidden="true">#</a> Setting height (height)</h4><p>Through the <code>height</code> method, you can set the minimum height of the card, the default is <code>165</code>.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function-definition function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword static-context">parent</span><span class="token operator">::</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">height</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="passing-custom-parameters-parameters" tabindex="-1"><a class="header-anchor" href="#passing-custom-parameters-parameters" aria-hidden="true">#</a> Passing custom parameters (parameters)</h4><p>Parameters can be passed to the <code>handle</code> method via the <code>parameters</code> method.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment">// Passing a custom parameter to the handle method</span>
<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">parameters</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token keyword return-type">array</span>
<span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token punctuation">[</span>
		<span class="token string single-quoted-string">&#39;key1&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;value1&#39;</span><span class="token punctuation">,</span>
		
		<span class="token operator">...</span>
	<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Get custom parameters</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">handle</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Request</span> <span class="token variable">$request</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">// Get custom parameters</span>
	<span class="token variable">$key1</span> <span class="token operator">=</span> <span class="token variable">$request</span><span class="token operator">-&gt;</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;key1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="rendering-content-rendercontent" tabindex="-1"><a class="header-anchor" href="#rendering-content-rendercontent" aria-hidden="true">#</a> Rendering content (renderContent)</h4><p>To ensure flexibility and scalability of the content, the system does not have any preset styles for the card content (i.e., just display whatever content is set, with no preset layouts or other styles). The <code>renderContent</code> method allows you to change the default rendering of a card.</p><p>The following example demonstrates the main functionality of the <code>renderContent</code> method.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Support<span class="token punctuation">\\</span>Helper</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">MyCard</span> extend Card
<span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token variable">$footer</span><span class="token punctuation">;</span>
    
    <span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function-definition function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword static-context">parent</span><span class="token operator">::</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token comment">// Set the card content</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">content</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// Set the content at the bottom of the card</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">footer</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token doc-comment comment">/**
     * Add this method to set the content at the bottom of the card
     *
     * <span class="token keyword">@return</span> $this
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">footer</span><span class="token punctuation">(</span><span class="token variable">$footer</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">footer</span> <span class="token operator">=</span> <span class="token variable">$footer</span><span class="token punctuation">;</span>
        
        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token doc-comment comment">/**
     * Rendering bottom content
     *
     * <span class="token keyword">@return</span> $this
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">renderFooter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name static-context">Helper</span><span class="token operator">::</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">footer</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token doc-comment comment">/**
     * Render the card content
     * You can add the bottom of the card here
     *
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">string</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">renderContent</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$content</span> <span class="token operator">=</span> <span class="token keyword static-context">parent</span><span class="token operator">::</span><span class="token function">renderContent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token variable">$footer</span> <span class="token operator">=</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">renderFooter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
        <span class="token keyword">return</span> <span class="token string heredoc-string"><span class="token delimiter symbol"><span class="token punctuation">&lt;&lt;&lt;</span>HTML</span>
&lt;div class=&quot;card-content&quot;&gt;
    &lt;div class=&quot;row&quot;&gt;
        <span class="token interpolation"><span class="token punctuation">{</span><span class="token variable">$content</span><span class="token punctuation">}</span></span>
    &lt;/div&gt;
    &lt;div class=&quot;metric-footer&quot;&gt;
        <span class="token interpolation"><span class="token punctuation">{</span><span class="token variable">$footer</span><span class="token punctuation">}</span></span>
    &lt;/div&gt;
&lt;/div&gt;
<span class="token delimiter symbol">HTML<span class="token punctuation">;</span></span></span>      
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="enable-and-render-charts" tabindex="-1"><a class="header-anchor" href="#enable-and-render-charts" aria-hidden="true">#</a> Enable and render charts.</h4><p>Basic cards have charting enabled by default, you can enable charting by using the <code>useChart</code> method, which instantiates a chart class and saves it in the <code>chart</code> property.</p><p>When the chart is enabled, you need to render the chart in your card content, otherwise the chart will be initialized, but still can not be displayed.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">class</span> <span class="token class-name-definition class-name">MyCard</span> extend Card
<span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function-definition function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword static-context">parent</span><span class="token operator">::</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
        <span class="token comment">// Enable Charts</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">useChart</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token doc-comment comment">/**
     * Render the card content
     * You need to add the code to render the chart here
     *
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">string</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">renderContent</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// Content set by the content method</span>
        <span class="token variable">$content</span> <span class="token operator">=</span> <span class="token keyword static-context">parent</span><span class="token operator">::</span><span class="token function">renderContent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token comment">// Rendering Charts</span>
        <span class="token variable">$chart</span> <span class="token operator">=</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">renderChart</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token keyword">return</span> <span class="token operator">&lt;&lt;</span><span class="token operator">&lt;</span><span class="token constant">HTML</span>
    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string double-quoted-string">&quot;my-chart&quot;</span><span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token variable">$chart</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token punctuation">{</span><span class="token variable">$content</span><span class="token punctuation">}</span>    
<span class="token constant">HTML</span>           
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="chart-default-configuration-defaultchartoptions" tabindex="-1"><a class="header-anchor" href="#chart-default-configuration-defaultchartoptions" aria-hidden="true">#</a> Chart Default Configuration (defaultChartOptions)</h4><p>The default chart configuration can be set by the <code>defaultChartOptions</code> method, which is available only when the chart is enabled.</p>`,47),h=s("code",null,"JS",-1),g=a(`<div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">class</span> <span class="token class-name-definition class-name">MyCard</span> extend Card
<span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function-definition function">defaultChartOptions</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// Return the configuration of the chart</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span>
            <span class="token operator">...</span>
        <span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="set-up-a-chart-chart" tabindex="-1"><a class="header-anchor" href="#set-up-a-chart-chart" aria-hidden="true">#</a> Set up a chart (chart)</h4><p>The <code>chart</code> method allows you to set the chart configuration.</p>`,3),f=s("code",null,"JS",-1),y=a(`<div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">class</span> <span class="token class-name-definition class-name">MyCard</span> extend Card
<span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function-definition function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword static-context">parent</span><span class="token operator">::</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">chart</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="setting-the-chart-configuration-chartoption" tabindex="-1"><a class="header-anchor" href="#setting-the-chart-configuration-chartoption" aria-hidden="true">#</a> Setting the chart configuration (chartOption)</h4><p>Through the <code>chartOption</code> method, you can set the chart configuration, this method can only set one parameter at a time, supports setting multidimensional parameters.</p>`,3),w=s("code",null,"JS",-1),q=a(`<div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">class</span> <span class="token class-name-definition class-name">MyCard</span> extend Card
<span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function-definition function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword static-context">parent</span><span class="token operator">::</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">chartOption</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;stroke.curve&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;smooth&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">chartOption</span><span class="token punctuation">(</span>
            <span class="token string single-quoted-string">&#39;plotOptions.radialBar.dataLabels.total.formatter&#39;</span><span class="token punctuation">,</span>
            <span class="token comment">// The return code of this value will be executed as JS code</span>
            <span class="token class-name static-context">JavaScript</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;function () { return <span class="token interpolation"><span class="token punctuation">{</span><span class="token variable">$number</span><span class="token punctuation">}</span></span>; }&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="set-chart-height-chartheight" tabindex="-1"><a class="header-anchor" href="#set-chart-height-chartheight" aria-hidden="true">#</a> Set Chart Height (chartHeight)</h4><p>Through the <code>chartHeight</code> method can set the height of the chart, this method is very important, often need to be used in conjunction with the <code>height</code> method to adjust the overall height of the card.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">class</span> <span class="token class-name-definition class-name">MyCard</span> extend Card
<span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function-definition function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword static-context">parent</span><span class="token operator">::</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">chartHeight</span><span class="token punctuation">(</span><span class="token number">150</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="set-the-spacing-on-the-chart-chartmargintop" tabindex="-1"><a class="header-anchor" href="#set-the-spacing-on-the-chart-chartmargintop" aria-hidden="true">#</a> Set the spacing on the chart (chartMarginTop)</h4><p>The distance between the chart and the parent element can be set by the <code>chartMarginTop</code> method, which accepts a parameter of type <code>int</code> and can pass a <code>negative</code> number.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">class</span> <span class="token class-name-definition class-name">MyCard</span> extend Card
<span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function-definition function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword static-context">parent</span><span class="token operator">::</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">chartMarginTop</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="set-the-bottom-spacing-of-the-chart-chartmarginbottom" tabindex="-1"><a class="header-anchor" href="#set-the-bottom-spacing-of-the-chart-chartmarginbottom" aria-hidden="true">#</a> Set the bottom spacing of the chart (chartMarginBottom)</h4><p>The <code>chartMarginBottom</code> method is used to set the distance between the chart and the lower elements, the method accepts an <code>int</code> type parameter and can pass a <code>negative</code> number.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">class</span> <span class="token class-name-definition class-name">MyCard</span> extend Card
<span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function-definition function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword static-context">parent</span><span class="token operator">::</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">chartMarginBottom</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="set-chart-labels-chartlabels" tabindex="-1"><a class="header-anchor" href="#set-chart-labels-chartlabels" aria-hidden="true">#</a> Set chart labels (chartLabels)</h4><p>The <code>chartLabels</code> method allows you to set the label (<code>labels</code>) configuration of the chart.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">class</span> <span class="token class-name-definition class-name">MyCard</span> extend Card
<span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function-definition function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword static-context">parent</span><span class="token operator">::</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">chartLabels</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Label 1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token comment">// You can also pass arrays</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">chartLabels</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;Label 1&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="set-chart-color-chartcolors" tabindex="-1"><a class="header-anchor" href="#set-chart-color-chartcolors" aria-hidden="true">#</a> Set Chart Color (chartColors)</h4><p>The <code>chartColors</code> method allows you to set the color (<code>colors</code>) configuration of the chart.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">class</span> <span class="token class-name-definition class-name">MyCard</span> extend Card
<span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function-definition function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword static-context">parent</span><span class="token operator">::</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">chartColors</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;#4f41a1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token comment">// You can also pass arrays</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">chartColors</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;#4f41a1&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="rendering-charts-renderchart" tabindex="-1"><a class="header-anchor" href="#rendering-charts-renderchart" aria-hidden="true">#</a> Rendering Charts (renderChart)</h4><p>The <code>renderChart</code> method is used to render the chart</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">class</span> <span class="token class-name-definition class-name">MyCard</span> extend Card
<span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function-definition function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword static-context">parent</span><span class="token operator">::</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
        <span class="token comment">// Enable Charts</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">useChart</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token doc-comment comment">/**
     * Render the card content
     * You need to add the code to render the chart here
     *
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">string</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">renderContent</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// Content set by the content method</span>
        <span class="token variable">$content</span> <span class="token operator">=</span> <span class="token keyword static-context">parent</span><span class="token operator">::</span><span class="token function">renderContent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token comment">// Rendering Charts</span>
        <span class="token variable">$chart</span> <span class="token operator">=</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">renderChart</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token keyword">return</span> <span class="token operator">&lt;&lt;</span><span class="token operator">&lt;</span><span class="token constant">HTML</span>
    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string double-quoted-string">&quot;my-chart&quot;</span><span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token variable">$chart</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token punctuation">{</span><span class="token variable">$content</span><span class="token punctuation">}</span>    
<span class="token constant">HTML</span>           
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="linear-trend-chart-cards-line" tabindex="-1"><a class="header-anchor" href="#linear-trend-chart-cards-line" aria-hidden="true">#</a> Linear trend chart cards (Line)</h2><p>The Linear Trend (<code>Dcat\\Admin/Widgets\\Metrics\\Line</code>) is a statistical card with a polyline/line graph, inherited from the base card <code>Dcat\\Admin/Widgets\\Metrics\\Card</code>.</p><p><img src="`+u+`" alt="" loading="lazy"></p><h3 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h3><p>Reference may be made to the built-in <code>App\\Admin\\Metrics\\Examples\\NewUsers</code> category.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Metrics<span class="token punctuation">\\</span>Examples</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Widgets<span class="token punctuation">\\</span>Metrics<span class="token punctuation">\\</span>Line</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Request</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">NewUsers</span> <span class="token keyword">extends</span> <span class="token class-name">Line</span>
<span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * <span class="token keyword">@var</span> <span class="token class-name"><span class="token keyword">string</span></span>
     */</span>
    <span class="token keyword">protected</span> <span class="token variable">$label</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;New Users&#39;</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Initialize card content
     *
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">void</span></span>
     */</span>
    <span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function-definition function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword static-context">parent</span><span class="token operator">::</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">title</span><span class="token punctuation">(</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">label</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">dropdown</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
            <span class="token string single-quoted-string">&#39;7&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;Last 7 Days&#39;</span><span class="token punctuation">,</span>
            <span class="token string single-quoted-string">&#39;28&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;Last 28 Days&#39;</span><span class="token punctuation">,</span>
            <span class="token string single-quoted-string">&#39;30&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;Last Month&#39;</span><span class="token punctuation">,</span>
            <span class="token string single-quoted-string">&#39;365&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;Last Year&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * Processing of requests
     *
     * <span class="token keyword">@param</span> <span class="token class-name">Request</span> <span class="token parameter">$request</span>
     *
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">mixed</span><span class="token punctuation">|</span><span class="token keyword">void</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">handle</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Request</span> <span class="token variable">$request</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$generator</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">$len</span><span class="token punctuation">,</span> <span class="token variable">$min</span> <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token variable">$max</span> <span class="token operator">=</span> <span class="token number">300</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token variable">$i</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token variable">$i</span> <span class="token operator">&lt;=</span> <span class="token variable">$len</span><span class="token punctuation">;</span> <span class="token variable">$i</span><span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">yield</span> <span class="token function">mt_rand</span><span class="token punctuation">(</span><span class="token variable">$min</span><span class="token punctuation">,</span> <span class="token variable">$max</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>

        <span class="token keyword">switch</span> <span class="token punctuation">(</span><span class="token variable">$request</span><span class="token operator">-&gt;</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;option&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">case</span> <span class="token string single-quoted-string">&#39;365&#39;</span><span class="token punctuation">:</span>
                <span class="token comment">// Card Content</span>
                <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">withContent</span><span class="token punctuation">(</span><span class="token function">mt_rand</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">,</span> <span class="token number">5000</span><span class="token punctuation">)</span><span class="token operator">.</span><span class="token string single-quoted-string">&#39;k&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">// Chart data</span>
                <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">withChart</span><span class="token punctuation">(</span><span class="token function">collect</span><span class="token punctuation">(</span><span class="token variable">$generator</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">toArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">// 直线</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token keyword">case</span> <span class="token string single-quoted-string">&#39;30&#39;</span><span class="token punctuation">:</span>
                <span class="token comment">// Card Content</span>
                <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">withContent</span><span class="token punctuation">(</span><span class="token function">mt_rand</span><span class="token punctuation">(</span><span class="token number">400</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token operator">.</span><span class="token string single-quoted-string">&#39;k&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">// Chart data</span>
                <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">withChart</span><span class="token punctuation">(</span><span class="token function">collect</span><span class="token punctuation">(</span><span class="token variable">$generator</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">toArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">// 直线</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token keyword">case</span> <span class="token string single-quoted-string">&#39;28&#39;</span><span class="token punctuation">:</span>
                <span class="token comment">// Card Content</span>
                <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">withContent</span><span class="token punctuation">(</span><span class="token function">mt_rand</span><span class="token punctuation">(</span><span class="token number">400</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token operator">.</span><span class="token string single-quoted-string">&#39;k&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">// Chart data</span>
                <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">withChart</span><span class="token punctuation">(</span><span class="token function">collect</span><span class="token punctuation">(</span><span class="token variable">$generator</span><span class="token punctuation">(</span><span class="token number">28</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">toArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">// 直线</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token keyword">case</span> <span class="token string single-quoted-string">&#39;7&#39;</span><span class="token punctuation">:</span>
            <span class="token keyword">default</span><span class="token punctuation">:</span>
                <span class="token comment">// Card Content</span>
                <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">withContent</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;89.2k&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">// Chart data</span>
                <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">withChart</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">28</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">36</span><span class="token punctuation">,</span> <span class="token number">52</span><span class="token punctuation">,</span> <span class="token number">38</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">,</span> <span class="token number">55</span><span class="token punctuation">,</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * Setting up chart data.
     *
     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token keyword">array</span></span> <span class="token parameter">$data</span>
     *
     * <span class="token keyword">@return</span> $this
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">withChart</span><span class="token punctuation">(</span><span class="token keyword type-hint">array</span> <span class="token variable">$data</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">chart</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
            <span class="token string single-quoted-string">&#39;series&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
                <span class="token punctuation">[</span>
                    <span class="token string single-quoted-string">&#39;name&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">label</span><span class="token punctuation">,</span>
                    <span class="token string single-quoted-string">&#39;data&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$data</span><span class="token punctuation">,</span>
                <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * Set the card content.
     *
     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token keyword">string</span></span> <span class="token parameter">$content</span>
     *
     * <span class="token keyword">@return</span> $this
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">withContent</span><span class="token punctuation">(</span><span class="token variable">$content</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">content</span><span class="token punctuation">(</span>
            <span class="token operator">&lt;&lt;</span><span class="token operator">&lt;</span><span class="token constant">HTML</span>
<span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string double-quoted-string">&quot;d-flex justify-content-between align-items-center mt-1&quot;</span> style<span class="token operator">=</span><span class="token string double-quoted-string">&quot;margin-bottom: 2px&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>h2 <span class="token keyword">class</span><span class="token operator">=</span><span class="token string double-quoted-string">&quot;ml-1 font-large-1&quot;</span><span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token variable">$content</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>span <span class="token keyword">class</span><span class="token operator">=</span><span class="token string double-quoted-string">&quot;mb-0 mr-1 text-80&quot;</span><span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">label</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token constant">HTML</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="methods" tabindex="-1"><a class="header-anchor" href="#methods" aria-hidden="true">#</a> Methods</h3><h4 id="set-lines-to-straight-chartstraight" tabindex="-1"><a class="header-anchor" href="#set-lines-to-straight-chartstraight" aria-hidden="true">#</a> Set lines to straight (chartStraight)</h4><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Widgets<span class="token punctuation">\\</span>Metrics<span class="token punctuation">\\</span>Line</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">MyCard</span> extend Line
<span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function-definition function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword static-context">parent</span><span class="token operator">::</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">chartStraight</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="setting-lines-to-curves-chartsmooth" tabindex="-1"><a class="header-anchor" href="#setting-lines-to-curves-chartsmooth" aria-hidden="true">#</a> Setting Lines to Curves (chartSmooth)</h4><p>The default display is the curve</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Widgets<span class="token punctuation">\\</span>Metrics<span class="token punctuation">\\</span>Line</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">MyCard</span> extend Line
<span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function-definition function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword static-context">parent</span><span class="token operator">::</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">chartSmooth</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="doughnut-card-donut" tabindex="-1"><a class="header-anchor" href="#doughnut-card-donut" aria-hidden="true">#</a> doughnut card (Donut)</h2><p>The Doughnut Card (<code>Dcat\\AdminWidgets\\Metrics\\Donut</code>) is a statistical card with a doughnut chart, inherited from the base card <code>Dcat\\AdminWidgets\\Metrics\\Card</code>.</p><p><img src="`+d+`" alt="" loading="lazy"></p><h3 id="example-1" tabindex="-1"><a class="header-anchor" href="#example-1" aria-hidden="true">#</a> Example</h3><p>Reference may be made to the built-in <code>App\\Admin\\Metrics\\Examples\\NewDevices</code> category.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Metrics<span class="token punctuation">\\</span>Examples</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Admin</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Widgets<span class="token punctuation">\\</span>Metrics<span class="token punctuation">\\</span>Donut</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">NewDevices</span> <span class="token keyword">extends</span> <span class="token class-name">Donut</span>
<span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token variable">$labels</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;Desktop&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;Mobile&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Initialize card content
     */</span>
    <span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function-definition function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword static-context">parent</span><span class="token operator">::</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token variable">$color</span> <span class="token operator">=</span> <span class="token class-name static-context">Admin</span><span class="token operator">::</span><span class="token function">color</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token variable">$colors</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token variable">$color</span><span class="token operator">-&gt;</span><span class="token function">primary</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token variable">$color</span><span class="token operator">-&gt;</span><span class="token function">alpha</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;blue2&#39;</span><span class="token punctuation">,</span> <span class="token number">0.5</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">title</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;New Devices&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">subTitle</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Last 30 days&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">chartLabels</span><span class="token punctuation">(</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">labels</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// Set Chart Color</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">chartColors</span><span class="token punctuation">(</span><span class="token variable">$colors</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * Rendering template
     *
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">string</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> <span class="token keyword static-context">parent</span><span class="token operator">::</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * Writing data
     *
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">void</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">fill</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">withContent</span><span class="token punctuation">(</span><span class="token number">44.9</span><span class="token punctuation">,</span> <span class="token number">28.6</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// Chart data</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">withChart</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">44.9</span><span class="token punctuation">,</span> <span class="token number">28.6</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * Setting chart data
     *
     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token keyword">array</span></span> <span class="token parameter">$data</span>
     *
     * <span class="token keyword">@return</span> $this
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">withChart</span><span class="token punctuation">(</span><span class="token keyword type-hint">array</span> <span class="token variable">$data</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">chart</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
            <span class="token string single-quoted-string">&#39;series&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$data</span>
        <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * Set the card header content
     *
     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token keyword">mixed</span></span> <span class="token parameter">$desktop</span>
     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token keyword">mixed</span></span> <span class="token parameter">$mobile</span>
     *
     * <span class="token keyword">@return</span> $this
     */</span>
    <span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function-definition function">withContent</span><span class="token punctuation">(</span><span class="token variable">$desktop</span><span class="token punctuation">,</span> <span class="token variable">$mobile</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$blue</span> <span class="token operator">=</span> <span class="token class-name static-context">Admin</span><span class="token operator">::</span><span class="token function">color</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">alpha</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;blue2&#39;</span><span class="token punctuation">,</span> <span class="token number">0.5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token variable">$style</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;margin-bottom: 8px&#39;</span><span class="token punctuation">;</span>
        <span class="token variable">$labelWidth</span> <span class="token operator">=</span> <span class="token number">120</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">content</span><span class="token punctuation">(</span>
            <span class="token operator">&lt;&lt;</span><span class="token operator">&lt;</span><span class="token constant">HTML</span>
<span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string double-quoted-string">&quot;d-flex pl-1 pr-1 pt-1&quot;</span> style<span class="token operator">=</span><span class="token string double-quoted-string">&quot;<span class="token interpolation"><span class="token punctuation">{</span><span class="token variable">$style</span><span class="token punctuation">}</span></span>&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div style<span class="token operator">=</span><span class="token string double-quoted-string">&quot;width: <span class="token interpolation"><span class="token punctuation">{</span><span class="token variable">$labelWidth</span><span class="token punctuation">}</span></span>px&quot;</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>i <span class="token keyword">class</span><span class="token operator">=</span><span class="token string double-quoted-string">&quot;fa fa-circle text-primary&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>i<span class="token operator">&gt;</span> <span class="token punctuation">{</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">labels</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token variable">$desktop</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string double-quoted-string">&quot;d-flex pl-1 pr-1&quot;</span> style<span class="token operator">=</span><span class="token string double-quoted-string">&quot;<span class="token interpolation"><span class="token punctuation">{</span><span class="token variable">$style</span><span class="token punctuation">}</span></span>&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div style<span class="token operator">=</span><span class="token string double-quoted-string">&quot;width: <span class="token interpolation"><span class="token punctuation">{</span><span class="token variable">$labelWidth</span><span class="token punctuation">}</span></span>px&quot;</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>i <span class="token keyword">class</span><span class="token operator">=</span><span class="token string double-quoted-string">&quot;fa fa-circle&quot;</span> style<span class="token operator">=</span><span class="token string double-quoted-string">&quot;color: <span class="token interpolation"><span class="token variable">$blue</span></span>&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>i<span class="token operator">&gt;</span> <span class="token punctuation">{</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">labels</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token variable">$mobile</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token constant">HTML</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="methods-1" tabindex="-1"><a class="header-anchor" href="#methods-1" aria-hidden="true">#</a> Methods</h3><h4 id="set-content-width-contentwidth" tabindex="-1"><a class="header-anchor" href="#set-content-width-contentwidth" aria-hidden="true">#</a> set content width (contentWidth)</h4><p>Through the <code>contentWidth</code> method, you can set the width of the text content and the chart content, the default is <code>[6, 6]</code>.</p><blockquote><p>{tip} The width here is a value between <code>1-12</code>.</p></blockquote><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Widgets<span class="token punctuation">\\</span>Metrics<span class="token punctuation">\\</span>Line</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">MyCard</span> extend Line
<span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function-definition function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword static-context">parent</span><span class="token operator">::</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">contentWidth</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="bar-chart-cards-bar" tabindex="-1"><a class="header-anchor" href="#bar-chart-cards-bar" aria-hidden="true">#</a> Bar Chart Cards (Bar)</h2><p>The Bar Chart Card (<code>Dcat\\Admin\\Widgets\\MetricsBar</code>) is a statistical card with a bar chart, inherited from the base card <code>Dcat\\Admin\\Widgets\\MetricsCard</code>.</p><p><img src="`+k+`" alt="" loading="lazy"></p><h3 id="example-2" tabindex="-1"><a class="header-anchor" href="#example-2" aria-hidden="true">#</a> Example</h3><p>Reference may be made to the built-in <code>App\\Admin\\Metrics\\Examples\\NewDevices</code> category.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Metrics<span class="token punctuation">\\</span>Examples</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Admin</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Widgets<span class="token punctuation">\\</span>Metrics<span class="token punctuation">\\</span>Bar</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Request</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">Sessions</span> <span class="token keyword">extends</span> <span class="token class-name">Bar</span>
<span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * Initialize card content
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword static-context">parent</span><span class="token operator">::</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token variable">$color</span> <span class="token operator">=</span> <span class="token class-name static-context">Admin</span><span class="token operator">::</span><span class="token function">color</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token variable">$dark35</span> <span class="token operator">=</span> <span class="token variable">$color</span><span class="token operator">-&gt;</span><span class="token function">dark35</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// Card content width</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">contentWidth</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// TITLE</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">title</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Avg Sessions&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// Set drop-down options</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">dropdown</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
            <span class="token string single-quoted-string">&#39;7&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;Last 7 Days&#39;</span><span class="token punctuation">,</span>
            <span class="token string single-quoted-string">&#39;28&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;Last 28 Days&#39;</span><span class="token punctuation">,</span>
            <span class="token string single-quoted-string">&#39;30&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;Last Month&#39;</span><span class="token punctuation">,</span>
            <span class="token string single-quoted-string">&#39;365&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;Last Year&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// Set Chart Color</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">chartColors</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
            <span class="token variable">$dark35</span><span class="token punctuation">,</span>
            <span class="token variable">$dark35</span><span class="token punctuation">,</span>
            <span class="token variable">$color</span><span class="token operator">-&gt;</span><span class="token function">primary</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token variable">$dark35</span><span class="token punctuation">,</span>
            <span class="token variable">$dark35</span><span class="token punctuation">,</span>
            <span class="token variable">$dark35</span>
        <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * Processing of requests
     *
     * <span class="token keyword">@param</span> <span class="token class-name">Request</span> <span class="token parameter">$request</span>
     *
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">mixed</span><span class="token punctuation">|</span><span class="token keyword">void</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">handle</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Request</span> <span class="token variable">$request</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">switch</span> <span class="token punctuation">(</span><span class="token variable">$request</span><span class="token operator">-&gt;</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;option&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">case</span> <span class="token string single-quoted-string">&#39;7&#39;</span><span class="token punctuation">:</span>
            <span class="token keyword">default</span><span class="token punctuation">:</span>
                <span class="token comment">// Card Content</span>
                <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">withContent</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;2.7k&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;+5.2%&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

                <span class="token comment">// Chart data</span>
                <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">withChart</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
                    <span class="token punctuation">[</span>
                        <span class="token string single-quoted-string">&#39;name&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;Sessions&#39;</span><span class="token punctuation">,</span>
                        <span class="token string single-quoted-string">&#39;data&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token number">75</span><span class="token punctuation">,</span> <span class="token number">125</span><span class="token punctuation">,</span> <span class="token number">225</span><span class="token punctuation">,</span> <span class="token number">175</span><span class="token punctuation">,</span> <span class="token number">125</span><span class="token punctuation">,</span> <span class="token number">75</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                    <span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * Setting up chart data.
     *
     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token keyword">array</span></span> <span class="token parameter">$data</span>
     *
     * <span class="token keyword">@return</span> $this
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">withChart</span><span class="token punctuation">(</span><span class="token keyword type-hint">array</span> <span class="token variable">$data</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">chart</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
            <span class="token string single-quoted-string">&#39;series&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$data</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * Set the card content.
     *
     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token keyword">string</span></span> <span class="token parameter">$title</span>
     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token keyword">string</span></span> <span class="token parameter">$value</span>
     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token keyword">string</span></span> <span class="token parameter">$style</span>
     *
     * <span class="token keyword">@return</span> $this
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">withContent</span><span class="token punctuation">(</span><span class="token variable">$title</span><span class="token punctuation">,</span> <span class="token variable">$value</span><span class="token punctuation">,</span> <span class="token variable">$style</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;success&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// Display according to options</span>
        <span class="token variable">$label</span> <span class="token operator">=</span> <span class="token function">strtolower</span><span class="token punctuation">(</span>
            <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">dropdown</span><span class="token punctuation">[</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token property">option</span><span class="token punctuation">]</span> <span class="token operator">??</span> <span class="token string single-quoted-string">&#39;last 7 days&#39;</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token variable">$minHeight</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;183px&#39;</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">content</span><span class="token punctuation">(</span>
            <span class="token operator">&lt;&lt;</span><span class="token operator">&lt;</span><span class="token constant">HTML</span>
<span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string double-quoted-string">&quot;d-flex p-1 flex-column justify-content-between&quot;</span> style<span class="token operator">=</span><span class="token string double-quoted-string">&quot;padding-top: 0;width: 100%;height: 100%;min-height: <span class="token interpolation"><span class="token punctuation">{</span><span class="token variable">$minHeight</span><span class="token punctuation">}</span></span>&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string double-quoted-string">&quot;text-left&quot;</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>h1 <span class="token keyword">class</span><span class="token operator">=</span><span class="token string double-quoted-string">&quot;font-large-2 mt-2 mb-0&quot;</span><span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token variable">$title</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>h5 <span class="token keyword">class</span><span class="token operator">=</span><span class="token string double-quoted-string">&quot;font-medium-2&quot;</span> style<span class="token operator">=</span><span class="token string double-quoted-string">&quot;margin-top: 10px;&quot;</span><span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>span <span class="token keyword">class</span><span class="token operator">=</span><span class="token string double-quoted-string">&quot;text-<span class="token interpolation"><span class="token punctuation">{</span><span class="token variable">$style</span><span class="token punctuation">}</span></span>&quot;</span><span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token variable">$value</span><span class="token punctuation">}</span> <span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>span<span class="token operator">&gt;</span>vs <span class="token punctuation">{</span><span class="token variable">$label</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>h5<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>

    <span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string double-quoted-string">&quot;#&quot;</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string double-quoted-string">&quot;btn btn-primary shadow waves-effect waves-light&quot;</span><span class="token operator">&gt;</span>View Details <span class="token operator">&lt;</span>i <span class="token keyword">class</span><span class="token operator">=</span><span class="token string double-quoted-string">&quot;feather icon-chevrons-right&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>i<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token constant">HTML</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="circle-charts-round" tabindex="-1"><a class="header-anchor" href="#circle-charts-round" aria-hidden="true">#</a> Circle Charts (Round)</h2><p>The Round Chart Card (<code>Dcat\\Admin/Widgets\\Metrics\\Round</code>) is a statistical card with multiple rings, inherited from the base card <code>Dcat\\Admin/Widgets\\Metrics\\Card</code>.</p><p><img src="`+v+'" alt="" loading="lazy"></p><h3 id="example-3" tabindex="-1"><a class="header-anchor" href="#example-3" aria-hidden="true">#</a> Example</h3><p>The specific Example is similar to that of the above card, which can be referred to in the built-in <code>App\\Admin\\Metrics\\Examples\\ProductOrders</code> category, which will not be posted here.</p><h2 id="more-built-in-cards" tabindex="-1"><a class="header-anchor" href="#more-built-in-cards" aria-hidden="true">#</a> More built-in cards</h2><p>The system also has built-in cards such as <code>Dcat\\Admin\\Widgets\\Metrics\\RadialBar</code>, <code>Dcat\\Admin\\Widgets\\Metrics\\SingleRound</code>, etc. Since the Usages are similar to the above-mentioned cards, the code will not be repeated here.</p><p>[Click me to see an online demo of all the built-in cards] (http://103.39.211.179:8080/admin/components/metric-cards)</p><h2 id="custom-chart-cards" tabindex="-1"><a class="header-anchor" href="#custom-chart-cards" aria-hidden="true">#</a> Custom chart cards</h2><p>For custom cards, refer to the code for the built-in chart above.</p>',58);function $(x,C){const t=c("RouterLink");return i(),l("div",null,[b,s("blockquote",null,[s("p",null,[n("{tip} The chart configuration here also supports setting executable "),h,n(" code, please refer to "),e(t,{to:"/guide/widgets-charts.html#js"},{default:p(()=>[n("chart configuration setting executable JS code")]),_:1}),n(" for detailed usage.")])]),g,s("blockquote",null,[s("p",null,[n("{tip} The chart configuration here also supports setting executable "),f,n(" code, please refer to "),e(t,{to:"/guide/widgets-charts.html#js"},{default:p(()=>[n("chart configuration setting executable JS code")]),_:1}),n(" for detailed usage.")])]),y,s("blockquote",null,[s("p",null,[n("{tip} The chart configuration here also supports setting executable "),w,n(" code, please refer to "),e(t,{to:"/guide/widgets-charts.html#js"},{default:p(()=>[n("chart configuration setting executable JS code")]),_:1}),n(" for detailed usage.")])]),q])}const L=o(m,[["render",$],["__file","widgets-data-card.html.vue"]]);export{L as default};
