import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as d,c as a,e as i}from"./app-c17653d8.js";const n={},c=i(`<h1 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h1><h2 id="环境" tabindex="-1"><a class="header-anchor" href="#环境" aria-hidden="true">#</a> 环境</h2><ul><li>PHP &gt;= <code>7.1</code></li><li>Laravel <code>5.5.0</code> ~ <code>9.*</code></li><li>Fileinfo PHP Extension</li></ul><h2 id="开始安装" tabindex="-1"><a class="header-anchor" href="#开始安装" aria-hidden="true">#</a> 开始安装</h2><blockquote><p>{tip} 如果安装过程中出现<code>composer</code>下载过慢或安装失败的情况，请运行命令<code>composer config -g repo.packagist composer https://mirrors.aliyun.com/composer/</code>把<code>composer</code>镜像更换为阿里云镜像。</p></blockquote><p>首先需要安装<code>laravel</code>，如已安装可以跳过此步骤</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">composer</span> create-project --prefer-dist laravel/laravel 项目名称 <span class="token number">7</span>.*
<span class="token comment"># 或</span>
<span class="token function">composer</span> create-project --prefer-dist laravel/laravel 项目名称
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装完<code>laravel</code>之后需要修改<code>.env</code>文件，设置数据库连接设置正确</p><div class="language-dotenv line-numbers-mode" data-ext="dotenv"><pre class="language-dotenv"><code>DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=dcat-admin
DB_USERNAME=root
DB_PASSWORD=
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装<code>dcat-admin</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cd {项目名称}

composer require dcat/laravel-admin:&quot;2.*&quot; -vvv
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后运行下面的命令来发布资源：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>php artisan admin:publish
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在该命令会生成配置文件<code>config/admin.php</code>，可以在里面修改安装的地址、数据库连接、以及表名，建议都是用默认配置不修改。</p><p>然后运行下面的命令完成安装：</p><blockquote><p>{tip} 执行这一步命令可能会报以下错误<code>Specified key was too long ... 767 bytes</code>，如果出现这个报错，请在<code>app/Providers/AppServiceProvider.php</code>文件的<code>boot</code>方法中加上代码<code>\\Schema::defaultStringLength(191);</code>，然后删除掉数据库中的所有数据表，再重新运行一遍<code>php artisan admin:install</code>命令即可。</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>php artisan admin:install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上述步骤操作完成之后就可以配置<code>web</code>服务了，<strong>注意需要把<code>web</code>目录指向<code>public</code>目录</strong>！如果用的是<code>nginx</code>，还需要在配置中加上伪静态配置</p><div class="language-dotenv line-numbers-mode" data-ext="dotenv"><pre class="language-dotenv"><code>location / {
	try_files $uri $uri/ /index.php?$query_string;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动服务后，在浏览器打开 <code>http://localhost/admin</code>，使用用户名 <code>admin</code> 和密码 <code>admin</code>登陆。</p><h2 id="生成的文件" tabindex="-1"><a class="header-anchor" href="#生成的文件" aria-hidden="true">#</a> 生成的文件</h2><p>安装完成之后,会在项目目录中生成以下的文件:</p><h3 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件" aria-hidden="true">#</a> 配置文件</h3><p>安装完成之后，<code>dcat-admin</code>所有的配置都在<code>config/admin.php</code>文件中。</p><h3 id="后台项目文件" tabindex="-1"><a class="header-anchor" href="#后台项目文件" aria-hidden="true">#</a> 后台项目文件</h3><p>安装完成之后，后台的安装目录为<code>app/Admin</code>，之后大部分的后台开发编码工作都是在这个目录下进行。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>app/Admin
├── Controllers
│   ├── AuthController.php
│   └── HomeController.php
├── Metrics
│   └── Examples
│       ├── NewDevices.php
│       ├── NewUsers.php
│       ├── ProductOrders.php
│       ├── Sessions.php
│       ├── Tickets.php
│       └── TotalUsers.php
├── bootstrap.php
└── routes.php
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li><code>app/Admin/routes.php</code>文件用来配置后台路由。</li><li><code>app/Admin/bootstrap.php</code> 是<code>dcat-admin</code>的启动文件, 使用方法请参考文件里面的注释.</li><li><code>app/Admin/Controllers</code>目录用来存放后台控制器文件，该目录下的<code>HomeController.php</code>文件是后台首页的显示控制器，<code>AuthController.php</code>为后台管理员登录鉴权控制器。</li><li><code>app/Admin/Metrics/Examples</code>里面存放的是<code>数据统计卡片(Metric Card)</code>的示例代码.</li></ol><h3 id="静态文件" tabindex="-1"><a class="header-anchor" href="#静态文件" aria-hidden="true">#</a> 静态文件</h3><p>后台所需的前端静态文件在<code>/public/vendor/dcat-admin</code>目录下。</p><h3 id="数据表迁移文件" tabindex="-1"><a class="header-anchor" href="#数据表迁移文件" aria-hidden="true">#</a> 数据表迁移文件</h3><p>对应的数据表迁移文件在<code>/database/migrations</code>目录下。</p><h3 id="语言包" tabindex="-1"><a class="header-anchor" href="#语言包" aria-hidden="true">#</a> 语言包</h3><p>语言包文件在<code>/resources/lang</code>目录下。</p>`,34),s=[c];function o(r,l){return d(),a("div",null,s)}const v=e(n,[["render",o],["__file","installation.html.vue"]]);export{v as default};
