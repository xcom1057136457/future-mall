import{h as pe,d as J,U as Re,r as M,A as K,J as ae,G as Be,a as l,Z as ce,K as me,k as de,_ as F,$ as je,Q as ve,a0 as Ue,H as qe,a1 as Le,a2 as We,M as Fe,j as ke,p as ze,t as N,a3 as Oe,a4 as se,a5 as Se,m as fe,a6 as Ve,I as ge,a7 as Ge,a8 as Ke,i as Me,l as Ce,a9 as Je,L as Qe,aa as et,ab as we,o as T,Y as he,e as O,b as o,ac as Ie,x as Ye,w as le,y as H,g as ie,c as V,s as oe,B as ye,F as G,u as $,q as ne,f as tt,ad as ot,z as Pe}from"./index-NqS3evgO.js";import{u as Xe,P as _e,p as at,a as nt}from"./index-Cp4cOlF2.js";import{u as st,_ as lt,E as it}from"./index.vue_vue_type_script_setup_true_lang-DDBG7Dd3.js";import{S as ct}from"./index-D9z7AWER.js";import{T as Ee}from"./index-Dx7NRumu.js";import{L as rt}from"./index-TXPf4dty.js";import"./index-DF4KEBhs.js";import{S as dt}from"./index-r13-EENw.js";import{C as ut}from"./index-CHXVxRCj.js";import{C as mt}from"./index-CAe_UIfi.js";import"./index-OLAq1RdL.js";import{a as vt}from"./home-tbuRHEEY.js";import{m as ft,u as gt,s as ht,b as pt}from"./request-BZVuECNf.js";import{I as _t}from"./index-CeQyMs1K.js";import{u as He}from"./use-expose-PVMTY6tw.js";import{a as Ne,S as Ze}from"./index-DSzZLmCC.js";import"./use-scope-id-TRPw9BWN.js";/* empty css              */import"./index-C1QaQHgT.js";import"./index-DJ5EJ3yW.js";const $e=e=>Math.sqrt((e[0].clientX-e[1].clientX)**2+(e[0].clientY-e[1].clientY)**2),bt=e=>({x:(e[0].clientX+e[1].clientX)/2,y:(e[0].clientY+e[1].clientY)/2}),xe=pe("image-preview")[1],Te=2.6,xt={src:String,show:Boolean,active:Number,minZoom:ce(me),maxZoom:ce(me),rootWidth:ce(Number),rootHeight:ce(Number),disableZoom:Boolean,doubleScale:Boolean,closeOnClickImage:Boolean,closeOnClickOverlay:Boolean,vertical:Boolean};var wt=J({props:xt,emits:["scale","close","longPress"],setup(e,{emit:f,slots:v}){const t=Re({scale:1,moveX:0,moveY:0,moving:!1,zooming:!1,initializing:!1,imageRatio:0}),b=Xe(),d=M(),S=M(),B=M(!1),w=M(!1);let h=0;const k=K(()=>{const{scale:a,moveX:r,moveY:m,moving:C,zooming:R,initializing:z}=t,i={transitionDuration:R||C||z?"0s":".3s"};return(a!==1||w.value)&&(i.transform=`matrix(${a}, 0, 0, ${a}, ${r}, ${m})`),i}),y=K(()=>{if(t.imageRatio){const{rootWidth:a,rootHeight:r}=e,m=B.value?r/t.imageRatio:a;return Math.max(0,(t.scale*m-a)/2)}return 0}),s=K(()=>{if(t.imageRatio){const{rootWidth:a,rootHeight:r}=e,m=B.value?r:a*t.imageRatio;return Math.max(0,(t.scale*m-r)/2)}return 0}),p=(a,r)=>{var m;if(a=F(a,+e.minZoom,+e.maxZoom+1),a!==t.scale){const C=a/t.scale;if(t.scale=a,r){const R=ve((m=d.value)==null?void 0:m.$el),z={x:R.width*.5,y:R.height*.5},i=t.moveX-(r.x-R.left-z.x)*(C-1),X=t.moveY-(r.y-R.top-z.y)*(C-1);t.moveX=F(i,-y.value,y.value),t.moveY=F(X,-s.value,s.value)}else t.moveX=0,t.moveY=w.value?h:0;f("scale",{scale:a,index:e.active})}},_=()=>{p(1)},c=()=>{const a=t.scale>1?1:2;p(a,a===2||w.value?{x:b.startX.value,y:b.startY.value}:void 0)};let I,P,x,n,u,g,Y,L,D=!1;const Q=a=>{const{touches:r}=a;if(I=r.length,I===2&&e.disableZoom)return;const{offsetX:m}=b;b.start(a),P=t.moveX,x=t.moveY,L=Date.now(),D=!1,t.moving=I===1&&(t.scale!==1||w.value),t.zooming=I===2&&!m.value,t.zooming&&(n=t.scale,u=$e(r))},ee=a=>{const{touches:r}=a;if(b.move(a),t.moving){const{deltaX:m,deltaY:C}=b,R=m.value+P,z=C.value+x;if((e.vertical?b.isVertical()&&Math.abs(z)>s.value:b.isHorizontal()&&Math.abs(R)>y.value)&&!D){t.moving=!1;return}D=!0,de(a,!0),t.moveX=F(R,-y.value,y.value),t.moveY=F(z,-s.value,s.value)}if(t.zooming&&(de(a,!0),r.length===2)){const m=$e(r),C=n*m/u;g=bt(r),p(C,g)}},Z=a=>{var r;const m=(r=S.value)==null?void 0:r.$el;if(!m)return;const C=m.firstElementChild,R=a.target===m,z=C==null?void 0:C.contains(a.target);!e.closeOnClickImage&&z||!e.closeOnClickOverlay&&R||f("close")},A=a=>{if(I>1)return;const r=Date.now()-L,m=250;b.isTap.value&&(r<m?e.doubleScale?Y?(clearTimeout(Y),Y=null,c()):Y=setTimeout(()=>{Z(a),Y=null},m):Z(a):r>Ue&&f("longPress"))},j=a=>{let r=!1;if((t.moving||t.zooming)&&(r=!0,t.moving&&P===t.moveX&&x===t.moveY&&(r=!1),!a.touches.length)){t.zooming&&(t.moveX=F(t.moveX,-y.value,y.value),t.moveY=F(t.moveY,-s.value,s.value),t.zooming=!1),t.moving=!1,P=0,x=0,n=1,t.scale<1&&_();const m=+e.maxZoom;t.scale>m&&p(m,g)}de(a,r),A(a),b.reset()},U=()=>{const{rootWidth:a,rootHeight:r}=e,m=r/a,{imageRatio:C}=t;B.value=t.imageRatio>m&&C<Te,w.value=t.imageRatio>m&&C>=Te,w.value&&(h=(C*a-r)/2,t.moveY=h,t.initializing=!0,je(()=>{t.initializing=!1})),_()},q=a=>{const{naturalWidth:r,naturalHeight:m}=a.target;t.imageRatio=m/r,U()};return ae(()=>e.active,_),ae(()=>e.show,a=>{a||_()}),ae(()=>[e.rootWidth,e.rootHeight],U),Be("touchmove",ee,{target:K(()=>{var a;return(a=S.value)==null?void 0:a.$el})}),He({resetScale:_}),()=>{const a={loading:()=>l(rt,{type:"spinner"},null)};return l(Ne,{ref:S,class:xe("swipe-item"),onTouchstartPassive:Q,onTouchend:j,onTouchcancel:j},{default:()=>[v.image?l("div",{class:xe("image-wrap")},[v.image({src:e.src,onLoad:q,style:k.value})]):l(_t,{ref:d,src:e.src,fit:"contain",class:xe("image",{vertical:B.value}),style:k.value,onLoad:q},a)]})}}});const[yt,te]=pe("image-preview"),kt=["show","teleport","transition","overlayStyle","closeOnPopstate"],Ct={show:Boolean,loop:N,images:Oe(),minZoom:se(1/3),maxZoom:se(3),overlay:N,vertical:Boolean,closeable:Boolean,showIndex:N,className:Se,closeIcon:fe("clear"),transition:String,beforeClose:Function,doubleScale:N,overlayClass:Se,overlayStyle:Object,swipeDuration:se(300),startPosition:se(0),showIndicators:Boolean,closeOnPopstate:N,closeOnClickImage:N,closeOnClickOverlay:N,closeIconPosition:fe("top-right"),teleport:[String,Object]};var Ae=J({name:yt,props:Ct,emits:["scale","close","closed","change","longPress","update:show"],setup(e,{emit:f,slots:v}){const t=M(),b=M(),d=Re({active:0,rootWidth:0,rootHeight:0,disableZoom:!1}),S=()=>{if(t.value){const n=ve(t.value.$el);d.rootWidth=n.width,d.rootHeight=n.height,t.value.resize()}},B=n=>f("scale",n),w=n=>f("update:show",n),h=()=>{Ge(e.beforeClose,{args:[d.active],done:()=>w(!1)})},k=n=>{n!==d.active&&(d.active=n,f("change",n))},y=()=>{if(e.showIndex)return l("div",{class:te("index")},[v.index?v.index({index:d.active}):`${d.active+1} / ${e.images.length}`])},s=()=>{if(v.cover)return l("div",{class:te("cover")},[v.cover()])},p=()=>{d.disableZoom=!0},_=()=>{d.disableZoom=!1},c=()=>l(Ze,{ref:t,lazyRender:!0,loop:e.loop,class:te("swipe"),vertical:e.vertical,duration:e.swipeDuration,initialSwipe:e.startPosition,showIndicators:e.showIndicators,indicatorColor:"white",onChange:k,onDragEnd:_,onDragStart:p},{default:()=>[e.images.map((n,u)=>l(wt,{ref:g=>{u===d.active&&(b.value=g)},src:n,show:e.show,active:d.active,maxZoom:e.maxZoom,minZoom:e.minZoom,rootWidth:d.rootWidth,rootHeight:d.rootHeight,disableZoom:d.disableZoom,doubleScale:e.doubleScale,closeOnClickImage:e.closeOnClickImage,closeOnClickOverlay:e.closeOnClickOverlay,vertical:e.vertical,onScale:B,onClose:h,onLongPress:()=>f("longPress",{index:u})},{image:v.image}))]}),I=()=>{if(e.closeable)return l(ge,{role:"button",name:e.closeIcon,class:[te("close-icon",e.closeIconPosition),Ve],onClick:h},null)},P=()=>f("closed"),x=(n,u)=>{var g;return(g=t.value)==null?void 0:g.swipeTo(n,u)};return He({resetScale:()=>{var n;(n=b.value)==null||n.resetScale()},swipeTo:x}),qe(S),ae([Le,We],S),ae(()=>e.startPosition,n=>k(+n)),ae(()=>e.show,n=>{const{images:u,startPosition:g}=e;n?(k(+g),Fe(()=>{S(),x(+g,{immediate:!0})})):f("close",{index:d.active,url:u[d.active]})}),()=>l(_e,ke({class:[te(),e.className],overlayClass:[te("overlay"),e.overlayClass],onClosed:P,"onUpdate:show":w},ze(e,kt)),{default:()=>[I(),c(),y(),s()]})}});let ue;const St={loop:!0,images:[],maxZoom:3,minZoom:1/3,onScale:void 0,onClose:void 0,onChange:void 0,vertical:!1,teleport:"body",className:"",showIndex:!0,closeable:!1,closeIcon:"clear",transition:void 0,beforeClose:void 0,doubleScale:!0,overlayStyle:void 0,overlayClass:void 0,startPosition:0,swipeDuration:300,showIndicators:!1,closeOnPopstate:!0,closeOnClickOverlay:!0,closeIconPosition:"top-right"};function It(){({instance:ue}=ft({setup(){const{state:e,toggle:f}=gt(),v=()=>{e.images=[]};return()=>l(Ae,ke(e,{onClosed:v,"onUpdate:show":f}),null)}}))}const Pt=(e,f=0)=>{if(Ke)return ue||It(),e=Array.isArray(e)?{images:e,startPosition:f}:e,ue.open(Me({},St,e)),ue};Ce(Ae);const[$t,re]=pe("rate");function Tt(e,f,v,t){return e>=f?{status:"full",value:1}:e+.5>=f&&v&&!t?{status:"half",value:.5}:e+1>=f&&v&&t?{status:"half",value:Math.round((e-f+1)*1e10)/1e10}:{status:"void",value:0}}const Rt={size:me,icon:fe("star"),color:String,count:se(5),gutter:me,clearable:Boolean,readonly:Boolean,disabled:Boolean,voidIcon:fe("star-o"),allowHalf:Boolean,voidColor:String,touchable:N,iconPrefix:String,modelValue:Qe(0),disabledColor:String};var Bt=J({name:$t,props:Rt,emits:["change","update:modelValue"],setup(e,{emit:f}){const v=Xe(),[t,b]=st(),d=M(),S=K(()=>e.readonly||e.disabled),B=K(()=>S.value||!e.touchable),w=K(()=>Array(+e.count).fill("").map((n,u)=>Tt(e.modelValue,u+1,e.allowHalf,e.readonly)));let h,k,y=Number.MAX_SAFE_INTEGER,s=Number.MIN_SAFE_INTEGER;const p=()=>{k=ve(d);const n=t.value.map(ve);h=[],n.forEach((u,g)=>{y=Math.min(u.top,y),s=Math.max(u.top,s),e.allowHalf?h.push({score:g+.5,left:u.left,top:u.top,height:u.height},{score:g+1,left:u.left+u.width/2,top:u.top,height:u.height}):h.push({score:g+1,left:u.left,top:u.top,height:u.height})})},_=(n,u)=>{for(let g=h.length-1;g>0;g--)if(u>=k.top&&u<=k.bottom){if(n>h[g].left&&u>=h[g].top&&u<=h[g].top+h[g].height)return h[g].score}else{const Y=u<k.top?y:s;if(n>h[g].left&&h[g].top===Y)return h[g].score}return e.allowHalf?.5:1},c=n=>{S.value||n===e.modelValue||(f("update:modelValue",n),f("change",n))},I=n=>{B.value||(v.start(n),p())},P=n=>{if(!B.value&&(v.move(n),v.isHorizontal()&&!v.isTap.value)){const{clientX:u,clientY:g}=n.touches[0];de(n),c(_(u,g))}},x=(n,u)=>{const{icon:g,size:Y,color:L,count:D,gutter:Q,voidIcon:ee,disabled:Z,voidColor:A,allowHalf:j,iconPrefix:U,disabledColor:q}=e,a=u+1,r=n.status==="full",m=n.status==="void",C=j&&n.value>0&&n.value<1;let R;Q&&a!==+D&&(R={paddingRight:et(Q)});const z=i=>{p();let X=j?_(i.clientX,i.clientY):a;e.clearable&&v.isTap.value&&X===e.modelValue&&(X=0),c(X)};return l("div",{key:u,ref:b(u),role:"radio",style:R,class:re("item"),tabindex:Z?void 0:0,"aria-setsize":D,"aria-posinset":a,"aria-checked":!m,onClick:z},[l(ge,{size:Y,name:r?g:ee,class:re("icon",{disabled:Z,full:r}),color:Z?q:r?L:A,classPrefix:U},null),C&&l(ge,{size:Y,style:{width:n.value+"em"},name:m?ee:g,class:re("icon",["half",{disabled:Z,full:!m}]),color:Z?q:m?A:L,classPrefix:U},null)])};return Je(()=>e.modelValue),Be("touchmove",P,{target:d}),()=>l("div",{ref:d,role:"radiogroup",class:re({readonly:e.readonly,disabled:e.disabled}),tabindex:e.disabled?void 0:0,"aria-disabled":e.disabled,"aria-readonly":e.readonly,onTouchstartPassive:I},[w.value.map(x)])}});const zt=Ce(Bt),Ot=e=>e==null?void 0:e.includes("/"),Vt=[...at,"round","closeOnPopstate","safeAreaInsetBottom"],Mt={qq:"qq",link:"link-o",weibo:"weibo",qrcode:"qr",poster:"photo-o",wechat:"wechat","weapp-qrcode":"miniprogram-o","wechat-moments":"wechat-moments"},[Yt,E,Xt]=pe("share-sheet"),Et=Me({},nt,{title:String,round:N,options:Oe(),cancelText:String,description:String,closeOnPopstate:N,safeAreaInsetBottom:N});var Ht=J({name:Yt,props:Et,emits:["cancel","select","update:show"],setup(e,{emit:f,slots:v}){const t=s=>f("update:show",s),b=()=>{t(!1),f("cancel")},d=(s,p)=>f("select",s,p),S=()=>{const s=v.title?v.title():e.title,p=v.description?v.description():e.description;if(s||p)return l("div",{class:E("header")},[s&&l("h2",{class:E("title")},[s]),p&&l("span",{class:E("description")},[p])])},B=s=>Ot(s)?l("img",{src:s,class:E("image-icon")},null):l("div",{class:E("icon",[s])},[l(ge,{name:Mt[s]||s},null)]),w=(s,p)=>{const{name:_,icon:c,className:I,description:P}=s;return l("div",{role:"button",tabindex:0,class:[E("option"),I,Ve],onClick:()=>d(s,p)},[B(c),_&&l("span",{class:E("name")},[_]),P&&l("span",{class:E("option-description")},[P])])},h=(s,p)=>l("div",{class:E("options",{border:p})},[s.map(w)]),k=()=>{const{options:s}=e;return Array.isArray(s[0])?s.map((p,_)=>h(p,_!==0)):h(s)},y=()=>{var s;const p=(s=e.cancelText)!=null?s:Xt("cancel");if(v.cancel||p)return l("button",{type:"button",class:E("cancel"),onClick:b},[v.cancel?v.cancel():p])};return()=>l(_e,ke({class:E(),position:"bottom","onUpdate:show":t},ze(e,Vt)),{default:()=>[S(),k(),y()]})}});const Nt=Ce(Ht),Zt={"p-5":""},At=o("div",{text:"base center black/80","mb-8":"","font-semibold":""}," 服务说明 ",-1),Dt=o("div",{text:"sm black/80","mb-2":"","font-semibold":""}," 七天无理由退货 ",-1),jt=o("div",{text:"sm black/50","mb-5":""}," 满足相应条件（未使用）时，消费者可申请7天无理由退货。 ",-1),Ut=o("div",{text:"sm black/80","mb-2":"","font-semibold":""}," 晚发即赔 ",-1),qt=o("div",{text:"sm black/50","mb-20":""}," 若发货超时或物流异常，将为你补贴至少3元无门槛优惠券（特殊商品、大促活动及不可抗力因素除外）。 ",-1),Lt=J({name:"ServicePop",__name:"index",props:{visible:{type:Boolean,default:!1},visibleModifiers:{}},emits:["update:visible"],setup(e){const f=we(e,"visible");return(v,t)=>{const b=_e;return T(),he(b,{show:f.value,"onUpdate:show":t[1]||(t[1]=d=>f.value=d),position:"bottom",round:"",closeable:""},{default:O(()=>[o("div",Zt,[At,Dt,jt,Ut,qt,o("div",{text:"white sm center","h-40px":"","rounded-full":"","bg-red":"","leading-40px":"",onClick:t[0]||(t[0]=d=>f.value=!1)}," 确认 ")])]),_:1},8,["show"])}}}),Wt={"mb-200px":"","p-3":"","space-y-5":""},Ft={flex:"","gap-x-2":""},Gt={"h-55px":"","w-55px":"","object-cover":"",alt:""},Kt={flex:"~ col","justify-between":""},Jt={"text-red":""},Qt=o("span",null,"￥",-1),eo={text:"2xl "},to={"space-x-2":""},oo=o("div",{"mb-2":"",text:"sm black/80","font-semibold":""}," 颜色（3） ",-1),ao={flex:"","items-center":"","gap-x-3":""},no=["onClick"],so=o("div",{"mb-2":"",text:"sm black/80","font-semibold":""}," 容量（3） ",-1),lo={flex:"","items-center":"","gap-x-3":""},io=["onClick"],co={flex:"","items-center":"","justify-between":""},ro=o("div",{"space-x-3":""},[o("span",{text:"sm"},"购买数量"),o("span",{text:"xs black/50"},"库存10件")],-1),uo=J({name:"SkuPop",__name:"index",props:Ie({productInfo:{default:()=>({})}},{visible:{type:Boolean,default:!1},visibleModifiers:{},modelValue:{},modelModifiers:{}}),emits:Ie(["addToCart","buy"],["update:visible","update:modelValue"]),setup(e,{emit:f}){const v=e,t=f,b=we(e,"visible"),d=we(e,"modelValue");function S(){t("addToCart")}function B(){t("buy")}return(w,h)=>{const k=Ee,y=ct,s=_e,p=Ye("lazy");return T(),he(s,{show:b.value,"onUpdate:show":h[1]||(h[1]=_=>b.value=_),position:"bottom",closeable:"",round:""},{default:O(()=>{var _,c,I,P;return[o("div",null,[o("div",Wt,[o("div",Ft,[le(o("img",Gt,null,512),[[p,(_=v.productInfo)==null?void 0:_.images[0]]]),o("div",Kt,[o("div",Jt,[Qt,o("span",eo,H((c=v.productInfo)==null?void 0:c.price),1)]),o("div",to,[l(k,{type:"danger",plain:""},{default:O(()=>[ie(" 返8400积分 ")]),_:1}),l(k,{type:"danger",plain:""},{default:O(()=>[ie(" 包邮 ")]),_:1})])])]),o("div",null,[oo,o("div",ao,[(T(!0),V(G,null,oe((I=v.productInfo)==null?void 0:I.colors,x=>(T(),V("div",{key:x.value,p:"x3 y-1","rounded-full":"","bg-gray-100":"",text:"xs black/80",class:ye({"bg-red !text-white":d.value.color===x.value}),onClick:n=>d.value.color=x.value},H(x.label),11,no))),128))])]),o("div",null,[so,o("div",lo,[(T(!0),V(G,null,oe((P=v.productInfo)==null?void 0:P.capacitys,x=>(T(),V("div",{key:x,p:"x3 y-1","rounded-full":"","bg-gray-100":"",text:"xs black/60",class:ye({"bg-red !text-white":d.value.capacity===x}),onClick:n=>d.value.capacity=x},H(`${x} G`),11,io))),128))])]),o("div",co,[ro,l(y,{modelValue:d.value.num,"onUpdate:modelValue":h[0]||(h[0]=x=>d.value.num=x)},null,8,["modelValue"])])]),o("div",{flex:"",p:"b-4 x-4"},[o("div",{flex:"~ 1","h-40px":"","items-center":"","justify-center":"","bg-orange":"",text:"sm white",rounded:"lt-full lb-full",onClick:S}," 加入购物车 "),o("div",{"h-40px":"",flex:"~ 1","items-center":"","justify-center":"","bg-red":"",text:"sm white",rounded:"rt-full rb-full",onClick:B}," 立即购买 ")])])]}),_:1},8,["show"])}}}),mo={"w-full":"","object-cover":"",alt:""},vo={"p-2":"","space-y-3":""},fo={"overflow-hidden":"","rounded-lg":"","bg-white":"","p-3":""},go={"mb-3":"","text-red":""},ho=o("span",{"text-base":""},"￥",-1),po={"text-xl":""},_o={text:"sm black/80","mb-4":"","font-semibold":""},bo={flex:"","items-center":"","justify-between":""},xo={p:"x-3 y-2",flex:"","items-center":"","gap-x-2":"",rounded:"","bg-gray-100":"",text:"black/80"},wo=o("div",{"i-solar-dollar-linear":""},null,-1),yo={"text-xs":""},ko={"text-red":""},Co={flex:"","items-center":"","gap-x-3":""},So={text:"sm black/70"},Io={"h-30px":"","w-30px":"",flex:"","items-center":"","justify-center":"","rounded-full":"","bg-gray-100":""},Po={"overflow-hidden":"","rounded-lg":"","bg-white":""},$o=o("div",{flex:"","items-center":"","gap-x-5":""},[o("div",{"text-gray-400":""}," 已选 "),o("div",null,"银色 & 128G")],-1),To=o("div",{flex:"","items-center":"","gap-x-5":""},[o("div",{"text-gray-400":""}," 优惠 "),o("div",null,"领取优惠券")],-1),Ro=o("div",{flex:"","items-center":"","gap-x-5":""},[o("div",{"text-gray-400":""}," 服务 "),o("div",{flex:"","items-center":""},[o("span",null,"七天无理由退货"),o("span",{"mx-2":"","inline-block":"","h-3px":"","w-3px":"","rounded-full":"",bg:"black/20"}),o("span",null,"晚发即赔")])],-1),Bo={"rounded-lg":"","bg-white":""},zo=o("div",{flex:"","items-center":"","justify-between":"",p:"x-3 t-3"},[o("div",{text:"sm black/80","font-semibold":""}," 用户评价 (9) "),o("div",{flex:"","items-center":"","gap-x-2":"",text:"sm black/50"},[o("span",null,"查看全部"),o("div",{"i-solar-alt-arrow-right-line-duotone":""})])],-1),Oo={"px-3":""},Vo={flex:"","items-center":"","justify-between":""},Mo={flex:"","gap-x-2":""},Yo={"h-40px":"","w-40px":"","rounded-full":"","object-cover":"",alt:""},Xo={flex:"~ col","justify-center":"","gap-y-1":""},Eo={text:"sm black/80"},Ho={text:"sm black/50"},No={text:"sm black/80"},Zo={key:0,"space-x-2":""},Ao=["onClick"],Do={key:1,text:"xs black/50"},jo={"rounded-lg":"","bg-white":"","p-2":""},Uo=["onClick"],qo=o("div",{flex:"~ 1","items-center":"","gap-x-5":""},[o("div",{flex:"~ col","items-center":"",text:"black/60"},[o("div",{"i-solar-home-2-broken":"","mb-1":"","text-lg":""}),o("div",{"text-xs":""}," 首页 ")]),o("div",{flex:"~ col","items-center":"",text:"black/60"},[o("div",{"i-solar-star-line-duotone":"","mb-1":"","text-lg":""}),o("div",{"text-xs":""}," 收藏 ")])],-1),Lo={flex:""},ga=J({name:"ProductDetail",__name:"detail",setup(e){const f=tt(),v=ot(),t=M({});async function b(){var c;const _=ht({message:"加载中...",duration:0,forbidClick:!0});try{const{code:I,data:P}=await vt({id:(c=v.params)==null?void 0:c.id});I===200&&(t.value=P)}finally{_.close()}}b();function d(_,c){Pt({images:_,startPosition:c})}const S=M(!1),B=[{name:"微信",icon:"wechat"},{name:"微博",icon:"weibo"},{name:"复制链接",icon:"link"},{name:"分享海报",icon:"poster"},{name:"二维码",icon:"qrcode"}],w=M(!1),h=M({num:1,color:"silvery",capacity:256}),k=M(!1),y=M(!1);function s(){pt({message:"加入成功!"}),w.value=!1}function p(){var _;f.push({name:"OrderCreate",params:{id:(_=v.params)==null?void 0:_.id}})}return(_,c)=>{var j,U,q,a,r,m,C,R,z;const I=Ne,P=Ze,x=mt,n=Ee,u=ut,g=zt,Y=it,L=dt,D=Nt,Q=uo,ee=lt,Z=Lt,A=Ye("lazy");return T(),V(G,null,[l(P,{class:"my-swipe",autoplay:3e3,"indicator-color":"#000"},{default:O(()=>[(T(!0),V(G,null,oe($(t).images,(i,X)=>(T(),he(I,{key:X},{default:O(()=>[le(o("img",mo,null,512),[[A,i]])]),_:2},1024))),128))]),_:1}),o("div",vo,[o("div",fo,[o("div",go,[ho,o("span",po,H((j=$(t))!=null&&j.price?Number((U=$(t))==null?void 0:U.price).toLocaleString():""),1)]),o("div",_o,H((q=$(t))==null?void 0:q.name),1),o("div",bo,[o("div",xo,[wo,o("div",yo,[ie(" 购买可得 "),o("span",ko,H((a=$(t))==null?void 0:a.integral),1),ie(" 积分 ")])]),o("div",Co,[o("div",So," 销量："+H((r=$(t))==null?void 0:r.salesVolume),1),o("div",Io,[o("div",{"i-solar-square-share-line-broken":"",text:"black/70 sm",onClick:c[0]||(c[0]=i=>S.value=!0)})])])])]),o("div",Po,[l(u,null,{default:O(()=>[l(x,{"is-link":"",onClick:c[1]||(c[1]=i=>w.value=!0)},{title:O(()=>[$o]),_:1}),l(x,{"is-link":"",onClick:c[2]||(c[2]=i=>k.value=!0)},{title:O(()=>[To]),value:O(()=>[l(n,{round:"",color:"#f87171"},{default:O(()=>[ie(" 去领取 ")]),_:1})]),_:1}),l(x,{"is-link":"",onClick:c[3]||(c[3]=i=>y.value=!0)},{title:O(()=>[Ro]),_:1})]),_:1})]),o("div",Bo,[zo,o("div",Oo,[(m=$(t))!=null&&m.evaluates&&((C=$(t))!=null&&C.evaluates.length)?(T(!0),V(G,{key:0},oe(((R=$(t))==null?void 0:R.evaluates)??[],(i,X)=>{var be;return T(),V("div",{key:X,"py-3":"",border:"0 b solid gray-100","space-y-2":"",class:ye({"border-none":X===((be=$(t))==null?void 0:be.evaluates.length)-1})},[o("div",Vo,[o("div",Mo,[le(o("img",Yo,null,512),[[A,i.avatar]]),o("div",Xo,[o("div",Eo,H(i.nickname),1),l(g,{modelValue:i.rate,"onUpdate:modelValue":W=>i.rate=W,"allow-half":"",readonly:"",size:12},null,8,["modelValue","onUpdate:modelValue"])])]),o("div",Ho,H(i.time),1)]),o("div",No,H(i.comment),1),i.commentImages&&i.commentImages.length?(T(),V("div",Zo,[(T(!0),V(G,null,oe(i.commentImages,(W,De)=>le((T(),V("img",{key:W,"h-95px":"","w-95px":"","object-cover":"",onClick:Wo=>d(i.commentImages,De)},null,8,Ao)),[[A,W]])),128))])):Pe("",!0),i.tag?(T(),V("div",Do,H(i.tag),1)):Pe("",!0)],2)}),128)):(T(),he(Y,{key:1,image:"search",description:"暂无数据"}))])]),o("div",jo,[(T(!0),V(G,null,oe(((z=$(t))==null?void 0:z.descriptionImages)||[],(i,X)=>le((T(),V("img",{key:i,"w-full":"","object-cover":"",alt:"",onClick:be=>{var W;return d((W=$(t))==null?void 0:W.descriptionImages,X)}},null,8,Uo)),[[A,i]])),128))])]),l(L,{placeholder:""},{button:O(()=>[o("div",Lo,[o("div",{text:"sm white","h-40px":"","w-110px":"",flex:"","items-center":"","justify-center":"",rounded:"lt-full lb-full","bg-orange":"",onClick:c[4]||(c[4]=i=>w.value=!0)}," 加入购物车 "),o("div",{text:"sm white","h-40px":"","w-110px":"",flex:"","items-center":"","justify-center":"","bg-red":"",rounded:"rt-full rb-full",onClick:c[5]||(c[5]=i=>w.value=!0)}," 立即购买 ")])]),default:O(()=>[qo]),_:1}),l(D,{show:$(S),"onUpdate:show":c[6]||(c[6]=i=>ne(S)?S.value=i:null),title:"立即分享给好友",options:B},null,8,["show"]),l(Q,{modelValue:$(h),"onUpdate:modelValue":c[7]||(c[7]=i=>ne(h)?h.value=i:null),visible:$(w),"onUpdate:visible":c[8]||(c[8]=i=>ne(w)?w.value=i:null),"product-info":$(t),onAddToCart:s,onBuy:p},null,8,["modelValue","visible","product-info"]),l(ee,{visible:$(k),"onUpdate:visible":c[9]||(c[9]=i=>ne(k)?k.value=i:null)},null,8,["visible"]),l(Z,{visible:$(y),"onUpdate:visible":c[10]||(c[10]=i=>ne(y)?y.value=i:null)},null,8,["visible"])],64)}}});export{ga as default};
