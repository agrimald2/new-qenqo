import{_ as u}from"./IconRounded-95d1b6e6.js";import{_ as f}from"./LayoutAuthenticated-ca1cfdfa.js";import{_ as c}from"./SectionTitleLineWithButton-b157ada1.js";import{o as _,c as h,w as s,a as g,b as e,u as n,d as r,Z as C}from"./app-e626a5d5.js";import{_ as v}from"./BaseButton-d0b00a94.js";import{m as i}from"./mdi-f62b0ca1.js";import{_ as m}from"./CardBox-7edbfdbc.js";import"./numeral-5ddd0554.js";import{_ as p}from"./FormControl-01eb4caf.js";import d from"./AppointmentsTable-ac40c16c.js";import"./main-39341a9e.js";import"./UserAvatar-67e0014e.js";import"./BaseDivider-ba700f10.js";import"./OverlayLayer-c428521d.js";import"./BaseLevel-12afe250.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./CardBoxModal-11397976.js";import"./BaseButtons-af64cb60.js";import"./PillTag-2e82f72d.js";const b={class:"grid grid-cols-4 gap-4 mb-2"},V={class:"grid grid-cols-1 gap-6 lg:grid-cols-3 mb-6"},A={data(){return{showCreate:!1,appointments:[],appointment_statuses:[{id:1,value:"Confirmado"},{id:2,value:"Finalizado"},{id:3,value:"Cancelado"}],filter:{startDate:null,endDate:null,activePlan:null,status:null}}},components:[d],methods:{showCreateMethod(){this.showCreate=!0},fetchAppointments(){g.get("/api/getAppointments",{params:{start_date:this.filter.startDate,end_date:this.filter.endDate,active_plan:this.filter.activePlan,status:this.filter.status}}).then(l=>{this.appointments=l.data}).catch(l=>{console.error(l)})}},mounted(){this.fetchAppointments()}},H=Object.assign(A,{__name:"Index",setup(l){return(t,o)=>(_(),h(f,null,{default:s(()=>[e(n(C),{title:"Clases Agendadas"}),e(u,null,{default:s(()=>[e(c,{title:"Clases Agendadas"}),r("div",b,[r("div",null,[e(v,{onClick:t.showCreateMethod,icon:n(i),label:"Nueva Clase",class:"bg-green-300",target:"_blank","rounded-full":""},null,8,["onClick","icon"])])]),r("div",V,[e(m,{class:"mb-2"},{default:s(()=>[e(p,{icon:n(i),type:"date",modelValue:t.filter.startDate,"onUpdate:modelValue":o[0]||(o[0]=a=>t.filter.startDate=a),onChange:t.fetchAppointments},null,8,["icon","modelValue","onChange"])]),_:1}),e(m,{class:"mb-2"},{default:s(()=>[e(p,{icon:n(i),type:"date",modelValue:t.filter.endDate,"onUpdate:modelValue":o[1]||(o[1]=a=>t.filter.endDate=a),onChange:t.fetchAppointments},null,8,["icon","modelValue","onChange"])]),_:1}),e(m,{class:"mb-2"},{default:s(()=>[e(p,{icon:n(i),type:"select",modelValue:t.filter.status,"onUpdate:modelValue":o[2]||(o[2]=a=>t.filter.status=a),options:t.appointment_statuses.map(a=>({label:a.value,value:a.id})),onChange:t.fetchAppointments},null,8,["icon","modelValue","options","onChange"])]),_:1})]),e(d,{appointments:t.appointments},null,8,["appointments"])]),_:1})]),_:1}))}});export{H as default};
