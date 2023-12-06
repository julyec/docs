import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as r,c,b as a,d as e,e as s,a as t}from"./app-06635a3b.js";const p={},d=t('<h1 id="laravel-passport" tabindex="-1"><a class="header-anchor" href="#laravel-passport" aria-hidden="true">#</a> Laravel Passport</h1><ul><li><a href="#introduction">Introduction</a><ul><li><a href="#passport-or-sanctum">Passport Or Sanctum?</a></li></ul></li><li><a href="#installation">Installation</a><ul><li><a href="#deploying-passport">Deploying Passport</a></li><li><a href="#migration-customization">Migration Customization</a></li><li><a href="#upgrading-passport">Upgrading Passport</a></li></ul></li><li><a href="#configuration">Configuration</a><ul><li><a href="#client-secret-hashing">Client Secret Hashing</a></li><li><a href="#token-lifetimes">Token Lifetimes</a></li><li><a href="#overriding-default-models">Overriding Default Models</a></li><li><a href="#overriding-routes">Overriding Routes</a></li></ul></li><li><a href="#issuing-access-tokens">Issuing Access Tokens</a><ul><li><a href="#managing-clients">Managing Clients</a></li><li><a href="#requesting-tokens">Requesting Tokens</a></li><li><a href="#refreshing-tokens">Refreshing Tokens</a></li><li><a href="#revoking-tokens">Revoking Tokens</a></li><li><a href="#purging-tokens">Purging Tokens</a></li></ul></li><li><a href="#code-grant-pkce">Authorization Code Grant with PKCE</a><ul><li><a href="#creating-a-auth-pkce-grant-client">Creating The Client</a></li><li><a href="#requesting-auth-pkce-grant-tokens">Requesting Tokens</a></li></ul></li><li><a href="#password-grant-tokens">Password Grant Tokens</a><ul><li><a href="#creating-a-password-grant-client">Creating A Password Grant Client</a></li><li><a href="#requesting-password-grant-tokens">Requesting Tokens</a></li><li><a href="#requesting-all-scopes">Requesting All Scopes</a></li><li><a href="#customizing-the-user-provider">Customizing The User Provider</a></li><li><a href="#customizing-the-username-field">Customizing The Username Field</a></li><li><a href="#customizing-the-password-validation">Customizing The Password Validation</a></li></ul></li><li><a href="#implicit-grant-tokens">Implicit Grant Tokens</a></li><li><a href="#client-credentials-grant-tokens">Client Credentials Grant Tokens</a></li><li><a href="#personal-access-tokens">Personal Access Tokens</a><ul><li><a href="#creating-a-personal-access-client">Creating A Personal Access Client</a></li><li><a href="#managing-personal-access-tokens">Managing Personal Access Tokens</a></li></ul></li><li><a href="#protecting-routes">Protecting Routes</a><ul><li><a href="#via-middleware">Via Middleware</a></li><li><a href="#passing-the-access-token">Passing The Access Token</a></li></ul></li><li><a href="#token-scopes">Token Scopes</a><ul><li><a href="#defining-scopes">Defining Scopes</a></li><li><a href="#default-scope">Default Scope</a></li><li><a href="#assigning-scopes-to-tokens">Assigning Scopes To Tokens</a></li><li><a href="#checking-scopes">Checking Scopes</a></li></ul></li><li><a href="#consuming-your-api-with-javascript">Consuming Your API With JavaScript</a></li><li><a href="#events">Events</a></li><li><a href="#testing">Testing</a></li></ul><p><a name="introduction"></a></p><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2>',4),l={href:"https://github.com/laravel/passport",target:"_blank",rel:"noopener noreferrer"},u={href:"https://github.com/thephpleague/oauth2-server",target:"_blank",rel:"noopener noreferrer"},h=a("strong",null,"Warning",-1),g=a("br",null,null,-1),m={href:"https://oauth2.thephpleague.com/terminology/",target:"_blank",rel:"noopener noreferrer"},k=t(`<p><a name="passport-or-sanctum"></a></p><h3 id="passport-or-sanctum" tabindex="-1"><a class="header-anchor" href="#passport-or-sanctum" aria-hidden="true">#</a> Passport Or Sanctum?</h3><p>Before getting started, you may wish to determine if your application would be better served by Laravel Passport or <a href="./sanctum">Laravel Sanctum</a>. If your application absolutely needs to support OAuth2, then you should use Laravel Passport.</p><p>However, if you are attempting to authenticate a single-page application, mobile application, or issue API tokens, you should use <a href="./sanctum">Laravel Sanctum</a>. Laravel Sanctum does not support OAuth2; however, it provides a much simpler API authentication development experience.</p><p><a name="installation"></a></p><h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h2><p>To get started, install Passport via the Composer package manager:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">composer</span> require laravel/passport
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Passport&#39;s <a href="./providers">service provider</a> registers its own database migration directory, so you should migrate your database after installing the package. The Passport migrations will create the tables your application needs to store OAuth2 clients and access tokens:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan migrate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Next, you should execute the <code>passport:install</code> Artisan command. This command will create the encryption keys needed to generate secure access tokens. In addition, the command will create &quot;personal access&quot; and &quot;password grant&quot; clients which will be used to generate access tokens:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan passport:install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p><strong>Note</strong><br> If you would like to use UUIDs as the primary key value of the Passport <code>Client</code> model instead of auto-incrementing integers, please install Passport using <a href="#client-uuids">the <code>uuids</code> option</a>.</p></blockquote><p>After running the <code>passport:install</code> command, add the <code>Laravel\\Passport\\HasApiTokens</code> trait to your <code>App\\Models\\User</code> model. This trait will provide a few helper methods to your model which allow you to inspect the authenticated user&#39;s token and scopes. If your model is already using the <code>Laravel\\Sanctum\\HasApiTokens</code> trait, you may remove that trait:</p><pre><code>&lt;?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Factories\\HasFactory;
use Illuminate\\Foundation\\Auth\\User as Authenticatable;
use Illuminate\\Notifications\\Notifiable;
use Laravel\\Passport\\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;
}
</code></pre><p>Finally, in your application&#39;s <code>config/auth.php</code> configuration file, you should define an <code>api</code> authentication guard and set the <code>driver</code> option to <code>passport</code>. This will instruct your application to use Passport&#39;s <code>TokenGuard</code> when authenticating incoming API requests:</p><pre><code>&#39;guards&#39; =&gt; [
    &#39;web&#39; =&gt; [
        &#39;driver&#39; =&gt; &#39;session&#39;,
        &#39;provider&#39; =&gt; &#39;users&#39;,
    ],

    &#39;api&#39; =&gt; [
        &#39;driver&#39; =&gt; &#39;passport&#39;,
        &#39;provider&#39; =&gt; &#39;users&#39;,
    ],
],
</code></pre><p><a name="client-uuids"></a></p><h4 id="client-uuids" tabindex="-1"><a class="header-anchor" href="#client-uuids" aria-hidden="true">#</a> Client UUIDs</h4><p>You may also run the <code>passport:install</code> command with the <code>--uuids</code> option present. This option will instruct Passport that you would like to use UUIDs instead of auto-incrementing integers as the Passport <code>Client</code> model&#39;s primary key values. After running the <code>passport:install</code> command with the <code>--uuids</code> option, you will be given additional instructions regarding disabling Passport&#39;s default migrations:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan passport:install <span class="token parameter variable">--uuids</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="deploying-passport"></a></p><h3 id="deploying-passport" tabindex="-1"><a class="header-anchor" href="#deploying-passport" aria-hidden="true">#</a> Deploying Passport</h3><p>When deploying Passport to your application&#39;s servers for the first time, you will likely need to run the <code>passport:keys</code> command. This command generates the encryption keys Passport needs in order to generate access tokens. The generated keys are not typically kept in source control:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan passport:keys
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>If necessary, you may define the path where Passport&#39;s keys should be loaded from. You may use the <code>Passport::loadKeysFrom</code> method to accomplish this. Typically, this method should be called from the <code>boot</code> method of your application&#39;s <code>App\\Providers\\AuthServiceProvider</code> class:</p><pre><code>/**
 * Register any authentication / authorization services.
 */
public function boot(): void
{
    Passport::loadKeysFrom(__DIR__.&#39;/../secrets/oauth&#39;);
}
</code></pre><p><a name="loading-keys-from-the-environment"></a></p><h4 id="loading-keys-from-the-environment" tabindex="-1"><a class="header-anchor" href="#loading-keys-from-the-environment" aria-hidden="true">#</a> Loading Keys From The Environment</h4><p>Alternatively, you may publish Passport&#39;s configuration file using the <code>vendor:publish</code> Artisan command:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan vendor:publish <span class="token parameter variable">--tag</span><span class="token operator">=</span>passport-config
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>After the configuration file has been published, you may load your application&#39;s encryption keys by defining them as environment variables:</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token key attr-name">PASSPORT_PRIVATE_KEY</span><span class="token punctuation">=</span><span class="token value attr-value">&quot;-----BEGIN RSA PRIVATE KEY-----</span>
&lt;private key here&gt;
-----END RSA PRIVATE KEY-----&quot;

<span class="token key attr-name">PASSPORT_PUBLIC_KEY</span><span class="token punctuation">=</span><span class="token value attr-value">&quot;-----BEGIN PUBLIC KEY-----</span>
&lt;public key here&gt;
-----END PUBLIC KEY-----&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="migration-customization"></a></p><h3 id="migration-customization" tabindex="-1"><a class="header-anchor" href="#migration-customization" aria-hidden="true">#</a> Migration Customization</h3><p>If you are not going to use Passport&#39;s default migrations, you should call the <code>Passport::ignoreMigrations</code> method in the <code>register</code> method of your <code>App\\Providers\\AppServiceProvider</code> class. You may export the default migrations using the <code>vendor:publish</code> Artisan command:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan vendor:publish <span class="token parameter variable">--tag</span><span class="token operator">=</span>passport-migrations
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="upgrading-passport"></a></p><h3 id="upgrading-passport" tabindex="-1"><a class="header-anchor" href="#upgrading-passport" aria-hidden="true">#</a> Upgrading Passport</h3>`,39),v={href:"https://github.com/laravel/passport/blob/master/UPGRADE.md",target:"_blank",rel:"noopener noreferrer"},f=t(`<p><a name="configuration"></a></p><h2 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> Configuration</h2><p><a name="client-secret-hashing"></a></p><h3 id="client-secret-hashing" tabindex="-1"><a class="header-anchor" href="#client-secret-hashing" aria-hidden="true">#</a> Client Secret Hashing</h3><p>If you would like your client&#39;s secrets to be hashed when stored in your database, you should call the <code>Passport::hashClientSecrets</code> method in the <code>boot</code> method of your <code>App\\Providers\\AuthServiceProvider</code> class:</p><pre><code>use Laravel\\Passport\\Passport;

Passport::hashClientSecrets();
</code></pre><p>Once enabled, all of your client secrets will only be displayable to the user immediately after they are created. Since the plain-text client secret value is never stored in the database, it is not possible to recover the secret&#39;s value if it is lost.</p><p><a name="token-lifetimes"></a></p><h3 id="token-lifetimes" tabindex="-1"><a class="header-anchor" href="#token-lifetimes" aria-hidden="true">#</a> Token Lifetimes</h3><p>By default, Passport issues long-lived access tokens that expire after one year. If you would like to configure a longer / shorter token lifetime, you may use the <code>tokensExpireIn</code>, <code>refreshTokensExpireIn</code>, and <code>personalAccessTokensExpireIn</code> methods. These methods should be called from the <code>boot</code> method of your application&#39;s <code>App\\Providers\\AuthServiceProvider</code> class:</p><pre><code>/**
 * Register any authentication / authorization services.
 */
public function boot(): void
{
    Passport::tokensExpireIn(now()-&gt;addDays(15));
    Passport::refreshTokensExpireIn(now()-&gt;addDays(30));
    Passport::personalAccessTokensExpireIn(now()-&gt;addMonths(6));
}
</code></pre><blockquote><p><strong>Warning</strong><br> The <code>expires_at</code> columns on Passport&#39;s database tables are read-only and for display purposes only. When issuing tokens, Passport stores the expiration information within the signed and encrypted tokens. If you need to invalidate a token you should <a href="#revoking-tokens">revoke it</a>.</p></blockquote><p><a name="overriding-default-models"></a></p><h3 id="overriding-default-models" tabindex="-1"><a class="header-anchor" href="#overriding-default-models" aria-hidden="true">#</a> Overriding Default Models</h3><p>You are free to extend the models used internally by Passport by defining your own model and extending the corresponding Passport model:</p><pre><code>use Laravel\\Passport\\Client as PassportClient;

class Client extends PassportClient
{
    // ...
}
</code></pre><p>After defining your model, you may instruct Passport to use your custom model via the <code>Laravel\\Passport\\Passport</code> class. Typically, you should inform Passport about your custom models in the <code>boot</code> method of your application&#39;s <code>App\\Providers\\AuthServiceProvider</code> class:</p><pre><code>use App\\Models\\Passport\\AuthCode;
use App\\Models\\Passport\\Client;
use App\\Models\\Passport\\PersonalAccessClient;
use App\\Models\\Passport\\RefreshToken;
use App\\Models\\Passport\\Token;

/**
 * Register any authentication / authorization services.
 */
public function boot(): void
{
    Passport::useTokenModel(Token::class);
    Passport::useRefreshTokenModel(RefreshToken::class);
    Passport::useAuthCodeModel(AuthCode::class);
    Passport::useClientModel(Client::class);
    Passport::usePersonalAccessClientModel(PersonalAccessClient::class);
}
</code></pre><p><a name="overriding-routes"></a></p><h3 id="overriding-routes" tabindex="-1"><a class="header-anchor" href="#overriding-routes" aria-hidden="true">#</a> Overriding Routes</h3><p>Sometimes you may wish to customize the routes defined by Passport. To achieve this, you first need to ignore the routes registered by Passport by adding <code>Passport::ignoreRoutes</code> to the <code>register</code> method of your application&#39;s <code>AppServiceProvider</code>:</p><pre><code>use Laravel\\Passport\\Passport;

/**
 * Register any application services.
 */
public function register(): void
{
    Passport::ignoreRoutes();
}
</code></pre>`,22),y={href:"https://github.com/laravel/passport/blob/11.x/routes/web.php",target:"_blank",rel:"noopener noreferrer"},b=a("code",null,"routes/web.php",-1),w=t(`<pre><code>Route::group([
    &#39;as&#39; =&gt; &#39;passport.&#39;,
    &#39;prefix&#39; =&gt; config(&#39;passport.path&#39;, &#39;oauth&#39;),
    &#39;namespace&#39; =&gt; &#39;\\Laravel\\Passport\\Http\\Controllers&#39;,
], function () {
    // Passport routes...
});
</code></pre><p><a name="issuing-access-tokens"></a></p><h2 id="issuing-access-tokens" tabindex="-1"><a class="header-anchor" href="#issuing-access-tokens" aria-hidden="true">#</a> Issuing Access Tokens</h2><p>Using OAuth2 via authorization codes is how most developers are familiar with OAuth2. When using authorization codes, a client application will redirect a user to your server where they will either approve or deny the request to issue an access token to the client.</p><p><a name="managing-clients"></a></p><h3 id="managing-clients" tabindex="-1"><a class="header-anchor" href="#managing-clients" aria-hidden="true">#</a> Managing Clients</h3><p>First, developers building applications that need to interact with your application&#39;s API will need to register their application with yours by creating a &quot;client&quot;. Typically, this consists of providing the name of their application and a URL that your application can redirect to after users approve their request for authorization.</p><p><a name="the-passportclient-command"></a></p><h4 id="the-passport-client-command" tabindex="-1"><a class="header-anchor" href="#the-passport-client-command" aria-hidden="true">#</a> The <code>passport:client</code> Command</h4><p>The simplest way to create a client is using the <code>passport:client</code> Artisan command. This command may be used to create your own clients for testing your OAuth2 functionality. When you run the <code>client</code> command, Passport will prompt you for more information about your client and will provide you with a client ID and secret:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan passport:client
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Redirect URLs</strong></p><p>If you would like to allow multiple redirect URLs for your client, you may specify them using a comma-delimited list when prompted for the URL by the <code>passport:client</code> command. Any URLs which contain commas should be URL encoded:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>http://example.com/callback,http://examplefoo.com/callback
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="clients-json-api"></a></p><h4 id="json-api" tabindex="-1"><a class="header-anchor" href="#json-api" aria-hidden="true">#</a> JSON API</h4><p>Since your application&#39;s users will not be able to utilize the <code>client</code> command, Passport provides a JSON API that you may use to create clients. This saves you the trouble of having to manually code controllers for creating, updating, and deleting clients.</p>`,17),P={href:"https://github.com/axios/axios",target:"_blank",rel:"noopener noreferrer"},T=t(`<p>The JSON API is guarded by the <code>web</code> and <code>auth</code> middleware; therefore, it may only be called from your own application. It is not able to be called from an external source.</p><p><a name="get-oauthclients"></a></p><h4 id="get-oauth-clients" tabindex="-1"><a class="header-anchor" href="#get-oauth-clients" aria-hidden="true">#</a> <code>GET /oauth/clients</code></h4><p>This route returns all of the clients for the authenticated user. This is primarily useful for listing all of the user&#39;s clients so that they may edit or delete them:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/oauth/clients&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="post-oauthclients"></a></p><h4 id="post-oauth-clients" tabindex="-1"><a class="header-anchor" href="#post-oauth-clients" aria-hidden="true">#</a> <code>POST /oauth/clients</code></h4><p>This route is used to create new clients. It requires two pieces of data: the client&#39;s <code>name</code> and a <code>redirect</code> URL. The <code>redirect</code> URL is where the user will be redirected after approving or denying a request for authorization.</p><p>When a client is created, it will be issued a client ID and client secret. These values will be used when requesting access tokens from your application. The client creation route will return the new client instance:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Client Name&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">redirect</span><span class="token operator">:</span> <span class="token string">&#39;http://example.com/callback&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

axios<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&#39;/oauth/clients&#39;</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">catch</span> <span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token comment">// List errors on response...</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="put-oauthclientsclient-id"></a></p><h4 id="put-oauth-clients-client-id" tabindex="-1"><a class="header-anchor" href="#put-oauth-clients-client-id" aria-hidden="true">#</a> <code>PUT /oauth/clients/{client-id}</code></h4><p>This route is used to update clients. It requires two pieces of data: the client&#39;s <code>name</code> and a <code>redirect</code> URL. The <code>redirect</code> URL is where the user will be redirected after approving or denying a request for authorization. The route will return the updated client instance:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;New Client Name&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">redirect</span><span class="token operator">:</span> <span class="token string">&#39;http://example.com/callback&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

axios<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&#39;/oauth/clients/&#39;</span> <span class="token operator">+</span> clientId<span class="token punctuation">,</span> data<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">catch</span> <span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token comment">// List errors on response...</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="delete-oauthclientsclient-id"></a></p><h4 id="delete-oauth-clients-client-id" tabindex="-1"><a class="header-anchor" href="#delete-oauth-clients-client-id" aria-hidden="true">#</a> <code>DELETE /oauth/clients/{client-id}</code></h4><p>This route is used to delete clients:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>axios<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token string">&#39;/oauth/clients/&#39;</span> <span class="token operator">+</span> clientId<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token comment">// ...</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="requesting-tokens"></a></p><h3 id="requesting-tokens" tabindex="-1"><a class="header-anchor" href="#requesting-tokens" aria-hidden="true">#</a> Requesting Tokens</h3><p><a name="requesting-tokens-redirecting-for-authorization"></a></p><h4 id="redirecting-for-authorization" tabindex="-1"><a class="header-anchor" href="#redirecting-for-authorization" aria-hidden="true">#</a> Redirecting For Authorization</h4><p>Once a client has been created, developers may use their client ID and secret to request an authorization code and access token from your application. First, the consuming application should make a redirect request to your application&#39;s <code>/oauth/authorize</code> route like so:</p><pre><code>use Illuminate\\Http\\Request;
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
</code></pre><p>The <code>prompt</code> parameter may be used to specify the authentication behavior of the Passport application.</p><p>If the <code>prompt</code> value is <code>none</code>, Passport will always throw an authentication error if the user is not already authenticated with the Passport application. If the value is <code>consent</code>, Passport will always display the authorization approval screen, even if all scopes were previously granted to the consuming application. When the value is <code>login</code>, the Passport application will always prompt the user to re-login to the application, even if they already have an existing session.</p><p>If no <code>prompt</code> value is provided, the user will be prompted for authorization only if they have not previously authorized access to the consuming application for the requested scopes.</p><blockquote><p><strong>Note</strong><br> Remember, the <code>/oauth/authorize</code> route is already defined by Passport. You do not need to manually define this route.</p></blockquote><p><a name="approving-the-request"></a></p><h4 id="approving-the-request" tabindex="-1"><a class="header-anchor" href="#approving-the-request" aria-hidden="true">#</a> Approving The Request</h4><p>When receiving authorization requests, Passport will automatically respond based on the value of <code>prompt</code> parameter (if present) and may display a template to the user allowing them to approve or deny the authorization request. If they approve the request, they will be redirected back to the <code>redirect_uri</code> that was specified by the consuming application. The <code>redirect_uri</code> must match the <code>redirect</code> URL that was specified when the client was created.</p><p>If you would like to customize the authorization approval screen, you may publish Passport&#39;s views using the <code>vendor:publish</code> Artisan command. The published views will be placed in the <code>resources/views/vendor/passport</code> directory:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan vendor:publish <span class="token parameter variable">--tag</span><span class="token operator">=</span>passport-views
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Sometimes you may wish to skip the authorization prompt, such as when authorizing a first-party client. You may accomplish this by <a href="#overriding-default-models">extending the <code>Client</code> model</a> and defining a <code>skipsAuthorization</code> method. If <code>skipsAuthorization</code> returns <code>true</code> the client will be approved and the user will be redirected back to the <code>redirect_uri</code> immediately, unless the consuming application has explicitly set the <code>prompt</code> parameter when redirecting for authorization:</p><pre><code>&lt;?php

namespace App\\Models\\Passport;

use Laravel\\Passport\\Client as BaseClient;

class Client extends BaseClient
{
    /**
     * Determine if the client should skip the authorization prompt.
     */
    public function skipsAuthorization(): bool
    {
        return $this-&gt;firstParty();
    }
}
</code></pre><p><a name="requesting-tokens-converting-authorization-codes-to-access-tokens"></a></p><h4 id="converting-authorization-codes-to-access-tokens" tabindex="-1"><a class="header-anchor" href="#converting-authorization-codes-to-access-tokens" aria-hidden="true">#</a> Converting Authorization Codes To Access Tokens</h4><p>If the user approves the authorization request, they will be redirected back to the consuming application. The consumer should first verify the <code>state</code> parameter against the value that was stored prior to the redirect. If the state parameter matches then the consumer should issue a <code>POST</code> request to your application to request an access token. The request should include the authorization code that was issued by your application when the user approved the authorization request:</p><pre><code>use Illuminate\\Http\\Request;
use Illuminate\\Support\\Facades\\Http;

Route::get(&#39;/callback&#39;, function (Request $request) {
    $state = $request-&gt;session()-&gt;pull(&#39;state&#39;);

    throw_unless(
        strlen($state) &gt; 0 &amp;&amp; $state === $request-&gt;state,
        InvalidArgumentException::class,
        &#39;Invalid state value.&#39;
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
</code></pre><p>This <code>/oauth/token</code> route will return a JSON response containing <code>access_token</code>, <code>refresh_token</code>, and <code>expires_in</code> attributes. The <code>expires_in</code> attribute contains the number of seconds until the access token expires.</p><blockquote><p><strong>Note</strong><br> Like the <code>/oauth/authorize</code> route, the <code>/oauth/token</code> route is defined for you by Passport. There is no need to manually define this route.</p></blockquote><p><a name="tokens-json-api"></a></p><h4 id="json-api-1" tabindex="-1"><a class="header-anchor" href="#json-api-1" aria-hidden="true">#</a> JSON API</h4>`,43),q={href:"https://github.com/mzabriskie/axios",target:"_blank",rel:"noopener noreferrer"},A=a("code",null,"web",-1),_=a("code",null,"auth",-1),x=t(`<p><a name="get-oauthtokens"></a></p><h4 id="get-oauth-tokens" tabindex="-1"><a class="header-anchor" href="#get-oauth-tokens" aria-hidden="true">#</a> <code>GET /oauth/tokens</code></h4><p>This route returns all of the authorized access tokens that the authenticated user has created. This is primarily useful for listing all of the user&#39;s tokens so that they can revoke them:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/oauth/tokens&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="delete-oauthtokenstoken-id"></a></p><h4 id="delete-oauth-tokens-token-id" tabindex="-1"><a class="header-anchor" href="#delete-oauth-tokens-token-id" aria-hidden="true">#</a> <code>DELETE /oauth/tokens/{token-id}</code></h4><p>This route may be used to revoke authorized access tokens and their related refresh tokens:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>axios<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token string">&#39;/oauth/tokens/&#39;</span> <span class="token operator">+</span> tokenId<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="refreshing-tokens"></a></p><h3 id="refreshing-tokens" tabindex="-1"><a class="header-anchor" href="#refreshing-tokens" aria-hidden="true">#</a> Refreshing Tokens</h3><p>If your application issues short-lived access tokens, users will need to refresh their access tokens via the refresh token that was provided to them when the access token was issued:</p><pre><code>use Illuminate\\Support\\Facades\\Http;

$response = Http::asForm()-&gt;post(&#39;http://passport-app.test/oauth/token&#39;, [
    &#39;grant_type&#39; =&gt; &#39;refresh_token&#39;,
    &#39;refresh_token&#39; =&gt; &#39;the-refresh-token&#39;,
    &#39;client_id&#39; =&gt; &#39;client-id&#39;,
    &#39;client_secret&#39; =&gt; &#39;client-secret&#39;,
    &#39;scope&#39; =&gt; &#39;&#39;,
]);

return $response-&gt;json();
</code></pre><p>This <code>/oauth/token</code> route will return a JSON response containing <code>access_token</code>, <code>refresh_token</code>, and <code>expires_in</code> attributes. The <code>expires_in</code> attribute contains the number of seconds until the access token expires.</p><p><a name="revoking-tokens"></a></p><h3 id="revoking-tokens" tabindex="-1"><a class="header-anchor" href="#revoking-tokens" aria-hidden="true">#</a> Revoking Tokens</h3><p>You may revoke a token by using the <code>revokeAccessToken</code> method on the <code>Laravel\\Passport\\TokenRepository</code>. You may revoke a token&#39;s refresh tokens using the <code>revokeRefreshTokensByAccessTokenId</code> method on the <code>Laravel\\Passport\\RefreshTokenRepository</code>. These classes may be resolved using Laravel&#39;s <a href="./container">service container</a>:</p><pre><code>use Laravel\\Passport\\TokenRepository;
use Laravel\\Passport\\RefreshTokenRepository;

$tokenRepository = app(TokenRepository::class);
$refreshTokenRepository = app(RefreshTokenRepository::class);

// Revoke an access token...
$tokenRepository-&gt;revokeAccessToken($tokenId);

// Revoke all of the token&#39;s refresh tokens...
$refreshTokenRepository-&gt;revokeRefreshTokensByAccessTokenId($tokenId);
</code></pre><p><a name="purging-tokens"></a></p><h3 id="purging-tokens" tabindex="-1"><a class="header-anchor" href="#purging-tokens" aria-hidden="true">#</a> Purging Tokens</h3><p>When tokens have been revoked or expired, you might want to purge them from the database. Passport&#39;s included <code>passport:purge</code> Artisan command can do this for you:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Purge revoked and expired tokens and auth codes...</span>
php artisan passport:purge

<span class="token comment"># Only purge tokens expired for more than 6 hours...</span>
php artisan passport:purge <span class="token parameter variable">--hours</span><span class="token operator">=</span><span class="token number">6</span>

<span class="token comment"># Only purge revoked tokens and auth codes...</span>
php artisan passport:purge <span class="token parameter variable">--revoked</span>

<span class="token comment"># Only purge expired tokens and auth codes...</span>
php artisan passport:purge <span class="token parameter variable">--expired</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You may also configure a <a href="./scheduling">scheduled job</a> in your application&#39;s <code>App\\Console\\Kernel</code> class to automatically prune your tokens on a schedule:</p><pre><code>/**
 * Define the application&#39;s command schedule.
 */
protected function schedule(Schedule $schedule): void
{
    $schedule-&gt;command(&#39;passport:purge&#39;)-&gt;hourly();
}
</code></pre><p><a name="code-grant-pkce"></a></p><h2 id="authorization-code-grant-with-pkce" tabindex="-1"><a class="header-anchor" href="#authorization-code-grant-with-pkce" aria-hidden="true">#</a> Authorization Code Grant with PKCE</h2><p>The Authorization Code grant with &quot;Proof Key for Code Exchange&quot; (PKCE) is a secure way to authenticate single page applications or native applications to access your API. This grant should be used when you can&#39;t guarantee that the client secret will be stored confidentially or in order to mitigate the threat of having the authorization code intercepted by an attacker. A combination of a &quot;code verifier&quot; and a &quot;code challenge&quot; replaces the client secret when exchanging the authorization code for an access token.</p><p><a name="creating-a-auth-pkce-grant-client"></a></p><h3 id="creating-the-client" tabindex="-1"><a class="header-anchor" href="#creating-the-client" aria-hidden="true">#</a> Creating The Client</h3><p>Before your application can issue tokens via the authorization code grant with PKCE, you will need to create a PKCE-enabled client. You may do this using the <code>passport:client</code> Artisan command with the <code>--public</code> option:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan passport:client <span class="token parameter variable">--public</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="requesting-auth-pkce-grant-tokens"></a></p><h3 id="requesting-tokens-1" tabindex="-1"><a class="header-anchor" href="#requesting-tokens-1" aria-hidden="true">#</a> Requesting Tokens</h3><p><a name="code-verifier-code-challenge"></a></p><h4 id="code-verifier-code-challenge" tabindex="-1"><a class="header-anchor" href="#code-verifier-code-challenge" aria-hidden="true">#</a> Code Verifier &amp; Code Challenge</h4><p>As this authorization grant does not provide a client secret, developers will need to generate a combination of a code verifier and a code challenge in order to request a token.</p>`,35),I=a("code",null,'"-"',-1),C=a("code",null,'"."',-1),z=a("code",null,'"_"',-1),S=a("code",null,'"~"',-1),R={href:"https://tools.ietf.org/html/rfc7636",target:"_blank",rel:"noopener noreferrer"},$=t(`<p>The code challenge should be a Base64 encoded string with URL and filename-safe characters. The trailing <code>&#39;=&#39;</code> characters should be removed and no line breaks, whitespace, or other additional characters should be present.</p><pre><code>$encoded = base64_encode(hash(&#39;sha256&#39;, $code_verifier, true));

$codeChallenge = strtr(rtrim($encoded, &#39;=&#39;), &#39;+/&#39;, &#39;-_&#39;);
</code></pre><p><a name="code-grant-pkce-redirecting-for-authorization"></a></p><h4 id="redirecting-for-authorization-1" tabindex="-1"><a class="header-anchor" href="#redirecting-for-authorization-1" aria-hidden="true">#</a> Redirecting For Authorization</h4><p>Once a client has been created, you may use the client ID and the generated code verifier and code challenge to request an authorization code and access token from your application. First, the consuming application should make a redirect request to your application&#39;s <code>/oauth/authorize</code> route:</p><pre><code>use Illuminate\\Http\\Request;
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
</code></pre><p><a name="code-grant-pkce-converting-authorization-codes-to-access-tokens"></a></p><h4 id="converting-authorization-codes-to-access-tokens-1" tabindex="-1"><a class="header-anchor" href="#converting-authorization-codes-to-access-tokens-1" aria-hidden="true">#</a> Converting Authorization Codes To Access Tokens</h4><p>If the user approves the authorization request, they will be redirected back to the consuming application. The consumer should verify the <code>state</code> parameter against the value that was stored prior to the redirect, as in the standard Authorization Code Grant.</p><p>If the state parameter matches, the consumer should issue a <code>POST</code> request to your application to request an access token. The request should include the authorization code that was issued by your application when the user approved the authorization request along with the originally generated code verifier:</p><pre><code>use Illuminate\\Http\\Request;
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
</code></pre><p><a name="password-grant-tokens"></a></p><h2 id="password-grant-tokens" tabindex="-1"><a class="header-anchor" href="#password-grant-tokens" aria-hidden="true">#</a> Password Grant Tokens</h2>`,13),L=a("strong",null,"Warning",-1),E=a("br",null,null,-1),O={href:"https://oauth2.thephpleague.com/authorization-server/which-grant/",target:"_blank",rel:"noopener noreferrer"},F=t(`<p>The OAuth2 password grant allows your other first-party clients, such as a mobile application, to obtain an access token using an email address / username and password. This allows you to issue access tokens securely to your first-party clients without requiring your users to go through the entire OAuth2 authorization code redirect flow.</p><p><a name="creating-a-password-grant-client"></a></p><h3 id="creating-a-password-grant-client" tabindex="-1"><a class="header-anchor" href="#creating-a-password-grant-client" aria-hidden="true">#</a> Creating A Password Grant Client</h3><p>Before your application can issue tokens via the password grant, you will need to create a password grant client. You may do this using the <code>passport:client</code> Artisan command with the <code>--password</code> option. <strong>If you have already run the <code>passport:install</code> command, you do not need to run this command:</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan passport:client <span class="token parameter variable">--password</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="requesting-password-grant-tokens"></a></p><h3 id="requesting-tokens-2" tabindex="-1"><a class="header-anchor" href="#requesting-tokens-2" aria-hidden="true">#</a> Requesting Tokens</h3><p>Once you have created a password grant client, you may request an access token by issuing a <code>POST</code> request to the <code>/oauth/token</code> route with the user&#39;s email address and password. Remember, this route is already registered by Passport so there is no need to define it manually. If the request is successful, you will receive an <code>access_token</code> and <code>refresh_token</code> in the JSON response from the server:</p><pre><code>use Illuminate\\Support\\Facades\\Http;

$response = Http::asForm()-&gt;post(&#39;http://passport-app.test/oauth/token&#39;, [
    &#39;grant_type&#39; =&gt; &#39;password&#39;,
    &#39;client_id&#39; =&gt; &#39;client-id&#39;,
    &#39;client_secret&#39; =&gt; &#39;client-secret&#39;,
    &#39;username&#39; =&gt; &#39;taylor@laravel.com&#39;,
    &#39;password&#39; =&gt; &#39;my-password&#39;,
    &#39;scope&#39; =&gt; &#39;&#39;,
]);

return $response-&gt;json();
</code></pre><blockquote><p><strong>Note</strong><br> Remember, access tokens are long-lived by default. However, you are free to <a href="#configuration">configure your maximum access token lifetime</a> if needed.</p></blockquote><p><a name="requesting-all-scopes"></a></p><h3 id="requesting-all-scopes" tabindex="-1"><a class="header-anchor" href="#requesting-all-scopes" aria-hidden="true">#</a> Requesting All Scopes</h3><p>When using the password grant or client credentials grant, you may wish to authorize the token for all of the scopes supported by your application. You can do this by requesting the <code>*</code> scope. If you request the <code>*</code> scope, the <code>can</code> method on the token instance will always return <code>true</code>. This scope may only be assigned to a token that is issued using the <code>password</code> or <code>client_credentials</code> grant:</p><pre><code>use Illuminate\\Support\\Facades\\Http;

$response = Http::asForm()-&gt;post(&#39;http://passport-app.test/oauth/token&#39;, [
    &#39;grant_type&#39; =&gt; &#39;password&#39;,
    &#39;client_id&#39; =&gt; &#39;client-id&#39;,
    &#39;client_secret&#39; =&gt; &#39;client-secret&#39;,
    &#39;username&#39; =&gt; &#39;taylor@laravel.com&#39;,
    &#39;password&#39; =&gt; &#39;my-password&#39;,
    &#39;scope&#39; =&gt; &#39;*&#39;,
]);
</code></pre><p><a name="customizing-the-user-provider"></a></p><h3 id="customizing-the-user-provider" tabindex="-1"><a class="header-anchor" href="#customizing-the-user-provider" aria-hidden="true">#</a> Customizing The User Provider</h3><p>If your application uses more than one <a href="./authentication#introduction">authentication user provider</a>, you may specify which user provider the password grant client uses by providing a <code>--provider</code> option when creating the client via the <code>artisan passport:client --password</code> command. The given provider name should match a valid provider defined in your application&#39;s <code>config/auth.php</code> configuration file. You can then <a href="#via-middleware">protect your route using middleware</a> to ensure that only users from the guard&#39;s specified provider are authorized.</p><p><a name="customizing-the-username-field"></a></p><h3 id="customizing-the-username-field" tabindex="-1"><a class="header-anchor" href="#customizing-the-username-field" aria-hidden="true">#</a> Customizing The Username Field</h3><p>When authenticating using the password grant, Passport will use the <code>email</code> attribute of your authenticatable model as the &quot;username&quot;. However, you may customize this behavior by defining a <code>findForPassport</code> method on your model:</p><pre><code>&lt;?php

namespace App\\Models;

use Illuminate\\Foundation\\Auth\\User as Authenticatable;
use Illuminate\\Notifications\\Notifiable;
use Laravel\\Passport\\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, Notifiable;

    /**
     * Find the user instance for the given username.
     */
    public function findForPassport(string $username): User
    {
        return $this-&gt;where(&#39;username&#39;, $username)-&gt;first();
    }
}
</code></pre><p><a name="customizing-the-password-validation"></a></p><h3 id="customizing-the-password-validation" tabindex="-1"><a class="header-anchor" href="#customizing-the-password-validation" aria-hidden="true">#</a> Customizing The Password Validation</h3><p>When authenticating using the password grant, Passport will use the <code>password</code> attribute of your model to validate the given password. If your model does not have a <code>password</code> attribute or you wish to customize the password validation logic, you can define a <code>validateForPassportPasswordGrant</code> method on your model:</p><pre><code>&lt;?php

namespace App\\Models;

use Illuminate\\Foundation\\Auth\\User as Authenticatable;
use Illuminate\\Notifications\\Notifiable;
use Illuminate\\Support\\Facades\\Hash;
use Laravel\\Passport\\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, Notifiable;

    /**
     * Validate the password of the user for the Passport password grant.
     */
    public function validateForPassportPasswordGrant(string $password): bool
    {
        return Hash::check($password, $this-&gt;password);
    }
}
</code></pre><p><a name="implicit-grant-tokens"></a></p><h2 id="implicit-grant-tokens" tabindex="-1"><a class="header-anchor" href="#implicit-grant-tokens" aria-hidden="true">#</a> Implicit Grant Tokens</h2>`,27),N=a("strong",null,"Warning",-1),j=a("br",null,null,-1),H={href:"https://oauth2.thephpleague.com/authorization-server/which-grant/",target:"_blank",rel:"noopener noreferrer"},U=t(`<p>The implicit grant is similar to the authorization code grant; however, the token is returned to the client without exchanging an authorization code. This grant is most commonly used for JavaScript or mobile applications where the client credentials can&#39;t be securely stored. To enable the grant, call the <code>enableImplicitGrant</code> method in the <code>boot</code> method of your application&#39;s <code>App\\Providers\\AuthServiceProvider</code> class:</p><pre><code>/**
 * Register any authentication / authorization services.
 */
public function boot(): void
{
    Passport::enableImplicitGrant();
}
</code></pre><p>Once the grant has been enabled, developers may use their client ID to request an access token from your application. The consuming application should make a redirect request to your application&#39;s <code>/oauth/authorize</code> route like so:</p><pre><code>use Illuminate\\Http\\Request;

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
</code></pre><blockquote><p><strong>Note</strong><br> Remember, the <code>/oauth/authorize</code> route is already defined by Passport. You do not need to manually define this route.</p></blockquote><p><a name="client-credentials-grant-tokens"></a></p><h2 id="client-credentials-grant-tokens" tabindex="-1"><a class="header-anchor" href="#client-credentials-grant-tokens" aria-hidden="true">#</a> Client Credentials Grant Tokens</h2><p>The client credentials grant is suitable for machine-to-machine authentication. For example, you might use this grant in a scheduled job which is performing maintenance tasks over an API.</p><p>Before your application can issue tokens via the client credentials grant, you will need to create a client credentials grant client. You may do this using the <code>--client</code> option of the <code>passport:client</code> Artisan command:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan passport:client <span class="token parameter variable">--client</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Next, to use this grant type, you may add the <code>CheckClientCredentials</code> middleware to the <code>$middlewareAliases</code> property of your application&#39;s <code>app/Http/Kernel.php</code> file:</p><pre><code>use Laravel\\Passport\\Http\\Middleware\\CheckClientCredentials;

protected $middlewareAliases = [
    &#39;client&#39; =&gt; CheckClientCredentials::class,
];
</code></pre><p>Then, attach the middleware to a route:</p><pre><code>Route::get(&#39;/orders&#39;, function (Request $request) {
    ...
})-&gt;middleware(&#39;client&#39;);
</code></pre><p>To restrict access to the route to specific scopes, you may provide a comma-delimited list of the required scopes when attaching the <code>client</code> middleware to the route:</p><pre><code>Route::get(&#39;/orders&#39;, function (Request $request) {
    ...
})-&gt;middleware(&#39;client:check-status,your-scope&#39;);
</code></pre><p><a name="retrieving-tokens"></a></p><h3 id="retrieving-tokens" tabindex="-1"><a class="header-anchor" href="#retrieving-tokens" aria-hidden="true">#</a> Retrieving Tokens</h3><p>To retrieve a token using this grant type, make a request to the <code>oauth/token</code> endpoint:</p><pre><code>use Illuminate\\Support\\Facades\\Http;

$response = Http::asForm()-&gt;post(&#39;http://passport-app.test/oauth/token&#39;, [
    &#39;grant_type&#39; =&gt; &#39;client_credentials&#39;,
    &#39;client_id&#39; =&gt; &#39;client-id&#39;,
    &#39;client_secret&#39; =&gt; &#39;client-secret&#39;,
    &#39;scope&#39; =&gt; &#39;your-scope&#39;,
]);

return $response-&gt;json()[&#39;access_token&#39;];
</code></pre><p><a name="personal-access-tokens"></a></p><h2 id="personal-access-tokens" tabindex="-1"><a class="header-anchor" href="#personal-access-tokens" aria-hidden="true">#</a> Personal Access Tokens</h2><p>Sometimes, your users may want to issue access tokens to themselves without going through the typical authorization code redirect flow. Allowing users to issue tokens to themselves via your application&#39;s UI can be useful for allowing users to experiment with your API or may serve as a simpler approach to issuing access tokens in general.</p><blockquote><p><strong>Note</strong><br> If your application is primarily using Passport to issue personal access tokens, consider using <a href="./sanctum">Laravel Sanctum</a>, Laravel&#39;s light-weight first-party library for issuing API access tokens.</p></blockquote><p><a name="creating-a-personal-access-client"></a></p><h3 id="creating-a-personal-access-client" tabindex="-1"><a class="header-anchor" href="#creating-a-personal-access-client" aria-hidden="true">#</a> Creating A Personal Access Client</h3><p>Before your application can issue personal access tokens, you will need to create a personal access client. You may do this by executing the <code>passport:client</code> Artisan command with the <code>--personal</code> option. If you have already run the <code>passport:install</code> command, you do not need to run this command:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan passport:client <span class="token parameter variable">--personal</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>After creating your personal access client, place the client&#39;s ID and plain-text secret value in your application&#39;s <code>.env</code> file:</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token key attr-name">PASSPORT_PERSONAL_ACCESS_CLIENT_ID</span><span class="token punctuation">=</span><span class="token value attr-value">&quot;<span class="token inner-value">client-id-value</span>&quot;</span>
<span class="token key attr-name">PASSPORT_PERSONAL_ACCESS_CLIENT_SECRET</span><span class="token punctuation">=</span><span class="token value attr-value">&quot;<span class="token inner-value">unhashed-client-secret-value</span>&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="managing-personal-access-tokens"></a></p><h3 id="managing-personal-access-tokens" tabindex="-1"><a class="header-anchor" href="#managing-personal-access-tokens" aria-hidden="true">#</a> Managing Personal Access Tokens</h3><p>Once you have created a personal access client, you may issue tokens for a given user using the <code>createToken</code> method on the <code>App\\Models\\User</code> model instance. The <code>createToken</code> method accepts the name of the token as its first argument and an optional array of <a href="#token-scopes">scopes</a> as its second argument:</p><pre><code>use App\\Models\\User;

$user = User::find(1);

// Creating a token without scopes...
$token = $user-&gt;createToken(&#39;Token Name&#39;)-&gt;accessToken;

// Creating a token with scopes...
$token = $user-&gt;createToken(&#39;My Token&#39;, [&#39;place-orders&#39;])-&gt;accessToken;
</code></pre><p><a name="personal-access-tokens-json-api"></a></p><h4 id="json-api-2" tabindex="-1"><a class="header-anchor" href="#json-api-2" aria-hidden="true">#</a> JSON API</h4>`,36),M={href:"https://github.com/mzabriskie/axios",target:"_blank",rel:"noopener noreferrer"},D=t(`<p>The JSON API is guarded by the <code>web</code> and <code>auth</code> middleware; therefore, it may only be called from your own application. It is not able to be called from an external source.</p><p><a name="get-oauthscopes"></a></p><h4 id="get-oauth-scopes" tabindex="-1"><a class="header-anchor" href="#get-oauth-scopes" aria-hidden="true">#</a> <code>GET /oauth/scopes</code></h4><p>This route returns all of the <a href="#token-scopes">scopes</a> defined for your application. You may use this route to list the scopes a user may assign to a personal access token:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/oauth/scopes&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="get-oauthpersonal-access-tokens"></a></p><h4 id="get-oauth-personal-access-tokens" tabindex="-1"><a class="header-anchor" href="#get-oauth-personal-access-tokens" aria-hidden="true">#</a> <code>GET /oauth/personal-access-tokens</code></h4><p>This route returns all of the personal access tokens that the authenticated user has created. This is primarily useful for listing all of the user&#39;s tokens so that they may edit or revoke them:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/oauth/personal-access-tokens&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="post-oauthpersonal-access-tokens"></a></p><h4 id="post-oauth-personal-access-tokens" tabindex="-1"><a class="header-anchor" href="#post-oauth-personal-access-tokens" aria-hidden="true">#</a> <code>POST /oauth/personal-access-tokens</code></h4><p>This route creates new personal access tokens. It requires two pieces of data: the token&#39;s <code>name</code> and the <code>scopes</code> that should be assigned to the token:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Token Name&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">scopes</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

axios<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&#39;/oauth/personal-access-tokens&#39;</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>data<span class="token punctuation">.</span>accessToken<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">catch</span> <span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token comment">// List errors on response...</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="delete-oauthpersonal-access-tokenstoken-id"></a></p><h4 id="delete-oauth-personal-access-tokens-token-id" tabindex="-1"><a class="header-anchor" href="#delete-oauth-personal-access-tokens-token-id" aria-hidden="true">#</a> <code>DELETE /oauth/personal-access-tokens/{token-id}</code></h4><p>This route may be used to revoke personal access tokens:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>axios<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token string">&#39;/oauth/personal-access-tokens/&#39;</span> <span class="token operator">+</span> tokenId<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="protecting-routes"></a></p><h2 id="protecting-routes" tabindex="-1"><a class="header-anchor" href="#protecting-routes" aria-hidden="true">#</a> Protecting Routes</h2><p><a name="via-middleware"></a></p><h3 id="via-middleware" tabindex="-1"><a class="header-anchor" href="#via-middleware" aria-hidden="true">#</a> Via Middleware</h3><p>Passport includes an <a href="./authentication#adding-custom-guards">authentication guard</a> that will validate access tokens on incoming requests. Once you have configured the <code>api</code> guard to use the <code>passport</code> driver, you only need to specify the <code>auth:api</code> middleware on any routes that should require a valid access token:</p><pre><code>Route::get(&#39;/user&#39;, function () {
    // ...
})-&gt;middleware(&#39;auth:api&#39;);
</code></pre><blockquote><p><strong>Warning</strong><br> If you are using the <a href="#client-credentials-grant-tokens">client credentials grant</a>, you should use <a href="#client-credentials-grant-tokens">the <code>client</code> middleware</a> to protect your routes instead of the <code>auth:api</code> middleware.</p></blockquote><p><a name="multiple-authentication-guards"></a></p><h4 id="multiple-authentication-guards" tabindex="-1"><a class="header-anchor" href="#multiple-authentication-guards" aria-hidden="true">#</a> Multiple Authentication Guards</h4><p>If your application authenticates different types of users that perhaps use entirely different Eloquent models, you will likely need to define a guard configuration for each user provider type in your application. This allows you to protect requests intended for specific user providers. For example, given the following guard configuration the <code>config/auth.php</code> configuration file:</p><pre><code>&#39;api&#39; =&gt; [
    &#39;driver&#39; =&gt; &#39;passport&#39;,
    &#39;provider&#39; =&gt; &#39;users&#39;,
],

&#39;api-customers&#39; =&gt; [
    &#39;driver&#39; =&gt; &#39;passport&#39;,
    &#39;provider&#39; =&gt; &#39;customers&#39;,
],
</code></pre><p>The following route will utilize the <code>api-customers</code> guard, which uses the <code>customers</code> user provider, to authenticate incoming requests:</p><pre><code>Route::get(&#39;/customer&#39;, function () {
    // ...
})-&gt;middleware(&#39;auth:api-customers&#39;);
</code></pre><blockquote><p><strong>Note</strong><br> For more information on using multiple user providers with Passport, please consult the <a href="#customizing-the-user-provider">password grant documentation</a>.</p></blockquote><p><a name="passing-the-access-token"></a></p><h3 id="passing-the-access-token" tabindex="-1"><a class="header-anchor" href="#passing-the-access-token" aria-hidden="true">#</a> Passing The Access Token</h3><p>When calling routes that are protected by Passport, your application&#39;s API consumers should specify their access token as a <code>Bearer</code> token in the <code>Authorization</code> header of their request. For example, when using the Guzzle HTTP library:</p><pre><code>use Illuminate\\Support\\Facades\\Http;

$response = Http::withHeaders([
    &#39;Accept&#39; =&gt; &#39;application/json&#39;,
    &#39;Authorization&#39; =&gt; &#39;Bearer &#39;.$accessToken,
])-&gt;get(&#39;https://passport-app.test/api/user&#39;);

return $response-&gt;json();
</code></pre><p><a name="token-scopes"></a></p><h2 id="token-scopes" tabindex="-1"><a class="header-anchor" href="#token-scopes" aria-hidden="true">#</a> Token Scopes</h2><p>Scopes allow your API clients to request a specific set of permissions when requesting authorization to access an account. For example, if you are building an e-commerce application, not all API consumers will need the ability to place orders. Instead, you may allow the consumers to only request authorization to access order shipment statuses. In other words, scopes allow your application&#39;s users to limit the actions a third-party application can perform on their behalf.</p><p><a name="defining-scopes"></a></p><h3 id="defining-scopes" tabindex="-1"><a class="header-anchor" href="#defining-scopes" aria-hidden="true">#</a> Defining Scopes</h3><p>You may define your API&#39;s scopes using the <code>Passport::tokensCan</code> method in the <code>boot</code> method of your application&#39;s <code>App\\Providers\\AuthServiceProvider</code> class. The <code>tokensCan</code> method accepts an array of scope names and scope descriptions. The scope description may be anything you wish and will be displayed to users on the authorization approval screen:</p><pre><code>/**
 * Register any authentication / authorization services.
 */
public function boot(): void
{
    Passport::tokensCan([
        &#39;place-orders&#39; =&gt; &#39;Place orders&#39;,
        &#39;check-status&#39; =&gt; &#39;Check order status&#39;,
    ]);
}
</code></pre><p><a name="default-scope"></a></p><h3 id="default-scope" tabindex="-1"><a class="header-anchor" href="#default-scope" aria-hidden="true">#</a> Default Scope</h3><p>If a client does not request any specific scopes, you may configure your Passport server to attach default scope(s) to the token using the <code>setDefaultScope</code> method. Typically, you should call this method from the <code>boot</code> method of your application&#39;s <code>App\\Providers\\AuthServiceProvider</code> class:</p><pre><code>use Laravel\\Passport\\Passport;

Passport::tokensCan([
    &#39;place-orders&#39; =&gt; &#39;Place orders&#39;,
    &#39;check-status&#39; =&gt; &#39;Check order status&#39;,
]);

Passport::setDefaultScope([
    &#39;check-status&#39;,
    &#39;place-orders&#39;,
]);
</code></pre><blockquote><p><strong>Note</strong> Passport&#39;s default scopes do not apply to personal access tokens that are generated by the user.</p></blockquote><p><a name="assigning-scopes-to-tokens"></a></p><h3 id="assigning-scopes-to-tokens" tabindex="-1"><a class="header-anchor" href="#assigning-scopes-to-tokens" aria-hidden="true">#</a> Assigning Scopes To Tokens</h3><p><a name="when-requesting-authorization-codes"></a></p><h4 id="when-requesting-authorization-codes" tabindex="-1"><a class="header-anchor" href="#when-requesting-authorization-codes" aria-hidden="true">#</a> When Requesting Authorization Codes</h4><p>When requesting an access token using the authorization code grant, consumers should specify their desired scopes as the <code>scope</code> query string parameter. The <code>scope</code> parameter should be a space-delimited list of scopes:</p><pre><code>Route::get(&#39;/redirect&#39;, function () {
    $query = http_build_query([
        &#39;client_id&#39; =&gt; &#39;client-id&#39;,
        &#39;redirect_uri&#39; =&gt; &#39;http://example.com/callback&#39;,
        &#39;response_type&#39; =&gt; &#39;code&#39;,
        &#39;scope&#39; =&gt; &#39;place-orders check-status&#39;,
    ]);

    return redirect(&#39;http://passport-app.test/oauth/authorize?&#39;.$query);
});
</code></pre><p><a name="when-issuing-personal-access-tokens"></a></p><h4 id="when-issuing-personal-access-tokens" tabindex="-1"><a class="header-anchor" href="#when-issuing-personal-access-tokens" aria-hidden="true">#</a> When Issuing Personal Access Tokens</h4><p>If you are issuing personal access tokens using the <code>App\\Models\\User</code> model&#39;s <code>createToken</code> method, you may pass the array of desired scopes as the second argument to the method:</p><pre><code>$token = $user-&gt;createToken(&#39;My Token&#39;, [&#39;place-orders&#39;])-&gt;accessToken;
</code></pre><p><a name="checking-scopes"></a></p><h3 id="checking-scopes" tabindex="-1"><a class="header-anchor" href="#checking-scopes" aria-hidden="true">#</a> Checking Scopes</h3><p>Passport includes two middleware that may be used to verify that an incoming request is authenticated with a token that has been granted a given scope. To get started, add the following middleware to the <code>$middlewareAliases</code> property of your <code>app/Http/Kernel.php</code> file:</p><pre><code>&#39;scopes&#39; =&gt; \\Laravel\\Passport\\Http\\Middleware\\CheckScopes::class,
&#39;scope&#39; =&gt; \\Laravel\\Passport\\Http\\Middleware\\CheckForAnyScope::class,
</code></pre><p><a name="check-for-all-scopes"></a></p><h4 id="check-for-all-scopes" tabindex="-1"><a class="header-anchor" href="#check-for-all-scopes" aria-hidden="true">#</a> Check For All Scopes</h4><p>The <code>scopes</code> middleware may be assigned to a route to verify that the incoming request&#39;s access token has all of the listed scopes:</p><pre><code>Route::get(&#39;/orders&#39;, function () {
    // Access token has both &quot;check-status&quot; and &quot;place-orders&quot; scopes...
})-&gt;middleware([&#39;auth:api&#39;, &#39;scopes:check-status,place-orders&#39;]);
</code></pre><p><a name="check-for-any-scopes"></a></p><h4 id="check-for-any-scopes" tabindex="-1"><a class="header-anchor" href="#check-for-any-scopes" aria-hidden="true">#</a> Check For Any Scopes</h4><p>The <code>scope</code> middleware may be assigned to a route to verify that the incoming request&#39;s access token has <em>at least one</em> of the listed scopes:</p><pre><code>Route::get(&#39;/orders&#39;, function () {
    // Access token has either &quot;check-status&quot; or &quot;place-orders&quot; scope...
})-&gt;middleware([&#39;auth:api&#39;, &#39;scope:check-status,place-orders&#39;]);
</code></pre><p><a name="checking-scopes-on-a-token-instance"></a></p><h4 id="checking-scopes-on-a-token-instance" tabindex="-1"><a class="header-anchor" href="#checking-scopes-on-a-token-instance" aria-hidden="true">#</a> Checking Scopes On A Token Instance</h4><p>Once an access token authenticated request has entered your application, you may still check if the token has a given scope using the <code>tokenCan</code> method on the authenticated <code>App\\Models\\User</code> instance:</p><pre><code>use Illuminate\\Http\\Request;

Route::get(&#39;/orders&#39;, function (Request $request) {
    if ($request-&gt;user()-&gt;tokenCan(&#39;place-orders&#39;)) {
        // ...
    }
});
</code></pre><p><a name="additional-scope-methods"></a></p><h4 id="additional-scope-methods" tabindex="-1"><a class="header-anchor" href="#additional-scope-methods" aria-hidden="true">#</a> Additional Scope Methods</h4><p>The <code>scopeIds</code> method will return an array of all defined IDs / names:</p><pre><code>use Laravel\\Passport\\Passport;

Passport::scopeIds();
</code></pre><p>The <code>scopes</code> method will return an array of all defined scopes as instances of <code>Laravel\\Passport\\Scope</code>:</p><pre><code>Passport::scopes();
</code></pre><p>The <code>scopesFor</code> method will return an array of <code>Laravel\\Passport\\Scope</code> instances matching the given IDs / names:</p><pre><code>Passport::scopesFor([&#39;place-orders&#39;, &#39;check-status&#39;]);
</code></pre><p>You may determine if a given scope has been defined using the <code>hasScope</code> method:</p><pre><code>Passport::hasScope(&#39;place-orders&#39;);
</code></pre><p><a name="consuming-your-api-with-javascript"></a></p><h2 id="consuming-your-api-with-javascript" tabindex="-1"><a class="header-anchor" href="#consuming-your-api-with-javascript" aria-hidden="true">#</a> Consuming Your API With JavaScript</h2><p>When building an API, it can be extremely useful to be able to consume your own API from your JavaScript application. This approach to API development allows your own application to consume the same API that you are sharing with the world. The same API may be consumed by your web application, mobile applications, third-party applications, and any SDKs that you may publish on various package managers.</p><p>Typically, if you want to consume your API from your JavaScript application, you would need to manually send an access token to the application and pass it with each request to your application. However, Passport includes a middleware that can handle this for you. All you need to do is add the <code>CreateFreshApiToken</code> middleware to your <code>web</code> middleware group in your <code>app/Http/Kernel.php</code> file:</p><pre><code>&#39;web&#39; =&gt; [
    // Other middleware...
    \\Laravel\\Passport\\Http\\Middleware\\CreateFreshApiToken::class,
],
</code></pre><blockquote><p><strong>Warning</strong><br> You should ensure that the <code>CreateFreshApiToken</code> middleware is the last middleware listed in your middleware stack.</p></blockquote><p>This middleware will attach a <code>laravel_token</code> cookie to your outgoing responses. This cookie contains an encrypted JWT that Passport will use to authenticate API requests from your JavaScript application. The JWT has a lifetime equal to your <code>session.lifetime</code> configuration value. Now, since the browser will automatically send the cookie with all subsequent requests, you may make requests to your application&#39;s API without explicitly passing an access token:</p><pre><code>axios.get(&#39;/api/user&#39;)
    .then(response =&gt; {
        console.log(response.data);
    });
</code></pre><p><a name="customizing-the-cookie-name"></a></p><h4 id="customizing-the-cookie-name" tabindex="-1"><a class="header-anchor" href="#customizing-the-cookie-name" aria-hidden="true">#</a> Customizing The Cookie Name</h4><p>If needed, you can customize the <code>laravel_token</code> cookie&#39;s name using the <code>Passport::cookie</code> method. Typically, this method should be called from the <code>boot</code> method of your application&#39;s <code>App\\Providers\\AuthServiceProvider</code> class:</p><pre><code>/**
 * Register any authentication / authorization services.
 */
public function boot(): void
{
    Passport::cookie(&#39;custom_name&#39;);
}
</code></pre><p><a name="csrf-protection"></a></p><h4 id="csrf-protection" tabindex="-1"><a class="header-anchor" href="#csrf-protection" aria-hidden="true">#</a> CSRF Protection</h4><p>When using this method of authentication, you will need to ensure a valid CSRF token header is included in your requests. The default Laravel JavaScript scaffolding includes an Axios instance, which will automatically use the encrypted <code>XSRF-TOKEN</code> cookie value to send an <code>X-XSRF-TOKEN</code> header on same-origin requests.</p><blockquote><p><strong>Note</strong><br> If you choose to send the <code>X-CSRF-TOKEN</code> header instead of <code>X-XSRF-TOKEN</code>, you will need to use the unencrypted token provided by <code>csrf_token()</code>.</p></blockquote><p><a name="events"></a></p><h2 id="events" tabindex="-1"><a class="header-anchor" href="#events" aria-hidden="true">#</a> Events</h2><p>Passport raises events when issuing access tokens and refresh tokens. You may use these events to prune or revoke other access tokens in your database. If you would like, you may attach listeners to these events in your application&#39;s <code>App\\Providers\\EventServiceProvider</code> class:</p><pre><code>/**
 * The event listener mappings for the application.
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
</code></pre><p><a name="testing"></a></p><h2 id="testing" tabindex="-1"><a class="header-anchor" href="#testing" aria-hidden="true">#</a> Testing</h2><p>Passport&#39;s <code>actingAs</code> method may be used to specify the currently authenticated user as well as its scopes. The first argument given to the <code>actingAs</code> method is the user instance and the second is an array of scopes that should be granted to the user&#39;s token:</p><pre><code>use App\\Models\\User;
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
</code></pre><p>Passport&#39;s <code>actingAsClient</code> method may be used to specify the currently authenticated client as well as its scopes. The first argument given to the <code>actingAsClient</code> method is the client instance and the second is an array of scopes that should be granted to the client&#39;s token:</p><pre><code>use Laravel\\Passport\\Client;
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
</code></pre>`,109);function Y(W,G){const n=i("ExternalLinkIcon");return r(),c("div",null,[d,a("p",null,[a("a",l,[e("Laravel Passport"),s(n)]),e(" provides a full OAuth2 server implementation for your Laravel application in a matter of minutes. Passport is built on top of the "),a("a",u,[e("League OAuth2 server"),s(n)]),e(" that is maintained by Andy Millington and Simon Hamp.")]),a("blockquote",null,[a("p",null,[h,g,e(" This documentation assumes you are already familiar with OAuth2. If you do not know anything about OAuth2, consider familiarizing yourself with the general "),a("a",m,[e("terminology"),s(n)]),e(" and features of OAuth2 before continuing.")])]),k,a("p",null,[e("When upgrading to a new major version of Passport, it's important that you carefully review "),a("a",v,[e("the upgrade guide"),s(n)]),e(".")]),f,a("p",null,[e("Then, you may copy the routes defined by Passport in "),a("a",y,[e("its routes file"),s(n)]),e(" to your application's "),b,e(" file and modify them to your liking:")]),w,a("p",null,[e("However, you will need to pair Passport's JSON API with your own frontend to provide a dashboard for your users to manage their clients. Below, we'll review all of the API endpoints for managing clients. For convenience, we'll use "),a("a",P,[e("Axios"),s(n)]),e(" to demonstrate making HTTP requests to the endpoints.")]),T,a("p",null,[e("Passport also includes a JSON API for managing authorized access tokens. You may pair this with your own frontend to offer your users a dashboard for managing access tokens. For convenience, we'll use "),a("a",q,[e("Axios"),s(n)]),e(" to demonstrate making HTTP requests to the endpoints. The JSON API is guarded by the "),A,e(" and "),_,e(" middleware; therefore, it may only be called from your own application.")]),x,a("p",null,[e("The code verifier should be a random string of between 43 and 128 characters containing letters, numbers, and "),I,e(", "),C,e(", "),z,e(", "),S,e(" characters, as defined in the "),a("a",R,[e("RFC 7636 specification"),s(n)]),e(".")]),$,a("blockquote",null,[a("p",null,[L,E,e(" We no longer recommend using password grant tokens. Instead, you should choose "),a("a",O,[e("a grant type that is currently recommended by OAuth2 Server"),s(n)]),e(".")])]),F,a("blockquote",null,[a("p",null,[N,j,e(" We no longer recommend using implicit grant tokens. Instead, you should choose "),a("a",H,[e("a grant type that is currently recommended by OAuth2 Server"),s(n)]),e(".")])]),U,a("p",null,[e("Passport also includes a JSON API for managing personal access tokens. You may pair this with your own frontend to offer your users a dashboard for managing personal access tokens. Below, we'll review all of the API endpoints for managing personal access tokens. For convenience, we'll use "),a("a",M,[e("Axios"),s(n)]),e(" to demonstrate making HTTP requests to the endpoints.")]),D])}const J=o(p,[["render",Y],["__file","passport.html.vue"]]);export{J as default};
