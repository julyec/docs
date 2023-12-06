const e=JSON.parse('{"key":"v-31c2501f","path":"/guide/queries.html","title":"Database: Query Builder","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Introduction","slug":"introduction","link":"#introduction","children":[]},{"level":2,"title":"Running Database Queries","slug":"running-database-queries","link":"#running-database-queries","children":[{"level":4,"title":"Retrieving All Rows From A Table","slug":"retrieving-all-rows-from-a-table","link":"#retrieving-all-rows-from-a-table","children":[]},{"level":4,"title":"Retrieving A Single Row / Column From A Table","slug":"retrieving-a-single-row-column-from-a-table","link":"#retrieving-a-single-row-column-from-a-table","children":[]},{"level":4,"title":"Retrieving A List Of Column Values","slug":"retrieving-a-list-of-column-values","link":"#retrieving-a-list-of-column-values","children":[]},{"level":3,"title":"Chunking Results","slug":"chunking-results","link":"#chunking-results","children":[]},{"level":3,"title":"Streaming Results Lazily","slug":"streaming-results-lazily","link":"#streaming-results-lazily","children":[]},{"level":3,"title":"Aggregates","slug":"aggregates","link":"#aggregates","children":[{"level":4,"title":"Determining If Records Exist","slug":"determining-if-records-exist","link":"#determining-if-records-exist","children":[]}]}]},{"level":2,"title":"Select Statements","slug":"select-statements","link":"#select-statements","children":[{"level":4,"title":"Specifying A Select Clause","slug":"specifying-a-select-clause","link":"#specifying-a-select-clause","children":[]}]},{"level":2,"title":"Raw Expressions","slug":"raw-expressions","link":"#raw-expressions","children":[{"level":3,"title":"Raw Methods","slug":"raw-methods","link":"#raw-methods","children":[{"level":4,"title":"selectRaw","slug":"selectraw","link":"#selectraw","children":[]},{"level":4,"title":"whereRaw / orWhereRaw","slug":"whereraw-orwhereraw","link":"#whereraw-orwhereraw","children":[]},{"level":4,"title":"havingRaw / orHavingRaw","slug":"havingraw-orhavingraw","link":"#havingraw-orhavingraw","children":[]},{"level":4,"title":"orderByRaw","slug":"orderbyraw","link":"#orderbyraw","children":[]}]},{"level":3,"title":"groupByRaw","slug":"groupbyraw","link":"#groupbyraw","children":[]}]},{"level":2,"title":"Joins","slug":"joins","link":"#joins","children":[{"level":4,"title":"Inner Join Clause","slug":"inner-join-clause","link":"#inner-join-clause","children":[]},{"level":4,"title":"Left Join / Right Join Clause","slug":"left-join-right-join-clause","link":"#left-join-right-join-clause","children":[]},{"level":4,"title":"Cross Join Clause","slug":"cross-join-clause","link":"#cross-join-clause","children":[]},{"level":4,"title":"Advanced Join Clauses","slug":"advanced-join-clauses","link":"#advanced-join-clauses","children":[]},{"level":4,"title":"Subquery Joins","slug":"subquery-joins","link":"#subquery-joins","children":[]}]},{"level":2,"title":"Unions","slug":"unions","link":"#unions","children":[]},{"level":2,"title":"Basic Where Clauses","slug":"basic-where-clauses","link":"#basic-where-clauses","children":[{"level":3,"title":"Where Clauses","slug":"where-clauses","link":"#where-clauses","children":[]},{"level":3,"title":"Or Where Clauses","slug":"or-where-clauses","link":"#or-where-clauses","children":[]},{"level":3,"title":"Where Not Clauses","slug":"where-not-clauses","link":"#where-not-clauses","children":[]},{"level":3,"title":"JSON Where Clauses","slug":"json-where-clauses","link":"#json-where-clauses","children":[]},{"level":3,"title":"Additional Where Clauses","slug":"additional-where-clauses","link":"#additional-where-clauses","children":[]},{"level":3,"title":"Logical Grouping","slug":"logical-grouping","link":"#logical-grouping","children":[]},{"level":3,"title":"Advanced Where Clauses","slug":"advanced-where-clauses","link":"#advanced-where-clauses","children":[]},{"level":3,"title":"Where Exists Clauses","slug":"where-exists-clauses","link":"#where-exists-clauses","children":[]},{"level":3,"title":"Subquery Where Clauses","slug":"subquery-where-clauses","link":"#subquery-where-clauses","children":[]},{"level":3,"title":"Full Text Where Clauses","slug":"full-text-where-clauses","link":"#full-text-where-clauses","children":[]}]},{"level":2,"title":"Ordering, Grouping, Limit & Offset","slug":"ordering-grouping-limit-offset","link":"#ordering-grouping-limit-offset","children":[{"level":3,"title":"Ordering","slug":"ordering","link":"#ordering","children":[{"level":4,"title":"The orderBy Method","slug":"the-orderby-method","link":"#the-orderby-method","children":[]},{"level":4,"title":"The latest & oldest Methods","slug":"the-latest-oldest-methods","link":"#the-latest-oldest-methods","children":[]},{"level":4,"title":"Random Ordering","slug":"random-ordering","link":"#random-ordering","children":[]},{"level":4,"title":"Removing Existing Orderings","slug":"removing-existing-orderings","link":"#removing-existing-orderings","children":[]}]},{"level":3,"title":"Grouping","slug":"grouping","link":"#grouping","children":[{"level":4,"title":"The groupBy & having Methods","slug":"the-groupby-having-methods","link":"#the-groupby-having-methods","children":[]}]},{"level":3,"title":"Limit & Offset","slug":"limit-offset","link":"#limit-offset","children":[{"level":4,"title":"The skip & take Methods","slug":"the-skip-take-methods","link":"#the-skip-take-methods","children":[]}]}]},{"level":2,"title":"Conditional Clauses","slug":"conditional-clauses","link":"#conditional-clauses","children":[]},{"level":2,"title":"Insert Statements","slug":"insert-statements","link":"#insert-statements","children":[{"level":4,"title":"Auto-Incrementing IDs","slug":"auto-incrementing-ids","link":"#auto-incrementing-ids","children":[]},{"level":3,"title":"Upserts","slug":"upserts","link":"#upserts","children":[]}]},{"level":2,"title":"Update Statements","slug":"update-statements","link":"#update-statements","children":[{"level":4,"title":"Update Or Insert","slug":"update-or-insert","link":"#update-or-insert","children":[]},{"level":3,"title":"Updating JSON Columns","slug":"updating-json-columns","link":"#updating-json-columns","children":[]},{"level":3,"title":"Increment & Decrement","slug":"increment-decrement","link":"#increment-decrement","children":[]}]},{"level":2,"title":"Delete Statements","slug":"delete-statements","link":"#delete-statements","children":[{"level":4,"title":"Table Truncation & PostgreSQL","slug":"table-truncation-postgresql","link":"#table-truncation-postgresql","children":[]}]},{"level":2,"title":"Pessimistic Locking","slug":"pessimistic-locking","link":"#pessimistic-locking","children":[]},{"level":2,"title":"Debugging","slug":"debugging","link":"#debugging","children":[]}],"git":{"createdTime":1701780913000,"updatedTime":1701780913000,"contributors":[{"name":"Moments","email":"554676262@qq.com","commits":1}]},"readingTime":{"minutes":19.41,"words":5823},"filePathRelative":"guide/queries.md","localizedDate":"December 5, 2023","excerpt":"<h1> Database: Query Builder</h1>\\n<ul>\\n<li><a href=\\"#introduction\\">Introduction</a></li>\\n<li><a href=\\"#running-database-queries\\">Running Database Queries</a>\\n<ul>\\n<li><a href=\\"#chunking-results\\">Chunking Results</a></li>\\n<li><a href=\\"#streaming-results-lazily\\">Streaming Results Lazily</a></li>\\n<li><a href=\\"#aggregates\\">Aggregates</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#select-statements\\">Select Statements</a></li>\\n<li><a href=\\"#raw-expressions\\">Raw Expressions</a></li>\\n<li><a href=\\"#joins\\">Joins</a></li>\\n<li><a href=\\"#unions\\">Unions</a></li>\\n<li><a href=\\"#basic-where-clauses\\">Basic Where Clauses</a>\\n<ul>\\n<li><a href=\\"#where-clauses\\">Where Clauses</a></li>\\n<li><a href=\\"#or-where-clauses\\">Or Where Clauses</a></li>\\n<li><a href=\\"#where-not-clauses\\">Where Not Clauses</a></li>\\n<li><a href=\\"#json-where-clauses\\">JSON Where Clauses</a></li>\\n<li><a href=\\"#additional-where-clauses\\">Additional Where Clauses</a></li>\\n<li><a href=\\"#logical-grouping\\">Logical Grouping</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#advanced-where-clauses\\">Advanced Where Clauses</a>\\n<ul>\\n<li><a href=\\"#where-exists-clauses\\">Where Exists Clauses</a></li>\\n<li><a href=\\"#subquery-where-clauses\\">Subquery Where Clauses</a></li>\\n<li><a href=\\"#full-text-where-clauses\\">Full Text Where Clauses</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#ordering-grouping-limit-and-offset\\">Ordering, Grouping, Limit &amp; Offset</a>\\n<ul>\\n<li><a href=\\"#ordering\\">Ordering</a></li>\\n<li><a href=\\"#grouping\\">Grouping</a></li>\\n<li><a href=\\"#limit-and-offset\\">Limit &amp; Offset</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#conditional-clauses\\">Conditional Clauses</a></li>\\n<li><a href=\\"#insert-statements\\">Insert Statements</a>\\n<ul>\\n<li><a href=\\"#upserts\\">Upserts</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#update-statements\\">Update Statements</a>\\n<ul>\\n<li><a href=\\"#updating-json-columns\\">Updating JSON Columns</a></li>\\n<li><a href=\\"#increment-and-decrement\\">Increment &amp; Decrement</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#delete-statements\\">Delete Statements</a></li>\\n<li><a href=\\"#pessimistic-locking\\">Pessimistic Locking</a></li>\\n<li><a href=\\"#debugging\\">Debugging</a></li>\\n</ul>"}');export{e as data};