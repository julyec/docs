import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-c17653d8.js";const t={},p=e(`<h1 id="模型树动作" tabindex="-1"><a class="header-anchor" href="#模型树动作" aria-hidden="true">#</a> 模型树动作</h1><h3 id="工具栏" tabindex="-1"><a class="header-anchor" href="#工具栏" aria-hidden="true">#</a> 工具栏</h3><p>运行命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan admin:action
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后输入 <code>7</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> Which <span class="token builtin class-name">type</span> of action would you like to make?:
  <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> default
  <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> grid-batch
  <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> grid-row
  <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> grid-tool
  <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> form-tool
  <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span> show-tool
  <span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span> tree-row
  <span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">]</span> tree-tool

 <span class="token operator">&gt;</span> <span class="token number">7</span> <span class="token comment"># 输入 7</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接着输入 <code>Action</code> 类名称，这里需要输入 <code>大驼峰</code> 风格的英文字母</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
 Please enter a name of action class:
 <span class="token operator">&gt;</span> Copy

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>类名输入完成之后会出现以下信息让开发者输入类的命名空间，默认的命名空间是 <code>App\\Admin\\Actions\\Tree</code>，这里使用默认的就行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
 Please enter the namespace of action class <span class="token punctuation">[</span>App<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Actions<span class="token punctuation">\\</span>Tree<span class="token punctuation">]</span>:
 <span class="token operator">&gt;</span> 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后生成文件如下</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Actions<span class="token punctuation">\\</span>Tree</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Actions<span class="token punctuation">\\</span>Response</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Tree<span class="token punctuation">\\</span>AbstractTool</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Traits<span class="token punctuation">\\</span>HasPermissions</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Contracts<span class="token punctuation">\\</span>Auth<span class="token punctuation">\\</span>Authenticatable</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Database<span class="token punctuation">\\</span>Eloquent<span class="token punctuation">\\</span>Model</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Request</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">Copy</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractTool</span>
<span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 按钮标题
     *
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">string</span></span>
     */</span>
	<span class="token keyword">protected</span> <span class="token variable">$title</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;Title&#39;</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 处理请求，如果不需要接口处理，请直接删除这个方法
     *
     * <span class="token keyword">@param</span> <span class="token class-name">Request</span> <span class="token parameter">$request</span>
     *
     * <span class="token keyword">@return</span> <span class="token class-name">Response</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">handle</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Request</span> <span class="token variable">$request</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">response</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token operator">-&gt;</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Processed successfully.&#39;</span><span class="token punctuation">)</span>
            <span class="token operator">-&gt;</span><span class="token function">redirect</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 如果只是a标签跳转，则在这里返回跳转链接即可
     * 
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">string</span><span class="token punctuation">|</span><span class="token keyword">void</span></span>
     */</span>
    <span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function-definition function">href</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// return admin_url(&#39;auth/users&#39;);</span>
    <span class="token punctuation">}</span>
    
     <span class="token comment">// 如果你想自定义动作按钮的HTML，可以重写此方法</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">html</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword static-context">parent</span><span class="token operator">::</span><span class="token function">html</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 确认弹窗信息，如不需要可以删除此方法 
     * 
	 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">string</span><span class="token punctuation">|</span><span class="token keyword">array</span><span class="token punctuation">|</span><span class="token keyword">void</span></span>
	 */</span>
	<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">confirm</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token comment">// return [&#39;Confirm?&#39;, &#39;contents&#39;];</span>
	<span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 权限判断，如不需要可以删除此方法 
     * 
     * <span class="token keyword">@param</span> <span class="token class-name">Model<span class="token punctuation">|</span>Authenticatable<span class="token punctuation">|</span>HasPermissions<span class="token punctuation">|</span><span class="token keyword">null</span></span> <span class="token parameter">$user</span>
     *
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">bool</span></span>
     */</span>
    <span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function-definition function">authorize</span><span class="token punctuation">(</span><span class="token variable">$user</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">bool</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token constant boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 返回请求接口的参数，如不需要可以删除此方法
     * 
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">array</span></span>
     */</span>
    <span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function-definition function">parameters</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$tree</span><span class="token operator">-&gt;</span><span class="token function">tools</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name class-name-fully-qualified type-declaration">Tree<span class="token punctuation">\\</span>Tools</span> <span class="token variable">$tools</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token variable">$tools</span><span class="token operator">-&gt;</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Copy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="行操作" tabindex="-1"><a class="header-anchor" href="#行操作" aria-hidden="true">#</a> 行操作</h3><p>运行命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan admin:action
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后输入 <code>6</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> Which <span class="token builtin class-name">type</span> of action would you like to make?:
  <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> default
  <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> grid-batch
  <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> grid-row
  <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> grid-tool
  <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> form-tool
  <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span> show-tool
  <span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span> tree-row
  <span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">]</span> tree-tool

 <span class="token operator">&gt;</span> <span class="token number">6</span> <span class="token comment"># 输入 6</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接着输入 <code>Action</code> 类名称，这里需要输入 <code>大驼峰</code> 风格的英文字母</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
 Please enter a name of action class:
 <span class="token operator">&gt;</span> Copy

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>类名输入完成之后会出现以下信息让开发者输入类的命名空间，默认的命名空间是 <code>App\\Admin\\Actions\\Tree</code>，这里使用默认的就行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
 Please enter the namespace of action class <span class="token punctuation">[</span>App<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Actions<span class="token punctuation">\\</span>Tree<span class="token punctuation">]</span>:
 <span class="token operator">&gt;</span> 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后生成文件如下</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Actions<span class="token punctuation">\\</span>Tree</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Tree<span class="token punctuation">\\</span>RowAction</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Actions<span class="token punctuation">\\</span>Response</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Traits<span class="token punctuation">\\</span>HasPermissions</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Contracts<span class="token punctuation">\\</span>Auth<span class="token punctuation">\\</span>Authenticatable</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Database<span class="token punctuation">\\</span>Eloquent<span class="token punctuation">\\</span>Model</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Request</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">Copy</span> <span class="token keyword">extends</span> <span class="token class-name">RowAction</span>
<span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">string</span></span>
     */</span>
	<span class="token keyword">protected</span> <span class="token variable">$title</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;Title&#39;</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 处理请求，如果不需要接口处理，请直接删除这个方法 
     *
     * <span class="token keyword">@param</span> <span class="token class-name">Request</span> <span class="token parameter">$request</span>
     *
     * <span class="token keyword">@return</span> <span class="token class-name">Response</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">handle</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Request</span> <span class="token variable">$request</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
    	<span class="token comment">// 获取主键</span>
    	<span class="token variable">$key</span> <span class="token operator">=</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">getKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">response</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token operator">-&gt;</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Processed successfully.&#39;</span><span class="token punctuation">)</span>
            <span class="token operator">-&gt;</span><span class="token function">redirect</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 返回跳转地址，如果不需要可以删除
     * 
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">string</span><span class="token punctuation">|</span><span class="token keyword">void</span></span>
     */</span>
    <span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function-definition function">href</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// return admin_url(&#39;auth/users/&#39;.$this-&gt;getKey());</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 确认弹窗信息，如果不需要可以删除 
     * 
	 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">string</span><span class="token punctuation">|</span><span class="token keyword">array</span><span class="token punctuation">|</span><span class="token keyword">void</span></span>
	 */</span>
	<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">confirm</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token comment">// return [&#39;Confirm?&#39;, &#39;contents&#39;];</span>
	<span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 权限判断，如果不需要可以删除  
     * 
     * <span class="token keyword">@param</span> <span class="token class-name">Model<span class="token punctuation">|</span>Authenticatable<span class="token punctuation">|</span>HasPermissions<span class="token punctuation">|</span><span class="token keyword">null</span></span> <span class="token parameter">$user</span>
     *
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">bool</span></span>
     */</span>
    <span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function-definition function">authorize</span><span class="token punctuation">(</span><span class="token variable">$user</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">bool</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token constant boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$tree</span><span class="token operator">-&gt;</span><span class="token function">actions</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Copy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,27),c=[p];function i(o,l){return s(),a("div",null,c)}const r=n(t,[["render",i],["__file","action-tree.html.vue"]]);export{r as default};
