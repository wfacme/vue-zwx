(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-838c82ba"],{"4d71":function(t,e,a){"use strict";a("d15f")},"7aa1":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("a-card",[a("div",[a("a-upload",{attrs:{name:"file",accept:"input",multiple:!0,customRequest:t.upload,showUploadList:!1}},[a("a-button",{attrs:{type:"primary",loading:t.btnloading}},[a("a-icon",{attrs:{type:"upload"}}),t._v(" 导入 ")],1)],1),a("standard-table",{attrs:{rowKey:"id",columns:t.columns,loading:t.loading,dataSource:t.dataSource,pagination:t.pagination,scroll:{scrollToFirstRowOnChange:!0}},on:{change:t.onChange},scopedSlots:t._u([{key:"action",fn:function(e){e.text;var n=e.record;return a("div",{},[a("a",{on:{click:function(e){return t.delData(n.id)}}},[a("a-icon",{attrs:{type:"delete"}}),t._v(" 禁用 ")],1)])}}])},[a("template",{slot:"statusTitle"},[a("a-icon",{attrs:{type:"info-circle"},nativeOn:{click:function(e){return t.onStatusTitleClick(e)}}})],1)],2)],1)]),a("StoreStockEdit",{attrs:{show:t.isShowModal,formData:t.formData},on:{close:t.closeModal}})],1)},o=[],r=a("5530"),i=a("9827"),s=a("5e9f"),c=a("3521"),u=a("8bb0"),l=a("ca00"),d=a("1da1"),h=(a("96cf"),a("7424")),p=a("b775");function f(){return m.apply(this,arguments)}function m(){return m=Object(d["a"])(regeneratorRuntime.mark((function t(){var e,a=arguments;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:{},t.abrupt("return",p["g"].post(h["ORDERRECEIPCREATE"],e));case 2:case"end":return t.stop()}}),t)}))),m.apply(this,arguments)}function g(){return v.apply(this,arguments)}function v(){return v=Object(d["a"])(regeneratorRuntime.mark((function t(){var e,a=arguments;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:{},t.abrupt("return",p["g"].put(h["ORDERRECEIPDELETE"],e));case 2:case"end":return t.stop()}}),t)}))),v.apply(this,arguments)}var b={name:"StoreReceip",components:{StandardTable:c["a"],StoreStockEdit:u["a"]},data:function(){return Object(r["a"])(Object(r["a"])({},Object(l["d"])(i["a"],this)),{},{filterParams:{},btnloading:!1})},mixins:[s["a"]],authorize:{deleteRecord:"delete"},created:function(){},methods:{upload:function(t){var e=this,a=new FormData;a.append("file",t.file),this.btnloading=!0,f(a).then((function(t){1==t.code?(e.$message.success(t.msg),e.loadData()):e.$message.error(t.msg),e.btnloading=!1}))},closeModal:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.isEdit=!1,this.formData={},this.isShowModal=!1,t&&this.loadData()},delData:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;0==e&&this.$message.error("该数据信息有误！"),Object(l["a"])("温馨提示","确定要禁用该门店收货单吗？",this).then((function(){t.loading=!0;var a={id:e,status:0};g(a).then((function(e){1==e.code?(t.$message.success(e.msg),t.loadData()):t.$message.error(e.msg),t.loading=!1})).catch((function(e){t.$message.error("系统错误")}))}))},editData:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.formData=Object(r["a"])({},t)||{},this.formData.status=1==t.status,this.isShowModal=!0},handleMenuClick:function(t){"delete"===t.key&&this.remove()}}},w=b,D=(a("4d71"),a("2877")),E=Object(D["a"])(w,n,o,!1,null,"cb1ecf98",null);e["default"]=E.exports},d15f:function(t,e,a){}}]);