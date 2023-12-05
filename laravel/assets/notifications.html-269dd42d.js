import{_ as o}from"./notification-example-2-531a8633.js";import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as c,o as r,c as d,b as t,d as e,e as i,a}from"./app-8cdff07c.js";const l={},h=a('<h1 id="notifications" tabindex="-1"><a class="header-anchor" href="#notifications" aria-hidden="true">#</a> Notifications</h1><ul><li><a href="#introduction">Introduction</a></li><li><a href="#generating-notifications">Generating Notifications</a></li><li><a href="#sending-notifications">Sending Notifications</a><ul><li><a href="#using-the-notifiable-trait">Using The Notifiable Trait</a></li><li><a href="#using-the-notification-facade">Using The Notification Facade</a></li><li><a href="#specifying-delivery-channels">Specifying Delivery Channels</a></li><li><a href="#queueing-notifications">Queueing Notifications</a></li><li><a href="#on-demand-notifications">On-Demand Notifications</a></li></ul></li><li><a href="#mail-notifications">Mail Notifications</a><ul><li><a href="#formatting-mail-messages">Formatting Mail Messages</a></li><li><a href="#customizing-the-sender">Customizing The Sender</a></li><li><a href="#customizing-the-recipient">Customizing The Recipient</a></li><li><a href="#customizing-the-subject">Customizing The Subject</a></li><li><a href="#customizing-the-mailer">Customizing The Mailer</a></li><li><a href="#customizing-the-templates">Customizing The Templates</a></li><li><a href="#mail-attachments">Attachments</a></li><li><a href="#adding-tags-metadata">Adding Tags &amp; Metadata</a></li><li><a href="#customizing-the-symfony-message">Customizing The Symfony Message</a></li><li><a href="#using-mailables">Using Mailables</a></li><li><a href="#previewing-mail-notifications">Previewing Mail Notifications</a></li></ul></li><li><a href="#markdown-mail-notifications">Markdown Mail Notifications</a><ul><li><a href="#generating-the-message">Generating The Message</a></li><li><a href="#writing-the-message">Writing The Message</a></li><li><a href="#customizing-the-components">Customizing The Components</a></li></ul></li><li><a href="#database-notifications">Database Notifications</a><ul><li><a href="#database-prerequisites">Prerequisites</a></li><li><a href="#formatting-database-notifications">Formatting Database Notifications</a></li><li><a href="#accessing-the-notifications">Accessing The Notifications</a></li><li><a href="#marking-notifications-as-read">Marking Notifications As Read</a></li></ul></li><li><a href="#broadcast-notifications">Broadcast Notifications</a><ul><li><a href="#broadcast-prerequisites">Prerequisites</a></li><li><a href="#formatting-broadcast-notifications">Formatting Broadcast Notifications</a></li><li><a href="#listening-for-notifications">Listening For Notifications</a></li></ul></li><li><a href="#sms-notifications">SMS Notifications</a><ul><li><a href="#sms-prerequisites">Prerequisites</a></li><li><a href="#formatting-sms-notifications">Formatting SMS Notifications</a></li><li><a href="#unicode-content">Unicode Content</a></li><li><a href="#customizing-the-from-number">Customizing The &quot;From&quot; Number</a></li><li><a href="#adding-a-client-reference">Adding A Client Reference</a></li><li><a href="#routing-sms-notifications">Routing SMS Notifications</a></li></ul></li><li><a href="#slack-notifications">Slack Notifications</a><ul><li><a href="#slack-prerequisites">Prerequisites</a></li><li><a href="#formatting-slack-notifications">Formatting Slack Notifications</a></li><li><a href="#slack-interactivity">Slack Interactivity</a></li><li><a href="#routing-slack-notifications">Routing Slack Notifications</a></li><li><a href="#notifying-external-slack-workspaces">Notifying External Slack Workspaces</a></li></ul></li><li><a href="#localizing-notifications">Localizing Notifications</a></li><li><a href="#testing">Testing</a></li><li><a href="#notification-events">Notification Events</a></li><li><a href="#custom-channels">Custom Channels</a></li></ul><p><a name="introduction"></a></p><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2>',4),u=t("a",{href:"./mail"},"sending email",-1),f={href:"https://www.vonage.com/communications-apis/",target:"_blank",rel:"noopener noreferrer"},p={href:"https://slack.com",target:"_blank",rel:"noopener noreferrer"},m={href:"https://laravel-notification-channels.com/about/#suggesting-a-new-channel",target:"_blank",rel:"noopener noreferrer"},g=a(`<p>Typically, notifications should be short, informational messages that notify users of something that occurred in your application. For example, if you are writing a billing application, you might send an &quot;Invoice Paid&quot; notification to your users via the email and SMS channels.</p><p><a name="generating-notifications"></a></p><h2 id="generating-notifications" tabindex="-1"><a class="header-anchor" href="#generating-notifications" aria-hidden="true">#</a> Generating Notifications</h2><p>In Laravel, each notification is represented by a single class that is typically stored in the <code>app/Notifications</code> directory. Don&#39;t worry if you don&#39;t see this directory in your application - it will be created for you when you run the <code>make:notification</code> Artisan command:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan make:notification InvoicePaid
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>This command will place a fresh notification class in your <code>app/Notifications</code> directory. Each notification class contains a <code>via</code> method and a variable number of message building methods, such as <code>toMail</code> or <code>toDatabase</code>, that convert the notification to a message tailored for that particular channel.</p><p><a name="sending-notifications"></a></p><h2 id="sending-notifications" tabindex="-1"><a class="header-anchor" href="#sending-notifications" aria-hidden="true">#</a> Sending Notifications</h2><p><a name="using-the-notifiable-trait"></a></p><h3 id="using-the-notifiable-trait" tabindex="-1"><a class="header-anchor" href="#using-the-notifiable-trait" aria-hidden="true">#</a> Using The Notifiable Trait</h3><p>Notifications may be sent in two ways: using the <code>notify</code> method of the <code>Notifiable</code> trait or using the <code>Notification</code> <a href="./facades">facade</a>. The <code>Notifiable</code> trait is included on your application&#39;s <code>App\\Models\\User</code> model by default:</p><pre><code>&lt;?php

namespace App\\Models;

use Illuminate\\Foundation\\Auth\\User as Authenticatable;
use Illuminate\\Notifications\\Notifiable;

class User extends Authenticatable
{
    use Notifiable;
}
</code></pre><p>The <code>notify</code> method that is provided by this trait expects to receive a notification instance:</p><pre><code>use App\\Notifications\\InvoicePaid;

$user-&gt;notify(new InvoicePaid($invoice));
</code></pre><blockquote><p><strong>Note</strong><br> Remember, you may use the <code>Notifiable</code> trait on any of your models. You are not limited to only including it on your <code>User</code> model.</p></blockquote><p><a name="using-the-notification-facade"></a></p><h3 id="using-the-notification-facade" tabindex="-1"><a class="header-anchor" href="#using-the-notification-facade" aria-hidden="true">#</a> Using The Notification Facade</h3><p>Alternatively, you may send notifications via the <code>Notification</code> <a href="./facades">facade</a>. This approach is useful when you need to send a notification to multiple notifiable entities such as a collection of users. To send notifications using the facade, pass all of the notifiable entities and the notification instance to the <code>send</code> method:</p><pre><code>use Illuminate\\Support\\Facades\\Notification;

Notification::send($users, new InvoicePaid($invoice));
</code></pre><p>You can also send notifications immediately using the <code>sendNow</code> method. This method will send the notification immediately even if the notification implements the <code>ShouldQueue</code> interface:</p><pre><code>Notification::sendNow($developers, new DeploymentCompleted($deployment));
</code></pre><p><a name="specifying-delivery-channels"></a></p><h3 id="specifying-delivery-channels" tabindex="-1"><a class="header-anchor" href="#specifying-delivery-channels" aria-hidden="true">#</a> Specifying Delivery Channels</h3><p>Every notification class has a <code>via</code> method that determines on which channels the notification will be delivered. Notifications may be sent on the <code>mail</code>, <code>database</code>, <code>broadcast</code>, <code>vonage</code>, and <code>slack</code> channels.</p>`,24),b=t("strong",null,"Note",-1),y=t("br",null,null,-1),v={href:"http://laravel-notification-channels.com",target:"_blank",rel:"noopener noreferrer"},k=a(`<p>The <code>via</code> method receives a <code>$notifiable</code> instance, which will be an instance of the class to which the notification is being sent. You may use <code>$notifiable</code> to determine which channels the notification should be delivered on:</p><pre><code>/**
 * Get the notification&#39;s delivery channels.
 *
 * @return array&lt;int, string&gt;
 */
public function via(object $notifiable): array
{
    return $notifiable-&gt;prefers_sms ? [&#39;vonage&#39;] : [&#39;mail&#39;, &#39;database&#39;];
}
</code></pre><p><a name="queueing-notifications"></a></p><h3 id="queueing-notifications" tabindex="-1"><a class="header-anchor" href="#queueing-notifications" aria-hidden="true">#</a> Queueing Notifications</h3><blockquote><p><strong>Warning</strong><br> Before queueing notifications you should configure your queue and <a href="./queues#running-the-queue-worker">start a worker</a>.</p></blockquote><p>Sending notifications can take time, especially if the channel needs to make an external API call to deliver the notification. To speed up your application&#39;s response time, let your notification be queued by adding the <code>ShouldQueue</code> interface and <code>Queueable</code> trait to your class. The interface and trait are already imported for all notifications generated using the <code>make:notification</code> command, so you may immediately add them to your notification class:</p><pre><code>&lt;?php

namespace App\\Notifications;

use Illuminate\\Bus\\Queueable;
use Illuminate\\Contracts\\Queue\\ShouldQueue;
use Illuminate\\Notifications\\Notification;

class InvoicePaid extends Notification implements ShouldQueue
{
    use Queueable;

    // ...
}
</code></pre><p>Once the <code>ShouldQueue</code> interface has been added to your notification, you may send the notification like normal. Laravel will detect the <code>ShouldQueue</code> interface on the class and automatically queue the delivery of the notification:</p><pre><code>$user-&gt;notify(new InvoicePaid($invoice));
</code></pre><p>When queueing notifications, a queued job will be created for each recipient and channel combination. For example, six jobs will be dispatched to the queue if your notification has three recipients and two channels.</p><p><a name="delaying-notifications"></a></p><h4 id="delaying-notifications" tabindex="-1"><a class="header-anchor" href="#delaying-notifications" aria-hidden="true">#</a> Delaying Notifications</h4><p>If you would like to delay the delivery of the notification, you may chain the <code>delay</code> method onto your notification instantiation:</p><pre><code>$delay = now()-&gt;addMinutes(10);

$user-&gt;notify((new InvoicePaid($invoice))-&gt;delay($delay));
</code></pre><p><a name="delaying-notifications-per-channel"></a></p><h4 id="delaying-notifications-per-channel" tabindex="-1"><a class="header-anchor" href="#delaying-notifications-per-channel" aria-hidden="true">#</a> Delaying Notifications Per Channel</h4><p>You may pass an array to the <code>delay</code> method to specify the delay amount for specific channels:</p><pre><code>$user-&gt;notify((new InvoicePaid($invoice))-&gt;delay([
    &#39;mail&#39; =&gt; now()-&gt;addMinutes(5),
    &#39;sms&#39; =&gt; now()-&gt;addMinutes(10),
]));
</code></pre><p>Alternatively, you may define a <code>withDelay</code> method on the notification class itself. The <code>withDelay</code> method should return an array of channel names and delay values:</p><pre><code>/**
 * Determine the notification&#39;s delivery delay.
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
</code></pre><p><a name="customizing-the-notification-queue-connection"></a></p><h4 id="customizing-the-notification-queue-connection" tabindex="-1"><a class="header-anchor" href="#customizing-the-notification-queue-connection" aria-hidden="true">#</a> Customizing The Notification Queue Connection</h4><p>By default, queued notifications will be queued using your application&#39;s default queue connection. If you would like to specify a different connection that should be used for a particular notification, you may call the <code>onConnection</code> method from your notification&#39;s constructor:</p><pre><code>&lt;?php

namespace App\\Notifications;

use Illuminate\\Bus\\Queueable;
use Illuminate\\Contracts\\Queue\\ShouldQueue;
use Illuminate\\Notifications\\Notification;

class InvoicePaid extends Notification implements ShouldQueue
{
    use Queueable;

    /**
     * Create a new notification instance.
     */
    public function __construct()
    {
        $this-&gt;onConnection(&#39;redis&#39;);
    }
}
</code></pre><p>Or, if you would like to specify a specific queue connection that should be used for each notification channel supported by the notification, you may define a <code>viaConnections</code> method on your notification. This method should return an array of channel name / queue connection name pairs:</p><pre><code>/**
 * Determine which connections should be used for each notification channel.
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
</code></pre><p><a name="customizing-notification-channel-queues"></a></p><h4 id="customizing-notification-channel-queues" tabindex="-1"><a class="header-anchor" href="#customizing-notification-channel-queues" aria-hidden="true">#</a> Customizing Notification Channel Queues</h4><p>If you would like to specify a specific queue that should be used for each notification channel supported by the notification, you may define a <code>viaQueues</code> method on your notification. This method should return an array of channel name / queue name pairs:</p><pre><code>/**
 * Determine which queues should be used for each notification channel.
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
</code></pre><p><a name="queued-notifications-and-database-transactions"></a></p><h4 id="queued-notifications-database-transactions" tabindex="-1"><a class="header-anchor" href="#queued-notifications-database-transactions" aria-hidden="true">#</a> Queued Notifications &amp; Database Transactions</h4><p>When queued notifications are dispatched within database transactions, they may be processed by the queue before the database transaction has committed. When this happens, any updates you have made to models or database records during the database transaction may not yet be reflected in the database. In addition, any models or database records created within the transaction may not exist in the database. If your notification depends on these models, unexpected errors can occur when the job that sends the queued notification is processed.</p><p>If your queue connection&#39;s <code>after_commit</code> configuration option is set to <code>false</code>, you may still indicate that a particular queued notification should be dispatched after all open database transactions have been committed by calling the <code>afterCommit</code> method when sending the notification:</p><pre><code>use App\\Notifications\\InvoicePaid;

$user-&gt;notify((new InvoicePaid($invoice))-&gt;afterCommit());
</code></pre><p>Alternatively, you may call the <code>afterCommit</code> method from your notification&#39;s constructor:</p><pre><code>&lt;?php

namespace App\\Notifications;

use Illuminate\\Bus\\Queueable;
use Illuminate\\Contracts\\Queue\\ShouldQueue;
use Illuminate\\Notifications\\Notification;

class InvoicePaid extends Notification implements ShouldQueue
{
    use Queueable;

    /**
     * Create a new notification instance.
     */
    public function __construct()
    {
        $this-&gt;afterCommit();
    }
}
</code></pre><blockquote><p><strong>Note</strong><br> To learn more about working around these issues, please review the documentation regarding <a href="./queues#jobs-and-database-transactions">queued jobs and database transactions</a>.</p></blockquote><p><a name="determining-if-the-queued-notification-should-be-sent"></a></p><h4 id="determining-if-a-queued-notification-should-be-sent" tabindex="-1"><a class="header-anchor" href="#determining-if-a-queued-notification-should-be-sent" aria-hidden="true">#</a> Determining If A Queued Notification Should Be Sent</h4><p>After a queued notification has been dispatched for the queue for background processing, it will typically be accepted by a queue worker and sent to its intended recipient.</p><p>However, if you would like to make the final determination on whether the queued notification should be sent after it is being processed by a queue worker, you may define a <code>shouldSend</code> method on the notification class. If this method returns <code>false</code>, the notification will not be sent:</p><pre><code>/**
 * Determine if the notification should be sent.
 */
public function shouldSend(object $notifiable, string $channel): bool
{
    return $this-&gt;invoice-&gt;isPaid();
}
</code></pre><p><a name="on-demand-notifications"></a></p><h3 id="on-demand-notifications" tabindex="-1"><a class="header-anchor" href="#on-demand-notifications" aria-hidden="true">#</a> On-Demand Notifications</h3><p>Sometimes you may need to send a notification to someone who is not stored as a &quot;user&quot; of your application. Using the <code>Notification</code> facade&#39;s <code>route</code> method, you may specify ad-hoc notification routing information before sending the notification:</p><pre><code>use Illuminate\\Broadcasting\\Channel;
use Illuminate\\Support\\Facades\\Notification;

Notification::route(&#39;mail&#39;, &#39;taylor@example.com&#39;)
            -&gt;route(&#39;vonage&#39;, &#39;5555555555&#39;)
            -&gt;route(&#39;slack&#39;, &#39;#slack-channel&#39;)
            -&gt;route(&#39;broadcast&#39;, [new Channel(&#39;channel-name&#39;)])
            -&gt;notify(new InvoicePaid($invoice));
</code></pre><p>If you would like to provide the recipient&#39;s name when sending an on-demand notification to the <code>mail</code> route, you may provide an array that contains the email address as the key and the name as the value of the first element in the array:</p><pre><code>Notification::route(&#39;mail&#39;, [
    &#39;barrett@example.com&#39; =&gt; &#39;Barrett Blair&#39;,
])-&gt;notify(new InvoicePaid($invoice));
</code></pre><p><a name="mail-notifications"></a></p><h2 id="mail-notifications" tabindex="-1"><a class="header-anchor" href="#mail-notifications" aria-hidden="true">#</a> Mail Notifications</h2><p><a name="formatting-mail-messages"></a></p><h3 id="formatting-mail-messages" tabindex="-1"><a class="header-anchor" href="#formatting-mail-messages" aria-hidden="true">#</a> Formatting Mail Messages</h3><p>If a notification supports being sent as an email, you should define a <code>toMail</code> method on the notification class. This method will receive a <code>$notifiable</code> entity and should return an <code>Illuminate\\Notifications\\Messages\\MailMessage</code> instance.</p><p>The <code>MailMessage</code> class contains a few simple methods to help you build transactional email messages. Mail messages may contain lines of text as well as a &quot;call to action&quot;. Let&#39;s take a look at an example <code>toMail</code> method:</p><pre><code>/**
 * Get the mail representation of the notification.
 */
public function toMail(object $notifiable): MailMessage
{
    $url = url(&#39;/invoice/&#39;.$this-&gt;invoice-&gt;id);

    return (new MailMessage)
                -&gt;greeting(&#39;Hello!&#39;)
                -&gt;line(&#39;One of your invoices has been paid!&#39;)
                -&gt;lineIf($this-&gt;amount &gt; 0, &quot;Amount paid: {$this-&gt;amount}&quot;)
                -&gt;action(&#39;View Invoice&#39;, $url)
                -&gt;line(&#39;Thank you for using our application!&#39;);
}
</code></pre><blockquote><p><strong>Note</strong><br> Note we are using <code>$this-&gt;invoice-&gt;id</code> in our <code>toMail</code> method. You may pass any data your notification needs to generate its message into the notification&#39;s constructor.</p></blockquote><p>In this example, we register a greeting, a line of text, a call to action, and then another line of text. These methods provided by the <code>MailMessage</code> object make it simple and fast to format small transactional emails. The mail channel will then translate the message components into a beautiful, responsive HTML email template with a plain-text counterpart. Here is an example of an email generated by the <code>mail</code> channel:</p><img src="`+o+`"><blockquote><p><strong>Note</strong><br> When sending mail notifications, be sure to set the <code>name</code> configuration option in your <code>config/app.php</code> configuration file. This value will be used in the header and footer of your mail notification messages.</p></blockquote><p><a name="error-messages"></a></p><h4 id="error-messages" tabindex="-1"><a class="header-anchor" href="#error-messages" aria-hidden="true">#</a> Error Messages</h4><p>Some notifications inform users of errors, such as a failed invoice payment. You may indicate that a mail message is regarding an error by calling the <code>error</code> method when building your message. When using the <code>error</code> method on a mail message, the call to action button will be red instead of black:</p><pre><code>/**
 * Get the mail representation of the notification.
 */
public function toMail(object $notifiable): MailMessage
{
    return (new MailMessage)
                -&gt;error()
                -&gt;subject(&#39;Invoice Payment Failed&#39;)
                -&gt;line(&#39;...&#39;);
}
</code></pre><p><a name="other-mail-notification-formatting-options"></a></p><h4 id="other-mail-notification-formatting-options" tabindex="-1"><a class="header-anchor" href="#other-mail-notification-formatting-options" aria-hidden="true">#</a> Other Mail Notification Formatting Options</h4><p>Instead of defining the &quot;lines&quot; of text in the notification class, you may use the <code>view</code> method to specify a custom template that should be used to render the notification email:</p><pre><code>/**
 * Get the mail representation of the notification.
 */
public function toMail(object $notifiable): MailMessage
{
    return (new MailMessage)-&gt;view(
        &#39;emails.name&#39;, [&#39;invoice&#39; =&gt; $this-&gt;invoice]
    );
}
</code></pre><p>You may specify a plain-text view for the mail message by passing the view name as the second element of an array that is given to the <code>view</code> method:</p><pre><code>/**
 * Get the mail representation of the notification.
 */
public function toMail(object $notifiable): MailMessage
{
    return (new MailMessage)-&gt;view(
        [&#39;emails.name.html&#39;, &#39;emails.name.plain&#39;],
        [&#39;invoice&#39; =&gt; $this-&gt;invoice]
    );
}
</code></pre><p><a name="customizing-the-sender"></a></p><h3 id="customizing-the-sender" tabindex="-1"><a class="header-anchor" href="#customizing-the-sender" aria-hidden="true">#</a> Customizing The Sender</h3><p>By default, the email&#39;s sender / from address is defined in the <code>config/mail.php</code> configuration file. However, you may specify the from address for a specific notification using the <code>from</code> method:</p><pre><code>/**
 * Get the mail representation of the notification.
 */
public function toMail(object $notifiable): MailMessage
{
    return (new MailMessage)
                -&gt;from(&#39;barrett@example.com&#39;, &#39;Barrett Blair&#39;)
                -&gt;line(&#39;...&#39;);
}
</code></pre><p><a name="customizing-the-recipient"></a></p><h3 id="customizing-the-recipient" tabindex="-1"><a class="header-anchor" href="#customizing-the-recipient" aria-hidden="true">#</a> Customizing The Recipient</h3><p>When sending notifications via the <code>mail</code> channel, the notification system will automatically look for an <code>email</code> property on your notifiable entity. You may customize which email address is used to deliver the notification by defining a <code>routeNotificationForMail</code> method on the notifiable entity:</p><pre><code>&lt;?php

namespace App\\Models;

use Illuminate\\Foundation\\Auth\\User as Authenticatable;
use Illuminate\\Notifications\\Notifiable;
use Illuminate\\Notifications\\Notification;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * Route notifications for the mail channel.
     *
     * @return  array&lt;string, string&gt;|string
     */
    public function routeNotificationForMail(Notification $notification): array|string
    {
        // Return email address only...
        return $this-&gt;email_address;

        // Return email address and name...
        return [$this-&gt;email_address =&gt; $this-&gt;name];
    }
}
</code></pre><p><a name="customizing-the-subject"></a></p><h3 id="customizing-the-subject" tabindex="-1"><a class="header-anchor" href="#customizing-the-subject" aria-hidden="true">#</a> Customizing The Subject</h3><p>By default, the email&#39;s subject is the class name of the notification formatted to &quot;Title Case&quot;. So, if your notification class is named <code>InvoicePaid</code>, the email&#39;s subject will be <code>Invoice Paid</code>. If you would like to specify a different subject for the message, you may call the <code>subject</code> method when building your message:</p><pre><code>/**
 * Get the mail representation of the notification.
 */
public function toMail(object $notifiable): MailMessage
{
    return (new MailMessage)
                -&gt;subject(&#39;Notification Subject&#39;)
                -&gt;line(&#39;...&#39;);
}
</code></pre><p><a name="customizing-the-mailer"></a></p><h3 id="customizing-the-mailer" tabindex="-1"><a class="header-anchor" href="#customizing-the-mailer" aria-hidden="true">#</a> Customizing The Mailer</h3><p>By default, the email notification will be sent using the default mailer defined in the <code>config/mail.php</code> configuration file. However, you may specify a different mailer at runtime by calling the <code>mailer</code> method when building your message:</p><pre><code>/**
 * Get the mail representation of the notification.
 */
public function toMail(object $notifiable): MailMessage
{
    return (new MailMessage)
                -&gt;mailer(&#39;postmark&#39;)
                -&gt;line(&#39;...&#39;);
}
</code></pre><p><a name="customizing-the-templates"></a></p><h3 id="customizing-the-templates" tabindex="-1"><a class="header-anchor" href="#customizing-the-templates" aria-hidden="true">#</a> Customizing The Templates</h3><p>You can modify the HTML and plain-text template used by mail notifications by publishing the notification package&#39;s resources. After running this command, the mail notification templates will be located in the <code>resources/views/vendor/notifications</code> directory:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan vendor:publish <span class="token parameter variable">--tag</span><span class="token operator">=</span>laravel-notifications
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="mail-attachments"></a></p><h3 id="attachments" tabindex="-1"><a class="header-anchor" href="#attachments" aria-hidden="true">#</a> Attachments</h3><p>To add attachments to an email notification, use the <code>attach</code> method while building your message. The <code>attach</code> method accepts the absolute path to the file as its first argument:</p><pre><code>/**
 * Get the mail representation of the notification.
 */
public function toMail(object $notifiable): MailMessage
{
    return (new MailMessage)
                -&gt;greeting(&#39;Hello!&#39;)
                -&gt;attach(&#39;/path/to/file&#39;);
}
</code></pre><blockquote><p><strong>Note</strong><br> The <code>attach</code> method offered by notification mail messages also accepts <a href="./mail#attachable-objects">attachable objects</a>. Please consult the comprehensive <a href="./mail#attachable-objects">attachable object documentation</a> to learn more.</p></blockquote><p>When attaching files to a message, you may also specify the display name and / or MIME type by passing an <code>array</code> as the second argument to the <code>attach</code> method:</p><pre><code>/**
 * Get the mail representation of the notification.
 */
public function toMail(object $notifiable): MailMessage
{
    return (new MailMessage)
                -&gt;greeting(&#39;Hello!&#39;)
                -&gt;attach(&#39;/path/to/file&#39;, [
                    &#39;as&#39; =&gt; &#39;name.pdf&#39;,
                    &#39;mime&#39; =&gt; &#39;application/pdf&#39;,
                ]);
}
</code></pre><p>Unlike attaching files in mailable objects, you may not attach a file directly from a storage disk using <code>attachFromStorage</code>. You should rather use the <code>attach</code> method with an absolute path to the file on the storage disk. Alternatively, you could return a <a href="./mail#generating-mailables">mailable</a> from the <code>toMail</code> method:</p><pre><code>use App\\Mail\\InvoicePaid as InvoicePaidMailable;

/**
 * Get the mail representation of the notification.
 */
public function toMail(object $notifiable): Mailable
{
    return (new InvoicePaidMailable($this-&gt;invoice))
                -&gt;to($notifiable-&gt;email)
                -&gt;attachFromStorage(&#39;/path/to/file&#39;);
}
</code></pre><p>When necessary, multiple files may be attached to a message using the <code>attachMany</code> method:</p><pre><code>/**
 * Get the mail representation of the notification.
 */
public function toMail(object $notifiable): MailMessage
{
    return (new MailMessage)
                -&gt;greeting(&#39;Hello!&#39;)
                -&gt;attachMany([
                    &#39;/path/to/forge.svg&#39;,
                    &#39;/path/to/vapor.svg&#39; =&gt; [
                        &#39;as&#39; =&gt; &#39;Logo.svg&#39;,
                        &#39;mime&#39; =&gt; &#39;image/svg+xml&#39;,
                    ],
                ]);
}
</code></pre><p><a name="raw-data-attachments"></a></p><h4 id="raw-data-attachments" tabindex="-1"><a class="header-anchor" href="#raw-data-attachments" aria-hidden="true">#</a> Raw Data Attachments</h4><p>The <code>attachData</code> method may be used to attach a raw string of bytes as an attachment. When calling the <code>attachData</code> method, you should provide the filename that should be assigned to the attachment:</p><pre><code>/**
 * Get the mail representation of the notification.
 */
public function toMail(object $notifiable): MailMessage
{
    return (new MailMessage)
                -&gt;greeting(&#39;Hello!&#39;)
                -&gt;attachData($this-&gt;pdf, &#39;name.pdf&#39;, [
                    &#39;mime&#39; =&gt; &#39;application/pdf&#39;,
                ]);
}
</code></pre><p><a name="adding-tags-metadata"></a></p><h3 id="adding-tags-metadata" tabindex="-1"><a class="header-anchor" href="#adding-tags-metadata" aria-hidden="true">#</a> Adding Tags &amp; Metadata</h3><p>Some third-party email providers such as Mailgun and Postmark support message &quot;tags&quot; and &quot;metadata&quot;, which may be used to group and track emails sent by your application. You may add tags and metadata to an email message via the <code>tag</code> and <code>metadata</code> methods:</p><pre><code>/**
 * Get the mail representation of the notification.
 */
public function toMail(object $notifiable): MailMessage
{
    return (new MailMessage)
                -&gt;greeting(&#39;Comment Upvoted!&#39;)
                -&gt;tag(&#39;upvote&#39;)
                -&gt;metadata(&#39;comment_id&#39;, $this-&gt;comment-&gt;id);
}
</code></pre>`,109),w={href:"https://documentation.mailgun.com/en/latest/user_manual.html#tagging-1",target:"_blank",rel:"noopener noreferrer"},M={href:"https://documentation.mailgun.com/en/latest/user_manual.html#attaching-data-to-messages",target:"_blank",rel:"noopener noreferrer"},N={href:"https://postmarkapp.com/blog/tags-support-for-smtp",target:"_blank",rel:"noopener noreferrer"},S={href:"https://postmarkapp.com/support/article/1125-custom-metadata-faq",target:"_blank",rel:"noopener noreferrer"},x=t("code",null,"metadata",-1),$={href:"https://docs.aws.amazon.com/ses/latest/APIReference/API_MessageTag.html",target:"_blank",rel:"noopener noreferrer"},I=a(`<p><a name="customizing-the-symfony-message"></a></p><h3 id="customizing-the-symfony-message" tabindex="-1"><a class="header-anchor" href="#customizing-the-symfony-message" aria-hidden="true">#</a> Customizing The Symfony Message</h3><p>The <code>withSymfonyMessage</code> method of the <code>MailMessage</code> class allows you to register a closure which will be invoked with the Symfony Message instance before sending the message. This gives you an opportunity to deeply customize the message before it is delivered:</p><pre><code>use Symfony\\Component\\Mime\\Email;

/**
 * Get the mail representation of the notification.
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
</code></pre><p><a name="using-mailables"></a></p><h3 id="using-mailables" tabindex="-1"><a class="header-anchor" href="#using-mailables" aria-hidden="true">#</a> Using Mailables</h3><p>If needed, you may return a full <a href="./mail">mailable object</a> from your notification&#39;s <code>toMail</code> method. When returning a <code>Mailable</code> instead of a <code>MailMessage</code>, you will need to specify the message recipient using the mailable object&#39;s <code>to</code> method:</p><pre><code>use App\\Mail\\InvoicePaid as InvoicePaidMailable;
use Illuminate\\Mail\\Mailable;

/**
 * Get the mail representation of the notification.
 */
public function toMail(object $notifiable): Mailable
{
    return (new InvoicePaidMailable($this-&gt;invoice))
                -&gt;to($notifiable-&gt;email);
}
</code></pre><p><a name="mailables-and-on-demand-notifications"></a></p><h4 id="mailables-on-demand-notifications" tabindex="-1"><a class="header-anchor" href="#mailables-on-demand-notifications" aria-hidden="true">#</a> Mailables &amp; On-Demand Notifications</h4><p>If you are sending an <a href="#on-demand-notifications">on-demand notification</a>, the <code>$notifiable</code> instance given to the <code>toMail</code> method will be an instance of <code>Illuminate\\Notifications\\AnonymousNotifiable</code>, which offers a <code>routeNotificationFor</code> method that may be used to retrieve the email address the on-demand notification should be sent to:</p><pre><code>use App\\Mail\\InvoicePaid as InvoicePaidMailable;
use Illuminate\\Notifications\\AnonymousNotifiable;
use Illuminate\\Mail\\Mailable;

/**
 * Get the mail representation of the notification.
 */
public function toMail(object $notifiable): Mailable
{
    $address = $notifiable instanceof AnonymousNotifiable
            ? $notifiable-&gt;routeNotificationFor(&#39;mail&#39;)
            : $notifiable-&gt;email;

    return (new InvoicePaidMailable($this-&gt;invoice))
                -&gt;to($address);
}
</code></pre><p><a name="previewing-mail-notifications"></a></p><h3 id="previewing-mail-notifications" tabindex="-1"><a class="header-anchor" href="#previewing-mail-notifications" aria-hidden="true">#</a> Previewing Mail Notifications</h3><p>When designing a mail notification template, it is convenient to quickly preview the rendered mail message in your browser like a typical Blade template. For this reason, Laravel allows you to return any mail message generated by a mail notification directly from a route closure or controller. When a <code>MailMessage</code> is returned, it will be rendered and displayed in the browser, allowing you to quickly preview its design without needing to send it to an actual email address:</p><pre><code>use App\\Models\\Invoice;
use App\\Notifications\\InvoicePaid;

Route::get(&#39;/notification&#39;, function () {
    $invoice = Invoice::find(1);

    return (new InvoicePaid($invoice))
                -&gt;toMail($invoice-&gt;user);
});
</code></pre><p><a name="markdown-mail-notifications"></a></p><h2 id="markdown-mail-notifications" tabindex="-1"><a class="header-anchor" href="#markdown-mail-notifications" aria-hidden="true">#</a> Markdown Mail Notifications</h2><p>Markdown mail notifications allow you to take advantage of the pre-built templates of mail notifications, while giving you more freedom to write longer, customized messages. Since the messages are written in Markdown, Laravel is able to render beautiful, responsive HTML templates for the messages while also automatically generating a plain-text counterpart.</p><p><a name="generating-the-message"></a></p><h3 id="generating-the-message" tabindex="-1"><a class="header-anchor" href="#generating-the-message" aria-hidden="true">#</a> Generating The Message</h3><p>To generate a notification with a corresponding Markdown template, you may use the <code>--markdown</code> option of the <code>make:notification</code> Artisan command:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan make:notification InvoicePaid <span class="token parameter variable">--markdown</span><span class="token operator">=</span>mail.invoice.paid
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Like all other mail notifications, notifications that use Markdown templates should define a <code>toMail</code> method on their notification class. However, instead of using the <code>line</code> and <code>action</code> methods to construct the notification, use the <code>markdown</code> method to specify the name of the Markdown template that should be used. An array of data you wish to make available to the template may be passed as the method&#39;s second argument:</p><pre><code>/**
 * Get the mail representation of the notification.
 */
public function toMail(object $notifiable): MailMessage
{
    $url = url(&#39;/invoice/&#39;.$this-&gt;invoice-&gt;id);

    return (new MailMessage)
                -&gt;subject(&#39;Invoice Paid&#39;)
                -&gt;markdown(&#39;mail.invoice.paid&#39;, [&#39;url&#39; =&gt; $url]);
}
</code></pre><p><a name="writing-the-message"></a></p><h3 id="writing-the-message" tabindex="-1"><a class="header-anchor" href="#writing-the-message" aria-hidden="true">#</a> Writing The Message</h3><p>Markdown mail notifications use a combination of Blade components and Markdown syntax which allow you to easily construct notifications while leveraging Laravel&#39;s pre-crafted notification components:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;x-mail::message&gt;
# Invoice Paid

Your invoice has been paid!

&lt;x-mail::button :url=&quot;$url&quot;&gt;
View Invoice
&lt;/x-mail::button&gt;

Thanks,&lt;br&gt;
{{ config(&#39;app.name&#39;) }}
&lt;/x-mail::message&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="button-component"></a></p><h4 id="button-component" tabindex="-1"><a class="header-anchor" href="#button-component" aria-hidden="true">#</a> Button Component</h4><p>The button component renders a centered button link. The component accepts two arguments, a <code>url</code> and an optional <code>color</code>. Supported colors are <code>primary</code>, <code>green</code>, and <code>red</code>. You may add as many button components to a notification as you wish:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;x-mail::button :url=&quot;$url&quot; color=&quot;green&quot;&gt;
View Invoice
&lt;/x-mail::button&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="panel-component"></a></p><h4 id="panel-component" tabindex="-1"><a class="header-anchor" href="#panel-component" aria-hidden="true">#</a> Panel Component</h4><p>The panel component renders the given block of text in a panel that has a slightly different background color than the rest of the notification. This allows you to draw attention to a given block of text:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;x-mail::panel&gt;
This is the panel content.
&lt;/x-mail::panel&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="table-component"></a></p><h4 id="table-component" tabindex="-1"><a class="header-anchor" href="#table-component" aria-hidden="true">#</a> Table Component</h4><p>The table component allows you to transform a Markdown table into an HTML table. The component accepts the Markdown table as its content. Table column alignment is supported using the default Markdown table alignment syntax:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;x-mail::table&gt;
| Laravel       | Table         | Example  |
| ------------- |:-------------:| --------:|
| Col 2 is      | Centered      | $10      |
| Col 3 is      | Right-Aligned | $20      |
&lt;/x-mail::table&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="customizing-the-components"></a></p><h3 id="customizing-the-components" tabindex="-1"><a class="header-anchor" href="#customizing-the-components" aria-hidden="true">#</a> Customizing The Components</h3><p>You may export all of the Markdown notification components to your own application for customization. To export the components, use the <code>vendor:publish</code> Artisan command to publish the <code>laravel-mail</code> asset tag:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan vendor:publish <span class="token parameter variable">--tag</span><span class="token operator">=</span>laravel-mail
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>This command will publish the Markdown mail components to the <code>resources/views/vendor/mail</code> directory. The <code>mail</code> directory will contain an <code>html</code> and a <code>text</code> directory, each containing their respective representations of every available component. You are free to customize these components however you like.</p><p><a name="customizing-the-css"></a></p><h4 id="customizing-the-css" tabindex="-1"><a class="header-anchor" href="#customizing-the-css" aria-hidden="true">#</a> Customizing The CSS</h4><p>After exporting the components, the <code>resources/views/vendor/mail/html/themes</code> directory will contain a <code>default.css</code> file. You may customize the CSS in this file and your styles will automatically be in-lined within the HTML representations of your Markdown notifications.</p><p>If you would like to build an entirely new theme for Laravel&#39;s Markdown components, you may place a CSS file within the <code>html/themes</code> directory. After naming and saving your CSS file, update the <code>theme</code> option of the <code>mail</code> configuration file to match the name of your new theme.</p><p>To customize the theme for an individual notification, you may call the <code>theme</code> method while building the notification&#39;s mail message. The <code>theme</code> method accepts the name of the theme that should be used when sending the notification:</p><pre><code>/**
 * Get the mail representation of the notification.
 */
public function toMail(object $notifiable): MailMessage
{
    return (new MailMessage)
                -&gt;theme(&#39;invoice&#39;)
                -&gt;subject(&#39;Invoice Paid&#39;)
                -&gt;markdown(&#39;mail.invoice.paid&#39;, [&#39;url&#39; =&gt; $url]);
}
</code></pre><p><a name="database-notifications"></a></p><h2 id="database-notifications" tabindex="-1"><a class="header-anchor" href="#database-notifications" aria-hidden="true">#</a> Database Notifications</h2><p><a name="database-prerequisites"></a></p><h3 id="prerequisites" tabindex="-1"><a class="header-anchor" href="#prerequisites" aria-hidden="true">#</a> Prerequisites</h3><p>The <code>database</code> notification channel stores the notification information in a database table. This table will contain information such as the notification type as well as a JSON data structure that describes the notification.</p><p>You can query the table to display the notifications in your application&#39;s user interface. But, before you can do that, you will need to create a database table to hold your notifications. You may use the <code>notifications:table</code> command to generate a <a href="./migrations">migration</a> with the proper table schema:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan notifications:table

php artisan migrate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>Note</strong><br> If your notifiable models are using <a href="./eloquent#uuid-and-ulid-keys">UUID or ULID primary keys</a>, you should replace the <code>morphs</code> method with <a href="docs/%7B%7Bversion%7D%7D/migrations#column-method-uuidMorphs"><code>uuidMorphs</code></a> or <a href="./migrations#column-method-ulidMorphs"><code>ulidMorphs</code></a> in the notification table migration.</p></blockquote><p><a name="formatting-database-notifications"></a></p><h3 id="formatting-database-notifications" tabindex="-1"><a class="header-anchor" href="#formatting-database-notifications" aria-hidden="true">#</a> Formatting Database Notifications</h3><p>If a notification supports being stored in a database table, you should define a <code>toDatabase</code> or <code>toArray</code> method on the notification class. This method will receive a <code>$notifiable</code> entity and should return a plain PHP array. The returned array will be encoded as JSON and stored in the <code>data</code> column of your <code>notifications</code> table. Let&#39;s take a look at an example <code>toArray</code> method:</p><pre><code>/**
 * Get the array representation of the notification.
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
</code></pre><p><a name="todatabase-vs-toarray"></a></p><h4 id="todatabase-vs-toarray" tabindex="-1"><a class="header-anchor" href="#todatabase-vs-toarray" aria-hidden="true">#</a> <code>toDatabase</code> Vs. <code>toArray</code></h4><p>The <code>toArray</code> method is also used by the <code>broadcast</code> channel to determine which data to broadcast to your JavaScript powered frontend. If you would like to have two different array representations for the <code>database</code> and <code>broadcast</code> channels, you should define a <code>toDatabase</code> method instead of a <code>toArray</code> method.</p><p><a name="accessing-the-notifications"></a></p><h3 id="accessing-the-notifications" tabindex="-1"><a class="header-anchor" href="#accessing-the-notifications" aria-hidden="true">#</a> Accessing The Notifications</h3><p>Once notifications are stored in the database, you need a convenient way to access them from your notifiable entities. The <code>Illuminate\\Notifications\\Notifiable</code> trait, which is included on Laravel&#39;s default <code>App\\Models\\User</code> model, includes a <code>notifications</code> <a href="./eloquent-relationships">Eloquent relationship</a> that returns the notifications for the entity. To fetch notifications, you may access this method like any other Eloquent relationship. By default, notifications will be sorted by the <code>created_at</code> timestamp with the most recent notifications at the beginning of the collection:</p><pre><code>$user = App\\Models\\User::find(1);

foreach ($user-&gt;notifications as $notification) {
    echo $notification-&gt;type;
}
</code></pre><p>If you want to retrieve only the &quot;unread&quot; notifications, you may use the <code>unreadNotifications</code> relationship. Again, these notifications will be sorted by the <code>created_at</code> timestamp with the most recent notifications at the beginning of the collection:</p><pre><code>$user = App\\Models\\User::find(1);

foreach ($user-&gt;unreadNotifications as $notification) {
    echo $notification-&gt;type;
}
</code></pre><blockquote><p><strong>Note</strong><br> To access your notifications from your JavaScript client, you should define a notification controller for your application which returns the notifications for a notifiable entity, such as the current user. You may then make an HTTP request to that controller&#39;s URL from your JavaScript client.</p></blockquote><p><a name="marking-notifications-as-read"></a></p><h3 id="marking-notifications-as-read" tabindex="-1"><a class="header-anchor" href="#marking-notifications-as-read" aria-hidden="true">#</a> Marking Notifications As Read</h3><p>Typically, you will want to mark a notification as &quot;read&quot; when a user views it. The <code>Illuminate\\Notifications\\Notifiable</code> trait provides a <code>markAsRead</code> method, which updates the <code>read_at</code> column on the notification&#39;s database record:</p><pre><code>$user = App\\Models\\User::find(1);

foreach ($user-&gt;unreadNotifications as $notification) {
    $notification-&gt;markAsRead();
}
</code></pre><p>However, instead of looping through each notification, you may use the <code>markAsRead</code> method directly on a collection of notifications:</p><pre><code>$user-&gt;unreadNotifications-&gt;markAsRead();
</code></pre><p>You may also use a mass-update query to mark all of the notifications as read without retrieving them from the database:</p><pre><code>$user = App\\Models\\User::find(1);

$user-&gt;unreadNotifications()-&gt;update([&#39;read_at&#39; =&gt; now()]);
</code></pre><p>You may <code>delete</code> the notifications to remove them from the table entirely:</p><pre><code>$user-&gt;notifications()-&gt;delete();
</code></pre><p><a name="broadcast-notifications"></a></p><h2 id="broadcast-notifications" tabindex="-1"><a class="header-anchor" href="#broadcast-notifications" aria-hidden="true">#</a> Broadcast Notifications</h2><p><a name="broadcast-prerequisites"></a></p><h3 id="prerequisites-1" tabindex="-1"><a class="header-anchor" href="#prerequisites-1" aria-hidden="true">#</a> Prerequisites</h3><p>Before broadcasting notifications, you should configure and be familiar with Laravel&#39;s <a href="./broadcasting">event broadcasting</a> services. Event broadcasting provides a way to react to server-side Laravel events from your JavaScript powered frontend.</p><p><a name="formatting-broadcast-notifications"></a></p><h3 id="formatting-broadcast-notifications" tabindex="-1"><a class="header-anchor" href="#formatting-broadcast-notifications" aria-hidden="true">#</a> Formatting Broadcast Notifications</h3><p>The <code>broadcast</code> channel broadcasts notifications using Laravel&#39;s <a href="./broadcasting">event broadcasting</a> services, allowing your JavaScript powered frontend to catch notifications in realtime. If a notification supports broadcasting, you can define a <code>toBroadcast</code> method on the notification class. This method will receive a <code>$notifiable</code> entity and should return a <code>BroadcastMessage</code> instance. If the <code>toBroadcast</code> method does not exist, the <code>toArray</code> method will be used to gather the data that should be broadcast. The returned data will be encoded as JSON and broadcast to your JavaScript powered frontend. Let&#39;s take a look at an example <code>toBroadcast</code> method:</p><pre><code>use Illuminate\\Notifications\\Messages\\BroadcastMessage;

/**
 * Get the broadcastable representation of the notification.
 */
public function toBroadcast(object $notifiable): BroadcastMessage
{
    return new BroadcastMessage([
        &#39;invoice_id&#39; =&gt; $this-&gt;invoice-&gt;id,
        &#39;amount&#39; =&gt; $this-&gt;invoice-&gt;amount,
    ]);
}
</code></pre><p><a name="broadcast-queue-configuration"></a></p><h4 id="broadcast-queue-configuration" tabindex="-1"><a class="header-anchor" href="#broadcast-queue-configuration" aria-hidden="true">#</a> Broadcast Queue Configuration</h4><p>All broadcast notifications are queued for broadcasting. If you would like to configure the queue connection or queue name that is used to queue the broadcast operation, you may use the <code>onConnection</code> and <code>onQueue</code> methods of the <code>BroadcastMessage</code>:</p><pre><code>return (new BroadcastMessage($data))
                -&gt;onConnection(&#39;sqs&#39;)
                -&gt;onQueue(&#39;broadcasts&#39;);
</code></pre><p><a name="customizing-the-notification-type"></a></p><h4 id="customizing-the-notification-type" tabindex="-1"><a class="header-anchor" href="#customizing-the-notification-type" aria-hidden="true">#</a> Customizing The Notification Type</h4><p>In addition to the data you specify, all broadcast notifications also have a <code>type</code> field containing the full class name of the notification. If you would like to customize the notification <code>type</code>, you may define a <code>broadcastType</code> method on the notification class:</p><pre><code>/**
 * Get the type of the notification being broadcast.
 */
public function broadcastType(): string
{
    return &#39;broadcast.message&#39;;
}
</code></pre><p><a name="listening-for-notifications"></a></p><h3 id="listening-for-notifications" tabindex="-1"><a class="header-anchor" href="#listening-for-notifications" aria-hidden="true">#</a> Listening For Notifications</h3><p>Notifications will broadcast on a private channel formatted using a <code>{notifiable}.{id}</code> convention. So, if you are sending a notification to an <code>App\\Models\\User</code> instance with an ID of <code>1</code>, the notification will be broadcast on the <code>App.Models.User.1</code> private channel. When using <a href="./broadcasting#client-side-installation">Laravel Echo</a>, you may easily listen for notifications on a channel using the <code>notification</code> method:</p><pre><code>Echo.private(&#39;App.Models.User.&#39; + userId)
    .notification((notification) =&gt; {
        console.log(notification.type);
    });
</code></pre><p><a name="customizing-the-notification-channel"></a></p><h4 id="customizing-the-notification-channel" tabindex="-1"><a class="header-anchor" href="#customizing-the-notification-channel" aria-hidden="true">#</a> Customizing The Notification Channel</h4><p>If you would like to customize which channel that an entity&#39;s broadcast notifications are broadcast on, you may define a <code>receivesBroadcastNotificationsOn</code> method on the notifiable entity:</p><pre><code>&lt;?php

namespace App\\Models;

use Illuminate\\Broadcasting\\PrivateChannel;
use Illuminate\\Foundation\\Auth\\User as Authenticatable;
use Illuminate\\Notifications\\Notifiable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The channels the user receives notification broadcasts on.
     */
    public function receivesBroadcastNotificationsOn(): string
    {
        return &#39;users.&#39;.$this-&gt;id;
    }
}
</code></pre><p><a name="sms-notifications"></a></p><h2 id="sms-notifications" tabindex="-1"><a class="header-anchor" href="#sms-notifications" aria-hidden="true">#</a> SMS Notifications</h2><p><a name="sms-prerequisites"></a></p><h3 id="prerequisites-2" tabindex="-1"><a class="header-anchor" href="#prerequisites-2" aria-hidden="true">#</a> Prerequisites</h3>`,113),_={href:"https://www.vonage.com/",target:"_blank",rel:"noopener noreferrer"},q=t("code",null,"laravel/vonage-notification-channel",-1),T=t("code",null,"guzzlehttp/guzzle",-1),A=t("pre",null,[t("code",null,`composer require laravel/vonage-notification-channel guzzlehttp/guzzle
`)],-1),B={href:"https://github.com/laravel/vonage-notification-channel/blob/3.x/config/vonage.php",target:"_blank",rel:"noopener noreferrer"},C=t("code",null,"VONAGE_KEY",-1),z=t("code",null,"VONAGE_SECRET",-1),P=a(`<p>After defining your keys, you should set a <code>VONAGE_SMS_FROM</code> environment variable that defines the phone number that your SMS messages should be sent from by default. You may generate this phone number within the Vonage control panel:</p><pre><code>VONAGE_SMS_FROM=15556666666
</code></pre><p><a name="formatting-sms-notifications"></a></p><h3 id="formatting-sms-notifications" tabindex="-1"><a class="header-anchor" href="#formatting-sms-notifications" aria-hidden="true">#</a> Formatting SMS Notifications</h3><p>If a notification supports being sent as an SMS, you should define a <code>toVonage</code> method on the notification class. This method will receive a <code>$notifiable</code> entity and should return an <code>Illuminate\\Notifications\\Messages\\VonageMessage</code> instance:</p><pre><code>use Illuminate\\Notifications\\Messages\\VonageMessage;

/**
 * Get the Vonage / SMS representation of the notification.
 */
public function toVonage(object $notifiable): VonageMessage
{
    return (new VonageMessage)
                -&gt;content(&#39;Your SMS message content&#39;);
}
</code></pre><p><a name="unicode-content"></a></p><h4 id="unicode-content" tabindex="-1"><a class="header-anchor" href="#unicode-content" aria-hidden="true">#</a> Unicode Content</h4><p>If your SMS message will contain unicode characters, you should call the <code>unicode</code> method when constructing the <code>VonageMessage</code> instance:</p><pre><code>use Illuminate\\Notifications\\Messages\\VonageMessage;

/**
 * Get the Vonage / SMS representation of the notification.
 */
public function toVonage(object $notifiable): VonageMessage
{
    return (new VonageMessage)
                -&gt;content(&#39;Your unicode message&#39;)
                -&gt;unicode();
}
</code></pre><p><a name="customizing-the-from-number"></a></p><h3 id="customizing-the-from-number" tabindex="-1"><a class="header-anchor" href="#customizing-the-from-number" aria-hidden="true">#</a> Customizing The &quot;From&quot; Number</h3><p>If you would like to send some notifications from a phone number that is different from the phone number specified by your <code>VONAGE_SMS_FROM</code> environment variable, you may call the <code>from</code> method on a <code>VonageMessage</code> instance:</p><pre><code>use Illuminate\\Notifications\\Messages\\VonageMessage;

/**
 * Get the Vonage / SMS representation of the notification.
 */
public function toVonage(object $notifiable): VonageMessage
{
    return (new VonageMessage)
                -&gt;content(&#39;Your SMS message content&#39;)
                -&gt;from(&#39;15554443333&#39;);
}
</code></pre><p><a name="adding-a-client-reference"></a></p><h3 id="adding-a-client-reference" tabindex="-1"><a class="header-anchor" href="#adding-a-client-reference" aria-hidden="true">#</a> Adding a Client Reference</h3><p>If you would like to keep track of costs per user, team, or client, you may add a &quot;client reference&quot; to the notification. Vonage will allow you to generate reports using this client reference so that you can better understand a particular customer&#39;s SMS usage. The client reference can be any string up to 40 characters:</p><pre><code>use Illuminate\\Notifications\\Messages\\VonageMessage;

/**
 * Get the Vonage / SMS representation of the notification.
 */
public function toVonage(object $notifiable): VonageMessage
{
    return (new VonageMessage)
                -&gt;clientReference((string) $notifiable-&gt;id)
                -&gt;content(&#39;Your SMS message content&#39;);
}
</code></pre><p><a name="routing-sms-notifications"></a></p><h3 id="routing-sms-notifications" tabindex="-1"><a class="header-anchor" href="#routing-sms-notifications" aria-hidden="true">#</a> Routing SMS Notifications</h3><p>To route Vonage notifications to the proper phone number, define a <code>routeNotificationForVonage</code> method on your notifiable entity:</p><pre><code>&lt;?php

namespace App\\Models;

use Illuminate\\Foundation\\Auth\\User as Authenticatable;
use Illuminate\\Notifications\\Notifiable;
use Illuminate\\Notifications\\Notification;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * Route notifications for the Vonage channel.
     */
    public function routeNotificationForVonage(Notification $notification): string
    {
        return $this-&gt;phone_number;
    }
}
</code></pre><p><a name="slack-notifications"></a></p><h2 id="slack-notifications" tabindex="-1"><a class="header-anchor" href="#slack-notifications" aria-hidden="true">#</a> Slack Notifications</h2><p><a name="slack-prerequisites"></a></p><h3 id="prerequisites-3" tabindex="-1"><a class="header-anchor" href="#prerequisites-3" aria-hidden="true">#</a> Prerequisites</h3><p>Before sending Slack notifications, you should install the Slack notification channel via Composer:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">composer</span> require laravel/slack-notification-channel
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,28),j={href:"https://api.slack.com/apps?new_app=1",target:"_blank",rel:"noopener noreferrer"},D=a(`<p>If you only need to send notifications to the same Slack workspace that the App is created in, you should ensure that your App has the <code>chat:write</code>, <code>chat:write.public</code>, and <code>chat:write.customize</code> scopes. These scopes can be added from the &quot;OAuth &amp; Permissions&quot; App management tab within Slack.</p><p>Next, copy the App&#39;s &quot;Bot User OAuth Token&quot; and place it within a <code>slack</code> configuration array in your application&#39;s <code>services.php</code> configuration file. This token can be found on the &quot;OAuth &amp; Permissions&quot; tab within Slack:</p><pre><code>&#39;slack&#39; =&gt; [
    &#39;notifications&#39; =&gt; [
        &#39;bot_user_oauth_token&#39; =&gt; env(&#39;SLACK_BOT_USER_OAUTH_TOKEN&#39;),
        &#39;channel&#39; =&gt; env(&#39;SLACK_BOT_USER_DEFAULT_CHANNEL&#39;),
    ],
],
</code></pre><p><a name="slack-app-distribution"></a></p><h4 id="app-distribution" tabindex="-1"><a class="header-anchor" href="#app-distribution" aria-hidden="true">#</a> App Distribution</h4><p>If your application will be sending notifications to external Slack workspaces that are owned by your application&#39;s users, you will need to &quot;distribute&quot; your App via Slack. App distribution can be managed from your App&#39;s &quot;Manage Distribution&quot; tab within Slack. Once your App has been distributed, you may use <a href="./socialite">Socialite</a> to <a href="./socialite#slack-bot-scopes">obtain Slack Bot tokens</a> on behalf of your application&#39;s users.</p><p><a name="formatting-slack-notifications"></a></p><h3 id="formatting-slack-notifications" tabindex="-1"><a class="header-anchor" href="#formatting-slack-notifications" aria-hidden="true">#</a> Formatting Slack Notifications</h3>`,8),L=t("code",null,"toSlack",-1),O=t("code",null,"$notifiable",-1),V=t("code",null,"Illuminate\\Notifications\\Slack\\SlackMessage",-1),F={href:"https://api.slack.com/block-kit",target:"_blank",rel:"noopener noreferrer"},U={href:"https://app.slack.com/block-kit-builder/T01KWS6K23Z#%7B%22blocks%22:%5B%7B%22type%22:%22header%22,%22text%22:%7B%22type%22:%22plain_text%22,%22text%22:%22Invoice%20Paid%22%7D%7D,%7B%22type%22:%22context%22,%22elements%22:%5B%7B%22type%22:%22plain_text%22,%22text%22:%22Customer%20%231234%22%7D%5D%7D,%7B%22type%22:%22section%22,%22text%22:%7B%22type%22:%22plain_text%22,%22text%22:%22An%20invoice%20has%20been%20paid.%22%7D,%22fields%22:%5B%7B%22type%22:%22mrkdwn%22,%22text%22:%22*Invoice%20No:*%5Cn1000%22%7D,%7B%22type%22:%22mrkdwn%22,%22text%22:%22*Invoice%20Recipient:*%5Cntaylor@laravel.com%22%7D%5D%7D,%7B%22type%22:%22divider%22%7D,%7B%22type%22:%22section%22,%22text%22:%7B%22type%22:%22plain_text%22,%22text%22:%22Congratulations!%22%7D%7D%5D%7D",target:"_blank",rel:"noopener noreferrer"},R=t("pre",null,[t("code",null,`use Illuminate\\Notifications\\Slack\\BlockKit\\Blocks\\ContextBlock;
use Illuminate\\Notifications\\Slack\\BlockKit\\Blocks\\SectionBlock;
use Illuminate\\Notifications\\Slack\\BlockKit\\Composites\\ConfirmObject;
use Illuminate\\Notifications\\Slack\\SlackMessage;

/**
 * Get the Slack representation of the notification.
 */
public function toSlack(object $notifiable): SlackMessage
{
    return (new SlackMessage)
            ->text('One of your invoices has been paid!')
            ->headerBlock('Invoice Paid')
            ->contextBlock(function (ContextBlock $block) {
                $block->text('Customer #1234');
            })
            ->sectionBlock(function (SectionBlock $block) {
                $block->text('An invoice has been paid.');
                $block->field("*Invoice No:*\\n1000")->markdown();
                $block->field("*Invoice Recipient:*\\ntaylor@laravel.com")->markdown();
            })
            ->dividerBlock()
            ->sectionBlock(function (SectionBlock $block) {
                $block->text('Congratulations!');
            });
}
`)],-1),E=t("p",null,[t("a",{name:"slack-interactivity"})],-1),G=t("h3",{id:"slack-interactivity",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#slack-interactivity","aria-hidden":"true"},"#"),e(" Slack Interactivity")],-1),Y={href:"https://api.slack.com/interactivity/handling",target:"_blank",rel:"noopener noreferrer"},Q=t("code",null,"actionsBlock",-1),H=t("code",null,"POST",-1),W={href:"https://api.slack.com/authentication/verifying-requests-from-slack",target:"_blank",rel:"noopener noreferrer"},K=a(`<pre><code>use Illuminate\\Notifications\\Slack\\BlockKit\\Blocks\\ActionsBlock;
use Illuminate\\Notifications\\Slack\\BlockKit\\Blocks\\ContextBlock;
use Illuminate\\Notifications\\Slack\\BlockKit\\Blocks\\SectionBlock;
use Illuminate\\Notifications\\Slack\\SlackMessage;

/**
 * Get the Slack representation of the notification.
 */
public function toSlack(object $notifiable): SlackMessage
{
    return (new SlackMessage)
            -&gt;text(&#39;One of your invoices has been paid!&#39;)
            -&gt;headerBlock(&#39;Invoice Paid&#39;)
            -&gt;contextBlock(function (ContextBlock $block) {
                $block-&gt;text(&#39;Customer #1234&#39;);
            })
            -&gt;sectionBlock(function (SectionBlock $block) {
                $block-&gt;text(&#39;An invoice has been paid.&#39;);
            })
            -&gt;actionsBlock(function (ActionsBlock $block) {
                 // ID defaults to &quot;button_acknowledge_invoice&quot;...
                $block-&gt;button(&#39;Acknowledge Invoice&#39;)-&gt;primary();

                // Manually configure the ID...
                $block-&gt;button(&#39;Deny&#39;)-&gt;danger()-&gt;id(&#39;deny_invoice&#39;);
            });
}
</code></pre><p><a name="slack-confirmation-modals"></a></p><h4 id="confirmation-modals" tabindex="-1"><a class="header-anchor" href="#confirmation-modals" aria-hidden="true">#</a> Confirmation Modals</h4><p>If you would like users to be required to confirm an action before it is performed, you may invoke the <code>confirm</code> method when defining your button. The <code>confirm</code> method accepts a message and a closure which receives a <code>ConfirmObject</code> instance:</p><pre><code>use Illuminate\\Notifications\\Slack\\BlockKit\\Blocks\\ActionsBlock;
use Illuminate\\Notifications\\Slack\\BlockKit\\Blocks\\ContextBlock;
use Illuminate\\Notifications\\Slack\\BlockKit\\Blocks\\SectionBlock;
use Illuminate\\Notifications\\Slack\\BlockKit\\Composites\\ConfirmObject;
use Illuminate\\Notifications\\Slack\\SlackMessage;

/**
 * Get the Slack representation of the notification.
 */
public function toSlack(object $notifiable): SlackMessage
{
    return (new SlackMessage)
            -&gt;text(&#39;One of your invoices has been paid!&#39;)
            -&gt;headerBlock(&#39;Invoice Paid&#39;)
            -&gt;contextBlock(function (ContextBlock $block) {
                $block-&gt;text(&#39;Customer #1234&#39;);
            })
            -&gt;sectionBlock(function (SectionBlock $block) {
                $block-&gt;text(&#39;An invoice has been paid.&#39;);
            })
            -&gt;actionsBlock(function (ActionsBlock $block) {
                $block-&gt;button(&#39;Acknowledge Invoice&#39;)
                    -&gt;primary()
                    -&gt;confirm(
                        &#39;Acknowledge the payment and send a thank you email?&#39;,
                        function (ConfirmObject $dialog) {
                            $dialog-&gt;confirm(&#39;Yes&#39;);
                            $dialog-&gt;deny(&#39;No&#39;);
                        }
                    );
            });
}
</code></pre><p><a name="inspecting-slack-blocks"></a></p><h4 id="inspecting-slack-blocks" tabindex="-1"><a class="header-anchor" href="#inspecting-slack-blocks" aria-hidden="true">#</a> Inspecting Slack Blocks</h4>`,7),J=t("code",null,"dd",-1),Z=t("code",null,"SlackMessage",-1),X=t("code",null,"dd",-1),ee={href:"https://app.slack.com/block-kit-builder/",target:"_blank",rel:"noopener noreferrer"},te=t("code",null,"true",-1),ne=t("code",null,"dd",-1),ie=a(`<pre><code>return (new SlackMessage)
        -&gt;text(&#39;One of your invoices has been paid!&#39;)
        -&gt;headerBlock(&#39;Invoice Paid&#39;)
        -&gt;dd();
</code></pre><p><a name="routing-slack-notifications"></a></p><h3 id="routing-slack-notifications" tabindex="-1"><a class="header-anchor" href="#routing-slack-notifications" aria-hidden="true">#</a> Routing Slack Notifications</h3><p>To direct Slack notifications to the appropriate Slack team and channel, define a <code>routeNotificationForSlack</code> method on your notifiable model. This method can return one of three values:</p><ul><li><code>null</code> - which defers routing to the channel configured in the notification itself. You may use the <code>to</code> method when building your <code>SlackMessage</code> to configure the channel within the notification.</li><li>A string specifying the Slack channel to send the notification to, e.g. <code>#support-channel</code>.</li><li>A <code>SlackRoute</code> instance, which allows you to specify an OAuth token and channel name, e.g. <code>SlackRoute::make($this-&gt;slack_channel, $this-&gt;slack_token)</code>. This method should be used to send notifications to external workspaces.</li></ul><p>For instance, returning <code>#support-channel</code> from the <code>routeNotificationForSlack</code> method will send the notification to the <code>#support-channel</code> channel in the workspace associated with the Bot User OAuth token located in your application&#39;s <code>services.php</code> configuration file:</p><pre><code>&lt;?php

namespace App\\Models;

use Illuminate\\Foundation\\Auth\\User as Authenticatable;
use Illuminate\\Notifications\\Notifiable;
use Illuminate\\Notifications\\Notification;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * Route notifications for the Slack channel.
     */
    public function routeNotificationForSlack(Notification $notification): mixed
    {
        return &#39;#support-channel&#39;;
    }
}
</code></pre><p><a name="notifying-external-slack-workspaces"></a></p><h3 id="notifying-external-slack-workspaces" tabindex="-1"><a class="header-anchor" href="#notifying-external-slack-workspaces" aria-hidden="true">#</a> Notifying External Slack Workspaces</h3><blockquote><p><strong>Note</strong> Before sending notifications to external Slack workspaces, your Slack App must be <a href="#slack-app-distribution">distributed</a>.</p></blockquote><p>Of course, you will often want to send notifications to the Slack workspaces owned by your application&#39;s users. To do so, you will first need to obtain a Slack OAuth token for the user. Thankfully, <a href="./socialite">Laravel Socialite</a> includes a Slack driver that will allow you to easily authenticate your application&#39;s users with Slack and <a href="./socialite#slack-bot-scopes">obtain a bot token</a>.</p><p>Once you have obtained the bot token and stored it within your application&#39;s database, you may utilize the <code>SlackRoute::make</code> method to route a notification to the user&#39;s workspace. In addition, your application will likely need to offer an opportunity for the user to specify which channel notifications should be sent to:</p><pre><code>&lt;?php

namespace App\\Models;

use Illuminate\\Foundation\\Auth\\User as Authenticatable;
use Illuminate\\Notifications\\Notifiable;
use Illuminate\\Notifications\\Notification;
use Illuminate\\Notifications\\Slack\\SlackRoute;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * Route notifications for the Slack channel.
     */
    public function routeNotificationForSlack(Notification $notification): mixed
    {
        return SlackRoute::make($this-&gt;slack_channel, $this-&gt;slack_token);
    }
}
</code></pre><p><a name="localizing-notifications"></a></p><h2 id="localizing-notifications" tabindex="-1"><a class="header-anchor" href="#localizing-notifications" aria-hidden="true">#</a> Localizing Notifications</h2><p>Laravel allows you to send notifications in a locale other than the HTTP request&#39;s current locale, and will even remember this locale if the notification is queued.</p><p>To accomplish this, the <code>Illuminate\\Notifications\\Notification</code> class offers a <code>locale</code> method to set the desired language. The application will change into this locale when the notification is being evaluated and then revert back to the previous locale when evaluation is complete:</p><pre><code>$user-&gt;notify((new InvoicePaid($invoice))-&gt;locale(&#39;es&#39;));
</code></pre><p>Localization of multiple notifiable entries may also be achieved via the <code>Notification</code> facade:</p><pre><code>Notification::locale(&#39;es&#39;)-&gt;send(
    $users, new InvoicePaid($invoice)
);
</code></pre><p><a name="user-preferred-locales"></a></p><h3 id="user-preferred-locales" tabindex="-1"><a class="header-anchor" href="#user-preferred-locales" aria-hidden="true">#</a> User Preferred Locales</h3><p>Sometimes, applications store each user&#39;s preferred locale. By implementing the <code>HasLocalePreference</code> contract on your notifiable model, you may instruct Laravel to use this stored locale when sending a notification:</p><pre><code>use Illuminate\\Contracts\\Translation\\HasLocalePreference;

class User extends Model implements HasLocalePreference
{
    /**
     * Get the user&#39;s preferred locale.
     */
    public function preferredLocale(): string
    {
        return $this-&gt;locale;
    }
}
</code></pre><p>Once you have implemented the interface, Laravel will automatically use the preferred locale when sending notifications and mailables to the model. Therefore, there is no need to call the <code>locale</code> method when using this interface:</p><pre><code>$user-&gt;notify(new InvoicePaid($invoice));
</code></pre><p><a name="testing"></a></p><h2 id="testing" tabindex="-1"><a class="header-anchor" href="#testing" aria-hidden="true">#</a> Testing</h2><p>You may use the <code>Notification</code> facade&#39;s <code>fake</code> method to prevent notifications from being sent. Typically, sending notifications is unrelated to the code you are actually testing. Most likely, it is sufficient to simply assert that Laravel was instructed to send a given notification.</p><p>After calling the <code>Notification</code> facade&#39;s <code>fake</code> method, you may then assert that notifications were instructed to be sent to users and even inspect the data the notifications received:</p><pre><code>&lt;?php

namespace Tests\\Feature;

use App\\Notifications\\OrderShipped;
use Illuminate\\Support\\Facades\\Notification;
use Tests\\TestCase;

class ExampleTest extends TestCase
{
    public function test_orders_can_be_shipped(): void
    {
        Notification::fake();

        // Perform order shipping...

        // Assert that no notifications were sent...
        Notification::assertNothingSent();

        // Assert a notification was sent to the given users...
        Notification::assertSentTo(
            [$user], OrderShipped::class
        );

        // Assert a notification was not sent...
        Notification::assertNotSentTo(
            [$user], AnotherNotification::class
        );

        // Assert that a given number of notifications were sent...
        Notification::assertCount(3);
    }
}
</code></pre><p>You may pass a closure to the <code>assertSentTo</code> or <code>assertNotSentTo</code> methods in order to assert that a notification was sent that passes a given &quot;truth test&quot;. If at least one notification was sent that passes the given truth test then the assertion will be successful:</p><pre><code>Notification::assertSentTo(
    $user,
    function (OrderShipped $notification, array $channels) use ($order) {
        return $notification-&gt;order-&gt;id === $order-&gt;id;
    }
);
</code></pre><p><a name="on-demand-notifications"></a></p><h4 id="on-demand-notifications-1" tabindex="-1"><a class="header-anchor" href="#on-demand-notifications-1" aria-hidden="true">#</a> On-Demand Notifications</h4><p>If the code you are testing sends <a href="#on-demand-notifications">on-demand notifications</a>, you can test that the on-demand notification was sent via the <code>assertSentOnDemand</code> method:</p><pre><code>Notification::assertSentOnDemand(OrderShipped::class);
</code></pre><p>By passing a closure as the second argument to the <code>assertSentOnDemand</code> method, you may determine if an on-demand notification was sent to the correct &quot;route&quot; address:</p><pre><code>Notification::assertSentOnDemand(
    OrderShipped::class,
    function (OrderShipped $notification, array $channels, object $notifiable) use ($user) {
        return $notifiable-&gt;routes[&#39;mail&#39;] === $user-&gt;email;
    }
);
</code></pre><p><a name="notification-events"></a></p><h2 id="notification-events" tabindex="-1"><a class="header-anchor" href="#notification-events" aria-hidden="true">#</a> Notification Events</h2><p><a name="notification-sending-event"></a></p><h4 id="notification-sending-event" tabindex="-1"><a class="header-anchor" href="#notification-sending-event" aria-hidden="true">#</a> Notification Sending Event</h4><p>When a notification is sending, the <code>Illuminate\\Notifications\\Events\\NotificationSending</code> <a href="./events">event</a> is dispatched by the notification system. This contains the &quot;notifiable&quot; entity and the notification instance itself. You may register listeners for this event in your application&#39;s <code>EventServiceProvider</code>:</p><pre><code>use App\\Listeners\\CheckNotificationStatus;
use Illuminate\\Notifications\\Events\\NotificationSending;

/**
 * The event listener mappings for the application.
 *
 * @var array
 */
protected $listen = [
    NotificationSending::class =&gt; [
        CheckNotificationStatus::class,
    ],
];
</code></pre><p>The notification will not be sent if an event listener for the <code>NotificationSending</code> event returns <code>false</code> from its <code>handle</code> method:</p><pre><code>use Illuminate\\Notifications\\Events\\NotificationSending;

/**
 * Handle the event.
 */
public function handle(NotificationSending $event): bool
{
    return false;
}
</code></pre><p>Within an event listener, you may access the <code>notifiable</code>, <code>notification</code>, and <code>channel</code> properties on the event to learn more about the notification recipient or the notification itself:</p><pre><code>/**
 * Handle the event.
 */
public function handle(NotificationSending $event): void
{
    // $event-&gt;channel
    // $event-&gt;notifiable
    // $event-&gt;notification
}
</code></pre><p><a name="notification-sent-event"></a></p><h4 id="notification-sent-event" tabindex="-1"><a class="header-anchor" href="#notification-sent-event" aria-hidden="true">#</a> Notification Sent Event</h4><p>When a notification is sent, the <code>Illuminate\\Notifications\\Events\\NotificationSent</code> <a href="./events">event</a> is dispatched by the notification system. This contains the &quot;notifiable&quot; entity and the notification instance itself. You may register listeners for this event in your <code>EventServiceProvider</code>:</p><pre><code>use App\\Listeners\\LogNotification;
use Illuminate\\Notifications\\Events\\NotificationSent;

/**
 * The event listener mappings for the application.
 *
 * @var array
 */
protected $listen = [
    NotificationSent::class =&gt; [
        LogNotification::class,
    ],
];
</code></pre><blockquote><p><strong>Note</strong><br> After registering listeners in your <code>EventServiceProvider</code>, use the <code>event:generate</code> Artisan command to quickly generate listener classes.</p></blockquote><p>Within an event listener, you may access the <code>notifiable</code>, <code>notification</code>, <code>channel</code>, and <code>response</code> properties on the event to learn more about the notification recipient or the notification itself:</p><pre><code>/**
 * Handle the event.
 */
public function handle(NotificationSent $event): void
{
    // $event-&gt;channel
    // $event-&gt;notifiable
    // $event-&gt;notification
    // $event-&gt;response
}
</code></pre><p><a name="custom-channels"></a></p><h2 id="custom-channels" tabindex="-1"><a class="header-anchor" href="#custom-channels" aria-hidden="true">#</a> Custom Channels</h2><p>Laravel ships with a handful of notification channels, but you may want to write your own drivers to deliver notifications via other channels. Laravel makes it simple. To get started, define a class that contains a <code>send</code> method. The method should receive two arguments: a <code>$notifiable</code> and a <code>$notification</code>.</p><p>Within the <code>send</code> method, you may call methods on the notification to retrieve a message object understood by your channel and then send the notification to the <code>$notifiable</code> instance however you wish:</p><pre><code>&lt;?php

namespace App\\Notifications;

use Illuminate\\Notifications\\Notification;

class VoiceChannel
{
    /**
     * Send the given notification.
     */
    public function send(object $notifiable, Notification $notification): void
    {
        $message = $notification-&gt;toVoice($notifiable);

        // Send notification to the $notifiable instance...
    }
}
</code></pre><p>Once your notification channel class has been defined, you may return the class name from the <code>via</code> method of any of your notifications. In this example, the <code>toVoice</code> method of your notification can return whatever object you choose to represent voice messages. For example, you might define your own <code>VoiceMessage</code> class to represent these messages:</p><pre><code>&lt;?php

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
     * Get the notification channels.
     */
    public function via(object $notifiable): string
    {
        return VoiceChannel::class;
    }

    /**
     * Get the voice representation of the notification.
     */
    public function toVoice(object $notifiable): VoiceMessage
    {
        // ...
    }
}
</code></pre>`,63);function ae(oe,se){const n=c("ExternalLinkIcon");return r(),d("div",null,[h,t("p",null,[e("In addition to support for "),u,e(", Laravel provides support for sending notifications across a variety of delivery channels, including email, SMS (via "),t("a",f,[e("Vonage"),i(n)]),e(", formerly known as Nexmo), and "),t("a",p,[e("Slack"),i(n)]),e(". In addition, a variety of "),t("a",m,[e("community built notification channels"),i(n)]),e(" have been created to send notifications over dozens of different channels! Notifications may also be stored in a database so they may be displayed in your web interface.")]),g,t("blockquote",null,[t("p",null,[b,y,e(" If you would like to use other delivery channels such as Telegram or Pusher, check out the community driven "),t("a",v,[e("Laravel Notification Channels website"),i(n)]),e(".")])]),k,t("p",null,[e("If your application is using the Mailgun driver, you may consult Mailgun's documentation for more information on "),t("a",w,[e("tags"),i(n)]),e(" and "),t("a",M,[e("metadata"),i(n)]),e(". Likewise, the Postmark documentation may also be consulted for more information on their support for "),t("a",N,[e("tags"),i(n)]),e(" and "),t("a",S,[e("metadata"),i(n)]),e(".")]),t("p",null,[e("If your application is using Amazon SES to send emails, you should use the "),x,e(" method to attach "),t("a",$,[e('SES "tags"'),i(n)]),e(" to the message.")]),I,t("p",null,[e("Sending SMS notifications in Laravel is powered by "),t("a",_,[e("Vonage"),i(n)]),e(" (formerly known as Nexmo). Before you can send notifications via Vonage, you need to install the "),q,e(" and "),T,e(" packages:")]),A,t("p",null,[e("The package includes a "),t("a",B,[e("configuration file"),i(n)]),e(". However, you are not required to export this configuration file to your own application. You can simply use the "),C,e(" and "),z,e(" environment variables to define your Vonage public and secret keys.")]),P,t("p",null,[e("Additionally, you must create a "),t("a",j,[e("Slack App"),i(n)]),e(" for your Slack workspace.")]),D,t("p",null,[e("If a notification supports being sent as a Slack message, you should define a "),L,e(" method on the notification class. This method will receive a "),O,e(" entity and should return an "),V,e(" instance. You can construct rich notifications using "),t("a",F,[e("Slack's Block Kit API"),i(n)]),e(". The following example may be previewed in "),t("a",U,[e("Slack's Block Kit builder"),i(n)]),e(":")]),R,E,G,t("p",null,[e("Slack's Block Kit notification system provides powerful features to "),t("a",Y,[e("handle user interaction"),i(n)]),e('. To utilize these features, your Slack App should have "Interactivity" enabled and a "Request URL" configured that points to a URL served by your application. These settings can be managed from the "Interactivity & Shortcuts" App management tab within Slack.')]),t("p",null,[e("In the following example, which utilizes the "),Q,e(" method, Slack will send a "),H,e(' request to your "Request URL" with a payload containing the Slack user who clicked the button, the ID of the clicked button, and more. Your application can then determine the action to take based on the payload. You should also '),t("a",W,[e("verify the request"),i(n)]),e(" was made by Slack:")]),K,t("p",null,[e("If you would like to quickly inspect the blocks you've been building, you can invoke the "),J,e(" method on the "),Z,e(" instance. The "),X,e(" method will generate and dump a URL to Slack's "),t("a",ee,[e("Block Kit Builder"),i(n)]),e(", which displays a preview of the payload and notification in your browser. You may pass "),te,e(" to the "),ne,e(" method to dump the raw payload:")]),ie])}const le=s(l,[["render",ae],["__file","notifications.html.vue"]]);export{le as default};
