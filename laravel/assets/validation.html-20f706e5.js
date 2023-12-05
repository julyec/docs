import{_ as d}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as s,c as o,b as e,d as a,e as i,a as r}from"./app-8cdff07c.js";const l={},c=r(`<h1 id="表单验证" tabindex="-1"><a class="header-anchor" href="#表单验证" aria-hidden="true">#</a> 表单验证</h1><ul><li><a href="#introduction">简介</a></li><li><a href="#validation-quickstart">快速开始</a><ul><li><a href="#quick-defining-the-routes">定义路由</a></li><li><a href="#quick-creating-the-controller">创建控制器</a></li><li><a href="#quick-writing-the-validation-logic">编写验证逻辑</a></li><li><a href="#quick-displaying-the-validation-errors">显示验证错误信息</a></li><li><a href="#repopulating-forms">回填表单</a></li><li><a href="#a-note-on-optional-fields">可选字段的注意事项</a></li><li><a href="#validation-error-response-format">验证错误响应的格式化</a></li></ul></li><li><a href="#form-request-validation">表单请求验证</a><ul><li><a href="#creating-form-requests">创建表单请求类</a></li><li><a href="#authorizing-form-requests">表单请求授权验证</a></li><li><a href="#customizing-the-error-messages">自定义错误消息</a></li><li><a href="#preparing-input-for-validation">表单输入预处理</a></li></ul></li><li><a href="#manually-creating-validators">手动创建验证器</a><ul><li><a href="#automatic-redirection">自动重定向</a></li><li><a href="#named-error-bags">命名错误包</a></li><li><a href="#manual-customizing-the-error-messages">自定义错误消息</a></li><li><a href="#after-validation-hook">验证后的钩子</a></li></ul></li><li><a href="#working-with-validated-input">使用验证后的表单输入</a></li><li><a href="#working-with-error-messages">使用验证错误信息</a><ul><li><a href="#specifying-custom-messages-in-language-files">在本地化文件中指定自定义消息</a></li><li><a href="#specifying-attribute-in-language-files">在本地化文件中指定属性</a></li><li><a href="#specifying-values-in-language-files">在本地化文件中指定值</a></li></ul></li><li><a href="#available-validation-rules">可用的验证规则</a></li><li><a href="#conditionally-adding-rules">按条件添加验证规则</a></li><li><a href="#validating-arrays">验证数组</a><ul><li><a href="#validating-nested-array-input">验证多维数组</a></li><li><a href="#error-message-indexes-and-positions">错误消息的索引和定位</a></li></ul></li><li><a href="#validating-files">验证文件</a></li><li><a href="#validating-passwords">验证密码</a></li><li><a href="#custom-validation-rules">自定义验证规则</a><ul><li><a href="#using-rule-objects">使用 Rule 对象</a></li><li><a href="#using-closures">使用闭包函数</a></li><li><a href="#implicit-rules">隐式规则</a></li></ul></li></ul><p><a name="introduction"></a></p><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p>Laravel 提供了几种不同的方法来验证传入应用程序的数据。最常见的做法是在所有传入的 HTTP 请求中使用 <code>validate</code> 方法。同时，我们还将讨论其他验证方法。</p><p>Laravel 包含了各种方便的验证规则，你可以将它们应用于数据，甚至可以验证给定数据库表中的值是否唯一。我们将详细介绍每个验证规则，以便你熟悉 Laravel 的所有验证功能。</p><p><a name="validation-quickstart"></a></p><h2 id="快速开始" tabindex="-1"><a class="header-anchor" href="#快速开始" aria-hidden="true">#</a> 快速开始</h2><p>为了了解 Laravel 强大的验证功能，我们来看一个表单验证并将错误消息展示给用户的完整示例。通过阅读概述，这将会对你如何使用 Laravel 验证传入的请求数据有一个很好的理解：</p><p><a name="quick-defining-the-routes"></a></p><h3 id="定义路由" tabindex="-1"><a class="header-anchor" href="#定义路由" aria-hidden="true">#</a> 定义路由</h3><p>首先，假设我们在 <code>routes/web.php</code> 路由文件中定义了下面这些路由：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>use App\\Http\\Controllers\\PostController; 
Route::get(&#39;/post/create&#39;, [PostController::class, &#39;create&#39;]);
Route::post(&#39;/post&#39;, [PostController::class, &#39;store&#39;]);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>GET</code> 路由会显示一个供用户创建新博客文章的表单，而 <code>POST</code> 路由会将新的博客文章存储到数据库中。</p><p><a name="quick-creating-the-controller"></a></p><h3 id="创建控制器" tabindex="-1"><a class="header-anchor" href="#创建控制器" aria-hidden="true">#</a> 创建控制器</h3><p>接下来，让我们一起来看看处理这些路由的简单控制器。我们暂时留空了 store 方法：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;?php

namespace App\\Http\\Controllers;
 
use App\\Http\\Controllers\\Controller;
use Illuminate\\Http\\RedirectResponse;
use Illuminate\\Http\\Request;
use Illuminate\\View\\View;
 
class PostController extends Controller
{
    /**
     * 博客的表单视图
     */
    public function create(): View
    {
        return view(&#39;post.create&#39;);
    }
 
    /**
     * 存储博客的 Action
     */
    public function store(Request $request): RedirectResponse
    {
        // 验证并且执行存储逻辑
 
        $post = /** ... */
 
        return to_route(&#39;post.show&#39;, [&#39;post&#39; =&gt; $post-&gt;id]);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="quick-writing-the-validation-logic"></a></p><h3 id="编写验证逻辑" tabindex="-1"><a class="header-anchor" href="#编写验证逻辑" aria-hidden="true">#</a> 编写验证逻辑</h3><p>现在我们开始在 <code>store</code> 方法中编写用来验证新的博客文章的逻辑代码。为此，我们将使用 <code>Illuminate\\Http\\Request</code> 类提供的 <code>validate</code> 方法。如果验证通过，你的代码会继续正常运行。如果验证失败，则会抛出 <code>Illuminate\\Validation\\ValidationException</code> 异常，并自动将对应的错误响应返回给用户。</p><p>如果在传统 HTTP 请求期间验证失败，则会生成对先前 URL 的重定向响应。如果传入的请求是 XHR，将将返回包含验证错误信息的 JSON 响应。</p><p>为了深入理解 <code>validate</code> 方法，让我们接着回到 <code>store</code> 方法中：</p><pre><code>/**
 * 存储一篇新的博客文章。
 */
public function store(Request $request): RedirectResponse
{
    $validated = $request-&gt;validate([
        &#39;title&#39; =&gt; &#39;required|unique:posts|max:255&#39;,
        &#39;body&#39; =&gt; &#39;required&#39;,
    ]);

    // 博客文章验证通过...

    return redirect(&#39;/posts&#39;);
}
</code></pre><p>如你所见，验证规则被传递到 <code>validate</code> 方法中。不用担心——所有可用的验证规则均已 <a href="#available-validation-rules">存档</a>。 另外再提醒一次，如果验证失败，会自动生成一个对应的响应。如果验证通过，那我们的控制器会继续正常运行。</p><p>另外，验证规则可以使用数组，而不是单个 <code>|</code> 分隔的字符串：</p><pre><code>$validatedData = $request-&gt;validate([
    &#39;title&#39; =&gt; [&#39;required&#39;, &#39;unique:posts&#39;, &#39;max:255&#39;],
    &#39;body&#39; =&gt; [&#39;required&#39;],
]);
</code></pre><p>此外，你可以使用 <code>validateWithBag</code> 方法来验证请求，并将所有错误信息储存在一个 <a href="#named-error-bags">命名错误信息包</a>：</p><pre><code>$validatedData = $request-&gt;validateWithBag(&#39;post&#39;, [
    &#39;title&#39; =&gt; [&#39;required&#39;, &#39;unique:posts&#39;, &#39;max:255&#39;],
    &#39;body&#39; =&gt; [&#39;required&#39;],
]);
</code></pre><p><a name="stopping-on-first-validation-failure"></a></p><h4 id="在首次验证失败时停止运行" tabindex="-1"><a class="header-anchor" href="#在首次验证失败时停止运行" aria-hidden="true">#</a> 在首次验证失败时停止运行</h4><p>有时候我们希望某个字段在第一次验证失败后就停止运行验证规则，只需要将 <code>bail</code> 添加到规则中：</p><pre><code>$request-&gt;validate([
    &#39;title&#39; =&gt; &#39;bail|required|unique:posts|max:255&#39;,
    &#39;body&#39; =&gt; &#39;required&#39;,
]);
</code></pre><p>在这个例子中，如果 <code>title</code> 字段没有通过 <code>unique</code> 规则，那么不会继续验证 <code>max</code> 规则。规则会按照分配时的顺序来验证。</p><p><a name="a-note-on-nested-attributes"></a></p><h4 id="嵌套字段的说明" tabindex="-1"><a class="header-anchor" href="#嵌套字段的说明" aria-hidden="true">#</a> 嵌套字段的说明</h4><p>如果传入的 HTTP 请求包含「嵌套」参数，你可以在验证规则中使用<code>.</code>语法来指定这些参数：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$request-&gt;validate([
	&#39;title&#39; =&gt; &#39;required|unique:posts|max:255&#39;,
	&#39;author.name&#39; =&gt; &#39;required&#39;,
	&#39;author.description&#39; =&gt; &#39;required&#39;,
]);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另外，如果你的字段名称包含点，则可以通过使用反斜杠将点转义，以防止将其解释为<code>.</code>语法：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$request-&gt;validate([
	&#39;title&#39; =&gt; &#39;required|unique:posts|max:255&#39;,
	&#39;v1\\.0&#39; =&gt; &#39;required&#39;,
]);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="quick-displaying-the-validation-errors"></a></p><h3 id="显示验证错误信息" tabindex="-1"><a class="header-anchor" href="#显示验证错误信息" aria-hidden="true">#</a> 显示验证错误信息</h3><p>那么，如果传入的请求字段没有通过验证规则呢？如前所述，Laravel 会自动将用户重定向到之前的位置。此外，所有的验证错误和<a href="./requests#retrieving-old-input">请求输入</a>都会自动存入到<a href="./session#flash-data">闪存 session</a> 中。</p><p><code>Illuminate\\View\\Middleware\\ShareErrorsFromSession</code>中间件与应用程序的所有视图共享一个<code>$errors</code>变量，该变量由<code>web</code>中间件组提供。当应用该中间件时，<code>$errors</code> 变量始终在视图中可用，<code>$errors</code> 变量是 <code>Illuminate\\Support\\MessageBag</code> 的实例。更多有关使用该对象的信息，<a href="#working-with-error-messages">查看文档</a></p><p>因此，在实例中，当验证失败时，用户将重定向到控制器<code>create</code>方法，从而在视图中显示错误消息：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;!-- /resources/views/post/create.blade.php --&gt;

&lt;h1&gt;Create Post&lt;/h1&gt;

@if ($errors-&gt;any())
    &lt;div class=&quot;alert alert-danger&quot;&gt;
        &lt;ul&gt;
            @foreach ($errors-&gt;all() as $error)
                &lt;li&gt;{{ $error }}&lt;/li&gt;
            @endforeach
        &lt;/ul&gt;
    &lt;/div&gt;
@endif

&lt;!-- Create Post Form --&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="quick-customizing-the-error-messages"></a></p><h4 id="在语言文件中指定自定义消息" tabindex="-1"><a class="header-anchor" href="#在语言文件中指定自定义消息" aria-hidden="true">#</a> 在语言文件中指定自定义消息</h4><p>Laravel 的内置验证规则每个都对应一个错误消息，位于应用程序的<code>lang/en/validation.php</code>文件中。在此文件中，你将找到每个验证规则的翻译条目。你可以根据应用程序的需求随意更改或修改这些消息。</p><p>此外，你可以将此文件复制到另一个翻译语言目录中，以翻译应用程序语言的消息。要了解有关 Laravel 本地化的更多信息，请查看完整的<a href="./localization">本地化文档</a>.</p><blockquote><p><strong>注意</strong> 默认，Laravel 应用程序框架不包括<code>lang</code>目录。如果你想自定义 Laravel 的语言文件，你可以通过<code>lang:publish</code> Artisan 命令发布它们。</p></blockquote><p><a name="quick-xhr-requests-and-validation"></a></p><h4 id="xhr-请求-验证" tabindex="-1"><a class="header-anchor" href="#xhr-请求-验证" aria-hidden="true">#</a> XHR 请求 &amp; 验证</h4><p>在如下示例中，我们使用传统形式将数据发送到应用程序。但是，许多应用程序从 JavaScript 驱动的前端接收 XHR 请求。在 XHR 请求期间使用<code>validate</code>方法时，Laravel 将不会生成重定向响应。相反，Laravel生成一个<a href="#validation-error-response-format">包含所有验证错误的 JSON 响应</a>。该 JSON 响应将以 422 HTTP 状态码发送。</p><p><a name="the-at-error-directive"></a></p><h4 id="error指令" tabindex="-1"><a class="header-anchor" href="#error指令" aria-hidden="true">#</a> <code>@error</code>指令</h4><p>你亦可使用 <code>@error</code> <a href="./blade">Blade</a> 指令方便地检查给定的属性是否存在验证错误信息。在<code>@error</code>指令中，你可以输出<code>$message</code>变量以显示错误信息：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;!-- /resources/views/post/create.blade.php --&gt;

&lt;label for=&quot;title&quot;&gt;Post Title&lt;/label&gt;

&lt;input id=&quot;title&quot;
    type=&quot;text&quot;
    name=&quot;title&quot;
    class=&quot;@error(&#39;title&#39;) is-invalid @enderror&quot;&gt;

@error(&#39;title&#39;)
    &lt;div class=&quot;alert alert-danger&quot;&gt;{{ $message }}&lt;/div&gt;
@enderror
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你使用<a href="#named-error-bags">命名错误包</a>，你可以将错误包的名称作为第二个参数传递给<code>@error</code>指令：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;input ... class=&quot;@error(&#39;title&#39;, &#39;post&#39;) is-invalid @enderror&quot;&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="repopulating-forms"></a></p><h3 id="回填表单" tabindex="-1"><a class="header-anchor" href="#回填表单" aria-hidden="true">#</a> 回填表单</h3><p>当 Laravel 由于验证错误而生成重定向响应时，框架将自动<a href="./session#flash-data">将所有请求的输入闪存到 session 中</a>。这样做是为了方便你在下一个请求期间访问输入，并重新填充用户尝试提交的表单。</p><p>要从先前的请求中检索闪存的输入，请在 <code>Illuminate\\Http\\Request</code>的实例上调用<code>old</code>方法。 <code>old</code>方法将从 <a href="./session">session</a> 中提取先前闪存的输入数据：</p><pre><code>$title = $request-&gt;old(&#39;title&#39;);
</code></pre><p>Laravel 还提供了一个全局性的<code>old</code>。如果要在 <a href="./blade">Blade 模板</a>, 中显示旧输入，则使用<code>old</code>来重新填充表单会更加方便。如果给定字段不存在旧输入，则将返回<code>null</code>：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;input type=&quot;text&quot; name=&quot;title&quot; value=&quot;{{ old(&#39;title&#39;) }}&quot;&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="a-note-on-optional-fields"></a></p><h3 id="关于可选字段的注意事项" tabindex="-1"><a class="header-anchor" href="#关于可选字段的注意事项" aria-hidden="true">#</a> 关于可选字段的注意事项</h3><p>默认情况下， 在你的 Laravel 应用的全局中间件堆栈<code>App\\Http\\Kernel</code>类中包含了<code>TrimStrings</code>和<code>ConvertEmptyStringsToNull</code>中间件。因此，如果你不想让<code>null</code>被验证器标识为非法的话，你需要将「可选」字段标志为<code>nullable</code>。例如：</p><pre><code>$request-&gt;validate([
    &#39;title&#39; =&gt; &#39;required|unique:posts|max:255&#39;,
    &#39;body&#39; =&gt; &#39;required&#39;,
    &#39;publish_at&#39; =&gt; &#39;nullable|date&#39;,
]);
</code></pre><p>在此示例中，我们指定 <code>publish_at</code> 字段可以为 <code>null</code> 或有效的日期表示。如果没有将 <code>nullable</code> 修饰符添加到规则定义中，则验证器会将 <code>null</code> 视为无效日期。</p><p><a name="validation-error-response-format"></a></p><h3 id="验证错误响应格式" tabindex="-1"><a class="header-anchor" href="#验证错误响应格式" aria-hidden="true">#</a> 验证错误响应格式</h3><p>当您的应用程序抛出 <code>Illuminate\\Validation\\ValidationException</code> 异常，并且传入的 HTTP 请求希望返回 JSON 响应时，Laravel 将自动为您格式化错误消息，并返回 <code>422 Unprocessable Entity</code> HTTP 响应。</p><p>下面是验证错误的 JSON 响应格式示例。请注意，嵌套的错误键会被转换为“点”符号格式：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;The team name must be a string. (and 4 more errors)&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;errors&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;team_name&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;The team name must be a string.&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;The team name must be at least 1 characters.&quot;</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;authorization.role&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;The selected authorization.role is invalid.&quot;</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;users.0.email&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;The users.0.email field is required.&quot;</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;users.2.email&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;The users.2.email must be a valid email address.&quot;</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="form-request-validation"></a></p><h2 id="表单请求验证" tabindex="-1"><a class="header-anchor" href="#表单请求验证" aria-hidden="true">#</a> 表单请求验证</h2><p><a name="creating-form-requests"></a></p><h3 id="创建表单请求" tabindex="-1"><a class="header-anchor" href="#创建表单请求" aria-hidden="true">#</a> 创建表单请求</h3><p>对于更复杂的验证场景，您可能希望创建一个“表单请求”。表单请求是自定义请求类，封装了自己的验证和授权逻辑。要创建一个表单请求类，您可以使用 <code>make:request</code> Artisan CLI 命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan make:request StorePostRequest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>生成的表单请求类将被放置在 <code>app/Http/Requests</code> 目录中。如果此目录不存在，则在运行 <code>make:request</code> 命令时将创建该目录。Laravel 生成的每个表单请求都有两个方法：<code>authorize</code> 和 <code>rules</code>。</p><p>你可能已经猜到了，<code>authorize</code> 方法负责确定当前已认证用户是否可以执行请求所代表的操作，而 <code>rules</code> 方法返回应用于请求数据的验证规则：</p><pre><code>/**
 * 获取应用于请求的验证规则。
 *
 * @return array&lt;string, \\Illuminate\\Contracts\\Validation\\Rule|array|string&gt;
 */
public function rules(): array
{
    return [
        &#39;title&#39; =&gt; &#39;required|unique:posts|max:255&#39;,
        &#39;body&#39; =&gt; &#39;required&#39;,
    ];
}
</code></pre><blockquote><p><strong>注意</strong> 你可以在 <code>rules</code> 方法的签名中指定任何你需要的依赖项类型提示。它们将通过 Laravel 的 <a href="./container">服务容器</a> 自动解析。</p></blockquote><p>那么，验证规则是如何被评估的呢？你只需要在控制器方法中对请求进行类型提示。在调用控制器方法之前，传入的表单请求将被验证，这意味着你不需要在控制器中添加任何验证逻辑：</p><pre><code>/**
 * 存储新博客文章。
 */
public function store(StorePostRequest $request): RedirectResponse
{
    // 传入的请求有效...

    // 检索已验证的输入数据...
    $validated = $request-&gt;validated();

    // Retrieve a portion of the validated input data...
    $validated = $request-&gt;safe()-&gt;only([&#39;name&#39;, &#39;email&#39;]);
    $validated = $request-&gt;safe()-&gt;except([&#39;name&#39;, &#39;email&#39;]);

    // 存储博客文章...

    return redirect(&#39;/posts&#39;);
}
</code></pre><p>如果验证失败，将生成重定向响应以将用户发送回其先前的位置。错误也将被闪存到会话中，以便进行显示。如果请求是 XHR 请求，则会向用户返回带有 422 状态代码的 HTTP 响应，其中包含<a href="#validation-error-response-format">JSON 格式的验证错误表示</a>。</p><p><a name="adding-after-hooks-to-form-requests"></a></p><h4 id="在表单请求后添加钩子" tabindex="-1"><a class="header-anchor" href="#在表单请求后添加钩子" aria-hidden="true">#</a> 在表单请求后添加钩子</h4><p>如果您想在表单请求「之后」添加验证钩子，可以使用 <code>withValidator</code> 方法。这个方法接收一个完整的验证构造器，允许你在验证结果返回之前调用任何方法：</p><pre><code>use Illuminate\\Validation\\Validator;

/**
 * 配置验证实例。
 */
public function withValidator(Validator $validator): void
{
    $validator-&gt;after(function (Validator $validator) {
        if ($this-&gt;somethingElseIsInvalid()) {
            $validator-&gt;errors()-&gt;add(&#39;field&#39;, &#39;Something is wrong with this field!&#39;);
        }
    });
}
</code></pre><p><a name="request-stopping-on-first-validation-rule-failure"></a></p><h4 id="单个验证规则失败后停止" tabindex="-1"><a class="header-anchor" href="#单个验证规则失败后停止" aria-hidden="true">#</a> 单个验证规则失败后停止</h4><p>通过向您的请求类添加 <code>stopOnFirstFailure</code> 属性，您可以通知验证器一旦发生单个验证失败后，停止验证所有规则。</p><pre><code>/**
 * 表示验证器是否应在第一个规则失败时停止。
 *
 * @var bool
 */
protected $stopOnFirstFailure = true;
</code></pre><p><a name="customizing-the-redirect-location"></a></p><h4 id="自定义重定向" tabindex="-1"><a class="header-anchor" href="#自定义重定向" aria-hidden="true">#</a> 自定义重定向</h4><p>如前所述，当表单请求验证失败时，将会生成一个让用户返回到先前位置的重定向响应。当然，您也可以自由定义此行为。如果您要这样做，可以在表单请求中定义一个 <code>$redirect</code> 属性：</p><pre><code>/**
 * 如果验证失败，用户应重定向到的 URI。
 *
 * @var string
 */
protected $redirect = &#39;/dashboard&#39;;
</code></pre><p>或者，如果你想将用户重定向到一个命名路由，你可以定义一个 <code>$redirectRoute</code> 属性来代替：</p><pre><code>/**
 * 如果验证失败，用户应该重定向到的路由。
 *
 * @var string
 */
protected $redirectRoute = &#39;dashboard&#39;;
</code></pre><p><a name="authorizing-form-requests"></a></p><h3 id="表单请求授权验证" tabindex="-1"><a class="header-anchor" href="#表单请求授权验证" aria-hidden="true">#</a> 表单请求授权验证</h3><p>表单请求类内也包含了 <code>authorize</code> 方法。在这个方法中，您可以检查经过身份验证的用户确定其是否具有更新给定资源的权限。例如，您可以判断用户是否拥有更新文章评论的权限。最有可能的是，您将通过以下方法与你的 <a href="./authorization">授权与策略</a> 进行交互：</p><pre><code>use App\\Models\\Comment;

/**
 * 确定用户是否有请求权限。
 */
public function authorize(): bool
{
    $comment = Comment::find($this-&gt;route(&#39;comment&#39;));

    return $comment &amp;&amp; $this-&gt;user()-&gt;can(&#39;update&#39;, $comment);
}
</code></pre><p>由于所有的表单请求都是继承了 Laravel 中的请求基类，所以我们可以使用 <code>user</code> 方法去获取当前认证登录的用户。同时请注意上述例子中对 <code>route</code> 方法的调用。这个方法允许你在被调用的路由上获取其定义的 URI 参数，譬如下面例子中的 <code>{comment}</code> 参数：</p><pre><code>Route::post(&#39;/comment/{comment}&#39;);
</code></pre><p>因此，如果您的应用程序正在使用 <a href="./routing#route-model-binding">路由模型绑定</a>，则可以通过将解析的模型作为请求从而让您的代码更加简洁：</p><pre><code>return $this-&gt;user()-&gt;can(&#39;update&#39;, $this-&gt;comment);
</code></pre><p>如果 <code>authorize</code> 方法返回 <code>false</code>，则会自动返回一个包含 403 状态码的 HTTP 响应，也不会运行控制器的方法。</p><p>如果您打算在应用程序的其它部分处理请求的授权逻辑，只需从 <code>authorize</code> 方法返回 <code>true</code>：</p><pre><code>/**
 * 判断用户是否有请求权限。
 */
public function authorize(): bool
{
    return true;
}
</code></pre><blockquote><p><strong>注意</strong> 你可以向 <code>authorize</code> 方法传入所需的任何依赖项。它们会自动被 Laravel 提供的 <a href="./container">服务容器</a> 自动解析。</p></blockquote><p><a name="customizing-the-error-messages"></a></p><h3 id="自定义错误消息" tabindex="-1"><a class="header-anchor" href="#自定义错误消息" aria-hidden="true">#</a> 自定义错误消息</h3><p>你可以通过重写表单请求的 <code>messages</code> 方法来自定义错误消息。此方法应返回属性 / 规则对及其对应错误消息的数组：</p><pre><code>/**
 * 获取已定义验证规则的错误消息。
 *
 * @return array&lt;string, string&gt;
 */
public function messages(): array
{
    return [
        &#39;title.required&#39; =&gt; &#39;A title is required&#39;,
        &#39;body.required&#39; =&gt; &#39;A message is required&#39;,
    ];
}
</code></pre><p><a name="customizing-the-validation-attributes"></a></p><h4 id="自定义验证属性" tabindex="-1"><a class="header-anchor" href="#自定义验证属性" aria-hidden="true">#</a> 自定义验证属性</h4><p>Laravel 的许多内置验证规则错误消息都包含 <code>:attribute</code> 占位符。如果您希望将验证消息的 <code>:attribute</code> 部分替换为自定义属性名称，则可以重写 <code>attributes</code> 方法来指定自定义名称。此方法应返回属性 / 名称对的数组：</p><pre><code>/**
 * 获取验证错误的自定义属性
 *
 * @return array&lt;string, string&gt;
 */
public function attributes(): array
{
    return [
        &#39;email&#39; =&gt; &#39;email address&#39;,
    ];
}
</code></pre><p><a name="preparing-input-for-validation"></a></p><h3 id="准备验证输入" tabindex="-1"><a class="header-anchor" href="#准备验证输入" aria-hidden="true">#</a> 准备验证输入</h3><p>如果您需要在应用验证规则之前修改或清理请求中的任何数据，您可以使用 <code>prepareForValidation</code> 方法：</p><pre><code>use Illuminate\\Support\\Str;

/**
 * 准备验证数据。
 */
protected function prepareForValidation(): void
{
    $this-&gt;merge([
        &#39;slug&#39; =&gt; Str::slug($this-&gt;slug),
    ]);
}
</code></pre><p>同样地，如果您需要在验证完成后对任何请求数据进行规范化，您可以使用 <code>passedValidation</code> 方法：</p><pre><code>use Illuminate\\Support\\Str;

/**
 * Handle a passed validation attempt.
 */
protected function passedValidation(): void
{
    $this-&gt;replace([&#39;name&#39; =&gt; &#39;Taylor&#39;]);
}
</code></pre><p><a name="manually-creating-validators"></a></p><h2 id="手动创建验证器" tabindex="-1"><a class="header-anchor" href="#手动创建验证器" aria-hidden="true">#</a> 手动创建验证器</h2><p>如果您不想在请求上使用 <code>validate</code> 方法，可以使用 <code>Validator</code> <a href="/laravel/10.x/facades">门面</a> 手动创建一个验证器实例。门面上的 <code>make</code> 方法会生成一个新的验证器实例：</p><pre><code>&lt;?php

namespace App\\Http\\Controllers;

use App\\Http\\Controllers\\Controller;
use Illuminate\\Http\\RedirectResponse;
use Illuminate\\Http\\Request;
use Illuminate\\Support\\Facades\\Validator;

class PostController extends Controller
{
    /**
     * 存储新的博客文章。
     */
    public function store(Request $request): RedirectResponse
    {
        $validator = Validator::make($request-&gt;all(), [
            &#39;title&#39; =&gt; &#39;required|unique:posts|max:255&#39;,
            &#39;body&#39; =&gt; &#39;required&#39;,
        ]);

        if ($validator-&gt;fails()) {
            return redirect(&#39;post/create&#39;)
                        -&gt;withErrors($validator)
                        -&gt;withInput();
        }

        // 获取验证后的输入...
        $validated = $validator-&gt;validated();

        // 获取验证后输入的一部分...
        $validated = $validator-&gt;safe()-&gt;only([&#39;name&#39;, &#39;email&#39;]);
        $validated = $validator-&gt;safe()-&gt;except([&#39;name&#39;, &#39;email&#39;]);

        // 存储博客文章...

        return redirect(&#39;/posts&#39;);
    }
}
</code></pre><p>第一个参数传递给<code>make</code>方法的是要验证的数据。第二个参数是一个应用于数据的验证规则的数组。</p><p>在确定请求验证是否失败之后，您可以使用<code>withErrors</code>方法将错误消息闪存到会话中。使用此方法后，<code>$errors</code>变量将自动在重定向后与您的视图共享，从而可以轻松地将其显示回用户。<code>withErrors</code>方法接受验证器、<code>MessageBag</code>或PHP数组。</p><h4 id="单个验证规则失败后停止-1" tabindex="-1"><a class="header-anchor" href="#单个验证规则失败后停止-1" aria-hidden="true">#</a> 单个验证规则失败后停止</h4><p>通过向您的请求类添加 <code>stopOnFirstFailure</code> 属性，您可以通知验证器一旦发生单个验证失败后，停止验证所有规则。</p><pre><code>if ($validator-&gt;stopOnFirstFailure()-&gt;fails()) {
    // ...
}
</code></pre><p><a name="automatic-redirection"></a></p><h3 id="自动重定向" tabindex="-1"><a class="header-anchor" href="#自动重定向" aria-hidden="true">#</a> 自动重定向</h3><p>如果您想手动创建验证器实例，但仍要利用HTTP请求的<code>validate</code>方法提供的自动重定向，可以在现有验证器实例上调用<code>validate</code>方法。如果验证失败，则会自动重定向用户，或者在XHR请求的情况下，将返回一个<a href="#validation-error-response-format">JSON响应</a></p><pre><code>Validator::make($request-&gt;all(), [
    &#39;title&#39; =&gt; &#39;required|unique:posts|max:255&#39;,
    &#39;body&#39; =&gt; &#39;required&#39;,
])-&gt;validate();
</code></pre><p>如果验证失败，您可以使用<code>validateWithBag</code>方法将错误消息存储在<a href="#named-error-bags">命名错误包</a>中：</p><pre><code>Validator::make($request-&gt;all(), [
    &#39;title&#39; =&gt; &#39;required|unique:posts|max:255&#39;,
    &#39;body&#39; =&gt; &#39;required&#39;,
])-&gt;validateWithBag(&#39;post&#39;);
</code></pre><p><a name="named-error-bags"></a></p><h3 id="命名的错误包" tabindex="-1"><a class="header-anchor" href="#命名的错误包" aria-hidden="true">#</a> 命名的错误包</h3><p>如果您在同一页上有多个表单，您可能希望为包含验证错误的<code>MessageBag</code>命名，以便检索特定表单的错误消息。为此，将名称作为第二个参数传递给<code>withErrors</code>：</p><pre><code>return redirect(&#39;register&#39;)-&gt;withErrors($validator, &#39;login&#39;);
</code></pre><p>你可以通过 <code>$errors</code> 变量访问命名后的 <code>MessageBag</code> 实例：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>{{ $errors-&gt;login-&gt;first(&#39;email&#39;) }}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="manual-customizing-the-error-messages"></a></p><h3 id="自定义错误消息-1" tabindex="-1"><a class="header-anchor" href="#自定义错误消息-1" aria-hidden="true">#</a> 自定义错误消息</h3><p>如果需要，你可以提供验证程序实例使用的自定义错误消息，而不是 Laravel 提供的默认错误消息。有几种指定自定义消息的方法。首先，您可以将自定义消息作为第三个参数传递给 <code>Validator::make</code> 方法：</p><pre><code>$validator = Validator::make($input, $rules, $messages = [
    &#39;required&#39; =&gt; &#39;The :attribute field is required.&#39;,
]);
</code></pre><p>在此示例中，<code>:attribute</code> 占位符将被验证中的字段的实际名称替换。您也可以在验证消息中使用其它占位符。例如：</p><pre><code>$messages = [
    &#39;same&#39; =&gt; &#39;The :attribute and :other must match.&#39;,
    &#39;size&#39; =&gt; &#39;The :attribute must be exactly :size.&#39;,
    &#39;between&#39; =&gt; &#39;The :attribute value :input is not between :min - :max.&#39;,
    &#39;in&#39; =&gt; &#39;The :attribute must be one of the following types: :values&#39;,
];
</code></pre><p><a name="specifying-a-custom-message-for-a-given-attribute"></a></p><h4 id="为给定属性指定自定义消息" tabindex="-1"><a class="header-anchor" href="#为给定属性指定自定义消息" aria-hidden="true">#</a> 为给定属性指定自定义消息</h4><p>有时你可能希望只为特定属性指定自定义错误消息。你可以使用 <code>.</code> 表示法。首先指定属性名称，然后指定规则：</p><pre><code>$messages = [
    &#39;email.required&#39; =&gt; &#39;We need to know your email address!&#39;,
];
</code></pre><p><a name="specifying-custom-attribute-values"></a></p><h4 id="指定自定义属性值" tabindex="-1"><a class="header-anchor" href="#指定自定义属性值" aria-hidden="true">#</a> 指定自定义属性值</h4><p>Laravel 的许多内置错误消息都包含一个 <code>:attribute</code> 占位符，该占位符已被验证中的字段或属性的名称替换。为了自定义用于替换特定字段的这些占位符的值，你可以将自定义属性的数组作为第四个参数传递给 <code>Validator::make</code> 方法：</p><pre><code>$validator = Validator::make($input, $rules, $messages, [
    &#39;email&#39; =&gt; &#39;email address&#39;,
]);
</code></pre><p><a name="after-validation-hook"></a></p><h3 id="验证后钩子" tabindex="-1"><a class="header-anchor" href="#验证后钩子" aria-hidden="true">#</a> 验证后钩子</h3><p>验证器允许你在完成验证操作后执行附加的回调。以便你处理下一步的验证，甚至是往信息集合中添加更多的错误信息。你可以在验证器实例上使用 <code>after</code> 方法实现：</p><pre><code>use Illuminate\\Support\\Facades;
use Illuminate\\Validation\\Validator;

$validator = Facades\\Validator::make(/* ... */);

$validator-&gt;after(function (Validator $validator) {
    if ($this-&gt;somethingElseIsInvalid()) {
        $validator-&gt;errors()-&gt;add(
            &#39;field&#39;, &#39;Something is wrong with this field!&#39;
        );
    }
});

if ($validator-&gt;fails()) {
    // ...
}
</code></pre><p><a name="working-with-validated-input"></a></p><h2 id="处理验证字段" tabindex="-1"><a class="header-anchor" href="#处理验证字段" aria-hidden="true">#</a> 处理验证字段</h2><p>在使用表单请求或手动创建的验证器实例验证传入请求数据后，你可能希望检索经过验证的请求数据。 这可以通过多种方式实现。 首先，你可以在表单请求或验证器实例上调用 <code>validated</code> 方法。 此方法返回已验证的数据数组：</p><pre><code>$validated = $request-&gt;validated();

$validated = $validator-&gt;validated();
</code></pre><p>或者，你可以在表单请求或验证器实例上调用 <code>safe</code> 方法。 此方法返回一个 <code>Illuminate\\Support\\ValidatedInput</code>的实例。 该实例对象包含 <code>only</code>、<code>except</code> 和 <code>all</code> 方法来检索已验证数据的子集或整个已验证数据数组：</p><pre><code>$validated = $request-&gt;safe()-&gt;only([&#39;name&#39;, &#39;email&#39;]);

$validated = $request-&gt;safe()-&gt;except([&#39;name&#39;, &#39;email&#39;]);

$validated = $request-&gt;safe()-&gt;all();
</code></pre><p>此外， <code>Illuminate\\Support\\ValidatedInput</code> 实例可以像数组一样被迭代和访问：</p><pre><code>// 迭代验证数据...
foreach ($request-&gt;safe() as $key =&gt; $value) {
    // ...
}

// 访问验证数据数组...
$validated = $request-&gt;safe();

$email = $validated[&#39;email&#39;];
</code></pre><p><code>merge</code> 方法可以给验证过的数据添加额外的字段：</p><pre><code>$validated = $request-&gt;safe()-&gt;merge([&#39;name&#39; =&gt; &#39;Taylor Otwell&#39;]);
</code></pre><p><code>collect</code> 方法以 <a href="./collections">collection</a> 实例的形式来检索验证的数据：</p><pre><code>$collection = $request-&gt;safe()-&gt;collect();
</code></pre><p><a name="working-with-error-messages"></a></p><h2 id="使用错误消息" tabindex="-1"><a class="header-anchor" href="#使用错误消息" aria-hidden="true">#</a> 使用错误消息</h2><p>在调用 <code>Validator</code> 实例的 <code>errors</code> 方法后，会收到一个 <code>Illuminate\\Support\\MessageBag</code> 实例，用于处理错误信息。自动提供给所有视图的 <code>$errors</code> 变量也是 <code>MessageBag</code> 类的一个实例。</p><p><a name="retrieving-the-first-error-message-for-a-field"></a></p><h4 id="检索字段的第一条错误消息" tabindex="-1"><a class="header-anchor" href="#检索字段的第一条错误消息" aria-hidden="true">#</a> 检索字段的第一条错误消息</h4><p><code>first</code> 方法返回给定字段的第一条错误信息：</p><pre><code>$errors = $validator-&gt;errors();

echo $errors-&gt;first(&#39;email&#39;);
</code></pre><p><a name="retrieving-all-error-messages-for-a-field"></a></p><h4 id="检索一个字段的所有错误信息" tabindex="-1"><a class="header-anchor" href="#检索一个字段的所有错误信息" aria-hidden="true">#</a> 检索一个字段的所有错误信息</h4><p><code>get</code> 方法用于检索一个给定字段的所有错误信息，返回值类型为数组：</p><pre><code>foreach ($errors-&gt;get(&#39;email&#39;) as $message) {
    // ...
}
</code></pre><p>对于数组表单字段，可以使用 <code>*</code> 来检索每个数组元素的所有错误信息：</p><pre><code>foreach ($errors-&gt;get(&#39;attachments.*&#39;) as $message) {
    // ...
}
</code></pre><p><a name="retrieving-all-error-messages-for-all-fields"></a></p><h4 id="检索所有字段的所有错误信息" tabindex="-1"><a class="header-anchor" href="#检索所有字段的所有错误信息" aria-hidden="true">#</a> 检索所有字段的所有错误信息</h4><p><code>all</code> 方法用于检索所有字段的所有错误信息，返回值类型为数组：</p><pre><code>foreach ($errors-&gt;all() as $message) {
    // ...
}
</code></pre><p><a name="determining-if-messages-exist-for-a-field"></a></p><h4 id="判断字段是否存在错误信息" tabindex="-1"><a class="header-anchor" href="#判断字段是否存在错误信息" aria-hidden="true">#</a> 判断字段是否存在错误信息</h4><p><code>has</code> 方法可用于确定一个给定字段是否存在任何错误信息：</p><pre><code>if ($errors-&gt;has(&#39;email&#39;)) {
    // ...
}
</code></pre><p><a name="specifying-custom-messages-in-language-files"></a></p><h3 id="在语言文件中指定自定义消息-1" tabindex="-1"><a class="header-anchor" href="#在语言文件中指定自定义消息-1" aria-hidden="true">#</a> 在语言文件中指定自定义消息</h3><p>Laravel 内置的验证规则都有一个错误信息，位于应用程序的 <code>lang/en/validation.php</code> 文件中。在这个文件中, 你会发现每个验证规则都有一个翻译条目。可以根据你的应用程序的需要，自由地改变或修改这些信息。</p><p>此外, 你可以把这个文件复制到另一个语言目录，为你的应用程序的语言翻译信息。要了解更多关于Laravel本地化的信息, 请查看完整的 <a href="./localization">本地化</a>。</p><blockquote><p><strong>Warning</strong> 默认情况下, Laravel 应用程序的骨架不包括 <code>lang</code> 目录. 如果你想定制 Laravel 的语言文件, 可以通过 <code>lang:publish</code> Artisan 命令发布它们。</p></blockquote><p><a name="custom-messages-for-specific-attributes"></a></p><h4 id="针对特定属性的自定义信息" tabindex="-1"><a class="header-anchor" href="#针对特定属性的自定义信息" aria-hidden="true">#</a> 针对特定属性的自定义信息</h4><p>可以在应用程序的验证语言文件中自定义用于指定属性和规则组合的错误信息。将自定义信息添加到应用程序的 <code>lang/xx/validation.php</code> 语言文件的 <code>custom</code> 数组中：</p><pre><code>&#39;custom&#39; =&gt; [
    &#39;email&#39; =&gt; [
        &#39;required&#39; =&gt; &#39;We need to know your email address!&#39;,
        &#39;max&#39; =&gt; &#39;Your email address is too long!&#39;
    ],
],
</code></pre><p><a name="specifying-attribute-in-language-files"></a></p><h3 id="在语言文件中指定属性" tabindex="-1"><a class="header-anchor" href="#在语言文件中指定属性" aria-hidden="true">#</a> 在语言文件中指定属性</h3><p>Laravel 内置的错误信息包括一个 <code>:attribute</code> 占位符，它被替换为验证中的字段或属性的名称。如果你希望你的验证信息中的 <code>:attribute</code> 部分被替换成一个自定义的值, 可以在 <code>lang/xx/validation.php</code> 文件的 <code>attributes</code> 数组中指定自定义属性名称:</p><pre><code>&#39;attributes&#39; =&gt; [
    &#39;email&#39; =&gt; &#39;email address&#39;,
],
</code></pre><blockquote><p><strong>Warning</strong> 默认情况下, Laravel 应用程序的骨架不包括 <code>lang</code> 目录. 如果你想定制 Laravel 的语言文件, 可以通过 <code>lang:publish</code> Artisan 命令发布它们。</p></blockquote><p><a name="specifying-values-in-language-files"></a></p><h3 id="指定语言文件中的值" tabindex="-1"><a class="header-anchor" href="#指定语言文件中的值" aria-hidden="true">#</a> 指定语言文件中的值</h3><p>Laravel 内置的验证规则错误信息包含一个 <code>:value</code> 占位符，它被替换成请求属性的当前值。然而, 你可能偶尔需要在验证信息的 <code>:value</code> 部分替换成自定义的值。 例如，如果 <code>payment_type</code> 的值为 <code>cc</code> 则需要验证信用卡号码:</p><pre><code>Validator::make($request-&gt;all(), [
    &#39;credit_card_number&#39; =&gt; &#39;required_if:payment_type,cc&#39;
]);
</code></pre><p>如果这个验证规则失败了，它将产生以下错误信息:</p><div class="language-none line-numbers-mode" data-ext="none"><pre class="language-none"><code>The credit card number field is required when payment type is cc.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>你可以在 <code>lang/xx/validation.php</code> 语言文件中通过定义一个 <code>values</code> 数组来指定一个更友好的提示，而不是显示 <code>cc</code> 作为支付类型值：</p><pre><code>&#39;values&#39; =&gt; [
    &#39;payment_type&#39; =&gt; [
        &#39;cc&#39; =&gt; &#39;credit card&#39;
    ],
],
</code></pre><blockquote><p><strong>Warning</strong> 默认情况下, Laravel 应用程序的骨架不包括 <code>lang</code> 目录. 如果你想定制 Laravel 的语言文件, 你可以通过 <code>lang:publish</code> Artisan 命令发布它们。</p></blockquote><p>定义这个值后，验证规则将产生以下错误信息：</p><div class="language-none line-numbers-mode" data-ext="none"><pre class="language-none"><code>The credit card number field is required when payment type is credit card.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="available-validation-rules"></a></p><h2 id="可用的验证规则" tabindex="-1"><a class="header-anchor" href="#可用的验证规则" aria-hidden="true">#</a> 可用的验证规则</h2><p>下面是所有可用的验证规则及其功能的列表:</p>`,230),u=e("div",{class:"collection-method-list",markdown:"1"},[e("p",null,[e("a",{href:"#rule-accepted"},"Accepted"),e("a",{href:"#rule-accepted-if"},"Accepted If"),e("a",{href:"#rule-active-url"},"Active URL"),e("a",{href:"#rule-after"},"After (Date)"),e("a",{href:"#rule-after-or-equal"},"After Or Equal (Date)"),e("a",{href:"#rule-alpha"},"Alpha"),e("a",{href:"#rule-alpha-dash"},"Alpha Dash"),e("a",{href:"#rule-alpha-num"},"Alpha Numeric"),e("a",{href:"#rule-array"},"Array"),e("a",{href:"#rule-ascii"},"Ascii"),e("a",{href:"#rule-bail"},"Bail"),e("a",{href:"#rule-before"},"Before (Date)"),e("a",{href:"#rule-before-or-equal"},"Before Or Equal (Date)"),e("a",{href:"#rule-between"},"Between"),e("a",{href:"#rule-boolean"},"Boolean"),e("a",{href:"#rule-confirmed"},"Confirmed"),e("a",{href:"#rule-current-password"},"Current Password"),e("a",{href:"#rule-date"},"Date"),e("a",{href:"#rule-date-equals"},"Date Equals"),e("a",{href:"#rule-date-format"},"Date Format"),e("a",{href:"#rule-decimal"},"Decimal"),e("a",{href:"#rule-declined"},"Declined"),e("a",{href:"#rule-declined-if"},"Declined If"),e("a",{href:"#rule-different"},"Different"),e("a",{href:"#rule-digits"},"Digits"),e("a",{href:"#rule-digits-between"},"Digits Between"),e("a",{href:"#rule-dimensions"},"Dimensions (Image Files)"),e("a",{href:"#rule-distinct"},"Distinct"),e("a",{href:"#rule-doesnt-start-with"},"Doesnt Start With"),e("a",{href:"#rule-doesnt-end-with"},"Doesnt End With"),e("a",{href:"#rule-email"},"Email"),e("a",{href:"#rule-ends-with"},"Ends With"),e("a",{href:"#rule-enum"},"Enum"),e("a",{href:"#rule-exclude"},"Exclude"),e("a",{href:"#rule-exclude-if"},"Exclude If"),e("a",{href:"#rule-exclude-unless"},"Exclude Unless"),e("a",{href:"#rule-exclude-with"},"Exclude With"),e("a",{href:"#rule-exclude-without"},"Exclude Without"),e("a",{href:"#rule-exists"},"Exists (Database)"),e("a",{href:"#rule-file"},"File"),e("a",{href:"#rule-filled"},"Filled"),e("a",{href:"#rule-gt"},"Greater Than"),e("a",{href:"#rule-gte"},"Greater Than Or Equal"),e("a",{href:"#rule-image"},"Image (File)"),e("a",{href:"#rule-in"},"In"),e("a",{href:"#rule-in-array"},"In Array"),e("a",{href:"#rule-integer"},"Integer"),e("a",{href:"#rule-ip"},"IP Address"),e("a",{href:"#rule-json"},"JSON"),e("a",{href:"#rule-lt"},"Less Than"),e("a",{href:"#rule-lte"},"Less Than Or Equal"),e("a",{href:"#rule-lowercase"},"Lowercase"),e("a",{href:"#rule-mac"},"MAC Address"),e("a",{href:"#rule-max"},"Max"),e("a",{href:"#rule-max-digits"},"Max Digits"),e("a",{href:"#rule-mimetypes"},"MIME Types"),e("a",{href:"#rule-mimes"},"MIME Type By File Extension"),e("a",{href:"#rule-min"},"Min"),e("a",{href:"#rule-min-digits"},"Min Digits"),e("a",{href:"#rule-missing"},"Missing"),e("a",{href:"#rule-missing-if"},"Missing If"),e("a",{href:"#rule-missing-unless"},"Missing Unless"),e("a",{href:"#rule-missing-with"},"Missing With"),e("a",{href:"#rule-missing-with-all"},"Missing With All"),e("a",{href:"#rule-multiple-of"},"Multiple Of"),e("a",{href:"#rule-not-in"},"Not In"),e("a",{href:"#rule-not-regex"},"Not Regex"),e("a",{href:"#rule-nullable"},"Nullable"),e("a",{href:"#rule-numeric"},"Numeric"),e("a",{href:"#rule-password"},"Password"),e("a",{href:"#rule-present"},"Present"),e("a",{href:"#rule-prohibited"},"Prohibited"),e("a",{href:"#rule-prohibited-if"},"Prohibited If"),e("a",{href:"#rule-prohibited-unless"},"Prohibited Unless"),e("a",{href:"#rule-prohibits"},"Prohibits"),e("a",{href:"#rule-regex"},"Regular Expression"),e("a",{href:"#rule-required"},"Required"),e("a",{href:"#rule-required-if"},"Required If"),e("a",{href:"#rule-required-unless"},"Required Unless"),e("a",{href:"#rule-required-with"},"Required With"),e("a",{href:"#rule-required-with-all"},"Required With All"),e("a",{href:"#rule-required-without"},"Required Without"),e("a",{href:"#rule-required-without-all"},"Required Without All"),e("a",{href:"#rule-required-array-keys"},"Required Array Keys"),e("a",{href:"#rule-same"},"Same"),e("a",{href:"#rule-size"},"Size"),e("a",{href:"#validating-when-present"},"Sometimes"),e("a",{href:"#rule-starts-with"},"Starts With"),e("a",{href:"#rule-string"},"String"),e("a",{href:"#rule-timezone"},"Timezone"),e("a",{href:"#rule-unique"},"Unique (Database)"),e("a",{href:"#rule-uppercase"},"Uppercase"),e("a",{href:"#rule-url"},"URL"),e("a",{href:"#rule-ulid"},"ULID"),e("a",{href:"#rule-uuid"},"UUID")])],-1),p=r(`<p><a name="rule-accepted"></a></p><h4 id="accepted" tabindex="-1"><a class="header-anchor" href="#accepted" aria-hidden="true">#</a> accepted</h4><p>待验证字段必须是 <code>「yes」</code> ，<code>「on」</code> ，<code>1</code> 或 <code>true</code>。这对于验证「服务条款」的接受或类似字段时很有用。</p><p><a name="rule-accepted-if"></a></p><h4 id="accepted-if-anotherfield-value" tabindex="-1"><a class="header-anchor" href="#accepted-if-anotherfield-value" aria-hidden="true">#</a> accepted_if:anotherfield,value,...</h4><p>如果另一个正在验证的字段等于指定的值，则验证中的字段必须为 <code>「yes」</code> ，<code>「on」</code> ，<code>1</code> 或 <code>true</code>。 这对于验证「服务条款」接受或类似字段很有用。</p><p><a name="rule-active-url"></a></p><h4 id="active-url" tabindex="-1"><a class="header-anchor" href="#active-url" aria-hidden="true">#</a> active_url</h4><p>根据 <code>dns_get_record</code> PHP 函数，验证中的字段必须具有有效的 A 或 AAAA 记录。 提供的 URL 的主机名使用 <code>parse_url</code> PHP 函数提取，然后传递给 <code>dns_get_record</code>。</p><p><a name="rule-after"></a></p><h4 id="after-date" tabindex="-1"><a class="header-anchor" href="#after-date" aria-hidden="true">#</a> after:<em>date</em></h4><p>验证中的字段必须是给定日期之后的值。日期将被传递给 <code>strtotime</code> PHP 函数中，以便转换为有效的 <code>DateTime</code> 实例：</p><pre><code>&#39;start_date&#39; =&gt; &#39;required|date|after:tomorrow&#39;
</code></pre><p>你也可以指定另一个要与日期比较的字段，而不是传递要由 <code>strtotime</code> 处理的日期字符串：</p><pre><code>&#39;finish_date&#39; =&gt; &#39;required|date|after:start_date&#39;
</code></pre><p><a name="rule-after-or-equal"></a></p><h4 id="after-or-equal-date" tabindex="-1"><a class="header-anchor" href="#after-or-equal-date" aria-hidden="true">#</a> after_or_equal:<em>date</em></h4><p>待验证字段的值对应的日期必须在给定日期之后或与给定的日期相同。可参阅 <a href="#rule-after">after</a> 规则获取更多信息。</p><p><a name="rule-alpha"></a></p><h4 id="alpha" tabindex="-1"><a class="header-anchor" href="#alpha" aria-hidden="true">#</a> alpha</h4>`,20),h={href:"https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp?a=%5B%3AL%3A%5D&g=&i=",target:"_blank",rel:"noopener noreferrer"},m=e("code",null,"\\p{L}",-1),g={href:"https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp?a=%5B%3AM%3A%5D&g=&i=",target:"_blank",rel:"noopener noreferrer"},f=e("code",null,"\\p{M}",-1),v=r(`<p>为了将此验证规则限制在 ASCII 范围内的字符（<code>a-z</code> 和<code>A-Z</code>），你可以为验证规则提供 <code>ascii</code> 选项：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token string single-quoted-string">&#39;username&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;alpha:ascii&#39;</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="rule-alpha-dash"></a></p><h4 id="alpha-dash" tabindex="-1"><a class="header-anchor" href="#alpha-dash" aria-hidden="true">#</a> alpha_dash</h4>`,4),b={href:"https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp?a=%5B%3AL%3A%5D&g=&i=",target:"_blank",rel:"noopener noreferrer"},x=e("code",null,"\\p{L}",-1),q={href:"https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp?a=%5B%3AM%3A%5D&g=&i=",target:"_blank",rel:"noopener noreferrer"},_=e("code",null,"\\p{M}",-1),k={href:"https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp?a=%5B%3AN%3A%5D&g=&i=",target:"_blank",rel:"noopener noreferrer"},$=e("code",null,"\\p{N}",-1),w=e("code",null,"-",-1),y=e("code",null,"_",-1),I=r(`<p>为了将此验证规则限制在 ASCII 范围内的字符（<code>a-z</code> 和<code>A-Z</code>），你可以为验证规则提供 <code>ascii</code> 选项：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token string single-quoted-string">&#39;username&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;alpha_dash:ascii&#39;</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="rule-alpha-num"></a></p><h4 id="alpha-num" tabindex="-1"><a class="header-anchor" href="#alpha-num" aria-hidden="true">#</a> alpha_num</h4>`,4),V={href:"https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp?a=%5B%3AL%3A%5D&g=&i=",target:"_blank",rel:"noopener noreferrer"},R=e("code",null,"\\p{L}",-1),A={href:"https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp?a=%5B%3AM%3A%5D&g=&i=",target:"_blank",rel:"noopener noreferrer"},P=e("code",null,"\\p{M}",-1),S={href:"https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp?a=%5B%3AN%3A%5D&g=&i=",target:"_blank",rel:"noopener noreferrer"},L=e("code",null,"\\p{N}",-1),E=r(`<p>为了将此验证规则限制在 ASCII 范围内的字符（<code>a-z</code> 和<code>A-Z</code>），你可以为验证规则提供 <code>ascii</code> 选项：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token string single-quoted-string">&#39;username&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;alpha_num:ascii&#39;</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="rule-array"></a></p><h4 id="array" tabindex="-1"><a class="header-anchor" href="#array" aria-hidden="true">#</a> array</h4><p>待验证字段必须是有效的 PHP <code>数组</code>。</p><p>当向 <code>array</code> 规则提供附加值时，输入数组中的每个键都必须出现在提供给规则的值列表中。在以下示例中，输入数组中的 <code>admin</code> 键无效，因为它不包含在提供给 <code>array</code> 规则的值列表中：</p><pre><code>use Illuminate\\Support\\Facades\\Validator;

$input = [
    &#39;user&#39; =&gt; [
        &#39;name&#39; =&gt; &#39;Taylor Otwell&#39;,
        &#39;username&#39; =&gt; &#39;taylorotwell&#39;,
        &#39;admin&#39; =&gt; true,
    ],
];

Validator::make($input, [
    &#39;user&#39; =&gt; &#39;array:name,username&#39;,
]);
</code></pre><p>通常，你应该始终指定允许出现在数组中的数组键。</p><h4 id="ascii" tabindex="-1"><a class="header-anchor" href="#ascii" aria-hidden="true">#</a> ascii</h4><p>正在验证的字段必须完全是 7 位的 ASCII 字符。</p><h4 id="bail" tabindex="-1"><a class="header-anchor" href="#bail" aria-hidden="true">#</a> bail</h4><p>在首次验证失败后立即终止验证。</p><p>虽然 <code>bail</code> 规则只会在遇到验证失败时停止验证特定字段，但 <code>stopOnFirstFailure</code> 方法会通知验证器，一旦发生单个验证失败，它应该停止验证所有属性:</p><pre><code>if ($validator-&gt;stopOnFirstFailure()-&gt;fails()) {
    // ...
}
</code></pre><h4 id="before-date" tabindex="-1"><a class="header-anchor" href="#before-date" aria-hidden="true">#</a> before:<em>date</em></h4><p>待验证字段的值对应的日期必须在给定的日期之前。这个日期将被传递给 PHP 函数 <code>strtotime</code> 以便转化为有效的 <code>DateTime</code> 实例。此外，与 <a href="#rule-after"><code>after</code></a> 规则一致，可以将另外一个待验证的字段作为 <code>date</code> 的值。</p><h4 id="before-or-equal-date" tabindex="-1"><a class="header-anchor" href="#before-or-equal-date" aria-hidden="true">#</a> before_or_equal:<em>date</em></h4><p>待验证字段的值必须是给定日期之前或等于给定日期的值。这个日期将被传递给 PHP 函数 <code>strtotime</code> 以便转化为有效的 <code>DateTime</code> 实例。此外，与 <a href="#rule-after"><code>after</code></a> 规则一致， 可以将另外一个待验证的字段作为 <code>date</code> 的值。</p><h4 id="between-min-max" tabindex="-1"><a class="header-anchor" href="#between-min-max" aria-hidden="true">#</a> between:<em>min</em>,<em>max</em></h4><p>待验证字段值的大小必须介于给定的最小值和最大值（含）之间。字符串、数字、数组和文件的计算方式都使用 <a href="#rule-size"><code>size</code></a> 方法。</p><p><a name="rule-boolean"></a></p><h4 id="boolean" tabindex="-1"><a class="header-anchor" href="#boolean" aria-hidden="true">#</a> boolean</h4><p>验证的字段必须可以转换为 Boolean 类型。 可接受的输入为 <code>true</code>, <code>false</code>, <code>1</code>, <code>0</code>, <code>「1」</code>, 和 <code>「0」</code>。</p><p><a name="rule-confirmed"></a></p><h4 id="confirmed" tabindex="-1"><a class="header-anchor" href="#confirmed" aria-hidden="true">#</a> confirmed</h4><p>验证字段必须与 <code>{field}_confirmation</code> 字段匹配。例如，如果验证字段是 <code>password</code>，则输入中必须存在相应的 <code>password_confirmation</code> 字段。</p><p><a name="rule-current-password"></a></p><h4 id="current-password" tabindex="-1"><a class="header-anchor" href="#current-password" aria-hidden="true">#</a> current_password</h4><p>验证字段必须与已认证用户的密码匹配。 您可以使用规则的第一个参数指定 <a href="./authentication">authentication guard</a>:</p><pre><code>&#39;password&#39; =&gt; &#39;current_password:api&#39;
</code></pre><p><a name="rule-date"></a></p><h4 id="date" tabindex="-1"><a class="header-anchor" href="#date" aria-hidden="true">#</a> date</h4><p>验证字段必须是 <code>strtotime</code> PHP 函数可识别的有效日期。</p><p><a name="rule-date-equals"></a></p><h4 id="date-equals-date" tabindex="-1"><a class="header-anchor" href="#date-equals-date" aria-hidden="true">#</a> date_equals:<em>date</em></h4><p>验证字段必须等于给定日期。日期将传递到 PHP <code>strtotime</code> 函数中，以转换为有效的 <code>DateTime</code> 实例。</p><p><a name="rule-date-format"></a></p><h4 id="date-format-format" tabindex="-1"><a class="header-anchor" href="#date-format-format" aria-hidden="true">#</a> date_format:<em>format</em>,...</h4>`,38),F=e("em",null,"format",-1),z=e("code",null,"date",-1),T=e("code",null,"date_format",-1),C=e("strong",null,"其中一个",-1),D={href:"https://www.php.net/manual/en/class.datetime.php",target:"_blank",rel:"noopener noreferrer"},M=r(`<p><a name="rule-decimal"></a></p><h4 id="decimal-min-max" tabindex="-1"><a class="header-anchor" href="#decimal-min-max" aria-hidden="true">#</a> decimal:<em>min</em>,<em>max</em></h4><p>验证字段必须是数值类型，并且必须包含指定的小数位数：</p><pre><code>// 必须正好有两位小数（例如 9.99）...
&#39;price&#39; =&gt; &#39;decimal:2&#39;

// 必须有 2 到 4 位小数...
&#39;price&#39; =&gt; &#39;decimal:2,4&#39;
</code></pre><p><a name="rule-declined"></a></p><h4 id="declined" tabindex="-1"><a class="header-anchor" href="#declined" aria-hidden="true">#</a> declined</h4><p>正在验证的字段必须是 <code>「no」</code>，<code>「off」</code>，<code>0</code> 或者 <code>false</code>。</p><p><a name="rule-declined-if"></a></p><h4 id="declined-if-anotherfield-value" tabindex="-1"><a class="header-anchor" href="#declined-if-anotherfield-value" aria-hidden="true">#</a> declined_if:anotherfield,value,...</h4><p>如果另一个验证字段的值等于指定值，则验证字段的值必须为<code>「no」</code>、<code>「off」</code>、<code>0</code>或<code>false</code>。</p><p><a name="rule-different"></a></p><h4 id="different-field" tabindex="-1"><a class="header-anchor" href="#different-field" aria-hidden="true">#</a> different:<em>field</em></h4><p>验证的字段值必须与字段 <em>field</em> 的值不同。</p><p><a name="rule-digits"></a></p><h4 id="digits-value" tabindex="-1"><a class="header-anchor" href="#digits-value" aria-hidden="true">#</a> digits:<em>value</em></h4><p>验证的整数必须具有确切长度 <em>value</em> 。</p><p><a name="rule-digits-between"></a></p><h4 id="digits-between-min-max" tabindex="-1"><a class="header-anchor" href="#digits-between-min-max" aria-hidden="true">#</a> digits_between:<em>min</em>,<em>max</em></h4><p>验证的整数长度必须在给定的 <em>min</em> 和 <em>max</em> 之间。</p><p><a name="rule-dimensions"></a></p><h4 id="dimensions" tabindex="-1"><a class="header-anchor" href="#dimensions" aria-hidden="true">#</a> dimensions</h4><p>验证的文件必须是符合规则参数指定尺寸限制的图像：</p><pre><code>&#39;avatar&#39; =&gt; &#39;dimensions:min_width=100,min_height=200&#39;
</code></pre><p>可用的限制条件有: <em>min_width</em> , <em>max_width</em> , <em>min_height</em> , <em>max_height</em> , <em>width</em> , <em>height</em> , <em>ratio</em> .</p><p><em>ratio</em> 约束应该表示为宽度除以高度。 这可以通过像 <code>3/2</code> 这样的语句或像 <code>1.5</code> 这样的浮点数来指定：</p><pre><code>&#39;avatar&#39; =&gt; &#39;dimensions:ratio=3/2&#39;
</code></pre><p>由于此规则需要多个参数，因此你可以 <code>Rule::dimensions</code> 方法来构造可读性高的规则：</p><pre><code>use Illuminate\\Support\\Facades\\Validator;
use Illuminate\\Validation\\Rule;

Validator::make($data, [
    &#39;avatar&#39; =&gt; [
        &#39;required&#39;,
        Rule::dimensions()-&gt;maxWidth(1000)-&gt;maxHeight(500)-&gt;ratio(3 / 2),
    ],
]);
</code></pre><p><a name="rule-distinct"></a></p><h4 id="distinct" tabindex="-1"><a class="header-anchor" href="#distinct" aria-hidden="true">#</a> distinct</h4><p>验证数组时，正在验证的字段不能有任何重复值：</p><pre><code>&#39;foo.*.id&#39; =&gt; &#39;distinct&#39;
</code></pre><p>默认情况下，Distinct 使用松散的变量比较。要使用严格比较，您可以在验证规则定义中添加 <code>strict</code> 参数：</p><pre><code>&#39;foo.*.id&#39; =&gt; &#39;distinct:strict&#39;
</code></pre><p>你可以在验证规则的参数中添加 <code>ignore_case</code> ，以使规则忽略大小写差异：</p><pre><code>&#39;foo.*.id&#39; =&gt; &#39;distinct:ignore_case&#39;
</code></pre><p><a name="rule-doesnt-start-with"></a></p><h4 id="doesnt-start-with-foo-bar" tabindex="-1"><a class="header-anchor" href="#doesnt-start-with-foo-bar" aria-hidden="true">#</a> doesnt_start_with:<em>foo</em>,<em>bar</em>,...</h4><p>验证的字段不能以给定值之一开头。</p><p><a name="rule-doesnt-end-with"></a></p><h4 id="doesnt-end-with-foo-bar" tabindex="-1"><a class="header-anchor" href="#doesnt-end-with-foo-bar" aria-hidden="true">#</a> doesnt_end_with:<em>foo</em>,<em>bar</em>,...</h4><p>验证的字段不能以给定值之一结尾。</p><p><a name="rule-email"></a></p><h4 id="email" tabindex="-1"><a class="header-anchor" href="#email" aria-hidden="true">#</a> email</h4>`,44),H=e("code",null,"e-mail",-1),U={href:"https://github.com/egulias/EmailValidator",target:"_blank",rel:"noopener noreferrer"},B=e("code",null,"egulias/email-validator",-1),N=e("code",null,"RFCValidation",-1),W=e("pre",null,[e("code",null,`'email' => 'email:rfc,dns'
`)],-1),O=e("p",null,[a("上面的示例将应用 "),e("code",null,"RFCValidation"),a(" 和 "),e("code",null,"DNSCheckValidation"),a(" 验证。以下是你可以应用的验证样式的完整列表：")],-1),j=e("div",{class:"content-list",markdown:"1"},[e("ul",null,[e("li",null,[e("code",null,"rfc"),a(": "),e("code",null,"RFCValidation")]),e("li",null,[e("code",null,"strict"),a(": "),e("code",null,"NoRFCWarningsValidation")]),e("li",null,[e("code",null,"dns"),a(": "),e("code",null,"DNSCheckValidation")]),e("li",null,[e("code",null,"spoof"),a(": "),e("code",null,"SpoofCheckValidation")]),e("li",null,[e("code",null,"filter"),a(": "),e("code",null,"FilterEmailValidation")]),e("li",null,[e("code",null,"filter_unicode"),a(": "),e("code",null,"FilterEmailValidation::unicode()")])])],-1),J=r(`<p><code>filter</code> 验证器是 Laravel 内置的一个验证器，它使用 PHP 的 <code>filter_var</code> 函数实现。在 Laravel 5.8 版本之前，它是 Laravel 默认的电子邮件验证行为。</p><blockquote><p><strong>注意</strong><br><code>dns</code> 和 <code>spoof</code> 验证器需要 PHP 的 <code>intl</code> 扩展。</p></blockquote><p><a name="rule-ends-with"></a></p><h4 id="ends-with-foo-bar" tabindex="-1"><a class="header-anchor" href="#ends-with-foo-bar" aria-hidden="true">#</a> ends_with:<em>foo</em>,<em>bar</em>,...</h4><p>被验证的字段必须以给定值之一结尾。</p><p><a name="rule-enum"></a></p><h4 id="enum" tabindex="-1"><a class="header-anchor" href="#enum" aria-hidden="true">#</a> enum</h4><p><code>Enum</code> 规则是一种基于类的规则，用于验证被验证字段是否包含有效的枚举值。 <code>Enum</code> 规则的构造函数只接受枚举的名称作为参数：</p><pre><code>use App\\Enums\\ServerStatus;
use Illuminate\\Validation\\Rules\\Enum;

$request-&gt;validate([
    &#39;status&#39; =&gt; [new Enum(ServerStatus::class)],
]);
</code></pre><p><a name="rule-exclude"></a></p><h4 id="exclude" tabindex="-1"><a class="header-anchor" href="#exclude" aria-hidden="true">#</a> exclude</h4><p><code>validate</code> 和 <code>validated</code> 方法中会排除掉当前验证的字段。</p><p><a name="rule-exclude-if"></a></p><h4 id="exclude-if-anotherfield-value" tabindex="-1"><a class="header-anchor" href="#exclude-if-anotherfield-value" aria-hidden="true">#</a> exclude_if:<em>anotherfield</em>,<em>value</em></h4><p>如果 <em>anotherfield</em> 等于 <em>value</em> ，<code>validate</code> 和 <code>validated</code> 方法中会排除掉当前验证的字段。</p><p>在一些复杂的场景，也可以使用 <code>Rule::excludeIf</code> 方法，这个方法需要返回一个布尔值或者一个匿名函数。如果返回的是匿名函数，那么这个函数应该返回 <code>true</code> 或 <code>false</code>去决定被验证的字段是否应该被排除掉：</p><pre><code>use Illuminate\\Support\\Facades\\Validator;
use Illuminate\\Validation\\Rule;

Validator::make($request-&gt;all(), [
    &#39;role_id&#39; =&gt; Rule::excludeIf($request-&gt;user()-&gt;is_admin),
]);

Validator::make($request-&gt;all(), [
    &#39;role_id&#39; =&gt; Rule::excludeIf(fn () =&gt; $request-&gt;user()-&gt;is_admin),
]);
</code></pre><p><a name="rule-exclude-unless"></a></p><h4 id="exclude-unless-anotherfield-value" tabindex="-1"><a class="header-anchor" href="#exclude-unless-anotherfield-value" aria-hidden="true">#</a> exclude_unless:<em>anotherfield</em>,<em>value</em></h4><p>除非 <em>anotherfield</em> 等于 <em>value</em> ，否则 <code>validate</code> 和 <code>validated</code> 方法中会排除掉当前的字段。如果 <em>value</em> 为 <code>null</code> （<code>exclude_unless:name,null</code>），那么成立的条件就是被比较的字段为 <code>null</code> 或者表单中没有该字段。</p><p><a name="rule-exclude-with"></a></p><h4 id="exclude-with-anotherfield" tabindex="-1"><a class="header-anchor" href="#exclude-with-anotherfield" aria-hidden="true">#</a> exclude_with:<em>anotherfield</em></h4><p>如果表单数据中有 <em>anotherfield</em> ，<code>validate</code> 和 <code>validated</code> 方法中会排除掉当前的字段。</p><p><a name="rule-exclude-without"></a></p><h4 id="exclude-without-anotherfield" tabindex="-1"><a class="header-anchor" href="#exclude-without-anotherfield" aria-hidden="true">#</a> exclude_without:<em>anotherfield</em></h4><p>如果表单数据中没有 <em>anotherfield</em> ，<code>validate</code> 和 <code>validated</code> 方法中会排除掉当前的字段。</p><p><a name="rule-exists"></a></p><h4 id="exists-table-column" tabindex="-1"><a class="header-anchor" href="#exists-table-column" aria-hidden="true">#</a> exists:<em>table</em>,<em>column</em></h4><p>验证的字段值必须存在于指定的表中。</p><p><a name="basic-usage-of-exists-rule"></a></p><h4 id="exists-规则的基本用法" tabindex="-1"><a class="header-anchor" href="#exists-规则的基本用法" aria-hidden="true">#</a> Exists 规则的基本用法</h4><pre><code>&#39;state&#39; =&gt; &#39;exists:states&#39;
</code></pre><p>如果未指定 <code>column</code> 选项，则将使用字段名称。因此，在这种情况下，该规则将验证 <code>states</code> 数据库表是否包含一条记录，该记录的 <code>state</code> 列的值与请求的 <code>state</code> 属性值匹配。</p><p><a name="specifying-a-custom-column-name"></a></p><h4 id="指定自定义列名" tabindex="-1"><a class="header-anchor" href="#指定自定义列名" aria-hidden="true">#</a> 指定自定义列名</h4><p>你可以将验证规则使用的数据库列名称指定在数据库表名称之后：</p><pre><code>&#39;state&#39; =&gt; &#39;exists:states,abbreviation&#39;
</code></pre><p>有时候，你或许需要去明确指定一个具体的数据库连接，用于 <code>exists</code> 查询。你可以通过在表名前面添加一个连接名称来实现这个效果。</p><pre><code>&#39;email&#39; =&gt; &#39;exists:connection.staff,email&#39;
</code></pre><p>你可以明确指定 Eloquent 模型，而不是直接指定表名：</p><pre><code>&#39;user_id&#39; =&gt; &#39;exists:App\\Models\\User,id&#39;
</code></pre><p>如果你想要自定义一个执行查询的验证规则，你可以使用 <code>Rule</code> 类去流畅地定义规则。在这个例子中，我们也将指定验证规则为一个数组，而不再是使用 <code>|</code> 分割他们：</p><pre><code>use Illuminate\\Database\\Query\\Builder;
use Illuminate\\Support\\Facades\\Validator;
use Illuminate\\Validation\\Rule;

Validator::make($data, [
    &#39;email&#39; =&gt; [
        &#39;required&#39;,
        Rule::exists(&#39;staff&#39;)-&gt;where(function (Builder $query) {
            return $query-&gt;where(&#39;account_id&#39;, 1);
        }),
    ],
]);
</code></pre><p>您可以通过将列名作为 <code>exists</code> 方法的第二个参数来明确指定 <code>Rule::exists</code> 方法生成的 <code>exists</code> 规则应该使用的数据库列名：</p><pre><code>&#39;state&#39; =&gt; Rule::exists(&#39;states&#39;, &#39;abbreviation&#39;),
</code></pre><p><a name="rule-file"></a></p><h4 id="file" tabindex="-1"><a class="header-anchor" href="#file" aria-hidden="true">#</a> file</h4><p>要验证的字段必须是一个成功的已经上传的文件。</p><p><a name="rule-filled"></a></p><h4 id="filled" tabindex="-1"><a class="header-anchor" href="#filled" aria-hidden="true">#</a> filled</h4><p>当字段存在时，要验证的字段必须是一个非空的。</p><p><a name="rule-gt"></a></p><h4 id="gt-field" tabindex="-1"><a class="header-anchor" href="#gt-field" aria-hidden="true">#</a> gt:<em>field</em></h4><p>要验证的字段必须要大于给定的字段。这两个字段必须是同一个类型。字符串、数字、数组和文件都使用 <a href="#rule-size"><code>size</code></a> 进行相同的评估。</p><p><a name="rule-gte"></a></p><h4 id="gte-field" tabindex="-1"><a class="header-anchor" href="#gte-field" aria-hidden="true">#</a> gte:<em>field</em></h4><p>要验证的字段必须要大于或等于给定的字段。这两个字段必须是同一个类型。字符串、数字、数组和文件都使用 <a href="#rule-size"><code>size</code></a> 进行相同的评估。</p><p><a name="rule-image"></a></p><h4 id="image" tabindex="-1"><a class="header-anchor" href="#image" aria-hidden="true">#</a> image</h4><p>正在验证的文件必须是图像（jpg、jpeg、png、bmp、gif、svg 或 webp）。</p><p><a name="rule-in"></a></p><h4 id="in-foo-bar" tabindex="-1"><a class="header-anchor" href="#in-foo-bar" aria-hidden="true">#</a> in:<em>foo</em>,<em>bar</em>,...</h4><p>验证字段必须包含在给定的值列表中。由于此规则通常要求你 <code>implode</code> 数组，因此可以使用 <code>Rule::in</code> 方法来流畅地构造规则:</p><pre><code>use Illuminate\\Support\\Facades\\Validator;
use Illuminate\\Validation\\Rule;

Validator::make($data, [
    &#39;zones&#39; =&gt; [
        &#39;required&#39;,
        Rule::in([&#39;first-zone&#39;, &#39;second-zone&#39;]),
    ],
]);
</code></pre><p>当 <code>in</code> 规则与 <code>array</code> 规则组合使用时，输入数组中的每个值都必须出现在提供给 <code>in</code> 规则的值列表中。 在以下示例中，输入数组中的<code>LAS</code> 机场代码无效，因为它不包含在提供给 <code>in</code> 规则的机场列表中：</p><pre><code>use Illuminate\\Support\\Facades\\Validator;
use Illuminate\\Validation\\Rule;

$input = [
    &#39;airports&#39; =&gt; [&#39;NYC&#39;, &#39;LAS&#39;],
];

Validator::make($input, [
    &#39;airports&#39; =&gt; [
        &#39;required&#39;,
        &#39;array&#39;,
    ],
    &#39;airports.*&#39; =&gt; Rule::in([&#39;NYC&#39;, &#39;LIT&#39;]),
]);
</code></pre><p><a name="rule-in-array"></a></p><h4 id="in-array-anotherfield" tabindex="-1"><a class="header-anchor" href="#in-array-anotherfield" aria-hidden="true">#</a> in_array:<em>anotherfield</em>.*</h4><p>验证的字段必须存在于_anotherfield_的值中。</p><p><a name="rule-integer"></a></p><h4 id="integer" tabindex="-1"><a class="header-anchor" href="#integer" aria-hidden="true">#</a> integer</h4><p>验证的字段必须是一个整数。</p><p><strong>警告</strong> 这个验证规则并不会验证输入是否为&quot;integer&quot;变量类型，它只会验证输入是否为 PHP 的 <code>FILTER_VALIDATE_INT</code> 规则接受的类型。如果你需要验证输入是否为数字，请结合 <a href="#rule-numeric">numeric</a> 验证规则使用。</p><p><a name="rule-ip"></a></p><h4 id="ip" tabindex="-1"><a class="header-anchor" href="#ip" aria-hidden="true">#</a> ip</h4><p>验证的字段必须是一个 IP 地址。</p><p><a name="ipv4"></a></p><h4 id="ipv4" tabindex="-1"><a class="header-anchor" href="#ipv4" aria-hidden="true">#</a> ipv4</h4><p>验证的字段必须是一个 IPv4 地址。</p><p><a name="ipv6"></a></p><h4 id="ipv6" tabindex="-1"><a class="header-anchor" href="#ipv6" aria-hidden="true">#</a> ipv6</h4><p>验证的字段必须是一个 IPv6 地址。</p><p><a name="rule-json"></a></p><h4 id="json" tabindex="-1"><a class="header-anchor" href="#json" aria-hidden="true">#</a> json</h4><p>验证的字段必须是一个有效的 JSON 字符串。</p><p><a name="rule-lt"></a></p><h4 id="lt-field" tabindex="-1"><a class="header-anchor" href="#lt-field" aria-hidden="true">#</a> lt:<em>field</em></h4><p>验证的字段必须小于给定的 <em>field</em> 字段。两个字段必须是相同的类型。字符串、数字、数组和文件的处理方式与 <a href="#rule-size"><code>size</code></a> 规则相同。</p><p><a name="rule-lte"></a></p><h4 id="lte-field" tabindex="-1"><a class="header-anchor" href="#lte-field" aria-hidden="true">#</a> lte:<em>field</em></h4><p>验证的字段必须小于或等于给定的 <em>field</em> 字段。两个字段必须是相同的类型。字符串、数字、数组和文件的处理方式与 <a href="#rule-size"><code>size</code></a> 规则相同。</p><p><a name="rule-lowercase"></a></p><h4 id="lowercase" tabindex="-1"><a class="header-anchor" href="#lowercase" aria-hidden="true">#</a> lowercase</h4><p>验证的字段必须是小写的。</p><p><a name="rule-mac"></a></p><h4 id="mac-address" tabindex="-1"><a class="header-anchor" href="#mac-address" aria-hidden="true">#</a> mac_address</h4><p>验证的字段必须是一个 MAC 地址。</p><p><a name="rule-max"></a></p><h4 id="max-value" tabindex="-1"><a class="header-anchor" href="#max-value" aria-hidden="true">#</a> max:<em>value</em></h4><p>验证的字段的值必须小于或等于最大值 <em>value</em>。字符串、数字、数组和文件的处理方式与 <a href="#rule-size"><code>size</code></a> 规则相同。</p><p><a name="rule-max-digits"></a></p><h4 id="max-digits-value" tabindex="-1"><a class="header-anchor" href="#max-digits-value" aria-hidden="true">#</a> max_digits:<em>value</em></h4><p>验证的整数必须具有最大长度 value。</p><p><a name="rule-mimetypes"></a></p><h4 id="mimetypes-text-plain" tabindex="-1"><a class="header-anchor" href="#mimetypes-text-plain" aria-hidden="true">#</a> mimetypes:<em>text/plain</em>,...</h4><p>验证的文件必须匹配给定的 MIME 类型之一：</p><pre><code>&#39;video&#39; =&gt; &#39;mimetypes:video/avi,video/mpeg,video/quicktime&#39;
</code></pre><p>为了确定上传文件的 MIME 类型，将读取文件内容并尝试猜测 MIME 类型，这可能与客户端提供的 MIME 类型不同。</p><p><a name="rule-mimes"></a></p><h4 id="mimes-foo-bar" tabindex="-1"><a class="header-anchor" href="#mimes-foo-bar" aria-hidden="true">#</a> mimes:<em>foo</em>,<em>bar</em>,...</h4><p>验证的文件必须具有与列出的扩展名之一对应的 MIME 类型。</p><p><a name="basic-usage-of-mime-rule"></a></p><h4 id="mime-规则的基本用法" tabindex="-1"><a class="header-anchor" href="#mime-规则的基本用法" aria-hidden="true">#</a> MIME 规则的基本用法</h4><pre><code>&#39;photo&#39; =&gt; &#39;mimes:jpg,bmp,png&#39;
</code></pre><p>尽管您只需要指定扩展名，但该规则实际上通过读取文件内容并猜测其 MIME 类型来验证文件的 MIME 类型。可以在以下位置找到 MIME 类型及其相应扩展名的完整列表：</p>`,115),X={href:"https://svn.apache.org/repos/asf/httpd/httpd/trunk/docs/conf/mime.types",target:"_blank",rel:"noopener noreferrer"},Z=r(`<p><a name="rule-min"></a></p><h4 id="min-value" tabindex="-1"><a class="header-anchor" href="#min-value" aria-hidden="true">#</a> min:<em>value</em></h4><p>验证的字段的值必须大于或等于最小值 <em>value</em>。字符串、数字、数组和文件的处理方式与 <a href="#rule-size"><code>size</code></a> 规则相同。</p><p><a name="rule-min-digits"></a></p><h4 id="min-digits-value" tabindex="-1"><a class="header-anchor" href="#min-digits-value" aria-hidden="true">#</a> min_digits:<em>value</em></h4><p>验证的整数必须具有至少_value_位数。</p><p><a name="rule-multiple-of"></a></p><h4 id="multiple-of-value" tabindex="-1"><a class="header-anchor" href="#multiple-of-value" aria-hidden="true">#</a> multiple_of:<em>value</em></h4><p>验证的字段必须是_value_的倍数。</p><p><a name="rule-missing"></a></p><h4 id="missing" tabindex="-1"><a class="header-anchor" href="#missing" aria-hidden="true">#</a> missing</h4><p>验证的字段在输入数据中必须不存在。</p><p><a name="rule-missing-if"></a></p><h4 id="missing-if-anotherfield-value" tabindex="-1"><a class="header-anchor" href="#missing-if-anotherfield-value" aria-hidden="true">#</a> missing_if:<em>anotherfield</em>,<em>value</em>,...</h4><p>如果_anotherfield_字段等于任何_value_，则验证的字段必须不存在。</p><p><a name="rule-missing-unless"></a></p><h4 id="missing-unless-anotherfield-value" tabindex="-1"><a class="header-anchor" href="#missing-unless-anotherfield-value" aria-hidden="true">#</a> missing_unless:<em>anotherfield</em>,<em>value</em></h4><p>验证的字段必须不存在，除非_anotherfield_字段等于任何_value_。</p><p><a name="rule-missing-with"></a></p><h4 id="missing-with-foo-bar" tabindex="-1"><a class="header-anchor" href="#missing-with-foo-bar" aria-hidden="true">#</a> missing_with:<em>foo</em>,<em>bar</em>,...</h4><p>如果任何其他指定的字段存在，则验证的字段必须不存在。</p><p><a name="rule-missing-with-all"></a></p><h4 id="missing-with-all-foo-bar" tabindex="-1"><a class="header-anchor" href="#missing-with-all-foo-bar" aria-hidden="true">#</a> missing_with_all:<em>foo</em>,<em>bar</em>,...</h4><p>如果所有其他指定的字段都存在，则验证的字段必须不存在。</p><p><a name="rule-not-in"></a></p><h4 id="not-in-foo-bar" tabindex="-1"><a class="header-anchor" href="#not-in-foo-bar" aria-hidden="true">#</a> not_in:<em>foo</em>,<em>bar</em>,...</h4><p>验证的字段不能包含在给定值列表中。可以使用<code>Rule::notIn</code>方法流畅地构建规则：</p><pre><code>use Illuminate\\Validation\\Rule;

Validator::make($data, [
    &#39;toppings&#39; =&gt; [
        &#39;required&#39;,
        Rule::notIn([&#39;sprinkles&#39;, &#39;cherries&#39;]),
    ],
]);
</code></pre><p><a name="rule-not-regex"></a></p><h4 id="not-regex-pattern" tabindex="-1"><a class="header-anchor" href="#not-regex-pattern" aria-hidden="true">#</a> not_regex:<em>pattern</em></h4><p>验证的字段必须不匹配给定的正则表达式。</p><p>在内部，此规则使用PHP的<code>preg_match</code>函数。指定的模式应遵守<code>preg_match</code>所需的相同格式要求，因此也应包括有效的分隔符。例如：<code>&#39;email&#39; =&gt; &#39;not_regex:/^.+$/i&#39;</code>。</p><p><strong>警告</strong> 使用<code>regex</code> / <code>not_regex</code>模式时，可能需要使用数组指定验证规则，而不是使用<code>|</code>分隔符，特别是如果正则表达式包含<code>|</code>字符。</p><p><a name="rule-nullable"></a></p><h4 id="nullable" tabindex="-1"><a class="header-anchor" href="#nullable" aria-hidden="true">#</a> nullable</h4><p>需要验证的字段可以为 null。</p><p><a name="rule-numeric"></a></p><h4 id="numeric" tabindex="-1"><a class="header-anchor" href="#numeric" aria-hidden="true">#</a> numeric</h4>`,38),G={href:"https://www.php.net/manual/en/function.is-numeric.php",target:"_blank",rel:"noopener noreferrer"},K=r('<p><a name="rule-password"></a></p><h4 id="password" tabindex="-1"><a class="header-anchor" href="#password" aria-hidden="true">#</a> password</h4><p>需要验证的字段必须与已认证用户的密码相匹配。</p><blockquote><p><strong>警告</strong> 这个规则在 Laravel 9 中被重命名为 <code>current_password</code> 并计划删除，请改用 <a href="#rule-current-password">Current Password</a> 规则。</p></blockquote><p><a name="rule-present"></a></p><h4 id="present" tabindex="-1"><a class="header-anchor" href="#present" aria-hidden="true">#</a> present</h4><p>需要验证的字段必须存在于输入数据中。</p><p><a name="rule-prohibited"></a></p><h4 id="prohibited" tabindex="-1"><a class="header-anchor" href="#prohibited" aria-hidden="true">#</a> prohibited</h4><p>需要验证的字段必须不存在或为空。如果符合以下条件之一，字段将被认为是“空”：</p>',10),Y=e("div",{class:"content-list",markdown:"1"},[e("ul",null,[e("li",null,[a("值为 "),e("code",null,"null"),a("。")]),e("li",null,"值为空字符串。"),e("li",null,"值为空数组或空的可计数对象。"),e("li",null,"值为上传文件，但文件路径为空。")])],-1),Q=e("p",null,[e("a",{name:"rule-prohibited-if"})],-1),ee=e("h4",{id:"prohibited-if-anotherfield-value",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#prohibited-if-anotherfield-value","aria-hidden":"true"},"#"),a(" prohibited_if:"),e("em",null,"anotherfield"),a(","),e("em",null,"value"),a(",...")],-1),ae=e("p",null,"如果 anotherfield 字段等于任何 value，则需要验证的字段必须不存在或为空。如果符合以下条件之一，字段将被认为是“空”：",-1),ne=e("div",{class:"content-list",markdown:"1"},[e("ul",null,[e("li",null,[a("值为 "),e("code",null,"null"),a("。")]),e("li",null,"值为空字符串。"),e("li",null,"值为空数组或空的可计数对象。"),e("li",null,"值为上传文件，但文件路径为空。")])],-1),ie=r(`<p>如果需要复杂的条件禁止逻辑，则可以使用 <code>Rule::prohibitedIf</code> 方法。该方法接受一个布尔值或一个闭包。当给定一个闭包时，闭包应返回 <code>true</code> 或 <code>false</code>，以指示是否应禁止验证字段：</p><pre><code>use Illuminate\\Support\\Facades\\Validator;
use Illuminate\\Validation\\Rule;

Validator::make($request-&gt;all(), [
    &#39;role_id&#39; =&gt; Rule::prohibitedIf($request-&gt;user()-&gt;is_admin),
]);

Validator::make($request-&gt;all(), [
    &#39;role_id&#39; =&gt; Rule::prohibitedIf(fn () =&gt; $request-&gt;user()-&gt;is_admin),
]);
</code></pre><p><a name="rule-prohibited-unless"></a></p><h4 id="prohibited-unless-anotherfield-value" tabindex="-1"><a class="header-anchor" href="#prohibited-unless-anotherfield-value" aria-hidden="true">#</a> prohibited_unless:<em>anotherfield</em>,<em>value</em>,...</h4><p>在 anotherfield 字段等于任何 value 时，验证的字段必须为空或缺失。如果一个字段符合以下任一标准，则它被认为是“空”的：</p>`,5),re=e("div",{class:"content-list",markdown:"1"},[e("ul",null,[e("li",null,[a("值为 "),e("code",null,"null"),a("。")]),e("li",null,"值为空字符串。"),e("li",null,[a("值为一个空数组或一个空的 "),e("code",null,"Countable"),a(" 对象。")]),e("li",null,"值为上传文件且路径为空。")])],-1),de=e("p",null,[e("a",{name:"rule-prohibits"})],-1),te=e("h4",{id:"prohibits-anotherfield",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#prohibits-anotherfield","aria-hidden":"true"},"#"),a(" prohibits:"),e("em",null,"anotherfield"),a(",...")],-1),se=e("p",null,"如果验证的字段不为空或缺失，则 anotherfield 中的所有字段都必须为空或缺失。如果一个字段符合以下任一标准，则它被认为是“空”的：",-1),oe=e("div",{class:"content-list",markdown:"1"},[e("ul",null,[e("li",null,[a("值为 "),e("code",null,"null"),a("。")]),e("li",null,"值为空字符串。"),e("li",null,[a("值为一个空数组或一个空的 "),e("code",null,"Countable"),a(" 对象。")]),e("li",null,"值为上传文件且路径为空。")])],-1),le=r('<p><a name="rule-regex"></a></p><h4 id="regex-pattern" tabindex="-1"><a class="header-anchor" href="#regex-pattern" aria-hidden="true">#</a> regex:<em>pattern</em></h4><p>验证的字段必须匹配给定的正则表达式。</p><p>在内部，此规则使用 PHP 的 <code>preg_match</code> 函数。指定的模式应遵循 <code>preg_match</code> 所需的相同格式，并且也包括有效的分隔符。例如：<code>&#39;email&#39; =&gt; &#39;regex:/^.+@.+$/i&#39;</code>。</p><blockquote><p><strong>警告</strong> 当使用 <code>regex</code> / <code>not_regex</code> 模式时，可能需要使用数组指定规则而不是使用 <code>|</code> 分隔符，特别是如果正则表达式包含 <code>|</code> 字符。</p></blockquote><p><a name="rule-required"></a></p><h4 id="required" tabindex="-1"><a class="header-anchor" href="#required" aria-hidden="true">#</a> required</h4><p>验证的字段必须出现在输入数据中且不为空。如果一个字段符合以下任一标准，则它被认为是“空”的：</p>',8),ce=e("div",{class:"content-list",markdown:"1"},[e("ul",null,[e("li",null,[a("值为 "),e("code",null,"null"),a("。")]),e("li",null,"值为空字符串。"),e("li",null,[a("值为一个空数组或一个空的 "),e("code",null,"Countable"),a(" 对象。")]),e("li",null,"值为上传文件且路径为空。")])],-1),ue=r(`<p><a name="rule-required-if"></a></p><h4 id="required-if-anotherfield-value" tabindex="-1"><a class="header-anchor" href="#required-if-anotherfield-value" aria-hidden="true">#</a> required_if:<em>anotherfield</em>,<em>value</em>,...</h4><p>如果 anotherfield 字段的值等于任何 value 值，则验证的字段必须存在且不为空。</p><p>如果您想要构建更复杂的 <code>required_if</code> 规则条件，可以使用 <code>Rule::requiredIf</code> 方法。该方法接受一个布尔值或闭包。当传递一个闭包时，闭包应返回 <code>true</code> 或 <code>false</code> 来指示是否需要验证的字段：</p><pre><code>use Illuminate\\Support\\Facades\\Validator;
use Illuminate\\Validation\\Rule;

Validator::make($request-&gt;all(), [
    &#39;role_id&#39; =&gt; Rule::requiredIf($request-&gt;user()-&gt;is_admin),
]);

Validator::make($request-&gt;all(), [
    &#39;role_id&#39; =&gt; Rule::requiredIf(fn () =&gt; $request-&gt;user()-&gt;is_admin),
]);
</code></pre><p><a name="rule-required-unless"></a></p><h4 id="required-unless-anotherfield-value" tabindex="-1"><a class="header-anchor" href="#required-unless-anotherfield-value" aria-hidden="true">#</a> required_unless:<em>anotherfield</em>,<em>value</em>,...</h4><p>如果 <em>anotherfield</em> 字段的值不等于任何 <em>value</em> 值，则验证的字段必须存在且不为空。这也意味着，除非 <em>anotherfield</em> 字段等于任何 <em>value</em> 值，否则必须在请求数据中包含 <em>anotherfield</em> 字段。如果 <em>value</em> 的值为 <code>null</code> （<code>required_unless:name,null</code>），则必须验证该字段，除非比较字段是 <code>null</code> 或比较字段不存在于请求数据中。</p><p><a name="rule-required-with"></a></p><h4 id="required-with-foo-bar" tabindex="-1"><a class="header-anchor" href="#required-with-foo-bar" aria-hidden="true">#</a> required_with:<em>foo</em>,<em>bar</em>,...</h4><p>仅当任何其他指定字段存在且不为空时，才需要验证字段存在且不为空。</p><p><a name="rule-required-with-all"></a></p><h4 id="required-with-all-foo-bar" tabindex="-1"><a class="header-anchor" href="#required-with-all-foo-bar" aria-hidden="true">#</a> required_with_all:<em>foo</em>,<em>bar</em>,...</h4><p>仅当所有其他指定字段存在且不为空时，才需要验证字段存在且不为空。</p><p><a name="rule-required-without"></a></p><h4 id="required-without-foo-bar" tabindex="-1"><a class="header-anchor" href="#required-without-foo-bar" aria-hidden="true">#</a> required_without:<em>foo</em>,<em>bar</em>,...</h4><p>验证的字段仅在任一其他指定字段为空或不存在时，必须存在且不为空。</p><p><a name="rule-required-without-all"></a></p><h4 id="required-without-all-foo-bar" tabindex="-1"><a class="header-anchor" href="#required-without-all-foo-bar" aria-hidden="true">#</a> required_without_all:<em>foo</em>,<em>bar</em>,...</h4><p>验证的字段仅在所有其他指定字段为空或不存在时，必须存在且不为空。</p><p><a name="rule-required-array-keys"></a></p><h4 id="required-array-keys-foo-bar" tabindex="-1"><a class="header-anchor" href="#required-array-keys-foo-bar" aria-hidden="true">#</a> required_array_keys:<em>foo</em>,<em>bar</em>,...</h4><p>验证的字段必须是一个数组，并且必须至少包含指定的键。</p><p><a name="rule-same"></a></p><h4 id="same-field" tabindex="-1"><a class="header-anchor" href="#same-field" aria-hidden="true">#</a> same:<em>field</em></h4><p>给定的字段必须与验证的字段匹配。</p><p><a name="rule-size"></a></p><h4 id="size-value" tabindex="-1"><a class="header-anchor" href="#size-value" aria-hidden="true">#</a> size:<em>value</em></h4><p>验证的字段必须具有与给定的_value相匹配的大小。对于字符串数据，value 对应于字符数。对于数字数据，value 对应于给定的整数值（该属性还必须具有 numeric 或 integer 规则）。对于数组，size 对应于数组的 count。对于文件，size 对应于文件大小（以千字节为单位）。让我们看一些例子：</p><pre><code>// Validate that a string is exactly 12 characters long...
&#39;title&#39; =&gt; &#39;size:12&#39;;

// Validate that a provided integer equals 10...
&#39;seats&#39; =&gt; &#39;integer|size:10&#39;;

// Validate that an array has exactly 5 elements...
&#39;tags&#39; =&gt; &#39;array|size:5&#39;;

// Validate that an uploaded file is exactly 512 kilobytes...
&#39;image&#39; =&gt; &#39;file|size:512&#39;;
</code></pre><p><a name="rule-starts-with"></a></p><h4 id="starts-with-foo-bar" tabindex="-1"><a class="header-anchor" href="#starts-with-foo-bar" aria-hidden="true">#</a> starts_with:<em>foo</em>,<em>bar</em>,...</h4><p>验证的字段必须以给定值之一开头。</p><p><a name="rule-string"></a></p><h4 id="string" tabindex="-1"><a class="header-anchor" href="#string" aria-hidden="true">#</a> string</h4><p>验证的字段必须是一个字符串。如果您希望允许字段也可以为 <code>null</code>，则应将 <code>nullable</code> 规则分配给该字段。</p><p><a name="rule-timezone"></a></p><h4 id="时区" tabindex="-1"><a class="header-anchor" href="#时区" aria-hidden="true">#</a> 时区</h4><p>验证字段必须是一个有效的时区标识符，符合 <code>timezone_identifiers_list</code> PHP 函数的要求。</p><p><a name="rule-unique"></a></p><h4 id="unique-table-column" tabindex="-1"><a class="header-anchor" href="#unique-table-column" aria-hidden="true">#</a> unique:<em>table</em>,<em>column</em></h4><p>验证字段在给定的数据库表中必须不存在。</p><p><strong>指定自定义表/列名:</strong></p><p>可以指定应使用哪个 Eloquent 模型来确定表名，而不是直接指定表名：</p><pre><code>&#39;email&#39; =&gt; &#39;unique:App\\Models\\User,email_address&#39;
</code></pre><p><code>column</code> 选项可用于指定字段对应的数据库列。如果未指定 <code>column</code> 选项，则使用验证字段的名称。</p><pre><code>&#39;email&#39; =&gt; &#39;unique:users,email_address&#39;
</code></pre><p><strong>指定自定义数据库连接</strong></p><p>有时，您可能需要为 Validator 执行的数据库查询设置自定义连接。为此，可以在表名之前添加连接名称：</p><pre><code>&#39;email&#39; =&gt; &#39;unique:connection.users,email_address&#39;
</code></pre><p><strong>强制唯一规则忽略给定的 ID:</strong></p><p>有时，您可能希望在唯一验证期间忽略给定的 ID。例如，考虑一个“更新个人资料”屏幕，其中包括用户的姓名、电子邮件地址和位置。您可能希望验证电子邮件地址是否唯一。但是，如果用户仅更改了名称字段而未更改电子邮件字段，则不希望因为用户已经拥有相关电子邮件地址而抛出验证错误。</p><p>要指示验证器忽略用户的 ID，我们将使用 <code>Rule</code> 类来流畅地定义规则。在此示例中，我们还将指定验证规则作为数组，而不是使用 <code>|</code> 字符来分隔规则：</p><pre><code>use Illuminate\\Database\\Eloquent\\Builder;
use Illuminate\\Support\\Facades\\Validator;
use Illuminate\\Validation\\Rule;

Validator::make($data, [
    &#39;email&#39; =&gt; [
        &#39;required&#39;,
        Rule::unique(&#39;users&#39;)-&gt;ignore($user-&gt;id),
    ],
]);
</code></pre><blockquote><p><strong>警告</strong> 您不应将任何用户控制的请求输入传递到 <code>ignore</code> 方法中。相反，您应仅传递系统生成的唯一 ID，例如 Eloquent 模型实例的自增 ID 或 UUID。否则，您的应用程序将容易受到 SQL 注入攻击。</p></blockquote><p>不需要将模型键的值传递给 <code>ignore</code> 方法，您也可以传递整个模型实例。Laravel 将自动从模型中提取键：</p><pre><code>Rule::unique(&#39;users&#39;)-&gt;ignore($user)
</code></pre><p>如果您的表使用的是除 <code>id</code> 以外的主键列名，可以在调用 <code>ignore</code> 方法时指定列的名称：</p><pre><code>Rule::unique(&#39;users&#39;)-&gt;ignore($user-&gt;id, &#39;user_id&#39;)
</code></pre><p>默认情况下，<code>unique</code> 规则将检查与正在验证的属性名称匹配的列的唯一性。但是，您可以将不同的列名称作为第二个参数传递给 <code>unique</code> 方法：</p><pre><code>Rule::unique(&#39;users&#39;, &#39;email_address&#39;)-&gt;ignore($user-&gt;id)
</code></pre><p><strong>添加额外的查询条件：</strong></p><p>您可以通过自定义查询并使用 <code>where</code> 方法来指定其他查询条件。例如，让我们添加一个查询条件，将查询范围限定为仅搜索具有 <code>account_id</code> 列值为 <code>1</code> 的记录：</p><pre><code>&#39;email&#39; =&gt; Rule::unique(&#39;users&#39;)-&gt;where(fn (Builder $query) =&gt; $query-&gt;where(&#39;account_id&#39;, 1))
</code></pre><p><a name="rule-uppercase"></a></p><h4 id="uppercase" tabindex="-1"><a class="header-anchor" href="#uppercase" aria-hidden="true">#</a> uppercase</h4><p>验证字段必须为大写。</p><p><a name="rule-url"></a></p><h4 id="url" tabindex="-1"><a class="header-anchor" href="#url" aria-hidden="true">#</a> url</h4><p>验证字段必须为有效的 URL。</p><p><a name="rule-ulid"></a></p><h4 id="ulid" tabindex="-1"><a class="header-anchor" href="#ulid" aria-hidden="true">#</a> ulid</h4>`,72),pe={href:"https://github.com/ulid/spec",target:"_blank",rel:"noopener noreferrer"},he=r(`<p><a name="rule-uuid"></a></p><h4 id="uuid" tabindex="-1"><a class="header-anchor" href="#uuid" aria-hidden="true">#</a> uuid</h4><p>验证字段必须为有效的 RFC 4122（版本1、3、4或5）通用唯一标识符（UUID）。</p><p><a name="conditionally-adding-rules"></a></p><h2 id="有条件添加规则" tabindex="-1"><a class="header-anchor" href="#有条件添加规则" aria-hidden="true">#</a> 有条件添加规则</h2><p><a name="skipping-validation-when-fields-have-certain-values"></a></p><h4 id="当字段具有特定值时跳过验证" tabindex="-1"><a class="header-anchor" href="#当字段具有特定值时跳过验证" aria-hidden="true">#</a> 当字段具有特定值时跳过验证</h4><p>有时，您可能希望在给定字段具有特定值时不验证另一个字段。您可以使用<code>exclude_if</code>验证规则来实现这一点。在下面的示例中，如果<code>has_appointment</code>字段的值为<code>false</code>，则不会验证<code>appointment_date</code>和<code>doctor_name</code>字段：</p><pre><code>use Illuminate\\Support\\Facades\\Validator;

$validator = Validator::make($data, [
    &#39;has_appointment&#39; =&gt; &#39;required|boolean&#39;,
    &#39;appointment_date&#39; =&gt; &#39;exclude_if:has_appointment,false|required|date&#39;,
    &#39;doctor_name&#39; =&gt; &#39;exclude_if:has_appointment,false|required|string&#39;,
]);
</code></pre><p>或者，您可以使用<code>exclude_unless</code>规则，除非另一个字段具有给定值，否则不验证给定字段：</p><pre><code>$validator = Validator::make($data, [
    &#39;has_appointment&#39; =&gt; &#39;required|boolean&#39;,
    &#39;appointment_date&#39; =&gt; &#39;exclude_unless:has_appointment,true|required|date&#39;,
    &#39;doctor_name&#39; =&gt; &#39;exclude_unless:has_appointment,true|required|string&#39;,
]);
</code></pre><p><a name="validating-when-present"></a></p><h4 id="仅在字段存在时验证" tabindex="-1"><a class="header-anchor" href="#仅在字段存在时验证" aria-hidden="true">#</a> 仅在字段存在时验证</h4><p>在某些情况下，您可能希望仅在验证数据中存在该字段时才对该字段运行验证检查。要快速实现此操作，请将<code>sometimes</code>规则添加到您的规则列表中：</p><pre><code>$v = Validator::make($data, [
    &#39;email&#39; =&gt; &#39;sometimes|required|email&#39;,
]);
</code></pre><p>在上面的示例中，如果<code>$data</code>数组中存在<code>email</code>字段，则仅对其进行验证。</p><blockquote><p><strong>注意</strong> 如果您尝试验证始终应存在但可能为空的字段，请查看<a href="#a-note-on-optional-fields">有关可选字段的说明</a>。</p></blockquote><p><a name="complex-conditional-validation"></a></p><h4 id="复杂条件验证" tabindex="-1"><a class="header-anchor" href="#复杂条件验证" aria-hidden="true">#</a> 复杂条件验证</h4><p>有时，您可能希望根据更复杂的条件逻辑添加验证规则。例如，您可能只希望在另一个字段的值大于100时要求给定字段。或者，只有在存在另一个字段时，两个字段才需要具有给定值。添加这些验证规则不必是痛苦的。首先，使用永不改变的静态规则创建一个<code>Validator</code>实例：</p><pre><code>use Illuminate\\Support\\Facades\\Validator;

$validator = Validator::make($request-&gt;all(), [
    &#39;email&#39; =&gt; &#39;required|email&#39;,
    &#39;games&#39; =&gt; &#39;required|numeric&#39;,
]);
</code></pre><p>假设我们的 Web 应用是给游戏收藏家使用的。如果一个游戏收藏家在我们的应用上注册，并且他们拥有超过 100 个游戏，我们想要让他们解释为什么拥有这么多游戏。例如，也许他们经营着一家游戏转售店，或者他们只是喜欢收集游戏。为了有条件地添加这个要求，我们可以在 <code>Validator</code> 实例上使用 <code>sometimes</code> 方法。</p><pre><code>use Illuminate\\Support\\Fluent;

$validator-&gt;sometimes(&#39;reason&#39;, &#39;required|max:500&#39;, function (Fluent $input) {
    return $input-&gt;games &gt;= 100;
});
</code></pre><p>传递给 <code>sometimes</code> 方法的第一个参数是我们有条件验证的字段的名称。第二个参数是我们想要添加的规则列表。如果传递作为第三个参数的闭包返回 <code>true</code>，这些规则将被添加。使用此方法可以轻松构建复杂的条件验证。您甚至可以同时为多个字段添加条件验证：</p><pre><code>$validator-&gt;sometimes([&#39;reason&#39;, &#39;cost&#39;], &#39;required&#39;, function (Fluent $input) {
    return $input-&gt;games &gt;= 100;
});
</code></pre><blockquote><p><strong>注意</strong> 传递给您的闭包的 <code>$input</code> 参数将是 <code>Illuminate\\Support\\Fluent</code> 的一个实例，可用于访问您正在验证的输入和文件。</p></blockquote><p><a name="complex-conditional-array-validation"></a></p><h4 id="复杂条件数组验证" tabindex="-1"><a class="header-anchor" href="#复杂条件数组验证" aria-hidden="true">#</a> 复杂条件数组验证</h4><p>有时，您可能想要基于同一嵌套数组中的另一个字段验证一个字段，而您不知道其索引。在这种情况下，您可以允许您的闭包接收第二个参数，该参数将是正在验证的当前个体数组项：</p><pre><code>$input = [
    &#39;channels&#39; =&gt; [
        [
            &#39;type&#39; =&gt; &#39;email&#39;,
            &#39;address&#39; =&gt; &#39;abigail@example.com&#39;,
        ],
        [
            &#39;type&#39; =&gt; &#39;url&#39;,
            &#39;address&#39; =&gt; &#39;https://example.com&#39;,
        ],
    ],
];

$validator-&gt;sometimes(&#39;channels.*.address&#39;, &#39;email&#39;, function (Fluent $input, Fluent $item) {
    return $item-&gt;type === &#39;email&#39;;
});

$validator-&gt;sometimes(&#39;channels.*.address&#39;, &#39;url&#39;, function (Fluent $input, Fluent $item) {
    return $item-&gt;type !== &#39;email&#39;;
});
</code></pre><p>像传递给闭包的 <code>$input</code> 参数一样，当属性数据是数组时，<code>$item</code> 参数是 <code>Illuminate\\Support\\Fluent</code> 的实例；否则，它是一个字符串。</p><p><a name="validating-arrays"></a></p><h2 id="验证数组" tabindex="-1"><a class="header-anchor" href="#验证数组" aria-hidden="true">#</a> 验证数组</h2><p>正如在 <a href="#rule-array"><code>array</code> 验证规则文档</a> 中讨论的那样，<code>array</code> 规则接受允许的数组键列表。如果数组中存在任何额外的键，则验证将失败：</p><pre><code>use Illuminate\\Support\\Facades\\Validator;

$input = [
    &#39;user&#39; =&gt; [
        &#39;name&#39; =&gt; &#39;Taylor Otwell&#39;,
        &#39;username&#39; =&gt; &#39;taylorotwell&#39;,
        &#39;admin&#39; =&gt; true,
    ],
];

Validator::make($input, [
    &#39;user&#39; =&gt; &#39;array:username,locale&#39;,
]);
</code></pre><p>通常情况下，您应该始终指定允许出现在数组中的键。否则，验证器的 <code>validate</code> 和 <code>validated</code> 方法将返回所有经过验证的数据，包括数组及其所有键，即使这些键没有通过其他嵌套数组验证规则进行验证。</p><p><a name="validating-nested-array-input"></a></p><h3 id="验证嵌套数组输入" tabindex="-1"><a class="header-anchor" href="#验证嵌套数组输入" aria-hidden="true">#</a> 验证嵌套数组输入</h3><p>验证基于嵌套数组的表单输入字段并不需要很痛苦。您可以使用 &quot;点符号&quot; 来验证数组中的属性。例如，如果传入的 HTTP 请求包含一个 <code>photos[profile]</code> 字段，您可以像这样验证它：</p><pre><code>use Illuminate\\Support\\Facades\\Validator;

$validator = Validator::make($request-&gt;all(), [
    &#39;photos.profile&#39; =&gt; &#39;required|image&#39;,
]);
</code></pre><p>您还可以验证数组中的每个元素。例如，要验证给定数组输入字段中的每个电子邮件是否唯一，可以执行以下操作：</p><pre><code>$validator = Validator::make($request-&gt;all(), [
    &#39;person.*.email&#39; =&gt; &#39;email|unique:users&#39;,
    &#39;person.*.first_name&#39; =&gt; &#39;required_with:person.*.last_name&#39;,
]);
</code></pre><p>同样，您可以在语言文件中指定<a href="#custom-messages-for-specific-attributes">自定义验证消息</a>时使用 <code>*</code> 字符，使得针对基于数组的字段使用单个验证消息变得非常简单：</p><pre><code>&#39;custom&#39; =&gt; [
    &#39;person.*.email&#39; =&gt; [
        &#39;unique&#39; =&gt; &#39;Each person must have a unique email address&#39;,
    ]
],
</code></pre><p><a name="accessing-nested-array-data"></a></p><h4 id="访问嵌套数组数据" tabindex="-1"><a class="header-anchor" href="#访问嵌套数组数据" aria-hidden="true">#</a> 访问嵌套数组数据</h4><p>有时，当为属性分配验证规则时，您可能需要访问给定嵌套数组元素的值。您可以使用 <code>Rule::forEach</code> 方法来实现此目的。<code>forEach</code> 方法接受一个闭包，在验证数组属性的每次迭代中调用该闭包，并接收属性的值和显式的完全展开的属性名称。闭包应该返回要分配给数组元素的规则数组：</p><pre><code>use App\\Rules\\HasPermission;
use Illuminate\\Support\\Facades\\Validator;
use Illuminate\\Validation\\Rule;

$validator = Validator::make($request-&gt;all(), [
    &#39;companies.*.id&#39; =&gt; Rule::forEach(function (string|null $value, string $attribute) {
        return [
            Rule::exists(Company::class, &#39;id&#39;),
            new HasPermission(&#39;manage-company&#39;, $value),
        ];
    }),
]);
</code></pre><p><a name="error-message-indexes-and-positions"></a></p><h3 id="错误消息索引和位置" tabindex="-1"><a class="header-anchor" href="#错误消息索引和位置" aria-hidden="true">#</a> 错误消息索引和位置</h3><p>在验证数组时，您可能希望在应用程序显示的错误消息中引用失败验证的特定项的索引或位置。为了实现这一点，您可以在<a href="#manual-customizing-the-error-messages">自定义验证消息</a>中包含 <code>:index</code>（从 <code>0</code> 开始）和 <code>:position</code>（从 <code>1</code> 开始）占位符：</p><pre><code>use Illuminate\\Support\\Facades\\Validator;

$input = [
    &#39;photos&#39; =&gt; [
        [
            &#39;name&#39; =&gt; &#39;BeachVacation.jpg&#39;,
            &#39;description&#39; =&gt; &#39;我的海滩假期照片！&#39;,
        ],
        [
            &#39;name&#39; =&gt; &#39;GrandCanyon.jpg&#39;,
            &#39;description&#39; =&gt; &#39;&#39;,
        ],
    ],
];

Validator::validate($input, [
    &#39;photos.*.description&#39; =&gt; &#39;required&#39;,
], [
    &#39;photos.*.description.required&#39; =&gt; &#39;请描述第 :position 张照片。&#39;,
]);
</code></pre><p>上述示例将验证失败，并且用户会看到以下错误：“请描述第 2 张照片。”</p><p><a name="validating-files"></a></p><h2 id="验证文件" tabindex="-1"><a class="header-anchor" href="#验证文件" aria-hidden="true">#</a> 验证文件</h2><p>Laravel提供了多种上传文件的验证规则，如<code>mimes</code>、<code>image</code>、<code>min</code>和<code>max</code>。虽然你可以在验证文件时单独指定这些规则，但Laravel还是提供了一个流畅的文件验证规则生成器，你可能会觉得更方便：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    use Illuminate\\Support\\Facades\\Validator;
    use Illuminate\\Validation\\Rules\\File;

    Validator::validate($input, [
        &#39;attachment&#39; =&gt; [
            &#39;required&#39;,
            File::types([&#39;mp3&#39;, &#39;wav&#39;])
                -&gt;min(1024)
                -&gt;max(12 * 1024),
        ],
    ]);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你的程序允许用户上传图片，那么可以使用<code>File</code> 规则的 <code>image</code> 构造方法来指定上传的文件应该是图片。另外， <code>dimensions</code> 规则可用于限制图片的尺寸：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    use Illuminate\\Support\\Facades\\Validator;
    use Illuminate\\Validation\\Rules\\File;

    Validator::validate($input, [
        &#39;photo&#39; =&gt; [
            &#39;required&#39;,
            File::image()
                -&gt;min(1024)
                -&gt;max(12 * 1024)
                -&gt;dimensions(Rule::dimensions()-&gt;maxWidth(1000)-&gt;maxHeight(500)),
        ],
    ]);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>技巧</strong> 更多验证图片尺寸的信息，请参见<a href="#rule-dimensions">尺寸规则文档</a>。</p></blockquote><p><a name="validating-files-file-types"></a></p><h4 id="文件类型" tabindex="-1"><a class="header-anchor" href="#文件类型" aria-hidden="true">#</a> 文件类型</h4><p>尽管在调用 <code>types</code> 方法时只需要指定扩展名，但该方法实际上是通过读取文件的内容并猜测其MIME类型来验证文件的MIME类型的。MIME类型及其相应扩展的完整列表可以在以下链接中找到：</p>`,63),me={href:"https://svn.apache.org/repos/asf/httpd/httpd/trunk/docs/conf/mime.types",target:"_blank",rel:"noopener noreferrer"},ge=r(`<p><a name="validating-passwords"></a></p><h2 id="验证密码" tabindex="-1"><a class="header-anchor" href="#验证密码" aria-hidden="true">#</a> 验证密码</h2><p>为确保密码具有足够的复杂性，你可以使用 Laravel 的 <code>password</code> 规则对象：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    use Illuminate\\Support\\Facades\\Validator;
    use Illuminate\\Validation\\Rules\\Password;

    $validator = Validator::make($request-&gt;all(), [
        &#39;password&#39; =&gt; [&#39;required&#39;, &#39;confirmed&#39;, Password::min(8)],
    ]);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>Password</code> 规则对象允许你轻松自定义应用程序的密码复杂性要求，例如指定密码至少需要一个字母、数字、符号或混合大小写的字符：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    // 至少需要 8 个字符...
    Password::min(8)

    // 至少需要一个字母...
    Password::min(8)-&gt;letters()

    // 至少需要一个大写字母和一个小写字母...
    Password::min(8)-&gt;mixedCase()

    // 至少需要一个数字...
    Password::min(8)-&gt;numbers()

    // 至少需要一个符号...
    Password::min(8)-&gt;symbols()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此外，你可以使用 <code>uncompromised</code> 方法确保密码没有在公共密码数据泄露事件中被泄露：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    Password::min(8)-&gt;uncompromised()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,8),fe=e("code",null,"Password",-1),ve={href:"https://en.wikipedia.org/wiki/K-anonymity",target:"_blank",rel:"noopener noreferrer"},be={href:"https://haveibeenpwned.com",target:"_blank",rel:"noopener noreferrer"},xe=r(`<p>默认情况下，如果密码在数据泄露中至少出现一次，则会被视为已泄露。你可以使用 <code>uncompromised</code> 方法的第一个参数自定义此阈值</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    // Ensure the password appears less than 3 times in the same data leak...
    Password::min(8)-&gt;uncompromised(3);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>当然，你可以将上面示例中的所有方法链接起来：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    Password::min(8)
        -&gt;letters()
        -&gt;mixedCase()
        -&gt;numbers()
        -&gt;symbols()
        -&gt;uncompromised()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="defining-default-password-rules"></a></p><h4 id="定义默认密码规则" tabindex="-1"><a class="header-anchor" href="#定义默认密码规则" aria-hidden="true">#</a> 定义默认密码规则</h4><p>你可能会发现在应用程序的单个位置指定密码的默认验证规则很方便。你可以使用接受闭包的 <code>Password::defaults</code> 方法轻松完成此操作。给 <code>defaults</code> 方法的闭包应该返回密码规则的默认配置。通常，应该在应用程序服务提供者之一的 <code>boot</code> 方法中调用 <code>defaults</code> 规则：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Validation<span class="token punctuation">\\</span>Rules<span class="token punctuation">\\</span>Password</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 引导任何应用程序服务
 */</span>
<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">boot</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span>
<span class="token punctuation">{</span>
    <span class="token class-name static-context">Password</span><span class="token operator">::</span><span class="token function">defaults</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token variable">$rule</span> <span class="token operator">=</span> <span class="token class-name static-context">Password</span><span class="token operator">::</span><span class="token function">min</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">app</span><span class="token operator">-&gt;</span><span class="token function">isProduction</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                    <span class="token operator">?</span> <span class="token variable">$rule</span><span class="token operator">-&gt;</span><span class="token function">mixedCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">uncompromised</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                    <span class="token punctuation">:</span> <span class="token variable">$rule</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后，当你想将默认规则应用于正在验证的特定密码时，你可以调用不带参数的 <code>defaults</code> 方法：</p><pre><code>&#39;password&#39; =&gt; [&#39;required&#39;, Password::defaults()],
</code></pre><p>有时，你可能希望将其他验证规则附加到默认密码验证规则。 你可以使用 <code>rules</code> 方法来完成此操作：</p><pre><code>use App\\Rules\\ZxcvbnRule;

Password::defaults(function () {
    $rule = Password::min(8)-&gt;rules([new ZxcvbnRule]);

    // ...
});
</code></pre><p><a name="custom-validation-rules"></a></p><h2 id="自定义验证规则" tabindex="-1"><a class="header-anchor" href="#自定义验证规则" aria-hidden="true">#</a> 自定义验证规则</h2><p><a name="using-rule-objects"></a></p><h3 id="使用规则对象" tabindex="-1"><a class="header-anchor" href="#使用规则对象" aria-hidden="true">#</a> 使用规则对象</h3><p>Laravel 提供了各种有用的验证规则；但是，你可能希望指定一些你自己的。 注册自定义验证规则的一种方法是使用规则对象。 要生成新的规则对象，你可以使用 <code>make:rule</code> Artisan 命令。 让我们使用这个命令生成一个规则来验证字符串是否为大写。 Laravel 会将新规则放在 <code>app/Rules</code> 目录中。 如果这个目录不存在，Laravel 会在你执行 Artisan 命令创建规则时创建它：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan make:rule Uppercase
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>一旦规则被创建，我们就可以定义其行为。一个规则对象包含一个单一的方法：<code>validate</code>。该方法接收属性名、其值和一个回调函数，如果验证失败应该调用该回调函数并传入验证错误消息：</p><pre><code>&lt;?php

namespace App\\Rules;

use Closure;
use Illuminate\\Contracts\\Validation\\ValidationRule;

class Uppercase implements ValidationRule
{
    /**
     * Run the validation rule.
     */
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        if (strtoupper($value) !== $value) {
            $fail(&#39;The :attribute must be uppercase.&#39;);
        }
    }
}
</code></pre><p>一旦定义了规则，您可以通过将规则对象的实例与其他验证规则一起传递来将其附加到验证器：</p><pre><code>use App\\Rules\\Uppercase;

$request-&gt;validate([
    &#39;name&#39; =&gt; [&#39;required&#39;, &#39;string&#39;, new Uppercase],
]);
</code></pre><h4 id="验证消息" tabindex="-1"><a class="header-anchor" href="#验证消息" aria-hidden="true">#</a> 验证消息</h4>`,23),qe=e("code",null,"$fail",-1),_e={href:"https://chat.openai.com./localization",target:"_blank",rel:"noopener noreferrer"},ke=r(`<pre><code>if (strtoupper($value) !== $value) {
    $fail(&#39;validation.uppercase&#39;)-&gt;translate();
}
</code></pre><p>如有必要，您可以通过第一个和第二个参数分别提供占位符替换和首选语言来调用 <code>translate</code> 方法：</p><pre><code>$fail(&#39;validation.location&#39;)-&gt;translate([
    &#39;value&#39; =&gt; $this-&gt;value,
], &#39;fr&#39;)
</code></pre><h4 id="访问额外数据" tabindex="-1"><a class="header-anchor" href="#访问额外数据" aria-hidden="true">#</a> 访问额外数据</h4><p>如果您的自定义验证规则类需要访问正在验证的所有其他数据，则规则类可以实现 <code>Illuminate\\Contracts\\Validation\\DataAwareRule</code> 接口。此接口要求您的类定义一个 <code>setData</code> 方法。Laravel 会自动调用此方法（在验证继续之前）并传入所有正在验证的数据：</p><pre><code>&lt;?php

namespace App\\Rules;

use Illuminate\\Contracts\\Validation\\DataAwareRule;
use Illuminate\\Contracts\\Validation\\ValidationRule;

class Uppercase implements DataAwareRule, ValidationRule
{
    /**
     * 正在验证的所有数据。
     *
     * @var array&lt;string, mixed&gt;
     */
    protected $data = [];

    // ...

    /**
     * 设置正在验证的数据。
     *
     * @param  array&lt;string, mixed&gt;  $data
     */
    public function setData(array $data): static
    {
        $this-&gt;data = $data;

        return $this;
    }
}
</code></pre><p>或者，如果您的验证规则需要访问执行验证的验证器实例，则可以实现<code>ValidatorAwareRule</code>接口：</p><pre><code>&lt;?php

namespace App\\Rules;

use Illuminate\\Contracts\\Validation\\ValidationRule;
use Illuminate\\Contracts\\Validation\\ValidatorAwareRule;
use Illuminate\\Validation\\Validator;

class Uppercase implements ValidationRule, ValidatorAwareRule
{
    /**
     * 验证器实例.
     *
     * @var \\Illuminate\\Validation\\Validator
     */
    protected $validator;

    // ...

    /**
     * 设置当前验证器.
     */
    public function setValidator(Validator $validator): static
    {
        $this-&gt;validator = $validator;

        return $this;
    }
}
</code></pre><p><a name="using-closures"></a></p><h3 id="使用闭包函数" tabindex="-1"><a class="header-anchor" href="#使用闭包函数" aria-hidden="true">#</a> 使用闭包函数</h3><p>如果您只需要在应用程序中一次使用自定义规则的功能，可以使用闭包函数而不是规则对象。闭包函数接收属性名称、属性值和 $fail 回调函数，如果验证失败，应该调用该函数：</p><pre><code>use Illuminate\\Support\\Facades\\Validator;

$validator = Validator::make($request-&gt;all(), [
    &#39;title&#39; =&gt; [
        &#39;required&#39;,
        &#39;max:255&#39;,
        function (string $attribute, mixed $value, Closure $fail) {
            if ($value === &#39;foo&#39;) {
                $fail(&quot;The {$attribute} is invalid.&quot;);
            }
        },
    ],
]);
</code></pre><p><a name="implicit-rules"></a></p><h3 id="隐式规则" tabindex="-1"><a class="header-anchor" href="#隐式规则" aria-hidden="true">#</a> 隐式规则</h3><p>默认情况下，当要验证的属性不存在或包含空字符串时，正常的验证规则，包括自定义规则，都不会执行。例如，<a href="#rule-unique"><code>unique</code></a> 规则不会针对空字符串运行：</p><pre><code>use Illuminate\\Support\\Facades\\Validator;

$rules = [&#39;name&#39; =&gt; &#39;unique:users,name&#39;];

$input = [&#39;name&#39; =&gt; &#39;&#39;];

Validator::make($input, $rules)-&gt;passes(); // true
</code></pre><p>为了使自定义规则在属性为空时也运行，规则必须暗示该属性是必需的。您可以使用 make:rule Artisan 命令的 --implicit 选项快速生成新的隐式规则对象：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan make:rule Uppercase <span class="token parameter variable">--implicit</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>**警告 **<br> 隐式规则仅 暗示 该属性是必需的。实际上，缺少或空属性是否无效取决于您。</p></blockquote>`,19);function $e(we,ye){const n=t("ExternalLinkIcon");return s(),o("div",null,[c,u,p,e("p",null,[a("待验证字段必须是包含在 "),e("a",h,[m,i(n)]),a(" 和 "),e("a",g,[f,i(n)]),a(" 中的Unicode字母字符。")]),v,e("p",null,[a("被验证的字段必须完全是 Unicode 字母数字字符中的 "),e("a",b,[x,i(n)]),a("、"),e("a",q,[_,i(n)]),a("、"),e("a",k,[$,i(n)]),a("，以及 ASCII 破折号（"),w,a("）和 ASCII 下划线（"),y,a("）。")]),I,e("p",null,[a("被验证的字段必须完全是 Unicode 字母数字字符中的 "),e("a",V,[R,i(n)]),a(", "),e("a",A,[P,i(n)]),a(" 和 "),e("a",S,[L,i(n)]),a("。")]),E,e("p",null,[a("验证字段必须匹配给定的 "),F,a(" 。在验证字段时，您应该只使用 "),z,a(" 或 "),T,a(" 中的"),C,a("，而不是同时使用。该验证规则支持 PHP 的 "),e("a",D,[a("DateTime"),i(n)]),a(" 类支持的所有格式。")]),M,e("p",null,[a("验证的字段必须符合 "),H,a(" 地址格式。当前版本，此种验证规则由 "),e("a",U,[B,i(n)]),a(" 提供支持。默认情况下，使用 "),N,a(" 验证样式，但你也可以应用其他验证样式：")]),W,O,j,J,e("p",null,[e("a",X,[a("https://svn.apache.org/repos/asf/httpd/httpd/trunk/docs/conf/mime.types"),i(n)])]),Z,e("p",null,[a("需要验证的字段必须是"),e("a",G,[a("数字类型"),i(n)]),a("。")]),K,Y,Q,ee,ae,ne,ie,re,de,te,se,oe,le,ce,ue,e("p",null,[a("验证字段必须为有效的"),e("a",pe,[a("通用唯一词典排序标识符"),i(n)]),a("（ULID）。")]),he,e("p",null,[e("a",me,[a("https://svn.apache.org/repos/asf/httpd/httpd/trunk/docs/conf/mime.types"),i(n)])]),ge,e("p",null,[a("在内部，"),fe,a(" 规则对象使用 "),e("a",ve,[a("k-Anonymity"),i(n)]),a(" 模型来确定密码是否已通过 "),e("a",be,[a("haveibeenpwned.com"),i(n)]),a(" 服务而不牺牲用户的隐私或安全。")]),xe,e("p",null,[a("您可以不提供 "),qe,a(" 闭包的字面错误消息，而是提供一个"),e("a",_e,[a("翻译字符串键"),i(n)]),a("，并指示 Laravel 翻译错误消息：")]),ke])}const Re=d(l,[["render",$e],["__file","validation.html.vue"]]);export{Re as default};
