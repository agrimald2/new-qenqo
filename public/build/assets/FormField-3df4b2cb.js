import{B as d,h as i,o as s,f as a,t as o,e as r,d as u,s as m,n as f}from"./app-8697b0b7.js";const b={class:"mb-6 last:mb-0"},h=["for"],g={key:1,class:"text-xs text-gray-500 dark:text-slate-400 mt-1"},y={__name:"FormField",props:{label:{type:String,default:null},labelFor:{type:String,default:null},help:{type:String,default:null}},setup(e){const n=d(),c=i(()=>{const t=[],l=n.default().length;return l>1&&t.push("grid grid-cols-1 gap-3"),l===2&&t.push("md:grid-cols-2"),t});return(t,l)=>(s(),a("div",b,[e.label?(s(),a("label",{key:0,for:e.labelFor,class:"block font-bold mb-2"},o(e.label),9,h)):r("",!0),u("div",{class:f(c.value)},[m(t.$slots,"default")],2),e.help?(s(),a("div",g,o(e.help),1)):r("",!0)]))}};export{y as _};
