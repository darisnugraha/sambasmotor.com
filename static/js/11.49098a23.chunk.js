(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{1072:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),s=a(5),r=a(33),i=a(14),l=a.n(i),c=a(112),d=a.n(c),p=a(388),m=a(44),u=a(67),h=a(160),b=a(161),g=a(6),f=a(10);class O extends n.Component{constructor(e){super(e),this.state={listGudang:[]}}componentDidMount(){Object(f.b)("hancur-barang/generate/no-trx").then(e=>this.props.change("no_pindah",e.data[0].no_hancur)),Object(f.b)("lokasi-gudang/get/all").then(e=>this.setState({listGudang:e&&e.data.map(e=>{return{value:e.kode_lokasi_gudang,name:e.nama_lokasi_gudang}})}))}render(){return o.a.createElement("div",null,o.a.createElement("form",{onSubmit:this.props.handleSubmit,autoComplete:!0},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-lg-3"},o.a.createElement(h.a,{name:"no_pindah",component:m.c,type:"text",label:"Nomor Pindah",placeholder:"Masukan Nomor Pindah",readOnly:!0})),o.a.createElement("div",{className:"col-lg-3"},o.a.createElement(h.a,{name:"tanggal",component:m.c,type:"date",label:"Tanggal",placeholder:"Masukan Tanggal"})),o.a.createElement("div",{className:"col-lg-3"},o.a.createElement(h.a,{name:"lokasi",component:m.e,options:this.state.listGudang,label:"Lokasi Gudang",placeholder:"Pilih Lokasi Gudang",onChange:e=>localStorage.setItem("lokasi_hancur",e)}))),o.a.createElement("div",{className:"row mb-3"},o.a.createElement("div",{className:"col-lg-6"},o.a.createElement("div",{className:"text-left"},o.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Simpan ",o.a.createElement("i",{className:"fa fa-paper-plane"})))),o.a.createElement("div",{className:"col-lg-6"},o.a.createElement("div",{className:"text-right"},o.a.createElement("button",{type:"button",className:"btn btn-warning",onClick:()=>this.props.dispatch(Object(g.Wb)())},"Tambah Barang ",o.a.createElement("i",{className:"fa fa-plus ml-3"})))))))}}O=Object(b.a)({form:"permintaanBarang",enableReinitialize:!0})(O);var E=Object(r.b)()(O),k=a(415),y=a(42),j=a(390),v=a(52),C=a(66);const N=Object(n.lazy)(()=>a.e(117).then(a.bind(null,1036))),_=(e,t)=>{l.a.fire({title:"Anda Yakin !!",text:"Ingin Menghapus Data Ini ?",icon:"warning",position:"top-center",cancelButtonText:"Tidak",showCancelButton:!0,confirmButtonText:"OK",showConfirmButton:!0}).then(e=>{e.isConfirmed&&Object(m.b)("Data Berhasil Di Hapus")})};t.default=Object(r.b)(e=>({hancur_temp:e.stocking.hancur_temp}),null)(class extends o.a.Component{constructor(e){super(e),this.state={isEdit:!1,modalDialog:!1,isLoading:!1,columns:[{dataField:"kode_barcode",text:"Kode Barcode",sort:!0},{dataField:"nama_barang",text:"Nama Barang"},{dataField:"merk",text:"Merk"},{dataField:"kwalitas",text:"Kwalitas"},{dataField:"satuan",text:"Satuan"},{dataField:"qty",text:"Qty"},{dataField:"action",text:"Action",csvExport:!1,headerClasses:"text-center",formatter:(e,t)=>{let a={kode_barcode:t.kode_barcode,nama_barang:t.nama_barang,merk:t.merk,kwalitas:t.kwalitas,satuan:t.satuan,qty:t.qty,harga_satuan:t.harga_satuan,total:t.total};return this.setState({}),o.a.createElement("div",{className:"row text-center"},o.a.createElement("div",{className:"col-12"},o.a.createElement("button",{onClick:()=>this.editModal(a),className:"btn btn-warning mr-3"},"Edit",o.a.createElement("i",{className:"fa fa-edit ml-2"})),o.a.createElement("button",{onClick:()=>_(t.kodeProvinsi,this.props.dispatch),className:"btn btn-danger"},"Hapus",o.a.createElement("i",{className:"fa fa-trash ml-2"}))))}}]}}componentDidMount(){this.props.dispatch(Object(y.g)()),Object(f.b)("hancur-barang/generate/no-trx").then(e=>localStorage.setItem("kode_hancur",e.data[0].no_hancur))}handleSubmit(e){let t=e.kode_supplier&&e.kode_supplier.split("||"),a=JSON.parse(localStorage.getItem("HancurBarang_temp"))||[],n=JSON.parse(localStorage.getItem("HancurBarang_temp_kirim"))||[],o={kode_barcode:e.kode_barcode,nama_barang:e.nama_barang,merk:e.merk,kwalitas:e.kwalitas,satuan:e.satuan,kode_supplier:t[0],qty:e.qty,kondisi:e.kondisi},s={kode_barcode:e.kode_barcode,kode_supplier:t[0],qty:e.qty,kondisi:e.kondisi};a.push(o),n.push(s),localStorage.setItem("HancurBarang_temp",JSON.stringify(a)),localStorage.setItem("HancurBarang_temp_kirim",JSON.stringify(n)),Object(m.b)("Berhasil Menambahan Data").then(()=>this.props.dispatch(Object(y.g)())).then(()=>this.props.dispatch(Object(g.Tb)()))}sendData(e){let t={no_hancur:localStorage.getItem("kode_hancur")||void 0,tanggal:e.tanggal,kode_lokasi_gudang:e.lokasi,detail_barang:JSON.parse(localStorage.getItem("HancurBarang_temp_kirim"))||[]};console.log(t);const a=[];JSON.parse(localStorage.getItem("HancurBarang_temp")).forEach((e,t)=>{const n=[++t,e.kode_barcode,e.nama_barang,e.merk,e.kwalitas,e.kondisi,e.satuan,e.qty];a.push(n)});let n=["NO","BARCODE","NAMA BARANG","MERK","KW","KONDISI","SATUAN","QTY"];Object(f.c)("hancur-barang/post-transaksi",t).then(()=>Object(k.a)("Tanggal",e.tanggal,"Lokasi",e.lokasi,"No Bukti",e.no_pindah,"","","ADMIN","01-28-2021","ADMIN",n,"BUKTI HANCUR STOK",a,[],!1)).then(()=>Object(m.b)("Berhasil Hancur Barang")).then(()=>Object(v.c)(["HancurBarang_temp","HancurBarang_temp_kirim","kode_hancur","lokasi_hancur"])).then(()=>this.props.dispatch(Object(C.a)("permintaanBarang"))).then(()=>this.props.dispatch(Object(y.g)())).catch(e=>Object(m.a)("Error: ".concat(e)))}render(){return o.a.createElement("div",null,o.a.createElement("ol",{className:"breadcrumb float-xl-right"},o.a.createElement("li",{className:"breadcrumb-item"},o.a.createElement(s.b,{to:"#"},"Data Master")),o.a.createElement("li",{className:"breadcrumb-item active"},"Hancur Barang")),o.a.createElement("h1",{className:"page-header"},"Hancur Barang "),o.a.createElement(u.a,null,o.a.createElement(u.c,null,"Hancur Barang"),o.a.createElement(u.b,null,o.a.createElement("br",null),o.a.createElement("div",{className:"col-lg-12"},o.a.createElement(E,{onSubmit:e=>this.sendData(e)})),o.a.createElement("div",{className:"col-lg-12"},o.a.createElement(j.a,{empty:!0,keyField:"kode_barcode",data:this.props.hancur_temp||[],columns:this.state.columns,CSVExport:!0,textEmpty:"Silahkan Piilih Lokasi Gudang dan Tekan Tombol Kuning Untuk Menambah Data"})),o.a.createElement("br",null),o.a.createElement(p.a,{title:this.state.isEdit?"Edit Data Permintaan Barang":"Tambah Data Barang",content:o.a.createElement(n.Suspense,{fallback:o.a.createElement(d.a,{width:"100%",height:50,count:2})},o.a.createElement(N,{onSubmit:e=>this.handleSubmit(e),onSend:this.props.onSend,isEdit:this.state.isEdit}))}))))}})},388:function(e,t,a){"use strict";var n=a(0),o=a.n(n),s=a(33),r=a(402),i=a(400),l=a(401),c=a(6);t.a=Object(s.b)(e=>({isOpen:e.datamaster.modalDialog}),null)(class extends n.Component{constructor(e){super(e),this.state={}}render(){return o.a.createElement(r.a,{backdrop:"static",keyboard:!1,isOpen:this.props.isOpen,toggle:()=>this.props.dispatch(Object(c.Tb)()),size:this.props.size||"xl"},o.a.createElement(i.a,{toggle:()=>this.props.dispatch(Object(c.Tb)())},this.props.title),o.a.createElement(l.a,null,this.props.content))}})},390:function(e,t,a){"use strict";var n=a(0),o=a.n(n),s=a(393),r=a.n(s),i=a(397),l=a.n(i),c=a(398),d=a.n(c),p=a(391),m=a.n(p);var u=function(e){return o.a.createElement("div",{className:"col-lg-12"},o.a.createElement("div",{className:"text-center"},o.a.createElement("img",{src:m.a,width:"250",height:"250",alt:"Empty"}),o.a.createElement("h5",null,e.text)))},h=a(112),b=a.n(h);const g=i.Search.SearchBar,f=i.CSVExport.ExportCSVButton;t.a=function(e){let t=e.textEmpty,a=e.handleClick,n=e.tambahData,s=e.expandRow,i=e.selectRow,c=e.exportCSV;return e.data?o.a.createElement(l.a,{keyField:e.keyField,data:e.data||[],columns:e.columns,search:!0},e=>o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-6"},o.a.createElement("div",{className:"text-left"},o.a.createElement(g,e.searchProps))),o.a.createElement("div",{className:"col-6"},o.a.createElement("div",{className:"text-right"},n&&o.a.createElement("button",{onClick:a,className:"btn btn-primary",type:"button"},"Tambah Data",o.a.createElement("i",{className:"fa fa-plus ml-3"})))),o.a.createElement("hr",null),o.a.createElement("div",{className:"col-12"},o.a.createElement(r.a,Object.assign({pagination:d()(),selectRow:i,expandRow:s},e.baseProps,{noDataIndication:o.a.createElement(u,{text:t||"Tidak Ada Data"})})),o.a.createElement("br",null),c&&o.a.createElement(f,e.csvProps,"Export CSV!!")))):e.empty?o.a.createElement(l.a,{keyField:e.keyField,data:e.data||[],columns:e.columns,search:!0},e=>o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-6"},o.a.createElement("div",{className:"text-left"},o.a.createElement(g,e.searchProps))),o.a.createElement("div",{className:"col-6"},o.a.createElement("div",{className:"text-right"},n&&o.a.createElement("button",{onClick:a,className:"btn btn-primary",type:"button"},"Tambah Data",o.a.createElement("i",{className:"fa fa-plus ml-3"})))),o.a.createElement("hr",null),o.a.createElement("div",{className:"col-12"},o.a.createElement(r.a,Object.assign({pagination:d()()},e.baseProps,{noDataIndication:o.a.createElement(u,{text:t||"Tidak Ada Data"})})),o.a.createElement("br",null),e.CSVExport&&o.a.createElement(f,e.csvProps,"Export CSV!!")))):o.a.createElement(b.a,{width:"100%",height:250})}},391:function(e,t,a){e.exports=a.p+"static/media/empty.02c14787.svg"},400:function(e,t,a){"use strict";var n=a(8),o=a(11),s=a(0),r=a.n(s),i=a(1),l=a.n(i),c=a(20),d=a.n(c),p=a(4),m={tag:p.n,wrapTag:p.n,toggle:l.a.func,className:l.a.string,cssModule:l.a.object,children:l.a.node,closeAriaLabel:l.a.string,charCode:l.a.oneOfType([l.a.string,l.a.number]),close:l.a.object},u=function(e){var t,a=e.className,s=e.cssModule,i=e.children,l=e.toggle,c=e.tag,m=e.wrapTag,u=e.closeAriaLabel,h=e.charCode,b=e.close,g=Object(o.a)(e,["className","cssModule","children","toggle","tag","wrapTag","closeAriaLabel","charCode","close"]),f=Object(p.j)(d()(a,"modal-header"),s);if(!b&&l){var O="number"===typeof h?String.fromCharCode(h):h;t=r.a.createElement("button",{type:"button",onClick:l,className:Object(p.j)("close",s),"aria-label":u},r.a.createElement("span",{"aria-hidden":"true"},O))}return r.a.createElement(m,Object(n.a)({},g,{className:f}),r.a.createElement(c,{className:Object(p.j)("modal-title",s)},i),b||t)};u.propTypes=m,u.defaultProps={tag:"h5",wrapTag:"div",closeAriaLabel:"Close",charCode:215},t.a=u},401:function(e,t,a){"use strict";var n=a(8),o=a(11),s=a(0),r=a.n(s),i=a(1),l=a.n(i),c=a(20),d=a.n(c),p=a(4),m={tag:p.n,className:l.a.string,cssModule:l.a.object},u=function(e){var t=e.className,a=e.cssModule,s=e.tag,i=Object(o.a)(e,["className","cssModule","tag"]),l=Object(p.j)(d()(t,"modal-body"),a);return r.a.createElement(s,Object(n.a)({},i,{className:l}))};u.propTypes=m,u.defaultProps={tag:"div"},t.a=u},402:function(e,t,a){"use strict";var n=a(45),o=a(8),s=a(21),r=a(12),i=a(0),l=a.n(i),c=a(1),d=a.n(c),p=a(20),m=a.n(p),u=a(28),h=a.n(u),b=a(4),g={children:d.a.node.isRequired,node:d.a.any},f=function(e){function t(){return e.apply(this,arguments)||this}Object(r.a)(t,e);var a=t.prototype;return a.componentWillUnmount=function(){this.defaultNode&&document.body.removeChild(this.defaultNode),this.defaultNode=null},a.render=function(){return b.d?(this.props.node||this.defaultNode||(this.defaultNode=document.createElement("div"),document.body.appendChild(this.defaultNode)),h.a.createPortal(this.props.children,this.props.node||this.defaultNode)):null},t}(l.a.Component);f.propTypes=g;var O=f,E=a(11),k=a(68);function y(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function j(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?y(Object(a),!0).forEach(function(t){Object(n.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):y(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var v=j(j({},k.Transition.propTypes),{},{children:d.a.oneOfType([d.a.arrayOf(d.a.node),d.a.node]),tag:b.n,baseClass:d.a.string,baseClassActive:d.a.string,className:d.a.string,cssModule:d.a.object,innerRef:d.a.oneOfType([d.a.object,d.a.string,d.a.func])}),C=j(j({},k.Transition.defaultProps),{},{tag:"div",baseClass:"fade",baseClassActive:"show",timeout:b.c.Fade,appear:!0,enter:!0,exit:!0,in:!0});function N(e){var t=e.tag,a=e.baseClass,n=e.baseClassActive,s=e.className,r=e.cssModule,i=e.children,c=e.innerRef,d=Object(E.a)(e,["tag","baseClass","baseClassActive","className","cssModule","children","innerRef"]),p=Object(b.l)(d,b.a),u=Object(b.k)(d,b.a);return l.a.createElement(k.Transition,p,function(e){var d="entered"===e,p=Object(b.j)(m()(s,a,d&&n),r);return l.a.createElement(t,Object(o.a)({className:p},u,{ref:c}),i)})}N.propTypes=v,N.defaultProps=C;var _=N;function x(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function T(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?x(Object(a),!0).forEach(function(t){Object(n.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):x(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}function w(){}var S=d.a.shape(_.propTypes),B={isOpen:d.a.bool,autoFocus:d.a.bool,centered:d.a.bool,scrollable:d.a.bool,size:d.a.string,toggle:d.a.func,keyboard:d.a.bool,role:d.a.string,labelledBy:d.a.string,backdrop:d.a.oneOfType([d.a.bool,d.a.oneOf(["static"])]),onEnter:d.a.func,onExit:d.a.func,onOpened:d.a.func,onClosed:d.a.func,children:d.a.node,className:d.a.string,wrapClassName:d.a.string,modalClassName:d.a.string,backdropClassName:d.a.string,contentClassName:d.a.string,external:d.a.node,fade:d.a.bool,cssModule:d.a.object,zIndex:d.a.oneOfType([d.a.number,d.a.string]),backdropTransition:S,modalTransition:S,innerRef:d.a.oneOfType([d.a.object,d.a.string,d.a.func]),unmountOnClose:d.a.bool,returnFocusAfterClose:d.a.bool,container:b.o},A=Object.keys(B),D={isOpen:!1,autoFocus:!0,centered:!1,scrollable:!1,role:"dialog",backdrop:!0,keyboard:!0,zIndex:1050,fade:!0,onOpened:w,onClosed:w,modalTransition:{timeout:b.c.Modal},backdropTransition:{mountOnEnter:!0,timeout:b.c.Fade},unmountOnClose:!0,returnFocusAfterClose:!0,container:"body"},M=function(e){function t(t){var a;return(a=e.call(this,t)||this)._element=null,a._originalBodyPadding=null,a.getFocusableChildren=a.getFocusableChildren.bind(Object(s.a)(a)),a.handleBackdropClick=a.handleBackdropClick.bind(Object(s.a)(a)),a.handleBackdropMouseDown=a.handleBackdropMouseDown.bind(Object(s.a)(a)),a.handleEscape=a.handleEscape.bind(Object(s.a)(a)),a.handleStaticBackdropAnimation=a.handleStaticBackdropAnimation.bind(Object(s.a)(a)),a.handleTab=a.handleTab.bind(Object(s.a)(a)),a.onOpened=a.onOpened.bind(Object(s.a)(a)),a.onClosed=a.onClosed.bind(Object(s.a)(a)),a.manageFocusAfterClose=a.manageFocusAfterClose.bind(Object(s.a)(a)),a.clearBackdropAnimationTimeout=a.clearBackdropAnimationTimeout.bind(Object(s.a)(a)),a.trapFocus=a.trapFocus.bind(Object(s.a)(a)),a.state={isOpen:!1,showStaticBackdropAnimation:!1},a}Object(r.a)(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this.props,t=e.isOpen,a=e.autoFocus,n=e.onEnter;t&&(this.init(),this.setState({isOpen:!0}),a&&this.setFocus()),n&&n(),document.addEventListener("focus",this.trapFocus,!0),this._isMounted=!0},a.componentDidUpdate=function(e,t){if(this.props.isOpen&&!e.isOpen)return this.init(),void this.setState({isOpen:!0});this.props.autoFocus&&this.state.isOpen&&!t.isOpen&&this.setFocus(),this._element&&e.zIndex!==this.props.zIndex&&(this._element.style.zIndex=this.props.zIndex)},a.componentWillUnmount=function(){this.clearBackdropAnimationTimeout(),this.props.onExit&&this.props.onExit(),this._element&&(this.destroy(),(this.props.isOpen||this.state.isOpen)&&this.close()),document.removeEventListener("focus",this.trapFocus,!0),this._isMounted=!1},a.trapFocus=function(e){if(this._element&&(!this._dialog||this._dialog.parentNode!==e.target)&&!(this.modalIndex<t.openCount-1)){for(var a=this.getFocusableChildren(),n=0;n<a.length;n++)if(a[n]===e.target)return;a.length>0&&(e.preventDefault(),e.stopPropagation(),a[0].focus())}},a.onOpened=function(e,t){this.props.onOpened(),(this.props.modalTransition.onEntered||w)(e,t)},a.onClosed=function(e){var t=this.props.unmountOnClose;this.props.onClosed(),(this.props.modalTransition.onExited||w)(e),t&&this.destroy(),this.close(),this._isMounted&&this.setState({isOpen:!1})},a.setFocus=function(){this._dialog&&this._dialog.parentNode&&"function"===typeof this._dialog.parentNode.focus&&this._dialog.parentNode.focus()},a.getFocusableChildren=function(){return this._element.querySelectorAll(b.f.join(", "))},a.getFocusedChild=function(){var e,t=this.getFocusableChildren();try{e=document.activeElement}catch(a){e=t[0]}return e},a.handleBackdropClick=function(e){if(e.target===this._mouseDownElement){e.stopPropagation();var t=this._dialog?this._dialog.parentNode:null;if(t&&e.target===t&&"static"===this.props.backdrop&&this.handleStaticBackdropAnimation(),!this.props.isOpen||!0!==this.props.backdrop)return;t&&e.target===t&&this.props.toggle&&this.props.toggle(e)}},a.handleTab=function(e){if(9===e.which&&!(this.modalIndex<t.openCount-1)){var a=this.getFocusableChildren(),n=a.length;if(0!==n){for(var o=this.getFocusedChild(),s=0,r=0;r<n;r+=1)if(a[r]===o){s=r;break}e.shiftKey&&0===s?(e.preventDefault(),a[n-1].focus()):e.shiftKey||s!==n-1||(e.preventDefault(),a[0].focus())}}},a.handleBackdropMouseDown=function(e){this._mouseDownElement=e.target},a.handleEscape=function(e){this.props.isOpen&&e.keyCode===b.i.esc&&this.props.toggle&&(this.props.keyboard?(e.preventDefault(),e.stopPropagation(),this.props.toggle(e)):"static"===this.props.backdrop&&(e.preventDefault(),e.stopPropagation(),this.handleStaticBackdropAnimation()))},a.handleStaticBackdropAnimation=function(){var e=this;this.clearBackdropAnimationTimeout(),this.setState({showStaticBackdropAnimation:!0}),this._backdropAnimationTimeout=setTimeout(function(){e.setState({showStaticBackdropAnimation:!1})},100)},a.init=function(){try{this._triggeringElement=document.activeElement}catch(e){this._triggeringElement=null}this._element||(this._element=document.createElement("div"),this._element.setAttribute("tabindex","-1"),this._element.style.position="relative",this._element.style.zIndex=this.props.zIndex,this._mountContainer=Object(b.h)(this.props.container),this._mountContainer.appendChild(this._element)),this._originalBodyPadding=Object(b.g)(),Object(b.e)(),0===t.openCount&&(document.body.className=m()(document.body.className,Object(b.j)("modal-open",this.props.cssModule))),this.modalIndex=t.openCount,t.openCount+=1},a.destroy=function(){this._element&&(this._mountContainer.removeChild(this._element),this._element=null),this.manageFocusAfterClose()},a.manageFocusAfterClose=function(){if(this._triggeringElement){var e=this.props.returnFocusAfterClose;this._triggeringElement.focus&&e&&this._triggeringElement.focus(),this._triggeringElement=null}},a.close=function(){if(t.openCount<=1){var e=Object(b.j)("modal-open",this.props.cssModule),a=new RegExp("(^| )"+e+"( |$)");document.body.className=document.body.className.replace(a," ").trim()}this.manageFocusAfterClose(),t.openCount=Math.max(0,t.openCount-1),Object(b.m)(this._originalBodyPadding)},a.renderModalDialog=function(){var e,t=this,a=Object(b.k)(this.props,A);return l.a.createElement("div",Object(o.a)({},a,{className:Object(b.j)(m()("modal-dialog",this.props.className,(e={},e["modal-"+this.props.size]=this.props.size,e["modal-dialog-centered"]=this.props.centered,e["modal-dialog-scrollable"]=this.props.scrollable,e)),this.props.cssModule),role:"document",ref:function(e){t._dialog=e}}),l.a.createElement("div",{className:Object(b.j)(m()("modal-content",this.props.contentClassName),this.props.cssModule)},this.props.children))},a.render=function(){var e=this.props.unmountOnClose;if(this._element&&(this.state.isOpen||!e)){var t=!!this._element&&!this.state.isOpen&&!e;this._element.style.display=t?"none":"block";var a=this.props,n=a.wrapClassName,s=a.modalClassName,r=a.backdropClassName,i=a.cssModule,c=a.isOpen,d=a.backdrop,p=a.role,u=a.labelledBy,h=a.external,g=a.innerRef,f={onClick:this.handleBackdropClick,onMouseDown:this.handleBackdropMouseDown,onKeyUp:this.handleEscape,onKeyDown:this.handleTab,style:{display:"block"},"aria-labelledby":u,role:p,tabIndex:"-1"},E=this.props.fade,k=T(T(T({},_.defaultProps),this.props.modalTransition),{},{baseClass:E?this.props.modalTransition.baseClass:"",timeout:E?this.props.modalTransition.timeout:0}),y=T(T(T({},_.defaultProps),this.props.backdropTransition),{},{baseClass:E?this.props.backdropTransition.baseClass:"",timeout:E?this.props.backdropTransition.timeout:0}),j=d&&(E?l.a.createElement(_,Object(o.a)({},y,{in:c&&!!d,cssModule:i,className:Object(b.j)(m()("modal-backdrop",r),i)})):l.a.createElement("div",{className:Object(b.j)(m()("modal-backdrop","show",r),i)}));return l.a.createElement(O,{node:this._element},l.a.createElement("div",{className:Object(b.j)(n)},l.a.createElement(_,Object(o.a)({},f,k,{in:c,onEntered:this.onOpened,onExited:this.onClosed,cssModule:i,className:Object(b.j)(m()("modal",s,this.state.showStaticBackdropAnimation&&"modal-static"),i),innerRef:g}),h,this.renderModalDialog()),j))}return null},a.clearBackdropAnimationTimeout=function(){this._backdropAnimationTimeout&&(clearTimeout(this._backdropAnimationTimeout),this._backdropAnimationTimeout=void 0)},t}(l.a.Component);M.propTypes=B,M.defaultProps=D,M.openCount=0;t.a=M},415:function(e,t,a){"use strict";var n=a(83);a(172);t.a=((e="",t="",a="",o="",s="",r="",i="",l="",c="",d="",p="",m=[],u="",h,b,g)=>{const f=new n.default;f.autoTable(m,h,{foot:b,startY:40,theme:"plain",bodyStyles:{lineWidth:.02,lineColor:"#000"},headStyles:{lineWidth:.02,lineColor:"#000",fillColor:[187,187,187]}});let O=f.lastAutoTable.finalY+10;f.text(u,14,15),f.setFontSize(10),f.text("".concat(e,"\t: ").concat(t),14,25),f.text("".concat(a,"\t: ").concat(o),120,25),f.text("".concat(s,"\t: ").concat(r),14,30),f.text("".concat(i,"\t: ").concat(l),120,30),g?(f.text("Mengetahui",27,O+5),f.text("(.................................)",20,O+25),f.text("Penerima",140,O+5),f.text("(.................................)",130,O+25)):(f.text("User\t: ".concat(c),14,O+10),f.text("Cetak\t: ".concat(d),14,O+16),f.text("Valid\t: ".concat(p),14,O+22));var E="<embed width='100%' height='100%' src='"+f.output("datauristring")+"'/>",k=window.open();k.document.open(),k.document.write(E),k.document.close()})}}]);
//# sourceMappingURL=11.49098a23.chunk.js.map