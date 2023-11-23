import{u as y}from"./main-4957fc0e.js";import{s as x}from"./chart.config-59b0b5a2.js";import{_ as b}from"./AsideMenu-8b4b5ee4.js";import{r as D,x as w,h as c,o as t,c as l,w as m,a as B,b as d,u as P,Z as k,d as i,f as o,i as p,t as v,F as u}from"./app-9f2eb8dd.js";import"./colors-ea023820.js";import{_ as M}from"./StudentsLayout-15abe2db.js";import f from"./PricingCard-a7317495.js";import"./mdi-66a87996.js";import"./BaseIcon-9a2ca4ad.js";import"./UserAvatar-4cfac3ec.js";import"./BaseDivider-b91b2461.js";import"./OverlayLayer-1e6f50da.js";import"./PayModal-224bb090.js";import"./FormControl-587b9277.js";import"./Aditionals-c5f30b7d.js";import"./_plugin-vue_export-helper-c27b6911.js";const T={class:"mt-8"},A=i("h2",{class:"text-2xl font-semibold mb-4 text-white text-center main-font"},"Tarifas Disponibles",-1),C={class:"text-xl font-semibold my-4 text-gray-100 text-center main-font"},F={class:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"},R={components:{PricingCard:f},data(){return{rates:[{id:1,category:"Individual",name:"Tarifa Básica",price:30,sessions:8,description:"Acceso a todas las instalaciones y hasta 8 clases al mes."},{id:2,category:"Premium",name:"Tarifa Premium",price:50,sessions:15,description:"Acceso ilimitado a instalaciones, 15 clases al mes y 2 asesorías personalizadas."},{id:3,category:"Estudiantes",name:"Tarifa Estudiante",price:20,sessions:8,description:"Acceso a todas las instalaciones y hasta 8 clases al mes. Descuento para estudiantes."},{id:4,category:"Familiar",name:"Tarifa Familiar",price:80,sessions:"Ilimitadas",description:"Acceso ilimitado para ti y tu familia. Incluye 4 miembros."}],showPayModal:!1}},methods:{fetchRates(){B.get("/api/rates").then(s=>{this.rates=s.data}).catch(s=>{console.error(s)})},showPayModal(){this.showPayModal=!0}},computed:{categorizedRates(){return this.rates.reduce((s,a)=>(s[a.category]||(s[a.category]=[]),s[a.category].push(a),s),{})}},mounted(){}},U=Object.assign(R,{__name:"BuyRates",setup(s){const a=D(null),h=()=>{a.value=x()};w(()=>{h()});const r=y();return c(()=>r.clients.slice(0,4)),c(()=>r.history),(_,z)=>(t(),l(M,null,{default:m(()=>[d(P(k),{title:"Dashboard"}),d(b,null,{default:m(()=>[i("div",T,[A,(t(!0),o(u,null,p(_.categorizedRates,(g,n)=>(t(),o("div",{key:n},[i("h3",C,v(n),1),i("div",F,[(t(!0),o(u,null,p(g,e=>(t(),l(f,{key:e.id,name:e.name,price:e.price,sessions:e.sessions,description:e.description},null,8,["name","price","sessions","description"]))),128))])]))),128))])]),_:1})]),_:1}))}});export{U as default};