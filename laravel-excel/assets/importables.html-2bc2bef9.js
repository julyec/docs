import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as c,c as l,b as n,d as e,w as t,e as s,a as i}from"./app-5f6cf456.js";const r={},u=n("h1",{id:"importables",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#importables","aria-hidden":"true"},"#"),s(" Importables")],-1),d={class:"table-of-contents"},k=i(`<p>In the previous example, we used the <code>Excel::import</code> facade to start an import.</p><p>Laravel Excel also provides a <code>Maatwebsite\\Excel\\Concerns\\Importable</code> trait, to make import classes importable.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Imports</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>User</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Concerns<span class="token punctuation">\\</span>ToModel</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Concerns<span class="token punctuation">\\</span>Importable</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">UsersImport</span> <span class="token keyword">implements</span> <span class="token class-name">ToModel</span>
<span class="token punctuation">{</span>
    <span class="token keyword">use</span> <span class="token package">Importable</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">model</span><span class="token punctuation">(</span><span class="token keyword type-hint">array</span> <span class="token variable">$row</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
            <span class="token string single-quoted-string">&#39;name&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$row</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="importing" tabindex="-1"><a class="header-anchor" href="#importing" aria-hidden="true">#</a> Importing</h2><p>We can now import without the need for the facade:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">UsersImport</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">import</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;users.xlsx&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;local&#39;</span><span class="token punctuation">,</span> <span class="token class-name class-name-fully-qualified static-context"><span class="token punctuation">\\</span>Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Excel</span><span class="token operator">::</span><span class="token constant">XLSX</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="queuing" tabindex="-1"><a class="header-anchor" href="#queuing" aria-hidden="true">#</a> Queuing</h2><p>Or queue the import:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">UsersImport</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">queue</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;users.xlsx&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="to-array" tabindex="-1"><a class="header-anchor" href="#to-array" aria-hidden="true">#</a> To array</h2><p>The import can be loaded into an array :</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$array</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">UsersImport</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">toArray</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;users.xlsx&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="to-collection" tabindex="-1"><a class="header-anchor" href="#to-collection" aria-hidden="true">#</a> To collection</h2><p>The import can be loaded into a collection:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$collection</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">UsersImport</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">toCollection</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;users.xlsx&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,15);function m(v,h){const a=o("router-link");return c(),l("div",null,[u,n("nav",d,[n("ul",null,[n("li",null,[e(a,{to:"#importing"},{default:t(()=>[s("Importing")]),_:1})]),n("li",null,[e(a,{to:"#queuing"},{default:t(()=>[s("Queuing")]),_:1})]),n("li",null,[e(a,{to:"#to-array"},{default:t(()=>[s("To array")]),_:1})]),n("li",null,[e(a,{to:"#to-collection"},{default:t(()=>[s("To collection")]),_:1})])])]),k])}const f=p(r,[["render",m],["__file","importables.html.vue"]]);export{f as default};
