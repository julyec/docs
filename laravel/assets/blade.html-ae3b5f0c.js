import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as c,c as r,b as e,d as a,e as s,t as o,a as n}from"./app-8cdff07c.js";const u={},p=n(`<h1 id="blade-模板" tabindex="-1"><a class="header-anchor" href="#blade-模板" aria-hidden="true">#</a> Blade 模板</h1><ul><li><a href="#introduction">简介</a><ul><li><a href="#supercharging-blade-with-livewire">用 Livewire 为 Blade 赋能</a></li></ul></li><li><a href="#displaying-data">数据显示</a><ul><li><a href="#html-entity-encoding">HTML 实体编码</a></li><li><a href="#blade-and-javascript-frameworks">Blade 与 JavaScript 框架</a></li></ul></li><li><a href="#blade-directives">Blade 指令</a><ul><li><a href="#if-statements">If 语句</a></li><li><a href="#switch-statements">Switch 语句</a></li><li><a href="#loops">循环</a></li><li><a href="#the-loop-variable">循环变量</a></li><li><a href="#conditional-classes">条件类</a></li><li><a href="#additional-attributes">附加属性</a></li><li><a href="#including-subviews">包括子视图</a></li><li><a href="#the-once-directive"><code>@once</code> 指令</a></li><li><a href="#raw-php">原始 PHP 语法</a></li><li><a href="#comments">注释</a></li></ul></li><li><a href="#components">组件</a><ul><li><a href="#rendering-components">渲染组件</a></li><li><a href="#passing-data-to-components">组件传参</a></li><li><a href="#component-attributes">组件属性</a></li><li><a href="#reserved-keywords">保留关键字</a></li><li><a href="#slots">插槽</a></li><li><a href="#inline-component-views">内联组件视图</a></li><li><a href="#dynamic-components">动态组件</a></li><li><a href="#manually-registering-components">手动注册组件</a></li></ul></li><li><a href="#anonymous-components">匿名组件</a><ul><li><a href="#anonymous-index-components">匿名索引组件</a></li><li><a href="#data-properties-attributes">数据特性/属性</a></li><li><a href="#accessing-parent-data">访问父级数据</a></li><li><a href="#anonymous-component-paths">匿名组件路径</a></li></ul></li><li><a href="#building-layouts">创建布局</a><ul><li><a href="#layouts-using-components">使用组件的布局</a></li><li><a href="#layouts-using-template-inheritance">使用模板继承的布局</a></li></ul></li><li><a href="#forms">表单</a><ul><li><a href="#csrf-field">CSRF 字段</a></li><li><a href="#method-field">Method 字段</a></li><li><a href="#validation-errors">验证错误</a></li></ul></li><li><a href="#stacks">堆栈</a></li><li><a href="#service-injection">服务注入</a></li><li><a href="#rendering-blade-templates">渲染 Blade 模板</a></li><li><a href="#extending-blade">Blade 扩展</a><ul><li><a href="#custom-echo-handlers">自定义 Echo 处理</a></li><li><a href="#custom-if-statements">自定义 if 语句</a></li></ul></li></ul><p><a name="introduction"></a></p><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p>Blade 是 Laravel 提供的一个简单而又强大的模板引擎。 和其他流行的 PHP 模板引擎不同，Blade 并不限制你在视图中使用原生 PHP 代码。实际上，所有 Blade 视图文件都将被编译成原生的 PHP 代码并缓存起来，除非它被修改，否则不会重新编译，这就意味着 Blade 基本上不会给你的应用增加任何负担。Blade 模板文件使用 <code>.blade.php</code> 作为文件扩展名，被存放在 <code>resources/views</code> 目录。</p><p>Blade 视图可以使用全局 <code>view</code> 函数从 Route 或控制器返回。当然，正如有关 <a href="./views">views</a> 的文档中所描述的，可以使用 <code>view</code> 函数的第二个参数将数据传递到 Blade 视图：</p><pre><code>Route::get(&#39;/&#39;, function () {
    return view(&#39;greeting&#39;, [&#39;name&#39; =&gt; &#39;Finn&#39;]);
});
</code></pre><p><a name="supercharging-blade-with-livewire"></a></p><h3 id="用-livewire-为-blade-赋能" tabindex="-1"><a class="header-anchor" href="#用-livewire-为-blade-赋能" aria-hidden="true">#</a> 用 Livewire 为 Blade 赋能</h3>`,9),v={href:"https://laravel-livewire.com",target:"_blank",rel:"noopener noreferrer"},b=n(`<p><a name="displaying-data"></a></p><h2 id="显示数据" tabindex="-1"><a class="header-anchor" href="#显示数据" aria-hidden="true">#</a> 显示数据</h2><p>你可以把变量置于花括号中以在视图中显示数据。例如，给定下方的路由：</p><pre><code>Route::get(&#39;/&#39;, function () {
    return view(&#39;welcome&#39;, [&#39;name&#39; =&gt; &#39;Samantha&#39;]);
});
</code></pre><p>你可以像如下这样显示 <code>name</code> 变量的内容：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>Hello, {{ $name }}.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p><strong>技巧</strong>：Blade 的 <code>{{ }}</code> 语句将被 PHP 的 <code>htmlspecialchars</code> 函数自动转义以防范 XSS 攻击。</p></blockquote><p>你不仅限于显示传递给视图的变量的内容。你也可以回显任何 PHP 函数的结果。实际上，你可以将所需的任何 PHP 代码放入 Blade echo 语句中：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>The current UNIX timestamp is {{ time() }}.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="html-entity-encoding"></a></p><h3 id="html-实体编码" tabindex="-1"><a class="header-anchor" href="#html-实体编码" aria-hidden="true">#</a> HTML 实体编码</h3><p>默认情况下，Blade（和 Laravel <code>e</code> 助手）将对 HTML 实体进行双重编码。如果你想禁用双重编码，请从 <code>AppServiceProvider</code> 的 <code>boot</code> 方法调用 <code>Blade::withoutDoubleEncoding</code> 方法：</p><pre><code>&lt;?php

namespace App\\Providers;

use Illuminate\\Support\\Facades\\Blade;
use Illuminate\\Support\\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Blade::withoutDoubleEncoding();
    }
}
</code></pre><p><a name="displaying-unescaped-data"></a></p><h4 id="展示非转义数据" tabindex="-1"><a class="header-anchor" href="#展示非转义数据" aria-hidden="true">#</a> 展示非转义数据</h4><p>默认情况下， Blade <code>{{ }}</code> 语句将被 PHP 的 <code>htmlspecialchars</code> 函数自动转义以防范 XSS 攻击。如果不想你的数据被转义，那么你可使用如下的语法：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>Hello, {!! $name !!}.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>**注意：**在应用中显示用户提供的数据时请格外小心，请尽可能的使用转义和双引号语法来防范 XSS 攻击。</p></blockquote><p><a name="blade-and-javascript-frameworks"></a></p><h3 id="blade-javascript-框架" tabindex="-1"><a class="header-anchor" href="#blade-javascript-框架" aria-hidden="true">#</a> Blade &amp; JavaScript 框架</h3><p>由于许多 JavaScript 框架也使用「花括号」来标识将显示在浏览器中的表达式，因此，你可以使用 <code>@</code> 符号来表示 Blade 渲染引擎应当保持不变。例如：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;h1&gt;Laravel&lt;/h1&gt;

Hello, @{{ name }}.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中， <code>@</code> 符号将被 Blade 移除；当然，Blade 将不会修改 <code>{{ name }}</code> 表达式，取而代之的是 JavaScript 模板来对其进行渲染。</p><p><code>@</code> 符号也用于转义 Blade 指令：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>{{-- Blade template --}}
@@if()

&lt;!-- HTML output --&gt;
@if()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="rendering-json"></a></p><h4 id="渲染-json" tabindex="-1"><a class="header-anchor" href="#渲染-json" aria-hidden="true">#</a> 渲染 JSON</h4><p>有时，你可能会将数组传递给视图，以将其呈现为 JSON，以便初始化 JavaScript 变量。 例如：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;script&gt;
    var app = &lt;?php echo json_encode($array); ?&gt;;
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者，你可以使用 <code>Illuminate\\Support\\Js::from</code> 方法指令，而不是手动调用 <code>json_encode</code>。 <code>from</code> 方法接受与 PHP 的 <code>json_encode</code> 函数相同的参数；但是，它将确保正确转义生成的 JSON 以包含在 HTML 引号中。 <code>from</code> 方法将返回一个字符串 <code>JSON.parse</code> JavaScript 语句，它将给定对象或数组转换为有效的 JavaScript 对象：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;script&gt;
    var app = {{ Illuminate\\Support\\Js::from($array) }};
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Laravel 框架的最新版本包括一个 <code>Js</code> 门面，它提供了在 Blade 模板中方便地访问此功能：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;script&gt;
    var app = {{ Js::from($array) }};
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>**注意：**你应该只使用 <code>Js::from</code> 渲染已经存在的变量为 JSON。 Blade 模板基于正则表达式，如果尝试将复杂表达式传递给 <code>Js::from</code> 可能会导致无法预测的错误。</p></blockquote><p><a name="the-at-verbatim-directive"></a></p><h4 id="verbatim-指令" tabindex="-1"><a class="header-anchor" href="#verbatim-指令" aria-hidden="true">#</a> <code>@verbatim</code> 指令</h4><p>如果你在模板中显示很大一部分 JavaScript 变量，你可以将 HTML 嵌入到 <code>@verbatim</code> 指令中，这样，你就不需要在每一个 Blade 回显语句前添加 <code>@</code> 符号：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@verbatim
    &lt;div class=&quot;container&quot;&gt;
        Hello, {{ name }}.
    &lt;/div&gt;
@endverbatim
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="blade-directives"></a></p><h2 id="blade-指令" tabindex="-1"><a class="header-anchor" href="#blade-指令" aria-hidden="true">#</a> Blade 指令</h2><p>除了模板继承和显示数据以外， Blade 还为常见的 PHP 控制结构提供了便捷的快捷方式，例如条件语句和循环。这些快捷方式为 PHP 控制结构提供了一个非常清晰、简洁的书写方式，同时，还与 PHP 中的控制结构保持了相似的语法特性。</p><p><a name="if-statements"></a></p><h3 id="if-语句" tabindex="-1"><a class="header-anchor" href="#if-语句" aria-hidden="true">#</a> If 语句</h3><p>你可以使用 <code>@if</code> ， <code>@elseif</code> ， <code>@else</code> 和 <code>@endif</code> 指令构造 <code>if</code> 语句。这些指令功能与它们所对应的 PHP 语句完全一致：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@if (count($records) === 1)
    有一条记录
@elseif (count($records) &gt; 1)
    有多条记录
@else
    没有记录
@endif
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为了方便， Blade 还提供了一个 <code>@unless</code> 指令：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@unless (Auth::check())
    你还没有登录
@endunless
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>译注：相当于 <code>@if (! Auth::check()) @endif</code></p></blockquote><p>除了上面所说条件指令外， <code>@isset</code> 和 <code>@empty</code> 指令亦可作为它们所对应的 PHP 函数的快捷方式：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@isset($records)
    // $records 已经被定义且不为 null ……
@endisset

@empty($records)
    // $records 为「空」……
@endempty
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="authentication-directives"></a></p><h4 id="授权指令" tabindex="-1"><a class="header-anchor" href="#授权指令" aria-hidden="true">#</a> 授权指令</h4><p><code>@auth</code> 和 <code>@guest</code> 指令可用于快速判断当前用户是否已经获得 <a href="./authentication">授权</a> 或是游客：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@auth
    // 用户已经通过认证……
@endauth

@guest
    // 用户没有通过认证……
@endguest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,54),m=e("code",null,"@auth",-1),g=e("code",null,"@guest",-1),h={href:"https://learnku.com./authentication",title:"认证守卫",target:"_blank",rel:"noopener noreferrer"},f=n(`<div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@auth(&#39;admin&#39;)
    // 用户已经通过认证...
@endauth

@guest(&#39;admin&#39;)
    // 用户没有通过认证...
@endguest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="environment-directives"></a></p><h4 id="环境指令" tabindex="-1"><a class="header-anchor" href="#环境指令" aria-hidden="true">#</a> 环境指令</h4><p>你可以使用 <code>@production</code> 指令来判断应用是否处于生产环境：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@production
    // 生产环境特定内容...
@endproduction
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者，你可以使用 <code>@env</code> 指令来判断应用是否运行于指定的环境：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@env(&#39;staging&#39;)
    //  应用运行于「staging」环境...
@endenv

@env([&#39;staging&#39;, &#39;production&#39;])
    // 应用运行于 「staging」或 [生产] 环境...
@endenv
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="section-directives"></a></p><h4 id="区块指令" tabindex="-1"><a class="header-anchor" href="#区块指令" aria-hidden="true">#</a> 区块指令</h4><p>你可以使用 <code>@hasSection</code> 指令来判断区块是否有内容：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@hasSection(&#39;navigation&#39;)
    &lt;div class=&quot;pull-right&quot;&gt;
        @yield(&#39;navigation&#39;)
    &lt;/div&gt;

    &lt;div class=&quot;clearfix&quot;&gt;&lt;/div&gt;
@endif
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你可以使用 <code>sectionMissing</code> 指令来判断区块是否没有内容：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@sectionMissing(&#39;navigation&#39;)
    &lt;div class=&quot;pull-right&quot;&gt;
        @include(&#39;default-navigation&#39;)
    &lt;/div&gt;
@endif
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="switch-statements"></a></p><h3 id="switch-语句" tabindex="-1"><a class="header-anchor" href="#switch-语句" aria-hidden="true">#</a> Switch 语句</h3><p>你可使用 <code>@switch</code> ， <code>@case</code> ， <code>@break</code> ， <code>@default</code> 和 <code>@endswitch</code> 语句来构造 Switch 语句：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@switch($i)
    @case(1)
        First case...
        @break

    @case(2)
        Second case...
        @break

    @default
        Default case...
@endswitch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="loops"></a></p><h3 id="循环" tabindex="-1"><a class="header-anchor" href="#循环" aria-hidden="true">#</a> 循环</h3><p>除了条件语句， Blade 还提供了与 PHP 循环结构功能相同的指令。同样，这些语句的功能和它们所对应的 PHP 语法一致：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@for ($i = 0; $i &lt; 10; $i++)
    The current value is {{ $i }}
@endfor

@foreach ($users as $user)
    &lt;p&gt;This is user {{ $user-&gt;id }}&lt;/p&gt;
@endforeach

@forelse ($users as $user)
    &lt;li&gt;{{ $user-&gt;name }}&lt;/li&gt;
@empty
    &lt;p&gt;No users&lt;/p&gt;
@endforelse

@while (true)
    &lt;p&gt;I&#39;m looping forever.&lt;/p&gt;
@endwhile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>**技巧：**在遍历 <code>foreach</code> 循环时，你可以使用 <a href="#the-loop-variable">循环变量</a> 去获取有关循环的有价值的信息，例如，你处于循环的第一个迭代亦或是处于最后一个迭代。</p></blockquote><p>使用循环时，还可以使用 <code>@continue</code> 和 <code>@break</code> 循环或跳过当前迭代：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@foreach ($users as $user)
    @if ($user-&gt;type == 1)
        @continue
    @endif

    &lt;li&gt;{{ $user-&gt;name }}&lt;/li&gt;

    @if ($user-&gt;number == 5)
        @break
    @endif
@endforeach
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你还可以在指令声明中包含继续或中断条件：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@foreach ($users as $user)
    @continue($user-&gt;type == 1)

    &lt;li&gt;{{ $user-&gt;name }}&lt;/li&gt;

    @break($user-&gt;number == 5)
@endforeach
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="the-loop-variable"></a></p><h3 id="loop-变量" tabindex="-1"><a class="header-anchor" href="#loop-变量" aria-hidden="true">#</a> Loop 变量</h3><p>在遍历 <code>foreach</code> 循环时，循环内部可以使用 <code>$loop</code> 变量。该变量提供了访问一些诸如当前的循环索引和此次迭代是首次或是末次这样的信息的方式：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@foreach ($users as $user)
    @if ($loop-&gt;first)
        This is the first iteration.
    @endif

    @if ($loop-&gt;last)
        This is the last iteration.
    @endif

    &lt;p&gt;This is user {{ $user-&gt;id }}&lt;/p&gt;
@endforeach
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你处于嵌套循环中，你可以使用循环的 <code>$loop</code> 变量的 <code>parent</code> 属性访问父级循环：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@foreach ($users as $user)
    @foreach ($user-&gt;posts as $post)
        @if ($loop-&gt;parent-&gt;first)
            This is the first iteration of the parent loop.
        @endif
    @endforeach
@endforeach
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该 <code>$loop</code> 变量还包含各种各样有用的属性：</p><table><thead><tr><th>属性</th><th>描述</th></tr></thead><tbody><tr><td><code>$loop-&gt;index</code></td><td>当前迭代的索引（从 0 开始）。</td></tr><tr><td><code>$loop-&gt;iteration</code></td><td>当前循环的迭代次数（从 1 开始）。</td></tr><tr><td><code>$loop-&gt;remaining</code></td><td>循环剩余的迭代次数。</td></tr><tr><td><code>$loop-&gt;count</code></td><td>被迭代的数组的元素个数。</td></tr><tr><td><code>$loop-&gt;first</code></td><td>当前迭代是否是循环的首次迭代。</td></tr><tr><td><code>$loop-&gt;last</code></td><td>当前迭代是否是循环的末次迭代。</td></tr><tr><td><code>$loop-&gt;even</code></td><td>当前循环的迭代次数是否是偶数。</td></tr><tr><td><code>$loop-&gt;odd</code></td><td>当前循环的迭代次数是否是奇数。</td></tr><tr><td><code>$loop-&gt;depth</code></td><td>当前循环的嵌套深度。</td></tr><tr><td><code>$loop-&gt;parent</code></td><td>嵌套循环中的父级循环。</td></tr></tbody></table><p><a name="conditional-classes"></a></p><h3 id="有条件地编译-class-样式" tabindex="-1"><a class="header-anchor" href="#有条件地编译-class-样式" aria-hidden="true">#</a> 有条件地编译 class 样式</h3><p>该 <code>@class</code> 指令有条件地编译 CSS class 样式。该指令接收一个数组，其中数组的键包含你希望添加的一个或多个样式的类名，而值是一个布尔表达式。如果数组元素有一个数值的键，它将始终包含在呈现的 class 列表中：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@php
    $isActive = false;
    $hasError = true;
@endphp

&lt;span @class([
    &#39;p-4&#39;,
    &#39;font-bold&#39; =&gt; $isActive,
    &#39;text-gray-500&#39; =&gt; ! $isActive,
    &#39;bg-red&#39; =&gt; $hasError,
])&gt;&lt;/span&gt;

&lt;span class=&quot;p-4 text-gray-500 bg-red&quot;&gt;&lt;/span&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同样，<code>@style</code> 指令可用于有条件地将内联 CSS 样式添加到一个 HTML 元素中。</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@php
    $isActive = true;
@endphp

&lt;span @style([
    &#39;background-color: red&#39;,
    &#39;font-weight: bold&#39; =&gt; $isActive,
])&gt;&lt;/span&gt;

&lt;span style=&quot;background-color: red; font-weight: bold;&quot;&gt;&lt;/span&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="additional-attributes"></a></p><h3 id="附加属性" tabindex="-1"><a class="header-anchor" href="#附加属性" aria-hidden="true">#</a> 附加属性</h3><p>为方便起见，你可以使用该 <code>@checked</code> 指令轻松判断给定的 HTML 复选框输入是否被「选中（checked）」。如果提供的条件判断为 <code>true</code> ，则此指令将回显 <code>checked</code>：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;input type=&quot;checkbox&quot;
        name=&quot;active&quot;
        value=&quot;active&quot;
        @checked(old(&#39;active&#39;, $user-&gt;active)) /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同样，该 <code>@selected</code> 指令可用于判断给定的选项是否被「选中（selected）」：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;select name=&quot;version&quot;&gt;
    @foreach ($product-&gt;versions as $version)
        &lt;option value=&quot;{{ $version }}&quot; @selected(old(&#39;version&#39;) == $version)&gt;
            {{ $version }}
        &lt;/option&gt;
    @endforeach
&lt;/select&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此外，该 <code>@disabled</code> 指令可用于判断给定元素是否为「禁用（disabled）」:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;button type=&quot;submit&quot; @disabled($errors-&gt;isNotEmpty())&gt;Submit&lt;/button&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>此外，<code>@readonly</code> 指令可以用来指示某个元素是否应该是「只读 （readonly）」的。</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;input type=&quot;email&quot;
        name=&quot;email&quot;
        value=&quot;email@laravel.com&quot;
        @readonly($user-&gt;isNotAdmin()) /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此外，<code>@required</code> 指令可以用来指示一个给定的元素是否应该是「必需的（required）」。</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;input type=&quot;text&quot;
        name=&quot;title&quot;
        value=&quot;title&quot;
        @required($user-&gt;isAdmin()) /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="including-subviews"></a></p><h3 id="包含子视图" tabindex="-1"><a class="header-anchor" href="#包含子视图" aria-hidden="true">#</a> 包含子视图</h3><blockquote><p>**技巧：**虽然你可以自由使用该 <code>@include</code> 指令，但是 Blade <a href="#components">组件</a> 提供了类似的功能，并提供了优于该 <code>@include</code> 指令的功能，如数据和属性绑定。</p></blockquote><p>Blade 的 <code>@include</code> 指令允许你从一个视图中包含另外一个 Blade 视图。父视图中的所有变量在子视图中都可以使用：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;div&gt;
    @include(&#39;shared.errors&#39;)

    &lt;form&gt;
        &lt;!-- Form Contents --&gt;
    &lt;/form&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>尽管子视图可以继承父视图中所有可以使用的数据，但是你也可以传递一个额外的数组，这个数组在子视图中也可以使用:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@include(&#39;view.name&#39;, [&#39;status&#39; =&gt; &#39;complete&#39;])
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果你想要使用 <code>@include</code> 包含一个不存在的视图，Laravel 将会抛出一个错误。如果你想要包含一个可能存在也可能不存在的视图，那么你应该使用 <code>@includeIf</code> 指令:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@includeIf(&#39;view.name&#39;, [&#39;status&#39; =&gt; &#39;complete&#39;])
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果想要使用 <code>@include</code> 包含一个给定值为 <code>true</code> 或 <code>false</code>的布尔表达式的视图，那么你可以使用 <code>@includeWhen</code> 和 <code>@includeUnless</code> 指令:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@includeWhen($boolean, &#39;view.name&#39;, [&#39;status&#39; =&gt; &#39;complete&#39;])

@includeUnless($boolean, &#39;view.name&#39;, [&#39;status&#39; =&gt; &#39;complete&#39;])
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果想要包含一个视图数组中第一个存在的视图，你可以使用 <code>includeFirst</code> 指令:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@includeFirst([&#39;custom.admin&#39;, &#39;admin&#39;], [&#39;status&#39; =&gt; &#39;complete&#39;])
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>**注意：**在视图中，你应该避免使用 <code>__DIR__</code> 和 <code>__FILE__</code> 这些常量，因为他们将引用已缓存的和已编译的视图。</p></blockquote><p><a name="rendering-views-for-collections"></a></p><h4 id="为集合渲染视图" tabindex="-1"><a class="header-anchor" href="#为集合渲染视图" aria-hidden="true">#</a> 为集合渲染视图</h4><p>你可以使用 Blade 的 <code>@each</code> 指令将循环合并在一行内：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@each(&#39;view.name&#39;, $jobs, &#39;job&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>该 <code>@each</code> 指令的第一个参数是数组或集合中的元素的要渲染的视图片段。第二个参数是你想要迭代的数组或集合，当第三个参数是一个表示当前迭代的视图的变量名。因此，如果你遍历一个名为 <code>jobs</code> 的数组，通常会在视图片段中使用 <code>job</code> 变量来访问每一个 job （jobs 数组的元素）。在你的视图片段中，可以使用 <code>key</code> 变量来访问当前迭代的键。</p><p>你亦可传递第四个参数给 <code>@each</code> 指令。当给定的数组为空时，将会渲染该参数所对应的视图。</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@each(&#39;view.name&#39;, $jobs, &#39;job&#39;, &#39;view.empty&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>**注意：**通过 <code>@each</code> 指令渲染的视图不会继承父视图的变量。如果子视图需要使用这些变量，你可以使用 <code>@foreach</code> 和 <code>@include</code> 来代替它。</p></blockquote><p><a name="the-once-directive"></a></p><h3 id="once-指令" tabindex="-1"><a class="header-anchor" href="#once-指令" aria-hidden="true">#</a> <code>@once</code> 指令</h3><p>该 <code>@once</code> 指令允许你定义模板的一部分内容，这部分内容在每一个渲染周期中只会被计算一次。该指令在使用 <a href="#stacks">堆栈</a> 推送一段特定的 JavaScript 代码到页面的头部环境下是很有用的。例如，如果你想要在循环中渲染一个特定的 <a href="#components">组件</a> ，你可能希望仅在组件渲染的首次推送 JavaScript 代码到头部：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@once
    @push(&#39;scripts&#39;)
        &lt;script&gt;
            // 你自定义的 JavaScript 代码...
        &lt;/script&gt;
    @endpush
@endonce
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由于该 <code>@once</code> 指令经常与 <code>@push</code> 或 <code>@prepend</code> 指令一起使用，为了使用方便，我们提供了 <code>@pushOnce</code> 和 <code>@prependOnce</code> 指令：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@pushOnce(&#39;scripts&#39;)
    &lt;script&gt;
        // 你自定义的 JavaScript 代码...
    &lt;/script&gt;
@endPushOnce
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="raw-php"></a></p><h3 id="原始-php-语法" tabindex="-1"><a class="header-anchor" href="#原始-php-语法" aria-hidden="true">#</a> 原始 PHP 语法</h3><p>在许多情况下，嵌入 PHP 代码到你的视图中是很有用的。你可以在模板中使用 Blade 的 <code>@php</code> 指令执行原生的 PHP 代码块：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@php
    $counter = 1;
@endphp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果只需要写一条 PHP 语句，可以在 <code>@php</code> 指令中包含该语句。</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@php($counter = 1)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="comments"></a></p><h3 id="注释" tabindex="-1"><a class="header-anchor" href="#注释" aria-hidden="true">#</a> 注释</h3><p>Blade 也允许你在视图中定义注释。但是，和 HTML 注释不同， Blade 注释不会被包含在应用返回的 HTML 中：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>{{-- 这个注释将不会出现在渲染的HTML中。 --}}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="components"></a></p><h2 id="组件" tabindex="-1"><a class="header-anchor" href="#组件" aria-hidden="true">#</a> 组件</h2><p>组件和插槽的作用与区块和布局的作用一致；不过，有些人可能觉着组件和插槽更易于理解。有两种书写组件的方法：基于类的组件和匿名组件。</p><p>你可以使用 <code>make:component</code> Artisan 命令来创建一个基于类的组件。我们将会创建一个简单的 <code>Alert</code> 组件用于说明如何使用组件。该 <code>make:component</code> 命令将会把组件置于 <code>App\\View\\Components</code> 目录中：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan make:component Alert
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>该 <code>make:component</code> 命令将会为组件创建一个视图模板。创建的视图被置于 <code>resources/views/components</code> 目录中。在为自己的应用程序编写组件时，会在 <code>app/View/Components</code> 目录和 <code>resources/views/components</code> 目录中自动发现组件，因此通常不需要进一步的组件注册。</p><p>你还可以在子目录中创建组件：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan make:component Forms/Input
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面的命令将在目录中创建一个 <code>Input</code> 组件， <code>App\\View\\Components\\Forms</code> 视图将放置在 <code>resources/views/components/forms</code> 目录中。</p><p>如果你想创建一个匿名组件（一个只有 Blade 模板并且没有类的组件），你可以在调用命令 <code>make:component</code> 使用该 <code>--view</code> 标志：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan make:component forms.input <span class="token parameter variable">--view</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面的命令将在 <code>resources/views/components/forms/input.blade.php</code>创建一个 Blade 文件，该文件中可以通过 <code>&lt;x-forms.input /&gt;</code>作为组件呈现。</p><p><a name="manually-registering-package-components"></a></p><h4 id="手动注册包组件" tabindex="-1"><a class="header-anchor" href="#手动注册包组件" aria-hidden="true">#</a> 手动注册包组件</h4><p>当为你自己的应用编写组件的时候，Laravel 将会自动发现位于 <code>app/View/Components</code> 目录和 <code>resources/views/components</code> 目录中的组件。</p><p>当然，如果你使用 Blade 组件编译一个包，你可能需要手动注册组件类及其 HTML 标签别名。你应该在包的服务提供者的 <code>boot</code> 方法中注册你的组件：</p><pre><code>use Illuminate\\Support\\Facades\\Blade;

/**
 * 注册你的包的服务
 */
public function boot(): void
{
    Blade::component(&#39;package-alert&#39;, Alert::class);
}
</code></pre><p>当组件注册完成后，便可使用标签别名来对其进行渲染。</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;x-package-alert/&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或者，你可以使用该 <code>componentNamespace</code> 方法按照约定自动加载组件类。例如，一个 <code>Nightshade</code> 包可能有 <code>Calendar</code> 和 <code>ColorPicker</code> 组件驻留在 <code>Package\\Views\\Components</code> 命名空间中：</p><pre><code>use Illuminate\\Support\\Facades\\Blade;

/**
 * 注册你的包的服务
 */
public function boot(): void
{
    Blade::componentNamespace(&#39;Nightshade\\\\Views\\\\Components&#39;, &#39;nightshade&#39;);
}
</code></pre><p>这将允许他们的供应商命名空间使用包组件，使用以下 <code>package-name::</code> 语法：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;x-nightshade::calendar /&gt;
&lt;x-nightshade::color-picker /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Blade 将自动检测链接到该组件的类，通过对组件名称进行帕斯卡大小写。使用「点」表示法也支持子目录。</p><p><a name="rendering-components"></a></p><h3 id="显示组件" tabindex="-1"><a class="header-anchor" href="#显示组件" aria-hidden="true">#</a> 显示组件</h3><p>要显示一个组件，你可以在 Blade 模板中使用 Blade 组件标签。 Blade 组件以 <code>x-</code> 字符串开始，其后紧接组件类 kebab case 形式的名称（即单词与单词之间使用短横线 <code>-</code> 进行连接）：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;x-alert/&gt;

&lt;x-user-profile/&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果组件位于 <code>App\\View\\Components</code> 目录的子目录中，你可以使用 <code>.</code> 字符来指定目录层级。例如，假设我们有一个组件位于 <code>App\\View\\Components\\Inputs\\Button.php</code>，那么我们可以像这样渲染它：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;x-inputs.button/&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果你想有条件地渲染你的组件，你可以在你的组件类上定义一个 <code>shouldRender</code> 方法。如果 <code>shouldRender</code> 方法返回 <code>false</code>，该组件将不会被渲染。</p><pre><code>use Illuminate\\Support\\Str;

/**
 * 该组件是否应该被渲染
 */
public function shouldRender(): bool
{
    return Str::length($this-&gt;message) &gt; 0;
}
</code></pre><p><a name="passing-data-to-components"></a></p><h3 id="传递数据到组件中" tabindex="-1"><a class="header-anchor" href="#传递数据到组件中" aria-hidden="true">#</a> 传递数据到组件中</h3><p>你可以使用 HTML 属性传递数据到 Blade 组件中。普通的值可以通过简单的 HTML 属性来传递给组件。PHP 表达式和变量应该通过以 <code>:</code> 字符作为前缀的变量来进行传递：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;x-alert type=&quot;error&quot; :message=&quot;$message&quot;/&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>你应该在类的构造器中定义组件的必要数据。在组件的视图中，组件的所有 public 类型的属性都是可用的。不必通过组件类的 <code>render</code> 方法传递：</p><pre><code>&lt;?php

namespace App\\View\\Components;

use Illuminate\\View\\Component;
use Illuminate\\View\\View;

class Alert extends Component
{
    /**
     * 创建组件实例。
     */
    public function __construct(
        public string $type,
        public string $message,
    ) {}

    /**
     * 获取代表该组件的视图/内容
     */
    public function render(): View
    {
        return view(&#39;components.alert&#39;);
    }
}
</code></pre><p>渲染组件时，你可以回显变量名来显示组件的 public 变量的内容：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;div class=&quot;alert alert-{{ $type }}&quot;&gt;
    {{ $message }}
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="casing"></a></p><h4 id="命名方式-casing" tabindex="-1"><a class="header-anchor" href="#命名方式-casing" aria-hidden="true">#</a> 命名方式（Casing）</h4><p>组件的构造器的参数应该使用 <code>驼峰式</code> 类型，在 HTML 属性中引用参数名时应该使用 <code>短横线隔开式 kebab-case ：单词与单词之间使用短横线 - 进行连接）</code> 。例如，给定如下的组件构造器：</p><pre><code>/**
 * 创建一个组件实例
 */
public function __construct(
    public string $alertType,
) {}
</code></pre><p><code>$alertType</code> 参数可以像这样使用：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;x-alert alert-type=&quot;danger&quot; /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="short-attribute-syntax"></a></p><h4 id="短属性语法-省略属性语法" tabindex="-1"><a class="header-anchor" href="#短属性语法-省略属性语法" aria-hidden="true">#</a> 短属性语法/省略属性语法</h4><p>当向组件传递属性时，你也可以使用「短属性语法/省略属性语法」（省略属性书写）。这通常很方便，因为属性名称经常与它们对应的变量名称相匹配。</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>{{-- 短属性语法/省略属性语法... --}}
&lt;x-profile :$userId :$name /&gt;

{{-- 等价于... --}}
&lt;x-profile :user-id=&quot;$userId&quot; :name=&quot;$name&quot; /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="escaping-attribute-rendering"></a></p><h4 id="转义属性渲染" tabindex="-1"><a class="header-anchor" href="#转义属性渲染" aria-hidden="true">#</a> 转义属性渲染</h4><p>因为一些 JavaScript 框架，例如 Alpine.js 还可以使用冒号前缀属性，你可以使用双冒号 (<code>::</code>) 前缀通知 Blade 属性不是 PHP 表达式。例如，给定以下组件：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;x-button ::class=&quot;{ danger: isDeleting }&quot;&gt;
    Submit
&lt;/x-button&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Blade 将渲染出以下 HTML 内容：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;button :class=&quot;{ danger: isDeleting }&quot;&gt;
    Submit
&lt;/button&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="component-methods"></a></p><h4 id="组件方法" tabindex="-1"><a class="header-anchor" href="#组件方法" aria-hidden="true">#</a> #### 组件方法</h4><p>除了组件模板可用的公共变量外，还可以调用组件上的任何公共方法。例如，假设一个组件有一个 <code>isSelected</code> 方法：</p><pre><code>/**
 * 确定给定选项是否为当前选定的选项。
 */
public function isSelected(string $option): bool
{
    return $option === $this-&gt;selected;
}
</code></pre><p>你可以通过调用与方法名称匹配的变量，从组件模板执行此方法：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;option {{ $isSelected($value) ? &#39;selected&#39; : &#39;&#39; }} value=&quot;{{ $value }}&quot;&gt;
    {{ $label }}
&lt;/option&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="using-attributes-slots-within-component-class"></a></p><h4 id="访问组件类中的属性和插槽" tabindex="-1"><a class="header-anchor" href="#访问组件类中的属性和插槽" aria-hidden="true">#</a> 访问组件类中的属性和插槽</h4><p>Blade 组件还允许你访问类的 render 方法中的组件名称、属性和插槽。但是，为了访问这些数据，应该从组件的 <code>render</code> 方法返回闭包。闭包将接收一个 <code>$data</code> 数组作为它的唯一参数。此数组将包含几个元素，这些元素提供有关组件的信息：</p><pre><code>use Closure;

/**
 * 获取表示组件的视图 / 内容
 */
public function render(): Closure
{
    return function (array $data) {
        // $data[&#39;componentName&#39;];
        // $data[&#39;attributes&#39;];
        // $data[&#39;slot&#39;];

        return &#39;&lt;div&gt;Components content&lt;/div&gt;&#39;;
    };
}
</code></pre><p><code>componentName</code> 等于 <code>x-</code> 前缀后面的 HTML 标记中使用的名称。所以 <code>&lt;x-alert /&gt;</code> 的 <code>componentName</code> 将是 <code>alert</code> 。 <code>attributes</code> 元素将包含 HTML 标记上的所有属性。 <code>slot</code> 元素是一个 <code>Illuminate\\Support\\HtmlString</code>实例，包含组件的插槽内容。</p><p>闭包应该返回一个字符串。如果返回的字符串与现有视图相对应，则将呈现该视图；否则，返回的字符串将作为内联 Blade 视图进行计算。</p><p><a name="additional-dependencies"></a></p><h4 id="附加依赖项" tabindex="-1"><a class="header-anchor" href="#附加依赖项" aria-hidden="true">#</a> 附加依赖项</h4><p>如果你的组件需要引入来自 Laravel 的 <a href="./container">服务容器</a>的依赖项，你可以在组件的任何数据属性之前列出这些依赖项，这些依赖项将由容器自动注入：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Services<span class="token punctuation">\\</span>AlertCreator</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 创建组件实例
 */</span>
<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">__construct</span><span class="token punctuation">(</span>
    <span class="token keyword">public</span> <span class="token class-name type-declaration">AlertCreator</span> <span class="token variable">$creator</span><span class="token punctuation">,</span>
    <span class="token keyword">public</span> <span class="token keyword type-declaration">string</span> <span class="token variable">$type</span><span class="token punctuation">,</span>
    <span class="token keyword">public</span> <span class="token keyword type-declaration">string</span> <span class="token variable">$message</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="hiding-attributes-and-methods"></a></p><h4 id="隐藏属性-方法" tabindex="-1"><a class="header-anchor" href="#隐藏属性-方法" aria-hidden="true">#</a> 隐藏属性/方法</h4><p>如果要防止某些公共方法或属性作为变量公开给组件模板，可以将它们添加到组件的 <code>$except</code> 数组属性中：</p><pre><code>&lt;?php

namespace App\\View\\Components;

use Illuminate\\View\\Component;

class Alert extends Component
{
    /**
     * 不应向组件模板公开的属性/方法。
     *
     * @var array
     */
    protected $except = [&#39;type&#39;];

    /**
     * Create the component instance.
     */
    public function __construct(
        public string $type,
    ) {}
}
</code></pre><p><a name="component-attributes"></a></p><h3 id="组件属性" tabindex="-1"><a class="header-anchor" href="#组件属性" aria-hidden="true">#</a> 组件属性</h3><p>我们已经研究了如何将数据属性传递给组件；但是，有时你可能需要指定额外的 HTML 属性，例如 <code>class</code>，这些属性不是组件运行所需的数据的一部分。通常，你希望将这些附加属性向下传递到组件模板的根元素。例如，假设我们要呈现一个 <code>alert</code> 组件，如下所示：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;x-alert type=&quot;error&quot; :message=&quot;$message&quot; class=&quot;mt-4&quot;/&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>所有不属于组件的构造器的属性都将被自动添加到组件的「属性包」中。该属性包将通过 <code>$attributes</code> 变量自动传递给组件。你可以通过回显这个变量来渲染所有的属性：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;div {{ $attributes }}&gt;
    &lt;!-- 组件内容 --&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>**注意：**此时不支持在组件中使用诸如 <code>@env</code> 这样的指令。例如， <code>&lt;x-alert :live=&quot;@env(&#39;production&#39;)&quot;/&gt;</code> 不会被编译。</p></blockquote><p><a name="default-merged-attributes"></a></p><h4 id="默认-合并属性" tabindex="-1"><a class="header-anchor" href="#默认-合并属性" aria-hidden="true">#</a> 默认 / 合并属性</h4><p>某些时候，你可能需要指定属性的默认值，或将其他值合并到组件的某些属性中。为此，你可以使用属性包的 <code>merge</code>方法。 此方法对于定义一组应始终应用于组件的默认 CSS 类特别有用：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;div {{ $attributes-&gt;merge([&#39;class&#39; =&gt; &#39;alert alert-&#39;.$type]) }}&gt;
    {{ $message }}
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>假设我们如下方所示使用该组件：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;x-alert type=&quot;error&quot; :message=&quot;$message&quot; class=&quot;mb-4&quot;/&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>最终呈现的组件 HTML 将如下所示：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;div class=&quot;alert alert-error mb-4&quot;&gt;
    &lt;!-- Contents of the $message variable --&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="conditionally-merge-classes"></a></p><h4 id="有条件地合并类" tabindex="-1"><a class="header-anchor" href="#有条件地合并类" aria-hidden="true">#</a> 有条件地合并类</h4><p>有时你可能希望在给定条件为 <code>true</code> 时合并类。 你可以通过该 <code>class</code> 方法完成此操作，该方法接受一个类数组，其中数组键包含你希望添加的一个或多个类，而值是一个布尔表达式。如果数组元素有一个数字键，它将始终包含在呈现的类列表中：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;div {{ $attributes-&gt;class([&#39;p-4&#39;, &#39;bg-red&#39; =&gt; $hasError]) }}&gt;
    {{ $message }}
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果需要将其他属性合并到组件中，可以将 <code>merge</code> 方法链接到 <code>class</code> 方法中：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;button {{ $attributes-&gt;class([&#39;p-4&#39;])-&gt;merge([&#39;type&#39; =&gt; &#39;button&#39;]) }}&gt;
    {{ $slot }}
&lt;/button&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>**技巧：**如果你需要有条件地编译不应接收合并属性的其他 HTML 元素上的类，你可以使用 <a href="#conditional-classes"><code>@class</code> 指令</a>。</p></blockquote><p><a name="non-class-attribute-merging"></a></p><h4 id="非-class-属性的合并" tabindex="-1"><a class="header-anchor" href="#非-class-属性的合并" aria-hidden="true">#</a> 非 class 属性的合并</h4><p>当合并非 <code>class</code> 属性的属性时，提供给 <code>merge</code> 方法的值将被视为该属性的「default」值。但是，与 <code>class</code> 属性不同，这些属性不会与注入的属性值合并。相反，它们将被覆盖。例如， <code>button</code> 组件的实现可能如下所示：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;button {{ $attributes-&gt;merge([&#39;type&#39; =&gt; &#39;button&#39;]) }}&gt;
    {{ $slot }}
&lt;/button&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>若要使用自定义 <code>type</code> 呈现按钮组件，可以在使用该组件时指定它。如果未指定 <code>type</code>，则将使用 <code>button</code> 作为 type 值：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;x-button type=&quot;submit&quot;&gt;
    Submit
&lt;/x-button&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>本例中 <code>button</code> 组件渲染的 HTML 为：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;button type=&quot;submit&quot;&gt;
    Submit
&lt;/button&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果希望 <code>class</code> 以外的属性将其默认值和注入值连接在一起，可以使用 <code>prepends</code> 方法。在本例中， <code>data-controller</code> 属性始终以 <code>profile-controller</code> 开头，并且任何其他注入 <code>data-controller</code> 的值都将放在该默认值之后：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;div {{ $attributes-&gt;merge([&#39;data-controller&#39; =&gt; $attributes-&gt;prepends(&#39;profile-controller&#39;)]) }}&gt;
    {{ $slot }}
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="filtering-attributes"></a></p><h4 id="保留属性-过滤属性" tabindex="-1"><a class="header-anchor" href="#保留属性-过滤属性" aria-hidden="true">#</a> 保留属性 / 过滤属性</h4><p>可以使用 <code>filter</code> 方法筛选属性。如果希望在属性包中保留属性，此方法接受应返回 <code>true</code> 的闭包：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>{{ $attributes-&gt;filter(fn (string $value, string $key) =&gt; $key == &#39;foo&#39;) }}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>为了方便起见，你可以使用 <code>whereStartsWith</code> 方法检索其键以给定字符串开头的所有属性：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>{{ $attributes-&gt;whereStartsWith(&#39;wire:model&#39;) }}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>相反，该 <code>whereDoesntStartWith</code> 方法可用于排除键以给定字符串开头的所有属性：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>{{ $attributes-&gt;whereDoesntStartWith(&#39;wire:model&#39;) }}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用 <code>first</code> 方法，可以呈现给定属性包中的第一个属性：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>{{ $attributes-&gt;whereStartsWith(&#39;wire:model&#39;)-&gt;first() }}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果要检查组件上是否存在属性，可以使用 <code>has</code> 方法。此方法接受属性名称作为其唯一参数，并返回一个布尔值，指示该属性是否存在：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@if ($attributes-&gt;has(&#39;class&#39;))
    &lt;div&gt;Class attribute is present&lt;/div&gt;
@endif
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你可以使用 <code>get</code> 方法检索特定属性的值：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>{{ $attributes-&gt;get(&#39;class&#39;) }}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="reserved-keywords"></a></p><h3 id="保留关键字" tabindex="-1"><a class="header-anchor" href="#保留关键字" aria-hidden="true">#</a> 保留关键字</h3><p>默认情况下，为了渲染组件，会保留一些关键字供 Blade 内部使用。以下关键字不能定义为组件中的公共属性或方法名称：</p>`,215),k=e("div",{class:"content-list",markdown:"1"},[e("ul",null,[e("li",null,[e("code",null,"data")]),e("li",null,[e("code",null,"render")]),e("li",null,[e("code",null,"resolveView")]),e("li",null,[e("code",null,"shouldRender")]),e("li",null,[e("code",null,"view")]),e("li",null,[e("code",null,"withAttributes")]),e("li",null,[e("code",null,"withName")])])],-1),x=n(`<p><a name="slots"></a></p><h3 id="插槽" tabindex="-1"><a class="header-anchor" href="#插槽" aria-hidden="true">#</a> 插槽</h3><p>你通常需要通过「插槽」将其他内容传递给组件。通过回显 <code>$slot</code> 变量来呈现组件插槽。为了探索这个概念，我们假设 <code>alert</code> 组件具有以下内容：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;!-- /resources/views/components/alert.blade.php --&gt;

&lt;div class=&quot;alert alert-danger&quot;&gt;
    {{ $slot }}
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们可以通过向组件中注入内容将内容传递到 <code>slot</code> ：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;x-alert&gt;
    &lt;strong&gt;Whoops!&lt;/strong&gt; Something went wrong!
&lt;/x-alert&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>有时候一个组件可能需要在它内部的不同位置放置多个不同的插槽。我们来修改一下 alert 组件，使其允许注入 「title」:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;!-- /resources/views/components/alert.blade.php --&gt;

&lt;span class=&quot;alert-title&quot;&gt;{{ $title }}&lt;/span&gt;

&lt;div class=&quot;alert alert-danger&quot;&gt;
    {{ $slot }}
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你可以使用 <code>x-slot</code> 标签来定义命名插槽的内容。任何没有在 <code>x-slot</code> 标签中的内容都将传递给 <code>$slot</code> 变量中的组件：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>x-alert</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">x-slot:</span>title</span><span class="token punctuation">&gt;</span></span>
        Server Error
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>x-slot</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>strong</span><span class="token punctuation">&gt;</span></span>Whoops!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>strong</span><span class="token punctuation">&gt;</span></span> Something went wrong!
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>x-alert</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="scoped-slots"></a></p><h4 id="作用域插槽" tabindex="-1"><a class="header-anchor" href="#作用域插槽" aria-hidden="true">#</a> 作用域插槽</h4><p>如果你使用诸如 Vue 这样的 JavaScript 框架，那么你应该很熟悉「作用域插槽」，它允许你从插槽中的组件访问数据或者方法。 Laravel 中也有类似的用法，只需在你的组件中定义 public 方法或属性，并且使用 <code>$component</code> 变量来访问插槽中的组件。在此示例中，我们将假设组件在其组件类上定义了 <code>x-alert</code> 一个公共方法： <code>formatAlert</code></p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;x-alert&gt;
    &lt;x-slot:title&gt;
        {{ $component-&gt;formatAlert(&#39;Server Error&#39;) }}
    &lt;/x-slot&gt;

    &lt;strong&gt;Whoops!&lt;/strong&gt; Something went wrong!
&lt;/x-alert&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="slot-attributes"></a></p><h4 id="插槽属性" tabindex="-1"><a class="header-anchor" href="#插槽属性" aria-hidden="true">#</a> 插槽属性</h4><p>像 Blade 组件一样，你可以为插槽分配额外的 <a href="#component-attributes">属性</a> ，例如 CSS 类名：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>x-card</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>shadow-sm<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">x-slot:</span>heading</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>font-bold<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        Heading
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>x-slot</span><span class="token punctuation">&gt;</span></span>

    Content

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">x-slot:</span>footer</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text-sm<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        Footer
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>x-slot</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>x-card</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>要与插槽属性交互，你可以访问 <code>attributes</code> 插槽变量的属性。有关如何与属性交互的更多信息，请参阅有关 <a href="#component-attributes">组件属性</a> 的文档：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@props([
    &#39;heading&#39;,
    &#39;footer&#39;,
])

&lt;div {{ $attributes-&gt;class([&#39;border&#39;]) }}&gt;
    &lt;h1 {{ $heading-&gt;attributes-&gt;class([&#39;text-lg&#39;]) }}&gt;
        {{ $heading }}
    &lt;/h1&gt;

    {{ $slot }}

    &lt;footer {{ $footer-&gt;attributes-&gt;class([&#39;text-gray-700&#39;]) }}&gt;
        {{ $footer }}
    &lt;/footer&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="inline-component-views"></a></p><h3 id="内联组件视图" tabindex="-1"><a class="header-anchor" href="#内联组件视图" aria-hidden="true">#</a> 内联组件视图</h3><p>对于小型组件而言，管理组件类和组件视图模板可能会很麻烦。因此，你可以从 <code>render</code> 方法中返回组件的内容：</p>`,23),q=n(`<p><a name="generating-inline-view-components"></a></p><h4 id="生成内联视图组件" tabindex="-1"><a class="header-anchor" href="#生成内联视图组件" aria-hidden="true">#</a> 生成内联视图组件</h4><p>要创建一个渲染内联视图的组件，你可以在运行 <code>make:component</code> 命令时使用 <code>inline</code> ：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan make:component Alert <span class="token parameter variable">--inline</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="dynamic-components"></a></p><h3 id="动态组件" tabindex="-1"><a class="header-anchor" href="#动态组件" aria-hidden="true">#</a> 动态组件</h3><p>有时你可能需要渲染一个组件，但直到运行时才知道应该渲染哪个组件。在这种情况下, 你可以使用 Laravel 内置的 <code>dynamic-component</code> 组件, 根据运行时的值或变量来渲染组件:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;x-dynamic-component :component=&quot;$componentName&quot; class=&quot;mt-4&quot; /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="manually-registering-components"></a></p><h3 id="手动注册组件" tabindex="-1"><a class="header-anchor" href="#手动注册组件" aria-hidden="true">#</a> 手动注册组件</h3><blockquote><p>**注意：**以下关于手动注册组件的文档主要适用于那些正在编写包含视图组件的 Laravel 包的用户。如果你不是在写包，这一部分的组件文档可能与你无关。</p></blockquote><p>当为自己的应用程序编写组件时，组件会在<code>app/View/Components</code>目录和<code>resources/views/components</code>目录下被自动发现。</p><p>但是，如果你正在建立一个利用 Blade 组件的包，或者将组件放在非传统的目录中，你将需要手动注册你的组件类和它的 HTML 标签别名，以便 Laravel 知道在哪里可以找到这个组件。你通常应该在你的包的服务提供者的<code>boot</code>方法中注册你的组件：</p><pre><code>use Illuminate\\Support\\Facades\\Blade;
use VendorPackage\\View\\Components\\AlertComponent;

/**
 * 注册你的包的服务。
 */
public function boot(): void
{
    Blade::component(&#39;package-alert&#39;, AlertComponent::class);
}
</code></pre><p>一旦你的组件被注册，它就可以使用它的标签别名进行渲染。</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;x-package-alert/&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="自动加载包组件" tabindex="-1"><a class="header-anchor" href="#自动加载包组件" aria-hidden="true">#</a> 自动加载包组件</h4><p>另外，你可以使用<code>componentNamespace</code>方法来自动加载组件类。例如，一个<code>Nightshade</code>包可能有<code>Calendar</code>和<code>ColorPicker</code>组件，它们位于<code>PackageViews\\Components</code>命名空间中。</p><pre><code>use Illuminate\\Support\\Facades\\Blade;

/**
 * 注册你的包的服务。
 */
public function boot(): void
{
    Blade::componentNamespace(&#39;Nightshade\\\\Views\\\\Components&#39;, &#39;nightshade&#39;);
}
</code></pre><p>这将允许使用<code>package-name::</code>语法的供应商名称空间来使用包的组件。</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;x-nightshade::calendar /&gt;
&lt;x-nightshade::color-picker /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Blade 将通过组件名称的驼峰式大小写 (pascal-casing) 自动检测与该组件链接的类。也支持使用 &quot;点 &quot;符号的子目录。</p><p><a name="anonymous-components"></a></p><h3 id="匿名组件" tabindex="-1"><a class="header-anchor" href="#匿名组件" aria-hidden="true">#</a> 匿名组件</h3><p>与行内组件相同，匿名组件提供了一个通过单个文件管理组件的机制。然而，匿名组件使用的是一个没有关联类的单一视图文件。要定义一个匿名组件，你只需将 Blade 模板置于 <code>resources/views/components</code> 目录下。例如，假设你在 <code>resources/views/components/alert.blade.php</code>中定义了一个组件：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;x-alert/&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果组件在 <code>components</code> 目录的子目录中，你可以使用 <code>.</code> 字符来指定其路径。例如，假设组件被定义在 <code>resources/views/components/inputs/button.blade.php</code> 中，你可以像这样渲染它：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;x-inputs.button/&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="anonymous-index-components"></a></p><h4 id="匿名索引组件" tabindex="-1"><a class="header-anchor" href="#匿名索引组件" aria-hidden="true">#</a> 匿名索引组件</h4><p>有时，当一个组件由许多 Blade 模板组成时，你可能希望将给定组件的模板分组到一个目录中。例如，想象一个具有以下目录结构的「可折叠」组件：</p><div class="language-none line-numbers-mode" data-ext="none"><pre class="language-none"><code>/resources/views/components/accordion.blade.php
/resources/views/components/accordion/item.blade.php
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>此目录结构允许你像这样呈现组件及其项目：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;x-accordion&gt;
    &lt;x-accordion.item&gt;
        ...
    &lt;/x-accordion.item&gt;
&lt;/x-accordion&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然而，为了通过 <code>x-accordion</code> 渲染组件， 我们被迫将「索引」组件模板放置在 <code>resources/views/components</code> 目录中，而不是与其他相关的模板嵌套在 <code>accordion</code> 目录中。</p><p>幸运的是，Blade 允许你 <code>index.blade.php</code> 在组件的模板目录中放置文件。当 <code>index.blade.php</code> 组件存在模板时，它将被呈现为组件的「根」节点。因此，我们可以继续使用上面示例中给出的相同 Blade 语法；但是，我们将像这样调整目录结构：</p><div class="language-none line-numbers-mode" data-ext="none"><pre class="language-none"><code>/resources/views/components/accordion/index.blade.php
/resources/views/components/accordion/item.blade.php
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="data-properties-attributes"></a></p><h4 id="数据-属性" tabindex="-1"><a class="header-anchor" href="#数据-属性" aria-hidden="true">#</a> 数据 / 属性</h4><p>由于匿名组件没有任何关联类，你可能想要区分哪些数据应该被作为变量传递给组件，而哪些属性应该被存放于 <a href="#component-attributes">属性包</a>中。</p><p>你可以在组件的 Blade 模板的顶层使用 <code>@props</code> 指令来指定哪些属性应该作为数据变量。组件中的其他属性都将通过属性包的形式提供。如果你想要为某个数据变量指定一个默认值，你可以将属性名作为数组键，默认值作为数组值来实现：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;!-- /resources/views/components/alert.blade.php --&gt;

@props([&#39;type&#39; =&gt; &#39;info&#39;, &#39;message&#39;])

&lt;div {{ $attributes-&gt;merge([&#39;class&#39; =&gt; &#39;alert alert-&#39;.$type]) }}&gt;
    {{ $message }}
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>给定上面的组件定义，我们可以像这样渲染组件：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;x-alert type=&quot;error&quot; :message=&quot;$message&quot; class=&quot;mb-4&quot;/&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="accessing-parent-data"></a></p><h4 id="访问父组件数据" tabindex="-1"><a class="header-anchor" href="#访问父组件数据" aria-hidden="true">#</a> 访问父组件数据</h4><p>有时你可能希望从子组件中的父组件访问数据。在这些情况下，你可以使用该 <code>@aware</code> 指令。例如，假设我们正在构建一个由父 <code>&lt;x-menu&gt;</code> 和 子组成的复杂菜单组件 <code>&lt;x-menu.item&gt;</code>：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;x-menu color=&quot;purple&quot;&gt;
    &lt;x-menu.item&gt;...&lt;/x-menu.item&gt;
    &lt;x-menu.item&gt;...&lt;/x-menu.item&gt;
&lt;/x-menu&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该 <code>&lt;x-menu&gt;</code> 组件可能具有如下实现：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;!-- /resources/views/components/menu/index.blade.php --&gt;

@props([&#39;color&#39; =&gt; &#39;gray&#39;])

&lt;ul {{ $attributes-&gt;merge([&#39;class&#39; =&gt; &#39;bg-&#39;.$color.&#39;-200&#39;]) }}&gt;
    {{ $slot }}
&lt;/ul&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因为 <code>color</code> 只被传递到父级 (<code>&lt;x-menu&gt;</code>)中，所以 <code>&lt;x-menu.item&gt;</code> 在内部是不可用的。但是，如果我们使用该 <code>@aware</code> 指令，我们也可以使其在内部可用 <code>&lt;x-menu.item&gt;</code> ：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;!-- /resources/views/components/menu/item.blade.php --&gt;

@aware([&#39;color&#39; =&gt; &#39;gray&#39;])

&lt;li {{ $attributes-&gt;merge([&#39;class&#39; =&gt; &#39;text-&#39;.$color.&#39;-800&#39;]) }}&gt;
    {{ $slot }}
&lt;/li&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>**注意：**该 <code>@aware</code> 指令无法访问未通过 HTML 属性显式传递给父组件的父数据。<code>@aware</code> 指令 不能访问未显式传递给父组件的默认值 <code>@props</code> 。</p></blockquote><p><a name="anonymous-component-paths"></a></p><h3 id="匿名组件路径" tabindex="-1"><a class="header-anchor" href="#匿名组件路径" aria-hidden="true">#</a> 匿名组件路径</h3><p>如前所述，匿名组件通常是通过在你的<code>resources/views/components</code>目录下放置一个 Blade 模板来定义的。然而，你可能偶尔想在 Laravel 注册其他匿名组件的路径，除了默认路径。</p><p><code>anonymousComponentPath</code>方法接受匿名组件位置的「路径」作为它的第一个参数，并接受一个可选的「命名空间」作为它的第二个参数，组件应该被放在这个命名空间下。通常，这个方法应该从你的应用程序的一个<a href="./providers">服务提供者</a> 的<code>boot</code>方法中调用。</p><pre><code>/**
 * 引导任何应用服务。
 */
public function boot(): void
{
    Blade::anonymousComponentPath(__DIR__.&#39;/../components&#39;);
}
</code></pre><p>当组件路径被注册而没有指定前缀时，就像上面的例子一样，它们在你的 Blade 组件中可能也没有相应的前缀。例如，如果一个<code>panel.blade.php</code>组件存在于上面注册的路径中，它可能会被呈现为这样。</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;x-panel /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>前缀「命名空间」可以作为第二个参数提供给<code>anonymousComponentPath</code>方法。</p><pre><code>Blade::anonymousComponentPath(__DIR__.&#39;/../components&#39;, &#39;dashboard&#39;);
</code></pre><p>当提供一个前缀时，在该「命名空间」内的组件可以在渲染时将该组件的命名空间前缀到该组件的名称。</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;x-dashboard::panel /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="building-layouts"></a></p><h2 id="构建布局" tabindex="-1"><a class="header-anchor" href="#构建布局" aria-hidden="true">#</a> 构建布局</h2><p><a name="layouts-using-components"></a></p><h3 id="使用组件布局" tabindex="-1"><a class="header-anchor" href="#使用组件布局" aria-hidden="true">#</a> 使用组件布局</h3><p>大多数 web 应用程序在不同的页面上有相同的总体布局。如果我们必须在创建的每个视图中重复整个布局 HTML，那么维护我们的应用程序将变得非常麻烦和困难。谢天谢地，将此布局定义为单个 <a href="#components">Blade 组件</a> 并在整个应用程序中非常方便地使用它。</p><p><a name="defining-the-layout-component"></a></p><h4 id="定义布局组件" tabindex="-1"><a class="header-anchor" href="#定义布局组件" aria-hidden="true">#</a> 定义布局组件</h4><p>例如，假设我们正在构建一个「todo list」应用程序。我们可以定义如下所示的 <code>layout</code> 组件：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;!-- resources/views/components/layout.blade.php --&gt;

&lt;html&gt;
    &lt;head&gt;
        &lt;title&gt;{{ $title ?? &#39;Todo Manager&#39; }}&lt;/title&gt;
    &lt;/head&gt;
    &lt;body&gt;
        &lt;h1&gt;Todos&lt;/h1&gt;
        &lt;hr/&gt;
        {{ $slot }}
    &lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="applying-the-layout-component"></a></p><h4 id="应用布局组件" tabindex="-1"><a class="header-anchor" href="#应用布局组件" aria-hidden="true">#</a> 应用布局组件</h4><p>一旦定义了 <code>layout</code> 组件，我们就可以创建一个使用该组件的 Blade 视图。在本例中，我们将定义一个显示任务列表的简单视图：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;!-- resources/views/tasks.blade.php --&gt;

&lt;x-layout&gt;
    @foreach ($tasks as $task)
        {{ $task }}
    @endforeach
&lt;/x-layout&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>请记住，注入到组件中的内容将提供给 <code>layout</code> 组件中的默认 <code>$slot</code> 变量。正如你可能已经注意到的，如果提供了 <code>$title</code> 插槽，那么我们的 <code>layout</code> 也会尊从该插槽；否则，将显示默认的标题。我们可以使用组件文档中讨论的标准槽语法从任务列表视图中插入自定义标题。 我们可以使用<a href="#components">组件文档</a>中讨论的标准插槽语法从任务列表视图中注入自定义标题：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;!-- resources/views/tasks.blade.php --&gt;

&lt;x-layout&gt;
    &lt;x-slot:title&gt;
        Custom Title
    &lt;/x-slot&gt;

    @foreach ($tasks as $task)
        {{ $task }}
    @endforeach
&lt;/x-layout&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在我们已经定义了布局和任务列表视图，我们只需要从路由中返回 <code>task</code> 视图即可：</p><pre><code>use App\\Models\\Task;

Route::get(&#39;/tasks&#39;, function () {
    return view(&#39;tasks&#39;, [&#39;tasks&#39; =&gt; Task::all()]);
});
</code></pre><p><a name="layouts-using-template-inheritance"></a></p><h3 id="使用模板继承进行布局" tabindex="-1"><a class="header-anchor" href="#使用模板继承进行布局" aria-hidden="true">#</a> 使用模板继承进行布局</h3><p><a name="defining-a-layout"></a></p><h4 id="定义一个布局" tabindex="-1"><a class="header-anchor" href="#定义一个布局" aria-hidden="true">#</a> 定义一个布局</h4><p>布局也可以通过 「模板继承」 创建。在引入 <a href="#components">组件</a> 之前，这是构建应用程序的主要方法。</p><p>让我们看一个简单的例子做开头。首先，我们将检查页面布局。由于大多数 web 应用程序在不同的页面上保持相同的总体布局，因此将此布局定义为单一视图非常方便：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;!-- resources/views/layouts/app.blade.php --&gt;

&lt;html&gt;
    &lt;head&gt;
        &lt;title&gt;App Name - @yield(&#39;title&#39;)&lt;/title&gt;
    &lt;/head&gt;
    &lt;body&gt;
        @section(&#39;sidebar&#39;)
            这是一个主要的侧边栏
        @show

        &lt;div class=&quot;container&quot;&gt;
            @yield(&#39;content&#39;)
        &lt;/div&gt;
    &lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如你所见，此文件包含经典的 HTML 标记。但是，请注意 <code>@section</code> 和 <code>@yield</code> 指令。顾名思义， <code>@section</code> 指令定义内容的一部分，而 <code>@yield</code> 指令用于显示给定部分的内容。</p><p>现在我们已经为应用程序定义了一个布局，让我们定义一个继承该布局的子页面。</p><p><a name="extending-a-layout"></a></p><h4 id="继承布局" tabindex="-1"><a class="header-anchor" href="#继承布局" aria-hidden="true">#</a> 继承布局</h4><p>定义子视图时，请使用 <code>@extends</code> Blade 指令指定子视图应「继承」的布局。扩展 Blade 布局的视图可以使用 <code>@section</code> 指令将内容注入布局的节点中。请记住，如上面的示例所示，这些部分的内容将使用 <code>@yield</code> 显示在布局中：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;!-- resources/views/child.blade.php --&gt;

@extends(&#39;layouts.app&#39;)

@section(&#39;title&#39;, &#39;Page Title&#39;)

@section(&#39;sidebar&#39;)
    @parent

    &lt;p&gt;This is appended to the master sidebar.&lt;/p&gt;
@endsection

@section(&#39;content&#39;)
    &lt;p&gt;This is my body content.&lt;/p&gt;
@endsection
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在本例中，<code>sidebar</code> 部分使用 <code>@parent</code> 指令将内容追加（而不是覆盖）到局部的侧栏位置。在呈现视图时， <code>@parent</code> 指令将被布局的内容替换。</p><blockquote><p>**技巧：**与前面的示例相反，本 <code>sidebar</code> 节以 <code>@endsection</code> 结束，而不是以 <code>@show</code> 结束。 <code>@endsection</code> 指令将只定义一个节，<code>@show</code> 将定义并 <strong>立即 yield</strong> 该节。</p></blockquote><p>该 <code>@yield</code> 指令还接受默认值作为其第二个参数。如果要生成的节点未定义，则将呈现此内容：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@yield(&#39;content&#39;, &#39;Default content&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="forms"></a></p><h2 id="表单" tabindex="-1"><a class="header-anchor" href="#表单" aria-hidden="true">#</a> 表单</h2><p><a name="csrf-field"></a></p><h3 id="csrf-字段" tabindex="-1"><a class="header-anchor" href="#csrf-字段" aria-hidden="true">#</a> CSRF 字段</h3><p>无论何时在应用程序中定义 HTML 表单，都应该在表单中包含一个隐藏的 CSRF 令牌字段，以便 <a href="./csrf">CSRF 保护中间件</a> 可以验证请求。你可以使用 <code>@csrf</code> Blade 指令生成令牌字段：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;form method=&quot;POST&quot; action=&quot;/profile&quot;&gt;
    @csrf

    ...
&lt;/form&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="method-field"></a></p><h3 id="method-字段" tabindex="-1"><a class="header-anchor" href="#method-字段" aria-hidden="true">#</a> Method 字段</h3><p>由于 HTML 表单不能发出 <code>PUT</code>、<code>PATCH</code>或 <code>DELETE</code> 请求，因此需要添加一个隐藏的 <code>_method</code> 字段来欺骗这些 HTTP 动词。 <code>@method</code> Blade 指令可以为你创建此字段：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;form action=&quot;/foo/bar&quot; method=&quot;POST&quot;&gt;
    @method(&#39;PUT&#39;)

    ...
&lt;/form&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="validation-errors"></a></p><h3 id="表单校验错误" tabindex="-1"><a class="header-anchor" href="#表单校验错误" aria-hidden="true">#</a> 表单校验错误</h3><p>该 <code>@error</code> 指令可用于快速检查给定属性是否存在 <a href="./validation#quick-displaying-the-validation-errors">验证错误消息</a> 。在 <code>@error</code> 指令中，可以回显 <code>$message</code> 变量以显示错误消息：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;!-- /resources/views/post/create.blade.php --&gt;

&lt;label for=&quot;title&quot;&gt;Post Title&lt;/label&gt;

&lt;input id=&quot;title&quot;
    type=&quot;text&quot;
    class=&quot;@error(&#39;title&#39;) is-invalid @enderror&quot;&gt;

@error(&#39;title&#39;)
    &lt;div class=&quot;alert alert-danger&quot;&gt;{{ $message }}&lt;/div&gt;
@enderror
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由于该 <code>@error</code> 指令编译为「if」语句，因此你可以在 <code>@else</code> 属性没有错误时使用该指令来呈现内容：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;!-- /resources/views/auth.blade.php --&gt;

&lt;label for=&quot;email&quot;&gt;Email address&lt;/label&gt;

&lt;input id=&quot;email&quot;
    type=&quot;email&quot;
    class=&quot;@error(&#39;email&#39;) is-invalid @else is-valid @enderror&quot;&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你可以将 <a href="./validation#named-error-bags">特定错误包的名称</a> 作为第二个参数传递给 <code>@error</code> 指令，以便在包含多个表单的页面上检索验证错误消息：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;!-- /resources/views/auth.blade.php --&gt;

&lt;label for=&quot;email&quot;&gt;Email address&lt;/label&gt;

&lt;input id=&quot;email&quot;
    type=&quot;email&quot;
    class=&quot;@error(&#39;email&#39;, &#39;login&#39;) is-invalid @enderror&quot;&gt;

@error(&#39;email&#39;, &#39;login&#39;)
    &lt;div class=&quot;alert alert-danger&quot;&gt;{{ $message }}&lt;/div&gt;
@enderror
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="stacks"></a></p><h2 id="堆栈" tabindex="-1"><a class="header-anchor" href="#堆栈" aria-hidden="true">#</a> 堆栈</h2><p>Blade 允许你推送到可以在其他视图或布局中的其他地方渲染的命名堆栈。这对于指定子视图所需的任何 JavaScript 库特别有用：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@push(&#39;scripts&#39;)
    &lt;script src=&quot;/example.js&quot;&gt;&lt;/script&gt;
@endpush
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你想在给定的布尔表达式评估为 <code>true</code> 时 <code>@push</code> 内容，你可以使用 <code>@pushIf</code> 指令。</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@pushIf($shouldPush, &#39;scripts&#39;)
    &lt;script src=&quot;/example.js&quot;&gt;&lt;/script&gt;
@endPushIf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你可以根据需要多次推入堆栈。要呈现完整的堆栈内容，请将堆栈的名称传递给 <code>@stack</code> 指令：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;head&gt;
    &lt;!-- Head Contents --&gt;

    @stack(&#39;scripts&#39;)
&lt;/head&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果要将内容前置到堆栈的开头，应使用 <code>@prepend</code> 指令：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@push(&#39;scripts&#39;)
    This will be second...
@endpush

// Later...

@prepend(&#39;scripts&#39;)
    This will be first...
@endprepend
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="service-injection"></a></p><h2 id="服务注入" tabindex="-1"><a class="header-anchor" href="#服务注入" aria-hidden="true">#</a> 服务注入</h2><p>该 <code>@inject</code> 指令可用于从 Laravel <a href="./container">服务容器</a>中检索服务。传递给 <code>@inject</code> 的第一个参数是要将服务放入的变量的名称，而第二个参数是要解析的服务的类或接口名称：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@inject(&#39;metrics&#39;, &#39;App\\Services\\MetricsService&#39;)

&lt;div&gt;
    Monthly Revenue: {{ $metrics-&gt;monthlyRevenue() }}.
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="rendering-inline-blade-templates"></a></p><h2 id="渲染内联-blade-模板" tabindex="-1"><a class="header-anchor" href="#渲染内联-blade-模板" aria-hidden="true">#</a> 渲染内联 Blade 模板</h2><p>有时你可能需要将原始 Blade 模板字符串转换为有效的 HTML。你可以使用 <code>Blade</code> 门面提供的 <code>render</code> 方法来完成此操作。该 <code>render</code> 方法接受 Blade 模板字符串和提供给模板的可选数据数组：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Support<span class="token punctuation">\\</span>Facades<span class="token punctuation">\\</span>Blade</span><span class="token punctuation">;</span>

<span class="token keyword">return</span> <span class="token class-name static-context">Blade</span><span class="token operator">::</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Hello, {{ $name }}&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;name&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;Julian Bashir&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Laravel 通过将内联 Blade 模板写入 <code>storage/framework/views</code> 目录来呈现它们。如果你希望 Laravel 在渲染 Blade 模板后删除这些临时文件，你可以为 <code>deleteCachedView</code> 方法提供参数：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">return</span> <span class="token class-name static-context">Blade</span><span class="token operator">::</span><span class="token function">render</span><span class="token punctuation">(</span>
    <span class="token string single-quoted-string">&#39;Hello, {{ $name }}&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;name&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;Julian Bashir&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token argument-name">deleteCachedView</span><span class="token punctuation">:</span> <span class="token constant boolean">true</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="rendering-blade-fragments"></a></p><h2 id="渲染-blade-片段" tabindex="-1"><a class="header-anchor" href="#渲染-blade-片段" aria-hidden="true">#</a> 渲染 Blade 片段</h2>`,138),$={href:"https://turbo.hotwired.dev/",target:"_blank",rel:"noopener noreferrer"},w={href:"https://htmx.org/",target:"_blank",rel:"noopener noreferrer"},y=e("code",null,"@fragment",-1),B=e("code",null,"@endfragment",-1),S=n(`<div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@fragment(&#39;user-list&#39;)
    &lt;ul&gt;
        @foreach ($users as $user)
            &lt;li&gt;{{ $user-&gt;name }}&lt;/li&gt;
        @endforeach
    &lt;/ul&gt;
@endfragment
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后，在渲染使用该模板的视图时，你可以调用 <code>fragment</code> 方法来指定只有指定的片段应该被包含在传出的 HTTP 响应中。</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">return</span> <span class="token function">view</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;dashboard&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;users&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$users</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">fragment</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;user-list&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>fragmentIf</code> 方法允许你根据一个给定的条件有条件地返回一个视图的片段。否则，整个视图将被返回。</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">return</span> <span class="token function">view</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;dashboard&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;users&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$users</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">fragmentIf</span><span class="token punctuation">(</span><span class="token variable">$request</span><span class="token operator">-&gt;</span><span class="token function">hasHeader</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;HX-Request&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;user-list&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>fragments</code> 和 <code>fragmentsIf</code> 方法允许你在响应中返回多个视图片段。这些片段将被串联起来。</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token function">view</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;dashboard&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;users&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$users</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">fragments</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;user-list&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;comment-list&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">view</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;dashboard&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;users&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$users</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">fragmentsIf</span><span class="token punctuation">(</span>
        <span class="token variable">$request</span><span class="token operator">-&gt;</span><span class="token function">hasHeader</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;HX-Request&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;user-list&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;comment-list&#39;</span><span class="token punctuation">]</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="extending-blade"></a></p><h2 id="扩展-blade" tabindex="-1"><a class="header-anchor" href="#扩展-blade" aria-hidden="true">#</a> 扩展 Blade</h2><p>Blade 允许你使用 <code>directive</code> 方法定义自己的自定义指令。当 Blade 编译器遇到自定义指令时，它将使用该指令包含的表达式调用提供的回调。</p><p>下面的示例创建了一个 <code>@datetime($var)</code> 指令，该指令格式化给定的 <code>$var</code>，它应该是 <code>DateTime</code> 的一个实例：</p><pre><code>&lt;?php

namespace App\\Providers;

use Illuminate\\Support\\Facades\\Blade;
use Illuminate\\Support\\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * 注册应用的服务
     */
    public function register(): void
    {
        // ...
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Blade::directive(&#39;datetime&#39;, function (string $expression) {
            return &quot;&lt;?php echo ($expression)-&gt;format(&#39;m/d/Y H:i&#39;); ?&gt;&quot;;
        });
    }
}
</code></pre><p>正如你所见，我们将 <code>format</code> 方法应用到传递给指令中的任何表达式上。因此，在本例中，此指令生成的最终 PHP 将是：</p><pre><code>&lt;?php echo ($var)-&gt;format(&#39;m/d/Y H:i&#39;); ?&gt;
</code></pre><blockquote><p>**注意：**更新 Blade 指令的逻辑后，需要删除所有缓存的 Blade 视图。可以使用 <code>view:clear</code> Artisan 命令。</p></blockquote><p><a name="custom-echo-handlers"></a></p><h3 id="自定义回显处理程序" tabindex="-1"><a class="header-anchor" href="#自定义回显处理程序" aria-hidden="true">#</a> 自定义回显处理程序</h3>`,17),_=e("code",null,"__toString",-1),P={href:"https://www.php.net/manual/en/language.oop5.magic.php#object.tostring",target:"_blank",rel:"noopener noreferrer"},H=e("code",null,"__toString",-1),T=e("code",null,"__toString",-1),L=n(`<p>在这些情况下，Blade 允许您为该特定类型的对象注册自定义回显处理程序。为此，您应该调用 Blade 的 <code>stringable</code> 方法。该 <code>stringable</code> 方法接受一个闭包。这个闭包类型应该提示它负责呈现的对象的类型。通常，应该在应用程序的 <code>AppServiceProvider</code> 类的 <code>boot</code> 方法中调用该 <code>stringable</code> 方法：</p><pre><code>use Illuminate\\Support\\Facades\\Blade;
use Money\\Money;

/**
 * Bootstrap any application services.
 */
public function boot(): void
{
    Blade::stringable(function (Money $money) {
        return $money-&gt;formatTo(&#39;en_GB&#39;);
    });
}
</code></pre><p>定义自定义回显处理程序后，您可以简单地回显 Blade 模板中的对象：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>Cost: {{ $money }}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="custom-if-statements"></a></p><h3 id="自定义-if-声明" tabindex="-1"><a class="header-anchor" href="#自定义-if-声明" aria-hidden="true">#</a> 自定义 if 声明</h3><p>在定义简单的自定义条件语句时，编写自定义指令通常比较复杂。因此，Blade 提供了一个 Blade::if 方法，允许你使用闭包快速定义自定义条件指令。例如，让我们定义一个自定义条件来检查为应用程序配置的默认 「存储」。我们可以在 AppServiceProvider 的 boot 方法中执行此操作：</p><pre><code>use Illuminate\\Support\\Facades\\Blade;

/**
 * Bootstrap any application services.
 */
public function boot(): void
{
    Blade::if(&#39;disk&#39;, function (string $value) {
        return config(&#39;filesystems.default&#39;) === $value;
    });
}
</code></pre><p>一旦定义了自定义条件，就可以在模板中使用它:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@disk(&#39;local&#39;)
    &lt;!-- The application is using the local disk... --&gt;
@elsedisk(&#39;s3&#39;)
    &lt;!-- The application is using the s3 disk... --&gt;
@else
    &lt;!-- The application is using some other disk... --&gt;
@enddisk

@unlessdisk(&#39;local&#39;)
    &lt;!-- The application is not using the local disk... --&gt;
@enddisk
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10);function C(i,A){const d=t("ExternalLinkIcon");return c(),r("div",null,[p,e("p",null,[a("想让你的 Blade 模板更上一层楼，轻松构建动态界面吗？看看"),e("a",v,[a("Laravel Livewire"),s(d)]),a("。Livewire 允许你编写 Blade 组件，这些组件具有动态功能，通常只能通过 React 或 Vue 等前端框架来实现，这提供了一个很好的方法来构建现代，没有复杂前端映射，基于客户端渲染，无须很多的构建步骤的 JavaScript 框架。")]),b,e("p",null,[a("如有需要，你亦可在使用 "),m,a(" 和 "),g,a(" 指令时指定 "),e("a",h,[a("认证守卫"),s(d)]),a("：")]),f,k,x,e("pre",null,[e("code",null,`/**
 * 获取组件的视图 / 内容。
 */
public function render(): string
{
    return <<<'blade'
        <div class="alert alert-danger">
            `+o(i.$slot)+`
        </div>
    blade;
}
`,1)]),q,e("p",null,[a("当使用 "),e("a",$,[a("Turbo"),s(d)]),a(" 和 "),e("a",w,[a("htmx"),s(d)]),a(" 等前端框架时，你可能偶尔需要在你的HTTP响应中只返回Blade模板的一个部分。Blade「片段（fragment）」允许你这样做。要开始，将你的Blade模板的一部分放在"),y,a("和"),B,a("指令中。")]),S,e("p",null,[a("如果你试图使用 Blade 来「回显」一个对象， 该对象的 "),_,a(" 方法将被调用。该"),e("a",P,[H,s(d)]),a(" 方法是 PHP 内置的「魔术方法」之一。但是，有时你可能无法控制 "),T,a(" 给定类的方法，例如当你与之交互的类属于第三方库时。")]),L])}const J=l(u,[["render",C],["__file","blade.html.vue"]]);export{J as default};
