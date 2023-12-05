import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as t,c as o,a}from"./app-8cdff07c.js";const n={},s=a(`<h1 id="authorization" tabindex="-1"><a class="header-anchor" href="#authorization" aria-hidden="true">#</a> Authorization</h1><ul><li><a href="#introduction">Introduction</a></li><li><a href="#gates">Gates</a><ul><li><a href="#writing-gates">Writing Gates</a></li><li><a href="#authorizing-actions-via-gates">Authorizing Actions</a></li><li><a href="#gate-responses">Gate Responses</a></li><li><a href="#intercepting-gate-checks">Intercepting Gate Checks</a></li><li><a href="#inline-authorization">Inline Authorization</a></li></ul></li><li><a href="#creating-policies">Creating Policies</a><ul><li><a href="#generating-policies">Generating Policies</a></li><li><a href="#registering-policies">Registering Policies</a></li></ul></li><li><a href="#writing-policies">Writing Policies</a><ul><li><a href="#policy-methods">Policy Methods</a></li><li><a href="#policy-responses">Policy Responses</a></li><li><a href="#methods-without-models">Methods Without Models</a></li><li><a href="#guest-users">Guest Users</a></li><li><a href="#policy-filters">Policy Filters</a></li></ul></li><li><a href="#authorizing-actions-using-policies">Authorizing Actions Using Policies</a><ul><li><a href="#via-the-user-model">Via The User Model</a></li><li><a href="#via-controller-helpers">Via Controller Helpers</a></li><li><a href="#via-middleware">Via Middleware</a></li><li><a href="#via-blade-templates">Via Blade Templates</a></li><li><a href="#supplying-additional-context">Supplying Additional Context</a></li></ul></li></ul><p><a name="introduction"></a></p><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p>In addition to providing built-in <a href="./authentication">authentication</a> services, Laravel also provides a simple way to authorize user actions against a given resource. For example, even though a user is authenticated, they may not be authorized to update or delete certain Eloquent models or database records managed by your application. Laravel&#39;s authorization features provide an easy, organized way of managing these types of authorization checks.</p><p>Laravel provides two primary ways of authorizing actions: <a href="#gates">gates</a> and <a href="#creating-policies">policies</a>. Think of gates and policies like routes and controllers. Gates provide a simple, closure-based approach to authorization while policies, like controllers, group logic around a particular model or resource. In this documentation, we&#39;ll explore gates first and then examine policies.</p><p>You do not need to choose between exclusively using gates or exclusively using policies when building an application. Most applications will most likely contain some mixture of gates and policies, and that is perfectly fine! Gates are most applicable to actions that are not related to any model or resource, such as viewing an administrator dashboard. In contrast, policies should be used when you wish to authorize an action for a particular model or resource.</p><p><a name="gates"></a></p><h2 id="gates" tabindex="-1"><a class="header-anchor" href="#gates" aria-hidden="true">#</a> Gates</h2><p><a name="writing-gates"></a></p><h3 id="writing-gates" tabindex="-1"><a class="header-anchor" href="#writing-gates" aria-hidden="true">#</a> Writing Gates</h3><blockquote><p><strong>Warning</strong><br> Gates are a great way to learn the basics of Laravel&#39;s authorization features; however, when building robust Laravel applications you should consider using <a href="#creating-policies">policies</a> to organize your authorization rules.</p></blockquote><p>Gates are simply closures that determine if a user is authorized to perform a given action. Typically, gates are defined within the <code>boot</code> method of the <code>App\\Providers\\AuthServiceProvider</code> class using the <code>Gate</code> facade. Gates always receive a user instance as their first argument and may optionally receive additional arguments such as a relevant Eloquent model.</p><p>In this example, we&#39;ll define a gate to determine if a user can update a given <code>App\\Models\\Post</code> model. The gate will accomplish this by comparing the user&#39;s <code>id</code> against the <code>user_id</code> of the user that created the post:</p><pre><code>use App\\Models\\Post;
use App\\Models\\User;
use Illuminate\\Support\\Facades\\Gate;

/**
 * Register any authentication / authorization services.
 */
public function boot(): void
{
    Gate::define(&#39;update-post&#39;, function (User $user, Post $post) {
        return $user-&gt;id === $post-&gt;user_id;
    });
}
</code></pre><p>Like controllers, gates may also be defined using a class callback array:</p><pre><code>use App\\Policies\\PostPolicy;
use Illuminate\\Support\\Facades\\Gate;

/**
 * Register any authentication / authorization services.
 */
public function boot(): void
{
    Gate::define(&#39;update-post&#39;, [PostPolicy::class, &#39;update&#39;]);
}
</code></pre><p><a name="authorizing-actions-via-gates"></a></p><h3 id="authorizing-actions" tabindex="-1"><a class="header-anchor" href="#authorizing-actions" aria-hidden="true">#</a> Authorizing Actions</h3><p>To authorize an action using gates, you should use the <code>allows</code> or <code>denies</code> methods provided by the <code>Gate</code> facade. Note that you are not required to pass the currently authenticated user to these methods. Laravel will automatically take care of passing the user into the gate closure. It is typical to call the gate authorization methods within your application&#39;s controllers before performing an action that requires authorization:</p><pre><code>&lt;?php

namespace App\\Http\\Controllers;

use App\\Http\\Controllers\\Controller;
use App\\Models\\Post;
use Illuminate\\Http\\RedirectResponse;
use Illuminate\\Http\\Request;
use Illuminate\\Support\\Facades\\Gate;

class PostController extends Controller
{
    /**
     * Update the given post.
     */
    public function update(Request $request, Post $post): RedirectResponse
    {
        if (! Gate::allows(&#39;update-post&#39;, $post)) {
            abort(403);
        }

        // Update the post...

        return redirect(&#39;/posts&#39;);
    }
}
</code></pre><p>If you would like to determine if a user other than the currently authenticated user is authorized to perform an action, you may use the <code>forUser</code> method on the <code>Gate</code> facade:</p><pre><code>if (Gate::forUser($user)-&gt;allows(&#39;update-post&#39;, $post)) {
    // The user can update the post...
}

if (Gate::forUser($user)-&gt;denies(&#39;update-post&#39;, $post)) {
    // The user can&#39;t update the post...
}
</code></pre><p>You may authorize multiple actions at a time using the <code>any</code> or <code>none</code> methods:</p><pre><code>if (Gate::any([&#39;update-post&#39;, &#39;delete-post&#39;], $post)) {
    // The user can update or delete the post...
}

if (Gate::none([&#39;update-post&#39;, &#39;delete-post&#39;], $post)) {
    // The user can&#39;t update or delete the post...
}
</code></pre><p><a name="authorizing-or-throwing-exceptions"></a></p><h4 id="authorizing-or-throwing-exceptions" tabindex="-1"><a class="header-anchor" href="#authorizing-or-throwing-exceptions" aria-hidden="true">#</a> Authorizing Or Throwing Exceptions</h4><p>If you would like to attempt to authorize an action and automatically throw an <code>Illuminate\\Auth\\Access\\AuthorizationException</code> if the user is not allowed to perform the given action, you may use the <code>Gate</code> facade&#39;s <code>authorize</code> method. Instances of <code>AuthorizationException</code> are automatically converted to a 403 HTTP response by Laravel&#39;s exception handler:</p><pre><code>Gate::authorize(&#39;update-post&#39;, $post);

// The action is authorized...
</code></pre><p><a name="gates-supplying-additional-context"></a></p><h4 id="supplying-additional-context" tabindex="-1"><a class="header-anchor" href="#supplying-additional-context" aria-hidden="true">#</a> Supplying Additional Context</h4><p>The gate methods for authorizing abilities (<code>allows</code>, <code>denies</code>, <code>check</code>, <code>any</code>, <code>none</code>, <code>authorize</code>, <code>can</code>, <code>cannot</code>) and the authorization <a href="#via-blade-templates">Blade directives</a> (<code>@can</code>, <code>@cannot</code>, <code>@canany</code>) can receive an array as their second argument. These array elements are passed as parameters to the gate closure, and can be used for additional context when making authorization decisions:</p><pre><code>use App\\Models\\Category;
use App\\Models\\User;
use Illuminate\\Support\\Facades\\Gate;

Gate::define(&#39;create-post&#39;, function (User $user, Category $category, bool $pinned) {
    if (! $user-&gt;canPublishToGroup($category-&gt;group)) {
        return false;
    } elseif ($pinned &amp;&amp; ! $user-&gt;canPinPosts()) {
        return false;
    }

    return true;
});

if (Gate::check(&#39;create-post&#39;, [$category, $pinned])) {
    // The user can create the post...
}
</code></pre><p><a name="gate-responses"></a></p><h3 id="gate-responses" tabindex="-1"><a class="header-anchor" href="#gate-responses" aria-hidden="true">#</a> Gate Responses</h3><p>So far, we have only examined gates that return simple boolean values. However, sometimes you may wish to return a more detailed response, including an error message. To do so, you may return an <code>Illuminate\\Auth\\Access\\Response</code> from your gate:</p><pre><code>use App\\Models\\User;
use Illuminate\\Auth\\Access\\Response;
use Illuminate\\Support\\Facades\\Gate;

Gate::define(&#39;edit-settings&#39;, function (User $user) {
    return $user-&gt;isAdmin
                ? Response::allow()
                : Response::deny(&#39;You must be an administrator.&#39;);
});
</code></pre><p>Even when you return an authorization response from your gate, the <code>Gate::allows</code> method will still return a simple boolean value; however, you may use the <code>Gate::inspect</code> method to get the full authorization response returned by the gate:</p><pre><code>$response = Gate::inspect(&#39;edit-settings&#39;);

if ($response-&gt;allowed()) {
    // The action is authorized...
} else {
    echo $response-&gt;message();
}
</code></pre><p>When using the <code>Gate::authorize</code> method, which throws an <code>AuthorizationException</code> if the action is not authorized, the error message provided by the authorization response will be propagated to the HTTP response:</p><pre><code>Gate::authorize(&#39;edit-settings&#39;);

// The action is authorized...
</code></pre><p><a name="customising-gate-response-status"></a></p><h4 id="customizing-the-http-response-status" tabindex="-1"><a class="header-anchor" href="#customizing-the-http-response-status" aria-hidden="true">#</a> Customizing The HTTP Response Status</h4><p>When an action is denied via a Gate, a <code>403</code> HTTP response is returned; however, it can sometimes be useful to return an alternative HTTP status code. You may customize the HTTP status code returned for a failed authorization check using the <code>denyWithStatus</code> static constructor on the <code>Illuminate\\Auth\\Access\\Response</code> class:</p><pre><code>use App\\Models\\User;
use Illuminate\\Auth\\Access\\Response;
use Illuminate\\Support\\Facades\\Gate;

Gate::define(&#39;edit-settings&#39;, function (User $user) {
    return $user-&gt;isAdmin
                ? Response::allow()
                : Response::denyWithStatus(404);
});
</code></pre><p>Because hiding resources via a <code>404</code> response is such a common pattern for web applications, the <code>denyAsNotFound</code> method is offered for convenience:</p><pre><code>use App\\Models\\User;
use Illuminate\\Auth\\Access\\Response;
use Illuminate\\Support\\Facades\\Gate;

Gate::define(&#39;edit-settings&#39;, function (User $user) {
    return $user-&gt;isAdmin
                ? Response::allow()
                : Response::denyAsNotFound();
});
</code></pre><p><a name="intercepting-gate-checks"></a></p><h3 id="intercepting-gate-checks" tabindex="-1"><a class="header-anchor" href="#intercepting-gate-checks" aria-hidden="true">#</a> Intercepting Gate Checks</h3><p>Sometimes, you may wish to grant all abilities to a specific user. You may use the <code>before</code> method to define a closure that is run before all other authorization checks:</p><pre><code>use App\\Models\\User;
use Illuminate\\Support\\Facades\\Gate;

Gate::before(function (User $user, string $ability) {
    if ($user-&gt;isAdministrator()) {
        return true;
    }
});
</code></pre><p>If the <code>before</code> closure returns a non-null result that result will be considered the result of the authorization check.</p><p>You may use the <code>after</code> method to define a closure to be executed after all other authorization checks:</p><pre><code>use App\\Models\\User;

Gate::after(function (User $user, string $ability, bool|null $result, mixed $arguments) {
    if ($user-&gt;isAdministrator()) {
        return true;
    }
});
</code></pre><p>Similar to the <code>before</code> method, if the <code>after</code> closure returns a non-null result that result will be considered the result of the authorization check.</p><p><a name="inline-authorization"></a></p><h3 id="inline-authorization" tabindex="-1"><a class="header-anchor" href="#inline-authorization" aria-hidden="true">#</a> Inline Authorization</h3><p>Occasionally, you may wish to determine if the currently authenticated user is authorized to perform a given action without writing a dedicated gate that corresponds to the action. Laravel allows you to perform these types of &quot;inline&quot; authorization checks via the <code>Gate::allowIf</code> and <code>Gate::denyIf</code> methods:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Models<span class="token punctuation">\\</span>User</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Support<span class="token punctuation">\\</span>Facades<span class="token punctuation">\\</span>Gate</span><span class="token punctuation">;</span>

<span class="token class-name static-context">Gate</span><span class="token operator">::</span><span class="token function">allowIf</span><span class="token punctuation">(</span><span class="token keyword">fn</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">User</span> <span class="token variable">$user</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token variable">$user</span><span class="token operator">-&gt;</span><span class="token function">isAdministrator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name static-context">Gate</span><span class="token operator">::</span><span class="token function">denyIf</span><span class="token punctuation">(</span><span class="token keyword">fn</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">User</span> <span class="token variable">$user</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token variable">$user</span><span class="token operator">-&gt;</span><span class="token function">banned</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If the action is not authorized or if no user is currently authenticated, Laravel will automatically throw an <code>Illuminate\\Auth\\Access\\AuthorizationException</code> exception. Instances of <code>AuthorizationException</code> are automatically converted to a 403 HTTP response by Laravel&#39;s exception handler.</p><p><a name="creating-policies"></a></p><h2 id="creating-policies" tabindex="-1"><a class="header-anchor" href="#creating-policies" aria-hidden="true">#</a> Creating Policies</h2><p><a name="generating-policies"></a></p><h3 id="generating-policies" tabindex="-1"><a class="header-anchor" href="#generating-policies" aria-hidden="true">#</a> Generating Policies</h3><p>Policies are classes that organize authorization logic around a particular model or resource. For example, if your application is a blog, you may have an <code>App\\Models\\Post</code> model and a corresponding <code>App\\Policies\\PostPolicy</code> to authorize user actions such as creating or updating posts.</p><p>You may generate a policy using the <code>make:policy</code> Artisan command. The generated policy will be placed in the <code>app/Policies</code> directory. If this directory does not exist in your application, Laravel will create it for you:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan make:policy PostPolicy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The <code>make:policy</code> command will generate an empty policy class. If you would like to generate a class with example policy methods related to viewing, creating, updating, and deleting the resource, you may provide a <code>--model</code> option when executing the command:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan make:policy PostPolicy <span class="token parameter variable">--model</span><span class="token operator">=</span>Post
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="registering-policies"></a></p><h3 id="registering-policies" tabindex="-1"><a class="header-anchor" href="#registering-policies" aria-hidden="true">#</a> Registering Policies</h3><p>Once the policy class has been created, it needs to be registered. Registering policies is how we can inform Laravel which policy to use when authorizing actions against a given model type.</p><p>The <code>App\\Providers\\AuthServiceProvider</code> included with fresh Laravel applications contains a <code>policies</code> property which maps your Eloquent models to their corresponding policies. Registering a policy will instruct Laravel which policy to utilize when authorizing actions against a given Eloquent model:</p><pre><code>&lt;?php

namespace App\\Providers;

use App\\Models\\Post;
use App\\Policies\\PostPolicy;
use Illuminate\\Foundation\\Support\\Providers\\AuthServiceProvider as ServiceProvider;
use Illuminate\\Support\\Facades\\Gate;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        Post::class =&gt; PostPolicy::class,
    ];

    /**
     * Register any application authentication / authorization services.
     */
    public function boot(): void
    {
        // ...
    }
}
</code></pre><p><a name="policy-auto-discovery"></a></p><h4 id="policy-auto-discovery" tabindex="-1"><a class="header-anchor" href="#policy-auto-discovery" aria-hidden="true">#</a> Policy Auto-Discovery</h4><p>Instead of manually registering model policies, Laravel can automatically discover policies as long as the model and policy follow standard Laravel naming conventions. Specifically, the policies must be in a <code>Policies</code> directory at or above the directory that contains your models. So, for example, the models may be placed in the <code>app/Models</code> directory while the policies may be placed in the <code>app/Policies</code> directory. In this situation, Laravel will check for policies in <code>app/Models/Policies</code> then <code>app/Policies</code>. In addition, the policy name must match the model name and have a <code>Policy</code> suffix. So, a <code>User</code> model would correspond to a <code>UserPolicy</code> policy class.</p><p>If you would like to define your own policy discovery logic, you may register a custom policy discovery callback using the <code>Gate::guessPolicyNamesUsing</code> method. Typically, this method should be called from the <code>boot</code> method of your application&#39;s <code>AuthServiceProvider</code>:</p><pre><code>use Illuminate\\Support\\Facades\\Gate;

Gate::guessPolicyNamesUsing(function (string $modelClass) {
    // Return the name of the policy class for the given model...
});
</code></pre><blockquote><p><strong>Warning</strong><br> Any policies that are explicitly mapped in your <code>AuthServiceProvider</code> will take precedence over any potentially auto-discovered policies.</p></blockquote><p><a name="writing-policies"></a></p><h2 id="writing-policies" tabindex="-1"><a class="header-anchor" href="#writing-policies" aria-hidden="true">#</a> Writing Policies</h2><p><a name="policy-methods"></a></p><h3 id="policy-methods" tabindex="-1"><a class="header-anchor" href="#policy-methods" aria-hidden="true">#</a> Policy Methods</h3><p>Once the policy class has been registered, you may add methods for each action it authorizes. For example, let&#39;s define an <code>update</code> method on our <code>PostPolicy</code> which determines if a given <code>App\\Models\\User</code> can update a given <code>App\\Models\\Post</code> instance.</p><p>The <code>update</code> method will receive a <code>User</code> and a <code>Post</code> instance as its arguments, and should return <code>true</code> or <code>false</code> indicating whether the user is authorized to update the given <code>Post</code>. So, in this example, we will verify that the user&#39;s <code>id</code> matches the <code>user_id</code> on the post:</p><pre><code>&lt;?php

namespace App\\Policies;

use App\\Models\\Post;
use App\\Models\\User;

class PostPolicy
{
    /**
     * Determine if the given post can be updated by the user.
     */
    public function update(User $user, Post $post): bool
    {
        return $user-&gt;id === $post-&gt;user_id;
    }
}
</code></pre><p>You may continue to define additional methods on the policy as needed for the various actions it authorizes. For example, you might define <code>view</code> or <code>delete</code> methods to authorize various <code>Post</code> related actions, but remember you are free to give your policy methods any name you like.</p><p>If you used the <code>--model</code> option when generating your policy via the Artisan console, it will already contain methods for the <code>viewAny</code>, <code>view</code>, <code>create</code>, <code>update</code>, <code>delete</code>, <code>restore</code>, and <code>forceDelete</code> actions.</p><blockquote><p><strong>Note</strong><br> All policies are resolved via the Laravel <a href="./container">service container</a>, allowing you to type-hint any needed dependencies in the policy&#39;s constructor to have them automatically injected.</p></blockquote><p><a name="policy-responses"></a></p><h3 id="policy-responses" tabindex="-1"><a class="header-anchor" href="#policy-responses" aria-hidden="true">#</a> Policy Responses</h3><p>So far, we have only examined policy methods that return simple boolean values. However, sometimes you may wish to return a more detailed response, including an error message. To do so, you may return an <code>Illuminate\\Auth\\Access\\Response</code> instance from your policy method:</p><pre><code>use App\\Models\\Post;
use App\\Models\\User;
use Illuminate\\Auth\\Access\\Response;

/**
 * Determine if the given post can be updated by the user.
 */
public function update(User $user, Post $post): Response
{
    return $user-&gt;id === $post-&gt;user_id
                ? Response::allow()
                : Response::deny(&#39;You do not own this post.&#39;);
}
</code></pre><p>When returning an authorization response from your policy, the <code>Gate::allows</code> method will still return a simple boolean value; however, you may use the <code>Gate::inspect</code> method to get the full authorization response returned by the gate:</p><pre><code>use Illuminate\\Support\\Facades\\Gate;

$response = Gate::inspect(&#39;update&#39;, $post);

if ($response-&gt;allowed()) {
    // The action is authorized...
} else {
    echo $response-&gt;message();
}
</code></pre><p>When using the <code>Gate::authorize</code> method, which throws an <code>AuthorizationException</code> if the action is not authorized, the error message provided by the authorization response will be propagated to the HTTP response:</p><pre><code>Gate::authorize(&#39;update&#39;, $post);

// The action is authorized...
</code></pre><p><a name="customising-policy-response-status"></a></p><h4 id="customizing-the-http-response-status-1" tabindex="-1"><a class="header-anchor" href="#customizing-the-http-response-status-1" aria-hidden="true">#</a> Customizing The HTTP Response Status</h4><p>When an action is denied via a policy method, a <code>403</code> HTTP response is returned; however, it can sometimes be useful to return an alternative HTTP status code. You may customize the HTTP status code returned for a failed authorization check using the <code>denyWithStatus</code> static constructor on the <code>Illuminate\\Auth\\Access\\Response</code> class:</p><pre><code>use App\\Models\\Post;
use App\\Models\\User;
use Illuminate\\Auth\\Access\\Response;

/**
 * Determine if the given post can be updated by the user.
 */
public function update(User $user, Post $post): Response
{
    return $user-&gt;id === $post-&gt;user_id
                ? Response::allow()
                : Response::denyWithStatus(404);
}
</code></pre><p>Because hiding resources via a <code>404</code> response is such a common pattern for web applications, the <code>denyAsNotFound</code> method is offered for convenience:</p><pre><code>use App\\Models\\Post;
use App\\Models\\User;
use Illuminate\\Auth\\Access\\Response;

/**
 * Determine if the given post can be updated by the user.
 */
public function update(User $user, Post $post): Response
{
    return $user-&gt;id === $post-&gt;user_id
                ? Response::allow()
                : Response::denyAsNotFound();
}
</code></pre><p><a name="methods-without-models"></a></p><h3 id="methods-without-models" tabindex="-1"><a class="header-anchor" href="#methods-without-models" aria-hidden="true">#</a> Methods Without Models</h3><p>Some policy methods only receive an instance of the currently authenticated user. This situation is most common when authorizing <code>create</code> actions. For example, if you are creating a blog, you may wish to determine if a user is authorized to create any posts at all. In these situations, your policy method should only expect to receive a user instance:</p><pre><code>/**
 * Determine if the given user can create posts.
 */
public function create(User $user): bool
{
    return $user-&gt;role == &#39;writer&#39;;
}
</code></pre><p><a name="guest-users"></a></p><h3 id="guest-users" tabindex="-1"><a class="header-anchor" href="#guest-users" aria-hidden="true">#</a> Guest Users</h3><p>By default, all gates and policies automatically return <code>false</code> if the incoming HTTP request was not initiated by an authenticated user. However, you may allow these authorization checks to pass through to your gates and policies by declaring an &quot;optional&quot; type-hint or supplying a <code>null</code> default value for the user argument definition:</p><pre><code>&lt;?php

namespace App\\Policies;

use App\\Models\\Post;
use App\\Models\\User;

class PostPolicy
{
    /**
     * Determine if the given post can be updated by the user.
     */
    public function update(?User $user, Post $post): bool
    {
        return $user?-&gt;id === $post-&gt;user_id;
    }
}
</code></pre><p><a name="policy-filters"></a></p><h3 id="policy-filters" tabindex="-1"><a class="header-anchor" href="#policy-filters" aria-hidden="true">#</a> Policy Filters</h3><p>For certain users, you may wish to authorize all actions within a given policy. To accomplish this, define a <code>before</code> method on the policy. The <code>before</code> method will be executed before any other methods on the policy, giving you an opportunity to authorize the action before the intended policy method is actually called. This feature is most commonly used for authorizing application administrators to perform any action:</p><pre><code>use App\\Models\\User;

/**
 * Perform pre-authorization checks.
 */
public function before(User $user, string $ability): bool|null
{
    if ($user-&gt;isAdministrator()) {
        return true;
    }

    return null;
}
</code></pre><p>If you would like to deny all authorization checks for a particular type of user then you may return <code>false</code> from the <code>before</code> method. If <code>null</code> is returned, the authorization check will fall through to the policy method.</p><blockquote><p><strong>Warning</strong><br> The <code>before</code> method of a policy class will not be called if the class doesn&#39;t contain a method with a name matching the name of the ability being checked.</p></blockquote><p><a name="authorizing-actions-using-policies"></a></p><h2 id="authorizing-actions-using-policies" tabindex="-1"><a class="header-anchor" href="#authorizing-actions-using-policies" aria-hidden="true">#</a> Authorizing Actions Using Policies</h2><p><a name="via-the-user-model"></a></p><h3 id="via-the-user-model" tabindex="-1"><a class="header-anchor" href="#via-the-user-model" aria-hidden="true">#</a> Via The User Model</h3><p>The <code>App\\Models\\User</code> model that is included with your Laravel application includes two helpful methods for authorizing actions: <code>can</code> and <code>cannot</code>. The <code>can</code> and <code>cannot</code> methods receive the name of the action you wish to authorize and the relevant model. For example, let&#39;s determine if a user is authorized to update a given <code>App\\Models\\Post</code> model. Typically, this will be done within a controller method:</p><pre><code>&lt;?php

namespace App\\Http\\Controllers;

use App\\Http\\Controllers\\Controller;
use App\\Models\\Post;
use Illuminate\\Http\\RedirectResponse;
use Illuminate\\Http\\Request;

class PostController extends Controller
{
    /**
     * Update the given post.
     */
    public function update(Request $request, Post $post): RedirectResponse
    {
        if ($request-&gt;user()-&gt;cannot(&#39;update&#39;, $post)) {
            abort(403);
        }

        // Update the post...

        return redirect(&#39;/posts&#39;);
    }
}
</code></pre><p>If a <a href="#registering-policies">policy is registered</a> for the given model, the <code>can</code> method will automatically call the appropriate policy and return the boolean result. If no policy is registered for the model, the <code>can</code> method will attempt to call the closure-based Gate matching the given action name.</p><p><a name="user-model-actions-that-dont-require-models"></a></p><h4 id="actions-that-don-t-require-models" tabindex="-1"><a class="header-anchor" href="#actions-that-don-t-require-models" aria-hidden="true">#</a> Actions That Don&#39;t Require Models</h4><p>Remember, some actions may correspond to policy methods like <code>create</code> that do not require a model instance. In these situations, you may pass a class name to the <code>can</code> method. The class name will be used to determine which policy to use when authorizing the action:</p><pre><code>&lt;?php

namespace App\\Http\\Controllers;

use App\\Http\\Controllers\\Controller;
use App\\Models\\Post;
use Illuminate\\Http\\RedirectResponse;
use Illuminate\\Http\\Request;

class PostController extends Controller
{
    /**
     * Create a post.
     */
    public function store(Request $request): RedirectResponse
    {
        if ($request-&gt;user()-&gt;cannot(&#39;create&#39;, Post::class)) {
            abort(403);
        }

        // Create the post...

        return redirect(&#39;/posts&#39;);
    }
}
</code></pre><p><a name="via-controller-helpers"></a></p><h3 id="via-controller-helpers" tabindex="-1"><a class="header-anchor" href="#via-controller-helpers" aria-hidden="true">#</a> Via Controller Helpers</h3><p>In addition to helpful methods provided to the <code>App\\Models\\User</code> model, Laravel provides a helpful <code>authorize</code> method to any of your controllers which extend the <code>App\\Http\\Controllers\\Controller</code> base class.</p><p>Like the <code>can</code> method, this method accepts the name of the action you wish to authorize and the relevant model. If the action is not authorized, the <code>authorize</code> method will throw an <code>Illuminate\\Auth\\Access\\AuthorizationException</code> exception which the Laravel exception handler will automatically convert to an HTTP response with a 403 status code:</p><pre><code>&lt;?php

namespace App\\Http\\Controllers;

use App\\Http\\Controllers\\Controller;
use App\\Models\\Post;
use Illuminate\\Http\\RedirectResponse;
use Illuminate\\Http\\Request;

class PostController extends Controller
{
    /**
     * Update the given blog post.
     *
     * @throws \\Illuminate\\Auth\\Access\\AuthorizationException
     */
    public function update(Request $request, Post $post): RedirectResponse
    {
        $this-&gt;authorize(&#39;update&#39;, $post);

        // The current user can update the blog post...

        return redirect(&#39;/posts&#39;);
    }
}
</code></pre><p><a name="controller-actions-that-dont-require-models"></a></p><h4 id="actions-that-don-t-require-models-1" tabindex="-1"><a class="header-anchor" href="#actions-that-don-t-require-models-1" aria-hidden="true">#</a> Actions That Don&#39;t Require Models</h4><p>As previously discussed, some policy methods like <code>create</code> do not require a model instance. In these situations, you should pass a class name to the <code>authorize</code> method. The class name will be used to determine which policy to use when authorizing the action:</p><pre><code>use App\\Models\\Post;
use Illuminate\\Http\\RedirectResponse;
use Illuminate\\Http\\Request;

/**
 * Create a new blog post.
 *
 * @throws \\Illuminate\\Auth\\Access\\AuthorizationException
 */
public function create(Request $request): RedirectResponse
{
    $this-&gt;authorize(&#39;create&#39;, Post::class);

    // The current user can create blog posts...

    return redirect(&#39;/posts&#39;);
}
</code></pre><p><a name="authorizing-resource-controllers"></a></p><h4 id="authorizing-resource-controllers" tabindex="-1"><a class="header-anchor" href="#authorizing-resource-controllers" aria-hidden="true">#</a> Authorizing Resource Controllers</h4><p>If you are utilizing <a href="./controllers#resource-controllers">resource controllers</a>, you may make use of the <code>authorizeResource</code> method in your controller&#39;s constructor. This method will attach the appropriate <code>can</code> middleware definitions to the resource controller&#39;s methods.</p><p>The <code>authorizeResource</code> method accepts the model&#39;s class name as its first argument, and the name of the route / request parameter that will contain the model&#39;s ID as its second argument. You should ensure your <a href="./controllers#resource-controllers">resource controller</a> is created using the <code>--model</code> flag so that it has the required method signatures and type hints:</p><pre><code>&lt;?php

namespace App\\Http\\Controllers;

use App\\Http\\Controllers\\Controller;
use App\\Models\\Post;

class PostController extends Controller
{
    /**
     * Create the controller instance.
     */
    public function __construct()
    {
        $this-&gt;authorizeResource(Post::class, &#39;post&#39;);
    }
}
</code></pre><p>The following controller methods will be mapped to their corresponding policy method. When requests are routed to the given controller method, the corresponding policy method will automatically be invoked before the controller method is executed:</p><div class="overflow-auto"><table><thead><tr><th>Controller Method</th><th>Policy Method</th></tr></thead><tbody><tr><td>index</td><td>viewAny</td></tr><tr><td>show</td><td>view</td></tr><tr><td>create</td><td>create</td></tr><tr><td>store</td><td>create</td></tr><tr><td>edit</td><td>update</td></tr><tr><td>update</td><td>update</td></tr><tr><td>destroy</td><td>delete</td></tr></tbody></table></div><blockquote><p><strong>Note</strong><br> You may use the <code>make:policy</code> command with the <code>--model</code> option to quickly generate a policy class for a given model: <code>php artisan make:policy PostPolicy --model=Post</code>.</p></blockquote><p><a name="via-middleware"></a></p><h3 id="via-middleware" tabindex="-1"><a class="header-anchor" href="#via-middleware" aria-hidden="true">#</a> Via Middleware</h3><p>Laravel includes a middleware that can authorize actions before the incoming request even reaches your routes or controllers. By default, the <code>Illuminate\\Auth\\Middleware\\Authorize</code> middleware is assigned the <code>can</code> key in your <code>App\\Http\\Kernel</code> class. Let&#39;s explore an example of using the <code>can</code> middleware to authorize that a user can update a post:</p><pre><code>use App\\Models\\Post;

Route::put(&#39;/post/{post}&#39;, function (Post $post) {
    // The current user may update the post...
})-&gt;middleware(&#39;can:update,post&#39;);
</code></pre><p>In this example, we&#39;re passing the <code>can</code> middleware two arguments. The first is the name of the action we wish to authorize and the second is the route parameter we wish to pass to the policy method. In this case, since we are using <a href="./routing#implicit-binding">implicit model binding</a>, an <code>App\\Models\\Post</code> model will be passed to the policy method. If the user is not authorized to perform the given action, an HTTP response with a 403 status code will be returned by the middleware.</p><p>For convenience, you may also attach the <code>can</code> middleware to your route using the <code>can</code> method:</p><pre><code>use App\\Models\\Post;

Route::put(&#39;/post/{post}&#39;, function (Post $post) {
    // The current user may update the post...
})-&gt;can(&#39;update&#39;, &#39;post&#39;);
</code></pre><p><a name="middleware-actions-that-dont-require-models"></a></p><h4 id="actions-that-don-t-require-models-2" tabindex="-1"><a class="header-anchor" href="#actions-that-don-t-require-models-2" aria-hidden="true">#</a> Actions That Don&#39;t Require Models</h4><p>Again, some policy methods like <code>create</code> do not require a model instance. In these situations, you may pass a class name to the middleware. The class name will be used to determine which policy to use when authorizing the action:</p><pre><code>Route::post(&#39;/post&#39;, function () {
    // The current user may create posts...
})-&gt;middleware(&#39;can:create,App\\Models\\Post&#39;);
</code></pre><p>Specifying the entire class name within a string middleware definition can become cumbersome. For that reason, you may choose to attach the <code>can</code> middleware to your route using the <code>can</code> method:</p><pre><code>use App\\Models\\Post;

Route::post(&#39;/post&#39;, function () {
    // The current user may create posts...
})-&gt;can(&#39;create&#39;, Post::class);
</code></pre><p><a name="via-blade-templates"></a></p><h3 id="via-blade-templates" tabindex="-1"><a class="header-anchor" href="#via-blade-templates" aria-hidden="true">#</a> Via Blade Templates</h3><p>When writing Blade templates, you may wish to display a portion of the page only if the user is authorized to perform a given action. For example, you may wish to show an update form for a blog post only if the user can actually update the post. In this situation, you may use the <code>@can</code> and <code>@cannot</code> directives:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@can(&#39;update&#39;, $post)
    &lt;!-- The current user can update the post... --&gt;
@elsecan(&#39;create&#39;, App\\Models\\Post::class)
    &lt;!-- The current user can create new posts... --&gt;
@else
    &lt;!-- ... --&gt;
@endcan

@cannot(&#39;update&#39;, $post)
    &lt;!-- The current user cannot update the post... --&gt;
@elsecannot(&#39;create&#39;, App\\Models\\Post::class)
    &lt;!-- The current user cannot create new posts... --&gt;
@endcannot
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>These directives are convenient shortcuts for writing <code>@if</code> and <code>@unless</code> statements. The <code>@can</code> and <code>@cannot</code> statements above are equivalent to the following statements:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@if (Auth::user()-&gt;can(&#39;update&#39;, $post))
    &lt;!-- The current user can update the post... --&gt;
@endif

@unless (Auth::user()-&gt;can(&#39;update&#39;, $post))
    &lt;!-- The current user cannot update the post... --&gt;
@endunless
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You may also determine if a user is authorized to perform any action from a given array of actions. To accomplish this, use the <code>@canany</code> directive:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@canany([&#39;update&#39;, &#39;view&#39;, &#39;delete&#39;], $post)
    &lt;!-- The current user can update, view, or delete the post... --&gt;
@elsecanany([&#39;create&#39;], \\App\\Models\\Post::class)
    &lt;!-- The current user can create a post... --&gt;
@endcanany
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="blade-actions-that-dont-require-models"></a></p><h4 id="actions-that-don-t-require-models-3" tabindex="-1"><a class="header-anchor" href="#actions-that-don-t-require-models-3" aria-hidden="true">#</a> Actions That Don&#39;t Require Models</h4><p>Like most of the other authorization methods, you may pass a class name to the <code>@can</code> and <code>@cannot</code> directives if the action does not require a model instance:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@can(&#39;create&#39;, App\\Models\\Post::class)
    &lt;!-- The current user can create posts... --&gt;
@endcan

@cannot(&#39;create&#39;, App\\Models\\Post::class)
    &lt;!-- The current user can&#39;t create posts... --&gt;
@endcannot
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="supplying-additional-context"></a></p><h3 id="supplying-additional-context-1" tabindex="-1"><a class="header-anchor" href="#supplying-additional-context-1" aria-hidden="true">#</a> Supplying Additional Context</h3><p>When authorizing actions using policies, you may pass an array as the second argument to the various authorization functions and helpers. The first element in the array will be used to determine which policy should be invoked, while the rest of the array elements are passed as parameters to the policy method and can be used for additional context when making authorization decisions. For example, consider the following <code>PostPolicy</code> method definition which contains an additional <code>$category</code> parameter:</p><pre><code>/**
 * Determine if the given post can be updated by the user.
 */
public function update(User $user, Post $post, int $category): bool
{
    return $user-&gt;id === $post-&gt;user_id &amp;&amp;
           $user-&gt;canUpdateCategory($category);
}
</code></pre><p>When attempting to determine if the authenticated user can update a given post, we can invoke this policy method like so:</p><pre><code>/**
 * Update the given blog post.
 *
 * @throws \\Illuminate\\Auth\\Access\\AuthorizationException
 */
public function update(Request $request, Post $post): RedirectResponse
{
    $this-&gt;authorize(&#39;update&#39;, [$post, $request-&gt;category]);

    // The current user can update the blog post...

    return redirect(&#39;/posts&#39;);
}
</code></pre>`,177),i=[s];function r(c,d){return t(),o("div",null,i)}const u=e(n,[["render",r],["__file","authorization.html.vue"]]);export{u as default};
