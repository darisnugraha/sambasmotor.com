(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{1015:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),o=a(5),i=a(67),r=a(33),c=a(14),l=a.n(c),d=a(44),p=a(6),m=a(388),h=a(112),u=a.n(h),b=a(10),f=a(66),g=a(390);const O=Object(n.lazy)(()=>a.e(61).then(a.bind(null,940))),E=(e,t)=>{l.a.fire({title:"Anda Yakin !!",text:"Ingin Menghapus Data Ini ?",icon:"warning",position:"top-center",cancelButtonText:"Tidak",showCancelButton:!0,confirmButtonText:"OK",showConfirmButton:!0}).then(a=>{a.isConfirmed&&Object(b.a)("bank/delete/by-no-ac/"+e).then(()=>t(Object(p.Tb)())).then(()=>t(Object(p.vb)())).then(()=>Object(d.b)("Berhasil Dihapus"))})};t.default=Object(r.b)(e=>({hideModal:e.datamaster.modalDialog,onSend:e.datamaster.onSend,listbank:e.datamaster.listbank}),null)(class extends s.a.Component{constructor(e){super(e),this.state={isEdit:!1,modalDialog:!1,isLoading:!1,columns:[{dataField:"no_ac",text:"Nomor A/C",sort:!0},{dataField:"nama_bank",text:"Nama Bank"},{dataField:"atas_nama",text:"Atas Nama"},{dataField:"action",text:"Action",csvExport:!1,headerClasses:"text-center",formatter:(e,t)=>{let a={no_acc:t.no_ac,nama_bank:t.nama_bank,atas_nama:t.atas_nama};return this.setState({}),s.a.createElement("div",{className:"row text-center"},s.a.createElement("div",{className:"col-12"},s.a.createElement("button",{onClick:()=>this.editModal(a),className:"btn btn-warning mr-3"},"Edit",s.a.createElement("i",{className:"fa fa-edit ml-2"})),s.a.createElement("button",{onClick:()=>E(t.no_ac,this.props.dispatch),className:"btn btn-danger"},"Hapus",s.a.createElement("i",{className:"fa fa-trash ml-2"}))))}}],datakategori:[{no_acc:"8200930213",nama_bank:"BCA",atas_nama:"OCTAVIAN"}]}}componentDidMount(){this.props.dispatch(Object(p.vb)())}editModal(e){this.props.dispatch(Object(p.Wb)()),this.props.dispatch(Object(p.Z)(e)),this.setState({isEdit:!0})}tambahModal(){this.props.dispatch(Object(p.Wb)()),this.props.dispatch(Object(p.Z)("")),this.setState({isEdit:!1})}handleSubmit(e){let t={no_ac:e.nomor_bank||"-",nama_bank:e.nama_bank||"-",atas_nama:e.atas_nama||"-"},a={atas_nama:e.atas_nama||"-"};this.state.isEdit?Object(b.d)("bank/update/by-no-ac/"+e.nomor_bank,a).then(()=>Object(d.b)("Berhasil Dirubah")).then(()=>this.props.dispatch(Object(f.a)(""))).then(()=>this.props.dispatch(Object(p.Tb)())).then(()=>this.props.dispatch(Object(p.vb)())).catch(e=>Object(d.a)("Sepertinya ada gangguan, Mohon ulang beberapa saat lagi")):Object(b.c)("bank/add",t).then(()=>Object(d.b)("Berhasil Ditambahkan")).then(()=>this.props.dispatch(Object(f.a)("dataBank"))).then(()=>this.props.dispatch(Object(p.Tb)())).then(()=>this.props.dispatch(Object(p.vb)())).catch(t=>this.handleReactive(t,e.nomor_bank,a))}handleReactive(e,t,a){this.props.dispatch(Object(p.Tb)()),e.response.data.includes("Deleted")?Object(d.m)(e,t,"bank/reactive/by-no-ac",a,"bank/update/by-no-ac/").then(()=>this.props.dispatch(Object(p.vb)())):Object(d.a)("Data Gagal Ditambahkan")}render(){return s.a.createElement("div",null,s.a.createElement("ol",{className:"breadcrumb float-xl-right"},s.a.createElement("li",{className:"breadcrumb-item"},s.a.createElement(o.b,{to:"#"},"Data Master")),s.a.createElement("li",{className:"breadcrumb-item active"},"Master Bank")),s.a.createElement("h1",{className:"page-header"},"Master Bank "),s.a.createElement(i.a,null,s.a.createElement(i.c,null,"Master Bank"),s.a.createElement(i.b,null,s.a.createElement("br",null),s.a.createElement("div",{className:"col-lg-12"},s.a.createElement(g.a,{keyField:"no_acc",data:this.props.listbank||[],columns:this.state.columns,CSVExport:!0,tambahData:!0,handleClick:()=>this.tambahModal()})),s.a.createElement("br",null)),s.a.createElement(m.a,{title:this.state.isEdit?"Edit Data Bank":"Tambah Data Bank",content:s.a.createElement(n.Suspense,{fallback:s.a.createElement(u.a,{width:"100%",height:50,count:2})},s.a.createElement(O,{onSubmit:e=>this.handleSubmit(e),onSend:this.props.onSend,isEdit:this.state.isEdit}))})))}})},388:function(e,t,a){"use strict";var n=a(0),s=a.n(n),o=a(33),i=a(402),r=a(400),c=a(401),l=a(6);t.a=Object(o.b)(e=>({isOpen:e.datamaster.modalDialog}),null)(class extends n.Component{constructor(e){super(e),this.state={}}render(){return s.a.createElement(i.a,{backdrop:"static",keyboard:!1,isOpen:this.props.isOpen,toggle:()=>this.props.dispatch(Object(l.Tb)()),size:this.props.size||"xl"},s.a.createElement(r.a,{toggle:()=>this.props.dispatch(Object(l.Tb)())},this.props.title),s.a.createElement(c.a,null,this.props.content))}})},390:function(e,t,a){"use strict";var n=a(0),s=a.n(n),o=a(393),i=a.n(o),r=a(397),c=a.n(r),l=a(398),d=a.n(l),p=a(391),m=a.n(p);var h=function(e){return s.a.createElement("div",{className:"col-lg-12"},s.a.createElement("div",{className:"text-center"},s.a.createElement("img",{src:m.a,width:"250",height:"250",alt:"Empty"}),s.a.createElement("h5",null,e.text)))},u=a(112),b=a.n(u);const f=r.Search.SearchBar,g=r.CSVExport.ExportCSVButton;t.a=function(e){let t=e.textEmpty,a=e.handleClick,n=e.tambahData,o=e.expandRow,r=e.selectRow,l=e.exportCSV;return e.data?s.a.createElement(c.a,{keyField:e.keyField,data:e.data||[],columns:e.columns,search:!0},e=>s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-6"},s.a.createElement("div",{className:"text-left"},s.a.createElement(f,e.searchProps))),s.a.createElement("div",{className:"col-6"},s.a.createElement("div",{className:"text-right"},n&&s.a.createElement("button",{onClick:a,className:"btn btn-primary",type:"button"},"Tambah Data",s.a.createElement("i",{className:"fa fa-plus ml-3"})))),s.a.createElement("hr",null),s.a.createElement("div",{className:"col-12"},s.a.createElement(i.a,Object.assign({pagination:d()(),selectRow:r,expandRow:o},e.baseProps,{noDataIndication:s.a.createElement(h,{text:t||"Tidak Ada Data"})})),s.a.createElement("br",null),l&&s.a.createElement(g,e.csvProps,"Export CSV!!")))):e.empty?s.a.createElement(c.a,{keyField:e.keyField,data:e.data||[],columns:e.columns,search:!0},e=>s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-6"},s.a.createElement("div",{className:"text-left"},s.a.createElement(f,e.searchProps))),s.a.createElement("div",{className:"col-6"},s.a.createElement("div",{className:"text-right"},n&&s.a.createElement("button",{onClick:a,className:"btn btn-primary",type:"button"},"Tambah Data",s.a.createElement("i",{className:"fa fa-plus ml-3"})))),s.a.createElement("hr",null),s.a.createElement("div",{className:"col-12"},s.a.createElement(i.a,Object.assign({pagination:d()()},e.baseProps,{noDataIndication:s.a.createElement(h,{text:t||"Tidak Ada Data"})})),s.a.createElement("br",null),e.CSVExport&&s.a.createElement(g,e.csvProps,"Export CSV!!")))):s.a.createElement(b.a,{width:"100%",height:250})}},391:function(e,t,a){e.exports=a.p+"static/media/empty.02c14787.svg"},400:function(e,t,a){"use strict";var n=a(8),s=a(11),o=a(0),i=a.n(o),r=a(1),c=a.n(r),l=a(20),d=a.n(l),p=a(4),m={tag:p.n,wrapTag:p.n,toggle:c.a.func,className:c.a.string,cssModule:c.a.object,children:c.a.node,closeAriaLabel:c.a.string,charCode:c.a.oneOfType([c.a.string,c.a.number]),close:c.a.object},h=function(e){var t,a=e.className,o=e.cssModule,r=e.children,c=e.toggle,l=e.tag,m=e.wrapTag,h=e.closeAriaLabel,u=e.charCode,b=e.close,f=Object(s.a)(e,["className","cssModule","children","toggle","tag","wrapTag","closeAriaLabel","charCode","close"]),g=Object(p.j)(d()(a,"modal-header"),o);if(!b&&c){var O="number"===typeof u?String.fromCharCode(u):u;t=i.a.createElement("button",{type:"button",onClick:c,className:Object(p.j)("close",o),"aria-label":h},i.a.createElement("span",{"aria-hidden":"true"},O))}return i.a.createElement(m,Object(n.a)({},f,{className:g}),i.a.createElement(l,{className:Object(p.j)("modal-title",o)},r),b||t)};h.propTypes=m,h.defaultProps={tag:"h5",wrapTag:"div",closeAriaLabel:"Close",charCode:215},t.a=h},401:function(e,t,a){"use strict";var n=a(8),s=a(11),o=a(0),i=a.n(o),r=a(1),c=a.n(r),l=a(20),d=a.n(l),p=a(4),m={tag:p.n,className:c.a.string,cssModule:c.a.object},h=function(e){var t=e.className,a=e.cssModule,o=e.tag,r=Object(s.a)(e,["className","cssModule","tag"]),c=Object(p.j)(d()(t,"modal-body"),a);return i.a.createElement(o,Object(n.a)({},r,{className:c}))};h.propTypes=m,h.defaultProps={tag:"div"},t.a=h},402:function(e,t,a){"use strict";var n=a(45),s=a(8),o=a(21),i=a(12),r=a(0),c=a.n(r),l=a(1),d=a.n(l),p=a(20),m=a.n(p),h=a(28),u=a.n(h),b=a(4),f={children:d.a.node.isRequired,node:d.a.any},g=function(e){function t(){return e.apply(this,arguments)||this}Object(i.a)(t,e);var a=t.prototype;return a.componentWillUnmount=function(){this.defaultNode&&document.body.removeChild(this.defaultNode),this.defaultNode=null},a.render=function(){return b.d?(this.props.node||this.defaultNode||(this.defaultNode=document.createElement("div"),document.body.appendChild(this.defaultNode)),u.a.createPortal(this.props.children,this.props.node||this.defaultNode)):null},t}(c.a.Component);g.propTypes=f;var O=g,E=a(11),j=a(68);function k(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function C(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?k(Object(a),!0).forEach(function(t){Object(n.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):k(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var v=C(C({},j.Transition.propTypes),{},{children:d.a.oneOfType([d.a.arrayOf(d.a.node),d.a.node]),tag:b.n,baseClass:d.a.string,baseClassActive:d.a.string,className:d.a.string,cssModule:d.a.object,innerRef:d.a.oneOfType([d.a.object,d.a.string,d.a.func])}),y=C(C({},j.Transition.defaultProps),{},{tag:"div",baseClass:"fade",baseClassActive:"show",timeout:b.c.Fade,appear:!0,enter:!0,exit:!0,in:!0});function N(e){var t=e.tag,a=e.baseClass,n=e.baseClassActive,o=e.className,i=e.cssModule,r=e.children,l=e.innerRef,d=Object(E.a)(e,["tag","baseClass","baseClassActive","className","cssModule","children","innerRef"]),p=Object(b.l)(d,b.a),h=Object(b.k)(d,b.a);return c.a.createElement(j.Transition,p,function(e){var d="entered"===e,p=Object(b.j)(m()(o,a,d&&n),i);return c.a.createElement(t,Object(s.a)({className:p},h,{ref:l}),r)})}N.propTypes=v,N.defaultProps=y;var _=N;function T(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function x(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?T(Object(a),!0).forEach(function(t){Object(n.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):T(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}function w(){}var D=d.a.shape(_.propTypes),A={isOpen:d.a.bool,autoFocus:d.a.bool,centered:d.a.bool,scrollable:d.a.bool,size:d.a.string,toggle:d.a.func,keyboard:d.a.bool,role:d.a.string,labelledBy:d.a.string,backdrop:d.a.oneOfType([d.a.bool,d.a.oneOf(["static"])]),onEnter:d.a.func,onExit:d.a.func,onOpened:d.a.func,onClosed:d.a.func,children:d.a.node,className:d.a.string,wrapClassName:d.a.string,modalClassName:d.a.string,backdropClassName:d.a.string,contentClassName:d.a.string,external:d.a.node,fade:d.a.bool,cssModule:d.a.object,zIndex:d.a.oneOfType([d.a.number,d.a.string]),backdropTransition:D,modalTransition:D,innerRef:d.a.oneOfType([d.a.object,d.a.string,d.a.func]),unmountOnClose:d.a.bool,returnFocusAfterClose:d.a.bool,container:b.o},B=Object.keys(A),M={isOpen:!1,autoFocus:!0,centered:!1,scrollable:!1,role:"dialog",backdrop:!0,keyboard:!0,zIndex:1050,fade:!0,onOpened:w,onClosed:w,modalTransition:{timeout:b.c.Modal},backdropTransition:{mountOnEnter:!0,timeout:b.c.Fade},unmountOnClose:!0,returnFocusAfterClose:!0,container:"body"},S=function(e){function t(t){var a;return(a=e.call(this,t)||this)._element=null,a._originalBodyPadding=null,a.getFocusableChildren=a.getFocusableChildren.bind(Object(o.a)(a)),a.handleBackdropClick=a.handleBackdropClick.bind(Object(o.a)(a)),a.handleBackdropMouseDown=a.handleBackdropMouseDown.bind(Object(o.a)(a)),a.handleEscape=a.handleEscape.bind(Object(o.a)(a)),a.handleStaticBackdropAnimation=a.handleStaticBackdropAnimation.bind(Object(o.a)(a)),a.handleTab=a.handleTab.bind(Object(o.a)(a)),a.onOpened=a.onOpened.bind(Object(o.a)(a)),a.onClosed=a.onClosed.bind(Object(o.a)(a)),a.manageFocusAfterClose=a.manageFocusAfterClose.bind(Object(o.a)(a)),a.clearBackdropAnimationTimeout=a.clearBackdropAnimationTimeout.bind(Object(o.a)(a)),a.trapFocus=a.trapFocus.bind(Object(o.a)(a)),a.state={isOpen:!1,showStaticBackdropAnimation:!1},a}Object(i.a)(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this.props,t=e.isOpen,a=e.autoFocus,n=e.onEnter;t&&(this.init(),this.setState({isOpen:!0}),a&&this.setFocus()),n&&n(),document.addEventListener("focus",this.trapFocus,!0),this._isMounted=!0},a.componentDidUpdate=function(e,t){if(this.props.isOpen&&!e.isOpen)return this.init(),void this.setState({isOpen:!0});this.props.autoFocus&&this.state.isOpen&&!t.isOpen&&this.setFocus(),this._element&&e.zIndex!==this.props.zIndex&&(this._element.style.zIndex=this.props.zIndex)},a.componentWillUnmount=function(){this.clearBackdropAnimationTimeout(),this.props.onExit&&this.props.onExit(),this._element&&(this.destroy(),(this.props.isOpen||this.state.isOpen)&&this.close()),document.removeEventListener("focus",this.trapFocus,!0),this._isMounted=!1},a.trapFocus=function(e){if(this._element&&(!this._dialog||this._dialog.parentNode!==e.target)&&!(this.modalIndex<t.openCount-1)){for(var a=this.getFocusableChildren(),n=0;n<a.length;n++)if(a[n]===e.target)return;a.length>0&&(e.preventDefault(),e.stopPropagation(),a[0].focus())}},a.onOpened=function(e,t){this.props.onOpened(),(this.props.modalTransition.onEntered||w)(e,t)},a.onClosed=function(e){var t=this.props.unmountOnClose;this.props.onClosed(),(this.props.modalTransition.onExited||w)(e),t&&this.destroy(),this.close(),this._isMounted&&this.setState({isOpen:!1})},a.setFocus=function(){this._dialog&&this._dialog.parentNode&&"function"===typeof this._dialog.parentNode.focus&&this._dialog.parentNode.focus()},a.getFocusableChildren=function(){return this._element.querySelectorAll(b.f.join(", "))},a.getFocusedChild=function(){var e,t=this.getFocusableChildren();try{e=document.activeElement}catch(a){e=t[0]}return e},a.handleBackdropClick=function(e){if(e.target===this._mouseDownElement){e.stopPropagation();var t=this._dialog?this._dialog.parentNode:null;if(t&&e.target===t&&"static"===this.props.backdrop&&this.handleStaticBackdropAnimation(),!this.props.isOpen||!0!==this.props.backdrop)return;t&&e.target===t&&this.props.toggle&&this.props.toggle(e)}},a.handleTab=function(e){if(9===e.which&&!(this.modalIndex<t.openCount-1)){var a=this.getFocusableChildren(),n=a.length;if(0!==n){for(var s=this.getFocusedChild(),o=0,i=0;i<n;i+=1)if(a[i]===s){o=i;break}e.shiftKey&&0===o?(e.preventDefault(),a[n-1].focus()):e.shiftKey||o!==n-1||(e.preventDefault(),a[0].focus())}}},a.handleBackdropMouseDown=function(e){this._mouseDownElement=e.target},a.handleEscape=function(e){this.props.isOpen&&e.keyCode===b.i.esc&&this.props.toggle&&(this.props.keyboard?(e.preventDefault(),e.stopPropagation(),this.props.toggle(e)):"static"===this.props.backdrop&&(e.preventDefault(),e.stopPropagation(),this.handleStaticBackdropAnimation()))},a.handleStaticBackdropAnimation=function(){var e=this;this.clearBackdropAnimationTimeout(),this.setState({showStaticBackdropAnimation:!0}),this._backdropAnimationTimeout=setTimeout(function(){e.setState({showStaticBackdropAnimation:!1})},100)},a.init=function(){try{this._triggeringElement=document.activeElement}catch(e){this._triggeringElement=null}this._element||(this._element=document.createElement("div"),this._element.setAttribute("tabindex","-1"),this._element.style.position="relative",this._element.style.zIndex=this.props.zIndex,this._mountContainer=Object(b.h)(this.props.container),this._mountContainer.appendChild(this._element)),this._originalBodyPadding=Object(b.g)(),Object(b.e)(),0===t.openCount&&(document.body.className=m()(document.body.className,Object(b.j)("modal-open",this.props.cssModule))),this.modalIndex=t.openCount,t.openCount+=1},a.destroy=function(){this._element&&(this._mountContainer.removeChild(this._element),this._element=null),this.manageFocusAfterClose()},a.manageFocusAfterClose=function(){if(this._triggeringElement){var e=this.props.returnFocusAfterClose;this._triggeringElement.focus&&e&&this._triggeringElement.focus(),this._triggeringElement=null}},a.close=function(){if(t.openCount<=1){var e=Object(b.j)("modal-open",this.props.cssModule),a=new RegExp("(^| )"+e+"( |$)");document.body.className=document.body.className.replace(a," ").trim()}this.manageFocusAfterClose(),t.openCount=Math.max(0,t.openCount-1),Object(b.m)(this._originalBodyPadding)},a.renderModalDialog=function(){var e,t=this,a=Object(b.k)(this.props,B);return c.a.createElement("div",Object(s.a)({},a,{className:Object(b.j)(m()("modal-dialog",this.props.className,(e={},e["modal-"+this.props.size]=this.props.size,e["modal-dialog-centered"]=this.props.centered,e["modal-dialog-scrollable"]=this.props.scrollable,e)),this.props.cssModule),role:"document",ref:function(e){t._dialog=e}}),c.a.createElement("div",{className:Object(b.j)(m()("modal-content",this.props.contentClassName),this.props.cssModule)},this.props.children))},a.render=function(){var e=this.props.unmountOnClose;if(this._element&&(this.state.isOpen||!e)){var t=!!this._element&&!this.state.isOpen&&!e;this._element.style.display=t?"none":"block";var a=this.props,n=a.wrapClassName,o=a.modalClassName,i=a.backdropClassName,r=a.cssModule,l=a.isOpen,d=a.backdrop,p=a.role,h=a.labelledBy,u=a.external,f=a.innerRef,g={onClick:this.handleBackdropClick,onMouseDown:this.handleBackdropMouseDown,onKeyUp:this.handleEscape,onKeyDown:this.handleTab,style:{display:"block"},"aria-labelledby":h,role:p,tabIndex:"-1"},E=this.props.fade,j=x(x(x({},_.defaultProps),this.props.modalTransition),{},{baseClass:E?this.props.modalTransition.baseClass:"",timeout:E?this.props.modalTransition.timeout:0}),k=x(x(x({},_.defaultProps),this.props.backdropTransition),{},{baseClass:E?this.props.backdropTransition.baseClass:"",timeout:E?this.props.backdropTransition.timeout:0}),C=d&&(E?c.a.createElement(_,Object(s.a)({},k,{in:l&&!!d,cssModule:r,className:Object(b.j)(m()("modal-backdrop",i),r)})):c.a.createElement("div",{className:Object(b.j)(m()("modal-backdrop","show",i),r)}));return c.a.createElement(O,{node:this._element},c.a.createElement("div",{className:Object(b.j)(n)},c.a.createElement(_,Object(s.a)({},g,j,{in:l,onEntered:this.onOpened,onExited:this.onClosed,cssModule:r,className:Object(b.j)(m()("modal",o,this.state.showStaticBackdropAnimation&&"modal-static"),r),innerRef:f}),u,this.renderModalDialog()),C))}return null},a.clearBackdropAnimationTimeout=function(){this._backdropAnimationTimeout&&(clearTimeout(this._backdropAnimationTimeout),this._backdropAnimationTimeout=void 0)},t}(c.a.Component);S.propTypes=A,S.defaultProps=M,S.openCount=0;t.a=S}}]);
//# sourceMappingURL=13.4243ae4b.chunk.js.map