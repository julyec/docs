import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o,c as d,b as e,d as s,w as i,e as a,a as c}from"./app-f5806220.js";const r={},p=e("h1",{id:"installation",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#installation","aria-hidden":"true"},"#"),a(" Installation")],-1),u={class:"table-of-contents"},v=c(`<h2 id="requirements" tabindex="-1"><a class="header-anchor" href="#requirements" aria-hidden="true">#</a> Requirements</h2><ul><li>PHP: <code>^7.2\\|^8.0</code></li><li>Laravel: <code>^5.8</code></li><li>PhpSpreadsheet: <code>^1.21</code></li><li>PHP extension <code>php_zip</code> enabled</li><li>PHP extension <code>php_xml</code> enabled</li><li>PHP extension <code>php_gd2</code> enabled</li><li>PHP extension <code>php_iconv</code> enabled</li><li>PHP extension <code>php_simplexml</code> enabled</li><li>PHP extension <code>php_xmlreader</code> enabled</li><li>PHP extension <code>php_zlib</code> enabled</li></ul><h2 id="installation-1" tabindex="-1"><a class="header-anchor" href="#installation-1" aria-hidden="true">#</a> Installation</h2><p>Require this package in the <code>composer.json</code> of your Laravel project. This will download the package and <em>PhpSpreadsheet</em>.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>composer require maatwebsite/excel:^3.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>If installing your receive the following error</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  Your requirements could not be resolved to an installable set of packages.

  Problem 1
    - Root composer.json requires maatwebsite/excel 3.1 -&gt; satisfiable by maatwebsite/excel[3.1.0].
    - maatwebsite/excel 3.1.0 requires php ^7.0 -&gt; your php version (8.2.8) does not satisfy that requirement.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You can try simply to install without the caret</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>composer require maatwebsite/excel
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>If you don&#39;t get the latest version or run into more composer errors, please make sure you have installed all required PHP extensions like zip, gd, etc.</p><p>The <code>Maatwebsite\\Excel\\ExcelServiceProvider</code> is <strong>auto-discovered</strong> and registered by default.</p><p>If you want to register it yourself, add the ServiceProvider in <code>config/app.php</code>:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token string single-quoted-string">&#39;providers&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
    <span class="token comment">/*
     * Package Service Providers...
     */</span>
    <span class="token class-name class-name-fully-qualified static-context">Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>ExcelServiceProvider</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The <code>Excel</code> facade is also <strong>auto-discovered</strong>.</p><p>If you want to add it manually, add the Facade in <code>config/app.php</code>:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token string single-quoted-string">&#39;aliases&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
    <span class="token operator">...</span>
    <span class="token string single-quoted-string">&#39;Excel&#39;</span> <span class="token operator">=&gt;</span> <span class="token class-name class-name-fully-qualified static-context">Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Facades<span class="token punctuation">\\</span>Excel</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>To publish the config, run the vendor publish command:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>php artisan vendor:publish --provider=&quot;Maatwebsite\\Excel\\ExcelServiceProvider&quot; --tag=config
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>This will create a new config file named <code>config/excel.php</code>.</p>`,19);function m(h,b){const n=l("router-link");return o(),d("div",null,[p,e("nav",u,[e("ul",null,[e("li",null,[s(n,{to:"#requirements"},{default:i(()=>[a("Requirements")]),_:1})]),e("li",null,[s(n,{to:"#installation-1"},{default:i(()=>[a("Installation")]),_:1})])])]),v])}const f=t(r,[["render",m],["__file","installation.html.vue"]]);export{f as default};
