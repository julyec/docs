import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as i,c,b as e,d as t,e as s,a as n}from"./app-8cdff07c.js";const d={},l=n('<h1 id="laravel-dusk" tabindex="-1"><a class="header-anchor" href="#laravel-dusk" aria-hidden="true">#</a> Laravel Dusk</h1><ul><li><a href="#introduction">Introduction</a></li><li><a href="#installation">Installation</a><ul><li><a href="#managing-chromedriver-installations">Managing ChromeDriver Installations</a></li><li><a href="#using-other-browsers">Using Other Browsers</a></li></ul></li><li><a href="#getting-started">Getting Started</a><ul><li><a href="#generating-tests">Generating Tests</a></li><li><a href="#resetting-the-database-after-each-test">Resetting The Database After Each Test</a></li><li><a href="#running-tests">Running Tests</a></li><li><a href="#environment-handling">Environment Handling</a></li></ul></li><li><a href="#browser-basics">Browser Basics</a><ul><li><a href="#creating-browsers">Creating Browsers</a></li><li><a href="#navigation">Navigation</a></li><li><a href="#resizing-browser-windows">Resizing Browser Windows</a></li><li><a href="#browser-macros">Browser Macros</a></li><li><a href="#authentication">Authentication</a></li><li><a href="#cookies">Cookies</a></li><li><a href="#executing-javascript">Executing JavaScript</a></li><li><a href="#taking-a-screenshot">Taking A Screenshot</a></li><li><a href="#storing-console-output-to-disk">Storing Console Output To Disk</a></li><li><a href="#storing-page-source-to-disk">Storing Page Source To Disk</a></li></ul></li><li><a href="#interacting-with-elements">Interacting With Elements</a><ul><li><a href="#dusk-selectors">Dusk Selectors</a></li><li><a href="#text-values-and-attributes">Text, Values, &amp; Attributes</a></li><li><a href="#interacting-with-forms">Interacting With Forms</a></li><li><a href="#attaching-files">Attaching Files</a></li><li><a href="#pressing-buttons">Pressing Buttons</a></li><li><a href="#clicking-links">Clicking Links</a></li><li><a href="#using-the-keyboard">Using The Keyboard</a></li><li><a href="#using-the-mouse">Using The Mouse</a></li><li><a href="#javascript-dialogs">JavaScript Dialogs</a></li><li><a href="#interacting-with-iframes">Interacting With Inline Frames</a></li><li><a href="#scoping-selectors">Scoping Selectors</a></li><li><a href="#waiting-for-elements">Waiting For Elements</a></li><li><a href="#scrolling-an-element-into-view">Scrolling An Element Into View</a></li></ul></li><li><a href="#available-assertions">Available Assertions</a></li><li><a href="#pages">Pages</a><ul><li><a href="#generating-pages">Generating Pages</a></li><li><a href="#configuring-pages">Configuring Pages</a></li><li><a href="#navigating-to-pages">Navigating To Pages</a></li><li><a href="#shorthand-selectors">Shorthand Selectors</a></li><li><a href="#page-methods">Page Methods</a></li></ul></li><li><a href="#components">Components</a><ul><li><a href="#generating-components">Generating Components</a></li><li><a href="#using-components">Using Components</a></li></ul></li><li><a href="#continuous-integration">Continuous Integration</a><ul><li><a href="#running-tests-on-heroku-ci">Heroku CI</a></li><li><a href="#running-tests-on-travis-ci">Travis CI</a></li><li><a href="#running-tests-on-github-actions">GitHub Actions</a></li><li><a href="#running-tests-on-chipper-ci">Chipper CI</a></li></ul></li></ul><p><a name="introduction"></a></p><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2>',4),p={href:"https://github.com/laravel/dusk",target:"_blank",rel:"noopener noreferrer"},h={href:"https://sites.google.com/chromium.org/driver",target:"_blank",rel:"noopener noreferrer"},u=e("p",null,[e("a",{name:"installation"})],-1),m=e("h2",{id:"installation",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#installation","aria-hidden":"true"},"#"),t(" Installation")],-1),g={href:"https://www.google.com/chrome",target:"_blank",rel:"noopener noreferrer"},b=e("code",null,"laravel/dusk",-1),v=n(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">composer</span> require <span class="token parameter variable">--dev</span> laravel/dusk
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p><strong>Warning</strong> If you are manually registering Dusk&#39;s service provider, you should <strong>never</strong> register it in your production environment, as doing so could lead to arbitrary users being able to authenticate with your application.</p></blockquote><p>After installing the Dusk package, execute the <code>dusk:install</code> Artisan command. The <code>dusk:install</code> command will create a <code>tests/Browser</code> directory, an example Dusk test, and install the Chrome Driver binary for your operating system:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan dusk:install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Next, set the <code>APP_URL</code> environment variable in your application&#39;s <code>.env</code> file. This value should match the URL you use to access your application in a browser.</p><blockquote><p><strong>Note</strong> If you are using <a href="./sail">Laravel Sail</a> to manage your local development environment, please also consult the Sail documentation on <a href="./sail#laravel-dusk">configuring and running Dusk tests</a>.</p></blockquote><p><a name="managing-chromedriver-installations"></a></p><h3 id="managing-chromedriver-installations" tabindex="-1"><a class="header-anchor" href="#managing-chromedriver-installations" aria-hidden="true">#</a> Managing ChromeDriver Installations</h3><p>If you would like to install a different version of ChromeDriver than what is installed by Laravel Dusk via the <code>dusk:install</code> command, you may use the <code>dusk:chrome-driver</code> command:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Install the latest version of ChromeDriver for your OS...</span>
php artisan dusk:chrome-driver

<span class="token comment"># Install a given version of ChromeDriver for your OS...</span>
php artisan dusk:chrome-driver <span class="token number">86</span>

<span class="token comment"># Install a given version of ChromeDriver for all supported OSs...</span>
php artisan dusk:chrome-driver <span class="token parameter variable">--all</span>

<span class="token comment"># Install the version of ChromeDriver that matches the detected version of Chrome / Chromium for your OS...</span>
php artisan dusk:chrome-driver <span class="token parameter variable">--detect</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>Warning</strong> Dusk requires the <code>chromedriver</code> binaries to be executable. If you&#39;re having problems running Dusk, you should ensure the binaries are executable using the following command: <code>chmod -R 0755 vendor/laravel/dusk/bin/</code>.</p></blockquote><p><a name="using-other-browsers"></a></p><h3 id="using-other-browsers" tabindex="-1"><a class="header-anchor" href="#using-other-browsers" aria-hidden="true">#</a> Using Other Browsers</h3>`,13),f={href:"https://sites.google.com/chromium.org/driver",target:"_blank",rel:"noopener noreferrer"},k=n(`<p>To get started, open your <code>tests/DuskTestCase.php</code> file, which is the base Dusk test case for your application. Within this file, you can remove the call to the <code>startChromeDriver</code> method. This will stop Dusk from automatically starting the ChromeDriver:</p><pre><code>/**
 * Prepare for Dusk test execution.
 *
 * @beforeClass
 */
public static function prepare(): void
{
    // static::startChromeDriver();
}
</code></pre><p>Next, you may modify the <code>driver</code> method to connect to the URL and port of your choice. In addition, you may modify the &quot;desired capabilities&quot; that should be passed to the WebDriver:</p><pre><code>use Facebook\\WebDriver\\Remote\\RemoteWebDriver;

/**
 * Create the RemoteWebDriver instance.
 */
protected function driver(): RemoteWebDriver
{
    return RemoteWebDriver::create(
        &#39;http://localhost:4444/wd/hub&#39;, DesiredCapabilities::phantomjs()
    );
}
</code></pre><p><a name="getting-started"></a></p><h2 id="getting-started" tabindex="-1"><a class="header-anchor" href="#getting-started" aria-hidden="true">#</a> Getting Started</h2><p><a name="generating-tests"></a></p><h3 id="generating-tests" tabindex="-1"><a class="header-anchor" href="#generating-tests" aria-hidden="true">#</a> Generating Tests</h3><p>To generate a Dusk test, use the <code>dusk:make</code> Artisan command. The generated test will be placed in the <code>tests/Browser</code> directory:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan dusk:make LoginTest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="resetting-the-database-after-each-test"></a></p><h3 id="resetting-the-database-after-each-test" tabindex="-1"><a class="header-anchor" href="#resetting-the-database-after-each-test" aria-hidden="true">#</a> Resetting The Database After Each Test</h3><p>Most of the tests you write will interact with pages that retrieve data from your application&#39;s database; however, your Dusk tests should never use the <code>RefreshDatabase</code> trait. The <code>RefreshDatabase</code> trait leverages database transactions which will not be applicable or available across HTTP requests. Instead, you have two options: the <code>DatabaseMigrations</code> trait and the <code>DatabaseTruncation</code> trait.</p><p><a name="reset-migrations"></a></p><h4 id="using-database-migrations" tabindex="-1"><a class="header-anchor" href="#using-database-migrations" aria-hidden="true">#</a> Using Database Migrations</h4><p>The <code>DatabaseMigrations</code> trait will run your database migrations before each test. However, dropping and re-creating your database tables for each test is typically slower than truncating the tables:</p><pre><code>&lt;?php

namespace Tests\\Browser;

use App\\Models\\User;
use Illuminate\\Foundation\\Testing\\DatabaseMigrations;
use Laravel\\Dusk\\Chrome;
use Tests\\DuskTestCase;

class ExampleTest extends DuskTestCase
{
    use DatabaseMigrations;
}
</code></pre><blockquote><p><strong>Warning</strong> SQLite in-memory databases may not be used when executing Dusk tests. Since the browser executes within its own process, it will not be able to access the in-memory databases of other processes.</p></blockquote><p><a name="reset-truncation"></a></p><h4 id="using-database-truncation" tabindex="-1"><a class="header-anchor" href="#using-database-truncation" aria-hidden="true">#</a> Using Database Truncation</h4><p>Before using the <code>DatabaseTruncation</code> trait, you must install the <code>doctrine/dbal</code> package using the Composer package manager:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">composer</span> require <span class="token parameter variable">--dev</span> doctrine/dbal
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The <code>DatabaseTruncation</code> trait will migrate your database on the first test in order to ensure your database tables have been properly created. However, on subsequent tests, the database&#39;s tables will simply be truncated - providing a speed boost over re-running all of your database migrations:</p><pre><code>&lt;?php

namespace Tests\\Browser;

use App\\Models\\User;
use Illuminate\\Foundation\\Testing\\DatabaseTruncation;
use Laravel\\Dusk\\Chrome;
use Tests\\DuskTestCase;

class ExampleTest extends DuskTestCase
{
    use DatabaseTruncation;
}
</code></pre><p>By default, this trait will truncate all tables except the <code>migrations</code> table. If you would like to customize the tables that should be truncated, you may define a <code>$tablesToTruncate</code> property on your test class:</p><pre><code>/**
 * Indicates which tables should be truncated.
 *
 * @var array
 */
protected $tablesToTruncate = [&#39;users&#39;];
</code></pre><p>Alternatively, you may define an <code>$exceptTables</code> property on your test class to specify which tables should be excluded from truncation:</p><pre><code>/**
 * Indicates which tables should be excluded from truncation.
 *
 * @var array
 */
protected $exceptTables = [&#39;users&#39;];
</code></pre><p>To specify the database connections that should have their tables truncated, you may define a <code>$connectionsToTruncate</code> property on your test class:</p><pre><code>/**
 * Indicates which connections should have their tables truncated.
 *
 * @var array
 */
protected $connectionsToTruncate = [&#39;mysql&#39;];
</code></pre><p>If you would like to execute code before or after database truncation is performed, you may define <code>beforeTruncatingDatabase</code> or <code>afterTruncatingDatabase</code> methods on your test class:</p><pre><code>/**
 * Perform any work that should take place before the database has started truncating.
 */
protected function beforeTruncatingDatabase(): void
{
    //
}

/**
 * Perform any work that should take place after the database has finished truncating.
 */
protected function afterTruncatingDatabase(): void
{
    //
}
</code></pre><p><a name="running-tests"></a></p><h3 id="running-tests" tabindex="-1"><a class="header-anchor" href="#running-tests" aria-hidden="true">#</a> Running Tests</h3><p>To run your browser tests, execute the <code>dusk</code> Artisan command:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan dusk
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>If you had test failures the last time you ran the <code>dusk</code> command, you may save time by re-running the failing tests first using the <code>dusk:fails</code> command:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan dusk:fails
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,38),w=e("code",null,"dusk",-1),y={href:"https://phpunit.readthedocs.io/en/10.1/annotations.html#group",target:"_blank",rel:"noopener noreferrer"},$=n(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan dusk <span class="token parameter variable">--group</span><span class="token operator">=</span>foo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p><strong>Note</strong> If you are using <a href="./sail">Laravel Sail</a> to manage your local development environment, please consult the Sail documentation on <a href="./sail#laravel-dusk">configuring and running Dusk tests</a>.</p></blockquote><p><a name="manually-starting-chromedriver"></a></p><h4 id="manually-starting-chromedriver" tabindex="-1"><a class="header-anchor" href="#manually-starting-chromedriver" aria-hidden="true">#</a> Manually Starting ChromeDriver</h4><p>By default, Dusk will automatically attempt to start ChromeDriver. If this does not work for your particular system, you may manually start ChromeDriver before running the <code>dusk</code> command. If you choose to start ChromeDriver manually, you should comment out the following line of your <code>tests/DuskTestCase.php</code> file:</p><pre><code>/**
 * Prepare for Dusk test execution.
 *
 * @beforeClass
 */
public static function prepare(): void
{
    // static::startChromeDriver();
}
</code></pre><p>In addition, if you start ChromeDriver on a port other than 9515, you should modify the <code>driver</code> method of the same class to reflect the correct port:</p><pre><code>use Facebook\\WebDriver\\Remote\\RemoteWebDriver;

/**
 * Create the RemoteWebDriver instance.
 */
protected function driver(): RemoteWebDriver
{
    return RemoteWebDriver::create(
        &#39;http://localhost:9515&#39;, DesiredCapabilities::chrome()
    );
}
</code></pre><p><a name="environment-handling"></a></p><h3 id="environment-handling" tabindex="-1"><a class="header-anchor" href="#environment-handling" aria-hidden="true">#</a> Environment Handling</h3><p>To force Dusk to use its own environment file when running tests, create a <code>.env.dusk.{environment}</code> file in the root of your project. For example, if you will be initiating the <code>dusk</code> command from your <code>local</code> environment, you should create a <code>.env.dusk.local</code> file.</p><p>When running tests, Dusk will back-up your <code>.env</code> file and rename your Dusk environment to <code>.env</code>. Once the tests have completed, your <code>.env</code> file will be restored.</p><p><a name="browser-basics"></a></p><h2 id="browser-basics" tabindex="-1"><a class="header-anchor" href="#browser-basics" aria-hidden="true">#</a> Browser Basics</h2><p><a name="creating-browsers"></a></p><h3 id="creating-browsers" tabindex="-1"><a class="header-anchor" href="#creating-browsers" aria-hidden="true">#</a> Creating Browsers</h3><p>To get started, let&#39;s write a test that verifies we can log into our application. After generating a test, we can modify it to navigate to the login page, enter some credentials, and click the &quot;Login&quot; button. To create a browser instance, you may call the <code>browse</code> method from within your Dusk test:</p><pre><code>&lt;?php

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
     * A basic browser test example.
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
</code></pre><p>As you can see in the example above, the <code>browse</code> method accepts a closure. A browser instance will automatically be passed to this closure by Dusk and is the main object used to interact with and make assertions against your application.</p><p><a name="creating-multiple-browsers"></a></p><h4 id="creating-multiple-browsers" tabindex="-1"><a class="header-anchor" href="#creating-multiple-browsers" aria-hidden="true">#</a> Creating Multiple Browsers</h4><p>Sometimes you may need multiple browsers in order to properly carry out a test. For example, multiple browsers may be needed to test a chat screen that interacts with websockets. To create multiple browsers, simply add more browser arguments to the signature of the closure given to the <code>browse</code> method:</p><pre><code>$this-&gt;browse(function (Browser $first, Browser $second) {
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
</code></pre><p><a name="navigation"></a></p><h3 id="navigation" tabindex="-1"><a class="header-anchor" href="#navigation" aria-hidden="true">#</a> Navigation</h3><p>The <code>visit</code> method may be used to navigate to a given URI within your application:</p><pre><code>$browser-&gt;visit(&#39;/login&#39;);
</code></pre><p>You may use the <code>visitRoute</code> method to navigate to a <a href="./routing#named-routes">named route</a>:</p><pre><code>$browser-&gt;visitRoute(&#39;login&#39;);
</code></pre><p>You may navigate &quot;back&quot; and &quot;forward&quot; using the <code>back</code> and <code>forward</code> methods:</p><pre><code>$browser-&gt;back();

$browser-&gt;forward();
</code></pre><p>You may use the <code>refresh</code> method to refresh the page:</p><pre><code>$browser-&gt;refresh();
</code></pre><p><a name="resizing-browser-windows"></a></p><h3 id="resizing-browser-windows" tabindex="-1"><a class="header-anchor" href="#resizing-browser-windows" aria-hidden="true">#</a> Resizing Browser Windows</h3><p>You may use the <code>resize</code> method to adjust the size of the browser window:</p><pre><code>$browser-&gt;resize(1920, 1080);
</code></pre><p>The <code>maximize</code> method may be used to maximize the browser window:</p><pre><code>$browser-&gt;maximize();
</code></pre><p>The <code>fitContent</code> method will resize the browser window to match the size of its content:</p><pre><code>$browser-&gt;fitContent();
</code></pre><p>When a test fails, Dusk will automatically resize the browser to fit the content prior to taking a screenshot. You may disable this feature by calling the <code>disableFitOnFailure</code> method within your test:</p><pre><code>$browser-&gt;disableFitOnFailure();
</code></pre><p>You may use the <code>move</code> method to move the browser window to a different position on your screen:</p><pre><code>$browser-&gt;move($x = 100, $y = 100);
</code></pre><p><a name="browser-macros"></a></p><h3 id="browser-macros" tabindex="-1"><a class="header-anchor" href="#browser-macros" aria-hidden="true">#</a> Browser Macros</h3><p>If you would like to define a custom browser method that you can re-use in a variety of your tests, you may use the <code>macro</code> method on the <code>Browser</code> class. Typically, you should call this method from a <a href="./providers">service provider&#39;s</a> <code>boot</code> method:</p><pre><code>&lt;?php

namespace App\\Providers;

use Illuminate\\Support\\ServiceProvider;
use Laravel\\Dusk\\Browser;

class DuskServiceProvider extends ServiceProvider
{
    /**
     * Register Dusk&#39;s browser macros.
     */
    public function boot(): void
    {
        Browser::macro(&#39;scrollToElement&#39;, function (string $element = null) {
            $this-&gt;script(&quot;$(&#39;html, body&#39;).animate({ scrollTop: $(&#39;$element&#39;).offset().top }, 0);&quot;);

            return $this;
        });
    }
}
</code></pre><p>The <code>macro</code> function accepts a name as its first argument, and a closure as its second. The macro&#39;s closure will be executed when calling the macro as a method on a <code>Browser</code> instance:</p><pre><code>$this-&gt;browse(function (Browser $browser) use ($user) {
    $browser-&gt;visit(&#39;/pay&#39;)
            -&gt;scrollToElement(&#39;#credit-card-details&#39;)
            -&gt;assertSee(&#39;Enter Credit Card Details&#39;);
});
</code></pre><p><a name="authentication"></a></p><h3 id="authentication" tabindex="-1"><a class="header-anchor" href="#authentication" aria-hidden="true">#</a> Authentication</h3><p>Often, you will be testing pages that require authentication. You can use Dusk&#39;s <code>loginAs</code> method in order to avoid interacting with your application&#39;s login screen during every test. The <code>loginAs</code> method accepts a primary key associated with your authenticatable model or an authenticatable model instance:</p><pre><code>use App\\Models\\User;
use Laravel\\Dusk\\Browser;

$this-&gt;browse(function (Browser $browser) {
    $browser-&gt;loginAs(User::find(1))
          -&gt;visit(&#39;/home&#39;);
});
</code></pre><blockquote><p><strong>Warning</strong> After using the <code>loginAs</code> method, the user session will be maintained for all tests within the file.</p></blockquote><p><a name="cookies"></a></p><h3 id="cookies" tabindex="-1"><a class="header-anchor" href="#cookies" aria-hidden="true">#</a> Cookies</h3><p>You may use the <code>cookie</code> method to get or set an encrypted cookie&#39;s value. By default, all of the cookies created by Laravel are encrypted:</p><pre><code>$browser-&gt;cookie(&#39;name&#39;);

$browser-&gt;cookie(&#39;name&#39;, &#39;Taylor&#39;);
</code></pre><p>You may use the <code>plainCookie</code> method to get or set an unencrypted cookie&#39;s value:</p><pre><code>$browser-&gt;plainCookie(&#39;name&#39;);

$browser-&gt;plainCookie(&#39;name&#39;, &#39;Taylor&#39;);
</code></pre><p>You may use the <code>deleteCookie</code> method to delete the given cookie:</p><pre><code>$browser-&gt;deleteCookie(&#39;name&#39;);
</code></pre><p><a name="executing-javascript"></a></p><h3 id="executing-javascript" tabindex="-1"><a class="header-anchor" href="#executing-javascript" aria-hidden="true">#</a> Executing JavaScript</h3><p>You may use the <code>script</code> method to execute arbitrary JavaScript statements within the browser:</p><pre><code>$browser-&gt;script(&#39;document.documentElement.scrollTop = 0&#39;);

$browser-&gt;script([
    &#39;document.body.scrollTop = 0&#39;,
    &#39;document.documentElement.scrollTop = 0&#39;,
]);

$output = $browser-&gt;script(&#39;return window.location.pathname&#39;);
</code></pre><p><a name="taking-a-screenshot"></a></p><h3 id="taking-a-screenshot" tabindex="-1"><a class="header-anchor" href="#taking-a-screenshot" aria-hidden="true">#</a> Taking A Screenshot</h3><p>You may use the <code>screenshot</code> method to take a screenshot and store it with the given filename. All screenshots will be stored within the <code>tests/Browser/screenshots</code> directory:</p><pre><code>$browser-&gt;screenshot(&#39;filename&#39;);
</code></pre><p>The <code>responsiveScreenshots</code> method may be used to take a series of screenshots at various breakpoints:</p><pre><code>$browser-&gt;responsiveScreenshots(&#39;filename&#39;);
</code></pre><p><a name="storing-console-output-to-disk"></a></p><h3 id="storing-console-output-to-disk" tabindex="-1"><a class="header-anchor" href="#storing-console-output-to-disk" aria-hidden="true">#</a> Storing Console Output To Disk</h3><p>You may use the <code>storeConsoleLog</code> method to write the current browser&#39;s console output to disk with the given filename. Console output will be stored within the <code>tests/Browser/console</code> directory:</p><pre><code>$browser-&gt;storeConsoleLog(&#39;filename&#39;);
</code></pre><p><a name="storing-page-source-to-disk"></a></p><h3 id="storing-page-source-to-disk" tabindex="-1"><a class="header-anchor" href="#storing-page-source-to-disk" aria-hidden="true">#</a> Storing Page Source To Disk</h3><p>You may use the <code>storeSource</code> method to write the current page&#39;s source to disk with the given filename. The page source will be stored within the <code>tests/Browser/source</code> directory:</p><pre><code>$browser-&gt;storeSource(&#39;filename&#39;);
</code></pre><p><a name="interacting-with-elements"></a></p><h2 id="interacting-with-elements" tabindex="-1"><a class="header-anchor" href="#interacting-with-elements" aria-hidden="true">#</a> Interacting With Elements</h2><p><a name="dusk-selectors"></a></p><h3 id="dusk-selectors" tabindex="-1"><a class="header-anchor" href="#dusk-selectors" aria-hidden="true">#</a> Dusk Selectors</h3><p>Choosing good CSS selectors for interacting with elements is one of the hardest parts of writing Dusk tests. Over time, frontend changes can cause CSS selectors like the following to break your tests:</p><pre><code>// HTML...

&lt;button&gt;Login&lt;/button&gt;

// Test...

$browser-&gt;click(&#39;.login-page .container div &gt; button&#39;);
</code></pre><p>Dusk selectors allow you to focus on writing effective tests rather than remembering CSS selectors. To define a selector, add a <code>dusk</code> attribute to your HTML element. Then, when interacting with a Dusk browser, prefix the selector with <code>@</code> to manipulate the attached element within your test:</p><pre><code>// HTML...

&lt;button dusk=&quot;login-button&quot;&gt;Login&lt;/button&gt;

// Test...

$browser-&gt;click(&#39;@login-button&#39;);
</code></pre><p>If desired, you may customize the HTML attribute that the Dusk selector utilizes via the <code>selectorHtmlAttribute</code> method. Typically, this method should be called from the <code>boot</code> method of your application&#39;s <code>AppServiceProvider</code>:</p><pre><code>use Laravel\\Dusk\\Dusk;

Dusk::selectorHtmlAttribute(&#39;data-dusk&#39;);
</code></pre><p><a name="text-values-and-attributes"></a></p><h3 id="text-values-attributes" tabindex="-1"><a class="header-anchor" href="#text-values-attributes" aria-hidden="true">#</a> Text, Values, &amp; Attributes</h3><p><a name="retrieving-setting-values"></a></p><h4 id="retrieving-setting-values" tabindex="-1"><a class="header-anchor" href="#retrieving-setting-values" aria-hidden="true">#</a> Retrieving &amp; Setting Values</h4><p>Dusk provides several methods for interacting with the current value, display text, and attributes of elements on the page. For example, to get the &quot;value&quot; of an element that matches a given CSS or Dusk selector, use the <code>value</code> method:</p><pre><code>// Retrieve the value...
$value = $browser-&gt;value(&#39;selector&#39;);

// Set the value...
$browser-&gt;value(&#39;selector&#39;, &#39;value&#39;);
</code></pre><p>You may use the <code>inputValue</code> method to get the &quot;value&quot; of an input element that has a given field name:</p><pre><code>$value = $browser-&gt;inputValue(&#39;field&#39;);
</code></pre><p><a name="retrieving-text"></a></p><h4 id="retrieving-text" tabindex="-1"><a class="header-anchor" href="#retrieving-text" aria-hidden="true">#</a> Retrieving Text</h4><p>The <code>text</code> method may be used to retrieve the display text of an element that matches the given selector:</p><pre><code>$text = $browser-&gt;text(&#39;selector&#39;);
</code></pre><p><a name="retrieving-attributes"></a></p><h4 id="retrieving-attributes" tabindex="-1"><a class="header-anchor" href="#retrieving-attributes" aria-hidden="true">#</a> Retrieving Attributes</h4><p>Finally, the <code>attribute</code> method may be used to retrieve the value of an attribute of an element matching the given selector:</p><pre><code>$attribute = $browser-&gt;attribute(&#39;selector&#39;, &#39;value&#39;);
</code></pre><p><a name="interacting-with-forms"></a></p><h3 id="interacting-with-forms" tabindex="-1"><a class="header-anchor" href="#interacting-with-forms" aria-hidden="true">#</a> Interacting With Forms</h3><p><a name="typing-values"></a></p><h4 id="typing-values" tabindex="-1"><a class="header-anchor" href="#typing-values" aria-hidden="true">#</a> Typing Values</h4><p>Dusk provides a variety of methods for interacting with forms and input elements. First, let&#39;s take a look at an example of typing text into an input field:</p><pre><code>$browser-&gt;type(&#39;email&#39;, &#39;taylor@laravel.com&#39;);
</code></pre><p>Note that, although the method accepts one if necessary, we are not required to pass a CSS selector into the <code>type</code> method. If a CSS selector is not provided, Dusk will search for an <code>input</code> or <code>textarea</code> field with the given <code>name</code> attribute.</p><p>To append text to a field without clearing its content, you may use the <code>append</code> method:</p><pre><code>$browser-&gt;type(&#39;tags&#39;, &#39;foo&#39;)
        -&gt;append(&#39;tags&#39;, &#39;, bar, baz&#39;);
</code></pre><p>You may clear the value of an input using the <code>clear</code> method:</p><pre><code>$browser-&gt;clear(&#39;email&#39;);
</code></pre><p>You can instruct Dusk to type slowly using the <code>typeSlowly</code> method. By default, Dusk will pause for 100 milliseconds between key presses. To customize the amount of time between key presses, you may pass the appropriate number of milliseconds as the third argument to the method:</p><pre><code>$browser-&gt;typeSlowly(&#39;mobile&#39;, &#39;+1 (202) 555-5555&#39;);

$browser-&gt;typeSlowly(&#39;mobile&#39;, &#39;+1 (202) 555-5555&#39;, 300);
</code></pre><p>You may use the <code>appendSlowly</code> method to append text slowly:</p><pre><code>$browser-&gt;type(&#39;tags&#39;, &#39;foo&#39;)
        -&gt;appendSlowly(&#39;tags&#39;, &#39;, bar, baz&#39;);
</code></pre><p><a name="dropdowns"></a></p><h4 id="dropdowns" tabindex="-1"><a class="header-anchor" href="#dropdowns" aria-hidden="true">#</a> Dropdowns</h4><p>To select a value available on a <code>select</code> element, you may use the <code>select</code> method. Like the <code>type</code> method, the <code>select</code> method does not require a full CSS selector. When passing a value to the <code>select</code> method, you should pass the underlying option value instead of the display text:</p><pre><code>$browser-&gt;select(&#39;size&#39;, &#39;Large&#39;);
</code></pre><p>You may select a random option by omitting the second argument:</p><pre><code>$browser-&gt;select(&#39;size&#39;);
</code></pre><p>By providing an array as the second argument to the <code>select</code> method, you can instruct the method to select multiple options:</p><pre><code>$browser-&gt;select(&#39;categories&#39;, [&#39;Art&#39;, &#39;Music&#39;]);
</code></pre><p><a name="checkboxes"></a></p><h4 id="checkboxes" tabindex="-1"><a class="header-anchor" href="#checkboxes" aria-hidden="true">#</a> Checkboxes</h4><p>To &quot;check&quot; a checkbox input, you may use the <code>check</code> method. Like many other input related methods, a full CSS selector is not required. If a CSS selector match can&#39;t be found, Dusk will search for a checkbox with a matching <code>name</code> attribute:</p><pre><code>$browser-&gt;check(&#39;terms&#39;);
</code></pre><p>The <code>uncheck</code> method may be used to &quot;uncheck&quot; a checkbox input:</p><pre><code>$browser-&gt;uncheck(&#39;terms&#39;);
</code></pre><p><a name="radio-buttons"></a></p><h4 id="radio-buttons" tabindex="-1"><a class="header-anchor" href="#radio-buttons" aria-hidden="true">#</a> Radio Buttons</h4><p>To &quot;select&quot; a <code>radio</code> input option, you may use the <code>radio</code> method. Like many other input related methods, a full CSS selector is not required. If a CSS selector match can&#39;t be found, Dusk will search for a <code>radio</code> input with matching <code>name</code> and <code>value</code> attributes:</p><pre><code>$browser-&gt;radio(&#39;size&#39;, &#39;large&#39;);
</code></pre><p><a name="attaching-files"></a></p><h3 id="attaching-files" tabindex="-1"><a class="header-anchor" href="#attaching-files" aria-hidden="true">#</a> Attaching Files</h3><p>The <code>attach</code> method may be used to attach a file to a <code>file</code> input element. Like many other input related methods, a full CSS selector is not required. If a CSS selector match can&#39;t be found, Dusk will search for a <code>file</code> input with a matching <code>name</code> attribute:</p><pre><code>$browser-&gt;attach(&#39;photo&#39;, __DIR__.&#39;/photos/mountains.png&#39;);
</code></pre><blockquote><p><strong>Warning</strong> The attach function requires the <code>Zip</code> PHP extension to be installed and enabled on your server.</p></blockquote><p><a name="pressing-buttons"></a></p><h3 id="pressing-buttons" tabindex="-1"><a class="header-anchor" href="#pressing-buttons" aria-hidden="true">#</a> Pressing Buttons</h3><p>The <code>press</code> method may be used to click a button element on the page. The argument given to the <code>press</code> method may be either the display text of the button or a CSS / Dusk selector:</p><pre><code>$browser-&gt;press(&#39;Login&#39;);
</code></pre><p>When submitting forms, many applications disable the form&#39;s submission button after it is pressed and then re-enable the button when the form submission&#39;s HTTP request is complete. To press a button and wait for the button to be re-enabled, you may use the <code>pressAndWaitFor</code> method:</p><pre><code>// Press the button and wait a maximum of 5 seconds for it to be enabled...
$browser-&gt;pressAndWaitFor(&#39;Save&#39;);

// Press the button and wait a maximum of 1 second for it to be enabled...
$browser-&gt;pressAndWaitFor(&#39;Save&#39;, 1);
</code></pre><p><a name="clicking-links"></a></p><h3 id="clicking-links" tabindex="-1"><a class="header-anchor" href="#clicking-links" aria-hidden="true">#</a> Clicking Links</h3><p>To click a link, you may use the <code>clickLink</code> method on the browser instance. The <code>clickLink</code> method will click the link that has the given display text:</p><pre><code>$browser-&gt;clickLink($linkText);
</code></pre><p>You may use the <code>seeLink</code> method to determine if a link with the given display text is visible on the page:</p><pre><code>if ($browser-&gt;seeLink($linkText)) {
    // ...
}
</code></pre><blockquote><p><strong>Warning</strong> These methods interact with jQuery. If jQuery is not available on the page, Dusk will automatically inject it into the page so it is available for the test&#39;s duration.</p></blockquote><p><a name="using-the-keyboard"></a></p><h3 id="using-the-keyboard" tabindex="-1"><a class="header-anchor" href="#using-the-keyboard" aria-hidden="true">#</a> Using The Keyboard</h3><p>The <code>keys</code> method allows you to provide more complex input sequences to a given element than normally allowed by the <code>type</code> method. For example, you may instruct Dusk to hold modifier keys while entering values. In this example, the <code>shift</code> key will be held while <code>taylor</code> is entered into the element matching the given selector. After <code>taylor</code> is typed, <code>swift</code> will be typed without any modifier keys:</p><pre><code>$browser-&gt;keys(&#39;selector&#39;, [&#39;{shift}&#39;, &#39;taylor&#39;], &#39;swift&#39;);
</code></pre><p>Another valuable use case for the <code>keys</code> method is sending a &quot;keyboard shortcut&quot; combination to the primary CSS selector for your application:</p><pre><code>$browser-&gt;keys(&#39;.app&#39;, [&#39;{command}&#39;, &#39;j&#39;]);
</code></pre>`,165),x=e("strong",null,"Note",-1),D=e("code",null,"{command}",-1),S=e("code",null,"{}",-1),T=e("code",null,"Facebook\\WebDriver\\WebDriverKeys",-1),A={href:"https://github.com/php-webdriver/php-webdriver/blob/master/lib/WebDriverKeys.php",target:"_blank",rel:"noopener noreferrer"},C=n(`<p><a name="fluent-keyboard-interactions"></a></p><h4 id="fluent-keyboard-interactions" tabindex="-1"><a class="header-anchor" href="#fluent-keyboard-interactions" aria-hidden="true">#</a> Fluent Keyboard Interactions</h4><p>Dusk also provides a <code>withKeyboard</code> method, allowing you to fluently perform complex keyboard interactions via the <code>Laravel\\Dusk\\Keyboard</code> class. The <code>Keyboard</code> class provides <code>press</code>, <code>release</code>, <code>type</code>, and <code>pause</code> methods:</p><pre><code>use Laravel\\Dusk\\Keyboard;

$browser-&gt;withKeyboard(function (Keyboard $keyboard) {
    $keyboard-&gt;press(&#39;c&#39;)
        -&gt;pause(1000)
        -&gt;release(&#39;c&#39;)
        -&gt;type([&#39;c&#39;, &#39;e&#39;, &#39;o&#39;]);
});
</code></pre><p><a name="keyboard-macros"></a></p><h4 id="keyboard-macros" tabindex="-1"><a class="header-anchor" href="#keyboard-macros" aria-hidden="true">#</a> Keyboard Macros</h4><p>If you would like to define custom keyboard interactions that you can easily re-use throughout your test suite, you may use the <code>macro</code> method provided by the <code>Keyboard</code> class. Typically, you should call this method from a <a href="./providers">service provider&#39;s</a> <code>boot</code> method:</p><pre><code>&lt;?php

namespace App\\Providers;

use Facebook\\WebDriver\\WebDriverKeys;
use Illuminate\\Support\\ServiceProvider;
use Laravel\\Dusk\\Keyboard;
use Laravel\\Dusk\\OperatingSystem;

class DuskServiceProvider extends ServiceProvider
{
    /**
     * Register Dusk&#39;s browser macros.
     */
    public function boot(): void
    {
        Keyboard::macro(&#39;copy&#39;, function (string $element = null) {
            $this-&gt;type([
                OperatingSystem::onMac() ? WebDriverKeys::META : WebDriverKeys::CONTROL, &#39;c&#39;,
            ]);

            return $this;
        });

        Keyboard::macro(&#39;paste&#39;, function (string $element = null) {
            $this-&gt;type([
                OperatingSystem::onMac() ? WebDriverKeys::META : WebDriverKeys::CONTROL, &#39;v&#39;,
            ]);

            return $this;
        });
    }
}
</code></pre><p>The <code>macro</code> function accepts a name as its first argument and a closure as its second. The macro&#39;s closure will be executed when calling the macro as a method on a <code>Keyboard</code> instance:</p><pre><code>$browser-&gt;click(&#39;@textarea&#39;)
    -&gt;withKeyboard(fn (Keyboard $keyboard) =&gt; $keyboard-&gt;copy())
    -&gt;click(&#39;@another-textarea&#39;)
    -&gt;withKeyboard(fn (Keyboard $keyboard) =&gt; $keyboard-&gt;paste());
</code></pre><p><a name="using-the-mouse"></a></p><h3 id="using-the-mouse" tabindex="-1"><a class="header-anchor" href="#using-the-mouse" aria-hidden="true">#</a> Using The Mouse</h3><p><a name="clicking-on-elements"></a></p><h4 id="clicking-on-elements" tabindex="-1"><a class="header-anchor" href="#clicking-on-elements" aria-hidden="true">#</a> Clicking On Elements</h4><p>The <code>click</code> method may be used to click on an element matching the given CSS or Dusk selector:</p><pre><code>$browser-&gt;click(&#39;.selector&#39;);
</code></pre><p>The <code>clickAtXPath</code> method may be used to click on an element matching the given XPath expression:</p><pre><code>$browser-&gt;clickAtXPath(&#39;//div[@class = &quot;selector&quot;]&#39;);
</code></pre><p>The <code>clickAtPoint</code> method may be used to click on the topmost element at a given pair of coordinates relative to the viewable area of the browser:</p><pre><code>$browser-&gt;clickAtPoint($x = 0, $y = 0);
</code></pre><p>The <code>doubleClick</code> method may be used to simulate the double click of a mouse:</p><pre><code>$browser-&gt;doubleClick();
</code></pre><p>The <code>rightClick</code> method may be used to simulate the right click of a mouse:</p><pre><code>$browser-&gt;rightClick();

$browser-&gt;rightClick(&#39;.selector&#39;);
</code></pre><p>The <code>clickAndHold</code> method may be used to simulate a mouse button being clicked and held down. A subsequent call to the <code>releaseMouse</code> method will undo this behavior and release the mouse button:</p><pre><code>$browser-&gt;clickAndHold()
        -&gt;pause(1000)
        -&gt;releaseMouse();
</code></pre><p>The <code>controlClick</code> method may be used to simulate the <code>ctrl+click</code> event within the browser:</p><pre><code>$browser-&gt;controlClick();
</code></pre><p><a name="mouseover"></a></p><h4 id="mouseover" tabindex="-1"><a class="header-anchor" href="#mouseover" aria-hidden="true">#</a> Mouseover</h4><p>The <code>mouseover</code> method may be used when you need to move the mouse over an element matching the given CSS or Dusk selector:</p><pre><code>$browser-&gt;mouseover(&#39;.selector&#39;);
</code></pre><p><a name="drag-drop"></a></p><h4 id="drag-drop" tabindex="-1"><a class="header-anchor" href="#drag-drop" aria-hidden="true">#</a> Drag &amp; Drop</h4><p>The <code>drag</code> method may be used to drag an element matching the given selector to another element:</p><pre><code>$browser-&gt;drag(&#39;.from-selector&#39;, &#39;.to-selector&#39;);
</code></pre><p>Or, you may drag an element in a single direction:</p><pre><code>$browser-&gt;dragLeft(&#39;.selector&#39;, $pixels = 10);
$browser-&gt;dragRight(&#39;.selector&#39;, $pixels = 10);
$browser-&gt;dragUp(&#39;.selector&#39;, $pixels = 10);
$browser-&gt;dragDown(&#39;.selector&#39;, $pixels = 10);
</code></pre><p>Finally, you may drag an element by a given offset:</p><pre><code>$browser-&gt;dragOffset(&#39;.selector&#39;, $x = 10, $y = 10);
</code></pre><p><a name="javascript-dialogs"></a></p><h3 id="javascript-dialogs" tabindex="-1"><a class="header-anchor" href="#javascript-dialogs" aria-hidden="true">#</a> JavaScript Dialogs</h3><p>Dusk provides various methods to interact with JavaScript Dialogs. For example, you may use the <code>waitForDialog</code> method to wait for a JavaScript dialog to appear. This method accepts an optional argument indicating how many seconds to wait for the dialog to appear:</p><pre><code>$browser-&gt;waitForDialog($seconds = null);
</code></pre><p>The <code>assertDialogOpened</code> method may be used to assert that a dialog has been displayed and contains the given message:</p><pre><code>$browser-&gt;assertDialogOpened(&#39;Dialog message&#39;);
</code></pre><p>If the JavaScript dialog contains a prompt, you may use the <code>typeInDialog</code> method to type a value into the prompt:</p><pre><code>$browser-&gt;typeInDialog(&#39;Hello World&#39;);
</code></pre><p>To close an open JavaScript dialog by clicking the &quot;OK&quot; button, you may invoke the <code>acceptDialog</code> method:</p><pre><code>$browser-&gt;acceptDialog();
</code></pre><p>To close an open JavaScript dialog by clicking the &quot;Cancel&quot; button, you may invoke the <code>dismissDialog</code> method:</p><pre><code>$browser-&gt;dismissDialog();
</code></pre><p><a name="interacting-with-iframes"></a></p><h3 id="interacting-with-inline-frames" tabindex="-1"><a class="header-anchor" href="#interacting-with-inline-frames" aria-hidden="true">#</a> Interacting With Inline Frames</h3><p>If you need to interact with elements within an iframe, you may use the <code>withinFrame</code> method. All element interactions that take place within the closure provided to the <code>withinFrame</code> method will be scoped to the context of the specified iframe:</p><pre><code>$browser-&gt;withinFrame(&#39;#credit-card-details&#39;, function ($browser) {
    $browser-&gt;type(&#39;input[name=&quot;cardnumber&quot;]&#39;, &#39;4242424242424242&#39;)
        -&gt;type(&#39;input[name=&quot;exp-date&quot;]&#39;, &#39;12/24&#39;)
        -&gt;type(&#39;input[name=&quot;cvc&quot;]&#39;, &#39;123&#39;);
    })-&gt;press(&#39;Pay&#39;);
});
</code></pre><p><a name="scoping-selectors"></a></p><h3 id="scoping-selectors" tabindex="-1"><a class="header-anchor" href="#scoping-selectors" aria-hidden="true">#</a> Scoping Selectors</h3><p>Sometimes you may wish to perform several operations while scoping all of the operations within a given selector. For example, you may wish to assert that some text exists only within a table and then click a button within that table. You may use the <code>with</code> method to accomplish this. All operations performed within the closure given to the <code>with</code> method will be scoped to the original selector:</p><pre><code>$browser-&gt;with(&#39;.table&#39;, function (Browser $table) {
    $table-&gt;assertSee(&#39;Hello World&#39;)
          -&gt;clickLink(&#39;Delete&#39;);
});
</code></pre><p>You may occasionally need to execute assertions outside of the current scope. You may use the <code>elsewhere</code> and <code>elsewhereWhenAvailable</code> methods to accomplish this:</p><pre><code> $browser-&gt;with(&#39;.table&#39;, function (Browser $table) {
    // Current scope is \`body .table\`...

    $browser-&gt;elsewhere(&#39;.page-title&#39;, function (Browser $title) {
        // Current scope is \`body .page-title\`...
        $title-&gt;assertSee(&#39;Hello World&#39;);
    });

    $browser-&gt;elsewhereWhenAvailable(&#39;.page-title&#39;, function (Browser $title) {
        // Current scope is \`body .page-title\`...
        $title-&gt;assertSee(&#39;Hello World&#39;);
    });
 });
</code></pre><p><a name="waiting-for-elements"></a></p><h3 id="waiting-for-elements" tabindex="-1"><a class="header-anchor" href="#waiting-for-elements" aria-hidden="true">#</a> Waiting For Elements</h3><p>When testing applications that use JavaScript extensively, it often becomes necessary to &quot;wait&quot; for certain elements or data to be available before proceeding with a test. Dusk makes this a cinch. Using a variety of methods, you may wait for elements to become visible on the page or even wait until a given JavaScript expression evaluates to <code>true</code>.</p><p><a name="waiting"></a></p><h4 id="waiting" tabindex="-1"><a class="header-anchor" href="#waiting" aria-hidden="true">#</a> Waiting</h4><p>If you just need to pause the test for a given number of milliseconds, use the <code>pause</code> method:</p><pre><code>$browser-&gt;pause(1000);
</code></pre><p>If you need to pause the test only if a given condition is <code>true</code>, use the <code>pauseIf</code> method:</p><pre><code>$browser-&gt;pauseIf(App::environment(&#39;production&#39;), 1000);
</code></pre><p>Likewise, if you need to pause the test unless a given condition is <code>true</code>, you may use the <code>pauseUnless</code> method:</p><pre><code>$browser-&gt;pauseUnless(App::environment(&#39;testing&#39;), 1000);
</code></pre><p><a name="waiting-for-selectors"></a></p><h4 id="waiting-for-selectors" tabindex="-1"><a class="header-anchor" href="#waiting-for-selectors" aria-hidden="true">#</a> Waiting For Selectors</h4><p>The <code>waitFor</code> method may be used to pause the execution of the test until the element matching the given CSS or Dusk selector is displayed on the page. By default, this will pause the test for a maximum of five seconds before throwing an exception. If necessary, you may pass a custom timeout threshold as the second argument to the method:</p><pre><code>// Wait a maximum of five seconds for the selector...
$browser-&gt;waitFor(&#39;.selector&#39;);

// Wait a maximum of one second for the selector...
$browser-&gt;waitFor(&#39;.selector&#39;, 1);
</code></pre><p>You may also wait until the element matching the given selector contains the given text:</p><pre><code>// Wait a maximum of five seconds for the selector to contain the given text...
$browser-&gt;waitForTextIn(&#39;.selector&#39;, &#39;Hello World&#39;);

// Wait a maximum of one second for the selector to contain the given text...
$browser-&gt;waitForTextIn(&#39;.selector&#39;, &#39;Hello World&#39;, 1);
</code></pre><p>You may also wait until the element matching the given selector is missing from the page:</p><pre><code>// Wait a maximum of five seconds until the selector is missing...
$browser-&gt;waitUntilMissing(&#39;.selector&#39;);

// Wait a maximum of one second until the selector is missing...
$browser-&gt;waitUntilMissing(&#39;.selector&#39;, 1);
</code></pre><p>Or, you may wait until the element matching the given selector is enabled or disabled:</p><pre><code>// Wait a maximum of five seconds until the selector is enabled...
$browser-&gt;waitUntilEnabled(&#39;.selector&#39;);

// Wait a maximum of one second until the selector is enabled...
$browser-&gt;waitUntilEnabled(&#39;.selector&#39;, 1);

// Wait a maximum of five seconds until the selector is disabled...
$browser-&gt;waitUntilDisabled(&#39;.selector&#39;);

// Wait a maximum of one second until the selector is disabled...
$browser-&gt;waitUntilDisabled(&#39;.selector&#39;, 1);
</code></pre><p><a name="scoping-selectors-when-available"></a></p><h4 id="scoping-selectors-when-available" tabindex="-1"><a class="header-anchor" href="#scoping-selectors-when-available" aria-hidden="true">#</a> Scoping Selectors When Available</h4><p>Occasionally, you may wish to wait for an element to appear that matches a given selector and then interact with the element. For example, you may wish to wait until a modal window is available and then press the &quot;OK&quot; button within the modal. The <code>whenAvailable</code> method may be used to accomplish this. All element operations performed within the given closure will be scoped to the original selector:</p><pre><code>$browser-&gt;whenAvailable(&#39;.modal&#39;, function (Browser $modal) {
    $modal-&gt;assertSee(&#39;Hello World&#39;)
          -&gt;press(&#39;OK&#39;);
});
</code></pre><p><a name="waiting-for-text"></a></p><h4 id="waiting-for-text" tabindex="-1"><a class="header-anchor" href="#waiting-for-text" aria-hidden="true">#</a> Waiting For Text</h4><p>The <code>waitForText</code> method may be used to wait until the given text is displayed on the page:</p><pre><code>// Wait a maximum of five seconds for the text...
$browser-&gt;waitForText(&#39;Hello World&#39;);

// Wait a maximum of one second for the text...
$browser-&gt;waitForText(&#39;Hello World&#39;, 1);
</code></pre><p>You may use the <code>waitUntilMissingText</code> method to wait until the displayed text has been removed from the page:</p><pre><code>// Wait a maximum of five seconds for the text to be removed...
$browser-&gt;waitUntilMissingText(&#39;Hello World&#39;);

// Wait a maximum of one second for the text to be removed...
$browser-&gt;waitUntilMissingText(&#39;Hello World&#39;, 1);
</code></pre><p><a name="waiting-for-links"></a></p><h4 id="waiting-for-links" tabindex="-1"><a class="header-anchor" href="#waiting-for-links" aria-hidden="true">#</a> Waiting For Links</h4><p>The <code>waitForLink</code> method may be used to wait until the given link text is displayed on the page:</p><pre><code>// Wait a maximum of five seconds for the link...
$browser-&gt;waitForLink(&#39;Create&#39;);

// Wait a maximum of one second for the link...
$browser-&gt;waitForLink(&#39;Create&#39;, 1);
</code></pre><p><a name="waiting-for-inputs"></a></p><h4 id="waiting-for-inputs" tabindex="-1"><a class="header-anchor" href="#waiting-for-inputs" aria-hidden="true">#</a> Waiting For Inputs</h4><p>The <code>waitForInput</code> method may be used to wait until the given input field is visible on the page:</p><pre><code>// Wait a maximum of five seconds for the input...
$browser-&gt;waitForInput($field);

// Wait a maximum of one second for the input...
$browser-&gt;waitForInput($field, 1);
</code></pre><p><a name="waiting-on-the-page-location"></a></p><h4 id="waiting-on-the-page-location" tabindex="-1"><a class="header-anchor" href="#waiting-on-the-page-location" aria-hidden="true">#</a> Waiting On The Page Location</h4><p>When making a path assertion such as <code>$browser-&gt;assertPathIs(&#39;/home&#39;)</code>, the assertion can fail if <code>window.location.pathname</code> is being updated asynchronously. You may use the <code>waitForLocation</code> method to wait for the location to be a given value:</p><pre><code>$browser-&gt;waitForLocation(&#39;/secret&#39;);
</code></pre><p>The <code>waitForLocation</code> method can also be used to wait for the current window location to be a fully qualified URL:</p><pre><code>$browser-&gt;waitForLocation(&#39;https://example.com/path&#39;);
</code></pre><p>You may also wait for a <a href="./routing#named-routes">named route&#39;s</a> location:</p><pre><code>$browser-&gt;waitForRoute($routeName, $parameters);
</code></pre><p><a name="waiting-for-page-reloads"></a></p><h4 id="waiting-for-page-reloads" tabindex="-1"><a class="header-anchor" href="#waiting-for-page-reloads" aria-hidden="true">#</a> Waiting For Page Reloads</h4><p>If you need to wait for a page to reload after performing an action, use the <code>waitForReload</code> method:</p><pre><code>use Laravel\\Dusk\\Browser;

$browser-&gt;waitForReload(function (Browser $browser) {
    $browser-&gt;press(&#39;Submit&#39;);
})
-&gt;assertSee(&#39;Success!&#39;);
</code></pre><p>Since the need to wait for the page to reload typically occurs after clicking a button, you may use the <code>clickAndWaitForReload</code> method for convenience:</p><pre><code>$browser-&gt;clickAndWaitForReload(&#39;.selector&#39;)
        -&gt;assertSee(&#39;something&#39;);
</code></pre><p><a name="waiting-on-javascript-expressions"></a></p><h4 id="waiting-on-javascript-expressions" tabindex="-1"><a class="header-anchor" href="#waiting-on-javascript-expressions" aria-hidden="true">#</a> Waiting On JavaScript Expressions</h4><p>Sometimes you may wish to pause the execution of a test until a given JavaScript expression evaluates to <code>true</code>. You may easily accomplish this using the <code>waitUntil</code> method. When passing an expression to this method, you do not need to include the <code>return</code> keyword or an ending semi-colon:</p><pre><code>// Wait a maximum of five seconds for the expression to be true...
$browser-&gt;waitUntil(&#39;App.data.servers.length &gt; 0&#39;);

// Wait a maximum of one second for the expression to be true...
$browser-&gt;waitUntil(&#39;App.data.servers.length &gt; 0&#39;, 1);
</code></pre><p><a name="waiting-on-vue-expressions"></a></p><h4 id="waiting-on-vue-expressions" tabindex="-1"><a class="header-anchor" href="#waiting-on-vue-expressions" aria-hidden="true">#</a> Waiting On Vue Expressions</h4>`,121),I=e("code",null,"waitUntilVue",-1),_=e("code",null,"waitUntilVueIsNot",-1),q={href:"https://vuejs.org",target:"_blank",rel:"noopener noreferrer"},P=n(`<pre><code>// Wait until the component attribute contains the given value...
$browser-&gt;waitUntilVue(&#39;user.name&#39;, &#39;Taylor&#39;, &#39;@user&#39;);

// Wait until the component attribute doesn&#39;t contain the given value...
$browser-&gt;waitUntilVueIsNot(&#39;user.name&#39;, null, &#39;@user&#39;);
</code></pre><p><a name="waiting-for-javascript-events"></a></p><h4 id="waiting-for-javascript-events" tabindex="-1"><a class="header-anchor" href="#waiting-for-javascript-events" aria-hidden="true">#</a> Waiting For JavaScript Events</h4><p>The <code>waitForEvent</code> method can be used to pause the execution of a test until a JavaScript event occurs:</p><pre><code>$browser-&gt;waitForEvent(&#39;load&#39;);
</code></pre><p>The event listener is attached to the current scope, which is the <code>body</code> element by default. When using a scoped selector, the event listener will be attached to the matching element:</p><pre><code>$browser-&gt;with(&#39;iframe&#39;, function (Browser $iframe) {
    // Wait for the iframe&#39;s load event...
    $iframe-&gt;waitForEvent(&#39;load&#39;);
});
</code></pre><p>You may also provide a selector as the second argument to the <code>waitForEvent</code> method to attach the event listener to a specific element:</p><pre><code>$browser-&gt;waitForEvent(&#39;load&#39;, &#39;.selector&#39;);
</code></pre><p>You may also wait for events on the <code>document</code> and <code>window</code> objects:</p><pre><code>// Wait until the document is scrolled...
$browser-&gt;waitForEvent(&#39;scroll&#39;, &#39;document&#39;);

// Wait a maximum of five seconds until the window is resized...
$browser-&gt;waitForEvent(&#39;resize&#39;, &#39;window&#39;, 5);
</code></pre><p><a name="waiting-with-a-callback"></a></p><h4 id="waiting-with-a-callback" tabindex="-1"><a class="header-anchor" href="#waiting-with-a-callback" aria-hidden="true">#</a> Waiting With A Callback</h4><p>Many of the &quot;wait&quot; methods in Dusk rely on the underlying <code>waitUsing</code> method. You may use this method directly to wait for a given closure to return <code>true</code>. The <code>waitUsing</code> method accepts the maximum number of seconds to wait, the interval at which the closure should be evaluated, the closure, and an optional failure message:</p><pre><code>$browser-&gt;waitUsing(10, 1, function () use ($something) {
    return $something-&gt;isReady();
}, &quot;Something wasn&#39;t ready in time.&quot;);
</code></pre><p><a name="scrolling-an-element-into-view"></a></p><h3 id="scrolling-an-element-into-view" tabindex="-1"><a class="header-anchor" href="#scrolling-an-element-into-view" aria-hidden="true">#</a> Scrolling An Element Into View</h3><p>Sometimes you may not be able to click on an element because it is outside of the viewable area of the browser. The <code>scrollIntoView</code> method will scroll the browser window until the element at the given selector is within the view:</p><pre><code>$browser-&gt;scrollIntoView(&#39;.selector&#39;)
        -&gt;click(&#39;.selector&#39;);
</code></pre><p><a name="available-assertions"></a></p><h2 id="available-assertions" tabindex="-1"><a class="header-anchor" href="#available-assertions" aria-hidden="true">#</a> Available Assertions</h2><p>Dusk provides a variety of assertions that you may make against your application. All of the available assertions are documented in the list below:</p>`,22),W=e("div",{class:"collection-method-list",markdown:"1"},[e("p",null,[e("a",{href:"#assert-title"},"assertTitle"),e("a",{href:"#assert-title-contains"},"assertTitleContains"),e("a",{href:"#assert-url-is"},"assertUrlIs"),e("a",{href:"#assert-scheme-is"},"assertSchemeIs"),e("a",{href:"#assert-scheme-is-not"},"assertSchemeIsNot"),e("a",{href:"#assert-host-is"},"assertHostIs"),e("a",{href:"#assert-host-is-not"},"assertHostIsNot"),e("a",{href:"#assert-port-is"},"assertPortIs"),e("a",{href:"#assert-port-is-not"},"assertPortIsNot"),e("a",{href:"#assert-path-begins-with"},"assertPathBeginsWith"),e("a",{href:"#assert-path-is"},"assertPathIs"),e("a",{href:"#assert-path-is-not"},"assertPathIsNot"),e("a",{href:"#assert-route-is"},"assertRouteIs"),e("a",{href:"#assert-query-string-has"},"assertQueryStringHas"),e("a",{href:"#assert-query-string-missing"},"assertQueryStringMissing"),e("a",{href:"#assert-fragment-is"},"assertFragmentIs"),e("a",{href:"#assert-fragment-begins-with"},"assertFragmentBeginsWith"),e("a",{href:"#assert-fragment-is-not"},"assertFragmentIsNot"),e("a",{href:"#assert-has-cookie"},"assertHasCookie"),e("a",{href:"#assert-has-plain-cookie"},"assertHasPlainCookie"),e("a",{href:"#assert-cookie-missing"},"assertCookieMissing"),e("a",{href:"#assert-plain-cookie-missing"},"assertPlainCookieMissing"),e("a",{href:"#assert-cookie-value"},"assertCookieValue"),e("a",{href:"#assert-plain-cookie-value"},"assertPlainCookieValue"),e("a",{href:"#assert-see"},"assertSee"),e("a",{href:"#assert-dont-see"},"assertDontSee"),e("a",{href:"#assert-see-in"},"assertSeeIn"),e("a",{href:"#assert-dont-see-in"},"assertDontSeeIn"),e("a",{href:"#assert-see-anything-in"},"assertSeeAnythingIn"),e("a",{href:"#assert-see-nothing-in"},"assertSeeNothingIn"),e("a",{href:"#assert-script"},"assertScript"),e("a",{href:"#assert-source-has"},"assertSourceHas"),e("a",{href:"#assert-source-missing"},"assertSourceMissing"),e("a",{href:"#assert-see-link"},"assertSeeLink"),e("a",{href:"#assert-dont-see-link"},"assertDontSeeLink"),e("a",{href:"#assert-input-value"},"assertInputValue"),e("a",{href:"#assert-input-value-is-not"},"assertInputValueIsNot"),e("a",{href:"#assert-checked"},"assertChecked"),e("a",{href:"#assert-not-checked"},"assertNotChecked"),e("a",{href:"#assert-indeterminate"},"assertIndeterminate"),e("a",{href:"#assert-radio-selected"},"assertRadioSelected"),e("a",{href:"#assert-radio-not-selected"},"assertRadioNotSelected"),e("a",{href:"#assert-selected"},"assertSelected"),e("a",{href:"#assert-not-selected"},"assertNotSelected"),e("a",{href:"#assert-select-has-options"},"assertSelectHasOptions"),e("a",{href:"#assert-select-missing-options"},"assertSelectMissingOptions"),e("a",{href:"#assert-select-has-option"},"assertSelectHasOption"),e("a",{href:"#assert-select-missing-option"},"assertSelectMissingOption"),e("a",{href:"#assert-value"},"assertValue"),e("a",{href:"#assert-value-is-not"},"assertValueIsNot"),e("a",{href:"#assert-attribute"},"assertAttribute"),e("a",{href:"#assert-attribute-contains"},"assertAttributeContains"),e("a",{href:"#assert-aria-attribute"},"assertAriaAttribute"),e("a",{href:"#assert-data-attribute"},"assertDataAttribute"),e("a",{href:"#assert-visible"},"assertVisible"),e("a",{href:"#assert-present"},"assertPresent"),e("a",{href:"#assert-not-present"},"assertNotPresent"),e("a",{href:"#assert-missing"},"assertMissing"),e("a",{href:"#assert-input-present"},"assertInputPresent"),e("a",{href:"#assert-input-missing"},"assertInputMissing"),e("a",{href:"#assert-dialog-opened"},"assertDialogOpened"),e("a",{href:"#assert-enabled"},"assertEnabled"),e("a",{href:"#assert-disabled"},"assertDisabled"),e("a",{href:"#assert-button-enabled"},"assertButtonEnabled"),e("a",{href:"#assert-button-disabled"},"assertButtonDisabled"),e("a",{href:"#assert-focused"},"assertFocused"),e("a",{href:"#assert-not-focused"},"assertNotFocused"),e("a",{href:"#assert-authenticated"},"assertAuthenticated"),e("a",{href:"#assert-guest"},"assertGuest"),e("a",{href:"#assert-authenticated-as"},"assertAuthenticatedAs"),e("a",{href:"#assert-vue"},"assertVue"),e("a",{href:"#assert-vue-is-not"},"assertVueIsNot"),e("a",{href:"#assert-vue-contains"},"assertVueContains"),e("a",{href:"#assert-vue-does-not-contain"},"assertVueDoesNotContain")])],-1),L=n(`<p><a name="assert-title"></a></p><h4 id="asserttitle" tabindex="-1"><a class="header-anchor" href="#asserttitle" aria-hidden="true">#</a> assertTitle</h4><p>Assert that the page title matches the given text:</p><pre><code>$browser-&gt;assertTitle($title);
</code></pre><p><a name="assert-title-contains"></a></p><h4 id="asserttitlecontains" tabindex="-1"><a class="header-anchor" href="#asserttitlecontains" aria-hidden="true">#</a> assertTitleContains</h4><p>Assert that the page title contains the given text:</p><pre><code>$browser-&gt;assertTitleContains($title);
</code></pre><p><a name="assert-url-is"></a></p><h4 id="asserturlis" tabindex="-1"><a class="header-anchor" href="#asserturlis" aria-hidden="true">#</a> assertUrlIs</h4><p>Assert that the current URL (without the query string) matches the given string:</p><pre><code>$browser-&gt;assertUrlIs($url);
</code></pre><p><a name="assert-scheme-is"></a></p><h4 id="assertschemeis" tabindex="-1"><a class="header-anchor" href="#assertschemeis" aria-hidden="true">#</a> assertSchemeIs</h4><p>Assert that the current URL scheme matches the given scheme:</p><pre><code>$browser-&gt;assertSchemeIs($scheme);
</code></pre><p><a name="assert-scheme-is-not"></a></p><h4 id="assertschemeisnot" tabindex="-1"><a class="header-anchor" href="#assertschemeisnot" aria-hidden="true">#</a> assertSchemeIsNot</h4><p>Assert that the current URL scheme does not match the given scheme:</p><pre><code>$browser-&gt;assertSchemeIsNot($scheme);
</code></pre><p><a name="assert-host-is"></a></p><h4 id="asserthostis" tabindex="-1"><a class="header-anchor" href="#asserthostis" aria-hidden="true">#</a> assertHostIs</h4><p>Assert that the current URL host matches the given host:</p><pre><code>$browser-&gt;assertHostIs($host);
</code></pre><p><a name="assert-host-is-not"></a></p><h4 id="asserthostisnot" tabindex="-1"><a class="header-anchor" href="#asserthostisnot" aria-hidden="true">#</a> assertHostIsNot</h4><p>Assert that the current URL host does not match the given host:</p><pre><code>$browser-&gt;assertHostIsNot($host);
</code></pre><p><a name="assert-port-is"></a></p><h4 id="assertportis" tabindex="-1"><a class="header-anchor" href="#assertportis" aria-hidden="true">#</a> assertPortIs</h4><p>Assert that the current URL port matches the given port:</p><pre><code>$browser-&gt;assertPortIs($port);
</code></pre><p><a name="assert-port-is-not"></a></p><h4 id="assertportisnot" tabindex="-1"><a class="header-anchor" href="#assertportisnot" aria-hidden="true">#</a> assertPortIsNot</h4><p>Assert that the current URL port does not match the given port:</p><pre><code>$browser-&gt;assertPortIsNot($port);
</code></pre><p><a name="assert-path-begins-with"></a></p><h4 id="assertpathbeginswith" tabindex="-1"><a class="header-anchor" href="#assertpathbeginswith" aria-hidden="true">#</a> assertPathBeginsWith</h4><p>Assert that the current URL path begins with the given path:</p><pre><code>$browser-&gt;assertPathBeginsWith(&#39;/home&#39;);
</code></pre><p><a name="assert-path-is"></a></p><h4 id="assertpathis" tabindex="-1"><a class="header-anchor" href="#assertpathis" aria-hidden="true">#</a> assertPathIs</h4><p>Assert that the current path matches the given path:</p><pre><code>$browser-&gt;assertPathIs(&#39;/home&#39;);
</code></pre><p><a name="assert-path-is-not"></a></p><h4 id="assertpathisnot" tabindex="-1"><a class="header-anchor" href="#assertpathisnot" aria-hidden="true">#</a> assertPathIsNot</h4><p>Assert that the current path does not match the given path:</p><pre><code>$browser-&gt;assertPathIsNot(&#39;/home&#39;);
</code></pre><p><a name="assert-route-is"></a></p><h4 id="assertrouteis" tabindex="-1"><a class="header-anchor" href="#assertrouteis" aria-hidden="true">#</a> assertRouteIs</h4><p>Assert that the current URL matches the given <a href="./routing#named-routes">named route&#39;s</a> URL:</p><pre><code>$browser-&gt;assertRouteIs($name, $parameters);
</code></pre><p><a name="assert-query-string-has"></a></p><h4 id="assertquerystringhas" tabindex="-1"><a class="header-anchor" href="#assertquerystringhas" aria-hidden="true">#</a> assertQueryStringHas</h4><p>Assert that the given query string parameter is present:</p><pre><code>$browser-&gt;assertQueryStringHas($name);
</code></pre><p>Assert that the given query string parameter is present and has a given value:</p><pre><code>$browser-&gt;assertQueryStringHas($name, $value);
</code></pre><p><a name="assert-query-string-missing"></a></p><h4 id="assertquerystringmissing" tabindex="-1"><a class="header-anchor" href="#assertquerystringmissing" aria-hidden="true">#</a> assertQueryStringMissing</h4><p>Assert that the given query string parameter is missing:</p><pre><code>$browser-&gt;assertQueryStringMissing($name);
</code></pre><p><a name="assert-fragment-is"></a></p><h4 id="assertfragmentis" tabindex="-1"><a class="header-anchor" href="#assertfragmentis" aria-hidden="true">#</a> assertFragmentIs</h4><p>Assert that the URL&#39;s current hash fragment matches the given fragment:</p><pre><code>$browser-&gt;assertFragmentIs(&#39;anchor&#39;);
</code></pre><p><a name="assert-fragment-begins-with"></a></p><h4 id="assertfragmentbeginswith" tabindex="-1"><a class="header-anchor" href="#assertfragmentbeginswith" aria-hidden="true">#</a> assertFragmentBeginsWith</h4><p>Assert that the URL&#39;s current hash fragment begins with the given fragment:</p><pre><code>$browser-&gt;assertFragmentBeginsWith(&#39;anchor&#39;);
</code></pre><p><a name="assert-fragment-is-not"></a></p><h4 id="assertfragmentisnot" tabindex="-1"><a class="header-anchor" href="#assertfragmentisnot" aria-hidden="true">#</a> assertFragmentIsNot</h4><p>Assert that the URL&#39;s current hash fragment does not match the given fragment:</p><pre><code>$browser-&gt;assertFragmentIsNot(&#39;anchor&#39;);
</code></pre><p><a name="assert-has-cookie"></a></p><h4 id="asserthascookie" tabindex="-1"><a class="header-anchor" href="#asserthascookie" aria-hidden="true">#</a> assertHasCookie</h4><p>Assert that the given encrypted cookie is present:</p><pre><code>$browser-&gt;assertHasCookie($name);
</code></pre><p><a name="assert-has-plain-cookie"></a></p><h4 id="asserthasplaincookie" tabindex="-1"><a class="header-anchor" href="#asserthasplaincookie" aria-hidden="true">#</a> assertHasPlainCookie</h4><p>Assert that the given unencrypted cookie is present:</p><pre><code>$browser-&gt;assertHasPlainCookie($name);
</code></pre><p><a name="assert-cookie-missing"></a></p><h4 id="assertcookiemissing" tabindex="-1"><a class="header-anchor" href="#assertcookiemissing" aria-hidden="true">#</a> assertCookieMissing</h4><p>Assert that the given encrypted cookie is not present:</p><pre><code>$browser-&gt;assertCookieMissing($name);
</code></pre><p><a name="assert-plain-cookie-missing"></a></p><h4 id="assertplaincookiemissing" tabindex="-1"><a class="header-anchor" href="#assertplaincookiemissing" aria-hidden="true">#</a> assertPlainCookieMissing</h4><p>Assert that the given unencrypted cookie is not present:</p><pre><code>$browser-&gt;assertPlainCookieMissing($name);
</code></pre><p><a name="assert-cookie-value"></a></p><h4 id="assertcookievalue" tabindex="-1"><a class="header-anchor" href="#assertcookievalue" aria-hidden="true">#</a> assertCookieValue</h4><p>Assert that an encrypted cookie has a given value:</p><pre><code>$browser-&gt;assertCookieValue($name, $value);
</code></pre><p><a name="assert-plain-cookie-value"></a></p><h4 id="assertplaincookievalue" tabindex="-1"><a class="header-anchor" href="#assertplaincookievalue" aria-hidden="true">#</a> assertPlainCookieValue</h4><p>Assert that an unencrypted cookie has a given value:</p><pre><code>$browser-&gt;assertPlainCookieValue($name, $value);
</code></pre><p><a name="assert-see"></a></p><h4 id="assertsee" tabindex="-1"><a class="header-anchor" href="#assertsee" aria-hidden="true">#</a> assertSee</h4><p>Assert that the given text is present on the page:</p><pre><code>$browser-&gt;assertSee($text);
</code></pre><p><a name="assert-dont-see"></a></p><h4 id="assertdontsee" tabindex="-1"><a class="header-anchor" href="#assertdontsee" aria-hidden="true">#</a> assertDontSee</h4><p>Assert that the given text is not present on the page:</p><pre><code>$browser-&gt;assertDontSee($text);
</code></pre><p><a name="assert-see-in"></a></p><h4 id="assertseein" tabindex="-1"><a class="header-anchor" href="#assertseein" aria-hidden="true">#</a> assertSeeIn</h4><p>Assert that the given text is present within the selector:</p><pre><code>$browser-&gt;assertSeeIn($selector, $text);
</code></pre><p><a name="assert-dont-see-in"></a></p><h4 id="assertdontseein" tabindex="-1"><a class="header-anchor" href="#assertdontseein" aria-hidden="true">#</a> assertDontSeeIn</h4><p>Assert that the given text is not present within the selector:</p><pre><code>$browser-&gt;assertDontSeeIn($selector, $text);
</code></pre><p><a name="assert-see-anything-in"></a></p><h4 id="assertseeanythingin" tabindex="-1"><a class="header-anchor" href="#assertseeanythingin" aria-hidden="true">#</a> assertSeeAnythingIn</h4><p>Assert that any text is present within the selector:</p><pre><code>$browser-&gt;assertSeeAnythingIn($selector);
</code></pre><p><a name="assert-see-nothing-in"></a></p><h4 id="assertseenothingin" tabindex="-1"><a class="header-anchor" href="#assertseenothingin" aria-hidden="true">#</a> assertSeeNothingIn</h4><p>Assert that no text is present within the selector:</p><pre><code>$browser-&gt;assertSeeNothingIn($selector);
</code></pre><p><a name="assert-script"></a></p><h4 id="assertscript" tabindex="-1"><a class="header-anchor" href="#assertscript" aria-hidden="true">#</a> assertScript</h4><p>Assert that the given JavaScript expression evaluates to the given value:</p><pre><code>$browser-&gt;assertScript(&#39;window.isLoaded&#39;)
        -&gt;assertScript(&#39;document.readyState&#39;, &#39;complete&#39;);
</code></pre><p><a name="assert-source-has"></a></p><h4 id="assertsourcehas" tabindex="-1"><a class="header-anchor" href="#assertsourcehas" aria-hidden="true">#</a> assertSourceHas</h4><p>Assert that the given source code is present on the page:</p><pre><code>$browser-&gt;assertSourceHas($code);
</code></pre><p><a name="assert-source-missing"></a></p><h4 id="assertsourcemissing" tabindex="-1"><a class="header-anchor" href="#assertsourcemissing" aria-hidden="true">#</a> assertSourceMissing</h4><p>Assert that the given source code is not present on the page:</p><pre><code>$browser-&gt;assertSourceMissing($code);
</code></pre><p><a name="assert-see-link"></a></p><h4 id="assertseelink" tabindex="-1"><a class="header-anchor" href="#assertseelink" aria-hidden="true">#</a> assertSeeLink</h4><p>Assert that the given link is present on the page:</p><pre><code>$browser-&gt;assertSeeLink($linkText);
</code></pre><p><a name="assert-dont-see-link"></a></p><h4 id="assertdontseelink" tabindex="-1"><a class="header-anchor" href="#assertdontseelink" aria-hidden="true">#</a> assertDontSeeLink</h4><p>Assert that the given link is not present on the page:</p><pre><code>$browser-&gt;assertDontSeeLink($linkText);
</code></pre><p><a name="assert-input-value"></a></p><h4 id="assertinputvalue" tabindex="-1"><a class="header-anchor" href="#assertinputvalue" aria-hidden="true">#</a> assertInputValue</h4><p>Assert that the given input field has the given value:</p><pre><code>$browser-&gt;assertInputValue($field, $value);
</code></pre><p><a name="assert-input-value-is-not"></a></p><h4 id="assertinputvalueisnot" tabindex="-1"><a class="header-anchor" href="#assertinputvalueisnot" aria-hidden="true">#</a> assertInputValueIsNot</h4><p>Assert that the given input field does not have the given value:</p><pre><code>$browser-&gt;assertInputValueIsNot($field, $value);
</code></pre><p><a name="assert-checked"></a></p><h4 id="assertchecked" tabindex="-1"><a class="header-anchor" href="#assertchecked" aria-hidden="true">#</a> assertChecked</h4><p>Assert that the given checkbox is checked:</p><pre><code>$browser-&gt;assertChecked($field);
</code></pre><p><a name="assert-not-checked"></a></p><h4 id="assertnotchecked" tabindex="-1"><a class="header-anchor" href="#assertnotchecked" aria-hidden="true">#</a> assertNotChecked</h4><p>Assert that the given checkbox is not checked:</p><pre><code>$browser-&gt;assertNotChecked($field);
</code></pre><p><a name="assert-indeterminate"></a></p><h4 id="assertindeterminate" tabindex="-1"><a class="header-anchor" href="#assertindeterminate" aria-hidden="true">#</a> assertIndeterminate</h4><p>Assert that the given checkbox is in an indeterminate state:</p><pre><code>$browser-&gt;assertIndeterminate($field);
</code></pre><p><a name="assert-radio-selected"></a></p><h4 id="assertradioselected" tabindex="-1"><a class="header-anchor" href="#assertradioselected" aria-hidden="true">#</a> assertRadioSelected</h4><p>Assert that the given radio field is selected:</p><pre><code>$browser-&gt;assertRadioSelected($field, $value);
</code></pre><p><a name="assert-radio-not-selected"></a></p><h4 id="assertradionotselected" tabindex="-1"><a class="header-anchor" href="#assertradionotselected" aria-hidden="true">#</a> assertRadioNotSelected</h4><p>Assert that the given radio field is not selected:</p><pre><code>$browser-&gt;assertRadioNotSelected($field, $value);
</code></pre><p><a name="assert-selected"></a></p><h4 id="assertselected" tabindex="-1"><a class="header-anchor" href="#assertselected" aria-hidden="true">#</a> assertSelected</h4><p>Assert that the given dropdown has the given value selected:</p><pre><code>$browser-&gt;assertSelected($field, $value);
</code></pre><p><a name="assert-not-selected"></a></p><h4 id="assertnotselected" tabindex="-1"><a class="header-anchor" href="#assertnotselected" aria-hidden="true">#</a> assertNotSelected</h4><p>Assert that the given dropdown does not have the given value selected:</p><pre><code>$browser-&gt;assertNotSelected($field, $value);
</code></pre><p><a name="assert-select-has-options"></a></p><h4 id="assertselecthasoptions" tabindex="-1"><a class="header-anchor" href="#assertselecthasoptions" aria-hidden="true">#</a> assertSelectHasOptions</h4><p>Assert that the given array of values are available to be selected:</p><pre><code>$browser-&gt;assertSelectHasOptions($field, $values);
</code></pre><p><a name="assert-select-missing-options"></a></p><h4 id="assertselectmissingoptions" tabindex="-1"><a class="header-anchor" href="#assertselectmissingoptions" aria-hidden="true">#</a> assertSelectMissingOptions</h4><p>Assert that the given array of values are not available to be selected:</p><pre><code>$browser-&gt;assertSelectMissingOptions($field, $values);
</code></pre><p><a name="assert-select-has-option"></a></p><h4 id="assertselecthasoption" tabindex="-1"><a class="header-anchor" href="#assertselecthasoption" aria-hidden="true">#</a> assertSelectHasOption</h4><p>Assert that the given value is available to be selected on the given field:</p><pre><code>$browser-&gt;assertSelectHasOption($field, $value);
</code></pre><p><a name="assert-select-missing-option"></a></p><h4 id="assertselectmissingoption" tabindex="-1"><a class="header-anchor" href="#assertselectmissingoption" aria-hidden="true">#</a> assertSelectMissingOption</h4><p>Assert that the given value is not available to be selected:</p><pre><code>$browser-&gt;assertSelectMissingOption($field, $value);
</code></pre><p><a name="assert-value"></a></p><h4 id="assertvalue" tabindex="-1"><a class="header-anchor" href="#assertvalue" aria-hidden="true">#</a> assertValue</h4><p>Assert that the element matching the given selector has the given value:</p><pre><code>$browser-&gt;assertValue($selector, $value);
</code></pre><p><a name="assert-value-is-not"></a></p><h4 id="assertvalueisnot" tabindex="-1"><a class="header-anchor" href="#assertvalueisnot" aria-hidden="true">#</a> assertValueIsNot</h4><p>Assert that the element matching the given selector does not have the given value:</p><pre><code>$browser-&gt;assertValueIsNot($selector, $value);
</code></pre><p><a name="assert-attribute"></a></p><h4 id="assertattribute" tabindex="-1"><a class="header-anchor" href="#assertattribute" aria-hidden="true">#</a> assertAttribute</h4><p>Assert that the element matching the given selector has the given value in the provided attribute:</p><pre><code>$browser-&gt;assertAttribute($selector, $attribute, $value);
</code></pre><p><a name="assert-attribute-contains"></a></p><h4 id="assertattributecontains" tabindex="-1"><a class="header-anchor" href="#assertattributecontains" aria-hidden="true">#</a> assertAttributeContains</h4><p>Assert that the element matching the given selector contains the given value in the provided attribute:</p><pre><code>$browser-&gt;assertAttributeContains($selector, $attribute, $value);
</code></pre><p><a name="assert-aria-attribute"></a></p><h4 id="assertariaattribute" tabindex="-1"><a class="header-anchor" href="#assertariaattribute" aria-hidden="true">#</a> assertAriaAttribute</h4><p>Assert that the element matching the given selector has the given value in the provided aria attribute:</p><pre><code>$browser-&gt;assertAriaAttribute($selector, $attribute, $value);
</code></pre><p>For example, given the markup <code>&lt;button aria-label=&quot;Add&quot;&gt;&lt;/button&gt;</code>, you may assert against the <code>aria-label</code> attribute like so:</p><pre><code>$browser-&gt;assertAriaAttribute(&#39;button&#39;, &#39;label&#39;, &#39;Add&#39;)
</code></pre><p><a name="assert-data-attribute"></a></p><h4 id="assertdataattribute" tabindex="-1"><a class="header-anchor" href="#assertdataattribute" aria-hidden="true">#</a> assertDataAttribute</h4><p>Assert that the element matching the given selector has the given value in the provided data attribute:</p><pre><code>$browser-&gt;assertDataAttribute($selector, $attribute, $value);
</code></pre><p>For example, given the markup <code>&lt;tr id=&quot;row-1&quot; data-content=&quot;attendees&quot;&gt;&lt;/tr&gt;</code>, you may assert against the <code>data-label</code> attribute like so:</p><pre><code>$browser-&gt;assertDataAttribute(&#39;#row-1&#39;, &#39;content&#39;, &#39;attendees&#39;)
</code></pre><p><a name="assert-visible"></a></p><h4 id="assertvisible" tabindex="-1"><a class="header-anchor" href="#assertvisible" aria-hidden="true">#</a> assertVisible</h4><p>Assert that the element matching the given selector is visible:</p><pre><code>$browser-&gt;assertVisible($selector);
</code></pre><p><a name="assert-present"></a></p><h4 id="assertpresent" tabindex="-1"><a class="header-anchor" href="#assertpresent" aria-hidden="true">#</a> assertPresent</h4><p>Assert that the element matching the given selector is present in the source:</p><pre><code>$browser-&gt;assertPresent($selector);
</code></pre><p><a name="assert-not-present"></a></p><h4 id="assertnotpresent" tabindex="-1"><a class="header-anchor" href="#assertnotpresent" aria-hidden="true">#</a> assertNotPresent</h4><p>Assert that the element matching the given selector is not present in the source:</p><pre><code>$browser-&gt;assertNotPresent($selector);
</code></pre><p><a name="assert-missing"></a></p><h4 id="assertmissing" tabindex="-1"><a class="header-anchor" href="#assertmissing" aria-hidden="true">#</a> assertMissing</h4><p>Assert that the element matching the given selector is not visible:</p><pre><code>$browser-&gt;assertMissing($selector);
</code></pre><p><a name="assert-input-present"></a></p><h4 id="assertinputpresent" tabindex="-1"><a class="header-anchor" href="#assertinputpresent" aria-hidden="true">#</a> assertInputPresent</h4><p>Assert that an input with the given name is present:</p><pre><code>$browser-&gt;assertInputPresent($name);
</code></pre><p><a name="assert-input-missing"></a></p><h4 id="assertinputmissing" tabindex="-1"><a class="header-anchor" href="#assertinputmissing" aria-hidden="true">#</a> assertInputMissing</h4><p>Assert that an input with the given name is not present in the source:</p><pre><code>$browser-&gt;assertInputMissing($name);
</code></pre><p><a name="assert-dialog-opened"></a></p><h4 id="assertdialogopened" tabindex="-1"><a class="header-anchor" href="#assertdialogopened" aria-hidden="true">#</a> assertDialogOpened</h4><p>Assert that a JavaScript dialog with the given message has been opened:</p><pre><code>$browser-&gt;assertDialogOpened($message);
</code></pre><p><a name="assert-enabled"></a></p><h4 id="assertenabled" tabindex="-1"><a class="header-anchor" href="#assertenabled" aria-hidden="true">#</a> assertEnabled</h4><p>Assert that the given field is enabled:</p><pre><code>$browser-&gt;assertEnabled($field);
</code></pre><p><a name="assert-disabled"></a></p><h4 id="assertdisabled" tabindex="-1"><a class="header-anchor" href="#assertdisabled" aria-hidden="true">#</a> assertDisabled</h4><p>Assert that the given field is disabled:</p><pre><code>$browser-&gt;assertDisabled($field);
</code></pre><p><a name="assert-button-enabled"></a></p><h4 id="assertbuttonenabled" tabindex="-1"><a class="header-anchor" href="#assertbuttonenabled" aria-hidden="true">#</a> assertButtonEnabled</h4><p>Assert that the given button is enabled:</p><pre><code>$browser-&gt;assertButtonEnabled($button);
</code></pre><p><a name="assert-button-disabled"></a></p><h4 id="assertbuttondisabled" tabindex="-1"><a class="header-anchor" href="#assertbuttondisabled" aria-hidden="true">#</a> assertButtonDisabled</h4><p>Assert that the given button is disabled:</p><pre><code>$browser-&gt;assertButtonDisabled($button);
</code></pre><p><a name="assert-focused"></a></p><h4 id="assertfocused" tabindex="-1"><a class="header-anchor" href="#assertfocused" aria-hidden="true">#</a> assertFocused</h4><p>Assert that the given field is focused:</p><pre><code>$browser-&gt;assertFocused($field);
</code></pre><p><a name="assert-not-focused"></a></p><h4 id="assertnotfocused" tabindex="-1"><a class="header-anchor" href="#assertnotfocused" aria-hidden="true">#</a> assertNotFocused</h4><p>Assert that the given field is not focused:</p><pre><code>$browser-&gt;assertNotFocused($field);
</code></pre><p><a name="assert-authenticated"></a></p><h4 id="assertauthenticated" tabindex="-1"><a class="header-anchor" href="#assertauthenticated" aria-hidden="true">#</a> assertAuthenticated</h4><p>Assert that the user is authenticated:</p><pre><code>$browser-&gt;assertAuthenticated();
</code></pre><p><a name="assert-guest"></a></p><h4 id="assertguest" tabindex="-1"><a class="header-anchor" href="#assertguest" aria-hidden="true">#</a> assertGuest</h4><p>Assert that the user is not authenticated:</p><pre><code>$browser-&gt;assertGuest();
</code></pre><p><a name="assert-authenticated-as"></a></p><h4 id="assertauthenticatedas" tabindex="-1"><a class="header-anchor" href="#assertauthenticatedas" aria-hidden="true">#</a> assertAuthenticatedAs</h4><p>Assert that the user is authenticated as the given user:</p><pre><code>$browser-&gt;assertAuthenticatedAs($user);
</code></pre><p><a name="assert-vue"></a></p><h4 id="assertvue" tabindex="-1"><a class="header-anchor" href="#assertvue" aria-hidden="true">#</a> assertVue</h4>`,288),B={href:"https://vuejs.org",target:"_blank",rel:"noopener noreferrer"},F=n(`<div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>    <span class="token comment">// HTML...</span>

    <span class="token operator">&lt;</span>profile dusk<span class="token operator">=</span><span class="token string double-quoted-string">&quot;profile-component&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>profile<span class="token operator">&gt;</span>

    <span class="token comment">// Component Definition...</span>

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You may assert on the state of the Vue component like so:</p><pre><code>/**
 * A basic Vue test example.
 */
public function test_vue(): void
{
    $this-&gt;browse(function (Browser $browser) {
        $browser-&gt;visit(&#39;/&#39;)
                -&gt;assertVue(&#39;user.name&#39;, &#39;Taylor&#39;, &#39;@profile-component&#39;);
    });
}
</code></pre><p><a name="assert-vue-is-not"></a></p><h4 id="assertvueisnot" tabindex="-1"><a class="header-anchor" href="#assertvueisnot" aria-hidden="true">#</a> assertVueIsNot</h4><p>Assert that a given Vue component data property does not match the given value:</p><pre><code>$browser-&gt;assertVueIsNot($property, $value, $componentSelector = null);
</code></pre><p><a name="assert-vue-contains"></a></p><h4 id="assertvuecontains" tabindex="-1"><a class="header-anchor" href="#assertvuecontains" aria-hidden="true">#</a> assertVueContains</h4><p>Assert that a given Vue component data property is an array and contains the given value:</p><pre><code>$browser-&gt;assertVueContains($property, $value, $componentSelector = null);
</code></pre><p><a name="assert-vue-does-not-contain"></a></p><h4 id="assertvuedoesnotcontain" tabindex="-1"><a class="header-anchor" href="#assertvuedoesnotcontain" aria-hidden="true">#</a> assertVueDoesNotContain</h4><p>Assert that a given Vue component data property is an array and does not contain the given value:</p><pre><code>$browser-&gt;assertVueDoesNotContain($property, $value, $componentSelector = null);
</code></pre><p><a name="pages"></a></p><h2 id="pages" tabindex="-1"><a class="header-anchor" href="#pages" aria-hidden="true">#</a> Pages</h2><p>Sometimes, tests require several complicated actions to be performed in sequence. This can make your tests harder to read and understand. Dusk Pages allow you to define expressive actions that may then be performed on a given page via a single method. Pages also allow you to define short-cuts to common selectors for your application or for a single page.</p><p><a name="generating-pages"></a></p><h3 id="generating-pages" tabindex="-1"><a class="header-anchor" href="#generating-pages" aria-hidden="true">#</a> Generating Pages</h3><p>To generate a page object, execute the <code>dusk:page</code> Artisan command. All page objects will be placed in your application&#39;s <code>tests/Browser/Pages</code> directory:</p><pre><code>php artisan dusk:page Login
</code></pre><p><a name="configuring-pages"></a></p><h3 id="configuring-pages" tabindex="-1"><a class="header-anchor" href="#configuring-pages" aria-hidden="true">#</a> Configuring Pages</h3><p>By default, pages have three methods: <code>url</code>, <code>assert</code>, and <code>elements</code>. We will discuss the <code>url</code> and <code>assert</code> methods now. The <code>elements</code> method will be <a href="#shorthand-selectors">discussed in more detail below</a>.</p><p><a name="the-url-method"></a></p><h4 id="the-url-method" tabindex="-1"><a class="header-anchor" href="#the-url-method" aria-hidden="true">#</a> The <code>url</code> Method</h4><p>The <code>url</code> method should return the path of the URL that represents the page. Dusk will use this URL when navigating to the page in the browser:</p><pre><code>/**
 * Get the URL for the page.
 */
public function url(): string
{
    return &#39;/login&#39;;
}
</code></pre><p><a name="the-assert-method"></a></p><h4 id="the-assert-method" tabindex="-1"><a class="header-anchor" href="#the-assert-method" aria-hidden="true">#</a> The <code>assert</code> Method</h4><p>The <code>assert</code> method may make any assertions necessary to verify that the browser is actually on the given page. It is not actually necessary to place anything within this method; however, you are free to make these assertions if you wish. These assertions will be run automatically when navigating to the page:</p><pre><code>/**
 * Assert that the browser is on the page.
 */
public function assert(Browser $browser): void
{
    $browser-&gt;assertPathIs($this-&gt;url());
}
</code></pre><p><a name="navigating-to-pages"></a></p><h3 id="navigating-to-pages" tabindex="-1"><a class="header-anchor" href="#navigating-to-pages" aria-hidden="true">#</a> Navigating To Pages</h3><p>Once a page has been defined, you may navigate to it using the <code>visit</code> method:</p><pre><code>use Tests\\Browser\\Pages\\Login;

$browser-&gt;visit(new Login);
</code></pre><p>Sometimes you may already be on a given page and need to &quot;load&quot; the page&#39;s selectors and methods into the current test context. This is common when pressing a button and being redirected to a given page without explicitly navigating to it. In this situation, you may use the <code>on</code> method to load the page:</p><pre><code>use Tests\\Browser\\Pages\\CreatePlaylist;

$browser-&gt;visit(&#39;/dashboard&#39;)
        -&gt;clickLink(&#39;Create Playlist&#39;)
        -&gt;on(new CreatePlaylist)
        -&gt;assertSee(&#39;@create&#39;);
</code></pre><p><a name="shorthand-selectors"></a></p><h3 id="shorthand-selectors" tabindex="-1"><a class="header-anchor" href="#shorthand-selectors" aria-hidden="true">#</a> Shorthand Selectors</h3><p>The <code>elements</code> method within page classes allows you to define quick, easy-to-remember shortcuts for any CSS selector on your page. For example, let&#39;s define a shortcut for the &quot;email&quot; input field of the application&#39;s login page:</p><pre><code>/**
 * Get the element shortcuts for the page.
 *
 * @return array&lt;string, string&gt;
 */
public function elements(): array
{
    return [
        &#39;@email&#39; =&gt; &#39;input[name=email]&#39;,
    ];
}
</code></pre><p>Once the shortcut has been defined, you may use the shorthand selector anywhere you would typically use a full CSS selector:</p><pre><code>$browser-&gt;type(&#39;@email&#39;, &#39;taylor@laravel.com&#39;);
</code></pre><p><a name="global-shorthand-selectors"></a></p><h4 id="global-shorthand-selectors" tabindex="-1"><a class="header-anchor" href="#global-shorthand-selectors" aria-hidden="true">#</a> Global Shorthand Selectors</h4><p>After installing Dusk, a base <code>Page</code> class will be placed in your <code>tests/Browser/Pages</code> directory. This class contains a <code>siteElements</code> method which may be used to define global shorthand selectors that should be available on every page throughout your application:</p><pre><code>/**
 * Get the global element shortcuts for the site.
 *
 * @return array&lt;string, string&gt;
 */
public static function siteElements(): array
{
    return [
        &#39;@element&#39; =&gt; &#39;#selector&#39;,
    ];
}
</code></pre><p><a name="page-methods"></a></p><h3 id="page-methods" tabindex="-1"><a class="header-anchor" href="#page-methods" aria-hidden="true">#</a> Page Methods</h3><p>In addition to the default methods defined on pages, you may define additional methods which may be used throughout your tests. For example, let&#39;s imagine we are building a music management application. A common action for one page of the application might be to create a playlist. Instead of re-writing the logic to create a playlist in each test, you may define a <code>createPlaylist</code> method on a page class:</p><pre><code>&lt;?php

namespace Tests\\Browser\\Pages;

use Laravel\\Dusk\\Browser;

class Dashboard extends Page
{
    // Other page methods...

    /**
     * Create a new playlist.
     */
    public function createPlaylist(Browser $browser, string $name): void
    {
        $browser-&gt;type(&#39;name&#39;, $name)
                -&gt;check(&#39;share&#39;)
                -&gt;press(&#39;Create Playlist&#39;);
    }
}
</code></pre><p>Once the method has been defined, you may use it within any test that utilizes the page. The browser instance will automatically be passed as the first argument to custom page methods:</p><pre><code>use Tests\\Browser\\Pages\\Dashboard;

$browser-&gt;visit(new Dashboard)
        -&gt;createPlaylist(&#39;My Playlist&#39;)
        -&gt;assertSee(&#39;My Playlist&#39;);
</code></pre><p><a name="components"></a></p><h2 id="components" tabindex="-1"><a class="header-anchor" href="#components" aria-hidden="true">#</a> Components</h2><p>Components are similar to Dusk’s “page objects”, but are intended for pieces of UI and functionality that are re-used throughout your application, such as a navigation bar or notification window. As such, components are not bound to specific URLs.</p><p><a name="generating-components"></a></p><h3 id="generating-components" tabindex="-1"><a class="header-anchor" href="#generating-components" aria-hidden="true">#</a> Generating Components</h3><p>To generate a component, execute the <code>dusk:component</code> Artisan command. New components are placed in the <code>tests/Browser/Components</code> directory:</p><pre><code>php artisan dusk:component DatePicker
</code></pre><p>As shown above, a &quot;date picker&quot; is an example of a component that might exist throughout your application on a variety of pages. It can become cumbersome to manually write the browser automation logic to select a date in dozens of tests throughout your test suite. Instead, we can define a Dusk component to represent the date picker, allowing us to encapsulate that logic within the component:</p><pre><code>&lt;?php

namespace Tests\\Browser\\Components;

use Laravel\\Dusk\\Browser;
use Laravel\\Dusk\\Component as BaseComponent;

class DatePicker extends BaseComponent
{
    /**
     * Get the root selector for the component.
     */
    public function selector(): string
    {
        return &#39;.date-picker&#39;;
    }

    /**
     * Assert that the browser page contains the component.
     */
    public function assert(Browser $browser): void
    {
        $browser-&gt;assertVisible($this-&gt;selector());
    }

    /**
     * Get the element shortcuts for the component.
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
     * Select the given date.
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
</code></pre><p><a name="using-components"></a></p><h3 id="using-components" tabindex="-1"><a class="header-anchor" href="#using-components" aria-hidden="true">#</a> Using Components</h3><p>Once the component has been defined, we can easily select a date within the date picker from any test. And, if the logic necessary to select a date changes, we only need to update the component:</p><pre><code>&lt;?php

namespace Tests\\Browser;

use Illuminate\\Foundation\\Testing\\DatabaseMigrations;
use Laravel\\Dusk\\Browser;
use Tests\\Browser\\Components\\DatePicker;
use Tests\\DuskTestCase;

class ExampleTest extends DuskTestCase
{
    /**
     * A basic component test example.
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
</code></pre><p><a name="continuous-integration"></a></p><h2 id="continuous-integration" tabindex="-1"><a class="header-anchor" href="#continuous-integration" aria-hidden="true">#</a> Continuous Integration</h2><blockquote><p><strong>Warning</strong> Most Dusk continuous integration configurations expect your Laravel application to be served using the built-in PHP development server on port 8000. Therefore, before continuing, you should ensure that your continuous integration environment has an <code>APP_URL</code> environment variable value of <code>http://127.0.0.1:8000</code>.</p></blockquote><p><a name="running-tests-on-heroku-ci"></a></p><h3 id="heroku-ci" tabindex="-1"><a class="header-anchor" href="#heroku-ci" aria-hidden="true">#</a> Heroku CI</h3>`,73),R={href:"https://www.heroku.com/continuous-integration",target:"_blank",rel:"noopener noreferrer"},U=e("code",null,"app.json",-1),M=e("pre",null,[e("code",null,`{
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
`)],-1),H=e("p",null,[e("a",{name:"running-tests-on-travis-ci"})],-1),N=e("h3",{id:"travis-ci",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#travis-ci","aria-hidden":"true"},"#"),t(" Travis CI")],-1),V={href:"https://travis-ci.org",target:"_blank",rel:"noopener noreferrer"},O=e("code",null,".travis.yml",-1),E=e("code",null,"php artisan serve",-1),Y=n(`<div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">language</span><span class="token punctuation">:</span> php

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="running-tests-on-github-actions"></a></p><h3 id="github-actions" tabindex="-1"><a class="header-anchor" href="#github-actions" aria-hidden="true">#</a> GitHub Actions</h3>`,3),j={href:"https://github.com/features/actions",target:"_blank",rel:"noopener noreferrer"},z=e("code",null,"php artisan serve",-1),K=n(`<div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> CI
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
      <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v4
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="running-tests-on-chipper-ci"></a></p><h3 id="chipper-ci" tabindex="-1"><a class="header-anchor" href="#chipper-ci" aria-hidden="true">#</a> Chipper CI</h3>`,3),G={href:"https://chipperci.com",target:"_blank",rel:"noopener noreferrer"},J=n(`<div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># file .chipperci.yml</span>
<span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token number">1</span>

<span class="token key atrule">environment</span><span class="token punctuation">:</span>
  <span class="token key atrule">php</span><span class="token punctuation">:</span> <span class="token number">8.2</span>
  <span class="token key atrule">node</span><span class="token punctuation">:</span> <span class="token number">16</span>

<span class="token comment"># Include Chrome in the build environment</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> dusk

<span class="token comment"># Build all commits</span>
<span class="token key atrule">on</span><span class="token punctuation">:</span>
   <span class="token key atrule">push</span><span class="token punctuation">:</span>
      <span class="token key atrule">branches</span><span class="token punctuation">:</span> .*

<span class="token key atrule">pipeline</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Setup
    <span class="token key atrule">cmd</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
      cp -v .env.example .env
      composer install --no-interaction --prefer-dist --optimize-autoloader
      php artisan key:generate</span>
      
      <span class="token comment"># Create a dusk env file, ensuring APP_URL uses BUILD_HOST</span>
      cp <span class="token punctuation">-</span>v .env .env.dusk.ci
      sed <span class="token punctuation">-</span>i &quot;s@APP_URL=.<span class="token important">*@APP_URL=http://$BUILD_HOST:8000@g&quot;</span> .env.dusk.ci

  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Compile Assets
    <span class="token key atrule">cmd</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
      npm ci --no-audit
      npm run build</span>

  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Browser Tests
    <span class="token key atrule">cmd</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
      php -S [::0]:8000 -t public 2&gt;server.log &amp;
      sleep 2
      php artisan dusk:chrome-driver $CHROME_DRIVER
      php artisan dusk --env=ci</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),Q={href:"https://chipperci.com/docs/testing/laravel-dusk-new/",target:"_blank",rel:"noopener noreferrer"};function X(Z,ee){const a=o("ExternalLinkIcon");return i(),c("div",null,[l,e("p",null,[e("a",p,[t("Laravel Dusk"),s(a)]),t(" provides an expressive, easy-to-use browser automation and testing API. By default, Dusk does not require you to install JDK or Selenium on your local computer. Instead, Dusk uses a standalone "),e("a",h,[t("ChromeDriver"),s(a)]),t(" installation. However, you are free to utilize any other Selenium compatible driver you wish.")]),u,m,e("p",null,[t("To get started, you should install "),e("a",g,[t("Google Chrome"),s(a)]),t(" and add the "),b,t(" Composer dependency to your project:")]),v,e("p",null,[t("By default, Dusk uses Google Chrome and a standalone "),e("a",f,[t("ChromeDriver"),s(a)]),t(" installation to run your browser tests. However, you may start your own Selenium server and run your tests against any browser you wish.")]),k,e("p",null,[t("The "),w,t(" command accepts any argument that is normally accepted by the PHPUnit test runner, such as allowing you to only run the tests for a given "),e("a",y,[t("group"),s(a)]),t(":")]),$,e("blockquote",null,[e("p",null,[x,t(" All modifier keys such as "),D,t(" are wrapped in "),S,t(" characters, and match the constants defined in the "),T,t(" class, which can be "),e("a",A,[t("found on GitHub"),s(a)]),t(".")])]),C,e("p",null,[t("The "),I,t(" and "),_,t(" methods may be used to wait until a "),e("a",q,[t("Vue component"),s(a)]),t(" attribute has a given value:")]),P,W,L,e("p",null,[t("Dusk even allows you to make assertions on the state of "),e("a",B,[t("Vue component"),s(a)]),t(" data. For example, imagine your application contains the following Vue component:")]),F,e("p",null,[t("To run Dusk tests on "),e("a",R,[t("Heroku CI"),s(a)]),t(", add the following Google Chrome buildpack and scripts to your Heroku "),U,t(" file:")]),M,H,N,e("p",null,[t("To run your Dusk tests on "),e("a",V,[t("Travis CI"),s(a)]),t(", use the following "),O,t(" configuration. Since Travis CI is not a graphical environment, we will need to take some extra steps in order to launch a Chrome browser. In addition, we will use "),E,t(" to launch PHP's built-in web server:")]),Y,e("p",null,[t("If you are using "),e("a",j,[t("GitHub Actions"),s(a)]),t(" to run your Dusk tests, you may use the following configuration file as a starting point. Like TravisCI, we will use the "),z,t(" command to launch PHP's built-in web server:")]),K,e("p",null,[t("If you are using "),e("a",G,[t("Chipper CI"),s(a)]),t(" to run your Dusk tests, you may use the following configuration file as a starting point. We will use PHP's built-in server to run Laravel so we can listen for requests:")]),J,e("p",null,[t("To learn more about running Dusk tests on Chipper CI, including how to use databases, consult the "),e("a",Q,[t("official Chipper CI documentation"),s(a)]),t(".")])])}const se=r(d,[["render",X],["__file","dusk.html.vue"]]);export{se as default};
