import{T as _,o as c,c as w,w as l,b as o,u as a,n,l as b,Z as V}from"./app-e626a5d5.js";import{d as P,i as d}from"./mdi-f62b0ca1.js";import{_ as y,a as $,b as k}from"./FormValidationErrors-de8dc0cc.js";import{_ as g}from"./CardBox-7edbfdbc.js";import{_ as i}from"./FormField-2166c5f3.js";import{_ as t}from"./FormControl-01eb4caf.js";import{_ as x}from"./BaseDivider-ba700f10.js";import{_ as S}from"./BaseButton-d0b00a94.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./main-39341a9e.js";const M={__name:"ResetPassword",props:{email:{type:String,default:null},token:{type:String,default:null}},setup(p){const m=p,e=_({token:m.token,email:m.email,password:"",password_confirmation:""}),u=()=>{e.post(route("password.update"),{onFinish:()=>e.reset("password","password_confirmation")})};return(q,s)=>(c(),w(y,null,{default:l(()=>[o(a(V),{title:"Reset Password"}),o(k,{bg:"purplePink"},{default:l(({cardClass:f})=>[o(g,{class:n(f),"is-form":"",onSubmit:b(u,["prevent"])},{default:l(()=>[o($),o(i,{label:"Email","label-for":"email",help:"Please enter your email"},{default:l(()=>[o(t,{modelValue:a(e).email,"onUpdate:modelValue":s[0]||(s[0]=r=>a(e).email=r),icon:a(P),autocomplete:"email",type:"email",id:"email",required:""},null,8,["modelValue","icon"])]),_:1}),o(i,{label:"Password","label-for":"password",help:"Please enter new password"},{default:l(()=>[o(t,{modelValue:a(e).password,"onUpdate:modelValue":s[1]||(s[1]=r=>a(e).password=r),icon:a(d),type:"password",autocomplete:"new-password",id:"password",required:""},null,8,["modelValue","icon"])]),_:1}),o(i,{label:"Confirm Password","label-for":"password_confirmation",help:"Please confirm new password"},{default:l(()=>[o(t,{modelValue:a(e).password_confirmation,"onUpdate:modelValue":s[2]||(s[2]=r=>a(e).password_confirmation=r),icon:a(d),type:"password",autocomplete:"new-password",id:"password_confirmation",required:""},null,8,["modelValue","icon"])]),_:1}),o(x),o(S,{type:"submit",color:"info",label:"Reset password",class:n({"opacity-25":a(e).processing}),disabled:a(e).processing},null,8,["class","disabled"])]),_:2},1032,["class","onSubmit"])]),_:1})]),_:1}))}};export{M as default};