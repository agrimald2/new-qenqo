import{_ as d,a as c,b as p}from"./SectionTitleLineWithButton-d9214d76.js";import{o as u,c as f,w as i,b as t,u as b,d as a,t as s,Z as g}from"./app-2f728894.js";import"./BaseButton-6ed89792.js";import{_ as o}from"./CardBoxWidget-c27bef13.js";import{_ as r}from"./CardBox-325a539e.js";import"./main-d5a75c4a.js";import l from"./Qr-eec6dcc2.js";import m from"./StudentsTable-f2d9f59b.js";import"./mdi-7f5f296a.js";import"./FormControl-572480f0.js";import"./UserAvatar-925a527e.js";import"./BaseDivider-145786df.js";import"./OverlayLayer-1bc04f10.js";import"./BaseLevel-39bb96ac.js";import"./numeral-68028780.js";import"./PillTag-02e13e6e.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./CardBoxModal-2d3dcbc8.js";import"./BaseButtons-ae752e25.js";const _={class:"grid grid-cols-1 gap-6 lg:grid-cols-2 mb-6"},h={class:"font-bold text-xl"},x={class:"grid grid-cols-1 gap-6 lg:grid-cols-4 mb-6"},C={props:["appointment"],data(){return{}},components:[m,l],methods:{},mounted(){}},E=Object.assign(C,{__name:"Show",setup(e){return(n,w)=>(u(),f(d,null,{default:i(()=>[t(b(g),{title:"Clase"}),t(p,null,{default:i(()=>[t(c,{title:e.appointment.status+" - "+e.appointment.active_plan.name},null,8,["title"]),a("div",_,[t(r,{class:"mb-2"},{default:i(()=>[a("h3",h,s(e.appointment.date)+" de "+s(e.appointment.start_time)+" al "+s(e.appointment.end_time),1)]),_:1}),t(r,{class:"center"},{default:i(()=>[t(l,{text:"Hello world!"})]),_:1})]),a("div",x,[t(o,{trend:"de "+e.appointment.assistances.length,"trend-type":"up",color:"text-blue-500",icon:n.mdiCartOutline,number:0,prefix:"",label:"Confirmados"},null,8,["trend","icon"]),t(o,{trend:"de"+e.appointment.assistances.length,"trend-type":"down",color:"text-red-500",icon:n.mdiCartOutline,number:0,prefix:"",label:"No Irán"},null,8,["trend","icon"]),t(o,{trend:"de"+e.appointment.assistances.length,"trend-type":"down",color:"text-red-500",icon:n.mdiChartTimelineVariant,number:0,suffix:"",label:"No Asistieron"},null,8,["trend","icon"]),t(o,{trend:"de"+e.appointment.assistances.length,"trend-type":"up",color:"text-red-500",icon:n.mdiChartTimelineVariant,number:0,suffix:"",label:"Asistieron"},null,8,["trend","icon"])]),a("div",null,[t(m,{students:e.appointment.assistances},null,8,["students"])])]),_:1})]),_:1}))}});export{E as default};