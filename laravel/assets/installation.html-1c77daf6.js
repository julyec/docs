import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as s,c as l,b as e,d as a,e as n,a as t}from"./app-06635a3b.js";const c={},d=t('<h1 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h1><ul><li><a href="#meet-laravel">Meet Laravel</a><ul><li><a href="#why-laravel">Why Laravel?</a></li></ul></li><li><a href="#your-first-laravel-project">Your First Laravel Project</a></li><li><a href="#laravel-and-docker">Laravel &amp; Docker</a><ul><li><a href="#getting-started-on-macos">Getting Started On macOS</a></li><li><a href="#getting-started-on-windows">Getting Started On Windows</a></li><li><a href="#getting-started-on-linux">Getting Started On Linux</a></li><li><a href="#choosing-your-sail-services">Choosing Your Sail Services</a></li></ul></li><li><a href="#initial-configuration">Initial Configuration</a><ul><li><a href="#environment-based-configuration">Environment Based Configuration</a></li><li><a href="#databases-and-migrations">Databases &amp; Migrations</a></li><li><a href="#directory-configuration">Directory Configuration</a></li></ul></li><li><a href="#ide-support">IDE Support</a></li><li><a href="#next-steps">Next Steps</a><ul><li><a href="#laravel-the-fullstack-framework">Laravel The Full Stack Framework</a></li><li><a href="#laravel-the-api-backend">Laravel The API Backend</a></li></ul></li></ul><p><a name="meet-laravel"></a></p><h2 id="meet-laravel" tabindex="-1"><a class="header-anchor" href="#meet-laravel" aria-hidden="true">#</a> Meet Laravel</h2><p>Laravel is a web application framework with expressive, elegant syntax. A web framework provides a structure and starting point for creating your application, allowing you to focus on creating something amazing while we sweat the details.</p><p>Laravel strives to provide an amazing developer experience while providing powerful features such as thorough dependency injection, an expressive database abstraction layer, queues and scheduled jobs, unit and integration testing, and more.</p><p>Whether you are new to PHP web frameworks or have years of experience, Laravel is a framework that can grow with you. We&#39;ll help you take your first steps as a web developer or give you a boost as you take your expertise to the next level. We can&#39;t wait to see what you build.</p>',7),u=e("strong",null,"Note",-1),p={href:"https://bootcamp.laravel.com",target:"_blank",rel:"noopener noreferrer"},h=t('<p><a name="why-laravel"></a></p><h3 id="why-laravel" tabindex="-1"><a class="header-anchor" href="#why-laravel" aria-hidden="true">#</a> Why Laravel?</h3><p>There are a variety of tools and frameworks available to you when building a web application. However, we believe Laravel is the best choice for building modern, full-stack web applications.</p><h4 id="a-progressive-framework" tabindex="-1"><a class="header-anchor" href="#a-progressive-framework" aria-hidden="true">#</a> A Progressive Framework</h4>',4),m={href:"https://laracasts.com",target:"_blank",rel:"noopener noreferrer"},v=t('<p>If you&#39;re a senior developer, Laravel gives you robust tools for <a href="./container">dependency injection</a>, <a href="./testing">unit testing</a>, <a href="./queues">queues</a>, <a href="./broadcasting">real-time events</a>, and more. Laravel is fine-tuned for building professional web applications and ready to handle enterprise work loads.</p><h4 id="a-scalable-framework" tabindex="-1"><a class="header-anchor" href="#a-scalable-framework" aria-hidden="true">#</a> A Scalable Framework</h4><p>Laravel is incredibly scalable. Thanks to the scaling-friendly nature of PHP and Laravel&#39;s built-in support for fast, distributed cache systems like Redis, horizontal scaling with Laravel is a breeze. In fact, Laravel applications have been easily scaled to handle hundreds of millions of requests per month.</p>',3),f={href:"https://vapor.laravel.com",target:"_blank",rel:"noopener noreferrer"},g=e("h4",{id:"a-community-framework",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#a-community-framework","aria-hidden":"true"},"#"),a(" A Community Framework")],-1),b={href:"https://github.com/laravel/framework",target:"_blank",rel:"noopener noreferrer"},y=e("p",null,[e("a",{name:"your-first-laravel-project"})],-1),w=e("h2",{id:"your-first-laravel-project",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#your-first-laravel-project","aria-hidden":"true"},"#"),a(" Your First Laravel Project")],-1),k={href:"https://getcomposer.org",target:"_blank",rel:"noopener noreferrer"},_={href:"https://herd.laravel.com",target:"_blank",rel:"noopener noreferrer"},L={href:"https://nodejs.org",target:"_blank",rel:"noopener noreferrer"},x=e("p",null,[a("After you have installed PHP and Composer, you may create a new Laravel project via the Composer "),e("code",null,"create-project"),a(" command:")],-1),S=e("div",{class:"language-nothing line-numbers-mode","data-ext":"nothing"},[e("pre",{class:"language-nothing"},[e("code",null,`composer create-project laravel/laravel example-app
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),q={href:"https://herd.laravel.com",target:"_blank",rel:"noopener noreferrer"},D=t(`<div class="language-nothing line-numbers-mode" data-ext="nothing"><pre class="language-nothing"><code>composer global require laravel/installer

laravel new example-app
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>After the project has been created, start Laravel&#39;s local development server using the Laravel&#39;s Artisan CLI <code>serve</code> command:</p><div class="language-nothing line-numbers-mode" data-ext="nothing"><pre class="language-nothing"><code>cd example-app

php artisan serve
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Once you have started the Artisan development server, your application will be accessible in your web browser at <code>http://localhost:8000</code>. Next, you&#39;re ready to <a href="#next-steps">start taking your next steps into the Laravel ecosystem</a>. Of course, you may also want to <a href="#databases-and-migrations">configure a database</a>.</p><blockquote><p><strong>Note</strong><br> If you would like a head start when developing your Laravel application, consider using one of our <a href="./starter-kits">starter kits</a>. Laravel&#39;s starter kits provide backend and frontend authentication scaffolding for your new Laravel application.</p></blockquote><p><a name="laravel-and-docker"></a></p><h2 id="laravel-docker" tabindex="-1"><a class="header-anchor" href="#laravel-docker" aria-hidden="true">#</a> Laravel &amp; Docker</h2>`,7),I=e("a",{href:"./sail"},"Sail",-1),j={href:"https://www.docker.com",target:"_blank",rel:"noopener noreferrer"},N={href:"https://www.docker.com/products/docker-desktop",target:"_blank",rel:"noopener noreferrer"},P=e("p",null,"Laravel Sail is a light-weight command-line interface for interacting with Laravel's default Docker configuration. Sail provides a great starting point for building a Laravel application using PHP, MySQL, and Redis without requiring prior Docker experience.",-1),O=e("blockquote",null,[e("p",null,[e("strong",null,"Note"),e("br"),a(" Already a Docker expert? Don't worry! Everything about Sail can be customized using the "),e("code",null,"docker-compose.yml"),a(" file included with Laravel.")])],-1),T=e("p",null,[e("a",{name:"getting-started-on-macos"})],-1),C=e("h3",{id:"getting-started-on-macos",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#getting-started-on-macos","aria-hidden":"true"},"#"),a(" Getting Started On macOS")],-1),W={href:"https://www.docker.com/products/docker-desktop",target:"_blank",rel:"noopener noreferrer"},A=t(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-s</span> <span class="token string">&quot;https://laravel.build/example-app&quot;</span> <span class="token operator">|</span> <span class="token function">bash</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Of course, you can change &quot;example-app&quot; in this URL to anything you like - just make sure the application name only contains alpha-numeric characters, dashes, and underscores. The Laravel application&#39;s directory will be created within the directory you execute the command from.</p><p>Sail installation may take several minutes while Sail&#39;s application containers are built on your local machine.</p><p>After the project has been created, you can navigate to the application directory and start Laravel Sail. Laravel Sail provides a simple command-line interface for interacting with Laravel&#39;s default Docker configuration:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> example-app

./vendor/bin/sail up
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Once the application&#39;s Docker containers have been started, you can access the application in your web browser at: http://localhost.</p><blockquote><p><strong>Note</strong><br> To continue learning more about Laravel Sail, review its <a href="./sail">complete documentation</a>.</p></blockquote><p><a name="getting-started-on-windows"></a></p><h3 id="getting-started-on-windows" tabindex="-1"><a class="header-anchor" href="#getting-started-on-windows" aria-hidden="true">#</a> Getting Started On Windows</h3>`,9),B={href:"https://www.docker.com/products/docker-desktop",target:"_blank",rel:"noopener noreferrer"},E={href:"https://docs.microsoft.com/en-us/windows/wsl/install-win10",target:"_blank",rel:"noopener noreferrer"},F=e("strong",null,"Note",-1),M=e("br",null,null,-1),H={href:"https://docs.docker.com/docker-for-windows/wsl/",target:"_blank",rel:"noopener noreferrer"},R={href:"https://www.microsoft.com/en-us/p/windows-terminal/9n0dx20hk701?rtc=1&activetab=pivot:overviewtab",target:"_blank",rel:"noopener noreferrer"},z=t(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-s</span> https://laravel.build/example-app <span class="token operator">|</span> <span class="token function">bash</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Of course, you can change &quot;example-app&quot; in this URL to anything you like - just make sure the application name only contains alpha-numeric characters, dashes, and underscores. The Laravel application&#39;s directory will be created within the directory you execute the command from.</p><p>Sail installation may take several minutes while Sail&#39;s application containers are built on your local machine.</p><p>After the project has been created, you can navigate to the application directory and start Laravel Sail. Laravel Sail provides a simple command-line interface for interacting with Laravel&#39;s default Docker configuration:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> example-app

./vendor/bin/sail up
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Once the application&#39;s Docker containers have been started, you can access the application in your web browser at: http://localhost.</p><blockquote><p><strong>Note</strong><br> To continue learning more about Laravel Sail, review its <a href="./sail">complete documentation</a>.</p></blockquote><h4 id="developing-within-wsl2" tabindex="-1"><a class="header-anchor" href="#developing-within-wsl2" aria-hidden="true">#</a> Developing Within WSL2</h4>`,8),Y={href:"https://code.visualstudio.com",target:"_blank",rel:"noopener noreferrer"},Q={href:"https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack",target:"_blank",rel:"noopener noreferrer"},V=e("p",null,[a("Once these tools are installed, you may open any Laravel project by executing the "),e("code",null,"code ."),a(" command from your application's root directory using Windows Terminal.")],-1),G=e("p",null,[e("a",{name:"getting-started-on-linux"})],-1),U=e("h3",{id:"getting-started-on-linux",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#getting-started-on-linux","aria-hidden":"true"},"#"),a(" Getting Started On Linux")],-1),J={href:"https://docs.docker.com/compose/install/",target:"_blank",rel:"noopener noreferrer"},K=t(`<p>First, if you are using Docker Desktop for Linux, you should execute the following command. If you are not using Docker Desktop for Linux, you may skip this step:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> context use default
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Then, to create a new Laravel application in a directory named &quot;example-app&quot;, you may run the following command in your terminal:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-s</span> https://laravel.build/example-app <span class="token operator">|</span> <span class="token function">bash</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Of course, you can change &quot;example-app&quot; in this URL to anything you like - just make sure the application name only contains alpha-numeric characters, dashes, and underscores. The Laravel application&#39;s directory will be created within the directory you execute the command from.</p><p>Sail installation may take several minutes while Sail&#39;s application containers are built on your local machine.</p><p>After the project has been created, you can navigate to the application directory and start Laravel Sail. Laravel Sail provides a simple command-line interface for interacting with Laravel&#39;s default Docker configuration:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> example-app

./vendor/bin/sail up
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Once the application&#39;s Docker containers have been started, you can access the application in your web browser at: http://localhost.</p><blockquote><p><strong>Note</strong><br> To continue learning more about Laravel Sail, review its <a href="./sail">complete documentation</a>.</p></blockquote><p><a name="choosing-your-sail-services"></a></p><h3 id="choosing-your-sail-services" tabindex="-1"><a class="header-anchor" href="#choosing-your-sail-services" aria-hidden="true">#</a> Choosing Your Sail Services</h3><p>When creating a new Laravel application via Sail, you may use the <code>with</code> query string variable to choose which services should be configured in your new application&#39;s <code>docker-compose.yml</code> file. Available services include <code>mysql</code>, <code>pgsql</code>, <code>mariadb</code>, <code>redis</code>, <code>memcached</code>, <code>meilisearch</code>, <code>minio</code>, <code>selenium</code>, and <code>mailpit</code>:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-s</span> <span class="token string">&quot;https://laravel.build/example-app?with=mysql,redis&quot;</span> <span class="token operator">|</span> <span class="token function">bash</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>If you do not specify which services you would like configured, a default stack of <code>mysql</code>, <code>redis</code>, <code>meilisearch</code>, <code>mailpit</code>, and <code>selenium</code> will be configured.</p><p>You may instruct Sail to install a default <a href="./sail#using-devcontainers">Devcontainer</a> by adding the <code>devcontainer</code> parameter to the URL:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-s</span> <span class="token string">&quot;https://laravel.build/example-app?with=mysql,redis&amp;devcontainer&quot;</span> <span class="token operator">|</span> <span class="token function">bash</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="initial-configuration"></a></p><h2 id="initial-configuration" tabindex="-1"><a class="header-anchor" href="#initial-configuration" aria-hidden="true">#</a> Initial Configuration</h2><p>All of the configuration files for the Laravel framework are stored in the <code>config</code> directory. Each option is documented, so feel free to look through the files and get familiar with the options available to you.</p><p>Laravel needs almost no additional configuration out of the box. You are free to get started developing! However, you may wish to review the <code>config/app.php</code> file and its documentation. It contains several options such as <code>timezone</code> and <code>locale</code> that you may wish to change according to your application.</p><p><a name="environment-based-configuration"></a></p><h3 id="environment-based-configuration" tabindex="-1"><a class="header-anchor" href="#environment-based-configuration" aria-hidden="true">#</a> Environment Based Configuration</h3><p>Since many of Laravel&#39;s configuration option values may vary depending on whether your application is running on your local machine or on a production web server, many important configuration values are defined using the <code>.env</code> file that exists at the root of your application.</p><p>Your <code>.env</code> file should not be committed to your application&#39;s source control, since each developer / server using your application could require a different environment configuration. Furthermore, this would be a security risk in the event an intruder gains access to your source control repository, since any sensitive credentials would get exposed.</p><blockquote><p><strong>Note</strong><br> For more information about the <code>.env</code> file and environment based configuration, check out the full <a href="./configuration#environment-configuration">configuration documentation</a>.</p></blockquote><p><a name="databases-and-migrations"></a></p><h3 id="databases-migrations" tabindex="-1"><a class="header-anchor" href="#databases-migrations" aria-hidden="true">#</a> Databases &amp; Migrations</h3>`,28),X=e("code",null,".env",-1),Z=e("code",null,"127.0.0.1",-1),$={href:"https://dbngin.com/",target:"_blank",rel:"noopener noreferrer"},ee={href:"https://www.sqlite.org/index.html",target:"_blank",rel:"noopener noreferrer"},ae=e("code",null,".env",-1),oe=e("code",null,"sqlite",-1),ne=t(`<div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token key attr-name">DB_CONNECTION</span><span class="token punctuation">=</span><span class="token value attr-value">sqlite # [tl! add]</span>
<span class="token key attr-name">DB_CONNECTION</span><span class="token punctuation">=</span><span class="token value attr-value">mysql # [tl! remove]</span>
<span class="token key attr-name">DB_HOST</span><span class="token punctuation">=</span><span class="token value attr-value">127.0.0.1 # [tl! remove]</span>
<span class="token key attr-name">DB_PORT</span><span class="token punctuation">=</span><span class="token value attr-value">3306 # [tl! remove]</span>
<span class="token key attr-name">DB_DATABASE</span><span class="token punctuation">=</span><span class="token value attr-value">laravel # [tl! remove]</span>
<span class="token key attr-name">DB_USERNAME</span><span class="token punctuation">=</span><span class="token value attr-value">root # [tl! remove]</span>
<span class="token key attr-name">DB_PASSWORD</span><span class="token punctuation">=</span> <span class="token value attr-value"># [tl! remove]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Once you have configured your SQLite database, you may run your application&#39;s <a href="./migrations">database migrations</a>, which will create your application&#39;s database tables:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan migrate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>If an SQLite database does not exist for your application, Laravel will ask you if you would like the database to be created. Typically, the SQLite database file will be created at <code>database/database.sqlite</code>.</p><p><a name="directory-configuration"></a></p><h3 id="directory-configuration" tabindex="-1"><a class="header-anchor" href="#directory-configuration" aria-hidden="true">#</a> Directory Configuration</h3><p>Laravel should always be served out of the root of the &quot;web directory&quot; configured for your web server. You should not attempt to serve a Laravel application out of a subdirectory of the &quot;web directory&quot;. Attempting to do so could expose sensitive files present within your application.</p><p><a name="ide-support"></a></p><h2 id="ide-support" tabindex="-1"><a class="header-anchor" href="#ide-support" aria-hidden="true">#</a> IDE Support</h2>`,9),te={href:"https://www.jetbrains.com/phpstorm/laravel/",target:"_blank",rel:"noopener noreferrer"},re={href:"https://www.jetbrains.com/help/phpstorm/using-laravel-pint.html",target:"_blank",rel:"noopener noreferrer"},ie={href:"https://laravel-idea.com/",target:"_blank",rel:"noopener noreferrer"},se=e("p",null,[e("a",{name:"next-steps"})],-1),le=e("h2",{id:"next-steps",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#next-steps","aria-hidden":"true"},"#"),a(" Next Steps")],-1),ce=e("p",null,"Now that you have created your Laravel project, you may be wondering what to learn next. First, we strongly recommend becoming familiar with how Laravel works by reading the following documentation:",-1),de=e("div",{class:"content-list",markdown:"1"},[e("ul",null,[e("li",null,[e("a",{href:"./lifecycle"},"Request Lifecycle")]),e("li",null,[e("a",{href:"./configuration"},"Configuration")]),e("li",null,[e("a",{href:"./structure"},"Directory Structure")]),e("li",null,[e("a",{href:"./frontend"},"Frontend")]),e("li",null,[e("a",{href:"./container"},"Service Container")]),e("li",null,[e("a",{href:"./facades"},"Facades")])])],-1),ue=e("p",null,"How you want to use Laravel will also dictate the next steps on your journey. There are a variety of ways to use Laravel, and we'll explore two primary use cases for the framework below.",-1),pe=e("strong",null,"Note",-1),he={href:"https://bootcamp.laravel.com",target:"_blank",rel:"noopener noreferrer"},me=e("p",null,[e("a",{name:"laravel-the-fullstack-framework"})],-1),ve=e("h3",{id:"laravel-the-full-stack-framework",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#laravel-the-full-stack-framework","aria-hidden":"true"},"#"),a(" Laravel The Full Stack Framework")],-1),fe=e("a",{href:"./blade"},"Blade templates",-1),ge={href:"https://inertiajs.com",target:"_blank",rel:"noopener noreferrer"},be=e("a",{href:"./frontend"},"frontend development",-1),ye=e("a",{href:"./routing"},"routing",-1),we=e("a",{href:"./views"},"views",-1),ke=e("a",{href:"./eloquent"},"Eloquent ORM",-1),_e={href:"https://livewire.laravel.com",target:"_blank",rel:"noopener noreferrer"},Le={href:"https://inertiajs.com",target:"_blank",rel:"noopener noreferrer"},xe=t('<p>If you are using Laravel as a full stack framework, we also strongly encourage you to learn how to compile your application&#39;s CSS and JavaScript using <a href="./vite">Vite</a>.</p><blockquote><p><strong>Note</strong><br> If you want to get a head start building your application, check out one of our official <a href="./starter-kits">application starter kits</a>.</p></blockquote><p><a name="laravel-the-api-backend"></a></p><h3 id="laravel-the-api-backend" tabindex="-1"><a class="header-anchor" href="#laravel-the-api-backend" aria-hidden="true">#</a> Laravel The API Backend</h3>',4),Se={href:"https://nextjs.org",target:"_blank",rel:"noopener noreferrer"},qe=e("a",{href:"./sanctum"},"authentication",-1),De=e("p",null,[a("If this is how you plan to use Laravel, you may want to check out our documentation on "),e("a",{href:"./routing"},"routing"),a(", "),e("a",{href:"./sanctum"},"Laravel Sanctum"),a(", and the "),e("a",{href:"./eloquent"},"Eloquent ORM"),a(".")],-1),Ie=e("strong",null,"Note",-1),je=e("br",null,null,-1),Ne=e("a",{href:"./starter-kits#breeze-and-next"},"API stack",-1),Pe={href:"https://github.com/laravel/breeze-next",target:"_blank",rel:"noopener noreferrer"};function Oe(Te,Ce){const o=i("ExternalLinkIcon");return s(),l("div",null,[d,e("blockquote",null,[e("p",null,[u,a(" New to Laravel? Check out the "),e("a",p,[a("Laravel Bootcamp"),n(o)]),a(" for a hands-on tour of the framework while we walk you through building your first Laravel application.")])]),h,e("p",null,[a(`We like to call Laravel a "progressive" framework. By that, we mean that Laravel grows with you. If you're just taking your first steps into web development, Laravel's vast library of documentation, guides, and `),e("a",m,[a("video tutorials"),n(o)]),a(" will help you learn the ropes without becoming overwhelmed.")]),v,e("p",null,[a("Need extreme scaling? Platforms like "),e("a",f,[a("Laravel Vapor"),n(o)]),a(" allow you to run your Laravel application at nearly limitless scale on AWS's latest serverless technology.")]),g,e("p",null,[a("Laravel combines the best packages in the PHP ecosystem to offer the most robust and developer friendly framework available. In addition, thousands of talented developers from around the world have "),e("a",b,[a("contributed to the framework"),n(o)]),a(". Who knows, maybe you'll even become a Laravel contributor.")]),y,w,e("p",null,[a("Before creating your first Laravel project, you should ensure that your local machine has PHP and "),e("a",k,[a("Composer"),n(o)]),a(" installed. If you are developing on macOS, PHP and Composer can be installed within minutes via "),e("a",_,[a("Laravel Herd"),n(o)]),a(". In addition, we recommend "),e("a",L,[a("installing Node and NPM"),n(o)]),a(".")]),x,S,e("p",null,[a("Or, you may create new Laravel projects by globally installing the Laravel installer via Composer. Or, if you installed PHP and Composer via "),e("a",q,[a("Laravel Herd"),n(o)]),a(", the Laravel installer is already available to you:")]),D,e("p",null,[a("We want it to be as easy as possible to get started with Laravel regardless of your preferred operating system. So, there are a variety of options for developing and running a Laravel project on your local machine. While you may wish to explore these options at a later time, Laravel provides "),I,a(", a built-in solution for running your Laravel project using "),e("a",j,[a("Docker"),n(o)]),a(".")]),e("p",null,[a(`Docker is a tool for running applications and services in small, light-weight "containers" which do not interfere with your local machine's installed software or configuration. This means you don't have to worry about configuring or setting up complicated development tools such as web servers and databases on your local machine. To get started, you only need to install `),e("a",N,[a("Docker Desktop"),n(o)]),a(".")]),P,O,T,C,e("p",null,[a("If you're developing on a Mac and "),e("a",W,[a("Docker Desktop"),n(o)]),a(' is already installed, you can use a simple terminal command to create a new Laravel project. For example, to create a new Laravel application in a directory named "example-app", you may run the following command in your terminal:')]),A,e("p",null,[a("Before we create a new Laravel application on your Windows machine, make sure to install "),e("a",B,[a("Docker Desktop"),n(o)]),a(". Next, you should ensure that Windows Subsystem for Linux 2 (WSL2) is installed and enabled. WSL allows you to run Linux binary executables natively on Windows 10. Information on how to install and enable WSL2 can be found within Microsoft's "),e("a",E,[a("developer environment documentation"),n(o)]),a(".")]),e("blockquote",null,[e("p",null,[F,M,a(" After installing and enabling WSL2, you should ensure that Docker Desktop is "),e("a",H,[a("configured to use the WSL2 backend"),n(o)]),a(".")])]),e("p",null,[a("Next, you are ready to create your first Laravel project. Launch "),e("a",R,[a("Windows Terminal"),n(o)]),a(' and begin a new terminal session for your WSL2 Linux operating system. Next, you can use a simple terminal command to create a new Laravel project. For example, to create a new Laravel application in a directory named "example-app", you may run the following command in your terminal:')]),z,e("p",null,[a("Of course, you will need to be able to modify the Laravel application files that were created within your WSL2 installation. To accomplish this, we recommend using Microsoft's "),e("a",Y,[a("Visual Studio Code"),n(o)]),a(" editor and their first-party extension for "),e("a",Q,[a("Remote Development"),n(o)]),a(".")]),V,G,U,e("p",null,[a("If you're developing on Linux and "),e("a",J,[a("Docker Compose"),n(o)]),a(" is already installed, you can use a simple terminal command to create a new Laravel project.")]),K,e("p",null,[a("Now that you have created your Laravel application, you probably want to store some data in a database. By default, your application's "),X,a(" configuration file specifies that Laravel will be interacting with a MySQL database and will access the database at "),Z,a(". If you are developing on macOS and need to install MySQL, Postgres, or Redis locally, you may find it convenient to utilize "),e("a",$,[a("DBngin"),n(o)]),a(".")]),e("p",null,[a("If you do not want to install MySQL or Postgres on your local machine, you can always use a "),e("a",ee,[a("SQLite"),n(o)]),a(" database. SQLite is a small, fast, self-contained database engine. To get started, update your "),ae,a(" configuration file to use Laravel's "),oe,a(" database driver. You may remove the other database configuration options:")]),ne,e("p",null,[a("You are free to use any code editor you wish when developing Laravel applications; however, "),e("a",te,[a("PhpStorm"),n(o)]),a(" offers extensive support for Laravel and its ecosystem, including "),e("a",re,[a("Laravel Pint"),n(o)]),a(".")]),e("p",null,[a("In addition, the community maintained "),e("a",ie,[a("Laravel Idea"),n(o)]),a(" PhpStorm plugin offers a variety of helpful IDE augmentations, including code generation, Eloquent syntax completion, validation rule completion, and more.")]),se,le,ce,de,ue,e("blockquote",null,[e("p",null,[pe,a(" New to Laravel? Check out the "),e("a",he,[a("Laravel Bootcamp"),n(o)]),a(" for a hands-on tour of the framework while we walk you through building your first Laravel application.")])]),me,ve,e("p",null,[a('Laravel may serve as a full stack framework. By "full stack" framework we mean that you are going to use Laravel to route requests to your application and render your frontend via '),fe,a(" or a single-page application hybrid technology like "),e("a",ge,[a("Inertia"),n(o)]),a(". This is the most common way to use the Laravel framework, and, in our opinion, the most productive way to use Laravel.")]),e("p",null,[a("If this is how you plan to use Laravel, you may want to check out our documentation on "),be,a(", "),ye,a(", "),we,a(", or the "),ke,a(". In addition, you might be interested in learning about community packages like "),e("a",_e,[a("Livewire"),n(o)]),a(" and "),e("a",Le,[a("Inertia"),n(o)]),a(". These packages allow you to use Laravel as a full-stack framework while enjoying many of the UI benefits provided by single-page JavaScript applications.")]),xe,e("p",null,[a("Laravel may also serve as an API backend to a JavaScript single-page application or mobile application. For example, you might use Laravel as an API backend for your "),e("a",Se,[a("Next.js"),n(o)]),a(" application. In this context, you may use Laravel to provide "),qe,a(" and data storage / retrieval for your application, while also taking advantage of Laravel's powerful services such as queues, emails, notifications, and more.")]),De,e("blockquote",null,[e("p",null,[Ie,je,a(" Need a head start scaffolding your Laravel backend and Next.js frontend? Laravel Breeze offers an "),Ne,a(" as well as a "),e("a",Pe,[a("Next.js frontend implementation"),n(o)]),a(" so you can get started in minutes.")])])])}const Be=r(c,[["render",Oe],["__file","installation.html.vue"]]);export{Be as default};