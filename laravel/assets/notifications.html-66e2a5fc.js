import{_ as t}from"./notification-example-2-531a8633.js";import{_ as c}from"./plugin-vue_export-helper-c27b6911.js";import{r as d,o as s,c as r,b as a,d as e,e as i,a as o}from"./app-8cdff07c.js";const l={},p=o('<h1 id="消息通知" tabindex="-1"><a class="header-anchor" href="#消息通知" aria-hidden="true">#</a> 消息通知</h1><ul><li><a href="#introduction">介绍</a></li><li><a href="#generating-notifications">生成通知</a></li><li><a href="#sending-notifications">发送通知</a></li><li><a href="#using-the-notifiable-trait">使用可通知特征</a></li><li><a href="#using-the-notification-facade">使用通知门面</a></li><li><a href="#specifying-delivery-channels">指定传送渠道</a></li><li><a href="#queueing-notifications">通知排队</a></li><li><a href="#on-demand-notifications">按需通知</a></li><li><a href="#mail-notifications">邮件通知</a></li><li><a href="#formatting-mail-messages">格式化邮件消息</a></li><li><a href="#customizing-the-sender">自定义发件人</a></li><li><a href="#customizing-the-recipient">自定义收件人</a></li><li><a href="#customizing-the-subject">自定义主题</a></li><li><a href="#customizing-the-mailer">自定义邮件程序</a></li><li><a href="#customizing-the-templates">自定义模板</a></li><li><a href="#mail-attachments">附件</a></li><li><a href="#adding-tags-metadata">添加标签和元数据</a></li><li><a href="#customizing-the-symfony-message">自定义 Symfony 消息</a></li><li><a href="#using-mailables">使用 Mailables</a></li><li><a href="#previewing-mail-notifications">预览邮件通知</a></li><li><a href="#markdown-mail-notifications">Markdown 邮件通知</a></li><li><a href="#generating-the-message">生成消息</a></li><li><a href="#writing-the-message">撰写消息</a></li><li><a href="#customizing-the-components">自定义组件</a></li><li><a href="#database-notifications">数据库通知</a></li><li><a href="#database-prerequisites">先决条件</a></li><li><a href="#formatting-database-notifications">格式化数据库通知</a></li><li><a href="#accessing-the-notifications">访问通知</a></li><li><a href="#marking-notifications-as-read">将通知标记为已读</a></li><li><a href="#broadcast-notifications">广播通知</a></li><li><a href="#broadcast-prerequisites">先决条件</a></li><li><a href="#formatting-broadcast-notifications">格式化广播通知</a></li><li><a href="#listening-for-notifications">监听通知</a></li><li><a href="#sms-notifications">短信通知</a></li><li><a href="#sms-prerequisites">先决条件</a></li><li><a href="#formatting-sms-notifications">格式化短信通知</a></li><li><a href="#formatting-shortcode-notifications">格式化短代码通知</a></li><li><a href="#customizing-the-from-number">自定义「来源」号码</a></li><li><a href="#adding-a-client-reference">添加客户参考</a></li><li><a href="#routing-sms-notifications">路由短信通知</a></li><li><a href="#slack-notifications">Slack 通知</a></li><li><a href="#slack-prerequisites">先决条件</a></li><li><a href="#formatting-slack-notifications">格式化 Slack 通知</a></li><li><a href="#slack-attachments">Slack 附件</a></li><li><a href="#routing-slack-notifications">路由 Slack 通知</a></li><li><a href="#localizing-notifications">本地化通知</a></li><li><a href="#testing">测试</a></li><li><a href="#notification-events">通知事件</a></li><li><a href="#custom-channels">自定义渠道</a></li></ul><p><a name="introduction"></a></p><h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2>',4),h=a("a",{href:"./mail"},"发送电子邮件",-1),u={href:"https://www.vonage.com/communications-apis/",target:"_blank",rel:"noopener noreferrer"},f={href:"https://slack.com/",target:"_blank",rel:"noopener noreferrer"},g={href:"https://laravel-notification-channels.com/about/#suggesting-a-new-channel",target:"_blank",rel:"noopener noreferrer"},m=o(`<p>通常，通知应该是简短的信息性消息，用于通知用户应用中发生的事情。例如，如果你正在编写一个账单应用，则可以通过邮件和短信频道向用户发送一个「支付凭证」通知。</p><p><a name="generating-notifications"></a></p><h2 id="创建通知" tabindex="-1"><a class="header-anchor" href="#创建通知" aria-hidden="true">#</a> 创建通知</h2><p>Laravel 中，通常每个通知都由一个存储在 <code>app/Notifications</code> 目录下的一个类表示。如果在你的应用中没有看到这个目录，不要担心，当运行 <code>make:notification</code> 命令时它将为你创建：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan make:notification InvoicePaid
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这个命令会在 <code>app/Notifications</code> 目录下生成一个新的通知类。每个通知类都包含一个 <code>via</code> 方法以及一个或多个消息构建的方法比如 <code>toMail</code> 或 <code>toDatabase</code>，它们会针对特定的渠道把通知转换为对应的消息。</p><p><a name="sending-notifications"></a></p><h2 id="发送通知" tabindex="-1"><a class="header-anchor" href="#发送通知" aria-hidden="true">#</a> 发送通知</h2><p><a name="using-the-notifiable-trait"></a></p><h3 id="使用-notifiable-trait" tabindex="-1"><a class="header-anchor" href="#使用-notifiable-trait" aria-hidden="true">#</a> 使用 Notifiable Trait</h3><p>通知可以通过两种方式发送： 使用 <code>Notifiable</code> 特性的 <code>notify</code> 方法或使用 <code>Notification</code> <a href="./facades">facade</a>。 该 <code>Notifiable</code> 特性默认包含在应用程序的 <code>App\\Models\\User</code> 模型中：</p><pre><code>&lt;?php

namespace App\\Models;

use Illuminate\\Foundation\\Auth\\User as Authenticatable;
use Illuminate\\Notifications\\Notifiable;

class User extends Authenticatable
{
    use Notifiable;
}
</code></pre><p>此 <code>notify</code> 方法需要接收一个通知实例参数：</p><pre><code>use App\\Notifications\\InvoicePaid;

$user-&gt;notify(new InvoicePaid($invoice));
</code></pre><blockquote><p><strong>技巧</strong> 请记住，你可以在任何模型中使用 <code>Notifiable</code> trait。而不仅仅是在 <code>User</code> 模型中。</p></blockquote><p><a name="using-the-notification-facade"></a></p><h3 id="使用-notification-facade" tabindex="-1"><a class="header-anchor" href="#使用-notification-facade" aria-hidden="true">#</a> 使用 Notification Facade</h3><p>另外，你可以通过 <code>Notification</code> <a href="./facades">facade</a> 来发送通知。它主要用在当你需要给多个可接收通知的实体发送的时候，比如给用户集合发送通知。使用 Facade 发送通知的话，要把可接收通知实例和通知实例传递给 <code>send</code> 方法：</p><pre><code>use Illuminate\\Support\\Facades\\Notification;

Notification::send($users, new InvoicePaid($invoice));
</code></pre><p>你也可以使用 <code>sendNow</code> 方法立即发送通知。即使通知实现了 <code>ShouldQueue</code> 接口，该方法也会立即发送通知：</p><pre><code>Notification::sendNow($developers, new DeploymentCompleted($deployment));
</code></pre><p><a name="specifying-delivery-channels"></a></p><h3 id="发送指定频道" tabindex="-1"><a class="header-anchor" href="#发送指定频道" aria-hidden="true">#</a> 发送指定频道</h3><p>每个通知类都有一个 <code>via</code> 方法，用于确定将在哪些通道上传递通知。通知可以在 <code>mail</code>、<code>database</code>、<code>broadcast</code>、<code>vonage</code> 和 <code>slack</code> 频道上发送。</p>`,24),b=a("strong",null,"提示",-1),v={href:"http://laravel-notification-channels.com",target:"_blank",rel:"noopener noreferrer"},M=o(`<p><code>via</code> 方法接收一个 <code>$notifiable</code> 实例，这个实例将是通知实际发送到的类的实例。你可以用 <code>$notifiable</code> 来决定这个通知用哪些频道来发送：</p><pre><code>/**
 * 获取通知发送频道。
 *
 * @return array&lt;int, string&gt;
 */
public function via(object $notifiable): array
{
    return $notifiable-&gt;prefers_sms ? [&#39;vonage&#39;] : [&#39;mail&#39;, &#39;database&#39;];
}
</code></pre><p><a name="queueing-notifications"></a></p><h3 id="通知队列化" tabindex="-1"><a class="header-anchor" href="#通知队列化" aria-hidden="true">#</a> 通知队列化</h3><blockquote><p><strong>注意</strong> 使用通知队列前需要配置队列并 <a href="./queues">开启一个队列任务</a>。</p></blockquote><p>发送通知可能是耗时的，尤其是通道需要调用额外的 API 来传输通知。为了加速应用的响应时间，可以将通知推送到队列中异步发送，而要实现推送通知到队列，可以让对应通知类实现 <code>ShouldQueue</code> 接口并使用 <code>Queueable</code> trait。如果通知类是通过 make:notification 命令生成的，那么该接口和 trait 已经默认导入，你可以快速将它们添加到通知类：</p><pre><code>&lt;?php

namespace App\\Notifications;

use Illuminate\\Bus\\Queueable;
use Illuminate\\Contracts\\Queue\\ShouldQueue;
use Illuminate\\Notifications\\Notification;

class InvoicePaid extends Notification implements ShouldQueue
{
    use Queueable;

    // ...
}
</code></pre><p>一旦将 <code>ShouldQueue</code> 接口添加到你的通知中，你就可以发送通知。 Laravel 将检测类上的 <code>ShouldQueue</code> 接口并自动排队发送通知：</p><pre><code>$user-&gt;notify(new InvoicePaid($invoice));
</code></pre><p>排队通知时，将为每个收件人和频道组合创建一个排队的作业。比如，如果你的通知有三个收件人和两个频道，则六个作业将被分配到队列中。</p><p><a name="delaying-notifications"></a></p><h4 id="延迟通知" tabindex="-1"><a class="header-anchor" href="#延迟通知" aria-hidden="true">#</a> 延迟通知</h4><p>如果你需要延迟发送消息通知, 你可以在你的消息通知实例上添加 <code>delay</code> 方法:</p><pre><code>$delay = now()-&gt;addMinutes(10);

$user-&gt;notify((new InvoicePaid($invoice))-&gt;delay($delay));
</code></pre><p><a name="delaying-notifications-per-channel"></a></p><h4 id="多个通道的延迟通知" tabindex="-1"><a class="header-anchor" href="#多个通道的延迟通知" aria-hidden="true">#</a> 多个通道的延迟通知</h4><p>将一个数组传递给 <code>delay</code> 方法来指定特定通道的延迟时间:</p><pre><code>$user-&gt;notify((new InvoicePaid($invoice))-&gt;delay([
    &#39;mail&#39; =&gt; now()-&gt;addMinutes(5),
    &#39;sms&#39; =&gt; now()-&gt;addMinutes(10),
]));
</code></pre><p>或者，你可以在通知类本身上定义一个 <code>withDelay</code> 方法。 <code>withDelay</code> 方法会返回包含通道名称和延迟值的数组:</p><pre><code>/**
 * 确定通知的传递延迟.
 *
 * @return array&lt;string, \\Illuminate\\Support\\Carbon&gt;
 */
public function withDelay(object $notifiable): array
{
    return [
        &#39;mail&#39; =&gt; now()-&gt;addMinutes(5),
        &#39;sms&#39; =&gt; now()-&gt;addMinutes(10),
    ];
}
</code></pre><p><a name="customizing-the-notification-queue-connection"></a></p><h4 id="自定义消息通知队列连接" tabindex="-1"><a class="header-anchor" href="#自定义消息通知队列连接" aria-hidden="true">#</a> 自定义消息通知队列连接</h4><p>默认情况下，排队的消息通知将使用应用程序的默认队列连接进行排队。如果你想指定一个不同的连接用于特定的通知，你可以在通知类上定义一个 <code>$connection</code> 属性:</p><pre><code>/**
 * 排队通知时要使用的队列连接的名称.
 *
 * @var string
 */
public $connection = &#39;redis&#39;;
</code></pre><p>或者，如果你想为每个通知通道都指定一个特定的队列连接，你可以在你的通知上定义一个 <code>viaConnections</code> 方法。这个方法应该返回一个通道名称 / 队列连接名称的数组。</p><pre><code>/**
 * 定义每个通知通道应该使用哪个连接。
 *
 * @return array&lt;string, string&gt;
 */
public function viaConnections(): array
{
    return [
        &#39;mail&#39; =&gt; &#39;redis&#39;,
        &#39;database&#39; =&gt; &#39;sync&#39;,
    ];
}
</code></pre><p><a name="customizing-notification-channel-queues"></a></p><h4 id="自定义通知通道队列" tabindex="-1"><a class="header-anchor" href="#自定义通知通道队列" aria-hidden="true">#</a> 自定义通知通道队列</h4><p>如果你想为每个通知通道指定一个特定的队列，你可以在你的通知上定义一个 <code>viaQueues</code> 。 此方法应返回通道名称 / 队列名称对的数组：</p><pre><code>/**
 * 定义每个通知通道应使用哪条队列。
 *
 * @return array&lt;string, string&gt;
 */
public function viaQueues(): array
{
    return [
        &#39;mail&#39; =&gt; &#39;mail-queue&#39;,
        &#39;slack&#39; =&gt; &#39;slack-queue&#39;,
    ];
}
</code></pre><p><a name="queued-notifications-and-database-transactions"></a></p><h4 id="队列通知-数据库事务" tabindex="-1"><a class="header-anchor" href="#队列通知-数据库事务" aria-hidden="true">#</a> 队列通知 &amp; 数据库事务</h4><p>当队列通知在数据库事务中被分发时，它们可能在数据库事务提交之前被队列处理。发生这种情况时，你在数据库事务期间对模型或数据库记录所做的任何更新可能尚未反映在数据库中。甚至，在事务中创建的任何模型或数据库记录可能不存在于数据库中。如果你的通知依赖于这些模型，那么在处理发送队列通知时可能会发生意外错误。</p><p>如果你的队列连接的 <code>after_commit</code> 配置选项设置为 <code>false</code>，你仍然可以通过在发送通知时调用 <code>afterCommit</code> 方法来指示应在提交所有打开的数据库事务后发送特定的排队通知：</p><pre><code>use App\\Notifications\\InvoicePaid;

$user-&gt;notify((new InvoicePaid($invoice))-&gt;afterCommit());
</code></pre><p>或者，你可以从通知的构造函数调用 <code>afterCommit</code> 方法：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;?php

namespace App\\Notifications;

use Illuminate\\Bus\\Queueable;
use Illuminate\\Contracts\\Queue\\ShouldQueue;
use Illuminate\\Notifications\\Notification;

class InvoicePaid extends Notification implements ShouldQueue
{
    use Queueable;

    /**
     * 创建一个新的通知通知实例。
     */
    public function __construct()
    {
        $this-&gt;afterCommit();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>注意</strong><br> 要了解更多解决这些问题的方法，请查阅有关队列作业和 <a href="./queues#jobs-and-database-transactions">数据库事务</a> 的文档。</p></blockquote><p><a name="determining-if-the-queued-notification-should-be-sent"></a></p><h4 id="确定是否发送排队的通知" tabindex="-1"><a class="header-anchor" href="#确定是否发送排队的通知" aria-hidden="true">#</a> 确定是否发送排队的通知</h4><p>在将排队的通知分派到后台处理的队列之后，它通常会被队列工作进程接受并发送给其目标收件人。</p><p>然而，如果你想要在队列工作进程处理后最终确定是否发送排队的通知，你可以在通知类上定义一个 <code>shouldSend</code> 方法。如果此方法返回 <code>false</code>，则通知不会被发送：</p><pre><code>/**
 * 定义通知是否应该被发送。
 */
public function shouldSend(object $notifiable, string $channel): bool
{
    return $this-&gt;invoice-&gt;isPaid();
}
</code></pre><p><a name="on-demand-notifications"></a></p><h3 id="按需通知" tabindex="-1"><a class="header-anchor" href="#按需通知" aria-hidden="true">#</a> 按需通知</h3><p>有时你需要向一些不属于你应用程序的「用户」发送通知。使用 <code>Notification</code> 门面的 <code>route</code> 方法，你可以在发送通知之前指定即时的通知路由信息：</p><pre><code>use Illuminate\\Broadcasting\\Channel;
use Illuminate\\Support\\Facades\\Notification;

Notification::route(&#39;mail&#39;, &#39;taylor@example.com&#39;)
            -&gt;route(&#39;vonage&#39;, &#39;5555555555&#39;)
            -&gt;route(&#39;slack&#39;, &#39;https://hooks.slack.com/services/...&#39;)
            -&gt;route(&#39;broadcast&#39;, [new Channel(&#39;channel-name&#39;)])
            -&gt;notify(new InvoicePaid($invoice));
</code></pre><p>如果你想在向 <code>mail</code> 路由发送通知时指定收件人，你可以提供一个数组 电子邮件地址作为键，名字作为值。</p><pre><code>Notification::route(&#39;mail&#39;, [
    &#39;barrett@example.com&#39; =&gt; &#39;Barrett Blair&#39;,
])-&gt;notify(new InvoicePaid($invoice));
</code></pre><p><a name="mail-notifications"></a></p><h2 id="邮件通知" tabindex="-1"><a class="header-anchor" href="#邮件通知" aria-hidden="true">#</a> 邮件通知</h2><p><a name="formatting-mail-messages"></a></p><h3 id="格式化邮件" tabindex="-1"><a class="header-anchor" href="#格式化邮件" aria-hidden="true">#</a> 格式化邮件</h3><p>如果一个通知支持以电子邮件的形式发送，你应该在通知类中定义一个 <code>toMail</code> 方法。这个方法将接收一个 <code>$notifiable</code> 实体，并应该返回一个<code>Illuminate\\Notifications\\Messages\\MailMessage</code> 实例。</p><p><code>MailMessage</code> 类包含一些简单的方法来帮助你建立事务性的电子邮件信息。邮件信息可能包含几行文字以及一个「操作」。让我们来看看一个 <code>toMail</code> 方法的例子。</p><pre><code>/**
 * 获取通知的邮件表示形式。
 */
public function toMail(object $notifiable): MailMessage
{
    $url = url(&#39;/invoice/&#39;.$this-&gt;invoice-&gt;id);

    return (new MailMessage)
                -&gt;greeting(&#39;你好!&#39;)
                -&gt;line(&#39;你的一张发票已经付款了！&#39;)
                -&gt;lineIf($this-&gt;amount &gt; 0, &quot;支出金额: {$this-&gt;amount}&quot;)
                -&gt;action(&#39;查看发票&#39;, $url)
                -&gt;line(&#39;感谢你使用我们的应用程序！&#39;);
}
</code></pre><blockquote><p><strong>注意</strong><br> 注意我们在 <code>toMail</code> 方法中使用 <code>$this-&gt;invoice-&gt;id</code>。你可以在通知的构造函数中传递任何你的通知需要生成的信息数据。</p></blockquote><p>在这个例子中，我们注册了一个问候语、一行文字、一个操作，然后是另一行文字。<code>MailMessage</code> 对象所提供的这些方法使得邮件的格式化变得简单而快速。然后，邮件通道将把信息组件转换封装成一个漂亮的、响应式的HTML电子邮件模板，并有一个纯文本对应。 下面是一个由 <code>mail</code> 通道生成的电子邮件的例子。</p><img src="`+t+`"><blockquote><p><strong>注意</strong><br> 当发送邮件通知时，请确保在你的 <code>config/app.php</code> 配置文件中设置 <code>name</code> 配置选项。 这个值将在你的邮件通知信息的标题和页脚中使用。</p></blockquote><p><a name="error-messages"></a></p><h4 id="错误消息" tabindex="-1"><a class="header-anchor" href="#错误消息" aria-hidden="true">#</a> 错误消息</h4><p>一些通知会通知用户错误，比如支付失败的发票。你可以通过在构建消息时调用 <code>error</code> 方法来指示邮件消息是关于错误的。当在邮件消息上使用 <code>error</code> 方法时，操作按钮将会是红色而不是黑色：</p><pre><code>/**
 * 获取通知的邮件表示形式。
 */
public function toMail(object $notifiable): MailMessage
{
    return (new MailMessage)
                -&gt;error()
                -&gt;subject(&#39;发票支付失败&#39;)
                -&gt;line(&#39;...&#39;);
}
</code></pre><p><a name="other-mail-notification-formatting-options"></a></p><h4 id="其他邮件通知格式选项" tabindex="-1"><a class="header-anchor" href="#其他邮件通知格式选项" aria-hidden="true">#</a> 其他邮件通知格式选项</h4><p>你可以使用 <code>view</code> 方法来指定应用于呈现通知电子邮件的自定义模板，而不是在通知类中定义文本「行」：</p><pre><code>/**
 * 获取通知的邮件表现形式
 */
public function toMail(object $notifiable): MailMessage
{
    return (new MailMessage)-&gt;view(
        &#39;emails.name&#39;, [&#39;invoice&#39; =&gt; $this-&gt;invoice]
    );
}
</code></pre><p>你可以通过将视图名称作为数组的第二个元素传递给 <code>view</code> 方法来指定邮件消息的纯文本视图：</p><pre><code>/**
 * 获取通知的邮件表现形式
 */
public function toMail(object $notifiable): MailMessage
{
    return (new MailMessage)-&gt;view(
        [&#39;emails.name.html&#39;, &#39;emails.name.plain&#39;],
        [&#39;invoice&#39; =&gt; $this-&gt;invoice]
    );
}
</code></pre><p><a name="customizing-the-sender"></a></p><h3 id="自定义发件人" tabindex="-1"><a class="header-anchor" href="#自定义发件人" aria-hidden="true">#</a> 自定义发件人</h3><p>默认情况下，电子邮件的发件人/寄件人地址在 <code>config/mail.php</code> 配置文件中定义。但是，你可以使用 <code>from</code> 方法为特定的通知指定发件人地址：</p><pre><code>/**
 * 获取通知的邮件表现形式
 */
public function toMail(object $notifiable): MailMessage
{
    return (new MailMessage)
                -&gt;from(&#39;barrett@example.com&#39;, &#39;Barrett Blair&#39;)
                -&gt;line(&#39;...&#39;);
}
</code></pre><p><a name="customizing-the-recipient"></a></p><h3 id="自定义收件人" tabindex="-1"><a class="header-anchor" href="#自定义收件人" aria-hidden="true">#</a> 自定义收件人</h3><p>当通过 <code>mail</code> 通道发送通知时，通知系统将自动查找可通知实体的 <code>email</code> 属性。你可以通过在可通知实体上定义 <code>routeNotificationForMail</code> 方法来自定义用于传递通知的电子邮件地址：</p><pre><code>&lt;?php

namespace App\\Models;

use Illuminate\\Foundation\\Auth\\User as Authenticatable;
use Illuminate\\Notifications\\Notifiable;
use Illuminate\\Notifications\\Notification;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * 路由邮件通道的通知。
     *
     * @return  array&lt;string, string&gt;|string
     */
    public function routeNotificationForMail(Notification $notification): array|string
    {
        // 只返回电子邮件地址...
        return $this-&gt;email_address;

        // 返回电子邮件地址和姓名...
        return [$this-&gt;email_address =&gt; $this-&gt;name];
    }
}
</code></pre><p><a name="customizing-the-subject"></a></p><h3 id="自定义主题" tabindex="-1"><a class="header-anchor" href="#自定义主题" aria-hidden="true">#</a> 自定义主题</h3><p>默认情况下，邮件的主题是通知类的类名格式化为「标题案例」（Title Case）。因此，如果你的通知类命名为 <code>InvoicePaid</code>，则邮件的主题将是 <code>Invoice Paid</code>。如果你想为消息指定不同的主题，可以在构建消息时调用 <code>subject</code> 方法：</p><pre><code>/**
 * 获取通知的邮件表现形式。
 */
public function toMail(object $notifiable): MailMessage
{
    return (new MailMessage)
                -&gt;subject(&#39;通知标题&#39;)
                -&gt;line(&#39;...&#39;);
}
</code></pre><p><a name="customizing-the-mailer"></a></p><h3 id="自定义邮件程序" tabindex="-1"><a class="header-anchor" href="#自定义邮件程序" aria-hidden="true">#</a> 自定义邮件程序</h3><p>默认情况下，邮件通知将使用 <code>config/mail.php</code> 配置文件中定义的默认邮件程序进行发送。但是，你可以在运行时通过在构建消息时调用 <code>mailer</code> 方法来指定不同的邮件程序：</p><pre><code>/**
 * 获取通知的邮件表现形式。
 */
public function toMail(object $notifiable): MailMessage
{
    return (new MailMessage)
                -&gt;mailer(&#39;postmark&#39;)
                -&gt;line(&#39;...&#39;);
}
</code></pre><p><a name="customizing-the-templates"></a></p><h3 id="自定义模板" tabindex="-1"><a class="header-anchor" href="#自定义模板" aria-hidden="true">#</a> 自定义模板</h3><p>你可以通过发布通知包的资源来修改邮件通知使用的 HTML 和纯文本模板。运行此命令后，邮件通知模板将位于 <code>resources/views/vendor/notifications</code> 目录中：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan vendor:publish <span class="token parameter variable">--tag</span><span class="token operator">=</span>laravel-notifications
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="mail-attachments"></a></p><h3 id="附件" tabindex="-1"><a class="header-anchor" href="#附件" aria-hidden="true">#</a> 附件</h3><p>要在电子邮件通知中添加附件，可以在构建消息时使用 <code>attach</code> 方法。<code>attach</code> 方法接受文件的绝对路径作为其第一个参数：</p><pre><code>/**
 * 获取通知的邮件表现形式。
 */
public function toMail(object $notifiable): MailMessage
{
    return (new MailMessage)
                -&gt;greeting(&#39;你好!&#39;)
                -&gt;attach(&#39;/path/to/file&#39;);
}
</code></pre><blockquote><p><strong>注意</strong><br> 通知邮件消息提供的 <code>attach</code> 方法还接受 <a href="./mail#attachable-objects">可附加对象</a>。请查阅全面的 <a href="./mailmd#attachable-objects">可附加对象</a> 文档以了解更多信息。</p></blockquote><p>当附加文件到消息时，你还可以通过将 <code>array</code> 作为 <code>attach</code> 方法的第二个参数来指定显示名称和/或 MIME 类型：</p><pre><code>/**
 * 获取通知的邮件表现形式。
 */
public function toMail(object $notifiable): MailMessage
{
    return (new MailMessage)
                -&gt;greeting(&#39;你好!&#39;)
                -&gt;attach(&#39;/path/to/file&#39;, [
                    &#39;as&#39; =&gt; &#39;name.pdf&#39;,
                    &#39;mime&#39; =&gt; &#39;application/pdf&#39;,
                ]);
}
</code></pre><p>与在可邮寄对象中附加文件不同，你不能使用 <code>attachFromStorage</code> 直接从存储磁盘附加文件。相反，你应该使用 <code>attach</code> 方法，并提供存储磁盘上文件的绝对路径。或者，你可以从 <code>toMail</code> 方法中返回一个 <a href="./mailmd#generating-mailables">可邮寄对象</a>：</p><pre><code>use App\\Mail\\InvoicePaid as InvoicePaidMailable;

/**
 * 获取通知的邮件表现形式。
 */
public function toMail(object $notifiable): Mailable
{
    return (new InvoicePaidMailable($this-&gt;invoice))
                -&gt;to($notifiable-&gt;email)
                -&gt;attachFromStorage(&#39;/path/to/file&#39;);
}
</code></pre><p>必要时，可以使用 <code>attachMany</code> 方法将多个文件附加到消息中：</p><pre><code>/**
 * 获取通知的邮件表现形式。
 */
public function toMail(object $notifiable): MailMessage
{
    return (new MailMessage)
                -&gt;greeting(&#39;你好!&#39;)
                -&gt;attachMany([
                    &#39;/path/to/forge.svg&#39;,
                    &#39;/path/to/vapor.svg&#39; =&gt; [
                        &#39;as&#39; =&gt; &#39;Logo.svg&#39;,
                        &#39;mime&#39; =&gt; &#39;image/svg+xml&#39;,
                    ],
                ]);
}
</code></pre><p><a name="raw-data-attachments"></a></p><h4 id="原始数据附件" tabindex="-1"><a class="header-anchor" href="#原始数据附件" aria-hidden="true">#</a> 原始数据附件</h4><p><code>attachData</code> 方法可以用于将原始字节数组附加为附件。在调用 <code>attachData</code> 方法时，应提供应分配给附件的文件名：</p><pre><code>/**
 * 获取通知的邮件表现形式。
 */
public function toMail(object $notifiable): MailMessage
{
    return (new MailMessage)
                -&gt;greeting(&#39;你好!&#39;)
                -&gt;attachData($this-&gt;pdf, &#39;name.pdf&#39;, [
                    &#39;mime&#39; =&gt; &#39;application/pdf&#39;,
                ]);
}
</code></pre><p><a name="adding-tags-metadata"></a></p><h3 id="添加标签和元数据" tabindex="-1"><a class="header-anchor" href="#添加标签和元数据" aria-hidden="true">#</a> 添加标签和元数据</h3><p>一些第三方电子邮件提供商（如 Mailgun 和 Postmark）支持消息「标签」和「元数据」，可用于分组和跟踪应用程序发送的电子邮件。可以通过 <code>tag</code> 和 <code>metadata</code> 方法将标签和元数据添加到电子邮件消息中：</p><pre><code>/**
 * 获取通知的邮件表现形式。
 */
public function toMail(object $notifiable): MailMessage
{
    return (new MailMessage)
                -&gt;greeting(&#39;评论点赞！&#39;)
                -&gt;tag(&#39;点赞&#39;)
                -&gt;metadata(&#39;comment_id&#39;, $this-&gt;comment-&gt;id);
}
</code></pre>`,109),$={href:"https://documentation.mailgun.com/en/latest/user_manual.html#tagging-1",target:"_blank",rel:"noopener noreferrer"},k={href:"https://documentation.mailgun.com/en/latest/user_manual.html#attaching-data-to-messages",target:"_blank",rel:"noopener noreferrer"},N={href:"https://postmarkapp.com/blog/tags-support-for-smtp",target:"_blank",rel:"noopener noreferrer"},S={href:"https://postmarkapp.com/support/article/1125-custom-metadata-faq",target:"_blank",rel:"noopener noreferrer"},_=a("code",null,"metadata",-1),x={href:"https://docs.aws.amazon.com/ses/latest/APIReference/API_MessageTag.html",target:"_blank",rel:"noopener noreferrer"},w=a("a",{name:"customizing-the-symfony-message"},null,-1),I=o(`<h3 id="自定义-symfony-消息" tabindex="-1"><a class="header-anchor" href="#自定义-symfony-消息" aria-hidden="true">#</a> 自定义 Symfony 消息</h3><p><code>MailMessage</code>类的<code>withSymfonyMessage</code>方法允许你注册一个闭包，在发送消息之前将调用Symfony Message实例。这给你在传递消息之前有深度自定义消息的机会：</p><pre><code>use Symfony\\Component\\Mime\\Email;

/**
 * 获取通知的邮件表示形式。
 */
public function toMail(object $notifiable): MailMessage
{
    return (new MailMessage)
                -&gt;withSymfonyMessage(function (Email $message) {
                    $message-&gt;getHeaders()-&gt;addTextHeader(
                        &#39;Custom-Header&#39;, &#39;Header Value&#39;
                    );
                });
}
</code></pre><p><a name="using-mailables"></a></p><h3 id="使用可邮寄对象" tabindex="-1"><a class="header-anchor" href="#使用可邮寄对象" aria-hidden="true">#</a> 使用可邮寄对象</h3><p>如果需要，你可以从通知的 <code>toMail</code> 方法返回完整的 <a href="./mail">mailable 对象</a>。当返回 <code>Mailable</code> 而不是 <code>MailMessage</code> 时，你需要使用可邮寄对象的 <code>to</code> 方法指定消息接收者：</p><pre><code>use App\\Mail\\InvoicePaid as InvoicePaidMailable;
use Illuminate\\Mail\\Mailable;

/**
 * 获取通知的邮件表现形式。
 */
public function toMail(object $notifiable): Mailable
{
    return (new InvoicePaidMailable($this-&gt;invoice))
                -&gt;to($notifiable-&gt;email);
}
</code></pre><p><a name="mailables-and-on-demand-notifications"></a></p><h4 id="可邮寄对象和按需通知" tabindex="-1"><a class="header-anchor" href="#可邮寄对象和按需通知" aria-hidden="true">#</a> 可邮寄对象和按需通知</h4><p>如果你正在发送<a href="#on-demand-notifications">按需通知</a>，则提供给<code>toMail</code>方法的<code>$notifiable</code>实例将是<code>Illuminate\\Notifications\\AnonymousNotifiable</code>的一个实例，它提供了一个<code>routeNotificationFor</code>方法，该方法可用于检索应将按需通知发送到的电子邮件地址：</p><pre><code>use App\\Mail\\InvoicePaid as InvoicePaidMailable;
use Illuminate\\Notifications\\AnonymousNotifiable;
use Illuminate\\Mail\\Mailable;

/**
 * 获取通知的邮件表现形式。
 */
public function toMail(object $notifiable): Mailable
{
    $address = $notifiable instanceof AnonymousNotifiable
            ? $notifiable-&gt;routeNotificationFor(&#39;mail&#39;)
            : $notifiable-&gt;email;

    return (new InvoicePaidMailable($this-&gt;invoice))
                -&gt;to($address);
}
</code></pre><p><a name="previewing-mail-notifications"></a></p><h3 id="预览邮件通知" tabindex="-1"><a class="header-anchor" href="#预览邮件通知" aria-hidden="true">#</a> 预览邮件通知</h3><p>设计邮件通知模板时，可以像典型的 Blade 模板一样在浏览器中快速预览呈现的邮件消息。出于这个原因，Laravel 允许你直接从路由闭包或控制器返回由邮件通知生成的任何邮件消息。当返回一个 <code>MailMessage</code> 时，它将在浏览器中呈现和显示，让你可以快速预览其设计，无需将其发送到实际的电子邮件地址：</p><pre><code>use App\\Models\\Invoice;
use App\\Notifications\\InvoicePaid;

Route::get(&#39;/notification&#39;, function () {
    $invoice = Invoice::find(1);

    return (new InvoicePaid($invoice))
                -&gt;toMail($invoice-&gt;user);
});
</code></pre><p><a name="markdown-mail-notifications"></a></p><h2 id="markdown-邮件通知" tabindex="-1"><a class="header-anchor" href="#markdown-邮件通知" aria-hidden="true">#</a> Markdown 邮件通知</h2><p>Markdown 邮件通知允许你利用邮件通知的预构建模板，同时为你提供编写更长、定制化消息的自由。由于这些消息是用 Markdown 写的，因此 Laravel 能够为消息呈现漂亮、响应式的 HTML 模板，同时还会自动生成一个纯文本的副本。</p><p><a name="generating-the-message"></a></p><h3 id="生成消息" tabindex="-1"><a class="header-anchor" href="#生成消息" aria-hidden="true">#</a> 生成消息</h3><p>要生成具有相应 Markdown 模板的通知，可以使用 <code>make:notification</code> Artisan 命令的 <code>--markdown</code> 选项：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan make:notification InvoicePaid <span class="token parameter variable">--markdown</span><span class="token operator">=</span>mail.invoice.paid
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>与所有其他邮件通知一样，使用 Markdown 模板的通知应该在其通知类上定义一个 <code>toMail</code> 方法。但是，不要使用 <code>line</code> 和 <code>action</code> 方法构建通知，而是使用 <code>markdown</code> 方法指定应该使用的 Markdown 模板的名称。你希望提供给模板的数据数组可以作为该方法的第二个参数传递：</p><pre><code>/**
 * 获取通知的邮件表现形式。
 */
public function toMail(object $notifiable): MailMessage
{
    $url = url(&#39;/invoice/&#39;.$this-&gt;invoice-&gt;id);

    return (new MailMessage)
                -&gt;subject(&#39;发票支付&#39;)
                -&gt;markdown(&#39;mail.invoice.paid&#39;, [&#39;url&#39; =&gt; $url]);
}
</code></pre><p><a name="writing-the-message"></a></p><h3 id="编写消息" tabindex="-1"><a class="header-anchor" href="#编写消息" aria-hidden="true">#</a> 编写消息</h3><p>Markdown 邮件通知使用 Blade 组件和 Markdown 语法的组合，可以让你在利用 Laravel 的预构建通知组件的同时，轻松构建通知：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;x-mail::message&gt;
# 发票支付

你的发票已支付!

&lt;x-mail::button :url=&quot;$url&quot;&gt;
查看发票
&lt;/x-mail::button&gt;

谢谢，&lt;br&gt;
{{ config(&#39;app.name&#39;) }}
&lt;/x-mail::message&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="button-component"></a></p><h4 id="button-组件" tabindex="-1"><a class="header-anchor" href="#button-组件" aria-hidden="true">#</a> Button 组件</h4><p>Button 组件会呈现一个居中的按钮链接。该组件接受两个参数，<code>url</code> 和一个可选的 <code>color</code>。支持的颜色有 <code>primary</code>、<code>green</code> 和 <code>red</code>。你可以在通知中添加任意数量的 Button 组件：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;x-mail::button :url=&quot;$url&quot; color=&quot;green&quot;&gt;
查看发票
&lt;/x-mail::button&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="panel-component"></a></p><h4 id="panel-组件" tabindex="-1"><a class="header-anchor" href="#panel-组件" aria-hidden="true">#</a> Panel 组件</h4><p>Panel 组件会在通知中呈现给定的文本块，并在面板中以稍微不同的背景颜色呈现。这让你可以引起读者对特定文本块的注意：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;x-mail::panel&gt;
这是面板内容。
&lt;/x-mail::panel&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="table-component"></a></p><h4 id="table-组件" tabindex="-1"><a class="header-anchor" href="#table-组件" aria-hidden="true">#</a> Table 组件</h4><p>Table 组件允许你将 Markdown 表格转换为 HTML 表格。该组件接受 Markdown 表格作为其内容。可以使用默认的 Markdown 表格对齐语法来支持表格列对齐：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;x-mail::table&gt;
| Laravel       | Table         | Example  |
| ------------- |:-------------:| --------:|
| Col 2 is      | Centered      | $10      |
| Col 3 is      | Right-Aligned | $20      |
&lt;/x-mail::table&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="customizing-the-components"></a></p><h3 id="定制组件" tabindex="-1"><a class="header-anchor" href="#定制组件" aria-hidden="true">#</a> 定制组件</h3><p>你可以将所有的 Markdown 通知组件导出到自己的应用程序进行定制。要导出组件，请使用 <code>vendor:publish</code> Artisan 命令来发布 <code>laravel-mail</code> 资源标记：</p><p>这个命令会将 Markdown 邮件组件发布到 <code>resources/views/vendor/mail</code> 目录下。<code>mail</code> 目录将包含一个 <code>html</code> 和一个 <code>text</code> 目录，每个目录都包含其可用组件的各自表示形式。你可以自由地按照自己的喜好定制这些组件。</p><p><a name="customizing-the-css"></a></p><h4 id="定制-css-样式" tabindex="-1"><a class="header-anchor" href="#定制-css-样式" aria-hidden="true">#</a> 定制 CSS 样式</h4><p>在导出组件之后，<code>resources/views/vendor/mail/html/themes</code> 目录将包含一个 <code>default.css</code> 文件。你可以在此文件中自定义 CSS 样式，你的样式将自动被内联到 Markdown 通知的 HTML 表示中。</p><p>如果你想为 Laravel 的 Markdown 组件构建一个全新的主题，可以在 <code>html/themes</code> 目录中放置一个 CSS 文件。命名并保存 CSS 文件后，更新 <code>mail</code> 配置文件的 <code>theme</code> 选项以匹配你的新主题的名称。</p><p>要为单个通知自定义主题，可以在构建通知的邮件消息时调用 <code>theme</code> 方法。<code>theme</code> 方法接受应该在发送通知时使用的主题名称：</p><pre><code>/**
 * 获取通知的邮件表现形式。
 */
public function toMail(object $notifiable): MailMessage
{
    return (new MailMessage)
                -&gt;theme(&#39;发票&#39;)
                -&gt;subject(&#39;发票支付&#39;)
                -&gt;markdown(&#39;mail.invoice.paid&#39;, [&#39;url&#39; =&gt; $url]);
}
</code></pre><p><a name="database-notifications"></a></p><h2 id="数据库通知" tabindex="-1"><a class="header-anchor" href="#数据库通知" aria-hidden="true">#</a> 数据库通知</h2><p><a name="database-prerequisites"></a></p><h3 id="前提条件" tabindex="-1"><a class="header-anchor" href="#前提条件" aria-hidden="true">#</a> 前提条件</h3><p><code>database</code> 通知渠道将通知信息存储在一个数据库表中。该表将包含通知类型以及描述通知的 JSON 数据结构等信息。</p><p>你可以查询该表，在你的应用程序用户界面中显示通知。但是，在此之前，你需要创建一个数据库表来保存你的通知。你可以使用 <code>notifications:table</code> 命令生成一个适当的表模式的 <a href="./migrations">迁移</a>：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan notifications:table

php artisan migrate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="formatting-database-notifications"></a></p><h3 id="格式化数据库通知" tabindex="-1"><a class="header-anchor" href="#格式化数据库通知" aria-hidden="true">#</a> 格式化数据库通知</h3><p>如果一个通知支持被存储在一个数据库表中，你应该在通知类上定义一个 <code>toDatabase</code> 或 <code>toArray</code> 方法。这个方法将接收一个 <code>$notifiable</code> 实体，并应该返回一个普通的 PHP 数组。返回的数组将被编码为 JSON，并存储在你的 <code>notifications</code> 表的 <code>data</code> 列中。让我们看一个 <code>toArray</code> 方法的例子：</p><pre><code>/**
 * 获取通知的数组表示形式。
 *
 * @return array&lt;string, mixed&gt;
 */
public function toArray(object $notifiable): array
{
    return [
        &#39;invoice_id&#39; =&gt; $this-&gt;invoice-&gt;id,
        &#39;amount&#39; =&gt; $this-&gt;invoice-&gt;amount,
    ];
}
</code></pre><p><a name="todatabase-vs-toarray"></a></p><h4 id="todatabase-vs-toarray" tabindex="-1"><a class="header-anchor" href="#todatabase-vs-toarray" aria-hidden="true">#</a> <code>toDatabase</code> Vs. <code>toArray</code></h4><p><code>toArray</code> 方法也被 <code>broadcast</code> 频道用来确定要广播到你的 JavaScript 前端的数据。如果你想为 <code>database</code> 和 <code>broadcast</code> 频道定义两个不同的数组表示形式，你应该定义一个 <code>toDatabase</code> 方法，而不是一个 <code>toArray</code> 方法。</p><p><a name="accessing-the-notifications"></a></p><h3 id="访问通知" tabindex="-1"><a class="header-anchor" href="#访问通知" aria-hidden="true">#</a> 访问通知</h3><p>一旦通知被存储在数据库中，你需要一个方便的方式从你的可通知实体中访问它们。<code>Illuminate\\Notifications\\Notifiable</code> trait 包含在 Laravel 的默认 <code>App\\Models\\User</code> 模型中，它包括一个 <code>notifications</code> <a href="./eloquent-relationships">Eloquent 关联</a>，返回实体的通知。要获取通知，你可以像访问任何其他 Eloquent 关系一样访问此方法。默认情况下，通知将按照 <code>created_at</code> 时间戳排序，最新的通知位于集合的开头：</p><pre><code>$user = App\\Models\\User::find(1);

foreach ($user-&gt;notifications as $notification) {
    echo $notification-&gt;type;
}
</code></pre><p>如果你想要只检索「未读」的通知，你可以使用 <code>unreadNotifications</code> 关系。同样，这些通知将按照 <code>created_at</code> 时间戳排序，最新的通知位于集合的开头：</p><pre><code>$user = App\\Models\\User::find(1);

foreach ($user-&gt;unreadNotifications as $notification) {
    echo $notification-&gt;type;
}
</code></pre><blockquote><p><strong>注意</strong><br> 要从你的 JavaScript 客户端访问你的通知，你应该为你的应用程序定义一个通知控制器，该控制器返回一个可通知实体的通知，如当前用户。然后，你可以从你的 JavaScript 客户端向该控制器的 URL 发送 HTTP 请求。</p></blockquote><p><a name="marking-notifications-as-read"></a></p><h3 id="将通知标记为已读" tabindex="-1"><a class="header-anchor" href="#将通知标记为已读" aria-hidden="true">#</a> 将通知标记为已读</h3><p>通常，当用户查看通知时，你希望将通知标记为「已读」。<code>Illuminate\\Notifications\\Notifiable</code> trait 提供了一个 <code>markAsRead</code> 方法，该方法将更新通知的数据库记录上的 <code>read_at</code> 列：</p><pre><code>$user = App\\Models\\User::find(1);

foreach ($user-&gt;unreadNotifications as $notification) {
    $notification-&gt;markAsRead();
}
</code></pre><p>然而，你可以直接在通知集合上使用 <code>markAsRead</code> 方法，而不是遍历每个通知：</p><pre><code>$user-&gt;unreadNotifications-&gt;markAsRead();
</code></pre><p>你也可以使用批量更新查询将所有通知标记为已读而不必从数据库中检索它们：</p><pre><code>$user = App\\Models\\User::find(1);

$user-&gt;unreadNotifications()-&gt;update([&#39;read_at&#39; =&gt; now()]);
</code></pre><p>你可以使用 <code>delete</code> 方法将通知删除并从表中完全移除：</p><pre><code>$user-&gt;notifications()-&gt;delete();
</code></pre><p><a name="broadcast-notifications"></a></p><h2 id="广播通知" tabindex="-1"><a class="header-anchor" href="#广播通知" aria-hidden="true">#</a> 广播通知</h2><p><a name="broadcast-prerequisites"></a></p><h3 id="前提条件-1" tabindex="-1"><a class="header-anchor" href="#前提条件-1" aria-hidden="true">#</a> 前提条件</h3><p>在广播通知之前，你应该配置并熟悉 Laravel 的 <a href="./broadcasting">事件广播</a> 服务。事件广播提供了一种从你的 JavaScript 前端响应服务器端 Laravel 事件的方法。</p><p><a name="formatting-broadcast-notifications"></a></p><h3 id="格式化广播通知" tabindex="-1"><a class="header-anchor" href="#格式化广播通知" aria-hidden="true">#</a> 格式化广播通知</h3><p><code>broadcast</code> 频道使用 Laravel 的 <a href="./broadcasting">事件广播</a> 服务来广播通知，允许你的 JavaScript 前端实时捕获通知。如果通知支持广播，你可以在通知类上定义一个 <code>toBroadcast</code> 方法。该方法将接收一个 <code>$notifiable</code> 实体，并应该返回一个 <code>BroadcastMessage</code> 实例。如果 <code>toBroadcast</code> 方法不存在，则将使用 <code>toArray</code> 方法来收集应该广播的数据。返回的数据将被编码为 JSON 并广播到你的 JavaScript 前端。让我们看一个 <code>toBroadcast</code> 方法的示例：</p><pre><code>use Illuminate\\Notifications\\Messages\\BroadcastMessage;

/**
 * 获取通知的可广播表示形式。
 */
public function toBroadcast(object $notifiable): BroadcastMessage
{
    return new BroadcastMessage([
        &#39;invoice_id&#39; =&gt; $this-&gt;invoice-&gt;id,
        &#39;amount&#39; =&gt; $this-&gt;invoice-&gt;amount,
    ]);
}
</code></pre><p><a name="broadcast-queue-configuration"></a></p><h4 id="广播队列配置" tabindex="-1"><a class="header-anchor" href="#广播队列配置" aria-hidden="true">#</a> 广播队列配置</h4><p>所有广播通知都会被排队等待广播。如果你想配置用于排队广播操作的队列连接或队列名称，你可以使用 <code>BroadcastMessage</code> 的 <code>onConnection</code> 和 <code>onQueue</code> 方法：</p><pre><code>return (new BroadcastMessage($data))
                -&gt;onConnection(&#39;sqs&#39;)
                -&gt;onQueue(&#39;broadcasts&#39;);
</code></pre><p><a name="customizing-the-notification-type"></a></p><h4 id="自定义通知类型" tabindex="-1"><a class="header-anchor" href="#自定义通知类型" aria-hidden="true">#</a> 自定义通知类型</h4><p>除了你指定的数据之外，所有广播通知还包含一个 <code>type</code> 字段，其中包含通知的完整类名。如果你想要自定义通知的 <code>type</code>，可以在通知类上定义一个 <code>broadcastType</code> 方法：</p><pre><code>/**
 * 获取正在广播的通知类型。
 */
public function broadcastType(): string
{
    return &#39;broadcast.message&#39;;
}
</code></pre><p><a name="listening-for-notifications"></a></p><h3 id="监听通知" tabindex="-1"><a class="header-anchor" href="#监听通知" aria-hidden="true">#</a> 监听通知</h3><p>通知会以 <code>{notifiable}.{id}</code> 的格式在一个私有频道上广播。因此，如果你向一个 ID 为 <code>1</code> 的 <code>App\\Models\\User</code> 实例发送通知，通知将在 <code>App.Models.User.1</code> 私有频道上广播。当使用 <a href="./broadcastingmd#client-side-installation">Laravel Echo</a> 时，你可以使用 <code>notification</code> 方法轻松地在频道上监听通知：</p><pre><code>Echo.private(&#39;App.Models.User.&#39; + userId)
    .notification((notification) =&gt; {
        console.log(notification.type);
    });
</code></pre><p><a name="customizing-the-notification-channel"></a></p><h4 id="自定义通知频道" tabindex="-1"><a class="header-anchor" href="#自定义通知频道" aria-hidden="true">#</a> 自定义通知频道</h4><p>如果你想自定义实体的广播通知在哪个频道上广播，可以在可通知实体上定义一个 <code>receivesBroadcastNotificationsOn</code> 方法：</p><pre><code>&lt;?php

namespace App\\Models;

use Illuminate\\Broadcasting\\PrivateChannel;
use Illuminate\\Foundation\\Auth\\User as Authenticatable;
use Illuminate\\Notifications\\Notifiable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * 用户接收通知广播的频道。
     */
    public function receivesBroadcastNotificationsOn(): string
    {
        return &#39;users.&#39;.$this-&gt;id;
    }
}
</code></pre><p><a name="sms-notifications"></a></p><h2 id="短信通知" tabindex="-1"><a class="header-anchor" href="#短信通知" aria-hidden="true">#</a> 短信通知</h2><p><a name="sms-prerequisites"></a></p><h3 id="先决条件" tabindex="-1"><a class="header-anchor" href="#先决条件" aria-hidden="true">#</a> 先决条件</h3>`,110),y={href:"https://www.vonage.com/",target:"_blank",rel:"noopener noreferrer"},A=a("code",null,"laravel/vonage-notification-channel",-1),V=a("code",null,"guzzlehttp/guzzle",-1),q=a("pre",null,[a("code",null,`composer require laravel/vonage-notification-channel guzzlehttp/guzzle
`)],-1),P={href:"https://github.com/laravel/vonage-notification-channel/blob/3.x/config/vonage.php",target:"_blank",rel:"noopener noreferrer"},j=a("code",null,"VONAGE_KEY",-1),L=a("code",null,"VONAGE_SECRET",-1),C=o(`<p>定义好密钥后，你可以设置一个 <code>VONAGE_SMS_FROM</code> 环境变量，该变量定义了你发送 SMS 消息的默认电话号码。你可以在 Vonage 控制面板中生成此电话号码：</p><pre><code>VONAGE_SMS_FROM=15556666666
</code></pre><p><a name="formatting-sms-notifications"></a></p><h3 id="格式化短信通知" tabindex="-1"><a class="header-anchor" href="#格式化短信通知" aria-hidden="true">#</a> 格式化短信通知</h3><p>如果通知支持作为 SMS 发送，你应该在通知类上定义一个 <code>toVonage</code> 方法。此方法将接收一个 <code>$notifiable</code> 实体并应返回一个 <code>Illuminate\\Notifications\\Messages\\VonageMessage</code> 实例：</p><pre><code>use Illuminate\\Notifications\\Messages\\VonageMessage;

/**
 * 获取通知的 Vonage / SMS 表达式。
 */
public function toVonage(object $notifiable): VonageMessage
{
    return (new VonageMessage)
                -&gt;content(&#39;你的短信内容&#39;);
}
</code></pre><p><a name="unicode-content"></a></p><h4 id="unicode-内容" tabindex="-1"><a class="header-anchor" href="#unicode-内容" aria-hidden="true">#</a> Unicode 内容</h4><p>如果你的 SMS 消息将包含 unicode 字符，你应该在构造 <code>VonageMessage</code> 实例时调用 <code>unicode</code> 方法：</p><pre><code>use Illuminate\\Notifications\\Messages\\VonageMessage;

/**
 * 获取通知的 Vonage / SMS 表达式。
 */
public function toVonage(object $notifiable): VonageMessage
{
    return (new VonageMessage)
                -&gt;content(&#39;你的统一码消息&#39;)
                -&gt;unicode();
}
</code></pre><p><a name="customizing-the-from-number"></a></p><h3 id="自定义「来源」号码" tabindex="-1"><a class="header-anchor" href="#自定义「来源」号码" aria-hidden="true">#</a> 自定义「来源」号码</h3><p>如果你想从一个不同于 <code>VONAGE_SMS_FROM</code> 环境变量所指定的电话号码发送通知，你可以在 <code>VonageMessage</code> 实例上调用 <code>from</code> 方法：</p><pre><code>use Illuminate\\Notifications\\Messages\\VonageMessage;

/**
 * 获取通知的 Vonage / SMS 表达式。
 */
public function toVonage(object $notifiable): VonageMessage
{
    return (new VonageMessage)
                -&gt;content(&#39;您的短信内容&#39;)
                -&gt;from(&#39;15554443333&#39;);
}
</code></pre><p><a name="adding-a-client-reference"></a></p><h3 id="添加客户关联" tabindex="-1"><a class="header-anchor" href="#添加客户关联" aria-hidden="true">#</a> 添加客户关联</h3><p>如果你想跟踪每个用户、团队或客户的消费，你可以在通知中添加「客户关联」。Vonage 将允许你使用这个客户关联生成报告，以便你能更好地了解特定客户的短信使用情况。客户关联可以是任何字符串，最多 40 个字符。</p><pre><code>use Illuminate\\Notifications\\Messages\\VonageMessage;

/**
 * 获取通知的 Vonage / SMS 表达式。
 */
public function toVonage(object $notifiable): VonageMessage
{
    return (new VonageMessage)
                -&gt;clientReference((string) $notifiable-&gt;id)
                -&gt;content(&#39;你的短信内容&#39;);
}
</code></pre><p><a name="routing-sms-notifications"></a></p><h3 id="路由短信通知" tabindex="-1"><a class="header-anchor" href="#路由短信通知" aria-hidden="true">#</a> 路由短信通知</h3><p>要将 Vonage 通知路由到正确的电话号码，请在你的通知实体上定义 <code>routeNotificationForVonage</code> 方法：</p><pre><code>&lt;?php

namespace App\\Models;

use Illuminate\\Foundation\\Auth\\User as Authenticatable;
use Illuminate\\Notifications\\Notifiable;
use Illuminate\\Notifications\\Notification;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * Vonage 通道的路由通知。
     */
    public function routeNotificationForVonage(Notification $notification): string
    {
        return $this-&gt;phone_number;
    }
}
</code></pre><p><a name="slack-notifications"></a></p><h2 id="slack-通知" tabindex="-1"><a class="header-anchor" href="#slack-通知" aria-hidden="true">#</a> Slack 通知</h2><p><a name="slack-prerequisites"></a></p><h3 id="先决条件-1" tabindex="-1"><a class="header-anchor" href="#先决条件-1" aria-hidden="true">#</a> 先决条件</h3><p>在你可以通过 Slack 发送通知之前，你必须通过 Composer 安装 Slack 通知通道：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">composer</span> require laravel/slack-notification-channel
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,28),z={href:"https://api.slack.com/apps?new_app=1",target:"_blank",rel:"noopener noreferrer"},E=a("a",{href:"#routing-slack-notifications"},"路由 Slack 通知",-1),T=o(`<p><a name="formatting-slack-notifications"></a></p><h3 id="格式化-slack-通知" tabindex="-1"><a class="header-anchor" href="#格式化-slack-通知" aria-hidden="true">#</a> 格式化 Slack 通知</h3><p>如果通知支持作为 Slack 消息发送，你应在通知类上定义 <code>toSlack</code> 方法。此方法将接收一个 <code>$notifiable</code> 实体并应返回一个 <code>Illuminate\\Notifications\\Messages\\SlackMessage</code> 实例。Slack 消息可能包含文本内容以及格式化附加文本或字段数组的「附件」。 让我们看一个基本的 <code>toSlack</code> 示例：</p><pre><code>use Illuminate\\Notifications\\Messages\\SlackMessage;

/**
 * 获取通知的 Slack 表达式。
 */
public function toSlack(object $notifiable): SlackMessage
{
    return (new SlackMessage)
                -&gt;content(&#39;你的一张发票已经付款了！&#39;);
}
</code></pre><p><a name="slack-attachments"></a></p><h3 id="slack-附件" tabindex="-1"><a class="header-anchor" href="#slack-附件" aria-hidden="true">#</a> Slack 附件</h3><p>你还可以向 Slack 消息添加「附件」。附件提供比简单文本消息更丰富的格式选项。在这个例子中，我们将发送一个关于应用程序中发生的异常的错误通知，包括一个链接，以查看有关异常的更多详细信息：</p><pre><code>use Illuminate\\Notifications\\Messages\\SlackAttachment;
use Illuminate\\Notifications\\Messages\\SlackMessage;

/**
 * 获取通知的 Slack 表示形式。
 */
public function toSlack(object $notifiable): SlackMessage
{
    $url = url(&#39;/exceptions/&#39;.$this-&gt;exception-&gt;id);

    return (new SlackMessage)
                -&gt;error()
                -&gt;content(&#39;哎呀！出了问题。&#39;)
                -&gt;attachment(function (SlackAttachment $attachment) use ($url) {
                    $attachment-&gt;title(&#39;例外：文件未找到&#39;, $url)
                               -&gt;content(&#39;文件 [background.jpg] 未找到。&#39;);
                });
}
</code></pre><p>附件还允许你指定应呈现给用户的数据数组。 给定的数据将以表格形式呈现，以便于阅读：</p><pre><code>use Illuminate\\Notifications\\Messages\\SlackAttachment;
use Illuminate\\Notifications\\Messages\\SlackMessage;

/**
 * 获取通知的 Slack 表示形式。
 */
public function toSlack(object $notifiable): SlackMessage
{
    $url = url(&#39;/invoices/&#39;.$this-&gt;invoice-&gt;id);

    return (new SlackMessage)
                -&gt;success()
                -&gt;content(&#39;你的一张发票已经付款了！&#39;)
                -&gt;attachment(function (SlackAttachment $attachment) use ($url) {
                    $attachment-&gt;title(&#39;Invoice 1322&#39;, $url)
                               -&gt;fields([
                                    &#39;Title&#39; =&gt; &#39;Server Expenses&#39;,
                                    &#39;Amount&#39; =&gt; &#39;$1,234&#39;,
                                    &#39;Via&#39; =&gt; &#39;American Express&#39;,
                                    &#39;Was Overdue&#39; =&gt; &#39;:-1:&#39;,
                                ]);
                });
}
</code></pre><p><a name="markdown-attachment-content"></a></p><h4 id="markdown-附件内容" tabindex="-1"><a class="header-anchor" href="#markdown-附件内容" aria-hidden="true">#</a> Markdown 附件内容</h4>`,12),B=a("code",null,"markdown",-1),F=a("code",null,"pretext",-1),U=a("code",null,"text",-1),O=a("code",null,"fields",-1),Q={href:"https://api.slack.com/docs/message-formatting#message_formatting",target:"_blank",rel:"noopener noreferrer"},R=o(`<pre><code>use Illuminate\\Notifications\\Messages\\SlackAttachment;
use Illuminate\\Notifications\\Messages\\SlackMessage;

/**
 * 获取通知的 Slack 表示形式。
 */
public function toSlack(object $notifiable): SlackMessage
{
    $url = url(&#39;/exceptions/&#39;.$this-&gt;exception-&gt;id);

    return (new SlackMessage)
                -&gt;error()
                -&gt;content(&#39;Whoops! Something went wrong.&#39;)
                -&gt;attachment(function (SlackAttachment $attachment) use ($url) {
                    $attachment-&gt;title(&#39;Exception: File Not Found&#39;, $url)
                               -&gt;content(&#39;File [background.jpg] was *not found*.&#39;)
                               -&gt;markdown([&#39;text&#39;]);
                });
}
</code></pre><p><a name="routing-slack-notifications"></a></p><h3 id="路由-slack-通知" tabindex="-1"><a class="header-anchor" href="#路由-slack-通知" aria-hidden="true">#</a> 路由 Slack 通知</h3><p>为了将 Slack 通知路由到正确的 Slack 团队和频道，请在你的通知实体上定义一个 <code>routeNotificationForSlack</code> 方法。它应该返回要传送通知的 Webhook URL。Webhook URL 可以通过向你的 Slack 团队添加「传入 Webhook」服务来生成：</p><pre><code>&lt;?php

namespace App\\Models;

use Illuminate\\Foundation\\Auth\\User as Authenticatable;
use Illuminate\\Notifications\\Notifiable;
use Illuminate\\Notifications\\Notification;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * 路由 Slack 频道的通知。
     */
    public function routeNotificationForSlack(Notification $notification): string
    {
        return &#39;https://hooks.slack.com/services/...&#39;;
    }
}
</code></pre><p><a name="localizing-notifications"></a></p><h2 id="本地化通知" tabindex="-1"><a class="header-anchor" href="#本地化通知" aria-hidden="true">#</a> 本地化通知</h2><p>Laravel 允许你在除了当前请求语言环境之外的其他语言环境中发送通知，甚至在通知被队列化的情况下也能记住此语言环境。</p><p>为了实现这一功能，<code>Illuminate\\Notifications\\Notification</code> 类提供了 <code>locale</code> 方法来设置所需的语言环境。在通知被评估时，应用程序将切换到此语言环境，然后在评估完成后恢复到以前的语言环境：</p><pre><code>$user-&gt;notify((new InvoicePaid($invoice))-&gt;locale(&#39;es&#39;));
</code></pre><p>通过 <code>Notification</code> 门面，也可以实现多个通知实体的本地化：</p><pre><code>Notification::locale(&#39;es&#39;)-&gt;send(
    $users, new InvoicePaid($invoice)
);
</code></pre><p><a name="user-preferred-locales"></a></p><h3 id="用户首选语言环境" tabindex="-1"><a class="header-anchor" href="#用户首选语言环境" aria-hidden="true">#</a> 用户首选语言环境</h3><p>有时，应用程序会存储每个用户的首选区域设置。通过在你的可通知模型上实现 <code>HasLocalePreference</code> 合同，你可以指示 Laravel 在发送通知时使用此存储的区域设置：</p><pre><code>use Illuminate\\Contracts\\Translation\\HasLocalePreference;

class User extends Model implements HasLocalePreference
{
    /**
     * 获取用户的首选语言环境。
     */
    public function preferredLocale(): string
    {
        return $this-&gt;locale;
    }
}
</code></pre><p>翻译：一旦你实现了这个接口，当发送通知和邮件到该模型时，Laravel 会自动使用首选语言环境。因此，在使用此接口时不需要调用<code>locale</code>方法：</p><pre><code>$user-&gt;notify(new InvoicePaid($invoice));
</code></pre><p><a name="testing"></a></p><h2 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h2><p>你可以使用 <code>Notification</code> 门面的 <code>fake</code> 方法来阻止通知被发送。通常情况下，发送通知与你实际测试的代码无关。很可能，只需要断言 Laravel 被指示发送了给定的通知即可。</p><p>在调用 <code>Notification</code> 门面的 <code>fake</code> 方法后，你可以断言已经被告知将通知发送给用户，甚至检查通知接收到的数据：</p><pre><code>&lt;?php

namespace Tests\\Feature;

use App\\Notifications\\OrderShipped;
use Illuminate\\Support\\Facades\\Notification;
use Tests\\TestCase;

class ExampleTest extends TestCase
{
    public function test_orders_can_be_shipped(): void
    {
        Notification::fake();

        // 执行订单发货...

        // 断言没有发送通知...
        Notification::assertNothingSent();

        // 断言通知已发送给给定用户...
        Notification::assertSentTo(
            [$user], OrderShipped::class
        );

        // 断言未发送通知...
        Notification::assertNotSentTo(
            [$user], AnotherNotification::class
        );

        // 断言已发送给定数量的通知...
        Notification::assertCount(3);
    }
}
</code></pre><p>你可以通过向 <code>assertSentTo</code> 或 <code>assertNotSentTo</code> 方法传递一个闭包来断言发送了符合给定「真实性测试」的通知。如果发送了至少一个符合给定真实性测试的通知，则断言将成功：</p><pre><code>Notification::assertSentTo(
    $user,
    function (OrderShipped $notification, array $channels) use ($order) {
        return $notification-&gt;order-&gt;id === $order-&gt;id;
    }
);
</code></pre><p><a name="on-demand-notifications"></a></p><h4 id="按需通知-1" tabindex="-1"><a class="header-anchor" href="#按需通知-1" aria-hidden="true">#</a> 按需通知</h4>`,27),D={href:"https://chat.openai.com/chat#on-demand-notifications",target:"_blank",rel:"noopener noreferrer"},H=a("code",null,"assertSentOnDemand",-1),J=o(`<pre><code>Notification::assertSentOnDemand(OrderShipped::class);
</code></pre><p>通过将闭包作为 <code>assertSentOnDemand</code> 方法的第二个参数传递，你可以确定是否将即时通知发送到了正确的 「route」 地址：</p><pre><code>Notification::assertSentOnDemand(
    OrderShipped::class,
    function (OrderShipped $notification, array $channels, object $notifiable) use ($user) {
        return $notifiable-&gt;routes[&#39;mail&#39;] === $user-&gt;email;
    }
);
</code></pre><p><a name="notification-events"></a></p><h2 id="通知事件" tabindex="-1"><a class="header-anchor" href="#通知事件" aria-hidden="true">#</a> 通知事件</h2><p><a name="notification-sending-event"></a></p><h4 id="通知发送事件" tabindex="-1"><a class="header-anchor" href="#通知发送事件" aria-hidden="true">#</a> 通知发送事件</h4><p>发送通知时，通知系统会调度 <code>Illuminate\\Notifications\\Events\\NotificationSending</code> <a href="./events">事件</a>。 这包含「可通知」实体和通知实例本身。 你可以在应用程序的 <code>EventServiceProvider</code> 中为该事件注册监听器：</p><pre><code>use App\\Listeners\\CheckNotificationStatus;
use Illuminate\\Notifications\\Events\\NotificationSending;

/**
 * 应用程序的事件侦听器映射。
 *
 * @var array
 */
protected $listen = [
    NotificationSending::class =&gt; [
        CheckNotificationStatus::class,
    ],
];
</code></pre><p>如果 <code>NotificationSending</code> 事件的监听器从它的 <code>handle</code> 方法返回 <code>false</code>，通知将不会被发送：</p><pre><code>use Illuminate\\Notifications\\Events\\NotificationSending;

/**
 * 处理事件。
 */
public function handle(NotificationSending $event): void
{
    return false;
}
</code></pre><p>在事件监听器中，你可以访问事件的 <code>notifiable</code>、<code>notification</code> 和 <code>channel</code> 属性，以了解有关通知接收者或通知本身的更多信息。</p><pre><code>/**
 * 处理事件。
 */
public function handle(NotificationSending $event): void
{
    // $event-&gt;channel
    // $event-&gt;notifiable
    // $event-&gt;notification
}
</code></pre><p><a name="notification-sent-event"></a></p><h4 id="通知发送事件-1" tabindex="-1"><a class="header-anchor" href="#通知发送事件-1" aria-hidden="true">#</a> 通知发送事件</h4><p>当通知被发送时，通知系统会触发 <code>Illuminate\\Notifications\\Events\\NotificationSent</code> <a href="./events">事件</a>，其中包含 「notifiable」 实体和通知实例本身。你可以在 <code>EventServiceProvider</code> 中注册此事件的监听器：</p><pre><code>use App\\Listeners\\LogNotification;
use Illuminate\\Notifications\\Events\\NotificationSent;

/**
 * 应用程序的事件侦听器映射。
 *
 * @var array
 */
protected $listen = [
    NotificationSent::class =&gt; [
        LogNotification::class,
    ],
];
</code></pre><blockquote><p><strong>注意</strong><br> 在 <code>EventServiceProvider</code> 中注册了监听器之后，可以使用 event:generate Artisan 命令快速生成监听器类。</p></blockquote><p>在事件监听器中，你可以访问事件上的 <code>notifiable</code>、<code>notification</code>、<code>channel</code> 和 <code>response</code> 属性，以了解更多有关通知收件人或通知本身的信息：</p><pre><code>/**
 * 处理事件。
 */
public function handle(NotificationSent $event): void
{
    // $event-&gt;channel
    // $event-&gt;notifiable
    // $event-&gt;notification
    // $event-&gt;response
}
</code></pre><p><a name="custom-channels"></a></p><h2 id="自定义频道" tabindex="-1"><a class="header-anchor" href="#自定义频道" aria-hidden="true">#</a> 自定义频道</h2><p>Laravel 提供了一些通知频道，但你可能想编写自己的驱动程序，以通过其他频道传递通知。Laravel 让这变得简单。要开始，定义一个包含 <code>send</code> 方法的类。该方法应接收两个参数：<code>$notifiable</code> 和 <code>$notification</code>。</p><p>在 <code>send</code> 方法中，你可以调用通知上的方法来检索一个由你的频道理解的消息对象，然后按照你希望的方式将通知发送给 <code>$notifiable</code> 实例：</p><pre><code>&lt;?php

namespace App\\Notifications;

use Illuminate\\Notifications\\Notification;

class VoiceChannel
{
    /**
     * 发送给定的通知
     */
    public function send(object $notifiable, Notification $notification): void
    {
        $message = $notification-&gt;toVoice($notifiable);

        // 将通知发送给 $notifiable 实例...
    }
}
</code></pre><p>一旦你定义了你的通知频道类，你可以从你的任何通知的 <code>via</code> 方法返回该类的名称。在这个例子中，你的通知的 <code>toVoice</code> 方法可以返回你选择来表示语音消息的任何对象。例如，你可以定义自己的 <code>VoiceMessage</code> 类来表示这些消息：</p><pre><code>&lt;?php

namespace App\\Notifications;

use App\\Notifications\\Messages\\VoiceMessage;
use App\\Notifications\\VoiceChannel;
use Illuminate\\Bus\\Queueable;
use Illuminate\\Contracts\\Queue\\ShouldQueue;
use Illuminate\\Notifications\\Notification;

class InvoicePaid extends Notification
{
    use Queueable;

    /**
     * 获取通知频道
     */
    public function via(object $notifiable): string
    {
        return VoiceChannel::class;
    }

    /**
     * 获取通知的语音表示形式
     */
    public function toVoice(object $notifiable): VoiceMessage
    {
        // ...
    }
}
</code></pre>`,27);function W(G,K){const n=d("ExternalLinkIcon");return s(),r("div",null,[p,a("p",null,[e("除了支持 "),h,e(" 之外，Laravel还提供了支持通过多种传递渠道发送通知的功能，包括电子邮件、短信（通过 "),a("a",u,[e("Vonage"),i(n)]),e("，前身为Nexmo）和 "),a("a",f,[e("Slack"),i(n)]),e("。此外，已经创建了多种 "),a("a",g,[e("社区构建的通知渠道"),i(n)]),e("，用于通过数十个不同的渠道发送通知！通知也可以存储在数据库中，以便在你的Web界面中显示。")]),m,a("blockquote",null,[a("p",null,[b,e(" 如果你想使用其他的频道，比如 Telegram 或者 Pusher，你可以去看下社区驱动的 "),a("a",v,[e("Laravel 通知频道网站"),i(n)]),e(".")])]),M,a("p",null,[e("如果你的应用程序使用 Mailgun 驱动程序，则可以查阅 Mailgun 的文档以获取有关 "),a("a",$,[e("标签"),i(n)]),e(" 和 "),a("a",k,[e("元数据"),i(n)]),e(" 的更多信息。同样，也可以参考 Postmark 文档了解他们对 "),a("a",N,[e("标签"),i(n)]),e(" 和 "),a("a",S,[e("元数据"),i(n)]),e(" 的支持。")]),a("p",null,[e("如果你的应用程序使用 Amazon SES 发送电子邮件，则应使用 "),_,e(" 方法将 "),a("a",x,[e("SES 「标签」"),i(n)]),e("附加到消息。 "),w]),I,a("p",null,[e("Laravel 中发送短信通知是由 "),a("a",y,[e("Vonage"),i(n)]),e("（之前称为 Nexmo）驱动的。在通过 Vonage 发送通知之前，你需要安装 "),A,e(" 和 "),V,e(" 包：")]),q,a("p",null,[e("该包包括一个 "),a("a",P,[e("配置文件"),i(n)]),e("。但是，你不需要将此配置文件导出到自己的应用程序。你可以简单地使用 "),j,e(" 和 "),L,e(" 环境变量来定义 Vonage 的公共和私有密钥。")]),C,a("p",null,[e("你还需要为你的团队创建一个 "),a("a",z,[e("Slack 应用"),i(n)]),e("。创建应用后，你应该为工作区配置一个「传入 Webhook」。 然后，Slack 将为你提供一个 webhook URL，你可以在 "),E,e(" 时使用该 URL。")]),T,a("p",null,[e("如果你的附件字段中包含 Markdown，则可以使用 "),B,e(" 方法指示 Slack 解析和显示给定的附件字段为 Markdown 格式的文本。此方法接受的值是："),F,e("、"),U,e("和/或"),O,e("。有关 Slack 附件格式的更多信息，请查看 "),a("a",Q,[e("Slack API 文档"),i(n)]),e("：")]),R,a("p",null,[e("如果你正在测试的代码发送 "),a("a",D,[e("即时通知"),i(n)]),e("，你可以使用 "),H,e(" 方法测试是否发送了即时通知：")]),J])}const ee=c(l,[["render",W],["__file","notifications.html.vue"]]);export{ee as default};
