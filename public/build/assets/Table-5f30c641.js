import"./main-974464e4.js";import{c as x}from"./mdi-6108fd70.js";import{_ as A}from"./CardBoxModal-f606295c.js";import{_ as B}from"./BaseLevel-264dcdda.js";import{_ as y}from"./BaseButtons-f1706410.js";import{_ as k}from"./BaseButton-e8161602.js";import{r as s,g as N,h as c,o as l,f as a,b as r,w as d,F as m,i as p,e as w,d as t,t as u,u as $,c as E}from"./app-127ad8d0.js";import"./CardBox-ec8fd3b2.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./OverlayLayer-2858f6d1.js";const L=t("p",null,"Are you sure you want to delete this student?",-1),M={key:0,class:"p-3 bg-gray-100/50 dark:bg-slate-800"},j={key:0},F=t("th",null,"Nombre",-1),H=t("th",null,"Descripción",-1),R=t("th",null,"Acciones",-1),S=t("th",null,null,-1),T={"data-label":"Name"},U={"data-label":"Celular"},q={class:"before:hidden lg:w-1 whitespace-nowrap"},z={class:"p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800"},te={__name:"Table",props:{checkable:Boolean,paymentMethods:Array},setup(f){const C=f;s(null);let _=s([]);N(()=>{_.value=C.paymentMethods}),s(!1);const v=s(!1),h=s(5),n=s(0),b=s([]),P=c(()=>_.value.slice(h.value*n.value,h.value*(n.value+1))),g=c(()=>Math.ceil(_.value.length/h.value)),D=c(()=>n.value+1),V=c(()=>{const i=[];for(let o=0;o<g.value;o++)i.push(o);return i});return(i,o)=>(l(),a(m,null,[r(A,{modelValue:v.value,"onUpdate:modelValue":o[0]||(o[0]=e=>v.value=e),title:"Eliminar Alumno",button:"danger",buttonLabel:"Eliminar","has-cancel":"",onConfirm:i.deleteRate},{default:d(()=>[L]),_:1},8,["modelValue","onConfirm"]),b.value.length?(l(),a("div",M,[(l(!0),a(m,null,p(b.value,e=>(l(),a("span",{key:e.id,class:"inline-block px-2 py-1 rounded-sm mr-2 text-sm bg-gray-100 dark:bg-slate-700"},u(e.name),1))),128))])):w("",!0),t("table",null,[t("thead",null,[t("tr",null,[f.checkable?(l(),a("th",j)):w("",!0),F,H,R,S])]),t("tbody",null,[(l(!0),a(m,null,p(P.value,e=>(l(),a("tr",{key:e.id},[t("td",T,u(e.name),1),t("td",U,u(e.description),1),t("td",q,[r(y,{type:"justify-start lg:justify-end","no-wrap":""},{default:d(()=>[r(k,{color:"warning",icon:$(x),small:"",href:"user/"+e.user_id},null,8,["icon","href"])]),_:2},1024)])]))),128))])]),t("div",z,[r(B,null,{default:d(()=>[r(y,null,{default:d(()=>[(l(!0),a(m,null,p(V.value,e=>(l(),E(k,{key:e,active:e===n.value,label:e+1,color:e===n.value?"lightDark":"whiteDark",small:"",onClick:G=>n.value=e},null,8,["active","label","color","onClick"]))),128))]),_:1}),t("small",null,"Page "+u(D.value)+" of "+u(g.value),1)]),_:1})])],64))}};export{te as default};
