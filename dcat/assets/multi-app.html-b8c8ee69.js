import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,a as e}from"./app-98225aba.js";const p={},t=e(`<h1 id="多应用-多后台" tabindex="-1"><a class="header-anchor" href="#多应用-多后台" aria-hidden="true">#</a> 多应用 (多后台)</h1><p>默认安装后使用的是单应用模式，如果你想在同一个<code>laravel</code>项目中使用多应用模式，那么可以采用多后台模式，最终项目中的目录结构大概如下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>app
 ├──Admin
 │   ├── Controllers
 │   │   ├── ExampleController.php
 │   │   └── HomeController.php
 │   ├── Metrics
 │   │   └── ...
 │   ├── bootstrap.php
 │   └── routes.php
 │
 ├──Admin2
 │    └── ...
 │   
 │──Admin3
 │    └── ...
 ...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="生成新应用" tabindex="-1"><a class="header-anchor" href="#生成新应用" aria-hidden="true">#</a> 生成新应用</h3><p>运行命令，此命令只接受一个参数：应用名称，注意这里的应用名称请一定要使用<strong>大驼峰风格</strong>命名</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>php artisan admin<span class="token punctuation">:</span>app NewAdmin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>运行成功后你的项目中会新增一个新的应用目录<code>app/NewAdmin</code>，以及新的配置文件<code>config/new-admin.php</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>app
 └──Admin
    ├── Controllers
    │   ├── ExampleController.php
    │   └── HomeController.php
    ├── Metrics
    │   └── ...
    ├── bootstrap.php
    └── routes.php
config
 └──new-admin.php
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="启用" tabindex="-1"><a class="header-anchor" href="#启用" aria-hidden="true">#</a> 启用</h3><p>新应用生成完之后，就可以开始启用这个新应用了，打开配置文件<code>config/admin.php</code>，加入以下代码</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">return</span> <span class="token punctuation">[</span>
    <span class="token operator">...</span>
    
    <span class="token string single-quoted-string">&#39;multi_app&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
        <span class="token comment">// 与新应用的配置文件名称一致</span>
        <span class="token comment">// 设置为true启用，false则是停用</span>
        <span class="token string single-quoted-string">&#39;new-admin&#39;</span> <span class="token operator">=&gt;</span> <span class="token constant boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>

<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后就可以打开浏览器访问这个新应用了<code>http://localhost:8000/new-admin</code>。</p><h3 id="更改路由前缀" tabindex="-1"><a class="header-anchor" href="#更改路由前缀" aria-hidden="true">#</a> 更改路由前缀</h3><p>目前只能通过路由前缀区分不同应用，如果你想要更改应用的前缀，可以打开配置文件<code>new-admin.php</code>找到<code>route.prefix</code>参数进行更改即可</p><h3 id="更改菜单" tabindex="-1"><a class="header-anchor" href="#更改菜单" aria-hidden="true">#</a> 更改菜单</h3><p>如果你想要在新应用中展示不同的菜单，可以参考以下方法</p><p>1.首先需要创建新的菜单表以及其关联表</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">\`</span>new_admin_menu<span class="token punctuation">\`</span></span> <span class="token punctuation">(</span>
  <span class="token identifier"><span class="token punctuation">\`</span>id<span class="token punctuation">\`</span></span> <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token keyword">unsigned</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">AUTO_INCREMENT</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">\`</span>parent_id<span class="token punctuation">\`</span></span> <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token string">&#39;0&#39;</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">\`</span>order<span class="token punctuation">\`</span></span> <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token string">&#39;0&#39;</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">\`</span>title<span class="token punctuation">\`</span></span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span> <span class="token keyword">COLLATE</span> utf8mb4_unicode_ci <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">\`</span>icon<span class="token punctuation">\`</span></span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span> <span class="token keyword">COLLATE</span> utf8mb4_unicode_ci <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">\`</span>uri<span class="token punctuation">\`</span></span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span> <span class="token keyword">COLLATE</span> utf8mb4_unicode_ci <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">\`</span>created_at<span class="token punctuation">\`</span></span> <span class="token keyword">timestamp</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">\`</span>updated_at<span class="token punctuation">\`</span></span> <span class="token keyword">timestamp</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">\`</span>id<span class="token punctuation">\`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">)</span> <span class="token keyword">ENGINE</span><span class="token operator">=</span>MyISAM <span class="token keyword">DEFAULT</span> <span class="token keyword">CHARSET</span><span class="token operator">=</span>utf8mb4 <span class="token keyword">COLLATE</span><span class="token operator">=</span>utf8mb4_unicode_ci<span class="token punctuation">;</span>

<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">\`</span>new_admin_permission_menu<span class="token punctuation">\`</span></span> <span class="token punctuation">(</span>
  <span class="token identifier"><span class="token punctuation">\`</span>permission_id<span class="token punctuation">\`</span></span> <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">\`</span>menu_id<span class="token punctuation">\`</span></span> <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">\`</span>created_at<span class="token punctuation">\`</span></span> <span class="token keyword">timestamp</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">\`</span>updated_at<span class="token punctuation">\`</span></span> <span class="token keyword">timestamp</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  <span class="token keyword">UNIQUE</span> <span class="token keyword">KEY</span> <span class="token identifier"><span class="token punctuation">\`</span>admin_permission_menu_permission_id_menu_id_index<span class="token punctuation">\`</span></span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">\`</span>permission_id<span class="token punctuation">\`</span></span><span class="token punctuation">,</span><span class="token identifier"><span class="token punctuation">\`</span>menu_id<span class="token punctuation">\`</span></span><span class="token punctuation">)</span> <span class="token keyword">USING</span> <span class="token keyword">BTREE</span>
<span class="token punctuation">)</span> <span class="token keyword">ENGINE</span><span class="token operator">=</span>MyISAM <span class="token keyword">DEFAULT</span> <span class="token keyword">CHARSET</span><span class="token operator">=</span>utf8mb4 <span class="token keyword">COLLATE</span><span class="token operator">=</span>utf8mb4_unicode_ci<span class="token punctuation">;</span>

<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">\`</span>new_admin_role_permissions<span class="token punctuation">\`</span></span> <span class="token punctuation">(</span>
  <span class="token identifier"><span class="token punctuation">\`</span>role_id<span class="token punctuation">\`</span></span> <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">\`</span>permission_id<span class="token punctuation">\`</span></span> <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">\`</span>created_at<span class="token punctuation">\`</span></span> <span class="token keyword">timestamp</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">\`</span>updated_at<span class="token punctuation">\`</span></span> <span class="token keyword">timestamp</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  <span class="token keyword">UNIQUE</span> <span class="token keyword">KEY</span> <span class="token identifier"><span class="token punctuation">\`</span>admin_role_permissions_role_id_permission_id_index<span class="token punctuation">\`</span></span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">\`</span>role_id<span class="token punctuation">\`</span></span><span class="token punctuation">,</span><span class="token identifier"><span class="token punctuation">\`</span>permission_id<span class="token punctuation">\`</span></span><span class="token punctuation">)</span> <span class="token keyword">USING</span> <span class="token keyword">BTREE</span>
<span class="token punctuation">)</span> <span class="token keyword">ENGINE</span><span class="token operator">=</span>MyISAM <span class="token keyword">DEFAULT</span> <span class="token keyword">CHARSET</span><span class="token operator">=</span>utf8mb4 <span class="token keyword">COLLATE</span><span class="token operator">=</span>utf8mb4_unicode_ci<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.创建新的菜单模型，注意这里需要继承默认的菜单模型！！！</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Models</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Models<span class="token punctuation">\\</span>Menu</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">NewMenu</span> <span class="token keyword">extends</span> <span class="token class-name">Menu</span>
<span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token variable">$table</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;new_admin_menu&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.打开新应用的配置文件<code>config/new-admin.php</code>，然后修改以下参数</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">return</span> <span class="token punctuation">[</span>
    <span class="token operator">...</span>
	
	<span class="token string single-quoted-string">&#39;database&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>

	  <span class="token operator">...</span>

	  <span class="token comment">// 写入新的模型和菜单表</span>
	  <span class="token string single-quoted-string">&#39;menu_table&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;new_admin_menu&#39;</span><span class="token punctuation">,</span>
	  <span class="token string single-quoted-string">&#39;menu_model&#39;</span> <span class="token operator">=&gt;</span> <span class="token class-name class-name-fully-qualified static-context">App<span class="token punctuation">\\</span>Models<span class="token punctuation">\\</span>NewMenu</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span>

      <span class="token operator">...</span>
	  
	  <span class="token comment">// 新的中间表</span>
	  <span class="token string single-quoted-string">&#39;role_menu_table&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;new_admin_role_menu&#39;</span><span class="token punctuation">,</span>
	  <span class="token string single-quoted-string">&#39;permission_menu_table&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;new_admin_permission_menu&#39;</span><span class="token punctuation">,</span>
	<span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样新的应用就可以使用独立的菜单功能了</p><h3 id="更改用户和权限" tabindex="-1"><a class="header-anchor" href="#更改用户和权限" aria-hidden="true">#</a> 更改用户和权限</h3><p>自定义用户和权限可以参考以上更改菜单的方式。另外如果是自定义用户的话，还需要更改配置文件<code>config/new-admin.php</code>中的以下参数</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>   <span class="token operator">...</span>

   <span class="token string single-quoted-string">&#39;auth&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
        <span class="token operator">...</span>
        
        <span class="token string single-quoted-string">&#39;guard&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;new-admin&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 必须是一个新的名字</span>
        
		<span class="token string single-quoted-string">&#39;guards&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
			<span class="token string single-quoted-string">&#39;new-admin&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
				<span class="token string single-quoted-string">&#39;driver&#39;</span>   <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;session&#39;</span><span class="token punctuation">,</span>
				<span class="token string single-quoted-string">&#39;provider&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;new-admin&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 必须是一个新的名字</span>
			<span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token punctuation">]</span><span class="token punctuation">,</span>

		<span class="token string single-quoted-string">&#39;providers&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
			<span class="token string single-quoted-string">&#39;new-admin&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span> <span class="token comment">// 必须是一个新的名字</span>
				<span class="token string single-quoted-string">&#39;driver&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;eloquent&#39;</span><span class="token punctuation">,</span>
				<span class="token comment">// 这里换成新用户表的模型</span>
				<span class="token string single-quoted-string">&#39;model&#39;</span>  <span class="token operator">=&gt;</span> <span class="token class-name class-name-fully-qualified static-context">App<span class="token punctuation">\\</span>Models<span class="token punctuation">\\</span>NewAdministrator</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span>
			<span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token punctuation">]</span><span class="token punctuation">,</span>

        <span class="token operator">...</span>

    <span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用不同域名区分应用" tabindex="-1"><a class="header-anchor" href="#使用不同域名区分应用" aria-hidden="true">#</a> 使用不同域名区分应用</h3><p>默认是通过路由前缀区分应用的，如果想要使用域名区分应用，只需要更改如下配置即可</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>    <span class="token string single-quoted-string">&#39;route&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
        <span class="token string single-quoted-string">&#39;domain&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;dev.dcat.com&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 配置你的域名</span>

        <span class="token string single-quoted-string">&#39;prefix&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 路由前缀建议设置为空</span>

        <span class="token string single-quoted-string">&#39;namespace&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;App\\\\Admin\\\\Controllers&#39;</span><span class="token punctuation">,</span>

        <span class="token string single-quoted-string">&#39;middleware&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;web&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;admin&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,29),i=[t];function o(l,c){return s(),a("div",null,i)}const r=n(p,[["render",o],["__file","multi-app.html.vue"]]);export{r as default};