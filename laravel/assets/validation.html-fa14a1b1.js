import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as s,c as d,b as e,d as a,e as i,a as n}from"./app-06635a3b.js";const l={},u=n(`<h1 id="validation" tabindex="-1"><a class="header-anchor" href="#validation" aria-hidden="true">#</a> Validation</h1><ul><li><a href="#introduction">Introduction</a></li><li><a href="#validation-quickstart">Validation Quickstart</a><ul><li><a href="#quick-defining-the-routes">Defining The Routes</a></li><li><a href="#quick-creating-the-controller">Creating The Controller</a></li><li><a href="#quick-writing-the-validation-logic">Writing The Validation Logic</a></li><li><a href="#quick-displaying-the-validation-errors">Displaying The Validation Errors</a></li><li><a href="#repopulating-forms">Repopulating Forms</a></li><li><a href="#a-note-on-optional-fields">A Note On Optional Fields</a></li><li><a href="#validation-error-response-format">Validation Error Response Format</a></li></ul></li><li><a href="#form-request-validation">Form Request Validation</a><ul><li><a href="#creating-form-requests">Creating Form Requests</a></li><li><a href="#authorizing-form-requests">Authorizing Form Requests</a></li><li><a href="#customizing-the-error-messages">Customizing The Error Messages</a></li><li><a href="#preparing-input-for-validation">Preparing Input For Validation</a></li></ul></li><li><a href="#manually-creating-validators">Manually Creating Validators</a><ul><li><a href="#automatic-redirection">Automatic Redirection</a></li><li><a href="#named-error-bags">Named Error Bags</a></li><li><a href="#manual-customizing-the-error-messages">Customizing The Error Messages</a></li><li><a href="#performing-additional-validation">Performing Additional Validation</a></li></ul></li><li><a href="#working-with-validated-input">Working With Validated Input</a></li><li><a href="#working-with-error-messages">Working With Error Messages</a><ul><li><a href="#specifying-custom-messages-in-language-files">Specifying Custom Messages In Language Files</a></li><li><a href="#specifying-attribute-in-language-files">Specifying Attributes In Language Files</a></li><li><a href="#specifying-values-in-language-files">Specifying Values In Language Files</a></li></ul></li><li><a href="#available-validation-rules">Available Validation Rules</a></li><li><a href="#conditionally-adding-rules">Conditionally Adding Rules</a></li><li><a href="#validating-arrays">Validating Arrays</a><ul><li><a href="#validating-nested-array-input">Validating Nested Array Input</a></li><li><a href="#error-message-indexes-and-positions">Error Message Indexes &amp; Positions</a></li></ul></li><li><a href="#validating-files">Validating Files</a></li><li><a href="#validating-passwords">Validating Passwords</a></li><li><a href="#custom-validation-rules">Custom Validation Rules</a><ul><li><a href="#using-rule-objects">Using Rule Objects</a></li><li><a href="#using-closures">Using Closures</a></li><li><a href="#implicit-rules">Implicit Rules</a></li></ul></li></ul><p><a name="introduction"></a></p><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p>Laravel provides several different approaches to validate your application&#39;s incoming data. It is most common to use the <code>validate</code> method available on all incoming HTTP requests. However, we will discuss other approaches to validation as well.</p><p>Laravel includes a wide variety of convenient validation rules that you may apply to data, even providing the ability to validate if values are unique in a given database table. We&#39;ll cover each of these validation rules in detail so that you are familiar with all of Laravel&#39;s validation features.</p><p><a name="validation-quickstart"></a></p><h2 id="validation-quickstart" tabindex="-1"><a class="header-anchor" href="#validation-quickstart" aria-hidden="true">#</a> Validation Quickstart</h2><p>To learn about Laravel&#39;s powerful validation features, let&#39;s look at a complete example of validating a form and displaying the error messages back to the user. By reading this high-level overview, you&#39;ll be able to gain a good general understanding of how to validate incoming request data using Laravel:</p><p><a name="quick-defining-the-routes"></a></p><h3 id="defining-the-routes" tabindex="-1"><a class="header-anchor" href="#defining-the-routes" aria-hidden="true">#</a> Defining The Routes</h3><p>First, let&#39;s assume we have the following routes defined in our <code>routes/web.php</code> file:</p><pre><code>use App\\Http\\Controllers\\PostController;

Route::get(&#39;/post/create&#39;, [PostController::class, &#39;create&#39;]);
Route::post(&#39;/post&#39;, [PostController::class, &#39;store&#39;]);
</code></pre><p>The <code>GET</code> route will display a form for the user to create a new blog post, while the <code>POST</code> route will store the new blog post in the database.</p><p><a name="quick-creating-the-controller"></a></p><h3 id="creating-the-controller" tabindex="-1"><a class="header-anchor" href="#creating-the-controller" aria-hidden="true">#</a> Creating The Controller</h3><p>Next, let&#39;s take a look at a simple controller that handles incoming requests to these routes. We&#39;ll leave the <code>store</code> method empty for now:</p><pre><code>&lt;?php

namespace App\\Http\\Controllers;

use Illuminate\\Http\\RedirectResponse;
use Illuminate\\Http\\Request;
use Illuminate\\View\\View;

class PostController extends Controller
{
    /**
     * Show the form to create a new blog post.
     */
    public function create(): View
    {
        return view(&#39;post.create&#39;);
    }

    /**
     * Store a new blog post.
     */
    public function store(Request $request): RedirectResponse
    {
        // Validate and store the blog post...

        $post = /** ... */

        return to_route(&#39;post.show&#39;, [&#39;post&#39; =&gt; $post-&gt;id]);
    }
}
</code></pre><p><a name="quick-writing-the-validation-logic"></a></p><h3 id="writing-the-validation-logic" tabindex="-1"><a class="header-anchor" href="#writing-the-validation-logic" aria-hidden="true">#</a> Writing The Validation Logic</h3><p>Now we are ready to fill in our <code>store</code> method with the logic to validate the new blog post. To do this, we will use the <code>validate</code> method provided by the <code>Illuminate\\Http\\Request</code> object. If the validation rules pass, your code will keep executing normally; however, if validation fails, an <code>Illuminate\\Validation\\ValidationException</code> exception will be thrown and the proper error response will automatically be sent back to the user.</p><p>If validation fails during a traditional HTTP request, a redirect response to the previous URL will be generated. If the incoming request is an XHR request, a <a href="#validation-error-response-format">JSON response containing the validation error messages</a> will be returned.</p><p>To get a better understanding of the <code>validate</code> method, let&#39;s jump back into the <code>store</code> method:</p><pre><code>/**
 * Store a new blog post.
 */
public function store(Request $request): RedirectResponse
{
    $validated = $request-&gt;validate([
        &#39;title&#39; =&gt; &#39;required|unique:posts|max:255&#39;,
        &#39;body&#39; =&gt; &#39;required&#39;,
    ]);

    // The blog post is valid...

    return redirect(&#39;/posts&#39;);
}
</code></pre><p>As you can see, the validation rules are passed into the <code>validate</code> method. Don&#39;t worry - all available validation rules are <a href="#available-validation-rules">documented</a>. Again, if the validation fails, the proper response will automatically be generated. If the validation passes, our controller will continue executing normally.</p><p>Alternatively, validation rules may be specified as arrays of rules instead of a single <code>|</code> delimited string:</p><pre><code>$validatedData = $request-&gt;validate([
    &#39;title&#39; =&gt; [&#39;required&#39;, &#39;unique:posts&#39;, &#39;max:255&#39;],
    &#39;body&#39; =&gt; [&#39;required&#39;],
]);
</code></pre><p>In addition, you may use the <code>validateWithBag</code> method to validate a request and store any error messages within a <a href="#named-error-bags">named error bag</a>:</p><pre><code>$validatedData = $request-&gt;validateWithBag(&#39;post&#39;, [
    &#39;title&#39; =&gt; [&#39;required&#39;, &#39;unique:posts&#39;, &#39;max:255&#39;],
    &#39;body&#39; =&gt; [&#39;required&#39;],
]);
</code></pre><p><a name="stopping-on-first-validation-failure"></a></p><h4 id="stopping-on-first-validation-failure" tabindex="-1"><a class="header-anchor" href="#stopping-on-first-validation-failure" aria-hidden="true">#</a> Stopping On First Validation Failure</h4><p>Sometimes you may wish to stop running validation rules on an attribute after the first validation failure. To do so, assign the <code>bail</code> rule to the attribute:</p><pre><code>$request-&gt;validate([
    &#39;title&#39; =&gt; &#39;bail|required|unique:posts|max:255&#39;,
    &#39;body&#39; =&gt; &#39;required&#39;,
]);
</code></pre><p>In this example, if the <code>unique</code> rule on the <code>title</code> attribute fails, the <code>max</code> rule will not be checked. Rules will be validated in the order they are assigned.</p><p><a name="a-note-on-nested-attributes"></a></p><h4 id="a-note-on-nested-attributes" tabindex="-1"><a class="header-anchor" href="#a-note-on-nested-attributes" aria-hidden="true">#</a> A Note On Nested Attributes</h4><p>If the incoming HTTP request contains &quot;nested&quot; field data, you may specify these fields in your validation rules using &quot;dot&quot; syntax:</p><pre><code>$request-&gt;validate([
    &#39;title&#39; =&gt; &#39;required|unique:posts|max:255&#39;,
    &#39;author.name&#39; =&gt; &#39;required&#39;,
    &#39;author.description&#39; =&gt; &#39;required&#39;,
]);
</code></pre><p>On the other hand, if your field name contains a literal period, you can explicitly prevent this from being interpreted as &quot;dot&quot; syntax by escaping the period with a backslash:</p><pre><code>$request-&gt;validate([
    &#39;title&#39; =&gt; &#39;required|unique:posts|max:255&#39;,
    &#39;v1\\.0&#39; =&gt; &#39;required&#39;,
]);
</code></pre><p><a name="quick-displaying-the-validation-errors"></a></p><h3 id="displaying-the-validation-errors" tabindex="-1"><a class="header-anchor" href="#displaying-the-validation-errors" aria-hidden="true">#</a> Displaying The Validation Errors</h3><p>So, what if the incoming request fields do not pass the given validation rules? As mentioned previously, Laravel will automatically redirect the user back to their previous location. In addition, all of the validation errors and <a href="./requests#retrieving-old-input">request input</a> will automatically be <a href="./session#flash-data">flashed to the session</a>.</p><p>An <code>$errors</code> variable is shared with all of your application&#39;s views by the <code>Illuminate\\View\\Middleware\\ShareErrorsFromSession</code> middleware, which is provided by the <code>web</code> middleware group. When this middleware is applied an <code>$errors</code> variable will always be available in your views, allowing you to conveniently assume the <code>$errors</code> variable is always defined and can be safely used. The <code>$errors</code> variable will be an instance of <code>Illuminate\\Support\\MessageBag</code>. For more information on working with this object, <a href="#working-with-error-messages">check out its documentation</a>.</p><p>So, in our example, the user will be redirected to our controller&#39;s <code>create</code> method when validation fails, allowing us to display the error messages in the view:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;!-- /resources/views/post/create.blade.php --&gt;

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="quick-customizing-the-error-messages"></a></p><h4 id="customizing-the-error-messages" tabindex="-1"><a class="header-anchor" href="#customizing-the-error-messages" aria-hidden="true">#</a> Customizing The Error Messages</h4><p>Laravel&#39;s built-in validation rules each have an error message that is located in your application&#39;s <code>lang/en/validation.php</code> file. If your application does not have a <code>lang</code> directory, you may instruct Laravel to create it using the <code>lang:publish</code> Artisan command.</p><p>Within the <code>lang/en/validation.php</code> file, you will find a translation entry for each validation rule. You are free to change or modify these messages based on the needs of your application.</p><p>In addition, you may copy this file to another language directory to translate the messages for your application&#39;s language. To learn more about Laravel localization, check out the complete <a href="./localization">localization documentation</a>.</p><blockquote><p><strong>Warning</strong> By default, the Laravel application skeleton does not include the <code>lang</code> directory. If you would like to customize Laravel&#39;s language files, you may publish them via the <code>lang:publish</code> Artisan command.</p></blockquote><p><a name="quick-xhr-requests-and-validation"></a></p><h4 id="xhr-requests-validation" tabindex="-1"><a class="header-anchor" href="#xhr-requests-validation" aria-hidden="true">#</a> XHR Requests &amp; Validation</h4><p>In this example, we used a traditional form to send data to the application. However, many applications receive XHR requests from a JavaScript powered frontend. When using the <code>validate</code> method during an XHR request, Laravel will not generate a redirect response. Instead, Laravel generates a <a href="#validation-error-response-format">JSON response containing all of the validation errors</a>. This JSON response will be sent with a 422 HTTP status code.</p><p><a name="the-at-error-directive"></a></p><h4 id="the-error-directive" tabindex="-1"><a class="header-anchor" href="#the-error-directive" aria-hidden="true">#</a> The <code>@error</code> Directive</h4><p>You may use the <code>@error</code> <a href="./blade">Blade</a> directive to quickly determine if validation error messages exist for a given attribute. Within an <code>@error</code> directive, you may echo the <code>$message</code> variable to display the error message:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;!-- /resources/views/post/create.blade.php --&gt;

&lt;label for=&quot;title&quot;&gt;Post Title&lt;/label&gt;

&lt;input id=&quot;title&quot;
    type=&quot;text&quot;
    name=&quot;title&quot;
    class=&quot;@error(&#39;title&#39;) is-invalid @enderror&quot;&gt;

@error(&#39;title&#39;)
    &lt;div class=&quot;alert alert-danger&quot;&gt;{{ $message }}&lt;/div&gt;
@enderror
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If you are using <a href="#named-error-bags">named error bags</a>, you may pass the name of the error bag as the second argument to the <code>@error</code> directive:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;input ... class=&quot;@error(&#39;title&#39;, &#39;post&#39;) is-invalid @enderror&quot;&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="repopulating-forms"></a></p><h3 id="repopulating-forms" tabindex="-1"><a class="header-anchor" href="#repopulating-forms" aria-hidden="true">#</a> Repopulating Forms</h3><p>When Laravel generates a redirect response due to a validation error, the framework will automatically <a href="./session#flash-data">flash all of the request&#39;s input to the session</a>. This is done so that you may conveniently access the input during the next request and repopulate the form that the user attempted to submit.</p><p>To retrieve flashed input from the previous request, invoke the <code>old</code> method on an instance of <code>Illuminate\\Http\\Request</code>. The <code>old</code> method will pull the previously flashed input data from the <a href="./session">session</a>:</p><pre><code>$title = $request-&gt;old(&#39;title&#39;);
</code></pre><p>Laravel also provides a global <code>old</code> helper. If you are displaying old input within a <a href="./blade">Blade template</a>, it is more convenient to use the <code>old</code> helper to repopulate the form. If no old input exists for the given field, <code>null</code> will be returned:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;input type=&quot;text&quot; name=&quot;title&quot; value=&quot;{{ old(&#39;title&#39;) }}&quot;&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="a-note-on-optional-fields"></a></p><h3 id="a-note-on-optional-fields" tabindex="-1"><a class="header-anchor" href="#a-note-on-optional-fields" aria-hidden="true">#</a> A Note On Optional Fields</h3><p>By default, Laravel includes the <code>TrimStrings</code> and <code>ConvertEmptyStringsToNull</code> middleware in your application&#39;s global middleware stack. These middleware are listed in the stack by the <code>App\\Http\\Kernel</code> class. Because of this, you will often need to mark your &quot;optional&quot; request fields as <code>nullable</code> if you do not want the validator to consider <code>null</code> values as invalid. For example:</p><pre><code>$request-&gt;validate([
    &#39;title&#39; =&gt; &#39;required|unique:posts|max:255&#39;,
    &#39;body&#39; =&gt; &#39;required&#39;,
    &#39;publish_at&#39; =&gt; &#39;nullable|date&#39;,
]);
</code></pre><p>In this example, we are specifying that the <code>publish_at</code> field may be either <code>null</code> or a valid date representation. If the <code>nullable</code> modifier is not added to the rule definition, the validator would consider <code>null</code> an invalid date.</p><p><a name="validation-error-response-format"></a></p><h3 id="validation-error-response-format" tabindex="-1"><a class="header-anchor" href="#validation-error-response-format" aria-hidden="true">#</a> Validation Error Response Format</h3><p>When your application throws a <code>Illuminate\\Validation\\ValidationException</code> exception and the incoming HTTP request is expecting a JSON response, Laravel will automatically format the error messages for you and return a <code>422 Unprocessable Entity</code> HTTP response.</p><p>Below, you can review an example of the JSON response format for validation errors. Note that nested error keys are flattened into &quot;dot&quot; notation format:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="form-request-validation"></a></p><h2 id="form-request-validation" tabindex="-1"><a class="header-anchor" href="#form-request-validation" aria-hidden="true">#</a> Form Request Validation</h2><p><a name="creating-form-requests"></a></p><h3 id="creating-form-requests" tabindex="-1"><a class="header-anchor" href="#creating-form-requests" aria-hidden="true">#</a> Creating Form Requests</h3><p>For more complex validation scenarios, you may wish to create a &quot;form request&quot;. Form requests are custom request classes that encapsulate their own validation and authorization logic. To create a form request class, you may use the <code>make:request</code> Artisan CLI command:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan make:request StorePostRequest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The generated form request class will be placed in the <code>app/Http/Requests</code> directory. If this directory does not exist, it will be created when you run the <code>make:request</code> command. Each form request generated by Laravel has two methods: <code>authorize</code> and <code>rules</code>.</p><p>As you might have guessed, the <code>authorize</code> method is responsible for determining if the currently authenticated user can perform the action represented by the request, while the <code>rules</code> method returns the validation rules that should apply to the request&#39;s data:</p><pre><code>/**
 * Get the validation rules that apply to the request.
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
</code></pre><blockquote><p><strong>Note</strong> You may type-hint any dependencies you require within the <code>rules</code> method&#39;s signature. They will automatically be resolved via the Laravel <a href="./container">service container</a>.</p></blockquote><p>So, how are the validation rules evaluated? All you need to do is type-hint the request on your controller method. The incoming form request is validated before the controller method is called, meaning you do not need to clutter your controller with any validation logic:</p><pre><code>/**
 * Store a new blog post.
 */
public function store(StorePostRequest $request): RedirectResponse
{
    // The incoming request is valid...

    // Retrieve the validated input data...
    $validated = $request-&gt;validated();

    // Retrieve a portion of the validated input data...
    $validated = $request-&gt;safe()-&gt;only([&#39;name&#39;, &#39;email&#39;]);
    $validated = $request-&gt;safe()-&gt;except([&#39;name&#39;, &#39;email&#39;]);

    // Store the blog post...

    return redirect(&#39;/posts&#39;);
}
</code></pre><p>If validation fails, a redirect response will be generated to send the user back to their previous location. The errors will also be flashed to the session so they are available for display. If the request was an XHR request, an HTTP response with a 422 status code will be returned to the user including a <a href="#validation-error-response-format">JSON representation of the validation errors</a>.</p><blockquote><p><strong>Note</strong> Need to add real-time form request validation to your Inertia powered Laravel frontend? Check out <a href="./precognition">Laravel Precognition</a>.</p></blockquote><p><a name="performing-additional-validation-on-form-requests"></a></p><h4 id="performing-additional-validation" tabindex="-1"><a class="header-anchor" href="#performing-additional-validation" aria-hidden="true">#</a> Performing Additional Validation</h4><p>Sometimes you need to perform additional validation after your initial validation is complete. You can accomplish this using the form request&#39;s <code>after</code> method.</p><p>The <code>after</code> method should return an array of callables or closures which will be invoked after validation is complete. The given callables will receive an <code>Illuminate\\Validation\\Validator</code> instance, allowing you to raise additional error messages if necessary:</p><pre><code>use Illuminate\\Validation\\Validator;

/**
 * Get the &quot;after&quot; validation callables for the request.
 */
public function after(): array
{
    return [
        function (Validator $validator) {
            if ($this-&gt;somethingElseIsInvalid()) {
                $validator-&gt;errors()-&gt;add(
                    &#39;field&#39;,
                    &#39;Something is wrong with this field!&#39;
                );
            }
        }
    ];
}
</code></pre><p>As noted, the array returned by the <code>after</code> method may also contain invokable classes. The <code>__invoke</code> method of these classes will receive an <code>Illuminate\\Validation\\Validator</code> instance:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Validation<span class="token punctuation">\\</span>ValidateShippingTime</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Validation<span class="token punctuation">\\</span>ValidateUserStatus</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Validation<span class="token punctuation">\\</span>Validator</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * Get the &quot;after&quot; validation callables for the request.
 */</span>
<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">after</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">array</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>
        <span class="token keyword">new</span> <span class="token class-name">ValidateUserStatus</span><span class="token punctuation">,</span>
        <span class="token keyword">new</span> <span class="token class-name">ValidateShippingTime</span><span class="token punctuation">,</span>
        <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">Validator</span> <span class="token variable">$validator</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="request-stopping-on-first-validation-rule-failure"></a></p><h4 id="stopping-on-the-first-validation-failure" tabindex="-1"><a class="header-anchor" href="#stopping-on-the-first-validation-failure" aria-hidden="true">#</a> Stopping On The First Validation Failure</h4><p>By adding a <code>stopOnFirstFailure</code> property to your request class, you may inform the validator that it should stop validating all attributes once a single validation failure has occurred:</p><pre><code>/**
 * Indicates if the validator should stop on the first rule failure.
 *
 * @var bool
 */
protected $stopOnFirstFailure = true;
</code></pre><p><a name="customizing-the-redirect-location"></a></p><h4 id="customizing-the-redirect-location" tabindex="-1"><a class="header-anchor" href="#customizing-the-redirect-location" aria-hidden="true">#</a> Customizing The Redirect Location</h4><p>As previously discussed, a redirect response will be generated to send the user back to their previous location when form request validation fails. However, you are free to customize this behavior. To do so, define a <code>$redirect</code> property on your form request:</p><pre><code>/**
 * The URI that users should be redirected to if validation fails.
 *
 * @var string
 */
protected $redirect = &#39;/dashboard&#39;;
</code></pre><p>Or, if you would like to redirect users to a named route, you may define a <code>$redirectRoute</code> property instead:</p><pre><code>/**
 * The route that users should be redirected to if validation fails.
 *
 * @var string
 */
protected $redirectRoute = &#39;dashboard&#39;;
</code></pre><p><a name="authorizing-form-requests"></a></p><h3 id="authorizing-form-requests" tabindex="-1"><a class="header-anchor" href="#authorizing-form-requests" aria-hidden="true">#</a> Authorizing Form Requests</h3><p>The form request class also contains an <code>authorize</code> method. Within this method, you may determine if the authenticated user actually has the authority to update a given resource. For example, you may determine if a user actually owns a blog comment they are attempting to update. Most likely, you will interact with your <a href="./authorization">authorization gates and policies</a> within this method:</p><pre><code>use App\\Models\\Comment;

/**
 * Determine if the user is authorized to make this request.
 */
public function authorize(): bool
{
    $comment = Comment::find($this-&gt;route(&#39;comment&#39;));

    return $comment &amp;&amp; $this-&gt;user()-&gt;can(&#39;update&#39;, $comment);
}
</code></pre><p>Since all form requests extend the base Laravel request class, we may use the <code>user</code> method to access the currently authenticated user. Also, note the call to the <code>route</code> method in the example above. This method grants you access to the URI parameters defined on the route being called, such as the <code>{comment}</code> parameter in the example below:</p><pre><code>Route::post(&#39;/comment/{comment}&#39;);
</code></pre><p>Therefore, if your application is taking advantage of <a href="./routing#route-model-binding">route model binding</a>, your code may be made even more succinct by accessing the resolved model as a property of the request:</p><pre><code>return $this-&gt;user()-&gt;can(&#39;update&#39;, $this-&gt;comment);
</code></pre><p>If the <code>authorize</code> method returns <code>false</code>, an HTTP response with a 403 status code will automatically be returned and your controller method will not execute.</p><p>If you plan to handle authorization logic for the request in another part of your application, you may simply return <code>true</code> from the <code>authorize</code> method:</p><pre><code>/**
 * Determine if the user is authorized to make this request.
 */
public function authorize(): bool
{
    return true;
}
</code></pre><blockquote><p><strong>Note</strong> You may type-hint any dependencies you need within the <code>authorize</code> method&#39;s signature. They will automatically be resolved via the Laravel <a href="./container">service container</a>.</p></blockquote><p><a name="customizing-the-error-messages"></a></p><h3 id="customizing-the-error-messages-1" tabindex="-1"><a class="header-anchor" href="#customizing-the-error-messages-1" aria-hidden="true">#</a> Customizing The Error Messages</h3><p>You may customize the error messages used by the form request by overriding the <code>messages</code> method. This method should return an array of attribute / rule pairs and their corresponding error messages:</p><pre><code>/**
 * Get the error messages for the defined validation rules.
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
</code></pre><p><a name="customizing-the-validation-attributes"></a></p><h4 id="customizing-the-validation-attributes" tabindex="-1"><a class="header-anchor" href="#customizing-the-validation-attributes" aria-hidden="true">#</a> Customizing The Validation Attributes</h4><p>Many of Laravel&#39;s built-in validation rule error messages contain an <code>:attribute</code> placeholder. If you would like the <code>:attribute</code> placeholder of your validation message to be replaced with a custom attribute name, you may specify the custom names by overriding the <code>attributes</code> method. This method should return an array of attribute / name pairs:</p><pre><code>/**
 * Get custom attributes for validator errors.
 *
 * @return array&lt;string, string&gt;
 */
public function attributes(): array
{
    return [
        &#39;email&#39; =&gt; &#39;email address&#39;,
    ];
}
</code></pre><p><a name="preparing-input-for-validation"></a></p><h3 id="preparing-input-for-validation" tabindex="-1"><a class="header-anchor" href="#preparing-input-for-validation" aria-hidden="true">#</a> Preparing Input For Validation</h3><p>If you need to prepare or sanitize any data from the request before you apply your validation rules, you may use the <code>prepareForValidation</code> method:</p><pre><code>use Illuminate\\Support\\Str;

/**
 * Prepare the data for validation.
 */
protected function prepareForValidation(): void
{
    $this-&gt;merge([
        &#39;slug&#39; =&gt; Str::slug($this-&gt;slug),
    ]);
}
</code></pre><p>Likewise, if you need to normalize any request data after validation is complete, you may use the <code>passedValidation</code> method:</p><pre><code>/**
 * Handle a passed validation attempt.
 */
protected function passedValidation(): void
{
    $this-&gt;replace([&#39;name&#39; =&gt; &#39;Taylor&#39;]);
}
</code></pre><p><a name="manually-creating-validators"></a></p><h2 id="manually-creating-validators" tabindex="-1"><a class="header-anchor" href="#manually-creating-validators" aria-hidden="true">#</a> Manually Creating Validators</h2><p>If you do not want to use the <code>validate</code> method on the request, you may create a validator instance manually using the <code>Validator</code> <a href="./facades">facade</a>. The <code>make</code> method on the facade generates a new validator instance:</p><pre><code>&lt;?php

namespace App\\Http\\Controllers;

use Illuminate\\Http\\RedirectResponse;
use Illuminate\\Http\\Request;
use Illuminate\\Support\\Facades\\Validator;

class PostController extends Controller
{
    /**
     * Store a new blog post.
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

        // Retrieve the validated input...
        $validated = $validator-&gt;validated();

        // Retrieve a portion of the validated input...
        $validated = $validator-&gt;safe()-&gt;only([&#39;name&#39;, &#39;email&#39;]);
        $validated = $validator-&gt;safe()-&gt;except([&#39;name&#39;, &#39;email&#39;]);

        // Store the blog post...

        return redirect(&#39;/posts&#39;);
    }
}
</code></pre><p>The first argument passed to the <code>make</code> method is the data under validation. The second argument is an array of the validation rules that should be applied to the data.</p><p>After determining whether the request validation failed, you may use the <code>withErrors</code> method to flash the error messages to the session. When using this method, the <code>$errors</code> variable will automatically be shared with your views after redirection, allowing you to easily display them back to the user. The <code>withErrors</code> method accepts a validator, a <code>MessageBag</code>, or a PHP <code>array</code>.</p><h4 id="stopping-on-first-validation-failure-1" tabindex="-1"><a class="header-anchor" href="#stopping-on-first-validation-failure-1" aria-hidden="true">#</a> Stopping On First Validation Failure</h4><p>The <code>stopOnFirstFailure</code> method will inform the validator that it should stop validating all attributes once a single validation failure has occurred:</p><pre><code>if ($validator-&gt;stopOnFirstFailure()-&gt;fails()) {
    // ...
}
</code></pre><p><a name="automatic-redirection"></a></p><h3 id="automatic-redirection" tabindex="-1"><a class="header-anchor" href="#automatic-redirection" aria-hidden="true">#</a> Automatic Redirection</h3><p>If you would like to create a validator instance manually but still take advantage of the automatic redirection offered by the HTTP request&#39;s <code>validate</code> method, you may call the <code>validate</code> method on an existing validator instance. If validation fails, the user will automatically be redirected or, in the case of an XHR request, a <a href="#validation-error-response-format">JSON response will be returned</a>:</p><pre><code>Validator::make($request-&gt;all(), [
    &#39;title&#39; =&gt; &#39;required|unique:posts|max:255&#39;,
    &#39;body&#39; =&gt; &#39;required&#39;,
])-&gt;validate();
</code></pre><p>You may use the <code>validateWithBag</code> method to store the error messages in a <a href="#named-error-bags">named error bag</a> if validation fails:</p><pre><code>Validator::make($request-&gt;all(), [
    &#39;title&#39; =&gt; &#39;required|unique:posts|max:255&#39;,
    &#39;body&#39; =&gt; &#39;required&#39;,
])-&gt;validateWithBag(&#39;post&#39;);
</code></pre><p><a name="named-error-bags"></a></p><h3 id="named-error-bags" tabindex="-1"><a class="header-anchor" href="#named-error-bags" aria-hidden="true">#</a> Named Error Bags</h3><p>If you have multiple forms on a single page, you may wish to name the <code>MessageBag</code> containing the validation errors, allowing you to retrieve the error messages for a specific form. To achieve this, pass a name as the second argument to <code>withErrors</code>:</p><pre><code>return redirect(&#39;register&#39;)-&gt;withErrors($validator, &#39;login&#39;);
</code></pre><p>You may then access the named <code>MessageBag</code> instance from the <code>$errors</code> variable:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>{{ $errors-&gt;login-&gt;first(&#39;email&#39;) }}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="manual-customizing-the-error-messages"></a></p><h3 id="customizing-the-error-messages-2" tabindex="-1"><a class="header-anchor" href="#customizing-the-error-messages-2" aria-hidden="true">#</a> Customizing The Error Messages</h3><p>If needed, you may provide custom error messages that a validator instance should use instead of the default error messages provided by Laravel. There are several ways to specify custom messages. First, you may pass the custom messages as the third argument to the <code>Validator::make</code> method:</p><pre><code>$validator = Validator::make($input, $rules, $messages = [
    &#39;required&#39; =&gt; &#39;The :attribute field is required.&#39;,
]);
</code></pre><p>In this example, the <code>:attribute</code> placeholder will be replaced by the actual name of the field under validation. You may also utilize other placeholders in validation messages. For example:</p><pre><code>$messages = [
    &#39;same&#39; =&gt; &#39;The :attribute and :other must match.&#39;,
    &#39;size&#39; =&gt; &#39;The :attribute must be exactly :size.&#39;,
    &#39;between&#39; =&gt; &#39;The :attribute value :input is not between :min - :max.&#39;,
    &#39;in&#39; =&gt; &#39;The :attribute must be one of the following types: :values&#39;,
];
</code></pre><p><a name="specifying-a-custom-message-for-a-given-attribute"></a></p><h4 id="specifying-a-custom-message-for-a-given-attribute" tabindex="-1"><a class="header-anchor" href="#specifying-a-custom-message-for-a-given-attribute" aria-hidden="true">#</a> Specifying A Custom Message For A Given Attribute</h4><p>Sometimes you may wish to specify a custom error message only for a specific attribute. You may do so using &quot;dot&quot; notation. Specify the attribute&#39;s name first, followed by the rule:</p><pre><code>$messages = [
    &#39;email.required&#39; =&gt; &#39;We need to know your email address!&#39;,
];
</code></pre><p><a name="specifying-custom-attribute-values"></a></p><h4 id="specifying-custom-attribute-values" tabindex="-1"><a class="header-anchor" href="#specifying-custom-attribute-values" aria-hidden="true">#</a> Specifying Custom Attribute Values</h4><p>Many of Laravel&#39;s built-in error messages include an <code>:attribute</code> placeholder that is replaced with the name of the field or attribute under validation. To customize the values used to replace these placeholders for specific fields, you may pass an array of custom attributes as the fourth argument to the <code>Validator::make</code> method:</p><pre><code>$validator = Validator::make($input, $rules, $messages, [
    &#39;email&#39; =&gt; &#39;email address&#39;,
]);
</code></pre><p><a name="performing-additional-validation"></a></p><h3 id="performing-additional-validation-1" tabindex="-1"><a class="header-anchor" href="#performing-additional-validation-1" aria-hidden="true">#</a> Performing Additional Validation</h3><p>Sometimes you need to perform additional validation after your initial validation is complete. You can accomplish this using the validator&#39;s <code>after</code> method. The <code>after</code> method accepts a closure or an array of callables which will be invoked after validation is complete. The given callables will receive an <code>Illuminate\\Validation\\Validator</code> instance, allowing you to raise additional error messages if necessary:</p><pre><code>use Illuminate\\Support\\Facades\\Validator;

$validator = Validator::make(/* ... */);

$validator-&gt;after(function ($validator) {
    if ($this-&gt;somethingElseIsInvalid()) {
        $validator-&gt;errors()-&gt;add(
            &#39;field&#39;, &#39;Something is wrong with this field!&#39;
        );
    }
});

if ($validator-&gt;fails()) {
    // ...
}
</code></pre><p>As noted, the <code>after</code> method also accepts an array of callables, which is particularly convenient if your &quot;after validation&quot; logic is encapsulated in invokable classes, which will receive an <code>Illuminate\\Validation\\Validator</code> instance via their <code>__invoke</code> method:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Validation<span class="token punctuation">\\</span>ValidateShippingTime</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Validation<span class="token punctuation">\\</span>ValidateUserStatus</span><span class="token punctuation">;</span>

<span class="token variable">$validator</span><span class="token operator">-&gt;</span><span class="token function">after</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">ValidateUserStatus</span><span class="token punctuation">,</span>
    <span class="token keyword">new</span> <span class="token class-name">ValidateShippingTime</span><span class="token punctuation">,</span>
    <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">$validator</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// ...</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="working-with-validated-input"></a></p><h2 id="working-with-validated-input" tabindex="-1"><a class="header-anchor" href="#working-with-validated-input" aria-hidden="true">#</a> Working With Validated Input</h2><p>After validating incoming request data using a form request or a manually created validator instance, you may wish to retrieve the incoming request data that actually underwent validation. This can be accomplished in several ways. First, you may call the <code>validated</code> method on a form request or validator instance. This method returns an array of the data that was validated:</p><pre><code>$validated = $request-&gt;validated();

$validated = $validator-&gt;validated();
</code></pre><p>Alternatively, you may call the <code>safe</code> method on a form request or validator instance. This method returns an instance of <code>Illuminate\\Support\\ValidatedInput</code>. This object exposes <code>only</code>, <code>except</code>, and <code>all</code> methods to retrieve a subset of the validated data or the entire array of validated data:</p><pre><code>$validated = $request-&gt;safe()-&gt;only([&#39;name&#39;, &#39;email&#39;]);

$validated = $request-&gt;safe()-&gt;except([&#39;name&#39;, &#39;email&#39;]);

$validated = $request-&gt;safe()-&gt;all();
</code></pre><p>In addition, the <code>Illuminate\\Support\\ValidatedInput</code> instance may be iterated over and accessed like an array:</p><pre><code>// Validated data may be iterated...
foreach ($request-&gt;safe() as $key =&gt; $value) {
    // ...
}

// Validated data may be accessed as an array...
$validated = $request-&gt;safe();

$email = $validated[&#39;email&#39;];
</code></pre><p>If you would like to add additional fields to the validated data, you may call the <code>merge</code> method:</p><pre><code>$validated = $request-&gt;safe()-&gt;merge([&#39;name&#39; =&gt; &#39;Taylor Otwell&#39;]);
</code></pre><p>If you would like to retrieve the validated data as a <a href="./collections">collection</a> instance, you may call the <code>collect</code> method:</p><pre><code>$collection = $request-&gt;safe()-&gt;collect();
</code></pre><p><a name="working-with-error-messages"></a></p><h2 id="working-with-error-messages" tabindex="-1"><a class="header-anchor" href="#working-with-error-messages" aria-hidden="true">#</a> Working With Error Messages</h2><p>After calling the <code>errors</code> method on a <code>Validator</code> instance, you will receive an <code>Illuminate\\Support\\MessageBag</code> instance, which has a variety of convenient methods for working with error messages. The <code>$errors</code> variable that is automatically made available to all views is also an instance of the <code>MessageBag</code> class.</p><p><a name="retrieving-the-first-error-message-for-a-field"></a></p><h4 id="retrieving-the-first-error-message-for-a-field" tabindex="-1"><a class="header-anchor" href="#retrieving-the-first-error-message-for-a-field" aria-hidden="true">#</a> Retrieving The First Error Message For A Field</h4><p>To retrieve the first error message for a given field, use the <code>first</code> method:</p><pre><code>$errors = $validator-&gt;errors();

echo $errors-&gt;first(&#39;email&#39;);
</code></pre><p><a name="retrieving-all-error-messages-for-a-field"></a></p><h4 id="retrieving-all-error-messages-for-a-field" tabindex="-1"><a class="header-anchor" href="#retrieving-all-error-messages-for-a-field" aria-hidden="true">#</a> Retrieving All Error Messages For A Field</h4><p>If you need to retrieve an array of all the messages for a given field, use the <code>get</code> method:</p><pre><code>foreach ($errors-&gt;get(&#39;email&#39;) as $message) {
    // ...
}
</code></pre><p>If you are validating an array form field, you may retrieve all of the messages for each of the array elements using the <code>*</code> character:</p><pre><code>foreach ($errors-&gt;get(&#39;attachments.*&#39;) as $message) {
    // ...
}
</code></pre><p><a name="retrieving-all-error-messages-for-all-fields"></a></p><h4 id="retrieving-all-error-messages-for-all-fields" tabindex="-1"><a class="header-anchor" href="#retrieving-all-error-messages-for-all-fields" aria-hidden="true">#</a> Retrieving All Error Messages For All Fields</h4><p>To retrieve an array of all messages for all fields, use the <code>all</code> method:</p><pre><code>foreach ($errors-&gt;all() as $message) {
    // ...
}
</code></pre><p><a name="determining-if-messages-exist-for-a-field"></a></p><h4 id="determining-if-messages-exist-for-a-field" tabindex="-1"><a class="header-anchor" href="#determining-if-messages-exist-for-a-field" aria-hidden="true">#</a> Determining If Messages Exist For A Field</h4><p>The <code>has</code> method may be used to determine if any error messages exist for a given field:</p><pre><code>if ($errors-&gt;has(&#39;email&#39;)) {
    // ...
}
</code></pre><p><a name="specifying-custom-messages-in-language-files"></a></p><h3 id="specifying-custom-messages-in-language-files" tabindex="-1"><a class="header-anchor" href="#specifying-custom-messages-in-language-files" aria-hidden="true">#</a> Specifying Custom Messages In Language Files</h3><p>Laravel&#39;s built-in validation rules each have an error message that is located in your application&#39;s <code>lang/en/validation.php</code> file. If your application does not have a <code>lang</code> directory, you may instruct Laravel to create it using the <code>lang:publish</code> Artisan command.</p><p>Within the <code>lang/en/validation.php</code> file, you will find a translation entry for each validation rule. You are free to change or modify these messages based on the needs of your application.</p><p>In addition, you may copy this file to another language directory to translate the messages for your application&#39;s language. To learn more about Laravel localization, check out the complete <a href="./localization">localization documentation</a>.</p><blockquote><p><strong>Warning</strong> By default, the Laravel application skeleton does not include the <code>lang</code> directory. If you would like to customize Laravel&#39;s language files, you may publish them via the <code>lang:publish</code> Artisan command.</p></blockquote><p><a name="custom-messages-for-specific-attributes"></a></p><h4 id="custom-messages-for-specific-attributes" tabindex="-1"><a class="header-anchor" href="#custom-messages-for-specific-attributes" aria-hidden="true">#</a> Custom Messages For Specific Attributes</h4><p>You may customize the error messages used for specified attribute and rule combinations within your application&#39;s validation language files. To do so, add your message customizations to the <code>custom</code> array of your application&#39;s <code>lang/xx/validation.php</code> language file:</p><pre><code>&#39;custom&#39; =&gt; [
    &#39;email&#39; =&gt; [
        &#39;required&#39; =&gt; &#39;We need to know your email address!&#39;,
        &#39;max&#39; =&gt; &#39;Your email address is too long!&#39;
    ],
],
</code></pre><p><a name="specifying-attribute-in-language-files"></a></p><h3 id="specifying-attributes-in-language-files" tabindex="-1"><a class="header-anchor" href="#specifying-attributes-in-language-files" aria-hidden="true">#</a> Specifying Attributes In Language Files</h3><p>Many of Laravel&#39;s built-in error messages include an <code>:attribute</code> placeholder that is replaced with the name of the field or attribute under validation. If you would like the <code>:attribute</code> portion of your validation message to be replaced with a custom value, you may specify the custom attribute name in the <code>attributes</code> array of your <code>lang/xx/validation.php</code> language file:</p><pre><code>&#39;attributes&#39; =&gt; [
    &#39;email&#39; =&gt; &#39;email address&#39;,
],
</code></pre><blockquote><p><strong>Warning</strong> By default, the Laravel application skeleton does not include the <code>lang</code> directory. If you would like to customize Laravel&#39;s language files, you may publish them via the <code>lang:publish</code> Artisan command.</p></blockquote><p><a name="specifying-values-in-language-files"></a></p><h3 id="specifying-values-in-language-files" tabindex="-1"><a class="header-anchor" href="#specifying-values-in-language-files" aria-hidden="true">#</a> Specifying Values In Language Files</h3><p>Some of Laravel&#39;s built-in validation rule error messages contain a <code>:value</code> placeholder that is replaced with the current value of the request attribute. However, you may occasionally need the <code>:value</code> portion of your validation message to be replaced with a custom representation of the value. For example, consider the following rule that specifies that a credit card number is required if the <code>payment_type</code> has a value of <code>cc</code>:</p><pre><code>Validator::make($request-&gt;all(), [
    &#39;credit_card_number&#39; =&gt; &#39;required_if:payment_type,cc&#39;
]);
</code></pre><p>If this validation rule fails, it will produce the following error message:</p><div class="language-none line-numbers-mode" data-ext="none"><pre class="language-none"><code>The credit card number field is required when payment type is cc.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Instead of displaying <code>cc</code> as the payment type value, you may specify a more user-friendly value representation in your <code>lang/xx/validation.php</code> language file by defining a <code>values</code> array:</p><pre><code>&#39;values&#39; =&gt; [
    &#39;payment_type&#39; =&gt; [
        &#39;cc&#39; =&gt; &#39;credit card&#39;
    ],
],
</code></pre><blockquote><p><strong>Warning</strong> By default, the Laravel application skeleton does not include the <code>lang</code> directory. If you would like to customize Laravel&#39;s language files, you may publish them via the <code>lang:publish</code> Artisan command.</p></blockquote><p>After defining this value, the validation rule will produce the following error message:</p><div class="language-none line-numbers-mode" data-ext="none"><pre class="language-none"><code>The credit card number field is required when payment type is credit card.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="available-validation-rules"></a></p><h2 id="available-validation-rules" tabindex="-1"><a class="header-anchor" href="#available-validation-rules" aria-hidden="true">#</a> Available Validation Rules</h2><p>Below is a list of all available validation rules and their function:</p>`,238),c=e("div",{class:"collection-method-list",markdown:"1"},[e("p",null,[e("a",{href:"#rule-accepted"},"Accepted"),e("a",{href:"#rule-accepted-if"},"Accepted If"),e("a",{href:"#rule-active-url"},"Active URL"),e("a",{href:"#rule-after"},"After (Date)"),e("a",{href:"#rule-after-or-equal"},"After Or Equal (Date)"),e("a",{href:"#rule-alpha"},"Alpha"),e("a",{href:"#rule-alpha-dash"},"Alpha Dash"),e("a",{href:"#rule-alpha-num"},"Alpha Numeric"),e("a",{href:"#rule-array"},"Array"),e("a",{href:"#rule-ascii"},"Ascii"),e("a",{href:"#rule-bail"},"Bail"),e("a",{href:"#rule-before"},"Before (Date)"),e("a",{href:"#rule-before-or-equal"},"Before Or Equal (Date)"),e("a",{href:"#rule-between"},"Between"),e("a",{href:"#rule-boolean"},"Boolean"),e("a",{href:"#rule-confirmed"},"Confirmed"),e("a",{href:"#rule-current-password"},"Current Password"),e("a",{href:"#rule-date"},"Date"),e("a",{href:"#rule-date-equals"},"Date Equals"),e("a",{href:"#rule-date-format"},"Date Format"),e("a",{href:"#rule-decimal"},"Decimal"),e("a",{href:"#rule-declined"},"Declined"),e("a",{href:"#rule-declined-if"},"Declined If"),e("a",{href:"#rule-different"},"Different"),e("a",{href:"#rule-digits"},"Digits"),e("a",{href:"#rule-digits-between"},"Digits Between"),e("a",{href:"#rule-dimensions"},"Dimensions (Image Files)"),e("a",{href:"#rule-distinct"},"Distinct"),e("a",{href:"#rule-doesnt-start-with"},"Doesnt Start With"),e("a",{href:"#rule-doesnt-end-with"},"Doesnt End With"),e("a",{href:"#rule-email"},"Email"),e("a",{href:"#rule-ends-with"},"Ends With"),e("a",{href:"#rule-enum"},"Enum"),e("a",{href:"#rule-exclude"},"Exclude"),e("a",{href:"#rule-exclude-if"},"Exclude If"),e("a",{href:"#rule-exclude-unless"},"Exclude Unless"),e("a",{href:"#rule-exclude-with"},"Exclude With"),e("a",{href:"#rule-exclude-without"},"Exclude Without"),e("a",{href:"#rule-exists"},"Exists (Database)"),e("a",{href:"#rule-file"},"File"),e("a",{href:"#rule-filled"},"Filled"),e("a",{href:"#rule-gt"},"Greater Than"),e("a",{href:"#rule-gte"},"Greater Than Or Equal"),e("a",{href:"#rule-image"},"Image (File)"),e("a",{href:"#rule-in"},"In"),e("a",{href:"#rule-in-array"},"In Array"),e("a",{href:"#rule-integer"},"Integer"),e("a",{href:"#rule-ip"},"IP Address"),e("a",{href:"#rule-json"},"JSON"),e("a",{href:"#rule-lt"},"Less Than"),e("a",{href:"#rule-lte"},"Less Than Or Equal"),e("a",{href:"#rule-lowercase"},"Lowercase"),e("a",{href:"#rule-mac"},"MAC Address"),e("a",{href:"#rule-max"},"Max"),e("a",{href:"#rule-max-digits"},"Max Digits"),e("a",{href:"#rule-mimetypes"},"MIME Types"),e("a",{href:"#rule-mimes"},"MIME Type By File Extension"),e("a",{href:"#rule-min"},"Min"),e("a",{href:"#rule-min-digits"},"Min Digits"),e("a",{href:"#rule-missing"},"Missing"),e("a",{href:"#rule-missing-if"},"Missing If"),e("a",{href:"#rule-missing-unless"},"Missing Unless"),e("a",{href:"#rule-missing-with"},"Missing With"),e("a",{href:"#rule-missing-with-all"},"Missing With All"),e("a",{href:"#rule-multiple-of"},"Multiple Of"),e("a",{href:"#rule-not-in"},"Not In"),e("a",{href:"#rule-not-regex"},"Not Regex"),e("a",{href:"#rule-nullable"},"Nullable"),e("a",{href:"#rule-numeric"},"Numeric"),e("a",{href:"#rule-password"},"Password"),e("a",{href:"#rule-present"},"Present"),e("a",{href:"#rule-prohibited"},"Prohibited"),e("a",{href:"#rule-prohibited-if"},"Prohibited If"),e("a",{href:"#rule-prohibited-unless"},"Prohibited Unless"),e("a",{href:"#rule-prohibits"},"Prohibits"),e("a",{href:"#rule-regex"},"Regular Expression"),e("a",{href:"#rule-required"},"Required"),e("a",{href:"#rule-required-if"},"Required If"),e("a",{href:"#rule-required-if-accepted"},"Required If Accepted"),e("a",{href:"#rule-required-unless"},"Required Unless"),e("a",{href:"#rule-required-with"},"Required With"),e("a",{href:"#rule-required-with-all"},"Required With All"),e("a",{href:"#rule-required-without"},"Required Without"),e("a",{href:"#rule-required-without-all"},"Required Without All"),e("a",{href:"#rule-required-array-keys"},"Required Array Keys"),e("a",{href:"#rule-same"},"Same"),e("a",{href:"#rule-size"},"Size"),e("a",{href:"#validating-when-present"},"Sometimes"),e("a",{href:"#rule-starts-with"},"Starts With"),e("a",{href:"#rule-string"},"String"),e("a",{href:"#rule-timezone"},"Timezone"),e("a",{href:"#rule-unique"},"Unique (Database)"),e("a",{href:"#rule-uppercase"},"Uppercase"),e("a",{href:"#rule-url"},"URL"),e("a",{href:"#rule-ulid"},"ULID"),e("a",{href:"#rule-uuid"},"UUID")])],-1),h=n(`<p><a name="rule-accepted"></a></p><h4 id="accepted" tabindex="-1"><a class="header-anchor" href="#accepted" aria-hidden="true">#</a> accepted</h4><p>The field under validation must be <code>&quot;yes&quot;</code>, <code>&quot;on&quot;</code>, <code>1</code>, or <code>true</code>. This is useful for validating &quot;Terms of Service&quot; acceptance or similar fields.</p><p><a name="rule-accepted-if"></a></p><h4 id="accepted-if-anotherfield-value" tabindex="-1"><a class="header-anchor" href="#accepted-if-anotherfield-value" aria-hidden="true">#</a> accepted_if:anotherfield,value,...</h4><p>The field under validation must be <code>&quot;yes&quot;</code>, <code>&quot;on&quot;</code>, <code>1</code>, or <code>true</code> if another field under validation is equal to a specified value. This is useful for validating &quot;Terms of Service&quot; acceptance or similar fields.</p><p><a name="rule-active-url"></a></p><h4 id="active-url" tabindex="-1"><a class="header-anchor" href="#active-url" aria-hidden="true">#</a> active_url</h4><p>The field under validation must have a valid A or AAAA record according to the <code>dns_get_record</code> PHP function. The hostname of the provided URL is extracted using the <code>parse_url</code> PHP function before being passed to <code>dns_get_record</code>.</p><p><a name="rule-after"></a></p><h4 id="after-date" tabindex="-1"><a class="header-anchor" href="#after-date" aria-hidden="true">#</a> after:<em>date</em></h4><p>The field under validation must be a value after a given date. The dates will be passed into the <code>strtotime</code> PHP function in order to be converted to a valid <code>DateTime</code> instance:</p><pre><code>&#39;start_date&#39; =&gt; &#39;required|date|after:tomorrow&#39;
</code></pre><p>Instead of passing a date string to be evaluated by <code>strtotime</code>, you may specify another field to compare against the date:</p><pre><code>&#39;finish_date&#39; =&gt; &#39;required|date|after:start_date&#39;
</code></pre><p><a name="rule-after-or-equal"></a></p><h4 id="after-or-equal-date" tabindex="-1"><a class="header-anchor" href="#after-or-equal-date" aria-hidden="true">#</a> after_or_equal:<em>date</em></h4><p>The field under validation must be a value after or equal to the given date. For more information, see the <a href="#rule-after">after</a> rule.</p><p><a name="rule-alpha"></a></p><h4 id="alpha" tabindex="-1"><a class="header-anchor" href="#alpha" aria-hidden="true">#</a> alpha</h4>`,20),p={href:"https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp?a=%5B%3AL%3A%5D&g=&i=",target:"_blank",rel:"noopener noreferrer"},m=e("code",null,"\\p{L}",-1),f={href:"https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp?a=%5B%3AM%3A%5D&g=&i=",target:"_blank",rel:"noopener noreferrer"},g=e("code",null,"\\p{M}",-1),v=n(`<p>To restrict this validation rule to characters in the ASCII range (<code>a-z</code> and <code>A-Z</code>), you may provide the <code>ascii</code> option to the validation rule:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token string single-quoted-string">&#39;username&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;alpha:ascii&#39;</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="rule-alpha-dash"></a></p><h4 id="alpha-dash" tabindex="-1"><a class="header-anchor" href="#alpha-dash" aria-hidden="true">#</a> alpha_dash</h4>`,4),b={href:"https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp?a=%5B%3AL%3A%5D&g=&i=",target:"_blank",rel:"noopener noreferrer"},y=e("code",null,"\\p{L}",-1),w={href:"https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp?a=%5B%3AM%3A%5D&g=&i=",target:"_blank",rel:"noopener noreferrer"},q=e("code",null,"\\p{M}",-1),k={href:"https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp?a=%5B%3AN%3A%5D&g=&i=",target:"_blank",rel:"noopener noreferrer"},x=e("code",null,"\\p{N}",-1),T=e("code",null,"-",-1),_=e("code",null,"_",-1),I=n(`<p>To restrict this validation rule to characters in the ASCII range (<code>a-z</code> and <code>A-Z</code>), you may provide the <code>ascii</code> option to the validation rule:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token string single-quoted-string">&#39;username&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;alpha_dash:ascii&#39;</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="rule-alpha-num"></a></p><h4 id="alpha-num" tabindex="-1"><a class="header-anchor" href="#alpha-num" aria-hidden="true">#</a> alpha_num</h4>`,4),$={href:"https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp?a=%5B%3AL%3A%5D&g=&i=",target:"_blank",rel:"noopener noreferrer"},V=e("code",null,"\\p{L}",-1),R={href:"https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp?a=%5B%3AM%3A%5D&g=&i=",target:"_blank",rel:"noopener noreferrer"},A=e("code",null,"\\p{M}",-1),F={href:"https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp?a=%5B%3AN%3A%5D&g=&i=",target:"_blank",rel:"noopener noreferrer"},S=e("code",null,"\\p{N}",-1),z=n(`<p>To restrict this validation rule to characters in the ASCII range (<code>a-z</code> and <code>A-Z</code>), you may provide the <code>ascii</code> option to the validation rule:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token string single-quoted-string">&#39;username&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;alpha_num:ascii&#39;</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="rule-array"></a></p><h4 id="array" tabindex="-1"><a class="header-anchor" href="#array" aria-hidden="true">#</a> array</h4><p>The field under validation must be a PHP <code>array</code>.</p><p>When additional values are provided to the <code>array</code> rule, each key in the input array must be present within the list of values provided to the rule. In the following example, the <code>admin</code> key in the input array is invalid since it is not contained in the list of values provided to the <code>array</code> rule:</p><pre><code>use Illuminate\\Support\\Facades\\Validator;

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
</code></pre><p>In general, you should always specify the array keys that are allowed to be present within your array.</p><p><a name="rule-ascii"></a></p><h4 id="ascii" tabindex="-1"><a class="header-anchor" href="#ascii" aria-hidden="true">#</a> ascii</h4><p>The field under validation must be entirely 7-bit ASCII characters.</p><p><a name="rule-bail"></a></p><h4 id="bail" tabindex="-1"><a class="header-anchor" href="#bail" aria-hidden="true">#</a> bail</h4><p>Stop running validation rules for the field after the first validation failure.</p><p>While the <code>bail</code> rule will only stop validating a specific field when it encounters a validation failure, the <code>stopOnFirstFailure</code> method will inform the validator that it should stop validating all attributes once a single validation failure has occurred:</p><pre><code>if ($validator-&gt;stopOnFirstFailure()-&gt;fails()) {
    // ...
}
</code></pre><p><a name="rule-before"></a></p><h4 id="before-date" tabindex="-1"><a class="header-anchor" href="#before-date" aria-hidden="true">#</a> before:<em>date</em></h4><p>The field under validation must be a value preceding the given date. The dates will be passed into the PHP <code>strtotime</code> function in order to be converted into a valid <code>DateTime</code> instance. In addition, like the <a href="#rule-after"><code>after</code></a> rule, the name of another field under validation may be supplied as the value of <code>date</code>.</p><p><a name="rule-before-or-equal"></a></p><h4 id="before-or-equal-date" tabindex="-1"><a class="header-anchor" href="#before-or-equal-date" aria-hidden="true">#</a> before_or_equal:<em>date</em></h4><p>The field under validation must be a value preceding or equal to the given date. The dates will be passed into the PHP <code>strtotime</code> function in order to be converted into a valid <code>DateTime</code> instance. In addition, like the <a href="#rule-after"><code>after</code></a> rule, the name of another field under validation may be supplied as the value of <code>date</code>.</p><p><a name="rule-between"></a></p><h4 id="between-min-max" tabindex="-1"><a class="header-anchor" href="#between-min-max" aria-hidden="true">#</a> between:<em>min</em>,<em>max</em></h4><p>The field under validation must have a size between the given <em>min</em> and <em>max</em> (inclusive). Strings, numerics, arrays, and files are evaluated in the same fashion as the <a href="#rule-size"><code>size</code></a> rule.</p><p><a name="rule-boolean"></a></p><h4 id="boolean" tabindex="-1"><a class="header-anchor" href="#boolean" aria-hidden="true">#</a> boolean</h4><p>The field under validation must be able to be cast as a boolean. Accepted input are <code>true</code>, <code>false</code>, <code>1</code>, <code>0</code>, <code>&quot;1&quot;</code>, and <code>&quot;0&quot;</code>.</p><p><a name="rule-confirmed"></a></p><h4 id="confirmed" tabindex="-1"><a class="header-anchor" href="#confirmed" aria-hidden="true">#</a> confirmed</h4><p>The field under validation must have a matching field of <code>{field}_confirmation</code>. For example, if the field under validation is <code>password</code>, a matching <code>password_confirmation</code> field must be present in the input.</p><p><a name="rule-current-password"></a></p><h4 id="current-password" tabindex="-1"><a class="header-anchor" href="#current-password" aria-hidden="true">#</a> current_password</h4><p>The field under validation must match the authenticated user&#39;s password. You may specify an <a href="./authentication">authentication guard</a> using the rule&#39;s first parameter:</p><pre><code>&#39;password&#39; =&gt; &#39;current_password:api&#39;
</code></pre><p><a name="rule-date"></a></p><h4 id="date" tabindex="-1"><a class="header-anchor" href="#date" aria-hidden="true">#</a> date</h4><p>The field under validation must be a valid, non-relative date according to the <code>strtotime</code> PHP function.</p><p><a name="rule-date-equals"></a></p><h4 id="date-equals-date" tabindex="-1"><a class="header-anchor" href="#date-equals-date" aria-hidden="true">#</a> date_equals:<em>date</em></h4><p>The field under validation must be equal to the given date. The dates will be passed into the PHP <code>strtotime</code> function in order to be converted into a valid <code>DateTime</code> instance.</p><p><a name="rule-date-format"></a></p><h4 id="date-format-format" tabindex="-1"><a class="header-anchor" href="#date-format-format" aria-hidden="true">#</a> date_format:<em>format</em>,...</h4>`,43),P=e("em",null,"formats",-1),C=e("strong",null,"either",-1),L=e("code",null,"date",-1),E=e("code",null,"date_format",-1),M={href:"https://www.php.net/manual/en/class.datetime.php",target:"_blank",rel:"noopener noreferrer"},D=n(`<p><a name="rule-decimal"></a></p><h4 id="decimal-min-max" tabindex="-1"><a class="header-anchor" href="#decimal-min-max" aria-hidden="true">#</a> decimal:<em>min</em>,<em>max</em></h4><p>The field under validation must be numeric and must contain the specified number of decimal places:</p><pre><code>// Must have exactly two decimal places (9.99)...
&#39;price&#39; =&gt; &#39;decimal:2&#39;

// Must have between 2 and 4 decimal places...
&#39;price&#39; =&gt; &#39;decimal:2,4&#39;
</code></pre><p><a name="rule-declined"></a></p><h4 id="declined" tabindex="-1"><a class="header-anchor" href="#declined" aria-hidden="true">#</a> declined</h4><p>The field under validation must be <code>&quot;no&quot;</code>, <code>&quot;off&quot;</code>, <code>0</code>, or <code>false</code>.</p><p><a name="rule-declined-if"></a></p><h4 id="declined-if-anotherfield-value" tabindex="-1"><a class="header-anchor" href="#declined-if-anotherfield-value" aria-hidden="true">#</a> declined_if:anotherfield,value,...</h4><p>The field under validation must be <code>&quot;no&quot;</code>, <code>&quot;off&quot;</code>, <code>0</code>, or <code>false</code> if another field under validation is equal to a specified value.</p><p><a name="rule-different"></a></p><h4 id="different-field" tabindex="-1"><a class="header-anchor" href="#different-field" aria-hidden="true">#</a> different:<em>field</em></h4><p>The field under validation must have a different value than <em>field</em>.</p><p><a name="rule-digits"></a></p><h4 id="digits-value" tabindex="-1"><a class="header-anchor" href="#digits-value" aria-hidden="true">#</a> digits:<em>value</em></h4><p>The integer under validation must have an exact length of <em>value</em>.</p><p><a name="rule-digits-between"></a></p><h4 id="digits-between-min-max" tabindex="-1"><a class="header-anchor" href="#digits-between-min-max" aria-hidden="true">#</a> digits_between:<em>min</em>,<em>max</em></h4><p>The integer validation must have a length between the given <em>min</em> and <em>max</em>.</p><p><a name="rule-dimensions"></a></p><h4 id="dimensions" tabindex="-1"><a class="header-anchor" href="#dimensions" aria-hidden="true">#</a> dimensions</h4><p>The file under validation must be an image meeting the dimension constraints as specified by the rule&#39;s parameters:</p><pre><code>&#39;avatar&#39; =&gt; &#39;dimensions:min_width=100,min_height=200&#39;
</code></pre><p>Available constraints are: <em>min_width</em>, <em>max_width</em>, <em>min_height</em>, <em>max_height</em>, <em>width</em>, <em>height</em>, <em>ratio</em>.</p><p>A <em>ratio</em> constraint should be represented as width divided by height. This can be specified either by a fraction like <code>3/2</code> or a float like <code>1.5</code>:</p><pre><code>&#39;avatar&#39; =&gt; &#39;dimensions:ratio=3/2&#39;
</code></pre><p>Since this rule requires several arguments, you may use the <code>Rule::dimensions</code> method to fluently construct the rule:</p><pre><code>use Illuminate\\Support\\Facades\\Validator;
use Illuminate\\Validation\\Rule;

Validator::make($data, [
    &#39;avatar&#39; =&gt; [
        &#39;required&#39;,
        Rule::dimensions()-&gt;maxWidth(1000)-&gt;maxHeight(500)-&gt;ratio(3 / 2),
    ],
]);
</code></pre><p><a name="rule-distinct"></a></p><h4 id="distinct" tabindex="-1"><a class="header-anchor" href="#distinct" aria-hidden="true">#</a> distinct</h4><p>When validating arrays, the field under validation must not have any duplicate values:</p><pre><code>&#39;foo.*.id&#39; =&gt; &#39;distinct&#39;
</code></pre><p>Distinct uses loose variable comparisons by default. To use strict comparisons, you may add the <code>strict</code> parameter to your validation rule definition:</p><pre><code>&#39;foo.*.id&#39; =&gt; &#39;distinct:strict&#39;
</code></pre><p>You may add <code>ignore_case</code> to the validation rule&#39;s arguments to make the rule ignore capitalization differences:</p><pre><code>&#39;foo.*.id&#39; =&gt; &#39;distinct:ignore_case&#39;
</code></pre><p><a name="rule-doesnt-start-with"></a></p><h4 id="doesnt-start-with-foo-bar" tabindex="-1"><a class="header-anchor" href="#doesnt-start-with-foo-bar" aria-hidden="true">#</a> doesnt_start_with:<em>foo</em>,<em>bar</em>,...</h4><p>The field under validation must not start with one of the given values.</p><p><a name="rule-doesnt-end-with"></a></p><h4 id="doesnt-end-with-foo-bar" tabindex="-1"><a class="header-anchor" href="#doesnt-end-with-foo-bar" aria-hidden="true">#</a> doesnt_end_with:<em>foo</em>,<em>bar</em>,...</h4><p>The field under validation must not end with one of the given values.</p><p><a name="rule-email"></a></p><h4 id="email" tabindex="-1"><a class="header-anchor" href="#email" aria-hidden="true">#</a> email</h4>`,44),W={href:"https://github.com/egulias/EmailValidator",target:"_blank",rel:"noopener noreferrer"},U=e("code",null,"egulias/email-validator",-1),H=e("code",null,"RFCValidation",-1),B=e("pre",null,[e("code",null,`'email' => 'email:rfc,dns'
`)],-1),N=e("p",null,[a("The example above will apply the "),e("code",null,"RFCValidation"),a(" and "),e("code",null,"DNSCheckValidation"),a(" validations. Here's a full list of validation styles you can apply:")],-1),O=e("div",{class:"content-list",markdown:"1"},[e("ul",null,[e("li",null,[e("code",null,"rfc"),a(": "),e("code",null,"RFCValidation")]),e("li",null,[e("code",null,"strict"),a(": "),e("code",null,"NoRFCWarningsValidation")]),e("li",null,[e("code",null,"dns"),a(": "),e("code",null,"DNSCheckValidation")]),e("li",null,[e("code",null,"spoof"),a(": "),e("code",null,"SpoofCheckValidation")]),e("li",null,[e("code",null,"filter"),a(": "),e("code",null,"FilterEmailValidation")]),e("li",null,[e("code",null,"filter_unicode"),a(": "),e("code",null,"FilterEmailValidation::unicode()")])])],-1),j=n(`<p>The <code>filter</code> validator, which uses PHP&#39;s <code>filter_var</code> function, ships with Laravel and was Laravel&#39;s default email validation behavior prior to Laravel version 5.8.</p><blockquote><p><strong>Warning</strong><br> The <code>dns</code> and <code>spoof</code> validators require the PHP <code>intl</code> extension.</p></blockquote><p><a name="rule-ends-with"></a></p><h4 id="ends-with-foo-bar" tabindex="-1"><a class="header-anchor" href="#ends-with-foo-bar" aria-hidden="true">#</a> ends_with:<em>foo</em>,<em>bar</em>,...</h4><p>The field under validation must end with one of the given values.</p><p><a name="rule-enum"></a></p><h4 id="enum" tabindex="-1"><a class="header-anchor" href="#enum" aria-hidden="true">#</a> enum</h4><p>The <code>Enum</code> rule is a class based rule that validates whether the field under validation contains a valid enum value. The <code>Enum</code> rule accepts the name of the enum as its only constructor argument:</p><pre><code>use App\\Enums\\ServerStatus;
use Illuminate\\Validation\\Rule;

$request-&gt;validate([
    &#39;status&#39; =&gt; [Rule::enum(ServerStatus::class)],
]);
</code></pre><p><a name="rule-exclude"></a></p><h4 id="exclude" tabindex="-1"><a class="header-anchor" href="#exclude" aria-hidden="true">#</a> exclude</h4><p>The field under validation will be excluded from the request data returned by the <code>validate</code> and <code>validated</code> methods.</p><p><a name="rule-exclude-if"></a></p><h4 id="exclude-if-anotherfield-value" tabindex="-1"><a class="header-anchor" href="#exclude-if-anotherfield-value" aria-hidden="true">#</a> exclude_if:<em>anotherfield</em>,<em>value</em></h4><p>The field under validation will be excluded from the request data returned by the <code>validate</code> and <code>validated</code> methods if the <em>anotherfield</em> field is equal to <em>value</em>.</p><p>If complex conditional exclusion logic is required, you may utilize the <code>Rule::excludeIf</code> method. This method accepts a boolean or a closure. When given a closure, the closure should return <code>true</code> or <code>false</code> to indicate if the field under validation should be excluded:</p><pre><code>use Illuminate\\Support\\Facades\\Validator;
use Illuminate\\Validation\\Rule;

Validator::make($request-&gt;all(), [
    &#39;role_id&#39; =&gt; Rule::excludeIf($request-&gt;user()-&gt;is_admin),
]);

Validator::make($request-&gt;all(), [
    &#39;role_id&#39; =&gt; Rule::excludeIf(fn () =&gt; $request-&gt;user()-&gt;is_admin),
]);
</code></pre><p><a name="rule-exclude-unless"></a></p><h4 id="exclude-unless-anotherfield-value" tabindex="-1"><a class="header-anchor" href="#exclude-unless-anotherfield-value" aria-hidden="true">#</a> exclude_unless:<em>anotherfield</em>,<em>value</em></h4><p>The field under validation will be excluded from the request data returned by the <code>validate</code> and <code>validated</code> methods unless <em>anotherfield</em>&#39;s field is equal to <em>value</em>. If <em>value</em> is <code>null</code> (<code>exclude_unless:name,null</code>), the field under validation will be excluded unless the comparison field is <code>null</code> or the comparison field is missing from the request data.</p><p><a name="rule-exclude-with"></a></p><h4 id="exclude-with-anotherfield" tabindex="-1"><a class="header-anchor" href="#exclude-with-anotherfield" aria-hidden="true">#</a> exclude_with:<em>anotherfield</em></h4><p>The field under validation will be excluded from the request data returned by the <code>validate</code> and <code>validated</code> methods if the <em>anotherfield</em> field is present.</p><p><a name="rule-exclude-without"></a></p><h4 id="exclude-without-anotherfield" tabindex="-1"><a class="header-anchor" href="#exclude-without-anotherfield" aria-hidden="true">#</a> exclude_without:<em>anotherfield</em></h4><p>The field under validation will be excluded from the request data returned by the <code>validate</code> and <code>validated</code> methods if the <em>anotherfield</em> field is not present.</p><p><a name="rule-exists"></a></p><h4 id="exists-table-column" tabindex="-1"><a class="header-anchor" href="#exists-table-column" aria-hidden="true">#</a> exists:<em>table</em>,<em>column</em></h4><p>The field under validation must exist in a given database table.</p><p><a name="basic-usage-of-exists-rule"></a></p><h4 id="basic-usage-of-exists-rule" tabindex="-1"><a class="header-anchor" href="#basic-usage-of-exists-rule" aria-hidden="true">#</a> Basic Usage Of Exists Rule</h4><pre><code>&#39;state&#39; =&gt; &#39;exists:states&#39;
</code></pre><p>If the <code>column</code> option is not specified, the field name will be used. So, in this case, the rule will validate that the <code>states</code> database table contains a record with a <code>state</code> column value matching the request&#39;s <code>state</code> attribute value.</p><p><a name="specifying-a-custom-column-name"></a></p><h4 id="specifying-a-custom-column-name" tabindex="-1"><a class="header-anchor" href="#specifying-a-custom-column-name" aria-hidden="true">#</a> Specifying A Custom Column Name</h4><p>You may explicitly specify the database column name that should be used by the validation rule by placing it after the database table name:</p><pre><code>&#39;state&#39; =&gt; &#39;exists:states,abbreviation&#39;
</code></pre><p>Occasionally, you may need to specify a specific database connection to be used for the <code>exists</code> query. You can accomplish this by prepending the connection name to the table name:</p><pre><code>&#39;email&#39; =&gt; &#39;exists:connection.staff,email&#39;
</code></pre><p>Instead of specifying the table name directly, you may specify the Eloquent model which should be used to determine the table name:</p><pre><code>&#39;user_id&#39; =&gt; &#39;exists:App\\Models\\User,id&#39;
</code></pre><p>If you would like to customize the query executed by the validation rule, you may use the <code>Rule</code> class to fluently define the rule. In this example, we&#39;ll also specify the validation rules as an array instead of using the <code>|</code> character to delimit them:</p><pre><code>use Illuminate\\Database\\Query\\Builder;
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
</code></pre><p>You may explicitly specify the database column name that should be used by the <code>exists</code> rule generated by the <code>Rule::exists</code> method by providing the column name as the second argument to the <code>exists</code> method:</p><pre><code>&#39;state&#39; =&gt; Rule::exists(&#39;states&#39;, &#39;abbreviation&#39;),
</code></pre><p><a name="rule-file"></a></p><h4 id="file" tabindex="-1"><a class="header-anchor" href="#file" aria-hidden="true">#</a> file</h4><p>The field under validation must be a successfully uploaded file.</p><p><a name="rule-filled"></a></p><h4 id="filled" tabindex="-1"><a class="header-anchor" href="#filled" aria-hidden="true">#</a> filled</h4><p>The field under validation must not be empty when it is present.</p><p><a name="rule-gt"></a></p><h4 id="gt-field" tabindex="-1"><a class="header-anchor" href="#gt-field" aria-hidden="true">#</a> gt:<em>field</em></h4><p>The field under validation must be greater than the given <em>field</em> or <em>value</em>. The two fields must be of the same type. Strings, numerics, arrays, and files are evaluated using the same conventions as the <a href="#rule-size"><code>size</code></a> rule.</p><p><a name="rule-gte"></a></p><h4 id="gte-field" tabindex="-1"><a class="header-anchor" href="#gte-field" aria-hidden="true">#</a> gte:<em>field</em></h4><p>The field under validation must be greater than or equal to the given <em>field</em> or <em>value</em>. The two fields must be of the same type. Strings, numerics, arrays, and files are evaluated using the same conventions as the <a href="#rule-size"><code>size</code></a> rule.</p><p><a name="rule-image"></a></p><h4 id="image" tabindex="-1"><a class="header-anchor" href="#image" aria-hidden="true">#</a> image</h4><p>The file under validation must be an image (jpg, jpeg, png, bmp, gif, svg, or webp).</p><p><a name="rule-in"></a></p><h4 id="in-foo-bar" tabindex="-1"><a class="header-anchor" href="#in-foo-bar" aria-hidden="true">#</a> in:<em>foo</em>,<em>bar</em>,...</h4><p>The field under validation must be included in the given list of values. Since this rule often requires you to <code>implode</code> an array, the <code>Rule::in</code> method may be used to fluently construct the rule:</p><pre><code>use Illuminate\\Support\\Facades\\Validator;
use Illuminate\\Validation\\Rule;

Validator::make($data, [
    &#39;zones&#39; =&gt; [
        &#39;required&#39;,
        Rule::in([&#39;first-zone&#39;, &#39;second-zone&#39;]),
    ],
]);
</code></pre><p>When the <code>in</code> rule is combined with the <code>array</code> rule, each value in the input array must be present within the list of values provided to the <code>in</code> rule. In the following example, the <code>LAS</code> airport code in the input array is invalid since it is not contained in the list of airports provided to the <code>in</code> rule:</p><pre><code>use Illuminate\\Support\\Facades\\Validator;
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
</code></pre><p><a name="rule-in-array"></a></p><h4 id="in-array-anotherfield" tabindex="-1"><a class="header-anchor" href="#in-array-anotherfield" aria-hidden="true">#</a> in_array:<em>anotherfield</em>.*</h4><p>The field under validation must exist in <em>anotherfield</em>&#39;s values.</p><p><a name="rule-integer"></a></p><h4 id="integer" tabindex="-1"><a class="header-anchor" href="#integer" aria-hidden="true">#</a> integer</h4><p>The field under validation must be an integer.</p><blockquote><p><strong>Warning</strong><br> This validation rule does not verify that the input is of the &quot;integer&quot; variable type, only that the input is of a type accepted by PHP&#39;s <code>FILTER_VALIDATE_INT</code> rule. If you need to validate the input as being a number please use this rule in combination with <a href="#rule-numeric">the <code>numeric</code> validation rule</a>.</p></blockquote><p><a name="rule-ip"></a></p><h4 id="ip" tabindex="-1"><a class="header-anchor" href="#ip" aria-hidden="true">#</a> ip</h4><p>The field under validation must be an IP address.</p><p><a name="ipv4"></a></p><h4 id="ipv4" tabindex="-1"><a class="header-anchor" href="#ipv4" aria-hidden="true">#</a> ipv4</h4><p>The field under validation must be an IPv4 address.</p><p><a name="ipv6"></a></p><h4 id="ipv6" tabindex="-1"><a class="header-anchor" href="#ipv6" aria-hidden="true">#</a> ipv6</h4><p>The field under validation must be an IPv6 address.</p><p><a name="rule-json"></a></p><h4 id="json" tabindex="-1"><a class="header-anchor" href="#json" aria-hidden="true">#</a> json</h4><p>The field under validation must be a valid JSON string.</p><p><a name="rule-lt"></a></p><h4 id="lt-field" tabindex="-1"><a class="header-anchor" href="#lt-field" aria-hidden="true">#</a> lt:<em>field</em></h4><p>The field under validation must be less than the given <em>field</em>. The two fields must be of the same type. Strings, numerics, arrays, and files are evaluated using the same conventions as the <a href="#rule-size"><code>size</code></a> rule.</p><p><a name="rule-lte"></a></p><h4 id="lte-field" tabindex="-1"><a class="header-anchor" href="#lte-field" aria-hidden="true">#</a> lte:<em>field</em></h4><p>The field under validation must be less than or equal to the given <em>field</em>. The two fields must be of the same type. Strings, numerics, arrays, and files are evaluated using the same conventions as the <a href="#rule-size"><code>size</code></a> rule.</p><p><a name="rule-lowercase"></a></p><h4 id="lowercase" tabindex="-1"><a class="header-anchor" href="#lowercase" aria-hidden="true">#</a> lowercase</h4><p>The field under validation must be lowercase.</p><p><a name="rule-mac"></a></p><h4 id="mac-address" tabindex="-1"><a class="header-anchor" href="#mac-address" aria-hidden="true">#</a> mac_address</h4><p>The field under validation must be a MAC address.</p><p><a name="rule-max"></a></p><h4 id="max-value" tabindex="-1"><a class="header-anchor" href="#max-value" aria-hidden="true">#</a> max:<em>value</em></h4><p>The field under validation must be less than or equal to a maximum <em>value</em>. Strings, numerics, arrays, and files are evaluated in the same fashion as the <a href="#rule-size"><code>size</code></a> rule.</p><p><a name="rule-max-digits"></a></p><h4 id="max-digits-value" tabindex="-1"><a class="header-anchor" href="#max-digits-value" aria-hidden="true">#</a> max_digits:<em>value</em></h4><p>The integer under validation must have a maximum length of <em>value</em>.</p><p><a name="rule-mimetypes"></a></p><h4 id="mimetypes-text-plain" tabindex="-1"><a class="header-anchor" href="#mimetypes-text-plain" aria-hidden="true">#</a> mimetypes:<em>text/plain</em>,...</h4><p>The file under validation must match one of the given MIME types:</p><pre><code>&#39;video&#39; =&gt; &#39;mimetypes:video/avi,video/mpeg,video/quicktime&#39;
</code></pre><p>To determine the MIME type of the uploaded file, the file&#39;s contents will be read and the framework will attempt to guess the MIME type, which may be different from the client&#39;s provided MIME type.</p><p><a name="rule-mimes"></a></p><h4 id="mimes-foo-bar" tabindex="-1"><a class="header-anchor" href="#mimes-foo-bar" aria-hidden="true">#</a> mimes:<em>foo</em>,<em>bar</em>,...</h4><p>The file under validation must have a MIME type corresponding to one of the listed extensions.</p><p><a name="basic-usage-of-mime-rule"></a></p><h4 id="basic-usage-of-mime-rule" tabindex="-1"><a class="header-anchor" href="#basic-usage-of-mime-rule" aria-hidden="true">#</a> Basic Usage Of MIME Rule</h4><pre><code>&#39;photo&#39; =&gt; &#39;mimes:jpg,bmp,png&#39;
</code></pre><p>Even though you only need to specify the extensions, this rule actually validates the MIME type of the file by reading the file&#39;s contents and guessing its MIME type. A full listing of MIME types and their corresponding extensions may be found at the following location:</p>`,115),Y={href:"https://svn.apache.org/repos/asf/httpd/httpd/trunk/docs/conf/mime.types",target:"_blank",rel:"noopener noreferrer"},J=n(`<p><a name="rule-min"></a></p><h4 id="min-value" tabindex="-1"><a class="header-anchor" href="#min-value" aria-hidden="true">#</a> min:<em>value</em></h4><p>The field under validation must have a minimum <em>value</em>. Strings, numerics, arrays, and files are evaluated in the same fashion as the <a href="#rule-size"><code>size</code></a> rule.</p><p><a name="rule-min-digits"></a></p><h4 id="min-digits-value" tabindex="-1"><a class="header-anchor" href="#min-digits-value" aria-hidden="true">#</a> min_digits:<em>value</em></h4><p>The integer under validation must have a minimum length of <em>value</em>.</p><p><a name="rule-multiple-of"></a></p><h4 id="multiple-of-value" tabindex="-1"><a class="header-anchor" href="#multiple-of-value" aria-hidden="true">#</a> multiple_of:<em>value</em></h4><p>The field under validation must be a multiple of <em>value</em>.</p><p><a name="rule-missing"></a></p><h4 id="missing" tabindex="-1"><a class="header-anchor" href="#missing" aria-hidden="true">#</a> missing</h4><p>The field under validation must not be present in the input data.</p><p><a name="rule-missing-if"></a></p><h4 id="missing-if-anotherfield-value" tabindex="-1"><a class="header-anchor" href="#missing-if-anotherfield-value" aria-hidden="true">#</a> missing_if:<em>anotherfield</em>,<em>value</em>,...</h4><p>The field under validation must not be present if the <em>anotherfield</em> field is equal to any <em>value</em>.</p><p><a name="rule-missing-unless"></a></p><h4 id="missing-unless-anotherfield-value" tabindex="-1"><a class="header-anchor" href="#missing-unless-anotherfield-value" aria-hidden="true">#</a> missing_unless:<em>anotherfield</em>,<em>value</em></h4><p>The field under validation must not be present unless the <em>anotherfield</em> field is equal to any <em>value</em>.</p><p><a name="rule-missing-with"></a></p><h4 id="missing-with-foo-bar" tabindex="-1"><a class="header-anchor" href="#missing-with-foo-bar" aria-hidden="true">#</a> missing_with:<em>foo</em>,<em>bar</em>,...</h4><p>The field under validation must not be present <em>only if</em> any of the other specified fields are present.</p><p><a name="rule-missing-with-all"></a></p><h4 id="missing-with-all-foo-bar" tabindex="-1"><a class="header-anchor" href="#missing-with-all-foo-bar" aria-hidden="true">#</a> missing_with_all:<em>foo</em>,<em>bar</em>,...</h4><p>The field under validation must not be present <em>only if</em> all of the other specified fields are present.</p><p><a name="rule-not-in"></a></p><h4 id="not-in-foo-bar" tabindex="-1"><a class="header-anchor" href="#not-in-foo-bar" aria-hidden="true">#</a> not_in:<em>foo</em>,<em>bar</em>,...</h4><p>The field under validation must not be included in the given list of values. The <code>Rule::notIn</code> method may be used to fluently construct the rule:</p><pre><code>use Illuminate\\Validation\\Rule;

Validator::make($data, [
    &#39;toppings&#39; =&gt; [
        &#39;required&#39;,
        Rule::notIn([&#39;sprinkles&#39;, &#39;cherries&#39;]),
    ],
]);
</code></pre><p><a name="rule-not-regex"></a></p><h4 id="not-regex-pattern" tabindex="-1"><a class="header-anchor" href="#not-regex-pattern" aria-hidden="true">#</a> not_regex:<em>pattern</em></h4><p>The field under validation must not match the given regular expression.</p><p>Internally, this rule uses the PHP <code>preg_match</code> function. The pattern specified should obey the same formatting required by <code>preg_match</code> and thus also include valid delimiters. For example: <code>&#39;email&#39; =&gt; &#39;not_regex:/^.+$/i&#39;</code>.</p><blockquote><p><strong>Warning</strong><br> When using the <code>regex</code> / <code>not_regex</code> patterns, it may be necessary to specify your validation rules using an array instead of using <code>|</code> delimiters, especially if the regular expression contains a <code>|</code> character.</p></blockquote><p><a name="rule-nullable"></a></p><h4 id="nullable" tabindex="-1"><a class="header-anchor" href="#nullable" aria-hidden="true">#</a> nullable</h4><p>The field under validation may be <code>null</code>.</p><p><a name="rule-numeric"></a></p><h4 id="numeric" tabindex="-1"><a class="header-anchor" href="#numeric" aria-hidden="true">#</a> numeric</h4>`,38),G={href:"https://www.php.net/manual/en/function.is-numeric.php",target:"_blank",rel:"noopener noreferrer"},Z=n('<p><a name="rule-password"></a></p><h4 id="password" tabindex="-1"><a class="header-anchor" href="#password" aria-hidden="true">#</a> password</h4><p>The field under validation must match the authenticated user&#39;s password.</p><blockquote><p><strong>Warning</strong><br> This rule was renamed to <code>current_password</code> with the intention of removing it in Laravel 9. Please use the <a href="#rule-current-password">Current Password</a> rule instead.</p></blockquote><p><a name="rule-present"></a></p><h4 id="present" tabindex="-1"><a class="header-anchor" href="#present" aria-hidden="true">#</a> present</h4><p>The field under validation must exist in the input data.</p><p><a name="rule-prohibited"></a></p><h4 id="prohibited" tabindex="-1"><a class="header-anchor" href="#prohibited" aria-hidden="true">#</a> prohibited</h4><p>The field under validation must be missing or empty. A field is &quot;empty&quot; if it meets one of the following criteria:</p>',10),X=e("div",{class:"content-list",markdown:"1"},[e("ul",null,[e("li",null,[a("The value is "),e("code",null,"null"),a(".")]),e("li",null,"The value is an empty string."),e("li",null,[a("The value is an empty array or empty "),e("code",null,"Countable"),a(" object.")]),e("li",null,"The value is an uploaded file with an empty path.")])],-1),Q=n('<p><a name="rule-prohibited-if"></a></p><h4 id="prohibited-if-anotherfield-value" tabindex="-1"><a class="header-anchor" href="#prohibited-if-anotherfield-value" aria-hidden="true">#</a> prohibited_if:<em>anotherfield</em>,<em>value</em>,...</h4><p>The field under validation must be missing or empty if the <em>anotherfield</em> field is equal to any <em>value</em>. A field is &quot;empty&quot; if it meets one of the following criteria:</p>',3),K=e("div",{class:"content-list",markdown:"1"},[e("ul",null,[e("li",null,[a("The value is "),e("code",null,"null"),a(".")]),e("li",null,"The value is an empty string."),e("li",null,[a("The value is an empty array or empty "),e("code",null,"Countable"),a(" object.")]),e("li",null,"The value is an uploaded file with an empty path.")])],-1),ee=n(`<p>If complex conditional prohibition logic is required, you may utilize the <code>Rule::prohibitedIf</code> method. This method accepts a boolean or a closure. When given a closure, the closure should return <code>true</code> or <code>false</code> to indicate if the field under validation should be prohibited:</p><pre><code>use Illuminate\\Support\\Facades\\Validator;
use Illuminate\\Validation\\Rule;

Validator::make($request-&gt;all(), [
    &#39;role_id&#39; =&gt; Rule::prohibitedIf($request-&gt;user()-&gt;is_admin),
]);

Validator::make($request-&gt;all(), [
    &#39;role_id&#39; =&gt; Rule::prohibitedIf(fn () =&gt; $request-&gt;user()-&gt;is_admin),
]);
</code></pre><p><a name="rule-prohibited-unless"></a></p><h4 id="prohibited-unless-anotherfield-value" tabindex="-1"><a class="header-anchor" href="#prohibited-unless-anotherfield-value" aria-hidden="true">#</a> prohibited_unless:<em>anotherfield</em>,<em>value</em>,...</h4><p>The field under validation must be missing or empty unless the <em>anotherfield</em> field is equal to any <em>value</em>. A field is &quot;empty&quot; if it meets one of the following criteria:</p>`,5),ae=e("div",{class:"content-list",markdown:"1"},[e("ul",null,[e("li",null,[a("The value is "),e("code",null,"null"),a(".")]),e("li",null,"The value is an empty string."),e("li",null,[a("The value is an empty array or empty "),e("code",null,"Countable"),a(" object.")]),e("li",null,"The value is an uploaded file with an empty path.")])],-1),te=e("p",null,[e("a",{name:"rule-prohibits"})],-1),ie=e("h4",{id:"prohibits-anotherfield",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#prohibits-anotherfield","aria-hidden":"true"},"#"),a(" prohibits:"),e("em",null,"anotherfield"),a(",...")],-1),ne=e("p",null,[a("If the field under validation is not missing or empty, all fields in "),e("em",null,"anotherfield"),a(' must be missing or empty. A field is "empty" if it meets one of the following criteria:')],-1),oe=e("div",{class:"content-list",markdown:"1"},[e("ul",null,[e("li",null,[a("The value is "),e("code",null,"null"),a(".")]),e("li",null,"The value is an empty string."),e("li",null,[a("The value is an empty array or empty "),e("code",null,"Countable"),a(" object.")]),e("li",null,"The value is an uploaded file with an empty path.")])],-1),re=n('<p><a name="rule-regex"></a></p><h4 id="regex-pattern" tabindex="-1"><a class="header-anchor" href="#regex-pattern" aria-hidden="true">#</a> regex:<em>pattern</em></h4><p>The field under validation must match the given regular expression.</p><p>Internally, this rule uses the PHP <code>preg_match</code> function. The pattern specified should obey the same formatting required by <code>preg_match</code> and thus also include valid delimiters. For example: <code>&#39;email&#39; =&gt; &#39;regex:/^.+@.+$/i&#39;</code>.</p><blockquote><p><strong>Warning</strong><br> When using the <code>regex</code> / <code>not_regex</code> patterns, it may be necessary to specify rules in an array instead of using <code>|</code> delimiters, especially if the regular expression contains a <code>|</code> character.</p></blockquote><p><a name="rule-required"></a></p><h4 id="required" tabindex="-1"><a class="header-anchor" href="#required" aria-hidden="true">#</a> required</h4><p>The field under validation must be present in the input data and not empty. A field is &quot;empty&quot; if it meets one of the following criteria:</p>',8),se=e("div",{class:"content-list",markdown:"1"},[e("ul",null,[e("li",null,[a("The value is "),e("code",null,"null"),a(".")]),e("li",null,"The value is an empty string."),e("li",null,[a("The value is an empty array or empty "),e("code",null,"Countable"),a(" object.")]),e("li",null,"The value is an uploaded file with no path.")])],-1),de=n(`<p><a name="rule-required-if"></a></p><h4 id="required-if-anotherfield-value" tabindex="-1"><a class="header-anchor" href="#required-if-anotherfield-value" aria-hidden="true">#</a> required_if:<em>anotherfield</em>,<em>value</em>,...</h4><p>The field under validation must be present and not empty if the <em>anotherfield</em> field is equal to any <em>value</em>.</p><p>If you would like to construct a more complex condition for the <code>required_if</code> rule, you may use the <code>Rule::requiredIf</code> method. This method accepts a boolean or a closure. When passed a closure, the closure should return <code>true</code> or <code>false</code> to indicate if the field under validation is required:</p><pre><code>use Illuminate\\Support\\Facades\\Validator;
use Illuminate\\Validation\\Rule;

Validator::make($request-&gt;all(), [
    &#39;role_id&#39; =&gt; Rule::requiredIf($request-&gt;user()-&gt;is_admin),
]);

Validator::make($request-&gt;all(), [
    &#39;role_id&#39; =&gt; Rule::requiredIf(fn () =&gt; $request-&gt;user()-&gt;is_admin),
]);
</code></pre><p><a name="rule-required-if-accepted"></a></p><h4 id="required-if-accepted-anotherfield" tabindex="-1"><a class="header-anchor" href="#required-if-accepted-anotherfield" aria-hidden="true">#</a> required_if_accepted:_anotherfield,...</h4><p>The field under validation must be present and not empty if the <em>anotherfield</em> field is equal to <code>yes</code>, <code>on</code>, <code>1</code>, <code>&quot;1&quot;</code>, <code>true</code>, or <code>&quot;true&quot;</code>.</p><p><a name="rule-required-unless"></a></p><h4 id="required-unless-anotherfield-value" tabindex="-1"><a class="header-anchor" href="#required-unless-anotherfield-value" aria-hidden="true">#</a> required_unless:<em>anotherfield</em>,<em>value</em>,...</h4><p>The field under validation must be present and not empty unless the <em>anotherfield</em> field is equal to any <em>value</em>. This also means <em>anotherfield</em> must be present in the request data unless <em>value</em> is <code>null</code>. If <em>value</em> is <code>null</code> (<code>required_unless:name,null</code>), the field under validation will be required unless the comparison field is <code>null</code> or the comparison field is missing from the request data.</p><p><a name="rule-required-with"></a></p><h4 id="required-with-foo-bar" tabindex="-1"><a class="header-anchor" href="#required-with-foo-bar" aria-hidden="true">#</a> required_with:<em>foo</em>,<em>bar</em>,...</h4><p>The field under validation must be present and not empty <em>only if</em> any of the other specified fields are present and not empty.</p><p><a name="rule-required-with-all"></a></p><h4 id="required-with-all-foo-bar" tabindex="-1"><a class="header-anchor" href="#required-with-all-foo-bar" aria-hidden="true">#</a> required_with_all:<em>foo</em>,<em>bar</em>,...</h4><p>The field under validation must be present and not empty <em>only if</em> all of the other specified fields are present and not empty.</p><p><a name="rule-required-without"></a></p><h4 id="required-without-foo-bar" tabindex="-1"><a class="header-anchor" href="#required-without-foo-bar" aria-hidden="true">#</a> required_without:<em>foo</em>,<em>bar</em>,...</h4><p>The field under validation must be present and not empty <em>only when</em> any of the other specified fields are empty or not present.</p><p><a name="rule-required-without-all"></a></p><h4 id="required-without-all-foo-bar" tabindex="-1"><a class="header-anchor" href="#required-without-all-foo-bar" aria-hidden="true">#</a> required_without_all:<em>foo</em>,<em>bar</em>,...</h4><p>The field under validation must be present and not empty <em>only when</em> all of the other specified fields are empty or not present.</p><p><a name="rule-required-array-keys"></a></p><h4 id="required-array-keys-foo-bar" tabindex="-1"><a class="header-anchor" href="#required-array-keys-foo-bar" aria-hidden="true">#</a> required_array_keys:<em>foo</em>,<em>bar</em>,...</h4><p>The field under validation must be an array and must contain at least the specified keys.</p><p><a name="rule-same"></a></p><h4 id="same-field" tabindex="-1"><a class="header-anchor" href="#same-field" aria-hidden="true">#</a> same:<em>field</em></h4><p>The given <em>field</em> must match the field under validation.</p><p><a name="rule-size"></a></p><h4 id="size-value" tabindex="-1"><a class="header-anchor" href="#size-value" aria-hidden="true">#</a> size:<em>value</em></h4><p>The field under validation must have a size matching the given <em>value</em>. For string data, <em>value</em> corresponds to the number of characters. For numeric data, <em>value</em> corresponds to a given integer value (the attribute must also have the <code>numeric</code> or <code>integer</code> rule). For an array, <em>size</em> corresponds to the <code>count</code> of the array. For files, <em>size</em> corresponds to the file size in kilobytes. Let&#39;s look at some examples:</p><pre><code>// Validate that a string is exactly 12 characters long...
&#39;title&#39; =&gt; &#39;size:12&#39;;

// Validate that a provided integer equals 10...
&#39;seats&#39; =&gt; &#39;integer|size:10&#39;;

// Validate that an array has exactly 5 elements...
&#39;tags&#39; =&gt; &#39;array|size:5&#39;;

// Validate that an uploaded file is exactly 512 kilobytes...
&#39;image&#39; =&gt; &#39;file|size:512&#39;;
</code></pre><p><a name="rule-starts-with"></a></p><h4 id="starts-with-foo-bar" tabindex="-1"><a class="header-anchor" href="#starts-with-foo-bar" aria-hidden="true">#</a> starts_with:<em>foo</em>,<em>bar</em>,...</h4><p>The field under validation must start with one of the given values.</p><p><a name="rule-string"></a></p><h4 id="string" tabindex="-1"><a class="header-anchor" href="#string" aria-hidden="true">#</a> string</h4><p>The field under validation must be a string. If you would like to allow the field to also be <code>null</code>, you should assign the <code>nullable</code> rule to the field.</p><p><a name="rule-timezone"></a></p><h4 id="timezone" tabindex="-1"><a class="header-anchor" href="#timezone" aria-hidden="true">#</a> timezone</h4><p>The field under validation must be a valid timezone identifier according to the <code>DateTimeZone::listIdentifiers</code> method.</p>`,42),le={href:"https://www.php.net/manual/en/datetimezone.listidentifiers.php",target:"_blank",rel:"noopener noreferrer"},ue=e("code",null,"DateTimeZone::listIdentifiers",-1),ce=n(`<pre><code>&#39;timezone&#39; =&gt; &#39;required|timezone:all&#39;;

&#39;timezone&#39; =&gt; &#39;required|timezone:Africa&#39;;

&#39;timezone&#39; =&gt; &#39;required|timezone:per_country,US&#39;;
</code></pre><p><a name="rule-unique"></a></p><h4 id="unique-table-column" tabindex="-1"><a class="header-anchor" href="#unique-table-column" aria-hidden="true">#</a> unique:<em>table</em>,<em>column</em></h4><p>The field under validation must not exist within the given database table.</p><p><strong>Specifying A Custom Table / Column Name:</strong></p><p>Instead of specifying the table name directly, you may specify the Eloquent model which should be used to determine the table name:</p><pre><code>&#39;email&#39; =&gt; &#39;unique:App\\Models\\User,email_address&#39;
</code></pre><p>The <code>column</code> option may be used to specify the field&#39;s corresponding database column. If the <code>column</code> option is not specified, the name of the field under validation will be used.</p><pre><code>&#39;email&#39; =&gt; &#39;unique:users,email_address&#39;
</code></pre><p><strong>Specifying A Custom Database Connection</strong></p><p>Occasionally, you may need to set a custom connection for database queries made by the Validator. To accomplish this, you may prepend the connection name to the table name:</p><pre><code>&#39;email&#39; =&gt; &#39;unique:connection.users,email_address&#39;
</code></pre><p><strong>Forcing A Unique Rule To Ignore A Given ID:</strong></p><p>Sometimes, you may wish to ignore a given ID during unique validation. For example, consider an &quot;update profile&quot; screen that includes the user&#39;s name, email address, and location. You will probably want to verify that the email address is unique. However, if the user only changes the name field and not the email field, you do not want a validation error to be thrown because the user is already the owner of the email address in question.</p><p>To instruct the validator to ignore the user&#39;s ID, we&#39;ll use the <code>Rule</code> class to fluently define the rule. In this example, we&#39;ll also specify the validation rules as an array instead of using the <code>|</code> character to delimit the rules:</p><pre><code>use Illuminate\\Support\\Facades\\Validator;
use Illuminate\\Validation\\Rule;

Validator::make($data, [
    &#39;email&#39; =&gt; [
        &#39;required&#39;,
        Rule::unique(&#39;users&#39;)-&gt;ignore($user-&gt;id),
    ],
]);
</code></pre><blockquote><p><strong>Warning</strong><br> You should never pass any user controlled request input into the <code>ignore</code> method. Instead, you should only pass a system generated unique ID such as an auto-incrementing ID or UUID from an Eloquent model instance. Otherwise, your application will be vulnerable to an SQL injection attack.</p></blockquote><p>Instead of passing the model key&#39;s value to the <code>ignore</code> method, you may also pass the entire model instance. Laravel will automatically extract the key from the model:</p><pre><code>Rule::unique(&#39;users&#39;)-&gt;ignore($user)
</code></pre><p>If your table uses a primary key column name other than <code>id</code>, you may specify the name of the column when calling the <code>ignore</code> method:</p><pre><code>Rule::unique(&#39;users&#39;)-&gt;ignore($user-&gt;id, &#39;user_id&#39;)
</code></pre><p>By default, the <code>unique</code> rule will check the uniqueness of the column matching the name of the attribute being validated. However, you may pass a different column name as the second argument to the <code>unique</code> method:</p><pre><code>Rule::unique(&#39;users&#39;, &#39;email_address&#39;)-&gt;ignore($user-&gt;id)
</code></pre><p><strong>Adding Additional Where Clauses:</strong></p><p>You may specify additional query conditions by customizing the query using the <code>where</code> method. For example, let&#39;s add a query condition that scopes the query to only search records that have an <code>account_id</code> column value of <code>1</code>:</p><pre><code>&#39;email&#39; =&gt; Rule::unique(&#39;users&#39;)-&gt;where(fn (Builder $query) =&gt; $query-&gt;where(&#39;account_id&#39;, 1))
</code></pre><p><a name="rule-uppercase"></a></p><h4 id="uppercase" tabindex="-1"><a class="header-anchor" href="#uppercase" aria-hidden="true">#</a> uppercase</h4><p>The field under validation must be uppercase.</p><p><a name="rule-url"></a></p><h4 id="url" tabindex="-1"><a class="header-anchor" href="#url" aria-hidden="true">#</a> url</h4><p>The field under validation must be a valid URL.</p><p>If you would like to specify the URL protocols that should be considered valid, you may pass the protocols as validation rule parameters:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token string single-quoted-string">&#39;url&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;url:http,https&#39;</span><span class="token punctuation">,</span>

<span class="token string single-quoted-string">&#39;game&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;url:minecraft,steam&#39;</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="rule-ulid"></a></p><h4 id="ulid" tabindex="-1"><a class="header-anchor" href="#ulid" aria-hidden="true">#</a> ulid</h4>`,36),he={href:"https://github.com/ulid/spec",target:"_blank",rel:"noopener noreferrer"},pe=n(`<p><a name="rule-uuid"></a></p><h4 id="uuid" tabindex="-1"><a class="header-anchor" href="#uuid" aria-hidden="true">#</a> uuid</h4><p>The field under validation must be a valid RFC 4122 (version 1, 3, 4, or 5) universally unique identifier (UUID).</p><p><a name="conditionally-adding-rules"></a></p><h2 id="conditionally-adding-rules" tabindex="-1"><a class="header-anchor" href="#conditionally-adding-rules" aria-hidden="true">#</a> Conditionally Adding Rules</h2><p><a name="skipping-validation-when-fields-have-certain-values"></a></p><h4 id="skipping-validation-when-fields-have-certain-values" tabindex="-1"><a class="header-anchor" href="#skipping-validation-when-fields-have-certain-values" aria-hidden="true">#</a> Skipping Validation When Fields Have Certain Values</h4><p>You may occasionally wish to not validate a given field if another field has a given value. You may accomplish this using the <code>exclude_if</code> validation rule. In this example, the <code>appointment_date</code> and <code>doctor_name</code> fields will not be validated if the <code>has_appointment</code> field has a value of <code>false</code>:</p><pre><code>use Illuminate\\Support\\Facades\\Validator;

$validator = Validator::make($data, [
    &#39;has_appointment&#39; =&gt; &#39;required|boolean&#39;,
    &#39;appointment_date&#39; =&gt; &#39;exclude_if:has_appointment,false|required|date&#39;,
    &#39;doctor_name&#39; =&gt; &#39;exclude_if:has_appointment,false|required|string&#39;,
]);
</code></pre><p>Alternatively, you may use the <code>exclude_unless</code> rule to not validate a given field unless another field has a given value:</p><pre><code>$validator = Validator::make($data, [
    &#39;has_appointment&#39; =&gt; &#39;required|boolean&#39;,
    &#39;appointment_date&#39; =&gt; &#39;exclude_unless:has_appointment,true|required|date&#39;,
    &#39;doctor_name&#39; =&gt; &#39;exclude_unless:has_appointment,true|required|string&#39;,
]);
</code></pre><p><a name="validating-when-present"></a></p><h4 id="validating-when-present" tabindex="-1"><a class="header-anchor" href="#validating-when-present" aria-hidden="true">#</a> Validating When Present</h4><p>In some situations, you may wish to run validation checks against a field <strong>only</strong> if that field is present in the data being validated. To quickly accomplish this, add the <code>sometimes</code> rule to your rule list:</p><pre><code>$v = Validator::make($data, [
    &#39;email&#39; =&gt; &#39;sometimes|required|email&#39;,
]);
</code></pre><p>In the example above, the <code>email</code> field will only be validated if it is present in the <code>$data</code> array.</p><blockquote><p><strong>Note</strong><br> If you are attempting to validate a field that should always be present but may be empty, check out <a href="#a-note-on-optional-fields">this note on optional fields</a>.</p></blockquote><p><a name="complex-conditional-validation"></a></p><h4 id="complex-conditional-validation" tabindex="-1"><a class="header-anchor" href="#complex-conditional-validation" aria-hidden="true">#</a> Complex Conditional Validation</h4><p>Sometimes you may wish to add validation rules based on more complex conditional logic. For example, you may wish to require a given field only if another field has a greater value than 100. Or, you may need two fields to have a given value only when another field is present. Adding these validation rules doesn&#39;t have to be a pain. First, create a <code>Validator</code> instance with your <em>static rules</em> that never change:</p><pre><code>use Illuminate\\Support\\Facades\\Validator;

$validator = Validator::make($request-&gt;all(), [
    &#39;email&#39; =&gt; &#39;required|email&#39;,
    &#39;games&#39; =&gt; &#39;required|numeric&#39;,
]);
</code></pre><p>Let&#39;s assume our web application is for game collectors. If a game collector registers with our application and they own more than 100 games, we want them to explain why they own so many games. For example, perhaps they run a game resale shop, or maybe they just enjoy collecting games. To conditionally add this requirement, we can use the <code>sometimes</code> method on the <code>Validator</code> instance.</p><pre><code>use Illuminate\\Support\\Fluent;

$validator-&gt;sometimes(&#39;reason&#39;, &#39;required|max:500&#39;, function (Fluent $input) {
    return $input-&gt;games &gt;= 100;
});
</code></pre><p>The first argument passed to the <code>sometimes</code> method is the name of the field we are conditionally validating. The second argument is a list of the rules we want to add. If the closure passed as the third argument returns <code>true</code>, the rules will be added. This method makes it a breeze to build complex conditional validations. You may even add conditional validations for several fields at once:</p><pre><code>$validator-&gt;sometimes([&#39;reason&#39;, &#39;cost&#39;], &#39;required&#39;, function (Fluent $input) {
    return $input-&gt;games &gt;= 100;
});
</code></pre><blockquote><p><strong>Note</strong><br> The <code>$input</code> parameter passed to your closure will be an instance of <code>Illuminate\\Support\\Fluent</code> and may be used to access your input and files under validation.</p></blockquote><p><a name="complex-conditional-array-validation"></a></p><h4 id="complex-conditional-array-validation" tabindex="-1"><a class="header-anchor" href="#complex-conditional-array-validation" aria-hidden="true">#</a> Complex Conditional Array Validation</h4><p>Sometimes you may want to validate a field based on another field in the same nested array whose index you do not know. In these situations, you may allow your closure to receive a second argument which will be the current individual item in the array being validated:</p><pre><code>$input = [
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
</code></pre><p>Like the <code>$input</code> parameter passed to the closure, the <code>$item</code> parameter is an instance of <code>Illuminate\\Support\\Fluent</code> when the attribute data is an array; otherwise, it is a string.</p><p><a name="validating-arrays"></a></p><h2 id="validating-arrays" tabindex="-1"><a class="header-anchor" href="#validating-arrays" aria-hidden="true">#</a> Validating Arrays</h2><p>As discussed in the <a href="#rule-array"><code>array</code> validation rule documentation</a>, the <code>array</code> rule accepts a list of allowed array keys. If any additional keys are present within the array, validation will fail:</p><pre><code>use Illuminate\\Support\\Facades\\Validator;

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
</code></pre><p>In general, you should always specify the array keys that are allowed to be present within your array. Otherwise, the validator&#39;s <code>validate</code> and <code>validated</code> methods will return all of the validated data, including the array and all of its keys, even if those keys were not validated by other nested array validation rules.</p><p><a name="validating-nested-array-input"></a></p><h3 id="validating-nested-array-input" tabindex="-1"><a class="header-anchor" href="#validating-nested-array-input" aria-hidden="true">#</a> Validating Nested Array Input</h3><p>Validating nested array based form input fields doesn&#39;t have to be a pain. You may use &quot;dot notation&quot; to validate attributes within an array. For example, if the incoming HTTP request contains a <code>photos[profile]</code> field, you may validate it like so:</p><pre><code>use Illuminate\\Support\\Facades\\Validator;

$validator = Validator::make($request-&gt;all(), [
    &#39;photos.profile&#39; =&gt; &#39;required|image&#39;,
]);
</code></pre><p>You may also validate each element of an array. For example, to validate that each email in a given array input field is unique, you may do the following:</p><pre><code>$validator = Validator::make($request-&gt;all(), [
    &#39;person.*.email&#39; =&gt; &#39;email|unique:users&#39;,
    &#39;person.*.first_name&#39; =&gt; &#39;required_with:person.*.last_name&#39;,
]);
</code></pre><p>Likewise, you may use the <code>*</code> character when specifying <a href="#custom-messages-for-specific-attributes">custom validation messages in your language files</a>, making it a breeze to use a single validation message for array based fields:</p><pre><code>&#39;custom&#39; =&gt; [
    &#39;person.*.email&#39; =&gt; [
        &#39;unique&#39; =&gt; &#39;Each person must have a unique email address&#39;,
    ]
],
</code></pre><p><a name="accessing-nested-array-data"></a></p><h4 id="accessing-nested-array-data" tabindex="-1"><a class="header-anchor" href="#accessing-nested-array-data" aria-hidden="true">#</a> Accessing Nested Array Data</h4><p>Sometimes you may need to access the value for a given nested array element when assigning validation rules to the attribute. You may accomplish this using the <code>Rule::forEach</code> method. The <code>forEach</code> method accepts a closure that will be invoked for each iteration of the array attribute under validation and will receive the attribute&#39;s value and explicit, fully-expanded attribute name. The closure should return an array of rules to assign to the array element:</p><pre><code>use App\\Rules\\HasPermission;
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
</code></pre><p><a name="error-message-indexes-and-positions"></a></p><h3 id="error-message-indexes-positions" tabindex="-1"><a class="header-anchor" href="#error-message-indexes-positions" aria-hidden="true">#</a> Error Message Indexes &amp; Positions</h3><p>When validating arrays, you may want to reference the index or position of a particular item that failed validation within the error message displayed by your application. To accomplish this, you may include the <code>:index</code> (starts from <code>0</code>) and <code>:position</code> (starts from <code>1</code>) placeholders within your <a href="#manual-customizing-the-error-messages">custom validation message</a>:</p><pre><code>use Illuminate\\Support\\Facades\\Validator;

$input = [
    &#39;photos&#39; =&gt; [
        [
            &#39;name&#39; =&gt; &#39;BeachVacation.jpg&#39;,
            &#39;description&#39; =&gt; &#39;A photo of my beach vacation!&#39;,
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
    &#39;photos.*.description.required&#39; =&gt; &#39;Please describe photo #:position.&#39;,
]);
</code></pre><p>Given the example above, validation will fail and the user will be presented with the following error of <em>&quot;Please describe photo #2.&quot;</em></p><p>If necessary, you may reference more deeply nested indexes and positions via <code>second-index</code>, <code>second-position</code>, <code>third-index</code>, <code>third-position</code>, etc.</p><pre><code>&#39;photos.*.attributes.*.string&#39; =&gt; &#39;Invalid attribute for photo #:second-position.&#39;,
</code></pre><p><a name="validating-files"></a></p><h2 id="validating-files" tabindex="-1"><a class="header-anchor" href="#validating-files" aria-hidden="true">#</a> Validating Files</h2><p>Laravel provides a variety of validation rules that may be used to validate uploaded files, such as <code>mimes</code>, <code>image</code>, <code>min</code>, and <code>max</code>. While you are free to specify these rules individually when validating files, Laravel also offers a fluent file validation rule builder that you may find convenient:</p><pre><code>use Illuminate\\Support\\Facades\\Validator;
use Illuminate\\Validation\\Rules\\File;

Validator::validate($input, [
    &#39;attachment&#39; =&gt; [
        &#39;required&#39;,
        File::types([&#39;mp3&#39;, &#39;wav&#39;])
            -&gt;min(1024)
            -&gt;max(12 * 1024),
    ],
]);
</code></pre><p>If your application accepts images uploaded by your users, you may use the <code>File</code> rule&#39;s <code>image</code> constructor method to indicate that the uploaded file should be an image. In addition, the <code>dimensions</code> rule may be used to limit the dimensions of the image:</p><pre><code>use Illuminate\\Support\\Facades\\Validator;
use Illuminate\\Validation\\Rule;
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
</code></pre><blockquote><p><strong>Note</strong><br> More information regarding validating image dimensions may be found in the <a href="#rule-dimensions">dimension rule documentation</a>.</p></blockquote><p><a name="validating-files-file-sizes"></a></p><h4 id="file-sizes" tabindex="-1"><a class="header-anchor" href="#file-sizes" aria-hidden="true">#</a> File Sizes</h4><p>For convenience, minimum and maximum file sizes may be specified as a string with a suffix indicating the file size units. The <code>kb</code>, <code>mb</code>, <code>gb</code>, and <code>tb</code> suffixes are supported:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token class-name static-context">File</span><span class="token operator">::</span><span class="token function">image</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">min</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;1kb&#39;</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;10mb&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="validating-files-file-types"></a></p><h4 id="file-types" tabindex="-1"><a class="header-anchor" href="#file-types" aria-hidden="true">#</a> File Types</h4><p>Even though you only need to specify the extensions when invoking the <code>types</code> method, this method actually validates the MIME type of the file by reading the file&#39;s contents and guessing its MIME type. A full listing of MIME types and their corresponding extensions may be found at the following location:</p>`,69),me={href:"https://svn.apache.org/repos/asf/httpd/httpd/trunk/docs/conf/mime.types",target:"_blank",rel:"noopener noreferrer"},fe=n(`<p><a name="validating-passwords"></a></p><h2 id="validating-passwords" tabindex="-1"><a class="header-anchor" href="#validating-passwords" aria-hidden="true">#</a> Validating Passwords</h2><p>To ensure that passwords have an adequate level of complexity, you may use Laravel&#39;s <code>Password</code> rule object:</p><pre><code>use Illuminate\\Support\\Facades\\Validator;
use Illuminate\\Validation\\Rules\\Password;

$validator = Validator::make($request-&gt;all(), [
    &#39;password&#39; =&gt; [&#39;required&#39;, &#39;confirmed&#39;, Password::min(8)],
]);
</code></pre><p>The <code>Password</code> rule object allows you to easily customize the password complexity requirements for your application, such as specifying that passwords require at least one letter, number, symbol, or characters with mixed casing:</p><pre><code>// Require at least 8 characters...
Password::min(8)

// Require at least one letter...
Password::min(8)-&gt;letters()

// Require at least one uppercase and one lowercase letter...
Password::min(8)-&gt;mixedCase()

// Require at least one number...
Password::min(8)-&gt;numbers()

// Require at least one symbol...
Password::min(8)-&gt;symbols()
</code></pre><p>In addition, you may ensure that a password has not been compromised in a public password data breach leak using the <code>uncompromised</code> method:</p><pre><code>Password::min(8)-&gt;uncompromised()
</code></pre>`,8),ge=e("code",null,"Password",-1),ve={href:"https://en.wikipedia.org/wiki/K-anonymity",target:"_blank",rel:"noopener noreferrer"},be={href:"https://haveibeenpwned.com",target:"_blank",rel:"noopener noreferrer"},ye=n(`<p>By default, if a password appears at least once in a data leak, it will be considered compromised. You can customize this threshold using the first argument of the <code>uncompromised</code> method:</p><pre><code>// Ensure the password appears less than 3 times in the same data leak...
Password::min(8)-&gt;uncompromised(3);
</code></pre><p>Of course, you may chain all the methods in the examples above:</p><pre><code>Password::min(8)
    -&gt;letters()
    -&gt;mixedCase()
    -&gt;numbers()
    -&gt;symbols()
    -&gt;uncompromised()
</code></pre><p><a name="defining-default-password-rules"></a></p><h4 id="defining-default-password-rules" tabindex="-1"><a class="header-anchor" href="#defining-default-password-rules" aria-hidden="true">#</a> Defining Default Password Rules</h4><p>You may find it convenient to specify the default validation rules for passwords in a single location of your application. You can easily accomplish this using the <code>Password::defaults</code> method, which accepts a closure. The closure given to the <code>defaults</code> method should return the default configuration of the Password rule. Typically, the <code>defaults</code> rule should be called within the <code>boot</code> method of one of your application&#39;s service providers:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Validation<span class="token punctuation">\\</span>Rules<span class="token punctuation">\\</span>Password</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * Bootstrap any application services.
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then, when you would like to apply the default rules to a particular password undergoing validation, you may invoke the <code>defaults</code> method with no arguments:</p><pre><code>&#39;password&#39; =&gt; [&#39;required&#39;, Password::defaults()],
</code></pre><p>Occasionally, you may want to attach additional validation rules to your default password validation rules. You may use the <code>rules</code> method to accomplish this:</p><pre><code>use App\\Rules\\ZxcvbnRule;

Password::defaults(function () {
    $rule = Password::min(8)-&gt;rules([new ZxcvbnRule]);

    // ...
});
</code></pre><p><a name="custom-validation-rules"></a></p><h2 id="custom-validation-rules" tabindex="-1"><a class="header-anchor" href="#custom-validation-rules" aria-hidden="true">#</a> Custom Validation Rules</h2><p><a name="using-rule-objects"></a></p><h3 id="using-rule-objects" tabindex="-1"><a class="header-anchor" href="#using-rule-objects" aria-hidden="true">#</a> Using Rule Objects</h3><p>Laravel provides a variety of helpful validation rules; however, you may wish to specify some of your own. One method of registering custom validation rules is using rule objects. To generate a new rule object, you may use the <code>make:rule</code> Artisan command. Let&#39;s use this command to generate a rule that verifies a string is uppercase. Laravel will place the new rule in the <code>app/Rules</code> directory. If this directory does not exist, Laravel will create it when you execute the Artisan command to create your rule:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan make:rule Uppercase
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Once the rule has been created, we are ready to define its behavior. A rule object contains a single method: <code>validate</code>. This method receives the attribute name, its value, and a callback that should be invoked on failure with the validation error message:</p><pre><code>&lt;?php

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
</code></pre><p>Once the rule has been defined, you may attach it to a validator by passing an instance of the rule object with your other validation rules:</p><pre><code>use App\\Rules\\Uppercase;

$request-&gt;validate([
    &#39;name&#39; =&gt; [&#39;required&#39;, &#39;string&#39;, new Uppercase],
]);
</code></pre><h4 id="translating-validation-messages" tabindex="-1"><a class="header-anchor" href="#translating-validation-messages" aria-hidden="true">#</a> Translating Validation Messages</h4><p>Instead of providing a literal error message to the <code>$fail</code> closure, you may also provide a <a href="./localization">translation string key</a> and instruct Laravel to translate the error message:</p><pre><code>if (strtoupper($value) !== $value) {
    $fail(&#39;validation.uppercase&#39;)-&gt;translate();
}
</code></pre><p>If necessary, you may provide placeholder replacements and the preferred language as the first and second arguments to the <code>translate</code> method:</p><pre><code>$fail(&#39;validation.location&#39;)-&gt;translate([
    &#39;value&#39; =&gt; $this-&gt;value,
], &#39;fr&#39;)
</code></pre><h4 id="accessing-additional-data" tabindex="-1"><a class="header-anchor" href="#accessing-additional-data" aria-hidden="true">#</a> Accessing Additional Data</h4><p>If your custom validation rule class needs to access all of the other data undergoing validation, your rule class may implement the <code>Illuminate\\Contracts\\Validation\\DataAwareRule</code> interface. This interface requires your class to define a <code>setData</code> method. This method will automatically be invoked by Laravel (before validation proceeds) with all of the data under validation:</p><pre><code>&lt;?php

namespace App\\Rules;

use Illuminate\\Contracts\\Validation\\DataAwareRule;
use Illuminate\\Contracts\\Validation\\ValidationRule;

class Uppercase implements DataAwareRule, ValidationRule
{
    /**
     * All of the data under validation.
     *
     * @var array&lt;string, mixed&gt;
     */
    protected $data = [];

    // ...

    /**
     * Set the data under validation.
     *
     * @param  array&lt;string, mixed&gt;  $data
     */
    public function setData(array $data): static
    {
        $this-&gt;data = $data;

        return $this;
    }
}
</code></pre><p>Or, if your validation rule requires access to the validator instance performing the validation, you may implement the <code>ValidatorAwareRule</code> interface:</p><pre><code>&lt;?php

namespace App\\Rules;

use Illuminate\\Contracts\\Validation\\ValidationRule;
use Illuminate\\Contracts\\Validation\\ValidatorAwareRule;
use Illuminate\\Validation\\Validator;

class Uppercase implements ValidationRule, ValidatorAwareRule
{
    /**
     * The validator instance.
     *
     * @var \\Illuminate\\Validation\\Validator
     */
    protected $validator;

    // ...

    /**
     * Set the current validator.
     */
    public function setValidator(Validator $validator): static
    {
        $this-&gt;validator = $validator;

        return $this;
    }
}
</code></pre><p><a name="using-closures"></a></p><h3 id="using-closures" tabindex="-1"><a class="header-anchor" href="#using-closures" aria-hidden="true">#</a> Using Closures</h3><p>If you only need the functionality of a custom rule once throughout your application, you may use a closure instead of a rule object. The closure receives the attribute&#39;s name, the attribute&#39;s value, and a <code>$fail</code> callback that should be called if validation fails:</p><pre><code>use Illuminate\\Support\\Facades\\Validator;
use Closure;

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
</code></pre><p><a name="implicit-rules"></a></p><h3 id="implicit-rules" tabindex="-1"><a class="header-anchor" href="#implicit-rules" aria-hidden="true">#</a> Implicit Rules</h3><p>By default, when an attribute being validated is not present or contains an empty string, normal validation rules, including custom rules, are not run. For example, the <a href="#rule-unique"><code>unique</code></a> rule will not be run against an empty string:</p><pre><code>use Illuminate\\Support\\Facades\\Validator;

$rules = [&#39;name&#39; =&gt; &#39;unique:users,name&#39;];

$input = [&#39;name&#39; =&gt; &#39;&#39;];

Validator::make($input, $rules)-&gt;passes(); // true
</code></pre><p>For a custom rule to run even when an attribute is empty, the rule must imply that the attribute is required. To quickly generate a new implicit rule object, you may use the <code>make:rule</code> Artisan command with the <code>--implicit</code> option:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan make:rule Uppercase <span class="token parameter variable">--implicit</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p><strong>Warning</strong><br> An &quot;implicit&quot; rule only <em>implies</em> that the attribute is required. Whether it actually invalidates a missing or empty attribute is up to you.</p></blockquote>`,43);function we(qe,ke){const t=r("ExternalLinkIcon");return s(),d("div",null,[u,c,h,e("p",null,[a("The field under validation must be entirely Unicode alphabetic characters contained in "),e("a",p,[m,i(t)]),a(" and "),e("a",f,[g,i(t)]),a(".")]),v,e("p",null,[a("The field under validation must be entirely Unicode alpha-numeric characters contained in "),e("a",b,[y,i(t)]),a(", "),e("a",w,[q,i(t)]),a(", "),e("a",k,[x,i(t)]),a(", as well as ASCII dashes ("),T,a(") and ASCII underscores ("),_,a(").")]),I,e("p",null,[a("The field under validation must be entirely Unicode alpha-numeric characters contained in "),e("a",$,[V,i(t)]),a(", "),e("a",R,[A,i(t)]),a(", and "),e("a",F,[S,i(t)]),a(".")]),z,e("p",null,[a("The field under validation must match one of the given "),P,a(". You should use "),C,a(),L,a(" or "),E,a(" when validating a field, not both. This validation rule supports all formats supported by PHP's "),e("a",M,[a("DateTime"),i(t)]),a(" class.")]),D,e("p",null,[a("The field under validation must be formatted as an email address. This validation rule utilizes the "),e("a",W,[U,i(t)]),a(" package for validating the email address. By default, the "),H,a(" validator is applied, but you can apply other validation styles as well:")]),B,N,O,j,e("p",null,[e("a",Y,[a("https://svn.apache.org/repos/asf/httpd/httpd/trunk/docs/conf/mime.types"),i(t)])]),J,e("p",null,[a("The field under validation must be "),e("a",G,[a("numeric"),i(t)]),a(".")]),Z,X,Q,K,ee,ae,te,ie,ne,oe,re,se,de,e("p",null,[a("The arguments "),e("a",le,[a("accepted by the "),ue,a(" method"),i(t)]),a(" may also be provided to this validation rule:")]),ce,e("p",null,[a("The field under validation must be a valid "),e("a",he,[a("Universally Unique Lexicographically Sortable Identifier"),i(t)]),a(" (ULID).")]),pe,e("p",null,[e("a",me,[a("https://svn.apache.org/repos/asf/httpd/httpd/trunk/docs/conf/mime.types"),i(t)])]),fe,e("p",null,[a("Internally, the "),ge,a(" rule object uses the "),e("a",ve,[a("k-Anonymity"),i(t)]),a(" model to determine if a password has been leaked via the "),e("a",be,[a("haveibeenpwned.com"),i(t)]),a(" service without sacrificing the user's privacy or security.")]),ye])}const _e=o(l,[["render",we],["__file","validation.html.vue"]]);export{_e as default};
