import{l as J,d as Q,r as D,O as h,ai as R,aH as X,R as y,ag as Y,a as v,w as I,ak as x,x as k,a9 as z,aa as c,t as d,S,aN as A,P as O,V as Z,aO as p,y as N,ay as ee,b2 as te,av as ae,z as ne}from"./index-DgD8RGzb.js";const[le,P]=J("stepper"),ie=200,w=(t,u)=>String(t)===String(u),ue={min:c(1),max:c(1/0),name:c(""),step:c(1),theme:String,integer:Boolean,disabled:Boolean,showPlus:d,showMinus:d,showInput:d,longPress:d,autoFixed:d,allowEmpty:Boolean,modelValue:S,inputWidth:S,buttonSize:S,placeholder:String,disablePlus:Boolean,disableMinus:Boolean,disableInput:Boolean,beforeChange:Function,defaultValue:c(1),decimalLength:S};var se=Q({name:le,props:ue,emits:["plus","blur","minus","focus","change","overlimit","update:modelValue"],setup(t,{emit:u}){const o=(e,a=!0)=>{const{min:l,max:g,allowEmpty:i,decimalLength:b}=t;return i&&e===""||(e=A(String(e),!t.integer),e=e===""?0:+e,e=Number.isNaN(e)?+l:e,e=a?Math.max(Math.min(+g,e),+l):e,O(b)&&(e=e.toFixed(+b))),e},G=()=>{var e;const a=(e=t.modelValue)!=null?e:t.defaultValue,l=o(a);return w(l,t.modelValue)||u("update:modelValue",l),l};let s;const C=D(),n=D(G()),m=h(()=>t.disabled||t.disableMinus||+n.value<=+t.min),r=h(()=>t.disabled||t.disablePlus||+n.value>=+t.max),H=h(()=>({width:R(t.inputWidth),height:R(t.buttonSize)})),E=h(()=>X(t.buttonSize)),W=()=>{const e=o(n.value);w(e,n.value)||(n.value=e)},B=e=>{t.beforeChange?ee(t.beforeChange,{args:[e],done(){n.value=e}}):n.value=e},T=()=>{if(s==="plus"&&r.value||s==="minus"&&m.value){u("overlimit",s);return}const e=s==="minus"?-t.step:+t.step,a=o(te(+n.value,e));B(a),u(s)},$=e=>{const a=e.target,{value:l}=a,{decimalLength:g}=t;let i=A(String(l),!t.integer);if(O(g)&&i.includes(".")){const F=i.split(".");i=`${F[0]}.${F[1].slice(0,+g)}`}t.beforeChange?a.value=String(n.value):w(l,i)||(a.value=i);const b=i===String(+i);B(b?+i:i)},q=e=>{var a;t.disableInput?(a=C.value)==null||a.blur():u("focus",e)},K=e=>{const a=e.target,l=o(a.value,t.autoFixed);a.value=String(l),n.value=l,Z(()=>{u("blur",e),p()})};let V,f;const L=()=>{f=setTimeout(()=>{T(),L()},ie)},U=()=>{t.longPress&&(V=!1,clearTimeout(f),f=setTimeout(()=>{V=!0,T(),L()},ae))},M=e=>{t.longPress&&(clearTimeout(f),V&&N(e))},j=e=>{t.disableInput&&N(e)},_=e=>({onClick:a=>{N(a),s=e,T()},onTouchstartPassive:()=>{s=e,U()},onTouchend:M,onTouchcancel:M});return y(()=>[t.max,t.min,t.integer,t.decimalLength],W),y(()=>t.modelValue,e=>{w(e,n.value)||(n.value=o(e))}),y(n,e=>{u("update:modelValue",e),u("change",e,{name:t.name})}),Y(()=>t.modelValue),()=>v("div",{role:"group",class:P([t.theme])},[I(v("button",k({type:"button",style:E.value,class:[P("minus",{disabled:m.value}),{[z]:!m.value}],"aria-disabled":m.value||void 0},_("minus")),null),[[x,t.showMinus]]),I(v("input",{ref:C,type:t.integer?"tel":"text",role:"spinbutton",class:P("input"),value:n.value,style:H.value,disabled:t.disabled,readonly:t.disableInput,inputmode:t.integer?"numeric":"decimal",placeholder:t.placeholder,autocomplete:"off","aria-valuemax":t.max,"aria-valuemin":t.min,"aria-valuenow":n.value,onBlur:K,onInput:$,onFocus:q,onMousedown:j},null),[[x,t.showInput]]),I(v("button",k({type:"button",style:E.value,class:[P("plus",{disabled:r.value}),{[z]:!r.value}],"aria-disabled":r.value||void 0},_("plus")),null),[[x,t.showPlus]])])}});const ce=ne(se);export{ce as S};
