(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6ba2bfd8"],{2178:function(t,e,n){},"25e5":function(t,e,n){},"30d9":function(t,e,n){},4974:function(t,e,n){"use strict";var r=n("2178"),a=n.n(r);a.a},"68da":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"v2-search clearfix"},[n("Form",{ref:"searchKey",staticClass:"fl",attrs:{inline:""}},[n("FormItem",[n("Checkbox",[t._v("模糊")])],1),n("FormItem",{attrs:{label:"会员账号"}},[n("Input",{staticClass:"s-140",attrs:{placeholder:"多个请以,逗号隔开"},model:{value:t.searchKey.account,callback:function(e){t.$set(t.searchKey,"account",e)},expression:"searchKey.account"}})],1),n("FormItem",[n("Button",{staticClass:"search",attrs:{type:"primary"}},[t._v("查询")])],1),n("FormItem",[n("Button",{staticClass:"ivu-btn export",attrs:{type:"primary"}},[t._v("导出EXCEL")])],1)],1),t._m(0)],1),n("div",{staticClass:"v2-table"},[n("Tables",{attrs:{editable:"",columns:t.table.columns,loading:t.table.loading,total:t.table.total,value:t.table.data},on:{"on-page-change":t.onPageChange,"on-page-size-change":t.onPageSizeChange}},[n("div",{attrs:{slot:"footer"},slot:"footer"},[n("span",{staticClass:"ib br w10 txt-a"},[t._v("总计")]),n("span",{staticClass:"ib br w10 txt-a"},[t._v(t._s(t.betNumber))]),n("span",{staticClass:"ib br w10 txt-a"},[t._v(t._s(t._f("unit")(t.betAmount)))]),n("span",{staticClass:"ib br w10 txt-a"},[t._v(t._s(t._f("unit")(t.effectBet)))]),n("span",{staticClass:"ib br w10 txt-a"},[t._v(t._s(t._f("unit")(t.lotteryAmount)))]),n("span",{staticClass:"ib br w10 txt-a"},[t._v(t._s(t._f("unit")(t.memberWin)))]),n("span",{staticClass:"ib br w10 txt-a"},[t._v(t._s(t._f("unit")(t.withdrawalAmount)))]),n("span",{staticClass:"ib br w10 txt-a"},[t._v(t._s(t._f("unit")(t.rebateAmount)))]),n("span",{staticClass:"ib br w10 txt-a"},[t._v(t._s(t._f("unit")(t.profit)))]),n("span",{staticClass:"ib br w10 txt-a"},[t._v(t._s(t._f("unit")(t.winRate))+"%")])])])],1)])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"fr"},[n("span",{staticClass:"ft16",staticStyle:{fontWeight:"bold"}},[t._v("当前彩票：")]),n("span",{staticClass:"ft16"},[t._v("江苏快3")])])}],o=n("fa69"),i=n("7e1e"),u={name:"lotteryReportDetail",components:{Tables:o["a"]},data:function(){var t=this;this.$createElement;return{betNumber:0,betAmount:0,effectBet:0,lotteryAmount:0,memberWin:0,withdrawalAmount:0,rebateAmount:0,profit:0,winRate:0,searchKey:{},table:{loading:!0,total:100,data:[],columns:[{title:"会员账号",key:"memberWin",align:"center",render:function(e,n){return e("a",[e("span",{class:"blue-font",on:{click:function(){return t.$router.push({name:"gameReport",params:{type:"lottery"}})}}},[n.row.account])])}},{title:"注单数量",key:"betNumber",align:"center",sortable:!0},{title:"投注金额",key:"betAmount",align:"center",sortable:!0},{title:"有效投注",key:"effectBet",align:"center",sortable:!0},{title:"中奖金额",key:"lotteryAmount",align:"center",sortable:!0},{title:"会员输赢",key:"memberWin",align:"center",sortable:!0},{title:"撤单金额",key:"withdrawalAmount",align:"center",sortable:!0},{title:"返点金额",key:"rebateAmount",align:"center",sortable:!0},{title:"盈利",key:"profit",align:"center",sortable:!0},{title:"赢率",key:"winRate",align:"center",sortable:!0}]}}},methods:{getData:function(t){var e=this;this.betNumber=this.betAmount=this.effectBet=this.memberWin=this.withdrawalAmount=this.rebateAmount=this.lotteryAmount=this.profit=this.winRate=0,Object(i["D"])().then(function(t){e.table.loading=!0,setTimeout(function(){e.table.data=t.data,e.table.loading=!1,e.table.data.map(function(t){e.betNumber+=1*t.betNumber,e.betAmount+=1*t.betAmount,e.effectBet+=1*t.effectBet,e.lotteryAmount+=1*t.lotteryAmount,e.memberWin+=1*t.memberWin,e.withdrawalAmount+=1*t.withdrawalAmount,e.rebateAmount+=1*t.rebateAmount,e.profit=e.memberWin+e.rebateAmount,e.winRate=e.profit/e.betAmount})},2e3)})},onPageChange:function(t){this.getData(t)},onPageSizeChange:function(){}},mounted:function(){var t=this;this.$nextTick(function(){t.getData()})},filters:{unit:function(t){return t.toFixed(2)}}},l=u,c=(n("f3f3"),n("2877")),s=Object(c["a"])(l,r,a,!1,null,"1e465130",null);e["default"]=s.exports},"7e1e":function(t,e,n){"use strict";n.d(e,"x",function(){return a}),n.d(e,"H",function(){return o}),n.d(e,"y",function(){return i}),n.d(e,"r",function(){return u}),n.d(e,"t",function(){return l}),n.d(e,"v",function(){return c}),n.d(e,"w",function(){return s}),n.d(e,"u",function(){return d}),n.d(e,"s",function(){return f}),n.d(e,"I",function(){return m}),n.d(e,"M",function(){return g}),n.d(e,"L",function(){return h}),n.d(e,"W",function(){return p}),n.d(e,"a",function(){return _}),n.d(e,"R",function(){return b}),n.d(e,"n",function(){return y}),n.d(e,"N",function(){return v}),n.d(e,"O",function(){return w}),n.d(e,"P",function(){return C}),n.d(e,"q",function(){return x}),n.d(e,"j",function(){return q}),n.d(e,"i",function(){return k}),n.d(e,"V",function(){return $}),n.d(e,"S",function(){return B}),n.d(e,"g",function(){return A}),n.d(e,"d",function(){return S}),n.d(e,"e",function(){return D}),n.d(e,"c",function(){return E}),n.d(e,"h",function(){return T}),n.d(e,"f",function(){return F}),n.d(e,"k",function(){return I}),n.d(e,"l",function(){return R}),n.d(e,"B",function(){return z}),n.d(e,"E",function(){return N}),n.d(e,"K",function(){return P}),n.d(e,"F",function(){return W}),n.d(e,"U",function(){return j}),n.d(e,"m",function(){return O}),n.d(e,"A",function(){return H}),n.d(e,"z",function(){return K}),n.d(e,"T",function(){return M}),n.d(e,"o",function(){return J}),n.d(e,"J",function(){return L}),n.d(e,"C",function(){return G}),n.d(e,"D",function(){return Q}),n.d(e,"G",function(){return U}),n.d(e,"Q",function(){return V}),n.d(e,"p",function(){return X}),n.d(e,"b",function(){return Y});var r=n("66df"),a=function(){return r["a"].request({url:"get_table_data",method:"get"})},o=function(){return r["a"].request({url:"member_level_data",method:"get"})},i=function(){return r["a"].request({url:"get_sitelevel_data",method:"get"})},u=function(){return r["a"].request({url:"get_commomlevel_data",method:"get"})},l=function(){return r["a"].request({url:"get_memberbonus_data",method:"get"})},c=function(){return r["a"].request({url:"get_member_log",method:"get"})},s=function(){return r["a"].request({url:"get_memberlogin_log",method:"get"})},d=function(){return r["a"].request({url:"get_memberfunds_log",method:"get"})},f=function(){return r["a"].request({url:"get_member_bank",method:"get"})},m=function(){return r["a"].request({url:"get_member_level_modify",method:"get"})},g=function(){return r["a"].request({url:"get_pay_online",method:"get"})},h=function(){return r["a"].request({url:"get_pay_company",method:"get"})},p=function(){return r["a"].request({url:"get_withdraws_online",method:"get"})},_=function(){return r["a"].request({url:"get_accounts_record",method:"get"})},b=function(){return r["a"].request({url:"get_preferential_record",method:"get"})},y=function(){return r["a"].request({url:"get_finance_summary_data",method:"get"})},v=function(){return r["a"].request({url:"get_pay_groups",method:"get"})},w=function(){return r["a"].request({url:"get_pay_manager1",method:"get"})},C=function(){return r["a"].request({url:"get_pay_manager2",method:"get"})},x=function(){return r["a"].request({url:"get_games_transfer",method:"get"})},q=function(){return r["a"].request({url:"get_card_management",method:"get"})},k=function(){return r["a"].request({url:"get_alipay_scan",method:"get"})},$=function(){return r["a"].request({url:"get_wechat_scan",method:"get"})},B=function(){return r["a"].request({url:"get_qq_scan",method:"get"})},A=function(){return r["a"].request({url:"get_agency_search",method:"get"})},S=function(){return r["a"].request({url:"get_agency_domain",method:"get"})},D=function(){return r["a"].request({url:"get_agency_level",method:"get"})},E=function(){return r["a"].request({url:"get_agency_dividend",method:"get"})},T=function(){return r["a"].request({url:"get_agency_underling",method:"get"})},F=function(){return r["a"].request({url:"get_agency_report",method:"get"})},I=function(){return r["a"].request({url:"get_check_subordinate",method:"get"})},R=function(){return r["a"].request({url:"get_current_lottery",method:"get"})},z=function(){return r["a"].request({url:"get_lottery_management",method:"get"})},N=function(){return r["a"].request({url:"get_lottery_setting",method:"get"})},P=function(){return r["a"].request({url:"get_odds_setting",method:"get"})},W=function(){return r["a"].request({url:"get_mark_time_setting",method:"get"})},j=function(){return r["a"].request({url:"get_time_setting",method:"get"})},O=function(){return r["a"].request({url:"get_fast_caipiao",method:"get"})},H=function(){return r["a"].request({url:"get_lottery_details",method:"get"})},K=function(){return r["a"].request({url:"get_lottery_quick",method:"get"})},M=function(){return r["a"].request({url:"get_report_total",method:"get"})},J=function(){return r["a"].request({url:"get_first_report",method:"get"})},L=function(){return r["a"].request({url:"get_member_report",method:"get"})},G=function(){return r["a"].request({url:"get_lottery_report",method:"get"})},Q=function(){return r["a"].request({url:"get_lottery_detail",method:"get"})},U=function(){return r["a"].request({url:"get_member_game_record",method:"get"})},V=function(){return r["a"].request({url:"get_platform_report",method:"get"})},X=function(){return r["a"].request({url:"get_game_record",method:"get"})},Y=function(){return r["a"].request({url:"get_add_code_detail",method:"get"})}},a158:function(t,e,n){},d9fc:function(t,e,n){"use strict";var r=n("25e5"),a=n.n(r);a.a},f3f3:function(t,e,n){"use strict";var r=n("a158"),a=n.n(r);a.a},fa69:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Table",{ref:"tablesMain",attrs:{data:t.insideTableData,columns:t.insideColumns,stripe:t.stripe,border:t.border,"show-header":t.showHeader,width:t.width,height:t.height,loading:t.loading,"disabled-hover":t.disabledHover,"highlight-row":t.highlightRow,"row-class-name":t.rowClassName,size:t.size,"no-data-text":t.noDataText,"no-filtered-data-text":t.noFilteredDataText},on:{"on-current-change":t.onCurrentChange,"on-select":t.onSelect,"on-select-cancel":t.onSelectCancel,"on-select-all":t.onSelectAll,"on-selection-change":t.onSelectionChange,"on-sort-change":t.onSortChange,"on-filter-change":t.onFilterChange,"on-row-click":t.onRowClick,"on-row-dblclick":t.onRowDblclick,"on-expand":t.onExpand}},[t._t("header",null,{slot:"header"}),t._t("footer",null,{slot:"footer"}),t._t("loading",null,{slot:"loading"})],2),n("Row",{staticStyle:{"margin-top":"15px"}},[t.more?n("Col",{attrs:{span:"12"}},[t._t("more")],2):t._e(),n("Col",{attrs:{span:t.more?12:24}},[t.page?n("Page",{attrs:{total:t.total,"show-total":"","show-sizer":"",styles:t.pageStyle},on:{"on-change":t.onPageChange,"on-page-size-change":t.onPageSizeChange}}):t._e()],1)],1),n("a",{staticStyle:{display:"none",width:"0px",height:"0px"},attrs:{id:"hrefToExportTable"}})],1)},a=[],o=(n("ac6a"),n("c5f6"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tables-edit-outer"},[t.isEditting?n("div",{staticClass:"tables-editting-con"},[n("Input",{staticClass:"tables-edit-input",attrs:{value:t.value},on:{input:t.handleInput}}),n("Button",{staticStyle:{padding:"6px 4px"},attrs:{type:"text"},on:{click:t.saveEdit}},[n("Icon",{attrs:{type:"md-checkmark"}})],1),n("Button",{staticStyle:{padding:"6px 4px"},attrs:{type:"text"},on:{click:t.canceltEdit}},[n("Icon",{attrs:{type:"md-close"}})],1)],1):n("div",{staticClass:"tables-edit-con"},[n("span",{staticClass:"value-con"},[t._v(t._s(t.value))]),t.editable?n("Button",{staticClass:"tables-edit-btn",staticStyle:{padding:"2px 4px"},attrs:{type:"text"},on:{click:t.startEdit}},[n("Icon",{attrs:{type:"md-create"}})],1):t._e()],1)])}),i=[],u={name:"TablesEdit",props:{value:[String,Number],edittingCellId:String,params:Object,editable:Boolean},computed:{isEditting:function(){return this.edittingCellId==="editting-".concat(this.params.index,"-").concat(this.params.column.key)}},methods:{handleInput:function(t){this.$emit("input",t)},startEdit:function(){this.$emit("on-start-edit",this.params)},saveEdit:function(){this.$emit("on-save-edit",this.params)},canceltEdit:function(){this.$emit("on-cancel-edit",this.params)}}},l=u,c=(n("4974"),n("2877")),s=Object(c["a"])(l,o,i,!1,null,null,null),d=s.exports,f={delete:function(t,e,n){return t("a",{style:{margin:"0 5px",color:"#62B1FD"},on:{click:function(){n.$emit("on-delete",e)}}},"删除")},allot:function(t,e,n){return t("a",{style:{margin:"0 5px",color:"#62B1FD"},on:{click:function(){n.$emit("on-allot",e)}}},"等级分配")},edit:function(t,e,n){return t("a",{style:{margin:"0 5px",color:"#62B1FD"},on:{click:function(){n.$emit("on-edit",e)}}},"编辑")},details:function(t,e,n){return t("a",{style:{margin:"0 5px",color:"#62B1FD"},on:{click:function(){n.$emit("on-details",e)}}},"详情")},status:function(t,e,n){return t("a",{style:{margin:"0 5px",color:"#62B1FD"},on:{click:function(){n.$emit("on-change-status",e)}}},e.row.status?"停用":"启用")},frost:function(t,e,n){return t("a",{style:{margin:"0 5px",color:e.row.type?"#EBEBEB":"#57A3F3"},on:{click:function(){n.$emit("on-change-frost",e)}}},e.row.status?"解冻":"冻结")},frostStatus:function(t,e,n){return t("a",{style:{margin:"0 5px",color:e.row.type?"#EBEBEB":"#57A3F3"},on:{click:function(){n.$emit("on-change-status",e)}}},e.row.status?"停用":"启用")},odds:function(t,e,n){return t("a",{style:{margin:"0 5px",color:"#62B1FD"},on:{click:function(){n.$emit("on-check-odds",e)}}},"赔率")},remove:function(t,e,n){return t("a",{style:{margin:"0 5px",color:"#62B1FD"},on:{click:function(){n.$emit("on-remove",e)}}},"移出黑名单")},initialize:function(t,e,n){return t("a",{style:{margin:"0 5px",color:"#62B1FD"},on:{click:function(){n.$emit("on-initialize",e)}}},"初始化")}},m=f,g=(n("30d9"),{name:"Tables",props:{value:{type:[Array,Number,String],default:function(){return[]}},columns:{type:Array,default:function(){return[]}},size:String,width:{type:[Number,String]},height:{type:[Number,String]},stripe:{type:Boolean,default:!0},border:{type:Boolean,default:!0},showHeader:{type:Boolean,default:!0},highlightRow:{type:Boolean,default:!1},rowClassName:{type:Function,default:function(){return""}},context:{type:Object},noDataText:{type:String},noFilteredDataText:{type:String},disabledHover:{type:Boolean},loading:{type:Boolean,default:!1},page:{type:Boolean,default:!0},total:{type:[Number,String],default:0},editable:{type:Boolean,default:!1},more:{type:Boolean,default:!1}},data:function(){return{pageStyle:{textAlign:"right"},insideColumns:[],insideTableData:[],edittingCellId:"",edittingText:""}},watch:{columns:function(t){this.handleColumns(t)},value:function(t){this.handleTableData()}},mounted:function(){this.handleColumns(this.columns),this.handleTableData()},methods:{suportEdit:function(t,e){var n=this;return t.render=function(t,e){return t(d,{props:{params:e,value:n.insideTableData[e.index][e.column.key],edittingCellId:n.edittingCellId,editable:n.editable},on:{input:function(t){n.edittingText=t},"on-start-edit":function(t){n.edittingCellId="editting-".concat(t.index,"-").concat(t.column.key),n.$emit("on-start-edit",t)},"on-cancel-edit":function(t){n.edittingCellId="",n.$emit("on-cancel-edit",t)},"on-save-edit":function(t){n.value[t.row.initRowIndex][t.column.key]=n.edittingText,n.$emit("input",n.value),n.$emit("on-save-edit",Object.assign(t,{value:n.edittingText})),n.edittingCellId=""}}})},t},surportHandle:function(t){var e=this,n=t.options||[],r=[];n.forEach(function(t){m[t]&&r.push(m[t])});var a=t.button?[].concat(r,t.button):r;return t.render=function(t,n){return n.tableData=e.value,t("div",a.map(function(r){return r(t,n,e)}))},t},handleColumns:function(t){var e=this;this.insideColumns=t.map(function(t,n){var r=t;return r.editable&&(r=e.suportEdit(r,n)),"handle"===r.key&&(r=e.surportHandle(r)),r})},handleClear:function(t){""===t.target.value&&(this.insideTableData=this.value)},handleTableData:function(){this.insideTableData=this.value.map(function(t,e){var n=t;return n.initRowIndex=e,n})},exportCsv:function(t){this.$refs.tablesMain.exportCsv(t)},clearCurrentRow:function(){this.$refs.talbesMain.clearCurrentRow()},onCurrentChange:function(t,e){this.$emit("on-current-change",t,e)},onSelect:function(t,e){this.$emit("on-select",t,e)},onSelectCancel:function(t,e){this.$emit("on-select-cancel",t,e)},onSelectAll:function(t){this.$emit("on-select-all",t)},onSelectionChange:function(t){this.$emit("on-selection-change",t)},onSortChange:function(t,e,n){this.$emit("on-sort-change",t,e,n)},onFilterChange:function(t){this.$emit("on-filter-change",t)},onRowClick:function(t,e){this.$emit("on-row-click",t,e)},onRowDblclick:function(t,e){this.$emit("on-row-dblclick",t,e)},onExpand:function(t,e,n){this.$emit("on-expand",t,e,n)},onPageChange:function(t){this.$emit("on-page-change",t)},onPageSizeChange:function(t){this.$emit("on-page-size-change",t)}}}),h=g,p=(n("d9fc"),Object(c["a"])(h,r,a,!1,null,null,null)),_=p.exports;e["a"]=_}}]);