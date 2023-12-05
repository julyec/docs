import{_ as d}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as t,c as l,b as a,d as e,e as i,a as s}from"./app-8cdff07c.js";const c={},o=s('<h1 id="哈希" tabindex="-1"><a class="header-anchor" href="#哈希" aria-hidden="true">#</a> 哈希</h1><ul><li><a href="#introduction">介绍</a></li><li><a href="#configuration">配置</a></li><li><a href="#basic-usage">基本用法</a><ul><li><a href="#hashing-passwords">哈希密码</a></li><li><a href="#verifying-that-a-password-matches-a-hash">验证密码是否与哈希值相匹配</a></li><li><a href="#determining-if-a-password-needs-to-be-rehashed">确定密码是否需要重新哈希</a></li></ul></li></ul><p><a name="introduction"></a></p><h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2><p>Laravel <code>Hash</code> <a href="./facades">Facad</a> 为存储用户密码提供了安全的 Bcrypt 和 Argon2 哈希。如果您使用的是一个[Laravel 应用程序启动套件](./st arter-kits)，那么在默认情况下，Bcrypt 将用于注册和身份验证。</p><p>Bcrypt 是哈希密码的绝佳选择，因为它的「加密系数」是可调节的，这意味着随着硬件功率的增加，生成哈希的时间可以增加。当哈希密码时，越慢越好。算法花费的时间越长，恶意用户生成「彩虹表」的时间就越长，该表包含所有可能的字符串哈希值，这些哈希值可能会被用于针对应用程序的暴力攻击中。</p><p><a name="configuration"></a></p><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2>',8),h=a("code",null,"config/hashing.php",-1),u={href:"https://en.wikipedia.org/wiki/Bcrypt",target:"_blank",rel:"noopener noreferrer"},v={href:"https://en.wikipedia.org/wiki/Argon2",target:"_blank",rel:"noopener noreferrer"},p=s(`<p><a name="basic-usage"></a></p><h2 id="基本用法" tabindex="-1"><a class="header-anchor" href="#基本用法" aria-hidden="true">#</a> 基本用法</h2><p><a name="hashing-passwords"></a></p><h3 id="哈希密码" tabindex="-1"><a class="header-anchor" href="#哈希密码" aria-hidden="true">#</a> 哈希密码</h3><p>您可以通过在 <code>Hash</code> Facade 上调用 <code>make</code> 方法来哈希密码：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;?php

namespace App\\Http\\Controllers;

use App\\Http\\Controllers\\Controller;
use Illuminate\\Http\\RedirectResponse;
use Illuminate\\Http\\Request;
use Illuminate\\Support\\Facades\\Hash;

class PasswordController extends Controller
{
    /**
     * 更新用户的密码。
     */
    public function update(Request $request): RedirectResponse
    {
        // 验证新密码的长度...

        $request-&gt;user()-&gt;fill([
            &#39;password&#39; =&gt; Hash::make($request-&gt;newPassword)
        ])-&gt;save();

        return redirect(&#39;/profile&#39;);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="adjusting-the-bcrypt-work-factor"></a></p><h4 id="调整-bcrypt-加密系数" tabindex="-1"><a class="header-anchor" href="#调整-bcrypt-加密系数" aria-hidden="true">#</a> 调整 Bcrypt 加密系数</h4><p>如果您正在使用 Bcrypt 算法，则 <code>make</code> 方法允许您使用 <code>rounds</code> 选项来配置该算法的加密系数。然而，对大多数应用程序来说，默认值就足够了：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$hashed = Hash::make(&#39;password&#39;, [
    &#39;rounds&#39; =&gt; 12,
]);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="adjusting-the-argon2-work-factor"></a></p><h4 id="调整-argon2-加密系数" tabindex="-1"><a class="header-anchor" href="#调整-argon2-加密系数" aria-hidden="true">#</a> 调整 Argon2 加密系数</h4><p>如果您正在使用 Argon2 算法，则 <code>make</code> 方法允许您使用 <code>memory</code>，<code>time</code> 和 <code>threads</code> 选项来配置该算法的加密系数。然后，对大多数应用程序来说，默认值就足够了：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$hashed = Hash::make(&#39;password&#39;, [
    &#39;memory&#39; =&gt; 1024,
    &#39;time&#39; =&gt; 2,
    &#39;threads&#39; =&gt; 2,
]);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),m=a("strong",null,"注意",-1),b={href:"https://secure.php.net/manual/en/function.password-hash.php",target:"_blank",rel:"noopener noreferrer"},g=s(`<p><a name="verifying-that-a-password-matches-a-hash"></a></p><h3 id="验证密码是否与哈希值相匹配" tabindex="-1"><a class="header-anchor" href="#验证密码是否与哈希值相匹配" aria-hidden="true">#</a> 验证密码是否与哈希值相匹配</h3><p>由 <code>Hash</code> Facade 提供的 <code>check</code> 方法允许您验证给定的明文字符串是否与给定的哈希值一致：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>if (Hash::check(&#39;plain-text&#39;, $hashedPassword)) {
    // The passwords match...
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="determining-if-a-password-needs-to-be-rehashed"></a></p><h3 id="确定密码是否需要重新哈希" tabindex="-1"><a class="header-anchor" href="#确定密码是否需要重新哈希" aria-hidden="true">#</a> 确定密码是否需要重新哈希</h3><p>由 <code>Hash</code> Facade 提供的 <code>needsRehash</code> 方法可以为你检查当散列 / 哈希的加密系数改变时，你的密码是否被新的加密系数重新加密过。某些应用程序选择在身份验证过程中执行此检查：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>if (Hash::needsRehash($hashed)) {
    $hashed = Hash::make(&#39;plain-text&#39;);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function f(x,_){const n=r("ExternalLinkIcon");return t(),l("div",null,[o,a("p",null,[e("你可以在 "),h,e(" 配置文件中配置默认哈希驱动程序。目前有几个受支持的驱动程序："),a("a",u,[e("Bcrypt"),i(n)]),e(" 和 "),a("a",v,[e("Argon2"),i(n)]),e("（Argon2i 和 Argon2id 变体）。")]),p,a("blockquote",null,[a("p",null,[m,e(" 有关这些选项的更多信息，请参见 "),a("a",b,[e("关于 Argon 哈希的官方 PHP 文档"),i(n)]),e(" 。")])]),g])}const H=d(c,[["render",f],["__file","hashing.html.vue"]]);export{H as default};
