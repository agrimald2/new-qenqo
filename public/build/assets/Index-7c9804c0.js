import{_ as u}from"./AsideMenu-8b4b5ee4.js";import{_}from"./LayoutAuthenticated-bde042ce.js";import{_ as C}from"./SectionTitleLineWithButton-cf1e246b.js";import{o as i,c as s,w as l,a as m,b as t,u as r,Z as w,d as o,e as n}from"./app-9f2eb8dd.js";import{_ as f}from"./BaseButton-9a3f1db7.js";import{m as d}from"./mdi-66a87996.js";import h from"./Create-6874ba44.js";import c from"./Table-389c2963.js";import p from"./Create-28850a30.js";import"./BaseIcon-9a2ca4ad.js";import"./main-4957fc0e.js";import"./UserAvatar-4cfac3ec.js";import"./BaseDivider-b91b2461.js";import"./colors-ea023820.js";import"./OverlayLayer-1e6f50da.js";import"./FormControl-587b9277.js";import"./BaseLevel-c3fa91a4.js";import"./IconRounded-cea43341.js";import"./CardBox-e1e2cea0.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./FormField-f1ea0fce.js";import"./CardBoxModal-13b1714e.js";import"./BaseButtons-91e2cdd3.js";const y={class:"grid grid-cols-4 gap-4"},F={data(){return{showCreateFamily:!1,showCreateRate:!1,rates:[],families:[]}},components:[h,p,c],methods:{showCreateFamilyModal(){this.showCreateRate=!1,this.showCreateFamily=!0},fetchFamilies(){m.get("/api/families").then(a=>{this.families=a.data,this.families=this.families.map(e=>({id:e.id,label:e.name}))}).catch(a=>{console.error(a)})},familyAdded(){this.showCreateFamily=!1,this.fetchFamilies()},showCreateRateModal(){this.showCreateFamily=!1,this.showCreateRate=!0},fetchRates(){m.get("/api/rates").then(a=>{this.rates=a.data}).catch(a=>{console.error(a)})},rateAdded(){this.showCreateRate=!1,this.fetchRates()}},mounted(){this.fetchFamilies(),this.fetchRates()}},K=Object.assign(F,{__name:"Index",setup(a){return(e,g)=>(i(),s(_,null,{default:l(()=>[t(r(w),{title:"Tarifas"}),t(u,null,{default:l(()=>[t(C,{title:"Tarifas y Planes"}),o("div",y,[o("div",null,[t(f,{onClick:e.showCreateRateModal,icon:r(d),label:"Tarifa",class:"bg-green-300",target:"_blank","rounded-full":""},null,8,["onClick","icon"])]),o("div",null,[t(f,{onClick:e.showCreateFamilyModal,icon:r(d),label:"Familia",class:"bg-green-300",target:"_blank","rounded-full":""},null,8,["onClick","icon"])])]),e.showCreateFamily?(i(),s(p,{key:0,onFamilyCreated:e.familyAdded},null,8,["onFamilyCreated"])):n("",!0),e.showCreateRate?(i(),s(h,{key:1,families:e.families,onRateCreated:e.rateAdded},null,8,["families","onRateCreated"])):n("",!0),t(c,{rates:e.rates},null,8,["rates"])]),_:1})]),_:1}))}});export{K as default};