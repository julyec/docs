import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-c17653d8.js";const t={},p=e(`<h1 id="model-tree-action" tabindex="-1"><a class="header-anchor" href="#model-tree-action" aria-hidden="true">#</a> Model tree action</h1><h3 id="toolbar" tabindex="-1"><a class="header-anchor" href="#toolbar" aria-hidden="true">#</a> Toolbar</h3><p>Run command</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan admin:action
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Then enter <code>7</code>.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> Which <span class="token builtin class-name">type</span> of action would you like to make?:
  <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> default
  <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> grid-batch
  <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> grid-row
  <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> grid-tool
  <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> form-tool
  <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span> show-tool
  <span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span> tree-row
  <span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">]</span> tree-tool

 <span class="token operator">&gt;</span> <span class="token number">7</span> <span class="token comment"># Enter 7</span>
 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Next, type in the name of the <code>Action</code> class in <code>PascalCase</code> style.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
 Please enter a name of action class:
 <span class="token operator">&gt;</span> Copy

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The default namespace is <code>App\\Admin\\Actions\\Tree</code>, just use the default one here.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
 Please enter the namespace of action class <span class="token punctuation">[</span>App<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Actions<span class="token punctuation">\\</span>Tree<span class="token punctuation">]</span>:
 <span class="token operator">&gt;</span> 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The final file is as follows</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

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
     * Button Title
     *
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">string</span></span>
     */</span>
	<span class="token keyword">protected</span> <span class="token variable">$title</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;Title&#39;</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Process the request, if you don&#39;t need the interface to process it, simply delete this method.
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
     * If it&#39;s just a tag jump, then just return the jump link here
     * 
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">string</span><span class="token punctuation">|</span><span class="token keyword">void</span></span>
     */</span>
    <span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function-definition function">href</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// return admin_url(&#39;auth/users&#39;);</span>
    <span class="token punctuation">}</span>
    
     <span class="token comment">// If you want to customize the HTML of the action button, you can rewrite this method</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">html</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword static-context">parent</span><span class="token operator">::</span><span class="token function">html</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * Confirm the pop-up message, and delete this method if you don&#39;t need it. 
     * 
	 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">string</span><span class="token punctuation">|</span><span class="token keyword">array</span><span class="token punctuation">|</span><span class="token keyword">void</span></span>
	 */</span>
	<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">confirm</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token comment">// return [&#39;Confirm?&#39;, &#39;contents&#39;];</span>
	<span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * Check Permissions. If you do not need this method can be deleted. 
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
     * Returns the parameters of the requesting interface, or removes this method if not required.
     * 
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">array</span></span>
     */</span>
    <span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function-definition function">parameters</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Usage</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$tree</span><span class="token operator">-&gt;</span><span class="token function">tools</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name class-name-fully-qualified type-declaration">Tree<span class="token punctuation">\\</span>Tools</span> <span class="token variable">$tools</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token variable">$tools</span><span class="token operator">-&gt;</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Copy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="line-operations" tabindex="-1"><a class="header-anchor" href="#line-operations" aria-hidden="true">#</a> Line operations</h3><p>Run Command</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan admin:action
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Then enter <code>6</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> Which <span class="token builtin class-name">type</span> of action would you like to make?:
  <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> default
  <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> grid-batch
  <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> grid-row
  <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> grid-tool
  <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> form-tool
  <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span> show-tool
  <span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span> tree-row
  <span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">]</span> tree-tool

 <span class="token operator">&gt;</span> <span class="token number">6</span> <span class="token comment"># Enter 6</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Next, enter the name of the <code>Action</code> class, here you need to enter the letters of the <code>Big Hump</code> style.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
 Please enter a name of action class:
 <span class="token operator">&gt;</span> Copy

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>After the class name is entered, the following message will appear for the developer to enter the namespace of the class, the default namespace is <code>App\\Admin\\Actions\\Tree</code>.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
 Please enter the namespace of action class <span class="token punctuation">[</span>App<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Actions<span class="token punctuation">\\</span>Tree<span class="token punctuation">]</span>:
 <span class="token operator">&gt;</span> 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The final file is generated as follows</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

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
     * Process the request, if you don&#39;t need the interface to process it, simply delete this method.
     *
     * <span class="token keyword">@param</span> <span class="token class-name">Request</span> <span class="token parameter">$request</span>
     *
     * <span class="token keyword">@return</span> <span class="token class-name">Response</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">handle</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Request</span> <span class="token variable">$request</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
    	<span class="token comment">// Get the primary key </span>
    	<span class="token variable">$key</span> <span class="token operator">=</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">getKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">response</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token operator">-&gt;</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Processed successfully.&#39;</span><span class="token punctuation">)</span>
            <span class="token operator">-&gt;</span><span class="token function">redirect</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * Returns the jump address, which can be deleted if not needed.
     * 
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">string</span><span class="token punctuation">|</span><span class="token keyword">void</span></span>
     */</span>
    <span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function-definition function">href</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// return admin_url(&#39;auth/users/&#39;.$this-&gt;getKey());</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * Acknowledge pop-up messages and delete them if they are not needed. 
     * 
	 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">string</span><span class="token punctuation">|</span><span class="token keyword">array</span><span class="token punctuation">|</span><span class="token keyword">void</span></span>
	 */</span>
	<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">confirm</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token comment">// return [&#39;Confirm?&#39;, &#39;contents&#39;];</span>
	<span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * Permissions are checked here and can be deleted if not needed.
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
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Usage</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$tree</span><span class="token operator">-&gt;</span><span class="token function">actions</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Copy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,27),i=[p];function c(o,l){return s(),a("div",null,i)}const r=n(t,[["render",c],["__file","action-tree.html.vue"]]);export{r as default};
