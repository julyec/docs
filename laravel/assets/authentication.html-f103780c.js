import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as s,c,b as t,d as e,e as i,a as o}from"./app-06635a3b.js";const u={},d=o('<h1 id="authentication" tabindex="-1"><a class="header-anchor" href="#authentication" aria-hidden="true">#</a> Authentication</h1><ul><li><a href="#introduction">Introduction</a><ul><li><a href="#starter-kits">Starter Kits</a></li><li><a href="#introduction-database-considerations">Database Considerations</a></li><li><a href="#ecosystem-overview">Ecosystem Overview</a></li></ul></li><li><a href="#authentication-quickstart">Authentication Quickstart</a><ul><li><a href="#install-a-starter-kit">Install A Starter Kit</a></li><li><a href="#retrieving-the-authenticated-user">Retrieving The Authenticated User</a></li><li><a href="#protecting-routes">Protecting Routes</a></li><li><a href="#login-throttling">Login Throttling</a></li></ul></li><li><a href="#authenticating-users">Manually Authenticating Users</a><ul><li><a href="#remembering-users">Remembering Users</a></li><li><a href="#other-authentication-methods">Other Authentication Methods</a></li></ul></li><li><a href="#http-basic-authentication">HTTP Basic Authentication</a><ul><li><a href="#stateless-http-basic-authentication">Stateless HTTP Basic Authentication</a></li></ul></li><li><a href="#logging-out">Logging Out</a><ul><li><a href="#invalidating-sessions-on-other-devices">Invalidating Sessions On Other Devices</a></li></ul></li><li><a href="#password-confirmation">Password Confirmation</a><ul><li><a href="#password-confirmation-configuration">Configuration</a></li><li><a href="#password-confirmation-routing">Routing</a></li><li><a href="#password-confirmation-protecting-routes">Protecting Routes</a></li></ul></li><li><a href="#adding-custom-guards">Adding Custom Guards</a><ul><li><a href="#closure-request-guards">Closure Request Guards</a></li></ul></li><li><a href="#adding-custom-user-providers">Adding Custom User Providers</a><ul><li><a href="#the-user-provider-contract">The User Provider Contract</a></li><li><a href="#the-authenticatable-contract">The Authenticatable Contract</a></li></ul></li><li><a href="./socialite">Social Authentication</a></li><li><a href="#events">Events</a></li></ul><p><a name="introduction"></a></p><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p>Many web applications provide a way for their users to authenticate with the application and &quot;login&quot;. Implementing this feature in web applications can be a complex and potentially risky endeavor. For this reason, Laravel strives to give you the tools you need to implement authentication quickly, securely, and easily.</p><p>At its core, Laravel&#39;s authentication facilities are made up of &quot;guards&quot; and &quot;providers&quot;. Guards define how users are authenticated for each request. For example, Laravel ships with a <code>session</code> guard which maintains state using session storage and cookies.</p><p>Providers define how users are retrieved from your persistent storage. Laravel ships with support for retrieving users using <a href="./eloquent">Eloquent</a> and the database query builder. However, you are free to define additional providers as needed for your application.</p><p>Your application&#39;s authentication configuration file is located at <code>config/auth.php</code>. This file contains several well-documented options for tweaking the behavior of Laravel&#39;s authentication services.</p><blockquote><p><strong>Note</strong><br> Guards and providers should not be confused with &quot;roles&quot; and &quot;permissions&quot;. To learn more about authorizing user actions via permissions, please refer to the <a href="./authorization">authorization</a> documentation.</p></blockquote><p><a name="starter-kits"></a></p><h3 id="starter-kits" tabindex="-1"><a class="header-anchor" href="#starter-kits" aria-hidden="true">#</a> Starter Kits</h3><p>Want to get started fast? Install a <a href="./starter-kits">Laravel application starter kit</a> in a fresh Laravel application. After migrating your database, navigate your browser to <code>/register</code> or any other URL that is assigned to your application. The starter kits will take care of scaffolding your entire authentication system!</p><p><strong>Even if you choose not to use a starter kit in your final Laravel application, installing the <a href="./starter-kits#laravel-breeze">Laravel Breeze</a> starter kit can be a wonderful opportunity to learn how to implement all of Laravel&#39;s authentication functionality in an actual Laravel project.</strong> Since Laravel Breeze creates authentication controllers, routes, and views for you, you can examine the code within these files to learn how Laravel&#39;s authentication features may be implemented.</p><p><a name="introduction-database-considerations"></a></p><h3 id="database-considerations" tabindex="-1"><a class="header-anchor" href="#database-considerations" aria-hidden="true">#</a> Database Considerations</h3><p>By default, Laravel includes an <code>App\\Models\\User</code> <a href="./eloquent">Eloquent model</a> in your <code>app/Models</code> directory. This model may be used with the default Eloquent authentication driver. If your application is not using Eloquent, you may use the <code>database</code> authentication provider which uses the Laravel query builder.</p><p>When building the database schema for the <code>App\\Models\\User</code> model, make sure the password column is at least 60 characters in length. Of course, the <code>users</code> table migration that is included in new Laravel applications already creates a column that exceeds this length.</p><p>Also, you should verify that your <code>users</code> (or equivalent) table contains a nullable, string <code>remember_token</code> column of 100 characters. This column will be used to store a token for users that select the &quot;remember me&quot; option when logging into your application. Again, the default <code>users</code> table migration that is included in new Laravel applications already contains this column.</p><p><a name="ecosystem-overview"></a></p><h3 id="ecosystem-overview" tabindex="-1"><a class="header-anchor" href="#ecosystem-overview" aria-hidden="true">#</a> Ecosystem Overview</h3><p>Laravel offers several packages related to authentication. Before continuing, we&#39;ll review the general authentication ecosystem in Laravel and discuss each package&#39;s intended purpose.</p><p>First, consider how authentication works. When using a web browser, a user will provide their username and password via a login form. If these credentials are correct, the application will store information about the authenticated user in the user&#39;s <a href="./session">session</a>. A cookie issued to the browser contains the session ID so that subsequent requests to the application can associate the user with the correct session. After the session cookie is received, the application will retrieve the session data based on the session ID, note that the authentication information has been stored in the session, and will consider the user as &quot;authenticated&quot;.</p><p>When a remote service needs to authenticate to access an API, cookies are not typically used for authentication because there is no web browser. Instead, the remote service sends an API token to the API on each request. The application may validate the incoming token against a table of valid API tokens and &quot;authenticate&quot; the request as being performed by the user associated with that API token.</p><p><a name="laravels-built-in-browser-authentication-services"></a></p><h4 id="laravel-s-built-in-browser-authentication-services" tabindex="-1"><a class="header-anchor" href="#laravel-s-built-in-browser-authentication-services" aria-hidden="true">#</a> Laravel&#39;s Built-in Browser Authentication Services</h4><p>Laravel includes built-in authentication and session services which are typically accessed via the <code>Auth</code> and <code>Session</code> facades. These features provide cookie-based authentication for requests that are initiated from web browsers. They provide methods that allow you to verify a user&#39;s credentials and authenticate the user. In addition, these services will automatically store the proper authentication data in the user&#39;s session and issue the user&#39;s session cookie. A discussion of how to use these services is contained within this documentation.</p><p><strong>Application Starter Kits</strong></p><p>As discussed in this documentation, you can interact with these authentication services manually to build your application&#39;s own authentication layer. However, to help you get started more quickly, we have released <a href="./starter-kits">free packages</a> that provide robust, modern scaffolding of the entire authentication layer. These packages are <a href="./starter-kits#laravel-breeze">Laravel Breeze</a>, <a href="./starter-kits#laravel-jetstream">Laravel Jetstream</a>, and <a href="./fortify">Laravel Fortify</a>.</p>',28),h=t("em",null,"Laravel Breeze",-1),l=t("a",{href:"./blade"},"Blade templates",-1),p={href:"https://tailwindcss.com",target:"_blank",rel:"noopener noreferrer"},m=t("a",{href:"./starter-kits"},"application starter kits",-1),f=t("p",null,[t("em",null,"Laravel Fortify"),e(" is a headless authentication backend for Laravel that implements many of the features found in this documentation, including cookie-based authentication as well as other features such as two-factor authentication and email verification. Fortify provides the authentication backend for Laravel Jetstream or may be used independently in combination with "),t("a",{href:"./sanctum"},"Laravel Sanctum"),e(" to provide authentication for an SPA that needs to authenticate with Laravel.")],-1),g={href:"https://jetstream.laravel.com",target:"_blank",rel:"noopener noreferrer"},v={href:"https://tailwindcss.com",target:"_blank",rel:"noopener noreferrer"},y={href:"https://livewire.laravel.com",target:"_blank",rel:"noopener noreferrer"},w={href:"https://inertiajs.com",target:"_blank",rel:"noopener noreferrer"},b=t("a",{href:"./sanctum"},"Laravel Sanctum",-1),A=o('<p><a name="laravels-api-authentication-services"></a></p><h4 id="laravel-s-api-authentication-services" tabindex="-1"><a class="header-anchor" href="#laravel-s-api-authentication-services" aria-hidden="true">#</a> Laravel&#39;s API Authentication Services</h4><p>Laravel provides two optional packages to assist you in managing API tokens and authenticating requests made with API tokens: <a href="./passport">Passport</a> and <a href="./sanctum">Sanctum</a>. Please note that these libraries and Laravel&#39;s built-in cookie based authentication libraries are not mutually exclusive. These libraries primarily focus on API token authentication while the built-in authentication services focus on cookie based browser authentication. Many applications will use both Laravel&#39;s built-in cookie based authentication services and one of Laravel&#39;s API authentication packages.</p><p><strong>Passport</strong></p><p>Passport is an OAuth2 authentication provider, offering a variety of OAuth2 &quot;grant types&quot; which allow you to issue various types of tokens. In general, this is a robust and complex package for API authentication. However, most applications do not require the complex features offered by the OAuth2 spec, which can be confusing for both users and developers. In addition, developers have been historically confused about how to authenticate SPA applications or mobile applications using OAuth2 authentication providers like Passport.</p><p><strong>Sanctum</strong></p><p>In response to the complexity of OAuth2 and developer confusion, we set out to build a simpler, more streamlined authentication package that could handle both first-party web requests from a web browser and API requests via tokens. This goal was realized with the release of <a href="./sanctum">Laravel Sanctum</a>, which should be considered the preferred and recommended authentication package for applications that will be offering a first-party web UI in addition to an API, or will be powered by a single-page application (SPA) that exists separately from the backend Laravel application, or applications that offer a mobile client.</p><p>Laravel Sanctum is a hybrid web / API authentication package that can manage your application&#39;s entire authentication process. This is possible because when Sanctum based applications receive a request, Sanctum will first determine if the request includes a session cookie that references an authenticated session. Sanctum accomplishes this by calling Laravel&#39;s built-in authentication services which we discussed earlier. If the request is not being authenticated via a session cookie, Sanctum will inspect the request for an API token. If an API token is present, Sanctum will authenticate the request using that token. To learn more about this process, please consult Sanctum&#39;s <a href="./sanctum#how-it-works">&quot;how it works&quot;</a> documentation.</p>',8),k={href:"https://jetstream.laravel.com",target:"_blank",rel:"noopener noreferrer"},q=o('<p><a name="summary-choosing-your-stack"></a></p><h4 id="summary-choosing-your-stack" tabindex="-1"><a class="header-anchor" href="#summary-choosing-your-stack" aria-hidden="true">#</a> Summary &amp; Choosing Your Stack</h4><p>In summary, if your application will be accessed using a browser and you are building a monolithic Laravel application, your application will use Laravel&#39;s built-in authentication services.</p><p>Next, if your application offers an API that will be consumed by third parties, you will choose between <a href="./passport">Passport</a> or <a href="./sanctum">Sanctum</a> to provide API token authentication for your application. In general, Sanctum should be preferred when possible since it is a simple, complete solution for API authentication, SPA authentication, and mobile authentication, including support for &quot;scopes&quot; or &quot;abilities&quot;.</p><p>If you are building a single-page application (SPA) that will be powered by a Laravel backend, you should use <a href="./sanctum">Laravel Sanctum</a>. When using Sanctum, you will either need to <a href="#authenticating-users">manually implement your own backend authentication routes</a> or utilize <a href="./fortify">Laravel Fortify</a> as a headless authentication backend service that provides routes and controllers for features such as registration, password reset, email verification, and more.</p><p>Passport may be chosen when your application absolutely needs all of the features provided by the OAuth2 specification.</p><p>And, if you would like to get started quickly, we are pleased to recommend <a href="./starter-kits#laravel-breeze">Laravel Breeze</a> as a quick way to start a new Laravel application that already uses our preferred authentication stack of Laravel&#39;s built-in authentication services and Laravel Sanctum.</p><p><a name="authentication-quickstart"></a></p><h2 id="authentication-quickstart" tabindex="-1"><a class="header-anchor" href="#authentication-quickstart" aria-hidden="true">#</a> Authentication Quickstart</h2><blockquote><p><strong>Warning</strong><br> This portion of the documentation discusses authenticating users via the <a href="./starter-kits">Laravel application starter kits</a>, which includes UI scaffolding to help you get started quickly. If you would like to integrate with Laravel&#39;s authentication systems directly, check out the documentation on <a href="#authenticating-users">manually authenticating users</a>.</p></blockquote><p><a name="install-a-starter-kit"></a></p><h3 id="install-a-starter-kit" tabindex="-1"><a class="header-anchor" href="#install-a-starter-kit" aria-hidden="true">#</a> Install A Starter Kit</h3><p>First, you should <a href="./starter-kits">install a Laravel application starter kit</a>. Our current starter kits, Laravel Breeze and Laravel Jetstream, offer beautifully designed starting points for incorporating authentication into your fresh Laravel application.</p>',13),I=t("a",{href:"./blade"},"Blade templates",-1),L={href:"https://tailwindcss.com",target:"_blank",rel:"noopener noreferrer"},T={href:"https://livewire.laravel.com",target:"_blank",rel:"noopener noreferrer"},_={href:"https://inertiajs.com",target:"_blank",rel:"noopener noreferrer"},P={href:"https://jetstream.laravel.com",target:"_blank",rel:"noopener noreferrer"},R={href:"https://livewire.laravel.com",target:"_blank",rel:"noopener noreferrer"},x={href:"https://inertiajs.com",target:"_blank",rel:"noopener noreferrer"},S=t("a",{href:"./sanctum"},"Laravel Sanctum",-1),$=o(`<p><a name="retrieving-the-authenticated-user"></a></p><h3 id="retrieving-the-authenticated-user" tabindex="-1"><a class="header-anchor" href="#retrieving-the-authenticated-user" aria-hidden="true">#</a> Retrieving The Authenticated User</h3><p>After installing an authentication starter kit and allowing users to register and authenticate with your application, you will often need to interact with the currently authenticated user. While handling an incoming request, you may access the authenticated user via the <code>Auth</code> facade&#39;s <code>user</code> method:</p><pre><code>use Illuminate\\Support\\Facades\\Auth;

// Retrieve the currently authenticated user...
$user = Auth::user();

// Retrieve the currently authenticated user&#39;s ID...
$id = Auth::id();
</code></pre><p>Alternatively, once a user is authenticated, you may access the authenticated user via an <code>Illuminate\\Http\\Request</code> instance. Remember, type-hinted classes will automatically be injected into your controller methods. By type-hinting the <code>Illuminate\\Http\\Request</code> object, you may gain convenient access to the authenticated user from any controller method in your application via the request&#39;s <code>user</code> method:</p><pre><code>&lt;?php

namespace App\\Http\\Controllers;

use Illuminate\\Http\\RedirectResponse;
use Illuminate\\Http\\Request;

class FlightController extends Controller
{
    /**
     * Update the flight information for an existing flight.
     */
    public function update(Request $request): RedirectResponse
    {
        $user = $request-&gt;user();

        // ...

        return redirect(&#39;/flights&#39;);
    }
}
</code></pre><p><a name="determining-if-the-current-user-is-authenticated"></a></p><h4 id="determining-if-the-current-user-is-authenticated" tabindex="-1"><a class="header-anchor" href="#determining-if-the-current-user-is-authenticated" aria-hidden="true">#</a> Determining If The Current User Is Authenticated</h4><p>To determine if the user making the incoming HTTP request is authenticated, you may use the <code>check</code> method on the <code>Auth</code> facade. This method will return <code>true</code> if the user is authenticated:</p><pre><code>use Illuminate\\Support\\Facades\\Auth;

if (Auth::check()) {
    // The user is logged in...
}
</code></pre><blockquote><p><strong>Note</strong><br> Even though it is possible to determine if a user is authenticated using the <code>check</code> method, you will typically use a middleware to verify that the user is authenticated before allowing the user access to certain routes / controllers. To learn more about this, check out the documentation on <a href="./authentication#protecting-routes">protecting routes</a>.</p></blockquote><p><a name="protecting-routes"></a></p><h3 id="protecting-routes" tabindex="-1"><a class="header-anchor" href="#protecting-routes" aria-hidden="true">#</a> Protecting Routes</h3><p><a href="./middleware">Route middleware</a> can be used to only allow authenticated users to access a given route. Laravel ships with an <code>auth</code> middleware, which references the <code>Illuminate\\Auth\\Middleware\\Authenticate</code> class. Since this middleware is already registered in your application&#39;s HTTP kernel, all you need to do is attach the middleware to a route definition:</p><pre><code>Route::get(&#39;/flights&#39;, function () {
    // Only authenticated users may access this route...
})-&gt;middleware(&#39;auth&#39;);
</code></pre><p><a name="redirecting-unauthenticated-users"></a></p><h4 id="redirecting-unauthenticated-users" tabindex="-1"><a class="header-anchor" href="#redirecting-unauthenticated-users" aria-hidden="true">#</a> Redirecting Unauthenticated Users</h4><p>When the <code>auth</code> middleware detects an unauthenticated user, it will redirect the user to the <code>login</code> <a href="./routing#named-routes">named route</a>. You may modify this behavior by updating the <code>redirectTo</code> function in your application&#39;s <code>app/Http/Middleware/Authenticate.php</code> file:</p><pre><code>use Illuminate\\Http\\Request;

/**
 * Get the path the user should be redirected to.
 */
protected function redirectTo(Request $request): string
{
    return route(&#39;login&#39;);
}
</code></pre><p><a name="specifying-a-guard"></a></p><h4 id="specifying-a-guard" tabindex="-1"><a class="header-anchor" href="#specifying-a-guard" aria-hidden="true">#</a> Specifying A Guard</h4><p>When attaching the <code>auth</code> middleware to a route, you may also specify which &quot;guard&quot; should be used to authenticate the user. The guard specified should correspond to one of the keys in the <code>guards</code> array of your <code>auth.php</code> configuration file:</p><pre><code>Route::get(&#39;/flights&#39;, function () {
    // Only authenticated users may access this route...
})-&gt;middleware(&#39;auth:admin&#39;);
</code></pre><p><a name="login-throttling"></a></p><h3 id="login-throttling" tabindex="-1"><a class="header-anchor" href="#login-throttling" aria-hidden="true">#</a> Login Throttling</h3><p>If you are using the Laravel Breeze or Laravel Jetstream <a href="./starter-kits">starter kits</a>, rate limiting will automatically be applied to login attempts. By default, the user will not be able to login for one minute if they fail to provide the correct credentials after several attempts. The throttling is unique to the user&#39;s username / email address and their IP address.</p><blockquote><p><strong>Note</strong><br> If you would like to rate limit other routes in your application, check out the <a href="./routing#rate-limiting">rate limiting documentation</a>.</p></blockquote><p><a name="authenticating-users"></a></p><h2 id="manually-authenticating-users" tabindex="-1"><a class="header-anchor" href="#manually-authenticating-users" aria-hidden="true">#</a> Manually Authenticating Users</h2><p>You are not required to use the authentication scaffolding included with Laravel&#39;s <a href="./starter-kits">application starter kits</a>. If you choose not to use this scaffolding, you will need to manage user authentication using the Laravel authentication classes directly. Don&#39;t worry, it&#39;s a cinch!</p>`,30),C=t("code",null,"Auth",-1),B=t("a",{href:"./facades"},"facade",-1),H=t("code",null,"Auth",-1),U=t("code",null,"attempt",-1),F=t("code",null,"attempt",-1),O=t("a",{href:"./session"},"session",-1),E={href:"https://en.wikipedia.org/wiki/Session_fixation",target:"_blank",rel:"noopener noreferrer"},z=o(`<pre><code>&lt;?php

namespace App\\Http\\Controllers;

use Illuminate\\Http\\Request;
use Illuminate\\Http\\RedirectResponse;
use Illuminate\\Support\\Facades\\Auth;

class LoginController extends Controller
{
    /**
     * Handle an authentication attempt.
     */
    public function authenticate(Request $request): RedirectResponse
    {
        $credentials = $request-&gt;validate([
            &#39;email&#39; =&gt; [&#39;required&#39;, &#39;email&#39;],
            &#39;password&#39; =&gt; [&#39;required&#39;],
        ]);

        if (Auth::attempt($credentials)) {
            $request-&gt;session()-&gt;regenerate();

            return redirect()-&gt;intended(&#39;dashboard&#39;);
        }

        return back()-&gt;withErrors([
            &#39;email&#39; =&gt; &#39;The provided credentials do not match our records.&#39;,
        ])-&gt;onlyInput(&#39;email&#39;);
    }
}
</code></pre><p>The <code>attempt</code> method accepts an array of key / value pairs as its first argument. The values in the array will be used to find the user in your database table. So, in the example above, the user will be retrieved by the value of the <code>email</code> column. If the user is found, the hashed password stored in the database will be compared with the <code>password</code> value passed to the method via the array. You should not hash the incoming request&#39;s <code>password</code> value, since the framework will automatically hash the value before comparing it to the hashed password in the database. An authenticated session will be started for the user if the two hashed passwords match.</p><p>Remember, Laravel&#39;s authentication services will retrieve users from your database based on your authentication guard&#39;s &quot;provider&quot; configuration. In the default <code>config/auth.php</code> configuration file, the Eloquent user provider is specified and it is instructed to use the <code>App\\Models\\User</code> model when retrieving users. You may change these values within your configuration file based on the needs of your application.</p><p>The <code>attempt</code> method will return <code>true</code> if authentication was successful. Otherwise, <code>false</code> will be returned.</p><p>The <code>intended</code> method provided by Laravel&#39;s redirector will redirect the user to the URL they were attempting to access before being intercepted by the authentication middleware. A fallback URI may be given to this method in case the intended destination is not available.</p><p><a name="specifying-additional-conditions"></a></p><h4 id="specifying-additional-conditions" tabindex="-1"><a class="header-anchor" href="#specifying-additional-conditions" aria-hidden="true">#</a> Specifying Additional Conditions</h4><p>If you wish, you may also add extra query conditions to the authentication query in addition to the user&#39;s email and password. To accomplish this, we may simply add the query conditions to the array passed to the <code>attempt</code> method. For example, we may verify that the user is marked as &quot;active&quot;:</p><pre><code>if (Auth::attempt([&#39;email&#39; =&gt; $email, &#39;password&#39; =&gt; $password, &#39;active&#39; =&gt; 1])) {
    // Authentication was successful...
}
</code></pre><p>For complex query conditions, you may provide a closure in your array of credentials. This closure will be invoked with the query instance, allowing you to customize the query based on your application&#39;s needs:</p><pre><code>use Illuminate\\Database\\Eloquent\\Builder;

if (Auth::attempt([
    &#39;email&#39; =&gt; $email, 
    &#39;password&#39; =&gt; $password, 
    fn (Builder $query) =&gt; $query-&gt;has(&#39;activeSubscription&#39;),
])) {
    // Authentication was successful...
}
</code></pre><blockquote><p><strong>Warning</strong><br> In these examples, <code>email</code> is not a required option, it is merely used as an example. You should use whatever column name corresponds to a &quot;username&quot; in your database table.</p></blockquote><p>The <code>attemptWhen</code> method, which receives a closure as its second argument, may be used to perform more extensive inspection of the potential user before actually authenticating the user. The closure receives the potential user and should return <code>true</code> or <code>false</code> to indicate if the user may be authenticated:</p><pre><code>if (Auth::attemptWhen([
    &#39;email&#39; =&gt; $email,
    &#39;password&#39; =&gt; $password,
], function (User $user) {
    return $user-&gt;isNotBanned();
})) {
    // Authentication was successful...
}
</code></pre><p><a name="accessing-specific-guard-instances"></a></p><h4 id="accessing-specific-guard-instances" tabindex="-1"><a class="header-anchor" href="#accessing-specific-guard-instances" aria-hidden="true">#</a> Accessing Specific Guard Instances</h4><p>Via the <code>Auth</code> facade&#39;s <code>guard</code> method, you may specify which guard instance you would like to utilize when authenticating the user. This allows you to manage authentication for separate parts of your application using entirely separate authenticatable models or user tables.</p><p>The guard name passed to the <code>guard</code> method should correspond to one of the guards configured in your <code>auth.php</code> configuration file:</p><pre><code>if (Auth::guard(&#39;admin&#39;)-&gt;attempt($credentials)) {
    // ...
}
</code></pre><p><a name="remembering-users"></a></p><h3 id="remembering-users" tabindex="-1"><a class="header-anchor" href="#remembering-users" aria-hidden="true">#</a> Remembering Users</h3><p>Many web applications provide a &quot;remember me&quot; checkbox on their login form. If you would like to provide &quot;remember me&quot; functionality in your application, you may pass a boolean value as the second argument to the <code>attempt</code> method.</p><p>When this value is <code>true</code>, Laravel will keep the user authenticated indefinitely or until they manually logout. Your <code>users</code> table must include the string <code>remember_token</code> column, which will be used to store the &quot;remember me&quot; token. The <code>users</code> table migration included with new Laravel applications already includes this column:</p><pre><code>use Illuminate\\Support\\Facades\\Auth;

if (Auth::attempt([&#39;email&#39; =&gt; $email, &#39;password&#39; =&gt; $password], $remember)) {
    // The user is being remembered...
}
</code></pre><p>If your application offers &quot;remember me&quot; functionality, you may use the <code>viaRemember</code> method to determine if the currently authenticated user was authenticated using the &quot;remember me&quot; cookie:</p><pre><code>use Illuminate\\Support\\Facades\\Auth;

if (Auth::viaRemember()) {
    // ...
}
</code></pre><p><a name="other-authentication-methods"></a></p><h3 id="other-authentication-methods" tabindex="-1"><a class="header-anchor" href="#other-authentication-methods" aria-hidden="true">#</a> Other Authentication Methods</h3><p><a name="authenticate-a-user-instance"></a></p><h4 id="authenticate-a-user-instance" tabindex="-1"><a class="header-anchor" href="#authenticate-a-user-instance" aria-hidden="true">#</a> Authenticate A User Instance</h4><p>If you need to set an existing user instance as the currently authenticated user, you may pass the user instance to the <code>Auth</code> facade&#39;s <code>login</code> method. The given user instance must be an implementation of the <code>Illuminate\\Contracts\\Auth\\Authenticatable</code> <a href="./contracts">contract</a>. The <code>App\\Models\\User</code> model included with Laravel already implements this interface. This method of authentication is useful when you already have a valid user instance, such as directly after a user registers with your application:</p><pre><code>use Illuminate\\Support\\Facades\\Auth;

Auth::login($user);
</code></pre><p>You may pass a boolean value as the second argument to the <code>login</code> method. This value indicates if &quot;remember me&quot; functionality is desired for the authenticated session. Remember, this means that the session will be authenticated indefinitely or until the user manually logs out of the application:</p><pre><code>Auth::login($user, $remember = true);
</code></pre><p>If needed, you may specify an authentication guard before calling the <code>login</code> method:</p><pre><code>Auth::guard(&#39;admin&#39;)-&gt;login($user);
</code></pre><p><a name="authenticate-a-user-by-id"></a></p><h4 id="authenticate-a-user-by-id" tabindex="-1"><a class="header-anchor" href="#authenticate-a-user-by-id" aria-hidden="true">#</a> Authenticate A User By ID</h4><p>To authenticate a user using their database record&#39;s primary key, you may use the <code>loginUsingId</code> method. This method accepts the primary key of the user you wish to authenticate:</p><pre><code>Auth::loginUsingId(1);
</code></pre><p>You may pass a boolean value as the second argument to the <code>loginUsingId</code> method. This value indicates if &quot;remember me&quot; functionality is desired for the authenticated session. Remember, this means that the session will be authenticated indefinitely or until the user manually logs out of the application:</p><pre><code>Auth::loginUsingId(1, $remember = true);
</code></pre><p><a name="authenticate-a-user-once"></a></p><h4 id="authenticate-a-user-once" tabindex="-1"><a class="header-anchor" href="#authenticate-a-user-once" aria-hidden="true">#</a> Authenticate A User Once</h4><p>You may use the <code>once</code> method to authenticate a user with the application for a single request. No sessions or cookies will be utilized when calling this method:</p><pre><code>if (Auth::once($credentials)) {
    // ...
}
</code></pre><p><a name="http-basic-authentication"></a></p><h2 id="http-basic-authentication" tabindex="-1"><a class="header-anchor" href="#http-basic-authentication" aria-hidden="true">#</a> HTTP Basic Authentication</h2>`,48),M={href:"https://en.wikipedia.org/wiki/Basic_access_authentication",target:"_blank",rel:"noopener noreferrer"},D=t("code",null,"auth.basic",-1),N=t("a",{href:"./middleware"},"middleware",-1),W=t("code",null,"auth.basic",-1),Y=o(`<pre><code>Route::get(&#39;/profile&#39;, function () {
    // Only authenticated users may access this route...
})-&gt;middleware(&#39;auth.basic&#39;);
</code></pre><p>Once the middleware has been attached to the route, you will automatically be prompted for credentials when accessing the route in your browser. By default, the <code>auth.basic</code> middleware will assume the <code>email</code> column on your <code>users</code> database table is the user&#39;s &quot;username&quot;.</p><p><a name="a-note-on-fastcgi"></a></p><h4 id="a-note-on-fastcgi" tabindex="-1"><a class="header-anchor" href="#a-note-on-fastcgi" aria-hidden="true">#</a> A Note On FastCGI</h4><p>If you are using PHP FastCGI and Apache to serve your Laravel application, HTTP Basic authentication may not work correctly. To correct these problems, the following lines may be added to your application&#39;s <code>.htaccess</code> file:</p><div class="language-apache line-numbers-mode" data-ext="apache"><pre class="language-apache"><code>RewriteCond %{HTTP:Authorization} ^(.+)$
RewriteRule .* - [E=HTTP_AUTHORIZATION:%{HTTP:Authorization}]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="stateless-http-basic-authentication"></a></p><h3 id="stateless-http-basic-authentication" tabindex="-1"><a class="header-anchor" href="#stateless-http-basic-authentication" aria-hidden="true">#</a> Stateless HTTP Basic Authentication</h3><p>You may also use HTTP Basic Authentication without setting a user identifier cookie in the session. This is primarily helpful if you choose to use HTTP Authentication to authenticate requests to your application&#39;s API. To accomplish this, <a href="./middleware">define a middleware</a> that calls the <code>onceBasic</code> method. If no response is returned by the <code>onceBasic</code> method, the request may be passed further into the application:</p><pre><code>&lt;?php

namespace App\\Http\\Middleware;

use Closure;
use Illuminate\\Http\\Request;
use Illuminate\\Support\\Facades\\Auth;
use Symfony\\Component\\HttpFoundation\\Response;

class AuthenticateOnceWithBasicAuth
{
    /**
     * Handle an incoming request.
     *
     * @param  \\Closure(\\Illuminate\\Http\\Request): (\\Symfony\\Component\\HttpFoundation\\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        return Auth::onceBasic() ?: $next($request);
    }

}
</code></pre><p>Next, attach the middleware to a route:</p><pre><code>Route::get(&#39;/api/user&#39;, function () {
    // Only authenticated users may access this route...
})-&gt;middleware(AuthenticateOnceWithBasicAuth::class);
</code></pre><p><a name="logging-out"></a></p><h2 id="logging-out" tabindex="-1"><a class="header-anchor" href="#logging-out" aria-hidden="true">#</a> Logging Out</h2><p>To manually log users out of your application, you may use the <code>logout</code> method provided by the <code>Auth</code> facade. This will remove the authentication information from the user&#39;s session so that subsequent requests are not authenticated.</p><p>In addition to calling the <code>logout</code> method, it is recommended that you invalidate the user&#39;s session and regenerate their <a href="./csrf">CSRF token</a>. After logging the user out, you would typically redirect the user to the root of your application:</p><pre><code>use Illuminate\\Http\\Request;
use Illuminate\\Http\\RedirectResponse;
use Illuminate\\Support\\Facades\\Auth;

/**
 * Log the user out of the application.
 */
public function logout(Request $request): RedirectResponse
{
    Auth::logout();

    $request-&gt;session()-&gt;invalidate();

    $request-&gt;session()-&gt;regenerateToken();

    return redirect(&#39;/&#39;);
}
</code></pre><p><a name="invalidating-sessions-on-other-devices"></a></p><h3 id="invalidating-sessions-on-other-devices" tabindex="-1"><a class="header-anchor" href="#invalidating-sessions-on-other-devices" aria-hidden="true">#</a> Invalidating Sessions On Other Devices</h3><p>Laravel also provides a mechanism for invalidating and &quot;logging out&quot; a user&#39;s sessions that are active on other devices without invalidating the session on their current device. This feature is typically utilized when a user is changing or updating their password and you would like to invalidate sessions on other devices while keeping the current device authenticated.</p><p>Before getting started, you should make sure that the <code>Illuminate\\Session\\Middleware\\AuthenticateSession</code> middleware is included on the routes that should receive session authentication. Typically, you should place this middleware on a route group definition so that it can be applied to the majority of your application&#39;s routes. By default, the <code>AuthenticateSession</code> middleware may be attached to a route using the <code>auth.session</code> route middleware alias as defined in your application&#39;s HTTP kernel:</p><pre><code>Route::middleware([&#39;auth&#39;, &#39;auth.session&#39;])-&gt;group(function () {
    Route::get(&#39;/&#39;, function () {
        // ...
    });
});
</code></pre><p>Then, you may use the <code>logoutOtherDevices</code> method provided by the <code>Auth</code> facade. This method requires the user to confirm their current password, which your application should accept through an input form:</p><pre><code>use Illuminate\\Support\\Facades\\Auth;

Auth::logoutOtherDevices($currentPassword);
</code></pre><p>When the <code>logoutOtherDevices</code> method is invoked, the user&#39;s other sessions will be invalidated entirely, meaning they will be &quot;logged out&quot; of all guards they were previously authenticated by.</p><p><a name="password-confirmation"></a></p><h2 id="password-confirmation" tabindex="-1"><a class="header-anchor" href="#password-confirmation" aria-hidden="true">#</a> Password Confirmation</h2><p>While building your application, you may occasionally have actions that should require the user to confirm their password before the action is performed or before the user is redirected to a sensitive area of the application. Laravel includes built-in middleware to make this process a breeze. Implementing this feature will require you to define two routes: one route to display a view asking the user to confirm their password and another route to confirm that the password is valid and redirect the user to their intended destination.</p><blockquote><p><strong>Note</strong><br> The following documentation discusses how to integrate with Laravel&#39;s password confirmation features directly; however, if you would like to get started more quickly, the <a href="./starter-kits">Laravel application starter kits</a> include support for this feature!</p></blockquote><p><a name="password-confirmation-configuration"></a></p><h3 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> Configuration</h3><p>After confirming their password, a user will not be asked to confirm their password again for three hours. However, you may configure the length of time before the user is re-prompted for their password by changing the value of the <code>password_timeout</code> configuration value within your application&#39;s <code>config/auth.php</code> configuration file.</p><p><a name="password-confirmation-routing"></a></p><h3 id="routing" tabindex="-1"><a class="header-anchor" href="#routing" aria-hidden="true">#</a> Routing</h3><p><a name="the-password-confirmation-form"></a></p><h4 id="the-password-confirmation-form" tabindex="-1"><a class="header-anchor" href="#the-password-confirmation-form" aria-hidden="true">#</a> The Password Confirmation Form</h4><p>First, we will define a route to display a view that requests the user to confirm their password:</p><pre><code>Route::get(&#39;/confirm-password&#39;, function () {
    return view(&#39;auth.confirm-password&#39;);
})-&gt;middleware(&#39;auth&#39;)-&gt;name(&#39;password.confirm&#39;);
</code></pre><p>As you might expect, the view that is returned by this route should have a form containing a <code>password</code> field. In addition, feel free to include text within the view that explains that the user is entering a protected area of the application and must confirm their password.</p><p><a name="confirming-the-password"></a></p><h4 id="confirming-the-password" tabindex="-1"><a class="header-anchor" href="#confirming-the-password" aria-hidden="true">#</a> Confirming The Password</h4><p>Next, we will define a route that will handle the form request from the &quot;confirm password&quot; view. This route will be responsible for validating the password and redirecting the user to their intended destination:</p><pre><code>use Illuminate\\Http\\Request;
use Illuminate\\Support\\Facades\\Hash;
use Illuminate\\Support\\Facades\\Redirect;

Route::post(&#39;/confirm-password&#39;, function (Request $request) {
    if (! Hash::check($request-&gt;password, $request-&gt;user()-&gt;password)) {
        return back()-&gt;withErrors([
            &#39;password&#39; =&gt; [&#39;The provided password does not match our records.&#39;]
        ]);
    }

    $request-&gt;session()-&gt;passwordConfirmed();

    return redirect()-&gt;intended();
})-&gt;middleware([&#39;auth&#39;, &#39;throttle:6,1&#39;]);
</code></pre><p>Before moving on, let&#39;s examine this route in more detail. First, the request&#39;s <code>password</code> field is determined to actually match the authenticated user&#39;s password. If the password is valid, we need to inform Laravel&#39;s session that the user has confirmed their password. The <code>passwordConfirmed</code> method will set a timestamp in the user&#39;s session that Laravel can use to determine when the user last confirmed their password. Finally, we can redirect the user to their intended destination.</p><p><a name="password-confirmation-protecting-routes"></a></p><h3 id="protecting-routes-1" tabindex="-1"><a class="header-anchor" href="#protecting-routes-1" aria-hidden="true">#</a> Protecting Routes</h3><p>You should ensure that any route that performs an action which requires recent password confirmation is assigned the <code>password.confirm</code> middleware. This middleware is included with the default installation of Laravel and will automatically store the user&#39;s intended destination in the session so that the user may be redirected to that location after confirming their password. After storing the user&#39;s intended destination in the session, the middleware will redirect the user to the <code>password.confirm</code> <a href="./routing#named-routes">named route</a>:</p><pre><code>Route::get(&#39;/settings&#39;, function () {
    // ...
})-&gt;middleware([&#39;password.confirm&#39;]);

Route::post(&#39;/settings&#39;, function () {
    // ...
})-&gt;middleware([&#39;password.confirm&#39;]);
</code></pre><p><a name="adding-custom-guards"></a></p><h2 id="adding-custom-guards" tabindex="-1"><a class="header-anchor" href="#adding-custom-guards" aria-hidden="true">#</a> Adding Custom Guards</h2><p>You may define your own authentication guards using the <code>extend</code> method on the <code>Auth</code> facade. You should place your call to the <code>extend</code> method within a <a href="./providers">service provider</a>. Since Laravel already ships with an <code>AuthServiceProvider</code>, we can place the code in that provider:</p><pre><code>&lt;?php

namespace App\\Providers;

use App\\Services\\Auth\\JwtGuard;
use Illuminate\\Contracts\\Foundation\\Application;
use Illuminate\\Foundation\\Support\\Providers\\AuthServiceProvider as ServiceProvider;
use Illuminate\\Support\\Facades\\Auth;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * Register any application authentication / authorization services.
     */
    public function boot(): void
    {
        Auth::extend(&#39;jwt&#39;, function (Application $app, string $name, array $config) {
            // Return an instance of Illuminate\\Contracts\\Auth\\Guard...

            return new JwtGuard(Auth::createUserProvider($config[&#39;provider&#39;]));
        });
    }
}
</code></pre><p>As you can see in the example above, the callback passed to the <code>extend</code> method should return an implementation of <code>Illuminate\\Contracts\\Auth\\Guard</code>. This interface contains a few methods you will need to implement to define a custom guard. Once your custom guard has been defined, you may reference the guard in the <code>guards</code> configuration of your <code>auth.php</code> configuration file:</p><pre><code>&#39;guards&#39; =&gt; [
    &#39;api&#39; =&gt; [
        &#39;driver&#39; =&gt; &#39;jwt&#39;,
        &#39;provider&#39; =&gt; &#39;users&#39;,
    ],
],
</code></pre><p><a name="closure-request-guards"></a></p><h3 id="closure-request-guards" tabindex="-1"><a class="header-anchor" href="#closure-request-guards" aria-hidden="true">#</a> Closure Request Guards</h3><p>The simplest way to implement a custom, HTTP request based authentication system is by using the <code>Auth::viaRequest</code> method. This method allows you to quickly define your authentication process using a single closure.</p><p>To get started, call the <code>Auth::viaRequest</code> method within the <code>boot</code> method of your <code>AuthServiceProvider</code>. The <code>viaRequest</code> method accepts an authentication driver name as its first argument. This name can be any string that describes your custom guard. The second argument passed to the method should be a closure that receives the incoming HTTP request and returns a user instance or, if authentication fails, <code>null</code>:</p><pre><code>use App\\Models\\User;
use Illuminate\\Http\\Request;
use Illuminate\\Support\\Facades\\Auth;

/**
 * Register any application authentication / authorization services.
 */
public function boot(): void
{
    Auth::viaRequest(&#39;custom-token&#39;, function (Request $request) {
        return User::where(&#39;token&#39;, (string) $request-&gt;token)-&gt;first();
    });
}
</code></pre><p>Once your custom authentication driver has been defined, you may configure it as a driver within the <code>guards</code> configuration of your <code>auth.php</code> configuration file:</p><pre><code>&#39;guards&#39; =&gt; [
    &#39;api&#39; =&gt; [
        &#39;driver&#39; =&gt; &#39;custom-token&#39;,
    ],
],
</code></pre><p>Finally, you may reference the guard when assigning the authentication middleware to a route:</p><pre><code>Route::middleware(&#39;auth:api&#39;)-&gt;group(function () {
    // ...
});
</code></pre><p><a name="adding-custom-user-providers"></a></p><h2 id="adding-custom-user-providers" tabindex="-1"><a class="header-anchor" href="#adding-custom-user-providers" aria-hidden="true">#</a> Adding Custom User Providers</h2><p>If you are not using a traditional relational database to store your users, you will need to extend Laravel with your own authentication user provider. We will use the <code>provider</code> method on the <code>Auth</code> facade to define a custom user provider. The user provider resolver should return an implementation of <code>Illuminate\\Contracts\\Auth\\UserProvider</code>:</p><pre><code>&lt;?php

namespace App\\Providers;

use App\\Extensions\\MongoUserProvider;
use Illuminate\\Contracts\\Foundation\\Application;
use Illuminate\\Foundation\\Support\\Providers\\AuthServiceProvider as ServiceProvider;
use Illuminate\\Support\\Facades\\Auth;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * Register any application authentication / authorization services.
     */
    public function boot(): void
    {
        Auth::provider(&#39;mongo&#39;, function (Application $app, array $config) {
            // Return an instance of Illuminate\\Contracts\\Auth\\UserProvider...

            return new MongoUserProvider($app-&gt;make(&#39;mongo.connection&#39;));
        });
    }
}
</code></pre><p>After you have registered the provider using the <code>provider</code> method, you may switch to the new user provider in your <code>auth.php</code> configuration file. First, define a <code>provider</code> that uses your new driver:</p><pre><code>&#39;providers&#39; =&gt; [
    &#39;users&#39; =&gt; [
        &#39;driver&#39; =&gt; &#39;mongo&#39;,
    ],
],
</code></pre><p>Finally, you may reference this provider in your <code>guards</code> configuration:</p><pre><code>&#39;guards&#39; =&gt; [
    &#39;web&#39; =&gt; [
        &#39;driver&#39; =&gt; &#39;session&#39;,
        &#39;provider&#39; =&gt; &#39;users&#39;,
    ],
],
</code></pre><p><a name="the-user-provider-contract"></a></p><h3 id="the-user-provider-contract" tabindex="-1"><a class="header-anchor" href="#the-user-provider-contract" aria-hidden="true">#</a> The User Provider Contract</h3><p><code>Illuminate\\Contracts\\Auth\\UserProvider</code> implementations are responsible for fetching an <code>Illuminate\\Contracts\\Auth\\Authenticatable</code> implementation out of a persistent storage system, such as MySQL, MongoDB, etc. These two interfaces allow the Laravel authentication mechanisms to continue functioning regardless of how the user data is stored or what type of class is used to represent the authenticated user:</p><p>Let&#39;s take a look at the <code>Illuminate\\Contracts\\Auth\\UserProvider</code> contract:</p><pre><code>&lt;?php

namespace Illuminate\\Contracts\\Auth;

interface UserProvider
{
    public function retrieveById($identifier);
    public function retrieveByToken($identifier, $token);
    public function updateRememberToken(Authenticatable $user, $token);
    public function retrieveByCredentials(array $credentials);
    public function validateCredentials(Authenticatable $user, array $credentials);
}
</code></pre><p>The <code>retrieveById</code> function typically receives a key representing the user, such as an auto-incrementing ID from a MySQL database. The <code>Authenticatable</code> implementation matching the ID should be retrieved and returned by the method.</p><p>The <code>retrieveByToken</code> function retrieves a user by their unique <code>$identifier</code> and &quot;remember me&quot; <code>$token</code>, typically stored in a database column like <code>remember_token</code>. As with the previous method, the <code>Authenticatable</code> implementation with a matching token value should be returned by this method.</p><p>The <code>updateRememberToken</code> method updates the <code>$user</code> instance&#39;s <code>remember_token</code> with the new <code>$token</code>. A fresh token is assigned to users on a successful &quot;remember me&quot; authentication attempt or when the user is logging out.</p><p>The <code>retrieveByCredentials</code> method receives the array of credentials passed to the <code>Auth::attempt</code> method when attempting to authenticate with an application. The method should then &quot;query&quot; the underlying persistent storage for the user matching those credentials. Typically, this method will run a query with a &quot;where&quot; condition that searches for a user record with a &quot;username&quot; matching the value of <code>$credentials[&#39;username&#39;]</code>. The method should return an implementation of <code>Authenticatable</code>. <strong>This method should not attempt to do any password validation or authentication.</strong></p><p>The <code>validateCredentials</code> method should compare the given <code>$user</code> with the <code>$credentials</code> to authenticate the user. For example, this method will typically use the <code>Hash::check</code> method to compare the value of <code>$user-&gt;getAuthPassword()</code> to the value of <code>$credentials[&#39;password&#39;]</code>. This method should return <code>true</code> or <code>false</code> indicating whether the password is valid.</p><p><a name="the-authenticatable-contract"></a></p><h3 id="the-authenticatable-contract" tabindex="-1"><a class="header-anchor" href="#the-authenticatable-contract" aria-hidden="true">#</a> The Authenticatable Contract</h3><p>Now that we have explored each of the methods on the <code>UserProvider</code>, let&#39;s take a look at the <code>Authenticatable</code> contract. Remember, user providers should return implementations of this interface from the <code>retrieveById</code>, <code>retrieveByToken</code>, and <code>retrieveByCredentials</code> methods:</p><pre><code>&lt;?php

namespace Illuminate\\Contracts\\Auth;

interface Authenticatable
{
    public function getAuthIdentifierName();
    public function getAuthIdentifier();
    public function getAuthPassword();
    public function getRememberToken();
    public function setRememberToken($value);
    public function getRememberTokenName();
}
</code></pre><p>This interface is simple. The <code>getAuthIdentifierName</code> method should return the name of the &quot;primary key&quot; field of the user and the <code>getAuthIdentifier</code> method should return the &quot;primary key&quot; of the user. When using a MySQL back-end, this would likely be the auto-incrementing primary key assigned to the user record. The <code>getAuthPassword</code> method should return the user&#39;s hashed password.</p><p>This interface allows the authentication system to work with any &quot;user&quot; class, regardless of what ORM or storage abstraction layer you are using. By default, Laravel includes an <code>App\\Models\\User</code> class in the <code>app/Models</code> directory which implements this interface.</p><p><a name="events"></a></p><h2 id="events" tabindex="-1"><a class="header-anchor" href="#events" aria-hidden="true">#</a> Events</h2><p>Laravel dispatches a variety of <a href="./events">events</a> during the authentication process. You may attach listeners to these events in your <code>EventServiceProvider</code>:</p><pre><code>/**
 * The event listener mappings for the application.
 *
 * @var array
 */
protected $listen = [
    &#39;Illuminate\\Auth\\Events\\Registered&#39; =&gt; [
        &#39;App\\Listeners\\LogRegisteredUser&#39;,
    ],

    &#39;Illuminate\\Auth\\Events\\Attempting&#39; =&gt; [
        &#39;App\\Listeners\\LogAuthenticationAttempt&#39;,
    ],

    &#39;Illuminate\\Auth\\Events\\Authenticated&#39; =&gt; [
        &#39;App\\Listeners\\LogAuthenticated&#39;,
    ],

    &#39;Illuminate\\Auth\\Events\\Login&#39; =&gt; [
        &#39;App\\Listeners\\LogSuccessfulLogin&#39;,
    ],

    &#39;Illuminate\\Auth\\Events\\Failed&#39; =&gt; [
        &#39;App\\Listeners\\LogFailedLogin&#39;,
    ],

    &#39;Illuminate\\Auth\\Events\\Validated&#39; =&gt; [
        &#39;App\\Listeners\\LogValidated&#39;,
    ],

    &#39;Illuminate\\Auth\\Events\\Verified&#39; =&gt; [
        &#39;App\\Listeners\\LogVerified&#39;,
    ],

    &#39;Illuminate\\Auth\\Events\\Logout&#39; =&gt; [
        &#39;App\\Listeners\\LogSuccessfulLogout&#39;,
    ],

    &#39;Illuminate\\Auth\\Events\\CurrentDeviceLogout&#39; =&gt; [
        &#39;App\\Listeners\\LogCurrentDeviceLogout&#39;,
    ],

    &#39;Illuminate\\Auth\\Events\\OtherDeviceLogout&#39; =&gt; [
        &#39;App\\Listeners\\LogOtherDeviceLogout&#39;,
    ],

    &#39;Illuminate\\Auth\\Events\\Lockout&#39; =&gt; [
        &#39;App\\Listeners\\LogLockout&#39;,
    ],

    &#39;Illuminate\\Auth\\Events\\PasswordReset&#39; =&gt; [
        &#39;App\\Listeners\\LogPasswordReset&#39;,
    ],
];
</code></pre>`,91);function G(j,J){const a=r("ExternalLinkIcon");return s(),c("div",null,[d,t("p",null,[h,e(" is a simple, minimal implementation of all of Laravel's authentication features, including login, registration, password reset, email verification, and password confirmation. Laravel Breeze's view layer is comprised of simple "),l,e(" styled with "),t("a",p,[e("Tailwind CSS"),i(a)]),e(". To get started, check out the documentation on Laravel's "),m,e(".")]),f,t("p",null,[t("em",null,[t("a",g,[e("Laravel Jetstream"),i(a)])]),e(" is a robust application starter kit that consumes and exposes Laravel Fortify's authentication services with a beautiful, modern UI powered by "),t("a",v,[e("Tailwind CSS"),i(a)]),e(", "),t("a",y,[e("Livewire"),i(a)]),e(", and / or "),t("a",w,[e("Inertia"),i(a)]),e(". Laravel Jetstream includes optional support for two-factor authentication, team support, browser session management, profile management, and built-in integration with "),b,e(" to offer API token authentication. Laravel's API authentication offerings are discussed below.")]),A,t("p",null,[e("Laravel Sanctum is the API package we have chosen to include with the "),t("a",k,[e("Laravel Jetstream"),i(a)]),e(" application starter kit because we believe it is the best fit for the majority of web application's authentication needs.")]),q,t("p",null,[e("Laravel Breeze is a minimal, simple implementation of all of Laravel's authentication features, including login, registration, password reset, email verification, and password confirmation. Laravel Breeze's view layer is made up of simple "),I,e(" styled with "),t("a",L,[e("Tailwind CSS"),i(a)]),e(". Additionally, Breeze provides scaffolding options based on "),t("a",T,[e("Livewire"),i(a)]),e(" or "),t("a",_,[e("Inertia"),i(a)]),e(", with the choice of using Vue or React for the Inertia-based scaffolding.")]),t("p",null,[t("a",P,[e("Laravel Jetstream"),i(a)]),e(" is a more robust application starter kit that includes support for scaffolding your application with "),t("a",R,[e("Livewire"),i(a)]),e(" or "),t("a",x,[e("Inertia and Vue"),i(a)]),e(". In addition, Jetstream features optional support for two-factor authentication, teams, profile management, browser session management, API support via "),S,e(", account deletion, and more.")]),$,t("p",null,[e("We will access Laravel's authentication services via the "),C,e(),B,e(", so we'll need to make sure to import the "),H,e(" facade at the top of the class. Next, let's check out the "),U,e(" method. The "),F,e(` method is normally used to handle authentication attempts from your application's "login" form. If authentication is successful, you should regenerate the user's `),O,e(" to prevent "),t("a",E,[e("session fixation"),i(a)]),e(":")]),z,t("p",null,[t("a",M,[e("HTTP Basic Authentication"),i(a)]),e(' provides a quick way to authenticate users of your application without setting up a dedicated "login" page. To get started, attach the '),D,e(),N,e(" to a route. The "),W,e(" middleware is included with the Laravel framework, so you do not need to define it:")]),Y])}const Q=n(u,[["render",G],["__file","authentication.html.vue"]]);export{Q as default};
