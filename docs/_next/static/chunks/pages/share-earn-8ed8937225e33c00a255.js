(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[370],{93999:function(e,r,n){"use strict";n.d(r,{sN:function(){return i},D$:function(){return a},E8:function(){return s}});n(67294);var t=n(29163);n(85893);var i=t.ZP.img.attrs({src:"/images/coin.svg"}).withConfig({displayName:"icons__Coin",componentId:"sc-oroypv-0"})(["width:2.43rem;height:2.29rem;object-fit:contain;display:inline-block;"]),a=t.ZP.img.attrs({src:"/images/badge1.svg"}).withConfig({displayName:"icons__BadgeIcon1",componentId:"sc-oroypv-1"})(["width:100px;height:100px;object-fit:contain;display:inline-block;"]),s=t.ZP.img.attrs({src:"/images/badge2.svg"}).withConfig({displayName:"icons__BadgeIcon2",componentId:"sc-oroypv-2"})(["width:100px;height:100px;object-fit:contain;display:inline-block;"]);t.ZP.embed.withConfig({displayName:"icons__SVG",componentId:"sc-oroypv-3"})(["width:24px;height:24px;"])},2907:function(e,r,n){"use strict";n.d(r,{n:function(){return t}});var t=n(29163).ZP.span.attrs((function(e){return{color:e.color||"--primary-color"}})).withConfig({displayName:"spans__ColorSpan",componentId:"sc-1gkxz9e-0"})(["color:var(",");&.btn{cursor:pointer;&:disabled{cursor:not-allowed;}}"],(function(e){return e.color}))},65369:function(e,r,n){"use strict";n.d(r,{W7:function(){return d}});var t=n(80318),i=n(83789),a=n(67294),s=n(66103),o=n(98278);function c(e){return e}function l(e){e.current.isActive=!1,e.current.subscriber&&(e.current.subscriber.then((function(e){return e()})).catch(console.error),e.current.subscriber=null)}function d(e,r,n){var d=function(){var e=(0,a.useRef)(!1);return(0,a.useEffect)((function(){return e.current=!0,function(){e.current=!1}}),[]),e}(),m=(0,a.useRef)({isActive:!1,serialized:null,subscriber:null}),u=(0,a.useState)((n||{}).defaultValue),h=u[0],p=u[1];return(0,a.useEffect)((function(){return function(){return l(m)}}),[]),(0,a.useEffect)((function(){if(d.current&&e){var a=function(e,r){var n=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).paramMap,t=void 0===n?c:n;return[JSON.stringify({f:null===e||void 0===e?void 0:e.name,p:r}),0!==r.length&&r.some((function(e){return(0,s.F)(e)||(0,o.o)(e)}))?null:t(r)]}(e,r||[],n),u=(0,t.Z)(a,2),h=u[0],g=u[1];g&&h!==m.current.serialized&&(m.current.serialized=h,function(e,r,n,t,a){var s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{},d=s.transform,m=void 0===d?c:d,u=s.withParams,h=s.withParamsTransform,p=t.filter((function(e){return!(0,o.o)(e)}));l(r),setTimeout((function(){var s;e.current&&(!n||n.meta&&null!==(s=n.meta.type)&&void 0!==s&&s.isDoubleMap&&2!==p.length?r.current.subscriber=null:(r.current.isActive=!0,r.current.subscriber=n.apply(void 0,(0,i.Z)(t).concat([function(n){e.current&&r.current.isActive&&e.current&&r.current.isActive&&a(u?[t,m(n)]:m(h?[t,n]:n))}]))))}),0)}(d,m,e,g,p,n))}}),[e,n,d,r]),h}},34815:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return se}});var t=n(30266),i=n(80318),a=n(809),s=n.n(a),o=n(13550),c=n.n(o),l=n(94184),d=n.n(l),m=n(96486),u=n.n(m),h=n(11163),p=n(67294),g=n(28803),f=n(29163),x=n(12415),w=n(93999),b=n(86316),j=n(2907),v=n(12752),y=n(65369),_=n(92809),C=n(75282),k=n(99056),N=n(23638);function z(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function P(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?z(Object(n),!0).forEach((function(r){(0,_.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):z(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function R(){var e=(0,v.qD)(),r=e.api,n=e.alert,t=e.loading,i=(0,N.WY)(),a=(0,p.useState)(!1),s=a[0],o=a[1],c=(0,p.useState)(!1),l=c[0],d=c[1];(0,p.useEffect)((function(){o(!1),d(!1),i.account&&"crust"===i.wallet&&r&&i.crust.wallet&&o(!0)}),[r,i]);return{start:function(){if(s){t.show(),d(!1);var e=P(P({},i.crust.wallet.signer),{},{signPayload:function(e){return i.crust.wallet.signer.signPayload(e)}});r.setSigner(e);r.tx.system.remark(JSON.stringify({scope:"crustFiles",env:C.g6,action:"claimRewards"})).signAndSend(i.account,{nonce:-1,tip:0},(function(e){(r.setSigner(void 0),e.status.isFinalized)&&(!!(0,k.Sq)(e,"system(ExtrinsicSuccess)")?(t.hide(),d(!0)):(t.hide(),n.error("Claim Error")))})).catch((function(e){var r=(0,k.az)(e);r.includes("account balance too low")?n.warnModal("Insufficient Funds!"):n.error(r),t.hide()}))}},ready:s,finish:l}}var S=n(94316),I=n.n(S);function Z(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"--:--:--",n=(0,p.useState)(r),t=n[0],i=n[1];return(0,p.useEffect)((function(){var r=e;console.info("countdown:",e);var n=setInterval((function(){(r-=1)>=0?i(I()(r).format({output:"time"})):clearInterval(n)}),1e3);return function(){clearInterval(n)}}),[e]),t}var D=n(34111),U=n(13711),E=n(65058),F=n(45129),M=n(11641),T=n(85893);function O(e,r){return u().get(e,r,"-")}var G=f.ZP.div.withConfig({displayName:"share-earn__EarnItemTip",componentId:"sc-59zcdp-0"})(['width:9.21rem;height:7.71rem;background-image:url("/images/earn_bg.png");background-size:cover;text-align:center;padding-top:1.93rem;padding-bottom:2.21rem;line-height:1.71rem;font-size:1.86rem;position:absolute;top:-2.93rem;right:.86rem;color:var(--primary-color);']),A=f.ZP.div.withConfig({displayName:"share-earn__InviteBonusTitle",componentId:"sc-59zcdp-1"})(["color:#000000;font-size:2.29rem;line-height:3.14rem;align-self:center;span{color:var(--primary-color);}"]),Y=f.ZP.a.withConfig({displayName:"share-earn__MLink",componentId:"sc-59zcdp-2"})(["white-space:nowrap;display:inline-block;font-size:1rem;line-height:1.36rem;color:var(--main-color);text-decoration:underline;"]),B=(0,f.ZP)(Y).withConfig({displayName:"share-earn__DetailedRules",componentId:"sc-59zcdp-3"})(["position:absolute;right:2rem;bottom:2rem;"]),W=f.ZP.div.withConfig({displayName:"share-earn__You",componentId:"sc-59zcdp-4"})(["position:absolute;width:5.14rem;height:7.07rem;background-repeat:no-repeat;background-image:url(\"/images/img_women.png\");background-size:cover;bottom:12px;left:28.57rem;&::after{content:'You';position:absolute;top:-1.36rem;left:1.71rem;}"]),X=f.ZP.div.withConfig({displayName:"share-earn__YourFriend",componentId:"sc-59zcdp-5"})(["position:absolute;width:5.14rem;height:6.43rem;background-size:cover;background-repeat:no-repeat;background-image:url(\"/images/img_man.png\");bottom:12px;right:11rem;&::after{content:'Your Friend';position:absolute;white-space:nowrap;top:-1.36rem;left:0;}"]),L=f.ZP.div.withConfig({displayName:"share-earn__YouComment",componentId:"sc-59zcdp-6"})(["background-repeat:no-repeat;background-image:url(\"/images/comment/comment_1_l.png\"),url('/images/comment/comment_1_c.png'),url('/images/comment/comment_1_r.png');background-size:4.71rem 100%,calc(100% - 6.14rem + .29rem)  100%,1.43rem 100%;background-position:0 0,4.57rem 0,right 0;position:absolute;bottom:2.29rem;left:33.71rem;width:min-content;height:6.29rem;padding-left:.57rem;padding-right:.57rem;font-size:1.29rem;line-height:1.79rem;text-align:center;padding-top:1rem;color:black;white-space:nowrap;span{color:var(--primary-color)}"]),q=f.ZP.div.withConfig({displayName:"share-earn__YourFriendComment",componentId:"sc-59zcdp-7"})(["background-repeat:no-repeat;background-image:url(\"/images/comment/comment_2_l.png\"),url('/images/comment/comment_2_c.png'),url('/images/comment/comment_2_r.png');background-size:1.64rem 100%,calc(100% - 6.36rem + .29rem)  100%,4.71rem 100%;background-position:0 0,1.5rem 0,right 0;position:absolute;bottom:6.21rem;right:15.14rem;width:min-content;height:7.07rem;font-size:1.29rem;line-height:1.79rem;text-align:center;padding-top:.5rem;padding-left:.57rem;padding-right:.57rem;white-space:nowrap;color:black;span{color:var(--primary-color)}"]),H=f.ZP.div.withConfig({displayName:"share-earn__CoinCru",componentId:"sc-59zcdp-8"})(["color:var(--primary-color);font-size:2.29rem;display:flex;align-items:center;margin-bottom:.57rem;img{margin-right:.71rem;}"]),K=f.ZP.img.attrs({src:"/images/trophy.svg"}).withConfig({displayName:"share-earn__Trophy",componentId:"sc-59zcdp-9"})(["width:9.86rem;height:9.21rem;"]),$=f.ZP.div.withConfig({displayName:"share-earn__TimeBlocks",componentId:"sc-59zcdp-10"})(["font-size:1.29rem;line-height:1.71rem;text-align:center;white-space:nowrap;margin-top:.29rem;span{color:#2A66FE;}"]),J=(0,f.ZP)(x.xe).attrs((function(e){return{progress:e.progress||0,board_size:2}})).withConfig({displayName:"share-earn__PixelProgress",componentId:"sc-59zcdp-11"})(["height:14px;width:104px;margin-right:.57rem;position:relative;&::after{content:'';position:absolute;top:2px;left:2px;background-color:#2A66FE;height:10px;width:","px;transition:all ease-in-out 300ms;}"],(function(e){return e.progress})),V=f.ZP.div.withConfig({displayName:"share-earn__GrandDrawProgress",componentId:"sc-59zcdp-12"})(["display:flex;align-items:center;margin-top:.71rem;font-size:1rem;line-height:1.36rem;span{color:#2A66FE;}"]),Q=f.ZP.div.withConfig({displayName:"share-earn__GrandDrawText",componentId:"sc-59zcdp-13"})(["font-size:1.29rem;line-height:1.79rem;margin-top:.29rem;color:black;"]),ee=(0,f.ZP)(x.Cj).attrs({height:40}).withConfig({displayName:"share-earn__M_PixelBtn",componentId:"sc-59zcdp-14"})(["margin-top:1.43rem;.btn_content{white-space:nowrap;padding:unset;min-width:12.71rem;width:12.71rem;font-size:1.29rem;}"]),re=f.ZP.div.withConfig({displayName:"share-earn__Rewards",componentId:"sc-59zcdp-15"})(["display:flex;flex-direction:column;align-items:flex-start;padding-left:4rem;flex:1;color:black;justify-content:center;.title{font-size:2.29rem;line-height:3.14rem;}.sub{margin-top:.57rem;font-size:1.71rem;line-height:2.36rem;}span{color:var(--primary-color);}"]),ne=f.ZP.div.withConfig({displayName:"share-earn__ClaimRewards",componentId:"sc-59zcdp-16"})(["font-size:1.29rem;line-height:1.79rem;display:flex;height:100%;padding-top:1.43rem;margin-right:4rem;flex-direction:column;justify-content:center;align-items:center;"]),te=(0,f.F4)(["to{transform:translateX(-48.93rem);}"]),ie=f.ZP.div.withConfig({displayName:"share-earn__Marquee",componentId:"sc-59zcdp-17"})(["white-space:nowrap;animation:"," 8s linear infinite;span{margin-left:3.57rem;color:var(--primary-color);}"],te),ae=f.ZP.div.withConfig({displayName:"share-earn__RewardPrograms",componentId:"sc-59zcdp-18"})(["margin-top:2.5rem;width:100%;position:relative;height:6.79rem;.like{position:absolute;left:0;top:.07rem;width:auto;height:100%;z-index:2;}.programs{position:absolute;overflow:hidden;z-index:1;right:0;bottom:0;width:calc(100% - 6.43rem);font-size:2.29rem;height:4.29rem;border:.29rem dashed #000000;padding-top:1.14rem;white-space:nowrap;}"]);var se=p.memo((0,f.ZP)((function(e){var r,n,a,o=e.className,l=(0,v.qD)(),m=l.api,f=l.alert,_=l.loading,C=l.recaptcha,N=(0,h.useRouter)(),z=(0,E.O)(!0),P=(0,i.Z)(z,2),S=P[0],I=P[1],te=(0,U.S)(),se=te.isPremiumUser,oe=te.isCrust,ce=te.depositDto,le=te.user,de=le.account,me=le.sign,ue=R(),he=(0,D.X)((function(){return(0,F.w2)()})),pe=(0,i.Z)(he,1)[0],ge=(0,D.X)((function(){return(0,F.zo)(de)}),[de,oe],"getEarnRewards"),fe=(0,i.Z)(ge,2),xe=fe[0],we=fe[1],be=(0,M.ms)({key:"rewards",value:xe}).rewards,je=(0,D.X)((function(){return(0,F.Pw)()}),[le.account]),ve=(0,i.Z)(je,1)[0],ye=(0,D.X)((function(){return(0,F.$7)()}),[le.account]),_e=(0,i.Z)(ye,1)[0],Ce=(0,D.X)((function(){return(0,F.PF)()}),[le.account]),ke=(0,i.Z)(Ce,3),Ne=ke[0],ze=ke[2],Pe=(0,p.useMemo)((function(){return!!(le.account&&Ne&&Ne.members&&Ne.members.find((function(e){return(0,k.AR)(e.address,le.account)})))}),[Ne,le.account]),Re=(0,y.W7)(null===m||void 0===m||null===(r=m.derive)||void 0===r||null===(n=r.chain)||void 0===n?void 0:n.bestNumberFinalized),Se=(0,p.useState)(0),Ie=Se[0],Ze=Se[1];(0,p.useEffect)((function(){var e=Re&&Re.toNumber();Ze((function(r){return r||e}))}),[Re]),(0,p.useEffect)((function(){var e;if(ue.finish){var r=3;e=setInterval((function(){if(r<=0)return clearInterval(e),void(e=null);r-=1,we()}),5e3)}return function(){return e&&clearInterval(e)}}),[ue.finish]);var De=ue.finish||be&&be.onGoing,Ue=(0,p.useMemo)((function(){return(0,k.zw)(pe&&pe.shareAndEarnPerUserReward)}),[pe]),Ee=(0,p.useMemo)((function(){return pe?(0,k.zw)(new(c())(pe.guaranteeAmount).sub(new(c())(pe.guaranteeDiscountWithReferer))):"-"}),[pe]),Fe=(0,p.useMemo)((function(){return(0,k.zw)(pe&&pe.depositRewardAmount)}),[pe]),Me=Z((0,p.useMemo)((function(){return _e&&Ie?6*u().clamp(_e.lastBlockNumber+_e.blockCount-Ie,0,_e.blockCount):0}),[_e,Ie])),Te=(0,p.useMemo)((function(){return((null===_e||void 0===_e?void 0:_e.blockCount)||300)/10}),[_e]),Oe=(0,p.useMemo)((function(){return Ne&&Ne.grandDraw?u().clamp(Math.round(100*Ne.depositCount/Ne.grandDraw.memberSize),0,100):0}),[Ne]),Ge=(null===Ne||void 0===Ne||null===(a=Ne.grandDraw)||void 0===a?void 0:a.matchCount)||2,Ae=(0,p.useMemo)((function(){return ce&&Ne&&ce.extrinsic_hash?ce.extrinsic_hash.substring(ce.extrinsic_hash.length-Ne.grandDraw.matchCount):"--"}),[Ne,ce]),Ye=(0,p.useMemo)((function(){return(null===ce||void 0===ce?void 0:ce.extrinsic_hash)||"-"}),[ce]),Be=(0,p.useMemo)((function(){return(0,k.K3)(Ye,Ge)}),[Ge,Ye]),We=O(Ne,"grandDraw.blockHash"),Xe=(0,p.useMemo)((function(){return!(!We||!Ae)&&We.endsWith(Ae)}),[We,Ae]),Le=(0,D.X)((function(){return(0,F.y7)(de)}),[de,oe]),qe=(0,i.Z)(Le,3),He=qe[0],Ke=qe[1],$e=qe[2],Je=He&&He.applyed,Ve=Z((0,p.useMemo)((function(){return Ne&&Ie?6*(Ne.grandDraw.expireBlock-Ie):0}),[Ne,Ie])),Qe=(0,k.yn)(be,"total.pending"),er=!ue.ready||De,rr=Ne&&0===Ne.drawState,nr=Ne&&1===Ne.drawState,tr=Ne&&(2===Ne.drawState||3===Ne.drawState),ir=(rr||nr||tr)&&!ze&&!$e,ar=se&&nr,sr=function(){var e=(0,t.Z)(s().mark((function e(){var r,n,t,i,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(de&&oe&&se&&!Je){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,_.show(),r=de,e.next=7,me(r,de);case 7:return n=e.sent,t="crust-".concat(r,":").concat(n),i=window.btoa(t),e.next=12,C.getToken();case 12:if(a=e.sent){e.next=16;break}return _.hide(),e.abrupt("return");case 16:return e.next=18,(0,F.KL)(a,i);case 18:Ke(),_.hide(),e.next=26;break;case 22:e.prev=22,e.t0=e.catch(2),_.hide(),f.error((0,k.az)(e.t0));case 26:case"end":return e.stop()}}),e,null,[[2,22]])})));return function(){return e.apply(this,arguments)}}();return(0,T.jsxs)(b.Z,{path:"/share-earn",className:o,children:[(0,T.jsxs)("div",{className:"share-and-earn",children:[(0,T.jsxs)("div",{className:"text",children:[(0,T.jsx)("span",{children:"Share"})," Crust Files with ",(0,T.jsx)("br",{}),"your friends,",(0,T.jsx)("br",{}),(0,T.jsx)("span",{children:"Earn $50,000,000"}),(0,T.jsx)("br",{}),"in User Rewards."]}),(0,T.jsxs)(x.xe,{className:"top_card",children:[(0,T.jsxs)("div",{className:"btns",children:[(0,T.jsx)(x.G3,{className:d()("style_left",{dark:!S}),onClick:function(){return I(!0)},children:"Me"}),(0,T.jsx)(x.G3,{className:d()("style_right",{dark:S}),onClick:function(){return I(!1)},children:"Network"})]}),S?(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)("div",{className:"total",children:"My Total Rewards:"}),(0,T.jsxs)("div",{className:"total_reward",children:[(0,T.jsx)("span",{children:(0,k.yn)(be,"total.total")})," CRU"]})]}):(0,T.jsxs)("div",{className:"networks",children:[(0,T.jsxs)("div",{children:["Total User: ",(0,T.jsx)("span",{children:(0,k.yn)(ve,"totalUser")})]}),(0,T.jsxs)("div",{children:["Premium User: ",(0,T.jsx)("span",{children:(0,k.yn)(ve,"premiumUser")})]}),(0,T.jsxs)("div",{children:["Deposit Pool: ",(0,T.jsxs)("span",{children:[(0,k.yn)(ve,"depositPool")," CRU"]})]}),(0,T.jsxs)("div",{children:["Rewards Distributed: ",(0,T.jsxs)("span",{children:[(0,k.yn)(ve,"rewardsDistributed")," CRU"]})]}),(0,T.jsxs)("div",{children:["Remaining Rewards: ",(0,T.jsxs)("span",{children:[(0,k.yn)(ve,"remainingRewards")," CRU"]})]})]})]})]}),(0,T.jsxs)(ae,{children:[(0,T.jsx)("img",{className:"like",src:"/images/like.svg"}),(0,T.jsx)("div",{className:"programs",children:(0,T.jsxs)(ie,{children:[(0,T.jsx)("span",{children:"3"})," Reward Programs",(0,T.jsx)("span",{children:"3"})," Reward Programs",(0,T.jsx)("span",{children:"3"})," Reward Programs",(0,T.jsx)("span",{children:"3"})," Reward Programs",(0,T.jsx)("span",{children:"3"})," Reward Programs",(0,T.jsx)("span",{children:"3"})," Reward Programs"]})})]}),(0,T.jsxs)(x.xe,{className:"earn_item",children:[(0,T.jsx)(x.G3,{className:"top_btn",children:"Invite Bonus"}),(0,T.jsxs)(G,{children:["1,000,000",(0,T.jsx)("br",{}),"CRU"]}),(0,T.jsx)("div",{className:"left",children:(0,T.jsxs)(A,{children:["Invite friends to Crust",(0,T.jsx)("br",{}),"Files and earn ",(0,T.jsx)("span",{children:"CRU"}),".",(0,T.jsx)("br",{}),(0,T.jsx)(Y,{target:"_blank",href:(0,k.GY)("/invite_bonus_guide"),children:"How to invite?"})]})}),(0,T.jsx)(W,{}),(0,T.jsxs)(L,{children:["Get ",(0,T.jsxs)("span",{children:[Ue," CRU"]})," Reward"]}),(0,T.jsx)(X,{}),(0,T.jsxs)(q,{children:["Get ",(0,T.jsxs)("span",{children:[Ee," CRU"]})," Discount on",(0,T.jsx)("br",{}),"Premium User Deposit"]}),(0,T.jsx)(B,{target:"_blank",href:(0,k.GY)("/docs/CrustFiles_ShareandEarn/#invite_bonus"),children:"Detailed Rules"})]}),(0,T.jsxs)(x.xe,{className:"earn_item",children:[(0,T.jsx)(x.G3,{className:"top_btn",children:"Lucky Newbie"}),(0,T.jsxs)(G,{children:["500,000",(0,T.jsx)("br",{}),"CRU"]}),(0,T.jsxs)("div",{className:"left",children:[(0,T.jsxs)(H,{children:[(0,T.jsx)(w.sN,{})," ",(0,k.yn)(_e,"totalAmount")," CRU"]}),(0,T.jsx)(K,{}),(0,T.jsxs)($,{children:[(0,T.jsx)("span",{children:Me})," (",(0,T.jsx)("span",{children:(0,k.yn)(_e,"blockCount")})," blocks)"]})]}),(0,T.jsxs)("div",{className:"right",children:[(0,T.jsx)("div",{className:"title",children:"Rules:"}),"1. The last Premium User to join before the countdown reaches zero",(0,T.jsx)("br",{}),"will be the winner of the current pool.",(0,T.jsx)("br",{}),"2. Each time a newly registered Premium User will refresh",(0,T.jsx)("br",{}),"the countdown to ",Te,"min and add ",Fe," CRU into the pool.",(0,T.jsx)("br",{}),(0,T.jsxs)("div",{className:"footer",children:["Best chance: ",(0,T.jsx)("span",{children:(0,k.lS)(O(_e,"memberAddress"),12)})]})]}),(0,T.jsx)(B,{target:"_blank",href:(0,k.GY)("/docs/CrustFiles_ShareandEarn/#lucky_newbie"),children:"Detailed Rules"})]}),ir&&(0,T.jsxs)(x.xe,{className:"earn_item",children:[(0,T.jsx)(x.G3,{className:"top_btn",children:"Grand Draw"}),(0,T.jsxs)(G,{children:["500,000",(0,T.jsx)("br",{}),"CRU"]}),(0,T.jsxs)("div",{className:"left",children:[(0,T.jsxs)(H,{children:[(0,T.jsx)(w.sN,{})," ",(0,k.yn)(Ne,"grandDraw.totalAmount")," CRU"]}),(0,T.jsx)(K,{}),rr&&(0,T.jsxs)(V,{children:[(0,T.jsx)(J,{progress:Oe})," ",(0,T.jsx)("span",{children:u().clamp(O(Ne,"depositCount"),0,O(Ne,"grandDraw.memberSize"))}),"/",O(Ne,"grandDraw.memberSize")]}),nr&&(0,T.jsx)(Q,{children:"Sign Up Time!"}),tr&&(0,T.jsx)(Q,{children:"Draw Time!"})]}),(0,T.jsxs)("div",{className:"right",children:[(0,T.jsxs)("div",{className:"title",children:["My Ticket Number: ",se?(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)("span",{children:Ae}),(0,T.jsx)(g.Z,{position:"top center",style:{minWidth:150,whiteSpace:"pre-wrap",overflowWrap:"anywhere"},content:(0,T.jsxs)(T.Fragment,{children:["This is the last ",(0,T.jsx)(j.n,{color:"--primary-color3",children:Ge})," digits of your deposit transaction hash - ",Be,(0,T.jsx)(j.n,{color:"--primary-color3",children:Ae})]}),trigger:(0,T.jsx)("span",{style:{cursor:"pointer",color:"rgba(0,0,0,0.5)",fontSize:"1.71rem",marginLeft:12},className:"cru-fo-help-circle"})})]}):(0,T.jsxs)("span",{style:{color:"#333333",fontSize:20,verticalAlign:"middle"},children:["- Get ",(0,T.jsx)("span",{style:{color:"#FF8D00",cursor:"pointer"},onClick:function(){return N.push("/user")},children:"Premium User"})," to join the game."]})]}),rr&&(0,T.jsxs)("div",{style:{marginTop:8},children:["The game will unlock when Premium User reaches ",(0,T.jsx)("span",{children:(0,k.yn)(Ne,"grandDraw.memberSize")})," !",(0,T.jsx)("br",{}),"Please sign up for the draw when unlock. Keep an eye!"]}),nr&&(0,T.jsxs)("div",{children:["Sign up for the draw before Block ",(0,T.jsxs)("span",{children:["#",(0,k.yn)(Ne,"grandDraw.expireBlock")]}),(0,T.jsx)("br",{}),"Estimated time: ",(0,T.jsx)("span",{children:Ve})," from now",ar&&(0,T.jsx)(ee,{disabled:Je,content:Je?"Sign Up Completed":"Sign Up",onClick:sr})]}),tr&&(0,T.jsxs)("div",{children:["Block Hash of #",(0,k.yn)(Ne,"grandDraw.expireBlock"),": ",(0,T.jsx)("span",{children:We}),(0,T.jsx)("br",{}),"Winning Condition: ",(0,T.jsxs)("span",{children:["The last ",O(Ne,"grandDraw.matchCount")," digits match"]}),(0,T.jsx)("br",{}),"My Status: ",(0,T.jsx)("span",{children:Pe?"You are the Winner!":Xe?"Not Signed Up":"Not Matched"})]})]}),(0,T.jsx)(B,{target:"_blank",href:(0,k.GY)("/docs/CrustFiles_ShareandEarn/#grand_draw"),children:"Detailed Rules"})]}),(0,T.jsxs)(x.xe,{className:"earn_item",children:[(0,T.jsxs)(re,{children:[(0,T.jsx)("div",{className:"title",children:"My Rewards:"}),(0,T.jsxs)("div",{className:"sub",children:["Total Rewards: ",(0,T.jsx)("span",{children:(0,k.yn)(be,"total.total")})," CRU (",(0,T.jsx)("span",{children:(0,k.yn)(be,"total.claimed")})," CRU Claimed)",(0,T.jsx)("br",{}),"Invite Bonus: ",(0,T.jsx)("span",{children:(0,k.yn)(be,"reward.total")})," CRU (",(0,T.jsx)("span",{children:(0,k.yn)(be,"reward.claimed")})," CRU Claimed)",(0,T.jsx)("br",{}),"Lucky Newbie: ",(0,T.jsx)("span",{children:(0,k.yn)(be,"depositReward.total")})," CRU (",(0,T.jsx)("span",{children:(0,k.yn)(be,"depositReward.claimed")})," CRU Claimed)",(0,T.jsx)("br",{}),"Grand Draw: ",(0,T.jsx)("span",{children:(0,k.yn)(be,"grandDraw.total")})," CRU (",(0,T.jsx)("span",{children:(0,k.yn)(be,"grandDraw.claimed")})," CRU  Claimed)"]}),oe&&(0,T.jsx)(Y,{style:{marginTop:"1rem"},target:"_blank",href:"".concat((0,k.GY)("/rewards_history/"),"?account=").concat(le.account),children:"Check more detailed information & historical records about rewards"})]}),(0,T.jsxs)(ne,{children:[(0,T.jsx)(ee,{disabled:er,content:De?"Ongoing Claim...":"Claim Rewards",onClick:function(){return!er&&ue.start()}}),se?(0,T.jsx)("div",{style:{marginTop:8},children:De?"You have ".concat((0,k.yn)(be,"total.ongoing")," CRU ongoing claim... Please wait"):"You have ".concat(Qe," CRU pending claim rewards.")}):(0,T.jsxs)("div",{style:{marginTop:8},children:[(0,T.jsx)(j.n,{className:"btn",onClick:function(){return N.push("/user")},children:"Get Premium"})," User to claim your rewards."]})]}),(0,T.jsx)(B,{target:"_blank",href:(0,k.GY)("/docs/CrustFiles_ShareandEarn/#claim_rewards"),children:"Learn More"})]})]})})).withConfig({displayName:"share-earn",componentId:"sc-59zcdp-19"})([".share-and-earn{margin-bottom:2.29rem;border-radius:1.14rem;display:flex;align-items:center;justify-content:space-between;.text{font-size:3.43rem;line-height:4.64rem;font-weight:600;margin-right:4.29rem;span{color:var(--primary-color);}}.top_card{height:17.14rem;min-width:40.86rem;display:flex;flex-direction:column;align-items:center;color:black;.btns{z-index:2;position:relative;top:-12px;width:34rem;display:flex;div{width:50%;}}.total{font-weight:600;font-size:1.29rem;line-height:1.79rem;}.total_reward{span{color:#216CFF;}font-weight:600;font-size:5.71rem;line-height:5.71rem;}.networks{width:28.57rem;font-size:1.29rem;line-height:2rem;font-weight:600;text-align:left;span{float:right;color:#216CFF;}}}}.earn_item{margin-top:5.21rem;width:100%;height:calc(100px + 11.93rem);display:flex;position:relative;.top_btn{cursor:default;position:absolute;top:0;left:calc(50% - 178px);}.left{width:27.64rem;display:flex;flex-direction:column;align-items:center;align-self:center;}.right{color:black;font-size:1.29rem;line-height:1.79rem;padding-top:3.57rem;.title{font-size:2.29rem;line-height:3.14rem;}.footer{margin-top:.71rem;}span{color:#216CFF;}}}@media screen and (max-width:1440px){.share-and-earn{.text{font-size:2.74rem;}}}"]))},3783:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/share-earn",function(){return n(34815)}])},83789:function(e,r,n){"use strict";n.d(r,{Z:function(){return a}});var t=n(56586);var i=n(16988);function a(e){return function(e){if(Array.isArray(e))return(0,t.Z)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||(0,i.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}},function(e){e.O(0,[729,803,316,774,888,179],(function(){return r=3783,e(e.s=r);var r}));var r=e.O();_N_E=r}]);