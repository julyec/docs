import{_ as r}from"./app-8cdff07c.js";const o=async()=>{try{const{pageviewCount:e}=await r(()=>import("./pageview_vuepress-plugin-comment2-b25bb000.js"),[]);return e({serverURL:COMMENT_OPTIONS.serverURL})}catch{console.error("@waline/client is not installed!");return}};export{o as updatePageview};
