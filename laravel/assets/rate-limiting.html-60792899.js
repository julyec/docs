import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as t,c as a,a as i}from"./app-06635a3b.js";const n={},r=i(`<h1 id="rate-limiting" tabindex="-1"><a class="header-anchor" href="#rate-limiting" aria-hidden="true">#</a> Rate Limiting</h1><ul><li><a href="#introduction">Introduction</a><ul><li><a href="#cache-configuration">Cache Configuration</a></li></ul></li><li><a href="#basic-usage">Basic Usage</a><ul><li><a href="#manually-incrementing-attempts">Manually Incrementing Attempts</a></li><li><a href="#clearing-attempts">Clearing Attempts</a></li></ul></li></ul><p><a name="introduction"></a></p><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p>Laravel includes a simple to use rate limiting abstraction which, in conjunction with your application&#39;s <a href="cache">cache</a>, provides an easy way to limit any action during a specified window of time.</p><blockquote><p><strong>Note</strong><br> If you are interested in rate limiting incoming HTTP requests, please consult the <a href="routing#rate-limiting">rate limiter middleware documentation</a>.</p></blockquote><p><a name="cache-configuration"></a></p><h3 id="cache-configuration" tabindex="-1"><a class="header-anchor" href="#cache-configuration" aria-hidden="true">#</a> Cache Configuration</h3><p>Typically, the rate limiter utilizes your default application cache as defined by the <code>default</code> key within your application&#39;s <code>cache</code> configuration file. However, you may specify which cache driver the rate limiter should use by defining a <code>limiter</code> key within your application&#39;s <code>cache</code> configuration file:</p><pre><code>&#39;default&#39; =&gt; &#39;memcached&#39;,

&#39;limiter&#39; =&gt; &#39;redis&#39;,
</code></pre><p><a name="basic-usage"></a></p><h2 id="basic-usage" tabindex="-1"><a class="header-anchor" href="#basic-usage" aria-hidden="true">#</a> Basic Usage</h2><p>The <code>Illuminate\\Support\\Facades\\RateLimiter</code> facade may be used to interact with the rate limiter. The simplest method offered by the rate limiter is the <code>attempt</code> method, which rate limits a given callback for a given number of seconds.</p><p>The <code>attempt</code> method returns <code>false</code> when the callback has no remaining attempts available; otherwise, the <code>attempt</code> method will return the callback&#39;s result or <code>true</code>. The first argument accepted by the <code>attempt</code> method is a rate limiter &quot;key&quot;, which may be any string of your choosing that represents the action being rate limited:</p><pre><code>use Illuminate\\Support\\Facades\\RateLimiter;

$executed = RateLimiter::attempt(
    &#39;send-message:&#39;.$user-&gt;id,
    $perMinute = 5,
    function() {
        // Send message...
    }
);

if (! $executed) {
  return &#39;Too many messages sent!&#39;;
}
</code></pre><p>If necessary, you may provide a fourth argument to the <code>attempt</code> method, which is the &quot;decay rate&quot;, or the number of seconds until the available attempts are reset. For example, we can modify the example above to allow five attempts every two minutes:</p><pre><code>$executed = RateLimiter::attempt(
    &#39;send-message:&#39;.$user-&gt;id,
    $perTwoMinutes = 5,
    function() {
        // Send message...
    },
    $decayRate = 120,
);
</code></pre><p><a name="manually-incrementing-attempts"></a></p><h3 id="manually-incrementing-attempts" tabindex="-1"><a class="header-anchor" href="#manually-incrementing-attempts" aria-hidden="true">#</a> Manually Incrementing Attempts</h3><p>If you would like to manually interact with the rate limiter, a variety of other methods are available. For example, you may invoke the <code>tooManyAttempts</code> method to determine if a given rate limiter key has exceeded its maximum number of allowed attempts per minute:</p><pre><code>use Illuminate\\Support\\Facades\\RateLimiter;

if (RateLimiter::tooManyAttempts(&#39;send-message:&#39;.$user-&gt;id, $perMinute = 5)) {
    return &#39;Too many attempts!&#39;;
}

RateLimiter::hit(&#39;send-message:&#39;.$user-&gt;id);

// Send message...
</code></pre><p>Alternatively, you may use the <code>remaining</code> method to retrieve the number of attempts remaining for a given key. If a given key has retries remaining, you may invoke the <code>hit</code> method to increment the number of total attempts:</p><pre><code>use Illuminate\\Support\\Facades\\RateLimiter;

if (RateLimiter::remaining(&#39;send-message:&#39;.$user-&gt;id, $perMinute = 5)) {
    RateLimiter::hit(&#39;send-message:&#39;.$user-&gt;id);

    // Send message...
}
</code></pre><p><a name="determining-limiter-availability"></a></p><h4 id="determining-limiter-availability" tabindex="-1"><a class="header-anchor" href="#determining-limiter-availability" aria-hidden="true">#</a> Determining Limiter Availability</h4><p>When a key has no more attempts left, the <code>availableIn</code> method returns the number of seconds remaining until more attempts will be available:</p><pre><code>use Illuminate\\Support\\Facades\\RateLimiter;

if (RateLimiter::tooManyAttempts(&#39;send-message:&#39;.$user-&gt;id, $perMinute = 5)) {
    $seconds = RateLimiter::availableIn(&#39;send-message:&#39;.$user-&gt;id);

    return &#39;You may try again in &#39;.$seconds.&#39; seconds.&#39;;
}

RateLimiter::hit(&#39;send-message:&#39;.$user-&gt;id);

// Send message...
</code></pre><p><a name="clearing-attempts"></a></p><h3 id="clearing-attempts" tabindex="-1"><a class="header-anchor" href="#clearing-attempts" aria-hidden="true">#</a> Clearing Attempts</h3><p>You may reset the number of attempts for a given rate limiter key using the <code>clear</code> method. For example, you may reset the number of attempts when a given message is read by the receiver:</p><pre><code>use App\\Models\\Message;
use Illuminate\\Support\\Facades\\RateLimiter;

/**
 * Mark the message as read.
 */
public function read(Message $message): Message
{
    $message-&gt;markAsRead();

    RateLimiter::clear(&#39;send-message:&#39;.$message-&gt;user_id);

    return $message;
}
</code></pre>`,31),o=[r];function s(m,c){return t(),a("div",null,o)}const u=e(n,[["render",s],["__file","rate-limiting.html.vue"]]);export{u as default};
