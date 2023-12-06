import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as c,c as l,a as n,b as a,d as e,e as p}from"./app-c17653d8.js";const r={},i=n("h1",{id:"laravel-octane",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#laravel-octane","aria-hidden":"true"},"#"),a(" Laravel Octane")],-1),u={href:"https://github.com/laravel/octane",target:"_blank",rel:"noopener noreferrer"},d=n("code",null,"Swoole/RoadRunner",-1),v=n("code",null,"Laravel",-1),k=n("code",null,"Laravel",-1),m=p(`<p><code>Dcat Admin</code>兼容了<code>Laravel Octane</code>环境，只需在配置文件<code>config/octane.php</code>中加入如下配置即可：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>
    <span class="token string single-quoted-string">&#39;listeners&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
        <span class="token operator">...</span><span class="token punctuation">,</span>

        <span class="token class-name static-context">RequestReceived</span><span class="token operator">::</span><span class="token keyword">class</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
            <span class="token operator">...</span><span class="token class-name static-context">Octane</span><span class="token operator">::</span><span class="token function">prepareApplicationForNextOperation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token operator">...</span><span class="token class-name static-context">Octane</span><span class="token operator">::</span><span class="token function">prepareApplicationForNextRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            
            <span class="token comment">// 开启对 Dcat Admin 的支持</span>
            <span class="token class-name class-name-fully-qualified static-context">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Octane<span class="token punctuation">\\</span>Listeners<span class="token punctuation">\\</span>FlushAdminState</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        
        <span class="token operator">...</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),_={href:"https://github.com/laravel/octane",target:"_blank",rel:"noopener noreferrer"},h=n("code",null,"beta",-1),b={href:"https://github.com/laravel/octane",target:"_blank",rel:"noopener noreferrer"};function f(g,x){const s=o("ExternalLinkIcon");return c(),l("div",null,[i,n("p",null,[n("a",u,[a("Laravel Octane"),e(s)]),a(" 是一个基于 "),d,a(" 驱动的可以提升 "),v,a(" 框架性能的项目，安装后可以大幅提升"),k,a("项目的性能。")]),m,n("blockquote",null,[n("p",null,[n("a",_,[a("Laravel Octane"),e(s)]),a("目前仍处于"),h,a("版本阶段，关于"),n("a",b,[a("Laravel Octane"),e(s)]),a("的安装与更多介绍请前往文档 https://github.com/laravel/octane 查看。")])])])}const A=t(r,[["render",f],["__file","laravel-octane.html.vue"]]);export{A as default};
