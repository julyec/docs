import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o,c as i,b as e,d as s,e as d,a}from"./app-06635a3b.js";const c={},p=a(`<h1 id="http-测试" tabindex="-1"><a class="header-anchor" href="#http-测试" aria-hidden="true">#</a> HTTP 测试</h1><ul><li><a href="#introduction">简介</a></li><li><a href="#making-requests">创建请求</a><ul><li><a href="#customizing-request-headers">自定义请求头</a></li><li><a href="#cookies">Cookies</a></li><li><a href="#session-and-authentication">会话 / 认证</a></li><li><a href="#debugging-responses">调试响应</a></li><li><a href="#exception-handling">异常处理</a></li></ul></li><li><a href="#testing-json-apis">测试 JSON APIs</a><ul><li><a href="#fluent-json-testing">流畅 JSON 测试</a></li></ul></li><li><a href="#testing-file-uploads">测试文件上传</a></li><li><a href="#testing-views">测试视图</a><ul><li><a href="#rendering-blade-and-components">渲染切面 &amp; 组件</a></li></ul></li><li><a href="#available-assertions">可用断言</a><ul><li><a href="#response-assertions">响应断言</a></li><li><a href="#authentication-assertions">身份验证断言</a></li><li><a href="#validation-assertions">验证断言</a></li></ul></li></ul><p><a name="introduction"></a></p><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p>Laravel 提供了一个非常流畅的 API，用于向应用程序发出 HTTP 请求并检查响应。例如，看看下面定义的特性测试：</p><pre><code>&lt;?php

namespace Tests\\Feature;

use Illuminate\\Foundation\\Testing\\RefreshDatabase;
use Illuminate\\Foundation\\Testing\\WithoutMiddleware;
use Tests\\TestCase;

class ExampleTest extends TestCase
{
    /**
     * 基本功能测试示例。
     */
    public function test_a_basic_request(): void
    {
        $response = $this-&gt;get(&#39;/&#39;);

        $response-&gt;assertStatus(200);
    }
}
</code></pre><p><code>get</code> 方法向应用程序发出 <code>Get</code> 请求，而 <code>assertStatus</code> 方法则断言返回的响应应该具有给定的 HTTP 状态代码。除了这个简单的断言之外，Laravel 还包含各种用于检查响应头、内容、JSON 结构等的断言。</p><p><a name="making-requests"></a></p><h2 id="创建请求" tabindex="-1"><a class="header-anchor" href="#创建请求" aria-hidden="true">#</a> 创建请求</h2><p>要向应用程序发出请求，可以在测试中调用<code>get</code>、<code>post</code>、<code>put</code>、<code>patch</code>或<code>delete</code>方法。这些方法实际上不会向应用程序发出「真正的」HTTP 请求。相反，整个网络请求是在内部模拟的。</p><p>测试请求方法不返回<code>Illuminate\\Http\\Response</code>实例，而是返回<code>Illuminate\\Testing\\TestResponse</code>实例，该实例提供<a href="##available-assertions">各种有用的断言</a>,允许你检查应用程序的响应：</p><pre><code>&lt;?php

namespace Tests\\Feature;

use Illuminate\\Foundation\\Testing\\RefreshDatabase;
use Illuminate\\Foundation\\Testing\\WithoutMiddleware;
use Tests\\TestCase;

class ExampleTest extends TestCase
{
    /**
     * 基本功能测试示例。
     */
    public function test_a_basic_request(): void
    {
        $response = $this-&gt;get(&#39;/&#39;);

        $response-&gt;assertStatus(200);
    }
}
</code></pre><p>通常，你的每个测试应该只向你的应用发出一个请求。如果在单个测试方法中执行多个请求，则可能会出现意外行为。</p><blockquote><p><strong>技巧</strong> 为了方便起见，运行测试时会自动禁用 CSRF 中间件。</p></blockquote><p><a name="customizing-request-headers"></a></p><h3 id="自定义请求头" tabindex="-1"><a class="header-anchor" href="#自定义请求头" aria-hidden="true">#</a> 自定义请求头</h3><p>你可以使用此 <code>withHeaders</code> 方法自定义请求的标头，然后再将其发送到应用程序。这使你可以将任何想要的自定义标头添加到请求中：</p><pre><code>&lt;?php

namespace Tests\\Feature;

use Tests\\TestCase;

class ExampleTest extends TestCase
{
    /**
     * 基本功能测试示例。
     */
    public function test_interacting_with_headers(): void
    {
        $response = $this-&gt;withHeaders([
            &#39;X-Header&#39; =&gt; &#39;Value&#39;,
        ])-&gt;post(&#39;/user&#39;, [&#39;name&#39; =&gt; &#39;Sally&#39;]);

        $response-&gt;assertStatus(201);
    }
}
</code></pre><p><a name="cookies"></a></p><h3 id="cookies" tabindex="-1"><a class="header-anchor" href="#cookies" aria-hidden="true">#</a> Cookies</h3><p>在发送请求前你可以使用 <code>withCookie</code> 或 <code>withCookies</code> 方法设置 cookie。<code>withCookie</code> 接受 cookie 的名称和值这两个参数，而 <code>withCookies</code> 方法接受一个名称 / 值对数组：</p><pre><code>&lt;?php

namespace Tests\\Feature;

use Tests\\TestCase;

class ExampleTest extends TestCase
{
    public function test_interacting_with_cookies(): void
    {
        $response = $this-&gt;withCookie(&#39;color&#39;, &#39;blue&#39;)-&gt;get(&#39;/&#39;);

        $response = $this-&gt;withCookies([
            &#39;color&#39; =&gt; &#39;blue&#39;,
            &#39;name&#39; =&gt; &#39;Taylor&#39;,
        ])-&gt;get(&#39;/&#39;);
    }
}
</code></pre><p><a name="session-and-authentication"></a></p><h3 id="会话-session-认证-authentication" tabindex="-1"><a class="header-anchor" href="#会话-session-认证-authentication" aria-hidden="true">#</a> 会话 (Session) / 认证 (Authentication)</h3><p>Laravel 提供了几个可在 HTTP 测试时使用 Session 的辅助函数。首先，你需要传递一个数组给 <code>withSession</code> 方法来设置 session 数据。这样在应用程序的测试请求发送之前，就会先去给数据加载 session：</p><pre><code>&lt;?php

namespace Tests\\Feature;

use Tests\\TestCase;

class ExampleTest extends TestCase
{
    public function test_interacting_with_the_session(): void
    {
        $response = $this-&gt;withSession([&#39;banned&#39; =&gt; false])-&gt;get(&#39;/&#39;);
    }
}
</code></pre><p>Laravel 的 session 通常用于维护当前已验证用户的状态。因此，<code>actingAs</code> 方法提供了一种将给定用户作为当前用户进行身份验证的便捷方法。例如，我们可以使用一个<a href="./eloquent-factories">工厂模式</a>来生成和认证一个用户：</p><pre><code>&lt;?php

namespace Tests\\Feature;

use App\\Models\\User;
use Tests\\TestCase;

class ExampleTest extends TestCase
{
    public function test_an_action_that_requires_authentication(): void
    {
        $user = User::factory()-&gt;create();

        $response = $this-&gt;actingAs($user)
                         -&gt;withSession([&#39;banned&#39; =&gt; false])
                         -&gt;get(&#39;/&#39;);
    }
}
</code></pre><p>你也可以通过传递看守器名称作为 <code>actingAs</code> 方法的第二参数以指定用户通过哪种看守器来认证。提供给 <code>actingAs</code> 方法的防护也将成为测试期间的默认防护。</p><pre><code>$this-&gt;actingAs($user, &#39;web&#39;)
</code></pre><p><a name="debugging-responses"></a></p><h3 id="调试响应" tabindex="-1"><a class="header-anchor" href="#调试响应" aria-hidden="true">#</a> 调试响应</h3><p>在向你的应用程序发出测试请求之后，可以使用 <code>dump</code>、<code>dumpHeaders</code> 和 <code>dumpSession</code> 方法来检查和调试响应内容：</p><pre><code>&lt;?php

namespace Tests\\Feature;

use Tests\\TestCase;

class ExampleTest extends TestCase
{
    /**
     * 基本功能测试示例。
     */
    public function test_basic_test(): void
    {
        $response = $this-&gt;get(&#39;/&#39;);

        $response-&gt;dumpHeaders();

        $response-&gt;dumpSession();

        $response-&gt;dump();
    }
}
</code></pre><p>或者，你可以使用 <code>dd</code>、<code>ddHeaders</code> 和 <code>ddSession</code> 方法转储有关响应的信息，然后停止执行：</p><pre><code>&lt;?php

namespace Tests\\Feature;

use Tests\\TestCase;

class ExampleTest extends TestCase
{
    /**
     * 基本功能测试示例。
     */
    public function test_basic_test(): void
    {
        $response = $this-&gt;get(&#39;/&#39;);

        $response-&gt;ddHeaders();

        $response-&gt;ddSession();

        $response-&gt;dd();
    }
}
</code></pre><p><a name="exception-handling"></a></p><h3 id="异常处理" tabindex="-1"><a class="header-anchor" href="#异常处理" aria-hidden="true">#</a> 异常处理</h3><p>有时你可能想要测试你的应用程序是否引发了特定异常。为了确保异常不会被 Laravel 的异常处理程序捕获并作为 HTTP 响应返回，可以在发出请求之前调用 <code>withoutExceptionHandling</code> 方法：</p><pre><code>$response = $this-&gt;withoutExceptionHandling()-&gt;get(&#39;/&#39;);
</code></pre><p>此外，如果想确保你的应用程序没有使用 PHP 语言或你的应用程序正在使用的库已弃用的功能，你可以在发出请求之前调用 <code>withoutDeprecationHandling</code> 方法。禁用弃用处理时，弃用警告将转换为异常，从而导致你的测试失败：</p><pre><code>$response = $this-&gt;withoutDeprecationHandling()-&gt;get(&#39;/&#39;);
</code></pre><p><a name="testing-json-apis"></a></p><h2 id="测试-json-apis" tabindex="-1"><a class="header-anchor" href="#测试-json-apis" aria-hidden="true">#</a> 测试 JSON APIs</h2><p>Laravel 也提供了几个辅助函数来测试 JSON APIs 和其响应。例如，<code>json</code>、<code>getJson</code>、<code>postJson</code>、<code>putJson</code>、<code>patchJson</code>、<code>deleteJson</code> 以及 <code>optionsJson</code> 可以被用于发送各种 HTTP 动作。你也可以轻松地将数据和请求头传递到这些方法中。首先，让我们实现一个测试示例，发送 <code>POST</code> 请求到 <code>/api/user</code>，并断言返回的期望数据：</p><pre><code>&lt;?php

namespace Tests\\Feature;

use Tests\\TestCase;

class ExampleTest extends TestCase
{
    /**
     * 基本功能测试示例。
     */
    public function test_making_an_api_request(): void
    {
        $response = $this-&gt;postJson(&#39;/api/user&#39;, [&#39;name&#39; =&gt; &#39;Sally&#39;]);

        $response
            -&gt;assertStatus(201)
            -&gt;assertJson([
                &#39;created&#39; =&gt; true,
            ]);
    }
}
</code></pre><p>此外，JSON 响应数据可以作为响应上的数组变量进行访问，从而使你可以方便地检查 JSON 响应中返回的各个值：</p><pre><code>$this-&gt;assertTrue($response[&#39;created&#39;]);
</code></pre><blockquote><p><strong>技巧</strong><code>assertJson</code> 方法将响应转换为数组，并利用 <code>PHPUnit::assertArraySubset</code> 验证给定数组是否存在于应用程序返回的 JSON 响应中。因此，如果 JSON 响应中还有其他属性，则只要存在给定的片段，此测试仍将通过。</p></blockquote><p><a name="verifying-exact-match"></a></p><h4 id="验证-json-完全匹配" tabindex="-1"><a class="header-anchor" href="#验证-json-完全匹配" aria-hidden="true">#</a> 验证 JSON 完全匹配</h4><p>如前所述，<code>assertJson</code> 方法可用于断言 JSON 响应中存在 JSON 片段。如果你想验证给定数组是否与应用程序返回的 JSON <strong>完全匹配</strong>，则应使用 <code>assertExactJson</code> 方法：</p><pre><code>&lt;?php

namespace Tests\\Feature;

use Tests\\TestCase;

class ExampleTest extends TestCase
{
    /**
     * 基本功能测试示例。
     */
    public function test_asserting_an_exact_json_match(): void
    {
        $response = $this-&gt;postJson(&#39;/user&#39;, [&#39;name&#39; =&gt; &#39;Sally&#39;]);

        $response
            -&gt;assertStatus(201)
            -&gt;assertExactJson([
                &#39;created&#39; =&gt; true,
            ]);
    }
}
</code></pre><p><a name="verifying-json-paths"></a></p><h4 id="验证-json-路径" tabindex="-1"><a class="header-anchor" href="#验证-json-路径" aria-hidden="true">#</a> 验证 JSON 路径</h4><p>如果你想验证 JSON 响应是否包含指定路径上的某些给定数据，可以使用 <code>assertJsonPath</code> 方法：</p><pre><code>&lt;?php

namespace Tests\\Feature;

use Tests\\TestCase;

class ExampleTest extends TestCase
{
    /**
     * 基本功能测试示例。
     */
    public function test_asserting_a_json_paths_value(): void
    {
        $response = $this-&gt;postJson(&#39;/user&#39;, [&#39;name&#39; =&gt; &#39;Sally&#39;]);

        $response
            -&gt;assertStatus(201)
            -&gt;assertJsonPath(&#39;team.owner.name&#39;, &#39;Darian&#39;);
    }
}
</code></pre><p><code>assertJsonPath</code> 方法也接受一个闭包，可以用来动态地确定断言是否应该通过。</p><pre><code>$response-&gt;assertJsonPath(&#39;team.owner.name&#39;, fn (string $name) =&gt; strlen($name) &gt;= 3);
</code></pre><p><a name="fluent-json-testing"></a></p><h3 id="json-流式测试" tabindex="-1"><a class="header-anchor" href="#json-流式测试" aria-hidden="true">#</a> JSON 流式测试</h3><p>Laravel 还提供了一种漂亮的方式来流畅地测试应用程序的 JSON 响应。首先，将闭包传递给 <code>assertJson</code> 方法。这个闭包将使用 <code>Illuminate\\Testing\\Fluent\\AssertableJson</code> 的实例调用，该实例可用于对应用程序返回的 JSON 进行断言。 <code>where</code> 方法可用于对 JSON 的特定属性进行断言，而 <code>missing</code> 方法可用于断言 JSON 中缺少特定属性：</p><pre><code>use Illuminate\\Testing\\Fluent\\AssertableJson;

/**
 * 基本功能测试示例。
 */
public function test_fluent_json(): void
{
    $response = $this-&gt;getJson(&#39;/users/1&#39;);

    $response
        -&gt;assertJson(fn (AssertableJson $json) =&gt;
            $json-&gt;where(&#39;id&#39;, 1)
                 -&gt;where(&#39;name&#39;, &#39;Victoria Faith&#39;)
                 -&gt;where(&#39;email&#39;, fn (string $email) =&gt; str($email)-&gt;is(&#39;victoria@gmail.com&#39;))
                 -&gt;whereNot(&#39;status&#39;, &#39;pending&#39;)
                 -&gt;missing(&#39;password&#39;)
                 -&gt;etc()
        );
}
</code></pre><h4 id="了解-etc-方法" tabindex="-1"><a class="header-anchor" href="#了解-etc-方法" aria-hidden="true">#</a> 了解 <code>etc</code> 方法</h4><p>在上面的例子中, 你可能已经注意到我们在断言链的末端调用了 <code>etc</code> 方法. 这个方法通知Laravel，在JSON对象上可能还有其他的属性存在。如果没有使用 <code>etc</code> 方法, 如果你没有对JSON对象的其他属性进行断言, 测试将失败.</p><p>这种行为背后的意图是保护你不会在你的 JSON 响应中无意地暴露敏感信息，因为它迫使你明确地对该属性进行断言或通过 <code>etc</code> 方法明确地允许额外的属性。</p><p>然而，你应该知道，在你的断言链中不包括 <code>etc</code> 方法并不能确保额外的属性不会被添加到嵌套在 JSON 对象中的数组。<code>etc</code> 方法只能确保在调用 <code>etc</code> 方法的嵌套层中不存在额外的属性。</p><p><a name="asserting-json-attribute-presence-and-absence"></a></p><h4 id="断言属性存在-不存在" tabindex="-1"><a class="header-anchor" href="#断言属性存在-不存在" aria-hidden="true">#</a> 断言属性存在/不存在</h4><p>要断言属性存在或不存在，可以使用 <code>has</code> 和 <code>missing</code> 方法：</p><pre><code>$response-&gt;assertJson(fn (AssertableJson $json) =&gt;
    $json-&gt;has(&#39;data&#39;)
         -&gt;missing(&#39;message&#39;)
);
</code></pre><p>此外，<code>hasAll</code> 和 <code>missingAll</code> 方法允许同时断言多个属性的存在或不存在：</p><pre><code>$response-&gt;assertJson(fn (AssertableJson $json) =&gt;
    $json-&gt;hasAll([&#39;status&#39;, &#39;data&#39;])
         -&gt;missingAll([&#39;message&#39;, &#39;code&#39;])
);
</code></pre><p>你可以使用 <code>hasAny</code> 方法来确定是否存在给定属性列表中的至少一个：</p><pre><code>$response-&gt;assertJson(fn (AssertableJson $json) =&gt;
    $json-&gt;has(&#39;status&#39;)
         -&gt;hasAny(&#39;data&#39;, &#39;message&#39;, &#39;code&#39;)
);
</code></pre><p><a name="asserting-against-json-collections"></a></p><h4 id="断言反对-json-集合" tabindex="-1"><a class="header-anchor" href="#断言反对-json-集合" aria-hidden="true">#</a> 断言反对 JSON 集合</h4><p>通常，你的路由将返回一个 JSON 响应，其中包含多个项目，例如多个用户：</p><pre><code>Route::get(&#39;/users&#39;, function () {
    return User::all();
});
</code></pre><p>在这些情况下，我们可以使用 fluent JSON 对象的 <code>has</code> 方法对响应中包含的用户进行断言。例如，让我们断言 JSON 响应包含三个用户。接下来，我们将使用 <code>first</code> 方法对集合中的第一个用户进行一些断言。 <code>first</code> 方法接受一个闭包，该闭包接收另一个可断言的 JSON 字符串，我们可以使用它来对 JSON 集合中的第一个对象进行断言：</p><pre><code>$response
    -&gt;assertJson(fn (AssertableJson $json) =&gt;
        $json-&gt;has(3)
             -&gt;first(fn (AssertableJson $json) =&gt;
                $json-&gt;where(&#39;id&#39;, 1)
                     -&gt;where(&#39;name&#39;, &#39;Victoria Faith&#39;)
                     -&gt;where(&#39;email&#39;, fn (string $email) =&gt; str($email)-&gt;is(&#39;victoria@gmail.com&#39;))
                     -&gt;missing(&#39;password&#39;)
                     -&gt;etc()
             )
    );
</code></pre><p><a name="scoping-json-collection-assertions"></a></p><h4 id="json-集合范围断言" tabindex="-1"><a class="header-anchor" href="#json-集合范围断言" aria-hidden="true">#</a> JSON 集合范围断言</h4><p>有时，你的应用程序的路由将返回分配有命名键的 JSON 集合：</p><pre><code>Route::get(&#39;/users&#39;, function () {
    return [
        &#39;meta&#39; =&gt; [...],
        &#39;users&#39; =&gt; User::all(),
    ];
})
</code></pre><p>在测试这些路由时，你可以使用 <code>has</code> 方法来断言集合中的项目数。此外，你可以使用 <code>has</code> 方法来确定断言链的范围：</p><pre><code>$response
    -&gt;assertJson(fn (AssertableJson $json) =&gt;
        $json-&gt;has(&#39;meta&#39;)
             -&gt;has(&#39;users&#39;, 3)
             -&gt;has(&#39;users.0&#39;, fn (AssertableJson $json) =&gt;
                $json-&gt;where(&#39;id&#39;, 1)
                     -&gt;where(&#39;name&#39;, &#39;Victoria Faith&#39;)
                     -&gt;where(&#39;email&#39;, fn (string $email) =&gt; str($email)-&gt;is(&#39;victoria@gmail.com&#39;))
                     -&gt;missing(&#39;password&#39;)
                     -&gt;etc()
             )
    );
</code></pre><p>但是，你可以进行一次调用，提供一个闭包作为其第三个参数，而不是对 <code>has</code> 方法进行两次单独调用来断言 <code>users</code> 集合。这样做时，将自动调用闭包并将其范围限定为集合中的第一项：</p><pre><code>$response
    -&gt;assertJson(fn (AssertableJson $json) =&gt;
        $json-&gt;has(&#39;meta&#39;)
             -&gt;has(&#39;users&#39;, 3, fn (AssertableJson $json) =&gt;
                $json-&gt;where(&#39;id&#39;, 1)
                     -&gt;where(&#39;name&#39;, &#39;Victoria Faith&#39;)
                     -&gt;where(&#39;email&#39;, fn (string $email) =&gt; str($email)-&gt;is(&#39;victoria@gmail.com&#39;))
                     -&gt;missing(&#39;password&#39;)
                     -&gt;etc()
             )
    );
</code></pre><p><a name="asserting-json-types"></a></p><h4 id="断言-json-类型" tabindex="-1"><a class="header-anchor" href="#断言-json-类型" aria-hidden="true">#</a> 断言 JSON 类型</h4><p>你可能只想断言 JSON 响应中的属性属于某种类型。 <code>Illuminate\\Testing\\Fluent\\AssertableJson</code> 类提供了 <code>whereType</code> 和 <code>whereAllType</code> 方法来做到这一点：</p><pre><code>$response-&gt;assertJson(fn (AssertableJson $json) =&gt;
    $json-&gt;whereType(&#39;id&#39;, &#39;integer&#39;)
         -&gt;whereAllType([
            &#39;users.0.name&#39; =&gt; &#39;string&#39;,
            &#39;meta&#39; =&gt; &#39;array&#39;
        ])
);
</code></pre><p>你可以使用 <code>|</code> 字符指定多种类型，或者将类型数组作为第二个参数传递给 <code>whereType</code> 方法。如果响应值为任何列出的类型，则断言将成功：</p><pre><code>$response-&gt;assertJson(fn (AssertableJson $json) =&gt;
    $json-&gt;whereType(&#39;name&#39;, &#39;string|null&#39;)
         -&gt;whereType(&#39;id&#39;, [&#39;string&#39;, &#39;integer&#39;])
);
</code></pre><p><code>whereType</code> 和 <code>whereAllType</code> 方法识别以下类型：<code>string</code>、<code>integer</code>、<code>double</code>、<code>boolean</code>、<code>array</code> 和 <code>null</code>。</p><p><a name="testing-file-uploads"></a></p><h2 id="测试文件上传" tabindex="-1"><a class="header-anchor" href="#测试文件上传" aria-hidden="true">#</a> 测试文件上传</h2><p><code>Illuminate\\Http\\UploadedFile</code> 提供了一个 <code>fake</code> 方法用于生成虚拟的文件或者图像以供测试之用。它可以和 <code>Storage</code> facade 的 <code>fake</code> 方法相结合，大幅度简化了文件上传测试。举个例子，你可以结合这两者的功能非常方便地进行头像上传表单测试：</p><pre><code>&lt;?php

namespace Tests\\Feature;

use Illuminate\\Foundation\\Testing\\RefreshDatabase;
use Illuminate\\Foundation\\Testing\\WithoutMiddleware;
use Illuminate\\Http\\UploadedFile;
use Illuminate\\Support\\Facades\\Storage;
use Tests\\TestCase;

class ExampleTest extends TestCase
{
    public function test_avatars_can_be_uploaded(): void
    {
        Storage::fake(&#39;avatars&#39;);

        $file = UploadedFile::fake()-&gt;image(&#39;avatar.jpg&#39;);

        $response = $this-&gt;post(&#39;/avatar&#39;, [
            &#39;avatar&#39; =&gt; $file,
        ]);

        Storage::disk(&#39;avatars&#39;)-&gt;assertExists($file-&gt;hashName());
    }
}
</code></pre><p>如果你想断言一个给定的文件不存在，则可以使用由 <code>Storage</code> facade 提供的 <code>AssertMissing</code> 方法：</p><pre><code>Storage::fake(&#39;avatars&#39;);

// ...

Storage::disk(&#39;avatars&#39;)-&gt;assertMissing(&#39;missing.jpg&#39;);
</code></pre><p><a name="fake-file-customization"></a></p><h4 id="虚拟文件定制" tabindex="-1"><a class="header-anchor" href="#虚拟文件定制" aria-hidden="true">#</a> 虚拟文件定制</h4><p>当使用 <code>UploadedFile</code> 类提供的 <code>fake</code> 方法创建文件时，你可以指定图片的宽度、高度和大小（以千字节为单位），以便更好地测试你的应用程序的验证规则。</p><pre><code>UploadedFile::fake()-&gt;image(&#39;avatar.jpg&#39;, $width, $height)-&gt;size(100);
</code></pre><p>除创建图像外，你也可以用 <code>create</code> 方法创建其他类型的文件：</p><pre><code>UploadedFile::fake()-&gt;create(&#39;document.pdf&#39;, $sizeInKilobytes);
</code></pre><p>如果需要，可以向该方法传递一个 <code>$mimeType</code> 参数，以显式定义文件应返回的 MIME 类型：</p><pre><code>UploadedFile::fake()-&gt;create(
    &#39;document.pdf&#39;, $sizeInKilobytes, &#39;application/pdf&#39;
);
</code></pre><p><a name="testing-views"></a></p><h2 id="测试视图" tabindex="-1"><a class="header-anchor" href="#测试视图" aria-hidden="true">#</a> 测试视图</h2><p>Laravel 允许在不向应用程序发出模拟 HTTP 请求的情况下独立呈现视图。为此，可以在测试中使用 <code>view</code> 方法。<code>view</code> 方法接受视图名称和一个可选的数据数组。这个方法返回一个 <code>Illuminate\\Testing\\TestView</code> 的实例，它提供了几个方法来方便地断言视图的内容：</p><pre><code>&lt;?php

namespace Tests\\Feature;

use Tests\\TestCase;

class ExampleTest extends TestCase
{
    public function test_a_welcome_view_can_be_rendered(): void
    {
        $view = $this-&gt;view(&#39;welcome&#39;, [&#39;name&#39; =&gt; &#39;Taylor&#39;]);

        $view-&gt;assertSee(&#39;Taylor&#39;);
    }
}
</code></pre><p><code>TestView</code> 对象提供了以下断言方法：<code>assertSee</code>、<code>assertSeeInOrder</code>、<code>assertSeeText</code>、<code>assertSeeTextInOrder</code>、<code>assertDontSee</code> 和 <code>assertDontSeeText</code>。</p><p>如果需要，你可以通过将 <code>TestView</code> 实例转换为一个字符串获得原始的视图内容：</p><pre><code>$contents = (string) $this-&gt;view(&#39;welcome&#39;);
</code></pre><p><a name="sharing-errors"></a></p><h4 id="共享错误" tabindex="-1"><a class="header-anchor" href="#共享错误" aria-hidden="true">#</a> 共享错误</h4><p>一些视图可能依赖于 Laravel 提供的 <a href="./validation#quick-displaying-the-validation-errors">全局错误包</a> 中共享的错误。要在错误包中生成错误消息，可以使用 <code>withViewErrors</code> 方法：</p><pre><code>$view = $this-&gt;withViewErrors([
    &#39;name&#39; =&gt; [&#39;Please provide a valid name.&#39;]
])-&gt;view(&#39;form&#39;);

$view-&gt;assertSee(&#39;Please provide a valid name.&#39;);
</code></pre><p><a name="rendering-blade-and-components"></a></p><h3 id="渲染模板-组件" tabindex="-1"><a class="header-anchor" href="#渲染模板-组件" aria-hidden="true">#</a> 渲染模板 &amp; 组件</h3><p>必要的话，你可以使用 <code>blade</code> 方法来计算和呈现原始的 <a href="./blade">Blade</a> 字符串。与 <code>view</code> 方法一样，<code>blade</code> 方法返回的是 <code>Illuminate\\Testing\\TestView</code> 的实例：</p><pre><code>$view = $this-&gt;blade(
    &#39;&lt;x-component :name=&quot;$name&quot; /&gt;&#39;,
    [&#39;name&#39; =&gt; &#39;Taylor&#39;]
);

$view-&gt;assertSee(&#39;Taylor&#39;);
</code></pre><p>你可以使用 <code>component</code> 方法来评估和渲染 <a href="./blade#components">Blade 组件</a>。类似于 <code>view</code> 方法，<code>component</code> 方法返回一个 <code>Illuminate\\Testing\\TestView</code> 的实例：</p><pre><code>$view = $this-&gt;component(Profile::class, [&#39;name&#39; =&gt; &#39;Taylor&#39;]);

$view-&gt;assertSee(&#39;Taylor&#39;);
</code></pre><p><a name="available-assertions"></a></p><h2 id="可用断言" tabindex="-1"><a class="header-anchor" href="#可用断言" aria-hidden="true">#</a> 可用断言</h2><p><a name="response-assertions"></a></p><h3 id="响应断言" tabindex="-1"><a class="header-anchor" href="#响应断言" aria-hidden="true">#</a> 响应断言</h3><p>Laravel 的 <code>Illuminate\\Testing\\TestResponse</code> 类提供了各种自定义断言方法，你可以在测试应用程序时使用它们。可以在由 <code>json</code>、<code>get</code>、<code>post</code>、<code>put</code> 和 <code>delete</code> 方法返回的响应上访问这些断言：</p>`,132),h=e("div",{class:"collection-method-list",markdown:"1"},[e("p",null,[e("a",{href:"#assert-cookie"},"assertCookie"),e("a",{href:"#assert-cookie-expired"},"assertCookieExpired"),e("a",{href:"#assert-cookie-not-expired"},"assertCookieNotExpired"),e("a",{href:"#assert-cookie-missing"},"assertCookieMissing"),e("a",{href:"#assert-created"},"assertCreated"),e("a",{href:"#assert-dont-see"},"assertDontSee"),e("a",{href:"#assert-dont-see-text"},"assertDontSeeText"),e("a",{href:"#assert-download"},"assertDownload"),e("a",{href:"#assert-exact-json"},"assertExactJson"),e("a",{href:"#assert-forbidden"},"assertForbidden"),e("a",{href:"#assert-header"},"assertHeader"),e("a",{href:"#assert-header-missing"},"assertHeaderMissing"),e("a",{href:"#assert-json"},"assertJson"),e("a",{href:"#assert-json-count"},"assertJsonCount"),e("a",{href:"#assert-json-fragment"},"assertJsonFragment"),e("a",{href:"#assert-json-is-array"},"assertJsonIsArray"),e("a",{href:"#assert-json-is-object"},"assertJsonIsObject"),e("a",{href:"#assert-json-missing"},"assertJsonMissing"),e("a",{href:"#assert-json-missing-exact"},"assertJsonMissingExact"),e("a",{href:"#assert-json-missing-validation-errors"},"assertJsonMissingValidationErrors"),e("a",{href:"#assert-json-path"},"assertJsonPath"),e("a",{href:"#assert-json-missing-path"},"assertJsonMissingPath"),e("a",{href:"#assert-json-structure"},"assertJsonStructure"),e("a",{href:"#assert-json-validation-errors"},"assertJsonValidationErrors"),e("a",{href:"#assert-json-validation-error-for"},"assertJsonValidationErrorFor"),e("a",{href:"#assert-location"},"assertLocation"),e("a",{href:"#assert-content"},"assertContent"),e("a",{href:"#assert-no-content"},"assertNoContent"),e("a",{href:"#assert-streamed-content"},"assertStreamedContent"),e("a",{href:"#assert-not-found"},"assertNotFound"),e("a",{href:"#assert-ok"},"assertOk"),e("a",{href:"#assert-plain-cookie"},"assertPlainCookie"),e("a",{href:"#assert-redirect"},"assertRedirect"),e("a",{href:"#assert-redirect-contains"},"assertRedirectContains"),e("a",{href:"#assert-redirect-to-route"},"assertRedirectToRoute"),e("a",{href:"#assert-redirect-to-signed-route"},"assertRedirectToSignedRoute"),e("a",{href:"#assert-see"},"assertSee"),e("a",{href:"#assert-see-in-order"},"assertSeeInOrder"),e("a",{href:"#assert-see-text"},"assertSeeText"),e("a",{href:"#assert-see-text-in-order"},"assertSeeTextInOrder"),e("a",{href:"#assert-session-has"},"assertSessionHas"),e("a",{href:"#assert-session-has-input"},"assertSessionHasInput"),e("a",{href:"#assert-session-has-all"},"assertSessionHasAll"),e("a",{href:"#assert-session-has-errors"},"assertSessionHasErrors"),e("a",{href:"#assert-session-has-errors-in"},"assertSessionHasErrorsIn"),e("a",{href:"#assert-session-has-no-errors"},"assertSessionHasNoErrors"),e("a",{href:"#assert-session-doesnt-have-errors"},"assertSessionDoesntHaveErrors"),e("a",{href:"#assert-session-missing"},"assertSessionMissing"),e("a",{href:"#assert-status"},"assertStatus"),e("a",{href:"#assert-successful"},"assertSuccessful"),e("a",{href:"#assert-unauthorized"},"assertUnauthorized"),e("a",{href:"#assert-unprocessable"},"assertUnprocessable"),e("a",{href:"#assert-valid"},"assertValid"),e("a",{href:"#assert-invalid"},"assertInvalid"),e("a",{href:"#assert-view-has"},"assertViewHas"),e("a",{href:"#assert-view-has-all"},"assertViewHasAll"),e("a",{href:"#assert-view-is"},"assertViewIs"),e("a",{href:"#assert-view-missing"},"assertViewMissing")])],-1),l=a(`<p><a name="assert-cookie"></a></p><h4 id="assertcookie" tabindex="-1"><a class="header-anchor" href="#assertcookie" aria-hidden="true">#</a> assertCookie</h4><p>断言响应中包含给定的 cookie：</p><pre><code>$response-&gt;assertCookie($cookieName, $value = null);
</code></pre><p><a name="assert-cookie-expired"></a></p><h4 id="assertcookieexpired" tabindex="-1"><a class="header-anchor" href="#assertcookieexpired" aria-hidden="true">#</a> assertCookieExpired</h4><p>断言响应包含给定的过期的 cookie：</p><pre><code>$response-&gt;assertCookieExpired($cookieName);
</code></pre><p><a name="assert-cookie-not-expired"></a></p><h4 id="assertcookienotexpired" tabindex="-1"><a class="header-anchor" href="#assertcookienotexpired" aria-hidden="true">#</a> assertCookieNotExpired</h4><p>断言响应包含给定的未过期的 cookie：</p><pre><code>$response-&gt;assertCookieNotExpired($cookieName);
</code></pre><p><a name="assert-cookie-missing"></a></p><h4 id="assertcookiemissing" tabindex="-1"><a class="header-anchor" href="#assertcookiemissing" aria-hidden="true">#</a> assertCookieMissing</h4><p>断言响应不包含给定的 cookie:</p><pre><code>$response-&gt;assertCookieMissing($cookieName);
</code></pre><p><a name="assert-created"></a></p><h4 id="assertcreated" tabindex="-1"><a class="header-anchor" href="#assertcreated" aria-hidden="true">#</a> assertCreated</h4><p>断言做状态代码为 201 的响应：</p><pre><code>$response-&gt;assertCreated();
</code></pre><p><a name="assert-dont-see"></a></p><h4 id="assertdontsee" tabindex="-1"><a class="header-anchor" href="#assertdontsee" aria-hidden="true">#</a> assertDontSee</h4><p>断言给定的字符串不包含在响应中。除非传递第二个参数 <code>false</code>，否则此断言将给定字符串进行转义后匹配：</p><pre><code>$response-&gt;assertDontSee($value, $escaped = true);
</code></pre><p><a name="assert-dont-see-text"></a></p><h4 id="assertdontseetext" tabindex="-1"><a class="header-anchor" href="#assertdontseetext" aria-hidden="true">#</a> assertDontSeeText</h4><p>断言给定的字符串不包含在响应文本中。除非你传递第二个参数 <code>false</code>，否则该断言将自动转义给定的字符串。该方法将在做出断言之前将响应内容传递给 PHP 的 <code>strip_tags</code> 函数：</p><pre><code>$response-&gt;assertDontSeeText($value, $escaped = true);
</code></pre><p><a name="assert-download"></a></p><h4 id="assertdownload" tabindex="-1"><a class="header-anchor" href="#assertdownload" aria-hidden="true">#</a> assertDownload</h4><p>断言响应是「下载」。通常，这意味着返回响应的调用路由返回了 <code>Response::download</code> 响应、<code>BinaryFileResponse</code> 或 <code>Storage::download</code> 响应：</p><pre><code>$response-&gt;assertDownload();
</code></pre><p>如果你愿意，你可以断言可下载的文件被分配了一个给定的文件名：</p><pre><code>$response-&gt;assertDownload(&#39;image.jpg&#39;);
</code></pre><p><a name="assert-exact-json"></a></p><h4 id="assertexactjson" tabindex="-1"><a class="header-anchor" href="#assertexactjson" aria-hidden="true">#</a> assertExactJson</h4><p>断言响应包含与给定 JSON 数据的完全匹配：</p><pre><code>$response-&gt;assertExactJson(array $data);
</code></pre><p><a name="assert-forbidden"></a></p><h4 id="assertforbidden" tabindex="-1"><a class="header-anchor" href="#assertforbidden" aria-hidden="true">#</a> assertForbidden</h4><p>断言响应中有禁止访问 (403) 状态码：</p><pre><code>$response-&gt;assertForbidden();
</code></pre><p><a name="assert-header"></a></p><h4 id="assertheader" tabindex="-1"><a class="header-anchor" href="#assertheader" aria-hidden="true">#</a> assertHeader</h4><p>断言给定的 header 在响应中存在：</p><pre><code>$response-&gt;assertHeader($headerName, $value = null);
</code></pre><p><a name="assert-header-missing"></a></p><h4 id="assertheadermissing" tabindex="-1"><a class="header-anchor" href="#assertheadermissing" aria-hidden="true">#</a> assertHeaderMissing</h4><p>断言给定的 header 在响应中不存在：</p><pre><code>$response-&gt;assertHeaderMissing($headerName);
</code></pre><p><a name="assert-json"></a></p><h4 id="assertjson" tabindex="-1"><a class="header-anchor" href="#assertjson" aria-hidden="true">#</a> assertJson</h4><p>断言响应包含给定的 JSON 数据：</p><pre><code>$response-&gt;assertJson(array $data, $strict = false);
</code></pre><p><code>AssertJson</code> 方法将响应转换为数组，并利用 <code>PHPUnit::assertArraySubset</code> 验证给定数组是否存在于应用程序返回的 JSON 响应中。因此，如果 JSON 响应中还有其他属性，则只要存在给定的片段，此测试仍将通过。</p><p><a name="assert-json-count"></a></p><h4 id="assertjsoncount" tabindex="-1"><a class="header-anchor" href="#assertjsoncount" aria-hidden="true">#</a> assertJsonCount</h4><p>断言响应 JSON 中有一个数组，其中包含给定键的预期元素数量：</p><pre><code>$response-&gt;assertJsonCount($count, $key = null);
</code></pre><p><a name="assert-json-fragment"></a></p><h4 id="assertjsonfragment" tabindex="-1"><a class="header-anchor" href="#assertjsonfragment" aria-hidden="true">#</a> assertJsonFragment</h4><p>断言响应包含给定 JSON 片段：</p><pre><code>Route::get(&#39;/users&#39;, function () {
    return [
        &#39;users&#39; =&gt; [
            [
                &#39;name&#39; =&gt; &#39;Taylor Otwell&#39;,
            ],
        ],
    ];
});

$response-&gt;assertJsonFragment([&#39;name&#39; =&gt; &#39;Taylor Otwell&#39;]);
</code></pre><p><a name="assert-json-is-array"></a></p><h4 id="assertjsonisarray" tabindex="-1"><a class="header-anchor" href="#assertjsonisarray" aria-hidden="true">#</a> assertJsonIsArray</h4><p>断言响应的 JSON 是一个数组。</p><pre><code>$response-&gt;assertJsonIsArray();
</code></pre><p><a name="assert-json-is-object"></a></p><h4 id="assertjsonisobject" tabindex="-1"><a class="header-anchor" href="#assertjsonisobject" aria-hidden="true">#</a> assertJsonIsObject</h4><p>断言响应的 JSON 是一个对象。</p><pre><code>$response-&gt;assertJsonIsObject();
</code></pre><p><a name="assert-json-missing"></a></p><h4 id="assertjsonmissing" tabindex="-1"><a class="header-anchor" href="#assertjsonmissing" aria-hidden="true">#</a> assertJsonMissing</h4><p>断言响应未包含给定的 JSON 片段：</p><pre><code>$response-&gt;assertJsonMissing(array $data);
</code></pre><p><a name="assert-json-missing-exact"></a></p><h4 id="assertjsonmissingexact" tabindex="-1"><a class="header-anchor" href="#assertjsonmissingexact" aria-hidden="true">#</a> assertJsonMissingExact</h4><p>断言响应不包含确切的 JSON 片段：</p><pre><code>$response-&gt;assertJsonMissingExact(array $data);
</code></pre><p><a name="assert-json-missing-validation-errors"></a></p><h4 id="assertjsonmissingvalidationerrors" tabindex="-1"><a class="header-anchor" href="#assertjsonmissingvalidationerrors" aria-hidden="true">#</a> assertJsonMissingValidationErrors</h4><p>断言响应响应对于给定的键没有 JSON 验证错误：</p><pre><code>$response-&gt;assertJsonMissingValidationErrors($keys);
</code></pre><blockquote><p><strong>提示</strong> 更通用的 <a href="#assert-valid">assertValid</a> 方法可用于断言响应没有以 JSON 形式返回的验证错误<strong>并且</strong>没有错误被闪现到会话存储中。</p></blockquote><p><a name="assert-json-path"></a></p><h4 id="assertjsonpath" tabindex="-1"><a class="header-anchor" href="#assertjsonpath" aria-hidden="true">#</a> assertJsonPath</h4><p>断言响应包含指定路径上的给定数据：</p><pre><code>$response-&gt;assertJsonPath($path, $expectedValue);
</code></pre><p>例如，如果你的应用程序返回的 JSON 响应包含以下数据：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;user&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Steve Schoger&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你可以断言 <code>user</code> 对象的 <code>name</code> 属性匹配给定值，如下所示：</p><pre><code>$response-&gt;assertJsonPath(&#39;user.name&#39;, &#39;Steve Schoger&#39;);
</code></pre><p><a name="assert-json-missing-path"></a></p><h4 id="assertjsonmissingpath" tabindex="-1"><a class="header-anchor" href="#assertjsonmissingpath" aria-hidden="true">#</a> assertJsonMissingPath</h4><p>断言响应具有给定的 JSON 结构：</p><pre><code>$response-&gt;assertJsonMissingPath($path);
</code></pre><p>例如，如果你的应用程序返回的 JSON 响应包含以下数据：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;user&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Steve Schoger&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你可以断言它不包含 <code>user</code> 对象的 <code>email</code> 属性。</p><pre><code>$response-&gt;assertJsonMissingPath(&#39;user.email&#39;);
</code></pre><p><a name="assert-json-structure"></a></p><h4 id="assertjsonstructure" tabindex="-1"><a class="header-anchor" href="#assertjsonstructure" aria-hidden="true">#</a> assertJsonStructure</h4><p>断言响应具有给定的 JSON 结构：</p><pre><code>$response-&gt;assertJsonStructure(array $structure);
</code></pre><p>例如，如果你的应用程序返回的 JSON 响应包含以下数据：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;user&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Steve Schoger&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你可以断言 JSON 结构符合你的期望，如下所示：</p><pre><code>$response-&gt;assertJsonStructure([
    &#39;user&#39; =&gt; [
        &#39;name&#39;,
    ]
]);
</code></pre><p>有时，你的应用程序返回的 JSON 响应可能包含对象数组：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;user&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Steve Schoger&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;age&quot;</span><span class="token operator">:</span> <span class="token number">55</span><span class="token punctuation">,</span>
            <span class="token property">&quot;location&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Earth&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Mary Schoger&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;age&quot;</span><span class="token operator">:</span> <span class="token number">60</span><span class="token punctuation">,</span>
            <span class="token property">&quot;location&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Earth&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这种情况下，你可以使用 <code>*</code> 字符来断言数组中所有对象的结构：</p><pre><code>$response-&gt;assertJsonStructure([
    &#39;user&#39; =&gt; [
        &#39;*&#39; =&gt; [
             &#39;name&#39;,
             &#39;age&#39;,
             &#39;location&#39;
        ]
    ]
]);
</code></pre><p><a name="assert-json-validation-errors"></a></p><h4 id="assertjsonvalidationerrors" tabindex="-1"><a class="header-anchor" href="#assertjsonvalidationerrors" aria-hidden="true">#</a> assertJsonValidationErrors</h4><p>断言响应具有给定键的给定 JSON 验证错误。在断言验证错误作为 JSON 结构返回而不是闪现到会话的响应时，应使用此方法：</p><pre><code>$response-&gt;assertJsonValidationErrors(array $data, $responseKey = &#39;errors&#39;);
</code></pre><blockquote><p><strong>技巧</strong> 更通用的 <a href="#assert-invalid">assertInvalid</a> 方法可用于断言响应具有以 JSON 形式返回的验证错误<strong>或</strong>错误已闪存到会话存储。</p></blockquote><p><a name="assert-json-validation-error-for"></a></p><h4 id="assertjsonvalidationerrorfor" tabindex="-1"><a class="header-anchor" href="#assertjsonvalidationerrorfor" aria-hidden="true">#</a> assertJsonValidationErrorFor</h4><p>断言响应对给定键有任何 JSON 验证错误：</p><pre><code>$response-&gt;assertJsonValidationErrorFor(string $key, $responseKey = &#39;errors&#39;);
</code></pre><p><a name="assert-location"></a></p><h4 id="assertlocation" tabindex="-1"><a class="header-anchor" href="#assertlocation" aria-hidden="true">#</a> assertLocation</h4><p>断言响应在 <code>Location</code> 头部中具有给定的 URI 值：</p><pre><code>$response-&gt;assertLocation($uri);
</code></pre><p><a name="assert-content"></a></p><h4 id="assertcontent" tabindex="-1"><a class="header-anchor" href="#assertcontent" aria-hidden="true">#</a> assertContent</h4><p>断言给定的字符串与响应内容匹配。</p><pre><code>$response-&gt;assertContent($value);
</code></pre><p><a name="assert-no-content"></a></p><h4 id="assertnocontent" tabindex="-1"><a class="header-anchor" href="#assertnocontent" aria-hidden="true">#</a> assertNoContent</h4><p>断言响应具有给定的 HTTP 状态码且没有内容：</p><pre><code>$response-&gt;assertNoContent($status = 204);
</code></pre><p><a name="assert-streamed-content"></a></p><h4 id="assertstreamedcontent" tabindex="-1"><a class="header-anchor" href="#assertstreamedcontent" aria-hidden="true">#</a> assertStreamedContent</h4><p>断言给定的字符串与流式响应的内容相匹配。</p><pre><code>$response-&gt;assertStreamedContent($value);
</code></pre><p><a name="assert-not-found"></a></p><h4 id="assertnotfound" tabindex="-1"><a class="header-anchor" href="#assertnotfound" aria-hidden="true">#</a> assertNotFound</h4><p>断言响应具有未找到（404）HTTP 状态码：</p><pre><code>$response-&gt;assertNotFound();
</code></pre><p><a name="assert-ok"></a></p><h4 id="assertok" tabindex="-1"><a class="header-anchor" href="#assertok" aria-hidden="true">#</a> assertOk</h4><p>断言响应有 200 状态码：</p><pre><code>$response-&gt;assertOk();
</code></pre><p><a name="assert-plain-cookie"></a></p><h4 id="assertplaincookie" tabindex="-1"><a class="header-anchor" href="#assertplaincookie" aria-hidden="true">#</a> assertPlainCookie</h4><p>断言响应包含给定的 cookie（未加密）:</p><pre><code>$response-&gt;assertPlainCookie($cookieName, $value = null);
</code></pre><p><a name="assert-redirect"></a></p><h4 id="assertredirect" tabindex="-1"><a class="header-anchor" href="#assertredirect" aria-hidden="true">#</a> assertRedirect</h4><p>断言响应会重定向到给定的 URI：</p><pre><code>$response-&gt;assertRedirect($uri);
</code></pre><p><a name="assert-redirect-contains"></a></p><h4 id="assertredirectcontains" tabindex="-1"><a class="header-anchor" href="#assertredirectcontains" aria-hidden="true">#</a> assertRedirectContains</h4><p>断言响应是否重定向到包含给定字符串的 URI：</p><pre><code>$response-&gt;assertRedirectContains($string);
</code></pre><p><a name="assert-redirect-to-route"></a></p><h4 id="assertredirecttoroute" tabindex="-1"><a class="header-anchor" href="#assertredirecttoroute" aria-hidden="true">#</a> assertRedirectToRoute</h4><p>断言响应是对给定的<a href="./routing#named-routes">命名路由</a>的重定向。</p><pre><code>$response-&gt;assertRedirectToRoute($name = null, $parameters = []);
</code></pre><p><a name="assert-redirect-to-signed-route"></a></p><h4 id="assertredirecttosignedroute" tabindex="-1"><a class="header-anchor" href="#assertredirecttosignedroute" aria-hidden="true">#</a> assertRedirectToSignedRoute</h4><p>断言响应是对给定<a href="./urls#signed-urls">签名路由</a>的重定向：</p><pre><code>$response-&gt;assertRedirectToSignedRoute($name = null, $parameters = []);
</code></pre><p><a name="assert-see"></a></p><h4 id="assertsee" tabindex="-1"><a class="header-anchor" href="#assertsee" aria-hidden="true">#</a> assertSee</h4><p>断言给定的字符串包含在响应中。除非传递第二个参数 <code>false</code>，否则此断言将给定字符串进行转义后匹配：</p><pre><code>$response-&gt;assertSee($value, $escaped = true);
</code></pre><p><a name="assert-see-in-order"></a></p><h4 id="assertseeinorder" tabindex="-1"><a class="header-anchor" href="#assertseeinorder" aria-hidden="true">#</a> assertSeeInOrder</h4><p>断言给定的字符串按顺序包含在响应中。除非传递第二个参数 <code>false</code>，否则此断言将给定字符串进行转义后匹配：</p><pre><code>$response-&gt;assertSeeInOrder(array $values, $escaped = true);
</code></pre><p><a name="assert-see-text"></a></p><h4 id="assertseetext" tabindex="-1"><a class="header-anchor" href="#assertseetext" aria-hidden="true">#</a> assertSeeText</h4><p>断言给定字符串包含在响应文本中。除非传递第二个参数 <code>false</code>，否则此断言将给定字符串进行转义后匹配。在做出断言之前，响应内容将被传递到 PHP 的 <code>strip_tags</code> 函数：</p><pre><code>$response-&gt;assertSeeText($value, $escaped = true);
</code></pre><p><a name="assert-see-text-in-order"></a></p><h4 id="assertseetextinorder" tabindex="-1"><a class="header-anchor" href="#assertseetextinorder" aria-hidden="true">#</a> assertSeeTextInOrder</h4><p>断言给定的字符串按顺序包含在响应的文本中。除非传递第二个参数 <code>false</code>，否则此断言将给定字符串进行转义后匹配。在做出断言之前，响应内容将被传递到 PHP 的 <code>strip_tags</code> 函数：</p><pre><code>$response-&gt;assertSeeTextInOrder(array $values, $escaped = true);
</code></pre><p><a name="assert-session-has"></a></p><h4 id="assertsessionhas" tabindex="-1"><a class="header-anchor" href="#assertsessionhas" aria-hidden="true">#</a> assertSessionHas</h4><p>断言 Session 包含给定的数据段：</p><pre><code>$response-&gt;assertSessionHas($key, $value = null);
</code></pre><p>如果需要，可以提供一个闭包作为 <code>assertSessionHas</code> 方法的第二个参数。如果闭包返回 <code>true</code>，则断言将通过：</p><pre><code>$response-&gt;assertSessionHas($key, function (User $value) {
    return $value-&gt;name === &#39;Taylor Otwell&#39;;
});
</code></pre><p><a name="assert-session-has-input"></a></p><h4 id="assertsessionhasinput" tabindex="-1"><a class="header-anchor" href="#assertsessionhasinput" aria-hidden="true">#</a> assertSessionHasInput</h4>`,189),u={href:"/docs/laravel/9.x/responses#redirecting-with-flashed-session-data",target:"_blank",rel:"noopener noreferrer"},g=a(`<pre><code>$response-&gt;assertSessionHasInput($key, $value = null);
</code></pre><p>如果需要，可以提供一个闭包作为 <code>assertSessionHasInput</code> 方法的第二个参数。如果闭包返回 <code>true</code>，则断言将通过：</p><pre><code>$response-&gt;assertSessionHasInput($key, function (string $value) {
    return Crypt::decryptString($value) === &#39;secret&#39;;
});
</code></pre><p><a name="assert-session-has-all"></a></p><h4 id="assertsessionhasall" tabindex="-1"><a class="header-anchor" href="#assertsessionhasall" aria-hidden="true">#</a> assertSessionHasAll</h4><p>断言 Session 中具有给定的键 / 值对列表：</p><pre><code>$response-&gt;assertSessionHasAll(array $data);
</code></pre><p>例如，如果你的应用程序会话包含 <code>name</code> 和 <code>status</code> 键，则可以断言它们存在并且具有指定的值，如下所示：</p><pre><code>$response-&gt;assertSessionHasAll([
    &#39;name&#39; =&gt; &#39;Taylor Otwell&#39;,
    &#39;status&#39; =&gt; &#39;active&#39;,
]);
</code></pre><p><a name="assert-session-has-errors"></a></p><h4 id="assertsessionhaserrors" tabindex="-1"><a class="header-anchor" href="#assertsessionhaserrors" aria-hidden="true">#</a> assertSessionHasErrors</h4><p>断言 session 包含给定 <code>$keys</code> 的 Laravel 验证错误。如果 <code>$keys</code> 是关联数组，则断言 session 包含每个字段（key）的特定错误消息（value）。测试将闪存验证错误到 session 的路由时，应使用此方法，而不是将其作为 JSON 结构返回：</p><pre><code>$response-&gt;assertSessionHasErrors(
    array $keys, $format = null, $errorBag = &#39;default&#39;
);
</code></pre><p>例如，要断言 <code>name</code> 和 <code>email</code> 字段具有已闪存到 session 的验证错误消息，可以调用 <code>assertSessionHasErrors</code> 方法，如下所示：</p><pre><code>$response-&gt;assertSessionHasErrors([&#39;name&#39;, &#39;email&#39;]);
</code></pre><p>或者，你可以断言给定字段具有特定的验证错误消息：</p><pre><code>$response-&gt;assertSessionHasErrors([
    &#39;name&#39; =&gt; &#39;The given name was invalid.&#39;
]);
</code></pre><blockquote><p><strong>注意</strong> 更加通用的 <a href="#assert-invalid">assertInvalid</a> 方法可以用来断言一个响应有验证错误，以JSON形式返回，<strong>或</strong> 将错误被闪存到会话存储中。</p></blockquote><p><a name="assert-session-has-errors-in"></a></p><h4 id="assertsessionhaserrorsin" tabindex="-1"><a class="header-anchor" href="#assertsessionhaserrorsin" aria-hidden="true">#</a> assertSessionHasErrorsIn</h4><p>断言会话在特定的<a href="./validation#named-error-bags">错误包</a>中包含给定 <code>$keys</code> 的错误。如果 <code>$keys</code> 是一个关联数组，则断言该 session 在错误包内包含每个字段（键）的特定错误消息（值）：</p><pre><code>$response-&gt;assertSessionHasErrorsIn($errorBag, $keys = [], $format = null);
</code></pre><p><a name="assert-session-has-no-errors"></a></p><h4 id="assertsessionhasnoerrors" tabindex="-1"><a class="header-anchor" href="#assertsessionhasnoerrors" aria-hidden="true">#</a> assertSessionHasNoErrors</h4><p>断言 session 没有验证错误：</p><pre><code>$response-&gt;assertSessionHasNoErrors();
</code></pre><p><a name="assert-session-doesnt-have-errors"></a></p><h4 id="assertsessiondoesnthaveerrors" tabindex="-1"><a class="header-anchor" href="#assertsessiondoesnthaveerrors" aria-hidden="true">#</a> assertSessionDoesntHaveErrors</h4><p>断言会话对给定键没有验证错误：</p><pre><code>$response-&gt;assertSessionDoesntHaveErrors($keys = [], $format = null, $errorBag = &#39;default&#39;);
</code></pre><blockquote><p><strong>注意</strong> 更加通用的 <a href="#assert-valid">assertValid</a> 方法可以用来断言一个响应没有以JSON形式返回的验证错误，<strong>同时</strong> 不会将错误被闪存到会话存储中。</p></blockquote><p><a name="assert-session-missing"></a></p><h4 id="assertsessionmissing" tabindex="-1"><a class="header-anchor" href="#assertsessionmissing" aria-hidden="true">#</a> assertSessionMissing</h4><p>断言 session 中缺少指定的 $key：</p><pre><code>$response-&gt;assertSessionMissing($key);
</code></pre><p><a name="assert-status"></a></p><h4 id="assertstatus" tabindex="-1"><a class="header-anchor" href="#assertstatus" aria-hidden="true">#</a> assertStatus</h4><p>断言响应指定的 http 状态码：</p><pre><code>$response-&gt;assertStatus($code);
</code></pre><p><a name="assert-successful"></a></p><h4 id="assertsuccessful" tabindex="-1"><a class="header-anchor" href="#assertsuccessful" aria-hidden="true">#</a> assertSuccessful</h4><p>断言响应一个成功的状态码 (&gt;= 200 且 &lt; 300) :</p><pre><code>$response-&gt;assertSuccessful();
</code></pre><p><a name="assert-unauthorized"></a></p><h4 id="assertunauthorized" tabindex="-1"><a class="header-anchor" href="#assertunauthorized" aria-hidden="true">#</a> assertUnauthorized</h4><p>断言一个未认证的状态码 (401)：</p><pre><code>$response-&gt;assertUnauthorized();
</code></pre><p><a name="assert-unprocessable"></a></p><h4 id="assertunprocessable" tabindex="-1"><a class="header-anchor" href="#assertunprocessable" aria-hidden="true">#</a> assertUnprocessable</h4><p>断言响应具有不可处理的实体 (422) HTTP 状态代码：</p><pre><code>$response-&gt;assertUnprocessable();
</code></pre><p><a name="assert-valid"></a></p><h4 id="assertvalid" tabindex="-1"><a class="header-anchor" href="#assertvalid" aria-hidden="true">#</a> assertValid</h4><p>断言响应对给定键没有验证错误。此方法可用于断言验证错误作为 JSON 结构返回或验证错误已闪现到会话的响应：</p><pre><code>// 断言不存在验证错误...
$response-&gt;assertValid();

// 断言给定的键没有验证错误...
$response-&gt;assertValid([&#39;name&#39;, &#39;email&#39;]);
</code></pre><p><a name="assert-invalid"></a></p><h4 id="assertinvalid" tabindex="-1"><a class="header-anchor" href="#assertinvalid" aria-hidden="true">#</a> assertInvalid</h4><p>断言响应对给定键有验证错误。此方法可用于断言验证错误作为 JSON 结构返回或验证错误已闪存到会话的响应：</p><pre><code>$response-&gt;assertInvalid([&#39;name&#39;, &#39;email&#39;]);
</code></pre><p>你还可以断言给定键具有特定的验证错误消息。这样做时，你可以提供整条消息或仅提供一部分消息：</p><pre><code>$response-&gt;assertInvalid([
    &#39;name&#39; =&gt; &#39;The name field is required.&#39;,
    &#39;email&#39; =&gt; &#39;valid email address&#39;,
]);
</code></pre><p><a name="assert-view-has"></a></p><h4 id="assertviewhas" tabindex="-1"><a class="header-anchor" href="#assertviewhas" aria-hidden="true">#</a> assertViewHas</h4><p>断言为响应视图提供了一个键值对数据：</p><pre><code>$response-&gt;assertViewHas($key, $value = null);
</code></pre><p>将闭包作为第二个参数传递给 <code>assertViewHas</code> 方法将允许你检查并针对特定的视图数据做出断言：</p><pre><code>$response-&gt;assertViewHas(&#39;user&#39;, function (User $user) {
    return $user-&gt;name === &#39;Taylor&#39;;
});
</code></pre><p>此外，视图数据可以作为数组变量访问响应，让你可以方便地检查它：</p><pre><code>$this-&gt;assertEquals(&#39;Taylor&#39;, $response[&#39;name&#39;]);
</code></pre><p><a name="assert-view-has-all"></a></p><h4 id="assertviewhasall" tabindex="-1"><a class="header-anchor" href="#assertviewhasall" aria-hidden="true">#</a> assertViewHasAll</h4><p>断言响应视图具有给定的数据列表：</p><pre><code>$response-&gt;assertViewHasAll(array $data);
</code></pre><p>该方法可用于断言该视图仅包含与给定键匹配的数据：</p><pre><code>$response-&gt;assertViewHasAll([
    &#39;name&#39;,
    &#39;email&#39;,
]);
</code></pre><p>或者，你可以断言该视图数据存在并且具有特定值：</p><pre><code>$response-&gt;assertViewHasAll([
    &#39;name&#39; =&gt; &#39;Taylor Otwell&#39;,
    &#39;email&#39; =&gt; &#39;taylor@example.com,&#39;,
]);
</code></pre><p><a name="assert-view-is"></a></p><h4 id="assertviewis" tabindex="-1"><a class="header-anchor" href="#assertviewis" aria-hidden="true">#</a> assertViewIs</h4><p>断言当前路由返回的的视图是给定的视图：</p><pre><code>$response-&gt;assertViewIs($value);
</code></pre><p><a name="assert-view-missing"></a></p><h4 id="assertviewmissing" tabindex="-1"><a class="header-anchor" href="#assertviewmissing" aria-hidden="true">#</a> assertViewMissing</h4><p>断言给定的数据键不可用于应用程序响应中返回的视图：</p><pre><code>$response-&gt;assertViewMissing($key);
</code></pre><p><a name="authentication-assertions"></a></p><h3 id="身份验证断言" tabindex="-1"><a class="header-anchor" href="#身份验证断言" aria-hidden="true">#</a> 身份验证断言</h3><p>Laravel 还提供了各种与身份验证相关的断言，你可以在应用程序的功能测试中使用它们。请注意，这些方法是在测试类本身上调用的，而不是由诸如 <code>get</code> 和 <code>post</code> 等方法返回的 <code>Illuminate\\Testing\\TestResponse</code> 实例。</p><p><a name="assert-authenticated"></a></p><h4 id="assertauthenticated" tabindex="-1"><a class="header-anchor" href="#assertauthenticated" aria-hidden="true">#</a> assertAuthenticated</h4><p>断言用户已通过身份验证：</p><pre><code>$this-&gt;assertAuthenticated($guard = null);
</code></pre><p><a name="assert-guest"></a></p><h4 id="assertguest" tabindex="-1"><a class="header-anchor" href="#assertguest" aria-hidden="true">#</a> assertGuest</h4><p>断言用户未通过身份验证：</p><pre><code>$this-&gt;assertGuest($guard = null);
</code></pre><p><a name="assert-authenticated-as"></a></p><h4 id="assertauthenticatedas" tabindex="-1"><a class="header-anchor" href="#assertauthenticatedas" aria-hidden="true">#</a> assertAuthenticatedAs</h4><p>断言特定用户已通过身份验证：</p><pre><code>$this-&gt;assertAuthenticatedAs($user, $guard = null);
</code></pre><p><a name="validation-assertions"></a></p><h2 id="验证断言" tabindex="-1"><a class="header-anchor" href="#验证断言" aria-hidden="true">#</a> 验证断言</h2><p>Laravel 提供了两个主要的验证相关的断言，你可以用它来确保在你的请求中提供的数据是有效或无效的。</p><p><a name="validation-assert-valid"></a></p><h4 id="assertvalid-1" tabindex="-1"><a class="header-anchor" href="#assertvalid-1" aria-hidden="true">#</a> assertValid</h4><p>断言响应对于给定的键没有验证错误。该方法可用于断言响应中的验证错误是以 JSON 结构返回的，或者验证错误已经闪现到会话中。</p><pre><code>// 断言没有验证错误存在...
$response-&gt;assertValid();

//断言给定的键没有验证错误...
$response-&gt;assertValid([&#39;name&#39;, &#39;email&#39;]);
</code></pre><p><a name="validation-assert-invalid"></a></p><h4 id="assertinvalid-1" tabindex="-1"><a class="header-anchor" href="#assertinvalid-1" aria-hidden="true">#</a> assertInvalid</h4><p>断言响应对给定的键有验证错误。这个方法可用于断言响应中的验证错误是以 JSON 结构返回的，或者验证错误已经被闪现到会话中。</p><pre><code>$response-&gt;assertInvalid([&#39;name&#39;, &#39;email&#39;]);
</code></pre><p>你也可以断言一个给定的键有一个特定的验证错误信息。当这样做时，你可以提供整个消息或只提供消息的一小部分。</p><pre><code>$response-&gt;assertInvalid([
    &#39;name&#39; =&gt; &#39;The name field is required.&#39;,
    &#39;email&#39; =&gt; &#39;valid email address&#39;,
]);
</code></pre>`,113);function m(f,$){const n=t("ExternalLinkIcon");return o(),i("div",null,[p,h,l,e("p",null,[s("session 在 "),e("a",u,[s("闪存输入数组"),d(n)]),s(" 中断言具有给定值：")]),g])}const x=r(c,[["render",m],["__file","http-tests.html.vue"]]);export{x as default};
