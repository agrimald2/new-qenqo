import{_ as m}from"./IconRounded-95d1b6e6.js";import{_ as d}from"./StudentsLayout-f5b3e5c9.js";import{_ as o}from"./SectionTitleLineWithButton-b157ada1.js";import{o as p,c as u,w as s,a as n,b as e,u as f,d as i,t as l,Z as h}from"./app-e626a5d5.js";import"./BaseButton-d0b00a94.js";import{_ as c}from"./CardBoxWidget-ff6f9da0.js";import{_ as r}from"./CardBox-7edbfdbc.js";import"./main-39341a9e.js";import _ from"./Create-25d87a13.js";import v from"./Create-36721731.js";import P from"./List-4e35bbd8.js";import g from"./List-caf4afdd.js";import y from"./Table-bb2755b2.js";import b from"./Create-98ab1a61.js";import"./mdi-f62b0ca1.js";import"./UserAvatar-67e0014e.js";import"./BaseDivider-ba700f10.js";import"./OverlayLayer-c428521d.js";import"./BaseLevel-12afe250.js";import"./FormControl-01eb4caf.js";import"./numeral-5ddd0554.js";import"./PillTag-2e82f72d.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./FormField-2166c5f3.js";import"./BaseButtons-af64cb60.js";import"./CardBoxModal-11397976.js";const w={class:"font-bold text-xl"},$=["max","value"],S={class:"grid gap-6 lg:grid-cols-2 mb-6"},A={class:"mb-6"},C={props:["activePlan"],data(){return{showCreateStudents:!1,showCreatePayment:!1,showCreateAppointment:!1,active_students:[],students:[],selectedStudent:null,payments:[],total_payed:0,appointment_statuses:[{id:1,value:"Confirmado"},{id:2,value:"Finalizado"},{id:3,value:"Cancelado"}],appointments:[]}},components:[_,P,v,g,b],methods:{fetchActivePlanStudents(){n.get("/api/activePlans/"+this.activePlan.id+"/students").then(t=>{this.active_students=t.data}).catch(t=>{console.error(t)})},fetchStudents(){n.get("/api/students").then(t=>{this.students=t.data}).catch(t=>{console.error(t)})},fetchPayments(){n.get("/students/getActivePlanPayments/"+this.activePlan.id).then(t=>{this.payments=t.data,this.calculateTotalPayed(),this.fetchActivePlan()}).catch(t=>{console.log("Emit:"),console.error(t)})},calculateTotalPayed(){this.total_payed=this.payments.reduce((t,a)=>t+parseFloat(a.total_payed),0)},async fetchActivePlan(){n.get("/api/activePlans/getById/"+this.activePlan.id).then(t=>{this.activePlan=t.data}).catch(t=>{console.error(t)})},async fetchAppointment(){n.get("/students/getAppointments/").then(t=>{console.log(t.data),this.appointments=t.data}).catch(t=>{console.log("Emit:"),console.error(t)})}},mounted(){this.fetchActivePlanStudents(),this.fetchStudents(),this.fetchPayments(),this.fetchAppointment()}},tt=Object.assign(C,{__name:"Show",setup(t){return(a,x)=>(p(),u(d,null,{default:s(()=>[e(f(h),{title:"Tarifas"}),e(m,null,{default:s(()=>[e(o,{title:"Grupo: "+t.activePlan.name},null,8,["title"]),e(r,{class:"mb-2"},{default:s(()=>[i("h3",w,l(t.activePlan.start_date)+" al "+l(t.activePlan.end_date),1),i("progress",{class:"flex w-2/5 self-center lg:w-full",max:Math.floor((new Date(t.activePlan.end_date)-new Date(t.activePlan.start_date))/(1e3*60*60*24)),value:Math.floor((new Date-new Date(t.activePlan.start_date))/(1e3*60*60*24))},null,8,$)]),_:1}),i("div",S,[e(c,{trend:""+a.total_payed,"trend-type":"up",color:"text-blue-500",icon:a.mdiCartOutline,number:a.total_payed,prefix:"S/ ",label:"Pagado"},null,8,["trend","icon","number"]),e(c,{trend:"de"+t.activePlan.rate_sessions_number,"trend-type":"alert",color:"text-red-500",icon:a.mdiCartOutline,number:t.activePlan.rate_sessions_assisted,prefix:"",label:"Sesiones"},null,8,["trend","icon","number"])]),i("div",A,[e(o,{title:"Clases"}),e(r,{class:"mb-2"},{default:s(()=>[e(y,{appointments:a.appointments},null,8,["appointments"])]),_:1})])]),_:1})]),_:1}))}});export{tt as default};