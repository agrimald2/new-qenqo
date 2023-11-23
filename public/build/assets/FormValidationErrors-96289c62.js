import{q as u,o as t,f as a,d as c,s as l,n as i,u as d,h as o,Q as g,c as f,w as k,F as h,i as x,t as y,e as v}from"./app-9f2eb8dd.js";import{g as w,a as S,b,c as B}from"./colors-ea023820.js";const $={class:"bg-gray-50 dark:bg-slate-800 dark:text-slate-100"},L={__name:"LayoutGuest",setup(r){const e=u();return(s,n)=>(t(),a("div",{class:i({dark:d(e).darkMode})},[c("div",$,[l(s.$slots,"default")])],2))}},N={__name:"SectionFullScreen",props:{bg:{type:String,required:!0,validator:r=>["purplePink","pinkRed"].includes(r)}},setup(r){const e=r,s=o(()=>{if(u().darkMode)return w;switch(e.bg){case"purplePink":return b;case"pinkRed":return S}return""});return(n,p)=>(t(),a("div",{class:i(["flex min-h-screen items-center justify-center",s.value])},[l(n.$slots,"default",{cardClass:"w-11/12 md:w-7/12 lg:w-6/12 xl:w-4/12 shadow-2xl"})],2))}},C={class:"flex flex-col mb-6 -mt-6 -mr-6 -ml-6 animate-fade-in"},P={__name:"NotificationBarInCard",props:{color:{type:String,required:!0}},setup(r){return(e,s)=>(t(),a("div",C,[c("div",{class:i([[d(B)[r.color]],"rounded-t-2xl flex flex-col p-6 transition-colors"])},[l(e.$slots,"default")],2)]))}},F=c("b",null,"Whoops! Something went wrong.",-1),R={__name:"FormValidationErrors",setup(r){const e=o(()=>g().props.errors),s=o(()=>Object.keys(e.value).length>0);return(n,p)=>s.value?(t(),f(P,{key:0,color:"danger"},{default:k(()=>[F,(t(!0),a(h,null,x(e.value,(_,m)=>(t(),a("span",{key:m},y(_),1))),128))]),_:1})):v("",!0)}};export{L as _,R as a,N as b,P as c};
