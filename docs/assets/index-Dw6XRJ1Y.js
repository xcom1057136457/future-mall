import{h as j,d as E,r as C,C as st,D as ct,A as I,E as it,G as N,H as at,J as V,a as y,T as rt,t as lt,K as G,L as dt,M as ut,O as ft,P as O,Q as P,R as S,S as F,k as ht,U as gt,V as mt,i as pt,W as vt,X as xt,l as J,Y as X,e as yt,f as kt,o as _,c as R,s as Y,F as b,u as K}from"./index-NqS3evgO.js";import{C as Tt}from"./index-CAe_UIfi.js";import{a as _t,s as Ct}from"./request-BZVuECNf.js";import"./index-TXPf4dty.js";import{u as St}from"./index-Cp4cOlF2.js";import{u as Q}from"./use-expose-PVMTY6tw.js";import"./use-scope-id-TRPw9BWN.js";function At(){return Array(26).fill("").map((o,d)=>String.fromCharCode(65+d))}const[U,w]=j("index-bar"),Lt={sticky:lt,zIndex:G,teleport:[String,Object],highlightColor:String,stickyOffsetTop:dt(0),indexList:{type:Array,default:At}},W=Symbol(U);var Rt=E({name:U,props:Lt,emits:["select","change"],setup(e,{emit:x,slots:o}){const d=C(),f=C(),l=C(""),h=St(),u=st(d),{children:s,linkChildren:g}=ct(W);let a;g({props:e});const Z=I(()=>{if(it(e.zIndex))return{zIndex:+e.zIndex+1}}),q=I(()=>{if(e.highlightColor)return{color:e.highlightColor}}),A=(t,n)=>{for(let i=s.length-1;i>=0;i--){const r=i>0?n[i-1].height:0,c=e.sticky?r+e.stickyOffsetTop:0;if(t+c>=n[i].top)return i}return-1},B=t=>s.find(n=>String(n.index)===t),L=()=>{if(ft(d))return;const{sticky:t,indexList:n}=e,i=O(u.value),r=P(u),c=s.map(k=>k.getRect(u.value,r));let m=-1;if(a){const k=B(a);if(k){const p=k.getRect(u.value,r);e.sticky&&e.stickyOffsetTop?m=A(p.top-e.stickyOffsetTop,c):m=A(p.top,c)}}else m=A(i,c);l.value=n[m],t&&s.forEach((k,p)=>{const{state:v,$el:nt}=k;if(p===m||p===m-1){const T=nt.getBoundingClientRect();v.left=T.left,v.width=T.width}else v.left=null,v.width=null;if(p===m)v.active=!0,v.top=Math.max(e.stickyOffsetTop,c[p].top-i)+r.top;else if(p===m-1&&a===""){const T=c[m].top-i;v.active=T>0,v.top=T+r.top-c[p].height}else v.active=!1}),a=""},$=()=>{ut(L)};N("scroll",L,{target:u,passive:!0}),at($),V(()=>e.indexList,$),V(l,t=>{t&&x("change",t)});const tt=()=>e.indexList.map(t=>{const n=t===l.value;return y("span",{class:w("index",{active:n}),style:n?q.value:void 0,"data-index":t},[t])}),D=t=>{a=String(t);const n=B(a);if(n){const i=O(u.value),r=P(u),{offsetHeight:c}=document.documentElement;if(n.$el.scrollIntoView(),i===c-r.height){L();return}e.sticky&&e.stickyOffsetTop&&(S()===c-r.height?F(S()):F(S()-e.stickyOffsetTop)),x("select",n.index)}},M=t=>{const{index:n}=t.dataset;n&&D(n)},et=t=>{M(t.target)};let z;const ot=t=>{if(h.move(t),h.isVertical()){ht(t);const{clientX:n,clientY:i}=t.touches[0],r=document.elementFromPoint(n,i);if(r){const{index:c}=r.dataset;c&&z!==c&&(z=c,M(r))}}},H=()=>y("div",{ref:f,class:w("sidebar"),style:Z.value,onClick:et,onTouchstartPassive:h.start},[tt()]);return Q({scrollTo:D}),N("touchmove",ot,{target:f}),()=>{var t;return y("div",{ref:d,class:w()},[e.teleport?y(rt,{to:e.teleport},{default:()=>[H()]}):H(),(t=o.default)==null?void 0:t.call(o)])}}});const[bt,wt]=j("index-anchor"),It={index:G};var Ot=E({name:bt,props:It,setup(e,{slots:x}){const o=gt({top:0,left:null,rect:{top:0,height:0},width:null,active:!1}),d=C(),{parent:f}=mt(W);if(!f)return;const l=()=>o.active&&f.props.sticky,h=I(()=>{const{zIndex:s,highlightColor:g}=f.props;if(l())return pt(vt(s),{left:o.left?`${o.left}px`:void 0,width:o.width?`${o.width}px`:void 0,transform:o.top?`translate3d(0, ${o.top}px, 0)`:void 0,color:g})});return Q({state:o,getRect:(s,g)=>{const a=P(d);return o.rect.height=a.height,s===window||s===document.body?o.rect.top=a.top+S():o.rect.top=a.top+O(s)-g.top,o.rect}}),()=>{const s=l();return y("div",{ref:d,style:{height:s?`${o.rect.height}px`:void 0}},[y("div",{style:h.value,class:[wt({sticky:s}),{[xt]:s}]},[x.default?x.default():e.index])])}}});const Pt=J(Ot),Et=J(Rt);function Bt(){return _t({url:"/getLocationList",method:"get"})}const Ft=E({name:"Location",__name:"index",setup(e){const x=kt(),o=C([]);async function d(){const f=Ct({message:"加载中...",duration:0});try{const{code:l,data:h}=await Bt();l===200&&(o.value=h)}finally{f.close()}}return d(),(f,l)=>{const h=Pt,u=Tt,s=Et;return _(),X(s,{"sticky-offset-top":46},{default:yt(()=>[(_(!0),R(b,null,Y(K(o),g=>(_(),R(b,{key:g.initial},[y(h,{index:g.initial},null,8,["index"]),(_(!0),R(b,null,Y(g.list,a=>(_(),X(u,{key:a.code,title:a.name,onClick:l[0]||(l[0]=()=>K(x).back())},null,8,["title"]))),128))],64))),128))]),_:1})}}});export{Ft as default};
