(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8e875674"],{1326:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"v2-search"},[n("Form",{ref:"searchKey",attrs:{inline:""}},[n("FormItem",{attrs:{label:"开始日期"}},[n("DatePicker",{staticClass:"s-140",attrs:{type:"date",placeholder:"请选择开始日期"},model:{value:t.Time[0],callback:function(e){t.$set(t.Time,0,e)},expression:"Time[0]"}})],1),n("FormItem",{attrs:{label:"结束日期"}},[n("DatePicker",{staticClass:"s-140",attrs:{type:"date",placeholder:"请选择结束日期"},model:{value:t.Time[1],callback:function(e){t.$set(t.Time,1,e)},expression:"Time[1]"}})],1),n("FormItem",[n("Checkbox",[n("span",{staticClass:"pl5"},[t._v("模糊")])])],1),n("FormItem",[n("Select",{staticClass:"s-140",model:{value:t.searchKey.type,callback:function(e){t.$set(t.searchKey,"type",e)},expression:"searchKey.type"}},[n("Option",{attrs:{value:"vip"}},[t._v("会员账号")]),n("Option",{attrs:{value:"vip"}},[t._v("上级代理")])],1)],1),n("FormItem",[n("Input",{staticClass:"s-140",attrs:{placeholder:"账号/姓名/上级代理"},model:{value:t.searchKey.account,callback:function(e){t.$set(t.searchKey,"account",e)},expression:"searchKey.account"}}),n("Poptip",{attrs:{trigger:"hover",content:"多个请以,逗号隔开,仅支持同类型多个输入",placement:"bottom-end"}},[n("Icons",{attrs:{type:"tishi",color:"#E4E4E4",size:26}})],1)],1),n("FormItem",[n("Button",{staticClass:"search ml10f",attrs:{type:"primary"},on:{click:t.searchSubmit}},[t._v("查询")])],1),n("FormItem",[n("Button",{staticClass:"ivu-btn export",attrs:{type:"primary"},on:{click:t.exportExcel}},[t._v("导出EXCEL")])],1)],1)],1),n("div",{staticClass:"v2-table"},[n("Tables",{ref:"tablesMain",staticClass:"mv",style:{width:t.myWidth},attrs:{editable:"",columns:t.table.columns,loading:t.table.loading,value:t.table.data,total:t.table.total},on:{"on-page-change":t.onPageChange,"on-page-size-change":t.onPageSizeChange,"on-sort-change":t.sortChange}},["middle"==t.userWidth?n("div",{staticStyle:{width:"99.9%"},attrs:{slot:"footer"},slot:"footer"},[n("span",{staticClass:"ib br txt-a w675",staticStyle:{width:"7.2%"}},[t._v("总计")]),n("span",{staticClass:"ib br  txt-a w675",staticStyle:{width:"7.0%"}},[t._v("-")]),n("span",{staticClass:"ib br txt-a w675",staticStyle:{width:"7.15%"}},[t._v("100000000.00")]),n("span",{staticClass:"ib br txt-a w675",staticStyle:{width:"7.15%"}},[t._v("100000000.00")]),n("span",{staticClass:"ib br txt-a w675",staticStyle:{width:"7.2%"}},[t._v("100000000.00")]),n("span",{staticClass:"ib br txt-a w675",staticStyle:{width:"7.1%"}},[t._v("100000000.00")]),n("span",{staticClass:"ib br txt-a w675",staticStyle:{width:"7.1%"}},[t._v("100000000.00")]),n("span",{staticClass:"ib br txt-a w675",staticStyle:{width:"7.1%"}},[t._v("100000000.00")]),n("span",{staticClass:"ib br txt-a w675",staticStyle:{width:"7.1%"}},[t._v("1.10%")]),n("span",{staticClass:"ib br txt-a w675",staticStyle:{width:"14.5%"}},[t._v("100000000.00(100000000笔)")]),n("span",{staticClass:"ib br txt-a w675",staticStyle:{width:"14.3%"}},[t._v("100000000.00(100000000笔)")]),n("span",{staticClass:"ib br txt-a w675",staticStyle:{width:"7.1%"}},[t._v("100000000.00")])]):t._e(),"large"==t.userWidth?n("div",{staticStyle:{width:"100%"},attrs:{slot:"footer"},slot:"footer"},[n("span",{staticClass:"ib br txt-a w675",staticStyle:{width:"7.9%"}},[t._v("总计")]),n("span",{staticClass:"ib br  txt-a w675",staticStyle:{width:"7.85%"}},[t._v("-")]),n("span",{staticClass:"ib br txt-a w675",staticStyle:{width:"7.92%"}},[t._v("100000000.00")]),n("span",{staticClass:"ib br txt-a w675",staticStyle:{width:"7.9%"}},[t._v("100000000.00")]),n("span",{staticClass:"ib br txt-a w675",staticStyle:{width:"7.9%"}},[t._v("100000000.00")]),n("span",{staticClass:"ib br txt-a w675",staticStyle:{width:"7.9%"}},[t._v("100000000.00")]),n("span",{staticClass:"ib br txt-a w675",staticStyle:{width:"7.9%"}},[t._v("100000000.00")]),n("span",{staticClass:"ib br txt-a w675",staticStyle:{width:"7.9%"}},[t._v("100000000.00")]),n("span",{staticClass:"ib br txt-a w675",staticStyle:{width:"7.9%"}},[t._v("1.10%")]),n("span",{staticClass:"ib br txt-a w675",staticStyle:{width:"10.53%"}},[t._v("100000000.00(100000000笔)")]),n("span",{staticClass:"ib br txt-a w675",staticStyle:{width:"10.51%"}},[t._v("100000000.00(100000000笔)")]),n("span",{staticClass:"ib br txt-a w675",staticStyle:{width:"7.86%"}},[t._v("100000000.00")])]):t._e()])],1)])},i=[],r=n("fa69"),o=n("83ae"),u=n("7e1e"),s=n("c276"),c={name:"memberReport",components:{Tables:r["a"],Icons:o["a"]},data:function(){return{myWidth:window.innerWidth-180+"px",userWidth:"",searchKey:{},Time:[],table:{loading:!0,total:100,columns:[{title:"会员账号",key:"account",align:"center"},{title:"上级代理",key:"superiorAgent",align:"center"},{title:"投注金额",key:"betAmount",align:"center",sortable:!0},{title:"有效投注",key:"effectBet",align:"center",sortable:!0},{title:"会员输赢",key:"memberWin",align:"center",sortable:!0},{title:"返点金额",key:"rebateAmount",align:"center",sortable:!0},{title:"优惠金额",key:"discountAmount",align:"center",sortable:!0},{title:"盈利",key:"profit",align:"center",sortable:!0},{title:"赢率",key:"winRate",align:"center",sortable:!0},{title:"存款金额",key:"depositAmount",align:"center",sortable:!0,width:"250"},{title:"取款金额",key:"withdrawalAmount",align:"center",sortable:!0,width:"250"},{title:"会员余额",key:"memberBalance",align:"center",sortable:!0}],data:[]}}},methods:{getData:function(t){var e=this;Object(u["J"])().then(function(t){e.table.loading=!0,setTimeout(function(){e.table.data=t.data,e.table.loading=!1},2e3)})},searchSubmit:function(){},exportExcel:function(){this.$refs.tablesMain.exportCsv({filename:"tablesMain-".concat((new Date).valueOf(),".csv")})},onPageChange:function(t){this.getData(t)},onPageSizeChange:function(){},sortChange:function(t){Object(s["r"])(t)}},mounted:function(){var t=this;this.$nextTick(function(){t.getData()}),window.onresize=function(){this.myWidth=window.innerWidth-10+"px"}},created:function(){var t=screen.width;this.userWidth=t>1920?"large":"middle"},filters:{unit:function(t){return t.toFixed(2)}}},l=c,d=(n("5437"),n("2877")),g=Object(d["a"])(l,a,i,!1,null,"7acfbb0d",null);e["default"]=g.exports},2178:function(t,e,n){},"25e5":function(t,e,n){},"30d9":function(t,e,n){},"32e7":function(t,e,n){},4974:function(t,e,n){"use strict";var a=n("2178"),i=n.n(a);i.a},5437:function(t,e,n){"use strict";var a=n("32e7"),i=n.n(a);i.a},"7e1e":function(t,e,n){"use strict";n.d(e,"x",function(){return i}),n.d(e,"H",function(){return r}),n.d(e,"y",function(){return o}),n.d(e,"r",function(){return u}),n.d(e,"t",function(){return s}),n.d(e,"v",function(){return c}),n.d(e,"w",function(){return l}),n.d(e,"u",function(){return d}),n.d(e,"s",function(){return g}),n.d(e,"I",function(){return f}),n.d(e,"M",function(){return h}),n.d(e,"L",function(){return m}),n.d(e,"W",function(){return p}),n.d(e,"a",function(){return b}),n.d(e,"R",function(){return _}),n.d(e,"n",function(){return y}),n.d(e,"N",function(){return v}),n.d(e,"O",function(){return w}),n.d(e,"P",function(){return C}),n.d(e,"q",function(){return x}),n.d(e,"j",function(){return S}),n.d(e,"i",function(){return k}),n.d(e,"V",function(){return q}),n.d(e,"S",function(){return $}),n.d(e,"g",function(){return T}),n.d(e,"d",function(){return B}),n.d(e,"e",function(){return E}),n.d(e,"c",function(){return D}),n.d(e,"h",function(){return I}),n.d(e,"f",function(){return F}),n.d(e,"k",function(){return z}),n.d(e,"l",function(){return A}),n.d(e,"B",function(){return R}),n.d(e,"E",function(){return P}),n.d(e,"K",function(){return O}),n.d(e,"F",function(){return W}),n.d(e,"U",function(){return j}),n.d(e,"m",function(){return K}),n.d(e,"A",function(){return N}),n.d(e,"z",function(){return H}),n.d(e,"T",function(){return M}),n.d(e,"o",function(){return J}),n.d(e,"J",function(){return L}),n.d(e,"C",function(){return G}),n.d(e,"D",function(){return Q}),n.d(e,"G",function(){return U}),n.d(e,"Q",function(){return V}),n.d(e,"p",function(){return X}),n.d(e,"b",function(){return Y});var a=n("66df"),i=function(){return a["a"].request({url:"get_table_data",method:"get"})},r=function(){return a["a"].request({url:"member_level_data",method:"get"})},o=function(){return a["a"].request({url:"get_sitelevel_data",method:"get"})},u=function(){return a["a"].request({url:"get_commomlevel_data",method:"get"})},s=function(){return a["a"].request({url:"get_memberbonus_data",method:"get"})},c=function(){return a["a"].request({url:"get_member_log",method:"get"})},l=function(){return a["a"].request({url:"get_memberlogin_log",method:"get"})},d=function(){return a["a"].request({url:"get_memberfunds_log",method:"get"})},g=function(){return a["a"].request({url:"get_member_bank",method:"get"})},f=function(){return a["a"].request({url:"get_member_level_modify",method:"get"})},h=function(){return a["a"].request({url:"get_pay_online",method:"get"})},m=function(){return a["a"].request({url:"get_pay_company",method:"get"})},p=function(){return a["a"].request({url:"get_withdraws_online",method:"get"})},b=function(){return a["a"].request({url:"get_accounts_record",method:"get"})},_=function(){return a["a"].request({url:"get_preferential_record",method:"get"})},y=function(){return a["a"].request({url:"get_finance_summary_data",method:"get"})},v=function(){return a["a"].request({url:"get_pay_groups",method:"get"})},w=function(){return a["a"].request({url:"get_pay_manager1",method:"get"})},C=function(){return a["a"].request({url:"get_pay_manager2",method:"get"})},x=function(){return a["a"].request({url:"get_games_transfer",method:"get"})},S=function(){return a["a"].request({url:"get_card_management",method:"get"})},k=function(){return a["a"].request({url:"get_alipay_scan",method:"get"})},q=function(){return a["a"].request({url:"get_wechat_scan",method:"get"})},$=function(){return a["a"].request({url:"get_qq_scan",method:"get"})},T=function(){return a["a"].request({url:"get_agency_search",method:"get"})},B=function(){return a["a"].request({url:"get_agency_domain",method:"get"})},E=function(){return a["a"].request({url:"get_agency_level",method:"get"})},D=function(){return a["a"].request({url:"get_agency_dividend",method:"get"})},I=function(){return a["a"].request({url:"get_agency_underling",method:"get"})},F=function(){return a["a"].request({url:"get_agency_report",method:"get"})},z=function(){return a["a"].request({url:"get_check_subordinate",method:"get"})},A=function(){return a["a"].request({url:"get_current_lottery",method:"get"})},R=function(){return a["a"].request({url:"get_lottery_management",method:"get"})},P=function(){return a["a"].request({url:"get_lottery_setting",method:"get"})},O=function(){return a["a"].request({url:"get_odds_setting",method:"get"})},W=function(){return a["a"].request({url:"get_mark_time_setting",method:"get"})},j=function(){return a["a"].request({url:"get_time_setting",method:"get"})},K=function(){return a["a"].request({url:"get_fast_caipiao",method:"get"})},N=function(){return a["a"].request({url:"get_lottery_details",method:"get"})},H=function(){return a["a"].request({url:"get_lottery_quick",method:"get"})},M=function(){return a["a"].request({url:"get_report_total",method:"get"})},J=function(){return a["a"].request({url:"get_first_report",method:"get"})},L=function(){return a["a"].request({url:"get_member_report",method:"get"})},G=function(){return a["a"].request({url:"get_lottery_report",method:"get"})},Q=function(){return a["a"].request({url:"get_lottery_detail",method:"get"})},U=function(){return a["a"].request({url:"get_member_game_record",method:"get"})},V=function(){return a["a"].request({url:"get_platform_report",method:"get"})},X=function(){return a["a"].request({url:"get_game_record",method:"get"})},Y=function(){return a["a"].request({url:"get_add_code_detail",method:"get"})}},d9fc:function(t,e,n){"use strict";var a=n("25e5"),i=n.n(a);i.a},fa69:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Table",{ref:"tablesMain",attrs:{data:t.insideTableData,columns:t.insideColumns,stripe:t.stripe,border:t.border,"show-header":t.showHeader,width:t.width,height:t.height,loading:t.loading,"disabled-hover":t.disabledHover,"highlight-row":t.highlightRow,"row-class-name":t.rowClassName,size:t.size,"no-data-text":t.noDataText,"no-filtered-data-text":t.noFilteredDataText},on:{"on-current-change":t.onCurrentChange,"on-select":t.onSelect,"on-select-cancel":t.onSelectCancel,"on-select-all":t.onSelectAll,"on-selection-change":t.onSelectionChange,"on-sort-change":t.onSortChange,"on-filter-change":t.onFilterChange,"on-row-click":t.onRowClick,"on-row-dblclick":t.onRowDblclick,"on-expand":t.onExpand}},[t._t("header",null,{slot:"header"}),t._t("footer",null,{slot:"footer"}),t._t("loading",null,{slot:"loading"})],2),n("Row",{staticStyle:{"margin-top":"15px"}},[t.more?n("Col",{attrs:{span:"12"}},[t._t("more")],2):t._e(),n("Col",{attrs:{span:t.more?12:24}},[t.page?n("Page",{attrs:{total:t.total,"show-total":"","show-sizer":"",styles:t.pageStyle},on:{"on-change":t.onPageChange,"on-page-size-change":t.onPageSizeChange}}):t._e()],1)],1),n("a",{staticStyle:{display:"none",width:"0px",height:"0px"},attrs:{id:"hrefToExportTable"}})],1)},i=[],r=(n("ac6a"),n("c5f6"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tables-edit-outer"},[t.isEditting?n("div",{staticClass:"tables-editting-con"},[n("Input",{staticClass:"tables-edit-input",attrs:{value:t.value},on:{input:t.handleInput}}),n("Button",{staticStyle:{padding:"6px 4px"},attrs:{type:"text"},on:{click:t.saveEdit}},[n("Icon",{attrs:{type:"md-checkmark"}})],1),n("Button",{staticStyle:{padding:"6px 4px"},attrs:{type:"text"},on:{click:t.canceltEdit}},[n("Icon",{attrs:{type:"md-close"}})],1)],1):n("div",{staticClass:"tables-edit-con"},[n("span",{staticClass:"value-con"},[t._v(t._s(t.value))]),t.editable?n("Button",{staticClass:"tables-edit-btn",staticStyle:{padding:"2px 4px"},attrs:{type:"text"},on:{click:t.startEdit}},[n("Icon",{attrs:{type:"md-create"}})],1):t._e()],1)])}),o=[],u={name:"TablesEdit",props:{value:[String,Number],edittingCellId:String,params:Object,editable:Boolean},computed:{isEditting:function(){return this.edittingCellId==="editting-".concat(this.params.index,"-").concat(this.params.column.key)}},methods:{handleInput:function(t){this.$emit("input",t)},startEdit:function(){this.$emit("on-start-edit",this.params)},saveEdit:function(){this.$emit("on-save-edit",this.params)},canceltEdit:function(){this.$emit("on-cancel-edit",this.params)}}},s=u,c=(n("4974"),n("2877")),l=Object(c["a"])(s,r,o,!1,null,null,null),d=l.exports,g={delete:function(t,e,n){return t("a",{style:{margin:"0 5px",color:"#62B1FD"},on:{click:function(){n.$emit("on-delete",e)}}},"删除")},allot:function(t,e,n){return t("a",{style:{margin:"0 5px",color:"#62B1FD"},on:{click:function(){n.$emit("on-allot",e)}}},"等级分配")},edit:function(t,e,n){return t("a",{style:{margin:"0 5px",color:"#62B1FD"},on:{click:function(){n.$emit("on-edit",e)}}},"编辑")},details:function(t,e,n){return t("a",{style:{margin:"0 5px",color:"#62B1FD"},on:{click:function(){n.$emit("on-details",e)}}},"详情")},status:function(t,e,n){return t("a",{style:{margin:"0 5px",color:"#62B1FD"},on:{click:function(){n.$emit("on-change-status",e)}}},e.row.status?"停用":"启用")},frost:function(t,e,n){return t("a",{style:{margin:"0 5px",color:e.row.type?"#EBEBEB":"#57A3F3"},on:{click:function(){n.$emit("on-change-frost",e)}}},e.row.status?"解冻":"冻结")},frostStatus:function(t,e,n){return t("a",{style:{margin:"0 5px",color:e.row.type?"#EBEBEB":"#57A3F3"},on:{click:function(){n.$emit("on-change-status",e)}}},e.row.status?"停用":"启用")},odds:function(t,e,n){return t("a",{style:{margin:"0 5px",color:"#62B1FD"},on:{click:function(){n.$emit("on-check-odds",e)}}},"赔率")},remove:function(t,e,n){return t("a",{style:{margin:"0 5px",color:"#62B1FD"},on:{click:function(){n.$emit("on-remove",e)}}},"移出黑名单")},initialize:function(t,e,n){return t("a",{style:{margin:"0 5px",color:"#62B1FD"},on:{click:function(){n.$emit("on-initialize",e)}}},"初始化")}},f=g,h=(n("30d9"),{name:"Tables",props:{value:{type:[Array,Number,String],default:function(){return[]}},columns:{type:Array,default:function(){return[]}},size:String,width:{type:[Number,String]},height:{type:[Number,String]},stripe:{type:Boolean,default:!0},border:{type:Boolean,default:!0},showHeader:{type:Boolean,default:!0},highlightRow:{type:Boolean,default:!1},rowClassName:{type:Function,default:function(){return""}},context:{type:Object},noDataText:{type:String},noFilteredDataText:{type:String},disabledHover:{type:Boolean},loading:{type:Boolean,default:!1},page:{type:Boolean,default:!0},total:{type:[Number,String],default:0},editable:{type:Boolean,default:!1},more:{type:Boolean,default:!1}},data:function(){return{pageStyle:{textAlign:"right"},insideColumns:[],insideTableData:[],edittingCellId:"",edittingText:""}},watch:{columns:function(t){this.handleColumns(t)},value:function(t){this.handleTableData()}},mounted:function(){this.handleColumns(this.columns),this.handleTableData()},methods:{suportEdit:function(t,e){var n=this;return t.render=function(t,e){return t(d,{props:{params:e,value:n.insideTableData[e.index][e.column.key],edittingCellId:n.edittingCellId,editable:n.editable},on:{input:function(t){n.edittingText=t},"on-start-edit":function(t){n.edittingCellId="editting-".concat(t.index,"-").concat(t.column.key),n.$emit("on-start-edit",t)},"on-cancel-edit":function(t){n.edittingCellId="",n.$emit("on-cancel-edit",t)},"on-save-edit":function(t){n.value[t.row.initRowIndex][t.column.key]=n.edittingText,n.$emit("input",n.value),n.$emit("on-save-edit",Object.assign(t,{value:n.edittingText})),n.edittingCellId=""}}})},t},surportHandle:function(t){var e=this,n=t.options||[],a=[];n.forEach(function(t){f[t]&&a.push(f[t])});var i=t.button?[].concat(a,t.button):a;return t.render=function(t,n){return n.tableData=e.value,t("div",i.map(function(a){return a(t,n,e)}))},t},handleColumns:function(t){var e=this;this.insideColumns=t.map(function(t,n){var a=t;return a.editable&&(a=e.suportEdit(a,n)),"handle"===a.key&&(a=e.surportHandle(a)),a})},handleClear:function(t){""===t.target.value&&(this.insideTableData=this.value)},handleTableData:function(){this.insideTableData=this.value.map(function(t,e){var n=t;return n.initRowIndex=e,n})},exportCsv:function(t){this.$refs.tablesMain.exportCsv(t)},clearCurrentRow:function(){this.$refs.talbesMain.clearCurrentRow()},onCurrentChange:function(t,e){this.$emit("on-current-change",t,e)},onSelect:function(t,e){this.$emit("on-select",t,e)},onSelectCancel:function(t,e){this.$emit("on-select-cancel",t,e)},onSelectAll:function(t){this.$emit("on-select-all",t)},onSelectionChange:function(t){this.$emit("on-selection-change",t)},onSortChange:function(t,e,n){this.$emit("on-sort-change",t,e,n)},onFilterChange:function(t){this.$emit("on-filter-change",t)},onRowClick:function(t,e){this.$emit("on-row-click",t,e)},onRowDblclick:function(t,e){this.$emit("on-row-dblclick",t,e)},onExpand:function(t,e,n){this.$emit("on-expand",t,e,n)},onPageChange:function(t){this.$emit("on-page-change",t)},onPageSizeChange:function(t){this.$emit("on-page-size-change",t)}}}),m=h,p=(n("d9fc"),Object(c["a"])(m,a,i,!1,null,null,null)),b=p.exports;e["a"]=b}}]);