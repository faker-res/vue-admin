(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c115cffc"],{2178:function(t,e,n){},"25e5":function(t,e,n){},"30d9":function(t,e,n){},4974:function(t,e,n){"use strict";var r=n("2178"),o=n.n(r);o.a},"4d3d":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"v2-search"},[n("Form",{ref:"underling",attrs:{inline:""}},[n("FormItem",{attrs:{label:"注册会员"}},[n("Select",{staticClass:"s-140",model:{value:t.underling.member,callback:function(e){t.$set(t.underling,"member",e)},expression:"underling.member"}},t._l(t.underlingMember,function(e,r){return n("Option",{key:r,attrs:{value:"item.key"}},[t._v(t._s(e.value))])}),1)],1),n("FormItem",{attrs:{label:"起止日期"}},[n("DatePicker",{staticClass:"s-140",attrs:{type:"date",placeholder:"开始时间"},model:{value:t.Time[0],callback:function(e){t.$set(t.Time,0,e)},expression:"Time[0]"}}),n("span",{staticClass:"date-divide"}),n("DatePicker",{staticClass:"s-140",attrs:{type:"date",placeholder:"结束时间"},model:{value:t.Time[1],callback:function(e){t.$set(t.Time,1,e)},expression:"Time[1]"}})],1),n("FormItem",{attrs:{label:"模糊"}},[n("Checkbox")],1),n("FormItem",{attrs:{label:"会员账号"}},[n("Input",{staticClass:"s-140",attrs:{placeholder:"账号/姓名"},model:{value:t.underling.account,callback:function(e){t.$set(t.underling,"account",e)},expression:"underling.account"}}),n("Poptip",{attrs:{trigger:"hover",content:"多个请以,逗号隔开,仅支持同类型多个输入",placement:"bottom-end"}},[n("Icons",{attrs:{type:"tishi",color:"#E4E4E4",size:26}})],1)],1),n("FormItem",[n("Button",{staticClass:"search",attrs:{type:"primary"}},[t._v("查询")])],1)],1)],1),n("div",{staticClass:"v2-table"},[n("Tables",{attrs:{editable:"",columns:t.table.columns,loading:t.table.loading,value:t.table.data,total:t.table.total,more:t.table.more},on:{"on-page-change":t.onPageChange,"on-page-size-change":t.onPageSizeChange}},[n("div",{staticClass:"clearfix",attrs:{slot:"more"},slot:"more"},[n("p",{staticClass:"p5 b"},[t._v("上级/网址：a111111/342432.com?agent=2399")])])])],1)])},o=[],i=(n("28a5"),n("83ae")),a=n("fa69"),u=n("7e1e"),l={name:"agencyUnderling",components:{Icons:i["a"],Tables:a["a"]},data:function(){this.$createElement;return{underling:{},Time:[],underlingMember:[{key:"one",value:"一级代理"},{key:"two",value:"二级代理"},{key:"three",value:"三级代理"}],table:{loading:!0,more:!0,title:"下属会员",data:[],total:100,columns:[{title:"会员账号",key:"account",align:"center"},{title:"账号类型",key:"type",align:"center"},{title:"姓名",key:"name",align:"center"},{title:"余额",key:"balance",align:"center",sortable:!0},{title:"存款总额",key:"depositSum",align:"center",width:"200",sortable:!0,render:function(t,e){return t("div",[t("span",{style:"color:#808080"},[e.row.depositSum.split(",")[0]]),t("span",{style:"color:#ff2626"},[e.row.depositSum.split(",")[1]])])}},{title:"存款大笔",key:"glutDeposit",align:"center"},{title:"取款总额",key:"withdrawalSum",width:"200",align:"center",render:function(t,e){return t("div",[t("span",{style:"color:#808080"},[e.row.withdrawalSum.split(",")[0]]),t("span",{style:"color:#ff2626"},[e.row.withdrawalSum.split(",")[1]])])}},{title:"总输赢",key:"sum",align:"center",sortable:!0},{title:"注册时间",key:"createTime",align:"center"}]}}},methods:{getData:function(t){var e=this;Object(u["h"])().then(function(t){e.table.loading=!0,setTimeout(function(){e.table.data=t.data,e.table.loading=!1},2e3)})},onPageChange:function(t){this.getData(t)},onPageSizeChange:function(){}},mounted:function(){var t=this;this.$nextTick(function(){t.getData()})}},c=l,s=n("2877"),d=Object(s["a"])(c,r,o,!1,null,"b1f48b24",null);e["default"]=d.exports},"7e1e":function(t,e,n){"use strict";n.d(e,"x",function(){return o}),n.d(e,"H",function(){return i}),n.d(e,"y",function(){return a}),n.d(e,"r",function(){return u}),n.d(e,"t",function(){return l}),n.d(e,"v",function(){return c}),n.d(e,"w",function(){return s}),n.d(e,"u",function(){return d}),n.d(e,"s",function(){return g}),n.d(e,"I",function(){return m}),n.d(e,"M",function(){return f}),n.d(e,"L",function(){return h}),n.d(e,"W",function(){return p}),n.d(e,"a",function(){return _}),n.d(e,"R",function(){return b}),n.d(e,"n",function(){return y}),n.d(e,"N",function(){return v}),n.d(e,"O",function(){return C}),n.d(e,"P",function(){return k}),n.d(e,"q",function(){return w}),n.d(e,"j",function(){return x}),n.d(e,"i",function(){return q}),n.d(e,"V",function(){return $}),n.d(e,"S",function(){return S}),n.d(e,"g",function(){return T}),n.d(e,"d",function(){return D}),n.d(e,"e",function(){return B}),n.d(e,"c",function(){return E}),n.d(e,"h",function(){return I}),n.d(e,"f",function(){return F}),n.d(e,"k",function(){return z}),n.d(e,"l",function(){return P}),n.d(e,"B",function(){return R}),n.d(e,"E",function(){return O}),n.d(e,"K",function(){return j}),n.d(e,"F",function(){return A}),n.d(e,"U",function(){return N}),n.d(e,"m",function(){return H}),n.d(e,"A",function(){return M}),n.d(e,"z",function(){return J}),n.d(e,"T",function(){return U}),n.d(e,"o",function(){return G}),n.d(e,"J",function(){return K}),n.d(e,"C",function(){return L}),n.d(e,"D",function(){return Q}),n.d(e,"G",function(){return V}),n.d(e,"Q",function(){return W}),n.d(e,"p",function(){return X}),n.d(e,"b",function(){return Y});var r=n("66df"),o=function(){return r["a"].request({url:"get_table_data",method:"get"})},i=function(){return r["a"].request({url:"member_level_data",method:"get"})},a=function(){return r["a"].request({url:"get_sitelevel_data",method:"get"})},u=function(){return r["a"].request({url:"get_commomlevel_data",method:"get"})},l=function(){return r["a"].request({url:"get_memberbonus_data",method:"get"})},c=function(){return r["a"].request({url:"get_member_log",method:"get"})},s=function(){return r["a"].request({url:"get_memberlogin_log",method:"get"})},d=function(){return r["a"].request({url:"get_memberfunds_log",method:"get"})},g=function(){return r["a"].request({url:"get_member_bank",method:"get"})},m=function(){return r["a"].request({url:"get_member_level_modify",method:"get"})},f=function(){return r["a"].request({url:"get_pay_online",method:"get"})},h=function(){return r["a"].request({url:"get_pay_company",method:"get"})},p=function(){return r["a"].request({url:"get_withdraws_online",method:"get"})},_=function(){return r["a"].request({url:"get_accounts_record",method:"get"})},b=function(){return r["a"].request({url:"get_preferential_record",method:"get"})},y=function(){return r["a"].request({url:"get_finance_summary_data",method:"get"})},v=function(){return r["a"].request({url:"get_pay_groups",method:"get"})},C=function(){return r["a"].request({url:"get_pay_manager1",method:"get"})},k=function(){return r["a"].request({url:"get_pay_manager2",method:"get"})},w=function(){return r["a"].request({url:"get_games_transfer",method:"get"})},x=function(){return r["a"].request({url:"get_card_management",method:"get"})},q=function(){return r["a"].request({url:"get_alipay_scan",method:"get"})},$=function(){return r["a"].request({url:"get_wechat_scan",method:"get"})},S=function(){return r["a"].request({url:"get_qq_scan",method:"get"})},T=function(){return r["a"].request({url:"get_agency_search",method:"get"})},D=function(){return r["a"].request({url:"get_agency_domain",method:"get"})},B=function(){return r["a"].request({url:"get_agency_level",method:"get"})},E=function(){return r["a"].request({url:"get_agency_dividend",method:"get"})},I=function(){return r["a"].request({url:"get_agency_underling",method:"get"})},F=function(){return r["a"].request({url:"get_agency_report",method:"get"})},z=function(){return r["a"].request({url:"get_check_subordinate",method:"get"})},P=function(){return r["a"].request({url:"get_current_lottery",method:"get"})},R=function(){return r["a"].request({url:"get_lottery_management",method:"get"})},O=function(){return r["a"].request({url:"get_lottery_setting",method:"get"})},j=function(){return r["a"].request({url:"get_odds_setting",method:"get"})},A=function(){return r["a"].request({url:"get_mark_time_setting",method:"get"})},N=function(){return r["a"].request({url:"get_time_setting",method:"get"})},H=function(){return r["a"].request({url:"get_fast_caipiao",method:"get"})},M=function(){return r["a"].request({url:"get_lottery_details",method:"get"})},J=function(){return r["a"].request({url:"get_lottery_quick",method:"get"})},U=function(){return r["a"].request({url:"get_report_total",method:"get"})},G=function(){return r["a"].request({url:"get_first_report",method:"get"})},K=function(){return r["a"].request({url:"get_member_report",method:"get"})},L=function(){return r["a"].request({url:"get_lottery_report",method:"get"})},Q=function(){return r["a"].request({url:"get_lottery_detail",method:"get"})},V=function(){return r["a"].request({url:"get_member_game_record",method:"get"})},W=function(){return r["a"].request({url:"get_platform_report",method:"get"})},X=function(){return r["a"].request({url:"get_game_record",method:"get"})},Y=function(){return r["a"].request({url:"get_add_code_detail",method:"get"})}},d9fc:function(t,e,n){"use strict";var r=n("25e5"),o=n.n(r);o.a},fa69:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Table",{ref:"tablesMain",attrs:{data:t.insideTableData,columns:t.insideColumns,stripe:t.stripe,border:t.border,"show-header":t.showHeader,width:t.width,height:t.height,loading:t.loading,"disabled-hover":t.disabledHover,"highlight-row":t.highlightRow,"row-class-name":t.rowClassName,size:t.size,"no-data-text":t.noDataText,"no-filtered-data-text":t.noFilteredDataText},on:{"on-current-change":t.onCurrentChange,"on-select":t.onSelect,"on-select-cancel":t.onSelectCancel,"on-select-all":t.onSelectAll,"on-selection-change":t.onSelectionChange,"on-sort-change":t.onSortChange,"on-filter-change":t.onFilterChange,"on-row-click":t.onRowClick,"on-row-dblclick":t.onRowDblclick,"on-expand":t.onExpand}},[t._t("header",null,{slot:"header"}),t._t("footer",null,{slot:"footer"}),t._t("loading",null,{slot:"loading"})],2),n("Row",{staticStyle:{"margin-top":"15px"}},[t.more?n("Col",{attrs:{span:"12"}},[t._t("more")],2):t._e(),n("Col",{attrs:{span:t.more?12:24}},[t.page?n("Page",{attrs:{total:t.total,"show-total":"","show-sizer":"",styles:t.pageStyle},on:{"on-change":t.onPageChange,"on-page-size-change":t.onPageSizeChange}}):t._e()],1)],1),n("a",{staticStyle:{display:"none",width:"0px",height:"0px"},attrs:{id:"hrefToExportTable"}})],1)},o=[],i=(n("ac6a"),n("c5f6"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tables-edit-outer"},[t.isEditting?n("div",{staticClass:"tables-editting-con"},[n("Input",{staticClass:"tables-edit-input",attrs:{value:t.value},on:{input:t.handleInput}}),n("Button",{staticStyle:{padding:"6px 4px"},attrs:{type:"text"},on:{click:t.saveEdit}},[n("Icon",{attrs:{type:"md-checkmark"}})],1),n("Button",{staticStyle:{padding:"6px 4px"},attrs:{type:"text"},on:{click:t.canceltEdit}},[n("Icon",{attrs:{type:"md-close"}})],1)],1):n("div",{staticClass:"tables-edit-con"},[n("span",{staticClass:"value-con"},[t._v(t._s(t.value))]),t.editable?n("Button",{staticClass:"tables-edit-btn",staticStyle:{padding:"2px 4px"},attrs:{type:"text"},on:{click:t.startEdit}},[n("Icon",{attrs:{type:"md-create"}})],1):t._e()],1)])}),a=[],u={name:"TablesEdit",props:{value:[String,Number],edittingCellId:String,params:Object,editable:Boolean},computed:{isEditting:function(){return this.edittingCellId==="editting-".concat(this.params.index,"-").concat(this.params.column.key)}},methods:{handleInput:function(t){this.$emit("input",t)},startEdit:function(){this.$emit("on-start-edit",this.params)},saveEdit:function(){this.$emit("on-save-edit",this.params)},canceltEdit:function(){this.$emit("on-cancel-edit",this.params)}}},l=u,c=(n("4974"),n("2877")),s=Object(c["a"])(l,i,a,!1,null,null,null),d=s.exports,g={delete:function(t,e,n){return t("a",{style:{margin:"0 5px",color:"#62B1FD"},on:{click:function(){n.$emit("on-delete",e)}}},"删除")},allot:function(t,e,n){return t("a",{style:{margin:"0 5px",color:"#62B1FD"},on:{click:function(){n.$emit("on-allot",e)}}},"等级分配")},edit:function(t,e,n){return t("a",{style:{margin:"0 5px",color:"#62B1FD"},on:{click:function(){n.$emit("on-edit",e)}}},"编辑")},details:function(t,e,n){return t("a",{style:{margin:"0 5px",color:"#62B1FD"},on:{click:function(){n.$emit("on-details",e)}}},"详情")},status:function(t,e,n){return t("a",{style:{margin:"0 5px",color:"#62B1FD"},on:{click:function(){n.$emit("on-change-status",e)}}},e.row.status?"停用":"启用")},frost:function(t,e,n){return t("a",{style:{margin:"0 5px",color:e.row.type?"#EBEBEB":"#57A3F3"},on:{click:function(){n.$emit("on-change-frost",e)}}},e.row.status?"解冻":"冻结")},frostStatus:function(t,e,n){return t("a",{style:{margin:"0 5px",color:e.row.type?"#EBEBEB":"#57A3F3"},on:{click:function(){n.$emit("on-change-status",e)}}},e.row.status?"停用":"启用")},odds:function(t,e,n){return t("a",{style:{margin:"0 5px",color:"#62B1FD"},on:{click:function(){n.$emit("on-check-odds",e)}}},"赔率")},remove:function(t,e,n){return t("a",{style:{margin:"0 5px",color:"#62B1FD"},on:{click:function(){n.$emit("on-remove",e)}}},"移出黑名单")},initialize:function(t,e,n){return t("a",{style:{margin:"0 5px",color:"#62B1FD"},on:{click:function(){n.$emit("on-initialize",e)}}},"初始化")}},m=g,f=(n("30d9"),{name:"Tables",props:{value:{type:[Array,Number,String],default:function(){return[]}},columns:{type:Array,default:function(){return[]}},size:String,width:{type:[Number,String]},height:{type:[Number,String]},stripe:{type:Boolean,default:!0},border:{type:Boolean,default:!0},showHeader:{type:Boolean,default:!0},highlightRow:{type:Boolean,default:!1},rowClassName:{type:Function,default:function(){return""}},context:{type:Object},noDataText:{type:String},noFilteredDataText:{type:String},disabledHover:{type:Boolean},loading:{type:Boolean,default:!1},page:{type:Boolean,default:!0},total:{type:[Number,String],default:0},editable:{type:Boolean,default:!1},more:{type:Boolean,default:!1}},data:function(){return{pageStyle:{textAlign:"right"},insideColumns:[],insideTableData:[],edittingCellId:"",edittingText:""}},watch:{columns:function(t){this.handleColumns(t)},value:function(t){this.handleTableData()}},mounted:function(){this.handleColumns(this.columns),this.handleTableData()},methods:{suportEdit:function(t,e){var n=this;return t.render=function(t,e){return t(d,{props:{params:e,value:n.insideTableData[e.index][e.column.key],edittingCellId:n.edittingCellId,editable:n.editable},on:{input:function(t){n.edittingText=t},"on-start-edit":function(t){n.edittingCellId="editting-".concat(t.index,"-").concat(t.column.key),n.$emit("on-start-edit",t)},"on-cancel-edit":function(t){n.edittingCellId="",n.$emit("on-cancel-edit",t)},"on-save-edit":function(t){n.value[t.row.initRowIndex][t.column.key]=n.edittingText,n.$emit("input",n.value),n.$emit("on-save-edit",Object.assign(t,{value:n.edittingText})),n.edittingCellId=""}}})},t},surportHandle:function(t){var e=this,n=t.options||[],r=[];n.forEach(function(t){m[t]&&r.push(m[t])});var o=t.button?[].concat(r,t.button):r;return t.render=function(t,n){return n.tableData=e.value,t("div",o.map(function(r){return r(t,n,e)}))},t},handleColumns:function(t){var e=this;this.insideColumns=t.map(function(t,n){var r=t;return r.editable&&(r=e.suportEdit(r,n)),"handle"===r.key&&(r=e.surportHandle(r)),r})},handleClear:function(t){""===t.target.value&&(this.insideTableData=this.value)},handleTableData:function(){this.insideTableData=this.value.map(function(t,e){var n=t;return n.initRowIndex=e,n})},exportCsv:function(t){this.$refs.tablesMain.exportCsv(t)},clearCurrentRow:function(){this.$refs.talbesMain.clearCurrentRow()},onCurrentChange:function(t,e){this.$emit("on-current-change",t,e)},onSelect:function(t,e){this.$emit("on-select",t,e)},onSelectCancel:function(t,e){this.$emit("on-select-cancel",t,e)},onSelectAll:function(t){this.$emit("on-select-all",t)},onSelectionChange:function(t){this.$emit("on-selection-change",t)},onSortChange:function(t,e,n){this.$emit("on-sort-change",t,e,n)},onFilterChange:function(t){this.$emit("on-filter-change",t)},onRowClick:function(t,e){this.$emit("on-row-click",t,e)},onRowDblclick:function(t,e){this.$emit("on-row-dblclick",t,e)},onExpand:function(t,e,n){this.$emit("on-expand",t,e,n)},onPageChange:function(t){this.$emit("on-page-change",t)},onPageSizeChange:function(t){this.$emit("on-page-size-change",t)}}}),h=f,p=(n("d9fc"),Object(c["a"])(h,r,o,!1,null,null,null)),_=p.exports;e["a"]=_}}]);