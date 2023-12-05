import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as i,c as d,b as t,d as e,e as o,a}from"./app-8cdff07c.js";const u={},c=a(`<h1 id="routing" tabindex="-1"><a class="header-anchor" href="#routing" aria-hidden="true">#</a> Routing</h1><ul><li><a href="#basic-routing">Basic Routing</a><ul><li><a href="#redirect-routes">Redirect Routes</a></li><li><a href="#view-routes">View Routes</a></li><li><a href="#the-route-list">The Route List</a></li></ul></li><li><a href="#route-parameters">Route Parameters</a><ul><li><a href="#required-parameters">Required Parameters</a></li><li><a href="#parameters-optional-parameters">Optional Parameters</a></li><li><a href="#parameters-regular-expression-constraints">Regular Expression Constraints</a></li></ul></li><li><a href="#named-routes">Named Routes</a></li><li><a href="#route-groups">Route Groups</a><ul><li><a href="#route-group-middleware">Middleware</a></li><li><a href="#route-group-controllers">Controllers</a></li><li><a href="#route-group-subdomain-routing">Subdomain Routing</a></li><li><a href="#route-group-prefixes">Route Prefixes</a></li><li><a href="#route-group-name-prefixes">Route Name Prefixes</a></li></ul></li><li><a href="#route-model-binding">Route Model Binding</a><ul><li><a href="#implicit-binding">Implicit Binding</a></li><li><a href="#implicit-enum-binding">Implicit Enum Binding</a></li><li><a href="#explicit-binding">Explicit Binding</a></li></ul></li><li><a href="#fallback-routes">Fallback Routes</a></li><li><a href="#rate-limiting">Rate Limiting</a><ul><li><a href="#defining-rate-limiters">Defining Rate Limiters</a></li><li><a href="#attaching-rate-limiters-to-routes">Attaching Rate Limiters To Routes</a></li></ul></li><li><a href="#form-method-spoofing">Form Method Spoofing</a></li><li><a href="#accessing-the-current-route">Accessing The Current Route</a></li><li><a href="#cors">Cross-Origin Resource Sharing (CORS)</a></li><li><a href="#route-caching">Route Caching</a></li></ul><p><a name="basic-routing"></a></p><h2 id="basic-routing" tabindex="-1"><a class="header-anchor" href="#basic-routing" aria-hidden="true">#</a> Basic Routing</h2><p>The most basic Laravel routes accept a URI and a closure, providing a very simple and expressive method of defining routes and behavior without complicated routing configuration files:</p><pre><code>use Illuminate\\Support\\Facades\\Route;

Route::get(&#39;/greeting&#39;, function () {
    return &#39;Hello World&#39;;
});
</code></pre><p><a name="the-default-route-files"></a></p><h4 id="the-default-route-files" tabindex="-1"><a class="header-anchor" href="#the-default-route-files" aria-hidden="true">#</a> The Default Route Files</h4><p>All Laravel routes are defined in your route files, which are located in the <code>routes</code> directory. These files are automatically loaded by your application&#39;s <code>App\\Providers\\RouteServiceProvider</code>. The <code>routes/web.php</code> file defines routes that are for your web interface. These routes are assigned the <code>web</code> middleware group, which provides features like session state and CSRF protection. The routes in <code>routes/api.php</code> are stateless and are assigned the <code>api</code> middleware group.</p><p>For most applications, you will begin by defining routes in your <code>routes/web.php</code> file. The routes defined in <code>routes/web.php</code> may be accessed by entering the defined route&#39;s URL in your browser. For example, you may access the following route by navigating to <code>http://example.com/user</code> in your browser:</p><pre><code>use App\\Http\\Controllers\\UserController;

Route::get(&#39;/user&#39;, [UserController::class, &#39;index&#39;]);
</code></pre><p>Routes defined in the <code>routes/api.php</code> file are nested within a route group by the <code>RouteServiceProvider</code>. Within this group, the <code>/api</code> URI prefix is automatically applied so you do not need to manually apply it to every route in the file. You may modify the prefix and other route group options by modifying your <code>RouteServiceProvider</code> class.</p><p><a name="available-router-methods"></a></p><h4 id="available-router-methods" tabindex="-1"><a class="header-anchor" href="#available-router-methods" aria-hidden="true">#</a> Available Router Methods</h4><p>The router allows you to register routes that respond to any HTTP verb:</p><pre><code>Route::get($uri, $callback);
Route::post($uri, $callback);
Route::put($uri, $callback);
Route::patch($uri, $callback);
Route::delete($uri, $callback);
Route::options($uri, $callback);
</code></pre><p>Sometimes you may need to register a route that responds to multiple HTTP verbs. You may do so using the <code>match</code> method. Or, you may even register a route that responds to all HTTP verbs using the <code>any</code> method:</p><pre><code>Route::match([&#39;get&#39;, &#39;post&#39;], &#39;/&#39;, function () {
    // ...
});

Route::any(&#39;/&#39;, function () {
    // ...
});
</code></pre><blockquote><p><strong>Note</strong><br> When defining multiple routes that share the same URI, routes using the <code>get</code>, <code>post</code>, <code>put</code>, <code>patch</code>, <code>delete</code>, and <code>options</code> methods should be defined before routes using the <code>any</code>, <code>match</code>, and <code>redirect</code> methods. This ensures the incoming request is matched with the correct route.</p></blockquote><p><a name="dependency-injection"></a></p><h4 id="dependency-injection" tabindex="-1"><a class="header-anchor" href="#dependency-injection" aria-hidden="true">#</a> Dependency Injection</h4><p>You may type-hint any dependencies required by your route in your route&#39;s callback signature. The declared dependencies will automatically be resolved and injected into the callback by the Laravel <a href="./container">service container</a>. For example, you may type-hint the <code>Illuminate\\Http\\Request</code> class to have the current HTTP request automatically injected into your route callback:</p><pre><code>use Illuminate\\Http\\Request;

Route::get(&#39;/users&#39;, function (Request $request) {
    // ...
});
</code></pre><p><a name="csrf-protection"></a></p><h4 id="csrf-protection" tabindex="-1"><a class="header-anchor" href="#csrf-protection" aria-hidden="true">#</a> CSRF Protection</h4><p>Remember, any HTML forms pointing to <code>POST</code>, <code>PUT</code>, <code>PATCH</code>, or <code>DELETE</code> routes that are defined in the <code>web</code> routes file should include a CSRF token field. Otherwise, the request will be rejected. You can read more about CSRF protection in the <a href="./csrf">CSRF documentation</a>:</p><pre><code>&lt;form method=&quot;POST&quot; action=&quot;/profile&quot;&gt;
    @csrf
    ...
&lt;/form&gt;
</code></pre><p><a name="redirect-routes"></a></p><h3 id="redirect-routes" tabindex="-1"><a class="header-anchor" href="#redirect-routes" aria-hidden="true">#</a> Redirect Routes</h3><p>If you are defining a route that redirects to another URI, you may use the <code>Route::redirect</code> method. This method provides a convenient shortcut so that you do not have to define a full route or controller for performing a simple redirect:</p><pre><code>Route::redirect(&#39;/here&#39;, &#39;/there&#39;);
</code></pre><p>By default, <code>Route::redirect</code> returns a <code>302</code> status code. You may customize the status code using the optional third parameter:</p><pre><code>Route::redirect(&#39;/here&#39;, &#39;/there&#39;, 301);
</code></pre><p>Or, you may use the <code>Route::permanentRedirect</code> method to return a <code>301</code> status code:</p><pre><code>Route::permanentRedirect(&#39;/here&#39;, &#39;/there&#39;);
</code></pre><blockquote><p><strong>Warning</strong><br> When using route parameters in redirect routes, the following parameters are reserved by Laravel and cannot be used: <code>destination</code> and <code>status</code>.</p></blockquote><p><a name="view-routes"></a></p><h3 id="view-routes" tabindex="-1"><a class="header-anchor" href="#view-routes" aria-hidden="true">#</a> View Routes</h3><p>If your route only needs to return a <a href="./views">view</a>, you may use the <code>Route::view</code> method. Like the <code>redirect</code> method, this method provides a simple shortcut so that you do not have to define a full route or controller. The <code>view</code> method accepts a URI as its first argument and a view name as its second argument. In addition, you may provide an array of data to pass to the view as an optional third argument:</p><pre><code>Route::view(&#39;/welcome&#39;, &#39;welcome&#39;);

Route::view(&#39;/welcome&#39;, &#39;welcome&#39;, [&#39;name&#39; =&gt; &#39;Taylor&#39;]);
</code></pre><blockquote><p><strong>Warning</strong><br> When using route parameters in view routes, the following parameters are reserved by Laravel and cannot be used: <code>view</code>, <code>data</code>, <code>status</code>, and <code>headers</code>.</p></blockquote><p><a name="the-route-list"></a></p><h3 id="the-route-list" tabindex="-1"><a class="header-anchor" href="#the-route-list" aria-hidden="true">#</a> The Route List</h3><p>The <code>route:list</code> Artisan command can easily provide an overview of all of the routes that are defined by your application:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan route:list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>By default, the route middleware that are assigned to each route will not be displayed in the <code>route:list</code> output; however, you can instruct Laravel to display the route middleware and middleware group names by adding the <code>-v</code> option to the command:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan route:list <span class="token parameter variable">-v</span>

<span class="token comment"># Expand middleware groups...</span>
php artisan route:list <span class="token parameter variable">-vv</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You may also instruct Laravel to only show routes that begin with a given URI:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan route:list <span class="token parameter variable">--path</span><span class="token operator">=</span>api
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>In addition, you may instruct Laravel to hide any routes that are defined by third-party packages by providing the <code>--except-vendor</code> option when executing the <code>route:list</code> command:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan route:list --except-vendor
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Likewise, you may also instruct Laravel to only show routes that are defined by third-party packages by providing the <code>--only-vendor</code> option when executing the <code>route:list</code> command:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan route:list --only-vendor
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="route-parameters"></a></p><h2 id="route-parameters" tabindex="-1"><a class="header-anchor" href="#route-parameters" aria-hidden="true">#</a> Route Parameters</h2><p><a name="required-parameters"></a></p><h3 id="required-parameters" tabindex="-1"><a class="header-anchor" href="#required-parameters" aria-hidden="true">#</a> Required Parameters</h3><p>Sometimes you will need to capture segments of the URI within your route. For example, you may need to capture a user&#39;s ID from the URL. You may do so by defining route parameters:</p><pre><code>Route::get(&#39;/user/{id}&#39;, function (string $id) {
    return &#39;User &#39;.$id;
});
</code></pre><p>You may define as many route parameters as required by your route:</p><pre><code>Route::get(&#39;/posts/{post}/comments/{comment}&#39;, function (string $postId, string $commentId) {
    // ...
});
</code></pre><p>Route parameters are always encased within <code>{}</code> braces and should consist of alphabetic characters. Underscores (<code>_</code>) are also acceptable within route parameter names. Route parameters are injected into route callbacks / controllers based on their order - the names of the route callback / controller arguments do not matter.</p><p><a name="parameters-and-dependency-injection"></a></p><h4 id="parameters-dependency-injection" tabindex="-1"><a class="header-anchor" href="#parameters-dependency-injection" aria-hidden="true">#</a> Parameters &amp; Dependency Injection</h4><p>If your route has dependencies that you would like the Laravel service container to automatically inject into your route&#39;s callback, you should list your route parameters after your dependencies:</p><pre><code>use Illuminate\\Http\\Request;

Route::get(&#39;/user/{id}&#39;, function (Request $request, string $id) {
    return &#39;User &#39;.$id;
});
</code></pre><p><a name="parameters-optional-parameters"></a></p><h3 id="optional-parameters" tabindex="-1"><a class="header-anchor" href="#optional-parameters" aria-hidden="true">#</a> Optional Parameters</h3><p>Occasionally you may need to specify a route parameter that may not always be present in the URI. You may do so by placing a <code>?</code> mark after the parameter name. Make sure to give the route&#39;s corresponding variable a default value:</p><pre><code>Route::get(&#39;/user/{name?}&#39;, function (?string $name = null) {
    return $name;
});

Route::get(&#39;/user/{name?}&#39;, function (?string $name = &#39;John&#39;) {
    return $name;
});
</code></pre><p><a name="parameters-regular-expression-constraints"></a></p><h3 id="regular-expression-constraints" tabindex="-1"><a class="header-anchor" href="#regular-expression-constraints" aria-hidden="true">#</a> Regular Expression Constraints</h3><p>You may constrain the format of your route parameters using the <code>where</code> method on a route instance. The <code>where</code> method accepts the name of the parameter and a regular expression defining how the parameter should be constrained:</p><pre><code>Route::get(&#39;/user/{name}&#39;, function (string $name) {
    // ...
})-&gt;where(&#39;name&#39;, &#39;[A-Za-z]+&#39;);

Route::get(&#39;/user/{id}&#39;, function (string $id) {
    // ...
})-&gt;where(&#39;id&#39;, &#39;[0-9]+&#39;);

Route::get(&#39;/user/{id}/{name}&#39;, function (string $id, string $name) {
    // ...
})-&gt;where([&#39;id&#39; =&gt; &#39;[0-9]+&#39;, &#39;name&#39; =&gt; &#39;[a-z]+&#39;]);
</code></pre><p>For convenience, some commonly used regular expression patterns have helper methods that allow you to quickly add pattern constraints to your routes:</p><pre><code>Route::get(&#39;/user/{id}/{name}&#39;, function (string $id, string $name) {
    // ...
})-&gt;whereNumber(&#39;id&#39;)-&gt;whereAlpha(&#39;name&#39;);

Route::get(&#39;/user/{name}&#39;, function (string $name) {
    // ...
})-&gt;whereAlphaNumeric(&#39;name&#39;);

Route::get(&#39;/user/{id}&#39;, function (string $id) {
    // ...
})-&gt;whereUuid(&#39;id&#39;);

Route::get(&#39;/user/{id}&#39;, function (string $id) {
    //
})-&gt;whereUlid(&#39;id&#39;);

Route::get(&#39;/category/{category}&#39;, function (string $category) {
    // ...
})-&gt;whereIn(&#39;category&#39;, [&#39;movie&#39;, &#39;song&#39;, &#39;painting&#39;]);
</code></pre><p>If the incoming request does not match the route pattern constraints, a 404 HTTP response will be returned.</p><p><a name="parameters-global-constraints"></a></p><h4 id="global-constraints" tabindex="-1"><a class="header-anchor" href="#global-constraints" aria-hidden="true">#</a> Global Constraints</h4><p>If you would like a route parameter to always be constrained by a given regular expression, you may use the <code>pattern</code> method. You should define these patterns in the <code>boot</code> method of your <code>App\\Providers\\RouteServiceProvider</code> class:</p><pre><code>/**
 * Define your route model bindings, pattern filters, etc.
 */
public function boot(): void
{
    Route::pattern(&#39;id&#39;, &#39;[0-9]+&#39;);
}
</code></pre><p>Once the pattern has been defined, it is automatically applied to all routes using that parameter name:</p><pre><code>Route::get(&#39;/user/{id}&#39;, function (string $id) {
    // Only executed if {id} is numeric...
});
</code></pre><p><a name="parameters-encoded-forward-slashes"></a></p><h4 id="encoded-forward-slashes" tabindex="-1"><a class="header-anchor" href="#encoded-forward-slashes" aria-hidden="true">#</a> Encoded Forward Slashes</h4><p>The Laravel routing component allows all characters except <code>/</code> to be present within route parameter values. You must explicitly allow <code>/</code> to be part of your placeholder using a <code>where</code> condition regular expression:</p><pre><code>Route::get(&#39;/search/{search}&#39;, function (string $search) {
    return $search;
})-&gt;where(&#39;search&#39;, &#39;.*&#39;);
</code></pre><blockquote><p><strong>Warning</strong><br> Encoded forward slashes are only supported within the last route segment.</p></blockquote><p><a name="named-routes"></a></p><h2 id="named-routes" tabindex="-1"><a class="header-anchor" href="#named-routes" aria-hidden="true">#</a> Named Routes</h2><p>Named routes allow the convenient generation of URLs or redirects for specific routes. You may specify a name for a route by chaining the <code>name</code> method onto the route definition:</p><pre><code>Route::get(&#39;/user/profile&#39;, function () {
    // ...
})-&gt;name(&#39;profile&#39;);
</code></pre><p>You may also specify route names for controller actions:</p><pre><code>Route::get(
    &#39;/user/profile&#39;,
    [UserProfileController::class, &#39;show&#39;]
)-&gt;name(&#39;profile&#39;);
</code></pre><blockquote><p><strong>Warning</strong><br> Route names should always be unique.</p></blockquote><p><a name="generating-urls-to-named-routes"></a></p><h4 id="generating-urls-to-named-routes" tabindex="-1"><a class="header-anchor" href="#generating-urls-to-named-routes" aria-hidden="true">#</a> Generating URLs To Named Routes</h4><p>Once you have assigned a name to a given route, you may use the route&#39;s name when generating URLs or redirects via Laravel&#39;s <code>route</code> and <code>redirect</code> helper functions:</p><pre><code>// Generating URLs...
$url = route(&#39;profile&#39;);

// Generating Redirects...
return redirect()-&gt;route(&#39;profile&#39;);

return to_route(&#39;profile&#39;);
</code></pre><p>If the named route defines parameters, you may pass the parameters as the second argument to the <code>route</code> function. The given parameters will automatically be inserted into the generated URL in their correct positions:</p><pre><code>Route::get(&#39;/user/{id}/profile&#39;, function (string $id) {
    // ...
})-&gt;name(&#39;profile&#39;);

$url = route(&#39;profile&#39;, [&#39;id&#39; =&gt; 1]);
</code></pre><p>If you pass additional parameters in the array, those key / value pairs will automatically be added to the generated URL&#39;s query string:</p><pre><code>Route::get(&#39;/user/{id}/profile&#39;, function (string $id) {
    // ...
})-&gt;name(&#39;profile&#39;);

$url = route(&#39;profile&#39;, [&#39;id&#39; =&gt; 1, &#39;photos&#39; =&gt; &#39;yes&#39;]);

// /user/1/profile?photos=yes
</code></pre><blockquote><p><strong>Note</strong><br> Sometimes, you may wish to specify request-wide default values for URL parameters, such as the current locale. To accomplish this, you may use the <a href="./urls#default-values"><code>URL::defaults</code> method</a>.</p></blockquote><p><a name="inspecting-the-current-route"></a></p><h4 id="inspecting-the-current-route" tabindex="-1"><a class="header-anchor" href="#inspecting-the-current-route" aria-hidden="true">#</a> Inspecting The Current Route</h4><p>If you would like to determine if the current request was routed to a given named route, you may use the <code>named</code> method on a Route instance. For example, you may check the current route name from a route middleware:</p><pre><code>use Closure;
use Illuminate\\Http\\Request;
use Symfony\\Component\\HttpFoundation\\Response;

/**
 * Handle an incoming request.
 *
 * @param  \\Closure(\\Illuminate\\Http\\Request): (\\Symfony\\Component\\HttpFoundation\\Response)  $next
 */
public function handle(Request $request, Closure $next): Response
{
    if ($request-&gt;route()-&gt;named(&#39;profile&#39;)) {
        // ...
    }

    return $next($request);
}
</code></pre><p><a name="route-groups"></a></p><h2 id="route-groups" tabindex="-1"><a class="header-anchor" href="#route-groups" aria-hidden="true">#</a> Route Groups</h2><p>Route groups allow you to share route attributes, such as middleware, across a large number of routes without needing to define those attributes on each individual route.</p><p>Nested groups attempt to intelligently &quot;merge&quot; attributes with their parent group. Middleware and <code>where</code> conditions are merged while names and prefixes are appended. Namespace delimiters and slashes in URI prefixes are automatically added where appropriate.</p><p><a name="route-group-middleware"></a></p><h3 id="middleware" tabindex="-1"><a class="header-anchor" href="#middleware" aria-hidden="true">#</a> Middleware</h3><p>To assign <a href="./middleware">middleware</a> to all routes within a group, you may use the <code>middleware</code> method before defining the group. Middleware are executed in the order they are listed in the array:</p><pre><code>Route::middleware([&#39;first&#39;, &#39;second&#39;])-&gt;group(function () {
    Route::get(&#39;/&#39;, function () {
        // Uses first &amp; second middleware...
    });

    Route::get(&#39;/user/profile&#39;, function () {
        // Uses first &amp; second middleware...
    });
});
</code></pre><p><a name="route-group-controllers"></a></p><h3 id="controllers" tabindex="-1"><a class="header-anchor" href="#controllers" aria-hidden="true">#</a> Controllers</h3><p>If a group of routes all utilize the same <a href="./controllers">controller</a>, you may use the <code>controller</code> method to define the common controller for all of the routes within the group. Then, when defining the routes, you only need to provide the controller method that they invoke:</p><pre><code>use App\\Http\\Controllers\\OrderController;

Route::controller(OrderController::class)-&gt;group(function () {
    Route::get(&#39;/orders/{id}&#39;, &#39;show&#39;);
    Route::post(&#39;/orders&#39;, &#39;store&#39;);
});
</code></pre><p><a name="route-group-subdomain-routing"></a></p><h3 id="subdomain-routing" tabindex="-1"><a class="header-anchor" href="#subdomain-routing" aria-hidden="true">#</a> Subdomain Routing</h3><p>Route groups may also be used to handle subdomain routing. Subdomains may be assigned route parameters just like route URIs, allowing you to capture a portion of the subdomain for usage in your route or controller. The subdomain may be specified by calling the <code>domain</code> method before defining the group:</p><pre><code>Route::domain(&#39;{account}.example.com&#39;)-&gt;group(function () {
    Route::get(&#39;user/{id}&#39;, function (string $account, string $id) {
        // ...
    });
});
</code></pre><blockquote><p><strong>Warning</strong><br> In order to ensure your subdomain routes are reachable, you should register subdomain routes before registering root domain routes. This will prevent root domain routes from overwriting subdomain routes which have the same URI path.</p></blockquote><p><a name="route-group-prefixes"></a></p><h3 id="route-prefixes" tabindex="-1"><a class="header-anchor" href="#route-prefixes" aria-hidden="true">#</a> Route Prefixes</h3><p>The <code>prefix</code> method may be used to prefix each route in the group with a given URI. For example, you may want to prefix all route URIs within the group with <code>admin</code>:</p><pre><code>Route::prefix(&#39;admin&#39;)-&gt;group(function () {
    Route::get(&#39;/users&#39;, function () {
        // Matches The &quot;/admin/users&quot; URL
    });
});
</code></pre><p><a name="route-group-name-prefixes"></a></p><h3 id="route-name-prefixes" tabindex="-1"><a class="header-anchor" href="#route-name-prefixes" aria-hidden="true">#</a> Route Name Prefixes</h3><p>The <code>name</code> method may be used to prefix each route name in the group with a given string. For example, you may want to prefix the names of all of the routes in the group with <code>admin</code>. The given string is prefixed to the route name exactly as it is specified, so we will be sure to provide the trailing <code>.</code> character in the prefix:</p><pre><code>Route::name(&#39;admin.&#39;)-&gt;group(function () {
    Route::get(&#39;/users&#39;, function () {
        // Route assigned name &quot;admin.users&quot;...
    })-&gt;name(&#39;users&#39;);
});
</code></pre><p><a name="route-model-binding"></a></p><h2 id="route-model-binding" tabindex="-1"><a class="header-anchor" href="#route-model-binding" aria-hidden="true">#</a> Route Model Binding</h2><p>When injecting a model ID to a route or controller action, you will often query the database to retrieve the model that corresponds to that ID. Laravel route model binding provides a convenient way to automatically inject the model instances directly into your routes. For example, instead of injecting a user&#39;s ID, you can inject the entire <code>User</code> model instance that matches the given ID.</p><p><a name="implicit-binding"></a></p><h3 id="implicit-binding" tabindex="-1"><a class="header-anchor" href="#implicit-binding" aria-hidden="true">#</a> Implicit Binding</h3><p>Laravel automatically resolves Eloquent models defined in routes or controller actions whose type-hinted variable names match a route segment name. For example:</p><pre><code>use App\\Models\\User;

Route::get(&#39;/users/{user}&#39;, function (User $user) {
    return $user-&gt;email;
});
</code></pre><p>Since the <code>$user</code> variable is type-hinted as the <code>App\\Models\\User</code> Eloquent model and the variable name matches the <code>{user}</code> URI segment, Laravel will automatically inject the model instance that has an ID matching the corresponding value from the request URI. If a matching model instance is not found in the database, a 404 HTTP response will automatically be generated.</p><p>Of course, implicit binding is also possible when using controller methods. Again, note the <code>{user}</code> URI segment matches the <code>$user</code> variable in the controller which contains an <code>App\\Models\\User</code> type-hint:</p><pre><code>use App\\Http\\Controllers\\UserController;
use App\\Models\\User;

// Route definition...
Route::get(&#39;/users/{user}&#39;, [UserController::class, &#39;show&#39;]);

// Controller method definition...
public function show(User $user)
{
    return view(&#39;user.profile&#39;, [&#39;user&#39; =&gt; $user]);
}
</code></pre><p><a name="implicit-soft-deleted-models"></a></p><h4 id="soft-deleted-models" tabindex="-1"><a class="header-anchor" href="#soft-deleted-models" aria-hidden="true">#</a> Soft Deleted Models</h4><p>Typically, implicit model binding will not retrieve models that have been <a href="./eloquent#soft-deleting">soft deleted</a>. However, you may instruct the implicit binding to retrieve these models by chaining the <code>withTrashed</code> method onto your route&#39;s definition:</p><pre><code>use App\\Models\\User;

Route::get(&#39;/users/{user}&#39;, function (User $user) {
    return $user-&gt;email;
})-&gt;withTrashed();
</code></pre><p><a name="customizing-the-key"></a><a name="customizing-the-default-key-name"></a></p><h4 id="customizing-the-key" tabindex="-1"><a class="header-anchor" href="#customizing-the-key" aria-hidden="true">#</a> Customizing The Key</h4><p>Sometimes you may wish to resolve Eloquent models using a column other than <code>id</code>. To do so, you may specify the column in the route parameter definition:</p><pre><code>use App\\Models\\Post;

Route::get(&#39;/posts/{post:slug}&#39;, function (Post $post) {
    return $post;
});
</code></pre><p>If you would like model binding to always use a database column other than <code>id</code> when retrieving a given model class, you may override the <code>getRouteKeyName</code> method on the Eloquent model:</p><pre><code>/**
 * Get the route key for the model.
 */
public function getRouteKeyName(): string
{
    return &#39;slug&#39;;
}
</code></pre><p><a name="implicit-model-binding-scoping"></a></p><h4 id="custom-keys-scoping" tabindex="-1"><a class="header-anchor" href="#custom-keys-scoping" aria-hidden="true">#</a> Custom Keys &amp; Scoping</h4><p>When implicitly binding multiple Eloquent models in a single route definition, you may wish to scope the second Eloquent model such that it must be a child of the previous Eloquent model. For example, consider this route definition that retrieves a blog post by slug for a specific user:</p><pre><code>use App\\Models\\Post;
use App\\Models\\User;

Route::get(&#39;/users/{user}/posts/{post:slug}&#39;, function (User $user, Post $post) {
    return $post;
});
</code></pre><p>When using a custom keyed implicit binding as a nested route parameter, Laravel will automatically scope the query to retrieve the nested model by its parent using conventions to guess the relationship name on the parent. In this case, it will be assumed that the <code>User</code> model has a relationship named <code>posts</code> (the plural form of the route parameter name) which can be used to retrieve the <code>Post</code> model.</p><p>If you wish, you may instruct Laravel to scope &quot;child&quot; bindings even when a custom key is not provided. To do so, you may invoke the <code>scopeBindings</code> method when defining your route:</p><pre><code>use App\\Models\\Post;
use App\\Models\\User;

Route::get(&#39;/users/{user}/posts/{post}&#39;, function (User $user, Post $post) {
    return $post;
})-&gt;scopeBindings();
</code></pre><p>Or, you may instruct an entire group of route definitions to use scoped bindings:</p><pre><code>Route::scopeBindings()-&gt;group(function () {
    Route::get(&#39;/users/{user}/posts/{post}&#39;, function (User $user, Post $post) {
        return $post;
    });
});
</code></pre><p>Similarly, you may explicitly instruct Laravel to not scope bindings by invoking the <code>withoutScopedBindings</code> method:</p><pre><code>Route::get(&#39;/users/{user}/posts/{post:slug}&#39;, function (User $user, Post $post) {
    return $post;
})-&gt;withoutScopedBindings();
</code></pre><p><a name="customizing-missing-model-behavior"></a></p><h4 id="customizing-missing-model-behavior" tabindex="-1"><a class="header-anchor" href="#customizing-missing-model-behavior" aria-hidden="true">#</a> Customizing Missing Model Behavior</h4><p>Typically, a 404 HTTP response will be generated if an implicitly bound model is not found. However, you may customize this behavior by calling the <code>missing</code> method when defining your route. The <code>missing</code> method accepts a closure that will be invoked if an implicitly bound model can not be found:</p><pre><code>use App\\Http\\Controllers\\LocationsController;
use Illuminate\\Http\\Request;
use Illuminate\\Support\\Facades\\Redirect;

Route::get(&#39;/locations/{location:slug}&#39;, [LocationsController::class, &#39;show&#39;])
        -&gt;name(&#39;locations.view&#39;)
        -&gt;missing(function (Request $request) {
            return Redirect::route(&#39;locations.index&#39;);
        });
</code></pre><p><a name="implicit-enum-binding"></a></p><h3 id="implicit-enum-binding" tabindex="-1"><a class="header-anchor" href="#implicit-enum-binding" aria-hidden="true">#</a> Implicit Enum Binding</h3>`,170),l={href:"https://www.php.net/manual/en/language.enumerations.backed.php",target:"_blank",rel:"noopener noreferrer"},p={href:"https://www.php.net/manual/en/language.enumerations.backed.php",target:"_blank",rel:"noopener noreferrer"},h=a(`<div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Enums</span><span class="token punctuation">;</span>

<span class="token keyword">enum</span> <span class="token class-name-definition class-name">Category</span><span class="token punctuation">:</span> <span class="token keyword type-declaration">string</span>
<span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token constant">Fruits</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;fruits&#39;</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token constant">People</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;people&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You may define a route that will only be invoked if the <code>{category}</code> route segment is <code>fruits</code> or <code>people</code>. Otherwise, Laravel will return a 404 HTTP response:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Enums<span class="token punctuation">\\</span>Category</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Support<span class="token punctuation">\\</span>Facades<span class="token punctuation">\\</span>Route</span><span class="token punctuation">;</span>

<span class="token class-name static-context">Route</span><span class="token operator">::</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;/categories/{category}&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">Category</span> <span class="token variable">$category</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token variable">$category</span><span class="token operator">-&gt;</span><span class="token property">value</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="explicit-binding"></a></p><h3 id="explicit-binding" tabindex="-1"><a class="header-anchor" href="#explicit-binding" aria-hidden="true">#</a> Explicit Binding</h3><p>You are not required to use Laravel&#39;s implicit, convention based model resolution in order to use model binding. You can also explicitly define how route parameters correspond to models. To register an explicit binding, use the router&#39;s <code>model</code> method to specify the class for a given parameter. You should define your explicit model bindings at the beginning of the <code>boot</code> method of your <code>RouteServiceProvider</code> class:</p><pre><code>use App\\Models\\User;
use Illuminate\\Support\\Facades\\Route;

/**
 * Define your route model bindings, pattern filters, etc.
 */
public function boot(): void
{
    Route::model(&#39;user&#39;, User::class);

    // ...
}
</code></pre><p>Next, define a route that contains a <code>{user}</code> parameter:</p><pre><code>use App\\Models\\User;

Route::get(&#39;/users/{user}&#39;, function (User $user) {
    // ...
});
</code></pre><p>Since we have bound all <code>{user}</code> parameters to the <code>App\\Models\\User</code> model, an instance of that class will be injected into the route. So, for example, a request to <code>users/1</code> will inject the <code>User</code> instance from the database which has an ID of <code>1</code>.</p><p>If a matching model instance is not found in the database, a 404 HTTP response will be automatically generated.</p><p><a name="customizing-the-resolution-logic"></a></p><h4 id="customizing-the-resolution-logic" tabindex="-1"><a class="header-anchor" href="#customizing-the-resolution-logic" aria-hidden="true">#</a> Customizing The Resolution Logic</h4><p>If you wish to define your own model binding resolution logic, you may use the <code>Route::bind</code> method. The closure you pass to the <code>bind</code> method will receive the value of the URI segment and should return the instance of the class that should be injected into the route. Again, this customization should take place in the <code>boot</code> method of your application&#39;s <code>RouteServiceProvider</code>:</p><pre><code>use App\\Models\\User;
use Illuminate\\Support\\Facades\\Route;

/**
 * Define your route model bindings, pattern filters, etc.
 */
public function boot(): void
{
    Route::bind(&#39;user&#39;, function (string $value) {
        return User::where(&#39;name&#39;, $value)-&gt;firstOrFail();
    });

    // ...
}
</code></pre><p>Alternatively, you may override the <code>resolveRouteBinding</code> method on your Eloquent model. This method will receive the value of the URI segment and should return the instance of the class that should be injected into the route:</p><pre><code>/**
 * Retrieve the model for a bound value.
 *
 * @param  mixed  $value
 * @param  string|null  $field
 * @return \\Illuminate\\Database\\Eloquent\\Model|null
 */
public function resolveRouteBinding($value, $field = null)
{
    return $this-&gt;where(&#39;name&#39;, $value)-&gt;firstOrFail();
}
</code></pre><p>If a route is utilizing <a href="#implicit-model-binding-scoping">implicit binding scoping</a>, the <code>resolveChildRouteBinding</code> method will be used to resolve the child binding of the parent model:</p><pre><code>/**
 * Retrieve the child model for a bound value.
 *
 * @param  string  $childType
 * @param  mixed  $value
 * @param  string|null  $field
 * @return \\Illuminate\\Database\\Eloquent\\Model|null
 */
public function resolveChildRouteBinding($childType, $value, $field)
{
    return parent::resolveChildRouteBinding($childType, $value, $field);
}
</code></pre><p><a name="fallback-routes"></a></p><h2 id="fallback-routes" tabindex="-1"><a class="header-anchor" href="#fallback-routes" aria-hidden="true">#</a> Fallback Routes</h2><p>Using the <code>Route::fallback</code> method, you may define a route that will be executed when no other route matches the incoming request. Typically, unhandled requests will automatically render a &quot;404&quot; page via your application&#39;s exception handler. However, since you would typically define the <code>fallback</code> route within your <code>routes/web.php</code> file, all middleware in the <code>web</code> middleware group will apply to the route. You are free to add additional middleware to this route as needed:</p><pre><code>Route::fallback(function () {
    // ...
});
</code></pre><blockquote><p><strong>Warning</strong><br> The fallback route should always be the last route registered by your application.</p></blockquote><p><a name="rate-limiting"></a></p><h2 id="rate-limiting" tabindex="-1"><a class="header-anchor" href="#rate-limiting" aria-hidden="true">#</a> Rate Limiting</h2><p><a name="defining-rate-limiters"></a></p><h3 id="defining-rate-limiters" tabindex="-1"><a class="header-anchor" href="#defining-rate-limiters" aria-hidden="true">#</a> Defining Rate Limiters</h3><p>Laravel includes powerful and customizable rate limiting services that you may utilize to restrict the amount of traffic for a given route or group of routes. To get started, you should define rate limiter configurations that meet your application&#39;s needs.</p><p>Typically, rate limiters are defined within the <code>boot</code> method of your application&#39;s <code>App\\Providers\\RouteServiceProvider</code> class. In fact, this class already includes a rate limiter definition that is applied to the routes in your application&#39;s <code>routes/api.php</code> file:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Cache<span class="token punctuation">\\</span>RateLimiting<span class="token punctuation">\\</span>Limit</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Request</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Support<span class="token punctuation">\\</span>Facades<span class="token punctuation">\\</span>RateLimiter</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * Define your route model bindings, pattern filters, and other route configuration.
 */</span>
<span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function-definition function">boot</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span>
<span class="token punctuation">{</span>
    <span class="token class-name static-context">RateLimiter</span><span class="token operator">::</span><span class="token function">for</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;api&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">Request</span> <span class="token variable">$request</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name static-context">Limit</span><span class="token operator">::</span><span class="token function">perMinute</span><span class="token punctuation">(</span><span class="token number">60</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">by</span><span class="token punctuation">(</span><span class="token variable">$request</span><span class="token operator">-&gt;</span><span class="token function">user</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">?-&gt;</span><span class="token property">id</span> <span class="token operator">?</span><span class="token punctuation">:</span> <span class="token variable">$request</span><span class="token operator">-&gt;</span><span class="token function">ip</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Rate limiters are defined using the <code>RateLimiter</code> facade&#39;s <code>for</code> method. The <code>for</code> method accepts a rate limiter name and a closure that returns the limit configuration that should apply to routes that are assigned to the rate limiter. Limit configuration are instances of the <code>Illuminate\\Cache\\RateLimiting\\Limit</code> class. This class contains helpful &quot;builder&quot; methods so that you can quickly define your limit. The rate limiter name may be any string you wish:</p><pre><code>use Illuminate\\Cache\\RateLimiting\\Limit;
use Illuminate\\Http\\Request;
use Illuminate\\Support\\Facades\\RateLimiter;

/**
 * Define your route model bindings, pattern filters, and other route configuration.
 */
protected function boot(): void
{
    RateLimiter::for(&#39;global&#39;, function (Request $request) {
        return Limit::perMinute(1000);
    });

    // ...
}
</code></pre><p>If the incoming request exceeds the specified rate limit, a response with a 429 HTTP status code will automatically be returned by Laravel. If you would like to define your own response that should be returned by a rate limit, you may use the <code>response</code> method:</p><pre><code>RateLimiter::for(&#39;global&#39;, function (Request $request) {
    return Limit::perMinute(1000)-&gt;response(function (Request $request, array $headers) {
        return response(&#39;Custom response...&#39;, 429, $headers);
    });
});
</code></pre><p>Since rate limiter callbacks receive the incoming HTTP request instance, you may build the appropriate rate limit dynamically based on the incoming request or authenticated user:</p><pre><code>RateLimiter::for(&#39;uploads&#39;, function (Request $request) {
    return $request-&gt;user()-&gt;vipCustomer()
                ? Limit::none()
                : Limit::perMinute(100);
});
</code></pre><p><a name="segmenting-rate-limits"></a></p><h4 id="segmenting-rate-limits" tabindex="-1"><a class="header-anchor" href="#segmenting-rate-limits" aria-hidden="true">#</a> Segmenting Rate Limits</h4><p>Sometimes you may wish to segment rate limits by some arbitrary value. For example, you may wish to allow users to access a given route 100 times per minute per IP address. To accomplish this, you may use the <code>by</code> method when building your rate limit:</p><pre><code>RateLimiter::for(&#39;uploads&#39;, function (Request $request) {
    return $request-&gt;user()-&gt;vipCustomer()
                ? Limit::none()
                : Limit::perMinute(100)-&gt;by($request-&gt;ip());
});
</code></pre><p>To illustrate this feature using another example, we can limit access to the route to 100 times per minute per authenticated user ID or 10 times per minute per IP address for guests:</p><pre><code>RateLimiter::for(&#39;uploads&#39;, function (Request $request) {
    return $request-&gt;user()
                ? Limit::perMinute(100)-&gt;by($request-&gt;user()-&gt;id)
                : Limit::perMinute(10)-&gt;by($request-&gt;ip());
});
</code></pre><p><a name="multiple-rate-limits"></a></p><h4 id="multiple-rate-limits" tabindex="-1"><a class="header-anchor" href="#multiple-rate-limits" aria-hidden="true">#</a> Multiple Rate Limits</h4><p>If needed, you may return an array of rate limits for a given rate limiter configuration. Each rate limit will be evaluated for the route based on the order they are placed within the array:</p><pre><code>RateLimiter::for(&#39;login&#39;, function (Request $request) {
    return [
        Limit::perMinute(500),
        Limit::perMinute(3)-&gt;by($request-&gt;input(&#39;email&#39;)),
    ];
});
</code></pre><p><a name="attaching-rate-limiters-to-routes"></a></p><h3 id="attaching-rate-limiters-to-routes" tabindex="-1"><a class="header-anchor" href="#attaching-rate-limiters-to-routes" aria-hidden="true">#</a> Attaching Rate Limiters To Routes</h3><p>Rate limiters may be attached to routes or route groups using the <code>throttle</code> <a href="./middleware">middleware</a>. The throttle middleware accepts the name of the rate limiter you wish to assign to the route:</p><pre><code>Route::middleware([&#39;throttle:uploads&#39;])-&gt;group(function () {
    Route::post(&#39;/audio&#39;, function () {
        // ...
    });

    Route::post(&#39;/video&#39;, function () {
        // ...
    });
});
</code></pre><p><a name="throttling-with-redis"></a></p><h4 id="throttling-with-redis" tabindex="-1"><a class="header-anchor" href="#throttling-with-redis" aria-hidden="true">#</a> Throttling With Redis</h4><p>Typically, the <code>throttle</code> middleware is mapped to the <code>Illuminate\\Routing\\Middleware\\ThrottleRequests</code> class. This mapping is defined in your application&#39;s HTTP kernel (<code>App\\Http\\Kernel</code>). However, if you are using Redis as your application&#39;s cache driver, you may wish to change this mapping to use the <code>Illuminate\\Routing\\Middleware\\ThrottleRequestsWithRedis</code> class. This class is more efficient at managing rate limiting using Redis:</p><pre><code>&#39;throttle&#39; =&gt; \\Illuminate\\Routing\\Middleware\\ThrottleRequestsWithRedis::class,
</code></pre><p><a name="form-method-spoofing"></a></p><h2 id="form-method-spoofing" tabindex="-1"><a class="header-anchor" href="#form-method-spoofing" aria-hidden="true">#</a> Form Method Spoofing</h2><p>HTML forms do not support <code>PUT</code>, <code>PATCH</code>, or <code>DELETE</code> actions. So, when defining <code>PUT</code>, <code>PATCH</code>, or <code>DELETE</code> routes that are called from an HTML form, you will need to add a hidden <code>_method</code> field to the form. The value sent with the <code>_method</code> field will be used as the HTTP request method:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token operator">&lt;</span>form action<span class="token operator">=</span><span class="token string double-quoted-string">&quot;/example&quot;</span> method<span class="token operator">=</span><span class="token string double-quoted-string">&quot;POST&quot;</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string double-quoted-string">&quot;hidden&quot;</span> name<span class="token operator">=</span><span class="token string double-quoted-string">&quot;_method&quot;</span> value<span class="token operator">=</span><span class="token string double-quoted-string">&quot;PUT&quot;</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string double-quoted-string">&quot;hidden&quot;</span> name<span class="token operator">=</span><span class="token string double-quoted-string">&quot;_token&quot;</span> value<span class="token operator">=</span><span class="token string double-quoted-string">&quot;{{ csrf_token() }}&quot;</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>For convenience, you may use the <code>@method</code> <a href="./blade">Blade directive</a> to generate the <code>_method</code> input field:</p><pre><code>&lt;form action=&quot;/example&quot; method=&quot;POST&quot;&gt;
    @method(&#39;PUT&#39;)
    @csrf
&lt;/form&gt;
</code></pre><p><a name="accessing-the-current-route"></a></p><h2 id="accessing-the-current-route" tabindex="-1"><a class="header-anchor" href="#accessing-the-current-route" aria-hidden="true">#</a> Accessing The Current Route</h2><p>You may use the <code>current</code>, <code>currentRouteName</code>, and <code>currentRouteAction</code> methods on the <code>Route</code> facade to access information about the route handling the incoming request:</p><pre><code>use Illuminate\\Support\\Facades\\Route;

$route = Route::current(); // Illuminate\\Routing\\Route
$name = Route::currentRouteName(); // string
$action = Route::currentRouteAction(); // string
</code></pre>`,65),m={href:"https://laravel.com/api/%7B%7Bversion%7D%7D/Illuminate/Routing/Router.html",target:"_blank",rel:"noopener noreferrer"},g={href:"https://laravel.com/api/%7B%7Bversion%7D%7D/Illuminate/Routing/Route.html",target:"_blank",rel:"noopener noreferrer"},f=a('<p><a name="cors"></a></p><h2 id="cross-origin-resource-sharing-cors" tabindex="-1"><a class="header-anchor" href="#cross-origin-resource-sharing-cors" aria-hidden="true">#</a> Cross-Origin Resource Sharing (CORS)</h2><p>Laravel can automatically respond to CORS <code>OPTIONS</code> HTTP requests with values that you configure. All CORS settings may be configured in your application&#39;s <code>config/cors.php</code> configuration file. The <code>OPTIONS</code> requests will automatically be handled by the <code>HandleCors</code> <a href="./middleware">middleware</a> that is included by default in your global middleware stack. Your global middleware stack is located in your application&#39;s HTTP kernel (<code>App\\Http\\Kernel</code>).</p>',3),b=t("strong",null,"Note",-1),y=t("br",null,null,-1),v={href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#The_HTTP_response_headers",target:"_blank",rel:"noopener noreferrer"},w=a(`<p><a name="route-caching"></a></p><h2 id="route-caching" tabindex="-1"><a class="header-anchor" href="#route-caching" aria-hidden="true">#</a> Route Caching</h2><p>When deploying your application to production, you should take advantage of Laravel&#39;s route cache. Using the route cache will drastically decrease the amount of time it takes to register all of your application&#39;s routes. To generate a route cache, execute the <code>route:cache</code> Artisan command:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan route:cache
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>After running this command, your cached routes file will be loaded on every request. Remember, if you add any new routes you will need to generate a fresh route cache. Because of this, you should only run the <code>route:cache</code> command during your project&#39;s deployment.</p><p>You may use the <code>route:clear</code> command to clear the route cache:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan route:clear
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,7);function k(R,q){const n=s("ExternalLinkIcon");return i(),d("div",null,[c,t("p",null,[e("PHP 8.1 introduced support for "),t("a",l,[e("Enums"),o(n)]),e(". To compliment this feature, Laravel allows you to type-hint a "),t("a",p,[e("string-backed Enum"),o(n)]),e(" on your route definition and Laravel will only invoke the route if that route segment corresponds to a valid Enum value. Otherwise, a 404 HTTP response will be returned automatically. For example, given the following Enum:")]),h,t("p",null,[e("You may refer to the API documentation for both the "),t("a",m,[e("underlying class of the Route facade"),o(n)]),e(" and "),t("a",g,[e("Route instance"),o(n)]),e(" to review all of the methods that are available on the router and route classes.")]),f,t("blockquote",null,[t("p",null,[b,y,e(" For more information on CORS and CORS headers, please consult the "),t("a",v,[e("MDN web documentation on CORS"),o(n)]),e(".")])]),w])}const $=r(u,[["render",k],["__file","routing.html.vue"]]);export{$ as default};
