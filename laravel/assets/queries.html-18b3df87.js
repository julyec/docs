const e=JSON.parse('{"key":"v-3875a48e","path":"/zh/guide/queries.html","title":"数据库：查询生成器","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"介绍","slug":"介绍","link":"#介绍","children":[]},{"level":2,"title":"运行数据库查询","slug":"运行数据库查询","link":"#运行数据库查询","children":[{"level":4,"title":"从表中检索所有行","slug":"从表中检索所有行","link":"#从表中检索所有行","children":[]},{"level":4,"title":"从表中检索单行或单列","slug":"从表中检索单行或单列","link":"#从表中检索单行或单列","children":[]},{"level":4,"title":"获取某一列的值","slug":"获取某一列的值","link":"#获取某一列的值","children":[]},{"level":3,"title":"分块结果","slug":"分块结果","link":"#分块结果","children":[]},{"level":3,"title":"Lazily 流式传输结果","slug":"lazily-流式传输结果","link":"#lazily-流式传输结果","children":[]},{"level":3,"title":"聚合函数","slug":"聚合函数","link":"#聚合函数","children":[{"level":4,"title":"判断记录是否存在","slug":"判断记录是否存在","link":"#判断记录是否存在","children":[]}]}]},{"level":2,"title":"Select 语句","slug":"select-语句","link":"#select-语句","children":[{"level":4,"title":"指定一个 Select 语句","slug":"指定一个-select-语句","link":"#指定一个-select-语句","children":[]}]},{"level":2,"title":"原生表达式","slug":"原生表达式","link":"#原生表达式","children":[{"level":3,"title":"原生方法。","slug":"原生方法。","link":"#原生方法。","children":[{"level":4,"title":"selectRaw","slug":"selectraw","link":"#selectraw","children":[]},{"level":4,"title":"whereRaw / orWhereRaw","slug":"whereraw-orwhereraw","link":"#whereraw-orwhereraw","children":[]},{"level":4,"title":"havingRaw / orHavingRaw","slug":"havingraw-orhavingraw","link":"#havingraw-orhavingraw","children":[]},{"level":4,"title":"orderByRaw","slug":"orderbyraw","link":"#orderbyraw","children":[]}]},{"level":3,"title":"groupByRaw","slug":"groupbyraw","link":"#groupbyraw","children":[]}]},{"level":2,"title":"Joins","slug":"joins","link":"#joins","children":[{"level":4,"title":"Inner Join 语句","slug":"inner-join-语句","link":"#inner-join-语句","children":[]},{"level":4,"title":"Left Join / Right Join 语句","slug":"left-join-right-join-语句","link":"#left-join-right-join-语句","children":[]},{"level":4,"title":"Cross Join 语句","slug":"cross-join-语句","link":"#cross-join-语句","children":[]},{"level":4,"title":"高级 Join 语句","slug":"高级-join-语句","link":"#高级-join-语句","children":[]},{"level":4,"title":"子连接查询","slug":"子连接查询","link":"#子连接查询","children":[]}]},{"level":2,"title":"联合","slug":"联合","link":"#联合","children":[]},{"level":2,"title":"基础的 Where 语句","slug":"基础的-where-语句","link":"#基础的-where-语句","children":[{"level":3,"title":"Where 语句","slug":"where-语句","link":"#where-语句","children":[]},{"level":3,"title":"Or Where 语句","slug":"or-where-语句","link":"#or-where-语句","children":[]},{"level":3,"title":"Where Not 语句","slug":"where-not-语句","link":"#where-not-语句","children":[]},{"level":3,"title":"JSON Where 语句","slug":"json-where-语句","link":"#json-where-语句","children":[]},{"level":3,"title":"其他 Where 语句","slug":"其他-where-语句","link":"#其他-where-语句","children":[]},{"level":3,"title":"逻辑分组","slug":"逻辑分组","link":"#逻辑分组","children":[]},{"level":3,"title":"高级 Where 语句","slug":"高级-where-语句","link":"#高级-where-语句","children":[]},{"level":3,"title":"Where Exists 语句","slug":"where-exists-语句","link":"#where-exists-语句","children":[]},{"level":3,"title":"子查询 Where 语句","slug":"子查询-where-语句","link":"#子查询-where-语句","children":[]},{"level":3,"title":"全文 Where 子句","slug":"全文-where-子句","link":"#全文-where-子句","children":[]}]},{"level":2,"title":"Ordering, Grouping, Limit & Offset","slug":"ordering-grouping-limit-offset","link":"#ordering-grouping-limit-offset","children":[{"level":3,"title":"排序","slug":"排序","link":"#排序","children":[{"level":4,"title":"orderBy 方法","slug":"orderby-方法","link":"#orderby-方法","children":[]},{"level":4,"title":"latest 和 oldest 方法","slug":"latest-和-oldest-方法","link":"#latest-和-oldest-方法","children":[]},{"level":4,"title":"随机排序","slug":"随机排序","link":"#随机排序","children":[]},{"level":4,"title":"移除已存在的排序","slug":"移除已存在的排序","link":"#移除已存在的排序","children":[]}]},{"level":3,"title":"分组","slug":"分组","link":"#分组","children":[{"level":4,"title":"groupBy 和 having 方法","slug":"groupby-和-having-方法","link":"#groupby-和-having-方法","children":[]}]},{"level":3,"title":"限制和偏移量","slug":"限制和偏移量","link":"#限制和偏移量","children":[{"level":4,"title":"skip 和 take 方法","slug":"skip-和-take-方法","link":"#skip-和-take-方法","children":[]}]}]},{"level":2,"title":"条件语句","slug":"条件语句","link":"#条件语句","children":[]},{"level":2,"title":"插入语句","slug":"插入语句","link":"#插入语句","children":[{"level":4,"title":"自增 IDs","slug":"自增-ids","link":"#自增-ids","children":[]},{"level":3,"title":"更新插入","slug":"更新插入","link":"#更新插入","children":[]}]},{"level":2,"title":"更新语句","slug":"更新语句","link":"#更新语句","children":[{"level":4,"title":"更新或插入","slug":"更新或插入","link":"#更新或插入","children":[]},{"level":3,"title":"更新 JSON 字段","slug":"更新-json-字段","link":"#更新-json-字段","children":[]},{"level":3,"title":"自增与自减","slug":"自增与自减","link":"#自增与自减","children":[]}]},{"level":2,"title":"删除语句","slug":"删除语句","link":"#删除语句","children":[{"level":4,"title":"截断表 & PostgreSQL","slug":"截断表-postgresql","link":"#截断表-postgresql","children":[]}]},{"level":2,"title":"悲观锁","slug":"悲观锁","link":"#悲观锁","children":[]},{"level":2,"title":"调试","slug":"调试","link":"#调试","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":25.01,"words":7502},"filePathRelative":"zh/guide/queries.md","excerpt":"<h1> 数据库：查询生成器</h1>\\n<ul>\\n<li><a href=\\"#introduction\\">介绍</a></li>\\n<li><a href=\\"#running-database-queries\\">运行数据库查询</a></li>\\n<li><a href=\\"#chunking-results\\">分块结果</a></li>\\n<li><a href=\\"#streaming-results-lazily\\">延迟流式处理结果</a></li>\\n<li><a href=\\"#aggregates\\">聚合</a></li>\\n<li><a href=\\"#select-statements\\">Select 语句</a></li>\\n<li><a href=\\"#raw-expressions\\">原始表达式</a></li>\\n<li><a href=\\"#joins\\">Joins</a></li>\\n<li><a href=\\"#unions\\">Unions</a></li>\\n<li><a href=\\"#basic-where-clauses\\">基础 Where 语句</a></li>\\n<li><a href=\\"#where-clauses\\">条件查询语句</a></li>\\n<li><a href=\\"#or-where-clauses\\">Or Where 语句</a></li>\\n<li><a href=\\"#where-not-clauses\\">Where Not 语句</a></li>\\n<li><a href=\\"#json-where-clauses\\">JSON Where 语句</a></li>\\n<li><a href=\\"#additional-where-clauses\\">附加 Where 语句</a></li>\\n<li><a href=\\"#logical-grouping\\">逻辑分组</a></li>\\n<li><a href=\\"#advanced-where-clauses\\">高级 Where 语句</a></li>\\n<li><a href=\\"#where-exists-clauses\\">Where Exists 语句</a></li>\\n<li><a href=\\"#subquery-where-clauses\\">子查询 Where 语句</a></li>\\n<li><a href=\\"#full-text-where-clauses\\">全文 Where 子句</a></li>\\n<li><a href=\\"#ordering-grouping-limit-and-offset\\">排序、分组、限制和偏移量</a></li>\\n<li><a href=\\"#ordering\\">排序</a></li>\\n<li><a href=\\"#grouping\\">分组</a></li>\\n<li><a href=\\"#limit-and-offset\\">Limit（限制） &amp; Offset（偏移量）</a></li>\\n<li><a href=\\"#conditional-clauses\\">条件语句</a></li>\\n<li><a href=\\"#insert-statements\\">插入语句</a></li>\\n<li><a href=\\"#upserts\\">更新插入</a></li>\\n<li><a href=\\"#update-statements\\">更新语句</a></li>\\n<li><a href=\\"#updating-json-columns\\">更新 JSON 列</a></li>\\n<li><a href=\\"#increment-and-decrement\\">自增和自减</a></li>\\n<li><a href=\\"#delete-statements\\">删除语句</a></li>\\n<li><a href=\\"#pessimistic-locking\\">悲观锁</a></li>\\n<li><a href=\\"#debugging\\">调试</a></li>\\n</ul>"}');export{e as data};