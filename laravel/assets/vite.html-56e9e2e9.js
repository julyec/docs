import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as p,c as o,b as s,d as n,e,a as i}from"./app-06635a3b.js";const c={},r=i('<h1 id="资源绑定-vite" tabindex="-1"><a class="header-anchor" href="#资源绑定-vite" aria-hidden="true">#</a> 资源绑定（Vite）</h1><ul><li><a href="#introduction">介绍</a></li><li><a href="#installation">安装和设置</a></li><li><a href="#installing-node">安装 Node</a></li><li><a href="#installing-vite-and-laravel-plugin">安装 Vite 和 Laravel 插件</a></li><li><a href="#configuring-vite">配置 Vite</a></li><li><a href="#loading-your-scripts-and-styles">加载你的脚本和样式</a></li><li><a href="#running-vite">运行 Vite</a></li><li><a href="#working-with-scripts">使用 JavaScript</a></li><li><a href="#aliases">别名</a></li><li><a href="#vue">Vue</a></li><li><a href="#react">React</a></li><li><a href="#inertia">Inertia</a></li><li><a href="#url-processing">URL 处理</a></li><li><a href="#working-with-stylesheets">使用样式表</a></li><li><a href="#working-with-blade-and-routes">使用 Blade 和路由</a></li><li><a href="#blade-processing-static-assets">使用 Vite 处理静态资源</a></li><li><a href="#blade-refreshing-on-save">保存后刷新</a></li><li><a href="#blade-aliases">别名</a></li><li><a href="#custom-base-urls">自定义基础 URL</a></li><li><a href="#environment-variables">环境变量</a></li><li><a href="#disabling-vite-in-tests">在测试中禁用 Vite</a></li><li><a href="#ssr">服务器端渲染（SSR）</a></li><li><a href="#script-and-style-attributes">脚本和样式标记属性</a></li><li><a href="#content-security-policy-csp-nonce">内容安全策略（CSP）随机数</a></li><li><a href="#subresource-integrity-sri">子资源完整性（SRI）</a></li><li><a href="#arbitrary-attributes">任意属性</a></li><li><a href="#advanced-customization">高级定制</a></li><li><a href="#correcting-dev-server-urls">更正开发服务器 URL</a></li></ul><p><a name="introduction"></a></p><h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2>',4),d={href:"https://vitejs.dev/",target:"_blank",rel:"noopener noreferrer"},u=s("p",null,"Laravel 通过提供官方插件和 Blade 指令，与 Vite 完美集成，以加载你的资源进行开发和生产。",-1),v={href:"https://laravel-mix.com/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.com/laravel/vite-plugin/blob/main/UPGRADE.md#migrating-from-laravel-mix-to-vite",target:"_blank",rel:"noopener noreferrer"},k=s("h4",{id:"选择-vite-还是-laravel-mix",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#选择-vite-还是-laravel-mix","aria-hidden":"true"},"#"),n(" 选择 Vite 还是 Laravel Mix")],-1),b={href:"https://laravel-mix.com/",target:"_blank",rel:"noopener noreferrer"},g={href:"https://webpack.js.org/",target:"_blank",rel:"noopener noreferrer"},h={href:"https://inertiajs.com/",target:"_blank",rel:"noopener noreferrer"},f={href:"https://laravel-livewire.com/",target:"_blank",rel:"noopener noreferrer"},x=s("h4",{id:"切换回-mix",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#切换回-mix","aria-hidden":"true"},"#"),n(" 切换回 Mix")],-1),y={href:"https://github.com/laravel/vite-plugin/blob/main/UPGRADE.md#migrating-from-vite-to-laravel-mix",target:"_blank",rel:"noopener noreferrer"},_=i('<h2 id="安装和设置" tabindex="-1"><a class="header-anchor" href="#安装和设置" aria-hidden="true">#</a> 安装和设置</h2><blockquote><p><strong>注意</strong> 以下文档讨论如何手动安装和配置 Laravel Vite 插件。但是，Laravel 的<a href="./starter-kits">起始套件</a>已经包含了所有的脚手架，并且是使用 Laravel 和 Vite 开始最快的方式。</p></blockquote><h3 id="安装-node" tabindex="-1"><a class="header-anchor" href="#安装-node" aria-hidden="true">#</a> 安装 Node</h3><p>在运行 Vite 和 Laravel 插件之前，你必须确保已安装 Node.js（16+）和 NPM：</p><p><code>node -v npm -v</code></p>',5),V={href:"https://nodejs.org/en/download/",target:"_blank",rel:"noopener noreferrer"},w=s("a",{href:"./sail"},"Laravel Sail",-1),j=i(`<p><code>./vendor/bin/sail node -v ./vendor/bin/sail npm -v</code></p><p><a name="installing-vite-and-laravel-plugin"></a></p><h3 id="安装-vite-和-laravel-插件" tabindex="-1"><a class="header-anchor" href="#安装-vite-和-laravel-插件" aria-hidden="true">#</a> 安装 Vite 和 Laravel 插件</h3><p>在 Laravel 的全新安装中，你会在应用程序目录结构的根目录下找到一个 package.json 文件。默认的 package.json 文件已经包含了你开始使用 Vite 和 Laravel 插件所需的一切。你可以通过 NPM 安装应用程序的前端依赖：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="configuring-vite"></a></p><h3 id="配置-vite" tabindex="-1"><a class="header-anchor" href="#配置-vite" aria-hidden="true">#</a> 配置 Vite</h3><p>Vite 通过项目根目录中的 <code>vite.config.js</code> 文件进行配置。你可以根据自己的需要自定义此文件，也可以安装任何其他插件，例如 <code>@vitejs/plugin-vue</code> 或 <code>@vitejs/plugin-react</code>。</p><p>Laravel Vite 插件需要你指定应用程序的入口点。这些入口点可以是 JavaScript 或 CSS 文件，并包括预处理语言，例如 TypeScript、JSX、TSX 和 Sass。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> laravel <span class="token keyword">from</span> <span class="token string">&#39;laravel-vite-plugin&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token function">laravel</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
            <span class="token string">&#39;resources/css/app.css&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;resources/js/app.js&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你正在构建一个单页应用程序，包括使用 Inertia 构建的应用程序，则最好不要使用 CSS 入口点：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> laravel <span class="token keyword">from</span> <span class="token string">&#39;laravel-vite-plugin&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token function">laravel</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
            <span class="token string">&#39;resources/css/app.css&#39;</span><span class="token punctuation">,</span> <span class="token comment">// [tl! remove]</span>
            <span class="token string">&#39;resources/js/app.js&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>相反，你应该通过 JavaScript 导入你的 CSS。通常，这将在应用程序的 resources/js/app.js 文件中完成：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token string">&#39;./bootstrap&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&#39;../css/app.css&#39;</span><span class="token punctuation">;</span> <span class="token comment">// [tl! add]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Laravel 插件还支持多个入口点和高级配置选项，例如<a href="#ssr">SSR 入口点</a>。</p><p><a name="working-with-a-secure-development-server"></a></p><h4 id="使用安全的开发服务器" tabindex="-1"><a class="header-anchor" href="#使用安全的开发服务器" aria-hidden="true">#</a> 使用安全的开发服务器</h4><p>如果你的本地开发 Web 服务器通过 HTTPS 提供应用程序服务，则可能会遇到连接到 Vite 开发服务器的问题。</p><p>如果你在本地开发中使用 <a href="./valet">Laravel Valet</a> 并已针对你的应用程序运行 <a href="./valet#securing-sites">secure 命令</a>，则可以配置 Vite 开发服务器自动使用 Valet 生成的 TLS 证书：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> laravel <span class="token keyword">from</span> <span class="token string">&#39;laravel-vite-plugin&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token function">laravel</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token comment">// ...</span>
            <span class="token literal-property property">valetTls</span><span class="token operator">:</span> <span class="token string">&#39;my-app.test&#39;</span><span class="token punctuation">,</span> <span class="token comment">// [tl! add]</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当使用其他 Web 服务器时，你应生成一个受信任的证书并手动配置 Vite 使用生成的证书：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// ...</span>
<span class="token keyword">import</span> fs <span class="token keyword">from</span> <span class="token string">&#39;fs&#39;</span><span class="token punctuation">;</span> <span class="token comment">// [tl! add]</span>

<span class="token keyword">const</span> host <span class="token operator">=</span> <span class="token string">&#39;my-app.test&#39;</span><span class="token punctuation">;</span> <span class="token comment">// [tl! add]</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
    <span class="token literal-property property">server</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// [tl! add]</span>
        host<span class="token punctuation">,</span> <span class="token comment">// [tl! add]</span>
        <span class="token literal-property property">hmr</span><span class="token operator">:</span> <span class="token punctuation">{</span> host <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// [tl! add]</span>
        <span class="token literal-property property">https</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// [tl! add]</span>
            <span class="token literal-property property">key</span><span class="token operator">:</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">/path/to/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>host<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.key</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// [tl! add]</span>
            <span class="token literal-property property">cert</span><span class="token operator">:</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">/path/to/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>host<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.crt</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// [tl! add]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// [tl! add]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// [tl! add]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22),S={href:"https://github.com/vitejs/vite-plugin-basic-ssl",target:"_blank",rel:"noopener noreferrer"},L=s("code",null,"@vitejs/plugin-basic-ssl",-1),C=s("code",null,"npm run dev",-1),R=i(`<p><a name="loading-your-scripts-and-styles"></a></p><h3 id="加载你的脚本和样式" tabindex="-1"><a class="header-anchor" href="#加载你的脚本和样式" aria-hidden="true">#</a> 加载你的脚本和样式</h3><p>配置了 Vite 入口点后，你只需要在应用程序根模板的 <code>&lt;head&gt;</code> 中添加一个 <code>@vite()</code> Blade 指令引用它们即可：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;!doctype html&gt;
&lt;head&gt;
    {{-- ... --}}

    @vite([&#39;resources/css/app.css&#39;, &#39;resources/js/app.js&#39;])
&lt;/head&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你通过 JavaScript 导入你的 CSS 文件，你只需要包含 JavaScript 的入口点：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;!doctype html&gt;
&lt;head&gt;
    {{-- ... --}}

    @vite(&#39;resources/js/app.js&#39;)
&lt;/head&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>@vite</code> 指令会自动检测 Vite 开发服务器并注入 Vite 客户端以启用热模块替换。在构建模式下，该指令将加载已编译和版本化的资产，包括任何导入的 CSS 文件。</p><p>如果需要，在调用 <code>@vite</code> 指令时，你还可以指定已编译资产的构建路径：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;!doctype html&gt;
&lt;head&gt;
    {{-- Given build path is relative to public path. --}}

    @vite(&#39;resources/js/app.js&#39;, &#39;vendor/courier/build&#39;)
&lt;/head&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="running-vite"></a></p><h2 id="运行-vite" tabindex="-1"><a class="header-anchor" href="#运行-vite" aria-hidden="true">#</a> 运行 Vite</h2><p>你可以通过两种方式运行 Vite。你可以通过 <code>dev</code> 命令运行开发服务器，在本地开发时非常有用。开发服务器会自动检测文件的更改，并立即在任何打开的浏览器窗口中反映这些更改。</p><p>或者，运行 <code>build</code> 命令将版本化并打包应用程序的资产，并准备好部署到生产环境：</p><p>Or, running the <code>build</code> command will version and bundle your application&#39;s assets and get them ready for you to deploy to production:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Run the Vite development server...</span>
<span class="token function">npm</span> run dev

<span class="token comment"># Build and version the assets for production...</span>
<span class="token function">npm</span> run build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="working-with-scripts"></a></p><h2 id="使用-javascript" tabindex="-1"><a class="header-anchor" href="#使用-javascript" aria-hidden="true">#</a> 使用 JavaScript</h2><p><a name="aliases"></a></p><h3 id="别名" tabindex="-1"><a class="header-anchor" href="#别名" aria-hidden="true">#</a> 别名</h3><p>默认情况下，Laravel 插件提供一个常用的别名，以帮助你快速开始并方便地导入你的应用程序的资产：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
    <span class="token string">&#39;@&#39;</span> <span class="token operator">=&gt;</span> <span class="token string">&#39;/resources/js&#39;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你可以通过添加自己的别名到 <code>vite.config.js</code> 配置文件中，覆盖 <code>&#39;@&#39;</code> 别名：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> laravel <span class="token keyword">from</span> <span class="token string">&#39;laravel-vite-plugin&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token function">laravel</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;resources/ts/app.tsx&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&#39;@&#39;</span><span class="token operator">:</span> <span class="token string">&#39;/resources/ts&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="vue"></a></p><h3 id="vue" tabindex="-1"><a class="header-anchor" href="#vue" aria-hidden="true">#</a> Vue</h3>`,25),q={href:"https://vuejs.org/",target:"_blank",rel:"noopener noreferrer"},T=s("code",null,"@vitejs/plugin-vue",-1),U=i(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> --save-dev @vitejs/plugin-vue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后你可以在 <code>vite.config.js</code> 配置文件中包含该插件。当使用 Laravel 和 Vue 插件时，还需要一些附加选项：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> laravel <span class="token keyword">from</span> <span class="token string">&#39;laravel-vite-plugin&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> vue <span class="token keyword">from</span> <span class="token string">&#39;@vitejs/plugin-vue&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token function">laravel</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;resources/js/app.js&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">transformAssetUrls</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token comment">// Vue 插件会重新编写资产 URL，以便在单文件组件中引用时，指向 Laravel web 服务器。</span>
                    <span class="token comment">// 将其设置为 \`null\`，则 Laravel 插件会将资产 URL 重新编写为指向 Vite 服务器。</span>
                    <span class="token literal-property property">base</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>

                    <span class="token comment">// Vue 插件将解析绝对 URL 并将其视为磁盘上文件的绝对路径。</span>
                    <span class="token comment">// 将其设置为 \`false\`，将保留绝对 URL 不变，以便可以像预期那样引用公共目录中的资源。</span>
                    <span class="token literal-property property">includeAbsolute</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意</strong> Laravel 的 <a href="./starter-kits">起步套件</a> 已经包含了适当的 Laravel、Vue 和 Vite 配置。请查看 <a href="./starter-kits#breeze-and-inertia">Laravel Breeze</a> 以了解使用 Laravel、Vue 和 Vite 快速入门的最快方法。</p><p><a name="react"></a></p><h3 id="react" tabindex="-1"><a class="header-anchor" href="#react" aria-hidden="true">#</a> React</h3>`,6),I={href:"https://reactjs.org/",target:"_blank",rel:"noopener noreferrer"},N=s("code",null,"@vitejs/plugin-react",-1),P=i(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> --save-dev @vitejs/plugin-react
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>你可以在 <code>vite.config.js</code> 配置文件中包含该插件：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> laravel <span class="token keyword">from</span> <span class="token string">&#39;laravel-vite-plugin&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> react <span class="token keyword">from</span> <span class="token string">&#39;@vitejs/plugin-react&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token function">laravel</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;resources/js/app.jsx&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token function">react</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当使用 Vite 和 React 时，你将需要确保任何包含 JSX 的文件都有一个 .jsx 和 .tsx 扩展，记住更新入口文件，如果需要 <a href="#configuring-vite">如上所示</a>。你还需要在现有的 <code>@vite</code> 指令旁边包含额外的 <code>@viteReactRefresh</code> Blade 指令。</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@viteReactRefresh
@vite(&#39;resources/js/app.jsx&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>@viteReactRefresh</code> 指令必须在 <code>@vite</code> 指令之前调用 。</p><blockquote><p><strong>注意</strong><br> Laravel 的 <a href="./starter-kits">起步套件</a> 已经包含了适合的 Laravel、React 和 Vite 配置。查看 <a href="./starter-kits#breeze-and-inertia">Laravel Breeze</a> 以最快的方式开始学习 Laravel、React 和 Vite。</p></blockquote><p><a name="inertia"></a></p><h3 id="inertia" tabindex="-1"><a class="header-anchor" href="#inertia" aria-hidden="true">#</a> Inertia</h3><p>Laravel Vite 插件提供了一个方便的 <code>resolvePageComponent</code> 函数，帮助你解决 Inertia 页面组件。以下是使用 Vue 3 的助手示例；然而，你也可以在其他框架中使用该函数，例如 React：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp<span class="token punctuation">,</span> h <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createInertiaApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@inertiajs/vue3&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> resolvePageComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;laravel-vite-plugin/inertia-helpers&#39;</span><span class="token punctuation">;</span>

<span class="token function">createInertiaApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function-variable function">resolve</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">resolvePageComponent</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">./Pages/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.vue</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span><span class="token function">glob</span><span class="token punctuation">(</span><span class="token string">&#39;./Pages/**/*.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> el<span class="token punctuation">,</span> App<span class="token punctuation">,</span> props<span class="token punctuation">,</span> plugin <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">h</span><span class="token punctuation">(</span>App<span class="token punctuation">,</span> props<span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>plugin<span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>注意</strong><br> Laravel 的 <a href="./starter-kits">起步套件</a> 已经包含了适合的 Laravel、Inertia 和 Vite 配置。查看 <a href="./starter-kits#breeze-and-inertia">Laravel Breeze</a> 以最快的方式开始学习 Laravel、Inertia 和 Vite。</p></blockquote><p><a name="url-processing"></a></p><h3 id="url-处理" tabindex="-1"><a class="header-anchor" href="#url-处理" aria-hidden="true">#</a> URL 处理</h3><p>当使用 Vite 并在你的应用程序的 HTML，CSS 和 JS 中引用资源时，有几件事情需要考虑。首先，如果你使用绝对路径引用资源，Vite 将不会在构建中包含资源；因此，你需要确认资源在你的公共目录中是可用的。</p><p>在引用相对路径的资源时，你应该记住这些路径是相对于它们被引用的文件的路径。通过相对路径引用的所有资源都将被 Vite 重写、版本化和打包。</p><p>参考以下项目结构：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public/
  taylor.png
resources/
  js/
    Pages/
      Welcome.vue
  images/
    abigail.png
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以下示例演示了 Vite 如何处理相对路径和绝对 URL：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!-- 这个资源不被 Vite 处理，不会被包含在构建中 --&gt;
&lt;img src=&quot;/taylor.png&quot;&gt;

&lt;!-- 这个资源将由 Vite 重写、版本化和打包 --&gt;
&lt;img src=&quot;../../images/abigail.png&quot;&gt;\` 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="working-with-stylesheets"></a></p><h2 id="使用样式表" tabindex="-1"><a class="header-anchor" href="#使用样式表" aria-hidden="true">#</a> 使用样式表</h2>`,22),$={href:"https://vitejs.dev/guide/features.html#css",target:"_blank",rel:"noopener noreferrer"},B={href:"https://tailwindcss.com/",target:"_blank",rel:"noopener noreferrer"},A=s("code",null,"postcss.config.js",-1),M=i(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>module.exports = {
    plugins: {
        tailwindcss: {},
        autoprefixer: {},
    },
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),E=s("strong",null,"注意",-1),J=s("a",{href:"./starter-kits"},"起始套件",-1),z={href:"https://tailwindcss.com/docs/guides/laravel",target:"_blank",rel:"noopener noreferrer"},F=i(`<p><a name="working-with-blade-and-routes"></a></p><h2 id="使用-blade-和-路由" tabindex="-1"><a class="header-anchor" href="#使用-blade-和-路由" aria-hidden="true">#</a> 使用 Blade 和 路由</h2><p><a name="blade-processing-static-assets"></a></p><h3 id="通过-vite-处理静态资源" tabindex="-1"><a class="header-anchor" href="#通过-vite-处理静态资源" aria-hidden="true">#</a> 通过 Vite 处理静态资源</h3><p>在你的 JavaScript 或 CSS 中引用资源时，Vite 会自动处理和版本化它们。此外，在构建基于 Blade 的应用程序时，Vite 还可以处理和版本化你仅在 Blade 模板中引用的静态资源。</p><p>然而，要实现这一点，你需要通过将静态资源导入到应用程序的入口点来让 Vite 了解你的资源。例如，如果你想处理和版本化存储在 <code>resources/images</code> 中的所有图像和存储在 <code>resources/fonts</code> 中的所有字体，你应该在应用程序的 <code>resources/js/app.js</code> 入口点中添加以下内容：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span><span class="token function">glob</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token string">&#39;../images/**&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;../fonts/**&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这些资源将在运行 <code>npm run build</code> 时由 Vite 处理。然后，你可以在 Blade 模板中使用 <code>Vite::asset</code> 方法引用这些资源，该方法将返回给定资源的版本化 URL：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;img src=&quot;{{ Vite::asset(&#39;resources/images/logo.png&#39;) }}&quot;&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="blade-refreshing-on-save"></a></p><h3 id="保存刷新" tabindex="-1"><a class="header-anchor" href="#保存刷新" aria-hidden="true">#</a> 保存刷新</h3><p>当你的应用程序使用传统的服务器端渲染 Blade 构建时，Vite 可以通过在你的应用程序中更改视图文件时自动刷新浏览器来提高你的开发工作流程。要开始，你可以简单地将 <code>refresh</code> 选项指定为 <code>true</code>。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> laravel <span class="token keyword">from</span> <span class="token string">&#39;laravel-vite-plugin&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token function">laravel</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token comment">// ...</span>
            <span class="token literal-property property">refresh</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当 <code>refresh</code> 选项为 <code>true</code> 时，保存以下目录中的文件将在你运行 <code>npm run dev</code> 时触发浏览器进行全面的页面刷新：</p><ul><li><code>app/View/Components/**</code></li><li><code>lang/**</code></li><li><code>resources/lang/**</code></li><li><code>resources/views/**</code></li><li><code>routes/**</code></li></ul>`,15),H=s("code",null,"routes/**",-1),D={href:"https://github.com/tighten/ziggy",target:"_blank",rel:"noopener noreferrer"},W=i(`<p>如果这些默认路径不符合你的需求，你可以指定自己的路径列表：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import { defineConfig } from &#39;vite&#39;;
import laravel from &#39;laravel-vite-plugin&#39;;

export default defineConfig({
    plugins: [
        laravel({
            // ...
            refresh: [&#39;resources/views/**&#39;],
        }),
    ],
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),G={href:"https://github.com/ElMassimo/vite-plugin-full-reload",target:"_blank",rel:"noopener noreferrer"},K=s("code",null,"vite-plugin-full-reload",-1),O=s("code",null,"config",-1),X=i(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import { defineConfig } from &#39;vite&#39;;
import laravel from &#39;laravel-vite-plugin&#39;;

export default defineConfig({
    plugins: [
        laravel({
            // ...
            refresh: [{
                paths: [&#39;path/to/watch/**&#39;],
                config: { delay: 300 }
            }],
        }),
    ],
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="别名-1" tabindex="-1"><a class="header-anchor" href="#别名-1" aria-hidden="true">#</a> 别名</h3><p>在 JavaScript 应用程序中创建别名来引用常用目录是很常见的。但是，你也可以通过在 <code>Illuminate\\Support\\Facades\\Vite</code> 类上使用 <code>macro</code> 方法来创建在 Blade 中使用的别名。通常，“宏”应在 <a href="./providers">服务提供商</a> 的 <code>boot</code> 方法中定义：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/**
 * Bootstrap any application services.
 */
public function boot(): void {
    Vite::macro(&#39;image&#39;, fn (string $asset) =&gt; $this-&gt;asset(&quot;resources/images/{$asset}&quot;));
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>定义了宏之后，可以在模板中调用它。例如，我们可以使用上面定义的 <code>image</code> 宏来引用位于 <code>resources/images/logo.png</code> 的资源：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;img src=&quot;{{ Vite::image(&#39;logo.png&#39;) }}&quot; alt=&quot;Laravel Logo&quot;&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="自定义-base-url" tabindex="-1"><a class="header-anchor" href="#自定义-base-url" aria-hidden="true">#</a> 自定义 base URL</h3><p>如果你的 Vite 编译的资产部署到与应用程序不同的域（例如通过 CDN），必须在应用程序的 <code>.env</code> 文件中指定 <code>ASSET_URL</code> 环境变量：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ASSET_URL=https://cdn.example.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在配置了资源 URL 之后，所有重写的 URL 都将以配置的值为前缀：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>https://cdn.example.com/build/assets/app.9dce8d17.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,11),Y={href:"/#url-processing",target:"_blank",rel:"noopener noreferrer"},Z=i(`<h3 id="环境变量" tabindex="-1"><a class="header-anchor" href="#环境变量" aria-hidden="true">#</a> 环境变量</h3><p>你可以在应用程序的 <code>.env</code> 文件中以 <code>VITE_</code> 为前缀注入环境变量以在 JavaScript 中使用：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>VITE_SENTRY_DSN_PUBLIC=http://example.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>你可以通过 <code>i<wbr>mport.meta.env</code> 对象访问注入的环境变量：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>i<wbr>mport.meta.env.VITE_SENTRY_DSN_PUBLIC
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="在测试中禁用-vite" tabindex="-1"><a class="header-anchor" href="#在测试中禁用-vite" aria-hidden="true">#</a> 在测试中禁用 Vite</h3><p>Laravel 的 Vite 集成将在运行测试时尝试解析你的资产，这需要你运行 Vite 开发服务器或构建你的资产。</p><p>如果你希望在测试中模拟 Vite，你可以调用 <code>withoutVite</code> 方法，该方法对任何扩展 Laravel 的 <code>TestCase</code> 类的测试都可用：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>use Tests\\TestCase;

class ExampleTest extends TestCase {
    public function test_without_vite_example(): void {
        $this-&gt;withoutVite();

        // ...
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你想在所有测试中禁用 Vite，可以在基本的 <code>TestCase</code> 类上的 <code>setUp</code> 方法中调用 <code>withoutVite</code> 方法：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;?php

namespace Tests;

use Illuminate\\Foundation\\Testing\\TestCase as BaseTestCase;

abstract class TestCase extends BaseTestCase {
    use CreatesApplication;

    protected function setUp(): void// [tl! add:start] {
        parent::setUp();

        $this-&gt;withoutVite();
    }// [tl! add:end]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="服务器端渲染" tabindex="-1"><a class="header-anchor" href="#服务器端渲染" aria-hidden="true">#</a> 服务器端渲染</h3><p>Laravel Vite 插件可以轻松地设置与 Vite 的服务器端渲染。要开始使用，请在 <code>resources/js</code> 中创建一个 SSR（Server-Side Rendering）入口点，并通过将配置选项传递给 Laravel 插件来指定入口点：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import { defineConfig } from &#39;vite&#39;;
import laravel from &#39;laravel-vite-plugin&#39;;

export default defineConfig({
    plugins: [
        laravel({
            input: &#39;resources/js/app.js&#39;,
            ssr: &#39;resources/js/ssr.js&#39;,
        }),
    ],
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为确保不遗漏重建 SSR 入口点，我们建议增加应用程序的 <code>package.json</code> 中的 「build」 脚本来创建 SSR 构建：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&quot;scripts&quot;: {
     &quot;dev&quot;: &quot;vite&quot;,
     &quot;build&quot;: &quot;vite build&quot; // [tl! remove]
     &quot;build&quot;: &quot;vite build &amp;&amp; vite build --ssr&quot; // [tl! add]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后，要构建和启动 SSR 服务器，你可以运行以下命令：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm run build
node bootstrap/ssr/ssr.mjs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>注意</strong> Laravel 的 <a href="./starter-kits">starter kits</a> 已经包含了适当的 Laravel、Inertia SSR 和 Vite 配置。查看 <a href="./starter-kits#breeze-and-inertia">Laravel Breeze</a> ，以获得使用 Laravel、Inertia SSR 和 Vite 的最快速的方法。</p></blockquote><h2 id="script-style-标签的属性" tabindex="-1"><a class="header-anchor" href="#script-style-标签的属性" aria-hidden="true">#</a> Script &amp; Style 标签的属性</h2><h3 id="content-security-policy-csp-nonce" tabindex="-1"><a class="header-anchor" href="#content-security-policy-csp-nonce" aria-hidden="true">#</a> Content Security Policy (CSP) Nonce</h3>`,21),Q={href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/nonce",target:"_blank",rel:"noopener noreferrer"},nn=s("code",null,"nonce",-1),sn={href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP",target:"_blank",rel:"noopener noreferrer"},an=s("a",{href:"./middleware"},"middleware",-1),en=s("code",null,"useCspNonce",-1),tn=i(`<p>Copy code</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;?php

namespace App\\Http\\Middleware;

use Closure;
use Illuminate\\Http\\Request;
use Illuminate\\Support\\Facades\\Vite;
use Symfony\\Component\\HttpFoundation\\Response;

class AddContentSecurityPolicyHeaders {
    /**
     * Handle an incoming request.
     *
     * @param  \\Closure(\\Illuminate\\Http\\Request): (\\Symfony\\Component\\HttpFoundation\\Response)  $next
     */
    public function handle(Request $request, Closure $next, string $role): Response {
        Vite::useCspNonce();

        return $next($request)-&gt;withHeaders([
            &#39;Content-Security-Policy&#39; =&gt; &quot;script-src &#39;nonce-&quot;.Vite::cspNonce().&quot;&#39;&quot;,
        ]);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>调用了 <code>useCspNonce</code> 方法后，Laravel 将自动在所有生成的脚本和样式标签上包含 <code>nonce</code> 属性。</p>`,3),ln={href:"https://github.com/tighten/ziggy#using-routes-with-a-content-security-policy",target:"_blank",rel:"noopener noreferrer"},pn=s("code",null,"@route",-1),on=s("code",null,"cspNonce",-1),cn=i(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@routes(nonce: Vite::cspNonce())
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果你已经有了一个 nonce，想要告诉 Laravel 使用它，你可以通过将 nonce 传递给 <code>useCspNonce</code> 方法来实现：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Vite::useCspNonce($nonce);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="subresource-integrity-sri"></a> ###子资源完整性 (SRI) 如果你的 <code>Vite manifest</code> 中包括资源的完整性哈希，则 Laravel 将自动向其生成的任何脚本和样式标签中添加 <code>integrity</code> 属性，以执行 子资源完整性。默认情况下，Vite 不包括其清单中的 <code>integrity</code> 哈希，但是你可以通过安装 <code>vite-plugin-manifest-sri</code> NPM 插件来启用它：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> --save-dev vite-plugin-manifest-sri
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后，在你的 <code>vite.config.js</code> 文件中启用此插件：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> laravel <span class="token keyword">from</span> <span class="token string">&#39;laravel-vite-plugin&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> manifestSRI <span class="token keyword">from</span> <span class="token string">&#39;vite-plugin-manifest-sri&#39;</span><span class="token punctuation">;</span><span class="token comment">// [tl! add]</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token function">laravel</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token comment">// ...</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token function">manifestSRI</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token comment">// [tl! add]</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果需要，你也可以自定义清单中的完整性哈希键：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Support<span class="token punctuation">\\</span>Facades<span class="token punctuation">\\</span>Vite</span><span class="token punctuation">;</span>

<span class="token class-name static-context">Vite</span><span class="token operator">::</span><span class="token function">useIntegrityKey</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;custom-integrity-key&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你想完全禁用这个自动检测，你可以将 <code>false</code> 传递给 <code>useIntegrityKey</code> 方法：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Vite::useIntegrityKey(false);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="arbitrary-attributes"></a></p><h3 id="任意属性" tabindex="-1"><a class="header-anchor" href="#任意属性" aria-hidden="true">#</a> 任意属性</h3><p>如果你需要在脚本和样式标签中包含其他属性，例如 <code>data-turbo-track</code> 属性，你可以通过 <code>useScriptTagAttributes</code> 和 <code>useStyleTagAttributes</code> 方法指定它们。通常，这些方法应从一个服务提供程序中调用：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>use Illuminate\\Support\\Facades\\Vite;

Vite::useScriptTagAttributes([
    &#39;data-turbo-track&#39; =&gt; &#39;reload&#39;, // 为属性指定一个值...
    &#39;async&#39; =&gt; true, // 在不使用值的情况下指定属性...
    &#39;integrity&#39; =&gt; false, // 排除一个将被包含的属性...
]);

Vite::useStyleTagAttributes([
    &#39;data-turbo-track&#39; =&gt; &#39;reload&#39;,
]);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你需要有条件地添加属性，你可以传递一个回调函数，它将接收到资产源路径、它的URL、它的清单块和整个清单：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>use Illuminate\\Support\\Facades\\Vite;

Vite::useScriptTagAttributes(fn (string $src, string $url, array|null $chunk, array|null $manifest) =&gt; [
    &#39;data-turbo-track&#39; =&gt; $src === &#39;resources/js/app.js&#39; ? &#39;reload&#39; : false,
]);

Vite::useStyleTagAttributes(fn (string $src, string $url, array|null $chunk, array|null $manifest) =&gt; [
    &#39;data-turbo-track&#39; =&gt; $chunk &amp;&amp; $chunk[&#39;isEntry&#39;] ? &#39;reload&#39; : false,
]);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>警告</strong> 在 Vite 开发服务器运行时，<code>$chunk</code> 和 <code>$manifest</code> 参数将为 <code>null</code>。</p></blockquote><p><a name="advanced-customization"></a></p><h2 id="高级定制" tabindex="-1"><a class="header-anchor" href="#高级定制" aria-hidden="true">#</a> 高级定制</h2><p>默认情况下，Laravel 的 Vite 插件使用合理的约定，适用于大多数应用，但是有时你可能需要自定义 Vite 的行为。为了启用额外的自定义选项，我们提供了以下方法和选项，可以用于替代 <code>@vite</code> Blade 指令：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!doctype html&gt;
&lt;head&gt;
    {{-- ... --}}

    {{
        Vite::useHotFile(storage_path(&#39;vite.hot&#39;)) // 自定义 &quot;hot&quot; 文件...
            -&gt;useBuildDirectory(&#39;bundle&#39;) // 自定义构建目录...
            -&gt;useManifestFilename(&#39;assets.json&#39;) // 自定义清单文件名...
            -&gt;withEntryPoints([&#39;resources/js/app.js&#39;]) // 指定入口点...
    }}
&lt;/head&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后，在 <code>vite.config.js</code> 文件中，你应该指定相同的配置：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import { defineConfig } from &#39;vite&#39;;
import laravel from &#39;laravel-vite-plugin&#39;;

export default defineConfig({
    plugins: [
        laravel({
            hotFile: &#39;storage/vite.hot&#39;, // 自定义 &quot;hot&quot; 文件...
            buildDirectory: &#39;bundle&#39;, // 自定义构建目录...
            input: [&#39;resources/js/app.js&#39;], // 指定入口点...
        }),
    ],
    build: {
      manifest: &#39;assets.json&#39;, // 自定义清单文件名...
    },
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="correcting-dev-server-urls"></a></p><h3 id="修正开发服务器-url" tabindex="-1"><a class="header-anchor" href="#修正开发服务器-url" aria-hidden="true">#</a> 修正开发服务器 URL</h3><p>Vite 生态系统中的某些插件默认假设以正斜杠开头的 URL 始终指向 Vite 开发服务器。然而，由于 Laravel 集成的性质，实际情况并非如此。</p><p>例如，<code>vite-imagetools</code> 插件在 Vite 服务时，你的资产时会输出以下类似的 URL：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;img src=&quot;/@imagetools/f0b2f404b13f052c604e632f2fb60381bf61a520&quot;&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>vite-imagetools</code> 插件期望输出URL将被 Vite 拦截，并且插件可以处理所有以 <code>/@imagetools</code> 开头的 URL。如果你正在使用期望此行为的插件，则需要手动纠正 URL。你可以在 <code>vite.config.js</code> 文件中使用 <code>transformOnServe</code> 选项来实现。</p><p>在这个例子中，我们将在生成的代码中的所有 <code>/@imagetools</code> 钱加上开发服务器的 URL：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import { defineConfig } from &#39;vite&#39;;
import laravel from &#39;laravel-vite-plugin&#39;;
import { imagetools } from &#39;vite-imagetools&#39;;

export default defineConfig({
    plugins: [
        laravel({
            // ...
            transformOnServe: (code, devServerUrl) =&gt; code.replaceAll(&#39;/@imagetools&#39;, devServerUrl+&#39;/@imagetools&#39;),
        }),
        imagetools(),
    ],
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在，在 Vite 提供资产服务时，它会输出URL指向 Vite 开发服务器：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>- &lt;img src=&quot;/@imagetools/f0b2f404b13f052c604e632f2fb60381bf61a520&quot;&gt;&lt;!-- [tl! remove] --&gt;
+ &lt;img src=&quot;http://[::1]:5173/@imagetools/f0b2f404b13f052c604e632f2fb60381bf61a520&quot;&gt;&lt;!-- [tl! add] --&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,34);function rn(dn,un){const a=l("ExternalLinkIcon");return p(),o("div",null,[r,s("p",null,[s("a",d,[n("Vite"),e(a)]),n(" 是一款现代前端构建工具，提供极快的开发环境并将你的代码捆绑到生产准备的资源中。在使用 Laravel 构建应用程序时，通常会使用 Vite 将你的应用程序的 CSS 和 JavaScript 文件绑定到生产环境的资源中。")]),u,s("blockquote",null,[s("p",null,[n("注意：你正在运行 Laravel Mix 吗？在新的 Laravel 安装中，Vite 已经取代了 Laravel Mix 。有关 Mix 的文档，请访问 "),s("a",v,[n("Laravel Mix"),e(a)]),n(" 网站。如果你想切换到 Vite，请参阅我们的 "),s("a",m,[n("迁移指南"),e(a)]),n("。")])]),k,s("p",null,[n("在转向 Vite 之前，新的 Laravel 应用程序在打包资产时通常使用 "),s("a",b,[n("Mix"),e(a)]),n("，它由 "),s("a",g,[n("webpack"),e(a)]),n(" 支持。Vite 专注于在构建丰富的 JavaScript 应用程序时提供更快、更高效的开发体验。如果你正在开发单页面应用程序（SPA），包括使用 "),s("a",h,[n("Inertia"),e(a)]),n(" 工具开发的应用程序，则 Vite 是完美选择。")]),s("p",null,[n("Vite 也适用于具有 JavaScript “sprinkles” 的传统服务器端渲染应用程序，包括使用 "),s("a",f,[n("Livewire"),e(a)]),n(" 的应用程序。但是，它缺少 Laravel Mix 支持的某些功能，例如将没有直接在 JavaScript 应用程序中引用的任意资产复制到构建中的能力。")]),x,s("p",null,[n("如果你使用我们的 Vite 脚手架创建了一个新的 Laravel 应用程序，但需要切换回 Laravel Mix 和 webpack，那么也没有问题。请参阅我们的"),s("a",y,[n("从 Vite 切换到 Mix 的官方指南"),e(a)]),n("。")]),_,s("p",null,[n("你可以通过"),s("a",V,[n("官方 Node 网站"),e(a)]),n("的简单图形安装程序轻松安装最新版本的 Node 和 NPM。或者，如果你使用的是 "),w,n("，可以通过 Sail 调用 Node 和 NPM：")]),j,s("p",null,[n("如果你无法为系统生成可信证书，则可以安装并配置 "),s("a",S,[L,n(" 插件"),e(a)]),n("。使用不受信任的证书时，你需要通过在运行 "),C,n(" 命令时按照控制台中的“Local”链接接受 Vite 开发服务器的证书警告。")]),R,s("p",null,[n("如果你想要使用 "),s("a",q,[n("Vue"),e(a)]),n(" 框架构建前端，那么你还需要安装 "),T,n(" 插件：")]),U,s("p",null,[n("如果你想要使用 "),s("a",I,[n("React"),e(a)]),n(" 框架构建前端，那么你还需要安装 "),N,n(" 插件：")]),P,s("p",null,[n("你可以在 "),s("a",$,[n("Vite 文档"),e(a)]),n(" 中了解有关 Vite 的 CSS 支持更多的信息。如果你使用 PostCSS 插件，如 "),s("a",B,[n("Tailwind"),e(a)]),n("，你可以在项目的根目录中创建一个 "),A,n(" 文件，Vite 会自动应用它：")]),M,s("blockquote",null,[s("p",null,[E,n(" Laravel 的 "),J,n(" 已经包含了正确的 Tailwind、PostCSS 和 Vite 配置。或者，如果你想在不使用我们的起始套件的情况下使用 Tailwind 和 Laravel，请查看 "),s("a",z,[n("Tailwind 的 Laravel 安装指南"),e(a)]),n("。")])]),F,s("p",null,[n("监听 "),H,n(" 目录对于在应用程序前端中利用 "),s("a",D,[n("Ziggy"),e(a)]),n(" 生成路由链接非常有用。")]),W,s("p",null,[n("在后台，Laravel Vite 插件使用了 "),s("a",G,[K,e(a)]),n(" 包，该包提供了一些高级配置选项，可微调此功能的行为。如果你需要这种级别的自定义，可以提供一个 "),O,n(" 定义：")]),X,s("p",null,[n("请记住，"),s("a",Y,[n("绝对路径的 URL 不会被 Vite 重新编写"),e(a)]),n("，因此它们不会被添加前缀。")]),Z,s("p",null,[n("如果你希望在你的脚本和样式标签中包含 "),s("a",Q,[nn,n(" 属性"),e(a)]),n("，作为你的 "),s("a",sn,[n("Content Security Policy"),e(a)]),n(" 的一部分，你可以使用自定义 "),an,n(" 中的 "),en,n(" 方法生成或指定一个 nonce：")]),tn,s("p",null,[n("如果你需要在其他地方指定 nonce，包括 Laravel 的 starter kits 中带有的 "),s("a",ln,[n("Ziggy "),pn,n(" directive"),e(a)]),n(" 指令，你可以使用 "),on,n(" 方法来检索它：")]),cn])}const kn=t(c,[["render",rn],["__file","vite.html.vue"]]);export{kn as default};
