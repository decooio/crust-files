(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[869],{60954:function(e,n,t){"use strict";var r,o=t(52209),i=t(92809),a=t(67294),s=t(48237),c=t(29163),l=t(85893);function u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}n.Z=a.memo((0,c.ZP)((function(e){return(0,l.jsx)(s.Z,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?u(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},e))}))(r||(r=(0,o.Z)(["\n  background: unset !important;\n  border: 1px solid var(--primary-color) !important;\n  color: var(--primary-color) !important;\n  font-weight: normal !important;\n\n  &:hover {\n    background: var(--primary-color) !important;\n    color: white !important;\n  }\n"]))))},60649:function(e,n,t){"use strict";var r,o=t(52209),i=t(67294),a=t(76736),s=t(35766),c=t(14309),l=t(8736),u=t(94983),p=t(65382),d=t(11163),f=t(94184),m=t.n(f),g=t(29163),h=t(85893),v=[{path:"/files",icon:"file outline",name:"Upload"},{path:"/docs",icon:"file alternate outline",name:"Docs"},{path:"/setting",icon:"setting",name:"Setting"}];var b="15.7rem";n.Z=i.memo((0,g.ZP)((function(e){var n=(0,d.useRouter)(),t=(0,i.useCallback)((function(t,r){var o=r.index,i=v[o];i.path!==e.path&&n.push(i.path)}),[e.path]);return(0,h.jsxs)(a.Z.Pushable,{as:s.Z,className:m()(e.className,"basic"),children:[(0,h.jsx)(a.Z,{as:s.Z,animation:"push",direction:"left",visible:!0,className:"font1 basic",children:(0,h.jsxs)(c.Z,{textAlign:"center",children:[(0,h.jsx)(c.Z.Row,{columns:1,className:"logoPanel",children:(0,h.jsx)(l.Z,{size:"small",src:"/images/logo_1.png"})}),(0,h.jsx)(c.Z.Row,{columns:1,children:(0,h.jsx)(u.Z,{fluid:!0,vertical:!0,borderless:!0,children:v.map((function(n,r){return(0,h.jsx)(u.Z.Item,{position:"left",index:r,active:n.path===e.path,icon:(0,h.jsx)(p.Z,{name:n.icon}),name:n.name,onClick:t,className:"font1"},"side_menu_".concat(r))}))})})]})}),(0,h.jsx)(a.Z.Pusher,{children:e.children})]})}))(r||(r=(0,o.Z)(["\n  overflow: hidden;\n  height: 100vh;\n  background: white;\n\n  .ui.sidebar {\n    background: #F5F5F5;\n    box-shadow: unset !important;\n    width: ",";\n\n    .logoPanel {\n      padding: 2rem 0;\n    }\n\n    .menu {\n      box-shadow: unset !important;\n      border: unset !important;\n      border-radius: unset !important;\n      background: unset !important;\n\n      .item {\n        border-radius: 0;\n        text-align: left;\n        padding-left: 2rem !important;\n        font-weight: 500;\n        font-size: 1.3rem;\n        color: var(--secend-color);\n\n        &.active {\n          color: var(--main-color);\n        }\n\n        .icon {\n          float: left;\n          margin-right: 10px;\n        }\n      }\n    }\n  }\n\n  .pusher {\n    width: calc(100vw - ",");\n    height: 100vh;\n    transform: translate3d(",", 0, 0) !important;\n    overflow: auto !important;\n    background: white;\n  }\n"])),b,b,b))},56290:function(e,n,t){"use strict";var r,o=t(52209),i=t(67294),a=t(35766),s=t(88188),c=t(4838),l=t(99816),u=t(29163),p=t(85893);function d(e){switch(e){case"crust":return"/images/wallet_crust.png";case"polkadot-js":return"/images/wallet_polkadot.png";case"metamask":return"/images/wallet_metamask.png";case"near":return"/images/wallet_near.png";case"solana":return"/images/wallet_solana.png";case"elrond":return"/images/wallet_elrond.png";case"flow":return"/images/wallet_flow.png";default:return""}}n.Z=i.memo((0,u.ZP)((function(e){var n,t=(0,l.WY)(),r=(0,i.useCallback)(t.logout,[t]);return(0,p.jsx)(a.Z,{basic:!0,textAlign:"right",className:e.className,style:{borderBottom:"2px solid #eeeeee"},children:(0,p.jsx)(s.Z.Group,{children:(0,p.jsxs)(s.Z,{style:{justifyContent:"flex-end"},children:[(0,p.jsx)(s.Z.Image,{src:d(t.wallet),size:"tiny"}),(0,p.jsx)(s.Z.Content,{verticalAlign:"middle",style:{flex:"unset",paddingLeft:"0.5rem"},children:(0,p.jsx)(c.Z,{text:(n=t.account,n.length<=8?n:"".concat(n.substr(0,4),"...").concat(n.substr(n.length-4,4))),children:(0,p.jsx)(c.Z.Menu,{children:(0,p.jsx)(c.Z.Item,{text:"Logout",onClick:r})})})})]})})})}))(r||(r=(0,o.Z)(['\n  border-bottom: 2px solid #eeeeee;\n  margin: unset !important;\n\n  .ui.dropdown {\n    .text {\n      font-family: "ArialRoundedMTBold";\n      font-size: 1.3rem;\n    }\n  }\n']))))},17082:function(e,n,t){"use strict";t.d(n,{vZ:function(){return h},hC:function(){return v},MH:function(){return b}});var r=t(92809),o=t(30266),i=t(80318),a=t(809),s=t.n(a),c=t(67294),l=t(58971),u=t.n(l),p=t(65058);function d(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?d(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var m=t(21994).Cypher,g=new m(4),h=function(e){return new Promise((function(n,t){var r=new FileReader;r.onload=function(){r.result&&n(r.result)},r.onerror=t,r.readAsArrayBuffer(e)}))};function v(e){try{var n=e&&e.trim();if(n){var t=n.split(" ");if(1===t.length&&t[0]){var r=t[0],o=window.atob(r),i=g.phraseFromSecret(o);if(i&&4===i.split(" ").length)return{secret:r,seeds:i}}else if(4===t.length){var a=g.secretFromPhrase(n);if(a&&4===a.split("-").length)return{secret:window.btoa(a),seeds:n}}}return null}catch(s){return null}}function b(){var e=(0,c.useState)({}),n=e[0],t=e[1],r=(0,p.O)(),a=(0,i.Z)(r,2),l=a[0],d=a[1];(0,c.useEffect)((function(){var e=u().get("user:crypto");e&&t(e),d(!0)}),[]);var g=(0,c.useCallback)((function(e){t(e),u().set("user:crypto",e)}),[]),h=(0,c.useCallback)((0,o.Z)(s().mark((function e(){var n,t,r,o,i;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new m(4),t=n.genMnemonics(),r=t.secret,o=t.mnemonics,i={secret:window.btoa(r),seeds:o},console.info("length:",r.length,i.secret.length),g(i),e.abrupt("return",i);case 6:case"end":return e.stop()}}),e)}))),[]);return(0,c.useMemo)((function(){return f(f({},n),{},{generate:h,set:g,init:l})}),[n,g,l,h])}},20478:function(e,n,t){"use strict";t.d(n,{V:function(){return s}});var r=t(67294),o=t(12752),i=t(20640),a=t.n(i);function s(){var e=(0,r.useContext)(o.I).alert;return(0,r.useCallback)((function(n){a()(n),e.alert({msg:"Copied",type:"success"})}),[e])}},65058:function(e,n,t){"use strict";t.d(n,{O:function(){return o}});var r=t(67294);function o(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=(0,r.useState)(e),t=n[0],o=n[1],i=(0,r.useCallback)((function(e){o(void 0!==e?e:function(e){return!e})}),[]);return[t,i]}},38712:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return xe}});var r=t(52209),o=t(83789),i=t(80318),a=t(67294),s=t(99816),c=t(35766),l=t(86419),u=t(1300),p=t(28803),d=t(65382),f=t(71416),m=t(23499),g=t(60649),h=t(93162),v=t.n(h),b=t(92809),x=t(30266),y=t(809),w=t.n(y),j=t(9669),Z=t.n(j);function k(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function C(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?k(Object(t),!0).forEach((function(n){(0,b.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):k(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function P(){var e=(0,m.$)().t,n=(0,a.useMemo)((function(){return function(e){return[{location:e("Singapore"),text:e("DCF"),value:"https://crustipfs.xyz",group:"Public Gateway"},{location:e("United States"),text:e("Crust Network"),value:"https://crustwebsites.net",group:"Public Gateway"},{location:e("United States"),text:e("Crust Network"),value:"https://ipfs-gw.decloud.foundation",group:"Public Gateway"},{location:e("\ufe0f2.5x speed up"),text:e("\ufe0f\u26a1 Thunder Gateway"),value:"https://gw.crustapps.net",group:"Thunder Gateway"}]}(e).map((function(e){var n,t;return C(C({},e),{},{text:"".concat(null!==(n=e.text)&&void 0!==n?n:"","(").concat(null!==(t=e.location)&&void 0!==t?t:"",")")})}))}),[e]),t=(0,a.useMemo)((function(){return Math.floor(Math.random()*(n.length-2))}),[]),r=(0,a.useState)(n[t]),o=r[0],i=r[1],s=(0,a.useCallback)((function(e,t){var r=t.value,o=n.find((function(e){return e.value===r}));o&&i(o)}),[n]);return(0,a.useMemo)((function(){return{endpoints:n,endpoint:o,setEndpoint:i,onChangeEndpoint:s}}),[n,o,s])}var O=t(345),S=t(73626),N=t(28258),A=t(37838),E=t(29163),F=t(65058);var _,D=t(96486),I=t.n(D),T=t(94184),z=t.n(T),H=t(85893),M="_null",U=function(e){var n=e.expand,t=e.list,r=e.group,o=e.select,i=e.onClickItem,a=e.onClickGroup,s=e.renderGroupTitle,c=void 0===s?null:s,l=r===o.group;return(0,H.jsxs)("div",{className:"group",children:[r!==M&&(c&&c({group:r,select:o,onClickGroup:a})||(0,H.jsxs)("div",{className:z()("title",{active:l}),onClick:a,children:[r," ",(0,H.jsx)(d.Z,{className:"dropIcon",name:"dropdown"})]})),n&&t.map((function(e,n){return(0,H.jsx)("div",{className:z()("item",{active:l&&e.value===o.value}),onClick:function(n){return i(n,{group:r,value:e.value})},children:e.text},"group_item_".concat(n))}))]})};var R,G=a.memo((0,E.ZP)((function(e){var n,t=e.className,r=e.label,o=e.help,s=e.options,c=e.defaultValue,l=e.defaultGroup,u=void 0===l?M:l,f=e.renderGroupTitle,m=(0,a.useState)({value:c,group:u}),g=m[0],h=m[1],v=(0,a.useMemo)((function(){return I().find(s,(function(e){return(e.group||M)===g.group&&e.value===g.value}))}),[s,g]),b=(0,a.useState)(u),x=b[0],y=b[1],w=(0,F.O)(),j=(0,i.Z)(w,2),Z=j[0],k=j[1],C=function(e){var n=(0,a.useRef)(null);return(0,a.useEffect)((function(){var t,r=function(t){n.current&&n.current!==t.target&&!n.current.contains(t.target)&&e&&e(t)};return null===(t=document)||void 0===t||t.addEventListener("mouseup",r),function(){var e;null===(e=document)||void 0===e||e.removeEventListener("mouseup",r)}}),[n.current]),n}((function(){Z&&k(!1)})),P=(0,a.useMemo)((function(){return I().groupBy(s,(function(e){return e.group||M}))}),[s]),O=I().keys(P);return(0,H.jsxs)("div",{className:t,onClick:function(){return k()},ref:C,children:[r&&(0,H.jsxs)("div",{className:"label",children:[r,o&&(0,H.jsx)(p.Z,{position:"top center",trigger:(0,H.jsx)(d.Z,{name:"question circle outline"}),content:o}),(0,H.jsx)(d.Z,{name:"dropdown",className:"dropIcon"})]}),(0,H.jsx)("div",{className:"text",children:null!==(n=null===v||void 0===v?void 0:v.text)&&void 0!==n?n:""}),Z&&(0,H.jsx)("div",{className:"options",children:O.map((function(n,t){return(0,H.jsx)(U,{group:n,renderGroupTitle:f,select:g,expand:x===n||n===M,list:P[n],onClickGroup:function(e){y(x===n?M:n),e.stopPropagation()},onClickItem:function(n,t){h(t),e.onChange(n,t)}},"group_".concat(t))}))})]})}))(_||(_=(0,r.Z)(["\n  position: relative;\n  width: 100%;\n  border-radius: 4px;\n  border: 1px solid var(--line-color);\n  padding: 0.8rem 1rem;\n  cursor: pointer;\n\n  .label {\n    font-size: 1.3rem;\n    white-space: nowrap;\n    color: var(--main-color);\n    margin-bottom: 0.6rem;\n\n    .icon {\n      margin-left: 0.5rem;\n      cursor: pointer;\n    }\n\n    .dropIcon {\n      float: right;\n      right: 0.6rem;\n    }\n  }\n\n  .text {\n    font-size: 1rem;\n    color: var(--secend-color);\n  }\n\n  .options {\n    width: 100%;\n    background: white;\n    position: absolute;\n    top: calc(100% + 1px);\n    left: 0;\n    z-index: 10;\n    border-radius: 4px;\n    border: 1px solid var(--line-color);\n    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.3);\n\n    .group {\n\n      .title {\n        cursor: pointer;\n        border-top: 1px solid var(--line-color);\n        padding: 0.8rem 1rem;\n        font-size: 1.2rem;\n        font-weight: 500;\n\n        &:hover, &.active {\n          background: var(--line-color);\n        }\n\n        .dropIcon {\n          float: right;\n          right: 0.6rem;\n        }\n      }\n\n      .item {\n        padding: 0.6rem 1.6rem;\n        cursor: pointer;\n\n        &:hover, &.active {\n          background: var(--line-color);\n        }\n      }\n    }\n  }\n"])))),L=t(60954),B=t(17082),J=function(){var e=(0,x.Z)(w().mark((function e(n){return w().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",window.crypto.subtle.importKey("raw",n,"PBKDF2",!1,["deriveKey"]));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),K=function(){var e=(0,x.Z)(w().mark((function e(n,t,r){return w().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",window.crypto.subtle.deriveKey(r,n,{name:"AES-GCM",length:256},!1,t));case 1:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}(),V=function(){var e=(0,x.Z)(w().mark((function e(n,t){var r,o,i,a,s,c,l,u,p;return w().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=new Uint8Array(n),o=(new TextEncoder).encode(t),i=window.crypto.getRandomValues(new Uint8Array(16)),a=window.crypto.getRandomValues(new Uint8Array(12)),e.next=7,J(o);case 7:return s=e.sent,e.next=10,K(s,["encrypt"],{name:"PBKDF2",salt:i,iterations:25e4,hash:"SHA-256"});case 10:return c=e.sent,e.next=13,window.crypto.subtle.encrypt({name:"AES-GCM",iv:a},c,r);case 13:return l=e.sent,u=new Uint8Array(l),(p=new Uint8Array(u.byteLength+i.byteLength+a.byteLength)).set(i,0),p.set(a,i.byteLength),p.set(u,i.byteLength+a.byteLength),e.abrupt("return",p);case 22:throw e.prev=22,e.t0=e.catch(0),console.error("Error encrypting file"),console.error(e.t0),e.t0;case 27:case"end":return e.stop()}}),e,null,[[0,22]])})));return function(n,t){return e.apply(this,arguments)}}(),W=function(){var e=(0,x.Z)(w().mark((function e(n,t){var r,o,i,a,s,c,l,u;return w().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=new Uint8Array(n),o=(new TextEncoder).encode(t),i=r.slice(0,16),a=r.slice(16,28),s=r.slice(28),e.next=8,J(o);case 8:return c=e.sent,e.next=11,K(c,["decrypt"],{name:"PBKDF2",salt:i,iterations:25e4,hash:"SHA-256"});case 11:return l=e.sent,e.next=14,window.crypto.subtle.decrypt({name:"AES-GCM",iv:a},l,s);case 14:return u=e.sent,e.abrupt("return",u);case 18:return e.prev=18,e.t0=e.catch(0),console.error("Error decrypting file"),console.error(e.t0),e.abrupt("return");case 23:case"end":return e.stop()}}),e,null,[[0,18]])})));return function(n,t){return e.apply(this,arguments)}}();function $(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function q(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?$(Object(t),!0).forEach((function(n){(0,b.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):$(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function Y(e,n){var t="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,n){if(!e)return;if("string"===typeof e)return X(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return X(e,n)}(e))||n&&e&&"number"===typeof e.length){t&&(e=t);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,s=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return a=e.done,e},e:function(e){s=!0,i=e},f:function(){try{a||null==t.return||t.return()}finally{if(s)throw i}}}}function X(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var Q=function(){};var ee=a.memo((0,E.ZP)((function(e){var n=e.className,t=e.uc,r=e.file,o=e.onClose,c=void 0===o?Q:o,l=e.onSuccess,u=void 0===l?Q:l,p=e.user,d=(0,m.$)().t,f=P(),g=f.endpoint,h=f.endpoints,v=f.onChangeEndpoint,b=function(){var e=(0,m.$)().t,n=(0,a.useMemo)((function(){return function(e){return[{text:e("Crust Pinner"),value:"https://pin.crustcode.com"}]}(e).sort((function(){return Math.random()>.5?-1:1})).map((function(e){var n;return C(C({},e),{},{text:"".concat(null!==(n=e.text)&&void 0!==n?n:"Pinner")})}))}),[e]),t=(0,a.useState)(n[0]),r=t[0],o=t[1],i=(0,a.useCallback)((function(e,t){var r=t.value,i=n.find((function(e){return e.value===r}));i&&o(i)}),[n]);return(0,a.useMemo)((function(){return{pinner:r,pins:n,setPinner:o,onChangePinner:i}}),[r,n,i])}(),y=b.onChangePinner,j=b.pinner,k=b.pins,E=(0,a.useState)(!1),_=E[0],D=E[1],I=(0,a.useMemo)((function(){var e=104857600;if(r.file)return r.file.size>e;if(r.files){var n,t=0,o=Y(r.files);try{for(o.s();!(n=o.n()).done;){t+=n.value.size}}catch(i){o.e(i)}finally{o.f()}return t>e}return!1}),[r]),T=(0,a.useState)(""),z=T[0],M=T[1],U=I?d("Do not upload files larger than 100MB!"):z,R=(0,a.useState)({progress:0,up:!1}),J=R[0],K=R[1],W=(0,a.useState)(null),$=W[0],X=W[1],ee=(0,F.O)(),ne=(0,i.Z)(ee,2),te=ne[0],re=ne[1],oe=(0,a.useCallback)((function(){$&&$.cancel(),c()}),[$,c]),ie=(0,a.useCallback)((0,x.Z)(w().mark((function e(){var n,o,i,a,c,l,f,m,h,v,b,x,y,k,C,P,O,S,N,A,E,F,_,T,z,H,U,R,G,L;return w().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(M(""),!I&&p.account&&p.sign){e.next=3;break}return e.abrupt("return");case 3:return e.prev=3,D(!0),n=(0,s.WJ)(p),o="near"===p.wallet?p.pubKey||"":p.account,e.next=9,p.sign(o,p.account);case 9:if(i=e.sent,a="elrond"===p.wallet?i:"".concat(n,"-").concat(o,":").concat(i),c=window.btoa(a),l="Basic ".concat(c),f="Bearer ".concat(c),m=Z().CancelToken.source(),X(m),K({progress:0,up:!0}),h=new FormData,!(v=!(!te||!t.secret))){e.next=59;break}if(!r.file){e.next=33;break}return b=(new Date).getTime(),e.next=24,(0,B.vZ)(r.file);case 24:return x=e.sent,e.next=27,V(x,t.secret);case 27:y=e.sent,console.info("encrypted::",((new Date).getTime()-b)/1e3),k=new Blob([y],{type:r.file.type}),h.append("file",k,r.file.name),e.next=57;break;case 33:if(!r.files){e.next=57;break}C=Y(r.files),e.prev=35,C.s();case 37:if((P=C.n()).done){e.next=49;break}return O=P.value,e.next=41,(0,B.vZ)(O);case 41:return S=e.sent,e.next=44,V(S,t.secret);case 44:N=e.sent,A=new Blob([N],{type:O.type}),h.append("file",A,O.webkitRelativePath);case 47:e.next=37;break;case 49:e.next=54;break;case 51:e.prev=51,e.t0=e.catch(35),C.e(e.t0);case 54:return e.prev=54,C.f(),e.finish(54);case 57:e.next=60;break;case 59:if(r.file)h.append("file",r.file,r.file.name);else if(r.files){E=Y(r.files);try{for(E.s();!(F=E.n()).done;)_=F.value,h.append("file",_,_.webkitRelativePath)}catch(w){E.e(w)}finally{E.f()}}case 60:return T=g.value,e.next=63,Z().request({cancelToken:m.token,data:h,headers:{Authorization:l},maxContentLength:104857600,method:"POST",onUploadProgress:function(e){var n=e.loaded/e.total;K({progress:Math.round(99*n),up:!0})},params:{pin:!0},url:"".concat(T,"/api/v0/add")});case 63:return"string"===typeof(z=e.sent).data?(U=z.data.replaceAll("}\n{","},{"),R=JSON.parse("[".concat(U,"]")),G=R.length-1,H=R[G],delete R[G],H.items=R):H=z.data,console.info("upResult:",z),X(null),K({progress:100,up:!1}),L=j.value,e.next=71,Z().request({data:{cid:H.Hash,name:H.Name},headers:{Authorization:f},method:"POST",url:"".concat(L,"/psa/pins")});case 71:u(q(q({},H),{},{PinEndpoint:L,PinTime:(new Date).getTime(),UpEndpoint:T,Encrypted:v})),e.next=80;break;case 74:e.prev=74,e.t1=e.catch(3),K({progress:0,up:!1}),D(!1),console.error(e.t1),M(d("Network Error,Please try to switch a Gateway."));case 80:case"end":return e.stop()}}),e,null,[[3,74],[35,51,54,57]])}))),[I,p,r,j,g,te,u,d]);return(0,H.jsxs)(O.Z,{closeIcon:!0,onClose:oe,open:!0,size:"large",className:n,children:[(0,H.jsx)(O.Z.Header,{children:d(r.dir?"Upload Folder":"Upload File")}),(0,H.jsxs)(O.Z.Content,{children:[(0,H.jsxs)(S.Z.Group,{children:[(0,H.jsx)(S.Z,{fluid:!0,children:(0,H.jsxs)(S.Z.Content,{children:[(0,H.jsx)(S.Z.Header,{content:r.dir?"Folder":"File"}),(0,H.jsx)(S.Z.Description,{content:r.dir?"".concat(r.dir," (").concat(r.files.length," files)"):"".concat(r.file.name," (").concat(r.file.size," bytes)")})]})}),(0,H.jsx)(S.Z,{fluid:!0,children:(0,H.jsx)(G,{fluid:!0,selection:!0,help:d("File streaming and wallet authentication will be processed by the chosen gateway."),disabled:_,label:d("Select a Web3 IPFS Gateway"),onChange:v,options:h,defaultGroup:g.group,defaultValue:g.value})}),(0,H.jsx)(S.Z,{fluid:!0,children:(0,H.jsx)(G,{fluid:!0,selection:!0,help:d("Your file will be pinned to IPFS for long-term storage."),disabled:0===k.length,label:d("Select a Web3 IPFS Pinner"),onChange:y,options:k,defaultValue:j.value})}),r.file&&(0,H.jsx)(S.Z,{fluid:!0,className:"encryption",children:(0,H.jsxs)(S.Z.Content,{children:[(0,H.jsx)(S.Z.Header,{content:"File Encryption"}),t.secret?(0,H.jsx)(S.Z.Description,{content:te?"Yes":"No"}):(0,H.jsx)(S.Z.Description,{content:"Please go to the 'Setting' page and set encryption key before activating this function."}),(0,H.jsx)(N.Z,{toggle:!0,defaultChecked:te,disabled:!t.secret,onChange:function(){return re()}})]})})]}),U&&(0,H.jsx)("div",{style:{color:"orangered",padding:"1rem",whiteSpace:"pre-wrap",wordBreak:"break-all"},children:U})]}),(0,H.jsx)(O.Z.Actions,{children:(0,H.jsxs)("div",{className:"uploading",children:[J.up&&(0,H.jsx)(A.Z,{value:J.progress,total:100,active:!0,color:"orange"}),J.up&&(0,H.jsx)(L.Z,{onClick:oe,children:d("Cancel")}),!J.up&&(0,H.jsx)(L.Z,{fluid:!0,onClick:ie,disabled:I,children:d("Sign and Upload")})]})})]})}))(R||(R=(0,r.Z)(['\n\n  .header:nth-child(2) {\n    height: 3.36rem;\n    font-size: 1rem !important;\n    padding: 0 1rem !important;\n    font-weight: unset !important;\n    line-height: 3.36rem !important;\n  }\n\n\n  .close.icon {\n    top: 0.5rem;\n    right: 0.6rem;\n    color: #666666;\n  }\n\n  .content {\n    padding: 1rem !important;\n  }\n\n  .ui.cards > .card {\n    margin: 0.5rem !important;\n\n    .content > .header {\n      font-size: 1.14rem;\n      font-weight: unset !important;\n    }\n\n    .content > .description {\n      font-size: 1rem;\n    }\n  }\n\n  .ui.cards > .card:first-child {\n    margin-top: 1rem !important;\n  }\n\n  .actions {\n    height: 4.8rem;\n    padding: 0.5rem 1rem 0 1rem !important;\n    border-top: unset !important;\n    background: unset !important;\n\n    .button {\n      margin-left: unset !important;\n    }\n  }\n\n  .uploading {\n    height: 4rem;\n    display: flex;\n    align-items: center;\n\n    .progress {\n      margin: 0 1rem 0 0 !important;\n      vertical-align: baseline;\n      background: unset !important;\n      border: 1px solid orange;\n      flex: 1;\n\n      .bar {\n        min-width: unset !important;\n        height: 2.5rem;\n      }\n    }\n  }\n\n  .card.encryption {\n    position: relative;\n\n    .toggle {\n      position: absolute;\n      top: calc(50% - 0.75rem);\n      right: 1rem;\n\n      input[type="radio"]:checked + label:before {\n        background-color: #2ED158 !important;\n      }\n    }\n  }\n'])))),ne=t(12752),te=t(56290);var re,oe=t(56755),ie=t.n(oe),ae=t(20478),se=t(66103),ce=t(98278);function le(e){return e}function ue(e){e.current.isActive=!1,e.current.subscriber&&(e.current.subscriber.then((function(e){return e()})).catch(console.error),e.current.subscriber=null)}function pe(e,n,t){var r=function(){var e=(0,a.useRef)(!1);return(0,a.useEffect)((function(){return e.current=!0,function(){e.current=!1}}),[]),e}(),s=(0,a.useRef)({isActive:!1,serialized:null,subscriber:null}),c=(0,a.useState)((t||{}).defaultValue),l=c[0],u=c[1];return(0,a.useEffect)((function(){return function(){return ue(s)}}),[]),(0,a.useEffect)((function(){if(r.current&&e){var a=function(e,n){var t=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).paramMap,r=void 0===t?le:t;return[JSON.stringify({f:null===e||void 0===e?void 0:e.name,p:n}),0!==n.length&&n.some((function(e){return(0,se.F)(e)||(0,ce.o)(e)}))?null:r(n)]}(e,n||[],t),c=(0,i.Z)(a,2),l=c[0],p=c[1];p&&l!==s.current.serialized&&(s.current.serialized=l,function(e,n,t,r,i){var a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{},s=a.transform,c=void 0===s?le:s,l=a.withParams,u=a.withParamsTransform,p=r.filter((function(e){return!(0,ce.o)(e)}));ue(n),setTimeout((function(){var a;e.current&&(!t||t.meta&&null!==(a=t.meta.type)&&void 0!==a&&a.isDoubleMap&&2!==p.length?n.current.subscriber=null:(n.current.isActive=!0,n.current.subscriber=t.apply(void 0,(0,o.Z)(r).concat([function(t){e.current&&n.current.isActive&&e.current&&n.current.isActive&&i(l?[r,c(t)]:c(u?[r,t]:t))}]))))}),0)}(r,s,e,p,u,t))}}),[e,t,r,n]),l}function de(e,n){var t=n.find((function(n){return n.value===e.UpEndpoint})),r=t&&t.value||n[0].value;return"".concat(r,"/ipfs/").concat(e.Hash,"?filename=").concat(e.Name)}var fe=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:6;return e.length>2*n?"".concat(e.substr(0,n),"...").concat(e.substr(e.length-n)):e};var me,ge=a.memo((0,E.ZP)((function(e){var n,t,r=e.file,o=e.className,i=e.uc,s=(0,ae.V)(),c=(0,a.useContext)(ne.I),l=c.api,p=c.alert,f=c.loading,m=P().endpoints,g=(0,a.useCallback)((0,x.Z)(w().mark((function e(){var n,t,o,a;return w().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r.Encrypted||0!==I().size(r.items)){e.next=28;break}if(e.prev=1,i.secret){e.next=4;break}return e.abrupt("return");case 4:return f.show(),e.next=7,Z().get(de(r,m),{responseType:"arraybuffer"});case 7:return n=e.sent,console.info("res::",n),t=(new Date).getTime(),e.next=12,W(n.data,i.secret);case 12:if(o=e.sent,console.info("decrypt:",((new Date).getTime()-t)/1e3),o){e.next=16;break}throw"error";case 16:console.info("de:",o),a=new File([o],r.Name,{type:n.headers["content-type"]}),(0,h.saveAs)(a,r.Name),f.hide(),e.next=26;break;case 22:e.prev=22,e.t0=e.catch(1),f.hide(),p.error("decrypt error");case 26:e.next=29;break;case 28:window.open(de(r,m),"_blank");case 29:case"end":return e.stop()}}),e,null,[[1,22]])}))),[i,r,m]),v=(0,a.useCallback)((function(){return s(de(r,m))}),[r,m]),b=l&&(null===(n=l.query)||void 0===n?void 0:n.market)&&(null===(t=l.query)||void 0===t?void 0:t.market.files),y=!!b,j=pe(b,[r.Hash]),k=pe(l&&l.derive.chain.bestNumber);k=k&&JSON.parse(JSON.stringify(k));var C={status:"Loading"};if(j){var O=JSON.parse(JSON.stringify(j));if(O){var S=O.expired_at,N=O.reported_replica_count;C.expireTime=O.expired_at,C.amount=O.amount,C.startTime=O.expired_at?O.expired_at-216e3:0,C.fileSize=O.file_size,C.confirmedReplicas=O.reported_replica_count,C.prepaid=O.prepaid,S&&S<k&&(C.status="Expired"),!S&&S>k&&N<1&&(C.status="Waiting"),S&&S>k&&N>0&&(C.status="Success")}else y&&r.PinTime-(new Date).getTime()>=72e5?C.status="Failed":C.status="Waiting"}return(0,H.jsxs)(u.Z.Row,{className:o,children:[(0,H.jsxs)(u.Z.Cell,{children:[fe(r.Name)," ",r.Encrypted&&(0,H.jsx)(d.Z,{name:"lock"})]}),(0,H.jsxs)(u.Z.Cell,{textAlign:"center",children:[fe(r.Hash),(0,H.jsx)("span",{onClick:function(){return s(r.Hash)},style:{cursor:"pointer",paddingLeft:10},children:(0,H.jsx)(d.Z,{name:"clone outline"})})]}),(0,H.jsx)(u.Z.Cell,{textAlign:"center",children:ie()(Number(r.Size),{round:2})}),(0,H.jsxs)(u.Z.Cell,{textAlign:"center",children:["Loading"===C.status&&(0,H.jsx)(d.Z,{loading:!0,name:"spinner"}),"Waiting"===C.status&&C.status,"Expired"===C.status&&C.status,"Failed"===C.status&&C.status,"Success"===C.status&&"".concat(C.status," (").concat(C.confirmedReplicas," replicas)")]}),(0,H.jsxs)(u.Z.Cell,{textAlign:"center",children:[(0,H.jsx)("span",{style:{cursor:"pointer",marginRight:"1rem"},onClick:g,children:(0,H.jsx)(d.Z,{name:"external"})}),(0,H.jsx)("span",{style:{cursor:"pointer"},onClick:v,children:(0,H.jsx)(d.Z,{name:"clone outline"})})]})]})}))(re||(re=(0,r.Z)(["\n  color: var(--secend-color) !important;\n"]))));function he(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2e3,n=(0,a.useState)(!0),t=n[0],r=n[1];return(0,a.useEffect)((function(){var n=setInterval((function(){r((function(e){return!e}))}),e);return function(){return clearInterval(n)}}),[e]),t}function ve(e,n){var t="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,n){if(!e)return;if("string"===typeof e)return be(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return be(e,n)}(e))||n&&e&&"number"===typeof e.length){t&&(e=t);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){function n(n){return e.apply(this,arguments)}return n.toString=function(){return e.toString()},n}((function(e){throw e})),f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,s=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return a=e.done,e},e:function(e){function n(n){return e.apply(this,arguments)}return n.toString=function(){return e.toString()},n}((function(e){s=!0,i=e})),f:function(){try{a||null==t.return||t.return()}finally{if(s)throw i}}}}function be(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var xe=a.memo((0,E.ZP)((function(e){var n=(0,s.WY)(),t=(0,m.$)().t,r=(0,a.useContext)(ne.I).alert,h=(0,a.useState)(!1),b=h[0],x=h[1],y=(0,s.Yg)(),w=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5,t=(0,a.useState)(1),r=t[0],o=t[1];return(0,a.useMemo)((function(){var t=I().chunk(e,n);return{totalPage:t.length,pageList:t[r-1]||[],setPage:o,page:r}}),[e,r])}(y.files,5),j=(0,a.useState)(void 0),Z=j[0],k=j[1],C=(0,a.useRef)(null),P=(0,B.MH)(),O=(0,a.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];C.current&&(C.current.webkitdirectory=e,C.current.multiple=e,C.current.click())}),[C]),S=(0,a.useCallback)((function(){return O(!1)}),[O]),N=(0,a.useCallback)((function(){return O(!0)}),[O]),A=(0,a.useCallback)((function(e){var n=e.target.files;if(n)if(n.length>2e3)r.alert({title:t("Upload"),msg:t("Please do not upload more than 2000 files"),type:"error"});else if(0!==n.length){if(e.target.webkitdirectory){if(n.length>=1){for(var o=[],a=0;a<n.length;a++)o.push(n[a]);console.info(o);var s=o[0].webkitRelativePath.split("/"),c=(0,i.Z)(s,1)[0];k({files:o,dir:c}),x(!0)}}else k({file:n[0]}),x(!0);e.target.value=""}else r.alert({title:t("Upload"),msg:t("Please select non-empty folder"),type:"error"})}),[k,x,r,t]),E=(0,a.useRef)(null),F=(0,a.useCallback)((function(){E.current&&E.current.click()}),[E]),_=(0,a.useCallback)((function(e){try{var n=new FileReader,i=e.target.files;if(!i)return;if(n.readAsText(i[0],"UTF-8"),!/(.json)$/i.test(e.target.value))return r.alert({msg:t("File error"),type:"error"});n.onload=function(e){var n,i=JSON.parse(null===(n=e.target)||void 0===n?void 0:n.result);if(!Array.isArray(i))return r.alert({msg:t("File content error"),type:"error"});var a,s=[],c={},l=ve(i);try{for(l.s();!(a=l.n()).done;){var u=a.value;u.Hash&&u.Name&&u.UpEndpoint&&u.PinEndpoint&&(s.push(u),c[u.Hash]=!0)}}catch(d){l.e(d)}finally{l.f()}var p=y.files.filter((function(e){return!c[e.Hash]}));y.setFiles([].concat(s,(0,o.Z)(p))),r.alert({msg:t("Import Success"),type:"success"})}}catch(e){r.alert({msg:t("File content error"),type:"error"})}}),[y,r,t]),D=(0,a.useCallback)((function(){x(!1)}),[]),T=(0,a.useCallback)((function(e){x(!1);var n=y.files.filter((function(n){return n.Hash!==e.Hash}));y.setFiles([e].concat((0,o.Z)(n)))}),[y]),z=(0,a.useCallback)((function(){var e=new Blob([JSON.stringify(y.files)],{type:"application/json; charset=utf-8"});v().saveAs(e,"files.json")}),[y]),M=he(2e3),U=he(1800);return(0,H.jsx)(g.Z,{path:"/files",children:(0,H.jsxs)(c.Z,{basic:!0,className:e.className,children:[(0,H.jsx)(te.Z,{}),(0,H.jsxs)(c.Z,{basic:!0,textAlign:"center",className:"font1 uploadPanel",children:[(0,H.jsx)("input",{onChange:A,ref:C,style:{display:"none"},type:"file"}),(0,H.jsx)("input",{onChange:_,ref:E,style:{display:"none"},type:"file"}),(0,H.jsx)("span",{children:"Upload"}),(0,H.jsx)(l.Z,{animation:"pulse",duration:500,visible:M,children:(0,H.jsx)("span",{className:"btn file",onClick:S,children:"File"})}),(0,H.jsx)("span",{children:"or"}),(0,H.jsx)(l.Z,{animation:"pulse",duration:500,visible:U,children:(0,H.jsx)("span",{className:"btn folder",onClick:N,children:"Folder"})}),(0,H.jsx)("span",{children:"to IPFS."}),b&&(0,H.jsx)(ee,{file:Z,user:n,onClose:D,onSuccess:T,uc:P})]}),(0,H.jsx)("span",{className:"font1 filesTitle",children:"Upload History"}),(0,H.jsxs)(u.Z,{basic:"very",singleLine:!0,children:[(0,H.jsx)(u.Z.Header,{children:(0,H.jsxs)(u.Z.Row,{children:[(0,H.jsx)(u.Z.HeaderCell,{children:"File Name"}),(0,H.jsx)(u.Z.HeaderCell,{textAlign:"center",children:"File CID"}),(0,H.jsx)(u.Z.HeaderCell,{textAlign:"center",children:"File Size"}),(0,H.jsx)(u.Z.HeaderCell,{textAlign:"center",children:"Status"}),(0,H.jsx)(u.Z.HeaderCell,{textAlign:"center",children:"Action"})]})}),(0,H.jsx)(u.Z.Body,{children:w.pageList.map((function(e,n){return(0,H.jsx)(ge,{uc:P,file:e},"files_".concat(n))}))}),(0,H.jsx)(u.Z.Footer,{children:(0,H.jsxs)(u.Z.Row,{children:[(0,H.jsxs)(u.Z.HeaderCell,{colSpan:w.totalPage>1?2:5,className:"btns",children:[(0,H.jsx)(L.Z,{onClick:F,children:"Import"}),(0,H.jsx)(L.Z,{onClick:z,children:"Export"}),(0,H.jsx)(p.Z,{position:"top center",trigger:(0,H.jsx)(d.Z,{size:"large",name:"question circle outline"}),content:"Crust Files is a decentralized Application, and it will NEVER store your Upload History and File Encryption Key on any remote server. Instead, they are cached on your local devices. If you want to migrate your Upload History and File Encryption Key to a new device, use Export & Import function."})]}),w.totalPage>1&&(0,H.jsx)(u.Z.HeaderCell,{colSpan:"3",textAlign:"right",children:(0,H.jsx)(f.Z,{totalPages:w.totalPage,activePage:w.page,firstItem:{content:(0,H.jsx)(d.Z,{name:"angle double left"}),icon:!0},lastItem:{content:(0,H.jsx)(d.Z,{name:"angle double right"}),icon:!0},prevItem:{content:(0,H.jsx)(d.Z,{name:"angle left"}),icon:!0},nextItem:{content:(0,H.jsx)(d.Z,{name:"angle right"}),icon:!0},secondary:!0,onPageChange:function(e,n){var t=n.activePage;return w.setPage(t)}})})]})})]})]})})}))(me||(me=(0,r.Z)(["\n  padding: unset !important;\n\n  .table {\n    padding: 1rem 2rem;\n\n    thead {\n      font-size: 1.3rem;\n    }\n\n    tfoot {\n      .btns > button {\n        margin-right: 1rem !important;\n      }\n\n      .btns > i {\n        color: var(--secend-color);\n        cursor: pointer;\n      }\n\n      .pagination > .item {\n        color: var(--secend-color);\n        padding: 0.928rem 1.143rem;\n        margin: unset;\n      }\n    }\n  }\n\n\n  .uploadPanel {\n    font-size: 4rem !important;\n    line-height: 14rem;\n    white-space: nowrap;\n    padding: 2rem 1rem;\n\n    .btn {\n      display: inline-block;\n      width: 15rem;\n      height: 14rem;\n      text-align: center;\n      margin: 0 10px;\n      border-radius: 50px;\n      cursor: pointer;\n      //transition: all ease-in-out 2s;\n    }\n\n    .file {\n      background: rgba(255, 141, 0, 0.1);\n\n      &:hover {\n        background: rgba(255, 141, 0, 0.2);\n      }\n    }\n\n    .folder {\n      background: rgba(86, 203, 143, 0.1);\n\n      &:hover {\n        background: rgba(86, 203, 143, 0.2);\n      }\n    }\n  }\n\n  .filesTitle {\n    font-size: 2rem;\n    margin-left: 2rem;\n    line-height: 60px;\n  }\n\n"]))))},62356:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/files",function(){return t(38712)}])}},function(e){e.O(0,[910,157,24,66,764,774,888,179],(function(){return n=62356,e(e.s=n);var n}));var n=e.O();_N_E=n}]);