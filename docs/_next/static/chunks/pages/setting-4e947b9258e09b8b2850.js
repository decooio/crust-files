(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[552],{97494:function(e,t,r){"use strict";var n=r(67294),a=r(29163),s=r(85893);t.Z=n.memo((0,a.ZP)((function(e){var t=e.src,r=void 0===t?"/images/logo_22x.png":t,n=e.className;return(0,s.jsx)("div",{className:n,children:(0,s.jsx)("img",{src:r})})})).withConfig({displayName:"Logo",componentId:"sc-lchex5-0"})(["display:inline-block;img{display:inline-block;height:2.5rem;width:auto;object-fit:contain;}span{font-size:2.45rem;font-weight:400;line-height:2.45rem;color:white;display:inline-block;}"]))},60649:function(e,t,r){"use strict";var n=r(94184),a=r.n(n),s=r(96486),o=r.n(s),i=r(11163),c=r(67294),l=r(76736),u=r(35766),m=r(14309),d=r(94983),f=r(29163),p=r(97494),h=r(85893),g=[{path:"/home",icon:"cru-fo-home",name:"Home"},{path:"/files",icon:"cru-fo-file",isParent:!0,name:"My Files"},{path:"/files",name:"Public"},{path:"/files/vault",name:"Vault"},{path:"/setting",icon:"cru-fo-settings",name:"Settings"},{path:"/share-earn",icon:"cru-fo-share-2",name:"Share-and-Earn"},{path:"/user",icon:"cru-fo-user",name:"Premium User"}];var b="15.7rem";t.Z=c.memo((0,f.ZP)((function(e){var t=(0,i.useRouter)(),r=(0,c.useCallback)((function(r,n){var a=n.index,s=g[a];s.path!==e.path&&t.push(s.path)}),[e.path]),n=(0,c.useMemo)((function(){return o().findIndex(g,(function(e){return"/share-earn"===e.path}))}),[]),s=function(t){return e.path===t.path};return(0,h.jsxs)(l.Z.Pushable,{as:u.Z,className:a()(e.className,"basic"),children:[(0,h.jsxs)(l.Z,{as:u.Z,animation:"push",direction:"left",visible:!0,className:"basic",children:[(0,h.jsxs)(m.Z,{textAlign:"center",children:[(0,h.jsx)(m.Z.Row,{columns:1,className:"logoPanel",children:(0,h.jsx)(p.Z,{src:"/images/logo_12x.png"})}),(0,h.jsx)(m.Z.Row,{columns:1,children:(0,h.jsx)(d.Z,{fluid:!0,vertical:!0,borderless:!0,children:g.map((function(t,n){var a,o;return(0,h.jsx)(d.Z.Item,{className:(o=t,e.path.startsWith(o.path)&&o.isParent?"active2":""),position:"left",index:n,active:s(t),icon:(0,h.jsx)("span",{className:null!==(a=t.icon)&&void 0!==a?a:"cru-fo-file",style:{opacity:t.icon?1:0}}),name:t.name,onClick:r},"side_menu_".concat(n))}))})})]}),(0,h.jsx)("div",{className:"flex1"}),(0,h.jsx)("img",{className:"share_earn",onClick:function(){return r({},{index:n})},src:"/images/share_earn.png"})]}),(0,h.jsx)(l.Z.Pusher,{children:e.children})]})})).withConfig({displayName:"SideLayout",componentId:"sc-a6jhx7-0"})(["height:100vh;background:white;overflow-y:auto;.ui.sidebar{padding:unset !important;background:#F5F5F5;box-shadow:unset !important;width:",";min-height:821px;display:flex;flex-direction:column;align-items:center;.ui.grid{margin:unset !important;width:100%;}.logoPanel{padding:4.7rem 0;img{height:1.7rem;}}.menu{box-shadow:unset !important;border:unset !important;border-radius:unset !important;background:unset !important;.item{border-radius:0 !important;text-align:left;padding-left:2rem !important;font-weight:500;font-size:1.3rem;color:var(--secend-color);font-family:OpenSans-Regular;&.active{position:relative;color:var(--main-color);font-family:OpenSans-Medium;border-right:solid 0.2rem var(--primary-color);}&.active2{color:var(--main-color);border-right:unset;background-color:transparent;}span{float:left;margin-right:10px;}}}.share_earn{cursor:pointer;width:15rem;height:auto;margin-bottom:1rem;}}.pusher{width:calc(100vw - ",");height:100vh;min-height:821px;transform:translate3d(",",0,0) !important;overflow:auto !important;background:white;}"],b,b,b))},17082:function(e,t,r){"use strict";r.d(t,{vZ:function(){return g},hC:function(){return b},MH:function(){return v}});var n=r(92809),a=r(30266),s=r(80318),o=r(809),i=r.n(o),c=r(67294),l=r(58971),u=r.n(l),m=r(65058);function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var p=r(21994).Cypher,h=new p(8),g=function(e){return new Promise((function(t,r){var n=new FileReader;n.onload=function(){n.result&&t(n.result)},n.onerror=r,n.readAsArrayBuffer(e)}))};function b(e){try{var t=e&&e.trim();if(t){var r=t.split(" ");if(1===r.length&&r[0]){var n=r[0],a=window.atob(n),s=h.phraseFromSecret(a);if(s&&s.split(" ").length>=4)return{secret:n,seeds:s}}else if(r.length>=4){var o=h.secretFromPhrase(t);if(o&&o.split("-").length>=4)return{secret:window.btoa(o),seeds:t}}}return null}catch(i){return null}}function v(){var e=(0,c.useState)({}),t=e[0],r=e[1],n=(0,m.O)(),o=(0,s.Z)(n,2),l=o[0],d=o[1];(0,c.useEffect)((function(){var e=u().get("user:crypto");e&&r(e),d(!0)}),[]);var h=(0,c.useCallback)((function(e){r(e),u().set("user:crypto",e)}),[]),g=(0,c.useCallback)((0,a.Z)(i().mark((function e(){var t,r,n,a,s;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new p(8),r=t.genMnemonics(),n=r.secret,a=r.mnemonics,s={secret:window.btoa(n),seeds:a},console.info("length:",n.length,s.secret.length),h(s),e.abrupt("return",s);case 6:case"end":return e.stop()}}),e)}))),[]);return(0,c.useMemo)((function(){return f(f({},t),{},{generate:g,set:h,init:l})}),[t,h,l,g])}},20478:function(e,t,r){"use strict";r.d(t,{V:function(){return i}});var n=r(67294),a=r(12752),s=r(20640),o=r.n(s);function i(){var e=(0,n.useContext)(a.Il).alert;return(0,n.useCallback)((function(t){o()(t),e.alert({msg:"Copied",type:"success"})}),[e])}},8130:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return W}});var n=r(83789),a=r(80318),s=r(94184),o=r.n(s),i=r(93162),c=r.n(i),l=r(67294),u=r(23499),m=r(35766),d=r(21004),f=r(49147),p=r(27416),h=r(29163),g=r(60954),b=r(92809),v=r(10219),x=r(345),y=r(60416),j=r(17082),w=r(85893),N=["alert","onSuccess","toggleOpen"];function k(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?k(Object(r),!0).forEach((function(t){(0,b.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):k(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var C=l.memo((0,h.ZP)((function(e){var t=e.alert,r=e.onSuccess,n=e.toggleOpen,a=(0,v.Z)(e,N),s=(0,l.useState)(""),o=s[0],i=s[1],c=(0,l.useCallback)((function(e,t){var r=t.value;i(r)}),[]),u=(0,l.useCallback)((function(){var e=(0,j.hC)(o);e?(r(e),n(!1)):t.error("Please check input value")}),[o,t]),m=(0,l.useCallback)((function(){i(""),n(!1)}),[]);return(0,w.jsxs)(x.Z,O(O({closeIcon:(0,w.jsx)("span",{className:"close icon cru-fo-x"}),onClose:m},a),{},{children:[(0,w.jsx)(x.Z.Header,{content:"Input a new key"}),(0,w.jsxs)(x.Z.Content,{children:[(0,w.jsx)(y.Z,{fluid:!0,onChange:c}),(0,w.jsxs)("div",{className:"btns",children:[(0,w.jsx)(g.Z,{content:"Input",onClick:u}),(0,w.jsx)(g.Z,{content:"Cancel",onClick:function(){return n(!1)}})]})]})]}))})).withConfig({displayName:"ModalNewKey",componentId:"sc-1ramix5-0"})(["width:34.3rem !important;.header{height:3.93rem;font-size:1.3rem !important;padding:0 1.14rem !important;font-weight:600 !important;line-height:3.93rem !important;}.close.icon{top:0.5rem;right:0.6rem;color:#666666;}.content{padding:1rem !important;input{border:0.07rem solid #CCCCCC !important;border-radius:0.57rem !important;}.btns{padding-top:2.3rem;button{width:calc(50% - 0.5rem) !important;margin:unset;}button:first-child{margin-right:1rem;}}}"])),Z=r(60649),P=r(18988),S=r(12752),E=r(20478),_=r(65058),F=r(96705);function I(e,t){var r="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"===typeof e)return M(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return M(e,t)}(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e){throw e})),f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,o=!0,i=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return o=e.done,e},e:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e){i=!0,s=e})),f:function(){try{o||null==r.return||r.return()}finally{if(i)throw s}}}}function M(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var A={crust:"Crust Wallet",metamask:"MetaMask","metamask-Polygon":"MetaMask","metamask-Moonriver":"MetaMask","polkadot-js":"Polkadot Extension",near:"Near Wallet",elrond:"Elrond(Maiar Wallet)",flow:"Flow Wallet",solana:"Solana(Phantom Wallet)","wallet-connect":"WalletConnect"};var W=l.memo((0,h.ZP)((function(e){var t=e.className,r=(0,u.$)().t,s=(0,j.MH)(),i=(0,l.useContext)(S.Il).alert,h=(0,_.O)(!1),b=(0,a.Z)(h,2),v=b[0],x=b[1],y=(0,_.O)(),N=(0,a.Z)(y,2),k=N[0],O=N[1],M=(0,E.V)(),W=(0,F.WY)(),D=(0,l.useMemo)((function(){return W.member&&1===W.member.member_state?"Premium":"Trial"}),[W]),T="crust"===W.wallet,U=(0,F.Yg)(),z=(0,l.useRef)(null),H=(0,l.useCallback)((function(){z.current&&z.current.click()}),[z]),R=(0,l.useCallback)((function(e){try{var t=new FileReader,a=e.target.files;if(!a)return;if(t.readAsText(a[0],"UTF-8"),!/(.json)$/i.test(e.target.value))return i.error(r("File error"));t.onload=function(e){var t,a=JSON.parse(null===(t=e.target)||void 0===t?void 0:t.result),o={files:[]};if(Array.isArray(a))o.files=a;else{if(!a.files||!Array.isArray(a.files))return i.error(r("File content error"));o.secret=a.secret,o.files=a.files}if(s.secret&&o.secret&&o.secret!==s.secret)return i.error("Two secrets were found, and they are different.");if(o.secret){var c=(0,j.hC)(o.secret);c&&s.set(c)}var l,u=[],m={},d=I(o.files);try{for(d.s();!(l=d.n()).done;){var f=l.value;f.Hash&&f.Name&&f.UpEndpoint&&f.PinEndpoint&&(u.push(f),m[f.Hash]=!0)}}catch(h){d.e(h)}finally{d.f()}var p=U.files.filter((function(e){return!m[e.Hash]}));U.setFiles([].concat(u,(0,n.Z)(p))),i.alert({msg:r("Import Success"),type:"success"})}}catch(e){i.alert({msg:r("File content error"),type:"error"})}}),[U,s.set,i,r]),L=(0,l.useCallback)((function(){var e={files:U.files,secret:s.secret},t=new Blob([JSON.stringify(e)],{type:"application/json; charset=utf-8"});c().saveAs(t,"backup.json")}),[U,s]);return(0,w.jsx)(Z.Z,{path:"/setting",children:(0,w.jsxs)(m.Z,{basic:!0,className:t,children:[(0,w.jsx)("input",{onChange:R,ref:z,style:{display:"none"},type:"file"}),(0,w.jsx)(P.Z,{}),v&&(0,w.jsx)(C,{alert:i,size:"tiny",open:!0,toggleOpen:x,onSuccess:s.set}),(0,w.jsxs)(m.Z,{basic:!0,className:"mcontent",children:[(0,w.jsxs)(m.Z,{basic:!0,className:"mcard",children:[(0,w.jsx)("div",{className:"title font-sans-semibold",children:r("User Profile")}),(0,w.jsxs)("div",{className:"text font-sans-regular",children:["".concat(r("Web3 Identity Logged-in:")," "),(0,w.jsx)("span",{className:"bold-text font-sans-semibold",children:W.account})]}),(0,w.jsxs)("div",{className:"text font-sans-regular",children:["".concat(r("Logged-in Wallet:")," "),(0,w.jsx)("span",{className:"bold-text font-sans-semibold",children:A[W.wallet]})]}),(0,w.jsxs)("div",{className:"text font-sans-regular",children:["".concat(r("Nick Name:")," "),W.nickName&&(0,w.jsx)("span",{className:"bold-text font-sans-semibold",children:W.nickName}),!T&&(0,w.jsx)("a",{className:"",target:"_blank",href:"/docs/CrustFiles_Users",rel:"noreferrer",children:"Get a Nick Name"})]}),(0,w.jsxs)("div",{className:"text font-sans-regular",children:["".concat(r("User Type:")," "),T&&(0,w.jsx)("span",{className:"bold-text font-sans-semibold",children:D}),!T&&(0,w.jsx)("a",{href:"/user",rel:"noreferrer",children:"Get a Premium"})]})]}),(0,w.jsxs)(m.Z,{basic:!0,className:"mcard",children:[(0,w.jsx)("div",{className:"title font-sans-semibold",children:r("User Data Management")}),(0,w.jsx)("div",{className:"text font-sans-regular",children:"".concat(r("Your user data (including three File Lists and one File Encryption Key) are cached on your local devices. If you want to migrate your user data to a new device, use Export & Import function.")," ")}),(0,w.jsxs)(d.Z,{children:[(0,w.jsx)(f.Z,{active:k,onClick:function(){return O()},children:(0,w.jsxs)("div",{className:"title font-sans-semibold",children:[r("File Encryption"),(0,w.jsx)("span",{className:o()("icon",k?"cru-fo-chevron-up":"cru-fo-chevron-down")})]})}),(0,w.jsxs)(p.Z,{active:k,className:"no-padding",children:[(0,w.jsxs)("div",{className:"text font-sans-regular",children:["".concat(r("Your File Encryption Key:")," "),s.secret&&(0,w.jsxs)("span",{className:"bold-text font-sans-semibold",children:[s.secret,(0,w.jsx)("span",{className:"icon cru-fo-copy",onClick:function(){return M(s.secret)}})]}),!s.secret&&(0,w.jsx)("a",{onClick:s.generate,children:"Generate a New"})]}),s.seeds&&(0,w.jsxs)("div",{className:"text font-sans-regular",children:["".concat(r("Seed Phrase:")," "),(0,w.jsx)("span",{className:"bold-text font-sans-semibold",children:s.seeds})]})]})]}),(0,w.jsxs)("div",{className:"btns",children:[(0,w.jsx)(g.Z,{content:r("Export"),onClick:L}),(0,w.jsx)(g.Z,{content:r("Import"),onClick:H})]})]})]})]})})})).withConfig({displayName:"setting",componentId:"sc-1rkrrxr-0"})(["padding:unset !important;.mcontent{margin:unset !important;padding:0 0 3rem 0 !important;overflow:auto;}.mcard{padding:1.71rem !important;box-shadow:0 0.71rem 1.71rem 0 rgba(0,0,0,0.06) !important;border-radius:1.14rem !important;border:0.07rem solid #EEEEEE !important;margin:2.21rem 2.29rem 0 2.39rem !important;.title{font-size:1.3rem !important;font-weight:600;color:var(--main-color);padding-bottom:1.14rem;.cru-fo{margin-right:0.8rem;}}.text{font-size:1rem;color:var(--secend-color);line-height:1.57rem;}.icon{margin-left:1rem;font-size:1.428571rem;position:relative;top:3px;cursor:pointer;}.bold-text{color:var(--main-color);}a{text-decoration:underline;line-height:1.2rem;cursor:pointer;}.btns{margin-top:1.7rem;button:first-child{margin-right:1rem;}}}"]))},63782:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/setting",function(){return r(8130)}])}},function(e){e.O(0,[794,615,545,774,888,179],(function(){return t=63782,e(e.s=t);var t}));var t=e.O();_N_E=t}]);