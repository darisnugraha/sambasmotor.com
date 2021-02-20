(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{1071:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),o=a(5),i=a(33),r=a(14),l=a.n(r),c=a(112),d=a.n(c),p=a(388),m=a(44),u=a(67),h=a(160),b=a(161),g=a(6),f=a(10);class O extends n.Component{constructor(e){super(e),this.state={listLokasi:[],listSupplier:[]}}componentDidMount(){Object(f.b)("lokasi-gudang/get/all").then(e=>this.setState({listLokasi:e.data.map(e=>{return{value:e.kode_lokasi_gudang,name:"".concat(e.nama_lokasi_gudang," - (").concat(e.kode_lokasi_gudang,")")}})})),Object(f.b)("supplier/get/all").then(e=>this.setState({listSupplier:e.data.map(e=>{return{value:e.kode_supplier,name:"".concat(e.nama_supplier," - (").concat(e.kode_supplier,")")}})})),Object(f.b)("konversi-barang/generate/no-trx").then(e=>this.props.change("no_pindah",e.data[0].no_pindah))}setLokasi(e){this.setState({lokasi_pilihan:e}),localStorage.setItem("lokasi_pilihan",e)}setSupplier(e){this.setState({supplier_pilihan:e}),localStorage.setItem("supplier_pilihan",e)}render(){return s.a.createElement("div",null,s.a.createElement("form",{onSubmit:this.props.handleSubmit,autoComplete:!0},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-3"},s.a.createElement(h.a,{name:"no_pindah",component:m.c,type:"text",label:"Nomor Pindah",placeholder:"Masukan Nomor Pindah",readOnly:!0})),s.a.createElement("div",{className:"col-lg-3"},s.a.createElement(h.a,{name:"tanggal",component:m.c,type:"date",label:"Tanggal",placeholder:"Masukan Tanggal"})),s.a.createElement("div",{className:"col-lg-3"},s.a.createElement(h.a,{name:"lokasi",component:m.e,options:this.state.listLokasi,label:"LOKASI",placeholder:"PILIH LOKASI",onChange:e=>this.setLokasi(e)})),s.a.createElement("div",{className:"col-lg-3"},s.a.createElement(h.a,{name:"supplier",component:m.e,options:this.state.listSupplier,label:"SUPPLIER",placeholder:"PILIH SUPPLIER",onChange:e=>this.setSupplier(e)}))),s.a.createElement("div",{className:"col-lg-12 mb-5"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-6"},s.a.createElement("div",{className:"text-left"},s.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Simpan ",s.a.createElement("i",{className:"fa fa-paper-plane"})))),s.a.createElement("div",{className:"col-lg-6"},s.a.createElement("div",{className:"text-right"},s.a.createElement("button",{type:"button",className:"btn btn-warning",onClick:()=>this.props.dispatch(Object(g.Wb)()),disabled:!this.state.lokasi_pilihan||!this.state.supplier_pilihan},"Tambah Barang ",s.a.createElement("i",{className:"fa fa-plus ml-3"}))))))))}}O=Object(b.a)({form:"permintaanBarang",enableReinitialize:!0})(O);var E=Object(i.b)(e=>({initialValues:{no_pindah:localStorage.getItem("no_pindah")||""}}),null)(O),_=a(415),j=a(42),k=a(390),v=a(52),y=a(66);const N=Object(n.lazy)(()=>a.e(118).then(a.bind(null,1035)));t.default=Object(i.b)(e=>({konversi_temp:e.stocking.konversi_temp}),null)(class extends s.a.Component{constructor(e){super(e),this.state={isEdit:!1,modalDialog:!1,isLoading:!1,columns:[{dataField:"kode_asal",text:"Kode Asal",sort:!0},{dataField:"qty_asal",text:"Qty"},{dataField:"kode_tujuan",text:"Kode Tujuan"},{dataField:"qty_tujuan",text:"Qty"},{dataField:"action",text:"Action",csvExport:!1,headerClasses:"text-center",formatter:(e,t)=>{let a={kode_asal:t.kode_asal,nama_barang_asal:t.nama_barang,qty_asal:t.qty,satuan_asal:t.satuan,kode_tujuan:t.kode_tujuan,nama_barang_tujuan:t.nama_barang,qty_tujuan:t.qty,satuan_tujuan:t.satuan};return this.setState({}),s.a.createElement("div",{className:"row text-center"},s.a.createElement("div",{className:"col-12"},s.a.createElement("button",{onClick:()=>this.editModal(a),className:"btn btn-warning mr-3"},"Edit",s.a.createElement("i",{className:"fa fa-edit ml-2"})),s.a.createElement("button",{onClick:()=>this.deleteBarang(t),className:"btn btn-danger"},"Hapus",s.a.createElement("i",{className:"fa fa-trash ml-2"}))))}}]}}deleteBarang(e){l.a.fire({title:"Anda Yakin !!",text:"Ingin Menghapus Data Ini ?",icon:"warning",position:"top-center",cancelButtonText:"Tidak",showCancelButton:!0,confirmButtonText:"OK",showConfirmButton:!0}).then(t=>{if(t.isConfirmed){let t=JSON.parse(localStorage.getItem("KonversiBarang_temp"))||[],a=t.findIndex(t=>t.kode_asal===e.kode_asal);t.splice(a,1),localStorage.setItem("KonversiBarang_temp",JSON.stringify(t)||[]),this.props.dispatch(Object(j.h)())}})}componentDidMount(){this.props.dispatch(Object(j.h)()),Object(f.b)("konversi-barang/generate/no-trx").then(e=>localStorage.setItem("no_pindah",e.data[0].no_pindah))}handleSubmit(e){let t=JSON.parse(localStorage.getItem("KonversiBarang_temp"))||[],a={kode_asal:e.kode_asal,nama_barang_asal:e.nama_barang_asal,qty_asal:e.qty_asal,satuan_asal:e.satuan_asal,kode_tujuan:e.kode_tujuan,nama_barang_tujuan:e.nama_barang_tujuan,qty_tujuan:e.qty_tujuan,satuan_tujuan:e.satuan_tujuan};t.push(a),localStorage.setItem("KonversiBarang_temp",JSON.stringify(t)),Object(m.b)("Berhasil Menambahan Data").then(()=>this.props.dispatch(Object(j.h)())).then(()=>this.props.dispatch(Object(g.Tb)()))}sendData(e){let t={no_pindah:e.no_pindah,tanggal:e.tanggal,kode_lokasi_gudang:e.lokasi,kode_supplier:e.supplier,detail_barang:JSON.parse(localStorage.getItem("KonversiBarang_temp"))||[]};console.log(t);const a=[];JSON.parse(localStorage.getItem("KonversiBarang_temp")).forEach((e,t)=>{const n=[++t,e.kode_asal,e.qty_asal,e.kode_tujuan,e.qty_tujuan];a.push(n)});let n=["NO","KODE ASAL","QTY","KODE TUJUAN","QTY"];Object(f.c)("konversi-barang/post-transaksi",t).then(()=>Object(_.a)("Tanggal",e.tanggal,"","","No Bukti",e.no_pindah,"","","ADMIN","01-28-2021","ADMIN",n,"BUKTI PERMINTAAN BARANG",a,[],!1)).then(()=>Object(m.b)("Berhasil Konversi barang")).then(()=>Object(v.c)(["no_pindah","lokasi_pilihan","supplier_pilihan","KonversiBarang_temp"])).then(()=>this.props.dispatch(Object(j.h)())).then(()=>this.props.dispatch(Object(y.a)("permintaanBarang"))).catch(e=>"Error : ".concat(e))}render(){return s.a.createElement("div",null,s.a.createElement("ol",{className:"breadcrumb float-xl-right"},s.a.createElement("li",{className:"breadcrumb-item"},s.a.createElement(o.b,{to:"#"},"Data Master")),s.a.createElement("li",{className:"breadcrumb-item active"},"Permintaan Barang")),s.a.createElement("h1",{className:"page-header"},"Permintaan Barang "),s.a.createElement(u.a,null,s.a.createElement(u.c,null,"Permintaan Barang"),s.a.createElement(u.b,null,s.a.createElement("br",null),s.a.createElement("div",{className:"col-lg-12"},s.a.createElement(E,{onSubmit:e=>this.sendData(e)})),s.a.createElement("div",{className:"col-lg-12"},s.a.createElement(k.a,{empty:!0,data:this.props.konversi_temp,columns:this.state.columns,keyField:"kode_asal",textEmpty:"Silahkan Lokasi -> lalu pilih Supplier -> lalu tambah barang"})),s.a.createElement("br",null),s.a.createElement(p.a,{title:this.state.isEdit?"Edit Data Permintaan Barang":"Tambah Data Barang",content:s.a.createElement(n.Suspense,{fallback:s.a.createElement(d.a,{width:"100%",height:50,count:2})},s.a.createElement(N,{onSubmit:e=>this.handleSubmit(e),onSend:this.props.onSend,isEdit:this.state.isEdit}))}))))}})},388:function(e,t,a){"use strict";var n=a(0),s=a.n(n),o=a(33),i=a(402),r=a(400),l=a(401),c=a(6);t.a=Object(o.b)(e=>({isOpen:e.datamaster.modalDialog}),null)(class extends n.Component{constructor(e){super(e),this.state={}}render(){return s.a.createElement(i.a,{backdrop:"static",keyboard:!1,isOpen:this.props.isOpen,toggle:()=>this.props.dispatch(Object(c.Tb)()),size:this.props.size||"xl"},s.a.createElement(r.a,{toggle:()=>this.props.dispatch(Object(c.Tb)())},this.props.title),s.a.createElement(l.a,null,this.props.content))}})},390:function(e,t,a){"use strict";var n=a(0),s=a.n(n),o=a(393),i=a.n(o),r=a(397),l=a.n(r),c=a(398),d=a.n(c),p=a(391),m=a.n(p);var u=function(e){return s.a.createElement("div",{className:"col-lg-12"},s.a.createElement("div",{className:"text-center"},s.a.createElement("img",{src:m.a,width:"250",height:"250",alt:"Empty"}),s.a.createElement("h5",null,e.text)))},h=a(112),b=a.n(h);const g=r.Search.SearchBar,f=r.CSVExport.ExportCSVButton;t.a=function(e){let t=e.textEmpty,a=e.handleClick,n=e.tambahData,o=e.expandRow,r=e.selectRow,c=e.exportCSV;return e.data?s.a.createElement(l.a,{keyField:e.keyField,data:e.data||[],columns:e.columns,search:!0},e=>s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-6"},s.a.createElement("div",{className:"text-left"},s.a.createElement(g,e.searchProps))),s.a.createElement("div",{className:"col-6"},s.a.createElement("div",{className:"text-right"},n&&s.a.createElement("button",{onClick:a,className:"btn btn-primary",type:"button"},"Tambah Data",s.a.createElement("i",{className:"fa fa-plus ml-3"})))),s.a.createElement("hr",null),s.a.createElement("div",{className:"col-12"},s.a.createElement(i.a,Object.assign({pagination:d()(),selectRow:r,expandRow:o},e.baseProps,{noDataIndication:s.a.createElement(u,{text:t||"Tidak Ada Data"})})),s.a.createElement("br",null),c&&s.a.createElement(f,e.csvProps,"Export CSV!!")))):e.empty?s.a.createElement(l.a,{keyField:e.keyField,data:e.data||[],columns:e.columns,search:!0},e=>s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-6"},s.a.createElement("div",{className:"text-left"},s.a.createElement(g,e.searchProps))),s.a.createElement("div",{className:"col-6"},s.a.createElement("div",{className:"text-right"},n&&s.a.createElement("button",{onClick:a,className:"btn btn-primary",type:"button"},"Tambah Data",s.a.createElement("i",{className:"fa fa-plus ml-3"})))),s.a.createElement("hr",null),s.a.createElement("div",{className:"col-12"},s.a.createElement(i.a,Object.assign({pagination:d()()},e.baseProps,{noDataIndication:s.a.createElement(u,{text:t||"Tidak Ada Data"})})),s.a.createElement("br",null),e.CSVExport&&s.a.createElement(f,e.csvProps,"Export CSV!!")))):s.a.createElement(b.a,{width:"100%",height:250})}},391:function(e,t,a){e.exports=a.p+"static/media/empty.02c14787.svg"},400:function(e,t,a){"use strict";var n=a(8),s=a(11),o=a(0),i=a.n(o),r=a(1),l=a.n(r),c=a(20),d=a.n(c),p=a(4),m={tag:p.n,wrapTag:p.n,toggle:l.a.func,className:l.a.string,cssModule:l.a.object,children:l.a.node,closeAriaLabel:l.a.string,charCode:l.a.oneOfType([l.a.string,l.a.number]),close:l.a.object},u=function(e){var t,a=e.className,o=e.cssModule,r=e.children,l=e.toggle,c=e.tag,m=e.wrapTag,u=e.closeAriaLabel,h=e.charCode,b=e.close,g=Object(s.a)(e,["className","cssModule","children","toggle","tag","wrapTag","closeAriaLabel","charCode","close"]),f=Object(p.j)(d()(a,"modal-header"),o);if(!b&&l){var O="number"===typeof h?String.fromCharCode(h):h;t=i.a.createElement("button",{type:"button",onClick:l,className:Object(p.j)("close",o),"aria-label":u},i.a.createElement("span",{"aria-hidden":"true"},O))}return i.a.createElement(m,Object(n.a)({},g,{className:f}),i.a.createElement(c,{className:Object(p.j)("modal-title",o)},r),b||t)};u.propTypes=m,u.defaultProps={tag:"h5",wrapTag:"div",closeAriaLabel:"Close",charCode:215},t.a=u},401:function(e,t,a){"use strict";var n=a(8),s=a(11),o=a(0),i=a.n(o),r=a(1),l=a.n(r),c=a(20),d=a.n(c),p=a(4),m={tag:p.n,className:l.a.string,cssModule:l.a.object},u=function(e){var t=e.className,a=e.cssModule,o=e.tag,r=Object(s.a)(e,["className","cssModule","tag"]),l=Object(p.j)(d()(t,"modal-body"),a);return i.a.createElement(o,Object(n.a)({},r,{className:l}))};u.propTypes=m,u.defaultProps={tag:"div"},t.a=u},402:function(e,t,a){"use strict";var n=a(45),s=a(8),o=a(21),i=a(12),r=a(0),l=a.n(r),c=a(1),d=a.n(c),p=a(20),m=a.n(p),u=a(28),h=a.n(u),b=a(4),g={children:d.a.node.isRequired,node:d.a.any},f=function(e){function t(){return e.apply(this,arguments)||this}Object(i.a)(t,e);var a=t.prototype;return a.componentWillUnmount=function(){this.defaultNode&&document.body.removeChild(this.defaultNode),this.defaultNode=null},a.render=function(){return b.d?(this.props.node||this.defaultNode||(this.defaultNode=document.createElement("div"),document.body.appendChild(this.defaultNode)),h.a.createPortal(this.props.children,this.props.node||this.defaultNode)):null},t}(l.a.Component);f.propTypes=g;var O=f,E=a(11),_=a(68);function j(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function k(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?j(Object(a),!0).forEach(function(t){Object(n.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):j(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var v=k(k({},_.Transition.propTypes),{},{children:d.a.oneOfType([d.a.arrayOf(d.a.node),d.a.node]),tag:b.n,baseClass:d.a.string,baseClassActive:d.a.string,className:d.a.string,cssModule:d.a.object,innerRef:d.a.oneOfType([d.a.object,d.a.string,d.a.func])}),y=k(k({},_.Transition.defaultProps),{},{tag:"div",baseClass:"fade",baseClassActive:"show",timeout:b.c.Fade,appear:!0,enter:!0,exit:!0,in:!0});function N(e){var t=e.tag,a=e.baseClass,n=e.baseClassActive,o=e.className,i=e.cssModule,r=e.children,c=e.innerRef,d=Object(E.a)(e,["tag","baseClass","baseClassActive","className","cssModule","children","innerRef"]),p=Object(b.l)(d,b.a),u=Object(b.k)(d,b.a);return l.a.createElement(_.Transition,p,function(e){var d="entered"===e,p=Object(b.j)(m()(o,a,d&&n),i);return l.a.createElement(t,Object(s.a)({className:p},u,{ref:c}),r)})}N.propTypes=v,N.defaultProps=y;var C=N;function x(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function S(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?x(Object(a),!0).forEach(function(t){Object(n.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):x(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}function T(){}var w=d.a.shape(C.propTypes),B={isOpen:d.a.bool,autoFocus:d.a.bool,centered:d.a.bool,scrollable:d.a.bool,size:d.a.string,toggle:d.a.func,keyboard:d.a.bool,role:d.a.string,labelledBy:d.a.string,backdrop:d.a.oneOfType([d.a.bool,d.a.oneOf(["static"])]),onEnter:d.a.func,onExit:d.a.func,onOpened:d.a.func,onClosed:d.a.func,children:d.a.node,className:d.a.string,wrapClassName:d.a.string,modalClassName:d.a.string,backdropClassName:d.a.string,contentClassName:d.a.string,external:d.a.node,fade:d.a.bool,cssModule:d.a.object,zIndex:d.a.oneOfType([d.a.number,d.a.string]),backdropTransition:w,modalTransition:w,innerRef:d.a.oneOfType([d.a.object,d.a.string,d.a.func]),unmountOnClose:d.a.bool,returnFocusAfterClose:d.a.bool,container:b.o},A=Object.keys(B),P={isOpen:!1,autoFocus:!0,centered:!1,scrollable:!1,role:"dialog",backdrop:!0,keyboard:!0,zIndex:1050,fade:!0,onOpened:T,onClosed:T,modalTransition:{timeout:b.c.Modal},backdropTransition:{mountOnEnter:!0,timeout:b.c.Fade},unmountOnClose:!0,returnFocusAfterClose:!0,container:"body"},D=function(e){function t(t){var a;return(a=e.call(this,t)||this)._element=null,a._originalBodyPadding=null,a.getFocusableChildren=a.getFocusableChildren.bind(Object(o.a)(a)),a.handleBackdropClick=a.handleBackdropClick.bind(Object(o.a)(a)),a.handleBackdropMouseDown=a.handleBackdropMouseDown.bind(Object(o.a)(a)),a.handleEscape=a.handleEscape.bind(Object(o.a)(a)),a.handleStaticBackdropAnimation=a.handleStaticBackdropAnimation.bind(Object(o.a)(a)),a.handleTab=a.handleTab.bind(Object(o.a)(a)),a.onOpened=a.onOpened.bind(Object(o.a)(a)),a.onClosed=a.onClosed.bind(Object(o.a)(a)),a.manageFocusAfterClose=a.manageFocusAfterClose.bind(Object(o.a)(a)),a.clearBackdropAnimationTimeout=a.clearBackdropAnimationTimeout.bind(Object(o.a)(a)),a.trapFocus=a.trapFocus.bind(Object(o.a)(a)),a.state={isOpen:!1,showStaticBackdropAnimation:!1},a}Object(i.a)(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this.props,t=e.isOpen,a=e.autoFocus,n=e.onEnter;t&&(this.init(),this.setState({isOpen:!0}),a&&this.setFocus()),n&&n(),document.addEventListener("focus",this.trapFocus,!0),this._isMounted=!0},a.componentDidUpdate=function(e,t){if(this.props.isOpen&&!e.isOpen)return this.init(),void this.setState({isOpen:!0});this.props.autoFocus&&this.state.isOpen&&!t.isOpen&&this.setFocus(),this._element&&e.zIndex!==this.props.zIndex&&(this._element.style.zIndex=this.props.zIndex)},a.componentWillUnmount=function(){this.clearBackdropAnimationTimeout(),this.props.onExit&&this.props.onExit(),this._element&&(this.destroy(),(this.props.isOpen||this.state.isOpen)&&this.close()),document.removeEventListener("focus",this.trapFocus,!0),this._isMounted=!1},a.trapFocus=function(e){if(this._element&&(!this._dialog||this._dialog.parentNode!==e.target)&&!(this.modalIndex<t.openCount-1)){for(var a=this.getFocusableChildren(),n=0;n<a.length;n++)if(a[n]===e.target)return;a.length>0&&(e.preventDefault(),e.stopPropagation(),a[0].focus())}},a.onOpened=function(e,t){this.props.onOpened(),(this.props.modalTransition.onEntered||T)(e,t)},a.onClosed=function(e){var t=this.props.unmountOnClose;this.props.onClosed(),(this.props.modalTransition.onExited||T)(e),t&&this.destroy(),this.close(),this._isMounted&&this.setState({isOpen:!1})},a.setFocus=function(){this._dialog&&this._dialog.parentNode&&"function"===typeof this._dialog.parentNode.focus&&this._dialog.parentNode.focus()},a.getFocusableChildren=function(){return this._element.querySelectorAll(b.f.join(", "))},a.getFocusedChild=function(){var e,t=this.getFocusableChildren();try{e=document.activeElement}catch(a){e=t[0]}return e},a.handleBackdropClick=function(e){if(e.target===this._mouseDownElement){e.stopPropagation();var t=this._dialog?this._dialog.parentNode:null;if(t&&e.target===t&&"static"===this.props.backdrop&&this.handleStaticBackdropAnimation(),!this.props.isOpen||!0!==this.props.backdrop)return;t&&e.target===t&&this.props.toggle&&this.props.toggle(e)}},a.handleTab=function(e){if(9===e.which&&!(this.modalIndex<t.openCount-1)){var a=this.getFocusableChildren(),n=a.length;if(0!==n){for(var s=this.getFocusedChild(),o=0,i=0;i<n;i+=1)if(a[i]===s){o=i;break}e.shiftKey&&0===o?(e.preventDefault(),a[n-1].focus()):e.shiftKey||o!==n-1||(e.preventDefault(),a[0].focus())}}},a.handleBackdropMouseDown=function(e){this._mouseDownElement=e.target},a.handleEscape=function(e){this.props.isOpen&&e.keyCode===b.i.esc&&this.props.toggle&&(this.props.keyboard?(e.preventDefault(),e.stopPropagation(),this.props.toggle(e)):"static"===this.props.backdrop&&(e.preventDefault(),e.stopPropagation(),this.handleStaticBackdropAnimation()))},a.handleStaticBackdropAnimation=function(){var e=this;this.clearBackdropAnimationTimeout(),this.setState({showStaticBackdropAnimation:!0}),this._backdropAnimationTimeout=setTimeout(function(){e.setState({showStaticBackdropAnimation:!1})},100)},a.init=function(){try{this._triggeringElement=document.activeElement}catch(e){this._triggeringElement=null}this._element||(this._element=document.createElement("div"),this._element.setAttribute("tabindex","-1"),this._element.style.position="relative",this._element.style.zIndex=this.props.zIndex,this._mountContainer=Object(b.h)(this.props.container),this._mountContainer.appendChild(this._element)),this._originalBodyPadding=Object(b.g)(),Object(b.e)(),0===t.openCount&&(document.body.className=m()(document.body.className,Object(b.j)("modal-open",this.props.cssModule))),this.modalIndex=t.openCount,t.openCount+=1},a.destroy=function(){this._element&&(this._mountContainer.removeChild(this._element),this._element=null),this.manageFocusAfterClose()},a.manageFocusAfterClose=function(){if(this._triggeringElement){var e=this.props.returnFocusAfterClose;this._triggeringElement.focus&&e&&this._triggeringElement.focus(),this._triggeringElement=null}},a.close=function(){if(t.openCount<=1){var e=Object(b.j)("modal-open",this.props.cssModule),a=new RegExp("(^| )"+e+"( |$)");document.body.className=document.body.className.replace(a," ").trim()}this.manageFocusAfterClose(),t.openCount=Math.max(0,t.openCount-1),Object(b.m)(this._originalBodyPadding)},a.renderModalDialog=function(){var e,t=this,a=Object(b.k)(this.props,A);return l.a.createElement("div",Object(s.a)({},a,{className:Object(b.j)(m()("modal-dialog",this.props.className,(e={},e["modal-"+this.props.size]=this.props.size,e["modal-dialog-centered"]=this.props.centered,e["modal-dialog-scrollable"]=this.props.scrollable,e)),this.props.cssModule),role:"document",ref:function(e){t._dialog=e}}),l.a.createElement("div",{className:Object(b.j)(m()("modal-content",this.props.contentClassName),this.props.cssModule)},this.props.children))},a.render=function(){var e=this.props.unmountOnClose;if(this._element&&(this.state.isOpen||!e)){var t=!!this._element&&!this.state.isOpen&&!e;this._element.style.display=t?"none":"block";var a=this.props,n=a.wrapClassName,o=a.modalClassName,i=a.backdropClassName,r=a.cssModule,c=a.isOpen,d=a.backdrop,p=a.role,u=a.labelledBy,h=a.external,g=a.innerRef,f={onClick:this.handleBackdropClick,onMouseDown:this.handleBackdropMouseDown,onKeyUp:this.handleEscape,onKeyDown:this.handleTab,style:{display:"block"},"aria-labelledby":u,role:p,tabIndex:"-1"},E=this.props.fade,_=S(S(S({},C.defaultProps),this.props.modalTransition),{},{baseClass:E?this.props.modalTransition.baseClass:"",timeout:E?this.props.modalTransition.timeout:0}),j=S(S(S({},C.defaultProps),this.props.backdropTransition),{},{baseClass:E?this.props.backdropTransition.baseClass:"",timeout:E?this.props.backdropTransition.timeout:0}),k=d&&(E?l.a.createElement(C,Object(s.a)({},j,{in:c&&!!d,cssModule:r,className:Object(b.j)(m()("modal-backdrop",i),r)})):l.a.createElement("div",{className:Object(b.j)(m()("modal-backdrop","show",i),r)}));return l.a.createElement(O,{node:this._element},l.a.createElement("div",{className:Object(b.j)(n)},l.a.createElement(C,Object(s.a)({},f,_,{in:c,onEntered:this.onOpened,onExited:this.onClosed,cssModule:r,className:Object(b.j)(m()("modal",o,this.state.showStaticBackdropAnimation&&"modal-static"),r),innerRef:g}),h,this.renderModalDialog()),k))}return null},a.clearBackdropAnimationTimeout=function(){this._backdropAnimationTimeout&&(clearTimeout(this._backdropAnimationTimeout),this._backdropAnimationTimeout=void 0)},t}(l.a.Component);D.propTypes=B,D.defaultProps=P,D.openCount=0;t.a=D},415:function(e,t,a){"use strict";var n=a(83);a(172);t.a=((e="",t="",a="",s="",o="",i="",r="",l="",c="",d="",p="",m=[],u="",h,b,g)=>{const f=new n.default;f.autoTable(m,h,{foot:b,startY:40,theme:"plain",bodyStyles:{lineWidth:.02,lineColor:"#000"},headStyles:{lineWidth:.02,lineColor:"#000",fillColor:[187,187,187]}});let O=f.lastAutoTable.finalY+10;f.text(u,14,15),f.setFontSize(10),f.text("".concat(e,"\t: ").concat(t),14,25),f.text("".concat(a,"\t: ").concat(s),120,25),f.text("".concat(o,"\t: ").concat(i),14,30),f.text("".concat(r,"\t: ").concat(l),120,30),g?(f.text("Mengetahui",27,O+5),f.text("(.................................)",20,O+25),f.text("Penerima",140,O+5),f.text("(.................................)",130,O+25)):(f.text("User\t: ".concat(c),14,O+10),f.text("Cetak\t: ".concat(d),14,O+16),f.text("Valid\t: ".concat(p),14,O+22));var E="<embed width='100%' height='100%' src='"+f.output("datauristring")+"'/>",_=window.open();_.document.open(),_.document.write(E),_.document.close()})}}]);
//# sourceMappingURL=12.bcfe149a.chunk.js.map