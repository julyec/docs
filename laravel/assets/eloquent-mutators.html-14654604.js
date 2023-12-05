const t=JSON.parse('{"key":"v-36c49126","path":"/guide/eloquent-mutators.html","title":"Eloquent: Mutators & Casting","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Introduction","slug":"introduction","link":"#introduction","children":[]},{"level":2,"title":"Accessors & Mutators","slug":"accessors-mutators","link":"#accessors-mutators","children":[{"level":3,"title":"Defining An Accessor","slug":"defining-an-accessor","link":"#defining-an-accessor","children":[{"level":4,"title":"Building Value Objects From Multiple Attributes","slug":"building-value-objects-from-multiple-attributes","link":"#building-value-objects-from-multiple-attributes","children":[]},{"level":4,"title":"Accessor Caching","slug":"accessor-caching","link":"#accessor-caching","children":[]}]},{"level":3,"title":"Defining A Mutator","slug":"defining-a-mutator","link":"#defining-a-mutator","children":[{"level":4,"title":"Mutating Multiple Attributes","slug":"mutating-multiple-attributes","link":"#mutating-multiple-attributes","children":[]}]}]},{"level":2,"title":"Attribute Casting","slug":"attribute-casting","link":"#attribute-casting","children":[{"level":4,"title":"Stringable Casting","slug":"stringable-casting","link":"#stringable-casting","children":[]},{"level":3,"title":"Array & JSON Casting","slug":"array-json-casting","link":"#array-json-casting","children":[{"level":4,"title":"Array Object & Collection Casting","slug":"array-object-collection-casting","link":"#array-object-collection-casting","children":[]}]},{"level":3,"title":"Date Casting","slug":"date-casting","link":"#date-casting","children":[{"level":4,"title":"Date Casting, Serialization, & Timezones","slug":"date-casting-serialization-timezones","link":"#date-casting-serialization-timezones","children":[]}]},{"level":3,"title":"Enum Casting","slug":"enum-casting","link":"#enum-casting","children":[{"level":4,"title":"Casting Arrays Of Enums","slug":"casting-arrays-of-enums","link":"#casting-arrays-of-enums","children":[]}]},{"level":3,"title":"Encrypted Casting","slug":"encrypted-casting","link":"#encrypted-casting","children":[{"level":4,"title":"Key Rotation","slug":"key-rotation","link":"#key-rotation","children":[]}]},{"level":3,"title":"Query Time Casting","slug":"query-time-casting","link":"#query-time-casting","children":[]}]},{"level":2,"title":"Custom Casts","slug":"custom-casts","link":"#custom-casts","children":[{"level":3,"title":"Value Object Casting","slug":"value-object-casting","link":"#value-object-casting","children":[{"level":4,"title":"Value Object Caching","slug":"value-object-caching","link":"#value-object-caching","children":[]}]},{"level":3,"title":"Array / JSON Serialization","slug":"array-json-serialization","link":"#array-json-serialization","children":[]},{"level":3,"title":"Inbound Casting","slug":"inbound-casting","link":"#inbound-casting","children":[]},{"level":3,"title":"Cast Parameters","slug":"cast-parameters","link":"#cast-parameters","children":[]},{"level":3,"title":"Castables","slug":"castables","link":"#castables","children":[{"level":4,"title":"Castables & Anonymous Cast Classes","slug":"castables-anonymous-cast-classes","link":"#castables-anonymous-cast-classes","children":[]}]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":13.51,"words":4053},"filePathRelative":"guide/eloquent-mutators.md","excerpt":"<h1> Eloquent: Mutators &amp; Casting</h1>\\n<ul>\\n<li><a href=\\"#introduction\\">Introduction</a></li>\\n<li><a href=\\"#accessors-and-mutators\\">Accessors &amp; Mutators</a>\\n<ul>\\n<li><a href=\\"#defining-an-accessor\\">Defining An Accessor</a></li>\\n<li><a href=\\"#defining-a-mutator\\">Defining A Mutator</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#attribute-casting\\">Attribute Casting</a>\\n<ul>\\n<li><a href=\\"#array-and-json-casting\\">Array &amp; JSON Casting</a></li>\\n<li><a href=\\"#date-casting\\">Date Casting</a></li>\\n<li><a href=\\"#enum-casting\\">Enum Casting</a></li>\\n<li><a href=\\"#encrypted-casting\\">Encrypted Casting</a></li>\\n<li><a href=\\"#query-time-casting\\">Query Time Casting</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#custom-casts\\">Custom Casts</a>\\n<ul>\\n<li><a href=\\"#value-object-casting\\">Value Object Casting</a></li>\\n<li><a href=\\"#array-json-serialization\\">Array / JSON Serialization</a></li>\\n<li><a href=\\"#inbound-casting\\">Inbound Casting</a></li>\\n<li><a href=\\"#cast-parameters\\">Cast Parameters</a></li>\\n<li><a href=\\"#castables\\">Castables</a></li>\\n</ul>\\n</li>\\n</ul>"}');export{t as data};