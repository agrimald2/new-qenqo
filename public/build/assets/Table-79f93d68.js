import"./main-a396d137.js";import{b as B,X as A}from"./mdi-a7659b7a.js";import{_ as E}from"./CardBoxModal-4b8a3f40.js";import{_ as L}from"./BaseLevel-ebd99744.js";import{_ as C}from"./BaseButtons-208117c2.js";import{_ as p}from"./BaseButton-6f77bb6b.js";import{_ as T}from"./UserAvatar-207dfaf6.js";import{r as s,g as M,h as i,o as t,f as a,b as n,w as d,F as _,i as b,e as v,d as l,t as o,u as D,c as R}from"./app-1b5559ad.js";import"./CardBox-51675e1f.js";import"./OverlayLayer-467f60d4.js";const j=l("p",null,"Are you sure you want to delete this rate?",-1),F={key:0,class:"p-3 bg-gray-100/50 dark:bg-slate-800"},I={key:0},H=l("th",null,null,-1),S=l("th",null,"Nombre",-1),U=l("th",null,"Celular",-1),X=l("th",null,"DNI",-1),q=l("th",null,"Referido",-1),z=l("th",null,"Acciones",-1),G=l("th",null,null,-1),J={class:"border-b-0 lg:w-6 before:hidden"},K={"data-label":"Name"},O={"data-label":"Celular"},Q={"data-label":"DNI"},W={"data-label":"Referido",class:"lg:w-1 whitespace-nowrap"},Y={key:0},Z={class:"before:hidden lg:w-1 whitespace-nowrap"},ee={class:"p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800"},_e={__name:"Table",props:{checkable:Boolean,students:Array},setup(g){const N=g,P=s(null);let m=s([]);M(()=>{m.value=N.students}),s(!1);const h=s(!1),f=s(5),r=s(0),k=s([]),x=i(()=>m.value.slice(f.value*r.value,f.value*(r.value+1))),y=i(()=>Math.ceil(m.value.length/f.value)),V=i(()=>r.value+1),$=i(()=>{const u=[];for(let c=0;c<y.value;c++)u.push(c);return u}),w=u=>{P.value=u,h.value=!0};return(u,c)=>(t(),a(_,null,[n(E,{modelValue:h.value,"onUpdate:modelValue":c[0]||(c[0]=e=>h.value=e),title:"Eliminar Tarifa",button:"danger",buttonLabel:"Eliminar","has-cancel":"",onConfirm:u.deleteRate},{default:d(()=>[j]),_:1},8,["modelValue","onConfirm"]),k.value.length?(t(),a("div",F,[(t(!0),a(_,null,b(k.value,e=>(t(),a("span",{key:e.id,class:"inline-block px-2 py-1 rounded-sm mr-2 text-sm bg-gray-100 dark:bg-slate-700"},o(e.name),1))),128))])):v("",!0),l("table",null,[l("thead",null,[l("tr",null,[g.checkable?(t(),a("th",I)):v("",!0),H,S,U,X,q,z,G])]),l("tbody",null,[(t(!0),a(_,null,b(x.value,e=>(t(),a("tr",{key:e.id},[l("td",J,[n(T,{username:e.name,class:"w-24 h-24 mx-auto lg:w-6 lg:h-6"},null,8,["username"])]),l("td",K,o(e.user.name),1),l("td",O,o(e.user.phone),1),l("td",Q,o(e.user.dni),1),l("td",W,[e.referred_by?(t(),a("span",Y,o(e.referred_by.name),1)):v("",!0)]),l("td",Z,[n(C,{type:"justify-start lg:justify-end","no-wrap":""},{default:d(()=>[n(p,{color:"danger",icon:D(B),small:"",onClick:()=>w(e)},null,8,["icon","onClick"]),n(p,{color:"warning",icon:D(A),small:"",onClick:()=>w(e)},null,8,["icon","onClick"])]),_:2},1024)])]))),128))])]),l("div",ee,[n(L,null,{default:d(()=>[n(C,null,{default:d(()=>[(t(!0),a(_,null,b($.value,e=>(t(),R(p,{key:e,active:e===r.value,label:e+1,color:e===r.value?"lightDark":"whiteDark",small:"",onClick:le=>r.value=e},null,8,["active","label","color","onClick"]))),128))]),_:1}),l("small",null,"Page "+o(V.value)+" of "+o(y.value),1)]),_:1})])],64))}};export{_e as default};
