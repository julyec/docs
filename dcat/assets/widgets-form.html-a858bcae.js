import{_ as i}from"./MZIdO6PrwR-97ec0e7f.js";import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as e,o as u,c as r,a as s,b as n,d as t,w as o,e as a}from"./app-c17653d8.js";const d={},k=a(`<h1 id="工具表单" tabindex="-1"><a class="header-anchor" href="#工具表单" aria-hidden="true">#</a> 工具表单</h1><p>工具表单(<code>Dcat\\Admin\\Widgets\\Form</code>)用来构建表单和处理提交数据，可以很方便的独立处理数据，而不需要额外注册路由。</p><h3 id="基本使用" tabindex="-1"><a class="header-anchor" href="#基本使用" aria-hidden="true">#</a> 基本使用</h3><p>用命令<code>admin:form</code>来生成表单类文件：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan admin:form Setting
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>将会生成表单文件<code>app/Admin/Forms/Setting.php</code></p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Forms</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Widgets<span class="token punctuation">\\</span>Form</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Symfony<span class="token punctuation">\\</span>Component<span class="token punctuation">\\</span>HttpFoundation<span class="token punctuation">\\</span>Response</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">Setting</span> <span class="token keyword">extends</span> <span class="token class-name">Form</span>
<span class="token punctuation">{</span>
    <span class="token comment">// 处理表单提交请求</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">handle</span><span class="token punctuation">(</span><span class="token keyword type-hint">array</span> <span class="token variable">$input</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// dump($input);</span>

        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">response</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Processed successfully.&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">refresh</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 构建表单</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">form</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 弹出确认弹窗 </span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">confirm</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;您确定要提交表单吗&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;content&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;name&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">required</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">email</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;email&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">rules</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;email&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 返回表单数据，如不需要可以删除此方法
     *
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">array</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">default</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span>
            <span class="token string single-quoted-string">&#39;name&#39;</span>  <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;John Doe&#39;</span><span class="token punctuation">,</span>
            <span class="token string single-quoted-string">&#39;email&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;John.Doe@gmail.com&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),v=s("code",null,"form",-1),m=s("code",null,"default",-1),b=a(`<p>在页面中填入数据提交表单之后，请求会进入到<code>handle</code>方法中，在这里可以加入你的数据处理逻辑，处理完成之后可以通过<code>success</code>或<code>error</code>方法响应数据到前端：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">handle</span><span class="token punctuation">(</span><span class="token keyword type-hint">array</span> <span class="token variable">$input</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// $input是你接收到的表单数据</span>
        <span class="token comment">// 在这里可以写你的处理逻辑</span>


        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">response</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Processed successfully.&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">refresh</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后按照下面的方法将上面的表单放到你的页面中：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Forms<span class="token punctuation">\\</span>Setting</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Controllers<span class="token punctuation">\\</span>Controller</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Widgets<span class="token punctuation">\\</span>Card</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Layout<span class="token punctuation">\\</span>Content</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">UserController</span> <span class="token keyword">extends</span> <span class="token class-name">Controller</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">setting</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Content</span> <span class="token variable">$content</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token variable">$content</span>
            <span class="token operator">-&gt;</span><span class="token function">title</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;网站设置&#39;</span><span class="token punctuation">)</span>
            <span class="token operator">-&gt;</span><span class="token function">body</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Card</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Setting</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="弹出确认弹窗" tabindex="-1"><a class="header-anchor" href="#弹出确认弹窗" aria-hidden="true">#</a> 弹出确认弹窗</h3><p>第二个参数可忽略</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">confirm</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;title&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;content&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="响应方法" tabindex="-1"><a class="header-anchor" href="#响应方法" aria-hidden="true">#</a> 响应方法</h3>`,8),g=a(`<h3 id="自定义表单保存的后续行为" tabindex="-1"><a class="header-anchor" href="#自定义表单保存的后续行为" aria-hidden="true">#</a> 自定义表单保存的后续行为</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Forms</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Widgets<span class="token punctuation">\\</span>Form</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Symfony<span class="token punctuation">\\</span>Component<span class="token punctuation">\\</span>HttpFoundation<span class="token punctuation">\\</span>Response</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">Setting</span> <span class="token keyword">extends</span> <span class="token class-name">Form</span>
<span class="token punctuation">{</span>
    <span class="token operator">...</span>
    
    <span class="token doc-comment comment">/**
 	 * 设置表单保存成功后执行的JS
 	 *
	 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">string</span><span class="token punctuation">|</span><span class="token keyword">void</span></span>
	 */</span>
	<span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function-definition function">savedScript</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
	    <span class="token keyword">return</span> <span class="token string heredoc-string"><span class="token delimiter symbol"><span class="token punctuation">&lt;&lt;&lt;</span>JS</span>
		// data 为接口返回数据
		if (! data.status) {
			Dcat.error(data.message);

			return false;
		}

		Dcat.success(data.message);

		if (data.redirect) {
			Dcat.reload(data.redirect)
		}

		// 中止后续逻辑（默认逻辑）
		return false;
<span class="token delimiter symbol">JS<span class="token punctuation">;</span></span></span>
	<span class="token punctuation">}</span>

	<span class="token doc-comment comment">/**
	 * 设置表单保存失败后执行的JS
 	 * 
	 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">string</span><span class="token punctuation">|</span><span class="token keyword">void</span></span>
	 */</span>
	<span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function-definition function">errorScript</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token string heredoc-string"><span class="token delimiter symbol"><span class="token punctuation">&lt;&lt;&lt;</span>JS</span>
		var errorData = JSON.parse(response.responseText);
		
		if (errorData) {
			Dcat.error(errorData.message);
		} else {
			console.log(&#39;提交出错&#39;, response.responseText);
		}
		
		// 终止后续逻辑执行（默认逻辑）
		return false;
<span class="token delimiter symbol">JS<span class="token punctuation">;</span></span></span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="取消-启用表单的ajax提交" tabindex="-1"><a class="header-anchor" href="#取消-启用表单的ajax提交" aria-hidden="true">#</a> 取消/启用表单的Ajax提交</h3>`,3),f={href:"https://github.com/jqhph/dcat-admin/blob/2.0/resources/assets/dcat/js/extensions/Form.js",target:"_blank",rel:"noopener noreferrer"},h=a(`<div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">ajax</span><span class="token punctuation">(</span><span class="token constant boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="布局" tabindex="-1"><a class="header-anchor" href="#布局" aria-hidden="true">#</a> 布局</h3><p><code>column</code>多列布局</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Widgets<span class="token punctuation">\\</span>Form</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">Setting</span> <span class="token keyword">extends</span> <span class="token class-name">Form</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">form</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">column</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;text1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            
            <span class="token operator">...</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">column</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;text2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            
            <span class="token operator">...</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>    
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>tab</code>选项卡布局</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Widgets<span class="token punctuation">\\</span>Form</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">Setting</span> <span class="token keyword">extends</span> <span class="token class-name">Form</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">form</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">tab</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;选项卡1&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;text1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            
            <span class="token operator">...</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">tab</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;选项卡2&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;text2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            
            <span class="token operator">...</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>    
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>row</code>多行布局</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">form</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">row</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">$row</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token variable">$row</span><span class="token operator">-&gt;</span><span class="token function">width</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;text1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token operator">...</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">row</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">$row</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token variable">$row</span><span class="token operator">-&gt;</span><span class="token function">width</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;text2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token operator">...</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="在弹窗中显示" tabindex="-1"><a class="header-anchor" href="#在弹窗中显示" aria-hidden="true">#</a> 在弹窗中显示</h3><h4 id="基本用法" tabindex="-1"><a class="header-anchor" href="#基本用法" aria-hidden="true">#</a> 基本用法</h4><p>使用命令生成工具表单<code>php artisan admin:form ResetPassword</code>，然后修改表单文件如下</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Forms</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Widgets<span class="token punctuation">\\</span>Form</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">ResetPassword</span> <span class="token keyword">extends</span> <span class="token class-name">Form</span>
<span class="token punctuation">{</span>
    <span class="token comment">// 处理请求</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">handle</span><span class="token punctuation">(</span><span class="token keyword type-hint">array</span> <span class="token variable">$input</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$password</span> <span class="token operator">=</span> <span class="token variable">$input</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;password&#39;</span><span class="token punctuation">]</span> <span class="token operator">??</span> <span class="token constant">null</span><span class="token punctuation">;</span>

        <span class="token comment">// 逻辑操作</span>

        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">response</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;密码修改成功&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">form</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">password</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;password&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">required</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 密码确认表单</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">password</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;password_confirm&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">same</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;password&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 返回表单数据，如不需要可以删除此方法</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">default</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span>
            <span class="token string single-quoted-string">&#39;password&#39;</span>         <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;&#39;</span><span class="token punctuation">,</span>
            <span class="token string single-quoted-string">&#39;password_confirm&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Forms<span class="token punctuation">\\</span>ResetPassword</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Widgets<span class="token punctuation">\\</span>Modal</span><span class="token punctuation">;</span>

<span class="token variable">$modal</span> <span class="token operator">=</span> <span class="token class-name static-context">Modal</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token operator">-&gt;</span><span class="token function">lg</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token operator">-&gt;</span><span class="token function">title</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;修改密码&#39;</span><span class="token punctuation">)</span>
	<span class="token operator">-&gt;</span><span class="token function">body</span><span class="token punctuation">(</span><span class="token class-name static-context">ResetPassword</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token operator">-&gt;</span><span class="token function">button</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;修改密码&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="异步加载" tabindex="-1"><a class="header-anchor" href="#异步加载" aria-hidden="true">#</a> 异步加载</h4><p>只需要让<code>Form</code>表单类实现<code>Dcat\\Admin\\Contracts\\LazyRenderable</code>接口即可支持异步渲染功能，修改上面创建的工具表单类如下</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Forms</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Widgets<span class="token punctuation">\\</span>Form</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Traits<span class="token punctuation">\\</span>LazyWidget</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Contracts<span class="token punctuation">\\</span>LazyRenderable</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">ResetPassword</span> <span class="token keyword">extends</span> <span class="token class-name">Form</span> <span class="token keyword">implements</span> <span class="token class-name">LazyRenderable</span>
<span class="token punctuation">{</span>
    <span class="token keyword">use</span> <span class="token package">LazyWidget</span><span class="token punctuation">;</span> 
    
    <span class="token comment">// 处理请求</span>
	<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">handle</span><span class="token punctuation">(</span><span class="token keyword type-hint">array</span> <span class="token variable">$input</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
	    <span class="token comment">// 获取外部传递参数</span>
	    <span class="token variable">$id</span> <span class="token operator">=</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">payload</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;id&#39;</span><span class="token punctuation">]</span> <span class="token operator">??</span> <span class="token constant">null</span><span class="token punctuation">;</span>
	    
		<span class="token variable">$password</span> <span class="token operator">=</span> <span class="token variable">$input</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;password&#39;</span><span class="token punctuation">]</span> <span class="token operator">??</span> <span class="token constant">null</span><span class="token punctuation">;</span>

		<span class="token comment">// 逻辑操作</span>

		<span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">response</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;密码修改成功&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">form</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
	    <span class="token comment">// 获取外部传递参数</span>
		<span class="token variable">$id</span> <span class="token operator">=</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">payload</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;id&#39;</span><span class="token punctuation">]</span> <span class="token operator">??</span> <span class="token constant">null</span><span class="token punctuation">;</span>
	    
		<span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">password</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;password&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">required</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// 密码确认表单</span>
		<span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">password</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;password_confirm&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">same</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;password&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 返回表单数据，如不需要可以删除此方法</span>
	<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">default</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
	    <span class="token comment">// 获取外部传递参数</span>
		<span class="token variable">$id</span> <span class="token operator">=</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">payload</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;id&#39;</span><span class="token punctuation">]</span> <span class="token operator">??</span> <span class="token constant">null</span><span class="token punctuation">;</span>
	    
		<span class="token keyword">return</span> <span class="token punctuation">[</span>
			<span class="token string single-quoted-string">&#39;password&#39;</span>         <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;&#39;</span><span class="token punctuation">,</span>
			<span class="token string single-quoted-string">&#39;password_confirm&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;&#39;</span><span class="token punctuation">,</span>
		<span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用代码与上面基本一致，并且我们可以用<code>payload</code>方法往表单里面传递自定义参数</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Forms<span class="token punctuation">\\</span>ResetPassword</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Widgets<span class="token punctuation">\\</span>Modal</span><span class="token punctuation">;</span>

<span class="token variable">$modal</span> <span class="token operator">=</span> <span class="token class-name static-context">Modal</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token operator">-&gt;</span><span class="token function">lg</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token operator">-&gt;</span><span class="token function">title</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;修改密码&#39;</span><span class="token punctuation">)</span>
	<span class="token operator">-&gt;</span><span class="token function">body</span><span class="token punctuation">(</span><span class="token class-name static-context">ResetPassword</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">payload</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;id&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;...&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 传递自定义参数</span>
	<span class="token operator">-&gt;</span><span class="token function">button</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;修改密码&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="表格行操作弹窗" tabindex="-1"><a class="header-anchor" href="#表格行操作弹窗" aria-hidden="true">#</a> 表格行操作弹窗</h4><p>下面通过一个数据表格修改密码的行操作功能来展示弹窗结合工具表单的用法：</p><p>使用命令生成工具表单<code>php artisan admin:form ResetPassword</code>，然后修改表单文件如下</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Forms</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Models<span class="token punctuation">\\</span>Administrator</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Traits<span class="token punctuation">\\</span>LazyWidget</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Widgets<span class="token punctuation">\\</span>Form</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Contracts<span class="token punctuation">\\</span>LazyRenderable</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">ResetPassword</span> <span class="token keyword">extends</span> <span class="token class-name">Form</span> <span class="token keyword">implements</span> <span class="token class-name">LazyRenderable</span>
<span class="token punctuation">{</span>
    <span class="token keyword">use</span> <span class="token package">LazyWidget</span><span class="token punctuation">;</span> <span class="token comment">// 使用异步加载功能</span>
    
    <span class="token comment">// 处理请求</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">handle</span><span class="token punctuation">(</span><span class="token keyword type-hint">array</span> <span class="token variable">$input</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 获取外部传递参数</span>
        <span class="token variable">$id</span> <span class="token operator">=</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">payload</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;id&#39;</span><span class="token punctuation">]</span> <span class="token operator">??</span> <span class="token constant">null</span><span class="token punctuation">;</span>
        
        <span class="token comment">// 表单参数</span>
        <span class="token variable">$password</span> <span class="token operator">=</span> <span class="token variable">$input</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;password&#39;</span><span class="token punctuation">]</span> <span class="token operator">??</span> <span class="token constant">null</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span> <span class="token variable">$id</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">response</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;参数错误&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token variable">$user</span> <span class="token operator">=</span> <span class="token class-name static-context">Administrator</span><span class="token operator">::</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token variable">$id</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span> <span class="token variable">$user</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">response</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;用户不存在&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token variable">$user</span><span class="token operator">-&gt;</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;password&#39;</span> <span class="token operator">=&gt;</span> <span class="token function">bcrypt</span><span class="token punctuation">(</span><span class="token variable">$password</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">response</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;密码修改成功&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">form</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 获取外部传递参数</span>
		<span class="token comment">//$id = $this-&gt;payload[&#39;id&#39;] ?? null;</span>
        
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">password</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;password&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">required</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 密码确认表单</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">password</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;password_confirm&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">same</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;password&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 返回表单数据，如不需要可以删除此方法</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">default</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span>
            <span class="token string single-quoted-string">&#39;password&#39;</span>         <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;&#39;</span><span class="token punctuation">,</span>
            <span class="token string single-quoted-string">&#39;password_confirm&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后运行<code>php artisan admin:action</code>命令，选择选项<code>2</code>，生成数据表格行操作类，并修改如下：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Actions<span class="token punctuation">\\</span>Grid</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Forms<span class="token punctuation">\\</span>ResetPassword</span> <span class="token keyword">as</span> ResetPasswordForm<span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Widgets<span class="token punctuation">\\</span>Modal</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Grid<span class="token punctuation">\\</span>RowAction</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">ResetPassword</span> <span class="token keyword">extends</span> <span class="token class-name">RowAction</span>
<span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token variable">$title</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;修改密码&#39;</span><span class="token punctuation">;</span>
    
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 实例化表单类并传递自定义参数</span>
        <span class="token variable">$form</span> <span class="token operator">=</span> <span class="token class-name static-context">ResetPasswordForm</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">payload</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;id&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">getKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token keyword">return</span> <span class="token class-name static-context">Modal</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        	<span class="token operator">-&gt;</span><span class="token function">lg</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        	<span class="token operator">-&gt;</span><span class="token function">title</span><span class="token punctuation">(</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">title</span><span class="token punctuation">)</span>
        	<span class="token operator">-&gt;</span><span class="token function">body</span><span class="token punctuation">(</span><span class="token variable">$form</span><span class="token punctuation">)</span>
        	<span class="token operator">-&gt;</span><span class="token function">button</span><span class="token punctuation">(</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">title</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Actions<span class="token punctuation">\\</span>Grid<span class="token punctuation">\\</span>ResetPassword</span><span class="token punctuation">;</span>

<span class="token variable">$grid</span><span class="token operator">-&gt;</span><span class="token function">actions</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">ResetPassword</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果</p><p><img src="`+i+`" alt="" loading="lazy"></p><h4 id="表格批量操作弹窗" tabindex="-1"><a class="header-anchor" href="#表格批量操作弹窗" aria-hidden="true">#</a> 表格批量操作弹窗</h4><p>如果你想在批量操作按钮中使用表单弹窗，可以参考以下例子：</p><p>这里我们仍然沿用上面用到的<code>App\\Admin\\Forms\\ResetPassword</code>表单，并修改如下</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Forms</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Models<span class="token punctuation">\\</span>Administrator</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Widgets<span class="token punctuation">\\</span>Form</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Traits<span class="token punctuation">\\</span>LazyWidget</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Contracts<span class="token punctuation">\\</span>LazyRenderable</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">ResetPassword</span> <span class="token keyword">extends</span> <span class="token class-name">Form</span> <span class="token keyword">implements</span> <span class="token class-name">LazyRenderable</span>
<span class="token punctuation">{</span>
    <span class="token keyword">use</span> <span class="token package">LazyWidget</span><span class="token punctuation">;</span>
    
    <span class="token comment">// 处理请求</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">handle</span><span class="token punctuation">(</span><span class="token keyword type-hint">array</span> <span class="token variable">$input</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
	    <span class="token comment">// id转化为数组</span>
	    <span class="token variable">$id</span> <span class="token operator">=</span> <span class="token function">explode</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;,&#39;</span><span class="token punctuation">,</span> <span class="token variable">$input</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;id&#39;</span><span class="token punctuation">]</span> <span class="token operator">??</span> <span class="token constant">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	    <span class="token variable">$password</span> <span class="token operator">=</span> <span class="token variable">$input</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;password&#39;</span><span class="token punctuation">]</span> <span class="token operator">??</span> <span class="token constant">null</span><span class="token punctuation">;</span>

	    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span> <span class="token variable">$id</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		    <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">response</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;参数错误&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	    <span class="token punctuation">}</span>

	    <span class="token variable">$users</span> <span class="token operator">=</span> <span class="token class-name static-context">Administrator</span><span class="token operator">::</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token variable">$id</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$users</span><span class="token operator">-&gt;</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		    <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">response</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;用户不存在&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	    <span class="token punctuation">}</span>

	    <span class="token comment">// 这里改为循环批量修改</span>
	    <span class="token variable">$users</span><span class="token operator">-&gt;</span><span class="token function">each</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">$user</span><span class="token punctuation">)</span> <span class="token keyword">use</span> <span class="token punctuation">(</span><span class="token variable">$password</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	 	    <span class="token variable">$user</span><span class="token operator">-&gt;</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;password&#39;</span> <span class="token operator">=&gt;</span> <span class="token function">bcrypt</span><span class="token punctuation">(</span><span class="token variable">$password</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	    <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">response</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;密码修改成功&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">form</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">password</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;password&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">required</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 密码确认表单</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">password</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;password_confirm&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">same</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;password&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   
        <span class="token comment">// 设置隐藏表单，传递用户id</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">hidden</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;id&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">attribute</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;id&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;reset-password-id&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
   
    <span class="token comment">// 返回表单数据，如不需要可以删除此方法</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">default</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span>
            <span class="token string single-quoted-string">&#39;password&#39;</span>         <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;&#39;</span><span class="token punctuation">,</span>
            <span class="token string single-quoted-string">&#39;password_confirm&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后运行<code>php artisan admin:action</code>命令，选择选项<code>1</code>，生成数据表格批量操作类，并修改如下：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Actions<span class="token punctuation">\\</span>Grid</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Forms<span class="token punctuation">\\</span>ResetPassword</span> <span class="token keyword">as</span> ResetPasswordForm<span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Widgets<span class="token punctuation">\\</span>Modal</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Grid<span class="token punctuation">\\</span>BatchAction</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">BatchResetPassword</span> <span class="token keyword">extends</span> <span class="token class-name">BatchAction</span>
<span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token variable">$title</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;修改密码&#39;</span><span class="token punctuation">;</span>
    
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 实例化表单类</span>
		<span class="token variable">$form</span> <span class="token operator">=</span> <span class="token class-name static-context">ResetPasswordForm</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		<span class="token keyword">return</span> <span class="token class-name static-context">Modal</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
			<span class="token operator">-&gt;</span><span class="token function">lg</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
			<span class="token operator">-&gt;</span><span class="token function">title</span><span class="token punctuation">(</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">title</span><span class="token punctuation">)</span>
			<span class="token operator">-&gt;</span><span class="token function">body</span><span class="token punctuation">(</span><span class="token variable">$form</span><span class="token punctuation">)</span>
			<span class="token comment">// 因为此处使用了表单异步加载功能，所以一定要用 onLoad 方法</span>
			<span class="token comment">// 如果是非异步方式加载表单，则需要改成 onShow 方法</span>
			<span class="token operator">-&gt;</span><span class="token function">onLoad</span><span class="token punctuation">(</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">getModalScript</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
			<span class="token operator">-&gt;</span><span class="token function">button</span><span class="token punctuation">(</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">title</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function-definition function">getModalScript</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 弹窗显示后往隐藏的id表单中写入批量选中的行ID</span>
        <span class="token keyword">return</span> <span class="token string heredoc-string"><span class="token delimiter symbol"><span class="token punctuation">&lt;&lt;&lt;</span>JS</span>
// 获取选中的ID数组
var key = <span class="token interpolation"><span class="token punctuation">{</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">getSelectedKeysScript</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>

$(&#39;#reset-password-id&#39;).val(key);
<span class="token delimiter symbol">JS<span class="token punctuation">;</span></span></span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Actions<span class="token punctuation">\\</span>Grid<span class="token punctuation">\\</span>BatchResetPassword</span><span class="token punctuation">;</span>

<span class="token variable">$grid</span><span class="token operator">-&gt;</span><span class="token function">batchActions</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">BatchResetPassword</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,37);function w(y,$){const p=e("RouterLink"),c=e("ExternalLinkIcon");return u(),r("div",null,[k,s("p",null,[n("在上面的表单类里面，在"),v,n("方法中构建表单项，使用方法和"),t(p,{to:"/zh/guide/model-form.html"},{default:o(()=>[n("数据表单")]),_:1}),n("一致，"),m,n("方法用来给这个表单项设置默认数据。")]),b,s("p",null,[n("参考 "),t(p,{to:"/zh/guide/response.html"},{default:o(()=>[n("动作以及表单响应")]),_:1}),n(" 章节")]),g,s("p",null,[n("默认表单提交都使用Ajax进行提交,通过注入的 "),s("a",f,[n("Form.js"),t(c)]),n(" 进行流程控制,如果需要原生表单行为,可以禁用此特")]),h])}const _=l(d,[["render",w],["__file","widgets-form.html.vue"]]);export{_ as default};
