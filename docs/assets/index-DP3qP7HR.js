import{d as f,f as h,r as v,c as g,b as e,a,w as c,v as m,u as s,g as k,e as w,h as y,s as u,i as V,j as C,o as T,k as j,I as q}from"./index-D16CmENv.js";import{C as F}from"./index-DCTsZZk1.js";import"./index-CwSYHWoQ.js";import{_ as U}from"./index.vue_vue_type_script_setup_true_lang-DghsocYG.js";const B={"box-border":"","p-2":"",h:"[calc(100vh-46px)]"},L={relative:"","box-border":"","h-full":"",rounded:"","bg-white":"","p-3":""},N={"mb-4":"",flex:"","items-center":"","justify-center":""},I={"mb-8":"","space-y-6":""},R={border:"~ solid gray-200",p:"x-3 y-2","box-border":"",flex:"","items-center":"","gap-x-2":"","rounded-lg":""},S=e("div",{"i-solar-iphone-outline":"",text:"xl black/60"},null,-1),z={border:"~ solid gray-200",p:"x-3 y-2","box-border":"",flex:"","items-center":"","gap-x-2":"","rounded-lg":""},A=e("div",{"i-solar-lock-keyhole-minimalistic-broken":"",text:"xl black/60"},null,-1),D={flex:"","justify-end":""},E={"mb-7":"",flex:"","items-center":"","justify-center":"","gap-x-9":""},M=e("div",{flex:"","items-center":"","justify-center":"",text:"sm black/80"},[e("div",null,"找回密码"),e("div",{"mx-3":"","h-12px":"","w-1px":"",bg:"black/40"}),e("div",null,"注册账号")],-1),K=f({name:"Login",__name:"index",setup(P){const i=w(),l=y(),{login:p}=h(),o=v({phone:"admin",password:"123456",rememberme:!1});async function x(){var t;if(o.value.phone){if(!o.value.password)return u({message:"密码不能为空!"})}else return u({message:"账号不能为空!"});const d=V({message:"加载中...",forbidClick:!0,duration:0});try{await p(),(t=l.query)!=null&&t.redirect?await i.replace(l.query.redirect):i.back(),setTimeout(()=>{C({message:"登录成功!"})})}finally{d.close()}}return(d,t)=>{const b=U,_=F,r=q;return T(),g("div",B,[e("div",L,[e("div",N,[a(b,{"icon-class":"planet","text-180px":""})]),e("div",I,[e("div",R,[S,c(e("input",{"onUpdate:modelValue":t[0]||(t[0]=n=>s(o).phone=n),type:"text","flex-1":"","border-none":"","bg-transparent":"","text-sm":"","outline-none":"",placeholder:"账号"},null,512),[[m,s(o).phone]])]),e("div",z,[A,c(e("input",{"onUpdate:modelValue":t[1]||(t[1]=n=>s(o).password=n),type:"password","flex-1":"","border-none":"","bg-transparent":"","text-sm":"","outline-none":"",placeholder:"密码"},null,512),[[m,s(o).password]])]),e("div",D,[a(_,{modelValue:s(o).rememberme,"onUpdate:modelValue":t[2]||(t[2]=n=>s(o).rememberme=n),shape:"square","icon-size":"14px","text-sm":"","checked-color":"#0F2027"},{default:k(()=>[j(" 记住账号 ")]),_:1},8,["modelValue"])]),e("div",{text:"white center sm",m:"!t-10","rounded-3xl":"",from:"#0F2027",via:"#203A43",to:"#2C5364","bg-gradient-to-r":"","py-3":"",onClick:x}," 登 录 ")]),e("div",null,[e("div",E,[a(r,{name:"wechat",text:"3xl black/60"}),a(r,{name:"weibo",text:"3xl black/60"}),a(r,{name:"qq",text:"3xl black/60"})]),M])])])}}});export{K as default};
