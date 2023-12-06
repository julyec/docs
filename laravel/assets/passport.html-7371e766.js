import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as r,c,b as a,d as e,e as s,a as t}from"./app-06635a3b.js";const i={},d=t('<h1 id="passport-oauth-认证" tabindex="-1"><a class="header-anchor" href="#passport-oauth-认证" aria-hidden="true">#</a> Passport OAuth 认证</h1><ul><li><a href="#introduction">简介</a><ul><li><a href="#passport-or-sanctum">选择 Passport 还是 Sanctum?</a></li></ul></li><li><a href="#installation">安装</a><ul><li><a href="#deploying-passport">部署 Passport</a></li><li><a href="#migration-customization">自定义迁移</a></li><li><a href="#upgrading-passport">升级 Passport</a></li></ul></li><li><a href="#configuration">配置</a><ul><li><a href="#client-secret-hashing">客户端密钥 Hashing</a></li><li><a href="#token-lifetimes">Token 生命周期</a></li><li><a href="#overriding-default-models">重载默认模型</a></li><li><a href="#overriding-routes">重载路由</a></li></ul></li><li><a href="#issuing-access-tokens">发布访问令牌</a><ul><li><a href="#managing-clients">客户端管理</a></li><li><a href="#requesting-tokens">请求令牌</a></li><li><a href="#refreshing-tokens">刷新令牌</a></li><li><a href="#revoking-tokens">撤销令牌</a></li><li><a href="#purging-tokens">清除令牌</a></li></ul></li><li><a href="#code-grant-pkce">通过 PKCE 发布令牌</a><ul><li><a href="#creating-a-auth-pkce-grant-client">创建客户端</a></li><li><a href="#requesting-auth-pkce-grant-tokens">请求令牌</a></li></ul></li><li><a href="#password-grant-tokens">密码授权方式的令牌</a><ul><li><a href="#creating-a-password-grant-client">创建密码授权方式客户端</a></li><li><a href="#requesting-password-grant-tokens">请求令牌</a></li><li><a href="#requesting-all-scopes">请求所有的作用域</a></li><li><a href="#customizing-the-user-provider">自定义用户提供者</a></li><li><a href="#customizing-the-username-field">自定义用户名字段</a></li><li><a href="#customizing-the-password-validation">自定义密码验证</a></li></ul></li><li><a href="#implicit-grant-tokens">隐式授权令牌</a></li><li><a href="#client-credentials-grant-tokens">客户端授权令牌</a></li><li><a href="#personal-access-tokens">个人访问令牌</a><ul><li><a href="#creating-a-personal-access-client">创建个人访问令牌的客户端</a></li><li><a href="#managing-personal-access-tokens">管理个人访问令牌</a></li></ul></li><li><a href="#protecting-routes">路由保护</a><ul><li><a href="#via-middleware">通过中间件</a></li><li><a href="#passing-the-access-token">传递访问令牌</a></li></ul></li><li><a href="#token-scopes">令牌作用域</a><ul><li><a href="#defining-scopes">定义作用域</a></li><li><a href="#default-scope">默认作用域</a></li><li><a href="#assigning-scopes-to-tokens">给令牌分配作用域</a></li><li><a href="#checking-scopes">检查作用域</a></li></ul></li><li><a href="#consuming-your-api-with-javascript">使用 JavaScript 接入 API</a></li><li><a href="#events">事件</a></li><li><a href="#testing">测试</a></li></ul><p><a name="introduction"></a></p><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2>',4),l={href:"https://github.com/laravel/passport",target:"_blank",rel:"noopener noreferrer"},u={href:"https://github.com/thephpleague/oauth2-server",target:"_blank",rel:"noopener noreferrer"},h=a("strong",null,"注意",-1),k=a("br",null,null,-1),g={href:"https://oauth2.thephpleague.com/terminology/",target:"_blank",rel:"noopener noreferrer"},v=t(`<p><a name="passport-or-sanctum"></a></p><h3 id="passport-还是-sanctum" tabindex="-1"><a class="header-anchor" href="#passport-还是-sanctum" aria-hidden="true">#</a> Passport 还是 Sanctum?</h3><p>在开始之前，我们希望你先确认下是 Laravel Passport 还是 <a href="./sanctum">Laravel Sanctum</a> 能为你的应用提供更好的服务。如果你的应用确确实实需要支持 OAuth2，那没疑问，你需要选用 Laravel Passport。</p><p>然而，如果你只是试图要去认证一个单页应用，或者手机应用，或者发布 API 令牌，你应该选用 <a href="./sanctum">Laravel Sanctum</a>。 Laravel Sanctum 不支持 OAuth2，它提供了更为简单的 API 授权开发体验。</p><p><a name="installation"></a></p><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><p>在开始使用之前，使用 Composer 包管理器安装 Passport：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">composer</span> require laravel/passport
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Passport 的 <a href="./providers">服务提供器</a> 注册了自己的数据库迁移脚本目录， 所以你应该在安装软件包完成后迁移你自己的数据库。 Passport 的迁移脚本将为你的应用创建用于存储 OAuth2 客户端和访问令牌的数据表：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan migrate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>接下来，你需要执行 Artisan 命令 <code>passport:install</code>。这个命令将会创建一个用于生成安全访问令牌的加密秘钥。另外，这个命令也将创建用于生成访问令牌的 「个人访问」 客户端和 「密码授权」 客户端 ：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan passport:install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p><strong>技巧</strong><br> 如果你想用使用 UUID 作为 Passport <code>Client</code> 模型的主键，代替默认的自动增长整形字段，请在安装 Passport 时使用 <a href="#client-uuids">uuids 参数</a> 。</p></blockquote><p>在执行 <code>passport:install</code> 命令后， 添加 <code>Laravel\\Passport\\HasApiTokens</code> trait 到你的 <code>App\\Models\\User</code> 模型中。 这个 trait 会提供一些帮助方法用于检查已认证用户的令牌和权限范围。如果你的模型已经在使用 <code>Laravel\\Sanctum\\HasApiTokens</code> trait，你可以删除该 trait：</p><pre><code>&lt;?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Factories\\HasFactory;
use Illuminate\\Foundation\\Auth\\User as Authenticatable;
use Illuminate\\Notifications\\Notifiable;
use Laravel\\Passport\\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;
}
</code></pre><p>最后，在您的应用的 <code>config/auth.php</code> 配置文件中，您应当定义一个 <code>api</code> 的授权看守器，并且将其 <code>driver</code> 选项设置为 <code>passport</code> 。这个调整将会让您的应用程序使用 Passport 的 <code>TokenGuard</code> 来鉴权 API 接口请求：</p><pre><code>&#39;guards&#39; =&gt; [
    &#39;web&#39; =&gt; [
        &#39;driver&#39; =&gt; &#39;session&#39;,
        &#39;provider&#39; =&gt; &#39;users&#39;,
    ],

    &#39;api&#39; =&gt; [
        &#39;driver&#39; =&gt; &#39;passport&#39;,
        &#39;provider&#39; =&gt; &#39;users&#39;,
    ],
],
</code></pre><p><a name="client-uuids"></a></p><h4 id="客户端-uuid" tabindex="-1"><a class="header-anchor" href="#客户端-uuid" aria-hidden="true">#</a> 客户端 UUID</h4><p>您也可以在运行 <code>passport:install</code> 命令的时候使用 <code>--uuids</code> 选项。这个参数将会让 Passport 使用 UUID 来替代默认的自增长形式的 Passport <code>Client</code> 模型主键。在您运行带有 <code>--uuids</code> 参数的 <code>passport:install</code> 命令后，您将得到关于禁用 Passport 默认迁移的相关指令说明：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan passport:install <span class="token parameter variable">--uuids</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="deploying-passport"></a></p><h3 id="部署-passport" tabindex="-1"><a class="header-anchor" href="#部署-passport" aria-hidden="true">#</a> 部署 Passport</h3><p>在您第一次部署 Passport 到您的应用服务器时，您需要执行 <code>passport:keys</code> 命令。该命令用于生成 Passport 用于生成 access token 的一个加密密钥。生成的加密密钥不应到添加到源代码控制系统中：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan passport:keys
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如有必要，您可以定义 Passport 的密钥应当加载的位置。您可以使用 <code>Passport:loadKeysFrom</code> 方法来实现。通常，这个方法应当在您的 <code>App\\Providers\\AuthServiceProvider</code> 类的 <code>boot</code> 方法中调用：</p><pre><code>/**
 * Register any authentication / authorization services.
 */
public function boot(): void
{
    Passport::loadKeysFrom(__DIR__.&#39;/../secrets/oauth&#39;);
}
</code></pre><p><a name="loading-keys-from-the-environment"></a></p><h4 id="从环境中加载密钥" tabindex="-1"><a class="header-anchor" href="#从环境中加载密钥" aria-hidden="true">#</a> 从环境中加载密钥</h4><p>此外，您可以使用 <code>vendor:publish</code> Artisan 命令来发布您的 Passport 配置文件：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan vendor:publish <span class="token parameter variable">--tag</span><span class="token operator">=</span>passport-config
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在发布配置文件之后，您可以将加密密钥配置为环境变量，再加载它们：</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token key attr-name">PASSPORT_PRIVATE_KEY</span><span class="token punctuation">=</span><span class="token value attr-value">&quot;-----BEGIN RSA PRIVATE KEY-----</span>
&lt;private key here&gt;
-----END RSA PRIVATE KEY-----&quot;

<span class="token key attr-name">PASSPORT_PUBLIC_KEY</span><span class="token punctuation">=</span><span class="token value attr-value">&quot;-----BEGIN PUBLIC KEY-----</span>
&lt;public key here&gt;
-----END PUBLIC KEY-----&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="migration-customization"></a></p><h3 id="自定义迁移" tabindex="-1"><a class="header-anchor" href="#自定义迁移" aria-hidden="true">#</a> 自定义迁移</h3><p>如果您不打算使用 Passport 的默认迁移，您应当在 <code>App\\Providers\\AppServiceProvider</code> 类的 <code>register</code> 方法中调用 <code>Passport::ignoreMigrations</code> 方法。您可以 使用 <code>vendor:publish</code> Artisan 命令来导出默认的迁移文件：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan vendor:publish <span class="token parameter variable">--tag</span><span class="token operator">=</span>passport-migrations
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="upgrading-passport"></a></p><h3 id="passport-的升级" tabindex="-1"><a class="header-anchor" href="#passport-的升级" aria-hidden="true">#</a> Passport 的升级</h3>`,39),m={href:"https://github.com/laravel/passport/blob/master/UPGRADE.",target:"_blank",rel:"noopener noreferrer"},b=t(`<p><a name="configuration"></a></p><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><p><a name="client-secret-hashing"></a></p><h3 id="客户端密钥的-hash-加密" tabindex="-1"><a class="header-anchor" href="#客户端密钥的-hash-加密" aria-hidden="true">#</a> 客户端密钥的 Hash 加密</h3><p>如果您希望客户端密钥在存储到数据库时使用 Hash 对其进行加密，您应当在 <code>App\\Provider\\AuthServiceProvider</code> 类的 <code>boot</code> 方法中调用 <code>Passport:hashClientSecrets</code> ：</p><pre><code>use Laravel\\Passport\\Passport;

Passport::hashClientSecrets();
</code></pre><p>一旦启用后，所有的客户端密钥都将只在创建的时候显示。由于明文的客户端密钥没有存储到数据库中，因此一旦其丢失后便无法恢复。</p><p><a name="token-lifetimes"></a></p><h3 id="token-生命周期" tabindex="-1"><a class="header-anchor" href="#token-生命周期" aria-hidden="true">#</a> Token 生命周期</h3><p>默认情况下，Passport 会颁发长达一年的长期 token 。如果您想要配置一个更长或更短的 token 生命周期，您可以在 <code>App\\Provider\\AuthServiceProvider</code> 类的 <code>boot</code> 方法中调用 <code>tokensExpiresIn</code> 、<code>refresgTokensExpireIn</code> 和 <code>personalAccessTokensExpireIn</code> 方法：</p><pre><code>/**
 * 注册身份验证/授权服务。
 */
public function boot(): void
{
    Passport::tokensExpireIn(now()-&gt;addDays(15));
    Passport::refreshTokensExpireIn(now()-&gt;addDays(30));
    Passport::personalAccessTokensExpireIn(now()-&gt;addMonths(6));
}
</code></pre><blockquote><p><strong>注意</strong><br> Passport 数据库表中的 <code>expires_at</code> 列是只读的，仅仅用于显示。在颁发 token 的时候，Passport 将过期信息存储在已签名和加密的 token 中。如果你想让 token 失效，你应当 <a href="#revoking-tokens">撤销它</a> 。</p></blockquote><p><a name="overriding-default-models"></a></p><h3 id="重写-passport-的默认模型" tabindex="-1"><a class="header-anchor" href="#重写-passport-的默认模型" aria-hidden="true">#</a> 重写 Passport 的默认模型</h3><p>您可以通过定义自己的模型并继承相应的 Passport 模型来实现自由自由扩展 Passport 内部使用的模型：</p><pre><code>use Laravel\\Passport\\Client as PassportClient;

class Client extends PassportClient
{
    // ...
}
</code></pre><p>在定义您的模型之后，您可以在 <code>Laravel\\Passport\\Passport</code> 类中指定 Passport 使用您自定义的模型。一样的，您应该在应用程序的 <code>App\\Providers\\AuthServiceProvider</code> 类中的 <code>boot</code> 方法中指定 Passport 使用您自定义的模型：</p><pre><code>use App\\Models\\Passport\\AuthCode;
use App\\Models\\Passport\\Client;
use App\\Models\\Passport\\PersonalAccessClient;
use App\\Models\\Passport\\RefreshToken;
use App\\Models\\Passport\\Token;

/**
 * 注册任意认证/授权服务。
 */
public function boot(): void
{
    Passport::useTokenModel(Token::class);
    Passport::useRefreshTokenModel(RefreshToken::class);
    Passport::useAuthCodeModel(AuthCode::class);
    Passport::useClientModel(Client::class);
    Passport::usePersonalAccessClientModel(PersonalAccessClient::class);
}
</code></pre><p><a name="overriding-routes"></a></p><h3 id="重写路由" tabindex="-1"><a class="header-anchor" href="#重写路由" aria-hidden="true">#</a> 重写路由</h3><p>您可能希望自定义 Passport 定义的路由。要实现这个功能，第一步，您需要在应用程序的 <code>AppServiceProvider</code> 中的 <code>register</code> 方法中添加 <code>Passport:ignoreRoutes</code> 语句，以忽略由 Passport 注册的路由：</p><pre><code>use Laravel\\Passport\\Passport;

/**
 * 注册任意的应用程序服务。
 */
public function register(): void
{
    Passport::ignoreRoutes();
}
</code></pre>`,22),f={href:"https://github.com/laravel/passport/blob/11.x/routes/web.php",target:"_blank",rel:"noopener noreferrer"},P=a("code",null,"routes/web.php",-1),_=t(`<pre><code>Route::group([
    &#39;as&#39; =&gt; &#39;passport.&#39;,
    &#39;prefix&#39; =&gt; config(&#39;passport.path&#39;, &#39;oauth&#39;),
    &#39;namespace&#39; =&gt; &#39;Laravel\\Passport\\Http\\Controllers&#39;,
], function () {
    // Passport 路由……
});
</code></pre><p><a name="issuing-access-tokens"></a></p><h2 id="发布访问令牌" tabindex="-1"><a class="header-anchor" href="#发布访问令牌" aria-hidden="true">#</a> 发布访问令牌</h2><p>通过授权码使用 OAuth2 是大多数开发人员熟悉的方式。使用授权码方式时，客户端应用程序会将用户重定向到你的服务器，在那里他们会批准或拒绝向客户端发出访问令牌的请求。</p><p><a name="managing-clients"></a></p><h3 id="客户端管理" tabindex="-1"><a class="header-anchor" href="#客户端管理" aria-hidden="true">#</a> 客户端管理</h3><p>首先，开发者如果想要搭建一个与你的服务端接口交互的应用端，需要在服务端这边注册一个「客户端」。通常，这需要开发者提供应用程序的名称和一个 URL，在应用软件的使用者授权请求后，应用程序会被重定向到该 URL。</p><p><a name="the-passportclient-command"></a></p><h4 id="passport-client-命令" tabindex="-1"><a class="header-anchor" href="#passport-client-命令" aria-hidden="true">#</a> <code>passport:client</code> 命令</h4><p>使用 Artisan 命令 <code>passport:client</code> 是一种最简单的创建客户端的方式。 这个命令可以创建你自己私有的客户端，用于 Oauth2 功能测试。 当你执行 <code>client</code> 命令后， Passport 将会给你更多关于客户端的提示，以及生成的客户端 ID</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan passport:client
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>多重定向 URL 地址的设置</strong></p><p>如果你想为你的客户端提供多个重定向 URL ，你可以在执行 <code>Passport:client</code> 命令出现提示输入 URL 地址的时候，输入用逗号分割的多个 URL 。任何包含逗号的 URL 都需要先执行 URL 转码：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>http://example.com/callback,http://examplefoo.com/callback
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="clients-json-api"></a></p><h4 id="json-api" tabindex="-1"><a class="header-anchor" href="#json-api" aria-hidden="true">#</a> JSON API</h4><p>因为应用程序的开发者是无法使用 <code>client</code> 命令的，所以 Passport 提供了 JSON 格式的 API ，用于创建客户端。 这解决了你还要去手动创建控制器代码（代码用于添加，更新，删除客户端）的麻烦。</p>`,17),A={href:"https://github.com/axios/axios",target:"_blank",rel:"noopener noreferrer"},x=t(`<p>这些 JSON API 接口被 <code>web</code> 和 <code>auth</code> 两个中间件保护着，因此，你只能从你的应用中调用。 外部来源的调用是被禁止的。</p><p><a name="get-oauthclients"></a></p><h4 id="get-oauth-clients" tabindex="-1"><a class="header-anchor" href="#get-oauth-clients" aria-hidden="true">#</a> <code>GET /oauth/clients</code></h4><p>下面的路由将为授权用户返回所有的客户端。最主要的作用是列出所有的用户客户端，接下来就可以编辑或删除它们了：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/oauth/clients&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="post-oauthclients"></a></p><h4 id="post-oauth-clients" tabindex="-1"><a class="header-anchor" href="#post-oauth-clients" aria-hidden="true">#</a> <code>POST /oauth/clients</code></h4><p>下面的路由用于创建新的客户端。 它需要两个参数： <code>客户端名称</code>和<code>重定向URL</code> 地址。 <code>重定向URL</code> 地址是使用者在授权或者拒绝授权后被重定向到的地方。</p><p>客户端被创建后，将会生成客户端 ID 和客户端秘钥。 这对值用于从你的应用获取访问令牌。 调用下面的客户端创建路由将创建新的客户端实例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Client Name&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">redirect</span><span class="token operator">:</span> <span class="token string">&#39;http://example.com/callback&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

axios<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&#39;/oauth/clients&#39;</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">catch</span> <span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token comment">// 列出响应的错误...</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="put-oauthclientsclient-id"></a></p><h4 id="put-oauth-clients-client-id" tabindex="-1"><a class="header-anchor" href="#put-oauth-clients-client-id" aria-hidden="true">#</a> <code>PUT /oauth/clients/{client-id}</code></h4><p>下面的路由用来更新客户端。它需要两个参数： 客户端名称和重定向 URL 地址。 重定向 URL 地址是用户在授权或者拒绝授权后被重定向到的地方。路由将返回更新后的客户端实例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;New Client Name&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">redirect</span><span class="token operator">:</span> <span class="token string">&#39;http://example.com/callback&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

axios<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&#39;/oauth/clients/&#39;</span> <span class="token operator">+</span> clientId<span class="token punctuation">,</span> data<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">catch</span> <span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token comment">// 列出响应的错误...</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="delete-oauthclientsclient-id"></a></p><h4 id="delete-oauth-clients-client-id" tabindex="-1"><a class="header-anchor" href="#delete-oauth-clients-client-id" aria-hidden="true">#</a> <code>DELETE /oauth/clients/{client-id}</code></h4><p>下面的路由用于删除客户端：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>axios<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token string">&#39;/oauth/clients/&#39;</span> <span class="token operator">+</span> clientId<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token comment">// ...</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="requesting-tokens"></a></p><h3 id="请求令牌" tabindex="-1"><a class="header-anchor" href="#请求令牌" aria-hidden="true">#</a> 请求令牌</h3><p><a name="requesting-tokens-redirecting-for-authorization"></a></p><h4 id="授权重定向" tabindex="-1"><a class="header-anchor" href="#授权重定向" aria-hidden="true">#</a> 授权重定向</h4><p>客户端创建好后，开发者使用 client ID 和秘钥向你的应用服务器发送请求，以便获取授权码和访问令牌。 首先，接收到请求的业务端服务器会重定向到你应用的 <code>/oauth/authorize</code> 路由上，如下所示：</p><pre><code>use Illuminate\\Http\\Request;
use Illuminate\\Support\\Str;

Route::get(&#39;/redirect&#39;, function (Request $request) {
    $request-&gt;session()-&gt;put(&#39;state&#39;, $state = Str::random(40));

    $query = http_build_query([
        &#39;client_id&#39; =&gt; &#39;client-id&#39;,
        &#39;redirect_uri&#39; =&gt; &#39;http://third-party-app.com/callback&#39;,
        &#39;response_type&#39; =&gt; &#39;code&#39;,
        &#39;scope&#39; =&gt; &#39;&#39;,
        &#39;state&#39; =&gt; $state,
        // &#39;prompt&#39; =&gt; &#39;&#39;, // &quot;none&quot;, &quot;consent&quot;, or &quot;login&quot;
    ]);

    return redirect(&#39;http://passport-app.test/oauth/authorize?&#39;.$query);
});
</code></pre><p><code>prompt</code> 参数可用于指定 Passport 应用程序的认证行为。</p><p>如果 <code>prompt</code> 值为 <code>none</code>，如果用户还没有通过 Passport 应用程序的认证，Passport 将总是抛出一个认证错误。如果值是 <code>同意</code>，Passport 将总是显示授权批准屏幕，即使所有的作用域以前都被授予消费应用程序。如果值是 <code>login</code>，Passport 应用程序将总是提示用户重新登录到应用程序，即使他们已经有一个现有的会话。</p><p>如果没有提供 <code>prompt</code> 值，只有当用户以前没有授权访问所请求范围的消费应用程序时，才会提示用户进行授权。</p><blockquote><p>**技巧：**请记住，<code>/oauth/authorize</code> 路由默认已经在 <code>Passport::route</code> 方法中定义，你无需手动定义它。</p></blockquote><p><a name="approving-the-request"></a></p><h4 id="请求认证" tabindex="-1"><a class="header-anchor" href="#请求认证" aria-hidden="true">#</a> 请求认证</h4><p>当接收到一个请求后， Passport 会自动展示一个模板页面给用户，用户可以选择授权或者拒绝授权。如果请求被认证，用户将被重定向到之前业务服务器设置的 <code>redirect_uri</code> 上去。 这个 <code>redirect_uri</code> 就是客户端在创建时提供的重定向地址参数。</p><p>如果你想自定义授权页面，你可以先使用 Artisan 命令 <code>vendor:publish</code> 发布 Passport 的视图页面。 被发布的视图页面位于 <code>resources/views/vendor/passport</code> 路径下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan vendor:publish <span class="token parameter variable">--tag</span><span class="token operator">=</span>passport-views
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>有时，你可能希望跳过授权提示，比如在授权第一梯队客户端的时候。你可以通过 <a href="#overriding-default-models">继承 <code>Client</code> 模型</a>并实现 <code>skipsAuthorization</code> 方法。如果 <code>skipsAuthorization</code> 方法返回 <code>true</code>， 客户端就会直接被认证并立即重定向到设置的重定向地址：</p><pre><code>&lt;?php

namespace App\\Models\\Passport;

use Laravel\\Passport\\Client as BaseClient;

class Client extends BaseClient
{
    /**
     * 确定客户端是否应跳过授权提示。
     */
    public function skipsAuthorization(): bool
    {
        return $this-&gt;firstParty();
    }
}
</code></pre><p><a name="requesting-tokens-converting-authorization-codes-to-access-tokens"></a></p><h4 id="授权码到授权令牌的转化" tabindex="-1"><a class="header-anchor" href="#授权码到授权令牌的转化" aria-hidden="true">#</a> 授权码到授权令牌的转化</h4><p>如果用户授权了访问，他们会被重定向到业务服务端。首先，业务端服务需要检查 <code>state</code> 参数是否和重定向之前存储的值一致。 如果 state 参数的值正确，业务端服务器需要对你的应用发起获取 access token 的 <code>POST</code> 请求。 请求需要携带有授权码，授权码就是之前用户授权后由你的应用服务器生成的码：</p><pre><code>use Illuminate\\Http\\Request;
use Illuminate\\Support\\Facades\\Http;

Route::get(&#39;/callback&#39;, function (Request $request) {
    $state = $request-&gt;session()-&gt;pull(&#39;state&#39;);

    throw_unless(
        strlen($state) &gt; 0 &amp;&amp; $state === $request-&gt;state,
        InvalidArgumentException::class
    );

    $response = Http::asForm()-&gt;post(&#39;http://passport-app.test/oauth/token&#39;, [
        &#39;grant_type&#39; =&gt; &#39;authorization_code&#39;,
        &#39;client_id&#39; =&gt; &#39;client-id&#39;,
        &#39;client_secret&#39; =&gt; &#39;client-secret&#39;,
        &#39;redirect_uri&#39; =&gt; &#39;http://third-party-app.com/callback&#39;,
        &#39;code&#39; =&gt; $request-&gt;code,
    ]);

    return $response-&gt;json();
});
</code></pre><p>调用路由 <code>/oauth/token</code> 将返回一串 json 字符串，包含了 <code>access_token</code>, <code>refresh_token</code> 和 <code>expires_in</code> 属性。<code>expires_in</code> 属性的值是 access_token 剩余的有效时间。</p><blockquote><p>**技巧：**就和 <code>/oauth/authorize</code> 路由一样， <code>/oauth/token</code> 路由已经在 <code>Passport::routes</code> 方法中定义，你无需再自定义这个路由。</p></blockquote><p><a name="tokens-json-api"></a></p><h4 id="json-api-1" tabindex="-1"><a class="header-anchor" href="#json-api-1" aria-hidden="true">#</a> JSON API</h4>`,43),q={href:"https://github.com/mzabriskie/axios",target:"_blank",rel:"noopener noreferrer"},I=a("code",null,"web",-1),S=a("code",null,"auth",-1),$=t(`<p><a name="get-oauthtokens"></a></p><h4 id="get-oauth-tokens" tabindex="-1"><a class="header-anchor" href="#get-oauth-tokens" aria-hidden="true">#</a> <code>GET /oauth/tokens</code></h4><p>下面的路由包含了授权用户创建的所有授权访问令牌。接口的主要作用是列出用户所有可撤销的令牌：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/oauth/tokens&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="delete-oauthtokenstoken-id"></a></p><h4 id="delete-oauth-tokens-token-id" tabindex="-1"><a class="header-anchor" href="#delete-oauth-tokens-token-id" aria-hidden="true">#</a> <code>DELETE /oauth/tokens/{token-id}</code></h4><p>下面的路由用于撤销授权访问令牌以及相关的刷新令牌：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>axios<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token string">&#39;/oauth/tokens/&#39;</span> <span class="token operator">+</span> tokenId<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="refreshing-tokens"></a></p><h3 id="刷新令牌" tabindex="-1"><a class="header-anchor" href="#刷新令牌" aria-hidden="true">#</a> 刷新令牌</h3><p>如果你的应用发布的是短生命周期访问令牌，用户需要使用刷新令牌来延长访问令牌的生命周期，刷新令牌是在生成访问令牌时同时生成的：</p><pre><code>use Illuminate\\Support\\Facades\\Http;

$response = Http::asForm()-&gt;post(&#39;http://passport-app.test/oauth/token&#39;, [
    &#39;grant_type&#39; =&gt; &#39;refresh_token&#39;,
    &#39;refresh_token&#39; =&gt; &#39;the-refresh-token&#39;,
    &#39;client_id&#39; =&gt; &#39;client-id&#39;,
    &#39;client_secret&#39; =&gt; &#39;client-secret&#39;,
    &#39;scope&#39; =&gt; &#39;&#39;,
]);

return $response-&gt;json();
</code></pre><p>调用路由 <code>/oauth/token</code> 将返回一串 json 字符串，包含了 <code>access_token</code>, <code>refresh_token</code> 和 <code>expires_in</code> 属性。<code>expires_in</code> 属性的值是 access_token 剩余的有效时间。</p><p><a name="revoking-tokens"></a></p><h3 id="撤销令牌" tabindex="-1"><a class="header-anchor" href="#撤销令牌" aria-hidden="true">#</a> 撤销令牌</h3><p>你可以使用 <code>Laravel\\Passport\\TokenRepository</code> 类的 <code>revokeAccessToken</code> 方法撤销令牌。你可以使用 <code>Laravel\\Passport\\RefreshTokenRepository</code> 类的 <code>revokeRefreshTokensByAccessTokenId</code> 方法撤销刷新令牌。这两个类可以通过 Laravel 的<a href="./container">服务容器</a>得到：</p><pre><code>use Laravel\\Passport\\TokenRepository;
use Laravel\\Passport\\RefreshTokenRepository;

$tokenRepository = app(TokenRepository::class);
$refreshTokenRepository = app(RefreshTokenRepository::class);

// 撤销一个访问令牌...
$tokenRepository-&gt;revokeAccessToken($tokenId);

// 撤销该令牌的所有刷新令牌...
$refreshTokenRepository-&gt;revokeRefreshTokensByAccessTokenId($tokenId);
</code></pre><p><a name="purging-tokens"></a></p><h3 id="清除令牌" tabindex="-1"><a class="header-anchor" href="#清除令牌" aria-hidden="true">#</a> 清除令牌</h3><p>如果令牌已经被撤销或者已经过期了，你可能希望把它们从数据库中清理掉。Passport 提供了 Artisan 命令 <code>passport:purge</code> 帮助你实现这个操作:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 清除已经撤销或者过期的令牌以及授权码...</span>
php artisan passport:purge

<span class="token comment"># 只清理过期6小时的令牌以及授权码...</span>
php artisan passport:purge <span class="token parameter variable">--hours</span><span class="token operator">=</span><span class="token number">6</span>

<span class="token comment"># 只清理撤销的令牌以及授权码...</span>
php artisan passport:purge <span class="token parameter variable">--revoked</span>

<span class="token comment"># 只清理过期的令牌以及授权码...</span>
php artisan passport:purge <span class="token parameter variable">--expired</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你可以在应用的 <code>App\\Console\\Kernel</code> 类中配置一个<a href="./scheduling">定时任务</a>，每天自动的清理令牌：</p><pre><code>/**
 * Define the application&#39;s command schedule.
 */
protected function schedule(Schedule $schedule): void
{
    $schedule-&gt;command(&#39;passport:purge&#39;)-&gt;hourly();
}
</code></pre><p><a name="code-grant-pkce"></a></p><h2 id="通过-pkce-发布授权码" tabindex="-1"><a class="header-anchor" href="#通过-pkce-发布授权码" aria-hidden="true">#</a> 通过 PKCE 发布授权码</h2><p>通过 PKCE 「 Proof Key for Code Exchange, 中文译为 代码交换的证明密钥」 发放授权码是对单页面应用或原生应用进行认证以便访问 API 接口的安全方式。这种发放授权码是用于不能保证客户端密码被安全储存，或为降低攻击者拦截授权码的威胁。在这种模式下，当授权码获取令牌时，用 「验证码」( code verifier ) 和 「质疑码」（ code challenge, challenge, 名词可译为：挑战；异议；质疑等）的组合来交换客户端访问密钥。</p><p><a name="creating-a-auth-pkce-grant-client"></a></p><h3 id="创建客户端" tabindex="-1"><a class="header-anchor" href="#创建客户端" aria-hidden="true">#</a> 创建客户端</h3><p>在使用 PKCE 方式发布令牌之前，你需要先创建一个启用了 PKCE 的客户端。你可以使用 Artisan 命令 <code>passport:client</code> 并带上 <code>--public</code> 参数来完成该操作：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan passport:client <span class="token parameter variable">--public</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="requesting-auth-pkce-grant-tokens"></a></p><h3 id="请求令牌-1" tabindex="-1"><a class="header-anchor" href="#请求令牌-1" aria-hidden="true">#</a> 请求令牌</h3><p><a name="code-verifier-code-challenge"></a></p><h4 id="验证码-code-verifier-和质疑码-code-challenge" tabindex="-1"><a class="header-anchor" href="#验证码-code-verifier-和质疑码-code-challenge" aria-hidden="true">#</a> 验证码（Code Verifier ）和质疑码（Code Challenge）</h4><p>这种授权方式不提供授权秘钥，开发者需要创建一个验证码和质疑码的组合来请求得到一个令牌。</p>`,35),T=a("code",null,'"-"',-1),y=a("code",null,'"."',-1),R=a("code",null,'"_"',-1),C=a("code",null,'"~"',-1),w={href:"https://tools.ietf.org/html/rfc7636",target:"_blank",rel:"noopener noreferrer"},L=t(`<p>质疑码是一串 Base64 编码包含 URL 和文件名安全字符的字符串，字符串结尾的 <code>&#39;=&#39;</code> 号需要删除，并且不能包含换行符，空白符或其他附加字符。</p><pre><code>$encoded = base64_encode(hash(&#39;sha256&#39;, $code_verifier, true));

$codeChallenge = strtr(rtrim($encoded, &#39;=&#39;), &#39;+/&#39;, &#39;-_&#39;);
</code></pre><p><a name="code-grant-pkce-redirecting-for-authorization"></a></p><h4 id="授权重定向-1" tabindex="-1"><a class="header-anchor" href="#授权重定向-1" aria-hidden="true">#</a> 授权重定向</h4><p>客户端创建完后，你可以使用客户端 ID 以及生成的验证码，质疑码从你的应用请求获取授权码和访问令牌。首先，业务端应用需要向服务端路由 <code>/oauth/authorize</code> 发起重定向请求：</p><pre><code>use Illuminate\\Http\\Request;
use Illuminate\\Support\\Str;

Route::get(&#39;/redirect&#39;, function (Request $request) {
    $request-&gt;session()-&gt;put(&#39;state&#39;, $state = Str::random(40));

    $request-&gt;session()-&gt;put(
        &#39;code_verifier&#39;, $code_verifier = Str::random(128)
    );

    $codeChallenge = strtr(rtrim(
        base64_encode(hash(&#39;sha256&#39;, $code_verifier, true))
    , &#39;=&#39;), &#39;+/&#39;, &#39;-_&#39;);

    $query = http_build_query([
        &#39;client_id&#39; =&gt; &#39;client-id&#39;,
        &#39;redirect_uri&#39; =&gt; &#39;http://third-party-app.com/callback&#39;,
        &#39;response_type&#39; =&gt; &#39;code&#39;,
        &#39;scope&#39; =&gt; &#39;&#39;,
        &#39;state&#39; =&gt; $state,
        &#39;code_challenge&#39; =&gt; $codeChallenge,
        &#39;code_challenge_method&#39; =&gt; &#39;S256&#39;,
        // &#39;prompt&#39; =&gt; &#39;&#39;, // &quot;none&quot;, &quot;consent&quot;, or &quot;login&quot;
    ]);

    return redirect(&#39;http://passport-app.test/oauth/authorize?&#39;.$query);
});
</code></pre><p><a name="code-grant-pkce-converting-authorization-codes-to-access-tokens"></a></p><h4 id="验证码到访问令牌的转换" tabindex="-1"><a class="header-anchor" href="#验证码到访问令牌的转换" aria-hidden="true">#</a> 验证码到访问令牌的转换</h4><p>用户授权访问后，将重定向到业务端服务。正如标准授权定义那样，业务端需要验证回传的 <code>state</code> 参数的值和在重定向之前设置的值是否一致。</p><p>如果 state 的值验证通过，业务接入端需要向应用端发起一个获取访问令牌的 <code>POST</code> 请求。请求的参数需要包括之前用户授权通过后你的应用生成的授权码，以及之前生成的验证码：</p><pre><code>use Illuminate\\Http\\Request;
use Illuminate\\Support\\Facades\\Http;

Route::get(&#39;/callback&#39;, function (Request $request) {
    $state = $request-&gt;session()-&gt;pull(&#39;state&#39;);

    $codeVerifier = $request-&gt;session()-&gt;pull(&#39;code_verifier&#39;);

    throw_unless(
        strlen($state) &gt; 0 &amp;&amp; $state === $request-&gt;state,
        InvalidArgumentException::class
    );

    $response = Http::asForm()-&gt;post(&#39;http://passport-app.test/oauth/token&#39;, [
        &#39;grant_type&#39; =&gt; &#39;authorization_code&#39;,
        &#39;client_id&#39; =&gt; &#39;client-id&#39;,
        &#39;redirect_uri&#39; =&gt; &#39;http://third-party-app.com/callback&#39;,
        &#39;code_verifier&#39; =&gt; $codeVerifier,
        &#39;code&#39; =&gt; $request-&gt;code,
    ]);

    return $response-&gt;json();
});
</code></pre><p><a name="password-grant-tokens"></a></p><h2 id="密码授权方式的令牌" tabindex="-1"><a class="header-anchor" href="#密码授权方式的令牌" aria-hidden="true">#</a> 密码授权方式的令牌</h2>`,13),E=a("strong",null,"注意",-1),j=a("br",null,null,-1),H={href:"https://oauth2.thephpleague.com/authorization-server/which-grant/",target:"_blank",rel:"noopener noreferrer"},O=t(`<p>OAuth2 的密码授权方式允许你自己的客户端（比如手机端应用），通过使用邮箱 / 用户名和密码获取访问秘钥。这样你就可以安全的为自己发放令牌，而不需要完整地走 OAuth2 的重定向授权访问流程。</p><p><a name="creating-a-password-grant-client"></a></p><h3 id="创建密码授权方式客户端" tabindex="-1"><a class="header-anchor" href="#创建密码授权方式客户端" aria-hidden="true">#</a> 创建密码授权方式客户端</h3><p>在你使用密码授权方式发布令牌前，你需要先创建密码授权方式的客户端。你可以通过 Artisan 命令 <code>passport:client</code> ， 并加上 <code>--password</code> 参数来创建这样的客户端。 <strong>如果你已经运行过 <code>passport:install</code> 命令，则不需要再运行下面的命令:</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan passport:client <span class="token parameter variable">--password</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="requesting-password-grant-tokens"></a></p><h3 id="请求令牌-2" tabindex="-1"><a class="header-anchor" href="#请求令牌-2" aria-hidden="true">#</a> 请求令牌</h3><p>密码授权方式的客户端创建好后，你就可以使用用户邮箱和密码向 <code>/oauth/token</code> 路由发起 <code>POST</code> 请求，以获取访问令牌。请记住，该路由已经在 <code>Passport::routes</code> 方法中定义，你无需再手动实现它。如果请求成功，你将在返回 JSON 串中获取到 <code>access_token</code> 和 <code>refresh_token</code> :</p><pre><code>use Illuminate\\Support\\Facades\\Http;

$response = Http::asForm()-&gt;post(&#39;http://passport-app.test/oauth/token&#39;, [
    &#39;grant_type&#39; =&gt; &#39;password&#39;,
    &#39;client_id&#39; =&gt; &#39;client-id&#39;,
    &#39;client_secret&#39; =&gt; &#39;client-secret&#39;,
    &#39;username&#39; =&gt; &#39;taylor@laravel.com&#39;,
    &#39;password&#39; =&gt; &#39;my-password&#39;,
    &#39;scope&#39; =&gt; &#39;&#39;,
]);

return $response-&gt;json();
</code></pre><blockquote><p><strong>技巧</strong><br> 请记住，默认情况下 access token 都是长生命周期的，但是如果有需要的话，你可以主动去 <a href="#configuration">设置 access token 的过期时间</a> 。</p></blockquote><p><a name="requesting-all-scopes"></a></p><h3 id="请求所有的作用域" tabindex="-1"><a class="header-anchor" href="#请求所有的作用域" aria-hidden="true">#</a> 请求所有的作用域</h3><p>当使用密码授权（password grant）或者客户端认证授权（client credentials grant）方式时，你可能希望将应用所有的作用域范围都授权给令牌。你可以通过设置 scope 参数为 <code>*</code> 来实现。 一旦你这样设置了，所有的 <code>can</code> 方法都将返回 <code>true</code> 值。 此范围只能在密码授权 <code>password</code> 或客户端认证授权 <code>client_credentials</code> 下使用：</p><pre><code>use Illuminate\\Support\\Facades\\Http;

$response = Http::asForm()-&gt;post(&#39;http://passport-app.test/oauth/token&#39;, [
    &#39;grant_type&#39; =&gt; &#39;password&#39;,
    &#39;client_id&#39; =&gt; &#39;client-id&#39;,
    &#39;client_secret&#39; =&gt; &#39;client-secret&#39;,
    &#39;username&#39; =&gt; &#39;taylor@laravel.com&#39;,
    &#39;password&#39; =&gt; &#39;my-password&#39;,
    &#39;scope&#39; =&gt; &#39;*&#39;,
]);
</code></pre><p><a name="customizing-the-user-provider"></a></p><h3 id="自定义用户提供者" tabindex="-1"><a class="header-anchor" href="#自定义用户提供者" aria-hidden="true">#</a> 自定义用户提供者</h3><p>如果你的应用程序使用多个 <a href="./authentication#introduction">用户认证提供器</a>，你可以在创建客户端通过 <code>artisan passport:client --password</code> 命令时使用 <code>--provider</code> 选项来指定提供器。 给定的提供器名称应与应用程序的 <code>config/auth.php</code> 配置文件中定义的有效提供器匹配。 然后，你可以 <a href="#via-middleware">使用中间件保护你的路由</a> 以确保只有来自守卫指定提供器的用户才被授权。</p><p><a name="customizing-the-username-field"></a></p><h3 id="自定义用户名字段" tabindex="-1"><a class="header-anchor" href="#自定义用户名字段" aria-hidden="true">#</a> 自定义用户名字段</h3><p>当使用密码授权进行身份验证时，Passport 将使用可验证模型的 <code>email</code> 属性作为 「用户名」 。 但是，你可以通过在模型上定义 <code>findForPassport</code> 方法来自定义此行为：</p><pre><code>&lt;?php

namespace App\\Models;

use Illuminate\\Foundation\\Auth\\User as Authenticatable;
use Illuminate\\Notifications\\Notifiable;
use Laravel\\Passport\\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, Notifiable;

    /**
     * 查找给定用户名的用户实例。
     */
    public function findForPassport(string $username): User
    {
        return $this-&gt;where(&#39;username&#39;, $username)-&gt;first();
    }
}
</code></pre><p><a name="customizing-the-password-validation"></a></p><h3 id="自定义密码验证" tabindex="-1"><a class="header-anchor" href="#自定义密码验证" aria-hidden="true">#</a> 自定义密码验证</h3><p>当使用密码授权进行身份验证时，Passport 将使用模型的 <code>password</code> 属性来验证给定的密码。 如果你的模型没有 <code>password</code> 属性或者你希望自定义密码验证逻辑，你可以在模型上定义 <code>validateForPassportPasswordGrant</code> 方法：</p><pre><code>&lt;?php

namespace App\\Models;

use Illuminate\\Foundation\\Auth\\User as Authenticatable;
use Illuminate\\Notifications\\Notifiable;
use Illuminate\\Support\\Facades\\Hash;
use Laravel\\Passport\\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, Notifiable;

    /**
     * 验证用户的密码以获得 Passport 密码授权。
     */
    public function validateForPassportPasswordGrant(string $password): bool
    {
        return Hash::check($password, $this-&gt;password);
    }
}
</code></pre><p><a name="implicit-grant-tokens"></a></p><h2 id="隐式授权令牌" tabindex="-1"><a class="header-anchor" href="#隐式授权令牌" aria-hidden="true">#</a> 隐式授权令牌</h2>`,27),N=a("strong",null,"注意",-1),z=a("br",null,null,-1),F={href:"https://oauth2.thephpleague.com/authorization-server/which-grant/",target:"_blank",rel:"noopener noreferrer"},U=t(`<p>隐式授权类似于授权码授权； 但是，令牌会在不交换授权码的情况下返回给客户端。 此授权最常用于无法安全存储客户端凭据的 JavaScript 或移动应用程序。 要启用授权，请在应用程序的 <code>App\\Providers\\AuthServiceProvider</code> 类的 <code>boot</code> 方法中调用 <code>enableImplicitGrant</code> 方法：</p><pre><code>/**
 * 注册任何身份验证/授权服务。
 */
public function boot(): void
{
    Passport::enableImplicitGrant();
}
</code></pre><p>启用授权后，开发人员可以使用他们的客户端 ID 从你的应用程序请求访问令牌。 消费应用程序应该向应用程序的 <code>/oauth/authorize</code> 路由发出重定向请求，如下所示：</p><pre><code>use Illuminate\\Http\\Request;

Route::get(&#39;/redirect&#39;, function (Request $request) {
    $request-&gt;session()-&gt;put(&#39;state&#39;, $state = Str::random(40));

    $query = http_build_query([
        &#39;client_id&#39; =&gt; &#39;client-id&#39;,
        &#39;redirect_uri&#39; =&gt; &#39;http://third-party-app.com/callback&#39;,
        &#39;response_type&#39; =&gt; &#39;token&#39;,
        &#39;scope&#39; =&gt; &#39;&#39;,
        &#39;state&#39; =&gt; $state,
        // &#39;prompt&#39; =&gt; &#39;&#39;, // &quot;none&quot;, &quot;consent&quot;, or &quot;login&quot;
    ]);

    return redirect(&#39;http://passport-app.test/oauth/authorize?&#39;.$query);
});
</code></pre><blockquote><p><strong>技巧</strong><br> 请记住， <code>/oauth/authorize</code> 路由已经由 <code>Passport::routes</code> 方法定义。 你无需手动定义此路由。</p></blockquote><p><a name="client-credentials-grant-tokens"></a></p><h2 id="客户凭证授予令牌" tabindex="-1"><a class="header-anchor" href="#客户凭证授予令牌" aria-hidden="true">#</a> 客户凭证授予令牌</h2><p>客户端凭据授予适用于机器对机器身份验证。 例如，你可以在通过 API 执行维护任务的计划作业中使用此授权。</p><p>要想让应用程序可以通过客户端凭据授权发布令牌，首先，你需要创建一个客户端凭据授权客户端。你可以使用 <code>passport:client</code> Artisan 命令的 <code>--client</code> 选项来执行此操作：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan passport:client <span class="token parameter variable">--client</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>接下来，要使用这种授权，你首先需要在 <code>app/Http/Kernel.php</code> 的 <code>$routeMiddleware</code> 属性中添加 <code>CheckClientCredentials</code> 中间件：</p><pre><code>use Laravel\\Passport\\Http\\Middleware\\CheckClientCredentials;

protected $middlewareAliases = [
    &#39;client&#39; =&gt; CheckClientCredentials::class,
];
</code></pre><p>之后，在路由上附加中间件：</p><pre><code>Route::get(&#39;/orders&#39;, function (Request $request) {
    ...
})-&gt;middleware(&#39;client&#39;);
</code></pre><p>要将对路由的访问限制为特定范围，你可以在将 <code>client</code> 中间件附加到路由时提供所需范围的逗号分隔列表：</p><pre><code>Route::get(&#39;/orders&#39;, function (Request $request) {
    ...
})-&gt;middleware(&#39;client:check-status,your-scope&#39;);
</code></pre><p><a name="retrieving-tokens"></a></p><h3 id="检索令牌" tabindex="-1"><a class="header-anchor" href="#检索令牌" aria-hidden="true">#</a> 检索令牌</h3><p>要使用此授权类型检索令牌，请向 <code>oauth/token</code> 端点发出请求：</p><pre><code>use Illuminate\\Support\\Facades\\Http;

$response = Http::asForm()-&gt;post(&#39;http://passport-app.test/oauth/token&#39;, [
    &#39;grant_type&#39; =&gt; &#39;client_credentials&#39;,
    &#39;client_id&#39; =&gt; &#39;client-id&#39;,
    &#39;client_secret&#39; =&gt; &#39;client-secret&#39;,
    &#39;scope&#39; =&gt; &#39;your-scope&#39;,
]);

return $response-&gt;json()[&#39;access_token&#39;];
</code></pre><p><a name="personal-access-tokens"></a></p><h2 id="个人访问令牌" tabindex="-1"><a class="header-anchor" href="#个人访问令牌" aria-hidden="true">#</a> 个人访问令牌</h2><p>有时，你的用户要在不经过传统的授权码重定向流程的情况下向自己颁发访问令牌。允许用户通过应用程序用户界面对自己发布令牌，有助于用户体验你的 API，或者也可以将其作为一种更简单的发布访问令牌的方式。</p><blockquote><p><strong>技巧</strong><br> 如果你的应用程序主要使用 Passport 来发布个人访问令牌，请考虑使用 Laravel 的轻量级第一方库 <a href="./sanctum">Laravel Sanctum</a> 来发布 API 访问令牌。</p></blockquote><p><a name="creating-a-personal-access-client"></a></p><h3 id="创建个人访问客户端" tabindex="-1"><a class="header-anchor" href="#创建个人访问客户端" aria-hidden="true">#</a> 创建个人访问客户端</h3><p>在应用程序发出个人访问令牌前，你需要在 <code>passport:client</code> 命令后带上 <code>--personal</code> 参数来创建对应的客户端。如果你已经运行了 <code>passport:install</code> 命令，则无需再运行此命令:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan passport:client <span class="token parameter variable">--personal</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>创建个人访问客户端后，将客户端的 ID 和纯文本密钥放在应用程序的 <code>.env</code> 文件中:</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token key attr-name">PASSPORT_PERSONAL_ACCESS_CLIENT_ID</span><span class="token punctuation">=</span><span class="token value attr-value">&quot;<span class="token inner-value">client-id-value</span>&quot;</span>
<span class="token key attr-name">PASSPORT_PERSONAL_ACCESS_CLIENT_SECRET</span><span class="token punctuation">=</span><span class="token value attr-value">&quot;<span class="token inner-value">unhashed-client-secret-value</span>&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="managing-personal-access-tokens"></a></p><h3 id="管理个人令牌" tabindex="-1"><a class="header-anchor" href="#管理个人令牌" aria-hidden="true">#</a> 管理个人令牌</h3><p>创建个人访问客户端后，你可以使用 <code>App\\Models\\User</code> 模型实例的 <code>createToken</code> 方法来为给定用户发布令牌。 <code>createToken</code> 方法接受令牌的名称作为其第一个参数和可选的 <a href="#token-scopes">作用域</a> 数组作为其第二个参数:</p><pre><code>use App\\Models\\User;

$user = User::find(1);

// 创建没有作用域的令牌...
$token = $user-&gt;createToken(&#39;Token Name&#39;)-&gt;accessToken;

// 创建具有作用域的令牌...
$token = $user-&gt;createToken(&#39;My Token&#39;, [&#39;place-orders&#39;])-&gt;accessToken;
</code></pre><p><a name="personal-access-tokens-json-api"></a></p><h4 id="json-api-2" tabindex="-1"><a class="header-anchor" href="#json-api-2" aria-hidden="true">#</a> JSON API</h4>`,36),M={href:"https://github.com/mzabriskie/axios",target:"_blank",rel:"noopener noreferrer"},D=t(`<p>JSON API 由 <code>web</code> 和 <code>auth</code> 这两个中间件保护；因此，只能从你自己的应用程序中调用它。无法从外部源调用它。</p><p><a name="get-oauthscopes"></a></p><h4 id="get-oauth-scopes" tabindex="-1"><a class="header-anchor" href="#get-oauth-scopes" aria-hidden="true">#</a> <code>GET /oauth/scopes</code></h4><p>此路由会返回应用中定义的所有 <a href="#token-scopes">作用域</a> 。你可以使用此路由列出用户可以分配给个人访问令牌的范围:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/oauth/scopes&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="get-oauthpersonal-access-tokens"></a></p><h4 id="get-oauth-personal-access-tokens" tabindex="-1"><a class="header-anchor" href="#get-oauth-personal-access-tokens" aria-hidden="true">#</a> <code>GET /oauth/personal-access-tokens</code></h4><p>此路由返回认证用户创建的所有个人访问令牌。这主要用于列出用户的所有令牌，以便他们可以编辑和撤销它们:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/oauth/personal-access-tokens&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="post-oauthpersonal-access-tokens"></a></p><h4 id="post-oauth-personal-access-tokens" tabindex="-1"><a class="header-anchor" href="#post-oauth-personal-access-tokens" aria-hidden="true">#</a> <code>POST /oauth/personal-access-tokens</code></h4><p>此路由创建新的个人访问令牌。它需要两个数据：令牌的 <code>name</code> 和 <code>scopes</code> 。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Token Name&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">scopes</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

axios<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&#39;/oauth/personal-access-tokens&#39;</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>data<span class="token punctuation">.</span>accessToken<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">catch</span> <span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token comment">// 列出响应的错误...</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="delete-oauthpersonal-access-tokenstoken-id"></a></p><h4 id="delete-oauth-personal-access-tokens-token-id" tabindex="-1"><a class="header-anchor" href="#delete-oauth-personal-access-tokens-token-id" aria-hidden="true">#</a> <code>DELETE /oauth/personal-access-tokens/{token-id}</code></h4><p>此路由可用于撤销个人访问令牌：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>axios<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token string">&#39;/oauth/personal-access-tokens/&#39;</span> <span class="token operator">+</span> tokenId<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="protecting-routes"></a></p><h2 id="路由保护" tabindex="-1"><a class="header-anchor" href="#路由保护" aria-hidden="true">#</a> 路由保护</h2><p><a name="via-middleware"></a></p><h3 id="通过中间件" tabindex="-1"><a class="header-anchor" href="#通过中间件" aria-hidden="true">#</a> 通过中间件</h3><p>Passport 包含一个 <a href="./authentication#adding-custom-guards">验证保护机制</a> 验证请求中传入的访问令牌。 若配置 <code>api</code> 的看守器使用 <code>passport</code> 驱动，你只要在需要有效访问令牌的路由上指定 <code>auth:api</code> 中间件即可：</p><pre><code>Route::get(&#39;/user&#39;, function () {
    // ...
})-&gt;middleware(&#39;auth:api&#39;);
</code></pre><blockquote><p><strong>注意</strong><br> 如果你正在使用 <a href="#client-credentials-grant-tokens">客户端授权令牌</a> ，你应该使用 <a href="#client-credentials-grant-tokens"><code>client</code> 中间件</a> 来保护你的路由，而不是使用 <code>auth:api</code> 中间件。</p></blockquote><p><a name="multiple-authentication-guards"></a></p><h4 id="多个身份验证看守器" tabindex="-1"><a class="header-anchor" href="#多个身份验证看守器" aria-hidden="true">#</a> 多个身份验证看守器</h4><p>如果你的应用程序可能使用完全不同的 <code>Eloquent</code> 模型、不同类型的用户进行身份验证，则可能需要为应用程序中的每种用户设置看守器。这使你可以保护特定看守器的请求。例如，在配置文件 <code>config/auth.php</code> 中设置以下看守器：</p><pre><code>&#39;api&#39; =&gt; [
    &#39;driver&#39; =&gt; &#39;passport&#39;,
    &#39;provider&#39; =&gt; &#39;users&#39;,
],

&#39;api-customers&#39; =&gt; [
    &#39;driver&#39; =&gt; &#39;passport&#39;,
    &#39;provider&#39; =&gt; &#39;customers&#39;,
],
</code></pre><p>以下路由将使用 <code>customers</code> 用户提供者的 <code>api-customers</code> 看守器来验证传入的请求：</p><pre><code>Route::get(&#39;/customer&#39;, function () {
    // ...
})-&gt;middleware(&#39;auth:api-customers&#39;);
</code></pre><blockquote><p><strong>技巧</strong><br> 关于使用 Passport 的多个用户提供器的更多信息，请参考 <a href="#customizing-the-user-provider">密码认证文档</a> 。</p></blockquote><p><a name="passing-the-access-token"></a></p><h3 id="传递访问令牌" tabindex="-1"><a class="header-anchor" href="#传递访问令牌" aria-hidden="true">#</a> 传递访问令牌</h3><p>当调用 Passport 保护下的路由时，接入的 API 应用需要将访问令牌作为 <code>Bearer</code> 令牌放在请求头 <code>Authorization</code> 中。例如，使用 Guzzle HTTP 库时：</p><pre><code>use Illuminate\\Support\\Facades\\Http;

$response = Http::withHeaders([
    &#39;Accept&#39; =&gt; &#39;application/json&#39;,
    &#39;Authorization&#39; =&gt; &#39;Bearer &#39;.$accessToken,
])-&gt;get(&#39;https://passport-app.test/api/user&#39;);

return $response-&gt;json();
</code></pre><p><a name="token-scopes"></a></p><h2 id="令牌作用域" tabindex="-1"><a class="header-anchor" href="#令牌作用域" aria-hidden="true">#</a> 令牌作用域</h2><p>作用域可以让 API 客户端在请求账户授权时请求特定的权限。例如，如果你正在构建电子商务应用程序，并不是所有接入的 API 应用都需要下订单的功能。你可以让接入的 API 应用只被允许授权访问订单发货状态。换句话说，作用域允许应用程序的用户限制第三方应用程序执行的操作。</p><p><a name="defining-scopes"></a></p><h3 id="定义作用域" tabindex="-1"><a class="header-anchor" href="#定义作用域" aria-hidden="true">#</a> 定义作用域</h3><p>你可以在 <code>App\\Providers\\AuthServiceProvider</code> 的 <code>boot</code> 方法中使用 <code>Passport::tokensCan</code> 方法来定义 API 的作用域。<code>tokensCan</code> 方法接受一个包含作用域名称和描述的数组作为参数。作用域描述将会在授权确认页中直接展示给用户，你可以将其定义为任何你需要的内容：</p><pre><code>/**
 * 注册身份验证/授权服务。
 */
public function boot(): void
{
    Passport::tokensCan([
        &#39;place-orders&#39; =&gt; &#39;Place orders&#39;,
        &#39;check-status&#39; =&gt; &#39;Check order status&#39;,
    ]);
}
</code></pre><p><a name="default-scope"></a></p><h3 id="默认作用域" tabindex="-1"><a class="header-anchor" href="#默认作用域" aria-hidden="true">#</a> 默认作用域</h3><p>如果客户端没有请求任何特定的范围，你可以在 <code>App\\Providers\\AuthServiceProvider</code> 类的 <code>boot</code> 方法中使用 <code>setDefaultScope</code> 方法来定义默认的作用域。</p><pre><code>use Laravel\\Passport\\Passport;

Passport::tokensCan([
    &#39;place-orders&#39; =&gt; &#39;Place orders&#39;,
    &#39;check-status&#39; =&gt; &#39;Check order status&#39;,
]);

Passport::setDefaultScope([
    &#39;check-status&#39;,
    &#39;place-orders&#39;,
]);
</code></pre><blockquote><p><strong>技巧</strong> Passport 的默认作用域不适用于由用户生成的个人访问令牌。</p></blockquote><p><a name="assigning-scopes-to-tokens"></a></p><h3 id="给令牌分配作用域" tabindex="-1"><a class="header-anchor" href="#给令牌分配作用域" aria-hidden="true">#</a> 给令牌分配作用域</h3><p><a name="when-requesting-authorization-codes"></a></p><h4 id="请求授权码" tabindex="-1"><a class="header-anchor" href="#请求授权码" aria-hidden="true">#</a> 请求授权码</h4><p>使用授权码请求访问令牌时，接入的应用需为 <code>scope</code> 参数指定所需作用域。 <code>scope</code> 参数包含多个作用域时，名称之间使用空格分割：</p><pre><code>Route::get(&#39;/redirect&#39;, function () {
    $query = http_build_query([
        &#39;client_id&#39; =&gt; &#39;client-id&#39;,
        &#39;redirect_uri&#39; =&gt; &#39;http://example.com/callback&#39;,
        &#39;response_type&#39; =&gt; &#39;code&#39;,
        &#39;scope&#39; =&gt; &#39;place-orders check-status&#39;,
    ]);

    return redirect(&#39;http://passport-app.test/oauth/authorize?&#39;.$query);
});
</code></pre><p><a name="when-issuing-personal-access-tokens"></a></p><h4 id="分发个人访问令牌" tabindex="-1"><a class="header-anchor" href="#分发个人访问令牌" aria-hidden="true">#</a> 分发个人访问令牌</h4><p>使用 <code>App\\Models\\User</code> 模型的 <code>createToken</code> 方法发放个人访问令牌时，可以将所需作用域的数组作为第二个参数传给此方法：</p><pre><code>$token = $user-&gt;createToken(&#39;My Token&#39;, [&#39;place-orders&#39;])-&gt;accessToken;
</code></pre><p><a name="checking-scopes"></a></p><h3 id="检查作用域" tabindex="-1"><a class="header-anchor" href="#检查作用域" aria-hidden="true">#</a> 检查作用域</h3><p>Passport 包含两个中间件，可用于验证传入的请求是否包含访问指定作用域的令牌。使用之前，需要将下面的中间件添加到 <code>app/Http/Kernel.php</code> 文件的 <code>$middlewareAliases</code> 属性中：</p><pre><code>&#39;scopes&#39; =&gt; \\Laravel\\Passport\\Http\\Middleware\\CheckScopes::class,
&#39;scope&#39; =&gt; \\Laravel\\Passport\\Http\\Middleware\\CheckForAnyScope::class,
</code></pre><p><a name="check-for-all-scopes"></a></p><h4 id="检查所有作用域" tabindex="-1"><a class="header-anchor" href="#检查所有作用域" aria-hidden="true">#</a> 检查所有作用域</h4><p>路由可以使用 <code>scopes</code> 中间件来检查当前请求是否拥有指定的所有作用域：</p><pre><code>Route::get(&#39;/orders&#39;, function () {
    // 访问令牌具有 &quot;check-status&quot; 和 &quot;place-orders&quot; 作用域...
})-&gt;middleware([&#39;auth:api&#39;, &#39;scopes:check-status,place-orders&#39;]);
</code></pre><p><a name="check-for-any-scopes"></a></p><h4 id="检查任意作用域" tabindex="-1"><a class="header-anchor" href="#检查任意作用域" aria-hidden="true">#</a> 检查任意作用域</h4><p>路由可以使用 <code>scope</code> 中间件来检查当前请求是否拥有指定的 <em>任意</em> 作用域：</p><pre><code>Route::get(&#39;/orders&#39;, function () {
    // 访问令牌具有 &quot;check-status&quot; 或 &quot;place-orders&quot; 作用域...
})-&gt;middleware([&#39;auth:api&#39;, &#39;scope:check-status,place-orders&#39;]);
</code></pre><p><a name="checking-scopes-on-a-token-instance"></a></p><h4 id="检查令牌实例上的作用域" tabindex="-1"><a class="header-anchor" href="#检查令牌实例上的作用域" aria-hidden="true">#</a> 检查令牌实例上的作用域</h4><p>即使含有访问令牌验证的请求已经通过应用程序的验证，你仍然可以使用当前授权 <code>App\\Models\\User</code> 实例上的 <code>tokenCan</code> 方法来验证令牌是否拥有指定的作用域：</p><pre><code>use Illuminate\\Http\\Request;

Route::get(&#39;/orders&#39;, function (Request $request) {
    if ($request-&gt;user()-&gt;tokenCan(&#39;place-orders&#39;)) {
        // ...
    }
});
</code></pre><p><a name="additional-scope-methods"></a></p><h4 id="附加作用域方法" tabindex="-1"><a class="header-anchor" href="#附加作用域方法" aria-hidden="true">#</a> 附加作用域方法</h4><p><code>scopeIds</code> 方法将返回所有已定义 ID / 名称的数组：</p><pre><code>use Laravel\\Passport\\Passport;

Passport::scopeIds();
</code></pre><p><code>scopes</code> 方法将返回一个包含所有已定义作用域数组的 <code>Laravel\\Passport\\Scope</code> 实例：</p><pre><code>Passport::scopes();
</code></pre><p><code>scopesFor</code> 方法将返回与给定 ID / 名称匹配的 <code>Laravel\\Passport\\Scope</code> 实例数组：</p><pre><code>Passport::scopesFor([&#39;place-orders&#39;, &#39;check-status&#39;]);
</code></pre><p>你可以使用 <code>hasScope</code> 方法确定是否已定义给定作用域：</p><pre><code>Passport::hasScope(&#39;place-orders&#39;);
</code></pre><p><a name="consuming-your-api-with-javascript"></a></p><h2 id="使用-javascript-接入-api" tabindex="-1"><a class="header-anchor" href="#使用-javascript-接入-api" aria-hidden="true">#</a> 使用 JavaScript 接入 API</h2><p>在构建 API 时， 如果能通过 JavaScript 应用接入自己的 API 将会给开发过程带来极大的便利。这种 API 开发方法允许你使用自己的应用程序的 API 和别人共享的 API 。你的 Web 应用程序、移动应用程序、第三方应用程序以及可能在各种软件包管理器上发布的任何 SDK 都可能会使用相同的 API 。</p><p>通常，如果要在 JavaScript 应用程序中使用 API ，需要手动向应用程序发送访问令牌，并将其传递给应用程序。但是， Passport 有一个可以处理这个问题的中间件。将 <code>CreateFreshApiToken</code> 中间件添加到 <code>app/Http/Kernel.php</code> 文件中的 <code>web</code> 中间件组就可以了：</p><pre><code>&#39;web&#39; =&gt; [
    // 其他中间件...
    \\Laravel\\Passport\\Http\\Middleware\\CreateFreshApiToken::class,
],
</code></pre><blockquote><p><strong>注意</strong><br> 你需要确保 <code>CreateFreshApiToken</code> 中间件是你的中间件堆栈中的最后一个中间件。</p></blockquote><p>该中间件会将 <code>laravel_token</code> cookie 附加到你的响应中。该 cookie 将包含一个加密后的 JWT ， Passport 将用来验证来自 JavaScript 应用程序的 API 请求。JWT 的生命周期等于你的 <code>session.lifetime</code> 配置值。至此，你可以在不明确传递访问令牌的情况下向应用程序的 API 发出请求：</p><pre><code>axios.get(&#39;/api/user&#39;)
    .then(response =&gt; {
        console.log(response.data);
    });
</code></pre><p><a name="customizing-the-cookie-name"></a></p><h4 id="自定义-cookie-名称" tabindex="-1"><a class="header-anchor" href="#自定义-cookie-名称" aria-hidden="true">#</a> 自定义 Cookie 名称</h4><p>如果需要，你可以在 <code>App\\Providers\\AuthServiceProvider</code> 类的 <code>boot</code> 方法中使用 <code>Passport::cookie</code> 方法来自定义 <code>laravel_token</code> cookie 的名称：</p><pre><code>/**
 * 注册认证 / 授权服务.
 */
public function boot(): void
{
    Passport::cookie(&#39;custom_name&#39;);
}
</code></pre><p><a name="csrf-protection"></a></p><h4 id="csrf-保护" tabindex="-1"><a class="header-anchor" href="#csrf-保护" aria-hidden="true">#</a> CSRF 保护</h4><p>当使用这种授权方法时，你需要确认请求中包含有效的 CSRF 令牌。默认的 Laravel JavaScript 脚手架会包含一个 Axios 实例，该实例是自动使用加密的 <code>XSRF-TOKEN</code> cookie 值在同源请求上发送 <code>X-XSRF-TOKEN</code> 请求头。</p><blockquote><p><strong>技巧</strong><br> 如果你选择发送 <code>X-CSRF-TOKEN</code> 请求头而不是 <code>X-XSRF-TOKEN</code> ，则需要使用 <code>csrf_token()</code> 提供的未加密令牌。</p></blockquote><p><a name="events"></a></p><h2 id="事件" tabindex="-1"><a class="header-anchor" href="#事件" aria-hidden="true">#</a> 事件</h2><p>Passport 在发出访问令牌和刷新令牌时引发事件。 你可以使用这些事件来修改或撤消数据库中的其他访问令牌。如果你愿意，可以在应用程序的 <code>App\\Providers\\EventServiceProvider</code> 类中将监听器注册到这些事件：</p><pre><code>/**
 * 应用程序的事件监听器映射
 *
 * @var array
 */
protected $listen = [
    &#39;Laravel\\Passport\\Events\\AccessTokenCreated&#39; =&gt; [
        &#39;App\\Listeners\\RevokeOldTokens&#39;,
    ],

    &#39;Laravel\\Passport\\Events\\RefreshTokenCreated&#39; =&gt; [
        &#39;App\\Listeners\\PruneOldTokens&#39;,
    ],
];
</code></pre><p><a name="testing"></a></p><h2 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h2><p>Passport 的 <code>actingAs</code> 方法可以指定当前已认证用户及其作用域。<code>actingAs</code> 方法的第一个参数是用户实例，第二个参数是用户令牌作用域数组：</p><pre><code>use App\\Models\\User;
use Laravel\\Passport\\Passport;

public function test_servers_can_be_created(): void
{
    Passport::actingAs(
        User::factory()-&gt;create(),
        [&#39;create-servers&#39;]
    );

    $response = $this-&gt;post(&#39;/api/create-server&#39;);

    $response-&gt;assertStatus(201);
}
</code></pre><p>Passport 的 <code>actingAsClient</code> 方法可以指定当前已认证用户及其作用域。 <code>actingAsClient</code> 方法的第一个参数是用户实例，第二个参数是用户令牌作用域数组：</p><pre><code>use Laravel\\Passport\\Client;
use Laravel\\Passport\\Passport;

public function test_orders_can_be_retrieved(): void
{
    Passport::actingAsClient(
        Client::factory()-&gt;create(),
        [&#39;check-status&#39;]
    );

    $response = $this-&gt;get(&#39;/api/orders&#39;);

    $response-&gt;assertStatus(200);
}
</code></pre>`,109);function K(J,B){const n=p("ExternalLinkIcon");return r(),c("div",null,[d,a("p",null,[a("a",l,[e("Laravel Passport"),s(n)]),e(" 可以在几分钟之内为你的应用程序提供完整的 OAuth2 服务端实现。Passport 是基于由 Andy Millington 和 Simon Hamp 维护的 "),a("a",u,[e("League OAuth2 server"),s(n)]),e(" 建立的。")]),a("blockquote",null,[a("p",null,[h,k,e(" 本文档假定你已熟悉 OAuth2 。如果你并不了解 OAuth2 ，阅读之前请先熟悉下 OAuth2 的 "),a("a",g,[e("常用术语"),s(n)]),e(" 和特性。")])]),v,a("p",null,[e("当升级到 Passport 的主要版本时，请务必查阅 "),a("a",m,[e("升级指南"),s(n)]),e(".")]),b,a("p",null,[e("然后，您可以复制 Passport "),a("a",f,[e("在自己的文件中"),s(n)]),e(" 定义的路由到应用程序的 "),P,e(" 文件中，并且将其修改为您喜欢的任何形式：")]),_,a("p",null,[e("但是，你需要结合 Passport 的 JSON API 接口和你的前端面板管理页面， 为你的用户提供客户端管理功能。接下里，我们会回顾所有用于管理客户端的的 API 接口。方便起见，我们使用 "),a("a",A,[e("Axios"),s(n)]),e(" 模拟对端点的 HTTP 请求。")]),x,a("p",null,[e("Passport 同样包含了一个 JSON API 接口用来管理授权访问令牌。你可以使用该接口为用户搭建一个管理访问令牌的控制面板。方便来着，我们将使用 "),a("a",q,[e("Axios"),s(n)]),e(" 模拟 HTTP 对端点发起请求。由于 JSON API 被中间件 "),I,e(" 和 "),S,e(" 保护着，我们只能在应用内部调用。")]),$,a("p",null,[e("验证码是一串包含 43 位到 128 位字符的随机字符串。可用字符包括字母，数字以及下面这些字符："),T,e(", "),y,e(", "),R,e(", "),C,e("，可参考 "),a("a",w,[e("RFC 7636 specification"),s(n)]),e(" 定义。")]),L,a("blockquote",null,[a("p",null,[E,j,e(" 我们不再建议使用密码授予令牌。相反，你应该选择 "),a("a",H,[e("OAuth2 服务器当前推荐的授权类型"),s(n)]),e(" 。")])]),O,a("blockquote",null,[a("p",null,[N,z,e(" 我们不再推荐使用隐式授权令牌。 相反，你应该选择 "),a("a",F,[e(" OAuth2 服务器当前推荐的授权类型"),s(n)]),e(" 。")])]),U,a("p",null,[e("Passport 中还有一个用于管理个人访问令牌的 JSON API。你可以将其与你自己的前端配对，为你的用户提供一个用于管理个人访问令牌的仪表板。下面，我们将回顾所有用于管理个人访问令牌的 API 。为了方便起见，我们将使用 "),a("a",M,[e("Axios"),s(n)]),e(" 来演示向 API 发出 HTTP 请求。")]),D])}const X=o(i,[["render",K],["__file","passport.html.vue"]]);export{X as default};
