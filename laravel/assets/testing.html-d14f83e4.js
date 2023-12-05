import{_ as d}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as r,c,b as a,d as e,e as i,a as n}from"./app-8cdff07c.js";const l={},o=n(`<h1 id="测试-入门" tabindex="-1"><a class="header-anchor" href="#测试-入门" aria-hidden="true">#</a> 测试：入门</h1><ul><li><a href="#introduction">介绍</a></li><li><a href="#environment">环境</a></li><li><a href="#creating-tests">创建测试</a></li><li><a href="#running-tests">运行测试</a><ul><li><a href="#running-tests-in-parallel">并行运行测试</a></li><li><a href="#reporting-test-coverage">测试覆盖率报告</a></li><li><a href="#profiling-tests">性能分析测试</a></li></ul></li></ul><p><a name="introduction"></a></p><h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2><p><code>Laravel</code> 在构建时考虑到了测试。实际上，对 <code>PHPUnit</code> 测试的支持是开箱即用的，并且已经为你的应用程序设置了一个 <code>phpunit.xml</code> 文件。 <code>Laravel</code>还附带了方便的帮助方法，允许你对应用程序进行富有表现力的测试。</p><p>默认情况下，你应用程序的<code>tests</code>目录下包含两个子目录：<code>Feature</code> 和 <code>Unit</code>。<strong>单元测试</strong>（<code>Unit</code>）是针对你的代码中非常少，而且相对独立的一部分代码来进行的测试。实际上，大部分单元测试都是针对单个方法进行的。在你的 <code>Unit</code> 测试目录中进行测试，不会启动你的 <code>Laravel</code> 应用程序，因此无法访问你的应用程序的数据库或其他框架服务。</p><p><strong>功能测试</strong>（<code>Feature</code>）能测试你的大部分代码，包括多个对象如何相互交互，甚至是对 <code>JSON</code> 端点的完整 <code>HTTP</code> 请求。 <strong>通常，你的大多数测试应该是功能测试。这些类型的测试可以最大程度地确保你的系统作为一个整体按预期运行。</strong></p><p><code>Feature</code> 和 <code>Unit</code> 测试目录中都提供了一个 <code>ExampleTest.php</code> 文件。 安装新的 Laravel 应用程序后，执行 <code>vendor/bin/phpunit</code> 或 <code>php artisan test</code> 命令来运行你的测试。</p><p><a name="environment"></a></p><h2 id="环境" tabindex="-1"><a class="header-anchor" href="#环境" aria-hidden="true">#</a> 环境</h2><p>运行测试时，由于 <code>phpunit.xml</code> 文件中定义了 <a href="./configuration#environment-configuration">环境变量</a> ，<code>Laravel</code> 会自动配置环境变量为 <code>testing</code>。<code>Laravel</code> 还会在测试时自动将会话和缓存配置到 <code>array</code> 驱动程序，这意味着在测试时不会持久化会话或缓存数据。</p><p>你可以根据需要自由定义其他测试环境配置值。 <code>testing</code> 环境变量可以在应用程序的 <code>phpunit.xml</code> 文件中配置，但请确保在运行测试之前使用 <code>config:clear</code> Artisan 命令清除配置缓存！</p><p><a name="the-env-testing-environment-file"></a></p><h4 id="env-testing-环境配置文件" tabindex="-1"><a class="header-anchor" href="#env-testing-环境配置文件" aria-hidden="true">#</a> <code>.env.testing</code> 环境配置文件</h4><p>此外，你可以在项目的根目录中创建一个 <code>.env.testing</code> 文件。 当运行 <code>PHPUnit</code> 测试或使用 <code>--env=testing</code> 选项执行 Artisan 命令时，将不会使用 <code>.env</code> 文件，而是使用此文件。</p><p><a name="the-creates-application-trait"></a></p><h4 id="createsapplication-trait" tabindex="-1"><a class="header-anchor" href="#createsapplication-trait" aria-hidden="true">#</a> <code>CreatesApplication</code> Trait</h4><p>Laravel 包含一个 <code>CreatesApplication</code> Trait，该<code>Trait</code>应用于应用程序的基类 <code>TestCase</code> 。 这个 <code>trait</code> 包含一个 <code>createApplication</code> 方法，它在运行测试之前引导 Laravel 应用程序。 重要的是，应将此 <code>trait</code> 保留在其原始位置，因为某些功能（例如 <code>Laravel</code> 的并行测试功能）依赖于它。</p><p><a name="creating-tests"></a></p><h2 id="创建测试" tabindex="-1"><a class="header-anchor" href="#创建测试" aria-hidden="true">#</a> 创建测试</h2><p>要创建新的测试用例，请使用Artisan 命令： <code>make:test</code> 。 默认情况下，测试将放置在 <code>tests/Feature</code> 目录中：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan make:test UserTest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果想在 <code>tests/Unit</code> 目录中创建一个测试，你可以在执行 <code>make:test</code> 命令时使用 <code>--unit</code> 选项：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan make:test UserTest <span class="token parameter variable">--unit</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,24),v={href:"https://pestphp.com",target:"_blank",rel:"noopener noreferrer"},p=a("code",null,"make:test",-1),u=a("code",null,"--pest",-1),b=n(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan make:test UserTest <span class="token parameter variable">--pest</span>
php artisan make:test UserTest <span class="token parameter variable">--unit</span> <span class="token parameter variable">--pest</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>技巧</strong><br> 可以使用 <a href="./artisan#stub-customization">Stub 定制</a>来自定义测试。</p></blockquote>`,2),m={href:"https://phpunit.de/",target:"_blank",rel:"noopener noreferrer"},h=a("code",null,"vendor/bin/phpunit",-1),g=a("code",null,"php artisan test",-1),x=n(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;?php

namespace Tests\\\\Unit;

use PHPUnit\\\\Framework\\\\TestCase;

class ExampleTest extends TestCase
{
    /**
     * 基础测试样例
     *
     * @return void
     */
    public function test_basic_test()
    {
        $this-&gt;assertTrue(true);
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注意：如果你在测试类中定义自己的 <code>setUp</code>  或 <code>tearDown</code>  方法，请务必在父类上调用各自的 <code>parent::setUp()</code>  或 <code>parent::tearDown()</code>  方法。</p></blockquote><p><strong><strong>运行测试</strong></strong></p><p>正如前面提到的，编写测试后，可以使用 <code>phpunit</code>  命令来执行测试：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./vendor/bin/phpunit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>除了 <code>phpunit</code>  命令，你还可以使用 <code>test</code>  Artisan 命令来运行你的测试。 Artisan 测试运行器提供了详细的测试报告，以简化开发和调试：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan <span class="token builtin class-name">test</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>任何可以传递给 <code>phpunit</code>  命令的参数也可以传递给 Artisan <code>test</code>  命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan <span class="token builtin class-name">test</span> <span class="token parameter variable">--testsuite</span><span class="token operator">=</span>Feature --stop-on-failure
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong><strong>并行运行测试</strong></strong></p><p>默认情况下，<code>Laravel</code>  和 <code>PHPUnit</code>  在执行测试时，是在单进程中按照先后顺序执行的。除此之外，通过多个进程同时运行测试，则可以大大减少运行测试所需的时间。首先，请确保你的应用程序已依赖于 <code>^5.3</code>  或更高版本的 <code>nunomaduro/collision</code>  依赖包。然后，在执行 <code>test</code>  Artisan 命令时，请加入 <code>--parallel</code>  选项：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan <span class="token builtin class-name">test</span> <span class="token parameter variable">--parallel</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>默认情况下，<code>Laravel</code>  将创建与计算机上可用 CPU 内核数量一样多的进程。但是，你可以使用 <code>--processes</code>  选项来调整进程数：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan <span class="token builtin class-name">test</span> <span class="token parameter variable">--parallel</span> <span class="token parameter variable">--processes</span><span class="token operator">=</span><span class="token number">4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>注意：在并行测试时，某些 PHPUnit 选项（例如 <code>--do-not-cache-result</code> ）可能不可用。</p></blockquote><h3 id="并行测试和数据库" tabindex="-1"><a class="header-anchor" href="#并行测试和数据库" aria-hidden="true">#</a> <strong>并行测试和数据库</strong></h3><p><code>Laravel</code> 在执行并行测试时，自动为每个进程创建并迁移生成一个测试数据库。这些测试数据库将以每个进程唯一的进程令牌作为后缀。例如，如果你有两个并行的测试进程，<code>Laravel</code> 将创建并使用 <code>your_db_test_1</code> 和 <code>your_db_test_2</code> 测试数据库。</p><p>默认情况下，在多次调用 <code>test</code> Artisan 命令时，上一次的测试数据库依然存在，以便下一次的 <code>test</code> 命令可以再次使用它们。但是，你可以使用 <code>--recreate-databases</code> 选项重新创建它们：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>php artisan test --parallel --recreate-databases

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="并行测试钩子" tabindex="-1"><a class="header-anchor" href="#并行测试钩子" aria-hidden="true">#</a> <strong>并行测试钩子</strong></h3><p>有时，你可能需要为应用程序测试准备某些资源，以便可以将它们安全地用于多个测试进程。</p><p>使用 <code>ParallelTesting</code> 门面，你就可以在进程或测试用例的 <code>setUp</code> 和 <code>tearDown</code> 上指定要执行的代码。给定的闭包将分别接收包含进程令牌和当前测试用例的 <code>$token</code> 和 <code>$testCase</code> 变量：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;?php

namespace App\\Providers;

use Illuminate\\Support\\Facades\\Artisan;
use Illuminate\\Support\\Facades\\ParallelTesting;
use Illuminate\\Support\\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * 引导任何应用程序服务。
     *
     * @return void
     */
    public function boot()
    {
        ParallelTesting::setUpProcess(function ($token) {
            // ...
        });

        ParallelTesting::setUpTestCase(function ($token, $testCase) {
            // ...
        });

        // 在创建测试数据库时执行……
        ParallelTesting::setUpTestDatabase(function ($database, $token) {
            Artisan::call(&#39;db:seed&#39;);
        });

        ParallelTesting::tearDownTestCase(function ($token, $testCase) {
            // ...
        });

        ParallelTesting::tearDownProcess(function ($token) {
            // ...
        });
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="访问并行测试令牌" tabindex="-1"><a class="header-anchor" href="#访问并行测试令牌" aria-hidden="true">#</a> <strong>访问并行测试令牌</strong></h3><p>如果你想从应用程序的测试代码中的任何其他位置访问当前的并行进程的 <code>token</code>，则可以使用 <code>token</code> 方法。该令牌（<code>token</code>）是单个测试进程的唯一字符串标识符，可用于在并行测试过程中划分资源。例如，<code>Laravel</code> 自动用此令牌值作为每个并行测试进程创建的测试数据库名的后缀：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$token = ParallelTesting::token();

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="报告测试覆盖率" tabindex="-1"><a class="header-anchor" href="#报告测试覆盖率" aria-hidden="true">#</a> <strong>报告测试覆盖率</strong></h3><blockquote><p>注意：这个功能需要 Xdebug 或 PCOV。</p></blockquote><p>在运行测试时，你可能需要确定测试用例是否真的测到了某些程序代码，以及在运行测试时究竟使用了多少应用程序代码。要实现这一点，你可以在调用 <code>test</code> 命令时，增加一个 <code>--coverage</code> 选项：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>php artisan test --coverage
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="最小覆盖率阈值限制" tabindex="-1"><a class="header-anchor" href="#最小覆盖率阈值限制" aria-hidden="true">#</a> <strong>最小覆盖率阈值限制</strong></h3><p>你可以使用 <code>--min</code> 选项来为你的应用程序定义一个最小测试覆盖率阈值。如果不满足此阈值，测试套件将失败：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>php artisan test --coverage --min=80.3

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="测试性能分析" tabindex="-1"><a class="header-anchor" href="#测试性能分析" aria-hidden="true">#</a> 测试性能分析</h3><p>Artisan 测试运行器还提供了一个方便的机制用于列出你的应用程序中最慢的测试。使用<code>--profile</code>选项调用测试命令，可以看到10个最慢的测试列表，这可以让你很容易地识别哪些测试可以被改进，以加快你的测试套件。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>php artisan test --profile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,36);function f(k,_){const s=t("ExternalLinkIcon");return r(),c("div",null,[o,a("p",null,[e("如果想创建一个 "),a("a",v,[e("Pest PHP"),i(s)]),e(" 测试, 你可以为 "),p,e(" 命令提供 "),u,e(" 选项：")]),b,a("p",null,[e("生成测试后，你可以像通常使用 "),a("a",m,[e("PHPUnit"),i(s)]),e(" 那样定义测试方法。要运行测试，请从终端执行 "),h,e("或 "),g,e(" 命令：")]),x])}const U=d(l,[["render",f],["__file","testing.html.vue"]]);export{U as default};
