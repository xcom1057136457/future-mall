import{l as f,d as p,N as C,R as k,p as b,ag as g,a as V,S as h,n as P,a6 as G,m as S,t as _,a0 as O,O as y,q as $,x as B,z as E}from"./index-DgD8RGzb.js";import{c as N,s as z}from"./index-DqNIfGfB.js";const[x,A]=f("checkbox-group"),K={max:h,shape:P("round"),disabled:Boolean,iconSize:h,direction:String,modelValue:G(),checkedColor:String},v=Symbol(x);var T=p({name:x,props:K,emits:["change","update:modelValue"],setup(a,{emit:c,slots:u}){const{children:l,linkChildren:i}=C(v),o=e=>c("update:modelValue",e),s=(e={})=>{typeof e=="boolean"&&(e={checked:e});const{checked:d,skipDisabled:r}=e,t=l.filter(n=>n.props.bindGroup?n.props.disabled&&r?n.checked.value:d??!n.checked.value:!1).map(n=>n.name);o(t)};return k(()=>a.modelValue,e=>c("change",e)),b({toggleAll:s}),g(()=>a.modelValue),i({props:a,updateValue:o}),()=>{var e;return V("div",{class:A([a.direction])},[(e=u.default)==null?void 0:e.call(u)])}}});const[R,q]=f("checkbox"),D=S({},N,{shape:String,bindGroup:_,indeterminate:{type:Boolean,default:null}});var F=p({name:R,props:D,emits:["change","update:modelValue"],setup(a,{emit:c,slots:u}){const{parent:l}=O(v),i=e=>{const{name:d}=a,{max:r,modelValue:m}=l.props,t=m.slice();if(e)!(r&&t.length>=+r)&&!t.includes(d)&&(t.push(d),a.bindGroup&&l.updateValue(t));else{const n=t.indexOf(d);n!==-1&&(t.splice(n,1),a.bindGroup&&l.updateValue(t))}},o=y(()=>l&&a.bindGroup?l.props.modelValue.indexOf(a.name)!==-1:!!a.modelValue),s=(e=!o.value)=>{l&&a.bindGroup?i(e):c("update:modelValue",e),a.indeterminate!==null&&c("change",e)};return k(()=>a.modelValue,e=>{a.indeterminate===null&&c("change",e)}),b({toggle:s,props:a,checked:o}),g(()=>a.modelValue),()=>V(z,B({bem:q,role:"checkbox",parent:l,checked:o.value,onToggle:s},a),$(u,["default","icon"]))}});const U=E(F);export{U as C,T as s};
