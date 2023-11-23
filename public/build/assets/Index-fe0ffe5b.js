import{_ as m}from"./AsideMenu-8b4b5ee4.js";import{_ as p}from"./StudentsLayout-15abe2db.js";import{m as u}from"./mdi-66a87996.js";import{_ as c}from"./BaseButton-9a3f1db7.js";import"./colors-ea023820.js";import{o as f,c as h,w as i,a as g,b as s,u as d,Z as b,d as e}from"./app-9f2eb8dd.js";import"./numeral-574c020d.js";import{_ as l}from"./FormControl-587b9277.js";import r from"./AppointmentsTable-f6154ab9.js";import"./BaseIcon-9a2ca4ad.js";import"./main-4957fc0e.js";import"./UserAvatar-4cfac3ec.js";import"./BaseDivider-b91b2461.js";import"./OverlayLayer-1e6f50da.js";import"./PillTag-f1f08ee3.js";const _=e("h2",{class:"text-2xl font-semibold mb-4 text-white text-center main-font"},"Mis Clases",-1),C={class:"grid grid-cols-4 gap-4 mb-2"},v={class:"grid grid-cols-1 gap-3 lg:grid-cols-3 mb-6 bg-black pb-2 rounded"},w={class:"text-white p-2 rounded-lg shadow-lg text-center px-4"},D=e("label",{for:"startDate",class:"block text-sm font-medium mb-1 main-font"},"Fecha Inicio",-1),k={class:"text-white p-2 rounded-lg shadow-lg text-center px-4"},V=e("label",{for:"endDate",class:"block text-sm font-medium mb-1 main-font"},"Fecha Final",-1),x={class:"text-white p-2 rounded-lg shadow-lg text-center px-4"},A=e("label",{for:"status",class:"block text-sm font-medium mb-1 main-font"},"Estado",-1),$={data(){return{showCreate:!1,appointments:[],appointment_statuses:[{id:1,value:"Confirmado"},{id:2,value:"Finalizado"},{id:3,value:"Cancelado"}],filter:{startDate:null,endDate:null,activePlan:null,status:null}}},components:[r],methods:{showCreateMethod(){this.showCreate=!0},fetchAppointments(){g.get("/students/getAppointments",{params:{start_date:this.filter.startDate,end_date:this.filter.endDate,active_plan:this.filter.activePlan,status:this.filter.status}}).then(n=>{this.appointments=n.data}).catch(n=>{console.error(n)})},goTo(n){window.location.href=n}},mounted(){this.fetchAppointments()}},G=Object.assign($,{__name:"Index",setup(n){return(t,o)=>(f(),h(p,null,{default:i(()=>[s(d(b),{title:"Clases Agendadas"}),s(m,null,{default:i(()=>[_,e("div",C,[e("div",null,[s(c,{onClick:o[0]||(o[0]=a=>t.goTo("/students/scheduleAppointment")),icon:d(u),label:"Nueva Clase",color:"purple",class:"bg-black text-white hover:bg-purple-700 transition duration-200 main-font","rounded-full":""},null,8,["icon"])])]),e("div",v,[e("div",w,[D,s(l,{id:"startDate",icon:t.mdiCalendar,type:"date",modelValue:t.filter.startDate,"onUpdate:modelValue":o[1]||(o[1]=a=>t.filter.startDate=a),onChange:t.fetchAppointments,class:"text-black bg-purple-600 rounded-md"},null,8,["icon","modelValue","onChange"])]),e("div",k,[V,s(l,{id:"endDate",icon:t.mdiCalendar,type:"date",modelValue:t.filter.endDate,"onUpdate:modelValue":o[2]||(o[2]=a=>t.filter.endDate=a),onChange:t.fetchAppointments,class:"text-black bg-purple-600 rounded-md"},null,8,["icon","modelValue","onChange"])]),e("div",x,[A,s(l,{id:"status",icon:t.mdiFilter,type:"select",modelValue:t.filter.status,"onUpdate:modelValue":o[3]||(o[3]=a=>t.filter.status=a),options:t.appointment_statuses.map(a=>({label:a.value,value:a.id})),onChange:t.fetchAppointments,class:"text-black bg-purple-600 rounded-md"},null,8,["icon","modelValue","options","onChange"])])]),s(r,{appointments:t.appointments},null,8,["appointments"])]),_:1})]),_:1}))}});export{G as default};