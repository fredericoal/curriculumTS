(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ga(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const vt={},_r=[],Se=()=>{},Bh=()=>!1,qi=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Wa=e=>e.startsWith("onUpdate:"),zt=Object.assign,Qa=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Sg=Object.prototype.hasOwnProperty,gt=(e,t)=>Sg.call(e,t),st=Array.isArray,yr=e=>zi(e)==="[object Map]",jh=e=>zi(e)==="[object Set]",rt=e=>typeof e=="function",Lt=e=>typeof e=="string",Dn=e=>typeof e=="symbol",Rt=e=>e!==null&&typeof e=="object",$h=e=>(Rt(e)||rt(e))&&rt(e.then)&&rt(e.catch),qh=Object.prototype.toString,zi=e=>qh.call(e),Rg=e=>zi(e).slice(8,-1),zh=e=>zi(e)==="[object Object]",Ya=e=>Lt(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,hs=Ga(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Hi=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Cg=/-\w/g,ve=Hi(e=>e.replace(Cg,t=>t.slice(1).toUpperCase())),Pg=/\B([A-Z])/g,er=Hi(e=>e.replace(Pg,"-$1").toLowerCase()),Ki=Hi(e=>e.charAt(0).toUpperCase()+e.slice(1)),Lo=Hi(e=>e?`on${Ki(e)}`:""),_n=(e,t)=>!Object.is(e,t),Fo=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Hh=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},Vg=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Hl;const Gi=()=>Hl||(Hl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Xa(e){if(st(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=Lt(r)?Mg(r):Xa(r);if(s)for(const i in s)t[i]=s[i]}return t}else if(Lt(e)||Rt(e))return e}const Dg=/;(?![^(]*\))/g,xg=/:([^]+)/,Ng=/\/\*[^]*?\*\//g;function Mg(e){const t={};return e.replace(Ng,"").split(Dg).forEach(n=>{if(n){const r=n.split(xg);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Wi(e){let t="";if(Lt(e))t=e;else if(st(e))for(let n=0;n<e.length;n++){const r=Wi(e[n]);r&&(t+=r+" ")}else if(Rt(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Og="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",kg=Ga(Og);function Kh(e){return!!e||e===""}const Gh=e=>!!(e&&e.__v_isRef===!0),Er=e=>Lt(e)?e:e==null?"":st(e)||Rt(e)&&(e.toString===qh||!rt(e.toString))?Gh(e)?Er(e.value):JSON.stringify(e,Wh,2):String(e),Wh=(e,t)=>Gh(t)?Wh(e,t.value):yr(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,s],i)=>(n[Uo(r,i)+" =>"]=s,n),{})}:jh(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Uo(n))}:Dn(t)?Uo(t):Rt(t)&&!st(t)&&!zh(t)?String(t):t,Uo=(e,t="")=>{var n;return Dn(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ue;class Lg{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=ue,!t&&ue&&(this.index=(ue.scopes||(ue.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=ue;try{return ue=this,t()}finally{ue=n}}}on(){++this._on===1&&(this.prevScope=ue,ue=this)}off(){this._on>0&&--this._on===0&&(ue=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Fg(){return ue}let Tt;const Bo=new WeakSet;class Qh{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ue&&ue.active&&ue.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Bo.has(this)&&(Bo.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Xh(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Kl(this),Jh(this);const t=Tt,n=Re;Tt=this,Re=!0;try{return this.fn()}finally{Zh(this),Tt=t,Re=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)tc(t);this.deps=this.depsTail=void 0,Kl(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Bo.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ua(this)&&this.run()}get dirty(){return ua(this)}}let Yh=0,fs,ds;function Xh(e,t=!1){if(e.flags|=8,t){e.next=ds,ds=e;return}e.next=fs,fs=e}function Ja(){Yh++}function Za(){if(--Yh>0)return;if(ds){let t=ds;for(ds=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;fs;){let t=fs;for(fs=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(r){e||(e=r)}t=n}}if(e)throw e}function Jh(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Zh(e){let t,n=e.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),tc(r),Ug(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}e.deps=t,e.depsTail=n}function ua(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(tf(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function tf(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===As)||(e.globalVersion=As,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!ua(e))))return;e.flags|=2;const t=e.dep,n=Tt,r=Re;Tt=e,Re=!0;try{Jh(e);const s=e.fn(e._value);(t.version===0||_n(s,e._value))&&(e.flags|=128,e._value=s,t.version++)}catch(s){throw t.version++,s}finally{Tt=n,Re=r,Zh(e),e.flags&=-3}}function tc(e,t=!1){const{dep:n,prevSub:r,nextSub:s}=e;if(r&&(r.nextSub=s,e.prevSub=void 0),s&&(s.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)tc(i,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Ug(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let Re=!0;const ef=[];function Je(){ef.push(Re),Re=!1}function Ze(){const e=ef.pop();Re=e===void 0?!0:e}function Kl(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=Tt;Tt=void 0;try{t()}finally{Tt=n}}}let As=0;class Bg{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ec{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!Tt||!Re||Tt===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Tt)n=this.activeLink=new Bg(Tt,this),Tt.deps?(n.prevDep=Tt.depsTail,Tt.depsTail.nextDep=n,Tt.depsTail=n):Tt.deps=Tt.depsTail=n,nf(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Tt.depsTail,n.nextDep=void 0,Tt.depsTail.nextDep=n,Tt.depsTail=n,Tt.deps===n&&(Tt.deps=r)}return n}trigger(t){this.version++,As++,this.notify(t)}notify(t){Ja();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Za()}}}function nf(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let r=t.deps;r;r=r.nextDep)nf(r)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const ha=new WeakMap,Gn=Symbol(""),fa=Symbol(""),bs=Symbol("");function te(e,t,n){if(Re&&Tt){let r=ha.get(e);r||ha.set(e,r=new Map);let s=r.get(n);s||(r.set(n,s=new ec),s.map=r,s.key=n),s.track()}}function Xe(e,t,n,r,s,i){const a=ha.get(e);if(!a){As++;return}const c=u=>{u&&u.trigger()};if(Ja(),t==="clear")a.forEach(c);else{const u=st(e),f=u&&Ya(n);if(u&&n==="length"){const d=Number(r);a.forEach((g,m)=>{(m==="length"||m===bs||!Dn(m)&&m>=d)&&c(g)})}else switch((n!==void 0||a.has(void 0))&&c(a.get(n)),f&&c(a.get(bs)),t){case"add":u?f&&c(a.get("length")):(c(a.get(Gn)),yr(e)&&c(a.get(fa)));break;case"delete":u||(c(a.get(Gn)),yr(e)&&c(a.get(fa)));break;case"set":yr(e)&&c(a.get(Gn));break}}Za()}function hr(e){const t=pt(e);return t===e?t:(te(t,"iterate",bs),Ce(e)?t:t.map(oe))}function nc(e){return te(e=pt(e),"iterate",bs),e}const jg={__proto__:null,[Symbol.iterator](){return jo(this,Symbol.iterator,oe)},concat(...e){return hr(this).concat(...e.map(t=>st(t)?hr(t):t))},entries(){return jo(this,"entries",e=>(e[1]=oe(e[1]),e))},every(e,t){return Qe(this,"every",e,t,void 0,arguments)},filter(e,t){return Qe(this,"filter",e,t,n=>n.map(oe),arguments)},find(e,t){return Qe(this,"find",e,t,oe,arguments)},findIndex(e,t){return Qe(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return Qe(this,"findLast",e,t,oe,arguments)},findLastIndex(e,t){return Qe(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return Qe(this,"forEach",e,t,void 0,arguments)},includes(...e){return $o(this,"includes",e)},indexOf(...e){return $o(this,"indexOf",e)},join(e){return hr(this).join(e)},lastIndexOf(...e){return $o(this,"lastIndexOf",e)},map(e,t){return Qe(this,"map",e,t,void 0,arguments)},pop(){return ss(this,"pop")},push(...e){return ss(this,"push",e)},reduce(e,...t){return Gl(this,"reduce",e,t)},reduceRight(e,...t){return Gl(this,"reduceRight",e,t)},shift(){return ss(this,"shift")},some(e,t){return Qe(this,"some",e,t,void 0,arguments)},splice(...e){return ss(this,"splice",e)},toReversed(){return hr(this).toReversed()},toSorted(e){return hr(this).toSorted(e)},toSpliced(...e){return hr(this).toSpliced(...e)},unshift(...e){return ss(this,"unshift",e)},values(){return jo(this,"values",oe)}};function jo(e,t,n){const r=nc(e),s=r[t]();return r!==e&&!Ce(e)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=n(i.value)),i}),s}const $g=Array.prototype;function Qe(e,t,n,r,s,i){const a=nc(e),c=a!==e&&!Ce(e),u=a[t];if(u!==$g[t]){const g=u.apply(e,i);return c?oe(g):g}let f=n;a!==e&&(c?f=function(g,m){return n.call(this,oe(g),m,e)}:n.length>2&&(f=function(g,m){return n.call(this,g,m,e)}));const d=u.call(a,f,r);return c&&s?s(d):d}function Gl(e,t,n,r){const s=nc(e);let i=n;return s!==e&&(Ce(e)?n.length>3&&(i=function(a,c,u){return n.call(this,a,c,u,e)}):i=function(a,c,u){return n.call(this,a,oe(c),u,e)}),s[t](i,...r)}function $o(e,t,n){const r=pt(e);te(r,"iterate",bs);const s=r[t](...n);return(s===-1||s===!1)&&oc(n[0])?(n[0]=pt(n[0]),r[t](...n)):s}function ss(e,t,n=[]){Je(),Ja();const r=pt(e)[t].apply(e,n);return Za(),Ze(),r}const qg=Ga("__proto__,__v_isRef,__isVue"),rf=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Dn));function zg(e){Dn(e)||(e=String(e));const t=pt(this);return te(t,"has",e),t.hasOwnProperty(e)}class sf{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){if(n==="__v_skip")return t.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?tm:lf:i?cf:af).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const a=st(t);if(!s){let u;if(a&&(u=jg[n]))return u;if(n==="hasOwnProperty")return zg}const c=Reflect.get(t,n,re(t)?t:r);if((Dn(n)?rf.has(n):qg(n))||(s||te(t,"get",n),i))return c;if(re(c)){const u=a&&Ya(n)?c:c.value;return s&&Rt(u)?pa(u):u}return Rt(c)?s?pa(c):sc(c):c}}class of extends sf{constructor(t=!1){super(!1,t)}set(t,n,r,s){let i=t[n];if(!this._isShallow){const u=Qn(i);if(!Ce(r)&&!Qn(r)&&(i=pt(i),r=pt(r)),!st(t)&&re(i)&&!re(r))return u||(i.value=r),!0}const a=st(t)&&Ya(n)?Number(n)<t.length:gt(t,n),c=Reflect.set(t,n,r,re(t)?t:s);return t===pt(s)&&(a?_n(r,i)&&Xe(t,"set",n,r):Xe(t,"add",n,r)),c}deleteProperty(t,n){const r=gt(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&r&&Xe(t,"delete",n,void 0),s}has(t,n){const r=Reflect.has(t,n);return(!Dn(n)||!rf.has(n))&&te(t,"has",n),r}ownKeys(t){return te(t,"iterate",st(t)?"length":Gn),Reflect.ownKeys(t)}}class Hg extends sf{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Kg=new of,Gg=new Hg,Wg=new of(!0);const da=e=>e,ni=e=>Reflect.getPrototypeOf(e);function Qg(e,t,n){return function(...r){const s=this.__v_raw,i=pt(s),a=yr(i),c=e==="entries"||e===Symbol.iterator&&a,u=e==="keys"&&a,f=s[e](...r),d=n?da:t?ga:oe;return!t&&te(i,"iterate",u?fa:Gn),{next(){const{value:g,done:m}=f.next();return m?{value:g,done:m}:{value:c?[d(g[0]),d(g[1])]:d(g),done:m}},[Symbol.iterator](){return this}}}}function ri(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Yg(e,t){const n={get(s){const i=this.__v_raw,a=pt(i),c=pt(s);e||(_n(s,c)&&te(a,"get",s),te(a,"get",c));const{has:u}=ni(a),f=t?da:e?ga:oe;if(u.call(a,s))return f(i.get(s));if(u.call(a,c))return f(i.get(c));i!==a&&i.get(s)},get size(){const s=this.__v_raw;return!e&&te(pt(s),"iterate",Gn),s.size},has(s){const i=this.__v_raw,a=pt(i),c=pt(s);return e||(_n(s,c)&&te(a,"has",s),te(a,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const a=this,c=a.__v_raw,u=pt(c),f=t?da:e?ga:oe;return!e&&te(u,"iterate",Gn),c.forEach((d,g)=>s.call(i,f(d),f(g),a))}};return zt(n,e?{add:ri("add"),set:ri("set"),delete:ri("delete"),clear:ri("clear")}:{add(s){!t&&!Ce(s)&&!Qn(s)&&(s=pt(s));const i=pt(this);return ni(i).has.call(i,s)||(i.add(s),Xe(i,"add",s,s)),this},set(s,i){!t&&!Ce(i)&&!Qn(i)&&(i=pt(i));const a=pt(this),{has:c,get:u}=ni(a);let f=c.call(a,s);f||(s=pt(s),f=c.call(a,s));const d=u.call(a,s);return a.set(s,i),f?_n(i,d)&&Xe(a,"set",s,i):Xe(a,"add",s,i),this},delete(s){const i=pt(this),{has:a,get:c}=ni(i);let u=a.call(i,s);u||(s=pt(s),u=a.call(i,s)),c&&c.call(i,s);const f=i.delete(s);return u&&Xe(i,"delete",s,void 0),f},clear(){const s=pt(this),i=s.size!==0,a=s.clear();return i&&Xe(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Qg(s,e,t)}),n}function rc(e,t){const n=Yg(e,t);return(r,s,i)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?r:Reflect.get(gt(n,s)&&s in r?n:r,s,i)}const Xg={get:rc(!1,!1)},Jg={get:rc(!1,!0)},Zg={get:rc(!0,!1)};const af=new WeakMap,cf=new WeakMap,lf=new WeakMap,tm=new WeakMap;function em(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function nm(e){return e.__v_skip||!Object.isExtensible(e)?0:em(Rg(e))}function sc(e){return Qn(e)?e:ic(e,!1,Kg,Xg,af)}function rm(e){return ic(e,!1,Wg,Jg,cf)}function pa(e){return ic(e,!0,Gg,Zg,lf)}function ic(e,t,n,r,s){if(!Rt(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=nm(e);if(i===0)return e;const a=s.get(e);if(a)return a;const c=new Proxy(e,i===2?r:n);return s.set(e,c),c}function ps(e){return Qn(e)?ps(e.__v_raw):!!(e&&e.__v_isReactive)}function Qn(e){return!!(e&&e.__v_isReadonly)}function Ce(e){return!!(e&&e.__v_isShallow)}function oc(e){return e?!!e.__v_raw:!1}function pt(e){const t=e&&e.__v_raw;return t?pt(t):e}function sm(e){return!gt(e,"__v_skip")&&Object.isExtensible(e)&&Hh(e,"__v_skip",!0),e}const oe=e=>Rt(e)?sc(e):e,ga=e=>Rt(e)?pa(e):e;function re(e){return e?e.__v_isRef===!0:!1}function qo(e){return im(e,!1)}function im(e,t){return re(e)?e:new om(e,t)}class om{constructor(t,n){this.dep=new ec,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:pt(t),this._value=n?t:oe(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,r=this.__v_isShallow||Ce(t)||Qn(t);t=r?t:pt(t),_n(t,n)&&(this._rawValue=t,this._value=r?t:oe(t),this.dep.trigger())}}function am(e){return re(e)?e.value:e}const cm={get:(e,t,n)=>t==="__v_raw"?e:am(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return re(s)&&!re(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function uf(e){return ps(e)?e:new Proxy(e,cm)}class lm{constructor(t,n,r){this.fn=t,this.setter=n,this._value=void 0,this.dep=new ec(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=As-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Tt!==this)return Xh(this,!0),!0}get value(){const t=this.dep.track();return tf(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function um(e,t,n=!1){let r,s;return rt(e)?r=e:(r=e.get,s=e.set),new lm(r,s,n)}const si={},wi=new WeakMap;let qn;function hm(e,t=!1,n=qn){if(n){let r=wi.get(n);r||wi.set(n,r=[]),r.push(e)}}function fm(e,t,n=vt){const{immediate:r,deep:s,once:i,scheduler:a,augmentJob:c,call:u}=n,f=G=>s?G:Ce(G)||s===!1||s===0?gn(G,1):gn(G);let d,g,m,b,x=!1,F=!1;if(re(e)?(g=()=>e.value,x=Ce(e)):ps(e)?(g=()=>f(e),x=!0):st(e)?(F=!0,x=e.some(G=>ps(G)||Ce(G)),g=()=>e.map(G=>{if(re(G))return G.value;if(ps(G))return f(G);if(rt(G))return u?u(G,2):G()})):rt(e)?t?g=u?()=>u(e,2):e:g=()=>{if(m){Je();try{m()}finally{Ze()}}const G=qn;qn=d;try{return u?u(e,3,[b]):e(b)}finally{qn=G}}:g=Se,t&&s){const G=g,ht=s===!0?1/0:s;g=()=>gn(G(),ht)}const B=Fg(),K=()=>{d.stop(),B&&B.active&&Qa(B.effects,d)};if(i&&t){const G=t;t=(...ht)=>{G(...ht),K()}}let z=F?new Array(e.length).fill(si):si;const X=G=>{if(!(!(d.flags&1)||!d.dirty&&!G))if(t){const ht=d.run();if(s||x||(F?ht.some((yt,w)=>_n(yt,z[w])):_n(ht,z))){m&&m();const yt=qn;qn=d;try{const w=[ht,z===si?void 0:F&&z[0]===si?[]:z,b];z=ht,u?u(t,3,w):t(...w)}finally{qn=yt}}}else d.run()};return c&&c(X),d=new Qh(g),d.scheduler=a?()=>a(X,!1):X,b=G=>hm(G,!1,d),m=d.onStop=()=>{const G=wi.get(d);if(G){if(u)u(G,4);else for(const ht of G)ht();wi.delete(d)}},t?r?X(!0):z=d.run():a?a(X.bind(null,!0),!0):d.run(),K.pause=d.pause.bind(d),K.resume=d.resume.bind(d),K.stop=K,K}function gn(e,t=1/0,n){if(t<=0||!Rt(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,re(e))gn(e.value,t,n);else if(st(e))for(let r=0;r<e.length;r++)gn(e[r],t,n);else if(jh(e)||yr(e))e.forEach(r=>{gn(r,t,n)});else if(zh(e)){for(const r in e)gn(e[r],t,n);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&gn(e[r],t,n)}return e}/**
* @vue/runtime-core v3.5.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Fs(e,t,n,r){try{return r?e(...r):e()}catch(s){Qi(s,t,n)}}function ze(e,t,n,r){if(rt(e)){const s=Fs(e,t,n,r);return s&&$h(s)&&s.catch(i=>{Qi(i,t,n)}),s}if(st(e)){const s=[];for(let i=0;i<e.length;i++)s.push(ze(e[i],t,n,r));return s}}function Qi(e,t,n,r=!0){const s=t?t.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:a}=t&&t.appContext.config||vt;if(t){let c=t.parent;const u=t.proxy,f=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const d=c.ec;if(d){for(let g=0;g<d.length;g++)if(d[g](e,u,f)===!1)return}c=c.parent}if(i){Je(),Fs(i,null,10,[e,u,f]),Ze();return}}dm(e,n,s,r,a)}function dm(e,t,n,r=!0,s=!1){if(s)throw e;console.error(e)}const ae=[];let Oe=-1;const Tr=[];let dn=null,fr=0;const hf=Promise.resolve();let Ii=null;function pm(e){const t=Ii||hf;return e?t.then(this?e.bind(this):e):t}function gm(e){let t=Oe+1,n=ae.length;for(;t<n;){const r=t+n>>>1,s=ae[r],i=Ss(s);i<e||i===e&&s.flags&2?t=r+1:n=r}return t}function ac(e){if(!(e.flags&1)){const t=Ss(e),n=ae[ae.length-1];!n||!(e.flags&2)&&t>=Ss(n)?ae.push(e):ae.splice(gm(t),0,e),e.flags|=1,ff()}}function ff(){Ii||(Ii=hf.then(pf))}function mm(e){st(e)?Tr.push(...e):dn&&e.id===-1?dn.splice(fr+1,0,e):e.flags&1||(Tr.push(e),e.flags|=1),ff()}function Wl(e,t,n=Oe+1){for(;n<ae.length;n++){const r=ae[n];if(r&&r.flags&2){if(e&&r.id!==e.uid)continue;ae.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function df(e){if(Tr.length){const t=[...new Set(Tr)].sort((n,r)=>Ss(n)-Ss(r));if(Tr.length=0,dn){dn.push(...t);return}for(dn=t,fr=0;fr<dn.length;fr++){const n=dn[fr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}dn=null,fr=0}}const Ss=e=>e.id==null?e.flags&2?-1:1/0:e.id;function pf(e){const t=Se;try{for(Oe=0;Oe<ae.length;Oe++){const n=ae[Oe];n&&!(n.flags&8)&&(n.flags&4&&(n.flags&=-2),Fs(n,n.i,n.i?15:14),n.flags&4||(n.flags&=-2))}}finally{for(;Oe<ae.length;Oe++){const n=ae[Oe];n&&(n.flags&=-2)}Oe=-1,ae.length=0,df(),Ii=null,(ae.length||Tr.length)&&pf()}}let be=null,gf=null;function Ai(e){const t=be;return be=e,gf=e&&e.type.__scopeId||null,t}function _m(e,t=be,n){if(!t||e._n)return e;const r=(...s)=>{r._d&&su(-1);const i=Ai(t);let a;try{a=e(...s)}finally{Ai(i),r._d&&su(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function jn(e,t,n,r){const s=e.dirs,i=t&&t.dirs;for(let a=0;a<s.length;a++){const c=s[a];i&&(c.oldValue=i[a].value);let u=c.dir[r];u&&(Je(),ze(u,n,8,[e.el,c,e,t]),Ze())}}const ym=Symbol("_vte"),Em=e=>e.__isTeleport,Tm=Symbol("_leaveCb");function cc(e,t){e.shapeFlag&6&&e.component?(e.transition=t,cc(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function vm(e,t){return rt(e)?(()=>zt({name:e.name},t,{setup:e}))():e}function mf(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}const bi=new WeakMap;function gs(e,t,n,r,s=!1){if(st(e)){e.forEach((x,F)=>gs(x,t&&(st(t)?t[F]:t),n,r,s));return}if(ms(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&gs(e,t,n,r.component.subTree);return}const i=r.shapeFlag&4?pc(r.component):r.el,a=s?null:i,{i:c,r:u}=e,f=t&&t.r,d=c.refs===vt?c.refs={}:c.refs,g=c.setupState,m=pt(g),b=g===vt?Bh:x=>gt(m,x);if(f!=null&&f!==u){if(Ql(t),Lt(f))d[f]=null,b(f)&&(g[f]=null);else if(re(f)){f.value=null;const x=t;x.k&&(d[x.k]=null)}}if(rt(u))Fs(u,c,12,[a,d]);else{const x=Lt(u),F=re(u);if(x||F){const B=()=>{if(e.f){const K=x?b(u)?g[u]:d[u]:u.value;if(s)st(K)&&Qa(K,i);else if(st(K))K.includes(i)||K.push(i);else if(x)d[u]=[i],b(u)&&(g[u]=d[u]);else{const z=[i];u.value=z,e.k&&(d[e.k]=z)}}else x?(d[u]=a,b(u)&&(g[u]=a)):F&&(u.value=a,e.k&&(d[e.k]=a))};if(a){const K=()=>{B(),bi.delete(e)};K.id=-1,bi.set(e,K),ge(K,n)}else Ql(e),B()}}}function Ql(e){const t=bi.get(e);t&&(t.flags|=8,bi.delete(e))}Gi().requestIdleCallback;Gi().cancelIdleCallback;const ms=e=>!!e.type.__asyncLoader,_f=e=>e.type.__isKeepAlive;function wm(e,t){yf(e,"a",t)}function Im(e,t){yf(e,"da",t)}function yf(e,t,n=ne){const r=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(Yi(t,r,n),n){let s=n.parent;for(;s&&s.parent;)_f(s.parent.vnode)&&Am(r,t,n,s),s=s.parent}}function Am(e,t,n,r){const s=Yi(t,e,r,!0);lc(()=>{Qa(r[t],s)},n)}function Yi(e,t,n=ne,r=!1){if(n){const s=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...a)=>{Je();const c=Us(n),u=ze(t,n,e,a);return c(),Ze(),u});return r?s.unshift(i):s.push(i),i}}const sn=e=>(t,n=ne)=>{(!Cs||e==="sp")&&Yi(e,(...r)=>t(...r),n)},bm=sn("bm"),Ef=sn("m"),Sm=sn("bu"),Rm=sn("u"),Cm=sn("bum"),lc=sn("um"),Pm=sn("sp"),Vm=sn("rtg"),Dm=sn("rtc");function xm(e,t=ne){Yi("ec",e,t)}const Tf="components";function ma(e,t){return Mm(Tf,e,!0,t)||e}const Nm=Symbol.for("v-ndc");function Mm(e,t,n=!0,r=!1){const s=be||ne;if(s){const i=s.type;if(e===Tf){const c=A_(i,!1);if(c&&(c===t||c===ve(t)||c===Ki(ve(t))))return i}const a=Yl(s[e]||i[e],t)||Yl(s.appContext[e],t);return!a&&r?i:a}}function Yl(e,t){return e&&(e[t]||e[ve(t)]||e[Ki(ve(t))])}const _a=e=>e?Uf(e)?pc(e):_a(e.parent):null,_s=zt(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>_a(e.parent),$root:e=>_a(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>uc(e),$forceUpdate:e=>e.f||(e.f=()=>{ac(e.update)}),$nextTick:e=>e.n||(e.n=pm.bind(e.proxy)),$watch:e=>n_.bind(e)}),zo=(e,t)=>e!==vt&&!e.__isScriptSetup&&gt(e,t),Om={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:a,type:c,appContext:u}=e;let f;if(t[0]!=="$"){const b=a[t];if(b!==void 0)switch(b){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return i[t]}else{if(zo(r,t))return a[t]=1,r[t];if(s!==vt&&gt(s,t))return a[t]=2,s[t];if((f=e.propsOptions[0])&&gt(f,t))return a[t]=3,i[t];if(n!==vt&&gt(n,t))return a[t]=4,n[t];ya&&(a[t]=0)}}const d=_s[t];let g,m;if(d)return t==="$attrs"&&te(e.attrs,"get",""),d(e);if((g=c.__cssModules)&&(g=g[t]))return g;if(n!==vt&&gt(n,t))return a[t]=4,n[t];if(m=u.config.globalProperties,gt(m,t))return m[t]},set({_:e},t,n){const{data:r,setupState:s,ctx:i}=e;return zo(s,t)?(s[t]=n,!0):r!==vt&&gt(r,t)?(r[t]=n,!0):gt(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:i,type:a}},c){let u,f;return!!(n[c]||e!==vt&&c[0]!=="$"&&gt(e,c)||zo(t,c)||(u=i[0])&&gt(u,c)||gt(r,c)||gt(_s,c)||gt(s.config.globalProperties,c)||(f=a.__cssModules)&&f[c])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:gt(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Xl(e){return st(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let ya=!0;function km(e){const t=uc(e),n=e.proxy,r=e.ctx;ya=!1,t.beforeCreate&&Jl(t.beforeCreate,e,"bc");const{data:s,computed:i,methods:a,watch:c,provide:u,inject:f,created:d,beforeMount:g,mounted:m,beforeUpdate:b,updated:x,activated:F,deactivated:B,beforeDestroy:K,beforeUnmount:z,destroyed:X,unmounted:G,render:ht,renderTracked:yt,renderTriggered:w,errorCaptured:_,serverPrefetch:T,expose:I,inheritAttrs:v,components:R,directives:E,filters:Ft}=t;if(f&&Lm(f,r,null),a)for(const wt in a){const dt=a[wt];rt(dt)&&(r[wt]=dt.bind(n))}if(s){const wt=s.call(n,n);Rt(wt)&&(e.data=sc(wt))}if(ya=!0,i)for(const wt in i){const dt=i[wt],Ee=rt(dt)?dt.bind(n,n):rt(dt.get)?dt.get.bind(n,n):Se,sr=!rt(dt)&&rt(dt.set)?dt.set.bind(n):Se,De=S_({get:Ee,set:sr});Object.defineProperty(r,wt,{enumerable:!0,configurable:!0,get:()=>De.value,set:de=>De.value=de})}if(c)for(const wt in c)vf(c[wt],r,n,wt);if(u){const wt=rt(u)?u.call(n):u;Reflect.ownKeys(wt).forEach(dt=>{qm(dt,wt[dt])})}d&&Jl(d,e,"c");function Ht(wt,dt){st(dt)?dt.forEach(Ee=>wt(Ee.bind(n))):dt&&wt(dt.bind(n))}if(Ht(bm,g),Ht(Ef,m),Ht(Sm,b),Ht(Rm,x),Ht(wm,F),Ht(Im,B),Ht(xm,_),Ht(Dm,yt),Ht(Vm,w),Ht(Cm,z),Ht(lc,G),Ht(Pm,T),st(I))if(I.length){const wt=e.exposed||(e.exposed={});I.forEach(dt=>{Object.defineProperty(wt,dt,{get:()=>n[dt],set:Ee=>n[dt]=Ee,enumerable:!0})})}else e.exposed||(e.exposed={});ht&&e.render===Se&&(e.render=ht),v!=null&&(e.inheritAttrs=v),R&&(e.components=R),E&&(e.directives=E),T&&mf(e)}function Lm(e,t,n=Se){st(e)&&(e=Ea(e));for(const r in e){const s=e[r];let i;Rt(s)?"default"in s?i=hi(s.from||r,s.default,!0):i=hi(s.from||r):i=hi(s),re(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):t[r]=i}}function Jl(e,t,n){ze(st(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function vf(e,t,n,r){let s=r.includes(".")?Mf(n,r):()=>n[r];if(Lt(e)){const i=t[e];rt(i)&&Ko(s,i)}else if(rt(e))Ko(s,e.bind(n));else if(Rt(e))if(st(e))e.forEach(i=>vf(i,t,n,r));else{const i=rt(e.handler)?e.handler.bind(n):t[e.handler];rt(i)&&Ko(s,i,e)}}function uc(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:i,config:{optionMergeStrategies:a}}=e.appContext,c=i.get(t);let u;return c?u=c:!s.length&&!n&&!r?u=t:(u={},s.length&&s.forEach(f=>Si(u,f,a,!0)),Si(u,t,a)),Rt(t)&&i.set(t,u),u}function Si(e,t,n,r=!1){const{mixins:s,extends:i}=t;i&&Si(e,i,n,!0),s&&s.forEach(a=>Si(e,a,n,!0));for(const a in t)if(!(r&&a==="expose")){const c=Fm[a]||n&&n[a];e[a]=c?c(e[a],t[a]):t[a]}return e}const Fm={data:Zl,props:tu,emits:tu,methods:os,computed:os,beforeCreate:ie,created:ie,beforeMount:ie,mounted:ie,beforeUpdate:ie,updated:ie,beforeDestroy:ie,beforeUnmount:ie,destroyed:ie,unmounted:ie,activated:ie,deactivated:ie,errorCaptured:ie,serverPrefetch:ie,components:os,directives:os,watch:Bm,provide:Zl,inject:Um};function Zl(e,t){return t?e?function(){return zt(rt(e)?e.call(this,this):e,rt(t)?t.call(this,this):t)}:t:e}function Um(e,t){return os(Ea(e),Ea(t))}function Ea(e){if(st(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ie(e,t){return e?[...new Set([].concat(e,t))]:t}function os(e,t){return e?zt(Object.create(null),e,t):t}function tu(e,t){return e?st(e)&&st(t)?[...new Set([...e,...t])]:zt(Object.create(null),Xl(e),Xl(t??{})):t}function Bm(e,t){if(!e)return t;if(!t)return e;const n=zt(Object.create(null),e);for(const r in t)n[r]=ie(e[r],t[r]);return n}function wf(){return{app:null,config:{isNativeTag:Bh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let jm=0;function $m(e,t){return function(r,s=null){rt(r)||(r=zt({},r)),s!=null&&!Rt(s)&&(s=null);const i=wf(),a=new WeakSet,c=[];let u=!1;const f=i.app={_uid:jm++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:R_,get config(){return i.config},set config(d){},use(d,...g){return a.has(d)||(d&&rt(d.install)?(a.add(d),d.install(f,...g)):rt(d)&&(a.add(d),d(f,...g))),f},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),f},component(d,g){return g?(i.components[d]=g,f):i.components[d]},directive(d,g){return g?(i.directives[d]=g,f):i.directives[d]},mount(d,g,m){if(!u){const b=f._ceVNode||$t(r,s);return b.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),g&&t?t(b,d):e(b,d,m),u=!0,f._container=d,d.__vue_app__=f,pc(b.component)}},onUnmount(d){c.push(d)},unmount(){u&&(ze(c,f._instance,16),e(null,f._container),delete f._container.__vue_app__)},provide(d,g){return i.provides[d]=g,f},runWithContext(d){const g=vr;vr=f;try{return d()}finally{vr=g}}};return f}}let vr=null;function qm(e,t){if(ne){let n=ne.provides;const r=ne.parent&&ne.parent.provides;r===n&&(n=ne.provides=Object.create(r)),n[e]=t}}function hi(e,t,n=!1){const r=E_();if(r||vr){let s=vr?vr._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return n&&rt(t)?t.call(r&&r.proxy):t}}const If={},Af=()=>Object.create(If),bf=e=>Object.getPrototypeOf(e)===If;function zm(e,t,n,r=!1){const s={},i=Af();e.propsDefaults=Object.create(null),Sf(e,t,s,i);for(const a in e.propsOptions[0])a in s||(s[a]=void 0);n?e.props=r?s:rm(s):e.type.props?e.props=s:e.props=i,e.attrs=i}function Hm(e,t,n,r){const{props:s,attrs:i,vnode:{patchFlag:a}}=e,c=pt(s),[u]=e.propsOptions;let f=!1;if((r||a>0)&&!(a&16)){if(a&8){const d=e.vnode.dynamicProps;for(let g=0;g<d.length;g++){let m=d[g];if(Xi(e.emitsOptions,m))continue;const b=t[m];if(u)if(gt(i,m))b!==i[m]&&(i[m]=b,f=!0);else{const x=ve(m);s[x]=Ta(u,c,x,b,e,!1)}else b!==i[m]&&(i[m]=b,f=!0)}}}else{Sf(e,t,s,i)&&(f=!0);let d;for(const g in c)(!t||!gt(t,g)&&((d=er(g))===g||!gt(t,d)))&&(u?n&&(n[g]!==void 0||n[d]!==void 0)&&(s[g]=Ta(u,c,g,void 0,e,!0)):delete s[g]);if(i!==c)for(const g in i)(!t||!gt(t,g))&&(delete i[g],f=!0)}f&&Xe(e.attrs,"set","")}function Sf(e,t,n,r){const[s,i]=e.propsOptions;let a=!1,c;if(t)for(let u in t){if(hs(u))continue;const f=t[u];let d;s&&gt(s,d=ve(u))?!i||!i.includes(d)?n[d]=f:(c||(c={}))[d]=f:Xi(e.emitsOptions,u)||(!(u in r)||f!==r[u])&&(r[u]=f,a=!0)}if(i){const u=pt(n),f=c||vt;for(let d=0;d<i.length;d++){const g=i[d];n[g]=Ta(s,u,g,f[g],e,!gt(f,g))}}return a}function Ta(e,t,n,r,s,i){const a=e[n];if(a!=null){const c=gt(a,"default");if(c&&r===void 0){const u=a.default;if(a.type!==Function&&!a.skipFactory&&rt(u)){const{propsDefaults:f}=s;if(n in f)r=f[n];else{const d=Us(s);r=f[n]=u.call(null,t),d()}}else r=u;s.ce&&s.ce._setProp(n,r)}a[0]&&(i&&!c?r=!1:a[1]&&(r===""||r===er(n))&&(r=!0))}return r}const Km=new WeakMap;function Rf(e,t,n=!1){const r=n?Km:t.propsCache,s=r.get(e);if(s)return s;const i=e.props,a={},c=[];let u=!1;if(!rt(e)){const d=g=>{u=!0;const[m,b]=Rf(g,t,!0);zt(a,m),b&&c.push(...b)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!u)return Rt(e)&&r.set(e,_r),_r;if(st(i))for(let d=0;d<i.length;d++){const g=ve(i[d]);eu(g)&&(a[g]=vt)}else if(i)for(const d in i){const g=ve(d);if(eu(g)){const m=i[d],b=a[g]=st(m)||rt(m)?{type:m}:zt({},m),x=b.type;let F=!1,B=!0;if(st(x))for(let K=0;K<x.length;++K){const z=x[K],X=rt(z)&&z.name;if(X==="Boolean"){F=!0;break}else X==="String"&&(B=!1)}else F=rt(x)&&x.name==="Boolean";b[0]=F,b[1]=B,(F||gt(b,"default"))&&c.push(g)}}const f=[a,c];return Rt(e)&&r.set(e,f),f}function eu(e){return e[0]!=="$"&&!hs(e)}const hc=e=>e==="_"||e==="_ctx"||e==="$stable",fc=e=>st(e)?e.map(Fe):[Fe(e)],Gm=(e,t,n)=>{if(t._n)return t;const r=_m((...s)=>fc(t(...s)),n);return r._c=!1,r},Cf=(e,t,n)=>{const r=e._ctx;for(const s in e){if(hc(s))continue;const i=e[s];if(rt(i))t[s]=Gm(s,i,r);else if(i!=null){const a=fc(i);t[s]=()=>a}}},Pf=(e,t)=>{const n=fc(t);e.slots.default=()=>n},Vf=(e,t,n)=>{for(const r in t)(n||!hc(r))&&(e[r]=t[r])},Wm=(e,t,n)=>{const r=e.slots=Af();if(e.vnode.shapeFlag&32){const s=t._;s?(Vf(r,t,n),n&&Hh(r,"_",s,!0)):Cf(t,r)}else t&&Pf(e,t)},Qm=(e,t,n)=>{const{vnode:r,slots:s}=e;let i=!0,a=vt;if(r.shapeFlag&32){const c=t._;c?n&&c===1?i=!1:Vf(s,t,n):(i=!t.$stable,Cf(t,s)),a=t}else t&&(Pf(e,t),a={default:1});if(i)for(const c in s)!hc(c)&&a[c]==null&&delete s[c]},ge=u_;function Ym(e){return Xm(e)}function Xm(e,t){const n=Gi();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:a,createText:c,createComment:u,setText:f,setElementText:d,parentNode:g,nextSibling:m,setScopeId:b=Se,insertStaticContent:x}=e,F=(y,A,P,U=null,N=null,M=null,$=void 0,L=null,k=!!A.dynamicChildren)=>{if(y===A)return;y&&!is(y,A)&&(U=on(y),de(y,N,M,!0),y=null),A.patchFlag===-2&&(k=!1,A.dynamicChildren=null);const{type:O,ref:J,shapeFlag:q}=A;switch(O){case Ji:B(y,A,P,U);break;case Rr:K(y,A,P,U);break;case fi:y==null&&z(A,P,U,$);break;case Le:R(y,A,P,U,N,M,$,L,k);break;default:q&1?ht(y,A,P,U,N,M,$,L,k):q&6?E(y,A,P,U,N,M,$,L,k):(q&64||q&128)&&O.process(y,A,P,U,N,M,$,L,k,We)}J!=null&&N?gs(J,y&&y.ref,M,A||y,!A):J==null&&y&&y.ref!=null&&gs(y.ref,null,M,y,!0)},B=(y,A,P,U)=>{if(y==null)r(A.el=c(A.children),P,U);else{const N=A.el=y.el;A.children!==y.children&&f(N,A.children)}},K=(y,A,P,U)=>{y==null?r(A.el=u(A.children||""),P,U):A.el=y.el},z=(y,A,P,U)=>{[y.el,y.anchor]=x(y.children,A,P,U,y.el,y.anchor)},X=({el:y,anchor:A},P,U)=>{let N;for(;y&&y!==A;)N=m(y),r(y,P,U),y=N;r(A,P,U)},G=({el:y,anchor:A})=>{let P;for(;y&&y!==A;)P=m(y),s(y),y=P;s(A)},ht=(y,A,P,U,N,M,$,L,k)=>{if(A.type==="svg"?$="svg":A.type==="math"&&($="mathml"),y==null)yt(A,P,U,N,M,$,L,k);else{const O=y.el&&y.el._isVueCE?y.el:null;try{O&&O._beginPatch(),T(y,A,N,M,$,L,k)}finally{O&&O._endPatch()}}},yt=(y,A,P,U,N,M,$,L)=>{let k,O;const{props:J,shapeFlag:q,transition:Q,dirs:Z}=y;if(k=y.el=a(y.type,M,J&&J.is,J),q&8?d(k,y.children):q&16&&_(y.children,k,null,U,N,Ho(y,M),$,L),Z&&jn(y,null,U,"created"),w(k,y,y.scopeId,$,U),J){for(const _t in J)_t!=="value"&&!hs(_t)&&i(k,_t,null,J[_t],M,U);"value"in J&&i(k,"value",null,J.value,M),(O=J.onVnodeBeforeMount)&&Me(O,U,y)}Z&&jn(y,null,U,"beforeMount");const ot=Jm(N,Q);ot&&Q.beforeEnter(k),r(k,A,P),((O=J&&J.onVnodeMounted)||ot||Z)&&ge(()=>{O&&Me(O,U,y),ot&&Q.enter(k),Z&&jn(y,null,U,"mounted")},N)},w=(y,A,P,U,N)=>{if(P&&b(y,P),U)for(let M=0;M<U.length;M++)b(y,U[M]);if(N){let M=N.subTree;if(A===M||kf(M.type)&&(M.ssContent===A||M.ssFallback===A)){const $=N.vnode;w(y,$,$.scopeId,$.slotScopeIds,N.parent)}}},_=(y,A,P,U,N,M,$,L,k=0)=>{for(let O=k;O<y.length;O++){const J=y[O]=L?pn(y[O]):Fe(y[O]);F(null,J,A,P,U,N,M,$,L)}},T=(y,A,P,U,N,M,$)=>{const L=A.el=y.el;let{patchFlag:k,dynamicChildren:O,dirs:J}=A;k|=y.patchFlag&16;const q=y.props||vt,Q=A.props||vt;let Z;if(P&&$n(P,!1),(Z=Q.onVnodeBeforeUpdate)&&Me(Z,P,A,y),J&&jn(A,y,P,"beforeUpdate"),P&&$n(P,!0),(q.innerHTML&&Q.innerHTML==null||q.textContent&&Q.textContent==null)&&d(L,""),O?I(y.dynamicChildren,O,L,P,U,Ho(A,N),M):$||dt(y,A,L,null,P,U,Ho(A,N),M,!1),k>0){if(k&16)v(L,q,Q,P,N);else if(k&2&&q.class!==Q.class&&i(L,"class",null,Q.class,N),k&4&&i(L,"style",q.style,Q.style,N),k&8){const ot=A.dynamicProps;for(let _t=0;_t<ot.length;_t++){const ft=ot[_t],Yt=q[ft],Ut=Q[ft];(Ut!==Yt||ft==="value")&&i(L,ft,Yt,Ut,N,P)}}k&1&&y.children!==A.children&&d(L,A.children)}else!$&&O==null&&v(L,q,Q,P,N);((Z=Q.onVnodeUpdated)||J)&&ge(()=>{Z&&Me(Z,P,A,y),J&&jn(A,y,P,"updated")},U)},I=(y,A,P,U,N,M,$)=>{for(let L=0;L<A.length;L++){const k=y[L],O=A[L],J=k.el&&(k.type===Le||!is(k,O)||k.shapeFlag&198)?g(k.el):P;F(k,O,J,null,U,N,M,$,!0)}},v=(y,A,P,U,N)=>{if(A!==P){if(A!==vt)for(const M in A)!hs(M)&&!(M in P)&&i(y,M,A[M],null,N,U);for(const M in P){if(hs(M))continue;const $=P[M],L=A[M];$!==L&&M!=="value"&&i(y,M,L,$,N,U)}"value"in P&&i(y,"value",A.value,P.value,N)}},R=(y,A,P,U,N,M,$,L,k)=>{const O=A.el=y?y.el:c(""),J=A.anchor=y?y.anchor:c("");let{patchFlag:q,dynamicChildren:Q,slotScopeIds:Z}=A;Z&&(L=L?L.concat(Z):Z),y==null?(r(O,P,U),r(J,P,U),_(A.children||[],P,J,N,M,$,L,k)):q>0&&q&64&&Q&&y.dynamicChildren?(I(y.dynamicChildren,Q,P,N,M,$,L),(A.key!=null||N&&A===N.subTree)&&Df(y,A,!0)):dt(y,A,P,J,N,M,$,L,k)},E=(y,A,P,U,N,M,$,L,k)=>{A.slotScopeIds=L,y==null?A.shapeFlag&512?N.ctx.activate(A,P,U,$,k):Ft(A,P,U,N,M,$,k):Ie(y,A,k)},Ft=(y,A,P,U,N,M,$)=>{const L=y.component=y_(y,U,N);if(_f(y)&&(L.ctx.renderer=We),T_(L,!1,$),L.asyncDep){if(N&&N.registerDep(L,Ht,$),!y.el){const k=L.subTree=$t(Rr);K(null,k,A,P),y.placeholder=k.el}}else Ht(L,y,A,P,N,M,$)},Ie=(y,A,P)=>{const U=A.component=y.component;if(c_(y,A,P))if(U.asyncDep&&!U.asyncResolved){wt(U,A,P);return}else U.next=A,U.update();else A.el=y.el,U.vnode=A},Ht=(y,A,P,U,N,M,$)=>{const L=()=>{if(y.isMounted){let{next:q,bu:Q,u:Z,parent:ot,vnode:_t}=y;{const Xt=xf(y);if(Xt){q&&(q.el=_t.el,wt(y,q,$)),Xt.asyncDep.then(()=>{y.isUnmounted||L()});return}}let ft=q,Yt;$n(y,!1),q?(q.el=_t.el,wt(y,q,$)):q=_t,Q&&Fo(Q),(Yt=q.props&&q.props.onVnodeBeforeUpdate)&&Me(Yt,ot,q,_t),$n(y,!0);const Ut=Go(y),le=y.subTree;y.subTree=Ut,F(le,Ut,g(le.el),on(le),y,N,M),q.el=Ut.el,ft===null&&l_(y,Ut.el),Z&&ge(Z,N),(Yt=q.props&&q.props.onVnodeUpdated)&&ge(()=>Me(Yt,ot,q,_t),N)}else{let q;const{el:Q,props:Z}=A,{bm:ot,m:_t,parent:ft,root:Yt,type:Ut}=y,le=ms(A);if($n(y,!1),ot&&Fo(ot),!le&&(q=Z&&Z.onVnodeBeforeMount)&&Me(q,ft,A),$n(y,!0),Q&&or){const Xt=()=>{y.subTree=Go(y),or(Q,y.subTree,y,N,null)};le&&Ut.__asyncHydrate?Ut.__asyncHydrate(Q,y,Xt):Xt()}else{Yt.ce&&Yt.ce._def.shadowRoot!==!1&&Yt.ce._injectChildStyle(Ut);const Xt=y.subTree=Go(y);F(null,Xt,P,U,y,N,M),A.el=Xt.el}if(_t&&ge(_t,N),!le&&(q=Z&&Z.onVnodeMounted)){const Xt=A;ge(()=>Me(q,ft,Xt),N)}(A.shapeFlag&256||ft&&ms(ft.vnode)&&ft.vnode.shapeFlag&256)&&y.a&&ge(y.a,N),y.isMounted=!0,A=P=U=null}};y.scope.on();const k=y.effect=new Qh(L);y.scope.off();const O=y.update=k.run.bind(k),J=y.job=k.runIfDirty.bind(k);J.i=y,J.id=y.uid,k.scheduler=()=>ac(J),$n(y,!0),O()},wt=(y,A,P)=>{A.component=y;const U=y.vnode.props;y.vnode=A,y.next=null,Hm(y,A.props,U,P),Qm(y,A.children,P),Je(),Wl(y),Ze()},dt=(y,A,P,U,N,M,$,L,k=!1)=>{const O=y&&y.children,J=y?y.shapeFlag:0,q=A.children,{patchFlag:Q,shapeFlag:Z}=A;if(Q>0){if(Q&128){sr(O,q,P,U,N,M,$,L,k);return}else if(Q&256){Ee(O,q,P,U,N,M,$,L,k);return}}Z&8?(J&16&&Ge(O,N,M),q!==O&&d(P,q)):J&16?Z&16?sr(O,q,P,U,N,M,$,L,k):Ge(O,N,M,!0):(J&8&&d(P,""),Z&16&&_(q,P,U,N,M,$,L,k))},Ee=(y,A,P,U,N,M,$,L,k)=>{y=y||_r,A=A||_r;const O=y.length,J=A.length,q=Math.min(O,J);let Q;for(Q=0;Q<q;Q++){const Z=A[Q]=k?pn(A[Q]):Fe(A[Q]);F(y[Q],Z,P,null,N,M,$,L,k)}O>J?Ge(y,N,M,!0,!1,q):_(A,P,U,N,M,$,L,k,q)},sr=(y,A,P,U,N,M,$,L,k)=>{let O=0;const J=A.length;let q=y.length-1,Q=J-1;for(;O<=q&&O<=Q;){const Z=y[O],ot=A[O]=k?pn(A[O]):Fe(A[O]);if(is(Z,ot))F(Z,ot,P,null,N,M,$,L,k);else break;O++}for(;O<=q&&O<=Q;){const Z=y[q],ot=A[Q]=k?pn(A[Q]):Fe(A[Q]);if(is(Z,ot))F(Z,ot,P,null,N,M,$,L,k);else break;q--,Q--}if(O>q){if(O<=Q){const Z=Q+1,ot=Z<J?A[Z].el:U;for(;O<=Q;)F(null,A[O]=k?pn(A[O]):Fe(A[O]),P,ot,N,M,$,L,k),O++}}else if(O>Q)for(;O<=q;)de(y[O],N,M,!0),O++;else{const Z=O,ot=O,_t=new Map;for(O=ot;O<=Q;O++){const Kt=A[O]=k?pn(A[O]):Fe(A[O]);Kt.key!=null&&_t.set(Kt.key,O)}let ft,Yt=0;const Ut=Q-ot+1;let le=!1,Xt=0;const Ae=new Array(Ut);for(O=0;O<Ut;O++)Ae[O]=0;for(O=Z;O<=q;O++){const Kt=y[O];if(Yt>=Ut){de(Kt,N,M,!0);continue}let Bt;if(Kt.key!=null)Bt=_t.get(Kt.key);else for(ft=ot;ft<=Q;ft++)if(Ae[ft-ot]===0&&is(Kt,A[ft])){Bt=ft;break}Bt===void 0?de(Kt,N,M,!0):(Ae[Bt-ot]=O+1,Bt>=Xt?Xt=Bt:le=!0,F(Kt,A[Bt],P,null,N,M,$,L,k),Yt++)}const ar=le?Zm(Ae):_r;for(ft=ar.length-1,O=Ut-1;O>=0;O--){const Kt=ot+O,Bt=A[Kt],qr=A[Kt+1],kn=Kt+1<J?qr.el||qr.placeholder:U;Ae[O]===0?F(null,Bt,P,kn,N,M,$,L,k):le&&(ft<0||O!==ar[ft]?De(Bt,P,kn,2):ft--)}}},De=(y,A,P,U,N=null)=>{const{el:M,type:$,transition:L,children:k,shapeFlag:O}=y;if(O&6){De(y.component.subTree,A,P,U);return}if(O&128){y.suspense.move(A,P,U);return}if(O&64){$.move(y,A,P,We);return}if($===Le){r(M,A,P);for(let q=0;q<k.length;q++)De(k[q],A,P,U);r(y.anchor,A,P);return}if($===fi){X(y,A,P);return}if(U!==2&&O&1&&L)if(U===0)L.beforeEnter(M),r(M,A,P),ge(()=>L.enter(M),N);else{const{leave:q,delayLeave:Q,afterLeave:Z}=L,ot=()=>{y.ctx.isUnmounted?s(M):r(M,A,P)},_t=()=>{M._isLeaving&&M[Tm](!0),q(M,()=>{ot(),Z&&Z()})};Q?Q(M,ot,_t):_t()}else r(M,A,P)},de=(y,A,P,U=!1,N=!1)=>{const{type:M,props:$,ref:L,children:k,dynamicChildren:O,shapeFlag:J,patchFlag:q,dirs:Q,cacheIndex:Z}=y;if(q===-2&&(N=!1),L!=null&&(Je(),gs(L,null,P,y,!0),Ze()),Z!=null&&(A.renderCache[Z]=void 0),J&256){A.ctx.deactivate(y);return}const ot=J&1&&Q,_t=!ms(y);let ft;if(_t&&(ft=$&&$.onVnodeBeforeUnmount)&&Me(ft,A,y),J&6)Br(y.component,P,U);else{if(J&128){y.suspense.unmount(P,U);return}ot&&jn(y,null,A,"beforeUnmount"),J&64?y.type.remove(y,A,P,We,U):O&&!O.hasOnce&&(M!==Le||q>0&&q&64)?Ge(O,A,P,!1,!0):(M===Le&&q&384||!N&&J&16)&&Ge(k,A,P),U&&Ur(y)}(_t&&(ft=$&&$.onVnodeUnmounted)||ot)&&ge(()=>{ft&&Me(ft,A,y),ot&&jn(y,null,A,"unmounted")},P)},Ur=y=>{const{type:A,el:P,anchor:U,transition:N}=y;if(A===Le){ir(P,U);return}if(A===fi){G(y);return}const M=()=>{s(P),N&&!N.persisted&&N.afterLeave&&N.afterLeave()};if(y.shapeFlag&1&&N&&!N.persisted){const{leave:$,delayLeave:L}=N,k=()=>$(P,M);L?L(y.el,M,k):k()}else M()},ir=(y,A)=>{let P;for(;y!==A;)P=m(y),s(y),y=P;s(A)},Br=(y,A,P)=>{const{bum:U,scope:N,job:M,subTree:$,um:L,m:k,a:O}=y;nu(k),nu(O),U&&Fo(U),N.stop(),M&&(M.flags|=8,de($,y,A,P)),L&&ge(L,A),ge(()=>{y.isUnmounted=!0},A)},Ge=(y,A,P,U=!1,N=!1,M=0)=>{for(let $=M;$<y.length;$++)de(y[$],A,P,U,N)},on=y=>{if(y.shapeFlag&6)return on(y.component.subTree);if(y.shapeFlag&128)return y.suspense.next();const A=m(y.anchor||y.el),P=A&&A[ym];return P?m(P):A};let On=!1;const jr=(y,A,P)=>{y==null?A._vnode&&de(A._vnode,null,null,!0):F(A._vnode||null,y,A,null,null,null,P),A._vnode=y,On||(On=!0,Wl(),df(),On=!1)},We={p:F,um:de,m:De,r:Ur,mt:Ft,mc:_,pc:dt,pbc:I,n:on,o:e};let $r,or;return t&&([$r,or]=t(We)),{render:jr,hydrate:$r,createApp:$m(jr,$r)}}function Ho({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function $n({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Jm(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Df(e,t,n=!1){const r=e.children,s=t.children;if(st(r)&&st(s))for(let i=0;i<r.length;i++){const a=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=pn(s[i]),c.el=a.el),!n&&c.patchFlag!==-2&&Df(a,c)),c.type===Ji&&c.patchFlag!==-1&&(c.el=a.el),c.type===Rr&&!c.el&&(c.el=a.el)}}function Zm(e){const t=e.slice(),n=[0];let r,s,i,a,c;const u=e.length;for(r=0;r<u;r++){const f=e[r];if(f!==0){if(s=n[n.length-1],e[s]<f){t[r]=s,n.push(r);continue}for(i=0,a=n.length-1;i<a;)c=i+a>>1,e[n[c]]<f?i=c+1:a=c;f<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,a=n[i-1];i-- >0;)n[i]=a,a=t[a];return n}function xf(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:xf(t)}function nu(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const t_=Symbol.for("v-scx"),e_=()=>hi(t_);function Ko(e,t,n){return Nf(e,t,n)}function Nf(e,t,n=vt){const{immediate:r,deep:s,flush:i,once:a}=n,c=zt({},n),u=t&&r||!t&&i!=="post";let f;if(Cs){if(i==="sync"){const b=e_();f=b.__watcherHandles||(b.__watcherHandles=[])}else if(!u){const b=()=>{};return b.stop=Se,b.resume=Se,b.pause=Se,b}}const d=ne;c.call=(b,x,F)=>ze(b,d,x,F);let g=!1;i==="post"?c.scheduler=b=>{ge(b,d&&d.suspense)}:i!=="sync"&&(g=!0,c.scheduler=(b,x)=>{x?b():ac(b)}),c.augmentJob=b=>{t&&(b.flags|=4),g&&(b.flags|=2,d&&(b.id=d.uid,b.i=d))};const m=fm(e,t,c);return Cs&&(f?f.push(m):u&&m()),m}function n_(e,t,n){const r=this.proxy,s=Lt(e)?e.includes(".")?Mf(r,e):()=>r[e]:e.bind(r,r);let i;rt(t)?i=t:(i=t.handler,n=t);const a=Us(this),c=Nf(s,i.bind(r),n);return a(),c}function Mf(e,t){const n=t.split(".");return()=>{let r=e;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const r_=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${ve(t)}Modifiers`]||e[`${er(t)}Modifiers`];function s_(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||vt;let s=n;const i=t.startsWith("update:"),a=i&&r_(r,t.slice(7));a&&(a.trim&&(s=n.map(d=>Lt(d)?d.trim():d)),a.number&&(s=n.map(Vg)));let c,u=r[c=Lo(t)]||r[c=Lo(ve(t))];!u&&i&&(u=r[c=Lo(er(t))]),u&&ze(u,e,6,s);const f=r[c+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[c])return;e.emitted[c]=!0,ze(f,e,6,s)}}const i_=new WeakMap;function Of(e,t,n=!1){const r=n?i_:t.emitsCache,s=r.get(e);if(s!==void 0)return s;const i=e.emits;let a={},c=!1;if(!rt(e)){const u=f=>{const d=Of(f,t,!0);d&&(c=!0,zt(a,d))};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}return!i&&!c?(Rt(e)&&r.set(e,null),null):(st(i)?i.forEach(u=>a[u]=null):zt(a,i),Rt(e)&&r.set(e,a),a)}function Xi(e,t){return!e||!qi(t)?!1:(t=t.slice(2).replace(/Once$/,""),gt(e,t[0].toLowerCase()+t.slice(1))||gt(e,er(t))||gt(e,t))}function Go(e){const{type:t,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:a,attrs:c,emit:u,render:f,renderCache:d,props:g,data:m,setupState:b,ctx:x,inheritAttrs:F}=e,B=Ai(e);let K,z;try{if(n.shapeFlag&4){const G=s||r,ht=G;K=Fe(f.call(ht,G,d,g,b,m,x)),z=c}else{const G=t;K=Fe(G.length>1?G(g,{attrs:c,slots:a,emit:u}):G(g,null)),z=t.props?c:o_(c)}}catch(G){ys.length=0,Qi(G,e,1),K=$t(Rr)}let X=K;if(z&&F!==!1){const G=Object.keys(z),{shapeFlag:ht}=X;G.length&&ht&7&&(i&&G.some(Wa)&&(z=a_(z,i)),X=Cr(X,z,!1,!0))}return n.dirs&&(X=Cr(X,null,!1,!0),X.dirs=X.dirs?X.dirs.concat(n.dirs):n.dirs),n.transition&&cc(X,n.transition),K=X,Ai(B),K}const o_=e=>{let t;for(const n in e)(n==="class"||n==="style"||qi(n))&&((t||(t={}))[n]=e[n]);return t},a_=(e,t)=>{const n={};for(const r in e)(!Wa(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function c_(e,t,n){const{props:r,children:s,component:i}=e,{props:a,children:c,patchFlag:u}=t,f=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&u>=0){if(u&1024)return!0;if(u&16)return r?ru(r,a,f):!!a;if(u&8){const d=t.dynamicProps;for(let g=0;g<d.length;g++){const m=d[g];if(a[m]!==r[m]&&!Xi(f,m))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===a?!1:r?a?ru(r,a,f):!0:!!a;return!1}function ru(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(t[i]!==e[i]&&!Xi(n,i))return!0}return!1}function l_({vnode:e,parent:t},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}const kf=e=>e.__isSuspense;function u_(e,t){t&&t.pendingBranch?st(e)?t.effects.push(...e):t.effects.push(e):mm(e)}const Le=Symbol.for("v-fgt"),Ji=Symbol.for("v-txt"),Rr=Symbol.for("v-cmt"),fi=Symbol.for("v-stc"),ys=[];let me=null;function wr(e=!1){ys.push(me=e?null:[])}function h_(){ys.pop(),me=ys[ys.length-1]||null}let Rs=1;function su(e,t=!1){Rs+=e,e<0&&me&&t&&(me.hasOnce=!0)}function f_(e){return e.dynamicChildren=Rs>0?me||_r:null,h_(),Rs>0&&me&&me.push(e),e}function Ir(e,t,n,r,s,i){return f_(St(e,t,n,r,s,i,!0))}function Lf(e){return e?e.__v_isVNode===!0:!1}function is(e,t){return e.type===t.type&&e.key===t.key}const Ff=({key:e})=>e??null,di=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?Lt(e)||re(e)||rt(e)?{i:be,r:e,k:t,f:!!n}:e:null);function St(e,t=null,n=null,r=0,s=null,i=e===Le?0:1,a=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Ff(t),ref:t&&di(t),scopeId:gf,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:be};return c?(dc(u,n),i&128&&e.normalize(u)):n&&(u.shapeFlag|=Lt(n)?8:16),Rs>0&&!a&&me&&(u.patchFlag>0||i&6)&&u.patchFlag!==32&&me.push(u),u}const $t=d_;function d_(e,t=null,n=null,r=0,s=null,i=!1){if((!e||e===Nm)&&(e=Rr),Lf(e)){const c=Cr(e,t,!0);return n&&dc(c,n),Rs>0&&!i&&me&&(c.shapeFlag&6?me[me.indexOf(e)]=c:me.push(c)),c.patchFlag=-2,c}if(b_(e)&&(e=e.__vccOpts),t){t=p_(t);let{class:c,style:u}=t;c&&!Lt(c)&&(t.class=Wi(c)),Rt(u)&&(oc(u)&&!st(u)&&(u=zt({},u)),t.style=Xa(u))}const a=Lt(e)?1:kf(e)?128:Em(e)?64:Rt(e)?4:rt(e)?2:0;return St(e,t,n,r,s,a,i,!0)}function p_(e){return e?oc(e)||bf(e)?zt({},e):e:null}function Cr(e,t,n=!1,r=!1){const{props:s,ref:i,patchFlag:a,children:c,transition:u}=e,f=t?g_(s||{},t):s,d={__v_isVNode:!0,__v_skip:!0,type:e.type,props:f,key:f&&Ff(f),ref:t&&t.ref?n&&i?st(i)?i.concat(di(t)):[i,di(t)]:di(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:c,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Le?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:u,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Cr(e.ssContent),ssFallback:e.ssFallback&&Cr(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return u&&r&&cc(d,u.clone(d)),d}function yn(e=" ",t=0){return $t(Ji,null,e,t)}function iu(e,t){const n=$t(fi,null,e);return n.staticCount=t,n}function Fe(e){return e==null||typeof e=="boolean"?$t(Rr):st(e)?$t(Le,null,e.slice()):Lf(e)?pn(e):$t(Ji,null,String(e))}function pn(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Cr(e)}function dc(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(st(t))n=16;else if(typeof t=="object")if(r&65){const s=t.default;s&&(s._c&&(s._d=!1),dc(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!bf(t)?t._ctx=be:s===3&&be&&(be.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else rt(t)?(t={default:t,_ctx:be},n=32):(t=String(t),r&64?(n=16,t=[yn(t)]):n=8);e.children=t,e.shapeFlag|=n}function g_(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=Wi([t.class,r.class]));else if(s==="style")t.style=Xa([t.style,r.style]);else if(qi(s)){const i=t[s],a=r[s];a&&i!==a&&!(st(i)&&i.includes(a))&&(t[s]=i?[].concat(i,a):a)}else s!==""&&(t[s]=r[s])}return t}function Me(e,t,n,r=null){ze(e,t,7,[n,r])}const m_=wf();let __=0;function y_(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||m_,i={uid:__++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Lg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Rf(r,s),emitsOptions:Of(r,s),emit:null,emitted:null,propsDefaults:vt,inheritAttrs:r.inheritAttrs,ctx:vt,data:vt,props:vt,attrs:vt,slots:vt,refs:vt,setupState:vt,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=s_.bind(null,i),e.ce&&e.ce(i),i}let ne=null;const E_=()=>ne||be;let Ri,va;{const e=Gi(),t=(n,r)=>{let s;return(s=e[n])||(s=e[n]=[]),s.push(r),i=>{s.length>1?s.forEach(a=>a(i)):s[0](i)}};Ri=t("__VUE_INSTANCE_SETTERS__",n=>ne=n),va=t("__VUE_SSR_SETTERS__",n=>Cs=n)}const Us=e=>{const t=ne;return Ri(e),e.scope.on(),()=>{e.scope.off(),Ri(t)}},ou=()=>{ne&&ne.scope.off(),Ri(null)};function Uf(e){return e.vnode.shapeFlag&4}let Cs=!1;function T_(e,t=!1,n=!1){t&&va(t);const{props:r,children:s}=e.vnode,i=Uf(e);zm(e,r,i,t),Wm(e,s,n||t);const a=i?v_(e,t):void 0;return t&&va(!1),a}function v_(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Om);const{setup:r}=n;if(r){Je();const s=e.setupContext=r.length>1?I_(e):null,i=Us(e),a=Fs(r,e,0,[e.props,s]),c=$h(a);if(Ze(),i(),(c||e.sp)&&!ms(e)&&mf(e),c){if(a.then(ou,ou),t)return a.then(u=>{au(e,u,t)}).catch(u=>{Qi(u,e,0)});e.asyncDep=a}else au(e,a,t)}else Bf(e,t)}function au(e,t,n){rt(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Rt(t)&&(e.setupState=uf(t)),Bf(e,n)}let cu;function Bf(e,t,n){const r=e.type;if(!e.render){if(!t&&cu&&!r.render){const s=r.template||uc(e).template;if(s){const{isCustomElement:i,compilerOptions:a}=e.appContext.config,{delimiters:c,compilerOptions:u}=r,f=zt(zt({isCustomElement:i,delimiters:c},a),u);r.render=cu(s,f)}}e.render=r.render||Se}{const s=Us(e);Je();try{km(e)}finally{Ze(),s()}}}const w_={get(e,t){return te(e,"get",""),e[t]}};function I_(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,w_),slots:e.slots,emit:e.emit,expose:t}}function pc(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(uf(sm(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in _s)return _s[n](e)},has(t,n){return n in t||n in _s}})):e.proxy}function A_(e,t=!0){return rt(e)?e.displayName||e.name:e.name||t&&e.__name}function b_(e){return rt(e)&&"__vccOpts"in e}const S_=(e,t)=>um(e,t,Cs),R_="3.5.24";/**
* @vue/runtime-dom v3.5.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let wa;const lu=typeof window<"u"&&window.trustedTypes;if(lu)try{wa=lu.createPolicy("vue",{createHTML:e=>e})}catch{}const jf=wa?e=>wa.createHTML(e):e=>e,C_="http://www.w3.org/2000/svg",P_="http://www.w3.org/1998/Math/MathML",Ye=typeof document<"u"?document:null,uu=Ye&&Ye.createElement("template"),V_={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t==="svg"?Ye.createElementNS(C_,e):t==="mathml"?Ye.createElementNS(P_,e):n?Ye.createElement(e,{is:n}):Ye.createElement(e);return e==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:e=>Ye.createTextNode(e),createComment:e=>Ye.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Ye.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,s,i){const a=n?n.previousSibling:t.lastChild;if(s&&(s===i||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{uu.innerHTML=jf(r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e);const c=uu.content;if(r==="svg"||r==="mathml"){const u=c.firstChild;for(;u.firstChild;)c.appendChild(u.firstChild);c.removeChild(u)}t.insertBefore(c,n)}return[a?a.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},D_=Symbol("_vtc");function x_(e,t,n){const r=e[D_];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const hu=Symbol("_vod"),N_=Symbol("_vsh"),M_=Symbol(""),O_=/(?:^|;)\s*display\s*:/;function k_(e,t,n){const r=e.style,s=Lt(n);let i=!1;if(n&&!s){if(t)if(Lt(t))for(const a of t.split(";")){const c=a.slice(0,a.indexOf(":")).trim();n[c]==null&&pi(r,c,"")}else for(const a in t)n[a]==null&&pi(r,a,"");for(const a in n)a==="display"&&(i=!0),pi(r,a,n[a])}else if(s){if(t!==n){const a=r[M_];a&&(n+=";"+a),r.cssText=n,i=O_.test(n)}}else t&&e.removeAttribute("style");hu in e&&(e[hu]=i?r.display:"",e[N_]&&(r.display="none"))}const fu=/\s*!important$/;function pi(e,t,n){if(st(n))n.forEach(r=>pi(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=L_(e,t);fu.test(n)?e.setProperty(er(r),n.replace(fu,""),"important"):e[r]=n}}const du=["Webkit","Moz","ms"],Wo={};function L_(e,t){const n=Wo[t];if(n)return n;let r=ve(t);if(r!=="filter"&&r in e)return Wo[t]=r;r=Ki(r);for(let s=0;s<du.length;s++){const i=du[s]+r;if(i in e)return Wo[t]=i}return t}const pu="http://www.w3.org/1999/xlink";function gu(e,t,n,r,s,i=kg(t)){r&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(pu,t.slice(6,t.length)):e.setAttributeNS(pu,t,n):n==null||i&&!Kh(n)?e.removeAttribute(t):e.setAttribute(t,i?"":Dn(n)?String(n):n)}function mu(e,t,n,r,s){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?jf(n):n);return}const i=e.tagName;if(t==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?e.getAttribute("value")||"":e.value,u=n==null?e.type==="checkbox"?"on":"":String(n);(c!==u||!("_value"in e))&&(e.value=u),n==null&&e.removeAttribute(t),e._value=n;return}let a=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=Kh(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{e[t]=n}catch{}a&&e.removeAttribute(s||t)}function F_(e,t,n,r){e.addEventListener(t,n,r)}function U_(e,t,n,r){e.removeEventListener(t,n,r)}const _u=Symbol("_vei");function B_(e,t,n,r,s=null){const i=e[_u]||(e[_u]={}),a=i[t];if(r&&a)a.value=r;else{const[c,u]=j_(t);if(r){const f=i[t]=z_(r,s);F_(e,c,f,u)}else a&&(U_(e,c,a,u),i[t]=void 0)}}const yu=/(?:Once|Passive|Capture)$/;function j_(e){let t;if(yu.test(e)){t={};let r;for(;r=e.match(yu);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):er(e.slice(2)),t]}let Qo=0;const $_=Promise.resolve(),q_=()=>Qo||($_.then(()=>Qo=0),Qo=Date.now());function z_(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;ze(H_(r,n.value),t,5,[r])};return n.value=e,n.attached=q_(),n}function H_(e,t){if(st(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>s=>!s._stopped&&r&&r(s))}else return t}const Eu=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,K_=(e,t,n,r,s,i)=>{const a=s==="svg";t==="class"?x_(e,r,a):t==="style"?k_(e,n,r):qi(t)?Wa(t)||B_(e,t,n,r,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):G_(e,t,r,a))?(mu(e,t,r),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&gu(e,t,r,a,i,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!Lt(r))?mu(e,ve(t),r,i,t):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),gu(e,t,r,a))};function G_(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&Eu(t)&&rt(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Eu(t)&&Lt(n)?!1:t in e}const W_=zt({patchProp:K_},V_);let Tu;function Q_(){return Tu||(Tu=Ym(W_))}const Y_=(...e)=>{const t=Q_().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=J_(r);if(!s)return;const i=t._component;!rt(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=n(s,!1,X_(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},t};function X_(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function J_(e){return Lt(e)?document.querySelector(e):e}const Z_={name:"BadgeTag",props:{texto:{type:String,required:!0},gold:Boolean}};const Zi=(e,t)=>{const n=e.__vccOpts||e;for(const[r,s]of t)n[r]=s;return n};function ty(e,t,n,r,s,i){return wr(),Ir("span",{class:Wi(["badge",{gold:n.gold}])},Er(n.texto),3)}const $f=Zi(Z_,[["render",ty],["__scopeId","data-v-a06a7133"]]),ey={name:"LinkTag",props:{strText:{type:String,required:!0},strLink:{type:String,required:!0}}},ny=["href"];function ry(e,t,n,r,s,i){return wr(),Ir("li",null,[yn(Er(n.strText)+" [",1),St("a",{href:n.strLink},"Link",8,ny),t[0]||(t[0]=yn("]",-1))])}const sy=Zi(ey,[["render",ry]]),iy=()=>{};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qf=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},oy=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=e[n++],a=e[n++],c=e[n++],u=((s&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;t[r++]=String.fromCharCode(55296+(u>>10)),t[r++]=String.fromCharCode(56320+(u&1023))}else{const i=e[n++],a=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return t.join("")},zf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const i=e[s],a=s+1<e.length,c=a?e[s+1]:0,u=s+2<e.length,f=u?e[s+2]:0,d=i>>2,g=(i&3)<<4|c>>4;let m=(c&15)<<2|f>>6,b=f&63;u||(b=64,a||(m=64)),r.push(n[d],n[g],n[m],n[b])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(qf(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):oy(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const i=n[e.charAt(s++)],c=s<e.length?n[e.charAt(s)]:0;++s;const f=s<e.length?n[e.charAt(s)]:64;++s;const g=s<e.length?n[e.charAt(s)]:64;if(++s,i==null||c==null||f==null||g==null)throw new ay;const m=i<<2|c>>4;if(r.push(m),f!==64){const b=c<<4&240|f>>2;if(r.push(b),g!==64){const x=f<<6&192|g;r.push(x)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class ay extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const cy=function(e){const t=qf(e);return zf.encodeByteArray(t,!0)},Ci=function(e){return cy(e).replace(/\./g,"")},ly=function(e){try{return zf.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uy(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hy=()=>uy().__FIREBASE_DEFAULTS__,fy=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},dy=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&ly(e[1]);return t&&JSON.parse(t)},gc=()=>{try{return iy()||hy()||fy()||dy()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},py=e=>{var t,n;return(n=(t=gc())==null?void 0:t.emulatorHosts)==null?void 0:n[e]},gy=e=>{const t=py(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},Hf=()=>{var e;return(e=gc())==null?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class my{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mc(e){try{return(e.startsWith("http://")||e.startsWith("https://")?new URL(e).hostname:e).endsWith(".cloudworkstations.dev")}catch{return!1}}async function _y(e){return(await fetch(e,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yy(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",s=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...e},c="";return[Ci(JSON.stringify(n)),Ci(JSON.stringify(a)),c].join(".")}const Es={};function Ey(){const e={prod:[],emulator:[]};for(const t of Object.keys(Es))Es[t]?e.emulator.push(t):e.prod.push(t);return e}function Ty(e){let t=document.getElementById(e),n=!1;return t||(t=document.createElement("div"),t.setAttribute("id",e),n=!0),{created:n,element:t}}let vu=!1;function vy(e,t){if(typeof window>"u"||typeof document>"u"||!mc(window.location.host)||Es[e]===t||Es[e]||vu)return;Es[e]=t;function n(m){return`__firebase__banner__${m}`}const r="__firebase__banner",i=Ey().prod.length>0;function a(){const m=document.getElementById(r);m&&m.remove()}function c(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function u(m,b){m.setAttribute("width","24"),m.setAttribute("id",b),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function f(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{vu=!0,a()},m}function d(m,b){m.setAttribute("id",b),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function g(){const m=Ty(r),b=n("text"),x=document.getElementById(b)||document.createElement("span"),F=n("learnmore"),B=document.getElementById(F)||document.createElement("a"),K=n("preprendIcon"),z=document.getElementById(K)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const X=m.element;c(X),d(B,F);const G=f();u(z,K),X.append(z,x,B,G),document.body.appendChild(X)}i?(x.innerText="Preview backend disconnected.",z.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(z.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,x.innerText="Preview backend running in this workspace."),x.setAttribute("id",b)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",g):g()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wy(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Iy(){var t;const e=(t=gc())==null?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Ay(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function by(){return!Iy()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Kf(){try{return typeof indexedDB=="object"}catch{return!1}}function Gf(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;t(((i=s.error)==null?void 0:i.message)||"")}}catch(n){t(n)}})}function Sy(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ry="FirebaseError";class xn extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Ry,Object.setPrototypeOf(this,xn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,to.prototype.create)}}class to{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,i=this.errors[t],a=i?Cy(i,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new xn(s,c,r)}}function Cy(e,t){return e.replace(Py,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const Py=/\{\$([^}]+)}/g;function Ps(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const i=e[s],a=t[s];if(wu(i)&&wu(a)){if(!Ps(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function wu(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vy=1e3,Dy=2,xy=4*60*60*1e3,Ny=.5;function Iu(e,t=Vy,n=Dy){const r=t*Math.pow(n,e),s=Math.round(Ny*r*(Math.random()-.5)*2);return Math.min(xy,r+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(e){return e&&e._delegate?e._delegate:e}class tn{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class My{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new my;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){const n=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(t==null?void 0:t.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(ky(t))try{this.getOrInitializeService({instanceIdentifier:zn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(t=zn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=zn){return this.instances.has(t)}getOptions(t=zn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&a.resolve(s)}return s}onInit(t,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(t),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&t(i,r),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Oy(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=zn){return this.component?this.component.multipleInstances?t:zn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Oy(e){return e===zn?void 0:e}function ky(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ly{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new My(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ut;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(ut||(ut={}));const Fy={debug:ut.DEBUG,verbose:ut.VERBOSE,info:ut.INFO,warn:ut.WARN,error:ut.ERROR,silent:ut.SILENT},Uy=ut.INFO,By={[ut.DEBUG]:"log",[ut.VERBOSE]:"log",[ut.INFO]:"info",[ut.WARN]:"warn",[ut.ERROR]:"error"},jy=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=By[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class _c{constructor(t){this.name=t,this._logLevel=Uy,this._logHandler=jy,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in ut))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Fy[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,ut.DEBUG,...t),this._logHandler(this,ut.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,ut.VERBOSE,...t),this._logHandler(this,ut.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,ut.INFO,...t),this._logHandler(this,ut.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,ut.WARN,...t),this._logHandler(this,ut.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,ut.ERROR,...t),this._logHandler(this,ut.ERROR,...t)}}const $y=(e,t)=>t.some(n=>e instanceof n);let Au,bu;function qy(){return Au||(Au=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function zy(){return bu||(bu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Wf=new WeakMap,Ia=new WeakMap,Qf=new WeakMap,Yo=new WeakMap,yc=new WeakMap;function Hy(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",i),e.removeEventListener("error",a)},i=()=>{n(En(e.result)),s()},a=()=>{r(e.error),s()};e.addEventListener("success",i),e.addEventListener("error",a)});return t.then(n=>{n instanceof IDBCursor&&Wf.set(n,e)}).catch(()=>{}),yc.set(t,e),t}function Ky(e){if(Ia.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",a),e.removeEventListener("abort",a)},i=()=>{n(),s()},a=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",i),e.addEventListener("error",a),e.addEventListener("abort",a)});Ia.set(e,t)}let Aa={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Ia.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Qf.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return En(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Gy(e){Aa=e(Aa)}function Wy(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Xo(this),t,...n);return Qf.set(r,t.sort?t.sort():[t]),En(r)}:zy().includes(e)?function(...t){return e.apply(Xo(this),t),En(Wf.get(this))}:function(...t){return En(e.apply(Xo(this),t))}}function Qy(e){return typeof e=="function"?Wy(e):(e instanceof IDBTransaction&&Ky(e),$y(e,qy())?new Proxy(e,Aa):e)}function En(e){if(e instanceof IDBRequest)return Hy(e);if(Yo.has(e))return Yo.get(e);const t=Qy(e);return t!==e&&(Yo.set(e,t),yc.set(t,e)),t}const Xo=e=>yc.get(e);function Yf(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(e,t),c=En(a);return r&&a.addEventListener("upgradeneeded",u=>{r(En(a.result),u.oldVersion,u.newVersion,En(a.transaction),u)}),n&&a.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),c.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",f=>s(f.oldVersion,f.newVersion,f))}).catch(()=>{}),c}const Yy=["get","getKey","getAll","getAllKeys","count"],Xy=["put","add","delete","clear"],Jo=new Map;function Su(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Jo.get(t))return Jo.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=Xy.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Yy.includes(n)))return;const i=async function(a,...c){const u=this.transaction(a,s?"readwrite":"readonly");let f=u.store;return r&&(f=f.index(c.shift())),(await Promise.all([f[n](...c),s&&u.done]))[0]};return Jo.set(t,i),i}Gy(e=>({...e,get:(t,n,r)=>Su(t,n)||e.get(t,n,r),has:(t,n)=>!!Su(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jy{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Zy(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Zy(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const ba="@firebase/app",Ru="0.14.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const en=new _c("@firebase/app"),tE="@firebase/app-compat",eE="@firebase/analytics-compat",nE="@firebase/analytics",rE="@firebase/app-check-compat",sE="@firebase/app-check",iE="@firebase/auth",oE="@firebase/auth-compat",aE="@firebase/database",cE="@firebase/data-connect",lE="@firebase/database-compat",uE="@firebase/functions",hE="@firebase/functions-compat",fE="@firebase/installations",dE="@firebase/installations-compat",pE="@firebase/messaging",gE="@firebase/messaging-compat",mE="@firebase/performance",_E="@firebase/performance-compat",yE="@firebase/remote-config",EE="@firebase/remote-config-compat",TE="@firebase/storage",vE="@firebase/storage-compat",wE="@firebase/firestore",IE="@firebase/ai",AE="@firebase/firestore-compat",bE="firebase",SE="12.5.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sa="[DEFAULT]",RE={[ba]:"fire-core",[tE]:"fire-core-compat",[nE]:"fire-analytics",[eE]:"fire-analytics-compat",[sE]:"fire-app-check",[rE]:"fire-app-check-compat",[iE]:"fire-auth",[oE]:"fire-auth-compat",[aE]:"fire-rtdb",[cE]:"fire-data-connect",[lE]:"fire-rtdb-compat",[uE]:"fire-fn",[hE]:"fire-fn-compat",[fE]:"fire-iid",[dE]:"fire-iid-compat",[pE]:"fire-fcm",[gE]:"fire-fcm-compat",[mE]:"fire-perf",[_E]:"fire-perf-compat",[yE]:"fire-rc",[EE]:"fire-rc-compat",[TE]:"fire-gcs",[vE]:"fire-gcs-compat",[wE]:"fire-fst",[AE]:"fire-fst-compat",[IE]:"fire-vertex","fire-js":"fire-js",[bE]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pi=new Map,CE=new Map,Ra=new Map;function Cu(e,t){try{e.container.addComponent(t)}catch(n){en.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function An(e){const t=e.name;if(Ra.has(t))return en.debug(`There were multiple attempts to register component ${t}.`),!1;Ra.set(t,e);for(const n of Pi.values())Cu(n,e);for(const n of CE.values())Cu(n,e);return!0}function Bs(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function PE(e){return e==null?!1:e.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Tn=new to("app","Firebase",VE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DE{constructor(t,n,r){this._isDeleted=!1,this._options={...t},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new tn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Tn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xE=SE;function Xf(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r={name:Sa,automaticDataCollectionEnabled:!0,...t},s=r.name;if(typeof s!="string"||!s)throw Tn.create("bad-app-name",{appName:String(s)});if(n||(n=Hf()),!n)throw Tn.create("no-options");const i=Pi.get(s);if(i){if(Ps(n,i.options)&&Ps(r,i.config))return i;throw Tn.create("duplicate-app",{appName:s})}const a=new Ly(s);for(const u of Ra.values())a.addComponent(u);const c=new DE(n,r,a);return Pi.set(s,c),c}function Jf(e=Sa){const t=Pi.get(e);if(!t&&e===Sa&&Hf())return Xf();if(!t)throw Tn.create("no-app",{appName:e});return t}function Ue(e,t,n){let r=RE[e]??e;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=t.match(/\s|\//);if(s||i){const a=[`Unable to register library "${r}" with version "${t}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&a.push("and"),i&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),en.warn(a.join(" "));return}An(new tn(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NE="firebase-heartbeat-database",ME=1,Vs="firebase-heartbeat-store";let Zo=null;function Zf(){return Zo||(Zo=Yf(NE,ME,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Vs)}catch(n){console.warn(n)}}}}).catch(e=>{throw Tn.create("idb-open",{originalErrorMessage:e.message})})),Zo}async function OE(e){try{const n=(await Zf()).transaction(Vs),r=await n.objectStore(Vs).get(td(e));return await n.done,r}catch(t){if(t instanceof xn)en.warn(t.message);else{const n=Tn.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});en.warn(n.message)}}}async function Pu(e,t){try{const r=(await Zf()).transaction(Vs,"readwrite");await r.objectStore(Vs).put(t,td(e)),await r.done}catch(n){if(n instanceof xn)en.warn(n.message);else{const r=Tn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});en.warn(r.message)}}}function td(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kE=1024,LE=30;class FE{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new BE(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Vu();if(((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>LE){const a=jE(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){en.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Vu(),{heartbeatsToSend:r,unsentEntries:s}=UE(this._heartbeatsCache.heartbeats),i=Ci(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return en.warn(n),""}}}function Vu(){return new Date().toISOString().substring(0,10)}function UE(e,t=kE){const n=[];let r=e.slice();for(const s of e){const i=n.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),Du(n)>t){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Du(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class BE{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Kf()?Gf().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await OE(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return Pu(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return Pu(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function Du(e){return Ci(JSON.stringify({version:2,heartbeats:e})).length}function jE(e){if(e.length===0)return-1;let t=0,n=e[0].date;for(let r=1;r<e.length;r++)e[r].date<n&&(n=e[r].date,t=r);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $E(e){An(new tn("platform-logger",t=>new Jy(t),"PRIVATE")),An(new tn("heartbeat",t=>new FE(t),"PRIVATE")),Ue(ba,Ru,e),Ue(ba,Ru,"esm2020"),Ue("fire-js","")}$E("");var qE="firebase",zE="12.5.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ue(qE,zE,"app");var xu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var vn,ed;(function(){var e;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(w,_){function T(){}T.prototype=_.prototype,w.F=_.prototype,w.prototype=new T,w.prototype.constructor=w,w.D=function(I,v,R){for(var E=Array(arguments.length-2),Ft=2;Ft<arguments.length;Ft++)E[Ft-2]=arguments[Ft];return _.prototype[v].apply(I,E)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,_,T){T||(T=0);const I=Array(16);if(typeof _=="string")for(var v=0;v<16;++v)I[v]=_.charCodeAt(T++)|_.charCodeAt(T++)<<8|_.charCodeAt(T++)<<16|_.charCodeAt(T++)<<24;else for(v=0;v<16;++v)I[v]=_[T++]|_[T++]<<8|_[T++]<<16|_[T++]<<24;_=w.g[0],T=w.g[1],v=w.g[2];let R=w.g[3],E;E=_+(R^T&(v^R))+I[0]+3614090360&4294967295,_=T+(E<<7&4294967295|E>>>25),E=R+(v^_&(T^v))+I[1]+3905402710&4294967295,R=_+(E<<12&4294967295|E>>>20),E=v+(T^R&(_^T))+I[2]+606105819&4294967295,v=R+(E<<17&4294967295|E>>>15),E=T+(_^v&(R^_))+I[3]+3250441966&4294967295,T=v+(E<<22&4294967295|E>>>10),E=_+(R^T&(v^R))+I[4]+4118548399&4294967295,_=T+(E<<7&4294967295|E>>>25),E=R+(v^_&(T^v))+I[5]+1200080426&4294967295,R=_+(E<<12&4294967295|E>>>20),E=v+(T^R&(_^T))+I[6]+2821735955&4294967295,v=R+(E<<17&4294967295|E>>>15),E=T+(_^v&(R^_))+I[7]+4249261313&4294967295,T=v+(E<<22&4294967295|E>>>10),E=_+(R^T&(v^R))+I[8]+1770035416&4294967295,_=T+(E<<7&4294967295|E>>>25),E=R+(v^_&(T^v))+I[9]+2336552879&4294967295,R=_+(E<<12&4294967295|E>>>20),E=v+(T^R&(_^T))+I[10]+4294925233&4294967295,v=R+(E<<17&4294967295|E>>>15),E=T+(_^v&(R^_))+I[11]+2304563134&4294967295,T=v+(E<<22&4294967295|E>>>10),E=_+(R^T&(v^R))+I[12]+1804603682&4294967295,_=T+(E<<7&4294967295|E>>>25),E=R+(v^_&(T^v))+I[13]+4254626195&4294967295,R=_+(E<<12&4294967295|E>>>20),E=v+(T^R&(_^T))+I[14]+2792965006&4294967295,v=R+(E<<17&4294967295|E>>>15),E=T+(_^v&(R^_))+I[15]+1236535329&4294967295,T=v+(E<<22&4294967295|E>>>10),E=_+(v^R&(T^v))+I[1]+4129170786&4294967295,_=T+(E<<5&4294967295|E>>>27),E=R+(T^v&(_^T))+I[6]+3225465664&4294967295,R=_+(E<<9&4294967295|E>>>23),E=v+(_^T&(R^_))+I[11]+643717713&4294967295,v=R+(E<<14&4294967295|E>>>18),E=T+(R^_&(v^R))+I[0]+3921069994&4294967295,T=v+(E<<20&4294967295|E>>>12),E=_+(v^R&(T^v))+I[5]+3593408605&4294967295,_=T+(E<<5&4294967295|E>>>27),E=R+(T^v&(_^T))+I[10]+38016083&4294967295,R=_+(E<<9&4294967295|E>>>23),E=v+(_^T&(R^_))+I[15]+3634488961&4294967295,v=R+(E<<14&4294967295|E>>>18),E=T+(R^_&(v^R))+I[4]+3889429448&4294967295,T=v+(E<<20&4294967295|E>>>12),E=_+(v^R&(T^v))+I[9]+568446438&4294967295,_=T+(E<<5&4294967295|E>>>27),E=R+(T^v&(_^T))+I[14]+3275163606&4294967295,R=_+(E<<9&4294967295|E>>>23),E=v+(_^T&(R^_))+I[3]+4107603335&4294967295,v=R+(E<<14&4294967295|E>>>18),E=T+(R^_&(v^R))+I[8]+1163531501&4294967295,T=v+(E<<20&4294967295|E>>>12),E=_+(v^R&(T^v))+I[13]+2850285829&4294967295,_=T+(E<<5&4294967295|E>>>27),E=R+(T^v&(_^T))+I[2]+4243563512&4294967295,R=_+(E<<9&4294967295|E>>>23),E=v+(_^T&(R^_))+I[7]+1735328473&4294967295,v=R+(E<<14&4294967295|E>>>18),E=T+(R^_&(v^R))+I[12]+2368359562&4294967295,T=v+(E<<20&4294967295|E>>>12),E=_+(T^v^R)+I[5]+4294588738&4294967295,_=T+(E<<4&4294967295|E>>>28),E=R+(_^T^v)+I[8]+2272392833&4294967295,R=_+(E<<11&4294967295|E>>>21),E=v+(R^_^T)+I[11]+1839030562&4294967295,v=R+(E<<16&4294967295|E>>>16),E=T+(v^R^_)+I[14]+4259657740&4294967295,T=v+(E<<23&4294967295|E>>>9),E=_+(T^v^R)+I[1]+2763975236&4294967295,_=T+(E<<4&4294967295|E>>>28),E=R+(_^T^v)+I[4]+1272893353&4294967295,R=_+(E<<11&4294967295|E>>>21),E=v+(R^_^T)+I[7]+4139469664&4294967295,v=R+(E<<16&4294967295|E>>>16),E=T+(v^R^_)+I[10]+3200236656&4294967295,T=v+(E<<23&4294967295|E>>>9),E=_+(T^v^R)+I[13]+681279174&4294967295,_=T+(E<<4&4294967295|E>>>28),E=R+(_^T^v)+I[0]+3936430074&4294967295,R=_+(E<<11&4294967295|E>>>21),E=v+(R^_^T)+I[3]+3572445317&4294967295,v=R+(E<<16&4294967295|E>>>16),E=T+(v^R^_)+I[6]+76029189&4294967295,T=v+(E<<23&4294967295|E>>>9),E=_+(T^v^R)+I[9]+3654602809&4294967295,_=T+(E<<4&4294967295|E>>>28),E=R+(_^T^v)+I[12]+3873151461&4294967295,R=_+(E<<11&4294967295|E>>>21),E=v+(R^_^T)+I[15]+530742520&4294967295,v=R+(E<<16&4294967295|E>>>16),E=T+(v^R^_)+I[2]+3299628645&4294967295,T=v+(E<<23&4294967295|E>>>9),E=_+(v^(T|~R))+I[0]+4096336452&4294967295,_=T+(E<<6&4294967295|E>>>26),E=R+(T^(_|~v))+I[7]+1126891415&4294967295,R=_+(E<<10&4294967295|E>>>22),E=v+(_^(R|~T))+I[14]+2878612391&4294967295,v=R+(E<<15&4294967295|E>>>17),E=T+(R^(v|~_))+I[5]+4237533241&4294967295,T=v+(E<<21&4294967295|E>>>11),E=_+(v^(T|~R))+I[12]+1700485571&4294967295,_=T+(E<<6&4294967295|E>>>26),E=R+(T^(_|~v))+I[3]+2399980690&4294967295,R=_+(E<<10&4294967295|E>>>22),E=v+(_^(R|~T))+I[10]+4293915773&4294967295,v=R+(E<<15&4294967295|E>>>17),E=T+(R^(v|~_))+I[1]+2240044497&4294967295,T=v+(E<<21&4294967295|E>>>11),E=_+(v^(T|~R))+I[8]+1873313359&4294967295,_=T+(E<<6&4294967295|E>>>26),E=R+(T^(_|~v))+I[15]+4264355552&4294967295,R=_+(E<<10&4294967295|E>>>22),E=v+(_^(R|~T))+I[6]+2734768916&4294967295,v=R+(E<<15&4294967295|E>>>17),E=T+(R^(v|~_))+I[13]+1309151649&4294967295,T=v+(E<<21&4294967295|E>>>11),E=_+(v^(T|~R))+I[4]+4149444226&4294967295,_=T+(E<<6&4294967295|E>>>26),E=R+(T^(_|~v))+I[11]+3174756917&4294967295,R=_+(E<<10&4294967295|E>>>22),E=v+(_^(R|~T))+I[2]+718787259&4294967295,v=R+(E<<15&4294967295|E>>>17),E=T+(R^(v|~_))+I[9]+3951481745&4294967295,w.g[0]=w.g[0]+_&4294967295,w.g[1]=w.g[1]+(v+(E<<21&4294967295|E>>>11))&4294967295,w.g[2]=w.g[2]+v&4294967295,w.g[3]=w.g[3]+R&4294967295}r.prototype.v=function(w,_){_===void 0&&(_=w.length);const T=_-this.blockSize,I=this.C;let v=this.h,R=0;for(;R<_;){if(v==0)for(;R<=T;)s(this,w,R),R+=this.blockSize;if(typeof w=="string"){for(;R<_;)if(I[v++]=w.charCodeAt(R++),v==this.blockSize){s(this,I),v=0;break}}else for(;R<_;)if(I[v++]=w[R++],v==this.blockSize){s(this,I),v=0;break}}this.h=v,this.o+=_},r.prototype.A=function(){var w=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);w[0]=128;for(var _=1;_<w.length-8;++_)w[_]=0;_=this.o*8;for(var T=w.length-8;T<w.length;++T)w[T]=_&255,_/=256;for(this.v(w),w=Array(16),_=0,T=0;T<4;++T)for(let I=0;I<32;I+=8)w[_++]=this.g[T]>>>I&255;return w};function i(w,_){var T=c;return Object.prototype.hasOwnProperty.call(T,w)?T[w]:T[w]=_(w)}function a(w,_){this.h=_;const T=[];let I=!0;for(let v=w.length-1;v>=0;v--){const R=w[v]|0;I&&R==_||(T[v]=R,I=!1)}this.g=T}var c={};function u(w){return-128<=w&&w<128?i(w,function(_){return new a([_|0],_<0?-1:0)}):new a([w|0],w<0?-1:0)}function f(w){if(isNaN(w)||!isFinite(w))return g;if(w<0)return B(f(-w));const _=[];let T=1;for(let I=0;w>=T;I++)_[I]=w/T|0,T*=4294967296;return new a(_,0)}function d(w,_){if(w.length==0)throw Error("number format error: empty string");if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(w.charAt(0)=="-")return B(d(w.substring(1),_));if(w.indexOf("-")>=0)throw Error('number format error: interior "-" character');const T=f(Math.pow(_,8));let I=g;for(let R=0;R<w.length;R+=8){var v=Math.min(8,w.length-R);const E=parseInt(w.substring(R,R+v),_);v<8?(v=f(Math.pow(_,v)),I=I.j(v).add(f(E))):(I=I.j(T),I=I.add(f(E)))}return I}var g=u(0),m=u(1),b=u(16777216);e=a.prototype,e.m=function(){if(F(this))return-B(this).m();let w=0,_=1;for(let T=0;T<this.g.length;T++){const I=this.i(T);w+=(I>=0?I:4294967296+I)*_,_*=4294967296}return w},e.toString=function(w){if(w=w||10,w<2||36<w)throw Error("radix out of range: "+w);if(x(this))return"0";if(F(this))return"-"+B(this).toString(w);const _=f(Math.pow(w,6));var T=this;let I="";for(;;){const v=G(T,_).g;T=K(T,v.j(_));let R=((T.g.length>0?T.g[0]:T.h)>>>0).toString(w);if(T=v,x(T))return R+I;for(;R.length<6;)R="0"+R;I=R+I}},e.i=function(w){return w<0?0:w<this.g.length?this.g[w]:this.h};function x(w){if(w.h!=0)return!1;for(let _=0;_<w.g.length;_++)if(w.g[_]!=0)return!1;return!0}function F(w){return w.h==-1}e.l=function(w){return w=K(this,w),F(w)?-1:x(w)?0:1};function B(w){const _=w.g.length,T=[];for(let I=0;I<_;I++)T[I]=~w.g[I];return new a(T,~w.h).add(m)}e.abs=function(){return F(this)?B(this):this},e.add=function(w){const _=Math.max(this.g.length,w.g.length),T=[];let I=0;for(let v=0;v<=_;v++){let R=I+(this.i(v)&65535)+(w.i(v)&65535),E=(R>>>16)+(this.i(v)>>>16)+(w.i(v)>>>16);I=E>>>16,R&=65535,E&=65535,T[v]=E<<16|R}return new a(T,T[T.length-1]&-2147483648?-1:0)};function K(w,_){return w.add(B(_))}e.j=function(w){if(x(this)||x(w))return g;if(F(this))return F(w)?B(this).j(B(w)):B(B(this).j(w));if(F(w))return B(this.j(B(w)));if(this.l(b)<0&&w.l(b)<0)return f(this.m()*w.m());const _=this.g.length+w.g.length,T=[];for(var I=0;I<2*_;I++)T[I]=0;for(I=0;I<this.g.length;I++)for(let v=0;v<w.g.length;v++){const R=this.i(I)>>>16,E=this.i(I)&65535,Ft=w.i(v)>>>16,Ie=w.i(v)&65535;T[2*I+2*v]+=E*Ie,z(T,2*I+2*v),T[2*I+2*v+1]+=R*Ie,z(T,2*I+2*v+1),T[2*I+2*v+1]+=E*Ft,z(T,2*I+2*v+1),T[2*I+2*v+2]+=R*Ft,z(T,2*I+2*v+2)}for(w=0;w<_;w++)T[w]=T[2*w+1]<<16|T[2*w];for(w=_;w<2*_;w++)T[w]=0;return new a(T,0)};function z(w,_){for(;(w[_]&65535)!=w[_];)w[_+1]+=w[_]>>>16,w[_]&=65535,_++}function X(w,_){this.g=w,this.h=_}function G(w,_){if(x(_))throw Error("division by zero");if(x(w))return new X(g,g);if(F(w))return _=G(B(w),_),new X(B(_.g),B(_.h));if(F(_))return _=G(w,B(_)),new X(B(_.g),_.h);if(w.g.length>30){if(F(w)||F(_))throw Error("slowDivide_ only works with positive integers.");for(var T=m,I=_;I.l(w)<=0;)T=ht(T),I=ht(I);var v=yt(T,1),R=yt(I,1);for(I=yt(I,2),T=yt(T,2);!x(I);){var E=R.add(I);E.l(w)<=0&&(v=v.add(T),R=E),I=yt(I,1),T=yt(T,1)}return _=K(w,v.j(_)),new X(v,_)}for(v=g;w.l(_)>=0;){for(T=Math.max(1,Math.floor(w.m()/_.m())),I=Math.ceil(Math.log(T)/Math.LN2),I=I<=48?1:Math.pow(2,I-48),R=f(T),E=R.j(_);F(E)||E.l(w)>0;)T-=I,R=f(T),E=R.j(_);x(R)&&(R=m),v=v.add(R),w=K(w,E)}return new X(v,w)}e.B=function(w){return G(this,w).h},e.and=function(w){const _=Math.max(this.g.length,w.g.length),T=[];for(let I=0;I<_;I++)T[I]=this.i(I)&w.i(I);return new a(T,this.h&w.h)},e.or=function(w){const _=Math.max(this.g.length,w.g.length),T=[];for(let I=0;I<_;I++)T[I]=this.i(I)|w.i(I);return new a(T,this.h|w.h)},e.xor=function(w){const _=Math.max(this.g.length,w.g.length),T=[];for(let I=0;I<_;I++)T[I]=this.i(I)^w.i(I);return new a(T,this.h^w.h)};function ht(w){const _=w.g.length+1,T=[];for(let I=0;I<_;I++)T[I]=w.i(I)<<1|w.i(I-1)>>>31;return new a(T,w.h)}function yt(w,_){const T=_>>5;_%=32;const I=w.g.length-T,v=[];for(let R=0;R<I;R++)v[R]=_>0?w.i(R+T)>>>_|w.i(R+T+1)<<32-_:w.i(R+T);return new a(v,w.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,ed=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=f,a.fromString=d,vn=a}).apply(typeof xu<"u"?xu:typeof self<"u"?self:typeof window<"u"?window:{});var ii=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var nd,as,rd,gi,Ca,sd,id,od;(function(){var e,t=Object.defineProperty;function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof ii=="object"&&ii];for(var l=0;l<o.length;++l){var h=o[l];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=n(this);function s(o,l){if(l)t:{var h=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var S=o[p];if(!(S in h))break t;h=h[S]}o=o[o.length-1],p=h[o],l=l(p),l!=p&&l!=null&&t(h,o,{configurable:!0,writable:!0,value:l})}}s("Symbol.dispose",function(o){return o||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(o){return o||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(o){return o||function(l){var h=[],p;for(p in l)Object.prototype.hasOwnProperty.call(l,p)&&h.push([p,l[p]]);return h}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},a=this||self;function c(o){var l=typeof o;return l=="object"&&o!=null||l=="function"}function u(o,l,h){return o.call.apply(o.bind,arguments)}function f(o,l,h){return f=u,f.apply(null,arguments)}function d(o,l){var h=Array.prototype.slice.call(arguments,1);return function(){var p=h.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function g(o,l){function h(){}h.prototype=l.prototype,o.Z=l.prototype,o.prototype=new h,o.prototype.constructor=o,o.Ob=function(p,S,C){for(var j=Array(arguments.length-2),it=2;it<arguments.length;it++)j[it-2]=arguments[it];return l.prototype[S].apply(p,j)}}var m=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?o=>o&&AsyncContext.Snapshot.wrap(o):o=>o;function b(o){const l=o.length;if(l>0){const h=Array(l);for(let p=0;p<l;p++)h[p]=o[p];return h}return[]}function x(o,l){for(let p=1;p<arguments.length;p++){const S=arguments[p];var h=typeof S;if(h=h!="object"?h:S?Array.isArray(S)?"array":h:"null",h=="array"||h=="object"&&typeof S.length=="number"){h=o.length||0;const C=S.length||0;o.length=h+C;for(let j=0;j<C;j++)o[h+j]=S[j]}else o.push(S)}}class F{constructor(l,h){this.i=l,this.j=h,this.h=0,this.g=null}get(){let l;return this.h>0?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function B(o){a.setTimeout(()=>{throw o},0)}function K(){var o=w;let l=null;return o.g&&(l=o.g,o.g=o.g.next,o.g||(o.h=null),l.next=null),l}class z{constructor(){this.h=this.g=null}add(l,h){const p=X.get();p.set(l,h),this.h?this.h.next=p:this.g=p,this.h=p}}var X=new F(()=>new G,o=>o.reset());class G{constructor(){this.next=this.g=this.h=null}set(l,h){this.h=l,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let ht,yt=!1,w=new z,_=()=>{const o=Promise.resolve(void 0);ht=()=>{o.then(T)}};function T(){for(var o;o=K();){try{o.h.call(o.g)}catch(h){B(h)}var l=X;l.j(o),l.h<100&&(l.h++,o.next=l.g,l.g=o)}yt=!1}function I(){this.u=this.u,this.C=this.C}I.prototype.u=!1,I.prototype.dispose=function(){this.u||(this.u=!0,this.N())},I.prototype[Symbol.dispose]=function(){this.dispose()},I.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function v(o,l){this.type=o,this.g=this.target=l,this.defaultPrevented=!1}v.prototype.h=function(){this.defaultPrevented=!0};var R=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var o=!1,l=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};a.addEventListener("test",h,l),a.removeEventListener("test",h,l)}catch{}return o}();function E(o){return/^[\s\xa0]*$/.test(o)}function Ft(o,l){v.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o&&this.init(o,l)}g(Ft,v),Ft.prototype.init=function(o,l){const h=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;this.target=o.target||o.srcElement,this.g=l,l=o.relatedTarget,l||(h=="mouseover"?l=o.fromElement:h=="mouseout"&&(l=o.toElement)),this.relatedTarget=l,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=o.pointerType,this.state=o.state,this.i=o,o.defaultPrevented&&Ft.Z.h.call(this)},Ft.prototype.h=function(){Ft.Z.h.call(this);const o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Ie="closure_listenable_"+(Math.random()*1e6|0),Ht=0;function wt(o,l,h,p,S){this.listener=o,this.proxy=null,this.src=l,this.type=h,this.capture=!!p,this.ha=S,this.key=++Ht,this.da=this.fa=!1}function dt(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Ee(o,l,h){for(const p in o)l.call(h,o[p],p,o)}function sr(o,l){for(const h in o)l.call(void 0,o[h],h,o)}function De(o){const l={};for(const h in o)l[h]=o[h];return l}const de="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ur(o,l){let h,p;for(let S=1;S<arguments.length;S++){p=arguments[S];for(h in p)o[h]=p[h];for(let C=0;C<de.length;C++)h=de[C],Object.prototype.hasOwnProperty.call(p,h)&&(o[h]=p[h])}}function ir(o){this.src=o,this.g={},this.h=0}ir.prototype.add=function(o,l,h,p,S){const C=o.toString();o=this.g[C],o||(o=this.g[C]=[],this.h++);const j=Ge(o,l,p,S);return j>-1?(l=o[j],h||(l.fa=!1)):(l=new wt(l,this.src,C,!!p,S),l.fa=h,o.push(l)),l};function Br(o,l){const h=l.type;if(h in o.g){var p=o.g[h],S=Array.prototype.indexOf.call(p,l,void 0),C;(C=S>=0)&&Array.prototype.splice.call(p,S,1),C&&(dt(l),o.g[h].length==0&&(delete o.g[h],o.h--))}}function Ge(o,l,h,p){for(let S=0;S<o.length;++S){const C=o[S];if(!C.da&&C.listener==l&&C.capture==!!h&&C.ha==p)return S}return-1}var on="closure_lm_"+(Math.random()*1e6|0),On={};function jr(o,l,h,p,S){if(p&&p.once)return or(o,l,h,p,S);if(Array.isArray(l)){for(let C=0;C<l.length;C++)jr(o,l[C],h,p,S);return null}return h=$(h),o&&o[Ie]?o.J(l,h,c(p)?!!p.capture:!!p,S):We(o,l,h,!1,p,S)}function We(o,l,h,p,S,C){if(!l)throw Error("Invalid event type");const j=c(S)?!!S.capture:!!S;let it=N(o);if(it||(o[on]=it=new ir(o)),h=it.add(l,h,p,j,C),h.proxy)return h;if(p=$r(),h.proxy=p,p.src=o,p.listener=h,o.addEventListener)R||(S=j),S===void 0&&(S=!1),o.addEventListener(l.toString(),p,S);else if(o.attachEvent)o.attachEvent(P(l.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return h}function $r(){function o(h){return l.call(o.src,o.listener,h)}const l=U;return o}function or(o,l,h,p,S){if(Array.isArray(l)){for(let C=0;C<l.length;C++)or(o,l[C],h,p,S);return null}return h=$(h),o&&o[Ie]?o.K(l,h,c(p)?!!p.capture:!!p,S):We(o,l,h,!0,p,S)}function y(o,l,h,p,S){if(Array.isArray(l))for(var C=0;C<l.length;C++)y(o,l[C],h,p,S);else p=c(p)?!!p.capture:!!p,h=$(h),o&&o[Ie]?(o=o.i,C=String(l).toString(),C in o.g&&(l=o.g[C],h=Ge(l,h,p,S),h>-1&&(dt(l[h]),Array.prototype.splice.call(l,h,1),l.length==0&&(delete o.g[C],o.h--)))):o&&(o=N(o))&&(l=o.g[l.toString()],o=-1,l&&(o=Ge(l,h,p,S)),(h=o>-1?l[o]:null)&&A(h))}function A(o){if(typeof o!="number"&&o&&!o.da){var l=o.src;if(l&&l[Ie])Br(l.i,o);else{var h=o.type,p=o.proxy;l.removeEventListener?l.removeEventListener(h,p,o.capture):l.detachEvent?l.detachEvent(P(h),p):l.addListener&&l.removeListener&&l.removeListener(p),(h=N(l))?(Br(h,o),h.h==0&&(h.src=null,l[on]=null)):dt(o)}}}function P(o){return o in On?On[o]:On[o]="on"+o}function U(o,l){if(o.da)o=!0;else{l=new Ft(l,this);const h=o.listener,p=o.ha||o.src;o.fa&&A(o),o=h.call(p,l)}return o}function N(o){return o=o[on],o instanceof ir?o:null}var M="__closure_events_fn_"+(Math.random()*1e9>>>0);function $(o){return typeof o=="function"?o:(o[M]||(o[M]=function(l){return o.handleEvent(l)}),o[M])}function L(){I.call(this),this.i=new ir(this),this.M=this,this.G=null}g(L,I),L.prototype[Ie]=!0,L.prototype.removeEventListener=function(o,l,h,p){y(this,o,l,h,p)};function k(o,l){var h,p=o.G;if(p)for(h=[];p;p=p.G)h.push(p);if(o=o.M,p=l.type||l,typeof l=="string")l=new v(l,o);else if(l instanceof v)l.target=l.target||o;else{var S=l;l=new v(p,o),Ur(l,S)}S=!0;let C,j;if(h)for(j=h.length-1;j>=0;j--)C=l.g=h[j],S=O(C,p,!0,l)&&S;if(C=l.g=o,S=O(C,p,!0,l)&&S,S=O(C,p,!1,l)&&S,h)for(j=0;j<h.length;j++)C=l.g=h[j],S=O(C,p,!1,l)&&S}L.prototype.N=function(){if(L.Z.N.call(this),this.i){var o=this.i;for(const l in o.g){const h=o.g[l];for(let p=0;p<h.length;p++)dt(h[p]);delete o.g[l],o.h--}}this.G=null},L.prototype.J=function(o,l,h,p){return this.i.add(String(o),l,!1,h,p)},L.prototype.K=function(o,l,h,p){return this.i.add(String(o),l,!0,h,p)};function O(o,l,h,p){if(l=o.i.g[String(l)],!l)return!0;l=l.concat();let S=!0;for(let C=0;C<l.length;++C){const j=l[C];if(j&&!j.da&&j.capture==h){const it=j.listener,Mt=j.ha||j.src;j.fa&&Br(o.i,j),S=it.call(Mt,p)!==!1&&S}}return S&&!p.defaultPrevented}function J(o,l){if(typeof o!="function")if(o&&typeof o.handleEvent=="function")o=f(o.handleEvent,o);else throw Error("Invalid listener argument");return Number(l)>2147483647?-1:a.setTimeout(o,l||0)}function q(o){o.g=J(()=>{o.g=null,o.i&&(o.i=!1,q(o))},o.l);const l=o.h;o.h=null,o.m.apply(null,l)}class Q extends I{constructor(l,h){super(),this.m=l,this.l=h,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:q(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Z(o){I.call(this),this.h=o,this.g={}}g(Z,I);var ot=[];function _t(o){Ee(o.g,function(l,h){this.g.hasOwnProperty(h)&&A(l)},o),o.g={}}Z.prototype.N=function(){Z.Z.N.call(this),_t(this)},Z.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ft=a.JSON.stringify,Yt=a.JSON.parse,Ut=class{stringify(o){return a.JSON.stringify(o,void 0)}parse(o){return a.JSON.parse(o,void 0)}};function le(){}function Xt(){}var Ae={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function ar(){v.call(this,"d")}g(ar,v);function Kt(){v.call(this,"c")}g(Kt,v);var Bt={},qr=null;function kn(){return qr=qr||new L}Bt.Ia="serverreachability";function rl(o){v.call(this,Bt.Ia,o)}g(rl,v);function zr(o){const l=kn();k(l,new rl(l))}Bt.STAT_EVENT="statevent";function sl(o,l){v.call(this,Bt.STAT_EVENT,o),this.stat=l}g(sl,v);function se(o){const l=kn();k(l,new sl(l,o))}Bt.Ja="timingevent";function il(o,l){v.call(this,Bt.Ja,o),this.size=l}g(il,v);function Hr(o,l){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){o()},l)}function Kr(){this.g=!0}Kr.prototype.ua=function(){this.g=!1};function sg(o,l,h,p,S,C){o.info(function(){if(o.g)if(C){var j="",it=C.split("&");for(let Et=0;Et<it.length;Et++){var Mt=it[Et].split("=");if(Mt.length>1){const jt=Mt[0];Mt=Mt[1];const Ne=jt.split("_");j=Ne.length>=2&&Ne[1]=="type"?j+(jt+"="+Mt+"&"):j+(jt+"=redacted&")}}}else j=null;else j=C;return"XMLHTTP REQ ("+p+") [attempt "+S+"]: "+l+`
`+h+`
`+j})}function ig(o,l,h,p,S,C,j){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+S+"]: "+l+`
`+h+`
`+C+" "+j})}function cr(o,l,h,p){o.info(function(){return"XMLHTTP TEXT ("+l+"): "+ag(o,h)+(p?" "+p:"")})}function og(o,l){o.info(function(){return"TIMEOUT: "+l})}Kr.prototype.info=function(){};function ag(o,l){if(!o.g)return l;if(!l)return null;try{const C=JSON.parse(l);if(C){for(o=0;o<C.length;o++)if(Array.isArray(C[o])){var h=C[o];if(!(h.length<2)){var p=h[1];if(Array.isArray(p)&&!(p.length<1)){var S=p[0];if(S!="noop"&&S!="stop"&&S!="close")for(let j=1;j<p.length;j++)p[j]=""}}}}return ft(C)}catch{return l}}var Ks={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},ol={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},al;function Io(){}g(Io,le),Io.prototype.g=function(){return new XMLHttpRequest},al=new Io;function Gr(o){return encodeURIComponent(String(o))}function cg(o){var l=1;o=o.split(":");const h=[];for(;l>0&&o.length;)h.push(o.shift()),l--;return o.length&&h.push(o.join(":")),h}function an(o,l,h,p){this.j=o,this.i=l,this.l=h,this.S=p||1,this.V=new Z(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new cl}function cl(){this.i=null,this.g="",this.h=!1}var ll={},Ao={};function bo(o,l,h){o.M=1,o.A=Ws(xe(l)),o.u=h,o.R=!0,ul(o,null)}function ul(o,l){o.F=Date.now(),Gs(o),o.B=xe(o.A);var h=o.B,p=o.S;Array.isArray(p)||(p=[String(p)]),Il(h.i,"t",p),o.C=0,h=o.j.L,o.h=new cl,o.g=jl(o.j,h?l:null,!o.u),o.P>0&&(o.O=new Q(f(o.Y,o,o.g),o.P)),l=o.V,h=o.g,p=o.ba;var S="readystatechange";Array.isArray(S)||(S&&(ot[0]=S.toString()),S=ot);for(let C=0;C<S.length;C++){const j=jr(h,S[C],p||l.handleEvent,!1,l.h||l);if(!j)break;l.g[j.key]=j}l=o.J?De(o.J):{},o.u?(o.v||(o.v="POST"),l["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.B,o.v,o.u,l)):(o.v="GET",o.g.ea(o.B,o.v,null,l)),zr(),sg(o.i,o.v,o.B,o.l,o.S,o.u)}an.prototype.ba=function(o){o=o.target;const l=this.O;l&&un(o)==3?l.j():this.Y(o)},an.prototype.Y=function(o){try{if(o==this.g)t:{const it=un(this.g),Mt=this.g.ya(),Et=this.g.ca();if(!(it<3)&&(it!=3||this.g&&(this.h.h||this.g.la()||Vl(this.g)))){this.K||it!=4||Mt==7||(Mt==8||Et<=0?zr(3):zr(2)),So(this);var l=this.g.ca();this.X=l;var h=lg(this);if(this.o=l==200,ig(this.i,this.v,this.B,this.l,this.S,it,l),this.o){if(this.U&&!this.L){e:{if(this.g){var p,S=this.g;if((p=S.g?S.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!E(p)){var C=p;break e}}C=null}if(o=C)cr(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Ro(this,o);else{this.o=!1,this.m=3,se(12),Ln(this),Wr(this);break t}}if(this.R){o=!0;let jt;for(;!this.K&&this.C<h.length;)if(jt=ug(this,h),jt==Ao){it==4&&(this.m=4,se(14),o=!1),cr(this.i,this.l,null,"[Incomplete Response]");break}else if(jt==ll){this.m=4,se(15),cr(this.i,this.l,h,"[Invalid Chunk]"),o=!1;break}else cr(this.i,this.l,jt,null),Ro(this,jt);if(hl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),it!=4||h.length!=0||this.h.h||(this.m=1,se(16),o=!1),this.o=this.o&&o,!o)cr(this.i,this.l,h,"[Invalid Chunked Response]"),Ln(this),Wr(this);else if(h.length>0&&!this.W){this.W=!0;var j=this.j;j.g==this&&j.aa&&!j.P&&(j.j.info("Great, no buffering proxy detected. Bytes received: "+h.length),Oo(j),j.P=!0,se(11))}}else cr(this.i,this.l,h,null),Ro(this,h);it==4&&Ln(this),this.o&&!this.K&&(it==4?Ll(this.j,this):(this.o=!1,Gs(this)))}else Ag(this.g),l==400&&h.indexOf("Unknown SID")>0?(this.m=3,se(12)):(this.m=0,se(13)),Ln(this),Wr(this)}}}catch{}finally{}};function lg(o){if(!hl(o))return o.g.la();const l=Vl(o.g);if(l==="")return"";let h="";const p=l.length,S=un(o.g)==4;if(!o.h.i){if(typeof TextDecoder>"u")return Ln(o),Wr(o),"";o.h.i=new a.TextDecoder}for(let C=0;C<p;C++)o.h.h=!0,h+=o.h.i.decode(l[C],{stream:!(S&&C==p-1)});return l.length=0,o.h.g+=h,o.C=0,o.h.g}function hl(o){return o.g?o.v=="GET"&&o.M!=2&&o.j.Aa:!1}function ug(o,l){var h=o.C,p=l.indexOf(`
`,h);return p==-1?Ao:(h=Number(l.substring(h,p)),isNaN(h)?ll:(p+=1,p+h>l.length?Ao:(l=l.slice(p,p+h),o.C=p+h,l)))}an.prototype.cancel=function(){this.K=!0,Ln(this)};function Gs(o){o.T=Date.now()+o.H,fl(o,o.H)}function fl(o,l){if(o.D!=null)throw Error("WatchDog timer not null");o.D=Hr(f(o.aa,o),l)}function So(o){o.D&&(a.clearTimeout(o.D),o.D=null)}an.prototype.aa=function(){this.D=null;const o=Date.now();o-this.T>=0?(og(this.i,this.B),this.M!=2&&(zr(),se(17)),Ln(this),this.m=2,Wr(this)):fl(this,this.T-o)};function Wr(o){o.j.I==0||o.K||Ll(o.j,o)}function Ln(o){So(o);var l=o.O;l&&typeof l.dispose=="function"&&l.dispose(),o.O=null,_t(o.V),o.g&&(l=o.g,o.g=null,l.abort(),l.dispose())}function Ro(o,l){try{var h=o.j;if(h.I!=0&&(h.g==o||Co(h.h,o))){if(!o.L&&Co(h.h,o)&&h.I==3){try{var p=h.Ba.g.parse(l)}catch{p=null}if(Array.isArray(p)&&p.length==3){var S=p;if(S[0]==0){t:if(!h.v){if(h.g)if(h.g.F+3e3<o.F)Zs(h),Xs(h);else break t;Mo(h),se(18)}}else h.xa=S[1],0<h.xa-h.K&&S[2]<37500&&h.F&&h.A==0&&!h.C&&(h.C=Hr(f(h.Va,h),6e3));gl(h.h)<=1&&h.ta&&(h.ta=void 0)}else Un(h,11)}else if((o.L||h.g==o)&&Zs(h),!E(l))for(S=h.Ba.g.parse(l),l=0;l<S.length;l++){let Et=S[l];const jt=Et[0];if(!(jt<=h.K))if(h.K=jt,Et=Et[1],h.I==2)if(Et[0]=="c"){h.M=Et[1],h.ba=Et[2];const Ne=Et[3];Ne!=null&&(h.ka=Ne,h.j.info("VER="+h.ka));const Bn=Et[4];Bn!=null&&(h.za=Bn,h.j.info("SVER="+h.za));const hn=Et[5];hn!=null&&typeof hn=="number"&&hn>0&&(p=1.5*hn,h.O=p,h.j.info("backChannelRequestTimeoutMs_="+p)),p=h;const fn=o.g;if(fn){const ei=fn.g?fn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ei){var C=p.h;C.g||ei.indexOf("spdy")==-1&&ei.indexOf("quic")==-1&&ei.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&(Po(C,C.h),C.h=null))}if(p.G){const ko=fn.g?fn.g.getResponseHeader("X-HTTP-Session-Id"):null;ko&&(p.wa=ko,It(p.J,p.G,ko))}}h.I=3,h.l&&h.l.ra(),h.aa&&(h.T=Date.now()-o.F,h.j.info("Handshake RTT: "+h.T+"ms")),p=h;var j=o;if(p.na=Bl(p,p.L?p.ba:null,p.W),j.L){ml(p.h,j);var it=j,Mt=p.O;Mt&&(it.H=Mt),it.D&&(So(it),Gs(it)),p.g=j}else Ol(p);h.i.length>0&&Js(h)}else Et[0]!="stop"&&Et[0]!="close"||Un(h,7);else h.I==3&&(Et[0]=="stop"||Et[0]=="close"?Et[0]=="stop"?Un(h,7):No(h):Et[0]!="noop"&&h.l&&h.l.qa(Et),h.A=0)}}zr(4)}catch{}}var hg=class{constructor(o,l){this.g=o,this.map=l}};function dl(o){this.l=o||10,a.PerformanceNavigationTiming?(o=a.performance.getEntriesByType("navigation"),o=o.length>0&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function pl(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function gl(o){return o.h?1:o.g?o.g.size:0}function Co(o,l){return o.h?o.h==l:o.g?o.g.has(l):!1}function Po(o,l){o.g?o.g.add(l):o.h=l}function ml(o,l){o.h&&o.h==l?o.h=null:o.g&&o.g.has(l)&&o.g.delete(l)}dl.prototype.cancel=function(){if(this.i=_l(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function _l(o){if(o.h!=null)return o.i.concat(o.h.G);if(o.g!=null&&o.g.size!==0){let l=o.i;for(const h of o.g.values())l=l.concat(h.G);return l}return b(o.i)}var yl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function fg(o,l){if(o){o=o.split("&");for(let h=0;h<o.length;h++){const p=o[h].indexOf("=");let S,C=null;p>=0?(S=o[h].substring(0,p),C=o[h].substring(p+1)):S=o[h],l(S,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function cn(o){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let l;o instanceof cn?(this.l=o.l,Qr(this,o.j),this.o=o.o,this.g=o.g,Yr(this,o.u),this.h=o.h,Vo(this,Al(o.i)),this.m=o.m):o&&(l=String(o).match(yl))?(this.l=!1,Qr(this,l[1]||"",!0),this.o=Xr(l[2]||""),this.g=Xr(l[3]||"",!0),Yr(this,l[4]),this.h=Xr(l[5]||"",!0),Vo(this,l[6]||"",!0),this.m=Xr(l[7]||"")):(this.l=!1,this.i=new Zr(null,this.l))}cn.prototype.toString=function(){const o=[];var l=this.j;l&&o.push(Jr(l,El,!0),":");var h=this.g;return(h||l=="file")&&(o.push("//"),(l=this.o)&&o.push(Jr(l,El,!0),"@"),o.push(Gr(h).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.u,h!=null&&o.push(":",String(h))),(h=this.h)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(Jr(h,h.charAt(0)=="/"?gg:pg,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",Jr(h,_g)),o.join("")},cn.prototype.resolve=function(o){const l=xe(this);let h=!!o.j;h?Qr(l,o.j):h=!!o.o,h?l.o=o.o:h=!!o.g,h?l.g=o.g:h=o.u!=null;var p=o.h;if(h)Yr(l,o.u);else if(h=!!o.h){if(p.charAt(0)!="/")if(this.g&&!this.h)p="/"+p;else{var S=l.h.lastIndexOf("/");S!=-1&&(p=l.h.slice(0,S+1)+p)}if(S=p,S==".."||S==".")p="";else if(S.indexOf("./")!=-1||S.indexOf("/.")!=-1){p=S.lastIndexOf("/",0)==0,S=S.split("/");const C=[];for(let j=0;j<S.length;){const it=S[j++];it=="."?p&&j==S.length&&C.push(""):it==".."?((C.length>1||C.length==1&&C[0]!="")&&C.pop(),p&&j==S.length&&C.push("")):(C.push(it),p=!0)}p=C.join("/")}else p=S}return h?l.h=p:h=o.i.toString()!=="",h?Vo(l,Al(o.i)):h=!!o.m,h&&(l.m=o.m),l};function xe(o){return new cn(o)}function Qr(o,l,h){o.j=h?Xr(l,!0):l,o.j&&(o.j=o.j.replace(/:$/,""))}function Yr(o,l){if(l){if(l=Number(l),isNaN(l)||l<0)throw Error("Bad port number "+l);o.u=l}else o.u=null}function Vo(o,l,h){l instanceof Zr?(o.i=l,yg(o.i,o.l)):(h||(l=Jr(l,mg)),o.i=new Zr(l,o.l))}function It(o,l,h){o.i.set(l,h)}function Ws(o){return It(o,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),o}function Xr(o,l){return o?l?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Jr(o,l,h){return typeof o=="string"?(o=encodeURI(o).replace(l,dg),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function dg(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var El=/[#\/\?@]/g,pg=/[#\?:]/g,gg=/[#\?]/g,mg=/[#\?@]/g,_g=/#/g;function Zr(o,l){this.h=this.g=null,this.i=o||null,this.j=!!l}function Fn(o){o.g||(o.g=new Map,o.h=0,o.i&&fg(o.i,function(l,h){o.add(decodeURIComponent(l.replace(/\+/g," ")),h)}))}e=Zr.prototype,e.add=function(o,l){Fn(this),this.i=null,o=lr(this,o);let h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(l),this.h+=1,this};function Tl(o,l){Fn(o),l=lr(o,l),o.g.has(l)&&(o.i=null,o.h-=o.g.get(l).length,o.g.delete(l))}function vl(o,l){return Fn(o),l=lr(o,l),o.g.has(l)}e.forEach=function(o,l){Fn(this),this.g.forEach(function(h,p){h.forEach(function(S){o.call(l,S,p,this)},this)},this)};function wl(o,l){Fn(o);let h=[];if(typeof l=="string")vl(o,l)&&(h=h.concat(o.g.get(lr(o,l))));else for(o=Array.from(o.g.values()),l=0;l<o.length;l++)h=h.concat(o[l]);return h}e.set=function(o,l){return Fn(this),this.i=null,o=lr(this,o),vl(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[l]),this.h+=1,this},e.get=function(o,l){return o?(o=wl(this,o),o.length>0?String(o[0]):l):l};function Il(o,l,h){Tl(o,l),h.length>0&&(o.i=null,o.g.set(lr(o,l),b(h)),o.h+=h.length)}e.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],l=Array.from(this.g.keys());for(let p=0;p<l.length;p++){var h=l[p];const S=Gr(h);h=wl(this,h);for(let C=0;C<h.length;C++){let j=S;h[C]!==""&&(j+="="+Gr(h[C])),o.push(j)}}return this.i=o.join("&")};function Al(o){const l=new Zr;return l.i=o.i,o.g&&(l.g=new Map(o.g),l.h=o.h),l}function lr(o,l){return l=String(l),o.j&&(l=l.toLowerCase()),l}function yg(o,l){l&&!o.j&&(Fn(o),o.i=null,o.g.forEach(function(h,p){const S=p.toLowerCase();p!=S&&(Tl(this,p),Il(this,S,h))},o)),o.j=l}function Eg(o,l){const h=new Kr;if(a.Image){const p=new Image;p.onload=d(ln,h,"TestLoadImage: loaded",!0,l,p),p.onerror=d(ln,h,"TestLoadImage: error",!1,l,p),p.onabort=d(ln,h,"TestLoadImage: abort",!1,l,p),p.ontimeout=d(ln,h,"TestLoadImage: timeout",!1,l,p),a.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else l(!1)}function Tg(o,l){const h=new Kr,p=new AbortController,S=setTimeout(()=>{p.abort(),ln(h,"TestPingServer: timeout",!1,l)},1e4);fetch(o,{signal:p.signal}).then(C=>{clearTimeout(S),C.ok?ln(h,"TestPingServer: ok",!0,l):ln(h,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(S),ln(h,"TestPingServer: error",!1,l)})}function ln(o,l,h,p,S){try{S&&(S.onload=null,S.onerror=null,S.onabort=null,S.ontimeout=null),p(h)}catch{}}function vg(){this.g=new Ut}function Do(o){this.i=o.Sb||null,this.h=o.ab||!1}g(Do,le),Do.prototype.g=function(){return new Qs(this.i,this.h)};function Qs(o,l){L.call(this),this.H=o,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}g(Qs,L),e=Qs.prototype,e.open=function(o,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=o,this.D=l,this.readyState=1,es(this)},e.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const l={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};o&&(l.body=o),(this.H||a).fetch(new Request(this.D,l)).then(this.Pa.bind(this),this.ga.bind(this))},e.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,ts(this)),this.readyState=0},e.Pa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,es(this)),this.g&&(this.readyState=3,es(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;bl(this)}else o.text().then(this.Oa.bind(this),this.ga.bind(this))};function bl(o){o.j.read().then(o.Ma.bind(o)).catch(o.ga.bind(o))}e.Ma=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var l=o.value?o.value:new Uint8Array(0);(l=this.B.decode(l,{stream:!o.done}))&&(this.response=this.responseText+=l)}o.done?ts(this):es(this),this.readyState==3&&bl(this)}},e.Oa=function(o){this.g&&(this.response=this.responseText=o,ts(this))},e.Na=function(o){this.g&&(this.response=o,ts(this))},e.ga=function(){this.g&&ts(this)};function ts(o){o.readyState=4,o.l=null,o.j=null,o.B=null,es(o)}e.setRequestHeader=function(o,l){this.A.append(o,l)},e.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},e.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],l=this.h.entries();for(var h=l.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=l.next();return o.join(`\r
`)};function es(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Qs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Sl(o){let l="";return Ee(o,function(h,p){l+=p,l+=":",l+=h,l+=`\r
`}),l}function xo(o,l,h){t:{for(p in h){var p=!1;break t}p=!0}p||(h=Sl(h),typeof o=="string"?h!=null&&Gr(h):It(o,l,h))}function Pt(o){L.call(this),this.headers=new Map,this.L=o||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}g(Pt,L);var wg=/^https?$/i,Ig=["POST","PUT"];e=Pt.prototype,e.Fa=function(o){this.H=o},e.ea=function(o,l,h,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);l=l?l.toUpperCase():"GET",this.D=o,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():al.g(),this.g.onreadystatechange=m(f(this.Ca,this));try{this.B=!0,this.g.open(l,String(o),!0),this.B=!1}catch(C){Rl(this,C);return}if(o=h||"",h=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var S in p)h.set(S,p[S]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const C of p.keys())h.set(C,p.get(C));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(h.keys()).find(C=>C.toLowerCase()=="content-type"),S=a.FormData&&o instanceof a.FormData,!(Array.prototype.indexOf.call(Ig,l,void 0)>=0)||p||S||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[C,j]of h)this.g.setRequestHeader(C,j);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(o),this.v=!1}catch(C){Rl(this,C)}};function Rl(o,l){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=l,o.o=5,Cl(o),Ys(o)}function Cl(o){o.A||(o.A=!0,k(o,"complete"),k(o,"error"))}e.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=o||7,k(this,"complete"),k(this,"abort"),Ys(this))},e.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ys(this,!0)),Pt.Z.N.call(this)},e.Ca=function(){this.u||(this.B||this.v||this.j?Pl(this):this.Xa())},e.Xa=function(){Pl(this)};function Pl(o){if(o.h&&typeof i<"u"){if(o.v&&un(o)==4)setTimeout(o.Ca.bind(o),0);else if(k(o,"readystatechange"),un(o)==4){o.h=!1;try{const C=o.ca();t:switch(C){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break t;default:l=!1}var h;if(!(h=l)){var p;if(p=C===0){let j=String(o.D).match(yl)[1]||null;!j&&a.self&&a.self.location&&(j=a.self.location.protocol.slice(0,-1)),p=!wg.test(j?j.toLowerCase():"")}h=p}if(h)k(o,"complete"),k(o,"success");else{o.o=6;try{var S=un(o)>2?o.g.statusText:""}catch{S=""}o.l=S+" ["+o.ca()+"]",Cl(o)}}finally{Ys(o)}}}}function Ys(o,l){if(o.g){o.m&&(clearTimeout(o.m),o.m=null);const h=o.g;o.g=null,l||k(o,"ready");try{h.onreadystatechange=null}catch{}}}e.isActive=function(){return!!this.g};function un(o){return o.g?o.g.readyState:0}e.ca=function(){try{return un(this)>2?this.g.status:-1}catch{return-1}},e.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},e.La=function(o){if(this.g){var l=this.g.responseText;return o&&l.indexOf(o)==0&&(l=l.substring(o.length)),Yt(l)}};function Vl(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.F){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Ag(o){const l={};o=(o.g&&un(o)>=2&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(E(o[p]))continue;var h=cg(o[p]);const S=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const C=l[S]||[];l[S]=C,C.push(h)}sr(l,function(p){return p.join(", ")})}e.ya=function(){return this.o},e.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function ns(o,l,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||l}function Dl(o){this.za=0,this.i=[],this.j=new Kr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=ns("failFast",!1,o),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=ns("baseRetryDelayMs",5e3,o),this.Za=ns("retryDelaySeedMs",1e4,o),this.Ta=ns("forwardChannelMaxRetries",2,o),this.va=ns("forwardChannelRequestTimeoutMs",2e4,o),this.ma=o&&o.xmlHttpFactory||void 0,this.Ua=o&&o.Rb||void 0,this.Aa=o&&o.useFetchStreams||!1,this.O=void 0,this.L=o&&o.supportsCrossDomainXhr||!1,this.M="",this.h=new dl(o&&o.concurrentRequestLimit),this.Ba=new vg,this.S=o&&o.fastHandshake||!1,this.R=o&&o.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=o&&o.Pb||!1,o&&o.ua&&this.j.ua(),o&&o.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&o&&o.detectBufferingProxy||!1,this.ia=void 0,o&&o.longPollingTimeout&&o.longPollingTimeout>0&&(this.ia=o.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}e=Dl.prototype,e.ka=8,e.I=1,e.connect=function(o,l,h,p){se(0),this.W=o,this.H=l||{},h&&p!==void 0&&(this.H.OSID=h,this.H.OAID=p),this.F=this.X,this.J=Bl(this,null,this.W),Js(this)};function No(o){if(xl(o),o.I==3){var l=o.V++,h=xe(o.J);if(It(h,"SID",o.M),It(h,"RID",l),It(h,"TYPE","terminate"),rs(o,h),l=new an(o,o.j,l),l.M=2,l.A=Ws(xe(h)),h=!1,a.navigator&&a.navigator.sendBeacon)try{h=a.navigator.sendBeacon(l.A.toString(),"")}catch{}!h&&a.Image&&(new Image().src=l.A,h=!0),h||(l.g=jl(l.j,null),l.g.ea(l.A)),l.F=Date.now(),Gs(l)}Ul(o)}function Xs(o){o.g&&(Oo(o),o.g.cancel(),o.g=null)}function xl(o){Xs(o),o.v&&(a.clearTimeout(o.v),o.v=null),Zs(o),o.h.cancel(),o.m&&(typeof o.m=="number"&&a.clearTimeout(o.m),o.m=null)}function Js(o){if(!pl(o.h)&&!o.m){o.m=!0;var l=o.Ea;ht||_(),yt||(ht(),yt=!0),w.add(l,o),o.D=0}}function bg(o,l){return gl(o.h)>=o.h.j-(o.m?1:0)?!1:o.m?(o.i=l.G.concat(o.i),!0):o.I==1||o.I==2||o.D>=(o.Sa?0:o.Ta)?!1:(o.m=Hr(f(o.Ea,o,l),Fl(o,o.D)),o.D++,!0)}e.Ea=function(o){if(this.m)if(this.m=null,this.I==1){if(!o){this.V=Math.floor(Math.random()*1e5),o=this.V++;const S=new an(this,this.j,o);let C=this.o;if(this.U&&(C?(C=De(C),Ur(C,this.U)):C=this.U),this.u!==null||this.R||(S.J=C,C=null),this.S)t:{for(var l=0,h=0;h<this.i.length;h++){e:{var p=this.i[h];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break e}p=void 0}if(p===void 0)break;if(l+=p,l>4096){l=h;break t}if(l===4096||h===this.i.length-1){l=h+1;break t}}l=1e3}else l=1e3;l=Ml(this,S,l),h=xe(this.J),It(h,"RID",o),It(h,"CVER",22),this.G&&It(h,"X-HTTP-Session-Id",this.G),rs(this,h),C&&(this.R?l="headers="+Gr(Sl(C))+"&"+l:this.u&&xo(h,this.u,C)),Po(this.h,S),this.Ra&&It(h,"TYPE","init"),this.S?(It(h,"$req",l),It(h,"SID","null"),S.U=!0,bo(S,h,null)):bo(S,h,l),this.I=2}}else this.I==3&&(o?Nl(this,o):this.i.length==0||pl(this.h)||Nl(this))};function Nl(o,l){var h;l?h=l.l:h=o.V++;const p=xe(o.J);It(p,"SID",o.M),It(p,"RID",h),It(p,"AID",o.K),rs(o,p),o.u&&o.o&&xo(p,o.u,o.o),h=new an(o,o.j,h,o.D+1),o.u===null&&(h.J=o.o),l&&(o.i=l.G.concat(o.i)),l=Ml(o,h,1e3),h.H=Math.round(o.va*.5)+Math.round(o.va*.5*Math.random()),Po(o.h,h),bo(h,p,l)}function rs(o,l){o.H&&Ee(o.H,function(h,p){It(l,p,h)}),o.l&&Ee({},function(h,p){It(l,p,h)})}function Ml(o,l,h){h=Math.min(o.i.length,h);const p=o.l?f(o.l.Ka,o.l,o):null;t:{var S=o.i;let it=-1;for(;;){const Mt=["count="+h];it==-1?h>0?(it=S[0].g,Mt.push("ofs="+it)):it=0:Mt.push("ofs="+it);let Et=!0;for(let jt=0;jt<h;jt++){var C=S[jt].g;const Ne=S[jt].map;if(C-=it,C<0)it=Math.max(0,S[jt].g-100),Et=!1;else try{C="req"+C+"_"||"";try{var j=Ne instanceof Map?Ne:Object.entries(Ne);for(const[Bn,hn]of j){let fn=hn;c(hn)&&(fn=ft(hn)),Mt.push(C+Bn+"="+encodeURIComponent(fn))}}catch(Bn){throw Mt.push(C+"type="+encodeURIComponent("_badmap")),Bn}}catch{p&&p(Ne)}}if(Et){j=Mt.join("&");break t}}j=void 0}return o=o.i.splice(0,h),l.G=o,j}function Ol(o){if(!o.g&&!o.v){o.Y=1;var l=o.Da;ht||_(),yt||(ht(),yt=!0),w.add(l,o),o.A=0}}function Mo(o){return o.g||o.v||o.A>=3?!1:(o.Y++,o.v=Hr(f(o.Da,o),Fl(o,o.A)),o.A++,!0)}e.Da=function(){if(this.v=null,kl(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var o=4*this.T;this.j.info("BP detection timer enabled: "+o),this.B=Hr(f(this.Wa,this),o)}},e.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,se(10),Xs(this),kl(this))};function Oo(o){o.B!=null&&(a.clearTimeout(o.B),o.B=null)}function kl(o){o.g=new an(o,o.j,"rpc",o.Y),o.u===null&&(o.g.J=o.o),o.g.P=0;var l=xe(o.na);It(l,"RID","rpc"),It(l,"SID",o.M),It(l,"AID",o.K),It(l,"CI",o.F?"0":"1"),!o.F&&o.ia&&It(l,"TO",o.ia),It(l,"TYPE","xmlhttp"),rs(o,l),o.u&&o.o&&xo(l,o.u,o.o),o.O&&(o.g.H=o.O);var h=o.g;o=o.ba,h.M=1,h.A=Ws(xe(l)),h.u=null,h.R=!0,ul(h,o)}e.Va=function(){this.C!=null&&(this.C=null,Xs(this),Mo(this),se(19))};function Zs(o){o.C!=null&&(a.clearTimeout(o.C),o.C=null)}function Ll(o,l){var h=null;if(o.g==l){Zs(o),Oo(o),o.g=null;var p=2}else if(Co(o.h,l))h=l.G,ml(o.h,l),p=1;else return;if(o.I!=0){if(l.o)if(p==1){h=l.u?l.u.length:0,l=Date.now()-l.F;var S=o.D;p=kn(),k(p,new il(p,h)),Js(o)}else Ol(o);else if(S=l.m,S==3||S==0&&l.X>0||!(p==1&&bg(o,l)||p==2&&Mo(o)))switch(h&&h.length>0&&(l=o.h,l.i=l.i.concat(h)),S){case 1:Un(o,5);break;case 4:Un(o,10);break;case 3:Un(o,6);break;default:Un(o,2)}}}function Fl(o,l){let h=o.Qa+Math.floor(Math.random()*o.Za);return o.isActive()||(h*=2),h*l}function Un(o,l){if(o.j.info("Error code "+l),l==2){var h=f(o.bb,o),p=o.Ua;const S=!p;p=new cn(p||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Qr(p,"https"),Ws(p),S?Eg(p.toString(),h):Tg(p.toString(),h)}else se(2);o.I=0,o.l&&o.l.pa(l),Ul(o),xl(o)}e.bb=function(o){o?(this.j.info("Successfully pinged google.com"),se(2)):(this.j.info("Failed to ping google.com"),se(1))};function Ul(o){if(o.I=0,o.ja=[],o.l){const l=_l(o.h);(l.length!=0||o.i.length!=0)&&(x(o.ja,l),x(o.ja,o.i),o.h.i.length=0,b(o.i),o.i.length=0),o.l.oa()}}function Bl(o,l,h){var p=h instanceof cn?xe(h):new cn(h);if(p.g!="")l&&(p.g=l+"."+p.g),Yr(p,p.u);else{var S=a.location;p=S.protocol,l=l?l+"."+S.hostname:S.hostname,S=+S.port;const C=new cn(null);p&&Qr(C,p),l&&(C.g=l),S&&Yr(C,S),h&&(C.h=h),p=C}return h=o.G,l=o.wa,h&&l&&It(p,h,l),It(p,"VER",o.ka),rs(o,p),p}function jl(o,l,h){if(l&&!o.L)throw Error("Can't create secondary domain capable XhrIo object.");return l=o.Aa&&!o.ma?new Pt(new Do({ab:h})):new Pt(o.ma),l.Fa(o.L),l}e.isActive=function(){return!!this.l&&this.l.isActive(this)};function $l(){}e=$l.prototype,e.ra=function(){},e.qa=function(){},e.pa=function(){},e.oa=function(){},e.isActive=function(){return!0},e.Ka=function(){};function ti(){}ti.prototype.g=function(o,l){return new pe(o,l)};function pe(o,l){L.call(this),this.g=new Dl(l),this.l=o,this.h=l&&l.messageUrlParams||null,o=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(o?o["X-WebChannel-Content-Type"]=l.messageContentType:o={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.sa&&(o?o["X-WebChannel-Client-Profile"]=l.sa:o={"X-WebChannel-Client-Profile":l.sa}),this.g.U=o,(o=l&&l.Qb)&&!E(o)&&(this.g.u=o),this.A=l&&l.supportsCrossDomainXhr||!1,this.v=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!E(l)&&(this.g.G=l,o=this.h,o!==null&&l in o&&(o=this.h,l in o&&delete o[l])),this.j=new ur(this)}g(pe,L),pe.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},pe.prototype.close=function(){No(this.g)},pe.prototype.o=function(o){var l=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.v&&(h={},h.__data__=ft(o),o=h);l.i.push(new hg(l.Ya++,o)),l.I==3&&Js(l)},pe.prototype.N=function(){this.g.l=null,delete this.j,No(this.g),delete this.g,pe.Z.N.call(this)};function ql(o){ar.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var l=o.__sm__;if(l){t:{for(const h in l){o=h;break t}o=void 0}(this.i=o)&&(o=this.i,l=l!==null&&o in l?l[o]:void 0),this.data=l}else this.data=o}g(ql,ar);function zl(){Kt.call(this),this.status=1}g(zl,Kt);function ur(o){this.g=o}g(ur,$l),ur.prototype.ra=function(){k(this.g,"a")},ur.prototype.qa=function(o){k(this.g,new ql(o))},ur.prototype.pa=function(o){k(this.g,new zl)},ur.prototype.oa=function(){k(this.g,"b")},ti.prototype.createWebChannel=ti.prototype.g,pe.prototype.send=pe.prototype.o,pe.prototype.open=pe.prototype.m,pe.prototype.close=pe.prototype.close,od=function(){return new ti},id=function(){return kn()},sd=Bt,Ca={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Ks.NO_ERROR=0,Ks.TIMEOUT=8,Ks.HTTP_ERROR=6,gi=Ks,ol.COMPLETE="complete",rd=ol,Xt.EventType=Ae,Ae.OPEN="a",Ae.CLOSE="b",Ae.ERROR="c",Ae.MESSAGE="d",L.prototype.listen=L.prototype.J,as=Xt,Pt.prototype.listenOnce=Pt.prototype.K,Pt.prototype.getLastError=Pt.prototype.Ha,Pt.prototype.getLastErrorCode=Pt.prototype.ya,Pt.prototype.getStatus=Pt.prototype.ca,Pt.prototype.getResponseJson=Pt.prototype.La,Pt.prototype.getResponseText=Pt.prototype.la,Pt.prototype.send=Pt.prototype.ea,Pt.prototype.setWithCredentials=Pt.prototype.Fa,nd=Pt}).apply(typeof ii<"u"?ii:typeof self<"u"?self:typeof window<"u"?window:{});const Nu="@firebase/firestore",Mu="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Zt.UNAUTHENTICATED=new Zt(null),Zt.GOOGLE_CREDENTIALS=new Zt("google-credentials-uid"),Zt.FIRST_PARTY=new Zt("first-party-uid"),Zt.MOCK_USER=new Zt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Or="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yn=new _c("@firebase/firestore");function dr(){return Yn.logLevel}function H(e,...t){if(Yn.logLevel<=ut.DEBUG){const n=t.map(Ec);Yn.debug(`Firestore (${Or}): ${e}`,...n)}}function nn(e,...t){if(Yn.logLevel<=ut.ERROR){const n=t.map(Ec);Yn.error(`Firestore (${Or}): ${e}`,...n)}}function Pr(e,...t){if(Yn.logLevel<=ut.WARN){const n=t.map(Ec);Yn.warn(`Firestore (${Or}): ${e}`,...n)}}function Ec(e){if(typeof e=="string")return e;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(e)}catch{return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(e,t,n){let r="Unexpected state";typeof t=="string"?r=t:n=t,ad(e,r,n)}function ad(e,t,n){let r=`FIRESTORE (${Or}) INTERNAL ASSERTION FAILED: ${t} (ID: ${e.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw nn(r),new Error(r)}function mt(e,t,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,e||ad(t,s,r)}function nt(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends xn{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cd{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class HE{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Zt.UNAUTHENTICATED))}shutdown(){}}class KE{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class GE{constructor(t){this.t=t,this.currentUser=Zt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){mt(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new wn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new wn,t.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const u=i;t.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},c=u=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>c(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new wn)}},0),a()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(mt(typeof r.accessToken=="string",31837,{l:r}),new cd(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return mt(t===null||typeof t=="string",2055,{h:t}),new Zt(t)}}class WE{constructor(t,n,r){this.P=t,this.T=n,this.I=r,this.type="FirstParty",this.user=Zt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class QE{constructor(t,n,r){this.P=t,this.T=n,this.I=r}getToken(){return Promise.resolve(new WE(this.P,this.T,this.I))}start(t,n){t.enqueueRetryable(()=>n(Zt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ou{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class YE{constructor(t,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,PE(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,n){mt(this.o===void 0,3512);const r=i=>{i.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,H("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>r(i))};const s=i=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Ou(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(mt(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Ou(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XE(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=XE(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=t.charAt(s[i]%62))}return r}}function at(e,t){return e<t?-1:e>t?1:0}function Pa(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const s=e.charAt(r),i=t.charAt(r);if(s!==i)return ta(s)===ta(i)?at(s,i):ta(s)?1:-1}return at(e.length,t.length)}const JE=55296,ZE=57343;function ta(e){const t=e.charCodeAt(0);return t>=JE&&t<=ZE}function Vr(e,t,n){return e.length===t.length&&e.every((r,s)=>n(r,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ku="__name__";class ke{constructor(t,n,r){n===void 0?n=0:n>t.length&&tt(637,{offset:n,range:t.length}),r===void 0?r=t.length-n:r>t.length-n&&tt(1746,{length:r,range:t.length-n}),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return ke.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof ke?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let s=0;s<r;s++){const i=ke.compareSegments(t.get(s),n.get(s));if(i!==0)return i}return at(t.length,n.length)}static compareSegments(t,n){const r=ke.isNumericId(t),s=ke.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?ke.extractNumericId(t).compare(ke.extractNumericId(n)):Pa(t,n)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return vn.fromString(t.substring(4,t.length-2))}}class At extends ke{construct(t,n,r){return new At(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new W(D.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new At(n)}static emptyPath(){return new At([])}}const tT=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Wt extends ke{construct(t,n,r){return new Wt(t,n,r)}static isValidIdentifier(t){return tT.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Wt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ku}static keyField(){return new Wt([ku])}static fromServerFormat(t){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new W(D.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let a=!1;for(;s<t.length;){const c=t[s];if(c==="\\"){if(s+1===t.length)throw new W(D.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const u=t[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new W(D.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=u,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(i(),s++)}if(i(),a)throw new W(D.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Wt(n)}static emptyPath(){return new Wt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(t){this.path=t}static fromPath(t){return new Y(At.fromString(t))}static fromName(t){return new Y(At.fromString(t).popFirst(5))}static empty(){return new Y(At.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&At.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return At.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Y(new At(t.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ld(e,t,n){if(!n)throw new W(D.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function eT(e,t,n,r){if(t===!0&&r===!0)throw new W(D.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Lu(e){if(!Y.isDocumentKey(e))throw new W(D.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Fu(e){if(Y.isDocumentKey(e))throw new W(D.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function ud(e){return typeof e=="object"&&e!==null&&(Object.getPrototypeOf(e)===Object.prototype||Object.getPrototypeOf(e)===null)}function vc(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":tt(12329,{type:typeof e})}function Pe(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new W(D.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=vc(e);throw new W(D.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nt(e,t){const n={typeString:e};return t&&(n.value=t),n}function js(e,t){if(!ud(e))throw new W(D.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in t)if(t[r]){const s=t[r].typeString,i="value"in t[r]?{value:t[r].value}:void 0;if(!(r in e)){n=`JSON missing required field: '${r}'`;break}const a=e[r];if(s&&typeof a!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new W(D.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uu=-62135596800,Bu=1e6;class bt{static now(){return bt.fromMillis(Date.now())}static fromDate(t){return bt.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor((t-1e3*n)*Bu);return new bt(n,r)}constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new W(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new W(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<Uu)throw new W(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new W(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Bu}_compareTo(t){return this.seconds===t.seconds?at(this.nanoseconds,t.nanoseconds):at(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:bt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(js(t,bt._jsonSchema))return new bt(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-Uu;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}bt._jsonSchemaVersion="firestore/timestamp/1.0",bt._jsonSchema={type:Nt("string",bt._jsonSchemaVersion),seconds:Nt("number"),nanoseconds:Nt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{static fromTimestamp(t){return new et(t)}static min(){return new et(new bt(0,0))}static max(){return new et(new bt(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ds=-1;function nT(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,s=et.fromTimestamp(r===1e9?new bt(n+1,0):new bt(n,r));return new bn(s,Y.empty(),t)}function rT(e){return new bn(e.readTime,e.key,Ds)}class bn{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new bn(et.min(),Y.empty(),Ds)}static max(){return new bn(et.max(),Y.empty(),Ds)}}function sT(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=Y.comparator(e.documentKey,t.documentKey),n!==0?n:at(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iT="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class oT{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kr(e){if(e.code!==D.FAILED_PRECONDITION||e.message!==iT)throw e;H("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&tt(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new V((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof V?n:V.resolve(n)}catch(n){return V.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):V.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):V.reject(n)}static resolve(t){return new V((n,r)=>{n(t)})}static reject(t){return new V((n,r)=>{r(t)})}static waitFor(t){return new V((n,r)=>{let s=0,i=0,a=!1;t.forEach(c=>{++s,c.next(()=>{++i,a&&i===s&&n()},u=>r(u))}),a=!0,i===s&&n()})}static or(t){let n=V.resolve(!1);for(const r of t)n=n.next(s=>s?V.resolve(s):r());return n}static forEach(t,n){const r=[];return t.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(t,n){return new V((r,s)=>{const i=t.length,a=new Array(i);let c=0;for(let u=0;u<i;u++){const f=u;n(t[f]).next(d=>{a[f]=d,++c,c===i&&r(a)},d=>s(d))}})}static doWhile(t,n){return new V((r,s)=>{const i=()=>{t()===!0?n().next(()=>{i()},s):r()};i()})}}function aT(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Lr(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}eo.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wc=-1;function no(e){return e==null}function Vi(e){return e===0&&1/e==-1/0}function cT(e){return typeof e=="number"&&Number.isInteger(e)&&!Vi(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hd="";function lT(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=ju(t)),t=uT(e.get(n),t);return ju(t)}function uT(e,t){let n=t;const r=e.length;for(let s=0;s<r;s++){const i=e.charAt(s);switch(i){case"\0":n+="";break;case hd:n+="";break;default:n+=i}}return n}function ju(e){return e+hd+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $u(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Nn(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function fd(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(t,n){this.comparator=t,this.root=n||Gt.EMPTY}insert(t,n){return new Ct(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,Gt.BLACK,null,null))}remove(t){return new Ct(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Gt.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){const t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new oi(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new oi(this.root,t,this.comparator,!1)}getReverseIterator(){return new oi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new oi(this.root,t,this.comparator,!0)}}class oi{constructor(t,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=n?r(t.key,n):1,n&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Gt{constructor(t,n,r,s,i){this.key=t,this.value=n,this.color=r??Gt.RED,this.left=s??Gt.EMPTY,this.right=i??Gt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,s,i){return new Gt(t??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let s=this;const i=r(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(t,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Gt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,s=this;if(n(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(t,s.key)===0){if(s.right.isEmpty())return Gt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Gt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Gt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw tt(43730,{key:this.key,value:this.value});if(this.right.isRed())throw tt(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw tt(27949);return t+(this.isRed()?0:1)}}Gt.EMPTY=null,Gt.RED=!0,Gt.BLACK=!1;Gt.EMPTY=new class{constructor(){this.size=0}get key(){throw tt(57766)}get value(){throw tt(16141)}get color(){throw tt(16727)}get left(){throw tt(29726)}get right(){throw tt(36894)}copy(t,n,r,s,i){return this}insert(t,n,r){return new Gt(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(t){this.comparator=t,this.data=new Ct(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;n(s.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new qu(this.data.getIterator())}getIteratorFrom(t){return new qu(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof kt)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new kt(this.comparator);return n.data=t,n}}class qu{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(t){this.fields=t,t.sort(Wt.comparator)}static empty(){return new _e([])}unionWith(t){let n=new kt(Wt.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new _e(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Vr(this.fields,t.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new dd("Invalid base64 string: "+i):i}}(t);return new Qt(n)}static fromUint8Array(t){const n=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(t);return new Qt(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return at(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Qt.EMPTY_BYTE_STRING=new Qt("");const hT=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Sn(e){if(mt(!!e,39018),typeof e=="string"){let t=0;const n=hT.exec(e);if(mt(!!n,46558,{timestamp:e}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Vt(e.seconds),nanos:Vt(e.nanos)}}function Vt(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function Rn(e){return typeof e=="string"?Qt.fromBase64String(e):Qt.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pd="server_timestamp",gd="__type__",md="__previous_value__",_d="__local_write_time__";function Ic(e){var n,r;return((r=(((n=e==null?void 0:e.mapValue)==null?void 0:n.fields)||{})[gd])==null?void 0:r.stringValue)===pd}function ro(e){const t=e.mapValue.fields[md];return Ic(t)?ro(t):t}function xs(e){const t=Sn(e.mapValue.fields[_d].timestampValue);return new bt(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fT{constructor(t,n,r,s,i,a,c,u,f,d){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=u,this.useFetchStreams=f,this.isUsingEmulator=d}}const Di="(default)";class Ns{constructor(t,n){this.projectId=t,this.database=n||Di}static empty(){return new Ns("","")}get isDefaultDatabase(){return this.database===Di}isEqual(t){return t instanceof Ns&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yd="__type__",Ed="__max__",ai={mapValue:{fields:{__type__:{stringValue:Ed}}}},Td="__vector__",xi="value";function Cn(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Ic(e)?4:pT(e)?9007199254740991:dT(e)?10:11:tt(28295,{value:e})}function He(e,t){if(e===t)return!0;const n=Cn(e);if(n!==Cn(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return xs(e).isEqual(xs(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=Sn(s.timestampValue),c=Sn(i.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,i){return Rn(s.bytesValue).isEqual(Rn(i.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,i){return Vt(s.geoPointValue.latitude)===Vt(i.geoPointValue.latitude)&&Vt(s.geoPointValue.longitude)===Vt(i.geoPointValue.longitude)}(e,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Vt(s.integerValue)===Vt(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=Vt(s.doubleValue),c=Vt(i.doubleValue);return a===c?Vi(a)===Vi(c):isNaN(a)&&isNaN(c)}return!1}(e,t);case 9:return Vr(e.arrayValue.values||[],t.arrayValue.values||[],He);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},c=i.mapValue.fields||{};if($u(a)!==$u(c))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(c[u]===void 0||!He(a[u],c[u])))return!1;return!0}(e,t);default:return tt(52216,{left:e})}}function Ms(e,t){return(e.values||[]).find(n=>He(n,t))!==void 0}function Dr(e,t){if(e===t)return 0;const n=Cn(e),r=Cn(t);if(n!==r)return at(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return at(e.booleanValue,t.booleanValue);case 2:return function(i,a){const c=Vt(i.integerValue||i.doubleValue),u=Vt(a.integerValue||a.doubleValue);return c<u?-1:c>u?1:c===u?0:isNaN(c)?isNaN(u)?0:-1:1}(e,t);case 3:return zu(e.timestampValue,t.timestampValue);case 4:return zu(xs(e),xs(t));case 5:return Pa(e.stringValue,t.stringValue);case 6:return function(i,a){const c=Rn(i),u=Rn(a);return c.compareTo(u)}(e.bytesValue,t.bytesValue);case 7:return function(i,a){const c=i.split("/"),u=a.split("/");for(let f=0;f<c.length&&f<u.length;f++){const d=at(c[f],u[f]);if(d!==0)return d}return at(c.length,u.length)}(e.referenceValue,t.referenceValue);case 8:return function(i,a){const c=at(Vt(i.latitude),Vt(a.latitude));return c!==0?c:at(Vt(i.longitude),Vt(a.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return Hu(e.arrayValue,t.arrayValue);case 10:return function(i,a){var m,b,x,F;const c=i.fields||{},u=a.fields||{},f=(m=c[xi])==null?void 0:m.arrayValue,d=(b=u[xi])==null?void 0:b.arrayValue,g=at(((x=f==null?void 0:f.values)==null?void 0:x.length)||0,((F=d==null?void 0:d.values)==null?void 0:F.length)||0);return g!==0?g:Hu(f,d)}(e.mapValue,t.mapValue);case 11:return function(i,a){if(i===ai.mapValue&&a===ai.mapValue)return 0;if(i===ai.mapValue)return 1;if(a===ai.mapValue)return-1;const c=i.fields||{},u=Object.keys(c),f=a.fields||{},d=Object.keys(f);u.sort(),d.sort();for(let g=0;g<u.length&&g<d.length;++g){const m=Pa(u[g],d[g]);if(m!==0)return m;const b=Dr(c[u[g]],f[d[g]]);if(b!==0)return b}return at(u.length,d.length)}(e.mapValue,t.mapValue);default:throw tt(23264,{he:n})}}function zu(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return at(e,t);const n=Sn(e),r=Sn(t),s=at(n.seconds,r.seconds);return s!==0?s:at(n.nanos,r.nanos)}function Hu(e,t){const n=e.values||[],r=t.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Dr(n[s],r[s]);if(i)return i}return at(n.length,r.length)}function xr(e){return Va(e)}function Va(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(n){const r=Sn(n);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(n){return Rn(n).toBase64()}(e.bytesValue):"referenceValue"in e?function(n){return Y.fromName(n).toString()}(e.referenceValue):"geoPointValue"in e?function(n){return`geo(${n.latitude},${n.longitude})`}(e.geoPointValue):"arrayValue"in e?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Va(i);return r+"]"}(e.arrayValue):"mapValue"in e?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${Va(n.fields[a])}`;return s+"}"}(e.mapValue):tt(61005,{value:e})}function mi(e){switch(Cn(e)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=ro(e);return t?16+mi(t):16;case 5:return 2*e.stringValue.length;case 6:return Rn(e.bytesValue).approximateByteSize();case 7:return e.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+mi(i),0)}(e.arrayValue);case 10:case 11:return function(r){let s=0;return Nn(r.fields,(i,a)=>{s+=i.length+mi(a)}),s}(e.mapValue);default:throw tt(13486,{value:e})}}function Da(e){return!!e&&"integerValue"in e}function Ac(e){return!!e&&"arrayValue"in e}function Ku(e){return!!e&&"nullValue"in e}function Gu(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function _i(e){return!!e&&"mapValue"in e}function dT(e){var n,r;return((r=(((n=e==null?void 0:e.mapValue)==null?void 0:n.fields)||{})[yd])==null?void 0:r.stringValue)===Td}function Ts(e){if(e.geoPointValue)return{geoPointValue:{...e.geoPointValue}};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:{...e.timestampValue}};if(e.mapValue){const t={mapValue:{fields:{}}};return Nn(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=Ts(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Ts(e.arrayValue.values[n]);return t}return{...e}}function pT(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue===Ed}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(t){this.value=t}static empty(){return new fe({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!_i(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Ts(n)}setAll(t){let n=Wt.emptyPath(),r={},s=[];t.forEach((a,c)=>{if(!n.isImmediateParentOf(c)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=c.popLast()}a?r[c.lastSegment()]=Ts(a):s.push(c.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(t){const n=this.field(t.popLast());_i(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return He(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=n.mapValue.fields[t.get(r)];_i(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(t,n,r){Nn(n,(s,i)=>t[s]=i);for(const s of r)delete t[s]}clone(){return new fe(Ts(this.value))}}function vd(e){const t=[];return Nn(e.fields,(n,r)=>{const s=new Wt([n]);if(_i(r)){const i=vd(r.mapValue).fields;if(i.length===0)t.push(s);else for(const a of i)t.push(s.child(a))}else t.push(s)}),new _e(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(t,n,r,s,i,a,c){this.key=t,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=c}static newInvalidDocument(t){return new ee(t,0,et.min(),et.min(),et.min(),fe.empty(),0)}static newFoundDocument(t,n,r,s){return new ee(t,1,n,et.min(),r,s,0)}static newNoDocument(t,n){return new ee(t,2,n,et.min(),et.min(),fe.empty(),0)}static newUnknownDocument(t,n){return new ee(t,3,n,et.min(),et.min(),fe.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(et.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=fe.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=fe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=et.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof ee&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new ee(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(t,n){this.position=t,this.inclusive=n}}function Wu(e,t,n){let r=0;for(let s=0;s<e.position.length;s++){const i=t[s],a=e.position[s];if(i.field.isKeyField()?r=Y.comparator(Y.fromName(a.referenceValue),n.key):r=Dr(a,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Qu(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!He(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(t,n="asc"){this.field=t,this.dir=n}}function gT(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd{}class Ot extends wd{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new _T(t,n,r):n==="array-contains"?new TT(t,r):n==="in"?new vT(t,r):n==="not-in"?new wT(t,r):n==="array-contains-any"?new IT(t,r):new Ot(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new yT(t,r):new ET(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Dr(n,this.value)):n!==null&&Cn(this.value)===Cn(n)&&this.matchesComparison(Dr(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return tt(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ke extends wd{constructor(t,n){super(),this.filters=t,this.op=n,this.Pe=null}static create(t,n){return new Ke(t,n)}matches(t){return Id(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Id(e){return e.op==="and"}function Ad(e){return mT(e)&&Id(e)}function mT(e){for(const t of e.filters)if(t instanceof Ke)return!1;return!0}function xa(e){if(e instanceof Ot)return e.field.canonicalString()+e.op.toString()+xr(e.value);if(Ad(e))return e.filters.map(t=>xa(t)).join(",");{const t=e.filters.map(n=>xa(n)).join(",");return`${e.op}(${t})`}}function bd(e,t){return e instanceof Ot?function(r,s){return s instanceof Ot&&r.op===s.op&&r.field.isEqual(s.field)&&He(r.value,s.value)}(e,t):e instanceof Ke?function(r,s){return s instanceof Ke&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,c)=>i&&bd(a,s.filters[c]),!0):!1}(e,t):void tt(19439)}function Sd(e){return e instanceof Ot?function(n){return`${n.field.canonicalString()} ${n.op} ${xr(n.value)}`}(e):e instanceof Ke?function(n){return n.op.toString()+" {"+n.getFilters().map(Sd).join(" ,")+"}"}(e):"Filter"}class _T extends Ot{constructor(t,n,r){super(t,n,r),this.key=Y.fromName(r.referenceValue)}matches(t){const n=Y.comparator(t.key,this.key);return this.matchesComparison(n)}}class yT extends Ot{constructor(t,n){super(t,"in",n),this.keys=Rd("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class ET extends Ot{constructor(t,n){super(t,"not-in",n),this.keys=Rd("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function Rd(e,t){var n;return(((n=t.arrayValue)==null?void 0:n.values)||[]).map(r=>Y.fromName(r.referenceValue))}class TT extends Ot{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Ac(n)&&Ms(n.arrayValue,this.value)}}class vT extends Ot{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Ms(this.value.arrayValue,n)}}class wT extends Ot{constructor(t,n){super(t,"not-in",n)}matches(t){if(Ms(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Ms(this.value.arrayValue,n)}}class IT extends Ot{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Ac(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ms(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AT{constructor(t,n=null,r=[],s=[],i=null,a=null,c=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=c,this.Te=null}}function Yu(e,t=null,n=[],r=[],s=null,i=null,a=null){return new AT(e,t,n,r,s,i,a)}function bc(e){const t=nt(e);if(t.Te===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(r=>xa(r)).join(","),n+="|ob:",n+=t.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),no(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>xr(r)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>xr(r)).join(",")),t.Te=n}return t.Te}function Sc(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!gT(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!bd(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Qu(e.startAt,t.startAt)&&Qu(e.endAt,t.endAt)}function Na(e){return Y.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(t,n=null,r=[],s=[],i=null,a="F",c=null,u=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=u,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function bT(e,t,n,r,s,i,a,c){return new so(e,t,n,r,s,i,a,c)}function io(e){return new so(e)}function Xu(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function ST(e){return e.collectionGroup!==null}function vs(e){const t=nt(e);if(t.Ie===null){t.Ie=[];const n=new Set;for(const i of t.explicitOrderBy)t.Ie.push(i),n.add(i.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new kt(Wt.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(f=>{f.isInequality()&&(c=c.add(f.field))})}),c})(t).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||t.Ie.push(new Mi(i,r))}),n.has(Wt.keyField().canonicalString())||t.Ie.push(new Mi(Wt.keyField(),r))}return t.Ie}function Be(e){const t=nt(e);return t.Ee||(t.Ee=RT(t,vs(e))),t.Ee}function RT(e,t){if(e.limitType==="F")return Yu(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Mi(s.field,i)});const n=e.endAt?new Ni(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Ni(e.startAt.position,e.startAt.inclusive):null;return Yu(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}function Ma(e,t,n){return new so(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function oo(e,t){return Sc(Be(e),Be(t))&&e.limitType===t.limitType}function Cd(e){return`${bc(Be(e))}|lt:${e.limitType}`}function pr(e){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Sd(s)).join(", ")}]`),no(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>xr(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>xr(s)).join(",")),`Target(${r})`}(Be(e))}; limitType=${e.limitType})`}function ao(e,t){return t.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):Y.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(e,t)&&function(r,s){for(const i of vs(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(e,t)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(e,t)&&function(r,s){return!(r.startAt&&!function(a,c,u){const f=Wu(a,c,u);return a.inclusive?f<=0:f<0}(r.startAt,vs(r),s)||r.endAt&&!function(a,c,u){const f=Wu(a,c,u);return a.inclusive?f>=0:f>0}(r.endAt,vs(r),s))}(e,t)}function CT(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Pd(e){return(t,n)=>{let r=!1;for(const s of vs(e)){const i=PT(s,t,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function PT(e,t,n){const r=e.field.isKeyField()?Y.comparator(t.key,n.key):function(i,a,c){const u=a.data.field(i),f=c.data.field(i);return u!==null&&f!==null?Dr(u,f):tt(42886)}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return tt(19790,{direction:e.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,t))return i}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return void(s[i]=[t,n]);s.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Nn(this.inner,(n,r)=>{for(const[s,i]of r)t(s,i)})}isEmpty(){return fd(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VT=new Ct(Y.comparator);function rn(){return VT}const Vd=new Ct(Y.comparator);function cs(...e){let t=Vd;for(const n of e)t=t.insert(n.key,n);return t}function Dd(e){let t=Vd;return e.forEach((n,r)=>t=t.insert(n,r.overlayedDocument)),t}function Hn(){return ws()}function xd(){return ws()}function ws(){return new nr(e=>e.toString(),(e,t)=>e.isEqual(t))}const DT=new Ct(Y.comparator),xT=new kt(Y.comparator);function ct(...e){let t=xT;for(const n of e)t=t.add(n);return t}const NT=new kt(at);function MT(){return NT}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rc(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Vi(t)?"-0":t}}function Nd(e){return{integerValue:""+e}}function Md(e,t){return cT(t)?Nd(t):Rc(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(){this._=void 0}}function OT(e,t,n){return e instanceof Oi?function(s,i){const a={fields:{[gd]:{stringValue:pd},[_d]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Ic(i)&&(i=ro(i)),i&&(a.fields[md]=i),{mapValue:a}}(n,t):e instanceof Os?kd(e,t):e instanceof ks?Ld(e,t):function(s,i){const a=Od(s,i),c=Ju(a)+Ju(s.Ae);return Da(a)&&Da(s.Ae)?Nd(c):Rc(s.serializer,c)}(e,t)}function kT(e,t,n){return e instanceof Os?kd(e,t):e instanceof ks?Ld(e,t):n}function Od(e,t){return e instanceof Ls?function(r){return Da(r)||function(i){return!!i&&"doubleValue"in i}(r)}(t)?t:{integerValue:0}:null}class Oi extends co{}class Os extends co{constructor(t){super(),this.elements=t}}function kd(e,t){const n=Fd(t);for(const r of e.elements)n.some(s=>He(s,r))||n.push(r);return{arrayValue:{values:n}}}class ks extends co{constructor(t){super(),this.elements=t}}function Ld(e,t){let n=Fd(t);for(const r of e.elements)n=n.filter(s=>!He(s,r));return{arrayValue:{values:n}}}class Ls extends co{constructor(t,n){super(),this.serializer=t,this.Ae=n}}function Ju(e){return Vt(e.integerValue||e.doubleValue)}function Fd(e){return Ac(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LT{constructor(t,n){this.field=t,this.transform=n}}function FT(e,t){return e.field.isEqual(t.field)&&function(r,s){return r instanceof Os&&s instanceof Os||r instanceof ks&&s instanceof ks?Vr(r.elements,s.elements,He):r instanceof Ls&&s instanceof Ls?He(r.Ae,s.Ae):r instanceof Oi&&s instanceof Oi}(e.transform,t.transform)}class UT{constructor(t,n){this.version=t,this.transformResults=n}}class Ve{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new Ve}static exists(t){return new Ve(void 0,t)}static updateTime(t){return new Ve(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function yi(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class lo{}function Ud(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new jd(e.key,Ve.none()):new $s(e.key,e.data,Ve.none());{const n=e.data,r=fe.empty();let s=new kt(Wt.comparator);for(let i of t.fields)if(!s.has(i)){let a=n.field(i);a===null&&i.length>1&&(i=i.popLast(),a=n.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new Mn(e.key,r,new _e(s.toArray()),Ve.none())}}function BT(e,t,n){e instanceof $s?function(s,i,a){const c=s.value.clone(),u=th(s.fieldTransforms,i,a.transformResults);c.setAll(u),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(e,t,n):e instanceof Mn?function(s,i,a){if(!yi(s.precondition,i))return void i.convertToUnknownDocument(a.version);const c=th(s.fieldTransforms,i,a.transformResults),u=i.data;u.setAll(Bd(s)),u.setAll(c),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(e,t,n):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,n)}function Is(e,t,n,r){return e instanceof $s?function(i,a,c,u){if(!yi(i.precondition,a))return c;const f=i.value.clone(),d=eh(i.fieldTransforms,u,a);return f.setAll(d),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),null}(e,t,n,r):e instanceof Mn?function(i,a,c,u){if(!yi(i.precondition,a))return c;const f=eh(i.fieldTransforms,u,a),d=a.data;return d.setAll(Bd(i)),d.setAll(f),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(g=>g.field))}(e,t,n,r):function(i,a,c){return yi(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(e,t,n)}function jT(e,t){let n=null;for(const r of e.fieldTransforms){const s=t.data.field(r.field),i=Od(r.transform,s||null);i!=null&&(n===null&&(n=fe.empty()),n.set(r.field,i))}return n||null}function Zu(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Vr(r,s,(i,a)=>FT(i,a))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class $s extends lo{constructor(t,n,r,s=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Mn extends lo{constructor(t,n,r,s,i=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Bd(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function th(e,t,n){const r=new Map;mt(e.length===n.length,32656,{Re:n.length,Ve:e.length});for(let s=0;s<n.length;s++){const i=e[s],a=i.transform,c=t.data.field(i.field);r.set(i.field,kT(a,c,n[s]))}return r}function eh(e,t,n){const r=new Map;for(const s of e){const i=s.transform,a=n.data.field(s.field);r.set(s.field,OT(i,a,t))}return r}class jd extends lo{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class $T extends lo{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qT{constructor(t,n,r,s){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(t.key)&&BT(i,t,r[s])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=Is(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=Is(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=xd();return this.mutations.forEach(s=>{const i=t.get(s.key),a=i.overlayedDocument;let c=this.applyToLocalView(a,i.mutatedFields);c=n.has(s.key)?null:c;const u=Ud(a,c);u!==null&&r.set(s.key,u),a.isValidDocument()||a.convertToNoDocument(et.min())}),r}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),ct())}isEqual(t){return this.batchId===t.batchId&&Vr(this.mutations,t.mutations,(n,r)=>Zu(n,r))&&Vr(this.baseMutations,t.baseMutations,(n,r)=>Zu(n,r))}}class Cc{constructor(t,n,r,s){this.batch=t,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(t,n,r){mt(t.mutations.length===r.length,58842,{me:t.mutations.length,fe:r.length});let s=function(){return DT}();const i=t.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new Cc(t,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zT{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HT{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xt,lt;function KT(e){switch(e){case D.OK:return tt(64938);case D.CANCELLED:case D.UNKNOWN:case D.DEADLINE_EXCEEDED:case D.RESOURCE_EXHAUSTED:case D.INTERNAL:case D.UNAVAILABLE:case D.UNAUTHENTICATED:return!1;case D.INVALID_ARGUMENT:case D.NOT_FOUND:case D.ALREADY_EXISTS:case D.PERMISSION_DENIED:case D.FAILED_PRECONDITION:case D.ABORTED:case D.OUT_OF_RANGE:case D.UNIMPLEMENTED:case D.DATA_LOSS:return!0;default:return tt(15467,{code:e})}}function $d(e){if(e===void 0)return nn("GRPC error has no .code"),D.UNKNOWN;switch(e){case xt.OK:return D.OK;case xt.CANCELLED:return D.CANCELLED;case xt.UNKNOWN:return D.UNKNOWN;case xt.DEADLINE_EXCEEDED:return D.DEADLINE_EXCEEDED;case xt.RESOURCE_EXHAUSTED:return D.RESOURCE_EXHAUSTED;case xt.INTERNAL:return D.INTERNAL;case xt.UNAVAILABLE:return D.UNAVAILABLE;case xt.UNAUTHENTICATED:return D.UNAUTHENTICATED;case xt.INVALID_ARGUMENT:return D.INVALID_ARGUMENT;case xt.NOT_FOUND:return D.NOT_FOUND;case xt.ALREADY_EXISTS:return D.ALREADY_EXISTS;case xt.PERMISSION_DENIED:return D.PERMISSION_DENIED;case xt.FAILED_PRECONDITION:return D.FAILED_PRECONDITION;case xt.ABORTED:return D.ABORTED;case xt.OUT_OF_RANGE:return D.OUT_OF_RANGE;case xt.UNIMPLEMENTED:return D.UNIMPLEMENTED;case xt.DATA_LOSS:return D.DATA_LOSS;default:return tt(39323,{code:e})}}(lt=xt||(xt={}))[lt.OK=0]="OK",lt[lt.CANCELLED=1]="CANCELLED",lt[lt.UNKNOWN=2]="UNKNOWN",lt[lt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",lt[lt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",lt[lt.NOT_FOUND=5]="NOT_FOUND",lt[lt.ALREADY_EXISTS=6]="ALREADY_EXISTS",lt[lt.PERMISSION_DENIED=7]="PERMISSION_DENIED",lt[lt.UNAUTHENTICATED=16]="UNAUTHENTICATED",lt[lt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",lt[lt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",lt[lt.ABORTED=10]="ABORTED",lt[lt.OUT_OF_RANGE=11]="OUT_OF_RANGE",lt[lt.UNIMPLEMENTED=12]="UNIMPLEMENTED",lt[lt.INTERNAL=13]="INTERNAL",lt[lt.UNAVAILABLE=14]="UNAVAILABLE",lt[lt.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GT(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WT=new vn([4294967295,4294967295],0);function nh(e){const t=GT().encode(e),n=new ed;return n.update(t),new Uint8Array(n.digest())}function rh(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new vn([n,r],0),new vn([s,i],0)]}class Pc{constructor(t,n,r){if(this.bitmap=t,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ls(`Invalid padding: ${n}`);if(r<0)throw new ls(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new ls(`Invalid hash count: ${r}`);if(t.length===0&&n!==0)throw new ls(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*t.length-n,this.pe=vn.fromNumber(this.ge)}ye(t,n,r){let s=t.add(n.multiply(vn.fromNumber(r)));return s.compare(WT)===1&&(s=new vn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.ge===0)return!1;const n=nh(t),[r,s]=rh(n);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);if(!this.we(a))return!1}return!0}static create(t,n,r){const s=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),a=new Pc(i,s,n);return r.forEach(c=>a.insert(c)),a}insert(t){if(this.ge===0)return;const n=nh(t),[r,s]=rh(n);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);this.Se(a)}}Se(t){const n=Math.floor(t/8),r=t%8;this.bitmap[n]|=1<<r}}class ls extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(t,n,r,s,i){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,n,r){const s=new Map;return s.set(t,qs.createSynthesizedTargetChangeForCurrentChange(t,n,r)),new uo(et.min(),s,new Ct(at),rn(),ct())}}class qs{constructor(t,n,r,s,i){this.resumeToken=t,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,n,r){return new qs(r,n,ct(),ct(),ct())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(t,n,r,s){this.be=t,this.removedTargetIds=n,this.key=r,this.De=s}}class qd{constructor(t,n){this.targetId=t,this.Ce=n}}class zd{constructor(t,n,r=Qt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=n,this.resumeToken=r,this.cause=s}}class sh{constructor(){this.ve=0,this.Fe=ih(),this.Me=Qt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=ct(),n=ct(),r=ct();return this.Fe.forEach((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:tt(38017,{changeType:i})}}),new qs(this.Me,this.xe,t,n,r)}qe(){this.Oe=!1,this.Fe=ih()}Qe(t,n){this.Oe=!0,this.Fe=this.Fe.insert(t,n)}$e(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}Ue(){this.ve+=1}Ke(){this.ve-=1,mt(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class QT{constructor(t){this.Ge=t,this.ze=new Map,this.je=rn(),this.Je=ci(),this.He=ci(),this.Ye=new Ct(at)}Ze(t){for(const n of t.be)t.De&&t.De.isFoundDocument()?this.Xe(n,t.De):this.et(n,t.key,t.De);for(const n of t.removedTargetIds)this.et(n,t.key,t.De)}tt(t){this.forEachTarget(t,n=>{const r=this.nt(n);switch(t.state){case 0:this.rt(n)&&r.Le(t.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(t.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(t.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(t.resumeToken));break;default:tt(56790,{state:t.state})}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.ze.forEach((r,s)=>{this.rt(s)&&n(s)})}st(t){const n=t.targetId,r=t.Ce.count,s=this.ot(n);if(s){const i=s.target;if(Na(i))if(r===0){const a=new Y(i.path);this.et(n,a,ee.newNoDocument(a,et.min()))}else mt(r===1,20013,{expectedCount:r});else{const a=this._t(n);if(a!==r){const c=this.ut(t),u=c?this.ct(c,t,a):1;if(u!==0){this.it(n);const f=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,f)}}}}}ut(t){const n=t.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let a,c;try{a=Rn(r).toUint8Array()}catch(u){if(u instanceof dd)return Pr("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{c=new Pc(a,s,i)}catch(u){return Pr(u instanceof ls?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return c.ge===0?null:c}ct(t,n,r){return n.Ce.count===r-this.Pt(t,n.targetId)?0:2}Pt(t,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const a=this.Ge.ht(),c=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;t.mightContain(c)||(this.et(n,i,null),s++)}),s}Tt(t){const n=new Map;this.ze.forEach((i,a)=>{const c=this.ot(a);if(c){if(i.current&&Na(c.target)){const u=new Y(c.target.path);this.It(u).has(a)||this.Et(a,u)||this.et(a,u,ee.newNoDocument(u,t))}i.Be&&(n.set(a,i.ke()),i.qe())}});let r=ct();this.He.forEach((i,a)=>{let c=!0;a.forEachWhile(u=>{const f=this.ot(u);return!f||f.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.je.forEach((i,a)=>a.setReadTime(t));const s=new uo(t,n,this.Ye,this.je,r);return this.je=rn(),this.Je=ci(),this.He=ci(),this.Ye=new Ct(at),s}Xe(t,n){if(!this.rt(t))return;const r=this.Et(t,n.key)?2:0;this.nt(t).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(t)),this.He=this.He.insert(n.key,this.dt(n.key).add(t))}et(t,n,r){if(!this.rt(t))return;const s=this.nt(t);this.Et(t,n)?s.Qe(n,1):s.$e(n),this.He=this.He.insert(n,this.dt(n).delete(t)),this.He=this.He.insert(n,this.dt(n).add(t)),r&&(this.je=this.je.insert(n,r))}removeTarget(t){this.ze.delete(t)}_t(t){const n=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Ue(t){this.nt(t).Ue()}nt(t){let n=this.ze.get(t);return n||(n=new sh,this.ze.set(t,n)),n}dt(t){let n=this.He.get(t);return n||(n=new kt(at),this.He=this.He.insert(t,n)),n}It(t){let n=this.Je.get(t);return n||(n=new kt(at),this.Je=this.Je.insert(t,n)),n}rt(t){const n=this.ot(t)!==null;return n||H("WatchChangeAggregator","Detected inactive target",t),n}ot(t){const n=this.ze.get(t);return n&&n.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new sh),this.Ge.getRemoteKeysForTarget(t).forEach(n=>{this.et(t,n,null)})}Et(t,n){return this.Ge.getRemoteKeysForTarget(t).has(n)}}function ci(){return new Ct(Y.comparator)}function ih(){return new Ct(Y.comparator)}const YT=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),XT=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),JT=(()=>({and:"AND",or:"OR"}))();class ZT{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function Oa(e,t){return e.useProto3Json||no(t)?t:{value:t}}function ki(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Hd(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function tv(e,t){return ki(e,t.toTimestamp())}function je(e){return mt(!!e,49232),et.fromTimestamp(function(n){const r=Sn(n);return new bt(r.seconds,r.nanos)}(e))}function Vc(e,t){return ka(e,t).canonicalString()}function ka(e,t){const n=function(s){return new At(["projects",s.projectId,"databases",s.database])}(e).child("documents");return t===void 0?n:n.child(t)}function Kd(e){const t=At.fromString(e);return mt(Xd(t),10190,{key:t.toString()}),t}function La(e,t){return Vc(e.databaseId,t.path)}function ea(e,t){const n=Kd(t);if(n.get(1)!==e.databaseId.projectId)throw new W(D.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new W(D.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new Y(Wd(n))}function Gd(e,t){return Vc(e.databaseId,t)}function ev(e){const t=Kd(e);return t.length===4?At.emptyPath():Wd(t)}function Fa(e){return new At(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Wd(e){return mt(e.length>4&&e.get(4)==="documents",29091,{key:e.toString()}),e.popFirst(5)}function oh(e,t,n){return{name:La(e,t),fields:n.value.mapValue.fields}}function nv(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:tt(39313,{state:f})}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],i=function(f,d){return f.useProto3Json?(mt(d===void 0||typeof d=="string",58123),Qt.fromBase64String(d||"")):(mt(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),Qt.fromUint8Array(d||new Uint8Array))}(e,t.targetChange.resumeToken),a=t.targetChange.cause,c=a&&function(f){const d=f.code===void 0?D.UNKNOWN:$d(f.code);return new W(d,f.message||"")}(a);n=new zd(r,s,i,c||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=ea(e,r.document.name),i=je(r.document.updateTime),a=r.document.createTime?je(r.document.createTime):et.min(),c=new fe({mapValue:{fields:r.document.fields}}),u=ee.newFoundDocument(s,i,a,c),f=r.targetIds||[],d=r.removedTargetIds||[];n=new Ei(f,d,u.key,u)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=ea(e,r.document),i=r.readTime?je(r.readTime):et.min(),a=ee.newNoDocument(s,i),c=r.removedTargetIds||[];n=new Ei([],c,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=ea(e,r.document),i=r.removedTargetIds||[];n=new Ei([],i,s,null)}else{if(!("filter"in t))return tt(11601,{Rt:t});{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new HT(s,i),c=r.targetId;n=new qd(c,a)}}return n}function rv(e,t){let n;if(t instanceof $s)n={update:oh(e,t.key,t.value)};else if(t instanceof jd)n={delete:La(e,t.key)};else if(t instanceof Mn)n={update:oh(e,t.key,t.data),updateMask:fv(t.fieldMask)};else{if(!(t instanceof $T))return tt(16599,{Vt:t.type});n={verify:La(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(r=>function(i,a){const c=a.transform;if(c instanceof Oi)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Os)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof ks)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Ls)return{fieldPath:a.field.canonicalString(),increment:c.Ae};throw tt(20930,{transform:a.transform})}(0,r))),t.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:tv(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:tt(27497)}(e,t.precondition)),n}function sv(e,t){return e&&e.length>0?(mt(t!==void 0,14353),e.map(n=>function(s,i){let a=s.updateTime?je(s.updateTime):je(i);return a.isEqual(et.min())&&(a=je(i)),new UT(a,s.transformResults||[])}(n,t))):[]}function iv(e,t){return{documents:[Gd(e,t.path)]}}function ov(e,t){const n={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Gd(e,s);const i=function(f){if(f.length!==0)return Yd(Ke.create(f,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const a=function(f){if(f.length!==0)return f.map(d=>function(m){return{field:gr(m.field),direction:lv(m.dir)}}(d))}(t.orderBy);a&&(n.structuredQuery.orderBy=a);const c=Oa(e,t.limit);return c!==null&&(n.structuredQuery.limit=c),t.startAt&&(n.structuredQuery.startAt=function(f){return{before:f.inclusive,values:f.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(f){return{before:!f.inclusive,values:f.position}}(t.endAt)),{ft:n,parent:s}}function av(e){let t=ev(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){mt(r===1,65062);const d=n.from[0];d.allDescendants?s=d.collectionId:t=t.child(d.collectionId)}let i=[];n.where&&(i=function(g){const m=Qd(g);return m instanceof Ke&&Ad(m)?m.getFilters():[m]}(n.where));let a=[];n.orderBy&&(a=function(g){return g.map(m=>function(x){return new Mi(mr(x.field),function(B){switch(B){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(x.direction))}(m))}(n.orderBy));let c=null;n.limit&&(c=function(g){let m;return m=typeof g=="object"?g.value:g,no(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(g){const m=!!g.before,b=g.values||[];return new Ni(b,m)}(n.startAt));let f=null;return n.endAt&&(f=function(g){const m=!g.before,b=g.values||[];return new Ni(b,m)}(n.endAt)),bT(t,s,a,i,c,"F",u,f)}function cv(e,t){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return tt(28987,{purpose:s})}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function Qd(e){return e.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=mr(n.unaryFilter.field);return Ot.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=mr(n.unaryFilter.field);return Ot.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=mr(n.unaryFilter.field);return Ot.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=mr(n.unaryFilter.field);return Ot.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return tt(61313);default:return tt(60726)}}(e):e.fieldFilter!==void 0?function(n){return Ot.create(mr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return tt(58110);default:return tt(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(n){return Ke.create(n.compositeFilter.filters.map(r=>Qd(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return tt(1026)}}(n.compositeFilter.op))}(e):tt(30097,{filter:e})}function lv(e){return YT[e]}function uv(e){return XT[e]}function hv(e){return JT[e]}function gr(e){return{fieldPath:e.canonicalString()}}function mr(e){return Wt.fromServerFormat(e.fieldPath)}function Yd(e){return e instanceof Ot?function(n){if(n.op==="=="){if(Gu(n.value))return{unaryFilter:{field:gr(n.field),op:"IS_NAN"}};if(Ku(n.value))return{unaryFilter:{field:gr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Gu(n.value))return{unaryFilter:{field:gr(n.field),op:"IS_NOT_NAN"}};if(Ku(n.value))return{unaryFilter:{field:gr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:gr(n.field),op:uv(n.op),value:n.value}}}(e):e instanceof Ke?function(n){const r=n.getFilters().map(s=>Yd(s));return r.length===1?r[0]:{compositeFilter:{op:hv(n.op),filters:r}}}(e):tt(54877,{filter:e})}function fv(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function Xd(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(t,n,r,s,i=et.min(),a=et.min(),c=Qt.EMPTY_BYTE_STRING,u=null){this.target=t,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=u}withSequenceNumber(t){return new mn(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new mn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new mn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new mn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dv{constructor(t){this.yt=t}}function pv(e){const t=av({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?Ma(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gv{constructor(){this.Cn=new mv}addToCollectionParentIndex(t,n){return this.Cn.add(n),V.resolve()}getCollectionParents(t,n){return V.resolve(this.Cn.getEntries(n))}addFieldIndex(t,n){return V.resolve()}deleteFieldIndex(t,n){return V.resolve()}deleteAllFieldIndexes(t){return V.resolve()}createTargetIndexes(t,n){return V.resolve()}getDocumentsMatchingTarget(t,n){return V.resolve(null)}getIndexType(t,n){return V.resolve(0)}getFieldIndexes(t,n){return V.resolve([])}getNextCollectionGroupToUpdate(t){return V.resolve(null)}getMinOffset(t,n){return V.resolve(bn.min())}getMinOffsetFromCollectionGroup(t,n){return V.resolve(bn.min())}updateCollectionGroup(t,n,r){return V.resolve()}updateIndexEntries(t,n){return V.resolve()}}class mv{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n]||new kt(At.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(t){return(this.index[t]||new kt(At.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ah={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Jd=41943040;class he{static withCacheSize(t){return new he(t,he.DEFAULT_COLLECTION_PERCENTILE,he.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,n,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */he.DEFAULT_COLLECTION_PERCENTILE=10,he.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,he.DEFAULT=new he(Jd,he.DEFAULT_COLLECTION_PERCENTILE,he.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),he.DISABLED=new he(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(t){this.ar=t}next(){return this.ar+=2,this.ar}static ur(){return new Nr(0)}static cr(){return new Nr(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ch="LruGarbageCollector",_v=1048576;function lh([e,t],[n,r]){const s=at(e,n);return s===0?at(t,r):s}class yv{constructor(t){this.Ir=t,this.buffer=new kt(lh),this.Er=0}dr(){return++this.Er}Ar(t){const n=[t,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();lh(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class Ev{constructor(t,n,r){this.garbageCollector=t,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(t){H(ch,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Lr(n)?H(ch,"Ignoring IndexedDB error during garbage collection: ",n):await kr(n)}await this.Vr(3e5)})}}class Tv{constructor(t,n){this.mr=t,this.params=n}calculateTargetCount(t,n){return this.mr.gr(t).next(r=>Math.floor(n/100*r))}nthSequenceNumber(t,n){if(n===0)return V.resolve(eo.ce);const r=new yv(n);return this.mr.forEachTarget(t,s=>r.Ar(s.sequenceNumber)).next(()=>this.mr.pr(t,s=>r.Ar(s))).next(()=>r.maxValue)}removeTargets(t,n,r){return this.mr.removeTargets(t,n,r)}removeOrphanedDocuments(t,n){return this.mr.removeOrphanedDocuments(t,n)}collect(t,n){return this.params.cacheSizeCollectionThreshold===-1?(H("LruGarbageCollector","Garbage collection skipped; disabled"),V.resolve(ah)):this.getCacheSize(t).next(r=>r<this.params.cacheSizeCollectionThreshold?(H("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ah):this.yr(t,n))}getCacheSize(t){return this.mr.getCacheSize(t)}yr(t,n){let r,s,i,a,c,u,f;const d=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(g=>(g>this.params.maximumSequenceNumbersToCollect?(H("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),s=this.params.maximumSequenceNumbersToCollect):s=g,a=Date.now(),this.nthSequenceNumber(t,s))).next(g=>(r=g,c=Date.now(),this.removeTargets(t,r,n))).next(g=>(i=g,u=Date.now(),this.removeOrphanedDocuments(t,r))).next(g=>(f=Date.now(),dr()<=ut.DEBUG&&H("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-d}ms
	Determined least recently used ${s} in `+(c-a)+`ms
	Removed ${i} targets in `+(u-c)+`ms
	Removed ${g} documents in `+(f-u)+`ms
Total Duration: ${f-d}ms`),V.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:g})))}}function vv(e,t){return new Tv(e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wv{constructor(){this.changes=new nr(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,ee.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?V.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iv{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Av{constructor(t,n,r,s){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,n))).next(s=>(r!==null&&Is(r.mutation,s,_e.empty(),bt.now()),s))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.getLocalViewOfDocuments(t,r,ct()).next(()=>r))}getLocalViewOfDocuments(t,n,r=ct()){const s=Hn();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,r).next(i=>{let a=cs();return i.forEach((c,u)=>{a=a.insert(c,u.overlayedDocument)}),a}))}getOverlayedDocuments(t,n){const r=Hn();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,ct()))}populateOverlays(t,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(t,s).next(i=>{i.forEach((a,c)=>{n.set(a,c)})})}computeViews(t,n,r,s){let i=rn();const a=ws(),c=function(){return ws()}();return n.forEach((u,f)=>{const d=r.get(f.key);s.has(f.key)&&(d===void 0||d.mutation instanceof Mn)?i=i.insert(f.key,f):d!==void 0?(a.set(f.key,d.mutation.getFieldMask()),Is(d.mutation,f,d.mutation.getFieldMask(),bt.now())):a.set(f.key,_e.empty())}),this.recalculateAndSaveOverlays(t,i).next(u=>(u.forEach((f,d)=>a.set(f,d)),n.forEach((f,d)=>c.set(f,new Iv(d,a.get(f)??null))),c))}recalculateAndSaveOverlays(t,n){const r=ws();let s=new Ct((a,c)=>a-c),i=ct();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(a=>{for(const c of a)c.keys().forEach(u=>{const f=n.get(u);if(f===null)return;let d=r.get(u)||_e.empty();d=c.applyToLocalView(f,d),r.set(u,d);const g=(s.get(c.batchId)||ct()).add(u);s=s.insert(c.batchId,g)})}).next(()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const u=c.getNext(),f=u.key,d=u.value,g=xd();d.forEach(m=>{if(!i.has(m)){const b=Ud(n.get(m),r.get(m));b!==null&&g.set(m,b),i=i.add(m)}}),a.push(this.documentOverlayCache.saveOverlays(t,f,g))}return V.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,n,r,s){return function(a){return Y.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):ST(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r,s):this.getDocumentsMatchingCollectionQuery(t,n,r,s)}getNextDocuments(t,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,s-i.size):V.resolve(Hn());let c=Ds,u=i;return a.next(f=>V.forEach(f,(d,g)=>(c<g.largestBatchId&&(c=g.largestBatchId),i.get(d)?V.resolve():this.remoteDocumentCache.getEntry(t,d).next(m=>{u=u.insert(d,m)}))).next(()=>this.populateOverlays(t,f,i)).next(()=>this.computeViews(t,u,f,ct())).next(d=>({batchId:c,changes:Dd(d)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new Y(n)).next(r=>{let s=cs();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,n,r,s){const i=n.collectionGroup;let a=cs();return this.indexManager.getCollectionParents(t,i).next(c=>V.forEach(c,u=>{const f=function(g,m){return new so(m,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(t,f,r,s).next(d=>{d.forEach((g,m)=>{a=a.insert(g,m)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,r,i,s))).next(a=>{i.forEach((u,f)=>{const d=f.getKey();a.get(d)===null&&(a=a.insert(d,ee.newInvalidDocument(d)))});let c=cs();return a.forEach((u,f)=>{const d=i.get(u);d!==void 0&&Is(d.mutation,f,_e.empty(),bt.now()),ao(n,f)&&(c=c.insert(u,f))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bv{constructor(t){this.serializer=t,this.Lr=new Map,this.kr=new Map}getBundleMetadata(t,n){return V.resolve(this.Lr.get(n))}saveBundleMetadata(t,n){return this.Lr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:je(s.createTime)}}(n)),V.resolve()}getNamedQuery(t,n){return V.resolve(this.kr.get(n))}saveNamedQuery(t,n){return this.kr.set(n.name,function(s){return{name:s.name,query:pv(s.bundledQuery),readTime:je(s.readTime)}}(n)),V.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sv{constructor(){this.overlays=new Ct(Y.comparator),this.qr=new Map}getOverlay(t,n){return V.resolve(this.overlays.get(n))}getOverlays(t,n){const r=Hn();return V.forEach(n,s=>this.getOverlay(t,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(t,n,r){return r.forEach((s,i)=>{this.St(t,n,i)}),V.resolve()}removeOverlaysForBatchId(t,n,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.qr.delete(r)),V.resolve()}getOverlaysForCollection(t,n,r){const s=Hn(),i=n.length+1,a=new Y(n.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const u=c.getNext().value,f=u.getKey();if(!n.isPrefixOf(f.path))break;f.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return V.resolve(s)}getOverlaysForCollectionGroup(t,n,r,s){let i=new Ct((f,d)=>f-d);const a=this.overlays.getIterator();for(;a.hasNext();){const f=a.getNext().value;if(f.getKey().getCollectionGroup()===n&&f.largestBatchId>r){let d=i.get(f.largestBatchId);d===null&&(d=Hn(),i=i.insert(f.largestBatchId,d)),d.set(f.getKey(),f)}}const c=Hn(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((f,d)=>c.set(f,d)),!(c.size()>=s)););return V.resolve(c)}St(t,n,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new zT(n,r));let i=this.qr.get(n);i===void 0&&(i=ct(),this.qr.set(n,i)),this.qr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rv{constructor(){this.sessionToken=Qt.EMPTY_BYTE_STRING}getSessionToken(t){return V.resolve(this.sessionToken)}setSessionToken(t,n){return this.sessionToken=n,V.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(){this.Qr=new kt(qt.$r),this.Ur=new kt(qt.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(t,n){const r=new qt(t,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(t,n){t.forEach(r=>this.addReference(r,n))}removeReference(t,n){this.Gr(new qt(t,n))}zr(t,n){t.forEach(r=>this.removeReference(r,n))}jr(t){const n=new Y(new At([])),r=new qt(n,t),s=new qt(n,t+1),i=[];return this.Ur.forEachInRange([r,s],a=>{this.Gr(a),i.push(a.key)}),i}Jr(){this.Qr.forEach(t=>this.Gr(t))}Gr(t){this.Qr=this.Qr.delete(t),this.Ur=this.Ur.delete(t)}Hr(t){const n=new Y(new At([])),r=new qt(n,t),s=new qt(n,t+1);let i=ct();return this.Ur.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(t){const n=new qt(t,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class qt{constructor(t,n){this.key=t,this.Yr=n}static $r(t,n){return Y.comparator(t.key,n.key)||at(t.Yr,n.Yr)}static Kr(t,n){return at(t.Yr,n.Yr)||Y.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cv{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new kt(qt.$r)}checkEmpty(t){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new qT(i,n,r,s);this.mutationQueue.push(a);for(const c of s)this.Zr=this.Zr.add(new qt(c.key,i)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return V.resolve(a)}lookupMutationBatch(t,n){return V.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,s=this.ei(r),i=s<0?0:s;return V.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?wc:this.tr-1)}getAllMutationBatches(t){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new qt(n,0),s=new qt(n,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],a=>{const c=this.Xr(a.Yr);i.push(c)}),V.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new kt(at);return n.forEach(s=>{const i=new qt(s,0),a=new qt(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,a],c=>{r=r.add(c.Yr)})}),V.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,s=r.length+1;let i=r;Y.isDocumentKey(i)||(i=i.child(""));const a=new qt(new Y(i),0);let c=new kt(at);return this.Zr.forEachWhile(u=>{const f=u.key.path;return!!r.isPrefixOf(f)&&(f.length===s&&(c=c.add(u.Yr)),!0)},a),V.resolve(this.ti(c))}ti(t){const n=[];return t.forEach(r=>{const s=this.Xr(r);s!==null&&n.push(s)}),n}removeMutationBatch(t,n){mt(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return V.forEach(n.mutations,s=>{const i=new qt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.Zr=r})}ir(t){}containsKey(t,n){const r=new qt(n,0),s=this.Zr.firstAfterOrEqual(r);return V.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,V.resolve()}ni(t,n){return this.ei(t)}ei(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Xr(t){const n=this.ei(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pv{constructor(t){this.ri=t,this.docs=function(){return new Ct(Y.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,a=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return V.resolve(r?r.document.mutableCopy():ee.newInvalidDocument(n))}getEntries(t,n){let r=rn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():ee.newInvalidDocument(s))}),V.resolve(r)}getDocumentsMatchingQuery(t,n,r,s){let i=rn();const a=n.path,c=new Y(a.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){const{key:f,value:{document:d}}=u.getNext();if(!a.isPrefixOf(f.path))break;f.path.length>a.length+1||sT(rT(d),r)<=0||(s.has(d.key)||ao(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return V.resolve(i)}getAllFromCollectionGroup(t,n,r,s){tt(9500)}ii(t,n){return V.forEach(this.docs,r=>n(r))}newChangeBuffer(t){return new Vv(this)}getSize(t){return V.resolve(this.size)}}class Vv extends wv{constructor(t){super(),this.Nr=t}applyChanges(t){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Nr.addEntry(t,s)):this.Nr.removeEntry(r)}),V.waitFor(n)}getFromCache(t,n){return this.Nr.getEntry(t,n)}getAllFromCache(t,n){return this.Nr.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dv{constructor(t){this.persistence=t,this.si=new nr(n=>bc(n),Sc),this.lastRemoteSnapshotVersion=et.min(),this.highestTargetId=0,this.oi=0,this._i=new Dc,this.targetCount=0,this.ai=Nr.ur()}forEachTarget(t,n){return this.si.forEach((r,s)=>n(s)),V.resolve()}getLastRemoteSnapshotVersion(t){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return V.resolve(this.oi)}allocateTargetId(t){return this.highestTargetId=this.ai.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),V.resolve()}Pr(t){this.si.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.ai=new Nr(n),this.highestTargetId=n),t.sequenceNumber>this.oi&&(this.oi=t.sequenceNumber)}addTargetData(t,n){return this.Pr(n),this.targetCount+=1,V.resolve()}updateTargetData(t,n){return this.Pr(n),V.resolve()}removeTargetData(t,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,V.resolve()}removeTargets(t,n,r){let s=0;const i=[];return this.si.forEach((a,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.si.delete(a),i.push(this.removeMatchingKeysForTargetId(t,c.targetId)),s++)}),V.waitFor(i).next(()=>s)}getTargetCount(t){return V.resolve(this.targetCount)}getTargetData(t,n){const r=this.si.get(n)||null;return V.resolve(r)}addMatchingKeys(t,n,r){return this._i.Wr(n,r),V.resolve()}removeMatchingKeys(t,n,r){this._i.zr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(a=>{i.push(s.markPotentiallyOrphaned(t,a))}),V.waitFor(i)}removeMatchingKeysForTargetId(t,n){return this._i.jr(n),V.resolve()}getMatchingKeysForTargetId(t,n){const r=this._i.Hr(n);return V.resolve(r)}containsKey(t,n){return V.resolve(this._i.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(t,n){this.ui={},this.overlays={},this.ci=new eo(0),this.li=!1,this.li=!0,this.hi=new Rv,this.referenceDelegate=t(this),this.Pi=new Dv(this),this.indexManager=new gv,this.remoteDocumentCache=function(s){return new Pv(s)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new dv(n),this.Ii=new bv(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new Sv,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.ui[t.toKey()];return r||(r=new Cv(n,this.referenceDelegate),this.ui[t.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(t,n,r){H("MemoryPersistence","Starting transaction:",t);const s=new xv(this.ci.next());return this.referenceDelegate.Ei(),r(s).next(i=>this.referenceDelegate.di(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ai(t,n){return V.or(Object.values(this.ui).map(r=>()=>r.containsKey(t,n)))}}class xv extends oT{constructor(t){super(),this.currentSequenceNumber=t}}class xc{constructor(t){this.persistence=t,this.Ri=new Dc,this.Vi=null}static mi(t){return new xc(t)}get fi(){if(this.Vi)return this.Vi;throw tt(60996)}addReference(t,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),V.resolve()}removeReference(t,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),V.resolve()}markPotentiallyOrphaned(t,n){return this.fi.add(n.toString()),V.resolve()}removeTarget(t,n){this.Ri.jr(n.targetId).forEach(s=>this.fi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(s=>{s.forEach(i=>this.fi.add(i.toString()))}).next(()=>r.removeTargetData(t,n))}Ei(){this.Vi=new Set}di(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.fi,r=>{const s=Y.fromPath(r);return this.gi(t,s).next(i=>{i||n.removeEntry(s,et.min())})}).next(()=>(this.Vi=null,n.apply(t)))}updateLimboDocument(t,n){return this.gi(t,n).next(r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())})}Ti(t){return 0}gi(t,n){return V.or([()=>V.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ai(t,n)])}}class Li{constructor(t,n){this.persistence=t,this.pi=new nr(r=>lT(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=vv(this,n)}static mi(t,n){return new Li(t,n)}Ei(){}di(t){return V.resolve()}forEachTarget(t,n){return this.persistence.getTargetCache().forEachTarget(t,n)}gr(t){const n=this.wr(t);return this.persistence.getTargetCache().getTargetCount(t).next(r=>n.next(s=>r+s))}wr(t){let n=0;return this.pr(t,r=>{n++}).next(()=>n)}pr(t,n){return V.forEach(this.pi,(r,s)=>this.br(t,r,s).next(i=>i?V.resolve():n(s)))}removeTargets(t,n,r){return this.persistence.getTargetCache().removeTargets(t,n,r)}removeOrphanedDocuments(t,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(t,a=>this.br(t,a,n).next(c=>{c||(r++,i.removeEntry(a,et.min()))})).next(()=>i.apply(t)).next(()=>r)}markPotentiallyOrphaned(t,n){return this.pi.set(n,t.currentSequenceNumber),V.resolve()}removeTarget(t,n){const r=n.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,n,r){return this.pi.set(r,t.currentSequenceNumber),V.resolve()}removeReference(t,n,r){return this.pi.set(r,t.currentSequenceNumber),V.resolve()}updateLimboDocument(t,n){return this.pi.set(n,t.currentSequenceNumber),V.resolve()}Ti(t){let n=t.key.toString().length;return t.isFoundDocument()&&(n+=mi(t.data.value)),n}br(t,n,r){return V.or([()=>this.persistence.Ai(t,n),()=>this.persistence.getTargetCache().containsKey(t,n),()=>{const s=this.pi.get(n);return V.resolve(s!==void 0&&s>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(t,n,r,s){this.targetId=t,this.fromCache=n,this.Es=r,this.ds=s}static As(t,n){let r=ct(),s=ct();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Nc(t,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nv{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mv{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return by()?8:aT(wy())>0?6:4}()}initialize(t,n){this.ps=t,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(t,n,r,s){const i={result:null};return this.ys(t,n).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.ws(t,n,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new Nv;return this.Ss(t,n,a).next(c=>{if(i.result=c,this.Vs)return this.bs(t,n,a,c.size)})}).next(()=>i.result)}bs(t,n,r,s){return r.documentReadCount<this.fs?(dr()<=ut.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",pr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),V.resolve()):(dr()<=ut.DEBUG&&H("QueryEngine","Query:",pr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(dr()<=ut.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",pr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Be(n))):V.resolve())}ys(t,n){if(Xu(n))return V.resolve(null);let r=Be(n);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Ma(n,null,"F"),r=Be(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next(i=>{const a=ct(...i);return this.ps.getDocuments(t,a).next(c=>this.indexManager.getMinOffset(t,r).next(u=>{const f=this.Ds(n,c);return this.Cs(n,f,a,u.readTime)?this.ys(t,Ma(n,null,"F")):this.vs(t,f,n,u)}))})))}ws(t,n,r,s){return Xu(n)||s.isEqual(et.min())?V.resolve(null):this.ps.getDocuments(t,r).next(i=>{const a=this.Ds(n,i);return this.Cs(n,a,r,s)?V.resolve(null):(dr()<=ut.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),pr(n)),this.vs(t,a,n,nT(s,Ds)).next(c=>c))})}Ds(t,n){let r=new kt(Pd(t));return n.forEach((s,i)=>{ao(t,i)&&(r=r.add(i))}),r}Cs(t,n,r,s){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const i=t.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(t,n,r){return dr()<=ut.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",pr(n)),this.ps.getDocumentsMatchingQuery(t,n,bn.min(),r)}vs(t,n,r,s){return this.ps.getDocumentsMatchingQuery(t,r,s).next(i=>(n.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mc="LocalStore",Ov=3e8;class kv{constructor(t,n,r,s){this.persistence=t,this.Fs=n,this.serializer=s,this.Ms=new Ct(at),this.xs=new nr(i=>bc(i),Sc),this.Os=new Map,this.Ns=t.getRemoteDocumentCache(),this.Pi=t.getTargetCache(),this.Ii=t.getBundleCache(),this.Bs(r)}Bs(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Av(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.Ms))}}function Lv(e,t,n,r){return new kv(e,t,n,r)}async function tp(e,t){const n=nt(e);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Bs(t),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],c=[];let u=ct();for(const f of s){a.push(f.batchId);for(const d of f.mutations)u=u.add(d.key)}for(const f of i){c.push(f.batchId);for(const d of f.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(f=>({Ls:f,removedBatchIds:a,addedBatchIds:c}))})})}function Fv(e,t){const n=nt(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),i=n.Ns.newChangeBuffer({trackRemovals:!0});return function(c,u,f,d){const g=f.batch,m=g.keys();let b=V.resolve();return m.forEach(x=>{b=b.next(()=>d.getEntry(u,x)).next(F=>{const B=f.docVersions.get(x);mt(B!==null,48541),F.version.compareTo(B)<0&&(g.applyToRemoteDocument(F,f),F.isValidDocument()&&(F.setReadTime(f.commitVersion),d.addEntry(F)))})}),b.next(()=>c.mutationQueue.removeMutationBatch(u,g))}(n,r,t,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let u=ct();for(let f=0;f<c.mutationResults.length;++f)c.mutationResults[f].transformResults.length>0&&(u=u.add(c.batch.mutations[f].key));return u}(t))).next(()=>n.localDocuments.getDocuments(r,s))})}function ep(e){const t=nt(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Pi.getLastRemoteSnapshotVersion(n))}function Uv(e,t){const n=nt(e),r=t.snapshotVersion;let s=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=n.Ns.newChangeBuffer({trackRemovals:!0});s=n.Ms;const c=[];t.targetChanges.forEach((d,g)=>{const m=s.get(g);if(!m)return;c.push(n.Pi.removeMatchingKeys(i,d.removedDocuments,g).next(()=>n.Pi.addMatchingKeys(i,d.addedDocuments,g)));let b=m.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.get(g)!==null?b=b.withResumeToken(Qt.EMPTY_BYTE_STRING,et.min()).withLastLimboFreeSnapshotVersion(et.min()):d.resumeToken.approximateByteSize()>0&&(b=b.withResumeToken(d.resumeToken,r)),s=s.insert(g,b),function(F,B,K){return F.resumeToken.approximateByteSize()===0||B.snapshotVersion.toMicroseconds()-F.snapshotVersion.toMicroseconds()>=Ov?!0:K.addedDocuments.size+K.modifiedDocuments.size+K.removedDocuments.size>0}(m,b,d)&&c.push(n.Pi.updateTargetData(i,b))});let u=rn(),f=ct();if(t.documentUpdates.forEach(d=>{t.resolvedLimboDocuments.has(d)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))}),c.push(Bv(i,a,t.documentUpdates).next(d=>{u=d.ks,f=d.qs})),!r.isEqual(et.min())){const d=n.Pi.getLastRemoteSnapshotVersion(i).next(g=>n.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(d)}return V.waitFor(c).next(()=>a.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,f)).next(()=>u)}).then(i=>(n.Ms=s,i))}function Bv(e,t,n){let r=ct(),s=ct();return n.forEach(i=>r=r.add(i)),t.getEntries(e,r).next(i=>{let a=rn();return n.forEach((c,u)=>{const f=i.get(c);u.isFoundDocument()!==f.isFoundDocument()&&(s=s.add(c)),u.isNoDocument()&&u.version.isEqual(et.min())?(t.removeEntry(c,u.readTime),a=a.insert(c,u)):!f.isValidDocument()||u.version.compareTo(f.version)>0||u.version.compareTo(f.version)===0&&f.hasPendingWrites?(t.addEntry(u),a=a.insert(c,u)):H(Mc,"Ignoring outdated watch update for ",c,". Current version:",f.version," Watch version:",u.version)}),{ks:a,qs:s}})}function jv(e,t){const n=nt(e);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=wc),n.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function $v(e,t){const n=nt(e);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Pi.getTargetData(r,t).next(i=>i?(s=i,V.resolve(s)):n.Pi.allocateTargetId(r).next(a=>(s=new mn(t,a,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(t,r.targetId)),r})}async function Ua(e,t,n){const r=nt(e),s=r.Ms.get(t),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!Lr(a))throw a;H(Mc,`Failed to update sequence numbers for target ${t}: ${a}`)}r.Ms=r.Ms.remove(t),r.xs.delete(s.target)}function uh(e,t,n){const r=nt(e);let s=et.min(),i=ct();return r.persistence.runTransaction("Execute query","readwrite",a=>function(u,f,d){const g=nt(u),m=g.xs.get(d);return m!==void 0?V.resolve(g.Ms.get(m)):g.Pi.getTargetData(f,d)}(r,a,Be(t)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(a,c.targetId).next(u=>{i=u})}).next(()=>r.Fs.getDocumentsMatchingQuery(a,t,n?s:et.min(),n?i:ct())).next(c=>(qv(r,CT(t),c),{documents:c,Qs:i})))}function qv(e,t,n){let r=e.Os.get(t)||et.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),e.Os.set(t,r)}class hh{constructor(){this.activeTargetIds=MT()}zs(t){this.activeTargetIds=this.activeTargetIds.add(t)}js(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Gs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class zv{constructor(){this.Mo=new hh,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t,n=!0){return n&&this.Mo.zs(t),this.xo[t]||"not-current"}updateQueryState(t,n,r){this.xo[t]=n}removeLocalQueryTarget(t){this.Mo.js(t)}isLocalQueryTarget(t){return this.Mo.activeTargetIds.has(t)}clearQueryState(t){delete this.xo[t]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(t){return this.Mo.activeTargetIds.has(t)}start(){return this.Mo=new hh,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hv{Oo(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fh="ConnectivityMonitor";class dh{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(t){this.qo.push(t)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){H(fh,"Network connectivity changed: AVAILABLE");for(const t of this.qo)t(0)}ko(){H(fh,"Network connectivity changed: UNAVAILABLE");for(const t of this.qo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let li=null;function Ba(){return li===null?li=function(){return 268435456+Math.round(2147483648*Math.random())}():li++,"0x"+li.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const na="RestConnection",Kv={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Gv{get $o(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+t.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===Di?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(t,n,r,s,i){const a=Ba(),c=this.zo(t,n.toUriEncodedString());H(na,`Sending RPC '${t}' ${a}:`,c,r);const u={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(u,s,i);const{host:f}=new URL(c),d=mc(f);return this.Jo(t,c,u,r,d).then(g=>(H(na,`Received RPC '${t}' ${a}: `,g),g),g=>{throw Pr(na,`RPC '${t}' ${a} failed with error: `,g,"url: ",c,"request:",r),g})}Ho(t,n,r,s,i,a){return this.Go(t,n,r,s,i)}jo(t,n,r){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Or}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>t[i]=s),r&&r.headers.forEach((s,i)=>t[i]=s)}zo(t,n){const r=Kv[t];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wv{constructor(t){this.Yo=t.Yo,this.Zo=t.Zo}Xo(t){this.e_=t}t_(t){this.n_=t}r_(t){this.i_=t}onMessage(t){this.s_=t}close(){this.Zo()}send(t){this.Yo(t)}o_(){this.e_()}__(){this.n_()}a_(t){this.i_(t)}u_(t){this.s_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jt="WebChannelConnection";class Qv extends Gv{constructor(t){super(t),this.c_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,n,r,s,i){const a=Ba();return new Promise((c,u)=>{const f=new nd;f.setWithCredentials(!0),f.listenOnce(rd.COMPLETE,()=>{try{switch(f.getLastErrorCode()){case gi.NO_ERROR:const g=f.getResponseJson();H(Jt,`XHR for RPC '${t}' ${a} received:`,JSON.stringify(g)),c(g);break;case gi.TIMEOUT:H(Jt,`RPC '${t}' ${a} timed out`),u(new W(D.DEADLINE_EXCEEDED,"Request time out"));break;case gi.HTTP_ERROR:const m=f.getStatus();if(H(Jt,`RPC '${t}' ${a} failed with status:`,m,"response text:",f.getResponseText()),m>0){let b=f.getResponseJson();Array.isArray(b)&&(b=b[0]);const x=b==null?void 0:b.error;if(x&&x.status&&x.message){const F=function(K){const z=K.toLowerCase().replace(/_/g,"-");return Object.values(D).indexOf(z)>=0?z:D.UNKNOWN}(x.status);u(new W(F,x.message))}else u(new W(D.UNKNOWN,"Server responded with status "+f.getStatus()))}else u(new W(D.UNAVAILABLE,"Connection failed."));break;default:tt(9055,{l_:t,streamId:a,h_:f.getLastErrorCode(),P_:f.getLastError()})}}finally{H(Jt,`RPC '${t}' ${a} completed.`)}});const d=JSON.stringify(s);H(Jt,`RPC '${t}' ${a} sending request:`,s),f.send(n,"POST",d,r,15)})}T_(t,n,r){const s=Ba(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=od(),c=id(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(u.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(u.useFetchStreams=!0),this.jo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const d=i.join("");H(Jt,`Creating RPC '${t}' stream ${s}: ${d}`,u);const g=a.createWebChannel(d,u);this.I_(g);let m=!1,b=!1;const x=new Wv({Yo:B=>{b?H(Jt,`Not sending because RPC '${t}' stream ${s} is closed:`,B):(m||(H(Jt,`Opening RPC '${t}' stream ${s} transport.`),g.open(),m=!0),H(Jt,`RPC '${t}' stream ${s} sending:`,B),g.send(B))},Zo:()=>g.close()}),F=(B,K,z)=>{B.listen(K,X=>{try{z(X)}catch(G){setTimeout(()=>{throw G},0)}})};return F(g,as.EventType.OPEN,()=>{b||(H(Jt,`RPC '${t}' stream ${s} transport opened.`),x.o_())}),F(g,as.EventType.CLOSE,()=>{b||(b=!0,H(Jt,`RPC '${t}' stream ${s} transport closed`),x.a_(),this.E_(g))}),F(g,as.EventType.ERROR,B=>{b||(b=!0,Pr(Jt,`RPC '${t}' stream ${s} transport errored. Name:`,B.name,"Message:",B.message),x.a_(new W(D.UNAVAILABLE,"The operation could not be completed")))}),F(g,as.EventType.MESSAGE,B=>{var K;if(!b){const z=B.data[0];mt(!!z,16349);const X=z,G=(X==null?void 0:X.error)||((K=X[0])==null?void 0:K.error);if(G){H(Jt,`RPC '${t}' stream ${s} received error:`,G);const ht=G.status;let yt=function(T){const I=xt[T];if(I!==void 0)return $d(I)}(ht),w=G.message;yt===void 0&&(yt=D.INTERNAL,w="Unknown error status: "+ht+" with message "+G.message),b=!0,x.a_(new W(yt,w)),g.close()}else H(Jt,`RPC '${t}' stream ${s} received:`,z),x.u_(z)}}),F(c,sd.STAT_EVENT,B=>{B.stat===Ca.PROXY?H(Jt,`RPC '${t}' stream ${s} detected buffering proxy`):B.stat===Ca.NOPROXY&&H(Jt,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{x.__()},0),x}terminate(){this.c_.forEach(t=>t.close()),this.c_=[]}I_(t){this.c_.push(t)}E_(t){this.c_=this.c_.filter(n=>n===t)}}function ra(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ho(e){return new ZT(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{constructor(t,n,r=1e3,s=1.5,i=6e4){this.Mi=t,this.timerId=n,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(t){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&H("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),t())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ph="PersistentStream";class rp{constructor(t,n,r,s,i,a,c,u){this.Mi=t,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new np(t,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(t){this.Q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():n&&n.code===D.RESOURCE_EXHAUSTED?(nn(n.toString()),nn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===D.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.r_(n)}K_(){}auth(){this.state=1;const t=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===n&&this.G_(r,s)},r=>{t(()=>{const s=new W(D.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(t,n){const r=this.W_(this.D_);this.stream=this.j_(t,n),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(t){return H(ph,`close with error: ${t}`),this.stream=null,this.close(4,t)}W_(t){return n=>{this.Mi.enqueueAndForget(()=>this.D_===t?n():(H(ph,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Yv extends rp{constructor(t,n,r,s,i,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,a),this.serializer=i}j_(t,n){return this.connection.T_("Listen",t,n)}J_(t){return this.onNext(t)}onNext(t){this.M_.reset();const n=nv(this.serializer,t),r=function(i){if(!("targetChange"in i))return et.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?et.min():a.readTime?je(a.readTime):et.min()}(t);return this.listener.H_(n,r)}Y_(t){const n={};n.database=Fa(this.serializer),n.addTarget=function(i,a){let c;const u=a.target;if(c=Na(u)?{documents:iv(i,u)}:{query:ov(i,u).ft},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=Hd(i,a.resumeToken);const f=Oa(i,a.expectedCount);f!==null&&(c.expectedCount=f)}else if(a.snapshotVersion.compareTo(et.min())>0){c.readTime=ki(i,a.snapshotVersion.toTimestamp());const f=Oa(i,a.expectedCount);f!==null&&(c.expectedCount=f)}return c}(this.serializer,t);const r=cv(this.serializer,t);r&&(n.labels=r),this.q_(n)}Z_(t){const n={};n.database=Fa(this.serializer),n.removeTarget=t,this.q_(n)}}class Xv extends rp{constructor(t,n,r,s,i,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,a),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(t,n){return this.connection.T_("Write",t,n)}J_(t){return mt(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,mt(!t.writeResults||t.writeResults.length===0,55816),this.listener.ta()}onNext(t){mt(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const n=sv(t.writeResults,t.commitTime),r=je(t.commitTime);return this.listener.na(r,n)}ra(){const t={};t.database=Fa(this.serializer),this.q_(t)}ea(t){const n={streamToken:this.lastStreamToken,writes:t.map(r=>rv(this.serializer,r))};this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jv{}class Zv extends Jv{constructor(t,n,r,s){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new W(D.FAILED_PRECONDITION,"The client has already been terminated.")}Go(t,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Go(t,ka(n,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new W(D.UNKNOWN,i.toString())})}Ho(t,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.Ho(t,ka(n,r),s,a,c,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new W(D.UNKNOWN,a.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class tw{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(nn(n),this.aa=!1):H("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xn="RemoteStore";class ew{constructor(t,n,r,s,i){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo(a=>{r.enqueueAndForget(async()=>{rr(this)&&(H(Xn,"Restarting streams for network reachability change."),await async function(u){const f=nt(u);f.Ea.add(4),await zs(f),f.Ra.set("Unknown"),f.Ea.delete(4),await fo(f)}(this))})}),this.Ra=new tw(r,s)}}async function fo(e){if(rr(e))for(const t of e.da)await t(!0)}async function zs(e){for(const t of e.da)await t(!1)}function sp(e,t){const n=nt(e);n.Ia.has(t.targetId)||(n.Ia.set(t.targetId,t),Fc(n)?Lc(n):Fr(n).O_()&&kc(n,t))}function Oc(e,t){const n=nt(e),r=Fr(n);n.Ia.delete(t),r.O_()&&ip(n,t),n.Ia.size===0&&(r.O_()?r.L_():rr(n)&&n.Ra.set("Unknown"))}function kc(e,t){if(e.Va.Ue(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(et.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}Fr(e).Y_(t)}function ip(e,t){e.Va.Ue(t),Fr(e).Z_(t)}function Lc(e){e.Va=new QT({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),At:t=>e.Ia.get(t)||null,ht:()=>e.datastore.serializer.databaseId}),Fr(e).start(),e.Ra.ua()}function Fc(e){return rr(e)&&!Fr(e).x_()&&e.Ia.size>0}function rr(e){return nt(e).Ea.size===0}function op(e){e.Va=void 0}async function nw(e){e.Ra.set("Online")}async function rw(e){e.Ia.forEach((t,n)=>{kc(e,t)})}async function sw(e,t){op(e),Fc(e)?(e.Ra.ha(t),Lc(e)):e.Ra.set("Unknown")}async function iw(e,t,n){if(e.Ra.set("Online"),t instanceof zd&&t.state===2&&t.cause)try{await async function(s,i){const a=i.cause;for(const c of i.targetIds)s.Ia.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.Ia.delete(c),s.Va.removeTarget(c))}(e,t)}catch(r){H(Xn,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Fi(e,r)}else if(t instanceof Ei?e.Va.Ze(t):t instanceof qd?e.Va.st(t):e.Va.tt(t),!n.isEqual(et.min()))try{const r=await ep(e.localStore);n.compareTo(r)>=0&&await function(i,a){const c=i.Va.Tt(a);return c.targetChanges.forEach((u,f)=>{if(u.resumeToken.approximateByteSize()>0){const d=i.Ia.get(f);d&&i.Ia.set(f,d.withResumeToken(u.resumeToken,a))}}),c.targetMismatches.forEach((u,f)=>{const d=i.Ia.get(u);if(!d)return;i.Ia.set(u,d.withResumeToken(Qt.EMPTY_BYTE_STRING,d.snapshotVersion)),ip(i,u);const g=new mn(d.target,u,f,d.sequenceNumber);kc(i,g)}),i.remoteSyncer.applyRemoteEvent(c)}(e,n)}catch(r){H(Xn,"Failed to raise snapshot:",r),await Fi(e,r)}}async function Fi(e,t,n){if(!Lr(t))throw t;e.Ea.add(1),await zs(e),e.Ra.set("Offline"),n||(n=()=>ep(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{H(Xn,"Retrying IndexedDB access"),await n(),e.Ea.delete(1),await fo(e)})}function ap(e,t){return t().catch(n=>Fi(e,n,t))}async function po(e){const t=nt(e),n=Pn(t);let r=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:wc;for(;ow(t);)try{const s=await jv(t.localStore,r);if(s===null){t.Ta.length===0&&n.L_();break}r=s.batchId,aw(t,s)}catch(s){await Fi(t,s)}cp(t)&&lp(t)}function ow(e){return rr(e)&&e.Ta.length<10}function aw(e,t){e.Ta.push(t);const n=Pn(e);n.O_()&&n.X_&&n.ea(t.mutations)}function cp(e){return rr(e)&&!Pn(e).x_()&&e.Ta.length>0}function lp(e){Pn(e).start()}async function cw(e){Pn(e).ra()}async function lw(e){const t=Pn(e);for(const n of e.Ta)t.ea(n.mutations)}async function uw(e,t,n){const r=e.Ta.shift(),s=Cc.from(r,t,n);await ap(e,()=>e.remoteSyncer.applySuccessfulWrite(s)),await po(e)}async function hw(e,t){t&&Pn(e).X_&&await async function(r,s){if(function(a){return KT(a)&&a!==D.ABORTED}(s.code)){const i=r.Ta.shift();Pn(r).B_(),await ap(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await po(r)}}(e,t),cp(e)&&lp(e)}async function gh(e,t){const n=nt(e);n.asyncQueue.verifyOperationInProgress(),H(Xn,"RemoteStore received new credentials");const r=rr(n);n.Ea.add(3),await zs(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.Ea.delete(3),await fo(n)}async function fw(e,t){const n=nt(e);t?(n.Ea.delete(2),await fo(n)):t||(n.Ea.add(2),await zs(n),n.Ra.set("Unknown"))}function Fr(e){return e.ma||(e.ma=function(n,r,s){const i=nt(n);return i.sa(),new Yv(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(e.datastore,e.asyncQueue,{Xo:nw.bind(null,e),t_:rw.bind(null,e),r_:sw.bind(null,e),H_:iw.bind(null,e)}),e.da.push(async t=>{t?(e.ma.B_(),Fc(e)?Lc(e):e.Ra.set("Unknown")):(await e.ma.stop(),op(e))})),e.ma}function Pn(e){return e.fa||(e.fa=function(n,r,s){const i=nt(n);return i.sa(),new Xv(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(e.datastore,e.asyncQueue,{Xo:()=>Promise.resolve(),t_:cw.bind(null,e),r_:hw.bind(null,e),ta:lw.bind(null,e),na:uw.bind(null,e)}),e.da.push(async t=>{t?(e.fa.B_(),await po(e)):(await e.fa.stop(),e.Ta.length>0&&(H(Xn,`Stopping write stream with ${e.Ta.length} pending writes`),e.Ta=[]))})),e.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(t,n,r,s,i){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new wn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,s,i){const a=Date.now()+r,c=new Uc(t,n,a,s,i);return c.start(r),c}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(D.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Bc(e,t){if(nn("AsyncQueue",`${t}: ${e}`),Lr(e))return new W(D.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{static emptySet(t){return new Ar(t.comparator)}constructor(t){this.comparator=t?(n,r)=>t(n,r)||Y.comparator(n.key,r.key):(n,r)=>Y.comparator(n.key,r.key),this.keyedMap=cs(),this.sortedSet=new Ct(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,r)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Ar)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const r=new Ar;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh{constructor(){this.ga=new Ct(Y.comparator)}track(t){const n=t.doc.key,r=this.ga.get(n);r?t.type!==0&&r.type===3?this.ga=this.ga.insert(n,t):t.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.ga=this.ga.remove(n):t.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:t.doc}):tt(63341,{Rt:t,pa:r}):this.ga=this.ga.insert(n,t)}ya(){const t=[];return this.ga.inorderTraversal((n,r)=>{t.push(r)}),t}}class Mr{constructor(t,n,r,s,i,a,c,u,f){this.query=t,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=u,this.hasCachedResults=f}static fromInitialDocuments(t,n,r,s,i){const a=[];return n.forEach(c=>{a.push({type:0,doc:c})}),new Mr(t,n,Ar.emptySet(n),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&oo(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,r=t.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dw{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(t=>t.Da())}}class pw{constructor(){this.queries=_h(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=nt(n),i=s.queries;s.queries=_h(),i.forEach((a,c)=>{for(const u of c.Sa)u.onError(r)})})(this,new W(D.ABORTED,"Firestore shutting down"))}}function _h(){return new nr(e=>Cd(e),oo)}async function up(e,t){const n=nt(e);let r=3;const s=t.query;let i=n.queries.get(s);i?!i.ba()&&t.Da()&&(r=2):(i=new dw,r=t.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(a){const c=Bc(a,`Initialization of query '${pr(t.query)}' failed`);return void t.onError(c)}n.queries.set(s,i),i.Sa.push(t),t.va(n.onlineState),i.wa&&t.Fa(i.wa)&&jc(n)}async function hp(e,t){const n=nt(e),r=t.query;let s=3;const i=n.queries.get(r);if(i){const a=i.Sa.indexOf(t);a>=0&&(i.Sa.splice(a,1),i.Sa.length===0?s=t.Da()?0:1:!i.ba()&&t.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function gw(e,t){const n=nt(e);let r=!1;for(const s of t){const i=s.query,a=n.queries.get(i);if(a){for(const c of a.Sa)c.Fa(s)&&(r=!0);a.wa=s}}r&&jc(n)}function mw(e,t,n){const r=nt(e),s=r.queries.get(t);if(s)for(const i of s.Sa)i.onError(n);r.queries.delete(t)}function jc(e){e.Ca.forEach(t=>{t.next()})}var ja,yh;(yh=ja||(ja={})).Ma="default",yh.Cache="cache";class fp{constructor(t,n,r){this.query=t,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new Mr(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.Oa?this.Ba(t)&&(this.xa.next(t),n=!0):this.La(t,this.onlineState)&&(this.ka(t),n=!0),this.Na=t,n}onError(t){this.xa.error(t)}va(t){this.onlineState=t;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,t)&&(this.ka(this.Na),n=!0),n}La(t,n){if(!t.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}Ba(t){if(t.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(t){t=Mr.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Oa=!0,this.xa.next(t)}Da(){return this.options.source!==ja.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dp{constructor(t){this.key=t}}class pp{constructor(t){this.key=t}}class _w{constructor(t,n){this.query=t,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=ct(),this.mutatedKeys=ct(),this.eu=Pd(t),this.tu=new Ar(this.eu)}get nu(){return this.Ya}ru(t,n){const r=n?n.iu:new mh,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,a=s,c=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,f=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((d,g)=>{const m=s.get(d),b=ao(this.query,g)?g:null,x=!!m&&this.mutatedKeys.has(m.key),F=!!b&&(b.hasLocalMutations||this.mutatedKeys.has(b.key)&&b.hasCommittedMutations);let B=!1;m&&b?m.data.isEqual(b.data)?x!==F&&(r.track({type:3,doc:b}),B=!0):this.su(m,b)||(r.track({type:2,doc:b}),B=!0,(u&&this.eu(b,u)>0||f&&this.eu(b,f)<0)&&(c=!0)):!m&&b?(r.track({type:0,doc:b}),B=!0):m&&!b&&(r.track({type:1,doc:m}),B=!0,(u||f)&&(c=!0)),B&&(b?(a=a.add(b),i=F?i.add(d):i.delete(d)):(a=a.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const d=this.query.limitType==="F"?a.last():a.first();a=a.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{tu:a,iu:r,Cs:c,mutatedKeys:i}}su(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,r,s){const i=this.tu;this.tu=t.tu,this.mutatedKeys=t.mutatedKeys;const a=t.iu.ya();a.sort((d,g)=>function(b,x){const F=B=>{switch(B){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return tt(20277,{Rt:B})}};return F(b)-F(x)}(d.type,g.type)||this.eu(d.doc,g.doc)),this.ou(r),s=s??!1;const c=n&&!s?this._u():[],u=this.Xa.size===0&&this.current&&!s?1:0,f=u!==this.Za;return this.Za=u,a.length!==0||f?{snapshot:new Mr(this.query,t.tu,i,a,t.mutatedKeys,u===0,f,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new mh,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(t){return!this.Ya.has(t)&&!!this.tu.has(t)&&!this.tu.get(t).hasLocalMutations}ou(t){t&&(t.addedDocuments.forEach(n=>this.Ya=this.Ya.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.Ya=this.Ya.delete(n)),this.current=t.current)}_u(){if(!this.current)return[];const t=this.Xa;this.Xa=ct(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const n=[];return t.forEach(r=>{this.Xa.has(r)||n.push(new pp(r))}),this.Xa.forEach(r=>{t.has(r)||n.push(new dp(r))}),n}cu(t){this.Ya=t.Qs,this.Xa=ct();const n=this.ru(t.documents);return this.applyChanges(n,!0)}lu(){return Mr.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const $c="SyncEngine";class yw{constructor(t,n,r){this.query=t,this.targetId=n,this.view=r}}class Ew{constructor(t){this.key=t,this.hu=!1}}class Tw{constructor(t,n,r,s,i,a){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new nr(c=>Cd(c),oo),this.Iu=new Map,this.Eu=new Set,this.du=new Ct(Y.comparator),this.Au=new Map,this.Ru=new Dc,this.Vu={},this.mu=new Map,this.fu=Nr.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function vw(e,t,n=!0){const r=Tp(e);let s;const i=r.Tu.get(t);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await gp(r,t,n,!0),s}async function ww(e,t){const n=Tp(e);await gp(n,t,!0,!1)}async function gp(e,t,n,r){const s=await $v(e.localStore,Be(t)),i=s.targetId,a=e.sharedClientState.addLocalQueryTarget(i,n);let c;return r&&(c=await Iw(e,t,i,a==="current",s.resumeToken)),e.isPrimaryClient&&n&&sp(e.remoteStore,s),c}async function Iw(e,t,n,r,s){e.pu=(g,m,b)=>async function(F,B,K,z){let X=B.view.ru(K);X.Cs&&(X=await uh(F.localStore,B.query,!1).then(({documents:w})=>B.view.ru(w,X)));const G=z&&z.targetChanges.get(B.targetId),ht=z&&z.targetMismatches.get(B.targetId)!=null,yt=B.view.applyChanges(X,F.isPrimaryClient,G,ht);return Th(F,B.targetId,yt.au),yt.snapshot}(e,g,m,b);const i=await uh(e.localStore,t,!0),a=new _w(t,i.Qs),c=a.ru(i.documents),u=qs.createSynthesizedTargetChangeForCurrentChange(n,r&&e.onlineState!=="Offline",s),f=a.applyChanges(c,e.isPrimaryClient,u);Th(e,n,f.au);const d=new yw(t,n,a);return e.Tu.set(t,d),e.Iu.has(n)?e.Iu.get(n).push(t):e.Iu.set(n,[t]),f.snapshot}async function Aw(e,t,n){const r=nt(e),s=r.Tu.get(t),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter(a=>!oo(a,t))),void r.Tu.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Ua(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Oc(r.remoteStore,s.targetId),$a(r,s.targetId)}).catch(kr)):($a(r,s.targetId),await Ua(r.localStore,s.targetId,!0))}async function bw(e,t){const n=nt(e),r=n.Tu.get(t),s=n.Iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Oc(n.remoteStore,r.targetId))}async function Sw(e,t,n){const r=Nw(e);try{const s=await function(a,c){const u=nt(a),f=bt.now(),d=c.reduce((b,x)=>b.add(x.key),ct());let g,m;return u.persistence.runTransaction("Locally write mutations","readwrite",b=>{let x=rn(),F=ct();return u.Ns.getEntries(b,d).next(B=>{x=B,x.forEach((K,z)=>{z.isValidDocument()||(F=F.add(K))})}).next(()=>u.localDocuments.getOverlayedDocuments(b,x)).next(B=>{g=B;const K=[];for(const z of c){const X=jT(z,g.get(z.key).overlayedDocument);X!=null&&K.push(new Mn(z.key,X,vd(X.value.mapValue),Ve.exists(!0)))}return u.mutationQueue.addMutationBatch(b,f,K,c)}).next(B=>{m=B;const K=B.applyToLocalDocumentSet(g,F);return u.documentOverlayCache.saveOverlays(b,B.batchId,K)})}).then(()=>({batchId:m.batchId,changes:Dd(g)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(a,c,u){let f=a.Vu[a.currentUser.toKey()];f||(f=new Ct(at)),f=f.insert(c,u),a.Vu[a.currentUser.toKey()]=f}(r,s.batchId,n),await Hs(r,s.changes),await po(r.remoteStore)}catch(s){const i=Bc(s,"Failed to persist write");n.reject(i)}}async function mp(e,t){const n=nt(e);try{const r=await Uv(n.localStore,t);t.targetChanges.forEach((s,i)=>{const a=n.Au.get(i);a&&(mt(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.hu=!0:s.modifiedDocuments.size>0?mt(a.hu,14607):s.removedDocuments.size>0&&(mt(a.hu,42227),a.hu=!1))}),await Hs(n,r,t)}catch(r){await kr(r)}}function Eh(e,t,n){const r=nt(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach((i,a)=>{const c=a.view.va(t);c.snapshot&&s.push(c.snapshot)}),function(a,c){const u=nt(a);u.onlineState=c;let f=!1;u.queries.forEach((d,g)=>{for(const m of g.Sa)m.va(c)&&(f=!0)}),f&&jc(u)}(r.eventManager,t),s.length&&r.Pu.H_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Rw(e,t,n){const r=nt(e);r.sharedClientState.updateQueryState(t,"rejected",n);const s=r.Au.get(t),i=s&&s.key;if(i){let a=new Ct(Y.comparator);a=a.insert(i,ee.newNoDocument(i,et.min()));const c=ct().add(i),u=new uo(et.min(),new Map,new Ct(at),a,c);await mp(r,u),r.du=r.du.remove(i),r.Au.delete(t),qc(r)}else await Ua(r.localStore,t,!1).then(()=>$a(r,t,n)).catch(kr)}async function Cw(e,t){const n=nt(e),r=t.batch.batchId;try{const s=await Fv(n.localStore,t);yp(n,r,null),_p(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Hs(n,s)}catch(s){await kr(s)}}async function Pw(e,t,n){const r=nt(e);try{const s=await function(a,c){const u=nt(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",f=>{let d;return u.mutationQueue.lookupMutationBatch(f,c).next(g=>(mt(g!==null,37113),d=g.keys(),u.mutationQueue.removeMutationBatch(f,g))).next(()=>u.mutationQueue.performConsistencyCheck(f)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(f,d,c)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,d)).next(()=>u.localDocuments.getDocuments(f,d))})}(r.localStore,t);yp(r,t,n),_p(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await Hs(r,s)}catch(s){await kr(s)}}function _p(e,t){(e.mu.get(t)||[]).forEach(n=>{n.resolve()}),e.mu.delete(t)}function yp(e,t,n){const r=nt(e);let s=r.Vu[r.currentUser.toKey()];if(s){const i=s.get(t);i&&(n?i.reject(n):i.resolve(),s=s.remove(t)),r.Vu[r.currentUser.toKey()]=s}}function $a(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.Iu.get(t))e.Tu.delete(r),n&&e.Pu.yu(r,n);e.Iu.delete(t),e.isPrimaryClient&&e.Ru.jr(t).forEach(r=>{e.Ru.containsKey(r)||Ep(e,r)})}function Ep(e,t){e.Eu.delete(t.path.canonicalString());const n=e.du.get(t);n!==null&&(Oc(e.remoteStore,n),e.du=e.du.remove(t),e.Au.delete(n),qc(e))}function Th(e,t,n){for(const r of n)r instanceof dp?(e.Ru.addReference(r.key,t),Vw(e,r)):r instanceof pp?(H($c,"Document no longer in limbo: "+r.key),e.Ru.removeReference(r.key,t),e.Ru.containsKey(r.key)||Ep(e,r.key)):tt(19791,{wu:r})}function Vw(e,t){const n=t.key,r=n.path.canonicalString();e.du.get(n)||e.Eu.has(r)||(H($c,"New document in limbo: "+n),e.Eu.add(r),qc(e))}function qc(e){for(;e.Eu.size>0&&e.du.size<e.maxConcurrentLimboResolutions;){const t=e.Eu.values().next().value;e.Eu.delete(t);const n=new Y(At.fromString(t)),r=e.fu.next();e.Au.set(r,new Ew(n)),e.du=e.du.insert(n,r),sp(e.remoteStore,new mn(Be(io(n.path)),r,"TargetPurposeLimboResolution",eo.ce))}}async function Hs(e,t,n){const r=nt(e),s=[],i=[],a=[];r.Tu.isEmpty()||(r.Tu.forEach((c,u)=>{a.push(r.pu(u,t,n).then(f=>{var d;if((f||n)&&r.isPrimaryClient){const g=f?!f.fromCache:(d=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,g?"current":"not-current")}if(f){s.push(f);const g=Nc.As(u.targetId,f);i.push(g)}}))}),await Promise.all(a),r.Pu.H_(s),await async function(u,f){const d=nt(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>V.forEach(f,m=>V.forEach(m.Es,b=>d.persistence.referenceDelegate.addReference(g,m.targetId,b)).next(()=>V.forEach(m.ds,b=>d.persistence.referenceDelegate.removeReference(g,m.targetId,b)))))}catch(g){if(!Lr(g))throw g;H(Mc,"Failed to update sequence numbers: "+g)}for(const g of f){const m=g.targetId;if(!g.fromCache){const b=d.Ms.get(m),x=b.snapshotVersion,F=b.withLastLimboFreeSnapshotVersion(x);d.Ms=d.Ms.insert(m,F)}}}(r.localStore,i))}async function Dw(e,t){const n=nt(e);if(!n.currentUser.isEqual(t)){H($c,"User change. New user:",t.toKey());const r=await tp(n.localStore,t);n.currentUser=t,function(i,a){i.mu.forEach(c=>{c.forEach(u=>{u.reject(new W(D.CANCELLED,a))})}),i.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Hs(n,r.Ls)}}function xw(e,t){const n=nt(e),r=n.Au.get(t);if(r&&r.hu)return ct().add(r.key);{let s=ct();const i=n.Iu.get(t);if(!i)return s;for(const a of i){const c=n.Tu.get(a);s=s.unionWith(c.view.nu)}return s}}function Tp(e){const t=nt(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=mp.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=xw.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Rw.bind(null,t),t.Pu.H_=gw.bind(null,t.eventManager),t.Pu.yu=mw.bind(null,t.eventManager),t}function Nw(e){const t=nt(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Cw.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Pw.bind(null,t),t}class Ui{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=ho(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,n){return null}Mu(t,n){return null}vu(t){return Lv(this.persistence,new Mv,t.initialUser,this.serializer)}Cu(t){return new Zd(xc.mi,this.serializer)}Du(t){return new zv}async terminate(){var t,n;(t=this.gcScheduler)==null||t.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ui.provider={build:()=>new Ui};class Mw extends Ui{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,n){mt(this.persistence.referenceDelegate instanceof Li,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Ev(r,t.asyncQueue,n)}Cu(t){const n=this.cacheSizeBytes!==void 0?he.withCacheSize(this.cacheSizeBytes):he.DEFAULT;return new Zd(r=>Li.mi(r,n),this.serializer)}}class qa{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Eh(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Dw.bind(null,this.syncEngine),await fw(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new pw}()}createDatastore(t){const n=ho(t.databaseInfo.databaseId),r=function(i){return new Qv(i)}(t.databaseInfo);return function(i,a,c,u){return new Zv(i,a,c,u)}(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return function(r,s,i,a,c){return new ew(r,s,i,a,c)}(this.localStore,this.datastore,t.asyncQueue,n=>Eh(this.syncEngine,n,0),function(){return dh.v()?new dh:new Hv}())}createSyncEngine(t,n){return function(s,i,a,c,u,f,d){const g=new Tw(s,i,a,c,u,f);return d&&(g.gu=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}async terminate(){var t,n;await async function(s){const i=nt(s);H(Xn,"RemoteStore shutting down."),i.Ea.add(5),await zs(i),i.Aa.shutdown(),i.Ra.set("Unknown")}(this.remoteStore),(t=this.datastore)==null||t.terminate(),(n=this.eventManager)==null||n.terminate()}}qa.provider={build:()=>new qa};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vp{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ou(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ou(this.observer.error,t):nn("Uncaught Error in snapshot listener:",t.toString()))}Nu(){this.muted=!0}Ou(t,n){setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vn="FirestoreClient";class Ow{constructor(t,n,r,s,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Zt.UNAUTHENTICATED,this.clientId=Tc.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{H(Vn,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(H(Vn,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new wn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=Bc(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function sa(e,t){e.asyncQueue.verifyOperationInProgress(),H(Vn,"Initializing OfflineComponentProvider");const n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async s=>{r.isEqual(s)||(await tp(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function vh(e,t){e.asyncQueue.verifyOperationInProgress();const n=await kw(e);H(Vn,"Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener(r=>gh(t.remoteStore,r)),e.setAppCheckTokenChangeListener((r,s)=>gh(t.remoteStore,s)),e._onlineComponents=t}async function kw(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){H(Vn,"Using user provided OfflineComponentProvider");try{await sa(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!function(s){return s.name==="FirebaseError"?s.code===D.FAILED_PRECONDITION||s.code===D.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Pr("Error using user provided cache. Falling back to memory cache: "+n),await sa(e,new Ui)}}else H(Vn,"Using default OfflineComponentProvider"),await sa(e,new Mw(void 0));return e._offlineComponents}async function wp(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(H(Vn,"Using user provided OnlineComponentProvider"),await vh(e,e._uninitializedComponentsProvider._online)):(H(Vn,"Using default OnlineComponentProvider"),await vh(e,new qa))),e._onlineComponents}function Lw(e){return wp(e).then(t=>t.syncEngine)}async function za(e){const t=await wp(e),n=t.eventManager;return n.onListen=vw.bind(null,t.syncEngine),n.onUnlisten=Aw.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=ww.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=bw.bind(null,t.syncEngine),n}function Fw(e,t,n={}){const r=new wn;return e.asyncQueue.enqueueAndForget(async()=>function(i,a,c,u,f){const d=new vp({next:m=>{d.Nu(),a.enqueueAndForget(()=>hp(i,g));const b=m.docs.has(c);!b&&m.fromCache?f.reject(new W(D.UNAVAILABLE,"Failed to get document because the client is offline.")):b&&m.fromCache&&u&&u.source==="server"?f.reject(new W(D.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):f.resolve(m)},error:m=>f.reject(m)}),g=new fp(io(c.path),d,{includeMetadataChanges:!0,qa:!0});return up(i,g)}(await za(e),e.asyncQueue,t,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ip(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wh=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ap="firestore.googleapis.com",Ih=!0;class Ah{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new W(D.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Ap,this.ssl=Ih}else this.host=t.host,this.ssl=t.ssl??Ih;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=Jd;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<_v)throw new W(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}eT("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ip(t.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new W(D.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new W(D.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new W(D.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class go{constructor(t,n,r,s){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ah({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new W(D.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new W(D.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ah(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new HE;switch(r.type){case"firstParty":return new QE(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new W(D.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=wh.get(n);r&&(H("ComponentProvider","Removing Datastore"),wh.delete(n),r.terminate())}(this),Promise.resolve()}}function Uw(e,t,n,r={}){var f;e=Pe(e,go);const s=mc(t),i=e._getSettings(),a={...i,emulatorOptions:e._getEmulatorOptions()},c=`${t}:${n}`;s&&(_y(`https://${c}`),vy("Firestore",!0)),i.host!==Ap&&i.host!==c&&Pr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:c,ssl:s,emulatorOptions:r};if(!Ps(u,a)&&(e._setSettings(u),r.mockUserToken)){let d,g;if(typeof r.mockUserToken=="string")d=r.mockUserToken,g=Zt.MOCK_USER;else{d=yy(r.mockUserToken,(f=e._app)==null?void 0:f.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new W(D.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new Zt(m)}e._authCredentials=new KE(new cd(d,g))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new mo(this.firestore,t,this._query)}}class Dt{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new In(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Dt(this.firestore,t,this._key)}toJSON(){return{type:Dt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,n,r){if(js(n,Dt._jsonSchema))return new Dt(t,r||null,new Y(At.fromString(n.referencePath)))}}Dt._jsonSchemaVersion="firestore/documentReference/1.0",Dt._jsonSchema={type:Nt("string",Dt._jsonSchemaVersion),referencePath:Nt("string")};class In extends mo{constructor(t,n,r){super(t,n,io(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Dt(this.firestore,null,new Y(t))}withConverter(t){return new In(this.firestore,t,this._path)}}function Bw(e,t,...n){if(e=we(e),ld("collection","path",t),e instanceof go){const r=At.fromString(t,...n);return Fu(r),new In(e,null,r)}{if(!(e instanceof Dt||e instanceof In))throw new W(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(At.fromString(t,...n));return Fu(r),new In(e.firestore,null,r)}}function Ti(e,t,...n){if(e=we(e),arguments.length===1&&(t=Tc.newId()),ld("doc","path",t),e instanceof go){const r=At.fromString(t,...n);return Lu(r),new Dt(e,null,new Y(r))}{if(!(e instanceof Dt||e instanceof In))throw new W(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(At.fromString(t,...n));return Lu(r),new Dt(e.firestore,e instanceof In?e.converter:null,new Y(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bh="AsyncQueue";class Sh{constructor(t=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new np(this,"async_queue_retry"),this._c=()=>{const r=ra();r&&H(bh,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=t;const n=ra();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const n=ra();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise(()=>{});const n=new wn;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Xu.push(t),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(t){if(!Lr(t))throw t;H(bh,"Operation failed with retryable error: "+t)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(t){const n=this.ac.then(()=>(this.rc=!0,t().catch(r=>{throw this.nc=r,this.rc=!1,nn("INTERNAL UNHANDLED ERROR: ",Rh(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(t,n,r){this.uc(),this.oc.indexOf(t)>-1&&(n=0);const s=Uc.createAndSchedule(this,t,n,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&tt(47125,{Pc:Rh(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ic(t){for(const n of this.tc)if(n.timerId===t)return!0;return!1}Ec(t){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Tc()})}dc(t){this.oc.push(t)}hc(t){const n=this.tc.indexOf(t);this.tc.splice(n,1)}}function Rh(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+`
`+e.stack),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ch(e){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(e,["next","error","complete"])}class Jn extends go{constructor(t,n,r,s){super(t,n,r,s),this.type="firestore",this._queue=new Sh,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Sh(t),this._firestoreClient=void 0,await t}}}function jw(e,t){const n=typeof e=="object"?e:Jf(),r=typeof e=="string"?e:t||Di,s=Bs(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=gy("firestore");i&&Uw(s,...i)}return s}function zc(e){if(e._terminated)throw new W(D.FAILED_PRECONDITION,"The client has already been terminated.");return e._firestoreClient||$w(e),e._firestoreClient}function $w(e){var r,s,i;const t=e._freezeSettings(),n=function(c,u,f,d){return new fT(c,u,f,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,Ip(d.experimentalLongPollingOptions),d.useFetchStreams,d.isUsingEmulator)}(e._databaseId,((r=e._app)==null?void 0:r.options.appId)||"",e._persistenceKey,t);e._componentsProvider||(s=t.localCache)!=null&&s._offlineComponentProvider&&((i=t.localCache)!=null&&i._onlineComponentProvider)&&(e._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),e._firestoreClient=new Ow(e._authCredentials,e._appCheckCredentials,e._queue,n,e._componentsProvider&&function(c){const u=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(u),_online:u}}(e._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Te(Qt.fromBase64String(t))}catch(n){throw new W(D.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Te(Qt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:Te._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(js(t,Te._jsonSchema))return Te.fromBase64String(t.bytes)}}Te._jsonSchemaVersion="firestore/bytes/1.0",Te._jsonSchema={type:Nt("string",Te._jsonSchemaVersion),bytes:Nt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new W(D.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Wt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new W(D.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new W(D.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return at(this._lat,t._lat)||at(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:$e._jsonSchemaVersion}}static fromJSON(t){if(js(t,$e._jsonSchema))return new $e(t.latitude,t.longitude)}}$e._jsonSchemaVersion="firestore/geoPoint/1.0",$e._jsonSchema={type:Nt("string",$e._jsonSchemaVersion),latitude:Nt("number"),longitude:Nt("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(t){this._values=(t||[]).map(n=>n)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,t._values)}toJSON(){return{type:qe._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(js(t,qe._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every(n=>typeof n=="number"))return new qe(t.vectorValues);throw new W(D.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}qe._jsonSchemaVersion="firestore/vectorValue/1.0",qe._jsonSchema={type:Nt("string",qe._jsonSchemaVersion),vectorValues:Nt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qw=/^__.*__$/;class zw{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return this.fieldMask!==null?new Mn(t,this.data,this.fieldMask,n,this.fieldTransforms):new $s(t,this.data,n,this.fieldTransforms)}}class bp{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return new Mn(t,this.data,this.fieldMask,n,this.fieldTransforms)}}function Sp(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw tt(40011,{Ac:e})}}class Hc{constructor(t,n,r,s,i,a){this.settings=t,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(t){return new Hc({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(t){var s;const n=(s=this.path)==null?void 0:s.child(t),r=this.Vc({path:n,fc:!1});return r.gc(t),r}yc(t){var s;const n=(s=this.path)==null?void 0:s.child(t),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(t){return this.Vc({path:void 0,fc:!0})}Sc(t){return Bi(t,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}Rc(){if(this.path)for(let t=0;t<this.path.length;t++)this.gc(this.path.get(t))}gc(t){if(t.length===0)throw this.Sc("Document fields must not be empty");if(Sp(this.Ac)&&qw.test(t))throw this.Sc('Document fields cannot begin and end with "__"')}}class Hw{constructor(t,n,r){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=r||ho(t)}Cc(t,n,r,s=!1){return new Hc({Ac:t,methodName:n,Dc:r,path:Wt.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Kc(e){const t=e._freezeSettings(),n=ho(e._databaseId);return new Hw(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Rp(e,t,n,r,s,i={}){const a=e.Cc(i.merge||i.mergeFields?2:0,t,n,s);Wc("Data must be an object, but it was:",a,r);const c=Cp(r,a);let u,f;if(i.merge)u=new _e(a.fieldMask),f=a.fieldTransforms;else if(i.mergeFields){const d=[];for(const g of i.mergeFields){const m=Ha(t,g,n);if(!a.contains(m))throw new W(D.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);Vp(d,m)||d.push(m)}u=new _e(d),f=a.fieldTransforms.filter(g=>u.covers(g.field))}else u=null,f=a.fieldTransforms;return new zw(new fe(c),u,f)}class Eo extends yo{_toFieldTransform(t){if(t.Ac!==2)throw t.Ac===1?t.Sc(`${this._methodName}() can only appear at the top level of your update data`):t.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Eo}}class Gc extends yo{constructor(t,n){super(t),this.Fc=n}_toFieldTransform(t){const n=new Ls(t.serializer,Md(t.serializer,this.Fc));return new LT(t.path,n)}isEqual(t){return t instanceof Gc&&this.Fc===t.Fc}}function Kw(e,t,n,r){const s=e.Cc(1,t,n);Wc("Data must be an object, but it was:",s,r);const i=[],a=fe.empty();Nn(r,(u,f)=>{const d=Qc(t,u,n);f=we(f);const g=s.yc(d);if(f instanceof Eo)i.push(d);else{const m=To(f,g);m!=null&&(i.push(d),a.set(d,m))}});const c=new _e(i);return new bp(a,c,s.fieldTransforms)}function Gw(e,t,n,r,s,i){const a=e.Cc(1,t,n),c=[Ha(t,r,n)],u=[s];if(i.length%2!=0)throw new W(D.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)c.push(Ha(t,i[m])),u.push(i[m+1]);const f=[],d=fe.empty();for(let m=c.length-1;m>=0;--m)if(!Vp(f,c[m])){const b=c[m];let x=u[m];x=we(x);const F=a.yc(b);if(x instanceof Eo)f.push(b);else{const B=To(x,F);B!=null&&(f.push(b),d.set(b,B))}}const g=new _e(f);return new bp(d,g,a.fieldTransforms)}function To(e,t){if(Pp(e=we(e)))return Wc("Unsupported field value:",t,e),Cp(e,t);if(e instanceof yo)return function(r,s){if(!Sp(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.fc&&t.Ac!==4)throw t.Sc("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const c of r){let u=To(c,s.wc(a));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),a++}return{arrayValue:{values:i}}}(e,t)}return function(r,s){if((r=we(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Md(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=bt.fromDate(r);return{timestampValue:ki(s.serializer,i)}}if(r instanceof bt){const i=new bt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ki(s.serializer,i)}}if(r instanceof $e)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Te)return{bytesValue:Hd(s.serializer,r._byteString)};if(r instanceof Dt){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Sc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Vc(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof qe)return function(a,c){return{mapValue:{fields:{[yd]:{stringValue:Td},[xi]:{arrayValue:{values:a.toArray().map(f=>{if(typeof f!="number")throw c.Sc("VectorValues must only contain numeric values.");return Rc(c.serializer,f)})}}}}}}(r,s);throw s.Sc(`Unsupported field value: ${vc(r)}`)}(e,t)}function Cp(e,t){const n={};return fd(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Nn(e,(r,s)=>{const i=To(s,t.mc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Pp(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof bt||e instanceof $e||e instanceof Te||e instanceof Dt||e instanceof yo||e instanceof qe)}function Wc(e,t,n){if(!Pp(n)||!ud(n)){const r=vc(n);throw r==="an object"?t.Sc(e+" a custom object"):t.Sc(e+" "+r)}}function Ha(e,t,n){if((t=we(t))instanceof _o)return t._internalPath;if(typeof t=="string")return Qc(e,t);throw Bi("Field path arguments must be of type string or ",e,!1,void 0,n)}const Ww=new RegExp("[~\\*/\\[\\]]");function Qc(e,t,n){if(t.search(Ww)>=0)throw Bi(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new _o(...t.split("."))._internalPath}catch{throw Bi(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Bi(e,t,n,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${t}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let u="";return(i||a)&&(u+=" (found",i&&(u+=` in field ${r}`),a&&(u+=` in document ${s}`),u+=")"),new W(D.INVALID_ARGUMENT,c+e+u)}function Vp(e,t){return e.some(n=>n.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dp{constructor(t,n,r,s,i){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Dt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Qw(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(xp("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Qw extends Dp{data(){return super.data()}}function xp(e,t){return typeof t=="string"?Qc(e,t):t instanceof _o?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yw(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new W(D.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Xw{convertValue(t,n="none"){switch(Cn(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Vt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Rn(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 11:return this.convertObject(t.mapValue,n);case 10:return this.convertVectorValue(t.mapValue);default:throw tt(62114,{value:t})}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const r={};return Nn(t,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(t){var r,s,i;const n=(i=(s=(r=t.fields)==null?void 0:r[xi].arrayValue)==null?void 0:s.values)==null?void 0:i.map(a=>Vt(a.doubleValue));return new qe(n)}convertGeoPoint(t){return new $e(Vt(t.latitude),Vt(t.longitude))}convertArray(t,n){return(t.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(t,n){switch(n){case"previous":const r=ro(t);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(xs(t));default:return null}}convertTimestamp(t){const n=Sn(t);return new bt(n.seconds,n.nanos)}convertDocumentKey(t,n){const r=At.fromString(t);mt(Xd(r),9688,{name:t});const s=new Ns(r.get(1),r.get(3)),i=new Y(r.popFirst(5));return s.isEqual(n)||nn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Np(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}class us{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Wn extends Dp{constructor(t,n,r,s,i,a){super(t,n,r,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new vi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const r=this._document.data.field(xp("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new W(D.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,n={};return n.type=Wn._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Wn._jsonSchemaVersion="firestore/documentSnapshot/1.0",Wn._jsonSchema={type:Nt("string",Wn._jsonSchemaVersion),bundleSource:Nt("string","DocumentSnapshot"),bundleName:Nt("string"),bundle:Nt("string")};class vi extends Wn{data(t={}){return super.data(t)}}class br{constructor(t,n,r,s){this._firestore=t,this._userDataWriter=n,this._snapshot=s,this.metadata=new us(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(r=>{t.call(n,new vi(this._firestore,this._userDataWriter,r.key,r,new us(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new W(D.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(c=>{const u=new vi(s._firestore,s._userDataWriter,c.doc.key,c.doc,new us(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const u=new vi(s._firestore,s._userDataWriter,c.doc.key,c.doc,new us(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let f=-1,d=-1;return c.type!==0&&(f=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),d=a.indexOf(c.doc.key)),{type:Jw(c.type),doc:u,oldIndex:f,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new W(D.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=br._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=Tc.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function Jw(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return tt(61501,{type:e})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ph(e){e=Pe(e,Dt);const t=Pe(e.firestore,Jn);return Fw(zc(t),e._key).then(n=>Op(t,e,n))}br._jsonSchemaVersion="firestore/querySnapshot/1.0",br._jsonSchema={type:Nt("string",br._jsonSchemaVersion),bundleSource:Nt("string","QuerySnapshot"),bundleName:Nt("string"),bundle:Nt("string")};class Mp extends Xw{constructor(t){super(),this.firestore=t}convertBytes(t){return new Te(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new Dt(this.firestore,null,n)}}function ia(e,t,n){e=Pe(e,Dt);const r=Pe(e.firestore,Jn),s=Np(e.converter,t,n);return Yc(r,[Rp(Kc(r),"setDoc",e._key,s,e.converter!==null,n).toMutation(e._key,Ve.none())])}function Vh(e,t,n,...r){e=Pe(e,Dt);const s=Pe(e.firestore,Jn),i=Kc(s);let a;return a=typeof(t=we(t))=="string"||t instanceof _o?Gw(i,"updateDoc",e._key,t,n,r):Kw(i,"updateDoc",e._key,t),Yc(s,[a.toMutation(e._key,Ve.exists(!0))])}function Zw(e,t){const n=Pe(e.firestore,Jn),r=Ti(e),s=Np(e.converter,t);return Yc(n,[Rp(Kc(e.firestore),"addDoc",r._key,s,e.converter!==null,{}).toMutation(r._key,Ve.exists(!1))]).then(()=>r)}function oa(e,...t){var u,f,d;e=we(e);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof t[r]!="object"||Ch(t[r])||(n=t[r++]);const s={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(Ch(t[r])){const g=t[r];t[r]=(u=g.next)==null?void 0:u.bind(g),t[r+1]=(f=g.error)==null?void 0:f.bind(g),t[r+2]=(d=g.complete)==null?void 0:d.bind(g)}let i,a,c;if(e instanceof Dt)a=Pe(e.firestore,Jn),c=io(e._key.path),i={next:g=>{t[r]&&t[r](Op(a,e,g))},error:t[r+1],complete:t[r+2]};else{const g=Pe(e,mo);a=Pe(g.firestore,Jn),c=g._query;const m=new Mp(a);i={next:b=>{t[r]&&t[r](new br(a,m,g,b))},error:t[r+1],complete:t[r+2]},Yw(e._query)}return function(m,b,x,F){const B=new vp(F),K=new fp(b,B,x);return m.asyncQueue.enqueueAndForget(async()=>up(await za(m),K)),()=>{B.Nu(),m.asyncQueue.enqueueAndForget(async()=>hp(await za(m),K))}}(zc(a),c,s,i)}function Yc(e,t){return function(r,s){const i=new wn;return r.asyncQueue.enqueueAndForget(async()=>Sw(await Lw(r),s,i)),i.promise}(zc(e),t)}function Op(e,t,n){const r=n.docs.get(t._key),s=new Mp(e);return new Wn(e,s,t._key,r,new us(n.hasPendingWrites,n.fromCache),t.converter)}function Dh(e){return new Gc("increment",e)}(function(t,n=!0){(function(s){Or=s})(xE),An(new tn("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),c=new Jn(new GE(r.getProvider("auth-internal")),new YE(a,r.getProvider("app-check-internal")),function(f,d){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new W(D.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ns(f.options.projectId,d)}(a,s),a);return i={useFetchStreams:n,...i},c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),Ue(Nu,Mu,t),Ue(Nu,Mu,"esm2020")})();const kp="@firebase/installations",Xc="0.6.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lp=1e4,Fp=`w:${Xc}`,Up="FIS_v2",tI="https://firebaseinstallations.googleapis.com/v1",eI=60*60*1e3,nI="installations",rI="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sI={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Zn=new to(nI,rI,sI);function Bp(e){return e instanceof xn&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jp({projectId:e}){return`${tI}/projects/${e}/installations`}function $p(e){return{token:e.token,requestStatus:2,expiresIn:oI(e.expiresIn),creationTime:Date.now()}}async function qp(e,t){const r=(await t.json()).error;return Zn.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function zp({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function iI(e,{refreshToken:t}){const n=zp(e);return n.append("Authorization",aI(t)),n}async function Hp(e){const t=await e();return t.status>=500&&t.status<600?e():t}function oI(e){return Number(e.replace("s","000"))}function aI(e){return`${Up} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cI({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=jp(e),s=zp(e),i=t.getImmediate({optional:!0});if(i){const f=await i.getHeartbeatsHeader();f&&s.append("x-firebase-client",f)}const a={fid:n,authVersion:Up,appId:e.appId,sdkVersion:Fp},c={method:"POST",headers:s,body:JSON.stringify(a)},u=await Hp(()=>fetch(r,c));if(u.ok){const f=await u.json();return{fid:f.fid||n,registrationStatus:2,refreshToken:f.refreshToken,authToken:$p(f.authToken)}}else throw await qp("Create Installation",u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kp(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lI(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uI=/^[cdef][\w-]{21}$/,Ka="";function hI(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=fI(e);return uI.test(n)?n:Ka}catch{return Ka}}function fI(e){return lI(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vo(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gp=new Map;function Wp(e,t){const n=vo(e);Qp(n,t),dI(n,t)}function Qp(e,t){const n=Gp.get(e);if(n)for(const r of n)r(t)}function dI(e,t){const n=pI();n&&n.postMessage({key:e,fid:t}),gI()}let Kn=null;function pI(){return!Kn&&"BroadcastChannel"in self&&(Kn=new BroadcastChannel("[Firebase] FID Change"),Kn.onmessage=e=>{Qp(e.data.key,e.data.fid)}),Kn}function gI(){Gp.size===0&&Kn&&(Kn.close(),Kn=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mI="firebase-installations-database",_I=1,tr="firebase-installations-store";let aa=null;function Jc(){return aa||(aa=Yf(mI,_I,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(tr)}}})),aa}async function ji(e,t){const n=vo(e),s=(await Jc()).transaction(tr,"readwrite"),i=s.objectStore(tr),a=await i.get(n);return await i.put(t,n),await s.done,(!a||a.fid!==t.fid)&&Wp(e,t.fid),t}async function Yp(e){const t=vo(e),r=(await Jc()).transaction(tr,"readwrite");await r.objectStore(tr).delete(t),await r.done}async function wo(e,t){const n=vo(e),s=(await Jc()).transaction(tr,"readwrite"),i=s.objectStore(tr),a=await i.get(n),c=t(a);return c===void 0?await i.delete(n):await i.put(c,n),await s.done,c&&(!a||a.fid!==c.fid)&&Wp(e,c.fid),c}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zc(e){let t;const n=await wo(e.appConfig,r=>{const s=yI(r),i=EI(e,s);return t=i.registrationPromise,i.installationEntry});return n.fid===Ka?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function yI(e){const t=e||{fid:hI(),registrationStatus:0};return Xp(t)}function EI(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Zn.create("app-offline"));return{installationEntry:t,registrationPromise:s}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=TI(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:vI(e)}:{installationEntry:t}}async function TI(e,t){try{const n=await cI(e,t);return ji(e.appConfig,n)}catch(n){throw Bp(n)&&n.customData.serverCode===409?await Yp(e.appConfig):await ji(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function vI(e){let t=await xh(e.appConfig);for(;t.registrationStatus===1;)await Kp(100),t=await xh(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Zc(e);return r||n}return t}function xh(e){return wo(e,t=>{if(!t)throw Zn.create("installation-not-found");return Xp(t)})}function Xp(e){return wI(e)?{fid:e.fid,registrationStatus:0}:e}function wI(e){return e.registrationStatus===1&&e.registrationTime+Lp<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function II({appConfig:e,heartbeatServiceProvider:t},n){const r=AI(e,n),s=iI(e,n),i=t.getImmediate({optional:!0});if(i){const f=await i.getHeartbeatsHeader();f&&s.append("x-firebase-client",f)}const a={installation:{sdkVersion:Fp,appId:e.appId}},c={method:"POST",headers:s,body:JSON.stringify(a)},u=await Hp(()=>fetch(r,c));if(u.ok){const f=await u.json();return $p(f)}else throw await qp("Generate Auth Token",u)}function AI(e,{fid:t}){return`${jp(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tl(e,t=!1){let n;const r=await wo(e.appConfig,i=>{if(!Jp(i))throw Zn.create("not-registered");const a=i.authToken;if(!t&&RI(a))return i;if(a.requestStatus===1)return n=bI(e,t),i;{if(!navigator.onLine)throw Zn.create("app-offline");const c=PI(i);return n=SI(e,c),c}});return n?await n:r.authToken}async function bI(e,t){let n=await Nh(e.appConfig);for(;n.authToken.requestStatus===1;)await Kp(100),n=await Nh(e.appConfig);const r=n.authToken;return r.requestStatus===0?tl(e,t):r}function Nh(e){return wo(e,t=>{if(!Jp(t))throw Zn.create("not-registered");const n=t.authToken;return VI(n)?{...t,authToken:{requestStatus:0}}:t})}async function SI(e,t){try{const n=await II(e,t),r={...t,authToken:n};return await ji(e.appConfig,r),n}catch(n){if(Bp(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Yp(e.appConfig);else{const r={...t,authToken:{requestStatus:0}};await ji(e.appConfig,r)}throw n}}function Jp(e){return e!==void 0&&e.registrationStatus===2}function RI(e){return e.requestStatus===2&&!CI(e)}function CI(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+eI}function PI(e){const t={requestStatus:1,requestTime:Date.now()};return{...e,authToken:t}}function VI(e){return e.requestStatus===1&&e.requestTime+Lp<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DI(e){const t=e,{installationEntry:n,registrationPromise:r}=await Zc(t);return r?r.catch(console.error):tl(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xI(e,t=!1){const n=e;return await NI(n),(await tl(n,t)).token}async function NI(e){const{registrationPromise:t}=await Zc(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MI(e){if(!e||!e.options)throw ca("App Configuration");if(!e.name)throw ca("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw ca(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function ca(e){return Zn.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zp="installations",OI="installations-internal",kI=e=>{const t=e.getProvider("app").getImmediate(),n=MI(t),r=Bs(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},LI=e=>{const t=e.getProvider("app").getImmediate(),n=Bs(t,Zp).getImmediate();return{getId:()=>DI(n),getToken:s=>xI(n,s)}};function FI(){An(new tn(Zp,kI,"PUBLIC")),An(new tn(OI,LI,"PRIVATE"))}FI();Ue(kp,Xc);Ue(kp,Xc,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $i="analytics",UI="firebase_id",BI="origin",jI=60*1e3,$I="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",el="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ce=new _c("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qI={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},ye=new to("analytics","Analytics",qI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zI(e){if(!e.startsWith(el)){const t=ye.create("invalid-gtag-resource",{gtagURL:e});return ce.warn(t.message),""}return e}function tg(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function HI(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function KI(e,t){const n=HI("firebase-js-sdk-policy",{createScriptURL:zI}),r=document.createElement("script"),s=`${el}?l=${e}&id=${t}`;r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function GI(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function WI(e,t,n,r,s,i){const a=r[s];try{if(a)await t[a];else{const u=(await tg(n)).find(f=>f.measurementId===s);u&&await t[u.appId]}}catch(c){ce.error(c)}e("config",s,i)}async function QI(e,t,n,r,s){try{let i=[];if(s&&s.send_to){let a=s.send_to;Array.isArray(a)||(a=[a]);const c=await tg(n);for(const u of a){const f=c.find(g=>g.measurementId===u),d=f&&t[f.appId];if(d)i.push(d);else{i=[];break}}}i.length===0&&(i=Object.values(t)),await Promise.all(i),e("event",r,s||{})}catch(i){ce.error(i)}}function YI(e,t,n,r){async function s(i,...a){try{if(i==="event"){const[c,u]=a;await QI(e,t,n,c,u)}else if(i==="config"){const[c,u]=a;await WI(e,t,n,r,c,u)}else if(i==="consent"){const[c,u]=a;e("consent",c,u)}else if(i==="get"){const[c,u,f]=a;e("get",c,u,f)}else if(i==="set"){const[c]=a;e("set",c)}else e(i,...a)}catch(c){ce.error(c)}}return s}function XI(e,t,n,r,s){let i=function(...a){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=YI(i,e,t,n),{gtagCore:i,wrappedGtag:window[s]}}function JI(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(el)&&n.src.includes(e))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZI=30,t0=1e3;class e0{constructor(t={},n=t0){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const eg=new e0;function n0(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function r0(e){var a;const{appId:t,apiKey:n}=e,r={method:"GET",headers:n0(n)},s=$I.replace("{app-id}",t),i=await fetch(s,r);if(i.status!==200&&i.status!==304){let c="";try{const u=await i.json();(a=u.error)!=null&&a.message&&(c=u.error.message)}catch{}throw ye.create("config-fetch-failed",{httpStatus:i.status,responseMessage:c})}return i.json()}async function s0(e,t=eg,n){const{appId:r,apiKey:s,measurementId:i}=e.options;if(!r)throw ye.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw ye.create("no-api-key")}const a=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new a0;return setTimeout(async()=>{c.abort()},n!==void 0?n:jI),ng({appId:r,apiKey:s,measurementId:i},a,c,t)}async function ng(e,{throttleEndTimeMillis:t,backoffCount:n},r,s=eg){var c;const{appId:i,measurementId:a}=e;try{await i0(r,t)}catch(u){if(a)return ce.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:i,measurementId:a};throw u}try{const u=await r0(e);return s.deleteThrottleMetadata(i),u}catch(u){const f=u;if(!o0(f)){if(s.deleteThrottleMetadata(i),a)return ce.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${f==null?void 0:f.message}]`),{appId:i,measurementId:a};throw u}const d=Number((c=f==null?void 0:f.customData)==null?void 0:c.httpStatus)===503?Iu(n,s.intervalMillis,ZI):Iu(n,s.intervalMillis),g={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return s.setThrottleMetadata(i,g),ce.debug(`Calling attemptFetch again in ${d} millis`),ng(e,g,r,s)}}function i0(e,t){return new Promise((n,r)=>{const s=Math.max(t-Date.now(),0),i=setTimeout(n,s);e.addEventListener(()=>{clearTimeout(i),r(ye.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function o0(e){if(!(e instanceof xn)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class a0{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function c0(e,t,n,r,s){if(s&&s.global){e("event",n,r);return}else{const i=await t,a={...r,send_to:i};e("event",n,a)}}async function l0(e,t,n,r){if(r&&r.global){const s={};for(const i of Object.keys(n))s[`user_properties.${i}`]=n[i];return e("set",s),Promise.resolve()}else{const s=await t;e("config",s,{update:!0,user_properties:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function u0(){if(Kf())try{await Gf()}catch(e){return ce.warn(ye.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return ce.warn(ye.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function h0(e,t,n,r,s,i,a){const c=s0(e);c.then(m=>{n[m.measurementId]=m.appId,e.options.measurementId&&m.measurementId!==e.options.measurementId&&ce.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${m.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(m=>ce.error(m)),t.push(c);const u=u0().then(m=>{if(m)return r.getId()}),[f,d]=await Promise.all([c,u]);JI(i)||KI(i,f.measurementId),s("js",new Date);const g=(a==null?void 0:a.config)??{};return g[BI]="firebase",g.update=!0,d!=null&&(g[UI]=d),s("config",f.measurementId,g),f.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f0{constructor(t){this.app=t}_delete(){return delete Sr[this.app.options.appId],Promise.resolve()}}let Sr={},Mh=[];const Oh={};let la="dataLayer",d0="gtag",kh,nl,Lh=!1;function p0(){const e=[];if(Ay()&&e.push("This is a browser extension environment."),Sy()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=ye.create("invalid-analytics-context",{errorInfo:t});ce.warn(n.message)}}function g0(e,t,n){p0();const r=e.options.appId;if(!r)throw ye.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)ce.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw ye.create("no-api-key");if(Sr[r]!=null)throw ye.create("already-exists",{id:r});if(!Lh){GI(la);const{wrappedGtag:i,gtagCore:a}=XI(Sr,Mh,Oh,la,d0);nl=i,kh=a,Lh=!0}return Sr[r]=h0(e,Mh,Oh,t,kh,la,n),new f0(e)}function m0(e=Jf()){e=we(e);const t=Bs(e,$i);return t.isInitialized()?t.getImmediate():_0(e)}function _0(e,t={}){const n=Bs(e,$i);if(n.isInitialized()){const s=n.getImmediate();if(Ps(t,n.getOptions()))return s;throw ye.create("already-initialized")}return n.initialize({options:t})}function y0(e,t,n){e=we(e),l0(nl,Sr[e.app.options.appId],t,n).catch(r=>ce.error(r))}function E0(e,t,n,r){e=we(e),c0(nl,Sr[e.app.options.appId],t,n,r).catch(s=>ce.error(s))}const Fh="@firebase/analytics",Uh="0.10.19";function T0(){An(new tn($i,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("installations-internal").getImmediate();return g0(r,s,n)},"PUBLIC")),An(new tn("analytics-internal",e,"PRIVATE")),Ue(Fh,Uh),Ue(Fh,Uh,"esm2020");function e(t){try{const n=t.getProvider($i).getImmediate();return{logEvent:(r,s,i)=>E0(n,r,s,i),setUserProperties:(r,s)=>y0(n,r,s)}}catch(n){throw ye.create("interop-component-reg-failed",{reason:n})}}}T0();console.log("API Key:","AIzaSyCAdTs88496w5y_1eCyQpD2i2oL0PvjaEE");const v0={apiKey:"AIzaSyCAdTs88496w5y_1eCyQpD2i2oL0PvjaEE",authDomain:"curriculumdb-1589d.firebaseapp.com",projectId:"curriculumdb-1589d",storageBucket:"curriculumdb-1589d.firebasestorage.app",messagingSenderId:"629960583168",appId:"1:629960583168:web:55bb06840d92a3414e10e5"},rg=Xf(v0);m0(rg);const ui=jw(rg),w0=vm({name:"CounterComponent",components:{BadgeTag:$f},setup(){const e=Ti(ui,"stats","reads"),t=Ti(ui,"stats","visits"),n=Ti(ui,"stats","country"),r=qo(null),s=qo(null),i=qo(null);let a=null,c=null,u=null;Ef(async()=>{i.value="Loading...",console.log("Trying to connect to DB..");const d=await Ph(e);console.log("DB is connected!"),d.exists()||(await ia(e,{count:0}),console.log("Initializing Counter")),(await Ph(t)).exists()||(await ia(e,{count:0}),console.log("Initializing Counter"));const m=Date.now(),x=await(await fetch("https://ipinfo.io/json?token=e4b8d45a85b936")).json(),F=new Date;i.value=F.toUTCString().substring(5)+", "+x.city+", "+x.country||"Unknown",console.log("Country Value = ",i.value),i.value!="Unknown"&&await ia(n,{last:i.value,time:new Date},{merge:!0});const B=Date.now();console.log("Counter incremented to (",r.value,") from",i.value,"in",B-m,"ms!");const K=Bw(ui,"visits");await Zw(K,{visitedFrom:x.city+", "+x.country,visitedWhen:new Date,userAgent:navigator.userAgent}),a=oa(e,z=>{z.exists()&&(r.value=z.data().count,console.log("Counter updated (",r.value,")"))}),c=oa(t,z=>{z.exists()&&(s.value=z.data().count,console.log("Counter views updated (",s.value,")"))}),u=oa(n,z=>{z.exists()&&(i.value=z.data().last,console.log("Country updated (",i.value,")"))}),await Vh(t,{count:Dh(1)})}),lc(()=>{a&&a(),c&&c(),u&&u()});async function f(){await Vh(e,{count:Dh(1)})}return{count:r,countviews:s,country:i,incrementCounter:f}}});const I0={key:0,style:{color:"var(--muted)","font-size":"13px"}},A0={key:1,style:{color:"var(--muted)","font-size":"13px"}};function b0(e,t,n,r,s,i){const a=ma("BadgeTag");return wr(),Ir(Le,null,[St("button",{onClick:t[0]||(t[0]=(...c)=>e.incrementCounter&&e.incrementCounter(...c))},[$t(a,{style:{padding:"0.4rem 0.6rem"},texto:"I've read this curriculum!",gold:!0})]),e.count!==null&&e.country!==null?(wr(),Ir("p",I0,[t[1]||(t[1]=yn(" Total reads: ",-1)),St("strong",null,Er(e.count),1),t[2]||(t[2]=St("br",null,null,-1)),t[3]||(t[3]=yn(" Total views: ",-1)),St("strong",null,Er(e.countviews),1),t[4]||(t[4]=St("br",null,null,-1)),t[5]||(t[5]=yn(" Last view: ",-1)),St("strong",null,Er(e.country),1)])):(wr(),Ir("p",A0,"Loading..."))],64)}const S0=Zi(w0,[["render",b0],["__scopeId","data-v-472ad65d"]]),R0={name:"CurriculumVitae",components:{BadgeTag:$f,LinkTag:sy,CounterComponent:S0}};const C0={lang:"en"},P0={class:"container"},V0={class:"card"},D0={class:"maintext"},x0={class:"paragraph"},N0={class:"no-print"};function M0(e,t,n,r,s,i){const a=ma("LinkTag"),c=ma("CounterComponent");return wr(),Ir("html",C0,[t[5]||(t[5]=St("head",null,[St("meta",{charset:"utf-8"}),St("meta",{name:"viewport",content:"width=device-width,initial-scale=1, maximum-scale=1.0, user-scalable=no"}),St("title",null,"Frederico Artur Limberger — CV")],-1)),St("body",null,[St("div",P0,[St("div",V0,[t[3]||(t[3]=iu('<header><div class="avatar no-print">FL</div><div class="title"><h1>Frederico Artur Limberger</h1><div class="sub">Head of Platform • Software Engineering Manager</div><div class="contact">Email: [fredericoal@gmail.com] <br>LinkedIn: [<a target="_blank" href="https://www.linkedin.com/in/frederico-limberger-phd/">linkedin.com/in/frederico-limberger-phd/</a>] <br>GitHub: [<a target="_blank" href="https://www.github.com/fredericoal">github.com/fredericoal</a>] <span class="contact only-print"></span></div></div><div class="no-print" style="text-align:right;min-width:160px;"><div style="font-weight:600;color:var(--accent);">Available for work</div><div style="color:var(--muted);font-size:13px;margin-top:6px;">Seeking roles in Tallinn / EU.<br> Open to start from January 2026.</div></div></header>',1)),St("div",D0,[t[2]||(t[2]=iu('<section class="paragraph"><h2>Personal Statement</h2><div class="paragraph"> I have always been passionate about technology, and throughout my career I have demonstrated strong adaptability and strategic thinking when facing new environments and challenges. My strengths include a passion for continuous improvement, resilience when navigating change, and a solid mathematical foundation that helps me solve complex problems. Outside of work, I enjoy exploring new cultures through travel and playing the piano as a creative outlet.<br> My background spans both research and industry. I completed a PhD in Computer Science focused on computer vision and information retrieval, and a Master’s degree where I improved real-time 3D plane-detection performance by significantly reducing processing time through algorithmic optimization.<br> My most recent experience was at Nelogica, where I grew as both a manager and a leader. Over seven years, I earned seven promotions in a company that expanded from 60 to 700 employees by consistently delivering results, scaling processes, and leading high-impact initiatives.<br> As an Engineering Leader, I drove improvements in team reliability and delivery speed that enabled the company to scale 100% year over year for four consecutive years, through the adoption of modern engineering practices and cross-functional empowerment. I aligned and delivered cross-functional roadmaps that enabled the successful delivery of the company’s major revenue-generating projects, partnering with PMs, Tech Leads, and executives to drive technical strategy and ownership across teams. I also improved system scalability, demonstrated by an 80% reduction in software initialization time for partners with large client databases and an average 70% performance improvement across key system bottlenecks, by leading architecture redesigns and using strong engineering standards.<br> As an Engineering Manager, I scaled six teams and guided a 40-person organization responsible for delivering the company’s most revenue-generating initiatives. I achieved greater predictability and technical excellence by introducing scalable processes, modernizing legacy applications, improving inter-service communication, and using data and client insights to direct development. I also elevated organizational capability by redesigning onboarding, mentoring new leaders in their career growth, and leading the onboarding of an acquired company while integrating systems to reduce costs and eliminate duplicated solutions.<br> Having lived in the United Kingdom for four years, and in Brazil for 8 years, I am now returning to Europe as my wife relocates to Tallinn, Estonia — a long-term personal goal and a chance to continue growing in an international environment.<br> I&#39;m currently <strong>seeking roles as a Software Engineering Manager or Software Engineering Lead</strong>, where I can continue learning while empowering companies to grow smoothly by leading high-performing teams and strengthening processes and engineering culture. </div></section><section class="paragraph"><h2>Professional Experience</h2><div class="paragraph"> Product-oriented Engineering Manager with strong experience in software architecture and system design, people leadership and product strategy. Proven track record of leading cross-functional teams to build scalable, low-latency, and high-performance financial products. Passionate about mentoring engineers, driving innovation and aligning technology with business growth. </div><h3 style="margin:0;font-size:15px;font-weight:600;">Nelogica - Software Engereering Manager</h3><div style="color:var(--muted);font-size:13px;margin-bottom:4px;">Porto Alegre, Brazil • Mar 2021 - Nov 2025 </div><div class="paragraph"> As a Manager, I led a team of around 40 people, including four team leaders across six different teams. During this time, I had the opportunity to design and implement new processes to increase delivery efficiency, collaborate with cross-functional teams to build a scalable application, and use statistical data and client feedback to guide our development in the right direction. I successfully developed several projects aimed at optimizing our infrastructure and reducing company costs.<br> I accomplished faster software delivery, as measured by reducing deployment time by 75 percent, by building a 1-click deploy system supported by automated CI/CD pipelines.<br> I also achieved higher platform update reliability, as measured by improving uptime from 95 percent to 99.9 percent, by redesigning the software update process using microservices and horizontal scaling where necessary.<br> I accomplished a more modern and consistent product experience, as measured by improved user interactions and standardized UI behavior, by rebuilding legacy components, eliminating unnecessary component variations, and creating a complete internal design system tailored to product needs.<br> I achieved operational cost reduction, as measured by eliminating completely duplicated backend systems after an acquisition, by integrating platforms and leading the technical onboarding of the acquired company.<br> I delivered a complete algorithmic-trading automation ecosystem for the financial market, which generated more than 70 percent of the company’s plugin revenue for many consecutive months, by developing a platform that allowed clients to script, test, and deploy real-world trading bots with only a few lines of code. I strengthened the automation ecosystem as measured by increased adoption and a major share of store revenue by creating a strategy marketplace where clients could publish, share, and sell their automated trading strategies.<br> I improved system scalability, demonstrated by an 80 percent reduction in software initialization time for partners with large client databases and an average 70 percent performance improvement across key system bottlenecks, by leading architecture redesigns, improving inter-application messaging and applying strong engineering standards. <br> Additionally, I redesigned and enhanced the company&#39;s onboarding process and provided mentorship to aspiring leaders from other departments.<br></div><h3 style="margin:0;font-size:15px;font-weight:600;">Nelogica - Software Engereering Lead</h3><div style="color:var(--muted);font-size:13px;margin-bottom:4px;">Porto Alegre, Brazil • Set 2018 - Mar 2021 </div><div class="paragraph"> For nearly three years, I served as Tech Lead of the Profit platform, driving the technical direction and delivery of major projects aimed at expanding the software&#39;s capabilities. I led a front-end team focused on accelerating product growth by implementing new features, improving performance, and ensuring scalability. My leadership helped the company deliver faster, more robust updates to meet the growing demands of professional traders and investors. </div><h3 style="margin:0;font-size:15px;font-weight:600;">Nelogica - Senior Software Engereering</h3><div style="color:var(--muted);font-size:13px;margin-bottom:4px;">Porto Alegre, Brazil • May 2018 - Set 2018 </div><div class="paragraph"> I worked as a Senior Front-End Developer at Nelogica, a leading Brazilian fintech known for delivering advanced electronic trading platforms. I was part of the core team responsible for Profit, the company’s flagship platform used by active traders and investors throughout Latin America. My role focused on building high-performance user interfaces that support real-time market data visualization, technical analysis tools, and seamless order execution. I collaborated closely with back-end and product teams to ensure the front end could handle the speed and precision demanded by financial markets. Key contribution: I developed an optimized real-time data series system, designed to efficiently handle large volumes of tick and candlestick data while ensuring smooth, responsive updates on the user interface. This solution significantly improved chart performance and responsiveness, providing traders with an accurate and uninterrupted market view. </div><h2>Skills</h2><ul><li><strong>Leadership &amp; People Management:</strong> Manage career development using IDPs, regular 1:1s and continuous feedback. Lead recruitment, onboarding and offboarding. Mentor and coach for 5+ junior engineering leads.</li><li><strong>Product &amp; Project Management:</strong> Collaborate with Product Managers, Designers and CTO to align business and technical goals, drive roadmap planning and manage delivery for critical projects.</li><li><strong>Technical Leadership:</strong> Oversee modernization and maintenance of legacy systems. Promote clean, maintainable code and design CI/CD pipelines with Python-based automations. Ensure compliance with security standards and LGPD. Led the design of distributed architectures enabling real-time data delivery, while reducing infrastructure costs and enhancing system performance.</li><li><strong>Product Design &amp; Innovation:</strong> Drive creation of new digital solutions with UX and product teams; iterate product experience by measuring user interactions and customer feedback to prioritise improvements. </li><li><strong>Scaling &amp; Growth:</strong> Led the growth of the platform division from 10 to over 40 engineers within three years; oversaw scalability and performance initiatives supporting expansion from 20,000 to over 300,000 clients, the majority of whom subscribe to premium monthly plans - ensuring reliability, low latency and stability under heavy load.</li><li><strong>Product Ownership:</strong> Since joining Nelogica, served as main developer, technical lead, and manager of the team responsible for the company&#39;s flagship product, which consistently contributes to around 90% of total financial revenue. </li></ul></section><section class="paragraph"><h2>Education</h2><ul><li><strong>Doctor of Philosophy in Computer Science (2014 - 2017)</strong> <br> Title: Spectral Signatures for Non-rigid 3D Shape Retrieval<br> Institution: University of York, York, UK<br> Computer Vision and Pattern Recognition Group.<br> Keywords: machine learning, information retrieval, 3D shapes, spectral signatures.</li><li><strong>Master of Science in Computer Science (2012 - 2014)</strong> <br> Title: Real-Time Detection of Planar Regions in Unorganized Point Clouds<br> Institution: Universidade do Rio Grande do Sul, Porto Alegre, Brazil<br> Graphics, Visualization and Interaction Lab.<br> Keywords: plane detection, real-time, point clouds, efficient hough-transform, Gaussian kernels.</li><li><strong>Bachelor in Computer Science (2008 – 2011)</strong> <br> Title: Real-time Trimaps Genaration with Kinect <br> Institution: Universidade de Santa Maria, Santa Maria, Brazil<br> Applied Computing Laboratory (Laboratório de Computação Aplicada)<br> PET Computer Science.<br> Keywords: trimaps, real-time, Kinect, body segmentation. </li></ul></section><section class="paragraph"><h2>Awards &amp; Recognition</h2><ul><li>9 Awards at Nelogica for leadership and delivery of revenue-critical projects. Recognized for driving scalability, delivering innovation and developing new projects in financial systems.</li><li>Third Place in Best Master Dissertation in the Concurso de Teses e Dissertações da CSBC (2015)</li><li>PhD Scholarship from the program Science without Borders (2014 - 2017).</li><li>Masters Scholarship from the sponsor Conselho Nacional de Desenvolvimento Científico e Tecnológico (CNPq) (2012 - 2014).</li><li>Ranked first in the selection process of Master degree in the Federal University of Rio Grande do Sul (2012).</li><li>Master thesis approved with grade A, Federal University of Rio Grande do Sul, (2014).</li></ul></section>',4)),St("section",x0,[t[0]||(t[0]=St("h2",null,"Publications",-1)),St("ul",null,[$t(a,{strText:`Limberger, F. A., Oliveira, M. M.: Real-time detection of planar regions in unorganized point
                clouds. Pattern Recognition 48(6): 2043-2053 (2015).`,strLink:"https://www.inf.ufrgs.br/%7Eoliveira/pubs_files/HT3D/Limberger_Oliveira_3D_HT_Pre-Print_low_res.pdf"}),$t(a,{strText:`Henz, B., Limberger F. A., Oliveira, M. M.: Independent color-channel adjustment for seamless
                cloning based on Laplacian-membrane modulation. Computers & Graphics (2016).`,strLink:"https://bernardohenz.github.io/projects/independent_color_adjustment/index.html"}),$t(a,{strText:`Henz, B., Limberger F. A., Oliveira, M. M.: Color Adjustment for Seamless Cloning based
                on Laplacian-Membrane Modulation. SIBGRAPI, Proceedings of the Conference on Graphics,
                Patterns and Images (2015).`,strLink:"https://www.researchgate.net/publication/282287278_Color_Adjustment_for_Seamless_Cloning_Based_on_Laplacian-Membrane_Modulation"}),$t(a,{strText:`Limberger F. A., Schetinger, V. C., Oliveira, M. M.: Meta-Relief Texture Mapping with
                Dynamic Texture-Space Ambient Occlusion. SIBGRAPI, Proceedings of the Conference on
                Graphics, Patterns and Images (2015).`,strLink:"https://dl.acm.org/doi/10.1109/SIBGRAPI.2015.45"}),$t(a,{strText:`S. Biasotti, E. Moscoso Thompson, M. Aono, Limberger F. A., Wilson, R. C., et al.: SHREC'17
                Track: Retrieval of surfaces with similar relief patterns. 10th Eurographics Workshop on 3D
                Object Retrieval, France (2017).`,strLink:"http://shrec.ge.imati.cnr.it/shrec17/shrec17_patterns.html"}),$t(a,{strText:`Limberger F. A., Wilson, R. C., M. Aono, N. Audebert, A. Boulch, et al.: SHREC'17 Track:
                Point-Cloud Shape Retrieval of Non-Rigid Toys. 10th Eurographics Workshop on 3D Object
                Retrieval, France (2017).`,strLink:"https://www.researchgate.net/publication/316190225_SHREC'17_Track_Point-Cloud_Shape_Retrieval_of_Non-Rigid_Toys"}),$t(a,{strText:`Limberger F. A., Wilson, R. C.: Feature Encoding of Spectral Signatures for 3D Non-Rigid
                Shape Retrieval. Proceedings of the British Machine Vision Conference (BMVC), United Kingdom
                (2015).`,strLink:"https://pure.york.ac.uk/portal/en/publications/feature-encoding-of-spectral-signatures-for-3d-non-rigid-shape-re/"}),$t(a,{strText:`Lian, Z., Zhang, J., Choi, S., Limberger F. A., Wilson, R. C., et al.: Non-rigid 3D Shape
                Retrieval. 8th Eurographics Workshop on 3D Object Retrieval, Switzerland (2015).`,strLink:"https://halajun.github.io/3dor15shrec"})])]),St("div",N0,[t[1]||(t[1]=St("br",null,null,-1)),$t(c)])]),t[4]||(t[4]=St("footer",{class:"no-print"},[yn(" Frederico Artur Limberger - Seeking roles as Software Engineering Manager / Software Engineering Lead."),St("br"),yn(" I learned Vue 3 + Typescript + Firebase in a week to create this website. Powered by Vue 3. ")],-1))])])])])}const O0=Zi(R0,[["render",M0]]);Y_(O0).mount("#app");
