import{l as v,m as I,a$ as R,n as l,S as C,d as D,b8 as N,be as q,a,I as w,y as L,ad as O,z as U}from"./index-Dp0FA1M5.js";const[_,o]=v("button"),E=I({},R,{tag:l("button"),text:String,icon:String,type:l("default"),size:l("normal"),color:String,block:Boolean,plain:Boolean,round:Boolean,square:Boolean,loading:Boolean,hairline:Boolean,disabled:Boolean,iconPrefix:String,nativeType:l("button"),loadingSize:C,loadingText:String,loadingType:String,iconPosition:l("left")});var V=D({name:_,props:E,emits:["click"],setup(n,{emit:g,slots:t}){const f=N(),b=()=>t.loading?t.loading():a(O,{size:n.loadingSize,type:n.loadingType,class:o("loading")},null),c=()=>{if(n.loading)return b();if(t.icon)return a("div",{class:o("icon")},[t.icon()]);if(n.icon)return a(w,{name:n.icon,class:o("icon"),classPrefix:n.iconPrefix},null)},m=()=>{let e;if(n.loading?e=n.loadingText:e=t.default?t.default():n.text,e)return a("span",{class:o("text")},[e])},x=()=>{const{color:e,plain:r}=n;if(e){const i={color:r?e:"white"};return r||(i.background=e),e.includes("gradient")?i.border=0:i.borderColor=e,i}},y=e=>{n.loading?L(e):n.disabled||(g("click",e),f())};return()=>{const{tag:e,type:r,size:i,block:S,round:B,plain:P,square:k,loading:T,disabled:s,hairline:d,nativeType:z,iconPosition:u}=n,h=[o([r,i,{plain:P,block:S,round:B,square:k,loading:T,disabled:s,hairline:d}]),{[q]:d}];return a(e,{type:z,class:h,style:x(),disabled:s,onClick:y},{default:()=>[a("div",{class:o("content")},[u==="left"&&c(),m(),u==="right"&&c()])]})}}});const j=U(V);export{j as B};