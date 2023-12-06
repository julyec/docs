import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o,c as l,b as e,d as a,e as s,t as c,a as d}from"./app-06635a3b.js";const p={},u=d('<h1 id="laravel-交易工具包-paddle" tabindex="-1"><a class="header-anchor" href="#laravel-交易工具包-paddle" aria-hidden="true">#</a> Laravel 交易工具包 (Paddle)</h1><ul><li><a href="#introduction">介绍</a></li><li><a href="#upgrading-cashier">升级 Cashier</a></li><li><a href="#installation">安装</a><ul><li><a href="#paddle-sandbox">Paddle 沙盒</a></li><li><a href="#database-migrations">数据迁移</a></li></ul></li><li><a href="#configuration">配置</a><ul><li><a href="#billable-model">Billable 模型</a></li><li><a href="#api-keys">API Keys</a></li><li><a href="#paddle-js">Paddle JS</a></li><li><a href="#currency-configuration">货币配置</a></li><li><a href="#overriding-default-models">扩展默认模型</a></li></ul></li><li><a href="#core-concepts">核心概念</a><ul><li><a href="#pay-links">支付链接</a></li><li><a href="#inline-checkout">內联结账</a></li><li><a href="#user-identification">用户鉴定</a></li></ul></li><li><a href="#prices">价格</a></li><li><a href="#customers">用户</a><ul><li><a href="#customer-defaults">用户默认设置</a></li></ul></li><li><a href="#subscriptions">订阅</a><ul><li><a href="#creating-subscriptions">创建订阅</a></li><li><a href="#checking-subscription-status">检查订阅状态</a></li><li><a href="#subscription-single-charges">订阅一次性收费</a></li><li><a href="#updating-payment-information">更新交易信息</a></li><li><a href="#changing-plans">更新计划</a></li><li><a href="#subscription-quantity">订阅量</a></li><li><a href="#subscription-modifiers">更新订阅</a></li><li><a href="#multiple-subscriptions">多个订阅</a></li><li><a href="#pausing-subscriptions">暂停订阅</a></li><li><a href="#cancelling-subscriptions">取消订阅</a></li></ul></li><li><a href="#subscription-trials">订阅试用</a><ul><li><a href="#with-payment-method-up-front">预付款方式</a></li><li><a href="#without-payment-method-up-front">非预付款方式</a></li></ul></li><li><a href="#handling-paddle-webhooks">处理 Paddle Webhooks</a><ul><li><a href="#defining-webhook-event-handlers">定义 Webhook 事件处理程序</a></li><li><a href="#verifying-webhook-signatures">校验 Webhook 签名</a></li></ul></li><li><a href="#single-charges">一次性收费</a><ul><li><a href="#simple-charge">简单收费</a></li><li><a href="#charging-products">收费产品</a></li><li><a href="#refunding-orders">退款订单</a></li></ul></li><li><a href="#receipts">收据</a><ul><li><a href="#past-and-upcoming-payments">过去和未来的付款</a></li></ul></li><li><a href="#handling-failed-payments">处理失败交易</a></li><li><a href="#testing">测试</a></li></ul><p><a name="introduction"></a></p><h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2>',4),h={href:"https://github.com/laravel/cashier-paddle",target:"_blank",rel:"noopener noreferrer"},b={href:"https://paddle.com",target:"_blank",rel:"noopener noreferrer"},g={href:"https://developer.paddle.com/guides",target:"_blank",rel:"noopener noreferrer"},m={href:"https://developer.paddle.com/api-reference/intro",target:"_blank",rel:"noopener noreferrer"},v=e("p",null,[e("a",{name:"upgrading-cashier"})],-1),f=e("h2",{id:"升级-cashier",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#升级-cashier","aria-hidden":"true"},"#"),a(" 升级 Cashier")],-1),k={href:"https://github.com/laravel/cashier-paddle/blob/master/UPGRADE.",target:"_blank",rel:"noopener noreferrer"},P=d(`<p><a name="installation"></a></p><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><p>首先，使用 Composer 包管理器安装 Paddle 的 Cashier 包：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">composer</span> require laravel/cashier-paddle
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>注意：为了确保 Cashier 正确处理所有 Paddle 事件，请记得 <a href="#handling-paddle-webhooks">配置 Cashier 的 webhook 处理</a>。</p></blockquote><p><a name="paddle-sandbox"></a></p><h3 id="paddle-沙盒" tabindex="-1"><a class="header-anchor" href="#paddle-沙盒" aria-hidden="true">#</a> Paddle 沙盒</h3>`,7),_={href:"https://developer.paddle.com/getting-started/sandbox",target:"_blank",rel:"noopener noreferrer"},$={href:"https://developer.paddle.com/getting-started/sandbox#test-cards",target:"_blank",rel:"noopener noreferrer"},y=d(`<p>在使用 Pable 沙盒环境时，你应在应用程序的 <code>.env</code> 环境文件中将 <code>PADDLE_SANDBOX</code> 环境变量设置为 <code>true</code> ：</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token key attr-name">PADDLE_SANDBOX</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,2),q={href:"https://paddle.com/",target:"_blank",rel:"noopener noreferrer"},x=d(`<p><a name="database-migrations"></a></p><h3 id="数据迁移" tabindex="-1"><a class="header-anchor" href="#数据迁移" aria-hidden="true">#</a> 数据迁移</h3><p>Cashier 服务提供者注册它自己的数据迁移目录，所以你记得在安装扩展包之后执行数据迁移。Cashier 数据迁移将生成新的 <code>customers</code> 表。另外，新的 <code>subscriptions</code> 表将被创建，来存储所有你的用户的订阅。最后，新的 <code>receipts</code> 表也将被创建，来存储所有你的收据信息:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan migrate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果你需要重写 Cashier 中的数据迁移，你可以使用 <code>vendor:publish</code> Artisan 命令来发布它们：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan vendor:publish <span class="token parameter variable">--tag</span><span class="token operator">=</span><span class="token string">&quot;cashier-migrations&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果你想阻止 Cashier 的数据迁移全部执行，你可以使用 Cashier 提供的 <code>ignoreMigrations</code>。通常，这个方法会在 <code>AppServiceProvider</code> 的 <code>register</code> 方法中被调用：</p><pre><code>use Laravel\\Paddle\\Cashier;

/**
 * 注册服务。
 */
public function register(): void
{
    Cashier::ignoreMigrations();
}
</code></pre><p><a name="configuration"></a></p><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><p><a name="billable-model"></a></p><h3 id="billable-模型" tabindex="-1"><a class="header-anchor" href="#billable-模型" aria-hidden="true">#</a> Billable 模型</h3><p>在使用 Cashier 之前，你必须将 <code>Billable</code> trait 添加到你的用户模型定义中。 这里的 trait 提供了多种方法来允许你执行常见的计费任务，例如创建订阅、应用优惠券和更新付款方式信息：</p><pre><code>use Laravel\\Paddle\\Billable;

class User extends Authenticatable
{
    use Billable;
}
</code></pre><p>如果你有非用户的计费实体，你还可以将特征添加到这些类中：</p><pre><code>use Illuminate\\Database\\Eloquent\\Model;
use Laravel\\Paddle\\Billable;

class Team extends Model
{
    use Billable;
}
</code></pre><p><a name="api-keys"></a></p><h3 id="api-keys" tabindex="-1"><a class="header-anchor" href="#api-keys" aria-hidden="true">#</a> API Keys</h3><p>接下来，你应该在应用程序的 <code>.env</code> 文件中配置你的 Paddle 。 你可以从 Paddle 控制面板检索你的 Paddle API 密钥：</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token key attr-name">PADDLE_VENDOR_ID</span><span class="token punctuation">=</span><span class="token value attr-value">your-paddle-vendor-id</span>
<span class="token key attr-name">PADDLE_VENDOR_AUTH_CODE</span><span class="token punctuation">=</span><span class="token value attr-value">your-paddle-vendor-auth-code</span>
<span class="token key attr-name">PADDLE_PUBLIC_KEY</span><span class="token punctuation">=</span><span class="token value attr-value">&quot;<span class="token inner-value">your-paddle-public-key</span>&quot;</span>
<span class="token key attr-name">PADDLE_SANDBOX</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当你使用 <a href="#paddle-sandbox">Paddle 的沙箱环境</a> 时，<code>PADDLE_SANDBOX</code> 环境变量应该设置为 <code>true</code>。如果你将应用程序部署到生产环境并使用 Paddle 的实时供应商环境，则 <code>PADDLE_SANDBOX</code> 变量应该设置为 <code>false</code>。</p><p><a name="paddle-js"></a></p><h3 id="paddle-js" tabindex="-1"><a class="header-anchor" href="#paddle-js" aria-hidden="true">#</a> Paddle JS</h3><p>Paddle 依赖其自己的 JavaScript 库来启动 Paddle 结账小部件。你可以通过在应用程序布局中的 <code>&lt;/head&gt;</code> 标签关闭之前放置 <code>@paddleJS</code> Blade 指令来加载 JavaScript 库：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;head&gt;
    ...

    @paddleJS
&lt;/head&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="currency-configuration"></a></p><h3 id="货币配置" tabindex="-1"><a class="header-anchor" href="#货币配置" aria-hidden="true">#</a> 货币配置</h3><p>默认 Cashier 货币是美元（USD）。你可以在 <code>.env</code> 文件中定义 <code>CASHIER_CURRENCY</code> 环境变量来更改默认货币：</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token key attr-name">CASHIER_CURRENCY</span><span class="token punctuation">=</span><span class="token value attr-value">EUR</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,29),w={href:"https://www.php.net/manual/en/class.numberformatter.php",target:"_blank",rel:"noopener noreferrer"},C=d(`<div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token key attr-name">CASHIER_CURRENCY_LOCALE</span><span class="token punctuation">=</span><span class="token value attr-value">nl_BE</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>注意：为了使用 <code>en</code> 以外的语言环境，请确保你的服务器上安装并配置了 <code>ext-intl</code> PHP 扩展。</p></blockquote><p><a name="overriding-default-models"></a></p><h3 id="覆盖默认模型" tabindex="-1"><a class="header-anchor" href="#覆盖默认模型" aria-hidden="true">#</a> 覆盖默认模型</h3><p>你可以通过定义自己的模型并继承相应的 Cashier 模型来自由扩展 Cashier 模型：</p><pre><code>use Laravel\\Paddle\\Subscription as CashierSubscription;

class Subscription extends CashierSubscription
{
    // ...
}
</code></pre><p>定义模型后，你可以通过 <code>Laravel\\Paddle\\Cashier</code> 类指示 Cashier 使用你的自定义模型。通常，你应该在应用的 <code>App\\Providers\\AppServiceProvider</code> 类的 <code>boot</code> 方法中通知 Cashier 关于你的自定义模型：</p><pre><code>use App\\Models\\Cashier\\Receipt;
use App\\Models\\Cashier\\Subscription;

/**
 * 启动应用服务。
 */
public function boot(): void
{
    Cashier::useReceiptModel(Receipt::class);
    Cashier::useSubscriptionModel(Subscription::class);
}
</code></pre><p><a name="core-concepts"></a></p><h2 id="核心概念" tabindex="-1"><a class="header-anchor" href="#核心概念" aria-hidden="true">#</a> 核心概念</h2><p><a name="pay-links"></a></p><h3 id="支付链接" tabindex="-1"><a class="header-anchor" href="#支付链接" aria-hidden="true">#</a> 支付链接</h3>`,12),L={href:"https://developer.paddle.com/guides/how-tos/checkout/paddle-checkout",target:"_blank",rel:"noopener noreferrer"},S=d(`<pre><code>use App\\Models\\User;
use Illuminate\\Http\\Request;

Route::get(&#39;/user/subscribe&#39;, function (Request $request) {
    $payLink = $request-&gt;user()-&gt;newSubscription(&#39;default&#39;, $premium = 34567)
        -&gt;returnTo(route(&#39;home&#39;))
        -&gt;create();

    return view(&#39;billing&#39;, [&#39;payLink&#39; =&gt; $payLink]);
});
</code></pre><p>Cashier 包括一个 <code>paddle-button</code> <a href="./blade#components">Blade 组件</a>。 我们可以将支付链接 URL 作为 「prop」传递给该组件。 单击此按钮时，将显示 Paddle 的结帐小部件：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>x-paddle-button</span> <span class="token attr-name">:url</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>$payLink<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>px-8 py-4<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    订阅
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>x-paddle-button</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>默认情况下，这将显示一个具有标准 Paddle 样式的按钮。 你可以通过向组件添加 <code>data-theme=&quot;none&quot;</code> 属性来删除所有 Paddle 样式：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>x-paddle-button</span> <span class="token attr-name">:url</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>$payLink<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>px-8 py-4<span class="token punctuation">&quot;</span></span> <span class="token attr-name">data-theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>none<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    订阅
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>x-paddle-button</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Paddle 结账小部件是异步的。 一旦用户在小部件中创建或更新订阅，Paddle 将发送你的应用程序 webhook，以便你可以在我们自己的数据库中正确更新订阅状态。 因此，正确 <a href="#handling-paddle-webhook">设置 webhooks</a> 以同步 Paddle 的状态变化非常重要。</p>`,6),R={href:"https://developer.paddle.com/api-reference/product-api/pay-links/createpaylink",target:"_blank",rel:"noopener noreferrer"},E=e("blockquote",null,[e("p",null,"注意：订阅状态更改后，接收相应 webhook 的延迟通常很小，但你应该在应用程序中考虑到这一点，因为你的用户订阅在完成结帐后可能不会立即生效。")],-1),A=e("p",null,[e("a",{name:"manually-rendering-pay-links"})],-1),U=e("h4",{id:"手动呈现支付链接",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#手动呈现支付链接","aria-hidden":"true"},"#"),a(" 手动呈现支付链接")],-1),I=e("p",null,"你也可以在不使用 Laravel 内置的 Blade 组件的情况下手动渲染支付链接。 首先，生成支付链接 URL，如先前所示：",-1),D=e("pre",null,[e("code",null,`$payLink = $request->user()->newSubscription('default', $premium = 34567)
    ->returnTo(route('home'))
    ->create();
`)],-1),T=e("p",null,[a("接下来，只需将支付链接 URL 附加到 HTML 中的 "),e("code",null,"a"),a(" 元素：")],-1),M=d(`<p><a name="payments-requiring-additional-confirmation"></a></p><h4 id="需要额外确认的付款" tabindex="-1"><a class="header-anchor" href="#需要额外确认的付款" aria-hidden="true">#</a> 需要额外确认的付款</h4><p>有时需要额外的验证才能确认和处理付款。发生这种情况时，Paddle 将显示付款确认屏幕。Paddle 或 Cashier 显示的付款确认屏幕可能会针对特定银行或发卡机构的付款流程进行定制，并且可能包括额外的卡确认、临时小额费用、单独的设备身份验证或其他形式的验证。</p><p><a name="inline-checkout"></a></p><h3 id="内联结账" tabindex="-1"><a class="header-anchor" href="#内联结账" aria-hidden="true">#</a> 内联结账</h3><p>如果你不想使用 Paddle 的 「叠加」样式结帐小部件，Paddle 还提供了内嵌显示小部件的选项。 虽然这种方法不允许你调整任何结帐的 HTML 字段，但它允许你将小部件嵌入到你的应用中。</p><p>为了让你轻松开始内联结账，Cashier 包含一个 <code>paddle-checkout</code> Blade 组件。 首先，你应该 <a href="#pay-links">生成支付链接</a>并将支付链接传递给组件的 <code>override</code> 属性：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;x-paddle-checkout :override=&quot;$payLink&quot; class=&quot;w-full&quot; /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>要调整内联结帐组件的高度，你可以将 <code>height</code> 属性传递给 Blade 组件：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;x-paddle-checkout :override=&quot;$payLink&quot; class=&quot;w-full&quot; height=&quot;500&quot; /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="inline-checkout-without-pay-links"></a></p><h4 id="没有支付链接的内联结账" tabindex="-1"><a class="header-anchor" href="#没有支付链接的内联结账" aria-hidden="true">#</a> 没有支付链接的内联结账</h4><p>或者，你可以使用自定义选项而不是使用支付链接来自定义小部件：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>@php
$options = [
    &#39;product&#39; =&gt; $productId,
    &#39;title&#39; =&gt; &#39;Product Title&#39;,
];
@endphp

&lt;x-paddle-checkout :options=&quot;$options&quot; class=&quot;w-full&quot; /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),B={href:"https://developer.paddle.com/guides/how-tos/checkout/inline-checkout",target:"_blank",rel:"noopener noreferrer"},H={href:"https://developer.paddle.com/reference/paddle-js/parameters",target:"_blank",rel:"noopener noreferrer"},N=e("blockquote",null,[e("p",null,[a("注意：如果你想在指定自定义选项时也使用 passthrough 选项，你应该提供一个键 / 值数组作为其值。Cashier 将自动处理将数组转换为 JSON 字符串。 此外，"),e("code",null,"customer_id"),a(" passthrough 选项保留供内部 Cashier 使用。")])],-1),W=e("p",null,[e("a",{name:"manually-rendering-an-inline-checkout"})],-1),O=e("h4",{id:"手动呈现内联结账",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#手动呈现内联结账","aria-hidden":"true"},"#"),a(" 手动呈现内联结账")],-1),F=e("p",null,[a("你也可以在不使用 Laravel 的内置 Blade 组件的情况下手动渲染内联结账。 首先，生成支付链接 URL "),e("a",{href:"#pay-links"},"如前面示例中所示"),a("。")],-1),G={href:"https://github.com/alpinejs/alpine",target:"_blank",rel:"noopener noreferrer"},Q=d(`<div class="language-alpine line-numbers-mode" data-ext="alpine"><pre class="language-alpine"><code>&lt;div class=&quot;paddle-checkout&quot; x-data=&quot;{}&quot; x-init=&quot;
    Paddle.Checkout.open({
        override: {{ $payLink }},
        method: &#39;inline&#39;,
        frameTarget: &#39;paddle-checkout&#39;,
        frameInitialHeight: 366,
        frameStyle: &#39;width: 100%; background-color: transparent; border: none;&#39;
    });
&quot;&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="user-identification"></a></p><h3 id="用户识别" tabindex="-1"><a class="header-anchor" href="#用户识别" aria-hidden="true">#</a> 用户识别</h3><p>与 Stripe 相比，Paddle 用户在所有 Paddle 中都是独一无二的，而不是每个 Paddle 帐户都是独一无二的。因此，Paddle 的 API 目前不提供更新用户详细信息（例如电子邮件地址）的方法。在生成支付链接时，Paddle 使用 <code>customer_email</code> 参数识别用户。创建订阅时，Paddle 将尝试将用户提供的电子邮件与现有 Paddle 用户进行匹配。</p><p>鉴于这种行为，在使用 Cashier 和 Paddle 时需要记住一些重要的事情。首先，你应该知道，即使 Cashier 中的订阅绑定到同一个应用程序用户，<strong>它们也可能绑定到 Paddle 内部系统中的不同用户</strong>。其次，每个订阅都有自己的连接支付方式信息，并且在 Paddle 的内部系统中也可能有不同的电子邮件地址（取决于创建订阅时分配给用户的电子邮件）。</p><p>因此，在显示订阅时，你应该始终告知用户哪些电子邮件地址或付款方式信息与订阅相关联。可以使用 <code>Laravel\\Paddle\\Subscription</code> 模型提供的以下方法检索这些信息：</p><pre><code>$subscription = $user-&gt;subscription(&#39;default&#39;);

$subscription-&gt;paddleEmail();
$subscription-&gt;paymentMethod();
$subscription-&gt;cardBrand();
$subscription-&gt;cardLastFour();
$subscription-&gt;cardExpirationDate();
</code></pre><p>当前，没有办法通过 Paddle API 修改用户的电子邮件地址。当用户想在 Paddle 内更新他们的电子邮件地址时，他们唯一的方法是联系 Paddle 客户支持。在与 Paddle 沟通时，他们需要提供订阅的 <code>paddleEmail</code>，这样 Paddle 就可以更新正确的用户。</p><p><a name="prices"></a></p><h2 id="定价" tabindex="-1"><a class="header-anchor" href="#定价" aria-hidden="true">#</a> 定价</h2><p>Paddle 允许你自定义每种货币对应的价格，也就是说 Paddle 允许你为不同国家和地区配置不同的价格。Cashier Paddle 允许你使用 <code>productPrices</code> 方法检索一个特定产品的所有价格。这个方法接受你希望检索价格的产品的产品 ID：</p><pre><code>use Laravel\\Paddle\\Cashier;

$prices = Cashier::productPrices([123, 456]);
</code></pre><p>货币将根据请求的 IP 地址来确定，当然你也可以传入一个可选的国家和地区参数来检索特定国家和地区的价格：</p><pre><code>use Laravel\\Paddle\\Cashier;

$prices = Cashier::productPrices([123, 456], [&#39;customer_country&#39; =&gt; &#39;BE&#39;]);
</code></pre><p>检索出价格后，你可以根据需要显示它们：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;ul&gt;
    @foreach ($prices as $price)
        &lt;li&gt;{{ $price-&gt;product_title }} - {{ $price-&gt;price()-&gt;gross() }}&lt;/li&gt;
    @endforeach
&lt;/ul&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你也可以显示净价（不含税）并将税额显示分离：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;ul&gt;
    @foreach ($prices as $price)
        &lt;li&gt;{{ $price-&gt;product_title }} - {{ $price-&gt;price()-&gt;net() }} (+ {{ $price-&gt;price()-&gt;tax() }} tax)&lt;/li&gt;
    @endforeach
&lt;/ul&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你检索了订阅的价格，你可以分别显示其原始价格和连续订阅价格：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;ul&gt;
    @foreach ($prices as $price)
        &lt;li&gt;{{ $price-&gt;product_title }} - Initial: {{ $price-&gt;initialPrice()-&gt;gross() }} - Recurring: {{ $price-&gt;recurringPrice()-&gt;gross() }}&lt;/li&gt;
    @endforeach
&lt;/ul&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20),Y={href:"https://developer.paddle.com/api-reference/checkout-api/prices/getprices",target:"_blank",rel:"noopener noreferrer"},j=d(`<p><a name="prices-customers"></a></p><h4 id="客户" tabindex="-1"><a class="header-anchor" href="#客户" aria-hidden="true">#</a> 客户</h4><p>如果用户已经是客户并且你希望显示适用于该客户的价格，你可以通过直接从客户实例检索价格来实现：</p><pre><code>use App\\Models\\User;

$prices = User::find(1)-&gt;productPrices([123, 456]);
</code></pre><p>在内部，Cashier 将使用用户的 <a href="#customer-defaults"><code>paddleCountry</code> 方法</a> 来检索以他们的货币表示的价格。例如，居住在美国的用户将看到以美元为单位的价格，而位于比利时的用户将看到以欧元为单位的价格。如果找不到匹配的货币，则将使用产品的默认货币。你可以在 Paddle 控制面板中自定义产品或订阅计划的所有价格。</p><p><a name="prices-coupons"></a></p><h4 id="优惠券" tabindex="-1"><a class="header-anchor" href="#优惠券" aria-hidden="true">#</a> 优惠券</h4><p>你也可以展示选择优惠券后的折扣价。 在调用 <code>productPrices</code> 方法时，优惠券可以作为逗号分隔的字符串传递：</p><pre><code>use Laravel\\Paddle\\Cashier;

$prices = Cashier::productPrices([123, 456], [
    &#39;coupons&#39; =&gt; &#39;SUMMERSALE,20PERCENTOFF&#39;
]);
</code></pre><p>然后，使用 <code>price</code> 方法显示计算出的价格：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;ul&gt;
    @foreach ($prices as $price)
        &lt;li&gt;{{ $price-&gt;product_title }} - {{ $price-&gt;price()-&gt;gross() }}&lt;/li&gt;
    @endforeach
&lt;/ul&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你可以使用 <code>listPrice</code> 方法显示原价（没有优惠券折扣）：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;ul&gt;
    @foreach ($prices as $price)
        &lt;li&gt;{{ $price-&gt;product_title }} - {{ $price-&gt;listPrice()-&gt;gross() }}&lt;/li&gt;
    @endforeach
&lt;/ul&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注意：使用价格 API 时，Paddle 仅允许将优惠券应用于一次性购买的产品，而不允许应用于订阅计划。</p></blockquote><p><a name="customers"></a></p><h2 id="客户-1" tabindex="-1"><a class="header-anchor" href="#客户-1" aria-hidden="true">#</a> 客户</h2><p><a name="customer-defaults"></a></p><h3 id="客户默认值" tabindex="-1"><a class="header-anchor" href="#客户默认值" aria-hidden="true">#</a> 客户默认值</h3><p>Cashier 允许你在创建支付链接时为你的客户定义一些默认值。 设置这些默认值允许你预先填写客户的电子邮件地址、国家 / 地区和邮政编码，以便他们可以立即转到结帐小部件的付款部分。 你可以通过覆盖计费模型上的以下方法来设置这些默认值：</p><pre><code>/**
 * 获取客户的电子邮件地址以与 Paddle 关联。
 */
public function paddleEmail(): string|null
{
    return $this-&gt;email;
}

/**
 * 获取客户的国家与 Paddle 关联。
 *
 * 这需要一个 2 个字母的代码。 有关支持的国家 / 地区，请参阅以下链接。
 *
 * @link https://developer.paddle.com/reference/platform-parameters/supported-countries
 */
public function paddleCountry(): string|null
{
    // ...
}

/**
 * 获取客户的邮政编码以与 Paddle 关联。
 *
 * 有关需要此功能的国家 / 地区，请参阅以下链接。
 *
 * @link https://developer.paddle.com/reference/platform-parameters/supported-countries#countries-requiring-postcode
 */
public function paddlePostcode(): string|null
{
    // ...
}
</code></pre><p>这些默认值将用于 Cashier 中生成 <a href="#pay-links">支付链接</a> 的每个操作。</p><p><a name="subscriptions"></a></p><h2 id="订阅" tabindex="-1"><a class="header-anchor" href="#订阅" aria-hidden="true">#</a> 订阅</h2><p><a name="creating-subscriptions"></a></p><h3 id="创建订阅" tabindex="-1"><a class="header-anchor" href="#创建订阅" aria-hidden="true">#</a> 创建订阅</h3><p>要创建订阅，请首先检索计费模型的实例，该实例通常是 <code>App\\Models\\User</code> 的实例。检索模型实例后，你可以使用 <code>newSubscription</code> 方法来创建模型的订阅支付链接：</p><pre><code>use Illuminate\\Http\\Request;

Route::get(&#39;/user/subscribe&#39;, function (Request $request) {
    $payLink = $request-&gt;user()-&gt;newSubscription(&#39;default&#39;, $premium = 12345)
        -&gt;returnTo(route(&#39;home&#39;))
        -&gt;create();

    return view(&#39;billing&#39;, [&#39;payLink&#39; =&gt; $payLink]);
});
</code></pre><p>传递给 <code>newSubscription</code> 方法的第一个参数应该是订阅的名称。 如果你的应用只提供一个订阅，你可以将其称为 <code>default</code> 或 <code>primary</code>。第二个参数是用户订阅的特定计划。 该值应对应于 Paddle 中的计划标识符。<code>returnTo</code> 方法接受一个 URL，你的用户在成功完成结帐后将被重定向到该 URL。</p><p><code>create</code> 方法将创建一个支付链接，你可以使用它来生成一个支付按钮。可以使用 Cashier Paddle 附带的 <code>paddle-button</code> <a href="./blade#components">Blade 组件</a> 生成支付按钮：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;x-paddle-button :url=&quot;$payLink&quot; class=&quot;px-8 py-4&quot;&gt;
    订阅
&lt;/x-paddle-button&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用户完成结帐后，将从 Paddle 发送一个 <code>subscription_created</code> webhook。 Cashier 将收到此 webhook 并为你的客户设置订阅。为了确保你的应用程序正确接收和处理所有 webhook，请确保你正确地 <a href="#handling-paddle-webhooks">设置 webhook 处理</a>。</p><p><a name="additional-details"></a></p><h4 id="额外细节" tabindex="-1"><a class="header-anchor" href="#额外细节" aria-hidden="true">#</a> 额外细节</h4>`,33),J=e("code",null,"create",-1),V={href:"https://developer.paddle.com/api-reference/product-api/pay-links/createpaylink",target:"_blank",rel:"noopener noreferrer"},K=d(`<pre><code>$payLink = $user-&gt;newSubscription(&#39;default&#39;, $monthly = 12345)
    -&gt;returnTo(route(&#39;home&#39;))
    -&gt;create([
        &#39;vat_number&#39; =&gt; $vatNumber,
    ]);
</code></pre><p><a name="subscriptions-coupons"></a></p><h4 id="优惠券-1" tabindex="-1"><a class="header-anchor" href="#优惠券-1" aria-hidden="true">#</a> 优惠券</h4><p>如果你想在创建订阅时申请优惠券，你可以使用 <code>withCoupon</code> 方法：</p><pre><code>$payLink = $user-&gt;newSubscription(&#39;default&#39;, $monthly = 12345)
    -&gt;returnTo(route(&#39;home&#39;))
    -&gt;withCoupon(&#39;code&#39;)
    -&gt;create();
</code></pre><p><a name="metadata"></a></p><h4 id="元数据" tabindex="-1"><a class="header-anchor" href="#元数据" aria-hidden="true">#</a> 元数据</h4><p>你还可以使用 <code>withMetadata</code> 方法传递元数据数组：</p><pre><code>$payLink = $user-&gt;newSubscription(&#39;default&#39;, $monthly = 12345)
    -&gt;returnTo(route(&#39;home&#39;))
    -&gt;withMetadata([&#39;key&#39; =&gt; &#39;value&#39;])
    -&gt;create();
</code></pre><blockquote><p>注意：提供元数据时，请避免使用 <code>subscription_name</code> 作为元数据键。 此密钥保留供 Cashier 内部使用。</p></blockquote><p><a name="checking-subscription-status"></a></p><h3 id="检查订阅状态" tabindex="-1"><a class="header-anchor" href="#检查订阅状态" aria-hidden="true">#</a> 检查订阅状态</h3><p>一旦用户订阅了你的应用程序，你就可以使用各种便利的方法检查他们的订阅状态。 首先，如果用户有活动订阅，<code>subscribed</code> 方法返回 <code>true</code>，即使订阅当前处于试用期：</p><pre><code>if ($user-&gt;subscribed(&#39;default&#39;)) {
    // ...
}
</code></pre><p>该 <code>subscribed</code> 方法也非常适合 <a href="./middleware">路由中间件</a>，允许你根据用户的订阅状态来过滤对路由和控制器的访问：</p><pre><code>&lt;?php

namespace App\\Http\\Middleware;

use Closure;
use Illuminate\\Http\\Request;
use Symfony\\Component\\HttpFoundation\\Response;

class EnsureUserIsSubscribed
{
    /**
     * 处理请求。
     *
     * @param  \\Closure(\\Illuminate\\Http\\Request): (\\Symfony\\Component\\HttpFoundation\\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if ($request-&gt;user() &amp;&amp; ! $request-&gt;user()-&gt;subscribed(&#39;default&#39;)) {
            // 该用户不是付费用户。。。
            return redirect(&#39;billing&#39;);
        }

        return $next($request);
    }
}
</code></pre><p>如果你想确定用户是否仍在试用期内，你可以使用 <code>onTrial</code> 方法。这个方法用于确定是否应向用户显示他们仍在试用期的警告：</p><pre><code>if ($user-&gt;subscription(&#39;default&#39;)-&gt;onTrial()) {
    // ...
}
</code></pre><p>该 <code>subscribedToPlan</code> 方法可用于根据给定的 Paddle 计划 ID 来确定用户是否订阅了给定的计划。 在这个例子中，我们将确定用户的 <code>default</code> 订阅是否订阅了包月计划：</p><pre><code>if ($user-&gt;subscribedToPlan($monthly = 12345, &#39;default&#39;)) {
    // ...
}
</code></pre><p>通过将数组传递给 <code>subscribedToPlan</code> 方法，你可以确定用户的 <code>default</code> 订阅是订阅月度计划或是年度计划：</p><pre><code>if ($user-&gt;subscribedToPlan([$monthly = 12345, $yearly = 54321], &#39;default&#39;)) {
    // ...
}
</code></pre><p>该 <code>recurring</code> 方法可用于确定用户当前是否已订阅并且不是处于试用期：</p><pre><code>if ($user-&gt;subscription(&#39;default&#39;)-&gt;recurring()) {
    // ...
}
</code></pre><p><a name="cancelled-subscription-status"></a></p><h4 id="已取消订阅状态" tabindex="-1"><a class="header-anchor" href="#已取消订阅状态" aria-hidden="true">#</a> 已取消订阅状态</h4><p>要确定用户是否曾经是订阅者但现在已取消订阅，你可以使用 <code>cancelled</code> 方法：</p><pre><code>if ($user-&gt;subscription(&#39;default&#39;)-&gt;cancelled()) {
    // ...
}
</code></pre><p>你还可以确定用户是否已取消订阅，但在订阅完全到期之前会处于 「宽限期」。 例如，如果用户在 3 月 5 日取消原定于 3 月 10 日到期的订阅，则用户将处于「宽限期」，直到 3 月 10 日。 请注意，在此期间 <code>subscribed</code> 方法仍然返回 <code>true</code>：</p><pre><code>if ($user-&gt;subscription(&#39;default&#39;)-&gt;onGracePeriod()) {
    // ...
}
</code></pre><p>确定用户是否已取消订阅并且不处于「宽限期」内，你可以使用 <code>ended</code> 方法：</p><pre><code>if ($user-&gt;subscription(&#39;default&#39;)-&gt;ended()) {
    // ...
}
</code></pre><p><a name="past-due-status"></a></p><h4 id="逾期状态" tabindex="-1"><a class="header-anchor" href="#逾期状态" aria-hidden="true">#</a> 逾期状态</h4><p>如果订阅的付款失败，它将被标记为 <code>past_due</code>。当你的订阅处于此状态时，在客户更新其付款信息之前，它不会处于活动状态。你可以使用订阅实例上的 <code>pastDue</code> 方法来确定订阅是否过期：</p><pre><code>if ($user-&gt;subscription(&#39;default&#39;)-&gt;pastDue()) {
    // ...
}
</code></pre>`,36),X=e("a",{href:"#updating-payment-information"},"更新他们的付款信息",-1),z={href:"https://vendors.paddle.com/subscription-settings",target:"_blank",rel:"noopener noreferrer"},Z=d(`<p>如果你希望订阅在 <code>past_due</code> 时仍被视为活动，你可以使用 Cashier 提供的 <code>keepPastDueSubscriptionsActive</code> 方法。通常，此方法应在你的 <code>AppServiceProvider</code> 的 <code>register</code> 方法中调用：</p><pre><code>use Laravel\\Paddle\\Cashier;

/**
 * 注册应用服务。
 */
public function register(): void
{
    Cashier::keepPastDueSubscriptionsActive();
}
</code></pre><blockquote><p>注意：当订阅处于 <code>past_due</code> 状态时，在付款信息更新之前无法更改。 因此，当订阅处于 <code>past_due</code> 状态时，<code>swap</code> 和 <code>updateQuantity</code> 方法将抛出异常。</p></blockquote><p><a name="subscription-scopes"></a></p><h4 id="订阅范围" tabindex="-1"><a class="header-anchor" href="#订阅范围" aria-hidden="true">#</a> 订阅范围</h4><p>大多数订阅状态也可用作查询范围，以便你可以轻松查询数据库中处于给定状态的订阅：</p><pre><code>// 获取所有有效订阅。。。
$subscriptions = Subscription::query()-&gt;active()-&gt;get();

// 获取给定用户的所有已取消订阅。。。
$subscriptions = $user-&gt;subscriptions()-&gt;cancelled()-&gt;get();
</code></pre><p>可用范围的完整列表如下：</p><pre><code>Subscription::query()-&gt;active();
Subscription::query()-&gt;onTrial();
Subscription::query()-&gt;notOnTrial();
Subscription::query()-&gt;pastDue();
Subscription::query()-&gt;recurring();
Subscription::query()-&gt;ended();
Subscription::query()-&gt;paused();
Subscription::query()-&gt;notPaused();
Subscription::query()-&gt;onPausedGracePeriod();
Subscription::query()-&gt;notOnPausedGracePeriod();
Subscription::query()-&gt;cancelled();
Subscription::query()-&gt;notCancelled();
Subscription::query()-&gt;onGracePeriod();
Subscription::query()-&gt;notOnGracePeriod();
</code></pre><p><a name="subscription-single-charges"></a></p><h3 id="订阅单次收费" tabindex="-1"><a class="header-anchor" href="#订阅单次收费" aria-hidden="true">#</a> 订阅单次收费</h3><p>订阅单次收费允许你在订阅的基础上向订阅者收取一次性费用：</p><pre><code>$response = $user-&gt;subscription(&#39;default&#39;)-&gt;charge(12.99, &#39;Support Add-on&#39;);
</code></pre><p>与 <a href="#single-charges">单一费用</a> 相比，此方法将立即向客户存储的订阅付款方式收费。 收费金额应始终以订阅的货币定义。</p><p><a name="updating-payment-information"></a></p><h3 id="更新付款信息" tabindex="-1"><a class="header-anchor" href="#更新付款信息" aria-hidden="true">#</a> 更新付款信息</h3><p>Paddle 始终为每个订阅保存一种付款方式。 如果要更新订阅的默认付款方式，则应首先使用订阅模型上的 <code>updateUrl</code> 方法生成订阅 「更新 URL」：</p><pre><code>use App\\Models\\User;

$user = User::find(1);

$updateUrl = $user-&gt;subscription(&#39;default&#39;)-&gt;updateUrl();
</code></pre><p>然后，你可以将生成的 URL 与 Cashier 提供的 <code>paddle-button</code> Blade 组件结合使用，以允许用户启动 Paddle 小部件并更新他们的付款信息：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>x-paddle-button</span> <span class="token attr-name">:url</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>$updateUrl<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>px-8 py-4<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    更新付款信息
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>x-paddle-button</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当用户更新完他们的信息后，Paddle 将发送一个 <code>subscription_updated</code> webhook，订阅详细信息将在你的应用数据库中更新。</p><p><a name="changing-plans"></a></p><h3 id="改变计划" tabindex="-1"><a class="header-anchor" href="#改变计划" aria-hidden="true">#</a> 改变计划</h3><p>用户订阅你的应用程序后，他们可能偶尔想要更改为新的订阅计划。 要为用户更新订阅计划时，你应该将 Paddle 计划的标识符传递给订阅的 <code>swap</code> 方法：</p><pre><code>use App\\Models\\User;

$user = User::find(1);

$user-&gt;subscription(&#39;default&#39;)-&gt;swap($premium = 34567);
</code></pre><p>如果你想变更计划并立即为用户开具发票，而不是等待他们的下一个计费周期，你可以使用 <code>swapAndInvoice</code> 方法：</p><pre><code>$user = User::find(1);

$user-&gt;subscription(&#39;default&#39;)-&gt;swapAndInvoice($premium = 34567);
</code></pre>`,27),ee={href:"https://developer.paddle.com/api-reference/subscription-api/users/updateuser#usage-notes",target:"_blank",rel:"noopener noreferrer"},ae=d(`<p><a name="prorations"></a></p><h4 id="按比例分配" tabindex="-1"><a class="header-anchor" href="#按比例分配" aria-hidden="true">#</a> 按比例分配</h4><p>默认情况下，Paddle 在计划变更时按比例分配费用。 <code>noProrate</code> 方法可用于在不按比例分配费用的情况下更新订阅：</p><pre><code>$user-&gt;subscription(&#39;default&#39;)-&gt;noProrate()-&gt;swap($premium = 34567);
</code></pre><p><a name="subscription-quantity"></a></p><h3 id="订阅数量" tabindex="-1"><a class="header-anchor" href="#订阅数量" aria-hidden="true">#</a> 订阅数量</h3><p>有时订阅会受到 「数量」的影响。例如，项目管理应用可能对每个项目每月收费 10 美元。 要增加或减少订阅数量，请使用 <code>incrementQuantity</code> 和 <code>decrementQuantity</code> 方法：</p><pre><code>$user = User::find(1);

$user-&gt;subscription(&#39;default&#39;)-&gt;incrementQuantity();

// 订阅增加 5 个。。。
$user-&gt;subscription(&#39;default&#39;)-&gt;incrementQuantity(5);

$user-&gt;subscription(&#39;default&#39;)-&gt;decrementQuantity();

// 订阅减少 5 个。。。
$user-&gt;subscription(&#39;default&#39;)-&gt;decrementQuantity(5);
</code></pre><p>或者，你以使用 <code>updateQuantity</code> 方法设置特定数量：</p><pre><code>$user-&gt;subscription(&#39;default&#39;)-&gt;updateQuantity(10);
</code></pre><p>该 <code>noProrate</code> 方法可用于更新订阅数量而不按比例分配费用：</p><pre><code>$user-&gt;subscription(&#39;default&#39;)-&gt;noProrate()-&gt;updateQuantity(10);
</code></pre><p><a name="subscription-modifiers"></a></p><h3 id="订阅修改器" tabindex="-1"><a class="header-anchor" href="#订阅修改器" aria-hidden="true">#</a> 订阅修改器</h3>`,14),ne={href:"https://developer.paddle.com/guides/how-tos/subscriptions/metered-billing#using-subscription-price-modifiers",target:"_blank",rel:"noopener noreferrer"},se=d(`<p>例如，你可能想为标准订阅提供 「高级支持」附加组件。 你可以像这样创建这个修改器：</p><pre><code>$modifier = $user-&gt;subscription(&#39;default&#39;)-&gt;newModifier(12.99)-&gt;create();
</code></pre><p>The example above will add a $12.99 add-on to the subscription. By default, this charge will recur on every interval you have configured for the subscription. If you would like, you can add a readable description to the modifier using the modifier&#39;s <code>description</code> method: 上例将向订阅添加 $12.99 的附加组件。默认情况下，此费用将在你为订阅配置的每个时间周期内重复收取。 如果你愿意，可以使用修改器的 <code>description</code> 方法向修改器添加可读的描述：</p><pre><code>$modifier = $user-&gt;subscription(&#39;default&#39;)-&gt;newModifier(12.99)
    -&gt;description(&#39;Premium Support&#39;)
    -&gt;create();
</code></pre><p>为了说明如何使用修改器实现计量计费，假设你的应用程序要对用户发送的每条 SMS 消息收费。首先，你应该在 Paddle 仪表板中创建一个 $0 的计划。 用户订阅此计划后，你可以向订阅添加代表每个单独费用的修改器：</p><pre><code>$modifier = $user-&gt;subscription(&#39;default&#39;)-&gt;newModifier(0.99)
    -&gt;description(&#39;New text message&#39;)
    -&gt;oneTime()
    -&gt;create();
</code></pre><p>如你所见，我们在创建此调节器时调用了 <code>oneTime</code> 方法。此方法将确保修改器只收费一次，并且不会在每个计费周期重复。</p><p><a name="retrieving-modifiers"></a></p><h4 id="检索修改器" tabindex="-1"><a class="header-anchor" href="#检索修改器" aria-hidden="true">#</a> 检索修改器</h4><p>你可以通过 <code>modifiers</code> 方法检索订阅的所有修改器列表：</p><pre><code>$modifiers = $user-&gt;subscription(&#39;default&#39;)-&gt;modifiers();

foreach ($modifiers as $modifier) {
    $modifier-&gt;amount(); // $0.99
    $modifier-&gt;description; // 新的短信。
}
</code></pre><p><a name="deleting-modifiers"></a></p><h4 id="删除修改器" tabindex="-1"><a class="header-anchor" href="#删除修改器" aria-hidden="true">#</a> 删除修改器</h4><p>修改器可以通过调用 <code>Laravel\\Paddle\\Modifier</code> 实例上的 <code>delete</code> 方法来删除：</p><pre><code>$modifier-&gt;delete();
</code></pre><p><a name="multiple-subscriptions"></a></p><h3 id="多个订阅" tabindex="-1"><a class="header-anchor" href="#多个订阅" aria-hidden="true">#</a> 多个订阅</h3><p>Paddle 允许你的客户同时拥有多个订阅。例如，你可能经营一家健身房，提供游泳订阅和举重订阅，每个订阅可能有不同的定价。当然，客户应该能够订阅其中一项或两项计划。</p><p>当你的应用程序创建订阅时，你可以向 <code>newSubscription</code> 方法提供订阅的名称。该名称可以是表示用户正在发起的订阅类型的任何字符串：</p><pre><code>use Illuminate\\Http\\Request;

Route::post(&#39;/swimming/subscribe&#39;, function (Request $request) {
    $request-&gt;user()
        -&gt;newSubscription(&#39;swimming&#39;, $swimmingMonthly = 12345)
        -&gt;create($request-&gt;paymentMethodId);

    // ...
});
</code></pre><p>在本例中，我们为客户发起了每月一次的游泳订阅。然而，他们可能想在以后换成每年订阅一次。当调整客户的订阅时，我们可以简单地交换<code>游泳</code>订阅的价格：</p><pre><code>$user-&gt;subscription(&#39;swimming&#39;)-&gt;swap($swimmingYearly = 34567);
</code></pre><p>当然，你也可以完全取消订阅：</p><pre><code>$user-&gt;subscription(&#39;swimming&#39;)-&gt;cancel();
</code></pre><p><a name="pausing-subscriptions"></a></p><h3 id="暂停订阅" tabindex="-1"><a class="header-anchor" href="#暂停订阅" aria-hidden="true">#</a> 暂停订阅</h3><p>要暂停订阅，请调用用户订阅的 <code>pause</code> 方法：</p><pre><code>$user-&gt;subscription(&#39;default&#39;)-&gt;pause();
</code></pre><p>当订阅暂停时，Cashier 将自动在你的数据库中设置 <code>paused_from</code> 列。此列用于确定 <code>paused</code> 方法何时应该开始返回 <code>true</code>。例如，如果客户在 3 月 1 日暂停订阅，但该订阅直到 3 月 5 日才计划重复发生，则 <code>paused</code> 方法将继续返回 <code>false</code> ，直到 3 月 5 日。这样做是因为用户可以继续使用应用程序，直到他们的计费周期结束。</p><p>你可以使用 <code>onPausedGracePeriod</code> 方法确定用户是否已暂停订阅但仍处于 「宽限期」：</p><pre><code>if ($user-&gt;subscription(&#39;default&#39;)-&gt;onPausedGracePeriod()) {
    // ...
}
</code></pre><p>要恢复暂停的订阅，你可以调用用户订阅的 <code>unpause</code> 方法：</p><pre><code>$user-&gt;subscription(&#39;default&#39;)-&gt;unpause();
</code></pre><blockquote><p>注意：订阅暂停时无法修改。 如果你想切换到不同的计划或更新数量，你必须先恢复订阅。</p></blockquote><p><a name="cancelling-subscriptions"></a></p><h3 id="取消订阅" tabindex="-1"><a class="header-anchor" href="#取消订阅" aria-hidden="true">#</a> 取消订阅</h3><p>要取消订阅，请调用用户订阅的 <code>cancel</code> 方法：</p><pre><code>$user-&gt;subscription(&#39;default&#39;)-&gt;cancel();
</code></pre><p>当订阅被取消时，Cashier 将自动在你的数据库中设置 <code>ends_at</code> 列。 此列用于确定 <code>subscribed</code> 方法应该何时开始返回 <code>false</code>。例如，如果客户在 3 月 1 日取消订阅，但订阅计划在 3 月 5 日之前结束，则 <code>subscribed</code> 方法将在 3 月 5 日之前继续返回 <code>true</code>。这样做是因为通常允许用户继续使用应用程序，直到他们的计费周期结束。</p><p>你可以使用 <code>onGracePeriod</code> 方法确定用户是否已取消订阅但仍处于「宽限期」：</p><pre><code>if ($user-&gt;subscription(&#39;default&#39;)-&gt;onGracePeriod()) {
    // ...
}
</code></pre><p>如果你想立即取消订阅，你可以调用用户订阅的 <code>cancelNow</code> 方法：</p><pre><code>$user-&gt;subscription(&#39;default&#39;)-&gt;cancelNow();
</code></pre><blockquote><p>注意：取消后无法恢复 Paddle 的订阅。 如果你的客户希望恢复订阅，则他们必须重新订阅。</p></blockquote><p><a name="subscription-trials"></a></p><h2 id="订阅试用" tabindex="-1"><a class="header-anchor" href="#订阅试用" aria-hidden="true">#</a> 订阅试用</h2><p><a name="with-payment-method-up-front"></a></p><h3 id="预先收集付费方式" tabindex="-1"><a class="header-anchor" href="#预先收集付费方式" aria-hidden="true">#</a> 预先收集付费方式</h3><blockquote><p>注意：在预先试用和收集付款方式详细信息时，Paddle 会阻止任何订阅更改，例如更换计划或更新数量。 如果你想允许客户在试用期间更换计划，则必须取消并重新创建订阅。</p></blockquote><p>如果你想为你的客户提供试用期，同时仍然预先收集付款方式信息，你应该在创建订阅付款链接时使用 <code>trialDays</code> 方法：</p><pre><code>use Illuminate\\Http\\Request;

Route::get(&#39;/user/subscribe&#39;, function (Request $request) {
    $payLink = $request-&gt;user()-&gt;newSubscription(&#39;default&#39;, $monthly = 12345)
                -&gt;returnTo(route(&#39;home&#39;))
                -&gt;trialDays(10)
                -&gt;create();

    return view(&#39;billing&#39;, [&#39;payLink&#39; =&gt; $payLink]);
});
</code></pre><p>此方法将在你的应用数据库中的订阅记录上设置试用期结束日期，并指示 Paddle 在此日期之后才开始向客户收费。</p><blockquote><p>注意：如果客户的订阅未在试用结束日期之前取消，他们将在试用到期后立即收费，因此你务必将试用结束日期通知你的用户。</p></blockquote><p>你可以使用用户实例的 <code>onTrial</code> 方法或订阅实例的 <code>onTrial</code> 方法来确定用户是否在试用期内。 下面的两个例子是一样的：</p><pre><code>if ($user-&gt;onTrial(&#39;default&#39;)) {
    // ...
}

if ($user-&gt;subscription(&#39;default&#39;)-&gt;onTrial()) {
    // ...
}
</code></pre><p>要确定试用期是否已过期，你可以使用 <code>hasExpiredTrial</code> 方法：</p><pre><code>if ($user-&gt;hasExpiredTrial(&#39;default&#39;)) {
    // ...
}

if ($user-&gt;subscription(&#39;default&#39;)-&gt;hasExpiredTrial()) {
    // ...
}
</code></pre><p><a name="defining-trial-days-in-paddle-cashier"></a></p><h4 id="在-paddle-cashier-中定义试用天数" tabindex="-1"><a class="header-anchor" href="#在-paddle-cashier-中定义试用天数" aria-hidden="true">#</a> 在 Paddle / Cashier 中定义试用天数</h4><p>你可以选择在 Paddle 仪表板中定义你的计划接收的试用天数，或者始终使用 Cashier 明确传递它们。如果你选择在 Paddle 中定义计划的试用天数，你应该知道新订阅，包括过去订阅过的客户的新订阅，将始终获得试用期，除非你明确调用 <code>trialDays(0)</code> 方法。</p><p><a name="without-payment-method-up-front"></a></p><h3 id="未预先收集付款方式" tabindex="-1"><a class="header-anchor" href="#未预先收集付款方式" aria-hidden="true">#</a> 未预先收集付款方式</h3><p>如果你想提供试用期而不预先收集用户的付款方式信息，你可以将附加到你的用户的客户记录上的 <code>trial_ends_at</code> 列设置为你想要的试用结束日期。这通常在用户注册期间完成：</p><pre><code>use App\\Models\\User;

$user = User::create([
    // ...
]);

$user-&gt;createAsCustomer([
    &#39;trial_ends_at&#39; =&gt; now()-&gt;addDays(10)
]);
</code></pre><p>Cashier 将这种类型的试用称为「通用试用」，因为它不附属于任何现有订阅。如果当前日期未超过 <code>trial_ends_at</code> 的值，则 <code>User</code> 实例上的 <code>onTrial</code> 方法将返回 <code>true</code>：</p><pre><code>if ($user-&gt;onTrial()) {
    // 用户在试用期内。。。
}
</code></pre><p>一旦你准备好为用户创建一个实际的订阅，你可以像往常一样使用 <code>newSubscription</code> 方法：</p><pre><code>use Illuminate\\Http\\Request;

Route::get(&#39;/user/subscribe&#39;, function (Request $request) {
    $payLink = $user-&gt;newSubscription(&#39;default&#39;, $monthly = 12345)
        -&gt;returnTo(route(&#39;home&#39;))
        -&gt;create();

    return view(&#39;billing&#39;, [&#39;payLink&#39; =&gt; $payLink]);
});
</code></pre><p>要检索用户的试用结束日期，你可以使用 <code>trialEndsAt</code> 方法。如果用户正在试用，则此方法将返回一个 Carbon 日期实例，否则将返回 <code>null</code> 。如果你想获取特定订阅而不是默认订阅的试用结束日期，你还可以传递一个可选的订阅名称参数：</p><pre><code>if ($user-&gt;onTrial()) {
    $trialEndsAt = $user-&gt;trialEndsAt(&#39;main&#39;);
}
</code></pre><p>如果你希望明确知道用户处于 「通用」试用期内并且尚未创建实际订阅，则可以使用 <code>onGenericTrial</code> 方法：</p><pre><code>if ($user-&gt;onGenericTrial()) {
    // 用户在通用试用期内。。。
}
</code></pre><blockquote><p>注意：创建 Paddle 订阅后，无法延长或修改其试用期。</p></blockquote><p><a name="handling-paddle-webhooks"></a></p><h2 id="处理-paddle-webhooks" tabindex="-1"><a class="header-anchor" href="#处理-paddle-webhooks" aria-hidden="true">#</a> 处理 Paddle Webhooks</h2><p>Paddle 可以通过 webhook 通知你的应用各种事件。默认情况下，指向 Cashier 的 webhook 控制器的路由由 Cashier 服务提供商注册。 该控制器将处理所有传入的 webhook 请求。</p>`,76),de={href:"https://vendors.paddle.com/subscription-settings",target:"_blank",rel:"noopener noreferrer"},te={href:"https://vendors.paddle.com/alerts-webhooks",target:"_blank",rel:"noopener noreferrer"},re=e("code",null,"/paddle/webhook",-1),ie=d(`<ul><li>订阅创建</li><li>订阅更新</li><li>订阅取消</li><li>付款成功</li><li>订阅付款成功</li></ul><blockquote><p>注意：确保使用 Cashier 包含的 <a href="./cashier-paddle#verifying-webhook-signatures">webhook 签名验证</a> 中间件保护传入请求。</p></blockquote><p><a name="webhooks-csrf-protection"></a></p><h4 id="webhook-和-csrf-保护" tabindex="-1"><a class="header-anchor" href="#webhook-和-csrf-保护" aria-hidden="true">#</a> Webhook 和 CSRF 保护</h4><p>由于 Paddle webhooks 需要绕过 Laravel 的 <a href="./csrf">CSRF 保护</a>，请务必在你的 <code>App\\Http\\Middleware\\VerifyCsrfToken</code> 中间件中将 URI 作为例外列出或列出外面的路由 <code>web</code> 中间件组的：</p><pre><code>protected $except = [
    &#39;paddle/*&#39;,
];
</code></pre><p><a name="webhooks-local-development"></a></p><h4 id="webhook-和本地开发" tabindex="-1"><a class="header-anchor" href="#webhook-和本地开发" aria-hidden="true">#</a> Webhook 和本地开发</h4>`,8),oe={href:"https://ngrok.com/",target:"_blank",rel:"noopener noreferrer"},le={href:"https://expose.dev/docs/introduction",target:"_blank",rel:"noopener noreferrer"},ce=e("a",{href:"./sail"},"Laravel Sail",-1),pe=e("a",{href:"./sail#sharing-your-site"},"站点共享命令",-1),ue=d(`<p><a name="defining-webhook-event-handlers"></a></p><h3 id="定义-webhook-事件处理程序" tabindex="-1"><a class="header-anchor" href="#定义-webhook-事件处理程序" aria-hidden="true">#</a> 定义 webhook 事件处理程序</h3><p>Cashier 会自动处理因收费失败和其他常见的 paddle webhook 取消订阅。 但是，如果你有其他想要处理的 webhook 事件，你可以通过监听 Cashier 调度的以下事件来实现：</p><ul><li><code>Laravel\\Paddle\\Events\\WebhookReceived</code></li><li><code>Laravel\\Paddle\\Events\\WebhookHandled</code></li></ul><p>这两个事件都包含 Paddle webhook 的完整负载。例如，如果你想处理 <code>invoice.payment_succeeded</code> webhook，你可以注册一个 <a href="./events#defining-listeners">listener</a> 来处理事件：</p><pre><code>&lt;?php

namespace App\\Listeners;

use Laravel\\Paddle\\Events\\WebhookReceived;

class PaddleEventListener
{
    /**
     * 处理收到的 Paddle webhook。
     */
    public function handle(WebhookReceived $event): void
    {
        if ($event-&gt;payload[&#39;alert_name&#39;] === &#39;payment_succeeded&#39;) {
            // 处理传入事件。。。
        }
    }
}
</code></pre><p>一旦你的监听器被定义，你可以在你的应用程序的 <code>EventServiceProvider</code> 中注册它：</p><pre><code>&lt;?php

namespace App\\Providers;

use App\\Listeners\\PaddleEventListener;
use Illuminate\\Foundation\\Support\\Providers\\EventServiceProvider as ServiceProvider;
use Laravel\\Paddle\\Events\\WebhookReceived;

class EventServiceProvider extends ServiceProvider
{
    protected $listen = [
        WebhookReceived::class =&gt; [
            PaddleEventListener::class,
        ],
    ];
}
</code></pre><p>Cashier 还会发出专用于接收到的 webhook 类型的事件。除了来自 Paddle 的完整有效负载之外，它们还包含用于处理 webhook 的相关模型，例如计费模型、订阅或收据：</p>`,9),he=e("div",{class:"content-list",markdown:"1"},[e("ul",null,[e("li",null,[e("code",null,"Laravel\\Paddle\\Events\\PaymentSucceeded")]),e("li",null,[e("code",null,"Laravel\\Paddle\\Events\\SubscriptionPaymentSucceeded")]),e("li",null,[e("code",null,"Laravel\\Paddle\\Events\\SubscriptionCreated")]),e("li",null,[e("code",null,"Laravel\\Paddle\\Events\\SubscriptionUpdated")]),e("li",null,[e("code",null,"Laravel\\Paddle\\Events\\SubscriptionCancelled")])])],-1),be=d(`<p>你还可以通过在应用程序的 <code>.env</code> 文件中定义 <code>CASHIER_WEBHOOK</code> 环境变量来覆盖默认的内置 webhook 路由。此值应该是你的 webhook 路由中的完整 URL，并且需要和你在 Paddle 控制面板中设置的 URL 相匹配：</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token key attr-name">CASHIER_WEBHOOK</span><span class="token punctuation">=</span><span class="token value attr-value">https://example.com/my-paddle-webhook-url</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="verifying-webhook-signatures"></a></p><h3 id="验证-webhook-签名" tabindex="-1"><a class="header-anchor" href="#验证-webhook-签名" aria-hidden="true">#</a> 验证 Webhook 签名</h3>`,4),ge={href:"https://developer.paddle.com/webhook-reference/verifying-webhooks",target:"_blank",rel:"noopener noreferrer"},me=d(`<p>要启用 webhook 验证，请确保在应用程序的 .env 文件中定义了<code>PADDLE_PUBLIC_KEY</code> 环境变量。 可以从你的 Paddle 帐户仪表板中检索公钥。</p><p><a name="single-charges"></a></p><h2 id="一次性收费" tabindex="-1"><a class="header-anchor" href="#一次性收费" aria-hidden="true">#</a> 一次性收费</h2><p><a name="simple-charge"></a></p><h3 id="简单收费" tabindex="-1"><a class="header-anchor" href="#简单收费" aria-hidden="true">#</a> 简单收费</h3><p>如果你想对客户进行一次性收费，你可以在可计费模型实例上使用 <code>charge</code> 方法来生成收费的支付链接。<code>charge</code> 方法接受费用金额（浮点数）作为它的第一个参数和一个费用描述作为它的第二个参数：</p><pre><code>use Illuminate\\Http\\Request;

Route::get(&#39;/store&#39;, function (Request $request) {
    return view(&#39;store&#39;, [
        &#39;payLink&#39; =&gt; $user-&gt;charge(12.99, &#39;Action Figure&#39;)
    ]);
});
</code></pre><p>生成支付链接后，你可以使用 Cashier 提供的 <code>paddle-button</code> Blade 组件让用户启动 Paddle 小部件并完成收费：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;x-paddle-button :url=&quot;$payLink&quot; class=&quot;px-8 py-4&quot;&gt;
    Buy
&lt;/x-paddle-button&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),ve=e("code",null,"charge",-1),fe={href:"https://developer.paddle.com/api-reference/product-api/pay-links/createpaylink",target:"_blank",rel:"noopener noreferrer"},ke=d(`<pre><code>$payLink = $user-&gt;charge(12.99, &#39;Action Figure&#39;, [
    &#39;custom_option&#39; =&gt; $value,
]);
</code></pre><p>费用以 <code>cashier.currency</code> 配置选项中指定的货币进行。 默认设置是美元。 你可以通过在应用程序的 <code>.env</code> 文件中定义 <code>CASHIER_CURRENCY</code> 环境变量来覆盖默认货币：</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token key attr-name">CASHIER_CURRENCY</span><span class="token punctuation">=</span><span class="token value attr-value">EUR</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,3),Pe={href:"https://developer.paddle.com/api-reference/product-api/pay-links/createpaylink#price-overrides",target:"_blank",rel:"noopener noreferrer"},_e=d(`<pre><code>$payLink = $user-&gt;charge([
    &#39;USD:19.99&#39;,
    &#39;EUR:15.99&#39;,
], &#39;Action Figure&#39;);
</code></pre><p><a name="charging-products"></a></p><h3 id="收费产品" tabindex="-1"><a class="header-anchor" href="#收费产品" aria-hidden="true">#</a> 收费产品</h3><p>如果你想对 Paddle 中配置的特定产品进行一次性收费，你可以在计费模型实例上使用 <code>chargeProduct</code> 方法来生成付款链接：</p><pre><code>use Illuminate\\Http\\Request;

Route::get(&#39;/store&#39;, function (Request $request) {
    return view(&#39;store&#39;, [
        &#39;payLink&#39; =&gt; $request-&gt;user()-&gt;chargeProduct($productId = 123)
    ]);
});
</code></pre><p>然后，你可以提供 <code>paddle-button</code> 组件的支付链接，以允许用户初始化 Paddle 小部件：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>&lt;x-paddle-button :url=&quot;$payLink&quot; class=&quot;px-8 py-4&quot;&gt;
    购买
&lt;/x-paddle-button&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),$e=e("code",null,"chargeProduct",-1),ye={href:"https://developer.paddle.com/api-reference/product-api/pay-links/createpaylink",target:"_blank",rel:"noopener noreferrer"},qe=d(`<pre><code>$payLink = $user-&gt;chargeProduct($productId, [
    &#39;custom_option&#39; =&gt; $value,
]);
</code></pre><p><a name="refunding-orders"></a></p><h3 id="退款订单" tabindex="-1"><a class="header-anchor" href="#退款订单" aria-hidden="true">#</a> 退款订单</h3><p>如果你需要对桨订单进行退款，你可以使用 <code>refund</code> 方法。 此方法接受 Paddle 订单 ID 作为其第一个参数。 你可以使用 <code>receipts</code> 方法检索给定计费模型的收据：</p><pre><code>use App\\Models\\User;

$user = User::find(1);

$receipt = $user-&gt;receipts()-&gt;first();

$refundRequestId = $user-&gt;refund($receipt-&gt;order_id);
</code></pre><p>你可以选择指定具体的退款金额以及退款原因：</p><pre><code>$receipt = $user-&gt;receipts()-&gt;first();

$refundRequestId = $user-&gt;refund(
    $receipt-&gt;order_id, 5.00, &#39;Unused product time&#39;
);
</code></pre><blockquote><p>技巧：联系 Paddle 支持时，你可以使用 <code>$refundRequestId</code> 作为退款参考。</p></blockquote><p><a name="receipts"></a></p><h2 id="收据" tabindex="-1"><a class="header-anchor" href="#收据" aria-hidden="true">#</a> 收据</h2><p>你可以通过 <code>receipts</code> 属性轻松检索可计费模型的收据数组：</p><p>use App\\Models\\User;</p><pre><code>use App\\Models\\User;

$user = User::find(1);

$receipts = $user-&gt;receipts;
</code></pre><p>在为客户列出收据时，你可以使用收据实例的方法来显示相关的收据信息。 例如，你可能希望在表格中列出每张收据，以便用户轻松下载任何收据：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>table</span><span class="token punctuation">&gt;</span></span>
    @foreach ($receipts as $receipt)
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>{{ $receipt-&gt;paid_at-&gt;toFormattedDateString() }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>{{ $receipt-&gt;amount() }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{ $receipt-&gt;receipt_url }}<span class="token punctuation">&quot;</span></span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>_blank<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Download<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span>
    @endforeach
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>table</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="past-and-upcoming-payments"></a></p><h3 id="过去和未来的付款" tabindex="-1"><a class="header-anchor" href="#过去和未来的付款" aria-hidden="true">#</a> 过去和未来的付款</h3><p>你可以使用 <code>lastPayment</code> 和 <code>nextPayment</code> 方法来检索和显示客户过去或即将进行的定期订阅付款：</p><pre><code>use App\\Models\\User;

$user = User::find(1);

$subscription = $user-&gt;subscription(&#39;default&#39;);

$lastPayment = $subscription-&gt;lastPayment();
$nextPayment = $subscription-&gt;nextPayment();
</code></pre><p>这两种方法都会返回一个 <code>Laravel\\Paddle\\Payment</code> 的实例； 但是，当计费周期结束时（例如取消订阅时），<code>nextPayment</code> 将返回 <code>null</code>：</p><div class="language-blade line-numbers-mode" data-ext="blade"><pre class="language-blade"><code>Next payment: {{ $nextPayment-&gt;amount() }} due on {{ $nextPayment-&gt;date()-&gt;format(&#39;d/m/Y&#39;) }}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a name="handling-failed-payments"></a></p><h2 id="处理失败的付款" tabindex="-1"><a class="header-anchor" href="#处理失败的付款" aria-hidden="true">#</a> 处理失败的付款</h2>`,23),xe={href:"https://vendors.paddle.com/subscription-settings",target:"_blank",rel:"noopener noreferrer"},we={href:"https://developer.paddle.com/webhook-reference/subscription-alerts/subscription-payment-failed",target:"_blank",rel:"noopener noreferrer"},Ce=e("code",null,"subscription_payment_failed",-1),Le=d(`<pre><code>&lt;?php

namespace App\\Listeners;

use Laravel\\Paddle\\Events\\WebhookReceived;

class PaddleEventListener
{
    /**
     * 处理订阅付款失败。
     */
    public function handle(WebhookReceived $event): void
    {
        if ($event-&gt;payload[&#39;alert_name&#39;] === &#39;subscription_payment_failed&#39;) {
            // 处理订阅付款失败。。。
        }
    }
}
</code></pre><p>一旦定义了监听器，就得在应用程序的 <code>EventServiceProvider</code> 中注册它：</p><pre><code>&lt;?php

namespace App\\Providers;

use App\\Listeners\\PaddleEventListener;
use Illuminate\\Foundation\\Support\\Providers\\EventServiceProvider as ServiceProvider;
use Laravel\\Paddle\\Events\\WebhookReceived;

class EventServiceProvider extends ServiceProvider
{
    protected $listen = [
        WebhookReceived::class =&gt; [
            PaddleEventListener::class,
        ],
    ];
}
</code></pre><p><a name="testing"></a></p><h2 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h2><p>在测试时，你应该手动测试你的计费流程，以确保你的集成按预期工作。</p><p>对于自动化测试，包括在 CI 环境中执行的测试，你可以使用 <a href="./http-client#testing">Laravel 的 HTTP 客户端</a> 来伪造对 Paddle 的 HTTP 调用。 尽管这不会测试来自 Paddle 的实际响应，但它确实提供了一种无需实际调用 Paddle API 即可测试你应用程序的方法。</p>`,7);function Se(t,Re){const n=i("ExternalLinkIcon");return o(),l("div",null,[u,e("p",null,[e("a",h,[a("Laravel Cashier Paddle"),s(n)]),a(" 为 "),e("a",b,[a("Paddle's"),s(n)]),a(" 订阅计费服务提供了一个富有表现力、流畅的界面。它几乎能够处理所有你所恐惧的各种订阅计费逻辑和代码。除了基本的订阅管理，Cashier 还可以处理：优惠券、交换订阅、订阅「数量」、取消宽限期等。")]),e("p",null,[a("在使用 Cashier 时，推荐你回顾一下 Paddle 的"),e("a",g,[a("用户手册"),s(n)]),a(" and "),e("a",m,[a("API 文档"),s(n)]),a("。")]),v,f,e("p",null,[a("当升级到一个新版本的 Cashier 时，推荐仔细回顾下 "),e("a",k,[a("升级指南"),s(n)]),a(" 这非常重要。")]),P,e("p",null,[a("在本地和预发布开发环境中，应该 "),e("a",_,[a("注册一个 Paddle 沙盒账号"),s(n)]),a("。这个账号将为你提供一个沙盒环境来测试和开发你的应用，而不会产生真实的交易。你也许会使用 Paddle 的 "),e("a",$,[a("测试卡号"),s(n)]),a(" 来模拟各种交易场景。")]),y,e("p",null,[a("在你已经完成你的应用开发之后，你也许会 "),e("a",q,[a("申请一个 Paddle 正式账号"),s(n)]),a(" 。 在你的应用程序投入生产环境之前，Paddle 需要批准你的应用程序的域。")]),x,e("p",null,[a("除了配置 Cashier 的货币之外，你还可以指定在格式化货币值以显示在发票上时要使用的区域。Cashier 内部利用 "),e("a",w,[a("PHP 的 NumberFormatter 类"),s(n)]),a("来设置货币区域：")]),C,e("p",null,[a("Paddle 缺乏广泛的 CRUD API 来执行订阅状态更改。因此，与 Paddle 的大多数交互都是通过其 "),e("a",L,[a("结帐小部件"),s(n)]),a(" 完成的。在使用结账小部件之前，我们必须使用 Cashier 生成一个 「支付链接」。 「支付链接」将通知结账小部件我们希望执行的计费操作：")]),S,e("p",null,[a("有关支付链接的更多信息，你可以查看 "),e("a",R,[a("有关支付链接生成的 Paddle API 文档"),s(n)]),a("。")]),E,A,U,I,D,T,e("pre",null,[e("code",null,'<a href="#!" class="ml-4 paddle_button" data-override="'+c(t.$payLink)+`">
    Paddle 支付
</a>
`,1)]),M,e("p",null,[a("请参阅 Paddle 的 "),e("a",B,[a("Inline Checkout 指南"),s(n)]),a(" 以及他们的 "),e("a",H,[a("参数参考"),s(n)]),a(" 以获取有关内联结帐可用选项的更多详细信息。")]),N,W,O,F,e("p",null,[a("接下来，你可以使用 Paddle.js 来初始化结帐。 为了让这个例子简单，我们将使用 "),e("a",G,[a("Alpine.js"),s(n)]),a(" 来演示； 但是，你可以自由地将此示例转换为你自己的前端技术栈：")]),Q,e("p",null,[a("更多相关信息，请 "),e("a",Y,[a("查看 Paddle 的价格 API 文档"),s(n)]),a("。")]),j,e("p",null,[a("如果你想指定额外的客户或订阅详细信息，你可以通过将它们作为键 / 值对数组传递给 "),J,a(" 方法来实现。要了解有关 Paddle 支持的其他字段的更多信息，请查看 Paddle 关于 "),e("a",V,[a("生成支付链接"),s(n)]),a(" 的文档：")]),K,e("p",null,[a("当订阅过期时，你应该指示用户 "),X,a("。 你可以在 "),e("a",z,[a("Paddle 订阅设置"),s(n)]),a(" 中配置逾期订阅的处理方式。")]),Z,e("blockquote",null,[e("p",null,[a("注意：试用活动期间不能变更计划。有关此限制的更多信息，请参阅 "),e("a",ee,[a("Paddle 文档"),s(n)]),a("。")])]),ae,e("p",null,[a("订阅修改器允许你实施 "),e("a",ne,[a("按量计费"),s(n)]),a(" 或使用附加组件扩展订阅。")]),se,e("p",null,[a("默认情况下，此控制器将自动处理付费失败过多的取消订阅（"),e("a",de,[a("由你的 Paddle 订阅设置定义"),s(n)]),a("）、订阅更新和付款方式更改；但是，我们很快就会发现，你可以扩展这个控制器来处理你喜欢的任何 Paddle webhook 事件。")]),e("p",null,[a("为确保你的应用可以处理 Paddle webhooks，请务必 "),e("a",te,[a("在 Paddle 控制面板中配置 webhook URL"),s(n)]),a("。默认情况下，Cashier 的 webhook 控制器响应 "),re,a(" URL 路径。你应该在 Paddle 控制面板中启用的所有 webhook 的完整列表是：")]),ie,e("p",null,[a("为了让 Paddle 能够在本地开发期间发送你的应用程序 webhook，你需要通过站点共享服务公开你的应用程序，例如 "),e("a",oe,[a("Ngrok"),s(n)]),a(" 或 "),e("a",le,[a("Expose"),s(n)]),a("。如果你使用 "),ce,a(" 在本地开发应用程序，你可以使用 Sail 的 "),pe,a("。")]),ue,he,be,e("p",null,[a("为了保护你的 webhook，你可以使用 "),e("a",ge,[a("Paddle 的 webhook 签名"),s(n)]),a("。 为方便起见，Cashier 自动包含一个中间件，用于验证传入的 Paddle webhook 请求是否有效。")]),me,e("p",null,[ve,a(" 方法接受一个数组作为其第三个参数，允许你将任何你希望的选项传递给底层 Paddle 支付链接创建。请查阅 "),e("a",fe,[a("Paddle 文档"),s(n)]),a(" 了解更多关于创建费用时可用的选项：")]),ke,e("p",null,[a("你还可以使用 Paddle 的动态定价匹配系统 "),e("a",Pe,[a("覆盖每种货币的价格"),s(n)]),a("。为此，请通过价格数组而不是固定金额：")]),_e,e("p",null,[$e,a(" 方法接受一个数组作为其第二个参数，允许你将任何你希望的选项传递给底层 Paddle 支付链接创建。 请查阅 "),e("a",ye,[a("Paddle 文档"),s(n)]),a(" 关于创建费用时可用的选项：")]),qe,e("p",null,[a("订阅支付失败的原因有多种，例如卡过期或卡资金不足。 发生这种情况时，我们建议你让 Paddle 为你处理付款失败。具体来说，你可以在你的 Paddle 仪表板中 "),e("a",xe,[a("设置 Paddle 的自动计费电子邮件"),s(n)])]),e("p",null,[a("或者，你可以通过捕获 "),e("a",we,[Ce,s(n)]),a(" webhook 并启用 “订阅付款失败” 来执行更精确的自定义 Paddle 仪表板的 Webhook 设置中的选项：")]),Le])}const Ue=r(p,[["render",Se],["__file","cashier-paddle.html.vue"]]);export{Ue as default};
