import{b as M,a4 as z,o as l,f as T,w as c,n as e,a5 as G,r as g,z as i,u as s,a6 as re,a7 as W,Y as ee,O as B,t as _,q as P,k as u,m as j,p as q,F as w,a8 as te,a9 as pe,v as U,i as _e,h as ve,U as me,aa as xe,X as fe,$ as be,ab as he,ac as ge,y as Z,ad as ke,_ as ye,a0 as we,ae as $e,af as Ce}from"../.pnpm/.pnpm.7GDBY3hL.js";import{a as Ve}from"../home/home.C2VxQHfr.js";import"../request/request.CGumY6Vh.js";const Se={"p-5":""},je=e("div",{text:"base center black/80","mb-8":"","font-semibold":""}," 服务说明 ",-1),Ie=e("div",{text:"sm black/80","mb-2":"","font-semibold":""}," 七天无理由退货 ",-1),Ue=e("div",{text:"sm black/50","mb-5":""}," 满足相应条件（未使用）时，消费者可申请7天无理由退货。 ",-1),Be=e("div",{text:"sm black/80","mb-2":"","font-semibold":""}," 晚发即赔 ",-1),Pe=e("div",{text:"sm black/50","mb-20":""}," 若发货超时或物流异常，将为你补贴至少3元无门槛优惠券（特殊商品、大促活动及不可抗力因素除外）。 ",-1),Te=M({name:"ServicePop",__name:"index",props:{visible:{type:Boolean,default:!1},visibleModifiers:{}},emits:["update:visible"],setup(b){const p=z(b,"visible");return(v,n)=>{const h=G;return l(),T(h,{show:p.value,"onUpdate:show":n[1]||(n[1]=a=>p.value=a),position:"bottom",closeable:"",round:""},{default:c(()=>[e("div",Se,[je,Ie,Ue,Be,Pe,e("div",{text:"white sm center","h-40px":"","rounded-full":"","bg-red":"","leading-40px":"",onClick:n[0]||(n[0]=a=>p.value=!1)}," 确认 ")])]),_:1},8,["show"])}}}),De=M({name:"CouponPop",__name:"index",props:{visible:{type:Boolean,default:!1},visibleModifiers:{}},emits:["update:visible"],setup(b){const p=z(b,"visible"),v=g([{available:1,condition:`无门槛
最多优惠12元`,reason:"",value:150,name:"优惠券名称",startAt:1489104e3,endAt:1514592e3,valueDesc:"1.5",unitDesc:"元"}]),n=g(-1);function h(a){p.value=!1,n.value=a}return(a,f)=>{const I=re,m=G;return l(),T(m,{show:p.value,"onUpdate:show":f[0]||(f[0]=x=>p.value=x),round:"",position:"bottom",style:{height:"90%","padding-top":"4px"}},{default:c(()=>[i(I,{coupons:s(v),"chosen-coupon":s(n),onChange:h},null,8,["coupons","chosen-coupon"])]),_:1},8,["show"])}}}),ze={"mb-200px":"","p-3":"","space-y-5":""},Me={flex:"","gap-x-2":""},Ae={"h-55px":"","w-55px":"","object-cover":"",alt:""},Ne={flex:"~ col","justify-between":""},Le={"text-red":""},Re=e("span",null,"￥",-1),qe={text:"2xl "},Ge={"space-x-2":""},Oe=e("div",{"mb-2":"",text:"sm black/80","font-semibold":""}," 颜色（3） ",-1),Ee={flex:"","items-center":"","gap-x-3":""},Fe=["onClick"],Xe=e("div",{"mb-2":"",text:"sm black/80","font-semibold":""}," 容量（3） ",-1),Ye={flex:"","items-center":"","gap-x-3":""},He=["onClick"],Je={flex:"","items-center":"","justify-between":""},Ke=e("div",{"space-x-3":""},[e("span",{text:"sm"},"购买数量"),e("span",{text:"xs black/50"},"库存10件")],-1),Qe=M({name:"SkuPop",__name:"index",props:W({productInfo:{default:()=>({})}},{visible:{type:Boolean,default:!1},visibleModifiers:{},modelValue:{},modelModifiers:{}}),emits:W(["addToCart","buy"],["update:visible","update:modelValue"]),setup(b,{emit:p}){const v=b,n=p,h=z(b,"visible"),a=z(b,"modelValue");function f(){n("addToCart")}function I(){n("buy")}return(m,x)=>{const k=te,$=pe,A=G,N=ee("lazy");return l(),T(A,{show:h.value,"onUpdate:show":x[1]||(x[1]=r=>h.value=r),position:"bottom",closeable:"",round:""},{default:c(()=>{var r,o,C,V;return[e("div",null,[e("div",ze,[e("div",Me,[B(e("img",Ae,null,512),[[N,(r=v.productInfo)==null?void 0:r.images[0]]]),e("div",Ne,[e("div",Le,[Re,e("span",qe,_((o=v.productInfo)==null?void 0:o.price),1)]),e("div",Ge,[i(k,{type:"danger",plain:""},{default:c(()=>[P(" 返8400积分 ")]),_:1}),i(k,{type:"danger",plain:""},{default:c(()=>[P(" 包邮 ")]),_:1})])])]),e("div",null,[Oe,e("div",Ee,[(l(!0),u(w,null,j((C=v.productInfo)==null?void 0:C.colors,d=>(l(),u("div",{key:d.value,p:"x3 y-1","rounded-full":"","bg-gray-100":"",text:"xs black/80",class:q({"bg-red !text-white":a.value.color===d.value}),onClick:L=>a.value.color=d.value},_(d.label),11,Fe))),128))])]),e("div",null,[Xe,e("div",Ye,[(l(!0),u(w,null,j((V=v.productInfo)==null?void 0:V.capacitys,d=>(l(),u("div",{key:d,p:"x3 y-1","rounded-full":"","bg-gray-100":"",text:"xs black/60",class:q({"bg-red !text-white":a.value.capacity===d}),onClick:L=>a.value.capacity=d},_(`${d} G`),11,He))),128))])]),e("div",Je,[Ke,i($,{modelValue:a.value.num,"onUpdate:modelValue":x[0]||(x[0]=d=>a.value.num=d)},null,8,["modelValue"])])]),e("div",{flex:"",p:"b-4 x-4"},[e("div",{flex:"~ 1","h-40px":"","items-center":"","justify-center":"","bg-orange":"",text:"sm white",rounded:"lt-full lb-full",onClick:f}," 加入购物车 "),e("div",{"h-40px":"",flex:"~ 1","items-center":"","justify-center":"","bg-red":"",text:"sm white",rounded:"rt-full rb-full",onClick:I}," 立即购买 ")])])]}),_:1},8,["show"])}}}),We={"w-full":"","object-cover":"",alt:""},Ze={"p-2":"","space-y-3":""},et={"overflow-hidden":"","rounded-lg":"","bg-white":"","p-3":""},tt={"mb-3":"","text-red":""},ot=e("span",{"text-base":""},"￥",-1),nt={"text-xl":""},st={text:"sm black/80","mb-4":"","font-semibold":""},lt={flex:"","items-center":"","justify-between":""},it={p:"x-3 y-2",flex:"","items-center":"","gap-x-2":"",rounded:"","bg-gray-100":"",text:"black/80"},at=e("div",{"i-solar-dollar-linear":""},null,-1),dt={"text-xs":""},ct={"text-red":""},ut={flex:"","items-center":"","gap-x-3":""},rt={text:"sm black/70"},pt={"h-30px":"","w-30px":"",flex:"","items-center":"","justify-center":"","rounded-full":"","bg-gray-100":""},_t={"overflow-hidden":"","rounded-lg":"","bg-white":""},vt=e("div",{flex:"","items-center":"","gap-x-5":""},[e("div",{"text-gray-400":""}," 已选 "),e("div",null,"银色 & 128G")],-1),mt=e("div",{flex:"","items-center":"","gap-x-5":""},[e("div",{"text-gray-400":""}," 优惠 "),e("div",null,"领取优惠券")],-1),xt=e("div",{flex:"","items-center":"","gap-x-5":""},[e("div",{"text-gray-400":""}," 服务 "),e("div",{flex:"","items-center":""},[e("span",null,"七天无理由退货"),e("span",{"mx-2":"","inline-block":"","h-3px":"","w-3px":"","rounded-full":"",bg:"black/20"}),e("span",null,"晚发即赔")])],-1),ft={"rounded-lg":"","bg-white":""},bt=e("div",{flex:"","items-center":"","justify-between":"",p:"x-3 t-3"},[e("div",{text:"sm black/80","font-semibold":""}," 用户评价 (9) "),e("div",{flex:"","items-center":"","gap-x-2":"",text:"sm black/50"},[e("span",null,"查看全部"),e("div",{"i-solar-alt-arrow-right-line-duotone":""})])],-1),ht={"px-3":""},gt={flex:"","items-center":"","justify-between":""},kt={flex:"","gap-x-2":""},yt={"h-40px":"","w-40px":"","rounded-full":"","object-cover":"",alt:""},wt={flex:"~ col","justify-center":"","gap-y-1":""},$t={text:"sm black/80"},Ct={text:"sm black/50"},Vt={text:"sm black/80"},St={key:0,"space-x-2":""},jt=["onClick"],It={key:1,text:"xs black/50"},Ut={"rounded-lg":"","bg-white":"","p-2":""},Bt=["onClick"],Pt=e("div",{flex:"~ 1","items-center":"","gap-x-5":""},[e("div",{flex:"~ col","items-center":"",text:"black/60"},[e("div",{"i-solar-home-2-broken":"","mb-1":"","text-lg":""}),e("div",{"text-xs":""}," 首页 ")]),e("div",{flex:"~ col","items-center":"",text:"black/60"},[e("div",{"i-solar-star-line-duotone":"","mb-1":"","text-lg":""}),e("div",{"text-xs":""}," 收藏 ")])],-1),Tt={flex:""},Nt=M({name:"ProductDetails",__name:"index",setup(b){const p=_e(),v=ve(),n=g({});async function h(){var o;const r=me({message:"加载中...",duration:0,forbidClick:!0});try{const{code:C,data:V}=await Ve({id:(o=v.params)==null?void 0:o.id});C===200&&(n.value=V)}finally{r.close()}}h();function a(r,o){ke({images:r,startPosition:o})}const f=g(!1),I=[{name:"微信",icon:"wechat"},{name:"微博",icon:"weibo"},{name:"复制链接",icon:"link"},{name:"分享海报",icon:"poster"},{name:"二维码",icon:"qrcode"}],m=g(!1),x=g({num:1,color:"silvery",capacity:256}),k=g(!1),$=g(!1);function A(){xe({message:"加入成功!"}),m.value=!1}function N(){var r;p.push({name:"OrderCreate",params:{id:(r=v.params)==null?void 0:r.id}})}return(r,o)=>{var O,E,F,X,Y,H,J,K,Q;const C=ye,V=fe,d=we,L=te,oe=be,ne=$e,se=Ce,le=he,ie=ge,ae=Qe,de=De,ce=Te,D=ee("lazy");return l(),u(w,null,[i(V,{class:"my-swipe",autoplay:3e3,"indicator-color":"#000"},{default:c(()=>[(l(!0),u(w,null,j(s(n).images,(t,S)=>(l(),T(C,{key:S},{default:c(()=>[B(e("img",We,null,512),[[D,t]])]),_:2},1024))),128))]),_:1}),e("div",Ze,[e("div",et,[e("div",tt,[ot,e("span",nt,_((O=s(n))!=null&&O.price?Number((E=s(n))==null?void 0:E.price).toLocaleString():""),1)]),e("div",st,_((F=s(n))==null?void 0:F.name),1),e("div",lt,[e("div",it,[at,e("div",dt,[P(" 购买可得 "),e("span",ct,_((X=s(n))==null?void 0:X.integral),1),P(" 积分 ")])]),e("div",ut,[e("div",rt," 销量："+_((Y=s(n))==null?void 0:Y.salesVolume),1),e("div",pt,[e("div",{"i-solar-square-share-line-broken":"",text:"black/70 sm",onClick:o[0]||(o[0]=t=>f.value=!0)})])])])]),e("div",_t,[i(oe,null,{default:c(()=>[i(d,{"is-link":"",onClick:o[1]||(o[1]=t=>m.value=!0)},{title:c(()=>[vt]),_:1}),i(d,{"is-link":"",onClick:o[2]||(o[2]=t=>k.value=!0)},{title:c(()=>[mt]),value:c(()=>[i(L,{round:"",color:"#f87171"},{default:c(()=>[P(" 去领取 ")]),_:1})]),_:1}),i(d,{"is-link":"",onClick:o[3]||(o[3]=t=>$.value=!0)},{title:c(()=>[xt]),_:1})]),_:1})]),e("div",ft,[bt,e("div",ht,[(H=s(n))!=null&&H.evaluates&&((J=s(n))!=null&&J.evaluates.length)?(l(!0),u(w,{key:0},j(((K=s(n))==null?void 0:K.evaluates)??[],(t,S)=>{var R;return l(),u("div",{key:S,"py-3":"",border:"0 b solid gray-100","space-y-2":"",class:q({"border-none":S===((R=s(n))==null?void 0:R.evaluates.length)-1})},[e("div",gt,[e("div",kt,[B(e("img",yt,null,512),[[D,t.avatar]]),e("div",wt,[e("div",$t,_(t.nickname),1),i(ne,{modelValue:t.rate,"onUpdate:modelValue":y=>t.rate=y,"allow-half":"",readonly:"",size:12},null,8,["modelValue","onUpdate:modelValue"])])]),e("div",Ct,_(t.time),1)]),e("div",Vt,_(t.comment),1),t.commentImages&&t.commentImages.length?(l(),u("div",St,[(l(!0),u(w,null,j(t.commentImages,(y,ue)=>B((l(),u("img",{key:y,"h-95px":"","w-95px":"","object-cover":"",onClick:Dt=>a(t.commentImages,ue)},null,8,jt)),[[D,y]])),128))])):Z("",!0),t.tag?(l(),u("div",It,_(t.tag),1)):Z("",!0)],2)}),128)):(l(),T(se,{key:1,image:"search",description:"暂无数据"}))])]),e("div",Ut,[(l(!0),u(w,null,j(((Q=s(n))==null?void 0:Q.descriptionImages)||[],(t,S)=>B((l(),u("img",{key:t,"w-full":"","object-cover":"",alt:"",onClick:R=>{var y;return a((y=s(n))==null?void 0:y.descriptionImages,S)}},null,8,Bt)),[[D,t]])),128))])]),i(le,{placeholder:""},{button:c(()=>[e("div",Tt,[e("div",{text:"sm white","h-40px":"","w-110px":"",flex:"","items-center":"","justify-center":"",rounded:"lt-full lb-full","bg-orange":"",onClick:o[4]||(o[4]=t=>m.value=!0)}," 加入购物车 "),e("div",{text:"sm white","h-40px":"","w-110px":"",flex:"","items-center":"","justify-center":"","bg-red":"",rounded:"rt-full rb-full",onClick:o[5]||(o[5]=t=>m.value=!0)}," 立即购买 ")])]),default:c(()=>[Pt]),_:1}),i(ie,{show:s(f),"onUpdate:show":o[6]||(o[6]=t=>U(f)?f.value=t:null),title:"立即分享给好友",options:I},null,8,["show"]),i(ae,{modelValue:s(x),"onUpdate:modelValue":o[7]||(o[7]=t=>U(x)?x.value=t:null),visible:s(m),"onUpdate:visible":o[8]||(o[8]=t=>U(m)?m.value=t:null),"product-info":s(n),onAddToCart:A,onBuy:N},null,8,["modelValue","visible","product-info"]),i(de,{visible:s(k),"onUpdate:visible":o[9]||(o[9]=t=>U(k)?k.value=t:null)},null,8,["visible"]),i(ce,{visible:s($),"onUpdate:visible":o[10]||(o[10]=t=>U($)?$.value=t:null)},null,8,["visible"])],64)}}});export{Nt as default};