import{h as n,o as s,f as g,d as k,s as w,n as b,l as y,c as u,w as v,e as c,t as x,z as f}from"./app-edd78ba7.js";const h="bg-gradient-to-tr",C=`${h} from-purple-400 via-pink-500 to-red-500`,N=`${h} from-slate-700 via-slate-900 to-slate-800`,$=`${h} from-pink-400 via-red-500 to-yellow-500`,F={white:"bg-white text-black",light:"bg-white text-black dark:bg-slate-900/70 dark:text-white",contrast:"bg-gray-800 text-white dark:bg-white dark:text-black",success:"bg-emerald-500 border-emerald-500 text-white",danger:"bg-red-500 border-red-500 text-white",warning:"bg-yellow-500 border-yellow-500 text-white",info:"bg-blue-500 border-blue-500 text-white"},l={white:"text-black dark:text-slate-100",light:"text-gray-700 dark:text-slate-400",contrast:"dark:text-white",success:"text-emerald-500",danger:"text-red-500",warning:"text-yellow-500",info:"text-blue-500"},H={white:[l.white,"border-gray-100"],light:[l.light,"border-gray-100"],contrast:[l.contrast,"border-gray-900 dark:border-slate-100"],success:[l.success,"border-emerald-500"],danger:[l.danger,"border-red-500"],warning:[l.warning,"border-yellow-500"],info:[l.info,"border-blue-500"]},m=(r,e,o,d=!1)=>{const t={ring:{white:"ring-gray-200 dark:ring-gray-500",whiteDark:"ring-gray-200 dark:ring-gray-500",lightDark:"ring-gray-200 dark:ring-gray-500",contrast:"ring-gray-300 dark:ring-gray-400",success:"ring-emerald-300 dark:ring-emerald-700",danger:"ring-red-300 dark:ring-red-700",warning:"ring-yellow-300 dark:ring-yellow-700",info:"ring-blue-300 dark:ring-blue-700"},active:{white:"bg-gray-100",whiteDark:"bg-gray-100 dark:bg-slate-800",lightDark:"bg-gray-200 dark:bg-slate-700",contrast:"bg-gray-700 dark:bg-slate-100",success:"bg-emerald-700 dark:bg-emerald-600",danger:"bg-red-700 dark:bg-red-600",warning:"bg-yellow-700 dark:bg-yellow-600",info:"bg-blue-700 dark:bg-blue-600"},bg:{white:"bg-white text-black",whiteDark:"bg-white text-black dark:bg-slate-900 dark:text-white",lightDark:"bg-gray-100 text-black dark:bg-slate-800 dark:text-white",contrast:"bg-gray-800 text-white dark:bg-white dark:text-black",success:"bg-emerald-600 dark:bg-emerald-500 text-white",danger:"bg-red-600 dark:bg-red-500 text-white",warning:"bg-yellow-600 dark:bg-yellow-500 text-white",info:"bg-blue-600 dark:bg-blue-500 text-white"},bgHover:{white:"hover:bg-gray-100",whiteDark:"hover:bg-gray-100 hover:dark:bg-slate-800",lightDark:"hover:bg-gray-200 hover:dark:bg-slate-700",contrast:"hover:bg-gray-700 hover:dark:bg-slate-100",success:"hover:bg-emerald-700 hover:border-emerald-700 hover:dark:bg-emerald-600 hover:dark:border-emerald-600",danger:"hover:bg-red-700 hover:border-red-700 hover:dark:bg-red-600 hover:dark:border-red-600",warning:"hover:bg-yellow-700 hover:border-yellow-700 hover:dark:bg-yellow-600 hover:dark:border-yellow-600",info:"hover:bg-blue-700 hover:border-blue-700 hover:dark:bg-blue-600 hover:dark:border-blue-600"},borders:{white:"border-white",whiteDark:"border-white dark:border-slate-900",lightDark:"border-gray-100 dark:border-slate-800",contrast:"border-gray-800 dark:border-white",success:"border-emerald-600 dark:border-emerald-500",danger:"border-red-600 dark:border-red-500",warning:"border-yellow-600 dark:border-yellow-500",info:"border-blue-600 dark:border-blue-500"},text:{contrast:"dark:text-slate-100",success:"text-emerald-600 dark:text-emerald-500",danger:"text-red-600 dark:text-red-500",warning:"text-yellow-600 dark:text-yellow-500",info:"text-blue-600 dark:text-blue-500"},outlineHover:{contrast:"hover:bg-gray-800 hover:text-gray-100 hover:dark:bg-slate-100 hover:dark:text-black",success:"hover:bg-emerald-600 hover:text-white hover:text-white hover:dark:text-white hover:dark:border-emerald-600",danger:"hover:bg-red-600 hover:text-white hover:text-white hover:dark:text-white hover:dark:border-red-600",warning:"hover:bg-yellow-600 hover:text-white hover:text-white hover:dark:text-white hover:dark:border-yellow-600",info:"hover:bg-blue-600 hover:text-white hover:dark:text-white hover:dark:border-blue-600"}};if(!t.bg[r])return r;const i=e&&["white","whiteDark","lightDark"].indexOf(r)<0,a=[t.borders[r],t.ring[r]];return d?a.push(t.active[r]):a.push(i?t.text[r]:t.bg[r]),o&&a.push(i?t.outlineHover[r]:t.bgHover[r]),a},p=["width","height"],B=["d"],S={__name:"BaseIcon",props:{path:{type:String,required:!0},w:{type:String,default:"w-6"},h:{type:String,default:"h-6"},size:{type:[String,Number],default:null}},setup(r){const e=r,o=n(()=>`inline-flex justify-center items-center ${e.w} ${e.h}`),d=n(()=>e.size??16);return(t,i)=>(s(),g("span",{class:b(o.value)},[(s(),g("svg",{viewBox:"0 0 24 24",width:d.value,height:d.value,class:"inline-block"},[k("path",{fill:"currentColor",d:r.path},null,8,B)],8,p)),w(t.$slots,"default")],2))}},P={__name:"BaseButton",props:{label:{type:[String,Number],default:null},icon:{type:String,default:null},iconSize:{type:[String,Number],default:null},href:{type:String,default:null},target:{type:String,default:null},routeName:{type:String,default:null},type:{type:String,default:null},color:{type:String,default:"white"},as:{type:String,default:null},small:Boolean,outline:Boolean,active:Boolean,disabled:Boolean,roundedFull:Boolean},setup(r){const e=r,o=n(()=>e.as?e.as:e.routeName?y:e.href?"a":"button"),d=n(()=>o.value==="button"?e.type??"button":null),t=n(()=>e.small&&e.icon?"px-1":"px-2"),i=n(()=>{const a=["inline-flex","justify-center","items-center","whitespace-nowrap","focus:outline-none","transition-colors","focus:ring","duration-150","border",e.disabled?"cursor-not-allowed":"cursor-pointer",e.roundedFull?"rounded-full":"rounded",m(e.color,e.outline,!e.disabled,e.active)];return!e.label&&e.icon?a.push("p-1"):e.small?a.push("text-sm",e.roundedFull?"px-3 py-1":"p-1"):a.push("py-2",e.roundedFull?"px-6":"px-3"),e.disabled&&a.push(e.outline?"opacity-50":"opacity-70"),a});return(a,D)=>(s(),u(f(o.value),{class:b(i.value),href:r.routeName?a.route(r.routeName):r.href,type:d.value,target:r.target,disabled:r.disabled},{default:v(()=>[r.icon?(s(),u(S,{key:0,path:r.icon,size:r.iconSize},null,8,["path","size"])):c("",!0),r.label?(s(),g("span",{key:1,class:b(t.value)},x(r.label),3)):c("",!0)]),_:1},8,["class","href","type","target","disabled"]))}};export{P as _,$ as a,C as b,F as c,H as d,S as e,m as f,N as g,l as h};
