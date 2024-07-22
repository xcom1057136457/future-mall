import{l as Q,d as J,r as D,L as g,aj as z,aW as X,S as y,ah as Y,a as v,w as I,al as x,x as R,aa as k,ab as c,t as d,U as S,b0 as A,Q as W,W as Z,b1 as p,y as N,ay as ee,b2 as te,av as ae,z as ne}from"./index-D16CmENv.js";const[le,P]=Q("stepper"),ue=200,w=(t,i)=>String(t)===String(i),ie={min:c(1),max:c(1/0),name:c(""),step:c(1),theme:String,integer:Boolean,disabled:Boolean,showPlus:d,showMinus:d,showInput:d,longPress:d,autoFixed:d,allowEmpty:Boolean,modelValue:S,inputWidth:S,buttonSize:S,placeholder:String,disablePlus:Boolean,disableMinus:Boolean,disableInput:Boolean,beforeChange:Function,defaultValue:c(1),decimalLength:S};var se=J({name:le,props:ie,emits:["plus","blur","minus","focus","change","overlimit","update:modelValue"],setup(t,{emit:i}){const o=(e,a=!0)=>{const{min:l,max:f,allowEmpty:u,decimalLength:h}=t;return u&&e===""||(e=A(String(e),!t.integer),e=e===""?0:+e,e=Number.isNaN(e)?+l:e,e=a?Math.max(Math.min(+f,e),+l):e,W(h)&&(e=e.toFixed(+h))),e},G=()=>{var e;const a=(e=t.modelValue)!=null?e:t.defaultValue,l=o(a);return w(l,t.modelValue)||i("update:modelValue",l),l};let s;const C=D(),n=D(G()),m=g(()=>t.disabled||t.disableMinus||+n.value<=+t.min),r=g(()=>t.disabled||t.disablePlus||+n.value>=+t.max),O=g(()=>({width:z(t.inputWidth),height:z(t.buttonSize)})),E=g(()=>X(t.buttonSize)),U=()=>{const e=o(n.value);w(e,n.value)||(n.value=e)},L=e=>{t.beforeChange?ee(t.beforeChange,{args:[e],done(){n.value=e}}):n.value=e},T=()=>{if(s==="plus"&&r.value||s==="minus"&&m.value){i("overlimit",s);return}const e=s==="minus"?-t.step:+t.step,a=o(te(+n.value,e));L(a),i(s)},$=e=>{const a=e.target,{value:l}=a,{decimalLength:f}=t;let u=A(String(l),!t.integer);if(W(f)&&u.includes(".")){const F=u.split(".");u=`${F[0]}.${F[1].slice(0,+f)}`}t.beforeChange?a.value=String(n.value):w(l,u)||(a.value=u);const h=u===String(+u);L(h?+u:u)},j=e=>{var a;t.disableInput?(a=C.value)==null||a.blur():i("focus",e)},q=e=>{const a=e.target,l=o(a.value,t.autoFixed);a.value=String(l),n.value=l,Z(()=>{i("blur",e),p()})};let V,b;const B=()=>{b=setTimeout(()=>{T(),B()},ue)},H=()=>{t.longPress&&(V=!1,clearTimeout(b),b=setTimeout(()=>{V=!0,T(),B()},ae))},M=e=>{t.longPress&&(clearTimeout(b),V&&N(e))},K=e=>{t.disableInput&&N(e)},_=e=>({onClick:a=>{N(a),s=e,T()},onTouchstartPassive:()=>{s=e,H()},onTouchend:M,onTouchcancel:M});return y(()=>[t.max,t.min,t.integer,t.decimalLength],U),y(()=>t.modelValue,e=>{w(e,n.value)||(n.value=o(e))}),y(n,e=>{i("update:modelValue",e),i("change",e,{name:t.name})}),Y(()=>t.modelValue),()=>v("div",{role:"group",class:P([t.theme])},[I(v("button",R({type:"button",style:E.value,class:[P("minus",{disabled:m.value}),{[k]:!m.value}],"aria-disabled":m.value||void 0},_("minus")),null),[[x,t.showMinus]]),I(v("input",{ref:C,type:t.integer?"tel":"text",role:"spinbutton",class:P("input"),value:n.value,style:O.value,disabled:t.disabled,readonly:t.disableInput,inputmode:t.integer?"numeric":"decimal",placeholder:t.placeholder,autocomplete:"off","aria-valuemax":t.max,"aria-valuemin":t.min,"aria-valuenow":n.value,onBlur:q,onInput:$,onFocus:j,onMousedown:K},null),[[x,t.showInput]]),I(v("button",R({type:"button",style:E.value,class:[P("plus",{disabled:r.value}),{[k]:!r.value}],"aria-disabled":r.value||void 0},_("plus")),null),[[x,t.showPlus]])])}});const ce=ne(se);export{ce as S};
