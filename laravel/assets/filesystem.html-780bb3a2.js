import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as i,c as d,b as a,d as e,e as s,a as t}from"./app-8cdff07c.js";const p={},c=t('<h1 id="文件存储" tabindex="-1"><a class="header-anchor" href="#文件存储" aria-hidden="true">#</a> 文件存储</h1><ul><li><a href="#introduction">简介</a></li><li><a href="#configuration">配置</a><ul><li><a href="#the-local-driver">本地驱动</a></li><li><a href="#the-public-disk">公共磁盘</a></li><li><a href="#driver-prerequisites">驱动先决要求</a></li><li><a href="#scoped-and-read-only-filesystems">分区和只读文件系统</a></li><li><a href="#amazon-s3-compatible-filesystems">Amazon S3 兼容文件系统</a></li></ul></li><li><a href="#obtaining-disk-instances">获取磁盘实例</a><ul><li><a href="#on-demand-disks">按需配置磁盘</a></li></ul></li><li><a href="#retrieving-files">检索文件</a><ul><li><a href="#downloading-files">下载文件</a></li><li><a href="#file-urls">文件 URL</a></li><li><a href="#temporary-urls">临时 URL</a></li><li><a href="#file-metadata">文件元数据</a></li></ul></li><li><a href="#storing-files">保存文件</a><ul><li><a href="#prepending-appending-to-files">预置和附加文件</a></li><li><a href="#copying-moving-files">复制和移动文件</a></li><li><a href="#automatic-streaming">自动流式传输</a></li><li><a href="#file-uploads">文件上传</a></li><li><a href="#file-visibility">文件可见性</a></li></ul></li><li><a href="#deleting-files">删除文件</a></li><li><a href="#directories">目录</a></li><li><a href="#testing">测试</a></li><li><a href="#custom-filesystems">自定义文件系统</a></li></ul><p><a name="introduction"></a></p><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2>',4),l={href:"https://github.com/thephpleague/flysystem",target:"_blank",rel:"noopener noreferrer"},u=t(`<p><a name="configuration"></a></p><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><p>Laravel 的文件系统配置文件位于 <code>config/filesystems.php</code>。 在这个文件中，你可以配置你所有的文件系统「磁盘」。每个磁盘代表一个特定的存储驱动器和存储位置。 每种支持的驱动器的配置示例都包含在配置文件中, 因此你可以修改配置以反映你的存储偏好和证书。</p><p><code>local</code> 驱动用于与运行Laravel应用程序的服务器上存储的文件进行交互，而 <code>s3</code> 驱动用于写入 Amazon 的 S3 云存储服务。</p><blockquote><p><strong>注意</strong> 你可以配置任意数量的磁盘，甚至可以添加多个使用相同驱动的磁盘。</p></blockquote><p><a name="the-local-driver"></a></p><h3 id="本地驱动" tabindex="-1"><a class="header-anchor" href="#本地驱动" aria-hidden="true">#</a> 本地驱动</h3><p>使用 <code>local</code> 驱动时，所有文件操作都与 <code>filesystems</code> 配置文件中定义的 <code>root</code> 目录相关。 默认情况下，此值设置为 <code>storage/app</code> 目录。因此，以下方法会把文件存储在 <code>storage/app/example.txt</code>中：</p><pre><code>use Illuminate\\Support\\Facades\\Storage;

Storage::disk(&#39;local&#39;)-&gt;put(&#39;example.txt&#39;, &#39;Contents&#39;);
</code></pre><p><a name="the-public-disk"></a></p><h3 id="公共磁盘" tabindex="-1"><a class="header-anchor" href="#公共磁盘" aria-hidden="true">#</a> 公共磁盘</h3><p>在 <code>filesystems</code> 配置文件中定义的 <code>public</code> 磁盘适用于要公开访问的文件。默认情况下， <code>public</code> 磁盘使用 <code>local</code> 驱动，并且将这些文件存储在 <code>storage/app/public</code>目录下。</p>`,12),g=a("code",null,"public/storage",-1),h=a("code",null,"storage/app/public",-1),m={href:"https://envoyer.io",target:"_blank",rel:"noopener noreferrer"},f=t(`<p>你可以使用 Artisan 命令 <code>storage:link</code> 来创建符号链接：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan storage:link
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>一旦一个文件被存储并且已经创建了符号链接，你就可以使用辅助函数 <code>asset</code> 来创建文件的 URL：</p><pre><code>echo asset(&#39;storage/file.txt&#39;);
</code></pre><p>你可以在 <code>filesystems</code> 配置文件中配置额外的符号链接。这些链接将会在运行 <code>storage:link</code> 命令时自动创建：</p><pre><code>&#39;links&#39; =&gt; [
    public_path(&#39;storage&#39;) =&gt; storage_path(&#39;app/public&#39;),
    public_path(&#39;images&#39;) =&gt; storage_path(&#39;app/images&#39;),
],
</code></pre><p><a name="driver-prerequisites"></a></p><h3 id="驱动先决要求" tabindex="-1"><a class="header-anchor" href="#驱动先决要求" aria-hidden="true">#</a> 驱动先决要求</h3><p><a name="s3-driver-configuration"></a></p><h4 id="s3-驱动配置" tabindex="-1"><a class="header-anchor" href="#s3-驱动配置" aria-hidden="true">#</a> S3 驱动配置</h4><p>在使用 S3 驱动之前，你需要通过 Composer 包管理器安装 Flysystem S3 软件包：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">composer</span> require league/flysystem-aws-s3-v3 <span class="token string">&quot;^3.0&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>S3 驱动配置信息位于你的 <code>config/filesystems.php</code> 配置文件中。该文件包含一个 S3 驱动的示例配置数组。你可以自由使用自己的 S3 配置和凭证修改此数组。为方便起见，这些环境变量与 AWS CLI 使用的命名约定相匹配。</p><p><a name="ftp-driver-configuration"></a></p><h4 id="ftp-驱动配置" tabindex="-1"><a class="header-anchor" href="#ftp-驱动配置" aria-hidden="true">#</a> FTP 驱动配置</h4><p>在使用 FTP 驱动之前，你需要通过 Composer 包管理器安装 Flysystem FTP 包：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">composer</span> require league/flysystem-ftp <span class="token string">&quot;^3.0&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Laravel 的 Flysystem 能与 FTP 很好的适配；然而，框架的默认 <code>filesystems.php</code> 配置文件中并未包含示例配置。如果你需要配置 FTP 文件系统，可以使用下面的配置示例：</p><pre><code>&#39;ftp&#39; =&gt; [
    &#39;driver&#39; =&gt; &#39;ftp&#39;,
    &#39;host&#39; =&gt; env(&#39;FTP_HOST&#39;),
    &#39;username&#39; =&gt; env(&#39;FTP_USERNAME&#39;),
    &#39;password&#39; =&gt; env(&#39;FTP_PASSWORD&#39;),

    // 可选的 FTP 设置...
    // &#39;port&#39; =&gt; env(&#39;FTP_PORT&#39;, 21),
    // &#39;root&#39; =&gt; env(&#39;FTP_ROOT&#39;),
    // &#39;passive&#39; =&gt; true,
    // &#39;ssl&#39; =&gt; true,
    // &#39;timeout&#39; =&gt; 30,
],
</code></pre><p><a name="sftp-driver-configuration"></a></p><h4 id="sftp-驱动配置" tabindex="-1"><a class="header-anchor" href="#sftp-驱动配置" aria-hidden="true">#</a> SFTP 驱动配置</h4><p>在使用 SFTP 驱动之前，你需要通过 Composer 包管理器安装 Flysystem SFTP 软件包。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">composer</span> require league/flysystem-sftp-v3 <span class="token string">&quot;^3.0&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Laravel 的 Flysystem 能与 SFTP 很好的适配；然而，框架默认的 <code>filesystems.php</code> 配置文件中并未包含示例配置。如果你需要配置 SFTP 文件系统，可以使用下面的配置示例：</p><pre><code>&#39;sftp&#39; =&gt; [
    &#39;driver&#39; =&gt; &#39;sftp&#39;,
    &#39;host&#39; =&gt; env(&#39;SFTP_HOST&#39;),

    // 基本认证的设置...
    &#39;username&#39; =&gt; env(&#39;SFTP_USERNAME&#39;),
    &#39;password&#39; =&gt; env(&#39;SFTP_PASSWORD&#39;),

    // 基于SSH密钥的认证与加密密码的设置...
    &#39;privateKey&#39; =&gt; env(&#39;SFTP_PRIVATE_KEY&#39;),
    &#39;passphrase&#39; =&gt; env(&#39;SFTP_PASSPHRASE&#39;),

    // 可选的SFTP设置...
    // &#39;hostFingerprint&#39; =&gt; env(&#39;SFTP_HOST_FINGERPRINT&#39;),
    // &#39;maxTries&#39; =&gt; 4,
    // &#39;passphrase&#39; =&gt; env(&#39;SFTP_PASSPHRASE&#39;),
    // &#39;port&#39; =&gt; env(&#39;SFTP_PORT&#39;, 22),
    // &#39;root&#39; =&gt; env(&#39;SFTP_ROOT&#39;, &#39;&#39;),
    // &#39;timeout&#39; =&gt; 30,
    // &#39;useAgent&#39; =&gt; true,
],
</code></pre><h3 id="驱动先决条件" tabindex="-1"><a class="header-anchor" href="#驱动先决条件" aria-hidden="true">#</a> 驱动先决条件</h3><p><a name="s3-driver-configuration"></a></p><h4 id="s3-驱动配置-1" tabindex="-1"><a class="header-anchor" href="#s3-驱动配置-1" aria-hidden="true">#</a> S3 驱动配置</h4><p>在使用 S3 驱动之前，你需要通过 Composer 安装 Flysystem S3 包：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">composer</span> require league/flysystem-aws-s3-v3 <span class="token string">&quot;^3.0&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>S3 驱动配置信息位于你的 <code>config/filesystems.php</code> 配置文件中。 此文件包含 S3 驱动的示例配置数组。 你可以使用自己的 S3 配置和凭据自由修改此数组。 为方便起见，这些环境变量与 AWS CLI 使用的命名约定相匹配。</p><p><a name="ftp-driver-configuration"></a></p><h4 id="ftp-驱动配置-1" tabindex="-1"><a class="header-anchor" href="#ftp-驱动配置-1" aria-hidden="true">#</a> FTP 驱动配置</h4><p>在使用 FTP 驱动之前，你需要通过 Composer 安装 Flysystem FTP 包：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">composer</span> require league/flysystem-ftp <span class="token string">&quot;^3.0&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Laravel 的 Flysystem 集成与 FTP 配合得很好； 但是，框架的默认 <code>filesystems.php</code> 配置文件中不包含示例配置。 如果需要配置 FTP 文件系统，可以使用下面的配置示例：</p><pre><code>&#39;ftp&#39; =&gt; [
    &#39;driver&#39; =&gt; &#39;ftp&#39;,
    &#39;host&#39; =&gt; env(&#39;FTP_HOST&#39;),
    &#39;username&#39; =&gt; env(&#39;FTP_USERNAME&#39;),
    &#39;password&#39; =&gt; env(&#39;FTP_PASSWORD&#39;),

    // 可选的 FTP 设置...
    // &#39;port&#39; =&gt; env(&#39;FTP_PORT&#39;, 21),
    // &#39;root&#39; =&gt; env(&#39;FTP_ROOT&#39;),
    // &#39;passive&#39; =&gt; true,
    // &#39;ssl&#39; =&gt; true,
    // &#39;timeout&#39; =&gt; 30,
],
</code></pre><p><a name="sftp-driver-configuration"></a></p><h4 id="sftp-驱动配置-1" tabindex="-1"><a class="header-anchor" href="#sftp-驱动配置-1" aria-hidden="true">#</a> SFTP 驱动配置</h4><p>在使用 SFTP 驱动之前，你需要通过 Composer 安装 Flysystem SFTP 包：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">composer</span> require league/flysystem-sftp-v3 <span class="token string">&quot;^3.0&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Laravel 的 Flysystem 集成与 SFTP 配合得很好； 但是，框架的默认 <code>filesystems.php</code> 配置文件中不包含示例配置。 如果你需要配置 SFTP 文件系统，可以使用下面的配置示例：</p><pre><code>&#39;sftp&#39; =&gt; [
    &#39;driver&#39; =&gt; &#39;sftp&#39;,
    &#39;host&#39; =&gt; env(&#39;SFTP_HOST&#39;),

    // 基本身份验证设置...
    &#39;username&#39; =&gt; env(&#39;SFTP_USERNAME&#39;),
    &#39;password&#39; =&gt; env(&#39;SFTP_PASSWORD&#39;),

    // 基于SSH密钥的加密密码认证设置…
    &#39;privateKey&#39; =&gt; env(&#39;SFTP_PRIVATE_KEY&#39;),
    &#39;passphrase&#39; =&gt; env(&#39;SFTP_PASSPHRASE&#39;),

    // 可选的 SFTP 设置...
    // &#39;hostFingerprint&#39; =&gt; env(&#39;SFTP_HOST_FINGERPRINT&#39;),
    // &#39;maxTries&#39; =&gt; 4,
    // &#39;passphrase&#39; =&gt; env(&#39;SFTP_PASSPHRASE&#39;),
    // &#39;port&#39; =&gt; env(&#39;SFTP_PORT&#39;, 22),
    // &#39;root&#39; =&gt; env(&#39;SFTP_ROOT&#39;, &#39;&#39;),
    // &#39;timeout&#39; =&gt; 30,
    // &#39;useAgent&#39; =&gt; true,
],
</code></pre><p><a name="scoped-and-read-only-filesystems"></a></p><h3 id="分区和只读文件系统" tabindex="-1"><a class="header-anchor" href="#分区和只读文件系统" aria-hidden="true">#</a> 分区和只读文件系统</h3><p>分区磁盘允许你定义一个文件系统，其中所有的路径都自动带有给定的路径前缀。在创建一个分区文件系统磁盘之前，你需要通过 Composer 包管理器安装一个额外的 Flysystem 包：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">composer</span> require league/flysystem-path-prefixing <span class="token string">&quot;^3.0&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>你可以通过定义一个使用 <code>scoped</code> 驱动的磁盘来创建任何现有文件系统磁盘的路径分区实例。例如，你可以创建一个磁盘，它将你现有的 <code>s3</code> 磁盘限定在特定的路径前缀上，然后使用你的分区磁盘进行的每个文件操作都将使用指定的前缀：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token string single-quoted-string">&#39;s3-videos&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;driver&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;scoped&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;disk&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;s3&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;prefix&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;path/to/videos&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>「只读」磁盘允许你创建不允许写入操作的文件系统磁盘。在使用 <code>read-only</code> 配置选项之前，你需要通过 Composer 包管理器安装一个额外的 Flysystem 包：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">composer</span> require league/flysystem-read-only <span class="token string">&quot;^3.0&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>接下来，你可以在一个或多个磁盘的配置数组中包含 <code>read-only</code> 配置选项：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token string single-quoted-string">&#39;s3-videos&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;driver&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;s3&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// ...</span>
    <span class="token string single-quoted-string">&#39;read-only&#39;</span> <span class="token operator">=&gt;</span> <span class="token constant boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="amazon-s3-compatible-filesystems"></a></p><h3 id="amazon-s3-兼容文件系统" tabindex="-1"><a class="header-anchor" href="#amazon-s3-兼容文件系统" aria-hidden="true">#</a> Amazon S3 兼容文件系统</h3>`,55),v=a("code",null,"filesystems",-1),b=a("code",null,"s3",-1),S={href:"https://github.com/minio/minio",target:"_blank",rel:"noopener noreferrer"},y={href:"https://www.digitalocean.com/products/spaces/",target:"_blank",rel:"noopener noreferrer"},k=t(`<p>通常，在更新磁盘凭据以匹配你计划使用的服务的凭据后，你只需要更新 <code>endpoint</code> 配置选项的值。此选项的值通常通过 <code>AWS_ENDPOINT</code> 环境变量定义：</p><pre><code>&#39;endpoint&#39; =&gt; env(&#39;AWS_ENDPOINT&#39;, &#39;https://minio:9000&#39;),
</code></pre><p><a name="minio"></a></p><h4 id="minio" tabindex="-1"><a class="header-anchor" href="#minio" aria-hidden="true">#</a> MinIO</h4><p>为了让 Laravel 的 Flysystem 集成在使用 MinIO 时生成正确的 URL，你应该定义 <code>AWS_URL</code> 环境变量，使其与你的应用程序的本地 URL 匹配，并在 URL 路径中包含存储桶名称：</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token key attr-name">AWS_URL</span><span class="token punctuation">=</span><span class="token value attr-value">http://localhost:9000/local</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p><strong>警告</strong> 当使用 MinIO 时，不支持通过 <code>temporaryUrl</code> 方法生成临时存储 URL。</p></blockquote><p><a name="obtaining-disk-instances"></a></p><h2 id="获取磁盘实例" tabindex="-1"><a class="header-anchor" href="#获取磁盘实例" aria-hidden="true">#</a> 获取磁盘实例</h2><p><code>Storage</code> Facade 可用于与所有已配置的磁盘进行交互。例如，你可以使用 Facade 中的 <code>put</code> 方法将头像存储到默认磁盘。如果你在未先调用 <code>disk</code> 方法的情况下调用 <code>Storage</code> Facade 中的方法，则该方法将自动传递给默认磁盘：</p><pre><code>use Illuminate\\Support\\Facades\\Storage;

Storage::put(&#39;avatars/1&#39;, $content);
</code></pre><p>如果你的应用与多个磁盘进行交互，可使用 <code>Storage</code> Facade 中的 <code>disk</code> 方法对特定磁盘上的文件进行操作：</p><pre><code>Storage::disk(&#39;s3&#39;)-&gt;put(&#39;avatars/1&#39;, $content);
</code></pre><p><a name="on-demand-disks"></a></p><h3 id="按需配置磁盘" tabindex="-1"><a class="header-anchor" href="#按需配置磁盘" aria-hidden="true">#</a> 按需配置磁盘</h3><p>有时你可能希望在运行时使用给定配置创建磁盘，而无需在应用程序的 <code>filesystems</code> 配置文件中实际存在该配置。为了实现这一点，你可以将配置数组传递给 <code>Storage</code> Facade 的 <code>build</code> 方法：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Support<span class="token punctuation">\\</span>Facades<span class="token punctuation">\\</span>Storage</span><span class="token punctuation">;</span>

<span class="token variable">$disk</span> <span class="token operator">=</span> <span class="token class-name static-context">Storage</span><span class="token operator">::</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;driver&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;local&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;root&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;/path/to/root&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">$disk</span><span class="token operator">-&gt;</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;image.jpg&#39;</span><span class="token punctuation">,</span> <span class="token variable">$content</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a name="retrieving-files"></a></p><h2 id="检索文件" tabindex="-1"><a class="header-anchor" href="#检索文件" aria-hidden="true">#</a> 检索文件</h2><p><code>get</code> 方法可用于检索文件的内容。该方法将返回文件的原始字符串内容。切记，所有文件路径的指定都应该相对于该磁盘所配置的「root」目录：</p><pre><code>$contents = Storage::get(&#39;file.jpg&#39;);
</code></pre><p><code>exists</code> 方法可以用来判断一个文件是否存在于磁盘上：</p><pre><code>if (Storage::disk(&#39;s3&#39;)-&gt;exists(&#39;file.jpg&#39;)) {
    // ...
}
</code></pre><p><code>missing</code> 方法可以用来判断一个文件是否缺失于磁盘上：</p><pre><code>if (Storage::disk(&#39;s3&#39;)-&gt;missing(&#39;file.jpg&#39;)) {
    // ...
}
</code></pre><p><a name="downloading-files"></a></p><h3 id="下载文件" tabindex="-1"><a class="header-anchor" href="#下载文件" aria-hidden="true">#</a> 下载文件</h3><p><code>download</code> 方法可以用来生成一个响应，强制用户的浏览器下载给定路径的文件。<code>download</code> 方法接受一个文件名作为方法的第二个参数，这将决定用户下载文件时看到的文件名。最后，你可以传递一个 HTTP 头部的数组作为方法的第三个参数：</p><pre><code>return Storage::download(&#39;file.jpg&#39;);

return Storage::download(&#39;file.jpg&#39;, $name, $headers);
</code></pre><p><a name="file-urls"></a></p><h3 id="文件-url" tabindex="-1"><a class="header-anchor" href="#文件-url" aria-hidden="true">#</a> 文件 URL</h3><p>你可以使用 <code>url</code> 方法来获取给定文件的 URL。如果你使用的是<code>local</code> 驱动，这通常只会在给定路径前加上 <code>/storage</code>，并返回一个相对 URL 到文件。如果你使用的是 <code>s3</code> 驱动，将返回完全限定的远程 URL：</p><pre><code>use Illuminate\\Support\\Facades\\Storage;

$url = Storage::url(&#39;file.jpg&#39;);
</code></pre><p>当使用 <code>local</code> 驱动时，所有应该公开访问的文件都应放置在 <code>storage/app/public</code> 目录中。此外，你应该在 <code>public/storage</code> 处 <a href="#the-public-disk">创建一个符号连接</a> 指向 <code>storage/app/public</code> 目录。</p><blockquote><p><strong>警告</strong> 当使用 <code>local</code> 驱动时，url 的返回值不是 URL 编码的。因此，我们建议始终使用能够创建有效 URL 的名称存储文件。</p></blockquote><p><a name="url-host-customization"></a></p><h4 id="定制-url-的-host" tabindex="-1"><a class="header-anchor" href="#定制-url-的-host" aria-hidden="true">#</a> 定制 URL 的 Host</h4><p>如果你想预定义使用 <code>Storage</code> Facade 生成的 URL 的 Host，则可以在磁盘的配置数组中添加一个 <code>url</code> 选项：</p><pre><code>&#39;public&#39; =&gt; [
    &#39;driver&#39; =&gt; &#39;local&#39;,
    &#39;root&#39; =&gt; storage_path(&#39;app/public&#39;),
    &#39;url&#39; =&gt; env(&#39;APP_URL&#39;).&#39;/storage&#39;,
    &#39;visibility&#39; =&gt; &#39;public&#39;,
],
</code></pre><p><a name="temporary-urls"></a></p><h3 id="临时-url" tabindex="-1"><a class="header-anchor" href="#临时-url" aria-hidden="true">#</a> 临时 URL</h3><p>使用 <code>temporaryUrl</code> 方法，你可以为使用 <code>s3</code> 驱动存储的文件创建临时 URL。此方法接受一个路径和一个 <code>DateTime</code> 实例，指定 URL 的过期时间：</p><pre><code>use Illuminate\\Support\\Facades\\Storage;

$url = Storage::temporaryUrl(
    &#39;file.jpg&#39;, now()-&gt;addMinutes(5)
);
</code></pre>`,43),F={href:"https://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectGET.html#RESTObjectGET-requests",target:"_blank",rel:"noopener noreferrer"},x=a("code",null,"temporaryUrl",-1),_=t(`<pre><code>$url = Storage::temporaryUrl(
    &#39;file.jpg&#39;,
    now()-&gt;addMinutes(5),
    [
        &#39;ResponseContentType&#39; =&gt; &#39;application/octet-stream&#39;,
        &#39;ResponseContentDisposition&#39; =&gt; &#39;attachment; filename=file2.jpg&#39;,
    ]
);
</code></pre><p>如果你需要为一个特定的存储磁盘定制临时 URL 的创建方式，可以使用 <code>buildTemporaryUrlsUsing</code> 方法。例如，如果你有一个控制器允许你通过不支持临时 URL 的磁盘下载存储的文件，这可能很有用。通常，此方法应从服务提供者的 <code>boot</code> 方法中调用：</p><pre><code>&lt;?php

namespace App\\Providers;

use DateTime;
use Illuminate\\Support\\Facades\\Storage;
use Illuminate\\Support\\Facades\\URL;
use Illuminate\\Support\\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * 启动任何应用程序服务。
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
</code></pre><p><a name="url-host-customization"></a></p><h4 id="url-host-自定义" tabindex="-1"><a class="header-anchor" href="#url-host-自定义" aria-hidden="true">#</a> URL Host 自定义</h4><p>如果你想为使用 <code>Storage</code> Facade 生成的 URL 预定义 Host，可以将 <code>url</code> 选项添加到磁盘的配置数组：</p><pre><code>&#39;public&#39; =&gt; [
    &#39;driver&#39; =&gt; &#39;local&#39;,
    &#39;root&#39; =&gt; storage_path(&#39;app/public&#39;),
    &#39;url&#39; =&gt; env(&#39;APP_URL&#39;).&#39;/storage&#39;,
    &#39;visibility&#39; =&gt; &#39;public&#39;,
],
</code></pre><p><a name="temporary-upload-urls"></a></p><h4 id="临时上传-url" tabindex="-1"><a class="header-anchor" href="#临时上传-url" aria-hidden="true">#</a> 临时上传 URL</h4><blockquote><p><strong>警告</strong> 生成临时上传 URL 的能力仅由 <code>s3</code> 驱动支持。</p></blockquote><p>如果你需要生成一个临时 URL，可以直接从客户端应用程序上传文件，你可以使用 <code>temporaryUploadUrl</code> 方法。此方法接受一个路径和一个 <code>DateTime</code> 实例，指定 URL 应该在何时过期。<code>temporaryUploadUrl</code> 方法返回一个关联数组，可以解构为上传 URL 和应该包含在上传请求中的头部：</p><pre><code>use Illuminate\\Support\\Facades\\Storage;

[&#39;url&#39; =&gt; $url, &#39;headers&#39; =&gt; $headers] = Storage::temporaryUploadUrl(
    &#39;file.jpg&#39;, now()-&gt;addMinutes(5)
);
</code></pre><p>此方法主要用于无服务器环境，需要客户端应用程序直接将文件上传到云存储系统（如 Amazon S3）。</p><p><a name="file-metadata"></a></p><h3 id="文件元数据" tabindex="-1"><a class="header-anchor" href="#文件元数据" aria-hidden="true">#</a> 文件元数据</h3><p>除了读写文件，Laravel 还可以提供有关文件本身的信息。例如，<code>size</code> 方法可用于获取文件大小（以字节为单位）：</p><pre><code>use Illuminate\\Support\\Facades\\Storage;

$size = Storage::size(&#39;file.jpg&#39;);
</code></pre><p><code>lastModified</code> 方法返回上次修改文件时的时间戳：</p><pre><code>$time = Storage::lastModified(&#39;file.jpg&#39;);
</code></pre><p>可以通过 <code>mimeType</code> 方法获取给定文件的 MIME 类型：</p><pre><code>$mime = Storage::mimeType(&#39;file.jpg&#39;)
</code></pre><p><a name="file-paths"></a></p><h4 id="文件路径" tabindex="-1"><a class="header-anchor" href="#文件路径" aria-hidden="true">#</a> 文件路径</h4><p>你可以使用 <code>path</code> 方法获取给定文件的路径。如果你使用的是 <code>local</code> 驱动，这将返回文件的绝对路径。如果你使用的是 <code>s3</code> 驱动，此方法将返回 S3 存储桶中文件的相对路径：</p><pre><code>use Illuminate\\Support\\Facades\\Storage;

$path = Storage::path(&#39;file.jpg&#39;);
</code></pre><p><a name="storing-files"></a></p><h2 id="保存文件" tabindex="-1"><a class="header-anchor" href="#保存文件" aria-hidden="true">#</a> 保存文件</h2><p>可以使用 <code>put</code> 方法将文件内容存储在磁盘上。你还可以将 PHP <code>resource</code> 传递给 <code>put</code> 方法，该方法将使用 Flysystem 的底层流支持。请记住，应相对于为磁盘配置的「根」目录指定所有文件路径：</p><pre><code>use Illuminate\\Support\\Facades\\Storage;

Storage::put(&#39;file.jpg&#39;, $contents);

Storage::put(&#39;file.jpg&#39;, $resource);
</code></pre><p><a name="failed-writes"></a></p><h4 id="写入失败" tabindex="-1"><a class="header-anchor" href="#写入失败" aria-hidden="true">#</a> 写入失败</h4><p>如果 <code>put</code> 方法（或其他「写入」操作）无法将文件写入磁盘，将返回 <code>false</code>。</p><pre><code>if (! Storage::put(&#39;file.jpg&#39;, $contents)) {
    // 该文件无法写入磁盘...
}
</code></pre><p>你可以在你的文件系统磁盘的配置数组中定义 <code>throw</code> 选项。当这个选项被定义为 <code>true</code> 时，「写入」的方法如 <code>put</code> 将在写入操作失败时抛出一个 <code>League\\Flysystem\\UnableToWriteFile</code> 的实例。</p><pre><code>&#39;public&#39; =&gt; [
    &#39;driver&#39; =&gt; &#39;local&#39;,
    // ...
    &#39;throw&#39; =&gt; true,
],
</code></pre><p><a name="prepending-appending-to-files"></a></p><h3 id="追加内容到文件开头或结尾" tabindex="-1"><a class="header-anchor" href="#追加内容到文件开头或结尾" aria-hidden="true">#</a> 追加内容到文件开头或结尾</h3><p><code>prepend</code> 和 <code>append</code> 方法允许你将内容写入文件的开头或结尾：</p><pre><code>Storage::prepend(&#39;file.log&#39;, &#39;Prepended Text&#39;);

Storage::append(&#39;file.log&#39;, &#39;Appended Text&#39;);
</code></pre><p><a name="copying-moving-files"></a></p><h3 id="复制-移动文件" tabindex="-1"><a class="header-anchor" href="#复制-移动文件" aria-hidden="true">#</a> 复制 / 移动文件</h3><p><code>copy</code> 方法可用于将现有文件复制到磁盘上的新位置，而 <code>move</code> 方法可用于重命名现有文件或将其移动到新位置：</p><pre><code>Storage::copy(&#39;old/file.jpg&#39;, &#39;new/file.jpg&#39;);

Storage::move(&#39;old/file.jpg&#39;, &#39;new/file.jpg&#39;);
</code></pre><p><a name="automatic-streaming"></a></p><h3 id="自动流式传输" tabindex="-1"><a class="header-anchor" href="#自动流式传输" aria-hidden="true">#</a> 自动流式传输</h3><p>将文件流式传输到存储位置可显著减少内存使用量。如果你希望 Laravel 自动管理将给定文件流式传输到你的存储位置，你可以使用 <code>putFile</code> 或 <code>putFileAs</code> 方法。此方法接受一个 <code>Illuminate\\Http\\File</code> 或 <code>Illuminate\\Http\\UploadedFile</code> 实例，并自动将文件流式传输到你所需的位置：</p><pre><code>use Illuminate\\Http\\File;
use Illuminate\\Support\\Facades\\Storage;

// 为文件名自动生成一个唯一的 ID...
$path = Storage::putFile(&#39;photos&#39;, new File(&#39;/path/to/photo&#39;));

// 手动指定一个文件名...
$path = Storage::putFileAs(&#39;photos&#39;, new File(&#39;/path/to/photo&#39;), &#39;photo.jpg&#39;);
</code></pre><p>关于 putFile 方法有几点重要的注意事项。注意，我们只指定了目录名称而不是文件名。默认情况下，<code>putFile</code> 方法将生成一个唯一的 ID 作为文件名。文件的扩展名将通过检查文件的 MIME 类型来确定。文件的路径将由 <code>putFile</code> 方法返回，因此你可以将路径（包括生成的文件名）存储在数据库中。</p><p><code>putFile</code> 和 <code>putFileAs</code> 方法还接受一个参数来指定存储文件的「可见性」。如果你将文件存储在云盘（如 Amazon S3）上，并希望文件通过生成的 URL 公开访问，这一点特别有用：</p><pre><code>Storage::putFile(&#39;photos&#39;, new File(&#39;/path/to/photo&#39;), &#39;public&#39;);
</code></pre><p><a name="file-uploads"></a></p><h3 id="文件上传" tabindex="-1"><a class="header-anchor" href="#文件上传" aria-hidden="true">#</a> 文件上传</h3><p>在网络应用程序中，存储文件的最常见用例之一是存储用户上传的文件，如照片和文档。Laravel 使用上传文件实例上的 <code>store</code> 方法非常容易地存储上传的文件。使用你希望存储上传文件的路径调用 <code>store</code> 方法：</p><pre><code>&lt;?php

namespace App\\Http\\Controllers;

use App\\Http\\Controllers\\Controller;
use Illuminate\\Http\\Request;

class UserAvatarController extends Controller
{
    /**
     * 更新用户的头像。
     */
    public function update(Request $request): string
    {
        $path = $request-&gt;file(&#39;avatar&#39;)-&gt;store(&#39;avatars&#39;);

        return $path;
    }
}
</code></pre><p>关于这个例子有几点重要的注意事项。注意，我们只指定了目录名称而不是文件名。默认情况下，<code>store</code> 方法将生成一个唯一的 ID 作为文件名。文件的扩展名将通过检查文件的 MIME 类型来确定。文件的路径将由 <code>store</code> 方法返回，因此你可以将路径（包括生成的文件名）存储在数据库中。</p><p>你也可以在 <code>Storage</code> Facade 上调用 <code>putFile</code> 方法来执行与上面示例相同的文件存储操作：</p><pre><code>$path = Storage::putFile(&#39;avatars&#39;, $request-&gt;file(&#39;avatar&#39;));
</code></pre><p><a name="specifying-a-file-name"></a></p><h4 id="指定一个文件名" tabindex="-1"><a class="header-anchor" href="#指定一个文件名" aria-hidden="true">#</a> 指定一个文件名</h4><p>如果你不希望文件名被自动分配给你存储的文件，你可以使用 <code>storeAs</code> 方法，该方法接收路径、文件名和（可选的）磁盘作为其参数：</p><pre><code>$path = $request-&gt;file(&#39;avatar&#39;)-&gt;storeAs(
    &#39;avatars&#39;, $request-&gt;user()-&gt;id
);
</code></pre><p>你也可以在 <code>Storage</code> Facade 使用 <code>putFileAs</code> 方法，它将执行与上面示例相同的文件存储操作：</p><pre><code>$path = Storage::putFileAs(
    &#39;avatars&#39;, $request-&gt;file(&#39;avatar&#39;), $request-&gt;user()-&gt;id
);
</code></pre><blockquote><p><strong>警告</strong> 不可打印和无效的 Unicode 字符将自动从文件路径中删除。因此，你可能希望在将文件路径传递给 Laravel 的文件存储方法之前对其进行清理。文件路径使用 <code>League\\Flysystem\\WhitespacePathNormalizer::normalizePath</code> 方法进行规范化。</p></blockquote><p><a name="specifying-a-disk"></a></p><h4 id="指定一个磁盘" tabindex="-1"><a class="header-anchor" href="#指定一个磁盘" aria-hidden="true">#</a> 指定一个磁盘</h4><p>默认情况下，此上传文件的 <code>store</code> 方法将使用你的默认磁盘。如果你想指定另一个磁盘，将磁盘名称作为第二个参数传递给 <code>store</code> 方法：</p><pre><code>$path = $request-&gt;file(&#39;avatar&#39;)-&gt;store(
    &#39;avatars/&#39;.$request-&gt;user()-&gt;id, &#39;s3&#39;
);
</code></pre><p>如果你正在使用 <code>storeAs</code> 方法，你可以将磁盘名称作为第三个参数传递给该方法：</p><pre><code>$path = $request-&gt;file(&#39;avatar&#39;)-&gt;storeAs(
    &#39;avatars&#39;,
    $request-&gt;user()-&gt;id,
    &#39;s3&#39;
);
</code></pre><p><a name="other-uploaded-file-information"></a></p><h4 id="其他上传文件的信息" tabindex="-1"><a class="header-anchor" href="#其他上传文件的信息" aria-hidden="true">#</a> 其他上传文件的信息</h4><p>如果您想获取上传文件的原始名称和扩展名，可以使用 <code>getClientOriginalName</code> 和 <code>getClientOriginalExtension</code> 方法来实现：</p><pre><code>$file = $request-&gt;file(&#39;avatar&#39;);

$name = $file-&gt;getClientOriginalName();
$extension = $file-&gt;getClientOriginalExtension();
</code></pre><p>然而，请记住，<code>getClientOriginalName</code> 和 <code>getClientOriginalExtension</code> 方法被认为是不安全的，因为文件名和扩展名可能被恶意用户篡改。因此，你通常应该更喜欢使用 <code>hashName</code> 和 <code>extension</code> 方法来获取给定文件上传的名称和扩展名：</p><pre><code>$file = $request-&gt;file(&#39;avatar&#39;);

$name = $file-&gt;hashName(); // 生成一个唯一的、随机的名字...
$extension = $file-&gt;extension(); // 根据文件的 MIME 类型来确定文件的扩展名...
</code></pre><p><a name="file-visibility"></a></p><h3 id="文件可见性" tabindex="-1"><a class="header-anchor" href="#文件可见性" aria-hidden="true">#</a> 文件可见性</h3><p>在 Laravel 的 Flysystem 集成中，「visibility」 是跨多个平台的文件权限的抽象。文件可以被声明为 <code>public</code> 或 <code>private</code>。当一个文件被声明为 <code>public</code> 时，你表示该文件通常应该被其他人访问。例如，在使用 S3 驱动程序时，你可以检索 <code>public</code> 文件的 URL。</p><p>你可以通过 <code>put</code> 方法在写入文件时设置可见性：</p><pre><code>use Illuminate\\Support\\Facades\\Storage;

Storage::put(&#39;file.jpg&#39;, $contents, &#39;public&#39;);
</code></pre><p>如果文件已经被存储，可以通过 <code>getVisibility</code> 和 <code>setVisibility</code> 方法检索和设置其可见性：</p><pre><code>$visibility = Storage::getVisibility(&#39;file.jpg&#39;);

Storage::setVisibility(&#39;file.jpg&#39;, &#39;public&#39;);
</code></pre><p>在与上传文件交互时，你可以使用 <code>storePublicly</code> 和 <code>storePubliclyAs</code> 方法将上传文件存储为 <code>public</code> 可见性</p><pre><code>$path = $request-&gt;file(&#39;avatar&#39;)-&gt;storePublicly(&#39;avatars&#39;, &#39;s3&#39;);

$path = $request-&gt;file(&#39;avatar&#39;)-&gt;storePubliclyAs(
    &#39;avatars&#39;,
    $request-&gt;user()-&gt;id,
    &#39;s3&#39;
);
</code></pre><p><a name="local-files-and-visibility"></a></p><h4 id="本地文件和可见性" tabindex="-1"><a class="header-anchor" href="#本地文件和可见性" aria-hidden="true">#</a> 本地文件和可见性</h4><p>当使用 <code>local</code> 驱动时，<code>public</code><a href="#file-visibility">可见性</a>转换为目录的 <code>0755</code> 权限和文件的 <code>0644</code> 权限。你可以在你的应用程序的 <code>filesystems</code> 配置文件中修改权限映射：</p><pre><code>&#39;local&#39; =&gt; [
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
</code></pre><p><a name="deleting-files"></a></p><h2 id="删除文件" tabindex="-1"><a class="header-anchor" href="#删除文件" aria-hidden="true">#</a> 删除文件</h2><p><code>delete</code> 方法接收一个文件名或一个文件名数组来将其从磁盘中删除：</p><pre><code>use Illuminate\\Support\\Facades\\Storage;

Storage::delete(&#39;file.jpg&#39;);

Storage::delete([&#39;file.jpg&#39;, &#39;file2.jpg&#39;]);
</code></pre><p>如果需要，你可以指定应从哪个磁盘删除文件。</p><pre><code>use Illuminate\\Support\\Facades\\Storage;

Storage::disk(&#39;s3&#39;)-&gt;delete(&#39;path/file.jpg&#39;);
</code></pre><p><a name="directories"></a></p><h2 id="目录" tabindex="-1"><a class="header-anchor" href="#目录" aria-hidden="true">#</a> 目录</h2><p><a name="get-all-files-within-a-directory"></a></p><h4 id="获取目录下所有的文件" tabindex="-1"><a class="header-anchor" href="#获取目录下所有的文件" aria-hidden="true">#</a> 获取目录下所有的文件</h4><p><code>files</code> 将以数组的形式返回给定目录下所有的文件。如果你想要检索给定目录的所有文件及其子目录的所有文件，你可以使用 <code>allFiles</code> 方法：</p><pre><code>use Illuminate\\Support\\Facades\\Storage;

$files = Storage::files($directory);

$files = Storage::allFiles($directory);
</code></pre><p><a name="get-all-directories-within-a-directory"></a></p><h4 id="获取特定目录下的子目录" tabindex="-1"><a class="header-anchor" href="#获取特定目录下的子目录" aria-hidden="true">#</a> 获取特定目录下的子目录</h4><p><code>directories</code> 方法以数组的形式返回给定目录中的所有目录。此外，你还可以使用 <code>allDirectories</code> 方法递归地获取给定目录中的所有目录及其子目录中的目录：</p><pre><code>$directories = Storage::directories($directory);

$directories = Storage::allDirectories($directory);
</code></pre><p><a name="create-a-directory"></a></p><h4 id="创建目录" tabindex="-1"><a class="header-anchor" href="#创建目录" aria-hidden="true">#</a> 创建目录</h4><p><code>makeDirectory</code> 方法可递归的创建指定的目录：</p><pre><code>Storage::makeDirectory($directory);
</code></pre><p><a name="delete-a-directory"></a></p><h4 id="删除一个目录" tabindex="-1"><a class="header-anchor" href="#删除一个目录" aria-hidden="true">#</a> 删除一个目录</h4><p>最后，<code>deleteDirectory</code> 方法可用于删除一个目录及其下所有的文件：</p><pre><code>Storage::deleteDirectory($directory);
</code></pre><p><a name="testing"></a></p><h2 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h2><p><code>Storage</code> 门面类的 <code>fake</code> 方法可以轻松创建一个虚拟磁盘，与<code>Illuminate\\Http\\UploadedFile</code> 类配合使用，大大简化了文件的上传测试。例如：</p><pre><code>&lt;?php

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

        // 断言存储了一个或多个文件。
        Storage::disk(&#39;photos&#39;)-&gt;assertExists(&#39;photo1.jpg&#39;);
        Storage::disk(&#39;photos&#39;)-&gt;assertExists([&#39;photo1.jpg&#39;, &#39;photo2.jpg&#39;]);

        // 断言一个或多个文件未存储。
        Storage::disk(&#39;photos&#39;)-&gt;assertMissing(&#39;missing.jpg&#39;);
        Storage::disk(&#39;photos&#39;)-&gt;assertMissing([&#39;missing.jpg&#39;, &#39;non-existing.jpg&#39;]);

        // 断言给定目录为空。
        Storage::disk(&#39;photos&#39;)-&gt;assertDirectoryEmpty(&#39;/wallpapers&#39;);
    }
}
</code></pre><p>默认情况下，<code>fake</code> 方法将删除临时目录中的所有文件。如果你想保留这些文件，你可以使用 &quot;persistentFake&quot; 方法代替。有关测试文件上传的更多信息，您可以查阅 <a href="./http-tests#testing-file-uploads">HTTP 测试文档的文件上传</a>.</p>`,118),P=a("strong",null,"警告",-1),T=a("code",null,"image",-1),$={href:"https://www.php.net/manual/en/book.image.php",target:"_blank",rel:"noopener noreferrer"},q=t(`<p><a name="custom-filesystems"></a></p><h2 id="自定义文件系统" tabindex="-1"><a class="header-anchor" href="#自定义文件系统" aria-hidden="true">#</a> 自定义文件系统</h2><p>Laravel 内置的文件系统提供了一些开箱即用的驱动；当然，它不仅仅是这些，它还提供了与其他存储系统的适配器。通过这些适配器，你可以在你的 Laravel 应用中创建自定义驱动。</p><p>要安装自定义文件系统，你可能需要一个文件系统适配器。让我们将社区维护的 Dropbox 适配器添加到项目中：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">composer</span> require spatie/flysystem-dropbox
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>接下来，你可以在 <a href="./providers">服务提供者</a> 中注册一个带有 <code>boot</code> 方法的驱动。在提供者的 <code>boot</code> 方法中，你可以使用 <code>Storage</code> 门面的 <code>extend</code> 方法来定义一个自定义驱动：</p><pre><code>&lt;?php

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
     * 注册任意应用程序服务。
     */
    public function register(): void
    {
        // ...
    }

    /**
     * 引导任何应用程序服务。
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
</code></pre><p><code>extend</code> 方法的第一个参数是驱动程序的名称，第二个参数是接收 <code>$app</code> 和 <code>$config</code> 变量的闭包。闭包必须返回的实例 <code>League\\Flysystem\\Filesystem</code>。<code>$config</code> 变量包含 <code>config/filesystems.php</code> 为指定磁盘定义的值。</p><p>一旦创建并注册了扩展的服务提供商，就可以 <code>dropbox</code> 在 <code>config/filesystems.php</code> 配置文件中使用该驱动程序。</p>`,9);function R(A,U){const n=r("ExternalLinkIcon");return i(),d("div",null,[c,a("p",null,[e("Laravel 提供了一个强大的文件系统抽象，这要感谢 Frank de Jonge 的 "),a("a",l,[e("Flysystem"),s(n)]),e(" PHP 包。Laravel 的 Flysystem 集成提供了 简单的驱动来处理本地文件系统、SFTP 和 Amazon S3。更棒的是，在你的本地开发机器和生产服务器之间切换这些存储选项是非常简单的，因为每个系统的 API 都是一样的。")]),u,a("p",null,[e("要使这些文件可从 web 访问，应创建从 "),g,e(" 到 "),h,e("的符号链接。这种方式能把可公开访问文件都保留在同一个目录下，以便在使用零停机时间部署系统如 "),a("a",m,[e("Envoyer"),s(n)]),e(" 的时候，就可以轻松地在不同的部署之间共享这些文件。")]),f,a("p",null,[e("默认情况下，你的应用程序的 "),v,e(" 配置文件包含一个 "),b,e(" 磁盘的磁盘配置。除了使用此磁盘与 Amazon S3 交互外，你还可以使用它与任何兼容 S3 的文件存储服务（如 "),a("a",S,[e("MinIO"),s(n)]),e(" 或 "),a("a",y,[e("DigitalOcean Spaces"),s(n)]),e("）进行交互。")]),k,a("p",null,[e("如果你需要指定额外的 "),a("a",F,[e("S3 请求参数"),s(n)]),e("，你可以将请求参数数组作为第三个参数传递给"),x,e(" 方法。")]),_,a("blockquote",null,[a("p",null,[P,T,e(" 方法需要 "),a("a",$,[e("GD 扩展"),s(n)]),e(" .")])]),q])}const j=o(p,[["render",R],["__file","filesystem.html.vue"]]);export{j as default};
