import{h as z,i as I,as as R,m as l,K as C,d as D,aV as L,b4 as N,a as o,I as q,k as w,l as O}from"./index-NqS3evgO.js";import{L as U}from"./index-TXPf4dty.js";const[V,a]=z("button"),_=I({},R,{tag:l("button"),text:String,icon:String,type:l("default"),size:l("normal"),color:String,block:Boolean,plain:Boolean,round:Boolean,square:Boolean,loading:Boolean,hairline:Boolean,disabled:Boolean,iconPrefix:String,nativeType:l("button"),loadingSize:C,loadingText:String,loadingType:String,iconPosition:l("left")});var p=D({name:V,props:_,emits:["click"],setup(n,{emit:g,slots:i}){const f=L(),b=()=>i.loading?i.loading():o(U,{size:n.loadingSize,type:n.loadingType,class:a("loading")},null),c=()=>{if(n.loading)return b();if(i.icon)return o("div",{class:a("icon")},[i.icon()]);if(n.icon)return o(q,{name:n.icon,class:a("icon"),classPrefix:n.iconPrefix},null)},m=()=>{let e;if(n.loading?e=n.loadingText:e=i.default?i.default():n.text,e)return o("span",{class:a("text")},[e])},x=()=>{const{color:e,plain:r}=n;if(e){const t={color:r?e:"white"};return r||(t.background=e),e.includes("gradient")?t.border=0:t.borderColor=e,t}},y=e=>{n.loading?w(e):n.disabled||(g("click",e),f())};return()=>{const{tag:e,type:r,size:t,block:S,round:B,plain:k,square:P,loading:T,disabled:s,hairline:d,nativeType:h,iconPosition:u}=n,v=[a([r,t,{plain:k,block:S,round:B,square:P,loading:T,disabled:s,hairline:d}]),{[N]:d}];return o(e,{type:h,class:v,style:x(),disabled:s,onClick:y},{default:()=>[o("div",{class:a("content")},[u==="left"&&c(),m(),u==="right"&&c()])]})}}});const j=O(p);export{j as B};
