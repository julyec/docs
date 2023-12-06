import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as a,a as t}from"./app-06635a3b.js";const r={},c=t(`<h1 id="加密解密" tabindex="-1"><a class="header-anchor" href="#加密解密" aria-hidden="true">#</a> 加密解密</h1><ul><li><a href="#introduction">简介</a></li><li><a href="#configuration">配置</a></li><li><a href="#using-the-encrypter">基本用法</a></li></ul><p><a name="introduction"></a></p><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p>Laravel 的加密服务提供了一个简单、方便的接口，使用 OpenSSL 所提供的 AES-256 和 AES-128 加密和解密文本。所有 Laravel 加密的结果都会使用消息认证码 (MAC) 进行签名，因此一旦加密，其底层值就不能被修改或篡改。</p><p><a name="configuration"></a></p><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><p>在使用 Laravel 的加密工具之前，你必须先设置 <code>config/app.php</code> 配置文件中的 <code>key</code> 配置项。该配置项由环境变量 <code>APP_KEY</code> 设定。你应当使用 <code>php artisan key:generate</code> 命令来生成该变量的值，<code>key:generate</code> 命令将使用 PHP 的安全随机字节生成器为你的应用程序构建加密安全密钥。通常情况下，在 <a href="./installation">Laravel 安装</a> 中会为你生成 APP_KEY 环境变量的值。</p><p><a name="using-the-encrypter"></a></p><h2 id="基本用法" tabindex="-1"><a class="header-anchor" href="#基本用法" aria-hidden="true">#</a> 基本用法</h2><p><a name="encrypting-a-value"></a></p><h4 id="加密一个值" tabindex="-1"><a class="header-anchor" href="#加密一个值" aria-hidden="true">#</a> 加密一个值</h4><p>你可以使用 <code>Crypt</code> 门面提供的 <code>encryptString</code> 方法来加密一个值。所有加密的值都使用 OpenSSL 的 AES-256-CBC 来进行加密。此外，所有加密过的值都会使用消息认证码 (MAC) 来签名，可以防止恶意用户对值进行篡改：</p><pre><code>&lt;?php

namespace App\\Http\\Controllers;

use App\\Http\\Controllers\\Controller;
use App\\Models\\User;
use Illuminate\\Http\\RedirectResponse;
use Illuminate\\Http\\Request;
use Illuminate\\Support\\Facades\\Crypt;

class DigitalOceanTokenController extends Controller
{
    /**
     *  为用户存储一个 DigitalOcean API 令牌。
     */
    public function store(Request $request): RedirectResponse
    {
        $request-&gt;user()-&gt;fill([
            &#39;token&#39; =&gt; Crypt::encryptString($request-&gt;token),
        ])-&gt;save();

        return redirect(&#39;/secrets&#39;);
    }
}
</code></pre><p><a name="decrypting-a-value"></a></p><h4 id="解密一个值" tabindex="-1"><a class="header-anchor" href="#解密一个值" aria-hidden="true">#</a> 解密一个值</h4><p>你可以使用 <code>Crypt</code> 门面提供的 <code>decryptString</code> 来进行解密。如果该值不能被正确解密，例如消息认证码 (MAC) 无效，会抛出异常 <code>Illuminate\\Contracts\\Encryption\\DecryptException</code>：</p><pre><code>use Illuminate\\Contracts\\Encryption\\DecryptException;
use Illuminate\\Support\\Facades\\Crypt;

try {
    $decrypted = Crypt::decryptString($encryptedValue);
} catch (DecryptException $e) {
    // ...
}
</code></pre>`,18),o=[c];function i(p,d){return n(),a("div",null,o)}const h=e(r,[["render",i],["__file","encryption.html.vue"]]);export{h as default};
