import{l as v,m as I,aZ as R,n as l,S as C,d as D,b6 as N,bc as q,a,I as w,y as L,ad as O,z as U}from"./index-DgD8RGzb.js";const[_,o]=v("button"),E=I({},R,{tag:l("button"),text:String,icon:String,type:l("default"),size:l("normal"),color:String,block:Boolean,plain:Boolean,round:Boolean,square:Boolean,loading:Boolean,hairline:Boolean,disabled:Boolean,iconPrefix:String,nativeType:l("button"),loadingSize:C,loadingText:String,loadingType:String,iconPosition:l("left")});var V=D({name:_,props:E,emits:["click"],setup(e,{emit:g,slots:t}){const f=N(),b=()=>t.loading?t.loading():a(O,{size:e.loadingSize,type:e.loadingType,class:o("loading")},null),c=()=>{if(e.loading)return b();if(t.icon)return a("div",{class:o("icon")},[t.icon()]);if(e.icon)return a(w,{name:e.icon,class:o("icon"),classPrefix:e.iconPrefix},null)},m=()=>{let n;if(e.loading?n=e.loadingText:n=t.default?t.default():e.text,n)return a("span",{class:o("text")},[n])},x=()=>{const{color:n,plain:r}=e;if(n){const i={color:r?n:"white"};return r||(i.background=n),n.includes("gradient")?i.border=0:i.borderColor=n,i}},y=n=>{e.loading?L(n):e.disabled||(g("click",n),f())};return()=>{const{tag:n,type:r,size:i,block:S,round:B,plain:P,square:k,loading:T,disabled:s,hairline:d,nativeType:z,iconPosition:u}=e,h=[o([r,i,{plain:P,block:S,round:B,square:k,loading:T,disabled:s,hairline:d}]),{[q]:d}];return a(n,{type:z,class:h,style:x(),disabled:s,onClick:y},{default:()=>[a("div",{class:o("content")},[u==="left"&&c(),m(),u==="right"&&c()])]})}}});const j=U(V);export{j as B};