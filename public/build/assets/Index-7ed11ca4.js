import{_ as m}from"./IconRounded-95d1b6e6.js";import{_ as d}from"./StudentsLayout-f5b3e5c9.js";import{_ as p}from"./SectionTitleLineWithButton-b157ada1.js";import{o,c as s,w as i,a as _,b as t,u as r,d as n,e as f,Z as u}from"./app-e626a5d5.js";import{_ as h}from"./BaseButton-d0b00a94.js";import{m as v}from"./mdi-f62b0ca1.js";import l from"./Create-d0341713.js";import c from"./Table-ba689879.js";import"./main-39341a9e.js";import"./UserAvatar-67e0014e.js";import"./BaseDivider-ba700f10.js";import"./OverlayLayer-c428521d.js";import"./BaseLevel-12afe250.js";import"./FormControl-01eb4caf.js";import"./CardBox-7edbfdbc.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./FormField-2166c5f3.js";import"./CardBoxModal-11397976.js";import"./BaseButtons-af64cb60.js";import"./PillTag-2e82f72d.js";const P={class:"grid grid-cols-4 gap-4"},C={data(){return{showCreate:!1,activePlans:[]}},components:[l,,c],methods:{showCreateMethod(){this.showCreate=!0},fetchActivePlans(){_.get("/students/getActivePlans").then(e=>{this.activePlans=e.data}).catch(e=>{console.error(e)})},activePlanAdded(){this.showCreate=!1,this.fetchActivePlans()}},mounted(){this.fetchActivePlans()}},E=Object.assign(C,{__name:"Index",setup(e){return(a,g)=>(o(),s(d,null,{default:i(()=>[t(r(u),{title:"Tarifas"}),t(m,null,{default:i(()=>[t(p,{title:"Grupos Activos"}),n("div",P,[n("div",null,[t(h,{onClick:a.showCreateMethod,icon:r(v),label:"Grupo/Tarifa",class:"bg-green-300",target:"_blank","rounded-full":""},null,8,["onClick","icon"])])]),t(c,{activePlans:a.activePlans},null,8,["activePlans"]),a.showCreate?(o(),s(l,{key:0,onActivePlanCreated:a.activePlanAdded},null,8,["onActivePlanCreated"])):f("",!0)]),_:1})]),_:1}))}});export{E as default};