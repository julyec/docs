import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as t,c as n,a as s,b as e}from"./app-8cdff07c.js";const r={},o=s(`<h1 id="http-tests" tabindex="-1"><a class="header-anchor" href="#http-tests" aria-hidden="true">#</a> HTTP Tests</h1><ul><li><a href="#introduction">Introduction</a></li><li><a href="#making-requests">Making Requests</a><ul><li><a href="#customizing-request-headers">Customizing Request Headers</a></li><li><a href="#cookies">Cookies</a></li><li><a href="#session-and-authentication">Session / Authentication</a></li><li><a href="#debugging-responses">Debugging Responses</a></li><li><a href="#exception-handling">Exception Handling</a></li></ul></li><li><a href="#testing-json-apis">Testing JSON APIs</a><ul><li><a href="#fluent-json-testing">Fluent JSON Testing</a></li></ul></li><li><a href="#testing-file-uploads">Testing File Uploads</a></li><li><a href="#testing-views">Testing Views</a><ul><li><a href="#rendering-blade-and-components">Rendering Blade &amp; Components</a></li></ul></li><li><a href="#available-assertions">Available Assertions</a><ul><li><a href="#response-assertions">Response Assertions</a></li><li><a href="#authentication-assertions">Authentication Assertions</a></li><li><a href="#validation-assertions">Validation Assertions</a></li></ul></li></ul><p><a name="introduction"></a></p><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p>Laravel provides a very fluent API for making HTTP requests to your application and examining the responses. For example, take a look at the feature test defined below:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">namespace</span> <span class="token package">Tests<span class="token punctuation">\\</span>Feature</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Tests<span class="token punctuation">\\</span>TestCase</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">ExampleTest</span> <span class="token keyword">extends</span> <span class="token class-name">TestCase</span>
<span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * A basic test example.
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">test_the_application_returns_a_successful_response</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$response</span> <span class="token operator">=</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token variable">$response</span><span class="token operator">-&gt;</span><span class="token function">assertStatus</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The <code>get</code> method makes a <code>GET</code> request into the application, while the <code>assertStatus</code> method asserts that the returned response should have the given HTTP status code. In addition to this simple assertion, Laravel also contains a variety of assertions for inspecting the response headers, content, JSON structure, and more.</p><p><a name="making-requests"></a></p><h2 id="making-requests" tabindex="-1"><a class="header-anchor" href="#making-requests" aria-hidden="true">#</a> Making Requests</h2><p>To make a request to your application, you may invoke the <code>get</code>, <code>post</code>, <code>put</code>, <code>patch</code>, or <code>delete</code> methods within your test. These methods do not actually issue a &quot;real&quot; HTTP request to your application. Instead, the entire network request is simulated internally.</p><p>Instead of returning an <code>Illuminate\\Http\\Response</code> instance, test request methods return an instance of <code>Illuminate\\Testing\\TestResponse</code>, which provides a <a href="#available-assertions">variety of helpful assertions</a> that allow you to inspect your application&#39;s responses:</p><pre><code>&lt;?php

namespace Tests\\Feature;

use Tests\\TestCase;

class ExampleTest extends TestCase
{
    /**
     * A basic test example.
     */
    public function test_a_basic_request(): void
    {
        $response = $this-&gt;get(&#39;/&#39;);

        $response-&gt;assertStatus(200);
    }
}
</code></pre><p>In general, each of your tests should only make one request to your application. Unexpected behavior may occur if multiple requests are executed within a single test method.</p><blockquote><p><strong>Note</strong><br> For convenience, the CSRF middleware is automatically disabled when running tests.</p></blockquote><p><a name="customizing-request-headers"></a></p><h3 id="customizing-request-headers" tabindex="-1"><a class="header-anchor" href="#customizing-request-headers" aria-hidden="true">#</a> Customizing Request Headers</h3><p>You may use the <code>withHeaders</code> method to customize the request&#39;s headers before it is sent to the application. This method allows you to add any custom headers you would like to the request:</p><pre><code>&lt;?php

namespace Tests\\Feature;

use Tests\\TestCase;

class ExampleTest extends TestCase
{
    /**
     * A basic functional test example.
     */
    public function test_interacting_with_headers(): void
    {
        $response = $this-&gt;withHeaders([
            &#39;X-Header&#39; =&gt; &#39;Value&#39;,
        ])-&gt;post(&#39;/user&#39;, [&#39;name&#39; =&gt; &#39;Sally&#39;]);

        $response-&gt;assertStatus(201);
    }
}
</code></pre><p><a name="cookies"></a></p><h3 id="cookies" tabindex="-1"><a class="header-anchor" href="#cookies" aria-hidden="true">#</a> Cookies</h3><p>You may use the <code>withCookie</code> or <code>withCookies</code> methods to set cookie values before making a request. The <code>withCookie</code> method accepts a cookie name and value as its two arguments, while the <code>withCookies</code> method accepts an array of name / value pairs:</p><pre><code>&lt;?php

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
</code></pre><p><a name="session-and-authentication"></a></p><h3 id="session-authentication" tabindex="-1"><a class="header-anchor" href="#session-authentication" aria-hidden="true">#</a> Session / Authentication</h3><p>Laravel provides several helpers for interacting with the session during HTTP testing. First, you may set the session data to a given array using the <code>withSession</code> method. This is useful for loading the session with data before issuing a request to your application:</p><pre><code>&lt;?php

namespace Tests\\Feature;

use Tests\\TestCase;

class ExampleTest extends TestCase
{
    public function test_interacting_with_the_session(): void
    {
        $response = $this-&gt;withSession([&#39;banned&#39; =&gt; false])-&gt;get(&#39;/&#39;);
    }
}
</code></pre><p>Laravel&#39;s session is typically used to maintain state for the currently authenticated user. Therefore, the <code>actingAs</code> helper method provides a simple way to authenticate a given user as the current user. For example, we may use a <a href="./eloquent-factories">model factory</a> to generate and authenticate a user:</p><pre><code>&lt;?php

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
</code></pre><p>You may also specify which guard should be used to authenticate the given user by passing the guard name as the second argument to the <code>actingAs</code> method. The guard that is provided to the <code>actingAs</code> method will also become the default guard for the duration of the test:</p><pre><code>$this-&gt;actingAs($user, &#39;web&#39;)
</code></pre><p><a name="debugging-responses"></a></p><h3 id="debugging-responses" tabindex="-1"><a class="header-anchor" href="#debugging-responses" aria-hidden="true">#</a> Debugging Responses</h3><p>After making a test request to your application, the <code>dump</code>, <code>dumpHeaders</code>, and <code>dumpSession</code> methods may be used to examine and debug the response contents:</p><pre><code>&lt;?php

namespace Tests\\Feature;

use Tests\\TestCase;

class ExampleTest extends TestCase
{
    /**
     * A basic test example.
     */
    public function test_basic_test(): void
    {
        $response = $this-&gt;get(&#39;/&#39;);

        $response-&gt;dumpHeaders();

        $response-&gt;dumpSession();

        $response-&gt;dump();
    }
}
</code></pre><p>Alternatively, you may use the <code>dd</code>, <code>ddHeaders</code>, and <code>ddSession</code> methods to dump information about the response and then stop execution:</p><pre><code>&lt;?php

namespace Tests\\Feature;

use Tests\\TestCase;

class ExampleTest extends TestCase
{
    /**
     * A basic test example.
     */
    public function test_basic_test(): void
    {
        $response = $this-&gt;get(&#39;/&#39;);

        $response-&gt;ddHeaders();

        $response-&gt;ddSession();

        $response-&gt;dd();
    }
}
</code></pre><p><a name="exception-handling"></a></p><h3 id="exception-handling" tabindex="-1"><a class="header-anchor" href="#exception-handling" aria-hidden="true">#</a> Exception Handling</h3><p>Sometimes you may want to test that your application is throwing a specific exception. To ensure that the exception does not get caught by Laravel&#39;s exception handler and returned as an HTTP response, you may invoke the <code>withoutExceptionHandling</code> method before making your request:</p><pre><code>$response = $this-&gt;withoutExceptionHandling()-&gt;get(&#39;/&#39;);
</code></pre><p>In addition, if you would like to ensure that your application is not utilizing features that have been deprecated by the PHP language or the libraries your application is using, you may invoke the <code>withoutDeprecationHandling</code> method before making your request. When deprecation handling is disabled, deprecation warnings will be converted to exceptions, thus causing your test to fail:</p><pre><code>$response = $this-&gt;withoutDeprecationHandling()-&gt;get(&#39;/&#39;);
</code></pre><p>The <code>assertThrows</code> method may be used to assert that code within a given closure throws an exception of the specified type:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">assertThrows</span><span class="token punctuation">(</span>
    <span class="token keyword">fn</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ProcessOrder</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token class-name static-context">OrderInvalid</span><span class="token operator">::</span><span class="token keyword">class</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="testing-json-apis"></a></p><h2 id="testing-json-apis" tabindex="-1"><a class="header-anchor" href="#testing-json-apis" aria-hidden="true">#</a> Testing JSON APIs</h2><p>Laravel also provides several helpers for testing JSON APIs and their responses. For example, the <code>json</code>, <code>getJson</code>, <code>postJson</code>, <code>putJson</code>, <code>patchJson</code>, <code>deleteJson</code>, and <code>optionsJson</code> methods may be used to issue JSON requests with various HTTP verbs. You may also easily pass data and headers to these methods. To get started, let&#39;s write a test to make a <code>POST</code> request to <code>/api/user</code> and assert that the expected JSON data was returned:</p><pre><code>&lt;?php

namespace Tests\\Feature;

use Tests\\TestCase;

class ExampleTest extends TestCase
{
    /**
     * A basic functional test example.
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
</code></pre><p>In addition, JSON response data may be accessed as array variables on the response, making it convenient for you to inspect the individual values returned within a JSON response:</p><pre><code>$this-&gt;assertTrue($response[&#39;created&#39;]);
</code></pre><blockquote><p><strong>Note</strong><br> The <code>assertJson</code> method converts the response to an array and utilizes <code>PHPUnit::assertArraySubset</code> to verify that the given array exists within the JSON response returned by the application. So, if there are other properties in the JSON response, this test will still pass as long as the given fragment is present.</p></blockquote><p><a name="verifying-exact-match"></a></p><h4 id="asserting-exact-json-matches" tabindex="-1"><a class="header-anchor" href="#asserting-exact-json-matches" aria-hidden="true">#</a> Asserting Exact JSON Matches</h4><p>As previously mentioned, the <code>assertJson</code> method may be used to assert that a fragment of JSON exists within the JSON response. If you would like to verify that a given array <strong>exactly matches</strong> the JSON returned by your application, you should use the <code>assertExactJson</code> method:</p><pre><code>&lt;?php

namespace Tests\\Feature;

use Tests\\TestCase;

class ExampleTest extends TestCase
{
    /**
     * A basic functional test example.
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
</code></pre><p><a name="verifying-json-paths"></a></p><h4 id="asserting-on-json-paths" tabindex="-1"><a class="header-anchor" href="#asserting-on-json-paths" aria-hidden="true">#</a> Asserting On JSON Paths</h4><p>If you would like to verify that the JSON response contains the given data at a specified path, you should use the <code>assertJsonPath</code> method:</p><pre><code>&lt;?php

namespace Tests\\Feature;

use Tests\\TestCase;

class ExampleTest extends TestCase
{
    /**
     * A basic functional test example.
     */
    public function test_asserting_a_json_paths_value(): void
    {
        $response = $this-&gt;postJson(&#39;/user&#39;, [&#39;name&#39; =&gt; &#39;Sally&#39;]);

        $response
            -&gt;assertStatus(201)
            -&gt;assertJsonPath(&#39;team.owner.name&#39;, &#39;Darian&#39;);
    }
}
</code></pre><p>The <code>assertJsonPath</code> method also accepts a closure, which may be used to dynamically determine if the assertion should pass:</p><pre><code>$response-&gt;assertJsonPath(&#39;team.owner.name&#39;, fn (string $name) =&gt; strlen($name) &gt;= 3);
</code></pre><p><a name="fluent-json-testing"></a></p><h3 id="fluent-json-testing" tabindex="-1"><a class="header-anchor" href="#fluent-json-testing" aria-hidden="true">#</a> Fluent JSON Testing</h3><p>Laravel also offers a beautiful way to fluently test your application&#39;s JSON responses. To get started, pass a closure to the <code>assertJson</code> method. This closure will be invoked with an instance of <code>Illuminate\\Testing\\Fluent\\AssertableJson</code> which can be used to make assertions against the JSON that was returned by your application. The <code>where</code> method may be used to make assertions against a particular attribute of the JSON, while the <code>missing</code> method may be used to assert that a particular attribute is missing from the JSON:</p><pre><code>use Illuminate\\Testing\\Fluent\\AssertableJson;

/**
 * A basic functional test example.
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
</code></pre><h4 id="understanding-the-etc-method" tabindex="-1"><a class="header-anchor" href="#understanding-the-etc-method" aria-hidden="true">#</a> Understanding The <code>etc</code> Method</h4><p>In the example above, you may have noticed we invoked the <code>etc</code> method at the end of our assertion chain. This method informs Laravel that there may be other attributes present on the JSON object. If the <code>etc</code> method is not used, the test will fail if other attributes that you did not make assertions against exist on the JSON object.</p><p>The intention behind this behavior is to protect you from unintentionally exposing sensitive information in your JSON responses by forcing you to either explicitly make an assertion against the attribute or explicitly allow additional attributes via the <code>etc</code> method.</p><p>However, you should be aware that not including the <code>etc</code> method in your assertion chain does not ensure that additional attributes are not being added to arrays that are nested within your JSON object. The <code>etc</code> method only ensures that no additional attributes exist at the nesting level in which the <code>etc</code> method is invoked.</p><p><a name="asserting-json-attribute-presence-and-absence"></a></p><h4 id="asserting-attribute-presence-absence" tabindex="-1"><a class="header-anchor" href="#asserting-attribute-presence-absence" aria-hidden="true">#</a> Asserting Attribute Presence / Absence</h4><p>To assert that an attribute is present or absent, you may use the <code>has</code> and <code>missing</code> methods:</p><pre><code>$response-&gt;assertJson(fn (AssertableJson $json) =&gt;
    $json-&gt;has(&#39;data&#39;)
         -&gt;missing(&#39;message&#39;)
);
</code></pre><p>In addition, the <code>hasAll</code> and <code>missingAll</code> methods allow asserting the presence or absence of multiple attributes simultaneously:</p><pre><code>$response-&gt;assertJson(fn (AssertableJson $json) =&gt;
    $json-&gt;hasAll([&#39;status&#39;, &#39;data&#39;])
         -&gt;missingAll([&#39;message&#39;, &#39;code&#39;])
);
</code></pre><p>You may use the <code>hasAny</code> method to determine if at least one of a given list of attributes is present:</p><pre><code>$response-&gt;assertJson(fn (AssertableJson $json) =&gt;
    $json-&gt;has(&#39;status&#39;)
         -&gt;hasAny(&#39;data&#39;, &#39;message&#39;, &#39;code&#39;)
);
</code></pre><p><a name="asserting-against-json-collections"></a></p><h4 id="asserting-against-json-collections" tabindex="-1"><a class="header-anchor" href="#asserting-against-json-collections" aria-hidden="true">#</a> Asserting Against JSON Collections</h4><p>Often, your route will return a JSON response that contains multiple items, such as multiple users:</p><pre><code>Route::get(&#39;/users&#39;, function () {
    return User::all();
});
</code></pre><p>In these situations, we may use the fluent JSON object&#39;s <code>has</code> method to make assertions against the users included in the response. For example, let&#39;s assert that the JSON response contains three users. Next, we&#39;ll make some assertions about the first user in the collection using the <code>first</code> method. The <code>first</code> method accepts a closure which receives another assertable JSON string that we can use to make assertions about the first object in the JSON collection:</p><pre><code>$response
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
</code></pre><p><a name="scoping-json-collection-assertions"></a></p><h4 id="scoping-json-collection-assertions" tabindex="-1"><a class="header-anchor" href="#scoping-json-collection-assertions" aria-hidden="true">#</a> Scoping JSON Collection Assertions</h4><p>Sometimes, your application&#39;s routes will return JSON collections that are assigned named keys:</p><pre><code>Route::get(&#39;/users&#39;, function () {
    return [
        &#39;meta&#39; =&gt; [...],
        &#39;users&#39; =&gt; User::all(),
    ];
})
</code></pre><p>When testing these routes, you may use the <code>has</code> method to assert against the number of items in the collection. In addition, you may use the <code>has</code> method to scope a chain of assertions:</p><pre><code>$response
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
</code></pre><p>However, instead of making two separate calls to the <code>has</code> method to assert against the <code>users</code> collection, you may make a single call which provides a closure as its third parameter. When doing so, the closure will automatically be invoked and scoped to the first item in the collection:</p><pre><code>$response
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
</code></pre><p><a name="asserting-json-types"></a></p><h4 id="asserting-json-types" tabindex="-1"><a class="header-anchor" href="#asserting-json-types" aria-hidden="true">#</a> Asserting JSON Types</h4><p>You may only want to assert that the properties in the JSON response are of a certain type. The <code>Illuminate\\Testing\\Fluent\\AssertableJson</code> class provides the <code>whereType</code> and <code>whereAllType</code> methods for doing just that:</p><pre><code>$response-&gt;assertJson(fn (AssertableJson $json) =&gt;
    $json-&gt;whereType(&#39;id&#39;, &#39;integer&#39;)
         -&gt;whereAllType([
            &#39;users.0.name&#39; =&gt; &#39;string&#39;,
            &#39;meta&#39; =&gt; &#39;array&#39;
        ])
);
</code></pre><p>You may specify multiple types using the <code>|</code> character, or passing an array of types as the second parameter to the <code>whereType</code> method. The assertion will be successful if the response value is any of the listed types:</p><pre><code>$response-&gt;assertJson(fn (AssertableJson $json) =&gt;
    $json-&gt;whereType(&#39;name&#39;, &#39;string|null&#39;)
         -&gt;whereType(&#39;id&#39;, [&#39;string&#39;, &#39;integer&#39;])
);
</code></pre><p>The <code>whereType</code> and <code>whereAllType</code> methods recognize the following types: <code>string</code>, <code>integer</code>, <code>double</code>, <code>boolean</code>, <code>array</code>, and <code>null</code>.</p><p><a name="testing-file-uploads"></a></p><h2 id="testing-file-uploads" tabindex="-1"><a class="header-anchor" href="#testing-file-uploads" aria-hidden="true">#</a> Testing File Uploads</h2><p>The <code>Illuminate\\Http\\UploadedFile</code> class provides a <code>fake</code> method which may be used to generate dummy files or images for testing. This, combined with the <code>Storage</code> facade&#39;s <code>fake</code> method, greatly simplifies the testing of file uploads. For example, you may combine these two features to easily test an avatar upload form:</p><pre><code>&lt;?php

namespace Tests\\Feature;

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
</code></pre><p>If you would like to assert that a given file does not exist, you may use the <code>assertMissing</code> method provided by the <code>Storage</code> facade:</p><pre><code>Storage::fake(&#39;avatars&#39;);

// ...

Storage::disk(&#39;avatars&#39;)-&gt;assertMissing(&#39;missing.jpg&#39;);
</code></pre><p><a name="fake-file-customization"></a></p><h4 id="fake-file-customization" tabindex="-1"><a class="header-anchor" href="#fake-file-customization" aria-hidden="true">#</a> Fake File Customization</h4><p>When creating files using the <code>fake</code> method provided by the <code>UploadedFile</code> class, you may specify the width, height, and size of the image (in kilobytes) in order to better test your application&#39;s validation rules:</p><pre><code>UploadedFile::fake()-&gt;image(&#39;avatar.jpg&#39;, $width, $height)-&gt;size(100);
</code></pre><p>In addition to creating images, you may create files of any other type using the <code>create</code> method:</p><pre><code>UploadedFile::fake()-&gt;create(&#39;document.pdf&#39;, $sizeInKilobytes);
</code></pre><p>If needed, you may pass a <code>$mimeType</code> argument to the method to explicitly define the MIME type that should be returned by the file:</p><pre><code>UploadedFile::fake()-&gt;create(
    &#39;document.pdf&#39;, $sizeInKilobytes, &#39;application/pdf&#39;
);
</code></pre><p><a name="testing-views"></a></p><h2 id="testing-views" tabindex="-1"><a class="header-anchor" href="#testing-views" aria-hidden="true">#</a> Testing Views</h2><p>Laravel also allows you to render a view without making a simulated HTTP request to the application. To accomplish this, you may call the <code>view</code> method within your test. The <code>view</code> method accepts the view name and an optional array of data. The method returns an instance of <code>Illuminate\\Testing\\TestView</code>, which offers several methods to conveniently make assertions about the view&#39;s contents:</p><pre><code>&lt;?php

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
</code></pre><p>The <code>TestView</code> class provides the following assertion methods: <code>assertSee</code>, <code>assertSeeInOrder</code>, <code>assertSeeText</code>, <code>assertSeeTextInOrder</code>, <code>assertDontSee</code>, and <code>assertDontSeeText</code>.</p><p>If needed, you may get the raw, rendered view contents by casting the <code>TestView</code> instance to a string:</p><pre><code>$contents = (string) $this-&gt;view(&#39;welcome&#39;);
</code></pre><p><a name="sharing-errors"></a></p><h4 id="sharing-errors" tabindex="-1"><a class="header-anchor" href="#sharing-errors" aria-hidden="true">#</a> Sharing Errors</h4><p>Some views may depend on errors shared in the <a href="./validation#quick-displaying-the-validation-errors">global error bag provided by Laravel</a>. To hydrate the error bag with error messages, you may use the <code>withViewErrors</code> method:</p><pre><code>$view = $this-&gt;withViewErrors([
    &#39;name&#39; =&gt; [&#39;Please provide a valid name.&#39;]
])-&gt;view(&#39;form&#39;);

$view-&gt;assertSee(&#39;Please provide a valid name.&#39;);
</code></pre><p><a name="rendering-blade-and-components"></a></p><h3 id="rendering-blade-components" tabindex="-1"><a class="header-anchor" href="#rendering-blade-components" aria-hidden="true">#</a> Rendering Blade &amp; Components</h3><p>If necessary, you may use the <code>blade</code> method to evaluate and render a raw <a href="./blade">Blade</a> string. Like the <code>view</code> method, the <code>blade</code> method returns an instance of <code>Illuminate\\Testing\\TestView</code>:</p><pre><code>$view = $this-&gt;blade(
    &#39;&lt;x-component :name=&quot;$name&quot; /&gt;&#39;,
    [&#39;name&#39; =&gt; &#39;Taylor&#39;]
);

$view-&gt;assertSee(&#39;Taylor&#39;);
</code></pre><p>You may use the <code>component</code> method to evaluate and render a <a href="./blade#components">Blade component</a>. The <code>component</code> method returns an instance of <code>Illuminate\\Testing\\TestComponent</code>:</p><pre><code>$view = $this-&gt;component(Profile::class, [&#39;name&#39; =&gt; &#39;Taylor&#39;]);

$view-&gt;assertSee(&#39;Taylor&#39;);
</code></pre><p><a name="available-assertions"></a></p><h2 id="available-assertions" tabindex="-1"><a class="header-anchor" href="#available-assertions" aria-hidden="true">#</a> Available Assertions</h2><p><a name="response-assertions"></a></p><h3 id="response-assertions" tabindex="-1"><a class="header-anchor" href="#response-assertions" aria-hidden="true">#</a> Response Assertions</h3><p>Laravel&#39;s <code>Illuminate\\Testing\\TestResponse</code> class provides a variety of custom assertion methods that you may utilize when testing your application. These assertions may be accessed on the response that is returned by the <code>json</code>, <code>get</code>, <code>post</code>, <code>put</code>, and <code>delete</code> test methods:</p>`,134),i=e("div",{class:"collection-method-list",markdown:"1"},[e("p",null,[e("a",{href:"#assert-accepted"},"assertAccepted"),e("a",{href:"#assert-bad-request"},"assertBadRequest"),e("a",{href:"#assert-conflict"},"assertConflict"),e("a",{href:"#assert-cookie"},"assertCookie"),e("a",{href:"#assert-cookie-expired"},"assertCookieExpired"),e("a",{href:"#assert-cookie-not-expired"},"assertCookieNotExpired"),e("a",{href:"#assert-cookie-missing"},"assertCookieMissing"),e("a",{href:"#assert-created"},"assertCreated"),e("a",{href:"#assert-dont-see"},"assertDontSee"),e("a",{href:"#assert-dont-see-text"},"assertDontSeeText"),e("a",{href:"#assert-download"},"assertDownload"),e("a",{href:"#assert-exact-json"},"assertExactJson"),e("a",{href:"#assert-forbidden"},"assertForbidden"),e("a",{href:"#assert-found"},"assertFound"),e("a",{href:"#assert-gone"},"assertGone"),e("a",{href:"#assert-header"},"assertHeader"),e("a",{href:"#assert-header-missing"},"assertHeaderMissing"),e("a",{href:"#assert-internal-server-error"},"assertInternalServerError"),e("a",{href:"#assert-json"},"assertJson"),e("a",{href:"#assert-json-count"},"assertJsonCount"),e("a",{href:"#assert-json-fragment"},"assertJsonFragment"),e("a",{href:"#assert-json-is-array"},"assertJsonIsArray"),e("a",{href:"#assert-json-is-object"},"assertJsonIsObject"),e("a",{href:"#assert-json-missing"},"assertJsonMissing"),e("a",{href:"#assert-json-missing-exact"},"assertJsonMissingExact"),e("a",{href:"#assert-json-missing-validation-errors"},"assertJsonMissingValidationErrors"),e("a",{href:"#assert-json-path"},"assertJsonPath"),e("a",{href:"#assert-json-missing-path"},"assertJsonMissingPath"),e("a",{href:"#assert-json-structure"},"assertJsonStructure"),e("a",{href:"#assert-json-validation-errors"},"assertJsonValidationErrors"),e("a",{href:"#assert-json-validation-error-for"},"assertJsonValidationErrorFor"),e("a",{href:"#assert-location"},"assertLocation"),e("a",{href:"#assert-method-not-allowed"},"assertMethodNotAllowed"),e("a",{href:"#assert-moved-permanently"},"assertMovedPermanently"),e("a",{href:"#assert-content"},"assertContent"),e("a",{href:"#assert-no-content"},"assertNoContent"),e("a",{href:"#assert-streamed-content"},"assertStreamedContent"),e("a",{href:"#assert-not-found"},"assertNotFound"),e("a",{href:"#assert-ok"},"assertOk"),e("a",{href:"#assert-payment-required"},"assertPaymentRequired"),e("a",{href:"#assert-plain-cookie"},"assertPlainCookie"),e("a",{href:"#assert-redirect"},"assertRedirect"),e("a",{href:"#assert-redirect-contains"},"assertRedirectContains"),e("a",{href:"#assert-redirect-to-route"},"assertRedirectToRoute"),e("a",{href:"#assert-redirect-to-signed-route"},"assertRedirectToSignedRoute"),e("a",{href:"#assert-request-timeout"},"assertRequestTimeout"),e("a",{href:"#assert-see"},"assertSee"),e("a",{href:"#assert-see-in-order"},"assertSeeInOrder"),e("a",{href:"#assert-see-text"},"assertSeeText"),e("a",{href:"#assert-see-text-in-order"},"assertSeeTextInOrder"),e("a",{href:"#assert-server-error"},"assertServerError"),e("a",{href:"#assert-server-unavailable"},"assertServiceUnavailable"),e("a",{href:"#assert-session-has"},"assertSessionHas"),e("a",{href:"#assert-session-has-input"},"assertSessionHasInput"),e("a",{href:"#assert-session-has-all"},"assertSessionHasAll"),e("a",{href:"#assert-session-has-errors"},"assertSessionHasErrors"),e("a",{href:"#assert-session-has-errors-in"},"assertSessionHasErrorsIn"),e("a",{href:"#assert-session-has-no-errors"},"assertSessionHasNoErrors"),e("a",{href:"#assert-session-doesnt-have-errors"},"assertSessionDoesntHaveErrors"),e("a",{href:"#assert-session-missing"},"assertSessionMissing"),e("a",{href:"#assert-status"},"assertStatus"),e("a",{href:"#assert-successful"},"assertSuccessful"),e("a",{href:"#assert-too-many-requests"},"assertTooManyRequests"),e("a",{href:"#assert-unauthorized"},"assertUnauthorized"),e("a",{href:"#assert-unprocessable"},"assertUnprocessable"),e("a",{href:"#assert-unsupported-media-type"},"assertUnsupportedMediaType"),e("a",{href:"#assert-valid"},"assertValid"),e("a",{href:"#assert-invalid"},"assertInvalid"),e("a",{href:"#assert-view-has"},"assertViewHas"),e("a",{href:"#assert-view-has-all"},"assertViewHasAll"),e("a",{href:"#assert-view-is"},"assertViewIs"),e("a",{href:"#assert-view-missing"},"assertViewMissing")])],-1),d=s(`<p><a name="assert-bad-request"></a></p><h4 id="assertbadrequest" tabindex="-1"><a class="header-anchor" href="#assertbadrequest" aria-hidden="true">#</a> assertBadRequest</h4><p>Assert that the response has a bad request (400) HTTP status code:</p><pre><code>$response-&gt;assertBadRequest();
</code></pre><p><a name="assert-accepted"></a></p><h4 id="assertaccepted" tabindex="-1"><a class="header-anchor" href="#assertaccepted" aria-hidden="true">#</a> assertAccepted</h4><p>Assert that the response has an accepted (202) HTTP status code:</p><pre><code>$response-&gt;assertAccepted();
</code></pre><p><a name="assert-conflict"></a></p><h4 id="assertconflict" tabindex="-1"><a class="header-anchor" href="#assertconflict" aria-hidden="true">#</a> assertConflict</h4><p>Assert that the response has a conflict (409) HTTP status code:</p><pre><code>$response-&gt;assertConflict();
</code></pre><p><a name="assert-cookie"></a></p><h4 id="assertcookie" tabindex="-1"><a class="header-anchor" href="#assertcookie" aria-hidden="true">#</a> assertCookie</h4><p>Assert that the response contains the given cookie:</p><pre><code>$response-&gt;assertCookie($cookieName, $value = null);
</code></pre><p><a name="assert-cookie-expired"></a></p><h4 id="assertcookieexpired" tabindex="-1"><a class="header-anchor" href="#assertcookieexpired" aria-hidden="true">#</a> assertCookieExpired</h4><p>Assert that the response contains the given cookie and it is expired:</p><pre><code>$response-&gt;assertCookieExpired($cookieName);
</code></pre><p><a name="assert-cookie-not-expired"></a></p><h4 id="assertcookienotexpired" tabindex="-1"><a class="header-anchor" href="#assertcookienotexpired" aria-hidden="true">#</a> assertCookieNotExpired</h4><p>Assert that the response contains the given cookie and it is not expired:</p><pre><code>$response-&gt;assertCookieNotExpired($cookieName);
</code></pre><p><a name="assert-cookie-missing"></a></p><h4 id="assertcookiemissing" tabindex="-1"><a class="header-anchor" href="#assertcookiemissing" aria-hidden="true">#</a> assertCookieMissing</h4><p>Assert that the response does not contain the given cookie:</p><pre><code>$response-&gt;assertCookieMissing($cookieName);
</code></pre><p><a name="assert-created"></a></p><h4 id="assertcreated" tabindex="-1"><a class="header-anchor" href="#assertcreated" aria-hidden="true">#</a> assertCreated</h4><p>Assert that the response has a 201 HTTP status code:</p><pre><code>$response-&gt;assertCreated();
</code></pre><p><a name="assert-dont-see"></a></p><h4 id="assertdontsee" tabindex="-1"><a class="header-anchor" href="#assertdontsee" aria-hidden="true">#</a> assertDontSee</h4><p>Assert that the given string is not contained within the response returned by the application. This assertion will automatically escape the given string unless you pass a second argument of <code>false</code>:</p><pre><code>$response-&gt;assertDontSee($value, $escaped = true);
</code></pre><p><a name="assert-dont-see-text"></a></p><h4 id="assertdontseetext" tabindex="-1"><a class="header-anchor" href="#assertdontseetext" aria-hidden="true">#</a> assertDontSeeText</h4><p>Assert that the given string is not contained within the response text. This assertion will automatically escape the given string unless you pass a second argument of <code>false</code>. This method will pass the response content to the <code>strip_tags</code> PHP function before making the assertion:</p><pre><code>$response-&gt;assertDontSeeText($value, $escaped = true);
</code></pre><p><a name="assert-download"></a></p><h4 id="assertdownload" tabindex="-1"><a class="header-anchor" href="#assertdownload" aria-hidden="true">#</a> assertDownload</h4><p>Assert that the response is a &quot;download&quot;. Typically, this means the invoked route that returned the response returned a <code>Response::download</code> response, <code>BinaryFileResponse</code>, or <code>Storage::download</code> response:</p><pre><code>$response-&gt;assertDownload();
</code></pre><p>If you wish, you may assert that the downloadable file was assigned a given file name:</p><pre><code>$response-&gt;assertDownload(&#39;image.jpg&#39;);
</code></pre><p><a name="assert-exact-json"></a></p><h4 id="assertexactjson" tabindex="-1"><a class="header-anchor" href="#assertexactjson" aria-hidden="true">#</a> assertExactJson</h4><p>Assert that the response contains an exact match of the given JSON data:</p><pre><code>$response-&gt;assertExactJson(array $data);
</code></pre><p><a name="assert-forbidden"></a></p><h4 id="assertforbidden" tabindex="-1"><a class="header-anchor" href="#assertforbidden" aria-hidden="true">#</a> assertForbidden</h4><p>Assert that the response has a forbidden (403) HTTP status code:</p><pre><code>$response-&gt;assertForbidden();
</code></pre><p><a name="assert-found"></a></p><h4 id="assertfound" tabindex="-1"><a class="header-anchor" href="#assertfound" aria-hidden="true">#</a> assertFound</h4><p>Assert that the response has a found (302) HTTP status code:</p><pre><code>$response-&gt;assertFound();
</code></pre><p><a name="assert-gone"></a></p><h4 id="assertgone" tabindex="-1"><a class="header-anchor" href="#assertgone" aria-hidden="true">#</a> assertGone</h4><p>Assert that the response has a gone (410) HTTP status code:</p><pre><code>$response-&gt;assertGone();
</code></pre><p><a name="assert-header"></a></p><h4 id="assertheader" tabindex="-1"><a class="header-anchor" href="#assertheader" aria-hidden="true">#</a> assertHeader</h4><p>Assert that the given header and value is present on the response:</p><pre><code>$response-&gt;assertHeader($headerName, $value = null);
</code></pre><p><a name="assert-header-missing"></a></p><h4 id="assertheadermissing" tabindex="-1"><a class="header-anchor" href="#assertheadermissing" aria-hidden="true">#</a> assertHeaderMissing</h4><p>Assert that the given header is not present on the response:</p><pre><code>$response-&gt;assertHeaderMissing($headerName);
</code></pre><p><a name="assert-internal-server-error"></a></p><h4 id="assertinternalservererror" tabindex="-1"><a class="header-anchor" href="#assertinternalservererror" aria-hidden="true">#</a> assertInternalServerError</h4><p>Assert that the response has an &quot;Internal Server Error&quot; (500) HTTP status code:</p><pre><code>$response-&gt;assertInternalServerError();
</code></pre><p><a name="assert-json"></a></p><h4 id="assertjson" tabindex="-1"><a class="header-anchor" href="#assertjson" aria-hidden="true">#</a> assertJson</h4><p>Assert that the response contains the given JSON data:</p><pre><code>$response-&gt;assertJson(array $data, $strict = false);
</code></pre><p>The <code>assertJson</code> method converts the response to an array and utilizes <code>PHPUnit::assertArraySubset</code> to verify that the given array exists within the JSON response returned by the application. So, if there are other properties in the JSON response, this test will still pass as long as the given fragment is present.</p><p><a name="assert-json-count"></a></p><h4 id="assertjsoncount" tabindex="-1"><a class="header-anchor" href="#assertjsoncount" aria-hidden="true">#</a> assertJsonCount</h4><p>Assert that the response JSON has an array with the expected number of items at the given key:</p><pre><code>$response-&gt;assertJsonCount($count, $key = null);
</code></pre><p><a name="assert-json-fragment"></a></p><h4 id="assertjsonfragment" tabindex="-1"><a class="header-anchor" href="#assertjsonfragment" aria-hidden="true">#</a> assertJsonFragment</h4><p>Assert that the response contains the given JSON data anywhere in the response:</p><pre><code>Route::get(&#39;/users&#39;, function () {
    return [
        &#39;users&#39; =&gt; [
            [
                &#39;name&#39; =&gt; &#39;Taylor Otwell&#39;,
            ],
        ],
    ];
});

$response-&gt;assertJsonFragment([&#39;name&#39; =&gt; &#39;Taylor Otwell&#39;]);
</code></pre><p><a name="assert-json-is-array"></a></p><h4 id="assertjsonisarray" tabindex="-1"><a class="header-anchor" href="#assertjsonisarray" aria-hidden="true">#</a> assertJsonIsArray</h4><p>Assert that the response JSON is an array:</p><pre><code>$response-&gt;assertJsonIsArray();
</code></pre><p><a name="assert-json-is-object"></a></p><h4 id="assertjsonisobject" tabindex="-1"><a class="header-anchor" href="#assertjsonisobject" aria-hidden="true">#</a> assertJsonIsObject</h4><p>Assert that the response JSON is an object:</p><pre><code>$response-&gt;assertJsonIsObject();
</code></pre><p><a name="assert-json-missing"></a></p><h4 id="assertjsonmissing" tabindex="-1"><a class="header-anchor" href="#assertjsonmissing" aria-hidden="true">#</a> assertJsonMissing</h4><p>Assert that the response does not contain the given JSON data:</p><pre><code>$response-&gt;assertJsonMissing(array $data);
</code></pre><p><a name="assert-json-missing-exact"></a></p><h4 id="assertjsonmissingexact" tabindex="-1"><a class="header-anchor" href="#assertjsonmissingexact" aria-hidden="true">#</a> assertJsonMissingExact</h4><p>Assert that the response does not contain the exact JSON data:</p><pre><code>$response-&gt;assertJsonMissingExact(array $data);
</code></pre><p><a name="assert-json-missing-validation-errors"></a></p><h4 id="assertjsonmissingvalidationerrors" tabindex="-1"><a class="header-anchor" href="#assertjsonmissingvalidationerrors" aria-hidden="true">#</a> assertJsonMissingValidationErrors</h4><p>Assert that the response has no JSON validation errors for the given keys:</p><pre><code>$response-&gt;assertJsonMissingValidationErrors($keys);
</code></pre><blockquote><p><strong>Note</strong><br> The more generic <a href="#assert-valid">assertValid</a> method may be used to assert that a response does not have validation errors that were returned as JSON <strong>and</strong> that no errors were flashed to session storage.</p></blockquote><p><a name="assert-json-path"></a></p><h4 id="assertjsonpath" tabindex="-1"><a class="header-anchor" href="#assertjsonpath" aria-hidden="true">#</a> assertJsonPath</h4><p>Assert that the response contains the given data at the specified path:</p><pre><code>$response-&gt;assertJsonPath($path, $expectedValue);
</code></pre><p>For example, if the following JSON response is returned by your application:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;user&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Steve Schoger&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You may assert that the <code>name</code> property of the <code>user</code> object matches a given value like so:</p><pre><code>$response-&gt;assertJsonPath(&#39;user.name&#39;, &#39;Steve Schoger&#39;);
</code></pre><p><a name="assert-json-missing-path"></a></p><h4 id="assertjsonmissingpath" tabindex="-1"><a class="header-anchor" href="#assertjsonmissingpath" aria-hidden="true">#</a> assertJsonMissingPath</h4><p>Assert that the response does not contain the given path:</p><pre><code>$response-&gt;assertJsonMissingPath($path);
</code></pre><p>For example, if the following JSON response is returned by your application:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;user&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Steve Schoger&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You may assert that it does not contain the <code>email</code> property of the <code>user</code> object:</p><pre><code>$response-&gt;assertJsonMissingPath(&#39;user.email&#39;);
</code></pre><p><a name="assert-json-structure"></a></p><h4 id="assertjsonstructure" tabindex="-1"><a class="header-anchor" href="#assertjsonstructure" aria-hidden="true">#</a> assertJsonStructure</h4><p>Assert that the response has a given JSON structure:</p><pre><code>$response-&gt;assertJsonStructure(array $structure);
</code></pre><p>For example, if the JSON response returned by your application contains the following data:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;user&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Steve Schoger&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You may assert that the JSON structure matches your expectations like so:</p><pre><code>$response-&gt;assertJsonStructure([
    &#39;user&#39; =&gt; [
        &#39;name&#39;,
    ]
]);
</code></pre><p>Sometimes, JSON responses returned by your application may contain arrays of objects:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In this situation, you may use the <code>*</code> character to assert against the structure of all of the objects in the array:</p><pre><code>$response-&gt;assertJsonStructure([
    &#39;user&#39; =&gt; [
        &#39;*&#39; =&gt; [
             &#39;name&#39;,
             &#39;age&#39;,
             &#39;location&#39;
        ]
    ]
]);
</code></pre><p><a name="assert-json-validation-errors"></a></p><h4 id="assertjsonvalidationerrors" tabindex="-1"><a class="header-anchor" href="#assertjsonvalidationerrors" aria-hidden="true">#</a> assertJsonValidationErrors</h4><p>Assert that the response has the given JSON validation errors for the given keys. This method should be used when asserting against responses where the validation errors are returned as a JSON structure instead of being flashed to the session:</p><pre><code>$response-&gt;assertJsonValidationErrors(array $data, $responseKey = &#39;errors&#39;);
</code></pre><blockquote><p><strong>Note</strong><br> The more generic <a href="#assert-invalid">assertInvalid</a> method may be used to assert that a response has validation errors returned as JSON <strong>or</strong> that errors were flashed to session storage.</p></blockquote><p><a name="assert-json-validation-error-for"></a></p><h4 id="assertjsonvalidationerrorfor" tabindex="-1"><a class="header-anchor" href="#assertjsonvalidationerrorfor" aria-hidden="true">#</a> assertJsonValidationErrorFor</h4><p>Assert the response has any JSON validation errors for the given key:</p><pre><code>$response-&gt;assertJsonValidationErrorFor(string $key, $responseKey = &#39;errors&#39;);
</code></pre><p><a name="assert-method-not-allowed"></a></p><h4 id="assertmethodnotallowed" tabindex="-1"><a class="header-anchor" href="#assertmethodnotallowed" aria-hidden="true">#</a> assertMethodNotAllowed</h4><p>Assert that the response has a method not allowed (405) HTTP status code:</p><pre><code>$response-&gt;assertMethodNotAllowed();
</code></pre><p><a name="assert-moved-permanently"></a></p><h4 id="assertmovedpermanently" tabindex="-1"><a class="header-anchor" href="#assertmovedpermanently" aria-hidden="true">#</a> assertMovedPermanently</h4><p>Assert that the response has a moved permanently (301) HTTP status code:</p><pre><code>$response-&gt;assertMovedPermanently();
</code></pre><p><a name="assert-location"></a></p><h4 id="assertlocation" tabindex="-1"><a class="header-anchor" href="#assertlocation" aria-hidden="true">#</a> assertLocation</h4><p>Assert that the response has the given URI value in the <code>Location</code> header:</p><pre><code>$response-&gt;assertLocation($uri);
</code></pre><p><a name="assert-content"></a></p><h4 id="assertcontent" tabindex="-1"><a class="header-anchor" href="#assertcontent" aria-hidden="true">#</a> assertContent</h4><p>Assert that the given string matches the response content:</p><pre><code>$response-&gt;assertContent($value);
</code></pre><p><a name="assert-no-content"></a></p><h4 id="assertnocontent" tabindex="-1"><a class="header-anchor" href="#assertnocontent" aria-hidden="true">#</a> assertNoContent</h4><p>Assert that the response has the given HTTP status code and no content:</p><pre><code>$response-&gt;assertNoContent($status = 204);
</code></pre><p><a name="assert-streamed-content"></a></p><h4 id="assertstreamedcontent" tabindex="-1"><a class="header-anchor" href="#assertstreamedcontent" aria-hidden="true">#</a> assertStreamedContent</h4><p>Assert that the given string matches the streamed response content:</p><pre><code>$response-&gt;assertStreamedContent($value);
</code></pre><p><a name="assert-not-found"></a></p><h4 id="assertnotfound" tabindex="-1"><a class="header-anchor" href="#assertnotfound" aria-hidden="true">#</a> assertNotFound</h4><p>Assert that the response has a not found (404) HTTP status code:</p><pre><code>$response-&gt;assertNotFound();
</code></pre><p><a name="assert-ok"></a></p><h4 id="assertok" tabindex="-1"><a class="header-anchor" href="#assertok" aria-hidden="true">#</a> assertOk</h4><p>Assert that the response has a 200 HTTP status code:</p><pre><code>$response-&gt;assertOk();
</code></pre><p><a name="assert-payment-required"></a></p><h4 id="assertpaymentrequired" tabindex="-1"><a class="header-anchor" href="#assertpaymentrequired" aria-hidden="true">#</a> assertPaymentRequired</h4><p>Assert that the response has a payment required (402) HTTP status code:</p><pre><code>$response-&gt;assertPaymentRequired();
</code></pre><p><a name="assert-plain-cookie"></a></p><h4 id="assertplaincookie" tabindex="-1"><a class="header-anchor" href="#assertplaincookie" aria-hidden="true">#</a> assertPlainCookie</h4><p>Assert that the response contains the given unencrypted cookie:</p><pre><code>$response-&gt;assertPlainCookie($cookieName, $value = null);
</code></pre><p><a name="assert-redirect"></a></p><h4 id="assertredirect" tabindex="-1"><a class="header-anchor" href="#assertredirect" aria-hidden="true">#</a> assertRedirect</h4><p>Assert that the response is a redirect to the given URI:</p><pre><code>$response-&gt;assertRedirect($uri = null);
</code></pre><p><a name="assert-redirect-contains"></a></p><h4 id="assertredirectcontains" tabindex="-1"><a class="header-anchor" href="#assertredirectcontains" aria-hidden="true">#</a> assertRedirectContains</h4><p>Assert whether the response is redirecting to a URI that contains the given string:</p><pre><code>$response-&gt;assertRedirectContains($string);
</code></pre><p><a name="assert-redirect-to-route"></a></p><h4 id="assertredirecttoroute" tabindex="-1"><a class="header-anchor" href="#assertredirecttoroute" aria-hidden="true">#</a> assertRedirectToRoute</h4><p>Assert that the response is a redirect to the given <a href="./routing#named-routes">named route</a>:</p><pre><code>$response-&gt;assertRedirectToRoute($name, $parameters = []);
</code></pre><p><a name="assert-redirect-to-signed-route"></a></p><h4 id="assertredirecttosignedroute" tabindex="-1"><a class="header-anchor" href="#assertredirecttosignedroute" aria-hidden="true">#</a> assertRedirectToSignedRoute</h4><p>Assert that the response is a redirect to the given <a href="./urls#signed-urls">signed route</a>:</p><pre><code>$response-&gt;assertRedirectToSignedRoute($name = null, $parameters = []);
</code></pre><p><a name="assert-request-timeout"></a></p><h4 id="assertrequesttimeout" tabindex="-1"><a class="header-anchor" href="#assertrequesttimeout" aria-hidden="true">#</a> assertRequestTimeout</h4><p>Assert that the response has a request timeout (408) HTTP status code:</p><pre><code>$response-&gt;assertRequestTimeout();
</code></pre><p><a name="assert-see"></a></p><h4 id="assertsee" tabindex="-1"><a class="header-anchor" href="#assertsee" aria-hidden="true">#</a> assertSee</h4><p>Assert that the given string is contained within the response. This assertion will automatically escape the given string unless you pass a second argument of <code>false</code>:</p><pre><code>$response-&gt;assertSee($value, $escaped = true);
</code></pre><p><a name="assert-see-in-order"></a></p><h4 id="assertseeinorder" tabindex="-1"><a class="header-anchor" href="#assertseeinorder" aria-hidden="true">#</a> assertSeeInOrder</h4><p>Assert that the given strings are contained in order within the response. This assertion will automatically escape the given strings unless you pass a second argument of <code>false</code>:</p><pre><code>$response-&gt;assertSeeInOrder(array $values, $escaped = true);
</code></pre><p><a name="assert-see-text"></a></p><h4 id="assertseetext" tabindex="-1"><a class="header-anchor" href="#assertseetext" aria-hidden="true">#</a> assertSeeText</h4><p>Assert that the given string is contained within the response text. This assertion will automatically escape the given string unless you pass a second argument of <code>false</code>. The response content will be passed to the <code>strip_tags</code> PHP function before the assertion is made:</p><pre><code>$response-&gt;assertSeeText($value, $escaped = true);
</code></pre><p><a name="assert-see-text-in-order"></a></p><h4 id="assertseetextinorder" tabindex="-1"><a class="header-anchor" href="#assertseetextinorder" aria-hidden="true">#</a> assertSeeTextInOrder</h4><p>Assert that the given strings are contained in order within the response text. This assertion will automatically escape the given strings unless you pass a second argument of <code>false</code>. The response content will be passed to the <code>strip_tags</code> PHP function before the assertion is made:</p><pre><code>$response-&gt;assertSeeTextInOrder(array $values, $escaped = true);
</code></pre><p><a name="assert-server-error"></a></p><h4 id="assertservererror" tabindex="-1"><a class="header-anchor" href="#assertservererror" aria-hidden="true">#</a> assertServerError</h4><p>Assert that the response has a server error (&gt;= 500 , &lt; 600) HTTP status code:</p><pre><code>$response-&gt;assertServerError();
</code></pre><p><a name="assert-server-unavailable"></a></p><h4 id="assertserviceunavailable" tabindex="-1"><a class="header-anchor" href="#assertserviceunavailable" aria-hidden="true">#</a> assertServiceUnavailable</h4><p>Assert that the response has a &quot;Service Unavailable&quot; (503) HTTP status code:</p><pre><code>$response-&gt;assertServiceUnavailable();
</code></pre><p><a name="assert-session-has"></a></p><h4 id="assertsessionhas" tabindex="-1"><a class="header-anchor" href="#assertsessionhas" aria-hidden="true">#</a> assertSessionHas</h4><p>Assert that the session contains the given piece of data:</p><pre><code>$response-&gt;assertSessionHas($key, $value = null);
</code></pre><p>If needed, a closure can be provided as the second argument to the <code>assertSessionHas</code> method. The assertion will pass if the closure returns <code>true</code>:</p><pre><code>$response-&gt;assertSessionHas($key, function (User $value) {
    return $value-&gt;name === &#39;Taylor Otwell&#39;;
});
</code></pre><p><a name="assert-session-has-input"></a></p><h4 id="assertsessionhasinput" tabindex="-1"><a class="header-anchor" href="#assertsessionhasinput" aria-hidden="true">#</a> assertSessionHasInput</h4><p>Assert that the session has a given value in the <a href="./responses#redirecting-with-flashed-session-data">flashed input array</a>:</p><pre><code>$response-&gt;assertSessionHasInput($key, $value = null);
</code></pre><p>If needed, a closure can be provided as the second argument to the <code>assertSessionHasInput</code> method. The assertion will pass if the closure returns <code>true</code>:</p><pre><code>use Illuminate\\Support\\Facades\\Crypt;

$response-&gt;assertSessionHasInput($key, function (string $value) {
    return Crypt::decryptString($value) === &#39;secret&#39;;
});
</code></pre><p><a name="assert-session-has-all"></a></p><h4 id="assertsessionhasall" tabindex="-1"><a class="header-anchor" href="#assertsessionhasall" aria-hidden="true">#</a> assertSessionHasAll</h4><p>Assert that the session contains a given array of key / value pairs:</p><pre><code>$response-&gt;assertSessionHasAll(array $data);
</code></pre><p>For example, if your application&#39;s session contains <code>name</code> and <code>status</code> keys, you may assert that both exist and have the specified values like so:</p><pre><code>$response-&gt;assertSessionHasAll([
    &#39;name&#39; =&gt; &#39;Taylor Otwell&#39;,
    &#39;status&#39; =&gt; &#39;active&#39;,
]);
</code></pre><p><a name="assert-session-has-errors"></a></p><h4 id="assertsessionhaserrors" tabindex="-1"><a class="header-anchor" href="#assertsessionhaserrors" aria-hidden="true">#</a> assertSessionHasErrors</h4><p>Assert that the session contains an error for the given <code>$keys</code>. If <code>$keys</code> is an associative array, assert that the session contains a specific error message (value) for each field (key). This method should be used when testing routes that flash validation errors to the session instead of returning them as a JSON structure:</p><pre><code>$response-&gt;assertSessionHasErrors(
    array $keys = [], $format = null, $errorBag = &#39;default&#39;
);
</code></pre><p>For example, to assert that the <code>name</code> and <code>email</code> fields have validation error messages that were flashed to the session, you may invoke the <code>assertSessionHasErrors</code> method like so:</p><pre><code>$response-&gt;assertSessionHasErrors([&#39;name&#39;, &#39;email&#39;]);
</code></pre><p>Or, you may assert that a given field has a particular validation error message:</p><pre><code>$response-&gt;assertSessionHasErrors([
    &#39;name&#39; =&gt; &#39;The given name was invalid.&#39;
]);
</code></pre><blockquote><p><strong>Note</strong><br> The more generic <a href="#assert-invalid">assertInvalid</a> method may be used to assert that a response has validation errors returned as JSON <strong>or</strong> that errors were flashed to session storage.</p></blockquote><p><a name="assert-session-has-errors-in"></a></p><h4 id="assertsessionhaserrorsin" tabindex="-1"><a class="header-anchor" href="#assertsessionhaserrorsin" aria-hidden="true">#</a> assertSessionHasErrorsIn</h4><p>Assert that the session contains an error for the given <code>$keys</code> within a specific <a href="./validation#named-error-bags">error bag</a>. If <code>$keys</code> is an associative array, assert that the session contains a specific error message (value) for each field (key), within the error bag:</p><pre><code>$response-&gt;assertSessionHasErrorsIn($errorBag, $keys = [], $format = null);
</code></pre><p><a name="assert-session-has-no-errors"></a></p><h4 id="assertsessionhasnoerrors" tabindex="-1"><a class="header-anchor" href="#assertsessionhasnoerrors" aria-hidden="true">#</a> assertSessionHasNoErrors</h4><p>Assert that the session has no validation errors:</p><pre><code>$response-&gt;assertSessionHasNoErrors();
</code></pre><p><a name="assert-session-doesnt-have-errors"></a></p><h4 id="assertsessiondoesnthaveerrors" tabindex="-1"><a class="header-anchor" href="#assertsessiondoesnthaveerrors" aria-hidden="true">#</a> assertSessionDoesntHaveErrors</h4><p>Assert that the session has no validation errors for the given keys:</p><pre><code>$response-&gt;assertSessionDoesntHaveErrors($keys = [], $format = null, $errorBag = &#39;default&#39;);
</code></pre><blockquote><p><strong>Note</strong><br> The more generic <a href="#assert-valid">assertValid</a> method may be used to assert that a response does not have validation errors that were returned as JSON <strong>and</strong> that no errors were flashed to session storage.</p></blockquote><p><a name="assert-session-missing"></a></p><h4 id="assertsessionmissing" tabindex="-1"><a class="header-anchor" href="#assertsessionmissing" aria-hidden="true">#</a> assertSessionMissing</h4><p>Assert that the session does not contain the given key:</p><pre><code>$response-&gt;assertSessionMissing($key);
</code></pre><p><a name="assert-status"></a></p><h4 id="assertstatus" tabindex="-1"><a class="header-anchor" href="#assertstatus" aria-hidden="true">#</a> assertStatus</h4><p>Assert that the response has a given HTTP status code:</p><pre><code>$response-&gt;assertStatus($code);
</code></pre><p><a name="assert-successful"></a></p><h4 id="assertsuccessful" tabindex="-1"><a class="header-anchor" href="#assertsuccessful" aria-hidden="true">#</a> assertSuccessful</h4><p>Assert that the response has a successful (&gt;= 200 and &lt; 300) HTTP status code:</p><pre><code>$response-&gt;assertSuccessful();
</code></pre><p><a name="assert-too-many-requests"></a></p><h4 id="asserttoomanyrequests" tabindex="-1"><a class="header-anchor" href="#asserttoomanyrequests" aria-hidden="true">#</a> assertTooManyRequests</h4><p>Assert that the response has a too many requests (429) HTTP status code:</p><pre><code>$response-&gt;assertTooManyRequests();
</code></pre><p><a name="assert-unauthorized"></a></p><h4 id="assertunauthorized" tabindex="-1"><a class="header-anchor" href="#assertunauthorized" aria-hidden="true">#</a> assertUnauthorized</h4><p>Assert that the response has an unauthorized (401) HTTP status code:</p><pre><code>$response-&gt;assertUnauthorized();
</code></pre><p><a name="assert-unprocessable"></a></p><h4 id="assertunprocessable" tabindex="-1"><a class="header-anchor" href="#assertunprocessable" aria-hidden="true">#</a> assertUnprocessable</h4><p>Assert that the response has an unprocessable entity (422) HTTP status code:</p><pre><code>$response-&gt;assertUnprocessable();
</code></pre><p><a name="assert-unsupported-media-type"></a></p><h4 id="assertunsupportedmediatype" tabindex="-1"><a class="header-anchor" href="#assertunsupportedmediatype" aria-hidden="true">#</a> assertUnsupportedMediaType</h4><p>Assert that the response has an unsupported media type (415) HTTP status code:</p><pre><code>$response-&gt;assertUnsupportedMediaType();
</code></pre><p><a name="assert-valid"></a></p><h4 id="assertvalid" tabindex="-1"><a class="header-anchor" href="#assertvalid" aria-hidden="true">#</a> assertValid</h4><p>Assert that the response has no validation errors for the given keys. This method may be used for asserting against responses where the validation errors are returned as a JSON structure or where the validation errors have been flashed to the session:</p><pre><code>// Assert that no validation errors are present...
$response-&gt;assertValid();

// Assert that the given keys do not have validation errors...
$response-&gt;assertValid([&#39;name&#39;, &#39;email&#39;]);
</code></pre><p><a name="assert-invalid"></a></p><h4 id="assertinvalid" tabindex="-1"><a class="header-anchor" href="#assertinvalid" aria-hidden="true">#</a> assertInvalid</h4><p>Assert that the response has validation errors for the given keys. This method may be used for asserting against responses where the validation errors are returned as a JSON structure or where the validation errors have been flashed to the session:</p><pre><code>$response-&gt;assertInvalid([&#39;name&#39;, &#39;email&#39;]);
</code></pre><p>You may also assert that a given key has a particular validation error message. When doing so, you may provide the entire message or only a small portion of the message:</p><pre><code>$response-&gt;assertInvalid([
    &#39;name&#39; =&gt; &#39;The name field is required.&#39;,
    &#39;email&#39; =&gt; &#39;valid email address&#39;,
]);
</code></pre><p><a name="assert-view-has"></a></p><h4 id="assertviewhas" tabindex="-1"><a class="header-anchor" href="#assertviewhas" aria-hidden="true">#</a> assertViewHas</h4><p>Assert that the response view contains a given piece of data:</p><pre><code>$response-&gt;assertViewHas($key, $value = null);
</code></pre><p>Passing a closure as the second argument to the <code>assertViewHas</code> method will allow you to inspect and make assertions against a particular piece of view data:</p><pre><code>$response-&gt;assertViewHas(&#39;user&#39;, function (User $user) {
    return $user-&gt;name === &#39;Taylor&#39;;
});
</code></pre><p>In addition, view data may be accessed as array variables on the response, allowing you to conveniently inspect it:</p><pre><code>$this-&gt;assertEquals(&#39;Taylor&#39;, $response[&#39;name&#39;]);
</code></pre><p><a name="assert-view-has-all"></a></p><h4 id="assertviewhasall" tabindex="-1"><a class="header-anchor" href="#assertviewhasall" aria-hidden="true">#</a> assertViewHasAll</h4><p>Assert that the response view has a given list of data:</p><pre><code>$response-&gt;assertViewHasAll(array $data);
</code></pre><p>This method may be used to assert that the view simply contains data matching the given keys:</p><pre><code>$response-&gt;assertViewHasAll([
    &#39;name&#39;,
    &#39;email&#39;,
]);
</code></pre><p>Or, you may assert that the view data is present and has specific values:</p><pre><code>$response-&gt;assertViewHasAll([
    &#39;name&#39; =&gt; &#39;Taylor Otwell&#39;,
    &#39;email&#39; =&gt; &#39;taylor@example.com,&#39;,
]);
</code></pre><p><a name="assert-view-is"></a></p><h4 id="assertviewis" tabindex="-1"><a class="header-anchor" href="#assertviewis" aria-hidden="true">#</a> assertViewIs</h4><p>Assert that the given view was returned by the route:</p><pre><code>$response-&gt;assertViewIs($value);
</code></pre><p><a name="assert-view-missing"></a></p><h4 id="assertviewmissing" tabindex="-1"><a class="header-anchor" href="#assertviewmissing" aria-hidden="true">#</a> assertViewMissing</h4><p>Assert that the given data key was not made available to the view returned in the application&#39;s response:</p><pre><code>$response-&gt;assertViewMissing($key);
</code></pre><p><a name="authentication-assertions"></a></p><h3 id="authentication-assertions" tabindex="-1"><a class="header-anchor" href="#authentication-assertions" aria-hidden="true">#</a> Authentication Assertions</h3><p>Laravel also provides a variety of authentication related assertions that you may utilize within your application&#39;s feature tests. Note that these methods are invoked on the test class itself and not the <code>Illuminate\\Testing\\TestResponse</code> instance returned by methods such as <code>get</code> and <code>post</code>.</p><p><a name="assert-authenticated"></a></p><h4 id="assertauthenticated" tabindex="-1"><a class="header-anchor" href="#assertauthenticated" aria-hidden="true">#</a> assertAuthenticated</h4><p>Assert that a user is authenticated:</p><pre><code>$this-&gt;assertAuthenticated($guard = null);
</code></pre><p><a name="assert-guest"></a></p><h4 id="assertguest" tabindex="-1"><a class="header-anchor" href="#assertguest" aria-hidden="true">#</a> assertGuest</h4><p>Assert that a user is not authenticated:</p><pre><code>$this-&gt;assertGuest($guard = null);
</code></pre><p><a name="assert-authenticated-as"></a></p><h4 id="assertauthenticatedas" tabindex="-1"><a class="header-anchor" href="#assertauthenticatedas" aria-hidden="true">#</a> assertAuthenticatedAs</h4><p>Assert that a specific user is authenticated:</p><pre><code>$this-&gt;assertAuthenticatedAs($user, $guard = null);
</code></pre><p><a name="validation-assertions"></a></p><h2 id="validation-assertions" tabindex="-1"><a class="header-anchor" href="#validation-assertions" aria-hidden="true">#</a> Validation Assertions</h2><p>Laravel provides two primary validation related assertions that you may use to ensure the data provided in your request was either valid or invalid.</p><p><a name="validation-assert-valid"></a></p><h4 id="assertvalid-1" tabindex="-1"><a class="header-anchor" href="#assertvalid-1" aria-hidden="true">#</a> assertValid</h4><p>Assert that the response has no validation errors for the given keys. This method may be used for asserting against responses where the validation errors are returned as a JSON structure or where the validation errors have been flashed to the session:</p><pre><code>// Assert that no validation errors are present...
$response-&gt;assertValid();

// Assert that the given keys do not have validation errors...
$response-&gt;assertValid([&#39;name&#39;, &#39;email&#39;]);
</code></pre><p><a name="validation-assert-invalid"></a></p><h4 id="assertinvalid-1" tabindex="-1"><a class="header-anchor" href="#assertinvalid-1" aria-hidden="true">#</a> assertInvalid</h4><p>Assert that the response has validation errors for the given keys. This method may be used for asserting against responses where the validation errors are returned as a JSON structure or where the validation errors have been flashed to the session:</p><pre><code>$response-&gt;assertInvalid([&#39;name&#39;, &#39;email&#39;]);
</code></pre><p>You may also assert that a given key has a particular validation error message. When doing so, you may provide the entire message or only a small portion of the message:</p><pre><code>$response-&gt;assertInvalid([
    &#39;name&#39; =&gt; &#39;The name field is required.&#39;,
    &#39;email&#39; =&gt; &#39;valid email address&#39;,
]);
</code></pre>`,359),p=[o,i,d];function c(h,l){return t(),n("div",null,p)}const m=a(r,[["render",c],["__file","http-tests.html.vue"]]);export{m as default};
