(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2090],{69590:function(e){var t="undefined"!==typeof Element,n="function"===typeof Map,r="function"===typeof Set,o="function"===typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var s,f,c,u;if(Array.isArray(e)){if((s=e.length)!=a.length)return!1;for(f=s;0!==f--;)if(!i(e[f],a[f]))return!1;return!0}if(n&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(u=e.entries();!(f=u.next()).done;)if(!a.has(f.value[0]))return!1;for(u=e.entries();!(f=u.next()).done;)if(!i(f.value[1],a.get(f.value[0])))return!1;return!0}if(r&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(u=e.entries();!(f=u.next()).done;)if(!a.has(f.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((s=e.length)!=a.length)return!1;for(f=s;0!==f--;)if(e[f]!==a[f])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((s=(c=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(f=s;0!==f--;)if(!Object.prototype.hasOwnProperty.call(a,c[f]))return!1;if(t&&e instanceof Element)return!1;for(f=s;0!==f--;)if(("_owner"!==c[f]&&"__v"!==c[f]&&"__o"!==c[f]||!e.$$typeof)&&!i(e[c[f]],a[c[f]]))return!1;return!0}return e!==e&&a!==a}e.exports=function(e,t){try{return i(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},22090:function(e,t,n){"use strict";n.d(t,{Z:function(){return ct}});var r=n(29745),o=n(89046),i=n(27601),a=n(49360),s=n(5625),f=n(27771),c=n(41515),u=n(34099),p=n(85697),l=n(9695),d=n.n(l),m=n(86010),h=(n(45697),n(67294)),v=h.createContext();h.createContext();var g=function(e,t){if("function"===typeof e)return function(e){if("function"===typeof e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return e.apply(void 0,n)}}(e,t);null!=e&&(e.current=t)},y=function(e){return e.reduce((function(e,t){var n=t[0],r=t[1];return e[n]=r,e}),{})},b="undefined"!==typeof window&&window.document&&window.document.createElement?h.useLayoutEffect:h.useEffect;function w(e,t){void 0===t&&(t=!1);var n=e.getBoundingClientRect();return{width:n.width/1,height:n.height/1,top:n.top/1,right:n.right/1,bottom:n.bottom/1,left:n.left/1,x:n.left/1,y:n.top/1}}function O(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function x(e){var t=O(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function E(e){return e instanceof O(e).Element||e instanceof Element}function P(e){return e instanceof O(e).HTMLElement||e instanceof HTMLElement}function j(e){return"undefined"!==typeof ShadowRoot&&(e instanceof O(e).ShadowRoot||e instanceof ShadowRoot)}function Z(e){return e?(e.nodeName||"").toLowerCase():null}function k(e){return((E(e)?e.ownerDocument:e.document)||window.document).documentElement}function D(e){return w(k(e)).left+x(e).scrollLeft}function S(e){return O(e).getComputedStyle(e)}function C(e){var t=S(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function M(e,t,n){void 0===n&&(n=!1);var r=P(t),o=P(t)&&function(e){var t=e.getBoundingClientRect(),n=t.width/e.offsetWidth||1,r=t.height/e.offsetHeight||1;return 1!==n||1!==r}(t),i=k(t),a=w(e,o),s={scrollLeft:0,scrollTop:0},f={x:0,y:0};return(r||!r&&!n)&&(("body"!==Z(t)||C(i))&&(s=function(e){return e!==O(e)&&P(e)?{scrollLeft:(t=e).scrollLeft,scrollTop:t.scrollTop}:x(e);var t}(t)),P(t)?((f=w(t,!0)).x+=t.clientLeft,f.y+=t.clientTop):i&&(f.x=D(i))),{x:a.left+s.scrollLeft-f.x,y:a.top+s.scrollTop-f.y,width:a.width,height:a.height}}function R(e){var t=w(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function U(e){return"html"===Z(e)?e:e.assignedSlot||e.parentNode||(j(e)?e.host:null)||k(e)}function A(e){return["html","body","#document"].indexOf(Z(e))>=0?e.ownerDocument.body:P(e)&&C(e)?e:A(U(e))}function L(e,t){var n;void 0===t&&(t=[]);var r=A(e),o=r===(null==(n=e.ownerDocument)?void 0:n.body),i=O(r),a=o?[i].concat(i.visualViewport||[],C(r)?r:[]):r,s=t.concat(a);return o?s:s.concat(L(U(a)))}function T(e){return["table","td","th"].indexOf(Z(e))>=0}function B(e){return P(e)&&"fixed"!==S(e).position?e.offsetParent:null}function W(e){for(var t=O(e),n=B(e);n&&T(n)&&"static"===S(n).position;)n=B(n);return n&&("html"===Z(n)||"body"===Z(n)&&"static"===S(n).position)?t:n||function(e){var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&P(e)&&"fixed"===S(e).position)return null;for(var n=U(e);P(n)&&["html","body"].indexOf(Z(n))<0;){var r=S(n);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}(e)||t}var N="top",H="bottom",z="right",I="left",F="auto",_=[N,H,z,I],q="start",V="end",G="viewport",K="popper",X=_.reduce((function(e,t){return e.concat([t+"-"+q,t+"-"+V])}),[]),Y=[].concat(_,[F]).reduce((function(e,t){return e.concat([t,t+"-"+q,t+"-"+V])}),[]),$=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function J(e){var t=new Map,n=new Set,r=[];function o(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&o(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||o(e)})),r}function Q(e){var t;return function(){return t||(t=new Promise((function(n){Promise.resolve().then((function(){t=void 0,n(e())}))}))),t}}var ee={placement:"bottom",modifiers:[],strategy:"absolute"};function te(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"===typeof e.getBoundingClientRect)}))}function ne(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,o=t.defaultOptions,i=void 0===o?ee:o;return function(e,t,n){void 0===n&&(n=i);var o={placement:"bottom",orderedModifiers:[],options:Object.assign({},ee,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},a=[],s=!1,f={state:o,setOptions:function(n){var s="function"===typeof n?n(o.options):n;c(),o.options=Object.assign({},i,o.options,s),o.scrollParents={reference:E(e)?L(e):e.contextElement?L(e.contextElement):[],popper:L(t)};var u=function(e){var t=J(e);return $.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}(function(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(r,o.options.modifiers)));return o.orderedModifiers=u.filter((function(e){return e.enabled})),o.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,i=e.effect;if("function"===typeof i){var s=i({state:o,name:t,instance:f,options:r}),c=function(){};a.push(s||c)}})),f.update()},forceUpdate:function(){if(!s){var e=o.elements,t=e.reference,n=e.popper;if(te(t,n)){o.rects={reference:M(t,W(n),"fixed"===o.options.strategy),popper:R(n)},o.reset=!1,o.placement=o.options.placement,o.orderedModifiers.forEach((function(e){return o.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<o.orderedModifiers.length;r++)if(!0!==o.reset){var i=o.orderedModifiers[r],a=i.fn,c=i.options,u=void 0===c?{}:c,p=i.name;"function"===typeof a&&(o=a({state:o,options:u,name:p,instance:f})||o)}else o.reset=!1,r=-1}}},update:Q((function(){return new Promise((function(e){f.forceUpdate(),e(o)}))})),destroy:function(){c(),s=!0}};if(!te(e,t))return f;function c(){a.forEach((function(e){return e()})),a=[]}return f.setOptions(n).then((function(e){!s&&n.onFirstUpdate&&n.onFirstUpdate(e)})),f}}var re={passive:!0};var oe={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,i=void 0===o||o,a=r.resize,s=void 0===a||a,f=O(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&c.forEach((function(e){e.addEventListener("scroll",n.update,re)})),s&&f.addEventListener("resize",n.update,re),function(){i&&c.forEach((function(e){e.removeEventListener("scroll",n.update,re)})),s&&f.removeEventListener("resize",n.update,re)}},data:{}};function ie(e){return e.split("-")[0]}function ae(e){return e.split("-")[1]}function se(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function fe(e){var t,n=e.reference,r=e.element,o=e.placement,i=o?ie(o):null,a=o?ae(o):null,s=n.x+n.width/2-r.width/2,f=n.y+n.height/2-r.height/2;switch(i){case N:t={x:s,y:n.y-r.height};break;case H:t={x:s,y:n.y+n.height};break;case z:t={x:n.x+n.width,y:f};break;case I:t={x:n.x-r.width,y:f};break;default:t={x:n.x,y:n.y}}var c=i?se(i):null;if(null!=c){var u="y"===c?"height":"width";switch(a){case q:t[c]=t[c]-(n[u]/2-r[u]/2);break;case V:t[c]=t[c]+(n[u]/2-r[u]/2)}}return t}var ce={name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=fe({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},ue=Math.max,pe=Math.min,le=Math.round,de={top:"auto",right:"auto",bottom:"auto",left:"auto"};function me(e){var t,n=e.popper,r=e.popperRect,o=e.placement,i=e.variation,a=e.offsets,s=e.position,f=e.gpuAcceleration,c=e.adaptive,u=e.roundOffsets,p=!0===u?function(e){var t=e.x,n=e.y,r=window.devicePixelRatio||1;return{x:le(le(t*r)/r)||0,y:le(le(n*r)/r)||0}}(a):"function"===typeof u?u(a):a,l=p.x,d=void 0===l?0:l,m=p.y,h=void 0===m?0:m,v=a.hasOwnProperty("x"),g=a.hasOwnProperty("y"),y=I,b=N,w=window;if(c){var x=W(n),E="clientHeight",P="clientWidth";x===O(n)&&"static"!==S(x=k(n)).position&&"absolute"===s&&(E="scrollHeight",P="scrollWidth"),x=x,o!==N&&(o!==I&&o!==z||i!==V)||(b=H,h-=x[E]-r.height,h*=f?1:-1),o!==I&&(o!==N&&o!==H||i!==V)||(y=z,d-=x[P]-r.width,d*=f?1:-1)}var j,Z=Object.assign({position:s},c&&de);return f?Object.assign({},Z,((j={})[b]=g?"0":"",j[y]=v?"0":"",j.transform=(w.devicePixelRatio||1)<=1?"translate("+d+"px, "+h+"px)":"translate3d("+d+"px, "+h+"px, 0)",j)):Object.assign({},Z,((t={})[b]=g?h+"px":"",t[y]=v?d+"px":"",t.transform="",t))}var he={left:"right",right:"left",bottom:"top",top:"bottom"};function ve(e){return e.replace(/left|right|bottom|top/g,(function(e){return he[e]}))}var ge={start:"end",end:"start"};function ye(e){return e.replace(/start|end/g,(function(e){return ge[e]}))}function be(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&j(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function we(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function Oe(e,t){return t===G?we(function(e){var t=O(e),n=k(e),r=t.visualViewport,o=n.clientWidth,i=n.clientHeight,a=0,s=0;return r&&(o=r.width,i=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(a=r.offsetLeft,s=r.offsetTop)),{width:o,height:i,x:a+D(e),y:s}}(e)):P(t)?function(e){var t=w(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):we(function(e){var t,n=k(e),r=x(e),o=null==(t=e.ownerDocument)?void 0:t.body,i=ue(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=ue(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-r.scrollLeft+D(e),f=-r.scrollTop;return"rtl"===S(o||n).direction&&(s+=ue(n.clientWidth,o?o.clientWidth:0)-i),{width:i,height:a,x:s,y:f}}(k(e)))}function xe(e,t,n){var r="clippingParents"===t?function(e){var t=L(U(e)),n=["absolute","fixed"].indexOf(S(e).position)>=0&&P(e)?W(e):e;return E(n)?t.filter((function(e){return E(e)&&be(e,n)&&"body"!==Z(e)})):[]}(e):[].concat(t),o=[].concat(r,[n]),i=o[0],a=o.reduce((function(t,n){var r=Oe(e,n);return t.top=ue(r.top,t.top),t.right=pe(r.right,t.right),t.bottom=pe(r.bottom,t.bottom),t.left=ue(r.left,t.left),t}),Oe(e,i));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function Ee(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function Pe(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}function je(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=void 0===r?e.placement:r,i=n.boundary,a=void 0===i?"clippingParents":i,s=n.rootBoundary,f=void 0===s?G:s,c=n.elementContext,u=void 0===c?K:c,p=n.altBoundary,l=void 0!==p&&p,d=n.padding,m=void 0===d?0:d,h=Ee("number"!==typeof m?m:Pe(m,_)),v=u===K?"reference":K,g=e.rects.popper,y=e.elements[l?v:u],b=xe(E(y)?y:y.contextElement||k(e.elements.popper),a,f),O=w(e.elements.reference),x=fe({reference:O,element:g,strategy:"absolute",placement:o}),P=we(Object.assign({},g,x)),j=u===K?P:O,Z={top:b.top-j.top+h.top,bottom:j.bottom-b.bottom+h.bottom,left:b.left-j.left+h.left,right:j.right-b.right+h.right},D=e.modifiersData.offset;if(u===K&&D){var S=D[o];Object.keys(Z).forEach((function(e){var t=[z,H].indexOf(e)>=0?1:-1,n=[N,H].indexOf(e)>=0?"y":"x";Z[e]+=S[n]*t}))}return Z}function Ze(e,t,n){return ue(e,pe(t,n))}function ke(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function De(e){return[N,z,H,I].some((function(t){return e[t]>=0}))}var Se=ne({defaultModifiers:[oe,ce,{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,a=void 0===i||i,s=n.roundOffsets,f=void 0===s||s,c={placement:ie(t.placement),variation:ae(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,me(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:f})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,me(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:f})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},o=t.elements[e];P(o)&&Z(o)&&(Object.assign(o.style,n),Object.keys(r).forEach((function(e){var t=r[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var r=t.elements[e],o=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});P(r)&&Z(r)&&(Object.assign(r.style,i),Object.keys(o).forEach((function(e){r.removeAttribute(e)})))}))}},requires:["computeStyles"]},{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.offset,i=void 0===o?[0,0]:o,a=Y.reduce((function(e,n){return e[n]=function(e,t,n){var r=ie(e),o=[I,N].indexOf(r)>=0?-1:1,i="function"===typeof n?n(Object.assign({},t,{placement:e})):n,a=i[0],s=i[1];return a=a||0,s=(s||0)*o,[I,z].indexOf(r)>=0?{x:s,y:a}:{x:a,y:s}}(n,t.rects,i),e}),{}),s=a[t.placement],f=s.x,c=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=f,t.modifiersData.popperOffsets.y+=c),t.modifiersData[r]=a}},{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0===a||a,f=n.fallbackPlacements,c=n.padding,u=n.boundary,p=n.rootBoundary,l=n.altBoundary,d=n.flipVariations,m=void 0===d||d,h=n.allowedAutoPlacements,v=t.options.placement,g=ie(v),y=f||(g===v||!m?[ve(v)]:function(e){if(ie(e)===F)return[];var t=ve(e);return[ye(e),t,ye(t)]}(v)),b=[v].concat(y).reduce((function(e,n){return e.concat(ie(n)===F?function(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=n.boundary,i=n.rootBoundary,a=n.padding,s=n.flipVariations,f=n.allowedAutoPlacements,c=void 0===f?Y:f,u=ae(r),p=u?s?X:X.filter((function(e){return ae(e)===u})):_,l=p.filter((function(e){return c.indexOf(e)>=0}));0===l.length&&(l=p);var d=l.reduce((function(t,n){return t[n]=je(e,{placement:n,boundary:o,rootBoundary:i,padding:a})[ie(n)],t}),{});return Object.keys(d).sort((function(e,t){return d[e]-d[t]}))}(t,{placement:n,boundary:u,rootBoundary:p,padding:c,flipVariations:m,allowedAutoPlacements:h}):n)}),[]),w=t.rects.reference,O=t.rects.popper,x=new Map,E=!0,P=b[0],j=0;j<b.length;j++){var Z=b[j],k=ie(Z),D=ae(Z)===q,S=[N,H].indexOf(k)>=0,C=S?"width":"height",M=je(t,{placement:Z,boundary:u,rootBoundary:p,altBoundary:l,padding:c}),R=S?D?z:I:D?H:N;w[C]>O[C]&&(R=ve(R));var U=ve(R),A=[];if(i&&A.push(M[k]<=0),s&&A.push(M[R]<=0,M[U]<=0),A.every((function(e){return e}))){P=Z,E=!1;break}x.set(Z,A)}if(E)for(var L=function(e){var t=b.find((function(t){var n=x.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return P=t,"break"},T=m?3:1;T>0;T--){if("break"===L(T))break}t.placement!==P&&(t.modifiersData[r]._skip=!0,t.placement=P,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0!==a&&a,f=n.boundary,c=n.rootBoundary,u=n.altBoundary,p=n.padding,l=n.tether,d=void 0===l||l,m=n.tetherOffset,h=void 0===m?0:m,v=je(t,{boundary:f,rootBoundary:c,padding:p,altBoundary:u}),g=ie(t.placement),y=ae(t.placement),b=!y,w=se(g),O="x"===w?"y":"x",x=t.modifiersData.popperOffsets,E=t.rects.reference,P=t.rects.popper,j="function"===typeof h?h(Object.assign({},t.rects,{placement:t.placement})):h,Z={x:0,y:0};if(x){if(i||s){var k="y"===w?N:I,D="y"===w?H:z,S="y"===w?"height":"width",C=x[w],M=x[w]+v[k],U=x[w]-v[D],A=d?-P[S]/2:0,L=y===q?E[S]:P[S],T=y===q?-P[S]:-E[S],B=t.elements.arrow,F=d&&B?R(B):{width:0,height:0},_=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},V=_[k],G=_[D],K=Ze(0,E[S],F[S]),X=b?E[S]/2-A-K-V-j:L-K-V-j,Y=b?-E[S]/2+A+K+G+j:T+K+G+j,$=t.elements.arrow&&W(t.elements.arrow),J=$?"y"===w?$.clientTop||0:$.clientLeft||0:0,Q=t.modifiersData.offset?t.modifiersData.offset[t.placement][w]:0,ee=x[w]+X-Q-J,te=x[w]+Y-Q;if(i){var ne=Ze(d?pe(M,ee):M,C,d?ue(U,te):U);x[w]=ne,Z[w]=ne-C}if(s){var re="x"===w?N:I,oe="x"===w?H:z,fe=x[O],ce=fe+v[re],le=fe-v[oe],de=Ze(d?pe(ce,ee):ce,fe,d?ue(le,te):le);x[O]=de,Z[O]=de-fe}}t.modifiersData[r]=Z}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,r=e.name,o=e.options,i=n.elements.arrow,a=n.modifiersData.popperOffsets,s=ie(n.placement),f=se(s),c=[I,z].indexOf(s)>=0?"height":"width";if(i&&a){var u=function(e,t){return Ee("number"!==typeof(e="function"===typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:Pe(e,_))}(o.padding,n),p=R(i),l="y"===f?N:I,d="y"===f?H:z,m=n.rects.reference[c]+n.rects.reference[f]-a[f]-n.rects.popper[c],h=a[f]-n.rects.reference[f],v=W(i),g=v?"y"===f?v.clientHeight||0:v.clientWidth||0:0,y=m/2-h/2,b=u[l],w=g-p[c]-u[d],O=g/2-p[c]/2+y,x=Ze(b,O,w),E=f;n.modifiersData[r]=((t={})[E]=x,t.centerOffset=x-O,t)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!==typeof r||(r=t.elements.popper.querySelector(r)))&&be(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=je(t,{elementContext:"reference"}),s=je(t,{altBoundary:!0}),f=ke(a,r),c=ke(s,o,i),u=De(f),p=De(c);t.modifiersData[n]={referenceClippingOffsets:f,popperEscapeOffsets:c,isReferenceHidden:u,hasPopperEscaped:p},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":p})}}]}),Ce=n(69590),Me=n.n(Ce),Re=[],Ue=function(){},Ae=function(){return Promise.resolve(null)},Le=[];function Te(e){var t=e.placement,n=void 0===t?"bottom":t,r=e.strategy,o=void 0===r?"absolute":r,i=e.modifiers,a=void 0===i?Le:i,s=e.referenceElement,f=e.onFirstUpdate,c=e.innerRef,u=e.children,p=h.useContext(v),l=h.useState(null),d=l[0],m=l[1],w=h.useState(null),O=w[0],x=w[1];h.useEffect((function(){g(c,d)}),[c,d]);var E,P=h.useMemo((function(){return{placement:n,strategy:o,onFirstUpdate:f,modifiers:[].concat(a,[{name:"arrow",enabled:null!=O,options:{element:O}}])}}),[n,o,f,a,O]),j=function(e,t,n){void 0===n&&(n={});var r=h.useRef(null),o={onFirstUpdate:n.onFirstUpdate,placement:n.placement||"bottom",strategy:n.strategy||"absolute",modifiers:n.modifiers||Re},i=h.useState({styles:{popper:{position:o.strategy,left:"0",top:"0"},arrow:{position:"absolute"}},attributes:{}}),a=i[0],s=i[1],f=h.useMemo((function(){return{name:"updateState",enabled:!0,phase:"write",fn:function(e){var t=e.state,n=Object.keys(t.elements);s({styles:y(n.map((function(e){return[e,t.styles[e]||{}]}))),attributes:y(n.map((function(e){return[e,t.attributes[e]]})))})},requires:["computeStyles"]}}),[]),c=h.useMemo((function(){var e={onFirstUpdate:o.onFirstUpdate,placement:o.placement,strategy:o.strategy,modifiers:[].concat(o.modifiers,[f,{name:"applyStyles",enabled:!1}])};return Me()(r.current,e)?r.current||e:(r.current=e,e)}),[o.onFirstUpdate,o.placement,o.strategy,o.modifiers,f]),u=h.useRef();return b((function(){u.current&&u.current.setOptions(c)}),[c]),b((function(){if(null!=e&&null!=t){var r=(n.createPopper||Se)(e,t,c);return u.current=r,function(){r.destroy(),u.current=null}}}),[e,t,n.createPopper]),{state:u.current?u.current.state:null,styles:a.styles,attributes:a.attributes,update:u.current?u.current.update:null,forceUpdate:u.current?u.current.forceUpdate:null}}(s||p,d,P),Z=j.state,k=j.styles,D=j.forceUpdate,S=j.update,C=h.useMemo((function(){return{ref:m,style:k.popper,placement:Z?Z.placement:n,hasPopperEscaped:Z&&Z.modifiersData.hide?Z.modifiersData.hide.hasPopperEscaped:null,isReferenceHidden:Z&&Z.modifiersData.hide?Z.modifiersData.hide.isReferenceHidden:null,arrowProps:{style:k.arrow,ref:x},forceUpdate:D||Ue,update:S||Ae}}),[m,x,n,Z,k,S,D]);return(E=u,Array.isArray(E)?E[0]:E)(C)}var Be=n(96774),We=n.n(Be),Ne=n(49545),He=n(92063),ze=n(12519),Ie=n(92248),Fe=n(13545),_e=n(28935),qe=n(24880),Ve=n(62002),Ge=n(90149);var Ke=function(e,t,n,r){return(0,Ge.Z)(e,(function(e,o,i){t(r,n(e),o,i)})),r};var Xe=function(e,t){return function(n,r){return Ke(n,e,t(r),{})}},Ye=n(69203),$e=Object.prototype.toString,Je=Xe((function(e,t,n){null!=t&&"function"!=typeof t.toString&&(t=$e.call(t)),e[t]=n}),(0,Ve.Z)(Ye.Z)),Qe=n(87528),et={"top center":"top","top left":"top-start","top right":"top-end","bottom center":"bottom","bottom left":"bottom-start","bottom right":"bottom-end","right center":"right","left center":"left"},tt=((0,Qe.Z)(et),Je(et));function nt(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var rt=n(42454),ot=n(34714),it=function(){function e(e){this.ref=e}var t,n,r;return e.prototype.getBoundingClientRect=function(){return(0,s.Z)(this.ref.current,"getBoundingClientRect")||{}},t=e,(n=[{key:"clientWidth",get:function(){return this.getBoundingClientRect().width}},{key:"clientHeight",get:function(){return this.getBoundingClientRect().height}},{key:"parentNode",get:function(){return this.ref.current?this.ref.current.parentNode:void 0}}])&&nt(t.prototype,n),r&&nt(t,r),e}(),at=(0,rt.Z)((function(e){return new it((0,ot.I)(e)?e:{current:e})}));function st(e){var t=e.children,n=e.className,o=e.content,i=(0,m.Z)("content",n),a=(0,_e.Z)(st,e),s=(0,ze.Z)(st,e);return h.createElement(s,(0,r.Z)({},a,{className:i}),Ie.kK(t)?o:t)}function ft(e){var t=e.children,n=e.className,o=e.content,i=(0,m.Z)("header",n),a=(0,_e.Z)(ft,e),s=(0,ze.Z)(ft,e);return h.createElement(s,(0,r.Z)({},a,{className:i}),Ie.kK(t)?o:t)}st.handledProps=["as","children","className","content"],st.propTypes={},st.create=(0,Fe.u5)(st,(function(e){return{children:e}})),ft.handledProps=["as","children","className","content"],ft.propTypes={},ft.create=(0,Fe.u5)(ft,(function(e){return{children:e}}));var ct=function(e){function t(){for(var n,o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return(n=e.call.apply(e,[this].concat(i))||this).state={},n.open=!1,n.zIndexWasSynced=!1,n.triggerRef=h.createRef(),n.getPortalProps=function(){var e={},t=n.props,r=t.on,o=t.hoverable,i=(0,f.Z)(r)?r:[r];return o&&(e.closeOnPortalMouseLeave=!0,e.mouseLeaveDelay=300),(0,u.Z)(i,"hover")&&(e.openOnTriggerClick=!1,e.closeOnTriggerClick=!1,e.openOnTriggerMouseEnter=!0,e.closeOnTriggerMouseLeave=!0,e.mouseLeaveDelay=70,e.mouseEnterDelay=50),(0,u.Z)(i,"click")&&(e.openOnTriggerClick=!0,e.closeOnTriggerClick=!0,e.closeOnDocumentClick=!0),(0,u.Z)(i,"focus")&&(e.openOnTriggerFocus=!0,e.closeOnTriggerBlur=!0),e},n.hideOnScroll=function(e){n.setState({closed:!0}),Ne.Z.unsub("scroll",n.hideOnScroll,{target:window}),n.timeoutId=setTimeout((function(){n.setState({closed:!1})}),50),n.handleClose(e)},n.handleClose=function(e){(0,s.Z)(n.props,"onClose",e,(0,r.Z)({},n.props,{open:!1}))},n.handleOpen=function(e){(0,s.Z)(n.props,"onOpen",e,(0,r.Z)({},n.props,{open:!0}))},n.handlePortalMount=function(e){(0,s.Z)(n.props,"onMount",e,n.props)},n.handlePortalUnmount=function(e){n.positionUpdate=null,(0,s.Z)(n.props,"onUnmount",e,n.props)},n.renderContent=function(e){var o=e.placement,i=e.ref,a=e.update,s=e.style,f=n.props,c=f.basic,u=f.children,p=f.className,l=f.content,v=f.hideOnScroll,g=f.flowing,y=f.header,b=f.inverted,w=f.popper,O=f.size,x=f.style,E=f.wide,P=n.state.contentRestProps;n.positionUpdate=a;var j=(0,m.Z)("ui",tt[o],O,(0,He.sU)(E,"wide"),(0,He.lG)(c,"basic"),(0,He.lG)(g,"flowing"),(0,He.lG)(b,"inverted"),"popup transition visible",p),Z=(0,ze.Z)(t,n.props),k=(0,r.Z)({left:"auto",right:"auto",position:"initial"},x),D=h.createElement(Z,(0,r.Z)({},P,{className:j,style:k}),Ie.kK(u)?h.createElement(h.Fragment,null,ft.create(y,{autoGenerateKey:!1}),st.create(l,{autoGenerateKey:!1})):u,v&&h.createElement(d(),{on:n.hideOnScroll,name:"scroll",target:"window"}));return(0,Fe.DE)(w||{},{overrideProps:{children:D,ref:i,style:(0,r.Z)({display:"flex"},s)}})},n}(0,o.Z)(t,e),t.getDerivedStateFromProps=function(e,n){if(n.closed||n.disabled)return{};var r=(0,_e.Z)(t,e);return{contentRestProps:(0,p.Z)(r,(function(e,t,n){return(0,u.Z)(qe.Z.handledProps,n)||(e[n]=t),e}),{}),portalRestProps:(0,c.Z)(r,qe.Z.handledProps)}};var n=t.prototype;return n.componentDidUpdate=function(e){We()(this.props.popperDependencies,e.popperDependencies)||this.handleUpdate()},n.componentWillUnmount=function(){clearTimeout(this.timeoutId)},n.handleUpdate=function(){this.positionUpdate&&this.positionUpdate()},n.render=function(){var e=this,t=this.props,n=t.context,o=t.disabled,s=t.eventsEnabled,f=t.offset,c=t.pinned,u=t.popper,p=t.popperModifiers,l=t.position,d=t.positionFixed,m=t.trigger,v=this.state,g=v.closed,y=v.portalRestProps;if(g||o)return m;var b=[{name:"arrow",enabled:!1},{name:"eventListeners",options:{scroll:!!s,resize:!!s}},{name:"flip",enabled:!c},{name:"preventOverflow",enabled:!!f},{name:"offset",enabled:!!f,options:{offset:f}}].concat(p,[{name:"syncZIndex",enabled:!0,phase:"beforeRead",fn:function(t){var n,r=t.state;if(!e.zIndexWasSynced){var o=null==u||null==(n=u.style)?void 0:n.zIndex;(0,a.Z)(o)&&(r.elements.popper.style.zIndex=window.getComputedStyle(r.elements.popper.firstChild).zIndex),e.zIndexWasSynced=!0}},effect:function(){return function(){e.zIndexWasSynced=!1}}}]),w=at((0,i.Z)(n)?this.triggerRef:n),O=(0,r.Z)({},this.getPortalProps(),y);return h.createElement(qe.Z,(0,r.Z)({},O,{onClose:this.handleClose,onMount:this.handlePortalMount,onOpen:this.handleOpen,onUnmount:this.handlePortalUnmount,trigger:m,triggerRef:this.triggerRef}),h.createElement(Te,{modifiers:b,placement:et[l],strategy:d?"fixed":null,referenceElement:w},this.renderContent))},t}(h.Component);ct.handledProps=["as","basic","children","className","content","context","disabled","eventsEnabled","flowing","header","hideOnScroll","hoverable","inverted","offset","on","onClose","onMount","onOpen","onUnmount","pinned","popper","popperDependencies","popperModifiers","position","positionFixed","size","style","trigger","wide"],ct.propTypes={},ct.defaultProps={disabled:!1,eventsEnabled:!0,on:["click","hover"],pinned:!1,popperModifiers:[],position:"top left"},ct.Content=st,ct.Header=ft}}]);