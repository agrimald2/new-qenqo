import{r as n,o as f,c as u,w as m,b as e,u as r,E as _,a as d}from"./app-8407c33d.js";import{_ as p}from"./CardBox-639f5196.js";import{_ as y}from"./BaseButton-621d7276.js";import{m as t}from"./mdi-4cce4133.js";import{_ as b}from"./FormField-c50aa728.js";import{_ as C}from"./FormControl-21eaae75.js";import"./main-f4bc4e72.js";const $={__name:"Create",emits:["family-created"],setup(g,{emit:s}){let a=n("");const c=async()=>{try{await d.post("/api/family",{name:a.value}),a.value="",s("family-created")}catch(l){console.error(l)}};return(l,o)=>(f(),u(p,{title:"Crear Familia",hasCancel:!0,class:"bg-gray-500 slide-in-top my-2"},{default:m(()=>[e(b,{label:"Nombre de la Familia"},{default:m(()=>[e(C,{icon:r(t),placeholder:"Nombre",modelValue:r(a),"onUpdate:modelValue":o[0]||(o[0]=i=>_(a)?a.value=i:a=i)},null,8,["icon","modelValue"])]),_:1}),e(y,{icon:r(t),label:"Guardar",class:"bg-gray-300",target:"_blank","rounded-full":"",onClick:c},null,8,["icon"])]),_:1}))}};export{$ as default};