(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{9361:function(e,t){"use strict";t.Z=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}},4184:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)){if(n.length){var a=i.apply(null,n);a&&e.push(a)}}else if("object"===o)if(n.toString===Object.prototype.toString)for(var l in n)r.call(n,l)&&n[l]&&e.push(l);else e.push(n.toString())}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(n=function(){return i}.apply(t,[]))||(e.exports=n)}()},1118:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(6943)}])},1423:function(e,t){"use strict";t.Z={src:"/_next/static/media/close.a9175474.svg",height:14,width:14}},1210:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){return!1};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8045:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(9361).Z,i=n(4941).Z,o=n(3929).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.src,n=e.sizes,a=e.unoptimized,f=void 0!==a&&a,g=e.priority,v=void 0!==g&&g,x=e.loading,E=e.lazyRoot,C=void 0===E?null:E,L=e.lazyBoundary,P=e.className,A=e.quality,M=e.width,z=e.height,N=e.style,R=e.objectFit,I=e.objectPosition,B=e.onLoadingComplete,H=e.placeholder,D=void 0===H?"empty":H,W=e.blurDataURL,Z=h(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),q=l.useContext(d.ImageConfigContext),T=l.useMemo((function(){var e=b||q||s.imageConfigDefault,t=o(e.deviceSizes).concat(o(e.imageSizes)).sort((function(e,t){return e-t})),n=e.deviceSizes.sort((function(e,t){return e-t}));return p({},e,{allSizes:t,deviceSizes:n})}),[q]),F=Z,U=n?"responsive":"intrinsic";"layout"in F&&(F.layout&&(U=F.layout),delete F.layout);var G=O;if("loader"in F){if(F.loader){var V=F.loader;G=function(e){e.config;var t=h(e,["config"]);return V(t)}}delete F.loader}var K="";if(function(e){return"object"===typeof e&&(w(e)||function(e){return void 0!==e.src}(e))}(t)){var Y=w(t)?t.default:t;if(!Y.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(Y)));if(W=W||Y.blurDataURL,K=Y.src,(!U||"fill"!==U)&&(z=z||Y.height,M=M||Y.width,!Y.height||!Y.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(Y)))}var Q=!v&&("lazy"===x||"undefined"===typeof x);((t="string"===typeof t?t:K).startsWith("data:")||t.startsWith("blob:"))&&(f=!0,Q=!1);y.has(t)&&(Q=!1);m&&(f=!0);var X,J=i(l.useState(!1),2),$=J[0],ee=J[1],te=i(u.useIntersection({rootRef:C,rootMargin:L||"200px",disabled:!Q}),3),ne=te[0],re=te[1],ie=te[2],oe=!Q||re,ae={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},le={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ce=!1,se={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:R,objectPosition:I},ue=k(M),de=k(z),fe=k(A);0;var pe=Object.assign({},N,se),ge="blur"!==D||$?{}:{backgroundSize:R||"cover",backgroundPosition:I||"0% 0%",filter:"blur(20px)",backgroundImage:'url("'.concat(W,'")')};if("fill"===U)ae.display="block",ae.position="absolute",ae.top=0,ae.left=0,ae.bottom=0,ae.right=0;else if("undefined"!==typeof ue&&"undefined"!==typeof de){var he=de/ue,ve=isNaN(he)?"100%":"".concat(100*he,"%");"responsive"===U?(ae.display="block",ae.position="relative",ce=!0,le.paddingTop=ve):"intrinsic"===U?(ae.display="inline-block",ae.position="relative",ae.maxWidth="100%",ce=!0,le.maxWidth="100%",X="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(ue,"%27%20height=%27").concat(de,"%27/%3e")):"fixed"===U&&(ae.display="inline-block",ae.position="relative",ae.width=ue,ae.height=de)}else 0;var me={src:_,srcSet:void 0,sizes:void 0};oe&&(me=j({config:T,src:t,unoptimized:f,layout:U,width:ue,quality:fe,sizes:n,loader:G}));var be=t;0;var ye,_e="imagesrcset",xe="imagesizes";_e="imageSrcSet",xe="imageSizes";var we=(r(ye={},_e,me.srcSet),r(ye,xe,me.sizes),ye),je=l.default.useLayoutEffect,ke=l.useRef(B),Oe=l.useRef(t);l.useEffect((function(){ke.current=B}),[B]),je((function(){Oe.current!==t&&(ie(),Oe.current=t)}),[ie,t]);var Ee=p({isLazy:Q,imgAttributes:me,heightInt:de,widthInt:ue,qualityInt:fe,layout:U,className:P,imgStyle:pe,blurStyle:ge,loading:x,config:T,unoptimized:f,placeholder:D,loader:G,srcString:be,onLoadingCompleteRef:ke,setBlurComplete:ee,setIntersection:ne,isVisible:oe,noscriptSizes:n},F);return l.default.createElement(l.default.Fragment,null,l.default.createElement("span",{style:ae},ce?l.default.createElement("span",{style:le},X?l.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:X}):null):null,l.default.createElement(S,Object.assign({},Ee))),v?l.default.createElement(c.default,null,l.default.createElement("link",Object.assign({key:"__nimg-"+me.src+me.srcSet+me.sizes,rel:"preload",as:"image",href:me.srcSet?void 0:me.src},we))):null)};var a,l=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=g();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var o=r?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(n,i,o):n[i]=e[i]}n.default=e,t&&t.set(e,n);return n}(n(7294)),c=(a=n(5443))&&a.__esModule?a:{default:a},s=n(9309),u=n(7190),d=n(9977),f=(n(3794),n(2392));function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(this,arguments)}function g(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return g=function(){return e},e}function h(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}var v={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"akamai"}||{},m=v.experimentalUnoptimized,b={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"akamai"},y=new Set,_=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var x=new Map([["default",function(e){var t=e.config,n=e.src,r=e.width,i=e.quality;0;if(n.endsWith(".svg")&&!t.dangerouslyAllowSVG)return n;return"".concat(f.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(i||75)}],["imgix",function(e){var t=e.config,n=e.src,r=e.width,i=e.quality,o=new URL("".concat(t.path).concat(C(n))),a=o.searchParams;a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||r.toString()),i&&a.set("q",i.toString());return o.href}],["cloudinary",function(e){var t=e.config,n=e.src,r=e.width,i=e.quality,o=["f_auto","c_limit","w_"+r,"q_"+(i||"auto")].join(",")+"/";return"".concat(t.path).concat(o).concat(C(n))}],["akamai",function(e){var t=e.config,n=e.src,r=e.width;return"".concat(t.path).concat(C(n),"?imwidth=").concat(r)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function w(e){return void 0!==e.default}function j(e){var t=e.config,n=e.src,r=e.unoptimized,i=e.layout,a=e.width,l=e.quality,c=e.sizes,s=e.loader;if(r)return{src:n,srcSet:void 0,sizes:void 0};var u=function(e,t,n,r){var i=e.deviceSizes,a=e.allSizes;if(r&&("fill"===n||"responsive"===n)){for(var l,c=/(^|\s)(1?\d?\d)vw/g,s=[];l=c.exec(r);l)s.push(parseInt(l[2]));if(s.length){var u,d=.01*(u=Math).min.apply(u,o(s));return{widths:a.filter((function(e){return e>=i[0]*d})),kind:"w"}}return{widths:a,kind:"w"}}return"number"!==typeof t||"fill"===n||"responsive"===n?{widths:i,kind:"w"}:{widths:o(new Set([t,2*t].map((function(e){return a.find((function(t){return t>=e}))||a[a.length-1]})))),kind:"x"}}(t,a,i,c),d=u.widths,f=u.kind,p=d.length-1;return{sizes:c||"w"!==f?c:"100vw",srcSet:d.map((function(e,r){return"".concat(s({config:t,src:n,quality:l,width:e})," ").concat("w"===f?e:r+1).concat(f)})).join(", "),src:s({config:t,src:n,quality:l,width:d[p]})}}function k(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function O(e){var t,n=(null==(t=e.config)?void 0:t.loader)||"default",r=x.get(n);if(r)return r(e);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(s.VALID_LOADERS.join(", "),". Received: ").concat(n))}function E(e,t,n,r,i,o){e&&e.src!==_&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.parentNode&&(y.add(t),"blur"===r&&o(!0),null==i?void 0:i.current)){var n=e.naturalWidth,a=e.naturalHeight;i.current({naturalWidth:n,naturalHeight:a})}})))}var S=function(e){var t=e.imgAttributes,n=(e.heightInt,e.widthInt),r=e.qualityInt,i=e.layout,o=e.className,a=e.imgStyle,c=e.blurStyle,s=e.isLazy,u=e.placeholder,d=e.loading,f=e.srcString,g=e.config,v=e.unoptimized,m=e.loader,b=e.onLoadingCompleteRef,y=e.setBlurComplete,_=e.setIntersection,x=e.onLoad,w=e.onError,k=(e.isVisible,e.noscriptSizes),O=h(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible","noscriptSizes"]);return d=s?"lazy":d,l.default.createElement(l.default.Fragment,null,l.default.createElement("img",Object.assign({},O,t,{decoding:"async","data-nimg":i,className:o,style:p({},a,c),ref:l.useCallback((function(e){_(e),(null==e?void 0:e.complete)&&E(e,f,0,u,b,y)}),[_,f,i,u,b,y]),onLoad:function(e){E(e.currentTarget,f,0,u,b,y),x&&x(e)},onError:function(e){"blur"===u&&y(!0),w&&w(e)}})),(s||"blur"===u)&&l.default.createElement("noscript",null,l.default.createElement("img",Object.assign({},O,j({config:g,src:f,unoptimized:v,layout:i,width:n,quality:r,sizes:k,loader:m}),{decoding:"async","data-nimg":i,style:a,className:o,loading:d}))))};function C(e){return"/"===e[0]?e.slice(1):e}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8418:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4941).Z;n(5753).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,o=(i=n(7294))&&i.__esModule?i:{default:i},a=n(6273),l=n(2725),c=n(3462),s=n(1018),u=n(7190),d=n(1210),f=n(8684);var p="undefined"!==typeof o.default.useTransition,g={};function h(e,t,n,r){if(e&&a.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var i=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;g[t+"%"+n+(i?"%"+i:"")]=!0}}var v=o.default.forwardRef((function(e,t){var n,i=e.href,v=e.as,m=e.children,b=e.prefetch,y=e.passHref,_=e.replace,x=e.soft,w=e.shallow,j=e.scroll,k=e.locale,O=e.onClick,E=e.onMouseEnter,S=e.legacyBehavior,C=void 0===S?!0!==Boolean(!1):S,L=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,["href","as","children","prefetch","passHref","replace","soft","shallow","scroll","locale","onClick","onMouseEnter","legacyBehavior"]);n=m,!C||"string"!==typeof n&&"number"!==typeof n||(n=o.default.createElement("a",null,n));var P=!1!==b,A=r(p?o.default.useTransition():[],2)[1],M=o.default.useContext(c.RouterContext),z=o.default.useContext(s.AppRouterContext);z&&(M=z);var N,R=o.default.useMemo((function(){var e=r(a.resolveHref(M,i,!0),2),t=e[0],n=e[1];return{href:t,as:v?a.resolveHref(M,v):n||t}}),[M,i,v]),I=R.href,B=R.as,H=o.default.useRef(I),D=o.default.useRef(B);C&&(N=o.default.Children.only(n));var W=C?N&&"object"===typeof N&&N.ref:t,Z=r(u.useIntersection({rootMargin:"200px"}),3),q=Z[0],T=Z[1],F=Z[2],U=o.default.useCallback((function(e){D.current===B&&H.current===I||(F(),D.current=B,H.current=I),q(e),W&&("function"===typeof W?W(e):"object"===typeof W&&(W.current=e))}),[B,W,I,F,q]);o.default.useEffect((function(){var e=T&&P&&a.isLocalURL(I),t="undefined"!==typeof k?k:M&&M.locale,n=g[I+"%"+B+(t?"%"+t:"")];e&&!n&&h(M,I,B,{locale:t})}),[B,I,T,k,P,M]);var G={ref:U,onClick:function(e){C||"function"!==typeof O||O(e),C&&N.props&&"function"===typeof N.props.onClick&&N.props.onClick(e),e.defaultPrevented||function(e,t,n,r,i,o,l,c,s,u){if("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(n)){e.preventDefault();var d=function(){"softPush"in t&&"softReplace"in t?t[o?i?"softReplace":"softPush":i?"replace":"push"](n):t[i?"replace":"push"](n,r,{shallow:l,locale:s,scroll:c})};u?u(d):d()}}(e,M,I,B,_,x,w,j,k,z?A:void 0)},onMouseEnter:function(e){C||"function"!==typeof E||E(e),C&&N.props&&"function"===typeof N.props.onMouseEnter&&N.props.onMouseEnter(e),a.isLocalURL(I)&&h(M,I,B,{priority:!0})}};if(!C||y||"a"===N.type&&!("href"in N.props)){var V="undefined"!==typeof k?k:M&&M.locale,K=M&&M.isLocaleDomain&&d.getDomainLocale(B,V,M.locales,M.domainLocales);G.href=K||f.addBasePath(l.addLocale(B,V,M&&M.defaultLocale))}return C?o.default.cloneElement(N,G):o.default.createElement("a",Object.assign({},L,G),n)}));t.default=v,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,s=e.disabled||!a,u=i.useRef(),d=r(i.useState(!1),2),f=d[0],p=d[1],g=r(i.useState(null),2),h=g[0],v=g[1];i.useEffect((function(){if(a){if(u.current&&(u.current(),u.current=void 0),s||f)return;return h&&h.tagName&&(u.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=c.find((function(e){return e.root===n.root&&e.margin===n.margin}));if(r&&(t=l.get(r)))return t;var i=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=i.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return t={id:n,observer:o,elements:i},c.push(n),l.set(n,t),t}(n),i=r.id,o=r.observer,a=r.elements;return a.set(e,t),o.observe(e),function(){if(a.delete(e),o.unobserve(e),0===a.size){o.disconnect(),l.delete(i);var t=c.findIndex((function(e){return e.root===i.root&&e.margin===i.margin}));t>-1&&c.splice(t,1)}}}(h,(function(e){return e&&p(e)}),{root:null==t?void 0:t.current,rootMargin:n})),function(){null==u.current||u.current(),u.current=void 0}}if(!f){var e=o.requestIdleCallback((function(){return p(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[h,s,n,t,f]);var m=i.useCallback((function(){p(!1)}),[]);return[v,f,m]};var i=n(7294),o=n(9311),a="function"===typeof IntersectionObserver;var l=new Map,c=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1018:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FullAppTreeContext=t.AppTreeContext=t.AppRouterContext=void 0;var r,i=(r=n(7294))&&r.__esModule?r:{default:r};var o=i.default.createContext(null);t.AppRouterContext=o;var a=i.default.createContext(null);t.AppTreeContext=a;var l=i.default.createContext(null);t.FullAppTreeContext=l},6943:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return K}});var r=n(6042),i=n(5893),o=n(7294),a=n(1664),l=n.n(a),c=n(651),s=n.n(c),u=function(){return(0,i.jsx)("div",{className:s().logo,children:(0,i.jsx)(l(),{href:"/",passHref:!0,children:(0,i.jsx)("span",{className:s().text,children:"PLANET 61"})})})},d=n(7891),f=n(5494),p=n.n(f),g=[{title:"ANDROMEDA",href:"#amc",isLink:!0},{title:"ROADMAP",href:"#rm",isLink:!0},{title:"MINDMAP",href:"#mm",isLink:!0}],h=n(4184),v=n.n(h),m=function(e){var t=e.containerStyles,n=e.linkStyles,r=e.onClick;return(0,i.jsx)("nav",{className:v()(p().navigation,t),children:g.map((function(e){return(0,i.jsx)(d.Z,{onClick:r,text:e.title,href:e.href,classes:v()(p().navigationElement,n)},e.title)}))})};function b(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}var y={src:"/_next/static/media/OpenSea-icon.c3db8434.svg",height:100,width:100},_={src:"/_next/static/media/Twitter-Logo.cb934065.svg",height:800,width:1200},x={src:"/_next/static/media/Instagram-Black-Logo.3b296b28.svg",height:800,width:1200},w={src:"/_next/static/media/Discord_Black-Logo.436a3520.svg",height:800,width:1200},j=n(3108),k=n.n(j),O=function(){var e=[{image:_,text:"twitter",href:"https://twitter.com/Planet61NFT"},{image:x,text:"instagram",href:"https://www.instagram.com/planet61nft/"},{image:y,text:"opensea",href:"https://opensea.io/Planet61"},{image:w,text:"discord",href:"https://www.facebook.com/Planet61-110635601604045"}];return(0,i.jsx)("div",{className:k().socialContainer,children:e.map((function(e){return(0,o.createElement)(d.Z,b((0,r.Z)({},e),{key:e.text,classes:[k().iconLink]}))}))})},E=n(5122),S=n.n(E),C=n(5675),L=n.n(C),P="/_next/static/media/burgerMenu.40e138a6.svg",A=n(8851),M=n.n(A),z=function(e){var t=e.onClick;return(0,i.jsx)("span",{onClick:t,className:M().expanedElement,children:(0,i.jsx)(L(),{src:P,height:22,width:22,alt:""})})},N=n(4924),R=n(9631),I=n.n(R),B=n(1423),H=function(e){var t=e.onClose,n=e.isOpen;return(0,i.jsx)("div",{className:I().mobileHeaderContainer,children:(0,i.jsxs)("div",{className:v()(I().navigationMenu,(0,N.Z)({},I().visible,n)),children:[(0,i.jsx)("div",{className:I().mobileHeaderClose,children:(0,i.jsx)("span",{onClick:t,className:I().closeBtn,children:(0,i.jsx)(L(),{src:B.Z.src,height:22,width:22,alt:""})})}),(0,i.jsx)(m,{onClick:t,containerStyles:I().navBlockStyles,linkStyles:I().navLinkStyles})]})})};function D(e,t,n,r,i,o,a){try{var l=e[o](a),c=l.value}catch(s){return void n(s)}l.done?t(c):Promise.resolve(c).then(r,i)}function W(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var o=e.apply(t,n);function a(e){D(o,r,i,a,l,"next",e)}function l(e){D(o,r,i,a,l,"throw",e)}a(void 0)}))}}var Z=n(4051),q=n.n(Z),T=n(9461),F=n.n(T),U=function(){var e=(0,o.useState)(""),t=e[0],n=e[1],r=function(){var e=W(q().mark((function e(){var t,r,i;return q().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=window.ethereum){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,t.request({method:"eth_accounts"});case 5:0!==(r=e.sent).length?(i=r[0],n(i)):console.log("No authorized account found");case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),a=function(){var e=W(q().mark((function e(){var t,r;return q().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=window.ethereum)||window.open("https://metamask.io/"),e.prev=2,e.next=5,t.request({method:"eth_requestAccounts"});case 5:r=e.sent,n(r[0]),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}}();return(0,o.useEffect)((function(){r(),window.ethereum?window.ethereum.on("accountsChanged",(function(e){e.length>0?n(e[0]):n("")})):setStatus((0,i.jsxs)("p",{children:[" ","\ud83e\udd8a"," ",(0,i.jsx)("a",{target:"_blank",href:"https://metamask.io/download.html",rel:"noreferrer",children:"You must install Metamask, a virtual Ethereum wallet, in your browser."})]}))}),[t]),(0,i.jsx)("button",{className:F().connectWalletButton,onClick:a,children:t?String(t).substring(0,6)+"..."+String(t).substring(38):(0,i.jsx)("span",{children:"Connect Wallets"})})},G=function(){var e=(0,o.useState)(!1),t=e[0],n=e[1],r=function(){return n((function(){return!t}))},a=function(){var e=(0,o.useState)(null),t=e[0],n=e[1];return(0,o.useEffect)((function(){var e=window.pageYOffset,r=function(){var r=window.pageYOffset,i=r>e;i!==t&&(r-e>5||r-e<-5)&&n(i),e=r>0?r:0};return window.addEventListener("scroll",r),function(){window.removeEventListener("scroll",r)}}),[t]),t}(),l=!0===a?S().header_hidden:S().header_visible,c=function(){return(0,i.jsxs)("header",{className:v()(S().header,l),children:[(0,i.jsxs)("div",{className:S().logoExpandElemBlock,children:[(0,i.jsx)(z,{onClick:r,isExpanded:t}),(0,i.jsx)(u,{})]}),(0,i.jsx)(m,{}),(0,i.jsxs)("div",{className:S().socialBtnBlock,children:[(0,i.jsx)(U,{}),(0,i.jsx)(O,{})]})]})};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(c,{}),(0,i.jsx)(H,{onClose:r,isOpen:t})]})},V=(n(4831),function(e){var t=e.children;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(G,{}),t]})});function K(e){var t=e.Component,n=e.pageProps;return(0,i.jsx)(V,{children:(0,i.jsx)(t,(0,r.Z)({},n))})}},7891:function(e,t,n){"use strict";var r=n(6042),i=n(5893),o=n(5675),a=n.n(o),l=n(1664),c=n.n(l),s=n(4184),u=n.n(s),d=n(7539),f=n.n(d),p=function(e){var t=e.href,n=void 0===t?"/":t,r=e.image,o=e.classes;return(0,i.jsx)("div",{className:u()([f().imageElement,o||[]]),children:(0,i.jsx)(c(),{href:n||"/",passHref:!0,children:(0,i.jsx)(a(),{src:r.src,layout:"fill",objectFit:"contain",alt:""})})})},g=function(e){var t=e.href,n=void 0===t?"/":t,r=e.text,o=void 0===r?"":r,a=e.classes,l=e.onClick;return(0,i.jsx)("div",{className:u()([f().linkElement,a||[]]),onClick:l,children:(0,i.jsx)(c(),{href:n,children:o})})};t.Z=function(e){var t=e.image;return(0,i.jsx)(i.Fragment,{children:t?(0,i.jsx)(p,(0,r.Z)({},e)):(0,i.jsx)(g,(0,r.Z)({},e))})}},9461:function(e){e.exports={connectWalletButton:"ConnectWalletButton_connectWalletButton__vQHGe"}},8851:function(e){e.exports={expanedElement:"ExpandElement_expanedElement__GsKOf"}},5122:function(e){e.exports={header:"Header_header__NwGZp",logoExpandElemBlock:"Header_logoExpandElemBlock__0gBt7",socialBtnBlock:"Header_socialBtnBlock__FUOAG",header_visible:"Header_header_visible__ST5Dt",header_hidden:"Header_header_hidden__5vnge"}},9631:function(e){e.exports={mobileHeaderContainer:"HeaderMobile_mobileHeaderContainer__l_LoG",mobileHeaderClose:"HeaderMobile_mobileHeaderClose___dWxa",closeBtn:"HeaderMobile_closeBtn__Ib__b",navBlockStyles:"HeaderMobile_navBlockStyles__zgPEb",navLinkStyles:"HeaderMobile_navLinkStyles__9WQBW",navigationMenu:"HeaderMobile_navigationMenu__ePEPQ",visible:"HeaderMobile_visible__jwfV5"}},651:function(e){e.exports={logo:"Logo_logo__Oze7c",text:"Logo_text__Y5Efp"}},5494:function(e){e.exports={linker:"Navigation_linker__SkG8f",navigation:"Navigation_navigation__4g2zE",navigationElement:"Navigation_navigationElement__tiyHz",expandedContainer:"Navigation_expandedContainer__LKHOv",extendedMenu:"Navigation_extendedMenu__AkvJZ",subNavigationElement:"Navigation_subNavigationElement__f_dFm",iconExpandedArrow:"Navigation_iconExpandedArrow__L4hfm"}},3108:function(e){e.exports={socialContainer:"SocialSection_socialContainer__Dds0I",iconLink:"SocialSection_iconLink__xR5II",connectWallet:"SocialSection_connectWallet__s9vhg"}},7539:function(e){e.exports={link:"LinkComponent_link__fzLw2",text:"LinkComponent_text__cgRXX",linkElement:"LinkComponent_linkElement__Dvszp",linkContainer:"LinkComponent_linkContainer__NVEuN",imageWrapper:"LinkComponent_imageWrapper__FYMPS",imageElement:"LinkComponent_imageElement__crR4a"}},4831:function(){},5675:function(e,t,n){e.exports=n(8045)},1664:function(e,t,n){e.exports=n(8418)},4924:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:function(){return r}})},6042:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(4924);function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){(0,r.Z)(e,t,n[t])}))}return e}}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(1118),t(387)}));var n=e.O();_N_E=n}]);