import{_ as p,a as _,b as C}from"./SectionTitleLineWithButton-6865d83b.js";import{o as i,c as s,w as o,a as m,b as t,u as r,d as l,e as n,Z as w}from"./app-1b5559ad.js";import{_ as d}from"./BaseButton-6f77bb6b.js";import{m as f}from"./mdi-a7659b7a.js";import h from"./Create-03d50993.js";import c from"./Table-1428b8c8.js";import u from"./Create-c60cd39f.js";import"./main-a396d137.js";import"./FormControl-56600163.js";import"./UserAvatar-207dfaf6.js";import"./BaseDivider-9df802a1.js";import"./OverlayLayer-467f60d4.js";import"./BaseLevel-ebd99744.js";import"./CardBox-51675e1f.js";import"./FormField-0061d509.js";import"./CardBoxModal-4b8a3f40.js";import"./BaseButtons-208117c2.js";const y={class:"grid grid-cols-4 gap-4"},F={data(){return{showCreateFamily:!1,showCreateRate:!1,rates:[],families:[]}},components:[h,u,c],methods:{showCreateFamilyModal(){this.showCreateRate=!1,this.showCreateFamily=!0},fetchFamilies(){m.get("/api/families").then(a=>{this.families=a.data,this.families=this.families.map(e=>({id:e.id,label:e.name}))}).catch(a=>{console.error(a)})},familyAdded(){this.showCreateFamily=!1,this.fetchFamilies()},showCreateRateModal(){this.showCreateFamily=!1,this.showCreateRate=!0},fetchRates(){m.get("/api/rates").then(a=>{this.rates=a.data}).catch(a=>{console.error(a)})},rateAdded(){this.showCreateRate=!1,this.fetchRates()}},mounted(){this.fetchFamilies(),this.fetchRates()}},z=Object.assign(F,{__name:"Index",setup(a){return(e,g)=>(i(),s(p,null,{default:o(()=>[t(r(w),{title:"Tarifas"}),t(C,null,{default:o(()=>[t(_,{title:"Tarifas y Planes"}),l("div",y,[l("div",null,[t(d,{onClick:e.showCreateRateModal,icon:r(f),label:"Tarifa",class:"bg-green-300",target:"_blank","rounded-full":""},null,8,["onClick","icon"])]),l("div",null,[t(d,{onClick:e.showCreateFamilyModal,icon:r(f),label:"Familia",class:"bg-green-300",target:"_blank","rounded-full":""},null,8,["onClick","icon"])])]),e.showCreateFamily?(i(),s(u,{key:0,onFamilyCreated:e.familyAdded},null,8,["onFamilyCreated"])):n("",!0),e.showCreateRate?(i(),s(h,{key:1,families:e.families,onRateCreated:e.rateAdded},null,8,["families","onRateCreated"])):n("",!0),t(c,{rates:e.rates},null,8,["rates"])]),_:1})]),_:1}))}});export{z as default};