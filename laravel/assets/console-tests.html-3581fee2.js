import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as t,c as a,a as n}from"./app-8cdff07c.js";const o={},s=n(`<h1 id="控制台测试" tabindex="-1"><a class="header-anchor" href="#控制台测试" aria-hidden="true">#</a> 控制台测试</h1><ul><li><a href="#introduction">介绍</a></li><li><a href="#success-failure-expectations">期望成功/失败</a></li><li><a href="#input-output-expectations">期望输入/输出</a></li></ul><p><a name="introduction"></a></p><h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2><p>除了简化 HTTP 测试之外，Laravel 还提供了一个简单的 API 来测试应用程序的 <a href="./artisan">自定义控制台命令</a>。</p><p><a name="success-failure-expectations"></a></p><h2 id="期望成功-失败" tabindex="-1"><a class="header-anchor" href="#期望成功-失败" aria-hidden="true">#</a> 期望成功/失败</h2><p>首先，让我们探索如何对 Artisan 命令的退出代码进行断言。为此，我们将使用 <code>artisan</code> 方法从我们的测试中调用 Artisan 命令。然后，我们将使用 <code>assertExitCode</code> 方法断言该命令以给定的退出代码完成：</p><pre><code>/**
 * 测试控制台命令。
 */
public function test_console_command(): void
{
    $this-&gt;artisan(&#39;inspire&#39;)-&gt;assertExitCode(0);
}
</code></pre><p>你可以使用 <code>assertNotExitCode</code> 方法断言命令没有以给定的退出代码退出：</p><pre><code>$this-&gt;artisan(&#39;inspire&#39;)-&gt;assertNotExitCode(1);
</code></pre><p>当然，所有终端命令通常在成功时以 <code>0</code> 状态码退出，在不成功时以非零退出码退出。因此，为方便起见，你可以使用 <code>assertSuccessful</code> 和 <code>assertFailed</code> 断言来断言给定命令是否以成功的退出代码退出：</p><pre><code>$this-&gt;artisan(&#39;inspire&#39;)-&gt;assertSuccessful();

$this-&gt;artisan(&#39;inspire&#39;)-&gt;assertFailed();
</code></pre><p><a name="input-output-expectations"></a></p><h2 id="期望输入-输出" tabindex="-1"><a class="header-anchor" href="#期望输入-输出" aria-hidden="true">#</a> 期望输入/输出</h2><p>Laravel 允许你使用 <code>expectsQuestion</code> 方法轻松 「mock」控制台命令的用户输入。此外，你可以使用 <code>assertExitCode</code> 和 <code>expectsOutput</code> 方法指定你希望通过控制台命令输出的退出代码和文本。例如，考虑以下控制台命令：</p><pre><code>Artisan::command(&#39;question&#39;, function () {
    $name = $this-&gt;ask(&#39;What is your name?&#39;);

    $language = $this-&gt;choice(&#39;Which language do you prefer?&#39;, [
        &#39;PHP&#39;,
        &#39;Ruby&#39;,
        &#39;Python&#39;,
    ]);

    $this-&gt;line(&#39;Your name is &#39;.$name.&#39; and you prefer &#39;.$language.&#39;.&#39;);
});
</code></pre><p>你可以用下面的测试来测试这个命令，该测试利用了 <code>expectsQuestion</code>、<code>expectsOutput</code>、<code>doesntExpectOutput</code>、<code>expectsOutputToContain</code>、<code>doesntExpectOutputToContain</code> 和 <code>assertExitCode</code> 方法。</p><pre><code>/**
 * 测试控制台命令。
 */
public function test_console_command(): void
{
    $this-&gt;artisan(&#39;question&#39;)
         -&gt;expectsQuestion(&#39;What is your name?&#39;, &#39;Taylor Otwell&#39;)
         -&gt;expectsQuestion(&#39;Which language do you prefer?&#39;, &#39;PHP&#39;)
         -&gt;expectsOutput(&#39;Your name is Taylor Otwell and you prefer PHP.&#39;)
         -&gt;doesntExpectOutput(&#39;Your name is Taylor Otwell and you prefer Ruby.&#39;)
         -&gt;expectsOutputToContain(&#39;Taylor Otwell&#39;)
         -&gt;doesntExpectOutputToContain(&#39;you prefer Ruby&#39;)
         -&gt;assertExitCode(0);
}
</code></pre><p><a name="confirmation-expectations"></a></p><h4 id="确认期望" tabindex="-1"><a class="header-anchor" href="#确认期望" aria-hidden="true">#</a> 确认期望</h4><p>当编写一个期望以「是」或「否」答案形式确认的命令时，你可以使用 <code>expectsConfirmation</code> 方法：</p><pre><code>$this-&gt;artisan(&#39;module:import&#39;)
    -&gt;expectsConfirmation(&#39;Do you really wish to run this command?&#39;, &#39;no&#39;)
    -&gt;assertExitCode(1);
</code></pre><p><a name="table-expectations"></a></p><h4 id="表格期望" tabindex="-1"><a class="header-anchor" href="#表格期望" aria-hidden="true">#</a> 表格期望</h4><p>如果你的命令使用 Artisan 的 <code>table</code> 方法显示信息表，则为整个表格编写输出预期会很麻烦。相反，你可以使用 <code>expectsTable</code> 方法。此方法接受表格的标题作为它的第一个参数和表格的数据作为它的第二个参数：</p><pre><code>$this-&gt;artisan(&#39;users:all&#39;)
    -&gt;expectsTable([
        &#39;ID&#39;,
        &#39;Email&#39;,
    ], [
        [1, &#39;taylor@example.com&#39;],
        [2, &#39;abigail@example.com&#39;],
    ]);
</code></pre>`,27),c=[s];function i(r,d){return t(),a("div",null,c)}const l=e(o,[["render",i],["__file","console-tests.html.vue"]]);export{l as default};
