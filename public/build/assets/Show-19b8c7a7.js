import{_,a as b,b as C}from"./SectionTitleLineWithButton-6865d83b.js";import{o as d,c,w as s,a as n,b as a,u as o,d as l,t as v,e as P,Z as w}from"./app-1b5559ad.js";import{_ as f}from"./BaseButton-6f77bb6b.js";import{m as r}from"./mdi-a7659b7a.js";import{_ as m}from"./CardBoxWidget-5e5bafaf.js";import{_ as u}from"./CardBox-51675e1f.js";import{_ as A}from"./FormControl-56600163.js";import{_ as $}from"./PillTag-78652da5.js";import g from"./Create-04e5b8c6.js";import p from"./Create-58f98d2c.js";import S from"./List-5ff1883a.js";import y from"./List-8bda5e88.js";import"./main-a396d137.js";import"./UserAvatar-207dfaf6.js";import"./BaseDivider-9df802a1.js";import"./OverlayLayer-467f60d4.js";import"./BaseLevel-ebd99744.js";import"./FormField-0061d509.js";import"./BaseButtons-208117c2.js";const k={class:"font-bold text-xl"},D=["max","value"],T={class:"grid grid-cols-1 gap-6 lg:grid-cols-3 mb-6"},V={class:"grid md:grid-cols-2 grid-col-1 gap-4"},N={class:"md:col-2 col"},B={class:"md:col-2 col"},F={props:["activePlan"],data(){return{showCreateStudents:!1,showCreatePayment:!1,active_students:[],students:[],selectedStudent:null,payments:[]}},components:[g,S,p,y],methods:{toggleCreateStudents(){this.showCreateStudents=!this.showCreateStudents},toggleCreatePayment(){this.showCreatePayment=!this.showCreatePayment},handleNewStudent(e){this.toggleCreateStudents(),this.addStudentToActivePlan(e)},fetchActivePlanStudents(){n.get("/api/activePlans/"+this.activePlan.id+"/students").then(e=>{this.active_students=e.data}).catch(e=>{console.error(e)})},fetchStudents(){n.get("/api/students").then(e=>{this.students=e.data}).catch(e=>{console.error(e)})},fetchPayments(){n.get("/api/activePlanPayments/"+this.activePlan.id).then(e=>{this.payments=e.data,this.fetchActivePlan()}).catch(e=>{console.log("Emit:"),console.error(e)})},fetchActivePlan(){n.get("/api/activePlans/getById/"+this.activePlan.id).then(e=>{this.activePlan=e.data}).catch(e=>{console.error(e)})},async addStudentToActivePlan(e){try{const t={active_plan_id:this.activePlan.id,student_id:e};await n.post("/api/activePlans/"+this.activePlan.id+"/students",t),this.fetchActivePlanStudents()}catch(t){console.error(t)}},addSelectedStudentToActivePlan(){this.addStudentToActivePlan(this.selectedStudent.value)},async removeStudentFromActivePlan(e){try{await n.delete(`/api/activePlans/${this.activePlan.id}/students/${e}`),this.fetchActivePlanStudents()}catch(t){console.error(t)}},async removeStudentFromActivePlan(e){try{await n.post("/api/activePlans/delete/student",{student_id:e,active_plan_id:this.activePlan.id}),this.fetchActivePlanStudents()}catch(t){console.error(t)}}},mounted(){this.fetchActivePlanStudents(),this.fetchStudents(),this.fetchPayments()}},x=Object.assign(F,{__name:"Show",setup(e){return(t,h)=>(d(),c(_,null,{default:s(()=>[a(o(w),{title:"Tarifas"}),a(C,null,{default:s(()=>[a(b,{title:"Grupo: "+e.activePlan.name},null,8,["title"]),a(u,{class:"mb-2"},{default:s(()=>[l("h3",k,v(e.activePlan.start_date)+" al "+v(e.activePlan.end_date),1),l("progress",{class:"flex w-2/5 self-center lg:w-full",max:Math.floor((new Date(e.activePlan.end_date)-new Date(e.activePlan.start_date))/(1e3*60*60*24)),value:Math.floor((new Date-new Date(e.activePlan.start_date))/(1e3*60*60*24))},null,8,D)]),_:1}),l("div",T,[a(m,{trend:"de "+e.activePlan.total,"trend-type":"up",color:"text-blue-500",icon:t.mdiCartOutline,number:e.activePlan.total_payed,prefix:"S/ ",label:"Pagado"},null,8,["trend","icon","number"]),a(m,{trend:"de"+e.activePlan.rate_sessions_number,"trend-type":"alert",color:"text-red-500",icon:t.mdiCartOutline,number:e.activePlan.rate_sessions_assisted,prefix:"",label:"Sesiones"},null,8,["trend","icon","number"]),a(m,{trend:"de 20","trend-type":"up",color:"text-red-500",icon:t.mdiChartTimelineVariant,number:e.activePlan.people_number,suffix:"",label:"Alumnos"},null,8,["icon","number"])]),l("div",V,[l("div",N,[a(f,{onClick:t.toggleCreateStudents,icon:o(r),label:"Alumnos",class:"bg-green-300 my-2",color:"",target:"_blank","rounded-full":""},null,8,["onClick","icon"]),a(u,{class:"mb-2"},{default:s(()=>[a(A,{icon:o(r),type:"select",options:t.students.map(i=>({label:i.user.name,value:i.id})),onChange:t.addSelectedStudentToActivePlan,modelValue:t.selectedStudent,"onUpdate:modelValue":h[0]||(h[0]=i=>t.selectedStudent=i)},null,8,["icon","options","onChange","modelValue"]),t.showCreateStudents?(d(),c(g,{key:0,onStudentCreated:t.handleNewStudent},null,8,["onStudentCreated"])):P("",!0),a(S,{class:"my-2 border rounded p-2",students:t.active_students,onDeleteStudent:t.removeStudentFromActivePlan},null,8,["students","onDeleteStudent"])]),_:1})]),l("div",B,[a(f,{onClick:t.toggleCreatePayment,icon:o(r),label:"Pagos",class:"bg-green-300 my-2 mx-2"},null,8,["onClick","icon"]),a($,{color:"warning",label:"Falta Pagar "+(e.activePlan.total-e.activePlan.total_payed),small:t.pillsSmall,outline:t.pillsOutline,icon:t.pillsIcon},null,8,["label","small","outline","icon"]),a(u,{class:"mb-2"},{default:s(()=>[t.showCreatePayment?(d(),c(p,{key:0,activePlan:e.activePlan,onPaymentAdded:t.fetchPayments},null,8,["activePlan","onPaymentAdded"])):P("",!0),a(y,{payments:t.payments},null,8,["payments"])]),_:1})])])]),_:1})]),_:1}))}});export{x as default};