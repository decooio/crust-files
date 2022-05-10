"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[316],{97494:function(n,e,t){var r=t(67294),i=t(29163),o=t(85893);e.Z=r.memo((0,i.ZP)((function(n){var e=n.src,t=void 0===e?"/images/logo_22x.png":e,r=n.className;return(0,o.jsx)("div",{className:r,children:(0,o.jsx)("img",{src:t})})})).withConfig({displayName:"Logo",componentId:"sc-lchex5-0"})(["display:inline-block;img{display:inline-block;height:2.5rem;width:auto;object-fit:contain;}span{font-size:2.45rem;font-weight:400;line-height:2.45rem;color:white;display:inline-block;}"]))},86316:function(n,e,t){t.d(e,{Z:function(){return j}});var r=t(67294),i=t(29163),o=t(58398),a=t(92809),c=t(80318),s=t(94184),l=t.n(s),u=t(11163),d=t(76736),p=t(35766),g=t(14309);var m=t(12415),h=t(97494),f=t(85893);function b(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function x(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?b(Object(t),!0).forEach((function(e){(0,a.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var _=[{path:"/home",icon:"cru-fo-home",name:"Home"},{icon:"cru-fo-file",name:"My Files",expand:!0,items:[{path:"/files",name:"Public"},{path:"/files/vault",name:"Vault"}]},{path:"/setting",icon:"cru-fo-settings",name:"Settings"},{path:"/share-earn",icon:"cru-fo-share-2",name:"Share-and-Earn"},{path:"/user",icon:"cru-fo-user",name:"Premium User"},{icon:"cru-fo-credit-card",name:"Pay to Download",link:"https://p2d.crustapps.net/"},{icon:"cru-fo-database",name:"Get CRU",link:"https://swap.crustapps.net"}];function v(n){var e,t=n.info,r=n.pagePath,i=n.onClickItem,o=t,a=o.items,c=o.expand,s=function(n){return r===n.path};return(0,f.jsxs)("div",{className:"group_menu_wrap",children:[(0,f.jsx)(m.Cj,{className:l()("btn_item",{active:s(t)}),onClick:function(){return i(t)},fillColor:s(t)?"#FF8D00":"#000000",color:s(t)?"#E46A11":"#000000",height:40,content:(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("span",{className:null!==(e=t.icon)&&void 0!==e?e:"cru-fo-file",style:{opacity:t.icon?1:0}}),t.name,a&&(0,f.jsx)("span",{className:l()("group_menu_arrow",c?"cru-fo-chevron-down":"cru-fo-chevron-right")})]})}),c&&a.map((function(n,e){var t;return(0,f.jsx)(m.Cj,{className:l()("btn_item",{active:s(n)}),onClick:function(){return i(n)},fillColor:s(n)?"#FF8D00":"#000000",color:s(n)?"#E46A11":"#000000",height:40,content:(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("span",{className:null!==(t=n.icon)&&void 0!==t?t:"cru-fo-file",style:{opacity:n.icon?1:0}}),n.name]})},"side_menu_c_".concat(e))}))]})}var w="240px",k=r.memo((0,i.ZP)((function(n){var e=(0,u.useRouter)(),t=function(n,e){var t=(0,r.useState)((function(){var t;try{t=JSON.parse(window.sessionStorage.getItem(e))}catch(r){console.info(r)}return t||(t="function"===typeof n?n():n),t})),i=t[0],o=t[1];return[i,function(n){if("function"===typeof n)o((function(t){var r=n(t);return window.sessionStorage.setItem(e,JSON.stringify(r)),r}));else{var t=n;window.sessionStorage.setItem(e,JSON.stringify(t)),o(t)}}]}(_.map((function(n){return!!n.expand})),"side_menus_expand"),i=(0,c.Z)(t,2),o=i[0],a=i[1],s=(0,r.useMemo)((function(){return _.map((function(n,e){return x(x({},n),{},{expand:o[e]})}))}),[o]),m=function(t){t.path&&t.path!==n.path&&e.push(t.path),t.link&&window.open(t.link,"_blank"),t.items&&a((function(n){var e=s.findIndex((function(n){return n===t}));return n.map((function(n,t){return t===e?!n:n}))}))};return(0,f.jsxs)(d.Z.Pushable,{as:p.Z,className:l()(n.className,"basic"),children:[(0,f.jsxs)(d.Z,{as:p.Z,animation:"push",direction:"left",visible:!0,className:"basic",children:[(0,f.jsxs)(g.Z,{textAlign:"center",children:[(0,f.jsx)(g.Z.Row,{columns:1,className:"logoPanel",children:(0,f.jsx)(h.Z,{src:"/images/logo_22x.png"})}),(0,f.jsx)(g.Z.Row,{columns:1,children:(0,f.jsx)("div",{className:"menus",children:s.map((function(e,t){return(0,f.jsx)(v,{info:e,pagePath:n.path,onClickItem:m},"group_menu_".concat(t))}))})})]}),(0,f.jsx)("div",{className:"flex1"})]}),(0,f.jsx)(d.Z.Pusher,{children:n.children})]})})).withConfig({displayName:"SideLayout",componentId:"sc-a6jhx7-0"})(["height:100vh;background:white;overflow-y:auto;min-height:calc(448px + 13rem);margin:unset !important;.ui.sidebar{padding:unset !important;background:black;box-shadow:unset !important;width:",";height:100%;display:flex;flex-direction:column;align-items:center;.ui.grid{margin:unset !important;width:100%;}.logoPanel{padding:4.7rem 0;img{height:24px;}}.menus{padding:0 7px;width:100%;.btn_item{border-radius:0 !important;margin-top:1.07rem;text-align:left;min-width:unset;width:100%;font-family:OpenSans-Regular;.btn_content{min-width:0;flex:1;font-weight:500;font-size:18px;text-align:left;color:var(--secend-color);white-space:nowrap;padding:0 6px;span{position:relative;top:1px;margin-right:8px;}}&.active{.btn_content{position:relative;color:white;border-right:solid 0.2rem var(--primary-color);}}&.active2{color:white;border-right:unset;background-color:transparent;}.group_menu_arrow{float:right;font-size:22px;top:9px !important;}}}.share_earn{cursor:pointer;width:15rem;height:auto;margin-bottom:1rem;}}.pusher{width:calc(100vw - ",");height:100%;transform:translate3d(",",0,0) !important;overflow:auto !important;background:white;}"],w,w,w)),y=t(7703);var j=r.memo((0,i.ZP)((function(n){var e=n.path,t=n.className,r=n.children;return(0,f.jsx)(k,{path:e,className:t,children:(0,f.jsxs)(o.Oc,{className:"full",children:[(0,f.jsx)(y.Z,{}),(0,f.jsx)(o.oy,{className:"pusl_center_flex",children:(0,f.jsx)(o.Oc,{className:"pusl_center_flex_content",children:r})})]})})})).withConfig({displayName:"PageUserSideLayout",componentId:"sc-1wn03y0-0"})([".pusl_center_flex{width:100%;overflow:auto;flex:1;}.pusl_center_flex_content{flex-shrink:0;max-width:90rem;width:100%;min-width:70rem;padding:2.29rem;height:max-content;}"]))},12415:function(n,e,t){t.d(e,{JV:function(){return p},Cj:function(){return m},G3:function(){return b},xe:function(){return x}});var r=t(94184),i=t.n(r),o=t(67294),a=t(29163),c=t(96486),s=t.n(c),l=t(85893),u=function(n,e){return"string"===typeof n?n:e?"".concat(s().round(n),"px"):"".concat(s().round(n,4),"rem")},d=function(n){return"number"===typeof n||n.endsWith("px")};var p=(0,a.ZP)((function(n){var e=n.className,t=n.position,r=void 0===t?"left":t,a=n.fullH,c=void 0!==a&&a,p=n.count,g=void 0===p?3:p,m=n.width,h=void 0===m?120:m,f=n.color,b=void 0===f?"#191919":f,x=n.fillColor,_=void 0===x?"#000000":x,v=n.type,w=void 0===v?2:v,k=c?g+1:g,y=d(h),j="number"===typeof h?h:s().toNumber(h.replace("px","").replace("rem","")),N=(0,o.useMemo)((function(){return j/k}),[h,k]),P=(0,o.useMemo)((function(){return(2*(k-1)+w)*N}),[k,w,N]),C=(0,o.useMemo)((function(){for(var n=[],e=0;e<k;e++){var t=0===e&&c,i=t?"100%":P-2*e*N,o=u(i,y),a=t?0:"calc(50% - ".concat(u(i/2,y),")"),s={position:"absolute",height:o,width:u(N,y),top:a,backgroundColor:b};"left"===r?s.left=u(e*N,y):"right"===r&&(s.right=u(e*N,y)),n.push({style:s})}return n}),[k,N,P,c,r,y]),z=(0,o.useMemo)((function(){for(var n=[],e=0;e<k-1;e++){var t=P-2*(e+1)*N,i=u(t,y),o="calc(50% - ".concat(u(t/2,y),")"),a={position:"absolute",height:i,width:u(N,y),top:o,zIndex:2,backgroundColor:_};"left"===r?a.left=u(e*N,y):"right"===r&&(a.right=u(e*N,y)),n.push({style:a})}return n}),[k,N,P,c,r,y]);return(0,l.jsxs)("div",{className:i()(e,"Pixel_".concat(r)),children:[C.map((function(n,e){return(0,l.jsx)("div",{style:n.style},"pixels_".concat(e))})),z.map((function(n,e){return(0,l.jsx)("div",{style:n.style},"fill_pixels_".concat(e))}))]})})).withConfig({displayName:"Pixels__Pixel",componentId:"sc-1vz4at9-0"})(["z-index:2;display:flex;height:100%;position:relative;width:",";&.Pixel_left{flex-direction:row;}&.Pixel_right{flex-direction:row-reverse;}"],(function(n){var e=n.width,t=void 0===e?120:e;return"number"===typeof t?t+"px":t})),g="#000000";var m=(0,a.ZP)((function(n){var e=n.height,t=void 0===e?60:e,r=n.className,o=n.color,a=void 0===o?"#999999":o,c=n.fillColor,m=void 0===c?g:c,h=n.content,f=n.disabled,b=n.unClick,x=n.onClick,_=d(t),v="number"===typeof t?t:s().toNumber(t.replace("px","").replace("rem","")),w=u(v/5*3,_);return(0,l.jsxs)("div",{className:i()(r,{disabled:f,unClick:b}),onClick:x,children:[(0,l.jsx)(p,{type:1,width:w,color:a,fillColor:m,position:"right"}),(0,l.jsx)("div",{className:"btn_content",children:h}),(0,l.jsx)(p,{type:1,width:w,color:a,fillColor:m,position:"left"})]})})).withConfig({displayName:"Pixels__PixelBtn",componentId:"sc-1vz4at9-1"})(["display:flex;user-select:none;align-items:center;width:min-content;height:",";cursor:pointer;&.disabled{cursor:not-allowed;opacity:0.6;}&.unClick{cursor:default;}.btn_content{height:100%;line-height:",";padding:0 20px;min-width:calc(130px + 7.14rem);font-size:1.71rem;font-family:OpenSans-SemiBold;color:white;text-align:center;background-color:",";}&:hover{}"],(function(n){var e=n.height;return u(e,d(e))}),(function(n){var e=n.height;return u(e,d(e))}),(function(n){var e=n.fillColor;return void 0===e?g:e})),h=51,f=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return Math.ceil(.725*n*e)},b=a.ZP.div.withConfig({displayName:"Pixels__PixelBtn1",componentId:"sc-1vz4at9-2"})(["color:white;font-family:'OpenSans-SemiBold';font-size:32px;line-height:","px;height:","px;text-align:center;width:357px;cursor:pointer;transition:all ease-in-out 200ms;background-image:url('/images/btn/btn_bg_l.png'),url('/images/btn/btn_bg_c.png'),url('/images/btn/btn_bg_r.png');background-position:0 0,","px 0,right center;background-repeat:no-repeat;background-attachment:scroll;background-size:","px 100%,calc(100% - ","px) 100%,","px 100%;&.dark{background-image:url('/images/btn/btn_dark_bg_l.png'),url('/images/btn/btn_dark_bg_c.png'),url('/images/btn/btn_dark_bg_r.png');}transform-origin:center top;&.style_left{transform-origin:right top;background-image:url('/images/btn/btn_bg_l.png'),url('/images/btn/btn_bg_c.png'),url('/images/btn/btn_bg_r2.png');&.dark{background-image:url('/images/btn/btn_dark_bg_l.png'),url('/images/btn/btn_dark_bg_c.png'),url('/images/btn/btn_dark_bg_r2.png');}}&.style_right{transform-origin:left top;background-image:url('/images/btn/btn_bg_l2.png'),url('/images/btn/btn_bg_c.png'),url('/images/btn/btn_bg_r.png');&.dark{background-image:url('/images/btn/btn_dark_bg_l2.png'),url('/images/btn/btn_dark_bg_c.png'),url('/images/btn/btn_dark_bg_r.png');}}@media screen and (max-width:1440px){transform:scale(0.9);}@media screen and (max-width:1296px){transform:scale(0.8);}"],(function(n){var e=n.height;return void 0===e?h:e}),(function(n){var e=n.height;return void 0===e?h:e}),(function(n){var e=n.height;return f(void 0===e?h:e)-2}),(function(n){var e=n.height;return f(void 0===e?h:e)}),(function(n){var e=n.height;return f(void 0===e?h:e,2)-4}),(function(n){var e=n.height;return f(void 0===e?h:e)})),x=a.ZP.div.attrs((function(n){return{board_size:n.board_size||12}})).withConfig({displayName:"Pixels__PixelBoard",componentId:"sc-1vz4at9-3"})(["padding:","px;background-repeat:no-repeat;background-size:calc(100% - ","px) ","px,calc(100% - ","px) ","px,","px calc(100% - ","px),","px calc(100% - ","px);background-position:","px top,","px bottom,left ","px,right ","px;background-image:linear-gradient(0deg,black,black),linear-gradient(0deg,black,black),linear-gradient(0deg,black,black),linear-gradient(0deg,black,black);"],(function(n){return n.board_size}),(function(n){return 2*n.board_size}),(function(n){return n.board_size}),(function(n){return 2*n.board_size}),(function(n){return n.board_size}),(function(n){return n.board_size}),(function(n){return 2*n.board_size}),(function(n){return n.board_size}),(function(n){return 2*n.board_size}),(function(n){return n.board_size}),(function(n){return n.board_size}),(function(n){return n.board_size}),(function(n){return n.board_size}))}}]);