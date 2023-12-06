import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as c,c as l,a,b as n,d as e,w as t,e as p}from"./app-c17653d8.js";const u={},r=p(`<h1 id="use-and-extension-of-rows" tabindex="-1"><a class="header-anchor" href="#use-and-extension-of-rows" aria-hidden="true">#</a> Use and extension of rows</h1><h3 id="enable-or-disable-the-default-action-button" tabindex="-1"><a class="header-anchor" href="#enable-or-disable-the-default-action-button" aria-hidden="true">#</a> Enable or disable the default action button</h3><p>By default, <code>model-grid</code> has four line operations <code>edit</code>, <code>quick edit</code>, <code>delete</code> and <code>detail</code>, which can be turned off in the following way.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Grid</span><span class="token punctuation">;</span>

 <span class="token variable">$grid</span><span class="token operator">-&gt;</span><span class="token function">actions</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name class-name-fully-qualified type-declaration">Grid<span class="token punctuation">\\</span>Displayers<span class="token punctuation">\\</span>Actions</span> <span class="token variable">$actions</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token variable">$actions</span><span class="token operator">-&gt;</span><span class="token function">disableDelete</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token variable">$actions</span><span class="token operator">-&gt;</span><span class="token function">disableEdit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token variable">$actions</span><span class="token operator">-&gt;</span><span class="token function">disableQuickEdit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token variable">$actions</span><span class="token operator">-&gt;</span><span class="token function">disableView</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Buttons can also be enabled or disabled in the following ways</span>
<span class="token variable">$grid</span><span class="token operator">-&gt;</span><span class="token function">disableDeleteButton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$grid</span><span class="token operator">-&gt;</span><span class="token function">disableEditButton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$grid</span><span class="token operator">-&gt;</span><span class="token function">disableQuickEditButton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$grid</span><span class="token operator">-&gt;</span><span class="token function">disableViewButton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="toggle-line-operation-button-display-mode" tabindex="-1"><a class="header-anchor" href="#toggle-line-operation-button-display-mode" aria-hidden="true">#</a> Toggle line operation button display mode</h3><p>The global default line action button display method can be configured through the configuration parameter <code>admin.grid.grid_action_class</code> parameter, which currently supports the following two methods of displaying line action buttons:</p><ul><li><code>Dcat\\Admin\\Grid\\Displayers\\DropdownActions</code> Drop-down menu</li><li><code>Dcat\\Admin\\Grid\\Displayers\\Actions</code> Icon display mode</li><li><code>Dcat\\Admin\\Grid\\Displayers\\ContextMenuActions</code> Right mouse button to show drop-down menu</li></ul><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>    <span class="token operator">...</span>

    <span class="token string single-quoted-string">&#39;grid&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>

        <span class="token comment">/*
        |--------------------------------------------------------------------------
        | The global Grid action display class.
        |--------------------------------------------------------------------------
        */</span>
        <span class="token string single-quoted-string">&#39;grid_action_class&#39;</span> <span class="token operator">=&gt;</span> <span class="token class-name class-name-fully-qualified static-context">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Grid<span class="token punctuation">\\</span>Displayers<span class="token punctuation">\\</span>DropdownActions</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    
    <span class="token operator">...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Switching the display method in the controller</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Grid</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">grid</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">Grid</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Model</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">Grid</span> <span class="token variable">$grid</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token variable">$grid</span><span class="token operator">-&gt;</span><span class="token function">setActionClass</span><span class="token punctuation">(</span><span class="token class-name class-name-fully-qualified static-context">Grid<span class="token punctuation">\\</span>Displayers<span class="token punctuation">\\</span>Actions</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token operator">...</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="get-the-row-number-index" tabindex="-1"><a class="header-anchor" href="#get-the-row-number-index" aria-hidden="true">#</a> Get the row number (index)</h3><p>The number is counted from <code>0</code>.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment">// Use in the display callback</span>
<span class="token variable">$grid</span><span class="token operator">-&gt;</span><span class="token function">column</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;number&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">display</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">_index</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token comment">// used in a row action</span>
<span class="token variable">$grid</span><span class="token operator">-&gt;</span><span class="token function">actions</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">$actions</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token variable">$index</span> <span class="token operator">=</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">_index</span><span class="token punctuation">;</span>
    
    <span class="token operator">...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="get-current-row-data" tabindex="-1"><a class="header-anchor" href="#get-current-row-data" aria-hidden="true">#</a> Get current row data</h3><p>The data for the current row can be retrieved through the incoming <code>$actions</code> parameter.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Grid</span><span class="token punctuation">;</span>

<span class="token variable">$grid</span><span class="token operator">-&gt;</span><span class="token function">actions</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name class-name-fully-qualified type-declaration">Grid<span class="token punctuation">\\</span>Displayers<span class="token punctuation">\\</span>Actions</span> <span class="token variable">$actions</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Array of data for the current row</span>
    <span class="token variable">$rowArray</span> <span class="token operator">=</span> <span class="token variable">$actions</span><span class="token operator">-&gt;</span><span class="token property">row</span><span class="token operator">-&gt;</span><span class="token function">toArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token comment">// Data for a field in the current row</span>
    <span class="token variable">$email</span> <span class="token operator">=</span> <span class="token variable">$actions</span><span class="token operator">-&gt;</span><span class="token property">row</span><span class="token operator">-&gt;</span><span class="token property">email</span><span class="token punctuation">;</span>
    
    <span class="token comment">// Get the current row primary key value</span>
    <span class="token variable">$id</span> <span class="token operator">=</span> <span class="token variable">$actions</span><span class="token operator">-&gt;</span><span class="token function">getKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="adding-custom-buttons" tabindex="-1"><a class="header-anchor" href="#adding-custom-buttons" aria-hidden="true">#</a> Adding custom buttons</h3><p>If there is a custom action button, it can be added as follows:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Grid</span><span class="token punctuation">;</span>

<span class="token variable">$grid</span><span class="token operator">-&gt;</span><span class="token function">actions</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name class-name-fully-qualified type-declaration">Grid<span class="token punctuation">\\</span>Displayers<span class="token punctuation">\\</span>Actions</span> <span class="token variable">$actions</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// append an action</span>
    <span class="token variable">$actions</span><span class="token operator">-&gt;</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;&lt;a href=&quot;&quot;&gt;&lt;i class=&quot;fa fa-eye&quot;&gt;&lt;/i&gt;&lt;/a&gt;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// append a complex action</span>
    <span class="token variable">$actions</span><span class="token operator">-&gt;</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Copy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// prepend an action</span>
    <span class="token variable">$actions</span><span class="token operator">-&gt;</span><span class="token function">prepend</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;&lt;a href=&quot;&quot;&gt;&lt;i class=&quot;fa fa-paper-plane&quot;&gt;&lt;/i&gt;&lt;/a&gt;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="adding-complex-operation-buttons" tabindex="-1"><a class="header-anchor" href="#adding-complex-operation-buttons" aria-hidden="true">#</a> Adding complex operation buttons</h3><p>For more complex operations, consider the following approach.</p><p>Define the row action class to inherit <code>Dcat\\Admin\\RowAction</code> first</p>`,22),d=p(`<div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Extensions</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Grid<span class="token punctuation">\\</span>RowAction</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">CheckRow</span> <span class="token keyword">extends</span> <span class="token class-name">RowAction</span>
<span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * Return field TITLE
     * 
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">string</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">title</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string single-quoted-string">&#39;Check row&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token doc-comment comment">/**
     * Adding JS
     * 
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">string</span></span>
     */</span>
    <span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function-definition function">script</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string heredoc-string"><span class="token delimiter symbol"><span class="token punctuation">&lt;&lt;&lt;</span>JS</span>
$(&#39;.grid-check-row&#39;).on(&#39;click&#39;, function () {
    
    // Your code.
    console.log($(this).data(&#39;id&#39;));
    
});
<span class="token delimiter symbol">JS<span class="token punctuation">;</span></span></span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">html</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// Get the current row data ID</span>
        <span class="token variable">$id</span> <span class="token operator">=</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">getKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token comment">// Get the username of the current row data</span>
        <span class="token variable">$username</span> <span class="token operator">=</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">row</span><span class="token operator">-&gt;</span><span class="token property">username</span><span class="token punctuation">;</span>
        
        <span class="token comment">// Here you need to add a class, which corresponds to the script method above.</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">setHtmlAttribute</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;data-id&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$id</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;email&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$username</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;class&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;grid-check-row&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> <span class="token keyword static-context">parent</span><span class="token operator">::</span><span class="token function">html</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then add the action:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$grid</span><span class="token operator">-&gt;</span><span class="token function">actions</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">CheckRow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// It can also be added in this way</span>
<span class="token variable">$grid</span><span class="token operator">-&gt;</span><span class="token function">actions</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name class-name-fully-qualified type-declaration">Grid<span class="token punctuation">\\</span>Displayers<span class="token punctuation">\\</span>Actions</span> <span class="token variable">$actions</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token variable">$actions</span><span class="token operator">-&gt;</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">CheckRow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="action-buttons-need-to-interact-with-the-api" tabindex="-1"><a class="header-anchor" href="#action-buttons-need-to-interact-with-the-api" aria-hidden="true">#</a> Action buttons need to interact with the API</h3><p>If your action class needs to interact with the background interface, you can add the <code>handle</code> method to your action class, which makes it easy to handle all the logic in the same class!</p>`,5),k=p(`<div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>RowActions</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Grid<span class="token punctuation">\\</span>RowAction</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Request</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Database<span class="token punctuation">\\</span>Eloquent<span class="token punctuation">\\</span>Model</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">Copy</span> <span class="token keyword">extends</span> <span class="token class-name">RowAction</span>
<span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token variable">$model</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">__construct</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$model</span> <span class="token operator">=</span> <span class="token constant">null</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">model</span> <span class="token operator">=</span> <span class="token variable">$model</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * TITLE
     *
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">string</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">title</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string single-quoted-string">&#39;Copy&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * Set the confirmation popup message, if a null value is returned, the popup window will not show
     *
     * Allows return of string or array types
     *
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">array</span><span class="token punctuation">|</span><span class="token keyword">string</span><span class="token punctuation">|</span><span class="token keyword">void</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">confirm</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span>
            <span class="token comment">// Confirmation pop-up title</span>
            <span class="token string double-quoted-string">&quot;Are you sure you want to copy this line of data?？&quot;</span><span class="token punctuation">,</span>
            <span class="token comment">// confirm pop-up window content</span>
            <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">row</span><span class="token operator">-&gt;</span><span class="token property">username</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * Processing of requests
     *
     * <span class="token keyword">@param</span> <span class="token class-name">Request</span> <span class="token parameter">$request</span>
     *
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">\\</span>Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Actions<span class="token punctuation">\\</span>Response</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">handle</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Request</span> <span class="token variable">$request</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// Get the current line ID</span>
        <span class="token variable">$id</span> <span class="token operator">=</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">getKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// Gets the parameters passed by the parameters method</span>
        <span class="token variable">$username</span> <span class="token operator">=</span> <span class="token variable">$request</span><span class="token operator">-&gt;</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;username&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token variable">$model</span> <span class="token operator">=</span> <span class="token variable">$request</span><span class="token operator">-&gt;</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;model&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// Copy data</span>
        <span class="token variable">$model</span><span class="token operator">::</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token variable">$id</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">replicate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// Returns response results and refreshes the page</span>
        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">response</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;Replication success: [<span class="token interpolation"><span class="token punctuation">{</span><span class="token variable">$username</span><span class="token punctuation">}</span></span>]&quot;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">refresh</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * Set the data to be POSTed to the interface.
     *
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">array</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">parameters</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span>
            <span class="token comment">// Send the current line&#39;s username field data to the interface</span>
            <span class="token string single-quoted-string">&#39;username&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">row</span><span class="token operator">-&gt;</span><span class="token property">username</span><span class="token punctuation">,</span>
            <span class="token comment">// Passing the model class name to the interface</span>
            <span class="token string single-quoted-string">&#39;model&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">model</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>use</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Models<span class="token punctuation">\\</span>User</span><span class="token punctuation">;</span>

<span class="token variable">$grid</span><span class="token operator">-&gt;</span><span class="token function">actions</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">Copy</span><span class="token punctuation">(</span><span class="token class-name static-context">User</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// It can also be added in this way</span>
<span class="token variable">$grid</span><span class="token operator">-&gt;</span><span class="token function">actions</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name class-name-fully-qualified type-declaration">Grid<span class="token punctuation">\\</span>Displayers<span class="token punctuation">\\</span>Actions</span> <span class="token variable">$actions</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token variable">$actions</span><span class="token operator">-&gt;</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Copy</span><span class="token punctuation">(</span><span class="token class-name static-context">User</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="form-pop-up" tabindex="-1"><a class="header-anchor" href="#form-pop-up" aria-hidden="true">#</a> Form pop-up</h2>`,4);function v(m,b){const s=i("RouterLink");return c(),l("div",null,[r,a("blockquote",null,[a("p",null,[n("{tip} For more detailed usage of the action class, please refer to "),e(s,{to:"/guide/action.html"},{default:t(()=>[n("Action Basic Use")]),_:1}),n(" and "),e(s,{to:"/guide/action-grid.html"},{default:t(()=>[n("Data Grid Action")]),_:1}),n(".")])]),d,a("blockquote",null,[a("p",null,[n("{tip} For more detailed usage of the action class, please refer to "),e(s,{to:"/guide/action.html"},{default:t(()=>[n("Action Basic Use")]),_:1}),n(" and "),e(s,{to:"/guide/action-grid.html"},{default:t(()=>[n("Data Grid Action")]),_:1}),n(".")])]),k,a("p",null,[n("Please refer to the documentation "),e(s,{to:"/guide/widgets-form.html#modal"},{default:t(()=>[n("tools-form - popups")]),_:1}),n(".")])])}const f=o(u,[["render",v],["__file","model-grid-actions.html.vue"]]);export{f as default};
