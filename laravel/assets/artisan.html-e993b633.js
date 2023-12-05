import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as r,c as d,b as e,d as a,e as t,a as n}from"./app-8cdff07c.js";const c={},l=n(`<h1 id="artisan-console" tabindex="-1"><a class="header-anchor" href="#artisan-console" aria-hidden="true">#</a> Artisan Console</h1><ul><li><a href="#introduction">Introduction</a><ul><li><a href="#tinker">Tinker (REPL)</a></li></ul></li><li><a href="#writing-commands">Writing Commands</a><ul><li><a href="#generating-commands">Generating Commands</a></li><li><a href="#command-structure">Command Structure</a></li><li><a href="#closure-commands">Closure Commands</a></li><li><a href="#isolatable-commands">Isolatable Commands</a></li></ul></li><li><a href="#defining-input-expectations">Defining Input Expectations</a><ul><li><a href="#arguments">Arguments</a></li><li><a href="#options">Options</a></li><li><a href="#input-arrays">Input Arrays</a></li><li><a href="#input-descriptions">Input Descriptions</a></li><li><a href="#prompting-for-missing-input">Prompting For Missing Input</a></li></ul></li><li><a href="#command-io">Command I/O</a><ul><li><a href="#retrieving-input">Retrieving Input</a></li><li><a href="#prompting-for-input">Prompting For Input</a></li><li><a href="#writing-output">Writing Output</a></li></ul></li><li><a href="#registering-commands">Registering Commands</a></li><li><a href="#programmatically-executing-commands">Programmatically Executing Commands</a><ul><li><a href="#calling-commands-from-other-commands">Calling Commands From Other Commands</a></li></ul></li><li><a href="#signal-handling">Signal Handling</a></li><li><a href="#stub-customization">Stub Customization</a></li><li><a href="#events">Events</a></li></ul><p><a name="introduction"></a></p><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p>Artisan is the command line interface included with Laravel. Artisan exists at the root of your application as the <code>artisan</code> script and provides a number of helpful commands that can assist you while you build your application. To view a list of all available Artisan commands, you may use the <code>list</code> command:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Every command also includes a &quot;help&quot; screen which displays and describes the command&#39;s available arguments and options. To view a help screen, precede the name of the command with <code>help</code>:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan <span class="token builtin class-name">help</span> migrate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="laravel-sail"></a></p><h4 id="laravel-sail" tabindex="-1"><a class="header-anchor" href="#laravel-sail" aria-hidden="true">#</a> Laravel Sail</h4><p>If you are using <a href="./sail">Laravel Sail</a> as your local development environment, remember to use the <code>sail</code> command line to invoke Artisan commands. Sail will execute your Artisan commands within your application&#39;s Docker containers:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./vendor/bin/sail artisan list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="tinker"></a></p><h3 id="tinker-repl" tabindex="-1"><a class="header-anchor" href="#tinker-repl" aria-hidden="true">#</a> Tinker (REPL)</h3>`,14),p={href:"https://github.com/bobthecow/psysh",target:"_blank",rel:"noopener noreferrer"},u=n(`<p><a name="installation"></a></p><h4 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h4><p>All Laravel applications include Tinker by default. However, you may install Tinker using Composer if you have previously removed it from your application:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">composer</span> require laravel/tinker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,4),m=e("strong",null,"Note",-1),h=e("br",null,null,-1),g={href:"https://tinkerwell.app",target:"_blank",rel:"noopener noreferrer"},f=n(`<p><a name="usage"></a></p><h4 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h4><p>Tinker allows you to interact with your entire Laravel application on the command line, including your Eloquent models, jobs, events, and more. To enter the Tinker environment, run the <code>tinker</code> Artisan command:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan tinker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>You can publish Tinker&#39;s configuration file using the <code>vendor:publish</code> command:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan vendor:publish <span class="token parameter variable">--provider</span><span class="token operator">=</span><span class="token string">&quot;Laravel\\Tinker\\TinkerServiceProvider&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p><strong>Warning</strong><br> The <code>dispatch</code> helper function and <code>dispatch</code> method on the <code>Dispatchable</code> class depends on garbage collection to place the job on the queue. Therefore, when using tinker, you should use <code>Bus::dispatch</code> or <code>Queue::push</code> to dispatch jobs.</p></blockquote><p><a name="command-allow-list"></a></p><h4 id="command-allow-list" tabindex="-1"><a class="header-anchor" href="#command-allow-list" aria-hidden="true">#</a> Command Allow List</h4><p>Tinker utilizes an &quot;allow&quot; list to determine which Artisan commands are allowed to be run within its shell. By default, you may run the <code>clear-compiled</code>, <code>down</code>, <code>env</code>, <code>inspire</code>, <code>migrate</code>, <code>optimize</code>, and <code>up</code> commands. If you would like to allow more commands you may add them to the <code>commands</code> array in your <code>tinker.php</code> configuration file:</p><pre><code>&#39;commands&#39; =&gt; [
    // App\\Console\\Commands\\ExampleCommand::class,
],
</code></pre><p><a name="classes-that-should-not-be-aliased"></a></p><h4 id="classes-that-should-not-be-aliased" tabindex="-1"><a class="header-anchor" href="#classes-that-should-not-be-aliased" aria-hidden="true">#</a> Classes That Should Not Be Aliased</h4><p>Typically, Tinker automatically aliases classes as you interact with them in Tinker. However, you may wish to never alias some classes. You may accomplish this by listing the classes in the <code>dont_alias</code> array of your <code>tinker.php</code> configuration file:</p><pre><code>&#39;dont_alias&#39; =&gt; [
    App\\Models\\User::class,
],
</code></pre><p><a name="writing-commands"></a></p><h2 id="writing-commands" tabindex="-1"><a class="header-anchor" href="#writing-commands" aria-hidden="true">#</a> Writing Commands</h2><p>In addition to the commands provided with Artisan, you may build your own custom commands. Commands are typically stored in the <code>app/Console/Commands</code> directory; however, you are free to choose your own storage location as long as your commands can be loaded by Composer.</p><p><a name="generating-commands"></a></p><h3 id="generating-commands" tabindex="-1"><a class="header-anchor" href="#generating-commands" aria-hidden="true">#</a> Generating Commands</h3><p>To create a new command, you may use the <code>make:command</code> Artisan command. This command will create a new command class in the <code>app/Console/Commands</code> directory. Don&#39;t worry if this directory does not exist in your application - it will be created the first time you run the <code>make:command</code> Artisan command:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan make:command SendEmails
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="command-structure"></a></p><h3 id="command-structure" tabindex="-1"><a class="header-anchor" href="#command-structure" aria-hidden="true">#</a> Command Structure</h3><p>After generating your command, you should define appropriate values for the <code>signature</code> and <code>description</code> properties of the class. These properties will be used when displaying your command on the <code>list</code> screen. The <code>signature</code> property also allows you to define <a href="#defining-input-expectations">your command&#39;s input expectations</a>. The <code>handle</code> method will be called when your command is executed. You may place your command logic in this method.</p><p>Let&#39;s take a look at an example command. Note that we are able to request any dependencies we need via the command&#39;s <code>handle</code> method. The Laravel <a href="./container">service container</a> will automatically inject all dependencies that are type-hinted in this method&#39;s signature:</p><pre><code>&lt;?php

namespace App\\Console\\Commands;

use App\\Models\\User;
use App\\Support\\DripEmailer;
use Illuminate\\Console\\Command;

class SendEmails extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = &#39;mail:send {user}&#39;;

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = &#39;Send a marketing email to a user&#39;;

    /**
     * Execute the console command.
     */
    public function handle(DripEmailer $drip): void
    {
        $drip-&gt;send(User::find($this-&gt;argument(&#39;user&#39;)));
    }
}
</code></pre><blockquote><p><strong>Note</strong><br> For greater code reuse, it is good practice to keep your console commands light and let them defer to application services to accomplish their tasks. In the example above, note that we inject a service class to do the &quot;heavy lifting&quot; of sending the e-mails.</p></blockquote><p><a name="closure-commands"></a></p><h3 id="closure-commands" tabindex="-1"><a class="header-anchor" href="#closure-commands" aria-hidden="true">#</a> Closure Commands</h3><p>Closure based commands provide an alternative to defining console commands as classes. In the same way that route closures are an alternative to controllers, think of command closures as an alternative to command classes. Within the <code>commands</code> method of your <code>app/Console/Kernel.php</code> file, Laravel loads the <code>routes/console.php</code> file:</p><pre><code>/**
 * Register the closure based commands for the application.
 */
protected function commands(): void
{
    require base_path(&#39;routes/console.php&#39;);
}
</code></pre><p>Even though this file does not define HTTP routes, it defines console based entry points (routes) into your application. Within this file, you may define all of your closure based console commands using the <code>Artisan::command</code> method. The <code>command</code> method accepts two arguments: the <a href="#defining-input-expectations">command signature</a> and a closure which receives the command&#39;s arguments and options:</p><pre><code>Artisan::command(&#39;mail:send {user}&#39;, function (string $user) {
    $this-&gt;info(&quot;Sending email to: {$user}!&quot;);
});
</code></pre><p>The closure is bound to the underlying command instance, so you have full access to all of the helper methods you would typically be able to access on a full command class.</p><p><a name="type-hinting-dependencies"></a></p><h4 id="type-hinting-dependencies" tabindex="-1"><a class="header-anchor" href="#type-hinting-dependencies" aria-hidden="true">#</a> Type-Hinting Dependencies</h4><p>In addition to receiving your command&#39;s arguments and options, command closures may also type-hint additional dependencies that you would like resolved out of the <a href="./container">service container</a>:</p><pre><code>use App\\Models\\User;
use App\\Support\\DripEmailer;

Artisan::command(&#39;mail:send {user}&#39;, function (DripEmailer $drip, string $user) {
    $drip-&gt;send(User::find($user));
});
</code></pre><p><a name="closure-command-descriptions"></a></p><h4 id="closure-command-descriptions" tabindex="-1"><a class="header-anchor" href="#closure-command-descriptions" aria-hidden="true">#</a> Closure Command Descriptions</h4><p>When defining a closure based command, you may use the <code>purpose</code> method to add a description to the command. This description will be displayed when you run the <code>php artisan list</code> or <code>php artisan help</code> commands:</p><pre><code>Artisan::command(&#39;mail:send {user}&#39;, function (string $user) {
    // ...
})-&gt;purpose(&#39;Send a marketing email to a user&#39;);
</code></pre><p><a name="isolatable-commands"></a></p><h3 id="isolatable-commands" tabindex="-1"><a class="header-anchor" href="#isolatable-commands" aria-hidden="true">#</a> Isolatable Commands</h3><blockquote><p><strong>Warning</strong> To utilize this feature, your application must be using the <code>memcached</code>, <code>redis</code>, <code>dynamodb</code>, <code>database</code>, <code>file</code>, or <code>array</code> cache driver as your application&#39;s default cache driver. In addition, all servers must be communicating with the same central cache server.</p></blockquote><p>Sometimes you may wish to ensure that only one instance of a command can run at a time. To accomplish this, you may implement the <code>Illuminate\\Contracts\\Console\\Isolatable</code> interface on your command class:</p><pre><code>&lt;?php

namespace App\\Console\\Commands;

use Illuminate\\Console\\Command;
use Illuminate\\Contracts\\Console\\Isolatable;

class SendEmails extends Command implements Isolatable
{
    // ...
}
</code></pre><p>When a command is marked as <code>Isolatable</code>, Laravel will automatically add an <code>--isolated</code> option to the command. When the command is invoked with that option, Laravel will ensure that no other instances of that command are already running. Laravel accomplishes this by attempting to acquire an atomic lock using your application&#39;s default cache driver. If other instances of the command are running, the command will not execute; however, the command will still exit with a successful exit status code:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan mail:send <span class="token number">1</span> <span class="token parameter variable">--isolated</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>If you would like to specify the exit status code that the command should return if it is not able to execute, you may provide the desired status code via the <code>isolated</code> option:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan mail:send <span class="token number">1</span> <span class="token parameter variable">--isolated</span><span class="token operator">=</span><span class="token number">12</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="lock-id"></a></p><h4 id="lock-id" tabindex="-1"><a class="header-anchor" href="#lock-id" aria-hidden="true">#</a> Lock ID</h4><p>By default, Laravel will use the command&#39;s name to generate the string key that is used to acquire the atomic lock in your application&#39;s cache. However, you may customize this key by defining an <code>isolatableId</code> method on your Artisan command class, allowing you to integrate the command&#39;s arguments or options into the key:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token doc-comment comment">/**
 * Get the isolatable ID for the command.
 */</span>
<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">isolatableId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">string</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">argument</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;user&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="lock-expiration-time"></a></p><h4 id="lock-expiration-time" tabindex="-1"><a class="header-anchor" href="#lock-expiration-time" aria-hidden="true">#</a> Lock Expiration Time</h4><p>By default, isolation locks expire after the command is finished. Or, if the command is interrupted and unable to finish, the lock will expire after one hour. However, you may adjust the lock expiration time by defining a <code>isolationLockExpiresAt</code> method on your command:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">DateTimeInterface</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">DateInterval</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * Determine when an isolation lock expires for the command.
 */</span>
<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">isolationLockExpiresAt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token class-name">DateTimeInterface</span><span class="token operator">|</span><span class="token class-name">DateInterval</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">addMinutes</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="defining-input-expectations"></a></p><h2 id="defining-input-expectations" tabindex="-1"><a class="header-anchor" href="#defining-input-expectations" aria-hidden="true">#</a> Defining Input Expectations</h2><p>When writing console commands, it is common to gather input from the user through arguments or options. Laravel makes it very convenient to define the input you expect from the user using the <code>signature</code> property on your commands. The <code>signature</code> property allows you to define the name, arguments, and options for the command in a single, expressive, route-like syntax.</p><p><a name="arguments"></a></p><h3 id="arguments" tabindex="-1"><a class="header-anchor" href="#arguments" aria-hidden="true">#</a> Arguments</h3><p>All user supplied arguments and options are wrapped in curly braces. In the following example, the command defines one required argument: <code>user</code>:</p><pre><code>/**
 * The name and signature of the console command.
 *
 * @var string
 */
protected $signature = &#39;mail:send {user}&#39;;
</code></pre><p>You may also make arguments optional or define default values for arguments:</p><pre><code>// Optional argument...
&#39;mail:send {user?}&#39;

// Optional argument with default value...
&#39;mail:send {user=foo}&#39;
</code></pre><p><a name="options"></a></p><h3 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h3><p>Options, like arguments, are another form of user input. Options are prefixed by two hyphens (<code>--</code>) when they are provided via the command line. There are two types of options: those that receive a value and those that don&#39;t. Options that don&#39;t receive a value serve as a boolean &quot;switch&quot;. Let&#39;s take a look at an example of this type of option:</p><pre><code>/**
 * The name and signature of the console command.
 *
 * @var string
 */
protected $signature = &#39;mail:send {user} {--queue}&#39;;
</code></pre><p>In this example, the <code>--queue</code> switch may be specified when calling the Artisan command. If the <code>--queue</code> switch is passed, the value of the option will be <code>true</code>. Otherwise, the value will be <code>false</code>:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan mail:send <span class="token number">1</span> <span class="token parameter variable">--queue</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="options-with-values"></a></p><h4 id="options-with-values" tabindex="-1"><a class="header-anchor" href="#options-with-values" aria-hidden="true">#</a> Options With Values</h4><p>Next, let&#39;s take a look at an option that expects a value. If the user must specify a value for an option, you should suffix the option name with a <code>=</code> sign:</p><pre><code>/**
 * The name and signature of the console command.
 *
 * @var string
 */
protected $signature = &#39;mail:send {user} {--queue=}&#39;;
</code></pre><p>In this example, the user may pass a value for the option like so. If the option is not specified when invoking the command, its value will be <code>null</code>:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan mail:send <span class="token number">1</span> <span class="token parameter variable">--queue</span><span class="token operator">=</span>default
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>You may assign default values to options by specifying the default value after the option name. If no option value is passed by the user, the default value will be used:</p><pre><code>&#39;mail:send {user} {--queue=default}&#39;
</code></pre><p><a name="option-shortcuts"></a></p><h4 id="option-shortcuts" tabindex="-1"><a class="header-anchor" href="#option-shortcuts" aria-hidden="true">#</a> Option Shortcuts</h4><p>To assign a shortcut when defining an option, you may specify it before the option name and use the <code>|</code> character as a delimiter to separate the shortcut from the full option name:</p><pre><code>&#39;mail:send {user} {--Q|queue}&#39;
</code></pre><p>When invoking the command on your terminal, option shortcuts should be prefixed with a single hyphen and no <code>=</code> character should be included when specifying a value for the option:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan mail:send <span class="token number">1</span> <span class="token parameter variable">-Qdefault</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="input-arrays"></a></p><h3 id="input-arrays" tabindex="-1"><a class="header-anchor" href="#input-arrays" aria-hidden="true">#</a> Input Arrays</h3><p>If you would like to define arguments or options to expect multiple input values, you may use the <code>*</code> character. First, let&#39;s take a look at an example that specifies such an argument:</p><pre><code>&#39;mail:send {user*}&#39;
</code></pre><p>When calling this method, the <code>user</code> arguments may be passed in order to the command line. For example, the following command will set the value of <code>user</code> to an array with <code>1</code> and <code>2</code> as its values:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan mail:send <span class="token number">1</span> <span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>This <code>*</code> character can be combined with an optional argument definition to allow zero or more instances of an argument:</p><pre><code>&#39;mail:send {user?*}&#39;
</code></pre><p><a name="option-arrays"></a></p><h4 id="option-arrays" tabindex="-1"><a class="header-anchor" href="#option-arrays" aria-hidden="true">#</a> Option Arrays</h4><p>When defining an option that expects multiple input values, each option value passed to the command should be prefixed with the option name:</p><pre><code>&#39;mail:send {--id=*}&#39;
</code></pre><p>Such a command may be invoked by passing multiple <code>--id</code> arguments:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan mail:send <span class="token parameter variable">--id</span><span class="token operator">=</span><span class="token number">1</span> <span class="token parameter variable">--id</span><span class="token operator">=</span><span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="input-descriptions"></a></p><h3 id="input-descriptions" tabindex="-1"><a class="header-anchor" href="#input-descriptions" aria-hidden="true">#</a> Input Descriptions</h3><p>You may assign descriptions to input arguments and options by separating the argument name from the description using a colon. If you need a little extra room to define your command, feel free to spread the definition across multiple lines:</p><pre><code>/**
 * The name and signature of the console command.
 *
 * @var string
 */
protected $signature = &#39;mail:send
                        {user : The ID of the user}
                        {--queue : Whether the job should be queued}&#39;;
</code></pre><p><a name="prompting-for-missing-input"></a></p><h3 id="prompting-for-missing-input" tabindex="-1"><a class="header-anchor" href="#prompting-for-missing-input" aria-hidden="true">#</a> Prompting For Missing Input</h3><p>If your command contains required arguments, the user will receive an error message when they are not provided. Alternatively, you may configure your command to automatically prompt the user when required arguments are missing by implementing the <code>PromptsForMissingInput</code> interface:</p><pre><code>&lt;?php

namespace App\\Console\\Commands;

use Illuminate\\Console\\Command;
use Illuminate\\Contracts\\Console\\PromptsForMissingInput;

class SendEmails extends Command implements PromptsForMissingInput
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = &#39;mail:send {user}&#39;;

    // ...
}
</code></pre><p>If Laravel needs to gather a required argument from the user, it will automatically ask the user for the argument by intelligently phrasing the question using either the argument name or description. If you wish to customize the question used to gather the required argument, you may implement the <code>promptForMissingArgumentsUsing</code> method, returning an array of questions keyed by the argument names:</p><pre><code>/**
 * Prompt for missing input arguments using the returned questions.
 *
 * @return array
 */
protected function promptForMissingArgumentsUsing()
{
    return [
        &#39;user&#39; =&gt; &#39;Which user ID should receive the mail?&#39;,
    ];
}
</code></pre><p>You may also provide placeholder text by using a tuple containing the question and placeholder:</p><pre><code>return [
    &#39;user&#39; =&gt; [&#39;Which user ID should receive the mail?&#39;, &#39;E.g. 123&#39;],
];
</code></pre><p>If you would like complete control over the prompt, you may provide a closure that should prompt the user and return their answer:</p><pre><code>use App\\Models\\User;
use function Laravel\\Prompts\\search;

// ...

return [
    &#39;user&#39; =&gt; fn () =&gt; search(
        label: &#39;Search for a user:&#39;,
        placeholder: &#39;E.g. Taylor Otwell&#39;,
        options: fn ($value) =&gt; strlen($value) &gt; 0
            ? User::where(&#39;name&#39;, &#39;like&#39;, &quot;%{$value}%&quot;)-&gt;pluck(&#39;name&#39;, &#39;id&#39;)-&gt;all()
            : []
    ),
];
</code></pre><blockquote><p><strong>Note</strong><br> The comprehensive <a href="./prompts">Laravel Prompts</a> documentation includes additional information on the available prompts and their usage.</p></blockquote><p>If you wish to prompt the user to select or enter <a href="#options">options</a>, you may include prompts in your command&#39;s <code>handle</code> method. However, if you only wish to prompt the user when they have also been automatically prompted for missing arguments, then you may implement the <code>afterPromptingForMissingArguments</code> method:</p><pre><code>use Symfony\\Component\\Console\\Input\\InputInterface;
use Symfony\\Component\\Console\\Output\\OutputInterface;
use function Laravel\\Prompts\\confirm;

// ...

/**
 * Perform actions after the user was prompted for missing arguments.
 *
 * @param  \\Symfony\\Component\\Console\\Input\\InputInterface  $input
 * @param  \\Symfony\\Component\\Console\\Output\\OutputInterface  $output
 * @return void
 */
protected function afterPromptingForMissingArguments(InputInterface $input, OutputInterface $output)
{
    $input-&gt;setOption(&#39;queue&#39;, confirm(
        label: &#39;Would you like to queue the mail?&#39;,
        default: $this-&gt;option(&#39;queue&#39;)
    ));
}
</code></pre><p><a name="command-io"></a></p><h2 id="command-i-o" tabindex="-1"><a class="header-anchor" href="#command-i-o" aria-hidden="true">#</a> Command I/O</h2><p><a name="retrieving-input"></a></p><h3 id="retrieving-input" tabindex="-1"><a class="header-anchor" href="#retrieving-input" aria-hidden="true">#</a> Retrieving Input</h3><p>While your command is executing, you will likely need to access the values for the arguments and options accepted by your command. To do so, you may use the <code>argument</code> and <code>option</code> methods. If an argument or option does not exist, <code>null</code> will be returned:</p><pre><code>/**
 * Execute the console command.
 */
public function handle(): void
{
    $userId = $this-&gt;argument(&#39;user&#39;);
}
</code></pre><p>If you need to retrieve all of the arguments as an <code>array</code>, call the <code>arguments</code> method:</p><pre><code>$arguments = $this-&gt;arguments();
</code></pre><p>Options may be retrieved just as easily as arguments using the <code>option</code> method. To retrieve all of the options as an array, call the <code>options</code> method:</p><pre><code>// Retrieve a specific option...
$queueName = $this-&gt;option(&#39;queue&#39;);

// Retrieve all options as an array...
$options = $this-&gt;options();
</code></pre><p><a name="prompting-for-input"></a></p><h3 id="prompting-for-input" tabindex="-1"><a class="header-anchor" href="#prompting-for-input" aria-hidden="true">#</a> Prompting For Input</h3><blockquote><p><strong>Note</strong><br><a href="./prompts">Laravel Prompts</a> is a PHP package for adding beautiful and user-friendly forms to your command-line applications, with browser-like features including placeholder text and validation.</p></blockquote><p>In addition to displaying output, you may also ask the user to provide input during the execution of your command. The <code>ask</code> method will prompt the user with the given question, accept their input, and then return the user&#39;s input back to your command:</p><pre><code>/**
 * Execute the console command.
 */
public function handle(): void
{
    $name = $this-&gt;ask(&#39;What is your name?&#39;);

    // ...
}
</code></pre><p>The <code>secret</code> method is similar to <code>ask</code>, but the user&#39;s input will not be visible to them as they type in the console. This method is useful when asking for sensitive information such as passwords:</p><pre><code>$password = $this-&gt;secret(&#39;What is the password?&#39;);
</code></pre><p><a name="asking-for-confirmation"></a></p><h4 id="asking-for-confirmation" tabindex="-1"><a class="header-anchor" href="#asking-for-confirmation" aria-hidden="true">#</a> Asking For Confirmation</h4><p>If you need to ask the user for a simple &quot;yes or no&quot; confirmation, you may use the <code>confirm</code> method. By default, this method will return <code>false</code>. However, if the user enters <code>y</code> or <code>yes</code> in response to the prompt, the method will return <code>true</code>.</p><pre><code>if ($this-&gt;confirm(&#39;Do you wish to continue?&#39;)) {
    // ...
}
</code></pre><p>If necessary, you may specify that the confirmation prompt should return <code>true</code> by default by passing <code>true</code> as the second argument to the <code>confirm</code> method:</p><pre><code>if ($this-&gt;confirm(&#39;Do you wish to continue?&#39;, true)) {
    // ...
}
</code></pre><p><a name="auto-completion"></a></p><h4 id="auto-completion" tabindex="-1"><a class="header-anchor" href="#auto-completion" aria-hidden="true">#</a> Auto-Completion</h4><p>The <code>anticipate</code> method can be used to provide auto-completion for possible choices. The user can still provide any answer, regardless of the auto-completion hints:</p><pre><code>$name = $this-&gt;anticipate(&#39;What is your name?&#39;, [&#39;Taylor&#39;, &#39;Dayle&#39;]);
</code></pre><p>Alternatively, you may pass a closure as the second argument to the <code>anticipate</code> method. The closure will be called each time the user types an input character. The closure should accept a string parameter containing the user&#39;s input so far, and return an array of options for auto-completion:</p><pre><code>$name = $this-&gt;anticipate(&#39;What is your address?&#39;, function (string $input) {
    // Return auto-completion options...
});
</code></pre><p><a name="multiple-choice-questions"></a></p><h4 id="multiple-choice-questions" tabindex="-1"><a class="header-anchor" href="#multiple-choice-questions" aria-hidden="true">#</a> Multiple Choice Questions</h4><p>If you need to give the user a predefined set of choices when asking a question, you may use the <code>choice</code> method. You may set the array index of the default value to be returned if no option is chosen by passing the index as the third argument to the method:</p><pre><code>$name = $this-&gt;choice(
    &#39;What is your name?&#39;,
    [&#39;Taylor&#39;, &#39;Dayle&#39;],
    $defaultIndex
);
</code></pre><p>In addition, the <code>choice</code> method accepts optional fourth and fifth arguments for determining the maximum number of attempts to select a valid response and whether multiple selections are permitted:</p><pre><code>$name = $this-&gt;choice(
    &#39;What is your name?&#39;,
    [&#39;Taylor&#39;, &#39;Dayle&#39;],
    $defaultIndex,
    $maxAttempts = null,
    $allowMultipleSelections = false
);
</code></pre><p><a name="writing-output"></a></p><h3 id="writing-output" tabindex="-1"><a class="header-anchor" href="#writing-output" aria-hidden="true">#</a> Writing Output</h3><p>To send output to the console, you may use the <code>line</code>, <code>info</code>, <code>comment</code>, <code>question</code>, <code>warn</code>, and <code>error</code> methods. Each of these methods will use appropriate ANSI colors for their purpose. For example, let&#39;s display some general information to the user. Typically, the <code>info</code> method will display in the console as green colored text:</p><pre><code>/**
 * Execute the console command.
 */
public function handle(): void
{
    // ...

    $this-&gt;info(&#39;The command was successful!&#39;);
}
</code></pre><p>To display an error message, use the <code>error</code> method. Error message text is typically displayed in red:</p><pre><code>$this-&gt;error(&#39;Something went wrong!&#39;);
</code></pre><p>You may use the <code>line</code> method to display plain, uncolored text:</p><pre><code>$this-&gt;line(&#39;Display this on the screen&#39;);
</code></pre><p>You may use the <code>newLine</code> method to display a blank line:</p><pre><code>// Write a single blank line...
$this-&gt;newLine();

// Write three blank lines...
$this-&gt;newLine(3);
</code></pre><p><a name="tables"></a></p><h4 id="tables" tabindex="-1"><a class="header-anchor" href="#tables" aria-hidden="true">#</a> Tables</h4><p>The <code>table</code> method makes it easy to correctly format multiple rows / columns of data. All you need to do is provide the column names and the data for the table and Laravel will automatically calculate the appropriate width and height of the table for you:</p><pre><code>use App\\Models\\User;

$this-&gt;table(
    [&#39;Name&#39;, &#39;Email&#39;],
    User::all([&#39;name&#39;, &#39;email&#39;])-&gt;toArray()
);
</code></pre><p><a name="progress-bars"></a></p><h4 id="progress-bars" tabindex="-1"><a class="header-anchor" href="#progress-bars" aria-hidden="true">#</a> Progress Bars</h4><p>For long running tasks, it can be helpful to show a progress bar that informs users how complete the task is. Using the <code>withProgressBar</code> method, Laravel will display a progress bar and advance its progress for each iteration over a given iterable value:</p><pre><code>use App\\Models\\User;

$users = $this-&gt;withProgressBar(User::all(), function (User $user) {
    $this-&gt;performTask($user);
});
</code></pre><p>Sometimes, you may need more manual control over how a progress bar is advanced. First, define the total number of steps the process will iterate through. Then, advance the progress bar after processing each item:</p><pre><code>$users = App\\Models\\User::all();

$bar = $this-&gt;output-&gt;createProgressBar(count($users));

$bar-&gt;start();

foreach ($users as $user) {
    $this-&gt;performTask($user);

    $bar-&gt;advance();
}

$bar-&gt;finish();
</code></pre>`,175),y=e("strong",null,"Note",-1),b=e("br",null,null,-1),v={href:"https://symfony.com/doc/current/components/console/helpers/progressbar.html",target:"_blank",rel:"noopener noreferrer"},k=n(`<p><a name="registering-commands"></a></p><h2 id="registering-commands" tabindex="-1"><a class="header-anchor" href="#registering-commands" aria-hidden="true">#</a> Registering Commands</h2><p>All of your console commands are registered within your application&#39;s <code>App\\Console\\Kernel</code> class, which is your application&#39;s &quot;console kernel&quot;. Within the <code>commands</code> method of this class, you will see a call to the kernel&#39;s <code>load</code> method. The <code>load</code> method will scan the <code>app/Console/Commands</code> directory and automatically register each command it contains with Artisan. You are even free to make additional calls to the <code>load</code> method to scan other directories for Artisan commands:</p><pre><code>/**
 * Register the commands for the application.
 */
protected function commands(): void
{
    $this-&gt;load(__DIR__.&#39;/Commands&#39;);
    $this-&gt;load(__DIR__.&#39;/../Domain/Orders/Commands&#39;);

    // ...
}
</code></pre><p>If necessary, you may manually register commands by adding the command&#39;s class name to a <code>$commands</code> property within your <code>App\\Console\\Kernel</code> class. If this property is not already defined on your kernel, you should define it manually. When Artisan boots, all the commands listed in this property will be resolved by the <a href="./container">service container</a> and registered with Artisan:</p><pre><code>protected $commands = [
    Commands\\SendEmails::class
];
</code></pre><p><a name="programmatically-executing-commands"></a></p><h2 id="programmatically-executing-commands" tabindex="-1"><a class="header-anchor" href="#programmatically-executing-commands" aria-hidden="true">#</a> Programmatically Executing Commands</h2><p>Sometimes you may wish to execute an Artisan command outside of the CLI. For example, you may wish to execute an Artisan command from a route or controller. You may use the <code>call</code> method on the <code>Artisan</code> facade to accomplish this. The <code>call</code> method accepts either the command&#39;s signature name or class name as its first argument, and an array of command parameters as the second argument. The exit code will be returned:</p><pre><code>use Illuminate\\Support\\Facades\\Artisan;

Route::post(&#39;/user/{user}/mail&#39;, function (string $user) {
    $exitCode = Artisan::call(&#39;mail:send&#39;, [
        &#39;user&#39; =&gt; $user, &#39;--queue&#39; =&gt; &#39;default&#39;
    ]);

    // ...
});
</code></pre><p>Alternatively, you may pass the entire Artisan command to the <code>call</code> method as a string:</p><pre><code>Artisan::call(&#39;mail:send 1 --queue=default&#39;);
</code></pre><p><a name="passing-array-values"></a></p><h4 id="passing-array-values" tabindex="-1"><a class="header-anchor" href="#passing-array-values" aria-hidden="true">#</a> Passing Array Values</h4><p>If your command defines an option that accepts an array, you may pass an array of values to that option:</p><pre><code>use Illuminate\\Support\\Facades\\Artisan;

Route::post(&#39;/mail&#39;, function () {
    $exitCode = Artisan::call(&#39;mail:send&#39;, [
        &#39;--id&#39; =&gt; [5, 13]
    ]);
});
</code></pre><p><a name="passing-boolean-values"></a></p><h4 id="passing-boolean-values" tabindex="-1"><a class="header-anchor" href="#passing-boolean-values" aria-hidden="true">#</a> Passing Boolean Values</h4><p>If you need to specify the value of an option that does not accept string values, such as the <code>--force</code> flag on the <code>migrate:refresh</code> command, you should pass <code>true</code> or <code>false</code> as the value of the option:</p><pre><code>$exitCode = Artisan::call(&#39;migrate:refresh&#39;, [
    &#39;--force&#39; =&gt; true,
]);
</code></pre><p><a name="queueing-artisan-commands"></a></p><h4 id="queueing-artisan-commands" tabindex="-1"><a class="header-anchor" href="#queueing-artisan-commands" aria-hidden="true">#</a> Queueing Artisan Commands</h4><p>Using the <code>queue</code> method on the <code>Artisan</code> facade, you may even queue Artisan commands so they are processed in the background by your <a href="./queues">queue workers</a>. Before using this method, make sure you have configured your queue and are running a queue listener:</p><pre><code>use Illuminate\\Support\\Facades\\Artisan;

Route::post(&#39;/user/{user}/mail&#39;, function (string $user) {
    Artisan::queue(&#39;mail:send&#39;, [
        &#39;user&#39; =&gt; $user, &#39;--queue&#39; =&gt; &#39;default&#39;
    ]);

    // ...
});
</code></pre><p>Using the <code>onConnection</code> and <code>onQueue</code> methods, you may specify the connection or queue the Artisan command should be dispatched to:</p><pre><code>Artisan::queue(&#39;mail:send&#39;, [
    &#39;user&#39; =&gt; 1, &#39;--queue&#39; =&gt; &#39;default&#39;
])-&gt;onConnection(&#39;redis&#39;)-&gt;onQueue(&#39;commands&#39;);
</code></pre><p><a name="calling-commands-from-other-commands"></a></p><h3 id="calling-commands-from-other-commands" tabindex="-1"><a class="header-anchor" href="#calling-commands-from-other-commands" aria-hidden="true">#</a> Calling Commands From Other Commands</h3><p>Sometimes you may wish to call other commands from an existing Artisan command. You may do so using the <code>call</code> method. This <code>call</code> method accepts the command name and an array of command arguments / options:</p><pre><code>/**
 * Execute the console command.
 */
public function handle(): void
{
    $this-&gt;call(&#39;mail:send&#39;, [
        &#39;user&#39; =&gt; 1, &#39;--queue&#39; =&gt; &#39;default&#39;
    ]);

    // ...
}
</code></pre><p>If you would like to call another console command and suppress all of its output, you may use the <code>callSilently</code> method. The <code>callSilently</code> method has the same signature as the <code>call</code> method:</p><pre><code>$this-&gt;callSilently(&#39;mail:send&#39;, [
    &#39;user&#39; =&gt; 1, &#39;--queue&#39; =&gt; &#39;default&#39;
]);
</code></pre><p><a name="signal-handling"></a></p><h2 id="signal-handling" tabindex="-1"><a class="header-anchor" href="#signal-handling" aria-hidden="true">#</a> Signal Handling</h2><p>As you may know, operating systems allow signals to be sent to running processes. For example, the <code>SIGTERM</code> signal is how operating systems ask a program to terminate. If you wish to listen for signals in your Artisan console commands and execute code when they occur, you may use the <code>trap</code> method:</p><pre><code>/**
 * Execute the console command.
 */
public function handle(): void
{
    $this-&gt;trap(SIGTERM, fn () =&gt; $this-&gt;shouldKeepRunning = false);

    while ($this-&gt;shouldKeepRunning) {
        // ...
    }
}
</code></pre><p>To listen for multiple signals at once, you may provide an array of signals to the <code>trap</code> method:</p><pre><code>$this-&gt;trap([SIGTERM, SIGQUIT], function (int $signal) {
    $this-&gt;shouldKeepRunning = false;

    dump($signal); // SIGTERM / SIGQUIT
});
</code></pre><p><a name="stub-customization"></a></p><h2 id="stub-customization" tabindex="-1"><a class="header-anchor" href="#stub-customization" aria-hidden="true">#</a> Stub Customization</h2><p>The Artisan console&#39;s <code>make</code> commands are used to create a variety of classes, such as controllers, jobs, migrations, and tests. These classes are generated using &quot;stub&quot; files that are populated with values based on your input. However, you may want to make small changes to files generated by Artisan. To accomplish this, you may use the <code>stub:publish</code> command to publish the most common stubs to your application so that you can customize them:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan stub:publish
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The published stubs will be located within a <code>stubs</code> directory in the root of your application. Any changes you make to these stubs will be reflected when you generate their corresponding classes using Artisan&#39;s <code>make</code> commands.</p><p><a name="events"></a></p><h2 id="events" tabindex="-1"><a class="header-anchor" href="#events" aria-hidden="true">#</a> Events</h2><p>Artisan dispatches three events when running commands: <code>Illuminate\\Console\\Events\\ArtisanStarting</code>, <code>Illuminate\\Console\\Events\\CommandStarting</code>, and <code>Illuminate\\Console\\Events\\CommandFinished</code>. The <code>ArtisanStarting</code> event is dispatched immediately when Artisan starts running. Next, the <code>CommandStarting</code> event is dispatched immediately before a command runs. Finally, the <code>CommandFinished</code> event is dispatched once a command finishes executing.</p>`,46);function w(x,I){const o=i("ExternalLinkIcon");return r(),d("div",null,[l,e("p",null,[a("Laravel Tinker is a powerful REPL for the Laravel framework, powered by the "),e("a",p,[a("PsySH"),t(o)]),a(" package.")]),u,e("blockquote",null,[e("p",null,[m,h,a(" Looking for a graphical UI for interacting with your Laravel application? Check out "),e("a",g,[a("Tinkerwell"),t(o)]),a("!")])]),f,e("blockquote",null,[e("p",null,[y,b,a(" For more advanced options, check out the "),e("a",v,[a("Symfony Progress Bar component documentation"),t(o)]),a(".")])]),k])}const A=s(c,[["render",w],["__file","artisan.html.vue"]]);export{A as default};
