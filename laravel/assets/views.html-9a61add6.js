import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as n,o as s,c as d,b as a,d as e,e as o,a as t}from"./app-8cdff07c.js";const c={},l=t(`<h1 id="views" tabindex="-1"><a class="header-anchor" href="#views" aria-hidden="true">#</a> Views</h1><ul><li><a href="#introduction">Introduction</a><ul><li><a href="#writing-views-in-react-or-vue">Writing Views In React / Vue</a></li></ul></li><li><a href="#creating-and-rendering-views">Creating &amp; Rendering Views</a><ul><li><a href="#nested-view-directories">Nested View Directories</a></li><li><a href="#creating-the-first-available-view">Creating The First Available View</a></li><li><a href="#determining-if-a-view-exists">Determining If A View Exists</a></li></ul></li><li><a href="#passing-data-to-views">Passing Data To Views</a><ul><li><a href="#sharing-data-with-all-views">Sharing Data With All Views</a></li></ul></li><li><a href="#view-composers">View Composers</a><ul><li><a href="#view-creators">View Creators</a></li></ul></li><li><a href="#optimizing-views">Optimizing Views</a></li></ul><p><a name="introduction"></a></p><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p>Of course, it&#39;s not practical to return entire HTML documents strings directly from your routes and controllers. Thankfully, views provide a convenient way to place all of our HTML in separate files.</p><p>Views separate your controller / application logic from your presentation logic and are stored in the <code>resources/views</code> directory. When using Laravel, view templates are usually written using the <a href="./blade">Blade templating language</a>. A simple view might look something like this:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;!-- View stored in resources/views/greeting.blade.php --&gt;

&lt;html&gt;
    &lt;body&gt;
        &lt;h1&gt;Hello, {{ $name }}&lt;/h1&gt;
    &lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Since this view is stored at <code>resources/views/greeting.blade.php</code>, we may return it using the global <code>view</code> helper like so:</p><pre><code>Route::get(&#39;/&#39;, function () {
    return view(&#39;greeting&#39;, [&#39;name&#39; =&gt; &#39;James&#39;]);
});
</code></pre><blockquote><p><strong>Note</strong><br> Looking for more information on how to write Blade templates? Check out the full <a href="./blade">Blade documentation</a> to get started.</p></blockquote><p><a name="writing-views-in-react-or-vue"></a></p><h3 id="writing-views-in-react-vue" tabindex="-1"><a class="header-anchor" href="#writing-views-in-react-vue" aria-hidden="true">#</a> Writing Views In React / Vue</h3>`,12),p={href:"https://inertiajs.com/",target:"_blank",rel:"noopener noreferrer"},h=a("a",{href:"./starter-kits"},"starter kits",-1),u={href:"https://bootcamp.laravel.com",target:"_blank",rel:"noopener noreferrer"},m=t(`<p><a name="creating-and-rendering-views"></a></p><h2 id="creating-rendering-views" tabindex="-1"><a class="header-anchor" href="#creating-rendering-views" aria-hidden="true">#</a> Creating &amp; Rendering Views</h2><p>You may create a view by placing a file with the <code>.blade.php</code> extension in your application&#39;s <code>resources/views</code> directory or by using the <code>make:view</code> Artisan command:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan make:view greeting
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The <code>.blade.php</code> extension informs the framework that the file contains a <a href="./blade">Blade template</a>. Blade templates contain HTML as well as Blade directives that allow you to easily echo values, create &quot;if&quot; statements, iterate over data, and more.</p><p>Once you have created a view, you may return it from one of your application&#39;s routes or controllers using the global <code>view</code> helper:</p><pre><code>Route::get(&#39;/&#39;, function () {
    return view(&#39;greeting&#39;, [&#39;name&#39; =&gt; &#39;James&#39;]);
});
</code></pre><p>Views may also be returned using the <code>View</code> facade:</p><pre><code>use Illuminate\\Support\\Facades\\View;

return View::make(&#39;greeting&#39;, [&#39;name&#39; =&gt; &#39;James&#39;]);
</code></pre><p>As you can see, the first argument passed to the <code>view</code> helper corresponds to the name of the view file in the <code>resources/views</code> directory. The second argument is an array of data that should be made available to the view. In this case, we are passing the <code>name</code> variable, which is displayed in the view using <a href="./blade">Blade syntax</a>.</p><p><a name="nested-view-directories"></a></p><h3 id="nested-view-directories" tabindex="-1"><a class="header-anchor" href="#nested-view-directories" aria-hidden="true">#</a> Nested View Directories</h3><p>Views may also be nested within subdirectories of the <code>resources/views</code> directory. &quot;Dot&quot; notation may be used to reference nested views. For example, if your view is stored at <code>resources/views/admin/profile.blade.php</code>, you may return it from one of your application&#39;s routes / controllers like so:</p><pre><code>return view(&#39;admin.profile&#39;, $data);
</code></pre><blockquote><p><strong>Warning</strong><br> View directory names should not contain the <code>.</code> character.</p></blockquote><p><a name="creating-the-first-available-view"></a></p><h3 id="creating-the-first-available-view" tabindex="-1"><a class="header-anchor" href="#creating-the-first-available-view" aria-hidden="true">#</a> Creating The First Available View</h3><p>Using the <code>View</code> facade&#39;s <code>first</code> method, you may create the first view that exists in a given array of views. This may be useful if your application or package allows views to be customized or overwritten:</p><pre><code>use Illuminate\\Support\\Facades\\View;

return View::first([&#39;custom.admin&#39;, &#39;admin&#39;], $data);
</code></pre><p><a name="determining-if-a-view-exists"></a></p><h3 id="determining-if-a-view-exists" tabindex="-1"><a class="header-anchor" href="#determining-if-a-view-exists" aria-hidden="true">#</a> Determining If A View Exists</h3><p>If you need to determine if a view exists, you may use the <code>View</code> facade. The <code>exists</code> method will return <code>true</code> if the view exists:</p><pre><code>use Illuminate\\Support\\Facades\\View;

if (View::exists(&#39;emails.customer&#39;)) {
    // ...
}
</code></pre><p><a name="passing-data-to-views"></a></p><h2 id="passing-data-to-views" tabindex="-1"><a class="header-anchor" href="#passing-data-to-views" aria-hidden="true">#</a> Passing Data To Views</h2><p>As you saw in the previous examples, you may pass an array of data to views to make that data available to the view:</p><pre><code>return view(&#39;greetings&#39;, [&#39;name&#39; =&gt; &#39;Victoria&#39;]);
</code></pre><p>When passing information in this manner, the data should be an array with key / value pairs. After providing data to a view, you can then access each value within your view using the data&#39;s keys, such as <code>&lt;?php echo $name; ?&gt;</code>.</p><p>As an alternative to passing a complete array of data to the <code>view</code> helper function, you may use the <code>with</code> method to add individual pieces of data to the view. The <code>with</code> method returns an instance of the view object so that you can continue chaining methods before returning the view:</p><pre><code>return view(&#39;greeting&#39;)
            -&gt;with(&#39;name&#39;, &#39;Victoria&#39;)
            -&gt;with(&#39;occupation&#39;, &#39;Astronaut&#39;);
</code></pre><p><a name="sharing-data-with-all-views"></a></p><h3 id="sharing-data-with-all-views" tabindex="-1"><a class="header-anchor" href="#sharing-data-with-all-views" aria-hidden="true">#</a> Sharing Data With All Views</h3><p>Occasionally, you may need to share data with all views that are rendered by your application. You may do so using the <code>View</code> facade&#39;s <code>share</code> method. Typically, you should place calls to the <code>share</code> method within a service provider&#39;s <code>boot</code> method. You are free to add them to the <code>App\\Providers\\AppServiceProvider</code> class or generate a separate service provider to house them:</p><pre><code>&lt;?php

namespace App\\Providers;

use Illuminate\\Support\\Facades\\View;

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
        View::share(&#39;key&#39;, &#39;value&#39;);
    }
}
</code></pre><p><a name="view-composers"></a></p><h2 id="view-composers" tabindex="-1"><a class="header-anchor" href="#view-composers" aria-hidden="true">#</a> View Composers</h2><p>View composers are callbacks or class methods that are called when a view is rendered. If you have data that you want to be bound to a view each time that view is rendered, a view composer can help you organize that logic into a single location. View composers may prove particularly useful if the same view is returned by multiple routes or controllers within your application and always needs a particular piece of data.</p><p>Typically, view composers will be registered within one of your application&#39;s <a href="./providers">service providers</a>. In this example, we&#39;ll assume that we have created a new <code>App\\Providers\\ViewServiceProvider</code> to house this logic.</p><p>We&#39;ll use the <code>View</code> facade&#39;s <code>composer</code> method to register the view composer. Laravel does not include a default directory for class based view composers, so you are free to organize them however you wish. For example, you could create an <code>app/View/Composers</code> directory to house all of your application&#39;s view composers:</p><pre><code>&lt;?php

namespace App\\Providers;

use App\\View\\Composers\\ProfileComposer;
use Illuminate\\Support\\Facades;
use Illuminate\\Support\\ServiceProvider;
use Illuminate\\View\\View;

class ViewServiceProvider extends ServiceProvider
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
        // Using class based composers...
        Facades\\View::composer(&#39;profile&#39;, ProfileComposer::class);

        // Using closure based composers...
        Facades\\View::composer(&#39;welcome&#39;, function (View $view) {
            // ...
        });

        Facades\\View::composer(&#39;dashboard&#39;, function (View $view) {
            // ...
        });
    }
}
</code></pre><blockquote><p><strong>Warning</strong><br> Remember, if you create a new service provider to contain your view composer registrations, you will need to add the service provider to the <code>providers</code> array in the <code>config/app.php</code> configuration file.</p></blockquote><p>Now that we have registered the composer, the <code>compose</code> method of the <code>App\\View\\Composers\\ProfileComposer</code> class will be executed each time the <code>profile</code> view is being rendered. Let&#39;s take a look at an example of the composer class:</p><pre><code>&lt;?php

namespace App\\View\\Composers;

use App\\Repositories\\UserRepository;
use Illuminate\\View\\View;

class ProfileComposer
{
    /**
     * Create a new profile composer.
     */
    public function __construct(
        protected UserRepository $users,
    ) {}

    /**
     * Bind data to the view.
     */
    public function compose(View $view): void
    {
        $view-&gt;with(&#39;count&#39;, $this-&gt;users-&gt;count());
    }
}
</code></pre><p>As you can see, all view composers are resolved via the <a href="./container">service container</a>, so you may type-hint any dependencies you need within a composer&#39;s constructor.</p><p><a name="attaching-a-composer-to-multiple-views"></a></p><h4 id="attaching-a-composer-to-multiple-views" tabindex="-1"><a class="header-anchor" href="#attaching-a-composer-to-multiple-views" aria-hidden="true">#</a> Attaching A Composer To Multiple Views</h4><p>You may attach a view composer to multiple views at once by passing an array of views as the first argument to the <code>composer</code> method:</p><pre><code>use App\\Views\\Composers\\MultiComposer;
use Illuminate\\Support\\Facades\\View;

View::composer(
    [&#39;profile&#39;, &#39;dashboard&#39;],
    MultiComposer::class
);
</code></pre><p>The <code>composer</code> method also accepts the <code>*</code> character as a wildcard, allowing you to attach a composer to all views:</p><pre><code>use Illuminate\\Support\\Facades;
use Illuminate\\View\\View;

Facades\\View::composer(&#39;*&#39;, function (View $view) {
    // ...
});
</code></pre><p><a name="view-creators"></a></p><h3 id="view-creators" tabindex="-1"><a class="header-anchor" href="#view-creators" aria-hidden="true">#</a> View Creators</h3><p>View &quot;creators&quot; are very similar to view composers; however, they are executed immediately after the view is instantiated instead of waiting until the view is about to render. To register a view creator, use the <code>creator</code> method:</p><pre><code>use App\\View\\Creators\\ProfileCreator;
use Illuminate\\Support\\Facades\\View;

View::creator(&#39;profile&#39;, ProfileCreator::class);
</code></pre><p><a name="optimizing-views"></a></p><h2 id="optimizing-views" tabindex="-1"><a class="header-anchor" href="#optimizing-views" aria-hidden="true">#</a> Optimizing Views</h2><p>By default, Blade template views are compiled on demand. When a request is executed that renders a view, Laravel will determine if a compiled version of the view exists. If the file exists, Laravel will then determine if the uncompiled view has been modified more recently than the compiled view. If the compiled view either does not exist, or the uncompiled view has been modified, Laravel will recompile the view.</p><p>Compiling views during the request may have a small negative impact on performance, so Laravel provides the <code>view:cache</code> Artisan command to precompile all of the views utilized by your application. For increased performance, you may wish to run this command as part of your deployment process:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan view:cache
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>You may use the <code>view:clear</code> command to clear the view cache:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan view:clear
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,61);function v(w,g){const i=n("ExternalLinkIcon");return s(),d("div",null,[l,a("p",null,[e("Instead of writing their frontend templates in PHP via Blade, many developers have begun to prefer to write their templates using React or Vue. Laravel makes this painless thanks to "),a("a",p,[e("Inertia"),o(i)]),e(", a library that makes it a cinch to tie your React / Vue frontend to your Laravel backend without the typical complexities of building an SPA.")]),a("p",null,[e("Our Breeze and Jetstream "),h,e(" give you a great starting point for your next Laravel application powered by Inertia. In addition, the "),a("a",u,[e("Laravel Bootcamp"),o(i)]),e(" provides a full demonstration of building a Laravel application powered by Inertia, including examples in Vue and React.")]),m])}const b=r(c,[["render",v],["__file","views.html.vue"]]);export{b as default};
