import{r as i,o as v,c as b,w as _,b as o,u as l,E as p,a as C}from"./app-edd78ba7.js";import{_ as U}from"./CardBox-2860a474.js";import{_ as g}from"./BaseButton-1256beea.js";import{m as r}from"./mdi-4cce4133.js";import{_ as c}from"./FormControl-ec715484.js";import"./main-1fc9b87b.js";const D={__name:"Create",emits:["student-created"],setup(w,{emit:V}){let u=i(""),s=i(""),n=i(""),d=i(""),t=i(""),m=i("");const y=async()=>{try{const f=await C.post("/api/students",{dni:u.value,name:s.value,phone:n.value,username:d.value,password:t.value,reffered_by:m.value});u.value="",s.value="",n.value="",d.value="",t.value="",m.value="",V("student-created",f.data.id)}catch(f){console.error(f)}};return(f,a)=>(v(),b(U,{title:"Crear Estudiante",hasCancel:!0,class:"bg-gray-500 slide-in-top my-2"},{default:_(()=>[o(c,{icon:l(r),class:"my-1",placeholder:"DNI",modelValue:l(u),"onUpdate:modelValue":a[0]||(a[0]=e=>p(u)?u.value=e:u=e)},null,8,["icon","modelValue"]),o(c,{icon:l(r),class:"my-1",placeholder:"Nombre",modelValue:l(s),"onUpdate:modelValue":a[1]||(a[1]=e=>p(s)?s.value=e:s=e)},null,8,["icon","modelValue"]),o(c,{icon:l(r),class:"my-1",placeholder:"Teléfono",modelValue:l(n),"onUpdate:modelValue":a[2]||(a[2]=e=>p(n)?n.value=e:n=e)},null,8,["icon","modelValue"]),o(c,{icon:l(r),class:"my-1",placeholder:"Nombre de usuario",modelValue:l(d),"onUpdate:modelValue":a[3]||(a[3]=e=>p(d)?d.value=e:d=e)},null,8,["icon","modelValue"]),o(c,{icon:l(r),class:"my-1",placeholder:"Contraseña",modelValue:l(t),"onUpdate:modelValue":a[4]||(a[4]=e=>p(t)?t.value=e:t=e)},null,8,["icon","modelValue"]),o(c,{icon:l(r),class:"my-1",placeholder:"Referido por",modelValue:l(m),"onUpdate:modelValue":a[5]||(a[5]=e=>p(m)?m.value=e:m=e)},null,8,["icon","modelValue"]),o(g,{icon:l(r),label:"Guardar",class:"bg-gray-300",target:"_blank","rounded-full":"",color:"",onClick:y},null,8,["icon"])]),_:1}))}};export{D as default};