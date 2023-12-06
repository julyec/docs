import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as t,a as n}from"./app-06635a3b.js";const i={},r=n(`<h1 id="限流" tabindex="-1"><a class="header-anchor" href="#限流" aria-hidden="true">#</a> 限流</h1><ul><li><a href="#introduction">简介</a><ul><li><a href="#cache-configuration">缓存配置</a></li></ul></li><li><a href="#basic-usage">基础用法</a><ul><li><a href="#manually-incrementing-attempts">手动增加请求次数</a></li><li><a href="#clearing-attempts">清除请求</a></li></ul></li></ul><p><a name="introduction"></a></p><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p>Laravel 包含了一个开箱即用的，基于 <a href="cache">缓存</a> 实现的限流器，提供了一个简单的方法来限制指定时间内的任何操作。</p><blockquote><p><strong>技巧</strong> 了解更多关于如何限制 HTTP 请求，请参考 <a href="routing#rate-limiting">请求频率限制中间件</a>。</p></blockquote><p><a name="cache-configuration"></a></p><h3 id="缓存配置" tabindex="-1"><a class="header-anchor" href="#缓存配置" aria-hidden="true">#</a> 缓存配置</h3><p>通常情况下，限流器使用你默认的缓存驱动，由 <code>cache</code> 配置文件中的 <code>default</code> 键定义。你也可以通过在你的应用程序的 <code>cache</code> 配置文件中定义一个 <code>limiter</code> 来指定限流器应该使用哪一个缓存来驱动：</p><pre><code>&#39;default&#39; =&gt; &#39;memcached&#39;,

&#39;limiter&#39; =&gt; &#39;redis&#39;,
</code></pre><p><a name="basic-usage"></a></p><h2 id="基本用法" tabindex="-1"><a class="header-anchor" href="#基本用法" aria-hidden="true">#</a> 基本用法</h2><p>可以通过 <code>Illuminate\\Support\\Facades\\RateLimiter</code> 来操作限流器。限流器提供的最简单的方法是 <code>attempt</code> 方法，它将一个给定的回调函数执行次数限制在一个给定的秒数内。</p><p>当回调函数执行次数超过限制时， <code>attempt</code> 方法返回 <code>false</code> ；否则， <code>attempt</code> 方法将返回回调的结果或 <code>true</code> 。 <code>attempt</code> 方法接受的第一个参数是一个速率限制器 「key」 ，它可以是你选择的任何字符串，代表被限制速率的动作：</p><pre><code>use Illuminate\\Support\\Facades\\RateLimiter;

$executed = RateLimiter::attempt(
    &#39;send-message:&#39;.$user-&gt;id,
    $perMinute = 5,
    function() {
        // 发送消息...
    }
);

if (! $executed) {
  return &#39;Too many messages sent!&#39;;
}
</code></pre><p><a name="manually-incrementing-attempts"></a></p><h3 id="手动配置尝试次数" tabindex="-1"><a class="header-anchor" href="#手动配置尝试次数" aria-hidden="true">#</a> 手动配置尝试次数</h3><p>如果您想手动与限流器交互，可以使用多种方法。例如，您可以调用 <code>tooManyAttempts</code> 方法来确定给定的限流器是否超过了每分钟允许的最大尝试次数：</p><pre><code>use Illuminate\\Support\\Facades\\RateLimiter;

if (RateLimiter::tooManyAttempts(&#39;send-message:&#39;.$user-&gt;id, $perMinute = 5)) {
    return &#39;Too many attempts!&#39;;
}
</code></pre><p>或者，您可以使用 <code>remaining</code> 方法检索给定密钥的剩余尝试次数。如果给定的密钥还有重试次数，您可以调用 <code>hit</code> 方法来增加总尝试次数：</p><pre><code>use Illuminate\\Support\\Facades\\RateLimiter;

if (RateLimiter::remaining(&#39;send-message:&#39;.$user-&gt;id, $perMinute = 5)) {
    RateLimiter::hit(&#39;send-message:&#39;.$user-&gt;id);

    // 发送消息...
}
</code></pre><p><a name="determining-limiter-availability"></a></p><h4 id="确定限流器可用性" tabindex="-1"><a class="header-anchor" href="#确定限流器可用性" aria-hidden="true">#</a> 确定限流器可用性</h4><p>当一个键没有更多的尝试次数时，<code>availableIn</code> 方法返回在尝试可用之前需等待的剩余秒数：</p><pre><code>use Illuminate\\Support\\Facades\\RateLimiter;

if (RateLimiter::tooManyAttempts(&#39;send-message:&#39;.$user-&gt;id, $perMinute = 5)) {
    $seconds = RateLimiter::availableIn(&#39;send-message:&#39;.$user-&gt;id);

    return &#39;You may try again in &#39;.$seconds.&#39; seconds.&#39;;
}
</code></pre><p><a name="clearing-attempts"></a></p><h3 id="清除尝试次数" tabindex="-1"><a class="header-anchor" href="#清除尝试次数" aria-hidden="true">#</a> 清除尝试次数</h3><p>您可以使用 <code>clear</code> 方法重置给定速率限制键的尝试次数。例如，当接收者读取给定消息时，您可以重置尝试次数：</p><pre><code>use App\\Models\\Message;
use Illuminate\\Support\\Facades\\RateLimiter;

/**
 * 标记消息为已读。
 */
public function read(Message $message): Message
{
    $message-&gt;markAsRead();

    RateLimiter::clear(&#39;send-message:&#39;.$message-&gt;user_id);

    return $message;
}
</code></pre>`,29),d=[r];function c(s,o){return a(),t("div",null,d)}const l=e(i,[["render",c],["__file","rate-limiting.html.vue"]]);export{l as default};
