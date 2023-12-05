import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as d,c as s,b as a,d as e,e as t,a as r}from"./app-8cdff07c.js";const l={},c=r('<h1 id="邮件" tabindex="-1"><a class="header-anchor" href="#邮件" aria-hidden="true">#</a> 邮件</h1><ul><li><a href="#introduction">介绍</a><ul><li><a href="#configuration">配置</a></li><li><a href="#driver-prerequisites">驱动前提</a></li><li><a href="#failover-configuration">故障转移配置</a></li></ul></li><li><a href="#generating-mailables">生成 Mailables</a></li><li><a href="#writing-mailables">编写 Mailables</a><ul><li><a href="#configuring-the-sender">配置发送者</a></li><li><a href="#configuring-the-view">配置视图</a></li><li><a href="#view-data">视图数据</a></li><li><a href="#attachments">附件</a></li><li><a href="#inline-attachments">内部附件</a></li><li><a href="#attachable-objects">可附着对象</a></li><li><a href="#headers">标头</a></li><li><a href="#tags-and-metadata">标记和元数据</a></li><li><a href="#customizing-the-symfony-message">自定义 Symfony 消息</a></li></ul></li><li><a href="#markdown-mailables">Markdown 格式邮件</a><ul><li><a href="#generating-markdown-mailables">生成 Markdown 格式邮件</a></li><li><a href="#writing-markdown-messages">生成 Markdown 格式邮件</a></li><li><a href="#customizing-the-components">自定义组件</a></li></ul></li><li><a href="#sending-mail">发送邮件</a><ul><li><a href="#queueing-mail">邮件队列</a></li></ul></li><li><a href="#rendering-mailables">渲染邮件</a><ul><li><a href="#previewing-mailables-in-the-browser">浏览器中预览邮件</a></li></ul></li><li><a href="#localizing-mailables">邮件本土化</a></li><li><a href="#testing-mailables">测试邮件</a><ul><li><a href="#testing-mailable-content">测试邮件内容</a></li><li><a href="#testing-mailable-sending">测试邮件发送</a></li></ul></li><li><a href="#mail-and-local-development">邮件和本地开发</a></li><li><a href="#events">事件</a></li><li><a href="#custom-transports">自定义传输方式</a><ul><li><a href="#additional-symfony-transports">附 - Symfony 传输方式</a></li></ul></li></ul><p><a name="introduction"></a></p><h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2>',4),p={href:"https://symfony.com/doc/6.0/mailer.html",target:"_blank",rel:"noopener noreferrer"},m=r(`<p><a name="configuration"></a></p><h3 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h3><p>Laravel 的邮件服务可以通过 <code>config/mail.php</code> 配置文件进行配置。邮件中的每一项都在配置文件中有单独的配置项，甚至是独有的「传输方式」，允许你的应用使用不同的邮件服务发送邮件。例如，你的应用程序在使用 Amazon SES 发送批量邮件时，也可以使用 Postmark 发送事务性邮件。</p><p>在你的 <code>mail</code> 配置文件中，你将找到 <code>mailers</code> 配置数组。该数组包含 Laravel 支持的每个邮件 驱动程序 / 传输方式 配置，而 <code>default</code> 配置值确定当你的应用程序需要发送电子邮件时，默认情况下将使用哪个邮件驱动。</p><p><a name="driver-prerequisites"></a></p><h3 id="驱动-传输的前提" tabindex="-1"><a class="header-anchor" href="#驱动-传输的前提" aria-hidden="true">#</a> 驱动 / 传输的前提</h3><p>基于 API 的驱动，如 Mailgun 和 Postmark ，通常比 SMTP 服务器更简单快速。如果可以的话， 我们建议你使用下面这些驱动。</p><p><a name="mailgun-driver"></a></p><h4 id="mailgun-驱动" tabindex="-1"><a class="header-anchor" href="#mailgun-驱动" aria-hidden="true">#</a> Mailgun 驱动</h4><p>要使用 Mailgun 驱动，可以先通过 <code>composer</code> 来安装 <code>Mailgun</code> 函数库 ：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">composer</span> require symfony/mailgun-mailer symfony/http-client
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>接着，在应用的 <code>config/mail.php</code> 配置文件中，将默认项设置成 <code>mailgun</code>。配置好之后，确认 <code>config/services.php</code> 配置文件中包含以下选项：</p><pre><code>&#39;mailgun&#39; =&gt; [
    &#39;domain&#39; =&gt; env(&#39;MAILGUN_DOMAIN&#39;),
    &#39;secret&#39; =&gt; env(&#39;MAILGUN_SECRET&#39;),
],
</code></pre>`,13),h={href:"https://documentation.mailgun.com/en/latest/api-intro.html#mailgun-regions",target:"_blank",rel:"noopener noreferrer"},u=a("code",null,"service",-1),g=r(`<pre><code>&#39;mailgun&#39; =&gt; [
    &#39;domain&#39; =&gt; env(&#39;MAILGUN_DOMAIN&#39;),
    &#39;secret&#39; =&gt; env(&#39;MAILGUN_SECRET&#39;),
    &#39;endpoint&#39; =&gt; env(&#39;MAILGUN_ENDPOINT&#39;, &#39;api.eu.mailgun.net&#39;),
],
</code></pre><p><a name="postmark-driver"></a></p><h4 id="postmark-驱动" tabindex="-1"><a class="header-anchor" href="#postmark-驱动" aria-hidden="true">#</a> Postmark 驱动</h4><p>要使用 <code>Postmark</code> 驱动，先通过 <code>composer</code> 来安装 <code>Postmark</code> 函数库：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">composer</span> require symfony/postmark-mailer symfony/http-client
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>接着，在应用的 <code>config/mail.php</code> 配置文件中，将默认项设置成 <code>postmark</code>。配置好之后，确认 <code>config/services.php</code> 配置文件中包含如下选项：</p><pre><code>&#39;postmark&#39; =&gt; [
    &#39;token&#39; =&gt; env(&#39;POSTMARK_TOKEN&#39;),
],
</code></pre><p>如果你要给指定邮件程序使用的 Postmark message stream，可以在配置数组中添加 <code>message_stream_id</code> 配置选项。这个配置数组在应用程序的 config/mail.php 配置文件中：</p><pre><code>&#39;postmark&#39; =&gt; [
    &#39;transport&#39; =&gt; &#39;postmark&#39;,
    &#39;message_stream_id&#39; =&gt; env(&#39;POSTMARK_MESSAGE_STREAM_ID&#39;),
],
</code></pre><p>这样，你还可以使用不同的 <code>message stream</code> 来设置多个 <code>Postmark 邮件驱动</code>。</p><p><a name="ses-driver"></a></p><h4 id="ses-驱动" tabindex="-1"><a class="header-anchor" href="#ses-驱动" aria-hidden="true">#</a> SES 驱动</h4><p>要使用 <code>Amazon SES</code> 驱动，你必须先安装 <code>PHP</code> 的 <code>Amazon AWS SDK</code> 。你可以可以通过 Composer 软件包管理器安装此库：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">composer</span> require aws/aws-sdk-php
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后，将 <code>config/mail.php</code> 配置文件的 <code>default</code> 选项设置成 <code>ses</code> 并确认你的 <code>config/services.php</code> 配置文件包含以下选项：</p><pre><code>&#39;ses&#39; =&gt; [
    &#39;key&#39; =&gt; env(&#39;AWS_ACCESS_KEY_ID&#39;),
    &#39;secret&#39; =&gt; env(&#39;AWS_SECRET_ACCESS_KEY&#39;),
    &#39;region&#39; =&gt; env(&#39;AWS_DEFAULT_REGION&#39;, &#39;us-east-1&#39;),
],
</code></pre>`,16),b={href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_use-resources.html",target:"_blank",rel:"noopener noreferrer"},f=a("code",null,"token",-1),v=a("pre",null,[a("code",null,`'ses' => [
    'key' => env('AWS_ACCESS_KEY_ID'),
    'secret' => env('AWS_SECRET_ACCESS_KEY'),
    'region' => env('AWS_DEFAULT_REGION', 'us-east-1'),
    'token' => env('AWS_SESSION_TOKEN'),
],
`)],-1),M={href:"https://docs.aws.amazon.com/aws-sdk-php/v3/api/api-sesv2-2019-09-27.html#sendemail",target:"_blank",rel:"noopener noreferrer"},S=a("code",null,"SendEmail",-1),_=a("code",null,"ses",-1),k=a("code",null,"options",-1),x=r(`<pre><code>&#39;ses&#39; =&gt; [
    &#39;key&#39; =&gt; env(&#39;AWS_ACCESS_KEY_ID&#39;),
    &#39;secret&#39; =&gt; env(&#39;AWS_SECRET_ACCESS_KEY&#39;),
    &#39;region&#39; =&gt; env(&#39;AWS_DEFAULT_REGION&#39;, &#39;us-east-1&#39;),
    &#39;options&#39; =&gt; [
        &#39;ConfigurationSetName&#39; =&gt; &#39;MyConfigurationSet&#39;,
        &#39;EmailTags&#39; =&gt; [
            [&#39;Name&#39; =&gt; &#39;foo&#39;, &#39;Value&#39; =&gt; &#39;bar&#39;],
        ],
    ],
],
</code></pre><p><a name="failover-configuration"></a></p><h3 id="备用配置" tabindex="-1"><a class="header-anchor" href="#备用配置" aria-hidden="true">#</a> 备用配置</h3><p>有时，已经配置好用于发送应用程序邮件的外部服务可能已关闭。在这种情况下，定义一个或多个备份邮件传递配置非常有用，这些配置将在主传递驱动程序关闭时使用。 为此，应该在应用程序的 <code>mail</code> 配置文件中定义一个使用 <code>failover</code> 传输的邮件程序。应用程序的 <code>failover</code> 邮件程序的配置数组应包含一个 <code>mailers</code> 数组，该数组引用选择邮件驱动程序进行传递的顺序：</p><pre><code>&#39;mailers&#39; =&gt; [
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
</code></pre><p>定义故障转移邮件程序后，应将此邮件程序设置为应用程序使用的<code>默认</code>邮件程序，方法是将其名称指定为应用程序 <code>mail</code> 配置文件中 <code>default</code> 配置密钥的值：</p><pre><code>&#39;default&#39; =&gt; env(&#39;MAIL_MAILER&#39;, &#39;failover&#39;),
</code></pre><p><a name="generating-mailables"></a></p><h2 id="生成-mailables" tabindex="-1"><a class="header-anchor" href="#生成-mailables" aria-hidden="true">#</a> 生成 Mailables</h2><p>在构建 Laravel 应用程序时，应用程序发送的每种类型的电子邮件都表示为一个 <code>mailable</code> 类。这些类存储在 app/Mail 目录中。 如果你在应用程序中看不到此目录，请不要担心，因为它会在你使用 make:mail Artisan 命令创建第一个邮件类时自然生成：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan make:mail OrderShipped
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="writing-mailables"></a></p><h2 id="编写-mailables" tabindex="-1"><a class="header-anchor" href="#编写-mailables" aria-hidden="true">#</a> 编写 Mailables</h2><p>一旦生成了一个邮件类，就打开它，这样我们就可以探索它的内容。邮件类的配置可以通过几种方法完成，包括 <code>envelope</code>、<code>content</code> 和 <code>attachments</code> 方法。</p><p><code>envelope</code> 方法返回 <code>Illuminate\\Mail\\Mailables\\Envelope</code> 对象，该对象定义邮件的主题，有时还定义邮件的收件人。<code>content</code> 方法返回 <code>Illuminate\\Mail\\Mailables\\Content</code> 对象，该对象定义将用于生成消息内容的<a href="./blade">Blade模板</a>。</p><p><a name="configuring-the-sender"></a></p><h3 id="配置发件人" tabindex="-1"><a class="header-anchor" href="#配置发件人" aria-hidden="true">#</a> 配置发件人</h3><p><a name="using-the-envelope"></a></p><h4 id="使用-envelope" tabindex="-1"><a class="header-anchor" href="#使用-envelope" aria-hidden="true">#</a> 使用 Envelope</h4><p>首先，让我们来看下如何配置电子邮件的发件人。电子邮件的「发件人」。有两种方法可以配置发送者。首先，你可以在邮件信封上指定「发件人」地址：</p><pre><code>use Illuminate\\Mail\\Mailables\\Address;
use Illuminate\\Mail\\Mailables\\Envelope;

/**
 * 获取邮件信封。
 */
public function envelope(): Envelope
{
    return new Envelope(
        from: new Address(&#39;jeffrey@example.com&#39;, &#39;Jeffrey Way&#39;),
        subject: &#39;订单发货&#39;,
    );
}
</code></pre><p>除此之外，还可以指定 <code>replyTo</code> 地址：</p><pre><code>return new Envelope(
    from: new Address(&#39;jeffrey@example.com&#39;, &#39;Jeffrey Way&#39;),
    replyTo: [
        new Address(&#39;taylor@example.com&#39;, &#39;Taylor Otwell&#39;),
    ],
    subject: &#39;订单发货&#39;,
);
</code></pre><p><a name="using-a-global-from-address"></a></p><h4 id="使用全局-from-地址" tabindex="-1"><a class="header-anchor" href="#使用全局-from-地址" aria-hidden="true">#</a> 使用全局 <code>from</code> 地址</h4><p>当然，如果你的应用在任何邮件中使用的「发件人」地址都一致的话，在你生成的每一个 mailable 类中调用 <code>from</code> 方法可能会很麻烦。因此，你可以在 <code>config/mail.php</code> 文件中指定一个全局的「发件人」地址。当某个 mailable 类没有指定「发件人」时，它将使用该全局「发件人」：</p><pre><code>&#39;from&#39; =&gt; [&#39;address&#39; =&gt; &#39;example@example.com&#39;, &#39;name&#39; =&gt; &#39;App Name&#39;],
</code></pre><p>此外，你可以在 <code>config/mail.php</code> 配置文件中定义全局 「reply_to」 地址：</p><pre><code>&#39;reply_to&#39; =&gt; [&#39;address&#39; =&gt; &#39;example@example.com&#39;, &#39;name&#39; =&gt; &#39;App Name&#39;],
</code></pre><p><a name="configuring-the-view"></a></p><h3 id="配置视图" tabindex="-1"><a class="header-anchor" href="#配置视图" aria-hidden="true">#</a> 配置视图</h3><p>在邮件类下的 <code>content</code> 方法中使用 <code>view</code> 方法来指定在渲染邮件内容时要使用的模板。由于每封电子邮件通常使用一个 <a href="./blade">Blade 模板</a> 来渲染其内容。因此在构建电子邮件的 HTML 时，可以充分利用 Blade 模板引擎的功能和便利性：</p><pre><code>/**
 * 获取消息内容定义。
 */
public function content(): Content
{
    return new Content(
        view: &#39;emails.orders.shipped&#39;,
    );
}
</code></pre><blockquote><p><strong>技巧</strong> 你可以创建一个 <code>resources/views/emails</code> 目录来存放所有的邮件模板；当然，也可以将其置于 <code>resources/views</code> 目录下的任何位置。</p></blockquote><p><a name="plain-text-emails"></a></p><h4 id="纯文本邮件" tabindex="-1"><a class="header-anchor" href="#纯文本邮件" aria-hidden="true">#</a> 纯文本邮件</h4><p>如果要定义电子邮件的纯文本版本，可以在创建邮件的 <code>Content</code> 定义时指定纯文本模板。与 <code>view</code> 参数一样， <code>text</code> 参数是用于呈现电子邮件内容的模板名称。这样你就可以自由定义邮件的 Html 和纯文本版本：</p><pre><code>/**
 * 获取消息内容定义。
 */
public function content(): Content
{
    return new Content(
        view: &#39;emails.orders.shipped&#39;,
        text: &#39;emails.orders.shipped-text&#39;
    );
}
</code></pre><p>为了清晰，<code>html</code> 参数可以用作 <code>view</code> 参数的别名：</p><pre><code>return new Content(
    html: &#39;emails.orders.shipped&#39;,
    text: &#39;emails.orders.shipped-text&#39;
);
</code></pre><p><a name="view-data"></a></p><h3 id="视图数" tabindex="-1"><a class="header-anchor" href="#视图数" aria-hidden="true">#</a> 视图数</h3><p><a name="via-public-properties"></a></p><h4 id="通过-public-属性" tabindex="-1"><a class="header-anchor" href="#通过-public-属性" aria-hidden="true">#</a> 通过 Public 属性</h4><p>通常，你需要将一些数据传递给视图，以便在呈现电子邮件的 HTML 时使用。有两种方法可以使数据对视图可用。首先，在 mailable 类上定义的任何公共属性都将自动对视图可用。例如，可以将数据传递到可邮寄类的构造函数中，并将该数据设置为类上定义的公共方法：</p><pre><code>&lt;?php

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
     * 创建新的消息实例。
     */
    public function __construct(
        public Order $order,
    ) {}

    /**
     * 获取消息内容定义。
     */
    public function content(): Content
    {
        return new Content(
            view: &#39;emails.orders.shipped&#39;,
        );
    }
}
</code></pre><p>一旦数据设置为公共属性，它将自动在视图中可用，因此可以像访问 Blade 模板中的任何其他数据一样访问它：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
        Price<span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token variable">$order</span><span class="token operator">-&gt;</span><span class="token property">price</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="via-the-with-parameter"></a></p><h4 id="通过-with-参数" tabindex="-1"><a class="header-anchor" href="#通过-with-参数" aria-hidden="true">#</a> 通过 <code>with</code> 参数：</h4><p>如果你想要在邮件数据发送到模板前自定义它们的格式，你可以使用 <code>with</code> 方法来手动传递数据到视图中。一般情况下，你还是需要通过 mailable 类的构造函数来传递数据；不过，你应该将它们定义为 <code>protected</code> 或 <code>private</code> 以防止它们被自动传递到视图中。然后，在调用 <code>with</code> 方法的时候，可以以数组的形式传递你想要传递给模板的数据：</p><pre><code>&lt;?php

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
     * 创建新的消息实例。
     */
    public function __construct(
        protected Order $order,
    ) {}

    /**
     * 获取消息内容定义。
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
</code></pre><p>一旦数据被传递到 <code>with</code> 方法，同样的它将自动在视图中可用，因此可以像访问 Blade 模板中的任何其他数据一样访问它：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
        Price<span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token variable">$orderPrice</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="attachments"></a></p><h3 id="附件" tabindex="-1"><a class="header-anchor" href="#附件" aria-hidden="true">#</a> 附件</h3><p>要向电子邮件添加附件，你将向邮件的 <code>attachments</code> 方法返回的数组添加附件。首先，可以通过向 <code>Attachment</code> 类提供的 <code>fromPath</code> 方法提供文件路径来添加附件：</p><pre><code>use Illuminate\\Mail\\Mailables\\Attachment;

/**
 * 获取邮件的附件。
 *
 * @return array&lt;int, \\Illuminate\\Mail\\Mailables\\Attachment&gt;
 */
public function attachments(): array
{
    return [
        Attachment::fromPath(&#39;/path/to/file&#39;),
    ];
}
</code></pre><p>将文件附加到邮件时，还可以使用 <code>as</code> 和 <code>withMime</code> 方法来指定附件的显示名称 / 或 MIME 类型：</p><pre><code>/**
 * 获取邮件的附件。
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
</code></pre><p><a name="attaching-files-from-disk"></a></p><h4 id="从磁盘中添加附件" tabindex="-1"><a class="header-anchor" href="#从磁盘中添加附件" aria-hidden="true">#</a> 从磁盘中添加附件</h4><p>如果你已经在 <a href="./filesystem">文件存储</a> 上存储了一个文件，则可以使用 <code>attachFromStorage</code> 方法将其附加到邮件中：</p><pre><code>/**
 * 获取邮件的附件。
 *
 * @return array&lt;int, \\Illuminate\\Mail\\Mailables\\Attachment&gt;
 */
public function attachments(): array
{
    return [
        Attachment::fromStorage(&#39;/path/to/file&#39;),
    ];
}
</code></pre><p>当然，也可以指定附件的名称和 MIME 类型：</p><pre><code>/**
 * 获取邮件的附件。
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
</code></pre><p>如果需要指定默认磁盘以外的存储磁盘，可以使用 <code>attachFromStorageDisk</code> 方法：</p><pre><code>/**
 * 获取邮件的附件。
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
</code></pre><p><a name="raw-data-attachments"></a></p><h4 id="原始数据附件" tabindex="-1"><a class="header-anchor" href="#原始数据附件" aria-hidden="true">#</a> 原始数据附件</h4><p><code>fromData</code> 附件方法可用于附加原始字节字符串作为附件。例如，如果你在内存中生成了PDF，并且希望将其附加到电子邮件而不将其写入磁盘，可以使用到此方法。 <code>fromData</code> 方法接受一个闭包，该闭包解析原始数据字节以及应分配给附件的名称：</p><pre><code>/**
 * 获取邮件的附件。
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
</code></pre><p><a name="inline-attachments"></a></p><h3 id="内联附件" tabindex="-1"><a class="header-anchor" href="#内联附件" aria-hidden="true">#</a> 内联附件</h3><p>在邮件中嵌入内联图片通常很麻烦；不过，Laravel 提供了一种将图像附加到邮件的便捷方法。可以使用邮件模板中 $message 变量的 embed 方法来嵌入内联图片。Laravel 自动使 $message 变量在全部邮件模板中可用，不需要担心手动传递它：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;body&gt;
    这是一张图片：

    &lt;img src=&quot;{{ $message-&gt;embed($pathToImage) }}&quot;&gt;
&lt;/body&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>注意</strong> 该 <code>$message</code> 在文本消息中不可用，因为文本消息不能使用内联附件。</p></blockquote><p><a name="embedding-raw-data-attachments"></a></p><h4 id="嵌入原始数据附件" tabindex="-1"><a class="header-anchor" href="#嵌入原始数据附件" aria-hidden="true">#</a> 嵌入原始数据附件</h4><p>如果你已经有了可以嵌入邮件模板的原始图像数据字符串，可以使用 <code>$message</code> 变量的 <code>embedData</code> 方法，当调用 <code>embedData</code> 方法时，需要传递一个文件名：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;body&gt;
    以下是原始数据的图像：

    &lt;img src=&quot;{{ $message-&gt;embedData($data, &#39;example-image.jpg&#39;) }}&quot;&gt;
&lt;/body&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="attachable-objects"></a></p><h3 id="可附着对象" tabindex="-1"><a class="header-anchor" href="#可附着对象" aria-hidden="true">#</a> 可附着对象</h3><p>虽然通过简单的字符串路径将文件附加到消息通常就足够了，但在多数情况下，应用程序中的可附加实体由类表示。例如，如果你的应用程序正在将照片附加到消息中，那么在应用中可能还具有表示该照片的 <code>Photo</code> 模型。在这种情况下，简单地将 <code>Photo</code> 模型传递给 <code>attach</code> 方法会很方便。</p><p>开始时，在可附加到邮件的对象上实现 <code>Illuminate\\Contracts\\Mail\\Attachable</code> 接口。此接口要求类定义一个 <code>toMailAttachment</code> 方法，该方法返回一个 <code>Illuminate\\Mail\\Attachment</code> 实例：</p><pre><code>&lt;?php

namespace App\\Models;

use Illuminate\\Contracts\\Mail\\Attachable;
use Illuminate\\Database\\Eloquent\\Model;
use Illuminate\\Mail\\Attachment;

class Photo extends Model implements Attachable
{
    /**
     * 获取模型的可附加表示。
     */
    public function toMailAttachment(): Attachment
    {
        return Attachment::fromPath(&#39;/path/to/file&#39;);
    }
}
</code></pre><p>一旦定义了可附加对象，就可以在生成电子邮件时从 <code>attachments</code> 方法返回该对象的实例：</p><pre><code>/**
 * 获取邮件的附件。
 *
 * @return array&lt;int, \\Illuminate\\Mail\\Mailables\\Attachment&gt;
 */
public function attachments(): array
{
    return [$this-&gt;photo];
}
</code></pre><p>当然，附件数据可以存储在远程文件存储服务（例如 Amazon S3）上。因此，Laravel 还允许你从存储在应用程序 <a href="./filesystem">文件系统磁盘</a> 上的数据生成附件实例：</p><pre><code>// 从默认磁盘上的文件创建附件。。。
return Attachment::fromStorage($this-&gt;path);

// 从特定磁盘上的文件创建附件。。。
return Attachment::fromStorageDisk(&#39;backblaze&#39;, $this-&gt;path);
</code></pre><p>此外，还可以通过内存中的数据创建附件实例。为此还提供了 <code>fromData</code> 方法的闭包。但闭包应返回表示附件的原始数据：</p><pre><code>return Attachment::fromData(fn () =&gt; $this-&gt;content, &#39;Photo Name&#39;);
</code></pre><p>Laravel 还提供了其他方法，你可以使用这些方法自定义附件。例如，可以使用 <code>as</code> 和 <code>withMime</code> 方法自定义文件名和 MIME 类型：</p><pre><code>return Attachment::fromPath(&#39;/path/to/file&#39;)
        -&gt;as(&#39;Photo Name&#39;)
        -&gt;withMime(&#39;image/jpeg&#39;);
</code></pre><p><a name="headers"></a></p><h3 id="标头" tabindex="-1"><a class="header-anchor" href="#标头" aria-hidden="true">#</a> 标头</h3><p>有时，你可能需要在传出消息中附加附加的标头。例如，你可能需要设置自定义 <code>Message-Id</code> 或其他任意文本标题。</p><p>如果要实现这一点，请在邮件中定义 <code>headers</code> 方法。 <code>headers</code> 方法应返回 <code>Illuminate\\Mail\\Mailables\\Headers</code> 实例。此类接受 <code>messageId</code> 、 <code>references</code> 和 <code>text</code> 参数。当然，你可以只提供特定消息所需的参数：</p><pre><code>use Illuminate\\Mail\\Mailables\\Headers;

/**
 * 获取邮件标题。
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
</code></pre><p><a name="tags-and-metadata"></a></p><h3 id="标记-和-元数据" tabindex="-1"><a class="header-anchor" href="#标记-和-元数据" aria-hidden="true">#</a> 标记 和 元数据</h3><p>一些第三方电子邮件提供商（如 Mailgun 和 Postmark ）支持消息「标签」和 「元数据」，可用于对应用程序发送的电子邮件进行分组和跟踪。你可以通过 <code>Envelope</code> 来定义向电子邮件添加标签和元数据：</p><pre><code>use Illuminate\\Mail\\Mailables\\Envelope;

/**
 * 获取邮件信封。
 *
 * @return \\Illuminate\\Mail\\Mailables\\Envelope
 */
public function envelope(): Envelope
{
    return new Envelope(
        subject: &#39;订单发货&#39;,
        tags: [&#39;shipment&#39;],
        metadata: [
            &#39;order_id&#39; =&gt; $this-&gt;order-&gt;id,
        ],
    );
}
</code></pre>`,103),y={href:"https://documentation.mailgun.com/en/latest/user_manual.html#tagging-1",target:"_blank",rel:"noopener noreferrer"},$={href:"https://documentation.mailgun.com/en/latest/user_manual.html#attaching-data-to-messages",target:"_blank",rel:"noopener noreferrer"},A={href:"https://postmarkapp.com/blog/tags-support-for-smtp",target:"_blank",rel:"noopener noreferrer"},w={href:"https://postmarkapp.com/support/article/1125-custom-metadata-faq",target:"_blank",rel:"noopener noreferrer"},I=a("code",null,"metadata",-1),C={href:"https://docs.aws.amazon.com/ses/latest/APIReference/API_MessageTag.html",target:"_blank",rel:"noopener noreferrer"},E=r(`<p><a name="customizing-the-symfony-message"></a></p><h3 id="自定义-symfony-消息" tabindex="-1"><a class="header-anchor" href="#自定义-symfony-消息" aria-hidden="true">#</a> 自定义 Symfony 消息</h3><p>Laravel 的邮件功能是由 Symfony Mailer 提供的。Laravel 在你发送消息之前是由 Symfony Message 注册然后再去调用自定义实例。这让你有机会在发送邮件之前对其进行深度定制。为此，请在 <code>Envelope</code> 定义上定义 <code>using</code> 参数：</p><pre><code>use Illuminate\\Mail\\Mailables\\Envelope;
use Symfony\\Component\\Mime\\Email;

/**
 * 获取邮件信封。
 */
public function envelope(): Envelope
{
    return new Envelope(
        subject: &#39;订单发货&#39;,
        using: [
            function (Email $message) {
                // ...
            },
        ]
    );
}
</code></pre><p><a name="markdown-mailables"></a></p><h2 id="markdown-格式邮件" tabindex="-1"><a class="header-anchor" href="#markdown-格式邮件" aria-hidden="true">#</a> Markdown 格式邮件</h2><p>Markdown 格式邮件允许你可以使用 mailable 中的预构建模板和 <a href="./notifications#mail-notifications">邮件通知</a> 组件。由于消息是用 Markdown 编写，Laravel 能够渲染出美观的、响应式的 HTML 模板消息，同时还能自动生成纯文本副本。</p><p><a name="generating-markdown-mailables"></a></p><h3 id="生成-markdown-邮件" tabindex="-1"><a class="header-anchor" href="#生成-markdown-邮件" aria-hidden="true">#</a> 生成 Markdown 邮件</h3><p>你可以在执行 <code>make:mail</code> 的 Artisan 命令时使用 <code>--markdown</code> 选项来生成一个 Markdown 格式模板的 mailable 类：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan make:mail OrderShipped <span class="token parameter variable">--markdown</span><span class="token operator">=</span>emails.orders.shipped
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后，在 <code>Content</code> 方法中配置邮寄的 <code>content</code> 定义时，使用 <code>markdown</code> 参数而不是 <code>view</code> 参数：</p><pre><code>use Illuminate\\Mail\\Mailables\\Content;

/**
 * 获取消息内容定义。
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
</code></pre><p><a name="writing-markdown-messages"></a></p><h3 id="编写-markdown-邮件" tabindex="-1"><a class="header-anchor" href="#编写-markdown-邮件" aria-hidden="true">#</a> 编写 Markdown 邮件</h3><p>Markdown mailable 类整合了 Markdown 语法和 Blade 组件，让你能够非常方便的使用 Laravel 预置的 UI 组件来构建邮件消息：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;x-mail::message&gt;
# 订单发货

你的订单已发货！

&lt;x-mail::button :url=&quot;$url&quot;&gt;
查看订单
&lt;/x-mail::button&gt;

谢谢,&lt;br&gt;
{{ config(&#39;app.name&#39;) }}
&lt;/x-mail::message&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>技巧</strong> 在编写 Markdown 邮件的时候，请勿使用额外的缩进。Markdown 解析器会把缩进渲染成代码块。</p></blockquote><p><a name="button-component"></a></p><h4 id="按钮组件" tabindex="-1"><a class="header-anchor" href="#按钮组件" aria-hidden="true">#</a> 按钮组件</h4><p>按钮组件用于渲染居中的按钮链接。该组件接收两个参数，一个是 <code>url</code> 一个是可选的 <code>color</code>。 支持的颜色包括 <code>primary</code> ，<code>success</code> 和 <code>error</code>。你可以在邮件中添加任意数量的按钮组件：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;x-mail::button :url=&quot;$url&quot; color=&quot;success&quot;&gt;
查看订单
&lt;/x-mail::button&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="panel-component"></a></p><h4 id="面板组件" tabindex="-1"><a class="header-anchor" href="#面板组件" aria-hidden="true">#</a> 面板组件</h4><p>面板组件在面板内渲染指定的文本块，面板与其他消息的背景色略有不同。它允许你绘制一个警示文本块：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;x-mail::panel&gt;
这是面板内容
&lt;/x-mail::panel&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="table-component"></a></p><h4 id="表格组件" tabindex="-1"><a class="header-anchor" href="#表格组件" aria-hidden="true">#</a> 表格组件</h4><p>表格组件允许你将 Markdown 表格转换成 HTML 表格。该组件接受 Markdown 表格作为其内容。列对齐支持默认的 Markdown 表格对齐语法：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;x-mail::table&gt;
| Laravel       | Table         | Example  |
| ------------- |:-------------:| --------:|
| Col 2 is      | Centered      | $10      |
| Col 3 is      | Right-Aligned | $20      |
&lt;/x-mail::table&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="customizing-the-components"></a></p><h3 id="自定义组件" tabindex="-1"><a class="header-anchor" href="#自定义组件" aria-hidden="true">#</a> 自定义组件</h3><p>你可以将所有 Markdown 邮件组件导出到自己的应用，用作自定义组件的模板。若要导出组件，使用 <code>laravel-mail</code> 资产标签的 <code>vendor:publish</code> Artisan 命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan vendor:publish <span class="token parameter variable">--tag</span><span class="token operator">=</span>laravel-mail
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>此命令会将 Markdown 邮件组件导出到 <code>resources/views/vendor/mail</code> 目录。 该 <code>mail</code> 目录包含 <code>html</code> 和 <code>text</code> 子目录，分别包含各自对应的可用组件描述。你可以按照自己的意愿自定义这些组件。</p><p><a name="customizing-the-css"></a></p><h4 id="自定义-css" tabindex="-1"><a class="header-anchor" href="#自定义-css" aria-hidden="true">#</a> 自定义 CSS</h4><p>组件导出后，<code>resources/views/vendor/mail/html/themes</code> 目录有一个 <code>default.css</code> 文件。可以在此文件中自定义 CSS，这些样式将自动内联到 Markdown 邮件消息的 HTML 表示中。</p><p>如果想为 Laravel 的 Markdown 组件构建一个全新的主题，你可以在 <code>html/themes</code> 目录中新建一个 CSS 文件。命名并保存 CSS 文件后，并更新应用程序 <code>config/mail.php</code> 配置文件的 <code>theme</code> 选项以匹配新主题的名称。</p><p>要想自定义单个邮件主题，可以将 mailable 类的 <code>$theme</code> 属性设置为发送 mailable 时应使用的主题名称。</p><p><a name="sending-mail"></a></p><h2 id="发送邮件" tabindex="-1"><a class="header-anchor" href="#发送邮件" aria-hidden="true">#</a> 发送邮件</h2><p>若要发送邮件，使用 <code>Mail</code> <a href="./facades">facade</a> 的方法。该 <code>to</code> 方法接受 邮件地址、用户实例或用户集合。如果传递一个对象或者对象集合，mailer 在设置收件人时将自动使用它们的 <code>email</code> 和 <code>name</code> 属性，因此请确保对象的这些属性可用。一旦指定了收件人，就可以将 mailable 类实例传递给 <code>send</code> 方法：</p><pre><code>&lt;?php

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
     * 发送给定的订单信息。
     */
    public function store(Request $request): RedirectResponse
    {
        $order = Order::findOrFail($request-&gt;order_id);

        // 发货订单。。。

        Mail::to($request-&gt;user())-&gt;send(new OrderShipped($order));

        return redirect(&#39;/orders&#39;);
    }
}
</code></pre><p>在发送消息时不止可以指定收件人。还可以通过链式调用「to」、「cc」、「bcc」一次性指定抄送和密送收件人：</p><pre><code>Mail::to($request-&gt;user())
    -&gt;cc($moreUsers)
    -&gt;bcc($evenMoreUsers)
    -&gt;send(new OrderShipped($order));
</code></pre><p><a name="looping-over-recipients"></a></p><h4 id="遍历收件人列表" tabindex="-1"><a class="header-anchor" href="#遍历收件人列表" aria-hidden="true">#</a> 遍历收件人列表</h4><p>有时，你需要通过遍历一个收件人 / 邮件地址数组的方式，给一系列收件人发送邮件。但是，由于 <code>to</code> 方法会给 mailable 列表中的收件人追加邮件地址，因此，你应该为每个收件人重建 mailable 实例。</p><pre><code>foreach ([&#39;taylor@example.com&#39;, &#39;dries@example.com&#39;] as $recipient) {
    Mail::to($recipient)-&gt;send(new OrderShipped($order));
}
</code></pre><p><a name="sending-mail-via-a-specific-mailer"></a></p><h4 id="通过特定的-mailer-发送邮件" tabindex="-1"><a class="header-anchor" href="#通过特定的-mailer-发送邮件" aria-hidden="true">#</a> 通过特定的 Mailer 发送邮件</h4><p>默认情况下，Laravel 将使用 <code>mail</code> 你的配置文件中配置为 <code>default</code> 邮件程序。 但是，你可以使用 <code>mailer</code> 方法通过特定的邮件程序配置发送：</p><pre><code>Mail::mailer(&#39;postmark&#39;)
        -&gt;to($request-&gt;user())
        -&gt;send(new OrderShipped($order));
</code></pre><p><a name="queueing-mail"></a></p><h3 id="邮件队列" tabindex="-1"><a class="header-anchor" href="#邮件队列" aria-hidden="true">#</a> 邮件队列</h3><p><a name="queueing-a-mail-message"></a></p><h4 id="将邮件消息加入队列" tabindex="-1"><a class="header-anchor" href="#将邮件消息加入队列" aria-hidden="true">#</a> 将邮件消息加入队列</h4><p>由于发送邮件消息可能大幅度延长应用的响应时间，许多开发者选择将邮件消息加入队列放在后台发送。Laravel 使用内置的 <a href="./queues">统一队列 API</a> 简化了这一工作。若要将邮件消息加入队列，可以在指定消息的接收者后，使用 <code>Mail</code> 门面的 <code>queue</code> 方法：</p><pre><code>Mail::to($request-&gt;user())
    -&gt;cc($moreUsers)
    -&gt;bcc($evenMoreUsers)
    -&gt;queue(new OrderShipped($order));
</code></pre><p>此方法自动将作业推送到队列中以便消息在后台发送。使用此特性之前，需要 <a href="./queues">配置队列</a> 。</p><p><a name="delayed-message-queueing"></a></p><h4 id="延迟消息队列" tabindex="-1"><a class="header-anchor" href="#延迟消息队列" aria-hidden="true">#</a> 延迟消息队列</h4><p>想要延迟发送队列化的邮件消息，可以使用 <code>later</code> 方法。该 <code>later</code> 方法的第一个参数的第一个参数是标示消息何时发送的 <code>DateTime</code> 实例：</p><pre><code>Mail::to($request-&gt;user())
    -&gt;cc($moreUsers)
    -&gt;bcc($evenMoreUsers)
    -&gt;later(now()-&gt;addMinutes(10), new OrderShipped($order));
</code></pre><p><a name="pushing-to-specific-queues"></a></p><h4 id="推送到指定队列" tabindex="-1"><a class="header-anchor" href="#推送到指定队列" aria-hidden="true">#</a> 推送到指定队列</h4><p>由于所有使用 <code>make:mail</code> 命令生成的 mailable 类都是用了 <code>Illuminate\\Bus\\Queueable</code> trait，因此你可以在任何 mailable 类实例上调用 <code>onQueue</code> 和 <code>onConnection</code> 方法来指定消息的连接和队列名：</p><pre><code>$message = (new OrderShipped($order))
                -&gt;onConnection(&#39;sqs&#39;)
                -&gt;onQueue(&#39;emails&#39;);

Mail::to($request-&gt;user())
    -&gt;cc($moreUsers)
    -&gt;bcc($evenMoreUsers)
    -&gt;queue($message);
</code></pre><p><a name="queueing-by-default"></a></p><h4 id="默认队列" tabindex="-1"><a class="header-anchor" href="#默认队列" aria-hidden="true">#</a> 默认队列</h4><p>如果你希望你的邮件类始终使用队列，你可以给邮件类实现 <code>ShouldQueue</code> 契约，现在即使你调用了 <code>send</code> 方法，邮件依旧使用队列的方式发送</p><pre><code>use Illuminate\\Contracts\\Queue\\ShouldQueue;

class OrderShipped extends Mailable implements ShouldQueue
{
    // ...
}
</code></pre><p><a name="queued-mailables-and-database-transactions"></a></p><h4 id="队列的邮件和数据库事务" tabindex="-1"><a class="header-anchor" href="#队列的邮件和数据库事务" aria-hidden="true">#</a> 队列的邮件和数据库事务</h4><p>当在数据库事务中分发邮件队列时，队列可能在数据库事务提交之前处理邮件。 发生这种情况时，在数据库事务期间对模型或数据库记录所做的任何更新可能都不会反映在数据库中。另外，在事务中创建的任何模型或数据库记录都可能不存在于数据库中。如果你的邮件基于以上这些模型数据，则在处理邮件发送时，可能会发生意外错误。</p><p>如果队列连接的 <code>after_commit</code> 配置选项设置为 <code>false</code>，那么仍然可以通过在 mailable 类上定义 <code>afterCommit</code> 属性来设置提交所有打开的数据库事务之后再调度特定的邮件队列：</p><pre><code>Mail::to($request-&gt;user())-&gt;send(
    (new OrderShipped($order))-&gt;afterCommit()
);
</code></pre><p>或者，你可以 <code>afterCommit</code> 从 mailable 的构造函数中调用该方法：</p><pre><code>&lt;?php

namespace App\\Mail;

use Illuminate\\Bus\\Queueable;
use Illuminate\\Contracts\\Queue\\ShouldQueue;
use Illuminate\\Mail\\Mailable;
use Illuminate\\Queue\\SerializesModels;

class OrderShipped extends Mailable implements ShouldQueue
{
    use Queueable, SerializesModels;

    /**
     * 创建新的消息实例。
     */
    public function __construct()
    {
        $this-&gt;afterCommit();
    }
}
</code></pre><blockquote><p><strong>技巧</strong> 要了解有关解决这些问题的更多信息，请查看 <a href="./queues#jobs-and-database-transactions">队列和数据库事物</a>。</p></blockquote><p><a name="rendering-mailables"></a></p><h2 id="渲染邮件" tabindex="-1"><a class="header-anchor" href="#渲染邮件" aria-hidden="true">#</a> 渲染邮件</h2><p>有时你可能希望捕获邮件的 HTML 内容而不发送它。为此，可以调用邮件类的 <code>render</code> 方法。此方法将以字符串形式返回邮件类的渲染内容:</p><pre><code>use App\\Mail\\InvoicePaid;
use App\\Models\\Invoice;

$invoice = Invoice::find(1);

return (new InvoicePaid($invoice))-&gt;render();
</code></pre><p><a name="previewing-mailables-in-the-browser"></a></p><h3 id="在浏览器中预览邮件" tabindex="-1"><a class="header-anchor" href="#在浏览器中预览邮件" aria-hidden="true">#</a> 在浏览器中预览邮件</h3><p>设计邮件模板时，可以方便地在浏览器中预览邮件，就像典型的 Blade 模板一样。因此， Laravel 允许你直接从路由闭包或控制器返回任何邮件类。当邮件返回时，它将渲染并显示在浏览器中，允许你快速预览其设计，而无需将其发送到实际的电子邮件地址：</p><pre><code>Route::get(&#39;/mailable&#39;, function () {
    $invoice = App\\Models\\Invoice::find(1);

    return new App\\Mail\\InvoicePaid($invoice);
});
</code></pre>`,89),T=a("strong",null,"注意",-1),L=a("a",{href:"#inline-attachments"},"内联附件",-1),O={href:"https://github.com/axllent/mailpit",target:"_blank",rel:"noopener noreferrer"},P={href:"https://usehelo.com",target:"_blank",rel:"noopener noreferrer"},q=r(`<p><a name="localizing-mailables"></a></p><h2 id="本地化邮件" tabindex="-1"><a class="header-anchor" href="#本地化邮件" aria-hidden="true">#</a> 本地化邮件</h2><p>Laravel 允许你在请求的当前语言环境之外的语言环境中发送邮件，如果邮件在排队，它甚至会记住这个语言环境。</p><p>为此， <code>Mail</code> 门面提供了一个 <code>locale</code> 方法来设置所需的语言。评估可邮寄的模板时，应用程序将更改为此语言环境，然后在评估完成后恢复为先前的语言环境：</p><pre><code>Mail::to($request-&gt;user())-&gt;locale(&#39;es&#39;)-&gt;send(
    new OrderShipped($order)
);
</code></pre><p><a name="user-preferred-locales"></a></p><h3 id="用户首选语言环境" tabindex="-1"><a class="header-anchor" href="#用户首选语言环境" aria-hidden="true">#</a> 用户首选语言环境</h3><p>有时，应用程序存储每个用户的首选语言环境。 通过在一个或多个模型上实现 <code>HasLocalePreference</code> 契约，你可以指示 Laravel 在发送邮件时使用这个存储的语言环境：</p><pre><code>use Illuminate\\Contracts\\Translation\\HasLocalePreference;

class User extends Model implements HasLocalePreference
{
    /**
     * 获取用户的区域设置。
     */
    public function preferredLocale(): string
    {
        return $this-&gt;locale;
    }
}
</code></pre><p>一旦你实现了接口，Laravel 将在向模型发送邮件和通知时自动使用首选语言环境。 因此，使用该接口时无需调用 <code>locale</code> 方法：</p><pre><code>Mail::to($request-&gt;user())-&gt;send(new OrderShipped($order));
</code></pre><p><a name="testing-mailables"></a></p><h2 id="测试邮件" tabindex="-1"><a class="header-anchor" href="#测试邮件" aria-hidden="true">#</a> 测试邮件</h2><p><a name="testing-mailable-content"></a></p><h3 id="测试邮件内容" tabindex="-1"><a class="header-anchor" href="#测试邮件内容" aria-hidden="true">#</a> 测试邮件内容</h3><p>Laravel 提供了几种方便的方法来测试你的邮件是否包含你期望的内容。 这些方法是：<code>assertSeeInHtml</code>、<code>assertDontSeeInHtml</code>、<code>assertSeeInOrderInHtml</code>、<code>assertSeeInText</code>、<code>assertDontSeeInText</code> 和 <code>assertSeeInOrderInText</code>。</p><p>和你想的一样，「HTML」判断你的邮件的 HTML 版本中是否包含给定字符串，而「Text」是判断你的可邮寄邮件的纯文本版本是否包含给定字符串：</p><pre><code>use App\\Mail\\InvoicePaid;
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
</code></pre><p><a name="testing-mailable-sending"></a></p><h3 id="测试邮件的发送" tabindex="-1"><a class="header-anchor" href="#测试邮件的发送" aria-hidden="true">#</a> 测试邮件的发送</h3><p>我们建议将邮件内容和判断指定的邮件「发送」给特定用户的测试分开进行测试。通常来讲，邮件的内容与你正在测试的代码无关，只要能简单地判断 Laravel 能够发送指定的邮件就足够了。</p><p>你可以使用 <code>Mail</code>方法的 <code>fake</code> 方法来阻止邮件的发送。调用了 <code>Mail</code> 方法的 <code>fake</code>方法后，你可以判断邮件是否已被发送给指定的用户，甚至可以检查邮件收到的数据：</p><pre><code>&lt;?php

namespace Tests\\Feature;

use App\\Mail\\OrderShipped;
use Illuminate\\Support\\Facades\\Mail;
use Tests\\TestCase;

class ExampleTest extends TestCase
{
    public function test_orders_can_be_shipped(): void
    {
        Mail::fake();

        // 执行邮件发送。。。

        // 判断没有发送的邮件。。。
        Mail::assertNothingSent();

        // 判断已发送邮件。。。
        Mail::assertSent(OrderShipped::class);

        // 判断已发送两次的邮件。。。
        Mail::assertSent(OrderShipped::class, 2);

        // 判断邮件是否未发送。。。
        Mail::assertNotSent(AnotherMailable::class);
    }
}
</code></pre><p>如果你在后台排队等待邮件的传递，则应该使用 <code>assertQueued</code> 方法而不是 <code>assertSent</code> 方法。</p><pre><code>Mail::assertQueued(OrderShipped::class);

Mail::assertNotQueued(OrderShipped::class);

Mail::assertNothingQueued();
</code></pre><p>你可以向 <code>assertSent</code>、<code>assertNotSent</code>、 <code>assertQueued</code> 或者 <code>assertNotQueued</code> 方法来传递闭包，来判断发送的邮件是否通过给定的 「真值检验」。如果至少发送了一个可以通过的邮件，就可以判断为成功。</p><pre><code>Mail::assertSent(function (OrderShipped $mail) use ($order) {
    return $mail-&gt;order-&gt;id === $order-&gt;id;
});
</code></pre><p>当调用 <code>Mail</code> 外观的判断方法时，提供的闭包所接受的邮件实例会公开检查邮件的可用方法：</p><pre><code>Mail::assertSent(OrderShipped::class, function (OrderShipped $mail) use ($user) {
    return $mail-&gt;hasTo($user-&gt;email) &amp;&amp;
           $mail-&gt;hasCc(&#39;...&#39;) &amp;&amp;
           $mail-&gt;hasBcc(&#39;...&#39;) &amp;&amp;
           $mail-&gt;hasReplyTo(&#39;...&#39;) &amp;&amp;
           $mail-&gt;hasFrom(&#39;...&#39;) &amp;&amp;
           $mail-&gt;hasSubject(&#39;...&#39;);
});
</code></pre><p>mailable 实例还包括检查 mailable 上的附件的几种可用方法：</p><pre><code>use Illuminate\\Mail\\Mailables\\Attachment;

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
</code></pre><p>你可能已经注意到，有 2 种方法可以判断邮件是否发送, 即：<code>assertNotSent</code> 和 <code>assertNotQueued</code> 。有时你可能希望判断邮件没有被发送<strong>或</strong>排队。如果要实现这一点，你可以使用 <code>assertNothingOutgoing</code> 和 <code>assertNotOutgoing</code> 方法。</p><pre><code>Mail::assertNothingOutgoing();

Mail::assertNotOutgoing(function (OrderShipped $mail) use ($order) {
    return $mail-&gt;order-&gt;id === $order-&gt;id;
});
</code></pre><p><a name="mail-and-local-development"></a></p><h2 id="邮件和本地开发" tabindex="-1"><a class="header-anchor" href="#邮件和本地开发" aria-hidden="true">#</a> 邮件和本地开发</h2><p>在开发发送电子邮件的应用程序时，你可能不希望实际将电子邮件发送到实际的电子邮件地址。 Laravel 提供了几种在本地开发期间「禁用」发送电子邮件的方法。</p><p><a name="log-driver"></a></p><h4 id="日志驱动" tabindex="-1"><a class="header-anchor" href="#日志驱动" aria-hidden="true">#</a> 日志驱动</h4><p><code>log</code> 邮件驱动程序不会发送你的电子邮件，而是将所有电子邮件信息写入你的日志文件以供检查。 通常，此驱动程序仅在本地开发期间使用。有关按环境配置应用程序的更多信息，请查看 <a href="./configuration/14836#environment-configuration">配置文档</a>。</p><p><a name="mailtrap"></a></p><h4 id="helo-mailtrap-mailpit" tabindex="-1"><a class="header-anchor" href="#helo-mailtrap-mailpit" aria-hidden="true">#</a> HELO / Mailtrap / Mailpit</h4>`,41),H={href:"https://usehelo.com/",target:"_blank",rel:"noopener noreferrer"},D={href:"https://mailtrap.io/",target:"_blank",rel:"noopener noreferrer"},N=a("code",null,"smtp",-1),Q=a("a",{href:"./sail"},"Laravel Sail",-1),R={href:"https://github.com/axllent/mailpit",target:"_blank",rel:"noopener noreferrer"},z=a("code",null,"http://localhost:8025",-1),U=r(`<p><a name="using-a-global-to-address"></a></p><h4 id="使用全局-to-地址" tabindex="-1"><a class="header-anchor" href="#使用全局-to-地址" aria-hidden="true">#</a> 使用全局 <code>to</code> 地址</h4><p>最后，你可以通过调用 <code>Mail</code> 门面提供的 <code>alwaysTo</code> 方法来指定一个全局的「收件人」地址。 通常，应该从应用程序的服务提供者之一的 <code>boot</code> 方法调用此方法：</p><pre><code>use Illuminate\\Support\\Facades\\Mail;

/**
 * 启动应用程序服务
 */
public function boot(): void
{
    if ($this-&gt;app-&gt;environment(&#39;local&#39;)) {
        Mail::alwaysTo(&#39;taylor@example.com&#39;);
    }
}
</code></pre><p><a name="events"></a></p><h2 id="事件" tabindex="-1"><a class="header-anchor" href="#事件" aria-hidden="true">#</a> 事件</h2><p>Laravel 在发送邮件消息的过程中会触发 2 个事件。<code>MessageSending</code> 事件在消息发送之前触发，而 <code>MessageSent</code> 事件在消息发送后触发。请记住，这些事件是在邮件<strong>发送</strong>时触发的，而不是在排队时触发的。你可以在你的 <code>App\\Providers\\EventServiceProvider</code> 服务中为这个事件注册事件监听器：</p><pre><code>use App\\Listeners\\LogSendingMessage;
use App\\Listeners\\LogSentMessage;
use Illuminate\\Mail\\Events\\MessageSending;
use Illuminate\\Mail\\Events\\MessageSent;

/**
 * 应用程序的事件侦听器映射。
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
</code></pre><p><a name="custom-transports"></a></p><h2 id="自定义传输" tabindex="-1"><a class="header-anchor" href="#自定义传输" aria-hidden="true">#</a> 自定义传输</h2><p>Laravel 包含多种邮件传输；但是，你可能希望编写自己的传输程序，通过 Laravel 来发送电子邮件。首先，定义一个扩展 <code>Symfony\\Component\\Mailer\\Transport\\AbstractTransport</code> 类。然后，在传输上实现 <code>doSend</code> 和 <code>__toString()</code> 方法：</p><pre><code>use MailchimpTransactional\\ApiClient;
use Symfony\\Component\\Mailer\\SentMessage;
use Symfony\\Component\\Mailer\\Transport\\AbstractTransport;
use Symfony\\Component\\Mime\\Address;
use Symfony\\Component\\Mime\\MessageConverter;

class MailchimpTransport extends AbstractTransport
{
    /**
     * 创建一个新的 Mailchimp 传输实例。
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
     * 获取传输字符串的表示形式。
     */
    public function __toString(): string
    {
        return &#39;mailchimp&#39;;
    }
}
</code></pre><p>你一旦定义了自定义传输，就可以通过 <code>Mail</code> 外观提供的 <code>boot</code> 方法来注册它。通常情况下，这应该在应用程序的 <code>AppServiceProvider</code> 服务种提供的 <code>boot</code> 方法中完成。<code>$config</code> 参数将提供给 <code>extend</code> 方法的闭包。该参数将包含在应用程序中的 <code>config/mail.php</code> 来配置文件中为 mailer 定义的配置数组。</p><pre><code>use App\\Mail\\MailchimpTransport;
use Illuminate\\Support\\Facades\\Mail;

/**
 * 启动应用程序服务
 */
public function boot(): void
{
    Mail::extend(&#39;mailchimp&#39;, function (array $config = []) {
        return new MailchimpTransport(/* ... */);
    });
}
</code></pre><p>定义并注册自定义传输后，你可以在应用程序中的 <code>config/mail.php</code> 配置文件中新建一个利用自定义传输的邮件定义：</p><pre><code>&#39;mailchimp&#39; =&gt; [
    &#39;transport&#39; =&gt; &#39;mailchimp&#39;,
    // ...
],
</code></pre><p><a name="additional-symfony-transports"></a></p><h3 id="额外的-symfony-传输" tabindex="-1"><a class="header-anchor" href="#额外的-symfony-传输" aria-hidden="true">#</a> 额外的 Symfony 传输</h3><p>Laravel 同样支持一些现有的 Symfony 维护的邮件传输，如 Mailgun 和 Postmark 。但是，你可能希望通过扩展 Laravel，来支持 Symfony 维护的其他传输。你可以通过 Composer 请求必要的 Symfony 邮件并向 Laravel 注册运输。例如，你可以安装并注册 Symfony 的「Sendinblue」 邮件：</p><div class="language-none line-numbers-mode" data-ext="none"><pre class="language-none"><code>composer require symfony/sendinblue-mailer symfony/http-client
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装 Sendinblue 邮件包后，你可以将 Sendinblue API 凭据的条目添加到应用程序的「服务」配置文件中：</p><pre><code>&#39;sendinblue&#39; =&gt; [
    &#39;key&#39; =&gt; &#39;your-api-key&#39;,
],
</code></pre><p>最后，你可以使用 <code>Mail</code> 门面的 <code>extend</code> 方法向 Laravel 注册传输。通常，这应该在服务提供者的 <code>boot</code> 方法中完成：</p><pre><code>use Illuminate\\Support\\Facades\\Mail;
use Symfony\\Component\\Mailer\\Bridge\\Sendinblue\\Transport\\SendinblueTransportFactory;
use Symfony\\Component\\Mailer\\Transport\\Dsn;

/**
 * 启动应用程序服务。
 */
public function boot(): void
{
    Mail::extend(&#39;sendinblue&#39;, function () {
        return (new SendinblueTransportFactory)-&gt;create(
            new Dsn(
                &#39;sendinblue+api&#39;,
                &#39;default&#39;,
                config(&#39;services.sendinblue.key&#39;)
            )
        );
    });
}
</code></pre><p>你一旦注册了传输，就可以在应用程序的 <code>config/mail.php</code> 配置文件中创建一个用于新传输的 mailer 定义：</p><pre><code>&#39;sendinblue&#39; =&gt; [
    &#39;transport&#39; =&gt; &#39;sendinblue&#39;,
    // ...
],
</code></pre>`,26);function F(B,j){const n=i("ExternalLinkIcon");return d(),s("div",null,[c,a("p",null,[e("发送邮件并不复杂。Laravel 基于 "),a("a",p,[e("Symfony Mailer"),t(n)]),e(" 组件提供了一个简洁、简单的邮件 API。Laravel 和 Symfony 为 Mailer SMTP 、Mailgun 、Postmark 、 Amazon SES 、 及 sendmail （发送邮件的方式）提供驱动，允许你通过本地或者云服务来快速发送邮件。")]),m,a("p",null,[e("如果不使用 US "),a("a",h,[e("Mailgun region"),t(n)]),e(" 区域终端 ，你需要在 "),u,e(" 文件中配置区域终端：")]),g,a("p",null,[e("为了通过 session token 来使用 AWS "),a("a",b,[e("temporary credentials"),t(n)]),e(" ，你需要向应用的 SES 配置中添加一个 "),f,e(" 键：")]),v,a("p",null,[e("发送邮件，如果你想传递一些 "),a("a",M,[e("额外的选项"),t(n)]),e(" 给 AWS SDK 的 "),S,e(" 方法，你可以在 "),_,e(" 配置中定义一个 "),k,e(" 数组：")]),x,a("p",null,[e("如果你的应用程序正在使用 Mailgun 驱动程序，你可以查阅 Mailgun 的文档以获取有关 "),a("a",y,[e("标签"),t(n)]),e(" 和 "),a("a",$,[e("元数据"),t(n)]),e(" 的更多信息。同样，还可以查阅邮戳文档，了解其对 "),a("a",A,[e("标签"),t(n)]),e(" 和 "),a("a",w,[e("元数据"),t(n)]),e(" 支持的更多信息")]),a("p",null,[e("如果你的应用程序使用 Amazon SES 发送电子邮件，则应使用 "),I,e(" 方法将 "),a("a",C,[e("SES 「标签」"),t(n)]),e("附加到邮件中。")]),E,a("blockquote",null,[a("p",null,[T,e(" 在浏览器中预览邮件时，不会呈现 "),L,e(" 要预览这些邮件，你应该将它们发送到电子邮件测试应用程序，例如 "),a("a",O,[e("Mailpit"),t(n)]),e(" 或 "),a("a",P,[e("HELO"),t(n)]),e("。")])]),q,a("p",null,[e("或者，你可以使用 "),a("a",H,[e("HELO"),t(n)]),e(" 或 "),a("a",D,[e("Mailtrap"),t(n)]),e(" 之类的服务和 "),N,e(" 驱动程序将你的电子邮件信息发送到「虚拟」邮箱。你可以通过在真正的电子邮件客户端中查看它们。这种方法的好处是允许你在 Mailtrap 的消息查看实际并检查的最终电子邮件。")]),a("p",null,[e("如果你使用 "),Q,e("，你可以使用 "),a("a",R,[e("Mailpit"),t(n)]),e(" 预览你的消息。当 Sail 运行时，你可以访问 Mailpit 界面："),z,e("。")]),U])}const G=o(l,[["render",F],["__file","mail.html.vue"]]);export{G as default};
