(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-714f20a7"],{"0ac3":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("page-layout",{attrs:{avatar:t.currUser.username}},[a("div",{attrs:{slot:"headerContent"},slot:"headerContent"},[a("div",{staticClass:"title"},[t._v("欢迎你，"+t._s(t.currUser.truename))]),a("div",[t._v("员工代码："+t._s(t.currUser.no))])]),a("template",{slot:"extra"}),[a("a-row",{staticStyle:{margin:"0 -12px"}},[a("a-col",{staticStyle:{padding:"0 12px"},attrs:{xl:16,lg:24,md:24,sm:24,xs:24}},[a("a-card",{staticClass:"project-list",staticStyle:{"margin-bottom":"24px"},attrs:{loading:t.loading,bordered:!1,title:t.$t("progress"),"body-style":{padding:0}}},[a("a",{attrs:{slot:"extra"},slot:"extra"},[t._v(t._s(t.$t("all")))]),a("div",t._l(t.projects,(function(e,s){return a("a-card-grid",{key:s},[a("a-card",{attrs:{bordered:!1,"body-style":{padding:0}}},[a("a-card-meta",{attrs:{description:e.desc}},[a("div",{staticClass:"card-title",attrs:{slot:"title"},slot:"title"},[a("a-avatar",{attrs:{size:"small",src:e.logo}}),a("span",[t._v("Alipay")])],1)]),a("div",{staticClass:"project-item"},[a("a",{staticClass:"group",attrs:{href:"/#/"}},[t._v("科学搬砖组")]),a("span",{staticClass:"datetime"},[t._v("9小时前")])])],1)],1)})),1)])],1),a("a-col",{staticStyle:{padding:"0 12px"},attrs:{xl:8,lg:24,md:24,sm:24,xs:24}},[a("a-card",{staticStyle:{"margin-bottom":"24px"},attrs:{title:t.$t("access"),bordered:!1,"body-style":{padding:0}}},[a("div",{staticClass:"item-group"},t._l(t.menuData,(function(e,s){return a("span",{key:s},t._l(e.children,(function(e,s){return a("a",{key:s,attrs:{href:"#"+e.path}},[t._v(t._s(e.name))])})),0)})),0)])],1)],1)]],2)},i=[],r=a("5530"),n=a("45eb"),c=(a("779e"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-chart",{attrs:{forceFit:!0,height:"400",data:t.data,padding:[20,20,95,20],scale:t.scale}},[a("v-tooltip"),a("v-axis",{attrs:{dataKey:t.axis1Opts.dataKey,line:t.axis1Opts.line,tickLine:t.axis1Opts.tickLine,grid:t.axis1Opts.grid}}),a("v-axis",{attrs:{dataKey:t.axis2Opts.dataKey,line:t.axis2Opts.line,tickLine:t.axis2Opts.tickLine,grid:t.axis2Opts.grid}}),a("v-legend",{attrs:{dataKey:"user",marker:"circle",offset:30}}),a("v-coord",{attrs:{type:"polar",radius:"0.8"}}),a("v-line",{attrs:{position:"item*score",color:"user",size:2}}),a("v-point",{attrs:{position:"item*score",color:"user",size:4,shape:"circle"}})],1)}),l=[],o=a("40ba"),d=[{item:"引用",a:70,b:30,c:40},{item:"口碑",a:60,b:70,c:40},{item:"产量",a:50,b:60,c:40},{item:"贡献",a:40,b:50,c:40},{item:"热度",a:60,b:70,c:40},{item:"引用",a:70,b:50,c:40}],p=(new o.View).source(d);p.transform({type:"fold",fields:["a","b","c"],key:"user",value:"score"});var u=[{dataKey:"score",min:0,max:80}],m=p.rows,g={dataKey:"item",line:null,tickLine:null,grid:{lineStyle:{lineDash:null},hideFirstLine:!1}},v={dataKey:"score",line:null,tickLine:null,grid:{type:"polygon",lineStyle:{lineDash:null}}},y={name:"Radar",data:function(){return{sourceData:d,data:m,axis1Opts:g,axis2Opts:v,scale:u}}},f=y,x=a("2877"),b=Object(x["a"])(f,c,l,!1,null,"46c2ce9f",null),_=(b.exports,a("5880")),k=(a("b775"),{name:"WorkPlace",components:{PageLayout:n["a"]},i18n:a("6d59"),data:function(){return{projects:[],loading:!0,activities:[],teams:[],welcome:{timeFix:"",message:""}}},computed:Object(r["a"])(Object(r["a"])({},Object(_["mapState"])("account",{currUser:"user"})),Object(_["mapState"])("setting",["lang","menuData"])),created:function(){}}),h=k,j=(a("a7ca"),Object(x["a"])(h,s,i,!1,null,null,null)),O=j.exports;e["default"]=O},6627:function(t,e,a){"use strict";a("cee4")},"6d59":function(t,e){t.exports={messages:{CN:{project:"项目数",ranking:"团队排名",visit:"项目访问",progress:"进行中的项目",all:"全部项目",access:"快速开始/便捷导航",dynamic:"动态",degree:"指数",team:"团队",add:"添加"},HK:{project:"項目數",ranking:"團隊排名",visit:"項目訪問",progress:"進行中的項目",all:"全部項目",access:"快速開始/便捷導航",dynamic:"動態",degree:"指數",team:"團隊",add:"添加"},US:{project:"Project",ranking:"Ranking",visit:"Visit",progress:"Projects in progress",all:"All projects",access:"Quick start / Easy navigation",dynamic:"Dynamic",degree:"degree",team:"Team",add:"Add"}}}},"779e":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"head-info"},[a("span",[t._v(t._s(t.title))]),a("p",[t._v(t._s(t.content))])])},i=[],r={name:"HeadInfo",props:["title","content","bordered"]},n=r,c=(a("6627"),a("2877")),l=Object(c["a"])(n,s,i,!1,null,"46a43dda",null);e["a"]=l.exports},"9fe0":function(t,e,a){},a7ca:function(t,e,a){"use strict";a("9fe0")},cee4:function(t,e,a){}}]);