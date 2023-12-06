import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as t,a}from"./app-06635a3b.js";const r={},i=a(`<h1 id="encryption" tabindex="-1"><a class="header-anchor" href="#encryption" aria-hidden="true">#</a> Encryption</h1><ul><li><a href="#introduction">Introduction</a></li><li><a href="#configuration">Configuration</a></li><li><a href="#using-the-encrypter">Using The Encrypter</a></li></ul><p><a name="introduction"></a></p><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p>Laravel&#39;s encryption services provide a simple, convenient interface for encrypting and decrypting text via OpenSSL using AES-256 and AES-128 encryption. All of Laravel&#39;s encrypted values are signed using a message authentication code (MAC) so that their underlying value can not be modified or tampered with once encrypted.</p><p><a name="configuration"></a></p><h2 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> Configuration</h2><p>Before using Laravel&#39;s encrypter, you must set the <code>key</code> configuration option in your <code>config/app.php</code> configuration file. This configuration value is driven by the <code>APP_KEY</code> environment variable. You should use the <code>php artisan key:generate</code> command to generate this variable&#39;s value since the <code>key:generate</code> command will use PHP&#39;s secure random bytes generator to build a cryptographically secure key for your application. Typically, the value of the <code>APP_KEY</code> environment variable will be generated for you during <a href="./installation">Laravel&#39;s installation</a>.</p><p><a name="using-the-encrypter"></a></p><h2 id="using-the-encrypter" tabindex="-1"><a class="header-anchor" href="#using-the-encrypter" aria-hidden="true">#</a> Using The Encrypter</h2><p><a name="encrypting-a-value"></a></p><h4 id="encrypting-a-value" tabindex="-1"><a class="header-anchor" href="#encrypting-a-value" aria-hidden="true">#</a> Encrypting A Value</h4><p>You may encrypt a value using the <code>encryptString</code> method provided by the <code>Crypt</code> facade. All encrypted values are encrypted using OpenSSL and the AES-256-CBC cipher. Furthermore, all encrypted values are signed with a message authentication code (MAC). The integrated message authentication code will prevent the decryption of any values that have been tampered with by malicious users:</p><pre><code>&lt;?php

namespace App\\Http\\Controllers;

use Illuminate\\Http\\RedirectResponse;
use Illuminate\\Http\\Request;
use Illuminate\\Support\\Facades\\Crypt;

class DigitalOceanTokenController extends Controller
{
    /**
     * Store a DigitalOcean API token for the user.
     */
    public function store(Request $request): RedirectResponse
    {
        $request-&gt;user()-&gt;fill([
            &#39;token&#39; =&gt; Crypt::encryptString($request-&gt;token),
        ])-&gt;save();

        return redirect(&#39;/secrets&#39;);
    }
}
</code></pre><p><a name="decrypting-a-value"></a></p><h4 id="decrypting-a-value" tabindex="-1"><a class="header-anchor" href="#decrypting-a-value" aria-hidden="true">#</a> Decrypting A Value</h4><p>You may decrypt values using the <code>decryptString</code> method provided by the <code>Crypt</code> facade. If the value can not be properly decrypted, such as when the message authentication code is invalid, an <code>Illuminate\\Contracts\\Encryption\\DecryptException</code> will be thrown:</p><pre><code>use Illuminate\\Contracts\\Encryption\\DecryptException;
use Illuminate\\Support\\Facades\\Crypt;

try {
    $decrypted = Crypt::decryptString($encryptedValue);
} catch (DecryptException $e) {
    // ...
}
</code></pre>`,18),o=[i];function c(d,p){return n(),t("div",null,o)}const u=e(r,[["render",c],["__file","encryption.html.vue"]]);export{u as default};
