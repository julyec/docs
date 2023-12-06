import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as r,c as l,b as a,d as e,e as t,a as i}from"./app-06635a3b.js";const d={},c=i('<h1 id="mail" tabindex="-1"><a class="header-anchor" href="#mail" aria-hidden="true">#</a> Mail</h1><ul><li><a href="#introduction">Introduction</a><ul><li><a href="#configuration">Configuration</a></li><li><a href="#driver-prerequisites">Driver Prerequisites</a></li><li><a href="#failover-configuration">Failover Configuration</a></li></ul></li><li><a href="#generating-mailables">Generating Mailables</a></li><li><a href="#writing-mailables">Writing Mailables</a><ul><li><a href="#configuring-the-sender">Configuring The Sender</a></li><li><a href="#configuring-the-view">Configuring The View</a></li><li><a href="#view-data">View Data</a></li><li><a href="#attachments">Attachments</a></li><li><a href="#inline-attachments">Inline Attachments</a></li><li><a href="#attachable-objects">Attachable Objects</a></li><li><a href="#headers">Headers</a></li><li><a href="#tags-and-metadata">Tags &amp; Metadata</a></li><li><a href="#customizing-the-symfony-message">Customizing The Symfony Message</a></li></ul></li><li><a href="#markdown-mailables">Markdown Mailables</a><ul><li><a href="#generating-markdown-mailables">Generating Markdown Mailables</a></li><li><a href="#writing-markdown-messages">Writing Markdown Messages</a></li><li><a href="#customizing-the-components">Customizing The Components</a></li></ul></li><li><a href="#sending-mail">Sending Mail</a><ul><li><a href="#queueing-mail">Queueing Mail</a></li></ul></li><li><a href="#rendering-mailables">Rendering Mailables</a><ul><li><a href="#previewing-mailables-in-the-browser">Previewing Mailables In The Browser</a></li></ul></li><li><a href="#localizing-mailables">Localizing Mailables</a></li><li><a href="#testing-mailables">Testing</a><ul><li><a href="#testing-mailable-content">Testing Mailable Content</a></li><li><a href="#testing-mailable-sending">Testing Mailable Sending</a></li></ul></li><li><a href="#mail-and-local-development">Mail &amp; Local Development</a></li><li><a href="#events">Events</a></li><li><a href="#custom-transports">Custom Transports</a><ul><li><a href="#additional-symfony-transports">Additional Symfony Transports</a></li></ul></li></ul><p><a name="introduction"></a></p><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2>',4),p={href:"https://symfony.com/doc/6.2/mailer.html",target:"_blank",rel:"noopener noreferrer"},m=a("code",null,"sendmail",-1),h=i(`<p><a name="configuration"></a></p><h3 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> Configuration</h3><p>Laravel&#39;s email services may be configured via your application&#39;s <code>config/mail.php</code> configuration file. Each mailer configured within this file may have its own unique configuration and even its own unique &quot;transport&quot;, allowing your application to use different email services to send certain email messages. For example, your application might use Postmark to send transactional emails while using Amazon SES to send bulk emails.</p><p>Within your <code>mail</code> configuration file, you will find a <code>mailers</code> configuration array. This array contains a sample configuration entry for each of the major mail drivers / transports supported by Laravel, while the <code>default</code> configuration value determines which mailer will be used by default when your application needs to send an email message.</p><p><a name="driver-prerequisites"></a></p><h3 id="driver-transport-prerequisites" tabindex="-1"><a class="header-anchor" href="#driver-transport-prerequisites" aria-hidden="true">#</a> Driver / Transport Prerequisites</h3><p>The API based drivers such as Mailgun, Postmark, and MailerSend are often simpler and faster than sending mail via SMTP servers. Whenever possible, we recommend that you use one of these drivers.</p><p><a name="mailgun-driver"></a></p><h4 id="mailgun-driver" tabindex="-1"><a class="header-anchor" href="#mailgun-driver" aria-hidden="true">#</a> Mailgun Driver</h4><p>To use the Mailgun driver, install Symfony&#39;s Mailgun Mailer transport via Composer:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">composer</span> require symfony/mailgun-mailer symfony/http-client
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Next, set the <code>default</code> option in your application&#39;s <code>config/mail.php</code> configuration file to <code>mailgun</code>. After configuring your application&#39;s default mailer, verify that your <code>config/services.php</code> configuration file contains the following options:</p><pre><code>&#39;mailgun&#39; =&gt; [
    &#39;transport&#39; =&gt; &#39;mailgun&#39;,
    &#39;domain&#39; =&gt; env(&#39;MAILGUN_DOMAIN&#39;),
    &#39;secret&#39; =&gt; env(&#39;MAILGUN_SECRET&#39;),
],
</code></pre>`,13),u={href:"https://documentation.mailgun.com/en/latest/api-intro.html#mailgun-regions",target:"_blank",rel:"noopener noreferrer"},g=a("code",null,"services",-1),f=i(`<pre><code>&#39;mailgun&#39; =&gt; [
    &#39;domain&#39; =&gt; env(&#39;MAILGUN_DOMAIN&#39;),
    &#39;secret&#39; =&gt; env(&#39;MAILGUN_SECRET&#39;),
    &#39;endpoint&#39; =&gt; env(&#39;MAILGUN_ENDPOINT&#39;, &#39;api.eu.mailgun.net&#39;),
],
</code></pre><p><a name="postmark-driver"></a></p><h4 id="postmark-driver" tabindex="-1"><a class="header-anchor" href="#postmark-driver" aria-hidden="true">#</a> Postmark Driver</h4><p>To use the Postmark driver, install Symfony&#39;s Postmark Mailer transport via Composer:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">composer</span> require symfony/postmark-mailer symfony/http-client
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Next, set the <code>default</code> option in your application&#39;s <code>config/mail.php</code> configuration file to <code>postmark</code>. After configuring your application&#39;s default mailer, verify that your <code>config/services.php</code> configuration file contains the following options:</p><pre><code>&#39;postmark&#39; =&gt; [
    &#39;token&#39; =&gt; env(&#39;POSTMARK_TOKEN&#39;),
],
</code></pre><p>If you would like to specify the Postmark message stream that should be used by a given mailer, you may add the <code>message_stream_id</code> configuration option to the mailer&#39;s configuration array. This configuration array can be found in your application&#39;s <code>config/mail.php</code> configuration file:</p><pre><code>&#39;postmark&#39; =&gt; [
    &#39;transport&#39; =&gt; &#39;postmark&#39;,
    &#39;message_stream_id&#39; =&gt; env(&#39;POSTMARK_MESSAGE_STREAM_ID&#39;),
],
</code></pre><p>This way you are also able to set up multiple Postmark mailers with different message streams.</p><p><a name="ses-driver"></a></p><h4 id="ses-driver" tabindex="-1"><a class="header-anchor" href="#ses-driver" aria-hidden="true">#</a> SES Driver</h4><p>To use the Amazon SES driver you must first install the Amazon AWS SDK for PHP. You may install this library via the Composer package manager:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">composer</span> require aws/aws-sdk-php
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Next, set the <code>default</code> option in your <code>config/mail.php</code> configuration file to <code>ses</code> and verify that your <code>config/services.php</code> configuration file contains the following options:</p><pre><code>&#39;ses&#39; =&gt; [
    &#39;key&#39; =&gt; env(&#39;AWS_ACCESS_KEY_ID&#39;),
    &#39;secret&#39; =&gt; env(&#39;AWS_SECRET_ACCESS_KEY&#39;),
    &#39;region&#39; =&gt; env(&#39;AWS_DEFAULT_REGION&#39;, &#39;us-east-1&#39;),
],
</code></pre>`,16),b={href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_use-resources.html",target:"_blank",rel:"noopener noreferrer"},y=a("code",null,"token",-1),v=a("pre",null,[a("code",null,`'ses' => [
    'key' => env('AWS_ACCESS_KEY_ID'),
    'secret' => env('AWS_SECRET_ACCESS_KEY'),
    'region' => env('AWS_DEFAULT_REGION', 'us-east-1'),
    'token' => env('AWS_SESSION_TOKEN'),
],
`)],-1),w={href:"https://docs.aws.amazon.com/aws-sdk-php/v3/api/api-sesv2-2019-09-27.html#sendemail",target:"_blank",rel:"noopener noreferrer"},M=a("code",null,"SendEmail",-1),S=a("code",null,"options",-1),k=a("code",null,"ses",-1),x=a("pre",null,[a("code",null,`'ses' => [
    'key' => env('AWS_ACCESS_KEY_ID'),
    'secret' => env('AWS_SECRET_ACCESS_KEY'),
    'region' => env('AWS_DEFAULT_REGION', 'us-east-1'),
    'options' => [
        'ConfigurationSetName' => 'MyConfigurationSet',
        'EmailTags' => [
            ['Name' => 'foo', 'Value' => 'bar'],
        ],
    ],
],
`)],-1),A=a("p",null,[a("a",{name:"mailersend-driver"})],-1),_=a("h4",{id:"mailersend-driver",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#mailersend-driver","aria-hidden":"true"},"#"),e(" MailerSend Driver")],-1),T={href:"https://www.mailersend.com/",target:"_blank",rel:"noopener noreferrer"},I=i(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">composer</span> require mailersend/laravel-driver
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Once the package is installed, add the <code>MAILERSEND_API_KEY</code> environment variable to your application&#39;s <code>.env</code> file. In addition, the <code>MAIL_MAILER</code> environment variable should be defined as <code>mailersend</code>:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">MAIL_MAILER</span><span class="token operator">=</span>mailersend
<span class="token assign-left variable">MAIL_FROM_ADDRESS</span><span class="token operator">=</span>app@yourdomain.com
<span class="token assign-left variable">MAIL_FROM_NAME</span><span class="token operator">=</span><span class="token string">&quot;App Name&quot;</span>

<span class="token assign-left variable">MAILERSEND_API_KEY</span><span class="token operator">=</span>your-api-key
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),q={href:"https://github.com/mailersend/mailersend-laravel-driver#usage",target:"_blank",rel:"noopener noreferrer"},$=i(`<p><a name="failover-configuration"></a></p><h3 id="failover-configuration" tabindex="-1"><a class="header-anchor" href="#failover-configuration" aria-hidden="true">#</a> Failover Configuration</h3><p>Sometimes, an external service you have configured to send your application&#39;s mail may be down. In these cases, it can be useful to define one or more backup mail delivery configurations that will be used in case your primary delivery driver is down.</p><p>To accomplish this, you should define a mailer within your application&#39;s <code>mail</code> configuration file that uses the <code>failover</code> transport. The configuration array for your application&#39;s <code>failover</code> mailer should contain an array of <code>mailers</code> that reference the order in which mail drivers should be chosen for delivery:</p><pre><code>&#39;mailers&#39; =&gt; [
    &#39;failover&#39; =&gt; [
        &#39;transport&#39; =&gt; &#39;failover&#39;,
        &#39;mailers&#39; =&gt; [
            &#39;postmark&#39;,
            &#39;mailgun&#39;,
            &#39;sendmail&#39;,
        ],
    ],

    // ...
],
</code></pre><p>Once your failover mailer has been defined, you should set this mailer as the default mailer used by your application by specifying its name as the value of the <code>default</code> configuration key within your application&#39;s <code>mail</code> configuration file:</p><pre><code>&#39;default&#39; =&gt; env(&#39;MAIL_MAILER&#39;, &#39;failover&#39;),
</code></pre><p><a name="generating-mailables"></a></p><h2 id="generating-mailables" tabindex="-1"><a class="header-anchor" href="#generating-mailables" aria-hidden="true">#</a> Generating Mailables</h2><p>When building Laravel applications, each type of email sent by your application is represented as a &quot;mailable&quot; class. These classes are stored in the <code>app/Mail</code> directory. Don&#39;t worry if you don&#39;t see this directory in your application, since it will be generated for you when you create your first mailable class using the <code>make:mail</code> Artisan command:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan make:mail OrderShipped
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="writing-mailables"></a></p><h2 id="writing-mailables" tabindex="-1"><a class="header-anchor" href="#writing-mailables" aria-hidden="true">#</a> Writing Mailables</h2><p>Once you have generated a mailable class, open it up so we can explore its contents. Mailable class configuration is done in several methods, including the <code>envelope</code>, <code>content</code>, and <code>attachments</code> methods.</p><p>The <code>envelope</code> method returns an <code>Illuminate\\Mail\\Mailables\\Envelope</code> object that defines the subject and, sometimes, the recipients of the message. The <code>content</code> method returns an <code>Illuminate\\Mail\\Mailables\\Content</code> object that defines the <a href="./blade">Blade template</a> that will be used to generate the message content.</p><p><a name="configuring-the-sender"></a></p><h3 id="configuring-the-sender" tabindex="-1"><a class="header-anchor" href="#configuring-the-sender" aria-hidden="true">#</a> Configuring The Sender</h3><p><a name="using-the-envelope"></a></p><h4 id="using-the-envelope" tabindex="-1"><a class="header-anchor" href="#using-the-envelope" aria-hidden="true">#</a> Using The Envelope</h4><p>First, let&#39;s explore configuring the sender of the email. Or, in other words, who the email is going to be &quot;from&quot;. There are two ways to configure the sender. First, you may specify the &quot;from&quot; address on your message&#39;s envelope:</p><pre><code>use Illuminate\\Mail\\Mailables\\Address;
use Illuminate\\Mail\\Mailables\\Envelope;

/**
 * Get the message envelope.
 */
public function envelope(): Envelope
{
    return new Envelope(
        from: new Address(&#39;jeffrey@example.com&#39;, &#39;Jeffrey Way&#39;),
        subject: &#39;Order Shipped&#39;,
    );
}
</code></pre><p>If you would like, you may also specify a <code>replyTo</code> address:</p><pre><code>return new Envelope(
    from: new Address(&#39;jeffrey@example.com&#39;, &#39;Jeffrey Way&#39;),
    replyTo: [
        new Address(&#39;taylor@example.com&#39;, &#39;Taylor Otwell&#39;),
    ],
    subject: &#39;Order Shipped&#39;,
);
</code></pre><p><a name="using-a-global-from-address"></a></p><h4 id="using-a-global-from-address" tabindex="-1"><a class="header-anchor" href="#using-a-global-from-address" aria-hidden="true">#</a> Using A Global <code>from</code> Address</h4><p>However, if your application uses the same &quot;from&quot; address for all of its emails, it can become cumbersome to add it to each mailable class you generate. Instead, you may specify a global &quot;from&quot; address in your <code>config/mail.php</code> configuration file. This address will be used if no other &quot;from&quot; address is specified within the mailable class:</p><pre><code>&#39;from&#39; =&gt; [
    &#39;address&#39; =&gt; env(&#39;MAIL_FROM_ADDRESS&#39;, &#39;hello@example.com&#39;),
    &#39;name&#39; =&gt; env(&#39;MAIL_FROM_NAME&#39;, &#39;Example&#39;),
],
</code></pre><p>In addition, you may define a global &quot;reply_to&quot; address within your <code>config/mail.php</code> configuration file:</p><pre><code>&#39;reply_to&#39; =&gt; [&#39;address&#39; =&gt; &#39;example@example.com&#39;, &#39;name&#39; =&gt; &#39;App Name&#39;],
</code></pre><p><a name="configuring-the-view"></a></p><h3 id="configuring-the-view" tabindex="-1"><a class="header-anchor" href="#configuring-the-view" aria-hidden="true">#</a> Configuring The View</h3><p>Within a mailable class&#39;s <code>content</code> method, you may define the <code>view</code>, or which template should be used when rendering the email&#39;s contents. Since each email typically uses a <a href="./blade">Blade template</a> to render its contents, you have the full power and convenience of the Blade templating engine when building your email&#39;s HTML:</p><pre><code>/**
 * Get the message content definition.
 */
public function content(): Content
{
    return new Content(
        view: &#39;emails.orders.shipped&#39;,
    );
}
</code></pre><blockquote><p><strong>Note</strong><br> You may wish to create a <code>resources/views/emails</code> directory to house all of your email templates; however, you are free to place them wherever you wish within your <code>resources/views</code> directory.</p></blockquote><p><a name="plain-text-emails"></a></p><h4 id="plain-text-emails" tabindex="-1"><a class="header-anchor" href="#plain-text-emails" aria-hidden="true">#</a> Plain Text Emails</h4><p>If you would like to define a plain-text version of your email, you may specify the plain-text template when creating the message&#39;s <code>Content</code> definition. Like the <code>view</code> parameter, the <code>text</code> parameter should be a template name which will be used to render the contents of the email. You are free to define both an HTML and plain-text version of your message:</p><pre><code>/**
 * Get the message content definition.
 */
public function content(): Content
{
    return new Content(
        view: &#39;emails.orders.shipped&#39;,
        text: &#39;emails.orders.shipped-text&#39;
    );
}
</code></pre><p>For clarity, the <code>html</code> parameter may be used as an alias of the <code>view</code> parameter:</p><pre><code>return new Content(
    html: &#39;emails.orders.shipped&#39;,
    text: &#39;emails.orders.shipped-text&#39;
);
</code></pre><p><a name="view-data"></a></p><h3 id="view-data" tabindex="-1"><a class="header-anchor" href="#view-data" aria-hidden="true">#</a> View Data</h3><p><a name="via-public-properties"></a></p><h4 id="via-public-properties" tabindex="-1"><a class="header-anchor" href="#via-public-properties" aria-hidden="true">#</a> Via Public Properties</h4><p>Typically, you will want to pass some data to your view that you can utilize when rendering the email&#39;s HTML. There are two ways you may make data available to your view. First, any public property defined on your mailable class will automatically be made available to the view. So, for example, you may pass data into your mailable class&#39;s constructor and set that data to public properties defined on the class:</p><pre><code>&lt;?php

namespace App\\Mail;

use App\\Models\\Order;
use Illuminate\\Bus\\Queueable;
use Illuminate\\Mail\\Mailable;
use Illuminate\\Mail\\Mailables\\Content;
use Illuminate\\Queue\\SerializesModels;

class OrderShipped extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     */
    public function __construct(
        public Order $order,
    ) {}

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            view: &#39;emails.orders.shipped&#39;,
        );
    }
}
</code></pre><p>Once the data has been set to a public property, it will automatically be available in your view, so you may access it like you would access any other data in your Blade templates:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
        Price<span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token variable">$order</span><span class="token operator">-&gt;</span><span class="token property">price</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="via-the-with-parameter"></a></p><h4 id="via-the-with-parameter" tabindex="-1"><a class="header-anchor" href="#via-the-with-parameter" aria-hidden="true">#</a> Via The <code>with</code> Parameter:</h4><p>If you would like to customize the format of your email&#39;s data before it is sent to the template, you may manually pass your data to the view via the <code>Content</code> definition&#39;s <code>with</code> parameter. Typically, you will still pass data via the mailable class&#39;s constructor; however, you should set this data to <code>protected</code> or <code>private</code> properties so the data is not automatically made available to the template:</p><pre><code>&lt;?php

namespace App\\Mail;

use App\\Models\\Order;
use Illuminate\\Bus\\Queueable;
use Illuminate\\Mail\\Mailable;
use Illuminate\\Mail\\Mailables\\Content;
use Illuminate\\Queue\\SerializesModels;

class OrderShipped extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     */
    public function __construct(
        protected Order $order,
    ) {}

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            view: &#39;emails.orders.shipped&#39;,
            with: [
                &#39;orderName&#39; =&gt; $this-&gt;order-&gt;name,
                &#39;orderPrice&#39; =&gt; $this-&gt;order-&gt;price,
            ],
        );
    }
}
</code></pre><p>Once the data has been passed to the <code>with</code> method, it will automatically be available in your view, so you may access it like you would access any other data in your Blade templates:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
        Price<span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token variable">$orderPrice</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="attachments"></a></p><h3 id="attachments" tabindex="-1"><a class="header-anchor" href="#attachments" aria-hidden="true">#</a> Attachments</h3><p>To add attachments to an email, you will add attachments to the array returned by the message&#39;s <code>attachments</code> method. First, you may add an attachment by providing a file path to the <code>fromPath</code> method provided by the <code>Attachment</code> class:</p><pre><code>use Illuminate\\Mail\\Mailables\\Attachment;

/**
 * Get the attachments for the message.
 *
 * @return array&lt;int, \\Illuminate\\Mail\\Mailables\\Attachment&gt;
 */
public function attachments(): array
{
    return [
        Attachment::fromPath(&#39;/path/to/file&#39;),
    ];
}
</code></pre><p>When attaching files to a message, you may also specify the display name and / or MIME type for the attachment using the <code>as</code> and <code>withMime</code> methods:</p><pre><code>/**
 * Get the attachments for the message.
 *
 * @return array&lt;int, \\Illuminate\\Mail\\Mailables\\Attachment&gt;
 */
public function attachments(): array
{
    return [
        Attachment::fromPath(&#39;/path/to/file&#39;)
                -&gt;as(&#39;name.pdf&#39;)
                -&gt;withMime(&#39;application/pdf&#39;),
    ];
}
</code></pre><p><a name="attaching-files-from-disk"></a></p><h4 id="attaching-files-from-disk" tabindex="-1"><a class="header-anchor" href="#attaching-files-from-disk" aria-hidden="true">#</a> Attaching Files From Disk</h4><p>If you have stored a file on one of your <a href="./filesystem">filesystem disks</a>, you may attach it to the email using the <code>fromStorage</code> attachment method:</p><pre><code>/**
 * Get the attachments for the message.
 *
 * @return array&lt;int, \\Illuminate\\Mail\\Mailables\\Attachment&gt;
 */
public function attachments(): array
{
    return [
        Attachment::fromStorage(&#39;/path/to/file&#39;),
    ];
}
</code></pre><p>Of course, you may also specify the attachment&#39;s name and MIME type:</p><pre><code>/**
 * Get the attachments for the message.
 *
 * @return array&lt;int, \\Illuminate\\Mail\\Mailables\\Attachment&gt;
 */
public function attachments(): array
{
    return [
        Attachment::fromStorage(&#39;/path/to/file&#39;)
                -&gt;as(&#39;name.pdf&#39;)
                -&gt;withMime(&#39;application/pdf&#39;),
    ];
}
</code></pre><p>The <code>fromStorageDisk</code> method may be used if you need to specify a storage disk other than your default disk:</p><pre><code>/**
 * Get the attachments for the message.
 *
 * @return array&lt;int, \\Illuminate\\Mail\\Mailables\\Attachment&gt;
 */
public function attachments(): array
{
    return [
        Attachment::fromStorageDisk(&#39;s3&#39;, &#39;/path/to/file&#39;)
                -&gt;as(&#39;name.pdf&#39;)
                -&gt;withMime(&#39;application/pdf&#39;),
    ];
}
</code></pre><p><a name="raw-data-attachments"></a></p><h4 id="raw-data-attachments" tabindex="-1"><a class="header-anchor" href="#raw-data-attachments" aria-hidden="true">#</a> Raw Data Attachments</h4><p>The <code>fromData</code> attachment method may be used to attach a raw string of bytes as an attachment. For example, you might use this method if you have generated a PDF in memory and want to attach it to the email without writing it to disk. The <code>fromData</code> method accepts a closure which resolves the raw data bytes as well as the name that the attachment should be assigned:</p><pre><code>/**
 * Get the attachments for the message.
 *
 * @return array&lt;int, \\Illuminate\\Mail\\Mailables\\Attachment&gt;
 */
public function attachments(): array
{
    return [
        Attachment::fromData(fn () =&gt; $this-&gt;pdf, &#39;Report.pdf&#39;)
                -&gt;withMime(&#39;application/pdf&#39;),
    ];
}
</code></pre><p><a name="inline-attachments"></a></p><h3 id="inline-attachments" tabindex="-1"><a class="header-anchor" href="#inline-attachments" aria-hidden="true">#</a> Inline Attachments</h3><p>Embedding inline images into your emails is typically cumbersome; however, Laravel provides a convenient way to attach images to your emails. To embed an inline image, use the <code>embed</code> method on the <code>$message</code> variable within your email template. Laravel automatically makes the <code>$message</code> variable available to all of your email templates, so you don&#39;t need to worry about passing it in manually:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;body&gt;
    Here is an image:

    &lt;img src=&quot;{{ $message-&gt;embed($pathToImage) }}&quot;&gt;
&lt;/body&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>Warning</strong><br> The <code>$message</code> variable is not available in plain-text message templates since plain-text messages do not utilize inline attachments.</p></blockquote><p><a name="embedding-raw-data-attachments"></a></p><h4 id="embedding-raw-data-attachments" tabindex="-1"><a class="header-anchor" href="#embedding-raw-data-attachments" aria-hidden="true">#</a> Embedding Raw Data Attachments</h4><p>If you already have a raw image data string you wish to embed into an email template, you may call the <code>embedData</code> method on the <code>$message</code> variable. When calling the <code>embedData</code> method, you will need to provide a filename that should be assigned to the embedded image:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;body&gt;
    Here is an image from raw data:

    &lt;img src=&quot;{{ $message-&gt;embedData($data, &#39;example-image.jpg&#39;) }}&quot;&gt;
&lt;/body&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="attachable-objects"></a></p><h3 id="attachable-objects" tabindex="-1"><a class="header-anchor" href="#attachable-objects" aria-hidden="true">#</a> Attachable Objects</h3><p>While attaching files to messages via simple string paths is often sufficient, in many cases the attachable entities within your application are represented by classes. For example, if your application is attaching a photo to a message, your application may also have a <code>Photo</code> model that represents that photo. When that is the case, wouldn&#39;t it be convenient to simply pass the <code>Photo</code> model to the <code>attach</code> method? Attachable objects allow you to do just that.</p><p>To get started, implement the <code>Illuminate\\Contracts\\Mail\\Attachable</code> interface on the object that will be attachable to messages. This interface dictates that your class defines a <code>toMailAttachment</code> method that returns an <code>Illuminate\\Mail\\Attachment</code> instance:</p><pre><code>&lt;?php

namespace App\\Models;

use Illuminate\\Contracts\\Mail\\Attachable;
use Illuminate\\Database\\Eloquent\\Model;
use Illuminate\\Mail\\Attachment;

class Photo extends Model implements Attachable
{
    /**
     * Get the attachable representation of the model.
     */
    public function toMailAttachment(): Attachment
    {
        return Attachment::fromPath(&#39;/path/to/file&#39;);
    }
}
</code></pre><p>Once you have defined your attachable object, you may return an instance of that object from the <code>attachments</code> method when building an email message:</p><pre><code>/**
 * Get the attachments for the message.
 *
 * @return array&lt;int, \\Illuminate\\Mail\\Mailables\\Attachment&gt;
 */
public function attachments(): array
{
    return [$this-&gt;photo];
}
</code></pre><p>Of course, attachment data may be stored on a remote file storage service such as Amazon S3. So, Laravel also allows you to generate attachment instances from data that is stored on one of your application&#39;s <a href="./filesystem">filesystem disks</a>:</p><pre><code>// Create an attachment from a file on your default disk...
return Attachment::fromStorage($this-&gt;path);

// Create an attachment from a file on a specific disk...
return Attachment::fromStorageDisk(&#39;backblaze&#39;, $this-&gt;path);
</code></pre><p>In addition, you may create attachment instances via data that you have in memory. To accomplish this, provide a closure to the <code>fromData</code> method. The closure should return the raw data that represents the attachment:</p><pre><code>return Attachment::fromData(fn () =&gt; $this-&gt;content, &#39;Photo Name&#39;);
</code></pre><p>Laravel also provides additional methods that you may use to customize your attachments. For example, you may use the <code>as</code> and <code>withMime</code> methods to customize the file&#39;s name and MIME type:</p><pre><code>return Attachment::fromPath(&#39;/path/to/file&#39;)
        -&gt;as(&#39;Photo Name&#39;)
        -&gt;withMime(&#39;image/jpeg&#39;);
</code></pre><p><a name="headers"></a></p><h3 id="headers" tabindex="-1"><a class="header-anchor" href="#headers" aria-hidden="true">#</a> Headers</h3><p>Sometimes you may need to attach additional headers to the outgoing message. For instance, you may need to set a custom <code>Message-Id</code> or other arbitrary text headers.</p><p>To accomplish this, define a <code>headers</code> method on your mailable. The <code>headers</code> method should return an <code>Illuminate\\Mail\\Mailables\\Headers</code> instance. This class accepts <code>messageId</code>, <code>references</code>, and <code>text</code> parameters. Of course, you may provide only the parameters you need for your particular message:</p><pre><code>use Illuminate\\Mail\\Mailables\\Headers;

/**
 * Get the message headers.
 */
public function headers(): Headers
{
    return new Headers(
        messageId: &#39;custom-message-id@example.com&#39;,
        references: [&#39;previous-message@example.com&#39;],
        text: [
            &#39;X-Custom-Header&#39; =&gt; &#39;Custom Value&#39;,
        ],
    );
}
</code></pre><p><a name="tags-and-metadata"></a></p><h3 id="tags-metadata" tabindex="-1"><a class="header-anchor" href="#tags-metadata" aria-hidden="true">#</a> Tags &amp; Metadata</h3><p>Some third-party email providers such as Mailgun and Postmark support message &quot;tags&quot; and &quot;metadata&quot;, which may be used to group and track emails sent by your application. You may add tags and metadata to an email message via your <code>Envelope</code> definition:</p><pre><code>use Illuminate\\Mail\\Mailables\\Envelope;

/**
 * Get the message envelope.
 *
 * @return \\Illuminate\\Mail\\Mailables\\Envelope
 */
public function envelope(): Envelope
{
    return new Envelope(
        subject: &#39;Order Shipped&#39;,
        tags: [&#39;shipment&#39;],
        metadata: [
            &#39;order_id&#39; =&gt; $this-&gt;order-&gt;id,
        ],
    );
}
</code></pre>`,103),C={href:"https://documentation.mailgun.com/en/latest/user_manual.html#tagging-1",target:"_blank",rel:"noopener noreferrer"},E={href:"https://documentation.mailgun.com/en/latest/user_manual.html#attaching-data-to-messages",target:"_blank",rel:"noopener noreferrer"},O={href:"https://postmarkapp.com/blog/tags-support-for-smtp",target:"_blank",rel:"noopener noreferrer"},L={href:"https://postmarkapp.com/support/article/1125-custom-metadata-faq",target:"_blank",rel:"noopener noreferrer"},P=a("code",null,"metadata",-1),D={href:"https://docs.aws.amazon.com/ses/latest/APIReference/API_MessageTag.html",target:"_blank",rel:"noopener noreferrer"},H=i(`<p><a name="customizing-the-symfony-message"></a></p><h3 id="customizing-the-symfony-message" tabindex="-1"><a class="header-anchor" href="#customizing-the-symfony-message" aria-hidden="true">#</a> Customizing The Symfony Message</h3><p>Laravel&#39;s mail capabilities are powered by Symfony Mailer. Laravel allows you to register custom callbacks that will be invoked with the Symfony Message instance before sending the message. This gives you an opportunity to deeply customize the message before it is sent. To accomplish this, define a <code>using</code> parameter on your <code>Envelope</code> definition:</p><pre><code>use Illuminate\\Mail\\Mailables\\Envelope;
use Symfony\\Component\\Mime\\Email;

/**
 * Get the message envelope.
 */
public function envelope(): Envelope
{
    return new Envelope(
        subject: &#39;Order Shipped&#39;,
        using: [
            function (Email $message) {
                // ...
            },
        ]
    );
}
</code></pre><p><a name="markdown-mailables"></a></p><h2 id="markdown-mailables" tabindex="-1"><a class="header-anchor" href="#markdown-mailables" aria-hidden="true">#</a> Markdown Mailables</h2><p>Markdown mailable messages allow you to take advantage of the pre-built templates and components of <a href="./notifications#mail-notifications">mail notifications</a> in your mailables. Since the messages are written in Markdown, Laravel is able to render beautiful, responsive HTML templates for the messages while also automatically generating a plain-text counterpart.</p><p><a name="generating-markdown-mailables"></a></p><h3 id="generating-markdown-mailables" tabindex="-1"><a class="header-anchor" href="#generating-markdown-mailables" aria-hidden="true">#</a> Generating Markdown Mailables</h3><p>To generate a mailable with a corresponding Markdown template, you may use the <code>--markdown</code> option of the <code>make:mail</code> Artisan command:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan make:mail OrderShipped <span class="token parameter variable">--markdown</span><span class="token operator">=</span>emails.orders.shipped
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Then, when configuring the mailable <code>Content</code> definition within its <code>content</code> method, use the <code>markdown</code> parameter instead of the <code>view</code> parameter:</p><pre><code>use Illuminate\\Mail\\Mailables\\Content;

/**
 * Get the message content definition.
 */
public function content(): Content
{
    return new Content(
        markdown: &#39;emails.orders.shipped&#39;,
        with: [
            &#39;url&#39; =&gt; $this-&gt;orderUrl,
        ],
    );
}
</code></pre><p><a name="writing-markdown-messages"></a></p><h3 id="writing-markdown-messages" tabindex="-1"><a class="header-anchor" href="#writing-markdown-messages" aria-hidden="true">#</a> Writing Markdown Messages</h3><p>Markdown mailables use a combination of Blade components and Markdown syntax which allow you to easily construct mail messages while leveraging Laravel&#39;s pre-built email UI components:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;x-mail::message&gt;
# Order Shipped

Your order has been shipped!

&lt;x-mail::button :url=&quot;$url&quot;&gt;
View Order
&lt;/x-mail::button&gt;

Thanks,&lt;br&gt;
{{ config(&#39;app.name&#39;) }}
&lt;/x-mail::message&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>Note</strong><br> Do not use excess indentation when writing Markdown emails. Per Markdown standards, Markdown parsers will render indented content as code blocks.</p></blockquote><p><a name="button-component"></a></p><h4 id="button-component" tabindex="-1"><a class="header-anchor" href="#button-component" aria-hidden="true">#</a> Button Component</h4><p>The button component renders a centered button link. The component accepts two arguments, a <code>url</code> and an optional <code>color</code>. Supported colors are <code>primary</code>, <code>success</code>, and <code>error</code>. You may add as many button components to a message as you wish:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;x-mail::button :url=&quot;$url&quot; color=&quot;success&quot;&gt;
View Order
&lt;/x-mail::button&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="panel-component"></a></p><h4 id="panel-component" tabindex="-1"><a class="header-anchor" href="#panel-component" aria-hidden="true">#</a> Panel Component</h4><p>The panel component renders the given block of text in a panel that has a slightly different background color than the rest of the message. This allows you to draw attention to a given block of text:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;x-mail::panel&gt;
This is the panel content.
&lt;/x-mail::panel&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="table-component"></a></p><h4 id="table-component" tabindex="-1"><a class="header-anchor" href="#table-component" aria-hidden="true">#</a> Table Component</h4><p>The table component allows you to transform a Markdown table into an HTML table. The component accepts the Markdown table as its content. Table column alignment is supported using the default Markdown table alignment syntax:</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;x-mail::table&gt;
| Laravel       | Table         | Example  |
| ------------- |:-------------:| --------:|
| Col 2 is      | Centered      | $10      |
| Col 3 is      | Right-Aligned | $20      |
&lt;/x-mail::table&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="customizing-the-components"></a></p><h3 id="customizing-the-components" tabindex="-1"><a class="header-anchor" href="#customizing-the-components" aria-hidden="true">#</a> Customizing The Components</h3><p>You may export all of the Markdown mail components to your own application for customization. To export the components, use the <code>vendor:publish</code> Artisan command to publish the <code>laravel-mail</code> asset tag:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan vendor:publish <span class="token parameter variable">--tag</span><span class="token operator">=</span>laravel-mail
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>This command will publish the Markdown mail components to the <code>resources/views/vendor/mail</code> directory. The <code>mail</code> directory will contain an <code>html</code> and a <code>text</code> directory, each containing their respective representations of every available component. You are free to customize these components however you like.</p><p><a name="customizing-the-css"></a></p><h4 id="customizing-the-css" tabindex="-1"><a class="header-anchor" href="#customizing-the-css" aria-hidden="true">#</a> Customizing The CSS</h4><p>After exporting the components, the <code>resources/views/vendor/mail/html/themes</code> directory will contain a <code>default.css</code> file. You may customize the CSS in this file and your styles will automatically be converted to inline CSS styles within the HTML representations of your Markdown mail messages.</p><p>If you would like to build an entirely new theme for Laravel&#39;s Markdown components, you may place a CSS file within the <code>html/themes</code> directory. After naming and saving your CSS file, update the <code>theme</code> option of your application&#39;s <code>config/mail.php</code> configuration file to match the name of your new theme.</p><p>To customize the theme for an individual mailable, you may set the <code>$theme</code> property of the mailable class to the name of the theme that should be used when sending that mailable.</p><p><a name="sending-mail"></a></p><h2 id="sending-mail" tabindex="-1"><a class="header-anchor" href="#sending-mail" aria-hidden="true">#</a> Sending Mail</h2><p>To send a message, use the <code>to</code> method on the <code>Mail</code> <a href="./facades">facade</a>. The <code>to</code> method accepts an email address, a user instance, or a collection of users. If you pass an object or collection of objects, the mailer will automatically use their <code>email</code> and <code>name</code> properties when determining the email&#39;s recipients, so make sure these attributes are available on your objects. Once you have specified your recipients, you may pass an instance of your mailable class to the <code>send</code> method:</p><pre><code>&lt;?php

namespace App\\Http\\Controllers;

use App\\Http\\Controllers\\Controller;
use App\\Mail\\OrderShipped;
use App\\Models\\Order;
use Illuminate\\Http\\RedirectResponse;
use Illuminate\\Http\\Request;
use Illuminate\\Support\\Facades\\Mail;

class OrderShipmentController extends Controller
{
    /**
     * Ship the given order.
     */
    public function store(Request $request): RedirectResponse
    {
        $order = Order::findOrFail($request-&gt;order_id);

        // Ship the order...

        Mail::to($request-&gt;user())-&gt;send(new OrderShipped($order));

        return redirect(&#39;/orders&#39;);
    }
}
</code></pre><p>You are not limited to just specifying the &quot;to&quot; recipients when sending a message. You are free to set &quot;to&quot;, &quot;cc&quot;, and &quot;bcc&quot; recipients by chaining their respective methods together:</p><pre><code>Mail::to($request-&gt;user())
    -&gt;cc($moreUsers)
    -&gt;bcc($evenMoreUsers)
    -&gt;send(new OrderShipped($order));
</code></pre><p><a name="looping-over-recipients"></a></p><h4 id="looping-over-recipients" tabindex="-1"><a class="header-anchor" href="#looping-over-recipients" aria-hidden="true">#</a> Looping Over Recipients</h4><p>Occasionally, you may need to send a mailable to a list of recipients by iterating over an array of recipients / email addresses. However, since the <code>to</code> method appends email addresses to the mailable&#39;s list of recipients, each iteration through the loop will send another email to every previous recipient. Therefore, you should always re-create the mailable instance for each recipient:</p><pre><code>foreach ([&#39;taylor@example.com&#39;, &#39;dries@example.com&#39;] as $recipient) {
    Mail::to($recipient)-&gt;send(new OrderShipped($order));
}
</code></pre><p><a name="sending-mail-via-a-specific-mailer"></a></p><h4 id="sending-mail-via-a-specific-mailer" tabindex="-1"><a class="header-anchor" href="#sending-mail-via-a-specific-mailer" aria-hidden="true">#</a> Sending Mail Via A Specific Mailer</h4><p>By default, Laravel will send email using the mailer configured as the <code>default</code> mailer in your application&#39;s <code>mail</code> configuration file. However, you may use the <code>mailer</code> method to send a message using a specific mailer configuration:</p><pre><code>Mail::mailer(&#39;postmark&#39;)
        -&gt;to($request-&gt;user())
        -&gt;send(new OrderShipped($order));
</code></pre><p><a name="queueing-mail"></a></p><h3 id="queueing-mail" tabindex="-1"><a class="header-anchor" href="#queueing-mail" aria-hidden="true">#</a> Queueing Mail</h3><p><a name="queueing-a-mail-message"></a></p><h4 id="queueing-a-mail-message" tabindex="-1"><a class="header-anchor" href="#queueing-a-mail-message" aria-hidden="true">#</a> Queueing A Mail Message</h4><p>Since sending email messages can negatively impact the response time of your application, many developers choose to queue email messages for background sending. Laravel makes this easy using its built-in <a href="./queues">unified queue API</a>. To queue a mail message, use the <code>queue</code> method on the <code>Mail</code> facade after specifying the message&#39;s recipients:</p><pre><code>Mail::to($request-&gt;user())
    -&gt;cc($moreUsers)
    -&gt;bcc($evenMoreUsers)
    -&gt;queue(new OrderShipped($order));
</code></pre><p>This method will automatically take care of pushing a job onto the queue so the message is sent in the background. You will need to <a href="./queues">configure your queues</a> before using this feature.</p><p><a name="delayed-message-queueing"></a></p><h4 id="delayed-message-queueing" tabindex="-1"><a class="header-anchor" href="#delayed-message-queueing" aria-hidden="true">#</a> Delayed Message Queueing</h4><p>If you wish to delay the delivery of a queued email message, you may use the <code>later</code> method. As its first argument, the <code>later</code> method accepts a <code>DateTime</code> instance indicating when the message should be sent:</p><pre><code>Mail::to($request-&gt;user())
    -&gt;cc($moreUsers)
    -&gt;bcc($evenMoreUsers)
    -&gt;later(now()-&gt;addMinutes(10), new OrderShipped($order));
</code></pre><p><a name="pushing-to-specific-queues"></a></p><h4 id="pushing-to-specific-queues" tabindex="-1"><a class="header-anchor" href="#pushing-to-specific-queues" aria-hidden="true">#</a> Pushing To Specific Queues</h4><p>Since all mailable classes generated using the <code>make:mail</code> command make use of the <code>Illuminate\\Bus\\Queueable</code> trait, you may call the <code>onQueue</code> and <code>onConnection</code> methods on any mailable class instance, allowing you to specify the connection and queue name for the message:</p><pre><code>$message = (new OrderShipped($order))
                -&gt;onConnection(&#39;sqs&#39;)
                -&gt;onQueue(&#39;emails&#39;);

Mail::to($request-&gt;user())
    -&gt;cc($moreUsers)
    -&gt;bcc($evenMoreUsers)
    -&gt;queue($message);
</code></pre><p><a name="queueing-by-default"></a></p><h4 id="queueing-by-default" tabindex="-1"><a class="header-anchor" href="#queueing-by-default" aria-hidden="true">#</a> Queueing By Default</h4><p>If you have mailable classes that you want to always be queued, you may implement the <code>ShouldQueue</code> contract on the class. Now, even if you call the <code>send</code> method when mailing, the mailable will still be queued since it implements the contract:</p><pre><code>use Illuminate\\Contracts\\Queue\\ShouldQueue;

class OrderShipped extends Mailable implements ShouldQueue
{
    // ...
}
</code></pre><p><a name="queued-mailables-and-database-transactions"></a></p><h4 id="queued-mailables-database-transactions" tabindex="-1"><a class="header-anchor" href="#queued-mailables-database-transactions" aria-hidden="true">#</a> Queued Mailables &amp; Database Transactions</h4><p>When queued mailables are dispatched within database transactions, they may be processed by the queue before the database transaction has committed. When this happens, any updates you have made to models or database records during the database transaction may not yet be reflected in the database. In addition, any models or database records created within the transaction may not exist in the database. If your mailable depends on these models, unexpected errors can occur when the job that sends the queued mailable is processed.</p><p>If your queue connection&#39;s <code>after_commit</code> configuration option is set to <code>false</code>, you may still indicate that a particular queued mailable should be dispatched after all open database transactions have been committed by calling the <code>afterCommit</code> method when sending the mail message:</p><pre><code>Mail::to($request-&gt;user())-&gt;send(
    (new OrderShipped($order))-&gt;afterCommit()
);
</code></pre><p>Alternatively, you may call the <code>afterCommit</code> method from your mailable&#39;s constructor:</p><pre><code>&lt;?php

namespace App\\Mail;

use Illuminate\\Bus\\Queueable;
use Illuminate\\Contracts\\Queue\\ShouldQueue;
use Illuminate\\Mail\\Mailable;
use Illuminate\\Queue\\SerializesModels;

class OrderShipped extends Mailable implements ShouldQueue
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     */
    public function __construct()
    {
        $this-&gt;afterCommit();
    }
}
</code></pre><blockquote><p><strong>Note</strong><br> To learn more about working around these issues, please review the documentation regarding <a href="./queues#jobs-and-database-transactions">queued jobs and database transactions</a>.</p></blockquote><p><a name="rendering-mailables"></a></p><h2 id="rendering-mailables" tabindex="-1"><a class="header-anchor" href="#rendering-mailables" aria-hidden="true">#</a> Rendering Mailables</h2><p>Sometimes you may wish to capture the HTML content of a mailable without sending it. To accomplish this, you may call the <code>render</code> method of the mailable. This method will return the evaluated HTML content of the mailable as a string:</p><pre><code>use App\\Mail\\InvoicePaid;
use App\\Models\\Invoice;

$invoice = Invoice::find(1);

return (new InvoicePaid($invoice))-&gt;render();
</code></pre><p><a name="previewing-mailables-in-the-browser"></a></p><h3 id="previewing-mailables-in-the-browser" tabindex="-1"><a class="header-anchor" href="#previewing-mailables-in-the-browser" aria-hidden="true">#</a> Previewing Mailables In The Browser</h3><p>When designing a mailable&#39;s template, it is convenient to quickly preview the rendered mailable in your browser like a typical Blade template. For this reason, Laravel allows you to return any mailable directly from a route closure or controller. When a mailable is returned, it will be rendered and displayed in the browser, allowing you to quickly preview its design without needing to send it to an actual email address:</p><pre><code>Route::get(&#39;/mailable&#39;, function () {
    $invoice = App\\Models\\Invoice::find(1);

    return new App\\Mail\\InvoicePaid($invoice);
});
</code></pre><p><a name="localizing-mailables"></a></p><h2 id="localizing-mailables" tabindex="-1"><a class="header-anchor" href="#localizing-mailables" aria-hidden="true">#</a> Localizing Mailables</h2><p>Laravel allows you to send mailables in a locale other than the request&#39;s current locale, and will even remember this locale if the mail is queued.</p><p>To accomplish this, the <code>Mail</code> facade offers a <code>locale</code> method to set the desired language. The application will change into this locale when the mailable&#39;s template is being evaluated and then revert back to the previous locale when evaluation is complete:</p><pre><code>Mail::to($request-&gt;user())-&gt;locale(&#39;es&#39;)-&gt;send(
    new OrderShipped($order)
);
</code></pre><p><a name="user-preferred-locales"></a></p><h3 id="user-preferred-locales" tabindex="-1"><a class="header-anchor" href="#user-preferred-locales" aria-hidden="true">#</a> User Preferred Locales</h3><p>Sometimes, applications store each user&#39;s preferred locale. By implementing the <code>HasLocalePreference</code> contract on one or more of your models, you may instruct Laravel to use this stored locale when sending mail:</p><pre><code>use Illuminate\\Contracts\\Translation\\HasLocalePreference;

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
</code></pre><p>Once you have implemented the interface, Laravel will automatically use the preferred locale when sending mailables and notifications to the model. Therefore, there is no need to call the <code>locale</code> method when using this interface:</p><pre><code>Mail::to($request-&gt;user())-&gt;send(new OrderShipped($order));
</code></pre><p><a name="testing-mailables"></a></p><h2 id="testing" tabindex="-1"><a class="header-anchor" href="#testing" aria-hidden="true">#</a> Testing</h2><p><a name="testing-mailable-content"></a></p><h3 id="testing-mailable-content" tabindex="-1"><a class="header-anchor" href="#testing-mailable-content" aria-hidden="true">#</a> Testing Mailable Content</h3><p>Laravel provides a variety of methods for inspecting your mailable&#39;s structure. In addition, Laravel provides several convenient methods for testing that your mailable contains the content that you expect. These methods are: <code>assertSeeInHtml</code>, <code>assertDontSeeInHtml</code>, <code>assertSeeInOrderInHtml</code>, <code>assertSeeInText</code>, <code>assertDontSeeInText</code>, <code>assertSeeInOrderInText</code>, <code>assertHasAttachment</code>, <code>assertHasAttachedData</code>, <code>assertHasAttachmentFromStorage</code>, and <code>assertHasAttachmentFromStorageDisk</code>.</p><p>As you might expect, the &quot;HTML&quot; assertions assert that the HTML version of your mailable contains a given string, while the &quot;text&quot; assertions assert that the plain-text version of your mailable contains a given string:</p><pre><code>use App\\Mail\\InvoicePaid;
use App\\Models\\User;

public function test_mailable_content(): void
{
    $user = User::factory()-&gt;create();

    $mailable = new InvoicePaid($user);

    $mailable-&gt;assertFrom(&#39;jeffrey@example.com&#39;);
    $mailable-&gt;assertTo(&#39;taylor@example.com&#39;);
    $mailable-&gt;assertHasCc(&#39;abigail@example.com&#39;);
    $mailable-&gt;assertHasBcc(&#39;victoria@example.com&#39;);
    $mailable-&gt;assertHasReplyTo(&#39;tyler@example.com&#39;);
    $mailable-&gt;assertHasSubject(&#39;Invoice Paid&#39;);
    $mailable-&gt;assertHasTag(&#39;example-tag&#39;);
    $mailable-&gt;assertHasMetadata(&#39;key&#39;, &#39;value&#39;);

    $mailable-&gt;assertSeeInHtml($user-&gt;email);
    $mailable-&gt;assertSeeInHtml(&#39;Invoice Paid&#39;);
    $mailable-&gt;assertSeeInOrderInHtml([&#39;Invoice Paid&#39;, &#39;Thanks&#39;]);

    $mailable-&gt;assertSeeInText($user-&gt;email);
    $mailable-&gt;assertSeeInOrderInText([&#39;Invoice Paid&#39;, &#39;Thanks&#39;]);

    $mailable-&gt;assertHasAttachment(&#39;/path/to/file&#39;);
    $mailable-&gt;assertHasAttachment(Attachment::fromPath(&#39;/path/to/file&#39;));
    $mailable-&gt;assertHasAttachedData($pdfData, &#39;name.pdf&#39;, [&#39;mime&#39; =&gt; &#39;application/pdf&#39;]);
    $mailable-&gt;assertHasAttachmentFromStorage(&#39;/path/to/file&#39;, &#39;name.pdf&#39;, [&#39;mime&#39; =&gt; &#39;application/pdf&#39;]);
    $mailable-&gt;assertHasAttachmentFromStorageDisk(&#39;s3&#39;, &#39;/path/to/file&#39;, &#39;name.pdf&#39;, [&#39;mime&#39; =&gt; &#39;application/pdf&#39;]);
}
</code></pre><p><a name="testing-mailable-sending"></a></p><h3 id="testing-mailable-sending" tabindex="-1"><a class="header-anchor" href="#testing-mailable-sending" aria-hidden="true">#</a> Testing Mailable Sending</h3><p>We suggest testing the content of your mailables separately from your tests that assert that a given mailable was &quot;sent&quot; to a specific user. Typically, the content of mailables is not relevant to the code you are testing, and it is sufficient to simply assert that Laravel was instructed to send a given mailable.</p><p>You may use the <code>Mail</code> facade&#39;s <code>fake</code> method to prevent mail from being sent. After calling the <code>Mail</code> facade&#39;s <code>fake</code> method, you may then assert that mailables were instructed to be sent to users and even inspect the data the mailables received:</p><pre><code>&lt;?php

namespace Tests\\Feature;

use App\\Mail\\OrderShipped;
use Illuminate\\Support\\Facades\\Mail;
use Tests\\TestCase;

class ExampleTest extends TestCase
{
    public function test_orders_can_be_shipped(): void
    {
        Mail::fake();

        // Perform order shipping...

        // Assert that no mailables were sent...
        Mail::assertNothingSent();

        // Assert that a mailable was sent...
        Mail::assertSent(OrderShipped::class);

        // Assert a mailable was sent twice...
        Mail::assertSent(OrderShipped::class, 2);

        // Assert a mailable was not sent...
        Mail::assertNotSent(AnotherMailable::class);

        // Assert 3 total mailables were sent...
        Mail::assertSentCount(3);
    }
}
</code></pre><p>If you are queueing mailables for delivery in the background, you should use the <code>assertQueued</code> method instead of <code>assertSent</code>:</p><pre><code>Mail::assertQueued(OrderShipped::class);
Mail::assertNotQueued(OrderShipped::class);
Mail::assertNothingQueued();
Mail::assertQueuedCount(3);
</code></pre><p>You may pass a closure to the <code>assertSent</code>, <code>assertNotSent</code>, <code>assertQueued</code>, or <code>assertNotQueued</code> methods in order to assert that a mailable was sent that passes a given &quot;truth test&quot;. If at least one mailable was sent that passes the given truth test then the assertion will be successful:</p><pre><code>Mail::assertSent(function (OrderShipped $mail) use ($order) {
    return $mail-&gt;order-&gt;id === $order-&gt;id;
});
</code></pre><p>When calling the <code>Mail</code> facade&#39;s assertion methods, the mailable instance accepted by the provided closure exposes helpful methods for examining the mailable:</p><pre><code>Mail::assertSent(OrderShipped::class, function (OrderShipped $mail) use ($user) {
    return $mail-&gt;hasTo($user-&gt;email) &amp;&amp;
           $mail-&gt;hasCc(&#39;...&#39;) &amp;&amp;
           $mail-&gt;hasBcc(&#39;...&#39;) &amp;&amp;
           $mail-&gt;hasReplyTo(&#39;...&#39;) &amp;&amp;
           $mail-&gt;hasFrom(&#39;...&#39;) &amp;&amp;
           $mail-&gt;hasSubject(&#39;...&#39;);
});
</code></pre><p>The mailable instance also includes several helpful methods for examining the attachments on a mailable:</p><pre><code>use Illuminate\\Mail\\Mailables\\Attachment;

Mail::assertSent(OrderShipped::class, function (OrderShipped $mail) {
    return $mail-&gt;hasAttachment(
        Attachment::fromPath(&#39;/path/to/file&#39;)
                -&gt;as(&#39;name.pdf&#39;)
                -&gt;withMime(&#39;application/pdf&#39;)
    );
});

Mail::assertSent(OrderShipped::class, function (OrderShipped $mail) {
    return $mail-&gt;hasAttachment(
        Attachment::fromStorageDisk(&#39;s3&#39;, &#39;/path/to/file&#39;)
    );
});

Mail::assertSent(OrderShipped::class, function (OrderShipped $mail) use ($pdfData) {
    return $mail-&gt;hasAttachment(
        Attachment::fromData(fn () =&gt; $pdfData, &#39;name.pdf&#39;)
    );
});
</code></pre><p>You may have noticed that there are two methods for asserting that mail was not sent: <code>assertNotSent</code> and <code>assertNotQueued</code>. Sometimes you may wish to assert that no mail was sent <strong>or</strong> queued. To accomplish this, you may use the <code>assertNothingOutgoing</code> and <code>assertNotOutgoing</code> methods:</p><pre><code>Mail::assertNothingOutgoing();

Mail::assertNotOutgoing(function (OrderShipped $mail) use ($order) {
    return $mail-&gt;order-&gt;id === $order-&gt;id;
});
</code></pre><p><a name="mail-and-local-development"></a></p><h2 id="mail-local-development" tabindex="-1"><a class="header-anchor" href="#mail-local-development" aria-hidden="true">#</a> Mail &amp; Local Development</h2><p>When developing an application that sends email, you probably don&#39;t want to actually send emails to live email addresses. Laravel provides several ways to &quot;disable&quot; the actual sending of emails during local development.</p><p><a name="log-driver"></a></p><h4 id="log-driver" tabindex="-1"><a class="header-anchor" href="#log-driver" aria-hidden="true">#</a> Log Driver</h4><p>Instead of sending your emails, the <code>log</code> mail driver will write all email messages to your log files for inspection. Typically, this driver would only be used during local development. For more information on configuring your application per environment, check out the <a href="./configuration#environment-configuration">configuration documentation</a>.</p><p><a name="mailtrap"></a></p><h4 id="helo-mailtrap-mailpit" tabindex="-1"><a class="header-anchor" href="#helo-mailtrap-mailpit" aria-hidden="true">#</a> HELO / Mailtrap / Mailpit</h4>`,130),z={href:"https://usehelo.com",target:"_blank",rel:"noopener noreferrer"},N={href:"https://mailtrap.io",target:"_blank",rel:"noopener noreferrer"},F=a("code",null,"smtp",-1),R=a("a",{href:"./sail"},"Laravel Sail",-1),j={href:"https://github.com/axllent/mailpit",target:"_blank",rel:"noopener noreferrer"},W=a("code",null,"http://localhost:8025",-1),G=i(`<p><a name="using-a-global-to-address"></a></p><h4 id="using-a-global-to-address" tabindex="-1"><a class="header-anchor" href="#using-a-global-to-address" aria-hidden="true">#</a> Using A Global <code>to</code> Address</h4><p>Finally, you may specify a global &quot;to&quot; address by invoking the <code>alwaysTo</code> method offered by the <code>Mail</code> facade. Typically, this method should be called from the <code>boot</code> method of one of your application&#39;s service providers:</p><pre><code>use Illuminate\\Support\\Facades\\Mail;

/**
 * Bootstrap any application services.
 */
public function boot(): void
{
    if ($this-&gt;app-&gt;environment(&#39;local&#39;)) {
        Mail::alwaysTo(&#39;taylor@example.com&#39;);
    }
}
</code></pre><p><a name="events"></a></p><h2 id="events" tabindex="-1"><a class="header-anchor" href="#events" aria-hidden="true">#</a> Events</h2><p>Laravel fires two events during the process of sending mail messages. The <code>MessageSending</code> event is fired prior to a message being sent, while the <code>MessageSent</code> event is fired after a message has been sent. Remember, these events are fired when the mail is being <em>sent</em>, not when it is queued. You may register event listeners for this event in your <code>App\\Providers\\EventServiceProvider</code> service provider:</p><pre><code>use App\\Listeners\\LogSendingMessage;
use App\\Listeners\\LogSentMessage;
use Illuminate\\Mail\\Events\\MessageSending;
use Illuminate\\Mail\\Events\\MessageSent;

/**
 * The event listener mappings for the application.
 *
 * @var array
 */
protected $listen = [
    MessageSending::class =&gt; [
        LogSendingMessage::class,
    ],

    MessageSent::class =&gt; [
        LogSentMessage::class,
    ],
];
</code></pre><p><a name="custom-transports"></a></p><h2 id="custom-transports" tabindex="-1"><a class="header-anchor" href="#custom-transports" aria-hidden="true">#</a> Custom Transports</h2><p>Laravel includes a variety of mail transports; however, you may wish to write your own transports to deliver email via other services that Laravel does not support out of the box. To get started, define a class that extends the <code>Symfony\\Component\\Mailer\\Transport\\AbstractTransport</code> class. Then, implement the <code>doSend</code> and <code>__toString()</code> methods on your transport:</p><pre><code>use MailchimpTransactional\\ApiClient;
use Symfony\\Component\\Mailer\\SentMessage;
use Symfony\\Component\\Mailer\\Transport\\AbstractTransport;
use Symfony\\Component\\Mime\\Address;
use Symfony\\Component\\Mime\\MessageConverter;

class MailchimpTransport extends AbstractTransport
{
    /**
     * Create a new Mailchimp transport instance.
     */
    public function __construct(
        protected ApiClient $client,
    ) {
        parent::__construct();
    }

    /**
     * {@inheritDoc}
     */
    protected function doSend(SentMessage $message): void
    {
        $email = MessageConverter::toEmail($message-&gt;getOriginalMessage());

        $this-&gt;client-&gt;messages-&gt;send([&#39;message&#39; =&gt; [
            &#39;from_email&#39; =&gt; $email-&gt;getFrom(),
            &#39;to&#39; =&gt; collect($email-&gt;getTo())-&gt;map(function (Address $email) {
                return [&#39;email&#39; =&gt; $email-&gt;getAddress(), &#39;type&#39; =&gt; &#39;to&#39;];
            })-&gt;all(),
            &#39;subject&#39; =&gt; $email-&gt;getSubject(),
            &#39;text&#39; =&gt; $email-&gt;getTextBody(),
        ]]);
    }

    /**
     * Get the string representation of the transport.
     */
    public function __toString(): string
    {
        return &#39;mailchimp&#39;;
    }
}
</code></pre><p>Once you&#39;ve defined your custom transport, you may register it via the <code>extend</code> method provided by the <code>Mail</code> facade. Typically, this should be done within the <code>boot</code> method of your application&#39;s <code>AppServiceProvider</code> service provider. A <code>$config</code> argument will be passed to the closure provided to the <code>extend</code> method. This argument will contain the configuration array defined for the mailer in the application&#39;s <code>config/mail.php</code> configuration file:</p><pre><code>use App\\Mail\\MailchimpTransport;
use Illuminate\\Support\\Facades\\Mail;

/**
 * Bootstrap any application services.
 */
public function boot(): void
{
    Mail::extend(&#39;mailchimp&#39;, function (array $config = []) {
        return new MailchimpTransport(/* ... */);
    });
}
</code></pre><p>Once your custom transport has been defined and registered, you may create a mailer definition within your application&#39;s <code>config/mail.php</code> configuration file that utilizes the new transport:</p><pre><code>&#39;mailchimp&#39; =&gt; [
    &#39;transport&#39; =&gt; &#39;mailchimp&#39;,
    // ...
],
</code></pre><p><a name="additional-symfony-transports"></a></p><h3 id="additional-symfony-transports" tabindex="-1"><a class="header-anchor" href="#additional-symfony-transports" aria-hidden="true">#</a> Additional Symfony Transports</h3><p>Laravel includes support for some existing Symfony maintained mail transports like Mailgun and Postmark. However, you may wish to extend Laravel with support for additional Symfony maintained transports. You can do so by requiring the necessary Symfony mailer via Composer and registering the transport with Laravel. For example, you may install and register the &quot;Brevo&quot; (formerly &quot;Sendinblue&quot;) Symfony mailer:</p><div class="language-none line-numbers-mode" data-ext="none"><pre class="language-none"><code>composer require symfony/brevo-mailer symfony/http-client
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Once the Brevo mailer package has been installed, you may add an entry for your Brevo API credentials to your application&#39;s <code>services</code> configuration file:</p><pre><code>&#39;brevo&#39; =&gt; [
    &#39;key&#39; =&gt; &#39;your-api-key&#39;,
],
</code></pre><p>Next, you may use the <code>Mail</code> facade&#39;s <code>extend</code> method to register the transport with Laravel. Typically, this should be done within the <code>boot</code> method of a service provider:</p><pre><code>use Illuminate\\Support\\Facades\\Mail;
use Symfony\\Component\\Mailer\\Bridge\\Brevo\\Transport\\BrevoTransportFactory;
use Symfony\\Component\\Mailer\\Transport\\Dsn;

/**
 * Bootstrap any application services.
 */
public function boot(): void
{
    Mail::extend(&#39;brevo&#39;, function () {
        return (new BrevoTransportFactory)-&gt;create(
            new Dsn(
                &#39;brevo+api&#39;,
                &#39;default&#39;,
                config(&#39;services.brevo.key&#39;)
            )
        );
    });
}
</code></pre><p>Once your transport has been registered, you may create a mailer definition within your application&#39;s config/mail.php configuration file that utilizes the new transport:</p><pre><code>&#39;brevo&#39; =&gt; [
    &#39;transport&#39; =&gt; &#39;brevo&#39;,
    // ...
],
</code></pre>`,26);function Q(B,U){const n=s("ExternalLinkIcon");return r(),l("div",null,[c,a("p",null,[e("Sending email doesn't have to be complicated. Laravel provides a clean, simple email API powered by the popular "),a("a",p,[e("Symfony Mailer"),t(n)]),e(" component. Laravel and Symfony Mailer provide drivers for sending email via SMTP, Mailgun, Postmark, Amazon SES, and "),m,e(", allowing you to quickly get started sending mail through a local or cloud based service of your choice.")]),h,a("p",null,[e("If you are not using the United States "),a("a",u,[e("Mailgun region"),t(n)]),e(", you may define your region's endpoint in the "),g,e(" configuration file:")]),f,a("p",null,[e("To utilize AWS "),a("a",b,[e("temporary credentials"),t(n)]),e(" via a session token, you may add a "),y,e(" key to your application's SES configuration:")]),v,a("p",null,[e("If you would like to define "),a("a",w,[e("additional options"),t(n)]),e(" that Laravel should pass to the AWS SDK's "),M,e(" method when sending an email, you may define an "),S,e(" array within your "),k,e(" configuration:")]),x,A,_,a("p",null,[a("a",T,[e("MailerSend"),t(n)]),e(", a transactional email and SMS service, maintains their own API based mail driver for Laravel. The package containing the driver may be installed via the Composer package manager:")]),I,a("p",null,[e("To learn more about MailerSend, including how to use hosted templates, consult the "),a("a",q,[e("MailerSend driver documentation"),t(n)]),e(".")]),$,a("p",null,[e("If your application is using the Mailgun driver, you may consult Mailgun's documentation for more information on "),a("a",C,[e("tags"),t(n)]),e(" and "),a("a",E,[e("metadata"),t(n)]),e(". Likewise, the Postmark documentation may also be consulted for more information on their support for "),a("a",O,[e("tags"),t(n)]),e(" and "),a("a",L,[e("metadata"),t(n)]),e(".")]),a("p",null,[e("If your application is using Amazon SES to send emails, you should use the "),P,e(" method to attach "),a("a",D,[e('SES "tags"'),t(n)]),e(" to the message.")]),H,a("p",null,[e("Alternatively, you may use a service like "),a("a",z,[e("HELO"),t(n)]),e(" or "),a("a",N,[e("Mailtrap"),t(n)]),e(" and the "),F,e(` driver to send your email messages to a "dummy" mailbox where you may view them in a true email client. This approach has the benefit of allowing you to actually inspect the final emails in Mailtrap's message viewer.`)]),a("p",null,[e("If you are using "),R,e(", you may preview your messages using "),a("a",j,[e("Mailpit"),t(n)]),e(". When Sail is running, you may access the Mailpit interface at: "),W,e(".")]),G])}const K=o(d,[["render",Q],["__file","mail.html.vue"]]);export{K as default};
