import{h as p,d as u,D as V,J as b,ay as k,a as l,K as x,aj as C,l as _,i as y,V as P,p as S,j as $,r as w,c as B,b as r,y as R,u as m,e as d,q as D,aB as G,o as N}from"./index-CKOkzEEm.js";import{C as j}from"./index-_cjMc4op.js";import{C as E}from"./index-rHlETXPH.js";import{c as I,s as K}from"./index-D5souPBN.js";const[g,T]=p("radio-group"),q={shape:String,disabled:Boolean,iconSize:x,direction:String,modelValue:C,checkedColor:String},v=Symbol(g);var z=u({name:g,props:q,emits:["change","update:modelValue"],setup(e,{emit:s,slots:o}){const{linkChildren:n}=V(v),t=a=>s("update:modelValue",a);return b(()=>e.modelValue,a=>s("change",a)),n({props:e,updateValue:t}),k(()=>e.modelValue),()=>{var a;return l("div",{class:T([e.direction]),role:"radiogroup"},[(a=o.default)==null?void 0:a.call(o)])}}});const A=_(z),F=y({},I,{shape:String}),[J,O]=p("radio");var U=u({name:J,props:F,emits:["update:modelValue"],setup(e,{emit:s,slots:o}){const{parent:n}=P(v),t=()=>(n?n.props.modelValue:e.modelValue)===e.name,a=()=>{n?n.updateValue(e.name):s("update:modelValue",e.name)};return()=>l(K,$({bem:O,role:"radio",parent:n,checked:t(),onToggle:a},e),S(o,["default","icon"]))}});const Y=_(U),H={"p-2":""},L={"rounded-lg":"","bg-white":"","p-3":""},M=r("div",{"i-solar-clock-circle-bold-duotone":"",text:"80px orange",m:"x-auto b-4"},null,-1),Q=r("div",{text:"base black/80 center","mb-4":""}," 支付金额 ",-1),W={text:"center red","mb-8":""},X=r("span",{"text-base":""},"￥",-1),Z={"text-3xl":""},ne=u({name:"Pay",__name:"index",setup(e){const s=G(),o=w("1");return(n,t)=>{const a=Y,i=E,h=j,f=A;return N(),B("div",H,[r("div",L,[M,Q,r("div",W,[X,r("span",Z,R(m(s).params.money),1)]),l(f,{modelValue:m(o),"onUpdate:modelValue":t[2]||(t[2]=c=>D(o)?o.value=c:null)},{default:d(()=>[l(h,null,{default:d(()=>[l(i,{title:"单选框 1",clickable:"",onClick:t[0]||(t[0]=c=>o.value="1")},{"right-icon":d(()=>[l(a,{name:"1"})]),_:1}),l(i,{title:"单选框 2",clickable:"",onClick:t[1]||(t[1]=c=>o.value="2")},{"right-icon":d(()=>[l(a,{name:"2"})]),_:1})]),_:1})]),_:1},8,["modelValue"])])])}}});export{ne as default};