(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-50e94a27"],{"22dc":function(e,t,a){"use strict";a.d(t,"d",(function(){return i})),a.d(t,"a",(function(){return l})),a.d(t,"c",(function(){return u})),a.d(t,"b",(function(){return m}));var r=a("1da1"),o=(a("96cf"),a("7424")),n=a("b775");function i(){return s.apply(this,arguments)}function s(){return s=Object(r["a"])(regeneratorRuntime.mark((function e(){var t,a=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:{},e.abrupt("return",Object(n["c"])(o["ADMININDEX"],t));case 2:case"end":return e.stop()}}),e)}))),s.apply(this,arguments)}function l(){return c.apply(this,arguments)}function c(){return c=Object(r["a"])(regeneratorRuntime.mark((function e(){var t,a=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:{},e.abrupt("return",Object(n["e"])(o["ADMINCREATE"],t));case 2:case"end":return e.stop()}}),e)}))),c.apply(this,arguments)}function u(){return d.apply(this,arguments)}function d(){return d=Object(r["a"])(regeneratorRuntime.mark((function e(){var t,a=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:{},e.abrupt("return",n["g"].put(o["ADMINUPDATE"],t));case 2:case"end":return e.stop()}}),e)}))),d.apply(this,arguments)}function m(){return p.apply(this,arguments)}function p(){return p=Object(r["a"])(regeneratorRuntime.mark((function e(){var t,a=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:{},e.abrupt("return",n["g"].put(o["ADMINDELETE"],t));case 2:case"end":return e.stop()}}),e)}))),p.apply(this,arguments)}},3521:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"standard-table"},[a("div",{staticClass:"alert"},[e.selectedRows?a("a-alert",{attrs:{type:"info","show-icon":!0}},[a("div",{staticClass:"message",attrs:{slot:"message"},slot:"message"},[e._v(" 已选择 "),a("a",[e._v(e._s(e.selectedRows.length))]),e._v(" 项 "),a("a",{staticClass:"clear",on:{click:e.onClear}},[e._v("清空")]),e._l(e.needTotalList,(function(t,r){return[t.needTotal?a("div",{key:r},[e._v(" "+e._s(t.title)+"总计 "),a("a",[e._v(e._s(t.customRender?t.customRender(t.total):t.total))])]):e._e()]}))],2)]):e._e()],1),a("a-table",{attrs:{bordered:e.bordered,loading:e.loading,columns:e.columns,dataSource:e.dataSource,rowKey:e.rowKey,pagination:e.pagination,expandedRowKeys:e.expandedRowKeys,expandedRowRender:e.expandedRowRender,rowSelection:e.selectedRows?{selectedRowKeys:e.selectedRowKeys,onChange:e.updateSelect}:void 0},on:{change:e.onChange},scopedSlots:e._u([e._l(Object.keys(e.$scopedSlots).filter((function(e){return"expandedRowRender"!==e})),(function(t){return{key:t,fn:function(a,r,o){return[e._t(t,null,null,{text:a,record:r,index:o})]}}})),{key:e.$scopedSlots.expandedRowRender?"expandedRowRender":"",fn:function(t,a,r,o){return[e._t(e.$scopedSlots.expandedRowRender?"expandedRowRender":"",null,null,{record:t,index:a,indent:r,expanded:o})]}}],null,!0)},[e._l(Object.keys(e.$slots),(function(t){return a("template",{slot:t},[e._t(t)],2)}))],2)],1)},o=[],n=a("c1f7"),i=n["a"],s=(a("8e7f"),a("2877")),l=Object(s["a"])(i,r,o,!1,null,"c17909da",null);t["a"]=l.exports},"5d27":function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("a-modal",{attrs:{title:e.formData.id?"编辑管理员":"添加管理员",width:"60%",visible:e.show,"confirm-loading":e.confirmLoading},on:{ok:e.formSubmit,cancel:e.closeModal}},[a("a-form",{attrs:{layout:"horizontal"}},[a("a-form-item",{attrs:{label:"用户名",required:!0,"label-col":e.formItemLayout.labelCol,"wrapper-col":e.formItemLayout.wrapperCol}},[a("a-input",{attrs:{placeholder:"请输入用户名"},model:{value:e.formData.username,callback:function(t){e.$set(e.formData,"username",t)},expression:"formData.username"}})],1),a("a-form-item",{attrs:{label:"密码",required:!0,"label-col":e.formItemLayout.labelCol,"wrapper-col":e.formItemLayout.wrapperCol}},[a("a-input",{attrs:{type:"password",placeholder:"请输入密码"},model:{value:e.formData.password,callback:function(t){e.$set(e.formData,"password",t)},expression:"formData.password"}})],1),a("a-form-item",{attrs:{label:"确认密码",required:!0,"label-col":e.formItemLayout.labelCol,"wrapper-col":e.formItemLayout.wrapperCol}},[a("a-input",{attrs:{type:"password",placeholder:"请输入确认密码"},model:{value:e.formData.password_ok,callback:function(t){e.$set(e.formData,"password_ok",t)},expression:"formData.password_ok"}})],1),a("a-form-item",{attrs:{label:"编号","label-col":e.formItemLayout.labelCol,"wrapper-col":e.formItemLayout.wrapperCol}},[a("a-input",{attrs:{placeholder:"请输入编号"},model:{value:e.formData.no,callback:function(t){e.$set(e.formData,"no",t)},expression:"formData.no"}})],1),a("a-form-item",{attrs:{label:"姓名",required:!0,"label-col":e.formItemLayout.labelCol,"wrapper-col":e.formItemLayout.wrapperCol}},[a("a-input",{attrs:{placeholder:"请输入姓名"},model:{value:e.formData.truename,callback:function(t){e.$set(e.formData,"truename",t)},expression:"formData.truename"}})],1),a("a-form-item",{attrs:{label:"手机号",required:!0,"label-col":e.formItemLayout.labelCol,"wrapper-col":e.formItemLayout.wrapperCol}},[a("a-input",{attrs:{type:"tel",placeholder:"请输入手机号"},model:{value:e.formData.mobile,callback:function(t){e.$set(e.formData,"mobile",t)},expression:"formData.mobile"}})],1),a("a-form-item",{attrs:{label:"邮箱",required:!0,"label-col":e.formItemLayout.labelCol,"wrapper-col":e.formItemLayout.wrapperCol}},[a("a-input",{attrs:{type:"email",placeholder:"请输入邮箱"},model:{value:e.formData.email,callback:function(t){e.$set(e.formData,"email",t)},expression:"formData.email"}})],1)],1)],1)],1)},o=[],n=a("22dc"),i={name:"AdminEdit",props:{show:{type:Boolean,default:!1},formData:{type:Object,default:function(){return{}}}},data:function(){return{formItemLayout:{labelCol:{span:3},wrapperCol:{span:14,offset:1}},confirmLoading:!1}},mounted:function(e){},methods:{closeModal:function(){this.$emit("close")},formSubmit:function(){var e=this;this.confirmLoading=!0,this.formData.hasOwnProperty("id")?Object(n["c"])(this.formData).then((function(t){1==t.code?(e.$message.success(t.msg),e.$emit("close",!0)):e.$message.error(t.msg),e.confirmLoading=!1})):Object(n["a"])(this.formData).then((function(t){1==t.code?(e.$message.success(t.msg),e.$emit("close",!0)):e.$message.error(t.msg),e.confirmLoading=!1}))}}},s=i,l=a("2877"),c=Object(l["a"])(s,r,o,!1,null,null,null);t["a"]=c.exports},"5e9f":function(e,t,a){"use strict";var r=a("53ca"),o=(a("4de4"),a("4360"),a("22dc"));a("dde5"),a("28f2");t["a"]={data:function(){return{filterParams:{pz:10,page:1},pagination:{total:1,pageSize:1},loading:!1,columns:[],dataSource:[],selectedRows:[],formData:{},isShowModal:!1,indexQuery:o["d"]}},mounted:function(){this.loadData()},methods:{loadData:function(){var e=this;this.loading=!0,this.indexQuery(this.filterParams).then((function(t){if(1==t.code){var a=[],o=t.data,n=o.list;"object"==Object(r["a"])(n)&&n.data?(a=o.list.data||[],e.dataSource.length<=0&&e.initPainterData(n)):(a=o.list||[],e.pagination=!1),e.dataSource=a}setTimeout((function(){return e.loading=!1}),500)}))},initPainterData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.pagination={total:e.total,showSizeChanger:!0,showQuickJumper:!0,pageSize:e.per_page}},changeFilterParams:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t={};e.current&&(t["page"]=e.current),e.pageSize&&(t["pz"]=e.pageSize),this.filterParams=Object.assign({},this.filterParams,t)},deleteRecord:function(e){this.dataSource=this.dataSource.filter((function(t){return t.key!==e})),this.selectedRows=this.selectedRows.filter((function(t){return t.key!==e}))},onChange:function(e){this.changeFilterParams(e),this.loadData()}}}},"8e7f":function(e,t,a){"use strict";a("be40")},b03e:function(e,t,a){},b893:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var r=a("c1df"),o=a.n(r);function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"YYYY年M月D日";return o()(1e3*e).format(t)}},be40:function(e,t,a){},c1f7:function(module,__webpack_exports__,__webpack_require__){"use strict";var D_docker_acmephp_web_qiaode_zhiweixuan_vue_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("5530"),core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("d81d"),core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__),core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("4de4"),core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__);__webpack_exports__["a"]={name:"StandardTable",props:{bordered:Boolean,loading:[Boolean,Object],columns:Array,dataSource:Array,rowKey:{type:[String,Function],default:"key"},pagination:{type:[Object,Boolean],default:!0},selectedRows:Array,expandedRowKeys:Array,expandedRowRender:Function},data:function(){return{needTotalList:[]}},methods:{updateSelect:function(e,t){this.$emit("update:selectedRows",t),this.$emit("selectedRowChange",e,t)},initTotalList:function(e){var t=e.filter((function(e){return e.needTotal})).map((function(e){return Object(D_docker_acmephp_web_qiaode_zhiweixuan_vue_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["a"])(Object(D_docker_acmephp_web_qiaode_zhiweixuan_vue_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["a"])({},e),{},{total:0})}));return t},onClear:function(){this.updateSelect([],[]),this.$emit("clear")},onChange:function(e,t,a,r){var o=r.currentDataSource;this.$emit("change",e,t,a,{currentDataSource:o})}},created:function(){this.needTotalList=this.initTotalList(this.columns)},watch:{selectedRows:function selectedRows(_selectedRows){this.needTotalList=this.needTotalList.map((function(item){return Object(D_docker_acmephp_web_qiaode_zhiweixuan_vue_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["a"])(Object(D_docker_acmephp_web_qiaode_zhiweixuan_vue_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["a"])({},item),{},{total:_selectedRows.reduce((function(sum,val){var v;try{v=val[item.dataIndex]?val[item.dataIndex]:eval("val.".concat(item.dataIndex))}catch(_){v=val[item.dataIndex]}return v=isNaN(parseFloat(v))?0:parseFloat(v),sum+v}),0)})}))}},computed:{selectedRowKeys:function(){var e=this;return this.selectedRows.map((function(t){return"function"===typeof e.rowKey?e.rowKey(t):t[e.rowKey]}))}}}},daa5:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("a-card",[a("div",[a("a-space",{staticClass:"operator"},[a("a-button",{attrs:{type:"primary"},on:{click:function(t){e.isShowModal=!0}}},[e._v("新建")])],1),a("standard-table",{attrs:{rowKey:"id",columns:e.columns,loading:e.loading,dataSource:e.dataSource,pagination:e.pagination,scroll:{scrollToFirstRowOnChange:!0}},on:{change:e.onChange},scopedSlots:e._u([{key:"action",fn:function(t){t.text;var r=t.record;return a("div",{},[a("a",{staticStyle:{"margin-right":"8px"},on:{click:function(t){return e.editData(r)}}},[a("a-icon",{attrs:{type:"edit"}}),e._v(" 编辑 ")],1)])}}])},[a("template",{slot:"statusTitle"},[a("a-icon",{attrs:{type:"info-circle"},nativeOn:{click:function(t){return e.onStatusTitleClick(t)}}})],1)],2)],1)]),a("StockEdit",{attrs:{show:e.isShowModal,isEdit:e.isEdit,formData:e.formData},on:{close:e.closeModal}})],1)},o=[],n=a("5530"),i=a("dde5"),s=a("b893"),l=[{title:"仓库编号",dataIndex:"id"},{title:"仓库名称",dataIndex:"title"},{title:"销售组织编号",dataIndex:"sales_group_id"},{title:"创建时间",dataIndex:"create_date",customRender:function(e){return Object(s["a"])(e)}},{title:"最后更新时间",dataIndex:"last_update_date",customRender:function(e){return Object(s["a"])(e)}},{title:"状态",dataIndex:"status"},{title:"版本号",dataIndex:"version"},{title:"操作",scopedSlots:{customRender:"action"}}],c={columns:l,indexQuery:i["g"]},u=a("5e9f"),d=a("3521"),m=(a("5d27"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("a-modal",{attrs:{title:e.formData.id?"编辑管理员":"添加管理员",width:"60%",visible:e.show,"confirm-loading":e.confirmLoading},on:{ok:e.formSubmit,cancel:e.closeModal}},[a("a-form",{attrs:{layout:"horizontal"}},[a("a-form-item",{attrs:{required:!0,label:"编号","label-col":e.formItemLayout.labelCol,"wrapper-col":e.formItemLayout.wrapperCol}},[a("a-input",{attrs:{disabled:!!e.isEdit,placeholder:"请输入仓库编号"},model:{value:e.formData.id,callback:function(t){e.$set(e.formData,"id",t)},expression:"formData.id"}})],1),a("a-form-item",{attrs:{label:"仓库名称",required:!0,"label-col":e.formItemLayout.labelCol,"wrapper-col":e.formItemLayout.wrapperCol}},[a("a-input",{attrs:{placeholder:"请输入仓库名称"},model:{value:e.formData.title,callback:function(t){e.$set(e.formData,"title",t)},expression:"formData.title"}})],1),a("a-form-item",{attrs:{label:"销售组织编号",required:!0,"label-col":e.formItemLayout.labelCol,"wrapper-col":e.formItemLayout.wrapperCol}},[a("a-input",{attrs:{placeholder:"请输入仓库名称"},model:{value:e.formData.sales_group_id,callback:function(t){e.$set(e.formData,"sales_group_id",t)},expression:"formData.sales_group_id"}})],1),a("a-form-item",{attrs:{label:"状态","label-col":e.formItemLayout.labelCol,"wrapper-col":e.formItemLayout.wrapperCol}},[a("a-switch",{attrs:{"default-checked":""},model:{value:e.formData.status,callback:function(t){e.$set(e.formData,"status",t)},expression:"formData.status"}})],1),a("a-form-item",{attrs:{label:"是否为临期仓","label-col":e.formItemLayout.labelCol,"wrapper-col":e.formItemLayout.wrapperCol}},[a("a-switch",{attrs:{"default-checked":!1},model:{value:e.formData.is_period,callback:function(t){e.$set(e.formData,"is_period",t)},expression:"formData.is_period"}})],1)],1)],1)],1)}),p=[],f=a("1da1"),_=(a("96cf"),a("7424")),h=a("b775");function b(){return w.apply(this,arguments)}function w(){return w=Object(f["a"])(regeneratorRuntime.mark((function e(){var t,a=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:{},e.abrupt("return",h["g"].post(_["STOCKCREATE"],t));case 2:case"end":return e.stop()}}),e)}))),w.apply(this,arguments)}function g(){return v.apply(this,arguments)}function v(){return v=Object(f["a"])(regeneratorRuntime.mark((function e(){var t,a=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:{},e.abrupt("return",h["g"].put(_["STOCKUPDATE"],t));case 2:case"end":return e.stop()}}),e)}))),v.apply(this,arguments)}var D={name:"StockEdit",props:{show:{type:Boolean,default:!1},isEdit:{type:Boolean,default:!1},formData:{type:Object,default:function(){return{}}}},data:function(){return{formItemLayout:{labelCol:{span:4},wrapperCol:{span:14,offset:1}},confirmLoading:!1}},mounted:function(e){},methods:{onChange:function(e){},closeModal:function(){this.$emit("close")},formSubmit:function(){var e=this;this.isEdit?(this.confirmLoading=!0,g(this.formData).then((function(t){1==t.code?(e.$message.success(t.msg),e.$emit("close",!0)):e.$message.error(t.msg),e.confirmLoading=!1}))):(this.confirmLoading=!0,b(this.formData).then((function(t){1==t.code?(e.$message.success(t.msg),e.$emit("close",!0)):e.$message.error(t.msg),e.confirmLoading=!1})))}}},y=D,R=a("2877"),k=Object(R["a"])(y,m,p,!1,null,null,null),x=k.exports,C={name:"StockIndex",components:{StockEdit:x,StandardTable:d["a"]},data:function(){return Object(n["a"])(Object(n["a"])({},c),{},{filterParams:{},formData:{is_period:!1,status:!0},isEdit:!1})},mixins:[u["a"]],authorize:{deleteRecord:"delete"},created:function(){},methods:{closeModal:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.isEdit=!1,this.formData={},this.isShowModal=!1,e&&this.loadData()},editData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.formData=Object(n["a"])({},e)||{},this.formData.status=1==e.status,this.formData.is_period=1==e.is_period,this.isEdit=!0,this.isShowModal=!0},handleMenuClick:function(e){"delete"===e.key&&this.remove()}}},E=C,O=(a("f5d4"),Object(R["a"])(E,r,o,!1,null,"0ebe8c22",null));t["default"]=O.exports},f5d4:function(e,t,a){"use strict";a("b03e")}}]);