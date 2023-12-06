import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as s,e as n}from"./app-c17653d8.js";const i={},r=n(`<h1 id="version-upgrade-instructions" tabindex="-1"><a class="header-anchor" href="#version-upgrade-instructions" aria-hidden="true">#</a> Version upgrade instructions</h1><h3 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> Description</h3><p>The release of <code>Dcat Admin</code> will take into account the release strategy of the mainstream <code>web framework</code> to minimize the impact of version upgrades, minor versions and patches <strong>never</strong> contain non-compatibility changes; we will also provide an update log detailing the changes and possible impact of the new version.</p><h3 id="upgrade-command" tabindex="-1"><a class="header-anchor" href="#upgrade-command" aria-hidden="true">#</a> Upgrade command</h3><p>upgrade command</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">composer</span> update dcat/laravel-admin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>After successful upgrade, you need to run <code>admin:update</code> to republish the language pack, configuration files, front-end static resources and other files, and then <strong>clean the browser cache</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Publish language packs, configuration files, front-end static resources, data migration files, etc.</span>
php artisan admin:update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Running <code>admin:update</code> is equivalent to running</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan admin:publish <span class="token parameter variable">--assets</span> <span class="token parameter variable">--migrations</span> <span class="token parameter variable">--lang</span> <span class="token parameter variable">--force</span>
php artisan migrate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="publish-file-command" tabindex="-1"><a class="header-anchor" href="#publish-file-command" aria-hidden="true">#</a> publish file command</h4><blockquote><p>After running <code>admin:update\`&#39;&#39; you don&#39;t usually need to run the </code>admin:publish\`&#39;&#39; command</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan admin:publish <span class="token parameter variable">--force</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Only language pack updates</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan admin:publish <span class="token parameter variable">--force</span> <span class="token parameter variable">--lang</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Update Configuration Files Only</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan admin:publish <span class="token parameter variable">--force</span> <span class="token parameter variable">--config</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Only front-end static resources are updated</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan admin:publish <span class="token parameter variable">--force</span> <span class="token parameter variable">--assets</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Update only the database migration file (this generally does not need to be updated)</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan admin:publish <span class="token parameter variable">--force</span> <span class="token parameter variable">--migrations</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,21),d=[r];function t(l,o){return e(),s("div",null,d)}const u=a(i,[["render",t],["__file","update.html.vue"]]);export{u as default};