import{m as n,ap as a,aq as r,ar as i,a as c,x as u}from"./index-D16CmENv.js";import{s as m}from"./index-5ixG06Wd.js";let l;const f={title:"",width:"",theme:null,message:"",overlay:!0,callback:null,teleport:"body",className:"",allowHtml:!1,lockScroll:!0,transition:void 0,beforeClose:null,overlayClass:"",overlayStyle:void 0,messageAlign:"",cancelButtonText:"",cancelButtonColor:null,cancelButtonDisabled:!1,confirmButtonText:"",confirmButtonColor:null,confirmButtonDisabled:!1,showConfirmButton:!0,showCancelButton:!1,closeOnPopstate:!0,closeOnClickOverlay:!1};let p=n({},f);function d(){({instance:l}=r({setup(){const{state:o,toggle:t}=i();return()=>c(m,u(o,{"onUpdate:show":t}),null)}}))}function w(e){return a?new Promise((o,t)=>{l||d(),l.open(n({},p,e,{callback:s=>{(s==="confirm"?o:t)(s)}}))}):Promise.resolve(void 0)}const g=e=>w(n({showCancelButton:!0},e));export{g as s};
