import{i as _}from"./integral-CLhpZaI-.js";import{d as f,r,c as l,b as e,u as n,F as d,C as h,ao as c,E as u,k as p,e as v,i as I,j as w,o}from"./index-DgD8RGzb.js";const S={w:"120%",rounded:"bl-1/2 br-1/2",left:"-10%",flex:"~ col",relative:"","h-180px":"","items-center":"","bg-red":""},k=e("div",{text:"3xl white",m:"t-7 b-2"}," 981649 ",-1),y={relative:"","z-10":"",top:"-50px"},C={w:"80%",m:"x-auto b-8",text:"black","rounded-lg":"","bg-white":"","p-3":"","text-sm":"","font-semibold":""},T=e("div",{"mb-3":"","space-x-2":""},[p(" 已累计签到 "),e("span",{"text-red":""},"497天")],-1),B={flex:"","justify-between":""},L={text:"xs black/60"},j=e("div",{text:"center sm black/60","mb-4":"","space-x-3":""},[e("span",null,"连续签到7天"),e("span",null,"可额外获得20积分")],-1),z=e("div",{fixed:"","bottom-0":"","left-0":"","right-0":"","bg-red":"",text:"sm white center","py-2":""}," 有981649积分将在2024-12-31过期 ",-1),N=f({name:"IntegralSignIn",__name:"signIn",setup(D){const b=v(),g=r([{label:"周日",isSignIn:0},{label:"周一",isSignIn:0},{label:"周二",isSignIn:1},{label:"周三",isSignIn:1},{label:"周四",isSignIn:1},{label:"周五",isSignIn:0},{label:"周六",isSignIn:0}]),t=r(!1);async function m(){if(t.value)return;const a=I({message:"签到中...",forbidClick:!0,duration:0});try{const{code:s}=await _();s===200&&(t.value=!0,setTimeout(()=>{w({message:"签到成功!"})}))}finally{a.close()}}return(a,s)=>(o(),l(d,null,[e("div",S,[k,e("div",{p:"x-5 y-1","rounded-full":"",text:"sm white",border:"~ solid white",onClick:s[0]||(s[0]=i=>n(b).push({name:"IntegralDetail"}))}," 积分明细 ")]),e("div",y,[e("div",C,[T,e("div",B,[(o(!0),l(d,null,h(n(g),(i,x)=>(o(),l("div",{key:x,flex:"~ col","items-center":""},[e("div",{"i-solar-check-circle-bold-duotone":"","mb-1":"",text:"3xl black/40",class:c({"!text-red":i.isSignIn===1})},null,2),e("div",L,u(i.label),1)]))),128))])]),j,e("div",{w:"80%",text:"sm white center","mx-auto":"","rounded-full":"","bg-red":"","py-3":"",class:c({"!bg-gray-300 !text-white":n(t)}),onClick:m},u(n(t)?"今日已签到":"立即签到"),3)]),z],64))}});export{N as default};
