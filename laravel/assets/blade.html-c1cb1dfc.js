import{_ as d}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as l,c as r,b as e,d as n,e as t,t as c,a}from"./app-8cdff07c.js";const u={},p=a(`<h1 id="blade-templates" tabindex="-1"><a class="header-anchor" href="#blade-templates" aria-hidden="true">#</a> Blade Templates</h1><ul><li><a href="#introduction">Introduction</a><ul><li><a href="#supercharging-blade-with-livewire">Supercharging Blade With Livewire</a></li></ul></li><li><a href="#displaying-data">Displaying Data</a><ul><li><a href="#html-entity-encoding">HTML Entity Encoding</a></li><li><a href="#blade-and-javascript-frameworks">Blade &amp; JavaScript Frameworks</a></li></ul></li><li><a href="#blade-directives">Blade Directives</a><ul><li><a href="#if-statements">If Statements</a></li><li><a href="#switch-statements">Switch Statements</a></li><li><a href="#loops">Loops</a></li><li><a href="#the-loop-variable">The Loop Variable</a></li><li><a href="#conditional-classes">Conditional Classes</a></li><li><a href="#additional-attributes">Additional Attributes</a></li><li><a href="#including-subviews">Including Subviews</a></li><li><a href="#the-once-directive">The <code>@once</code> Directive</a></li><li><a href="#raw-php">Raw PHP</a></li><li><a href="#comments">Comments</a></li></ul></li><li><a href="#components">Components</a><ul><li><a href="#rendering-components">Rendering Components</a></li><li><a href="#passing-data-to-components">Passing Data To Components</a></li><li><a href="#component-attributes">Component Attributes</a></li><li><a href="#reserved-keywords">Reserved Keywords</a></li><li><a href="#slots">Slots</a></li><li><a href="#inline-component-views">Inline Component Views</a></li><li><a href="#dynamic-components">Dynamic Components</a></li><li><a href="#manually-registering-components">Manually Registering Components</a></li></ul></li><li><a href="#anonymous-components">Anonymous Components</a><ul><li><a href="#anonymous-index-components">Anonymous Index Components</a></li><li><a href="#data-properties-attributes">Data Properties / Attributes</a></li><li><a href="#accessing-parent-data">Accessing Parent Data</a></li><li><a href="#anonymous-component-paths">Anonymous Components Paths</a></li></ul></li><li><a href="#building-layouts">Building Layouts</a><ul><li><a href="#layouts-using-components">Layouts Using Components</a></li><li><a href="#layouts-using-template-inheritance">Layouts Using Template Inheritance</a></li></ul></li><li><a href="#forms">Forms</a><ul><li><a href="#csrf-field">CSRF Field</a></li><li><a href="#method-field">Method Field</a></li><li><a href="#validation-errors">Validation Errors</a></li></ul></li><li><a href="#stacks">Stacks</a></li><li><a href="#service-injection">Service Injection</a></li><li><a href="#rendering-inline-blade-templates">Rendering Inline Blade Templates</a></li><li><a href="#rendering-blade-fragments">Rendering Blade Fragments</a></li><li><a href="#extending-blade">Extending Blade</a><ul><li><a href="#custom-echo-handlers">Custom Echo Handlers</a></li><li><a href="#custom-if-statements">Custom If Statements</a></li></ul></li></ul><p><a name="introduction"></a></p><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p>Blade is the simple, yet powerful templating engine that is included with Laravel. Unlike some PHP templating engines, Blade does not restrict you from using plain PHP code in your templates. In fact, all Blade templates are compiled into plain PHP code and cached until they are modified, meaning Blade adds essentially zero overhead to your application. Blade template files use the <code>.blade.php</code> file extension and are typically stored in the <code>resources/views</code> directory.</p><p>Blade views may be returned from routes or controllers using the global <code>view</code> helper. Of course, as mentioned in the documentation on <a href="./views">views</a>, data may be passed to the Blade view using the <code>view</code> helper&#39;s second argument:</p><pre><code>Route::get(&#39;/&#39;, function () {
    return view(&#39;greeting&#39;, [&#39;name&#39; =&gt; &#39;Finn&#39;]);
});
</code></pre><p><a name="supercharging-blade-with-livewire"></a></p><h3 id="supercharging-blade-with-livewire" tabindex="-1"><a class="header-anchor" href="#supercharging-blade-with-livewire" aria-hidden="true">#</a> Supercharging Blade With Livewire</h3>`,9),m={href:"https://livewire.laravel.com",target:"_blank",rel:"noopener noreferrer"},v=a(`<p><a name="displaying-data"></a></p><h2 id="displaying-data" tabindex="-1"><a class="header-anchor" href="#displaying-data" aria-hidden="true">#</a> Displaying Data</h2><p>You may display data that is passed to your Blade views by wrapping the variable in curly braces. For example, given the following route:</p><pre><code>Route::get(&#39;/&#39;, function () {
    return view(&#39;welcome&#39;, [&#39;name&#39; =&gt; &#39;Samantha&#39;]);
});
</code></pre><p>You may display the contents of the <code>name</code> variable like so:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>Hello, {{ $name }}.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p><strong>Note</strong><br> Blade&#39;s <code>{{ }}</code> echo statements are automatically sent through PHP&#39;s <code>htmlspecialchars</code> function to prevent XSS attacks.</p></blockquote><p>You are not limited to displaying the contents of the variables passed to the view. You may also echo the results of any PHP function. In fact, you can put any PHP code you wish inside of a Blade echo statement:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>The current UNIX timestamp is {{ time() }}.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="html-entity-encoding"></a></p><h3 id="html-entity-encoding" tabindex="-1"><a class="header-anchor" href="#html-entity-encoding" aria-hidden="true">#</a> HTML Entity Encoding</h3><p>By default, Blade (and the Laravel <code>e</code> function) will double encode HTML entities. If you would like to disable double encoding, call the <code>Blade::withoutDoubleEncoding</code> method from the <code>boot</code> method of your <code>AppServiceProvider</code>:</p><pre><code>&lt;?php

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
</code></pre><p><a name="displaying-unescaped-data"></a></p><h4 id="displaying-unescaped-data" tabindex="-1"><a class="header-anchor" href="#displaying-unescaped-data" aria-hidden="true">#</a> Displaying Unescaped Data</h4><p>By default, Blade <code>{{ }}</code> statements are automatically sent through PHP&#39;s <code>htmlspecialchars</code> function to prevent XSS attacks. If you do not want your data to be escaped, you may use the following syntax:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>Hello, {!! $name !!}.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p><strong>Warning</strong><br> Be very careful when echoing content that is supplied by users of your application. You should typically use the escaped, double curly brace syntax to prevent XSS attacks when displaying user supplied data.</p></blockquote><p><a name="blade-and-javascript-frameworks"></a></p><h3 id="blade-javascript-frameworks" tabindex="-1"><a class="header-anchor" href="#blade-javascript-frameworks" aria-hidden="true">#</a> Blade &amp; JavaScript Frameworks</h3><p>Since many JavaScript frameworks also use &quot;curly&quot; braces to indicate a given expression should be displayed in the browser, you may use the <code>@</code> symbol to inform the Blade rendering engine an expression should remain untouched. For example:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;h1&gt;Laravel&lt;/h1&gt;

Hello, @{{ name }}.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In this example, the <code>@</code> symbol will be removed by Blade; however, <code>{{ name }}</code> expression will remain untouched by the Blade engine, allowing it to be rendered by your JavaScript framework.</p><p>The <code>@</code> symbol may also be used to escape Blade directives:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>{{-- Blade template --}}
@@if()

&lt;!-- HTML output --&gt;
@if()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="rendering-json"></a></p><h4 id="rendering-json" tabindex="-1"><a class="header-anchor" href="#rendering-json" aria-hidden="true">#</a> Rendering JSON</h4><p>Sometimes you may pass an array to your view with the intention of rendering it as JSON in order to initialize a JavaScript variable. For example:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;script&gt;
    var app = &lt;?php echo json_encode($array); ?&gt;;
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>However, instead of manually calling <code>json_encode</code>, you may use the <code>Illuminate\\Support\\Js::from</code> method directive. The <code>from</code> method accepts the same arguments as PHP&#39;s <code>json_encode</code> function; however, it will ensure that the resulting JSON is properly escaped for inclusion within HTML quotes. The <code>from</code> method will return a string <code>JSON.parse</code> JavaScript statement that will convert the given object or array into a valid JavaScript object:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;script&gt;
    var app = {{ Illuminate\\Support\\Js::from($array) }};
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The latest versions of the Laravel application skeleton include a <code>Js</code> facade, which provides convenient access to this functionality within your Blade templates:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;script&gt;
    var app = {{ Js::from($array) }};
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>Warning</strong><br> You should only use the <code>Js::from</code> method to render existing variables as JSON. The Blade templating is based on regular expressions and attempts to pass a complex expression to the directive may cause unexpected failures.</p></blockquote><p><a name="the-at-verbatim-directive"></a></p><h4 id="the-verbatim-directive" tabindex="-1"><a class="header-anchor" href="#the-verbatim-directive" aria-hidden="true">#</a> The <code>@verbatim</code> Directive</h4><p>If you are displaying JavaScript variables in a large portion of your template, you may wrap the HTML in the <code>@verbatim</code> directive so that you do not have to prefix each Blade echo statement with an <code>@</code> symbol:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@verbatim
    &lt;div class=&quot;container&quot;&gt;
        Hello, {{ name }}.
    &lt;/div&gt;
@endverbatim
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="blade-directives"></a></p><h2 id="blade-directives" tabindex="-1"><a class="header-anchor" href="#blade-directives" aria-hidden="true">#</a> Blade Directives</h2><p>In addition to template inheritance and displaying data, Blade also provides convenient shortcuts for common PHP control structures, such as conditional statements and loops. These shortcuts provide a very clean, terse way of working with PHP control structures while also remaining familiar to their PHP counterparts.</p><p><a name="if-statements"></a></p><h3 id="if-statements" tabindex="-1"><a class="header-anchor" href="#if-statements" aria-hidden="true">#</a> If Statements</h3><p>You may construct <code>if</code> statements using the <code>@if</code>, <code>@elseif</code>, <code>@else</code>, and <code>@endif</code> directives. These directives function identically to their PHP counterparts:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@if (count($records) === 1)
    I have one record!
@elseif (count($records) &gt; 1)
    I have multiple records!
@else
    I don&#39;t have any records!
@endif
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>For convenience, Blade also provides an <code>@unless</code> directive:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@unless (Auth::check())
    You are not signed in.
@endunless
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In addition to the conditional directives already discussed, the <code>@isset</code> and <code>@empty</code> directives may be used as convenient shortcuts for their respective PHP functions:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@isset($records)
    // $records is defined and is not null...
@endisset

@empty($records)
    // $records is &quot;empty&quot;...
@endempty
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="authentication-directives"></a></p><h4 id="authentication-directives" tabindex="-1"><a class="header-anchor" href="#authentication-directives" aria-hidden="true">#</a> Authentication Directives</h4><p>The <code>@auth</code> and <code>@guest</code> directives may be used to quickly determine if the current user is <a href="./authentication">authenticated</a> or is a guest:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@auth
    // The user is authenticated...
@endauth

@guest
    // The user is not authenticated...
@endguest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If needed, you may specify the authentication guard that should be checked when using the <code>@auth</code> and <code>@guest</code> directives:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@auth(&#39;admin&#39;)
    // The user is authenticated...
@endauth

@guest(&#39;admin&#39;)
    // The user is not authenticated...
@endguest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="environment-directives"></a></p><h4 id="environment-directives" tabindex="-1"><a class="header-anchor" href="#environment-directives" aria-hidden="true">#</a> Environment Directives</h4><p>You may check if the application is running in the production environment using the <code>@production</code> directive:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@production
    // Production specific content...
@endproduction
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Or, you may determine if the application is running in a specific environment using the <code>@env</code> directive:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@env(&#39;staging&#39;)
    // The application is running in &quot;staging&quot;...
@endenv

@env([&#39;staging&#39;, &#39;production&#39;])
    // The application is running in &quot;staging&quot; or &quot;production&quot;...
@endenv
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="section-directives"></a></p><h4 id="section-directives" tabindex="-1"><a class="header-anchor" href="#section-directives" aria-hidden="true">#</a> Section Directives</h4><p>You may determine if a template inheritance section has content using the <code>@hasSection</code> directive:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@hasSection(&#39;navigation&#39;)
    &lt;div class=&quot;pull-right&quot;&gt;
        @yield(&#39;navigation&#39;)
    &lt;/div&gt;

    &lt;div class=&quot;clearfix&quot;&gt;&lt;/div&gt;
@endif
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You may use the <code>sectionMissing</code> directive to determine if a section does not have content:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@sectionMissing(&#39;navigation&#39;)
    &lt;div class=&quot;pull-right&quot;&gt;
        @include(&#39;default-navigation&#39;)
    &lt;/div&gt;
@endif
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="switch-statements"></a></p><h3 id="switch-statements" tabindex="-1"><a class="header-anchor" href="#switch-statements" aria-hidden="true">#</a> Switch Statements</h3><p>Switch statements can be constructed using the <code>@switch</code>, <code>@case</code>, <code>@break</code>, <code>@default</code> and <code>@endswitch</code> directives:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@switch($i)
    @case(1)
        First case...
        @break

    @case(2)
        Second case...
        @break

    @default
        Default case...
@endswitch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="loops"></a></p><h3 id="loops" tabindex="-1"><a class="header-anchor" href="#loops" aria-hidden="true">#</a> Loops</h3><p>In addition to conditional statements, Blade provides simple directives for working with PHP&#39;s loop structures. Again, each of these directives functions identically to their PHP counterparts:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@for ($i = 0; $i &lt; 10; $i++)
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>Note</strong><br> While iterating through a <code>foreach</code> loop, you may use the <a href="#the-loop-variable">loop variable</a> to gain valuable information about the loop, such as whether you are in the first or last iteration through the loop.</p></blockquote><p>When using loops you may also skip the current iteration or end the loop using the <code>@continue</code> and <code>@break</code> directives:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@foreach ($users as $user)
    @if ($user-&gt;type == 1)
        @continue
    @endif

    &lt;li&gt;{{ $user-&gt;name }}&lt;/li&gt;

    @if ($user-&gt;number == 5)
        @break
    @endif
@endforeach
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You may also include the continuation or break condition within the directive declaration:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@foreach ($users as $user)
    @continue($user-&gt;type == 1)

    &lt;li&gt;{{ $user-&gt;name }}&lt;/li&gt;

    @break($user-&gt;number == 5)
@endforeach
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="the-loop-variable"></a></p><h3 id="the-loop-variable" tabindex="-1"><a class="header-anchor" href="#the-loop-variable" aria-hidden="true">#</a> The Loop Variable</h3><p>While iterating through a <code>foreach</code> loop, a <code>$loop</code> variable will be available inside of your loop. This variable provides access to some useful bits of information such as the current loop index and whether this is the first or last iteration through the loop:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@foreach ($users as $user)
    @if ($loop-&gt;first)
        This is the first iteration.
    @endif

    @if ($loop-&gt;last)
        This is the last iteration.
    @endif

    &lt;p&gt;This is user {{ $user-&gt;id }}&lt;/p&gt;
@endforeach
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If you are in a nested loop, you may access the parent loop&#39;s <code>$loop</code> variable via the <code>parent</code> property:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@foreach ($users as $user)
    @foreach ($user-&gt;posts as $post)
        @if ($loop-&gt;parent-&gt;first)
            This is the first iteration of the parent loop.
        @endif
    @endforeach
@endforeach
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The <code>$loop</code> variable also contains a variety of other useful properties:</p><table><thead><tr><th>Property</th><th>Description</th></tr></thead><tbody><tr><td><code>$loop-&gt;index</code></td><td>The index of the current loop iteration (starts at 0).</td></tr><tr><td><code>$loop-&gt;iteration</code></td><td>The current loop iteration (starts at 1).</td></tr><tr><td><code>$loop-&gt;remaining</code></td><td>The iterations remaining in the loop.</td></tr><tr><td><code>$loop-&gt;count</code></td><td>The total number of items in the array being iterated.</td></tr><tr><td><code>$loop-&gt;first</code></td><td>Whether this is the first iteration through the loop.</td></tr><tr><td><code>$loop-&gt;last</code></td><td>Whether this is the last iteration through the loop.</td></tr><tr><td><code>$loop-&gt;even</code></td><td>Whether this is an even iteration through the loop.</td></tr><tr><td><code>$loop-&gt;odd</code></td><td>Whether this is an odd iteration through the loop.</td></tr><tr><td><code>$loop-&gt;depth</code></td><td>The nesting level of the current loop.</td></tr><tr><td><code>$loop-&gt;parent</code></td><td>When in a nested loop, the parent&#39;s loop variable.</td></tr></tbody></table><p><a name="conditional-classes"></a></p><h3 id="conditional-classes-styles" tabindex="-1"><a class="header-anchor" href="#conditional-classes-styles" aria-hidden="true">#</a> Conditional Classes &amp; Styles</h3><p>The <code>@class</code> directive conditionally compiles a CSS class string. The directive accepts an array of classes where the array key contains the class or classes you wish to add, while the value is a boolean expression. If the array element has a numeric key, it will always be included in the rendered class list:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@php
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Likewise, the <code>@style</code> directive may be used to conditionally add inline CSS styles to an HTML element:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@php
    $isActive = true;
@endphp

&lt;span @style([
    &#39;background-color: red&#39;,
    &#39;font-weight: bold&#39; =&gt; $isActive,
])&gt;&lt;/span&gt;

&lt;span style=&quot;background-color: red; font-weight: bold;&quot;&gt;&lt;/span&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="additional-attributes"></a></p><h3 id="additional-attributes" tabindex="-1"><a class="header-anchor" href="#additional-attributes" aria-hidden="true">#</a> Additional Attributes</h3><p>For convenience, you may use the <code>@checked</code> directive to easily indicate if a given HTML checkbox input is &quot;checked&quot;. This directive will echo <code>checked</code> if the provided condition evaluates to <code>true</code>:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;input type=&quot;checkbox&quot;
        name=&quot;active&quot;
        value=&quot;active&quot;
        @checked(old(&#39;active&#39;, $user-&gt;active)) /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Likewise, the <code>@selected</code> directive may be used to indicate if a given select option should be &quot;selected&quot;:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;select name=&quot;version&quot;&gt;
    @foreach ($product-&gt;versions as $version)
        &lt;option value=&quot;{{ $version }}&quot; @selected(old(&#39;version&#39;) == $version)&gt;
            {{ $version }}
        &lt;/option&gt;
    @endforeach
&lt;/select&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Additionally, the <code>@disabled</code> directive may be used to indicate if a given element should be &quot;disabled&quot;:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;button type=&quot;submit&quot; @disabled($errors-&gt;isNotEmpty())&gt;Submit&lt;/button&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Moreover, the <code>@readonly</code> directive may be used to indicate if a given element should be &quot;readonly&quot;:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;input type=&quot;email&quot;
        name=&quot;email&quot;
        value=&quot;email@laravel.com&quot;
        @readonly($user-&gt;isNotAdmin()) /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In addition, the <code>@required</code> directive may be used to indicate if a given element should be &quot;required&quot;:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;input type=&quot;text&quot;
        name=&quot;title&quot;
        value=&quot;title&quot;
        @required($user-&gt;isAdmin()) /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="including-subviews"></a></p><h3 id="including-subviews" tabindex="-1"><a class="header-anchor" href="#including-subviews" aria-hidden="true">#</a> Including Subviews</h3><blockquote><p><strong>Note</strong><br> While you&#39;re free to use the <code>@include</code> directive, Blade <a href="#components">components</a> provide similar functionality and offer several benefits over the <code>@include</code> directive such as data and attribute binding.</p></blockquote><p>Blade&#39;s <code>@include</code> directive allows you to include a Blade view from within another view. All variables that are available to the parent view will be made available to the included view:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;div&gt;
    @include(&#39;shared.errors&#39;)

    &lt;form&gt;
        &lt;!-- Form Contents --&gt;
    &lt;/form&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Even though the included view will inherit all data available in the parent view, you may also pass an array of additional data that should be made available to the included view:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@include(&#39;view.name&#39;, [&#39;status&#39; =&gt; &#39;complete&#39;])
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>If you attempt to <code>@include</code> a view which does not exist, Laravel will throw an error. If you would like to include a view that may or may not be present, you should use the <code>@includeIf</code> directive:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@includeIf(&#39;view.name&#39;, [&#39;status&#39; =&gt; &#39;complete&#39;])
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>If you would like to <code>@include</code> a view if a given boolean expression evaluates to <code>true</code> or <code>false</code>, you may use the <code>@includeWhen</code> and <code>@includeUnless</code> directives:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@includeWhen($boolean, &#39;view.name&#39;, [&#39;status&#39; =&gt; &#39;complete&#39;])

@includeUnless($boolean, &#39;view.name&#39;, [&#39;status&#39; =&gt; &#39;complete&#39;])
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>To include the first view that exists from a given array of views, you may use the <code>includeFirst</code> directive:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@includeFirst([&#39;custom.admin&#39;, &#39;admin&#39;], [&#39;status&#39; =&gt; &#39;complete&#39;])
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p><strong>Warning</strong><br> You should avoid using the <code>__DIR__</code> and <code>__FILE__</code> constants in your Blade views, since they will refer to the location of the cached, compiled view.</p></blockquote><p><a name="rendering-views-for-collections"></a></p><h4 id="rendering-views-for-collections" tabindex="-1"><a class="header-anchor" href="#rendering-views-for-collections" aria-hidden="true">#</a> Rendering Views For Collections</h4><p>You may combine loops and includes into one line with Blade&#39;s <code>@each</code> directive:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@each(&#39;view.name&#39;, $jobs, &#39;job&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The <code>@each</code> directive&#39;s first argument is the view to render for each element in the array or collection. The second argument is the array or collection you wish to iterate over, while the third argument is the variable name that will be assigned to the current iteration within the view. So, for example, if you are iterating over an array of <code>jobs</code>, typically you will want to access each job as a <code>job</code> variable within the view. The array key for the current iteration will be available as the <code>key</code> variable within the view.</p><p>You may also pass a fourth argument to the <code>@each</code> directive. This argument determines the view that will be rendered if the given array is empty.</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@each(&#39;view.name&#39;, $jobs, &#39;job&#39;, &#39;view.empty&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p><strong>Warning</strong><br> Views rendered via <code>@each</code> do not inherit the variables from the parent view. If the child view requires these variables, you should use the <code>@foreach</code> and <code>@include</code> directives instead.</p></blockquote><p><a name="the-once-directive"></a></p><h3 id="the-once-directive" tabindex="-1"><a class="header-anchor" href="#the-once-directive" aria-hidden="true">#</a> The <code>@once</code> Directive</h3><p>The <code>@once</code> directive allows you to define a portion of the template that will only be evaluated once per rendering cycle. This may be useful for pushing a given piece of JavaScript into the page&#39;s header using <a href="#stacks">stacks</a>. For example, if you are rendering a given <a href="#components">component</a> within a loop, you may wish to only push the JavaScript to the header the first time the component is rendered:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@once
    @push(&#39;scripts&#39;)
        &lt;script&gt;
            // Your custom JavaScript...
        &lt;/script&gt;
    @endpush
@endonce
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Since the <code>@once</code> directive is often used in conjunction with the <code>@push</code> or <code>@prepend</code> directives, the <code>@pushOnce</code> and <code>@prependOnce</code> directives are available for your convenience:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@pushOnce(&#39;scripts&#39;)
    &lt;script&gt;
        // Your custom JavaScript...
    &lt;/script&gt;
@endPushOnce
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="raw-php"></a></p><h3 id="raw-php" tabindex="-1"><a class="header-anchor" href="#raw-php" aria-hidden="true">#</a> Raw PHP</h3><p>In some situations, it&#39;s useful to embed PHP code into your views. You can use the Blade <code>@php</code> directive to execute a block of plain PHP within your template:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@php
    $counter = 1;
@endphp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="comments"></a></p><h3 id="comments" tabindex="-1"><a class="header-anchor" href="#comments" aria-hidden="true">#</a> Comments</h3><p>Blade also allows you to define comments in your views. However, unlike HTML comments, Blade comments are not included in the HTML returned by your application:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>{{-- This comment will not be present in the rendered HTML --}}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="components"></a></p><h2 id="components" tabindex="-1"><a class="header-anchor" href="#components" aria-hidden="true">#</a> Components</h2><p>Components and slots provide similar benefits to sections, layouts, and includes; however, some may find the mental model of components and slots easier to understand. There are two approaches to writing components: class based components and anonymous components.</p><p>To create a class based component, you may use the <code>make:component</code> Artisan command. To illustrate how to use components, we will create a simple <code>Alert</code> component. The <code>make:component</code> command will place the component in the <code>app/View/Components</code> directory:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan make:component Alert
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The <code>make:component</code> command will also create a view template for the component. The view will be placed in the <code>resources/views/components</code> directory. When writing components for your own application, components are automatically discovered within the <code>app/View/Components</code> directory and <code>resources/views/components</code> directory, so no further component registration is typically required.</p><p>You may also create components within subdirectories:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan make:component Forms/Input
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The command above will create an <code>Input</code> component in the <code>app/View/Components/Forms</code> directory and the view will be placed in the <code>resources/views/components/forms</code> directory.</p><p>If you would like to create an anonymous component (a component with only a Blade template and no class), you may use the <code>--view</code> flag when invoking the <code>make:component</code> command:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan make:component forms.input <span class="token parameter variable">--view</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The command above will create a Blade file at <code>resources/views/components/forms/input.blade.php</code> which can be rendered as a component via <code>&lt;x-forms.input /&gt;</code>.</p><p><a name="manually-registering-package-components"></a></p><h4 id="manually-registering-package-components" tabindex="-1"><a class="header-anchor" href="#manually-registering-package-components" aria-hidden="true">#</a> Manually Registering Package Components</h4><p>When writing components for your own application, components are automatically discovered within the <code>app/View/Components</code> directory and <code>resources/views/components</code> directory.</p><p>However, if you are building a package that utilizes Blade components, you will need to manually register your component class and its HTML tag alias. You should typically register your components in the <code>boot</code> method of your package&#39;s service provider:</p><pre><code>use Illuminate\\Support\\Facades\\Blade;

/**
 * Bootstrap your package&#39;s services.
 */
public function boot(): void
{
    Blade::component(&#39;package-alert&#39;, Alert::class);
}
</code></pre><p>Once your component has been registered, it may be rendered using its tag alias:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;x-package-alert/&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Alternatively, you may use the <code>componentNamespace</code> method to autoload component classes by convention. For example, a <code>Nightshade</code> package might have <code>Calendar</code> and <code>ColorPicker</code> components that reside within the <code>Package\\Views\\Components</code> namespace:</p><pre><code>use Illuminate\\Support\\Facades\\Blade;

/**
 * Bootstrap your package&#39;s services.
 */
public function boot(): void
{
    Blade::componentNamespace(&#39;Nightshade\\\\Views\\\\Components&#39;, &#39;nightshade&#39;);
}
</code></pre><p>This will allow the usage of package components by their vendor namespace using the <code>package-name::</code> syntax:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;x-nightshade::calendar /&gt;
&lt;x-nightshade::color-picker /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Blade will automatically detect the class that&#39;s linked to this component by pascal-casing the component name. Subdirectories are also supported using &quot;dot&quot; notation.</p><p><a name="rendering-components"></a></p><h3 id="rendering-components" tabindex="-1"><a class="header-anchor" href="#rendering-components" aria-hidden="true">#</a> Rendering Components</h3><p>To display a component, you may use a Blade component tag within one of your Blade templates. Blade component tags start with the string <code>x-</code> followed by the kebab case name of the component class:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;x-alert/&gt;

&lt;x-user-profile/&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If the component class is nested deeper within the <code>app/View/Components</code> directory, you may use the <code>.</code> character to indicate directory nesting. For example, if we assume a component is located at <code>app/View/Components/Inputs/Button.php</code>, we may render it like so:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;x-inputs.button/&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>If you would like to conditionally render your component, you may define a <code>shouldRender</code> method on your component class. If the <code>shouldRender</code> method returns <code>false</code> the component will not be rendered:</p><pre><code>use Illuminate\\Support\\Str;

/**
 * Whether the component should be rendered
 */
public function shouldRender(): bool
{
    return Str::length($this-&gt;message) &gt; 0;
}
</code></pre><p><a name="passing-data-to-components"></a></p><h3 id="passing-data-to-components" tabindex="-1"><a class="header-anchor" href="#passing-data-to-components" aria-hidden="true">#</a> Passing Data To Components</h3><p>You may pass data to Blade components using HTML attributes. Hard-coded, primitive values may be passed to the component using simple HTML attribute strings. PHP expressions and variables should be passed to the component via attributes that use the <code>:</code> character as a prefix:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;x-alert type=&quot;error&quot; :message=&quot;$message&quot;/&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>You should define all of the component&#39;s data attributes in its class constructor. All public properties on a component will automatically be made available to the component&#39;s view. It is not necessary to pass the data to the view from the component&#39;s <code>render</code> method:</p><pre><code>&lt;?php

namespace App\\View\\Components;

use Illuminate\\View\\Component;
use Illuminate\\View\\View;

class Alert extends Component
{
    /**
     * Create the component instance.
     */
    public function __construct(
        public string $type,
        public string $message,
    ) {}

    /**
     * Get the view / contents that represent the component.
     */
    public function render(): View
    {
        return view(&#39;components.alert&#39;);
    }
}
</code></pre><p>When your component is rendered, you may display the contents of your component&#39;s public variables by echoing the variables by name:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;div class=&quot;alert alert-{{ $type }}&quot;&gt;
    {{ $message }}
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="casing"></a></p><h4 id="casing" tabindex="-1"><a class="header-anchor" href="#casing" aria-hidden="true">#</a> Casing</h4><p>Component constructor arguments should be specified using <code>camelCase</code>, while <code>kebab-case</code> should be used when referencing the argument names in your HTML attributes. For example, given the following component constructor:</p><pre><code>/**
 * Create the component instance.
 */
public function __construct(
    public string $alertType,
) {}
</code></pre><p>The <code>$alertType</code> argument may be provided to the component like so:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;x-alert alert-type=&quot;danger&quot; /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="short-attribute-syntax"></a></p><h4 id="short-attribute-syntax" tabindex="-1"><a class="header-anchor" href="#short-attribute-syntax" aria-hidden="true">#</a> Short Attribute Syntax</h4><p>When passing attributes to components, you may also use a &quot;short attribute&quot; syntax. This is often convenient since attribute names frequently match the variable names they correspond to:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>{{-- Short attribute syntax... --}}
&lt;x-profile :$userId :$name /&gt;

{{-- Is equivalent to... --}}
&lt;x-profile :user-id=&quot;$userId&quot; :name=&quot;$name&quot; /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="escaping-attribute-rendering"></a></p><h4 id="escaping-attribute-rendering" tabindex="-1"><a class="header-anchor" href="#escaping-attribute-rendering" aria-hidden="true">#</a> Escaping Attribute Rendering</h4><p>Since some JavaScript frameworks such as Alpine.js also use colon-prefixed attributes, you may use a double colon (<code>::</code>) prefix to inform Blade that the attribute is not a PHP expression. For example, given the following component:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;x-button ::class=&quot;{ danger: isDeleting }&quot;&gt;
    Submit
&lt;/x-button&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The following HTML will be rendered by Blade:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;button :class=&quot;{ danger: isDeleting }&quot;&gt;
    Submit
&lt;/button&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="component-methods"></a></p><h4 id="component-methods" tabindex="-1"><a class="header-anchor" href="#component-methods" aria-hidden="true">#</a> Component Methods</h4><p>In addition to public variables being available to your component template, any public methods on the component may be invoked. For example, imagine a component that has an <code>isSelected</code> method:</p><pre><code>/**
 * Determine if the given option is the currently selected option.
 */
public function isSelected(string $option): bool
{
    return $option === $this-&gt;selected;
}
</code></pre><p>You may execute this method from your component template by invoking the variable matching the name of the method:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;option {{ $isSelected($value) ? &#39;selected&#39; : &#39;&#39; }} value=&quot;{{ $value }}&quot;&gt;
    {{ $label }}
&lt;/option&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="using-attributes-slots-within-component-class"></a></p><h4 id="accessing-attributes-slots-within-component-classes" tabindex="-1"><a class="header-anchor" href="#accessing-attributes-slots-within-component-classes" aria-hidden="true">#</a> Accessing Attributes &amp; Slots Within Component Classes</h4><p>Blade components also allow you to access the component name, attributes, and slot inside the class&#39;s render method. However, in order to access this data, you should return a closure from your component&#39;s <code>render</code> method. The closure will receive a <code>$data</code> array as its only argument. This array will contain several elements that provide information about the component:</p><pre><code>use Closure;

/**
 * Get the view / contents that represent the component.
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
</code></pre><p>The <code>componentName</code> is equal to the name used in the HTML tag after the <code>x-</code> prefix. So <code>&lt;x-alert /&gt;</code>&#39;s <code>componentName</code> will be <code>alert</code>. The <code>attributes</code> element will contain all of the attributes that were present on the HTML tag. The <code>slot</code> element is an <code>Illuminate\\Support\\HtmlString</code> instance with the contents of the component&#39;s slot.</p><p>The closure should return a string. If the returned string corresponds to an existing view, that view will be rendered; otherwise, the returned string will be evaluated as an inline Blade view.</p><p><a name="additional-dependencies"></a></p><h4 id="additional-dependencies" tabindex="-1"><a class="header-anchor" href="#additional-dependencies" aria-hidden="true">#</a> Additional Dependencies</h4><p>If your component requires dependencies from Laravel&#39;s <a href="./container">service container</a>, you may list them before any of the component&#39;s data attributes and they will automatically be injected by the container:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Services<span class="token punctuation">\\</span>AlertCreator</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * Create the component instance.
 */</span>
<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">__construct</span><span class="token punctuation">(</span>
    <span class="token keyword">public</span> <span class="token class-name type-declaration">AlertCreator</span> <span class="token variable">$creator</span><span class="token punctuation">,</span>
    <span class="token keyword">public</span> <span class="token keyword type-declaration">string</span> <span class="token variable">$type</span><span class="token punctuation">,</span>
    <span class="token keyword">public</span> <span class="token keyword type-declaration">string</span> <span class="token variable">$message</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="hiding-attributes-and-methods"></a></p><h4 id="hiding-attributes-methods" tabindex="-1"><a class="header-anchor" href="#hiding-attributes-methods" aria-hidden="true">#</a> Hiding Attributes / Methods</h4><p>If you would like to prevent some public methods or properties from being exposed as variables to your component template, you may add them to an <code>$except</code> array property on your component:</p><pre><code>&lt;?php

namespace App\\View\\Components;

use Illuminate\\View\\Component;

class Alert extends Component
{
    /**
     * The properties / methods that should not be exposed to the component template.
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
</code></pre><p><a name="component-attributes"></a></p><h3 id="component-attributes" tabindex="-1"><a class="header-anchor" href="#component-attributes" aria-hidden="true">#</a> Component Attributes</h3><p>We&#39;ve already examined how to pass data attributes to a component; however, sometimes you may need to specify additional HTML attributes, such as <code>class</code>, that are not part of the data required for a component to function. Typically, you want to pass these additional attributes down to the root element of the component template. For example, imagine we want to render an <code>alert</code> component like so:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;x-alert type=&quot;error&quot; :message=&quot;$message&quot; class=&quot;mt-4&quot;/&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>All of the attributes that are not part of the component&#39;s constructor will automatically be added to the component&#39;s &quot;attribute bag&quot;. This attribute bag is automatically made available to the component via the <code>$attributes</code> variable. All of the attributes may be rendered within the component by echoing this variable:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;div {{ $attributes }}&gt;
    &lt;!-- Component content --&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>Warning</strong><br> Using directives such as <code>@env</code> within component tags is not supported at this time. For example, <code>&lt;x-alert :live=&quot;@env(&#39;production&#39;)&quot;/&gt;</code> will not be compiled.</p></blockquote><p><a name="default-merged-attributes"></a></p><h4 id="default-merged-attributes" tabindex="-1"><a class="header-anchor" href="#default-merged-attributes" aria-hidden="true">#</a> Default / Merged Attributes</h4><p>Sometimes you may need to specify default values for attributes or merge additional values into some of the component&#39;s attributes. To accomplish this, you may use the attribute bag&#39;s <code>merge</code> method. This method is particularly useful for defining a set of default CSS classes that should always be applied to a component:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;div {{ $attributes-&gt;merge([&#39;class&#39; =&gt; &#39;alert alert-&#39;.$type]) }}&gt;
    {{ $message }}
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If we assume this component is utilized like so:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;x-alert type=&quot;error&quot; :message=&quot;$message&quot; class=&quot;mb-4&quot;/&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The final, rendered HTML of the component will appear like the following:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;div class=&quot;alert alert-error mb-4&quot;&gt;
    &lt;!-- Contents of the $message variable --&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="conditionally-merge-classes"></a></p><h4 id="conditionally-merge-classes" tabindex="-1"><a class="header-anchor" href="#conditionally-merge-classes" aria-hidden="true">#</a> Conditionally Merge Classes</h4><p>Sometimes you may wish to merge classes if a given condition is <code>true</code>. You can accomplish this via the <code>class</code> method, which accepts an array of classes where the array key contains the class or classes you wish to add, while the value is a boolean expression. If the array element has a numeric key, it will always be included in the rendered class list:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;div {{ $attributes-&gt;class([&#39;p-4&#39;, &#39;bg-red&#39; =&gt; $hasError]) }}&gt;
    {{ $message }}
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If you need to merge other attributes onto your component, you can chain the <code>merge</code> method onto the <code>class</code> method:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;button {{ $attributes-&gt;class([&#39;p-4&#39;])-&gt;merge([&#39;type&#39; =&gt; &#39;button&#39;]) }}&gt;
    {{ $slot }}
&lt;/button&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>Note</strong><br> If you need to conditionally compile classes on other HTML elements that shouldn&#39;t receive merged attributes, you can use the <a href="#conditional-classes"><code>@class</code> directive</a>.</p></blockquote><p><a name="non-class-attribute-merging"></a></p><h4 id="non-class-attribute-merging" tabindex="-1"><a class="header-anchor" href="#non-class-attribute-merging" aria-hidden="true">#</a> Non-Class Attribute Merging</h4><p>When merging attributes that are not <code>class</code> attributes, the values provided to the <code>merge</code> method will be considered the &quot;default&quot; values of the attribute. However, unlike the <code>class</code> attribute, these attributes will not be merged with injected attribute values. Instead, they will be overwritten. For example, a <code>button</code> component&#39;s implementation may look like the following:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;button {{ $attributes-&gt;merge([&#39;type&#39; =&gt; &#39;button&#39;]) }}&gt;
    {{ $slot }}
&lt;/button&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>To render the button component with a custom <code>type</code>, it may be specified when consuming the component. If no type is specified, the <code>button</code> type will be used:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;x-button type=&quot;submit&quot;&gt;
    Submit
&lt;/x-button&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The rendered HTML of the <code>button</code> component in this example would be:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;button type=&quot;submit&quot;&gt;
    Submit
&lt;/button&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If you would like an attribute other than <code>class</code> to have its default value and injected values joined together, you may use the <code>prepends</code> method. In this example, the <code>data-controller</code> attribute will always begin with <code>profile-controller</code> and any additional injected <code>data-controller</code> values will be placed after this default value:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;div {{ $attributes-&gt;merge([&#39;data-controller&#39; =&gt; $attributes-&gt;prepends(&#39;profile-controller&#39;)]) }}&gt;
    {{ $slot }}
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="filtering-attributes"></a></p><h4 id="retrieving-filtering-attributes" tabindex="-1"><a class="header-anchor" href="#retrieving-filtering-attributes" aria-hidden="true">#</a> Retrieving &amp; Filtering Attributes</h4><p>You may filter attributes using the <code>filter</code> method. This method accepts a closure which should return <code>true</code> if you wish to retain the attribute in the attribute bag:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>{{ $attributes-&gt;filter(fn (string $value, string $key) =&gt; $key == &#39;foo&#39;) }}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>For convenience, you may use the <code>whereStartsWith</code> method to retrieve all attributes whose keys begin with a given string:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>{{ $attributes-&gt;whereStartsWith(&#39;wire:model&#39;) }}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Conversely, the <code>whereDoesntStartWith</code> method may be used to exclude all attributes whose keys begin with a given string:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>{{ $attributes-&gt;whereDoesntStartWith(&#39;wire:model&#39;) }}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Using the <code>first</code> method, you may render the first attribute in a given attribute bag:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>{{ $attributes-&gt;whereStartsWith(&#39;wire:model&#39;)-&gt;first() }}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>If you would like to check if an attribute is present on the component, you may use the <code>has</code> method. This method accepts the attribute name as its only argument and returns a boolean indicating whether or not the attribute is present:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@if ($attributes-&gt;has(&#39;class&#39;))
    &lt;div&gt;Class attribute is present&lt;/div&gt;
@endif
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If an array is passed to the <code>has</code> method, the method will determine if all of the given attributes are present on the component:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@if ($attributes-&gt;has([&#39;name&#39;, &#39;class&#39;]))
    &lt;div&gt;All of the attributes are present&lt;/div&gt;
@endif
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The <code>hasAny</code> method may be used to determine if any of the given attributes are present on the component:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@if ($attributes-&gt;hasAny([&#39;href&#39;, &#39;:href&#39;, &#39;v-bind:href&#39;]))
    &lt;div&gt;One of the attributes is present&lt;/div&gt;
@endif
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You may retrieve a specific attribute&#39;s value using the <code>get</code> method:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>{{ $attributes-&gt;get(&#39;class&#39;) }}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="reserved-keywords"></a></p><h3 id="reserved-keywords" tabindex="-1"><a class="header-anchor" href="#reserved-keywords" aria-hidden="true">#</a> Reserved Keywords</h3><p>By default, some keywords are reserved for Blade&#39;s internal use in order to render components. The following keywords cannot be defined as public properties or method names within your components:</p>`,271),h=e("div",{class:"content-list",markdown:"1"},[e("ul",null,[e("li",null,[e("code",null,"data")]),e("li",null,[e("code",null,"render")]),e("li",null,[e("code",null,"resolveView")]),e("li",null,[e("code",null,"shouldRender")]),e("li",null,[e("code",null,"view")]),e("li",null,[e("code",null,"withAttributes")]),e("li",null,[e("code",null,"withName")])])],-1),b=a(`<p><a name="slots"></a></p><h3 id="slots" tabindex="-1"><a class="header-anchor" href="#slots" aria-hidden="true">#</a> Slots</h3><p>You will often need to pass additional content to your component via &quot;slots&quot;. Component slots are rendered by echoing the <code>$slot</code> variable. To explore this concept, let&#39;s imagine that an <code>alert</code> component has the following markup:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;!-- /resources/views/components/alert.blade.php --&gt;

&lt;div class=&quot;alert alert-danger&quot;&gt;
    {{ $slot }}
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>We may pass content to the <code>slot</code> by injecting content into the component:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;x-alert&gt;
    &lt;strong&gt;Whoops!&lt;/strong&gt; Something went wrong!
&lt;/x-alert&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Sometimes a component may need to render multiple different slots in different locations within the component. Let&#39;s modify our alert component to allow for the injection of a &quot;title&quot; slot:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;!-- /resources/views/components/alert.blade.php --&gt;

&lt;span class=&quot;alert-title&quot;&gt;{{ $title }}&lt;/span&gt;

&lt;div class=&quot;alert alert-danger&quot;&gt;
    {{ $slot }}
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You may define the content of the named slot using the <code>x-slot</code> tag. Any content not within an explicit <code>x-slot</code> tag will be passed to the component in the <code>$slot</code> variable:</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>x-alert</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">x-slot:</span>title</span><span class="token punctuation">&gt;</span></span>
        Server Error
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>x-slot</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>strong</span><span class="token punctuation">&gt;</span></span>Whoops!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>strong</span><span class="token punctuation">&gt;</span></span> Something went wrong!
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>x-alert</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="scoped-slots"></a></p><h4 id="scoped-slots" tabindex="-1"><a class="header-anchor" href="#scoped-slots" aria-hidden="true">#</a> Scoped Slots</h4><p>If you have used a JavaScript framework such as Vue, you may be familiar with &quot;scoped slots&quot;, which allow you to access data or methods from the component within your slot. You may achieve similar behavior in Laravel by defining public methods or properties on your component and accessing the component within your slot via the <code>$component</code> variable. In this example, we will assume that the <code>x-alert</code> component has a public <code>formatAlert</code> method defined on its component class:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;x-alert&gt;
    &lt;x-slot:title&gt;
        {{ $component-&gt;formatAlert(&#39;Server Error&#39;) }}
    &lt;/x-slot&gt;

    &lt;strong&gt;Whoops!&lt;/strong&gt; Something went wrong!
&lt;/x-alert&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="slot-attributes"></a></p><h4 id="slot-attributes" tabindex="-1"><a class="header-anchor" href="#slot-attributes" aria-hidden="true">#</a> Slot Attributes</h4><p>Like Blade components, you may assign additional <a href="#component-attributes">attributes</a> to slots such as CSS class names:</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>x-card</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>shadow-sm<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">x-slot:</span>heading</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>font-bold<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        Heading
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>x-slot</span><span class="token punctuation">&gt;</span></span>

    Content

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">x-slot:</span>footer</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text-sm<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        Footer
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>x-slot</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>x-card</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>To interact with slot attributes, you may access the <code>attributes</code> property of the slot&#39;s variable. For more information on how to interact with attributes, please consult the documentation on <a href="#component-attributes">component attributes</a>:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@props([
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="inline-component-views"></a></p><h3 id="inline-component-views" tabindex="-1"><a class="header-anchor" href="#inline-component-views" aria-hidden="true">#</a> Inline Component Views</h3><p>For very small components, it may feel cumbersome to manage both the component class and the component&#39;s view template. For this reason, you may return the component&#39;s markup directly from the <code>render</code> method:</p>`,23),g=a(`<p><a name="generating-inline-view-components"></a></p><h4 id="generating-inline-view-components" tabindex="-1"><a class="header-anchor" href="#generating-inline-view-components" aria-hidden="true">#</a> Generating Inline View Components</h4><p>To create a component that renders an inline view, you may use the <code>inline</code> option when executing the <code>make:component</code> command:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan make:component Alert <span class="token parameter variable">--inline</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="dynamic-components"></a></p><h3 id="dynamic-components" tabindex="-1"><a class="header-anchor" href="#dynamic-components" aria-hidden="true">#</a> Dynamic Components</h3><p>Sometimes you may need to render a component but not know which component should be rendered until runtime. In this situation, you may use Laravel&#39;s built-in <code>dynamic-component</code> component to render the component based on a runtime value or variable:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>// $componentName = &quot;secondary-button&quot;;

&lt;x-dynamic-component :component=&quot;$componentName&quot; class=&quot;mt-4&quot; /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="manually-registering-components"></a></p><h3 id="manually-registering-components" tabindex="-1"><a class="header-anchor" href="#manually-registering-components" aria-hidden="true">#</a> Manually Registering Components</h3><blockquote><p><strong>Warning</strong><br> The following documentation on manually registering components is primarily applicable to those who are writing Laravel packages that include view components. If you are not writing a package, this portion of the component documentation may not be relevant to you.</p></blockquote><p>When writing components for your own application, components are automatically discovered within the <code>app/View/Components</code> directory and <code>resources/views/components</code> directory.</p><p>However, if you are building a package that utilizes Blade components or placing components in non-conventional directories, you will need to manually register your component class and its HTML tag alias so that Laravel knows where to find the component. You should typically register your components in the <code>boot</code> method of your package&#39;s service provider:</p><pre><code>use Illuminate\\Support\\Facades\\Blade;
use VendorPackage\\View\\Components\\AlertComponent;

/**
 * Bootstrap your package&#39;s services.
 */
public function boot(): void
{
    Blade::component(&#39;package-alert&#39;, AlertComponent::class);
}
</code></pre><p>Once your component has been registered, it may be rendered using its tag alias:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;x-package-alert/&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="autoloading-package-components" tabindex="-1"><a class="header-anchor" href="#autoloading-package-components" aria-hidden="true">#</a> Autoloading Package Components</h4><p>Alternatively, you may use the <code>componentNamespace</code> method to autoload component classes by convention. For example, a <code>Nightshade</code> package might have <code>Calendar</code> and <code>ColorPicker</code> components that reside within the <code>Package\\Views\\Components</code> namespace:</p><pre><code>use Illuminate\\Support\\Facades\\Blade;

/**
 * Bootstrap your package&#39;s services.
 */
public function boot(): void
{
    Blade::componentNamespace(&#39;Nightshade\\\\Views\\\\Components&#39;, &#39;nightshade&#39;);
}
</code></pre><p>This will allow the usage of package components by their vendor namespace using the <code>package-name::</code> syntax:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;x-nightshade::calendar /&gt;
&lt;x-nightshade::color-picker /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Blade will automatically detect the class that&#39;s linked to this component by pascal-casing the component name. Subdirectories are also supported using &quot;dot&quot; notation.</p><p><a name="anonymous-components"></a></p><h2 id="anonymous-components" tabindex="-1"><a class="header-anchor" href="#anonymous-components" aria-hidden="true">#</a> Anonymous Components</h2><p>Similar to inline components, anonymous components provide a mechanism for managing a component via a single file. However, anonymous components utilize a single view file and have no associated class. To define an anonymous component, you only need to place a Blade template within your <code>resources/views/components</code> directory. For example, assuming you have defined a component at <code>resources/views/components/alert.blade.php</code>, you may simply render it like so:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;x-alert/&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>You may use the <code>.</code> character to indicate if a component is nested deeper inside the <code>components</code> directory. For example, assuming the component is defined at <code>resources/views/components/inputs/button.blade.php</code>, you may render it like so:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;x-inputs.button/&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="anonymous-index-components"></a></p><h3 id="anonymous-index-components" tabindex="-1"><a class="header-anchor" href="#anonymous-index-components" aria-hidden="true">#</a> Anonymous Index Components</h3><p>Sometimes, when a component is made up of many Blade templates, you may wish to group the given component&#39;s templates within a single directory. For example, imagine an &quot;accordion&quot; component with the following directory structure:</p><div class="language-none line-numbers-mode" data-ext="none"><pre class="language-none"><code>/resources/views/components/accordion.blade.php
/resources/views/components/accordion/item.blade.php
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>This directory structure allows you to render the accordion component and its item like so:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;x-accordion&gt;
    &lt;x-accordion.item&gt;
        ...
    &lt;/x-accordion.item&gt;
&lt;/x-accordion&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>However, in order to render the accordion component via <code>x-accordion</code>, we were forced to place the &quot;index&quot; accordion component template in the <code>resources/views/components</code> directory instead of nesting it within the <code>accordion</code> directory with the other accordion related templates.</p><p>Thankfully, Blade allows you to place an <code>index.blade.php</code> file within a component&#39;s template directory. When an <code>index.blade.php</code> template exists for the component, it will be rendered as the &quot;root&quot; node of the component. So, we can continue to use the same Blade syntax given in the example above; however, we will adjust our directory structure like so:</p><div class="language-none line-numbers-mode" data-ext="none"><pre class="language-none"><code>/resources/views/components/accordion/index.blade.php
/resources/views/components/accordion/item.blade.php
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="data-properties-attributes"></a></p><h3 id="data-properties-attributes" tabindex="-1"><a class="header-anchor" href="#data-properties-attributes" aria-hidden="true">#</a> Data Properties / Attributes</h3><p>Since anonymous components do not have any associated class, you may wonder how you may differentiate which data should be passed to the component as variables and which attributes should be placed in the component&#39;s <a href="#component-attributes">attribute bag</a>.</p><p>You may specify which attributes should be considered data variables using the <code>@props</code> directive at the top of your component&#39;s Blade template. All other attributes on the component will be available via the component&#39;s attribute bag. If you wish to give a data variable a default value, you may specify the variable&#39;s name as the array key and the default value as the array value:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;!-- /resources/views/components/alert.blade.php --&gt;

@props([&#39;type&#39; =&gt; &#39;info&#39;, &#39;message&#39;])

&lt;div {{ $attributes-&gt;merge([&#39;class&#39; =&gt; &#39;alert alert-&#39;.$type]) }}&gt;
    {{ $message }}
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Given the component definition above, we may render the component like so:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;x-alert type=&quot;error&quot; :message=&quot;$message&quot; class=&quot;mb-4&quot;/&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="accessing-parent-data"></a></p><h3 id="accessing-parent-data" tabindex="-1"><a class="header-anchor" href="#accessing-parent-data" aria-hidden="true">#</a> Accessing Parent Data</h3><p>Sometimes you may want to access data from a parent component inside a child component. In these cases, you may use the <code>@aware</code> directive. For example, imagine we are building a complex menu component consisting of a parent <code>&lt;x-menu&gt;</code> and child <code>&lt;x-menu.item&gt;</code>:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;x-menu color=&quot;purple&quot;&gt;
    &lt;x-menu.item&gt;...&lt;/x-menu.item&gt;
    &lt;x-menu.item&gt;...&lt;/x-menu.item&gt;
&lt;/x-menu&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The <code>&lt;x-menu&gt;</code> component may have an implementation like the following:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;!-- /resources/views/components/menu/index.blade.php --&gt;

@props([&#39;color&#39; =&gt; &#39;gray&#39;])

&lt;ul {{ $attributes-&gt;merge([&#39;class&#39; =&gt; &#39;bg-&#39;.$color.&#39;-200&#39;]) }}&gt;
    {{ $slot }}
&lt;/ul&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Because the <code>color</code> prop was only passed into the parent (<code>&lt;x-menu&gt;</code>), it won&#39;t be available inside <code>&lt;x-menu.item&gt;</code>. However, if we use the <code>@aware</code> directive, we can make it available inside <code>&lt;x-menu.item&gt;</code> as well:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;!-- /resources/views/components/menu/item.blade.php --&gt;

@aware([&#39;color&#39; =&gt; &#39;gray&#39;])

&lt;li {{ $attributes-&gt;merge([&#39;class&#39; =&gt; &#39;text-&#39;.$color.&#39;-800&#39;]) }}&gt;
    {{ $slot }}
&lt;/li&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>Warning</strong><br> The <code>@aware</code> directive can not access parent data that is not explicitly passed to the parent component via HTML attributes. Default <code>@props</code> values that are not explicitly passed to the parent component can not be accessed by the <code>@aware</code> directive.</p></blockquote><p><a name="anonymous-component-paths"></a></p><h3 id="anonymous-component-paths" tabindex="-1"><a class="header-anchor" href="#anonymous-component-paths" aria-hidden="true">#</a> Anonymous Component Paths</h3><p>As previously discussed, anonymous components are typically defined by placing a Blade template within your <code>resources/views/components</code> directory. However, you may occasionally want to register other anonymous component paths with Laravel in addition to the default path.</p><p>The <code>anonymousComponentPath</code> method accepts the &quot;path&quot; to the anonymous component location as its first argument and an optional &quot;namespace&quot; that components should be placed under as its second argument. Typically, this method should be called from the <code>boot</code> method of one of your application&#39;s <a href="./providers">service providers</a>:</p><pre><code>/**
 * Bootstrap any application services.
 */
public function boot(): void
{
    Blade::anonymousComponentPath(__DIR__.&#39;/../components&#39;);
}
</code></pre><p>When component paths are registered without a specified prefix as in the example above, they may be rendered in your Blade components without a corresponding prefix as well. For example, if a <code>panel.blade.php</code> component exists in the path registered above, it may be rendered like so:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;x-panel /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Prefix &quot;namespaces&quot; may be provided as the second argument to the <code>anonymousComponentPath</code> method:</p><pre><code>Blade::anonymousComponentPath(__DIR__.&#39;/../components&#39;, &#39;dashboard&#39;);
</code></pre><p>When a prefix is provided, components within that &quot;namespace&quot; may be rendered by prefixing to the component&#39;s namespace to the component name when the component is rendered:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;x-dashboard::panel /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="building-layouts"></a></p><h2 id="building-layouts" tabindex="-1"><a class="header-anchor" href="#building-layouts" aria-hidden="true">#</a> Building Layouts</h2><p><a name="layouts-using-components"></a></p><h3 id="layouts-using-components" tabindex="-1"><a class="header-anchor" href="#layouts-using-components" aria-hidden="true">#</a> Layouts Using Components</h3><p>Most web applications maintain the same general layout across various pages. It would be incredibly cumbersome and hard to maintain our application if we had to repeat the entire layout HTML in every view we create. Thankfully, it&#39;s convenient to define this layout as a single <a href="#components">Blade component</a> and then use it throughout our application.</p><p><a name="defining-the-layout-component"></a></p><h4 id="defining-the-layout-component" tabindex="-1"><a class="header-anchor" href="#defining-the-layout-component" aria-hidden="true">#</a> Defining The Layout Component</h4><p>For example, imagine we are building a &quot;todo&quot; list application. We might define a <code>layout</code> component that looks like the following:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;!-- resources/views/components/layout.blade.php --&gt;

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="applying-the-layout-component"></a></p><h4 id="applying-the-layout-component" tabindex="-1"><a class="header-anchor" href="#applying-the-layout-component" aria-hidden="true">#</a> Applying The Layout Component</h4><p>Once the <code>layout</code> component has been defined, we may create a Blade view that utilizes the component. In this example, we will define a simple view that displays our task list:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;!-- resources/views/tasks.blade.php --&gt;

&lt;x-layout&gt;
    @foreach ($tasks as $task)
        {{ $task }}
    @endforeach
&lt;/x-layout&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Remember, content that is injected into a component will be supplied to the default <code>$slot</code> variable within our <code>layout</code> component. As you may have noticed, our <code>layout</code> also respects a <code>$title</code> slot if one is provided; otherwise, a default title is shown. We may inject a custom title from our task list view using the standard slot syntax discussed in the <a href="#components">component documentation</a>:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;!-- resources/views/tasks.blade.php --&gt;

&lt;x-layout&gt;
    &lt;x-slot:title&gt;
        Custom Title
    &lt;/x-slot&gt;

    @foreach ($tasks as $task)
        {{ $task }}
    @endforeach
&lt;/x-layout&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Now that we have defined our layout and task list views, we just need to return the <code>task</code> view from a route:</p><pre><code>use App\\Models\\Task;

Route::get(&#39;/tasks&#39;, function () {
    return view(&#39;tasks&#39;, [&#39;tasks&#39; =&gt; Task::all()]);
});
</code></pre><p><a name="layouts-using-template-inheritance"></a></p><h3 id="layouts-using-template-inheritance" tabindex="-1"><a class="header-anchor" href="#layouts-using-template-inheritance" aria-hidden="true">#</a> Layouts Using Template Inheritance</h3><p><a name="defining-a-layout"></a></p><h4 id="defining-a-layout" tabindex="-1"><a class="header-anchor" href="#defining-a-layout" aria-hidden="true">#</a> Defining A Layout</h4><p>Layouts may also be created via &quot;template inheritance&quot;. This was the primary way of building applications prior to the introduction of <a href="#components">components</a>.</p><p>To get started, let&#39;s take a look at a simple example. First, we will examine a page layout. Since most web applications maintain the same general layout across various pages, it&#39;s convenient to define this layout as a single Blade view:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;!-- resources/views/layouts/app.blade.php --&gt;

&lt;html&gt;
    &lt;head&gt;
        &lt;title&gt;App Name - @yield(&#39;title&#39;)&lt;/title&gt;
    &lt;/head&gt;
    &lt;body&gt;
        @section(&#39;sidebar&#39;)
            This is the master sidebar.
        @show

        &lt;div class=&quot;container&quot;&gt;
            @yield(&#39;content&#39;)
        &lt;/div&gt;
    &lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>As you can see, this file contains typical HTML mark-up. However, take note of the <code>@section</code> and <code>@yield</code> directives. The <code>@section</code> directive, as the name implies, defines a section of content, while the <code>@yield</code> directive is used to display the contents of a given section.</p><p>Now that we have defined a layout for our application, let&#39;s define a child page that inherits the layout.</p><p><a name="extending-a-layout"></a></p><h4 id="extending-a-layout" tabindex="-1"><a class="header-anchor" href="#extending-a-layout" aria-hidden="true">#</a> Extending A Layout</h4><p>When defining a child view, use the <code>@extends</code> Blade directive to specify which layout the child view should &quot;inherit&quot;. Views which extend a Blade layout may inject content into the layout&#39;s sections using <code>@section</code> directives. Remember, as seen in the example above, the contents of these sections will be displayed in the layout using <code>@yield</code>:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;!-- resources/views/child.blade.php --&gt;

@extends(&#39;layouts.app&#39;)

@section(&#39;title&#39;, &#39;Page Title&#39;)

@section(&#39;sidebar&#39;)
    @@parent

    &lt;p&gt;This is appended to the master sidebar.&lt;/p&gt;
@endsection

@section(&#39;content&#39;)
    &lt;p&gt;This is my body content.&lt;/p&gt;
@endsection
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In this example, the <code>sidebar</code> section is utilizing the <code>@@parent</code> directive to append (rather than overwriting) content to the layout&#39;s sidebar. The <code>@@parent</code> directive will be replaced by the content of the layout when the view is rendered.</p><blockquote><p><strong>Note</strong><br> Contrary to the previous example, this <code>sidebar</code> section ends with <code>@endsection</code> instead of <code>@show</code>. The <code>@endsection</code> directive will only define a section while <code>@show</code> will define and <strong>immediately yield</strong> the section.</p></blockquote><p>The <code>@yield</code> directive also accepts a default value as its second parameter. This value will be rendered if the section being yielded is undefined:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@yield(&#39;content&#39;, &#39;Default content&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="forms"></a></p><h2 id="forms" tabindex="-1"><a class="header-anchor" href="#forms" aria-hidden="true">#</a> Forms</h2><p><a name="csrf-field"></a></p><h3 id="csrf-field" tabindex="-1"><a class="header-anchor" href="#csrf-field" aria-hidden="true">#</a> CSRF Field</h3><p>Anytime you define an HTML form in your application, you should include a hidden CSRF token field in the form so that <a href="./csrf">the CSRF protection</a> middleware can validate the request. You may use the <code>@csrf</code> Blade directive to generate the token field:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;form method=&quot;POST&quot; action=&quot;/profile&quot;&gt;
    @csrf

    ...
&lt;/form&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="method-field"></a></p><h3 id="method-field" tabindex="-1"><a class="header-anchor" href="#method-field" aria-hidden="true">#</a> Method Field</h3><p>Since HTML forms can&#39;t make <code>PUT</code>, <code>PATCH</code>, or <code>DELETE</code> requests, you will need to add a hidden <code>_method</code> field to spoof these HTTP verbs. The <code>@method</code> Blade directive can create this field for you:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;form action=&quot;/foo/bar&quot; method=&quot;POST&quot;&gt;
    @method(&#39;PUT&#39;)

    ...
&lt;/form&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="validation-errors"></a></p><h3 id="validation-errors" tabindex="-1"><a class="header-anchor" href="#validation-errors" aria-hidden="true">#</a> Validation Errors</h3><p>The <code>@error</code> directive may be used to quickly check if <a href="./validation#quick-displaying-the-validation-errors">validation error messages</a> exist for a given attribute. Within an <code>@error</code> directive, you may echo the <code>$message</code> variable to display the error message:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;!-- /resources/views/post/create.blade.php --&gt;

&lt;label for=&quot;title&quot;&gt;Post Title&lt;/label&gt;

&lt;input id=&quot;title&quot;
    type=&quot;text&quot;
    class=&quot;@error(&#39;title&#39;) is-invalid @enderror&quot;&gt;

@error(&#39;title&#39;)
    &lt;div class=&quot;alert alert-danger&quot;&gt;{{ $message }}&lt;/div&gt;
@enderror
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Since the <code>@error</code> directive compiles to an &quot;if&quot; statement, you may use the <code>@else</code> directive to render content when there is not an error for an attribute:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;!-- /resources/views/auth.blade.php --&gt;

&lt;label for=&quot;email&quot;&gt;Email address&lt;/label&gt;

&lt;input id=&quot;email&quot;
    type=&quot;email&quot;
    class=&quot;@error(&#39;email&#39;) is-invalid @else is-valid @enderror&quot;&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You may pass <a href="./validation#named-error-bags">the name of a specific error bag</a> as the second parameter to the <code>@error</code> directive to retrieve validation error messages on pages containing multiple forms:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;!-- /resources/views/auth.blade.php --&gt;

&lt;label for=&quot;email&quot;&gt;Email address&lt;/label&gt;

&lt;input id=&quot;email&quot;
    type=&quot;email&quot;
    class=&quot;@error(&#39;email&#39;, &#39;login&#39;) is-invalid @enderror&quot;&gt;

@error(&#39;email&#39;, &#39;login&#39;)
    &lt;div class=&quot;alert alert-danger&quot;&gt;{{ $message }}&lt;/div&gt;
@enderror
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="stacks"></a></p><h2 id="stacks" tabindex="-1"><a class="header-anchor" href="#stacks" aria-hidden="true">#</a> Stacks</h2><p>Blade allows you to push to named stacks which can be rendered somewhere else in another view or layout. This can be particularly useful for specifying any JavaScript libraries required by your child views:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@push(&#39;scripts&#39;)
    &lt;script src=&quot;/example.js&quot;&gt;&lt;/script&gt;
@endpush
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If you would like to <code>@push</code> content if a given boolean expression evaluates to <code>true</code>, you may use the <code>@pushIf</code> directive:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@pushIf($shouldPush, &#39;scripts&#39;)
    &lt;script src=&quot;/example.js&quot;&gt;&lt;/script&gt;
@endPushIf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You may push to a stack as many times as needed. To render the complete stack contents, pass the name of the stack to the <code>@stack</code> directive:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;head&gt;
    &lt;!-- Head Contents --&gt;

    @stack(&#39;scripts&#39;)
&lt;/head&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If you would like to prepend content onto the beginning of a stack, you should use the <code>@prepend</code> directive:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@push(&#39;scripts&#39;)
    This will be second...
@endpush

// Later...

@prepend(&#39;scripts&#39;)
    This will be first...
@endprepend
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="service-injection"></a></p><h2 id="service-injection" tabindex="-1"><a class="header-anchor" href="#service-injection" aria-hidden="true">#</a> Service Injection</h2><p>The <code>@inject</code> directive may be used to retrieve a service from the Laravel <a href="./container">service container</a>. The first argument passed to <code>@inject</code> is the name of the variable the service will be placed into, while the second argument is the class or interface name of the service you wish to resolve:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@inject(&#39;metrics&#39;, &#39;App\\Services\\MetricsService&#39;)

&lt;div&gt;
    Monthly Revenue: {{ $metrics-&gt;monthlyRevenue() }}.
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="rendering-inline-blade-templates"></a></p><h2 id="rendering-inline-blade-templates" tabindex="-1"><a class="header-anchor" href="#rendering-inline-blade-templates" aria-hidden="true">#</a> Rendering Inline Blade Templates</h2><p>Sometimes you may need to transform a raw Blade template string into valid HTML. You may accomplish this using the <code>render</code> method provided by the <code>Blade</code> facade. The <code>render</code> method accepts the Blade template string and an optional array of data to provide to the template:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Support<span class="token punctuation">\\</span>Facades<span class="token punctuation">\\</span>Blade</span><span class="token punctuation">;</span>

<span class="token keyword">return</span> <span class="token class-name static-context">Blade</span><span class="token operator">::</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Hello, {{ $name }}&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;name&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;Julian Bashir&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Laravel renders inline Blade templates by writing them to the <code>storage/framework/views</code> directory. If you would like Laravel to remove these temporary files after rendering the Blade template, you may provide the <code>deleteCachedView</code> argument to the method:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">return</span> <span class="token class-name static-context">Blade</span><span class="token operator">::</span><span class="token function">render</span><span class="token punctuation">(</span>
    <span class="token string single-quoted-string">&#39;Hello, {{ $name }}&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;name&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;Julian Bashir&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token argument-name">deleteCachedView</span><span class="token punctuation">:</span> <span class="token constant boolean">true</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="rendering-blade-fragments"></a></p><h2 id="rendering-blade-fragments" tabindex="-1"><a class="header-anchor" href="#rendering-blade-fragments" aria-hidden="true">#</a> Rendering Blade Fragments</h2>`,138),y={href:"https://turbo.hotwired.dev/",target:"_blank",rel:"noopener noreferrer"},f={href:"https://htmx.org/",target:"_blank",rel:"noopener noreferrer"},w=e("code",null,"@fragment",-1),k=e("code",null,"@endfragment",-1),x=a(`<div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@fragment(&#39;user-list&#39;)
    &lt;ul&gt;
        @foreach ($users as $user)
            &lt;li&gt;{{ $user-&gt;name }}&lt;/li&gt;
        @endforeach
    &lt;/ul&gt;
@endfragment
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then, when rendering the view that utilizes this template, you may invoke the <code>fragment</code> method to specify that only the specified fragment should be included in the outgoing HTTP response:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">return</span> <span class="token function">view</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;dashboard&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;users&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$users</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">fragment</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;user-list&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The <code>fragmentIf</code> method allows you to conditionally return a fragment of a view based on a given condition. Otherwise, the entire view will be returned:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">return</span> <span class="token function">view</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;dashboard&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;users&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$users</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">fragmentIf</span><span class="token punctuation">(</span><span class="token variable">$request</span><span class="token operator">-&gt;</span><span class="token function">hasHeader</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;HX-Request&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;user-list&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>The <code>fragments</code> and <code>fragmentsIf</code> methods allow you to return multiple view fragments in the response. The fragments will be concatenated together:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token function">view</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;dashboard&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;users&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$users</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">fragments</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;user-list&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;comment-list&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">view</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;dashboard&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;users&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$users</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">fragmentsIf</span><span class="token punctuation">(</span>
        <span class="token variable">$request</span><span class="token operator">-&gt;</span><span class="token function">hasHeader</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;HX-Request&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;user-list&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;comment-list&#39;</span><span class="token punctuation">]</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="extending-blade"></a></p><h2 id="extending-blade" tabindex="-1"><a class="header-anchor" href="#extending-blade" aria-hidden="true">#</a> Extending Blade</h2><p>Blade allows you to define your own custom directives using the <code>directive</code> method. When the Blade compiler encounters the custom directive, it will call the provided callback with the expression that the directive contains.</p><p>The following example creates a <code>@datetime($var)</code> directive which formats a given <code>$var</code>, which should be an instance of <code>DateTime</code>:</p><pre><code>&lt;?php

namespace App\\Providers;

use Illuminate\\Support\\Facades\\Blade;
use Illuminate\\Support\\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
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
</code></pre><p>As you can see, we will chain the <code>format</code> method onto whatever expression is passed into the directive. So, in this example, the final PHP generated by this directive will be:</p><pre><code>&lt;?php echo ($var)-&gt;format(&#39;m/d/Y H:i&#39;); ?&gt;
</code></pre><blockquote><p><strong>Warning</strong><br> After updating the logic of a Blade directive, you will need to delete all of the cached Blade views. The cached Blade views may be removed using the <code>view:clear</code> Artisan command.</p></blockquote><p><a name="custom-echo-handlers"></a></p><h3 id="custom-echo-handlers" tabindex="-1"><a class="header-anchor" href="#custom-echo-handlers" aria-hidden="true">#</a> Custom Echo Handlers</h3>`,17),q=e("code",null,"__toString",-1),$={href:"https://www.php.net/manual/en/language.oop5.magic.php#object.tostring",target:"_blank",rel:"noopener noreferrer"},T=e("code",null,"__toString",-1),S=e("code",null,"__toString",-1),B=a(`<p>In these cases, Blade allows you to register a custom echo handler for that particular type of object. To accomplish this, you should invoke Blade&#39;s <code>stringable</code> method. The <code>stringable</code> method accepts a closure. This closure should type-hint the type of object that it is responsible for rendering. Typically, the <code>stringable</code> method should be invoked within the <code>boot</code> method of your application&#39;s <code>AppServiceProvider</code> class:</p><pre><code>use Illuminate\\Support\\Facades\\Blade;
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
</code></pre><p>Once your custom echo handler has been defined, you may simply echo the object in your Blade template:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>Cost: {{ $money }}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="custom-if-statements"></a></p><h3 id="custom-if-statements" tabindex="-1"><a class="header-anchor" href="#custom-if-statements" aria-hidden="true">#</a> Custom If Statements</h3><p>Programming a custom directive is sometimes more complex than necessary when defining simple, custom conditional statements. For that reason, Blade provides a <code>Blade::if</code> method which allows you to quickly define custom conditional directives using closures. For example, let&#39;s define a custom conditional that checks the configured default &quot;disk&quot; for the application. We may do this in the <code>boot</code> method of our <code>AppServiceProvider</code>:</p><pre><code>use Illuminate\\Support\\Facades\\Blade;

/**
 * Bootstrap any application services.
 */
public function boot(): void
{
    Blade::if(&#39;disk&#39;, function (string $value) {
        return config(&#39;filesystems.default&#39;) === $value;
    });
}
</code></pre><p>Once the custom conditional has been defined, you can use it within your templates:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@disk(&#39;local&#39;)
    &lt;!-- The application is using the local disk... --&gt;
@elsedisk(&#39;s3&#39;)
    &lt;!-- The application is using the s3 disk... --&gt;
@else
    &lt;!-- The application is using some other disk... --&gt;
@enddisk

@unlessdisk(&#39;local&#39;)
    &lt;!-- The application is not using the local disk... --&gt;
@enddisk
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10);function I(s,C){const i=o("ExternalLinkIcon");return l(),r("div",null,[p,e("p",null,[n("Want to take your Blade templates to the next level and build dynamic interfaces with ease? Check out "),e("a",m,[n("Laravel Livewire"),t(i)]),n(". Livewire allows you to write Blade components that are augmented with dynamic functionality that would typically only be possible via frontend frameworks like React or Vue, providing a great approach to building modern, reactive frontends without the complexities, client-side rendering, or build steps of many JavaScript frameworks.")]),v,h,b,e("pre",null,[e("code",null,`/**
 * Get the view / contents that represent the component.
 */
public function render(): string
{
    return <<<'blade'
        <div class="alert alert-danger">
            `+c(s.$slot)+`
        </div>
    blade;
}
`,1)]),g,e("p",null,[n("When using frontend frameworks such as "),e("a",y,[n("Turbo"),t(i)]),n(" and "),e("a",f,[n("htmx"),t(i)]),n(', you may occasionally need to only return a portion of a Blade template within your HTTP response. Blade "fragments" allow you to do just that. To get started, place a portion of your Blade template within '),w,n(" and "),k,n(" directives:")]),x,e("p",null,[n(`If you attempt to "echo" an object using Blade, the object's `),q,n(" method will be invoked. The "),e("a",$,[T,t(i)]),n(` method is one of PHP's built-in "magic methods". However, sometimes you may not have control over the `),S,n(" method of a given class, such as when the class that you are interacting with belongs to a third-party library.")]),B])}const H=d(u,[["render",I],["__file","blade.html.vue"]]);export{H as default};
