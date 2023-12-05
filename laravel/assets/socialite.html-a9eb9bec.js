import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as n,o as c,c as d,b as a,d as e,e as r,a as i}from"./app-8cdff07c.js";const s={},l=i('<h1 id="socialite-社会化登录" tabindex="-1"><a class="header-anchor" href="#socialite-社会化登录" aria-hidden="true">#</a> Socialite 社会化登录</h1><ul><li><a href="#introduction">简介</a></li><li><a href="#installation">安装</a></li><li><a href="#upgrading-socialite">升级</a></li><li><a href="#configuration">配置</a></li><li><a href="#authentication">认证</a><ul><li><a href="#routing">路由</a></li><li><a href="#authentication-and-storage">身份验证和存储</a></li><li><a href="#access-scopes">访问范围</a></li><li><a href="#optional-parameters">可选参数</a></li></ul></li><li><a href="#retrieving-user-details">检索用户详细信息</a></li></ul><p><a name="introduction"></a></p><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2>',4),h={href:"https://github.com/laravel/socialite",target:"_blank",rel:"noopener noreferrer"},u={href:"https://socialiteproviders.com/",target:"_blank",rel:"noopener noreferrer"},p=i(`<p><a name="installation"></a></p><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><p>在开始使用 Socialite 之前，通过 Composer 软件包管理器将软件包添加到项目的依赖项中:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">composer</span> require laravel/socialite
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="upgrading-socialite"></a></p><h2 id="升级" tabindex="-1"><a class="header-anchor" href="#升级" aria-hidden="true">#</a> 升级</h2>`,6),g={href:"https://github.com/laravel/socialite/blob/master/UPGRADE.",target:"_blank",rel:"noopener noreferrer"},b=i(`<p><a name="configuration"></a></p><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><p>在使用 Socialite 之前，你需要为应用程序使用的OAuth提供程序添加凭据。通常，可以通过在要验证的服务的仪表板中创建“开发人员应用程序”来检索这些凭据。</p><p>这些凭证应该放在你的 <code>config/services.php</code> 配置文件中， 并且应该使用 <code>facebook</code>, <code>twitter</code> (OAuth 1.0), <code>twitter-oauth-2</code> (OAuth 2.0), <code>linkedin</code>, <code>google</code>, <code>github</code>, <code>gitlab</code>, 或者 <code>bitbucket</code>, 取决于应用程序所需的提供商：</p><pre><code>&#39;github&#39; =&gt; [
    &#39;client_id&#39; =&gt; env(&#39;GITHUB_CLIENT_ID&#39;),
    &#39;client_secret&#39; =&gt; env(&#39;GITHUB_CLIENT_SECRET&#39;),
    &#39;redirect&#39; =&gt; &#39;http://example.com/callback-url&#39;,
],
</code></pre><blockquote><p>技巧：如果 <code>redirect</code> 项的值包含一个相对路径，它将会自动解析为全称 URL。</p></blockquote><p><a name="authentication"></a></p><h2 id="认证" tabindex="-1"><a class="header-anchor" href="#认证" aria-hidden="true">#</a> 认证</h2><p><a name="routing"></a></p><h3 id="路由" tabindex="-1"><a class="header-anchor" href="#路由" aria-hidden="true">#</a> 路由</h3><p>要使用 OAuth 提供程序对用户进行身份验证，你需要两个路由：一个用于将用户重定向到 OAuth provider，另一个用于在身份验证后接收来自 provider 的回调。下面的示例控制器演示了这两个路由的实现：</p><pre><code>use Laravel\\Socialite\\Facades\\Socialite;

Route::get(&#39;/auth/redirect&#39;, function () {
    return Socialite::driver(&#39;github&#39;)-&gt;redirect();
});

Route::get(&#39;/auth/callback&#39;, function () {
    $user = Socialite::driver(&#39;github&#39;)-&gt;user();

    // $user-&gt;token
});
</code></pre><p><code>redirect</code> 提供的方法 <code>Socialite</code> facade 负责将用户重定向到 OAuth provider，而该 user 方法将读取传入的请求并在身份验证后从提供程序中检索用户的信息。</p><p><a name="authentication-and-storage"></a></p><h3 id="身份验证和存储" tabindex="-1"><a class="header-anchor" href="#身份验证和存储" aria-hidden="true">#</a> 身份验证和存储</h3><p>从 OAuth 提供程序检索到用户后，你可以确定该用户是否存在于应用程序的数据库中并<a href="./authentication#authenticate-a-user-instance">验证用户</a>。如果用户在应用程序的数据库中不存在，通常会在数据库中创建一条新记录来代表该用户：</p><pre><code>use App\\Models\\User;
use Illuminate\\Support\\Facades\\Auth;
use Laravel\\Socialite\\Facades\\Socialite;

Route::get(&#39;/auth/callback&#39;, function () {
    $githubUser = Socialite::driver(&#39;github&#39;)-&gt;user();

    $user = User::updateOrCreate([
        &#39;github_id&#39; =&gt; $githubUser-&gt;id,
    ], [
        &#39;name&#39; =&gt; $githubUser-&gt;name,
        &#39;email&#39; =&gt; $githubUser-&gt;email,
        &#39;github_token&#39; =&gt; $githubUser-&gt;token,
        &#39;github_refresh_token&#39; =&gt; $githubUser-&gt;refreshToken,
    ]);

    Auth::login($user);

    return redirect(&#39;/dashboard&#39;);
});
</code></pre><blockquote><p>技巧：有关特定 OAuth 提供商提供哪些用户信息的更多信息，请参阅有关 <a href="#retrieving-user-details">检索用户详细信息</a> 的文档。</p></blockquote><p><a name="access-scopes"></a></p><h3 id="访问作用域" tabindex="-1"><a class="header-anchor" href="#访问作用域" aria-hidden="true">#</a> 访问作用域</h3><p>在重定向用户之前，你还可以使用 <code>scopes</code> 方法在请求中添加其他「作用域」。此方法会将所有现有作用域与你提供的作用域合并：</p><pre><code>use Laravel\\Socialite\\Facades\\Socialite;

return Socialite::driver(&#39;github&#39;)
    -&gt;scopes([&#39;read:user&#39;, &#39;public_repo&#39;])
    -&gt;redirect();
</code></pre><p>你可以使用 <code>setScopes</code> 方法覆盖所有现有范围：</p><pre><code>return Socialite::driver(&#39;github&#39;)
    -&gt;setScopes([&#39;read:user&#39;, &#39;public_repo&#39;])
    -&gt;redirect();
</code></pre><p><a name="optional-parameters"></a></p><h3 id="可选参数" tabindex="-1"><a class="header-anchor" href="#可选参数" aria-hidden="true">#</a> 可选参数</h3><p>许多 OAuth providers 支持重定向请求中的可选参数。 要在请求中包含任何可选参数，请使用关联数组调用 <code>with</code> 方法：</p><pre><code>use Laravel\\Socialite\\Facades\\Socialite;

return Socialite::driver(&#39;google&#39;)
    -&gt;with([&#39;hd&#39; =&gt; &#39;example.com&#39;])
    -&gt;redirect();
</code></pre><blockquote><p>注意：使用 <code>with</code> 方法时, 注意不要传递任何保留的关键字，例如 <code>state</code> 或 <code>response_type</code>。</p></blockquote><p><a name="retrieving-user-details"></a></p><h2 id="检索用户详细信息" tabindex="-1"><a class="header-anchor" href="#检索用户详细信息" aria-hidden="true">#</a> 检索用户详细信息</h2><p>在将用户重定向回你的身份验证回调路由之后，你可以使用 Socialite 的 <code>user</code> 方法检索用户的详细信息。<code>user</code> 方法为返回的用户对象提供了各种属性和方法，你可以使用这些属性和方法在你自己的数据库中存储有关该用户的信息。</p><p>你可以使用不同的属性和方法这取决于要进行身份验证的 OAuth 提供程序是否支持 OAuth 1.0 或 OAuth 2.0：</p><pre><code>use Laravel\\Socialite\\Facades\\Socialite;

Route::get(&#39;/auth/callback&#39;, function () {
    $user = Socialite::driver(&#39;github&#39;)-&gt;user();

    // OAuth 2.0 providers...
    $token = $user-&gt;token;
    $refreshToken = $user-&gt;refreshToken;
    $expiresIn = $user-&gt;expiresIn;

    // OAuth 1.0 providers...
    $token = $user-&gt;token;
    $tokenSecret = $user-&gt;tokenSecret;

    // All providers...
    $user-&gt;getId();
    $user-&gt;getNickname();
    $user-&gt;getName();
    $user-&gt;getEmail();
    $user-&gt;getAvatar();
});
</code></pre><p><a name="retrieving-user-details-from-a-token-oauth2"></a></p><h4 id="从令牌中检索用户详细信息-oauth2" tabindex="-1"><a class="header-anchor" href="#从令牌中检索用户详细信息-oauth2" aria-hidden="true">#</a> 从令牌中检索用户详细信息 (OAuth2)</h4><p>如果你已经有了一个用户的有效访问令牌，你可以使用 Socialite 的 <code>userFromToken</code> 方法检索其详细信息：</p><pre><code>use Laravel\\Socialite\\Facades\\Socialite;

$user = Socialite::driver(&#39;github&#39;)-&gt;userFromToken($token);
</code></pre><p><a name="retrieving-user-details-from-a-token-oauth2"></a></p><h4 id="从令牌中检索用户详细信息-oauth2-1" tabindex="-1"><a class="header-anchor" href="#从令牌中检索用户详细信息-oauth2-1" aria-hidden="true">#</a> 从令牌中检索用户详细信息 (OAuth2)</h4><p>如果你已经有了一对有效的用户令牌/秘钥，你可以使用 Socialite 的 <code>userFromTokenAndSecret</code> 方法检索他们的详细信息：</p><pre><code>use Laravel\\Socialite\\Facades\\Socialite;

$user = Socialite::driver(&#39;twitter&#39;)-&gt;userFromTokenAndSecret($token, $secret);
</code></pre><p><a name="stateless-authentication"></a></p><h4 id="无认证状态" tabindex="-1"><a class="header-anchor" href="#无认证状态" aria-hidden="true">#</a> 无认证状态</h4><p><code>stateless</code> 方法可用于禁用会话状态验证。 这在向 API 添加社交身份验证时非常有用：</p><pre><code>use Laravel\\Socialite\\Facades\\Socialite;

return Socialite::driver(&#39;google&#39;)-&gt;stateless()-&gt;user();
</code></pre><blockquote><p>注意：Twitter 驱动程序不支持无状态身份验证，它使用 OAuth 1.0 进行身份验证</p></blockquote>`,47);function f(m,v){const t=n("ExternalLinkIcon");return c(),d("div",null,[l,a("p",null,[e("除了典型的基于表单的身份验证之外，Laravel 还提供了一种使用 "),a("a",h,[e("Laravel Socialite"),r(t)]),e("对 OAuth providers 进行身份验证的简单方便的方法。 Socialite 目前支持 Facebook，Twitter，LinkedIn，Google，GitHub，GitLab 和 Bitbucket 的身份验证。")]),a("blockquote",null,[a("p",null,[e("技巧：其他平台的驱动器可以在 "),a("a",u,[e("Socialite Providers"),r(t)]),e(" 社区驱动网站查找。")])]),p,a("p",null,[e("升级到 Socialite 的新主要版本时，请务必仔细查看 "),a("a",g,[e("the upgrade guide"),r(t)]),e(".")]),b])}const _=o(s,[["render",f],["__file","socialite.html.vue"]]);export{_ as default};
