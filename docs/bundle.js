var app=function(){"use strict";function t(){}const e=t=>t;function n(t,e){for(const n in e)t[n]=e[n];return t}function r(t){return t()}function i(){return Object.create(null)}function o(t){t.forEach(r)}function l(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let c="undefined"!=typeof window?()=>window.performance.now():()=>Date.now(),a=t=>requestAnimationFrame(t);const d=new Set;let u,f=!1;function h(){d.forEach(t=>{t[0](c())||(d.delete(t),t[1]())}),(f=d.size>0)&&a(h)}function p(t,e){t.appendChild(e)}function m(t,e,n){t.insertBefore(e,n||null)}function g(t){t.parentNode.removeChild(t)}function v(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function $(t){return document.createElement(t)}function y(t){return document.createTextNode(t)}function b(){return y(" ")}function w(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function x(t,e){e=""+e,t.data!==e&&(t.data=e)}let S,k=0,A={};function _(t,e,n,r,i,o,l,s=0){const c=16.666/r;let a="{\n";for(let t=0;t<=1;t+=c){const r=e+(n-e)*o(t);a+=100*t+`%{${l(r,1-r)}}\n`}const d=a+`100% {${l(n,1-n)}}\n}`,f=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(d)}_${s}`;if(!A[f]){if(!u){const t=$("style");document.head.appendChild(t),u=t.sheet}A[f]=!0,u.insertRule(`@keyframes ${f} ${d}`,u.cssRules.length)}const h=t.style.animation||"";return t.style.animation=`${h?`${h}, `:""}${f} ${r}ms linear ${i}ms 1 both`,k+=1,f}function C(t,e){t.style.animation=(t.style.animation||"").split(", ").filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")).join(", "),e&&!--k&&a(()=>{if(k)return;let t=u.cssRules.length;for(;t--;)u.deleteRule(t);A={}})}function E(t){S=t}const P=[],I=[],T=[],D=[],O=Promise.resolve();let j,B=!1;function M(t){T.push(t)}function N(){const t=new Set;do{for(;P.length;){const t=P.shift();E(t),L(t.$$)}for(;I.length;)I.pop()();for(let e=0;e<T.length;e+=1){const n=T[e];t.has(n)||(n(),t.add(n))}T.length=0}while(P.length);for(;D.length;)D.pop()();B=!1}function L(t){t.fragment&&(t.update(t.dirty),o(t.before_update),t.fragment.p(t.dirty,t.ctx),t.dirty=null,t.after_update.forEach(M))}function R(t,e,n){t.dispatchEvent(function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(`${e?"intro":"outro"}${n}`))}const V=new Set;let F;function q(){F={r:0,c:[],p:F}}function z(){F.r||o(F.c),F=F.p}function H(t,e){t&&t.i&&(V.delete(t),t.i(e))}function W(t,e,n,r){if(t&&t.o){if(V.has(t))return;V.add(t),F.c.push(()=>{V.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function Y(n,r,i,s){let u=r(n,i),p=s?0:1,m=null,g=null,v=null;function $(){v&&C(n,v)}function y(t,e){const n=t.b-p;return e*=Math.abs(n),{a:p,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function b(r){const{delay:i=0,duration:l=300,easing:s=e,tick:b=t,css:w}=u,x={start:c()+i,b:r};r||(x.group=F,F.r+=1),m?g=x:(w&&($(),v=_(n,p,r,l,i,s,w)),r&&b(0,1),m=y(x,l),M(()=>R(n,r,"start")),function(t){let e;f||(f=!0,a(h)),new Promise(n=>{d.add(e=[t,n])})}(t=>{if(g&&t>g.start&&(m=y(g,l),g=null,R(n,m.b,"start"),w&&($(),v=_(n,p,m.b,m.duration,0,s,u.css))),m)if(t>=m.end)b(p=m.b,1-p),R(n,m.b,"end"),g||(m.b?$():--m.group.r||o(m.group.c)),m=null;else if(t>=m.start){const e=t-m.start;p=m.a+m.d*s(e/m.duration),b(p,1-p)}return!(!m&&!g)}))}return{run(t){l(u)?(j||(j=Promise.resolve()).then(()=>{j=null}),j).then(()=>{u=u(),b(t)}):b(t)},end(){$(),m=g=null}}}function Z(t,e){const n={},r={},i={$$scope:1};let o=t.length;for(;o--;){const l=t[o],s=e[o];if(s){for(const t in l)t in s||(r[t]=1);for(const t in s)i[t]||(n[t]=s[t],i[t]=1);t[o]=s}else for(const t in l)i[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function G(t,e,n){const{fragment:i,on_mount:s,on_destroy:c,after_update:a}=t.$$;i.m(e,n),M(()=>{const e=s.map(r).filter(l);c?c.push(...e):o(e),t.$$.on_mount=[]}),a.forEach(M)}function J(t,e){t.$$.fragment&&(o(t.$$.on_destroy),t.$$.fragment.d(e),t.$$.on_destroy=t.$$.fragment=null,t.$$.ctx={})}function U(t,e){t.$$.dirty||(P.push(t),B||(B=!0,O.then(N)),t.$$.dirty=i()),t.$$.dirty[e]=!0}function X(e,n,r,l,s,c){const a=S;E(e);const d=n.props||{},u=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:s,bound:i(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(a?a.$$.context:[]),callbacks:i(),dirty:null};let f=!1;var h;u.ctx=r?r(e,d,(t,n)=>{u.ctx&&s(u.ctx[t],u.ctx[t]=n)&&(u.bound[t]&&u.bound[t](n),f&&U(e,t))}):d,u.update(),f=!0,o(u.before_update),u.fragment=l(u.ctx),n.target&&(n.hydrate?u.fragment.l((h=n.target,Array.from(h.childNodes))):u.fragment.c(),n.intro&&H(e.$$.fragment),G(e,n.target,n.anchor),N()),E(a)}class K{$destroy(){J(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}function Q(e){var n,r,i,o,l;return{c(){n=$("div"),r=b(),(i=$("div")).innerHTML='<h1 class="font-sans font-bold bg-white text-10vw text-center w-full">Mike Boss</h1> <div class="h-4 bg-white w-full" style="background-image: linear-gradient(to top, transparent, white)"></div>',o=b(),l=$("div"),w(n,"class","h-1/2"),w(i,"class","sticky top-0 h-1/4 z-10"),w(l,"class","h-1/4")},m(t,e){m(t,n,e),m(t,r,e),m(t,i,e),m(t,o,e),m(t,l,e)},p:t,i:t,o:t,d(t){t&&(g(n),g(r),g(i),g(o),g(l))}}}class tt extends K{constructor(t){super(),X(this,t,null,Q,s,[])}}function et(t){const e=t-1;return e*e*e+1}function nt(t,{delay:e=0,duration:n=400,easing:r=et,x:i=0,y:o=0,opacity:l=0}){const s=getComputedStyle(t),c=+s.opacity,a="none"===s.transform?"":s.transform,d=c*(1-l);return{delay:e,duration:n,easing:r,css:(t,e)=>`\n\t\t\ttransform: ${a} translate(${(1-t)*i}px, ${(1-t)*o}px);\n\t\t\topacity: ${c-d*e}`}}function rt(t,e,n){const r=Object.create(t);return r.child=e[n],r}function it(t){var e;return{c(){w(e=$("div"),"class","absolute bottom-0 right-0 triangle svelte-10vwop8")},m(t,n){m(t,e,n)},d(t){t&&g(e)}}}function ot(t){for(var e,n,r=t.children,i=[],o=0;o<r.length;o+=1)i[o]=lt(rt(t,r,o));const l=t=>W(i[t],1,1,()=>{i[t]=null});return{c(){e=$("div");for(var t=0;t<i.length;t+=1)i[t].c();w(e,"class","flex flex-col items-start")},m(t,r){m(t,e,r);for(var o=0;o<i.length;o+=1)i[o].m(e,null);n=!0},p(t,n){if(t.children){r=n.children;for(var o=0;o<r.length;o+=1){const l=rt(n,r,o);i[o]?(i[o].p(t,l),H(i[o],1)):(i[o]=lt(l),i[o].c(),H(i[o],1),i[o].m(e,null))}for(q(),o=r.length;o<i.length;o+=1)l(o);z()}},i(t){if(!n){for(var e=0;e<r.length;e+=1)H(i[e]);n=!0}},o(t){i=i.filter(Boolean);for(let t=0;t<i.length;t+=1)W(i[t]);n=!1},d(t){t&&g(e),v(i,t)}}}function lt(t){var e,r=[t.child];let i={};for(var o=0;o<r.length;o+=1)i=n(i,r[o]);var l=new at({props:i});return{c(){l.$$.fragment.c()},m(t,n){G(l,t,n),e=!0},p(t,e){var n=t.children?Z(r,[e.child]):{};l.$set(n)},i(t){e||(H(l.$$.fragment,t),e=!0)},o(t){W(l.$$.fragment,t),e=!1},d(t){J(l,t)}}}function st(t){var e,n,r,i,o,l,s,c,a,d,u,f,h,v=t.children.length>0&&it(),S=t.children.length>0&&t.childrenVisible&&ot(t);return{c(){var d,f,p,m;e=$("div"),n=$("div"),r=$("div"),i=$("h4"),o=y(t.title),l=b(),s=$("p"),c=y(t.description),a=b(),v&&v.c(),u=b(),S&&S.c(),w(i,"class","font-sans text-xl text-start text-gray-900 leading-tight"),w(s,"class","font-sans text-base text-start text-gray-600 leading-normal"),w(r,"class","ml-6 pt-1"),w(n,"class","relative flex-none max-w-sm m-4 p-6 bg-white rounded-lg shadow hover:shadow-md"),w(e,"class","animate:flip flex flex-row items-start"),d=n,f="click",p=t.click_handler,d.addEventListener(f,p,m),h=(()=>d.removeEventListener(f,p,m))},m(t,d){m(t,e,d),p(e,n),p(n,r),p(r,i),p(i,o),p(r,l),p(r,s),p(s,c),p(n,a),v&&v.m(n,null),p(e,u),S&&S.m(e,null),f=!0},p(t,r){f&&!t.title||x(o,r.title),f&&!t.description||x(c,r.description),r.children.length>0?v||((v=it()).c(),v.m(n,null)):v&&(v.d(1),v=null),r.children.length>0&&r.childrenVisible?S?(S.p(t,r),H(S,1)):((S=ot(r)).c(),H(S,1),S.m(e,null)):S&&(q(),W(S,1,1,()=>{S=null}),z())},i(t){f||(M(()=>{d||(d=Y(n,nt,{x:-25,duration:1e3},!0)),d.run(1)}),H(S),f=!0)},o(t){d||(d=Y(n,nt,{x:-25,duration:1e3},!1)),d.run(0),W(S),f=!1},d(t){t&&g(e),v&&v.d(),t&&d&&d.end(),S&&S.d(),h()}}}function ct(t,e,n){let{title:r,description:i,children:o}=e,l=!1;return t.$set=(t=>{"title"in t&&n("title",r=t.title),"description"in t&&n("description",i=t.description),"children"in t&&n("children",o=t.children)}),{title:r,description:i,children:o,childrenVisible:l,click_handler:function(t){const e=l=!l;return n("childrenVisible",l),e}}}class at extends K{constructor(t){super(),X(this,t,ct,st,s,["title","description","children"])}}function dt(t,e,n){const r=Object.create(t);return r.event=e[n],r}function ut(t,e,n){const r=Object.create(t);return r.year=e[n],r}function ft(t){var e,r=[t.event];let i={};for(var o=0;o<r.length;o+=1)i=n(i,r[o]);var l=new at({props:i});return{c(){l.$$.fragment.c()},m(t,n){G(l,t,n),e=!0},p(t,e){var n=t.events?Z(r,[e.event]):{};l.$set(n)},i(t){e||(H(l.$$.fragment,t),e=!0)},o(t){W(l.$$.fragment,t),e=!1},d(t){J(l,t)}}}function ht(t){var e,n,r=t.event.year===t.year&&ft(t);return{c(){r&&r.c(),e=y("")},m(t,i){r&&r.m(t,i),m(t,e,i),n=!0},p(t,n){n.event.year===n.year?r?(r.p(t,n),H(r,1)):((r=ft(n)).c(),H(r,1),r.m(e.parentNode,e)):r&&(q(),W(r,1,1,()=>{r=null}),z())},i(t){n||(H(r),n=!0)},o(t){W(r),n=!1},d(t){r&&r.d(t),t&&g(e)}}}function pt(t){for(var e,n,r,i,o,l,s,c,a,d,u=t.year,f=t.events,h=[],x=0;x<f.length;x+=1)h[x]=ht(dt(t,f,x));const S=t=>W(h[t],1,1,()=>{h[t]=null});return{c(){e=$("div"),n=$("div"),r=$("div"),i=b(),o=$("span"),l=y(u),s=b(),c=$("div");for(var t=0;t<h.length;t+=1)h[t].c();a=b(),w(r,"class","absolute right-0.03vw bg-white border-black border-2 mt-1 h-5 w-4 rounded-full"),w(o,"class","absolute right-2.4vw font-semibold text-gray-600"),w(n,"class","relative"),w(c,"class","w-full overflow-auto"),w(e,"class","flex flex-row w-full my-20")},m(t,u){m(t,e,u),p(e,n),p(n,r),p(n,i),p(n,o),p(o,l),p(e,s),p(e,c);for(var f=0;f<h.length;f+=1)h[f].m(c,null);p(e,a),d=!0},p(t,e){if(t.events||t.years){f=e.events;for(var n=0;n<f.length;n+=1){const r=dt(e,f,n);h[n]?(h[n].p(t,r),H(h[n],1)):(h[n]=ht(r),h[n].c(),H(h[n],1),h[n].m(c,null))}for(q(),n=f.length;n<h.length;n+=1)S(n);z()}},i(t){if(!d){for(var e=0;e<f.length;e+=1)H(h[e]);d=!0}},o(t){h=h.filter(Boolean);for(let t=0;t<h.length;t+=1)W(h[t]);d=!1},d(t){t&&g(e),v(h,t)}}}function mt(t){for(var e,n,r=t.years,i=[],o=0;o<r.length;o+=1)i[o]=pt(ut(t,r,o));const l=t=>W(i[t],1,1,()=>{i[t]=null});return{c(){e=$("div");for(var t=0;t<i.length;t+=1)i[t].c();w(e,"class","flex flex-col")},m(t,r){m(t,e,r);for(var o=0;o<i.length;o+=1)i[o].m(e,null);n=!0},p(t,n){if(t.events||t.years){r=n.years;for(var o=0;o<r.length;o+=1){const l=ut(n,r,o);i[o]?(i[o].p(t,l),H(i[o],1)):(i[o]=pt(l),i[o].c(),H(i[o],1),i[o].m(e,null))}for(q(),o=r.length;o<i.length;o+=1)l(o);z()}},i(t){if(!n){for(var e=0;e<r.length;e+=1)H(i[e]);n=!0}},o(t){i=i.filter(Boolean);for(let t=0;t<i.length;t+=1)W(i[t]);n=!1},d(t){t&&g(e),v(i,t)}}}const gt=1998;function vt(t){return{years:Array.from(Array((new Date).getFullYear()-gt+1),(t,e)=>e+gt).reverse(),events:[{title:"Spring Semester 2019",description:"6th Semester",children:[{title:"Introduction to machine learning",description:"8 credit points",children:[]},{title:"Information security",description:"8 credit points",children:[]},{title:"Bachelor Thesis",description:"10 credit points",children:[]}],year:2019},{title:"Autumn Semester 2018",description:"5th Semester & teaching assistant",children:[{title:"Computer systems",description:"8 credit points",children:[]},{title:"Algorithms, probability and computing",description:"8 credit points",children:[]},{title:"Visual computing",description:"8 credit points",children:[]},{title:"Software Engineering Seminar",description:"2 credit points",children:[]},{title:"Diskrete Ereignissysteme",description:"5 credit points",children:[]},{title:"Japanese A1.1",description:"3 credit points",children:[]},{title:"Teaching Assistant",description:"Einführung in die Programmierung",children:[{title:"",description:'Supervision of a group of first Semester students in coordination with a second assistant for the subject "Introduction to Programming" during the autumn Semester. Tasks included the explaining of unclear material, exercises and the correction thereof including feedback.',children:[]}]}],year:2018},{title:"Cerebral Zürich Camp",description:"Civil service - 2 weeks",children:[{title:"",description:"One-to-one care for two disabled holiday guests in Cerebral Zürich Summer camp, one week each. The care included everything from morning to evening.",children:[]}],year:2018},{title:"Spring Semester 2018",description:"4th Semester & teaching assistant",children:[{title:"Computer Networks",description:"7 credit points",children:[]},{title:"Formal methods and functional programming",description:"7 credit points",children:[]},{title:"Databases and data modeling",description:"7 credit points",children:[]},{title:"Wahrscheinlichkeit und Statistik",description:"5 credit points",children:[]},{title:"Information retrieval",description:"4 credit points",children:[]},{title:"Introduction to game theory",description:"3 credit points",children:[]},{title:"Teaching Assistant",description:"Parallel Programming",children:[{title:"",description:"Supervision of a group of students (15 to 20) in their second Semester for the subject «Parallel Programming». Attendance of the didactic training course for teaching assistants.",children:[]}]}],year:2018},{title:"Autumn Semester 2017",description:"3th Semester",children:[{title:"Systems Programming and Computer Architecture",description:"7 credit points",children:[]},{title:"Numerical Methods for CSE",description:"7 credit points",children:[]},{title:"Theoretische Informatik",description:"7 credit points",children:[]},{title:"Analysis 2",description:"5 credit points",children:[]},{title:"Human Computer Interaction",description:"3 credit points",children:[]}],year:2017},{title:"Spring Semester 2017",description:"2th Semester",children:[{title:"Analysis 1",description:"7 credit points",children:[]},{title:"Algorithmen und Wahrscheinlichkeit",description:"7 credit points",children:[]},{title:"Parallel Programming",description:"7 credit points",children:[]},{title:"Design of Digital Circuits",description:"7 credit points",children:[]}],year:2017},{title:"Autumn Semester 2016",description:"1th Semester",children:[{title:"Diskrete Mathematik",description:"7 credit points",children:[]},{title:"Lineare Algebra",description:"7 credit points",children:[]},{title:"Einführung in die Programmierung",description:"7 credit points",children:[]},{title:"Algorithmen und Datenstrukturen",description:"7 credit points",children:[]}],year:2016},{title:"SIX GROUP Stamford",description:"Internship - 3 weeks",children:[{title:"",description:"Largely a learning experience exploring the activities of the IT department as well as its interactions with other departments as well as additional administrative tasks in the IT area.",children:[]}],year:2015},{title:"Beginning of Existence",description:'The simultation had not yet begun; only after the godly words were spoken "Deploy it already, it`s friday afternoon!" there was light!',children:[],year:1998}]}}class $t extends K{constructor(t){super(),X(this,t,vt,mt,s,[])}}function yt(t,e,n){const r=Object.create(t);return r.year=e[n],r}function bt(e){var n,r,i,o,l,s,c=e.year;return{c(){n=$("div"),r=$("div"),i=b(),o=$("div"),l=y(c),s=b(),w(r,"class","absolute top-0.3vh bg-white border-black border-2 h-5 w-4 rounded-full"),w(o,"class","absolute right-2vw font-semibold text-gray-600"),w(n,"class","relative h-full w-full mt-24")},m(t,e){m(t,n,e),p(n,r),p(n,i),p(n,o),p(o,l),p(n,s)},p:t,d(t){t&&g(n)}}}function wt(e){for(var n,r,i,o,l,s,c=e.years,a=[],d=0;d<c.length;d+=1)a[d]=bt(yt(e,c,d));return{c(){n=$("div"),r=$("div");for(var t=0;t<a.length;t+=1)a[t].c();i=b(),o=$("div"),l=b(),s=$("div"),w(r,"class","flex flex-col h-screen w-full"),w(n,"class","w-2"),w(o,"class","w-1 bg-black"),w(s,"class","w-2")},m(t,e){m(t,n,e),p(n,r);for(var c=0;c<a.length;c+=1)a[c].m(r,null);m(t,i,e),m(t,o,e),m(t,l,e),m(t,s,e)},p(t,e){if(t.years){c=e.years;for(var n=0;n<c.length;n+=1){const i=yt(e,c,n);a[n]?a[n].p(t,i):(a[n]=bt(i),a[n].c(),a[n].m(r,null))}for(;n<a.length;n+=1)a[n].d(1);a.length=c.length}},i:t,o:t,d(t){t&&g(n),v(a,t),t&&(g(i),g(o),g(l),g(s))}}}const xt=3;function St(t){return{years:Array.from(Array(xt),(t,e)=>e+(new Date).getFullYear()+1).reverse()}}class kt extends K{constructor(t){super(),X(this,t,St,wt,s,[])}}function At(e){var n,r,i,o,l,s,c,a,d,u=new kt({}),f=new tt({}),h=new $t({});return{c(){n=$("div"),r=$("div"),i=$("div"),o=b(),l=$("div"),u.$$.fragment.c(),s=b(),c=$("div"),f.$$.fragment.c(),a=b(),h.$$.fragment.c(),w(i,"class","flex-none w-1/4"),w(l,"class","flex-none flex flex-row w-4"),w(c,"class","flex-none w-3/4"),w(r,"class","flex flex-row h-full w-full")},m(t,e){m(t,n,e),p(n,r),p(r,i),p(r,o),p(r,l),G(u,l,null),p(r,s),p(r,c),G(f,c,null),p(c,a),G(h,c,null),d=!0},p:t,i(t){d||(H(u.$$.fragment,t),H(f.$$.fragment,t),H(h.$$.fragment,t),d=!0)},o(t){W(u.$$.fragment,t),W(f.$$.fragment,t),W(h.$$.fragment,t),d=!1},d(t){t&&g(n),J(u),J(f),J(h)}}}return new class extends K{constructor(t){super(),X(this,t,null,At,s,[])}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map