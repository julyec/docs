import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as s,c as d,b as a,d as e,e as n,a as r}from"./app-8cdff07c.js";const c={},p=r('<h1 id="用户认证" tabindex="-1"><a class="header-anchor" href="#用户认证" aria-hidden="true">#</a> 用户认证</h1><ul><li><a href="#introduction">介绍</a><ul><li><a href="#starter-kits">入门套件</a></li><li><a href="#introduction-database-considerations">数据库注意事项</a></li><li><a href="#ecosystem-overview">生态系统概述</a></li></ul></li><li><a href="#authentication-quickstart">快速开始用户认证</a><ul><li><a href="#install-a-starter-kit">安装入门套件</a></li><li><a href="#retrieving-the-authenticated-user">获取已认证的用户信息</a></li><li><a href="#protecting-routes">路由保护</a></li><li><a href="#login-throttling">登录限流</a></li></ul></li><li><a href="#authenticating-users">手动认证用户</a><ul><li><a href="#remembering-users">记住密码</a></li><li><a href="#other-authentication-methods">其他认证方法</a></li></ul></li><li><a href="#http-basic-authentication">HTTP Basic 认证</a><ul><li><a href="#stateless-http-basic-authentication">无状态 HTTP Basic 认证</a></li></ul></li><li><a href="#logging-out">注销</a><ul><li><a href="#invalidating-sessions-on-other-devices">使其他设备上的会话无效</a></li></ul></li><li><a href="#password-confirmation">密码确认</a><ul><li><a href="#password-confirmation-configuration">配置</a></li><li><a href="#password-confirmation-routing">路由</a></li><li><a href="#password-confirmation-protecting-routes">路由保护</a></li></ul></li><li><a href="#adding-custom-guards">添加自定义看守器</a><ul><li><a href="#closure-request-guards">闭包请求看守器</a></li></ul></li><li><a href="#adding-custom-user-providers">添加自定义用户提供器</a><ul><li><a href="#the-user-provider-contract">用户提供器契约</a></li><li><a href="#the-authenticatable-contract">用户认证契约</a></li></ul></li><li><a href="./socialite">社会化用户认证</a></li><li><a href="#events">事件</a></li></ul><p><a name="introduction"></a></p><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p>许多 Web 应用程序为其用户提供了一种通过应用程序进行身份验证和「登录」的方法。在 Web 应用程序中实现此功能可能是一项复杂且具有潜在风险的工作。因此，Laravel 致力于为你提供所需的工具，以快速、安全、轻松地实现身份验证。</p><p>Laravel 的身份验证工具的核心是由「看守器」和「提供器」组成的。 看守器定义如何对每个请求的用户进行身份验证。例如，Laravel 附带了一个 <code>session</code> 守卫，它使用 session 和 cookie 来维护状态。</p><p>提供器定义如何从持久存储中检索用户。 Laravel 支持使用 <a href="./eloquent">Eloquent</a> 和数据库查询构建器检索用户。不仅如此，你甚至可以根据应用程序的需要自由定制其他提供程序。</p><p>应用程序的身份验证配置文件位于 <code>config/auth.php</code>. 这个文件包含几个记载了的选项，用于调整 Laravel 身份验证服务的行为。</p><blockquote><p><strong>注意</strong><br> 看守器和提供器不应与「角色」和「权限」混淆。要了解有关通过权限授权用户操作的更多信息，请参阅 <a href="./authorization">用户授权</a> 文档。</p></blockquote><p><a name="starter-kits"></a></p><h3 id="入门套件" tabindex="-1"><a class="header-anchor" href="#入门套件" aria-hidden="true">#</a> 入门套件</h3><p>想要快速入门？在新的 Laravel 应用程序中安装 <a href="./starter-kits">Laravel 入门套件</a>。迁移数据库后，将浏览器导航到 <code>/register</code> 或分配给应用程序的任何其他 URL。这个入门套件将负责构建你的整个身份验证系统！</p><p><strong>即使你在最终的 Laravel 应用程序中选择不使用入门套件，安装 <a href="./starter-kits#laravel-breeze">Laravel Breeze</a> 入门套件也是学习如何在实际的 Laravel 项目中实现所有 Laravel 身份验证功能的绝佳机会。</strong> 由于 Laravel Breeze 为你创建身份验证控制器、路由和视图，因此你可以查看这些文件中的源码，进而了解如何实现 Laravel 的身份验证功能。</p><p><a name="introduction-database-considerations"></a></p><h3 id="数据库注意事项" tabindex="-1"><a class="header-anchor" href="#数据库注意事项" aria-hidden="true">#</a> 数据库注意事项</h3><p>默认情况下，Laravel 在 <code>app/Models</code> 目录中包含一个 <code>App\\Models\\User</code> <a href="./eloquent">Eloquent 模型</a>。 此模型可与默认的 Eloquent 身份验证驱动程序一起使用。如果你的应用程序未使用 Eloquent，则可以使用 Laravel 查询构建器的 <code>database</code> 身份验证提供程序。</p><p>为 <code>App\\Models\\User</code> 模型构建数据库架构时，请确保密码列的长度至少为 60 个字符。当然，新的 Laravel 应用程序中包含的 <code>users</code> 表迁移文件已经创建了一个超过此长度的列。</p><p>此外，你应该验证你的 <code>users</code> (或等效) 表是否包含一个可为空的字符串 <code>remember_token</code> 列，该列包含 100 个字符。 此列将用于为在登录到应用程序时选择「记住我」选项的用户存储令牌。同样，新的 Laravel 应用程序中包含的默认 <code>users</code> 表迁移文件已经包含此列。</p><p><a name="ecosystem-overview"></a></p><h3 id="生态系统概述" tabindex="-1"><a class="header-anchor" href="#生态系统概述" aria-hidden="true">#</a> 生态系统概述</h3><p>Laravel 提供了几个与身份验证相关的包。在继续之前，我们将回顾 Laravel 中的通用身份验证生态系统，并讨论每个包的预期用途。</p><p>首先，考虑身份验证是如何工作的。使用 web 浏览器时，用户将通过登录表单提供他们的用户名和密码。如果这些凭据正确，应用程序将在用户的 <a href="./session">session</a>中存储有关已通过身份验证的用户的信息。发给浏览器的 cookie 包含 session ID，以便应用程序的后续请求可以将用户与正确的 session 相关联。在接收到 session 的 cookie 之后，应用程序将基于 session ID 检索 session 数据，注意认证信息已经存储在 session 中，并且将用户视为「已认证」。</p><p>当远程服务需要通过身份验证才能访问 API 时，我们通常不用 cookie 进行身份验证，因为没有 web 浏览器。相反，远程服务会在每个请求时向 API 发送一个 token。应用程序可以对照有效 API 令牌表来验证传入 token ，并「验证」与该 API 令牌相关联的用户正在执行的请求。</p><p><a name="laravels-built-in-browser-authentication-services"></a></p><h4 id="laravel-内置的浏览器认证服务" tabindex="-1"><a class="header-anchor" href="#laravel-内置的浏览器认证服务" aria-hidden="true">#</a> Laravel 内置的浏览器认证服务</h4><p>Laravel 包括内置的身份验证和 session 服务，这些服务通常通过 <code>Auth</code> 和 <code>Session</code> facade 使用。 这些特性为从 web 浏览器发起的请求提供基于 cookie 的身份验证。它们提供的方法允许你验证用户的凭据并对用户进行身份验证。此外，这些服务会自动将正确的身份验证数据存储在用户的 session 中，并发布用户的会话 cookie 。本文档中包含对如何使用这些服务的讨论。</p><p><strong>应用入门套件</strong></p><p>如本文档中所述，你可以手动与这些身份验证服务进行交互，以构建应用程序自己的身份验证层。不过，为了帮助你更快地入门，我们发布了 <a href="./starter-kits">免费软件包</a>，为整个身份验证层提供强大的现代化脚手架。这些软件包分别是 <a href="./starter-kits#laravel-breeze">Laravel Breeze</a>，<a href="./starter-kits#laravel-jetstream">Laravel Jetstream</a>，和 <a href="./fortify">Laravel Fortify</a>。</p>',28),u=a("em",null,"Laravel Breeze",-1),l=a("a",{href:"./blade"},"Blade 模板",-1),h={href:"https://tailwindcss.com",target:"_blank",rel:"noopener noreferrer"},m=a("a",{href:"./starter-kits"},"应用入门套件",-1),g=a("p",null,[a("em",null,"Laravel Fortify"),e(" 是 Laravel 的无 header 身份验证后端，它实现了本文档中的许多功能，包括基于 cookie 的身份验证以及其他功能，如双因素身份验证和电子邮件验证。Fortify 为 Laravel Jetstream 提供身份验证后端，或者可以单独与 "),a("a",{href:"./sanctum"},"Laravel Sanctum"),e(" 结合使用，为需要使用 Laravel 进行身份验证的 SPA 提供身份验证。")],-1),f={href:"https://jetstream.laravel.com",target:"_blank",rel:"noopener noreferrer"},v={href:"https://tailwindcss.com",target:"_blank",rel:"noopener noreferrer"},A={href:"https://laravel-livewire.com",target:"_blank",rel:"noopener noreferrer"},b={href:"https://inertiajs.com",target:"_blank",rel:"noopener noreferrer"},L=a("a",{href:"./sanctum"},"Laravel Sanctum",-1),I=r('<p><a name="laravels-api-authentication-services"></a></p><h4 id="laravel-的-api-认证服务" tabindex="-1"><a class="header-anchor" href="#laravel-的-api-认证服务" aria-hidden="true">#</a> Laravel 的 API 认证服务</h4><p>Laravel 提供了两个可选的包来帮助你管理 API 令牌和验证使用 API 令牌发出的请求：<a href="./passport">Passport</a> 和 <a href="./sanctum">Sanctum</a>。请注意，这些库和 Laravel 内置的基于 Cookie 的身份验证库并不是互斥的。这些库主要关注 API 令牌身份验证，而内置的身份验证服务则关注基于 Cookie 的浏览器身份验证。许多应用程序将同时使用 Laravel 内置的基于 Cookie 的身份验证服务和一个 Laravel 的 API 身份验证包。</p><p><strong>Passport</strong></p><p>Passport 是一个 OAuth2 身份验证提供程序，提供各种 OAuth2 「授权类型」，允许你发布各种类型的令牌。总的来说，这是一个强大而复杂的 API 身份验证包。但是，大多数应用程序不需要 OAuth2 规范提供的复杂特性，这可能会让用户和开发人员感到困惑。此外，开发人员一直对如何使用 Passport 等 OAuth2 身份验证提供程序对 SPA 应用程序或移动应用程序进行身份验证感到困惑。</p><p><strong>Sanctum</strong></p><p>为了应对 OAuth2 的复杂性和开发人员的困惑，我们着手构建一个更简单、更精简的身份验证包，旨在处理通过令牌进行的第一方 Web 请求和 API 请求。 <a href="./sanctum">Laravel Sanctum</a> 发布后，这一目标就实现了。对于除 API 外还提供第一方 web UI 的应用程序，或由单页应用程序（SPA）提供支持的应用程序，或是提供移动客户端的应用程序，Sanctum 是首选推荐的身份验证包。</p><p>Laravel Sanctum 是一个混合了 web 和 API 的身份验证包，它让我们管理应用程序的整个身份验证过程成为可能，因为当基于 Sanctum 的应用程序收到请求时，Sanctum 将首先确定请求是否包含引用已验证 session 的 session cookie。Sanctum 通过调用我们前面讨论过的 Laravel 的内置身份验证服务来实现这一点。如果请求没有通过 session cookie 进行身份验证，Sanctum 将检查请求中的 API 令牌。如果存在 API 令牌，则 Sanctum 将使用该令牌对请求进行身份验证。要了解有关此过程的更多信息，请参阅 Sanctum 的 <a href="./sanctum#how-it-works">工作原理</a> 文档。</p>',8),_={href:"https://jetstream.laravel.com",target:"_blank",rel:"noopener noreferrer"},k=r('<p><a name="summary-choosing-your-stack"></a></p><h4 id="汇总-选择你的解决方案" tabindex="-1"><a class="header-anchor" href="#汇总-选择你的解决方案" aria-hidden="true">#</a> 汇总 &amp; 选择你的解决方案</h4><p>总之，如果你的应用程序将使用浏览器访问，并且你正在构建一个单页面的 Laravel 应用程序，那么你的应用程序可以使用 Laravel 的内置身份验证服务。</p><p>接下来，如果你的应用程序提供将由第三方使用的 API ，你可以在 <a href="./passport">Passport</a> 或 <a href="./sanctum">Sanctum</a> 之间进行选择，为你的应用程序提供 API 令牌身份验证。一般来说，尽可能选择 Sanctum，因为它是 API 认证、SPA 认证和移动认证的简单、完整的解决方案，包括对「scopes」或「abilities」的支持。</p><p>如果你正在构建一个将由 Laravel 后端支持的单页面应用程序（SPA），那么应该使用 <a href="./sanctum">Laravel Sanctum</a>。在使用 Sanctum 时，你需要 <a href="#authenticating-users">手动实现自己的后端验证路由</a> 或使用 <a href="./fortify">Laravel Fortify</a> 作为无 header 身份验证后端服务，为注册、密码重置、电子邮件验证等功能提供路由和控制器。</p><p>当应用程序确定必须使用 OAuth2 规范提供的所有特性时，可以选择 Passport。</p><p>而且，如果你想快速入门，我们很高兴推荐 <a href="./starter-kits#laravel-breeze">Laravel Breeze</a> 作为启动新 Laravel 应用程序的快速方法，该应用程序已经使用了我们首选的 Laravel 内置身份验证服务和 Laravel Sanctum 身份验证技术栈。</p><p><a name="authentication-quickstart"></a></p><h2 id="身份验证快速入门" tabindex="-1"><a class="header-anchor" href="#身份验证快速入门" aria-hidden="true">#</a> 身份验证快速入门</h2><blockquote><p><strong>警告</strong><br> 文档的这一部分讨论了通过 <a href="./starter-kits">Laravel 应用入门套件</a> 对用户进行身份验证，其中包括可帮助你快速入门的 UI 脚手架。如果你想直接与 Laravel 的身份验证系统集成，请查看 <a href="#authenticating-users">手动验证用户</a> 上的文档。</p></blockquote><p><a name="install-a-starter-kit"></a></p><h3 id="安装入门套件" tabindex="-1"><a class="header-anchor" href="#安装入门套件" aria-hidden="true">#</a> 安装入门套件</h3><p>首先，你应该 <a href="./starter-kits">安装 Laravel 应用入门套件</a>。我们当前的入门套件 Laravel Breeze 和 Laravel Jetstream 提供了设计精美的起点，可将身份验证纳入你的全新 Laravel 应用程序。</p>',13),w=a("a",{href:"./blade"},"Blade templates",-1),P={href:"https://tailwindcss.com",target:"_blank",rel:"noopener noreferrer"},S={href:"https://inertiajs.com",target:"_blank",rel:"noopener noreferrer"},$={href:"https://jetstream.laravel.com",target:"_blank",rel:"noopener noreferrer"},R={href:"https://laravel-livewire.com",target:"_blank",rel:"noopener noreferrer"},q={href:"https://inertiajs.com",target:"_blank",rel:"noopener noreferrer"},x=a("a",{href:"./sanctum"},"Laravel Sanctum",-1),T=r(`<p><a name="retrieving-the-authenticated-user"></a></p><h3 id="获取已认证的用户信息" tabindex="-1"><a class="header-anchor" href="#获取已认证的用户信息" aria-hidden="true">#</a> 获取已认证的用户信息</h3><p>在安装身份验证入门套件并允许用户注册应用程序并对其进行身份验证之后，你通常需要与当前通过身份验证的用户进行交互。在处理传入请求时，你可以通过 <code>Auth</code> facade 的 <code>user</code> 方法访问通过身份验证的用户：</p><pre><code>use Illuminate\\Support\\Facades\\Auth;

// 获取当前的认证用户信息...
$user = Auth::user();

// 获取当前的认证用户ID...
$id = Auth::id();
</code></pre><p>或者，一旦用户通过身份验证，你就可以通过 <code>Illuminate\\Http\\Request</code> 实例访问通过身份验证的用户。请记住，使用类型提示的类将自动注入到控制器方法中。通过对 <code>Illuminate\\Http\\Request</code> 对象进行类型提示，你可以通过 Request 的 <code>user</code> 方法从应用程序中的任何控制器方法方便地访问通过身份验证的用户：</p><pre><code>&lt;?php

namespace App\\Http\\Controllers;

use Illuminate\\Http\\RedirectResponse;
use Illuminate\\Http\\Request;

class FlightController extends Controller
{
    /**
     * 更新现有航班的航班信息。
     */
    public function update(Request $request): RedirectResponse
    {
        $user = $request-&gt;user();

        // ...

        return redirect(&#39;/flights&#39;);
    }
}
</code></pre><p><a name="determining-if-the-current-user-is-authenticated"></a></p><h4 id="确定当前用户是否已通过身份验证" tabindex="-1"><a class="header-anchor" href="#确定当前用户是否已通过身份验证" aria-hidden="true">#</a> 确定当前用户是否已通过身份验证</h4><p>要确定发出传入 HTTP 请求的用户是否通过身份验证，你可以在 <code>Auth</code> facade 上使用 <code>check</code> 方法。如果用户通过身份验证，此方法将返回 <code>true</code> ：</p><pre><code>use Illuminate\\Support\\Facades\\Auth;

if (Auth::check()) {
    // 该用户已登录...
}
</code></pre><blockquote><p><strong>注意</strong><br> 尽管可以使用 <code>check</code> 方法确定用户是否已通过身份验证，但在允许用户访问某些路由 / 控制器之前，你通常会使用中间件验证用户是否已通过身份验证。要了解更多信息，请查看有关 <a href="./authentication#protecting-routes">路由保护</a> 的文档。</p></blockquote><p><a name="protecting-routes"></a></p><h3 id="路由保护" tabindex="-1"><a class="header-anchor" href="#路由保护" aria-hidden="true">#</a> 路由保护</h3><p><a href="./middleware">路由中间件</a> 可用于仅允许通过身份验证的用户访问给定路由。Laravel 附带了一个 <code>auth</code> 中间件，它引用了 <code>Illuminate\\Auth\\Middleware\\Authenticate</code> 类。由于此中间件已在应用程序的 HTTP 内核中注册，因此你只需将中间件附加到路由定义即可：</p><pre><code>Route::get(&#39;/flights&#39;, function () {
    // 只有经过身份验证的用户才能访问此路由...
})-&gt;middleware(&#39;auth&#39;);
</code></pre><p><a name="redirecting-unauthenticated-users"></a></p><h4 id="给未认证的用户设置重定向" tabindex="-1"><a class="header-anchor" href="#给未认证的用户设置重定向" aria-hidden="true">#</a> 给未认证的用户设置重定向</h4><p>当 <code>auth</code> 中间件检测到未经身份验证的用户时，它将用户重定向到 <code>login</code> <a href="./routing#named-routes">命名路由</a>。你可以通过更新应用程序的 <code>app/Http/Middleware/Authenticate.php</code> 文件中的 <code>redirectTo</code> 方法来修改此行为：</p><pre><code>use Illuminate\\Http\\Request;

/**
 * 获取用户应重定向到的路径。
 */
protected function redirectTo(Request $request): string
{
    return route(&#39;login&#39;);
}
</code></pre><p><a name="specifying-a-guard"></a></p><h4 id="指定看守器" tabindex="-1"><a class="header-anchor" href="#指定看守器" aria-hidden="true">#</a> 指定看守器</h4><p>将 <code>auth</code> 中间件附加到路由时，你还可以指定应该使用哪个「guard」来验证用户。指定的 guard 应与 <code>auth.php</code> 配置文件的 <code>guards</code> 数组中的一个键相对应：</p><pre><code>Route::get(&#39;/flights&#39;, function () {
    // 只有经过身份验证的用户才能访问此路由...
})-&gt;middleware(&#39;auth:admin&#39;);
</code></pre><p><a name="login-throttling"></a></p><h3 id="登录限流" tabindex="-1"><a class="header-anchor" href="#登录限流" aria-hidden="true">#</a> 登录限流</h3><p>如果你使用的是 Laravel Breeze 或 Laravel Jetstream <a href="./starter-kits">入门套件</a>，那么在尝试登录的时候将自动应用速率限制。默认情况下，如果用户在多次尝试后未能提供正确的凭据，他们将在一分钟内无法登录。该限制对与用户的用户名 / 电子邮件地址及其 IP 地址是唯一的。</p><blockquote><p><strong>注意</strong><br> 如果你想对应用程序中的其他路由进行速率限制，请查看 <a href="./routing#rate-limiting">速率限制</a> 文档。</p></blockquote><p><a name="authenticating-users"></a></p><h2 id="手动验证用户" tabindex="-1"><a class="header-anchor" href="#手动验证用户" aria-hidden="true">#</a> 手动验证用户</h2><p>你并非一定要使用 Laravel 的 <a href="./starter-kits">应用入门套件</a> 附带的身份验证脚手架。如果你选择不使用这个脚手架，则需要直接使用 Laravel 身份验证类来管理用户身份验证。别担心，这也很容易！</p>`,30),C=a("code",null,"Auth",-1),B=a("a",{href:"./facades"},"facade",-1),H=a("code",null,"Auth",-1),y=a("code",null,"attempt",-1),F=a("code",null,"attempt",-1),U=a("a",{href:"./session"},"session",-1),E={href:"https://en.wikipedia.org/wiki/Session_fixation",target:"_blank",rel:"noopener noreferrer"},M=r(`<pre><code>&lt;?php

namespace App\\Http\\Controllers;

use Illuminate\\Http\\Request;
use Illuminate\\Http\\RedirectResponse;
use Illuminate\\Support\\Facades\\Auth;

class LoginController extends Controller
{
    /**
     * 处理身份验证尝试。
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
</code></pre><p><code>attempt</code> 方法接受一个键 / 值对数组作为它的第一个参数。数组中的值将用于在数据库表中查找用户。因此，在上面的示例中，将通过 <code>email</code> 列的值检索用户。如果找到用户，则数据库中存储的 hash 密码将与通过数组传递给该方法的 <code>password</code> 值进行比较。你不应该对传入请求的 <code>password</code> 值进行 hash 处理，因为框架会在将该值与数据库中的 hash 密码进行比较之前自动对该值进行 hash 处理。如果两个 hash 密码匹配，将为用户启动一个通过身份验证的 session。</p><p>请记住，Laravel 的身份验证服务将根据身份验证 guard 的「provider」配置，从数据库检索用户。在默认的 <code>config/auth.php</code> 配置文件中，指定了 Eloquent 为用户提供程序，并指示它在检索用户时使用 <code>App\\Models\\User</code> 模型。你可以根据应用程序的需要在配置文件中更改这些值。</p><p>如果身份验证成功，<code>attempt</code> 方法将返回 <code>true</code> 。否则，将返回 <code>false</code>。</p><p>Laravel 的重定向器提供的 <code>intended</code> 方法会将用户重定向到他们在被身份验证中间件拦截之前尝试访问的 URL。如果预期的目的地不可用，可以为该方法提供回退 URI。</p><p><a name="specifying-additional-conditions"></a></p><h4 id="指定附加条件" tabindex="-1"><a class="header-anchor" href="#指定附加条件" aria-hidden="true">#</a> 指定附加条件</h4><p>如果你愿意，除了用户的电子邮件和密码之外，你还可以向身份验证查询中添加额外的查询条件。为了实现这一点，我们可以简单地将查询条件添加到传递给 <code>attempt</code> 方法的数组中。例如，我们可以验证用户是否标记为「active」：</p><pre><code>if (Auth::attempt([&#39;email&#39; =&gt; $email, &#39;password&#39; =&gt; $password, &#39;active&#39; =&gt; 1])) {
    // 认证成功...
}
</code></pre><p>对于复杂的查询条件，你可以在凭证数组中提供闭包。此闭包将与查询实例一起调用，允许你根据应用程序的需要自定义查询：</p><pre><code>use Illuminate\\Database\\Eloquent\\Builder;

if (Auth::attempt([
    &#39;email&#39; =&gt; $email, 
    &#39;password&#39; =&gt; $password, 
    fn (Builder $query) =&gt; $query-&gt;has(&#39;activeSubscription&#39;),
])) {
    // 认证成功...
}
</code></pre><blockquote><p><strong>警告</strong><br> 在这些例子中，<code>email</code> 不是必需的选项，它只是作为一个例子。你应该使用与数据库表中的「用户名」对应的任何列名。</p></blockquote><p><code>attemptWhen</code> 方法接收一个闭包作为其第二个参数，可用于在实际验证用户之前对潜在用户执行更广泛的检查。闭包接收潜在用户并应返回 <code>true</code> 或 <code>false</code> 以指示用户是否可以通过身份验证：</p><pre><code>if (Auth::attemptWhen([
    &#39;email&#39; =&gt; $email,
    &#39;password&#39; =&gt; $password,
], function (User $user) {
    return $user-&gt;isNotBanned();
})) {
    // 认证成功...
}
</code></pre><p><a name="accessing-specific-guard-instances"></a></p><h4 id="访问特定的看守器实例" tabindex="-1"><a class="header-anchor" href="#访问特定的看守器实例" aria-hidden="true">#</a> 访问特定的看守器实例</h4><p>通过 <code>Auth</code> facade 的 <code>guard</code> 方法，你可以指定在对用户进行身份验证时要使用哪个 guard 实例。这允许你使用完全不同的可验证模型或用户表来管理应用程序的不同部分的验证。</p><p>传递给 <code>guard</code> 方法的 guard 名称应该对应于 <code>auth.php</code> 配置文件中 guards 的其中一个：</p><pre><code>if (Auth::guard(&#39;admin&#39;)-&gt;attempt($credentials)) {
    // ...
}
</code></pre><p><a name="remembering-users"></a></p><h3 id="记住用户" tabindex="-1"><a class="header-anchor" href="#记住用户" aria-hidden="true">#</a> 记住用户</h3><p>许多 web 应用程序在其登录表单上提供了「记住我」复选框。如果你希望在应用程序中提供「记住我」功能，你可以将布尔值作为第二个参数传递给 <code>attempt</code> 方法。</p><p>当此值为 <code>true</code> 时，Laravel 将无限期地保持用户身份验证，或者直到用户手动注销。 你的 <code>users</code> 表必须包含字符串 <code>remember_token</code> 列，该列将用于存储「记住我」标记。新的 Laravel 应用程序中包含的 <code>users</code> 表迁移文件已经包含此列：</p><pre><code>use Illuminate\\Support\\Facades\\Auth;

if (Auth::attempt([&#39;email&#39; =&gt; $email, &#39;password&#39; =&gt; $password], $remember)) {
    // 正在为该用户执行记住我操作...
}
</code></pre><p>如果你的应用程序提供「记住我」的功能，你可以使用 <code>viaRemember</code> 方法来确定当前通过身份验证的用户是否使用「记住我」cookie 进行了身份验证：</p><pre><code>use Illuminate\\Support\\Facades\\Auth;

if (Auth::viaRemember()) {
    // ...
}
</code></pre><p><a name="other-authentication-methods"></a></p><h3 id="其他身份验证方法" tabindex="-1"><a class="header-anchor" href="#其他身份验证方法" aria-hidden="true">#</a> 其他身份验证方法</h3><p><a name="authenticate-a-user-instance"></a></p><h4 id="验证用户实例" tabindex="-1"><a class="header-anchor" href="#验证用户实例" aria-hidden="true">#</a> 验证用户实例</h4><p>如果你需要将现有用户实例设置为当前通过身份验证的用户，你可以将该用户实例传递给 <code>Auth</code> facade 的 <code>login</code> 方法。 给定的用户实例必须是 <code>Illuminate\\Contracts\\Auth\\Authenticatable</code> <a href="./contracts">契约</a> 的实现。 Laravel 中包含的 <code>App\\Models\\User</code> 模型已经实现了此接口。当你已经有一个有效的用户实例时（例如用户直接向你的应用程序注册之后），此身份验证方法非常有用：</p><pre><code>use Illuminate\\Support\\Facades\\Auth;

Auth::login($user);
</code></pre><p>你可以将布尔值作为第二个参数传递给 <code>login</code> 方法。此值指示通过身份验证的 session 是否需要「记住我」功能。请记住，这意味着 session 将无限期地进行身份验证，或者直到用户手动注销应用程序为止：</p><pre><code>Auth::login($user, $remember = true);
</code></pre><p>如果需要，你可以在调用 <code>login</code> 方法之前指定身份验证看守器：</p><pre><code>Auth::guard(&#39;admin&#39;)-&gt;login($user);
</code></pre><p><a name="authenticate-a-user-by-id"></a></p><h4 id="通过-id-对用户进行身份验证" tabindex="-1"><a class="header-anchor" href="#通过-id-对用户进行身份验证" aria-hidden="true">#</a> 通过 ID 对用户进行身份验证</h4><p>要使用数据库记录的主键对用户进行身份验证，你可以使用 <code>loginUsingId</code> 方法。此方法接受你要验证的用户的主键：</p><pre><code>Auth::loginUsingId(1);
</code></pre><p>你可以将布尔值作为第二个参数传递给 <code>loginUsingId</code> 方法。此值指示通过身份验证的 session 是否需要「记住我」功能。请记住，这意味着 session 将无限期地进行身份验证，或者直到用户手动注销应用程序为止：</p><pre><code>Auth::loginUsingId(1, $remember = true);
</code></pre><p><a name="authenticate-a-user-once"></a></p><h4 id="只验证一次" tabindex="-1"><a class="header-anchor" href="#只验证一次" aria-hidden="true">#</a> 只验证一次</h4><p>你可以使用 <code>once</code> 方法通过应用程序对单个请求的用户进行身份验证。调用此方法时不会使用 session 或 cookie：</p><pre><code>if (Auth::once($credentials)) {
    // ...
}
</code></pre><p><a name="http-basic-authentication"></a></p><h2 id="http-basic-用户认证" tabindex="-1"><a class="header-anchor" href="#http-basic-用户认证" aria-hidden="true">#</a> HTTP Basic 用户认证</h2>`,48),z={href:"https://en.wikipedia.org/wiki/Basic_access_authentication",target:"_blank",rel:"noopener noreferrer"},O=a("code",null,"auth.basic",-1),D=a("a",{href:"./middleware"},"中间件",-1),J=a("code",null,"auth.basic",-1),V=r(`<pre><code>Route::get(&#39;/profile&#39;, function () {
    // 只有经过身份验证的用户才能访问此路由...
})-&gt;middleware(&#39;auth.basic&#39;);
</code></pre><p>将中间件附加到路由后，当你在浏览器中访问路由时，系统会自动提示你输入凭据。默认情况下 <code>auth.basic</code> 中间件将假定 <code>users</code> 数据库表中的 <code>email</code> 列是用户的「用户名」。</p><p><a name="a-note-on-fastcgi"></a></p><h4 id="注意-fastcgi" tabindex="-1"><a class="header-anchor" href="#注意-fastcgi" aria-hidden="true">#</a> 注意 FastCGI</h4><p>如果你使用的是 PHP FastCGI 和 Apache 来为 Laravel 应用程序提供服务，那么 HTTP Basic 身份验证可能无法正常工作。要纠正这些问题，可以将以下行添加到应用程序的 <code>.htaccess</code> 文件中：</p><div class="language-apache line-numbers-mode" data-ext="apache"><pre class="language-apache"><code>RewriteCond %{HTTP:Authorization} ^(.+)$
RewriteRule .* - [E=HTTP_AUTHORIZATION:%{HTTP:Authorization}]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="stateless-http-basic-authentication"></a></p><h3 id="无状态-http-basic-认证" tabindex="-1"><a class="header-anchor" href="#无状态-http-basic-认证" aria-hidden="true">#</a> 无状态 HTTP Basic 认证</h3><p>你也可以在 session 中不设置用户标识符 cookie 的情况下使用 HTTP Basic 身份验证。如果你选择使用 HTTP 身份验证来验证对应用程序 API 的请求，这将非常有用。为此，<a href="./middleware">定义一个中间件</a> 调用 <code>onceBasic</code> 方法。如果 <code>onceBasic</code> 方法没有返回响应，则请求可能会进一步传递到应用程序中：</p><pre><code>&lt;?php

namespace App\\Http\\Middleware;

use Closure;
use Illuminate\\Http\\Request;
use Illuminate\\Support\\Facades\\Auth;
use Symfony\\Component\\HttpFoundation\\Response;

class AuthenticateOnceWithBasicAuth
{
    /**
     * 处理传入请求。
     *
     * @param  \\Closure(\\Illuminate\\Http\\Request): (\\Symfony\\Component\\HttpFoundation\\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        return Auth::onceBasic() ?: $next($request);
    }

}
</code></pre><p>然后，将中间件附加到路由中：</p><pre><code>Route::get(&#39;/api/user&#39;, function () {
    // 只有经过身份验证的用户才能访问此路由...
})-&gt;middleware(AuthenticateOnceWithBasicAuth::class);
</code></pre><p><a name="logging-out"></a></p><h2 id="退出登录" tabindex="-1"><a class="header-anchor" href="#退出登录" aria-hidden="true">#</a> 退出登录</h2><p>要在应用程序中手动注销用户，可以使用 <code>Auth</code> facade 提供的 <code>logout</code> 方法。这将从用户的 session 中删除身份验证信息，以便后续请求不会得到身份验证。</p><p>除了调用 <code>logout</code> 方法外，建议你将用户的 session 置为过期，并重新生成其 <a href="./csrf">CSRF token</a>。注销用户后，通常会将用户重定向到应用程序的根目录：</p><pre><code>use Illuminate\\Http\\Request;
use Illuminate\\Http\\RedirectResponse;
use Illuminate\\Support\\Facades\\Auth;

/**
 * 将用户退出应用程序。
 */
public function logout(Request $request): RedirectResponse
{
    Auth::logout();

    $request-&gt;session()-&gt;invalidate();

    $request-&gt;session()-&gt;regenerateToken();

    return redirect(&#39;/&#39;);
}
</code></pre><p><a name="invalidating-sessions-on-other-devices"></a></p><h3 id="使其他设备上的-session-失效" tabindex="-1"><a class="header-anchor" href="#使其他设备上的-session-失效" aria-hidden="true">#</a> 使其他设备上的 session 失效</h3><p>Laravel 还提供了这样一种机制，可以使在其他设备上处于活动状态的用户 session 无效和「注销」，而不会使其当前设备上的 session 失效。当用户正在更改或更新其密码，并且你希望在保持当前设备身份验证的同时使其他设备上的 session 无效时，通常会使用此功能。</p><p>在开始之前，你应该确保 <code>Illuminate\\Session\\Middleware\\AuthenticateSession</code> 中间件已经包含在应该接收 session 身份验证的路由中。通常，你应该将此中间件放置在一个路由组定义中，以便它可以应用于大多数应用程序的路由。默认情况下， <code>AuthenticateSession</code> 中间件可以使用 <code>auth.session</code> 路由中间件别名，并附加到一个路由上，这个别名在你的应用程序的 HTTP 内核中定义：</p><pre><code>Route::middleware([&#39;auth&#39;, &#39;auth.session&#39;])-&gt;group(function () {
    Route::get(&#39;/&#39;, function () {
        // ...
    });
});
</code></pre><p>然后，你可以使用 <code>Auth</code> facade 提供的 <code>logoutOtherDevices</code> 方法。此方法要求用户确认其当前密码，你的应用程序应通过输入表单接受该密码：</p><pre><code>use Illuminate\\Support\\Facades\\Auth;

Auth::logoutOtherDevices($currentPassword);
</code></pre><p>当调用 <code>logoutOtherDevices</code> 方法时，用户的其他 session 将完全失效，这意味着他们将从之前验证过的所有看守器中「注销」。</p><p><a name="password-confirmation"></a></p><h2 id="密码确认" tabindex="-1"><a class="header-anchor" href="#密码确认" aria-hidden="true">#</a> 密码确认</h2><p>在构建应用程序时，你可能偶尔会要求用户在执行操作之前或在将用户重定向到应用程序的敏感区域之前确认其密码。Laravel 包含内置的中间件，使这个过程变得轻而易举。实现此功能你需要定义两个路由：一个路由显示请求用户确认其密码的视图，另一个路由确认密码有效并将用户重定向到其预期目的地。</p><blockquote><p><strong>注意</strong><br> 以下文档讨论了如何直接与 Laravel 的密码确认功能集成。然而，如果你想更快地开始使用， <a href="./starter-kits">Laravel 应用入门套件</a> 包括对此功能的支持！</p></blockquote><p><a name="password-confirmation-configuration"></a></p><h3 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h3><p>确认密码后，用户在三个小时内不会被要求再次确认密码。但是，你可以通过更改应用程序 <code>config/auth.php</code> 配置文件中的 <code>password_timeout</code> 配置值来配置重新提示用户输入密码之前的时长。</p><p><a name="password-confirmation-routing"></a></p><h3 id="路由" tabindex="-1"><a class="header-anchor" href="#路由" aria-hidden="true">#</a> 路由</h3><p><a name="the-password-confirmation-form"></a></p><h4 id="密码确认表单" tabindex="-1"><a class="header-anchor" href="#密码确认表单" aria-hidden="true">#</a> 密码确认表单</h4><p>首先，我们将定义一个路由以显示请求用户确认其密码的视图：</p><pre><code>Route::get(&#39;/confirm-password&#39;, function () {
    return view(&#39;auth.confirm-password&#39;);
})-&gt;middleware(&#39;auth&#39;)-&gt;name(&#39;password.confirm&#39;);
</code></pre><p>如你所料，此路由返回的视图应该有一个包含 <code>password</code> 字段的表单。此外，可以随意在视图中包含说明用户正在进入应用程序的受保护区域并且必须确认其密码的文本。</p><p><a name="confirming-the-password"></a></p><h4 id="确认密码" tabindex="-1"><a class="header-anchor" href="#确认密码" aria-hidden="true">#</a> 确认密码</h4><p>接下来，我们将定义一个路由来处理来自「确认密码」视图的表单请求。此路由将负责验证密码并将用户重定向到其预期目的地：</p><pre><code>use Illuminate\\Http\\Request;
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
</code></pre><p>在继续之前，让我们更详细地检查一下这条路由。首先，请求的 <code>password</code> 字段被确定为实际匹配经过身份验证的用户的密码。如果密码有效，我们需要通知 Laravel 的 session 用户已经确认了他们的密码。 <code>passwordConfirmed</code> 方法将在用户的 session 中设置一个时间戳，Laravel 可以使用它来确定用户上次确认密码的时间。最后，我们可以将用户重定向到他们想要的目的地。</p><p><a name="password-confirmation-protecting-routes"></a></p><h3 id="保护路由" tabindex="-1"><a class="header-anchor" href="#保护路由" aria-hidden="true">#</a> 保护路由</h3><p>你应该确保为执行需要最近确认密码的操作的路由被分配到 <code>password.confirm</code> 中间件。此中间件包含在 Laravel 的默认安装中，并且会自动将用户的预期目的地存储在 session 中，以便用户在确认密码后可以重定向到该位置。在 session 中存储用户的预期目的地之后，中间件将用户重定向到 <code>password.confirm</code> 的 <a href="./routing#named-routes">命名路由</a>：</p><pre><code>Route::get(&#39;/settings&#39;, function () {
    // ...
})-&gt;middleware([&#39;password.confirm&#39;]);

Route::post(&#39;/settings&#39;, function () {
    // ...
})-&gt;middleware([&#39;password.confirm&#39;]);
</code></pre><p><a name="adding-custom-guards"></a></p><h2 id="添加自定义的看守器" tabindex="-1"><a class="header-anchor" href="#添加自定义的看守器" aria-hidden="true">#</a> 添加自定义的看守器</h2><p>你可以使用 <code>Auth</code> facade 上的 <code>extend</code> 方法定义你自己的身份验证看守器。你应该在 <a href="./providers">服务提供者</a> 中调用 <code>extend</code> 方法。 由于 Laravel 已经附带了 <code>AuthServiceProvider</code>，因此我们可以将代码放置在该提供者中：</p><pre><code>&lt;?php

namespace App\\Providers;

use App\\Services\\Auth\\JwtGuard;
use Illuminate\\Contracts\\Foundation\\Application;
use Illuminate\\Foundation\\Support\\Providers\\AuthServiceProvider as ServiceProvider;
use Illuminate\\Support\\Facades\\Auth;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * 注册任意应用程序验证 / 授权服务。
     */
    public function boot(): void
    {
        Auth::extend(&#39;jwt&#39;, function (Application $app, string $name, array $config) {
            // 返回 Illuminate\\Contracts\\Auth\\Guard 的实例...

            return new JwtGuard(Auth::createUserProvider($config[&#39;provider&#39;]));
        });
    }
}
</code></pre><p>正如你在上面的示例中所看到的，传递给 <code>extend</code> 方法的回调应该返回 <code>Illuminate\\Contracts\\Auth\\Guard</code> 的实例。此接口包含一些方法，你需要实现这些方法来定义自定义看守器。定义自定义看守器后，你可以在 <code>auth.php</code> 配置文件的 <code>guards</code> 配置中引用该看守器：</p><pre><code>&#39;guards&#39; =&gt; [
    &#39;api&#39; =&gt; [
        &#39;driver&#39; =&gt; &#39;jwt&#39;,
        &#39;provider&#39; =&gt; &#39;users&#39;,
    ],
],
</code></pre><p><a name="closure-request-guards"></a></p><h3 id="闭包请求看守器" tabindex="-1"><a class="header-anchor" href="#闭包请求看守器" aria-hidden="true">#</a> 闭包请求看守器</h3><p>实现基于 HTTP 请求的自定义身份验证系统的最简单方法是使用 <code>Auth::viaRequest</code> 方法。此方法允许你使用单个闭包快速定义身份验证过程。</p><p>首先，请在 <code>AuthServiceProvider</code> 的 <code>boot</code> 方法中调用 <code>Auth::viaRequest</code> 方法。 <code>VIASRequest</code> 方法接受身份验证驱动程序名称作为其第一个参数。此名称可以是描述你的自定义看守器的任何字符串。传递给方法的第二个参数应该是一个闭包，该闭包接收传入的 HTTP 请求并返回用户实例，或者，如果身份验证失败返回 <code>null</code>:</p><pre><code>use App\\Models\\User;
use Illuminate\\Http\\Request;
use Illuminate\\Support\\Facades\\Auth;

/**
 * 注册任意应用程序验证 / 授权服务。
 */
public function boot(): void
{
    Auth::viaRequest(&#39;custom-token&#39;, function (Request $request) {
        return User::where(&#39;token&#39;, $request-&gt;token)-&gt;first();
    });
}
</code></pre><p>定义自定义身份验证驱动程序后，你可以将其配置为 <code>auth.php</code> 配置文件的 <code>guards</code> 配置中的驱动程序：</p><pre><code>&#39;guards&#39; =&gt; [
    &#39;api&#39; =&gt; [
        &#39;driver&#39; =&gt; &#39;custom-token&#39;,
    ],
],
</code></pre><p>最后，你可以在将身份验证中间件分配给路由时引用该看守器：</p><pre><code>Route::middleware(&#39;auth:api&#39;)-&gt;group(function () {
    // ...
}
</code></pre><p><a name="adding-custom-user-providers"></a></p><h2 id="添加自定义的用户提供器" tabindex="-1"><a class="header-anchor" href="#添加自定义的用户提供器" aria-hidden="true">#</a> 添加自定义的用户提供器</h2><p>如果你不使用传统的关系型数据库来存储用户，你将需要使用你自己的身份验证用户提供器来扩展 Laravel。 我们将在 <code>Auth</code> facade 上的 <code>provider</code> 方法来定义自定义用户提供器。用户提供器解析器应返回 <code>Illuminate\\Contracts\\Auth\\UserProvider</code> 的实例：</p><pre><code>&lt;?php

namespace App\\Providers;

use App\\Extensions\\MongoUserProvider;
use Illuminate\\Contracts\\Foundation\\Application;
use Illuminate\\Foundation\\Support\\Providers\\AuthServiceProvider as ServiceProvider;
use Illuminate\\Support\\Facades\\Auth;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * 注册任意应用程序验证 / 授权服务。
     */
    public function boot(): void
    {
        Auth::provider(&#39;mongo&#39;, function (Application $app, array $config) {
            // 返回 illighte\\Contracts\\Auth\\UserProvider 的实例...

            return new MongoUserProvider($app-&gt;make(&#39;mongo.connection&#39;));
        });
    }
}
</code></pre><p>使用 <code>provider</code> 方法注册提供器后，你可以在 <code>auth.php</code> 配置文件中切换到新的用户提供器。 首先，定义一个使用新驱动程序的 <code>provider</code> :</p><pre><code>&#39;providers&#39; =&gt; [
    &#39;users&#39; =&gt; [
        &#39;driver&#39; =&gt; &#39;mongo&#39;,
    ],
],
</code></pre><p>最后，你可以在 <code>guards</code> 配置中引用此提供器：</p><pre><code>&#39;guards&#39; =&gt; [
    &#39;web&#39; =&gt; [
        &#39;driver&#39; =&gt; &#39;session&#39;,
        &#39;provider&#39; =&gt; &#39;users&#39;,
    ],
],
</code></pre><p><a name="the-user-provider-contract"></a></p><h3 id="用户提供器契约" tabindex="-1"><a class="header-anchor" href="#用户提供器契约" aria-hidden="true">#</a> 用户提供器契约</h3><p><code>Illuminate\\Contracts\\Auth\\UserProvider</code> 实现负责从持久性存储系统（如 MySQL、MongoDB 等）中获取 <code>Illuminate\\Contracts\\Auth\\Authenticatable</code> 实现。这两个接口可以保障 Laravel 身份验证机制持续工作，无论用户数据是如何存储的，或者可以使用任意类型的类来表示经过身份验证的用户：</p><p>让我们看一下 <code>Illuminate\\Contracts\\Auth\\UserProvider</code> 契约：</p><pre><code>&lt;?php

namespace Illuminate\\Contracts\\Auth;

interface UserProvider
{
    public function retrieveById($identifier);
    public function retrieveByToken($identifier, $token);
    public function updateRememberToken(Authenticatable $user, $token);
    public function retrieveByCredentials(array $credentials);
    public function validateCredentials(Authenticatable $user, array $credentials);
}
</code></pre><p><code>retrieveById</code> 函数通常接收表示用户的主键，例如 MySQL 数据库中的自动递增 ID。方法应检索并返回与 ID 匹配的 <code>Authenticatable</code> 实现。</p><p><code>retrieveByToken</code> 函数通过用户唯一的 <code>$identifier</code> 和 「记住我」的 <code>$token</code> 检索用户，通常存储在数据库列中，如 <code>remember_token</code> 。与前面的方法一样，此方法应返回具有匹配令牌值的 <code>Authenticatable</code> 实现。</p><p><code>updateMemberToken</code> 方法使用新的 <code>$token</code> 更新 <code>$user</code> 实例的 <code>remember_token</code>。在成功的「记住我」身份验证尝试或用户注销时，会将新令牌分配给用户。</p><p>当尝试对应用程序进行身份验证时， <code>retrieveByCredentials</code> 方法接收传递给 <code>Auth::attempt</code> 方法的凭据数组。然后，该方法应该「查询」底层的持久性存储以查找与这些凭据匹配的用户。通常，此方法将运行带有「where」条件的查询，以搜索「username」与 <code>$credentials[&#39;username&#39;]</code> 的值匹配的用户记录。该方法应返回 <code>Authenticatable</code> 的实现。 <strong>此方法不应尝试执行任何密码验证或身份验证。</strong></p><p><code>validateCredentials</code> 方法应将给定的 <code>$user</code> 与 <code>$credentials</code> 进行比较，以对用户进行身份验证。例如，此方法通常会使用 <code>Hash::check</code> 方法将 <code>$user-&gt;getAuthPassword()</code> 的值与 <code>$credentials[&#39;password&#39;]</code> 的值进行比较。此方法应返回 <code>true</code> 或 <code>false</code>，指示密码是否有效。</p><p><a name="the-authenticatable-contract"></a></p><h3 id="用户认证契约" tabindex="-1"><a class="header-anchor" href="#用户认证契约" aria-hidden="true">#</a> 用户认证契约</h3><p>现在我们已经探索了 <code>UserProvider</code> 上的每个方法，现在让我们看看 <code>Authenticatable</code> 契约。请记住，<code>UserProvider</code> 应该从 <code>retrieveById</code>、<code>retrieveByToken</code> 和 <code>retrieveByCredentials</code> 方法返回此接口的实现：</p><pre><code>&lt;?php

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
</code></pre><p>这个接口很简单。<code>getAuthIdentifierName</code> 方法应返回用户的「主键」字段的名称， <code>getAuthIdentifier</code> 方法应返回用户的「主键」。当使用 MySQL 后端时，这可能是分配给用户记录的自动递增主键。<code>getAuthPassword</code> 方法应返回用户的 hash 密码。</p><p>此接口允许身份验证系统与任何「用户」类一起工作，而不管你使用的是哪个 ORM 或存储抽象层。默认情况下，Laravel 在实现此接口的 <code>app/Models</code> 目录中包含一个 <code>App\\Models\\User</code> 类。</p><p><a name="events"></a></p><h2 id="事件" tabindex="-1"><a class="header-anchor" href="#事件" aria-hidden="true">#</a> 事件</h2><p>在身份验证过程中，Laravel 调度各种 <a href="./events">事件</a> 。你可以在 <code>EventServiceProvider</code> 中将监听器附加到这些事件上：</p><pre><code>/**
 * 应用事件监听映射
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
</code></pre>`,91);function j(N,W){const t=i("ExternalLinkIcon");return s(),d("div",null,[p,a("p",null,[u,e(" 是 Laravel 所有身份验证功能的简单、最小实现，包括登录、注册、密码重置、电子邮件验证和密码确认。 Laravel Breeze 的视图层由简单的 "),l,e(" 组成，样式为 "),a("a",h,[e("Tailwind CSS"),n(t)]),e("。要开始使用，请查看 Laravel 的 "),m,e(" 文档。")]),g,a("p",null,[a("em",null,[a("a",f,[e("Laravel Jetstream"),n(t)])]),e(" 是一个强大的应用入门套件，它使用 "),a("a",v,[e("Tailwind CSS"),n(t)]),e("，"),a("a",A,[e("Livewire"),n(t)]),e(" 和 / 或 "),a("a",b,[e("Inertia"),n(t)]),e(" 提供美观的现代 UI，同时集成和扩展了 Laravel Fortify 的认证服务。Laravel Jetstream 提供了双因素身份验证、团队支持、浏览器 session 管理、个人资料管理等功能，并内置了 "),L,e(" 的集成以支持 API 令牌身份验证。接下来我们将讨论 Laravel 的 API 身份验证产品。")]),I,a("p",null,[e("Laravel Sanctum 是我们选择与 "),a("a",_,[e("Laravel Jetstream"),n(t)]),e(" 应用程序入门套件一起使用的 API 包，因为我们认为它最适合大多数 web 应用程序的身份验证需求。")]),k,a("p",null,[e("Laravel Breeze 是 Laravel 所有身份验证功能的最简单的实现，包括登录、注册、密码重置、电子邮件验证和密码确认。 Laravel Breeze 的视图层由简单的 "),w,e(" 和 "),a("a",P,[e("Tailwind CSS"),n(t)]),e(" 组成。Breeze 还使用 Vue 或 React 提供了基于 "),a("a",S,[e("Inertia"),n(t)]),e(" 的脚手架选项。")]),a("p",null,[a("a",$,[e("Laravel Jetstream"),n(t)]),e(" 是一个更强大的应用入门套件，它支持使用 "),a("a",R,[e("Livewire"),n(t)]),e(" 或 "),a("a",q,[e("Inertia and Vue"),n(t)]),e(" 来构建你的应用程序。 此外，Jetstream 还提供可选的双因素身份验证支持、团队、配置文件管理、浏览器 session 管理、通过 "),x,e(" 的 API 支持、帐户删除等。")]),T,a("p",null,[e("我们将通过 "),C,e(),B,e(" 访问 Laravel 的身份验证服务，因此我们需要确保在类的顶部导入 "),H,e(" facade 。接下来，让我们看看 "),y,e(" 方法。 "),F,e(" 方法通常用于处理来自应用程序「登录」表单的身份验证尝试。如果身份验证成功，你应该重新生成用户的 "),U,e(" 以防止 "),a("a",E,[e("session fixation"),n(t)]),e(":")]),M,a("p",null,[a("a",z,[e("HTTP Basic 用户认证"),n(t)]),e(" 提供了一种无需设置专用「登录」页面即可对应用程序用户进行身份验证的快速方法。首先，将 "),O,e(),D,e(" 附加到路由。 "),J,e(" 中间件包含在 Laravel 框架中，因此你不需要定义它：")]),V])}const Z=o(c,[["render",j],["__file","authentication.html.vue"]]);export{Z as default};
