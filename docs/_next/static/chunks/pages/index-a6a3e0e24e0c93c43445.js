(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{97494:function(t,e,n){"use strict";var i=n(67294),s=n(29163),a=n(85893);e.Z=i.memo((0,s.ZP)((function(t){var e=t.src,n=void 0===e?"/images/logo_22x.png":e,i=t.className;return(0,a.jsx)("div",{className:i,children:(0,a.jsx)("img",{src:n})})})).withConfig({displayName:"Logo",componentId:"sc-lchex5-0"})(["display:inline-block;img{display:inline-block;height:2.5rem;width:auto;object-fit:contain;}span{font-size:2.45rem;font-weight:400;line-height:2.45rem;color:white;display:inline-block;}"]))},25814:function(t,e,n){"use strict";n.d(e,{Z:function(){return h}});var i=n(67294),s=function(){};s.prototype.init=function(t,e){return this.canvas=t,this.ctx=this.canvas.getContext("2d"),this.particleNetwork=new r(this,e),this};var a=function(t,e,n){this.isFocus=!1,this.network=t,this.canvas=t.canvas,this.ctx=t.ctx,this.particleColor=c(this.network.options.particleColors),this.radius=o(1.5,2.5),this.opacity=0,this.x=e||Math.random()*this.canvas.width,this.y=n||Math.random()*this.canvas.height,this.velocity={x:(Math.random()-.5)*t.options.velocity,y:(Math.random()-.5)*t.options.velocity}};a.prototype.update=function(){this.opacity<1?this.opacity+=.01:this.opacity=1,(this.x>this.canvas.width+100||this.x<-100)&&(this.velocity.x=-this.velocity.x),(this.y>this.canvas.height+100||this.y<-100)&&(this.velocity.y=-this.velocity.y),this.x+=this.velocity.x,this.y+=this.velocity.y},a.prototype.draw=function(){this.ctx.beginPath(),this.ctx.fillStyle=this.particleColor,this.ctx.globalAlpha=this.opacity,this.ctx.arc(this.x,this.y,this.radius,0,2*Math.PI),this.ctx.fill()};var r=function(t,e){this.options={velocity:.5,density:13e3,netLineDistance:220,netLineDistanceFocus:300,netLineColor:"#999999",netLineColorFocus:"#999999",particleColors:["#888888"]},this.canvas=t.canvas,this.ctx=t.ctx,this.et=e,this.init()};r.prototype.init=function(){this.createParticles(!0),this.animationFrame=requestAnimationFrame(this.update.bind(this)),this.bindUiActions()},r.prototype.createParticles=function(t){var e=this;this.particles=[];var n=this.canvas.width*this.canvas.height/this.options.density;if(t){var i=0;clearInterval(this.createIntervalId);for(var s=0;s<n;s++)this.particles.push(new a(this));this.createIntervalId=setInterval(function(){i<n-1?this.particles.push(new a(this)):clearInterval(e.createIntervalId),i++}.bind(this),250)}else for(var r=0;r<n;r++)this.particles.push(new a(this))},r.prototype.createInteractionParticle=function(){return this.interactionParticle=new a(this),this.interactionParticle.isFocus=!0,this.interactionParticle.velocity={x:0,y:0},this.particles.push(this.interactionParticle),this.interactionParticle},r.prototype.removeInteractionParticle=function(){var t=this.particles.indexOf(this.interactionParticle);t>-1&&(this.interactionParticle=void 0,this.particles.splice(t,1))},r.prototype.update=function(){if(this.canvas){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.globalAlpha=1;for(var t=0;t<this.particles.length;t++)for(var e=this.particles[t],n=this.particles.length-1;n>t;n--){var i,s=this.particles[n],a=e.isFocus||s.isFocus,r=a?this.options.netLineDistanceFocus:this.options.netLineDistance,o=a?this.options.netLineColorFocus:this.options.netLineColor,c=Math.abs(e.x-s.x),l=Math.abs(e.y-s.y);Math.max(c,l)>r||((i=Math.sqrt(Math.pow(c,2)+Math.pow(l,2)))>r||(this.ctx.beginPath(),this.ctx.strokeStyle=o,this.ctx.globalAlpha=(r-i)/r*e.opacity*s.opacity,this.ctx.lineWidth=.7,this.ctx.moveTo(e.x,e.y),this.ctx.lineTo(s.x,s.y),this.ctx.stroke()))}for(var u=0;u<this.particles.length;u++)this.particles[u].update(),this.particles[u].draw();0!==this.options.velocity&&(this.animationFrame=requestAnimationFrame(this.update.bind(this)))}else cancelAnimationFrame(this.animationFrame)},r.prototype.bindUiActions=function(){this.spawnQuantity=3,this.mouseIsDown=!1,this.touchIsMoving=!1,this.onMouseMove=function(t){this.interactionParticle||this.createInteractionParticle(),this.interactionParticle.x=t.clientX,this.interactionParticle.y=t.clientY}.bind(this),this.onTouchMove=function(t){this.touchIsMoving=!0,this.interactionParticle||this.createInteractionParticle(),this.interactionParticle.x=t.changedTouches[0].clientX,this.interactionParticle.y=t.changedTouches[0].clientY}.bind(this),this.onMouseDown=function(t){this.mouseIsDown=!0;var e=0,n=this.spawnQuantity,i=setInterval(function(){if(this.mouseIsDown){1===e&&(n=1);for(var t=0;t<n;t++)this.interactionParticle&&this.particles.push(new a(this,this.interactionParticle.x,this.interactionParticle.y))}else clearInterval(i);e++}.bind(this),50)}.bind(this),this.onTouchStart=function(t){setTimeout(function(){if(!this.touchIsMoving)for(var e=0;e<this.spawnQuantity;e++)this.particles.push(new a(this,t.changedTouches[0].clientX,t.changedTouches[0].clientY))}.bind(this),200)}.bind(this),this.onMouseUp=function(t){this.mouseIsDown=!1}.bind(this),this.onMouseOut=function(t){this.removeInteractionParticle()}.bind(this),this.onTouchEnd=function(t){this.touchIsMoving=!1,this.removeInteractionParticle()}.bind(this),console.info("---setMouseLis--\x3e",this.et),this.et.addEventListener("mousemove",this.onMouseMove),this.et.addEventListener("touchmove",this.onTouchMove),this.et.addEventListener("mouseup",this.onMouseUp),this.et.addEventListener("mouseout",this.onMouseOut),this.et.addEventListener("touchend",this.onTouchEnd)},r.prototype.unbindUiActions=function(){this.et&&(this.et.removeEventListener("mousemove",this.onMouseMove),this.et.removeEventListener("touchmove",this.onTouchMove),this.et.removeEventListener("mouseup",this.onMouseUp),this.et.removeEventListener("mouseout",this.onMouseOut),this.et.removeEventListener("touchend",this.onTouchEnd))};var o=function(t,e,n){var i=Math.random()*(e-t)+t;return n&&(i=Math.round(i)),i},c=function(t){return t[Math.floor(Math.random()*t.length)]},l=new s;var u=n(85893);function h(){var t=(0,i.useRef)(),e=(0,i.useRef)();return(0,i.useEffect)((function(){var t,n,i;return e.current&&(n=e.current,i=document.body,t=l.init(n,i),window.__bgAnim=t,console.info("---initBgAnim--\x3e")),function(){console.info("---DestroyAnim--\x3e"),function(t){t&&t.particleNetwork.unbindUiActions()}(t)}}),[e.current]),(0,i.useEffect)((function(){if(t.current&&e.current){var n=e.current.offsetWidth,i=e.current.offsetHeight,s=setInterval((function(){var e,s,a=n!==t.current.offsetWidth||i!==t.current.offsetHeight;a&&(n=t.current.offsetWidth,i=t.current.offsetHeight,e=n,s=i,l.particleNetwork.removeInteractionParticle(),l.ctx.clearRect(0,0,l.canvas.width,l.canvas.height),l.canvas.width=e,l.canvas.height=s,l.particleNetwork.createParticles(),console.info("---\x3e",a))}),1e3);return function(){clearInterval(s)}}}),[t.current,e.current]),(0,u.jsx)("div",{ref:t,style:{position:"absolute",width:"100vw",height:"100vh",zIndex:-1,background:"rgb(45,45,45)"},children:(0,u.jsx)("canvas",{ref:e})})}},97376:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return N}});var i=n(30266),s=n(809),a=n.n(s),r=n(94184),o=n.n(r),c=n(96486),l=n.n(c),u=n(67294),h=n(23499),p=n(8736),m=n(29163),d=n(95194),g=n(25814),f=n(97494),v=n(12752),x=n(75282),w=n(83789),b=n(68216),k=n(92809),y=function t(){(0,b.Z)(this,t),(0,k.Z)(this,"value",!1)};function C(t,e){var n=(0,u.useMemo)((function(){for(var t=[],n=0;n<e;n++)t.push(new y);return t}),[e]),i=(0,u.useState)(n),s=i[0],a=i[1];return(0,u.useEffect)((function(){var i=e+1;a(n);var s=setInterval((function(){i>=n.length?i-=1:i<0?clearInterval(s):(console.info("setValueTrue--\x3e",i),a((function(t){return t[i].value=!0,(0,w.Z)(t)})),i-=1)}),t);return function(){return clearInterval(s)}}),[n,t,e]),(0,u.useMemo)((function(){return{data:s}}),[s])}var M=n(48278),_=n(96705),I=n(85893),P={Crust:"/images/group_wallet_crust.png",Polkadot:"/images/group_wallet_polkadot.png",MetaMask:"/images/group_wallet_metamask.png","Web 3":"/images/group_wallet_other.png",WalletConnect:"/images/group_wallet_connect.png"};function j(t){var e=t.gw,n=e.items.length,i=C(100,n).data;return(0,I.jsx)("div",{className:"wallet_items",style:{left:"".concat(6.39-5.857*n/2,"rem")},children:e.items.map((function(t,e){return(0,I.jsxs)("div",{onClick:function(){return t.onClick(t)},className:o()("wallet_item",{animFinal:i[n-1-e].value}),children:[(0,I.jsx)("img",{className:"item_image",src:t.image}),(0,I.jsx)("span",{className:"item_name",children:t.name})]},"wallet_item_".concat(e))}))})}var N=u.memo((0,m.ZP)((function(t){var e=t.className,n=(0,h.$)().t,s=(0,_.WY)(),r=(0,u.useContext)(v.Il).alert,c=function(t){t&&r.error(t)},m=(0,u.useCallback)((0,i.Z)(a().mark((function t(){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,c(""),t.next=4,s.crust.init();case 4:if(s.crust.provider){t.next=7;break}return c("Crust Wallet not installed"),t.abrupt("return");case 7:return t.next=9,s.crust.login();case 9:(e=t.sent).length>0&&s.setLoginUser({account:e[0],wallet:"crust"}),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(0),console.error(t.t0);case 16:case"end":return t.stop()}}),t,null,[[0,13]])}))),[s,n]),w=(0,u.useCallback)((function(){window.open(x.up,"_blank")}),[]),b=(0,u.useCallback)((function(){window.open("https://swap.crust.run","_blank")}),[]),k=(0,u.useCallback)((0,i.Z)(a().mark((function t(){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,c(""),t.next=4,s.polkadotJs.init();case 4:if(s.polkadotJs.provider){t.next=7;break}return c("Polkadot (.js Extension) not installed"),t.abrupt("return");case 7:return t.next=9,s.polkadotJs.login();case 9:(e=t.sent).length>0&&s.setLoginUser({account:e[0],wallet:"polkadot-js"}),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(0),console.error(t.t0);case 16:case"end":return t.stop()}}),t,null,[[0,13]])}))),[s,n]),y=(0,u.useCallback)(function(){var t=(0,i.Z)(a().mark((function t(e){var n,i;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c(""),t.next=3,s.metamask.init();case 3:i=null===(n=s.metamask.ethereum)||void 0===n?void 0:n.request,s.metamask.isInstalled&&i?i({method:"eth_requestAccounts"}).then((function(t){var n;console.info("accounts:",t);var i=null===(n=s.metamask.ethereum)||void 0===n?void 0:n.selectedAddress,a="Polygon"===e.name?"metamask-Polygon":"Moonriver"===e.name?"metamask-Moonriver":"metamask";i&&t.includes(i)?s.setLoginUser({account:i,wallet:a}):t.length&&s.setLoginUser({account:t[0],wallet:a})})).catch((function(t){console.error("accountsError:",t)})):c("MetaMask not installed");case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),[s,n]),N=(0,u.useCallback)((0,i.Z)(a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c(""),t.next=3,s.near.init();case 3:return t.next=5,s.near.wallet.requestSignIn(M.h.contractName,"Crust Files");case 5:case"end":return t.stop()}}),t)}))),[s,n]);(0,u.useEffect)((function(){s.near.init().then((function(){s.near.keyPair&&s.near.wallet.isSignedIn()&&s.setLoginUser({account:s.near.wallet.getAccountId(),wallet:"near",pubKey:s.near.keyPair.getPublicKey().toString().substr(8)})})).catch(console.error)}),[s]);var L=(0,u.useCallback)((0,i.Z)(a().mark((function t(){var e,n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c(""),t.next=3,s.flow.init();case 3:if(e=s.flow.fcl){t.next=6;break}return t.abrupt("return");case 6:return t.next=8,e.currentUser().snapshot();case 8:if((n=t.sent).loggedIn){t.next=12;break}return t.next=12,e.authenticate();case 12:return t.next=14,e.currentUser().snapshot();case 14:n=t.sent,s.setLoginUser({account:n.addr,wallet:"flow"});case 16:case"end":return t.stop()}}),t)}))),[s]),E=(0,u.useCallback)((0,i.Z)(a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c(""),t.next=3,s.solana.init();case 3:if(s.solana.isInstalled||c("Solana (Phantom Wallet) not installed"),!s.solana.solana.isConnected){t.next=7;break}return s.setLoginUser({account:s.solana.solana.publicKey.toBase58(),wallet:"solana"}),t.abrupt("return");case 7:s.solana.solana.connect(),s.solana.solana.on("connect",(function(){s.setLoginUser({account:s.solana.solana.publicKey.toBase58(),wallet:"solana"})}));case 9:case"end":return t.stop()}}),t)}))),[s,n]),T=(0,u.useCallback)((0,i.Z)(a().mark((function t(){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c(""),t.next=3,s.elrond.init();case 3:if(s.elrond.provider){t.next=6;break}return c("Elrond (Maiar Wallet) not installed"),t.abrupt("return");case 6:return t.next=8,s.elrond.provider.login({callbackUrl:encodeURIComponent("".concat(window.location.origin,"/#/files"))});case 8:e=s.elrond.provider.account.address,s.setLoginUser({account:e,wallet:"elrond"});case 10:case"end":return t.stop()}}),t)}))),[s,n]),F=(0,u.useCallback)((0,i.Z)(a().mark((function t(){var e,n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.walletConnect.init();case 2:return t.prev=2,t.next=5,s.walletConnect.connect.killSession();case 5:t.next=10;break;case 7:t.prev=7,t.t0=t.catch(2),console.error(t.t0);case 10:return t.next=12,null===(e=s.walletConnect.connect)||void 0===e?void 0:e.createSession();case 12:null===(n=s.walletConnect.connect)||void 0===n||n.on("connect",(function(t,e){var n=e.params[0].accounts;s.setLoginUser({account:n[0],wallet:"wallet-connect"})}));case 13:case"end":return t.stop()}}),t,null,[[2,7]])}))),[s]),U=(0,u.useMemo)((function(){return[{group:"Crust",name:"Crust Wallet",image:"/images/wallet_crust.png",onClick:m},{group:"Crust",name:"Download",image:"/images/crust_down.png",onClick:w},{group:"Crust",name:"Get CRU",image:"/images/crust_get_cru.png",onClick:b},{group:"Polkadot",name:"Polkadot",image:"/images/wallet_polkadot.png",onClick:k},{group:"MetaMask",name:"Ethereum",image:"/images/wallet_ethereum.png",onClick:y},{group:"MetaMask",name:"Polygon",image:"/images/wallet_polygon.png",onClick:y},{group:"MetaMask",name:"Moonriver",image:"/images/wallet_moonriver.png",onClick:y},{group:"Web 3",name:"Near",image:"/images/wallet_near.png",onClick:N},{group:"Web 3",name:"Elrond",image:"/images/wallet_elrond.png",onClick:T},{group:"Web 3",name:"Solana",image:"/images/wallet_solana.png",onClick:E},{group:"Web 3",name:"Flow",image:"/images/wallet_flow.png",onClick:L},{group:"WalletConnect",name:"WalletConnect",image:"/images/wallet_connect.png",onClick:F}]}),[m,w,b,k,y,N,L,E,T,F]),W=(0,u.useMemo)((function(){var t=l().groupBy(U,"group"),e=l().keys(t);return l().map(e,(function(e){var n={items:t[e],group:e,img:P[e]};return 1===n.items.length&&(n.onClick=n.items[0].onClick),n}))}),[U]),Z=(0,u.useState)(0),A=Z[0],S=Z[1];(0,u.useEffect)((function(){var t=0,e=setInterval((function(){3===t&&S(1),9===t&&S(2),14===t&&(S(0),t=0),t+=1}),2e3);return function(){return clearInterval(e)}}),[]);var D=(0,u.useState)(null),z=D[0],B=D[1],R=C(100,5).data;return(0,I.jsxs)("div",{className:e,children:[(0,I.jsx)(g.Z,{}),(0,I.jsx)(f.Z,{className:"logo"}),(0,I.jsx)("div",{className:"flexN"}),(0,I.jsxs)("div",{className:"slog font-sans-semibold",children:[(0,I.jsx)(p.Z,{src:"/images/crust_box2x.png",className:o()("slogIcon")}),(0,I.jsxs)("div",{className:o()("slogText"),children:[0===A&&(0,I.jsx)("div",{className:"slogText1",children:(0,I.jsxs)(d.Z,{options:{speed:60},children:["Enjoy storing your ",(0,I.jsx)("br",{}),"files in a ",(0,I.jsx)("span",{className:"highlight",children:"Web3"})," style. ",(0,I.jsx)("br",{}),"Now ",(0,I.jsx)("span",{className:"highlight",children:"free"}),"."]})}),1===A&&(0,I.jsx)("div",{className:"slogText2",children:(0,I.jsxs)(d.Z,{options:{speed:60},children:["- Multi-wallet access with your Web3.0 identity",(0,I.jsx)("br",{}),"- Absolute data privacy by end-to-end file encryption",(0,I.jsx)("br",{}),"- IPFS storage with globally-distributed replicas"]})}),2===A&&(0,I.jsx)("div",{className:"slogText2",children:(0,I.jsxs)(d.Z,{options:{speed:60},children:["- Easy share links to friends",(0,I.jsx)("br",{}),"- Retrieve your files anywhere, anytime",(0,I.jsx)("br",{}),"- Paid service with smart contract on public",(0,I.jsx)("br",{})," blockchains"]})})]})]}),(0,I.jsx)("div",{className:"flex1"}),(0,I.jsx)("div",{className:"wallets",children:W.map((function(t,e){return(0,I.jsxs)("div",{onClick:function(){t.onClick&&t.onClick(t.items[0])},onMouseEnter:function(){return B((function(){return t}))},onMouseLeave:function(){return B((function(){return null}))},className:o()("wallet_group",{animFinal:R[e].value}),children:[(0,I.jsx)("img",{className:"image",src:t.img}),(0,I.jsx)("span",{className:"text",children:t.group}),t.items.length>1&&z&&z.group===t.group&&(0,I.jsx)(j,{gw:t})]},"wallet_group_".concat(e))}))}),(0,I.jsx)("span",{className:o()("signTip font-sans-medium"),dangerouslySetInnerHTML:{__html:"Sign-in with Web/Browser/Mobile Wallets"}}),(0,I.jsx)("div",{className:"flexN"})]})})).withConfig({displayName:"pages",componentId:"sc-1oxyt9b-0"})(["color:white;display:flex;width:100%;height:100vh;flex-direction:column;align-items:center;overflow:auto;.logo{margin-left:3.5rem;margin-top:3rem;align-self:flex-start;}.flexN{flex:1;}.flex1{height:7.8rem;}.slog{display:flex;overflow:hidden;padding-top:1rem;font-weight:600;flex-shrink:0;height:19.8rem;.slogIcon{position:relative;margin-right:4.3rem;width:19.6rem;height:18.2rem;}.slogText{position:relative;width:44.5rem;}.slogText1{font-size:60px;white-space:pre-wrap;word-break:break-all;line-height:86px;.highlight{color:var(--primary-color);}}.slogText2{padding-top:40px;line-height:56px;font-size:24px;white-space:pre-wrap;word-break:break-all;}}.wallets{height:min-content;display:inline-block;overflow:visible;background:rgba(255,255,255,0.1);border-radius:6rem;flex-shrink:0;padding:0 3rem;.wallet_group{display:inline-block;overflow:visible;height:12.14rem;width:12.7857rem;text-align:center;padding-top:1.857rem;position:relative;cursor:pointer;&:hover{.image,.text{filter:drop-shadow(0px 4px 16px rgba(255,255,255,0.5));position:relative;top:-1rem;}.wallet_items{display:flex;}}.image{width:7rem;height:7rem;margin-left:2.89rem;display:block;}.text{font-size:1.2857rem;line-height:2.357rem;}.wallet_items{position:absolute;display:none;overflow:hidden;height:6.86rem;padding-top:1rem;top:-6.85rem;}}.wallet_item{display:inline-block;width:5.857rem;text-align:center;cursor:pointer;transform:translateY(90px);transition:all cubic-bezier(.41,.19,.21,1.25) 300ms;.item_image{margin-left:1.14rem;width:3.57rem;height:3.57rem;}.item_text{font-size:0.857rem;line-height:1.43rem;}}.spaceLeft{margin-left:1.4rem;}.animFinal{transform:none;}}.signTip{line-height:3rem;font-size:1.5rem;span{color:var(--primary-color);}}.errorInfo{color:#FF5B5B;}"]))},45301:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(97376)}])}},function(t){t.O(0,[610,827,774,888,179],(function(){return e=45301,t(t.s=e);var e}));var e=t.O();_N_E=e}]);