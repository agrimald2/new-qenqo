import{o as c,f as w,d as h,t as b,z as p,h as k,B as m,J as f,c as i,w as l,b as s,e as _,u as y,s as v}from"./app-2f728894.js";import{j as g}from"./mdi-7f5f296a.js";import{_ as r}from"./BaseButton-6ed89792.js";import{_ as x}from"./BaseButtons-ae752e25.js";import{_ as B}from"./CardBox-325a539e.js";import{_ as S}from"./OverlayLayer-1bc04f10.js";const $={class:"flex items-center justify-between mb-3"},V={class:"text-2xl"},D={__name:"CardBoxComponentTitle",props:{title:{type:String,required:!0}},setup(e){return(a,u)=>(c(),w("div",$,[h("h1",V,b(e.title),1),p(a.$slots,"default")]))}},N={class:"space-y-3"},O={__name:"CardBoxModal",props:{title:{type:String,required:!0},button:{type:String,default:"info"},buttonLabel:{type:String,default:"Done"},hasCancel:Boolean,modelValue:{type:[String,Number,Boolean],default:null}},emits:["update:modelValue","cancel","confirm"],setup(e,{emit:a}){const u=e,o=k({get:()=>u.modelValue,set:t=>a("update:modelValue",t)}),d=t=>{o.value=!1,a(t)},C=()=>d("confirm"),n=()=>d("cancel");return window.addEventListener("keydown",t=>{t.key==="Escape"&&o.value&&n()}),(t,E)=>m((c(),i(S,{onOverlayClick:n},{default:l(()=>[m(s(B,{class:"shadow-lg max-h-modal w-11/12 md:w-3/5 lg:w-2/5 xl:w-4/12 z-50","is-modal":""},{footer:l(()=>[s(x,null,{default:l(()=>[s(r,{label:e.buttonLabel,color:e.button,onClick:C},null,8,["label","color"]),e.hasCancel?(c(),i(r,{key:0,label:"Cancel",color:e.button,outline:"",onClick:n},null,8,["color"])):_("",!0)]),_:1})]),default:l(()=>[s(D,{title:e.title},{default:l(()=>[e.hasCancel?(c(),i(r,{key:0,icon:y(g),color:"whiteDark",small:"","rounded-full":"",onClick:v(n,["prevent"])},null,8,["icon","onClick"])):_("",!0)]),_:1},8,["title"]),h("div",N,[p(t.$slots,"default")])]),_:3},512),[[f,o.value]])]),_:3},512)),[[f,o.value]])}};export{O as _};