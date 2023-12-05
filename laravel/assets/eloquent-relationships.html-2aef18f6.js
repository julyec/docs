const e=JSON.parse('{"key":"v-4ad0ac00","path":"/guide/eloquent-relationships.html","title":"Eloquent: Relationships","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Introduction","slug":"introduction","link":"#introduction","children":[]},{"level":2,"title":"Defining Relationships","slug":"defining-relationships","link":"#defining-relationships","children":[{"level":3,"title":"One To One","slug":"one-to-one","link":"#one-to-one","children":[{"level":4,"title":"Defining The Inverse Of The Relationship","slug":"defining-the-inverse-of-the-relationship","link":"#defining-the-inverse-of-the-relationship","children":[]}]},{"level":3,"title":"One To Many","slug":"one-to-many","link":"#one-to-many","children":[]},{"level":3,"title":"One To Many (Inverse) / Belongs To","slug":"one-to-many-inverse-belongs-to","link":"#one-to-many-inverse-belongs-to","children":[{"level":4,"title":"Default Models","slug":"default-models","link":"#default-models","children":[]},{"level":4,"title":"Querying Belongs To Relationships","slug":"querying-belongs-to-relationships","link":"#querying-belongs-to-relationships","children":[]}]},{"level":3,"title":"Has One Of Many","slug":"has-one-of-many","link":"#has-one-of-many","children":[{"level":4,"title":"Converting \\"Many\\" Relationships To Has One Relationships","slug":"converting-many-relationships-to-has-one-relationships","link":"#converting-many-relationships-to-has-one-relationships","children":[]},{"level":4,"title":"Advanced Has One Of Many Relationships","slug":"advanced-has-one-of-many-relationships","link":"#advanced-has-one-of-many-relationships","children":[]}]},{"level":3,"title":"Has One Through","slug":"has-one-through","link":"#has-one-through","children":[{"level":4,"title":"Key Conventions","slug":"key-conventions","link":"#key-conventions","children":[]}]},{"level":3,"title":"Has Many Through","slug":"has-many-through","link":"#has-many-through","children":[{"level":4,"title":"Key Conventions","slug":"key-conventions-1","link":"#key-conventions-1","children":[]}]}]},{"level":2,"title":"Many To Many Relationships","slug":"many-to-many-relationships","link":"#many-to-many-relationships","children":[{"level":4,"title":"Table Structure","slug":"table-structure","link":"#table-structure","children":[]},{"level":4,"title":"Model Structure","slug":"model-structure","link":"#model-structure","children":[]},{"level":4,"title":"Defining The Inverse Of The Relationship","slug":"defining-the-inverse-of-the-relationship-1","link":"#defining-the-inverse-of-the-relationship-1","children":[]},{"level":3,"title":"Retrieving Intermediate Table Columns","slug":"retrieving-intermediate-table-columns","link":"#retrieving-intermediate-table-columns","children":[{"level":4,"title":"Customizing The pivot Attribute Name","slug":"customizing-the-pivot-attribute-name","link":"#customizing-the-pivot-attribute-name","children":[]}]},{"level":3,"title":"Filtering Queries Via Intermediate Table Columns","slug":"filtering-queries-via-intermediate-table-columns","link":"#filtering-queries-via-intermediate-table-columns","children":[]},{"level":3,"title":"Ordering Queries Via Intermediate Table Columns","slug":"ordering-queries-via-intermediate-table-columns","link":"#ordering-queries-via-intermediate-table-columns","children":[]},{"level":3,"title":"Defining Custom Intermediate Table Models","slug":"defining-custom-intermediate-table-models","link":"#defining-custom-intermediate-table-models","children":[{"level":4,"title":"Custom Pivot Models And Incrementing IDs","slug":"custom-pivot-models-and-incrementing-ids","link":"#custom-pivot-models-and-incrementing-ids","children":[]}]}]},{"level":2,"title":"Polymorphic Relationships","slug":"polymorphic-relationships","link":"#polymorphic-relationships","children":[{"level":3,"title":"One To One (Polymorphic)","slug":"one-to-one-polymorphic","link":"#one-to-one-polymorphic","children":[{"level":4,"title":"Table Structure","slug":"table-structure-1","link":"#table-structure-1","children":[]},{"level":4,"title":"Model Structure","slug":"model-structure-1","link":"#model-structure-1","children":[]},{"level":4,"title":"Retrieving The Relationship","slug":"retrieving-the-relationship","link":"#retrieving-the-relationship","children":[]},{"level":4,"title":"Key Conventions","slug":"key-conventions-2","link":"#key-conventions-2","children":[]}]},{"level":3,"title":"One To Many (Polymorphic)","slug":"one-to-many-polymorphic","link":"#one-to-many-polymorphic","children":[{"level":4,"title":"Table Structure","slug":"table-structure-2","link":"#table-structure-2","children":[]},{"level":4,"title":"Model Structure","slug":"model-structure-2","link":"#model-structure-2","children":[]},{"level":4,"title":"Retrieving The Relationship","slug":"retrieving-the-relationship-1","link":"#retrieving-the-relationship-1","children":[]}]},{"level":3,"title":"One Of Many (Polymorphic)","slug":"one-of-many-polymorphic","link":"#one-of-many-polymorphic","children":[]},{"level":3,"title":"Many To Many (Polymorphic)","slug":"many-to-many-polymorphic","link":"#many-to-many-polymorphic","children":[{"level":4,"title":"Table Structure","slug":"table-structure-3","link":"#table-structure-3","children":[]},{"level":4,"title":"Model Structure","slug":"model-structure-3","link":"#model-structure-3","children":[]},{"level":4,"title":"Defining The Inverse Of The Relationship","slug":"defining-the-inverse-of-the-relationship-2","link":"#defining-the-inverse-of-the-relationship-2","children":[]},{"level":4,"title":"Retrieving The Relationship","slug":"retrieving-the-relationship-2","link":"#retrieving-the-relationship-2","children":[]}]},{"level":3,"title":"Custom Polymorphic Types","slug":"custom-polymorphic-types","link":"#custom-polymorphic-types","children":[]},{"level":3,"title":"Dynamic Relationships","slug":"dynamic-relationships","link":"#dynamic-relationships","children":[]}]},{"level":2,"title":"Querying Relations","slug":"querying-relations","link":"#querying-relations","children":[{"level":4,"title":"Chaining orWhere Clauses After Relationships","slug":"chaining-orwhere-clauses-after-relationships","link":"#chaining-orwhere-clauses-after-relationships","children":[]},{"level":3,"title":"Relationship Methods Vs. Dynamic Properties","slug":"relationship-methods-vs-dynamic-properties","link":"#relationship-methods-vs-dynamic-properties","children":[]},{"level":3,"title":"Querying Relationship Existence","slug":"querying-relationship-existence","link":"#querying-relationship-existence","children":[{"level":4,"title":"Inline Relationship Existence Queries","slug":"inline-relationship-existence-queries","link":"#inline-relationship-existence-queries","children":[]}]},{"level":3,"title":"Querying Relationship Absence","slug":"querying-relationship-absence","link":"#querying-relationship-absence","children":[]},{"level":3,"title":"Querying Morph To Relationships","slug":"querying-morph-to-relationships","link":"#querying-morph-to-relationships","children":[{"level":4,"title":"Querying All Related Models","slug":"querying-all-related-models","link":"#querying-all-related-models","children":[]}]}]},{"level":2,"title":"Aggregating Related Models","slug":"aggregating-related-models","link":"#aggregating-related-models","children":[{"level":3,"title":"Counting Related Models","slug":"counting-related-models","link":"#counting-related-models","children":[{"level":4,"title":"Deferred Count Loading","slug":"deferred-count-loading","link":"#deferred-count-loading","children":[]},{"level":4,"title":"Relationship Counting & Custom Select Statements","slug":"relationship-counting-custom-select-statements","link":"#relationship-counting-custom-select-statements","children":[]}]},{"level":3,"title":"Other Aggregate Functions","slug":"other-aggregate-functions","link":"#other-aggregate-functions","children":[]},{"level":3,"title":"Counting Related Models On Morph To Relationships","slug":"counting-related-models-on-morph-to-relationships","link":"#counting-related-models-on-morph-to-relationships","children":[{"level":4,"title":"Deferred Count Loading","slug":"deferred-count-loading-1","link":"#deferred-count-loading-1","children":[]}]}]},{"level":2,"title":"Eager Loading","slug":"eager-loading","link":"#eager-loading","children":[{"level":4,"title":"Eager Loading Multiple Relationships","slug":"eager-loading-multiple-relationships","link":"#eager-loading-multiple-relationships","children":[]},{"level":4,"title":"Nested Eager Loading","slug":"nested-eager-loading","link":"#nested-eager-loading","children":[]},{"level":4,"title":"Nested Eager Loading morphTo Relationships","slug":"nested-eager-loading-morphto-relationships","link":"#nested-eager-loading-morphto-relationships","children":[]},{"level":4,"title":"Eager Loading Specific Columns","slug":"eager-loading-specific-columns","link":"#eager-loading-specific-columns","children":[]},{"level":4,"title":"Eager Loading By Default","slug":"eager-loading-by-default","link":"#eager-loading-by-default","children":[]},{"level":3,"title":"Constraining Eager Loads","slug":"constraining-eager-loads","link":"#constraining-eager-loads","children":[{"level":4,"title":"Constraining Eager Loading Of morphTo Relationships","slug":"constraining-eager-loading-of-morphto-relationships","link":"#constraining-eager-loading-of-morphto-relationships","children":[]},{"level":4,"title":"Constraining Eager Loads With Relationship Existence","slug":"constraining-eager-loads-with-relationship-existence","link":"#constraining-eager-loads-with-relationship-existence","children":[]}]},{"level":3,"title":"Lazy Eager Loading","slug":"lazy-eager-loading","link":"#lazy-eager-loading","children":[{"level":4,"title":"Nested Lazy Eager Loading & morphTo","slug":"nested-lazy-eager-loading-morphto","link":"#nested-lazy-eager-loading-morphto","children":[]}]},{"level":3,"title":"Preventing Lazy Loading","slug":"preventing-lazy-loading","link":"#preventing-lazy-loading","children":[]}]},{"level":2,"title":"Inserting & Updating Related Models","slug":"inserting-updating-related-models","link":"#inserting-updating-related-models","children":[{"level":3,"title":"The save Method","slug":"the-save-method","link":"#the-save-method","children":[{"level":4,"title":"Recursively Saving Models & Relationships","slug":"recursively-saving-models-relationships","link":"#recursively-saving-models-relationships","children":[]}]},{"level":3,"title":"The create Method","slug":"the-create-method","link":"#the-create-method","children":[]},{"level":3,"title":"Belongs To Relationships","slug":"belongs-to-relationships","link":"#belongs-to-relationships","children":[]},{"level":3,"title":"Many To Many Relationships","slug":"many-to-many-relationships-1","link":"#many-to-many-relationships-1","children":[{"level":4,"title":"Attaching / Detaching","slug":"attaching-detaching","link":"#attaching-detaching","children":[]},{"level":4,"title":"Syncing Associations","slug":"syncing-associations","link":"#syncing-associations","children":[]},{"level":4,"title":"Toggling Associations","slug":"toggling-associations","link":"#toggling-associations","children":[]},{"level":4,"title":"Updating A Record On The Intermediate Table","slug":"updating-a-record-on-the-intermediate-table","link":"#updating-a-record-on-the-intermediate-table","children":[]}]}]},{"level":2,"title":"Touching Parent Timestamps","slug":"touching-parent-timestamps","link":"#touching-parent-timestamps","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":41.44,"words":12431},"filePathRelative":"guide/eloquent-relationships.md","excerpt":"<h1> Eloquent: Relationships</h1>\\n<ul>\\n<li><a href=\\"#introduction\\">Introduction</a></li>\\n<li><a href=\\"#defining-relationships\\">Defining Relationships</a>\\n<ul>\\n<li><a href=\\"#one-to-one\\">One To One</a></li>\\n<li><a href=\\"#one-to-many\\">One To Many</a></li>\\n<li><a href=\\"#one-to-many-inverse\\">One To Many (Inverse) / Belongs To</a></li>\\n<li><a href=\\"#has-one-of-many\\">Has One Of Many</a></li>\\n<li><a href=\\"#has-one-through\\">Has One Through</a></li>\\n<li><a href=\\"#has-many-through\\">Has Many Through</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#many-to-many\\">Many To Many Relationships</a>\\n<ul>\\n<li><a href=\\"#retrieving-intermediate-table-columns\\">Retrieving Intermediate Table Columns</a></li>\\n<li><a href=\\"#filtering-queries-via-intermediate-table-columns\\">Filtering Queries Via Intermediate Table Columns</a></li>\\n<li><a href=\\"#ordering-queries-via-intermediate-table-columns\\">Ordering Queries Via Intermediate Table Columns</a></li>\\n<li><a href=\\"#defining-custom-intermediate-table-models\\">Defining Custom Intermediate Table Models</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#polymorphic-relationships\\">Polymorphic Relationships</a>\\n<ul>\\n<li><a href=\\"#one-to-one-polymorphic-relations\\">One To One</a></li>\\n<li><a href=\\"#one-to-many-polymorphic-relations\\">One To Many</a></li>\\n<li><a href=\\"#one-of-many-polymorphic-relations\\">One Of Many</a></li>\\n<li><a href=\\"#many-to-many-polymorphic-relations\\">Many To Many</a></li>\\n<li><a href=\\"#custom-polymorphic-types\\">Custom Polymorphic Types</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#dynamic-relationships\\">Dynamic Relationships</a></li>\\n<li><a href=\\"#querying-relations\\">Querying Relations</a>\\n<ul>\\n<li><a href=\\"#relationship-methods-vs-dynamic-properties\\">Relationship Methods Vs. Dynamic Properties</a></li>\\n<li><a href=\\"#querying-relationship-existence\\">Querying Relationship Existence</a></li>\\n<li><a href=\\"#querying-relationship-absence\\">Querying Relationship Absence</a></li>\\n<li><a href=\\"#querying-morph-to-relationships\\">Querying Morph To Relationships</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#aggregating-related-models\\">Aggregating Related Models</a>\\n<ul>\\n<li><a href=\\"#counting-related-models\\">Counting Related Models</a></li>\\n<li><a href=\\"#other-aggregate-functions\\">Other Aggregate Functions</a></li>\\n<li><a href=\\"#counting-related-models-on-morph-to-relationships\\">Counting Related Models On Morph To Relationships</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#eager-loading\\">Eager Loading</a>\\n<ul>\\n<li><a href=\\"#constraining-eager-loads\\">Constraining Eager Loads</a></li>\\n<li><a href=\\"#lazy-eager-loading\\">Lazy Eager Loading</a></li>\\n<li><a href=\\"#preventing-lazy-loading\\">Preventing Lazy Loading</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#inserting-and-updating-related-models\\">Inserting &amp; Updating Related Models</a>\\n<ul>\\n<li><a href=\\"#the-save-method\\">The <code>save</code> Method</a></li>\\n<li><a href=\\"#the-create-method\\">The <code>create</code> Method</a></li>\\n<li><a href=\\"#updating-belongs-to-relationships\\">Belongs To Relationships</a></li>\\n<li><a href=\\"#updating-many-to-many-relationships\\">Many To Many Relationships</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#touching-parent-timestamps\\">Touching Parent Timestamps</a></li>\\n</ul>"}');export{e as data};
