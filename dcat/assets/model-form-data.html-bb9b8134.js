import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as t,c as o,b as s,d as n,e as c,w as i,a as l}from"./app-98225aba.js";const u={},d=s("h1",{id:"表单数据源",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#表单数据源","aria-hidden":"true"},"#"),n(" 表单数据源")],-1),r=s("h2",{id:"模型与数据仓库",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#模型与数据仓库","aria-hidden":"true"},"#"),n(" 模型与数据仓库")],-1),k=s("code",null,"Repository",-1),v=l(`<h2 id="数据来自模型" tabindex="-1"><a class="header-anchor" href="#数据来自模型" aria-hidden="true">#</a> 数据来自模型</h2><blockquote><p>{tip} 如果你的数据来自<code>Model</code>，那么你也可以直接使用<code>Model</code>实例，底层会自动把<code>Model</code>转化为数据仓库实例。</p></blockquote><p>当数据源支持模型时，只需创建一个非常简单的<code>Repository</code>类既可：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Repositories</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Repositories<span class="token punctuation">\\</span>EloquentRepository</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Models<span class="token punctuation">\\</span>Movie</span> <span class="token keyword">as</span> MovieModel<span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">Movie</span> <span class="token keyword">extends</span> <span class="token class-name">EloquentRepository</span>
<span class="token punctuation">{</span>
    <span class="token comment">// 这里定义你的模型类名</span>
    <span class="token keyword">protected</span> <span class="token variable">$eloquentClass</span> <span class="token operator">=</span> <span class="token class-name static-context">MovieModel</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">;</span>
    
    <span class="token comment">// 通过这个方法可以指定表单页查询的字段，默认&quot;*&quot;</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getFormColumns</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">getKeyName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;name&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;title&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;created_at&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Repositories<span class="token punctuation">\\</span>Movie</span><span class="token punctuation">;</span>

<span class="token variable">$form</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Form</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Movie</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token operator">...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数据来自外部api" tabindex="-1"><a class="header-anchor" href="#数据来自外部api" aria-hidden="true">#</a> 数据来自外部API</h2><p>下面以<code>豆瓣电影</code>的API为例子，来展示<code>Repository</code>的表单数据读写操作相关接口的用法：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Repositories</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Repositories<span class="token punctuation">\\</span>Repository</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Form</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">ComingSoon</span> <span class="token keyword">extends</span> <span class="token class-name">Repository</span>
<span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token variable">$api</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;https://api.douban.com/v2/movie/coming_soon&#39;</span><span class="token punctuation">;</span>
    
    <span class="token comment">// 返回你的id字段名称，默认“id”</span>
    <span class="token keyword">protected</span> <span class="token variable">$keyName</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;_id&#39;</span><span class="token punctuation">;</span>

    <span class="token comment">// 查询编辑页数据</span>
    <span class="token comment">// 这个方法需要返回一个数组</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">edit</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Form</span> <span class="token variable">$form</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 获取id</span>
        <span class="token variable">$id</span> <span class="token operator">=</span> <span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">getResourceId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token variable">$data</span> <span class="token operator">=</span> <span class="token function">file_get_contents</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;http://api.douban.com/v2/movie/subject/<span class="token interpolation"><span class="token variable">$id</span></span>&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> <span class="token function">json_decode</span><span class="token punctuation">(</span><span class="token variable">$data</span><span class="token punctuation">,</span> <span class="token constant boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// 这个方法用于在修改数据前查询原记录</span>
    <span class="token comment">// 如果使用了文件上传表单，当文件发生变更时会根据这个原始记录自动删除旧文件</span>
     <span class="token comment">// 如果不需要此数据返回空数组即可</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">updating</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Form</span> <span class="token variable">$form</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 获取id</span>
        <span class="token variable">$id</span> <span class="token operator">=</span> <span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">getResourceId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 修改操作</span>
    <span class="token comment">// 返回一个bool类型的数据</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">update</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Form</span> <span class="token variable">$form</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 获取id</span>
        <span class="token variable">$id</span> <span class="token operator">=</span> <span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">getResourceId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 获取要修改的数据</span>
        <span class="token variable">$attributes</span> <span class="token operator">=</span> <span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">updates</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// TODO</span>
        <span class="token comment">// 这里写你的修改逻辑</span>
        
        <span class="token keyword">return</span> <span class="token constant boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 这个方法用于在修改数据前查询原始数据</span>
    <span class="token comment">// 如果使用了文件上传表单，会根据这个数据自动删除文件</span>
    <span class="token comment">// 如果不需要此数据返回空数组即可</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">deleting</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Form</span> <span class="token variable">$form</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$id</span> <span class="token operator">=</span> <span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">getResourceId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token variable">$id</span> <span class="token operator">=</span> <span class="token function">explode</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;,&#39;</span><span class="token punctuation">,</span> <span class="token variable">$id</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//        $data = file_get_contents(&quot;http://api.douban.com/v2/movie/subject/$id&quot;);</span>
<span class="token comment">//</span>
<span class="token comment">//        return json_decode($data, true);</span>

        <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 删除数据</span>
    <span class="token comment">// $deletingData 是由 getDataWhenDeleting 方法返回的数据</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">destroy</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Form</span> <span class="token variable">$form</span><span class="token punctuation">,</span> <span class="token variable">$deletingData</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 注意这里的id可能是多个</span>
        <span class="token variable">$id</span> <span class="token operator">=</span> <span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">getResourceId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token comment">// 当使用批量删除功能时，这里的id是用“,”隔开的字符串</span>
        <span class="token variable">$id</span> <span class="token operator">=</span> <span class="token function">explode</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;,&#39;</span><span class="token punctuation">,</span> <span class="token variable">$id</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// TODO</span>
<span class="token comment">//        var_dump($id, $deletingData);</span>

        <span class="token keyword">return</span> <span class="token constant boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9);function m(b,g){const a=p("RouterLink");return t(),o("div",null,[d,r,s("p",null,[n("数据仓库("),k,n(")是一个可以提供特定接口对数据进行读写操作的类，通过数据仓库的引入，可以让页面的构建不再关心数据读写功能的具体实现，开发者只需要实现特定的操作接口即可轻松切换数据源。关于数据仓库的详细用法请参考文档"),c(a,{to:"/zh/guide/model-repository.html"},{default:i(()=>[n("数据仓库")]),_:1}),n("。")]),v])}const y=e(u,[["render",m],["__file","model-form-data.html.vue"]]);export{y as default};
