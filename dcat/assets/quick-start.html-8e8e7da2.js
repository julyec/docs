import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as l,c as u,a as s,b as n,d as a,w as t,e as p}from"./app-c17653d8.js";const r="/dcat/assets/guQd6nFQIF-8e53ef21.png",d="/dcat/assets/Me5IvbngZJ-7582bed9.png",k={},m=p('<h1 id="快速开始" tabindex="-1"><a class="header-anchor" href="#快速开始" aria-hidden="true">#</a> 快速开始</h1><p>在日常开发中，我们可以用代码生成器一键生成增删改查页面代码，非常的方便快捷。</p><p>下面将会给大家介绍代码生成器的使用方法，以及一个增删改查页面的基本构成。通过学习下面的内容将可以帮助大家快速理解这个系统的基本使用方法。</p><h2 id="代码生成器" tabindex="-1"><a class="header-anchor" href="#代码生成器" aria-hidden="true">#</a> 代码生成器</h2><h3 id="创建数据表" tabindex="-1"><a class="header-anchor" href="#创建数据表" aria-hidden="true">#</a> 创建数据表</h3>',5),v=s("code",null,"Laravel",-1),g=s("code",null,"users",-1),b=s("code",null,"migration",-1),h=s("code",null,"migration",-1),f={href:"https://learnku.com/docs/laravel/7.x/migrations/7496",target:"_blank",rel:"noopener noreferrer"},_=s("code",null,"database/migrations/2014_10_12_000000_create_users_table.php",-1),w=p('<p>然后我们运行以下命令，在<code>MySQL</code>中创建这个数据表</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>php artisan migrate\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>运行完之后可以看到数据库中已经多了一个<code>users</code>表，结构如下</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">`</span>users<span class="token punctuation">`</span></span> <span class="token punctuation">(</span>\n  <span class="token identifier"><span class="token punctuation">`</span>id<span class="token punctuation">`</span></span> <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token keyword">unsigned</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">AUTO_INCREMENT</span><span class="token punctuation">,</span>\n  <span class="token identifier"><span class="token punctuation">`</span>name<span class="token punctuation">`</span></span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token keyword">COLLATE</span> utf8_unicode_ci <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>\n  <span class="token identifier"><span class="token punctuation">`</span>email<span class="token punctuation">`</span></span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token keyword">COLLATE</span> utf8_unicode_ci <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>\n  <span class="token identifier"><span class="token punctuation">`</span>password<span class="token punctuation">`</span></span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">60</span><span class="token punctuation">)</span> <span class="token keyword">COLLATE</span> utf8_unicode_ci <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>\n  <span class="token identifier"><span class="token punctuation">`</span>remember_token<span class="token punctuation">`</span></span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span> <span class="token keyword">COLLATE</span> utf8_unicode_ci <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>\n  <span class="token identifier"><span class="token punctuation">`</span>created_at<span class="token punctuation">`</span></span> <span class="token keyword">timestamp</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token string">&#39;0000-00-00 00:00:00&#39;</span><span class="token punctuation">,</span>\n  <span class="token identifier"><span class="token punctuation">`</span>updated_at<span class="token punctuation">`</span></span> <span class="token keyword">timestamp</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token string">&#39;0000-00-00 00:00:00&#39;</span><span class="token punctuation">,</span>\n  <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>id<span class="token punctuation">`</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token keyword">UNIQUE</span> <span class="token keyword">KEY</span> <span class="token identifier"><span class="token punctuation">`</span>users_email_unique<span class="token punctuation">`</span></span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>email<span class="token punctuation">`</span></span><span class="token punctuation">)</span>\n<span class="token punctuation">)</span> <span class="token keyword">ENGINE</span><span class="token operator">=</span><span class="token keyword">InnoDB</span> <span class="token keyword">DEFAULT</span> <span class="token keyword">CHARSET</span><span class="token operator">=</span>utf8mb4 <span class="token keyword">COLLATE</span><span class="token operator">=</span>utf8mb4_unicode_ci\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="一键生成增删改查页面" tabindex="-1"><a class="header-anchor" href="#一键生成增删改查页面" aria-hidden="true">#</a> 一键生成增删改查页面</h3><blockquote><p>{tip} 如果你的开发环境不是<code>windows</code>，请注意要给项目目录设置读写权限，否则可能出现无法生成代码的情况。</p></blockquote><p>**1.**首先打开地址<code>http://你的域名/admin/helpers/scaffold</code>，进入代码生成器页面；</p><p>**2.**由于前面已经创建好了数据表，所以这里我们可以直接通过页面左上角的第二个下拉选框选择<code>users</code>表，选择之后会自动填充字段信息，效果如下</p><p><img src="'+r+'" alt="" loading="lazy"></p><p>**3.**修改模型名称为<code>App\\User</code></p><p>**4.**由于<code>migration</code>文件、数据表、以及模型文件(使用内置的<code>App\\User</code>即可)都已经有了，所以此处我们可以把这三个选项给去掉</p><p>**5.**填写字段翻译</p><p>最后呈现效果如下</p><p><img src="'+d+`" alt="" loading="lazy"></p><p>最后点击创建按钮即可，创建的文件如下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>app/Admin
├── Controllers
│   └── UserController.php  # 控制器
└── Repositories            # 数据仓库
│   └── User.php
resouces/lang/{当前语言}
└── user.php                # 语言包
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="添加路由配置" tabindex="-1"><a class="header-anchor" href="#添加路由配置" aria-hidden="true">#</a> 添加路由配置</h3><p>打开路由配置文件<code>app/Admin/routes.php</code>，往里面添加一行：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$router-&gt;resource(&#39;users&#39;, &#39;UserController&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>到此，就可以打开浏览器输入地址<code>http://你的域名/admin/users</code>访问刚刚创建完的页面了</p><h3 id="添加左侧菜单" tabindex="-1"><a class="header-anchor" href="#添加左侧菜单" aria-hidden="true">#</a> 添加左侧菜单</h3><p>打开<code>http://你的域名/admin/auth/menu</code>，添加对应的menu, 然后就能在后台管理页面的左侧边栏看到用户管理页面的链接入口了。</p><blockquote><p>其中<code>uri</code>填写不包含路由前缀的的路径部分，比如完整路径是<code>http://你的域名/admin/demo/users</code>, 那么就填<code>demo/users</code>，如果要添加外部链接，只要填写完整的url即可，比如<code>http://dcat-admin.org/</code>.</p></blockquote><h3 id="菜单翻译" tabindex="-1"><a class="header-anchor" href="#菜单翻译" aria-hidden="true">#</a> 菜单翻译</h3><p>在您的语言文件的<code>menu_titles</code>索引中追加菜单标题。 例如“工作单位”标题：</p><p>在<code>resources/lang/{当前语言}/menu.php</code>中</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token operator">...</span>
<span class="token comment">// 用_小写并用_替换空格</span>
<span class="token string single-quoted-string">&#39;titles&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;work_units&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;Unidades de trabajo&#39;</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="完成" tabindex="-1"><a class="header-anchor" href="#完成" aria-hidden="true">#</a> 完成</h3>`,28),y=s("code",null,"CURD",-1),q=s("code",null,"app/Admin/Contollers/UserController.php",-1),x=s("code",null,"form()",-1),A=s("code",null,"grid()",-1),L=p(`<h2 id="增删改查功能简易说明" tabindex="-1"><a class="header-anchor" href="#增删改查功能简易说明" aria-hidden="true">#</a> 增删改查功能简易说明</h2><p>为了便于大家理解增删改查功能的基本用法，下面将给大家简单介绍前面使用生成器生成的代码。</p><h3 id="控制器" tabindex="-1"><a class="header-anchor" href="#控制器" aria-hidden="true">#</a> 控制器</h3><p><code>Dcat Admin</code>的增删改查页面代码是非常简洁和易懂的，对开发者非常的友好，只需极少的代码即可构建出一个功能完善的后台系统，并且非常简单灵活和易于扩展。</p><p>打开<code>app/Admin/Controllers/UserController.php</code>可以看到如下代码</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Controllers</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Repositories<span class="token punctuation">\\</span>User</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Form</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Grid</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Show</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Controllers<span class="token punctuation">\\</span>AdminController</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">UserController</span> <span class="token keyword">extends</span> <span class="token class-name">AdminController</span>
<span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * Make a grid builder.
     *
     * <span class="token keyword">@return</span> <span class="token class-name">Grid</span>
     */</span>
    <span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function-definition function">grid</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name static-context">Grid</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">Grid</span> <span class="token variable">$grid</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 这里的字段会自动使用翻译文件</span>
            <span class="token variable">$grid</span><span class="token operator">-&gt;</span><span class="token function">column</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;id&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">sortable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token variable">$grid</span><span class="token operator">-&gt;</span><span class="token function">column</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;name&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token variable">$grid</span><span class="token operator">-&gt;</span><span class="token function">column</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;email&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token variable">$grid</span><span class="token operator">-&gt;</span><span class="token function">column</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;email_verified_at&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token variable">$grid</span><span class="token operator">-&gt;</span><span class="token function">column</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;password&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token variable">$grid</span><span class="token operator">-&gt;</span><span class="token function">column</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;remember_token&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token variable">$grid</span><span class="token operator">-&gt;</span><span class="token function">column</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;created_at&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token variable">$grid</span><span class="token operator">-&gt;</span><span class="token function">column</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;updated_at&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">sortable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
            <span class="token variable">$grid</span><span class="token operator">-&gt;</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name class-name-fully-qualified type-declaration">Grid<span class="token punctuation">\\</span>Filter</span> <span class="token variable">$filter</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token variable">$filter</span><span class="token operator">-&gt;</span><span class="token function">equal</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;id&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * Make a show builder.
     *
     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token keyword">mixed</span></span> <span class="token parameter">$id</span>
     *
     * <span class="token keyword">@return</span> <span class="token class-name">Show</span>
     */</span>
    <span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function-definition function">detail</span><span class="token punctuation">(</span><span class="token variable">$id</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name static-context">Show</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token variable">$id</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">Show</span> <span class="token variable">$show</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 这里的字段会自动使用翻译文件</span>
            <span class="token variable">$show</span><span class="token operator">-&gt;</span><span class="token function">field</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;id&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token variable">$show</span><span class="token operator">-&gt;</span><span class="token function">field</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;name&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token variable">$show</span><span class="token operator">-&gt;</span><span class="token function">field</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;email&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token variable">$show</span><span class="token operator">-&gt;</span><span class="token function">field</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;email_verified_at&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token variable">$show</span><span class="token operator">-&gt;</span><span class="token function">field</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;password&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token variable">$show</span><span class="token operator">-&gt;</span><span class="token function">field</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;remember_token&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token variable">$show</span><span class="token operator">-&gt;</span><span class="token function">field</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;created_at&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token variable">$show</span><span class="token operator">-&gt;</span><span class="token function">field</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;updated_at&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * Make a form builder.
     *
     * <span class="token keyword">@return</span> <span class="token class-name">Form</span>
     */</span>
    <span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function-definition function">form</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name static-context">Form</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">Form</span> <span class="token variable">$form</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 这里的字段会自动使用翻译文件</span>
            <span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">display</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;id&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;name&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;email&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;email_verified_at&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;password&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;remember_token&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
            <span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">display</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;created_at&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">display</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;updated_at&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数据仓库" tabindex="-1"><a class="header-anchor" href="#数据仓库" aria-hidden="true">#</a> 数据仓库</h3><p><code>Dcat Admin</code> 构建页面并不直接依赖于<code>Model</code>，而是引入了数据仓库作为中间层，让页面的构建不再与数据的读写产生强耦合关系。</p>`,8),U=s("code",null,"Dcat Admin",-1),$=p(`<blockquote><p>{tip} 如果你的数据来自<code>MySQL</code>，那么你也可以直接使用<code>Model</code>实例，底层会自动把<code>Model</code>转化为数据仓库实例。这里为了便于大家理解其中的概念，所以创建了数据仓库文件。</p></blockquote><p>我们打开刚刚生成的文件<code>app/Admin/Repositories/User.php</code>，可以看到只有如下内容，非常简单</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Repositories</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Repositories<span class="token punctuation">\\</span>EloquentRepository</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>User</span> <span class="token keyword">as</span> UserModel<span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">User</span> <span class="token keyword">extends</span> <span class="token class-name">EloquentRepository</span>
<span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token variable">$eloquentClass</span> <span class="token operator">=</span> <span class="token class-name static-context">UserModel</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="语言包" tabindex="-1"><a class="header-anchor" href="#语言包" aria-hidden="true">#</a> 语言包</h3>`,4),C=p(`<p>下面我们打开<code>UserController</code>对应的语言包文件<code>resouces/lang/{当前语言}/user.php</code></p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span> 
<span class="token keyword">return</span> <span class="token punctuation">[</span>
    <span class="token comment">// labels是自定义标签翻译</span>
    <span class="token string single-quoted-string">&#39;labels&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
        <span class="token comment">// 这个是页面 title 翻译</span>
        <span class="token string single-quoted-string">&#39;User&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;用户&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 表字段翻译</span>
    <span class="token string single-quoted-string">&#39;fields&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
        <span class="token string single-quoted-string">&#39;name&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;名称&#39;</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;email&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;邮箱&#39;</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;email_verified_at&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;验证时间&#39;</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;password&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;密码&#39;</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;remember_token&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;remember_token&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;options&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function E(N,T){const c=o("ExternalLinkIcon"),e=o("RouterLink");return l(),u("div",null,[m,s("p",null,[n("安装完"),v,n("之后会内置一个"),g,n("表的"),b,n("文件(如果不了解"),h,n("文件作用，请参考文档"),s("a",f,[n("数据库迁移"),a(c)]),n(")，文件路径为"),_,n("。")]),w,s("p",null,[n("这样一个简单的"),y,n("功能就构建完成了，剩下的工作就是深度构建数据表格和表单了，打开 "),q,n(",找到"),x,n("和"),A,n("方法，然添加构建代码。 更多详细使用请查看"),a(e,{to:"/zh/guide/model-grid.html"},{default:t(()=>[n("数据表格")]),_:1}),n("和"),a(e,{to:"/zh/guide/model-form.html"},{default:t(()=>[n("数据表单")]),_:1}),n("。")]),L,s("p",null,[n("数据仓库是"),U,n("中对数据增删改查操作接口的具体实现，更详细用法请参考"),a(e,{to:"/zh/guide/model-repository.html"},{default:t(()=>[n("数据仓库")]),_:1}),n("。")]),$,s("p",null,[n("每个控制器都可以生成自己对应的语言包，并且"),a(e,{to:"/zh/guide/model-grid.html"},{default:t(()=>[n("数据表格")]),_:1}),n("、"),a(e,{to:"/zh/guide/model-form.html"},{default:t(()=>[n("数据表单")]),_:1}),n("和"),a(e,{to:"/zh/guide/model-show.html"},{default:t(()=>[n("数据详情")]),_:1}),n("功能都会自动读取里面的翻译。")]),C])}const M=i(k,[["render",E],["__file","quick-start.html.vue"]]);export{M as default};
