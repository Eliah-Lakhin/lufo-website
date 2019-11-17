/*! For license information please see index.fd6d32a917f866a3893d.js.LICENSE */
!function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=17)}([function(t,e,n){"use strict";var o,i={},s=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},r=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}();function a(t,e){for(var n=[],o={},i=0;i<t.length;i++){var s=t[i],r=e.base?s[0]+e.base:s[0],a={css:s[1],media:s[2],sourceMap:s[3]};o[r]?o[r].parts.push(a):n.push(o[r]={id:r,parts:[a]})}return n}function c(t,e){for(var n=0;n<t.length;n++){var o=t[n],s=i[o.id],r=0;if(s){for(s.refs++;r<s.parts.length;r++)s.parts[r](o.parts[r]);for(;r<o.parts.length;r++)s.parts.push(v(o.parts[r],e))}else{for(var a=[];r<o.parts.length;r++)a.push(v(o.parts[r],e));i[o.id]={id:o.id,refs:1,parts:a}}}}function l(t){var e=document.createElement("style");if(void 0===t.attributes.nonce){var o=n.nc;o&&(t.attributes.nonce=o)}if(Object.keys(t.attributes).forEach((function(n){e.setAttribute(n,t.attributes[n])})),"function"==typeof t.insert)t.insert(e);else{var i=r(t.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(e)}return e}var u,f=(u=[],function(t,e){return u[t]=e,u.filter(Boolean).join("\n")});function d(t,e,n,o){var i=n?"":o.css;if(t.styleSheet)t.styleSheet.cssText=f(e,i);else{var s=document.createTextNode(i),r=t.childNodes;r[e]&&t.removeChild(r[e]),r.length?t.insertBefore(s,r[e]):t.appendChild(s)}}function p(t,e,n){var o=n.css,i=n.media,s=n.sourceMap;if(i&&t.setAttribute("media",i),s&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),t.styleSheet)t.styleSheet.cssText=o;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(o))}}var m=null,h=0;function v(t,e){var n,o,i;if(e.singleton){var s=h++;n=m||(m=l(e)),o=d.bind(null,n,s,!1),i=d.bind(null,n,s,!0)}else n=l(e),o=p.bind(null,n,e),i=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else i()}}t.exports=function(t,e){(e=e||{}).attributes="object"==typeof e.attributes?e.attributes:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=s());var n=a(t,e);return c(n,e),function(t){for(var o=[],s=0;s<n.length;s++){var r=n[s],l=i[r.id];l&&(l.refs--,o.push(l))}t&&c(a(t,e),e);for(var u=0;u<o.length;u++){var f=o[u];if(0===f.refs){for(var d=0;d<f.parts.length;d++)f.parts[d]();delete i[f.id]}}}}},,function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){(function(n){var o,i;i=void 0!==n?n:"undefined"!=typeof window?window:this,void 0===(o=function(){return function(t){"use strict";var e={navClass:"active",contentClass:"active",nested:!1,nestedClass:"active",offset:0,reflow:!1,events:!0},n=function(t,e,n){if(n.settings.events){var o=new CustomEvent(t,{bubbles:!0,cancelable:!0,detail:n});e.dispatchEvent(o)}},o=function(t){var e=0;if(t.offsetParent)for(;t;)e+=t.offsetTop,t=t.offsetParent;return e>=0?e:0},i=function(t){t&&t.sort((function(t,e){return o(t.content)<o(e.content)?-1:1}))},s=function(e,n,o){var i=e.getBoundingClientRect(),s=function(t){return"function"==typeof t.offset?parseFloat(t.offset()):parseFloat(t.offset)}(n);return o?parseInt(i.bottom,10)<(t.innerHeight||document.documentElement.clientHeight):parseInt(i.top,10)<=s},r=function(){return t.innerHeight+t.pageYOffset>=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},a=function(t,e){var n=t[t.length-1];if(function(t,e){return!(!r()||!s(t.content,e,!0))}(n,e))return n;for(var o=t.length-1;o>=0;o--)if(s(t[o].content,e))return t[o]},c=function(t,e){if(e.nested&&t.parentNode){var n=t.parentNode.closest("li");n&&(n.classList.remove(e.nestedClass),c(n,e))}},l=function(t,e){if(t){var o=t.nav.closest("li");o&&(o.classList.remove(e.navClass),t.content.classList.remove(e.contentClass),c(o,e),n("gumshoeDeactivate",o,{link:t.nav,content:t.content,settings:e}))}},u=function(t,e){if(e.nested){var n=t.parentNode.closest("li");n&&(n.classList.add(e.nestedClass),u(n,e))}};return function(o,s){var r,c,f,d,p,m={setup:function(){r=document.querySelectorAll(o),c=[],Array.prototype.forEach.call(r,(function(t){var e=document.getElementById(decodeURIComponent(t.hash.substr(1)));e&&c.push({nav:t,content:e})})),i(c)},detect:function(){var t=a(c,p);t?f&&t.content===f.content||(l(f,p),function(t,e){if(t){var o=t.nav.closest("li");o&&(o.classList.add(e.navClass),t.content.classList.add(e.contentClass),u(o,e),n("gumshoeActivate",o,{link:t.nav,content:t.content,settings:e}))}}(t,p),f=t):f&&(l(f,p),f=null)}},h=function(e){d&&t.cancelAnimationFrame(d),d=t.requestAnimationFrame(m.detect)},v=function(e){d&&t.cancelAnimationFrame(d),d=t.requestAnimationFrame((function(){i(c),m.detect()}))};return m.destroy=function(){f&&l(f,p),t.removeEventListener("scroll",h,!1),p.reflow&&t.removeEventListener("resize",v,!1),c=null,r=null,f=null,d=null,p=null},p=function(){var t={};return Array.prototype.forEach.call(arguments,(function(e){for(var n in e){if(!e.hasOwnProperty(n))return;t[n]=e[n]}})),t}(e,s||{}),m.setup(),m.detect(),t.addEventListener("scroll",h,!1),p.reflow&&t.addEventListener("resize",v,!1),m}}(i)}.apply(e,[]))||(t.exports=o)}).call(this,n(2))},function(t,e,n){(function(n){var o,i;window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(t){var e,n=(this.document||this.ownerDocument).querySelectorAll(t),o=this;do{for(e=n.length;0<=--e&&n.item(e)!==o;);}while(e<0&&(o=o.parentElement));return o}),function(){function t(t,e){e=e||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(t,e.bubbles,e.cancelable,e.detail),n}"function"!=typeof window.CustomEvent&&(t.prototype=window.Event.prototype,window.CustomEvent=t)}(),function(){for(var t=0,e=["ms","moz","webkit","o"],n=0;n<e.length&&!window.requestAnimationFrame;++n)window.requestAnimationFrame=window[e[n]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[e[n]+"CancelAnimationFrame"]||window[e[n]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e,n){var o=(new Date).getTime(),i=Math.max(0,16-(o-t)),s=window.setTimeout((function(){e(o+i)}),i);return t=o+i,s}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)})}(),i=void 0!==n?n:"undefined"!=typeof window?window:this,void 0===(o=function(){return function(t){"use strict";var e={ignore:"[data-scroll-ignore]",header:null,topOnEmptyHash:!0,speed:500,speedAsDuration:!1,durationMax:null,durationMin:null,clip:!0,offset:0,easing:"easeInOutCubic",customEasing:null,updateURL:!0,popstate:!0,emitEvents:!0},n=function(){var t={};return Array.prototype.forEach.call(arguments,(function(e){for(var n in e){if(!e.hasOwnProperty(n))return;t[n]=e[n]}})),t},o=function(t){"#"===t.charAt(0)&&(t=t.substr(1));for(var e,n=String(t),o=n.length,i=-1,s="",r=n.charCodeAt(0);++i<o;){if(0===(e=n.charCodeAt(i)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");s+=1<=e&&e<=31||127==e||0===i&&48<=e&&e<=57||1===i&&48<=e&&e<=57&&45===r?"\\"+e.toString(16)+" ":128<=e||45===e||95===e||48<=e&&e<=57||65<=e&&e<=90||97<=e&&e<=122?n.charAt(i):"\\"+n.charAt(i)}return"#"+s},i=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},s=function(e,n,o,i){if(n.emitEvents&&"function"==typeof t.CustomEvent){var s=new CustomEvent(e,{bubbles:!0,detail:{anchor:o,toggle:i}});document.dispatchEvent(s)}};return function(r,a){var c,l,u,f,d={cancelScroll:function(t){cancelAnimationFrame(f),f=null,t||s("scrollCancel",c)},animateScroll:function(o,r,a){d.cancelScroll();var l=n(c||e,a||{}),p="[object Number]"===Object.prototype.toString.call(o),m=p||!o.tagName?null:o;if(p||m){var h=t.pageYOffset;l.header&&!u&&(u=document.querySelector(l.header));var v,y,g,w,b,C,S,E,k=function(e){return e?(n=e,parseInt(t.getComputedStyle(n).height,10)+e.offsetTop):0;var n}(u),O=p?o:function(e,n,o,s){var r=0;if(e.offsetParent)for(;r+=e.offsetTop,e=e.offsetParent;);return r=Math.max(r-n-o,0),s&&(r=Math.min(r,i()-t.innerHeight)),r}(m,k,parseInt("function"==typeof l.offset?l.offset(o,r):l.offset,10),l.clip),A=O-h,x=i(),F=0,M=(v=A,g=(y=l).speedAsDuration?y.speed:Math.abs(v/1e3*y.speed),y.durationMax&&g>y.durationMax?y.durationMax:y.durationMin&&g<y.durationMin?y.durationMin:parseInt(g,10)),P=function(e){var n,i,a;w||(w=e),F+=e-w,C=h+A*(i=b=1<(b=0===M?0:F/M)?1:b,"easeInQuad"===(n=l).easing&&(a=i*i),"easeOutQuad"===n.easing&&(a=i*(2-i)),"easeInOutQuad"===n.easing&&(a=i<.5?2*i*i:(4-2*i)*i-1),"easeInCubic"===n.easing&&(a=i*i*i),"easeOutCubic"===n.easing&&(a=--i*i*i+1),"easeInOutCubic"===n.easing&&(a=i<.5?4*i*i*i:(i-1)*(2*i-2)*(2*i-2)+1),"easeInQuart"===n.easing&&(a=i*i*i*i),"easeOutQuart"===n.easing&&(a=1- --i*i*i*i),"easeInOutQuart"===n.easing&&(a=i<.5?8*i*i*i*i:1-8*--i*i*i*i),"easeInQuint"===n.easing&&(a=i*i*i*i*i),"easeOutQuint"===n.easing&&(a=1+--i*i*i*i*i),"easeInOutQuint"===n.easing&&(a=i<.5?16*i*i*i*i*i:1+16*--i*i*i*i*i),n.customEasing&&(a=n.customEasing(i)),a||i),t.scrollTo(0,Math.floor(C)),function(e,n){var i,a,c,u=t.pageYOffset;if(e==n||u==n||(h<n&&t.innerHeight+u)>=x)return d.cancelScroll(!0),a=n,c=p,0===(i=o)&&document.body.focus(),c||(i.focus(),document.activeElement!==i&&(i.setAttribute("tabindex","-1"),i.focus(),i.style.outline="none"),t.scrollTo(0,a)),s("scrollStop",l,o,r),!(f=w=null)}(C,O)||(f=t.requestAnimationFrame(P),w=e)};0===t.pageYOffset&&t.scrollTo(0,0),S=o,E=l,p||history.pushState&&E.updateURL&&history.pushState({smoothScroll:JSON.stringify(E),anchor:S.id},document.title,S===document.documentElement?"#top":"#"+S.id),"matchMedia"in t&&t.matchMedia("(prefers-reduced-motion)").matches?t.scrollTo(0,Math.floor(O)):(s("scrollStart",l,o,r),d.cancelScroll(!0),t.requestAnimationFrame(P))}}},p=function(e){if(!e.defaultPrevented&&!(0!==e.button||e.metaKey||e.ctrlKey||e.shiftKey)&&"closest"in e.target&&(l=e.target.closest(r))&&"a"===l.tagName.toLowerCase()&&!e.target.closest(c.ignore)&&l.hostname===t.location.hostname&&l.pathname===t.location.pathname&&/#/.test(l.href)){var n,i=o(l.hash);if("#"===i){if(!c.topOnEmptyHash)return;n=document.documentElement}else n=document.querySelector(i);(n=n||"#top"!==i?n:document.documentElement)&&(e.preventDefault(),function(e){if(history.replaceState&&e.updateURL&&!history.state){var n=t.location.hash;n=n||"",history.replaceState({smoothScroll:JSON.stringify(e),anchor:n||t.pageYOffset},document.title,n||t.location.href)}}(c),d.animateScroll(n,l))}},m=function(t){if(null!==history.state&&history.state.smoothScroll&&history.state.smoothScroll===JSON.stringify(c)){var e=history.state.anchor;"string"==typeof e&&e&&!(e=document.querySelector(o(history.state.anchor)))||d.animateScroll(e,null,{updateURL:!1})}};return d.destroy=function(){c&&(document.removeEventListener("click",p,!1),t.removeEventListener("popstate",m,!1),d.cancelScroll(),f=u=l=c=null)},function(){if(!("querySelector"in document&&"addEventListener"in t&&"requestAnimationFrame"in t&&"closest"in t.Element.prototype))throw"Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";d.destroy(),c=n(e,a||{}),u=c.header?document.querySelector(c.header):null,document.addEventListener("click",p,!1),c.updateURL&&c.popstate&&t.addEventListener("popstate",m,!1)}(),d}}(i)}.apply(e,[]))||(t.exports=o)}).call(this,n(2))},,function(t,e,n){var o=n(7);"string"==typeof o&&(o=[[t.i,o,""]]);var i={insert:"head",singleton:!1};n(0)(o,i);o.locals&&(t.exports=o.locals)},function(t,e,n){},,,,,,,,,,function(t,e,n){"use strict";n.r(e);n(6);var o=n(3),i=n.n(o),s=n(4),r=n.n(s),a=function(){function t(t,e){var n=void 0!==e?e:{};this.version="3.6.7",this.userAgent=window.navigator.userAgent||"no `userAgent` provided by the browser",this.props={customStickyChangeNumber:n.customStickyChangeNumber||null,noStyles:n.noStyles||!1,stickyBitStickyOffset:n.stickyBitStickyOffset||0,parentClass:n.parentClass||"js-stickybit-parent",scrollEl:"string"==typeof n.scrollEl?document.querySelector(n.scrollEl):n.scrollEl||window,stickyClass:n.stickyClass||"js-is-sticky",stuckClass:n.stuckClass||"js-is-stuck",stickyChangeClass:n.stickyChangeClass||"js-is-sticky--change",useStickyClasses:n.useStickyClasses||!1,useFixed:n.useFixed||!1,useGetBoundingClientRect:n.useGetBoundingClientRect||!1,verticalPosition:n.verticalPosition||"top"},this.props.positionVal=this.definePosition()||"fixed",this.instances=[];var o=this.props,i=o.positionVal,s=o.verticalPosition,r=o.noStyles,a=o.stickyBitStickyOffset,c="top"!==s||r?"":a+"px",l="fixed"!==i?i:"";this.els="string"==typeof t?document.querySelectorAll(t):t,"length"in this.els||(this.els=[this.els]);for(var u=0;u<this.els.length;u++){var f=this.els[u];f.style[s]=c,f.style.position=l,this.instances.push(this.addInstance(f,this.props))}}var e=t.prototype;return e.definePosition=function(){var t;if(this.props.useFixed)t="fixed";else{for(var e=["","-o-","-webkit-","-moz-","-ms-"],n=document.head.style,o=0;o<e.length;o+=1)n.position=e[o]+"sticky";t=n.position?n.position:"fixed",n.position=""}return t},e.addInstance=function(t,e){var n=this,o={el:t,parent:t.parentNode,props:e};if("fixed"===e.positionVal||e.useStickyClasses){this.isWin=this.props.scrollEl===window;var i=this.isWin?window:this.getClosestParent(o.el,o.props.scrollEl);this.computeScrollOffsets(o),o.parent.className+=" "+e.parentClass,o.state="default",o.stateContainer=function(){return n.manageState(o)},i.addEventListener("scroll",o.stateContainer)}return o},e.getClosestParent=function(t,e){var n=e,o=t;if(o.parentElement===n)return n;for(;o.parentElement!==n;)o=o.parentElement;return n},e.getTopPosition=function(t){if(this.props.useGetBoundingClientRect)return t.getBoundingClientRect().top+(this.props.scrollEl.pageYOffset||document.documentElement.scrollTop);var e=0;do{e=t.offsetTop+e}while(t=t.offsetParent);return e},e.computeScrollOffsets=function(t){var e=t,n=e.props,o=e.el,i=e.parent,s=!this.isWin&&"fixed"===n.positionVal,r="bottom"!==n.verticalPosition,a=s?this.getTopPosition(n.scrollEl):0,c=s?this.getTopPosition(i)-a:this.getTopPosition(i),l=null!==n.customStickyChangeNumber?n.customStickyChangeNumber:o.offsetHeight,u=c+i.offsetHeight;e.offset=a+n.stickyBitStickyOffset,e.stickyStart=r?c-e.offset:0,e.stickyChange=e.stickyStart+l,e.stickyStop=r?u-(o.offsetHeight+e.offset):u-window.innerHeight},e.toggleClasses=function(t,e,n){var o=t,i=o.className.split(" ");n&&-1===i.indexOf(n)&&i.push(n);var s=i.indexOf(e);-1!==s&&i.splice(s,1),o.className=i.join(" ")},e.manageState=function(t){var e=t,n=e.el,o=e.props,i=e.state,s=e.stickyStart,r=e.stickyChange,a=e.stickyStop,c=n.style,l=o.noStyles,u=o.positionVal,f=o.scrollEl,d=o.stickyClass,p=o.stickyChangeClass,m=o.stuckClass,h=o.verticalPosition,v="bottom"!==h,y=function(t){t()},g=this.isWin&&(window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame)||y,w=this.toggleClasses,b=this.isWin?window.scrollY||window.pageYOffset:f.scrollTop,C=v&&b<=s&&("sticky"===i||"stuck"===i),S=b>=a&&"sticky"===i;b>s&&b<a&&("default"===i||"stuck"===i)?(e.state="sticky",g((function(){w(n,m,d),c.position=u,l||(c.bottom="",c[h]=o.stickyBitStickyOffset+"px")}))):C?(e.state="default",g((function(){w(n,d),w(n,m),"fixed"===u&&(c.position="")}))):S&&(e.state="stuck",g((function(){w(n,d,m),"fixed"!==u||l||(c.top="",c.bottom="0",c.position="absolute")})));var E=b>=r&&b<=a;b<r/2||b>a?g((function(){w(n,p)})):E&&g((function(){w(n,"stub",p)}))},e.update=function(t){var e=this;return void 0===t&&(t=null),this.instances.forEach((function(n){e.computeScrollOffsets(n),t&&Object.keys(t).forEach((function(e){n.props[e]=t[e]}))})),this},e.removeInstance=function(t){var e=t.el,n=t.props,o=this.toggleClasses;e.style.position="",e.style[n.verticalPosition]="",o(e,n.stickyClass),o(e,n.stuckClass),o(e.parentNode,n.parentClass)},e.cleanup=function(){for(var t=0;t<this.instances.length;t+=1){var e=this.instances[t];e.stateContainer&&e.props.scrollEl.removeEventListener("scroll",e.stateContainer),this.removeInstance(e)}this.manageState=!1,this.instances=[]},t}();var c=function(t,e){return new a(t,e)};new i.a("nav a",{nested:!0,offset:200}),new r.a('a[href*="#"]',{speed:500,speedAsDuration:!0}),c("nav",{stickyBitStickyOffset:50})}]);