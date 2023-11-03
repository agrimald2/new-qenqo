import"./main-974464e4.js";import{a as $,c as B}from"./mdi-6108fd70.js";import{_ as N}from"./CardBoxModal-f606295c.js";import{_ as F}from"./BaseLevel-264dcdda.js";import{_ as w}from"./BaseButtons-f1706410.js";import{_ as f}from"./BaseButton-e8161602.js";import{_ as L}from"./PillTag-89f52d05.js";import{r as o,g as j,h as c,o as t,f as a,b as n,w as d,F as m,i as p,e as C,d as l,t as r,u as P,c as x}from"./app-127ad8d0.js";import"./CardBox-ec8fd3b2.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./OverlayLayer-2858f6d1.js";const H=l("p",null,"Are you sure you want to delete this student?",-1),I={key:0,class:"p-3 bg-gray-100/50 dark:bg-slate-800"},M={key:0},S=l("th",null,null,-1),z=l("th",null,"Fecha",-1),O=l("th",null,"Hora",-1),R=l("th",null,"Estado",-1),T=l("th",null,"Acciones",-1),U=l("th",null,null,-1),q={class:"border-b-0 lg:w-6 before:hidden"},G={"data-label":"Name"},J={"data-label":"Celular"},K={"data-label":"DNI"},Q={class:"before:hidden lg:w-1 whitespace-nowrap"},W={class:"p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800"},ue={__name:"Table",props:{checkable:Boolean,appointments:Array},setup(b){const A=b;o(null);let _=o([]);j(()=>{_.value=A.appointments}),o(!1);const v=o(!1),h=o(5),u=o(0),g=o([]),D=c(()=>_.value.slice(h.value*u.value,h.value*(u.value+1))),k=c(()=>Math.ceil(_.value.length/h.value)),E=c(()=>u.value+1),V=c(()=>{const s=[];for(let i=0;i<k.value;i++)s.push(i);return s});return(s,i)=>(t(),a(m,null,[n(N,{modelValue:v.value,"onUpdate:modelValue":i[0]||(i[0]=e=>v.value=e),title:"Eliminar Alumno",button:"danger",buttonLabel:"Eliminar","has-cancel":"",onConfirm:s.deleteRate},{default:d(()=>[H]),_:1},8,["modelValue","onConfirm"]),g.value.length?(t(),a("div",I,[(t(!0),a(m,null,p(g.value,e=>(t(),a("span",{key:e.id,class:"inline-block px-2 py-1 rounded-sm mr-2 text-sm bg-gray-100 dark:bg-slate-700"},r(e.name),1))),128))])):C("",!0),l("table",null,[l("thead",null,[l("tr",null,[b.checkable?(t(),a("th",M)):C("",!0),S,z,O,R,T,U])]),l("tbody",null,[(t(!0),a(m,null,p(D.value,(e,y)=>(t(),a("tr",{key:e.id},[l("td",q," #"+r(y+1),1),l("td",G,r(e.date),1),l("td",J,r(e.start_time)+" - "+r(e.end_time),1),l("td",K,[n(L,{color:e.status==="Confirmado"?"warning":e.status==="Finalizado"?"success":"danger",label:e.status,small:s.pillsSmall,outline:s.pillsOutline,icon:s.pillsIcon},null,8,["color","label","small","outline","icon"])]),l("td",Q,[n(w,{type:"justify-start lg:justify-end","no-wrap":""},{default:d(()=>[n(f,{color:"info",icon:P($),small:"",href:"/students/showAppointment/"+e.id},null,8,["icon","href"]),n(f,{color:"warning",icon:P(B),small:"",href:"user/"+e.user_id},null,8,["icon","href"])]),_:2},1024)])]))),128))])]),l("div",W,[n(F,null,{default:d(()=>[n(w,null,{default:d(()=>[(t(!0),a(m,null,p(V.value,e=>(t(),x(f,{key:e,active:e===u.value,label:e+1,color:e===u.value?"lightDark":"whiteDark",small:"",onClick:y=>u.value=e},null,8,["active","label","color","onClick"]))),128))]),_:1}),l("small",null,"Page "+r(E.value)+" of "+r(k.value),1)]),_:1})])],64))}};export{ue as default};
