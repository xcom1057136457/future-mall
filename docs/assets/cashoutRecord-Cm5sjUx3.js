import{g as d}from"./wallet-BFdYD8e-.js";import{d as l,r as u,c as s,F as _,C as p,u as f,i as m,o,b as t,E as a,M as h}from"./index-D16CmENv.js";const y={"p-2":"","space-y-2":""},x={text:"sm"},g={flex:"~ col","items-end":"","space-y-2":""},v={text:"sm black/80"},R=l({name:"CashoutRecord",__name:"cashoutRecord",setup(C){const c=u([]);async function i(){const n=m({message:"加载中...",forbidClick:!0,duration:0});try{const{code:r,data:e}=await d();r===200&&(c.value=e)}finally{n.close()}}return i(),(n,r)=>(o(),s("div",y,[(o(!0),s(_,null,p(f(c),e=>(o(),s("div",{key:e.id,flex:"","items-center":"","justify-between":"","bg-white":"","p-3":""},[t("div",x,a(e.time),1),t("div",g,[t("div",v," ￥"+a(e.money),1),t("div",{text:"xs black/60",class:h({"!text-red":e.type==="已提现"})},a(e.type),3)])]))),128))]))}});export{R as default};
