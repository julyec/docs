import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as r,c as d,b as a,d as e,e as i,a as o}from"./app-06635a3b.js";const l={},c=o('<h1 id="file-storage" tabindex="-1"><a class="header-anchor" href="#file-storage" aria-hidden="true">#</a> File Storage</h1><ul><li><a href="#introduction">Introduction</a></li><li><a href="#configuration">Configuration</a><ul><li><a href="#the-local-driver">The Local Driver</a></li><li><a href="#the-public-disk">The Public Disk</a></li><li><a href="#driver-prerequisites">Driver Prerequisites</a></li><li><a href="#scoped-and-read-only-filesystems">Scoped &amp; Read-Only Filesystems</a></li><li><a href="#amazon-s3-compatible-filesystems">Amazon S3 Compatible Filesystems</a></li></ul></li><li><a href="#obtaining-disk-instances">Obtaining Disk Instances</a><ul><li><a href="#on-demand-disks">On-Demand Disks</a></li></ul></li><li><a href="#retrieving-files">Retrieving Files</a><ul><li><a href="#downloading-files">Downloading Files</a></li><li><a href="#file-urls">File URLs</a></li><li><a href="#temporary-urls">Temporary URLs</a></li><li><a href="#file-metadata">File Metadata</a></li></ul></li><li><a href="#storing-files">Storing Files</a><ul><li><a href="#prepending-appending-to-files">Prepending &amp; Appending To Files</a></li><li><a href="#copying-moving-files">Copying &amp; Moving Files</a></li><li><a href="#automatic-streaming">Automatic Streaming</a></li><li><a href="#file-uploads">File Uploads</a></li><li><a href="#file-visibility">File Visibility</a></li></ul></li><li><a href="#deleting-files">Deleting Files</a></li><li><a href="#directories">Directories</a></li><li><a href="#testing">Testing</a></li><li><a href="#custom-filesystems">Custom Filesystems</a></li></ul><p><a name="introduction"></a></p><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2>',4),p={href:"https://github.com/thephpleague/flysystem",target:"_blank",rel:"noopener noreferrer"},h=o(`<p><a name="configuration"></a></p><h2 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> Configuration</h2><p>Laravel&#39;s filesystem configuration file is located at <code>config/filesystems.php</code>. Within this file, you may configure all of your filesystem &quot;disks&quot;. Each disk represents a particular storage driver and storage location. Example configurations for each supported driver are included in the configuration file so you can modify the configuration to reflect your storage preferences and credentials.</p><p>The <code>local</code> driver interacts with files stored locally on the server running the Laravel application while the <code>s3</code> driver is used to write to Amazon&#39;s S3 cloud storage service.</p><blockquote><p><strong>Note</strong> You may configure as many disks as you like and may even have multiple disks that use the same driver.</p></blockquote><p><a name="the-local-driver"></a></p><h3 id="the-local-driver" tabindex="-1"><a class="header-anchor" href="#the-local-driver" aria-hidden="true">#</a> The Local Driver</h3><p>When using the <code>local</code> driver, all file operations are relative to the <code>root</code> directory defined in your <code>filesystems</code> configuration file. By default, this value is set to the <code>storage/app</code> directory. Therefore, the following method would write to <code>storage/app/example.txt</code>:</p><pre><code>use Illuminate\\Support\\Facades\\Storage;

Storage::disk(&#39;local&#39;)-&gt;put(&#39;example.txt&#39;, &#39;Contents&#39;);
</code></pre><p><a name="the-public-disk"></a></p><h3 id="the-public-disk" tabindex="-1"><a class="header-anchor" href="#the-public-disk" aria-hidden="true">#</a> The Public Disk</h3><p>The <code>public</code> disk included in your application&#39;s <code>filesystems</code> configuration file is intended for files that are going to be publicly accessible. By default, the <code>public</code> disk uses the <code>local</code> driver and stores its files in <code>storage/app/public</code>.</p>`,12),u=a("code",null,"public/storage",-1),g=a("code",null,"storage/app/public",-1),m={href:"https://envoyer.io",target:"_blank",rel:"noopener noreferrer"},f=o(`<p>To create the symbolic link, you may use the <code>storage:link</code> Artisan command:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan storage:link
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Once a file has been stored and the symbolic link has been created, you can create a URL to the files using the <code>asset</code> helper:</p><pre><code>echo asset(&#39;storage/file.txt&#39;);
</code></pre><p>You may configure additional symbolic links in your <code>filesystems</code> configuration file. Each of the configured links will be created when you run the <code>storage:link</code> command:</p><pre><code>&#39;links&#39; =&gt; [
    public_path(&#39;storage&#39;) =&gt; storage_path(&#39;app/public&#39;),
    public_path(&#39;images&#39;) =&gt; storage_path(&#39;app/images&#39;),
],
</code></pre><p><a name="driver-prerequisites"></a></p><h3 id="driver-prerequisites" tabindex="-1"><a class="header-anchor" href="#driver-prerequisites" aria-hidden="true">#</a> Driver Prerequisites</h3><p><a name="s3-driver-configuration"></a></p><h4 id="s3-driver-configuration" tabindex="-1"><a class="header-anchor" href="#s3-driver-configuration" aria-hidden="true">#</a> S3 Driver Configuration</h4><p>Before using the S3 driver, you will need to install the Flysystem S3 package via the Composer package manager:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">composer</span> require league/flysystem-aws-s3-v3 <span class="token string">&quot;^3.0&quot;</span> --with-all-dependencies
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The S3 driver configuration information is located in your <code>config/filesystems.php</code> configuration file. This file contains an example configuration array for an S3 driver. You are free to modify this array with your own S3 configuration and credentials. For convenience, these environment variables match the naming convention used by the AWS CLI.</p><p><a name="ftp-driver-configuration"></a></p><h4 id="ftp-driver-configuration" tabindex="-1"><a class="header-anchor" href="#ftp-driver-configuration" aria-hidden="true">#</a> FTP Driver Configuration</h4><p>Before using the FTP driver, you will need to install the Flysystem FTP package via the Composer package manager:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">composer</span> require league/flysystem-ftp <span class="token string">&quot;^3.0&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Laravel&#39;s Flysystem integrations work great with FTP; however, a sample configuration is not included with the framework&#39;s default <code>filesystems.php</code> configuration file. If you need to configure an FTP filesystem, you may use the configuration example below:</p><pre><code>&#39;ftp&#39; =&gt; [
    &#39;driver&#39; =&gt; &#39;ftp&#39;,
    &#39;host&#39; =&gt; env(&#39;FTP_HOST&#39;),
    &#39;username&#39; =&gt; env(&#39;FTP_USERNAME&#39;),
    &#39;password&#39; =&gt; env(&#39;FTP_PASSWORD&#39;),

    // Optional FTP Settings...
    // &#39;port&#39; =&gt; env(&#39;FTP_PORT&#39;, 21),
    // &#39;root&#39; =&gt; env(&#39;FTP_ROOT&#39;),
    // &#39;passive&#39; =&gt; true,
    // &#39;ssl&#39; =&gt; true,
    // &#39;timeout&#39; =&gt; 30,
],
</code></pre><p><a name="sftp-driver-configuration"></a></p><h4 id="sftp-driver-configuration" tabindex="-1"><a class="header-anchor" href="#sftp-driver-configuration" aria-hidden="true">#</a> SFTP Driver Configuration</h4><p>Before using the SFTP driver, you will need to install the Flysystem SFTP package via the Composer package manager:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">composer</span> require league/flysystem-sftp-v3 <span class="token string">&quot;^3.0&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Laravel&#39;s Flysystem integrations work great with SFTP; however, a sample configuration is not included with the framework&#39;s default <code>filesystems.php</code> configuration file. If you need to configure an SFTP filesystem, you may use the configuration example below:</p><pre><code>&#39;sftp&#39; =&gt; [
    &#39;driver&#39; =&gt; &#39;sftp&#39;,
    &#39;host&#39; =&gt; env(&#39;SFTP_HOST&#39;),

    // Settings for basic authentication...
    &#39;username&#39; =&gt; env(&#39;SFTP_USERNAME&#39;),
    &#39;password&#39; =&gt; env(&#39;SFTP_PASSWORD&#39;),

    // Settings for SSH key based authentication with encryption password...
    &#39;privateKey&#39; =&gt; env(&#39;SFTP_PRIVATE_KEY&#39;),
    &#39;passphrase&#39; =&gt; env(&#39;SFTP_PASSPHRASE&#39;),

    // Settings for file / directory permissions...
    &#39;visibility&#39; =&gt; &#39;private&#39;, // \`private\` = 0600, \`public\` = 0644
    &#39;directory_visibility&#39; =&gt; &#39;private&#39;, // \`private\` = 0700, \`public\` = 0755

    // Optional SFTP Settings...
    // &#39;hostFingerprint&#39; =&gt; env(&#39;SFTP_HOST_FINGERPRINT&#39;),
    // &#39;maxTries&#39; =&gt; 4,
    // &#39;passphrase&#39; =&gt; env(&#39;SFTP_PASSPHRASE&#39;),
    // &#39;port&#39; =&gt; env(&#39;SFTP_PORT&#39;, 22),
    // &#39;root&#39; =&gt; env(&#39;SFTP_ROOT&#39;, &#39;&#39;),
    // &#39;timeout&#39; =&gt; 30,
    // &#39;useAgent&#39; =&gt; true,
],
</code></pre><p><a name="scoped-and-read-only-filesystems"></a></p><h3 id="scoped-read-only-filesystems" tabindex="-1"><a class="header-anchor" href="#scoped-read-only-filesystems" aria-hidden="true">#</a> Scoped &amp; Read-Only Filesystems</h3><p>Scoped disks allow you to define a filesystem where all paths are automatically prefixed with a given path prefix. Before creating a scoped filesystem disk, you will need to install an additional Flysystem package via the Composer package manager:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">composer</span> require league/flysystem-path-prefixing <span class="token string">&quot;^3.0&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>You may create a path scoped instance of any existing filesystem disk by defining a disk that utilizes the <code>scoped</code> driver. For example, you may create a disk which scopes your existing <code>s3</code> disk to a specific path prefix, and then every file operation using your scoped disk will utilize the specified prefix:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token string single-quoted-string">&#39;s3-videos&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;driver&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;scoped&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;disk&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;s3&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;prefix&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;path/to/videos&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>&quot;Read-only&quot; disks allow you to create filesystem disks that do not allow write operations. Before using the <code>read-only</code> configuration option, you will need to install an additional Flysystem package via the Composer package manager:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">composer</span> require league/flysystem-read-only <span class="token string">&quot;^3.0&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Next, you may include the <code>read-only</code> configuration option in one or more of your disk&#39;s configuration arrays:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token string single-quoted-string">&#39;s3-videos&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;driver&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;s3&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// ...</span>
    <span class="token string single-quoted-string">&#39;read-only&#39;</span> <span class="token operator">=&gt;</span> <span class="token constant boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="amazon-s3-compatible-filesystems"></a></p><h3 id="amazon-s3-compatible-filesystems" tabindex="-1"><a class="header-anchor" href="#amazon-s3-compatible-filesystems" aria-hidden="true">#</a> Amazon S3 Compatible Filesystems</h3>`,37),y=a("code",null,"filesystems",-1),v=a("code",null,"s3",-1),b={href:"https://github.com/minio/minio",target:"_blank",rel:"noopener noreferrer"},k={href:"https://www.digitalocean.com/products/spaces/",target:"_blank",rel:"noopener noreferrer"},w=o(`<p>Typically, after updating the disk&#39;s credentials to match the credentials of the service you are planning to use, you only need to update the value of the <code>endpoint</code> configuration option. This option&#39;s value is typically defined via the <code>AWS_ENDPOINT</code> environment variable:</p><pre><code>&#39;endpoint&#39; =&gt; env(&#39;AWS_ENDPOINT&#39;, &#39;https://minio:9000&#39;),
</code></pre><p><a name="minio"></a></p><h4 id="minio" tabindex="-1"><a class="header-anchor" href="#minio" aria-hidden="true">#</a> MinIO</h4><p>In order for Laravel&#39;s Flysystem integration to generate proper URLs when using MinIO, you should define the <code>AWS_URL</code> environment variable so that it matches your application&#39;s local URL and includes the bucket name in the URL path:</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token key attr-name">AWS_URL</span><span class="token punctuation">=</span><span class="token value attr-value">http://localhost:9000/local</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p><strong>Warning</strong><br> Generating temporary storage URLs via the <code>temporaryUrl</code> method is not supported when using MinIO.</p></blockquote><p><a name="obtaining-disk-instances"></a></p><h2 id="obtaining-disk-instances" tabindex="-1"><a class="header-anchor" href="#obtaining-disk-instances" aria-hidden="true">#</a> Obtaining Disk Instances</h2><p>The <code>Storage</code> facade may be used to interact with any of your configured disks. For example, you may use the <code>put</code> method on the facade to store an avatar on the default disk. If you call methods on the <code>Storage</code> facade without first calling the <code>disk</code> method, the method will automatically be passed to the default disk:</p><pre><code>use Illuminate\\Support\\Facades\\Storage;

Storage::put(&#39;avatars/1&#39;, $content);
</code></pre><p>If your application interacts with multiple disks, you may use the <code>disk</code> method on the <code>Storage</code> facade to work with files on a particular disk:</p><pre><code>Storage::disk(&#39;s3&#39;)-&gt;put(&#39;avatars/1&#39;, $content);
</code></pre><p><a name="on-demand-disks"></a></p><h3 id="on-demand-disks" tabindex="-1"><a class="header-anchor" href="#on-demand-disks" aria-hidden="true">#</a> On-Demand Disks</h3><p>Sometimes you may wish to create a disk at runtime using a given configuration without that configuration actually being present in your application&#39;s <code>filesystems</code> configuration file. To accomplish this, you may pass a configuration array to the <code>Storage</code> facade&#39;s <code>build</code> method:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Support<span class="token punctuation">\\</span>Facades<span class="token punctuation">\\</span>Storage</span><span class="token punctuation">;</span>

<span class="token variable">$disk</span> <span class="token operator">=</span> <span class="token class-name static-context">Storage</span><span class="token operator">::</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;driver&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;local&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;root&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;/path/to/root&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">$disk</span><span class="token operator">-&gt;</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;image.jpg&#39;</span><span class="token punctuation">,</span> <span class="token variable">$content</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="retrieving-files"></a></p><h2 id="retrieving-files" tabindex="-1"><a class="header-anchor" href="#retrieving-files" aria-hidden="true">#</a> Retrieving Files</h2><p>The <code>get</code> method may be used to retrieve the contents of a file. The raw string contents of the file will be returned by the method. Remember, all file paths should be specified relative to the disk&#39;s &quot;root&quot; location:</p><pre><code>$contents = Storage::get(&#39;file.jpg&#39;);
</code></pre><p>If the file you are retrieving contains JSON, you may use the <code>json</code> method to retrieve the file and decode its contents:</p><pre><code>$orders = Storage::json(&#39;orders.json&#39;);
</code></pre><p>The <code>exists</code> method may be used to determine if a file exists on the disk:</p><pre><code>if (Storage::disk(&#39;s3&#39;)-&gt;exists(&#39;file.jpg&#39;)) {
    // ...
}
</code></pre><p>The <code>missing</code> method may be used to determine if a file is missing from the disk:</p><pre><code>if (Storage::disk(&#39;s3&#39;)-&gt;missing(&#39;file.jpg&#39;)) {
    // ...
}
</code></pre><p><a name="downloading-files"></a></p><h3 id="downloading-files" tabindex="-1"><a class="header-anchor" href="#downloading-files" aria-hidden="true">#</a> Downloading Files</h3><p>The <code>download</code> method may be used to generate a response that forces the user&#39;s browser to download the file at the given path. The <code>download</code> method accepts a filename as the second argument to the method, which will determine the filename that is seen by the user downloading the file. Finally, you may pass an array of HTTP headers as the third argument to the method:</p><pre><code>return Storage::download(&#39;file.jpg&#39;);

return Storage::download(&#39;file.jpg&#39;, $name, $headers);
</code></pre><p><a name="file-urls"></a></p><h3 id="file-urls" tabindex="-1"><a class="header-anchor" href="#file-urls" aria-hidden="true">#</a> File URLs</h3><p>You may use the <code>url</code> method to get the URL for a given file. If you are using the <code>local</code> driver, this will typically just prepend <code>/storage</code> to the given path and return a relative URL to the file. If you are using the <code>s3</code> driver, the fully qualified remote URL will be returned:</p><pre><code>use Illuminate\\Support\\Facades\\Storage;

$url = Storage::url(&#39;file.jpg&#39;);
</code></pre><p>When using the <code>local</code> driver, all files that should be publicly accessible should be placed in the <code>storage/app/public</code> directory. Furthermore, you should <a href="#the-public-disk">create a symbolic link</a> at <code>public/storage</code> which points to the <code>storage/app/public</code> directory.</p><blockquote><p><strong>Warning</strong><br> When using the <code>local</code> driver, the return value of <code>url</code> is not URL encoded. For this reason, we recommend always storing your files using names that will create valid URLs.</p></blockquote><p><a name="url-host-customization"></a></p><h4 id="url-host-customization" tabindex="-1"><a class="header-anchor" href="#url-host-customization" aria-hidden="true">#</a> URL Host Customization</h4><p>If you would like to pre-define the host for URLs generated using the <code>Storage</code> facade, you may add a <code>url</code> option to the disk&#39;s configuration array:</p><pre><code>&#39;public&#39; =&gt; [
    &#39;driver&#39; =&gt; &#39;local&#39;,
    &#39;root&#39; =&gt; storage_path(&#39;app/public&#39;),
    &#39;url&#39; =&gt; env(&#39;APP_URL&#39;).&#39;/storage&#39;,
    &#39;visibility&#39; =&gt; &#39;public&#39;,
],
</code></pre><p><a name="temporary-urls"></a></p><h3 id="temporary-urls" tabindex="-1"><a class="header-anchor" href="#temporary-urls" aria-hidden="true">#</a> Temporary URLs</h3><p>Using the <code>temporaryUrl</code> method, you may create temporary URLs to files stored using the <code>s3</code> driver. This method accepts a path and a <code>DateTime</code> instance specifying when the URL should expire:</p><pre><code>use Illuminate\\Support\\Facades\\Storage;

$url = Storage::temporaryUrl(
    &#39;file.jpg&#39;, now()-&gt;addMinutes(5)
);
</code></pre>`,45),S={href:"https://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectGET.html#RESTObjectGET-requests",target:"_blank",rel:"noopener noreferrer"},F=a("code",null,"temporaryUrl",-1),x=o(`<pre><code>$url = Storage::temporaryUrl(
    &#39;file.jpg&#39;,
    now()-&gt;addMinutes(5),
    [
        &#39;ResponseContentType&#39; =&gt; &#39;application/octet-stream&#39;,
        &#39;ResponseContentDisposition&#39; =&gt; &#39;attachment; filename=file2.jpg&#39;,
    ]
);
</code></pre><p>If you need to customize how temporary URLs are created for a specific storage disk, you can use the <code>buildTemporaryUrlsUsing</code> method. For example, this can be useful if you have a controller that allows you to download files stored via a disk that doesn&#39;t typically support temporary URLs. Usually, this method should be called from the <code>boot</code> method of a service provider:</p><pre><code>&lt;?php

namespace App\\Providers;

use DateTime;
use Illuminate\\Support\\Facades\\Storage;
use Illuminate\\Support\\Facades\\URL;
use Illuminate\\Support\\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Storage::disk(&#39;local&#39;)-&gt;buildTemporaryUrlsUsing(
            function (string $path, DateTime $expiration, array $options) {
                return URL::temporarySignedRoute(
                    &#39;files.download&#39;,
                    $expiration,
                    array_merge($options, [&#39;path&#39; =&gt; $path])
                );
            }
        );
    }
}
</code></pre><p><a name="temporary-upload-urls"></a></p><h4 id="temporary-upload-urls" tabindex="-1"><a class="header-anchor" href="#temporary-upload-urls" aria-hidden="true">#</a> Temporary Upload URLs</h4><blockquote><p><strong>Warning</strong> The ability to generate temporary upload URLs is only supported by the <code>s3</code> driver.</p></blockquote><p>If you need to generate a temporary URL that can be used to upload a file directly from your client-side application, you may use the <code>temporaryUploadUrl</code> method. This method accepts a path and a <code>DateTime</code> instance specifying when the URL should expire. The <code>temporaryUploadUrl</code> method returns an associative array which may be destructured into the upload URL and the headers that should be included with the upload request:</p><pre><code>use Illuminate\\Support\\Facades\\Storage;

[&#39;url&#39; =&gt; $url, &#39;headers&#39; =&gt; $headers] = Storage::temporaryUploadUrl(
    &#39;file.jpg&#39;, now()-&gt;addMinutes(5)
);
</code></pre><p>This method is primarily useful in serverless environments that require the client-side application to directly upload files to a cloud storage system such as Amazon S3.</p><p><a name="file-metadata"></a></p><h3 id="file-metadata" tabindex="-1"><a class="header-anchor" href="#file-metadata" aria-hidden="true">#</a> File Metadata</h3><p>In addition to reading and writing files, Laravel can also provide information about the files themselves. For example, the <code>size</code> method may be used to get the size of a file in bytes:</p><pre><code>use Illuminate\\Support\\Facades\\Storage;

$size = Storage::size(&#39;file.jpg&#39;);
</code></pre><p>The <code>lastModified</code> method returns the UNIX timestamp of the last time the file was modified:</p><pre><code>$time = Storage::lastModified(&#39;file.jpg&#39;);
</code></pre><p>The MIME type of a given file may be obtained via the <code>mimeType</code> method:</p><pre><code>$mime = Storage::mimeType(&#39;file.jpg&#39;);
</code></pre><p><a name="file-paths"></a></p><h4 id="file-paths" tabindex="-1"><a class="header-anchor" href="#file-paths" aria-hidden="true">#</a> File Paths</h4><p>You may use the <code>path</code> method to get the path for a given file. If you are using the <code>local</code> driver, this will return the absolute path to the file. If you are using the <code>s3</code> driver, this method will return the relative path to the file in the S3 bucket:</p><pre><code>use Illuminate\\Support\\Facades\\Storage;

$path = Storage::path(&#39;file.jpg&#39;);
</code></pre><p><a name="storing-files"></a></p><h2 id="storing-files" tabindex="-1"><a class="header-anchor" href="#storing-files" aria-hidden="true">#</a> Storing Files</h2><p>The <code>put</code> method may be used to store file contents on a disk. You may also pass a PHP <code>resource</code> to the <code>put</code> method, which will use Flysystem&#39;s underlying stream support. Remember, all file paths should be specified relative to the &quot;root&quot; location configured for the disk:</p><pre><code>use Illuminate\\Support\\Facades\\Storage;

Storage::put(&#39;file.jpg&#39;, $contents);

Storage::put(&#39;file.jpg&#39;, $resource);
</code></pre><p><a name="failed-writes"></a></p><h4 id="failed-writes" tabindex="-1"><a class="header-anchor" href="#failed-writes" aria-hidden="true">#</a> Failed Writes</h4><p>If the <code>put</code> method (or other &quot;write&quot; operations) is unable to write the file to disk, <code>false</code> will be returned:</p><pre><code>if (! Storage::put(&#39;file.jpg&#39;, $contents)) {
    // The file could not be written to disk...
}
</code></pre><p>If you wish, you may define the <code>throw</code> option within your filesystem disk&#39;s configuration array. When this option is defined as <code>true</code>, &quot;write&quot; methods such as <code>put</code> will throw an instance of <code>League\\Flysystem\\UnableToWriteFile</code> when write operations fail:</p><pre><code>&#39;public&#39; =&gt; [
    &#39;driver&#39; =&gt; &#39;local&#39;,
    // ...
    &#39;throw&#39; =&gt; true,
],
</code></pre><p><a name="prepending-appending-to-files"></a></p><h3 id="prepending-appending-to-files" tabindex="-1"><a class="header-anchor" href="#prepending-appending-to-files" aria-hidden="true">#</a> Prepending &amp; Appending To Files</h3><p>The <code>prepend</code> and <code>append</code> methods allow you to write to the beginning or end of a file:</p><pre><code>Storage::prepend(&#39;file.log&#39;, &#39;Prepended Text&#39;);

Storage::append(&#39;file.log&#39;, &#39;Appended Text&#39;);
</code></pre><p><a name="copying-moving-files"></a></p><h3 id="copying-moving-files" tabindex="-1"><a class="header-anchor" href="#copying-moving-files" aria-hidden="true">#</a> Copying &amp; Moving Files</h3><p>The <code>copy</code> method may be used to copy an existing file to a new location on the disk, while the <code>move</code> method may be used to rename or move an existing file to a new location:</p><pre><code>Storage::copy(&#39;old/file.jpg&#39;, &#39;new/file.jpg&#39;);

Storage::move(&#39;old/file.jpg&#39;, &#39;new/file.jpg&#39;);
</code></pre><p><a name="automatic-streaming"></a></p><h3 id="automatic-streaming" tabindex="-1"><a class="header-anchor" href="#automatic-streaming" aria-hidden="true">#</a> Automatic Streaming</h3><p>Streaming files to storage offers significantly reduced memory usage. If you would like Laravel to automatically manage streaming a given file to your storage location, you may use the <code>putFile</code> or <code>putFileAs</code> method. This method accepts either an <code>Illuminate\\Http\\File</code> or <code>Illuminate\\Http\\UploadedFile</code> instance and will automatically stream the file to your desired location:</p><pre><code>use Illuminate\\Http\\File;
use Illuminate\\Support\\Facades\\Storage;

// Automatically generate a unique ID for filename...
$path = Storage::putFile(&#39;photos&#39;, new File(&#39;/path/to/photo&#39;));

// Manually specify a filename...
$path = Storage::putFileAs(&#39;photos&#39;, new File(&#39;/path/to/photo&#39;), &#39;photo.jpg&#39;);
</code></pre><p>There are a few important things to note about the <code>putFile</code> method. Note that we only specified a directory name and not a filename. By default, the <code>putFile</code> method will generate a unique ID to serve as the filename. The file&#39;s extension will be determined by examining the file&#39;s MIME type. The path to the file will be returned by the <code>putFile</code> method so you can store the path, including the generated filename, in your database.</p><p>The <code>putFile</code> and <code>putFileAs</code> methods also accept an argument to specify the &quot;visibility&quot; of the stored file. This is particularly useful if you are storing the file on a cloud disk such as Amazon S3 and would like the file to be publicly accessible via generated URLs:</p><pre><code>Storage::putFile(&#39;photos&#39;, new File(&#39;/path/to/photo&#39;), &#39;public&#39;);
</code></pre><p><a name="file-uploads"></a></p><h3 id="file-uploads" tabindex="-1"><a class="header-anchor" href="#file-uploads" aria-hidden="true">#</a> File Uploads</h3><p>In web applications, one of the most common use-cases for storing files is storing user uploaded files such as photos and documents. Laravel makes it very easy to store uploaded files using the <code>store</code> method on an uploaded file instance. Call the <code>store</code> method with the path at which you wish to store the uploaded file:</p><pre><code>&lt;?php

namespace App\\Http\\Controllers;

use App\\Http\\Controllers\\Controller;
use Illuminate\\Http\\Request;

class UserAvatarController extends Controller
{
    /**
     * Update the avatar for the user.
     */
    public function update(Request $request): string
    {
        $path = $request-&gt;file(&#39;avatar&#39;)-&gt;store(&#39;avatars&#39;);

        return $path;
    }
}
</code></pre><p>There are a few important things to note about this example. Note that we only specified a directory name, not a filename. By default, the <code>store</code> method will generate a unique ID to serve as the filename. The file&#39;s extension will be determined by examining the file&#39;s MIME type. The path to the file will be returned by the <code>store</code> method so you can store the path, including the generated filename, in your database.</p><p>You may also call the <code>putFile</code> method on the <code>Storage</code> facade to perform the same file storage operation as the example above:</p><pre><code>$path = Storage::putFile(&#39;avatars&#39;, $request-&gt;file(&#39;avatar&#39;));
</code></pre><p><a name="specifying-a-file-name"></a></p><h4 id="specifying-a-file-name" tabindex="-1"><a class="header-anchor" href="#specifying-a-file-name" aria-hidden="true">#</a> Specifying A File Name</h4><p>If you do not want a filename to be automatically assigned to your stored file, you may use the <code>storeAs</code> method, which receives the path, the filename, and the (optional) disk as its arguments:</p><pre><code>$path = $request-&gt;file(&#39;avatar&#39;)-&gt;storeAs(
    &#39;avatars&#39;, $request-&gt;user()-&gt;id
);
</code></pre><p>You may also use the <code>putFileAs</code> method on the <code>Storage</code> facade, which will perform the same file storage operation as the example above:</p><pre><code>$path = Storage::putFileAs(
    &#39;avatars&#39;, $request-&gt;file(&#39;avatar&#39;), $request-&gt;user()-&gt;id
);
</code></pre><blockquote><p><strong>Warning</strong><br> Unprintable and invalid unicode characters will automatically be removed from file paths. Therefore, you may wish to sanitize your file paths before passing them to Laravel&#39;s file storage methods. File paths are normalized using the <code>League\\Flysystem\\WhitespacePathNormalizer::normalizePath</code> method.</p></blockquote><p><a name="specifying-a-disk"></a></p><h4 id="specifying-a-disk" tabindex="-1"><a class="header-anchor" href="#specifying-a-disk" aria-hidden="true">#</a> Specifying A Disk</h4><p>By default, this uploaded file&#39;s <code>store</code> method will use your default disk. If you would like to specify another disk, pass the disk name as the second argument to the <code>store</code> method:</p><pre><code>$path = $request-&gt;file(&#39;avatar&#39;)-&gt;store(
    &#39;avatars/&#39;.$request-&gt;user()-&gt;id, &#39;s3&#39;
);
</code></pre><p>If you are using the <code>storeAs</code> method, you may pass the disk name as the third argument to the method:</p><pre><code>$path = $request-&gt;file(&#39;avatar&#39;)-&gt;storeAs(
    &#39;avatars&#39;,
    $request-&gt;user()-&gt;id,
    &#39;s3&#39;
);
</code></pre><p><a name="other-uploaded-file-information"></a></p><h4 id="other-uploaded-file-information" tabindex="-1"><a class="header-anchor" href="#other-uploaded-file-information" aria-hidden="true">#</a> Other Uploaded File Information</h4><p>If you would like to get the original name and extension of the uploaded file, you may do so using the <code>getClientOriginalName</code> and <code>getClientOriginalExtension</code> methods:</p><pre><code>$file = $request-&gt;file(&#39;avatar&#39;);

$name = $file-&gt;getClientOriginalName();
$extension = $file-&gt;getClientOriginalExtension();
</code></pre><p>However, keep in mind that the <code>getClientOriginalName</code> and <code>getClientOriginalExtension</code> methods are considered unsafe, as the file name and extension may be tampered with by a malicious user. For this reason, you should typically prefer the <code>hashName</code> and <code>extension</code> methods to get a name and an extension for the given file upload:</p><pre><code>$file = $request-&gt;file(&#39;avatar&#39;);

$name = $file-&gt;hashName(); // Generate a unique, random name...
$extension = $file-&gt;extension(); // Determine the file&#39;s extension based on the file&#39;s MIME type...
</code></pre><p><a name="file-visibility"></a></p><h3 id="file-visibility" tabindex="-1"><a class="header-anchor" href="#file-visibility" aria-hidden="true">#</a> File Visibility</h3><p>In Laravel&#39;s Flysystem integration, &quot;visibility&quot; is an abstraction of file permissions across multiple platforms. Files may either be declared <code>public</code> or <code>private</code>. When a file is declared <code>public</code>, you are indicating that the file should generally be accessible to others. For example, when using the S3 driver, you may retrieve URLs for <code>public</code> files.</p><p>You can set the visibility when writing the file via the <code>put</code> method:</p><pre><code>use Illuminate\\Support\\Facades\\Storage;

Storage::put(&#39;file.jpg&#39;, $contents, &#39;public&#39;);
</code></pre><p>If the file has already been stored, its visibility can be retrieved and set via the <code>getVisibility</code> and <code>setVisibility</code> methods:</p><pre><code>$visibility = Storage::getVisibility(&#39;file.jpg&#39;);

Storage::setVisibility(&#39;file.jpg&#39;, &#39;public&#39;);
</code></pre><p>When interacting with uploaded files, you may use the <code>storePublicly</code> and <code>storePubliclyAs</code> methods to store the uploaded file with <code>public</code> visibility:</p><pre><code>$path = $request-&gt;file(&#39;avatar&#39;)-&gt;storePublicly(&#39;avatars&#39;, &#39;s3&#39;);

$path = $request-&gt;file(&#39;avatar&#39;)-&gt;storePubliclyAs(
    &#39;avatars&#39;,
    $request-&gt;user()-&gt;id,
    &#39;s3&#39;
);
</code></pre><p><a name="local-files-and-visibility"></a></p><h4 id="local-files-visibility" tabindex="-1"><a class="header-anchor" href="#local-files-visibility" aria-hidden="true">#</a> Local Files &amp; Visibility</h4><p>When using the <code>local</code> driver, <code>public</code> <a href="#file-visibility">visibility</a> translates to <code>0755</code> permissions for directories and <code>0644</code> permissions for files. You can modify the permissions mappings in your application&#39;s <code>filesystems</code> configuration file:</p><pre><code>&#39;local&#39; =&gt; [
    &#39;driver&#39; =&gt; &#39;local&#39;,
    &#39;root&#39; =&gt; storage_path(&#39;app&#39;),
    &#39;permissions&#39; =&gt; [
        &#39;file&#39; =&gt; [
            &#39;public&#39; =&gt; 0644,
            &#39;private&#39; =&gt; 0600,
        ],
        &#39;dir&#39; =&gt; [
            &#39;public&#39; =&gt; 0755,
            &#39;private&#39; =&gt; 0700,
        ],
    ],
],
</code></pre><p><a name="deleting-files"></a></p><h2 id="deleting-files" tabindex="-1"><a class="header-anchor" href="#deleting-files" aria-hidden="true">#</a> Deleting Files</h2><p>The <code>delete</code> method accepts a single filename or an array of files to delete:</p><pre><code>use Illuminate\\Support\\Facades\\Storage;

Storage::delete(&#39;file.jpg&#39;);

Storage::delete([&#39;file.jpg&#39;, &#39;file2.jpg&#39;]);
</code></pre><p>If necessary, you may specify the disk that the file should be deleted from:</p><pre><code>use Illuminate\\Support\\Facades\\Storage;

Storage::disk(&#39;s3&#39;)-&gt;delete(&#39;path/file.jpg&#39;);
</code></pre><p><a name="directories"></a></p><h2 id="directories" tabindex="-1"><a class="header-anchor" href="#directories" aria-hidden="true">#</a> Directories</h2><p><a name="get-all-files-within-a-directory"></a></p><h4 id="get-all-files-within-a-directory" tabindex="-1"><a class="header-anchor" href="#get-all-files-within-a-directory" aria-hidden="true">#</a> Get All Files Within A Directory</h4><p>The <code>files</code> method returns an array of all of the files in a given directory. If you would like to retrieve a list of all files within a given directory including all subdirectories, you may use the <code>allFiles</code> method:</p><pre><code>use Illuminate\\Support\\Facades\\Storage;

$files = Storage::files($directory);

$files = Storage::allFiles($directory);
</code></pre><p><a name="get-all-directories-within-a-directory"></a></p><h4 id="get-all-directories-within-a-directory" tabindex="-1"><a class="header-anchor" href="#get-all-directories-within-a-directory" aria-hidden="true">#</a> Get All Directories Within A Directory</h4><p>The <code>directories</code> method returns an array of all the directories within a given directory. Additionally, you may use the <code>allDirectories</code> method to get a list of all directories within a given directory and all of its subdirectories:</p><pre><code>$directories = Storage::directories($directory);

$directories = Storage::allDirectories($directory);
</code></pre><p><a name="create-a-directory"></a></p><h4 id="create-a-directory" tabindex="-1"><a class="header-anchor" href="#create-a-directory" aria-hidden="true">#</a> Create A Directory</h4><p>The <code>makeDirectory</code> method will create the given directory, including any needed subdirectories:</p><pre><code>Storage::makeDirectory($directory);
</code></pre><p><a name="delete-a-directory"></a></p><h4 id="delete-a-directory" tabindex="-1"><a class="header-anchor" href="#delete-a-directory" aria-hidden="true">#</a> Delete A Directory</h4><p>Finally, the <code>deleteDirectory</code> method may be used to remove a directory and all of its files:</p><pre><code>Storage::deleteDirectory($directory);
</code></pre><p><a name="testing"></a></p><h2 id="testing" tabindex="-1"><a class="header-anchor" href="#testing" aria-hidden="true">#</a> Testing</h2><p>The <code>Storage</code> facade&#39;s <code>fake</code> method allows you to easily generate a fake disk that, combined with the file generation utilities of the <code>Illuminate\\Http\\UploadedFile</code> class, greatly simplifies the testing of file uploads. For example:</p><pre><code>&lt;?php

namespace Tests\\Feature;

use Illuminate\\Http\\UploadedFile;
use Illuminate\\Support\\Facades\\Storage;
use Tests\\TestCase;

class ExampleTest extends TestCase
{
    public function test_albums_can_be_uploaded(): void
    {
        Storage::fake(&#39;photos&#39;);

        $response = $this-&gt;json(&#39;POST&#39;, &#39;/photos&#39;, [
            UploadedFile::fake()-&gt;image(&#39;photo1.jpg&#39;),
            UploadedFile::fake()-&gt;image(&#39;photo2.jpg&#39;)
        ]);

        // Assert one or more files were stored...
        Storage::disk(&#39;photos&#39;)-&gt;assertExists(&#39;photo1.jpg&#39;);
        Storage::disk(&#39;photos&#39;)-&gt;assertExists([&#39;photo1.jpg&#39;, &#39;photo2.jpg&#39;]);

        // Assert one or more files were not stored...
        Storage::disk(&#39;photos&#39;)-&gt;assertMissing(&#39;missing.jpg&#39;);
        Storage::disk(&#39;photos&#39;)-&gt;assertMissing([&#39;missing.jpg&#39;, &#39;non-existing.jpg&#39;]);

        // Assert that a given directory is empty...
        Storage::disk(&#39;photos&#39;)-&gt;assertDirectoryEmpty(&#39;/wallpapers&#39;);
    }
}
</code></pre><p>By default, the <code>fake</code> method will delete all files in its temporary directory. If you would like to keep these files, you may use the &quot;persistentFake&quot; method instead. For more information on testing file uploads, you may consult the <a href="./http-tests#testing-file-uploads">HTTP testing documentation&#39;s information on file uploads</a>.</p>`,114),T=a("strong",null,"Warning",-1),q=a("code",null,"image",-1),_={href:"https://www.php.net/manual/en/book.image.php",target:"_blank",rel:"noopener noreferrer"},$=o(`<p><a name="custom-filesystems"></a></p><h2 id="custom-filesystems" tabindex="-1"><a class="header-anchor" href="#custom-filesystems" aria-hidden="true">#</a> Custom Filesystems</h2><p>Laravel&#39;s Flysystem integration provides support for several &quot;drivers&quot; out of the box; however, Flysystem is not limited to these and has adapters for many other storage systems. You can create a custom driver if you want to use one of these additional adapters in your Laravel application.</p><p>In order to define a custom filesystem you will need a Flysystem adapter. Let&#39;s add a community maintained Dropbox adapter to our project:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">composer</span> require spatie/flysystem-dropbox
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Next, you can register the driver within the <code>boot</code> method of one of your application&#39;s <a href="./providers">service providers</a>. To accomplish this, you should use the <code>extend</code> method of the <code>Storage</code> facade:</p><pre><code>&lt;?php

namespace App\\Providers;

use Illuminate\\Contracts\\Foundation\\Application;
use Illuminate\\Filesystem\\FilesystemAdapter;
use Illuminate\\Support\\Facades\\Storage;
use Illuminate\\Support\\ServiceProvider;
use League\\Flysystem\\Filesystem;
use Spatie\\Dropbox\\Client as DropboxClient;
use Spatie\\FlysystemDropbox\\DropboxAdapter;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        // ...
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Storage::extend(&#39;dropbox&#39;, function (Application $app, array $config) {
            $adapter = new DropboxAdapter(new DropboxClient(
                $config[&#39;authorization_token&#39;]
            ));

            return new FilesystemAdapter(
                new Filesystem($adapter, $config),
                $adapter,
                $config
            );
        });
    }
}
</code></pre><p>The first argument of the <code>extend</code> method is the name of the driver and the second is a closure that receives the <code>$app</code> and <code>$config</code> variables. The closure must return an instance of <code>Illuminate\\Filesystem\\FilesystemAdapter</code>. The <code>$config</code> variable contains the values defined in <code>config/filesystems.php</code> for the specified disk.</p><p>Once you have created and registered the extension&#39;s service provider, you may use the <code>dropbox</code> driver in your <code>config/filesystems.php</code> configuration file.</p>`,9);function I(P,A){const t=s("ExternalLinkIcon");return r(),d("div",null,[c,a("p",null,[e("Laravel provides a powerful filesystem abstraction thanks to the wonderful "),a("a",p,[e("Flysystem"),i(t)]),e(" PHP package by Frank de Jonge. The Laravel Flysystem integration provides simple drivers for working with local filesystems, SFTP, and Amazon S3. Even better, it's amazingly simple to switch between these storage options between your local development machine and production server as the API remains the same for each system.")]),h,a("p",null,[e("To make these files accessible from the web, you should create a symbolic link from "),u,e(" to "),g,e(". Utilizing this folder convention will keep your publicly accessible files in one directory that can be easily shared across deployments when using zero down-time deployment systems like "),a("a",m,[e("Envoyer"),i(t)]),e(".")]),f,a("p",null,[e("By default, your application's "),y,e(" configuration file contains a disk configuration for the "),v,e(" disk. In addition to using this disk to interact with Amazon S3, you may use it to interact with any S3 compatible file storage service such as "),a("a",b,[e("MinIO"),i(t)]),e(" or "),a("a",k,[e("DigitalOcean Spaces"),i(t)]),e(".")]),w,a("p",null,[e("If you need to specify additional "),a("a",S,[e("S3 request parameters"),i(t)]),e(", you may pass the array of request parameters as the third argument to the "),F,e(" method:")]),x,a("blockquote",null,[a("p",null,[T,e(" The "),q,e(" method requires the "),a("a",_,[e("GD extension"),i(t)]),e(".")])]),$])}const D=n(l,[["render",I],["__file","filesystem.html.vue"]]);export{D as default};
