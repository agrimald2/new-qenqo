import"./main-d5a75c4a.js";import{c as x}from"./mdi-7f5f296a.js";import{_ as V}from"./CardBoxModal-2d3dcbc8.js";import{_ as $}from"./BaseLevel-39bb96ac.js";import{_ as k}from"./BaseButtons-ae752e25.js";import{_ as w}from"./BaseButton-6ed89792.js";import{_ as A}from"./UserAvatar-925a527e.js";import{r as s,g as B,h as d,o as l,f as a,b as u,w as i,F as _,i as f,e as p,d as e,t as n,u as E,c as L}from"./app-2f728894.js";import"./CardBox-325a539e.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./OverlayLayer-1bc04f10.js";const R=e("p",null,"Are you sure you want to delete this student?",-1),j={key:0,class:"p-3 bg-gray-100/50 dark:bg-slate-800"},F={key:0},I=e("th",null,null,-1),M=e("th",null,"Nombre",-1),H=e("th",null,"Celular",-1),S=e("th",null,"DNI",-1),T=e("th",null,"Referido",-1),U=e("th",null,"Acciones",-1),q=e("th",null,null,-1),z={class:"border-b-0 lg:w-6 before:hidden"},G={"data-label":"Name"},J={"data-label":"Celular"},K={"data-label":"DNI"},O={"data-label":"Referido",class:"lg:w-1 whitespace-nowrap"},Q={key:0},W={class:"before:hidden lg:w-1 whitespace-nowrap"},X={class:"p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800"},de={__name:"Table",props:{checkable:Boolean,students:Array},setup(b){const C=b;s(null);let m=s([]);B(()=>{m.value=C.students}),s(!1);const g=s(!1),h=s(5),o=s(0),v=s([]),D=d(()=>m.value.slice(h.value*o.value,h.value*(o.value+1))),y=d(()=>Math.ceil(m.value.length/h.value)),N=d(()=>o.value+1),P=d(()=>{const c=[];for(let r=0;r<y.value;r++)c.push(r);return c});return(c,r)=>(l(),a(_,null,[u(V,{modelValue:g.value,"onUpdate:modelValue":r[0]||(r[0]=t=>g.value=t),title:"Eliminar Alumno",button:"danger",buttonLabel:"Eliminar","has-cancel":"",onConfirm:c.deleteRate},{default:i(()=>[R]),_:1},8,["modelValue","onConfirm"]),v.value.length?(l(),a("div",j,[(l(!0),a(_,null,f(v.value,t=>(l(),a("span",{key:t.id,class:"inline-block px-2 py-1 rounded-sm mr-2 text-sm bg-gray-100 dark:bg-slate-700"},n(t.name),1))),128))])):p("",!0),e("table",null,[e("thead",null,[e("tr",null,[b.checkable?(l(),a("th",F)):p("",!0),I,M,H,S,T,U,q])]),e("tbody",null,[(l(!0),a(_,null,f(D.value,t=>(l(),a("tr",{key:t.id},[e("td",z,[u(A,{username:t.name,class:"w-24 h-24 mx-auto lg:w-6 lg:h-6"},null,8,["username"])]),e("td",G,n(t.user.name),1),e("td",J,n(t.user.phone),1),e("td",K,n(t.user.dni),1),e("td",O,[t.referred_by?(l(),a("span",Q,n(t.referred_by.name),1)):p("",!0)]),e("td",W,[u(k,{type:"justify-start lg:justify-end","no-wrap":""},{default:i(()=>[u(w,{color:"warning",icon:E(x),small:"",href:"user/"+t.user_id},null,8,["icon","href"])]),_:2},1024)])]))),128))])]),e("div",X,[u($,null,{default:i(()=>[u(k,null,{default:i(()=>[(l(!0),a(_,null,f(P.value,t=>(l(),L(w,{key:t,active:t===o.value,label:t+1,color:t===o.value?"lightDark":"whiteDark",small:"",onClick:Y=>o.value=t},null,8,["active","label","color","onClick"]))),128))]),_:1}),e("small",null,"Page "+n(N.value)+" of "+n(y.value),1)]),_:1})])],64))}};export{de as default};