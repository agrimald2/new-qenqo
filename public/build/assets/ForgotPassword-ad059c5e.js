import{T as p,o as i,c as r,w as e,b as a,u as o,Z as w,n as m,l as b,j as n,t as y,e as g,m as $,d as k}from"./app-9f2eb8dd.js";import{d as h}from"./mdi-66a87996.js";import{_ as V,a as x,c as N,b as B}from"./FormValidationErrors-96289c62.js";import{_ as P}from"./CardBox-e1e2cea0.js";import{_ as u}from"./FormField-f1ea0fce.js";import{_ as S}from"./FormControl-587b9277.js";import{_ as C}from"./BaseDivider-b91b2461.js";import{_ as E}from"./BaseButton-9a3f1db7.js";import{_ as F}from"./BaseLevel-c3fa91a4.js";import"./colors-ea023820.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./main-4957fc0e.js";import"./BaseIcon-9a2ca4ad.js";const v=k("div",{class:"mb-4 text-sm text-gray-600"}," Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one. ",-1),K={__name:"ForgotPassword",props:{status:{type:String,default:null}},setup(t){const s=p({email:""}),f=()=>{s.post(route("password.email"))};return(_,l)=>(i(),r(V,null,{default:e(()=>[a(o(w),{title:"Forgot Password"}),a(B,{bg:"purplePink"},{default:e(({cardClass:c})=>[a(P,{class:m(c),"is-form":"",onSubmit:b(f,["prevent"])},{default:e(()=>[a(x),t.status?(i(),r(N,{key:0,color:"info"},{default:e(()=>[n(y(t.status),1)]),_:1})):g("",!0),a(u,null,{default:e(()=>[v]),_:1}),a(u,{label:"Email",help:"Please enter your email"},{default:e(()=>[a(S,{modelValue:o(s).email,"onUpdate:modelValue":l[0]||(l[0]=d=>o(s).email=d),icon:o(h),autocomplete:"email",type:"email",required:""},null,8,["modelValue","icon"])]),_:1}),a(C),a(F,null,{default:e(()=>[a(E,{type:"submit",color:"info",label:"Email link",class:m({"opacity-25":o(s).processing}),disabled:o(s).processing},null,8,["class","disabled"]),a(o($),{href:_.route("login")},{default:e(()=>[n(" Back to login ")]),_:1},8,["href"])]),_:1})]),_:2},1032,["class","onSubmit"])]),_:1})]),_:1}))}};export{K as default};