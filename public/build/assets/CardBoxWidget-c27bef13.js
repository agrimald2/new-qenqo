import{y as x,z as h,A as b,B as _}from"./mdi-7f5f296a.js";import{_ as w}from"./CardBox-325a539e.js";import{n as S}from"./numeral-68028780.js";import{r as T,h as d,A as C,p as k,o as n,f as B,t as u,c as i,w as c,b as r,u as N,e as g,d as f,q as $}from"./app-2f728894.js";import{_ as V,e as D}from"./BaseButton-6ed89792.js";import{_ as v}from"./BaseLevel-39bb96ac.js";import{_ as z}from"./PillTag-02e13e6e.js";const A={__name:"NumberDynamic",props:{prefix:{type:String,default:null},suffix:{type:String,default:null},value:{type:Number,default:0},duration:{type:Number,default:500}},setup(e){const l=e,t=T(0),m=d(()=>t.value<1e3?t.value:S(t.value).format("0,0")),a=d(()=>l.value),y=s=>{const o=Math.ceil(t.value+s);if(o>a.value)return t.value=a.value,!1;t.value=o,setTimeout(()=>{y(s)},25)},p=()=>{t.value=0,y(l.value/(l.duration/25))};return C(a,()=>{p()}),k(()=>{p()}),(s,o)=>(n(),B("div",null,u(e.prefix)+u(m.value)+u(e.suffix),1))}},q={__name:"PillTagTrend",props:{trend:{type:String,required:!0},trendType:{type:String,default:null},small:Boolean},setup(e){const l=e,t=d(()=>l.trendType==="up"?{icon:x,style:"success"}:l.trendType==="down"?{icon:h,style:"danger"}:l.trendType==="alert"?{icon:b,style:"warning"}:{style:"info"});return(m,a)=>(n(),i(z,{label:e.trend,color:t.value.style,icon:t.value.icon,small:e.small},null,8,["label","color","icon","small"]))}},M={class:"text-lg leading-tight text-gray-500 dark:text-slate-400"},E={class:"text-3xl leading-tight font-semibold"},G={__name:"CardBoxWidget",props:{number:{type:Number,default:0},icon:{type:String,default:null},prefix:{type:String,default:null},suffix:{type:String,default:null},label:{type:String,default:null},color:{type:String,default:null},trend:{type:String,default:null},trendType:{type:String,default:null}},setup(e){return(l,t)=>(n(),i(w,null,{default:c(()=>[e.trend?(n(),i(v,{key:0,class:"mb-3",mobile:""},{default:c(()=>[r(q,{trend:e.trend,"trend-type":e.trendType,small:""},null,8,["trend","trend-type"]),r(V,{icon:N(_),"icon-w":"w-4","icon-h":"h-4",color:"lightDark",small:""},null,8,["icon"])]),_:1})):g("",!0),r(v,{mobile:""},{default:c(()=>[f("div",null,[f("h3",M,u(e.label),1),f("h1",E,[r(A,{value:e.number,prefix:e.prefix,suffix:e.suffix},null,8,["value","prefix","suffix"])])]),e.icon?(n(),i(D,{key:0,path:e.icon,size:"48",w:"",h:"h-16",class:$(e.color)},null,8,["path","class"])):g("",!0)]),_:1})]),_:1}))}};export{G as _};