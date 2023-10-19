import{_ as d,a as u,b as c}from"./SectionTitleLineWithButton-0f7c04bc.js";import{o,c as a,w as n,a as _,b as t,u as r,d as i,e as f,Z as p}from"./app-8697b0b7.js";import{_ as h}from"./BaseButton-c4ef6fc6.js";import{m as C}from"./mdi-7f5f296a.js";import m from"./Create-e5562148.js";import l from"./Table-98bd5226.js";import"./main-136096ca.js";import"./FormControl-f5f76d11.js";import"./UserAvatar-d7ff0a76.js";import"./BaseDivider-12cf6a0a.js";import"./OverlayLayer-2aed81c6.js";import"./BaseLevel-a90da931.js";import"./CardBox-f30d27b6.js";import"./CardBoxModal-8729ec4d.js";import"./BaseButtons-1517e964.js";const g={class:"grid grid-cols-4 gap-4"},w={data(){return{showCreate:!1,students:[]}},components:[m,,l],methods:{showCreateMethod(){this.showCreate=!0},fetchStudents(){_.get("/api/students").then(e=>{this.students=e.data}).catch(e=>{console.error(e)})}},mounted(){this.fetchStudents()}},Z=Object.assign(w,{__name:"Index",setup(e){return(s,b)=>(o(),a(d,null,{default:n(()=>[t(r(p),{title:"Alumnos"}),t(c,null,{default:n(()=>[t(u,{title:"Alumnos"}),i("div",g,[i("div",null,[t(h,{onClick:s.showCreateMethod,icon:r(C),label:"Alumno",class:"bg-green-300",target:"_blank","rounded-full":""},null,8,["onClick","icon"])])]),t(l,{students:s.students},null,8,["students"]),s.showCreate?(o(),a(m,{key:0,onStudentCreated:s.fetchStudents},null,8,["onStudentCreated"])):f("",!0)]),_:1})]),_:1}))}});export{Z as default};
