import"./main-4957fc0e.js";import{a as $,c as B}from"./mdi-66a87996.js";import{_ as N}from"./CardBoxModal-13b1714e.js";import{_ as F}from"./BaseLevel-c3fa91a4.js";import{_ as w}from"./BaseButtons-91e2cdd3.js";import{_ as p}from"./BaseButton-9a3f1db7.js";import{_ as L}from"./PillTag-f1f08ee3.js";import{r as s,g as j,h as c,o as t,f as a,b as n,w as d,F as m,i as f,e as C,d as l,t as r,u as P,c as x}from"./app-9f2eb8dd.js";import"./CardBox-e1e2cea0.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./OverlayLayer-1e6f50da.js";import"./colors-ea023820.js";import"./BaseIcon-9a2ca4ad.js";const H=l("p",null,"Are you sure you want to delete this student?",-1),I={key:0,class:"p-3 bg-gray-100/50 dark:bg-slate-800"},M={key:0},S=l("th",null,null,-1),z=l("th",null,"Fecha",-1),O=l("th",null,"Hora",-1),R=l("th",null,"Estado",-1),T=l("th",null,"Acciones",-1),U=l("th",null,null,-1),q={class:"border-b-0 lg:w-6 before:hidden"},G={"data-label":"Name"},J={"data-label":"Celular"},K={"data-label":"DNI"},Q={class:"before:hidden lg:w-1 whitespace-nowrap"},W={class:"p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800"},ce={__name:"Table",props:{checkable:Boolean,appointments:Array},setup(b){const A=b;s(null);let _=s([]);j(()=>{_.value=A.appointments}),s(!1);const v=s(!1),h=s(5),i=s(0),g=s([]),D=c(()=>_.value.slice(h.value*i.value,h.value*(i.value+1))),k=c(()=>Math.ceil(_.value.length/h.value)),E=c(()=>i.value+1),V=c(()=>{const o=[];for(let u=0;u<k.value;u++)o.push(u);return o});return(o,u)=>(t(),a(m,null,[n(N,{modelValue:v.value,"onUpdate:modelValue":u[0]||(u[0]=e=>v.value=e),title:"Eliminar Alumno",button:"danger",buttonLabel:"Eliminar","has-cancel":"",onConfirm:o.deleteRate},{default:d(()=>[H]),_:1},8,["modelValue","onConfirm"]),g.value.length?(t(),a("div",I,[(t(!0),a(m,null,f(g.value,e=>(t(),a("span",{key:e.id,class:"inline-block px-2 py-1 rounded-sm mr-2 text-sm bg-gray-100 dark:bg-slate-700"},r(e.name),1))),128))])):C("",!0),l("table",null,[l("thead",null,[l("tr",null,[b.checkable?(t(),a("th",M)):C("",!0),S,z,O,R,T,U])]),l("tbody",null,[(t(!0),a(m,null,f(D.value,(e,y)=>(t(),a("tr",{key:e.id},[l("td",q," #"+r(y+1),1),l("td",G,r(e.date),1),l("td",J,r(e.start_time)+" - "+r(e.end_time),1),l("td",K,[n(L,{color:e.status==="Confirmado"?"warning":e.status==="Finalizado"?"success":"danger",label:e.status,small:o.pillsSmall,outline:o.pillsOutline,icon:o.pillsIcon},null,8,["color","label","small","outline","icon"])]),l("td",Q,[n(w,{type:"justify-start lg:justify-end","no-wrap":""},{default:d(()=>[n(p,{color:"info",icon:P($),small:"",href:"/activePlanAppointments/"+e.id},null,8,["icon","href"]),n(p,{color:"warning",icon:P(B),small:"",href:"user/"+e.user_id},null,8,["icon","href"])]),_:2},1024)])]))),128))])]),l("div",W,[n(F,null,{default:d(()=>[n(w,null,{default:d(()=>[(t(!0),a(m,null,f(V.value,e=>(t(),x(p,{key:e,active:e===i.value,label:e+1,color:e===i.value?"lightDark":"whiteDark",small:"",onClick:y=>i.value=e},null,8,["active","label","color","onClick"]))),128))]),_:1}),l("small",null,"Page "+r(E.value)+" of "+r(k.value),1)]),_:1})])],64))}};export{ce as default};