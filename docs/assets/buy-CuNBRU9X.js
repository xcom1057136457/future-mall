import{d as f,H as m,f as v,r as h,c as n,b as e,b1 as g,u as t,E as r,F as l,C as y,a as w,e as k,o as d,ao as S,b5 as B,b6 as I,k as p}from"./index-NBx_Pa6c.js";import"./index-29jdkEgN.js";import{S as j}from"./index-D4XCoY4g.js";import{_ as V}from"./_plugin-vue_export-helper-DlAUqK2U.js";const C="/future-mall/assets/vip-buy-bg-kqS3eOGs.png",i=o=>(B("data-v-41f81c8c"),o=o(),I(),o),N={"p-2":"","space-y-3":""},q={flex:"","items-center":"","justify-between":""},z={flex:"","gap-x-2":""},E=["src"],F={"text-white":"",flex:"~ col justify-between"},R={"text-sm":""},T=i(()=>e("div",{"text-xs":""},[p(" 开通会员立享 "),e("span",{"text-red":""},"5"),p(" 大权益 ")],-1)),$=i(()=>e("div",{text:"xs white",p:"x-3 y-1","rounded-full":"","bg-red":""}," 立即开通 ",-1)),A=i(()=>e("div",{flex:"","items-center":"","justify-between":""},[e("div",{flex:"","items-center":"","gap-x-2":""},[e("div",{"i-solar-crown-star-broken":"",text:"red lg"}),e("div",{text:"sm white"}," 开通说明 ")]),e("div",{text:"sm white"},[e("span",null,"开通预计省"),e("span",{text:"xs red"},"￥"),e("span",{text:"lg red"},"599")])],-1)),D={"rounded-lg":"","bg-white":"","p-3":""},G=i(()=>e("div",{text:"sm black/80","mb-3":"","font-semibold":""}," 会员五大权益 ",-1)),H={grid:"~ cols-3","gap-y-4":""},L={"h-33px":"","w-33px":"",flex:"","items-center":"","justify-center":"","rounded-full":"","bg-red-1":"",border:"~ solid red"},O={text:"xs black/80","font-semibold":""},P={text:"xs black/60"},U=f({name:"VipBuy",__name:"buy",setup(o){const u=k(),{userInfo:a}=m(v()),x=h([{icon:"i-solar-tag-price-bold-duotone",label:"会员价",description:"更省心/更划算"},{icon:"i-solar-server-square-bold-duotone",label:"会员券",description:"每月可领券"},{icon:"i-solar-user-heart-bold-duotone",label:"专属客服",description:"一键召唤"},{icon:"i-solar-circle-top-up-bold-duotone",label:"退换货",description:"7天无理由"},{icon:"i-solar-plain-3-bold-duotone",label:"2倍积分",description:"专属双倍积分"}]);return(J,c)=>{const b=j;return d(),n(l,null,[e("div",N,[e("div",{bg:"no-repeat cover center",p:"t-20px x-25px b-15px",flex:"~ col","box-border":"","h-140px":"","justify-between":"","overflow-hidden":"","rounded-10px":"",style:g({backgroundImage:`url(${t(C)})`})},[e("div",q,[e("div",z,[e("img",{src:t(a).avatar,"h-40px":"","w-40px":"","rounded-full":"","object-cover":"",alt:""},null,8,E),e("div",F,[e("div",R,r(t(a).nickname),1),T])]),$]),A],4),e("div",D,[G,e("div",H,[(d(!0),n(l,null,y(t(x),(s,_)=>(d(),n("div",{key:_,flex:"~ col","items-center":"","space-y-1":""},[e("div",L,[e("div",{class:S(s.icon),"text-red":""},null,2)]),e("div",O,r(s.label),1),e("div",P,r(s.description),1)]))),128))])])]),w(b,{price:100,"suffix-label":"/ 年","button-text":"立即开通",onSubmit:c[0]||(c[0]=s=>t(u).push({name:"Pay",params:{money:1}}))})],64)}}}),X=V(U,[["__scopeId","data-v-41f81c8c"]]);export{X as default};