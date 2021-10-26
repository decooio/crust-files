(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[552],{60954:function(e,n,t){"use strict";var r,o=t(52209),i=t(92809),a=t(67294),c=t(48237),s=t(29163),u=t(85893);function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}n.Z=a.memo((0,s.ZP)((function(e){return(0,u.jsx)(c.Z,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},e))}))(r||(r=(0,o.Z)(["\n  background: unset !important;\n  border: 1px solid var(--primary-color) !important;\n  color: var(--primary-color) !important;\n  font-weight: normal !important;\n\n  &:hover {\n    background: var(--primary-color) !important;\n    color: white !important;\n  }\n"]))))},60649:function(e,n,t){"use strict";var r,o=t(52209),i=t(67294),a=t(76736),c=t(35766),s=t(14309),u=t(8736),l=t(94983),p=t(65382),f=t(11163),d=t(94184),m=t.n(d),g=t(29163),h=t(85893),b=[{path:"/files",icon:"file outline",name:"Upload"},{path:"/docs",icon:"file alternate outline",name:"Docs"},{path:"/setting",icon:"setting",name:"Setting"}];n.Z=i.memo((0,g.ZP)((function(e){var n=(0,f.useRouter)(),t=(0,i.useCallback)((function(t,r){var o=r.index,i=b[o];i.path!==e.path&&n.push(i.path)}),[e.path]);return(0,h.jsxs)(a.Z.Pushable,{as:c.Z,className:m()(e.className,"basic"),children:[(0,h.jsx)(a.Z,{as:c.Z,animation:"push",direction:"left",visible:!0,className:"font1 basic",children:(0,h.jsxs)(s.Z,{textAlign:"center",children:[(0,h.jsx)(s.Z.Row,{columns:1,className:"logoPanel",children:(0,h.jsx)(u.Z,{size:"small",src:"/images/crust_box2x.png"})}),(0,h.jsx)(s.Z.Row,{columns:1,children:(0,h.jsx)(l.Z,{fluid:!0,vertical:!0,borderless:!0,children:b.map((function(n,r){return(0,h.jsx)(l.Z.Item,{position:"left",index:r,active:n.path===e.path,icon:(0,h.jsx)(p.Z,{name:n.icon}),name:n.name,onClick:t,className:"font1"},"side_menu_".concat(r))}))})})]})}),(0,h.jsx)(a.Z.Pusher,{children:e.children})]})}))(r||(r=(0,o.Z)(["\n  overflow: hidden;\n  height: 100vh;\n  background: white;\n\n  .ui.sidebar {\n    background: #F5F5F5;\n    box-shadow: unset !important;\n    .logoPanel {\n      padding: 2rem 0;\n    }\n    .menu {\n      box-shadow: unset !important;\n      border: unset !important;\n      border-radius: unset !important;\n      background: unset !important;\n\n      .item {\n        border-radius: 0;\n        text-align: left;\n        padding-left: 2rem !important;\n        font-weight: 500;\n        font-size: 1.3rem;\n        color: var(--secend-color);\n\n        &.active {\n          color: var(--main-color);\n        }\n\n        .icon {\n          float: left;\n          margin-right: 10px;\n        }\n      }\n    }\n  }\n\n  .pusher {\n    width: calc(100vw - 260px);\n    height: 100vh;\n    overflow: auto !important;\n    background: white;\n  }\n"]))))},56290:function(e,n,t){"use strict";var r,o=t(52209),i=t(67294),a=t(35766),c=t(88188),s=t(4838),u=t(99816),l=t(29163),p=t(85893);function f(e){switch(e){case"crust":return"/images/wallet_crust.png";case"polkadot-js":return"/images/wallet_polkadot.png";case"metamask":return"/images/wallet_metamask.png";case"near":return"/images/wallet_near.png";case"solana":return"/images/wallet_solana.png";case"elrond":return"/images/wallet_elrond.png";case"flow":return"/images/wallet_flow.png";default:return""}}n.Z=i.memo((0,l.ZP)((function(e){var n,t=(0,u.WY)(),r=(0,i.useCallback)(t.logout,[t]);return(0,p.jsx)(a.Z,{basic:!0,textAlign:"right",className:e.className,style:{borderBottom:"2px solid #eeeeee"},children:(0,p.jsx)(c.Z.Group,{children:(0,p.jsxs)(c.Z,{style:{justifyContent:"flex-end"},children:[(0,p.jsx)(c.Z.Image,{src:f(t.wallet),size:"tiny"}),(0,p.jsx)(c.Z.Content,{verticalAlign:"middle",style:{flex:"unset",paddingLeft:"0.5rem"},children:(0,p.jsx)(s.Z,{text:(n=t.account,n.length<=8?n:"".concat(n.substr(0,4),"...").concat(n.substr(n.length-4,4))),children:(0,p.jsx)(s.Z.Menu,{children:(0,p.jsx)(s.Z.Item,{text:"Logout",onClick:r})})})})]})})})}))(r||(r=(0,o.Z)(['\n  border-bottom: 2px solid #eeeeee;\n  margin: unset !important;\n\n  .ui.dropdown {\n    .text {\n      font-family: "ArialRoundedMTBold";\n      font-size: 1.3rem;\n    }\n  }\n']))))},20478:function(e,n,t){"use strict";t.d(n,{V:function(){return c}});var r=t(67294),o=t(12752),i=t(20640),a=t.n(i);function c(){var e=(0,r.useContext)(o.I).alert;return(0,r.useCallback)((function(n){a()(n),e.alert({msg:"Copied",type:"success"})}),[e])}},65058:function(e,n,t){"use strict";t.d(n,{O:function(){return o}});var r=t(67294);function o(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=(0,r.useState)(e),t=n[0],o=n[1],i=(0,r.useCallback)((function(e){o(void 0!==e?e:function(e){return!e})}),[]);return[t,i]}},7924:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return q}});var r=t(52209),o=t(80318),i=t(67294),a=t(29163),c=t(60649),s=t(35766),u=t(56290),l=t(92809),p=t(30266),f=t(809),d=t.n(f),m=t(58971),g=t.n(m),h=t(65058);function b(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function v(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?b(Object(t),!0).forEach((function(n){(0,l.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}t(69599);var y=t(21994).Cypher,j=new y(4);var w=t(60954),O=t(23499),Z=t(12752),x=t(345),P=t(87462),k=t(94578),C=t(90096),N=t(30335),S=t(5625),I=t(16423),E=t(27601),_=t(34714),D=t(86010),A=(t(45697),t(28935)),z=t(4394),G=t(95929),R=t(12519),T=t(92248),F=t(70682),M=t(48237),K=t(65382),L=t(87401),U=function(e){function n(){for(var t,r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(t=e.call.apply(e,[this].concat(o))||this).inputRef=(0,i.createRef)(),t.computeIcon=function(){var e=t.props,n=e.loading,r=e.icon;return(0,E.Z)(r)?n?"spinner":void 0:r},t.computeTabIndex=function(){var e=t.props,n=e.disabled,r=e.tabIndex;return(0,E.Z)(r)?n?-1:void 0:r},t.focus=function(){return t.inputRef.current.focus()},t.select=function(){return t.inputRef.current.select()},t.handleChange=function(e){var n=(0,I.Z)(e,"target.value");(0,S.Z)(t.props,"onChange",e,(0,P.Z)({},t.props,{value:n}))},t.handleChildOverrides=function(e,n){return(0,P.Z)({},n,e.props,{ref:function(n){(0,_.n)(e.ref,n),t.inputRef.current=n}})},t.partitionProps=function(){var e=t.props,r=e.disabled,o=e.type,i=t.computeTabIndex(),a=(0,A.Z)(n,t.props),c=(0,z.vR)(a),s=c[0],u=c[1];return[(0,P.Z)({},s,{disabled:r,type:o,tabIndex:i,onChange:t.handleChange,ref:t.inputRef}),u]},t}return(0,k.Z)(n,e),n.prototype.render=function(){var e=this,t=this.props,r=t.action,o=t.actionPosition,a=t.children,c=t.className,s=t.disabled,u=t.error,l=t.fluid,p=t.focus,f=t.icon,d=t.iconPosition,m=t.input,g=t.inverted,h=t.label,b=t.labelPosition,v=t.loading,y=t.size,j=t.transparent,w=t.type,O=(0,D.Z)("ui",y,(0,G.lG)(s,"disabled"),(0,G.lG)(u,"error"),(0,G.lG)(l,"fluid"),(0,G.lG)(p,"focus"),(0,G.lG)(g,"inverted"),(0,G.lG)(v,"loading"),(0,G.lG)(j,"transparent"),(0,G.cD)(o,"action")||(0,G.lG)(r,"action"),(0,G.cD)(d,"icon")||(0,G.lG)(f||v,"icon"),(0,G.cD)(b,"labeled")||(0,G.lG)(h,"labeled"),"input",c),Z=(0,R.Z)(n,this.props),x=this.partitionProps(),k=x[0],S=x[1];if(!T.kK(a)){var I=(0,N.Z)(i.Children.toArray(a),(function(n){return"input"!==n.type?n:(0,i.cloneElement)(n,e.handleChildOverrides(n,k))}));return i.createElement(Z,(0,P.Z)({},S,{className:O}),I)}var E=M.Z.create(r,{autoGenerateKey:!1}),_=L.Z.create(h,{defaultProps:{className:(0,D.Z)("label",(0,C.Z)(b,"corner")&&b)},autoGenerateKey:!1});return i.createElement(Z,(0,P.Z)({},S,{className:O}),"left"===o&&E,"right"!==b&&_,(0,F.MO)(m||w,{defaultProps:k,autoGenerateKey:!1}),K.Z.create(this.computeIcon(),{autoGenerateKey:!1}),"left"!==o&&E,"right"===b&&_)},n}(i.Component);U.handledProps=["action","actionPosition","as","children","className","disabled","error","fluid","focus","icon","iconPosition","input","inverted","label","labelPosition","loading","onChange","size","tabIndex","transparent","type"],U.propTypes={},U.defaultProps={type:"text"},U.create=(0,F.u5)(U,(function(e){return{type:e}}));var $,B=U,Y=t(85893);function V(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function X(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?V(Object(t),!0).forEach((function(n){(0,l.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):V(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var H,J=i.memo((0,a.ZP)((function(e){var n=e.alert,t=e.onSuccess,r=e.toggleOpen,o=(0,i.useState)(""),a=o[0],c=o[1],s=(0,i.useCallback)((function(e,n){var t=n.value;c(t)}),[]),u=(0,i.useCallback)((function(){var e=function(e){try{var n=e&&e.trim();if(n){var t=n.split(" ");if(1===t.length&&t[0]){var r=t[0],o=window.atob(r),i=j.phraseFromSecret(o);if(i&&4===i.split(" ").length)return{secret:r,seeds:i}}else if(4===t.length){var a=j.secretFromPhrase(n);if(a&&4===a.split("-").length)return{secret:window.btoa(a),seeds:n}}}return null}catch(c){return null}}(a);e?(t(e),r(!1)):n.error("Please check input value")}),[a,n]),l=(0,i.useCallback)((function(){c(""),r(!1)}),[]);return(0,Y.jsxs)(x.Z,X(X({closeIcon:!0},e),{},{onClose:l,defaultOpen:!1,children:[(0,Y.jsx)(x.Z.Header,{content:"Input a new key"}),(0,Y.jsxs)(x.Z.Content,{children:[(0,Y.jsx)(B,{fluid:!0,onChange:s}),(0,Y.jsxs)("div",{className:"btns",children:[(0,Y.jsx)(w.Z,{content:"Input",onClick:u}),(0,Y.jsx)(w.Z,{content:"Cancel",onClick:function(){return r(!1)}})]})]})]}))}))($||($=(0,r.Z)(["\n  .header {\n    height: 3.36rem;\n    font-size: 1rem !important;\n    padding: 0 1rem !important;\n    font-weight: unset !important;\n    line-height: 3.36rem !important;\n  }\n\n\n  .close.icon {\n    top: 0.5rem;\n    right: 0.6rem;\n    color: #666666;\n  }\n\n  .content {\n    padding: 1rem !important;\n\n    .btns {\n      padding-top: 1rem;\n      button {\n        width: calc(50% - 0.5rem) !important;\n        margin: unset;\n      }\n\n      button:first-child {\n        margin-right: 1rem;\n      }\n    }\n  }\n"])))),W=t(20478);var q=i.memo((0,a.ZP)((function(e){var n=e.className,t=(0,O.$)().t,r=function(){var e=(0,i.useState)({}),n=e[0],t=e[1],r=(0,h.O)(),a=(0,o.Z)(r,2),c=a[0],s=a[1];(0,i.useEffect)((function(){var e=g().get("user:crypto");e&&t(e),s(!0)}),[]);var u=(0,i.useCallback)((function(e){t(e),g().set("user:crypto",e)}),[]),l=(0,i.useCallback)((0,p.Z)(d().mark((function e(){var n,t,r,o,i;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new y(4),t=n.genMnemonics(),r=t.secret,o=t.mnemonics,i={secret:window.btoa(r),seeds:o},console.info("length:",r.length,i.secret.length),u(i),e.abrupt("return",i);case 6:case"end":return e.stop()}}),e)}))),[]);return(0,i.useMemo)((function(){return v(v({},n),{},{generate:l,set:u,init:c})}),[n,u,c,l])}(),a=(0,i.useContext)(Z.I).alert,l=(0,h.O)(!1),f=(0,o.Z)(l,2),m=f[0],b=f[1],j=(0,W.V)();return(0,Y.jsx)(c.Z,{path:"/setting",children:(0,Y.jsxs)(s.Z,{basic:!0,className:n,children:[(0,Y.jsx)(u.Z,{}),(0,Y.jsx)(J,{alert:a,open:m,size:"tiny",toggleOpen:b,onSuccess:r.set}),(0,Y.jsxs)(s.Z,{basic:!0,className:"crypto",children:[(0,Y.jsx)("div",{className:"title font1",children:t("File Encryption")}),r.secret&&(0,Y.jsx)("div",{className:"key",children:"".concat(t("Your File Encryption Key:")," ").concat(r.secret)}),r.seeds&&(0,Y.jsx)("div",{className:"seeds",children:"".concat(t("Seed Phrase:")," ").concat(r.seeds)}),(0,Y.jsxs)("div",{className:"btns",children:[r.secret?(0,Y.jsx)(w.Z,{content:t("Copy"),onClick:function(){return j(r.seeds)}}):(0,Y.jsx)(w.Z,{content:t("Generate new"),onClick:r.generate}),(0,Y.jsx)(w.Z,{content:t("Input a new key"),onClick:function(){return b(!0)}})]})]})]})})}))(H||(H=(0,r.Z)(["\n  padding: unset !important;\n\n\n  .crypto {\n    margin: unset !important;\n    padding: 2rem 2rem !important;\n\n    .title {\n      line-height: 3.29rem;\n      font-size: 2.86rem;\n      color: var(--main-color);\n    }\n\n    .key, .seeds {\n      font-size: 1rem;\n      color: var(--secend-color);\n      margin-top: 0.6rem;\n      line-height: 1.57rem;\n    }\n\n    .btns {\n      margin-top: 1rem;\n\n      button:first-child {\n        margin-right: 1rem;\n      }\n    }\n  }\n\n"]))))},6515:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/setting",function(){return t(7924)}])},23499:function(e,n,t){"use strict";function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function o(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,i=[],a=!0,c=!1;try{for(t=t.call(e);!(a=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);a=!0);}catch(s){c=!0,o=s}finally{try{a||null==t.return||t.return()}finally{if(c)throw o}}return i}}(e,n)||function(e,n){if(e){if("string"===typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.d(n,{$:function(){return g}});var i=t(4942),a=t(67294),c=t(68718);function s(){if(console&&console.warn){for(var e,n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];"string"===typeof t[0]&&(t[0]="react-i18next:: ".concat(t[0])),(e=console).warn.apply(e,t)}}var u={};function l(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];"string"===typeof n[0]&&u[n[0]]||("string"===typeof n[0]&&(u[n[0]]=new Date),s.apply(void 0,n))}function p(e,n,t){e.loadNamespaces(n,(function(){if(e.isInitialized)t();else{e.on("initialized",(function n(){setTimeout((function(){e.off("initialized",n)}),0),t()}))}}))}function f(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!n.languages||!n.languages.length)return l("i18n.languages were undefined or empty",n.languages),!0;var r=n.languages[0],o=!!n.options&&n.options.fallbackLng,i=n.languages[n.languages.length-1];if("cimode"===r.toLowerCase())return!0;var a=function(e,t){var r=n.services.backendConnector.state["".concat(e,"|").concat(t)];return-1===r||2===r};return!(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&n.services.backendConnector.backend&&n.isLanguageChangingTo&&!a(n.isLanguageChangingTo,e))&&(!!n.hasResourceBundle(r,e)||(!n.services.backendConnector.backend||!(!a(r,e)||o&&!a(i,e))))}function d(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function m(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?d(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function g(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.i18n,r=(0,a.useContext)(c.OO)||{},i=r.i18n,s=r.defaultNS,u=t||i||(0,c.nI)();if(u&&!u.reportNamespaces&&(u.reportNamespaces=new c.zv),!u){l("You will need to pass in an i18next instance by using initReactI18next");var d=function(e){return Array.isArray(e)?e[e.length-1]:e},g=[d,{},!1];return g.t=d,g.i18n={},g.ready=!1,g}u.options.react&&void 0!==u.options.react.wait&&l("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var h=m(m(m({},(0,c.JP)()),u.options.react),n),b=h.useSuspense,v=h.keyPrefix,y=e||s||u.options&&u.options.defaultNS;y="string"===typeof y?[y]:y||["translation"],u.reportNamespaces.addUsedNamespaces&&u.reportNamespaces.addUsedNamespaces(y);var j=(u.isInitialized||u.initializedStoreOnce)&&y.every((function(e){return f(e,u,h)}));function w(){return u.getFixedT(null,"fallback"===h.nsMode?y:y[0],v)}var O=(0,a.useState)(w),Z=o(O,2),x=Z[0],P=Z[1],k=(0,a.useRef)(!0);(0,a.useEffect)((function(){var e=h.bindI18n,n=h.bindI18nStore;function t(){k.current&&P(w)}return k.current=!0,j||b||p(u,y,(function(){k.current&&P(w)})),e&&u&&u.on(e,t),n&&u&&u.store.on(n,t),function(){k.current=!1,e&&u&&e.split(" ").forEach((function(e){return u.off(e,t)})),n&&u&&n.split(" ").forEach((function(e){return u.store.off(e,t)}))}}),[u,y.join()]);var C=(0,a.useRef)(!0);(0,a.useEffect)((function(){k.current&&!C.current&&P(w),C.current=!1}),[u]);var N=[x,u,j];if(N.t=x,N.i18n=u,N.ready=j,j)return N;if(!j&&!b)return N;throw new Promise((function(e){p(u,y,(function(){e()}))}))}},49545:function(e,n,t){"use strict";var r=t(9695);n.Z=r.instance},56586:function(e,n,t){"use strict";function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}t.d(n,{Z:function(){return r}})},16988:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var r=t(56586);function o(e,n){if(e){if("string"===typeof e)return(0,r.Z)(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?(0,r.Z)(e,n):void 0}}}},function(e){e.O(0,[910,66,994,774,888,179],(function(){return n=6515,e(e.s=n);var n}));var n=e.O();_N_E=n}]);