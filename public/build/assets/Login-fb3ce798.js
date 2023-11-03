import{T as w,o as l,c as n,w as o,b as e,u as s,n as u,l as V,j as $,t as y,e as d,d as x,Z as h}from"./app-e626a5d5.js";import{e as k,f as N}from"./mdi-f62b0ca1.js";import{_ as B,a as P,c as R,b as S}from"./FormValidationErrors-de8dc0cc.js";import{_ as f}from"./CardBox-7edbfdbc.js";import{_ as U}from"./FormCheckRadioGroup-cac4ebc6.js";import{_ as p}from"./FormField-2166c5f3.js";import{_ as c}from"./FormControl-01eb4caf.js";import{_ as q}from"./BaseDivider-ba700f10.js";import{_}from"./BaseButton-d0b00a94.js";import{_ as C}from"./BaseButtons-af64cb60.js";import{_ as L}from"./BaseLevel-12afe250.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./FormCheckRadio-1127a291.js";import"./main-39341a9e.js";const j=x("img",{src:"/logo.jpeg",alt:"",style:{height:"125px","margin-left":"auto","margin-right":"auto"}},null,-1),O={__name:"Login",props:{canResetPassword:Boolean,status:{type:String,default:null}},setup(m){const a=w({username:"",password:"",remember:[]}),b=()=>{a.transform(i=>({...i,remember:a.remember&&a.remember.length?"on":""})).post(route("login"),{onFinish:()=>a.reset("password")})};return(i,r)=>(l(),n(B,null,{default:o(()=>[e(s(h),{title:"Login"}),e(S,null,{default:o(({cardClass:g})=>[e(f,{class:u([g,"text-center"]),"is-form":"",onSubmit:V(b,["prevent"])},{default:o(()=>[e(f,null,{default:o(()=>[j]),_:1}),e(P),m.status?(l(),n(R,{key:0,color:"info"},{default:o(()=>[$(y(m.status),1)]),_:1})):d("",!0),e(p,{label:"Username","label-for":"username",help:"Nombre de usuario"},{default:o(()=>[e(c,{modelValue:s(a).username,"onUpdate:modelValue":r[0]||(r[0]=t=>s(a).username=t),icon:s(k),id:"username",autocomplete:"username",type:"username",required:""},null,8,["modelValue","icon"])]),_:1}),e(p,{label:"Password","label-for":"password",help:"Please enter your password"},{default:o(()=>[e(c,{modelValue:s(a).password,"onUpdate:modelValue":r[1]||(r[1]=t=>s(a).password=t),icon:s(N),type:"password",id:"password",autocomplete:"current-password",required:""},null,8,["modelValue","icon"])]),_:1}),e(U,{modelValue:s(a).remember,"onUpdate:modelValue":r[2]||(r[2]=t=>s(a).remember=t),name:"remember",options:{remember:"Remember"}},null,8,["modelValue"]),e(q),e(L,null,{default:o(()=>[e(C,null,{default:o(()=>[e(_,{type:"submit",color:"info",label:"Login",class:u({"opacity-25":s(a).processing}),disabled:s(a).processing},null,8,["class","disabled"]),m.canResetPassword?(l(),n(_,{key:0,"route-name":"password.request",color:"info",outline:"",label:"Remind"})):d("",!0)]),_:1})]),_:1})]),_:2},1032,["class","onSubmit"])]),_:1})]),_:1}))}};export{O as default};
