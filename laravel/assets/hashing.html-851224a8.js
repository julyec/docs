import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as n,o as h,c as i,b as a,d as e,e as r,a as t}from"./app-06635a3b.js";const d={},c=t('<h1 id="hashing" tabindex="-1"><a class="header-anchor" href="#hashing" aria-hidden="true">#</a> Hashing</h1><ul><li><a href="#introduction">Introduction</a></li><li><a href="#configuration">Configuration</a></li><li><a href="#basic-usage">Basic Usage</a><ul><li><a href="#hashing-passwords">Hashing Passwords</a></li><li><a href="#verifying-that-a-password-matches-a-hash">Verifying That A Password Matches A Hash</a></li><li><a href="#determining-if-a-password-needs-to-be-rehashed">Determining If A Password Needs To Be Rehashed</a></li></ul></li></ul><p><a name="introduction"></a></p><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p>The Laravel <code>Hash</code> <a href="./facades">facade</a> provides secure Bcrypt and Argon2 hashing for storing user passwords. If you are using one of the <a href="./starter-kits">Laravel application starter kits</a>, Bcrypt will be used for registration and authentication by default.</p><p>Bcrypt is a great choice for hashing passwords because its &quot;work factor&quot; is adjustable, which means that the time it takes to generate a hash can be increased as hardware power increases. When hashing passwords, slow is good. The longer an algorithm takes to hash a password, the longer it takes malicious users to generate &quot;rainbow tables&quot; of all possible string hash values that may be used in brute force attacks against applications.</p><p><a name="configuration"></a></p><h2 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> Configuration</h2>',8),p=a("code",null,"config/hashing.php",-1),l={href:"https://en.wikipedia.org/wiki/Bcrypt",target:"_blank",rel:"noopener noreferrer"},u={href:"https://en.wikipedia.org/wiki/Argon2",target:"_blank",rel:"noopener noreferrer"},g=t(`<p><a name="basic-usage"></a></p><h2 id="basic-usage" tabindex="-1"><a class="header-anchor" href="#basic-usage" aria-hidden="true">#</a> Basic Usage</h2><p><a name="hashing-passwords"></a></p><h3 id="hashing-passwords" tabindex="-1"><a class="header-anchor" href="#hashing-passwords" aria-hidden="true">#</a> Hashing Passwords</h3><p>You may hash a password by calling the <code>make</code> method on the <code>Hash</code> facade:</p><pre><code>&lt;?php

namespace App\\Http\\Controllers;

use Illuminate\\Http\\RedirectResponse;
use Illuminate\\Http\\Request;
use Illuminate\\Support\\Facades\\Hash;

class PasswordController extends Controller
{
    /**
     * Update the password for the user.
     */
    public function update(Request $request): RedirectResponse
    {
        // Validate the new password length...

        $request-&gt;user()-&gt;fill([
            &#39;password&#39; =&gt; Hash::make($request-&gt;newPassword)
        ])-&gt;save();

        return redirect(&#39;/profile&#39;);
    }
}
</code></pre><p><a name="adjusting-the-bcrypt-work-factor"></a></p><h4 id="adjusting-the-bcrypt-work-factor" tabindex="-1"><a class="header-anchor" href="#adjusting-the-bcrypt-work-factor" aria-hidden="true">#</a> Adjusting The Bcrypt Work Factor</h4><p>If you are using the Bcrypt algorithm, the <code>make</code> method allows you to manage the work factor of the algorithm using the <code>rounds</code> option; however, the default work factor managed by Laravel is acceptable for most applications:</p><pre><code>$hashed = Hash::make(&#39;password&#39;, [
    &#39;rounds&#39; =&gt; 12,
]);
</code></pre><p><a name="adjusting-the-argon2-work-factor"></a></p><h4 id="adjusting-the-argon2-work-factor" tabindex="-1"><a class="header-anchor" href="#adjusting-the-argon2-work-factor" aria-hidden="true">#</a> Adjusting The Argon2 Work Factor</h4><p>If you are using the Argon2 algorithm, the <code>make</code> method allows you to manage the work factor of the algorithm using the <code>memory</code>, <code>time</code>, and <code>threads</code> options; however, the default values managed by Laravel are acceptable for most applications:</p><pre><code>$hashed = Hash::make(&#39;password&#39;, [
    &#39;memory&#39; =&gt; 1024,
    &#39;time&#39; =&gt; 2,
    &#39;threads&#39; =&gt; 2,
]);
</code></pre>`,14),f=a("strong",null,"Note",-1),m=a("br",null,null,-1),w={href:"https://secure.php.net/manual/en/function.password-hash.php",target:"_blank",rel:"noopener noreferrer"},b=t(`<p><a name="verifying-that-a-password-matches-a-hash"></a></p><h3 id="verifying-that-a-password-matches-a-hash" tabindex="-1"><a class="header-anchor" href="#verifying-that-a-password-matches-a-hash" aria-hidden="true">#</a> Verifying That A Password Matches A Hash</h3><p>The <code>check</code> method provided by the <code>Hash</code> facade allows you to verify that a given plain-text string corresponds to a given hash:</p><pre><code>if (Hash::check(&#39;plain-text&#39;, $hashedPassword)) {
    // The passwords match...
}
</code></pre><p><a name="determining-if-a-password-needs-to-be-rehashed"></a></p><h3 id="determining-if-a-password-needs-to-be-rehashed" tabindex="-1"><a class="header-anchor" href="#determining-if-a-password-needs-to-be-rehashed" aria-hidden="true">#</a> Determining If A Password Needs To Be Rehashed</h3><p>The <code>needsRehash</code> method provided by the <code>Hash</code> facade allows you to determine if the work factor used by the hasher has changed since the password was hashed. Some applications choose to perform this check during the application&#39;s authentication process:</p><pre><code>if (Hash::needsRehash($hashed)) {
    $hashed = Hash::make(&#39;plain-text&#39;);
}
</code></pre>`,8);function k(y,_){const o=n("ExternalLinkIcon");return h(),i("div",null,[c,a("p",null,[e("The default hashing driver for your application is configured in your application's "),p,e(" configuration file. There are currently several supported drivers: "),a("a",l,[e("Bcrypt"),r(o)]),e(" and "),a("a",u,[e("Argon2"),r(o)]),e(" (Argon2i and Argon2id variants).")]),g,a("blockquote",null,[a("p",null,[f,m,e(" For more information on these options, please refer to the "),a("a",w,[e("official PHP documentation regarding Argon hashing"),r(o)]),e(".")])]),b])}const x=s(d,[["render",k],["__file","hashing.html.vue"]]);export{x as default};
