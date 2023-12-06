import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as s,e as n}from"./app-c17653d8.js";const i={},d=n(`<h1 id="版本升级须知" tabindex="-1"><a class="header-anchor" href="#版本升级须知" aria-hidden="true">#</a> 版本升级须知</h1><h3 id="说明" tabindex="-1"><a class="header-anchor" href="#说明" aria-hidden="true">#</a> 说明</h3><p><code>Dcat Admin</code>的版本发行将会参考主流<code>web框架</code>的发行策略，尽量降低版本升级带来的影响，小版本和补丁<strong>决不</strong>包含非兼容性更改；同时我们也将会提供更新日志，详细说明新版本的改动以及可能造成的影响。</p><h3 id="升级命令" tabindex="-1"><a class="header-anchor" href="#升级命令" aria-hidden="true">#</a> 升级命令</h3><p>升级命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">composer</span> update dcat/laravel-admin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>升级成功之后需要运行 <code>admin:update</code> 命令进行重新发布语言包、配置文件、前端静态资源等文件，然后<strong>清理浏览器缓存</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 发布 语言包、配置文件、前端静态资源、数据迁移文件等</span>
php artisan admin:update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>运行 <code>admin:update</code>，相当于运行</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>php artisan admin:publish --assets --migrations --lang --force
php artisan migrate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="发布文件命令" tabindex="-1"><a class="header-anchor" href="#发布文件命令" aria-hidden="true">#</a> 发布文件命令</h4><blockquote><p>运行 <code>admin:update</code> 后一般不需要运行 <code>admin:publish</code> 命令</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan admin:publish <span class="token parameter variable">--force</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>只更新语言包</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan admin:publish <span class="token parameter variable">--force</span> <span class="token parameter variable">--lang</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>只更新配置文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan admin:publish <span class="token parameter variable">--force</span> <span class="token parameter variable">--config</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>只更新前端静态资源</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan admin:publish <span class="token parameter variable">--force</span> <span class="token parameter variable">--assets</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>只更新数据库迁徙文件(这个一般不需要更新)</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan admin:publish <span class="token parameter variable">--force</span> <span class="token parameter variable">--migrations</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,21),r=[d];function l(c,t){return e(),s("div",null,r)}const u=a(i,[["render",l],["__file","update.html.vue"]]);export{u as default};
