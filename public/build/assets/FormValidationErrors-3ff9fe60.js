import{y as u,o as t,f as a,d as c,z as l,q as i,u as d,h as n,Q as g,c as f,w as k,F as h,i as x,t as y,e as v}from"./app-2f728894.js";import{g as w,a as S,b,c as B}from"./BaseButton-6ed89792.js";const $={class:"bg-gray-50 dark:bg-slate-800 dark:text-slate-100"},L={__name:"LayoutGuest",setup(r){const e=u();return(s,o)=>(t(),a("div",{class:i({dark:d(e).darkMode})},[c("div",$,[l(s.$slots,"default")])],2))}},N={__name:"SectionFullScreen",props:{bg:{type:String,required:!0,validator:r=>["purplePink","pinkRed"].includes(r)}},setup(r){const e=r,s=n(()=>{if(u().darkMode)return w;switch(e.bg){case"purplePink":return b;case"pinkRed":return S}return""});return(o,p)=>(t(),a("div",{class:i(["flex min-h-screen items-center justify-center",s.value])},[l(o.$slots,"default",{cardClass:"w-11/12 md:w-7/12 lg:w-6/12 xl:w-4/12 shadow-2xl"})],2))}},C={class:"flex flex-col mb-6 -mt-6 -mr-6 -ml-6 animate-fade-in"},P={__name:"NotificationBarInCard",props:{color:{type:String,required:!0}},setup(r){return(e,s)=>(t(),a("div",C,[c("div",{class:i([[d(B)[r.color]],"rounded-t-2xl flex flex-col p-6 transition-colors"])},[l(e.$slots,"default")],2)]))}},F=c("b",null,"Whoops! Something went wrong.",-1),R={__name:"FormValidationErrors",setup(r){const e=n(()=>g().props.errors),s=n(()=>Object.keys(e.value).length>0);return(o,p)=>s.value?(t(),f(P,{key:0,color:"danger"},{default:k(()=>[F,(t(!0),a(h,null,x(e.value,(_,m)=>(t(),a("span",{key:m},y(_),1))),128))]),_:1})):v("",!0)}};export{L as _,R as a,N as b,P as c};