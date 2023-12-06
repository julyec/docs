import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as a,a as s}from"./app-06635a3b.js";const o={},t=s(`<h1 id="用户授权" tabindex="-1"><a class="header-anchor" href="#用户授权" aria-hidden="true">#</a> 用户授权</h1><ul><li><a href="#introduction">简介</a></li><li><a href="#gates">拦截器</a><ul><li><a href="#writing-gates">编写拦截器</a></li><li><a href="#authorizing-actions-via-gates">授权动作</a></li><li><a href="#gate-responses">拦截器响应</a></li><li><a href="#intercepting-gate-checks">拦截器拦截检查</a></li><li><a href="#inline-authorization">内联授权</a></li></ul></li><li><a href="#creating-policies">创建策略</a><ul><li><a href="#generating-policies">生成策略</a></li><li><a href="#registering-policies">注册策略</a></li></ul></li><li><a href="#writing-policies">编辑策略</a><ul><li><a href="#policy-methods">策略模型</a></li><li><a href="#policy-responses">策略返回</a></li><li><a href="#methods-without-models">不使用模型的方法</a></li><li><a href="#guest-users">访客和用户</a></li><li><a href="#policy-filters">策略的过滤器</a></li></ul></li><li><a href="#authorizing-actions-using-policies">使用策略进行授权操作</a><ul><li><a href="#via-the-user-model">通过用户模型</a></li><li><a href="#via-controller-helpers">通过控制器辅助函数</a></li><li><a href="#via-middleware">通过中间件</a></li><li><a href="#via-blade-templates">通过 Blade 模板</a></li><li><a href="#supplying-additional-context">以附加形式提供给上下文调用</a></li></ul></li></ul><p><a name="introduction"></a></p><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p>除了提供内置的 <a href="./authentication">authentication</a>（身份验证）服务外，Laravel 还提供了一种可以很简单就进行使用的方法，来对用户与资源的授权关系进行管理。 它很安全，即使用户已经通过了「身份验证（authentication)」, 用户也可能无权对应用程序中重要的模型或数据库记录进行删除或更改。简单、条理化的系统性，是 Laravel 对授权管理的特性。</p><p>Laravel 主要提供了两种授权操作的方法: <a href="#gates">拦截器</a>和<a href="#creating-policies">策略</a>。 可以把拦截器（gates）和策略（policies）想象成路由和控制器。拦截器（Gates）提供了一种轻便的基于闭包函数的授权方法，像是路由。而策略（policies)，就像是一个控制器，对特定模型或资源，进行分组管理的逻辑规则。 在本文档中，我们将首先探讨拦截器（gates），然后研究策略（policies)。</p><p>你在构建应用程序时，不用为是仅仅使用拦截器（gates）或是仅仅使用策略（policies）而担心，并不需要在两者中进行唯一选择。大多数的应用程序都同时包含两个方法，并且同时使用两者，能够更好的进行工作。拦截器（gates），更适用于没有与任何模型或资源有关的授权操作，例如查看管理员仪表盘。与之相反，当你希望为特定的模型或资源进行授权管理时，应该使用策略（policies) 方法。</p><p><a name="gates"></a></p><h2 id="拦截器-gates" tabindex="-1"><a class="header-anchor" href="#拦截器-gates" aria-hidden="true">#</a> 拦截器 (Gates)</h2><p><a name="writing-gates"></a></p><h3 id="编写拦截器-gates" tabindex="-1"><a class="header-anchor" href="#编写拦截器-gates" aria-hidden="true">#</a> 编写拦截器（Gates）</h3><blockquote><p><strong>注意</strong><br> 通过理解拦截器（Gates），是一个很好的学习 Laravel 授权特性的基础知识的方法。同时，考虑到 Laravel 应用程序的健壮性，应该结合使用策略 <a href="#creating-policies">policies</a> 来组织授权规则。</p></blockquote><p>拦截器（Gates）是用来确定用户是否有权执行给定操作的闭包函数。默认条件下，拦截器（Gates）的使用，是在<code>App\\Providers\\AuthServiceProvider</code>类中的 <code>boot</code> 函数里来规定<code>Gate</code>规则。拦截器（Gates）始终接收用户实例为其第一个参数，并且可以选择性的接收其他参数，例如相关的 Eloquent 模型。</p><p>在下面的例子中，我们将定义一个拦截器（Gates)，并通过调用<code>App\\Models\\Post</code>类，来实现结合用户的 POST 请求，命中给定的规则。拦截器（Gates）将通过比较用户的<code>id</code>，和 POST 请求中的<code>user_id</code>来实现这个目标：</p><pre><code>use App\\Models\\Post;
use App\\Models\\User;
use Illuminate\\Support\\Facades\\Gate;

/**
 * 注册任何需要身份验证、授权服务的行为
 */
public function boot(): void
{
    Gate::define(&#39;update-post&#39;, function (User $user, Post $post)
	{
        return $user-&gt;id === $post-&gt;user_id;
    });
}
</code></pre><p>像是在控制器中操作一样，也可以直接使用类，进行回调数组，完成拦截器（Gates）的定义：</p><pre><code>use App\\Policies\\PostPolicy;
use Illuminate\\Support\\Facades\\Gate;

/**
 * 注册任何需要身份验证、授权服务的行为
 */
public function boot(): void
{
    Gate::define(&#39;update-post&#39;, [PostPolicy::class, &#39;update&#39;]);
}
</code></pre><p><a name="authorizing-actions-via-gates"></a></p><h3 id="授权动作" tabindex="-1"><a class="header-anchor" href="#授权动作" aria-hidden="true">#</a> 授权动作</h3><p>如果需要通过拦截器（Gates）来对行为进行授权控制，你可以通过调用<code>Gate</code>中的<code>allows</code>或<code>denies</code>方法。请注意，在使用过程中，你不需要将已经通过身份验证的用户信息传递给这些方法。 Laravel 将会自动把用户信息传递给拦截器（Gates）。以下是一个典型的，在控制器中使用拦截器（Gates）进行行为授权控制的例子：</p><pre><code>&lt;?php

namespace App\\Http\\Controllers;

use App\\Http\\Controllers\\Controller;
use App\\Models\\Post;
use Illuminate\\Http\\RedirectResponse;
use Illuminate\\Http\\Request;
use Illuminate\\Support\\Facades\\Gate;

class PostController extends Controller
{
    /**
     * 更新给定的帖子
     */
    public function update(Request $request, Post $post): RedirectResponse
    {
        if (! Gate::allows(&#39;update-post&#39;, $post)) {
            abort(403);
        }

        // 更新帖子...

        return redirect(&#39;/posts&#39;);
    }
}
</code></pre><p>如果你需要判断某个用户，是否有权执行某个行为，你可以在<code>Gate</code>门面中，使用<code>forUser</code>方法：</p><pre><code>if (Gate::forUser($user)-&gt;allows(&#39;update-post&#39;, $post)) {
    // 这个用户可以提交update...
}

if (Gate::forUser($user)-&gt;denies(&#39;update-post&#39;, $post)) {
    // 这个用户不可以提交update...
}
</code></pre><p>你还可以通过<code>any</code>或<code>none</code>方法来一次性授权多个行为:</p><pre><code>if (Gate::any([&#39;update-post&#39;, &#39;delete-post&#39;], $post)) {
    // 用户可以提交update或delete...
}

if (Gate::none([&#39;update-post&#39;, &#39;delete-post&#39;], $post)) {
    // 用户不可以提交update和delete...
}
</code></pre><p><a name="authorizing-or-throwing-exceptions"></a></p><h4 id="未通过授权时的抛出异常" tabindex="-1"><a class="header-anchor" href="#未通过授权时的抛出异常" aria-hidden="true">#</a> 未通过授权时的抛出异常</h4><p><code>Illuminate\\Auth\\Access\\AuthorizationException</code>中准备了 HTTP 的 403 响应。你可以使用<code>Gate</code>门面中的<code>authorize</code>方法，来规定如果用户进行了未授权的行为时，触发<code>AuthorizationException</code>实例 ，该实例会自动转换返回为 HTTP 的 403 响应:</p><pre><code>Gate::authorize(&#39;update-post&#39;, $post);

// 行为已获授权...
</code></pre><p><a name="gates-supplying-additional-context"></a></p><h4 id="上下文的值传递" tabindex="-1"><a class="header-anchor" href="#上下文的值传递" aria-hidden="true">#</a> 上下文的值传递</h4><p>能够用于拦截器（Gates）的授权方法，(<code>allows</code>，<code>denies</code>，<code>check</code>，<code>any</code>，<code>none</code>， <code>authorize</code>，<code>can</code>，<code>cannot</code>) 和在前端进行的授权方法 <a href="#via-blade-templates">Blade 指令</a> (<code>@can</code>，<code>@cannot</code>，<code>@canany</code>) 在第 2 个参数中，可以接收数组。这些数组元素作为参数传递给拦截器（Gates），在做出授权决策时可用于其他上下文:</p><pre><code>use App\\Models\\Category;
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
    // 用户可以请求create...
}
</code></pre><p><a name="gate-responses"></a></p><h3 id="拦截器响应" tabindex="-1"><a class="header-anchor" href="#拦截器响应" aria-hidden="true">#</a> 拦截器响应</h3><p>到目前为止，我们只学习了拦截器（Gates）中返回布尔值的简单操作。但是，有时你需要的返回可能更复杂，比如错误消息。所以，你可以尝试使用<code>Illuminate\\Auth\\Access\\Response</code>来构建你的拦截器（Gates）：</p><pre><code>use App\\Models\\User;
use Illuminate\\Auth\\Access\\Response;
use Illuminate\\Support\\Facades\\Gate;

Gate::define(&#39;edit-settings&#39;, function (User $user) {
    return $user-&gt;isAdmin
                ? Response::allow()
                : Response::deny(&#39;You must be an administrator.&#39;);
});
</code></pre><p>你希望从拦截器（Gates）中返回响应时，使用<code>Gate::allows</code>方法，将仅返回一个简单的布尔值；同时，你还可以使用<code>Gate::inspect</code>方法来返回拦截器（Gates）中的所有响应值：</p><pre><code>$response = Gate::inspect(&#39;edit-settings&#39;);

if ($response-&gt;allowed()) {
    // 行为进行授权...
} else {
    echo $response-&gt;message();
}
</code></pre><p>在使用<code>Gate::authorize</code>方法时，如果操作未被授权，仍然会触发<code>AuthorizationException</code>, 用户验证（authorization）响应提供的错误消息，将传递给 HTTP 响应：</p><pre><code>Gate::authorize(&#39;edit-settings&#39;);

// 行为进行授权...
</code></pre><p><a name="customising-gate-response-status"></a></p><h4 id="自定义http响应状态" tabindex="-1"><a class="header-anchor" href="#自定义http响应状态" aria-hidden="true">#</a> 自定义HTTP响应状态</h4><p>当一个操作通过 Gate 被拒绝时，返回一个<code>403</code>HTTP 响应；然而，有时返回一个可选的HTTP状态代码是有用的。你可以使用<code>Illuminate\\Auth\\Access\\Response</code>类上的<code>denyWithStatus</code>静态构造函数自定义授权检查失败返回的HTTP状态代码：</p><pre><code>use App\\Models\\User;
use Illuminate\\Auth\\Access\\Response;
use Illuminate\\Support\\Facades\\Gate;

Gate::define(&#39;edit-settings&#39;, function (User $user) {
    return $user-&gt;isAdmin
                ? Response::allow()
                : Response::denyWithStatus(404);
});
</code></pre><p>由于通过<code>404</code>响应隐藏资源是 Web 应用程序的常见模式，为了方便起见，提供了<code>denyAsNotFound</code>方法:</p><pre><code>use App\\Models\\User;
use Illuminate\\Auth\\Access\\Response;
use Illuminate\\Support\\Facades\\Gate;

Gate::define(&#39;edit-settings&#39;, function (User $user) {
    return $user-&gt;isAdmin
                ? Response::allow()
                : Response::denyAsNotFound();
});
</code></pre><p><a name="intercepting-gate-checks"></a></p><h3 id="拦截-gate-检查" tabindex="-1"><a class="header-anchor" href="#拦截-gate-检查" aria-hidden="true">#</a> 拦截 Gate 检查</h3><p>有时，你可能希望将所有能力授予特定用户。你可以使用<code>before</code>方法定义一个闭包，在所有其他授权检查之前运行:</p><pre><code>use App\\Models\\User;
use Illuminate\\Support\\Facades\\Gate;

Gate::before(function (User $user, string $ability) {
    if ($user-&gt;isAdministrator()) {
        return true;
    }
});
</code></pre><p>如果<code>before</code>返回的是非 null 结果，则该返回将会被视为最终的检查结果。</p><p>你还可以使用<code>after</code>方法，来定义在所有授权拦截规则执行后，再次进行授权拦截规则判定：</p><pre><code>use App\\Models\\User;

Gate::after(function (User $user, string $ability, bool|null $result, mixed $arguments) {
    if ($user-&gt;isAdministrator()) {
        return true;
    }
});
</code></pre><p>类似于<code>before</code>方法，如果<code>after</code>闭包返回非空结果，则该结果将被视为授权检查的结果。</p><p><a name="inline-authorization"></a></p><h3 id="内联授权" tabindex="-1"><a class="header-anchor" href="#内联授权" aria-hidden="true">#</a> 内联授权</h3><p>有时，你可能希望确定当前经过身份验证的用户是否有权执行给定操作，而无需编写与该操作对应的专用拦截器。Laravel 允许你通过<code>Gate::allowIf</code>和<code>Gate::denyIf</code>方法执行这些类型的「内联」授权检查：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Models<span class="token punctuation">\\</span>User</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Support<span class="token punctuation">\\</span>Facades<span class="token punctuation">\\</span>Gate</span><span class="token punctuation">;</span>

<span class="token class-name static-context">Gate</span><span class="token operator">::</span><span class="token function">allowIf</span><span class="token punctuation">(</span><span class="token keyword">fn</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">User</span> <span class="token variable">$user</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token variable">$user</span><span class="token operator">-&gt;</span><span class="token function">isAdministrator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name static-context">Gate</span><span class="token operator">::</span><span class="token function">denyIf</span><span class="token punctuation">(</span><span class="token keyword">fn</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">User</span> <span class="token variable">$user</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token variable">$user</span><span class="token operator">-&gt;</span><span class="token function">banned</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果该操作未授权或当前没有用户经过身份验证，Laravel 将自动抛出<code>Illuminate\\Auth\\Access\\AuthorizationException</code>异常。<code>AuthorizationException</code>的实例会被 Laravel 的异常处理程序自动转换为 403 HTTP 响应：</p><p><a name="creating-policies"></a></p><h2 id="生成策略" tabindex="-1"><a class="header-anchor" href="#生成策略" aria-hidden="true">#</a> 生成策略</h2><p><a name="generating-policies"></a></p><h3 id="生成策略-1" tabindex="-1"><a class="header-anchor" href="#生成策略-1" aria-hidden="true">#</a> 生成策略</h3><p>策略是围绕特定模型或资源组织授权逻辑的类。例如，如果你的应用程序是博客，可能有一个<code>App\\Models\\Post</code>模型和一个相应的<code>App\\Policies\\PostPolicy</code>来授权用户操作，例如创建或更新帖子。</p><p>你可以使用<code>make:policy</code>Artisan 命令生成策略。生成的策略将放置在<code>app/Policies</code>目录中。如果应用程序中不存在此目录，Laravel 将自动创建：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan make:policy PostPolicy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>make:policy</code>命令将生成一个空的策略类。如果要生成一个包含与查看、创建、更新和删除资源相关的示例策略方法的类，可以在执行命令时提供一个<code>--model</code>选项：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan make:policy PostPolicy <span class="token parameter variable">--model</span><span class="token operator">=</span>Post
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="registering-policies"></a></p><h3 id="注册策略" tabindex="-1"><a class="header-anchor" href="#注册策略" aria-hidden="true">#</a> 注册策略</h3><p>创建了策略类之后，还需要对其进行注册。注册策略是告知 Laravel 在授权针对给定模型类型的操作时使用哪个策略。</p><p>新的 Laravel 应用程序中包含的<code>App\\Providers\\AuthServiceProvider</code>包含一个<code>policies</code>属性，它将 Eloquent 模型映射到其相应的策略。 注册策略将指示 Laravel 在授权针对给定 Eloquent 模型的操作时使用哪个策略：</p><pre><code>&lt;?php

namespace App\\Providers;

use App\\Models\\Post;
use App\\Policies\\PostPolicy;
use Illuminate\\Foundation\\Support\\Providers\\AuthServiceProvider as ServiceProvider;
use Illuminate\\Support\\Facades\\Gate;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * 应用程序的策略映射。
     *
     * @var array
     */
    protected $policies = [
        Post::class =&gt; PostPolicy::class,
    ];

    /**
     * 注册任何应用程序身份验证/授权服务。
     */
    public function boot(): void
    {
        // ...
    }
}
</code></pre><p><a name="policy-auto-discovery"></a></p><h4 id="策略自动发现" tabindex="-1"><a class="header-anchor" href="#策略自动发现" aria-hidden="true">#</a> 策略自动发现</h4><p>只要模型和策略遵循标准的 Laravel 命名约定，Laravel 就可以自动发现策略，而不是手动注册模型策略。具体来说，策略必须位于包含模型的目录或其上方的「Policies」目录中。 因此，例如，模型可以放置在<code>app/Models</code>目录中，而策略可以放置在<code>app/Policies</code>目录中。在这种情况下，Laravel 将检查<code>app/Models/Policies</code>然后<code>app/Policies</code>中的策略。此外，策略名称必须与模型名称匹配并具有「策略」后缀。 因此，<code>User</code>模型将对应于<code>UserPolicy</code>策略类。</p><p>如果要自定义策略的发现逻辑，可以使用<code>Gate::guessPolicyNamesUsing</code>方法注册自定义策略发现回调。通常，应该从应用程序的<code>AuthServiceProvider</code>的<code>boot</code>方法调用此方法：</p><pre><code>use Illuminate\\Support\\Facades\\Gate;

Gate::guessPolicyNamesUsing(function (string $modelClass) {
    // 返回给定模型的策略类的名称…
});
</code></pre><blockquote><p><strong>注意</strong><br> 在<code>AuthServiceProvider</code>中显式映射的任何策略将优先于任何可能自动发现的策略。</p></blockquote><p><a name="writing-policies"></a></p><h2 id="编写策略" tabindex="-1"><a class="header-anchor" href="#编写策略" aria-hidden="true">#</a> 编写策略</h2><p><a name="policy-methods"></a></p><h3 id="策略方法" tabindex="-1"><a class="header-anchor" href="#策略方法" aria-hidden="true">#</a> 策略方法</h3><p>注册策略类后，可以为其授权的每个操作添加方法。例如，让我们在<code>PostPolicy</code>上定义一个 <code>update</code>方法，该方法确定给定的<code>App\\Models\\User</code>是否可以更新给定的<code>App\\Models\\Post</code>实例。</p><p>该<code>update</code>方法将接收一个<code>User</code>和一个<code>Post</code>实例作为其参数，并应返回<code>true</code>或<code>false</code>，指示用户是否有权更新给定的<code>Post</code>。因此，在本例中，我们将验证用户的<code>id</code>是否与 Post 上的<code>user_id</code>匹配：</p><pre><code>&lt;?php

namespace App\\Policies;

use App\\Models\\Post;
use App\\Models\\User;

class PostPolicy
{
    /**
     * 确定用户是否可以更新给定的帖子
     */
    public function update(User $user, Post $post): bool
    {
        return $user-&gt;id === $post-&gt;user_id;
    }
}
</code></pre><p>你可以继续根据需要为策略授权的各种操作定义其他方法。例如，你可以定义<code>view</code>或<code>delete</code>方法来授权各种与<code>Post</code>相关的操作，但请记住，你可以自由地为策略方法命名任何你喜欢的名称。</p><p>如果你在 Artisan 控制台生成策略时使用了<code>--model</code>选项，它将包含用于<code>viewAny</code>、<code>view</code>、 <code>create</code>、<code>update</code>、<code>delete</code>、<code>restore</code>和<code>forceDelete</code>操作。</p><blockquote><p><strong>技巧</strong><br> 所有策略都通过 Laravel <a href="./container">服务容器</a>解析，允许你在策略的构造函数中键入任何需要的依赖项，以自动注入它们。</p></blockquote><p><a name="policy-responses"></a></p><h3 id="策略响应" tabindex="-1"><a class="header-anchor" href="#策略响应" aria-hidden="true">#</a> 策略响应</h3><p>到目前为止，我们只检查了返回简单布尔值的策略方法。但是，有时你可能希望返回更详细的响应，包括错误消息。为此，你可以从你的策略方法返回一个<code>Illuminate\\Auth\\Access\\Response</code>实例：</p><pre><code>use App\\Models\\Post;
use App\\Models\\User;
use Illuminate\\Auth\\Access\\Response;

/**
 * 确定用户是否可以更新给定的帖子。
 */
public function update(User $user, Post $post): Response
{
    return $user-&gt;id === $post-&gt;user_id
                ? Response::allow()
                : Response::deny(&#39;你不拥有这个帖子。&#39;);
}
</code></pre><p>当从你的策略返回授权响应时，<code>Gate::allows</code>方法仍将返回一个简单的布尔值；但是，你可以使用<code>Gate::inspect</code>方法来获取返回的完整授权响应：</p><pre><code>use Illuminate\\Support\\Facades\\Gate;

$response = Gate::inspect(&#39;update&#39;, $post);

if ($response-&gt;allowed()) {
    // 操作已被授权…
} else {
    echo $response-&gt;message();
}
</code></pre><p>当使用<code>Gate::authorize</code>方法时，如果操作未被授权，该方法会抛出<code>AuthorizationException</code> ，授权响应提供的错误消息将传播到 HTTP 响应：</p><pre><code>Gate::authorize(&#39;update&#39;, $post);

// 该操作已授权通过...
</code></pre><p><a name="customising-policy-response-status"></a></p><h4 id="自定义http响应状态-1" tabindex="-1"><a class="header-anchor" href="#自定义http响应状态-1" aria-hidden="true">#</a> 自定义HTTP响应状态</h4><p>当一个操作通过策略方法被拒绝时，返回一个<code>403</code>HTTP 响应;然而，有时返回一个可选的 HTTP 状态代码是有用的。你可以使用<code>Illuminate\\Auth\\Access\\Response</code>类上的<code>denyWithStatus</code>静态构造函数自定义授权检查失败返回的 HTTP 状态代码:</p><pre><code>use App\\Models\\Post;
use App\\Models\\User;
use Illuminate\\Auth\\Access\\Response;

/**
 * 确定用户是否可以更新给定的帖子。
 */
public function update(User $user, Post $post): Response
{
    return $user-&gt;id === $post-&gt;user_id
                ? Response::allow()
                : Response::denyWithStatus(404);
}
</code></pre><p>由于通过<code>404</code>响应隐藏资源是 Web 应用程序的常见模式，为了方便起见，提供了<code>denyAsNotFound</code>方法:</p><pre><code>use App\\Models\\Post;
use App\\Models\\User;
use Illuminate\\Auth\\Access\\Response;

/**
 * 确定用户是否可以更新给定的帖子。
 */
public function update(User $user, Post $post): Response
{
    return $user-&gt;id === $post-&gt;user_id
                ? Response::allow()
                : Response::denyAsNotFound();
}
</code></pre><p><a name="methods-without-models"></a></p><h3 id="无需传递模型的方法" tabindex="-1"><a class="header-anchor" href="#无需传递模型的方法" aria-hidden="true">#</a> 无需传递模型的方法</h3><p>一些策略方法只接收当前经过身份验证的用户实例，最常见的情况是给 <code>create</code> 方法做授权。例如，如果你正在创建一个博客，你可能希望确定一个用户是否被授权创建任何文章，在这种情况下，你的策略方法应该只期望接收一个用户实例：</p><pre><code>/**
 * 确定给定用户是否可以创建文件
 */
public function create(User $user): bool
{
    return $user-&gt;role == &#39;writer&#39;;
}
</code></pre><p><a name="guest-users"></a></p><h3 id="guest-用户" tabindex="-1"><a class="header-anchor" href="#guest-用户" aria-hidden="true">#</a> Guest 用户</h3><p>默认情况下，如果传入的 HTTP 请求不是经过身份验证的用户发起的，那么所有的拦截器（gates）和策略（policies）会自动返回<code>false</code>。但是，你可以通过声明一个「optional」类型提示或为用户参数定义提供一个<code>null</code>默认值，从而允许这些授权检查通过你的拦截器（gates）和策略（policies）：</p><pre><code>&lt;?php

namespace App\\Policies;

use App\\Models\\Post;
use App\\Models\\User;

class PostPolicy
{
    /**
     * 确定用户是否可以更新给定的文章
     */
    public function update(?User $user, Post $post): bool
    {
        return $user?-&gt;id === $post-&gt;user_id;
    }
}
</code></pre><p><a name="policy-filters"></a></p><h3 id="策略过滤器" tabindex="-1"><a class="header-anchor" href="#策略过滤器" aria-hidden="true">#</a> 策略过滤器</h3><p>对于某些用户，你可能希望给他授权给定策略中的所有操作。为了实现这一点，你可以在策略上定义一个<code>before</code>方法。该<code>before</code>方法将在策略上的所有方法之前执行，这样就使你有机会在实际调用预期的策略方法之前就已经授权了操作。该功能常用于授权应用程序管理员来执行任何操作：</p><pre><code>use App\\Models\\User;

/**
 * 执行预先授权检查
 */
public function before(User $user, string $ability): bool|null
{
    if ($user-&gt;isAdministrator()) {
        return true;
    }

    return null;
}
</code></pre><p>如果你想拒绝特定类型用户的所有授权检查，那么你可以从<code>before</code>方法返回<code>false</code>。如果返回<code>null</code>，则授权检查将通过策略方法进行。</p><blockquote><p><strong>注意</strong><br> 如果策略类中不包含名称与被检查能力的名称相匹配的方法，则不会调用策略类的<code>before</code>方法。</p></blockquote><p><a name="authorizing-actions-using-policies"></a></p><h2 id="使用策略进行授权操作" tabindex="-1"><a class="header-anchor" href="#使用策略进行授权操作" aria-hidden="true">#</a> 使用策略进行授权操作</h2><p><a name="via-the-user-model"></a></p><h3 id="通过用户模型" tabindex="-1"><a class="header-anchor" href="#通过用户模型" aria-hidden="true">#</a> 通过用户模型</h3><p>Laravel 应用程序中的<code>App\\Models\\User</code>型提供了两个用于授权操作的方法：<code>can</code>和<code>cannot</code>。<code>can</code>和<code>cannot</code>方法接收你希望授权的操作名称和相关模型。例如，让我们确定一个用户是否被授权更新给定的<code>App\\Models\\Post</code>模型，这通常在控制器方法中实现：</p><pre><code>&lt;?php

namespace App\\Http\\Controllers;

use App\\Http\\Controllers\\Controller;
use App\\Models\\Post;
use Illuminate\\Http\\RedirectResponse;
use Illuminate\\Http\\Request;

class PostController extends Controller
{
    /**
     * 更新给定的帖子。
     */
    public function update(Request $request, Post $post): RedirectResponse
    {
        if ($request-&gt;user()-&gt;cannot(&#39;update&#39;, $post)) {
            abort(403);
        }

        // 更新帖子...

        return redirect(&#39;/posts&#39;);
    }
}
</code></pre><p>如果为给定模型<a href="#registering-policies">注册了策略</a>，该<code>can</code>方法将自动调用适当的策略并返回布尔值；如果没有为模型注册策略，该<code>can</code>方法将尝试调用基于 Gate 的闭包，该闭包将匹配给定的操作名称。</p><p><a name="user-model-actions-that-dont-require-models"></a></p><h4 id="不需要指定模型的操作" tabindex="-1"><a class="header-anchor" href="#不需要指定模型的操作" aria-hidden="true">#</a> 不需要指定模型的操作</h4><p>请记住，某些操作可能对应着「不需要模型实例」的策略方法，比如<code>create</code>。在这些情况下，你可以将类名传递给<code>can</code>方法，类名将用于确定在授权操作时使用哪个策略：</p><pre><code>&lt;?php

namespace App\\Http\\Controllers;

use App\\Http\\Controllers\\Controller;
use App\\Models\\Post;
use Illuminate\\Http\\RedirectResponse;
use Illuminate\\Http\\Request;

class PostController extends Controller
{
    /**
     * 创建一个帖子。
     */
    public function store(Request $request): RedirectResponse
    {
        if ($request-&gt;user()-&gt;cannot(&#39;create&#39;, Post::class)) {
            abort(403);
        }

        // 创建帖子…

        return redirect(&#39;/posts&#39;);
    }
}
</code></pre><p><a name="via-controller-helpers"></a></p><h3 id="通过控制器辅助函数" tabindex="-1"><a class="header-anchor" href="#通过控制器辅助函数" aria-hidden="true">#</a> 通过控制器辅助函数</h3><p>除了给<code>App\\Models\\User</code>模型提供了有用方法，Laravel 还给任何控制器提供了一个有用的 <code>authorize</code> 方法，这些控制器要继承（<code>extends</code>）<code>App\\Http\\Controllers\\Controller</code>基类。</p><p>与<code>can</code>方法一样，<code>authorize</code>方法接收你希望授权的操作名称和相关模型，如果该操作未被授权，该方法将抛出<code>Illuminate\\Auth\\Access\\AuthorizationException</code>异常，Laravel 的异常处理程序将自动将该异常转换为一个带有 403 状态码的 HTTP 响应：</p><pre><code>&lt;?php

namespace App\\Http\\Controllers;

use App\\Http\\Controllers\\Controller;
use App\\Models\\Post;
use Illuminate\\Http\\RedirectResponse;
use Illuminate\\Http\\Request;

class PostController extends Controller
{
    /**
     * 更新指定的博客文章
     *
     * @throws \\Illuminate\\Auth\\Access\\AuthorizationException
     */
    public function update(Request $request, Post $post): RedirectResponse
    {
        $this-&gt;authorize(&#39;update&#39;, $post);

        // 当前用户可以更新博客文章…

        return redirect(&#39;/posts&#39;);
    }
}
</code></pre><p><a name="controller-actions-that-dont-require-models"></a></p><h4 id="不需要指定模型的操作-1" tabindex="-1"><a class="header-anchor" href="#不需要指定模型的操作-1" aria-hidden="true">#</a> 不需要指定模型的操作</h4><p>如前所述，一些策略方法 如<code>create</code>不需要模型实例，在这些情况下，你应该给<code>authorize</code>方法传递一个类名，该类名将用来确定在授权操作时使用哪个策略：</p><pre><code>use App\\Models\\Post;
use Illuminate\\Http\\RedirectResponse;
use Illuminate\\Http\\Request;

/**
 * 创建一个新的博客文章。
 *
 * @throws \\Illuminate\\Auth\\Access\\AuthorizationException
 */
public function create(Request $request): RedirectResponse
{
    $this-&gt;authorize(&#39;create&#39;, Post::class);

    // 当前用户可以创建博客帖子…

    return redirect(&#39;/posts&#39;);
}
</code></pre><p><a name="authorizing-resource-controllers"></a></p><h4 id="授权资源控制器" tabindex="-1"><a class="header-anchor" href="#授权资源控制器" aria-hidden="true">#</a> 授权资源控制器</h4><p>如果你正在使用<a href="./controllers#resource-controllers">资源控制器</a>，你可以在控制器的构造方法中使用<code>authorizeResource</code>方法，该方法将把适当的<code>can</code>中间件定义附加到资源控制器的方法上。</p><p>该<code>authorizeResource</code>方法的第一个参数是模型的类名，第二个参数是包含模型 ID 的 路由/请求参数的名称。你应该确保你的<a href="./controllers#resource-controllers">资源控制器</a>是使用 <code>--model</code> 标志创建的，这样它才具有所需的方法签名和类型提示。</p><pre><code>&lt;?php

namespace App\\Http\\Controllers;

use App\\Http\\Controllers\\Controller;
use App\\Models\\Post;
use Illuminate\\Http\\Request;

class PostController extends Controller
{
    /**
     * 创建控制器实例
     */
    public function __construct()
    {
        $this-&gt;authorizeResource(Post::class, &#39;post&#39;);
    }
}
</code></pre><p>以下控制器方法将映射到其相应的策略方法。当请求被路由到给定的控制器方法时，会在控制器方法执行之前自动调用相应的策略方法：</p><table><thead><tr><th>控制器方法</th><th>策略方法</th></tr></thead><tbody><tr><td>index</td><td>viewAny</td></tr><tr><td>show</td><td>view</td></tr><tr><td>create</td><td>create</td></tr><tr><td>store</td><td>create</td></tr><tr><td>edit</td><td>update</td></tr><tr><td>update</td><td>update</td></tr><tr><td>destroy</td><td>delete</td></tr></tbody></table><blockquote><p><strong>技巧</strong><br> 你可以使用带有<code>make:policy</code>带有 <code>--model</code>选项的命令，快速的为给定模型生成一个策略类：<code>php artisan make:policy PostPolicy --model=Post</code>。</p></blockquote><p><a name="via-middleware"></a></p><h3 id="通过中间件" tabindex="-1"><a class="header-anchor" href="#通过中间件" aria-hidden="true">#</a> 通过中间件</h3><p>Laravel 包含一个中间件，可以在传入的请求到达路由或控制器之前对操作进行授权。默认情况下，<code>Illuminate\\Auth\\Middleware\\Authorize</code>中间件会在<code>App\\Http\\Kernel</code>中的<code>can</code>键中被指定。让我们来看一个使用<code>can</code>中间件授权用户更新博客文章的例子：</p><pre><code>use App\\Models\\Post;

Route::put(&#39;/post/{post}&#39;, function (Post $post) {
    // 当前用户可以更新帖子…
})-&gt;middleware(&#39;can:update,post&#39;);
</code></pre><p>在这个例子中，我们给<code>can</code>中间件传递了两个参数。第一个是我们希望授权操作的名称，第二个是我们希望传递给策略方法的路由参数。在这个例子中，当我们使用了<a href="./routing#implicit-binding">隐式模型绑定</a>后，一个<code>App\\Models\\Post</code>模型就将被传递给对应的策略方法。如果用户没有被授权执行给定操作的权限，那么中间件将会返回一个带有 403 状态码的 HTTP 响应。</p><p>为了方便起见，你也可以使用<code>can</code>方法将<code>can</code>中间件绑定到你的路由上：</p><pre><code>use App\\Models\\Post;

Route::put(&#39;/post/{post}&#39;, function (Post $post) {
    // 当前用户可以更新文章...
})-&gt;can(&#39;update&#39;, &#39;post&#39;);
</code></pre><p><a name="middleware-actions-that-dont-require-models"></a></p><h4 id="不需要指定模型的操作-2" tabindex="-1"><a class="header-anchor" href="#不需要指定模型的操作-2" aria-hidden="true">#</a> 不需要指定模型的操作</h4><p>同样的，一些策略方法不需要模型实例，比如<code>create</code>。在这些情况下，你可以给中间件传递一个类名。这个类名将用来确定在授权操作时使用哪个策略：</p><pre><code>Route::post(&#39;/post&#39;, function () {
    // 当前用户可以创建文章...
})-&gt;middleware(&#39;can:create,App\\Models\\Post&#39;);
</code></pre><p>在一个中间件中定义整个类名会变得难以维护。因此，你也可以选择使用<code>can</code>方法将<code>can</code>中间件绑定到你的路由上：</p><pre><code>use App\\Models\\Post;

Route::post(&#39;/post&#39;, function () {
    // 当前用户可以创建文章
})-&gt;can(&#39;create&#39;, Post::class);
</code></pre><p><a name="via-blade-templates"></a></p><h3 id="通过-blade-模板" tabindex="-1"><a class="header-anchor" href="#通过-blade-模板" aria-hidden="true">#</a> 通过 Blade 模板</h3><p>当编写 Blade 模板时，你可能希望只展示给用户有权限操作的数据。例如，你可能希望当用户具有更新文章的权限时才展示更新博客文章的表单。在这种情况下，你可以使用<code>@can</code>和<code>@cannot</code>指令：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@can(&#39;update&#39;, $post)
    &lt;!-- 当前用户可更新的文章... --&gt;
@elsecan(&#39;create&#39;, App\\Models\\Post::class)
    &lt;!-- 当前用户可创建新文章... --&gt;
@else
    &lt;!-- ... --&gt;
@endcan

@cannot(&#39;update&#39;, $post)
    &lt;!-- 当前用户不可更新的文章... --&gt;
@elsecannot(&#39;create&#39;, App\\Models\\Post::class)
    &lt;!-- 当前用户不可创建新文章... --&gt;
@endcannot
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这些指令是编写<code>@if</code>和<code>@unless</code>语句的快捷方式。上面的<code>@can</code>和<code>@cannot</code>语句相当于下面的语句：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@if (Auth::user()-&gt;can(&#39;update&#39;, $post))
    &lt;!-- 当前用户可更新的文章... --&gt;
@endif

@unless (Auth::user()-&gt;can(&#39;update&#39;, $post))
    &lt;!-- 当前用户不可更新的文章... --&gt;
@endunless
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你还可以确定一个用户是否被授权从给定的操作数组中执行任何操作，要做到这一点，可以使用<code>@canany</code>指令：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@canany([&#39;update&#39;, &#39;view&#39;, &#39;delete&#39;], $post)
    &lt;!-- 当前用户可以更新、查看、删除文章... --&gt;
@elsecanany([&#39;create&#39;], \\App\\Models\\Post::class)
    &lt;!-- 当前用户可以创建新文章... --&gt;
@endcanany
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="blade-actions-that-dont-require-models"></a></p><h4 id="不需要执行模型的操作" tabindex="-1"><a class="header-anchor" href="#不需要执行模型的操作" aria-hidden="true">#</a> 不需要执行模型的操作</h4><p>像大多数其他授权方法一样，如果操作不需要模型实例，你可以给<code>@can</code>和<code>@cannot</code>指令传递一个类名：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@can(&#39;create&#39;, App\\Models\\Post::class)
    &lt;!-- 当前用户可以创建文章... --&gt;
@endcan

@cannot(&#39;create&#39;, App\\Models\\Post::class)
    &lt;!-- 当前用户不能创建文章... --&gt;
@endcannot
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="supplying-additional-context"></a></p><h3 id="提供额外的上下文" tabindex="-1"><a class="header-anchor" href="#提供额外的上下文" aria-hidden="true">#</a> 提供额外的上下文</h3><p>在使用策略授权操作时，可以将数组作为第二个参数传递给授权函数和辅助函数。数组中的第一个元素用于确定应该调用哪个策略，其余的数组元素作为参数传递给策略方法，并可在作出授权决策时用于额外的上下文中。例如，考虑下面的 <code>PostPolicy</code> 方法定义，它包含一个额外的 <code>$category</code> 参数：</p><pre><code>/**
 * 确认用户是否可以更新给定的文章。
 */
public function update(User $user, Post $post, int $category): bool
{
    return $user-&gt;id === $post-&gt;user_id &amp;&amp;
           $user-&gt;canUpdateCategory($category);
}
</code></pre><p>当尝试确认已验证过的用户是否可以更新给定的文章时，我们可以像这样调用此策略方法：</p><pre><code>/**
 * 更新给定的博客文章
 *
 * @throws \\Illuminate\\Auth\\Access\\AuthorizationException
 */
public function update(Request $request, Post $post): RedirectResponse
{
    $this-&gt;authorize(&#39;update&#39;, [$post, $request-&gt;category]);

    // 当前用户可以更新博客文章...

    return redirect(&#39;/posts&#39;);
}
</code></pre>`,177),d=[t];function c(r,i){return n(),a("div",null,d)}const u=e(o,[["render",c],["__file","authorization.html.vue"]]);export{u as default};
