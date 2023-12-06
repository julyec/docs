import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as p,c,a as n,b as s,d as e,e as t}from"./app-c17653d8.js";const l={},r=t(`<h1 id="faq-summary" tabindex="-1"><a class="header-anchor" href="#faq-summary" aria-hidden="true">#</a> FAQ Summary</h1><h3 id="_1-how-do-i-set-the-language-to-simplified-chinese" tabindex="-1"><a class="header-anchor" href="#_1-how-do-i-set-the-language-to-simplified-chinese" aria-hidden="true">#</a> 1. How do I set the language to Simplified Chinese?</h3><p>Open the configuration file <code>config/app.php</code> and set the value of the <code>locale</code> parameter to <code>zh_CN</code>.</p><h3 id="_2-laravel7-time-is-displayed-in-utc-format" tabindex="-1"><a class="header-anchor" href="#_2-laravel7-time-is-displayed-in-utc-format" aria-hidden="true">#</a> 2. Laravel7 time is displayed in UTC format</h3><p>This is a pitfall brought on by the <code>Laravel7</code> upgrade, see [Date Serialization] for the reason.(https://learnku.com/docs/laravel/7.x/upgrade/7445#date-serialization)。</p><p>Solving this problem in this project is simple, just introduce <code>Dcat\\Admin\\Traits\\HasDateTimeFormatter</code> as <code>trait</code> in <code>Model</code>.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Models</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Traits<span class="token punctuation">\\</span>HasDateTimeFormatter</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Database<span class="token punctuation">\\</span>Eloquent<span class="token punctuation">\\</span>Model</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">MyModel</span> <span class="token keyword">extends</span> <span class="token class-name">Model</span>
<span class="token punctuation">{</span>
     <span class="token keyword">use</span> <span class="token package">HasDateTimeFormatter</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-form-save-time-error-array-to-string-conversion" tabindex="-1"><a class="header-anchor" href="#_3-form-save-time-error-array-to-string-conversion" aria-hidden="true">#</a> 3. Form save time error <code>Array to string conversion</code></h3><p>This problem occurs because the values submitted by the form end up being converted to <code>array</code> type, and <code>MySQL</code> does not support storing data of type <code>array</code> directly</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">multipleSelect</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;user_id&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">saving</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">$v</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Convert to , separated string</span>
    <span class="token keyword">return</span> <span class="token function">implode</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;,&#39;</span><span class="token punctuation">,</span> <span class="token variable">$v</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Of course, you can also use <code>model</code>&#39;s <strong>mutator</strong> to convert the values of the fields, which can be found in the <code>laravel</code> documentation, so I won&#39;t repeat that here.</p>`,11),d={href:"https://learnku.com/articles/44386",target:"_blank",rel:"noopener noreferrer"},u=n("h3",{id:"_4-how-do-i-migrate-from-laravel-admin-to-dcat-admin",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_4-how-do-i-migrate-from-laravel-admin-to-dcat-admin","aria-hidden":"true"},"#"),s(" 4. How do I migrate from laravel-admin to dcat-admin?")],-1),h={href:"https://learnku.com/articles/44235",target:"_blank",rel:"noopener noreferrer"},m=t(`<h3 id="_5-rewrite-the-login-page-and-login-logic" tabindex="-1"><a class="header-anchor" href="#_5-rewrite-the-login-page-and-login-logic" aria-hidden="true">#</a> 5. Rewrite the login page and login logic</h3><p>Way 1, rewrite the login controller method.</p><p>The default login controller uses the class <code>App\\Admin\\AuthController</code>, which can be modified by configuring the parameter <code>admin.auth.controller</code>.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Controllers</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Controllers<span class="token punctuation">\\</span>AuthController</span> <span class="token keyword">as</span> BaseAuthController<span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">AuthController</span> <span class="token keyword">extends</span> <span class="token class-name">BaseAuthController</span>
<span class="token punctuation">{</span>
    <span class="token comment">// Custom login view template</span>
    <span class="token keyword">protected</span> <span class="token variable">$view</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;admin.login&#39;</span><span class="token punctuation">;</span>
	
	<span class="token comment">// Rewriting login page logic</span>
	<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getLogin</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Content</span> <span class="token variable">$content</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token operator">...</span>
    <span class="token punctuation">}</span>

    <span class="token operator">...</span>
<span class="token punctuation">}</span>

</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Mode 2, override routing.</p><p>In the routing file <code>app/Admin/routes.php</code>, override the routing of the landing page and login logic to implement custom features</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token class-name static-context">Route</span><span class="token operator">::</span><span class="token function">group</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;prefix&#39;</span>        <span class="token operator">=&gt;</span> <span class="token function">config</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;admin.prefix&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;namespace&#39;</span>     <span class="token operator">=&gt;</span> <span class="token class-name static-context">Admin</span><span class="token operator">::</span><span class="token function">controllerNamespace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;middleware&#39;</span>    <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;web&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;admin&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">Router</span> <span class="token variable">$router</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token variable">$router</span><span class="token operator">-&gt;</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;auth/login&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;AuthController@getLogin&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token variable">$router</span><span class="token operator">-&gt;</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;auth/login&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;AuthController@postLogin&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Implement your own login page and login logic in the <code>getLogin</code> and <code>postLogin</code> methods of your custom router AuthController.</p><h3 id="_6-exceptions-after-updating-to-a-new-version" tabindex="-1"><a class="header-anchor" href="#_6-exceptions-after-updating-to-a-new-version" aria-hidden="true">#</a> 6. Exceptions after updating to a new version</h3><p>If you encounter an update, some components do not work properly, it is possible that <code>dcat-admin</code> comes with a static resource has been updated. You need to run the command <code>php artisan admin:publish --force</code> to republish the front-end resources. Do not forget to clean your browser cache after publishing.</p><h3 id="_7-file-upload-failed-or-inaccessible" tabindex="-1"><a class="header-anchor" href="#_7-file-upload-failed-or-inaccessible" aria-hidden="true">#</a> 7. File upload failed or inaccessible?</h3><p>If you find that you are unable to upload a file, then there are usually several reasons for this.</p>`,12),k=n("code",null,"Laravel",-1),g={href:"https://learnku.com/docs/dcat-admin/1.x/picture-file-upload/8106",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"laravel",-1),f={href:"https://learnku.com/docs/laravel/7.x/filesystem/7485",target:"_blank",rel:"noopener noreferrer"},b=t("<li>The file is too large and needs to be adjusted with the <code>upload_max_filesize</code> parameter of <code>php.ini</code>.</li><li>File upload directory without write permissions</li><li><code>php</code> is not installed or the <code>fileinfo</code> extension is not enabled</li><li>Check if the <code>upload_tmp_dir</code> parameter of <code>php.ini</code> is set properly.</li>",4),y=t(`<p>If the file is uploaded success, but cannot be accessed normally, then it may be that the <code>.env</code> configuration file&#39;s <code>APP_URL</code> parameter is not set correctly.</p><h3 id="_8-about-front-end-resource-loading-problems" tabindex="-1"><a class="header-anchor" href="#_8-about-front-end-resource-loading-problems" aria-hidden="true">#</a> 8. About front-end resource loading problems</h3><p>The <code>Dcat Admin</code> supports loading front-end resources on-demand, so that when a component is needed, front-end resources can be introduced, and developers do not need to worry about installing too many components to affect the page loading speed.</p><p>Only those resources that need to be introduced in the global page need to be introduced in the <code>app/Admin/bootstrap.php</code> or <code>ServiceProvider::boot</code> method:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token class-name static-context">Admin</span><span class="token operator">::</span><span class="token function">css</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;path/to/your/css&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name static-context">Admin</span><span class="token operator">::</span><span class="token function">js</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;path/to/your/js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-why-does-the-configuration-of-roles-and-permissions-still-prompt-for-no-access-rights" tabindex="-1"><a class="header-anchor" href="#_9-why-does-the-configuration-of-roles-and-permissions-still-prompt-for-no-access-rights" aria-hidden="true">#</a> 9. Why does the configuration of roles and permissions still prompt for no access rights?</h3><p>The reason for this may be due to a misconfiguration of the <code>URL</code> path of the privilege, the correct <code>URL</code> configuration containing the add/drop check function should be something like <code>auth/users*</code>, if it is configured as <code>auth/users/*</code>, then it will prompt for unprivileged access.</p><blockquote><p>{tip} In addition, there are two ways to fill in the custom URL of the tag form: one is to select it and press <code>delete key</code> to change it; the other is to fill in the form and press <code>space bar</code> + <code>Enter key</code>.</p></blockquote><h3 id="_10-why-don-t-menus-with-no-permissions-automatically-hide" tabindex="-1"><a class="header-anchor" href="#_10-why-don-t-menus-with-no-permissions-automatically-hide" aria-hidden="true">#</a> 10. Why don&#39;t menus with no permissions automatically hide?</h3><p>This problem is because there are no permissions or roles to bind to menus, just bind permissions or roles to menus that you want to show without permissions.</p><h3 id="_11-project-cannot-log-in-after-using-https" tabindex="-1"><a class="header-anchor" href="#_11-project-cannot-log-in-after-using-https" aria-hidden="true">#</a> 11. Project cannot log in after using HTTPS</h3><p>The value of the <code>admin.https</code> parameter of the configuration file needs to be set to <code>true</code>.</p><h3 id="_12-get-xxx-no-response" tabindex="-1"><a class="header-anchor" href="#_12-get-xxx-no-response" aria-hidden="true">#</a> 12.$.get(xxx) no response</h3><p><code>Dcat Admin</code> is using <code>jQuery3.x</code>, the <code>$.get</code> method is deprecated in <code>jQuery3.x</code>, please use <code>$.ajax</code> instead!</p><h3 id="_13-do-uploaded-images-often-delete-automatically-for-no-apparent-reason" tabindex="-1"><a class="header-anchor" href="#_13-do-uploaded-images-often-delete-automatically-for-no-apparent-reason" aria-hidden="true">#</a> 13. Do uploaded images often delete automatically for no apparent reason?</h3><p>This problem is most likely due to the fact that <code>Model</code> has set an accessor to the fields related to the image, such as</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">class</span> <span class="token class-name-definition class-name">User</span> extend Model
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getAvatarAttribute</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name static-context">Storage</span><span class="token operator">::</span><span class="token function">disk</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;admin&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">url</span><span class="token punctuation">(</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">avatar</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In this case, there will be automatic deletion of uploaded images, the solution is simple, change the access to the custom method can be</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">class</span> <span class="token class-name-definition class-name">User</span> extend Model
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getAvatar</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name static-context">Storage</span><span class="token operator">::</span><span class="token function">disk</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;admin&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">url</span><span class="token punctuation">(</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">avatar</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_14-frontend-and-backend-session-conflict" tabindex="-1"><a class="header-anchor" href="#_14-frontend-and-backend-session-conflict" aria-hidden="true">#</a> 14. Frontend and backend session conflict</h3><p>Since <code>2.0</code> version <code>admin.session</code> middleware is no longer enabled by default, if your application has both frontend and backend, you need to enable <code>admin.session</code> middleware, otherwise it will cause front and backend <code>session</code> conflict problem.</p><p>Set the value of the configuration parameter <code>admin.route.enable_session_middleware</code> to <code>true</code> to enable it</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>    <span class="token string single-quoted-string">&#39;route&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
        <span class="token string single-quoted-string">&#39;domain&#39;</span> <span class="token operator">=&gt;</span> <span class="token function">env</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;ADMIN_ROUTE_DOMAIN&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

        <span class="token string single-quoted-string">&#39;prefix&#39;</span> <span class="token operator">=&gt;</span> <span class="token function">env</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;ADMIN_ROUTE_PREFIX&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;admin&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

        <span class="token string single-quoted-string">&#39;namespace&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;App\\\\Admin\\\\Controllers&#39;</span><span class="token punctuation">,</span>

        <span class="token string single-quoted-string">&#39;middleware&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;web&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;admin&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        
        <span class="token comment">// enable admin.session middleware</span>
        <span class="token string single-quoted-string">&#39;enable_session_middleware&#39;</span> <span class="token operator">=&gt;</span> <span class="token constant boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_15-image-anti-theft-chain" tabindex="-1"><a class="header-anchor" href="#_15-image-anti-theft-chain" aria-hidden="true">#</a> 15. Image anti-theft chain</h3><p>Image requests will have the <code>referer</code> field removed by default, but if you have a security chain requirement, you can set this in the configuration file (<code>config/admin.php</code>).</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> &quot;disable_no_referrer_meta&quot; =&gt; true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,26);function _(w,x){const a=i("ExternalLinkIcon");return p(),c("div",null,[r,n("blockquote",null,[n("p",null,[s("{tip} For a more elegant way to convert values, see "),n("a",d,[s("Dcat Admin Tutorial - How to Elegantly Change the Data Type of Form Values?"),e(a)])])]),u,n("p",null,[n("a",h,[s("Dcat Admin Tutorial - How do I migrate from Laravel admin to dcat admin?"),e(a)])]),m,n("ol",null,[n("li",null,[k,s(" file upload is not configured correctly, please refer to the document "),n("a",g,[s("Image/File Upload"),e(a)]),s(". If you are not familiar with the "),v,s(" file upload feature, please read the documentation "),n("a",f,[s("Laravel - File Storage"),e(a)]),s(".")]),b]),y])}const T=o(l,[["render",_],["__file","qa.html.vue"]]);export{T as default};
