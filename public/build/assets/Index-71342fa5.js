import{_ as c}from"./IconRounded-95d1b6e6.js";import{_}from"./LayoutAuthenticated-ca1cfdfa.js";import{_ as d}from"./SectionTitleLineWithButton-b157ada1.js";import{o as a,c as o,w as s,a as p,b as e,u as i,d as n,e as f,Z as u}from"./app-e626a5d5.js";import{_ as h}from"./BaseButton-d0b00a94.js";import{m as C}from"./mdi-f62b0ca1.js";import m from"./Create-d0d0b788.js";import l from"./Table-9832b57b.js";import"./main-39341a9e.js";import"./UserAvatar-67e0014e.js";import"./BaseDivider-ba700f10.js";import"./OverlayLayer-c428521d.js";import"./BaseLevel-12afe250.js";import"./FormControl-01eb4caf.js";import"./CardBox-7edbfdbc.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./CardBoxModal-11397976.js";import"./BaseButtons-af64cb60.js";const g={class:"grid grid-cols-4 gap-4"},w={data(){return{showCreate:!1,trainers:[]}},components:[m,,l],methods:{showCreateMethod(){this.showCreate=!0},fetch(){p.get("/api/getTrainers").then(r=>{this.trainers=r.data}).catch(r=>{console.error(r)})}},mounted(){this.fetch()}},A=Object.assign(w,{__name:"Index",setup(r){return(t,k)=>(a(),o(_,null,{default:s(()=>[e(i(u),{title:"Entrenadores"}),e(c,null,{default:s(()=>[e(d,{title:"Entrenadores"}),n("div",g,[n("div",null,[e(h,{onClick:t.showCreateMethod,icon:i(C),label:"Entrenador",class:"bg-green-300",target:"_blank","rounded-full":""},null,8,["onClick","icon"])])]),e(l,{trainers:t.trainers},null,8,["trainers"]),t.showCreate?(a(),o(m,{key:0,onTrainerCreated:t.fetch},null,8,["onTrainerCreated"])):f("",!0)]),_:1})]),_:1}))}});export{A as default};