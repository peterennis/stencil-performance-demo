/*! Built with http://stenciljs.com */
(function(Context,namespace,hydratedCssClass,resourcesUrl,s){"use strict";
s=document.querySelector("script[data-namespace='stencil-components']");if(s){resourcesUrl=s.getAttribute('data-resources-url');}
(function(t,e,n,o){"use strict";function i(t){return{t:t[0],e:t[1],n:!!t[2],o:!!t[3],i:!!t[4]}}function f(t,e){if(O(e)&&"object"!=typeof e&&"function"!=typeof e){if(t===Boolean||3===t)return"false"!==e&&(""===e||!!e);if(t===Number||4===t)return parseFloat(e);if(t===String||2===t)return e.toString()}return e}function r(t,e,n,o){const i=t.f.get(e);i&&((o=i["s-ld"]||i.$activeLoading)&&((n=o.indexOf(e))>-1&&o.splice(n,1),o.length||(i["s-init"]&&i["s-init"](),i.$initLoad&&i.$initLoad())),t.f.delete(e))}function c(t,e,n){let o,i,f=null,r=!1,c=!1;for(var l=arguments.length;l-- >2;)T.push(arguments[l]);for(;T.length>0;)if((n=T.pop())&&void 0!==n.pop)for(l=n.length;l--;)T.push(n[l]);else"boolean"==typeof n&&(n=null),(c="function"!=typeof t)&&(null==n?n="":"number"==typeof n?n=String(n):"string"!=typeof n&&(c=!1)),c&&r?f[f.length-1].r+=n:null===f?f=[c?{r:n}:n]:f.push(c?{r:n}:n),r=c;if(null!=e){if(e.className&&(e.class=e.className),"object"==typeof e.class){for(l in e.class)e.class[l]&&T.push(l);e.class=T.join(" "),T.length=0}null!=e.c&&(o=e.c),null!=e.name&&(i=e.name)}return"function"==typeof t?t(Object.assign({},e,{children:f}),R):{l:t,s:f,r:void 0,u:e,a:o,p:i,d:void 0,v:!1}}function l(t,e){t.m.has(e)||(t.m.set(e,!0),t.b?t.queue.write(()=>s(t,e)):t.queue.tick(()=>s(t,e)))}function s(t,e,n,o,i,f){if(t.m.delete(e),!t.y.has(e)){if(o=t.w.get(e),n=!o){if((i=t.f.get(e))&&i.$rendered&&(i["s-rn"]=!0),i&&!i["s-rn"])return(i["s-rc"]=i["s-rc"]||[]).push(()=>{s(t,e)}),void(i.$onRender=i["s-rc"]);o=function r(t,e,n,o,i,f,c){try{(function l(t,e,n,o,i,f,r){for(r in t.g.set(o,n),t.M.has(n)||t.M.set(n,{}),(f=Object.assign({color:{type:String}},e.properties)).mode={type:String},f)a(t,f[r],n,o,r,i)})(t,i=t.C(e).k,e,o=new i,n)}catch(n){o={},t.W(n,7,e,!0)}return t.w.set(e,o),o}(t,e,t.j.get(e))}f&&f.then?f.then(()=>u(t,e,o,n)):u(t,e,o,n)}}function u(t,e,n,o){(function i(t,e,n,o,f){try{const i=e.k.host;let r;if(o.render||o.hostData||i||r){t.x=!0;const i=o.render&&o.render();let r;r=o.hostData&&o.hostData(),t.x=!1;const l=t.N.get(n)||{};l.d=n;const s=c(null,r,i);t.N.set(n,t.render(l,s,f,e.k.encapsulation))}t.O(t,t.A,e,o.mode,n),n["s-rn"]=!0,n.$onRender&&(n["s-rc"]=n.$onRender),n["s-rc"]&&(n["s-rc"].forEach(t=>t()),n["s-rc"]=null)}catch(e){t.x=!1,t.W(e,8,n,!0)}})(t,t.C(e),e,n,!o);try{o?e["s-init"]():w(t.N.get(e))}catch(n){t.W(n,6,e,!0)}}function a(t,e,n,o,i,r,c,l){if(e.type||e.state){const s=t.M.get(n);e.state||(!e.attr||void 0!==s[i]&&""!==s[i]||(c=r&&r.S)&&O(l=c[e.attr])&&(s[i]=f(e.type,l)),n.hasOwnProperty(i)&&(void 0===s[i]&&(s[i]=f(e.type,n[i])),delete n[i])),o.hasOwnProperty(i)&&void 0===s[i]&&(s[i]=o[i]),e.watchCallbacks&&(s[L+i]=e.watchCallbacks.slice()),v(o,i,function s(e){return(e=t.M.get(t.g.get(this)))&&e[i]},function u(n,o){(o=t.g.get(this))&&(e.state||e.mutable)&&p(t,o,i,n)})}else e.elementRef&&d(o,i,n)}function p(t,e,n,o,i,f,r){(i=t.M.get(e))||t.M.set(e,i={}),o!==i[n]&&(i[n]=o,t.w.get(e)&&(i[L+n],!t.x&&e["s-rn"]&&l(t,e)))}function d(t,e,n){Object.defineProperty(t,e,{configurable:!0,value:n})}function v(t,e,n,o){Object.defineProperty(t,e,{configurable:!0,get:n,set:o})}function m(t,e,n,o,i,f,r,c,l,s){if("class"!==n||f)if("style"===n){for(c in o=o||x,i=i||x,o)i[c]||(e.style[c]="");for(c in i)i[c]!==o[c]&&(e.style[c]=i[c])}else"o"!==n[0]||"n"!==n[1]||!/[A-Z]/.test(n[2])||n in e?"list"!==n&&"type"!==n&&!f&&(n in e||-1!==["object","function"].indexOf(typeof i)&&null!==i)?(s=t.C(e))&&s.T&&s.T[n]?b(e,n,i):"ref"!==n&&(b(e,n,null==i?"":i),null!=i&&!1!==i||e.removeAttribute(n)):null!=i?function u(t,e,n,o,i){const f=e!==(e=e.replace(/^xlink\:?/,"")),r=q[e]||o;r&&(!n||"false"===n)||i?f?t.removeAttributeNS(B,A(e)):t.removeAttribute(e):"function"!=typeof n&&(r&&(n=""),f?t.setAttributeNS(B,A(e),n):t.setAttribute(e,n))}(e,n,i):!f||null!=i&&!1!==i||t.A.R(e,n):(n=A(n)in e?A(n.substring(2)):A(n[2])+n.substring(3),i?i!==o&&t.A.L(e,n,i):t.A.q(e,n));else if(o!==i){const t=null==o||""===o?E:o.trim().split(/\s+/),n=null==i||""===i?E:i.trim().split(/\s+/);let f=null==e.className||""===e.className?E:e.className.trim().split(/\s+/);for(c=0,l=t.length;c<l;c++)-1===n.indexOf(t[c])&&(f=f.filter(e=>e!==t[c]));for(c=0,l=n.length;c<l;c++)-1===t.indexOf(n[c])&&(f=[...f,n[c]]);e.className=f.join(" ")}}function b(t,e,n){try{t[e]=n}catch(t){}}function h(t,e,n,o,i){const f=11===n.d.nodeType&&n.d.host?n.d.host:n.d,r=e&&e.u||x,c=n.u||x;for(i in r)c&&null!=c[i]||null==r[i]||m(t,f,i,r[i],void 0,o,n.v);for(i in c)i in r&&c[i]===("value"===i||"checked"===i?f[i]:r[i])||m(t,f,i,r[i],c[i],o,n.v)}function y(t,e){function n(i,f,r,c,l,s,p,d,y){if(d=f.s[r],u||(v=!0,"slot"===d.l&&(a&&e.B(c,a+"-slot",""),d.s?d.D=!0:d.F=!0)),O(d.r))d.d=e.H(d.r);else if(d.F)d.d=e.H("");else{if(s=d.d=D||"svg"===d.l?e.I("http://www.w3.org/2000/svg",d.l):e.P(d.D?"slot-fb":d.l),D="svg"===d.l||"foreignObject"!==d.l&&D,h(t,null,d,D),O(a)&&s["s-si"]!==a&&e.B(s,s["s-si"]=a,""),d.s)for(l=0;l<d.s.length;++l)(p=n(i,d,l,s))&&e.U(s,p);"svg"===d.l&&(D=!1)}return d.d["s-hn"]=m,(d.D||d.F)&&(d.d["s-sr"]=!0,d.d["s-cr"]=b,d.d["s-sn"]=d.p||"",(y=i&&i.s&&i.s[r])&&y.l===d.l&&i.d&&o(i.d)),d.d}function o(n,i,f,r){t.z=!0;const s=e.Q(n);for(f=s.length-1;f>=0;f--)(r=s[f])["s-hn"]!==m&&r["s-ol"]&&(e.Z(r),e.G(l(r),r,c(r)),e.Z(r["s-ol"]),r["s-ol"]=null,v=!0),i&&o(r,i);t.z=!1}function i(t,o,i,f,r,l,s,u){const a=t["s-cr"]||t.$defaultHolder;for((s=a&&e.J(a)||t).shadowRoot&&(s=s.shadowRoot);r<=l;++r)f[r]&&(u=O(f[r].r)?e.H(f[r].r):n(null,i,r,t))&&(f[r].d=u,e.G(s,u,c(o)))}function f(t,n,i,f){for(;n<=i;++n)O(t[n])&&(f=t[n].d,d=!0,f["s-ol"]?e.Z(f["s-ol"]):o(f,!0),e.Z(f))}function r(t,e){return t.l===e.l&&t.a===e.a&&("slot"!==t.l||t.p===e.p)}function c(t){return t&&t["s-ol"]?t["s-ol"]:t}function l(t){return e.J(t["s-ol"]?t["s-ol"]:t)}const s=[];let u,a,p,d,v,m,b;return function u(y,w,$,g,M,k,C,W,j,x,E){if(p=$,m=e.K(y.d),b=y.d["s-cr"],a="scoped"===g||"shadow"===g&&!e.V?"data-"+e.K(y.d):null,v=d=!1,p||a&&e.B(y.d,a+"-host",""),function s(u,a,p){const d=a.d=u.d,v=u.s,m=a.s;D=a.d&&O(e.X(a.d))&&void 0!==a.d.ownerSVGElement,D="svg"===a.l||"foreignObject"!==a.l&&D,O(a.r)?(p=d["s-cr"]||d.$defaultHolder)?e.Y(e.J(p),a.r):u.r!==a.r&&e.Y(d,a.r):("slot"!==a.l&&h(t,u,a,D),O(v)&&O(m)?function b(t,u,a,p,d,v,m,h){let y=0,w=0,$=u.length-1,g=u[0],M=u[$],k=p.length-1,C=p[0],W=p[k];for(;y<=$&&w<=k;)if(null==g)g=u[++y];else if(null==M)M=u[--$];else if(null==C)C=p[++w];else if(null==W)W=p[--k];else if(r(g,C))s(g,C),g=u[++y],C=p[++w];else if(r(M,W))s(M,W),M=u[--$],W=p[--k];else if(r(g,W))"slot"!==g.l&&"slot"!==W.l||o(e.J(g.d)),s(g,W),e.G(t,g.d,e._(M.d)),g=u[++y],W=p[--k];else if(r(M,C))"slot"!==g.l&&"slot"!==W.l||o(e.J(M.d)),s(M,C),e.G(t,M.d,g.d),M=u[--$],C=p[++w];else{for(d=null,v=y;v<=$;++v)if(u[v]&&O(u[v].a)&&u[v].a===C.a){d=v;break}O(d)?((h=u[d]).l!==C.l?m=n(u&&u[w],a,d,t):(s(h,C),u[d]=void 0,m=h.d),C=p[++w]):(m=n(u&&u[w],a,w,t),C=p[++w]),m&&e.G(l(g.d),m,c(g.d))}y>$?i(t,null==p[k+1]?null:p[k+1].d,a,p,w,k):w>k&&f(u,y,$)}(d,v,a,m):O(m)?(O(u.r)&&e.Y(d,""),i(d,null,a,m,0,m.length-1)):O(v)&&f(v,0,v.length-1)),D&&"svg"===a.l&&(D=!1)}(y,w),v){for(function t(n,o,i,f,r,c,l,u,a,p){for(r=0,c=(o=e.Q(n)).length;r<c;r++){if((i=o[r])["s-sr"]&&(f=i["s-cr"]))for(u=e.Q(e.J(f)),a=i["s-sn"],l=u.length-1;l>=0;l--)(f=u[l])["s-cn"]||f["s-nr"]||f["s-hn"]===i["s-hn"]||((3===(p=e.tt(f))||8===p)&&""===a||1===p&&null===e.et(f,"slot")&&""===a||1===p&&e.et(f,"slot")===a)&&(s.some(t=>t.nt===f)||(d=!0,f["s-sn"]=a,s.push({ot:i,nt:f})));1===e.tt(i)&&t(i)}}(w.d),k=0;k<s.length;k++)(C=s[k]).nt["s-ol"]||((W=e.H(""))["s-nr"]=C.nt,e.G(e.J(C.nt),C.nt["s-ol"]=W,C.nt));for(t.z=!0,k=0;k<s.length;k++){for(C=s[k],x=e.J(C.ot),E=e._(C.ot),W=C.nt["s-ol"];W=e.it(W);)if((j=W["s-nr"])&&j&&j["s-sn"]===C.nt["s-sn"]&&x===e.J(j)&&(j=e._(j))&&j&&!j["s-nr"]){E=j;break}(!E&&x!==e.J(C.nt)||e._(C.nt)!==E)&&C.nt!==E&&(e.Z(C.nt),e.G(x,C.nt,E))}t.z=!1}return d&&function t(n,o,i,f,r,c,l,s){for(f=0,r=(i=e.Q(n)).length;f<r;f++)if(o=i[f],1===e.tt(o)){if(o["s-sr"])for(l=o["s-sn"],o.hidden=!1,c=0;c<r;c++)if(i[c]["s-hn"]!==o["s-hn"])if(s=e.tt(i[c]),""!==l){if(1===s&&l===e.et(i[c],"slot")){o.hidden=!0;break}}else if(1===s||3===s&&""!==e.ft(i[c]).trim()){o.hidden=!0;break}t(o)}}(w.d),s.length=0,w}}function w(t,e){t&&(t.u&&t.u.ref&&t.u.ref(e?null:t.d),t.s&&t.s.forEach(t=>{w(t,e)}))}function $(t,e,n,o,i){const f=t.tt(e);let r,c,l,s;if(i&&1===f){(c=t.et(e,W))&&(l=c.split("."))[0]===o&&((s={}).l=t.K(s.d=e),n.s||(n.s=[]),n.s[l[1]]=s,n=s,i=""!==l[2]);for(let f=0;f<e.childNodes.length;f++)$(t,e.childNodes[f],n,o,i)}else 3===f&&(r=e.previousSibling)&&8===t.tt(r)&&"s"===(l=t.ft(r).split("."))[0]&&l[1]===o&&((s={r:t.ft(e)}).d=e,n.s||(n.s=[]),n.s[l[2]]=s)}function g(t,e,n,o,i){return n["s-cr"]||t.et(n,C)||function f(t,e){return t&&1===e.encapsulation}(t.V,e)||(n["s-cr"]=t.H(""),n["s-cr"]["s-cn"]=!0,t.G(n,n["s-cr"],t.Q(n)[0])),t.V||1!==e.encapsulation||(n.shadowRoot=n),o={rt:n["s-id"],S:{}},e.T&&Object.keys(e.T).forEach(f=>{(i=e.T[f].ct)&&(o.S[i]=t.et(n,i))}),o}function M(t,e,n,o){n.connectedCallback=function(){(function n(t,e,o){t.y.delete(o),t.lt.has(o)||(t.lt.set(o,!0),o["s-id"]||(o["s-id"]=t.st()),function i(t,e,n){for(n=e;n=t.A.X(n);)if(t.ut(n)){t.at.has(e)||(t.f.set(e,n),n.$activeLoading&&(n["s-ld"]=n.$activeLoading),(n["s-ld"]=n["s-ld"]||[]).push(e));break}}(t,o),t.queue.tick(()=>t.pt(e,o,g(t.A,e,o))))})(t,e,this)},n.attributeChangedCallback=function(t,n,o){(function i(t,e,n,o,r,c,l){if(t&&o!==r)for(c in t)if((l=t[c]).ct&&A(l.ct)===A(n)){e[c]=f(l.dt,r);break}})(e.T,this,t,n,o)},n.disconnectedCallback=function(){(function e(t,n,o){!t.z&&function i(t,e){for(;e;){if(!t.J(e))return 9!==t.tt(e);e=t.J(e)}}(t.A,n)&&(t.y.set(n,!0),r(t,n),w(t.N.get(n),!0),t.A.q(n),t.vt.delete(n),[t.f,t.mt,t.j].forEach(t=>t.delete(n)))})(t,this)},n["s-init"]=function(){(function e(t,n,o,i,f){if(!t.at.has(n)&&t.w.get(n)&&!t.y.has(n)&&(!n["s-ld"]||!n["s-ld"].length)){delete n["s-ld"],t.at.set(n,!0);try{w(t.N.get(n)),(f=t.mt.get(n))&&(f.forEach(t=>t(n)),t.mt.delete(n))}catch(e){t.W(e,4,n)}n.classList.add(o),r(t,n)}})(t,this,o)},n.forceUpdate=function(){l(t,this)},function i(t,e,n){e&&Object.keys(e).forEach(o=>{const i=e[o],r=i.bt;1===r||2===r?v(n,o,function e(){return(t.M.get(this)||{})[o]},function e(n){p(t,this,o,f(i.dt,n))}):6===r&&d(n,o,S)})}(t,e.T,n)}function k(t,e,n,o){return function(){const i=arguments;return function f(t,e,n){let o=e[n];return o||(o=t.ht.querySelector(n)),o||(o=e[n]=t.P(n),t.U(t.ht,o)),o.componentOnReady()}(t,e,n).then(t=>t[o].apply(t,i))}}const C="data-ssrv",W="data-ssrc",j="$",x={},E=[],N={enter:13,escape:27,space:32,tab:9,left:37,up:38,right:39,down:40},O=t=>null!=t,A=t=>t.toLowerCase(),S=()=>{},T=[],R={getAttributes:t=>t.u,replaceAttributes:(t,e)=>t.u=e},L="wc-",q={allowfullscreen:1,async:1,autofocus:1,autoplay:1,checked:1,controls:1,disabled:1,enabled:1,formnovalidate:1,hidden:1,multiple:1,noresize:1,readonly:1,required:1,selected:1,spellcheck:1},B="http://www.w3.org/1999/xlink";let D=!1;(function F(t,e,n,o,f,r,s){function u(t,e){if(!n.customElements.get(t.yt)){b[t.yt]=!0,M(w,a[t.yt]=t,e.prototype,r);{const n=e.observedAttributes=[];for(const e in t.T)t.T[e].ct&&n.push(t.T[e].ct)}n.customElements.define(t.yt,e)}}const a={html:{}},p={},d=n[t]=n[t]||{},v=function m(t,e,n){t.wt||(t.wt=((t,e,n,o)=>t.addEventListener(e,n,o)),t.$t=((t,e,n,o)=>t.removeEventListener(e,n,o)));const o=new WeakMap,i={gt:n.documentElement,Mt:n.head,ht:n.body,kt:!1,tt:t=>t.nodeType,P:t=>n.createElement(t),I:(t,e)=>n.createElementNS(t,e),H:t=>n.createTextNode(t),Ct:t=>n.createComment(t),G:(t,e,n)=>t.insertBefore(e,n),Z:t=>t.remove(),U:(t,e)=>t.appendChild(e),Q:t=>t.childNodes,J:t=>t.parentNode,_:t=>t.nextSibling,it:t=>t.previousSibling,K:t=>A(t.nodeName),ft:t=>t.textContent,Y:(t,e)=>t.textContent=e,et:(t,e)=>t.getAttribute(e),B:(t,e,n)=>t.setAttribute(e,n),Wt:(t,e,n,o)=>t.setAttributeNS(e,n,o),R:(t,e)=>t.removeAttribute(e),jt:(t,o)=>{return"child"===o?t.firstElementChild:"parent"===o?i.X(t):"body"===o?i.ht:"document"===o?n:"window"===o?e:t},L:(e,n,f,r,c,l,s,u)=>{const a=n;let p=e,d=o.get(e);if(d&&d[a]&&d[a](),"string"==typeof l?p=i.jt(e,l):"object"==typeof l?p=l:(u=n.split(":")).length>1&&(p=i.jt(e,u[0]),n=u[1]),!p)return;let v=f;(u=n.split(".")).length>1&&(n=u[0],v=(t=>{t.keyCode===N[u[1]]&&f(t)})),s=i.kt?{capture:!!r,passive:!!c}:!!r,t.wt(p,n,v,s),d||o.set(e,d={}),d[a]=(()=>{p&&t.$t(p,n,v,s),d[a]=null})},q:(t,e)=>{const n=o.get(t);n&&(e?n[e]&&n[e]():Object.keys(n).forEach(t=>{n[t]&&n[t]()}))},xt:(t,n,o)=>t&&t.dispatchEvent(new e.CustomEvent(n,o)),X:(t,e)=>(e=i.J(t))&&11===i.tt(e)?e.host:e};return i}(d,n,o);e.isServer=e.isPrerender=!(e.isClient=!0),e.window=n,e.location=n.location,e.document=o,e.resourcesUrl=e.publicPath=f,d.h=c,d.Context=e;const b=n["s-defined"]=n.$definedCmps=n["s-defined"]||n.$definedCmps||{};let h=0;const w={A:v,Et:u,Nt:e.emit,C:t=>a[v.K(t)],Ot:t=>e[t],isClient:!0,ut:t=>!(!b[v.K(t)]&&!w.C(t)),st:()=>t+h++,W:(t,e,n)=>void 0,At:t=>(function e(t,n,o){return{create:k(t,n,o,"create"),componentOnReady:k(t,n,o,"componentOnReady")}})(v,p,t),queue:e.queue=function W(t,e){function n(t){for(let e=0;e<t.length;e++)try{t[e]()}catch(t){}t.length=0}function o(t,e){let n=0;for(;n<t.length&&f()<e;)try{t[n++]()}catch(t){}n===t.length?t.length=0:0!==n&&t.splice(0,n)}function i(){a++,n(l);const e=f()+7*Math.ceil(a*(1/22));o(s,e),o(u,e),s.length>0&&(u.push(...s),s.length=0),(p=l.length+s.length+u.length>0)?t.raf(i):a=0}const f=()=>e.performance.now(),r=Promise.resolve(),c=[],l=[],s=[],u=[];let a=0,p=!1;return t.raf||(t.raf=e.requestAnimationFrame.bind(e)),{tick(t){c.push(t),1===c.length&&r.then(()=>n(c))},read(e){l.push(e),p||(p=!0,t.raf(i))},write(e){s.push(e),p||(p=!0,t.raf(i))}}}(d,n),pt:function x(t,n){if(n.mode||(n.mode=v.et(n,"mode")||e.mode),g(w.A,t,n),t.k)l(w,n);else{const e="string"==typeof t.St?t.St:t.St[n.mode],o=f+e+(function o(t,e){return 2===e.encapsulation||1===e.encapsulation&&!t}(v.V,t)?".sc":"")+".js";import(o).then(e=>{try{(function o(t,e,n){const o=n.style;if(o){const i=n.is+(n.styleMode||j);if(!e[i]){const n=t.P("template");e[i]=n,n.innerHTML=`<style>${o}</style>`,t.U(t.Mt,n)}}})(v,t,t.k=e[(t=>A(t).split("-").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(""))(t.yt)])}catch(e){t.k=class{}}l(w,n)}).catch(t=>void 0)}},f:new WeakMap,Tt:new WeakMap,lt:new WeakMap,vt:new WeakMap,at:new WeakMap,g:new WeakMap,j:new WeakMap,w:new WeakMap,y:new WeakMap,m:new WeakMap,mt:new WeakMap,Rt:new WeakMap,N:new WeakMap,M:new WeakMap};w.render=y(w,v);const E=v.gt;E["s-ld"]=[],E["s-rn"]=!0,E["s-init"]=(()=>{w.at.set(E,d.loaded=w.b=!0),v.xt(n,"appload",{detail:{namespace:t}})}),function O(t,e,n){const o=n.querySelectorAll(`[${C}]`),i=o.length;let f,r,c,l,s,u;if(i>0)for(t.at.set(n,!0),l=0;l<i;l++)for(f=o[l],r=e.et(f,C),(c={}).l=e.K(c.d=f),t.N.set(f,c),s=0,u=f.childNodes.length;s<u;s++)$(e,f.childNodes[s],c,r,!0)}(w,v,E),w.O=((t,e,n,o,i)=>{(function f(t,e,n,o,i,r,c){let l=n.yt+(o||j),s=n[l];if(s||(s=n[l=n.yt+j]),s){let o=e.Mt;if(e.V)if(1===n.encapsulation)o=i.shadowRoot;else for(;i=e.J(i);)if(i.host&&i.host.shadowRoot){o=i.host.shadowRoot;break}const f=t.Tt.get(o)||{};if(!f[l]){c=s.content.cloneNode(!0);const n=o.querySelectorAll("[data-styles]");e.G(o,c,n.length&&n[n.length-1].nextSibling||o.firstChild),f[l]=!0,t.Tt.set(o,f)}}})(t,e,n,o,i)}),(d.components||[]).map(t=>(function e(t,n,o){const f={yt:t[0],T:{color:{ct:"color"}}};f.St=t[1];const r=t[3];if(r)for(n=0;n<r.length;n++)o=r[n],f.T[o[0]]={bt:o[1],Lt:!!o[2],ct:"string"==typeof o[3]?o[3]:o[3]?o[0]:0,dt:o[4]};return f.encapsulation=t[4],t[5]&&(f.qt=t[5].map(i)),f})(t)).forEach(t=>u(t,class extends HTMLElement{})),function S(t,e,n,o,i,f){if(e.componentOnReady=((e,n)=>{if(!e.nodeName.includes("-"))return n(null),!1;const o=t.C(e);if(o)if(t.at.has(e))n(e);else{const o=t.mt.get(e)||[];o.push(n),t.mt.set(e,o)}return!!o}),i){for(f=i.length-1;f>=0;f--)e.componentOnReady(i[f][0],i[f][1])&&i.splice(f,1);for(f=0;f<o.length;f++)if(!n[o[f]].componentOnReady)return;for(f=0;f<i.length;f++)i[f][1](null);i.length=0}}(w,d,n,n["s-apps"],n["s-cr"]),d.initialized=!0})(o,n,t,e,resourcesUrl,hydratedCssClass)})(window,document,Context,namespace);
})({},"StencilComponents","hydrated");