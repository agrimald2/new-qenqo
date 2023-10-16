import{o as s,f as g,q as x,n as o,u as l,I as U,c as f,w as p,h,l as O,p as A,r as C,z as Q,J as K,d as u,e as b,t as L,b as d,y as F,i as H,F as z,k as S,v as Y,E as X,j as N,O as P,a as Z,A as ee}from"./app-6b06a1ff.js";import{F as te,G as D,H as ae,I as le,J as se,K as ne,L as ie,A as T,M as re,a as I,N as V,x as oe,y as ce,i as G,O as ue,P as me,Q as de,R as fe,S as ge,T as he}from"./mdi-4495b453.js";import{u as q}from"./main-b394c98d.js";import{e as k,f as ve,c as pe,h as ke,_ as ye}from"./BaseButton-658c245b.js";import{_ as be}from"./FormControl-d4b13909.js";import{_ as xe}from"./UserAvatar-48a01a09.js";import{_ as we}from"./BaseDivider-a16e8916.js";import{_ as _e}from"./OverlayLayer-dd9a136b.js";import{_ as Ce}from"./BaseLevel-0f9b1ded.js";const Ze={__name:"SectionMain",setup(t){return(a,e)=>(s(),g("section",{class:o(["p-6",l(U)])},[x(a.$slots,"default")],2))}},Ae=[{href:"/dashboard",icon:te,label:"Dashboard"},{href:"/activePlans",label:"Grupos y Planes",icon:D},{href:"/rates",label:"Planes",icon:D},{label:"Usuarios",icon:ae,menu:[{label:"Administradores",href:"/users/admin",icon:le},{label:"Entrenadores",href:"/users/trainers",icon:se},{label:"Nutricionistas",href:"/users/nutricionists",icon:ne},{label:"Estudiantes",href:"/students",icon:ie}]},{label:"Configuraciones",icon:T,menu:[{label:"Métodos de Pago",href:"/users/admin",icon:re},{label:"Roles",href:"/trainers",icon:I},{label:"Roles",href:"/trainers",icon:I},{label:"Estados de Asistencia",href:"/",icon:I}]},{href:"/",label:"Cod. Descuento",icon:D}],$e=[{isCurrentUser:!0,getUser:"/myProfile",href:"/myProfile"},{icon:V,label:"Log out",isDesktopNoLabel:!0,isLogout:!0}],Se={__name:"UserAvatarCurrentUser",setup(t){const a=q();return(e,n)=>(s(),f(xe,{username:l(a).userName,avatar:l(a).userAvatar},{default:p(()=>[x(e.$slots,"default")]),_:3},8,["username","avatar"]))}},Le={__name:"NavBarItem",props:{item:{type:Object,required:!0}},emits:["menu-click"],setup(t,{emit:a}){const e=t,n=h(()=>e.item.getUser?e.item.getUser:e.item.route?route(e.item.route):e.item.href),i=h(()=>e.item.href?"a":e.item.route?O:"div"),c=A(),r=h(()=>{const y=[v.value?`${c.navBarItemLabelActiveColorStyle} dark:text-slate-400`:`${c.navBarItemLabelStyle} dark:text-white dark:hover:text-slate-400 ${c.navBarItemLabelHoverStyle}`,e.item.menu?"lg:py-2 lg:px-3":"py-2 px-3"];return e.item.isDesktopNoLabel&&y.push("lg:w-16","lg:justify-center"),y}),m=h(()=>e.item.isCurrentUser?q().userName:e.item.label),v=C(!1),w=y=>{a("menu-click",y,e.item),e.item.menu&&(v.value=!v.value)},M=(y,E)=>{a("menu-click",y,E)},_=C(null),B=y=>{_.value&&!_.value.contains(y.target)&&(v.value=!1)};return Q(()=>{e.item.menu&&window.addEventListener("click",B)}),K(()=>{e.item.menu&&window.removeEventListener("click",B)}),(y,E)=>t.item.isDivider?(s(),f(we,{key:0,"nav-bar":""})):(s(),f(F(i.value),{key:1,ref_key:"root",ref:_,class:o(["block lg:flex items-center relative cursor-pointer",r.value]),href:n.value,target:t.item.target??null,onClick:w},{default:p(()=>[u("div",{class:o(["flex items-center",{"bg-gray-100 dark:bg-slate-800 lg:bg-transparent lg:dark:bg-transparent p-3 lg:p-0":t.item.menu}])},[t.item.isCurrentUser?(s(),f(Se,{key:0,class:"w-6 h-6 mr-3 inline-flex"})):b("",!0),t.item.icon?(s(),f(k,{key:1,path:t.item.icon,class:"transition-colors"},null,8,["path"])):b("",!0),u("span",{class:o(["px-2 transition-colors",{"lg:hidden":t.item.isDesktopNoLabel&&t.item.icon}])},L(m.value),3),t.item.menu?(s(),f(k,{key:2,path:v.value?l(oe):l(ce),class:"hidden lg:inline-flex transition-colors"},null,8,["path"])):b("",!0)],2),t.item.menu?(s(),g("div",{key:0,class:o(["text-sm border-b border-gray-100 lg:border lg:bg-white lg:absolute lg:top-full lg:left-0 lg:min-w-full lg:z-20 lg:rounded-lg lg:shadow-lg lg:dark:bg-slate-800 dark:border-slate-700",{"lg:hidden":!v.value}])},[d(R,{menu:t.item.menu,onMenuClick:M},null,8,["menu"])],2)):b("",!0)]),_:1},8,["class","href","target"]))}},R={__name:"NavBarMenuList",props:{menu:{type:Array,default:()=>[]}},emits:["menu-click"],setup(t,{emit:a}){const e=(n,i)=>{a("menu-click",n,i)};return(n,i)=>(s(!0),g(z,null,H(t.menu,(c,r)=>(s(),f(Le,{key:r,item:c,onMenuClick:e},null,8,["item"]))),128))}},$={__name:"NavBarItemPlain",props:{display:{type:String,default:"flex"},useMargin:Boolean},setup(t){const a=A();return(e,n)=>(s(),g("div",{class:o([[t.display,l(a).navBarItemLabelStyle,l(a).navBarItemLabelHoverStyle,t.useMargin?"my-2 mx-3":"py-2 px-3"],"items-center cursor-pointer dark:text-white dark:hover:text-slate-400"])},[x(e.$slots,"default")],2))}},Me={class:"top-0 inset-x-0 fixed bg-gray-50 h-14 z-30 transition-position w-screen lg:w-auto dark:bg-slate-800"},Be={class:"flex flex-1 items-stretch h-14"},De={class:"flex-none items-stretch flex h-14 lg:hidden"},Ie={__name:"NavBar",props:{menu:{type:Array,required:!0}},emits:["menu-click"],setup(t,{emit:a}){const e=(i,c)=>{a("menu-click",i,c)},n=C(!1);return(i,c)=>(s(),g("nav",Me,[u("div",{class:o(["flex lg:items-stretch",l(U)])},[u("div",Be,[x(i.$slots,"default")]),u("div",De,[d($,{onClick:c[0]||(c[0]=S(r=>n.value=!n.value,["prevent"]))},{default:p(()=>[d(k,{path:n.value?l(G):l(ue),size:"24"},null,8,["path"])]),_:1})]),u("div",{class:o(["max-h-screen-menu overflow-y-auto lg:overflow-visible absolute w-screen top-14 left-0 bg-gray-50 shadow-lg lg:w-auto lg:flex lg:static lg:shadow-none dark:bg-slate-800",[n.value?"block":"hidden"]])},[d(R,{menu:t.menu,onMenuClick:e},null,8,["menu"])],2)],2)]))}},W={__name:"AsideMenuItem",props:{item:{type:Object,required:!0},isDropdownList:Boolean},emits:["menu-click"],setup(t,{emit:a}){const e=t,n=h(()=>e.item.route?route(e.item.route):e.item.href),i=A(),c=h(()=>e.item&&e.item.color);h(()=>c.value?"":i.asideMenuItemActiveStyle);const r=h(()=>e.item.route&&route().current(e.item.route)?i.asideMenuItemActiveStyle:""),m=C(!1),v=h(()=>[e.isDropdownList?"py-3 px-6 text-sm":"py-3",c.value?ve(e.item.color,!1,!0):`${i.asideMenuItemStyle} dark:text-slate-300 dark:hover:text-white`]),w=h(()=>!!e.item.menu),M=_=>{a("menu-click",_,e.item),w.value&&(m.value=!m.value)};return(_,B)=>(s(),g("li",null,[(s(),f(F(t.item.route?l(O):"a"),{href:n.value,target:t.item.target??null,class:o(["flex cursor-pointer",v.value]),onClick:M},{default:p(()=>[t.item.icon?(s(),f(k,{key:0,path:t.item.icon,class:o(["flex-none",r.value]),w:"w-16",size:18},null,8,["path","class"])):b("",!0),u("span",{class:o(["grow text-ellipsis line-clamp-1",[{"pr-12":!w.value},r.value]])},L(t.item.label),3),w.value?(s(),f(k,{key:1,path:m.value?l(me):l(de),class:o(["flex-none",r.value]),w:"w-12"},null,8,["path","class"])):b("",!0)]),_:1},8,["href","target","class"])),w.value?(s(),f(J,{key:0,menu:t.item.menu,class:o([l(i).asideMenuDropdownStyle,m.value?"block dark:bg-slate-800/50":"hidden"]),"is-dropdown-list":""},null,8,["menu","class"])):b("",!0)]))}},J={__name:"AsideMenuList",props:{isDropdownList:Boolean,menu:{type:Array,required:!0}},emits:["menu-click"],setup(t,{emit:a}){const e=(n,i)=>{a("menu-click",n,i)};return(n,i)=>(s(),g("ul",null,[(s(!0),g(z,null,H(t.menu,(c,r)=>(s(),f(W,{key:r,item:c,"is-dropdown-list":t.isDropdownList,onMenuClick:e},null,8,["item","is-dropdown-list"]))),128))]))}},Ne={id:"aside",class:"lg:py-2 lg:pl-2 w-60 fixed flex z-40 top-0 h-screen transition-position overflow-hidden"},Ue=u("div",{class:"text-center flex-1 lg:text-left lg:pl-6 xl:text-center xl:pl-0"},[u("b",{class:"font-black"},"One")],-1),ze=["onClick"],qe={__name:"AsideMenuLayer",props:{menu:{type:Array,required:!0}},emits:["menu-click","aside-lg-close-click"],setup(t,{emit:a}){const e=A(),n=h(()=>({label:"Logout",icon:V,color:"info",isLogout:!0})),i=(r,m)=>{a("menu-click",r,m)},c=r=>{a("aside-lg-close-click",r)};return(r,m)=>(s(),g("aside",Ne,[u("div",{class:o([l(e).asideStyle,"lg:rounded-2xl flex-1 flex flex-col overflow-hidden dark:bg-slate-900"])},[u("div",{class:o([l(e).asideBrandStyle,"flex flex-row h-14 items-center justify-between dark:bg-slate-900"])},[Ue,u("button",{class:"hidden lg:inline-block xl:hidden p-3",onClick:S(c,["prevent"])},[d(k,{path:l(G)},null,8,["path"])],8,ze)],2),u("div",{class:o([l(e).darkMode?"aside-scrollbars-[slate]":l(e).asideScrollbarsStyle,"flex-1 overflow-y-auto overflow-x-hidden"])},[d(J,{menu:t.menu,onMenuClick:i},null,8,["menu"])],2),u("ul",null,[d(W,{item:n.value,onMenuClick:i},null,8,["item"])])],2)]))}},Ee={__name:"AsideMenu",props:{menu:{type:Array,required:!0},isAsideMobileExpanded:Boolean,isAsideLgActive:Boolean},emits:["menu-click","aside-lg-close-click"],setup(t,{emit:a}){const e=(i,c)=>{a("menu-click",i,c)},n=i=>{a("aside-lg-close-click",i)};return(i,c)=>(s(),g(z,null,[d(qe,{menu:t.menu,class:o([t.isAsideMobileExpanded?"left-0":"-left-60 lg:left-0",{"lg:hidden xl:flex":!t.isAsideLgActive}]),onMenuClick:e,onAsideLgCloseClick:n},null,8,["menu","class"]),Y(d(_e,{"z-index":"z-30",onOverlayClick:n},null,512),[[X,t.isAsideLgActive]])],64))}},Pe={class:"text-center md:text-left"},je=u("a",{href:"https://qenqoperu.com",target:"_blank"},"Qenqoperu.com",-1),Oe={__name:"FooterBar",setup(t){const a=new Date().getFullYear();return(e,n)=>(s(),g("footer",{class:o(["py-2 px-6",l(U)])},[d(Ce,null,{default:p(()=>[u("div",Pe,[u("b",null,[N("©"+L(l(a))+", ",1),je,N(".")]),x(e.$slots,"default")])]),_:3})],2))}},Fe=u("a",{href:"https://e-pask.com",target:"_blank",class:"text-blue-600"},"e-Pask",-1),j="xl:pl-60",et={__name:"LayoutAuthenticated",setup(t){const a=A();P.on("navigate",()=>{e.value=!1,n.value=!1});const e=C(!1),n=C(!1),i=(r,m)=>{m.isToggleLightDark&&a.setDarkMode(),m.isLogout&&P.post(route("logout"))};return(()=>{Z.get("/user-information").then(r=>{console.dir(r.data),r.data.avatar="https://avatars.dicebear.com/api/avataaars/example.svg?options[top][]=shortHair&options[accessoriesChance]=93",r.data.email=r.data.username,q().setUser(r.data)}).catch(r=>{console.error(r)})})(),(r,m)=>(s(),g("div",{class:o({dark:l(a).darkMode,"overflow-hidden lg:overflow-visible":e.value})},[u("div",{class:o([[j,{"ml-60 lg:ml-0":e.value}],"pt-14 min-h-screen w-screen transition-position lg:w-auto bg-gray-50 dark:bg-slate-800 dark:text-slate-100"])},[d(Ie,{menu:l($e),class:o([j,{"ml-60 lg:ml-0":e.value}]),onMenuClick:i},{default:p(()=>[d($,{display:"flex lg:hidden",onClick:m[0]||(m[0]=S(v=>e.value=!e.value,["prevent"]))},{default:p(()=>[d(k,{path:e.value?l(fe):l(ge),size:"24"},null,8,["path"])]),_:1}),d($,{display:"hidden lg:flex xl:hidden",onClick:m[1]||(m[1]=S(v=>n.value=!0,["prevent"]))},{default:p(()=>[d(k,{path:l(he),size:"24"},null,8,["path"])]),_:1}),d($,{"use-margin":""},{default:p(()=>[d(be,{placeholder:"Search (ctrl+k)","ctrl-k-focus":"",transparent:"",borderless:""})]),_:1})]),_:1},8,["menu","class"]),d(Ee,{"is-aside-mobile-expanded":e.value,"is-aside-lg-active":n.value,menu:l(Ae),onMenuClick:i,onAsideLgCloseClick:m[2]||(m[2]=v=>n.value=!1)},null,8,["is-aside-mobile-expanded","is-aside-lg-active","menu"]),x(r.$slots,"default"),d(Oe,null,{default:p(()=>[N(" Desarrollado por "),Fe]),_:1})],2)],2))}},He={__name:"IconRounded",props:{icon:{type:String,required:!0},color:{type:String,default:null},w:{type:String,default:"w-12"},h:{type:String,default:"h-12"},bg:Boolean},setup(t){return(a,e)=>(s(),f(k,{path:t.icon,w:t.w,h:t.h,size:"24",class:o(["rounded-full",t.bg?l(pe)[t.color]:[l(ke)[t.color],"bg-gray-50 dark:bg-slate-800"]])},null,8,["path","w","h","class"]))}},Te={class:"flex items-center justify-start"},tt={__name:"SectionTitleLineWithButton",props:{icon:{type:String,default:null},title:{type:String,required:!0},main:Boolean},setup(t){const a=h(()=>ee().default);return(e,n)=>(s(),g("section",{class:o([{"pt-6":!t.main},"mb-6 flex items-center justify-between"])},[u("div",Te,[t.icon&&t.main?(s(),f(He,{key:0,icon:t.icon,color:"light",class:"mr-3",bg:""},null,8,["icon"])):t.icon?(s(),f(k,{key:1,path:t.icon,class:"mr-2",size:"20"},null,8,["path"])):b("",!0),u("h1",{class:o([t.main?"text-3xl":"text-2xl","leading-tight"])},L(t.title),3)]),a.value?x(e.$slots,"default",{key:0}):(s(),f(ye,{key:1,icon:l(T),color:"whiteDark"},null,8,["icon"]))],2))}};export{et as _,tt as a,Ze as b,He as c,Se as d};
