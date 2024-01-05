import{_ as c}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as l,c as u,b as n,d as a,w as e,e as s,a as i}from"./app-edc8bdf9.js";const r={},d=n("h1",{id:"drawings",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#drawings","aria-hidden":"true"},"#"),s(" Drawings")],-1),k={class:"table-of-contents"},g=i(`<p>By using the <code>WithDrawings</code> concern, you can add one or multiple drawings to your worksheet.</p><h2 id="instantiating-a-drawing" tabindex="-1"><a class="header-anchor" href="#instantiating-a-drawing" aria-hidden="true">#</a> Instantiating a drawing</h2><p>You first have to instantiate a new <code>\\PhpOffice\\PhpSpreadsheet\\Worksheet\\Drawing</code>, and assign its properties a meaningful value.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$drawing</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name class-name-fully-qualified"><span class="token punctuation">\\</span>PhpOffice<span class="token punctuation">\\</span>PhpSpreadsheet<span class="token punctuation">\\</span>Worksheet<span class="token punctuation">\\</span>Drawing</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$drawing</span><span class="token operator">-&gt;</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Logo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$drawing</span><span class="token operator">-&gt;</span><span class="token function">setDescription</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;This is my logo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$drawing</span><span class="token operator">-&gt;</span><span class="token function">setPath</span><span class="token punctuation">(</span><span class="token function">public_path</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;/img/logo.jpg&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$drawing</span><span class="token operator">-&gt;</span><span class="token function">setHeight</span><span class="token punctuation">(</span><span class="token number">90</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),v={href:"https://phpspreadsheet.readthedocs.io/en/latest/topics/recipes/#add-a-drawing-to-a-worksheet",target:"_blank",rel:"noopener noreferrer"},m=i(`<h2 id="adding-a-single-drawing" tabindex="-1"><a class="header-anchor" href="#adding-a-single-drawing" aria-hidden="true">#</a> Adding a single drawing</h2><p>When you&#39;ve instantiated the drawing, you can add the <code>WithDrawings</code> concern to your export class. Return the Drawing instance in the <code>drawings</code> method.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Exports</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Concerns<span class="token punctuation">\\</span>WithDrawings</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">PhpOffice<span class="token punctuation">\\</span>PhpSpreadsheet<span class="token punctuation">\\</span>Worksheet<span class="token punctuation">\\</span>Drawing</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">InvoicesExport</span> <span class="token keyword">implements</span> <span class="token class-name">WithDrawings</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">drawings</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$drawing</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Drawing</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token variable">$drawing</span><span class="token operator">-&gt;</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Logo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token variable">$drawing</span><span class="token operator">-&gt;</span><span class="token function">setDescription</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;This is my logo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token variable">$drawing</span><span class="token operator">-&gt;</span><span class="token function">setPath</span><span class="token punctuation">(</span><span class="token function">public_path</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;/img/logo.jpg&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token variable">$drawing</span><span class="token operator">-&gt;</span><span class="token function">setHeight</span><span class="token punctuation">(</span><span class="token number">90</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token variable">$drawing</span><span class="token operator">-&gt;</span><span class="token function">setCoordinates</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;B3&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> <span class="token variable">$drawing</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="adding-multiple-drawings" tabindex="-1"><a class="header-anchor" href="#adding-multiple-drawings" aria-hidden="true">#</a> Adding multiple drawings</h2><p>You can add multiple drawings to the worksheet by returning an array in the <code>drawings</code> method.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Exports</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Concerns<span class="token punctuation">\\</span>WithDrawings</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">PhpOffice<span class="token punctuation">\\</span>PhpSpreadsheet<span class="token punctuation">\\</span>Worksheet<span class="token punctuation">\\</span>Drawing</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">InvoicesExport</span> <span class="token keyword">implements</span> <span class="token class-name">WithDrawings</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">drawings</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$drawing</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Drawing</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token variable">$drawing</span><span class="token operator">-&gt;</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Logo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token variable">$drawing</span><span class="token operator">-&gt;</span><span class="token function">setDescription</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;This is my logo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token variable">$drawing</span><span class="token operator">-&gt;</span><span class="token function">setPath</span><span class="token punctuation">(</span><span class="token function">public_path</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;/img/logo.jpg&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token variable">$drawing</span><span class="token operator">-&gt;</span><span class="token function">setHeight</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token variable">$drawing</span><span class="token operator">-&gt;</span><span class="token function">setCoordinates</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;B3&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token variable">$drawing2</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Drawing</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token variable">$drawing2</span><span class="token operator">-&gt;</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Other image&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token variable">$drawing2</span><span class="token operator">-&gt;</span><span class="token function">setDescription</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;This is a second image&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token variable">$drawing2</span><span class="token operator">-&gt;</span><span class="token function">setPath</span><span class="token punctuation">(</span><span class="token function">public_path</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;/img/other.jpg&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token variable">$drawing2</span><span class="token operator">-&gt;</span><span class="token function">setHeight</span><span class="token punctuation">(</span><span class="token number">120</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token variable">$drawing2</span><span class="token operator">-&gt;</span><span class="token function">setCoordinates</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;G2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token variable">$drawing</span><span class="token punctuation">,</span> <span class="token variable">$drawing2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="adding-a-drawing-of-remote-image" tabindex="-1"><a class="header-anchor" href="#adding-a-drawing-of-remote-image" aria-hidden="true">#</a> Adding a drawing of remote image</h2><p>You can instantiate a new drawing from <code>\\PhpOffice\\PhpSpreadsheet\\Worksheet\\MemoryDrawing</code>, and create a string containing the binary image data, or from an external url by <code>imagecreatefromstring(file_get_contents($url))</code>, then assign it to <code>setImageResource</code>. Return the Drawing instance in the <code>drawings</code> method.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Exports</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Concerns<span class="token punctuation">\\</span>WithDrawings</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">PhpOffice<span class="token punctuation">\\</span>PhpSpreadsheet<span class="token punctuation">\\</span>Worksheet<span class="token punctuation">\\</span>MemoryDrawing</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">InvoicesExport</span> <span class="token keyword">implements</span> <span class="token class-name">WithDrawings</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">drawings</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token variable">$imageResource</span> <span class="token operator">=</span> @<span class="token function">imagecreatefromstring</span><span class="token punctuation">(</span><span class="token function">file_get_contents</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;http://example.jpg&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name class-name-fully-qualified"><span class="token punctuation">\\</span>Exception</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;The image URL cannot be converted into an image resource.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token variable">$drawing</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MemoryDrawing</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token variable">$drawing</span><span class="token operator">-&gt;</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Logo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token variable">$drawing</span><span class="token operator">-&gt;</span><span class="token function">setDescription</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;This is my logo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token variable">$drawing</span><span class="token operator">-&gt;</span><span class="token function">setImageResource</span><span class="token punctuation">(</span><span class="token variable">$imageResource</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token variable">$drawing</span><span class="token operator">-&gt;</span><span class="token function">setHeight</span><span class="token punctuation">(</span><span class="token number">90</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token variable">$drawing</span><span class="token operator">-&gt;</span><span class="token function">setCoordinates</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;B3&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> <span class="token variable">$drawing</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9);function b(h,w){const t=p("router-link"),o=p("ExternalLinkIcon");return l(),u("div",null,[d,n("nav",k,[n("ul",null,[n("li",null,[a(t,{to:"#instantiating-a-drawing"},{default:e(()=>[s("Instantiating a drawing")]),_:1})]),n("li",null,[a(t,{to:"#adding-a-single-drawing"},{default:e(()=>[s("Adding a single drawing")]),_:1})]),n("li",null,[a(t,{to:"#adding-multiple-drawings"},{default:e(()=>[s("Adding multiple drawings")]),_:1})]),n("li",null,[a(t,{to:"#adding-a-drawing-of-remote-image"},{default:e(()=>[s("Adding a drawing of remote image")]),_:1})])])]),g,n("p",null,[s("You can view all available properties for Drawing on the "),n("a",v,[s("PhpSpreadsheet docs"),a(o)]),s(".")]),m])}const _=c(r,[["render",b],["__file","drawings.html.vue"]]);export{_ as default};
