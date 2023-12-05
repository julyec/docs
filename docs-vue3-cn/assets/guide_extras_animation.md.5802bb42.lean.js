import{_ as s,H as n,h as a,o as t,c as o,e as l,O as e,P as p,p as r,m as c,r as i,k as y,A as u,t as F,x as D,d as h,q as C,v as f,j as A,a as d}from"./chunks/framework.ee9e66be.js";import{c as m,g}from"./chunks/commonjsHelpers.fb96ccea.js";import{g as v}from"./chunks/index.9a14b7c7.js";var b,w={exports:{}};b=w,function(){var s,n,a,t,o,l,e,p,r,c,i,y,u,F,D,h,C,f,A,d,m,g,v,w,x,T,S,k,M,q,E,j,z,R,V,B,I,H,X,Y,L,W,Z,P,G,_,U,N,O,K,Q,J,$,ss,ns,as,ts,os,ls,es,ps,rs,cs=function(s,n){return function(){return s.apply(n,arguments)}};E=function(){return"visible"===document.visibilityState||null!=k.tests},ls=[],"undefined"!=typeof document&&null!==document&&document.addEventListener("visibilitychange",(function(){var s,n,a,t;for(t=[],n=0,a=ls.length;n<a;n++)s=ls[n],t.push(s(E()));return t})),B=function(s){return ls.push(s)},w=function(s){var n,a,t;for(n in a={},s)t=s[n],a[n]=t;return a},g=function(s){var n;return n={},function(){var a,t,o,l;for(a="",o=0,l=arguments.length;o<l;o++)a+=arguments[o].toString()+",";return(t=n[a])||(n[a]=t=s.apply(this,arguments)),t}},V=function(s){return function(n){var a,t,o;return n instanceof Array||n instanceof NodeList||n instanceof HTMLCollection?(o=function(){var o,l,e;for(e=[],t=o=0,l=n.length;0<=l?o<l:o>l;t=0<=l?++o:--o)(a=Array.prototype.slice.call(arguments,1)).splice(0,0,n[t]),e.push(s.apply(this,a));return e}.apply(this,arguments),o):s.apply(this,arguments)}},f=function(s,n){var a,t,o;for(a in o=[],n)t=n[a],o.push(null!=s[a]?s[a]:s[a]=t);return o},A=function(s,n){var a,t,o;if(null!=s.style)return d(s,n);for(a in o=[],n)t=n[a],o.push(s[a]=t.format());return o},d=function(s,n){var a,t,o,l,e;for(t in n=I(n),l=[],a=j(s),n)e=n[t],as.contains(t)?l.push([t,e]):(null!=e.format&&(e=e.format()),"number"==typeof e&&(e=""+e+os(t,e)),null!=s.hasAttribute&&s.hasAttribute(t)?s.setAttribute(t,e):null!=s.style&&(s.style[X(t)]=e),t in s&&(s[t]=e));if(l.length>0)return a?((o=new c).applyProperties(l),s.setAttribute("transform",o.decompose().format())):(e=l.map((function(s){return ts(s[0],s[1])})).join(" "),s.style[X("transform")]=e)},j=function(s){var n,a;return"undefined"!=typeof SVGElement&&null!==SVGElement&&"undefined"!=typeof SVGSVGElement&&null!==SVGSVGElement?s instanceof SVGElement&&!(s instanceof SVGSVGElement):null!=(n=null!=(a=k.tests)&&"function"==typeof a.isSVG?a.isSVG(s):void 0)&&n},W=function(s,n){var a;return a=Math.pow(10,n),Math.round(s*a)/a},i=function(){function s(s){var n,a,t;for(this.obj={},a=0,t=s.length;a<t;a++)n=s[a],this.obj[n]=1}return s.prototype.contains=function(s){return 1===this.obj[s]},s}(),ns=function(s){return s.replace(/([A-Z])/g,(function(s){return"-"+s.toLowerCase()}))},Y=new i("marginTop,marginLeft,marginBottom,marginRight,paddingTop,paddingLeft,paddingBottom,paddingRight,top,left,bottom,right,translateX,translateY,translateZ,perspectiveX,perspectiveY,perspectiveZ,width,height,maxWidth,maxHeight,minWidth,minHeight,borderRadius".split(",")),S=new i("rotate,rotateX,rotateY,rotateZ,skew,skewX,skewY,skewZ".split(",")),as=new i("translate,translateX,translateY,translateZ,scale,scaleX,scaleY,scaleZ,rotate,rotateX,rotateY,rotateZ,rotateC,rotateCX,rotateCY,skew,skewX,skewY,skewZ,perspective".split(",")),Q=new i("accent-height,ascent,azimuth,baseFrequency,baseline-shift,bias,cx,cy,d,diffuseConstant,divisor,dx,dy,elevation,filterRes,fx,fy,gradientTransform,height,k1,k2,k3,k4,kernelMatrix,kernelUnitLength,letter-spacing,limitingConeAngle,markerHeight,markerWidth,numOctaves,order,overline-position,overline-thickness,pathLength,points,pointsAtX,pointsAtY,pointsAtZ,r,radius,rx,ry,seed,specularConstant,specularExponent,stdDeviation,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,surfaceScale,target,targetX,targetY,transform,underline-position,underline-thickness,viewBox,width,x,x1,x2,y,y1,y2,z".split(",")),os=function(s,n){return"number"!=typeof n?"":Y.contains(s)?"px":S.contains(s)?"deg":""},ts=function(s,n){var a,t;return null!=(a=(""+n).match(/^([0-9.-]*)([^0-9]*)$/))?(n=a[1],t=a[2]):n=parseFloat(n),n=W(parseFloat(n),10),null!=t&&""!==t||(t=os(s,n)),s+"("+n+t+")"},I=function(s){var n,a,t,o,l,e,p,r;for(o in t={},s)if(l=s[o],as.contains(o))if((a=o.match(/(translate|rotateC|rotate|skew|scale|perspective)(X|Y|Z|)/))&&a[2].length>0)t[o]=l;else for(e=0,p=(r=["X","Y","Z"]).length;e<p;e++)n=r[e],t[a[1]+n]=l;else t[o]=l;return t},T=function(s){var n;return""+(n="opacity"===s?1:0)+os(s,n)},M=function(s,n){var a,t,o,l,e,p,i,y,u,D,h;if(l={},a=j(s),null!=s.style)for(e=window.getComputedStyle(s,null),i=0,u=n.length;i<u;i++)t=n[i],as.contains(t)?null==l.transform&&(o=a?new c(null!=(h=s.transform.baseVal.consolidate())?h.matrix:void 0):r.fromTransform(e[X("transform")]),l.transform=o.decompose()):(null!=(p=null!=s.hasAttribute&&s.hasAttribute(t)?s.getAttribute(t):t in s?s[t]:e[t])&&"d"!==t||!Q.contains(t)||(p=s.getAttribute(t)),""!==p&&null!=p||(p=T(t)),l[t]=x(p));else for(y=0,D=n.length;y<D;y++)l[t=n[y]]=x(s[t]);return F(s,l),l},F=function(s,n){var a,t;for(t in n)(a=n[t])instanceof l&&null!=s.style&&t in s.style&&(a=new p([a,os(t,0)])),n[t]=a;return n},x=function(s){var n,a,o,r;for(o=0,r=(a=[t,e,l,p]).length;o<r;o++)if(null!=(n=a[o].create(s)))return n;return null},p=function(){function s(s){this.parts=s,this.format=cs(this.format,this),this.interpolate=cs(this.interpolate,this)}return s.prototype.interpolate=function(n,a){var t,o,l,e,p,r;for(e=this.parts,t=n.parts,l=[],o=p=0,r=Math.min(e.length,t.length);0<=r?p<r:p>r;o=0<=r?++p:--p)null!=e[o].interpolate?l.push(e[o].interpolate(t[o],a)):l.push(e[o]);return new s(l)},s.prototype.format=function(){return this.parts.map((function(s){return null!=s.format?s.format():s})).join("")},s.create=function(n){var a,t,e,p,r,c,i,y,u,F,D;for(n=""+n,e=[],y=0,F=(i=[{re:/(#[a-f\d]{3,6})/gi,klass:o,parse:function(s){return s}},{re:/(rgba?\([0-9.]*, ?[0-9.]*, ?[0-9.]*(?:, ?[0-9.]*)?\))/gi,klass:o,parse:function(s){return s}},{re:/([-+]?[\d.]+)/gi,klass:l,parse:parseFloat}]).length;y<F;y++)for(r=(c=i[y]).re;t=r.exec(n);)e.push({index:t.index,length:t[1].length,interpolable:c.klass.create(c.parse(t[1]))});for(p=[],a=0,u=0,D=(e=e.sort((function(s,n){return s.index>n.index?1:-1}))).length;u<D;u++)(t=e[u]).index<a||(t.index>a&&p.push(n.substring(a,t.index)),p.push(t.interpolable),a=t.index+t.length);return a<n.length&&p.push(n.substring(a)),new s(p)},s}(),e=function(){function s(s){this.format=cs(this.format,this),this.interpolate=cs(this.interpolate,this),this.obj=s}return s.prototype.interpolate=function(n,a){var t,o,l,e,p;for(o in e=this.obj,t=n.obj,l={},e)null!=(p=e[o]).interpolate?l[o]=p.interpolate(t[o],a):l[o]=p;return new s(l)},s.prototype.format=function(){return this.obj},s.create=function(n){var a,t,o;if(n instanceof Object){for(a in t={},n)o=n[a],t[a]=x(o);return new s(t)}return null},s}(),l=function(){function s(s){this.format=cs(this.format,this),this.interpolate=cs(this.interpolate,this),this.value=parseFloat(s)}return s.prototype.interpolate=function(n,a){var t;return t=this.value,new s((n.value-t)*a+t)},s.prototype.format=function(){return W(this.value,5)},s.create=function(n){return"number"==typeof n?new s(n):null},s}(),t=function(){function s(s){this.values=s,this.format=cs(this.format,this),this.interpolate=cs(this.interpolate,this)}return s.prototype.interpolate=function(n,a){var t,o,l,e,p,r;for(e=this.values,t=n.values,l=[],o=p=0,r=Math.min(e.length,t.length);0<=r?p<r:p>r;o=0<=r?++p:--p)null!=e[o].interpolate?l.push(e[o].interpolate(t[o],a)):l.push(e[o]);return new s(l)},s.prototype.format=function(){return this.values.map((function(s){return null!=s.format?s.format():s}))},s.createFromArray=function(n){return new s(n.map((function(s){return x(s)||s})).filter((function(s){return null!=s})))},s.create=function(n){return n instanceof Array?s.createFromArray(n):null},s}(),s=function(){function s(s,n){this.rgb=null!=s?s:{},this.format=n,this.toRgba=cs(this.toRgba,this),this.toRgb=cs(this.toRgb,this),this.toHex=cs(this.toHex,this)}return s.fromHex=function(n){var a,t;return null!=(a=n.match(/^#([a-f\d]{1})([a-f\d]{1})([a-f\d]{1})$/i))&&(n="#"+a[1]+a[1]+a[2]+a[2]+a[3]+a[3]),null!=(t=n.match(/^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i))?new s({r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16),a:1},"hex"):null},s.fromRgb=function(n){var a,t;return null!=(a=n.match(/^rgba?\(([0-9.]*), ?([0-9.]*), ?([0-9.]*)(?:, ?([0-9.]*))?\)$/))?new s({r:parseFloat(a[1]),g:parseFloat(a[2]),b:parseFloat(a[3]),a:parseFloat(null!=(t=a[4])?t:1)},null!=a[4]?"rgba":"rgb"):null},s.componentToHex=function(s){var n;return 1===(n=s.toString(16)).length?"0"+n:n},s.prototype.toHex=function(){return"#"+s.componentToHex(this.rgb.r)+s.componentToHex(this.rgb.g)+s.componentToHex(this.rgb.b)},s.prototype.toRgb=function(){return"rgb("+this.rgb.r+", "+this.rgb.g+", "+this.rgb.b+")"},s.prototype.toRgba=function(){return"rgba("+this.rgb.r+", "+this.rgb.g+", "+this.rgb.b+", "+this.rgb.a+")"},s}(),o=function(){function n(s){this.color=s,this.format=cs(this.format,this),this.interpolate=cs(this.interpolate,this)}return n.prototype.interpolate=function(a,t){var o,l,e,p,r,c,i,y;for(p=this.color,o=a.color,e={},c=0,i=(y=["r","g","b"]).length;c<i;c++)l=y[c],r=Math.round((o.rgb[l]-p.rgb[l])*t+p.rgb[l]),e[l]=Math.min(255,Math.max(0,r));return l="a",r=W((o.rgb[l]-p.rgb[l])*t+p.rgb[l],5),e[l]=Math.min(1,Math.max(0,r)),new n(new s(e,o.format))},n.prototype.format=function(){return"hex"===this.color.format?this.color.toHex():"rgb"===this.color.format?this.color.toRgb():"rgba"===this.color.format?this.color.toRgba():void 0},n.create=function(a){var t;if("string"==typeof a)return null!=(t=s.fromHex(a)||s.fromRgb(a))?new n(t):null},n}(),a=function(){function s(s){this.props=s,this.applyRotateCenter=cs(this.applyRotateCenter,this),this.format=cs(this.format,this),this.interpolate=cs(this.interpolate,this)}return s.prototype.interpolate=function(n,a){var t,o,l,e,p,r,c,i,y,u,F,D;for(l={},e=0,i=(u=["translate","scale","rotate"]).length;e<i;e++)for(l[o=u[e]]=[],t=p=0,F=this.props[o].length;0<=F?p<F:p>F;t=0<=F?++p:--p)l[o][t]=(n.props[o][t]-this.props[o][t])*a+this.props[o][t];for(t=r=1;r<=2;t=++r)l.rotate[t]=n.props.rotate[t];for(c=0,y=(D=["skew"]).length;c<y;c++)l[o=D[c]]=(n.props[o]-this.props[o])*a+this.props[o];return new s(l)},s.prototype.format=function(){return"translate("+this.props.translate.join(",")+") rotate("+this.props.rotate.join(",")+") skewX("+this.props.skew+") scale("+this.props.scale.join(",")+")"},s.prototype.applyRotateCenter=function(s){var n,a,t,o,l;for(a=(a=(a=(a=m.createSVGMatrix()).translate(s[0],s[1])).rotate(this.props.rotate[0])).translate(-s[0],-s[1]),t=new c(a).decompose().props.translate,l=[],n=o=0;o<=1;n=++o)l.push(this.props.translate[n]-=t[n]);return l},s}(),m="undefined"!=typeof document&&null!==document?document.createElementNS("http://www.w3.org/2000/svg","svg"):void 0,c=function(){function s(s){this.m=s,this.applyProperties=cs(this.applyProperties,this),this.decompose=cs(this.decompose,this),this.m||(this.m=m.createSVGMatrix())}return s.prototype.decompose=function(){var s,n,t,o,l;return o=new y([this.m.a,this.m.b]),l=new y([this.m.c,this.m.d]),s=o.length(),t=o.dot(l),o=o.normalize(),n=l.combine(o,1,-t).length(),new a({translate:[this.m.e,this.m.f],rotate:[180*Math.atan2(this.m.b,this.m.a)/Math.PI,this.rotateCX,this.rotateCY],scale:[s,n],skew:t/n*180/Math.PI})},s.prototype.applyProperties=function(s){var n,a,t,o,l,e,p,r;for(n={},l=0,e=s.length;l<e;l++)n[(t=s[l])[0]]=t[1];for(a in n)o=n[a],"translateX"===a?this.m=this.m.translate(o,0):"translateY"===a?this.m=this.m.translate(0,o):"scaleX"===a?this.m=this.m.scaleNonUniform(o,1):"scaleY"===a?this.m=this.m.scaleNonUniform(1,o):"rotateZ"===a?this.m=this.m.rotate(o):"skewX"===a?this.m=this.m.skewX(o):"skewY"===a&&(this.m=this.m.skewY(o));return this.rotateCX=null!=(p=n.rotateCX)?p:0,this.rotateCY=null!=(r=n.rotateCY)?r:0},s}(),y=function(){function s(s){this.els=s,this.combine=cs(this.combine,this),this.normalize=cs(this.normalize,this),this.length=cs(this.length,this),this.cross=cs(this.cross,this),this.dot=cs(this.dot,this),this.e=cs(this.e,this)}return s.prototype.e=function(s){return s<1||s>this.els.length?null:this.els[s-1]},s.prototype.dot=function(s){var n,a,t;if(n=s.els||s,t=0,(a=this.els.length)!==n.length)return null;for(a+=1;--a;)t+=this.els[a-1]*n[a-1];return t},s.prototype.cross=function(n){var a,t;return t=n.els||n,3!==this.els.length||3!==t.length?null:new s([(a=this.els)[1]*t[2]-a[2]*t[1],a[2]*t[0]-a[0]*t[2],a[0]*t[1]-a[1]*t[0]])},s.prototype.length=function(){var s,n,a,t,o;for(s=0,a=0,t=(o=this.els).length;a<t;a++)n=o[a],s+=Math.pow(n,2);return Math.sqrt(s)},s.prototype.normalize=function(){var n,a,t,o,l;for(a in t=this.length(),o=[],l=this.els)n=l[a],o[a]=n/t;return new s(o)},s.prototype.combine=function(n,a,t){var o,l,e,p;for(l=[],o=e=0,p=this.els.length;0<=p?e<p:e>p;o=0<=p?++e:--e)l[o]=a*this.els[o]+t*n.els[o];return new s(l)},s}(),n=function(){function s(){this.toMatrix=cs(this.toMatrix,this),this.format=cs(this.format,this),this.interpolate=cs(this.interpolate,this)}return s.prototype.interpolate=function(n,a,t){var o,l,e,p,r,c,i,y,u,F,D,h,C,f,A,d,m,g;for(null==t&&(t=null),e=this,l=new s,h=0,d=(m=["translate","scale","skew","perspective"]).length;h<d;h++)for(l[i=m[h]]=[],p=C=0,g=e[i].length-1;0<=g?C<=g:C>=g;p=0<=g?++C:--C)null==t||t.indexOf(i)>-1||t.indexOf(""+i+["x","y","z"][p])>-1?l[i][p]=(n[i][p]-e[i][p])*a+e[i][p]:l[i][p]=e[i][p];if(null==t||-1!==t.indexOf("rotate")){if(y=e.quaternion,u=n.quaternion,(o=y[0]*u[0]+y[1]*u[1]+y[2]*u[2]+y[3]*u[3])<0){for(p=f=0;f<=3;p=++f)y[p]=-y[p];o=-o}for(o+1>.05?1-o>=.05?(D=Math.acos(o),c=1/Math.sin(D),F=Math.sin(D*(1-a))*c,r=Math.sin(D*a)*c):(F=1-a,r=a):(u[0]=-y[1],u[1]=y[0],u[2]=-y[3],u[3]=y[2],F=Math.sin(piDouble*(.5-a)),r=Math.sin(piDouble*a)),l.quaternion=[],p=A=0;A<=3;p=++A)l.quaternion[p]=y[p]*F+u[p]*r}else l.quaternion=e.quaternion;return l},s.prototype.format=function(){return this.toMatrix().toString()},s.prototype.toMatrix=function(){var s,n,a,t,o,l,e,p,c,i,y,u,F,D,h,C;for(s=this,o=r.I(4),n=F=0;F<=3;n=++F)o.els[n][3]=s.perspective[n];for(i=(l=s.quaternion)[0],y=l[1],u=l[2],c=l[3],e=s.skew,t=[[1,0],[2,0],[2,1]],n=D=2;D>=0;n=--D)e[n]&&((p=r.I(4)).els[t[n][0]][t[n][1]]=e[n],o=o.multiply(p));for(o=o.multiply(new r([[1-2*(y*y+u*u),2*(i*y-u*c),2*(i*u+y*c),0],[2*(i*y+u*c),1-2*(i*i+u*u),2*(y*u-i*c),0],[2*(i*u-y*c),2*(y*u+i*c),1-2*(i*i+y*y),0],[0,0,0,1]])),n=h=0;h<=2;n=++h){for(a=C=0;C<=2;a=++C)o.els[n][a]*=s.scale[n];o.els[3][n]=s.translate[n]}return o},s}(),r=function(){function s(s){this.els=s,this.toString=cs(this.toString,this),this.decompose=cs(this.decompose,this),this.inverse=cs(this.inverse,this),this.augment=cs(this.augment,this),this.toRightTriangular=cs(this.toRightTriangular,this),this.transpose=cs(this.transpose,this),this.multiply=cs(this.multiply,this),this.dup=cs(this.dup,this),this.e=cs(this.e,this)}return s.prototype.e=function(s,n){return s<1||s>this.els.length||n<1||n>this.els[0].length?null:this.els[s-1][n-1]},s.prototype.dup=function(){return new s(this.els)},s.prototype.multiply=function(n){var a,t,o,l,e,p,r,c,i,y,u,F,D;for(F=!!n.modulus,void 0===(a=n.els||n)[0][0]&&(a=new s(a).els),r=y=this.els.length,c=a[0].length,o=this.els[0].length,l=[],y+=1;--y;)for(l[e=r-y]=[],u=c,u+=1;--u;){for(p=c-u,D=0,i=o,i+=1;--i;)t=o-i,D+=this.els[e][t]*a[t][p];l[e][p]=D}return a=new s(l),F?a.col(1):a},s.prototype.transpose=function(){var n,a,t,o,l,e,p;for(p=this.els.length,a=[],l=n=this.els[0].length,l+=1;--l;)for(a[t=n-l]=[],e=p,e+=1;--e;)o=p-e,a[t][o]=this.els[o][t];return new s(a)},s.prototype.toRightTriangular=function(){var s,n,a,t,o,l,e,p,r,c,i,y,u,F;for(s=this.dup(),o=p=this.els.length,l=this.els[0].length;--p;){if(a=o-p,0===s.els[a][a])for(t=i=u=a+1;u<=o?i<o:i>o;t=u<=o?++i:--i)if(0!==s.els[t][a]){for(n=[],r=l,r+=1;--r;)c=l-r,n.push(s.els[a][c]+s.els[t][c]);s.els[a]=n;break}if(0!==s.els[a][a])for(t=y=F=a+1;F<=o?y<o:y>o;t=F<=o?++y:--y){for(e=s.els[t][a]/s.els[a][a],n=[],r=l,r+=1;--r;)c=l-r,n.push(c<=a?0:s.els[t][c]-s.els[a][c]*e);s.els[t]=n}}return s},s.prototype.augment=function(n){var a,t,o,l,e,p,r,c,i;if(void 0===(a=n.els||n)[0][0]&&(a=new s(a).els),o=(t=this.dup()).els[0].length,p=c=t.els.length,r=a[0].length,c!==a.length)return null;for(c+=1;--c;)for(l=p-c,i=r,i+=1;--i;)e=r-i,t.els[l][o+e]=a[l][e];return t},s.prototype.inverse=function(){var n,a,t,o,l,e,p,r,c,i,y,u,F;for(p=i=this.els.length,r=(n=this.augment(s.I(i)).toRightTriangular()).els[0].length,l=[],i+=1;--i;){for(t=[],y=r,l[o=i-1]=[],a=n.els[o][o],y+=1;--y;)u=r-y,c=n.els[o][u]/a,t.push(c),u>=p&&l[o].push(c);for(n.els[o]=t,e=F=0;0<=o?F<o:F>o;e=0<=o?++F:--F){for(t=[],y=r,y+=1;--y;)u=r-y,t.push(n.els[e][u]-n.els[o][u]*n.els[e][o]);n.els[e]=t}}return new s(l)},s.I=function(n){var a,t,o,l,e;for(a=[],l=n,n+=1;--n;)for(a[t=l-n]=[],e=l,e+=1;--e;)o=l-e,a[t][o]=t===o?1:0;return new s(a)},s.prototype.decompose=function(){var s,a,t,o,l,e,p,r,c,i,u,F,D,h,C,f,A,d,m,g,v,b,w,x,T,S,k,M,q,E,j,z,R,V,B;for(d=[],C=[],f=[],e=[],s=[],a=S=0;S<=3;a=++S)for(s[a]=[],t=k=0;k<=3;t=++k)s[a][t]=this.els[a][t];if(0===s[3][3])return!1;for(a=M=0;M<=3;a=++M)for(t=q=0;q<=3;t=++q)s[a][t]/=s[3][3];for(p=this.dup(),a=E=0;E<=2;a=++E)p.els[a][3]=0;if(p.els[3][3]=1,0!==s[0][3]||0!==s[1][3]||0!==s[2][3]){for(i=new y(s.slice(0,4)[3]),e=p.inverse().transpose().multiply(i).els,a=j=0;j<=2;a=++j)s[a][3]=0;s[3][3]=1}else e=[0,0,0,1];for(a=z=0;z<=2;a=++z)d[a]=s[3][a],s[3][a]=0;for(F=[],a=R=0;R<=2;a=++R)F[a]=new y(s[a].slice(0,3));if(C[0]=F[0].length(),F[0]=F[0].normalize(),f[0]=F[0].dot(F[1]),F[1]=F[1].combine(F[0],1,-f[0]),C[1]=F[1].length(),F[1]=F[1].normalize(),f[0]/=C[1],f[1]=F[0].dot(F[2]),F[2]=F[2].combine(F[0],1,-f[1]),f[2]=F[1].dot(F[2]),F[2]=F[2].combine(F[1],1,-f[2]),C[2]=F[2].length(),F[2]=F[2].normalize(),f[1]/=C[2],f[2]/=C[2],l=F[1].cross(F[2]),F[0].dot(l)<0)for(a=V=0;V<=2;a=++V)for(C[a]*=-1,t=B=0;B<=2;t=++B)F[a].els[t]*=-1;for(g in D=function(s,n){return F[s].els[n]},(u=[])[1]=Math.asin(-D(0,2)),0!==Math.cos(u[1])?(u[0]=Math.atan2(D(1,2),D(2,2)),u[2]=Math.atan2(D(0,1),D(0,0))):(u[0]=Math.atan2(-D(2,0),D(1,1)),u[1]=0),(A=D(0,0)+D(1,1)+D(2,2)+1)>1e-4?(b=.25/(h=.5/Math.sqrt(A)),w=(D(2,1)-D(1,2))*h,x=(D(0,2)-D(2,0))*h,T=(D(1,0)-D(0,1))*h):D(0,0)>D(1,1)&&D(0,0)>D(2,2)?(w=.25*(h=2*Math.sqrt(1+D(0,0)-D(1,1)-D(2,2))),x=(D(0,1)+D(1,0))/h,T=(D(0,2)+D(2,0))/h,b=(D(2,1)-D(1,2))/h):D(1,1)>D(2,2)?(h=2*Math.sqrt(1+D(1,1)-D(0,0)-D(2,2)),w=(D(0,1)+D(1,0))/h,x=.25*h,T=(D(1,2)+D(2,1))/h,b=(D(0,2)-D(2,0))/h):(h=2*Math.sqrt(1+D(2,2)-D(0,0)-D(1,1)),w=(D(0,2)+D(2,0))/h,x=(D(1,2)+D(2,1))/h,T=.25*h,b=(D(1,0)-D(0,1))/h),r=[w,x,T,b],(c=new n).translate=d,c.scale=C,c.skew=f,c.quaternion=r,c.perspective=e,c.rotate=u,c)for(o in m=c[g])v=m[o],isNaN(v)&&(m[o]=0);return c},s.prototype.toString=function(){var s,n,a,t,o;for(a="matrix3d(",s=t=0;t<=3;s=++t)for(n=o=0;o<=3;n=++o)a+=W(this.els[s][n],10),3===s&&3===n||(a+=",");return a+=")"},s.matrixForTransform=g((function(s){var n,a,t,o,l,e;return(n=document.createElement("div")).style.position="absolute",n.style.visibility="hidden",n.style[X("transform")]=s,document.body.appendChild(n),a=null!=(o=null!=(l=(t=window.getComputedStyle(n,null)).transform)?l:t[X("transform")])?o:null!=(e=k.tests)?e.matrixForTransform(s):void 0,document.body.removeChild(n),a})),s.fromTransform=function(n){var a,t,o,l,e,p;for(t=(l=null!=n?n.match(/matrix3?d?\(([-0-9,e \.]*)\)/):void 0)?6===(a=(a=l[1].split(",")).map(parseFloat)).length?[a[0],a[1],0,0,a[2],a[3],0,0,0,0,1,0,a[4],a[5],0,1]:a:[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e=[],o=p=0;p<=3;o=++p)e.push(t.slice(4*o,4*o+4));return new s(e)},s}(),H=g((function(s){var n,a,t,o,l,e,p,r,c,i;if(void 0!==document.body.style[s])return"";for(l="",e=0,r=(o=s.split("-")).length;e<r;e++)l+=(t=o[e]).substring(0,1).toUpperCase()+t.substring(1);for(p=0,c=(i=["Webkit","Moz","ms"]).length;p<c;p++)if(n=(a=i[p])+l,void 0!==document.body.style[n])return a;return""})),X=g((function(s){var n;return"Moz"===(n=H(s))?""+n+(s.substring(0,1).toUpperCase()+s.substring(1)):""!==n?"-"+n.toLowerCase()+"-"+ns(s):ns(s)})),L="undefined"!=typeof window&&null!==window?window.requestAnimationFrame:void 0,h=[],C=[],U=!1,N=1,"undefined"!=typeof window&&null!==window&&window.addEventListener("keyup",(function(s){if(68===s.keyCode&&s.shiftKey&&s.ctrlKey)return k.toggleSlow()})),null==L&&(z=0,L=function(s){var n,a,t;return n=Date.now(),t=Math.max(0,16-(n-z)),a=window.setTimeout((function(){return s(n+t)}),t),z=n+t,a}),P=!1,Z=!1,K=function(){if(!P)return P=!0,L(G)},G=function(s){var n,a,t,o;if(!Z){for(a=[],t=0,o=h.length;t<o;t++)n=h[t],D(s,n)||a.push(n);return 0===(h=h.filter((function(s){return-1===a.indexOf(s)}))).length?P=!1:L(G)}L(G)},D=function(s,n){var a,t,o,l,e,p,r,c;if(null==n.tStart&&(n.tStart=s),l=(s-n.tStart)/n.options.duration,e=n.curve(l),t={},l>=1)t=n.curve.returnsToSelf?n.properties.start:n.properties.end;else for(a in c=n.properties.start)o=c[a],t[a]=q(o,n.properties.end[a],e);return A(n.el,t),"function"==typeof(p=n.options).change&&p.change(n.el,Math.min(1,l)),l>=1&&"function"==typeof(r=n.options).complete&&r.complete(n.el),l<1},q=function(s,n,a){return null!=s&&null!=s.interpolate?s.interpolate(n,a):null},O=function(s,n,a,t){var o,l,e,p,i,y,u;if(null!=t&&(C=C.filter((function(s){return s.id!==t}))),k.stop(s,{timeout:!1}),!a.animated)return k.css(s,n),void("function"==typeof a.complete&&a.complete(this));for(e in i=M(s,Object.keys(n)),o={},y=[],n=I(n))u=n[e],null!=s.style&&as.contains(e)?y.push([e,u]):o[e]=x(u);return y.length>0&&((l=j(s))?(p=new c).applyProperties(y):(u=y.map((function(s){return ts(s[0],s[1])})).join(" "),p=r.fromTransform(r.matrixForTransform(u))),o.transform=p.decompose(),l&&i.transform.applyRotateCenter([o.transform.props.rotate[1],o.transform.props.rotate[2]])),F(s,o),h.push({el:s,properties:{start:i,end:o},options:a,curve:a.type.call(a.type,a)}),K()},ss=[],$=0,_=function(s){if(E())return L((function(){if(-1!==ss.indexOf(s))return s.realTimeoutId=setTimeout((function(){return s.fn(),v(s.id)}),s.delay)}))},u=function(s,n){var a;return a={id:$+=1,tStart:Date.now(),fn:s,delay:n,originalDelay:n},_(a),ss.push(a),$},v=function(s){return ss=ss.filter((function(n){return n.id===s&&n.realTimeoutId&&clearTimeout(n.realTimeoutId),n.id!==s}))},R=function(s,n){var a;return null!=s?(a=s-n.tStart,n.originalDelay-a):n.originalDelay},"undefined"!=typeof window&&null!==window&&window.addEventListener("unload",(function(){})),J=null,B((function(s){var n,a,t,o,l,e,p,r,c,i;if(Z=!s,s){if(P)for(a=Date.now()-J,l=0,r=h.length;l<r;l++)null!=(n=h[l]).tStart&&(n.tStart+=a);for(e=0,c=ss.length;e<c;e++)(t=ss[e]).delay=R(J,t),_(t);return J=null}for(J=Date.now(),i=[],o=0,p=ss.length;o<p;o++)t=ss[o],i.push(clearTimeout(t.realTimeoutId));return i})),(k={}).linear=function(){return function(s){return s}},k.spring=function(s){var n,a,t,o,l;return null==s&&(s={}),f(s,k.spring.defaults),t=Math.max(1,s.frequency/20),o=Math.pow(20,s.friction/100),l=s.anticipationSize/1e3,n=function(n){var a,t;return(.8-(a=((t=l/(1-l))-0)/(t-0)))/t*n*s.anticipationStrength/100+a},a=function(s){return Math.pow(o/10,-s)*(1-s)},function(s){var o,e,p,r,c,i,y,u;return i=s/(1-l)-l/(1-l),s<l?(u=l/(1-l)-l/(1-l),y=0/(1-l)-l/(1-l),c=Math.acos(1/n(u)),p=(Math.acos(1/n(y))-c)/(t*-l),o=n):(o=a,c=0,p=1),e=o(i),r=t*(s-l)*p+c,1-e*Math.cos(r)}},k.bounce=function(s){var n,a,t,o;return null==s&&(s={}),f(s,k.bounce.defaults),t=Math.max(1,s.frequency/20),o=Math.pow(20,s.friction/100),n=function(s){return Math.pow(o/10,-s)*(1-s)},(a=function(s){var a,o;return a=n(s),o=t*s*1-1.57,a*Math.cos(o)}).returnsToSelf=!0,a},k.gravity=function(s){var n,a,t,o,l,e;return null==s&&(s={}),f(s,k.gravity.defaults),a=Math.min(s.bounciness/1250,.8),o=s.elasticity/1e3,t=[],n=function(){var t,o;for(o={a:-(t=Math.sqrt(.02)),b:t,H:1},s.returnsToSelf&&(o.a=0,o.b=2*o.b);o.H>.001;)n=o.b-o.a,o={a:o.b,b:o.b+n*a,H:o.H*a*a};return o.b}(),e=function(a,t,o,l){var e,p;return e=(p=2/(n=t-a)*l-1-2*a/n)*p*o-o+1,s.returnsToSelf&&(e=1-e),e},function(){var l,e,p,r;for(p={a:-(e=Math.sqrt(2/(100*n*n))),b:e,H:1},s.returnsToSelf&&(p.a=0,p.b=2*p.b),t.push(p),l=n,r=[];p.b<1&&p.H>.001;)l=p.b-p.a,p={a:p.b,b:p.b+l*a,H:p.H*o},r.push(t.push(p))}(),(l=function(n){var a,o;for(a=t[o=0];!(n>=a.a&&n<=a.b)&&(a=t[o+=1]););return a?e(a.a,a.b,a.H,n):s.returnsToSelf?0:1}).returnsToSelf=s.returnsToSelf,l},k.forceWithGravity=function(s){return null==s&&(s={}),f(s,k.forceWithGravity.defaults),s.returnsToSelf=!0,k.gravity(s)},k.bezier=(ps=function(s,n,a,t,o){return Math.pow(1-s,3)*n+3*Math.pow(1-s,2)*s*a+3*(1-s)*Math.pow(s,2)*t+Math.pow(s,3)*o},es=function(s,n,a,t,o){return{x:ps(s,n.x,a.x,t.x,o.x),y:ps(s,n.y,a.y,t.y,o.y)}},rs=function(s,n,a){var t,o,l,e,p,r,c,i,y;for(t=null,i=0,y=n.length;i<y&&(s>=(o=n[i])(0).x&&s<=o(1).x&&(t=o),null===t);i++);if(!t)return a?0:1;for(c=t(p=((r=1)+(e=0))/2).x,l=0;Math.abs(s-c)>1e-4&&l<100;)s>c?e=p:r=p,c=t(p=(r+e)/2).x,l+=1;return t(p).y},function(s){var n,a,t;return null==s&&(s={}),t=s.points,n=function(){var s,a,o;for(s in n=[],o=function(s,a){var t;return t=function(n){return es(n,s,s.cp[s.cp.length-1],a.cp[0],a)},n.push(t)},t){if((a=parseInt(s))>=t.length-1)break;o(t[a],t[a+1])}return n}(),(a=function(s){return 0===s?0:1===s?1:rs(s,n,this.returnsToSelf)}).returnsToSelf=0===t[t.length-1].y,a}),k.easeInOut=function(s){var n,a;return null==s&&(s={}),n=null!=(a=s.friction)?a:k.easeInOut.defaults.friction,k.bezier({points:[{x:0,y:0,cp:[{x:.92-n/1e3,y:0}]},{x:1,y:1,cp:[{x:.08+n/1e3,y:1}]}]})},k.easeIn=function(s){var n,a;return null==s&&(s={}),n=null!=(a=s.friction)?a:k.easeIn.defaults.friction,k.bezier({points:[{x:0,y:0,cp:[{x:.92-n/1e3,y:0}]},{x:1,y:1,cp:[{x:1,y:1}]}]})},k.easeOut=function(s){var n,a;return null==s&&(s={}),n=null!=(a=s.friction)?a:k.easeOut.defaults.friction,k.bezier({points:[{x:0,y:0,cp:[{x:0,y:0}]},{x:1,y:1,cp:[{x:.08+n/1e3,y:1}]}]})},k.spring.defaults={frequency:300,friction:200,anticipationSize:0,anticipationStrength:0},k.bounce.defaults={frequency:300,friction:200},k.forceWithGravity.defaults=k.gravity.defaults={bounciness:400,elasticity:200},k.easeInOut.defaults=k.easeIn.defaults=k.easeOut.defaults={friction:500},k.css=V((function(s,n){return d(s,n,!0)})),k.animate=V((function(s,n,a){var t;return null==a&&(a={}),a=w(a),f(a,{type:k.easeInOut,duration:1e3,delay:0,animated:!0}),a.duration=Math.max(0,a.duration*N),a.delay=Math.max(0,a.delay),0===a.delay?O(s,n,a):(t=k.setTimeout((function(){return O(s,n,a,t)}),a.delay),C.push({id:t,el:s}))})),k.stop=V((function(s,n){return null==n&&(n={}),null==n.timeout&&(n.timeout=!0),n.timeout&&(C=C.filter((function(a){return a.el!==s||null!=n.filter&&!n.filter(a)||(k.clearTimeout(a.id),!1)}))),h=h.filter((function(n){return n.el!==s}))})),k.setTimeout=function(s,n){return u(s,n*N)},k.clearTimeout=function(s){return v(s)},k.toggleSlow=function(){return N=(U=!U)?3:1,"undefined"!=typeof console&&null!==console&&"function"==typeof console.log?console.log("dynamics.js: slow animations "+(U?"enabled":"disabled")):void 0},b.exports=k}.call(m);const x=g(w.exports),T=s=>(r("data-v-344e6349"),s=s(),c(),s),S=["onTouchstart","onTouchmove","onTouchend"],k={class:"bg",width:"320",height:"560"},M=["d"],q=T((()=>l("div",{class:"header"},"Drag Me",-1))),E=[T((()=>l("a",{href:"https://play.vuejs.org/#eNqlVmtv2zYU/SsXboE6mC3bSdwVmpM9MAz9sAIdsA8b5gGhRUrWKpEESTl2DP/3HZKSbbkuUKBA4Ij3ce65D15pP/hZ62TTiEE6WNjMlNqRFa7Rj0tZ1loZR3sygmWu3IgRZarWjROcDpQbVdMbeL45WvKdZHWZ2VbXHZP/LGyWMlPSOloLxoV5L8pi7eiBZrdTr6uEo9L+alhRlLKAPGeVFZ2PdQzwD6CyTWk6oh1+6dBpM2g6isNgch4jWPeCHm4u2Xxkbg2QLrvh8IYeHmm/lARg1xhJTx+moyn9fnfr//nf1/tzzMMfr/dZsj1AnCW7Azhe6J+W8jwsfp2Q7qOypSuV/ELsaMt3Xp3saNxL48yA1Vp4DFg+ojA/0i2ldH/GPqAROcOkzZWpU3oKzxVzYui5wnPS4hz09gZsydc3Us4bidqCZWiD79FQ3ERMgagiydZMFoL/qZpsLSziX4r+mf4LRmgn9ZvsTBOEATjZBjDNCvHXSeiTj8K/wadHR8lv5ZLT8MSnhUFVA5PeyHxHw5YZutCyRW2C9alJLc+jya5n8VmXZsm865MP6hEugp61pevIRUOUDjVouX8hoWsXy8uPF5ThBvtRiGKQGXVPX3OdzozdTov0hGu1QdAR8cYwTzil76e4vrkpA/+Ubt+Fe+ydQzljhotJ3ETYQTg4UWs/qDgRLXi5aQtWMWsflgPuU2OrSiwHUfFTrRoruHqW0B5H9qh1fgyC+Ko6ONdqI6CNA9b3vK4KXo0OiLElfS8h+TVdcKsEC5B9bcgW+dpNcUx1BR09l9ytccASwmkdeoDj/C2OrRPctN9oqQ962nAwz8uqguzV3W/z2S9zOCwm3rILNkG07hmFPgaOGDD3/OiDWEygvWbY7jVESq3bVT6ti1UHkPeiqtQJontaTM46jWMAIJspLTgkybHRcaxXLPtUGNVIPs5UpUxKr/I8/yGo1HZs1wwj4N8T93pLs7f4McWKYdv5F4j/S2bzm2AeKpr6ra63QRCLium87yRouskrj7cuORcyCGtmcKfgCCtijVNBqttEUyxfJIN3UhA7sXVjVpUFFBnqIUwQ56jO2JYvuDUzED3JnlsOd9NpEGJQzNgPSwahVDKirpRBY8aG8bKxKb0LCLhByaqIVTqxYSurKrxhIhulUZrwWIkciPH5ZVxKLvw7toWJjccFT9o2XqL2cjy6z2IlGOe4/rFAp8aUL0HYUoeoF6t78/U72nUEXwvnRYqFuxX153VbqYpHYEy1nySM0GA0iF8q45ppfJUoia+eEG/ZKuxykHZbE6vl9AHj5bgHzmmbTiYZl4n9tNMYwYSLzaRn2O2xweF/7cIdbA==",target:"_blank"},"Source code",-1)))],j=s({__name:"ElasticHeader",setup(s){let r=!1;const c={x:0,y:0},i=n({x:120,y:120}),y=a((()=>`M0,0 L320,0 320,120Q${i.x},${i.y} 0,120`)),u=a((()=>{const s=i.y-120;return{transform:`translate(0,${s/(s>0?2:4)}px)`}}));function F(s){s=s.changedTouches?s.changedTouches[0]:s,r=!0,c.x=s.pageX,c.y=s.pageY}function D(s){if(s=s.changedTouches?s.changedTouches[0]:s,r){i.x=s.pageX-c.x+120;const n=s.pageY-c.y,a=n>0?1.5:4;i.y=120+n/a}}function h(){r&&(r=!1,x.animate(i,{x:120,y:120},{type:x.spring,duration:700,friction:280}))}return(s,n)=>(t(),o("div",{class:"draggable",onMousedown:F,onMousemove:D,onMouseup:h,onMouseleave:h,onTouchstart:p(F,["prevent"]),onTouchmove:p(D,["prevent"]),onTouchend:p(h,["prevent"])},[(t(),o("svg",k,[l("path",{d:y.value,fill:"#3F51B5"},null,8,M)])),q,l("div",{class:"content",style:e(u.value)},E,4)],40,S))}},[["__scopeId","data-v-344e6349"]]),z={class:"demo"},R={key:0,style:{"margin-left":"20px"}},V={__name:"DisabledButton",setup(s){const n=i(!1);function a(){n.value=!0,setTimeout((()=>{n.value=!1}),1500)}return(s,e)=>(t(),o("div",z,[l("div",{class:u({shake:n.value})},[l("button",{onClick:a},"Click me"),n.value?(t(),o("span",R,"This feature is disabled!")):y("",!0)],2)]))}},B=l("p",null,"Move your mouse across this div...",-1),I={__name:"Colors",setup(s){const n=i(0);function a(s){n.value=s.clientX}return(s,p)=>(t(),o("div",{onMousemove:a,style:e({backgroundColor:`hsl(${n.value}, 80%, 50%)`}),class:"demo movearea"},[B,l("p",null,"x: "+F(n.value),1)],36))}},H={class:"demo"},X={class:"big-number"},Y={__name:"AnimateWatcher",setup(s){const a=i(0),e=n({number:0});return D(a,(s=>{v.to(e,{duration:.5,number:Number(s)||0})})),(s,n)=>(t(),o("div",H,[h(" Type a number: "),C(l("input",{"onUpdate:modelValue":n[0]||(n[0]=s=>a.value=s)},null,512),[[f,a.value,void 0,{number:!0}]]),l("p",X,F(e.number.toFixed(0)),1)]))}},L=d("",8),W=d("",6),Z=l("p",null,"除了颜色外，你还可以使用样式绑定 CSS transform、宽度或高度。你甚至可以通过运用弹性物理模拟为 SVG 添加动画，毕竟它们也只是 attribute 的数据绑定：",-1),P=d("",4),G=l("div",{class:"composition-api"},[l("p",null,[l("a",{href:"https://play.vuejs.org/#eNpNUstygzAM/BWNLyEzBDKd6YWSdHrpsacefSGgJG7xY7BImhL+vTKv9ILllXYlr+jEm3PJpUWRidyXjXIEHql1e2mUdrYh6KDBY8yfoiR1wRiuBZVn6OHYWA0r5q6W2pMv3ISHkBPSlNZ4AtPqAzawC2LRdj3DdEU0WA34qB910sBUnsFWmp6LpRmaRo9UHMLIrGG3h4EBQ/OEbDRpxjx51TYFKWtYKHmOF9WP4Qzs+x22EDoA9NLwmaejC/x+vhBqVxeEfAPIK3WBsi6830lRobZSDDjA580hFIt8roxrCS4bbSuskxFmzhhIAenEy92id1CnzZzfd91szETmZ72rH6zYOej7PA3rYXrKE3GUp//m5KunWx3C5CE6enS0hjZXVKczZXCwdfWyoF79YgZPqBliJ9iGSUTEYlzuRrO9X94a/lUGNTklvBTZvAMpwhYCIMWZyPksTVvjvk9JaXUacq9sSlujFJPnvej/AElH3FQ=",target:"_blank",rel:"noreferrer"},"在演练场中尝试一下")])],-1),_=l("div",{class:"options-api"},[l("p",null,[l("a",{href:"https://play.vuejs.org/#eNpNUctugzAQ/JWVLyESj6hSL5Sm6qXHnnr0xYENuAXbwus8Svj3GlxIJEvendHMvgb2bkx6cshyVtiyl4b2XMnO6J6gtsLAsdcdbKZwwxVXeJmpCo/CtQQDVwCVIBFtQwzQI7leLRmAct0B+xx28YLQGVFh5aGAjNM3zvRZUNnkizhII7V6w9xTSjqiRtoYBqhcL0hq5c3S5/hu/blKbzfYwbh9LMWVf0W2zusTws60gnDK6OtqEMTaeSGVcQSnpNMVtmmAXzkLAWeQzarCQNkKaz1zkHWysPthWNryjX/IC1bRbgvjWGTG64rssbQqLF3bKUzvHmH6o1aUnFHWDeVw0G31sqJW/mIOT9h5KEw2m7CYhUsmnV/at9XKX3n24v+E5WxdNmfTbieAs4bI2DzLnDI/dVrqLpu4Nz+/a5GzZYls/AM3dcFx",target:"_blank",rel:"noreferrer"},"在演练场中尝试一下")])],-1),U=JSON.parse('{"title":"动画技巧","description":"","frontmatter":{},"headers":[{"level":2,"title":"基于 CSS class 的动画","slug":"class-based-animations","link":"#class-based-animations","children":[]},{"level":2,"title":"状态驱动的动画","slug":"state-driven-animations","link":"#state-driven-animations","children":[]},{"level":2,"title":"基于侦听器的动画","slug":"animating-with-watchers","link":"#animating-with-watchers","children":[]}],"relativePath":"guide/extras/animation.md","filePath":"guide/extras/animation.md"}'),N={name:"guide/extras/animation.md"},O=Object.assign(N,{setup:s=>(s,n)=>(t(),o("div",null,[L,A(V),W,A(I),Z,A(j),P,A(Y),G,_]))});export{U as __pageData,O as default};
