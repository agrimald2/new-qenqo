import{T as w,o as l,c as n,w as o,b as e,u as s,Z as V,n as u,l as $,j as y,t as x,e as d,d as h}from"./app-9f2eb8dd.js";import{e as k,f as N}from"./mdi-66a87996.js";import{_ as B,a as P,c as R,b as S}from"./FormValidationErrors-96289c62.js";import{_ as f}from"./CardBox-e1e2cea0.js";import{_ as U}from"./FormCheckRadioGroup-06b6daec.js";import{_ as p}from"./FormField-f1ea0fce.js";import{_ as c}from"./FormControl-587b9277.js";import{_ as q}from"./BaseDivider-b91b2461.js";import{_}from"./BaseButton-9a3f1db7.js";import{_ as C}from"./BaseButtons-91e2cdd3.js";import{_ as L}from"./BaseLevel-c3fa91a4.js";import"./colors-ea023820.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./FormCheckRadio-e761de74.js";import"./main-4957fc0e.js";import"./BaseIcon-9a2ca4ad.js";const j=h("img",{src:"/logo.jpeg",alt:"",style:{height:"125px","margin-left":"auto","margin-right":"auto"}},null,-1),W={__name:"Login",props:{canResetPassword:Boolean,status:{type:String,default:null}},setup(m){const a=w({username:"",password:"",remember:[]}),b=()=>{a.transform(i=>({...i,remember:a.remember&&a.remember.length?"on":""})).post(route("login"),{onFinish:()=>a.reset("password")})};return(i,r)=>(l(),n(B,null,{default:o(()=>[e(s(V),{title:"Login"}),e(S,null,{default:o(({cardClass:g})=>[e(f,{class:u([g,"text-center"]),"is-form":"",onSubmit:$(b,["prevent"])},{default:o(()=>[e(f,null,{default:o(()=>[j]),_:1}),e(P),m.status?(l(),n(R,{key:0,color:"info"},{default:o(()=>[y(x(m.status),1)]),_:1})):d("",!0),e(p,{label:"Username","label-for":"username",help:"Nombre de usuario"},{default:o(()=>[e(c,{modelValue:s(a).username,"onUpdate:modelValue":r[0]||(r[0]=t=>s(a).username=t),icon:s(k),id:"username",autocomplete:"username",type:"username",required:""},null,8,["modelValue","icon"])]),_:1}),e(p,{label:"Password","label-for":"password",help:"Please enter your password"},{default:o(()=>[e(c,{modelValue:s(a).password,"onUpdate:modelValue":r[1]||(r[1]=t=>s(a).password=t),icon:s(N),type:"password",id:"password",autocomplete:"current-password",required:""},null,8,["modelValue","icon"])]),_:1}),e(U,{modelValue:s(a).remember,"onUpdate:modelValue":r[2]||(r[2]=t=>s(a).remember=t),name:"remember",options:{remember:"Remember"}},null,8,["modelValue"]),e(q),e(L,null,{default:o(()=>[e(C,null,{default:o(()=>[e(_,{type:"submit",color:"info",label:"Login",class:u({"opacity-25":s(a).processing}),disabled:s(a).processing},null,8,["class","disabled"]),m.canResetPassword?(l(),n(_,{key:0,"route-name":"password.request",color:"info",outline:"",label:"Remind"})):d("",!0)]),_:1})]),_:1})]),_:2},1032,["class","onSubmit"])]),_:1})]),_:1}))}};export{W as default};