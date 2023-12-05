import{_ as c}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as r,c as d,b as e,d as a,e as p,a as n}from"./app-8cdff07c.js";const i={},l=n(`<h1 id="本地化" tabindex="-1"><a class="header-anchor" href="#本地化" aria-hidden="true">#</a> 本地化</h1><ul><li><a href="#introduction">简介</a><ul><li><a href="#publishing-the-language-files">发布语言文件</a></li><li><a href="#configuring-the-locale">配置语言环境</a></li><li><a href="#pluralization-language">多语种</a></li></ul></li><li><a href="#defining-translation-strings">定义翻译字符串</a><ul><li><a href="#using-short-keys">使用短键</a></li><li><a href="#using-translation-strings-as-keys">使用翻译字符串作为键</a></li></ul></li><li><a href="#retrieving-translation-strings">检索翻译字符串</a><ul><li><a href="#replacing-parameters-in-translation-strings">替换翻译字符串中的参数</a></li><li><a href="#pluralization">复数化</a></li></ul></li><li><a href="#overriding-package-language-files">覆盖扩展包的语言文件</a></li></ul><p><a name="introduction"></a></p><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><blockquote><p><strong>技巧</strong> 默认情况下，Laravel 应用程序框架不包含 <code>lang</code> 目录。如果你想自定义 Laravel 的语言文件，可以通过 <code>lang:publish</code> Artisan 命令发布它们。</p></blockquote><p>Laravel 的本地化功能提供了一种方便的方法来检索各种语言的字符串，从而使你可以轻松地在应用程序中支持多种语言。</p><p>Laravel 提供了两种管理翻译字符串的方法。首先，语言字符串可以存储在 <code>lang</code> 目录里的文件中。在此目录中，可能存在应用程序支持的每种语言的子目录。这是 Laravel 用于管理内置 Laravel 功能（例如验证错误消息）的翻译字符串的方法：</p><pre><code>/lang
    /en
        messages.php
    /es
        messages.php
</code></pre><p>或者，可以在 <code>lang</code> 目录中放置的 JSON 文件中定义翻译字符串。采用这种方法时，应用程序支持的每种语言在此目录中都会有一个对应的 JSON 文件。对于具有大量可翻译字符串的应用，建议使用此方法：</p><pre><code>/lang
    en.json
    es.json
</code></pre><p>我们将在本文档中讨论每种管理翻译字符串的方法。</p><p><a name="publishing-the-language-files"></a></p><h3 id="发布语言文件" tabindex="-1"><a class="header-anchor" href="#发布语言文件" aria-hidden="true">#</a> 发布语言文件</h3><p>默认情况下，Laravel 应用程序框架不包含 <code>lang</code> 目录。如果你想自定义 Laravel 的语言文件或创建自己的语言文件，则应通过 <code>lang:publish</code> Artisan 命令构建 <code>lang</code> 目录。 <code>lang:publish</code> 命令将在应用程序中创建 <code>lang</code> 目录，并发布 Laravel 使用的默认语言文件集：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan lang:publish
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="configuring-the-locale"></a></p><h3 id="配置语言环境" tabindex="-1"><a class="header-anchor" href="#配置语言环境" aria-hidden="true">#</a> 配置语言环境</h3><p>应用程序的默认语言存储在 <code>config/app.php</code> 配置文件的 <code>locale</code> 配置选项中。你可以随意修改此值以适合你的应用程序的需求。</p><p>你可以使用 <code>App</code> Facade 提供的 <code>setLocale</code> 方法，在运行时通过单个 HTTP 请求修改默认语言：</p><pre><code>use Illuminate\\Support\\Facades\\App;

Route::get(&#39;/greeting/{locale}&#39;, function (string $locale) {
    if (! in_array($locale, [&#39;en&#39;, &#39;es&#39;, &#39;fr&#39;])) {
        abort(400);
    }

    App::setLocale($locale);

    // ...
});
</code></pre><p>你可以配置一个 「备用语言」，当当前语言不包含给定的翻译字符串时，将使用该语言。和默认语言一样，备用语言也是在 config/app.php 配置文件中配置的。</p><pre><code>&#39;fallback_locale&#39; =&gt; &#39;en&#39;,
</code></pre><p><a name="determining-the-current-locale"></a></p><h4 id="确定当前的语言环境" tabindex="-1"><a class="header-anchor" href="#确定当前的语言环境" aria-hidden="true">#</a> 确定当前的语言环境</h4><p>你可以使用 <code>currentLocale</code> 和 <code>isLocale</code> 方法来确定当前的 <code>locale</code> 或检查 <code>locale</code> 是否是一个给定值。</p><pre><code>use Illuminate\\Support\\Facades\\App;

$locale = App::currentLocale();

if (App::isLocale(&#39;en&#39;)) {
    // ...
}
</code></pre><p><a name="pluralization-language"></a></p><h3 id="多语种" tabindex="-1"><a class="header-anchor" href="#多语种" aria-hidden="true">#</a> 多语种</h3><p>你可以使用 Laravel 的「pluralizer」来使用英语以外的语言，Eloquent 和框架的其他部分使用它来将单数字字符串转为复数字符串。这可以通过调用应用程序服务提供的 <code>boot</code> 方法中的 <code>useLanguage</code> 方法来实现。复数器目前支持的语言有 <code>法语</code>, <code>挪威语</code>, <code>葡萄牙语</code>, <code>西班牙语</code>, <code>土耳其语</code>:</p><pre><code>use Illuminate\\Support\\Pluralizer;

/**
 * 引导任何应用程序服务。
 */
public function boot(): void
{
    Pluralizer::useLanguage(&#39;spanish&#39;);     

    // ...     
}
</code></pre><blockquote><p><strong>注意</strong> 如果你想自定义 pluralizer 的语言，则应该明确定义 Elquent 模型的 <a href="./eloquent#table-names">表名</a>。</p></blockquote><p><a name="defining-translation-strings"></a></p><h2 id="定义翻译字符串" tabindex="-1"><a class="header-anchor" href="#定义翻译字符串" aria-hidden="true">#</a> 定义翻译字符串</h2><p><a name="using-short-keys"></a></p><h3 id="使用短键" tabindex="-1"><a class="header-anchor" href="#使用短键" aria-hidden="true">#</a> 使用短键</h3><p>通常，翻译字符串存储在 <code>lang</code> 目录中的文件中。在这个目录中，应用程序支持的每种语言都应该有一个子目录。这是 Laravel 用于管理内置 Laravel 功能（如验证错误消息）的翻译字符串的方法：</p><pre><code>/lang
    /en
        messages.php
    /es
        messages.php
</code></pre><p>所有的语言文件都会返回一个键值对数组。比如下方这个例子：</p><pre><code>&lt;?php

// lang/en/messages.php

return [
    &#39;welcome&#39; =&gt; &#39;Welcome to our application!&#39;,
];
</code></pre><blockquote><p><strong>技巧</strong> 对于不同地区的语言，应根据 ISO 15897 命名语言目录。例如，英式英语应使用「en_GB」而不是 「en_gb」。</p></blockquote><p><a name="using-translation-strings-as-keys"></a></p><h3 id="使用翻译字符串作为键" tabindex="-1"><a class="header-anchor" href="#使用翻译字符串作为键" aria-hidden="true">#</a> 使用翻译字符串作为键</h3><p>对于具有大量可翻译字符串的应用程序，在视图中引用键时，使用「短键」定义每个字符串可能会令人困惑，并且为应用程序支持的每个翻译字符串不断发明键会很麻烦。</p><p>出于这个原因，Laravel 还支持使用字符串的「默认」翻译作为键来定义翻译字符串。使用翻译字符串作为键的翻译文件作为 JSON 文件存储在 <code>lang</code> 目录中。例如，如果你的应用程序有西班牙语翻译，你应该创建一个 <code>lang/es.json</code> 文件：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;I love programming.&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Me encanta programar.&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="键-文件冲突" tabindex="-1"><a class="header-anchor" href="#键-文件冲突" aria-hidden="true">#</a> 键 / 文件冲突</h4><p>你不应该定义和其他翻译文件的文件名存在冲突的键。例如，在 <code>nl/action.php</code> 文件存在，但 <code>nl.json</code> 文件不存在时，对 <code>NL</code> 语言翻译 <code>__(&#39;Action&#39;)</code> 会导致翻译器返回 <code>nl/action.php</code> 文件的全部内容。</p><p><a name="retrieving-translation-strings"></a></p><h2 id="检索翻译字符串" tabindex="-1"><a class="header-anchor" href="#检索翻译字符串" aria-hidden="true">#</a> 检索翻译字符串</h2><p>你可以使用 <code>__</code> 辅助函数从语言文件中检索翻译字符串。 如果你使用 「短键」 来定义翻译字符串，你应该使用 「.」 语法将包含键的文件和键本身传递给<code>__</code>函数。 例如，让我们从 <code>lang/en/messages.php</code> 语言文件中检索 <code>welcome</code> 翻译字符串：</p><pre><code>echo __(&#39;messages.welcome&#39;);
</code></pre><p>如果指定的翻译字符串不存在，<code>__</code> 函数将返回翻译字符串键。 因此，使用上面的示例，如果翻译字符串不存在，<code>__</code> 函数将返回 <code>messages.welcome</code>。</p><p>如果是使用 <a href="#using-translation-strings-as-keys">默认翻译字符串作为翻译键</a>，则应将字符串的默认翻译传递给 <code>__</code> 函数；</p><pre><code>echo __(&#39;I love programming.&#39;);
</code></pre><p>同理，如果翻译字符串不存在，<code>__</code> 函数将返回给定的翻译字符串键。</p><p>如果是使用的是 <a href="./blade">Blade 模板引擎</a>，则可以使用 <code>{{ }}</code> 语法来显示翻译字符串：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>    <span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token function">__</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;messages.welcome&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="replacing-parameters-in-translation-strings"></a></p><h3 id="替换翻译字符串中的参数" tabindex="-1"><a class="header-anchor" href="#替换翻译字符串中的参数" aria-hidden="true">#</a> 替换翻译字符串中的参数</h3><p>如果愿意，可以在翻译字符串中定义占位符。所有占位符的前缀都是 <code>:</code>。例如，可以使用占位符名称定义欢迎消息：</p><pre><code>&#39;welcome&#39; =&gt; &#39;Welcome, :name&#39;,
</code></pre><p>在要检索翻译字符串时替换占位符，可以将替换数组作为第二个参数传递给 <code>__</code> 函数：</p><pre><code>echo __(&#39;messages.welcome&#39;, [&#39;name&#39; =&gt; &#39;dayle&#39;]);
</code></pre><p>如果占位符包含所有大写字母，或仅首字母大写，则转换后的值将相应地转换成大写：</p><pre><code>&#39;welcome&#39; =&gt; &#39;Welcome, :NAME&#39;, // Welcome, DAYLE
&#39;goodbye&#39; =&gt; &#39;Goodbye, :Name&#39;, // Goodbye, Dayle
</code></pre><p><a name="object-replacement-formatting"></a></p><h4 id="对象替换格式" tabindex="-1"><a class="header-anchor" href="#对象替换格式" aria-hidden="true">#</a> 对象替换格式</h4>`,67),t=e("code",null,"__toString",-1),h={href:"https://www.php.net/manual/en/language.oop5.magic.php#object.tostring",target:"_blank",rel:"noopener noreferrer"},u=e("code",null,"__toString",-1),g=e("code",null,"__toString",-1),m=n(`<p>在这些情况下，Laravel 允许你为特定类型的对象注册自定义格式处理程序。要实现这一点，你应该调用转换器的 <code>stringable</code> 方法。 <code>stringable</code> 方法接受闭包，闭包应类型提示其负责格式化的对象类型。通常，应在应用程序的 <code>AppServiceProvider</code> 类的 <code>boot</code> 方法中调用 <code>stringable</code> 方法：</p><pre><code>use Illuminate\\Support\\Facades\\Lang;
use Money\\Money;

/**
 * 引导任何应用程序服务。
 */
public function boot(): void
{
    Lang::stringable(function (Money $money) {
        return $money-&gt;formatTo(&#39;en_GB&#39;);
    });
}
</code></pre><p><a name="pluralization"></a></p><h3 id="复数化" tabindex="-1"><a class="header-anchor" href="#复数化" aria-hidden="true">#</a> 复数化</h3><p>因为不同的语言有着各种复杂的复数化规则，所以复数化是个复杂的问题；不过 Laravel 可以根据你定义的复数化规则帮助你翻译字符串。使用 <code>|</code> 字符，可以区分字符串的单数形式和复数形式：</p><pre><code>&#39;apples&#39; =&gt; &#39;There is one apple|There are many apples&#39;,
</code></pre><p>当然，使用 <a href="#using-translation-strings-as-keys">翻译字符串作为键</a> 时也支持复数化：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;There is one apple|There are many apples&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Hay una manzana|Hay muchas manzanas&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你甚至可以创建更复杂的复数化规则，为多个值范围指定转换字符串：</p><pre><code>&#39;apples&#39; =&gt; &#39;{0} There are none|[1,19] There are some|[20,*] There are many&#39;,
</code></pre><p>定义具有复数选项的翻译字符串后，可以使用 <code>trans_choice</code> 函数检索给定「count」的行。在本例中，由于计数大于 1 ，因此返回翻译字符串的复数形式：</p><pre><code>echo trans_choice(&#39;messages.apples&#39;, 10);
</code></pre><p>也可以在复数化字符串中定义占位符属性。通过将数组作为第三个参数传递给 <code>trans_choice</code> 函数，可以替换这些占位符：</p><pre><code>&#39;minutes_ago&#39; =&gt; &#39;{1} :value minute ago|[2,*] :value minutes ago&#39;,

echo trans_choice(&#39;time.minutes_ago&#39;, 5, [&#39;value&#39; =&gt; 5]);
</code></pre><p>如果要显示传递给 <code>trans_choice</code> 函数的整数值，可以使用内置的 <code>:count</code> 占位符：</p><pre><code>&#39;apples&#39; =&gt; &#39;{0} There are none|{1} There is one|[2,*] There are :count&#39;,
</code></pre><p><a name="overriding-package-language-files"></a></p><h2 id="覆盖扩展包的语言文件" tabindex="-1"><a class="header-anchor" href="#覆盖扩展包的语言文件" aria-hidden="true">#</a> 覆盖扩展包的语言文件</h2><p>有些包可能随自己的语言文件一起封装。你可以将文件放置在 <code>lang/vendor/{package}/{locale}</code> 目录中，而不是更改扩展包的核心文件来调整这些行。</p><p>例如，如果需要重写位于名为 <code>skyrim/hearthfire</code> 的包的 <code>messages.php</code> 文件内容，应将语言文件放在： <code>lang/vendor/hearthfire/en/messages.php</code> 在这个文件中，你应该只定义要覆盖的翻译字符串。任何未重写的翻译字符串仍将从包的原始语言文件中加载。</p>`,20);function _(b,v){const o=s("ExternalLinkIcon");return r(),d("div",null,[l,e("p",null,[a("如果试图提供对象作为转换占位符，则将调用对象的 "),t,a(" 方法。"),e("a",h,[u,p(o)]),a("方法是PHP内置的「神奇方法」之一。然而，有时你可能无法控制给定类的 "),g,a(" 方法，例如当你正在交互的类属于第三方库时。")]),m])}const L=c(i,[["render",_],["__file","localization.html.vue"]]);export{L as default};
