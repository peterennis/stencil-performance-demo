/*! Built with http://stenciljs.com */
(function(Context,namespace,hydratedCssClass,resourcesUrl,s){"use strict";
s=document.querySelector("script[data-namespace='stencil-components']");if(s){resourcesUrl=s.getAttribute('data-resources-url');}
(function(t,e,n,o){"use strict";function i(t){return{t:t[0],e:t[1],n:!!t[2],o:!!t[3],i:!!t[4]}}function f(t,e){if(O(e)&&"object"!=typeof e&&"function"!=typeof e){if(t===Boolean||3===t)return"false"!==e&&(""===e||!!e);if(t===Number||4===t)return parseFloat(e);if(t===String||2===t)return e.toString()}return e}function r(t,e,n,o){const i=t.f.get(e);i&&((o=i["s-ld"]||i.$activeLoading)&&((n=o.indexOf(e))>-1&&o.splice(n,1),o.length||(i["s-init"]&&i["s-init"](),i.$initLoad&&i.$initLoad())),t.f.delete(e))}function c(t,e,n){let o,i,f=null,r=!1,c=!1;for(var l=arguments.length;l-- >2;)T.push(arguments[l]);for(;T.length>0;)if((n=T.pop())&&void 0!==n.pop)for(l=n.length;l--;)T.push(n[l]);else"boolean"==typeof n&&(n=null),(c="function"!=typeof t)&&(null==n?n="":"number"==typeof n?n=String(n):"string"!=typeof n&&(c=!1)),c&&r?f[f.length-1].r+=n:null===f?f=[c?{r:n}:n]:f.push(c?{r:n}:n),r=c;if(null!=e){if(e.className&&(e.class=e.className),"object"==typeof e.class){for(l in e.class)e.class[l]&&T.push(l);e.class=T.join(" "),T.length=0}null!=e.c&&(o=e.c),null!=e.name&&(i=e.name)}return"function"==typeof t?t(Object.assign({},e,{children:f}),R):{l:t,s:f,r:void 0,u:e,a:o,p:i,d:void 0,v:!1}}function l(t,e){t.m.has(e)||(t.m.set(e,!0),t.b?t.queue.write(()=>s(t,e)):t.queue.tick(()=>s(t,e)))}function s(t,e,n,o,i,f){if(t.m.delete(e),!t.y.has(e)){if(o=t.w.get(e),n=!o){if((i=t.f.get(e))&&i.$rendered&&(i["s-rn"]=!0),i&&!i["s-rn"])return(i["s-rc"]=i["s-rc"]||[]).push(()=>{s(t,e)}),void(i.$onRender=i["s-rc"]);o=function r(t,e,n,o,i,f,c){try{(function l(t,e,n,o,i,f,r){for(r in t.g.set(o,n),t.M.has(n)||t.M.set(n,{}),(f=Object.assign({color:{type:String}},e.properties)).mode={type:String},f)a(t,f[r],n,o,r,i)})(t,i=t.C(e).k,e,o=new i,n)}catch(n){o={},t.W(n,7,e,!0)}return t.w.set(e,o),o}(t,e,t.j.get(e))}f&&f.then?f.then(()=>u(t,e,o,n)):u(t,e,o,n)}}function u(t,e,n,o){(function i(t,e,n,o,f){try{const i=e.k.host;let r;if(o.render||o.hostData||i||r){t.x=!0;const i=o.render&&o.render();let r;r=o.hostData&&o.hostData(),t.x=!1;const l=t.N.get(n)||{};l.d=n;const s=c(null,r,i);t.N.set(n,t.render(l,s,f,e.k.encapsulation))}t.O(t,t.S,e,o.mode,n),n["s-rn"]=!0,n.$onRender&&(n["s-rc"]=n.$onRender),n["s-rc"]&&(n["s-rc"].forEach(t=>t()),n["s-rc"]=null)}catch(e){t.x=!1,t.W(e,8,n,!0)}})(t,t.C(e),e,n,!o);try{o?e["s-init"]():w(t.N.get(e))}catch(n){t.W(n,6,e,!0)}}function a(t,e,n,o,i,r,c,l){if(e.type||e.state){const s=t.M.get(n);e.state||(!e.attr||void 0!==s[i]&&""!==s[i]||(c=r&&r.A)&&O(l=c[e.attr])&&(s[i]=f(e.type,l)),n.hasOwnProperty(i)&&(void 0===s[i]&&(s[i]=f(e.type,n[i])),delete n[i])),o.hasOwnProperty(i)&&void 0===s[i]&&(s[i]=o[i]),e.watchCallbacks&&(s[L+i]=e.watchCallbacks.slice()),v(o,i,function s(e){return(e=t.M.get(t.g.get(this)))&&e[i]},function u(n,o){(o=t.g.get(this))&&(e.state||e.mutable)&&p(t,o,i,n)})}else e.elementRef&&d(o,i,n)}function p(t,e,n,o,i,f,r){(i=t.M.get(e))||t.M.set(e,i={}),o!==i[n]&&(i[n]=o,t.w.get(e)&&(i[L+n],!t.x&&e["s-rn"]&&l(t,e)))}function d(t,e,n){Object.defineProperty(t,e,{configurable:!0,value:n})}function v(t,e,n,o){Object.defineProperty(t,e,{configurable:!0,get:n,set:o})}function m(t,e,n,o,i,f,r,c,l,s){if("class"!==n||f)if("style"===n){for(c in o=o||x,i=i||x,o)i[c]||(e.style[c]="");for(c in i)i[c]!==o[c]&&(e.style[c]=i[c])}else"o"!==n[0]||"n"!==n[1]||!/[A-Z]/.test(n[2])||n in e?"list"!==n&&"type"!==n&&!f&&(n in e||-1!==["object","function"].indexOf(typeof i)&&null!==i)?(s=t.C(e))&&s.T&&s.T[n]?b(e,n,i):"ref"!==n&&(b(e,n,null==i?"":i),null!=i&&!1!==i||e.removeAttribute(n)):null!=i?function u(t,e,n,o,i){const f=e!==(e=e.replace(/^xlink\:?/,"")),r=q[e]||o;r&&(!n||"false"===n)||i?f?t.removeAttributeNS(B,S(e)):t.removeAttribute(e):"function"!=typeof n&&(r&&(n=""),f?t.setAttributeNS(B,S(e),n):t.setAttribute(e,n))}(e,n,i):!f||null!=i&&!1!==i||t.S.R(e,n):(n=S(n)in e?S(n.substring(2)):S(n[2])+n.substring(3),i?i!==o&&t.S.L(e,n,i):t.S.q(e,n));else if(o!==i){const t=null==o||""===o?N:o.trim().split(/\s+/),n=null==i||""===i?N:i.trim().split(/\s+/);let f=null==e.className||""===e.className?N:e.className.trim().split(/\s+/);for(c=0,l=t.length;c<l;c++)-1===n.indexOf(t[c])&&(f=f.filter(e=>e!==t[c]));for(c=0,l=n.length;c<l;c++)-1===t.indexOf(n[c])&&(f=[...f,n[c]]);e.className=f.join(" ")}}function b(t,e,n){try{t[e]=n}catch(t){}}function h(t,e,n,o,i){const f=11===n.d.nodeType&&n.d.host?n.d.host:n.d,r=e&&e.u||x,c=n.u||x;for(i in r)c&&null!=c[i]||null==r[i]||m(t,f,i,r[i],void 0,o,n.v);for(i in c)i in r&&c[i]===("value"===i||"checked"===i?f[i]:r[i])||m(t,f,i,r[i],c[i],o,n.v)}function y(t,e){function n(i,f,r,c,l,s,p,d,y){if(d=f.s[r],u||(v=!0,"slot"===d.l&&(a&&e.B(c,a+"-slot",""),d.s?d.D=!0:d.F=!0)),O(d.r))d.d=e.H(d.r);else if(d.F)d.d=e.H("");else{if(s=d.d=D||"svg"===d.l?e.I("http://www.w3.org/2000/svg",d.l):e.P(d.D?"slot-fb":d.l),D="svg"===d.l||"foreignObject"!==d.l&&D,h(t,null,d,D),O(a)&&s["s-si"]!==a&&e.B(s,s["s-si"]=a,""),d.s)for(l=0;l<d.s.length;++l)(p=n(i,d,l,s))&&e.U(s,p);"svg"===d.l&&(D=!1)}return d.d["s-hn"]=m,(d.D||d.F)&&(d.d["s-sr"]=!0,d.d["s-cr"]=b,d.d["s-sn"]=d.p||"",(y=i&&i.s&&i.s[r])&&y.l===d.l&&i.d&&o(i.d)),d.d}function o(n,i,f,r){t.z=!0;const s=e.Q(n);for(f=s.length-1;f>=0;f--)(r=s[f])["s-hn"]!==m&&r["s-ol"]&&(e.Z(r),e.G(l(r),r,c(r)),e.Z(r["s-ol"]),r["s-ol"]=null,v=!0),i&&o(r,i);t.z=!1}function i(t,o,i,f,r,l,s,u){const a=t["s-cr"]||t.$defaultHolder;for((s=a&&e.J(a)||t).shadowRoot&&(s=s.shadowRoot);r<=l;++r)f[r]&&(u=O(f[r].r)?e.H(f[r].r):n(null,i,r,t))&&(f[r].d=u,e.G(s,u,c(o)))}function f(t,n,i,f){for(;n<=i;++n)O(t[n])&&(f=t[n].d,d=!0,f["s-ol"]?e.Z(f["s-ol"]):o(f,!0),e.Z(f))}function r(t,e){return t.l===e.l&&t.a===e.a&&("slot"!==t.l||t.p===e.p)}function c(t){return t&&t["s-ol"]?t["s-ol"]:t}function l(t){return e.J(t["s-ol"]?t["s-ol"]:t)}const s=[];let u,a,p,d,v,m,b;return function y(w,g,M,$,k,C,W,j,x,N,E){if(p=M,m=e.K(w.d),b=w.d["s-cr"],a="scoped"===$||"shadow"===$&&!e.V?"data-"+e.K(w.d):null,v=d=!1,u="shadow"===$&&e.V,p||(u?w.d=e.X(w.d,{mode:"open"}):a&&e.B(w.d,a+"-host","")),function s(u,a,p){const d=a.d=u.d,v=u.s,m=a.s;D=a.d&&O(e.Y(a.d))&&void 0!==a.d.ownerSVGElement,D="svg"===a.l||"foreignObject"!==a.l&&D,O(a.r)?(p=d["s-cr"]||d.$defaultHolder)?e._(e.J(p),a.r):u.r!==a.r&&e._(d,a.r):("slot"!==a.l&&h(t,u,a,D),O(v)&&O(m)?function b(t,u,a,p,d,v,m,h){let y=0,w=0,g=u.length-1,M=u[0],$=u[g],k=p.length-1,C=p[0],W=p[k];for(;y<=g&&w<=k;)if(null==M)M=u[++y];else if(null==$)$=u[--g];else if(null==C)C=p[++w];else if(null==W)W=p[--k];else if(r(M,C))s(M,C),M=u[++y],C=p[++w];else if(r($,W))s($,W),$=u[--g],W=p[--k];else if(r(M,W))"slot"!==M.l&&"slot"!==W.l||o(e.J(M.d)),s(M,W),e.G(t,M.d,e.tt($.d)),M=u[++y],W=p[--k];else if(r($,C))"slot"!==M.l&&"slot"!==W.l||o(e.J($.d)),s($,C),e.G(t,$.d,M.d),$=u[--g],C=p[++w];else{for(d=null,v=y;v<=g;++v)if(u[v]&&O(u[v].a)&&u[v].a===C.a){d=v;break}O(d)?((h=u[d]).l!==C.l?m=n(u&&u[w],a,d,t):(s(h,C),u[d]=void 0,m=h.d),C=p[++w]):(m=n(u&&u[w],a,w,t),C=p[++w]),m&&e.G(l(M.d),m,c(M.d))}y>g?i(t,null==p[k+1]?null:p[k+1].d,a,p,w,k):w>k&&f(u,y,g)}(d,v,a,m):O(m)?(O(u.r)&&e._(d,""),i(d,null,a,m,0,m.length-1)):O(v)&&f(v,0,v.length-1)),D&&"svg"===a.l&&(D=!1)}(w,g),v){for(function t(n,o,i,f,r,c,l,u,a,p){for(r=0,c=(o=e.Q(n)).length;r<c;r++){if((i=o[r])["s-sr"]&&(f=i["s-cr"]))for(u=e.Q(e.J(f)),a=i["s-sn"],l=u.length-1;l>=0;l--)(f=u[l])["s-cn"]||f["s-nr"]||f["s-hn"]===i["s-hn"]||((3===(p=e.et(f))||8===p)&&""===a||1===p&&null===e.nt(f,"slot")&&""===a||1===p&&e.nt(f,"slot")===a)&&(s.some(t=>t.ot===f)||(d=!0,f["s-sn"]=a,s.push({it:i,ot:f})));1===e.et(i)&&t(i)}}(g.d),C=0;C<s.length;C++)(W=s[C]).ot["s-ol"]||((j=e.H(""))["s-nr"]=W.ot,e.G(e.J(W.ot),W.ot["s-ol"]=j,W.ot));for(t.z=!0,C=0;C<s.length;C++){for(W=s[C],N=e.J(W.it),E=e.tt(W.it),j=W.ot["s-ol"];j=e.ft(j);)if((x=j["s-nr"])&&x&&x["s-sn"]===W.ot["s-sn"]&&N===e.J(x)&&(x=e.tt(x))&&x&&!x["s-nr"]){E=x;break}(!E&&N!==e.J(W.ot)||e.tt(W.ot)!==E)&&W.ot!==E&&(e.Z(W.ot),e.G(N,W.ot,E))}t.z=!1}return d&&function t(n,o,i,f,r,c,l,s){for(f=0,r=(i=e.Q(n)).length;f<r;f++)if(o=i[f],1===e.et(o)){if(o["s-sr"])for(l=o["s-sn"],o.hidden=!1,c=0;c<r;c++)if(i[c]["s-hn"]!==o["s-hn"])if(s=e.et(i[c]),""!==l){if(1===s&&l===e.nt(i[c],"slot")){o.hidden=!0;break}}else if(1===s||3===s&&""!==e.rt(i[c]).trim()){o.hidden=!0;break}t(o)}}(g.d),s.length=0,g}}function w(t,e){t&&(t.u&&t.u.ref&&t.u.ref(e?null:t.d),t.s&&t.s.forEach(t=>{w(t,e)}))}function g(t,e,n,o,i){const f=t.et(e);let r,c,l,s;if(i&&1===f){(c=t.nt(e,W))&&(l=c.split("."))[0]===o&&((s={}).l=t.K(s.d=e),n.s||(n.s=[]),n.s[l[1]]=s,n=s,i=""!==l[2]);for(let f=0;f<e.childNodes.length;f++)g(t,e.childNodes[f],n,o,i)}else 3===f&&(r=e.previousSibling)&&8===t.et(r)&&"s"===(l=t.rt(r).split("."))[0]&&l[1]===o&&((s={r:t.rt(e)}).d=e,n.s||(n.s=[]),n.s[l[2]]=s)}function M(t,e,n,o,i){return n["s-cr"]||t.nt(n,C)||function f(t,e){return t&&1===e.encapsulation}(t.V,e)||(n["s-cr"]=t.H(""),n["s-cr"]["s-cn"]=!0,t.G(n,n["s-cr"],t.Q(n)[0])),t.V||1!==e.encapsulation||(n.shadowRoot=n),o={ct:n["s-id"],A:{}},e.T&&Object.keys(e.T).forEach(f=>{(i=e.T[f].lt)&&(o.A[i]=t.nt(n,i))}),o}function $(t,e,n,o){n.connectedCallback=function(){(function n(t,e,o){t.y.delete(o),t.st.has(o)||(t.st.set(o,!0),o["s-id"]||(o["s-id"]=t.ut()),function i(t,e,n){for(n=e;n=t.S.Y(n);)if(t.at(n)){t.pt.has(e)||(t.f.set(e,n),n.$activeLoading&&(n["s-ld"]=n.$activeLoading),(n["s-ld"]=n["s-ld"]||[]).push(e));break}}(t,o),t.queue.tick(()=>t.dt(e,o,M(t.S,e,o))))})(t,e,this)},n.attributeChangedCallback=function(t,n,o){(function i(t,e,n,o,r,c,l){if(t&&o!==r)for(c in t)if((l=t[c]).lt&&S(l.lt)===S(n)){e[c]=f(l.vt,r);break}})(e.T,this,t,n,o)},n.disconnectedCallback=function(){(function e(t,n,o){!t.z&&function i(t,e){for(;e;){if(!t.J(e))return 9!==t.et(e);e=t.J(e)}}(t.S,n)&&(t.y.set(n,!0),r(t,n),w(t.N.get(n),!0),t.S.q(n),t.mt.delete(n),[t.f,t.bt,t.j].forEach(t=>t.delete(n)))})(t,this)},n["s-init"]=function(){(function e(t,n,o,i,f){if(!t.pt.has(n)&&t.w.get(n)&&!t.y.has(n)&&(!n["s-ld"]||!n["s-ld"].length)){delete n["s-ld"],t.pt.set(n,!0);try{w(t.N.get(n)),(f=t.bt.get(n))&&(f.forEach(t=>t(n)),t.bt.delete(n))}catch(e){t.W(e,4,n)}n.classList.add(o),r(t,n)}})(t,this,o)},n.forceUpdate=function(){l(t,this)},function i(t,e,n){e&&Object.keys(e).forEach(o=>{const i=e[o],r=i.ht;1===r||2===r?v(n,o,function e(){return(t.M.get(this)||{})[o]},function e(n){p(t,this,o,f(i.vt,n))}):6===r&&d(n,o,A)})}(t,e.T,n)}function k(t,e,n,o){return function(){const i=arguments;return function f(t,e,n){let o=e[n];return o||(o=t.yt.querySelector(n)),o||(o=e[n]=t.P(n),t.U(t.yt,o)),o.componentOnReady()}(t,e,n).then(t=>t[o].apply(t,i))}}const C="data-ssrv",W="data-ssrc",j="$",x={},N=[],E={enter:13,escape:27,space:32,tab:9,left:37,up:38,right:39,down:40},O=t=>null!=t,S=t=>t.toLowerCase(),A=()=>{},T=[],R={getAttributes:t=>t.u,replaceAttributes:(t,e)=>t.u=e},L="wc-",q={allowfullscreen:1,async:1,autofocus:1,autoplay:1,checked:1,controls:1,disabled:1,enabled:1,formnovalidate:1,hidden:1,multiple:1,noresize:1,readonly:1,required:1,selected:1,spellcheck:1},B="http://www.w3.org/1999/xlink";let D=!1;(function F(t,e,n,o,f,r,s){function u(t,e){if(!n.customElements.get(t.wt)){b[t.wt]=!0,$(w,a[t.wt]=t,e.prototype,r);{const n=e.observedAttributes=[];for(const e in t.T)t.T[e].lt&&n.push(t.T[e].lt)}n.customElements.define(t.wt,e)}}const a={html:{}},p={},d=n[t]=n[t]||{},v=function m(t,e,n){t.gt||(t.gt=((t,e,n,o)=>t.addEventListener(e,n,o)),t.Mt=((t,e,n,o)=>t.removeEventListener(e,n,o)));const o=new WeakMap,i={$t:n.documentElement,kt:n.head,yt:n.body,Ct:!1,et:t=>t.nodeType,P:t=>n.createElement(t),I:(t,e)=>n.createElementNS(t,e),H:t=>n.createTextNode(t),Wt:t=>n.createComment(t),G:(t,e,n)=>t.insertBefore(e,n),Z:t=>t.remove(),U:(t,e)=>t.appendChild(e),Q:t=>t.childNodes,J:t=>t.parentNode,tt:t=>t.nextSibling,ft:t=>t.previousSibling,K:t=>S(t.nodeName),rt:t=>t.textContent,_:(t,e)=>t.textContent=e,nt:(t,e)=>t.getAttribute(e),B:(t,e,n)=>t.setAttribute(e,n),jt:(t,e,n,o)=>t.setAttributeNS(e,n,o),R:(t,e)=>t.removeAttribute(e),xt:(t,o)=>{return"child"===o?t.firstElementChild:"parent"===o?i.Y(t):"body"===o?i.yt:"document"===o?n:"window"===o?e:t},L:(e,n,f,r,c,l,s,u)=>{const a=n;let p=e,d=o.get(e);if(d&&d[a]&&d[a](),"string"==typeof l?p=i.xt(e,l):"object"==typeof l?p=l:(u=n.split(":")).length>1&&(p=i.xt(e,u[0]),n=u[1]),!p)return;let v=f;(u=n.split(".")).length>1&&(n=u[0],v=(t=>{t.keyCode===E[u[1]]&&f(t)})),s=i.Ct?{capture:!!r,passive:!!c}:!!r,t.gt(p,n,v,s),d||o.set(e,d={}),d[a]=(()=>{p&&t.Mt(p,n,v,s),d[a]=null})},q:(t,e)=>{const n=o.get(t);n&&(e?n[e]&&n[e]():Object.keys(n).forEach(t=>{n[t]&&n[t]()}))},X:(t,e)=>t.attachShadow(e)};return i.V=!!i.$t.attachShadow,i.Nt=((t,n,o)=>t&&t.dispatchEvent(new e.CustomEvent(n,o))),i.Y=((t,e)=>(e=i.J(t))&&11===i.et(e)?e.host:e),i}(d,n,o);e.isServer=e.isPrerender=!(e.isClient=!0),e.window=n,e.location=n.location,e.document=o,e.resourcesUrl=e.publicPath=f,d.h=c,d.Context=e;const b=n["s-defined"]=n.$definedCmps=n["s-defined"]||n.$definedCmps||{};let h=0;const w={S:v,Et:u,Ot:e.emit,C:t=>a[v.K(t)],St:t=>e[t],isClient:!0,at:t=>!(!b[v.K(t)]&&!w.C(t)),ut:()=>t+h++,W:(t,e,n)=>void 0,At:t=>(function e(t,n,o){return{create:k(t,n,o,"create"),componentOnReady:k(t,n,o,"componentOnReady")}})(v,p,t),queue:e.queue=function W(t,e){function n(t){for(let e=0;e<t.length;e++)try{t[e]()}catch(t){}t.length=0}function o(t,e){let n=0;for(;n<t.length&&f()<e;)try{t[n++]()}catch(t){}n===t.length?t.length=0:0!==n&&t.splice(0,n)}function i(){a++,n(l);const e=f()+7*Math.ceil(a*(1/22));o(s,e),o(u,e),s.length>0&&(u.push(...s),s.length=0),(p=l.length+s.length+u.length>0)?t.raf(i):a=0}const f=()=>e.performance.now(),r=Promise.resolve(),c=[],l=[],s=[],u=[];let a=0,p=!1;return t.raf||(t.raf=e.requestAnimationFrame.bind(e)),{tick(t){c.push(t),1===c.length&&r.then(()=>n(c))},read(e){l.push(e),p||(p=!0,t.raf(i))},write(e){s.push(e),p||(p=!0,t.raf(i))}}}(d,n),dt:function x(t,n){if(n.mode||(n.mode=v.nt(n,"mode")||e.mode),M(w.S,t,n),t.k)l(w,n);else{const e="string"==typeof t.Tt?t.Tt:t.Tt[n.mode],o=f+e+(function o(t,e){return 2===e.encapsulation||1===e.encapsulation&&!t}(v.V,t)?".sc":"")+".js";import(o).then(e=>{try{(function o(t,e,n){const o=n.style;if(o){const i=n.is+(n.styleMode||j);if(!e[i]){const n=t.P("template");e[i]=n,n.innerHTML=`<style>${o}</style>`,t.U(t.kt,n)}}})(v,t,t.k=e[(t=>S(t).split("-").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(""))(t.wt)])}catch(e){t.k=class{}}l(w,n)}).catch(t=>void 0)}},f:new WeakMap,Rt:new WeakMap,st:new WeakMap,mt:new WeakMap,pt:new WeakMap,g:new WeakMap,j:new WeakMap,w:new WeakMap,y:new WeakMap,m:new WeakMap,bt:new WeakMap,Lt:new WeakMap,N:new WeakMap,M:new WeakMap};w.render=y(w,v);const N=v.$t;N["s-ld"]=[],N["s-rn"]=!0,N["s-init"]=(()=>{w.pt.set(N,d.loaded=w.b=!0),v.Nt(n,"appload",{detail:{namespace:t}})}),function O(t,e,n){const o=n.querySelectorAll(`[${C}]`),i=o.length;let f,r,c,l,s,u;if(i>0)for(t.pt.set(n,!0),l=0;l<i;l++)for(f=o[l],r=e.nt(f,C),(c={}).l=e.K(c.d=f),t.N.set(f,c),s=0,u=f.childNodes.length;s<u;s++)g(e,f.childNodes[s],c,r,!0)}(w,v,N),w.O=((t,e,n,o,i)=>{(function f(t,e,n,o,i,r,c){let l=n.wt+(o||j),s=n[l];if(s||(s=n[l=n.wt+j]),s){let o=e.kt;if(e.V)if(1===n.encapsulation)o=i.shadowRoot;else for(;i=e.J(i);)if(i.host&&i.host.shadowRoot){o=i.host.shadowRoot;break}const f=t.Rt.get(o)||{};if(!f[l]){c=s.content.cloneNode(!0);const n=o.querySelectorAll("[data-styles]");e.G(o,c,n.length&&n[n.length-1].nextSibling||o.firstChild),f[l]=!0,t.Rt.set(o,f)}}})(t,e,n,o,i)}),(d.components||[]).map(t=>(function e(t,n,o){const f={wt:t[0],T:{color:{lt:"color"}}};f.Tt=t[1];const r=t[3];if(r)for(n=0;n<r.length;n++)o=r[n],f.T[o[0]]={ht:o[1],qt:!!o[2],lt:"string"==typeof o[3]?o[3]:o[3]?o[0]:0,vt:o[4]};return f.encapsulation=t[4],t[5]&&(f.Bt=t[5].map(i)),f})(t)).forEach(t=>u(t,class extends HTMLElement{})),function A(t,e,n,o,i,f){if(e.componentOnReady=((e,n)=>{if(!e.nodeName.includes("-"))return n(null),!1;const o=t.C(e);if(o)if(t.pt.has(e))n(e);else{const o=t.bt.get(e)||[];o.push(n),t.bt.set(e,o)}return!!o}),i){for(f=i.length-1;f>=0;f--)e.componentOnReady(i[f][0],i[f][1])&&i.splice(f,1);for(f=0;f<o.length;f++)if(!n[o[f]].componentOnReady)return;for(f=0;f<i.length;f++)i[f][1](null);i.length=0}}(w,d,n,n["s-apps"],n["s-cr"]),d.initialized=!0})(o,n,t,e,resourcesUrl,hydratedCssClass)})(window,document,Context,namespace);
})({},"StencilComponents","hydrated");