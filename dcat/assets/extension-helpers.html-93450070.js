import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as s,a as d}from"./app-98225aba.js";const c="/dcat/assets/cbf03e84-f81d-11e6-82b7-d7929c3033a0-a0b9fb16.png",o="/dcat/assets/ce08e5d6-f81d-11e6-8b20-605e8cd06167-abc9780d.png",t="/dcat/assets/da8a5d30-f81d-11e6-97b9-239eea900ad3-c0245845.png",n="/dcat/assets/30899066-e8bdd5ca-a390-11e7-809d-4ceccd0da27f-f9bef188.png",r={},i=d(`<h1 id="开发工具" tabindex="-1"><a class="header-anchor" href="#开发工具" aria-hidden="true">#</a> 开发工具</h1><p>在最新的版本中新增了面向开发人员的帮助工具，能在开发中提供帮助提高效率，目前提供<code>脚手架</code>，<code>数据库命令行</code>和<code>artisan命令行</code>三个工具，如果有更好的其它实用工具的想法，欢迎提供建议。</p><p>安装：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>composer <span class="token keyword">require</span> dcat<span class="token operator">-</span>admin<span class="token operator">-</span>ext<span class="token operator">/</span>helpers

php artisan admin<span class="token punctuation">:</span>import helpers
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>{tip} 工具的部分功能会在项目中创建或删除文件，可能会出现文件或目录权限的问题，这个问题需要自行解决。 另外部分数据库和artisan命令无法在web环境下使用。</p></blockquote><h2 id="脚手架工具" tabindex="-1"><a class="header-anchor" href="#脚手架工具" aria-hidden="true">#</a> 脚手架工具</h2><p>脚手架工具能帮你一键生成控制器、模型、迁移文件，并运行迁移文件，访问<code>http://localhost/admin/helpers/scaffold</code>打开。</p><p>其中设置迁移表结构的时候，主键字段是自动生成的不需要填写。</p><p><img src="`+c+'" alt="" loading="lazy"></p><h2 id="数据库命令行" tabindex="-1"><a class="header-anchor" href="#数据库命令行" aria-hidden="true">#</a> 数据库命令行</h2><p>数据库命令行工具的web集成，目前支持<code>mysql</code>、<code>mongodb</code> 和 <code>redis</code>，访问<code>http://localhost/admin/helpers/terminal/database</code>打开。</p><p>在右上角的<code>select</code>选择框切换数据库连接，然后在底部的输入框输入对应数据库的查询语句然后回车，就能得到查询结果：</p><p><img src="'+o+'" alt="qq20170220-3" loading="lazy"></p><p>实用方式和终端上操作数据库是一致的，可以运行所选择数据库的所支持的查询语句。</p><h2 id="artisan命令行工具" tabindex="-1"><a class="header-anchor" href="#artisan命令行工具" aria-hidden="true">#</a> artisan命令行工具</h2><p><code>Laravel</code>的<code>artisan</code>命令的web实现，可以在上面运行artisan命令，访问<code>http://localhost/admin/helpers/terminal/artisan</code>打开。</p><p><img src="'+t+'" alt="qq20170220-1" loading="lazy"></p><h2 id="路由列表" tabindex="-1"><a class="header-anchor" href="#路由列表" aria-hidden="true">#</a> 路由列表</h2><p>这个工具能用用比较直观的展现出系统的所有路由，包括路由的uri、方法和中间件等，还能查询路由。访问<code>http://localhost/admin/helpers/routes</code>打开。</p><p><img src="'+n+'" alt="helpers_routes" loading="lazy"></p>',20),p=[i];function l(h,m){return a(),s("div",null,p)}const _=e(r,[["render",l],["__file","extension-helpers.html.vue"]]);export{_ as default};
