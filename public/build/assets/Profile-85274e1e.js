import{r as k,h as R,A as F,o as p,f as q,d,b as e,q as A,t as N,e as P,c as _,w as l,j as U,u as f,K as g,a as y,s as $}from"./app-2f728894.js";import{u as j}from"./main-d5a75c4a.js";import{C as B,D as T,e as C,E as x,i as I}from"./mdi-7f5f296a.js";import{d as D,_ as z,a as E,b as M}from"./SectionTitleLineWithButton-d9214d76.js";import{_ as w}from"./CardBox-325a539e.js";import{_ as m}from"./FormField-8338db07.js";import{_ as c}from"./FormControl-572480f0.js";import{_ as V}from"./BaseButton-6ed89792.js";import{_ as S}from"./BaseButtons-ae752e25.js";import{_ as O}from"./BaseLevel-39bb96ac.js";import{_ as K}from"./FormCheckRadio-091af855.js";import{_ as G}from"./PillTag-02e13e6e.js";import"./UserAvatar-925a527e.js";import"./BaseDivider-145786df.js";import"./OverlayLayer-1bc04f10.js";import"./_plugin-vue_export-helper-c27b6911.js";const H={class:"flex items-stretch justify-start relative"},J={class:"inline-flex"},L=["accept"],Q={key:0,class:"px-4 py-2 bg-gray-100 dark:bg-slate-800 border-gray-200 dark:border-slate-700 border rounded-r"},W={class:"text-ellipsis line-clamp-1"},X={__name:"FormFilePicker",props:{modelValue:{type:[Object,File,Array],default:null},label:{type:String,default:null},icon:{type:String,default:B},accept:{type:String,default:null},color:{type:String,default:"info"},isRoundIcon:Boolean},emits:["update:modelValue"],setup(o,{emit:i}){const n=o,u=k(null),r=k(n.modelValue),b=R(()=>!n.isRoundIcon&&r.value),h=R(()=>n.modelValue);F(h,t=>{r.value=t,t||(u.value.input.value=null)});const v=t=>{const s=t.target.files||t.dataTransfer.files;r.value=s[0],i("update:modelValue",r.value)};return(t,s)=>(p(),q("div",H,[d("label",J,[e(V,{as:"a",class:A({"w-12 h-12":o.isRoundIcon,"rounded-r-none":b.value}),"icon-size":o.isRoundIcon?24:void 0,label:o.isRoundIcon?null:o.label,icon:o.icon,color:o.color,"rounded-full":o.isRoundIcon},null,8,["class","icon-size","label","icon","color","rounded-full"]),d("input",{ref_key:"root",ref:u,type:"file",class:"absolute top-0 left-0 w-full h-full opacity-0 outline-none cursor-pointer -z-1",accept:o.accept,onInput:v},null,40,L)]),b.value?(p(),q("div",Q,[d("span",W,N(r.value.name),1)])):P("",!0)]))}},Y={class:"space-y-3 text-center md:text-left lg:mx-12"},Z={class:"flex justify-center md:block"},ee={class:"text-2xl"},oe={class:"flex justify-center md:block"},le={__name:"UserCard",props:{user:Array},setup(o){const i=j();R(()=>i.userName);const n=k(!1);return(u,r)=>(p(),_(w,null,{default:l(()=>[e(O,{type:"justify-around lg:justify-center"},{default:l(()=>[e(D,{class:"lg:mx-12"}),d("div",Y,[d("div",Z,[e(K,{modelValue:n.value,"onUpdate:modelValue":r[0]||(r[0]=b=>n.value=b),name:"notifications-switch",type:"switch",label:"Notifications","input-value":!0},null,8,["modelValue"])]),d("h1",ee,[U(" Bienvenido, "),d("b",null,N(o.user.name),1),U("! ")]),d("p",null,[d("b",null,N(o.user.role.name),1)]),d("div",oe,[e(G,{label:"Verified",color:"info",icon:f(T)},null,8,["icon"])])])]),_:1})]),_:1}))}},ae={class:"grid grid-cols-1 lg:grid-cols-2 gap-6"},te={data(){return{trainers:[]}},methods:{fetchTrainers(){y.get("/api/getTrainers").then(o=>{this.trainers=o.data}).catch(o=>{console.error(o)})}},mounted(){this.fetchTrainers()}},ve=Object.assign(te,{__name:"Profile",props:{user:Array},setup(o){const i=o;j();const n=g({user_id:i.user.id,name:i.user.name,username:i.user.username,dni:i.user.dni,phone:i.user.phone}),u=g({user_id:i.user.id,password:""}),r=g({user_id:i.user.id,reffered_by:i.user.role_id===3?i.user.student.reffered_by:null}),b=()=>{y.put(`/api/user/${n.user_id}/information`,n).then(t=>{window.location.reload()}).catch(t=>{console.log(t)})},h=()=>{y.put(`/api/user/${u.user_id}/password`,u).then(t=>{window.location.reload()}).catch(t=>{console.log(t)})},v=()=>{r.reffered_by=r.reffered_by.value,y.put(`/api/student/${u.user_id}/updateRefferedBy`,r).then(t=>{window.location.reload()}).catch(t=>{console.log(t)})};return(t,s)=>(p(),_(z,null,{default:l(()=>[e(M,null,{default:l(()=>[e(E,{icon:f(C),title:"Profile",main:""},null,8,["icon"]),e(le,{class:"mb-6",user:o.user},null,8,["user"]),d("div",ae,[e(w,{"is-form":"",onSubmit:$(b,["prevent"])},{footer:l(()=>[e(S,null,{default:l(()=>[e(V,{color:"info",type:"submit",label:"Submit"})]),_:1})]),default:l(()=>[e(m,{label:"Avatar",help:"Max 500kb"},{default:l(()=>[e(X,{label:"Upload"})]),_:1}),e(m,{label:"Name",help:"Required. Nombre"},{default:l(()=>[e(c,{modelValue:n.name,"onUpdate:modelValue":s[0]||(s[0]=a=>n.name=a),icon:f(C),name:"name",required:"",autocomplete:"name"},null,8,["modelValue","icon"])]),_:1}),e(m,{label:"Username",help:"Required. Nombre de usuario"},{default:l(()=>[e(c,{modelValue:n.username,"onUpdate:modelValue":s[1]||(s[1]=a=>n.username=a),icon:f(x),type:"text",name:"username",required:"",autocomplete:"username"},null,8,["modelValue","icon"])]),_:1}),e(m,{label:"DNI",help:"Required. DNI"},{default:l(()=>[e(c,{modelValue:n.dni,"onUpdate:modelValue":s[2]||(s[2]=a=>n.dni=a),icon:f(x),type:"text",name:"dni",required:"",autocomplete:"dni"},null,8,["modelValue","icon"])]),_:1}),e(m,{label:"Celular",help:"Required. Celular"},{default:l(()=>[e(c,{modelValue:n.phone,"onUpdate:modelValue":s[3]||(s[3]=a=>n.phone=a),icon:f(x),type:"text",name:"phone",required:"",autocomplete:"phone"},null,8,["modelValue","icon"])]),_:1})]),_:1},8,["onSubmit"]),e(w,{"is-form":"",onSubmit:$(h,["prevent"])},{footer:l(()=>[e(S,null,{default:l(()=>[e(V,{type:"submit",color:"info",label:"Submit"})]),_:1})]),default:l(()=>[e(m,{label:"New password",help:"Required. New password"},{default:l(()=>[e(c,{modelValue:u.password,"onUpdate:modelValue":s[4]||(s[4]=a=>u.password=a),icon:f(I),name:"password",type:"password",required:"",autocomplete:"new-password"},null,8,["modelValue","icon"])]),_:1}),e(m,{label:"Confirm password",help:"Required. New password one more time"},{default:l(()=>[e(c,{modelValue:u.password_confirmation,"onUpdate:modelValue":s[5]||(s[5]=a=>u.password_confirmation=a),icon:f(I),name:"password_confirmation",type:"password",required:"",autocomplete:"new-password"},null,8,["modelValue","icon"])]),_:1})]),_:1},8,["onSubmit"]),o.user.role_id===3&&o.user.student?(p(),_(w,{key:0,"is-form":"",onSubmit:$(v,["prevent"])},{footer:l(()=>[e(S,null,{default:l(()=>[e(V,{type:"submit",color:"info",label:"Submit"})]),_:1})]),default:l(()=>[o.user.student.referred_by?(p(),_(m,{key:0,label:"Referido por: "+o.user.student.referred_by.name,help:"Cambair Entrenador"},{default:l(()=>[e(c,{icon:t.mdiPlusCircle,type:"select",options:t.trainers.map(a=>({label:a.user.name,value:a.user.id})),modelValue:r.reffered_by,"onUpdate:modelValue":s[6]||(s[6]=a=>r.reffered_by=a)},null,8,["icon","options","modelValue"])]),_:1},8,["label"])):(p(),_(m,{key:1,help:"Añadir Entrenador"},{default:l(()=>[e(c,{icon:t.mdiPlusCircle,type:"select",options:t.trainers.map(a=>({label:a.user.name,value:a.user.id})),modelValue:r.reffered_by,"onUpdate:modelValue":s[7]||(s[7]=a=>r.reffered_by=a)},null,8,["icon","options","modelValue"])]),_:1}))]),_:1},8,["onSubmit"])):P("",!0)])]),_:1})]),_:1}))}});export{ve as default};
