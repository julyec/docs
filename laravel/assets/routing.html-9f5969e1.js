import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as p,c as i,b as n,d as e,e as s,a as t}from"./app-06635a3b.js";const c={},d=t(`<h1 id="路由" tabindex="-1"><a class="header-anchor" href="#路由" aria-hidden="true">#</a> 路由</h1><ul><li><a href="#basic-routing">基本路由</a><ul><li><a href="#redirect-routes">路由重定向</a></li><li><a href="#view-routes">路由视图</a></li><li><a href="#the-route-list">route:list 命令</a></li></ul></li><li><a href="#route-parameters">路由参数</a><ul><li><a href="#required-parameters">必选参数</a></li><li><a href="#parameters-optional-parameters">可选参数</a></li><li><a href="#parameters-regular-expression-constraints">正则约束</a></li></ul></li><li><a href="#named-routes">路由命名</a></li><li><a href="#route-groups">路由分组</a><ul><li><a href="#route-group-middleware">中间件</a></li><li><a href="#route-group-controllers">Controllers</a></li><li><a href="#route-group-subdomain-routing">子域名路由</a></li><li><a href="#route-group-prefixes">路由前缀</a></li><li><a href="#route-group-name-prefixes">路由前缀命名</a></li></ul></li><li><a href="#route-model-binding">路由模型绑定</a><ul><li><a href="#implicit-binding">隐式绑定</a></li><li><a href="#implicit-enum-binding">隐式枚举绑定</a></li><li><a href="#explicit-binding">显式绑定</a></li></ul></li><li><a href="#fallback-routes">回退路由</a></li><li><a href="#rate-limiting">限流</a><ul><li><a href="#defining-rate-limiters">定义限流器</a></li><li><a href="#attaching-rate-limiters-to-routes">独立访客和认证用户的限流</a></li></ul></li><li><a href="#form-method-spoofing">伪造表单方法</a></li><li><a href="#accessing-the-current-route">访问当前路由</a></li><li><a href="#cors">跨源资源共享 (CORS)</a></li><li><a href="#route-caching">路由缓存</a></li></ul><p><a name="basic-routing"></a></p><h2 id="基本路由" tabindex="-1"><a class="header-anchor" href="#基本路由" aria-hidden="true">#</a> 基本路由</h2><p>最基本的 Laravel 路由接受一个 URI 和一个闭包，提供了一个简单优雅的方法来定义路由和行为，而不需要复杂的路由配置文件：</p><pre><code>use Illuminate\\Support\\Facades\\Route;

Route::get(&#39;/greeting&#39;, function () {
    return &#39;Hello World&#39;;
});
</code></pre><p><a name="the-default-route-files"></a></p><h4 id="默认路由文件" tabindex="-1"><a class="header-anchor" href="#默认路由文件" aria-hidden="true">#</a> 默认路由文件</h4><p>所有 Laravel 路由都定义在你的路由文件中，它位于 <code>routes</code> 目录。这些文件会被你的应用程序中的 <code>App\\Providers\\RouteServiceProvider</code> 自动加载。<code>routes/web.php</code> 文件用于定义 web 界面的路由。这些路由被分配给 <code>web</code> 中间件组，它提供了 会话状态和 CSRF 保护等功能。定义在 <code>routes/api.php</code> 中的路由都是无状态的，并且被分配了 <code>api</code> 中间件组。</p><p>对于大多数应用程序，都是以在 <code>routes/web.php</code> 文件定义路由开始的。可以通过在浏览器中输入定义的路由 URL 来访问 <code>routes/web.php</code> 中定义的路由。例如，你可以在浏览器中输入 <code>http://example.com/user</code> 来访问以下路由：</p><pre><code>use App\\Http\\Controllers\\UserController;

Route::get(&#39;/user&#39;, [UserController::class, &#39;index&#39;]);
</code></pre><p>定义在 <code>routes/api.php</code> 文件中的路由是被 <code>RouteServiceProvider</code> 嵌套在一个路由组内。 在这个路由组内，将自动应用 <code>/api</code> URI 前缀，所以你无需手动将其应用于文件中的每个路由。你可以通过修改 <code>RouteServiceProvider</code> 类来修改前缀和其他路由组选项。</p><p><a name="available-router-methods"></a></p><h4 id="可用的路由方法" tabindex="-1"><a class="header-anchor" href="#可用的路由方法" aria-hidden="true">#</a> 可用的路由方法</h4><p>路由器允许你注册能响应任何 HTTP 请求的路由</p><pre><code>Route::get($uri, $callback);
Route::post($uri, $callback);
Route::put($uri, $callback);
Route::patch($uri, $callback);
Route::delete($uri, $callback);
Route::options($uri, $callback);
</code></pre><p>有的时候你可能需要注册一个可响应多个 HTTP 请求的路由，这时你可以使用 <code>match</code> 方法，也可以使用 <code>any</code> 方法注册一个实现响应所有 HTTP 请求的路由：</p><pre><code>Route::match([&#39;get&#39;, &#39;post&#39;], &#39;/&#39;, function () {
    // ...
});

Route::any(&#39;/&#39;, function () {
    // ...
});
</code></pre><blockquote><p><strong>技巧</strong> 当定义多个相同路由时，使用 <code>get</code>， <code>post</code>， <code>put</code>， <code>patch</code>， <code>delete</code>， 和 <code>options</code> 方法的路由应该在使用 <code>any</code>， <code>match</code>， 和 <code>redirect</code> 方法的路由之前定义，这样可以确保请求与正确的路由匹配。</p></blockquote><p><a name="dependency-injection"></a></p><h4 id="依赖注入" tabindex="-1"><a class="header-anchor" href="#依赖注入" aria-hidden="true">#</a> 依赖注入</h4><p>你可以在路由的回调方法中，以形参的方式声明路由所需要的任何依赖项。这些依赖会被 Laravel 的 <a href="./container">容器</a> 自动解析并注入。 例如，你可以在闭包中声明 <code>Illuminate\\Http\\Request</code> 类， 让当前的 HTTP 请求自动注入依赖到你的路由回调中：</p><pre><code>use Illuminate\\Http\\Request;

Route::get(&#39;/users&#39;, function (Request $request) {
    // ...
});
</code></pre><p><a name="csrf-protection"></a></p><h4 id="csrf-保护" tabindex="-1"><a class="header-anchor" href="#csrf-保护" aria-hidden="true">#</a> CSRF 保护</h4><p>请记住，任何指向<code>POST</code>、<code>PUT</code>、<code>PATCH</code> 或 <code>DELETE</code> 路由(在 <code>web</code> 路由文件中定义)的 HTML 表单都应该包含 CSRF 令牌字，否则请求会被拒绝。更多 CSRF 保护的相关信息请阅读<a href="./csrf">CSRF 文档</a>：</p><pre><code>&lt;form method=&quot;POST&quot; action=&quot;/profile&quot;&gt;
    @csrf
    ...
&lt;/form&gt;
</code></pre><p><a name="redirect-routes"></a></p><h3 id="重定向路由" tabindex="-1"><a class="header-anchor" href="#重定向路由" aria-hidden="true">#</a> 重定向路由</h3><p>如果要定义一个重定向到另一个 URI 的路由，可以使用 <code>Route::redirect</code> 方法。这个方法可以快速的实现重定向，而不再需要去定义完整的路由或者控制器：</p><pre><code>Route::redirect(&#39;/here&#39;, &#39;/there&#39;);
</code></pre><p>默认情况下，<code>Route::redirect</code> 返回 <code>302</code> 状态码。你可以使用可选的第三个参数自定义状态码：</p><pre><code>Route::redirect(&#39;/here&#39;, &#39;/there&#39;, 301);
</code></pre><p>或者，你也可以使用 <code>Route::permanentRedirect</code> 方法返回 <code>301</code>状态码：</p><pre><code>Route::permanentRedirect(&#39;/here&#39;, &#39;/there&#39;);
</code></pre><blockquote><p><strong>警告</strong><br> 在重定向路由中使用路由参数时，以下参数由 Laravel 保留，不能使用：<code>destination</code> 和 <code>status</code>。</p></blockquote><p><a name="view-routes"></a></p><h3 id="视图路由" tabindex="-1"><a class="header-anchor" href="#视图路由" aria-hidden="true">#</a> 视图路由</h3><p>如果你的路由只需返回一个<a href="./views">视图</a>，你可以使用 <code>Route::view</code> 方法。就像 <code>redirect</code> 方法，该方法提供了一个让你不必定义完整路由或控制器的便捷操作。这个<code>view</code>方法的第一个参数是URI，第二个参数为视图名称。此外，你也可以在可选的第三个参数中传入数组，将数组的数据传递给视图：</p><pre><code>Route::view(&#39;/welcome&#39;, &#39;welcome&#39;);

Route::view(&#39;/welcome&#39;, &#39;welcome&#39;, [&#39;name&#39; =&gt; &#39;Taylor&#39;]);
</code></pre><blockquote><p><strong>警告</strong><br> 在视图路由中使用参数时，下列参数由 Laravel 保留，不能使用：<code>view</code>、<code>data</code>, <code>status</code> 及 <code>headers</code>。</p></blockquote><p><a name="the-route-list"></a></p><h3 id="route-list-命令" tabindex="-1"><a class="header-anchor" href="#route-list-命令" aria-hidden="true">#</a> route:list 命令</h3><p>使用 <code>route:list</code> Artisan命令可以轻松提供应用程序定义的所有路线的概述：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan route:list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>正常情况下，<code>route:list</code>不会显示分配给路由的中间件信息；但是你可以通过在命令中添加 <code>-v</code> 选项 来显示路由中的中间件信息：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan route:list <span class="token parameter variable">-v</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>你也可以通过 <code>--path</code> 来显示指定的 URL 开头的路由：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan route:list <span class="token parameter variable">--path</span><span class="token operator">=</span>api
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>此外，在执行 <code>route:list</code> 命令时，可以通过提供 <code>--except vendor</code> 选项来隐藏由第三方包定义的任何路由：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan route:list --except-vendor
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>同理，也可以通过在执行 <code>route:list</code> 命令时提供 <code>--only vendor</code> 选项来显示由第三方包定义的路由：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan route:list --only-vendor
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="route-parameters"></a></p><h2 id="路由参数" tabindex="-1"><a class="header-anchor" href="#路由参数" aria-hidden="true">#</a> 路由参数</h2><p><a name="required-parameters"></a></p><h3 id="必需参数" tabindex="-1"><a class="header-anchor" href="#必需参数" aria-hidden="true">#</a> 必需参数</h3><p>有时你将需要捕获路由内的 URI 段。例如，你可能需要从 URL 中捕获用户的 ID。你可以通过定义路由参数来做到这一点：</p><pre><code>Route::get(&#39;/user/{id}&#39;, function (string $id) {
    return &#39;User &#39;.$id;
});
</code></pre><p>也可以根据你的需要在路由中定义多个参数：</p><pre><code>Route::get(&#39;/posts/{post}/comments/{comment}&#39;, function (string $postId, string $commentId) {
    // ...
});
</code></pre><p>路由的参数通常都会被放在 <code>{}</code> ，并且参数名只能为字母。下划线 (<code>_</code>) 也可以用于路由参数名中。路由参数会按路由定义的顺序依次注入到路由回调或者控制器中，而不受回调或者控制器的参数名称的影响。</p><p><a name="parameters-and-dependency-injection"></a></p><h4 id="必填参数" tabindex="-1"><a class="header-anchor" href="#必填参数" aria-hidden="true">#</a> 必填参数</h4><p>如果你的路由具有依赖关系，而你希望 Laravel 服务容器自动注入到路由的回调中，则应在依赖关系之后列出路由参数：</p><pre><code>use Illuminate\\Http\\Request;

Route::get(&#39;/user/{id}&#39;, function (Request $request, string $id) {
    return &#39;User &#39;.$id;
});
</code></pre><p><a name="parameters-optional-parameters"></a></p><h3 id="可选参数" tabindex="-1"><a class="header-anchor" href="#可选参数" aria-hidden="true">#</a> 可选参数</h3><p>有时，你可能需要指定一个路由参数，但你希望这个参数是可选的。你可以在参数后面加上 <code>?</code> 标记来实现，但前提是要确保路由的相应变量有默认值：</p><pre><code>Route::get(&#39;/user/{name?}&#39;, function (string $name = null) {
    return $name;
});

Route::get(&#39;/user/{name?}&#39;, function (string $name = &#39;John&#39;) {
    return $name;
});
</code></pre><p><a name="parameters-regular-expression-constraints"></a></p><h3 id="正则表达式约束" tabindex="-1"><a class="header-anchor" href="#正则表达式约束" aria-hidden="true">#</a> 正则表达式约束</h3><p>你可以使用路由实例上的 <code>where</code> 方法来限制路由参数的格式。 <code>where</code> 方法接受参数的名称和定义如何约束参数的正则表达式：</p><pre><code>Route::get(&#39;/user/{name}&#39;, function (string $name) {
    // ...
})-&gt;where(&#39;name&#39;, &#39;[A-Za-z]+&#39;);

Route::get(&#39;/user/{id}&#39;, function (string $id) {
    // ...
})-&gt;where(&#39;id&#39;, &#39;[0-9]+&#39;);

Route::get(&#39;/user/{id}/{name}&#39;, function (string $id, string $name) {
    // ...
})-&gt;where([&#39;id&#39; =&gt; &#39;[0-9]+&#39;, &#39;name&#39; =&gt; &#39;[a-z]+&#39;]);
</code></pre><p>为方便起见，一些常用的正则表达式模式具有帮助方法，可让你快速将模式约束添加到路由：</p><pre><code>Route::get(&#39;/user/{id}/{name}&#39;, function (string $id, string $name) {
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
</code></pre><p>如果传入请求与路由模式约束不匹配，将返回 404 HTTP 响应。</p><p><a name="parameters-global-constraints"></a></p><h4 id="全局约束" tabindex="-1"><a class="header-anchor" href="#全局约束" aria-hidden="true">#</a> 全局约束</h4><p>如果你希望路由参数始终受给定正则表达式的约束，你可以使用 <code>pattern</code> 方法。 你应该在 <code>App\\Providers\\RouteServiceProvider</code> 类的 <code>boot</code> 方法中定义这些模式：</p><pre><code>/**
 * 定义路由模型绑定、模式筛选器等。
 */
public function boot(): void
{
    Route::pattern(&#39;id&#39;, &#39;[0-9]+&#39;);
}
</code></pre><p>一旦定义了模式，它就会自动应用到使用该参数名称的所有路由：</p><pre><code>Route::get(&#39;/user/{id}&#39;, function (string $id) {
    // 仅当 {id} 是数字时执行。。。
});
</code></pre><p><a name="parameters-encoded-forward-slashes"></a></p><h4 id="编码正斜杠" tabindex="-1"><a class="header-anchor" href="#编码正斜杠" aria-hidden="true">#</a> 编码正斜杠</h4><p>Laravel 路由组件允许除 <code>/</code> 之外的所有字符出现在路由参数值中。 你必须使用 <code>where</code> 条件正则表达式明确允许 <code>/</code> 成为占位符的一部分：</p><pre><code>Route::get(&#39;/search/{search}&#39;, function (string $search) {
    return $search;
})-&gt;where(&#39;search&#39;, &#39;.*&#39;);
</code></pre><blockquote><p>注意：仅在最后一个路由段中支持编码的正斜杠。</p></blockquote><p><a name="named-routes"></a></p><h2 id="命名路由" tabindex="-1"><a class="header-anchor" href="#命名路由" aria-hidden="true">#</a> 命名路由</h2><p>命名路由允许为特定路由方便地生成 URL 或重定向。通过将 <code>name</code> 方法链接到路由定义上，可以指定路由的名称：</p><pre><code>Route::get(&#39;/user/profile&#39;, function () {
    // ...
})-&gt;name(&#39;profile&#39;);
</code></pre><p>你还可以为控制器操作指定路由名称：</p><pre><code>Route::get(
    &#39;/user/profile&#39;,
    [UserProfileController::class, &#39;show&#39;]
)-&gt;name(&#39;profile&#39;);
</code></pre><blockquote><p>注意：路由名称应始终是唯一的。</p></blockquote><p><a name="generating-urls-to-named-routes"></a></p><h4 id="生成命名路由的-url" tabindex="-1"><a class="header-anchor" href="#生成命名路由的-url" aria-hidden="true">#</a> 生成命名路由的 URL</h4><p>一旦你为给定的路由分配了一个名字，你可以在通过 Laravel 的 <code>route</code> 和 <code>redirect</code> 辅助函数生成 URL 或重定向时使用该路由的名称：</p><pre><code>// 生成URL。。。
$url = route(&#39;profile&#39;);

// 生成重定向。。。
return redirect()-&gt;route(&#39;profile&#39;);

return to_route(&#39;profile&#39;);
</code></pre><p>如果命名路由定义了参数，你可以将参数作为第二个参数传递给 <code>route</code> 函数。 给定的参数将自动插入到生成的 URL 的正确位置：</p><pre><code>Route::get(&#39;/user/{id}/profile&#39;, function (string $id) {
    // ...
})-&gt;name(&#39;profile&#39;);

$url = route(&#39;profile&#39;, [&#39;id&#39; =&gt; 1]);
</code></pre><p>如果你在数组中传递其他参数，这些键 / 值对将自动添加到生成的 URL 的查询字符串中：</p><pre><code>Route::get(&#39;/user/{id}/profile&#39;, function (string $id) {
    // ...
})-&gt;name(&#39;profile&#39;);

$url = route(&#39;profile&#39;, [&#39;id&#39; =&gt; 1, &#39;photos&#39; =&gt; &#39;yes&#39;]);

// /user/1/profile?photos=yes
</code></pre><blockquote><p>技巧：有时，你可能希望为 URL 参数指定请求范围的默认值，例如当前语言环境。 为此，你可以使用 <a href="./urlsmd/14854#default-values"><code>URL::defaults</code> 方法</a>.</p></blockquote><p><a name="inspecting-the-current-route"></a></p><h4 id="检查当前路由" tabindex="-1"><a class="header-anchor" href="#检查当前路由" aria-hidden="true">#</a> 检查当前路由</h4><p>如果你想确定当前请求是否路由到给定的命名路由，你可以在 Route 实例上使用 <code>named</code> 方法。 例如，你可以从路由中间件检查当前路由名称：</p><pre><code>/**
 * 处理传入请求。
  * @param  \\Illuminate\\Http\\Request  $request
  * @param  \\Closure  $next
  * @return mixed
 */
public function handle(Request $request, Closure $next): Response
{
    if ($request-&gt;route()-&gt;named(&#39;profile&#39;)) {
        // ...
    }

    return $next($request);
}
</code></pre><p><a name="route-groups"></a></p><h2 id="路由组" tabindex="-1"><a class="header-anchor" href="#路由组" aria-hidden="true">#</a> 路由组</h2><p>路由组允许你共享路由属性，例如中间件，而无需在每个单独的路由上定义这些属性。</p><p>嵌套组尝试智能地将属性与其父组 &quot;合并&quot;。中间件和 <code>where</code> 条件合并，同时附加名称和前缀。 URI 前缀中的命名空间分隔符和斜杠会在适当的地方自动添加。</p><p><a name="route-group-middleware"></a></p><h3 id="路由中间件" tabindex="-1"><a class="header-anchor" href="#路由中间件" aria-hidden="true">#</a> 路由中间件</h3><p>要将 <a href="./middleware">中间件</a> 分配给组内的所有路由，你可以在定义组之前使用 <code>middleware</code> 方法。 中间件按照它们在数组中列出的顺序执行：</p><pre><code>Route::middleware([&#39;first&#39;, &#39;second&#39;])-&gt;group(function () {
    Route::get(&#39;/&#39;, function () {
        // 使用第一个和第二个中间件。。。
    });

    Route::get(&#39;/user/profile&#39;, function () {
        // 使用第一个和第二个中间件。。。
    });
});
</code></pre><p><a name="route-group-controllers"></a></p><h3 id="控制器" tabindex="-1"><a class="header-anchor" href="#控制器" aria-hidden="true">#</a> 控制器</h3><p>如果一组路由都使用相同的 <a href="./controllers">控制器</a>, 你可以使用 <code>controller</code> 方法为组内的所有路由定义公共控制器。然后，在定义路由时，你只需要提供它们调用的控制器方法：</p><pre><code>use App\\Http\\Controllers\\OrderController;

Route::controller(OrderController::class)-&gt;group(function () {
    Route::get(&#39;/orders/{id}&#39;, &#39;show&#39;);
    Route::post(&#39;/orders&#39;, &#39;store&#39;);
});
</code></pre><p><a name="route-group-subdomain-routing"></a></p><h3 id="子域路由" tabindex="-1"><a class="header-anchor" href="#子域路由" aria-hidden="true">#</a> 子域路由</h3><p>路由组也可以用来处理子域路由。子域可以像路由 uri 一样被分配路由参数，允许你捕获子域的一部分以便在路由或控制器中使用。子域可以在定义组之前调用 <code>domain</code> 方法来指定:</p><pre><code>Route::domain(&#39;{account}.example.com&#39;)-&gt;group(function () {
    Route::get(&#39;user/{id}&#39;, function (string $account, string $id) {
        // ...
    });
});
</code></pre><blockquote><p>注意：为了确保子域路由是可以访问的，你应该在注册根域路由之前注册子域路由。这将防止根域路由覆盖具有相同 URI 路径的子域路由。</p></blockquote><p><a name="route-group-prefixes"></a></p><h3 id="路由前缀" tabindex="-1"><a class="header-anchor" href="#路由前缀" aria-hidden="true">#</a> 路由前缀</h3><p><code>prefix</code> 方法可以用给定的 URI 为组中的每个路由做前缀。例如，你可能想要在组内的所有路由 uri 前面加上 <code>admin</code> 前缀：</p><pre><code>Route::prefix(&#39;admin&#39;)-&gt;group(function () {
    Route::get(&#39;/users&#39;, function () {
        // 对应 &quot;/admin/users&quot; 的 URL
    });
});
</code></pre><p><a name="route-group-name-prefixes"></a></p><h3 id="路由名称前缀" tabindex="-1"><a class="header-anchor" href="#路由名称前缀" aria-hidden="true">#</a> 路由名称前缀</h3><p><code>name</code> 方法可以用给定字符串作为组中的每个路由名的前缀。例如，你可能想要用 <code>admin</code> 作为所有分组路由的前缀。因为给定字符串的前缀与指定的路由名完全一致，所以我们一定要提供末尾 <code>.</code> 字符在前缀中：</p><pre><code>Route::name(&#39;admin.&#39;)-&gt;group(function () {
    Route::get(&#39;/users&#39;, function () {
        // 被分配的路由名为：&quot;admin.users&quot;
    })-&gt;name(&#39;users&#39;);
});
</code></pre><p><a name="route-model-binding"></a></p><h2 id="路由模型绑定" tabindex="-1"><a class="header-anchor" href="#路由模型绑定" aria-hidden="true">#</a> 路由模型绑定</h2><p>将模型 ID 注入到路由或控制器操作时，你通常会查询数据库以检索与该 ID 对应的模型。Laravel 路由模型绑定提供了一种方便的方法来自动将模型实例直接注入到你的路由中。例如，你可以注入与给定 ID 匹配的整个 <code>User</code> 模型实例，而不是注入用户的 ID。</p><p><a name="implicit-binding"></a></p><h3 id="隐式绑定" tabindex="-1"><a class="header-anchor" href="#隐式绑定" aria-hidden="true">#</a> 隐式绑定</h3><p>Laravel 自动解析定义在路由或控制器操作中的 Eloquent 模型，其类型提示的变量名称与路由段名称匹配。例如：</p><pre><code>use App\\Models\\User;

Route::get(&#39;/users/{user}&#39;, function (User $user) {
    return $user-&gt;email;
});
</code></pre><p>由于 <code>$user</code> 变量被类型提示为 <code>App\\Models\\User</code> Eloquent 模型，并且变量名称与 <code>{user}</code> URI 段匹配，Laravel 将自动注入 ID 匹配相应的模型实例 来自请求 URI 的值。如果在数据库中没有找到匹配的模型实例，将自动生成 404 HTTP 响应。</p><p>当然，使用控制器方法时也可以使用隐式绑定。同样，请注意 <code>{user}</code> URI 段与控制器中的 <code>$user</code> 变量匹配，该变量包含 <code>App\\Models\\User</code> 类型提示：</p><pre><code>use App\\Http\\Controllers\\UserController;
use App\\Models\\User;

// 路由定义。。。
Route::get(&#39;/users/{user}&#39;, [UserController::class, &#39;show&#39;]);

// 定义控制器方法。。。
public function show(User $user)
{
    return view(&#39;user.profile&#39;, [&#39;user&#39; =&gt; $user]);
}
</code></pre><p><a name="implicit-soft-deleted-models"></a></p><h4 id="软删除模型" tabindex="-1"><a class="header-anchor" href="#软删除模型" aria-hidden="true">#</a> 软删除模型</h4><p>通常，隐式模型绑定不会检索已 <a href="./eloquent#soft-deleting">软删除</a> 的模型。但是，你可以通过将 <code>withTrashed</code> 方法链接到你的路由定义来指示隐式绑定来检索这些模型：</p><pre><code>use App\\Models\\User;

Route::get(&#39;/users/{user}&#39;, function (User $user) {
    return $user-&gt;email;
})-&gt;withTrashed();
</code></pre><p><a name="customizing-the-key"></a><a name="customizing-the-default-key-name"></a></p><h4 id="自定义密钥" tabindex="-1"><a class="header-anchor" href="#自定义密钥" aria-hidden="true">#</a> 自定义密钥</h4><p>有时你可能希望使用 <code>id</code> 外的列来解析 Eloquent 模型。为此，你可以在路由参数定义中指定列：</p><pre><code>use App\\Models\\Post;

Route::get(&#39;/posts/{post:slug}&#39;, function (Post $post) {
    return $post;
});
</code></pre><p>如果你希望模型绑定在检索给定模型类时始终使用 <code>id</code> 以外的数据库列，则可以覆盖 Eloquent 模型上的 <code>getRouteKeyName</code> 方法：</p><pre><code>/**
 * 获取模型的路线密钥。
 */
public function getRouteKeyName(): string
{
    return &#39;slug&#39;;
}
</code></pre><p><a name="implicit-model-binding-scoping"></a></p><h4 id="自定义键和范围" tabindex="-1"><a class="header-anchor" href="#自定义键和范围" aria-hidden="true">#</a> 自定义键和范围</h4><p>当在单个路由定义中隐式绑定多个 Eloquent 模型时，你可能希望限定第二个 Eloquent 模型的范围，使其必须是前一个 Eloquent 模型的子模型。例如，考虑这个通过 slug 为特定用户检索博客文章的路由定义：</p><pre><code>use App\\Models\\Post;
use App\\Models\\User;

Route::get(&#39;/users/{user}/posts/{post:slug}&#39;, function (User $user, Post $post) {
    return $post;
});
</code></pre><p>当使用自定义键控隐式绑定作为嵌套路由参数时，Laravel 将自动限定查询范围以通过其父级检索嵌套模型，使用约定来猜测父级上的关系名称。 在这种情况下，假设 <code>User</code> 模型有一个名为 <code>posts</code> 的关系（路由参数名称的复数形式），可用于检索 <code>Post</code> 模型。</p><p>如果你愿意，即使未提供自定义键，你也可以指示 Laravel 限定「子」绑定的范围。为此，你可以在定义路由时调用 <code>scopeBindings</code> 方法：</p><pre><code>use App\\Models\\Post;
use App\\Models\\User;

Route::get(&#39;/users/{user}/posts/{post}&#39;, function (User $user, Post $post) {
    return $post;
})-&gt;scopeBindings();
</code></pre><p>或者，你可以指示整个路由定义组使用范围绑定：</p><pre><code>Route::scopeBindings()-&gt;group(function () {
    Route::get(&#39;/users/{user}/posts/{post}&#39;, function (User $user, Post $post) {
        return $post;
    });
});
</code></pre><p>类似地，你可以通过调用 <code>withoutScopedBindings</code> 方法来明确的指示 Laravel 不做作用域绑定：</p><pre><code>Route::get(&#39;/users/{user}/posts/{post:slug}&#39;, function (User $user, Post $post) {
    return $post;
})-&gt;withoutScopedBindings();
</code></pre><p><a name="customizing-missing-model-behavior"></a></p><h4 id="自定义缺失模型行为" tabindex="-1"><a class="header-anchor" href="#自定义缺失模型行为" aria-hidden="true">#</a> 自定义缺失模型行为</h4><p>通常，如果未找到隐式绑定模型，则会生成 404 HTTP 响应。但是，你可以通过在定义路由时调用 <code>missing</code> 方法来自定义此行为。<code>missing</code> 方法接受一个闭包，如果找不到隐式绑定模型，则将调用该闭包：</p><pre><code>use App\\Http\\Controllers\\LocationsController;
use Illuminate\\Http\\Request;
use Illuminate\\Support\\Facades\\Redirect;

Route::get(&#39;/locations/{location:slug}&#39;, [LocationsController::class, &#39;show&#39;])
        -&gt;name(&#39;locations.view&#39;)
        -&gt;missing(function (Request $request) {
            return Redirect::route(&#39;locations.index&#39;);
        });
</code></pre><p><a name="implicit-enum-binding"></a></p><h3 id="隐式枚举绑定" tabindex="-1"><a class="header-anchor" href="#隐式枚举绑定" aria-hidden="true">#</a> 隐式枚举绑定</h3>`,170),u={href:"https://www.php.net/manual/en/language.enumerations.backed.php",target:"_blank",rel:"noopener noreferrer"},l={href:"https://www.php.net/manual/en/language.enumerations.backed.php",target:"_blank",rel:"noopener noreferrer"},h=t(`<div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Enums</span><span class="token punctuation">;</span>

<span class="token keyword">enum</span> <span class="token class-name-definition class-name">Category</span><span class="token punctuation">:</span> <span class="token keyword type-declaration">string</span>
<span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token constant">Fruits</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;fruits&#39;</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token constant">People</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;people&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你可以定义一个只有在 <code>{category}</code> 路由段是 <code>fruits</code> 或 <code>people</code> 时才会被调用的路由。 否则，Laravel 将返回 404 HTTP 响应：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Enums<span class="token punctuation">\\</span>Category</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Support<span class="token punctuation">\\</span>Facades<span class="token punctuation">\\</span>Route</span><span class="token punctuation">;</span>

<span class="token class-name static-context">Route</span><span class="token operator">::</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;/categories/{category}&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">Category</span> <span class="token variable">$category</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token variable">$category</span><span class="token operator">-&gt;</span><span class="token property">value</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="explicit-binding"></a></p><h3 id="显式绑定" tabindex="-1"><a class="header-anchor" href="#显式绑定" aria-hidden="true">#</a> 显式绑定</h3><p>不需要使用 Laravel 隐式的、基于约定的模型解析来使用模型绑定。你还可以显式定义路由参数与模型的对应方式。要注册显式绑定，请使用路由器的 <code>model</code> 方法为给定参数指定类。在 <code>RouteServiceProvider</code> 类的 <code>boot</code> 方法的开头定义显式模型绑定：</p><pre><code>use App\\Models\\User;
use Illuminate\\Support\\Facades\\Route;

/**
 * 定义路由模型绑定、模式筛选器等。
 */
public function boot(): void
{
    Route::model(&#39;user&#39;, User::class);

    // ...
}
</code></pre><p>接下来，定义一个包含 <code>{user}</code> 参数的路由：</p><pre><code>use App\\Models\\User;

Route::get(&#39;/users/{user}&#39;, function (User $user) {
    // ...
});
</code></pre><p>由于我们已将所有 <code>{user}</code> 参数绑定到 <code>App\\Models\\User</code> 模型，该类的一个实例将被注入到路由中。因此，例如，对 <code>users/1</code> 的请求将从 ID 为 <code>1</code> 的数据库中注入 <code>User</code> 实例。</p><p>如果在数据库中没有找到匹配的模型实例，则会自动生成 404 HTTP 响应。</p><p><a name="customizing-the-resolution-logic"></a></p><h4 id="自定义解析逻辑" tabindex="-1"><a class="header-anchor" href="#自定义解析逻辑" aria-hidden="true">#</a> 自定义解析逻辑</h4><p>如果你想定义你自己的模型绑定解析逻辑，你可以使用 <code>Route::bind</code> 方法。传递给 <code>bind</code> 方法的闭包将接收 URI 段的值，并应返回应注入路由的类的实例。同样，这种定制应该在应用程序的 <code>RouteServiceProvider</code> 的 <code>boot</code> 方法中进行：</p><pre><code>use App\\Models\\User;
use Illuminate\\Support\\Facades\\Route;

/**
 * 定义路由模型绑定、模式筛选器等。
 */
public function boot(): void
{
    Route::bind(&#39;user&#39;, function (string $value) {
        return User::where(&#39;name&#39;, $value)-&gt;firstOrFail();
    });

    // ...
}
</code></pre><p>或者，你可以覆盖 Eloquent 模型上的 <code>resolveRouteBinding</code> 方法。此方法将接收 URI 段的值，并应返回应注入路由的类的实例：</p><pre><code>/**
 * 检索绑定值的模型。
 *
 * @param  mixed  $value
 * @param  string|null  $field
 * @return \\Illuminate\\Database\\Eloquent\\Model|null
 */
public function resolveRouteBinding($value, $field = null)
{
    return $this-&gt;where(&#39;name&#39;, $value)-&gt;firstOrFail();
}
</code></pre><p>如果路由正在使用 <a href="#implicit-model-binding-scoping">implicit binding scoping</a>, 则 <code>resolveChildRouteBinding</code> 方法将用于解析父模型的子绑定：</p><pre><code>/**
 * 检索绑定值的子模型。
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
</code></pre><p><a name="fallback-routes"></a></p><h2 id="fallback-路由" tabindex="-1"><a class="header-anchor" href="#fallback-路由" aria-hidden="true">#</a> Fallback 路由</h2><p>使用 <code>Route::fallback</code> 方法，你可以定义一个在没有其他路由匹配传入请求时将执行的路由。通常，未处理的请求将通过应用程序的异常处理程序自动呈现「404」页面。但是，由于你通常会在 <code>routes/web.php</code> 文件中定义 fallback 路由，因此 web 中间件组中的所有中间件都将应用于该路由。你可以根据需要随意向此路由添加额外的中间件：</p><pre><code>Route::fallback(function () {
    // ...
});
</code></pre><blockquote><p>注意：Fallback 路由应该始终是你的应用程序注册的最后一个路由。</p></blockquote><p><a name="rate-limiting"></a></p><h2 id="速率限制" tabindex="-1"><a class="header-anchor" href="#速率限制" aria-hidden="true">#</a> 速率限制</h2><p><a name="defining-rate-limiters"></a></p><h3 id="定义速率限制器" tabindex="-1"><a class="header-anchor" href="#定义速率限制器" aria-hidden="true">#</a> 定义速率限制器</h3><p>Laravel 包括功能强大且可定制的限速服务，你可以利用这些服务来限制给定路线或一组路线的流量。首先，你应该定义满足应用程序需求的速率限制器配置。通常，这应该在应用程序的 <code>App\\Providers\\RouteServiceProvider</code> 类的 <code>configureRateLimiting</code> 方法中完成，该类已经包含了一个速率限制器定义，该定义应用于应用程序 <code>routes/api.php</code> 文件中的路由：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Cache<span class="token punctuation">\\</span>RateLimiting<span class="token punctuation">\\</span>Limit</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Request</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Support<span class="token punctuation">\\</span>Facades<span class="token punctuation">\\</span>RateLimiter</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 为应用程序配置速率限制器。
 */</span>
<span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function-definition function">boot</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span>
<span class="token punctuation">{</span>
    <span class="token class-name static-context">RateLimiter</span><span class="token operator">::</span><span class="token function">for</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;api&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">Request</span> <span class="token variable">$request</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name static-context">Limit</span><span class="token operator">::</span><span class="token function">perMinute</span><span class="token punctuation">(</span><span class="token number">60</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">by</span><span class="token punctuation">(</span><span class="token variable">$request</span><span class="token operator">-&gt;</span><span class="token function">user</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">?-&gt;</span><span class="token property">id</span> <span class="token operator">?</span><span class="token punctuation">:</span> <span class="token variable">$request</span><span class="token operator">-&gt;</span><span class="token function">ip</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>速率限制器是使用 <code>RateLimiter</code> 外观的 <code>for</code> 方法定义的。for 方法接受一个速率限制器名称和一个闭包，该闭包返回应该应用于分配给速率限制器的路由的限制配置。限制配置是 <code>Illuminate\\Cache\\RateLimiting\\Limit</code> 类的实例。此类包含有用的「构建器」方法，以便你可以快速定义限制。速率限制器名称可以是你希望的任何字符串：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Cache<span class="token punctuation">\\</span>RateLimiting<span class="token punctuation">\\</span>Limit</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Request</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Support<span class="token punctuation">\\</span>Facades<span class="token punctuation">\\</span>RateLimiter</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 为应用程序配置速率限制器。
 */</span>
<span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function-definition function">boot</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span>
<span class="token punctuation">{</span>
    <span class="token class-name static-context">RateLimiter</span><span class="token operator">::</span><span class="token function">for</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;global&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">Request</span> <span class="token variable">$request</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name static-context">Limit</span><span class="token operator">::</span><span class="token function">perMinute</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果传入的请求超过指定的速率限制，Laravel 将自动返回一个带有 429 HTTP 状态码的响应。如果你想定义自己的响应，应该由速率限制返回，你可以使用 <code>response</code> 方法：</p><pre><code>RateLimiter::for(&#39;global&#39;, function (Request $request) {
    return Limit::perMinute(1000)-&gt;response(function (Request $request, array $headers) {
        return response(&#39;Custom response...&#39;, 429, $headers);
    });
});
</code></pre><p>由于速率限制器回调接收传入的 HTTP 请求实例，你可以根据传入的请求或经过身份验证的用户动态构建适当的速率限制：</p><pre><code>RateLimiter::for(&#39;uploads&#39;, function (Request $request) {
    return $request-&gt;user()-&gt;vipCustomer()
                ? Limit::none()
                : Limit::perMinute(100);
});
</code></pre><p><a name="segmenting-rate-limits"></a></p><h4 id="分段速率限制" tabindex="-1"><a class="header-anchor" href="#分段速率限制" aria-hidden="true">#</a> 分段速率限制</h4><p>有时你可能希望按某个任意值对速率限制进行分段。例如，你可能希望每个 IP 地址每分钟允许用户访问给定路由 100 次。为此，你可以在构建速率限制时使用 <code>by</code> 方法：</p><pre><code>RateLimiter::for(&#39;uploads&#39;, function (Request $request) {
    return $request-&gt;user()-&gt;vipCustomer()
                ? Limit::none()
                : Limit::perMinute(100)-&gt;by($request-&gt;ip());
});
</code></pre><p>为了使用另一个示例来说明此功能，我们可以将每个经过身份验证的用户 ID 的路由访问限制为每分钟 100 次，或者对于访客来说，每个 IP 地址每分钟访问 10 次：</p><pre><code>RateLimiter::for(&#39;uploads&#39;, function (Request $request) {
    return $request-&gt;user()
                ? Limit::perMinute(100)-&gt;by($request-&gt;user()-&gt;id)
                : Limit::perMinute(10)-&gt;by($request-&gt;ip());
});
</code></pre><p><a name="multiple-rate-limits"></a></p><h4 id="多个速率限制" tabindex="-1"><a class="header-anchor" href="#多个速率限制" aria-hidden="true">#</a> 多个速率限制</h4><p>如果需要，你可以返回给定速率限制器配置的速率限制数组。将根据路由在数组中的放置顺序评估每个速率限制：</p><pre><code>RateLimiter::for(&#39;login&#39;, function (Request $request) {
    return [
        Limit::perMinute(500),
        Limit::perMinute(3)-&gt;by($request-&gt;input(&#39;email&#39;)),
    ];
});
</code></pre><p><a name="attaching-rate-limiters-to-routes"></a></p><h3 id="将速率限制器附加到路由" tabindex="-1"><a class="header-anchor" href="#将速率限制器附加到路由" aria-hidden="true">#</a> 将速率限制器附加到路由</h3><p>可以使用 <code>throttle</code> <a href="./middleware">middleware</a>。 将速率限制器附加到路由或路由组。路由中间件接受你希望分配给路由的速率限制器的名称：</p><pre><code>Route::middleware([&#39;throttle:uploads&#39;])-&gt;group(function () {
    Route::post(&#39;/audio&#39;, function () {
        // ...
    });

    Route::post(&#39;/video&#39;, function () {
        // ...
    });
});
</code></pre><p><a name="throttling-with-redis"></a></p><h4 id="使用-redis-节流" tabindex="-1"><a class="header-anchor" href="#使用-redis-节流" aria-hidden="true">#</a> 使用 Redis 节流</h4><p>通常，<code>throttle</code> 中间件映射到 <code>Illuminate\\Routing\\Middleware\\ThrottleRequests</code> 类。此映射在应用程序的 HTTP 内核 (App\\Http\\Kernel) 中定义。但是，如果你使用 Redis 作为应用程序的缓存驱动程序，你可能希望更改此映射以使用 <code>Illuminate\\Routing\\Middleware\\ThrottleRequestsWithRedis</code> 类。这个类在使用 Redis 管理速率限制方面更有效：</p><pre><code>&#39;throttle&#39; =&gt; \\Illuminate\\Routing\\Middleware\\ThrottleRequestsWithRedis::class,
</code></pre><p><a name="form-method-spoofing"></a></p><h2 id="伪造表单方法" tabindex="-1"><a class="header-anchor" href="#伪造表单方法" aria-hidden="true">#</a> 伪造表单方法</h2><p>HTML 表单不支持 <code>PUT</code> ， <code>PATCH</code> 或 <code>DELETE</code> 请求。所以，当定义 <code>PUT</code> ， <code>PATCH</code> 或 <code>DELETE</code> 路由用在 HTML 表单时，你将需要一个隐藏的加 <code>_method</code> 字段在表单中。该 <code>_method</code> 字段的值将会与 HTTP 请求一起发送。</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token operator">&lt;</span>form action<span class="token operator">=</span><span class="token string double-quoted-string">&quot;/example&quot;</span> method<span class="token operator">=</span><span class="token string double-quoted-string">&quot;POST&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string double-quoted-string">&quot;hidden&quot;</span> name<span class="token operator">=</span><span class="token string double-quoted-string">&quot;_method&quot;</span> value<span class="token operator">=</span><span class="token string double-quoted-string">&quot;PUT&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string double-quoted-string">&quot;hidden&quot;</span> name<span class="token operator">=</span><span class="token string double-quoted-string">&quot;_token&quot;</span> value<span class="token operator">=</span><span class="token string double-quoted-string">&quot;{{ csrf_token() }}&quot;</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为方便起见，你可以使用 <code>@method</code> <a href="./blade">Blade 指令</a> 生成 <code>_method</code> 输入字段：</p><pre><code>&lt;form action=&quot;/example&quot; method=&quot;POST&quot;&gt;
    @method(&#39;PUT&#39;)
    @csrf
&lt;/form&gt;
</code></pre><p><a name="accessing-the-current-route"></a></p><h2 id="访问当前路由" tabindex="-1"><a class="header-anchor" href="#访问当前路由" aria-hidden="true">#</a> 访问当前路由</h2><p>你可以使用 <code>Route Facade</code> 的 <code>current</code>、<code>currentRouteName</code> 和 <code>currentRouteAction</code> 方法来访问有关处理传入请求的路由的信息：</p><pre><code>use Illuminate\\Support\\Facades\\Route;

$route = Route::current(); // Illuminate\\Routing\\Route
$name = Route::currentRouteName(); // string
$action = Route::currentRouteAction(); // string
</code></pre>`,64),m={href:"https://laravel.com/api/laravel/10.x/Illuminate/Routing/Router.html",target:"_blank",rel:"noopener noreferrer"},g={href:"https://laravel.com/api/laravel/10.x/Illuminate/Routing/Route.html",target:"_blank",rel:"noopener noreferrer"},k=t('<p><a name="cors"></a></p><h2 id="跨域资源共享-cors" tabindex="-1"><a class="header-anchor" href="#跨域资源共享-cors" aria-hidden="true">#</a> 跨域资源共享 (CORS)</h2><p>Laravel 可以使用你配置的值自动响应 CORS <code>OPTIONS</code> HTTP 请求。所有 CORS 设置都可以在应用程序的 <code>config/cors.php</code> 配置文件中进行配置。OPTIONS 请求将由默认包含在全局中间件堆栈中的 HandleCors <a href="./middleware">middleware</a> 自动处理。你的全局中间件堆栈位于应用程序的 HTTP 内核 (<code>App\\Http\\Kernel</code>) 中。</p>',3),f={href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#The_HTTP_response_headers",target:"_blank",rel:"noopener noreferrer"},v=t(`<p><a name="route-caching"></a></p><h2 id="路由缓存" tabindex="-1"><a class="header-anchor" href="#路由缓存" aria-hidden="true">#</a> 路由缓存</h2><p>在将应用程序部署到生产环境时，你应该利用 Laravel 的路由缓存。使用路由缓存将大大减少注册所有应用程序路由所需的时间。要生成路由缓存，请执行 <code>route:cache</code> Artisan 命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan route:cache
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>运行此命令后，你的缓存路由文件将在每个请求上加载。请记住，如果你添加任何新路线，你将需要生成新的路线缓存。因此，你应该只在项目部署期间运行 <code>route:cache</code> 命令。</p><p>你可以使用 <code>route:clear</code> 命令清除路由缓存：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan route:clear
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="自定义秘钥"></a><a name="自定义键和范围"></a></p>`,8);function b(R,q){const a=r("ExternalLinkIcon");return p(),i("div",null,[d,n("p",null,[e("PHP 8.1 引入了对 "),n("a",u,[e("Enums"),s(a)]),e(". 的支持。为了补充这个特性，Laravel 允许你在你的路由定义中键入一个 "),n("a",l,[e("Enums"),s(a)]),e(" 并且 Laravel 只会在该路由段对应于一个有效的 Enum 值时调用该路由。否则，将自动返回 404 HTTP 响应。例如，给定以下枚举：")]),h,n("p",null,[e("你可以参考 "),n("a",m,[e("Route facade 的底层类"),s(a)]),e(" 和 "),n("a",g,[e("Route 实例"),s(a)]),e(" 的 API 文档查看路由器和路由类上可用的所有方法。")]),k,n("blockquote",null,[n("p",null,[e("技巧：有关 CORS 和 CORS 标头的更多信息，请参阅 "),n("a",f,[e("MDN 关于 CORS 的 Web 文档"),s(a)]),e("。")])]),v])}const w=o(c,[["render",b],["__file","routing.html.vue"]]);export{w as default};
