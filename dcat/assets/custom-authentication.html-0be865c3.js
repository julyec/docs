import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as i,c as o,a as n,b as s,d as c,e as a}from"./app-c17653d8.js";const l={},u=a(`<h1 id="自定义登陆" tabindex="-1"><a class="header-anchor" href="#自定义登陆" aria-hidden="true">#</a> 自定义登陆</h1><h3 id="重写登陆页面和登陆逻辑" tabindex="-1"><a class="header-anchor" href="#重写登陆页面和登陆逻辑" aria-hidden="true">#</a> 重写登陆页面和登陆逻辑</h3><p>方式一，重写登陆控制器方法：</p><p>默认的登陆控制器用的是<code>App\\Admin\\AuthController</code>这个类，可以通过配置参数<code>admin.auth.controller</code>进行修改</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Controllers</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Controllers<span class="token punctuation">\\</span>AuthController</span> <span class="token keyword">as</span> BaseAuthController<span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">AuthController</span> <span class="token keyword">extends</span> <span class="token class-name">BaseAuthController</span>
<span class="token punctuation">{</span>
    <span class="token comment">// 自定义登陆view模板</span>
    <span class="token keyword">protected</span> <span class="token variable">$view</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;admin.login&#39;</span><span class="token punctuation">;</span>
	
	<span class="token comment">// 重写你的登陆页面逻辑</span>
	<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getLogin</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Content</span> <span class="token variable">$content</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token operator">...</span>
    <span class="token punctuation">}</span>

    <span class="token operator">...</span>
<span class="token punctuation">}</span>

</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>方式二，覆写路由：</p><p>在路由文件<code>app/Admin/routes.php</code>中，覆盖掉登陆页面和登陆逻辑的路由，即可实现自定义的功能</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token class-name static-context">Route</span><span class="token operator">::</span><span class="token function">group</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;prefix&#39;</span>        <span class="token operator">=&gt;</span> <span class="token function">config</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;admin.prefix&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;namespace&#39;</span>     <span class="token operator">=&gt;</span> <span class="token class-name static-context">Admin</span><span class="token operator">::</span><span class="token function">controllerNamespace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;middleware&#39;</span>    <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;web&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;admin&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">Router</span> <span class="token variable">$router</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token variable">$router</span><span class="token operator">-&gt;</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;auth/login&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;AuthController@getLogin&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token variable">$router</span><span class="token operator">-&gt;</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;auth/login&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;AuthController@postLogin&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在自定义的路由器AuthController中的<code>getLogin</code>、<code>postLogin</code>方法里分别实现自己的登陆页面和登陆逻辑。</p><h3 id="重写laravel认证" tabindex="-1"><a class="header-anchor" href="#重写laravel认证" aria-hidden="true">#</a> 重写laravel认证</h3><p>如果不使用<code>Dcat Admin</code>内置的认证登陆逻辑，可以参考下面的方式自定义登陆认证逻辑</p><p>首先要先定义一个<code>user provider</code>，用来获取用户身份, 比如<code>app/Providers/CustomUserProvider.php</code>：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Providers</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Contracts<span class="token punctuation">\\</span>Auth<span class="token punctuation">\\</span>Authenticatable</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Contracts<span class="token punctuation">\\</span>Auth<span class="token punctuation">\\</span>UserProvider</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">CustomUserProvider</span> <span class="token keyword">implements</span> <span class="token class-name">UserProvider</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">retrieveById</span><span class="token punctuation">(</span><span class="token variable">$identifier</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span><span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">retrieveByToken</span><span class="token punctuation">(</span><span class="token variable">$identifier</span><span class="token punctuation">,</span> <span class="token variable">$token</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span><span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">updateRememberToken</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Authenticatable</span> <span class="token variable">$user</span><span class="token punctuation">,</span> <span class="token variable">$token</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span><span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">retrieveByCredentials</span><span class="token punctuation">(</span><span class="token keyword type-hint">array</span> <span class="token variable">$credentials</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 用$credentials里面的用户名密码去获取用户信息，然后返回Illuminate\\Contracts\\Auth\\Authenticatable对象</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">validateCredentials</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Authenticatable</span> <span class="token variable">$user</span><span class="token punctuation">,</span> <span class="token keyword type-hint">array</span> <span class="token variable">$credentials</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 用$credentials里面的用户名密码校验用户，返回true或false</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在方法<code>retrieveByCredentials</code>和<code>validateCredentials</code>中, 传入的<code>$credentials</code>就是登陆页面提交的用户名和密码数组，然后你可以使用<code>$credentials</code>去实现自己的登陆逻辑</p><p>Interface <code>Illuminate\\Contracts\\Auth\\Authenticatable</code>的定义如下：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">namespace</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Contracts<span class="token punctuation">\\</span>Auth</span><span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name-definition class-name">Authenticatable</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getAuthIdentifierName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getAuthIdentifier</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getAuthPassword</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getRememberToken</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">setRememberToken</span><span class="token punctuation">(</span><span class="token variable">$value</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getRememberTokenName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),r={href:"https://laravel.com/docs/5.5/authentication#adding-custom-user-providers",target:"_blank",rel:"noopener noreferrer"},d=a(`<p>定义好了<code>User provider</code>之后，打开<code>app/Providers/AuthServiceProvider.php</code>注册它：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Providers</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Support<span class="token punctuation">\\</span>Facades<span class="token punctuation">\\</span>Auth</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Foundation<span class="token punctuation">\\</span>Support<span class="token punctuation">\\</span>Providers<span class="token punctuation">\\</span>AuthServiceProvider</span> <span class="token keyword">as</span> ServiceProvider<span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">AuthServiceProvider</span> <span class="token keyword">extends</span> <span class="token class-name">ServiceProvider</span>
<span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * Register any application authentication / authorization services.
     *
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">void</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">boot</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">registerPolicies</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name static-context">Auth</span><span class="token operator">::</span><span class="token function">provider</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;custom&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">$app</span><span class="token punctuation">,</span> <span class="token keyword type-hint">array</span> <span class="token variable">$config</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            
            <span class="token comment">// Return an instance of Illuminate\\Contracts\\Auth\\UserProvider...</span>
            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">CustomUserProvider</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后修改一下配置,打开<code>config/admin.php</code>，找到<code>auth</code>部分修改:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>    <span class="token string single-quoted-string">&#39;auth&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
        <span class="token string single-quoted-string">&#39;guards&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
            <span class="token string single-quoted-string">&#39;admin&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
                <span class="token string single-quoted-string">&#39;driver&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;session&#39;</span><span class="token punctuation">,</span>
                <span class="token string single-quoted-string">&#39;provider&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;admin&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>

        <span class="token comment">// 修改下面</span>
        <span class="token string single-quoted-string">&#39;providers&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
            <span class="token string single-quoted-string">&#39;admin&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
                <span class="token string single-quoted-string">&#39;driver&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;custom&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样就完成了自定义登陆认证的逻辑，自定义登陆算是laravel中比较复杂的部分，需要开发者有耐心的一步步调试完成。</p>`,5);function k(v,m){const e=p("ExternalLinkIcon");return i(),o("div",null,[u,n("p",null,[s("上面interface每个方法的解释参考"),n("a",r,[s("adding-custom-user-providers"),c(e)])]),d])}const h=t(l,[["render",k],["__file","custom-authentication.html.vue"]]);export{h as default};
