import{g as l}from"./integral-DoJWxdK0.js";import{d,r as _,c as a,F as f,C as p,u,i as g,o as s,b as t,E as n}from"./index-D16CmENv.js";const m={"p-2":"","space-y-2":""},y={text:"sm"},h={flex:"~ col","items-end":"","space-y-2":""},x={text:"sm black/80"},b={text:"xs black/60"},D=d({name:"IntegralDetail",__name:"detail",setup(v){const o=_([]);async function c(){const i=g({message:"加载中...",forbidClick:!0,duration:0});try{const{code:r,data:e}=await l();r===200&&(o.value=e)}finally{i.close()}}return c(),(i,r)=>(s(),a("div",m,[(s(!0),a(f,null,p(u(o),e=>(s(),a("div",{key:e.id,flex:"","items-center":"","justify-between":"","bg-white":"","p-3":""},[t("div",y,n(e.time),1),t("div",h,[t("div",x,n(`${e.symbol} ${e.integral}`),1),t("div",b,n(e.type),1)])]))),128))]))}});export{D as default};
