import{_ as o}from"./217328439-d8d983ec-d0fc-4cde-93d9-ae5bccf5df14-57c73a9f.js";import{_ as i}from"./horizon-example-7829a532.js";import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as l,c,b as e,d as a,e as s,a as t}from"./app-06635a3b.js";const d={},u=t('<h1 id="release-notes" tabindex="-1"><a class="header-anchor" href="#release-notes" aria-hidden="true">#</a> Release Notes</h1><ul><li><a href="#versioning-scheme">Versioning Scheme</a></li><li><a href="#support-policy">Support Policy</a></li><li><a href="#laravel-10">Laravel 10</a></li></ul><p><a name="versioning-scheme"></a></p><h2 id="versioning-scheme" tabindex="-1"><a class="header-anchor" href="#versioning-scheme" aria-hidden="true">#</a> Versioning Scheme</h2>',4),h={href:"https://semver.org",target:"_blank",rel:"noopener noreferrer"},m=e("strong",null,"never",-1),v=e("p",null,[a("When referencing the Laravel framework or its components from your application or package, you should always use a version constraint such as "),e("code",null,"^10.0"),a(", since major releases of Laravel do include breaking changes. However, we strive to always ensure you may update to a new major release in one day or less.")],-1),k=e("p",null,[e("a",{name:"named-arguments"})],-1),g=e("h4",{id:"named-arguments",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#named-arguments","aria-hidden":"true"},"#"),a(" Named Arguments")],-1),b={href:"https://www.php.net/manual/en/functions.arguments.php#functions.named-arguments",target:"_blank",rel:"noopener noreferrer"},f=t('<p><a name="support-policy"></a></p><h2 id="support-policy" tabindex="-1"><a class="header-anchor" href="#support-policy" aria-hidden="true">#</a> Support Policy</h2><p>For all Laravel releases, bug fixes are provided for 18 months and security fixes are provided for 2 years. For all additional libraries, including Lumen, only the latest major release receives bug fixes. In addition, please review the database versions <a href="./database#introduction">supported by Laravel</a>.</p><div class="overflow-auto"><table><thead><tr><th>Version</th><th>PHP (*)</th><th>Release</th><th>Bug Fixes Until</th><th>Security Fixes Until</th></tr></thead><tbody><tr><td>8</td><td>7.3 - 8.1</td><td>September 8th, 2020</td><td>July 26th, 2022</td><td>January 24th, 2023</td></tr><tr><td>9</td><td>8.0 - 8.2</td><td>February 8th, 2022</td><td>August 8th, 2023</td><td>February 6th, 2024</td></tr><tr><td>10</td><td>8.1 - 8.2</td><td>February 14th, 2023</td><td>August 6th, 2024</td><td>February 4th, 2025</td></tr><tr><td>11</td><td>8.2</td><td>Q1 2024</td><td>August 5th, 2025</td><td>February 3rd, 2026</td></tr></tbody></table></div><div class="version-colors"><div class="end-of-life"><div class="color-box"></div><div>End of life</div></div><div class="security-fixes"><div class="color-box"></div><div>Security fixes only</div></div></div><p>(*) Supported PHP versions</p><p><a name="laravel-10"></a></p><h2 id="laravel-10" tabindex="-1"><a class="header-anchor" href="#laravel-10" aria-hidden="true">#</a> Laravel 10</h2><p>As you may know, Laravel transitioned to yearly releases with the release of Laravel 8. Previously, major versions were released every 6 months. This transition is intended to ease the maintenance burden on the community and challenge our development team to ship amazing, powerful new features without introducing breaking changes. Therefore, we have shipped a variety of robust features to Laravel 9 without breaking backwards compatibility.</p><p>Therefore, this commitment to ship great new features during the current release will likely lead to future &quot;major&quot; releases being primarily used for &quot;maintenance&quot; tasks such as upgrading upstream dependencies, which can be seen in these release notes.</p><p>Laravel 10 continues the improvements made in Laravel 9.x by introducing argument and return types to all application skeleton methods, as well as all stub files used to generate classes throughout the framework. In addition, a new, developer-friendly abstraction layer has been introduced for starting and interacting with external processes. Further, Laravel Pennant has been introduced to provide a wonderful approach to managing your application&#39;s &quot;feature flags&quot;.</p><p><a name="php-8"></a></p><h3 id="php-8-1" tabindex="-1"><a class="header-anchor" href="#php-8-1" aria-hidden="true">#</a> PHP 8.1</h3><p>Laravel 10.x requires a minimum PHP version of 8.1.</p><p><a name="types"></a></p><h3 id="types" tabindex="-1"><a class="header-anchor" href="#types" aria-hidden="true">#</a> Types</h3>',16),y={href:"https://github.com/nunomaduro",target:"_blank",rel:"noopener noreferrer"},w=e("p",null,"On its initial release, Laravel utilized all of the type-hinting features available in PHP at the time. However, many new features have been added to PHP in the subsequent years, including additional primitive type-hints, return types, and union types.",-1),_=e("p",null,'Laravel 10.x thoroughly updates the application skeleton and all stubs utilized by the framework to introduce argument and return types to all method signatures. In addition, extraneous "doc block" type-hint information has been deleted.',-1),x=e("p",null,"This change is entirely backwards compatible with existing applications. Therefore, existing applications that do not have these type-hints will continue to function normally.",-1),P=e("p",null,[e("a",{name:"laravel-pennant"})],-1),L=e("h3",{id:"laravel-pennant",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#laravel-pennant","aria-hidden":"true"},"#"),a(" Laravel Pennant")],-1),F={href:"https://github.com/timacdonald",target:"_blank",rel:"noopener noreferrer"},T=t(`<p>A new first-party package, Laravel Pennant, has been released. Laravel Pennant offers a light-weight, streamlined approach to managing your application&#39;s feature flags. Out of the box, Pennant includes an in-memory <code>array</code> driver and a <code>database</code> driver for persistent feature storage.</p><p>Features can be easily defined via the <code>Feature::define</code> method:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">Laravel<span class="token punctuation">\\</span>Pennant<span class="token punctuation">\\</span>Feature</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Support<span class="token punctuation">\\</span>Lottery</span><span class="token punctuation">;</span>

<span class="token class-name static-context">Feature</span><span class="token operator">::</span><span class="token function">define</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;new-onboarding-flow&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name static-context">Lottery</span><span class="token operator">::</span><span class="token function">odds</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Once a feature has been defined, you may easily determine if the current user has access to the given feature:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name static-context">Feature</span><span class="token operator">::</span><span class="token function">active</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;new-onboarding-flow&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Of course, for convenience, Blade directives are also available:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@feature(&#39;new-onboarding-flow&#39;)
    &lt;div&gt;
        &lt;!-- ... --&gt;
    &lt;/div&gt;
@endfeature
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Pennant offers a variety of more advanced features and APIs. For more information, please consult the <a href="./pennant">comprehensive Pennant documentation</a>.</p><p><a name="process"></a></p><h3 id="process-interaction" tabindex="-1"><a class="header-anchor" href="#process-interaction" aria-hidden="true">#</a> Process Interaction</h3>`,10),q={href:"https://github.com/nunomaduro",target:"_blank",rel:"noopener noreferrer"},I={href:"https://github.com/taylorotwell",target:"_blank",rel:"noopener noreferrer"},S=t(`<p>Laravel 10.x introduces a beautiful abstraction layer for starting and interacting with external processes via a new <code>Process</code> facade:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Support<span class="token punctuation">\\</span>Facades<span class="token punctuation">\\</span>Process</span><span class="token punctuation">;</span>

<span class="token variable">$result</span> <span class="token operator">=</span> <span class="token class-name static-context">Process</span><span class="token operator">::</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;ls -la&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">return</span> <span class="token variable">$result</span><span class="token operator">-&gt;</span><span class="token function">output</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Processes may even be started in pools, allowing for the convenient execution and management of concurrent processes:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Process<span class="token punctuation">\\</span>Pool</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Support<span class="token punctuation">\\</span>Facades<span class="token punctuation">\\</span>Process</span><span class="token punctuation">;</span>

<span class="token punctuation">[</span><span class="token variable">$first</span><span class="token punctuation">,</span> <span class="token variable">$second</span><span class="token punctuation">,</span> <span class="token variable">$third</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token class-name static-context">Process</span><span class="token operator">::</span><span class="token function">concurrently</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">Pool</span> <span class="token variable">$pool</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token variable">$pool</span><span class="token operator">-&gt;</span><span class="token function">command</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;cat first.txt&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token variable">$pool</span><span class="token operator">-&gt;</span><span class="token function">command</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;cat second.txt&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token variable">$pool</span><span class="token operator">-&gt;</span><span class="token function">command</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;cat third.txt&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">return</span> <span class="token variable">$first</span><span class="token operator">-&gt;</span><span class="token function">output</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In addition, processes may be faked for convenient testing:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token class-name static-context">Process</span><span class="token operator">::</span><span class="token function">fake</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// ...</span>

<span class="token class-name static-context">Process</span><span class="token operator">::</span><span class="token function">assertRan</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;ls -la&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>For more information on interacting with processes, please consult the <a href="./processes">comprehensive process documentation</a>.</p><p><a name="test-profiling"></a></p><h3 id="test-profiling" tabindex="-1"><a class="header-anchor" href="#test-profiling" aria-hidden="true">#</a> Test Profiling</h3>`,9),N={href:"https://github.com/nunomaduro",target:"_blank",rel:"noopener noreferrer"},A=t(`<p>The Artisan <code>test</code> command has received a new <code>--profile</code> option that allows you to easily identify the slowest tests in your application:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan <span class="token builtin class-name">test</span> <span class="token parameter variable">--profile</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>For convenience, the slowest tests will be displayed directly within the CLI output:</p><p align="center"><img width="100%" src="`+o+`"></p><p><a name="pest-scaffolding"></a></p><h3 id="pest-scaffolding" tabindex="-1"><a class="header-anchor" href="#pest-scaffolding" aria-hidden="true">#</a> Pest Scaffolding</h3><p>New Laravel projects may now be created with Pest test scaffolding by default. To opt-in to this feature, provide the <code>--pest</code> flag when creating a new application via the Laravel installer:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>laravel new example-application <span class="token parameter variable">--pest</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="generator-cli-prompts"></a></p><h3 id="generator-cli-prompts" tabindex="-1"><a class="header-anchor" href="#generator-cli-prompts" aria-hidden="true">#</a> Generator CLI Prompts</h3>`,10),H={href:"https://github.com/jessarcher",target:"_blank",rel:"noopener noreferrer"},$=t(`<p>To improve the framework&#39;s developer experience, all of Laravel&#39;s built-in <code>make</code> commands no longer require any input. If the commands are invoked without input, you will be prompted for the required arguments:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan make:controller
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="horizon-telescope-facelift"></a></p><h3 id="horizon-telescope-facelift" tabindex="-1"><a class="header-anchor" href="#horizon-telescope-facelift" aria-hidden="true">#</a> Horizon / Telescope Facelift</h3><p><a href="./horizon">Horizon</a> and <a href="./telescope">Telescope</a> have been updated with a fresh, modern look including improved typography, spacing, and design:</p><img src="`+i+'">',6);function z(j,V){const n=p("ExternalLinkIcon");return l(),c("div",null,[u,e("p",null,[a("Laravel and its other first-party packages follow "),e("a",h,[a("Semantic Versioning"),s(n)]),a(". Major framework releases are released every year (~Q1), while minor and patch releases may be released as often as every week. Minor and patch releases should "),m,a(" contain breaking changes.")]),v,k,g,e("p",null,[e("a",b,[a("Named arguments"),s(n)]),a(" are not covered by Laravel's backwards compatibility guidelines. We may choose to rename function arguments when necessary in order to improve the Laravel codebase. Therefore, using named arguments when calling Laravel methods should be done cautiously and with the understanding that the parameter names may change in the future.")]),f,e("p",null,[e("em",null,[a("Application skeleton and stub type-hints were contributed by "),e("a",y,[a("Nuno Maduro"),s(n)])]),a(".")]),w,_,x,P,L,e("p",null,[e("em",null,[a("Laravel Pennant was developed by "),e("a",F,[a("Tim MacDonald"),s(n)])]),a(".")]),T,e("p",null,[e("em",null,[a("The process abstraction layer was contributed by "),e("a",q,[a("Nuno Maduro"),s(n)]),a(" and "),e("a",I,[a("Taylor Otwell"),s(n)])]),a(".")]),S,e("p",null,[e("em",null,[a("Test profiling was contributed by "),e("a",N,[a("Nuno Maduro"),s(n)])]),a(".")]),A,e("p",null,[e("em",null,[a("Generator CLI prompts were contributed by "),e("a",H,[a("Jess Archer"),s(n)])]),a(".")]),$])}const E=r(d,[["render",z],["__file","releases.html.vue"]]);export{E as default};
