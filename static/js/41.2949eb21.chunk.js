(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{1087:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),s=a(5),i=a(675),r=a.n(i),c=a(67),l=a(393),d=a.n(l),p=a(397),m=a.n(p),u=a(398),h=a.n(u),b=a(388),f=a(33),g=a(160),O=a(161),j=a(44);class E extends n.Component{constructor(e){super(e),this.state={}}render(){return o.a.createElement("form",{onSubmit:this.props.handleSubmit},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-lg-4"},o.a.createElement(g.a,{name:"nama_hadiah",component:j.c,type:"text",label:"Nama Hadiah",placeholder:"Masukan Nama Hadiah"})),o.a.createElement("div",{className:"col-lg-4"},o.a.createElement(g.a,{name:"stock_hadiah",component:j.c,type:"text",label:"Stock Hadiah",placeholder:"Masukan Stock Hadiah"})),o.a.createElement("div",{className:"col-lg-4"},o.a.createElement(g.a,{name:"point",component:j.c,type:"text",label:"Point",placeholder:"Masukan Point"})),o.a.createElement("div",{className:"col-lg-12"},o.a.createElement("div",{className:"text-right"},o.a.createElement("button",{className:"btn btn-primary"},"Simpan ",o.a.createElement("i",{className:"fa fa-paper-plane ml-3"}))))))}}E=Object(O.a)({form:"ModalDaftarHadiah",enableReinitialize:!0})(E);var v=Object(f.b)()(E),C=a(6);const y=p.Search.SearchBar,k=p.CSVExport.ExportCSVButton;t.default=Object(f.b)()(class extends n.Component{constructor(e){super(e),this.state={columns:[{dataField:"nama_hadiah",text:"Nama Hadiah"},{dataField:"stock_hadiah",text:"Stock"},{dataField:"point",text:"Point"}]}}render(){return o.a.createElement("div",null,o.a.createElement("ol",{className:"breadcrumb float-xl-right"},o.a.createElement("li",{className:"breadcrumb-item"},o.a.createElement(s.b,{to:"#"},"Stock Opname")),o.a.createElement("li",{className:"breadcrumb-item active"},"Daftar Hadiah")),o.a.createElement("h1",{className:"page-header"}," Daftar Hadiah "),o.a.createElement(c.a,null,o.a.createElement(c.c,null," Daftar Hadiah"),o.a.createElement(c.b,null,o.a.createElement("div",{className:"col-lg-12"},o.a.createElement("div",{className:"text-center"},o.a.createElement("img",{src:r.a,alt:"Gift",width:300}))),o.a.createElement("div",{className:"col-lg-12"},o.a.createElement(m.a,{keyField:"no_acc",data:this.state.datakategori||[],columns:this.state.columns,search:!0,exportCSV:{fileName:"Export Master Kategori.csv"}},e=>o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-6"},o.a.createElement("button",{onClick:()=>this.props.dispatch(Object(C.Wb)()),className:"btn btn-primary"},"Tambah Data",o.a.createElement("i",{className:"fa fa-plus ml-3"}))),o.a.createElement("div",{className:"col-6"},o.a.createElement("div",{className:"text-right"},o.a.createElement(y,e.searchProps))),o.a.createElement("hr",null),o.a.createElement("div",{className:"col-12"},o.a.createElement(d.a,Object.assign({noDataIndication:"Belum Ada Data",pagination:h()()},e.baseProps)),o.a.createElement("br",null),o.a.createElement(k,e.csvProps,"Export CSV!!"))))))),o.a.createElement(b.a,{title:"Simpan Data Hadiah",content:o.a.createElement(v,null)}))}})},388:function(e,t,a){"use strict";var n=a(0),o=a.n(n),s=a(33),i=a(402),r=a(400),c=a(401),l=a(6);t.a=Object(s.b)(e=>({isOpen:e.datamaster.modalDialog}),null)(class extends n.Component{constructor(e){super(e),this.state={}}render(){return o.a.createElement(i.a,{backdrop:"static",keyboard:!1,isOpen:this.props.isOpen,toggle:()=>this.props.dispatch(Object(l.Tb)()),size:this.props.size||"xl"},o.a.createElement(r.a,{toggle:()=>this.props.dispatch(Object(l.Tb)())},this.props.title),o.a.createElement(c.a,null,this.props.content))}})},400:function(e,t,a){"use strict";var n=a(8),o=a(11),s=a(0),i=a.n(s),r=a(1),c=a.n(r),l=a(20),d=a.n(l),p=a(4),m={tag:p.n,wrapTag:p.n,toggle:c.a.func,className:c.a.string,cssModule:c.a.object,children:c.a.node,closeAriaLabel:c.a.string,charCode:c.a.oneOfType([c.a.string,c.a.number]),close:c.a.object},u=function(e){var t,a=e.className,s=e.cssModule,r=e.children,c=e.toggle,l=e.tag,m=e.wrapTag,u=e.closeAriaLabel,h=e.charCode,b=e.close,f=Object(o.a)(e,["className","cssModule","children","toggle","tag","wrapTag","closeAriaLabel","charCode","close"]),g=Object(p.j)(d()(a,"modal-header"),s);if(!b&&c){var O="number"===typeof h?String.fromCharCode(h):h;t=i.a.createElement("button",{type:"button",onClick:c,className:Object(p.j)("close",s),"aria-label":u},i.a.createElement("span",{"aria-hidden":"true"},O))}return i.a.createElement(m,Object(n.a)({},f,{className:g}),i.a.createElement(l,{className:Object(p.j)("modal-title",s)},r),b||t)};u.propTypes=m,u.defaultProps={tag:"h5",wrapTag:"div",closeAriaLabel:"Close",charCode:215},t.a=u},401:function(e,t,a){"use strict";var n=a(8),o=a(11),s=a(0),i=a.n(s),r=a(1),c=a.n(r),l=a(20),d=a.n(l),p=a(4),m={tag:p.n,className:c.a.string,cssModule:c.a.object},u=function(e){var t=e.className,a=e.cssModule,s=e.tag,r=Object(o.a)(e,["className","cssModule","tag"]),c=Object(p.j)(d()(t,"modal-body"),a);return i.a.createElement(s,Object(n.a)({},r,{className:c}))};u.propTypes=m,u.defaultProps={tag:"div"},t.a=u},402:function(e,t,a){"use strict";var n=a(45),o=a(8),s=a(21),i=a(12),r=a(0),c=a.n(r),l=a(1),d=a.n(l),p=a(20),m=a.n(p),u=a(28),h=a.n(u),b=a(4),f={children:d.a.node.isRequired,node:d.a.any},g=function(e){function t(){return e.apply(this,arguments)||this}Object(i.a)(t,e);var a=t.prototype;return a.componentWillUnmount=function(){this.defaultNode&&document.body.removeChild(this.defaultNode),this.defaultNode=null},a.render=function(){return b.d?(this.props.node||this.defaultNode||(this.defaultNode=document.createElement("div"),document.body.appendChild(this.defaultNode)),h.a.createPortal(this.props.children,this.props.node||this.defaultNode)):null},t}(c.a.Component);g.propTypes=f;var O=g,j=a(11),E=a(68);function v(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function C(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?v(Object(a),!0).forEach(function(t){Object(n.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):v(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var y=C(C({},E.Transition.propTypes),{},{children:d.a.oneOfType([d.a.arrayOf(d.a.node),d.a.node]),tag:b.n,baseClass:d.a.string,baseClassActive:d.a.string,className:d.a.string,cssModule:d.a.object,innerRef:d.a.oneOfType([d.a.object,d.a.string,d.a.func])}),k=C(C({},E.Transition.defaultProps),{},{tag:"div",baseClass:"fade",baseClassActive:"show",timeout:b.c.Fade,appear:!0,enter:!0,exit:!0,in:!0});function N(e){var t=e.tag,a=e.baseClass,n=e.baseClassActive,s=e.className,i=e.cssModule,r=e.children,l=e.innerRef,d=Object(j.a)(e,["tag","baseClass","baseClassActive","className","cssModule","children","innerRef"]),p=Object(b.l)(d,b.a),u=Object(b.k)(d,b.a);return c.a.createElement(E.Transition,p,function(e){var d="entered"===e,p=Object(b.j)(m()(s,a,d&&n),i);return c.a.createElement(t,Object(o.a)({className:p},u,{ref:l}),r)})}N.propTypes=y,N.defaultProps=k;var _=N;function T(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function w(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?T(Object(a),!0).forEach(function(t){Object(n.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):T(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}function x(){}var A=d.a.shape(_.propTypes),P={isOpen:d.a.bool,autoFocus:d.a.bool,centered:d.a.bool,scrollable:d.a.bool,size:d.a.string,toggle:d.a.func,keyboard:d.a.bool,role:d.a.string,labelledBy:d.a.string,backdrop:d.a.oneOfType([d.a.bool,d.a.oneOf(["static"])]),onEnter:d.a.func,onExit:d.a.func,onOpened:d.a.func,onClosed:d.a.func,children:d.a.node,className:d.a.string,wrapClassName:d.a.string,modalClassName:d.a.string,backdropClassName:d.a.string,contentClassName:d.a.string,external:d.a.node,fade:d.a.bool,cssModule:d.a.object,zIndex:d.a.oneOfType([d.a.number,d.a.string]),backdropTransition:A,modalTransition:A,innerRef:d.a.oneOfType([d.a.object,d.a.string,d.a.func]),unmountOnClose:d.a.bool,returnFocusAfterClose:d.a.bool,container:b.o},M=Object.keys(P),D={isOpen:!1,autoFocus:!0,centered:!1,scrollable:!1,role:"dialog",backdrop:!0,keyboard:!0,zIndex:1050,fade:!0,onOpened:x,onClosed:x,modalTransition:{timeout:b.c.Modal},backdropTransition:{mountOnEnter:!0,timeout:b.c.Fade},unmountOnClose:!0,returnFocusAfterClose:!0,container:"body"},F=function(e){function t(t){var a;return(a=e.call(this,t)||this)._element=null,a._originalBodyPadding=null,a.getFocusableChildren=a.getFocusableChildren.bind(Object(s.a)(a)),a.handleBackdropClick=a.handleBackdropClick.bind(Object(s.a)(a)),a.handleBackdropMouseDown=a.handleBackdropMouseDown.bind(Object(s.a)(a)),a.handleEscape=a.handleEscape.bind(Object(s.a)(a)),a.handleStaticBackdropAnimation=a.handleStaticBackdropAnimation.bind(Object(s.a)(a)),a.handleTab=a.handleTab.bind(Object(s.a)(a)),a.onOpened=a.onOpened.bind(Object(s.a)(a)),a.onClosed=a.onClosed.bind(Object(s.a)(a)),a.manageFocusAfterClose=a.manageFocusAfterClose.bind(Object(s.a)(a)),a.clearBackdropAnimationTimeout=a.clearBackdropAnimationTimeout.bind(Object(s.a)(a)),a.trapFocus=a.trapFocus.bind(Object(s.a)(a)),a.state={isOpen:!1,showStaticBackdropAnimation:!1},a}Object(i.a)(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this.props,t=e.isOpen,a=e.autoFocus,n=e.onEnter;t&&(this.init(),this.setState({isOpen:!0}),a&&this.setFocus()),n&&n(),document.addEventListener("focus",this.trapFocus,!0),this._isMounted=!0},a.componentDidUpdate=function(e,t){if(this.props.isOpen&&!e.isOpen)return this.init(),void this.setState({isOpen:!0});this.props.autoFocus&&this.state.isOpen&&!t.isOpen&&this.setFocus(),this._element&&e.zIndex!==this.props.zIndex&&(this._element.style.zIndex=this.props.zIndex)},a.componentWillUnmount=function(){this.clearBackdropAnimationTimeout(),this.props.onExit&&this.props.onExit(),this._element&&(this.destroy(),(this.props.isOpen||this.state.isOpen)&&this.close()),document.removeEventListener("focus",this.trapFocus,!0),this._isMounted=!1},a.trapFocus=function(e){if(this._element&&(!this._dialog||this._dialog.parentNode!==e.target)&&!(this.modalIndex<t.openCount-1)){for(var a=this.getFocusableChildren(),n=0;n<a.length;n++)if(a[n]===e.target)return;a.length>0&&(e.preventDefault(),e.stopPropagation(),a[0].focus())}},a.onOpened=function(e,t){this.props.onOpened(),(this.props.modalTransition.onEntered||x)(e,t)},a.onClosed=function(e){var t=this.props.unmountOnClose;this.props.onClosed(),(this.props.modalTransition.onExited||x)(e),t&&this.destroy(),this.close(),this._isMounted&&this.setState({isOpen:!1})},a.setFocus=function(){this._dialog&&this._dialog.parentNode&&"function"===typeof this._dialog.parentNode.focus&&this._dialog.parentNode.focus()},a.getFocusableChildren=function(){return this._element.querySelectorAll(b.f.join(", "))},a.getFocusedChild=function(){var e,t=this.getFocusableChildren();try{e=document.activeElement}catch(a){e=t[0]}return e},a.handleBackdropClick=function(e){if(e.target===this._mouseDownElement){e.stopPropagation();var t=this._dialog?this._dialog.parentNode:null;if(t&&e.target===t&&"static"===this.props.backdrop&&this.handleStaticBackdropAnimation(),!this.props.isOpen||!0!==this.props.backdrop)return;t&&e.target===t&&this.props.toggle&&this.props.toggle(e)}},a.handleTab=function(e){if(9===e.which&&!(this.modalIndex<t.openCount-1)){var a=this.getFocusableChildren(),n=a.length;if(0!==n){for(var o=this.getFocusedChild(),s=0,i=0;i<n;i+=1)if(a[i]===o){s=i;break}e.shiftKey&&0===s?(e.preventDefault(),a[n-1].focus()):e.shiftKey||s!==n-1||(e.preventDefault(),a[0].focus())}}},a.handleBackdropMouseDown=function(e){this._mouseDownElement=e.target},a.handleEscape=function(e){this.props.isOpen&&e.keyCode===b.i.esc&&this.props.toggle&&(this.props.keyboard?(e.preventDefault(),e.stopPropagation(),this.props.toggle(e)):"static"===this.props.backdrop&&(e.preventDefault(),e.stopPropagation(),this.handleStaticBackdropAnimation()))},a.handleStaticBackdropAnimation=function(){var e=this;this.clearBackdropAnimationTimeout(),this.setState({showStaticBackdropAnimation:!0}),this._backdropAnimationTimeout=setTimeout(function(){e.setState({showStaticBackdropAnimation:!1})},100)},a.init=function(){try{this._triggeringElement=document.activeElement}catch(e){this._triggeringElement=null}this._element||(this._element=document.createElement("div"),this._element.setAttribute("tabindex","-1"),this._element.style.position="relative",this._element.style.zIndex=this.props.zIndex,this._mountContainer=Object(b.h)(this.props.container),this._mountContainer.appendChild(this._element)),this._originalBodyPadding=Object(b.g)(),Object(b.e)(),0===t.openCount&&(document.body.className=m()(document.body.className,Object(b.j)("modal-open",this.props.cssModule))),this.modalIndex=t.openCount,t.openCount+=1},a.destroy=function(){this._element&&(this._mountContainer.removeChild(this._element),this._element=null),this.manageFocusAfterClose()},a.manageFocusAfterClose=function(){if(this._triggeringElement){var e=this.props.returnFocusAfterClose;this._triggeringElement.focus&&e&&this._triggeringElement.focus(),this._triggeringElement=null}},a.close=function(){if(t.openCount<=1){var e=Object(b.j)("modal-open",this.props.cssModule),a=new RegExp("(^| )"+e+"( |$)");document.body.className=document.body.className.replace(a," ").trim()}this.manageFocusAfterClose(),t.openCount=Math.max(0,t.openCount-1),Object(b.m)(this._originalBodyPadding)},a.renderModalDialog=function(){var e,t=this,a=Object(b.k)(this.props,M);return c.a.createElement("div",Object(o.a)({},a,{className:Object(b.j)(m()("modal-dialog",this.props.className,(e={},e["modal-"+this.props.size]=this.props.size,e["modal-dialog-centered"]=this.props.centered,e["modal-dialog-scrollable"]=this.props.scrollable,e)),this.props.cssModule),role:"document",ref:function(e){t._dialog=e}}),c.a.createElement("div",{className:Object(b.j)(m()("modal-content",this.props.contentClassName),this.props.cssModule)},this.props.children))},a.render=function(){var e=this.props.unmountOnClose;if(this._element&&(this.state.isOpen||!e)){var t=!!this._element&&!this.state.isOpen&&!e;this._element.style.display=t?"none":"block";var a=this.props,n=a.wrapClassName,s=a.modalClassName,i=a.backdropClassName,r=a.cssModule,l=a.isOpen,d=a.backdrop,p=a.role,u=a.labelledBy,h=a.external,f=a.innerRef,g={onClick:this.handleBackdropClick,onMouseDown:this.handleBackdropMouseDown,onKeyUp:this.handleEscape,onKeyDown:this.handleTab,style:{display:"block"},"aria-labelledby":u,role:p,tabIndex:"-1"},j=this.props.fade,E=w(w(w({},_.defaultProps),this.props.modalTransition),{},{baseClass:j?this.props.modalTransition.baseClass:"",timeout:j?this.props.modalTransition.timeout:0}),v=w(w(w({},_.defaultProps),this.props.backdropTransition),{},{baseClass:j?this.props.backdropTransition.baseClass:"",timeout:j?this.props.backdropTransition.timeout:0}),C=d&&(j?c.a.createElement(_,Object(o.a)({},v,{in:l&&!!d,cssModule:r,className:Object(b.j)(m()("modal-backdrop",i),r)})):c.a.createElement("div",{className:Object(b.j)(m()("modal-backdrop","show",i),r)}));return c.a.createElement(O,{node:this._element},c.a.createElement("div",{className:Object(b.j)(n)},c.a.createElement(_,Object(o.a)({},g,E,{in:l,onEntered:this.onOpened,onExited:this.onClosed,cssModule:r,className:Object(b.j)(m()("modal",s,this.state.showStaticBackdropAnimation&&"modal-static"),r),innerRef:f}),h,this.renderModalDialog()),C))}return null},a.clearBackdropAnimationTimeout=function(){this._backdropAnimationTimeout&&(clearTimeout(this._backdropAnimationTimeout),this._backdropAnimationTimeout=void 0)},t}(c.a.Component);F.propTypes=P,F.defaultProps=D,F.openCount=0;t.a=F},675:function(e,t,a){e.exports=a.p+"static/media/Gift.6bc49431.svg"}}]);
//# sourceMappingURL=41.2949eb21.chunk.js.map