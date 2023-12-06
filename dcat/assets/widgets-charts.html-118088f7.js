import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as e,o,c,a as n,b as s,d as t,e as i}from"./app-c17653d8.js";const l="/dcat/assets/8uS1kt7oAb-810a121e.png",u="/dcat/assets/UDrNU9UxfM-d4208548.png",r={},k=n("h1",{id:"图表",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#图表","aria-hidden":"true"},"#"),s(" 图表")],-1),d=n("code",null,"Dcat Admin",-1),v={href:"https://apexcharts.com/",target:"_blank",rel:"noopener noreferrer"},m=n("code",null,"Dcat\\Admin\\Widgets\\ApexCharts\\Chart",-1),b=n("h3",{id:"简单用法",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#简单用法","aria-hidden":"true"},"#"),s(" 简单用法")],-1),g=n("p",null,"如果你需要构建一个图表，可以参考下面的方式",-1),y={href:"https://apexcharts.com/",target:"_blank",rel:"noopener noreferrer"},f=i(`<div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Widgets<span class="token punctuation">\\</span>Charts</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Admin</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Widgets<span class="token punctuation">\\</span>ApexCharts<span class="token punctuation">\\</span>Chart</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">MyBar</span> <span class="token keyword">extends</span> <span class="token class-name">Chart</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">__construct</span><span class="token punctuation">(</span><span class="token variable">$containerSelector</span> <span class="token operator">=</span> <span class="token constant">null</span><span class="token punctuation">,</span> <span class="token variable">$options</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword static-context">parent</span><span class="token operator">::</span><span class="token function">__construct</span><span class="token punctuation">(</span><span class="token variable">$containerSelector</span><span class="token punctuation">,</span> <span class="token variable">$options</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">setUpOptions</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 初始化图表配置
     */</span>
    <span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function-definition function">setUpOptions</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$color</span> <span class="token operator">=</span> <span class="token class-name static-context">Admin</span><span class="token operator">::</span><span class="token function">color</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token variable">$colors</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token variable">$color</span><span class="token operator">-&gt;</span><span class="token function">primary</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token variable">$color</span><span class="token operator">-&gt;</span><span class="token function">primaryDarker</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">options</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
            <span class="token string single-quoted-string">&#39;colors&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$colors</span><span class="token punctuation">,</span>
            <span class="token string single-quoted-string">&#39;chart&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
                <span class="token string single-quoted-string">&#39;type&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;bar&#39;</span><span class="token punctuation">,</span>
                <span class="token string single-quoted-string">&#39;height&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">430</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token string single-quoted-string">&#39;plotOptions&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
                <span class="token string single-quoted-string">&#39;bar&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
                    <span class="token string single-quoted-string">&#39;horizontal&#39;</span> <span class="token operator">=&gt;</span> <span class="token constant boolean">true</span><span class="token punctuation">,</span>
                    <span class="token string single-quoted-string">&#39;dataLabels&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
                        <span class="token string single-quoted-string">&#39;position&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;top&#39;</span><span class="token punctuation">,</span>
                    <span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token string single-quoted-string">&#39;dataLabels&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
                <span class="token string single-quoted-string">&#39;enabled&#39;</span> <span class="token operator">=&gt;</span> <span class="token constant boolean">true</span><span class="token punctuation">,</span>
                <span class="token string single-quoted-string">&#39;offsetX&#39;</span> <span class="token operator">=&gt;</span> <span class="token operator">-</span><span class="token number">6</span><span class="token punctuation">,</span>
                <span class="token string single-quoted-string">&#39;style&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
                    <span class="token string single-quoted-string">&#39;fontSize&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;12px&#39;</span><span class="token punctuation">,</span>
                    <span class="token string single-quoted-string">&#39;colors&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;#fff&#39;</span><span class="token punctuation">]</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token string single-quoted-string">&#39;stroke&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
                <span class="token string single-quoted-string">&#39;show&#39;</span> <span class="token operator">=&gt;</span> <span class="token constant boolean">true</span><span class="token punctuation">,</span>
                <span class="token string single-quoted-string">&#39;width&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">1</span><span class="token punctuation">,</span>
                <span class="token string single-quoted-string">&#39;colors&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;#fff&#39;</span><span class="token punctuation">]</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token string single-quoted-string">&#39;xaxis&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
                <span class="token string single-quoted-string">&#39;categories&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 处理图表数据
     */</span>
    <span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function-definition function">buildData</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 执行你的数据查询逻辑</span>
        <span class="token variable">$data</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
            <span class="token punctuation">[</span>
                <span class="token string single-quoted-string">&#39;data&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token number">44</span><span class="token punctuation">,</span> <span class="token number">55</span><span class="token punctuation">,</span> <span class="token number">41</span><span class="token punctuation">,</span> <span class="token number">64</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">,</span> <span class="token number">43</span><span class="token punctuation">,</span> <span class="token number">21</span><span class="token punctuation">]</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">[</span>
                <span class="token string single-quoted-string">&#39;data&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token number">53</span><span class="token punctuation">,</span> <span class="token number">32</span><span class="token punctuation">,</span> <span class="token number">33</span><span class="token punctuation">,</span> <span class="token number">52</span><span class="token punctuation">,</span> <span class="token number">13</span><span class="token punctuation">,</span> <span class="token number">44</span><span class="token punctuation">,</span> <span class="token number">32</span><span class="token punctuation">]</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token variable">$categories</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">2001</span><span class="token punctuation">,</span> <span class="token number">2002</span><span class="token punctuation">,</span> <span class="token number">2003</span><span class="token punctuation">,</span> <span class="token number">2004</span><span class="token punctuation">,</span> <span class="token number">2005</span><span class="token punctuation">,</span> <span class="token number">2006</span><span class="token punctuation">,</span> <span class="token number">2007</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">withData</span><span class="token punctuation">(</span><span class="token variable">$data</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">withCategories</span><span class="token punctuation">(</span><span class="token variable">$categories</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 设置图表数据
     *
     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token keyword">array</span></span> <span class="token parameter">$data</span>
     *
     * <span class="token keyword">@return</span> $this
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">withData</span><span class="token punctuation">(</span><span class="token keyword type-hint">array</span> <span class="token variable">$data</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">option</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;series&#39;</span><span class="token punctuation">,</span> <span class="token variable">$data</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 设置图表类别.
     *
     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token keyword">array</span></span> <span class="token parameter">$data</span>
     *
     * <span class="token keyword">@return</span> $this
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">withCategories</span><span class="token punctuation">(</span><span class="token keyword type-hint">array</span> <span class="token variable">$data</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">option</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;xaxis.categories&#39;</span><span class="token punctuation">,</span> <span class="token variable">$data</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 渲染图表
     *
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">string</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">buildData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> <span class="token keyword static-context">parent</span><span class="token operator">::</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Widgets<span class="token punctuation">\\</span>Charts<span class="token punctuation">\\</span>MyBar</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Widgets<span class="token punctuation">\\</span>Card</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Layout<span class="token punctuation">\\</span>Content</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">MyController</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">index</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Content</span> <span class="token variable">$content</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token variable">$content</span><span class="token operator">-&gt;</span><span class="token function">body</span><span class="token punctuation">(</span>
            <span class="token class-name static-context">Card</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;我的图表&#39;</span><span class="token punctuation">,</span> <span class="token class-name static-context">MyBar</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果</p><p><img src="`+l+`" alt="" loading="lazy"></p><h3 id="图表与后端api交互" tabindex="-1"><a class="header-anchor" href="#图表与后端api交互" aria-hidden="true">#</a> 图表与后端API交互</h3><p>如果你的图表需要与后端API交互，可以参考以下方式</p><blockquote><p>{tip} 为了方便阅读，这里的示例代码直接继承前面定义的<code>MyBar</code>类。</p></blockquote><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Widgets<span class="token punctuation">\\</span>Charts</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Request</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">MyAjaxBar</span> <span class="token keyword">extends</span> <span class="token class-name">MyBar</span>
<span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token variable">$id</span><span class="token punctuation">;</span>
    <span class="token keyword">protected</span> <span class="token variable">$username</span><span class="token punctuation">;</span>
    
    <span class="token comment">// 这里的参数一定要设置默认值</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">__construct</span><span class="token punctuation">(</span><span class="token variable">$id</span> <span class="token operator">=</span> <span class="token constant">null</span><span class="token punctuation">,</span> <span class="token variable">$username</span> <span class="token operator">=</span> <span class="token constant">null</span><span class="token punctuation">)</span> 
    <span class="token punctuation">{</span>
        <span class="token keyword static-context">parent</span><span class="token operator">::</span><span class="token function">__construct</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">id</span> <span class="token operator">=</span> <span class="token variable">$id</span><span class="token punctuation">;</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">username</span> <span class="token operator">=</span> <span class="token variable">$username</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token doc-comment comment">/**
     * 处理请求
     * 如果你的图表类中包含此方法，则可以通过此方法处理前端通过ajax提交的获取图表数据的请求
     *
     * <span class="token keyword">@param</span> <span class="token class-name">Request</span> <span class="token parameter">$request</span>
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">mixed</span><span class="token punctuation">|</span><span class="token keyword">void</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">handle</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Request</span> <span class="token variable">$request</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 获取 parameters 方法设置的自定义参数</span>
        <span class="token variable">$id</span> <span class="token operator">=</span> <span class="token variable">$request</span><span class="token operator">-&gt;</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;id&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token variable">$username</span> <span class="token operator">=</span> <span class="token variable">$request</span><span class="token operator">-&gt;</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;username&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token keyword">switch</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword type-casting">int</span><span class="token punctuation">)</span> <span class="token variable">$request</span><span class="token operator">-&gt;</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;option&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">case</span> <span class="token number">30</span><span class="token punctuation">:</span>
                <span class="token comment">// 你的数据查询逻辑</span>
                <span class="token variable">$data</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
                    <span class="token punctuation">[</span>
                        <span class="token string single-quoted-string">&#39;data&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token number">44</span><span class="token punctuation">,</span> <span class="token number">55</span><span class="token punctuation">,</span> <span class="token number">41</span><span class="token punctuation">,</span> <span class="token number">64</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">,</span> <span class="token number">43</span><span class="token punctuation">,</span> <span class="token number">21</span><span class="token punctuation">]</span>
                    <span class="token punctuation">]</span><span class="token punctuation">,</span>
                    <span class="token punctuation">[</span>
                        <span class="token string single-quoted-string">&#39;data&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token number">53</span><span class="token punctuation">,</span> <span class="token number">32</span><span class="token punctuation">,</span> <span class="token number">33</span><span class="token punctuation">,</span> <span class="token number">52</span><span class="token punctuation">,</span> <span class="token number">13</span><span class="token punctuation">,</span> <span class="token number">44</span><span class="token punctuation">,</span> <span class="token number">32</span><span class="token punctuation">]</span>
                    <span class="token punctuation">]</span>
                <span class="token punctuation">]</span><span class="token punctuation">;</span>
                <span class="token variable">$categories</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">2001</span><span class="token punctuation">,</span> <span class="token number">2002</span><span class="token punctuation">,</span> <span class="token number">2003</span><span class="token punctuation">,</span> <span class="token number">2004</span><span class="token punctuation">,</span> <span class="token number">2005</span><span class="token punctuation">,</span> <span class="token number">2006</span><span class="token punctuation">,</span> <span class="token number">2007</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token keyword">case</span> <span class="token number">28</span><span class="token punctuation">:</span>
                <span class="token comment">// 你的数据查询逻辑</span>
                <span class="token variable">$data</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
                    <span class="token punctuation">[</span>
                        <span class="token string single-quoted-string">&#39;data&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token number">44</span><span class="token punctuation">,</span> <span class="token number">55</span><span class="token punctuation">,</span> <span class="token number">41</span><span class="token punctuation">,</span> <span class="token number">64</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">,</span> <span class="token number">43</span><span class="token punctuation">,</span> <span class="token number">21</span><span class="token punctuation">]</span>
                    <span class="token punctuation">]</span><span class="token punctuation">,</span>
                    <span class="token punctuation">[</span>
                        <span class="token string single-quoted-string">&#39;data&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token number">53</span><span class="token punctuation">,</span> <span class="token number">32</span><span class="token punctuation">,</span> <span class="token number">33</span><span class="token punctuation">,</span> <span class="token number">52</span><span class="token punctuation">,</span> <span class="token number">13</span><span class="token punctuation">,</span> <span class="token number">44</span><span class="token punctuation">,</span> <span class="token number">32</span><span class="token punctuation">]</span>
                    <span class="token punctuation">]</span>
                <span class="token punctuation">]</span><span class="token punctuation">;</span>
                <span class="token variable">$categories</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">2001</span><span class="token punctuation">,</span> <span class="token number">2002</span><span class="token punctuation">,</span> <span class="token number">2003</span><span class="token punctuation">,</span> <span class="token number">2004</span><span class="token punctuation">,</span> <span class="token number">2005</span><span class="token punctuation">,</span> <span class="token number">2006</span><span class="token punctuation">,</span> <span class="token number">2007</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token keyword">case</span> <span class="token number">7</span><span class="token punctuation">:</span>
            <span class="token keyword">default</span><span class="token punctuation">:</span>
                <span class="token comment">// 你的数据查询逻辑</span>
                <span class="token variable">$data</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
                    <span class="token punctuation">[</span>
                        <span class="token string single-quoted-string">&#39;data&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token number">44</span><span class="token punctuation">,</span> <span class="token number">55</span><span class="token punctuation">,</span> <span class="token number">41</span><span class="token punctuation">,</span> <span class="token number">64</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">,</span> <span class="token number">43</span><span class="token punctuation">,</span> <span class="token number">21</span><span class="token punctuation">]</span>
                    <span class="token punctuation">]</span><span class="token punctuation">,</span>
                    <span class="token punctuation">[</span>
                        <span class="token string single-quoted-string">&#39;data&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token number">53</span><span class="token punctuation">,</span> <span class="token number">32</span><span class="token punctuation">,</span> <span class="token number">33</span><span class="token punctuation">,</span> <span class="token number">52</span><span class="token punctuation">,</span> <span class="token number">13</span><span class="token punctuation">,</span> <span class="token number">44</span><span class="token punctuation">,</span> <span class="token number">32</span><span class="token punctuation">]</span>
                    <span class="token punctuation">]</span>
                <span class="token punctuation">]</span><span class="token punctuation">;</span>
                <span class="token variable">$categories</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">2001</span><span class="token punctuation">,</span> <span class="token number">2002</span><span class="token punctuation">,</span> <span class="token number">2003</span><span class="token punctuation">,</span> <span class="token number">2004</span><span class="token punctuation">,</span> <span class="token number">2005</span><span class="token punctuation">,</span> <span class="token number">2006</span><span class="token punctuation">,</span> <span class="token number">2007</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">withData</span><span class="token punctuation">(</span><span class="token variable">$data</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">withCategories</span><span class="token punctuation">(</span><span class="token variable">$categories</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

	<span class="token doc-comment comment">/**
 	 * 这里返回需要异步传递到 handler 方法的参数 
 	 * 
	 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">array</span></span>
	 */</span>
	<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">parameters</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">array</span>
	<span class="token punctuation">{</span>
	    <span class="token keyword">return</span> <span class="token punctuation">[</span>
	        <span class="token string single-quoted-string">&#39;id&#39;</span> 	   <span class="token operator">=&gt;</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">id</span><span class="token punctuation">,</span>
	        <span class="token string single-quoted-string">&#39;username&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">username</span><span class="token punctuation">,</span>
		<span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 这里覆写父类的方法，不再查询数据
     */</span>
    <span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function-definition function">buildData</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用户点击构建下拉菜单加载不同的图表数据</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Widgets<span class="token punctuation">\\</span>Charts<span class="token punctuation">\\</span>MyAjaxBar</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Widgets<span class="token punctuation">\\</span>Dropdown</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Widgets<span class="token punctuation">\\</span>Box</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Layout<span class="token punctuation">\\</span>Row</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Layout<span class="token punctuation">\\</span>Content</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">MyController</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">index</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Content</span> <span class="token variable">$content</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token variable">$content</span><span class="token operator">-&gt;</span><span class="token function">body</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">Row</span> <span class="token variable">$row</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 构建下拉菜单，当点击菜单时发起请求获取数据重新渲染图表</span>
            <span class="token variable">$menu</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
                <span class="token string single-quoted-string">&#39;7&#39;</span>  <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;最近7天&#39;</span><span class="token punctuation">,</span>
                <span class="token string single-quoted-string">&#39;28&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;最近28天&#39;</span><span class="token punctuation">,</span>
                <span class="token string single-quoted-string">&#39;30&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;最近30天&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token variable">$dropdown</span> <span class="token operator">=</span> <span class="token class-name static-context">Dropdown</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token variable">$menu</span><span class="token punctuation">)</span>
                <span class="token operator">-&gt;</span><span class="token function">button</span><span class="token punctuation">(</span><span class="token function">current</span><span class="token punctuation">(</span><span class="token variable">$menu</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token operator">-&gt;</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token operator">-&gt;</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">$v</span><span class="token punctuation">,</span> <span class="token variable">$k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token comment">// 此处设置的 data-xxx 属性会作为post数据发送到后端api</span>
                    <span class="token keyword">return</span> <span class="token string double-quoted-string">&quot;&lt;a class=&#39;switch-bar&#39; data-option=&#39;<span class="token interpolation"><span class="token punctuation">{</span><span class="token variable">$k</span><span class="token punctuation">}</span></span>&#39;&gt;<span class="token interpolation"><span class="token punctuation">{</span><span class="token variable">$v</span><span class="token punctuation">}</span></span>&lt;/a&gt;&quot;</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

			<span class="token comment">// 传递自定义参数</span>
            <span class="token variable">$id</span> <span class="token operator">=</span> <span class="token operator">...</span><span class="token punctuation">;</span>
            <span class="token variable">$username</span> <span class="token operator">=</span> <span class="token operator">...</span><span class="token punctuation">;</span>

            <span class="token variable">$bar</span> <span class="token operator">=</span> <span class="token class-name static-context">MyAjaxBar</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token variable">$id</span><span class="token punctuation">,</span> <span class="token variable">$username</span><span class="token punctuation">)</span>
                <span class="token operator">-&gt;</span><span class="token function">fetching</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;$(&quot;#my-box&quot;).loading()&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 设置loading效果</span>
                <span class="token operator">-&gt;</span><span class="token function">fetched</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;$(&quot;#my-box&quot;).loading(false)&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 移除loading效果</span>
                <span class="token operator">-&gt;</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;.switch-bar&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 设置图表点击菜单则重新发起请求，且被点击的目标元素上的 data-xxx 属性会被作为post数据发送到后端API</span>

            <span class="token variable">$box</span> <span class="token operator">=</span> <span class="token class-name static-context">Box</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;我的图表2&#39;</span><span class="token punctuation">,</span> <span class="token variable">$bar</span><span class="token punctuation">)</span>
                <span class="token operator">-&gt;</span><span class="token function">id</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;my-box&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 设置盒子的ID</span>
                <span class="token operator">-&gt;</span><span class="token function">tool</span><span class="token punctuation">(</span><span class="token variable">$dropdown</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 设置下拉菜单按钮</span>

            <span class="token variable">$row</span><span class="token operator">-&gt;</span><span class="token function">column</span><span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">,</span> <span class="token variable">$box</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果</p><p><img src="`+u+`" alt="" loading="lazy"></p><p><a href="js"></a></p><h3 id="设置图表配置为可执行js代码" tabindex="-1"><a class="header-anchor" href="#设置图表配置为可执行js代码" aria-hidden="true">#</a> 设置图表配置为可执行JS代码</h3><p>如果你需要在图表配置加入可执行的JS代码，可参考以下方式</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">use</span> Dcat\\Admin\\Support\\JavaScript<span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Admin</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Widgets<span class="token punctuation">\\</span>ApexCharts<span class="token punctuation">\\</span>Chart</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">MyBar</span> <span class="token keyword">extends</span> <span class="token class-name">Chart</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">__construct</span><span class="token punctuation">(</span><span class="token variable">$containerSelector</span> <span class="token operator">=</span> <span class="token constant">null</span><span class="token punctuation">,</span> <span class="token variable">$options</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword static-context">parent</span><span class="token operator">::</span><span class="token function">__construct</span><span class="token punctuation">(</span><span class="token variable">$containerSelector</span><span class="token punctuation">,</span> <span class="token variable">$options</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">setUpOptions</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 初始化图表配置
     */</span>
    <span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function-definition function">setUpOptions</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$number</span> <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
    
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">option</span><span class="token punctuation">(</span>
            <span class="token string single-quoted-string">&#39;plotOptions.radialBar.dataLabels.total.formatter&#39;</span><span class="token punctuation">,</span>
            <span class="token comment">// 这个值最后段代码会作为JS代码执行</span>
            <span class="token class-name static-context">JavaScript</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;function () { return <span class="token interpolation"><span class="token punctuation">{</span><span class="token variable">$number</span><span class="token punctuation">}</span></span>; }&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token operator">...</span>
    <span class="token punctuation">}</span>
    
    <span class="token operator">...</span>   
<span class="token punctuation">}</span>    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17);function h(w,$){const a=e("ExternalLinkIcon");return o(),c("div",null,[k,n("p",null,[d,s("引入了"),n("a",v,[s("apexcharts图表"),t(a)]),s("功能，通过"),m,s("这个类可以帮助开发者快速渲染图表。")]),b,g,n("blockquote",null,[n("p",null,[s("{tip} 更多类型的图表，请参考"),n("a",y,[s("apexcharts官方文档"),t(a)]),s("。")])]),f])}const _=p(r,[["render",h],["__file","widgets-charts.html.vue"]]);export{_ as default};
