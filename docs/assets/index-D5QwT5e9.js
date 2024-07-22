import{aD as he,_ as be,$ as ve,aY as ye,aZ as Ie,ak as Se,l as ke,U as B,n as w,ab as Ce,m as xe,ai as Ve,d as Ee,a0 as we,r as A,a1 as Me,ag as Te,L as I,aj as U,p as Le,aU as Ae,a_ as Pe,S as Re,W as E,J as _e,R as Be,a as d,Q as S,a$ as H,b0 as ze,y as P,I as R,x as De,k as Ne,b1 as Oe,z as We}from"./index-D16CmENv.js";import{c as $e,C as Fe}from"./index-DYCcKjiE.js";let je=0;function qe(){const t=he(),{name:r="unknown"}=(t==null?void 0:t.type)||{};return`${r}-${++je}`}function J(t){return Array.isArray(t)?!t.length:t===0?!1:!t}function Ue(t,r){if(J(t)){if(r.required)return!1;if(r.validateEmpty===!1)return!0}return!(r.pattern&&!r.pattern.test(String(t)))}function He(t,r){return new Promise(l=>{const f=r.validator(t,r);if(ye(f)){f.then(l);return}l(f)})}function K(t,r){const{message:l}=r;return Ie(l)?l(t,r):l||""}function Ke({target:t}){t.composing=!0}function Y({target:t}){t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}function Ye(t,r){const l=be();t.style.height="auto";let f=t.scrollHeight;if(Se(r)){const{maxHeight:i,minHeight:c}=r;i!==void 0&&(f=Math.min(f,i)),c!==void 0&&(f=Math.max(f,c))}f&&(t.style.height=`${f}px`,ve(l))}function Je(t){return t==="number"?{type:"text",inputmode:"decimal"}:t==="digit"?{type:"tel",inputmode:"numeric"}:{type:t}}function v(t){return[...t].length}function _(t,r){return[...t].slice(0,r).join("")}const[Qe,m]=ke("field"),Ze={id:String,name:String,leftIcon:String,rightIcon:String,autofocus:Boolean,clearable:Boolean,maxlength:B,formatter:Function,clearIcon:w("clear"),modelValue:Ce(""),inputAlign:String,placeholder:String,autocomplete:String,autocapitalize:String,autocorrect:String,errorMessage:String,enterkeyhint:String,clearTrigger:w("focus"),formatTrigger:w("onChange"),spellcheck:{type:Boolean,default:null},error:{type:Boolean,default:null},disabled:{type:Boolean,default:null},readonly:{type:Boolean,default:null}},Ge=xe({},$e,Ze,{rows:B,type:w("text"),rules:Array,autosize:[Boolean,Object],labelWidth:B,labelClass:Ve,labelAlign:String,showWordLimit:Boolean,errorMessageAlign:String,colon:{type:Boolean,default:null}});var Xe=Ee({name:Qe,props:Ge,emits:["blur","focus","clear","keypress","clickInput","endValidate","startValidate","clickLeftIcon","clickRightIcon","update:modelValue"],setup(t,{emit:r,slots:l}){const f=qe(),i=we({status:"unvalidated",focused:!1,validateMessage:""}),c=A(),z=A(),M=A(),{parent:h}=Me(Te),y=()=>{var e;return String((e=t.modelValue)!=null?e:"")},u=e=>{if(S(t[e]))return t[e];if(h&&S(h.props[e]))return h.props[e]},Q=I(()=>{const e=u("readonly");if(t.clearable&&!e){const n=y()!=="",a=t.clearTrigger==="always"||t.clearTrigger==="focus"&&i.focused;return n&&a}return!1}),D=I(()=>M.value&&l.input?M.value():t.modelValue),Z=I(()=>{var e;const n=u("required");return n==="auto"?(e=t.rules)==null?void 0:e.some(a=>a.required):n}),G=e=>e.reduce((n,a)=>n.then(()=>{if(i.status==="failed")return;let{value:o}=D;if(a.formatter&&(o=a.formatter(o,a)),!Ue(o,a)){i.status="failed",i.validateMessage=K(o,a);return}if(a.validator)return J(o)&&a.validateEmpty===!1?void 0:He(o,a).then(s=>{s&&typeof s=="string"?(i.status="failed",i.validateMessage=s):s===!1&&(i.status="failed",i.validateMessage=K(o,a))})}),Promise.resolve()),k=()=>{i.status="unvalidated",i.validateMessage=""},N=()=>r("endValidate",{status:i.status,message:i.validateMessage}),O=(e=t.rules)=>new Promise(n=>{k(),e?(r("startValidate"),G(e).then(()=>{i.status==="failed"?(n({name:t.name,message:i.validateMessage}),N()):(i.status="passed",n(),N())})):n()}),T=e=>{if(h&&t.rules){const{validateTrigger:n}=h.props,a=H(n).includes(e),o=t.rules.filter(s=>s.trigger?H(s.trigger).includes(e):a);o.length&&O(o)}},X=e=>{var n;const{maxlength:a}=t;if(S(a)&&v(e)>+a){const o=y();if(o&&v(o)===+a)return o;const s=(n=c.value)==null?void 0:n.selectionEnd;if(i.focused&&s){const g=[...e],b=g.length-+a;return g.splice(s-b,b),g.join("")}return _(e,+a)}return e},C=(e,n="onChange")=>{const a=e;e=X(e);const o=v(a)-v(e);if(t.type==="number"||t.type==="digit"){const g=t.type==="number";e=ze(e,g,g)}let s=0;if(t.formatter&&n===t.formatTrigger){const{formatter:g,maxlength:b}=t;if(e=g(e),S(b)&&v(e)>+b&&(e=_(e,+b)),c.value&&i.focused){const{selectionEnd:V}=c.value,q=_(a,V);s=v(g(q))-v(q)}}if(c.value&&c.value.value!==e)if(i.focused){let{selectionStart:g,selectionEnd:b}=c.value;if(c.value.value=e,S(g)&&S(b)){const V=v(e);o?(g-=o,b-=o):s&&(g+=s,b+=s),c.value.setSelectionRange(Math.min(g,V),Math.min(b,V))}}else c.value.value=e;e!==t.modelValue&&r("update:modelValue",e)},p=e=>{e.target.composing||C(e.target.value)},L=()=>{var e;return(e=c.value)==null?void 0:e.blur()},W=()=>{var e;return(e=c.value)==null?void 0:e.focus()},x=()=>{const e=c.value;t.type==="textarea"&&t.autosize&&e&&Ye(e,t.autosize)},ee=e=>{i.focused=!0,r("focus",e),E(x),u("readonly")&&L()},te=e=>{i.focused=!1,C(y(),"onBlur"),r("blur",e),!u("readonly")&&(T("onBlur"),E(x),Oe())},$=e=>r("clickInput",e),ne=e=>r("clickLeftIcon",e),ae=e=>r("clickRightIcon",e),re=e=>{P(e),r("update:modelValue",""),r("clear",e)},F=I(()=>{if(typeof t.error=="boolean")return t.error;if(h&&h.props.showError&&i.status==="failed")return!0}),ie=I(()=>{const e=u("labelWidth"),n=u("labelAlign");if(e&&n!=="top")return{width:U(e)}}),le=e=>{e.keyCode===13&&(!(h&&h.props.submitOnEnter)&&t.type!=="textarea"&&P(e),t.type==="search"&&L()),r("keypress",e)},j=()=>t.id||`${f}-input`,oe=()=>i.status,se=()=>{const e=m("control",[u("inputAlign"),{error:F.value,custom:!!l.input,"min-height":t.type==="textarea"&&!t.autosize}]);if(l.input)return d("div",{class:e,onClick:$},[l.input()]);const n={id:j(),ref:c,name:t.name,rows:t.rows!==void 0?+t.rows:void 0,class:e,disabled:u("disabled"),readonly:u("readonly"),autofocus:t.autofocus,placeholder:t.placeholder,autocomplete:t.autocomplete,autocapitalize:t.autocapitalize,autocorrect:t.autocorrect,enterkeyhint:t.enterkeyhint,spellcheck:t.spellcheck,"aria-labelledby":t.label?`${f}-label`:void 0,onBlur:te,onFocus:ee,onInput:p,onClick:$,onChange:Y,onKeypress:le,onCompositionend:Y,onCompositionstart:Ke};return t.type==="textarea"?d("textarea",n,null):d("input",De(Je(t.type),n),null)},ce=()=>{const e=l["left-icon"];if(t.leftIcon||e)return d("div",{class:m("left-icon"),onClick:ne},[e?e():d(R,{name:t.leftIcon,classPrefix:t.iconPrefix},null)])},ue=()=>{const e=l["right-icon"];if(t.rightIcon||e)return d("div",{class:m("right-icon"),onClick:ae},[e?e():d(R,{name:t.rightIcon,classPrefix:t.iconPrefix},null)])},de=()=>{if(t.showWordLimit&&t.maxlength){const e=v(y());return d("div",{class:m("word-limit")},[d("span",{class:m("word-num")},[e]),Ne("/"),t.maxlength])}},fe=()=>{if(h&&h.props.showErrorMessage===!1)return;const e=t.errorMessage||i.validateMessage;if(e){const n=l["error-message"],a=u("errorMessageAlign");return d("div",{class:m("error-message",a)},[n?n({message:e}):e])}},ge=()=>{const e=u("labelWidth"),n=u("labelAlign"),a=u("colon")?":":"";if(l.label)return[l.label(),a];if(t.label)return d("label",{id:`${f}-label`,for:l.input?void 0:j(),onClick:o=>{P(o),W()},style:n==="top"&&e?{width:U(e)}:void 0},[t.label+a])},me=()=>[d("div",{class:m("body")},[se(),Q.value&&d(R,{ref:z,name:t.clearIcon,class:m("clear")},null),ue(),l.button&&d("div",{class:m("button")},[l.button()])]),de(),fe()];return Le({blur:L,focus:W,validate:O,formValue:D,resetValidation:k,getValidationStatus:oe}),Ae(Pe,{customValue:M,resetValidation:k,validateWithTrigger:T}),Re(()=>t.modelValue,()=>{C(y()),k(),T("onChange"),E(x)}),_e(()=>{C(y(),t.formatTrigger),E(x)}),Be("touchstart",re,{target:I(()=>{var e;return(e=z.value)==null?void 0:e.$el})}),()=>{const e=u("disabled"),n=u("labelAlign"),a=ce(),o=()=>{const s=ge();return n==="top"?[a,s].filter(Boolean):s||[]};return d(Fe,{size:t.size,class:m({error:F.value,disabled:e,[`label-${n}`]:n}),center:t.center,border:t.border,isLink:t.isLink,clickable:t.clickable,titleStyle:ie.value,valueClass:m("value"),titleClass:[m("label",[n,{required:Z.value}]),t.labelClass],arrowDirection:t.arrowDirection},{icon:a&&n!=="top"?()=>a:null,title:o,value:me,extra:l.extra})}}});const tt=We(Xe);export{tt as F,Ze as f,qe as u};
