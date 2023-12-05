import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as i,c,b as n,d as a,e as t,a as s}from"./app-8cdff07c.js";const l={},r=s(`<h1 id="artisan-命令行" tabindex="-1"><a class="header-anchor" href="#artisan-命令行" aria-hidden="true">#</a> Artisan 命令行</h1><ul><li><a href="#introduction">介绍</a><ul><li><a href="#tinker">Tinker 命令 (REPL)</a></li></ul></li><li><a href="#writing-commands">编写命令</a><ul><li><a href="#generating-commands">生成命令</a></li><li><a href="#command-structure">命令结构</a></li><li><a href="#closure-commands">闭包命令</a></li><li><a href="#isolatable-commands">单例命令</a></li></ul></li><li><a href="#defining-input-expectations">定义输入期望值</a><ul><li><a href="#arguments">参数</a></li><li><a href="#options">选项</a></li><li><a href="#input-arrays">输入数组</a></li><li><a href="#input-descriptions">输入说明</a></li></ul></li><li><a href="#command-io">I/O 命令</a><ul><li><a href="#retrieving-input">检索输入</a></li><li><a href="#prompting-for-input">输入提示</a></li><li><a href="#writing-output">编写输出</a></li></ul></li><li><a href="#registering-commands">注册命令</a></li><li><a href="#programmatically-executing-commands">在程序中执行命令</a><ul><li><a href="#calling-commands-from-other-commands">从其他命令调用命令</a></li></ul></li><li><a href="#signal-handling">信号处理</a></li><li><a href="#stub-customization">Stub 自定义</a></li><li><a href="#events">事件</a></li></ul><p><a name="introduction"></a></p><h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2><p>Artisan 是 Laravel 中自带的命令行接口。Artisan 以 <code>artisan </code> 脚本的方式存在于应用的根目录中，提供了许多有用的命令，帮助开发者创建应用。使用 <code>list</code> 命令可以查看所有可用的Artisan 命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>每个命令都与 &quot;help&quot; 帮助界面，它能显示和描述该命令可用的参数和选项。要查看帮助界面，请在命令前加上 <code>help</code> 即可：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan <span class="token builtin class-name">help</span> migrate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="laravel-sail"></a></p><h4 id="laravel-sail" tabindex="-1"><a class="header-anchor" href="#laravel-sail" aria-hidden="true">#</a> Laravel Sail</h4><p>如果你使用 <a href="./sail">Laravel Sail</a> 作为本地开发环境，记得使用 <code>sail</code> 命令行来调用 Artisan 命令。Sail 会在应用的 Docker容器中执行 Artisan 命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./vendor/bin/sail artisan list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="tinker"></a></p><h3 id="tinker-repl" tabindex="-1"><a class="header-anchor" href="#tinker-repl" aria-hidden="true">#</a> Tinker (REPL)</h3><p>Laravel Tinker 是为 Laravel 提供的强大的 REPL（交互式解释器），由 PsySH(https://github.com/bobthecow/psysh) 驱动支持。</p><p><a name="installation"></a></p><h4 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h4><p>所有的 Laravel 应用默认都自带 Tinker。不过，如果你此前删除了它，你可以使用 Composer 安装：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">composer</span> require laravel/tinker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,19),d=n("strong",null,"注意",-1),u=n("br",null,null,-1),m={href:"https://tinkerwell.app",target:"_blank",rel:"noopener noreferrer"},v=s(`<p><a name="usage"></a></p><h4 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h4><p>Tinker 允许你在命令行中和整个 Laravel 应用交互，包括 Eloquent 模型、队列、事件等等。要进入 Tinker 环境，只需运行 <code>tinker</code> Artisan 命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan tinker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>你可以使用 <code>vendor:publish</code> 命令发布 Tinker 的配置文件：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan vendor:publish <span class="token parameter variable">--provider</span><span class="token operator">=</span><span class="token string">&quot;Laravel\\Tinker\\TinkerServiceProvider&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p><strong>警告</strong><br><code>dispatch</code> 辅助函数及 <code>Dispatchable</code> 类中 <code>dispatch</code> 方法依赖于垃圾回收将任务放置到队列中。因此，使用 tinker 时，请使用 <code>Bus::dispath</code> 或 <code>Queue::push</code> 来分发任务。</p></blockquote><p><a name="command-allow-list"></a></p><h4 id="命令白名单" tabindex="-1"><a class="header-anchor" href="#命令白名单" aria-hidden="true">#</a> 命令白名单</h4><p>Tinker 使用白名单来确定哪些 Artisan 命令可以在其 Shell 中运行。默认情况下，你可以运行 <code>clear-compiled</code>、<code>down</code>、<code>env</code>、<code>inspire</code>、<code>migrate</code>、<code>optimize</code> 和 <code>up</code> 命令。如果你想允许更多命令，你可以将它们添加到 <code>tinker.php</code> 配置文件的 <code>commands</code> 数组中：</p><pre><code>&#39;commands&#39; =&gt; [
    // App\\Console\\Commands\\ExampleCommand::class,
],
</code></pre><p><a name="classes-that-should-not-be-aliased"></a></p><h4 id="别名黑名单" tabindex="-1"><a class="header-anchor" href="#别名黑名单" aria-hidden="true">#</a> 别名黑名单</h4><p>一般而言，Tinker 会在你引入类时自动为其添加别名。不过，你可能不希望为某些类添加别名。你可以在 <code>tinker.php</code> 配置文件的 <code>dont_alias</code> 数组中列举这些类来完成此操作：</p><pre><code>&#39;dont_alias&#39; =&gt; [
    App\\Models\\User::class,
],
</code></pre><p><a name="writing-commands"></a></p><h2 id="编写命令" tabindex="-1"><a class="header-anchor" href="#编写命令" aria-hidden="true">#</a> 编写命令</h2><p>除了 Artisan 提供的命令之外，你可以创建自定义命令。一般而言，命令保存在 <code>app/Console/Commands</code> 目录；不过，你可以自由选择命令的存储位置，只要它能够被 Composer 加载即可。</p><p><a name="generating-commands"></a></p><h3 id="生成命令" tabindex="-1"><a class="header-anchor" href="#生成命令" aria-hidden="true">#</a> 生成命令</h3><p>要创建新命令，可以使用 <code>make:command</code> Artisan 命令。该命令会在 <code>app/Console/Commands</code> 目录下创建一个新的命令类。如果该目录不存在，也无需担心 - 它会在第一次运行 <code>make:command</code> Artisan 命令的时候自动创建：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan make:command SendEmails
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="command-structure"></a></p><h3 id="命令结构" tabindex="-1"><a class="header-anchor" href="#命令结构" aria-hidden="true">#</a> 命令结构</h3><p>生成命令后，应该为该类的 <code>signature</code> 和 <code>description</code> 属性设置设当的值。当在 list 屏幕上显示命令时，将使用这些属性。<code>signature</code> 属性也会让你定义<a href="#defining-input-expectations">命令输入预期值</a>。<code>handle</code> 方法会在命令执行时被调用。你可以在该方法中编写命令逻辑。</p>`,25),k=n("code",null,"handle",-1),h={href:"https://learnku.com/docs/laravel/9.x/container",target:"_blank",rel:"noopener noreferrer"},b=s(`<pre><code>&lt;?php

namespace App\\Console\\Commands;

use App\\Models\\User;
use App\\Support\\DripEmailer;
use Illuminate\\Console\\Command;

class SendEmails extends Command
{
    /**
     * 控制台命令的名称和签名
     *
     * @var string
     */
    protected $signature = &#39;mail:send {user}&#39;;

    /**
     * 命令描述
     *
     * @var string
     */
    protected $description = &#39;Send a marketing email to a user&#39;;

    /**
     * 执行命令
     */
    public function handle(DripEmailer $drip): void
    {
        $drip-&gt;send(User::find($this-&gt;argument(&#39;user&#39;)));
    }
}
</code></pre><blockquote><p><strong>注意</strong> 为了更好地复用代码，请尽量让你的命令类保持轻量并且能够延迟到应用服务中完成。上例中，我们注入了一个服务类来进行发送电子邮件的「繁重工作」。</p></blockquote><p><a name="closure-commands"></a></p><h3 id="闭包命令" tabindex="-1"><a class="header-anchor" href="#闭包命令" aria-hidden="true">#</a> 闭包命令</h3><p>基于闭包的命令为将控制台命令定义为类提供了一种替代方法。与路由闭包可以替代控制器一样，可以将命令闭包视为命令类的替代。在 <code>app/Console/Kernel.php</code> 文件的 <code>commands</code> 方法中 ，Laravel 加载 <code>routes/console.php</code> 文件：</p><pre><code>/**
 * 注册闭包命令
 */
protected function commands(): void
{
    require base_path(&#39;routes/console.php&#39;);
}
</code></pre><p>尽管该文件没有定义 HTTP 路由，但它定义了进入应用程序的基于控制台的入口 (routes) 。在这个文件中，你可以使用 <code>Artisan::command</code> 方法定义所有的闭包路由。 <code>command</code> 方法接受两个参数： <a href="#defining-input-expectations">命令名称</a> 和可调用的闭包，闭包接收命令的参数和选项：</p><pre><code>Artisan::command(&#39;mail:send {user}&#39;, function (string $user) {
    $this-&gt;info(&quot;Sending email to: {$user}!&quot;);
});
</code></pre><p>该闭包绑定到基础命令实例，因此你可以完全访问通常可以在完整命令类上访问的所有辅助方法。</p><p><a name="type-hinting-dependencies"></a></p><h4 id="type-hinting-dependencies" tabindex="-1"><a class="header-anchor" href="#type-hinting-dependencies" aria-hidden="true">#</a> Type-Hinting Dependencies</h4><p>除了接受命令参数及选项外，命令闭包也可以使用类型约束从 <a href="./container">服务容器</a> 中解析其他的依赖关系：</p><pre><code>use App\\Models\\User;
use App\\Support\\DripEmailer;

Artisan::command(&#39;mail:send {user}&#39;, function (DripEmailer $drip, string $user) {
    $drip-&gt;send(User::find($user));
});
</code></pre><p><a name="closure-command-descriptions"></a></p><h4 id="闭包命令说明" tabindex="-1"><a class="header-anchor" href="#闭包命令说明" aria-hidden="true">#</a> 闭包命令说明</h4><p>在定义基于闭包的命令时，可以使用 <code>purpose</code> 方法向命令添加描述。当你运行 <code>php artisan list</code> 或 <code>php artisan help</code> 命令时，将显示以下描述：</p><pre><code>Artisan::command(&#39;mail:send {user}&#39;, function (string $user) {
    // ...
})-&gt;purpose(&#39;Send a marketing email to a user&#39;);
</code></pre><p><a name="isolatable-commands"></a></p><h3 id="单例命令" tabindex="-1"><a class="header-anchor" href="#单例命令" aria-hidden="true">#</a> 单例命令</h3><blockquote><p><strong>警告</strong> 要使用该特性，应用必须使用 <code>memcached</code>、<code>redis</code>、<code>dynamodb</code>、<code>database</code>、<code>file</code> 或 <code>array</code> 作为默认的缓存驱动。另外，所有的服务器必须与同一个中央缓存服务器通信。</p></blockquote><p>有时您可能希望确保一次只能运行一个命令实例。为此，你可以在命令类上实现 <code>Illuminate\\Contracts\\Console\\Isolatable</code> 接口：</p><pre><code>&lt;?php

namespace App\\Console\\Commands;

use Illuminate\\Console\\Command;
use Illuminate\\Contracts\\Console\\Isolatable;

class SendEmails extends Command implements Isolatable
{
    // ...
}
</code></pre><p>当命令被标记为 <code>Isolatable</code> 时，Laravel 会自动为该命令添加 <code>--isolated</code> 选项。当命令中使用这一选项时，Laravel 会确保不会有该命令的其他实例同时运行。Laravel 通过在应用的默认缓存驱动中使用原子锁来实现这一功能。如果这一命令有其他实例在运行，则该命令不会执行；不过，该命令仍然会使用成功退出状态码退出：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan mail:send <span class="token number">1</span> <span class="token parameter variable">--isolated</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果你想自己指定命令无法执行时返回的退出状态码，你可用通过 <code>isolated</code> 选项提供：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan mail:send <span class="token number">1</span> <span class="token parameter variable">--isolated</span><span class="token operator">=</span><span class="token number">12</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="lock-expiration-time"></a></p><h4 id="原子锁到期时间" tabindex="-1"><a class="header-anchor" href="#原子锁到期时间" aria-hidden="true">#</a> 原子锁到期时间</h4><p>默认情况下，单例锁会在命令完成后过期。或者如果命令被打断且无法完成的话，锁会在一小时后过期。不过你也可以通过定义命令的 <code>isolationLockExpiresAt</code> 方法来调整过期时间：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">DateTimeInterface</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">DateInterval</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 定义单例锁的到期时间
 */</span>
<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">isolationLockExpiresAt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token class-name">DateTimeInterface</span><span class="token operator">|</span><span class="token class-name">DateInterval</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">addMinutes</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="defining-input-expectations"></a></p><h2 id="定义输入期望" tabindex="-1"><a class="header-anchor" href="#定义输入期望" aria-hidden="true">#</a> 定义输入期望</h2><p>在编写控制台命令时，通常是通过参数和选项来收集用户输入的。 Laravel 让你可以非常方便地在 <code>signature</code> 属性中定义你期望用户输入的内容。<code>signature</code> 属性允许使用单一且可读性高，类似路由的语法来定义命令的名称、参数和选项。</p><p><a name="arguments"></a></p><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3><p>用户提供的所有参数和选项都用花括号括起来。在下面的示例中，该命令定义了一个必需的参数 <code>user</code>:</p><pre><code>/**
 * 命令的名称及其标识
 *
 * @var string
 */
protected $signature = &#39;mail:send {user}&#39;;
</code></pre><p>你亦可创建可选参数或为参数定义默认值：</p><pre><code>// 可选参数...
&#39;mail:send {user?}&#39;

// 带有默认值的可选参数...
&#39;mail:send {user=foo}&#39;
</code></pre><p><a name="options"></a></p><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h3><p>选项类似于参数，是用户输入的另一种形式。在命令行中指定选项的时候，它们以两个短横线 (<code>--</code>) 作为前缀。这有两种类型的选项：接收值和不接受值。不接收值的选项就像是一个布尔「开关」。我们来看一下这种类型的选项的示例：</p><pre><code>/**
 * 命令的名称及其标识
 *
 * @var string
 */
protected $signature = &#39;mail:send {user} {--queue}&#39;;
</code></pre><p>在这个例子中，在调用 Artisan 命令时可以指定 <code>--queue</code> 的开关。如果传递了 <code>--queue</code> 选项，该选项的值将会是 <code>true</code>。否则，其值将会是 <code>false</code>：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan mail:send <span class="token number">1</span> <span class="token parameter variable">--queue</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="options-with-values"></a></p><h4 id="带值的选项" tabindex="-1"><a class="header-anchor" href="#带值的选项" aria-hidden="true">#</a> 带值的选项</h4><p>接下来，我们来看一下需要带值的选项。如果用户需要为一个选项指定一个值，则需要在选项名称的末尾追加一个 <code>=</code> 号：</p><pre><code>/**
 * 命令名称及标识
 *
 * @var string
 */
protected $signature = &#39;mail:send {user} {--queue=}&#39;;
</code></pre><p>在这个例子中，用户可以像如下所时的方式传递该选项的值。如果在调用命令时未指定该选项，则其值为 <code>null</code>：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan mail:send <span class="token number">1</span> <span class="token parameter variable">--queue</span><span class="token operator">=</span>default
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>你还可以在选项名称后指定其默认值。如果用户没有传递值给选项，将使用默认的值：</p><pre><code>&#39;mail:send {user} {--queue=default}&#39;
</code></pre><p><a name="option-shortcuts"></a></p><h4 id="选项简写" tabindex="-1"><a class="header-anchor" href="#选项简写" aria-hidden="true">#</a> 选项简写</h4><p>要在定义选项的时候指定一个简写，你可以在选项名前面使用 <code>|</code> 隔符将选项名称与其简写分隔开来：</p><pre><code>&#39;mail:send {user} {--Q|queue}&#39;
</code></pre><p>在终端上调用命令时，选项简写的前缀只用一个连字符，在为选项指定值时不应该包括<code>=</code>字符。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan mail:send <span class="token number">1</span> <span class="token parameter variable">-Qdefault</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="input-arrays"></a></p><h3 id="输入数组" tabindex="-1"><a class="header-anchor" href="#输入数组" aria-hidden="true">#</a> 输入数组</h3><p>如果你想要接收数组数组的参数或者选项，你可以使用 <code>*</code> 字符。首先，让我们看一下指定了一个数组参数的例子：</p><pre><code>&#39;mail:send {user*}&#39;
</code></pre><p>当调用这个方法的时候，<code>user</code> 参数的输入参数将按顺序传递给命令。例如，以下命令将会设置 <code>user</code> 的值为 <code>foo</code> 和 <code>bar</code> ：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan mail:send <span class="token number">1</span> <span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>*</code> 字符可以与可选的参数结合使用，允许您定义零个或多个参数实例：</p><pre><code>&#39;mail:send {user?*}&#39;
</code></pre><p><a name="option-arrays"></a></p><h4 id="选项数组" tabindex="-1"><a class="header-anchor" href="#选项数组" aria-hidden="true">#</a> 选项数组</h4><p>当定义需要多个输入值的选项时，传递给命令的每个选项值都应以选项名称作为前缀：</p><pre><code>&#39;mail:send {--id=*}&#39;
</code></pre><p>这样的命令可以通过传递多个 <code>--id</code> 参数来调用：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan mail:send <span class="token parameter variable">--id</span><span class="token operator">=</span><span class="token number">1</span> <span class="token parameter variable">--id</span><span class="token operator">=</span><span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="input-descriptions"></a></p><h3 id="输入说明" tabindex="-1"><a class="header-anchor" href="#输入说明" aria-hidden="true">#</a> 输入说明</h3><p>你可以通过使用冒号将参数名称与描述分隔来为输入参数和选项指定说明。如果你需要一些额外的空间来定义命令，可以将它自由的定义在多行中：</p><pre><code>/**
 * 控制台命令的名称和签名。
 *
 * @var string
 */
protected $signature = &#39;mail:send
                        {user : The ID of the user}
                        {--queue : Whether the job should be queued}&#39;;
</code></pre><p><a name="command-io"></a></p><h2 id="命令-i-o" tabindex="-1"><a class="header-anchor" href="#命令-i-o" aria-hidden="true">#</a> 命令 I/O</h2><p><a name="retrieving-input"></a></p><h3 id="检索输入" tabindex="-1"><a class="header-anchor" href="#检索输入" aria-hidden="true">#</a> 检索输入</h3><p>当命令在执行时，你可能需要访问命令所接受的参数和选项的值。为此，你可以使用 <code>argument</code> 和 <code>option</code> 方法。如果选项或参数不存在，将会返回<code>null</code>：</p><pre><code>/**
 * 执行控制台命令。
 */
public function handle(): void
{
    $userId = $this-&gt;argument(&#39;user&#39;);
}
</code></pre><p>如果你需要检索所有的参数做为 <code>array</code>，请调用 <code>arguments</code> 方法：</p><pre><code>$arguments = $this-&gt;arguments();
</code></pre><p>选项的检索与参数一样容易，使用 <code>option</code> 方法即可。如果要检索所有的选项做为数组，请调用 <code>options</code> 方法：</p><pre><code>// 检索一个指定的选项...
$queueName = $this-&gt;option(&#39;queue&#39;);

// 检索所有选项做为数组...
$options = $this-&gt;options();
</code></pre><p><a name="prompting-for-input"></a></p><h3 id="交互式输入" tabindex="-1"><a class="header-anchor" href="#交互式输入" aria-hidden="true">#</a> 交互式输入</h3><p>除了显示输出以外，你还可以要求用户在执行命令期间提供输入。<code>ask</code> 方法将询问用户指定的问题来接收用户输入，然后用户输入将会传到你的命令中：</p><pre><code>/**
 * 执行命令指令
 */
public function handle(): void
{
    $name = $this-&gt;ask(&#39;What is your name?&#39;);

    // ...
}
</code></pre><p><code>secret</code> 方法与 <code>ask</code> 相似，区别在于用户的输入将不可见。这个方法在需要输入一些诸如密码之类的敏感信息时是非常有用的：</p><pre><code>$password = $this-&gt;secret(&#39;What is the password?&#39;);
</code></pre><p><a name="asking-for-confirmation"></a></p><h4 id="请求确认" tabindex="-1"><a class="header-anchor" href="#请求确认" aria-hidden="true">#</a> 请求确认</h4><p>如果你需要请求用户进行一个简单的确认，可以使用 <code>confirm</code> 方法来实现。默认情况下，这个方法会返回 <code>false</code>。当然，如果用户输入 <code>y</code> 或 <code>yes</code>，这个方法将会返回 <code>true</code>。</p><pre><code>if ($this-&gt;confirm(&#39;Do you wish to continue?&#39;)) {
    // ...
}
</code></pre><p>如有必要，你可以通过将 <code>true</code> 作为第二个参数传递给 <code>confirm</code> 方法，这样就可以在默认情况下返回 <code>true</code>：</p><pre><code>if ($this-&gt;confirm(&#39;Do you wish to continue?&#39;, true)) {
    // ...
}
</code></pre><p><a name="auto-completion"></a></p><h4 id="自动补全" tabindex="-1"><a class="header-anchor" href="#自动补全" aria-hidden="true">#</a> 自动补全</h4><p><code>anticipate</code> 方法可用于为可能的选项提供自动补全功能。用户依然可以忽略自动补全的提示，进行任意回答：</p><pre><code>$name = $this-&gt;anticipate(&#39;What is your name?&#39;, [&#39;Taylor&#39;, &#39;Dayle&#39;]);
</code></pre><p>或者，你可以将一个闭包作为第二个参数传递给 <code>anticipate</code> 方法。每当用户键入字符时，闭包函数都会被调用。闭包函数应该接受一个包含用户输入的字符串形式的参数，并返回一个可供自动补全的选项的数组：</p><pre><code>$name = $this-&gt;anticipate(&#39;What is your address?&#39;, function (string $input) {
    // 返回自动完成配置...
});
</code></pre><p><a name="multiple-choice-questions"></a></p><h4 id="多选择问题" tabindex="-1"><a class="header-anchor" href="#多选择问题" aria-hidden="true">#</a> 多选择问题</h4><p>当询问问题时，如果你需要给用户一个预定义的选择，你可以使用 <code>choice</code> 方法。如果没有选项被选择，你可以设置数组索引的默认值去返回，通过这个方法的第三个参数去传入索引：</p><pre><code>$name = $this-&gt;choice(
    &#39;What is your name?&#39;,
    [&#39;Taylor&#39;, &#39;Dayle&#39;],
    $defaultIndex
);
</code></pre><p>此外， <code>choice</code> 方法接受第四和第五可选参数 ，用于确定选择有效响应的最大尝试次数以及是否允许多次选择：</p><pre><code>$name = $this-&gt;choice(
    &#39;What is your name?&#39;,
    [&#39;Taylor&#39;, &#39;Dayle&#39;],
    $defaultIndex,
    $maxAttempts = null,
    $allowMultipleSelections = false
);
</code></pre><p><a name="writing-output"></a></p><h3 id="文字输出" tabindex="-1"><a class="header-anchor" href="#文字输出" aria-hidden="true">#</a> 文字输出</h3><p>你可以使用 <code>line</code>，<code>info</code>，<code>comment</code>，<code>question</code> 和 <code>error</code> 方法，发送输出到控制台。 这些方法中的每一个都会使用合适的 ANSI 颜色以展示不同的用途。例如，我们要为用户展示一些常规信息。通常，<code>info</code> 将会以绿色文本在控制台展示。</p><pre><code>/**
 * Execute the console command.
 */
public function handle(): void
{
    // ...

    $this-&gt;info(&#39;The command was successful!&#39;);
}
</code></pre><p>输出错误信息，使用 <code>error</code> 方法。错误信息通常使用红色字体显示：</p><pre><code>$this-&gt;error(&#39;Something went wrong!&#39;);
</code></pre><p>你可以使用 <code>line</code> 方法输出无色文本：</p><pre><code>$this-&gt;line(&#39;Display this on the screen&#39;);
</code></pre><p>你可以使用 <code>newLine</code> 方法输出空白行：</p><pre><code>// 输出单行空白...
$this-&gt;newLine();

// 输出三行空白...
$this-&gt;newLine(3);
</code></pre><p><a name="tables"></a></p><h4 id="表格" tabindex="-1"><a class="header-anchor" href="#表格" aria-hidden="true">#</a> 表格</h4><p><code>table</code> 方法可以轻松正确地格式化多行/多列数据。你需要做的就是提供表的列名和数据，Laravel 会自动为你计算合适的表格宽度和高度：</p><pre><code>use App\\Models\\User;

$this-&gt;table(
    [&#39;Name&#39;, &#39;Email&#39;],
    User::all([&#39;name&#39;, &#39;email&#39;])-&gt;toArray()
);
</code></pre><p><a name="progress-bars"></a></p><h4 id="进度条" tabindex="-1"><a class="header-anchor" href="#进度条" aria-hidden="true">#</a> 进度条</h4><p>对于长时间运行的任务，显示一个进度条来告知用户任务的完成情况会很有帮助。使用 <code>withProgressBar</code> 方法，Laravel 将显示一个进度条，并在给定的可迭代值上推进每次迭代的进度：</p><pre><code>use App\\Models\\User;

$users = $this-&gt;withProgressBar(User::all(), function (User $user) {
    $this-&gt;performTask($user);
});
</code></pre><p>有时，你可能需要更多手动控制进度条的前进方式。首先，定义流程将迭代的步骤总数。然后，在处理完每个项目后推进进度条：</p><pre><code>$users = App\\Models\\User::all();

$bar = $this-&gt;output-&gt;createProgressBar(count($users));

$bar-&gt;start();

foreach ($users as $user) {
    $this-&gt;performTask($user);

    $bar-&gt;advance();
}

$bar-&gt;finish();
</code></pre>`,131),g={href:"https://symfony.com/doc/current/components/console/helpers/progressbar.html",target:"_blank",rel:"noopener noreferrer"},f=s(`<p><a name="registering-commands"></a></p><h2 id="注册命令" tabindex="-1"><a class="header-anchor" href="#注册命令" aria-hidden="true">#</a> 注册命令</h2><p>你的所有控制台命令都在您的应用程序的 <code>App\\Console\\Kernel</code> 类中注册，这是你的应用程序的「控制台内核」。在此类的 <code>commands</code> 方法中，你将看到对内核的 <code>load</code> 方法的调用。 <code>load</code> 方法将扫描 <code>app/Console/Commands</code> 目录并自动将其中包含的每个命令注册到 Artisan。 你甚至可以自由地调用 <code>load</code> 方法来扫描其他目录以查找 Artisan 命令：</p><pre><code>/**
 * Register the commands for the application.
 */
protected function commands(): void
{
    $this-&gt;load(__DIR__.&#39;/Commands&#39;);
    $this-&gt;load(__DIR__.&#39;/../Domain/Orders/Commands&#39;);

    // ...
}
</code></pre><p>如有必要，你可以通过将命令的类名添加到 <code>App\\Console\\Kernel</code> 类中的 <code>$commands</code> 属性来手动注册命令。如果你的内核上尚未定义此属性，则应手动定义它。当 Artisan 启动时，此属性中列出的所有命令将由 <a href="./container">服务容器</a> 解析并注册到 Artisan：</p><pre><code>protected $commands = [
    Commands\\SendEmails::class
];
</code></pre><p><a name="programmatically-executing-commands"></a></p><h2 id="以编程方式执行命令" tabindex="-1"><a class="header-anchor" href="#以编程方式执行命令" aria-hidden="true">#</a> 以编程方式执行命令</h2><p>有时你可能希望在 CLI 之外执行 Artisan 命令。例如，你可能希望从路由或控制器执行 Artisan 命令。你可以使用 <code>Artisan</code> 外观上的 <code>call</code> 方法来完成此操作。 <code>call</code> 方法接受命令的签名名称或类名作为其第一个参数，以及一个命令参数数组作为第二个参数。将返回退出代码：</p><pre><code>use Illuminate\\Support\\Facades\\Artisan;

Route::post(&#39;/user/{user}/mail&#39;, function (string $user) {
    $exitCode = Artisan::call(&#39;mail:send&#39;, [
        &#39;user&#39; =&gt; $user, &#39;--queue&#39; =&gt; &#39;default&#39;
    ]);

    // ...
});
</code></pre><p>或者，你可以将整个 Artisan 命令作为字符串传递给 <code>call</code> 方法：</p><pre><code>Artisan::call(&#39;mail:send 1 --queue=default&#39;);
</code></pre><p><a name="passing-array-values"></a></p><h4 id="传递数组值" tabindex="-1"><a class="header-anchor" href="#传递数组值" aria-hidden="true">#</a> 传递数组值</h4><p>如果你的命令定义了一个接受数组的选项，你可以将一组值传递给该选项：</p><pre><code>use Illuminate\\Support\\Facades\\Artisan;

Route::post(&#39;/mail&#39;, function () {
    $exitCode = Artisan::call(&#39;mail:send&#39;, [
        &#39;--id&#39; =&gt; [5, 13]
    ]);
});
</code></pre><p><a name="passing-boolean-values"></a></p><h4 id="传递布尔值" tabindex="-1"><a class="header-anchor" href="#传递布尔值" aria-hidden="true">#</a> 传递布尔值</h4><p>如果你需要指定不接受字符串值的选项的值，例如 <code>migrate:refresh</code> 命令上的 <code>--force</code> 标志，则应传递 <code>true</code> 或 <code>false</code> 作为 选项：</p><pre><code>$exitCode = Artisan::call(&#39;migrate:refresh&#39;, [
    &#39;--force&#39; =&gt; true,
]);
</code></pre><p><a name="queueing-artisan-commands"></a></p><h4 id="队列-artisan-命令" tabindex="-1"><a class="header-anchor" href="#队列-artisan-命令" aria-hidden="true">#</a> 队列 Artisan 命令</h4><p>使用 <code>Artisan</code> 门面的 <code>queue</code> 方法，你甚至可以对 Artisan 命令进行排队，以便你的 <a href="./queues">队列工作者</a> 在后台处理它们。在使用此方法之前，请确保你已配置队列并正在运行队列侦听器：</p><pre><code>use Illuminate\\Support\\Facades\\Artisan;

Route::post(&#39;/user/{user}/mail&#39;, function (string $user) {
    Artisan::queue(&#39;mail:send&#39;, [
        &#39;user&#39; =&gt; $user, &#39;--queue&#39; =&gt; &#39;default&#39;
    ]);

    // ...
});
</code></pre><p>使用 <code>onConnection</code> 和 <code>onQueue</code> 方法，你可以指定 Artisan 命令应分派到的连接或队列：</p><pre><code>Artisan::queue(&#39;mail:send&#39;, [
    &#39;user&#39; =&gt; 1, &#39;--queue&#39; =&gt; &#39;default&#39;
])-&gt;onConnection(&#39;redis&#39;)-&gt;onQueue(&#39;commands&#39;);
</code></pre><p><a name="calling-commands-from-other-commands"></a></p><h3 id="从其他命令调用命令" tabindex="-1"><a class="header-anchor" href="#从其他命令调用命令" aria-hidden="true">#</a> 从其他命令调用命令</h3><p>有时你可能希望从现有的 Artisan 命令调用其他命令。你可以使用 <code>call</code> 方法来执行此操作。这个 <code>call</code> 方法接受命令名称和命令参数/选项数组：</p><pre><code>/**
 * Execute the console command.
 */
public function handle(): void
{
    $this-&gt;call(&#39;mail:send&#39;, [
        &#39;user&#39; =&gt; 1, &#39;--queue&#39; =&gt; &#39;default&#39;
    ]);

    // ...
}
</code></pre><p>如果你想调用另一个控制台命令并禁止其所有输出，你可以使用 <code>callSilently</code> 方法。 <code>callSilently</code> 方法与 <code>call</code> 方法具有相同的签名：</p><pre><code>$this-&gt;callSilently(&#39;mail:send&#39;, [
    &#39;user&#39; =&gt; 1, &#39;--queue&#39; =&gt; &#39;default&#39;
]);
</code></pre><p><a name="signal-handling"></a></p><h2 id="信号处理" tabindex="-1"><a class="header-anchor" href="#信号处理" aria-hidden="true">#</a> 信号处理</h2><p>正如你可能知道的，操作系统允许向运行中的进程发送信号。例如，「SIGTERM」信号是操作系统要求程序终止的方式。如果你想在 Artisan 控制台命令中监听信号，并在信号发生时执行代码，你可以使用 <code>trap</code> 方法。</p><pre><code>/**
 * 执行控制台命令。
 */
public function handle(): void
{
    $this-&gt;trap(SIGTERM, fn () =&gt; $this-&gt;shouldKeepRunning = false);

    while ($this-&gt;shouldKeepRunning) {
        // ...
    }
}
</code></pre><p>为了一次监听多个信号，你可以向 <code>trap</code> 方法提供一个信号数组。</p><pre><code>$this-&gt;trap([SIGTERM, SIGQUIT], function (int $signal) {
    $this-&gt;shouldKeepRunning = false;

    dump($signal); // SIGTERM / SIGQUIT
});
</code></pre><p><a name="stub-customization"></a></p><h2 id="stub-定制" tabindex="-1"><a class="header-anchor" href="#stub-定制" aria-hidden="true">#</a> Stub 定制</h2><p>Artisan 控制台的 <code>make</code> 命令用于创建各种类，例如控制器、作业、迁移和测试。这些类是使用「stub」文件生成的，这些文件中会根据你的输入填充值。但是，你可能需要对 Artisan 生成的文件进行少量更改。为此，你可以使用以下 <code>stub:publish</code> 命令将最常见的 Stub 命令发布到你的应用程序中，以便可以自定义它们：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan stub:publish
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>已发布的 stub 将存放于你的应用根目录下的 <code>stubs</code> 目录中。对这些 stub 进行任何改动都将在你使用 Artisan <code>make</code> 命令生成相应的类的时候反映出来。</p><p><a name="events"></a></p><h2 id="事件" tabindex="-1"><a class="header-anchor" href="#事件" aria-hidden="true">#</a> 事件</h2><p>Artisan 在运行命令时会调度三个事件： <code>Illuminate\\Console\\Events\\ArtisanStarting</code>，<code>Illuminate\\Console\\Events\\CommandStarting</code> 和 <code>Illuminate\\Console\\Events\\CommandFinished</code>。当 Artisan 开始运行时，会立即调度 <code>ArtisanStarting</code> 事件。接下来，在命令运行之前立即调度 <code>CommandStarting</code> 事件。最后，一旦命令执行完毕，就会调度 <code>CommandFinished</code> 事件。</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment">// 针对命令显示帮助信息</span>
php artisan <span class="token operator">--</span>help <span class="token keyword">OR</span> <span class="token operator">-</span>h
<span class="token comment">// 抑制输出信息</span>
php artisan <span class="token operator">--</span>quiet <span class="token keyword">OR</span> <span class="token operator">-</span>q
<span class="token comment">// 打印 Laravel 的版本信息</span>
php artisan <span class="token operator">--</span>version <span class="token keyword">OR</span> <span class="token operator">-</span><span class="token constant">V</span>
<span class="token comment">// 不询问任何交互性的问题</span>
php artisan <span class="token operator">--</span>no<span class="token operator">-</span>interaction <span class="token keyword">OR</span> <span class="token operator">-</span>n
<span class="token comment">// 强制输出 ANSI 格式</span>
php artisan <span class="token operator">--</span>ansi
<span class="token comment">// 禁止输出 ANSI 格式</span>
php artisan <span class="token operator">--</span>no<span class="token operator">-</span>ansi
<span class="token comment">// 显示当前命令行运行的环境</span>
php artisan <span class="token operator">--</span>env
<span class="token comment">// -v|vv|vvv 通过增加 v 的个数来控制命令行输出内容的详尽情况: 1 个代表正常输出, 2 个代表输出更多消息, 3 个代表调试</span>
php artisan <span class="token operator">--</span>verbose
<span class="token comment">// 移除编译优化过的文件 (storage/frameworks/compiled.php)</span>
php artisan clear<span class="token operator">-</span>compiled
<span class="token comment">// 显示当前框架运行的环境</span>
php artisan env
<span class="token comment">// 显示某个命令的帮助信息</span>
php artisan help
<span class="token comment">// 显示所有可用的命令</span>
php artisan <span class="token keyword">list</span>
<span class="token comment">// 进入应用交互模式</span>
php artisan tinker
<span class="token comment">// 配合 dump() 函数调试数据</span>
php artisan dump<span class="token operator">-</span>server
<span class="token comment">// 进入维护模式</span>
php artisan down
<span class="token comment">// 退出维护模式</span>
php artisan up
<span class="token comment">// 优化框架性能</span>
 <span class="token comment">// --force    强制编译已写入文件 (storage/frameworks/compiled.php)</span>
 <span class="token comment">// --psr      不对 Composer 的 dump-autoload 进行优化</span>
php artisan optimize <span class="token punctuation">[</span><span class="token operator">--</span>force<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">--</span>psr<span class="token punctuation">]</span>
<span class="token comment">// 更改前端预设</span>
<span class="token comment">// type_name (可以是 none, bootstrap, vue, react)</span>
php artisan preset <span class="token punctuation">[</span>options<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">--</span><span class="token punctuation">]</span> type_name
<span class="token comment">// 启动内置服务器</span>
php artisan serve
<span class="token comment">// 更改默认端口</span>
php artisan serve <span class="token operator">--</span>port <span class="token number">8080</span>
<span class="token comment">// 使其在本地服务器外也可正常工作</span>
php artisan serve <span class="token operator">--</span>host <span class="token number">0.0</span><span class="token number">.0</span><span class="token number">.0</span>
<span class="token comment">// 更改应用命名空间</span>
php artisan app<span class="token punctuation">:</span>name <span class="token keyword">namespace</span>
<span class="token comment">// 清除过期的密码重置令牌</span>
php artisan auth<span class="token punctuation">:</span>clear<span class="token operator">-</span>resets

<span class="token comment">// 清空应用缓存</span>
php artisan cache<span class="token punctuation">:</span>clear
<span class="token comment">// 移除 key_name 对应的缓存</span>
php artisan cache<span class="token punctuation">:</span>forget key_name <span class="token punctuation">[</span><span class="token operator">&lt;</span>store<span class="token operator">&gt;</span><span class="token punctuation">]</span>
<span class="token comment">// 创建缓存数据库表 migration</span>
php artisan cache<span class="token punctuation">:</span>table

<span class="token comment">// 合并所有的配置信息为一个，提高加载速度</span>
php artisan config<span class="token punctuation">:</span>cache
<span class="token comment">// 移除配置缓存文件</span>
php artisan config<span class="token punctuation">:</span>clear

<span class="token comment">// 程序内部调用 Artisan 命令</span>
<span class="token variable">$exitCode</span> <span class="token operator">=</span> <span class="token class-name static-context">Artisan</span><span class="token operator">::</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;config:cache&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 运行所有的 seed 假数据生成类</span>
 <span class="token comment">// --class      可以指定运行的类，默认是: &quot;DatabaseSeeder&quot;</span>
 <span class="token comment">// --database   可以指定数据库</span>
 <span class="token comment">// --force      当处于生产环境时强制执行操作</span>
php artisan db<span class="token punctuation">:</span>seed <span class="token punctuation">[</span><span class="token operator">--</span><span class="token keyword">class</span><span class="token punctuation">[</span><span class="token operator">=</span><span class="token string double-quoted-string">&quot;...&quot;</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">--</span>database<span class="token punctuation">[</span><span class="token operator">=</span><span class="token string double-quoted-string">&quot;...&quot;</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">--</span>force<span class="token punctuation">]</span>

<span class="token comment">// 基于注册的信息，生成遗漏的 events 和 handlers</span>
php artisan event<span class="token punctuation">:</span>generate
<span class="token comment">// 罗列所有事件和监听器</span>
php artisan event<span class="token punctuation">:</span><span class="token keyword">list</span>
<span class="token comment">// 缓存事件和监听器</span>
php artisan event<span class="token punctuation">:</span>cache
<span class="token comment">// 清除事件和监听器缓存</span>
php artisan event<span class="token punctuation">:</span>clear

<span class="token comment">// 生成新的处理器类</span>
 <span class="token comment">// --command      需要处理器处理的命令类名字</span>
php artisan handler<span class="token punctuation">:</span>command <span class="token punctuation">[</span><span class="token operator">--</span>command<span class="token operator">=</span><span class="token string double-quoted-string">&quot;...&quot;</span><span class="token punctuation">]</span> name
<span class="token comment">// 创建一个新的时间处理器类</span>
 <span class="token comment">// --event        需要处理器处理的事件类名字</span>
 <span class="token comment">// --queued       需要处理器使用队列话处理的事件类名字</span>
php artisan handler<span class="token punctuation">:</span>event <span class="token punctuation">[</span><span class="token operator">--</span>event<span class="token operator">=</span><span class="token string double-quoted-string">&quot;...&quot;</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">--</span>queued<span class="token punctuation">]</span> name

<span class="token comment">// 生成应用的 key（会覆盖）</span>
php artisan key<span class="token punctuation">:</span>generate

<span class="token comment">// 发布本地化翻译文件到 resources 文件下</span>
<span class="token comment">// locales: 逗号分隔，如 zh_CN,tk,th [默认是: &quot;all&quot;]</span>
php artisan lang<span class="token punctuation">:</span>publish <span class="token punctuation">[</span>options<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">--</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">&lt;</span>locales<span class="token operator">&gt;</span><span class="token punctuation">]</span>

<span class="token comment">// 创建用户认证脚手架</span>
php artisan make<span class="token punctuation">:</span>auth
<span class="token comment">// 创建 Channel 类</span>
php artisan make<span class="token punctuation">:</span>channel name
<span class="token comment">// 在默认情况下, 这将创建未加入队列的自处理命令</span>
 <span class="token comment">// 通过 --handler 标识来生成一个处理器, 用 --queued 来使其入队列.</span>
php artisan make<span class="token punctuation">:</span>command <span class="token punctuation">[</span><span class="token operator">--</span>handler<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">--</span>queued<span class="token punctuation">]</span> name
<span class="token comment">// 创建一个新的 Artisan 命令</span>
 <span class="token comment">//  --command     命令被调用的名称。 (默认为: &quot;command:name&quot;)</span>
php artisan make<span class="token punctuation">:</span>console <span class="token punctuation">[</span><span class="token operator">--</span>command<span class="token punctuation">[</span><span class="token operator">=</span><span class="token string double-quoted-string">&quot;...&quot;</span><span class="token punctuation">]</span><span class="token punctuation">]</span> name
<span class="token comment">// 创建一个新的资源控制器</span>
 <span class="token comment">// --plain      生成一个空白的控制器类</span>
php artisan make<span class="token punctuation">:</span>controller <span class="token punctuation">[</span><span class="token operator">--</span>plain<span class="token punctuation">]</span> name
php artisan make<span class="token punctuation">:</span>controller App\\\\Admin\\\\Http\\\\Controllers\\\\DashboardController
<span class="token comment">// 创建一个新的事件类</span>
php artisan make<span class="token punctuation">:</span>event name
<span class="token comment">// 创建异常类</span>
php artisan make<span class="token punctuation">:</span>exception name
<span class="token comment">// 创建模型工厂类</span>
php artisan make<span class="token punctuation">:</span>factory name
<span class="token comment">// 创建一个队列任务文件</span>
php artisan make<span class="token punctuation">:</span>job 
<span class="token comment">// 创建一个监听者类</span>
php artisan make<span class="token punctuation">:</span>listener name
<span class="token comment">// 创建一个新的邮件类</span>
php artisan make<span class="token punctuation">:</span>mail name
<span class="token comment">// 创建一个新的中间件类</span>
php artisan make<span class="token punctuation">:</span>middleware name
<span class="token comment">// 创建一个新的迁移文件</span>
 <span class="token comment">// --create     将被创建的数据表.</span>
 <span class="token comment">// --table      将被迁移的数据表.</span>
php artisan make<span class="token punctuation">:</span>migration <span class="token punctuation">[</span><span class="token operator">--</span>create<span class="token punctuation">[</span><span class="token operator">=</span><span class="token string double-quoted-string">&quot;...&quot;</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">--</span>table<span class="token punctuation">[</span><span class="token operator">=</span><span class="token string double-quoted-string">&quot;...&quot;</span><span class="token punctuation">]</span><span class="token punctuation">]</span> name
<span class="token comment">// 创建一个新的 Eloquent 模型类</span>
php artisan make<span class="token punctuation">:</span>model User
php artisan make<span class="token punctuation">:</span>model Models<span class="token operator">/</span>User
<span class="token comment">// 新建一个消息通知类</span>
php artisan make<span class="token punctuation">:</span>notification TopicRepliedNotification
<span class="token comment">// 新建一个模型观察者类</span>
php artisan make<span class="token punctuation">:</span>observer UserObserver
<span class="token comment">// 创建授权策略</span>
php artisan make<span class="token punctuation">:</span>policy PostPolicy
<span class="token comment">// 创建一个新的服务提供者类</span>
php artisan make<span class="token punctuation">:</span>provider name
<span class="token comment">// 创建一个新的表单请求类</span>
php artisan make<span class="token punctuation">:</span>request name
<span class="token comment">// 创建一个 API 资源类</span>
php artisan make<span class="token punctuation">:</span>resource name
<span class="token comment">// 新建验证规则类</span>
php artisan make<span class="token punctuation">:</span>rule name
<span class="token comment">// 创建模型脚手架</span>
<span class="token comment">// &lt;name&gt; 模型名称，如 Post</span>
<span class="token comment">// -s, --schema=SCHEMA 表结构如：--schema=&quot;title:string&quot;</span>
<span class="token comment">// -a, --validator[=VALIDATOR] 表单验证，如：--validator=&quot;title:required&quot;</span>
<span class="token comment">// -l, --localization[=LOCALIZATION] 设置本地化信息，如：--localization=&quot;key:value&quot;</span>
<span class="token comment">// -b, --lang[=LANG] 设置本地化语言 --lang=&quot;en&quot;</span>
<span class="token comment">// -f, --form[=FORM] 使用 Illumintate/Html Form 来生成表单选项，默认为 false</span>
<span class="token comment">// -p, --prefix[=PREFIX] 表结构前缀，默认 false</span>
php artisan make<span class="token punctuation">:</span>scaffold  <span class="token punctuation">[</span>options<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">--</span><span class="token punctuation">]</span> <span class="token operator">&lt;</span>name<span class="token operator">&gt;</span>
<span class="token comment">// 生成数据填充类</span>
php artisan make<span class="token punctuation">:</span>seeder
<span class="token comment">// 生成测试类</span>
php artisan make<span class="token punctuation">:</span>test

<span class="token comment">// 数据库迁移</span>
 <span class="token comment">// --database   指定数据库连接（下同）</span>
 <span class="token comment">// --force      当处于生产环境时强制执行，不询问（下同）</span>
 <span class="token comment">// --path       指定单独迁移文件地址</span>
 <span class="token comment">// --pretend    把将要运行的 SQL 语句打印出来（下同）</span>
 <span class="token comment">// --seed       Seed 任务是否需要被重新运行（下同）</span>
php artisan migrate <span class="token punctuation">[</span><span class="token operator">--</span>database<span class="token punctuation">[</span><span class="token operator">=</span><span class="token string double-quoted-string">&quot;...&quot;</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">--</span>force<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">--</span>path<span class="token punctuation">[</span><span class="token operator">=</span><span class="token string double-quoted-string">&quot;...&quot;</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">--</span>pretend<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">--</span>seed<span class="token punctuation">]</span>
<span class="token comment">// 创建迁移数据库表</span>
php artisan migrate<span class="token punctuation">:</span>install <span class="token punctuation">[</span><span class="token operator">--</span>database<span class="token punctuation">[</span><span class="token operator">=</span><span class="token string double-quoted-string">&quot;...&quot;</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
<span class="token comment">// Drop 所有数据表并重新运行 Migration</span>
php artisan migrate<span class="token punctuation">:</span>fresh
<span class="token comment">// 重置并重新运行所有的 migrations</span>
 <span class="token comment">// --seeder     指定主 Seeder 的类名</span>
php artisan migrate<span class="token punctuation">:</span>refresh <span class="token punctuation">[</span><span class="token operator">--</span>database<span class="token punctuation">[</span><span class="token operator">=</span><span class="token string double-quoted-string">&quot;...&quot;</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">--</span>force<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">--</span>seed<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">--</span>seeder<span class="token punctuation">[</span><span class="token operator">=</span><span class="token string double-quoted-string">&quot;...&quot;</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
<span class="token comment">// 回滚所有的数据库迁移</span>
php artisan migrate<span class="token punctuation">:</span>reset <span class="token punctuation">[</span><span class="token operator">--</span>database<span class="token punctuation">[</span><span class="token operator">=</span><span class="token string double-quoted-string">&quot;...&quot;</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">--</span>force<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">--</span>pretend<span class="token punctuation">]</span>
<span class="token comment">// 回滚最最近一次运行的迁移任务</span>
php artisan migrate<span class="token punctuation">:</span>rollback <span class="token punctuation">[</span><span class="token operator">--</span>database<span class="token punctuation">[</span><span class="token operator">=</span><span class="token string double-quoted-string">&quot;...&quot;</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">--</span>force<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">--</span>pretend<span class="token punctuation">]</span>
<span class="token comment">// migrations 数据库表信息</span>
php artisan migrate<span class="token punctuation">:</span>status

<span class="token comment">// 为数据库消息通知创建一个表迁移类</span>
php artisan notifications<span class="token punctuation">:</span>table
<span class="token comment">// 清除缓存的 bootstrap 文件</span>
php artisan optimize<span class="token punctuation">:</span>clear
<span class="token comment">// 扩展包自动发现</span>
php artisan package<span class="token punctuation">:</span>discover

<span class="token comment">// 为队列数据库表创建一个新的迁移</span>
php artisan queue<span class="token punctuation">:</span>table
<span class="token comment">// 监听指定的队列</span>
 <span class="token comment">// --queue      被监听的队列</span>
 <span class="token comment">// --delay      给执行失败的任务设置延时时间 (默认为零: 0)</span>
 <span class="token comment">// --memory     内存限制大小，单位为 MB (默认为: 128)</span>
 <span class="token comment">// --timeout    指定任务运行超时秒数 (默认为: 60)</span>
 <span class="token comment">// --sleep      等待检查队列任务的秒数 (默认为: 3)</span>
 <span class="token comment">// --tries      任务记录失败重试次数 (默认为: 0)</span>
php artisan queue<span class="token punctuation">:</span>listen <span class="token punctuation">[</span><span class="token operator">--</span>queue<span class="token punctuation">[</span><span class="token operator">=</span><span class="token string double-quoted-string">&quot;...&quot;</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">--</span>delay<span class="token punctuation">[</span><span class="token operator">=</span><span class="token string double-quoted-string">&quot;...&quot;</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">--</span>memory<span class="token punctuation">[</span><span class="token operator">=</span><span class="token string double-quoted-string">&quot;...&quot;</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">--</span>timeout<span class="token punctuation">[</span><span class="token operator">=</span><span class="token string double-quoted-string">&quot;...&quot;</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">--</span>sleep<span class="token punctuation">[</span><span class="token operator">=</span><span class="token string double-quoted-string">&quot;...&quot;</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">--</span>tries<span class="token punctuation">[</span><span class="token operator">=</span><span class="token string double-quoted-string">&quot;...&quot;</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>connection<span class="token punctuation">]</span>
<span class="token comment">// 查看所有执行失败的队列任务</span>
php artisan queue<span class="token punctuation">:</span>failed
<span class="token comment">// 为执行失败的数据表任务创建一个迁移</span>
php artisan queue<span class="token punctuation">:</span>failed<span class="token operator">-</span>table
<span class="token comment">// 清除所有执行失败的队列任务</span>
php artisan queue<span class="token punctuation">:</span>flush
<span class="token comment">// 删除一个执行失败的队列任务</span>
php artisan queue<span class="token punctuation">:</span>forget
<span class="token comment">// 在当前的队列任务执行完毕后, 重启队列的守护进程</span>
php artisan queue<span class="token punctuation">:</span>restart
<span class="token comment">// 对指定 id 的执行失败的队列任务进行重试(id: 失败队列任务的 ID)</span>
php artisan queue<span class="token punctuation">:</span>retry id
<span class="token comment">// 指定订阅 Iron.io 队列的链接</span>
 <span class="token comment">// queue: Iron.io 的队列名称.</span>
 <span class="token comment">// url: 将被订阅的 URL.</span>
 <span class="token comment">// --type       指定队列的推送类型.</span>
php artisan queue<span class="token punctuation">:</span>subscribe <span class="token punctuation">[</span><span class="token operator">--</span>type<span class="token punctuation">[</span><span class="token operator">=</span><span class="token string double-quoted-string">&quot;...&quot;</span><span class="token punctuation">]</span><span class="token punctuation">]</span> queue url
<span class="token comment">// 处理下一个队列任务</span>
 <span class="token comment">// --queue      被监听的队列</span>
 <span class="token comment">// --daemon     在后台模式运行</span>
 <span class="token comment">// --delay      给执行失败的任务设置延时时间 (默认为零: 0)</span>
 <span class="token comment">// --force      强制在「维护模式下」运行</span>
 <span class="token comment">// --memory     内存限制大小，单位为 MB (默认为: 128)</span>
 <span class="token comment">// --sleep      当没有任务处于有效状态时, 设置其进入休眠的秒数 (默认为: 3)</span>
 <span class="token comment">// --tries      任务记录失败重试次数 (默认为: 0)</span>
php artisan queue<span class="token punctuation">:</span>work <span class="token punctuation">[</span><span class="token operator">--</span>queue<span class="token punctuation">[</span><span class="token operator">=</span><span class="token string double-quoted-string">&quot;...&quot;</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">--</span>daemon<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">--</span>delay<span class="token punctuation">[</span><span class="token operator">=</span><span class="token string double-quoted-string">&quot;...&quot;</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">--</span>force<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">--</span>memory<span class="token punctuation">[</span><span class="token operator">=</span><span class="token string double-quoted-string">&quot;...&quot;</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">--</span>sleep<span class="token punctuation">[</span><span class="token operator">=</span><span class="token string double-quoted-string">&quot;...&quot;</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">--</span>tries<span class="token punctuation">[</span><span class="token operator">=</span><span class="token string double-quoted-string">&quot;...&quot;</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>connection<span class="token punctuation">]</span>

<span class="token comment">// 生成路由缓存文件来提升路由效率</span>
php artisan route<span class="token punctuation">:</span>cache
<span class="token comment">// 移除路由缓存文件</span>
php artisan route<span class="token punctuation">:</span>clear
<span class="token comment">// 显示已注册过的路由</span>
php artisan route<span class="token punctuation">:</span><span class="token keyword">list</span>

<span class="token comment">// 运行计划命令</span>
php artisan schedule<span class="token punctuation">:</span>run

<span class="token comment">// 为 session 数据表生成迁移文件</span>
php artisan session<span class="token punctuation">:</span>table
<span class="token comment">// 创建 &quot;public/storage&quot; 到 &quot;storage/app/public&quot; 的软链接</span>
php artisan storage<span class="token punctuation">:</span>link

<span class="token comment">// 从 vendor 的扩展包中发布任何可发布的资源</span>
 <span class="token comment">// --force        重写所有已存在的文件</span>
 <span class="token comment">// --provider     指定你想要发布资源文件的服务提供者</span>
 <span class="token comment">// --tag          指定你想要发布标记资源.</span>
php artisan vendor<span class="token punctuation">:</span>publish <span class="token punctuation">[</span><span class="token operator">--</span>force<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">--</span>provider<span class="token punctuation">[</span><span class="token operator">=</span><span class="token string double-quoted-string">&quot;...&quot;</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">--</span>tag<span class="token punctuation">[</span><span class="token operator">=</span><span class="token string double-quoted-string">&quot;...&quot;</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
php artisan tail <span class="token punctuation">[</span><span class="token operator">--</span>path<span class="token punctuation">[</span><span class="token operator">=</span><span class="token string double-quoted-string">&quot;...&quot;</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">--</span>lines<span class="token punctuation">[</span><span class="token operator">=</span><span class="token string double-quoted-string">&quot;...&quot;</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>connection<span class="token punctuation">]</span>

<span class="token comment">// 缓存视图文件以提高效率</span>
php artisan view<span class="token punctuation">:</span>cache
<span class="token comment">// 清除视图文件缓存</span>
php artisan view<span class="token punctuation">:</span>clear
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,47);function q(x,$){const e=p("ExternalLinkIcon");return i(),c("div",null,[r,n("blockquote",null,[n("p",null,[d,u,a(" 需要能与 Laravel 交互的图形用户界面吗？试试 "),n("a",m,[a("Tinkerwell"),t(e)]),a("!")])]),v,n("p",null,[a("让我们看一个示例命令。请注意，我们能够通过命令的 "),k,a(" 方法引入我们需要的任何依赖项。Laravel "),n("a",h,[a("服务容器"),t(e)]),a(" 将自动注入此方法签名中带有类型提示的所有依赖项：")]),b,n("blockquote",null,[n("p",null,[a("**技巧：**有关更多高级选项，请查看 "),n("a",g,[a("Symfony 进度条组件文档"),t(e)]),a(".")])]),f])}const C=o(l,[["render",q],["__file","artisan.html.vue"]]);export{C as default};
