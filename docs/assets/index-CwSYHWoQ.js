import{ai as C,U as x,d as y,m as z,a6 as _,t as B,r as D,L as r,a as t,I as G,aj as v}from"./index-D16CmENv.js";const I={name:C,disabled:Boolean,iconSize:x,modelValue:C,checkedColor:String,labelPosition:String,labelDisabled:Boolean};var j=y({props:z({},I,{bem:_(Function),role:String,shape:String,parent:Object,checked:Boolean,bindGroup:B,indeterminate:{type:Boolean,default:null}}),emits:["click","toggle"],setup(e,{emit:k,slots:d}){const h=D(),o=n=>{if(e.parent&&e.bindGroup)return e.parent.props[n]},l=r(()=>{if(e.parent&&e.bindGroup){const n=o("disabled")||e.disabled;if(e.role==="checkbox"){const c=o("modelValue").length,a=o("max"),i=a&&c>=+a;return n||i&&!e.checked}return n}return e.disabled}),P=r(()=>o("direction")),u=r(()=>{const n=e.checkedColor||o("checkedColor");if(n&&e.checked&&!l.value)return{borderColor:n,backgroundColor:n}}),s=r(()=>e.shape||o("shape")||"round"),S=n=>{const{target:c}=n,a=h.value,i=a===c||(a==null?void 0:a.contains(c));!l.value&&(i||!e.labelDisabled)&&k("toggle"),k("click",n)},m=()=>{var n,c;const{bem:a,checked:i,indeterminate:g}=e,b=e.iconSize||o("iconSize");return t("div",{ref:h,class:a("icon",[s.value,{disabled:l.value,checked:i,indeterminate:g}]),style:s.value!=="dot"?{fontSize:v(b)}:{width:v(b),height:v(b),borderColor:(n=u.value)==null?void 0:n.borderColor}},[d.icon?d.icon({checked:i,disabled:l.value}):s.value!=="dot"?t(G,{name:g?"minus":"success",style:u.value},null):t("div",{class:a("icon--dot__icon"),style:{backgroundColor:(c=u.value)==null?void 0:c.backgroundColor}},null)])},f=()=>{const{checked:n}=e;if(d.default)return t("span",{class:e.bem("label",[e.labelPosition,{disabled:l.value}])},[d.default({checked:n,disabled:l.value})])};return()=>{const n=e.labelPosition==="left"?[f(),m()]:[m(),f()];return t("div",{role:e.role,class:e.bem([{disabled:l.value,"label-disabled":e.labelDisabled},P.value]),tabindex:l.value?void 0:0,"aria-checked":e.checked,onClick:S},[n])}}});export{I as c,j as s};
