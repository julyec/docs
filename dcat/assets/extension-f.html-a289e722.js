import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as d,c as p,b as s,d as n,e as a,w as l,a as t}from"./app-98225aba.js";const r={},u=t(`<h1 id="扩展基本使用" tabindex="-1"><a class="header-anchor" href="#扩展基本使用" aria-hidden="true">#</a> 扩展基本使用</h1><h2 id="基本使用" tabindex="-1"><a class="header-anchor" href="#基本使用" aria-hidden="true">#</a> 基本使用</h2><h3 id="设置扩展相关目录读写权限" tabindex="-1"><a class="header-anchor" href="#设置扩展相关目录读写权限" aria-hidden="true">#</a> 设置扩展相关目录读写权限</h3><p>在使用扩展功能之前，需要先保证所在用户拥有扩展相关目录的读写权限，否则可能造成扩展安装失败，请保证拥有以下几个目录的读写权限</p><ol><li><code>项目目录/dcat-admin-extensions</code> 扩展的安装目录，可以根据配置参数 <code>admin.extensions.dir</code> 进行更改</li><li><code>public/vendor</code> 扩展静态资源发布目录</li><li><code>resources/lang</code> 语言包目录</li></ol><h3 id="扩展安装" tabindex="-1"><a class="header-anchor" href="#扩展安装" aria-hidden="true">#</a> 扩展安装</h3><p><code>Dcat Admin</code>中扩展支持以下三种安装方式，安装成功后均能在扩展管理页面<code>admin/auth/extensions</code>看到相关扩展信息</p><h4 id="_1-通过应用市场安装" tabindex="-1"><a class="header-anchor" href="#_1-通过应用市场安装" aria-hidden="true">#</a> 1.通过应用市场安装</h4><p>敬请期待...</p><h4 id="_2-本地安装" tabindex="-1"><a class="header-anchor" href="#_2-本地安装" aria-hidden="true">#</a> 2.本地安装</h4><p>下载扩展的<code>zip</code>压缩包，注意必须是<code>zip</code>格式，然后打开扩展管理页面<code>admin/auth/extensions</code>，然后点击表格工具栏的<code>本地安装</code>按钮上传提交即可。</p><h4 id="_3-composer安装" tabindex="-1"><a class="header-anchor" href="#_3-composer安装" aria-hidden="true">#</a> 3.composer安装</h4><p>根据扩展开发者文档提供的说明，直接使用composer安装即可</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">composer</span> require <span class="token punctuation">{</span>扩展名称<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="启用扩展" tabindex="-1"><a class="header-anchor" href="#启用扩展" aria-hidden="true">#</a> 启用扩展</h4><p>安装之后，需要在扩展管理页面点击 <code>更新至xxx版本</code> 以及更新 <code>启用</code> 按钮之后方可正常使用</p><h2 id="开发扩展" tabindex="-1"><a class="header-anchor" href="#开发扩展" aria-hidden="true">#</a> 开发扩展</h2>`,17),h=s("h3",{id:"服务注册与初始化",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#服务注册与初始化","aria-hidden":"true"},"#"),n(" 服务注册与初始化")],-1),v={href:"https://learnku.com/docs/laravel/8.x/providers/9362",target:"_blank",rel:"noopener noreferrer"},m=s("code",null,"ServiceProvider",-1),k={href:"https://learnku.com/docs/laravel/8.x/providers/9362",target:"_blank",rel:"noopener noreferrer"},b=s("code",null,"ServiceProvider",-1),g=s("code",null,"boot",-1),x=s("code",null,"init",-1),_=s("code",null,"boot",-1),f=t(`<h3 id="版本管理" tabindex="-1"><a class="header-anchor" href="#版本管理" aria-hidden="true">#</a> 版本管理</h3><p>每个扩展都有一个<code>version.php</code>文件，通过这个文件可以实现版本管理功能，每次发布新版本我们只需要往这个文件添加新的版本号以及相关描述即可</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">return</span> <span class="token punctuation">[</span>
    <span class="token comment">// key 是版本号，注意这里不要带 v 前缀！</span>
    <span class="token string single-quoted-string">&#39;1.0.0&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
        <span class="token string single-quoted-string">&#39;版本描述信息，可以有多条&#39;</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;描述2...&#39;</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;create_operation_log.php&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 版本迁移文件，可以有多条</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    
    <span class="token string single-quoted-string">&#39;1.0.1&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
        <span class="token string single-quoted-string">&#39;版本描述信息，可以有多条&#39;</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;update_operation_log.php&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 版本迁移文件</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    
    <span class="token operator">...</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="升级版本" tabindex="-1"><a class="header-anchor" href="#升级版本" aria-hidden="true">#</a> 升级版本</h4><p>安装了新的版本代码之后，可以在扩展管理页面<code>admin/auth/extensions</code>中点击更新按钮进行升级。</p><p>点击升级后如果有迁移文件则会运行迁移文件，如果有菜单则会重新创建菜单，如果有静态资源则会自动重新发布资源文件。</p><h4 id="回滚版本" tabindex="-1"><a class="header-anchor" href="#回滚版本" aria-hidden="true">#</a> 回滚版本</h4><p>通过命令 <code>php artisan admin:ext-rollback {扩展名称} {版本号}</code> 可以回滚到指定版本，但需要注意的是，回滚扩展会删除数据，可能会导致数据丢失，请谨慎操作！！！</p><h4 id="卸载" tabindex="-1"><a class="header-anchor" href="#卸载" aria-hidden="true">#</a> 卸载</h4><p>如果你的扩展已安装，通过扩展页面 <code>admin/auth/extensions</code> 可以扩展进行卸载，但需要注意的是，卸载扩展会删除数据，可能会导致数据丢失，请谨慎操作！！！</p><p>如果你想完全移除扩展的代码，则直接删除 <code>dcat-admin-extensions</code> 目录下对应的扩展文件夹即可。</p><h3 id="视图-view" tabindex="-1"><a class="header-anchor" href="#视图-view" aria-hidden="true">#</a> 视图 (view)</h3><p>视图的默认目录为<code>扩展目录/resources/view</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>├── resources 
│   ├── <span class="token punctuation">..</span>.
│   └── views <span class="token comment"># 视图目录</span>
│       └── index.blade.php <span class="token comment"># 视图示例文件</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>只要把视图文件放在上述目录，系统就会自动给视图目录注册别名，别名与扩展名称相同。假设你的扩展包名称为 <code>dcat-admin/form-step</code>，则可以通过以下方式加载视图</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">return</span> <span class="token function">view</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;dcat-admin.form-step::index&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="静态资源" tabindex="-1"><a class="header-anchor" href="#静态资源" aria-hidden="true">#</a> 静态资源</h3><p>假设你的扩展包名称为 <code>dcat-admin/form-step</code>，如果你的扩展中包含静态资源如下，那么你可以通过 <code>FormStepServiceProvider</code> 上的 <code>$js</code> 和 <code>$css</code> 属性为你的静态资源注册别名</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>└── resources 
    └─── assets
      ├── css
      │   └── index<span class="token operator">.</span>css
      └── js
          └── index<span class="token operator">.</span>js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">class</span> <span class="token class-name-definition class-name">FormStepServiceProvider</span> <span class="token keyword">extends</span> <span class="token class-name">ServiceProvider</span>
<span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token variable">$js</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
        <span class="token string single-quoted-string">&#39;js/index.js&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">protected</span> <span class="token variable">$css</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
        <span class="token string single-quoted-string">&#39;css/index.css&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后就可以通过下面的方法加载静态资源</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Admin</span><span class="token punctuation">;</span>

<span class="token comment">// 直接用你的 包名 即可引入扩展包的静态资源</span>
<span class="token class-name static-context">Admin</span><span class="token operator">::</span><span class="token function">requireAssets</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;@dcat-admin.form-step&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当然你也可以不通过 <code>$js</code> 和 <code>$css</code> 属性注册别名，那么也可以用下面的方法直接加载静态资源，效果是一样的</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment">// 上面的写法相当于</span>
<span class="token class-name static-context">Admin</span><span class="token operator">::</span><span class="token function">js</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;@dcat-admin.form-step/js/index.js&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name static-context">Admin</span><span class="token operator">::</span><span class="token function">css</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;@dcat-admin.form-step/css/index.css&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24);function q(w,j){const c=i("RouterLink"),e=i("ExternalLinkIcon");return d(),p("div",null,[u,s("p",null,[n("详细的开发教程，请参考文档 "),a(c,{to:"/zh/guide/extension-dev.html"},{default:l(()=>[n("开发扩展")]),_:1}),n(" 章节。")]),h,s("blockquote",null,[s("p",null,[n("{tip} 如果你对服务提供者的概念并不熟悉，请先前往"),s("a",v,[n("Laravel文档 - 服务提供者"),a(e)]),n("学习。")])]),s("p",null,[n("扩展的 "),m,n(" 类实际上是一个"),s("a",k,[n("服务提供者"),a(e)]),n("，唯一的区别是扩展的 "),b,n(" 不能重写 "),g,n(" 方法，需要通过 "),x,n(" 代替 "),_,n("方法。")]),f])}const A=o(r,[["render",q],["__file","extension-f.html.vue"]]);export{A as default};
