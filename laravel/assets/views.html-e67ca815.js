import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as d,o as c,c as s,b as a,d as e,e as i,a as n}from"./app-8cdff07c.js";const t={},p=n(`<h1 id="视图" tabindex="-1"><a class="header-anchor" href="#视图" aria-hidden="true">#</a> 视图</h1><ul><li><a href="#introduction">介绍</a><ul><li><a href="#writing-views-in-react-or-vue">在 React / Vue 中编写视图</a></li></ul></li><li><a href="#creating-and-rendering-views">创建和渲染视图</a><ul><li><a href="#nested-view-directories">嵌套视图目录</a></li><li><a href="#creating-the-first-available-view">创建第一个可用视图</a></li><li><a href="#determining-if-a-view-exists">确定视图是否存在</a></li></ul></li><li><a href="#passing-data-to-views">向视图传递数据</a><ul><li><a href="#sharing-data-with-all-views">与所有视图分享数据</a></li></ul></li><li><a href="#view-composers">视图组件</a><ul><li><a href="#view-creators">视图构造器</a></li></ul></li><li><a href="#optimizing-views">视图构造器</a></li></ul><p><a name="introduction"></a></p><h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2><p>当然，直接从路由和控制器返回整个 HTML 文档字符串是不切实际的。值得庆幸的是，视图提供了一种方便的方式来将我们所有的 HTML 放在单独的文件中。</p><p>视图将你的控制器 / 应用程序逻辑与你的表示逻辑分开并存储在 <code>resources/views</code> 目录中。一个简单的视图可能看起来像这样：使用 Laravel 时，视图模板通常使用<a href="./blade">Blade模板语言</a> 编写。一个简单的视图如下所示：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;!-- 视图存储在 \`resources/views/greeting.blade.php\` --&gt;

&lt;html&gt;
    &lt;body&gt;
        &lt;h1&gt;Hello, {{ $name }}&lt;/h1&gt;
    &lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将上述代码存储到 <code>resources/views/greeting.blade.php</code> 后，我们可以使用全局辅助函数 <code>view</code> 将其返回，例如：</p><pre><code>Route::get(&#39;/&#39;, function () {
    return view(&#39;greeting&#39;, [&#39;name&#39; =&gt; &#39;James&#39;]);
});
</code></pre><blockquote><p>技巧：如果你想了解更多关于如何编写 Blade 模板的更多信息？查看完整的 <a href="./blade">Blade 文档</a> 将是最好的开始。</p></blockquote><p><a name="writing-views-in-react-or-vue"></a></p><h3 id="在-react-vue-中编写视图" tabindex="-1"><a class="header-anchor" href="#在-react-vue-中编写视图" aria-hidden="true">#</a> 在 React / Vue 中编写视图</h3>`,12),l={href:"https://inertiajs.com/",target:"_blank",rel:"noopener noreferrer"},h={href:"https://laravel.com/docs/10.x/starter-kits",target:"_blank",rel:"noopener noreferrer"},u={href:"https://bootcamp.laravel.com/",target:"_blank",rel:"noopener noreferrer"},v=n(`<p><a name="creating-and-rendering-views"></a></p><h2 id="创建和渲染视图" tabindex="-1"><a class="header-anchor" href="#创建和渲染视图" aria-hidden="true">#</a> 创建和渲染视图</h2><p>你可以通过在应用程序 <code>resources/views</code> 目录中放置具有 <code>.blade.php</code> 扩展名的文件来创建视图。该 <code>.blade.php</code> 扩展通知框架该文件包含一个 <a href="./blade">Blade 模板</a>。Blade 模板包含 HTML 和 Blade 指令，允许你轻松地回显值、创建「if」语句、迭代数据等。</p><p>创建视图后，可以使用全局 <code>view</code> 从应用程序的某个路由或控制器返回视图：</p><pre><code>Route::get(&#39;/&#39;, function () {
    return view(&#39;greeting&#39;, [&#39;name&#39; =&gt; &#39;James&#39;]);
});
</code></pre><p>也可以使用 <code>View</code> 视图门面（Facade）：</p><pre><code>use Illuminate\\Support\\Facades\\View;

return View::make(&#39;greeting&#39;, [&#39;name&#39; =&gt; &#39;James&#39;]);
</code></pre><p>如上所示，传递给 <code>view</code> 的第一个参数对应于 <code>resources/views</code> 目录中视图文件的名称。第二个参数是应该对视图可用的数据数组。在这种情况下，我们传递 name 变量，它使用 <a href="./blade">Blade 语法</a>显示在视图中。</p><p><a name="nested-view-directories"></a></p><h3 id="嵌套视图目录" tabindex="-1"><a class="header-anchor" href="#嵌套视图目录" aria-hidden="true">#</a> 嵌套视图目录</h3><p>视图也可以嵌套在目录 <code>resources/views</code> 的子目录中。「.」符号可用于引用嵌套视图。例如，如果视图存储在 <code>resources/views/admin/profile.blade.php</code> ，你可以从应用程序的路由或控制器中返回它，如下所示：</p><pre><code>return view(&#39;admin.profile&#39;, $data);
</code></pre><blockquote><p>注意：查看目录名称不应包含该 . 字符。</p></blockquote><p><a name="creating-the-first-available-view"></a></p><h3 id="创建第一个可用视图" tabindex="-1"><a class="header-anchor" href="#创建第一个可用视图" aria-hidden="true">#</a> 创建第一个可用视图</h3><p>使用 <code>View</code> 门面的 <code>first</code> 方法，你可以创建给定数组视图中第一个存在的视图。如果你的应用程序或开发的第三方包允许定制或覆盖视图，这会非常有用：</p><pre><code>use Illuminate\\Support\\Facades\\View;

return View::first([&#39;custom.admin&#39;, &#39;admin&#39;], $data);
</code></pre><p><a name="determining-if-a-view-exists"></a></p><h3 id="判断视图文件是否存在" tabindex="-1"><a class="header-anchor" href="#判断视图文件是否存在" aria-hidden="true">#</a> 判断视图文件是否存在</h3><p>如果需要判断视图文件是否存在，可以使用 <code>View</code> 门面。如果视图存在， <code>exists</code> 方法会返回 <code>true</code>：</p><pre><code>use Illuminate\\Support\\Facades\\View;

if (View::exists(&#39;emails.customer&#39;)) {
    // ...
}
</code></pre><p><a name="passing-data-to-views"></a></p><h2 id="向视图传递数据" tabindex="-1"><a class="header-anchor" href="#向视图传递数据" aria-hidden="true">#</a> 向视图传递数据</h2><p>正如您在前面的示例中看到的，您可以将数据数组传递给视图，以使该数据可用于视图：</p><pre><code>return view(&#39;greetings&#39;, [&#39;name&#39; =&gt; &#39;Victoria&#39;]);
</code></pre><p>以这种方式传递信息时，数据应该是带有键 / 值对的数组。向视图提供数据后，您可以使用数据的键访问视图中的每个值，例如 <code>&lt;?php echo $name; ?&gt;</code>。</p><p>作为将完整的数据数组传递给 <code>view</code> 辅助函数的替代方法，你可以使用该 <code>with</code> 方法将单个数据添加到视图中。该 <code>with</code> 方法返回视图对象的实例，以便你可以在返回视图之前继续链接方法：</p><pre><code>return view(&#39;greeting&#39;)
            -&gt;with(&#39;name&#39;, &#39;Victoria&#39;)
            -&gt;with(&#39;occupation&#39;, &#39;Astronaut&#39;);
</code></pre><p><a name="sharing-data-with-all-views"></a></p><h3 id="与所有视图共享数据" tabindex="-1"><a class="header-anchor" href="#与所有视图共享数据" aria-hidden="true">#</a> 与所有视图共享数据</h3><p>有时，你可能需要与应用程序呈现的所有视图共享数据，可以使用 <code>View</code> 门面的 <code>share</code> 。你可以在服务提供器的 <code>boot</code> 方法中调用视图门面（Facade）的 share 。例如，可以将它们添加到 <code>App\\Providers\\AppServiceProvider</code> 或者为它们生成一个单独的服务提供器：</p><pre><code>&lt;?php

namespace App\\Providers;

use Illuminate\\Support\\Facades\\View;

class AppServiceProvider extends ServiceProvider
{
    /**
     * 注册应用服务.
     */
    public function register(): void
    {
        // ...
    }

    /**
     * 引导任何应用程序服务。
     */
    public function boot(): void
    {
        View::share(&#39;key&#39;, &#39;value&#39;);
    }
}
</code></pre><p><a name="view-composers"></a></p><h2 id="查看合成器" tabindex="-1"><a class="header-anchor" href="#查看合成器" aria-hidden="true">#</a> 查看合成器</h2><p>视图合成器是在呈现视图时调用的回调或类方法。如果每次渲染视图时都希望将数据绑定到视图，则视图合成器可以帮助你将逻辑组织到单个位置。如果同一视图由应用程序中的多个路由或控制器返回，并且始终需要特定的数据，视图合成器或许会特别有用。</p><p>通常，视图合成器将在应用程序的一个 <a href="./providers">服务提供者</a> 中注册。在本例中，我们假设我们已经创建了一个新的 <code>App\\Providers\\ViewServiceProvider</code> 来容纳此逻辑。</p><p>我们将使用 <code>View</code> 门面的 <code>composer</code> 方法来注册视图合成器。 Laravel 不包含基于类的视图合成器的默认目录，因此你可以随意组织它们。例如，可以创建一个 <code>app/View/Composers</code> 目录来存放应用程序的所有视图合成器：</p><pre><code>&lt;?php

namespace App\\Providers;

use App\\View\\Composers\\ProfileComposer;
use Illuminate\\Support\\Facades;
use Illuminate\\Support\\ServiceProvider;
use Illuminate\\View\\View;

class ViewServiceProvider extends ServiceProvider
{
    /**
     * 注册任何应用程序服务。
     */
    public function register(): void
    {
        // ...
    }

    /**
     * 引导任何应用程序服务。
     */
    public function boot(): void
    {
        // 使用基于类的合成器。。。
        Facades\\View::composer(&#39;profile&#39;, ProfileComposer::class);

        // 使用基于闭包的合成器。。。
        Facades\\View::composer(&#39;welcome&#39;, function (View $view) {
            // ...
        });

        Facades\\View::composer(&#39;dashboard&#39;, function (View $view) {
            // ...
        });
    }
}
</code></pre><blockquote><p>注意：请记住，如果创建一个新的服务提供程序来包含视图合成器注册，则需要将服务提供程序添加到 <code>config/app.php</code> 配置文件中的 <code>providers</code> 数组中。</p></blockquote><p>现在我们注册了视图合成器，每次渲染 <code>profile</code> 视图时都会执行 <code>App\\View\\Composers\\ProfileComposer</code> 类的 <code>compose</code> 方法。接下来看一个视图合成器类的例子：</p><pre><code>&lt;?php

namespace App\\View\\Composers;

use App\\Repositories\\UserRepository;
use Illuminate\\View\\View;

class ProfileComposer
{
    /**
     * 创建新的配置文件合成器。
     */
    public function __construct(
        protected UserRepository $users,
    ) {}

    /**
     * 将数据绑定到视图。
     */
    public function compose(View $view): void
    {
        $view-&gt;with(&#39;count&#39;, $this-&gt;users-&gt;count());
    }
}
</code></pre><p>如上所示，所有的视图合成器都会通过 <a href="./container">服务容器</a>进行解析，所以你可以在视图合成器的构造函数中类型提示需要注入的依赖项。</p><p><a name="attaching-a-composer-to-multiple-views"></a></p><h4 id="将视图合成器添加到多个视图" tabindex="-1"><a class="header-anchor" href="#将视图合成器添加到多个视图" aria-hidden="true">#</a> 将视图合成器添加到多个视图</h4><p>你可以通过将视图数组作为第一个参数传递给 <code>composer</code> 方法，可以一次添加多个视图到视图合成器中：</p><pre><code>use App\\Views\\Composers\\MultiComposer;
use Illuminate\\Support\\Facades\\View;

View::composer(
    [&#39;profile&#39;, &#39;dashboard&#39;],
    MultiComposer::class
);
</code></pre><p>该 <code>composer</code> 方法同时也接受通配符 <code>*</code> ，表示将所有视图添加到视图合成器中：</p><pre><code>use Illuminate\\Support\\Facades;
use Illuminate\\View\\View;

Facades\\View::composer(&#39;*&#39;, function (View $view) {
    // ...
});
</code></pre><p><a name="view-creators"></a></p><h3 id="视图构造器" tabindex="-1"><a class="header-anchor" href="#视图构造器" aria-hidden="true">#</a> 视图构造器</h3><p>视图构造器「creators」和视图合成器非常相似。唯一不同之处在于视图构造器在视图实例化之后执行，而视图合成器在视图即将渲染时执行。使用 <code>creator</code> 方法注册视图构造器：</p><pre><code>use App\\View\\Creators\\ProfileCreator;
use Illuminate\\Support\\Facades\\View;

View::creator(&#39;profile&#39;, ProfileCreator::class);
</code></pre><p><a name="optimizing-views"></a></p><h2 id="优化视图" tabindex="-1"><a class="header-anchor" href="#优化视图" aria-hidden="true">#</a> 优化视图</h2><p>默认情况下，Blade 模板视图是按需编译的。当执行渲染视图的请求时，Laravel 将确定视图的编译版本是否存在。如果文件存在，Laravel 将比较未编译的视图和已编译的视图是否有修改。如果编译后的视图不存在，或者未编译的视图已被修改，Laravel 将重新编译该视图。</p><p>在请求期间编译视图可能会对性能产生小的负面影响，因此 Laravel 提供了 <code>view:cache</code> Artisan 命令来预编译应用程序使用的所有视图。为了提高性能，你可能希望在部署过程中运行此命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan view:cache
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>你可以使用 <code>view:clear</code> 命令清除视图缓存：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan view:clear
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,59);function m(w,f){const r=d("ExternalLinkIcon");return c(),s("div",null,[p,a("p",null,[e("许多开发人员已经开始倾向于使用 React 或 Vue 编写模板，而不是通过 Blade 在 PHP 中编写前端模板。Laravel 让这件事不痛不痒，这要归功于 "),a("a",l,[e("惯性"),i(r)]),e("，这是一个库，可以轻松地将 React / Vue 前端连接到 Laravel 后端，而无需构建 SPA 的典型复杂性。")]),a("p",null,[e("我们的 Breeze 和 Jetstream "),a("a",h,[e("starter kits"),i(r)]),e(" 为你提供了一个很好的起点，用 Inertia 驱动你的下一个 Laravel 应用程序。此外，"),a("a",u,[e("Laravel Bootcamp"),i(r)]),e(" 提供了一个完整的演示，展示如何构建一个由 Inertia 驱动的 Laravel 应用程序，包括 Vue 和 React 的示例。")]),v])}const V=o(t,[["render",m],["__file","views.html.vue"]]);export{V as default};
