import{_ as o}from"./p1lAW4NpQi-95385b41.js";import{_ as i}from"./SpmXMujJ3D-a450e617.js";import{_ as c}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as d,c as p,a as s,b as n,d as e,e as t}from"./app-c17653d8.js";const r="/dcat/assets/ISATQMYO0i-d72e195f.png",u="/dcat/assets/GBkt9jYnW0-da16ce25.png",v="/dcat/assets/LMpJ0aqPEv-fa163354.png",m="/dcat/assets/sYc7E40tXr-fcb71c40.gif",g="/dcat/assets/Oam6CYOobf-93a3acb5.jpeg",k="/dcat/assets/bBd7mGA1Pj-8408f54c.jpg",b="/dcat/assets/gC6pzUWN73-b19cb212.jpg",h={},f=t(`<h1 id="themes-and-colors" tabindex="-1"><a class="header-anchor" href="#themes-and-colors" aria-hidden="true">#</a> Themes and colors</h1><h3 id="switching-themes" tabindex="-1"><a class="header-anchor" href="#switching-themes" aria-hidden="true">#</a> Switching Themes</h3><p><code>Dcat Admin</code> supports theme switching function. There are four built-in theme colors: <code>indigo</code>, <code>blue</code>, <code>blue-light</code>, <code>green</code>, which can be switched by configuring the parameter <code>admin.layout.color</code>.</p><p>Open configuration file <code>config/admin.php</code></p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>     <span class="token string single-quoted-string">&#39;layout&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
         <span class="token string single-quoted-string">&#39;color&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;blue&#39;</span><span class="token punctuation">,</span>
         
         <span class="token operator">...</span>
     <span class="token punctuation">]</span><span class="token punctuation">,</span>
     
     <span class="token operator">...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Preview of some theme colors</p><p><img src="`+o+'" alt="" loading="lazy"><img src="'+r+'" alt="" loading="lazy"><img src="'+u+'" alt="" loading="lazy"></p><h3 id="custom-theme-coloring" tabindex="-1"><a class="header-anchor" href="#custom-theme-coloring" aria-hidden="true">#</a> Custom theme coloring</h3><blockquote><p>{tip} Note that if you customize your theme, you&#39;ll need to recompile your custom theme every time you update it with a new version!!!!</p></blockquote>',9),y={href:"http://nodejs.cn/",target:"_blank",rel:"noopener noreferrer"},q={href:"http://nodejs.cn/",target:"_blank",rel:"noopener noreferrer"},x=t(`<p>After installing <code>NodeJs</code>, you can run <code>npm -v</code> on the command line to test if success is installed.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token parameter variable">-v</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>If the version number is returned normally, it means that it was success successfully installed. It is recommended to use Taobao mirror.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> config <span class="token builtin class-name">set</span> registry https://registry.npm.taobao.org
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Then run the following command to compile the custom theme file, just enter the name of the theme and the theme color code (<code>hexadecimal</code>). Here we will generate an <code>orange</code> theme as an example.</p><blockquote><p>{tip} This command takes a long time to run the first time, so please be patient. If it fails, try writing permissions to the <code>vendor</code> directory.</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan admin:minify orange <span class="token parameter variable">--color</span> fbbd08 <span class="token parameter variable">--publish</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The above command is meant to generate an <code>orange</code> theme with the color code <code>#fbbd08</code>, and then automatically publish the static resource after generation. If you compile success, the command line will output the following</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">..</span>.

 DONE  Compiled successfully <span class="token keyword">in</span> 48001ms8:24:28 PM


                                              Asset      Size  Chunks
               Chunk Names
               /resources/dist/adminlte/adminlte.js  <span class="token number">29.7</span> KiB       <span class="token number">0</span>  <span class="token punctuation">[</span>emitted<span class="token punctuation">]</span>
               /resources/dist/adminlte/adminlte
           /resources/dist/adminlte/adminlte.js.map  <span class="token number">87.8</span> KiB       <span class="token number">0</span>  <span class="token punctuation">[</span>emitted<span class="token punctuation">]</span>
 <span class="token punctuation">[</span>dev<span class="token punctuation">]</span>         /resources/dist/adminlte/adminlte
               /resources/dist/dcat/extra/action.js   <span class="token number">3.7</span> KiB       <span class="token number">1</span>  <span class="token punctuation">[</span>emitted<span class="token punctuation">]</span>
               /resources/dist/dcat/extra/action
           /resources/dist/dcat/extra/action.js.map  <span class="token number">12.9</span> KiB       <span class="token number">1</span>  <span class="token punctuation">[</span>emitted<span class="token punctuation">]</span>
 <span class="token punctuation">[</span>dev<span class="token punctuation">]</span>         /resources/dist/dcat/extra/action
          /resources/dist/dcat/extra/grid-extend.js  <span class="token number">4.87</span> KiB       <span class="token number">2</span>  <span class="token punctuation">[</span>emitted<span class="token punctuation">]</span>
               /resources/dist/dcat/extra/grid-extend
      /resources/dist/dcat/extra/grid-extend.js.map  <span class="token number">21.7</span> KiB       <span class="token number">2</span>  <span class="token punctuation">[</span>emitted<span class="token punctuation">]</span>
 <span class="token punctuation">[</span>dev<span class="token punctuation">]</span>         /resources/dist/dcat/extra/grid-extend
    /resources/dist/dcat/extra/resource-selector.js   <span class="token number">5.8</span> KiB       <span class="token number">3</span>  <span class="token punctuation">[</span>emitted<span class="token punctuation">]</span>
               /resources/dist/dcat/extra/resource-selector
/resources/dist/dcat/extra/resource-selector.js.map    <span class="token number">24</span> KiB       <span class="token number">3</span>  <span class="token punctuation">[</span>emitted<span class="token punctuation">]</span>
 <span class="token punctuation">[</span>dev<span class="token punctuation">]</span>         /resources/dist/dcat/extra/resource-selector
               /resources/dist/dcat/extra/upload.js  <span class="token number">17.2</span> KiB       <span class="token number">4</span>  <span class="token punctuation">[</span>emitted<span class="token punctuation">]</span>
               /resources/dist/dcat/extra/upload
           /resources/dist/dcat/extra/upload.js.map  <span class="token number">66.8</span> KiB       <span class="token number">4</span>  <span class="token punctuation">[</span>emitted<span class="token punctuation">]</span>
 <span class="token punctuation">[</span>dev<span class="token punctuation">]</span>         /resources/dist/dcat/extra/upload
                /resources/dist/dcat/js/dcat-app.js  <span class="token number">88.8</span> KiB       <span class="token number">5</span>  <span class="token punctuation">[</span>emitted<span class="token punctuation">]</span>
               /resources/dist/dcat/js/dcat-app
            /resources/dist/dcat/js/dcat-app.js.map   <span class="token number">164</span> KiB       <span class="token number">5</span>  <span class="token punctuation">[</span>emitted<span class="token punctuation">]</span>
 <span class="token punctuation">[</span>dev<span class="token punctuation">]</span>         /resources/dist/dcat/js/dcat-app
        resources/dist/adminlte/adminlte-orange.css   <span class="token number">656</span> KiB       <span class="token number">0</span>  <span class="token punctuation">[</span>emitted<span class="token punctuation">]</span>
        <span class="token punctuation">[</span>big<span class="token punctuation">]</span>  /resources/dist/adminlte/adminlte
        resources/dist/dcat/css/dcat-app-orange.css    <span class="token number">43</span> KiB       <span class="token number">0</span>  <span class="token punctuation">[</span>emitted<span class="token punctuation">]</span>
               /resources/dist/adminlte/adminlte
      resources/dist/dcat/extra/markdown-orange.css  <span class="token number">1.72</span> KiB       <span class="token number">0</span>  <span class="token punctuation">[</span>emitted<span class="token punctuation">]</span>
               /resources/dist/adminlte/adminlte
          resources/dist/dcat/extra/step-orange.css  <span class="token number">8.56</span> KiB       <span class="token number">0</span>  <span class="token punctuation">[</span>emitted<span class="token punctuation">]</span>
               /resources/dist/adminlte/adminlte
        resources/dist/dcat/extra/upload-orange.css  <span class="token number">6.42</span> KiB       <span class="token number">0</span>  <span class="token punctuation">[</span>emitted<span class="token punctuation">]</span>
               /resources/dist/adminlte/adminlte
               

Copied Directory <span class="token punctuation">[</span><span class="token punctuation">\\</span>dcat-admin<span class="token punctuation">\\</span>resources<span class="token punctuation">\\</span>dist<span class="token punctuation">]</span> To <span class="token punctuation">[</span><span class="token punctuation">\\</span>public<span class="token punctuation">\\</span>vendors<span class="token punctuation">\\</span>dcat-admin<span class="token punctuation">]</span>
Publishing complete.
Compiled views cleared<span class="token operator">!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>After the theme file compiles success, the following code needs to be added to <code>app/Admin/bootstrap.php</code></p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token class-name class-name-fully-qualified static-context">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Color</span><span class="token operator">::</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;orange&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;primary&#39;</span>        <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;#fbbd08&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;primary-darker&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;#fbbd08&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;link&#39;</span>           <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;#fbbd08&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Finally, set the value of your configuration parameter <code>admin.layout.color</code> to <code>orange</code>.</p><h3 id="dark-mode" tabindex="-1"><a class="header-anchor" href="#dark-mode" aria-hidden="true">#</a> Dark Mode</h3><p><img src="`+v+`" alt="" loading="lazy"></p><h4 id="enable-toggle-button" tabindex="-1"><a class="header-anchor" href="#enable-toggle-button" aria-hidden="true">#</a> Enable toggle button</h4><p>The dark mode switch can be enabled or disabled by configuring the parameter <code>admin.layout.dark_mode_switch</code>. When enabled, a switch button will be added in the top navigation bar of the page, click on it to switch between dark and bright mode, and the state will be saved in <code>localStorage</code>.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>     <span class="token string single-quoted-string">&#39;layout&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
         <span class="token string single-quoted-string">&#39;dark_mode_switch&#39;</span> <span class="token operator">=&gt;</span> <span class="token constant boolean">true</span><span class="token punctuation">,</span>
         
         <span class="token operator">...</span>
     <span class="token punctuation">]</span><span class="token punctuation">,</span>
     
     <span class="token operator">...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The result is as follows <img src="`+m+`" alt="" loading="lazy">)</p><h4 id="dark-mode-by-default" tabindex="-1"><a class="header-anchor" href="#dark-mode-by-default" aria-hidden="true">#</a> Dark Mode by Default</h4><p>Open the configuration file <code>config/admin.php</code>, write</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>     <span class="token string single-quoted-string">&#39;layout&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
         <span class="token string single-quoted-string">&#39;body_class&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;dark-mode&#39;</span><span class="token punctuation">,</span>
         
         <span class="token operator">...</span>
     <span class="token punctuation">]</span><span class="token punctuation">,</span>
     
     <span class="token operator">...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="menu-style" tabindex="-1"><a class="header-anchor" href="#menu-style" aria-hidden="true">#</a> Menu style</h3><p>You can configure the menu style by configuring the parameter <code>admin.layout.sidebar_style</code> (if this parameter does not exist in the configuration file, you can add it manually), which supports three values <code>light</code>, <code>primary</code>, <code>dark</code>, and the default is <code>light</code>.</p><blockquote><p>{tip} The <code>sidebar_dark</code> parameter is about to be deprecated! The <code>sidebar_style</code> parameter overrides the <code>sidebar_dark</code> parameter and <code>sidebar_dark</code> will only take effect if <code>sidebar_style</code> does not exist!!!</p></blockquote><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>     <span class="token string single-quoted-string">&#39;layout&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
     	 <span class="token comment">// Supports light, primary, dark</span>
         <span class="token string single-quoted-string">&#39;sidebar_style&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;light&#39;</span><span class="token punctuation">,</span>
         
         <span class="token operator">...</span>
     <span class="token punctuation">]</span><span class="token punctuation">,</span>
     
     <span class="token operator">...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>light</code> result</p><p><img src="`+g+'" alt="" loading="lazy">)</p><p><code>primary</code> result</p><p><img src="'+k+'" alt="" loading="lazy">)</p><p><img src="'+b+'" alt="" loading="lazy">)</p><h3 id="menu-layout" tabindex="-1"><a class="header-anchor" href="#menu-layout" aria-hidden="true">#</a> Menu layout</h3><h4 id="horizontal-top" tabindex="-1"><a class="header-anchor" href="#horizontal-top" aria-hidden="true">#</a> Horizontal top</h4><p>Set the value of the configuration parameter <code>admin.layout.horizontal_menu</code> to <code>true</code> to enable this function, with the following effect</p><p><img src="'+i+`" alt="" loading="lazy"></p><h4 id="sidebar-separate" tabindex="-1"><a class="header-anchor" href="#sidebar-separate" aria-hidden="true">#</a> sidebar-separate</h4><p>Add <code>sidebar-separate</code> to the <code>admin.layout.body_class</code> parameter</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>     <span class="token string single-quoted-string">&#39;layout&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
         <span class="token string single-quoted-string">&#39;body_class&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;sidebar-separate&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
         
         <span class="token operator">...</span>
     <span class="token punctuation">]</span><span class="token punctuation">,</span>
     
     <span class="token operator">...</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>result</p><h3 id="php-color-management" tabindex="-1"><a class="header-anchor" href="#php-color-management" aria-hidden="true">#</a> PHP Color Management</h3><p><code>Dcat Admin</code> has a built-in color management module, which can be easily used with the theme switching function. Make the page color fit the theme color!</p><p>Commonly used colors can be easily obtained through the <code>Dcat\\Admin\\Admin::color()</code> service (see [Color Tables and Styles](theme.md#Color Tables and Styles)).</p><h4 id="getting-the-built-in-colors" tabindex="-1"><a class="header-anchor" href="#getting-the-built-in-colors" aria-hidden="true">#</a> Getting the built-in colors</h4><p>You can get the color code by using the <code>Color::get</code> or magic method. When the color obtained by <code>Color::get</code> does not exist, the original value of the parameter is returned.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Admin</span><span class="token punctuation">;</span>

<span class="token comment">// get method to get the color</span>
<span class="token keyword">echo</span> <span class="token class-name static-context">Admin</span><span class="token operator">::</span><span class="token function">color</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;primary&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// output #5c6bc6</span>


<span class="token comment">// Getting Colors by Magic Method</span>
<span class="token keyword">echo</span> <span class="token class-name static-context">Admin</span><span class="token operator">::</span><span class="token function">color</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">primary</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// output #5c6bc6</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="color-fading" tabindex="-1"><a class="header-anchor" href="#color-fading" aria-hidden="true">#</a> Color fading</h4><p>The <code>Color::lighten</code> method or the magic method can be used to get the hex color code of the faded color.</p><p>The <code>Color::lighten</code> method takes two arguments.</p><ul><li><code>$name</code> <code>string</code> Color Alias</li><li><code>$amt</code> <code>int</code> color deviation value, the larger the value, the more <code>light</code> color</li></ul><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">echo</span> <span class="token class-name static-context">Admin</span><span class="token operator">::</span><span class="token function">color</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">lighten</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;primary&#39;</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// output #6675d0</span>

<span class="token comment">// You can also use it like this, but be sure to pass negative numbers for the arguments.</span>
<span class="token keyword">echo</span> <span class="token class-name static-context">Admin</span><span class="token operator">::</span><span class="token function">color</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">primary</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// output #6675d0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Direct color code transmission is also supported.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">echo</span> <span class="token class-name static-context">Admin</span><span class="token operator">::</span><span class="token function">color</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">lighten</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;#5c6bc6&#39;</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// output #6675d0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="color-darkening" tabindex="-1"><a class="header-anchor" href="#color-darkening" aria-hidden="true">#</a> color darkening</h4><p>The <code>Color::darken</code> method or the magic method can be used to get the hexadecimal color code of the darkened color.</p><p>The <code>Color::darken</code> method takes two parameters:</p><ul><li><code>$name</code> <code>string</code> Color Alias</li><li><code>$amt</code> <code>int</code> color deviation value, the higher the value the darker the color</li></ul><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">echo</span> <span class="token class-name static-context">Admin</span><span class="token operator">::</span><span class="token function">color</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">darken</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;primary&#39;</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// output #5261bc</span>

<span class="token comment">// It can also be used like this</span>
<span class="token keyword">echo</span> <span class="token class-name static-context">Admin</span><span class="token operator">::</span><span class="token function">color</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">primary</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// output #5261bc</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Direct color code transmission is also supported</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">echo</span> <span class="token class-name static-context">Admin</span><span class="token operator">::</span><span class="token function">color</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">darken</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;#5c6bc6&#39;</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// output #5261bc</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="color-transparency" tabindex="-1"><a class="header-anchor" href="#color-transparency" aria-hidden="true">#</a> Color Transparency</h4><p>The <code>Color::alpha</code> method allows you to set the transparency of a color.</p><p>The <code>Color::alpha</code> method takes two arguments:</p><ul><li><code>$name</code> <code>string</code> Color Alias</li><li><code>$alpha</code> <code>float</code> Transparency, value between <code>0 ~ 1</code>, the smaller the value, the higher the transparency</li></ul><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">echo</span> <span class="token class-name static-context">Admin</span><span class="token operator">::</span><span class="token function">color</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">alpha</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;primary&#39;</span><span class="token punctuation">,</span> <span class="token number">0.1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// output rgba(92, 107, 198, 0.1)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Direct color code transmission is also supported</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">echo</span> <span class="token class-name static-context">Admin</span><span class="token operator">::</span><span class="token function">color</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">alpha</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;5c6bc6&#39;</span><span class="token punctuation">,</span> <span class="token number">0.1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// output rgba(92, 107, 198, 0.1)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="get-all-built-in-colors" tabindex="-1"><a class="header-anchor" href="#get-all-built-in-colors" aria-hidden="true">#</a> Get all built-in colors</h4><p>The <code>Color::all</code> method gets the hexadecimal code of all built-in colors.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$allColors</span> <span class="token operator">=</span> <span class="token class-name static-context">Admin</span><span class="token operator">::</span><span class="token function">color</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="js-color-management" tabindex="-1"><a class="header-anchor" href="#js-color-management" aria-hidden="true">#</a> JS Color Management</h3><p>The <code>JS</code> module also includes a color management function, and the <code>Dcat.color</code> object allows you to manage colors just like in PHP code.</p><h4 id="to-get-the-built-in-colors" tabindex="-1"><a class="header-anchor" href="#to-get-the-built-in-colors" aria-hidden="true">#</a> to get the built-in colors</h4><p>There are three ways to get the color code in the <code>JS</code> code</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token class-name static-context">Admin</span><span class="token operator">::</span><span class="token function">script</span><span class="token punctuation">(</span>
<span class="token operator">&lt;&lt;</span><span class="token operator">&lt;</span><span class="token constant">JS</span>
	<span class="token comment">// Mode 1</span>
	<span class="token keyword">var</span> primary <span class="token operator">=</span> Dcat<span class="token operator">.</span>color<span class="token operator">.</span>primary<span class="token punctuation">;</span>
	
	<span class="token comment">// Mode 2</span>
	<span class="token keyword">var</span> primary <span class="token operator">=</span> Dcat<span class="token operator">.</span>color<span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;primary&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	
	<span class="token comment">// Mode 3</span>
	<span class="token keyword">var</span> primary <span class="token operator">=</span> Dcat<span class="token operator">.</span>color<span class="token operator">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;primary&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	
	console<span class="token operator">.</span><span class="token function">log</span><span class="token punctuation">(</span>primary<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// output #5c6bc6</span>
<span class="token constant">JS</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="color-fading-1" tabindex="-1"><a class="header-anchor" href="#color-fading-1" aria-hidden="true">#</a> Color fading</h4><p>The <code>Dcat.color.lighten</code> method or magic method can be used to get the hex color code of the faded color.</p><p>The <code>color.lighten</code> method takes two arguments:</p><ul><li><code>name</code> <code>string</code> Color Alias</li><li><code>amt</code> <code>int</code> color deviation value, the larger the value, the more <code>light</code> color</li></ul><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token class-name static-context">Admin</span><span class="token operator">::</span><span class="token function">script</span><span class="token punctuation">(</span>
    <span class="token operator">&lt;&lt;</span><span class="token operator">&lt;</span><span class="token constant">JS</span>
    <span class="token keyword">var</span> primary <span class="token operator">=</span> Dcat<span class="token operator">.</span>color<span class="token operator">.</span><span class="token function">lighten</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;primary&#39;</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
    
    console<span class="token operator">.</span><span class="token function">log</span><span class="token punctuation">(</span>primary<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// output #6675d0</span>
<span class="token constant">JS</span>    
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Direct color code transmission is also supported</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> primary <span class="token operator">=</span> Dcat<span class="token punctuation">.</span>color<span class="token punctuation">.</span><span class="token function">lighten</span><span class="token punctuation">(</span><span class="token string">&#39;5c6bc6&#39;</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>primary<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// output #6675d0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="color-darkening-1" tabindex="-1"><a class="header-anchor" href="#color-darkening-1" aria-hidden="true">#</a> color darkening</h4><p>The <code>Dcat.color.darken</code> method or the magic method can be used to get the hex color code for the darkened color.</p><p>The <code>color.darken</code> method takes two arguments:</p><ul><li><code>name</code> <code>string</code> Color Alias</li><li><code>amt</code> <code>int</code> color deviation value, the larger the value, the darker the \`darker&#39;</li></ul><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token class-name static-context">Admin</span><span class="token operator">::</span><span class="token function">script</span><span class="token punctuation">(</span>
    <span class="token operator">&lt;&lt;</span><span class="token operator">&lt;</span><span class="token constant">JS</span>
    <span class="token keyword">var</span> primary <span class="token operator">=</span> Dcat<span class="token operator">.</span>color<span class="token operator">.</span><span class="token function">darken</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;primary&#39;</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
    
    console<span class="token operator">.</span><span class="token function">log</span><span class="token punctuation">(</span>primary<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// output #5261bc</span>
<span class="token constant">JS</span>    
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Direct color code transmission is also supported</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">var</span> primary <span class="token operator">=</span> Dcat<span class="token operator">.</span>color<span class="token operator">.</span><span class="token function">darken</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;5c6bc6&#39;</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>

console<span class="token operator">.</span><span class="token function">log</span><span class="token punctuation">(</span>primary<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// output #5261bc</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="color-transparency-1" tabindex="-1"><a class="header-anchor" href="#color-transparency-1" aria-hidden="true">#</a> Color Transparency</h4><p>The <code>Dcat.color.alpha</code> method allows you to set the transparency of the color.</p><p>The <code>color.alpha</code> method takes two arguments:</p><ul><li><code>$name</code> <code>string</code> Color Alias</li><li><code>$alpha</code> <code>float</code> Transparency, value between <code>0 ~ 1</code>, the smaller the value, the higher the transparency</li></ul><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token class-name static-context">Admin</span><span class="token operator">::</span><span class="token function">script</span><span class="token punctuation">(</span>
    <span class="token operator">&lt;&lt;</span><span class="token operator">&lt;</span><span class="token constant">JS</span>
    <span class="token keyword">var</span> primary <span class="token operator">=</span> Dcat<span class="token operator">.</span>color<span class="token operator">.</span><span class="token function">alpha</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;primary&#39;</span><span class="token punctuation">,</span> <span class="token number">0.1</span><span class="token punctuation">)</span>
    
    console<span class="token operator">.</span><span class="token function">log</span><span class="token punctuation">(</span>primary<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// output rgba(92, 107, 198, 0.1)</span>
<span class="token constant">JS</span>    
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Direct color code transmission is also supported</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">var</span> primary <span class="token operator">=</span> Dcat<span class="token operator">.</span>color<span class="token operator">.</span><span class="token function">alpha</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;#5c6bc6&#39;</span><span class="token punctuation">,</span> <span class="token number">0.1</span><span class="token punctuation">)</span>
    
console<span class="token operator">.</span><span class="token function">log</span><span class="token punctuation">(</span>primary<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// output rgba(92, 107, 198, 0.1)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="gets-all-the-built-in-colors" tabindex="-1"><a class="header-anchor" href="#gets-all-the-built-in-colors" aria-hidden="true">#</a> gets all the built-in colors</h4><p>The <code>Dcat.color.all</code> method, which returns a key-value pair object, retrieves the hexadecimal code for all built-in colors.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> allColors <span class="token operator">=</span> Dcat<span class="token punctuation">.</span>color<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="color-charts-and-styles" tabindex="-1"><a class="header-anchor" href="#color-charts-and-styles" aria-hidden="true">#</a> Color charts and styles</h3>`,98),w=s("code",null,"Dcat Admin",-1),_=s("code",null,"bootstrap4",-1),C={href:"https://getbootstrap.net/docs/utilities/colors/",target:"_blank",rel:"noopener noreferrer"},T=t(`<p>The following is the <code>Dcat Admin</code> common color style sheet, where <code>.bg-*</code> is the style of background color, <code>.text-</code> is the style of text color.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;style&gt;
	.color-sections {

	}
	.color-section {
		width: 600px;
		height: 60px;
		line-height: 60px;
		text-align: center;
		vertical-align: middle;
		/*display: inline-block;*/
		margin-bottom: 5px;
	}

	.white {
		color: #fff;
	}
&lt;/style&gt;
 &lt;section class=&quot;container color-sections&quot; style=&quot;min-height: 500px&quot;&gt;
        &lt;div class=&quot;color-section white&quot; style=&quot;background: #5c6bc6&quot;&gt;
            &lt;code&gt;.text-primary&lt;/code&gt; &lt;code&gt;.bg-primary&lt;/code&gt; primary/indigo
        &lt;/div&gt;
        &lt;div class=&quot;color-section white&quot; style=&quot;background: #495abf&quot;&gt;
            &lt;code&gt;.text-primary-darker&lt;/code&gt; indigo-darker
        &lt;/div&gt;

        &lt;div class=&quot;color-section white&quot; style=&quot;background: #5b69bc&quot;&gt;
            purple
        &lt;/div&gt;

        &lt;div class=&quot;color-section white&quot; style=&quot;background: #7367f0&quot;&gt;
            cyan
        &lt;/div&gt;
        &lt;div class=&quot;color-section white&quot; style=&quot;background: #6355ee&quot;&gt;
            cyan-darker
        &lt;/div&gt;

        &lt;div class=&quot;color-section white&quot; style=&quot;background: #3085d6&quot;&gt;
            &lt;code&gt;.text-info&lt;/code&gt; &lt;code&gt;.bg-info&lt;/code&gt; blue/info
        &lt;/div&gt;
        &lt;div class=&quot;color-section white&quot; style=&quot;background: #236bb0&quot;&gt;
            &lt;code&gt;.text-blue-darker&lt;/code&gt; blue-darker
        &lt;/div&gt;
        &lt;div class=&quot;color-section white&quot; style=&quot;background: #007ee5&quot;&gt;
            &lt;code&gt;.text-blue-1&lt;/code&gt; &lt;code&gt;.bg-blue-1&lt;/code&gt; blue1
        &lt;/div&gt;
        &lt;div class=&quot;color-section white&quot; style=&quot;background: #4199de&quot;&gt;
            &lt;code&gt;.text-blue-2&lt;/code&gt; &lt;code&gt;.bg-blue-2&lt;/code&gt; blue2
        &lt;/div&gt;

        &lt;div class=&quot;color-section white&quot; style=&quot;background: #59a9f8&quot;&gt;
            &lt;code&gt;.text-custom&lt;/code&gt; &lt;code&gt;.bg-custom&lt;/code&gt; custom
        &lt;/div&gt;

        &lt;div class=&quot;color-section white&quot; style=&quot;background: #21b978&quot;&gt;
            &lt;code&gt;.text-success&lt;/code&gt; &lt;code&gt;.bg-success&lt;/code&gt; green/success
        &lt;/div&gt;
        &lt;div class=&quot;color-section white&quot; style=&quot;background: #ea5455&quot;&gt;
            &lt;code&gt;.text-danger&lt;/code&gt; &lt;code&gt;.bg-danger&lt;/code&gt; danger/red
        &lt;/div&gt;
        &lt;div class=&quot;color-section white&quot; style=&quot;background: #bd4147&quot;&gt;
            &lt;code&gt;.text-danger-darker&lt;/code&gt; red-darker
        &lt;/div&gt;


        &lt;div class=&quot;color-section white&quot; style=&quot;background: #dda451&quot;&gt;
            &lt;code&gt;.text-warning&lt;/code&gt; &lt;code&gt;.bg-warning&lt;/code&gt; warning/orange
        &lt;/div&gt;


        &lt;div class=&quot;color-section white&quot; style=&quot;background: #ffcc80&quot;&gt;
            &lt;code&gt;.text-orange-1&lt;/code&gt; &lt;code&gt;.bg-orange-1&lt;/code&gt; orange1
        &lt;/div&gt;
        &lt;div class=&quot;color-section white&quot; style=&quot;background: #F99037&quot;&gt;
            &lt;code&gt;.text-orange-2&lt;/code&gt; &lt;code&gt;.bg-orange-2&lt;/code&gt; orange2
        &lt;/div&gt;
        &lt;div class=&quot;color-section white&quot; style=&quot;background: #edc30e&quot;&gt;
            &lt;code&gt;.text-yellow&lt;/code&gt; &lt;code&gt;.bg-yellow&lt;/code&gt; yellow
        &lt;/div&gt;

        &lt;div class=&quot;color-section white&quot; style=&quot;background: #ff8acc&quot;&gt;
            &lt;code&gt;.text-pink&lt;/code&gt; &lt;code&gt;.bg-pink&lt;/code&gt; pink
        &lt;/div&gt;


        &lt;div class=&quot;color-section white&quot; style=&quot;background: #01847f&quot;&gt;
            &lt;code&gt;.text-tear&lt;/code&gt; &lt;code&gt;.bg-tear&lt;/code&gt; tear
        &lt;/div&gt;
        &lt;div class=&quot;color-section white&quot; style=&quot;background: #00b5b5&quot;&gt;
            &lt;code&gt;.text-tear-1&lt;/code&gt; &lt;code&gt;.bg-tear-1&lt;/code&gt; tear1
        &lt;/div&gt;


        &lt;div class=&quot;color-section white&quot; style=&quot;background: #22292f&quot;&gt;
            dark
        &lt;/div&gt;

        &lt;div class=&quot;color-section white&quot; style=&quot;background: #b9c3cd&quot;&gt;
            &lt;code&gt;.text-gray&lt;/code&gt; &lt;code&gt;.bg-gray&lt;/code&gt; gray
        &lt;/div&gt;
        &lt;div class=&quot;color-section white&quot; style=&quot;background: #f7f7f9;color: #666&quot;&gt;
            &lt;code&gt;.text-light&lt;/code&gt; &lt;code&gt;.bg-light&lt;/code&gt; light
        &lt;/div&gt;
        &lt;div class=&quot;color-section white&quot; style=&quot;background: #f6fbff;color: #666&quot;&gt;
            &lt;code&gt;.text-dark20&lt;/code&gt; &lt;code&gt;.bg-dark20&lt;/code&gt; dark20
        &lt;/div&gt;
        &lt;div class=&quot;color-section white&quot; style=&quot;background: #f4f7fa;color: #666&quot;&gt;
            &lt;code&gt;.text-dark30&lt;/code&gt; &lt;code&gt;.bg-dark30&lt;/code&gt; dark30
        &lt;/div&gt;
        &lt;div class=&quot;color-section white&quot; style=&quot;background: #e7eef7;color: #666&quot;&gt;
            &lt;code&gt;.text-dark35&lt;/code&gt; &lt;code&gt;.bg-dark35&lt;/code&gt; dark35
        &lt;/div&gt;

        &lt;div class=&quot;color-section white&quot; style=&quot;background: #ebf0f3;color: #666&quot;&gt;
            &lt;code&gt;.text-dark40&lt;/code&gt; &lt;code&gt;.bg-dark40&lt;/code&gt; dark40
        &lt;/div&gt;
        &lt;div class=&quot;color-section white&quot; style=&quot;background: #d3dde5;color: #666&quot;&gt;
            &lt;code&gt;.text-dark50&lt;/code&gt; &lt;code&gt;.bg-dark50&lt;/code&gt; dark50
        &lt;/div&gt;
        &lt;div class=&quot;color-section white&quot; style=&quot;background: #bacad6&quot;&gt;
            &lt;code&gt;.text-dark60&lt;/code&gt; &lt;code&gt;.bg-dark60&lt;/code&gt; dark60
        &lt;/div&gt;
        &lt;div class=&quot;color-section white&quot; style=&quot;background: #b3b9bf&quot;&gt;
            &lt;code&gt;.text-dark70&lt;/code&gt; &lt;code&gt;.bg-dark70&lt;/code&gt; dark70
        &lt;/div&gt;
        &lt;div class=&quot;color-section white&quot; style=&quot;background: #7c858e&quot;&gt;
            &lt;code&gt;.text-dark80&lt;/code&gt; &lt;code&gt;.bg-dark80&lt;/code&gt; dark80
        &lt;/div&gt;
        &lt;div class=&quot;color-section white&quot; style=&quot;background: #5c7089&quot;&gt;
            &lt;code&gt;.text-dark85&lt;/code&gt; &lt;code&gt;.bg-dark85&lt;/code&gt; dark85
        &lt;/div&gt;
        &lt;div class=&quot;color-section white&quot; style=&quot;background: #252d37&quot;&gt;
            dark90
        &lt;/div&gt;
        &lt;div class=&quot;color-section white&quot; style=&quot;background: #414750&quot;&gt;
            font字体颜色
        &lt;/div&gt;
        &lt;div class=&quot;color-section white&quot; style=&quot;background: #f1f1f1;color: #666&quot;&gt;
            gray-bg
        &lt;/div&gt;
        &lt;div class=&quot;color-section white&quot; style=&quot;background: #ebeff2;color: #666&quot;&gt;
            border
        &lt;/div&gt;
        &lt;div class=&quot;color-section white&quot; style=&quot;background: #d9d9d9;color: #666&quot;&gt;
            input-border
        &lt;/div&gt;
    &lt;/section&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function A(j,D){const a=l("ExternalLinkIcon");return d(),p("div",null,[f,s("p",null,[n("Developers can use this feature to add their own theme color scheme, before using this feature you need to install "),s("a",y,[n("NodeJs"),e(a)]),n(", if you do not have it installed, go to "),s("a",q,[n("http://nodejs.cn/"),e(a)]),n(" to download and install it.")]),x,s("p",null,[n("The front end of "),w,n(" is written using "),_,n(", so first we need to learn how to use "),s("a",C,[n("Bootstrap4 Color(Color) Style"),e(a)]),n(", and we won't repeat it here.")]),T])}const M=c(h,[["render",A],["__file","theme.html.vue"]]);export{M as default};
