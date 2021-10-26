(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[172],{60649:function(n,e,t){"use strict";var a,s=t(52209),i=t(67294),r=t(76736),o=t(35766),l=t(14309),c=t(8736),u=t(94983),d=t(65382),m=t(11163),h=t(94184),p=t.n(h),g=t(29163),f=t(85893),x=[{path:"/files",icon:"file outline",name:"Upload"},{path:"/docs",icon:"file alternate outline",name:"Docs"},{path:"/setting",icon:"setting",name:"Setting"}];e.Z=i.memo((0,g.ZP)((function(n){var e=(0,m.useRouter)(),t=(0,i.useCallback)((function(t,a){var s=a.index,i=x[s];i.path!==n.path&&e.push(i.path)}),[n.path]);return(0,f.jsxs)(r.Z.Pushable,{as:o.Z,className:p()(n.className,"basic"),children:[(0,f.jsx)(r.Z,{as:o.Z,animation:"push",direction:"left",visible:!0,className:"font1 basic",children:(0,f.jsxs)(l.Z,{textAlign:"center",children:[(0,f.jsx)(l.Z.Row,{columns:1,className:"logoPanel",children:(0,f.jsx)(c.Z,{size:"small",src:"/images/crust_box2x.png"})}),(0,f.jsx)(l.Z.Row,{columns:1,children:(0,f.jsx)(u.Z,{fluid:!0,vertical:!0,borderless:!0,children:x.map((function(e,a){return(0,f.jsx)(u.Z.Item,{position:"left",index:a,active:e.path===n.path,icon:(0,f.jsx)(d.Z,{name:e.icon}),name:e.name,onClick:t,className:"font1"},"side_menu_".concat(a))}))})})]})}),(0,f.jsx)(r.Z.Pusher,{children:n.children})]})}))(a||(a=(0,s.Z)(["\n  overflow: hidden;\n  height: 100vh;\n  background: white;\n\n  .ui.sidebar {\n    background: #F5F5F5;\n    box-shadow: unset !important;\n    .logoPanel {\n      padding: 2rem 0;\n    }\n    .menu {\n      box-shadow: unset !important;\n      border: unset !important;\n      border-radius: unset !important;\n      background: unset !important;\n\n      .item {\n        border-radius: 0;\n        text-align: left;\n        padding-left: 2rem !important;\n        font-weight: 500;\n        font-size: 1.3rem;\n        color: var(--secend-color);\n\n        &.active {\n          color: var(--main-color);\n        }\n\n        .icon {\n          float: left;\n          margin-right: 10px;\n        }\n      }\n    }\n  }\n\n  .pusher {\n    width: calc(100vw - 260px);\n    height: 100vh;\n    overflow: auto !important;\n    background: white;\n  }\n"]))))},56290:function(n,e,t){"use strict";var a,s=t(52209),i=t(67294),r=t(35766),o=t(88188),l=t(4838),c=t(99816),u=t(29163),d=t(85893);function m(n){switch(n){case"crust":return"/images/wallet_crust.png";case"polkadot-js":return"/images/wallet_polkadot.png";case"metamask":return"/images/wallet_metamask.png";case"near":return"/images/wallet_near.png";case"solana":return"/images/wallet_solana.png";case"elrond":return"/images/wallet_elrond.png";case"flow":return"/images/wallet_flow.png";default:return""}}e.Z=i.memo((0,u.ZP)((function(n){var e,t=(0,c.WY)(),a=(0,i.useCallback)(t.logout,[t]);return(0,d.jsx)(r.Z,{basic:!0,textAlign:"right",className:n.className,style:{borderBottom:"2px solid #eeeeee"},children:(0,d.jsx)(o.Z.Group,{children:(0,d.jsxs)(o.Z,{style:{justifyContent:"flex-end"},children:[(0,d.jsx)(o.Z.Image,{src:m(t.wallet),size:"tiny"}),(0,d.jsx)(o.Z.Content,{verticalAlign:"middle",style:{flex:"unset",paddingLeft:"0.5rem"},children:(0,d.jsx)(l.Z,{text:(e=t.account,e.length<=8?e:"".concat(e.substr(0,4),"...").concat(e.substr(e.length-4,4))),children:(0,d.jsx)(l.Z.Menu,{children:(0,d.jsx)(l.Z.Item,{text:"Logout",onClick:a})})})})]})})})}))(a||(a=(0,s.Z)(['\n  border-bottom: 2px solid #eeeeee;\n  margin: unset !important;\n\n  .ui.dropdown {\n    .text {\n      font-family: "ArialRoundedMTBold";\n      font-size: 1.3rem;\n    }\n  }\n']))))},16138:function(n,e,t){"use strict";t.r(e);var a,s=t(52209),i=t(67294),r=t(29163),o=t(60649),l=t(35766),c=t(56290),u=t(85893);e.default=i.memo((0,r.ZP)((function(n){var e=n.className;return(0,u.jsx)(o.Z,{path:"/docs",children:(0,u.jsx)(l.Z,{basic:!0,className:e,children:(0,u.jsx)(c.Z,{})})})}))(a||(a=(0,s.Z)(["\n  padding: unset !important;\n"]))))},48348:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs",function(){return t(16138)}])}},function(n){n.O(0,[910,774,888,179],(function(){return e=48348,n(n.s=e);var e}));var e=n.O();_N_E=e}]);