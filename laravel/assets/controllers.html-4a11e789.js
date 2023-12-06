import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o,c as t,a as n}from"./app-06635a3b.js";const s={},r=n(`<h1 id="controllers" tabindex="-1"><a class="header-anchor" href="#controllers" aria-hidden="true">#</a> Controllers</h1><ul><li><a href="#introduction">Introduction</a></li><li><a href="#writing-controllers">Writing Controllers</a><ul><li><a href="#basic-controllers">Basic Controllers</a></li><li><a href="#single-action-controllers">Single Action Controllers</a></li></ul></li><li><a href="#controller-middleware">Controller Middleware</a></li><li><a href="#resource-controllers">Resource Controllers</a><ul><li><a href="#restful-partial-resource-routes">Partial Resource Routes</a></li><li><a href="#restful-nested-resources">Nested Resources</a></li><li><a href="#restful-naming-resource-routes">Naming Resource Routes</a></li><li><a href="#restful-naming-resource-route-parameters">Naming Resource Route Parameters</a></li><li><a href="#restful-scoping-resource-routes">Scoping Resource Routes</a></li><li><a href="#restful-localizing-resource-uris">Localizing Resource URIs</a></li><li><a href="#restful-supplementing-resource-controllers">Supplementing Resource Controllers</a></li><li><a href="#singleton-resource-controllers">Singleton Resource Controllers</a></li></ul></li><li><a href="#dependency-injection-and-controllers">Dependency Injection &amp; Controllers</a></li></ul><p><a name="introduction"></a></p><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p>Instead of defining all of your request handling logic as closures in your route files, you may wish to organize this behavior using &quot;controller&quot; classes. Controllers can group related request handling logic into a single class. For example, a <code>UserController</code> class might handle all incoming requests related to users, including showing, creating, updating, and deleting users. By default, controllers are stored in the <code>app/Http/Controllers</code> directory.</p><p><a name="writing-controllers"></a></p><h2 id="writing-controllers" tabindex="-1"><a class="header-anchor" href="#writing-controllers" aria-hidden="true">#</a> Writing Controllers</h2><p><a name="basic-controllers"></a></p><h3 id="basic-controllers" tabindex="-1"><a class="header-anchor" href="#basic-controllers" aria-hidden="true">#</a> Basic Controllers</h3><p>To quickly generate a new controller, you may run the <code>make:controller</code> Artisan command. By default, all of the controllers for your application are stored in the <code>app/Http/Controllers</code> directory:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan make:controller UserController
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Let&#39;s take a look at an example of a basic controller. A controller may have any number of public methods which will respond to incoming HTTP requests:</p><pre><code>&lt;?php

namespace App\\Http\\Controllers;

use App\\Models\\User;
use Illuminate\\View\\View;

class UserController extends Controller
{
    /**
     * Show the profile for a given user.
     */
    public function show(string $id): View
    {
        return view(&#39;user.profile&#39;, [
            &#39;user&#39; =&gt; User::findOrFail($id)
        ]);
    }
}
</code></pre><p>Once you have written a controller class and method, you may define a route to the controller method like so:</p><pre><code>use App\\Http\\Controllers\\UserController;

Route::get(&#39;/user/{id}&#39;, [UserController::class, &#39;show&#39;]);
</code></pre><p>When an incoming request matches the specified route URI, the <code>show</code> method on the <code>App\\Http\\Controllers\\UserController</code> class will be invoked and the route parameters will be passed to the method.</p><blockquote><p><strong>Note</strong><br> Controllers are not <strong>required</strong> to extend a base class. However, you will not have access to convenient features such as the <code>middleware</code> and <code>authorize</code> methods.</p></blockquote><p><a name="single-action-controllers"></a></p><h3 id="single-action-controllers" tabindex="-1"><a class="header-anchor" href="#single-action-controllers" aria-hidden="true">#</a> Single Action Controllers</h3><p>If a controller action is particularly complex, you might find it convenient to dedicate an entire controller class to that single action. To accomplish this, you may define a single <code>__invoke</code> method within the controller:</p><pre><code>&lt;?php

namespace App\\Http\\Controllers;

class ProvisionServer extends Controller
{
    /**
     * Provision a new web server.
     */
    public function __invoke()
    {
        // ...
    }
}
</code></pre><p>When registering routes for single action controllers, you do not need to specify a controller method. Instead, you may simply pass the name of the controller to the router:</p><pre><code>use App\\Http\\Controllers\\ProvisionServer;

Route::post(&#39;/server&#39;, ProvisionServer::class);
</code></pre><p>You may generate an invokable controller by using the <code>--invokable</code> option of the <code>make:controller</code> Artisan command:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan make:controller ProvisionServer <span class="token parameter variable">--invokable</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p><strong>Note</strong><br> Controller stubs may be customized using <a href="./artisan#stub-customization">stub publishing</a>.</p></blockquote><p><a name="controller-middleware"></a></p><h2 id="controller-middleware" tabindex="-1"><a class="header-anchor" href="#controller-middleware" aria-hidden="true">#</a> Controller Middleware</h2><p><a href="./middleware">Middleware</a> may be assigned to the controller&#39;s routes in your route files:</p><pre><code>Route::get(&#39;profile&#39;, [UserController::class, &#39;show&#39;])-&gt;middleware(&#39;auth&#39;);
</code></pre><p>Or, you may find it convenient to specify middleware within your controller&#39;s constructor. Using the <code>middleware</code> method within your controller&#39;s constructor, you can assign middleware to the controller&#39;s actions:</p><pre><code>class UserController extends Controller
{
    /**
     * Instantiate a new controller instance.
     */
    public function __construct()
    {
        $this-&gt;middleware(&#39;auth&#39;);
        $this-&gt;middleware(&#39;log&#39;)-&gt;only(&#39;index&#39;);
        $this-&gt;middleware(&#39;subscribed&#39;)-&gt;except(&#39;store&#39;);
    }
}
</code></pre><p>Controllers also allow you to register middleware using a closure. This provides a convenient way to define an inline middleware for a single controller without defining an entire middleware class:</p><pre><code>use Closure;
use Illuminate\\Http\\Request;

$this-&gt;middleware(function (Request $request, Closure $next) {
    return $next($request);
});
</code></pre><p><a name="resource-controllers"></a></p><h2 id="resource-controllers" tabindex="-1"><a class="header-anchor" href="#resource-controllers" aria-hidden="true">#</a> Resource Controllers</h2><p>If you think of each Eloquent model in your application as a &quot;resource&quot;, it is typical to perform the same sets of actions against each resource in your application. For example, imagine your application contains a <code>Photo</code> model and a <code>Movie</code> model. It is likely that users can create, read, update, or delete these resources.</p><p>Because of this common use case, Laravel resource routing assigns the typical create, read, update, and delete (&quot;CRUD&quot;) routes to a controller with a single line of code. To get started, we can use the <code>make:controller</code> Artisan command&#39;s <code>--resource</code> option to quickly create a controller to handle these actions:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan make:controller PhotoController <span class="token parameter variable">--resource</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>This command will generate a controller at <code>app/Http/Controllers/PhotoController.php</code>. The controller will contain a method for each of the available resource operations. Next, you may register a resource route that points to the controller:</p><pre><code>use App\\Http\\Controllers\\PhotoController;

Route::resource(&#39;photos&#39;, PhotoController::class);
</code></pre><p>This single route declaration creates multiple routes to handle a variety of actions on the resource. The generated controller will already have methods stubbed for each of these actions. Remember, you can always get a quick overview of your application&#39;s routes by running the <code>route:list</code> Artisan command.</p><p>You may even register many resource controllers at once by passing an array to the <code>resources</code> method:</p><pre><code>Route::resources([
    &#39;photos&#39; =&gt; PhotoController::class,
    &#39;posts&#39; =&gt; PostController::class,
]);
</code></pre><p><a name="actions-handled-by-resource-controller"></a></p><h4 id="actions-handled-by-resource-controller" tabindex="-1"><a class="header-anchor" href="#actions-handled-by-resource-controller" aria-hidden="true">#</a> Actions Handled By Resource Controller</h4><table><thead><tr><th>Verb</th><th>URI</th><th>Action</th><th>Route Name</th></tr></thead><tbody><tr><td>GET</td><td><code>/photos</code></td><td>index</td><td>photos.index</td></tr><tr><td>GET</td><td><code>/photos/create</code></td><td>create</td><td>photos.create</td></tr><tr><td>POST</td><td><code>/photos</code></td><td>store</td><td>photos.store</td></tr><tr><td>GET</td><td><code>/photos/{photo}</code></td><td>show</td><td>photos.show</td></tr><tr><td>GET</td><td><code>/photos/{photo}/edit</code></td><td>edit</td><td>photos.edit</td></tr><tr><td>PUT/PATCH</td><td><code>/photos/{photo}</code></td><td>update</td><td>photos.update</td></tr><tr><td>DELETE</td><td><code>/photos/{photo}</code></td><td>destroy</td><td>photos.destroy</td></tr></tbody></table><p><a name="customizing-missing-model-behavior"></a></p><h4 id="customizing-missing-model-behavior" tabindex="-1"><a class="header-anchor" href="#customizing-missing-model-behavior" aria-hidden="true">#</a> Customizing Missing Model Behavior</h4><p>Typically, a 404 HTTP response will be generated if an implicitly bound resource model is not found. However, you may customize this behavior by calling the <code>missing</code> method when defining your resource route. The <code>missing</code> method accepts a closure that will be invoked if an implicitly bound model can not be found for any of the resource&#39;s routes:</p><pre><code>use App\\Http\\Controllers\\PhotoController;
use Illuminate\\Http\\Request;
use Illuminate\\Support\\Facades\\Redirect;

Route::resource(&#39;photos&#39;, PhotoController::class)
        -&gt;missing(function (Request $request) {
            return Redirect::route(&#39;photos.index&#39;);
        });
</code></pre><p><a name="soft-deleted-models"></a></p><h4 id="soft-deleted-models" tabindex="-1"><a class="header-anchor" href="#soft-deleted-models" aria-hidden="true">#</a> Soft Deleted Models</h4><p>Typically, implicit model binding will not retrieve models that have been <a href="./eloquent#soft-deleting">soft deleted</a>, and will instead return a 404 HTTP response. However, you can instruct the framework to allow soft deleted models by invoking the <code>withTrashed</code> method when defining your resource route:</p><pre><code>use App\\Http\\Controllers\\PhotoController;

Route::resource(&#39;photos&#39;, PhotoController::class)-&gt;withTrashed();
</code></pre><p>Calling <code>withTrashed</code> with no arguments will allow soft deleted models for the <code>show</code>, <code>edit</code>, and <code>update</code> resource routes. You may specify a subset of these routes by passing an array to the <code>withTrashed</code> method:</p><pre><code>Route::resource(&#39;photos&#39;, PhotoController::class)-&gt;withTrashed([&#39;show&#39;]);
</code></pre><p><a name="specifying-the-resource-model"></a></p><h4 id="specifying-the-resource-model" tabindex="-1"><a class="header-anchor" href="#specifying-the-resource-model" aria-hidden="true">#</a> Specifying The Resource Model</h4><p>If you are using <a href="./routing#route-model-binding">route model binding</a> and would like the resource controller&#39;s methods to type-hint a model instance, you may use the <code>--model</code> option when generating the controller:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan make:controller PhotoController <span class="token parameter variable">--model</span><span class="token operator">=</span>Photo <span class="token parameter variable">--resource</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="generating-form-requests"></a></p><h4 id="generating-form-requests" tabindex="-1"><a class="header-anchor" href="#generating-form-requests" aria-hidden="true">#</a> Generating Form Requests</h4><p>You may provide the <code>--requests</code> option when generating a resource controller to instruct Artisan to generate <a href="./validation#form-request-validation">form request classes</a> for the controller&#39;s storage and update methods:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan make:controller PhotoController <span class="token parameter variable">--model</span><span class="token operator">=</span>Photo <span class="token parameter variable">--resource</span> <span class="token parameter variable">--requests</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="restful-partial-resource-routes"></a></p><h3 id="partial-resource-routes" tabindex="-1"><a class="header-anchor" href="#partial-resource-routes" aria-hidden="true">#</a> Partial Resource Routes</h3><p>When declaring a resource route, you may specify a subset of actions the controller should handle instead of the full set of default actions:</p><pre><code>use App\\Http\\Controllers\\PhotoController;

Route::resource(&#39;photos&#39;, PhotoController::class)-&gt;only([
    &#39;index&#39;, &#39;show&#39;
]);

Route::resource(&#39;photos&#39;, PhotoController::class)-&gt;except([
    &#39;create&#39;, &#39;store&#39;, &#39;update&#39;, &#39;destroy&#39;
]);
</code></pre><p><a name="api-resource-routes"></a></p><h4 id="api-resource-routes" tabindex="-1"><a class="header-anchor" href="#api-resource-routes" aria-hidden="true">#</a> API Resource Routes</h4><p>When declaring resource routes that will be consumed by APIs, you will commonly want to exclude routes that present HTML templates such as <code>create</code> and <code>edit</code>. For convenience, you may use the <code>apiResource</code> method to automatically exclude these two routes:</p><pre><code>use App\\Http\\Controllers\\PhotoController;

Route::apiResource(&#39;photos&#39;, PhotoController::class);
</code></pre><p>You may register many API resource controllers at once by passing an array to the <code>apiResources</code> method:</p><pre><code>use App\\Http\\Controllers\\PhotoController;
use App\\Http\\Controllers\\PostController;

Route::apiResources([
    &#39;photos&#39; =&gt; PhotoController::class,
    &#39;posts&#39; =&gt; PostController::class,
]);
</code></pre><p>To quickly generate an API resource controller that does not include the <code>create</code> or <code>edit</code> methods, use the <code>--api</code> switch when executing the <code>make:controller</code> command:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan make:controller PhotoController <span class="token parameter variable">--api</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="restful-nested-resources"></a></p><h3 id="nested-resources" tabindex="-1"><a class="header-anchor" href="#nested-resources" aria-hidden="true">#</a> Nested Resources</h3><p>Sometimes you may need to define routes to a nested resource. For example, a photo resource may have multiple comments that may be attached to the photo. To nest the resource controllers, you may use &quot;dot&quot; notation in your route declaration:</p><pre><code>use App\\Http\\Controllers\\PhotoCommentController;

Route::resource(&#39;photos.comments&#39;, PhotoCommentController::class);
</code></pre><p>This route will register a nested resource that may be accessed with URIs like the following:</p><pre><code>/photos/{photo}/comments/{comment}
</code></pre><p><a name="scoping-nested-resources"></a></p><h4 id="scoping-nested-resources" tabindex="-1"><a class="header-anchor" href="#scoping-nested-resources" aria-hidden="true">#</a> Scoping Nested Resources</h4><p>Laravel&#39;s <a href="./routing#implicit-model-binding-scoping">implicit model binding</a> feature can automatically scope nested bindings such that the resolved child model is confirmed to belong to the parent model. By using the <code>scoped</code> method when defining your nested resource, you may enable automatic scoping as well as instruct Laravel which field the child resource should be retrieved by. For more information on how to accomplish this, please see the documentation on <a href="#restful-scoping-resource-routes">scoping resource routes</a>.</p><p><a name="shallow-nesting"></a></p><h4 id="shallow-nesting" tabindex="-1"><a class="header-anchor" href="#shallow-nesting" aria-hidden="true">#</a> Shallow Nesting</h4><p>Often, it is not entirely necessary to have both the parent and the child IDs within a URI since the child ID is already a unique identifier. When using unique identifiers such as auto-incrementing primary keys to identify your models in URI segments, you may choose to use &quot;shallow nesting&quot;:</p><pre><code>use App\\Http\\Controllers\\CommentController;

Route::resource(&#39;photos.comments&#39;, CommentController::class)-&gt;shallow();
</code></pre><p>This route definition will define the following routes:</p><table><thead><tr><th>Verb</th><th>URI</th><th>Action</th><th>Route Name</th></tr></thead><tbody><tr><td>GET</td><td><code>/photos/{photo}/comments</code></td><td>index</td><td>photos.comments.index</td></tr><tr><td>GET</td><td><code>/photos/{photo}/comments/create</code></td><td>create</td><td>photos.comments.create</td></tr><tr><td>POST</td><td><code>/photos/{photo}/comments</code></td><td>store</td><td>photos.comments.store</td></tr><tr><td>GET</td><td><code>/comments/{comment}</code></td><td>show</td><td>comments.show</td></tr><tr><td>GET</td><td><code>/comments/{comment}/edit</code></td><td>edit</td><td>comments.edit</td></tr><tr><td>PUT/PATCH</td><td><code>/comments/{comment}</code></td><td>update</td><td>comments.update</td></tr><tr><td>DELETE</td><td><code>/comments/{comment}</code></td><td>destroy</td><td>comments.destroy</td></tr></tbody></table><p><a name="restful-naming-resource-routes"></a></p><h3 id="naming-resource-routes" tabindex="-1"><a class="header-anchor" href="#naming-resource-routes" aria-hidden="true">#</a> Naming Resource Routes</h3><p>By default, all resource controller actions have a route name; however, you can override these names by passing a <code>names</code> array with your desired route names:</p><pre><code>use App\\Http\\Controllers\\PhotoController;

Route::resource(&#39;photos&#39;, PhotoController::class)-&gt;names([
    &#39;create&#39; =&gt; &#39;photos.build&#39;
]);
</code></pre><p><a name="restful-naming-resource-route-parameters"></a></p><h3 id="naming-resource-route-parameters" tabindex="-1"><a class="header-anchor" href="#naming-resource-route-parameters" aria-hidden="true">#</a> Naming Resource Route Parameters</h3><p>By default, <code>Route::resource</code> will create the route parameters for your resource routes based on the &quot;singularized&quot; version of the resource name. You can easily override this on a per resource basis using the <code>parameters</code> method. The array passed into the <code>parameters</code> method should be an associative array of resource names and parameter names:</p><pre><code>use App\\Http\\Controllers\\AdminUserController;

Route::resource(&#39;users&#39;, AdminUserController::class)-&gt;parameters([
    &#39;users&#39; =&gt; &#39;admin_user&#39;
]);
</code></pre><p>The example above generates the following URI for the resource&#39;s <code>show</code> route:</p><pre><code>/users/{admin_user}
</code></pre><p><a name="restful-scoping-resource-routes"></a></p><h3 id="scoping-resource-routes" tabindex="-1"><a class="header-anchor" href="#scoping-resource-routes" aria-hidden="true">#</a> Scoping Resource Routes</h3><p>Laravel&#39;s <a href="./routing#implicit-model-binding-scoping">scoped implicit model binding</a> feature can automatically scope nested bindings such that the resolved child model is confirmed to belong to the parent model. By using the <code>scoped</code> method when defining your nested resource, you may enable automatic scoping as well as instruct Laravel which field the child resource should be retrieved by:</p><pre><code>use App\\Http\\Controllers\\PhotoCommentController;

Route::resource(&#39;photos.comments&#39;, PhotoCommentController::class)-&gt;scoped([
    &#39;comment&#39; =&gt; &#39;slug&#39;,
]);
</code></pre><p>This route will register a scoped nested resource that may be accessed with URIs like the following:</p><pre><code>/photos/{photo}/comments/{comment:slug}
</code></pre><p>When using a custom keyed implicit binding as a nested route parameter, Laravel will automatically scope the query to retrieve the nested model by its parent using conventions to guess the relationship name on the parent. In this case, it will be assumed that the <code>Photo</code> model has a relationship named <code>comments</code> (the plural of the route parameter name) which can be used to retrieve the <code>Comment</code> model.</p><p><a name="restful-localizing-resource-uris"></a></p><h3 id="localizing-resource-uris" tabindex="-1"><a class="header-anchor" href="#localizing-resource-uris" aria-hidden="true">#</a> Localizing Resource URIs</h3><p>By default, <code>Route::resource</code> will create resource URIs using English verbs and plural rules. If you need to localize the <code>create</code> and <code>edit</code> action verbs, you may use the <code>Route::resourceVerbs</code> method. This may be done at the beginning of the <code>boot</code> method within your application&#39;s <code>App\\Providers\\RouteServiceProvider</code>:</p><pre><code>/**
 * Define your route model bindings, pattern filters, etc.
 */
public function boot(): void
{
    Route::resourceVerbs([
        &#39;create&#39; =&gt; &#39;crear&#39;,
        &#39;edit&#39; =&gt; &#39;editar&#39;,
    ]);

    // ...
}
</code></pre><p>Laravel&#39;s pluralizer supports <a href="./localization#pluralization-language">several different languages which you may configure based on your needs</a>. Once the verbs and pluralization language have been customized, a resource route registration such as <code>Route::resource(&#39;publicacion&#39;, PublicacionController::class)</code> will produce the following URIs:</p><pre><code>/publicacion/crear

/publicacion/{publicaciones}/editar
</code></pre><p><a name="restful-supplementing-resource-controllers"></a></p><h3 id="supplementing-resource-controllers" tabindex="-1"><a class="header-anchor" href="#supplementing-resource-controllers" aria-hidden="true">#</a> Supplementing Resource Controllers</h3><p>If you need to add additional routes to a resource controller beyond the default set of resource routes, you should define those routes before your call to the <code>Route::resource</code> method; otherwise, the routes defined by the <code>resource</code> method may unintentionally take precedence over your supplemental routes:</p><pre><code>use App\\Http\\Controller\\PhotoController;

Route::get(&#39;/photos/popular&#39;, [PhotoController::class, &#39;popular&#39;]);
Route::resource(&#39;photos&#39;, PhotoController::class);
</code></pre><blockquote><p><strong>Note</strong><br> Remember to keep your controllers focused. If you find yourself routinely needing methods outside of the typical set of resource actions, consider splitting your controller into two, smaller controllers.</p></blockquote><p><a name="singleton-resource-controllers"></a></p><h3 id="singleton-resource-controllers" tabindex="-1"><a class="header-anchor" href="#singleton-resource-controllers" aria-hidden="true">#</a> Singleton Resource Controllers</h3><p>Sometimes, your application will have resources that may only have a single instance. For example, a user&#39;s &quot;profile&quot; can be edited or updated, but a user may not have more than one &quot;profile&quot;. Likewise, an image may have a single &quot;thumbnail&quot;. These resources are called &quot;singleton resources&quot;, meaning one and only one instance of the resource may exist. In these scenarios, you may register a &quot;singleton&quot; resource controller:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Controllers<span class="token punctuation">\\</span>ProfileController</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Support<span class="token punctuation">\\</span>Facades<span class="token punctuation">\\</span>Route</span><span class="token punctuation">;</span>

<span class="token class-name static-context">Route</span><span class="token operator">::</span><span class="token function">singleton</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;profile&#39;</span><span class="token punctuation">,</span> <span class="token class-name static-context">ProfileController</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The singleton resource definition above will register the following routes. As you can see, &quot;creation&quot; routes are not registered for singleton resources, and the registered routes do not accept an identifier since only one instance of the resource may exist:</p><table><thead><tr><th>Verb</th><th>URI</th><th>Action</th><th>Route Name</th></tr></thead><tbody><tr><td>GET</td><td><code>/profile</code></td><td>show</td><td>profile.show</td></tr><tr><td>GET</td><td><code>/profile/edit</code></td><td>edit</td><td>profile.edit</td></tr><tr><td>PUT/PATCH</td><td><code>/profile</code></td><td>update</td><td>profile.update</td></tr></tbody></table><p>Singleton resources may also be nested within a standard resource:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token class-name static-context">Route</span><span class="token operator">::</span><span class="token function">singleton</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;photos.thumbnail&#39;</span><span class="token punctuation">,</span> <span class="token class-name static-context">ThumbnailController</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>In this example, the <code>photos</code> resource would receive all of the <a href="#actions-handled-by-resource-controller">standard resource routes</a>; however, the <code>thumbnail</code> resource would be a singleton resource with the following routes:</p><table><thead><tr><th>Verb</th><th>URI</th><th>Action</th><th>Route Name</th></tr></thead><tbody><tr><td>GET</td><td><code>/photos/{photo}/thumbnail</code></td><td>show</td><td>photos.thumbnail.show</td></tr><tr><td>GET</td><td><code>/photos/{photo}/thumbnail/edit</code></td><td>edit</td><td>photos.thumbnail.edit</td></tr><tr><td>PUT/PATCH</td><td><code>/photos/{photo}/thumbnail</code></td><td>update</td><td>photos.thumbnail.update</td></tr></tbody></table><p><a name="creatable-singleton-resources"></a></p><h4 id="creatable-singleton-resources" tabindex="-1"><a class="header-anchor" href="#creatable-singleton-resources" aria-hidden="true">#</a> Creatable Singleton Resources</h4><p>Occasionally, you may want to define creation and storage routes for a singleton resource. To accomplish this, you may invoke the <code>creatable</code> method when registering the singleton resource route:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token class-name static-context">Route</span><span class="token operator">::</span><span class="token function">singleton</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;photos.thumbnail&#39;</span><span class="token punctuation">,</span> <span class="token class-name static-context">ThumbnailController</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">creatable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>In this example, the following routes will be registered. As you can see, a <code>DELETE</code> route will also be registered for creatable singleton resources:</p><table><thead><tr><th>Verb</th><th>URI</th><th>Action</th><th>Route Name</th></tr></thead><tbody><tr><td>GET</td><td><code>/photos/{photo}/thumbnail/create</code></td><td>create</td><td>photos.thumbnail.create</td></tr><tr><td>POST</td><td><code>/photos/{photo}/thumbnail</code></td><td>store</td><td>photos.thumbnail.store</td></tr><tr><td>GET</td><td><code>/photos/{photo}/thumbnail</code></td><td>show</td><td>photos.thumbnail.show</td></tr><tr><td>GET</td><td><code>/photos/{photo}/thumbnail/edit</code></td><td>edit</td><td>photos.thumbnail.edit</td></tr><tr><td>PUT/PATCH</td><td><code>/photos/{photo}/thumbnail</code></td><td>update</td><td>photos.thumbnail.update</td></tr><tr><td>DELETE</td><td><code>/photos/{photo}/thumbnail</code></td><td>destroy</td><td>photos.thumbnail.destroy</td></tr></tbody></table><p>If you would like Laravel to register the <code>DELETE</code> route for a singleton resource but not register the creation or storage routes, you may utilize the <code>destroyable</code> method:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token class-name static-context">Route</span><span class="token operator">::</span><span class="token function">singleton</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">destroyable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="api-singleton-resources"></a></p><h4 id="api-singleton-resources" tabindex="-1"><a class="header-anchor" href="#api-singleton-resources" aria-hidden="true">#</a> API Singleton Resources</h4><p>The <code>apiSingleton</code> method may be used to register a singleton resource that will be manipulated via an API, thus rendering the <code>create</code> and <code>edit</code> routes unnecessary:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token class-name static-context">Route</span><span class="token operator">::</span><span class="token function">apiSingleton</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;profile&#39;</span><span class="token punctuation">,</span> <span class="token class-name static-context">ProfileController</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Of course, API singleton resources may also be <code>creatable</code>, which will register <code>store</code> and <code>destroy</code> routes for the resource:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token class-name static-context">Route</span><span class="token operator">::</span><span class="token function">apiSingleton</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;photos.thumbnail&#39;</span><span class="token punctuation">,</span> <span class="token class-name static-context">ProfileController</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">creatable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="dependency-injection-and-controllers"></a></p><h2 id="dependency-injection-controllers" tabindex="-1"><a class="header-anchor" href="#dependency-injection-controllers" aria-hidden="true">#</a> Dependency Injection &amp; Controllers</h2><p><a name="constructor-injection"></a></p><h4 id="constructor-injection" tabindex="-1"><a class="header-anchor" href="#constructor-injection" aria-hidden="true">#</a> Constructor Injection</h4><p>The Laravel <a href="./container">service container</a> is used to resolve all Laravel controllers. As a result, you are able to type-hint any dependencies your controller may need in its constructor. The declared dependencies will automatically be resolved and injected into the controller instance:</p><pre><code>&lt;?php

namespace App\\Http\\Controllers;

use App\\Repositories\\UserRepository;

class UserController extends Controller
{
    /**
     * Create a new controller instance.
     */
    public function __construct(
        protected UserRepository $users,
    ) {}
}
</code></pre><p><a name="method-injection"></a></p><h4 id="method-injection" tabindex="-1"><a class="header-anchor" href="#method-injection" aria-hidden="true">#</a> Method Injection</h4><p>In addition to constructor injection, you may also type-hint dependencies on your controller&#39;s methods. A common use-case for method injection is injecting the <code>Illuminate\\Http\\Request</code> instance into your controller methods:</p><pre><code>&lt;?php

namespace App\\Http\\Controllers;

use Illuminate\\Http\\RedirectResponse;
use Illuminate\\Http\\Request;

class UserController extends Controller
{
    /**
     * Store a new user.
     */
    public function store(Request $request): RedirectResponse
    {
        $name = $request-&gt;name;

        // Store the user...

        return redirect(&#39;/users&#39;);
    }
}
</code></pre><p>If your controller method is also expecting input from a route parameter, list your route arguments after your other dependencies. For example, if your route is defined like so:</p><pre><code>use App\\Http\\Controllers\\UserController;

Route::put(&#39;/user/{id}&#39;, [UserController::class, &#39;update&#39;]);
</code></pre><p>You may still type-hint the <code>Illuminate\\Http\\Request</code> and access your <code>id</code> parameter by defining your controller method as follows:</p><pre><code>&lt;?php

namespace App\\Http\\Controllers;

use Illuminate\\Http\\RedirectResponse;
use Illuminate\\Http\\Request;

class UserController extends Controller
{
    /**
     * Update the given user.
     */
    public function update(Request $request, string $id): RedirectResponse
    {
        // Update the user...

        return redirect(&#39;/users&#39;);
    }
}
</code></pre>`,158),a=[r];function l(i,c){return o(),t("div",null,a)}const u=e(s,[["render",l],["__file","controllers.html.vue"]]);export{u as default};
