(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-102df7a7"],{"0fea":function(t,e,a){"use strict";a.d(e,"c",(function(){return l})),a.d(e,"d",(function(){return n})),a.d(e,"b",(function(){return o})),a.d(e,"a",(function(){return i}));var r=a("b775"),s={user:"/user",role:"/role",service:"/service",permission:"/permission",permissionNoPager:"/permission/no-pager",orgTree:"/org/tree"};function l(t){return Object(r["b"])({url:s.role,method:"get",params:t})}function n(t){return Object(r["b"])({url:s.service,method:"get",params:t})}function o(t){return Object(r["b"])({url:s.permissionNoPager,method:"get",params:t})}function i(t){return Object(r["b"])({url:s.orgTree,method:"get",params:t})}},"8b8b":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=this,a=e.$createElement,r=e._self._c||a;return r("a-card",{attrs:{bordered:!1}},[r("div",{staticClass:"table-page-search-wrapper"},[r("a-form",{attrs:{layout:"inline"}},[r("a-row",{attrs:{gutter:48}},[r("a-col",{attrs:{md:8,sm:24}},[r("a-form-item",{attrs:{label:"角色ID"}},[r("a-input",{attrs:{placeholder:"请输入"}})],1)],1),r("a-col",{attrs:{md:8,sm:24}},[r("a-form-item",{attrs:{label:"状态"}},[r("a-select",{attrs:{placeholder:"请选择","default-value":"0"}},[r("a-select-option",{attrs:{value:"0"}},[e._v("全部")]),r("a-select-option",{attrs:{value:"1"}},[e._v("关闭")]),r("a-select-option",{attrs:{value:"2"}},[e._v("运行中")])],1)],1)],1),r("a-col",{attrs:{md:8,sm:24}},[r("span",{staticClass:"table-page-search-submitButtons"},[r("a-button",{attrs:{type:"primary"}},[e._v("查询")]),r("a-button",{staticStyle:{"margin-left":"8px"}},[e._v("重置")])],1)])],1)],1)],1),r("s-table",{attrs:{size:"default",columns:e.columns,data:e.loadData},scopedSlots:e._u([{key:"expandedRowRender",fn:function(t){return r("div",{staticStyle:{margin:"0"}},[r("a-row",{style:{marginBottom:"12px"},attrs:{gutter:24}},e._l(t.permissions,(function(t,a){return r("a-col",{key:a,style:{marginBottom:"12px"},attrs:{span:12}},[r("a-col",{attrs:{lg:4,md:24}},[r("span",[e._v(e._s(t.permissionName)+"：")])]),t.actionEntitySet.length>0?r("a-col",{attrs:{lg:20,md:24}},e._l(t.actionEntitySet,(function(t,a){return r("a-tag",{key:a,attrs:{color:"cyan"}},[e._v(e._s(t.describe))])})),1):r("a-col",{attrs:{span:20}},[e._v("-")])],1)})),1)],1)}},{key:"action",fn:function(t,a){return r("span",{},[r("a",{on:{click:function(t){return e.handleEdit(a)}}},[e._v("编辑")]),r("a-divider",{attrs:{type:"vertical"}}),r("a-dropdown",[r("a",{staticClass:"ant-dropdown-link"},[e._v(" 更多 "),r("a-icon",{attrs:{type:"down"}})],1),r("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[r("a-menu-item",[r("a",{attrs:{href:"javascript:;"}},[e._v("详情")])]),r("a-menu-item",[r("a",{attrs:{href:"javascript:;"}},[e._v("禁用")])]),r("a-menu-item",[r("a",{attrs:{href:"javascript:;"}},[e._v("删除")])])],1)],1)],1)}}])}),r("a-modal",{staticStyle:{top:"20px"},attrs:{title:"操作",width:800},on:{ok:e.handleOk},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[r("a-form",{attrs:{autoFormCreate:function(e){t.form=e}}},[r("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"唯一识别码",hasFeedback:"",validateStatus:"success"}},[r("a-input",{attrs:{placeholder:"唯一识别码",id:"no",disabled:"disabled"},model:{value:e.mdl.id,callback:function(t){e.$set(e.mdl,"id",t)},expression:"mdl.id"}})],1),r("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"角色名称",hasFeedback:"",validateStatus:"success"}},[r("a-input",{attrs:{placeholder:"起一个名字",id:"role_name"},model:{value:e.mdl.name,callback:function(t){e.$set(e.mdl,"name",t)},expression:"mdl.name"}})],1),r("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"状态",hasFeedback:"",validateStatus:"warning"}},[r("a-select",{model:{value:e.mdl.status,callback:function(t){e.$set(e.mdl,"status",t)},expression:"mdl.status"}},[r("a-select-option",{attrs:{value:"1"}},[e._v("正常")]),r("a-select-option",{attrs:{value:"2"}},[e._v("禁用")])],1)],1),r("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"描述",hasFeedback:""}},[r("a-textarea",{attrs:{rows:5,placeholder:"...",id:"describe"},model:{value:e.mdl.describe,callback:function(t){e.$set(e.mdl,"describe",t)},expression:"mdl.describe"}})],1),r("a-divider"),r("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"拥有权限",hasFeedback:""}},e._l(e.mdl.permissions,(function(t,a){return r("a-row",{key:a,attrs:{gutter:16}},[r("a-col",{attrs:{span:4}},[e._v(" "+e._s(t.permissionName)+"： ")]),r("a-col",{attrs:{span:20}},[r("a-checkbox-group",{attrs:{options:t.actionsOptions}})],1)],1)})),1)],1)],1)],1)},s=[],l=(a("4160"),a("d81d"),a("159b"),a("2af9")),n=a("0fea"),o={name:"TableList",components:{STable:l["r"]},data:function(){return{description:"列表使用场景：后台管理中的权限管理以及角色管理，可用于基于 RBAC 设计的角色权限控制，颗粒度细到每一个操作类型。",visible:!1,labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},form:null,mdl:{},advanced:!1,queryParam:{},columns:[{title:"唯一识别码",dataIndex:"id"},{title:"角色名称",dataIndex:"name"},{title:"状态",dataIndex:"status"},{title:"创建时间",dataIndex:"createTime",sorter:!0},{title:"操作",width:"150px",dataIndex:"action",scopedSlots:{customRender:"action"}}],loadData:function(t){return Object(n["c"])(t).then((function(t){return t.result}))},selectedRowKeys:[],selectedRows:[]}},created:function(){Object(n["d"])().then((function(t){})),Object(n["c"])().then((function(t){}))},methods:{handleEdit:function(t){this.mdl=Object.assign({},t),this.mdl.permissions.forEach((function(t){t.actionsOptions=t.actionEntitySet.map((function(t){return{label:t.describe,value:t.action,defaultCheck:t.defaultCheck}}))})),this.visible=!0},handleOk:function(){},onChange:function(t,e){this.selectedRowKeys=t,this.selectedRows=e},toggleAdvanced:function(){this.advanced=!this.advanced}},watch:{}},i=o,c=a("2877"),d=Object(c["a"])(i,r,s,!1,null,null,null);e["default"]=d.exports}}]);