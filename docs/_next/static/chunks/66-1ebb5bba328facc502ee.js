(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[66],{20640:function(e,t,n){"use strict";var r=n(11742),o={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var n,a,i,c,l,s,u=!1;t||(t={}),n=t.debug||!1;try{if(i=r(),c=document.createRange(),l=document.getSelection(),(s=document.createElement("span")).textContent=e,s.style.all="unset",s.style.position="fixed",s.style.top=0,s.style.clip="rect(0, 0, 0, 0)",s.style.whiteSpace="pre",s.style.webkitUserSelect="text",s.style.MozUserSelect="text",s.style.msUserSelect="text",s.style.userSelect="text",s.addEventListener("copy",(function(r){if(r.stopPropagation(),t.format)if(r.preventDefault(),"undefined"===typeof r.clipboardData){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var a=o[t.format]||o.default;window.clipboardData.setData(a,e)}else r.clipboardData.clearData(),r.clipboardData.setData(t.format,e);t.onCopy&&(r.preventDefault(),t.onCopy(r.clipboardData))})),document.body.appendChild(s),c.selectNodeContents(s),l.addRange(c),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");u=!0}catch(d){n&&console.error("unable to copy using execCommand: ",d),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),u=!0}catch(d){n&&console.error("unable to copy using clipboardData: ",d),n&&console.error("falling back to prompt"),a=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(a,e)}}finally{l&&("function"==typeof l.removeRange?l.removeRange(c):l.removeAllRanges()),s&&document.body.removeChild(s),i()}return u}},48237:function(e,t,n){"use strict";n.d(t,{Z:function(){return E}});var r=n(87462),o=n(94578),a=n(5625),i=n(27601),c=n(31368),l=n(86010),s=(n(45697),n(67294)),u=n(92248),d=n(95929),p=n(28935),m=n(12519),f=n(70682),h=n(65382),v=n(87401);function g(e){var t=e.children,n=e.className,o=e.content,a=e.hidden,i=e.visible,c=(0,l.Z)((0,d.lG)(i,"visible"),(0,d.lG)(a,"hidden"),"content",n),f=(0,p.Z)(g,e),h=(0,m.Z)(g,e);return s.createElement(h,(0,r.Z)({},f,{className:c}),u.kK(t)?o:t)}g.handledProps=["as","children","className","content","hidden","visible"],g.propTypes={};var Z=g,y=n(30335);function b(e){var t=e.attached,n=e.basic,o=e.buttons,a=e.children,c=e.className,f=e.color,h=e.compact,v=e.content,g=e.floated,Z=e.fluid,C=e.icon,N=e.inverted,k=e.labeled,w=e.negative,D=e.positive,G=e.primary,P=e.secondary,R=e.size,x=e.toggle,A=e.vertical,O=e.widths,I=(0,l.Z)("ui",f,R,(0,d.lG)(n,"basic"),(0,d.lG)(h,"compact"),(0,d.lG)(Z,"fluid"),(0,d.lG)(C,"icon"),(0,d.lG)(N,"inverted"),(0,d.lG)(k,"labeled"),(0,d.lG)(w,"negative"),(0,d.lG)(D,"positive"),(0,d.lG)(G,"primary"),(0,d.lG)(P,"secondary"),(0,d.lG)(x,"toggle"),(0,d.lG)(A,"vertical"),(0,d.sU)(t,"attached"),(0,d.cD)(g,"floated"),(0,d.H0)(O),"buttons",c),T=(0,p.Z)(b,e),S=(0,m.Z)(b,e);return(0,i.Z)(o)?s.createElement(S,(0,r.Z)({},T,{className:I}),u.kK(a)?v:a):s.createElement(S,(0,r.Z)({},T,{className:I}),(0,y.Z)(o,(function(e){return E.create(e)})))}b.handledProps=["as","attached","basic","buttons","children","className","color","compact","content","floated","fluid","icon","inverted","labeled","negative","positive","primary","secondary","size","toggle","vertical","widths"],b.propTypes={};var C=b;function N(e){var t=e.className,n=e.text,o=(0,l.Z)("or",t),a=(0,p.Z)(N,e),i=(0,m.Z)(N,e);return s.createElement(i,(0,r.Z)({},a,{className:o,"data-text":n}))}N.handledProps=["as","className","text"],N.propTypes={};var k=N,w=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).ref=(0,s.createRef)(),t.computeElementType=function(){var e=t.props,n=e.attached,r=e.label;if(!(0,i.Z)(n)||!(0,i.Z)(r))return"div"},t.computeTabIndex=function(e){var n=t.props,r=n.disabled,o=n.tabIndex;return(0,i.Z)(o)?r?-1:"div"===e?0:void 0:o},t.focus=function(){return(0,a.Z)(t.ref.current,"focus")},t.handleClick=function(e){t.props.disabled?e.preventDefault():(0,a.Z)(t.props,"onClick",e,t.props)},t.hasIconClass=function(){var e=t.props,n=e.labelPosition,r=e.children,o=e.content,a=e.icon;return!0===a||a&&(n||u.kK(r)&&(0,i.Z)(o))},t}(0,o.Z)(t,e);var n=t.prototype;return n.computeButtonAriaRole=function(e){var t=this.props.role;return(0,i.Z)(t)?"button"!==e?"button":void 0:t},n.render=function(){var e=this.props,n=e.active,o=e.animated,a=e.attached,f=e.basic,g=e.children,Z=e.circular,y=e.className,b=e.color,C=e.compact,N=e.content,k=e.disabled,w=e.floated,E=e.fluid,D=e.icon,G=e.inverted,P=e.label,R=e.labelPosition,x=e.loading,A=e.negative,O=e.positive,I=e.primary,T=e.secondary,S=e.size,M=e.toggle,K=(0,l.Z)(b,S,(0,d.lG)(n,"active"),(0,d.lG)(f,"basic"),(0,d.lG)(Z,"circular"),(0,d.lG)(C,"compact"),(0,d.lG)(E,"fluid"),(0,d.lG)(this.hasIconClass(),"icon"),(0,d.lG)(G,"inverted"),(0,d.lG)(x,"loading"),(0,d.lG)(A,"negative"),(0,d.lG)(O,"positive"),(0,d.lG)(I,"primary"),(0,d.lG)(T,"secondary"),(0,d.lG)(M,"toggle"),(0,d.sU)(o,"animated"),(0,d.sU)(a,"attached")),U=(0,l.Z)((0,d.sU)(R||!!P,"labeled")),z=(0,l.Z)((0,d.lG)(k,"disabled"),(0,d.cD)(w,"floated")),B=(0,p.Z)(t,this.props),L=(0,m.Z)(t,this.props,this.computeElementType),_=this.computeTabIndex(L);if(!(0,i.Z)(P)){var j=(0,l.Z)("ui",K,"button",y),q=(0,l.Z)("ui",U,"button",y,z),F=v.Z.create(P,{defaultProps:{basic:!0,pointing:"left"===R?"right":"left"},autoGenerateKey:!1});return s.createElement(L,(0,r.Z)({},B,{className:q,onClick:this.handleClick}),"left"===R&&F,s.createElement(c.R,{innerRef:this.ref},s.createElement("button",{className:j,"aria-pressed":M?!!n:void 0,disabled:k,tabIndex:_},h.Z.create(D,{autoGenerateKey:!1})," ",N)),("right"===R||!R)&&F)}var H=(0,l.Z)("ui",K,z,U,"button",y),X=!u.kK(g),V=this.computeButtonAriaRole(L);return s.createElement(c.R,{innerRef:this.ref},s.createElement(L,(0,r.Z)({},B,{className:H,"aria-pressed":M?!!n:void 0,disabled:k&&"button"===L||void 0,onClick:this.handleClick,role:V,tabIndex:_}),X&&g,!X&&h.Z.create(D,{autoGenerateKey:!1}),!X&&N))},t}(s.Component);w.handledProps=["active","animated","as","attached","basic","children","circular","className","color","compact","content","disabled","floated","fluid","icon","inverted","label","labelPosition","loading","negative","onClick","positive","primary","role","secondary","size","tabIndex","toggle"],w.propTypes={},w.defaultProps={as:"button"},w.Content=Z,w.Group=C,w.Or=k,w.create=(0,f.u5)(w,(function(e){return{content:e}}));var E=w},345:function(e,t,n){"use strict";n.d(t,{Z:function(){return V}});var r=n(87462),o=n(94578),a=n(33736),i=n(41515),c=n(90096),l=n(85697),s=n(79697),u=n(5625),d=n(31368),p=n(86010),m=(n(45697),n(67294)),f=n(96774),h=n.n(f),v=n(41779),g=n(68571),Z=n(49545),y=n(95929),b=n(12519),C=n(92248),N=n(28935),k=n(90327),w=n(65382),E=n(24880),D=n(30335),G=n(70682),P=n(48237),R=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).handleButtonOverrides=function(e){return{onClick:function(n,r){(0,u.Z)(e,"onClick",n,r),(0,u.Z)(t.props,"onActionClick",n,r)}}},t}return(0,o.Z)(t,e),t.prototype.render=function(){var e=this,n=this.props,o=n.actions,a=n.children,i=n.className,c=n.content,l=(0,p.Z)("actions",i),s=(0,N.Z)(t,this.props),u=(0,b.Z)(t,this.props);return C.kK(a)?C.kK(c)?m.createElement(u,(0,r.Z)({},s,{className:l}),(0,D.Z)(o,(function(t){return P.Z.create(t,{overrideProps:e.handleButtonOverrides})}))):m.createElement(u,(0,r.Z)({},s,{className:l}),c):m.createElement(u,(0,r.Z)({},s,{className:l}),a)},t}(m.Component);function x(e){var t=e.children,n=e.className,o=e.content,a=e.image,i=e.scrolling,c=(0,p.Z)(n,(0,y.lG)(a,"image"),(0,y.lG)(i,"scrolling"),"content"),l=(0,N.Z)(x,e),s=(0,b.Z)(x,e);return m.createElement(s,(0,r.Z)({},l,{className:c}),C.kK(t)?o:t)}R.handledProps=["actions","as","children","className","content","onActionClick"],R.propTypes={},R.create=(0,G.u5)(R,(function(e){return{actions:e}})),x.handledProps=["as","children","className","content","image","scrolling"],x.propTypes={},x.create=(0,G.u5)(x,(function(e){return{content:e}}));var A=x;function O(e){var t=e.children,n=e.className,o=e.content,a=(0,p.Z)("description",n),i=(0,N.Z)(O,e),c=(0,b.Z)(O,e);return m.createElement(c,(0,r.Z)({},i,{className:a}),C.kK(t)?o:t)}O.handledProps=["as","children","className","content"],O.propTypes={};var I=O,T=n(34714),S=(0,v.Z)()?m.useLayoutEffect:m.useEffect,M=/\s+/;var K=new Map,U=function(e,t){var n=function(e){var t=[];return e?(e.forEach((function(e){"string"===typeof e.current&&e.current.split(M).forEach((function(e){t.push(e)}))})),t.filter((function(e,t,n){return e.length>0&&n.indexOf(e)===t}))):[]}(t),r=function(e,t){return[t.filter((function(t){return-1===e.indexOf(t)})),e.filter((function(e){return-1===t.indexOf(e)}))]}(K.get(e)||[],n),o=r[0],a=r[1];e&&(o.forEach((function(t){return e.classList.add(t)})),a.forEach((function(t){return e.classList.remove(t)}))),K.set(e,n)},z=new function(){var e=this;this.add=function(t,n){if(e.nodes.has(t)){e.nodes.get(t).add(n)}else{var r=new Set;r.add(n),e.nodes.set(t,r)}},this.del=function(t,n){if(e.nodes.has(t)){var r=e.nodes.get(t);1!==r.size?r.delete(n):e.nodes.delete(t)}},this.emit=function(t,n){n(t,e.nodes.get(t))},this.nodes=new Map};function B(e){var t=e.blurring,n=e.children,o=e.className,a=e.centered,i=e.content,c=e.inverted,l=e.mountNode,s=e.scrolling,u=m.useRef(),f=(0,p.Z)("ui",(0,y.lG)(c,"inverted"),(0,y.lG)(!a,"top aligned"),"page modals dimmer transition visible active",o),h=(0,p.Z)("dimmable dimmed",(0,y.lG)(t,"blurring"),(0,y.lG)(s,"scrolling")),v=(0,N.Z)(B,e),g=(0,b.Z)(B,e);return function(e,t){var n=m.useRef(),r=m.useRef(!1);S((function(){if(n.current=t,r.current){var o=(0,T.I)(e)?e.current:e;z.emit(o,U)}r.current=!0}),[t]),S((function(){var t=(0,T.I)(e)?e.current:e;return z.add(t,n),z.emit(t,U),function(){z.del(t,n),z.emit(t,U)}}),[e])}(l,h),m.useEffect((function(){u.current&&u.current.style&&u.current.style.setProperty("display","flex","important")}),[]),m.createElement(d.R,{innerRef:u},m.createElement(g,(0,r.Z)({},v,{className:f}),C.kK(n)?i:n))}B.handledProps=["as","blurring","centered","children","className","content","inverted","mountNode","scrolling"],B.propTypes={},B.create=(0,G.u5)(B,(function(e){return{content:e}}));var L=B;function _(e){var t=e.children,n=e.className,o=e.content,a=(0,p.Z)("header",n),i=(0,N.Z)(_,e),c=(0,b.Z)(_,e);return m.createElement(c,(0,r.Z)({},i,{className:a}),C.kK(t)?o:t)}_.handledProps=["as","children","className","content"],_.propTypes={},_.create=(0,G.u5)(_,(function(e){return{content:e}}));var j=_,q=function(e){var t=e.height+0,n=e.height+0,r=window.innerHeight;return r/2+-n/2+t+50<r},F=function(e,t,n){var r=t&&e?-n.height/2:0;return{marginLeft:-n.width/2,marginTop:r}},H=function(){return!window.ActiveXObject&&"ActiveXObject"in window},X=function(e){function t(){for(var n,o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return(n=e.call.apply(e,[this].concat(a))||this).legacy=(0,v.Z)()&&H(),n.ref=(0,m.createRef)(),n.dimmerRef=(0,m.createRef)(),n.latestDocumentMouseDownEvent=null,n.getMountNode=function(){return(0,v.Z)()?n.props.mountNode||document.body:null},n.handleActionsOverrides=function(e){return{onActionClick:function(t,r){(0,u.Z)(e,"onActionClick",t,r),(0,u.Z)(n.props,"onActionClick",t,n.props),n.handleClose(t)}}},n.handleClose=function(e){n.setState({open:!1}),(0,u.Z)(n.props,"onClose",e,(0,r.Z)({},n.props,{open:!1}))},n.handleDocumentMouseDown=function(e){n.latestDocumentMouseDownEvent=e},n.handleDocumentClick=function(e){var t=n.props.closeOnDimmerClick,o=n.latestDocumentMouseDownEvent;n.latestDocumentMouseDownEvent=null,!t||(0,g.Z)(n.ref.current,o)||(0,g.Z)(n.ref.current,e)||(n.setState({open:!1}),(0,u.Z)(n.props,"onClose",e,(0,r.Z)({},n.props,{open:!1})))},n.handleIconOverrides=function(e){return{onClick:function(t){(0,u.Z)(e,"onClick",t),n.handleClose(t)}}},n.handleOpen=function(e){(0,u.Z)(n.props,"onOpen",e,(0,r.Z)({},n.props,{open:!0})),n.setState({open:!0})},n.handlePortalMount=function(e){var t=n.props.eventPool;n.setState({scrolling:!1}),n.setPositionAndClassNames(),Z.Z.sub("mousedown",n.handleDocumentMouseDown,{pool:t,target:n.dimmerRef.current}),Z.Z.sub("click",n.handleDocumentClick,{pool:t,target:n.dimmerRef.current}),(0,u.Z)(n.props,"onMount",e,n.props)},n.handlePortalUnmount=function(e){var t=n.props.eventPool;cancelAnimationFrame(n.animationRequestId),Z.Z.unsub("mousedown",n.handleDocumentMouseDown,{pool:t,target:n.dimmerRef.current}),Z.Z.unsub("click",n.handleDocumentClick,{pool:t,target:n.dimmerRef.current}),(0,u.Z)(n.props,"onUnmount",e,n.props)},n.setPositionAndClassNames=function(){var e,t=n.props.centered,r={};if(n.ref.current){var o=n.ref.current.getBoundingClientRect(),a=q(o);e=!a;var i=n.legacy?F(a,t,o):{};h()(n.state.legacyStyles,i)||(r.legacyStyles=i),n.state.scrolling!==e&&(r.scrolling=e)}(0,s.Z)(r)||n.setState(r),n.animationRequestId=requestAnimationFrame(n.setPositionAndClassNames)},n.renderContent=function(e){var o=n.props,a=o.actions,i=o.basic,c=o.children,l=o.className,s=o.closeIcon,u=o.content,f=o.header,h=o.size,v=o.style,g=n.state,Z=g.legacyStyles,N=g.scrolling,k=(0,p.Z)("ui",h,(0,y.lG)(i,"basic"),(0,y.lG)(n.legacy,"legacy"),(0,y.lG)(N,"scrolling"),"modal transition visible active",l),E=(0,b.Z)(t,n.props),D=!0===s?"close":s,G=w.Z.create(D,{overrideProps:n.handleIconOverrides});return m.createElement(d.R,{innerRef:n.ref},m.createElement(E,(0,r.Z)({},e,{className:k,style:(0,r.Z)({},Z,v)}),G,C.kK(c)?m.createElement(m.Fragment,null,j.create(f,{autoGenerateKey:!1}),A.create(u,{autoGenerateKey:!1}),R.create(a,{overrideProps:n.handleActionsOverrides})):c))},n}(0,o.Z)(t,e);var n=t.prototype;return n.componentWillUnmount=function(){this.handlePortalUnmount()},n.render=function(){var e=this.props,n=e.centered,o=e.closeOnDocumentClick,s=e.dimmer,u=e.eventPool,p=e.trigger,f=this.state,h=f.open,g=f.scrolling,Z=this.getMountNode();if(!(0,v.Z)())return(0,m.isValidElement)(p)?p:null;var y=(0,N.Z)(t,this.props),b=E.Z.handledProps,C=(0,l.Z)(y,(function(e,t,n){return(0,c.Z)(b,n)||(e[n]=t),e}),{}),k=(0,i.Z)(y,b);return m.createElement(E.Z,(0,r.Z)({closeOnDocumentClick:o},k,{trigger:p,eventPool:u,mountNode:Z,open:h,onClose:this.handleClose,onMount:this.handlePortalMount,onOpen:this.handleOpen,onUnmount:this.handlePortalUnmount}),m.createElement(d.R,{innerRef:this.dimmerRef},L.create((0,a.Z)(s)?s:{},{autoGenerateKey:!1,defaultProps:{blurring:"blurring"===s,inverted:"inverted"===s},overrideProps:{children:this.renderContent(C),centered:n,mountNode:Z,scrolling:g}})))},t}(k.Z);X.handledProps=["actions","as","basic","centered","children","className","closeIcon","closeOnDimmerClick","closeOnDocumentClick","content","defaultOpen","dimmer","eventPool","header","mountNode","onActionClick","onClose","onMount","onOpen","onUnmount","open","size","style","trigger"],X.propTypes={},X.defaultProps={centered:!0,dimmer:!0,closeOnDimmerClick:!0,closeOnDocumentClick:!1,eventPool:"Modal"},X.autoControlledProps=["open"],X.Actions=R,X.Content=A,X.Description=I,X.Dimmer=L,X.Header=j;var V=X},11742:function(e){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],r=0;r<e.rangeCount;r++)n.push(e.getRangeAt(r));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach((function(t){e.addRange(t)})),t&&t.focus()}}},80318:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(16988);function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],i=!0,c=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(l){c=!0,o=l}finally{try{i||null==n.return||n.return()}finally{if(c)throw o}}return a}}(e,t)||(0,r.Z)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);