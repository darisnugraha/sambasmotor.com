(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{1023:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),s=a(5),r=a(67),i=a(33),c=a(44),l=a(6),d=a(388),p=a(112),m=a.n(p),u=a(66),h=a(10),b=a(390);const g=Object(n.lazy)(()=>a.e(62).then(a.bind(null,948)));t.default=Object(i.b)(e=>({hideModal:e.datamaster.modalDialog,onSend:e.datamaster.onSend,listcustomer:e.datamaster.listcustomer,noFaktur:e.datamaster.noFaktur}),null)(class extends o.a.Component{constructor(e){super(e),this.state={isEdit:!1,modalDialog:!1,isLoading:!1,columns:[{dataField:"nama_customer",text:"Nama",sort:!0},{dataField:"alamat",text:"Alamat"},{dataField:"kota",text:"Kota"},{dataField:"handphone",text:"Handphone"},{dataField:"nopol_kendaraan",text:"Nomor Polisi"},{dataField:"merk_kendaraan",text:"Merk"},{dataField:"warna_kendaraan",text:"Warna"},{dataField:"action",text:"Action",csvExport:!1,headerClasses:"text-center",formatter:(e,t)=>{let a={kode_customer:t.kode_customer,nama_customer:t.nama_customer,alamat:t.alamat,kota:t.kota,handphone:t.handphone,nopol_kendaraan:t.nopol_kendaraan,merk_kendaraan:t.merk_kendaraan,type_kendaraan:t.type_kendaraan,nomesin_kendaraan:t.nomesin_kendaraan,warna_kendaraan:t.warna_kendaraan};return this.setState({}),o.a.createElement("div",{className:"row text-center"},o.a.createElement("div",{className:"col-12"},o.a.createElement("button",{onClick:()=>this.editModal(a),className:"btn btn-warning mr-3"},"Edit",o.a.createElement("i",{className:"fa fa-edit ml-2"}))))}}],datakategori:[{nama_customer:"Octa",alamat_customer:"ARIA GRAHA",kota_customer:"BANDUNG",handphone_customer:"0988888",no_polisi:"D 4093 AAP",merk:"NMAX",type:"MATIC",no_mesin:"QWERT1234ASDFG",warna:"HITAM"}]}}componentDidMount(){this.props.dispatch(Object(l.xb)()),this.props.dispatch(Object(l.Ab)())}editModal(e){this.props.dispatch(Object(l.Wb)()),this.props.dispatch(Object(l.bb)(e)),this.setState({isEdit:!0})}tambahModal(){this.props.dispatch(Object(l.Wb)()),this.props.dispatch(Object(l.bb)("")),this.setState({isEdit:!1})}handleSubmit(e){let t={kode_customer:this.props.noFaktur||"-",nama_customer:e.nama_customer||"-",alamat:e.alamat_customer||"-",kota:e.kota_customer||"-",handphone:e.handphone_customer||"-",nopol_kendaraan:e.no_polisi||"-",merk_kendaraan:e.merk||"-",type_kendaraan:e.type||"-",nomesin_kendaraan:e.no_mesin||"-",warna_kendaraan:e.warna||"-"},a={nama_customer:e.nama_customer||"-",alamat:e.alamat_customer||"-",kota:e.kota_customer||"-",handphone:e.handphone_customer||"-",nopol_kendaraan:e.no_polisi||"-",merk_kendaraan:e.merk||"-",type_kendaraan:e.type||"-",nomesin_kendaraan:e.no_mesin||"-",warna_kendaraan:e.warna||"-"};this.state.isEdit?Object(h.d)("customer/update/by-kode-customer/"+e.kode_customer,a).then(()=>Object(c.b)("Berhasil Dirubah")).then(()=>this.props.dispatch(Object(u.a)("dataBarang"))).then(()=>this.props.dispatch(Object(l.Tb)())).then(()=>this.props.dispatch(Object(l.xb)())).then(()=>this.props.dispatch(Object(l.Ab)())).catch(()=>Object(c.a)("Sepertinya ada gangguan, Mohon ulang beberapa saat lagi")):Object(h.c)("customer/add",t).then(()=>Object(c.b)("Berhasil Ditambahkan")).then(()=>this.props.dispatch(Object(u.a)("dataBarang"))).then(()=>this.props.dispatch(Object(l.Tb)())).then(()=>this.props.dispatch(Object(l.xb)())).then(()=>this.props.dispatch(Object(l.Ab)())).catch(()=>Object(c.a)("Sepertinya ada gangguan, Mohon ulang beberapa saat lagi"))}render(){return o.a.createElement("div",null,o.a.createElement("ol",{className:"breadcrumb float-xl-right"},o.a.createElement("li",{className:"breadcrumb-item"},o.a.createElement(s.b,{to:"#"},"Data Master")),o.a.createElement("li",{className:"breadcrumb-item active"},"Master Customer")),o.a.createElement("h1",{className:"page-header"},"Master Customer "),o.a.createElement(r.a,null,o.a.createElement(r.c,null,"Master Customer"),o.a.createElement(r.b,null,o.a.createElement("br",null),o.a.createElement("div",{className:"col-lg-12"},o.a.createElement(b.a,{keyField:"kode_customer",data:this.props.listcustomer||[],columns:this.state.columns,CSVExport:!0,tambahData:!0,handleClick:()=>this.tambahModal()})),o.a.createElement("br",null)),o.a.createElement(d.a,{title:this.state.isEdit?"Edit Data Customer":"Tambah Data Customer",content:o.a.createElement(n.Suspense,{fallback:o.a.createElement(m.a,{width:"100%",height:50,count:2})},o.a.createElement(g,{onSubmit:e=>this.handleSubmit(e),onSend:this.props.onSend,isEdit:this.state.isEdit,noFaktur:this.props.noFaktur}))})))}})},388:function(e,t,a){"use strict";var n=a(0),o=a.n(n),s=a(33),r=a(402),i=a(400),c=a(401),l=a(6);t.a=Object(s.b)(e=>({isOpen:e.datamaster.modalDialog}),null)(class extends n.Component{constructor(e){super(e),this.state={}}render(){return o.a.createElement(r.a,{backdrop:"static",keyboard:!1,isOpen:this.props.isOpen,toggle:()=>this.props.dispatch(Object(l.Tb)()),size:this.props.size||"xl"},o.a.createElement(i.a,{toggle:()=>this.props.dispatch(Object(l.Tb)())},this.props.title),o.a.createElement(c.a,null,this.props.content))}})},390:function(e,t,a){"use strict";var n=a(0),o=a.n(n),s=a(393),r=a.n(s),i=a(397),c=a.n(i),l=a(398),d=a.n(l),p=a(391),m=a.n(p);var u=function(e){return o.a.createElement("div",{className:"col-lg-12"},o.a.createElement("div",{className:"text-center"},o.a.createElement("img",{src:m.a,width:"250",height:"250",alt:"Empty"}),o.a.createElement("h5",null,e.text)))},h=a(112),b=a.n(h);const g=i.Search.SearchBar,f=i.CSVExport.ExportCSVButton;t.a=function(e){let t=e.textEmpty,a=e.handleClick,n=e.tambahData,s=e.expandRow,i=e.selectRow,l=e.exportCSV;return e.data?o.a.createElement(c.a,{keyField:e.keyField,data:e.data||[],columns:e.columns,search:!0},e=>o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-6"},o.a.createElement("div",{className:"text-left"},o.a.createElement(g,e.searchProps))),o.a.createElement("div",{className:"col-6"},o.a.createElement("div",{className:"text-right"},n&&o.a.createElement("button",{onClick:a,className:"btn btn-primary",type:"button"},"Tambah Data",o.a.createElement("i",{className:"fa fa-plus ml-3"})))),o.a.createElement("hr",null),o.a.createElement("div",{className:"col-12"},o.a.createElement(r.a,Object.assign({pagination:d()(),selectRow:i,expandRow:s},e.baseProps,{noDataIndication:o.a.createElement(u,{text:t||"Tidak Ada Data"})})),o.a.createElement("br",null),l&&o.a.createElement(f,e.csvProps,"Export CSV!!")))):e.empty?o.a.createElement(c.a,{keyField:e.keyField,data:e.data||[],columns:e.columns,search:!0},e=>o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-6"},o.a.createElement("div",{className:"text-left"},o.a.createElement(g,e.searchProps))),o.a.createElement("div",{className:"col-6"},o.a.createElement("div",{className:"text-right"},n&&o.a.createElement("button",{onClick:a,className:"btn btn-primary",type:"button"},"Tambah Data",o.a.createElement("i",{className:"fa fa-plus ml-3"})))),o.a.createElement("hr",null),o.a.createElement("div",{className:"col-12"},o.a.createElement(r.a,Object.assign({pagination:d()()},e.baseProps,{noDataIndication:o.a.createElement(u,{text:t||"Tidak Ada Data"})})),o.a.createElement("br",null),e.CSVExport&&o.a.createElement(f,e.csvProps,"Export CSV!!")))):o.a.createElement(b.a,{width:"100%",height:250})}},391:function(e,t,a){e.exports=a.p+"static/media/empty.02c14787.svg"},400:function(e,t,a){"use strict";var n=a(8),o=a(11),s=a(0),r=a.n(s),i=a(1),c=a.n(i),l=a(20),d=a.n(l),p=a(4),m={tag:p.n,wrapTag:p.n,toggle:c.a.func,className:c.a.string,cssModule:c.a.object,children:c.a.node,closeAriaLabel:c.a.string,charCode:c.a.oneOfType([c.a.string,c.a.number]),close:c.a.object},u=function(e){var t,a=e.className,s=e.cssModule,i=e.children,c=e.toggle,l=e.tag,m=e.wrapTag,u=e.closeAriaLabel,h=e.charCode,b=e.close,g=Object(o.a)(e,["className","cssModule","children","toggle","tag","wrapTag","closeAriaLabel","charCode","close"]),f=Object(p.j)(d()(a,"modal-header"),s);if(!b&&c){var O="number"===typeof h?String.fromCharCode(h):h;t=r.a.createElement("button",{type:"button",onClick:c,className:Object(p.j)("close",s),"aria-label":u},r.a.createElement("span",{"aria-hidden":"true"},O))}return r.a.createElement(m,Object(n.a)({},g,{className:f}),r.a.createElement(l,{className:Object(p.j)("modal-title",s)},i),b||t)};u.propTypes=m,u.defaultProps={tag:"h5",wrapTag:"div",closeAriaLabel:"Close",charCode:215},t.a=u},401:function(e,t,a){"use strict";var n=a(8),o=a(11),s=a(0),r=a.n(s),i=a(1),c=a.n(i),l=a(20),d=a.n(l),p=a(4),m={tag:p.n,className:c.a.string,cssModule:c.a.object},u=function(e){var t=e.className,a=e.cssModule,s=e.tag,i=Object(o.a)(e,["className","cssModule","tag"]),c=Object(p.j)(d()(t,"modal-body"),a);return r.a.createElement(s,Object(n.a)({},i,{className:c}))};u.propTypes=m,u.defaultProps={tag:"div"},t.a=u},402:function(e,t,a){"use strict";var n=a(45),o=a(8),s=a(21),r=a(12),i=a(0),c=a.n(i),l=a(1),d=a.n(l),p=a(20),m=a.n(p),u=a(28),h=a.n(u),b=a(4),g={children:d.a.node.isRequired,node:d.a.any},f=function(e){function t(){return e.apply(this,arguments)||this}Object(r.a)(t,e);var a=t.prototype;return a.componentWillUnmount=function(){this.defaultNode&&document.body.removeChild(this.defaultNode),this.defaultNode=null},a.render=function(){return b.d?(this.props.node||this.defaultNode||(this.defaultNode=document.createElement("div"),document.body.appendChild(this.defaultNode)),h.a.createPortal(this.props.children,this.props.node||this.defaultNode)):null},t}(c.a.Component);f.propTypes=g;var O=f,k=a(11),E=a(68);function j(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function y(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?j(Object(a),!0).forEach(function(t){Object(n.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):j(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var C=y(y({},E.Transition.propTypes),{},{children:d.a.oneOfType([d.a.arrayOf(d.a.node),d.a.node]),tag:b.n,baseClass:d.a.string,baseClassActive:d.a.string,className:d.a.string,cssModule:d.a.object,innerRef:d.a.oneOfType([d.a.object,d.a.string,d.a.func])}),_=y(y({},E.Transition.defaultProps),{},{tag:"div",baseClass:"fade",baseClassActive:"show",timeout:b.c.Fade,appear:!0,enter:!0,exit:!0,in:!0});function v(e){var t=e.tag,a=e.baseClass,n=e.baseClassActive,s=e.className,r=e.cssModule,i=e.children,l=e.innerRef,d=Object(k.a)(e,["tag","baseClass","baseClassActive","className","cssModule","children","innerRef"]),p=Object(b.l)(d,b.a),u=Object(b.k)(d,b.a);return c.a.createElement(E.Transition,p,function(e){var d="entered"===e,p=Object(b.j)(m()(s,a,d&&n),r);return c.a.createElement(t,Object(o.a)({className:p},u,{ref:l}),i)})}v.propTypes=C,v.defaultProps=_;var N=v;function x(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function w(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?x(Object(a),!0).forEach(function(t){Object(n.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):x(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}function T(){}var A=d.a.shape(N.propTypes),F={isOpen:d.a.bool,autoFocus:d.a.bool,centered:d.a.bool,scrollable:d.a.bool,size:d.a.string,toggle:d.a.func,keyboard:d.a.bool,role:d.a.string,labelledBy:d.a.string,backdrop:d.a.oneOfType([d.a.bool,d.a.oneOf(["static"])]),onEnter:d.a.func,onExit:d.a.func,onOpened:d.a.func,onClosed:d.a.func,children:d.a.node,className:d.a.string,wrapClassName:d.a.string,modalClassName:d.a.string,backdropClassName:d.a.string,contentClassName:d.a.string,external:d.a.node,fade:d.a.bool,cssModule:d.a.object,zIndex:d.a.oneOfType([d.a.number,d.a.string]),backdropTransition:A,modalTransition:A,innerRef:d.a.oneOfType([d.a.object,d.a.string,d.a.func]),unmountOnClose:d.a.bool,returnFocusAfterClose:d.a.bool,container:b.o},M=Object.keys(F),D={isOpen:!1,autoFocus:!0,centered:!1,scrollable:!1,role:"dialog",backdrop:!0,keyboard:!0,zIndex:1050,fade:!0,onOpened:T,onClosed:T,modalTransition:{timeout:b.c.Modal},backdropTransition:{mountOnEnter:!0,timeout:b.c.Fade},unmountOnClose:!0,returnFocusAfterClose:!0,container:"body"},S=function(e){function t(t){var a;return(a=e.call(this,t)||this)._element=null,a._originalBodyPadding=null,a.getFocusableChildren=a.getFocusableChildren.bind(Object(s.a)(a)),a.handleBackdropClick=a.handleBackdropClick.bind(Object(s.a)(a)),a.handleBackdropMouseDown=a.handleBackdropMouseDown.bind(Object(s.a)(a)),a.handleEscape=a.handleEscape.bind(Object(s.a)(a)),a.handleStaticBackdropAnimation=a.handleStaticBackdropAnimation.bind(Object(s.a)(a)),a.handleTab=a.handleTab.bind(Object(s.a)(a)),a.onOpened=a.onOpened.bind(Object(s.a)(a)),a.onClosed=a.onClosed.bind(Object(s.a)(a)),a.manageFocusAfterClose=a.manageFocusAfterClose.bind(Object(s.a)(a)),a.clearBackdropAnimationTimeout=a.clearBackdropAnimationTimeout.bind(Object(s.a)(a)),a.trapFocus=a.trapFocus.bind(Object(s.a)(a)),a.state={isOpen:!1,showStaticBackdropAnimation:!1},a}Object(r.a)(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this.props,t=e.isOpen,a=e.autoFocus,n=e.onEnter;t&&(this.init(),this.setState({isOpen:!0}),a&&this.setFocus()),n&&n(),document.addEventListener("focus",this.trapFocus,!0),this._isMounted=!0},a.componentDidUpdate=function(e,t){if(this.props.isOpen&&!e.isOpen)return this.init(),void this.setState({isOpen:!0});this.props.autoFocus&&this.state.isOpen&&!t.isOpen&&this.setFocus(),this._element&&e.zIndex!==this.props.zIndex&&(this._element.style.zIndex=this.props.zIndex)},a.componentWillUnmount=function(){this.clearBackdropAnimationTimeout(),this.props.onExit&&this.props.onExit(),this._element&&(this.destroy(),(this.props.isOpen||this.state.isOpen)&&this.close()),document.removeEventListener("focus",this.trapFocus,!0),this._isMounted=!1},a.trapFocus=function(e){if(this._element&&(!this._dialog||this._dialog.parentNode!==e.target)&&!(this.modalIndex<t.openCount-1)){for(var a=this.getFocusableChildren(),n=0;n<a.length;n++)if(a[n]===e.target)return;a.length>0&&(e.preventDefault(),e.stopPropagation(),a[0].focus())}},a.onOpened=function(e,t){this.props.onOpened(),(this.props.modalTransition.onEntered||T)(e,t)},a.onClosed=function(e){var t=this.props.unmountOnClose;this.props.onClosed(),(this.props.modalTransition.onExited||T)(e),t&&this.destroy(),this.close(),this._isMounted&&this.setState({isOpen:!1})},a.setFocus=function(){this._dialog&&this._dialog.parentNode&&"function"===typeof this._dialog.parentNode.focus&&this._dialog.parentNode.focus()},a.getFocusableChildren=function(){return this._element.querySelectorAll(b.f.join(", "))},a.getFocusedChild=function(){var e,t=this.getFocusableChildren();try{e=document.activeElement}catch(a){e=t[0]}return e},a.handleBackdropClick=function(e){if(e.target===this._mouseDownElement){e.stopPropagation();var t=this._dialog?this._dialog.parentNode:null;if(t&&e.target===t&&"static"===this.props.backdrop&&this.handleStaticBackdropAnimation(),!this.props.isOpen||!0!==this.props.backdrop)return;t&&e.target===t&&this.props.toggle&&this.props.toggle(e)}},a.handleTab=function(e){if(9===e.which&&!(this.modalIndex<t.openCount-1)){var a=this.getFocusableChildren(),n=a.length;if(0!==n){for(var o=this.getFocusedChild(),s=0,r=0;r<n;r+=1)if(a[r]===o){s=r;break}e.shiftKey&&0===s?(e.preventDefault(),a[n-1].focus()):e.shiftKey||s!==n-1||(e.preventDefault(),a[0].focus())}}},a.handleBackdropMouseDown=function(e){this._mouseDownElement=e.target},a.handleEscape=function(e){this.props.isOpen&&e.keyCode===b.i.esc&&this.props.toggle&&(this.props.keyboard?(e.preventDefault(),e.stopPropagation(),this.props.toggle(e)):"static"===this.props.backdrop&&(e.preventDefault(),e.stopPropagation(),this.handleStaticBackdropAnimation()))},a.handleStaticBackdropAnimation=function(){var e=this;this.clearBackdropAnimationTimeout(),this.setState({showStaticBackdropAnimation:!0}),this._backdropAnimationTimeout=setTimeout(function(){e.setState({showStaticBackdropAnimation:!1})},100)},a.init=function(){try{this._triggeringElement=document.activeElement}catch(e){this._triggeringElement=null}this._element||(this._element=document.createElement("div"),this._element.setAttribute("tabindex","-1"),this._element.style.position="relative",this._element.style.zIndex=this.props.zIndex,this._mountContainer=Object(b.h)(this.props.container),this._mountContainer.appendChild(this._element)),this._originalBodyPadding=Object(b.g)(),Object(b.e)(),0===t.openCount&&(document.body.className=m()(document.body.className,Object(b.j)("modal-open",this.props.cssModule))),this.modalIndex=t.openCount,t.openCount+=1},a.destroy=function(){this._element&&(this._mountContainer.removeChild(this._element),this._element=null),this.manageFocusAfterClose()},a.manageFocusAfterClose=function(){if(this._triggeringElement){var e=this.props.returnFocusAfterClose;this._triggeringElement.focus&&e&&this._triggeringElement.focus(),this._triggeringElement=null}},a.close=function(){if(t.openCount<=1){var e=Object(b.j)("modal-open",this.props.cssModule),a=new RegExp("(^| )"+e+"( |$)");document.body.className=document.body.className.replace(a," ").trim()}this.manageFocusAfterClose(),t.openCount=Math.max(0,t.openCount-1),Object(b.m)(this._originalBodyPadding)},a.renderModalDialog=function(){var e,t=this,a=Object(b.k)(this.props,M);return c.a.createElement("div",Object(o.a)({},a,{className:Object(b.j)(m()("modal-dialog",this.props.className,(e={},e["modal-"+this.props.size]=this.props.size,e["modal-dialog-centered"]=this.props.centered,e["modal-dialog-scrollable"]=this.props.scrollable,e)),this.props.cssModule),role:"document",ref:function(e){t._dialog=e}}),c.a.createElement("div",{className:Object(b.j)(m()("modal-content",this.props.contentClassName),this.props.cssModule)},this.props.children))},a.render=function(){var e=this.props.unmountOnClose;if(this._element&&(this.state.isOpen||!e)){var t=!!this._element&&!this.state.isOpen&&!e;this._element.style.display=t?"none":"block";var a=this.props,n=a.wrapClassName,s=a.modalClassName,r=a.backdropClassName,i=a.cssModule,l=a.isOpen,d=a.backdrop,p=a.role,u=a.labelledBy,h=a.external,g=a.innerRef,f={onClick:this.handleBackdropClick,onMouseDown:this.handleBackdropMouseDown,onKeyUp:this.handleEscape,onKeyDown:this.handleTab,style:{display:"block"},"aria-labelledby":u,role:p,tabIndex:"-1"},k=this.props.fade,E=w(w(w({},N.defaultProps),this.props.modalTransition),{},{baseClass:k?this.props.modalTransition.baseClass:"",timeout:k?this.props.modalTransition.timeout:0}),j=w(w(w({},N.defaultProps),this.props.backdropTransition),{},{baseClass:k?this.props.backdropTransition.baseClass:"",timeout:k?this.props.backdropTransition.timeout:0}),y=d&&(k?c.a.createElement(N,Object(o.a)({},j,{in:l&&!!d,cssModule:i,className:Object(b.j)(m()("modal-backdrop",r),i)})):c.a.createElement("div",{className:Object(b.j)(m()("modal-backdrop","show",r),i)}));return c.a.createElement(O,{node:this._element},c.a.createElement("div",{className:Object(b.j)(n)},c.a.createElement(N,Object(o.a)({},f,E,{in:l,onEntered:this.onOpened,onExited:this.onClosed,cssModule:i,className:Object(b.j)(m()("modal",s,this.state.showStaticBackdropAnimation&&"modal-static"),i),innerRef:g}),h,this.renderModalDialog()),y))}return null},a.clearBackdropAnimationTimeout=function(){this._backdropAnimationTimeout&&(clearTimeout(this._backdropAnimationTimeout),this._backdropAnimationTimeout=void 0)},t}(c.a.Component);S.propTypes=F,S.defaultProps=D,S.openCount=0;t.a=S}}]);
//# sourceMappingURL=15.9bf10c14.chunk.js.map