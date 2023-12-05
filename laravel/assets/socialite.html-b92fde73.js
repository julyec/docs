import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as n,o as s,c,b as t,d as e,e as o,a as i}from"./app-8cdff07c.js";const d={},l=i('<h1 id="laravel-socialite" tabindex="-1"><a class="header-anchor" href="#laravel-socialite" aria-hidden="true">#</a> Laravel Socialite</h1><ul><li><a href="#introduction">Introduction</a></li><li><a href="#installation">Installation</a></li><li><a href="#upgrading-socialite">Upgrading Socialite</a></li><li><a href="#configuration">Configuration</a></li><li><a href="#authentication">Authentication</a><ul><li><a href="#routing">Routing</a></li><li><a href="#authentication-and-storage">Authentication &amp; Storage</a></li><li><a href="#access-scopes">Access Scopes</a></li><li><a href="#slack-bot-scopes">Slack Bot Scopes</a></li><li><a href="#optional-parameters">Optional Parameters</a></li></ul></li><li><a href="#retrieving-user-details">Retrieving User Details</a></li></ul><p><a name="introduction"></a></p><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2>',4),h={href:"https://github.com/laravel/socialite",target:"_blank",rel:"noopener noreferrer"},u=t("strong",null,"Note",-1),p=t("br",null,null,-1),g={href:"https://socialiteproviders.com/",target:"_blank",rel:"noopener noreferrer"},f=i(`<p><a name="installation"></a></p><h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h2><p>To get started with Socialite, use the Composer package manager to add the package to your project&#39;s dependencies:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">composer</span> require laravel/socialite
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="upgrading-socialite"></a></p><h2 id="upgrading-socialite" tabindex="-1"><a class="header-anchor" href="#upgrading-socialite" aria-hidden="true">#</a> Upgrading Socialite</h2>`,6),m={href:"https://github.com/laravel/socialite/blob/master/UPGRADE.md",target:"_blank",rel:"noopener noreferrer"},b=i(`<p><a name="configuration"></a></p><h2 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> Configuration</h2><p>Before using Socialite, you will need to add credentials for the OAuth providers your application utilizes. Typically, these credentials may be retrieved by creating a &quot;developer application&quot; within the dashboard of the service you will be authenticating with.</p><p>These credentials should be placed in your application&#39;s <code>config/services.php</code> configuration file, and should use the key <code>facebook</code>, <code>twitter</code> (OAuth 1.0), <code>twitter-oauth-2</code> (OAuth 2.0), <code>linkedin-openid</code>, <code>google</code>, <code>github</code>, <code>gitlab</code>, <code>bitbucket</code>, or <code>slack</code>, depending on the providers your application requires:</p><pre><code>&#39;github&#39; =&gt; [
    &#39;client_id&#39; =&gt; env(&#39;GITHUB_CLIENT_ID&#39;),
    &#39;client_secret&#39; =&gt; env(&#39;GITHUB_CLIENT_SECRET&#39;),
    &#39;redirect&#39; =&gt; &#39;http://example.com/callback-url&#39;,
],
</code></pre><blockquote><p><strong>Note</strong><br> If the <code>redirect</code> option contains a relative path, it will automatically be resolved to a fully qualified URL.</p></blockquote><p><a name="authentication"></a></p><h2 id="authentication" tabindex="-1"><a class="header-anchor" href="#authentication" aria-hidden="true">#</a> Authentication</h2><p><a name="routing"></a></p><h3 id="routing" tabindex="-1"><a class="header-anchor" href="#routing" aria-hidden="true">#</a> Routing</h3><p>To authenticate users using an OAuth provider, you will need two routes: one for redirecting the user to the OAuth provider, and another for receiving the callback from the provider after authentication. The example routes below demonstrate the implementation of both routes:</p><pre><code>use Laravel\\Socialite\\Facades\\Socialite;

Route::get(&#39;/auth/redirect&#39;, function () {
    return Socialite::driver(&#39;github&#39;)-&gt;redirect();
});

Route::get(&#39;/auth/callback&#39;, function () {
    $user = Socialite::driver(&#39;github&#39;)-&gt;user();

    // $user-&gt;token
});
</code></pre><p>The <code>redirect</code> method provided by the <code>Socialite</code> facade takes care of redirecting the user to the OAuth provider, while the <code>user</code> method will examine the incoming request and retrieve the user&#39;s information from the provider after they have approved the authentication request.</p><p><a name="authentication-and-storage"></a></p><h3 id="authentication-storage" tabindex="-1"><a class="header-anchor" href="#authentication-storage" aria-hidden="true">#</a> Authentication &amp; Storage</h3><p>Once the user has been retrieved from the OAuth provider, you may determine if the user exists in your application&#39;s database and <a href="./authentication#authenticate-a-user-instance">authenticate the user</a>. If the user does not exist in your application&#39;s database, you will typically create a new record in your database to represent the user:</p><pre><code>use App\\Models\\User;
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
</code></pre><blockquote><p><strong>Note</strong><br> For more information regarding what user information is available from specific OAuth providers, please consult the documentation on <a href="#retrieving-user-details">retrieving user details</a>.</p></blockquote><p><a name="access-scopes"></a></p><h3 id="access-scopes" tabindex="-1"><a class="header-anchor" href="#access-scopes" aria-hidden="true">#</a> Access Scopes</h3><p>Before redirecting the user, you may use the <code>scopes</code> method to specify the &quot;scopes&quot; that should be included in the authentication request. This method will merge all previously specified scopes with the scopes that you specify:</p><pre><code>use Laravel\\Socialite\\Facades\\Socialite;

return Socialite::driver(&#39;github&#39;)
    -&gt;scopes([&#39;read:user&#39;, &#39;public_repo&#39;])
    -&gt;redirect();
</code></pre><p>You can overwrite all existing scopes on the authentication request using the <code>setScopes</code> method:</p><pre><code>return Socialite::driver(&#39;github&#39;)
    -&gt;setScopes([&#39;read:user&#39;, &#39;public_repo&#39;])
    -&gt;redirect();
</code></pre><p><a name="slack-bot-scopes"></a></p><h3 id="slack-bot-scopes" tabindex="-1"><a class="header-anchor" href="#slack-bot-scopes" aria-hidden="true">#</a> Slack Bot Scopes</h3>`,26),v={href:"https://api.slack.com/authentication/token-types",target:"_blank",rel:"noopener noreferrer"},k={href:"https://api.slack.com/scopes",target:"_blank",rel:"noopener noreferrer"},y=t("div",{class:"content-list",markdown:"1"},[t("ul",null,[t("li",null,[e("Bot (prefixed with "),t("code",null,"xoxb-"),e(")")]),t("li",null,[e("User (prefixed with "),t("code",null,"xoxp-"),e(")")])])],-1),S=i(`<p>By default, the <code>slack</code> driver will generate a <code>user</code> token and invoking the driver&#39;s <code>user</code> method will return the user&#39;s details.</p><p>Bot tokens are primarily useful if your application will be sending notifications to external Slack workspaces that are owned by your application&#39;s users. To generate a bot token, invoke the <code>asBotUser</code> method before redirecting the user to Slack for authentication:</p><pre><code>return Socialite::driver(&#39;slack&#39;)
    -&gt;asBotUser()
    -&gt;setScopes([&#39;chat:write&#39;, &#39;chat:write.public&#39;, &#39;chat:write.customize&#39;])
    -&gt;redirect();
</code></pre><p>In addition, you must invoke the <code>asBotUser</code> method before invoking the <code>user</code> method after Slack redirects the user back to your application after authentication:</p><pre><code>$user = Socialite::driver(&#39;slack&#39;)-&gt;asBotUser()-&gt;user();
</code></pre><p>When generating a bot token, the <code>user</code> method will still return a <code>Laravel\\Socialite\\Two\\User</code> instance; however, only the <code>token</code> property will be hydrated. This token may be stored in order to <a href="./notifications#notifying-external-slack-workspaces">send notifications to the authenticated user&#39;s Slack workspaces</a>.</p><p><a name="optional-parameters"></a></p><h3 id="optional-parameters" tabindex="-1"><a class="header-anchor" href="#optional-parameters" aria-hidden="true">#</a> Optional Parameters</h3><p>A number of OAuth providers support other optional parameters on the redirect request. To include any optional parameters in the request, call the <code>with</code> method with an associative array:</p><pre><code>use Laravel\\Socialite\\Facades\\Socialite;

return Socialite::driver(&#39;google&#39;)
    -&gt;with([&#39;hd&#39; =&gt; &#39;example.com&#39;])
    -&gt;redirect();
</code></pre><blockquote><p><strong>Warning</strong><br> When using the <code>with</code> method, be careful not to pass any reserved keywords such as <code>state</code> or <code>response_type</code>.</p></blockquote><p><a name="retrieving-user-details"></a></p><h2 id="retrieving-user-details" tabindex="-1"><a class="header-anchor" href="#retrieving-user-details" aria-hidden="true">#</a> Retrieving User Details</h2><p>After the user is redirected back to your application&#39;s authentication callback route, you may retrieve the user&#39;s details using Socialite&#39;s <code>user</code> method. The user object returned by the <code>user</code> method provides a variety of properties and methods you may use to store information about the user in your own database.</p><p>Differing properties and methods may be available on this object depending on whether the OAuth provider you are authenticating with supports OAuth 1.0 or OAuth 2.0:</p><pre><code>use Laravel\\Socialite\\Facades\\Socialite;

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
</code></pre><p><a name="retrieving-user-details-from-a-token-oauth2"></a></p><h4 id="retrieving-user-details-from-a-token-oauth2" tabindex="-1"><a class="header-anchor" href="#retrieving-user-details-from-a-token-oauth2" aria-hidden="true">#</a> Retrieving User Details From A Token (OAuth2)</h4><p>If you already have a valid access token for a user, you can retrieve their user details using Socialite&#39;s <code>userFromToken</code> method:</p><pre><code>use Laravel\\Socialite\\Facades\\Socialite;

$user = Socialite::driver(&#39;github&#39;)-&gt;userFromToken($token);
</code></pre><p><a name="retrieving-user-details-from-a-token-and-secret-oauth1"></a></p><h4 id="retrieving-user-details-from-a-token-and-secret-oauth1" tabindex="-1"><a class="header-anchor" href="#retrieving-user-details-from-a-token-and-secret-oauth1" aria-hidden="true">#</a> Retrieving User Details From A Token And Secret (OAuth1)</h4><p>If you already have a valid token and secret for a user, you can retrieve their user details using Socialite&#39;s <code>userFromTokenAndSecret</code> method:</p><pre><code>use Laravel\\Socialite\\Facades\\Socialite;

$user = Socialite::driver(&#39;twitter&#39;)-&gt;userFromTokenAndSecret($token, $secret);
</code></pre><p><a name="stateless-authentication"></a></p><h4 id="stateless-authentication" tabindex="-1"><a class="header-anchor" href="#stateless-authentication" aria-hidden="true">#</a> Stateless Authentication</h4><p>The <code>stateless</code> method may be used to disable session state verification. This is useful when adding social authentication to a stateless API that does not utilize cookie based sessions:</p><pre><code>use Laravel\\Socialite\\Facades\\Socialite;

return Socialite::driver(&#39;google&#39;)-&gt;stateless()-&gt;user();
</code></pre><blockquote><p><strong>Warning</strong><br> Stateless authentication is not available for the Twitter OAuth 1.0 driver.</p></blockquote>`,29);function w(_,A){const a=n("ExternalLinkIcon");return s(),c("div",null,[l,t("p",null,[e("In addition to typical, form based authentication, Laravel also provides a simple, convenient way to authenticate with OAuth providers using "),t("a",h,[e("Laravel Socialite"),o(a)]),e(". Socialite currently supports authentication via Facebook, Twitter, LinkedIn, Google, GitHub, GitLab, Bitbucket, and Slack.")]),t("blockquote",null,[t("p",null,[u,p,e(" Adapters for other platforms are available via the community driven "),t("a",g,[e("Socialite Providers"),o(a)]),e(" website.")])]),f,t("p",null,[e("When upgrading to a new major version of Socialite, it's important that you carefully review "),t("a",m,[e("the upgrade guide"),o(a)]),e(".")]),b,t("p",null,[e("Slack's API provides "),t("a",v,[e("different types of access tokens"),o(a)]),e(", each with their own set of "),t("a",k,[e("permission scopes"),o(a)]),e(". Socialite is compatible with both of the following Slack access tokens types:")]),y,S])}const T=r(d,[["render",w],["__file","socialite.html.vue"]]);export{T as default};
