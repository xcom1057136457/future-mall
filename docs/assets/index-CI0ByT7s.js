import{h as O,i as A,m as E,t as $,d as q,r as h,a as s,p as F,j as H,k as M,l as U,n as r,c as l,e as k,u as p,q as J,b as e,F as w,s as L,f as Q,x as W,o as d,w as P,y as u,z as T}from"./index-NqS3evgO.js";import{f as z,u as X,F as Y}from"./index-OLAq1RdL.js";import{I as Z}from"./index-CeQyMs1K.js";import"./index-CAe_UIfi.js";import{g as ee}from"./home-tbuRHEEY.js";import"./index-TXPf4dty.js";import"./index-Cp4cOlF2.js";import{s as te}from"./request-BZVuECNf.js";import{u as oe}from"./use-expose-PVMTY6tw.js";import{S as ne,a as ae}from"./index-DSzZLmCC.js";import"./use-scope-id-TRPw9BWN.js";const[ce,y,se]=O("search"),ie=A({},z,{label:String,shape:E("square"),leftIcon:E("search"),clearable:$,actionText:String,background:String,showAction:Boolean});var le=q({name:ce,props:ie,emits:["blur","focus","clear","search","cancel","clickInput","clickLeftIcon","clickRightIcon","update:modelValue"],setup(i,{emit:n,slots:a,attrs:j}){const D=X(),b=h(),C=()=>{a.action||(n("update:modelValue",""),n("cancel"))},I=o=>{o.keyCode===13&&(M(o),n("search",i.modelValue))},R=()=>i.id||`${D}-input`,f=()=>{if(a.label||i.label)return s("label",{class:y("label"),for:R()},[a.label?a.label():i.label])},N=()=>{if(i.showAction){const o=i.actionText||se("cancel");return s("div",{class:y("action"),role:"button",tabindex:0,onClick:C},[a.action?a.action():o])}},m=()=>{var o;return(o=b.value)==null?void 0:o.blur()},_=()=>{var o;return(o=b.value)==null?void 0:o.focus()},c=o=>n("blur",o),v=o=>n("focus",o),x=o=>n("clear",o),B=o=>n("clickInput",o),g=o=>n("clickLeftIcon",o),t=o=>n("clickRightIcon",o),S=Object.keys(z),G=()=>{const o=A({},j,F(i,S),{id:R()}),V=K=>n("update:modelValue",K);return s(Y,H({ref:b,type:"search",class:y("field",{"with-message":o.errorMessage}),border:!1,onBlur:c,onFocus:v,onClear:x,onKeypress:I,onClickInput:B,onClickLeftIcon:g,onClickRightIcon:t,"onUpdate:modelValue":V},o),F(a,["left-icon","right-icon"]))};return oe({focus:_,blur:m}),()=>{var o;return s("div",{class:y({"show-action":i.showAction}),style:{background:i.background}},[(o=a.left)==null?void 0:o.call(a),s("div",{class:y("content",i.shape)},[f(),G()]),N()])}}});const de=U(le),re="/future-mall/assets/swipe-1-3C_6Jwtg.jpg",ue="/future-mall/assets/swipe-2-DhwDqetP.jpg",pe="/future-mall/assets/swipe-3-C6CkHKcp.jpg",be=e("div",{"i-solar-map-point-outline":""},null,-1),me=e("div",null,"长沙",-1),_e=[be,me],ge={"p-2":"","space-y-3":""},he={grid:"~ cols-5","gap-y-3":"","rounded-lg":"","bg-white":"","py-3":""},fe={"h-45px":"","w-45px":"","object-cover":""},ve={"mt-2":"",text:"xs center black/80"},xe={"rounded-lg":"","bg-white":"","p-3":""},ke=e("div",{"mb-2":"",flex:"","items-center":"","justify-between":""},[e("div",{flex:"","items-center":"","gap-x-2":"","text-base":""},[e("div",{"i-solar-clock-circle-outline":""}),e("div",null,"限时精选")]),e("div",{"i-solar-alt-arrow-right-linear":"","text-sm":""})],-1),we={flex:"~ nowrap",overflow:"y-hidden x-auto","snap-x":"","gap-x-2":""},ye=["onClick"],Ce={"h-120px":"","w-120px":"","object-cover":""},Ie={"mb-2":"","w-120px":"",truncate:"",text:"sm black/80"},Re={text:"red"},Se=e("span",{"text-sm":""},"￥",-1),Le={"rounded-lg":"","bg-white":"","p-3":""},Pe=e("div",{"mb-2":"",flex:"","items-center":"","justify-between":""},[e("div",{flex:"","items-center":"","gap-x-2":"","text-base":""},[e("div",{"i-solar-clock-circle-outline":""}),e("div",null,"拼团")]),e("div",{"i-solar-alt-arrow-right-linear":"","text-sm":""})],-1),je={flex:"~ nowrap",overflow:"y-hidden x-auto","snap-x":"","gap-x-2":""},De=["onClick"],Ne={"h-120px":"","w-120px":"","object-cover":""},Be={"mb-2":"","w-120px":"",truncate:"",text:"sm black/80"},Ve={flex:"","items-center":"","gap-x-2":""},Ee={text:"red"},Fe=e("span",{"text-sm":""},"￥",-1),Te={text:"black/40 xs","line-through":""},Ae=e("span",{"text-sm":""},"￥",-1),qe={absolute:"","left-0":"","top-0":"",rounded:"lt-2 br-2","bg-red":"",text:"white xs",p:"x-2 y-2px"},ze=e("div",{flex:"","items-center":"","justify-between":"","rounded-lg":"","bg-white":"","p-3":""},[e("div",{flex:"","items-center":"","gap-x-2":"","text-base":""},[e("div",{"i-solar-fire-outline":""}),e("div",null,"热门推荐")]),e("div",{"i-solar-alt-arrow-right-linear":"","text-sm":""})],-1),Ge={grid:"~ cols-2","gap-2":""},Ke=["onClick"],Oe={relative:"","overflow-hidden":"","rounded-lg":"","bg-white":""},$e={"h-175px":"","w-full":"","object-cover":"",alt:""},He={p:"x-1 y-1"},Me={truncate:"",text:"sm black/80",m:"b-1"},Ue={flex:"","items-center":"","gap-x-2":""},Je={text:"base red"},Qe=e("span",{"text-sm":""},"￥",-1),We={key:0,text:"black/40 xs","line-through":""},Xe=e("span",{"text-sm":""},"￥",-1),Ye={key:0,text:"xs white",p:"x-2 y-2px",absolute:"","left-0":"","top-0":"","rounded-br-lg":"","bg-red":""},rt=q({name:"Home",__name:"index",setup(i){const n=Q(),a=h("");function j(){n.push("/location")}const D=h([{id:r.Random.guid(),icon:"https://mp-7e00db99-ad65-4b9f-a74b-61bccb92b124.cdn.bspapp.com/cloudstorage/4e935a64-413b-4238-8324-1df81958b363.png",label:"手机"},{id:r.Random.guid(),icon:"https://mp-7e00db99-ad65-4b9f-a74b-61bccb92b124.cdn.bspapp.com/cloudstorage/37b12cae-0795-4b73-8a98-921534419c42.png",label:"服饰"},{id:r.Random.guid(),icon:"https://mp-7e00db99-ad65-4b9f-a74b-61bccb92b124.cdn.bspapp.com/cloudstorage/ba7d5d8b-5bf7-4541-8cfe-033a2dbdb0a9.png",label:"电脑"},{id:r.Random.guid(),icon:"https://mp-7e00db99-ad65-4b9f-a74b-61bccb92b124.cdn.bspapp.com/cloudstorage/aa25eef3-20f2-49a9-86ea-0993c615d9cf.png",label:"优惠券"},{id:r.Random.guid(),icon:"https://mp-7e00db99-ad65-4b9f-a74b-61bccb92b124.cdn.bspapp.com/cloudstorage/39ebeafe-e705-4455-a3b3-0825f1ed24bd.png",label:"洗护"},{id:r.Random.guid(),icon:"https://mp-7e00db99-ad65-4b9f-a74b-61bccb92b124.cdn.bspapp.com/cloudstorage/039bcda4-6a68-4198-921c-494ab5e38a2c.png",label:"摄影"},{id:r.Random.guid(),icon:"https://mp-7e00db99-ad65-4b9f-a74b-61bccb92b124.cdn.bspapp.com/cloudstorage/1de2d360-c6a0-4bde-a444-008710b2fba9.png",label:"鞋子"},{id:r.Random.guid(),icon:"https://mp-7e00db99-ad65-4b9f-a74b-61bccb92b124.cdn.bspapp.com/cloudstorage/aee90be8-661f-4b77-be2c-d3d84a5bb87c.png",label:"会员"},{id:r.Random.guid(),icon:"https://mp-7e00db99-ad65-4b9f-a74b-61bccb92b124.cdn.bspapp.com/cloudstorage/4be45592-6355-47a9-be89-9c9987f0dbae.png",label:"包包"},{id:r.Random.guid(),icon:"https://mp-7e00db99-ad65-4b9f-a74b-61bccb92b124.cdn.bspapp.com/cloudstorage/fe1527ad-70c6-4432-b413-5116786f1e76.png",label:"网络"}]),b=h([]),C=h([]),I=h([]);async function R(){const m=te({message:"加载中...",duration:0,forbidClick:!0});try{const{code:_,data:c}=await ee();_===200&&(b.value=(c==null?void 0:c.limitedTimeSelection)??[],C.value=(c==null?void 0:c.groupBuying)??[],I.value=(c==null?void 0:c.popularRecommendations)??[])}finally{m.close()}}R();function f(m){n.push({name:"ProductDetail",params:{id:m}})}function N(){n.push({name:"ProductList"})}return(m,_)=>{const c=de,v=Z,x=ae,B=ne,g=W("lazy");return d(),l(w,null,[s(c,{modelValue:p(a),"onUpdate:modelValue":_[0]||(_[0]=t=>J(a)?a.value=t:null),placeholder:"请输入搜索关键词"},{left:k(()=>[e("div",{"mr-2":"",flex:"","items-center":"","gap-x-1":"",text:"14px black/80",onClick:j},_e)]),_:1},8,["modelValue"]),s(B,{class:"my-swipe",autoplay:3e3,"indicator-color":"white","lazy-render":""},{default:k(()=>[s(x,null,{default:k(()=>[s(v,{src:p(re)},null,8,["src"])]),_:1}),s(x,null,{default:k(()=>[s(v,{src:p(ue)},null,8,["src"])]),_:1}),s(x,null,{default:k(()=>[s(v,{src:p(pe)},null,8,["src"])]),_:1})]),_:1}),e("div",ge,[e("div",he,[(d(!0),l(w,null,L(p(D),t=>(d(),l("div",{key:t.id,flex:"~ col","items-center":"",onClick:N},[P(e("img",fe,null,512),[[g,t.icon]]),e("div",ve,u(t.label),1)]))),128))]),e("div",xe,[ke,e("div",we,[(d(!0),l(w,null,L(p(b),t=>(d(),l("div",{key:t.id,"snap-start":"",onClick:S=>f(t.id)},[P(e("img",Ce,null,512),[[g,t.image]]),e("div",Ie,u(t.title),1),e("div",Re,[Se,e("span",null,u(Number(t.price).toLocaleString()),1)])],8,ye))),128))])]),e("div",Le,[Pe,e("div",je,[(d(!0),l(w,null,L(p(C),t=>(d(),l("div",{key:t.id,relative:"","snap-start":"",onClick:S=>f(t.id)},[P(e("img",Ne,null,512),[[g,t.image]]),e("div",Be,u(t.title),1),e("div",Ve,[e("div",Ee,[Fe,e("span",null,u(Number(t.price).toLocaleString()),1)]),e("div",Te,[Ae,e("span",null,u(Number(t.originalPrice).toLocaleString()),1)])]),e("div",qe,u(t.numberOfGroupBuyers)+"人团 ",1)],8,De))),128))])]),ze,e("div",Ge,[(d(!0),l(w,null,L(p(I),t=>(d(),l("div",{key:t.id,onClick:S=>f(t.id)},[e("div",Oe,[P(e("img",$e,null,512),[[g,t.image]]),e("div",He,[e("div",Me,u(t.title),1),e("div",Ue,[e("div",Je,[Qe,e("span",null,u(Number(t.price).toLocaleString()),1)]),t.originalPrice?(d(),l("div",We,[Xe,e("span",null,u(Number(t.originalPrice).toLocaleString()),1)])):T("",!0)])]),t.isItAMembershipPrice===1?(d(),l("div",Ye," 会员价 ")):T("",!0)])],8,Ke))),128))])])],64)}}});export{rt as default};