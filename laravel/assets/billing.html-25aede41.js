import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as c,c as r,b as e,d as n,e as s,a as t}from"./app-06635a3b.js";const i={},d=t('<h1 id="laravel-cashier-stripe" tabindex="-1"><a class="header-anchor" href="#laravel-cashier-stripe" aria-hidden="true">#</a> Laravel Cashier (Stripe)</h1><ul><li><a href="#introduction">简介</a></li><li><a href="#upgrading-cashier">升级 Cashier</a></li><li><a href="#installation">安装</a><ul><li><a href="#database-migrations">数据库迁移</a></li></ul></li><li><a href="#configuration">配置信息</a><ul><li><a href="#billable-model">计费模型</a></li><li><a href="#api-keys">API 密钥</a></li><li><a href="#currency-configuration">货币配置</a></li><li><a href="#tax-configuration">税务配置</a></li><li><a href="#logging">日志</a></li><li><a href="#using-custom-models">使用自定义模型</a></li></ul></li><li><a href="#customers">消费者</a><ul><li><a href="#retrieving-customers">获取消费者</a></li><li><a href="#creating-customers">创建消费者</a></li><li><a href="#updating-customers">更新消费者</a></li><li><a href="#balances">余额</a></li><li><a href="#tax-ids">税号</a></li><li><a href="#syncing-customer-data-with-stripe">使用 Stripe 同步客户数据</a></li><li><a href="#billing-portal">计费门户</a></li></ul></li><li><a href="#payment-methods">支付方式</a><ul><li><a href="#storing-payment-methods">存储支付方式</a></li><li><a href="#retrieving-payment-methods">检索支付方式</a></li><li><a href="#check-for-a-payment-method">判断用户是否有支付方式</a></li><li><a href="#updating-the-default-payment-method">更新默认支付方式</a></li><li><a href="#adding-payment-methods">添加支付方式</a></li><li><a href="#deleting-payment-methods">删除支付方式</a></li></ul></li><li><a href="#subscriptions">订阅内容</a><ul><li><a href="#creating-subscriptions">创建订阅</a></li><li><a href="#checking-subscription-status">检查订阅状态</a></li><li><a href="#changing-prices">修改价格</a></li><li><a href="#subscription-quantity">订阅数量</a></li><li><a href="#subscriptions-with-multiple-products">多个产品的订阅</a></li><li><a href="#multiprice-subscriptions">多方案订阅计划</a></li><li><a href="#metered-billing">计量计费</a></li><li><a href="#subscription-taxes">订阅税</a></li><li><a href="#subscription-anchor-date">订阅锚定日期</a></li><li><a href="#cancelling-subscriptions">取消订阅</a></li><li><a href="#resuming-subscriptions">恢复订阅</a></li></ul></li><li><a href="#subscription-trials">订阅试用</a><ul><li><a href="#with-payment-method-up-front">预先使用付款方式</a></li><li><a href="#without-payment-method-up-front">没有预先付款方式</a></li><li><a href="#extending-trials">延长试用期</a></li></ul></li><li><a href="#handling-stripe-webhooks">处理 Stripe Webhooks</a><ul><li><a href="#defining-webhook-event-handlers">定义 Webhook 事件处理器</a></li><li><a href="#verifying-webhook-signatures">验证 Webhook 签名</a></li></ul></li><li><a href="#single-charges">单次收费</a><ul><li><a href="#simple-charge">基本使用</a></li><li><a href="#charge-with-invoice">带发票的支付</a></li><li><a href="#creating-payment-intents">创建支付意向</a></li><li><a href="#refunding-charges">退款</a></li></ul></li><li><a href="#checkout">结账</a><ul><li><a href="#product-checkouts">产品结账</a></li><li><a href="#single-charge-checkouts">单次支付结账</a></li><li><a href="#subscription-checkouts">订阅结账</a></li><li><a href="#collecting-tax-ids">收集税号</a></li><li><a href="#guest-checkouts">访客结账</a></li></ul></li><li><a href="#invoices">发票</a><ul><li><a href="#retrieving-invoices">获取发票</a></li><li><a href="#upcoming-invoices">即将发布的发票</a></li><li><a href="#previewing-subscription-invoices">预览订阅发票</a></li><li><a href="#generating-invoice-pdfs">生成发票 PDF</a></li></ul></li><li><a href="#handling-failed-payments">处理支付失败</a></li><li><a href="#strong-customer-authentication">强大的客户身份验证 (SCA)</a><ul><li><a href="#payments-requiring-additional-confirmation">需要额外确认的支付</a></li><li><a href="#off-session-payment-notifications">非会话支付通知</a></li></ul></li><li><a href="#stripe-sdk">Stripe SDK</a></li><li><a href="#testing">测试</a></li></ul><p><a name="introduction"></a></p><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2>',4),l={href:"https://github.com/laravel/cashier-stripe",target:"_blank",rel:"noopener noreferrer"},u={href:"https://stripe.com",target:"_blank",rel:"noopener noreferrer"},h=e("p",null,[e("a",{name:"upgrading-cashier"})],-1),k=e("h2",{id:"升级-cashier",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#升级-cashier","aria-hidden":"true"},"#"),n(" 升级 Cashier")],-1),m={href:"https://github.com/laravel/cashier-stripe/blob/master/UPGRADE.",target:"_blank",rel:"noopener noreferrer"},g=t(`<blockquote><p><strong>注意</strong> 为了防止破坏性变更，Cashier 使用固定的 Stripe API 版本。 Cashier 14 使用 Stripe API 版本 <code>2022-11-15</code> 。Stripe API 版本将在次要版本上更新，以利用新的 Stripe 功能和改进。</p></blockquote><p><a name="installation"></a></p><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><p>首先，使用 Composer 为 Stripe 安装 Cashier 扩展包：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">composer</span> require laravel/cashier
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p><strong>注意</strong> 为确保 Cashier 正确处理所有 Stripe 事件，请记得<a href="#handling-stripe-webhooks">设置 Cashier 的 webhook</a>。</p></blockquote><p><a name="database-migrations"></a></p><h3 id="数据库迁移" tabindex="-1"><a class="header-anchor" href="#数据库迁移" aria-hidden="true">#</a> 数据库迁移</h3><p>Cashier 的服务提供器注册了自己的数据库迁移目录，因此请记住在安装此包后迁移数据库。Cashier 迁移将向 <code>users</code> 表中添加多个列，并创建一个新的 <code>subscriptions</code> 表来保存客户的所有订阅：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan migrate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果需要覆盖 Cashier 附带的迁移，可以使用 <code>vendor:publish</code> Artisan 命令发布它们：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan vendor:publish <span class="token parameter variable">--tag</span><span class="token operator">=</span><span class="token string">&quot;cashier-migrations&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果你想阻止 Cashier 的迁移完全运行，可以使用 Cashier 提供的<code>ignoreMigrations</code> 方法。通常应在 <code>AppServiceProvider</code> 类的 <code>register</code> 方法中调用此方法：</p><pre><code>use Laravel\\Cashier\\Cashier;

/**
 * 注册任何应用程序服务。
 *
 */
public function register(): void
{
    Cashier::ignoreMigrations();
}
</code></pre>`,14),b=e("strong",null,"注意",-1),v=e("code",null,"stripe_id",-1),f=e("code",null,"utf8_bin",-1),_={href:"https://stripe.com/docs/upgrades#what-changes-does-stripe-consider-to-be-backwards-compatible",target:"_blank",rel:"noopener noreferrer"},y=t(`<p><a name="configuration"></a></p><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><p><a name="billable-model"></a></p><h3 id="订单模型" tabindex="-1"><a class="header-anchor" href="#订单模型" aria-hidden="true">#</a> 订单模型</h3><p>在使用 Cashier 之前，需要将 <code>Billable</code> trait 添加到可订单模型定义中。通常会放在 <code>App\\Models\\User</code> 模型中。这个特性提供了多个方法以便执行常用支付任务，如创建订阅、应用优惠券和更新支付方法信息：</p><pre><code>use Laravel\\Cashier\\Billable;

class User extends Authenticatable
{
    use Billable;
}
</code></pre><p>Cashier 默认假设你的 Billable 模型是 Laravel 自带的 <code>App\\Models\\User</code> 类。如果需要修改可以在 <code>useCustomerModel</code> 方法定义一个不同的模型。通常此方法在 <code>AppServiceProvider</code> 类的<code>boot</code>方法中被调用：</p><pre><code>use App\\Models\\Cashier\\User;
use Laravel\\Cashier\\Cashier;

/**
 * 引导任何应用程序服务。
 */
public function boot(): void
{
    Cashier::useCustomerModel(User::class);
}
</code></pre><blockquote><p><strong>注意</strong> 如果你使用的不是 Laravel 自带的 <code>App\\Models\\User</code> 模型，需要发布并修改默认的 <a href="#installation">Cashier 迁移</a>文件以匹配你使用模型对应的表名。</p></blockquote><p><a name="api-keys"></a></p><h3 id="api-秘钥" tabindex="-1"><a class="header-anchor" href="#api-秘钥" aria-hidden="true">#</a> API 秘钥</h3><p>接下来需要在 <code>.env</code> 文件中配置 Stripe 秘钥，可以在 Stripe 后台控制面板中获取Stripe API 秘钥：</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token key attr-name">STRIPE_KEY</span><span class="token punctuation">=</span><span class="token value attr-value">your-stripe-key</span>
<span class="token key attr-name">STRIPE_SECRET</span><span class="token punctuation">=</span><span class="token value attr-value">your-stripe-secret</span>
<span class="token key attr-name">STRIPE_WEBHOOK_SECRET</span><span class="token punctuation">=</span><span class="token value attr-value">your-stripe-webhook-secret</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>注意</strong> 你应该确保在应用程序的<code>.env</code>文件中定义了<code>STRIPE_WEBHOOK_SECRET</code>环境变量，因为该变量用于确保传入的 Webhook 确实来自 Stripe。</p></blockquote><p><a name="currency-configuration"></a></p><h3 id="货币配置" tabindex="-1"><a class="header-anchor" href="#货币配置" aria-hidden="true">#</a> 货币配置</h3><p>Cashier 默认货币是美元 (USD)，可以在 <code>.env</code> 中设置 <code>CASHIER_CURRENCY</code> 环境变量来修改默认的货币配置：</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token key attr-name">CASHIER_CURRENCY</span><span class="token punctuation">=</span><span class="token value attr-value">eur</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,18),S={href:"https://www.php.net/manual/en/class.numberformatter.php",target:"_blank",rel:"noopener noreferrer"},$=e("code",null,"NumberFormatter",-1),q=t(`<div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token key attr-name">CASHIER_CURRENCY_LOCALE</span><span class="token punctuation">=</span><span class="token value attr-value">nl_BE</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p><strong>注意</strong> 为了使用本地化配置而不是 <code>en</code>，需要确保安装了 PHP <code>ext-intl</code> PHP 扩展并在服务器上启用配置。</p></blockquote><p><a name="tax-configuration"></a></p><h3 id="税务配置" tabindex="-1"><a class="header-anchor" href="#税务配置" aria-hidden="true">#</a> 税务配置</h3>`,4),C={href:"https://stripe.com/tax",target:"_blank",rel:"noopener noreferrer"},w=e("code",null,"App\\Providers\\AppServiceProvider",-1),x=e("code",null,"boot",-1),I=e("code",null,"calculateTaxes",-1),P=t(`<pre><code>use Laravel\\Cashier\\Cashier;

/**
 * 引导任何应用程序服务。
 */
public function boot(): void
{
    Cashier::calculateTaxes();
}
</code></pre><p>启动税务计算后，任何新订阅和生成的一次性发票都会进行自动税务计算。</p><p>为了使这个功能正常使用，客户的账单明细中例如客户姓名、住址、发票 ID 需要同步到 Stripe。你可以使用 Cashier 提供的<a href="#syncing-customer-data-with-stripe">客户数据同步</a>和 <a href="#tax-ids">Tax ID</a> 方法来完成此操作。</p><blockquote><p><strong>注意</strong> 对于<a href="#single-charges">单次收费</a>或<a href="#single-charge-checkouts">单次支付结账</a>，不支持计算税费。</p></blockquote><p><a name="logging"></a></p><h3 id="日志" tabindex="-1"><a class="header-anchor" href="#日志" aria-hidden="true">#</a> 日志</h3><p>Cashier 允许你指定日志通道来记录所有与 Stripe 相关的异常。可以通过在 <code>.env</code> 中配置 <code>CASHIER_LOGGER</code> 来指定：</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token key attr-name">CASHIER_LOGGER</span><span class="token punctuation">=</span><span class="token value attr-value">stack</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>对 Stripe 的 API 调用生成的异常将通过应用程序的默认日志通道记录。</p><p><a name="using-custom-models"></a></p><h3 id="使用自定义模型" tabindex="-1"><a class="header-anchor" href="#使用自定义模型" aria-hidden="true">#</a> 使用自定义模型</h3><p>你可以通过定义自己的模型并扩展相应的 <code>Cashier</code> 模型来自由扩展 Cashier 内部的模型，增加一些方法：</p><pre><code>use Laravel\\Cashier\\Subscription as CashierSubscription;

class Subscription extends CashierSubscription
{
    // ...
}
</code></pre><p>定义模型后，可以通过 <code>Laravel\\Cashier\\Cashier</code> 类配置 Cashier 使用自定义的模型。通常还需要在 <code>App\\Providers\\AppServiceProvider</code> 类的 <code>boot</code> 中注册一下：</p><pre><code>use App\\Models\\Cashier\\Subscription;
use App\\Models\\Cashier\\SubscriptionItem;

/**
 * 引导任何应用程序服务。
 */
public function boot(): void
{
    Cashier::useSubscriptionModel(Subscription::class);
    Cashier::useSubscriptionItemModel(SubscriptionItem::class);
}
</code></pre><p><a name="customers"></a></p><h2 id="消费者" tabindex="-1"><a class="header-anchor" href="#消费者" aria-hidden="true">#</a> 消费者</h2><p><a name="retrieving-customers"></a></p><h3 id="获取消费者" tabindex="-1"><a class="header-anchor" href="#获取消费者" aria-hidden="true">#</a> 获取消费者</h3><p>你可以使用 <code>Cashier::findBillable</code> 方法通过 Stripe ID 查询消费者信息。该方法返回的是一个 billable 模型实例：</p><pre><code>use Laravel\\Cashier\\Cashier;

$user = Cashier::findBillable($stripeId);
</code></pre><p><a name="creating-customers"></a></p><h3 id="创建客户" tabindex="-1"><a class="header-anchor" href="#创建客户" aria-hidden="true">#</a> 创建客户</h3><p>有时，你可能希望在不开始订阅的情况下创建一个 Stripe 客户。 你可以使用 <code>createAsStripeCustomer</code> 方法完成此操作：</p><pre><code>$stripeCustomer = $user-&gt;createAsStripeCustomer();
</code></pre>`,25),R=e("code",null,"$options",-1),M={href:"https://stripe.com/docs/api/customers/create",target:"_blank",rel:"noopener noreferrer"},A=t(`<pre><code>$stripeCustomer = $user-&gt;createAsStripeCustomer($options);
</code></pre><p>如果你想为计费模型返回 Stripe 客户对象，你可以使用 <code>asStripeCustomer</code> 方法：</p><pre><code>$stripeCustomer = $user-&gt;asStripeCustomer();
</code></pre><p>如果你想为给定的计费模型检索 Stripe 客户对象，但不确定该计费模型是否已经是 Stripe 中的客户，则可以使用 createOrGetStripeCustomer 方法。 如果尚不存在，此方法将在 Stripe 中创建一个新客户：</p><pre><code>$stripeCustomer = $user-&gt;createOrGetStripeCustomer();
</code></pre><p><a name="updating-customers"></a></p><h3 id="更新客户" tabindex="-1"><a class="header-anchor" href="#更新客户" aria-hidden="true">#</a> 更新客户</h3>`,7),E=e("code",null,"updateStripeCustomer",-1),T={href:"https://stripe.com/docs/api/customers/update",target:"_blank",rel:"noopener noreferrer"},D=t(`<pre><code>$stripeCustomer = $user-&gt;updateStripeCustomer($options);
</code></pre><p><a name="balances"></a></p><h3 id="余额" tabindex="-1"><a class="header-anchor" href="#余额" aria-hidden="true">#</a> 余额</h3><p>Stripe 允许你贷记或借记客户的「余额」。 稍后，此余额将在新发票上贷记或借记。 要检查客户的总余额，你可以使用计费模型上提供的「余额」方法。 <code>balance</code> 方法将返回以客户货币表示的余额的格式化字符串表示形式：</p><pre><code>$balance = $user-&gt;balance();
</code></pre><p>要记入客户的余额，可以为该 <code>creditBalance</code> 方法提供一个值。如果你愿意，还可以提供描述：</p><pre><code>$user-&gt;creditBalance(500, &#39;Premium customer top-up.&#39;);
</code></pre><p>为该方法提供一个值 <code>debitBalance</code> 将从客户的余额中扣除：</p><pre><code>$user-&gt;debitBalance(300, &#39;Bad usage penalty.&#39;);
</code></pre><p><code>applyBalance</code> 方法会创建一条客户余额流水记录。可以通过调用 <code>balanceTransactions</code> 方法获取余额交易记录，这有助于提供借记或贷记记录给客户查看：</p><pre><code>// 检索所有交易...
$transactions = $user-&gt;balanceTransactions();

foreach ($transactions as $transaction) {
    // 交易量...
    $amount = $transaction-&gt;amount(); // $2.31

    // 在可用的情况下检索相关发票...
    $invoice = $transaction-&gt;invoice();
}
</code></pre><p><a name="tax-ids"></a></p><h3 id="税号" tabindex="-1"><a class="header-anchor" href="#税号" aria-hidden="true">#</a> 税号</h3>`,13),U=e("code",null,"taxIds",-1),L=e("code",null,"taxIds",-1),H={href:"https://stripe.com/docs/api/customer_tax_ids/object",target:"_blank",rel:"noopener noreferrer"},B=e("pre",null,[e("code",null,`$taxIds = $user->taxIds();
`)],-1),j=e("p",null,"你还可以通过标识符检索客户的特定税号：",-1),N=e("pre",null,[e("code",null,`$taxId = $user->findTaxId('txi_belgium');
`)],-1),F=e("code",null,"createTaxId",-1),O={href:"https://stripe.com/docs/api/customer_tax_ids/object#tax_id_object-type",target:"_blank",rel:"noopener noreferrer"},W=e("pre",null,[e("code",null,`$taxId = $user->createTaxId('eu_vat', 'BE0123456789');
`)],-1),G=e("code",null,"createTaxId",-1),Q={href:"https://stripe.com/docs/invoicing/customer/tax-ids#validation",target:"_blank",rel:"noopener noreferrer"},K=e("code",null,"customer.tax_id.updated",-1),Y={href:"https://stripe.com/docs/api/customer_tax_ids/object#tax_id_object-verification",target:"_blank",rel:"noopener noreferrer"},V=e("code",null,"verification",-1),z=e("a",{href:"#handling-stripe-webhooks"},"有关定义 webhook 处理程序的文档",-1),J=t(`<p>你可以使用 <code>deleteTaxId</code> 方法删除税号：</p><pre><code>$user-&gt;deleteTaxId(&#39;txi_belgium&#39;);
</code></pre><p><a name="syncing-customer-data-with-stripe"></a></p><h3 id="使用-stripe-同步客户数据" tabindex="-1"><a class="header-anchor" href="#使用-stripe-同步客户数据" aria-hidden="true">#</a> 使用 Stripe 同步客户数据</h3><p>通常，当你的应用程序的用户更新他们的姓名、电子邮件地址或其他也由 Stripe 存储的信息时，你应该通知 Stripe 更新。 这样一来，Stripe 的信息副本将与你的应用程序同步。</p><p>要自动执行此操作，你可以在计费模型上定义一个事件侦听器，以响应模型的<code>updated</code> 事件。然后，在你的事件监听器中，你可以在模型上调用 <code>syncStripeCustomerDetails</code> 方法：</p><pre><code>use App\\Models\\User;
use function Illuminate\\Events\\queueable;

/**
 * 模型的「引导」方法。
 */
protected static function booted(): void
{
    static::updated(queueable(function (User $customer) {
        if ($customer-&gt;hasStripeId()) {
            $customer-&gt;syncStripeCustomerDetails();
        }
    }));
}
</code></pre><p>现在，每次更新你的客户模型时，其信息都会与 Stripe 同步。 为方便起见，Cashier 会在初始创建客户时自动将你客户的信息与 Stripe 同步。</p><p>你可以通过覆盖 Cashier 提供的各种方法来自定义用于将客户信息同步到 Stripe 的列。 例如，当 Cashier 将客户信息同步到 Stripe 时，你可以重写 <code>stripeName</code> 方法来自定义应该被视为客户「姓名」的属性：</p><pre><code>/**
 * 获取应同步到 Stripe 的客户名称。
 */
public function stripeName(): string|null
{
    return $this-&gt;company_name;
}
</code></pre>`,10),X=e("code",null,"stripeEmail",-1),Z=e("code",null,"stripePhone",-1),ee=e("code",null,"stripeAddress",-1),ne={href:"https://stripe.com/docs/api/customers/update",target:"_blank",rel:"noopener noreferrer"},ae=e("code",null,"syncStripeCustomerDetails",-1),se=e("p",null,[e("a",{name:"billing-portal"})],-1),te=e("h3",{id:"订单入口",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#订单入口","aria-hidden":"true"},"#"),n(" 订单入口")],-1),oe={href:"https://stripe.com/docs/billing/subscriptions/customer-portal",target:"_blank",rel:"noopener noreferrer"},pe=e("code",null,"redirectToBillingPortal",-1),ce=t(`<pre><code>use Illuminate\\Http\\Request;

Route::get(&#39;/billing-portal&#39;, function (Request $request) {
    return $request-&gt;user()-&gt;redirectToBillingPortal();
});
</code></pre><p>默认情况下，当用户完成对订阅的管理后，会将能够通过 Stripe 计费门户中的链接返回到应用的 home 路由，你可以通过传递 URL 作为 <code>redirectToBillingPortal</code> 方法的参数来自定义用户返回的 URL：</p><pre><code>use Illuminate\\Http\\Request;

Route::get(&#39;/billing-portal&#39;, function (Request $request) {
    return $request-&gt;user()-&gt;redirectToBillingPortal(route(&#39;billing&#39;));
});
</code></pre><p>如果你只想要生成订单入口的 URL，可以使用 <code>billingPortalUrl</code> 方法：</p><pre><code>$url = $request-&gt;user()-&gt;billingPortalUrl(route(&#39;billing&#39;));
</code></pre><p><a name="payment-methods"></a></p><h2 id="支付方式" tabindex="-1"><a class="header-anchor" href="#支付方式" aria-hidden="true">#</a> 支付方式</h2><p><a name="storing-payment-methods"></a></p><h3 id="存储支付方式" tabindex="-1"><a class="header-anchor" href="#存储支付方式" aria-hidden="true">#</a> 存储支付方式</h3><p>为了使用 Stripe 创建订阅或者进行「一次性」支付，你需要存储支付方法并从 Stripe 中获取对应的标识符。这种方式可用于实现你是否计划使用这个支付方法进行订阅还是单次收费，下面我们分别来介绍这两种方法。</p><p><a name="payment-methods-for-subscriptions"></a></p><h4 id="订阅付款方式" tabindex="-1"><a class="header-anchor" href="#订阅付款方式" aria-hidden="true">#</a> 订阅付款方式</h4><p>当存储客户的信用卡信息以备将来订阅使用时，必须使用 Stripe「Setup Intents」API 来安全地收集客户的支付方式详细信息。 「Setup Intent」向 Stripe 指示向客户的付款方式收费的目的。 Cashier 的 <code>Billable</code> 特性包括 <code>createSetupIntent</code> 方法，可轻松创建新的设置目的。 你应该从将呈现收集客户付款方式详细信息的表单的路由或控制器调用此方法：</p><pre><code>return view(&#39;update-payment-method&#39;, [
    &#39;intent&#39; =&gt; $user-&gt;createSetupIntent()
]);
</code></pre><p>创建设置目的并将其传递给视图后，你应该将其秘密附加到将收集付款方式的元素。 例如，考虑这个「更新付款方式」表单：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>card-holder-name<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- Stripe 元素占位符 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>card-element<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>card-button<span class="token punctuation">&quot;</span></span> <span class="token attr-name">data-secret</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{ $intent-&gt;client_secret }}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    更新付款方式
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),re={href:"https://stripe.com/docs/stripe-js",target:"_blank",rel:"noopener noreferrer"},ie=t(`<div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://js.stripe.com/v3/<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">const</span> stripe <span class="token operator">=</span> <span class="token function">Stripe</span><span class="token punctuation">(</span><span class="token string">&#39;stripe-public-key&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> elements <span class="token operator">=</span> stripe<span class="token punctuation">.</span><span class="token function">elements</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> cardElement <span class="token operator">=</span> elements<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token string">&#39;card&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    cardElement<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#card-element&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),de={href:"https://stripe.com/docs/js/setup_intents/confirm_card_setup",target:"_blank",rel:"noopener noreferrer"},le=e("code",null,"confirmCardSetup",-1),ue=t(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> cardHolderName <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;card-holder-name&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> cardButton <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;card-button&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> clientSecret <span class="token operator">=</span> cardButton<span class="token punctuation">.</span>dataset<span class="token punctuation">.</span>secret<span class="token punctuation">;</span>

cardButton<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> setupIntent<span class="token punctuation">,</span> error <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> stripe<span class="token punctuation">.</span><span class="token function">confirmCardSetup</span><span class="token punctuation">(</span>
        clientSecret<span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">payment_method</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">card</span><span class="token operator">:</span> cardElement<span class="token punctuation">,</span>
                <span class="token literal-property property">billing_details</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> cardHolderName<span class="token punctuation">.</span>value <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 向用户显示「error.message」...</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">// 卡已验证成功...</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="订阅付款方式-1" tabindex="-1"><a class="header-anchor" href="#订阅付款方式-1" aria-hidden="true">#</a> 订阅付款方式</h4><p>存储客户的银行卡信息以备将来订阅时使用，必须使用 Stripe「Setup Intents」API 来安全地收集客户的支付方式详细信息。 「设置意图」 向Stripe 指示向客户的付款方式收费的目的。 Cashier 的 <code>Billable</code> 特性包括 <code>createSetupIntent</code> 方法，可轻松创建新的设置意图。你应该从路由或控制器调用此方法，该路由或控制器将呈现收集客户付款方法详细信息的表单:</p><pre><code>return view(&#39;update-payment-method&#39;, [
    &#39;intent&#39; =&gt; $user-&gt;createSetupIntent()
]);
</code></pre><p>创建设置意图并将其传递给视图后，你应该将其秘密附加到将收集付款方式的元素。 例如，考虑这个「更新付款方式」表单:</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>card-holder-name<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- Stripe 元素占位符 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>card-element<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>card-button<span class="token punctuation">&quot;</span></span> <span class="token attr-name">data-secret</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{ $intent-&gt;client_secret }}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    更新付款方式
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),he={href:"https://stripe.com/docs/stripe-js",target:"_blank",rel:"noopener noreferrer"},ke=t(`<div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://js.stripe.com/v3/<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">const</span> stripe <span class="token operator">=</span> <span class="token function">Stripe</span><span class="token punctuation">(</span><span class="token string">&#39;stripe-public-key&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> elements <span class="token operator">=</span> stripe<span class="token punctuation">.</span><span class="token function">elements</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> cardElement <span class="token operator">=</span> elements<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token string">&#39;card&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    cardElement<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#card-element&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),me={href:"https://stripe.com/docs/js/setup_intents/confirm_card_setup",target:"_blank",rel:"noopener noreferrer"},ge=e("code",null,"confirmCardSetup",-1),be=t(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> cardHolderName <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;card-holder-name&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> cardButton <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;card-button&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> clientSecret <span class="token operator">=</span> cardButton<span class="token punctuation">.</span>dataset<span class="token punctuation">.</span>secret<span class="token punctuation">;</span>

cardButton<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> setupIntent<span class="token punctuation">,</span> error <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> stripe<span class="token punctuation">.</span><span class="token function">confirmCardSetup</span><span class="token punctuation">(</span>
        clientSecret<span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">payment_method</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">card</span><span class="token operator">:</span> cardElement<span class="token punctuation">,</span>
                <span class="token literal-property property">billing_details</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> cardHolderName<span class="token punctuation">.</span>value <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 向用户显示「error.message」...</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">// 该银行卡已验证成功...</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>银行卡通过 Stripe 验证后，你可以将生成的 <code>setupIntent.payment_method</code> 标识符传递给你的 Laravel 应用程序，在那里它可以附加到客户。 付款方式可以<a href="#adding-payment-methods">添加为新付款方式</a>或<a href="#updating-the-default-payment-method">用于更新默认付款方式</a>。 你还可以立即使用付款方式标识符来<a href="#creating-subscriptions">创建新订阅</a>。</p>`,2),ve=e("strong",null,"技巧",-1),fe=e("br",null,null,-1),_e={href:"https://stripe.com/docs/payments/save-and-reuse#php",target:"_blank",rel:"noopener noreferrer"},ye=t(`<p><a name="payment-methods-for-single-charges"></a></p><h4 id="单笔费用的支付方式" tabindex="-1"><a class="header-anchor" href="#单笔费用的支付方式" aria-hidden="true">#</a> 单笔费用的支付方式</h4><p>当然，在针对客户的支付方式进行单笔收费时，我们只需要使用一次支付方式标识符。 由于 Stripe 的限制，你不能使用客户存储的默认付款方式进行单笔收费。 你必须允许客户使用 Stripe.js 库输入他们的付款方式详细信息。 例如，考虑以下形式：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>card-holder-name<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- Stripe 元素占位符 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>card-element<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>card-button<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    处理付款
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),Se={href:"https://stripe.com/docs/stripe-js",target:"_blank",rel:"noopener noreferrer"},$e=t(`<div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://js.stripe.com/v3/<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">const</span> stripe <span class="token operator">=</span> <span class="token function">Stripe</span><span class="token punctuation">(</span><span class="token string">&#39;stripe-public-key&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> elements <span class="token operator">=</span> stripe<span class="token punctuation">.</span><span class="token function">elements</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> cardElement <span class="token operator">=</span> elements<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token string">&#39;card&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    cardElement<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#card-element&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),qe={href:"https://stripe.com/docs/stripe-js/reference#stripe-create-payment",target:"_blank",rel:"noopener noreferrer"},Ce=e("code",null,"createPaymentMethod",-1),we=t(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> cardHolderName <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;card-holder-name&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> cardButton <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;card-button&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

cardButton<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> paymentMethod<span class="token punctuation">,</span> error <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> stripe<span class="token punctuation">.</span><span class="token function">createPaymentMethod</span><span class="token punctuation">(</span>
        <span class="token string">&#39;card&#39;</span><span class="token punctuation">,</span> cardElement<span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">billing_details</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> cardHolderName<span class="token punctuation">.</span>value <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 向用户显示「error.message」...</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">// 卡已验证成功...</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>银行卡通过 Stripe 验证后，你可以将生成的 <code>setupIntent.payment_method</code> 标识符传递给你的 Laravel 应用程序，在那里它可以附加到客户。付款方式可以<a href="#adding-payment-methods">添加为新付款方式</a>或<a href="#updating-the-default-payment-method">用于更新默认付款方式</a>。 你还可以立即使用付款方式标识符来<a href="#creating-subscriptions">创建新订阅</a>。</p>`,2),xe=e("strong",null,"笔记",-1),Ie={href:"https://stripe.com/docs/payments/save-and-reuse#php",target:"_blank",rel:"noopener noreferrer"},Pe=t(`<p><a name="payment-methods-for-single-charges"></a></p><h4 id="单笔费用的支付方式-1" tabindex="-1"><a class="header-anchor" href="#单笔费用的支付方式-1" aria-hidden="true">#</a> 单笔费用的支付方式</h4><p>当然，在针对客户的支付方式进行单笔收费时，我们只需要使用一次支付方式标识符。 由于 Stripe 的限制，你不能使用客户存储的默认付款方式进行单笔收费。 你必须允许客户使用 Stripe.js 库输入他们的付款方式详细信息。 例如，考虑以下形式：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>card-holder-name<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- Stripe 元素占位符 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>card-element<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>card-button<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    付款流程
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),Re={href:"https://stripe.com/docs/stripe-js",target:"_blank",rel:"noopener noreferrer"},Me=t(`<div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://js.stripe.com/v3/<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">const</span> stripe <span class="token operator">=</span> <span class="token function">Stripe</span><span class="token punctuation">(</span><span class="token string">&#39;stripe-public-key&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> elements <span class="token operator">=</span> stripe<span class="token punctuation">.</span><span class="token function">elements</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> cardElement <span class="token operator">=</span> elements<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token string">&#39;card&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    cardElement<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#card-element&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),Ae={href:"https://stripe.com/docs/stripe-js/reference#stripe-create-payment-method",target:"_blank",rel:"noopener noreferrer"},Ee=e("code",null,"createPaymentMethod",-1),Te=t(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> cardHolderName <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;card-holder-name&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> cardButton <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;card-button&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

cardButton<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> paymentMethod<span class="token punctuation">,</span> error <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> stripe<span class="token punctuation">.</span><span class="token function">createPaymentMethod</span><span class="token punctuation">(</span>
        <span class="token string">&#39;card&#39;</span><span class="token punctuation">,</span> cardElement<span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">billing_details</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> cardHolderName<span class="token punctuation">.</span>value <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 向用户显示「error.message」...</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">// 该银行卡已验证成功...</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果卡验证成功，你可以将 <code>paymentMethod.id</code> 传递给你的 Laravel 应用程序并处理<a href="#simple-charge">单次收费</a>。</p><p><a name="retrieving-payment-methods"></a></p><h3 id="检索付款方式" tabindex="-1"><a class="header-anchor" href="#检索付款方式" aria-hidden="true">#</a> 检索付款方式</h3><p>计费模型实例上的 <code>paymentMethods</code> 方法返回 <code>Laravel\\Cashier\\PaymentMethod</code> 实例的集合：</p><pre><code>$paymentMethods = $user-&gt;paymentMethods();
</code></pre><p>默认情况下，此方法将返回 <code>card</code> 类型的支付方式。要检索不同类型的付款方式，你可以将 <code>type</code> 作为参数传递给该方法：</p><pre><code>$paymentMethods = $user-&gt;paymentMethods(&#39;sepa_debit&#39;);
</code></pre><p>要检索客户的默认付款方式，可以使用 <code>defaultPaymentMethod</code> 方法：</p><pre><code>$paymentMethod = $user-&gt;defaultPaymentMethod();
</code></pre><p>你可以使用 <code>findPaymentMethod</code> 方法检索附加到计费模型的特定付款方式：</p><pre><code>$paymentMethod = $user-&gt;findPaymentMethod($paymentMethodId);
</code></pre><p><a name="check-for-a-payment-method"></a></p><h3 id="确定用户是否有付款方式" tabindex="-1"><a class="header-anchor" href="#确定用户是否有付款方式" aria-hidden="true">#</a> 确定用户是否有付款方式</h3><p>要确定计费模型是否有附加到其帐户的默认付款方式，请调用 <code>hasDefaultPaymentMethod</code> 方法：</p><pre><code>if ($user-&gt;hasDefaultPaymentMethod()) {
    // ...
}
</code></pre><p>你可以使用 <code>hasPaymentMethod</code> 方法来确定计费模型是否至少有一种支付方式附加到他们的账户：</p><pre><code>if ($user-&gt;hasPaymentMethod()) {
    // ...
}
</code></pre><p>此方法将确定计费模型是否具有 <code>card</code> 类型的支付方式。 要确定该模型是否存在另一种类型的支付方式，你可以将 <code>type</code> 作为参数传递给该方法：</p><pre><code>if ($user-&gt;hasPaymentMethod(&#39;sepa_debit&#39;)) {
    // ...
}
</code></pre><p><a name="updating-the-default-payment-method"></a></p><h3 id="更新默认付款方式" tabindex="-1"><a class="header-anchor" href="#更新默认付款方式" aria-hidden="true">#</a> 更新默认付款方式</h3><p><code>updateDefaultPaymentMethod</code> 方法可用于更新客户的默认支付方式信息。 此方法接受 Stripe 支付方式标识符，并将新支付方式指定为默认支付方式：</p><pre><code>$user-&gt;updateDefaultPaymentMethod($paymentMethod);
</code></pre><p>如果银行卡验证成功，你可以将<code>paymentMethod.id</code> 传递给你的 Laravel 应用程序并处理 <a href="#simple-charge">单次收费</a>.</p><p><a name="retrieving-payment-methods"></a></p><h3 id="搜索付款方式" tabindex="-1"><a class="header-anchor" href="#搜索付款方式" aria-hidden="true">#</a> 搜索付款方式</h3><p>计费模型实例上的 <code>paymentMethods</code> 方法返回一组 <code>Laravel\\Cashier\\PaymentMethod</code> 实例：</p><pre><code>$paymentMethods = $user-&gt;paymentMethods();
</code></pre><p>默认情况下，此方法将返回 <code>card</code> 类型的支付方式。 要搜索不同类型的付款方式，你可以将 <code>type</code> 作为参数传递给该方法：</p><pre><code>$paymentMethods = $user-&gt;paymentMethods(&#39;sepa_debit&#39;);
</code></pre><p>要搜索客户的默认付款方式，可以使用 <code>defaultPaymentMethod</code> 方法：</p><pre><code>$paymentMethod = $user-&gt;defaultPaymentMethod();
</code></pre><p>你可以使用 <code>findPaymentMethod</code> 方法搜索附加到计费模型的特定付款方式：</p><pre><code>$paymentMethod = $user-&gt;findPaymentMethod($paymentMethodId);
</code></pre><p><a name="check-for-a-payment-method"></a></p><h3 id="确定用户是否有付款方式-1" tabindex="-1"><a class="header-anchor" href="#确定用户是否有付款方式-1" aria-hidden="true">#</a> 确定用户是否有付款方式</h3><p>要确定计费模型是否有附加到其帐户的默认付款方式，请调用 <code>hasDefaultPaymentMethod</code> 方法：</p><pre><code>if ($user-&gt;hasDefaultPaymentMethod()) {
    // ...
}
</code></pre><p>你可以 <code>hasPaymentMethod</code> 方法来确定计费模型是否至少有一种支付方式附加到他们的帐户：</p><pre><code>if ($user-&gt;hasPaymentMethod()) {
    // ...
}
</code></pre><p>此方法将确定计费模型是否具有 <code>card</code> 类型的支付方式。 要确定该模型是否存在另一种类型的支付方式，你可以将 <code>type</code> 作为参数传递给该方法：</p><pre><code>if ($user-&gt;hasPaymentMethod(&#39;sepa_debit&#39;)) {
    // ...
}
</code></pre><p><a name="updating-the-default-payment-method"></a></p><h3 id="更新默认付款方式-1" tabindex="-1"><a class="header-anchor" href="#更新默认付款方式-1" aria-hidden="true">#</a> 更新默认付款方式</h3><p><code>updateDefaultPaymentMethod</code> 方法可用于更新客户的默认支付方式信息。 此方法接受 Stripe 付款方式标识符，并将新付款方式指定为默认付款方式：</p><pre><code>$user-&gt;updateDefaultPaymentMethod($paymentMethod);
</code></pre><p>要将你的默认支付方式信息与客户在 Stripe 中的默认支付方式信息同步，你可以使用 <code>updateDefaultPaymentMethodFromStripe</code> 方法：</p><pre><code>$user-&gt;updateDefaultPaymentMethodFromStripe();
</code></pre><blockquote><p><strong>注意</strong><br> 客户的默认付款方式只能用于开具发票和创建新订阅。 由于 Stripe 施加的限制，它可能无法用于单次收费。</p></blockquote><p><a name="adding-payment-methods"></a></p><h3 id="添加付款方式" tabindex="-1"><a class="header-anchor" href="#添加付款方式" aria-hidden="true">#</a> 添加付款方式</h3><p>要添加新的支付方式，你可以在计费模型上调用 <code>addPaymentMethod</code> 方法，并传递支付方式标识符：</p><pre><code>$user-&gt;addPaymentMethod($paymentMethod);
</code></pre><blockquote><p><strong>技巧</strong><br> 要了解如何检索付款方式标识符，请查看<a href="#storing-payment-methods">付款方式存储文档</a>。</p></blockquote><p><a name="deleting-payment-methods"></a></p><h3 id="删除付款方式" tabindex="-1"><a class="header-anchor" href="#删除付款方式" aria-hidden="true">#</a> 删除付款方式</h3><p>要删除付款方式，你可以在要删除的 <code>Laravel\\Cashier\\PaymentMethod</code> 实例上调用 <code>delete</code> 方法：</p><pre><code>$paymentMethod-&gt;delete();
</code></pre><p><code>deletePaymentMethod</code> 方法将从计费模型中删除特定的支付方式：</p><pre><code>$user-&gt;deletePaymentMethod(&#39;pm_visa&#39;);
</code></pre><p><code>deletePaymentMethods</code> 方法将删除计费模型的所有付款方式信息：</p><pre><code>$user-&gt;deletePaymentMethods();
</code></pre><p>默认情况下，此方法将删除 <code>card</code> 类型的支付方式。 要删除不同类型的付款方式，你可以将 <code>type</code> 作为参数传递给该方法：</p><pre><code>$user-&gt;deletePaymentMethods(&#39;sepa_debit&#39;);
</code></pre><blockquote><p><strong>注意</strong><br> 如果用户有一个有效的订阅，你的应用程序不应该允许他们删除他们的默认支付方式。</p></blockquote><p><a name="subscriptions"></a></p><h2 id="订阅" tabindex="-1"><a class="header-anchor" href="#订阅" aria-hidden="true">#</a> 订阅</h2><p>订阅提供了一种为你的客户设置定期付款的方法。 Cashier 管理的 Stripe 订阅支持多种订阅价格、订阅数量、试用等。</p><p><a name="creating-subscriptions"></a></p><h3 id="创建订阅" tabindex="-1"><a class="header-anchor" href="#创建订阅" aria-hidden="true">#</a> 创建订阅</h3><p>要创建订阅，首先检索你的计费模型的实例，通常是 <code>App\\Models\\User</code> 的实例。 检索到模型实例后，你可以使用 <code>newSubscription</code> 方法创建模型的订阅：</p><pre><code>use Illuminate\\Http\\Request;

Route::post(&#39;/user/subscribe&#39;, function (Request $request) {
    $request-&gt;user()-&gt;newSubscription(
        &#39;default&#39;, &#39;price_monthly&#39;
    )-&gt;create($request-&gt;paymentMethodId);

    // ...
});
</code></pre><p>传递给 <code>newSubscription</code> 方法的第一个参数应该是订阅的内部名称。 如果你的应用程序仅提供单一订阅，你可以称其为 <code>default</code> 或 <code>primary</code>。 此订阅名称仅供内部应用程序使用，无意向用户显示。 此外，它不应包含空格，并且在创建订阅后绝不能更改。 第二个参数是用户订阅的具体价格。 该值应对应于 Stripe 中的价格标识符。</p><p><code>create</code> 方法接受 <a href="#storing-payment-methods">Stripe 支付方式标识</a>或 Stripe <code>PaymentMethod</code> 对象，将开始订阅并使用计费模型的 Stripe 客户 ID 和其他相关信息更新你的数据库账单信息。</p><blockquote><p><strong>注意</strong><br> 将支付方式标识符直接传递给 <code>create</code> 订阅方法也会自动将其添加到用户存储的支付方式中。</p></blockquote><p><a name="collecting-recurring-payments-via-invoice-emails"></a></p><h4 id="通过发票电子邮件收取定期付款" tabindex="-1"><a class="header-anchor" href="#通过发票电子邮件收取定期付款" aria-hidden="true">#</a> 通过发票电子邮件收取定期付款</h4><p>你可以指示 Stripe 在每次定期付款到期时通过电子邮件向客户发送发票，而不是自动收取客户的经常性付款。 然后，客户可以在收到发票后手动支付。 通过发票收取经常性付款时，客户无需预先提供付款方式：</p><pre><code>$user-&gt;newSubscription(&#39;default&#39;, &#39;price_monthly&#39;)-&gt;createAndSendInvoice();
</code></pre><p>客户在取消订阅之前必须支付发票的时间由 <code>days_until_due</code> 选项决定。 默认情况下，这是 30 天； 但是，如果你愿意，可以为此选项提供特定值：</p><pre><code>$user-&gt;newSubscription(&#39;default&#39;, &#39;price_monthly&#39;)-&gt;createAndSendInvoice([], [
    &#39;days_until_due&#39; =&gt; 30
]);
</code></pre><p><a name="subscription-quantities"></a></p><h4 id="数量" tabindex="-1"><a class="header-anchor" href="#数量" aria-hidden="true">#</a> 数量</h4>`,84),De={href:"https://stripe.com/docs/billing/subscriptions/quantities",target:"_blank",rel:"noopener noreferrer"},Ue=e("code",null,"quantity",-1),Le=e("pre",null,[e("code",null,`$user->newSubscription('default', 'price_monthly')
     ->quantity(5)
     ->create($paymentMethod);
`)],-1),He=e("p",null,[e("a",{name:"additional-details"})],-1),Be=e("h4",{id:"其它详细信息",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#其它详细信息","aria-hidden":"true"},"#"),n(" 其它详细信息")],-1),je={href:"https://stripe.com/docs/api/customers/create",target:"_blank",rel:"noopener noreferrer"},Ne={href:"https://stripe.com/docs/api/subscriptions/create",target:"_blank",rel:"noopener noreferrer"},Fe=e("code",null,"create",-1),Oe=e("pre",null,[e("code",null,`$user->newSubscription('default', 'price_monthly')->create($paymentMethod, [
    'email' => $email,
], [
    'metadata' => ['note' => 'Some extra information.'],
]);
`)],-1),We=e("p",null,[e("a",{name:"coupons"})],-1),Ge=e("h4",{id:"优惠券",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#优惠券","aria-hidden":"true"},"#"),n(" 优惠券")],-1),Qe=e("p",null,[n("如果你想在创建订阅时使用优惠券，你可以使用 "),e("code",null,"withCoupon"),n(" 方法：")],-1),Ke=e("pre",null,[e("code",null,`$user->newSubscription('default', 'price_monthly')
     ->withCoupon('code')
     ->create($paymentMethod);
`)],-1),Ye={href:"https://stripe.com/docs/billing/subscriptions/discounts/codes",target:"_blank",rel:"noopener noreferrer"},Ve=e("code",null,"withPromotionCode",-1),ze=t(`<pre><code>$user-&gt;newSubscription(&#39;default&#39;, &#39;price_monthly&#39;)
     -&gt;withPromotionCode(&#39;promo_code_id&#39;)
     -&gt;create($paymentMethod);
</code></pre><p>给定的促销代码 ID 应该是分配给促销代码的 Stripe API ID，而不是面向客户的促销代码。 如果你需要根据给定的面向客户的促销代码查找促销代码 ID，你可以使用 <code>findPromotionCode</code> 方法：</p><pre><code>// 通过面向客户的代码查找促销代码 ID...
$promotionCode = $user-&gt;findPromotionCode(&#39;SUMMERSALE&#39;);

// 通过面向客户的代码查找有效的促销代码 ID...
$promotionCode = $user-&gt;findActivePromotionCode(&#39;SUMMERSALE&#39;);
</code></pre><p>在上面的示例中，返回的 <code>$promotionCode</code> 对象是 <code>Laravel\\Cashier\\PromotionCode</code> 的一个实例。 这个类装饰了一个底层的 <code>Stripe\\PromotionCode</code> 对象。 你可以通过调用 <code>coupon</code> 方法来检索与促销代码相关的优惠券：</p><pre><code>$coupon = $user-&gt;findPromotionCode(&#39;SUMMERSALE&#39;)-&gt;coupon();
</code></pre><p>优惠券实例允许你确定折扣金额以及优惠券是代表固定折扣还是基于百分比的折扣：</p><pre><code>if ($coupon-&gt;isPercentage()) {
    return $coupon-&gt;percentOff().&#39;%&#39;; // 21.5%
} else {
    return $coupon-&gt;amountOff(); // $5.99
}
</code></pre><p>你还可以检索当前应用于客户或订阅的折扣：</p><pre><code>$discount = $billable-&gt;discount();

$discount = $subscription-&gt;discount();
</code></pre><p>返回的 <code>Laravel\\Cashier\\Discount</code> 实例装饰底层的 <code>Stripe\\Discount</code> 对象实例。 你可以通过调用 <code>coupon</code> 方法获取与此折扣相关的优惠券：</p><pre><code>$coupon = $subscription-&gt;discount()-&gt;coupon();
</code></pre><p>如果你想将新的优惠券或促销代码应用于客户或订阅，你可以通过 <code>applyCoupon</code> 或 <code>applyPromotionCode</code> 方法进行：</p><pre><code>$billable-&gt;applyCoupon(&#39;coupon_id&#39;);
$billable-&gt;applyPromotionCode(&#39;promotion_code_id&#39;);

$subscription-&gt;applyCoupon(&#39;coupon_id&#39;);
$subscription-&gt;applyPromotionCode(&#39;promotion_code_id&#39;);
</code></pre><p>请记住，你应该使用分配给促销代码的 Stripe API ID，而不是面向客户的促销代码。 在给定时间只能将一个优惠券或促销代码应用于客户或订阅。</p>`,14),Je={href:"https://stripe.com/docs/billing/subscriptions/coupons",target:"_blank",rel:"noopener noreferrer"},Xe={href:"https://stripe.com/docs/billing",target:"_blank",rel:"noopener noreferrer"},Ze=t(`<p><a name="adding-subscriptions"></a></p><h4 id="添加订阅" tabindex="-1"><a class="header-anchor" href="#添加订阅" aria-hidden="true">#</a> 添加订阅</h4><p>如果你想向已有默认付款方式的客户添加订阅，你可以在订阅构建器上调用 <code>add</code> 方法：</p><pre><code>use App\\Models\\User;

$user = User::find(1);

$user-&gt;newSubscription(&#39;default&#39;, &#39;price_monthly&#39;)-&gt;add();
</code></pre><p><a name="creating-subscriptions-from-the-stripe-dashboard"></a></p><h4 id="从-stripe-仪表板创建订阅" tabindex="-1"><a class="header-anchor" href="#从-stripe-仪表板创建订阅" aria-hidden="true">#</a> 从 Stripe 仪表板创建订阅</h4><p>你还可以从 Stripe 仪表板本身创建订阅。 这样做时，Cashier 将同步新添加的订阅并为其分配一个名称 <code>default</code>。 要自定义分配给仪表板创建的订阅的订阅名称，<a href="#defining-webhook-event-handlers">扩展 <code>WebhookController</code></a>并覆盖 <code>newSubscriptionName</code> 方法。</p><p>此外，你只能通过 Stripe 仪表板创建一种类型的订阅。 如果你的应用程序提供多个使用不同名称的订阅，则只能通过 Stripe 仪表板添加一种类型的订阅。</p><p>最后，你应该始终确保你的应用程序提供的每种订阅类型只添加一个活动订阅。 如果客户有两个 <code>default</code> 订阅，Cashier 只会使用最近添加的订阅，即使两者都会与你的应用程序数据库同步。</p><p><a name="checking-subscription-status"></a></p><h3 id="检查订阅状态" tabindex="-1"><a class="header-anchor" href="#检查订阅状态" aria-hidden="true">#</a> 检查订阅状态</h3><p>客户订阅你的应用程序后，你可以使用各种方便的方法轻松检查他们的订阅状态。 首先，如果客户有有效订阅， <code>subscribed</code> 方法会返回 <code>true</code> ，即使该订阅当前处于试用期内。 <code>subscribed</code> 方法接受订阅的名称作为它的第一个参数：</p><pre><code>if ($user-&gt;subscribed(&#39;default&#39;)) {
    // ...
}
</code></pre><p><code>subscribed</code> 方法也非常适合<a href="./middleware">路由中间件</a>，允许你根据用户的订阅状态过滤对路由和控制器的访问：</p><pre><code>&lt;?php

namespace App\\Http\\Middleware;

use Closure;
use Illuminate\\Http\\Request;
use Symfony\\Component\\HttpFoundation\\Response;

class EnsureUserIsSubscribed
{
    /**
     * 处理传入请求。
     *
     * @param  \\Closure(\\Illuminate\\Http\\Request): (\\Symfony\\Component\\HttpFoundation\\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if ($request-&gt;user() &amp;&amp; ! $request-&gt;user()-&gt;subscribed(&#39;default&#39;)) {
            // 该用户不是付费客户...
            return redirect(&#39;billing&#39;);
        }

        return $next($request);
    }
}
</code></pre><p>如果你想确定用户是否仍在试用期内，你可以使用 <code>onTrial</code> 方法。 此方法可用于确定是否应向用户显示他们仍在试用期的警告：</p><pre><code>if ($user-&gt;subscription(&#39;default&#39;)-&gt;onTrial()) {
    // ...
}
</code></pre><p><code>subscribedToProduct</code> 方法可用于根据给定的 Stripe 产品标识符确定用户是否订阅了给定的产品。 在 Stripe 中，产品是价格的集合。 在此示例中，我们将确定用户的 <code>default</code> 订阅是否主动订阅了应用程序的「高级」产品。 给定的 Stripe 产品标识符应与你在 Stripe 仪表板中的产品标识符之一相对应：</p><pre><code>if ($user-&gt;subscribedToProduct(&#39;prod_premium&#39;, &#39;default&#39;)) {
    // ...
}
</code></pre><p>通过将数组传递给 <code>subscribedToProduct</code> 方法，你可以确定用户的 <code>default</code> 订阅是否主动订阅了应用程序的「基本」或「高级」产品：</p><pre><code>if ($user-&gt;subscribedToProduct([&#39;prod_basic&#39;, &#39;prod_premium&#39;], &#39;default&#39;)) {
    // ...
}
</code></pre><p><code>subscribedToPrice</code> 方法可用于确定客户的订阅是否对应于给定的价格 ID：</p><pre><code>if ($user-&gt;subscribedToPrice(&#39;price_basic_monthly&#39;, &#39;default&#39;)) {
    // ...
}
</code></pre><p><code>recurring</code> 方法可用于确定用户当前是否已订阅并且不再处于试用期内：</p><pre><code>if ($user-&gt;subscription(&#39;default&#39;)-&gt;recurring()) {
    // ...
}
</code></pre><blockquote><p><strong>注意</strong><br> 如果用户有两个同名订阅，则 <code>subscription</code> 方法将始终返回最近的订阅。 例如，一个用户可能有两个名为 <code>default</code>的订阅记录； 但是，其中一个订阅可能是旧的、过期的订阅，而另一个是当前的、有效的订阅。 最近的订阅将始终返回，而较旧的订阅将保留在数据库中以供历史审查。</p></blockquote><p><a name="cancelled-subscription-status"></a></p><h4 id="取消订阅状态" tabindex="-1"><a class="header-anchor" href="#取消订阅状态" aria-hidden="true">#</a> 取消订阅状态</h4><p>要确定用户是否曾经是活跃订阅者但已取消订阅，你可以使用 <code>canceled</code> 方法：</p><pre><code>if ($user-&gt;subscription(&#39;default&#39;)-&gt;canceled()) {
    // ...
}
</code></pre><p>你还可以确定用户是否已取消他们的订阅，但在订阅完全到期之前是否仍处于「宽限期」。 例如，如果用户在 3 月 5 日取消了原定于 3 月 10 日到期的订阅，则用户在 3 月 10 日之前处于「宽限期」。 请注意，<code>subscribed</code> 方法在此期间仍会返回 <code>true</code>：</p><pre><code>if ($user-&gt;subscription(&#39;default&#39;)-&gt;onGracePeriod()) {
    // ...
}
</code></pre><p>要确定用户是否已取消订阅并且不再处于「宽限期」内，你可以使用 <code>ended</code> 方法：</p><pre><code>if ($user-&gt;subscription(&#39;default&#39;)-&gt;ended()) {
    // ...
}
</code></pre><p><a name="incomplete-and-past-due-status"></a></p><h4 id="不完整和逾期状态" tabindex="-1"><a class="header-anchor" href="#不完整和逾期状态" aria-hidden="true">#</a> 不完整和逾期状态</h4><p>如果订阅在创建后需要二次支付操作，订阅将被标记为「不完整」。 订阅状态存储在 Cashier 的 <code>subscriptions</code> 数据库表的 <code>stripe_status</code> 列中。</p><p>同样，如果在交换价格时需要二次支付操作，订阅将被标记为 <code>past_due</code> 。 当你的订阅处于这些状态中的任何一种时，在客户确认付款之前，它不会激活。 可以使用计费模型或订阅实例上的 <code>hasIncompletePayment</code> 方法来确定订阅是否有未完成的付款：</p><pre><code>if ($user-&gt;hasIncompletePayment(&#39;default&#39;)) {
    // ...
}

if ($user-&gt;subscription(&#39;default&#39;)-&gt;hasIncompletePayment()) {
    // ...
}
</code></pre><p>当订阅有未完成的付款时，你应该将用户引导至 Cashier 的付款确认页面，并传递 <code>latestPayment</code> 标识符。 你可以使用订阅实例上可用的 <code>latestPayment</code> 方法来检索此标识符：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{ route(&#39;cashier.payment&#39;, $subscription-&gt;latestPayment()-&gt;id) }}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    请确认你的付款。
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你希望订阅在处于 <code>past_due</code> 或 <code>incomplete</code> 状态时仍被视为有效，你可以使用 Cashier 提供的 <code>keepPastDueSubscriptionsActive</code> 和 <code>keepIncompleteSubscriptionsActive</code> 方法。 通常，应在 <code>App\\Providers\\AppServiceProvider</code> 的 <code>register</code> 方法中调用这些方法：</p><pre><code>use Laravel\\Cashier\\Cashier;

/**
 * 注册任何应用程序服务。
 */
public function register(): void
{
    Cashier::keepPastDueSubscriptionsActive();
    Cashier::keepIncompleteSubscriptionsActive();
}
</code></pre><blockquote><p><strong>注意</strong><br> 当订阅处于 <code>incomplete</code> 状态时，在确认付款之前无法更改。 因此，当订阅处于 <code>incomplete</code> 状态时， <code>swap</code> 和 <code>updateQuantity</code> 方法将抛出异常。</p></blockquote><p><a name="subscription-scopes"></a></p><h4 id="订阅范围" tabindex="-1"><a class="header-anchor" href="#订阅范围" aria-hidden="true">#</a> 订阅范围</h4><p>大多数订阅状态也可用作查询范围，以便你可以轻松查询数据库以查找处于给定状态的订阅：</p><pre><code>// 获取所有活动订阅...
$subscriptions = Subscription::query()-&gt;active()-&gt;get();

// 获取用户所有已取消的订阅...
$subscriptions = $user-&gt;subscriptions()-&gt;canceled()-&gt;get();
</code></pre><p>可用范围的完整列表如下：</p><pre><code>Subscription::query()-&gt;active();
Subscription::query()-&gt;canceled();
Subscription::query()-&gt;ended();
Subscription::query()-&gt;incomplete();
Subscription::query()-&gt;notCanceled();
Subscription::query()-&gt;notOnGracePeriod();
Subscription::query()-&gt;notOnTrial();
Subscription::query()-&gt;onGracePeriod();
Subscription::query()-&gt;onTrial();
Subscription::query()-&gt;pastDue();
Subscription::query()-&gt;recurring();
</code></pre><p><a name="changing-prices"></a></p><h3 id="更改价格" tabindex="-1"><a class="header-anchor" href="#更改价格" aria-hidden="true">#</a> 更改价格</h3><p>客户订阅你的应用程序后，他们可能偶尔想要更改为新的订阅价格。 要将客户换成新价格，请将 Stripe 价格的标识符传递给 <code>swap</code> 方法。 交换价格时，假设用户想要重新激活他们的订阅（如果之前已取消订阅）。 给定的价格标识符应对应于 Stripe 仪表板中可用的 Stripe 价格标识符：</p><pre><code>use App\\Models\\User;

$user = App\\Models\\User::find(1);

$user-&gt;subscription(&#39;default&#39;)-&gt;swap(&#39;price_yearly&#39;);
</code></pre><p>如果客户处于试用期，则将保持试用期。 此外，如果订阅存在「数量」，则也将保留该数量。</p><p>如果你想交换价格并取消客户当前的任何试用期，你可以调用 <code>skipTrial</code> 方法：</p><pre><code>$user-&gt;subscription(&#39;default&#39;)
        -&gt;skipTrial()
        -&gt;swap(&#39;price_yearly&#39;);
</code></pre><p>如果你想交换价格并立即向客户开具发票而不是等待他们的下一个结算周期，你可以使用 <code>swapAndInvoice</code> 方法：</p><pre><code>$user = User::find(1);

$user-&gt;subscription(&#39;default&#39;)-&gt;swapAndInvoice(&#39;price_yearly&#39;);
</code></pre><p><a name="prorations"></a></p><h4 id="按比例分配" tabindex="-1"><a class="header-anchor" href="#按比例分配" aria-hidden="true">#</a> 按比例分配</h4><p>默认情况下，Stripe 在价格之间交换时按比例分配费用。 <code>noProrate</code> 方法可用于在不按比例分配费用的情况下更新订阅价格：</p><pre><code>$user-&gt;subscription(&#39;default&#39;)-&gt;noProrate()-&gt;swap(&#39;price_yearly&#39;);
</code></pre>`,63),en={href:"https://stripe.com/docs/billing/subscriptions/prorations",target:"_blank",rel:"noopener noreferrer"},nn=t(`<blockquote><p><strong>注意</strong><br> 在 <code>swapAndInvoice</code> 方法之前执行 <code>noProrate</code> 方法将不会影响按比例分配。 将始终开具发票。</p></blockquote><p><a name="subscription-quantity"></a></p><h3 id="认购数量" tabindex="-1"><a class="header-anchor" href="#认购数量" aria-hidden="true">#</a> 认购数量</h3><p>有时订阅会受到「数量」的影响。 例如，项目管理应用程序可能对每个项目收取每月 10 美元的费用。 你可以使用 <code>incrementQuantity</code> 和 <code>decrementQuantity</code> 方法轻松增加或减少你的订阅数量：</p><pre><code>use App\\Models\\User;

$user = User::find(1);

$user-&gt;subscription(&#39;default&#39;)-&gt;incrementQuantity();

// 向订阅的当前数量添加五个...
$user-&gt;subscription(&#39;default&#39;)-&gt;incrementQuantity(5);

$user-&gt;subscription(&#39;default&#39;)-&gt;decrementQuantity();

// 从订阅的当前数量中减去五...
$user-&gt;subscription(&#39;default&#39;)-&gt;decrementQuantity(5);
</code></pre><p>或者，你可以使用 <code>updateQuantity</code> 方法设置特定数量：</p><pre><code>$user-&gt;subscription(&#39;default&#39;)-&gt;updateQuantity(10);
</code></pre><p><code>noProrate</code> 方法可用于在不按比例分配费用的情况下更新订阅的数量：</p><pre><code>$user-&gt;subscription(&#39;default&#39;)-&gt;noProrate()-&gt;updateQuantity(10);
</code></pre>`,9),an={href:"https://stripe.com/docs/subscriptions/quantities",target:"_blank",rel:"noopener noreferrer"},sn=t(`<p><a name="quantities-for-subscription-with-multiple-products"></a></p><h4 id="多个产品的订阅数量" tabindex="-1"><a class="header-anchor" href="#多个产品的订阅数量" aria-hidden="true">#</a> 多个产品的订阅数量</h4><p>如果你的订阅是<a href="#subscriptions-with-multiple-products">包含多个产品的订阅</a>，你应该将你希望增加或减少的数量的价格 ID 作为第二个参数传递给增量/减量方法：</p><pre><code>$user-&gt;subscription(&#39;default&#39;)-&gt;incrementQuantity(1, &#39;price_chat&#39;);
</code></pre><p><a name="subscriptions-with-multiple-products"></a></p><h3 id="订阅多个产品" tabindex="-1"><a class="header-anchor" href="#订阅多个产品" aria-hidden="true">#</a> 订阅多个产品</h3>`,6),tn={href:"https://stripe.com/docs/billing/subscriptions/multiple-products",target:"_blank",rel:"noopener noreferrer"},on=e("code",null,"subscription_items",-1),pn=t(`<p>你可以通过将价格数组作为第二个参数传递给 <code>newSubscription</code> 方法来为给定订阅指定多个产品：</p><pre><code>use Illuminate\\Http\\Request;

Route::post(&#39;/user/subscribe&#39;, function (Request $request) {
    $request-&gt;user()-&gt;newSubscription(&#39;default&#39;, [
        &#39;price_monthly&#39;,
        &#39;price_chat&#39;,
    ])-&gt;create($request-&gt;paymentMethodId);

    // ...
});
</code></pre><p>在上面的例子中，客户将有两个附加到他们的 <code>default</code> 订阅的价格。 两种价格都将按各自的计费间隔收取。 如有必要，你可以使用 <code>quantity</code> 方法为每个价格指定具体数量：</p><pre><code>$user = User::find(1);

$user-&gt;newSubscription(&#39;default&#39;, [&#39;price_monthly&#39;, &#39;price_chat&#39;])
    -&gt;quantity(5, &#39;price_chat&#39;)
    -&gt;create($paymentMethod);
</code></pre><p>如果你想为现有订阅添加另一个价格，你可以调用订阅的 <code>addPrice</code> 方法：</p><pre><code>$user = User::find(1);

$user-&gt;subscription(&#39;default&#39;)-&gt;addPrice(&#39;price_chat&#39;);
</code></pre><p>上面的示例将添加新价格，客户将在下一个计费周期为此付费。 如果你想立即向客户开具账单，你可以使用 <code>addPriceAndInvoice</code> 方法：</p><pre><code>$user-&gt;subscription(&#39;default&#39;)-&gt;addPriceAndInvoice(&#39;price_chat&#39;);
</code></pre><p>如果你想添加具有特定数量的价格，你可以将数量作为 <code>addPrice</code> 或 <code>addPriceAndInvoice</code> 方法的第二个参数传递：</p><pre><code>$user = User::find(1);

$user-&gt;subscription(&#39;default&#39;)-&gt;addPrice(&#39;price_chat&#39;, 5);
</code></pre><p>你可以使用 <code>removePrice</code> 方法从订阅中删除价格：</p><pre><code>$user-&gt;subscription(&#39;default&#39;)-&gt;removePrice(&#39;price_chat&#39;);
</code></pre><blockquote><p><strong>注意</strong><br> 你不得删除订阅的最后价格。 相反，你应该简单地取消订阅。</p></blockquote><p><a name="swapping-prices"></a></p><h4 id="交换价格" tabindex="-1"><a class="header-anchor" href="#交换价格" aria-hidden="true">#</a> 交换价格</h4><p>你还可以更改附加到具有多个产品的订阅的价格。 例如，假设客户订阅了带有 <code>price_chat</code> 附加产品的 <code>price_basic</code> 订阅，而你想要将客户从 <code>price_basic</code> 升级到 <code>price_pro</code> 价格：</p><pre><code>use App\\Models\\User;

$user = User::find(1);

$user-&gt;subscription(&#39;default&#39;)-&gt;swap([&#39;price_pro&#39;, &#39;price_chat&#39;]);
</code></pre><p>执行上述示例时，删除带有 <code>price_basic</code> 的基础订阅项，保留带有 <code>price_chat</code> 的订阅项。 此外，还会为 <code>price_pro</code> 创建一个新的订阅项目。</p><p>你还可以通过将键/值对数组传递给 <code>swap</code> 方法来指定订阅项选项。 例如，你可能需要指定订阅价格数量：</p><pre><code>$user = User::find(1);

$user-&gt;subscription(&#39;default&#39;)-&gt;swap([
    &#39;price_pro&#39; =&gt; [&#39;quantity&#39; =&gt; 5],
    &#39;price_chat&#39;
]);
</code></pre><p>如果你想交换订阅的单一价格，你可以在订阅项目本身上使用 <code>swap</code> 方法。 如果你想保留订阅的其他价格的所有现有元数据，此方法特别有用：</p><pre><code>$user = User::find(1);

$user-&gt;subscription(&#39;default&#39;)
        -&gt;findItemOrFail(&#39;price_basic&#39;)
        -&gt;swap(&#39;price_pro&#39;);
</code></pre><p><a name="proration"></a></p><h4 id="按比例分配-1" tabindex="-1"><a class="header-anchor" href="#按比例分配-1" aria-hidden="true">#</a> 按比例分配</h4><p>默认情况下，Stripe 会在为多个产品的订阅添加或删除价格时按比例收费。 如果你想在不按比例分配的情况下进行价格调整，你应该将 <code>noProrate</code> 方法链接到你的价格操作中：</p><pre><code>$user-&gt;subscription(&#39;default&#39;)-&gt;noProrate()-&gt;removePrice(&#39;price_chat&#39;);
</code></pre><p><a name="swapping-quantities"></a></p><h4 id="数量-1" tabindex="-1"><a class="header-anchor" href="#数量-1" aria-hidden="true">#</a> 数量</h4><p>如果你想更新单个订阅价格的数量，你可以使用<a href="#subscription-quantity">现有数量方法</a> 将价格名称作为附加参数传递给该方法：</p><pre><code>$user = User::find(1);

$user-&gt;subscription(&#39;default&#39;)-&gt;incrementQuantity(5, &#39;price_chat&#39;);

$user-&gt;subscription(&#39;default&#39;)-&gt;decrementQuantity(3, &#39;price_chat&#39;);

$user-&gt;subscription(&#39;default&#39;)-&gt;updateQuantity(10, &#39;price_chat&#39;);
</code></pre><blockquote><p><strong>注意</strong><br> 当订阅有多个价格时，<code>Subscription</code> 模型上的 <code>stripe_price</code> 和 <code>quantity</code> 属性将为 <code>null</code>。 要访问单个价格属性，你应该使用 <code>Subscription</code> 模型上可用的 <code>items</code> 关系。</p></blockquote><p><a name="subscription-items"></a></p><h4 id="订阅项目" tabindex="-1"><a class="header-anchor" href="#订阅项目" aria-hidden="true">#</a> 订阅项目</h4><p>当订阅有多个价格时，它会在数据库的 <code>subscription_items</code> 表中存储多个订阅 <code>items</code>。 你可以通过订阅上的 <code>items</code> 关系访问这些：</p><pre><code>use App\\Models\\User;

$user = User::find(1);

$subscriptionItem = $user-&gt;subscription(&#39;default&#39;)-&gt;items-&gt;first();

// 检索特定商品的 Stripe 价格和数量...
$stripePrice = $subscriptionItem-&gt;stripe_price;
$quantity = $subscriptionItem-&gt;quantity;
</code></pre><p>你还可以使用 <code>findItemOrFail</code> 方法检索特定价格：</p><pre><code>$user = User::find(1);

$subscriptionItem = $user-&gt;subscription(&#39;default&#39;)-&gt;findItemOrFail(&#39;price_chat&#39;);
</code></pre><p><a name="multiple-subscriptions"></a></p><h3 id="多个订阅" tabindex="-1"><a class="header-anchor" href="#多个订阅" aria-hidden="true">#</a> 多个订阅</h3><p>Stripe 允许你的客户同时拥有多个订阅。 例如，你可能经营一家提供游泳订阅和举重订阅的健身房，并且每个订阅可能有不同的定价。 当然，客户应该能够订阅其中一个或两个计划。</p><p>当你的应用程序创建订阅时，你可以将订阅的名称提供给 <code>newSubscription</code> 方法。 该名称可以是表示用户正在启动的订阅类型的任何字符串：</p><pre><code>use Illuminate\\Http\\Request;

Route::post(&#39;/swimming/subscribe&#39;, function (Request $request) {
    $request-&gt;user()-&gt;newSubscription(&#39;swimming&#39;)
        -&gt;price(&#39;price_swimming_monthly&#39;)
        -&gt;create($request-&gt;paymentMethodId);

    // ...
});
</code></pre><p>在此示例中，我们为客户发起了每月一次的游泳订阅。 但是，他们以后可能想换成按年订阅。 在调整客户的订阅时，我们可以简单地交换 <code>swimming</code> 订阅的价格：</p><pre><code>$user-&gt;subscription(&#39;swimming&#39;)-&gt;swap(&#39;price_swimming_yearly&#39;);
</code></pre><p>当然，你也可以完全取消订阅：</p><pre><code>$user-&gt;subscription(&#39;swimming&#39;)-&gt;cancel();
</code></pre><p><a name="metered-billing"></a></p><h3 id="计量计费" tabindex="-1"><a class="header-anchor" href="#计量计费" aria-hidden="true">#</a> 计量计费</h3>`,48),cn={href:"https://stripe.com/docs/billing/subscriptions/metered-billing",target:"_blank",rel:"noopener noreferrer"},rn=t(`<p>要开始使用计量计费，你首先需要在 Stripe 控制面板中创建一个具有计量价格的新产品。 然后，使用 <code>meteredPrice</code> 将计量价格 ID 添加到客户订阅：</p><pre><code>use Illuminate\\Http\\Request;

Route::post(&#39;/user/subscribe&#39;, function (Request $request) {
    $request-&gt;user()-&gt;newSubscription(&#39;default&#39;)
        -&gt;meteredPrice(&#39;price_metered&#39;)
        -&gt;create($request-&gt;paymentMethodId);

    // ...
});
</code></pre><p>你还可以通过 <a href="#checkout">Stripe Checkout</a> 开始计量订阅：</p><pre><code>$checkout = Auth::user()
        -&gt;newSubscription(&#39;default&#39;, [])
        -&gt;meteredPrice(&#39;price_metered&#39;)
        -&gt;checkout();

return view(&#39;your-checkout-view&#39;, [
    &#39;checkout&#39; =&gt; $checkout,
]);
</code></pre><p><a name="reporting-usage"></a></p><h4 id="报告使用情况" tabindex="-1"><a class="header-anchor" href="#报告使用情况" aria-hidden="true">#</a> 报告使用情况</h4><p>当你的客户使用你的应用程序时，你将向 Stripe 报告他们的使用情况，以便他们可以准确地计费。 要增加计量订阅的使用，你可以使用 <code>reportUsage</code> 方法：</p><pre><code>$user = User::find(1);

$user-&gt;subscription(&#39;default&#39;)-&gt;reportUsage();
</code></pre><p>默认情况下，「使用数量」1 会添加到计费周期。 或者，你可以传递特定数量的「使用量」以添加到客户在计费期间的使用量中：</p><pre><code>$user = User::find(1);

$user-&gt;subscription(&#39;default&#39;)-&gt;reportUsage(15);
</code></pre><p>如果你的应用程序在单个订阅中提供多个价格，你将需要使用 <code>reportUsageFor</code> 方法来指定你要报告使用情况的计量价格：</p><pre><code>$user = User::find(1);

$user-&gt;subscription(&#39;default&#39;)-&gt;reportUsageFor(&#39;price_metered&#39;, 15);
</code></pre><p>有时，你可能需要更新之前报告的使用情况。 为此，你可以将时间戳或 <code>DateTimeInterface</code> 实例作为第二个参数传递给 <code>reportUsage</code>。 这样做时，Stripe 将更新在给定时间报告的使用情况。 你可以继续更新以前的使用记录，因为给定的日期和时间仍在当前计费周期内：</p><pre><code>$user = User::find(1);

$user-&gt;subscription(&#39;default&#39;)-&gt;reportUsage(5, $timestamp);
</code></pre><p><a name="retrieving-usage-records"></a></p><h4 id="检索使用记录" tabindex="-1"><a class="header-anchor" href="#检索使用记录" aria-hidden="true">#</a> 检索使用记录</h4><p>要检索客户过去的使用情况，你可以使用订阅实例的 <code>usageRecords</code> 方法：</p><pre><code>$user = User::find(1);

$usageRecords = $user-&gt;subscription(&#39;default&#39;)-&gt;usageRecords();
</code></pre><p>如果你的应用程序为单个订阅提供多个价格，你可以使用 <code>usageRecordsFor</code> 方法指定你希望检索使用记录的计量价格：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>    <span class="token variable">$user</span> <span class="token operator">=</span> <span class="token class-name static-context">User</span><span class="token operator">::</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token variable">$usageRecords</span> <span class="token operator">=</span> <span class="token variable">$user</span><span class="token operator">-&gt;</span><span class="token function">subscription</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;default&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">usageRecordsFor</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;price_metered&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token string backtick-quoted-string">\`usageRecords\`</span> 和 <span class="token string backtick-quoted-string">\`usageRecordsFor\`</span> 方法返回一个包含使用记录关联数组的 Collection 实例。 你可以遍历此数组以显示客户的总使用量：

    @<span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token variable">$usageRecords</span> <span class="token keyword">as</span> <span class="token variable">$usageRecord</span><span class="token punctuation">)</span>
        <span class="token operator">-</span> Period Starting<span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token variable">$usageRecord</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;period&#39;</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;start&#39;</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>
        <span class="token operator">-</span> Period Ending<span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token variable">$usageRecord</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;period&#39;</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;end&#39;</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>
        <span class="token operator">-</span> Total Usage<span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token variable">$usageRecord</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;total_usage&#39;</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>
    @<span class="token keyword">endforeach</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20),dn={href:"https://stripe.com/docs/api/usage_records/subscription_item_summary_list",target:"_blank",rel:"noopener noreferrer"},ln=e("p",null,[e("a",{name:"subscription-taxes"})],-1),un=e("h3",{id:"订阅税",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#订阅税","aria-hidden":"true"},"#"),n(" 订阅税")],-1),hn=e("blockquote",null,[e("p",null,[e("strong",null,"注意"),e("br"),n(" 你可以"),e("a",{href:"#tax-configuration"},"使用 Stripe Tax 自动计算税费"),n("，而不是手动计算税率")])],-1),kn=e("code",null,"taxRates",-1),mn={href:"https://dashboard.stripe.com/test/tax-rates",target:"_blank",rel:"noopener noreferrer"},gn=t(`<pre><code>/**
 * 适用于客户订阅的税率。
 *
 * @return array&lt;int, string&gt;
 */
public function taxRates(): array
{
    return [&#39;txr_id&#39;];
}
</code></pre><p><code>taxRates</code> 方法使你能够在逐个客户的基础上应用税率，这对于跨越多个国家和税率的用户群可能会有所帮助。</p><p>如果你提供多种产品的订阅，你可以通过在计费模型上实施 <code>priceTaxRates</code> 方法为每个价格定义不同的税率：</p><pre><code>/**
 * 适用于客户订阅的税率。
 *
 * @return array&lt;string, array&lt;int, string&gt;&gt;
 */
public function priceTaxRates(): array
{
    return [
        &#39;price_monthly&#39; =&gt; [&#39;txr_id&#39;],
    ];
}
</code></pre><blockquote><p><strong>注意</strong><br><code>taxRates</code> 方法仅适用于订阅费用。 如果你使用 Cashier 进行「一次性」收费，你将需要手动指定当时的税率。</p></blockquote><p><a name="syncing-tax-rates"></a></p><h4 id="同步税率" tabindex="-1"><a class="header-anchor" href="#同步税率" aria-hidden="true">#</a> 同步税率</h4><p>当更改由 <code>taxRates</code> 方法返回的硬编码税率 ID 时，用户任何现有订阅的税收设置将保持不变。 如果你希望使用新的 <code>taxRates</code> 值更新现有订阅的税值，你应该在用户的订阅实例上调用 <code>syncTaxRates</code> 方法：</p><pre><code>$user-&gt;subscription(&#39;default&#39;)-&gt;syncTaxRates();
</code></pre><p>这还将同步具有多个产品的订阅的任何项目税率。 如果你的应用程序提供多种产品的订阅，你应该确保你的计费模型实施 <code>priceTaxRates</code> 方法<a href="#subscription-taxes">如上所述</a>。</p><p><a name="tax-exemption"></a></p><h4 id="免税" tabindex="-1"><a class="header-anchor" href="#免税" aria-hidden="true">#</a> 免税</h4><p>Cashier 还提供 <code>isNotTaxExempt</code>、<code>isTaxExempt</code> 和 <code>reverseChargeApplies</code> 方法来确定客户是否免税。 这些方法将调用 Stripe API 来确定客户的免税状态：</p><pre><code>use App\\Models\\User;

$user = User::find(1);

$user-&gt;isTaxExempt();
$user-&gt;isNotTaxExempt();
$user-&gt;reverseChargeApplies();
</code></pre><blockquote><p><strong>注意</strong><br> 这些方法也适用于任何 <code>Laravel\\Cashier\\Invoice</code> 对象。 但是，当在 <code>Invoice</code> 对象上调用时，这些方法将确定发票创建时的豁免状态。</p></blockquote><p><a name="subscription-anchor-date"></a></p><h3 id="订阅锚定日期" tabindex="-1"><a class="header-anchor" href="#订阅锚定日期" aria-hidden="true">#</a> 订阅锚定日期</h3><p>默认情况下，计费周期锚是创建订阅的日期，或者如果使用试用期，则为试用结束的日期。 如果你想修改计费锚点日期，你可以使用 <code>anchorBillingCycleOn</code> 方法：</p><pre><code>use Illuminate\\Http\\Request;

Route::post(&#39;/user/subscribe&#39;, function (Request $request) {
    $anchor = Carbon::parse(&#39;first day of next month&#39;);

    $request-&gt;user()-&gt;newSubscription(&#39;default&#39;, &#39;price_monthly&#39;)
                -&gt;anchorBillingCycleOn($anchor-&gt;startOfDay())
                -&gt;create($request-&gt;paymentMethodId);

    // ...
});
</code></pre>`,19),bn={href:"https://stripe.com/docs/billing/subscriptions/billing-cycle",target:"_blank",rel:"noopener noreferrer"},vn=t(`<p><a name="cancelling-subscriptions"></a></p><h3 id="取消订阅" tabindex="-1"><a class="header-anchor" href="#取消订阅" aria-hidden="true">#</a> 取消订阅</h3><p>要取消订阅，请在用户的订阅上调用 <code>cancel</code> 方法：</p><pre><code>$user-&gt;subscription(&#39;default&#39;)-&gt;cancel();
</code></pre><p>当订阅被取消时，Cashier 将自动在你的 <code>subscriptions</code> 数据库表中设置 <code>ends_at</code> 列。 此列用于了解 <code>subscribed</code> 方法何时应开始返回 <code>false</code>。</p><p>例如，如果客户在 3 月 1 日取消订阅，但订阅计划要到 3 月 5 日才结束，则 <code>subscribed</code> 方法将继续返回 <code>true</code> 直到 3 月 5 日。 这样做是因为通常允许用户继续使用应用程序，直到他们的计费周期结束。</p><p>你可以使用 <code>onGracePeriod</code> 方法确定用户是否已取消订阅但仍处于「宽限期」：</p><pre><code>if ($user-&gt;subscription(&#39;default&#39;)-&gt;onGracePeriod()) {
    // ...
}
</code></pre><p>如果你希望立即取消订阅，请在用户的订阅上调用 <code>cancelNow</code> 方法：</p><pre><code>$user-&gt;subscription(&#39;default&#39;)-&gt;cancelNow();
</code></pre><p>如果你希望立即取消订阅并为任何剩余的未开具发票的计量使用或新的/待定的按比例分配发票项目开具发票，请在用户的订阅上调用 <code>cancelNowAndInvoice</code> 方法：</p><pre><code>$user-&gt;subscription(&#39;default&#39;)-&gt;cancelNowAndInvoice();
</code></pre><p>你也可以选择在特定时间取消订阅：</p><pre><code>$user-&gt;subscription(&#39;default&#39;)-&gt;cancelAt(
    now()-&gt;addDays(10)
);
</code></pre><p><a name="resuming-subscriptions"></a></p><h3 id="恢复订阅" tabindex="-1"><a class="header-anchor" href="#恢复订阅" aria-hidden="true">#</a> 恢复订阅</h3><p>如果客户取消了他们的订阅，而你希望恢复订阅，你可以在订阅上调用 <code>resume</code> 方法。 客户必须仍在「宽限期」内才能恢复订阅：</p><pre><code>$user-&gt;subscription(&#39;default&#39;)-&gt;resume();
</code></pre><p>如果客户取消订阅，然后在订阅完全到期之前恢复订阅，则不会立即向客户收费。 相反，他们的订阅将被重新激活，并且他们将按照原始计费周期进行计费。</p><p><a name="subscription-trials"></a></p><h2 id="订阅试用" tabindex="-1"><a class="header-anchor" href="#订阅试用" aria-hidden="true">#</a> 订阅试用</h2><p><a name="with-payment-method-up-front"></a></p><h3 id="预先支付方式" tabindex="-1"><a class="header-anchor" href="#预先支付方式" aria-hidden="true">#</a> 预先支付方式</h3><p>如果你想为客户提供试用期，同时仍然预先收集付款方式信息，则应在创建订阅时使用 <code>trialDays</code> 方法：</p><pre><code>use Illuminate\\Http\\Request;

Route::post(&#39;/user/subscribe&#39;, function (Request $request) {
    $request-&gt;user()-&gt;newSubscription(&#39;default&#39;, &#39;price_monthly&#39;)
                -&gt;trialDays(10)
                -&gt;create($request-&gt;paymentMethodId);

    // ...
});
</code></pre><p>此方法将在数据库中的订阅记录上设置试用期结束日期，并指示 Stripe 在该日期之前不要开始向客户收费。 使用 <code>trialDays</code> 方法时，Cashier 将覆盖为 Stripe 中的价格配置的任何默认试用期。</p><blockquote><p><strong>注意</strong><br> 如果客户的订阅在试用结束日期之前没有取消，他们将在试用期满后立即收费，因此你应该确保通知你的用户他们的试用结束日期。</p></blockquote><p><code>trialUntil</code> 方法允许你提供一个 <code>DateTime</code> 实例，指定试用期何时结束：</p><pre><code>use Carbon\\Carbon;

$user-&gt;newSubscription(&#39;default&#39;, &#39;price_monthly&#39;)
            -&gt;trialUntil(Carbon::now()-&gt;addDays(10))
            -&gt;create($paymentMethod);
</code></pre><p>你可以使用用户实例的 <code>onTrial</code> 方法或订阅实例的 <code>onTrial</code> 方法来确定用户是否在试用期内。 下面的两个例子是等价的：</p><pre><code>if ($user-&gt;onTrial(&#39;default&#39;)) {
    // ...
}

if ($user-&gt;subscription(&#39;default&#39;)-&gt;onTrial()) {
    // ...
}
</code></pre><p>你可以使用 <code>endTrial</code> 方法立即结束订阅试用：</p><pre><code>$user-&gt;subscription(&#39;default&#39;)-&gt;endTrial();
</code></pre><p>要确定现有试用版是否已过期，你可以使用 <code>hasExpiredTrial</code> 方法：</p><pre><code>if ($user-&gt;hasExpiredTrial(&#39;default&#39;)) {
    // ...
}

if ($user-&gt;subscription(&#39;default&#39;)-&gt;hasExpiredTrial()) {
    // ...
}
</code></pre><p><a name="defining-trial-days-in-stripe-cashier"></a></p><h4 id="在-stripe-cashier-中定义试用日" tabindex="-1"><a class="header-anchor" href="#在-stripe-cashier-中定义试用日" aria-hidden="true">#</a> 在 Stripe / Cashier 中定义试用日</h4><p>你可以选择在 Stripe 仪表板中定义你的价格接收的试用天数，或者始终使用 Cashier 明确传递它们。 如果你选择在 Stripe 中定义价格的试用日，你应该知道新订阅，包括过去有订阅的客户的新订阅，将始终收到试用期，除非你明确调用 <code>skipTrial()</code> 方法 。</p><p><a name="without-payment-method-up-front"></a></p><h3 id="没有预先付款方式" tabindex="-1"><a class="header-anchor" href="#没有预先付款方式" aria-hidden="true">#</a> 没有预先付款方式</h3><p>如果你想在不预先收集用户付款方式信息的情况下提供试用期，你可以将用户记录中的 <code>trial_ends_at</code> 列设置为你想要的试用结束日期。 这通常在用户注册期间完成：</p><pre><code>use App\\Models\\User;

$user = User::create([
    // ...
    &#39;trial_ends_at&#39; =&gt; now()-&gt;addDays(10),
]);
</code></pre><blockquote><p><strong>注意</strong><br> 请务必在计费模型的类定义中为 <code>trial_ends_at</code> 属性添加 <a href="./eloquent-mutators#date-casting">date cast</a>。</p></blockquote><p>Cashier 将这种类型的试用称为「通用试用」，因为它不附加到任何现有订阅。 如果当前日期没有超过 <code>trial_ends_at</code> 的值，计费模型实例上的 <code>onTrial</code> 方法将返回 <code>true</code>：</p><pre><code>if ($user-&gt;onTrial()) {
    // 用户在试用期内…
}
</code></pre><p>一旦你准备好为用户创建一个实际的订阅，你可以像往常一样使用 <code>newSubscription</code> 方法：</p><pre><code>$user = User::find(1);

$user-&gt;newSubscription(&#39;default&#39;, &#39;price_monthly&#39;)-&gt;create($paymentMethod);
</code></pre><p>要检索用户的试用结束日期，你可以使用 <code>trialEndsAt</code> 方法。 如果用户正在试用，此方法将返回一个 Carbon 日期实例，否则将返回 <code>null</code>。 如果你想获取特定订阅而非默认订阅的试用结束日期，你还可以传递一个可选的订阅名称参数：</p><pre><code>if ($user-&gt;onTrial()) {
    $trialEndsAt = $user-&gt;trialEndsAt(&#39;main&#39;);
}
</code></pre><p>如果你希望明确知道用户处于他们的「通用」试用期并且尚未创建实际订阅，你也可以使用 <code>onGenericTrial</code> 方法：</p><pre><code>if ($user-&gt;onGenericTrial()) {
    // 用户正处于「通用」试用期内…
}
</code></pre><p><a name="extending-trials"></a></p><h3 id="延长试验" tabindex="-1"><a class="header-anchor" href="#延长试验" aria-hidden="true">#</a> 延长试验</h3><p><code>extendTrial</code> 方法允许你在创建订阅后延长订阅的试用期。 如果试用期已经过期并且已经向客户收取订阅费用，你仍然可以为他们提供延长试用期。 在试用期内花费的时间将从客户的下一张发票中扣除：</p><pre><code>use App\\Models\\User;

$subscription = User::find(1)-&gt;subscription(&#39;default&#39;);

// 从现在起 7 天结束试用...
$subscription-&gt;extendTrial(
    now()-&gt;addDays(7)
);

// 试用期再延长 5 天...
$subscription-&gt;extendTrial(
    $subscription-&gt;trial_ends_at-&gt;addDays(5)
);
</code></pre><p><a name="handling-stripe-webhooks"></a></p><h2 id="处理-stripe-webhook" tabindex="-1"><a class="header-anchor" href="#处理-stripe-webhook" aria-hidden="true">#</a> 处理 Stripe Webhook</h2>`,57),fn=e("strong",null,"技巧",-1),_n=e("br",null,null,-1),yn={href:"https://stripe.com/docs/stripe-cli",target:"_blank",rel:"noopener noreferrer"},Sn=t(`<p>Stripe 可以通过 webhook 通知你的应用程序各种事件。 默认情况下，指向 Cashier 的 webhook 控制器的路由由 Cashier 服务提供商自动注册。 该控制器将处理所有传入的 webhook 请求。</p><p>默认情况下，Cashier webhook 控制器将自动处理取消订阅失败次数过多（由你的 Stripe 设置定义）、客户更新、客户删除、订阅更新和付款方式更改； 然而，我们很快就会发现，你可以扩展这个控制器来处理你喜欢的任何 Stripe webhook 事件。</p><p>为确保你的应用程序可以处理 Stripe webhook，请务必在 Stripe 控制面板中配置 webhook URL。 默认情况下，Cashier 的 webhook 控制器响应 <code>/stripe/webhook</code> URL 路径。 你应该在 Stripe 控制面板中启用的所有 webhooks 的完整列表是：</p><ul><li><code>customer.subscription.created</code></li><li><code>customer.subscription.updated</code></li><li><code>customer.subscription.deleted</code></li><li><code>customer.updated</code></li><li><code>customer.deleted</code></li><li><code>invoice.payment_succeeded</code></li><li><code>invoice.payment_action_required</code></li></ul><p>为方便起见，Cashier 包含一个 <code>cashier:webhook</code> Artisan 命令。 此命令将在 Stripe 中创建一个 webhook，用于侦听 Cashier 所需的所有事件：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan cashier:webhook
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>默认情况下，创建的 webhook 将指向由 <code>APP_URL</code> 环境变量和 Cashier 包含的 <code>cashier.webhook</code> 路由定义的 URL。 如果你想使用不同的 URL，你可以在调用命令时提供 <code>--url</code> 选项：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan cashier:webhook <span class="token parameter variable">--url</span> <span class="token string">&quot;https://example.com/stripe/webhook&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>创建的 webhook 将使用与你的 Cashier 版本兼容的 Stripe API 版本。 如果你想使用不同的 Stripe 版本，你可以提供 <code>--api-version</code> 选项：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan cashier:webhook --api-version<span class="token operator">=</span><span class="token string">&quot;2019-12-03&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>创建后，webhook 将立即激活。 如果你想创建 webhook 但在你准备好之前将其禁用，你可以在调用命令时提供 <code>--disabled</code> 选项：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan cashier:webhook <span class="token parameter variable">--disabled</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p><strong>注意</strong><br> 确保使用 Cashier 包含的 <a href="#verifying-webhook-signatures">webhook 签名验证</a>中间件保护传入的 Stripe webhook 请求。</p></blockquote><p><a name="webhooks-csrf-protection"></a></p><h4 id="webhook-和-csrf-保护" tabindex="-1"><a class="header-anchor" href="#webhook-和-csrf-保护" aria-hidden="true">#</a> Webhook 和 CSRF 保护</h4><p>由于 Stripe webhooks 需要绕过 Laravel 的 <a href="./csrf">CSRF 保护</a>，请务必在应用程序的 <code>App\\Http\\Middleware\\VerifyCsrfToken</code> 中间件中将 URI 列为异常或列出路由 在 <code>web</code> 中间件组之外：</p><pre><code>protected $except = [
    &#39;stripe/*&#39;,
];
</code></pre><p><a name="defining-webhook-event-handlers"></a></p><h3 id="定义-webhook-事件处理程序" tabindex="-1"><a class="header-anchor" href="#定义-webhook-事件处理程序" aria-hidden="true">#</a> 定义 Webhook 事件处理程序</h3><p>Cashier 自动处理失败收费和其他常见 Stripe webhook 事件的订阅取消。 但是，如果你有其他想要处理的 webhook 事件，你可以通过收听以下由 Cashier 调度的事件来实现：</p><ul><li><code>Laravel\\Cashier\\Events\\WebhookReceived</code></li><li><code>Laravel\\Cashier\\Events\\WebhookHandled</code></li></ul><p>这两个事件都包含 Stripe webhook 的完整负载。 例如，如果你希望处理 <code>invoice.payment_succeeded</code> webhook，你可以注册一个 <a href="./events#defining-listeners">listener</a> 来处理该事件：</p><pre><code>&lt;?php

namespace App\\Listeners;

use Laravel\\Cashier\\Events\\WebhookReceived;

class StripeEventListener
{
    /**
     * 处理收到的 Stripe webhooks。
     */
    public function handle(WebhookReceived $event): void
    {
        if ($event-&gt;payload[&#39;type&#39;] === &#39;invoice.payment_succeeded&#39;) {
            // 处理传入事件...
        }
    }
}
</code></pre><p>定义监听器后，你可以在应用程序的 <code>EventServiceProvider</code> 中注册它：</p><pre><code>&lt;?php

namespace App\\Providers;

use App\\Listeners\\StripeEventListener;
use Illuminate\\Foundation\\Support\\Providers\\EventServiceProvider as ServiceProvider;
use Laravel\\Cashier\\Events\\WebhookReceived;

class EventServiceProvider extends ServiceProvider
{
    protected $listen = [
        WebhookReceived::class =&gt; [
            StripeEventListener::class,
        ],
    ];
}
</code></pre><p><a name="verifying-webhook-signatures"></a></p><h3 id="验证-webhook-签名" tabindex="-1"><a class="header-anchor" href="#验证-webhook-签名" aria-hidden="true">#</a> 验证 Webhook 签名</h3>`,27),$n={href:"https://stripe.com/docs/webhooks/signatures",target:"_blank",rel:"noopener noreferrer"},qn=t(`<p>要启用 webhook 验证，请确保在应用程序的 <code>.env</code> 文件中设置了 <code>STRIPE_WEBHOOK_SECRET</code> 环境变量。 Webhook <code>secret</code> 可以从你的 Stripe 帐户仪表板中检索。</p><p><a name="single-charges"></a></p><h2 id="单次收费" tabindex="-1"><a class="header-anchor" href="#单次收费" aria-hidden="true">#</a> 单次收费</h2><p><a name="simple-charge"></a></p><h3 id="简单收费" tabindex="-1"><a class="header-anchor" href="#简单收费" aria-hidden="true">#</a> 简单收费</h3><p>如果你想对客户进行一次性收费，你可以在计费模型实例上使用 charge 方法。 你需要<a href="#payment-methods-for-single-charges">提供支付方式标识符</a>作为 <code>charge</code> 方法的第二个参数：</p><pre><code>use Illuminate\\Http\\Request;

Route::post(&#39;/purchase&#39;, function (Request $request) {
    $stripeCharge = $request-&gt;user()-&gt;charge(
        100, $request-&gt;paymentMethodId
    );

    // ...
});
</code></pre>`,7),Cn=e("code",null,"charge",-1),wn={href:"https://stripe.com/docs/api/charges/create",target:"_blank",rel:"noopener noreferrer"},xn=t(`<pre><code>$user-&gt;charge(100, $paymentMethod, [
    &#39;custom_option&#39; =&gt; $value,
]);
</code></pre><p>你也可以在没有基础客户或用户的情况下使用 <code>charge</code> 方法。 为此，请在应用程序的计费模型的新实例上调用 <code>charge</code> 方法：</p><pre><code>use App\\Models\\User;

$stripeCharge = (new User)-&gt;charge(100, $paymentMethod);
</code></pre><p>如果收费失败， <code>charge</code> 方法将抛出异常。 如果收费成功，<code>Laravel\\Cashier\\Payment</code> 的实例将从该方法返回：</p><pre><code>try {
    $payment = $user-&gt;charge(100, $paymentMethod);
} catch (Exception $e) {
    // ...
}
</code></pre><blockquote><p><strong>注意</strong><br><code>charge</code> 方法接受以你的应用程序使用的货币的最低分母表示的付款金额。 例如，如果客户以美元付款，则应以美分指定金额。</p></blockquote><p><a name="charge-with-invoice"></a></p><h3 id="用发票收费" tabindex="-1"><a class="header-anchor" href="#用发票收费" aria-hidden="true">#</a> 用发票收费</h3><p>有时你可能需要一次性收费并向客户提供 PDF 收据。 <code>invoicePrice</code> 方法可以让你做到这一点。例如，让我们为客户开具5件新衬衫的发票：</p><pre><code>$user-&gt;invoicePrice(&#39;price_tshirt&#39;, 5);
</code></pre><p>发票将立即根据用户的默认付款方式收取。<code>invoicePrice</code> 方法也接受一个数组作为它的第三个参数。 此数组包含发票项目的计费选项。该方法接受的第四个参数也是一个数组，其中应包含发票本身的计费选项：</p><pre><code>$user-&gt;invoicePrice(&#39;price_tshirt&#39;, 5, [
    &#39;discounts&#39; =&gt; [
        [&#39;coupon&#39; =&gt; &#39;SUMMER21SALE&#39;]
    ],
], [
    &#39;default_tax_rates&#39; =&gt; [&#39;txr_id&#39;],
]);
</code></pre><p>与 <code>invoicePrice</code> 类似，你可以使用 <code>tabPrice</code> 方法为多个项目（每张发票最多250个项目）创建一次性收费，将它们添加到客户的「标签」，然后向客户开具发票。例如，我们可以为客户开具5件衬衫和2个杯子的发票：</p><pre><code>$user-&gt;tabPrice(&#39;price_tshirt&#39;, 5);
$user-&gt;tabPrice(&#39;price_mug&#39;, 2);
$user-&gt;invoice();
</code></pre><p>或者，你可以使用 <code>invoiceFor</code> 方法对客户的默认付款方式进行「一次性」收费：</p><pre><code>$user-&gt;invoiceFor(&#39;One Time Fee&#39;, 500);
</code></pre><p>虽然 <code>invoiceFor</code> 方法可供你使用，但建议你使用具有预定义价格的 <code>invoicePrice</code> 和 <code>tabPrice</code> 方法。通过这样做，你可以在 Stripe 仪表板中获得更好的分析和数据，以了解你在每个产品的基础上的销售情况。</p><blockquote><p><strong>注意</strong><br><code>invoice</code>、<code>invoicePrice</code> 和 <code>invoiceFor</code> 方法将创建一个 Stripe 发票，失败的发票会继续尝试扣费。如果你不希望失败的发票继续尝试扣费，则需要在第一次扣费失败后使用 Stripe API 关闭它们。</p></blockquote><p><a name="creating-payment-intents"></a></p><h3 id="创建付款意向" tabindex="-1"><a class="header-anchor" href="#创建付款意向" aria-hidden="true">#</a> 创建付款意向</h3><p>你可以通过在计费模型实例上调用 <code>pay</code> 方法来创建新的 Stripe 支付意图。 调用此方法将创建一个包装在 <code>Laravel\\Cashier\\Payment</code> 实例中的支付意图：</p><pre><code>use Illuminate\\Http\\Request;

Route::post(&#39;/pay&#39;, function (Request $request) {
    $payment = $request-&gt;user()-&gt;pay(
        $request-&gt;get(&#39;amount&#39;)
    );

    return $payment-&gt;client_secret;
});
</code></pre>`,22),In={href:"https://stripe.com/docs/payments/accept-a-payment?platform=web",target:"_blank",rel:"noopener noreferrer"},Pn=t(`<p>使用 <code>pay</code> 方法时，你的 Stripe 控制面板中启用的默认付款方式将可供客户使用。 或者，如果你只想允许使用某些特定的支付方式，你可以使用 <code>payWith</code> 方法：</p><pre><code>use Illuminate\\Http\\Request;

Route::post(&#39;/pay&#39;, function (Request $request) {
    $payment = $request-&gt;user()-&gt;payWith(
        $request-&gt;get(&#39;amount&#39;), [&#39;card&#39;, &#39;bancontact&#39;]
    );

    return $payment-&gt;client_secret;
});
</code></pre><blockquote><p><strong>注意</strong><br><code>pay</code> 和 <code>payWith</code> 方法接受以你的应用程序使用的货币的最低分母表示的付款金额。 例如，如果客户以美元付款，则应以美分指定金额。</p></blockquote><p><a name="refunding-charges"></a></p><h3 id="退还费用" tabindex="-1"><a class="header-anchor" href="#退还费用" aria-hidden="true">#</a> 退还费用</h3><p>如果你需要退还 Stripe 费用，你可以使用 refund 方法。 此方法接受 Stripe <a href="#payment-methods-for-single-charges">payment intent ID</a> 作为其第一个参数：</p><pre><code>$payment = $user-&gt;charge(100, $paymentMethodId);

$user-&gt;refund($payment-&gt;id);
</code></pre><p><a name="invoices"></a></p><h2 id="发票" tabindex="-1"><a class="header-anchor" href="#发票" aria-hidden="true">#</a> 发票</h2><p><a name="retrieving-invoices"></a></p><h3 id="检索发票" tabindex="-1"><a class="header-anchor" href="#检索发票" aria-hidden="true">#</a> 检索发票</h3><p>你可以使用 <code>invoices</code> 方法轻松检索可计费模型的发票数组。 <code>invoices</code> 方法返回 <code>Laravel\\Cashier\\Invoice</code> 实例的集合：</p><pre><code>$invoices = $user-&gt;invoices();
</code></pre><p>如果你想在结果中包含待处理的发票，你可以使用 <code>invoicesIncludingPending</code> 方法：</p><pre><code>$invoices = $user-&gt;invoicesIncludingPending();
</code></pre><p>你可以使用 <code>findInvoice</code> 方法通过其 ID 检索特定发票：</p><pre><code>$invoice = $user-&gt;findInvoice($invoiceId);
</code></pre><p><a name="displaying-invoice-information"></a></p><h4 id="显示发票信息" tabindex="-1"><a class="header-anchor" href="#显示发票信息" aria-hidden="true">#</a> 显示发票信息</h4><p>在为客户列出发票时，你可以使用发票的方法显示相关的发票信息。 例如，你可能希望在表格中列出每张发票，以便用户轻松下载其中任何一张：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>    <span class="token operator">&lt;</span>table<span class="token operator">&gt;</span>
        @<span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token variable">$invoices</span> <span class="token keyword">as</span> <span class="token variable">$invoice</span><span class="token punctuation">)</span>
            <span class="token operator">&lt;</span>tr<span class="token operator">&gt;</span>
                <span class="token operator">&lt;</span>td<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token variable">$invoice</span><span class="token operator">-&gt;</span><span class="token function">date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">toFormattedDateString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>td<span class="token operator">&gt;</span>
                <span class="token operator">&lt;</span>td<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token variable">$invoice</span><span class="token operator">-&gt;</span><span class="token function">total</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>td<span class="token operator">&gt;</span>
                <span class="token operator">&lt;</span>td<span class="token operator">&gt;</span><span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string double-quoted-string">&quot;/user/invoice/{{ <span class="token interpolation"><span class="token variable">$invoice</span><span class="token operator">-&gt;</span><span class="token property">id</span></span> }}&quot;</span><span class="token operator">&gt;</span>Download<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>td<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>tr<span class="token operator">&gt;</span>
        @<span class="token keyword">endforeach</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>table<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="upcoming-invoices"></a></p><h3 id="即将收到的发票" tabindex="-1"><a class="header-anchor" href="#即将收到的发票" aria-hidden="true">#</a> 即将收到的发票</h3><p>要检索客户即将收到的发票，你可以使用 <code>upcomingInvoice</code> 方法：</p><pre><code>$invoice = $user-&gt;upcomingInvoice();
</code></pre><p>类似地，如果客户有多个订阅，你还可以检索特定订阅的即将到来的发票：</p><pre><code>$invoice = $user-&gt;subscription(&#39;default&#39;)-&gt;upcomingInvoice();
</code></pre><p><a name="previewing-subscription-invoices"></a></p><h3 id="预览订阅发票" tabindex="-1"><a class="header-anchor" href="#预览订阅发票" aria-hidden="true">#</a> 预览订阅发票</h3><p>使用 <code>previewInvoice</code> 方法，你可以在更改价格之前预览发票。 这将允许你确定在进行给定价格更改时客户发票的外观：</p><pre><code>$invoice = $user-&gt;subscription(&#39;default&#39;)-&gt;previewInvoice(&#39;price_yearly&#39;);
</code></pre><p>你可以将一组价格传递给 <code>previewInvoice</code> 方法，以便预览具有多个新价格的发票：</p><pre><code>$invoice = $user-&gt;subscription(&#39;default&#39;)-&gt;previewInvoice([&#39;price_yearly&#39;, &#39;price_metered&#39;]);
</code></pre><p><a name="generating-invoice-pdfs"></a></p><h3 id="生成发票-pdf" tabindex="-1"><a class="header-anchor" href="#生成发票-pdf" aria-hidden="true">#</a> 生成发票 PDF</h3><p>在生成发票 PDF 之前，你应该用 Composer 安装 Dompdf 库，它是 Cashier 的默认发票渲染器：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>composer <span class="token keyword">require</span> dompdf<span class="token operator">/</span>dompdf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在路由或控制器中，你可以使用 <code>downloadInvoice</code> 方法生成给定发票的 PDF 下载。此方法将自动生成下载发票所需的正确 HTTP 响应：</p><pre><code>use Illuminate\\Http\\Request;

Route::get(&#39;/user/invoice/{invoice}&#39;, function (Request $request, string $invoiceId) {
    return $request-&gt;user()-&gt;downloadInvoice($invoiceId);
});
</code></pre><p>默认情况下，发票上的所有数据都来自存储在 Stripe 中的客户和发票数据。文件名是基于你的 <code>app.name</code> 配置值。但是，你可以通过提供一个数组作为 <code>downloadInvoice</code> 方法的第二个参数来自定义其中的一些数据。 此数组允许你自定义信息，例如你的公司和产品详细信息：</p><pre><code>return $request-&gt;user()-&gt;downloadInvoice($invoiceId, [
    &#39;vendor&#39; =&gt; &#39;Your Company&#39;,
    &#39;product&#39; =&gt; &#39;Your Product&#39;,
    &#39;street&#39; =&gt; &#39;Main Str. 1&#39;,
    &#39;location&#39; =&gt; &#39;2000 Antwerp, Belgium&#39;,
    &#39;phone&#39; =&gt; &#39;+32 499 00 00 00&#39;,
    &#39;email&#39; =&gt; &#39;info@example.com&#39;,
    &#39;url&#39; =&gt; &#39;https://example.com&#39;,
    &#39;vendorVat&#39; =&gt; &#39;BE123456789&#39;,
]);
</code></pre><p><code>downloadInvoice</code> 方法还允许通过其第三个参数自定义文件名。此文件名将自动以 <code>.pdf</code> 为后缀：</p><pre><code>return $request-&gt;user()-&gt;downloadInvoice($invoiceId, [], &#39;my-invoice&#39;);
</code></pre><p><a name="custom-invoice-render"></a></p><h4 id="自定义发票渲染器" tabindex="-1"><a class="header-anchor" href="#自定义发票渲染器" aria-hidden="true">#</a> 自定义发票渲染器</h4>`,45),Rn=e("code",null,"DompdfInvoiceRenderer",-1),Mn={href:"https://github.com/dompdf/dompdf",target:"_blank",rel:"noopener noreferrer"},An=e("code",null,"Laravel\\Cashier\\Contracts\\InvoiceRenderer",-1),En=e("pre",null,[e("code",null,`use Illuminate\\Support\\Facades\\Http;
use Laravel\\Cashier\\Contracts\\InvoiceRenderer;
use Laravel\\Cashier\\Invoice;

class ApiInvoiceRenderer implements InvoiceRenderer
{
    /**
     * 呈现给定的发票并返回原始 PDF 字节。
     */
    public function render(Invoice $invoice, array $data = [], array $options = []): string
    {
        $html = $invoice->view($data)->render();

        return Http::get('https://example.com/html-to-pdf', ['html' => $html])->get()->body();
    }
}
`)],-1),Tn=e("p",null,[n("一旦你实现了发票渲染器合约，你应该在你的应用程序的 "),e("code",null,"config/cashier.php"),n(" 配置文件中更新 "),e("code",null,"cashier.invoices.renderer"),n(" 配置值。 此配置值应设置为自定义渲染器实现的类名。")],-1),Dn=e("p",null,[e("a",{name:"checkout"})],-1),Un=e("h2",{id:"结账",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#结账","aria-hidden":"true"},"#"),n(" 结账")],-1),Ln={href:"https://stripe.com/payments/checkout",target:"_blank",rel:"noopener noreferrer"},Hn={href:"https://stripe.com/docs/payments/checkout",target:"_blank",rel:"noopener noreferrer"},Bn=t(`<p><a name="product-checkouts"></a></p><h3 id="产品结账" tabindex="-1"><a class="header-anchor" href="#产品结账" aria-hidden="true">#</a> 产品结账</h3><p>你可以在计费模型上使用 <code>checkout</code> 方法对已在 Stripe 仪表板中创建的现有产品执行结帐。 <code>checkout</code> 方法将启动一个新的 Stripe Checkout 会话。 默认情况下，你需要传递 Stripe Price ID：</p><pre><code>use Illuminate\\Http\\Request;

Route::get(&#39;/product-checkout&#39;, function (Request $request) {
    return $request-&gt;user()-&gt;checkout(&#39;price_tshirt&#39;);
});
</code></pre><p>如果需要，你还可以指定产品数量：</p><pre><code>use Illuminate\\Http\\Request;

Route::get(&#39;/product-checkout&#39;, function (Request $request) {
    return $request-&gt;user()-&gt;checkout([&#39;price_tshirt&#39; =&gt; 15]);
});
</code></pre><p>当客户访问此路由时，他们将被重定向到 Stripe 的结帐页面。 默认情况下，当用户成功完成或取消购买时，他们将被重定向到你的 <code>home</code> 路由位置，但你可以使用 <code>success_url</code> 和 <code>cancel_url</code> 参数指定自定义回调 URL：</p><pre><code>use Illuminate\\Http\\Request;

Route::get(&#39;/product-checkout&#39;, function (Request $request) {
    return $request-&gt;user()-&gt;checkout([&#39;price_tshirt&#39; =&gt; 1], [
        &#39;success_url&#39; =&gt; route(&#39;your-success-route&#39;),
        &#39;cancel_url&#39; =&gt; route(&#39;your-cancel-route&#39;),
    ]);
});
</code></pre><p>在定义 <code>success_url</code> 结帐选项时，你可以指示 Stripe 在调用 URL 时将结帐会话 ID 添加为查询字符串参数。为此，请将文字字符串 <code>{CHECKOUT_SESSION_ID}</code> 添加到你的 <code>success_url</code> 查询字符串。Stripe 将用实际的结帐会话 ID 替换此占位符：</p><pre><code>use Illuminate\\Http\\Request;
use Stripe\\Checkout\\Session;
use Stripe\\Customer;

Route::get(&#39;/product-checkout&#39;, function (Request $request) {
    return $request-&gt;user()-&gt;checkout([&#39;price_tshirt&#39; =&gt; 1], [
        &#39;success_url&#39; =&gt; route(&#39;checkout-success&#39;).&#39;?session_id={CHECKOUT_SESSION_ID}&#39;,
        &#39;cancel_url&#39; =&gt; route(&#39;checkout-cancel&#39;),
    ]);
});

Route::get(&#39;/checkout-success&#39;, function (Request $request) {
    $checkoutSession = $request-&gt;user()-&gt;stripe()-&gt;checkout-&gt;sessions-&gt;retrieve($request-&gt;get(&#39;session_id&#39;));

    return view(&#39;checkout.success&#39;, [&#39;checkoutSession&#39; =&gt; $checkoutSession]);
})-&gt;name(&#39;checkout-success&#39;);
</code></pre><p><a name="checkout-promotion-codes"></a></p><h4 id="优惠码" tabindex="-1"><a class="header-anchor" href="#优惠码" aria-hidden="true">#</a> 优惠码</h4>`,12),jn={href:"https://stripe.com/docs/billing/subscriptions/discounts/codes",target:"_blank",rel:"noopener noreferrer"},Nn=e("code",null,"allowPromotionCodes",-1),Fn=t(`<pre><code>use Illuminate\\Http\\Request;

Route::get(&#39;/product-checkout&#39;, function (Request $request) {
    return $request-&gt;user()
        -&gt;allowPromotionCodes()
        -&gt;checkout(&#39;price_tshirt&#39;);
});
</code></pre><p><a name="single-charge-checkouts"></a></p><h3 id="单次收费结账" tabindex="-1"><a class="header-anchor" href="#单次收费结账" aria-hidden="true">#</a> 单次收费结账</h3><p>你还可以对尚未在 Stripe 仪表板中创建的临时产品进行简单收费。为此，你可以在计费模型上使用 <code>checkoutCharge</code> 方法，并向其传递可计费金额、产品名称和可选数量。当客户访问此路由时，他们将被重定向到 Stripe 的结帐页面：</p><pre><code>use Illuminate\\Http\\Request;

Route::get(&#39;/charge-checkout&#39;, function (Request $request) {
    return $request-&gt;user()-&gt;checkoutCharge(1200, &#39;T-Shirt&#39;, 5);
});
</code></pre><blockquote><p><strong>注意</strong><br> 当使用 <code>checkoutCharge</code> 方法时，Stripe 将始终在你的 Stripe 仪表板中创建新产品和价格。因此，我们建议你在 Stripe 仪表板中预先创建产品，并改用 <code>checkout</code> 方法。</p></blockquote><p><a name="subscription-checkouts"></a></p><h3 id="订阅结帐" tabindex="-1"><a class="header-anchor" href="#订阅结帐" aria-hidden="true">#</a> 订阅结帐</h3><blockquote><p><strong>注意</strong><br> 使用 Stripe Checkout 进行订阅需要你在 Stripe 仪表板中启用 <code>customer.subscription.created</code> webhook。 此 webhook 将在你的数据库中创建订阅记录并存储所有相关的订阅项。</p></blockquote><p>你也可以使用 Stripe Checkout 来启动订阅。 在使用 Cashier 的订阅构建器方法定义你的订阅后，你可以调用 <code>checkout</code> 方法。 当客户访问此路由时，他们将被重定向到 Stripe 的结帐页面：</p><pre><code>use Illuminate\\Http\\Request;

Route::get(&#39;/subscription-checkout&#39;, function (Request $request) {
    return $request-&gt;user()
        -&gt;newSubscription(&#39;default&#39;, &#39;price_monthly&#39;)
        -&gt;checkout();
});
</code></pre><p>与产品结帐一样，你可以自定义成功和取消 URL：</p><pre><code>use Illuminate\\Http\\Request;

Route::get(&#39;/subscription-checkout&#39;, function (Request $request) {
    return $request-&gt;user()
        -&gt;newSubscription(&#39;default&#39;, &#39;price_monthly&#39;)
        -&gt;checkout([
            &#39;success_url&#39; =&gt; route(&#39;your-success-route&#39;),
            &#39;cancel_url&#39; =&gt; route(&#39;your-cancel-route&#39;),
        ]);
});
</code></pre><p>当然，你也可以为订阅结帐启用优惠码：</p><pre><code>use Illuminate\\Http\\Request;

Route::get(&#39;/subscription-checkout&#39;, function (Request $request) {
    return $request-&gt;user()
        -&gt;newSubscription(&#39;default&#39;, &#39;price_monthly&#39;)
        -&gt;allowPromotionCodes()
        -&gt;checkout();
});
</code></pre>`,15),On=e("strong",null,"注意",-1),Wn=e("br",null,null,-1),Gn=e("code",null,"anchorBillingCycleOn",-1),Qn={href:"https://stripe.com/docs/api/checkout/sessions/create",target:"_blank",rel:"noopener noreferrer"},Kn=t(`<p><a name="stripe-checkout-trial-periods"></a></p><h4 id="stripe-checkout-和试用期" tabindex="-1"><a class="header-anchor" href="#stripe-checkout-和试用期" aria-hidden="true">#</a> Stripe Checkout 和试用期</h4><p>当然，你可以在构建将使用 Stripe Checkout 完成的订阅时定义一个试用期：</p><pre><code>$checkout = Auth::user()-&gt;newSubscription(&#39;default&#39;, &#39;price_monthly&#39;)
    -&gt;trialDays(3)
    -&gt;checkout();
</code></pre><p>但是，试用期必须至少为 48 小时，这是 Stripe Checkout 支持的最短试用时间。</p><p><a name="stripe-checkout-subscriptions-and-webhooks"></a></p><h4 id="订阅和-webhooks" tabindex="-1"><a class="header-anchor" href="#订阅和-webhooks" aria-hidden="true">#</a> 订阅和 Webhooks</h4><p>请记住，Stripe 和 Cashier 通过 webhook 更新订阅状态，因此当客户在输入付款信息后返回应用程序时，订阅可能尚未激活。要处理这种情况，你可能希望显示一条消息，通知用户他们的付款或订阅处于待处理状态。</p><p><a name="collecting-tax-ids"></a></p><h3 id="收集税号-id" tabindex="-1"><a class="header-anchor" href="#收集税号-id" aria-hidden="true">#</a> 收集税号 ID</h3><p>Checkout 还支持收集客户的税号。要在结帐会话上启用此功能，请在创建会话时调用 <code>collectTaxIds</code> 方法：</p><pre><code>$checkout = $user-&gt;collectTaxIds()-&gt;checkout(&#39;price_tshirt&#39;);
</code></pre><p>调用此方法时，客户会显示一个新的复选框，允许他们选择是否作为公司进行采购。如果选择是，他们可以提供他们的税号。</p><blockquote><p><strong>注意</strong><br> 如果你已经在应用程序的服务提供者中配置了 <a href="#tax-configuration">自动征税</a> ，那么该功能将自动启用，无需调用 <code>collectTaxIds</code> 方法。</p></blockquote><p><a name="guest-checkouts"></a></p><h3 id="访客结账" tabindex="-1"><a class="header-anchor" href="#访客结账" aria-hidden="true">#</a> 访客结账</h3><p>使用 <code>Checkout::guest</code> 方法，你可以为你的应用程序中没有注册过「账户」的访客启动结账会话：</p><pre><code>use Illuminate\\Http\\Request;
use Laravel\\Cashier\\Checkout;

Route::get(&#39;/product-checkout&#39;, function (Request $request) {
    return Checkout::guest()-&gt;create(&#39;price_tshirt&#39;, [
        &#39;success_url&#39; =&gt; route(&#39;your-success-route&#39;),
        &#39;cancel_url&#39; =&gt; route(&#39;your-cancel-route&#39;),
    ]);
});
</code></pre><p>与为现有用户创建结账会话类似，你可以利用 <code>Laravel\\Cashier\\CheckoutBuilder</code> 实例上的其他方法来定制访客结账会话：</p><pre><code>use Illuminate\\Http\\Request;
use Laravel\\Cashier\\Checkout;

Route::get(&#39;/product-checkout&#39;, function (Request $request) {
    return Checkout::guest()
        -&gt;withPromotionCode(&#39;promo-code&#39;)
        -&gt;create(&#39;price_tshirt&#39;, [
            &#39;success_url&#39; =&gt; route(&#39;your-success-route&#39;),
            &#39;cancel_url&#39; =&gt; route(&#39;your-cancel-route&#39;),
        ]);
});
</code></pre>`,20),Yn=e("code",null,"checkout.session.completed",-1),Vn={href:"https://dashboard.stripe.com/webhooks",target:"_blank",rel:"noopener noreferrer"},zn=e("a",{href:"#handling-stripe-webhooks"},"用 Cashier 处理 webhook ",-1),Jn={href:"https://stripe.com/docs/api/checkout/sessions/object",target:"_blank",rel:"noopener noreferrer"},Xn=e("code",null,"checkout",-1),Zn=t(`<p><a name="handling-failed-payments"></a></p><h2 id="处理失败的付款" tabindex="-1"><a class="header-anchor" href="#处理失败的付款" aria-hidden="true">#</a> 处理失败的付款</h2><p>有时，订阅或单笔费用的付款可能会失败。当这种情况发生时，Cashier 会抛出一个 <code>Laravel\\Cashier\\Exceptions\\IncompletePayment</code> 异常，通知你发生了这种情况。捕获此异常后，你有两个选择如何继续。</p><p>首先，你可以将你的客户重定向到 Cashier 附带的专用付款确认页面。该页面已经有一个通过 Cashier 的服务提供商注册的关联命名路由。因此，你可能会捕获 <code>IncompletePayment</code> 异常并将用户重定向到付款确认页面：</p><pre><code>use Laravel\\Cashier\\Exceptions\\IncompletePayment;

try {
    $subscription = $user-&gt;newSubscription(&#39;default&#39;, &#39;price_monthly&#39;)
                            -&gt;create($paymentMethod);
} catch (IncompletePayment $exception) {
    return redirect()-&gt;route(
        &#39;cashier.payment&#39;,
        [$exception-&gt;payment-&gt;id, &#39;redirect&#39; =&gt; route(&#39;home&#39;)]
    );
}
</code></pre><p>在付款确认页面上，将提示客户再次输入他们的信用卡信息并执行 Stripe 要求的任何其他操作，例如 「3D Secure」确认。 确认付款后，用户将被重定向到上面指定的 <code>redirect</code> 参数提供的 URL 。重定向后， <code>message</code> （字符串）和 <code>success</code> （整数）查询字符串变量将被添加到 URL 。支付页面目前支持以下支付方式类型：</p>`,6),ea=e("div",{class:"content-list",markdown:"1"},[e("ul",null,[e("li",null,"Credit Cards"),e("li",null,"Alipay"),e("li",null,"Bancontact"),e("li",null,"BECS Direct Debit"),e("li",null,"EPS"),e("li",null,"Giropay"),e("li",null,"iDEAL"),e("li",null,"SEPA Direct Debit")])],-1),na={href:"https://dashboard.stripe.com/account/billing/automatic",target:"_blank",rel:"noopener noreferrer"},aa=e("code",null,"IncompletePayment",-1),sa=t(`<p>以下方法可能会抛出支付异常：使用 <code>Billable</code> 特性的模型上的 <code>charge</code> 、 <code>invoiceFor</code> 和 <code>invoice</code>。 与订阅交互时，<code>SubscriptionBuilder</code> 上的<code>create</code> 方法以及<code>Subscription</code> 和<code>SubscriptionItem</code> 模型上的<code>incrementAndInvoice</code> 和<code>swapAndInvoice</code> 方法可能会抛出未完成支付异常。</p><p>可以使用计费模型或订阅实例上的 <code>hasIncompletePayment</code> 方法来确定现有订阅是否有未完成的付款：</p><pre><code>if ($user-&gt;hasIncompletePayment(&#39;default&#39;)) {
    // ...
}

if ($user-&gt;subscription(&#39;default&#39;)-&gt;hasIncompletePayment()) {
    // ...
}
</code></pre><p>你可以通过检查异常实例上的 <code>payment</code> 属性来获取未完成付款的具体状态：</p><pre><code>use Laravel\\Cashier\\Exceptions\\IncompletePayment;

try {
    $user-&gt;charge(1000, &#39;pm_card_threeDSecure2Required&#39;);
} catch (IncompletePayment $exception) {
    // 获取支付意目标状态...
    $exception-&gt;payment-&gt;status;

    // 检查具体条件...
    if ($exception-&gt;payment-&gt;requiresPaymentMethod()) {
        // ...
    } elseif ($exception-&gt;payment-&gt;requiresConfirmation()) {
        // ...
    }
}
</code></pre><p><a name="strong-customer-authentication"></a></p><h2 id="强大的客户认证" tabindex="-1"><a class="header-anchor" href="#强大的客户认证" aria-hidden="true">#</a> 强大的客户认证</h2><p>如果你的企业或你的客户之一位于欧洲，你将需要遵守欧盟的强客户认证 (SCA) 法规。 欧盟于 2019 年 9 月实施了这些规定，以防止支付欺诈。 幸运的是，Stripe 和 Cashier 已准备好构建符合 SCA 的应用程序。</p>`,8),ta=e("strong",null,"注意",-1),oa={href:"https://stripe.com/guides/strong-customer-authentication",target:"_blank",rel:"noopener noreferrer"},pa={href:"https://stripe.com/docs/strong-customer-authentication",target:"_blank",rel:"noopener noreferrer"},ca=t(`<p><a name="payments-requiring-additional-confirmation"></a></p><h3 id="需要额外确认的付款" tabindex="-1"><a class="header-anchor" href="#需要额外确认的付款" aria-hidden="true">#</a> 需要额外确认的付款</h3><p>SCA 法规通常需要额外验证以确认和处理付款。 发生这种情况时，Cashier 将抛出一个 <code>Laravel\\Cashier\\Exceptions\\IncompletePayment</code> 异常，通知你需要额外的验证。 有关如何处理这些异常的更多信息，请参阅有关的 <a href="#handling-failed-payments">handling failed payments</a> 文档。</p><p>Stripe 或 Cashier 显示的支付确认屏幕可能会根据特定银行或发卡机构的支付流程进行定制，并且可能包括额外的银行卡确认、临时小额收费、单独的设备身份验证或其他形式的验证。</p><p><a name="incomplete-and-past-due-state"></a></p><h4 id="未完成和逾期状态" tabindex="-1"><a class="header-anchor" href="#未完成和逾期状态" aria-hidden="true">#</a> 未完成和逾期状态</h4><p>当付款需要额外确认时，订阅将保持在 <code>incomplete</code> 或 <code>past_due</code> 状态，如其 <code>stripe_status</code> 数据库列所示。 付款确认完成后，Cashier 将自动激活客户的订阅，并且 Stripe 通过 webhook 通知你的应用程序已完成。</p><p>有关 <code>incomplete</code> 和 <code>past_due</code> 状态的更多信息，请参阅<a href="#incomplete-and-past-due-status">我们关于这些状态的附加文档</a>。</p><p><a name="off-session-payment-notifications"></a></p><h3 id="非会话付款通知" tabindex="-1"><a class="header-anchor" href="#非会话付款通知" aria-hidden="true">#</a> 非会话付款通知</h3><p>由于 SCA 法规要求客户偶尔验证他们的付款细节，即使他们的订阅处于活动状态，Cashier 也可以在需要非会话付款确认时向客户发送通知。 例如，这可能在订阅续订时发生。 可以通过将 <code>CASHIER_PAYMENT_NOTIFICATION</code> 环境变量设置为通知类来启用收银员的付款通知。 默认情况下，此通知处于禁用状态。 当然，Cashier 包含一个你可以用于此目的的通知类，但如果需要，你可以自由提供自己的通知类：</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token key attr-name">CASHIER_PAYMENT_NOTIFICATION</span><span class="token punctuation">=</span><span class="token value attr-value">Laravel\\Cashier\\Notifications\\ConfirmPayment</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>为确保发送会话外付款确认通知，请验证你的应用程序的 <a href="#handling-stripe-webhooks">Stripe webhooks 已配置</a>并且在你的 Stripe 仪表板中启用了 <code>invoice.payment_action_required</code> 。 此外，你的 <code>Billable</code> 模型还应该使用 Laravel 的 <code>Illuminate\\Notifications\\Notifiable</code> 特性。</p><blockquote><p><strong>注意</strong> 即使客户手动进行需要额外确认的付款，也会发送通知。 不幸的是，Stripe 无法知道付款是手动完成的还是「离线」完成的。 但是，如果客户在确认付款后访问付款页面，他们只会看到「付款成功」消息。 不允许客户不小心确认两次相同的付款而招致意外的二次扣款。</p></blockquote><p><a name="stripe-sdk"></a></p><h2 id="stripe-sdk" tabindex="-1"><a class="header-anchor" href="#stripe-sdk" aria-hidden="true">#</a> Stripe SDK</h2><p>Cashier 的许多对象都是 Stripe SDK 对象的包装器。 如果你想直接与 Stripe 对象交互，你可以使用 <code>asStripe</code> 方法方便地搜索它们：:</p><pre><code>$stripeSubscription = $subscription-&gt;asStripeSubscription();

$stripeSubscription-&gt;application_fee_percent = 5;

$stripeSubscription-&gt;save();
</code></pre><p>你还可以使用 <code>updateStripeSubscription</code> 方法直接更新 Stripe 订阅：</p><pre><code>$subscription-&gt;updateStripeSubscription([&#39;application_fee_percent&#39; =&gt; 5]);
</code></pre><p>如果你想直接使用 <code>Stripe\\StripeClient</code> 客户端，你可以调用 <code>Cashier</code> 类的 <code>stripe</code> 方法。 例如，你可以使用此方法访问「StripeClient」实例并从你的 Stripe 帐户中搜索价格列表：</p><pre><code>use Laravel\\Cashier\\Cashier;

$prices = Cashier::stripe()-&gt;prices-&gt;all();
</code></pre><p><a name="testing"></a></p><h2 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h2><p>在测试使用 Cashier 的应用程序时，你可以模拟对 Stripe API 的实际 HTTP 请求； 但是，这需要你重新实现部分地 Cashier 自己的行为。 因此，我们建议让你的测试命中实际的 Stripe API。 虽然速度较慢，但它可以让你更加确信你的应用程序正在按预期工作，并且任何缓慢的测试都可以放在他们自己的 PHPUnit 测试组中。</p><p>测试时，请记住 Cashier 本身已经有一个很棒的测试套件，因此你应该只专注于测试自己的应用程序的订阅和支付流程，而不是每个底层的 Cashier 行为。</p><p>首先，将 Stripe 密钥的 <strong>testing</strong> 版本添加到你的 <code>phpunit.xml</code> 文件中：</p><pre><code>&lt;env name=&quot;STRIPE_SECRET&quot; value=&quot;sk_test_&lt;your-key&gt;&quot;/&gt;
</code></pre><p>现在，每当你在测试时与 Cashier 交互时，它都会向你的 Stripe 测试环境发送实际的 API 请求。为方便起见，你应该使用可能在测试期间使用的订阅 / 计划预先填写你的 Stripe 测试帐户。</p>`,29),ra=e("strong",null,"技巧",-1),ia=e("br",null,null,-1),da={href:"https://stripe.com/docs/testing",target:"_blank",rel:"noopener noreferrer"};function la(ua,ha){const a=p("ExternalLinkIcon");return c(),r("div",null,[d,e("p",null,[e("a",l,[n("Laravel Cashier Stripe"),s(a)]),n(" 为 "),e("a",u,[n("Stripe"),s(a)]),n(" 的订阅计费服务提供了一个富有表现力、流畅的接口。它处理了几乎所有你害怕编写的订阅计费样板代码。除了基本的订阅管理，Cashier 还可以处理优惠券、交换订阅、订阅 「数量」、取消宽限期，甚至生成发票 PDF。")]),h,k,e("p",null,[n("升级到新版本的 Cashier 时，请务必仔细阅读"),e("a",m,[n("升级指南"),s(a)]),n("。")]),g,e("blockquote",null,[e("p",null,[b,n(" Stripe 建议用于存储 Stripe 标识符的任何列都应区分大小写。因此，在使用 MySQL 时，应该确保将 "),v,n(" 列排序规则设置为 "),f,n(" 。更多关于这方面的信息可以在 "),e("a",_,[n("Stripe 文档"),s(a)]),n("中找到。")])]),y,e("p",null,[n("除了配置 Cashier 的货币之外，还可以在格式化用于显示在发票上的金额时指定本地化配置。在底层，Cashier 使用了 "),e("a",S,[n("PHP 的 "),$,n(" 类"),s(a)]),n("来设置本地货币：")]),q,e("p",null,[n("感谢"),e("a",C,[n("Stripe 税务"),s(a)]),n("，可以自动计算 Stripe 生成的所有发票的税费。 可以通过应用程序的 "),w,n("类的 "),x,n(" 方法中调用 "),I,n(" 来启用自动税务计算：")]),P,e("p",null,[n("在 Stripe 中创建客户后，你可以在以后开始订阅。 你可以提供一个可选的 "),R,n(" 数组来传递任何额外的 "),e("a",M,[n("Stripe API 支持的客户创建参数"),s(a)]),n("：")]),A,e("p",null,[n("有时，你可能希望直接向 Stripe 客户更新其他信息。 你可以使用 "),E,n(" 方法完成此操作。 此方法接受一组 "),e("a",T,[n("Stripe API 支持的客户更新选项"),s(a)]),n("：")]),D,e("p",null,[n("Cashier 提供了一种管理客户税号的简便方法。"),U,n(" 例如，"),L,n(" 方法可用于检索作为集合分配给客户的所有"),e("a",H,[n("税号"),s(a)]),n("：")]),B,j,N,e("p",null,[n("你可以通过向 "),F,n(" 方法提供有效的 "),e("a",O,[n("type"),s(a)]),n(" 和值来创建新的税号：")]),W,e("p",null,[G,n(" 方法将立即将增值税 ID 添加到客户的帐户中。 "),e("a",Q,[n("增值税 ID 的验证也由 Stripe 完成"),s(a)]),n("； 然而，这是一个异步的过程。 你可以通过订阅 "),K,n(" webhook 事件并检查 "),e("a",Y,[n("增值税 ID "),V,n(" 参数"),s(a)]),n("。 有关处理 webhook 的更多信息，请参阅"),z,n("。")]),J,e("p",null,[n("同样，你可以复写 "),X,n("、"),Z,n(" 和 "),ee,n(" 方法。 当"),e("a",ne,[n("更新 Stripe 客户对象"),s(a)]),n("时，这些方法会将信息同步到其相应的客户参数。 如果你希望完全控制客户信息同步过程，你可以复写 "),ae,n(" 方法。")]),se,te,e("p",null,[n("Stripe 提供了一个简单的方式来"),e("a",oe,[n("设置订单入口"),s(a)]),n("以便用户可以管理订阅、支付方法、以及查看历史账单。你可以在控制器或路由中使用 "),pe,n(" 方法将用户重定向到账单入口：")]),ce,e("p",null,[n("接下来，可以使用 Stripe.js 库将 "),e("a",re,[n("Stripe 元素"),s(a)]),n(" 附加到表单并安全地收集客户的付款详细信息：")]),ie,e("p",null,[n("接下来，可以验证卡并使用 "),e("a",de,[n("Stripe 的 "),le,n(" 方法"),s(a)]),n("从 Stripe 检索安全的「支付方式标识符」：")]),ue,e("p",null,[n("接下来，可以使用 Stripe.js 库将 "),e("a",he,[n("Stripe 元素"),s(a)]),n("附加到表单并安全地收集客户的付款详细信息:")]),ke,e("p",null,[n("接下来，可以从 Stripe 搜索安全的「支付方式标识符」验证银行卡并使用 "),e("a",me,[n("Stripe 的 "),ge,n(" 方法"),s(a)]),n(":")]),be,e("blockquote",null,[e("p",null,[ve,fe,n(" 如果你想了解有关设置目的和收集客户付款详细信息的更多信息，请"),e("a",_e,[n("查看 Stripe 提供的概述"),s(a)]),n("。")])]),ye,e("p",null,[n("定义这样的表单后，可以使用 Stripe.js 库将"),e("a",Se,[n("Stripe 元素"),s(a)]),n("附加到表单并安全地收集客户的付款详细信息：")]),$e,e("p",null,[n("接下来，可以验证卡并使用 "),e("a",qe,[n("Stripe 的 "),Ce,n(" 方法"),s(a)]),n(" 从 Stripe 检索安全的「支付方式标识符」-方法）：")]),we,e("blockquote",null,[e("p",null,[xe,n(" 如果你想了解有关设置目的和收集客户付款详细信息的更多信息，请"),e("a",Ie,[n("查看 Stripe 提供的概述"),s(a)]),n(".")])]),Pe,e("p",null,[n("在定义了这样一个表单之后，可以使用 Stripe.js 库将 "),e("a",Re,[n("Stripe Element"),s(a)]),n(" 附加到表单并安全地收集客户的付款详细信息：")]),Me,e("p",null,[n("接下来，可以验证银行卡并使用 "),e("a",Ae,[n("Stripe 的 "),Ee,n(" 方法"),s(a)]),n(":")]),Te,e("p",null,[n("如果你想在创建订阅时为价格设置特定的"),e("a",De,[n("数量"),s(a)]),n("，你应该在创建之前调用订阅构建器上的 "),Ue,n(" 方法 订阅：")]),Le,He,Be,e("p",null,[n("如果你想指定支持的其他"),e("a",je,[n("客户"),s(a)]),n("或"),e("a",Ne,[n("订阅"),s(a)]),n("选项 通过 Stripe，你可以通过将它们作为第二个和第三个参数传递给 "),Fe,n(" 方法来实现：")]),Oe,We,Ge,Qe,Ke,e("p",null,[n("或者，如果你想应用 "),e("a",Ye,[n("Stripe 促销代码"),s(a)]),n("，你可以使用 "),Ve,n(" 方法：")]),ze,e("p",null,[n("有关此主题的更多信息，请参阅有关"),e("a",Je,[n("优惠券"),s(a)]),n("和"),e("a",Xe,[n("促销代码"),s(a)]),n("的 Stripe 文档 /订阅/优惠券/代码）。")]),Ze,e("p",null,[n("有关订阅按比例分配的更多信息，请参阅 "),e("a",en,[n("Stripe 文档"),s(a)]),n("。")]),nn,e("p",null,[n("有关订阅数量的更多信息，请参阅 "),e("a",an,[n("Stripe 文档"),s(a)]),n("。")]),sn,e("p",null,[e("a",tn,[n("订阅多个产品"),s(a)]),n("允许你将多个计费产品分配给一个订阅。 例如，假设你正在构建一个客户服务「帮助台」应用程序，其基本订阅价格为每月 10 美元，但提供实时聊天附加产品，每月额外收费 15 美元。 包含多个产品的订阅信息存储在 Cashier 的 "),on,n(" 数据库表中。")]),pn,e("p",null,[e("a",cn,[n("计量计费"),s(a)]),n(" 允许你根据客户在计费周期内的产品使用情况向客户收费。 例如，你可以根据客户每月发送的短信或电子邮件的数量向客户收费。")]),rn,e("p",null,[n("有关返回的所有使用数据的完整参考以及如何使用 Stripe 基于游标的分页，请参阅"),e("a",dn,[n("官方 Stripe API 文档"),s(a)]),n("。")]),ln,un,hn,e("p",null,[n("要指定用户为订阅支付的税率，你应该在计费模型上实施 "),kn,n(" 方法并返回一个包含 Stripe 税率 ID 的数组。你可以在"),e("a",mn,[n("你的 Stripe 控制面板"),s(a)]),n(" 中定义这些税率：")]),gn,e("p",null,[n("有关管理订阅计费周期的更多信息，请参阅 "),e("a",bn,[n("Stripe 计费周期文档"),s(a)])]),vn,e("blockquote",null,[e("p",null,[fn,_n,n(" 你可以使用 "),e("a",yn,[n("Stripe CLI"),s(a)]),n(" 在本地开发期间帮助测试 webhook。")])]),Sn,e("p",null,[n("为了保护你的 webhook，你可以使用 "),e("a",$n,[n("Stripe 的 webhook 签名"),s(a)]),n("。为方便起见，Cashier 自动包含一个中间件，用于验证传入的 Stripe webhook 请求是否有效。")]),qn,e("p",null,[Cn,n(" 方法接受一个数组作为它的第三个参数，允许你将你希望的任何选项传递给底层的 Stripe 费用创建。 有关创建费用时可用选项的更多信息，请参见 "),e("a",wn,[n("Stripe 文档"),s(a)]),n("：")]),xn,e("p",null,[n("创建支付意图后，你可以将客户端密码返回到应用程序的前端，以便用户可以在其浏览器中完成支付。 要阅读有关使用 Stripe 支付意图构建整个支付流程的更多信息，请参阅 "),e("a",In,[n("Stripe 文档"),s(a)]),n("。")]),Pn,e("p",null,[n("Cashier 还可以使用自定义发票渲染器。 默认情况下，Cashier 使用 "),Rn,n(" 实现，它利用 "),e("a",Mn,[n("dompdf"),s(a)]),n(" PHP 库来生成 Cashier 的发票。但是，你可以通过实现 "),An,n(" 接口来使用任何你想要的渲染器。 例如，你可能希望使用对第三方 PDF 呈现服务的 API 调用来呈现发票 PDF：")]),En,Tn,Dn,Un,e("p",null,[n("Cashier Stripe 还提供对 "),e("a",Ln,[n("Stripe Checkout"),s(a)]),n(" 的支持。 Stripe Checkout 通过提供预构建的托管支付页面，消除了实施自定义页面以接受付款的痛苦。")]),e("p",null,[n("以下文档包含有关如何开始使用 Stripe Checkout with Cashier 的信息。 要了解有关 Stripe Checkout 的更多信息，你还应该考虑查看 "),e("a",Hn,[n("Stripe 自己的 Checkout 文档"),s(a)]),n(" 。")]),Bn,e("p",null,[n("默认情况下，Stripe Checkout 不允许"),e("a",jn,[n("用户可兑换促销代码"),s(a)]),n(" 。幸运的是，有一种简单的方法可以为你的结帐页面启用这些功能。为此，你可以调用 "),Nn,n(" 方法：")]),Fn,e("blockquote",null,[e("p",null,[On,Wn,n(" 不幸的是，在开始订阅时，Stripe Checkout 不支持所有订阅计费选项。在订阅生成器上使用 "),Gn,n(" 方法、设置按比例分配行为或设置支付行为在 Stripe Checkout 会话期间不会有任何影响。请查阅 "),e("a",Qn,[n("Stripe Checkout Session API 文档"),s(a)]),n("以查看可用的参数。")])]),Kn,e("p",null,[n("在访客结账完成后，Stripe 会发送一个 "),Yn,n(" 的 webhook 事件，所以请确保"),e("a",Vn,[n("配置你的 Stripe webhook"),s(a)]),n(" 以实际发送这个事件到你的应用程序。一旦 webhook 在 Stripe 仪表板中被启用，你就可以"),zn,n(" 。webhook 负载中包含的对象将是一个"),e("a",Jn,[Xn,n(" 对象"),s(a)]),n(" ，你可以检查它以完成你的客户的订单。")]),Zn,ea,e("p",null,[n("或者，你可以让 Stripe 为你处理付款确认。 在这种情况下，你可以在 Stripe 控制面板中"),e("a",na,[n("设置 Stripe 的自动计费电子邮件"),s(a)]),n(" ，而不是重定向到付款确认页面。 但是，如果捕获到 "),aa,n(" 异常，你仍应通知用户他们将收到一封包含进一步付款确认说明的电子邮件。")]),sa,e("blockquote",null,[e("p",null,[ta,n(" 在开始之前，请查看 "),e("a",oa,[n("Stripe 关于 PSD2 和 SCA 的指南"),s(a)]),n("以及他们的"),e("a",pa,[n("关于新 SCA API 的文档"),s(a)]),n(".")])]),ca,e("blockquote",null,[e("p",null,[ra,ia,n(" 为了测试各种计费场景，例如信用卡拒付和失败，你可以使用 Stripe 提供的大量的"),e("a",da,[n("测试卡号和令牌"),s(a)]),n(" 。")])])])}const ga=o(i,[["render",la],["__file","billing.html.vue"]]);export{ga as default};
