import{h as G,i as T,m as V,t as H,d as A,r as h,a as s,p as E,j as M,k as U,l as $,n as r,c as l,e as v,u as p,q as J,b as e,F as w,s as R,f as Q,x as W,o as d,w as S,y as u,z as F}from"./index-CKOkzEEm.js";import{f as q,u as X,F as Y,g as Z,S as ee,I as te,a as oe}from"./home-Ca6vUZNu.js";import"./index-rHlETXPH.js";import"./index-M4WKrI8b.js";import{s as ne}from"./request-BVF7dvFX.js";import{u as ae}from"./use-expose-BihWGjHf.js";const[ce,k,se]=G("search"),ie=T({},q,{label:String,shape:V("square"),leftIcon:V("search"),clearable:H,actionText:String,background:String,showAction:Boolean});var le=A({name:ce,props:ie,emits:["blur","focus","clear","search","cancel","clickInput","clickLeftIcon","clickRightIcon","update:modelValue"],setup(i,{emit:n,slots:a,attrs:L}){const j=X(),b=h(),y=()=>{a.action||(n("update:modelValue",""),n("cancel"))},C=o=>{o.keyCode===13&&(U(o),n("search",i.modelValue))},I=()=>i.id||`${j}-input`,D=()=>{if(a.label||i.label)return s("label",{class:k("label"),for:I()},[a.label?a.label():i.label])},_=()=>{if(i.showAction){const o=i.actionText||se("cancel");return s("div",{class:k("action"),role:"button",tabindex:0,onClick:y},[a.action?a.action():o])}},g=()=>{var o;return(o=b.value)==null?void 0:o.blur()},c=()=>{var o;return(o=b.value)==null?void 0:o.focus()},f=o=>n("blur",o),x=o=>n("focus",o),N=o=>n("clear",o),m=o=>n("clickInput",o),t=o=>n("clickLeftIcon",o),P=o=>n("clickRightIcon",o),z=Object.keys(q),K=()=>{const o=T({},L,E(i,z),{id:I()}),B=O=>n("update:modelValue",O);return s(Y,M({ref:b,type:"search",class:k("field",{"with-message":o.errorMessage}),border:!1,onBlur:f,onFocus:x,onClear:N,onKeypress:C,onClickInput:m,onClickLeftIcon:t,onClickRightIcon:P,"onUpdate:modelValue":B},o),E(a,["left-icon","right-icon"]))};return ae({focus:c,blur:g}),()=>{var o;return s("div",{class:k({"show-action":i.showAction}),style:{background:i.background}},[(o=a.left)==null?void 0:o.call(a),s("div",{class:k("content",i.shape)},[D(),K()]),_()])}}});const de=$(le),re="/future-mall/assets/swipe-1-3C_6Jwtg.jpg",ue="/future-mall/assets/swipe-2-DhwDqetP.jpg",pe="/future-mall/assets/swipe-3-C6CkHKcp.jpg",be=e("div",{"i-solar-map-point-outline":""},null,-1),_e=e("div",null,"长沙",-1),ge=[be,_e],me={"p-2":"","space-y-3":""},he={grid:"~ cols-5","gap-y-3":"","rounded-lg":"","bg-white":"","py-3":""},fe={"h-45px":"","w-45px":"","object-cover":""},xe={"mt-2":"",text:"xs center black/80"},ve={"rounded-lg":"","bg-white":"","p-3":""},we=e("div",{"mb-2":"",flex:"","items-center":"","justify-between":""},[e("div",{flex:"","items-center":"","gap-x-2":"","text-base":""},[e("div",{"i-solar-clock-circle-outline":""}),e("div",null,"限时精选")]),e("div",{"i-solar-alt-arrow-right-linear":"","text-sm":""})],-1),ke={flex:"~ nowrap",overflow:"y-hidden x-auto","snap-x":"","gap-x-2":""},ye=["onClick"],Ce={"h-120px":"","w-120px":"","object-cover":""},Ie={"mb-2":"","w-120px":"",truncate:"",text:"sm black/80"},Re={text:"red"},Se=e("span",{"text-sm":""},"￥",-1),Le={"rounded-lg":"","bg-white":"","p-3":""},je=e("div",{"mb-2":"",flex:"","items-center":"","justify-between":""},[e("div",{flex:"","items-center":"","gap-x-2":"","text-base":""},[e("div",{"i-solar-clock-circle-outline":""}),e("div",null,"拼团")]),e("div",{"i-solar-alt-arrow-right-linear":"","text-sm":""})],-1),De={flex:"~ nowrap",overflow:"y-hidden x-auto","snap-x":"","gap-x-2":""},Ne={"h-120px":"","w-120px":"","object-cover":""},Pe={"mb-2":"","w-120px":"",truncate:"",text:"sm black/80"},Be={flex:"","items-center":"","gap-x-2":""},Ve={text:"red"},Ee=e("span",{"text-sm":""},"￥",-1),Fe={text:"black/40 xs","line-through":""},Te=e("span",{"text-sm":""},"￥",-1),Ae={absolute:"","left-0":"","top-0":"",rounded:"lt-2 br-2","bg-red":"",text:"white xs",p:"x-2 y-2px"},qe=e("div",{flex:"","items-center":"","justify-between":"","rounded-lg":"","bg-white":"","p-3":""},[e("div",{flex:"","items-center":"","gap-x-2":"","text-base":""},[e("div",{"i-solar-fire-outline":""}),e("div",null,"热门推荐")]),e("div",{"i-solar-alt-arrow-right-linear":"","text-sm":""})],-1),ze={grid:"~ cols-2","gap-2":""},Ke={relative:"","overflow-hidden":"","rounded-lg":"","bg-white":""},Oe={"h-175px":"","w-full":"","object-cover":"",alt:""},Ge={p:"x-1 y-1"},He={truncate:"",text:"sm black/80",m:"b-1"},Me={flex:"","items-center":"","gap-x-2":""},Ue={text:"base red"},$e=e("span",{"text-sm":""},"￥",-1),Je={key:0,text:"black/40 xs","line-through":""},Qe=e("span",{"text-sm":""},"￥",-1),We={key:0,text:"xs white",p:"x-2 y-2px",absolute:"","left-0":"","top-0":"","rounded-br-lg":"","bg-red":""},nt=A({name:"Home",__name:"index",setup(i){const n=Q(),a=h("");function L(){n.push("/location")}const j=h([{id:r.Random.guid(),icon:"https://mp-7e00db99-ad65-4b9f-a74b-61bccb92b124.cdn.bspapp.com/cloudstorage/4e935a64-413b-4238-8324-1df81958b363.png",label:"手机"},{id:r.Random.guid(),icon:"https://mp-7e00db99-ad65-4b9f-a74b-61bccb92b124.cdn.bspapp.com/cloudstorage/37b12cae-0795-4b73-8a98-921534419c42.png",label:"服饰"},{id:r.Random.guid(),icon:"https://mp-7e00db99-ad65-4b9f-a74b-61bccb92b124.cdn.bspapp.com/cloudstorage/ba7d5d8b-5bf7-4541-8cfe-033a2dbdb0a9.png",label:"电脑"},{id:r.Random.guid(),icon:"https://mp-7e00db99-ad65-4b9f-a74b-61bccb92b124.cdn.bspapp.com/cloudstorage/aa25eef3-20f2-49a9-86ea-0993c615d9cf.png",label:"优惠券"},{id:r.Random.guid(),icon:"https://mp-7e00db99-ad65-4b9f-a74b-61bccb92b124.cdn.bspapp.com/cloudstorage/39ebeafe-e705-4455-a3b3-0825f1ed24bd.png",label:"洗护"},{id:r.Random.guid(),icon:"https://mp-7e00db99-ad65-4b9f-a74b-61bccb92b124.cdn.bspapp.com/cloudstorage/039bcda4-6a68-4198-921c-494ab5e38a2c.png",label:"摄影"},{id:r.Random.guid(),icon:"https://mp-7e00db99-ad65-4b9f-a74b-61bccb92b124.cdn.bspapp.com/cloudstorage/1de2d360-c6a0-4bde-a444-008710b2fba9.png",label:"鞋子"},{id:r.Random.guid(),icon:"https://mp-7e00db99-ad65-4b9f-a74b-61bccb92b124.cdn.bspapp.com/cloudstorage/aee90be8-661f-4b77-be2c-d3d84a5bb87c.png",label:"会员"},{id:r.Random.guid(),icon:"https://mp-7e00db99-ad65-4b9f-a74b-61bccb92b124.cdn.bspapp.com/cloudstorage/4be45592-6355-47a9-be89-9c9987f0dbae.png",label:"包包"},{id:r.Random.guid(),icon:"https://mp-7e00db99-ad65-4b9f-a74b-61bccb92b124.cdn.bspapp.com/cloudstorage/fe1527ad-70c6-4432-b413-5116786f1e76.png",label:"网络"}]),b=h([]),y=h([]),C=h([]);async function I(){const _=ne({message:"加载中...",duration:0,forbidClick:!0});try{const{code:g,data:c}=await Z();g===200&&(b.value=(c==null?void 0:c.limitedTimeSelection)??[],y.value=(c==null?void 0:c.groupBuying)??[],C.value=(c==null?void 0:c.popularRecommendations)??[])}finally{_.close()}}I();function D(_){n.push({name:"ProductDetails",params:{id:_}})}return(_,g)=>{const c=de,f=te,x=oe,N=ee,m=W("lazy");return d(),l(w,null,[s(c,{modelValue:p(a),"onUpdate:modelValue":g[0]||(g[0]=t=>J(a)?a.value=t:null),placeholder:"请输入搜索关键词"},{left:v(()=>[e("div",{"mr-2":"",flex:"","items-center":"","gap-x-1":"",text:"14px black/80",onClick:L},ge)]),_:1},8,["modelValue"]),s(N,{class:"my-swipe",autoplay:3e3,"indicator-color":"white","lazy-render":""},{default:v(()=>[s(x,null,{default:v(()=>[s(f,{src:p(re)},null,8,["src"])]),_:1}),s(x,null,{default:v(()=>[s(f,{src:p(ue)},null,8,["src"])]),_:1}),s(x,null,{default:v(()=>[s(f,{src:p(pe)},null,8,["src"])]),_:1})]),_:1}),e("div",me,[e("div",he,[(d(!0),l(w,null,R(p(j),t=>(d(),l("div",{key:t.id,flex:"~ col","items-center":""},[S(e("img",fe,null,512),[[m,t.icon]]),e("div",xe,u(t.label),1)]))),128))]),e("div",ve,[we,e("div",ke,[(d(!0),l(w,null,R(p(b),t=>(d(),l("div",{key:t.id,"snap-start":"",onClick:P=>D(t.id)},[S(e("img",Ce,null,512),[[m,t.image]]),e("div",Ie,u(t.title),1),e("div",Re,[Se,e("span",null,u(Number(t.price).toLocaleString()),1)])],8,ye))),128))])]),e("div",Le,[je,e("div",De,[(d(!0),l(w,null,R(p(y),t=>(d(),l("div",{key:t.id,relative:"","snap-start":""},[S(e("img",Ne,null,512),[[m,t.image]]),e("div",Pe,u(t.title),1),e("div",Be,[e("div",Ve,[Ee,e("span",null,u(Number(t.price).toLocaleString()),1)]),e("div",Fe,[Te,e("span",null,u(Number(t.originalPrice).toLocaleString()),1)])]),e("div",Ae,u(t.numberOfGroupBuyers)+"人团 ",1)]))),128))])]),qe,e("div",ze,[(d(!0),l(w,null,R(p(C),t=>(d(),l("div",{key:t.id},[e("div",Ke,[S(e("img",Oe,null,512),[[m,t.image]]),e("div",Ge,[e("div",He,u(t.title),1),e("div",Me,[e("div",Ue,[$e,e("span",null,u(Number(t.price).toLocaleString()),1)]),t.originalPrice?(d(),l("div",Je,[Qe,e("span",null,u(Number(t.originalPrice).toLocaleString()),1)])):F("",!0)])]),t.isItAMembershipPrice===1?(d(),l("div",We," 会员价 ")):F("",!0)])]))),128))])])],64)}}});export{nt as default};
