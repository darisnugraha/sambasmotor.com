(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{1078:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),o=t(7),i=t(29),l=t(27),c=t(41),s=t(48),p=t(131),u=t(557),m=t(26),g=t(6),d=t(9),h=t(130);var f=class extends r.Component{constructor(e){super(e),this.state={listBooking:[],columns:[{dataField:"no_booking",text:"No Booking"},{dataField:"tgl_booking",text:"Tanggal Booking"},{dataField:"nopol_kendaraan",text:"Nomor Polisi"},{dataField:"jenis_service",text:"Jenis Service"},{dataField:"tgl_layanan",text:"Tanggal"}]}}componentDidMount(){Object(d.b)("service/booking/getDataBookingAll").then(e=>this.setState({listBooking:e&&e.data}))}render(){return n.a.createElement("div",null,n.a.createElement(h.a,{data:this.state.listBooking,columns:this.state.columns,keyField:"no_booking"}),n.a.createElement("div",{className:"col-lg-12"},n.a.createElement("p",null,"Untuk Sementara, Silahkan Copy Nomor Booking dan Paste di Nomor Booking Pendaftaran"),n.a.createElement("p",null,"Sedang Dalam Pengembangan agar bisa langsung copy")))}};const v=Object(r.lazy)(()=>Promise.all([t.e(2),t.e(17)]).then(t.bind(null,1043)));a.default=Object(i.b)(e=>({kunci_temp:e.stocking.kunci_temp,totalbarang:e.transaksi.totalbarang,totalsparepart:e.transaksi.totalsparepart,listdaftarservice:e.transaksi.listdaftarservice,noFaktur:e.datamaster.noFaktur}),null)(class extends n.a.Component{constructor(e){super(e),this.state={isEdit:!1,modalDialog:!1,isLoading:!1}}componentDidMount(){this.props.dispatch(Object(m.z)()),this.props.dispatch(Object(g.Ab)()),Object(d.b)("daftar-service/generate/no-trx").then(e=>localStorage.setItem("no_daftar_service",e.data[0].no_daftar_service))}handleSubmit(e){let a={no_booking:!!e.booking,no_daftar:e.no_faktur,nopol_kendaraan:e.nopol_kendaraan||e.booking_nopol,tgl_masuk:e.tanggal_masuk,km_masuk:e.km_masuk,tgl_keluar:e.tanggal_keluar,km_keluar:e.km_keluar,jdw_service:e.service_selanjutnya,km_service:e.km_service_berikutnya,keluhan:e.keluhan_konsumen,id_mekanik:e.kode_mekanik,status_booking:void 0===e.booking?"false":"true",detail_barang:JSON.parse(localStorage.getItem("list_service_daftar_temp"))};console.log(JSON.stringify(a)),Object(d.c)("daftar-service/post-transaksi",a).then(()=>Object(l.b)("Berhasil Menambahan Data Booking").then(()=>this.props.dispatch(Object(s.a)("ModalBookingService"))).then(()=>localStorage.removeItem("list_service_daftar_temp")).then(()=>this.props.dispatch(Object(s.a)("ModalDaftarService"))).then(()=>this.props.dispatch(Object(m.z)()))).catch(e=>Object(l.g)("Terjadi Kesalahan Saat Menyimpan, Error :".concat(e)))}showBooking(){this.setState({booking:!0}),this.props.dispatch(Object(g.Wb)())}showBarang(){this.setState({booking:!1}),this.props.dispatch(Object(g.Wb)())}tambahSparepart(e){let a={kode_supplier:"-",kode:e.kategori_service,nama:e.nama_service,qty:1,harga_satuan:e.harga_service,harga_total:e.harga_service,keterangan:e.keterangan_service,jenis_barang:"JASA SERVICE"},t={kode_supplier:e.kode_supplier,kode:e.kode_sparepart,nama:e.nama_sparepart,qty:1,harga_satuan:e.harga_sparepart,harga_total:e.harga_sparepart,keterangan:e.kategori_service,jenis_barang:"SPAREPART"},r=JSON.parse(localStorage.getItem("list_service_daftar_temp"))||[];r.push(a),r.push(t),localStorage.setItem("list_service_daftar_temp",JSON.stringify(r)),Object(l.h)("Tambah Data Berhasil"),this.props.dispatch(Object(g.Tb)()),this.props.dispatch(Object(s.a)("TambahService")),this.props.dispatch(Object(m.z)())}render(){return n.a.createElement("div",null,n.a.createElement("ol",{className:"breadcrumb float-xl-right"},n.a.createElement("li",{className:"breadcrumb-item"},n.a.createElement(o.b,{to:"#"},"Data Master")),n.a.createElement("li",{className:"breadcrumb-item active"},"Daftar Service")),n.a.createElement("h1",{className:"page-header"},"Daftar Service "),n.a.createElement(c.a,null,n.a.createElement(c.c,null,"Daftar Service"),n.a.createElement(c.b,null,n.a.createElement("br",null),n.a.createElement(v,{onSubmit:e=>this.handleSubmit(e),showBarang:()=>this.showBarang(),showBooking:()=>this.showBooking()}))),n.a.createElement(p.a,{content:this.state.booking?n.a.createElement(f,null):n.a.createElement(u.a,{onSubmit:e=>this.tambahSparepart(e)}),title:this.state.booking?"Lihat Booking":"Tambah Data"}))}})},489:function(e,a,t){"undefined"!=typeof self&&self,e.exports=function(e){function a(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,a),n.l=!0,n.exports}var t={};return a.m=e,a.c=t,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},a.p="/dist/",a(a.s=1)}([function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r=function(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")},n=function(e,a){return a[e]},o=function(e,a,t,r,o,i){var l="",c=e||"";if(0===c.length&&o&&!r)return"";for(var s=0,p=0;p<a.length;p+=1){var u=c.charAt(s),m=a.charAt(p),g=n(m,i);if(g)if(u)if(g.regExp.test(u))l=l.concat(u),s+=1;else{if(!r)return l;l=l.concat(t),c=""}else{if(!r)return l;l=l.concat(t)}else l=l.concat(m)}return l};a.applyMask=o,a.applyTransform=function(e,a,t,r){for(var o=e||"",i=a||"",l="",c=0;c<o.length;c+=1){var s=o.charAt(c);if(s!==i.charAt(c)){var p=t.charAt(c),u=n(p,r);l=u&&u.transform?l.concat(u.transform(s)):l.concat(s)}else l=l.concat(s)}return l},a.countOcurrences=function(e,a){return(e.match(a)||[]).length},a.escapeRegExp=r,a.firstUnfilledPosition=function(e,a,t,r){if(""===e)return 0;for(var o=0;o<e.length;o+=1){var i=e.charAt(o),l=a.charAt(o);if(i===t&&i!==l)return o}if(e.length===a.length)for(var c=a.length-1;c>=0;c-=1){var s=a.charAt(c);if(n(s,r))return c+1}return e.length},a.getMaskDefinition=n,a.inputReformat=function(e,a,t,i,l,c){for(var s=e||"",p=0;p<a.length;p+=1){var u=a.charAt(p);if(!n(u,c)){var m=r(u);s=s.replace(new RegExp(m),"")}}var g=r(t);return s=s.replace(g,""),o(s,a,t,i,l,c)},a.isPatternComplete=function(e,a,t){if(!e||0===e.length)return!1;if(e.length!==a.length)return!1;for(var r=0;r<e.length;r+=1){var o=e.charAt(r),i=a.charAt(r),l=n(i,t);if(l){if(!l.regExp.test(o))return!1}else if(o!==i)return!1}return!0},a.maskStrip=function(e,a,t,r){for(var o="",i=e||"",l=0;l<i.length;l+=1){var c=i.charAt(l),s=a.charAt(l),p=n(s,r);p&&(p.regExp.test(c)?o=o.concat(c):c===t&&(i=""))}return o},a.numberToLocaleString=function(e,a,t){return e.toLocaleString(a,{minimumFractionDigits:t,maximumFractionDigits:t})},a.charMatchTest=function(e,a){for(var t=Object.keys(a),r=0;r<t.length;r+=1){var n=t[r];if(a[n].regExp.test(e))return n}},a.validCaretPositions=function(e,a){var t=[];if(!e||"string"!=typeof e||0===e.length)return t;n(e.charAt(0),a)&&t.push(0);for(var r=1;r<e.length;r+=1){var o=e.charAt(r-1),i=e.charAt(r);(n(o,a)||n(i,a))&&t.push(r)}return n(e.charAt(e.length-1),a)&&t.push(e.length),t}},function(e,a,t){e.exports=t(2)},function(e,a,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(a,"__esModule",{value:!0}),a.createTextMask=a.createNumberMask=void 0;var n=t(3),o=r(n),i=t(4),l=r(i);a.createNumberMask=o.default,a.createTextMask=l.default},function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r=t(0);a.default=function(e){var a=e||{},t=a.prefix,n=void 0===t?"":t,o=a.suffix,i=void 0===o?"":o,l=a.decimalPlaces,c=void 0===l?0:l,s=a.multiplier,p=void 0===s?1:s,u=a.stringValue,m=void 0!==u&&u,g=a.allowEmpty,d=void 0!==g&&g,h=a.allowNegative,f=void 0!==h&&h,v=a.showPlusSign,k=void 0!==v&&v,b=a.spaceAfterSign,_=void 0!==b&&b,E=a.locale,S=a.onChange;if(c>10)throw new Error("The maximum value for createNumberMask's option `decimalPlaces` is 10.");if("number"!=typeof p)throw new Error("The createNumberMask's option `multilpier` should be of type number.");if(0===p)throw new Error("The createNumberMask's option `multilpier` cannot be zero.");var y=function(e){var a=e.target;a&&(e.persist&&e.persist(),setTimeout(function(){var t=a.value.length-i.length;e.target.setSelectionRange(t,t)}))};return{format:function(e){return function(e){var a=e;if(null===a||void 0===a||""===a){if(d)return"";a=0}else"number"!=typeof a&&(a=Number(a));var t=k?"+":"";return a<0&&(a*=-1,f&&(t="-")),t&&_&&(t+=" "),a*=1/p,a=(0,r.numberToLocaleString)(a,E,c),""+t+n+a+i}(e)},normalize:function(e,a){return function(e,a){var t=(0,r.escapeRegExp)(n),o=(0,r.escapeRegExp)(i),l=new RegExp("^[-|+]? ?"+t),s=new RegExp(o+"$"),u=1;if(f){var g=/-/g,h=(0,r.countOcurrences)(e,g)-(0,r.countOcurrences)(n,g)-(0,r.countOcurrences)(i,g);u=Math.pow(-1,h)%2}var v=e;if(n&&(v=v.replace(l,"")),i&&(v=v.replace(s,"")),v=v.replace(/\D/g,""),d){var k=""===v,b=""===v.replace(/0+/g,""),_=v.length<=c,E=void 0===a;if(k||!E&&_&&b)return"0"===v?m?"0":0:null}var y=Number(v)/Math.pow(10,c)*u;y=Number((y*p).toPrecision(10)),m&&(y=y.toString());var x=y!==a;return S&&x&&S(y),y}(e,a)},onChange:function(e){return y(e)},onFocus:function(e){return y(e)},autoComplete:"off"}}},function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r=t(0),n=t(5),o=function(e){return e&&e.__esModule?e:{default:e}}(n);a.default=function(e){var a=e.pattern,t=e.placeholder,n=void 0===t?"_":t,i=e.maskDefinitions,l=void 0===i?o.default:i,c=e.guide,s=void 0===c||c,p=e.stripMask,u=void 0===p||p,m=e.allowEmpty,g=void 0!==m&&m,d=e.onChange,h=e.onCompletePattern;if(!a)throw new Error("The key `pattern` is required for createTextMask. You probably forgot to add it to your options.");if(!n||1!==n.length)throw new Error("The key `placeholder` should have a single character as a value.");var f=(0,r.validCaretPositions)(a,l);if(0===f.length)throw new Error("The pattern `"+a+"` passed for createTextMask is not valid.");var v=(0,r.charMatchTest)(n,l);if(v)throw new Error("The placeholder `"+n+"` matches the mask definition`"+v+"`. The mask created using `createTextMask`is therefore invalid.");var k=(0,r.maskStrip)(a,a,n,l),b=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e?u||t?(0,r.applyMask)(e,a,n,s,g,l):e:(0,r.applyMask)("",a,n,s,g,l)},_=function(e,t){var o=(0,r.inputReformat)(e,a,n,s,g,l),i=(0,r.maskStrip)(o,a,n,l),c=(0,r.applyTransform)(i,u?t:(0,r.maskStrip)(t,a,n,l),k,l),p=b(c,!0),m=u?c:p,f=m!==t&&(""!==m||void 0!==t);return d&&f&&d(m),h&&(0,r.isPatternComplete)(p,a,l)&&f&&setTimeout(function(){return h(m)},10),m},E=function(e){var t=(0,r.firstUnfilledPosition)(e.value,a,n,l);e.setSelectionRange(t,t)},S=function(e,a,t){for(var r=void 0,n=0;n<=f.length;n+=1)if(f[n]>a){r=n;break}var o=void 0;if(void 0===(o="left"===t?f[r-1]:f[r])){var i="left"===t?0:f.length-1;o=f[i]}e.setSelectionRange(o,o)},y=function(e){if(e.target){e.persist&&e.persist();var t=e.target.selectionStart,r=e.target.value;setTimeout(function(){var n=e.target,o=e.type,i=e.key,l=e.target,c=l.value,s=l.selectionStart,p=l.selectionEnd;switch(o){case"change":if(c.length===r.length+1&&c.charAt(t)===a.charAt(t)){S(n,t,"left");break}E(n);break;case"focus":E(n);break;case"click":s===p&&(f.indexOf(s)>=0?e.preventDefault():E(n));break;case"keydown":"ArrowLeft"===i?S(n,s,"left"):"ArrowRight"===i&&S(n,t,"right")}})}};return{format:function(e){return b(e)},normalize:function(e,a){return _(e,a)},onKeyDown:function(e){return y(e)},onChange:function(e){return y(e)},onFocus:function(e){return y(e)},onClick:function(e){return y(e)},autoComplete:"off"}}},function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={A:{regExp:/[A-Za-z]/,transform:function(e){return e.toUpperCase()}},a:{regExp:/[A-Za-z]/,transform:function(e){return e.toLowerCase()}},U:{regExp:/[A-Z]/},l:{regExp:/[a-z]/},9:{regExp:/[0-9]/}}}])},529:function(e,a,t){"use strict";t.d(a,"a",function(){return o});var r=t(0),n=t.n(r);t(96),t(558),t(559),t(52);const o=({input:e,label:a,type:t,readOnly:r,placeholder:o,meta:{touched:i,error:l,warning:c}})=>n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"",className:"text-black"},a),n.a.createElement("input",Object.assign({onKeyPress:e=>{"Enter"===e.key&&e.preventDefault()}},e,{autoComplete:"off",type:t,className:"form-control",readOnly:r,placeholder:o})),i&&(l&&n.a.createElement("ul",{className:"parsley-errors-list filled"},n.a.createElement("li",{className:"parsley-required"}," ",l,"."))||c&&n.a.createElement("p",null,c)))},557:function(e,a,t){"use strict";var r=t(0),n=t.n(r),o=t(29),i=t(195),l=t(196),c=t(489),s=t(6),p=t(9),u=t(529),m=t(27);const g=Object(c.createNumberMask)({prefix:"Rp. ",locale:"id-ID"});class d extends r.Component{constructor(e){super(e),this.state={listSupplier:[]}}componentDidMount(){this.props.dispatch(Object(s.Gb)()),this.props.dispatch(Object(s.wb)())}setSparepart(e){let a=e.split("||");this.props.change("kode_supplier1",null),Object(p.b)("daftar-service/getDataBarangDaftarService/"+a[3]).then(e=>this.setState({listSupplier:e&&e.data[0].data_supplier})).catch(e=>Object(m.g)("Error Get Supplier, ".concat(e))),this.props.change("harga_sparepart",a[1]),this.props.change("kode_sparepart",a[3]),this.props.change("nama_sparepart",a[2])}setService(e){let a=e.split("||");this.props.change("kategori_service",a[0]),this.props.change("harga_service",a[1]),this.props.change("nama_service",a[2])}setBarang(e){this.props.change("stock",e.split("||")[1]),this.props.change("kode_supplier",e.split("||")[0])}render(){return n.a.createElement("form",{onSubmit:this.props.handleSubmit},n.a.createElement("div",null,n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-6"},n.a.createElement("div",{className:"col-lg-12"},n.a.createElement(i.a,{name:"kategori_service1",component:m.e,options:this.props.listkategoriservice.map(e=>{return{value:"".concat(e.kategori_service,"||").concat(e.harga_jasa_service,"||").concat(e.jenis_service),name:e.kategori_service}}),onChange:e=>this.setService(e),type:"text",label:"Jenis Service",placeholder:"Masukan Jenis Service"})),n.a.createElement("div",{className:"col-lg-12 d-none"},n.a.createElement(i.a,{name:"kategori_service",component:m.d,type:"text",label:"Harga Service",placeholder:"Masukan Harga Service"})),n.a.createElement("div",{className:"col-lg-12 "},n.a.createElement(i.a,Object.assign({name:"harga_service",component:m.d,type:"telp",label:"Harga Service",placeholder:"Masukan Harga Service"},g,{readOnly:!0}))),n.a.createElement("div",{className:"col-lg-12 "},n.a.createElement(i.a,{name:"keterangan_service",component:m.d,type:"text",label:"Keterangan Service",placeholder:"Masukan Keterangan Service"})),n.a.createElement("div",{className:"col-lg-12 d-none "},n.a.createElement(i.a,Object.assign({name:"nama_service",component:m.d,type:"telp",label:"Harga Service",placeholder:"Masukan Harga Service"},g)))),n.a.createElement("div",{className:"col-lg-6"},n.a.createElement("div",{className:"col-lg-12"},n.a.createElement(i.a,{name:"sparepart",component:m.e,options:this.props.listBarang.map(e=>{return{value:"".concat(e.kode_barang,"||").concat(e.harga_jual,"||").concat(e.nama_barang,"||").concat(e.kode_barcode),name:e.nama_barang}}),onChange:e=>this.setSparepart(e),type:"text",label:"Jenis Service",placeholder:"Masukan Jenis Service"})),n.a.createElement("div",{className:"col-lg-12"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-6"},n.a.createElement(i.a,{name:"kode_supplier1",component:m.e,options:this.state.listSupplier.map(e=>{return{value:"".concat(e.kode_supplier,"||").concat(e.stock),name:e.nama_supplier}}),onChange:e=>this.setBarang(e),type:"text",label:"Kode Supplier",placeholder:"Masukan Kode Supplier"})),n.a.createElement("div",{className:"col-lg-6"},n.a.createElement(i.a,{name:"stock",component:u.a,type:"text",label:"Stock",placeholder:"Masukan Kode Supplier",readOnly:!0})))),n.a.createElement("div",{className:"col-lg-12 d-none"},n.a.createElement(i.a,{name:"kode_sparepart",component:m.d,type:"text",label:"Harga Service",placeholder:"Masukan Harga Service",readOnly:!0})),n.a.createElement("div",{className:"col-lg-12 d-none"},n.a.createElement(i.a,{name:"kode_supplier",component:m.d,type:"text",label:"Harga Service",placeholder:"Masukan Harga Service"})),n.a.createElement("div",{className:"col-lg-12 d-none"},n.a.createElement(i.a,{name:"nama_sparepart",component:m.d,type:"text",label:"Harga Service",placeholder:"Masukan Harga Service"})),n.a.createElement("div",{className:"col-lg-12"},n.a.createElement(i.a,Object.assign({name:"harga_sparepart",component:m.d,type:"telp",label:"Harga Service",placeholder:"Masukan Harga Service"},g,{readOnly:!0}))),n.a.createElement("div",{className:"col-lg-12 "},n.a.createElement(i.a,{name:"keterangan_sparepart",component:m.d,type:"text",label:"Keterangan Sparepart",placeholder:"Masukan Keterangan Sparepart"}))),n.a.createElement("div",{className:"col-lg-12"},n.a.createElement("div",{className:"text-right"},n.a.createElement("button",{className:"btn btn-primary"},"Submit ",n.a.createElement("i",{className:"fa fa-paper-plane ml-3"})))))))}}d=Object(l.a)({form:"TambahService",enableReinitialize:!0})(d),a.a=Object(o.b)(e=>({listBarang:e.datamaster.listbarang,listkategoriservice:e.datamaster.listkategoriservice}))(d)}}]);
//# sourceMappingURL=12.72a5cce3.chunk.js.map