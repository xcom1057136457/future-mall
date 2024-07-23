import{l as S,d as k,r as O,b5 as H,N as L,t as x,a as n,z as D,m as R,aZ as p,b6 as M,a0 as U,O as T,p as q,aA as J,S as V,ah as Y,n as Z,az as j,$ as G,b7 as Q,x as W,q as X,ai as ee,al as te,b8 as A,aJ as ne,b9 as oe,ba as ae,ay as le}from"./index-DgD8RGzb.js";import{B as P}from"./index-CmJN1XRQ.js";const[N,_]=S("action-bar"),$=Symbol(N),se={placeholder:Boolean,safeAreaInsetBottom:x};var ce=k({name:N,props:se,setup(e,{slots:r}){const o=O(),i=H(o,_),{linkChildren:l}=L($);l();const f=()=>{var m;return n("div",{ref:o,class:[_(),{"van-safe-area-bottom":e.safeAreaInsetBottom}]},[(m=r.default)==null?void 0:m.call(r)])};return()=>e.placeholder?i(f):f()}});const re=D(ce),[ie,ue]=S("action-bar-button"),de=R({},p,{type:String,text:String,icon:String,color:String,loading:Boolean,disabled:Boolean});var fe=k({name:ie,props:de,setup(e,{slots:r}){const o=M(),{parent:i,index:l}=U($),f=T(()=>{if(i){const s=i.children[l.value-1];return!(s&&"isButton"in s)}}),m=T(()=>{if(i){const s=i.children[l.value+1];return!(s&&"isButton"in s)}});return q({isButton:!0}),()=>{const{type:s,icon:B,text:g,color:C,loading:v,disabled:w}=e;return n(P,{class:ue([s,{last:m.value,first:f.value}]),size:"large",type:s,icon:B,color:C,loading:v,disabled:w,onClick:o},{default:()=>[r.default?r.default():g]})}}});const E=D(fe),[me,c,b]=S("dialog"),Be=R({},J,{title:String,theme:String,width:V,message:[String,Function],callback:Function,allowHtml:Boolean,className:Y,transition:Z("van-dialog-bounce"),messageAlign:String,closeOnPopstate:x,showCancelButton:Boolean,cancelButtonText:String,cancelButtonColor:String,cancelButtonDisabled:Boolean,confirmButtonText:String,confirmButtonColor:String,confirmButtonDisabled:Boolean,showConfirmButton:x,closeOnClickOverlay:Boolean}),ge=[...j,"transition","closeOnPopstate"];var Ce=k({name:me,props:Be,emits:["confirm","cancel","keydown","update:show"],setup(e,{emit:r,slots:o}){const i=O(),l=G({confirm:!1,cancel:!1}),f=t=>r("update:show",t),m=t=>{var a;f(!1),(a=e.callback)==null||a.call(e,t)},s=t=>()=>{e.show&&(r(t),e.beforeClose?(l[t]=!0,le(e.beforeClose,{args:[t],done(){m(t),l[t]=!1},canceled(){l[t]=!1}})):m(t))},B=s("cancel"),g=s("confirm"),C=Q(t=>{var a,u;if(t.target!==((u=(a=i.value)==null?void 0:a.popupRef)==null?void 0:u.value))return;({Enter:e.showConfirmButton?g:A,Escape:e.showCancelButton?B:A})[t.key](),r("keydown",t)},["enter","esc"]),v=()=>{const t=o.title?o.title():e.title;if(t)return n("div",{class:c("header",{isolated:!e.message&&!o.default})},[t])},w=t=>{const{message:a,allowHtml:u,messageAlign:d}=e,h=c("message",{"has-title":t,[d]:d}),y=ne(a)?a():a;return u&&typeof y=="string"?n("div",{class:h,innerHTML:y},null):n("div",{class:h},[y])},F=()=>{if(o.default)return n("div",{class:c("content")},[o.default()]);const{title:t,message:a,allowHtml:u}=e;if(a){const d=!!(t||o.title);return n("div",{key:u?1:0,class:c("content",{isolated:!d})},[w(d)])}},I=()=>n("div",{class:[ae,c("footer")]},[e.showCancelButton&&n(P,{size:"large",text:e.cancelButtonText||b("cancel"),class:c("cancel"),style:{color:e.cancelButtonColor},loading:l.cancel,disabled:e.cancelButtonDisabled,onClick:B},null),e.showConfirmButton&&n(P,{size:"large",text:e.confirmButtonText||b("confirm"),class:[c("confirm"),{[oe]:e.showCancelButton}],style:{color:e.confirmButtonColor},loading:l.confirm,disabled:e.confirmButtonDisabled,onClick:g},null)]),K=()=>n(re,{class:c("footer")},{default:()=>[e.showCancelButton&&n(E,{type:"warning",text:e.cancelButtonText||b("cancel"),class:c("cancel"),color:e.cancelButtonColor,loading:l.cancel,disabled:e.cancelButtonDisabled,onClick:B},null),e.showConfirmButton&&n(E,{type:"danger",text:e.confirmButtonText||b("confirm"),class:c("confirm"),color:e.confirmButtonColor,loading:l.confirm,disabled:e.confirmButtonDisabled,onClick:g},null)]}),z=()=>o.footer?o.footer():e.theme==="round-button"?K():I();return()=>{const{width:t,title:a,theme:u,message:d,className:h}=e;return n(te,W({ref:i,role:"dialog",class:[c([u]),h],style:{width:ee(t)},tabindex:0,"aria-labelledby":a||d,onKeydown:C,"onUpdate:show":f},X(e,ge)),{default:()=>[v(),F(),z()]})}}});export{Ce as s};