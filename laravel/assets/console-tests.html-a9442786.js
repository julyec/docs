import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as t,c as o,a as n}from"./app-06635a3b.js";const a={},s=n(`<h1 id="console-tests" tabindex="-1"><a class="header-anchor" href="#console-tests" aria-hidden="true">#</a> Console Tests</h1><ul><li><a href="#introduction">Introduction</a></li><li><a href="#success-failure-expectations">Success / Failure Expectations</a></li><li><a href="#input-output-expectations">Input / Output Expectations</a></li><li><a href="#console-events">Console Events</a></li></ul><p><a name="introduction"></a></p><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p>In addition to simplifying HTTP testing, Laravel provides a simple API for testing your application&#39;s <a href="./artisan">custom console commands</a>.</p><p><a name="success-failure-expectations"></a></p><h2 id="success-failure-expectations" tabindex="-1"><a class="header-anchor" href="#success-failure-expectations" aria-hidden="true">#</a> Success / Failure Expectations</h2><p>To get started, let&#39;s explore how to make assertions regarding an Artisan command&#39;s exit code. To accomplish this, we will use the <code>artisan</code> method to invoke an Artisan command from our test. Then, we will use the <code>assertExitCode</code> method to assert that the command completed with a given exit code:</p><pre><code>/**
 * Test a console command.
 */
public function test_console_command(): void
{
    $this-&gt;artisan(&#39;inspire&#39;)-&gt;assertExitCode(0);
}
</code></pre><p>You may use the <code>assertNotExitCode</code> method to assert that the command did not exit with a given exit code:</p><pre><code>$this-&gt;artisan(&#39;inspire&#39;)-&gt;assertNotExitCode(1);
</code></pre><p>Of course, all terminal commands typically exit with a status code of <code>0</code> when they are successful and a non-zero exit code when they are not successful. Therefore, for convenience, you may utilize the <code>assertSuccessful</code> and <code>assertFailed</code> assertions to assert that a given command exited with a successful exit code or not:</p><pre><code>$this-&gt;artisan(&#39;inspire&#39;)-&gt;assertSuccessful();

$this-&gt;artisan(&#39;inspire&#39;)-&gt;assertFailed();
</code></pre><p><a name="input-output-expectations"></a></p><h2 id="input-output-expectations" tabindex="-1"><a class="header-anchor" href="#input-output-expectations" aria-hidden="true">#</a> Input / Output Expectations</h2><p>Laravel allows you to easily &quot;mock&quot; user input for your console commands using the <code>expectsQuestion</code> method. In addition, you may specify the exit code and text that you expect to be output by the console command using the <code>assertExitCode</code> and <code>expectsOutput</code> methods. For example, consider the following console command:</p><pre><code>Artisan::command(&#39;question&#39;, function () {
    $name = $this-&gt;ask(&#39;What is your name?&#39;);

    $language = $this-&gt;choice(&#39;Which language do you prefer?&#39;, [
        &#39;PHP&#39;,
        &#39;Ruby&#39;,
        &#39;Python&#39;,
    ]);

    $this-&gt;line(&#39;Your name is &#39;.$name.&#39; and you prefer &#39;.$language.&#39;.&#39;);
});
</code></pre><p>You may test this command with the following test which utilizes the <code>expectsQuestion</code>, <code>expectsOutput</code>, <code>doesntExpectOutput</code>, <code>expectsOutputToContain</code>, <code>doesntExpectOutputToContain</code>, and <code>assertExitCode</code> methods:</p><pre><code>/**
 * Test a console command.
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
</code></pre><p><a name="confirmation-expectations"></a></p><h4 id="confirmation-expectations" tabindex="-1"><a class="header-anchor" href="#confirmation-expectations" aria-hidden="true">#</a> Confirmation Expectations</h4><p>When writing a command which expects confirmation in the form of a &quot;yes&quot; or &quot;no&quot; answer, you may utilize the <code>expectsConfirmation</code> method:</p><pre><code>$this-&gt;artisan(&#39;module:import&#39;)
    -&gt;expectsConfirmation(&#39;Do you really wish to run this command?&#39;, &#39;no&#39;)
    -&gt;assertExitCode(1);
</code></pre><p><a name="table-expectations"></a></p><h4 id="table-expectations" tabindex="-1"><a class="header-anchor" href="#table-expectations" aria-hidden="true">#</a> Table Expectations</h4><p>If your command displays a table of information using Artisan&#39;s <code>table</code> method, it can be cumbersome to write output expectations for the entire table. Instead, you may use the <code>expectsTable</code> method. This method accepts the table&#39;s headers as its first argument and the table&#39;s data as its second argument:</p><pre><code>$this-&gt;artisan(&#39;users:all&#39;)
    -&gt;expectsTable([
        &#39;ID&#39;,
        &#39;Email&#39;,
    ], [
        [1, &#39;taylor@example.com&#39;],
        [2, &#39;abigail@example.com&#39;],
    ]);
</code></pre><p><a name="console-events"></a></p><h2 id="console-events" tabindex="-1"><a class="header-anchor" href="#console-events" aria-hidden="true">#</a> Console Events</h2><p>By default, the <code>Illuminate\\Console\\Events\\CommandStarting</code> and <code>Illuminate\\Console\\Events\\CommandFinished</code> events are not dispatched while running your application&#39;s tests. However, you can enable these events for a given test class by adding the <code>Illuminate\\Foundation\\Testing\\WithConsoleEvents</code> trait to the class:</p><pre><code>&lt;?php

namespace Tests\\Feature;

use Illuminate\\Foundation\\Testing\\WithConsoleEvents;
use Tests\\TestCase;

class ConsoleEventTest extends TestCase
{
    use WithConsoleEvents;

    // ...
}
</code></pre>`,31),i=[s];function c(d,r){return t(),o("div",null,i)}const p=e(a,[["render",c],["__file","console-tests.html.vue"]]);export{p as default};
