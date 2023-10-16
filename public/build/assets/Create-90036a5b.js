import{_ as c}from"./CardBox-843fea28.js";import{_ as u}from"./BaseButton-b73c4149.js";import{m as o}from"./mdi-4cce4133.js";import{_ as m}from"./FormField-62602fce.js";import{_ as d}from"./FormControl-87741672.js";import{r as p,o as y,c as f,w as i,a as r,j as h,t as _,b as n,u as s}from"./app-bf3f268e.js";import"./main-22da0477.js";const P={props:["activePlan"],data(){return{active_students:[],payment_methods:[],payment:{payment_method:"",total_payed:"",student_id:"",active_plan_id:this.activePlan.id},selectedPaymentMethod:[],selectedStudent:[]}},components:[],methods:{fetchActivePlanStudents(){r.get("/api/activePlans/"+this.activePlan.id+"/students").then(t=>{this.active_students=t.data,console.dir(this.active_students)}).catch(t=>{console.error(t)})},fetchPaymentMethods(){r.get("/api/getPaymentMethods").then(t=>{this.payment_methods=t.data}).catch(t=>{console.error(t)})},async addPayment(){console.log("HOLA")}},mounted(){this.fetchActivePlanStudents(),this.fetchPaymentMethods()}},A=Object.assign(P,{__name:"Create",emits:["family-created"],setup(t,{emit:g}){return p(""),(a,l)=>(y(),f(c,{title:"Pagar",hasCancel:!0,class:"bg-gray-500 slide-in-top my-2"},{default:i(()=>[h(" Faltan S/"+_(t.activePlan.total-t.activePlan.total_payed)+" ",1),n(m,{label:"Alumno"},{default:i(()=>[n(d,{icon:s(o),type:"select",options:a.active_students.map(e=>({label:e.name,value:e.id})),modelValue:a.selectedStudent,"onUpdate:modelValue":l[0]||(l[0]=e=>a.selectedStudent=e)},null,8,["icon","options","modelValue"])]),_:1}),n(m,{label:"Pago"},{default:i(()=>[n(d,{icon:s(o),type:"select",options:a.payment_methods.map(e=>({label:e.name,value:e.name})),modelValue:a.selectedPaymentMethod,"onUpdate:modelValue":l[1]||(l[1]=e=>a.selectedPaymentMethod=e)},null,8,["icon","options","modelValue"]),n(d,{icon:s(o),placeholder:"Total a Pagar",modelValue:a.payment.total_payed,"onUpdate:modelValue":l[2]||(l[2]=e=>a.payment.total_payed=e),type:"number"},null,8,["icon","modelValue"])]),_:1}),n(u,{icon:s(o),label:"Pagar",class:"bg-green-300",target:"_blank","rounded-full":"",color:"",onClick:a.addPayment},null,8,["icon","onClick"])]),_:1}))}});export{A as default};
