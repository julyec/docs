import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,a as e}from"./app-5f6cf456.js";const t={},p=e(`<h1 id="mapped-cells" tabindex="-1"><a class="header-anchor" href="#mapped-cells" aria-hidden="true">#</a> Mapped Cells</h1><p>In case you have a more custom spreadsheet and only want to access specific <strong>cells</strong>, you can implement the <code>WithMappedCells</code> concern.</p><p>You might have a speadsheet looking like this:</p><table><thead><tr><th>name</th><th>Patrick Brouwers</th></tr></thead><tbody><tr><td>email</td><td>patrick@maatwebsite.nl</td></tr></tbody></table><p>We can now map <code>name</code> to <code>B1</code> and <code>email</code> to <code>B2</code>. The value of those coordinates will then be available under the given array key.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Imports</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>User</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Concerns<span class="token punctuation">\\</span>ToModel</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Concerns<span class="token punctuation">\\</span>WithMappedCells</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">UsersImport</span> <span class="token keyword">implements</span> <span class="token class-name">WithMappedCells</span><span class="token punctuation">,</span> ToModel 
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">mapping</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">array</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span>
            <span class="token string single-quoted-string">&#39;name&#39;</span>  <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;B1&#39;</span><span class="token punctuation">,</span>
            <span class="token string single-quoted-string">&#39;email&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;B2&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">model</span><span class="token punctuation">(</span><span class="token keyword type-hint">array</span> <span class="token variable">$row</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
            <span class="token string single-quoted-string">&#39;name&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$row</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;name&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token string single-quoted-string">&#39;email&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$row</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;email&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">Note</p><p>This concern is not meant to map <strong>columns</strong>, only specific <strong>cell</strong> reference are allowed.</p></div><h2 id="multi-dimensional-mapping" tabindex="-1"><a class="header-anchor" href="#multi-dimensional-mapping" aria-hidden="true">#</a> Multi-dimensional Mapping</h2><p>In case you have repeating data in your table, e. g. a spreadsheet looking like this:</p><table><thead><tr><th>Team 1</th><th></th><th>Team 2</th><th></th></tr></thead><tbody><tr><td>Max</td><td>2</td><td>Peter</td><td>3</td></tr><tr><td>Annie</td><td>0</td><td>Alex</td><td>1</td></tr></tbody></table><p>you are also able to define cell coordinates in a nested array:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">mapping</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">array</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>
        <span class="token string single-quoted-string">&#39;team1&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
            <span class="token punctuation">[</span>
                <span class="token string single-quoted-string">&#39;name&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;A2&#39;</span><span class="token punctuation">,</span>
                <span class="token string single-quoted-string">&#39;score&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;B2&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">[</span>
                <span class="token string single-quoted-string">&#39;name&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;A3&#39;</span><span class="token punctuation">,</span>
                <span class="token string single-quoted-string">&#39;score&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;B3&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;team2&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
            <span class="token punctuation">[</span>
                <span class="token string single-quoted-string">&#39;name&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;C2&#39;</span><span class="token punctuation">,</span>
                <span class="token string single-quoted-string">&#39;score&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;D2&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">[</span>
                <span class="token string single-quoted-string">&#39;name&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;C3&#39;</span><span class="token punctuation">,</span>
                <span class="token string single-quoted-string">&#39;score&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;D3&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token string backtick-quoted-string">\`\`</span>\`

Note that an <span class="token keyword type-declaration">array</span> of the same form will be returned<span class="token operator">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),i=[p];function o(l,c){return s(),a("div",null,i)}const d=n(t,[["render",o],["__file","mapped-cells.html.vue"]]);export{d as default};
