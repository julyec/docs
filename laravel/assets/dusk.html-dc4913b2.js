import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as i,c as d,b as e,d as a,e as n,a as r}from"./app-8cdff07c.js";const c={},p=r('<h1 id="dusk-浏览器测试" tabindex="-1"><a class="header-anchor" href="#dusk-浏览器测试" aria-hidden="true">#</a> Dusk 浏览器测试</h1><ul><li><a href="#introduction">介绍</a></li><li><a href="#installation">安装</a><ul><li><a href="#managing-chromedriver-installations">管理 ChromeDriver 安装</a></li><li><a href="#using-other-browsers">使用其他浏览器</a></li></ul></li><li><a href="#getting-started">入门</a><ul><li><a href="#generating-tests">生成测试</a></li><li><a href="#resetting-the-database-after-each-test">每个测试后重置数据库</a></li><li><a href="#running-tests">运行测试</a></li><li><a href="#environment-handling">环境处理</a></li></ul></li><li><a href="#browser-basics">浏览器基础知识</a><ul><li><a href="#creating-browsers">创建浏览器</a></li><li><a href="#navigation">导航</a></li><li><a href="#resizing-browser-windows">调整浏览器窗口大小</a></li><li><a href="#browser-macros">浏览器宏</a></li><li><a href="#authentication">认证</a></li><li><a href="#cookies">Cookies</a></li><li><a href="#executing-javascript">执行 JavaScript</a></li><li><a href="#taking-a-screenshot">截屏</a></li><li><a href="#storing-console-output-to-disk">将控制台输出存储到磁盘</a></li><li><a href="#storing-page-source-to-disk">将页面源代码存储到磁盘</a></li></ul></li><li><a href="#interacting-with-elements">与元素交互</a><ul><li><a href="#dusk-selectors">Dusk 选择器</a></li><li><a href="#text-values-and-attributes">文本、值和属性</a></li><li><a href="#interacting-with-forms">与表单交互</a></li><li><a href="#attaching-files">上传文件</a></li><li><a href="#pressing-buttons">点击按钮</a></li><li><a href="#clicking-links">点击链接</a></li><li><a href="#using-the-keyboard">使用键盘</a></li><li><a href="#using-the-mouse">使用鼠标</a></li><li><a href="#javascript-dialogs">JavaScript 对话框</a></li><li><a href="#scoping-selectors">选择器作用域</a></li><li><a href="#waiting-for-elements">等待元素</a></li><li><a href="#scrolling-an-element-into-view">滚动元素到视图</a></li></ul></li><li><a href="#available-assertions">可用的断言</a></li><li><a href="#pages">页面</a><ul><li><a href="#generating-pages">生成页面</a></li><li><a href="#configuring-pages">配置页面</a></li><li><a href="#navigating-to-pages">导航到页面</a></li><li><a href="#shorthand-selectors">速记选择器</a></li><li><a href="#page-methods">页面方法</a></li></ul></li><li><a href="#components">组件</a><ul><li><a href="#generating-components">生成组件</a></li><li><a href="#using-components">使用组件</a></li></ul></li><li><a href="#continuous-integration">持续集成</a><ul><li><a href="#running-tests-on-heroku-ci">Heroku CI</a></li><li><a href="#running-tests-on-travis-ci">Travis CI</a></li><li><a href="#running-tests-on-github-actions">GitHub Actions</a></li></ul></li></ul><p><a name="introduction"></a></p><h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2>',4),l={href:"https://github.com/laravel/dusk",target:"_blank",rel:"noopener noreferrer"},h={href:"https://sites.google.com/chromium.org/driver",target:"_blank",rel:"noopener noreferrer"},u=e("p",null,[e("a",{name:"installation"})],-1),b=e("h2",{id:"安装",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#安装","aria-hidden":"true"},"#"),a(" 安装")],-1),g={href:"https://www.google.com/chrome",target:"_blank",rel:"noopener noreferrer"},m=e("code",null,"laravel/dusk",-1),k=r(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">composer</span> require <span class="token parameter variable">--dev</span> laravel/dusk
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p><strong>警告</strong> 如果你手动注册 Dusk 的服务提供者，在生产环境中 <strong>绝不要</strong> 注册，因为这可能导致任意用户能够认证你的应用程序。</p></blockquote><p>安装 Dusk 包后，执行 <code>dusk:install</code> Artisan 命令。<code>dusk:install</code> 命令将会创建一个 <code>tests/Browser</code> 目录，一个示例 Dusk 测试，并为你的操作系统安装 Chrome 驱动程序二进制文件：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan dusk:install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>接下来，在应用程序的 <code>.env</code> 文件中设置 <code>APP_URL</code> 环境变量。该值应该与你用于在浏览器中访问应用程序的 URL 匹配。</p><blockquote><p><strong>注意</strong> 如果你正在使用 <a href="./sail">Laravel Sail</a> 管理你的本地开发环境，请参阅 Sail 文档中有关<a href="./sail#laravel-dusk">配置和运行 Dusk 测试</a>的内容。</p></blockquote><p><a name="managing-chromedriver-installations"></a></p><h3 id="管理-chromedriver-安装" tabindex="-1"><a class="header-anchor" href="#管理-chromedriver-安装" aria-hidden="true">#</a> 管理 ChromeDriver 安装</h3><p>如果你想安装与 Laravel Dusk 通过 <code>dusk:install</code> 命令安装的不同版本的 ChromeDriver，则可以使用 <code>dusk:chrome-driver</code> 命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 为你的操作系统安装最新版本的 ChromeDriver...</span>
php artisan dusk:chrome-driver

<span class="token comment"># 为你的操作系统安装指定版本的 ChromeDriver...</span>
php artisan dusk:chrome-driver <span class="token number">86</span>

<span class="token comment"># 为所有支持的操作系统安装指定版本的 ChromeDriver...</span>
php artisan dusk:chrome-driver <span class="token parameter variable">--all</span>

<span class="token comment"># 为你的操作系统安装与 Chrome / Chromium 检测到的版本匹配的 ChromeDriver...</span>
php artisan dusk:chrome-driver <span class="token parameter variable">--detect</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>警告</strong> Dusk 需要 <code>chromedriver</code> 二进制文件可执行。如果你无法运行 Dusk，你应该使用以下命令确保二进制文件可执行：<code>chmod -R 0755 vendor/laravel/dusk/bin/</code>。</p></blockquote><p><a name="using-other-browsers"></a></p><h3 id="使用其他浏览器" tabindex="-1"><a class="header-anchor" href="#使用其他浏览器" aria-hidden="true">#</a> 使用其他浏览器</h3>`,13),v={href:"https://sites.google.com/chromium.org/driver",target:"_blank",rel:"noopener noreferrer"},f=r(`<p>要开始，请打开你的 <code>tests/DuskTestCase.php</code> 文件，该文件是你的应用程序的基本 Dusk 测试用例。在这个文件中，你可以删除对 <code>startChromeDriver</code> 方法的调用。这将停止 Dusk 自动启动 ChromeDriver：</p><pre><code>/**
 * 准备执行 Dusk 测试。
 *
 * @beforeClass
 */
public static function prepare(): void
{
    // static::startChromeDriver();
}
</code></pre><p>接下来，你可以修改 <code>driver</code> 方法来连接到你选择的 URL 和端口。此外，你可以修改应该传递给 WebDriver 的“期望能力”：</p><pre><code>use Facebook\\WebDriver\\Remote\\RemoteWebDriver;

/**
 * 创建 RemoteWebDriver 实例。
 */
protected function driver(): RemoteWebDriver
{
    return RemoteWebDriver::create(
        &#39;http://localhost:4444/wd/hub&#39;, DesiredCapabilities::phantomjs()
    );
}
</code></pre><p><a name="getting-started"></a></p><h2 id="入门" tabindex="-1"><a class="header-anchor" href="#入门" aria-hidden="true">#</a> 入门</h2><p><a name="generating-tests"></a></p><h3 id="生成测试" tabindex="-1"><a class="header-anchor" href="#生成测试" aria-hidden="true">#</a> 生成测试</h3><p>要生成 Dusk 测试，请使用 <code>dusk:make</code> Artisan 命令。生成的测试将放在 <code>tests/Browser</code> 目录中：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan dusk:make LoginTest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="resetting-the-database-after-each-test"></a></p><h3 id="在每次测试后重置数据库" tabindex="-1"><a class="header-anchor" href="#在每次测试后重置数据库" aria-hidden="true">#</a> 在每次测试后重置数据库</h3><p>你编写的大多数测试将与从应用程序数据库检索数据的页面交互；然而，你的 Dusk 测试不应该使用 <code>RefreshDatabase</code> trait。<code>RefreshDatabase</code> trait 利用数据库事务，这些事务将不适用或不可用于 HTTP 请求。相反，你有两个选项：<code>DatabaseMigrations</code> trait 和 <code>DatabaseTruncation</code> trait。</p><p><a name="reset-migrations"></a></p><h4 id="使用数据库迁移" tabindex="-1"><a class="header-anchor" href="#使用数据库迁移" aria-hidden="true">#</a> 使用数据库迁移</h4><p><code>DatabaseMigrations</code> trait 会在每次测试之前运行你的数据库迁移。但是，为了每次测试而删除和重新创建数据库表通常比截断表要慢：</p><pre><code>&lt;?php

namespace Tests\\Browser;

use App\\Models\\User;
use Illuminate\\Foundation\\Testing\\DatabaseMigrations;
use Laravel\\Dusk\\Chrome;
use Tests\\DuskTestCase;

class ExampleTest extends DuskTestCase
{
    use DatabaseMigrations;
}
</code></pre><blockquote><p><strong>警告</strong> 当执行 Dusk 测试时，不能使用 SQLite 内存数据库。由于浏览器在其自己的进程中执行，因此它将无法访问其他进程的内存数据库。</p></blockquote><p><a name="reset-truncation"></a></p><h4 id="使用数据库截断" tabindex="-1"><a class="header-anchor" href="#使用数据库截断" aria-hidden="true">#</a> 使用数据库截断</h4><p>在使用 <code>DatabaseTruncation</code> trait 之前，你必须使用 Composer 包管理器安装 <code>doctrine/dbal</code> 包：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">composer</span> require <span class="token parameter variable">--dev</span> doctrine/dbal
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>DatabaseTruncation</code> trait 将在第一次测试时迁移你的数据库，以确保你的数据库表已经被正确创建。但是，在后续测试中，数据库表将仅被截断 - 相比重新运行所有的数据库迁移，这样做可以提高速度：</p><pre><code>&lt;?php

namespace Tests\\Browser;

use App\\Models\\User;
use Illuminate\\Foundation\\Testing\\DatabaseTruncation;
use Laravel\\Dusk\\Chrome;
use Tests\\DuskTestCase;

class ExampleTest extends DuskTestCase
{
    use DatabaseTruncation;
}
</code></pre><p>默认情况下，此 trait 将截断除 <code>migrations</code> 表以外的所有表。如果你想自定义应该截断的表，则可以在测试类上定义 <code>$tablesToTruncate</code> 属性：</p><pre><code>/**
 * 表示应该截断哪些表。
 *
 * @var array
 */
protected $tablesToTruncate = [&#39;users&#39;];
</code></pre><p>或者，你可以在测试类上定义 <code>$exceptTables</code> 属性，以指定应该从截断中排除的表：</p><pre><code>/**
 * 表示应该从截断中排除哪些表。
 *
 * @var array
 */
protected $exceptTables = [&#39;users&#39;];
</code></pre><p>为了指定需要清空表格的数据库连接，你可以在测试类中定义一个 <code>$connectionsToTruncate</code> 属性：</p><pre><code>/**
 * 表示哪些连接需要清空表格。
 *
 * @var array
 */
protected $connectionsToTruncate = [&#39;mysql&#39;];
</code></pre><p><a name="running-tests"></a></p><h3 id="运行测试" tabindex="-1"><a class="header-anchor" href="#运行测试" aria-hidden="true">#</a> 运行测试</h3><p>要运行浏览器测试，执行 <code>dusk</code> Artisan 命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan dusk
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果上一次运行 <code>dusk</code> 命令时出现了测试失败，你可以通过 <code>dusk:fails</code> 命令先重新运行失败的测试，以节省时间：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan dusk:fails
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,36),w=e("code",null,"dusk",-1),$={href:"https://phpunit.readthedocs.io/en/9.5/annotations.html#group",target:"_blank",rel:"noopener noreferrer"},x=r(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan dusk <span class="token parameter variable">--group</span><span class="token operator">=</span>foo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p><strong>注意</strong> 如果你正在使用 <a href="./sail">Laravel Sail</a> 来管理本地开发环境，请参考 Sail 文档中有关<a href="./sail#laravel-dusk">配置和运行 Dusk 测试</a>的部分。</p></blockquote><p><a name="manually-starting-chromedriver"></a></p><h4 id="手动启动-chromedriver" tabindex="-1"><a class="header-anchor" href="#手动启动-chromedriver" aria-hidden="true">#</a> 手动启动 ChromeDriver</h4><p>默认情况下，Dusk 会自动尝试启动 ChromeDriver。如果对于你的特定系统无法自动启动，你可以在运行 <code>dusk</code> 命令之前手动启动 ChromeDriver。如果你选择手动启动 ChromeDriver，则应该注释掉 <code>tests/DuskTestCase.php</code> 文件中的以下代码：</p><pre><code>/**
 * 为 Dusk 测试执行做准备。
 *
 * @beforeClass
 */
public static function prepare(): void
{
    // static::startChromeDriver();
}
</code></pre><p>此外，如果你在端口 9515 以外的端口上启动 ChromeDriver，你需要修改同一类中的 <code>driver</code> 方法以反映正确的端口：</p><pre><code>use Facebook\\WebDriver\\Remote\\RemoteWebDriver;

/**
 * 创建 RemoteWebDriver 实例。
 */
protected function driver(): RemoteWebDriver
{
    return RemoteWebDriver::create(
        &#39;http://localhost:9515&#39;, DesiredCapabilities::chrome()
    );
}
</code></pre><p><a name="environment-handling"></a></p><h3 id="环境处理" tabindex="-1"><a class="header-anchor" href="#环境处理" aria-hidden="true">#</a> 环境处理</h3><p>如果要在运行测试时强制 Dusk 使用自己的环境文件，请在项目根目录中创建一个 <code>.env.dusk.{当前环境}</code> 文件。例如，如果你将从你的 <code>local</code> 环境启动 <code>dusk</code> 命令，你应该创建一个 <code>.env.dusk.local</code> 文件。</p><p>在运行测试时，Dusk 将备份你的 <code>.env</code> 文件，并将你的 Dusk 环境重命名为 <code>.env</code>。测试完成后，会将你的 <code>.env</code> 文件还原。</p><p><a name="browser-basics"></a></p><h2 id="浏览器基础知识" tabindex="-1"><a class="header-anchor" href="#浏览器基础知识" aria-hidden="true">#</a> 浏览器基础知识</h2><p><a name="creating-browsers"></a></p><h3 id="创建浏览器" tabindex="-1"><a class="header-anchor" href="#创建浏览器" aria-hidden="true">#</a> 创建浏览器</h3><p>为了开始学习，我们编写一个测试，验证我们能否登录到我们的应用程序。生成测试后，我们可以修改它以导航到登录页面，输入一些凭据并点击“登录”按钮。为了创建一个浏览器实例，你可以在 Dusk 测试中调用 <code>browse</code> 方法：</p><pre><code>&lt;?php

namespace Tests\\Browser;

use App\\Models\\User;
use Illuminate\\Foundation\\Testing\\DatabaseMigrations;
use Laravel\\Dusk\\Browser;
use Laravel\\Dusk\\Chrome;
use Tests\\DuskTestCase;

class ExampleTest extends DuskTestCase
{
    use DatabaseMigrations;

    /**
     * 一个基本的浏览器测试示例。
     */
    public function test_basic_example(): void
    {
        $user = User::factory()-&gt;create([
            &#39;email&#39; =&gt; &#39;taylor@laravel.com&#39;,
        ]);

        $this-&gt;browse(function (Browser $browser) use ($user) {
            $browser-&gt;visit(&#39;/login&#39;)
                    -&gt;type(&#39;email&#39;, $user-&gt;email)
                    -&gt;type(&#39;password&#39;, &#39;password&#39;)
                    -&gt;press(&#39;Login&#39;)
                    -&gt;assertPathIs(&#39;/home&#39;);
        });
    }
}
</code></pre><p>如上面的例子所示，<code>browse</code> 方法接受一个闭包。浏览器实例将由 Dusk 自动传递给此闭包，并且是与应用程序交互和进行断言的主要对象。</p><p><a name="creating-multiple-browsers"></a></p><h4 id="创建多个浏览器" tabindex="-1"><a class="header-anchor" href="#创建多个浏览器" aria-hidden="true">#</a> 创建多个浏览器</h4><p>有时你可能需要多个浏览器来正确地进行测试。例如，测试与 WebSockets 交互的聊天屏幕可能需要多个浏览器。要创建多个浏览器，只需将更多的浏览器参数添加到传递给 <code>browse</code> 方法的闭包签名中即可：</p><pre><code>$this-&gt;browse(function (Browser $first, Browser $second) {
    $first-&gt;loginAs(User::find(1))
          -&gt;visit(&#39;/home&#39;)
          -&gt;waitForText(&#39;Message&#39;);

    $second-&gt;loginAs(User::find(2))
           -&gt;visit(&#39;/home&#39;)
           -&gt;waitForText(&#39;Message&#39;)
           -&gt;type(&#39;message&#39;, &#39;Hey Taylor&#39;)
           -&gt;press(&#39;Send&#39;);

    $first-&gt;waitForText(&#39;Hey Taylor&#39;)
          -&gt;assertSee(&#39;Jeffrey Way&#39;);
});
</code></pre><p><a name="navigation"></a></p><h3 id="导航" tabindex="-1"><a class="header-anchor" href="#导航" aria-hidden="true">#</a> 导航</h3><p><code>visit</code> 方法可用于在应用程序中导航到给定的 URI：</p><pre><code>$browser-&gt;visit(&#39;/login&#39;);
</code></pre><p>你可以使用 <code>visitRoute</code> 方法来导航到 <a href="./routing#named-routes">命名路由</a>：</p><pre><code>$browser-&gt;visitRoute(&#39;login&#39;);
</code></pre><p>你可以使用 <code>back</code> 和 <code>forward</code> 方法来导航「后退」和「前进」：</p><pre><code>$browser-&gt;back();

$browser-&gt;forward();
</code></pre><p>你可以使用 <code>refresh</code> 方法来刷新页面：</p><pre><code>$browser-&gt;refresh();
</code></pre><p><a name="resizing-browser-windows"></a></p><h3 id="调整浏览器窗口大小" tabindex="-1"><a class="header-anchor" href="#调整浏览器窗口大小" aria-hidden="true">#</a> 调整浏览器窗口大小</h3><p>你可以使用 <code>resize</code> 方法来调整浏览器窗口的大小：</p><pre><code>$browser-&gt;resize(1920, 1080);
</code></pre><p>你可以使用 <code>maximize</code> 方法来最大化浏览器窗口：</p><pre><code>$browser-&gt;maximize();
</code></pre><p><code>fitContent</code> 方法将调整浏览器窗口的大小以匹配其内容的大小：</p><pre><code>$browser-&gt;fitContent();
</code></pre><p>当测试失败时，Dusk 将在截取屏幕截图之前自动调整浏览器大小以适合内容。你可以在测试中调用 <code>disableFitOnFailure</code> 方法来禁用此功能：</p><pre><code>$browser-&gt;disableFitOnFailure();
</code></pre><p>你可以使用<code>move</code>方法将浏览器窗口移动到屏幕上的其他位置：</p><pre><code>$browser-&gt;move($x = 100, $y = 100);
</code></pre><p><a name="browser-macros"></a></p><h3 id="浏览器宏" tabindex="-1"><a class="header-anchor" href="#浏览器宏" aria-hidden="true">#</a> 浏览器宏</h3><p>如果你想定义一个可以在各种测试中重复使用的自定义浏览器方法，可以在<code>Browser</code>类中使用<code>macro</code>方法。通常，你应该从<a href="./providers">服务提供者</a>的<code>boot</code>方法中调用它：</p><pre><code>&lt;?php

namespace App\\Providers;

use Illuminate\\Support\\ServiceProvider;
use Laravel\\Dusk\\Browser;

class DuskServiceProvider extends ServiceProvider
{
    /**
     * 注册 《Dusk》 的浏览器宏。
     */
    public function boot(): void
    {
        Browser::macro(&#39;scrollToElement&#39;, function (string $element = null) {
            $this-&gt;script(&quot;$(&#39;html, body&#39;).animate({ scrollTop: $(&#39;$element&#39;).offset().top }, 0);&quot;);

            return $this;
        });
    }
}
</code></pre><p>该 <code>macro</code> 函数接收方法名作为其第一个参数，并接收闭包作为其第二个参数。 将宏作为<code>Browser</code>实现上的方法调用宏时，将执行宏的闭包：</p><pre><code>$this-&gt;browse(function (Browser $browser) use ($user) {
    $browser-&gt;visit(&#39;/pay&#39;)
            -&gt;scrollToElement(&#39;#credit-card-details&#39;)
            -&gt;assertSee(&#39;Enter Credit Card Details&#39;);
});
</code></pre><p><a name="authentication"></a></p><h3 id="用户认证" tabindex="-1"><a class="header-anchor" href="#用户认证" aria-hidden="true">#</a> 用户认证</h3><p>我们经常会测试需要身份验证的页面，你可以使用 Dusk 的<code>loginAs</code>方法来避免在每次测试期间与登录页面进行交互。该<code>loginAs</code>方法接收用户 ID 或者用户模型实例</p><pre><code>use App\\Models\\User;
use Laravel\\Dusk\\Browser;

$this-&gt;browse(function (Browser $browser) {
    $browser-&gt;loginAs(User::find(1))
          -&gt;visit(&#39;/home&#39;);
});
</code></pre><blockquote><p><strong>注意</strong> 使用<code>loginAs</code>方法后，用户会话在文件中的所有测试被维护。</p></blockquote><p><a name="cookies"></a></p><h3 id="cookies" tabindex="-1"><a class="header-anchor" href="#cookies" aria-hidden="true">#</a> Cookies</h3><p>你可以使用<code>cookie</code>方法来获取或者设置加密过的 cookie 的值：</p><pre><code>$browser-&gt;cookie(&#39;name&#39;);

$browser-&gt;cookie(&#39;name&#39;, &#39;Taylor&#39;);
</code></pre><p>使用<code>plainCookie</code>则可以获取或者设置未加密过的 cookie 的值：</p><pre><code>$browser-&gt;plainCookie(&#39;name&#39;);

$browser-&gt;plainCookie(&#39;name&#39;, &#39;Taylor&#39;);
</code></pre><p>你可以使用<code>deleteCookie</code>方法删除指定的 cookie：</p><pre><code>$browser-&gt;deleteCookie(&#39;name&#39;);
</code></pre><p><a name="executing-javascript"></a></p><h3 id="运行-javascript" tabindex="-1"><a class="header-anchor" href="#运行-javascript" aria-hidden="true">#</a> 运行 JavaScript</h3><p>可以使用<code>script</code>方法在浏览器中执行任意 JavaScript 语句：</p><pre><code>$browser-&gt;script(&#39;document.documentElement.scrollTop = 0&#39;);

$browser-&gt;script([
    &#39;document.body.scrollTop = 0&#39;,
    &#39;document.documentElement.scrollTop = 0&#39;,
]);

$output = $browser-&gt;script(&#39;return window.location.pathname&#39;);
</code></pre><p><a name="taking-a-screenshot"></a></p><h3 id="获取截图" tabindex="-1"><a class="header-anchor" href="#获取截图" aria-hidden="true">#</a> 获取截图</h3><p>你可以使用<code>screenshot</code>方法来截图并将其指定文件名存储，所有截图都将存放在<code>tests/Browser/screenshots</code>目录下：</p><pre><code>$browser-&gt;screenshot(&#39;filename&#39;);
</code></pre><p><code>responsiveScreenshots</code>方法可用于在不同断点处截取一系列截图:</p><pre><code>$browser-&gt;responsiveScreenshots(&#39;filename&#39;);
</code></pre><p><a name="storing-console-output-to-disk"></a></p><h3 id="控制台输出结果保存到硬盘" tabindex="-1"><a class="header-anchor" href="#控制台输出结果保存到硬盘" aria-hidden="true">#</a> 控制台输出结果保存到硬盘</h3><p>你可以使用<code>storeConsoleLog</code>方法将控制台输出指定文件名并写入磁盘，控制台输出默认存放在<code>tests/Browser/console</code>目录下：</p><pre><code>$browser-&gt;storeConsoleLog(&#39;filename&#39;);
</code></pre><p><a name="storing-page-source-to-disk"></a></p><h3 id="页面源码保存到硬盘" tabindex="-1"><a class="header-anchor" href="#页面源码保存到硬盘" aria-hidden="true">#</a> 页面源码保存到硬盘</h3><p>你可以使用<code>storeSource</code>方法将页面当前源代码指定文件名并写入磁盘，页面源代码默认会存放到<code>tests/Browser/source</code>目录：</p><pre><code>$browser-&gt;storeSource(&#39;filename&#39;);
</code></pre><p><a name="interacting-with-elements"></a></p><h2 id="与元素交互" tabindex="-1"><a class="header-anchor" href="#与元素交互" aria-hidden="true">#</a> 与元素交互</h2><p><a name="dusk-selectors"></a></p><h3 id="dusk-选择器" tabindex="-1"><a class="header-anchor" href="#dusk-选择器" aria-hidden="true">#</a> Dusk 选择器</h3><p>编写 Dusk 测试最困难的部分之一就是选择良好的 CSS 选择器与元素进行交互。 随着时间的推移，前端的更改可能会导致如下所示的 CSS 选择器无法通过测试：</p><pre><code>// HTML...

&lt;button&gt;Login&lt;/button&gt;

// Test...

$browser-&gt;click(&#39;.login-page .container div &gt; button&#39;);
</code></pre><p>Dusk 选择器可以让你专注于编写有效的测试，而不必记住 CSS 选择器。要定义一个选择器，你需要添加一个<code>dusk</code>属性在 HTML 元素中。然后在选择器前面加上<code>@</code>用来在 Dusk 测试中操作元素：</p><pre><code>// HTML...

&lt;button dusk=&quot;login-button&quot;&gt;Login&lt;/button&gt;

// Test...

$browser-&gt;click(&#39;@login-button&#39;);
</code></pre><p><a name="text-values-and-attributes"></a></p><h3 id="文本、值-属性" tabindex="-1"><a class="header-anchor" href="#文本、值-属性" aria-hidden="true">#</a> 文本、值 &amp; 属性</h3><p><a name="retrieving-setting-values"></a></p><h4 id="获取-设置值" tabindex="-1"><a class="header-anchor" href="#获取-设置值" aria-hidden="true">#</a> 获取 &amp; 设置值</h4><p>Dusk 提供了多个方法用于和页面元素的当前显示文本、值和属性进行交互，例如，要获取匹配指定选择器的元素的「值」，使用<code>value</code>方法：</p><pre><code>// 获取值...
$value = $browser-&gt;value(&#39;selector&#39;);

// 设置值...
$browser-&gt;value(&#39;selector&#39;, &#39;value&#39;);
</code></pre><p>你可以使用<code>inputValue</code>方法来获取包含指定字段名称的输入元素的「值」：</p><pre><code>$value = $browser-&gt;inputValue(&#39;field&#39;);
</code></pre><p><a name="retrieving-text"></a></p><h4 id="获取文本" tabindex="-1"><a class="header-anchor" href="#获取文本" aria-hidden="true">#</a> 获取文本</h4><p>该<code>text</code>方法可以用于获取匹配指定选择器元素文本：</p><pre><code>$text = $browser-&gt;text(&#39;selector&#39;);
</code></pre><p><a name="retrieving-attributes"></a></p><h4 id="获取属性" tabindex="-1"><a class="header-anchor" href="#获取属性" aria-hidden="true">#</a> 获取属性</h4><p>最后，该<code>attribute</code>方法可以用于获取匹配指定选择器元素属性：</p><pre><code>$attribute = $browser-&gt;attribute(&#39;selector&#39;, &#39;value&#39;);
</code></pre><p><a name="interacting-with-forms"></a></p><h3 id="使用表单" tabindex="-1"><a class="header-anchor" href="#使用表单" aria-hidden="true">#</a> 使用表单</h3><p><a name="typing-values"></a></p><h4 id="输入值" tabindex="-1"><a class="header-anchor" href="#输入值" aria-hidden="true">#</a> 输入值</h4><p>Dusk 提供了多种方法来与表单和输入元素进行交互。首先，让我们看一个在字段中输入值的示例：</p><pre><code>$browser-&gt;type(&#39;email&#39;, &#39;taylor@laravel.com&#39;);
</code></pre><p>注意，尽管该方法在需要时接收，但是我们不需要将 CSS 选择器传递给<code>type</code>方法。如果没有提供 CSS 选择器，Dusk 会搜索包含指定<code>name</code>属性的<code>input</code>或<code>textarea</code>字段。</p><p>要想将文本附加到一个字段之后而且不清除其内容， 你可以使用<code>append</code>方法：</p><pre><code>$browser-&gt;type(&#39;tags&#39;, &#39;foo&#39;)
        -&gt;append(&#39;tags&#39;, &#39;, bar, baz&#39;);
</code></pre><p>你可以使用<code>clear</code>方法清除输入值：</p><pre><code>$browser-&gt;clear(&#39;email&#39;);
</code></pre><p>你可以使用<code>typeSlowly</code>方法指示 Dusk 缓慢键入。 默认情况下，Dusk 在两次按键之间将暂停 100 毫秒。 要自定义按键之间的时间量，你可以将适当的毫秒数作为方法的第二个参数传递：</p><pre><code>$browser-&gt;typeSlowly(&#39;mobile&#39;, &#39;+1 (202) 555-5555&#39;);

$browser-&gt;typeSlowly(&#39;mobile&#39;, &#39;+1 (202) 555-5555&#39;, 300);
</code></pre><p>你可以使用<code>appendSlowly</code>方法缓慢添加文本：</p><pre><code>$browser-&gt;type(&#39;tags&#39;, &#39;foo&#39;)
        -&gt;appendSlowly(&#39;tags&#39;, &#39;, bar, baz&#39;);
</code></pre><p><a name="dropdowns"></a></p><h4 id="下拉菜单" tabindex="-1"><a class="header-anchor" href="#下拉菜单" aria-hidden="true">#</a> 下拉菜单</h4><p>需要在下拉菜单中选择值，你可以使用<code>select</code>方法。 类似于<code>type</code>方法， 该<code>select</code>方法并不是一定要传入 CSS 选择器。 当使用<code>select</code>方法时，你应该传递选项实际的值而不是它的显示文本：</p><pre><code>$browser-&gt;select(&#39;size&#39;, &#39;Large&#39;);
</code></pre><p>你也可以通过省略第二个参数来随机选择一个选项：</p><pre><code>$browser-&gt;select(&#39;size&#39;);
</code></pre><p>通过将数组作为<code>select</code>方法的第二个参数，可以指示该方法选择多个选项：</p><pre><code>$browser-&gt;select(&#39;categories&#39;, [&#39;Art&#39;, &#39;Music&#39;]);
</code></pre><p><a name="checkboxes"></a></p><h4 id="复选框" tabindex="-1"><a class="header-anchor" href="#复选框" aria-hidden="true">#</a> 复选框</h4><p>使用「check」 复选框时，你可以使用<code>check</code>方法。 像其他许多与 input 相关的方法，并不是必须传入 CSS 选择器。 如果准确的选择器无法找到的时候，Dusk 会搜索能够与<code>name</code>属性匹配的复选框：</p><pre><code>$browser-&gt;check(&#39;terms&#39;);
</code></pre><p>该<code>uncheck</code>方法可用于「取消选中」复选框输入：</p><pre><code>$browser-&gt;uncheck(&#39;terms&#39;);
</code></pre><p><a name="radio-buttons"></a></p><h4 id="单选按钮" tabindex="-1"><a class="header-anchor" href="#单选按钮" aria-hidden="true">#</a> 单选按钮</h4><p>使用 「select」中单选按钮选项时，你可以使用<code>radio</code>这个方法。 像很多其他的与输入相关的方法一样， 它也并不是必须传入 CSS 选择器。如果准确的选择器无法被找到的时候， Dusk 会搜索能够与<code>name</code>属性或者<code>value</code>属性相匹配的<code>radio</code>单选按钮：</p><pre><code>$browser-&gt;radio(&#39;size&#39;, &#39;large&#39;);
</code></pre><p><a name="attaching-files"></a></p><h3 id="附件" tabindex="-1"><a class="header-anchor" href="#附件" aria-hidden="true">#</a> 附件</h3><p>该<code>attach</code>方法可以附加一个文件到<code>file</code>input 元素中。 像很多其他的与输入相关的方法一样，他也并不是必须传入 CSS 选择器。如果准确的选择器没有被找到的时候，Dusk 会搜索与<code>name</code>属性匹配的文件输入框：</p><pre><code>$browser-&gt;attach(&#39;photo&#39;, __DIR__.&#39;/photos/mountains.png&#39;);
</code></pre><blockquote><p><strong>注意</strong> attach 方法需要使用 PHP<code>Zip</code>扩展，你的服务器必须安装了此扩展。</p></blockquote><p><a name="pressing-buttons"></a></p><h3 id="点击按钮" tabindex="-1"><a class="header-anchor" href="#点击按钮" aria-hidden="true">#</a> 点击按钮</h3><p>可以使用<code>press</code>方法来单击页面上的按钮元素。该<code>press</code>方法的第一个参数可以是按钮的显示文本，也可以是 CSS/ Dusk 选择器：</p><pre><code>$browser-&gt;press(&#39;Login&#39;);
</code></pre><p>提交表单时，许多应用程序在按下表单后会禁用表单的提交按钮，然后在表单提交的 HTTP 请求完成后重新启用该按钮。要按下按钮并等待按钮被重新启用，可以使用<code>pressAndWaitFor</code>方法：</p><pre><code>// 按下按钮并等待最多5秒，它将被启用…
$browser-&gt;pressAndWaitFor(&#39;Save&#39;);

// 按下按钮并等待最多1秒，它将被启用…
$browser-&gt;pressAndWaitFor(&#39;Save&#39;, 1);
</code></pre><p><a name="clicking-links"></a></p><h3 id="点击链接" tabindex="-1"><a class="header-anchor" href="#点击链接" aria-hidden="true">#</a> 点击链接</h3><p>要点击链接，可以在浏览器实例下使用<code>clickLink</code>方法。该<code>clickLink</code>方法将点击指定文本的链接：</p><pre><code>$browser-&gt;clickLink($linkText);
</code></pre><p>你可以使用<code>seeLink</code>方法来确定具有给定显示文本的链接在页面上是否可见：</p><pre><code>if ($browser-&gt;seeLink($linkText)) {
    // ...
}
</code></pre><blockquote><p><strong>注意</strong> 这些方法与 jQuery 交互。 如果页面上没有 jQuery，Dusk 会自动将其注入到页面中，以便在测试期间可用。</p></blockquote><p><a name="using-the-keyboard"></a></p><h3 id="使用键盘" tabindex="-1"><a class="header-anchor" href="#使用键盘" aria-hidden="true">#</a> 使用键盘</h3><p>该<code>keys</code>方法让你可以再指定元素中输入比<code>type</code>方法更加复杂的输入序列。例如，你可以在输入值的同时按下按键。在这个例子中，输入<code>taylor</code>时，<code>shift</code>键也同时被按下。当<code>taylor</code>输入完之后， 将会输入<code>swift</code>而不会按下任何按键：</p><pre><code>$browser-&gt;keys(&#39;selector&#39;, [&#39;{shift}&#39;, &#39;taylor&#39;], &#39;swift&#39;);
</code></pre><p><code>keys</code>方法的另一个有价值的用例是向你的应用程序的主要 CSS 选择器发送「键盘快捷键」组合：</p><pre><code>$browser-&gt;keys(&#39;.app&#39;, [&#39;{command}&#39;, &#39;j&#39;]);
</code></pre>`,163),D=e("strong",null,"技巧",-1),y=e("code",null,"{command}",-1),S=e("code",null,"{}",-1),C=e("code",null,"Facebook\\WebDriver\\WebDriverKeys",-1),_={href:"https://github.com/php-webdriver/php-webdriver/blob/master/lib/WebDriverKeys.php",target:"_blank",rel:"noopener noreferrer"},I=r(`<p><a name="using-the-mouse"></a></p><h3 id="使用鼠标" tabindex="-1"><a class="header-anchor" href="#使用鼠标" aria-hidden="true">#</a> 使用鼠标</h3><p><a name="clicking-on-elements"></a></p><h4 id="点击元素" tabindex="-1"><a class="header-anchor" href="#点击元素" aria-hidden="true">#</a> 点击元素</h4><p>该<code>click</code>方法可用于「点击」与给定选择器匹配的元素：</p><pre><code>$browser-&gt;click(&#39;.selector&#39;);
</code></pre><p>该<code>clickAtXPath</code>方法可用于「单击」与给定 XPath 表达式匹配的元素：</p><pre><code>$browser-&gt;clickAtXPath(&#39;//div[@class = &quot;selector&quot;]&#39;);
</code></pre><p>该<code>clickAtPoint</code>方法可用于「点击」相对于浏览器可视区域的给定坐标对上的最高元素：</p><pre><code>$browser-&gt;clickAtPoint($x = 0, $y = 0);
</code></pre><p>该<code>doubleClick</code>方法可用于模拟鼠标的双击：</p><pre><code>$browser-&gt;doubleClick();
</code></pre><p>该<code>rightClick</code>方法可用于模拟鼠标的右击：</p><pre><code>$browser-&gt;rightClick();

$browser-&gt;rightClick(&#39;.selector&#39;);
</code></pre><p>该<code>clickAndHold</code>方法可用于模拟被单击并按住的鼠标按钮。 随后调用 <code>releaseMouse</code> 方法将撤消此行为并释放鼠标按钮：</p><pre><code>$browser-&gt;clickAndHold()
        -&gt;pause(1000)
        -&gt;releaseMouse();
</code></pre><p><a name="mouseover"></a></p><h4 id="鼠标悬停" tabindex="-1"><a class="header-anchor" href="#鼠标悬停" aria-hidden="true">#</a> 鼠标悬停</h4><p>该<code>mouseover</code>方法可用于与给定选择器匹配的元素的鼠标悬停动作：</p><pre><code>$browser-&gt;mouseover(&#39;.selector&#39;);
</code></pre><p><a name="drag-drop"></a></p><h4 id="拖放" tabindex="-1"><a class="header-anchor" href="#拖放" aria-hidden="true">#</a> 拖放</h4><p>该<code>drag</code>方法用于将与指定选择器匹配的元素拖到其它元素：</p><pre><code>$browser-&gt;drag(&#39;.from-selector&#39;, &#39;.to-selector&#39;);
</code></pre><p>或者，可以在单一方向上拖动元素：</p><pre><code>$browser-&gt;dragLeft(&#39;.selector&#39;, $pixels = 10);
$browser-&gt;dragRight(&#39;.selector&#39;, $pixels = 10);
$browser-&gt;dragUp(&#39;.selector&#39;, $pixels = 10);
$browser-&gt;dragDown(&#39;.selector&#39;, $pixels = 10);
</code></pre><p>最后，你可以将元素拖动给定的偏移量：</p><pre><code>$browser-&gt;dragOffset(&#39;.selector&#39;, $x = 10, $y = 10);
</code></pre><p><a name="javascript-dialogs"></a></p><h3 id="javascript-对话框" tabindex="-1"><a class="header-anchor" href="#javascript-对话框" aria-hidden="true">#</a> JavaScript 对话框</h3><p>Dusk 提供了各种与 JavaScript 对话框进行交互的方法。例如，你可以使用<code>waitForDialog</code>方法来等待 JavaScript 对话框的出现。此方法接受一个可选参数，该参数指示等待对话框出现多少秒：</p><pre><code>$browser-&gt;waitForDialog($seconds = null);
</code></pre><p>该<code>assertDialogOpened</code>方法，断言对话框已经显示，并且其消息与给定值匹配：</p><pre><code>$browser-&gt;assertDialogOpened(&#39;Dialog message&#39;);
</code></pre><p><code>typeInDialog</code>方法，在打开的 JavaScript 提示对话框中输入给定值：</p><pre><code>$browser-&gt;typeInDialog(&#39;Hello World&#39;);
</code></pre><p><code>acceptDialog</code>方法，通过点击确定按钮关闭打开的 JavaScript 对话框：</p><pre><code>$browser-&gt;acceptDialog();
</code></pre><p><code>dismissDialog</code>方法，通过点击取消按钮关闭打开的 JavaScript 对话框（仅对确认对话框有效）：</p><pre><code>$browser-&gt;dismissDialog();
</code></pre><p><a name="scoping-selectors"></a></p><h3 id="选择器作用范围" tabindex="-1"><a class="header-anchor" href="#选择器作用范围" aria-hidden="true">#</a> 选择器作用范围</h3><p>有时可能希望在给定的选择器范围内执行多个操作。比如，可能想要断言表格中存在某些文本，然后点击表格中的一个按钮。那么你可以使用<code>with</code>方法实现此需求。在传递给<code>with</code>方法的闭包内执行的所有操作都将限于原始选择器：</p><pre><code>$browser-&gt;with(&#39;.table&#39;, function (Browser $table) {
    $table-&gt;assertSee(&#39;Hello World&#39;)
          -&gt;clickLink(&#39;Delete&#39;);
});
</code></pre><p>你可能偶尔需要在当前范围之外执行断言。 你可以使用<code>elsewhere</code>和<code>elsewhereWhenAvailable</code>方法来完成此操作：</p><pre><code> $browser-&gt;with(&#39;.table&#39;, function ($table) {
    // 当前范围是 \`body .table\`...

    $browser-&gt;elsewhere(&#39;.page-title&#39;, function ($title) {
        // 当前范围是 \`body .page-title\`...
        $title-&gt;assertSee(&#39;Hello World&#39;);
    });

    $browser-&gt;elsewhereWhenAvailable(&#39;.page-title&#39;, function ($title) {
        // 当前范围是 \`body .page-title\`...
        $title-&gt;assertSee(&#39;Hello World&#39;);
    });
 });
</code></pre><p><a name="waiting-for-elements"></a></p><h3 id="等待元素" tabindex="-1"><a class="header-anchor" href="#等待元素" aria-hidden="true">#</a> 等待元素</h3><p>在测试大面积使用 JavaScript 的应用时，在进行测试之前，通常有必要 「等待」 某些元素或数据可用。Dusk 可轻松实现。使用一系列方法，可以等到页面元素可用，甚至给定的 JavaScript 表达式执行结果为<code>true</code>。</p><p><a name="waiting"></a></p><h4 id="等待" tabindex="-1"><a class="header-anchor" href="#等待" aria-hidden="true">#</a> 等待</h4><p>如果需要测试暂停指定的毫秒数， 使用<code>pause</code>方法：</p><pre><code>$browser-&gt;pause(1000);
</code></pre><p>如果你只需要在给定条件为<code>true</code>时暂停测试，请使用<code>pauseIf</code>方法:</p><pre><code>$browser-&gt;pauseIf(App::environment(&#39;production&#39;), 1000);
</code></pre><p>同样地，如果你需要暂停测试，除非给定的条件是<code>true</code>，你可以使用<code>pauseUnless</code>方法:</p><pre><code>$browser-&gt;pauseUnless(App::environment(&#39;testing&#39;), 1000);
</code></pre><p><a name="waiting-for-selectors"></a></p><h4 id="等待选择器" tabindex="-1"><a class="header-anchor" href="#等待选择器" aria-hidden="true">#</a> 等待选择器</h4><p>该<code>waitFor</code>方法可以用于暂停执行测试，直到页面上与给定 CSS 选择器匹配的元素被显示。默认情况下，将在暂停超过 5 秒后抛出异常。如有必要，可以传递自定义超时时长作为其第二个参数：</p><pre><code>// 等待选择器不超过 5 秒...
$browser-&gt;waitFor(&#39;.selector&#39;);

// 等待选择器不超过 1 秒...
$browser-&gt;waitFor(&#39;.selector&#39;, 1);
</code></pre><p>你也可以等待选择器显示给定文字：</p><pre><code>//  等待选择器不超过 5 秒包含给定文字...
$browser-&gt;waitForTextIn(&#39;.selector&#39;, &#39;Hello World&#39;);

//  等待选择器不超过 1 秒包含给定文字...
$browser-&gt;waitForTextIn(&#39;.selector&#39;, &#39;Hello World&#39;, 1);
</code></pre><p>你也可以等待指定选择器从页面消失:</p><pre><code>// 等待不超过 5 秒 直到选择器消失...
$browser-&gt;waitUntilMissing(&#39;.selector&#39;);

// 等待不超过 1 秒 直到选择器消失...
$browser-&gt;waitUntilMissing(&#39;.selector&#39;, 1);
</code></pre><p>或者，你可以等待与给定选择器匹配的元素被启用或禁用：</p><pre><code>// 最多等待 5 秒钟，直到选择器启用...
$browser-&gt;waitUntilEnabled(&#39;.selector&#39;);

// 最多等待 1 秒钟，直到选择器启用...
$browser-&gt;waitUntilEnabled(&#39;.selector&#39;, 1);

// 最多等待 5 秒钟，直到选择器被禁用...
$browser-&gt;waitUntilDisabled(&#39;.selector&#39;);

// 最多等待 1 秒钟，直到选择器被禁用...
$browser-&gt;waitUntilDisabled(&#39;.selector&#39;, 1);
</code></pre><p><a name="scoping-selectors-when-available"></a></p><h4 id="限定作用域范围-可用时" tabindex="-1"><a class="header-anchor" href="#限定作用域范围-可用时" aria-hidden="true">#</a> 限定作用域范围（可用时）</h4><p>有时，你或许希望等待给定选择器出现，然后与匹配选择器的元素进行交互。例如，你可能希望等到模态窗口可用，然后在模态窗口中点击「确定」按钮。在这种情况下，可以使用<code>whenAvailable</code>方法。给定回调内的所有要执行的元素操作都将被限定在起始选择器上:</p><pre><code>$browser-&gt;whenAvailable(&#39;.modal&#39;, function (Browser $modal) {
    $modal-&gt;assertSee(&#39;Hello World&#39;)
          -&gt;press(&#39;OK&#39;);
});
</code></pre><p><a name="waiting-for-text"></a></p><h4 id="等待文本" tabindex="-1"><a class="header-anchor" href="#等待文本" aria-hidden="true">#</a> 等待文本</h4><p><code>waitForText</code>方法可以用于等待页面上给定文字被显示：</p><pre><code>// 等待指定文本不超过 5 秒...
$browser-&gt;waitForText(&#39;Hello World&#39;);

// 等待指定文本不超过 1 秒...
$browser-&gt;waitForText(&#39;Hello World&#39;, 1);
</code></pre><p>你可以使用<code>waitUntilMissingText</code>方法来等待，直到显示的文本已从页面中删除为止:</p><pre><code>// 等待 5 秒删除文本...
$browser-&gt;waitUntilMissingText(&#39;Hello World&#39;);

// 等待 1 秒删除文本...
$browser-&gt;waitUntilMissingText(&#39;Hello World&#39;, 1);
</code></pre><p><a name="waiting-for-links"></a></p><h4 id="等待链接" tabindex="-1"><a class="header-anchor" href="#等待链接" aria-hidden="true">#</a> 等待链接</h4><p><code>waitForLink</code>方法用于等待给定链接文字在页面上显示:</p><pre><code>// 等待链接 5 秒...
$browser-&gt;waitForLink(&#39;Create&#39;);

// 等待链接 1 秒...
$browser-&gt;waitForLink(&#39;Create&#39;, 1);
</code></pre><p><a name="waiting-for-inputs"></a></p><h4 id="等待输入" tabindex="-1"><a class="header-anchor" href="#等待输入" aria-hidden="true">#</a> 等待输入</h4><p><code>waitForInput</code>方法可用于等待，直到给定的输入字段在页面上可见:</p><pre><code>// 等待 5 秒的输入…
$browser-&gt;waitForInput($field);

// 等待 1 秒的输入…
$browser-&gt;waitForInput($field, 1);
</code></pre><p><a name="waiting-on-the-page-location"></a></p><h4 id="等待页面跳转" tabindex="-1"><a class="header-anchor" href="#等待页面跳转" aria-hidden="true">#</a> 等待页面跳转</h4><p>当给出类似<code>$browser-&gt;assertPathIs(&#39;/home&#39;)</code>的路径断言时，如果<code>window.location.pathname</code>被异步更新，断言就会失败。可以使用<code>waitForLocation</code>方法等待页面跳转到给定路径：</p><pre><code>$browser-&gt;waitForLocation(&#39;/secret&#39;);
</code></pre><p><code>waitForLocation</code>方法还可用于等待当前窗口位置成为完全限定的 URL：</p><pre><code>$browser-&gt;waitForLocation(&#39;https://example.com/path&#39;);
</code></pre><p>还可以使用<a href="./routing#named-routes">被命名的路由</a>等待跳转：</p><pre><code>$browser-&gt;waitForRoute($routeName, $parameters);
</code></pre><p><a name="waiting-for-page-reloads"></a></p><h4 id="等待页面重新加载" tabindex="-1"><a class="header-anchor" href="#等待页面重新加载" aria-hidden="true">#</a> 等待页面重新加载</h4><p>如果要在页面重新加载后断言，可以使用<code>waitForReload</code>方法：</p><pre><code>use Laravel\\Dusk\\Browser;

$browser-&gt;waitForReload(function (Browser $browser) {
    $browser-&gt;press(&#39;Submit&#39;);
})
-&gt;assertSee(&#39;Success!&#39;);
</code></pre><p>由于需要等待页面重新加载通常发生在单击按钮之后，为了方便起见，你可以使用<code>clickAndWaitForReload</code>方法：</p><pre><code>$browser-&gt;clickAndWaitForReload(&#39;.selector&#39;)
        -&gt;assertSee(&#39;something&#39;);
</code></pre><p><a name="waiting-on-javascript-expressions"></a></p><h4 id="等待-javascript-表达式" tabindex="-1"><a class="header-anchor" href="#等待-javascript-表达式" aria-hidden="true">#</a> 等待 JavaScript 表达式</h4><p>有时候会希望暂停测试的执行，直到给定的 JavaScript 表达式执行结果为<code>true</code>。可以使用<code>waitUntil</code>方法轻松地达成此目的。 通过这个方法执行表达式，不需要包含<code>return</code>关键字或者结束分号：</p><pre><code>// 等待表达式为 true 5 秒时间...
$browser-&gt;waitUntil(&#39;App.data.servers.length &gt; 0&#39;);

// 等待表达式为 true 1 秒时间...
$browser-&gt;waitUntil(&#39;App.data.servers.length &gt; 0&#39;, 1);
</code></pre><p><a name="waiting-on-vue-expressions"></a></p><h4 id="等待-vue-表达式" tabindex="-1"><a class="header-anchor" href="#等待-vue-表达式" aria-hidden="true">#</a> 等待 Vue 表达式</h4>`,105),T=e("code",null,"waitUntilVue",-1),P=e("code",null,"waitUntilVueIsNot",-1),A={href:"https://vuejs.org",target:"_blank",rel:"noopener noreferrer"},L=r(`<pre><code>// 一直等待，直到组件属性包含给定的值...
$browser-&gt;waitUntilVue(&#39;user.name&#39;, &#39;Taylor&#39;, &#39;@user&#39;);

// 一直等待，直到组件属性不包含给定的值...
$browser-&gt;waitUntilVueIsNot(&#39;user.name&#39;, null, &#39;@user&#39;);
</code></pre><p><a name="waiting-for-javascript-events"></a></p><h4 id="等待-javascript-事件" tabindex="-1"><a class="header-anchor" href="#等待-javascript-事件" aria-hidden="true">#</a> 等待 JavaScript 事件</h4><p><code>waitForEvent</code>方法可用于暂停测试的执行，直到 JavaScript 事件发生:</p><pre><code>$browser-&gt;waitForEvent(&#39;load&#39;);
</code></pre><p>事件监听器附加到当前作用域，默认情况下是<code>body</code>元素。当使用范围选择器时，事件监听器将被附加到匹配的元素上:</p><pre><code>$browser-&gt;with(&#39;iframe&#39;, function (Browser $iframe) {
    // 等待 iframe 的加载事件…
    $iframe-&gt;waitForEvent(&#39;load&#39;);
});
</code></pre><p>你也可以提供一个选择器作为<code>waitForEvent</code>方法的第二个参数，将事件监听器附加到特定的元素上:</p><pre><code>$browser-&gt;waitForEvent(&#39;load&#39;, &#39;.selector&#39;);
</code></pre><p>你也可以等待<code>document</code>和<code>window</code>对象上的事件:</p><pre><code>// 等待文档被滚动…
$browser-&gt;waitForEvent(&#39;scroll&#39;, &#39;document&#39;);

// 等待 5 秒，直到窗口大小被调整…
$browser-&gt;waitForEvent(&#39;resize&#39;, &#39;window&#39;, 5);
</code></pre><p><a name="waiting-with-a-callback"></a></p><h4 id="等待回调" tabindex="-1"><a class="header-anchor" href="#等待回调" aria-hidden="true">#</a> 等待回调</h4><p>Dusk 中的许多 「wait」 方法都依赖于底层方法 waitUsing。你可以直接用这个方法去等待一个回调函数返回<code>waitUsing</code>。你可以直接用这个方法去等待一个回调函数返回<code>true</code>。该<code>waitUsing</code>方法接收一个最大的等待秒数，闭包执行间隔时间，闭包，以及一个可选的失败信息：</p><pre><code>$browser-&gt;waitUsing(10, 1, function () use ($something) {
    return $something-&gt;isReady();
}, &quot;有些东西没有及时准备好。&quot;);
</code></pre><p><a name="scrolling-an-element-into-view"></a></p><h3 id="滚动元素到视图中" tabindex="-1"><a class="header-anchor" href="#滚动元素到视图中" aria-hidden="true">#</a> 滚动元素到视图中</h3><p>有时你可能无法单击某个元素，因为该元素在浏览器的可见区域之外。该<code>scrollIntoView</code>方法可以将元素滚动到浏览器可视窗口内：</p><pre><code>$browser-&gt;scrollIntoView(&#39;.selector&#39;)
        -&gt;click(&#39;.selector&#39;);
</code></pre><p><a name="available-assertions"></a></p><h2 id="可用的断言" tabindex="-1"><a class="header-anchor" href="#可用的断言" aria-hidden="true">#</a> 可用的断言</h2><p>Dusk 提供了各种你可以对应用使用的断言。所有可用的断言罗列如下：</p>`,22),B=e("div",{class:"collection-method-list",markdown:"1"},[e("p",null,[e("a",{href:"#assert-title"},"assertTitle"),e("a",{href:"#assert-title-contains"},"assertTitleContains"),e("a",{href:"#assert-url-is"},"assertUrlIs"),e("a",{href:"#assert-scheme-is"},"assertSchemeIs"),e("a",{href:"#assert-scheme-is-not"},"assertSchemeIsNot"),e("a",{href:"#assert-host-is"},"assertHostIs"),e("a",{href:"#assert-host-is-not"},"assertHostIsNot"),e("a",{href:"#assert-port-is"},"assertPortIs"),e("a",{href:"#assert-port-is-not"},"assertPortIsNot"),e("a",{href:"#assert-path-begins-with"},"assertPathBeginsWith"),e("a",{href:"#assert-path-is"},"assertPathIs"),e("a",{href:"#assert-path-is-not"},"assertPathIsNot"),e("a",{href:"#assert-route-is"},"assertRouteIs"),e("a",{href:"#assert-query-string-has"},"assertQueryStringHas"),e("a",{href:"#assert-query-string-missing"},"assertQueryStringMissing"),e("a",{href:"#assert-fragment-is"},"assertFragmentIs"),e("a",{href:"#assert-fragment-begins-with"},"assertFragmentBeginsWith"),e("a",{href:"#assert-fragment-is-not"},"assertFragmentIsNot"),e("a",{href:"#assert-has-cookie"},"assertHasCookie"),e("a",{href:"#assert-has-plain-cookie"},"assertHasPlainCookie"),e("a",{href:"#assert-cookie-missing"},"assertCookieMissing"),e("a",{href:"#assert-plain-cookie-missing"},"assertPlainCookieMissing"),e("a",{href:"#assert-cookie-value"},"assertCookieValue"),e("a",{href:"#assert-plain-cookie-value"},"assertPlainCookieValue"),e("a",{href:"#assert-see"},"assertSee"),e("a",{href:"#assert-dont-see"},"assertDontSee"),e("a",{href:"#assert-see-in"},"assertSeeIn"),e("a",{href:"#assert-dont-see-in"},"assertDontSeeIn"),e("a",{href:"#assert-see-anything-in"},"assertSeeAnythingIn"),e("a",{href:"#assert-see-nothing-in"},"assertSeeNothingIn"),e("a",{href:"#assert-script"},"assertScript"),e("a",{href:"#assert-source-has"},"assertSourceHas"),e("a",{href:"#assert-source-missing"},"assertSourceMissing"),e("a",{href:"#assert-see-link"},"assertSeeLink"),e("a",{href:"#assert-dont-see-link"},"assertDontSeeLink"),e("a",{href:"#assert-input-value"},"assertInputValue"),e("a",{href:"#assert-input-value-is-not"},"assertInputValueIsNot"),e("a",{href:"#assert-checked"},"assertChecked"),e("a",{href:"#assert-not-checked"},"assertNotChecked"),e("a",{href:"#assert-indeterminate"},"assertIndeterminate"),e("a",{href:"#assert-radio-selected"},"assertRadioSelected"),e("a",{href:"#assert-radio-not-selected"},"assertRadioNotSelected"),e("a",{href:"#assert-selected"},"assertSelected"),e("a",{href:"#assert-not-selected"},"assertNotSelected"),e("a",{href:"#assert-select-has-options"},"assertSelectHasOptions"),e("a",{href:"#assert-select-missing-options"},"assertSelectMissingOptions"),e("a",{href:"#assert-select-has-option"},"assertSelectHasOption"),e("a",{href:"#assert-select-missing-option"},"assertSelectMissingOption"),e("a",{href:"#assert-value"},"assertValue"),e("a",{href:"#assert-value-is-not"},"assertValueIsNot"),e("a",{href:"#assert-attribute"},"assertAttribute"),e("a",{href:"#assert-attribute-contains"},"assertAttributeContains"),e("a",{href:"#assert-aria-attribute"},"assertAriaAttribute"),e("a",{href:"#assert-data-attribute"},"assertDataAttribute"),e("a",{href:"#assert-visible"},"assertVisible"),e("a",{href:"#assert-present"},"assertPresent"),e("a",{href:"#assert-not-present"},"assertNotPresent"),e("a",{href:"#assert-missing"},"assertMissing"),e("a",{href:"#assert-input-present"},"assertInputPresent"),e("a",{href:"#assert-input-missing"},"assertInputMissing"),e("a",{href:"#assert-dialog-opened"},"assertDialogOpened"),e("a",{href:"#assert-enabled"},"assertEnabled"),e("a",{href:"#assert-disabled"},"assertDisabled"),e("a",{href:"#assert-button-enabled"},"assertButtonEnabled"),e("a",{href:"#assert-button-disabled"},"assertButtonDisabled"),e("a",{href:"#assert-focused"},"assertFocused"),e("a",{href:"#assert-not-focused"},"assertNotFocused"),e("a",{href:"#assert-authenticated"},"assertAuthenticated"),e("a",{href:"#assert-guest"},"assertGuest"),e("a",{href:"#assert-authenticated-as"},"assertAuthenticatedAs"),e("a",{href:"#assert-vue"},"assertVue"),e("a",{href:"#assert-vue-is-not"},"assertVueIsNot"),e("a",{href:"#assert-vue-contains"},"assertVueContains"),e("a",{href:"#assert-vue-does-not-contain"},"assertVueDoesNotContain")])],-1),F=r(`<p><a name="assert-title"></a></p><h4 id="asserttitle" tabindex="-1"><a class="header-anchor" href="#asserttitle" aria-hidden="true">#</a> assertTitle</h4><p>断言页面标题为给定文本：</p><pre><code>$browser-&gt;assertTitle($title);
</code></pre><p><a name="assert-title-contains"></a></p><h4 id="asserttitlecontains" tabindex="-1"><a class="header-anchor" href="#asserttitlecontains" aria-hidden="true">#</a> assertTitleContains</h4><p>断言页面标题包含给定文本：</p><pre><code>$browser-&gt;assertTitleContains($title);
</code></pre><p><a name="assert-url-is"></a></p><h4 id="asserturlis" tabindex="-1"><a class="header-anchor" href="#asserturlis" aria-hidden="true">#</a> assertUrlIs</h4><p>断言当前的 URL（不包含 query string）是给定的字符串：</p><pre><code>$browser-&gt;assertUrlIs($url);
</code></pre><p><a name="assert-scheme-is"></a></p><h4 id="assertschemeis" tabindex="-1"><a class="header-anchor" href="#assertschemeis" aria-hidden="true">#</a> assertSchemeIs</h4><p>断言当前的 URL scheme 是给定的 scheme：</p><pre><code>$browser-&gt;assertSchemeIs($scheme);
</code></pre><p><a name="assert-scheme-is-not"></a></p><h4 id="assertschemeisnot" tabindex="-1"><a class="header-anchor" href="#assertschemeisnot" aria-hidden="true">#</a> assertSchemeIsNot</h4><p>断言当前的 URL scheme 不是给定的 scheme：</p><pre><code>$browser-&gt;assertSchemeIsNot($scheme);
</code></pre><p><a name="assert-host-is"></a></p><h4 id="asserthostis" tabindex="-1"><a class="header-anchor" href="#asserthostis" aria-hidden="true">#</a> assertHostIs</h4><p>断言当前的 URL host 是给定的 host：</p><pre><code>$browser-&gt;assertHostIs($host);
</code></pre><p><a name="assert-host-is-not"></a></p><h4 id="asserthostisnot" tabindex="-1"><a class="header-anchor" href="#asserthostisnot" aria-hidden="true">#</a> assertHostIsNot</h4><p>断言当前的 URL host 不是给定的 host：</p><pre><code>$browser-&gt;assertHostIsNot($host);
</code></pre><p><a name="assert-port-is"></a></p><h4 id="assertportis" tabindex="-1"><a class="header-anchor" href="#assertportis" aria-hidden="true">#</a> assertPortIs</h4><p>断言当前的 URL 端口是给定的端口：</p><pre><code>$browser-&gt;assertPortIs($port);
</code></pre><p><a name="assert-port-is-not"></a></p><h4 id="assertportisnot" tabindex="-1"><a class="header-anchor" href="#assertportisnot" aria-hidden="true">#</a> assertPortIsNot</h4><p>断言当前的 URL 端口不是给定的端口：</p><pre><code>$browser-&gt;assertPortIsNot($port);
</code></pre><p><a name="assert-path-begins-with"></a></p><h4 id="assertpathbeginswith" tabindex="-1"><a class="header-anchor" href="#assertpathbeginswith" aria-hidden="true">#</a> assertPathBeginsWith</h4><p>断言当前的 URL 路径以给定的路径开始：</p><pre><code>$browser-&gt;assertPathBeginsWith(&#39;/home&#39;);
</code></pre><p><a name="assert-path-is"></a></p><h4 id="assertpathis" tabindex="-1"><a class="header-anchor" href="#assertpathis" aria-hidden="true">#</a> assertPathIs</h4><p>断言当前的路径是给定的路径：</p><pre><code>$browser-&gt;assertPathIs(&#39;/home&#39;);
</code></pre><p><a name="assert-path-is-not"></a></p><h4 id="assertpathisnot" tabindex="-1"><a class="header-anchor" href="#assertpathisnot" aria-hidden="true">#</a> assertPathIsNot</h4><p>断言当前的路径不是给定的路径：</p><pre><code>$browser-&gt;assertPathIsNot(&#39;/home&#39;);
</code></pre><p><a name="assert-route-is"></a></p><h4 id="assertrouteis" tabindex="-1"><a class="header-anchor" href="#assertrouteis" aria-hidden="true">#</a> assertRouteIs</h4><p>断言给定的 URL 是给定的<a href="./routing#named-routes">命名路由</a>的 URL:</p><pre><code>$browser-&gt;assertRouteIs($name, $parameters);
</code></pre><p><a name="assert-query-string-has"></a></p><h4 id="assertquerystringhas" tabindex="-1"><a class="header-anchor" href="#assertquerystringhas" aria-hidden="true">#</a> assertQueryStringHas</h4><p>断言给定的查询字符串参数存在：</p><pre><code>$browser-&gt;assertQueryStringHas($name);
</code></pre><p>断言给定的查询字符串参数存在并且具有给定的值：</p><pre><code>$browser-&gt;assertQueryStringHas($name, $value);
</code></pre><p><a name="assert-query-string-missing"></a></p><h4 id="assertquerystringmissing" tabindex="-1"><a class="header-anchor" href="#assertquerystringmissing" aria-hidden="true">#</a> assertQueryStringMissing</h4><p>断言缺少给定的查询字符串参数：</p><pre><code>$browser-&gt;assertQueryStringMissing($name);
</code></pre><p><a name="assert-fragment-is"></a></p><h4 id="assertfragmentis" tabindex="-1"><a class="header-anchor" href="#assertfragmentis" aria-hidden="true">#</a> assertFragmentIs</h4><p>断言 URL 的当前哈希片段与给定的片段匹配：</p><pre><code>$browser-&gt;assertFragmentIs(&#39;anchor&#39;);
</code></pre><p><a name="assert-fragment-begins-with"></a></p><h4 id="assertfragmentbeginswith" tabindex="-1"><a class="header-anchor" href="#assertfragmentbeginswith" aria-hidden="true">#</a> assertFragmentBeginsWith</h4><p>断言 URL 的当前哈希片段以给定片段开头：</p><pre><code>$browser-&gt;assertFragmentBeginsWith(&#39;anchor&#39;);
</code></pre><p><a name="assert-fragment-is-not"></a></p><h4 id="assertfragmentisnot" tabindex="-1"><a class="header-anchor" href="#assertfragmentisnot" aria-hidden="true">#</a> assertFragmentIsNot</h4><p>断言 URL 的当前哈希片段与给定的片段不匹配：</p><pre><code>$browser-&gt;assertFragmentIsNot(&#39;anchor&#39;);
</code></pre><p><a name="assert-has-cookie"></a></p><h4 id="asserthascookie" tabindex="-1"><a class="header-anchor" href="#asserthascookie" aria-hidden="true">#</a> assertHasCookie</h4><p>断言给定的加密 cookie 存在:</p><pre><code>$browser-&gt;assertHasCookie($name);
</code></pre><p><a name="assert-has-plain-cookie"></a></p><h4 id="asserthasplaincookie" tabindex="-1"><a class="header-anchor" href="#asserthasplaincookie" aria-hidden="true">#</a> assertHasPlainCookie</h4><p>断言给定的未加密 cookie 存在：</p><pre><code>$browser-&gt;assertHasPlainCookie($name);
</code></pre><p><a name="assert-cookie-missing"></a></p><h4 id="assertcookiemissing" tabindex="-1"><a class="header-anchor" href="#assertcookiemissing" aria-hidden="true">#</a> assertCookieMissing</h4><p>断言给定的加密 cookie 不存在：</p><pre><code>$browser-&gt;assertCookieMissing($name);
</code></pre><p><a name="assert-plain-cookie-missing"></a></p><h4 id="assertplaincookiemissing" tabindex="-1"><a class="header-anchor" href="#assertplaincookiemissing" aria-hidden="true">#</a> assertPlainCookieMissing</h4><p>断言给定的未加密 cookie 不存在：</p><pre><code>$browser-&gt;assertPlainCookieMissing($name);
</code></pre><p><a name="assert-cookie-value"></a></p><h4 id="assertcookievalue" tabindex="-1"><a class="header-anchor" href="#assertcookievalue" aria-hidden="true">#</a> assertCookieValue</h4><p>断言加密的 cookie 具有给定值：</p><pre><code>$browser-&gt;assertCookieValue($name, $value);
</code></pre><p><a name="assert-plain-cookie-value"></a></p><h4 id="assertplaincookievalue" tabindex="-1"><a class="header-anchor" href="#assertplaincookievalue" aria-hidden="true">#</a> assertPlainCookieValue</h4><p>断言未加密的 cookie 具有给定值：</p><pre><code>$browser-&gt;assertPlainCookieValue($name, $value);
</code></pre><p><a name="assert-see"></a></p><h4 id="assertsee" tabindex="-1"><a class="header-anchor" href="#assertsee" aria-hidden="true">#</a> assertSee</h4><p>断言在页面中有给定的文本：</p><pre><code>$browser-&gt;assertSee($text);
</code></pre><p><a name="assert-dont-see"></a></p><h4 id="assertdontsee" tabindex="-1"><a class="header-anchor" href="#assertdontsee" aria-hidden="true">#</a> assertDontSee</h4><p>断言在页面中没有给定的文本：</p><pre><code>$browser-&gt;assertDontSee($text);
</code></pre><p><a name="assert-see-in"></a></p><h4 id="assertseein" tabindex="-1"><a class="header-anchor" href="#assertseein" aria-hidden="true">#</a> assertSeeIn</h4><p>断言在选择器中有给定的文本：</p><pre><code>$browser-&gt;assertSeeIn($selector, $text);
</code></pre><p><a name="assert-dont-see-in"></a></p><h4 id="assertdontseein" tabindex="-1"><a class="header-anchor" href="#assertdontseein" aria-hidden="true">#</a> assertDontSeeIn</h4><p>断言在选择器中不存在给定的文本：</p><pre><code>$browser-&gt;assertDontSeeIn($selector, $text);
</code></pre><p><a name="assert-see-anything-in"></a></p><h4 id="assertseeanythingin" tabindex="-1"><a class="header-anchor" href="#assertseeanythingin" aria-hidden="true">#</a> assertSeeAnythingIn</h4><p>断言在选择器中存在任意的文本：</p><pre><code>$browser-&gt;assertSeeAnythingIn($selector);
</code></pre><p>断言在选择器中不存在文本：</p><pre><code>$browser-&gt;assertSeeNothingIn($selector);
</code></pre><p><a name="assert-script"></a></p><h4 id="assertscript" tabindex="-1"><a class="header-anchor" href="#assertscript" aria-hidden="true">#</a> assertScript</h4><p>断言给定的 JavaScript 表达式结果为给定的值：</p><pre><code>$browser-&gt;assertScript(&#39;window.isLoaded&#39;)
        -&gt;assertScript(&#39;document.readyState&#39;, &#39;complete&#39;);
</code></pre><p><a name="assert-source-has"></a></p><h4 id="assertsourcehas" tabindex="-1"><a class="header-anchor" href="#assertsourcehas" aria-hidden="true">#</a> assertSourceHas</h4><p>断言在页面中存在给定的源码：</p><pre><code>$browser-&gt;assertSourceHas($code);
</code></pre><p><a name="assert-source-missing"></a></p><h4 id="assertsourcemissing" tabindex="-1"><a class="header-anchor" href="#assertsourcemissing" aria-hidden="true">#</a> assertSourceMissing</h4><p>断言页面中没有给定的源码：</p><pre><code>$browser-&gt;assertSourceMissing($code);
</code></pre><p><a name="assert-see-link"></a></p><h4 id="assertseelink" tabindex="-1"><a class="header-anchor" href="#assertseelink" aria-hidden="true">#</a> assertSeeLink</h4><p>断言在页面中存在指定的链接：</p><pre><code>$browser-&gt;assertSeeLink($linkText);
</code></pre><p><a name="assert-dont-see-link"></a></p><h4 id="assertdontseelink" tabindex="-1"><a class="header-anchor" href="#assertdontseelink" aria-hidden="true">#</a> assertDontSeeLink</h4><p>断言页面中没有指定的链接：</p><pre><code>$browser-&gt;assertDontSeeLink($linkText);
</code></pre><p><a name="assert-input-value"></a></p><h4 id="assertinputvalue" tabindex="-1"><a class="header-anchor" href="#assertinputvalue" aria-hidden="true">#</a> assertInputValue</h4><p>断言输入框（input）有给定的值：</p><pre><code>$browser-&gt;assertInputValue($field, $value);
</code></pre><p><a name="assert-input-value-is-not"></a></p><h4 id="assertinputvalueisnot" tabindex="-1"><a class="header-anchor" href="#assertinputvalueisnot" aria-hidden="true">#</a> assertInputValueIsNot</h4><p>断言输入框没有给定的值：</p><pre><code>$browser-&gt;assertInputValueIsNot($field, $value);
</code></pre><p><a name="assert-checked"></a></p><h4 id="assertchecked" tabindex="-1"><a class="header-anchor" href="#assertchecked" aria-hidden="true">#</a> assertChecked</h4><p>断言复选框（checkbox）被选中：</p><pre><code>$browser-&gt;assertChecked($field);
</code></pre><p><a name="assert-not-checked"></a></p><h4 id="assertnotchecked" tabindex="-1"><a class="header-anchor" href="#assertnotchecked" aria-hidden="true">#</a> assertNotChecked</h4><p>断言复选框没有被选中：</p><pre><code>$browser-&gt;assertNotChecked($field);
</code></pre><p><a name="assert-radio-selected"></a></p><h4 id="assertradioselected" tabindex="-1"><a class="header-anchor" href="#assertradioselected" aria-hidden="true">#</a> assertRadioSelected</h4><p>断言单选框（radio）被选中：</p><pre><code>$browser-&gt;assertRadioSelected($field, $value);
</code></pre><p><a name="assert-radio-not-selected"></a></p><h4 id="assertradionotselected" tabindex="-1"><a class="header-anchor" href="#assertradionotselected" aria-hidden="true">#</a> assertRadioNotSelected</h4><p>断言单选框（radio）没有被选中：</p><pre><code>$browser-&gt;assertRadioNotSelected($field, $value);
</code></pre><p><a name="assert-selected"></a></p><h4 id="assertselected" tabindex="-1"><a class="header-anchor" href="#assertselected" aria-hidden="true">#</a> assertSelected</h4><p>断言下拉框有给定的值:</p><pre><code>$browser-&gt;assertSelected($field, $value);
</code></pre><p>断言下拉框没有给定的值：</p><pre><code>$browser-&gt;assertNotSelected($field, $value);
</code></pre><p><a name="assert-select-has-options"></a></p><h4 id="assertselecthasoptions" tabindex="-1"><a class="header-anchor" href="#assertselecthasoptions" aria-hidden="true">#</a> assertSelectHasOptions</h4><p>断言给定的数组值是可选的：</p><pre><code>$browser-&gt;assertSelectHasOptions($field, $values);
</code></pre><p><a name="assert-select-missing-options"></a></p><h4 id="assertselectmissingoptions" tabindex="-1"><a class="header-anchor" href="#assertselectmissingoptions" aria-hidden="true">#</a> assertSelectMissingOptions</h4><p>断言给定的数组值是不可选的：</p><pre><code>$browser-&gt;assertSelectMissingOptions($field, $values);
</code></pre><p><a name="assert-select-has-option"></a></p><h4 id="assertselecthasoption" tabindex="-1"><a class="header-anchor" href="#assertselecthasoption" aria-hidden="true">#</a> assertSelectHasOption</h4><p>断言给定的值在给定的地方是可供选择的：</p><pre><code>$browser-&gt;assertSelectHasOption($field, $value);
</code></pre><p><a name="assert-select-missing-option"></a></p><h4 id="assertselectmissingoption" tabindex="-1"><a class="header-anchor" href="#assertselectmissingoption" aria-hidden="true">#</a> assertSelectMissingOption</h4><p>断言给定的值不可选：</p><pre><code>$browser-&gt;assertSelectMissingOption($field, $value);
</code></pre><p><a name="assert-value"></a></p><h4 id="assertvalue" tabindex="-1"><a class="header-anchor" href="#assertvalue" aria-hidden="true">#</a> assertValue</h4><p>断言选择器范围内的元素存在指定的值：</p><pre><code>$browser-&gt;assertValue($selector, $value);
</code></pre><p><a name="assert-value-is-not"></a></p><h4 id="assertvalueisnot" tabindex="-1"><a class="header-anchor" href="#assertvalueisnot" aria-hidden="true">#</a> assertValueIsNot</h4><p>断言选择器范围内的元素不存在指定的值：</p><pre><code>$browser-&gt;assertValueIsNot($selector, $value);
</code></pre><p><a name="assert-attribute"></a></p><h4 id="assertattribute" tabindex="-1"><a class="header-anchor" href="#assertattribute" aria-hidden="true">#</a> assertAttribute</h4><p>断言与给定选择器匹配的元素在提供的属性中具有给定的值：</p><pre><code>$browser-&gt;assertAttribute($selector, $attribute, $value);
</code></pre><p><a name="assert-attribute-contains"></a></p><h4 id="assertattributecontains" tabindex="-1"><a class="header-anchor" href="#assertattributecontains" aria-hidden="true">#</a> assertAttributeContains</h4><p>断言匹配给定选择器的元素在提供的属性中包含给定值：</p><pre><code>$browser-&gt;assertAttributeContains($selector, $attribute, $value);
</code></pre><p><a name="assert-aria-attribute"></a></p><h4 id="assertariaattribute" tabindex="-1"><a class="header-anchor" href="#assertariaattribute" aria-hidden="true">#</a> assertAriaAttribute</h4><p>断言与给定选择器匹配的元素在给定的 aria 属性中具有给定的值：</p><pre><code>$browser-&gt;assertAriaAttribute($selector, $attribute, $value);
</code></pre><p>例如，给定标记<code>&lt;button aria-label=&quot;Add&quot;&gt;&lt;/button&gt;</code>，你可以像这样声明<code>aria-label</code>属性：</p><pre><code>$browser-&gt;assertAriaAttribute(&#39;button&#39;, &#39;label&#39;, &#39;Add&#39;)
</code></pre><p><a name="assert-data-attribute"></a></p><h4 id="assertdataattribute" tabindex="-1"><a class="header-anchor" href="#assertdataattribute" aria-hidden="true">#</a> assertDataAttribute</h4><p>断言与给定选择器匹配的元素在提供的 data 属性中具有给定的值：</p><pre><code>$browser-&gt;assertDataAttribute($selector, $attribute, $value);
</code></pre><p>例如，给定标记<code>&lt;tr id=&quot;row-1&quot; data-content=&quot;attendees&quot;&gt;&lt;/tr&gt;</code>，你可以像这样断言<code>data-label</code>属性：</p><pre><code>$browser-&gt;assertDataAttribute(&#39;#row-1&#39;, &#39;content&#39;, &#39;attendees&#39;)
</code></pre><p><a name="assert-visible"></a></p><h4 id="assertvisible" tabindex="-1"><a class="header-anchor" href="#assertvisible" aria-hidden="true">#</a> assertVisible</h4><p>断言匹配给定选择器的元素可见:</p><pre><code>$browser-&gt;assertVisible($selector);
</code></pre><p><a name="assert-present"></a></p><h4 id="assertpresent" tabindex="-1"><a class="header-anchor" href="#assertpresent" aria-hidden="true">#</a> assertPresent</h4><p>断言匹配给定选择器的元素存在：</p><pre><code>$browser-&gt;assertPresent($selector);
</code></pre><p><a name="assert-not-present"></a></p><h4 id="assertnotpresent" tabindex="-1"><a class="header-anchor" href="#assertnotpresent" aria-hidden="true">#</a> assertNotPresent</h4><p>断言源中不存在与给定选择器匹配的元素：</p><pre><code>$browser-&gt;assertNotPresent($selector);
</code></pre><p><a name="assert-missing"></a></p><h4 id="assertmissing" tabindex="-1"><a class="header-anchor" href="#assertmissing" aria-hidden="true">#</a> assertMissing</h4><p>断言匹配给定选择器的元素不可见：</p><pre><code>$browser-&gt;assertMissing($selector);
</code></pre><p><a name="assert-input-present"></a></p><h4 id="assertinputpresent" tabindex="-1"><a class="header-anchor" href="#assertinputpresent" aria-hidden="true">#</a> assertInputPresent</h4><p>断言具有给定名称的输入存在：</p><pre><code>$browser-&gt;assertInputPresent($name);
</code></pre><p><a name="assert-input-missing"></a></p><h4 id="assertinputmissing" tabindex="-1"><a class="header-anchor" href="#assertinputmissing" aria-hidden="true">#</a> assertInputMissing</h4><p>断言源中不存在具有给定名称的输入：</p><pre><code>$browser-&gt;assertInputMissing($name);
</code></pre><p><a name="assert-dialog-opened"></a></p><h4 id="assertdialogopened" tabindex="-1"><a class="header-anchor" href="#assertdialogopened" aria-hidden="true">#</a> assertDialogOpened</h4><p>断言已打开带有给定消息的 JavaScript 对话框：</p><pre><code>$browser-&gt;assertDialogOpened($message);
</code></pre><p><a name="assert-enabled"></a></p><h4 id="assertenabled" tabindex="-1"><a class="header-anchor" href="#assertenabled" aria-hidden="true">#</a> assertEnabled</h4><p>断言给定的字段已启用：</p><pre><code>$browser-&gt;assertEnabled($field);
</code></pre><p><a name="assert-disabled"></a></p><h4 id="assertdisabled" tabindex="-1"><a class="header-anchor" href="#assertdisabled" aria-hidden="true">#</a> assertDisabled</h4><p>断言给定的字段被禁用：</p><pre><code>$browser-&gt;assertDisabled($field);
</code></pre><p><a name="assert-button-enabled"></a></p><h4 id="assertbuttonenabled" tabindex="-1"><a class="header-anchor" href="#assertbuttonenabled" aria-hidden="true">#</a> assertButtonEnabled</h4><p>断言给定的按钮已启用：</p><pre><code>$browser-&gt;assertButtonEnabled($button);
</code></pre><p><a name="assert-button-disabled"></a></p><h4 id="assertbuttondisabled" tabindex="-1"><a class="header-anchor" href="#assertbuttondisabled" aria-hidden="true">#</a> assertButtonDisabled</h4><p>断言给定的按钮被禁用：</p><pre><code>$browser-&gt;assertButtonDisabled($button);
</code></pre><p><a name="assert-focused"></a></p><h4 id="assertfocused" tabindex="-1"><a class="header-anchor" href="#assertfocused" aria-hidden="true">#</a> assertFocused</h4><p>断言给定的字段是焦点：</p><pre><code>$browser-&gt;assertFocused($field);
</code></pre><p><a name="assert-not-focused"></a></p><h4 id="assertnotfocused" tabindex="-1"><a class="header-anchor" href="#assertnotfocused" aria-hidden="true">#</a> assertNotFocused</h4><p>断言给定字段未聚焦：</p><pre><code>$browser-&gt;assertNotFocused($field);
</code></pre><p><a name="assert-authenticated"></a></p><h4 id="assertauthenticated" tabindex="-1"><a class="header-anchor" href="#assertauthenticated" aria-hidden="true">#</a> assertAuthenticated</h4><p>断言用户已通过身份验证：</p><pre><code>$browser-&gt;assertAuthenticated();
</code></pre><p><a name="assert-guest"></a></p><h4 id="assertguest" tabindex="-1"><a class="header-anchor" href="#assertguest" aria-hidden="true">#</a> assertGuest</h4><p>断言用户未通过身份验证：</p><pre><code>$browser-&gt;assertGuest();
</code></pre><p><a name="assert-authenticated-as"></a></p><h4 id="assertauthenticatedas" tabindex="-1"><a class="header-anchor" href="#assertauthenticatedas" aria-hidden="true">#</a> assertAuthenticatedAs</h4><p>断言用户已作为给定用户进行身份验证：</p><pre><code>$browser-&gt;assertAuthenticatedAs($user);
</code></pre><p><a name="assert-vue"></a></p><h4 id="assertvue" tabindex="-1"><a class="header-anchor" href="#assertvue" aria-hidden="true">#</a> assertVue</h4>`,280),U={href:"https://vuejs.org",target:"_blank",rel:"noopener noreferrer"},R=r(`<div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>    <span class="token comment">// HTML...</span>

    <span class="token operator">&lt;</span>profile dusk<span class="token operator">=</span><span class="token string double-quoted-string">&quot;profile-component&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>profile<span class="token operator">&gt;</span>

    <span class="token comment">// 组件定义...</span>

    Vue<span class="token operator">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;profile&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        template<span class="token punctuation">:</span> <span class="token string single-quoted-string">&#39;&lt;div&gt;{{ user.name }}&lt;/div&gt;&#39;</span><span class="token punctuation">,</span>

        <span class="token argument-name">data</span><span class="token punctuation">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">{</span>
                user<span class="token punctuation">:</span> <span class="token punctuation">{</span>
                    name<span class="token punctuation">:</span> <span class="token string single-quoted-string">&#39;Taylor&#39;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你可以像这样断言 Vue 组件的状态：</p><pre><code>/**
 * 一个基本的 Vue 测试示例
 *
 * @return void
 */
public function testVue()
{
    $this-&gt;browse(function (Browser $browser) {
        $browser-&gt;visit(&#39;/&#39;)
                -&gt;assertVue(&#39;user.name&#39;, &#39;Taylor&#39;, &#39;@profile-component&#39;);
    });
}
</code></pre><p><a name="assert-vue-is-not"></a></p><h4 id="assertvueisnot" tabindex="-1"><a class="header-anchor" href="#assertvueisnot" aria-hidden="true">#</a> assertVueIsNot</h4><p>断言 Vue 组件数据的属性不匹配给定的值：</p><pre><code>$browser-&gt;assertVueIsNot($property, $value, $componentSelector = null);
</code></pre><p><a name="assert-vue-contains"></a></p><h4 id="assertvuecontains" tabindex="-1"><a class="header-anchor" href="#assertvuecontains" aria-hidden="true">#</a> assertVueContains</h4><p>断言 Vue 组件数据的属性是一个数组，并包含给定的值：</p><pre><code>$browser-&gt;assertVueContains($property, $value, $componentSelector = null);
</code></pre><p><a name="assert-vue-does-not-contain"></a></p><h4 id="assertvuedoesnotcontain" tabindex="-1"><a class="header-anchor" href="#assertvuedoesnotcontain" aria-hidden="true">#</a> assertVueDoesNotContain</h4><p>断言 Vue 组件数据的属性是一个数组，且不包含给定的值：</p><pre><code>$browser-&gt;assertVueDoesNotContain($property, $value, $componentSelector = null);
</code></pre><p><a name="pages"></a></p><h2 id="pages" tabindex="-1"><a class="header-anchor" href="#pages" aria-hidden="true">#</a> Pages</h2><p>有时，测试需要按顺序执行几个复杂的操作。这会使测试代码更难阅读和理解。 Dusk Pages 允许你定义语义化的操作，然后可以通过单一方法在给定页面上执行这些操作。Pages 还可以为应用或单个页面定义通用选择器的快捷方式。</p><p><a name="generating-pages"></a></p><h3 id="生成-pages" tabindex="-1"><a class="header-anchor" href="#生成-pages" aria-hidden="true">#</a> 生成 Pages</h3><p><code>dusk:page</code>Artisan 命令可以生成页面对象。所有的页面对象都位于<code>tests/Browser/Pages</code>目录：</p><pre><code>php artisan dusk:page Login
</code></pre><p><a name="configuring-pages"></a></p><h3 id="配置-pages" tabindex="-1"><a class="header-anchor" href="#配置-pages" aria-hidden="true">#</a> 配置 Pages</h3><p>默认情况下，页面具有三种方法：<code>url</code>、<code>assert</code>和<code>elements</code>。我们现在将讨论 <code>url</code>和<code>assert</code>方法。<code>elements</code>方法将<a href="#shorthand-selectors">在下面更详细地讨论</a>。</p><p><a name="the-url-method"></a></p><h4 id="url-方法" tabindex="-1"><a class="header-anchor" href="#url-方法" aria-hidden="true">#</a> <code>url</code> 方法</h4><p><code>url</code>方法应该返回表示页面 URL 的路径。 Dusk 将会在浏览器中使用这个 URL 来导航到具体页面：</p><pre><code>/**
 * 获取页面的 URL。
 *
 * @return string
 */
public function url()
{
    return &#39;/login&#39;;
}
</code></pre><p><a name="the-assert-method"></a></p><h4 id="assert-方法" tabindex="-1"><a class="header-anchor" href="#assert-方法" aria-hidden="true">#</a> <code>assert</code> 方法</h4><p><code>assert</code>方法可以作出任何断言来验证浏览器是否在指定页面上。实际上没有必要在这个方法中放置任何东西；但是，你可以按自己的需求来做出这些断言。导航到页面时，这些断言将自动运行：</p><pre><code>/**
 * 断言浏览器当前处于指定页面。
 */
public function assert(Browser $browser): void
{
    $browser-&gt;assertPathIs($this-&gt;url());
}
</code></pre><p><a name="navigating-to-pages"></a></p><h3 id="导航至页面" tabindex="-1"><a class="header-anchor" href="#导航至页面" aria-hidden="true">#</a> 导航至页面</h3><p>一旦页面定义好之后，你可以使用<code>visit</code>方法导航至页面：</p><pre><code>use Tests\\Browser\\Pages\\Login;

$browser-&gt;visit(new Login);
</code></pre><p>有时你可能已经在给定的页面上，需要将页面的选择器和方法「加载」到当前的测试上下文中。 这在通过按钮重定向到指定页面而没有明确导航到该页面时很常见。 在这种情况下，你可以使用<code>on</code>方法加载页面：</p><pre><code>use Tests\\Browser\\Pages\\CreatePlaylist;

$browser-&gt;visit(&#39;/dashboard&#39;)
        -&gt;clickLink(&#39;Create Playlist&#39;)
        -&gt;on(new CreatePlaylist)
        -&gt;assertSee(&#39;@create&#39;);
</code></pre><p><a name="shorthand-selectors"></a></p><h3 id="选择器简写" tabindex="-1"><a class="header-anchor" href="#选择器简写" aria-hidden="true">#</a> 选择器简写</h3><p>该<code>elements</code>方法允许你为页面中的任何 CSS 选择器定义简单易记的简写。例如，让我们为应用登录页中的 email 输入框定义一个简写：</p><pre><code>/**
 * 获取页面元素的简写。
 *
 * @return array&lt;string, string&gt;
 */
public function elements(): array
{
    return [
        &#39;@email&#39; =&gt; &#39;input[name=email]&#39;,
    ];
}
</code></pre><p>一旦定义了简写，你就可以用这个简写来代替之前在页面中使用的完整 CSS 选择器：</p><pre><code>$browser-&gt;type(&#39;@email&#39;, &#39;taylor@laravel.com&#39;);
</code></pre><p><a name="global-shorthand-selectors"></a></p><h4 id="全局的选择器简写" tabindex="-1"><a class="header-anchor" href="#全局的选择器简写" aria-hidden="true">#</a> 全局的选择器简写</h4><p>安装 Dusk 之后，<code>Page</code>基类存放在你的<code>tests/Browser/Pages</code>目录。该类中包含一个<code>siteElements</code>方法，这个方法可以用来定义全局的选择器简写，这样在你应用中每个页面都可以使用这些全局选择器简写了：</p><pre><code>/**
 * 获取站点全局的选择器简写。
 *
 * @return array&lt;string, string&gt;
 */
public static function siteElements(): array
{
    return [
        &#39;@element&#39; =&gt; &#39;#selector&#39;,
    ];
}
</code></pre><p><a name="page-methods"></a></p><h3 id="页面方法" tabindex="-1"><a class="header-anchor" href="#页面方法" aria-hidden="true">#</a> 页面方法</h3><p>除了页面中已经定义的默认方法之外，你还可以定义在整个测试过程中会使用到的其他方法。例如，假设我们正在开发一个音乐管理应用，在应用中每个页面都可能需要一个公共的方法来创建播放列表，而不是在每一个测试类中都重写一遍创建播放列表的逻辑，这时候你可以在你的页面类中定义一个<code>createPlaylist</code>方法：</p><pre><code>&lt;?php

namespace Tests\\Browser\\Pages;

use Laravel\\Dusk\\Browser;

class Dashboard extends Page
{
    // 其他页面方法...

    /**
     * 创建一个新的播放列表。
     */
    public function createPlaylist(Browser $browser, string $name): void
    {
        $browser-&gt;type(&#39;name&#39;, $name)
                -&gt;check(&#39;share&#39;)
                -&gt;press(&#39;Create Playlist&#39;);
    }
}
</code></pre><p>方法被定义之后，你可以在任何使用到该页的测试中使用它了。浏览器实例会自动作为第一个参数传递给自定义页面方法：</p><pre><code>use Tests\\Browser\\Pages\\Dashboard;

$browser-&gt;visit(new Dashboard)
        -&gt;createPlaylist(&#39;My Playlist&#39;)
        -&gt;assertSee(&#39;My Playlist&#39;);
</code></pre><p><a name="components"></a></p><h2 id="组件" tabindex="-1"><a class="header-anchor" href="#组件" aria-hidden="true">#</a> 组件</h2><p>组件类似于 Dusk 的 「页面对象」，不过它更多的是贯穿整个应用程序中频繁重用的 UI 和功能片断，比如说导航条或信息通知弹窗。因此，组件并不会绑定于某个明确的 URL。</p><p><a name="generating-components"></a></p><h3 id="生成组件" tabindex="-1"><a class="header-anchor" href="#生成组件" aria-hidden="true">#</a> 生成组件</h3><p>使用<code>dusk:component</code>Artisan 命令即可生成组件。新生成的组件位于<code>tests/Browser/Components</code>目录下：</p><pre><code>php artisan dusk:component DatePicker
</code></pre><p>如上所示，这是生成一个「日期选择器」（date picker）组件的示例，这个组件可能会贯穿使用在你应用程序的许多页面中。在整个测试套件的大量测试页面中，手动编写日期选择的浏览器自动化逻辑会非常麻烦。 更方便的替代办法是，定义一个表示日期选择器的 Dusk 组件，然后把自动化逻辑封装在该组件内：</p><pre><code>&lt;?php

namespace Tests\\Browser\\Components;

use Laravel\\Dusk\\Browser;
use Laravel\\Dusk\\Component as BaseComponent;

class DatePicker extends BaseComponent
{
    /**
     * 获取组件的 root selector。
     */
    public function selector(): string
    {
        return &#39;.date-picker&#39;;
    }

    /**
     * 断言浏览器包含组件。
     */
    public function assert(Browser $browser): void
    {
        $browser-&gt;assertVisible($this-&gt;selector());
    }

    /**
     * 读取组件的元素简写。
     *
     * @return array&lt;string, string&gt;
     */
    public function elements(): array
    {
        return [
            &#39;@date-field&#39; =&gt; &#39;input.datepicker-input&#39;,
            &#39;@year-list&#39; =&gt; &#39;div &gt; div.datepicker-years&#39;,
            &#39;@month-list&#39; =&gt; &#39;div &gt; div.datepicker-months&#39;,
            &#39;@day-list&#39; =&gt; &#39;div &gt; div.datepicker-days&#39;,
        ];
    }

    /**
     * 选择给定日期。
     */
    public function selectDate(Browser $browser, int $year, int $month, int $day): void
    {
        $browser-&gt;click(&#39;@date-field&#39;)
                -&gt;within(&#39;@year-list&#39;, function (Browser $browser) use ($year) {
                    $browser-&gt;click($year);
                })
                -&gt;within(&#39;@month-list&#39;, function (Browser $browser) use ($month) {
                    $browser-&gt;click($month);
                })
                -&gt;within(&#39;@day-list&#39;, function (Browser $browser) use ($day) {
                    $browser-&gt;click($day);
                });
    }
}
</code></pre><p><a name="using-components"></a></p><h3 id="使用组件" tabindex="-1"><a class="header-anchor" href="#使用组件" aria-hidden="true">#</a> 使用组件</h3><p>当组件被定义了之后，我们就可以轻松的在任意测试页面通过日期选择器选择一个日期。并且，如果选择日期的逻辑发生了变化，我们只需要更新组件即可：</p><pre><code>&lt;?php

namespace Tests\\Browser;

use Illuminate\\Foundation\\Testing\\DatabaseMigrations;
use Laravel\\Dusk\\Browser;
use Tests\\Browser\\Components\\DatePicker;
use Tests\\DuskTestCase;

class ExampleTest extends DuskTestCase
{
    /**
     * 一个基础的组件测试用例.
     */
    public function test_basic_example(): void
    {
        $this-&gt;browse(function (Browser $browser) {
            $browser-&gt;visit(&#39;/&#39;)
                    -&gt;within(new DatePicker, function (Browser $browser) {
                        $browser-&gt;selectDate(2019, 1, 30);
                    })
                    -&gt;assertSee(&#39;January&#39;);
        });
    }
}
</code></pre><p><a name="continuous-integration"></a></p><h2 id="持续集成" tabindex="-1"><a class="header-anchor" href="#持续集成" aria-hidden="true">#</a> 持续集成</h2><blockquote><p><strong>注意</strong> 大多数 Dusk 持续集成配置都希望你的 Laravel 应用程序使用端口 8000 上的内置 PHP 开发服务器提供服务。因此，你应该确保持续集成环境有一个值为 <code>http://127.0.0.1:8000</code> 的 <code>APP_URL</code> 环境变量。</p></blockquote><p><a name="running-tests-on-heroku-ci"></a></p><h3 id="heroku-ci" tabindex="-1"><a class="header-anchor" href="#heroku-ci" aria-hidden="true">#</a> Heroku CI</h3>`,73),q={href:"https://www.heroku.com/continuous-integration",target:"_blank",rel:"noopener noreferrer"},H=e("code",null,"app.json",-1),V=e("pre",null,[e("code",null,`{
  "environments": {
    "test": {
      "buildpacks": [
        { "url": "heroku/php" },
        { "url": "https://github.com/heroku/heroku-buildpack-google-chrome" }
      ],
      "scripts": {
        "test-setup": "cp .env.testing .env",
        "test": "nohup bash -c './vendor/laravel/dusk/bin/chromedriver-linux > /dev/null 2>&1 &' && nohup bash -c 'php artisan serve --no-reload > /dev/null 2>&1 &' && php artisan dusk"
      }
    }
  }
}
`)],-1),M=e("p",null,[e("a",{name:"running-tests-on-travis-ci"})],-1),N=e("h3",{id:"travis-ci",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#travis-ci","aria-hidden":"true"},"#"),a(" Travis CI")],-1),W={href:"https://travis-ci.org",target:"_blank",rel:"noopener noreferrer"},E=e("code",null,".travis.yml",-1),j=e("code",null,"php artisan serve",-1),O=r(`<div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">language</span><span class="token punctuation">:</span> php

<span class="token key atrule">php</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token number">7.3</span>

<span class="token key atrule">addons</span><span class="token punctuation">:</span>
  <span class="token key atrule">chrome</span><span class="token punctuation">:</span> stable

<span class="token key atrule">install</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> cp .env.testing .env
  <span class="token punctuation">-</span> travis_retry composer install <span class="token punctuation">-</span><span class="token punctuation">-</span>no<span class="token punctuation">-</span>interaction <span class="token punctuation">-</span><span class="token punctuation">-</span>prefer<span class="token punctuation">-</span>dist
  <span class="token punctuation">-</span> php artisan key<span class="token punctuation">:</span>generate
  <span class="token punctuation">-</span> php artisan dusk<span class="token punctuation">:</span>chrome<span class="token punctuation">-</span>driver

<span class="token key atrule">before_script</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> google<span class="token punctuation">-</span>chrome<span class="token punctuation">-</span>stable <span class="token punctuation">-</span><span class="token punctuation">-</span>headless <span class="token punctuation">-</span><span class="token punctuation">-</span>disable<span class="token punctuation">-</span>gpu <span class="token punctuation">-</span><span class="token punctuation">-</span>remote<span class="token punctuation">-</span>debugging<span class="token punctuation">-</span>port=9222 http<span class="token punctuation">:</span>//localhost &amp;
  <span class="token punctuation">-</span> php artisan serve <span class="token punctuation">-</span><span class="token punctuation">-</span>no<span class="token punctuation">-</span>reload &amp;

<span class="token key atrule">script</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> php artisan dusk
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="running-tests-on-github-actions"></a></p><h3 id="github-actions" tabindex="-1"><a class="header-anchor" href="#github-actions" aria-hidden="true">#</a> GitHub Actions</h3>`,3),J={href:"https://github.com/features/actions",target:"_blank",rel:"noopener noreferrer"},z=e("code",null,"php artisan serve",-1),G=r(`<div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> CI
<span class="token key atrule">on</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>push<span class="token punctuation">]</span>
<span class="token key atrule">jobs</span><span class="token punctuation">:</span>

  <span class="token key atrule">dusk-php</span><span class="token punctuation">:</span>
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest
    <span class="token key atrule">env</span><span class="token punctuation">:</span>
      <span class="token key atrule">APP_URL</span><span class="token punctuation">:</span> <span class="token string">&quot;http://127.0.0.1:8000&quot;</span>
      <span class="token key atrule">DB_USERNAME</span><span class="token punctuation">:</span> root
      <span class="token key atrule">DB_PASSWORD</span><span class="token punctuation">:</span> root
      <span class="token key atrule">MAIL_MAILER</span><span class="token punctuation">:</span> log
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Prepare The Environment
        <span class="token key atrule">run</span><span class="token punctuation">:</span> cp .env.example .env
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Create Database
        <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
          sudo systemctl start mysql
          mysql --user=&quot;root&quot; --password=&quot;root&quot; -e &quot;CREATE DATABASE \\\`my-database\\\` character set UTF8mb4 collate utf8mb4_bin;&quot;</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Install Composer Dependencies
        <span class="token key atrule">run</span><span class="token punctuation">:</span> composer install <span class="token punctuation">-</span><span class="token punctuation">-</span>no<span class="token punctuation">-</span>progress <span class="token punctuation">-</span><span class="token punctuation">-</span>prefer<span class="token punctuation">-</span>dist <span class="token punctuation">-</span><span class="token punctuation">-</span>optimize<span class="token punctuation">-</span>autoloader
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Generate Application Key
        <span class="token key atrule">run</span><span class="token punctuation">:</span> php artisan key<span class="token punctuation">:</span>generate
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Upgrade Chrome Driver
        <span class="token key atrule">run</span><span class="token punctuation">:</span> php artisan dusk<span class="token punctuation">:</span>chrome<span class="token punctuation">-</span>driver <span class="token punctuation">-</span><span class="token punctuation">-</span>detect
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Start Chrome Driver
        <span class="token key atrule">run</span><span class="token punctuation">:</span> ./vendor/laravel/dusk/bin/chromedriver<span class="token punctuation">-</span>linux &amp;
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Run Laravel Server
        <span class="token key atrule">run</span><span class="token punctuation">:</span> php artisan serve <span class="token punctuation">-</span><span class="token punctuation">-</span>no<span class="token punctuation">-</span>reload &amp;
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Run Dusk Tests
        <span class="token key atrule">run</span><span class="token punctuation">:</span> php artisan dusk
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Upload Screenshots
        <span class="token key atrule">if</span><span class="token punctuation">:</span> failure()
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/upload<span class="token punctuation">-</span>artifact@v2
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">name</span><span class="token punctuation">:</span> screenshots
          <span class="token key atrule">path</span><span class="token punctuation">:</span> tests/Browser/screenshots
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Upload Console Logs
        <span class="token key atrule">if</span><span class="token punctuation">:</span> failure()
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/upload<span class="token punctuation">-</span>artifact@v2
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">name</span><span class="token punctuation">:</span> console
          <span class="token key atrule">path</span><span class="token punctuation">:</span> tests/Browser/console
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function Q(K,X){const s=o("ExternalLinkIcon");return i(),d("div",null,[p,e("p",null,[e("a",l,[a("Laravel Dusk"),n(s)]),a(" 提供了一套富有表现力、易于使用的浏览器自动化和测试 API。默认情况下，Dusk 不需要在本地计算机上安装 JDK 或 Selenium。相反，Dusk 使用一个独立的 "),e("a",h,[a("ChromeDriver"),n(s)]),a(" 安装包。你可以自由地使用任何其他兼容 Selenium 的驱动程序。")]),u,b,e("p",null,[a("为了开始使用，你需要先安装 "),e("a",g,[a("Google Chrome"),n(s)]),a(" 并将 "),m,a(" Composer 依赖添加到你的项目中：")]),k,e("p",null,[a("默认情况下，Dusk 使用 Google Chrome 和独立的 "),e("a",v,[a("ChromeDriver"),n(s)]),a(" 安装来运行你的浏览器测试。但是，你可以启动自己的 Selenium 服务器，并运行你希望的任何浏览器来运行测试。")]),f,e("p",null,[w,a(" 命令接受任何 PHPUnit 测试运行器通常接受的参数，例如你可以只运行给定"),e("a",$,[a("组"),n(s)]),a("的测试：")]),x,e("blockquote",null,[e("p",null,[D,a(" 所有修饰符键如"),y,a("都包裹在"),S,a("字符中，并且与在 "),C,a("类中定义的常量匹配，该类可以"),e("a",_,[a("在 GitHub 上找到"),n(s)]),a(".")])]),I,e("p",null,[T,a("和"),P,a("方法可以一直等待，直到 "),e("a",A,[a("Vue 组件"),n(s)]),a(" 的属性包含给定的值：")]),L,B,F,e("p",null,[a("Dusk 甚至允许你对 "),e("a",U,[a("Vue 组件"),n(s)]),a("数据的状态进行断言。例如，假设你的应用程序包含以下 Vue 组件：")]),R,e("p",null,[a("要在 "),e("a",q,[a("Heroku CI"),n(s)]),a(" 中运行 Dusk 测试，请将以下 Google Chrome buildpack 和 脚本添加到 Heroku 的 "),H,a(" 文件中：")]),V,M,N,e("p",null,[a("要在 "),e("a",W,[a("Travis CI"),n(s)]),a(" 运行 Dusk 测试，可以使用下面这个 "),E,a(" 配置。由于 Travis CI 不是一个图形化的环境，我们还需要一些额外的步骤以便启动 Chrome 浏览器。此外，我们将会使用 "),j,a(" 来启动 PHP 自带的 Web 服务器：")]),O,e("p",null,[a("如果你正在使用 "),e("a",J,[a("Github Actions"),n(s)]),a(" 来运行你的 Dusk 测试，你应该使用以下这份配置文件为模版。像 TravisCI 一样，我们使用 "),z,a(" 命令来启动 PHP 的内置 Web 服务：")]),G])}const ee=t(c,[["render",Q],["__file","dusk.html.vue"]]);export{ee as default};
