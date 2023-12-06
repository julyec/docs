import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-c17653d8.js";const t={},o=e(`<h1 id="form-initialization" tabindex="-1"><a class="header-anchor" href="#form-initialization" aria-hidden="true">#</a> Form initialization</h1><p>The callback function set by the <code>Form::resolving</code> method is triggered when the <code>Dcat\\Admin\\Form</code> class is instantiated.</p><p>The callback function set by the <code>Form::composing</code> method is triggered when the <code>render()</code> method is called (when the page is rendered).</p><p>Developers can change some of the settings or behavior of <code>Form</code> in these two events, for example, if they need to disable certain actions, they can add the following code to <code>app/Admin/bootstrap.php</code>.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">Dcat<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Form</span><span class="token punctuation">;</span>

<span class="token class-name static-context">Form</span><span class="token operator">::</span><span class="token function">resolving</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">Form</span> <span class="token variable">$form</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

     <span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">disableEditingCheck</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
     <span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">disableCreatingCheck</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
     <span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">disableViewCheck</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
     <span class="token variable">$form</span><span class="token operator">-&gt;</span><span class="token function">tools</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name class-name-fully-qualified type-declaration">Form<span class="token punctuation">\\</span>Tools</span> <span class="token variable">$tools</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token variable">$tools</span><span class="token operator">-&gt;</span><span class="token function">disableDelete</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token variable">$tools</span><span class="token operator">-&gt;</span><span class="token function">disableView</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token variable">$tools</span><span class="token operator">-&gt;</span><span class="token function">disableList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This way you don&#39;t have to set it in the code of each controller.</p><p>If you want to enable the setting in one of the forms after the global setting, for example, enable the checkbox that shows <code>Continue Editing</code>, call <code>$form-&gt;disableEditingCheck(false);</code> on the corresponding instance!</p>`,7),p=[o];function c(i,l){return s(),a("div",null,p)}const d=n(t,[["render",c],["__file","model-form-init.html.vue"]]);export{d as default};
