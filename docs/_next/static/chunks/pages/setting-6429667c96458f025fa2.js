(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[552],{8130:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return T}});var n=r(83789),s=r(80318),o=r(94184),i=r.n(o),a=r(93162),c=r.n(a),l=r(11163),u=r(67294),m=r(23499),d=r(35766),f=r(21004),p=r(49147),h=r(27416),g=r(29163),b=r(60954),x=r(92809),y=r(10219),v=r(345),j=r(60416),N=r(17082),w=r(85893),C=["alert","onSuccess","toggleOpen"];function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function k(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach((function(t){(0,x.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var E=u.memo((0,g.ZP)((function(e){var t=e.alert,r=e.onSuccess,n=e.toggleOpen,s=(0,y.Z)(e,C),o=(0,u.useState)(""),i=o[0],a=o[1],c=(0,u.useCallback)((function(e,t){var r=t.value;a(r)}),[]),l=(0,u.useCallback)((function(){var e=(0,N.hC)(i);e?(r(e),n(!1)):t.error("Please check input value")}),[i,t]),m=(0,u.useCallback)((function(){a(""),n(!1)}),[]);return(0,w.jsxs)(v.Z,k(k({closeIcon:(0,w.jsx)("span",{className:"close icon cru-fo-x"}),onClose:m},s),{},{children:[(0,w.jsx)(v.Z.Header,{content:"Input a new key"}),(0,w.jsxs)(v.Z.Content,{children:[(0,w.jsx)(j.Z,{fluid:!0,onChange:c}),(0,w.jsxs)("div",{className:"btns",children:[(0,w.jsx)(b.Z,{content:"Input",onClick:l}),(0,w.jsx)(b.Z,{content:"Cancel",onClick:function(){return n(!1)}})]})]})]}))})).withConfig({displayName:"ModalNewKey",componentId:"sc-1ramix5-0"})(["width:34.3rem !important;.header{height:3.93rem;font-size:1.3rem !important;padding:0 1.14rem !important;font-weight:600 !important;line-height:3.93rem !important;}.close.icon{top:0.5rem;right:0.6rem;color:#666666;}.content{padding:1rem !important;input{border:0.07rem solid #CCCCCC !important;border-radius:0.57rem !important;}.btns{padding-top:2.3rem;button{width:calc(50% - 0.5rem) !important;margin:unset;}button:first-child{margin-right:1rem;}}}"])),Z=r(91777),S=r(12752),P=r(20478),_=r(65058),I=r(96705);function A(e,t){var r="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"===typeof e)return F(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return F(e,t)}(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var n=0,s=function(){};return{s:s,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e){throw e})),f:s}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,a=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e){a=!0,o=e})),f:function(){try{i||null==r.return||r.return()}finally{if(a)throw o}}}}function F(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var T=u.memo((0,g.ZP)((function(e){var t=e.className,r=(0,m.$)().t,o=(0,N.MH)(),a=(0,l.useRouter)(),g=(0,u.useContext)(S.Il).alert,x=(0,_.O)(!1),y=(0,s.Z)(x,2),v=y[0],j=y[1],C=(0,_.O)(),O=(0,s.Z)(C,2),k=O[0],F=O[1],T=(0,P.V)(),U=(0,I.WY)(),z=U.member&&1===U.member.member_state,D=(0,u.useMemo)((function(){return z?"Premium User":"Trial User"}),[U,z]),H="crust"===U.wallet,M=(0,I.Yg)(),Y=(0,u.useRef)(null),K=(0,u.useCallback)((function(){Y.current&&Y.current.click()}),[Y]),L=(0,u.useCallback)((function(e){try{var t=new FileReader,s=e.target.files;if(!s)return;if(t.readAsText(s[0],"UTF-8"),!/(.json)$/i.test(e.target.value))return g.error(r("File error"));t.onload=function(e){var t,s=JSON.parse(null===(t=e.target)||void 0===t?void 0:t.result),i={files:[]};if(Array.isArray(s))i.files=s;else{if(!s.files||!Array.isArray(s.files))return g.error(r("File content error"));i.secret=s.secret,i.files=s.files}if(o.secret&&i.secret&&i.secret!==o.secret)return g.error("Two secrets were found, and they are different.");if(i.secret){var a=(0,N.hC)(i.secret);a&&o.set(a)}var c,l=[],u={},m=A(i.files);try{for(m.s();!(c=m.n()).done;){var d=c.value;d.Hash&&d.Name&&d.UpEndpoint&&d.PinEndpoint&&(l.push(d),u[d.Hash]=!0)}}catch(p){m.e(p)}finally{m.f()}var f=M.files.filter((function(e){return!u[e.Hash]}));M.setFiles([].concat(l,(0,n.Z)(f))),g.alert({msg:r("Import Success"),type:"success"})}}catch(e){g.alert({msg:r("File content error"),type:"error"})}}),[M,o.set,g,r]),R=(0,u.useCallback)((function(){var e={files:M.files,secret:o.secret},t=new Blob([JSON.stringify(e)],{type:"application/json; charset=utf-8"});c().saveAs(t,"backup.json")}),[M,o]);return(0,w.jsxs)(Z.Z,{path:"/setting",className:t,children:[(0,w.jsx)("input",{onChange:L,ref:Y,style:{display:"none"},type:"file"}),v&&(0,w.jsx)(E,{alert:g,size:"tiny",open:!0,toggleOpen:j,onSuccess:o.set}),(0,w.jsxs)(d.Z,{basic:!0,className:"mcard",children:[(0,w.jsx)("div",{className:"title font-sans-semibold",children:r("User Profile")}),(0,w.jsxs)("div",{className:"text font-sans-regular",children:["".concat(r("Web3 Identity Logged-in:")," "),(0,w.jsx)("span",{className:"bold-text font-sans-semibold",children:U.account})]}),(0,w.jsxs)("div",{className:"text font-sans-regular",children:["".concat(r("Logged-in Wallet:")," "),(0,w.jsx)("span",{className:"bold-text font-sans-semibold",children:I.w3[U.wallet]})]}),H&&U.nickName&&(0,w.jsxs)("div",{className:"text font-sans-regular",children:["".concat(r("Nick Name:")," "),(0,w.jsx)("span",{className:"bold-text font-sans-semibold",children:U.nickName})]}),(0,w.jsxs)("div",{className:"text font-sans-regular",children:["".concat(r("User Type:")," "),(0,w.jsx)("span",{className:"bold-text font-sans-semibold",children:D})," ",!z&&(0,w.jsx)("a",{onClick:function(){return a.push("/user")},rel:"noreferrer",children:"Get a Premium"})]})]}),(0,w.jsxs)(d.Z,{basic:!0,className:"mcard",children:[(0,w.jsx)("div",{className:"title font-sans-semibold",children:r("User Data Management")}),(0,w.jsx)("div",{className:"text font-sans-regular",children:"".concat(r("Your user data (including three File Lists and one File Encryption Key) are cached on your local devices. If you want to migrate your user data to a new device, use Export & Import function.")," ")}),(0,w.jsxs)(f.Z,{children:[(0,w.jsx)(p.Z,{active:k,onClick:function(){return F()},children:(0,w.jsxs)("div",{className:"title font-sans-semibold",children:[r("File Encryption"),(0,w.jsx)("span",{className:i()("icon",k?"cru-fo-chevron-up":"cru-fo-chevron-down")})]})}),(0,w.jsxs)(h.Z,{active:k,className:"no-padding",children:[(0,w.jsxs)("div",{className:"text font-sans-regular",children:["".concat(r("Your File Encryption Key:")," "),o.secret&&(0,w.jsxs)("span",{className:"bold-text font-sans-semibold",children:[o.secret,(0,w.jsx)("span",{className:"icon cru-fo-copy",onClick:function(){return T(o.secret)}})]}),!o.secret&&(0,w.jsx)("a",{onClick:o.generate,children:"Generate a New"})]}),o.seeds&&(0,w.jsxs)("div",{className:"text font-sans-regular",children:["".concat(r("Seed Phrase:")," "),(0,w.jsx)("span",{className:"bold-text font-sans-semibold",children:o.seeds})]})]})]}),(0,w.jsxs)("div",{className:"btns",children:[(0,w.jsx)(b.Z,{content:r("Export"),onClick:R}),(0,w.jsx)(b.Z,{content:r("Import"),onClick:K})]})]})]})})).withConfig({displayName:"setting",componentId:"sc-1rkrrxr-0"})([".pusl_center_flex_content{min-width:60rem;}.mcard{padding:1.71rem !important;box-shadow:0 0.71rem 1.71rem 0 rgba(0,0,0,0.06) !important;border-radius:1.14rem !important;border:0.07rem solid #EEEEEE !important;margin-top:2.21rem;.title{font-size:1.3rem !important;font-weight:600;color:var(--main-color);padding-bottom:1.14rem;.cru-fo{margin-right:0.8rem;}}.text{font-size:1rem;color:var(--secend-color);line-height:1.57rem;}.icon{margin-left:1rem;font-size:1.428571rem;position:relative;top:3px;cursor:pointer;}.bold-text{color:var(--main-color);}a{text-decoration:underline;line-height:1.2rem;cursor:pointer;}.btns{margin-top:1.7rem;button:first-child{margin-right:1rem;}}}"]))},63782:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/setting",function(){return r(8130)}])}},function(e){e.O(0,[729,914,335,111,774,888,179],(function(){return t=63782,e(e.s=t);var t}));var t=e.O();_N_E=t}]);