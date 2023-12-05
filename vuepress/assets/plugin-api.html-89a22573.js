import{_ as c}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as u,c as r,d as s,a as n,b as a,w as t,e as p}from"./app-4560479e.js";const d={},k=n("h1",{id:"插件-api",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#插件-api","aria-hidden":"true"},"#"),a(" 插件 API")],-1),v={href:"https://www.npmjs.com/package/@vuepress/core",target:"_blank",rel:"noopener noreferrer"},m=p('<h2 id="概览" tabindex="-1"><a class="header-anchor" href="#概览" aria-hidden="true">#</a> 概览</h2><p>插件需要在初始化之前使用。基础配置项会在使用插件时立即被处理：</p><ul><li><a href="#name">name</a></li><li><a href="#multiple">multiple</a></li></ul><p>下列 Hooks 会在初始化 App 时处理：</p><ul><li><a href="#%E6%8F%92%E4%BB%B6-api">插件 API</a><ul><li><a href="#%E6%A6%82%E8%A7%88">概览</a></li><li><a href="#%E5%9F%BA%E7%A1%80%E9%85%8D%E7%BD%AE%E9%A1%B9">基础配置项</a><ul><li><a href="#name">name</a></li><li><a href="#multiple">multiple</a></li></ul></li><li><a href="#%E5%BC%80%E5%8F%91-hooks">开发 Hooks</a><ul><li><a href="#alias">alias</a></li><li><a href="#clientconfigfile">clientConfigFile</a></li><li><a href="#define">define</a></li><li><a href="#extendsbundleroptions">extendsBundlerOptions</a></li><li><a href="#extendsmarkdownoptions">extendsMarkdownOptions</a></li><li><a href="#extendsmarkdown">extendsMarkdown</a></li><li><a href="#extendspageoptions">extendsPageOptions</a></li><li><a href="#extendspage">extendsPage</a></li></ul></li><li><a href="#%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F-hooks">生命周期 Hooks</a><ul><li><a href="#oninitialized">onInitialized</a></li><li><a href="#onprepared">onPrepared</a></li><li><a href="#onwatched">onWatched</a></li><li><a href="#ongenerated">onGenerated</a></li></ul></li></ul></li></ul><p>下列 Hooks 会在准备文件时处理：</p><ul><li><a href="#clientconfigfile">clientConfigFile</a></li><li><a href="#onprepared">onPrepared</a></li></ul><p>下列 Hooks 会在 dev / build 时处理：</p><ul><li><a href="#extendsbundleroptions">extendsBundlerOptions</a></li><li><a href="#alias">alias</a></li><li><a href="#define">define</a></li><li><a href="#onwatched">onWatched</a></li><li><a href="#ongenerated">onGenerated</a></li></ul>',9),h=p(`<h2 id="基础配置项" tabindex="-1"><a class="header-anchor" href="#基础配置项" aria-hidden="true">#</a> 基础配置项</h2><h3 id="name" tabindex="-1"><a class="header-anchor" href="#name" aria-hidden="true">#</a> name</h3><ul><li><p>类型： <code>string</code></p></li><li><p>详情：</p><p>插件的名称。</p><p>它会被用来识别插件，以避免多次使用同一个插件，因此应确保你的插件名称是独一无二的。</p><p>它应遵从如下命名约定：</p><ul><li>非 Scoped: <code>vuepress-plugin-foo</code></li><li>Scoped: <code>@org/vuepress-plugin-foo</code></li></ul></li><li><p>参考：</p><ul><li><a href="#multiple">插件 API &gt; multiple</a></li></ul></li></ul><h3 id="multiple" tabindex="-1"><a class="header-anchor" href="#multiple" aria-hidden="true">#</a> multiple</h3><ul><li><p>类型： <code>boolean</code></p></li><li><p>默认值： <code>false</code></p></li><li><p>详情：</p><p>插件是否能够被多次使用。</p><p>如果设置为 <code>false</code> ，当有相同名称的插件被使用时，先使用的会被后使用的替换掉。</p><p>如果设置为 <code>true</code> ，相同名称的插件可以被多次使用且不会被替换。</p></li><li><p>参考：</p><ul><li><a href="#name">插件 API &gt; name</a></li></ul></li></ul><h2 id="开发-hooks" tabindex="-1"><a class="header-anchor" href="#开发-hooks" aria-hidden="true">#</a> 开发 Hooks</h2><h3 id="alias" tabindex="-1"><a class="header-anchor" href="#alias" aria-hidden="true">#</a> alias</h3><ul><li><p>类型： <code>Record&lt;string, any&gt; | ((app: App, isServer: boolean) =&gt; Record&lt;string, any&gt;)</code></p></li><li><p>详情：</p><p>定义路径别名。</p><p>该 Hook 接收一个对象，或者一个返回对象的函数。</p></li><li><p>示例：</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> getDirname<span class="token punctuation">,</span> path <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@vuepress/utils&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> __dirname <span class="token operator">=</span> <span class="token function">getDirname</span><span class="token punctuation">(</span><span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  alias<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;@alias&quot;</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;./path/to/alias&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="clientconfigfile" tabindex="-1"><a class="header-anchor" href="#clientconfigfile" aria-hidden="true">#</a> clientConfigFile</h3><ul><li><p>类型： <code>string | ((app: App) =&gt; string | Promise&lt;string&gt;)</code></p></li><li><p>详情：</p><p>客户端配置文件路径。</p><p>该 Hook 接收文件绝对路径，或者一个返回路径的函数。</p></li><li><p>示例：</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> getDirname<span class="token punctuation">,</span> path <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@vuepress/utils&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> __dirname <span class="token operator">=</span> <span class="token function">getDirname</span><span class="token punctuation">(</span><span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  clientConfigFile<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;./path/to/clientConfig.js&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),b=p(`<h3 id="define" tabindex="-1"><a class="header-anchor" href="#define" aria-hidden="true">#</a> define</h3><ul><li><p>类型： <code>Record&lt;string, any&gt; | ((app: App, isServer: boolean) =&gt; Record&lt;string, any&gt;)</code></p></li><li><p>详情：</p><p>定义全局常量。</p><p>该 Hook 接收一个对象，或者一个返回对象的函数。</p><p>它可以被用于向客户端文件传递变量。注意这里的值都会自动被 <code>JSON.stringify()</code> 处理。</p></li><li><p>示例：</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  define<span class="token operator">:</span> <span class="token punctuation">{</span>
    __GLOBAL_BOOLEAN__<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    __GLOBAL_STRING__<span class="token operator">:</span> <span class="token string">&quot;foobar&quot;</span><span class="token punctuation">,</span>
    __GLOBAL_OBJECT__<span class="token operator">:</span> <span class="token punctuation">{</span> foo<span class="token operator">:</span> <span class="token string">&quot;bar&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="extendsbundleroptions" tabindex="-1"><a class="header-anchor" href="#extendsbundleroptions" aria-hidden="true">#</a> extendsBundlerOptions</h3><ul><li><p>类型： <code>(options: BundlerOptions, app: App) =&gt; void | Promise&lt;void&gt;</code></p></li><li><p>详情：</p><p>Bundler 配置项扩展。</p><p>该 Hook 接收一个函数，在参数中会收到 Bundler 配置项。</p><p>该 Hook 可以用于修改 Bundler 配置项。</p><p>你可以通过 <code>app.options.bundler.name</code> 判断用户当前使用的 Bundler。</p></li><li><p>示例：</p></li></ul>`,5),g={href:"https://vuejs.org/api/application.html#app-config-compileroptions",target:"_blank",rel:"noopener noreferrer"},f=p(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">extendsBundlerOptions</span><span class="token operator">:</span> <span class="token punctuation">(</span>bundlerOptions<span class="token punctuation">,</span> app<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 修改 @vuepress/bundler-vite 的配置项</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>app<span class="token punctuation">.</span>options<span class="token punctuation">.</span>bundler<span class="token punctuation">.</span>name <span class="token operator">===</span> <span class="token string">&quot;@vuepress/bundler-vite&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      bundlerOptions<span class="token punctuation">.</span>vuePluginOptions <span class="token operator">??=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
      bundlerOptions<span class="token punctuation">.</span>vuePluginOptions<span class="token punctuation">.</span>template <span class="token operator">??=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
      bundlerOptions<span class="token punctuation">.</span>vuePluginOptions<span class="token punctuation">.</span>template<span class="token punctuation">.</span>compilerOptions <span class="token operator">??=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> isCustomElement <span class="token operator">=</span>
        bundlerOptions<span class="token punctuation">.</span>vuePluginOptions<span class="token punctuation">.</span>template<span class="token punctuation">.</span>compilerOptions
          <span class="token punctuation">.</span>isCustomElement<span class="token punctuation">;</span>
      bundlerOptions<span class="token punctuation">.</span>vuePluginOptions<span class="token punctuation">.</span>template<span class="token punctuation">.</span>compilerOptions<span class="token punctuation">.</span><span class="token function-variable function">isCustomElement</span> <span class="token operator">=</span>
        <span class="token punctuation">(</span>tag<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>isCustomElement<span class="token operator">?.</span><span class="token punctuation">(</span>tag<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>tag <span class="token operator">===</span> <span class="token string">&quot;my-custom-element&quot;</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 修改 @vuepress/bundler-webpack 的配置项</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>app<span class="token punctuation">.</span>options<span class="token punctuation">.</span>bundler<span class="token punctuation">.</span>name <span class="token operator">===</span> <span class="token string">&quot;@vuepress/bundler-webpack&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      bundlerOptions<span class="token punctuation">.</span>vue <span class="token operator">??=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
      bundlerOptions<span class="token punctuation">.</span>vue<span class="token punctuation">.</span>compilerOptions <span class="token operator">??=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> isCustomElement <span class="token operator">=</span>
        bundlerOptions<span class="token punctuation">.</span>vue<span class="token punctuation">.</span>compilerOptions<span class="token punctuation">.</span>isCustomElement<span class="token punctuation">;</span>
      bundlerOptions<span class="token punctuation">.</span>vue<span class="token punctuation">.</span>compilerOptions<span class="token punctuation">.</span><span class="token function-variable function">isCustomElement</span> <span class="token operator">=</span> <span class="token punctuation">(</span>tag<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>isCustomElement<span class="token operator">?.</span><span class="token punctuation">(</span>tag<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>tag <span class="token operator">===</span> <span class="token string">&quot;my-custom-element&quot;</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),_=p(`<h3 id="extendsmarkdownoptions" tabindex="-1"><a class="header-anchor" href="#extendsmarkdownoptions" aria-hidden="true">#</a> extendsMarkdownOptions</h3><ul><li><p>类型： <code>(options: MarkdownOptions, app: App) =&gt; void | Promise&lt;void&gt;</code></p></li><li><p>详情：</p><p>Markdown 配置项扩展。</p><p>该 Hook 接收一个函数，在参数中会收到 Markdown 配置项。</p><p>该 Hook 可以用于修改 Markdown 配置项。</p></li><li><p>示例：</p></li></ul><p>修改默认提取的子标题层级：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">extendsMarkdownOptions</span><span class="token operator">:</span> <span class="token punctuation">(</span>markdownOptions<span class="token punctuation">,</span> app<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>markdownOptions<span class="token punctuation">.</span>headers <span class="token operator">===</span> <span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
    markdownOptions<span class="token punctuation">.</span>headers <span class="token operator">??=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>markdownOptions<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>level<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
    markdownOptions<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>level <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),w=n("h3",{id:"extendsmarkdown",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#extendsmarkdown","aria-hidden":"true"},"#"),a(" extendsMarkdown")],-1),y=n("li",null,[n("p",null,[a("类型： "),n("code",null,"(md: Markdown, app: App) => void | Promise<void>")])],-1),x=n("p",null,"详情：",-1),P=n("p",null,"Markdown 增强。",-1),O={href:"https://github.com/markdown-it/markdown-it",target:"_blank",rel:"noopener noreferrer"},A=n("code",null,"Markdown",-1),E=n("p",null,"该 Hook 可以用来添加额外的 markdown-it 插件、应用额外的自定义功能。",-1),q=n("li",null,[n("p",null,"示例：")],-1),B=p(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">extendsMarkdown</span><span class="token operator">:</span> <span class="token punctuation">(</span>md<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    md<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>plugin1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    md<span class="token punctuation">.</span>linkify<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token punctuation">{</span> fuzzyEmail<span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="extendspageoptions" tabindex="-1"><a class="header-anchor" href="#extendspageoptions" aria-hidden="true">#</a> extendsPageOptions</h3><ul><li><p>类型： <code>(options: PageOptions, app: App) =&gt; void | Promise&lt;void&gt;</code></p></li><li><p>详情：</p><p>页面配置项扩展。</p><p>该 Hook 接收一个函数，在参数中会收到 <code>createPage</code> 传入的配置项。</p><p>该 Hook 可以用于修改页面配置项。</p></li><li><p>示例：</p></li></ul><p>为 <code>_posts</code> 目录下的页面设置永久链接 Pattern ：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">extendsPageOptions</span><span class="token operator">:</span> <span class="token punctuation">(</span>pageOptions<span class="token punctuation">,</span> app<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>pageOptions<span class="token punctuation">.</span>filePath<span class="token operator">?.</span><span class="token function">startsWith</span><span class="token punctuation">(</span>app<span class="token punctuation">.</span>dir<span class="token punctuation">.</span><span class="token function">source</span><span class="token punctuation">(</span><span class="token string">&quot;_posts/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      pageOptions<span class="token punctuation">.</span>frontmatter <span class="token operator">=</span> pageOptions<span class="token punctuation">.</span>frontmatter <span class="token operator">??</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
      pageOptions<span class="token punctuation">.</span>frontmatter<span class="token punctuation">.</span>permalinkPattern <span class="token operator">=</span>
        <span class="token string">&quot;/:year/:month/:day/:slug.html&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),H=p(`<h3 id="extendspage" tabindex="-1"><a class="header-anchor" href="#extendspage" aria-hidden="true">#</a> extendsPage</h3><ul><li><p>类型： <code>(page: Page, app: App) =&gt; void | Promise&lt;void&gt;</code></p></li><li><p>详情：</p><p>页面扩展。</p><p>该 Hook 接收一个函数，在参数中会收到一个 <code>Page</code> 实例。</p><p>该 Hook 可以用来在 Page 对象上添加额外的属性，或修改现有的属性等。</p><p>值得一提的是，针对 <code>page.data</code> 和 <code>page.routeMeta</code> 的改动可以在客户端代码中使用。</p></li><li><p>示例：</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">extendsPage</span><span class="token operator">:</span> <span class="token punctuation">(</span>page<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    page<span class="token punctuation">.</span>foo <span class="token operator">=</span> <span class="token string">&quot;foo&quot;</span><span class="token punctuation">;</span>
    page<span class="token punctuation">.</span>data<span class="token punctuation">.</span>bar <span class="token operator">=</span> <span class="token string">&quot;bar&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在客户端组件中：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> usePageData <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@vuepress/client&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> page <span class="token operator">=</span> <span class="token function">usePageData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>page<span class="token punctuation">.</span>value<span class="token punctuation">.</span>bar<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// bar</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),C=p('<h2 id="生命周期-hooks" tabindex="-1"><a class="header-anchor" href="#生命周期-hooks" aria-hidden="true">#</a> 生命周期 Hooks</h2><h3 id="oninitialized" tabindex="-1"><a class="header-anchor" href="#oninitialized" aria-hidden="true">#</a> onInitialized</h3><ul><li><p>类型： <code>(app: App) =&gt; void | Promise&lt;void&gt;</code></p></li><li><p>详情：</p><p>该 Hook 会在 VuePress App 初始化后被立即调用。</p></li></ul><h3 id="onprepared" tabindex="-1"><a class="header-anchor" href="#onprepared" aria-hidden="true">#</a> onPrepared</h3><ul><li><p>类型： <code>(app: App) =&gt; void | Promise&lt;void&gt;</code></p></li><li><p>详情：</p><p>该 Hook 会在 VuePress App 完成文件准备后被立即调用。</p></li></ul><h3 id="onwatched" tabindex="-1"><a class="header-anchor" href="#onwatched" aria-hidden="true">#</a> onWatched</h3><ul><li><p>类型： <code>(app: App, watchers: Closable[], restart: () =&gt; Promise&lt;void&gt;) =&gt; void | Promise&lt;void&gt;</code></p></li><li><p>详情：</p><p>该 Hook 会在 VuePress App 启动开发服务器并开始监听文件修改后被调用。</p><p><code>watchers</code> 是一个文件监听器的数组。在修改配置文件导致重启 dev 命令时，这些监听器会被自动关闭。如果你在当前 Hook 中添加了新的监听器，你应该把它们也加入到这个数组中，确保在重启 dev 命令时它们能被正确关闭。</p><p><code>restart</code> 方法用来重启 dev 命令。调用该方法时， <code>watchers</code> 数组中的监听器也会被自动关闭。</p></li></ul><h3 id="ongenerated" tabindex="-1"><a class="header-anchor" href="#ongenerated" aria-hidden="true">#</a> onGenerated</h3><ul><li><p>类型： <code>(app: App) =&gt; void | Promise&lt;void&gt;</code></p></li><li><p>详情：</p><p>该 Hook 会在 VuePress App 完成静态文件生成后被立即调用。</p></li></ul>',9);function z(I,M){const l=i("NpmBadge"),o=i("ExternalLinkIcon"),e=i("RouterLink");return u(),r("div",null,[k,s(l,{package:"@vuepress/core"}),n("p",null,[a("插件 API 是由 "),n("a",v,[a("@vuepress/core"),s(o)]),a(" 包支持的。你可以查看 "),s(e,{to:"/zh/reference/node-api.html"},{default:t(()=>[a("Node API")]),_:1}),a(" 来了解如何使用插件 Hooks 中的 VuePress App 实例。")]),m,n("blockquote",null,[n("p",null,[a("查看 "),s(e,{to:"/zh/advanced/architecture.html#%E6%A0%B8%E5%BF%83%E6%B5%81%E7%A8%8B%E4%B8%8E-hooks"},{default:t(()=>[a("深入 > 架构 > 核心流程与 Hooks")]),_:1}),a(" 来更好地理解该流程。")])]),h,n("ul",null,[n("li",null,[a("参考： "),n("ul",null,[n("li",null,[s(e,{to:"/zh/reference/client-api.html#defineclientconfig"},{default:t(()=>[a("客户端 API > defineClientConfig")]),_:1})]),n("li",null,[s(e,{to:"/zh/advanced/cookbook/usage-of-client-config.html"},{default:t(()=>[a("深入 > Cookbook > 客户端配置的使用方法")]),_:1})])])])]),b,n("p",null,[a("添加默认的 "),n("a",g,[a("app.compilerOptions.isCustomElement"),s(o)]),a(" 配置：")]),f,n("ul",null,[n("li",null,[a("参考： "),n("ul",null,[n("li",null,[s(e,{to:"/zh/reference/bundler/vite.html"},{default:t(()=>[a("打包工具 > Vite")]),_:1})]),n("li",null,[s(e,{to:"/zh/reference/bundler/webpack.html"},{default:t(()=>[a("打包工具 > Webpack")]),_:1})])])])]),_,n("ul",null,[n("li",null,[a("参考： "),n("ul",null,[n("li",null,[s(e,{to:"/zh/reference/config.html#markdown"},{default:t(()=>[a("配置 > markdown")]),_:1})])])])]),w,n("ul",null,[y,n("li",null,[x,P,n("p",null,[a("该 Hook 接收一个函数，在参数中会收到一个由 "),n("a",O,[a("markdown-it"),s(o)]),a(" 提供的 "),A,a(" 实例。")]),E]),q]),B,n("ul",null,[n("li",null,[a("参考： "),n("ul",null,[n("li",null,[s(e,{to:"/zh/reference/node-api.html#createPage"},{default:t(()=>[a("Node API > Page > createPage")]),_:1})])])])]),H,n("ul",null,[n("li",null,[a("参考： "),n("ul",null,[n("li",null,[s(e,{to:"/zh/reference/client-api.html#usepagedata"},{default:t(()=>[a("客户端 API > usePageData")]),_:1})]),n("li",null,[s(e,{to:"/zh/reference/node-api.html#data"},{default:t(()=>[a("Node API > Page 属性 > data")]),_:1})]),n("li",null,[s(e,{to:"/zh/reference/node-api.html#routemeta"},{default:t(()=>[a("Node API > Page 属性 > routeMeta")]),_:1})])])])]),C])}const D=c(d,[["render",z],["__file","plugin-api.html.vue"]]);export{D as default};
