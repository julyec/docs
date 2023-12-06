import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as c,c as l,a as n,b as a,d as e,e as p}from"./app-c17653d8.js";const i={},r=n("h1",{id:"laravel-octane",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#laravel-octane","aria-hidden":"true"},"#"),a(" Laravel Octane")],-1),d={href:"https://github.com/laravel/octane",target:"_blank",rel:"noopener noreferrer"},u=n("code",null,"Swoole/RoadRunner",-1),v=n("code",null,"Laravel",-1),m=n("code",null,"Laravel",-1),k=p(`<p><code>Dcat Admin</code> is compatible with the <code>Laravel Octane</code> environment, just add the following configuration to the configuration file <code>config/octane.php</code>.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>
    <span class="token string single-quoted-string">&#39;listeners&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
        <span class="token operator">...</span> <span class="token punctuation">,</span>

        <span class="token class-name static-context">RequestReceived</span><span class="token operator">::</span><span class="token keyword">class</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
            <span class="token operator">...</span> <span class="token operator">.</span><span class="token class-name static-context">Octane</span><span class="token operator">::</span><span class="token function">prepareApplicationForNextOperation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token operator">...</span> <span class="token operator">.</span><span class="token class-name static-context">Octane</span><span class="token operator">::</span><span class="token function">prepareApplicationForNextRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            
            <span class="token comment">// Enable support for Dcat Admin</span>
            <span class="token class-name class-name-fully-qualified static-context">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Octane<span class="token punctuation">\\</span>Listeners<span class="token punctuation">\\</span>FlushAdminState</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span>
        <span class="token keyword">class</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        
        <span class="token operator">...</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),h={href:"https://github.com/laravel/octane",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"beta",-1),_={href:"https://github.com/laravel/octane",target:"_blank",rel:"noopener noreferrer"};function b(g,x){const s=o("ExternalLinkIcon");return c(),l("div",null,[r,n("p",null,[n("a",d,[a("Laravel Octane"),e(s)]),a(" is a project based on "),u,a(" driver that can improve the performance of "),v,a(" framework, after installation it can significantly improve the performance of "),m,a(" projects.")]),k,n("blockquote",null,[n("p",null,[n("a",h,[a("Laravel Octane"),e(s)]),a(" is still in "),f,a(" phase, for installation and more information about "),n("a",_,[a("Laravel Octane"),e(s)]),a(" Please go to the documentation at https://github.com/laravel/octane for more information.")])])])}const w=t(i,[["render",b],["__file","laravel-octane.html.vue"]]);export{w as default};
