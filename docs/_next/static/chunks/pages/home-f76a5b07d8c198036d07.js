(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[229],{97494:function(e,n,t){"use strict";var i=t(67294),r=t(29163),o=t(85893);n.Z=i.memo((0,r.ZP)((function(e){var n=e.src,t=void 0===n?"/images/logo_22x.png":n,i=e.className;return(0,o.jsx)("div",{className:i,children:(0,o.jsx)("img",{src:t})})})).withConfig({displayName:"Logo",componentId:"sc-lchex5-0"})(["display:inline-block;img{display:inline-block;height:2.5rem;width:auto;object-fit:contain;}span{font-size:2.45rem;font-weight:400;line-height:2.45rem;color:white;display:inline-block;}"]))},91777:function(e,n,t){"use strict";t.d(n,{Z:function(){return v}});var i=t(67294),r=t(29163),o=t(58398),a=t(94184),s=t.n(a),l=t(11163),c=t(76736),d=t(35766),u=t(14309),m=t(12415),h=t(97494),p=t(85893),g=[{path:"/home",icon:"cru-fo-home",name:"Home"},{icon:"cru-fo-file",isParent:!0,name:"My Files"},{path:"/files",name:"Public"},{path:"/files/vault",name:"Vault"},{path:"/setting",icon:"cru-fo-settings",name:"Settings"},{path:"/share-earn",icon:"cru-fo-share-2",name:"Share-and-Earn"},{path:"/user",icon:"cru-fo-user",name:"Premium User"},{icon:"cru-fo-database",name:"Get CRU",link:"https://swap.crustapps.net"}];var f="238px",b="500px",x=i.memo((0,r.ZP)((function(e){var n=(0,l.useRouter)(),t=(0,i.useCallback)((function(t,i){var r=i.index,o=g[r];o.path&&o.path!==e.path&&n.push(o.path),o.link&&window.open(o.link,"_blank")}),[e.path]),r=function(n){return e.path===n.path};return(0,p.jsxs)(c.Z.Pushable,{as:d.Z,className:s()(e.className,"basic"),children:[(0,p.jsxs)(c.Z,{as:d.Z,animation:"push",direction:"left",visible:!0,className:"basic",children:[(0,p.jsxs)(u.Z,{textAlign:"center",children:[(0,p.jsx)(u.Z.Row,{columns:1,className:"logoPanel",children:(0,p.jsx)(h.Z,{src:"/images/logo_22x.png"})}),(0,p.jsx)(u.Z.Row,{columns:1,children:(0,p.jsx)("div",{className:"menus",children:g.map((function(e,n){var i;return(0,p.jsx)(m.Cj,{unClick:!e.path&&!e.link,className:s()("btn_item",{active:r(e)}),onClick:function(){return t(null,{index:n})},fillColor:r(e)?"#FF8D00":"#000000",color:r(e)?"#E46A11":"#000000",height:40,content:(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("span",{className:null!==(i=e.icon)&&void 0!==i?i:"cru-fo-file",style:{opacity:e.icon?1:0}}),e.name]})},"side_menu_".concat(n))}))})})]}),(0,p.jsx)("div",{className:"flex1"})]}),(0,p.jsx)(c.Z.Pusher,{children:e.children})]})})).withConfig({displayName:"SideLayout",componentId:"sc-a6jhx7-0"})(["height:100vh;background:white;overflow-y:auto;.ui.sidebar{padding:unset !important;background:black;box-shadow:unset !important;width:",";min-height:",";display:flex;flex-direction:column;align-items:center;.ui.grid{margin:unset !important;width:100%;}.logoPanel{padding:4.7rem 0;img{height:24px;}}.menus{padding:0 7px;width:100%;.btn_item{border-radius:0 !important;margin-top:1.07rem;text-align:left;min-width:unset;width:100%;font-family:OpenSans-Regular;.btn_content{min-width:0;flex:1;font-weight:500;font-size:18px;text-align:left;color:var(--secend-color);white-space:nowrap;padding:0 6px;span{position:relative;top:1px;margin-right:8px;}}&.active{.btn_content{position:relative;color:white;border-right:solid 0.2rem var(--primary-color);}}&.active2{color:white;border-right:unset;background-color:transparent;}}}.share_earn{cursor:pointer;width:15rem;height:auto;margin-bottom:1rem;}}.pusher{width:calc(100vw - ",");height:100vh;min-height:",";transform:translate3d(",",0,0) !important;overflow:auto !important;background:white;}"],f,b,f,b,f)),_=t(18988);var v=i.memo((0,r.ZP)((function(e){var n=e.path,t=e.className,i=e.children;return(0,p.jsx)(x,{path:n,className:t,children:(0,p.jsxs)(o.Oc,{className:"full",children:[(0,p.jsx)(_.Z,{}),(0,p.jsx)(o.oy,{className:"pusl_center_flex",children:(0,p.jsx)(o.Oc,{className:"pusl_center_flex_content",children:i})})]})})})).withConfig({displayName:"PageUserSideLayout",componentId:"sc-1wn03y0-0"})([".pusl_center_flex{width:100%;overflow:auto;flex:1;}.pusl_center_flex_content{flex-shrink:0;max-width:90rem;width:100%;min-width:70rem;padding:2.29rem;height:max-content;}"]))},12415:function(e,n,t){"use strict";t.d(n,{JV:function(){return m},Cj:function(){return p},G3:function(){return b},xe:function(){return x}});var i=t(94184),r=t.n(i),o=t(67294),a=t(29163),s=t(96486),l=t.n(s),c=t(85893),d=function(e,n){return"string"===typeof e?e:n?"".concat(l().round(e),"px"):"".concat(l().round(e,4),"rem")},u=function(e){return"number"===typeof e||e.endsWith("px")};var m=(0,a.ZP)((function(e){var n=e.className,t=e.position,i=void 0===t?"left":t,a=e.fullH,s=void 0!==a&&a,m=e.count,h=void 0===m?3:m,p=e.width,g=void 0===p?120:p,f=e.color,b=void 0===f?"#191919":f,x=e.fillColor,_=void 0===x?"#000000":x,v=e.type,w=void 0===v?2:v,k=s?h+1:h,y=u(g),j="number"===typeof g?g:l().toNumber(g.replace("px","").replace("rem","")),N=(0,o.useMemo)((function(){return j/k}),[g,k]),C=(0,o.useMemo)((function(){return(2*(k-1)+w)*N}),[k,w,N]),P=(0,o.useMemo)((function(){for(var e=[],n=0;n<k;n++){var t=0===n&&s,r=t?"100%":C-2*n*N,o=d(r,y),a=t?0:"calc(50% - ".concat(d(r/2,y),")"),l={position:"absolute",height:o,width:d(N,y),top:a,backgroundColor:b};"left"===i?l.left=d(n*N,y):"right"===i&&(l.right=d(n*N,y)),e.push({style:l})}return e}),[k,N,C,s,i,y]),z=(0,o.useMemo)((function(){for(var e=[],n=0;n<k-1;n++){var t=C-2*(n+1)*N,r=d(t,y),o="calc(50% - ".concat(d(t/2,y),")"),a={position:"absolute",height:r,width:d(N,y),top:o,zIndex:2,backgroundColor:_};"left"===i?a.left=d(n*N,y):"right"===i&&(a.right=d(n*N,y)),e.push({style:a})}return e}),[k,N,C,s,i,y]);return(0,c.jsxs)("div",{className:r()(n,"Pixel_".concat(i)),children:[P.map((function(e,n){return(0,c.jsx)("div",{style:e.style},"pixels_".concat(n))})),z.map((function(e,n){return(0,c.jsx)("div",{style:e.style},"fill_pixels_".concat(n))}))]})})).withConfig({displayName:"Pixels__Pixel",componentId:"sc-1vz4at9-0"})(["z-index:2;display:flex;height:100%;position:relative;width:",";&.Pixel_left{flex-direction:row;}&.Pixel_right{flex-direction:row-reverse;}"],(function(e){var n=e.width,t=void 0===n?120:n;return"number"===typeof t?t+"px":t})),h="#000000";var p=(0,a.ZP)((function(e){var n=e.height,t=void 0===n?60:n,i=e.className,o=e.color,a=void 0===o?"#999999":o,s=e.fillColor,p=void 0===s?h:s,g=e.content,f=e.disabled,b=e.unClick,x=e.onClick,_=u(t),v="number"===typeof t?t:l().toNumber(t.replace("px","").replace("rem","")),w=d(v/5*3,_);return(0,c.jsxs)("div",{className:r()(i,{disabled:f,unClick:b}),onClick:x,children:[(0,c.jsx)(m,{type:1,width:w,color:a,fillColor:p,position:"right"}),(0,c.jsx)("div",{className:"btn_content",children:g}),(0,c.jsx)(m,{type:1,width:w,color:a,fillColor:p,position:"left"})]})})).withConfig({displayName:"Pixels__PixelBtn",componentId:"sc-1vz4at9-1"})(["display:flex;align-items:center;width:min-content;height:",";cursor:pointer;&.disabled{cursor:not-allowed;opacity:0.6;}&.unClick{cursor:default;}.btn_content{height:100%;line-height:",";padding:0 20px;min-width:calc(130px + 7.14rem);font-size:1.71rem;font-family:OpenSans-SemiBold;color:white;text-align:center;background-color:",";}&:hover{}"],(function(e){var n=e.height;return d(n,u(n))}),(function(e){var n=e.height;return d(n,u(n))}),(function(e){var n=e.fillColor;return void 0===n?h:n})),g=51,f=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return Math.ceil(.725*e*n)},b=a.ZP.div.withConfig({displayName:"Pixels__PixelBtn1",componentId:"sc-1vz4at9-2"})(["color:white;font-family:'OpenSans-SemiBold';font-size:32px;line-height:","px;height:","px;text-align:center;width:357px;cursor:pointer;transition:all ease-in-out 200ms;background-image:url('/images/btn/btn_bg_l.png'),url('/images/btn/btn_bg_c.png'),url('/images/btn/btn_bg_r.png');background-position:0 0,","px 0,right center;background-repeat:no-repeat;background-attachment:scroll;background-size:","px 100%,calc(100% - ","px) 100%,","px 100%;&.dark{background-image:url('/images/btn/btn_dark_bg_l.png'),url('/images/btn/btn_dark_bg_c.png'),url('/images/btn/btn_dark_bg_r.png');}transform-origin:center top;&.style_left{transform-origin:right top;background-image:url('/images/btn/btn_bg_l.png'),url('/images/btn/btn_bg_c.png'),url('/images/btn/btn_bg_r2.png');&.dark{background-image:url('/images/btn/btn_dark_bg_l.png'),url('/images/btn/btn_dark_bg_c.png'),url('/images/btn/btn_dark_bg_r2.png');}}&.style_right{transform-origin:left top;background-image:url('/images/btn/btn_bg_l2.png'),url('/images/btn/btn_bg_c.png'),url('/images/btn/btn_bg_r.png');&.dark{background-image:url('/images/btn/btn_dark_bg_l2.png'),url('/images/btn/btn_dark_bg_c.png'),url('/images/btn/btn_dark_bg_r.png');}}@media screen and (max-width:1440px){transform:scale(0.9);}@media screen and (max-width:1296px){transform:scale(0.8);}"],(function(e){var n=e.height;return void 0===n?g:n}),(function(e){var n=e.height;return void 0===n?g:n}),(function(e){var n=e.height;return f(void 0===n?g:n)-2}),(function(e){var n=e.height;return f(void 0===n?g:n)}),(function(e){var n=e.height;return f(void 0===n?g:n,2)-4}),(function(e){var n=e.height;return f(void 0===n?g:n)})),x=a.ZP.div.attrs((function(e){return{board_size:e.board_size||12}})).withConfig({displayName:"Pixels__PixelBoard",componentId:"sc-1vz4at9-3"})(["padding:","px;background-repeat:no-repeat;background-size:calc(100% - ","px) ","px,calc(100% - ","px) ","px,","px calc(100% - ","px),","px calc(100% - ","px);background-position:","px top,","px bottom,left ","px,right ","px;background-image:linear-gradient(0deg,black,black),linear-gradient(0deg,black,black),linear-gradient(0deg,black,black),linear-gradient(0deg,black,black);"],(function(e){return e.board_size}),(function(e){return 2*e.board_size}),(function(e){return e.board_size}),(function(e){return 2*e.board_size}),(function(e){return e.board_size}),(function(e){return e.board_size}),(function(e){return 2*e.board_size}),(function(e){return e.board_size}),(function(e){return 2*e.board_size}),(function(e){return e.board_size}),(function(e){return e.board_size}),(function(e){return e.board_size}),(function(e){return e.board_size}))},31484:function(e,n,t){"use strict";t.r(n),t.d(n,{Home:function(){return c}});var i=t(11163),r=t(67294),o=t(29163),a=t(91777),s=t(13711),l=t(85893);var c=r.memo((0,o.ZP)((function(e){var n=(0,i.useRouter)(),t=(0,s.S)().isPremiumUser;return(0,l.jsxs)(a.Z,{path:"/home",className:e.className,children:[(0,l.jsxs)("div",{className:"home--slog",children:["Upload and store your File to IPFS ",(0,l.jsx)("br",{}),"via ",(0,l.jsx)("a",{target:"_blank",href:"https://crust.network/",rel:"noreferrer",children:"Crust"}),"\u2019s decentralized storage network."]}),(0,l.jsxs)("div",{className:"home--cards",children:[(0,l.jsxs)("div",{className:"home--card",onClick:function(){return n.push("/files")},children:[(0,l.jsx)("div",{className:"home--card-Title home--borderBottom1",children:"Public"}),(0,l.jsx)("div",{className:"home--card-Content",children:"Your file will be just as it is supposed to be. No encryption, open access for all. It\u2019s perfectly suitable for storing and sharing non-sensitive files."})]}),(0,l.jsxs)("div",{className:"home--card",onClick:function(){return t&&n.push("/files/vault")},children:[(0,l.jsx)("div",{className:"home--card-Title home--borderBottom2",children:"Vault"}),(0,l.jsx)("div",{className:"home--card-Content",children:"This is your personal file vault which is 100% private, 100% secure and 100% owned by YOU. Every file will be encrypted by a locally-stored encryption key."}),!t&&(0,l.jsxs)("div",{className:"home--CommingSoon",children:[(0,l.jsxs)("div",{children:["Get a ",(0,l.jsx)("span",{onClick:function(){return n.push("/user")},children:"Premium"})]}),"to unlock."]})]}),(0,l.jsxs)("div",{className:"home--card",children:[(0,l.jsx)("div",{className:"home--card-Title home--borderBottom3",children:"SecureShare"}),(0,l.jsx)("div",{className:"home--card-Content",children:"Your file will be encrypted locally with a unique extraction code before a share link is created. Try this if you\u2019d like to share something private or sensitive to your friends."}),(0,l.jsx)("div",{className:"home--CommingSoon",children:"Coming soon..."})]})]})]})})).withConfig({displayName:"home__Home",componentId:"sc-18ayjut-0"})(["color:var(--main-color);.pusl_center_flex_content{width:76.24rem;min-width:unset;}.home--slog{display:inline-block;font-size:3.428571rem;font-weight:600;line-height:4.642857rem;margin-top:5rem;a{color:var(--primary-color);}}.home--cards{.home--card{cursor:pointer;overflow:hidden;position:relative;background-color:white;margin-top:2.57rem;width:21.7rem;height:21.43rem;display:inline-block;border-radius:3.571429rem;border:solid 2px #000000;padding:2.285714rem;&:nth-child(n + 2){margin-left:2.57rem;}&:hover{filter:drop-shadow(0px 10px 25px rgba(0,0,0,0.2));.home--CommingSoon{display:flex;}}}.home--card-Title{display:inline-block;font-size:2.285714rem;line-height:4.285714rem;}.home--borderBottom1{border-bottom:5px solid #92D8F7;}.home--borderBottom2{border-bottom:5px solid #A7ECC9;}.home--borderBottom3{border-bottom:5px solid #FFD7A6;}.home--card-Content{font-size:1.142857rem;line-height:1.571429rem;white-space:pre-wrap;margin-top:1.857143rem;}.home--CommingSoon{display:none;position:absolute;left:0;top:0;line-height:2.6rem;background-color:white;width:100%;height:100%;flex-direction:column;justify-content:center;align-items:center;text-align:center;font-size:2.285714rem;white-space:nowrap;span{color:var(--primary-color);text-decoration:underline;}}}"]));n.default=c},91344:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/home",function(){return t(31484)}])}},function(e){e.O(0,[729,774,888,179],(function(){return n=91344,e(e.s=n);var n}));var n=e.O();_N_E=n}]);