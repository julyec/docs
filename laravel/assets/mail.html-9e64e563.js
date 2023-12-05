const e=JSON.parse('{"key":"v-dccd73d4","path":"/guide/mail.html","title":"Mail","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Introduction","slug":"introduction","link":"#introduction","children":[{"level":3,"title":"Configuration","slug":"configuration","link":"#configuration","children":[]},{"level":3,"title":"Driver / Transport Prerequisites","slug":"driver-transport-prerequisites","link":"#driver-transport-prerequisites","children":[{"level":4,"title":"Mailgun Driver","slug":"mailgun-driver","link":"#mailgun-driver","children":[]},{"level":4,"title":"Postmark Driver","slug":"postmark-driver","link":"#postmark-driver","children":[]},{"level":4,"title":"SES Driver","slug":"ses-driver","link":"#ses-driver","children":[]},{"level":4,"title":"MailerSend Driver","slug":"mailersend-driver","link":"#mailersend-driver","children":[]}]},{"level":3,"title":"Failover Configuration","slug":"failover-configuration","link":"#failover-configuration","children":[]}]},{"level":2,"title":"Generating Mailables","slug":"generating-mailables","link":"#generating-mailables","children":[]},{"level":2,"title":"Writing Mailables","slug":"writing-mailables","link":"#writing-mailables","children":[{"level":3,"title":"Configuring The Sender","slug":"configuring-the-sender","link":"#configuring-the-sender","children":[{"level":4,"title":"Using The Envelope","slug":"using-the-envelope","link":"#using-the-envelope","children":[]},{"level":4,"title":"Using A Global from Address","slug":"using-a-global-from-address","link":"#using-a-global-from-address","children":[]}]},{"level":3,"title":"Configuring The View","slug":"configuring-the-view","link":"#configuring-the-view","children":[{"level":4,"title":"Plain Text Emails","slug":"plain-text-emails","link":"#plain-text-emails","children":[]}]},{"level":3,"title":"View Data","slug":"view-data","link":"#view-data","children":[{"level":4,"title":"Via Public Properties","slug":"via-public-properties","link":"#via-public-properties","children":[]},{"level":4,"title":"Via The with Parameter:","slug":"via-the-with-parameter","link":"#via-the-with-parameter","children":[]}]},{"level":3,"title":"Attachments","slug":"attachments","link":"#attachments","children":[{"level":4,"title":"Attaching Files From Disk","slug":"attaching-files-from-disk","link":"#attaching-files-from-disk","children":[]},{"level":4,"title":"Raw Data Attachments","slug":"raw-data-attachments","link":"#raw-data-attachments","children":[]}]},{"level":3,"title":"Inline Attachments","slug":"inline-attachments","link":"#inline-attachments","children":[{"level":4,"title":"Embedding Raw Data Attachments","slug":"embedding-raw-data-attachments","link":"#embedding-raw-data-attachments","children":[]}]},{"level":3,"title":"Attachable Objects","slug":"attachable-objects","link":"#attachable-objects","children":[]},{"level":3,"title":"Headers","slug":"headers","link":"#headers","children":[]},{"level":3,"title":"Tags & Metadata","slug":"tags-metadata","link":"#tags-metadata","children":[]},{"level":3,"title":"Customizing The Symfony Message","slug":"customizing-the-symfony-message","link":"#customizing-the-symfony-message","children":[]}]},{"level":2,"title":"Markdown Mailables","slug":"markdown-mailables","link":"#markdown-mailables","children":[{"level":3,"title":"Generating Markdown Mailables","slug":"generating-markdown-mailables","link":"#generating-markdown-mailables","children":[]},{"level":3,"title":"Writing Markdown Messages","slug":"writing-markdown-messages","link":"#writing-markdown-messages","children":[{"level":4,"title":"Button Component","slug":"button-component","link":"#button-component","children":[]},{"level":4,"title":"Panel Component","slug":"panel-component","link":"#panel-component","children":[]},{"level":4,"title":"Table Component","slug":"table-component","link":"#table-component","children":[]}]},{"level":3,"title":"Customizing The Components","slug":"customizing-the-components","link":"#customizing-the-components","children":[{"level":4,"title":"Customizing The CSS","slug":"customizing-the-css","link":"#customizing-the-css","children":[]}]}]},{"level":2,"title":"Sending Mail","slug":"sending-mail","link":"#sending-mail","children":[{"level":4,"title":"Looping Over Recipients","slug":"looping-over-recipients","link":"#looping-over-recipients","children":[]},{"level":4,"title":"Sending Mail Via A Specific Mailer","slug":"sending-mail-via-a-specific-mailer","link":"#sending-mail-via-a-specific-mailer","children":[]},{"level":3,"title":"Queueing Mail","slug":"queueing-mail","link":"#queueing-mail","children":[{"level":4,"title":"Queueing A Mail Message","slug":"queueing-a-mail-message","link":"#queueing-a-mail-message","children":[]},{"level":4,"title":"Delayed Message Queueing","slug":"delayed-message-queueing","link":"#delayed-message-queueing","children":[]},{"level":4,"title":"Pushing To Specific Queues","slug":"pushing-to-specific-queues","link":"#pushing-to-specific-queues","children":[]},{"level":4,"title":"Queueing By Default","slug":"queueing-by-default","link":"#queueing-by-default","children":[]},{"level":4,"title":"Queued Mailables & Database Transactions","slug":"queued-mailables-database-transactions","link":"#queued-mailables-database-transactions","children":[]}]}]},{"level":2,"title":"Rendering Mailables","slug":"rendering-mailables","link":"#rendering-mailables","children":[{"level":3,"title":"Previewing Mailables In The Browser","slug":"previewing-mailables-in-the-browser","link":"#previewing-mailables-in-the-browser","children":[]}]},{"level":2,"title":"Localizing Mailables","slug":"localizing-mailables","link":"#localizing-mailables","children":[{"level":3,"title":"User Preferred Locales","slug":"user-preferred-locales","link":"#user-preferred-locales","children":[]}]},{"level":2,"title":"Testing","slug":"testing","link":"#testing","children":[{"level":3,"title":"Testing Mailable Content","slug":"testing-mailable-content","link":"#testing-mailable-content","children":[]},{"level":3,"title":"Testing Mailable Sending","slug":"testing-mailable-sending","link":"#testing-mailable-sending","children":[]}]},{"level":2,"title":"Mail & Local Development","slug":"mail-local-development","link":"#mail-local-development","children":[{"level":4,"title":"Log Driver","slug":"log-driver","link":"#log-driver","children":[]},{"level":4,"title":"HELO / Mailtrap / Mailpit","slug":"helo-mailtrap-mailpit","link":"#helo-mailtrap-mailpit","children":[]},{"level":4,"title":"Using A Global to Address","slug":"using-a-global-to-address","link":"#using-a-global-to-address","children":[]}]},{"level":2,"title":"Events","slug":"events","link":"#events","children":[]},{"level":2,"title":"Custom Transports","slug":"custom-transports","link":"#custom-transports","children":[{"level":3,"title":"Additional Symfony Transports","slug":"additional-symfony-transports","link":"#additional-symfony-transports","children":[]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":22.42,"words":6727},"filePathRelative":"guide/mail.md","excerpt":"<h1> Mail</h1>\\n<ul>\\n<li><a href=\\"#introduction\\">Introduction</a>\\n<ul>\\n<li><a href=\\"#configuration\\">Configuration</a></li>\\n<li><a href=\\"#driver-prerequisites\\">Driver Prerequisites</a></li>\\n<li><a href=\\"#failover-configuration\\">Failover Configuration</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#generating-mailables\\">Generating Mailables</a></li>\\n<li><a href=\\"#writing-mailables\\">Writing Mailables</a>\\n<ul>\\n<li><a href=\\"#configuring-the-sender\\">Configuring The Sender</a></li>\\n<li><a href=\\"#configuring-the-view\\">Configuring The View</a></li>\\n<li><a href=\\"#view-data\\">View Data</a></li>\\n<li><a href=\\"#attachments\\">Attachments</a></li>\\n<li><a href=\\"#inline-attachments\\">Inline Attachments</a></li>\\n<li><a href=\\"#attachable-objects\\">Attachable Objects</a></li>\\n<li><a href=\\"#headers\\">Headers</a></li>\\n<li><a href=\\"#tags-and-metadata\\">Tags &amp; Metadata</a></li>\\n<li><a href=\\"#customizing-the-symfony-message\\">Customizing The Symfony Message</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#markdown-mailables\\">Markdown Mailables</a>\\n<ul>\\n<li><a href=\\"#generating-markdown-mailables\\">Generating Markdown Mailables</a></li>\\n<li><a href=\\"#writing-markdown-messages\\">Writing Markdown Messages</a></li>\\n<li><a href=\\"#customizing-the-components\\">Customizing The Components</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#sending-mail\\">Sending Mail</a>\\n<ul>\\n<li><a href=\\"#queueing-mail\\">Queueing Mail</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#rendering-mailables\\">Rendering Mailables</a>\\n<ul>\\n<li><a href=\\"#previewing-mailables-in-the-browser\\">Previewing Mailables In The Browser</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#localizing-mailables\\">Localizing Mailables</a></li>\\n<li><a href=\\"#testing-mailables\\">Testing</a>\\n<ul>\\n<li><a href=\\"#testing-mailable-content\\">Testing Mailable Content</a></li>\\n<li><a href=\\"#testing-mailable-sending\\">Testing Mailable Sending</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#mail-and-local-development\\">Mail &amp; Local Development</a></li>\\n<li><a href=\\"#events\\">Events</a></li>\\n<li><a href=\\"#custom-transports\\">Custom Transports</a>\\n<ul>\\n<li><a href=\\"#additional-symfony-transports\\">Additional Symfony Transports</a></li>\\n</ul>\\n</li>\\n</ul>"}');export{e as data};