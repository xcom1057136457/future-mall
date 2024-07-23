import{l as J,d as K,r as L,$ as Q,L as re,N as ve,O as d,p as j,R as $,aw as fe,ax as de,b1 as he,J as q,aU as ge,aV as we,aS as me,aE as ye,Q as be,a as E,t as A,S as U,aa as D,W as F,V as G,b0 as I,y as xe,a7 as R,z as Z,a0 as Se}from"./index-DgD8RGzb.js";const[ee,M]=J("swipe"),Te={loop:A,width:U,height:U,vertical:Boolean,autoplay:D(0),duration:D(500),touchable:A,lazyRender:Boolean,initialSwipe:D(0),indicatorColor:String,showIndicators:A,stopPropagation:A},te=Symbol(ee);var pe=K({name:ee,props:Te,emits:["change","dragStart","dragEnd"],setup(a,{emit:b,slots:g}){const u=L(),h=L(),t=Q({rect:null,width:0,height:0,offset:0,active:0,swiping:!1});let x=!1;const r=re(),{children:w,linkChildren:s}=ve(te),i=d(()=>w.length),o=d(()=>t[a.vertical?"height":"width"]),v=d(()=>a.vertical?r.deltaY.value:r.deltaX.value),y=d(()=>t.rect?(a.vertical?t.rect.height:t.rect.width)-o.value*i.value:0),O=d(()=>o.value?Math.ceil(Math.abs(y.value)/o.value):i.value),k=d(()=>i.value*o.value),S=d(()=>(t.active+i.value)%i.value),B=d(()=>{const e=a.vertical?"vertical":"horizontal";return r.direction.value===e}),ae=d(()=>{const e={transitionDuration:`${t.swiping?0:a.duration}ms`,transform:`translate${a.vertical?"Y":"X"}(${+t.offset.toFixed(2)}px)`};if(o.value){const l=a.vertical?"height":"width",n=a.vertical?"width":"height";e[l]=`${k.value}px`,e[n]=a[n]?`${a[n]}px`:""}return e}),ie=e=>{const{active:l}=t;return e?a.loop?R(l+e,-1,i.value):R(l+e,0,O.value):l},Y=(e,l=0)=>{let n=e*o.value;a.loop||(n=Math.min(n,-y.value));let f=l-n;return a.loop||(f=R(f,y.value,0)),f},m=({pace:e=0,offset:l=0,emitChange:n})=>{if(i.value<=1)return;const{active:f}=t,c=ie(e),C=Y(c,l);if(a.loop){if(w[0]&&C!==y.value){const _=C<y.value;w[0].setOffset(_?k.value:0)}if(w[i.value-1]&&C!==0){const _=C>0;w[i.value-1].setOffset(_?-k.value:0)}}t.active=c,t.offset=C,n&&c!==f&&b("change",S.value)},z=()=>{t.swiping=!0,t.active<=-1?m({pace:i.value}):t.active>=i.value&&m({pace:-i.value})},ne=()=>{z(),r.reset(),I(()=>{t.swiping=!1,m({pace:-1,emitChange:!0})})},N=()=>{z(),r.reset(),I(()=>{t.swiping=!1,m({pace:1,emitChange:!0})})};let V;const p=()=>clearTimeout(V),P=()=>{p(),+a.autoplay>0&&i.value>1&&(V=setTimeout(()=>{N(),P()},+a.autoplay))},T=(e=+a.initialSwipe)=>{if(!u.value)return;const l=()=>{var n,f;if(!F(u)){const c={width:u.value.offsetWidth,height:u.value.offsetHeight};t.rect=c,t.width=+((n=a.width)!=null?n:c.width),t.height=+((f=a.height)!=null?f:c.height)}i.value&&(e=Math.min(i.value-1,e),e===-1&&(e=i.value-1)),t.active=e,t.swiping=!0,t.offset=Y(e),w.forEach(c=>{c.setOffset(0)}),P()};F(u)?G().then(l):l()},W=()=>T(t.active);let X;const le=e=>{!a.touchable||e.touches.length>1||(r.start(e),x=!1,X=Date.now(),p(),z())},oe=e=>{a.touchable&&t.swiping&&(r.move(e),B.value&&(!a.loop&&(t.active===0&&v.value>0||t.active===i.value-1&&v.value<0)||(xe(e,a.stopPropagation),m({offset:v.value}),x||(b("dragStart",{index:S.value}),x=!0))))},H=()=>{if(!a.touchable||!t.swiping)return;const e=Date.now()-X,l=v.value/e;if((Math.abs(l)>.25||Math.abs(v.value)>o.value/2)&&B.value){const f=a.vertical?r.offsetY.value:r.offsetX.value;let c=0;a.loop?c=f>0?v.value>0?-1:1:0:c=-Math[v.value>0?"ceil":"floor"](v.value/o.value),m({pace:c,emitChange:!0})}else v.value&&m({pace:0});x=!1,t.swiping=!1,b("dragEnd",{index:S.value}),P()},se=(e,l={})=>{z(),r.reset(),I(()=>{let n;a.loop&&e===i.value?n=t.active===0?0:e:n=e%i.value,l.immediate?I(()=>{t.swiping=!1}):t.swiping=!1,m({pace:n-t.active,emitChange:!0})})},ce=(e,l)=>{const n=l===S.value,f=n?{backgroundColor:a.indicatorColor}:void 0;return E("i",{style:f,class:M("indicator",{active:n})},null)},ue=()=>{if(g.indicator)return g.indicator({active:S.value,total:i.value});if(a.showIndicators&&i.value>1)return E("div",{class:M("indicators",{vertical:a.vertical})},[Array(i.value).fill("").map(ce)])};return j({prev:ne,next:N,state:t,resize:W,swipeTo:se}),s({size:o,props:a,count:i,activeIndicator:S}),$(()=>a.initialSwipe,e=>T(+e)),$(i,()=>T(t.active)),$(()=>a.autoplay,P),$([fe,de,()=>a.width,()=>a.height],W),$(he(),e=>{e==="visible"?P():p()}),q(T),ge(()=>T(t.active)),we(()=>T(t.active)),me(p),ye(p),be("touchmove",oe,{target:h}),()=>{var e;return E("div",{ref:u,class:M()},[E("div",{ref:h,style:ae.value,class:M("track",{vertical:a.vertical}),onTouchstartPassive:le,onTouchend:H,onTouchcancel:H},[(e=g.default)==null?void 0:e.call(g)]),ue()])}}});const ze=Z(pe),[Pe,Ce]=J("swipe-item");var $e=K({name:Pe,setup(a,{slots:b}){let g;const u=Q({offset:0,inited:!1,mounted:!1}),{parent:h,index:t}=Se(te);if(!h)return;const x=d(()=>{const s={},{vertical:i}=h.props;return h.size.value&&(s[i?"height":"width"]=`${h.size.value}px`),u.offset&&(s.transform=`translate${i?"Y":"X"}(${u.offset}px)`),s}),r=d(()=>{const{loop:s,lazyRender:i}=h.props;if(!i||g)return!0;if(!u.mounted)return!1;const o=h.activeIndicator.value,v=h.count.value-1,y=o===0&&s?v:o-1,O=o===v&&s?0:o+1;return g=t.value===o||t.value===y||t.value===O,g}),w=s=>{u.offset=s};return q(()=>{G(()=>{u.mounted=!0})}),j({setOffset:w}),()=>{var s;return E("div",{class:Ce(),style:x.value},[r.value?(s=b.default)==null?void 0:s.call(b):null])}}});const Ae=Z($e);export{ze as S,Ae as a};