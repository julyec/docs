const i=JSON.parse('{"key":"v-448a344b","path":"/guide/artisan.html","title":"Artisan Console","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Introduction","slug":"introduction","link":"#introduction","children":[{"level":4,"title":"Laravel Sail","slug":"laravel-sail","link":"#laravel-sail","children":[]},{"level":3,"title":"Tinker (REPL)","slug":"tinker-repl","link":"#tinker-repl","children":[{"level":4,"title":"Installation","slug":"installation","link":"#installation","children":[]},{"level":4,"title":"Usage","slug":"usage","link":"#usage","children":[]},{"level":4,"title":"Command Allow List","slug":"command-allow-list","link":"#command-allow-list","children":[]},{"level":4,"title":"Classes That Should Not Be Aliased","slug":"classes-that-should-not-be-aliased","link":"#classes-that-should-not-be-aliased","children":[]}]}]},{"level":2,"title":"Writing Commands","slug":"writing-commands","link":"#writing-commands","children":[{"level":3,"title":"Generating Commands","slug":"generating-commands","link":"#generating-commands","children":[]},{"level":3,"title":"Command Structure","slug":"command-structure","link":"#command-structure","children":[]},{"level":3,"title":"Closure Commands","slug":"closure-commands","link":"#closure-commands","children":[{"level":4,"title":"Type-Hinting Dependencies","slug":"type-hinting-dependencies","link":"#type-hinting-dependencies","children":[]},{"level":4,"title":"Closure Command Descriptions","slug":"closure-command-descriptions","link":"#closure-command-descriptions","children":[]}]},{"level":3,"title":"Isolatable Commands","slug":"isolatable-commands","link":"#isolatable-commands","children":[{"level":4,"title":"Lock ID","slug":"lock-id","link":"#lock-id","children":[]},{"level":4,"title":"Lock Expiration Time","slug":"lock-expiration-time","link":"#lock-expiration-time","children":[]}]}]},{"level":2,"title":"Defining Input Expectations","slug":"defining-input-expectations","link":"#defining-input-expectations","children":[{"level":3,"title":"Arguments","slug":"arguments","link":"#arguments","children":[]},{"level":3,"title":"Options","slug":"options","link":"#options","children":[{"level":4,"title":"Options With Values","slug":"options-with-values","link":"#options-with-values","children":[]},{"level":4,"title":"Option Shortcuts","slug":"option-shortcuts","link":"#option-shortcuts","children":[]}]},{"level":3,"title":"Input Arrays","slug":"input-arrays","link":"#input-arrays","children":[{"level":4,"title":"Option Arrays","slug":"option-arrays","link":"#option-arrays","children":[]}]},{"level":3,"title":"Input Descriptions","slug":"input-descriptions","link":"#input-descriptions","children":[]},{"level":3,"title":"Prompting For Missing Input","slug":"prompting-for-missing-input","link":"#prompting-for-missing-input","children":[]}]},{"level":2,"title":"Command I/O","slug":"command-i-o","link":"#command-i-o","children":[{"level":3,"title":"Retrieving Input","slug":"retrieving-input","link":"#retrieving-input","children":[]},{"level":3,"title":"Prompting For Input","slug":"prompting-for-input","link":"#prompting-for-input","children":[{"level":4,"title":"Asking For Confirmation","slug":"asking-for-confirmation","link":"#asking-for-confirmation","children":[]},{"level":4,"title":"Auto-Completion","slug":"auto-completion","link":"#auto-completion","children":[]},{"level":4,"title":"Multiple Choice Questions","slug":"multiple-choice-questions","link":"#multiple-choice-questions","children":[]}]},{"level":3,"title":"Writing Output","slug":"writing-output","link":"#writing-output","children":[{"level":4,"title":"Tables","slug":"tables","link":"#tables","children":[]},{"level":4,"title":"Progress Bars","slug":"progress-bars","link":"#progress-bars","children":[]}]}]},{"level":2,"title":"Registering Commands","slug":"registering-commands","link":"#registering-commands","children":[]},{"level":2,"title":"Programmatically Executing Commands","slug":"programmatically-executing-commands","link":"#programmatically-executing-commands","children":[{"level":4,"title":"Passing Array Values","slug":"passing-array-values","link":"#passing-array-values","children":[]},{"level":4,"title":"Passing Boolean Values","slug":"passing-boolean-values","link":"#passing-boolean-values","children":[]},{"level":4,"title":"Queueing Artisan Commands","slug":"queueing-artisan-commands","link":"#queueing-artisan-commands","children":[]},{"level":3,"title":"Calling Commands From Other Commands","slug":"calling-commands-from-other-commands","link":"#calling-commands-from-other-commands","children":[]}]},{"level":2,"title":"Signal Handling","slug":"signal-handling","link":"#signal-handling","children":[]},{"level":2,"title":"Stub Customization","slug":"stub-customization","link":"#stub-customization","children":[]},{"level":2,"title":"Events","slug":"events","link":"#events","children":[]}],"git":{"createdTime":1701780913000,"updatedTime":1701780913000,"contributors":[{"name":"Moments","email":"554676262@qq.com","commits":1}]},"readingTime":{"minutes":15.26,"words":4579},"filePathRelative":"guide/artisan.md","localizedDate":"December 5, 2023","excerpt":"<h1> Artisan Console</h1>\\n<ul>\\n<li><a href=\\"#introduction\\">Introduction</a>\\n<ul>\\n<li><a href=\\"#tinker\\">Tinker (REPL)</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#writing-commands\\">Writing Commands</a>\\n<ul>\\n<li><a href=\\"#generating-commands\\">Generating Commands</a></li>\\n<li><a href=\\"#command-structure\\">Command Structure</a></li>\\n<li><a href=\\"#closure-commands\\">Closure Commands</a></li>\\n<li><a href=\\"#isolatable-commands\\">Isolatable Commands</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#defining-input-expectations\\">Defining Input Expectations</a>\\n<ul>\\n<li><a href=\\"#arguments\\">Arguments</a></li>\\n<li><a href=\\"#options\\">Options</a></li>\\n<li><a href=\\"#input-arrays\\">Input Arrays</a></li>\\n<li><a href=\\"#input-descriptions\\">Input Descriptions</a></li>\\n<li><a href=\\"#prompting-for-missing-input\\">Prompting For Missing Input</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#command-io\\">Command I/O</a>\\n<ul>\\n<li><a href=\\"#retrieving-input\\">Retrieving Input</a></li>\\n<li><a href=\\"#prompting-for-input\\">Prompting For Input</a></li>\\n<li><a href=\\"#writing-output\\">Writing Output</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#registering-commands\\">Registering Commands</a></li>\\n<li><a href=\\"#programmatically-executing-commands\\">Programmatically Executing Commands</a>\\n<ul>\\n<li><a href=\\"#calling-commands-from-other-commands\\">Calling Commands From Other Commands</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#signal-handling\\">Signal Handling</a></li>\\n<li><a href=\\"#stub-customization\\">Stub Customization</a></li>\\n<li><a href=\\"#events\\">Events</a></li>\\n</ul>"}');export{i as data};
