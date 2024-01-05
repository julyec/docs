import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as e,o as i,c as u,b as n,d as a,w as p,e as s,a as o}from"./app-5f6cf456.js";const k={},r=n("h1",{id:"charts",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#charts","aria-hidden":"true"},"#"),s(" Charts")],-1),d={class:"table-of-contents"},v=o(`<p>By using the <code>WithCharts</code> concern, you can add one or multiple charts to your worksheet.</p><h2 id="instantiating-a-chart" tabindex="-1"><a class="header-anchor" href="#instantiating-a-chart" aria-hidden="true">#</a> Instantiating a chart</h2><p>You first have to instantiate a new <code>PhpOffice\\PhpSpreadsheet\\Worksheet\\Chart</code>, passing the name, title, legend and plot in the constructor.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$label</span>      <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">DataSeriesValues</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;String&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;Worksheet!$B$1&#39;</span><span class="token punctuation">,</span> <span class="token constant">null</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token variable">$categories</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">DataSeriesValues</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;String&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;Worksheet!$B$2:$B$5&#39;</span><span class="token punctuation">,</span> <span class="token constant">null</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token variable">$values</span>     <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">DataSeriesValues</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Number&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;Worksheet!$A$2:$A$5&#39;</span><span class="token punctuation">,</span> <span class="token constant">null</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token variable">$series</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DataSeries</span><span class="token punctuation">(</span><span class="token class-name static-context">DataSeries</span><span class="token operator">::</span><span class="token constant">TYPE_PIECHART</span><span class="token punctuation">,</span> <span class="token class-name static-context">DataSeries</span><span class="token operator">::</span><span class="token constant">GROUPING_STANDARD</span><span class="token punctuation">,</span>
    <span class="token function">range</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token function"><span class="token punctuation">\\</span>count</span><span class="token punctuation">(</span><span class="token variable">$values</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token variable">$label</span><span class="token punctuation">,</span> <span class="token variable">$categories</span><span class="token punctuation">,</span> <span class="token variable">$values</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$plot</span>   <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PlotArea</span><span class="token punctuation">(</span><span class="token constant">null</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token variable">$series</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">$legend</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Legend</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$chart</span>  <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Chart</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;chart name&#39;</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Title</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;chart title&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token variable">$legend</span><span class="token punctuation">,</span> <span class="token variable">$plot</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),h={href:"https://phpoffice.github.io/PhpSpreadsheet/namespaces/phpoffice-phpspreadsheet-chart.html",target:"_blank",rel:"noopener noreferrer"},m=o(`<h2 id="adding-a-single-chart" tabindex="-1"><a class="header-anchor" href="#adding-a-single-chart" aria-hidden="true">#</a> Adding a single chart</h2><p>When you&#39;ve instantiated the chart, you can add the <code>WithCharts</code> concern to your export class and return the Chart instance in the <code>charts</code> method.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Exports</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Concerns<span class="token punctuation">\\</span>WithCharts</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">PhpOffice<span class="token punctuation">\\</span>PhpSpreadsheet<span class="token punctuation">\\</span>Worksheet<span class="token punctuation">\\</span>Chart</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">InvoicesExport</span> <span class="token keyword">implements</span> <span class="token class-name">WithCharts</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">charts</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$label</span>      <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">DataSeriesValues</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;String&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;Worksheet!$B$1&#39;</span><span class="token punctuation">,</span> <span class="token constant">null</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token variable">$categories</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">DataSeriesValues</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;String&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;Worksheet!$B$2:$B$5&#39;</span><span class="token punctuation">,</span> <span class="token constant">null</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token variable">$values</span>     <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">DataSeriesValues</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Number&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;Worksheet!$A$2:$A$5&#39;</span><span class="token punctuation">,</span> <span class="token constant">null</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

        <span class="token variable">$series</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DataSeries</span><span class="token punctuation">(</span><span class="token class-name static-context">DataSeries</span><span class="token operator">::</span><span class="token constant">TYPE_PIECHART</span><span class="token punctuation">,</span> <span class="token class-name static-context">DataSeries</span><span class="token operator">::</span><span class="token constant">GROUPING_STANDARD</span><span class="token punctuation">,</span>
            <span class="token function">range</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token function"><span class="token punctuation">\\</span>count</span><span class="token punctuation">(</span><span class="token variable">$values</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token variable">$label</span><span class="token punctuation">,</span> <span class="token variable">$categories</span><span class="token punctuation">,</span> <span class="token variable">$values</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token variable">$plot</span>   <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PlotArea</span><span class="token punctuation">(</span><span class="token constant">null</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token variable">$series</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token variable">$legend</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Legend</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token variable">$chart</span>  <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Chart</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;chart name&#39;</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Title</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;chart title&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token variable">$legend</span><span class="token punctuation">,</span> <span class="token variable">$plot</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> <span class="token variable">$chart</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="adding-multiple-charts" tabindex="-1"><a class="header-anchor" href="#adding-multiple-charts" aria-hidden="true">#</a> Adding multiple charts</h2><p>You can add multiple charts to the worksheet by returning an array in the <code>charts</code> method.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Exports</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Concerns<span class="token punctuation">\\</span>WithCharts</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">PhpOffice<span class="token punctuation">\\</span>PhpSpreadsheet<span class="token punctuation">\\</span>Worksheet<span class="token punctuation">\\</span>Chart</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">InvoicesExport</span> <span class="token keyword">implements</span> <span class="token class-name">WithCharts</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">charts</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$label</span>      <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">DataSeriesValues</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;String&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;Worksheet!$B$1&#39;</span><span class="token punctuation">,</span> <span class="token constant">null</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token variable">$categories</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">DataSeriesValues</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;String&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;Worksheet!$B$2:$B$5&#39;</span><span class="token punctuation">,</span> <span class="token constant">null</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token variable">$values</span>     <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">DataSeriesValues</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Number&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;Worksheet!$A$2:$A$5&#39;</span><span class="token punctuation">,</span> <span class="token constant">null</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

        <span class="token variable">$series</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DataSeries</span><span class="token punctuation">(</span><span class="token class-name static-context">DataSeries</span><span class="token operator">::</span><span class="token constant">TYPE_PIECHART</span><span class="token punctuation">,</span> <span class="token class-name static-context">DataSeries</span><span class="token operator">::</span><span class="token constant">GROUPING_STANDARD</span><span class="token punctuation">,</span>
            <span class="token function">range</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token function"><span class="token punctuation">\\</span>count</span><span class="token punctuation">(</span><span class="token variable">$values</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token variable">$label</span><span class="token punctuation">,</span> <span class="token variable">$categories</span><span class="token punctuation">,</span> <span class="token variable">$values</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token variable">$plot</span>   <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PlotArea</span><span class="token punctuation">(</span><span class="token constant">null</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token variable">$series</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token variable">$legend</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Legend</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token variable">$chart</span>  <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Chart</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;chart name&#39;</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Title</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;chart title&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token variable">$legend</span><span class="token punctuation">,</span> <span class="token variable">$plot</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token variable">$chart2</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Chart</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;chart 2 name&#39;</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Title</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;chart 2 title&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token variable">$legend</span><span class="token punctuation">,</span> <span class="token variable">$plot</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token variable">$chart</span><span class="token punctuation">,</span> <span class="token variable">$chart2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function b(g,$){const t=e("router-link"),c=e("ExternalLinkIcon");return i(),u("div",null,[r,n("nav",d,[n("ul",null,[n("li",null,[a(t,{to:"#instantiating-a-chart"},{default:p(()=>[s("Instantiating a chart")]),_:1})]),n("li",null,[a(t,{to:"#adding-a-single-chart"},{default:p(()=>[s("Adding a single chart")]),_:1})]),n("li",null,[a(t,{to:"#adding-multiple-charts"},{default:p(()=>[s("Adding multiple charts")]),_:1})])])]),v,n("p",null,[s("You can view all available properties for Charts on the "),n("a",h,[s("PhpSpreadsheet docs"),a(c)]),s(".")]),m])}const f=l(k,[["render",b],["__file","charts.html.vue"]]);export{f as default};