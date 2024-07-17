import{h as K,i as T,m as D,t as M,d as A,r as _,a as s,p as E,j as U,k as $,l as H,n as r,c as l,e as x,u as v,q as J,b as e,F as k,s as R,f as Q,x as W,o as d,w as S,y as u,z as F}from"./index-eyiAbzCP.js";import{f as z,u as X,F as Y,g as Z,S as ee,I as te,a as oe}from"./home-yKgiHN1Y.js";import"./index-7BGpXOOE.js";import"./index-C__uJSz4.js";import{s as ne}from"./request-tQU21M3o.js";import{u as ae}from"./use-expose-DsxqQLPw.js";const[ce,w,se]=K("search"),ie=T({},z,{label:String,shape:D("square"),leftIcon:D("search"),clearable:M,actionText:String,background:String,showAction:Boolean});var le=A({name:ce,props:ie,emits:["blur","focus","clear","search","cancel","clickInput","clickLeftIcon","clickRightIcon","update:modelValue"],setup(i,{emit:n,slots:a,attrs:L}){const j=X(),b=_(),y=()=>{a.action||(n("update:modelValue",""),n("cancel"))},I=o=>{o.keyCode===13&&($(o),n("search",i.modelValue))},C=()=>i.id||`${j}-input`,N=()=>{if(a.label||i.label)return s("label",{class:w("label"),for:C()},[a.label?a.label():i.label])},p=()=>{if(i.showAction){const o=i.actionText||se("cancel");return s("div",{class:w("action"),role:"button",tabindex:0,onClick:y},[a.action?a.action():o])}},g=()=>{var o;return(o=b.value)==null?void 0:o.blur()},c=()=>{var o;return(o=b.value)==null?void 0:o.focus()},h=o=>n("blur",o),f=o=>n("focus",o),B=o=>n("clear",o),m=o=>n("clickInput",o),t=o=>n("clickLeftIcon",o),P=o=>n("clickRightIcon",o),O=Object.keys(z),q=()=>{const o=T({},L,E(i,O),{id:C()}),V=G=>n("update:modelValue",G);return s(Y,U({ref:b,type:"search",class:w("field",{"with-message":o.errorMessage}),border:!1,onBlur:h,onFocus:f,onClear:B,onKeypress:I,onClickInput:m,onClickLeftIcon:t,onClickRightIcon:P,"onUpdate:modelValue":V},o),E(a,["left-icon","right-icon"]))};return ae({focus:c,blur:g}),()=>{var o;return s("div",{class:w({"show-action":i.showAction}),style:{background:i.background}},[(o=a.left)==null?void 0:o.call(a),s("div",{class:w("content",i.shape)},[N(),q()]),p()])}}});const de=H(le),re=e("div",{"i-solar-map-point-outline":""},null,-1),ue=e("div",null,"长沙",-1),be=[re,ue],pe={"p-2":"","space-y-3":""},ge={grid:"~ cols-5","gap-y-3":"","rounded-lg":"","bg-white":"","py-3":""},me={"h-45px":"","w-45px":"","object-cover":""},_e={"mt-2":"",text:"xs center black/80"},he={"rounded-lg":"","bg-white":"","p-3":""},fe=e("div",{"mb-2":"",flex:"","items-center":"","justify-between":""},[e("div",{flex:"","items-center":"","gap-x-2":"","text-base":""},[e("div",{"i-solar-clock-circle-outline":""}),e("div",null,"限时精选")]),e("div",{"i-solar-alt-arrow-right-linear":"","text-sm":""})],-1),xe={flex:"~ nowrap",overflow:"y-hidden x-auto","snap-x":"","gap-x-2":""},ve=["onClick"],ke={"h-120px":"","w-120px":"","object-cover":""},we={"mb-2":"","w-120px":"",truncate:"",text:"sm black/80"},ye={text:"red"},Ie=e("span",{"text-sm":""},"￥",-1),Ce={"rounded-lg":"","bg-white":"","p-3":""},Re=e("div",{"mb-2":"",flex:"","items-center":"","justify-between":""},[e("div",{flex:"","items-center":"","gap-x-2":"","text-base":""},[e("div",{"i-solar-clock-circle-outline":""}),e("div",null,"拼团")]),e("div",{"i-solar-alt-arrow-right-linear":"","text-sm":""})],-1),Se={flex:"~ nowrap",overflow:"y-hidden x-auto","snap-x":"","gap-x-2":""},Le={"h-120px":"","w-120px":"","object-cover":""},je={"mb-2":"","w-120px":"",truncate:"",text:"sm black/80"},Ne={flex:"","items-center":"","gap-x-2":""},Be={text:"red"},Pe=e("span",{"text-sm":""},"￥",-1),Ve={text:"black/40 xs","line-through":""},De=e("span",{"text-sm":""},"￥",-1),Ee={absolute:"","left-0":"","top-0":"",rounded:"lt-2 br-2","bg-red":"",text:"white xs",p:"x-2 y-2px"},Fe=e("div",{flex:"","items-center":"","justify-between":"","rounded-lg":"","bg-white":"","p-3":""},[e("div",{flex:"","items-center":"","gap-x-2":"","text-base":""},[e("div",{"i-solar-fire-outline":""}),e("div",null,"热门推荐")]),e("div",{"i-solar-alt-arrow-right-linear":"","text-sm":""})],-1),Te={grid:"~ cols-2","gap-2":""},Ae={relative:"","overflow-hidden":"","rounded-lg":"","bg-white":""},ze={"h-175px":"","w-full":"","object-cover":"",alt:""},Oe={p:"x-1 y-1"},qe={truncate:"",text:"sm black/80",m:"b-1"},Ge={flex:"","items-center":"","gap-x-2":""},Ke={text:"base red"},Me=e("span",{"text-sm":""},"￥",-1),Ue={key:0,text:"black/40 xs","line-through":""},$e=e("span",{"text-sm":""},"￥",-1),He={key:0,text:"xs white",p:"x-2 y-2px",absolute:"","left-0":"","top-0":"","rounded-br-lg":"","bg-red":""},et=A({name:"Home",__name:"index",setup(i){const n=Q(),a=_("");function L(){n.push("/location")}const j=_([{id:r.Random.guid(),icon:"https://mp-7e00db99-ad65-4b9f-a74b-61bccb92b124.cdn.bspapp.com/cloudstorage/4e935a64-413b-4238-8324-1df81958b363.png",label:"手机"},{id:r.Random.guid(),icon:"https://mp-7e00db99-ad65-4b9f-a74b-61bccb92b124.cdn.bspapp.com/cloudstorage/37b12cae-0795-4b73-8a98-921534419c42.png",label:"服饰"},{id:r.Random.guid(),icon:"https://mp-7e00db99-ad65-4b9f-a74b-61bccb92b124.cdn.bspapp.com/cloudstorage/ba7d5d8b-5bf7-4541-8cfe-033a2dbdb0a9.png",label:"电脑"},{id:r.Random.guid(),icon:"https://mp-7e00db99-ad65-4b9f-a74b-61bccb92b124.cdn.bspapp.com/cloudstorage/aa25eef3-20f2-49a9-86ea-0993c615d9cf.png",label:"优惠券"},{id:r.Random.guid(),icon:"https://mp-7e00db99-ad65-4b9f-a74b-61bccb92b124.cdn.bspapp.com/cloudstorage/39ebeafe-e705-4455-a3b3-0825f1ed24bd.png",label:"洗护"},{id:r.Random.guid(),icon:"https://mp-7e00db99-ad65-4b9f-a74b-61bccb92b124.cdn.bspapp.com/cloudstorage/039bcda4-6a68-4198-921c-494ab5e38a2c.png",label:"摄影"},{id:r.Random.guid(),icon:"https://mp-7e00db99-ad65-4b9f-a74b-61bccb92b124.cdn.bspapp.com/cloudstorage/1de2d360-c6a0-4bde-a444-008710b2fba9.png",label:"鞋子"},{id:r.Random.guid(),icon:"https://mp-7e00db99-ad65-4b9f-a74b-61bccb92b124.cdn.bspapp.com/cloudstorage/aee90be8-661f-4b77-be2c-d3d84a5bb87c.png",label:"会员"},{id:r.Random.guid(),icon:"https://mp-7e00db99-ad65-4b9f-a74b-61bccb92b124.cdn.bspapp.com/cloudstorage/4be45592-6355-47a9-be89-9c9987f0dbae.png",label:"包包"},{id:r.Random.guid(),icon:"https://mp-7e00db99-ad65-4b9f-a74b-61bccb92b124.cdn.bspapp.com/cloudstorage/fe1527ad-70c6-4432-b413-5116786f1e76.png",label:"网络"}]),b=_([]),y=_([]),I=_([]);async function C(){const p=ne({message:"加载中...",duration:0,forbidClick:!0});try{const{code:g,data:c}=await Z();g===200&&(b.value=(c==null?void 0:c.limitedTimeSelection)??[],y.value=(c==null?void 0:c.groupBuying)??[],I.value=(c==null?void 0:c.popularRecommendations)??[])}finally{p.close()}}C();function N(p){n.push({name:"ProductDetails",params:{id:p}})}return(p,g)=>{const c=de,h=te,f=oe,B=ee,m=W("lazy");return d(),l(k,null,[s(c,{modelValue:v(a),"onUpdate:modelValue":g[0]||(g[0]=t=>J(a)?a.value=t:null),placeholder:"请输入搜索关键词"},{left:x(()=>[e("div",{"mr-2":"",flex:"","items-center":"","gap-x-1":"",text:"14px black/80",onClick:L},be)]),_:1},8,["modelValue"]),s(B,{class:"my-swipe",autoplay:3e3,"indicator-color":"white","lazy-render":""},{default:x(()=>[s(f,null,{default:x(()=>[s(h,{src:"/images/home/swipe-1.jpg"})]),_:1}),s(f,null,{default:x(()=>[s(h,{src:"/images/home/swipe-2.jpg"})]),_:1}),s(f,null,{default:x(()=>[s(h,{src:"/images/home/swipe-3.jpg"})]),_:1})]),_:1}),e("div",pe,[e("div",ge,[(d(!0),l(k,null,R(v(j),t=>(d(),l("div",{key:t.id,flex:"~ col","items-center":""},[S(e("img",me,null,512),[[m,t.icon]]),e("div",_e,u(t.label),1)]))),128))]),e("div",he,[fe,e("div",xe,[(d(!0),l(k,null,R(v(b),t=>(d(),l("div",{key:t.id,"snap-start":"",onClick:P=>N(t.id)},[S(e("img",ke,null,512),[[m,t.image]]),e("div",we,u(t.title),1),e("div",ye,[Ie,e("span",null,u(Number(t.price).toLocaleString()),1)])],8,ve))),128))])]),e("div",Ce,[Re,e("div",Se,[(d(!0),l(k,null,R(v(y),t=>(d(),l("div",{key:t.id,relative:"","snap-start":""},[S(e("img",Le,null,512),[[m,t.image]]),e("div",je,u(t.title),1),e("div",Ne,[e("div",Be,[Pe,e("span",null,u(Number(t.price).toLocaleString()),1)]),e("div",Ve,[De,e("span",null,u(Number(t.originalPrice).toLocaleString()),1)])]),e("div",Ee,u(t.numberOfGroupBuyers)+"人团 ",1)]))),128))])]),Fe,e("div",Te,[(d(!0),l(k,null,R(v(I),t=>(d(),l("div",{key:t.id},[e("div",Ae,[S(e("img",ze,null,512),[[m,t.image]]),e("div",Oe,[e("div",qe,u(t.title),1),e("div",Ge,[e("div",Ke,[Me,e("span",null,u(Number(t.price).toLocaleString()),1)]),t.originalPrice?(d(),l("div",Ue,[$e,e("span",null,u(Number(t.originalPrice).toLocaleString()),1)])):F("",!0)])]),t.isItAMembershipPrice===1?(d(),l("div",He," 会员价 ")):F("",!0)])]))),128))])])],64)}}});export{et as default};
