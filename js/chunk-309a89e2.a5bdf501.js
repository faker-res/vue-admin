(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-309a89e2"],{"94e2":function(e,t,a){},bded:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"v2-search"},[a("Form",{ref:"searchKey",attrs:{inline:""}},[a("FormItem",{attrs:{label:"代理等级"}},[a("Select",{staticClass:"s-86",attrs:{clearable:""},model:{value:e.searchKey.agencyLevel,callback:function(t){e.$set(e.searchKey,"agencyLevel",t)},expression:"searchKey.agencyLevel"}},e._l(e.agencyLevelList,function(t,n){return a("Option",{key:n,attrs:{value:t.key}},[e._v(e._s(t.value))])}),1)],1),a("FormItem",{attrs:{label:"状态"}},[a("Select",{staticClass:"s-86",attrs:{clearable:""},model:{value:e.searchKey.status,callback:function(t){e.$set(e.searchKey,"status",t)},expression:"searchKey.status"}},[a("Option",{attrs:{value:"yes"}},[e._v("启用")]),a("Option",{attrs:{value:"no"}},[e._v("停用")])],1)],1),a("FormItem",{attrs:{label:"起止日期"}},[a("DatePicker",{staticClass:"s-120",attrs:{type:"date",placeholder:"开始时间"},model:{value:e.Time[0],callback:function(t){e.$set(e.Time,0,t)},expression:"Time[0]"}}),a("span",{staticClass:"date-divide"}),a("DatePicker",{staticClass:"s-120",attrs:{type:"date",placeholder:"结束时间"},model:{value:e.Time[1],callback:function(t){e.$set(e.Time,1,t)},expression:"Time[1]"}})],1),a("FormItem",{attrs:{label:"模糊"}},[a("Checkbox")],1),a("FormItem",[a("Select",{staticClass:"s-100",attrs:{clearable:""},model:{value:e.searchKey.searchType,callback:function(t){e.$set(e.searchKey,"searchType",t)},expression:"searchKey.searchType"}},[a("Option",{attrs:{value:"vip"}},[e._v("会员账号")]),a("Option",{attrs:{value:"agency"}},[e._v("上级代理")])],1)],1),a("FormItem",[a("Input",{staticClass:"s-140",attrs:{placeholder:"账号/姓名"},model:{value:e.searchKey.name,callback:function(t){e.$set(e.searchKey,"name",t)},expression:"searchKey.name"}})],1),a("FormItem",[a("Poptip",{attrs:{trigger:"hover",content:"多个请以,逗号隔开,仅支持同类型多个输入",placement:"bottom-end"}},[a("Icons",{attrs:{type:"bangzhutishi",color:"#E4E4E4",size:26}})],1)],1),a("FormItem",[a("Button",{staticClass:"search",attrs:{type:"primary"},on:{click:e.searchSubmit}},[e._v("查询")])],1)],1)],1),a("div",{staticClass:"v2-table"},[a("Tables",{attrs:{editable:"",columns:e.table.columns,loading:e.table.loading,value:e.table.data,total:e.table.total},on:{"on-page-change":e.onPageChange,"on-page-size-change":e.onPageSizeChange}})],1),a("Modals",{ref:"changeAgency",attrs:{title:"切换上级代理",width:"766"}},[a("div",{staticClass:"v2-form-wrapper",attrs:{slot:"content"},slot:"content"},[a("Form",{ref:"agencyInfo",staticStyle:{width:"766px"},attrs:{model:e.agencyInfo,rules:e.agencyInfoRulesValidate,"label-width":253}},[a("FormItem",{attrs:{label:"会员账号"}},[a("Input",{staticClass:"w260x",attrs:{disabled:""},model:{value:e.agencyInfo.changingAgency,callback:function(t){e.$set(e.agencyInfo,"changingAgency",t)},expression:"agencyInfo.changingAgency"}})],1),a("FormItem",{attrs:{label:"上级代理",prop:"superior"}},[a("Input",{staticClass:"w260x",model:{value:e.agencyInfo.superior,callback:function(t){e.$set(e.agencyInfo,"superior",t)},expression:"agencyInfo.superior"}})],1),a("FormItem",{directives:[{name:"show",rawName:"v-show",value:"vip"==e.searchKey.searchType,expression:"searchKey.searchType == 'vip'"}],attrs:{label:"代理等级"}},[a("Select",{staticClass:"w260x",attrs:{clearable:""},model:{value:e.agencyInfo.level,callback:function(t){e.$set(e.agencyInfo,"level",t)},expression:"agencyInfo.level"}},e._l(e.agencyLevelList,function(t,n){return a("Option",{key:n,attrs:{value:t.key}},[e._v(e._s(t.value))])}),1)],1),a("FormItem",{attrs:{label:"备注信息"}},[a("Input",{staticClass:"w260x",attrs:{type:"textarea",rows:6,placeholder:"此栏位仅供管理者记录其他咨询，会员无法检视"},model:{value:e.agencyInfo.remarks,callback:function(t){e.$set(e.agencyInfo,"remarks",t)},expression:"agencyInfo.remarks"}})],1),a("FormItem",[a("Button",{staticClass:"ivu-btn submit bg",on:{click:e.save}},[e._v("提交保存")])],1)],1)],1)])],1)},s=[],c=a("e069"),r=a("fa69"),l=a("83ae"),o=a("7e1e"),i=a("d027"),u=a("45e2"),y={name:"xj",components:{Icons:l["a"],Tables:r["a"],Modals:i["a"],ShowMore:u["a"]},data:function(){var e=this;this.$createElement;return{searchKey:{},agencyLevelList:[{key:"default",value:"默认等级"},{key:"two",value:"等级二"},{key:"three",value:"等级三"},{key:"four",value:"等级四"},{key:"five",value:"等级五"}],Time:[],table:{data:[],loading:!0,total:100,columns:[{title:"会员账号",key:"account",align:"center",render:function(e,t){return e(c["Tooltip"],{attrs:{placement:"right"}},[e("div",{style:{display:"flex",justifyContent:"space-around",alignItems:"center"}},[e("span",{style:{width:"50px"}},[t.row.account]),e(l["a"],{attrs:{type:"huiyuanchaxunzaixian",color:t.row.online?"#57A3F3":"#B3B3B3",size:"20"}})]),e("div",{slot:"content"},[t.row.online?"在线":"离线"])])}},{title:"账号类型",key:"type",align:"center"},{title:"代理等级",key:"level",align:"center",sortable:!0},{title:"上级代理",key:"superior",align:"center"},{title:"下级人数",key:"subordinate",align:"center",sortable:!0,render:function(e,t){return e("a",[e("span",{style:"color:#57A3F3FF",class:"cs",on:{click:function(){}}},[t.row.subordinate])])}},{title:"有效人数",key:"valid",align:"center",sortable:!0},{title:"新增人数",key:"newAdd",align:"center",sortable:!0},{title:"首存人数",key:"deposit",align:"center",sortable:!0},{title:"团队净盈利",key:"profit",align:"center",sortable:!0},{title:"团队余额",key:"balance",align:"center",sortable:!0},{title:"状态",key:"status",align:"center",render:function(e,t){return e("span",{style:{color:t.row.return?"#515a6e":"#FF2626"}},[t.row.return?"正常":"停用"])}},{title:"操作",align:"center",width:"150",render:function(t,a){return t("div",{class:"flex-row"},[t("a",{class:"blue-font",on:{click:function(t){var n=a.row.return?"您确定停用该会员状态吗?":"您确定启用该会员状态吗",s=a.row.return?"停用状态成功":"启用状态成功";e.$Tip.confirm({content:n,onOk:function(){e.$Tip.success({content:s,onOk:function(){}})}})}}},[a.row.return?"停用":"启用"]),t("a",{class:"blue-font",on:{click:function(t){e.agencyInfo.changingAgency=a.row.account,e.$refs.changeAgency.show()}}},["切换上级代理"])])}},{title:"...",type:"expand",align:"center",width:"50",render:function(t,a){var n=e;return t(u["a"],{props:{fd_type:n.fd_type,fs_type:n.fs_type,search_type:n.searchKey.searchType},on:{change_fd_type:function(e){n.fd_type=e},change_fs_type:function(e){n.fs_type=e}}})}}]},agencyInfo:{changingAgency:"sadasa"},agencyInfoRulesValidate:{superior:[{required:!0,message:"请输入上级代理",trigger:"blur"}]},fd_type:"liuhecai",fs_type:"zhenrenshixun",index:0}},methods:{searchSubmit:function(){},getData:function(e){var t=this;Object(o["g"])().then(function(e){t.table.loading=!0,setTimeout(function(){t.table.data=e.data,t.table.loading=!1},2e3)})},save:function(){this.$refs.changeAgency.hide(),this.$Tip.success({content:"修改成功",onOk:function(){}})},onPageChange:function(e){this.getData(e)},onPageSizeChange:function(){}},mounted:function(){var e=this;this.$nextTick(function(){e.getData()})}},p=y,g=(a("d970"),a("2877")),f=Object(g["a"])(p,n,s,!1,null,"996f5f8e",null);t["default"]=f.exports},d970:function(e,t,a){"use strict";var n=a("94e2"),s=a.n(n);s.a}}]);