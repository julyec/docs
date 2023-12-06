import{_ as i}from"./FLg6C7kwRq-352479e5.js";import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as c,o as l,c as u,a as s,b as n,d as t,w as p,e as a}from"./app-c17653d8.js";const d={},r=a(`<h1 id="帮助函数" tabindex="-1"><a class="header-anchor" href="#帮助函数" aria-hidden="true">#</a> 帮助函数</h1><h3 id="admin-redirect" tabindex="-1"><a class="header-anchor" href="#admin-redirect" aria-hidden="true">#</a> admin_redirect</h3><blockquote><p>Since <code>v2.1.7-beta</code></p></blockquote><p>跳转到指定<code>url</code>，此函数可用于代替<code>redirect</code>函数，支持<code>pjax</code>以及<code>ajax</code>请求</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment">// 不需要添加admin前缀</span>
<span class="token keyword">return</span> <span class="token function">admin_redirect</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;auth/users&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 如果想要跳转到非admin前缀的链接，需要传递完整url链接</span>
<span class="token keyword">return</span> <span class="token function">admin_redirect</span><span class="token punctuation">(</span><span class="token function">url</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;users&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="admin-exist" tabindex="-1"><a class="header-anchor" href="#admin-exist" aria-hidden="true">#</a> admin_exist</h3><p><code>admin_exist</code> 用于中断程序执行，并响应数据到浏览器进行显示，用于代替 <code>exit</code> 和 <code>die</code>，下面简单介绍下用法</p><p>用法1，返回 <code>Content</code> 布局对象，此用法可用于返回错误信息显示到前端</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Widgets<span class="token punctuation">\\</span>Alert</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Layout<span class="token punctuation">\\</span>Content</span><span class="token punctuation">;</span>

<span class="token comment">// 中断程序，并显示自定义页面到前端</span>
<span class="token function">admin_exit</span><span class="token punctuation">(</span>
    <span class="token class-name static-context">Content</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token operator">-&gt;</span><span class="token function">title</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;标题&#39;</span><span class="token punctuation">)</span>
        <span class="token operator">-&gt;</span><span class="token function">description</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;描述&#39;</span><span class="token punctuation">)</span>
        <span class="token operator">-&gt;</span><span class="token function">body</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;页面内容1&#39;</span><span class="token punctuation">)</span>
        <span class="token operator">-&gt;</span><span class="token function">body</span><span class="token punctuation">(</span><span class="token class-name static-context">Alert</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;服务器出错了~&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;Error&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">danger</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果如下</p><p><img src="`+i+`" alt="" loading="lazy"></p><p>用法2，返回 <code>json</code> 格式数据，此用法经常用于表单提交数据的<code>api</code>请求拦截，或<code>Action</code>的<code>api</code>请求拦截</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Admin</span><span class="token punctuation">;</span>

<span class="token function">admin_exit</span><span class="token punctuation">(</span>
    <span class="token class-name static-context">Admin</span><span class="token operator">::</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token operator">-&gt;</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;成功了&#39;</span><span class="token punctuation">)</span>
        <span class="token operator">-&gt;</span><span class="token function">refresh</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token operator">-&gt;</span><span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
            <span class="token operator">...</span>
        <span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 当然也可以直接响应数组</span>
<span class="token function">admin_exit</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
   <span class="token operator">...</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用法3，直接相应<code>Response</code>对象或字符串</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token function">admin_exit</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Hello world&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">admin_exit</span><span class="token punctuation">(</span><span class="token function">response</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Hello world&#39;</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="admin-color" tabindex="-1"><a class="header-anchor" href="#admin-color" aria-hidden="true">#</a> admin_color</h3>`,16),k=a(`<div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment">// 获取主题色的三种方式</span>
<span class="token variable">$primary</span> <span class="token operator">=</span> <span class="token function">admin_color</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;primary&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$primary</span> <span class="token operator">=</span> <span class="token function">admin_color</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;primary&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$primary</span> <span class="token operator">=</span> <span class="token function">admin_color</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">primary</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">$color</span> <span class="token operator">=</span> <span class="token function">admin_color</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$color</span><span class="token operator">-&gt;</span><span class="token function">lighten</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;primary&#39;</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="admin-js" tabindex="-1"><a class="header-anchor" href="#admin-js" aria-hidden="true">#</a> admin_js</h3>`,2),m=s("code",null,"js",-1),g=a(`<div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token function">admin_js</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;@admin/xxx.js&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="admin-css" tabindex="-1"><a class="header-anchor" href="#admin-css" aria-hidden="true">#</a> admin_css</h3>`,2),v=s("code",null,"css",-1),h=a(`<div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token function">admin_css</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;@admin/xxx.css&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="admin-require-assets" tabindex="-1"><a class="header-anchor" href="#admin-require-assets" aria-hidden="true">#</a> admin_require_assets</h3>`,2),b=a(`<div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token function">admin_require_assets</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;@datime&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="admin-path" tabindex="-1"><a class="header-anchor" href="#admin-path" aria-hidden="true">#</a> admin_path</h3><p>获取<code>Dcat Admin</code>安装的应用路径，默认目录是<code>app/Admin</code>：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$bootstrap</span> <span class="token operator">=</span> <span class="token function">admin_path</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;bootstrap.php&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="admin-url" tabindex="-1"><a class="header-anchor" href="#admin-url" aria-hidden="true">#</a> admin_url</h3><p>获取<code>Dcat Admin</code>应用的路由完整url：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment">// 返回： http://localhost/admin/auth/users</span>
<span class="token variable">$url</span> <span class="token operator">=</span> <span class="token function">admin_url</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;auth/users&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="admin-route" tabindex="-1"><a class="header-anchor" href="#admin-route" aria-hidden="true">#</a> admin_route</h3><p>根据别名获取URL</p><p><code>app/Admin/routes.php</code>路由注册如下</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token class-name static-context">Route</span><span class="token operator">::</span><span class="token function">group</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;prefix&#39;</span>        <span class="token operator">=&gt;</span> <span class="token function">config</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;admin.route.prefix&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;namespace&#39;</span>     <span class="token operator">=&gt;</span> <span class="token function">config</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;admin.route.namespace&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;middleware&#39;</span>    <span class="token operator">=&gt;</span> <span class="token function">config</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;admin.route.middleware&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">Router</span> <span class="token variable">$router</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 设置别名</span>
	<span class="token variable">$router</span><span class="token operator">-&gt;</span><span class="token function">resource</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;users&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;UserController&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
		<span class="token string single-quoted-string">&#39;names&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;index&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;my-users&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
	<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>根据别名获取URL</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment">// 获取url</span>
<span class="token variable">$url</span> <span class="token operator">=</span> <span class="token function">admin_route</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;my-users&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 判断路由</span>
<span class="token variable">$isUsers</span> <span class="token operator">=</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">routeIs</span><span class="token punctuation">(</span><span class="token function">admin_route_name</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;users&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="admin-base-path" tabindex="-1"><a class="header-anchor" href="#admin-base-path" aria-hidden="true">#</a> admin_base_path</h3><p>获取<code>Dcat Admin</code>应用的路由路径：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment">// 返回： /admin/auth/users</span>
<span class="token variable">$path</span> <span class="token operator">=</span> <span class="token function">admin_base_path</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;auth/users&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="admin-toastr" tabindex="-1"><a class="header-anchor" href="#admin-toastr" aria-hidden="true">#</a> admin_toastr</h3><p>在页面刷新后弹出一个<code>toastr</code>提示窗，参数：</p><ul><li><code>$message</code> 提示窗内容</li><li><code>$type</code> 提示窗类型，默认<code>success</code>，支持<code>success</code>、<code>info</code>、<code>warning</code>、<code>error</code></li><li><code>$options</code> toastr配置参数</li></ul><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token function">admin_alert</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;更新成功&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;success&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="admin-success" tabindex="-1"><a class="header-anchor" href="#admin-success" aria-hidden="true">#</a> admin_success</h3><p>在页面刷新后在页面顶部显示一个成功消息：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token function">admin_success</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;标题&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;成功了&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="admin-error" tabindex="-1"><a class="header-anchor" href="#admin-error" aria-hidden="true">#</a> admin_error</h3><p>在页面刷新后在页面顶部显示一个错误消息：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token function">admin_error</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;标题&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;失败了&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="admin-warning" tabindex="-1"><a class="header-anchor" href="#admin-warning" aria-hidden="true">#</a> admin_warning</h3><p>在页面刷新后在页面顶部显示一个警告消息：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token function">admin_warning</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;标题&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;警告&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="admin-info" tabindex="-1"><a class="header-anchor" href="#admin-info" aria-hidden="true">#</a> admin_info</h3><p>在页面刷新后在页面顶部显示一个提示消息：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token function">admin_info</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;标题&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;内容&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="admin-asset" tabindex="-1"><a class="header-anchor" href="#admin-asset" aria-hidden="true">#</a> admin_asset</h3><p>获取静态资源的完整链接：</p><blockquote><p>{tip} 此函数支持别名.</p></blockquote><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>// 引入css
&lt;link rel=&quot;stylesheet&quot; href=&quot;{{ admin_asset(&quot;@admin/dcat-admin/main.min.css&quot;) }}&quot;&gt;

// 引入js
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{ admin_asset(&#39;@admin/dcat-admin/main.min.js&#39;)}}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="admin-trans-field" tabindex="-1"><a class="header-anchor" href="#admin-trans-field" aria-hidden="true">#</a> admin_trans_field</h3><p>翻译当前控制器的字段，控制器名称去除<code>Controller</code>后缀之后再转化为小写中划线就是语言包的名称，如：控制器名称为<code>UserProfileController</code>，则对应的语言包名称为<code>user-profile.php</code>。</p><blockquote><p>{tip} 如果当前控制器对应的语言包中不存在该字段翻译，则会去公共翻译文件<code>global.php</code>中查找。</p></blockquote><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$name</span> <span class="token operator">=</span> <span class="token function">admin_trans_field</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;name&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$createdAt</span> <span class="token operator">=</span> <span class="token function">admin_trans_field</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;created_at&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>语言包内容如下：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">return</span> <span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;fields&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
        <span class="token string single-quoted-string">&#39;name&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;名称&#39;</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;created_at&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;创建时间&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="admin-trans-label" tabindex="-1"><a class="header-anchor" href="#admin-trans-label" aria-hidden="true">#</a> admin_trans_label</h3><p>翻译当前控制器的自定义内容，控制器名称去除<code>Controller</code>后缀之后再转化为小写中划线就是语言包的名称，如：控制器名称为<code>UserProfileController</code>，则对应的语言包名称为<code>user-profile.php</code>。</p><blockquote><p>{tip} 如果当前控制器对应的语言包中不存在该字段翻译，则会去公共翻译文件<code>global.php</code>中查找。</p></blockquote><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$user</span> <span class="token operator">=</span> <span class="token function">admin_trans_label</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;User&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>语言包内容如下：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">return</span> <span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;labels&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
        <span class="token string single-quoted-string">&#39;User&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;管理员&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="admin-trans-option" tabindex="-1"><a class="header-anchor" href="#admin-trans-option" aria-hidden="true">#</a> admin_trans_option</h3><p>翻译当前控制器的字段选项值，控制器名称去除<code>Controller</code>后缀之后再转化为小写中划线就是语言包的名称，如：控制器名称为<code>UserProfileController</code>，则对应的语言包名称为<code>user-profile.php</code>。</p><blockquote><p>{tip} 如果当前控制器对应的语言包中不存在该字段翻译，则会去公共翻译文件<code>global.php</code>中查找。</p></blockquote><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$status</span> <span class="token operator">=</span> <span class="token function">admin_trans_option</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;status&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>语言包内容如下：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">return</span> <span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;options&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
        <span class="token string single-quoted-string">&#39;status&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
            <span class="token number">1</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;启用&#39;</span><span class="token punctuation">,</span>
            <span class="token number">0</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;禁用&#39;</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,54);function f(_,q){const e=c("RouterLink");return l(),u("div",null,[r,s("p",null,[n("获取内置颜色，关于主题颜色更多用法请参考"),t(e,{to:"/zh/guide/theme.html#color"},{default:p(()=>[n("主题 - 颜色")]),_:1}),n("章节")]),k,s("p",null,[n("可以在任意位置引入"),m,n("文件，更多用法参考"),t(e,{to:"/zh/guide/assets.html"},{default:p(()=>[n("静态资源")]),_:1}),n("章节")]),g,s("p",null,[n("可以在任意位置引入"),v,n("文件，更多用法参考"),t(e,{to:"/zh/guide/assets.html"},{default:p(()=>[n("静态资源")]),_:1}),n("章节")]),h,s("p",null,[n("可以在任意位置引入静态资源组件，更多用法参考"),t(e,{to:"/zh/guide/assets.html"},{default:p(()=>[n("静态资源")]),_:1}),n("章节")]),b])}const $=o(d,[["render",f],["__file","function.html.vue"]]);export{$ as default};
