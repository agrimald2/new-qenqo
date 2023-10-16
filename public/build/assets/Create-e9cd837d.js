import{_ as P}from"./CardBox-639f5196.js";import{_ as v}from"./BaseButton-621d7276.js";import{m as i}from"./mdi-4cce4133.js";import{_ as s}from"./FormField-c50aa728.js";import{_ as d}from"./FormControl-21eaae75.js";import{o as u,c as p,w as n,a as c,b as o,u as r,f as b,e as m,d as f}from"./app-8407c33d.js";import"./main-f4bc4e72.js";const g={key:0,class:"grid sm:grid-cols-3 col gap-4"},C={class:"grid sm:grid-cols-3 col gap-4"},V={props:["families"],data(){return{activePlan:{name:"",rate_id:"",start_date:"",end_date:"",subtotal:"",total:"",discount_code:"",people_number:""},rates:[],rates_options:[],selectedRate:null,selectedDiscountCode:null}},computed:{isFormValid(){let t={...this.activePlan};return delete t.discount_code,Object.values(t).every(e=>e!=="")}},components:[],methods:{async submit(){try{const t={...this.activePlan,rate_id:this.activePlan.rate_id.id};await c.post("/activePlans",t),this.$emit("active-plan-created")}catch(t){console.error(t)}},async fetchRates(){try{const t=await c.get("/api/rates");this.rates=t.data,this.rates_options=t.data.map(e=>({id:e.id,label:e.name}))}catch(t){console.error(t)}},updateSelectedRate(){this.selectedRate=this.rates.find(t=>t.id===this.activePlan.rate_id.id),this.getTotalAndSubtotal()},updateStartDate(){const t=new Date(this.activePlan.start_date);t.setDate(t.getDate()+this.selectedRate.days_duration),this.activePlan.end_date=t.toISOString().substring(0,10)},async updateDiscountCode(){try{const t=await c.get(`/api/discountCodes/${this.activePlan.discount_code}`);this.selectedDiscountCode=t.data,this.getTotalAndSubtotal()}catch{this.selectedDiscountCode=null}},updatePeopleNumber(){this.getTotalAndSubtotal()},getTotalAndSubtotal(){const t=this.selectedRate.price,e=this.activePlan.people_number,l=this.selectedRate.rate_type_id,a=this.selectedDiscountCode;if(this.activePlan.subtotal=l==1?t*e:t,this.activePlan.total=this.activePlan.subtotal,a){let h=Math.min(this.activePlan.subtotal*a.percentage/100,a.max_discount);this.activePlan.total-=h}}},mounted(){this.fetchRates()}},U=Object.assign(V,{__name:"Create",setup(t){return(e,l)=>(u(),p(P,{title:"Crear Tarifa",hasCancel:"",class:"bg-gray-500 slide-in-top my-2"},{default:n(()=>[o(s,{label:"Elije la tarifa"},{default:n(()=>[o(d,{icon:r(i),type:"select",options:e.rates_options,modelValue:e.activePlan.rate_id,"onUpdate:modelValue":l[0]||(l[0]=a=>e.activePlan.rate_id=a),onChange:e.updateSelectedRate},null,8,["icon","options","modelValue","onChange"]),o(d,{icon:r(i),placeholder:"Nombre de la tarifa",modelValue:e.activePlan.name,"onUpdate:modelValue":l[1]||(l[1]=a=>e.activePlan.name=a)},null,8,["icon","modelValue"]),e.selectedRate?(u(),b("div",g,[o(s,{help:"MIN: "+e.selectedRate.min_people+" - MAX: "+e.selectedRate.max_people,onChange:e.updatePeopleNumber},{default:n(()=>[o(d,{icon:r(i),placeholder:"N° Personas",type:"number",modelValue:e.activePlan.people_number,"onUpdate:modelValue":l[2]||(l[2]=a=>e.activePlan.people_number=a)},null,8,["icon","modelValue"])]),_:1},8,["help","onChange"]),o(s,{help:"Máximo: "+e.selectedRate.days_duration+" días",onChange:e.updateStartDate},{default:n(()=>[o(d,{type:"date",modelValue:e.activePlan.start_date,"onUpdate:modelValue":l[3]||(l[3]=a=>e.activePlan.start_date=a)},null,8,["modelValue"])]),_:1},8,["help","onChange"]),o(s,{help:"Máximo: "+e.selectedRate.days_duration+" días"},{default:n(()=>[o(d,{type:"date",modelValue:e.activePlan.end_date,"onUpdate:modelValue":l[4]||(l[4]=a=>e.activePlan.end_date=a)},null,8,["modelValue"])]),_:1},8,["help"])])):m("",!0)]),_:1}),e.selectedRate?(u(),p(s,{key:0,label:"Costo de la tarifa: "+e.selectedRate.rate_type.name,help:"Elige el tipo de tarifa"},{default:n(()=>[f("div",C,[o(s,{help:"Código de descuento del entrenador",onChange:e.updateDiscountCode},{default:n(()=>[o(d,{icon:r(i),placeholder:"Cod Descuento",type:"text",modelValue:e.activePlan.discount_code,"onUpdate:modelValue":l[5]||(l[5]=a=>e.activePlan.discount_code=a)},null,8,["icon","modelValue"])]),_:1},8,["onChange"]),o(s,{help:"Costo de todo el grupo sin descuento"},{default:n(()=>[o(d,{icon:r(i),placeholder:"SubTotal",type:"number",modelValue:e.activePlan.subtotal,"onUpdate:modelValue":l[6]||(l[6]=a=>e.activePlan.subtotal=a)},null,8,["icon","modelValue"])]),_:1}),o(s,{help:"Monto a pagar total"},{default:n(()=>[o(d,{icon:r(i),placeholder:"Total",type:"number",modelValue:e.activePlan.total,"onUpdate:modelValue":l[7]||(l[7]=a=>e.activePlan.total=a),help:"Please enter your password to confirm"},null,8,["icon","modelValue"])]),_:1})])]),_:1},8,["label"])):m("",!0),o(v,{onClick:e.submit,icon:r(i),label:"Guardar",class:"bg-gray-300","rounded-full":"",disabled:!e.isFormValid},null,8,["onClick","icon","disabled"])]),_:1}))}});export{U as default};