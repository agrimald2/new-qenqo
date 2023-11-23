import"./main-4957fc0e.js";import{a as O,c as V}from"./mdi-66a87996.js";import{_ as B}from"./CardBoxModal-13b1714e.js";import{_ as F}from"./BaseLevel-c3fa91a4.js";import{_ as D}from"./BaseButtons-91e2cdd3.js";import{_ as b}from"./BaseButton-9a3f1db7.js";import{_ as I}from"./PillTag-f1f08ee3.js";import{r as s,g as N,h as p,o as l,f as n,b as o,w as f,F as g,i as v,e as P,d as t,t as r,u as C,c as S}from"./app-9f2eb8dd.js";import"./CardBox-e1e2cea0.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./OverlayLayer-1e6f50da.js";import"./colors-ea023820.js";import"./BaseIcon-9a2ca4ad.js";const L=t("p",null,"Are you sure you want to delete this student?",-1),j={key:0,class:"p-3 bg-gray-100/50 dark:bg-slate-800"},M={key:0},W=t("th",null,null,-1),H=t("th",null,"Fecha",-1),T=t("th",null,"Hora",-1),x=t("th",null,"Estado",-1),z=t("th",null,"Acciones",-1),R=t("th",null,null,-1),U={class:"border-b-0 lg:w-6 before:hidden"},q={"data-label":"Name"},G={"data-label":"Celular"},J={"data-label":"DNI"},K={class:"before:hidden lg:w-1 whitespace-nowrap"},Q={class:"p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800"},X={data(){return{}},components:[],methods:{getDayOfWeekInSpanish(_){const d=_.split("-"),i=new Date(d[0],d[1]-1,d[2]),h=new Intl.DateTimeFormat("es-ES",{weekday:"long"}).format(i),m=i.getDate();return`${h} ${m}`}},mounted(){}},de=Object.assign(X,{__name:"AppointmentsTable",props:{checkable:Boolean,appointments:Array},setup(_){const d=_;s(null);let i=s([]);N(()=>{i.value=d.appointments}),s(!1);const h=s(!1),m=s(5),u=s(0),y=s([]),$=p(()=>i.value.slice(m.value*u.value,m.value*(u.value+1))),k=p(()=>Math.ceil(i.value.length/m.value)),A=p(()=>u.value+1),E=p(()=>{const a=[];for(let c=0;c<k.value;c++)a.push(c);return a});return(a,c)=>(l(),n(g,null,[o(B,{modelValue:h.value,"onUpdate:modelValue":c[0]||(c[0]=e=>h.value=e),title:"Eliminar Alumno",button:"danger",buttonLabel:"Eliminar","has-cancel":"",onConfirm:a.deleteRate},{default:f(()=>[L]),_:1},8,["modelValue","onConfirm"]),y.value.length?(l(),n("div",j,[(l(!0),n(g,null,v(y.value,e=>(l(),n("span",{key:e.id,class:"inline-block px-2 py-1 rounded-sm mr-2 text-sm bg-gray-100 dark:bg-slate-700"},r(e.name),1))),128))])):P("",!0),t("table",null,[t("thead",null,[t("tr",null,[_.checkable?(l(),n("th",M)):P("",!0),W,H,T,x,z,R])]),t("tbody",null,[(l(!0),n(g,null,v($.value,(e,w)=>(l(),n("tr",{key:e.id},[t("td",U," #"+r(w+1),1),t("td",q,r(a.getDayOfWeekInSpanish(e.date)),1),t("td",G,r(e.start_time.slice(0,-3))+" - "+r(e.end_time.slice(0,-3)),1),t("td",J,[o(I,{color:e.status==="Confirmado"?"warning":e.status==="Finalizado"?"success":"danger",label:e.status,small:a.pillsSmall,outline:a.pillsOutline,icon:a.pillsIcon},null,8,["color","label","small","outline","icon"])]),t("td",K,[o(D,{type:"justify-start lg:justify-end","no-wrap":""},{default:f(()=>[o(b,{color:"info",icon:C(O),small:"",href:"/activePlanAppointments/"+e.id},null,8,["icon","href"]),o(b,{color:"warning",icon:C(V),small:"",href:"user/"+e.user_id},null,8,["icon","href"])]),_:2},1024)])]))),128))])]),t("div",Q,[o(F,null,{default:f(()=>[o(D,null,{default:f(()=>[(l(!0),n(g,null,v(E.value,e=>(l(),S(b,{key:e,active:e===u.value,label:e+1,color:e===u.value?"lightDark":"whiteDark",small:"",onClick:w=>u.value=e},null,8,["active","label","color","onClick"]))),128))]),_:1}),t("small",null,"Page "+r(A.value)+" of "+r(k.value),1)]),_:1})])],64))}});export{de as default};
