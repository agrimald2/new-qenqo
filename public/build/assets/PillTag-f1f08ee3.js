import{f as o,c}from"./colors-ea023820.js";import{_ as r}from"./BaseIcon-9a2ca4ad.js";import{o as a,f as i,c as s,n as t,e as m,d as u,t as d,h as p}from"./app-9f2eb8dd.js";const f={__name:"PillTagPlain",props:{label:{type:String,required:!0},icon:{type:String,default:null},small:Boolean},setup(l){return(e,n)=>(a(),i("div",{class:t(["inline-flex items-center capitalize leading-none",[l.small?"text-xs":"text-sm"]])},[l.icon?(a(),s(r,{key:0,path:l.icon,h:"h-4",w:"w-4",class:t(l.small?"mr-1":"mr-2"),size:l.small?14:null},null,8,["path","class","size"])):m("",!0),u("span",null,d(l.label),1)],2))}},b={__name:"PillTag",props:{label:{type:String,required:!0},color:{type:String,required:!0},icon:{type:String,default:null},small:Boolean,outline:Boolean},setup(l){const e=l,n=p(()=>[e.small?"py-1 px-3":"py-1.5 px-4",e.outline?o[e.color]:c[e.color]]);return(g,x)=>(a(),s(f,{class:t(["border rounded-full",n.value]),icon:l.icon,label:l.label,small:l.small},null,8,["class","icon","label","small"]))}};export{b as _};
