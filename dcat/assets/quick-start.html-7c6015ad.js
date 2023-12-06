import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as c,c as l,b as s,d as n,e,w as t,a as p}from"./app-98225aba.js";const r="/dcat/assets/guQd6nFQIF-8e53ef21.png",u="/dcat/assets/Me5IvbngZJ-7582bed9.png",d={},k=p('<h1 id="quick-start" tabindex="-1"><a class="header-anchor" href="#quick-start" aria-hidden="true">#</a> Quick start</h1><p>In daily development, we can use the code generator to generate a key to add, delete and check the page code, very convenient and quick.</p><p>The following will give you an introduction to the use of the code generator, as well as the basic composition of an add, delete, redact and check the page. By learning the following content will help you quickly understand the basic use of this system.</p><h2 id="code-generator" tabindex="-1"><a class="header-anchor" href="#code-generator" aria-hidden="true">#</a> code generator</h2><h3 id="create-a-data-table" tabindex="-1"><a class="header-anchor" href="#create-a-data-table" aria-hidden="true">#</a> Create a data table</h3><p>A <code>migration</code> file for the <code>users</code> table is built in after installing <code>Laravel</code> (if you don&#39;t know what the <code>migration</code> file does, refer to the document [Database Migration] (https://learnku.com/docs/laravel/7.x/migrations/7496)). The file path is <code>database/migrations/2014_10_12_000000_create_users_table.php</code>.</p><p>Then we run the following command to create this table in <code>MySQL</code></p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>php artisan migrate\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>After running it, you can see that there is already an extra <code>users</code> table in the database, which is structured as follows</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">`</span>users<span class="token punctuation">`</span></span> <span class="token punctuation">(</span>\n  <span class="token identifier"><span class="token punctuation">`</span>id<span class="token punctuation">`</span></span> <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token keyword">unsigned</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">AUTO_INCREMENT</span><span class="token punctuation">,</span>\n  <span class="token identifier"><span class="token punctuation">`</span>name<span class="token punctuation">`</span></span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token keyword">COLLATE</span> utf8_unicode_ci <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>\n  <span class="token identifier"><span class="token punctuation">`</span>email<span class="token punctuation">`</span></span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token keyword">COLLATE</span> utf8_unicode_ci <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>\n  <span class="token identifier"><span class="token punctuation">`</span>password<span class="token punctuation">`</span></span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">60</span><span class="token punctuation">)</span> <span class="token keyword">COLLATE</span> utf8_unicode_ci <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>\n  <span class="token identifier"><span class="token punctuation">`</span>remember_token<span class="token punctuation">`</span></span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span> <span class="token keyword">COLLATE</span> utf8_unicode_ci <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>\n  <span class="token identifier"><span class="token punctuation">`</span>created_at<span class="token punctuation">`</span></span> <span class="token keyword">timestamp</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token string">&#39;0000-00-00 00:00:00&#39;</span><span class="token punctuation">,</span>\n  <span class="token identifier"><span class="token punctuation">`</span>updated_at<span class="token punctuation">`</span></span> <span class="token keyword">timestamp</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token string">&#39;0000-00-00 00:00:00&#39;</span><span class="token punctuation">,</span>\n  <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>id<span class="token punctuation">`</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token keyword">UNIQUE</span> <span class="token keyword">KEY</span> <span class="token identifier"><span class="token punctuation">`</span>users_email_unique<span class="token punctuation">`</span></span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>email<span class="token punctuation">`</span></span><span class="token punctuation">)</span>\n<span class="token punctuation">)</span> <span class="token keyword">ENGINE</span><span class="token operator">=</span><span class="token keyword">InnoDB</span> <span class="token keyword">DEFAULT</span> <span class="token keyword">CHARSET</span><span class="token operator">=</span>utf8mb4 <span class="token keyword">COLLATE</span><span class="token operator">=</span>utf8mb4_unicode_ci\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="generate-add-delete-and-check-pages-with-one-click" tabindex="-1"><a class="header-anchor" href="#generate-add-delete-and-check-pages-with-one-click" aria-hidden="true">#</a> Generate add, delete and check pages with one click</h3><blockquote><p>{tip} If your development environment is not <code>windows</code>, please note that to set read and write permissions to the project directory, otherwise there may be unable to generate code.</p></blockquote><p><strong>1.</strong> First, open the address <code>http://你的域名/admin/helpers/scaffold</code> to the code generator page.</p><p>**2.**As the data table has already been created, we can directly select the <code>users</code> table from the second drop-down box in the upper left corner of the page, and the fields will be automatically filled with information after selection.</p><p><img src="'+r+'" alt="" loading="lazy"></p><p>**3.**Modify the model name to <code>App\\User</code>.</p><p><strong>4.</strong> Since the <code>migration</code> file, the datasheet, and the model file (just use the built-in <code>App\\User</code>) already exist, we can remove these three options here.</p><p>**5.**Fill-in field translation</p><p>Finally, the result is presented as follows</p><p><img src="'+u+`" alt="" loading="lazy"></p><p>Finally, click the Create button to create the following file</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>app/Admin
├── Controllers
│   └── UserController.php  # controller
└── Repositories            # repository
│   └── User.php
resouces/lang/{当前语言}
└── user.php                # language pack
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="add-route-configuration" tabindex="-1"><a class="header-anchor" href="#add-route-configuration" aria-hidden="true">#</a> Add route configuration</h3><p>Open the routing configuration file <code>app/Admin/routes.php</code> and add a line to it:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$router-&gt;resource(&#39;users&#39;, &#39;UserController&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>At this point, you can open your browser and enter the address <code>http://YourDomain/admin/users</code> to access the page you just created!</p><h3 id="adding-the-left-menu" tabindex="-1"><a class="header-anchor" href="#adding-the-left-menu" aria-hidden="true">#</a> Adding the left menu</h3><p>Open <code>http://YourDomain/admin/auth/menu</code> and add the corresponding menu, then you can see the link to the user management page in the left sidebar of the backend administration page.</p><blockquote><p>Where <code>uri</code> fill in the part of the path that does not contain the route prefix, such as the full path is <code>http://YourDomain/admin/demo/users</code>, then fill in <code>demo/users</code>, if you want to add external links, just fill in the full url, such as <code>http://dcat-admin.org/</code>.</p></blockquote><h3 id="menu-translation" tabindex="-1"><a class="header-anchor" href="#menu-translation" aria-hidden="true">#</a> Menu translation</h3><p>Append the menu TITLE to the <code>menu_titles</code> index of your language file. For example, for the &quot;Workplace&quot; TITLE:</p><p>In <code>resources/lang/{current language}/menu.php</code></p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token operator">...</span>
<span class="token comment">// Replace spaces with _ lowercase and _</span>
<span class="token string single-quoted-string">&#39;titles&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;work_units&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;Unidades de trabajo&#39;</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="done" tabindex="-1"><a class="header-anchor" href="#done" aria-hidden="true">#</a> Done</h3>`,34),m=s("code",null,"CURD",-1),v=s("code",null,"app/Admin/Contollers/UserController.php",-1),g=s("code",null,"form()",-1),h=s("code",null,"grid()",-1),b=p(`<h2 id="a-brief-description-of-the-add-drop-remove-check-function" tabindex="-1"><a class="header-anchor" href="#a-brief-description-of-the-add-drop-remove-check-function" aria-hidden="true">#</a> A brief description of the add/drop/remove/check function</h2><p>To make it easier to understand the basic Usages of the Add/Delete function, the following will give you a brief overview of the code generated earlier using the generator.</p><h3 id="controller" tabindex="-1"><a class="header-anchor" href="#controller" aria-hidden="true">#</a> Controller</h3><p>The add/remove/check page code of <code>Dcat Admin</code> is very simple and easy to understand, very developer friendly, requires very little code to build a fully functional backend system, and is very simple, flexible and easy to extend.</p><p>Open <code>app/Admin/Controllers/UserController.php</code> can see the following code</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Controllers</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Repositories<span class="token punctuation">\\</span>User</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Form</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Grid</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Show</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Controllers<span class="token punctuation">\\</span>AdminController</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">UserController</span> <span class="token keyword">extends</span> <span class="token class-name">AdminController</span>
<span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * Make a grid builder.
     *
     * <span class="token keyword">@return</span> <span class="token class-name">Grid</span>
     */</span>
    <span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function-definition function">grid</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name static-context">Grid</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">Grid</span> <span class="token variable">$grid</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// The fields here will automatically use translated files</span>
            <span class="token variable">$grid</span><span class="token operator">-&gt;</span><span class="token function">column</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;id&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">sortable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token variable">$grid</span><span class="token operator">-&gt;</span><span class="token function">column</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;name&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token variable">$grid</span><span class="token operator">-&gt;</span><span class="token function">column</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;email&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token variable">$grid</span><span class="token operator">-&gt;</span><span class="token function">column</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;email_verified_at&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token variable">$grid</span><span class="token operator">-&gt;</span><span class="token function">column</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;password&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token variable">$grid</span><span class="token operator">-&gt;</span><span class="token function">column</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;remember_token&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token variable">$grid</span><span class="token operator">-&gt;</span><span class="token function">column</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;created_at&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token variable">$grid</span><span class="token operator">-&gt;</span><span class="token function">column</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;updated_at&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">sortable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
            <span class="token variable">$grid</span><span class="token operator">-&gt;</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name class-name-fully-qualified type-declaration">Grid<span class="token punctuation">\\</span>Filter</span> <span class="token variable">$filter</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token variable">$filter</span><span class="token operator">-&gt;</span><span class="token function">equal</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;id&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * Make a show builder.
     *
     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token keyword">mixed</span></span> <span class="token parameter">$id</span>
     *
     * <span class="token keyword">@return</span> <span class="token class-name">Show</span>
     */</span>
    <span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function-definition function">detail</span><span class="token punctuation">(</span><span class="token variable">$id</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name static-context">Show</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token variable">$id</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">Show</span> <span class="token variable">$show</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// The fields here will automatically use translated files</span>
            <span class="token variable">$show</span><span class="token operator">-&gt;</span><span class="token function">field</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;id&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token variable">$show</span><span class="token operator">-&gt;</span><span class="token function">field</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;name&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token variable">$show</span><span class="token operator">-&gt;</span><span class="token function">field</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;email&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token variable">$show</span><span class="token operator">-&gt;</span><span class="token function">field</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;email_verified_at&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token variable">$show</span><span class="token operator">-&gt;</span><span class="token function">field</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;password&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token variable">$show</span><span class="token operator">-&gt;</span><span class="token function">field</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;remember_token&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token variable">$show</span><span class="token operator">-&gt;</span><span class="token function">field</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;created_at&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token variable">$show</span><span class="token operator">-&gt;</span><span class="token function">field</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;updated_at&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * Make a form builder.
     *
     * <span class="token keyword">@return</span> <span class="token class-name">Form</span>
     */</span>
    <span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function-definition function">form</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name static-context">Form</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">Form</span> <span class="token variable">$form</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// The fields here will automatically use translated files</span>
            <span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">display</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;id&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;name&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;email&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;email_verified_at&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;password&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;remember_token&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
            <span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">display</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;created_at&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">display</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;updated_at&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="repositories" tabindex="-1"><a class="header-anchor" href="#repositories" aria-hidden="true">#</a> Repositories</h3><p><code>Dcat Admin</code> building pages do not directly rely on <code>Model</code>, but the introduction of the data warehouse as an intermediate layer, so that the construction of the page is no longer with the read and write data to produce a strong coupling.</p>`,8),f=s("code",null,"Dcat Admin",-1),w=p(`<blockquote><p>If your data comes from <code>MySQL</code>, then you can also use <code>Model</code> instance directly. To make it easier for you to understand the concept, we&#39;ve created a data warehouse file here.</p></blockquote><p>We open the just generated file <code>app/Admin/Repositories/User.php</code>, we can see only the following contents, which is quite simple</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Repositories</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Repositories<span class="token punctuation">\\</span>EloquentRepository</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>User</span> <span class="token keyword">as</span> UserModel<span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">User</span> <span class="token keyword">extends</span> <span class="token class-name">EloquentRepository</span>
<span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token variable">$eloquentClass</span> <span class="token operator">=</span> <span class="token class-name static-context">UserModel</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="language-packs" tabindex="-1"><a class="header-anchor" href="#language-packs" aria-hidden="true">#</a> Language packs</h3>`,4),y=p(`<p>Let&#39;s open the <code>UserController</code> language package file <code>resouces/lang/{current language}/user.php</code>.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span> 
<span class="token keyword">return</span> <span class="token punctuation">[</span>
    <span class="token comment">// labels is a custom label translation</span>
    <span class="token string single-quoted-string">&#39;labels&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
        <span class="token comment">// This is a translation of the page title</span>
        <span class="token string single-quoted-string">&#39;User&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;用户&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// Table field translation</span>
    <span class="token string single-quoted-string">&#39;fields&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
        <span class="token string single-quoted-string">&#39;name&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;名称&#39;</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;email&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;邮箱&#39;</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;email_verified_at&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;验证时间&#39;</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;password&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;密码&#39;</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;remember_token&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;remember_token&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;options&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function _(q,x){const a=i("RouterLink");return c(),l("div",null,[k,s("p",null,[n("Such a simple "),m,n(" function on the build is complete, the rest of the work is the depth of building data tables and forms, open "),v,n(", find the "),g,n(" and "),h,n(" methods, then add the build code. For more detailed usage, please see "),e(a,{to:"/guide/model-grid.html"},{default:t(()=>[n("data form")]),_:1}),n(" and "),e(a,{to:"/guide/model-form.html"},{default:t(()=>[n("data form")]),_:1}),n(".")]),b,s("p",null,[n("Data repository is the specific implementation of the "),f,n(" interface for data add/drop operations, please refer to "),e(a,{to:"/guide/model-repository.html"},{default:t(()=>[n("data repository")]),_:1}),n(" for more details about Usage.")]),w,s("p",null,[n("Each controller can generate its own language pack, and the "),e(a,{to:"/guide/model-grid.html"},{default:t(()=>[n("data-grid")]),_:1}),n(", "),e(a,{to:"/guide/model-form.html"},{default:t(()=>[n("data-form")]),_:1}),n(" and "),e(a,{to:"/guide/model-show.html"},{default:t(()=>[n("data-detail")]),_:1}),n(" functions will automatically read the translations.")]),y])}const U=o(d,[["render",_],["__file","quick-start.html.vue"]]);export{U as default};