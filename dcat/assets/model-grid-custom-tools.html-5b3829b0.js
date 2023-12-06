import{_ as o,a as c}from"./aaMdymSxoY-567b8d29.js";import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as u,c as d,b as s,d as n,e as t,w as e,a as p}from"./app-98225aba.js";const r={},k=p(`<h1 id="工具栏" tabindex="-1"><a class="header-anchor" href="#工具栏" aria-hidden="true">#</a> 工具栏</h1><h2 id="工具按钮" tabindex="-1"><a class="header-anchor" href="#工具按钮" aria-hidden="true">#</a> 工具按钮</h2><p>在<code>model-grid</code>的头部默认有<code>批量删除</code>和<code>刷新</code>两个操作工具，如果有更多的操作需求，系统提供了自定义工具的功能,下面的示例添加一个性别分类选择的按钮组工具。</p><h3 id="设置工具栏按钮样式" tabindex="-1"><a class="header-anchor" href="#设置工具栏按钮样式" aria-hidden="true">#</a> 设置工具栏按钮样式</h3><p>工具栏按钮默认显示<code>outline</code>模式，效果如下</p><p>用法</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$grid</span><span class="token operator">-&gt;</span><span class="token function">toolsWithOutline</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 禁止</span>
<span class="token variable">$grid</span><span class="token operator">-&gt;</span><span class="token function">toolsWithOutline</span><span class="token punctuation">(</span><span class="token constant boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果 <img src="`+o+'" alt="" loading="lazy"></p><p>禁用<code>outline</code>后的效果</p><p><img src="'+c+`" alt="" loading="lazy"></p><p>如果你希望某个按钮不使用<code>outline</code>模式，可以在按钮的<code>class</code>属性中加上<code>disable-outline</code></p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$grid</span><span class="token operator">-&gt;</span><span class="token function">tools</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;&lt;a class=&quot;btn btn-primary disable-outline&quot;&gt;测试按钮&lt;/a&gt;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="自定义工具栏按钮" tabindex="-1"><a class="header-anchor" href="#自定义工具栏按钮" aria-hidden="true">#</a> 自定义工具栏按钮</h3><p>先定义工具类<code>app/Admin/Extensions/Tools/UserGender.php</code>继承工具类的基类<code>Dcat\\Admin\\Grid\\Tools\\AbstractTool</code>：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Grid<span class="token punctuation">\\</span>Tools</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Admin</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Grid<span class="token punctuation">\\</span>Tools<span class="token punctuation">\\</span>AbstractTool</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">UserGender</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractTool</span>
<span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function-definition function">script</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$url</span> <span class="token operator">=</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">fullUrlWithQuery</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;gender&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;_gender_&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> <span class="token string heredoc-string"><span class="token delimiter symbol"><span class="token punctuation">&lt;&lt;&lt;</span>JS</span>
$(&#39;input:radio.user-gender&#39;).change(function () {
    var url = &quot;<span class="token interpolation"><span class="token variable">$url</span></span>&quot;.replace(&#39;_gender_&#39;, $(this).val());

    Dcat.reload(url);
});
<span class="token delimiter symbol">JS<span class="token punctuation">;</span></span></span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name static-context">Admin</span><span class="token operator">::</span><span class="token function">script</span><span class="token punctuation">(</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">script</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token variable">$options</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
            <span class="token string single-quoted-string">&#39;all&#39;</span>   <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;All&#39;</span><span class="token punctuation">,</span>
            <span class="token string single-quoted-string">&#39;m&#39;</span>     <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;Male&#39;</span><span class="token punctuation">,</span>
            <span class="token string single-quoted-string">&#39;f&#39;</span>     <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;Female&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> <span class="token function">view</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;admin.tools.gender&#39;</span><span class="token punctuation">,</span> <span class="token function">compact</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;options&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>视图<code>admin.tools.gender</code>文件为<code>resources/views/admin/tools/gender.blade.php</code>:</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>btn-group<span class="token punctuation">&quot;</span></span> <span class="token attr-name">data-toggle</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>buttons<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    @foreach($options as $option =&gt; $label)
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>btn btn-default {{ request()-&gt;get(&#39;gender&#39;, &#39;all&#39;) == $option ? &#39;active&#39; : &#39;&#39; }}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>radio<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>user-gender<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{ $option }}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{$label}}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span>
    @endforeach
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在<code>Grid</code>引入这个工具：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$grid</span><span class="token operator">-&gt;</span><span class="token function">tools</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">UserGender</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在<code>model-grid</code>定义中接收到<code>gender</code>参数后，做好数据查询就可以了：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">in_array</span><span class="token punctuation">(</span><span class="token variable">$gender</span> <span class="token operator">=</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;gender&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;m&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;f&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token variable">$grid</span><span class="token operator">-&gt;</span><span class="token function">model</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">where</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;gender&#39;</span><span class="token punctuation">,</span> <span class="token variable">$gender</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以参考上面的方式来添加自己的工具。</p><h3 id="进阶用法" tabindex="-1"><a class="header-anchor" href="#进阶用法" aria-hidden="true">#</a> 进阶用法</h3><p>如果你的工具按钮需要与后端API进行交互，则可以参考以下方式定义：</p>`,24),v=s("code",null,"AbstractTool",-1),m=s("code",null,"Dcat\\Admin\\Actions\\Action",-1),b=p(`<div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Grid<span class="token punctuation">\\</span>Tools</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Grid<span class="token punctuation">\\</span>Tools<span class="token punctuation">\\</span>AbstractTool</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Request</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">SendMessage</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractTool</span>
<span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 按钮样式定义，默认 btn btn-white waves-effect
     * 
     * <span class="token keyword">@var</span> <span class="token class-name"><span class="token keyword">string</span></span> 
     */</span>
    <span class="token keyword">protected</span> <span class="token variable">$style</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;btn btn-white waves-effect&#39;</span><span class="token punctuation">;</span>
    
    
    <span class="token doc-comment comment">/**
     * 按钮文本
     * 
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">string</span><span class="token punctuation">|</span><span class="token keyword">void</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">title</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string single-quoted-string">&#39;发送提醒&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token doc-comment comment">/**
     *  确认弹窗，如果不需要则返回空即可
     * 
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">array</span><span class="token punctuation">|</span><span class="token keyword">string</span><span class="token punctuation">|</span><span class="token keyword">void</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">confirm</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 只显示标题</span>
<span class="token comment">//        return &#39;您确定要发送新的提醒消息吗？&#39;;</span>
        
        <span class="token comment">// 显示标题和内容</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;您确定要发送新的提醒消息吗？&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;确认信息内容，如没有可以留空&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token doc-comment comment">/**
     * 处理请求
     * 如果你的类中包含了此方法，则点击按钮后会自动向后端发起ajax请求，并且会通过此方法处理请求逻辑
     * 
     * <span class="token keyword">@param</span> <span class="token class-name">Request</span> <span class="token parameter">$request</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">handle</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Request</span> <span class="token variable">$request</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 你的代码逻辑</span>
        
        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">response</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;发送成功&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">refresh</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token doc-comment comment">/**
     * 设置请求参数
     * 
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">array</span><span class="token punctuation">|</span><span class="token keyword">void</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">parameters</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span>
            
        <span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Grid<span class="token punctuation">\\</span>Tools<span class="token punctuation">\\</span>SendMessage</span><span class="token punctuation">;</span>

<span class="token variable">$grid</span><span class="token operator">-&gt;</span><span class="token function">tools</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">SendMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="添加工具类" tabindex="-1"><a class="header-anchor" href="#添加工具类" aria-hidden="true">#</a> 添加工具类</h3><p><code>Grid::tools</code> 方法允许传入 <code>string</code>，<code>array</code>, <code>AbstractTool</code> 和 <code>闭包</code>等类型参数，下面是演示。</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment">// 传入字符串</span>
<span class="token variable">$grid</span><span class="token operator">-&gt;</span><span class="token function">tools</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;&lt;a class=&quot;btn btn-sm btn-default&quot;&gt;工具按钮测试&lt;/a&gt;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 传入数组</span>
<span class="token variable">$grid</span><span class="token operator">-&gt;</span><span class="token function">tools</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
	<span class="token string single-quoted-string">&#39;&lt;a class=&quot;btn btn-sm btn-default&quot;&gt;工具按钮测试&lt;/a&gt;&#39;</span><span class="token punctuation">,</span>
	<span class="token keyword">new</span> <span class="token class-name">UserGender</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 传入闭包</span>
<span class="token variable">$grid</span><span class="token operator">-&gt;</span><span class="token function">tools</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name class-name-fully-qualified type-declaration">Grid<span class="token punctuation">\\</span>Tools</span> <span class="token variable">$tools</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token variable">$tools</span><span class="token operator">-&gt;</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">UserGender</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="批量操作" tabindex="-1"><a class="header-anchor" href="#批量操作" aria-hidden="true">#</a> 批量操作</h2><h3 id="禁用批量删除" tabindex="-1"><a class="header-anchor" href="#禁用批量删除" aria-hidden="true">#</a> 禁用批量删除</h3><p>系统默认开启了批量删除操作的功能，如果要禁用批量删除操作：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$grid</span><span class="token operator">-&gt;</span><span class="token function">tools</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">$tools</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token variable">$tools</span><span class="token operator">-&gt;</span><span class="token function">batch</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">$batch</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token variable">$batch</span><span class="token operator">-&gt;</span><span class="token function">disableDelete</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 也可以这样</span>
<span class="token variable">$grid</span><span class="token operator">-&gt;</span><span class="token function">disableBatchDelete</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 或</span>
<span class="token variable">$grid</span><span class="token operator">-&gt;</span><span class="token function">batchActions</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name class-name-fully-qualified type-declaration">Grid<span class="token punctuation">\\</span>Tools<span class="token punctuation">\\</span>BatchActions</span> <span class="token variable">$batch</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token variable">$batch</span><span class="token operator">-&gt;</span><span class="token function">disableDelete</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自定义批量操作" tabindex="-1"><a class="header-anchor" href="#自定义批量操作" aria-hidden="true">#</a> 自定义批量操作</h3><p>下面通过扩展一个对文章批量发布的功能来演示自定义批量操作的功能：</p><p>先定义操作类<code>app/Admin/Extensions/Tools/ReleasePost.php</code>，继承<code>Dcat\\Admin\\Grid\\BatchAction</code>：</p>`,13),g=s("code",null,"BatchAction",-1),h=s("code",null,"Dcat\\Admin\\Actions\\Action",-1),f=p(`<div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Extensions<span class="token punctuation">\\</span>Tools</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Grid<span class="token punctuation">\\</span>BatchAction</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Request</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">ReleasePost</span> <span class="token keyword">extends</span> <span class="token class-name">BatchAction</span>
<span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token variable">$action</span><span class="token punctuation">;</span>

    <span class="token comment">// 注意action的构造方法参数一定要给默认值</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">__construct</span><span class="token punctuation">(</span><span class="token variable">$title</span> <span class="token operator">=</span> <span class="token constant">null</span><span class="token punctuation">,</span> <span class="token variable">$action</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">title</span> <span class="token operator">=</span> <span class="token variable">$title</span><span class="token punctuation">;</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">action</span> <span class="token operator">=</span> <span class="token variable">$action</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// 确认弹窗信息</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">confirm</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string single-quoted-string">&#39;您确定要发布已选中的文章吗？&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// 处理请求</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">handle</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Request</span> <span class="token variable">$request</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 获取选中的文章ID数组</span>
        <span class="token variable">$keys</span> <span class="token operator">=</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">getKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token comment">// 获取请求参数</span>
        <span class="token variable">$action</span> <span class="token operator">=</span> <span class="token variable">$request</span><span class="token operator">-&gt;</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;action&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token class-name static-context">Post</span><span class="token operator">::</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token variable">$keys</span><span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token variable">$post</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token variable">$post</span><span class="token operator">-&gt;</span><span class="token property">released</span> <span class="token operator">=</span> <span class="token variable">$action</span><span class="token punctuation">;</span>
            <span class="token variable">$post</span><span class="token operator">-&gt;</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        
        <span class="token variable">$message</span> <span class="token operator">=</span> <span class="token variable">$action</span> <span class="token operator">?</span> <span class="token string single-quoted-string">&#39;文章发布成功&#39;</span> <span class="token punctuation">:</span> <span class="token string single-quoted-string">&#39;文章下线成功&#39;</span><span class="token punctuation">;</span>
        
        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">response</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token variable">$message</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">refresh</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// 设置请求参数</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">parameters</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span>
            <span class="token string single-quoted-string">&#39;action&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">action</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>看代码的实现，通过click操作发送一个post请求，把选中的行数据<code>id</code>通过数组的形式传给后端接口，后端接口拿到<code>id</code>列表和要修改的状态来更新数据，然后前端刷新页面(pjax reload)，并弹出<code>toastr</code>提示操作成功。</p><p>在<code>model-grid</code>中加入这个批量操作功能：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$grid</span><span class="token operator">-&gt;</span><span class="token function">batchActions</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
	<span class="token keyword">new</span> <span class="token class-name">ReleasePost</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;发布文章&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	<span class="token keyword">new</span> <span class="token class-name">ReleasePost</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;文章下线&#39;</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  

<span class="token comment">// 也可以这么写</span>
<span class="token variable">$grid</span><span class="token operator">-&gt;</span><span class="token function">batchActions</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">$batch</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token variable">$batch</span><span class="token operator">-&gt;</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ReleasePost</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;发布文章&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token variable">$batch</span><span class="token operator">-&gt;</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ReleasePost</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;文章下线&#39;</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 或</span>
<span class="token variable">$grid</span><span class="token operator">-&gt;</span><span class="token function">tools</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">$tools</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token variable">$tools</span><span class="token operator">-&gt;</span><span class="token function">batch</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">$batch</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    	<span class="token variable">$batch</span><span class="token operator">-&gt;</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ReleasePost</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;发布文章&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    	<span class="token variable">$batch</span><span class="token operator">-&gt;</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ReleasePost</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;文章下线&#39;</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="获取复选框选中的id数组" tabindex="-1"><a class="header-anchor" href="#获取复选框选中的id数组" aria-hidden="true">#</a> 获取复选框选中的ID数组</h4><p>通过<code>getSelectedKeysScript</code>方法可以获取到复选框选中的ID数组，用法如下</p><blockquote><p>{tip} <code>getSelectedKeysScript</code>方法返回的是<code>js</code>代码，只能在<code>js</code>代码中使用。</p></blockquote><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Extensions<span class="token punctuation">\\</span>Tools</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Grid<span class="token punctuation">\\</span>BatchAction</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Request</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">ReleasePost</span> <span class="token keyword">extends</span> <span class="token class-name">BatchAction</span>
<span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token variable">$action</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">__construct</span><span class="token punctuation">(</span><span class="token variable">$title</span><span class="token punctuation">,</span> <span class="token variable">$action</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">title</span> <span class="token operator">=</span> <span class="token variable">$title</span><span class="token punctuation">;</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">action</span> <span class="token operator">=</span> <span class="token variable">$action</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// 确认弹窗信息</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">confirm</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string single-quoted-string">&#39;您确定要发布已选中的文章吗？&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// 处理请求</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">handle</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Request</span> <span class="token variable">$request</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token operator">...</span>
    <span class="token punctuation">}</span>
    
    <span class="token doc-comment comment">/**
     * 设置动作发起请求前的回调函数，返回false可以中断请求. 
     * 
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">string</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">actionScript</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token variable">$warning</span> <span class="token operator">=</span> <span class="token function">__</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;No data selected!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> <span class="token string heredoc-string"><span class="token delimiter symbol"><span class="token punctuation">&lt;&lt;&lt;</span>JS</span>
function (data, target, action) { 
    var key = <span class="token interpolation"><span class="token punctuation">{</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">getSelectedKeysScript</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>

    if (key.length === 0) {
        Dcat.warning(&#39;<span class="token interpolation"><span class="token punctuation">{</span><span class="token variable">$warning</span><span class="token punctuation">}</span></span>&#39;);
        return false;
    }

    // 设置主键为复选框选中的行ID数组
    action.options.key = key;
}
<span class="token delimiter symbol">JS<span class="token punctuation">;</span></span></span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="表单弹窗" tabindex="-1"><a class="header-anchor" href="#表单弹窗" aria-hidden="true">#</a> 表单弹窗</h3>`,9);function y(w,q){const a=l("RouterLink");return u(),d("div",null,[k,s("blockquote",null,[s("p",null,[n("{tip} "),v,n("类是属于"),m,n("的子类，本质也是动作类的一种，更详细用法请参考"),t(a,{to:"/zh/guide/action.html"},{default:e(()=>[n("动作类基本使用")]),_:1}),n("。")])]),b,s("blockquote",null,[s("p",null,[n("{tip} "),g,n("类是属于"),h,n("的子类，本质也是动作类的一种，更详细用法请参考"),t(a,{to:"/zh/guide/action.html"},{default:e(()=>[n("动作类基本使用")]),_:1}),n("。")])]),f,s("p",null,[n("请参考文档"),t(a,{to:"/zh/guide/widgets-form.html#modal"},{default:e(()=>[n("工具表单 - 弹窗")]),_:1})])])}const x=i(r,[["render",y],["__file","model-grid-custom-tools.html.vue"]]);export{x as default};
