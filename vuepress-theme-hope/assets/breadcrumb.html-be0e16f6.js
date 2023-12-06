import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as l,c,b as e,d as t,e as a,a as s}from"./app-083c2955.js";const i={},u=e("code",null,"breadcrumb",-1),d=e("code",null,"true",-1),p=e("p",null,"Without any config, a Breadcrumb that matches the theme color is displayed at the top of the page content to help the reader understand the document structure.",-1),h=e("code",null,"breadcrumbIcon",-1),f=e("code",null,"true",-1),m=e("p",null,[t("[^support-page-config]: "),e("strong",null,"Page config support")],-1),g=e("pre",null,[e("code",null,`**Support local configuration**<Badge text="Support page config" /> means that the theme allows the configuration of the page to override the global configuration.

::: details Example

Take path navigation as an example:

This feature is enabled globally by default, that is, \`breadcrumb\` in theme options is \`true\` by default, and you can set \`breadcrumb: false\` in the Front Matter of a specific page to disable it locally.

Of course, you can also set the \`breadcrumb: false\` in theme options to disable it globally, and set \`breadcrumb: true\` in the Front Matter of a specific page to enable it locally.

:::
`)],-1);function b(_,y){const o=r("Badge");return l(),c("div",null,[e("p",null,[t("The theme adds Breadcrumb support, you can configure it using "),u,t(" in page frontmatter and theme options "),a(o,{text:"Support page config"}),t(" [^support-page-config], the default value is "),d,t(".")]),p,s(" more "),e("p",null,[t("You can also control the icon display of the path navigation using "),h,t(" field "),a(o,{text:"Support page config"}),t(", the default value is "),f,t(".")]),m,g])}const B=n(i,[["render",b],["__file","breadcrumb.html.vue"]]);export{B as default};
