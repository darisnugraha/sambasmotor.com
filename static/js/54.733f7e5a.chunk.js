(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{394:function(e,a,t){"use strict";t.d(a,"a",function(){return n});const n=e=>e?void 0:"Tidak Boleh Kosong"},395:function(e,a,t){"use strict";a.a=((e,a)=>{const t={};return e.kode_kategori||(t.kode_kategori="Kode Tidak Boleh Kosong"),e.nama_kategori||(t.nama_kategori="Nama Kategori Tidak Boleh Kosong"),e.harga_pergram||(t.harga_pergram="Harga / Gram Tidak Boleh Kosong"),e.presentase||(t.presentase="Presentase Tidak Boleh Kosong"),e.kadar||(t.kadar="Kadar Tidak Boleh Kosong"),t})},399:function(e,a,t){"undefined"!=typeof self&&self,e.exports=function(e){function a(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,a),r.l=!0,r.exports}var t={};return a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},a.p="/dist/",a(a.s=1)}([function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=function(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")},r=function(e,a){return a[e]},o=function(e,a,t,n,o,i){var l="",s=e||"";if(0===s.length&&o&&!n)return"";for(var c=0,u=0;u<a.length;u+=1){var d=s.charAt(c),g=a.charAt(u),m=r(g,i);if(m)if(d)if(m.regExp.test(d))l=l.concat(d),c+=1;else{if(!n)return l;l=l.concat(t),s=""}else{if(!n)return l;l=l.concat(t)}else l=l.concat(g)}return l};a.applyMask=o,a.applyTransform=function(e,a,t,n){for(var o=e||"",i=a||"",l="",s=0;s<o.length;s+=1){var c=o.charAt(s);if(c!==i.charAt(s)){var u=t.charAt(s),d=r(u,n);l=d&&d.transform?l.concat(d.transform(c)):l.concat(c)}else l=l.concat(c)}return l},a.countOcurrences=function(e,a){return(e.match(a)||[]).length},a.escapeRegExp=n,a.firstUnfilledPosition=function(e,a,t,n){if(""===e)return 0;for(var o=0;o<e.length;o+=1){var i=e.charAt(o),l=a.charAt(o);if(i===t&&i!==l)return o}if(e.length===a.length)for(var s=a.length-1;s>=0;s-=1){var c=a.charAt(s);if(r(c,n))return s+1}return e.length},a.getMaskDefinition=r,a.inputReformat=function(e,a,t,i,l,s){for(var c=e||"",u=0;u<a.length;u+=1){var d=a.charAt(u);if(!r(d,s)){var g=n(d);c=c.replace(new RegExp(g),"")}}var m=n(t);return c=c.replace(m,""),o(c,a,t,i,l,s)},a.isPatternComplete=function(e,a,t){if(!e||0===e.length)return!1;if(e.length!==a.length)return!1;for(var n=0;n<e.length;n+=1){var o=e.charAt(n),i=a.charAt(n),l=r(i,t);if(l){if(!l.regExp.test(o))return!1}else if(o!==i)return!1}return!0},a.maskStrip=function(e,a,t,n){for(var o="",i=e||"",l=0;l<i.length;l+=1){var s=i.charAt(l),c=a.charAt(l),u=r(c,n);u&&(u.regExp.test(s)?o=o.concat(s):s===t&&(i=""))}return o},a.numberToLocaleString=function(e,a,t){return e.toLocaleString(a,{minimumFractionDigits:t,maximumFractionDigits:t})},a.charMatchTest=function(e,a){for(var t=Object.keys(a),n=0;n<t.length;n+=1){var r=t[n];if(a[r].regExp.test(e))return r}},a.validCaretPositions=function(e,a){var t=[];if(!e||"string"!=typeof e||0===e.length)return t;r(e.charAt(0),a)&&t.push(0);for(var n=1;n<e.length;n+=1){var o=e.charAt(n-1),i=e.charAt(n);(r(o,a)||r(i,a))&&t.push(n)}return r(e.charAt(e.length-1),a)&&t.push(e.length),t}},function(e,a,t){e.exports=t(2)},function(e,a,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(a,"__esModule",{value:!0}),a.createTextMask=a.createNumberMask=void 0;var r=t(3),o=n(r),i=t(4),l=n(i);a.createNumberMask=o.default,a.createTextMask=l.default},function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=t(0);a.default=function(e){var a=e||{},t=a.prefix,r=void 0===t?"":t,o=a.suffix,i=void 0===o?"":o,l=a.decimalPlaces,s=void 0===l?0:l,c=a.multiplier,u=void 0===c?1:c,d=a.stringValue,g=void 0!==d&&d,m=a.allowEmpty,p=void 0!==m&&m,f=a.allowNegative,h=void 0!==f&&f,k=a.showPlusSign,v=void 0!==k&&k,b=a.spaceAfterSign,_=void 0!==b&&b,E=a.locale,y=a.onChange;if(s>10)throw new Error("The maximum value for createNumberMask's option `decimalPlaces` is 10.");if("number"!=typeof u)throw new Error("The createNumberMask's option `multilpier` should be of type number.");if(0===u)throw new Error("The createNumberMask's option `multilpier` cannot be zero.");var S=function(e){var a=e.target;a&&(e.persist&&e.persist(),setTimeout(function(){var t=a.value.length-i.length;e.target.setSelectionRange(t,t)}))};return{format:function(e){return function(e){var a=e;if(null===a||void 0===a||""===a){if(p)return"";a=0}else"number"!=typeof a&&(a=Number(a));var t=v?"+":"";return a<0&&(a*=-1,h&&(t="-")),t&&_&&(t+=" "),a*=1/u,a=(0,n.numberToLocaleString)(a,E,s),""+t+r+a+i}(e)},normalize:function(e,a){return function(e,a){var t=(0,n.escapeRegExp)(r),o=(0,n.escapeRegExp)(i),l=new RegExp("^[-|+]? ?"+t),c=new RegExp(o+"$"),d=1;if(h){var m=/-/g,f=(0,n.countOcurrences)(e,m)-(0,n.countOcurrences)(r,m)-(0,n.countOcurrences)(i,m);d=Math.pow(-1,f)%2}var k=e;if(r&&(k=k.replace(l,"")),i&&(k=k.replace(c,"")),k=k.replace(/\D/g,""),p){var v=""===k,b=""===k.replace(/0+/g,""),_=k.length<=s,E=void 0===a;if(v||!E&&_&&b)return"0"===k?g?"0":0:null}var S=Number(k)/Math.pow(10,s)*d;S=Number((S*u).toPrecision(10)),g&&(S=S.toString());var w=S!==a;return y&&w&&y(S),S}(e,a)},onChange:function(e){return S(e)},onFocus:function(e){return S(e)},autoComplete:"off"}}},function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=t(0),r=t(5),o=function(e){return e&&e.__esModule?e:{default:e}}(r);a.default=function(e){var a=e.pattern,t=e.placeholder,r=void 0===t?"_":t,i=e.maskDefinitions,l=void 0===i?o.default:i,s=e.guide,c=void 0===s||s,u=e.stripMask,d=void 0===u||u,g=e.allowEmpty,m=void 0!==g&&g,p=e.onChange,f=e.onCompletePattern;if(!a)throw new Error("The key `pattern` is required for createTextMask. You probably forgot to add it to your options.");if(!r||1!==r.length)throw new Error("The key `placeholder` should have a single character as a value.");var h=(0,n.validCaretPositions)(a,l);if(0===h.length)throw new Error("The pattern `"+a+"` passed for createTextMask is not valid.");var k=(0,n.charMatchTest)(r,l);if(k)throw new Error("The placeholder `"+r+"` matches the mask definition`"+k+"`. The mask created using `createTextMask`is therefore invalid.");var v=(0,n.maskStrip)(a,a,r,l),b=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e?d||t?(0,n.applyMask)(e,a,r,c,m,l):e:(0,n.applyMask)("",a,r,c,m,l)},_=function(e,t){var o=(0,n.inputReformat)(e,a,r,c,m,l),i=(0,n.maskStrip)(o,a,r,l),s=(0,n.applyTransform)(i,d?t:(0,n.maskStrip)(t,a,r,l),v,l),u=b(s,!0),g=d?s:u,h=g!==t&&(""!==g||void 0!==t);return p&&h&&p(g),f&&(0,n.isPatternComplete)(u,a,l)&&h&&setTimeout(function(){return f(g)},10),g},E=function(e){var t=(0,n.firstUnfilledPosition)(e.value,a,r,l);e.setSelectionRange(t,t)},y=function(e,a,t){for(var n=void 0,r=0;r<=h.length;r+=1)if(h[r]>a){n=r;break}var o=void 0;if(void 0===(o="left"===t?h[n-1]:h[n])){var i="left"===t?0:h.length-1;o=h[i]}e.setSelectionRange(o,o)},S=function(e){if(e.target){e.persist&&e.persist();var t=e.target.selectionStart,n=e.target.value;setTimeout(function(){var r=e.target,o=e.type,i=e.key,l=e.target,s=l.value,c=l.selectionStart,u=l.selectionEnd;switch(o){case"change":if(s.length===n.length+1&&s.charAt(t)===a.charAt(t)){y(r,t,"left");break}E(r);break;case"focus":E(r);break;case"click":c===u&&(h.indexOf(c)>=0?e.preventDefault():E(r));break;case"keydown":"ArrowLeft"===i?y(r,c,"left"):"ArrowRight"===i&&y(r,t,"right")}})}};return{format:function(e){return b(e)},normalize:function(e,a){return _(e,a)},onKeyDown:function(e){return S(e)},onChange:function(e){return S(e)},onFocus:function(e){return S(e)},onClick:function(e){return S(e)},autoComplete:"off"}}},function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={A:{regExp:/[A-Za-z]/,transform:function(e){return e.toUpperCase()}},a:{regExp:/[A-Za-z]/,transform:function(e){return e.toLowerCase()}},U:{regExp:/[A-Z]/},l:{regExp:/[a-z]/},9:{regExp:/[0-9]/}}}])},947:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(33),i=t(160),l=t(161),s=t(399),c=t(10),u=t(44),d=t(394),g=t(395);const m=Object(s.createNumberMask)({prefix:"Rp. ",suffix:" ,-",locale:"id-ID"});class p extends n.Component{constructor(e){super(e),this.state={listJenis:[],listKategori:[],listMerk:[],listUkuran:[],listKwalitas:[],listRak:[],listSelving:[],listSatuan:[]}}componentDidMount(){this.props.isEdit||this.props.change("kode_barang",this.props.idbarang),Object(c.b)("kategori/get/all").then(e=>this.setState({listKategori:e.data})).catch(()=>Object(u.a)("Sepertinya ada gangguan, coba check koneksi anda")),Object(c.b)("jenis/get/all").then(e=>this.setState({listJenis:e.data})).catch(()=>Object(u.a)("Sepertinya ada gangguan, coba check koneksi anda")),Object(c.b)("merk-barang/get/all").then(e=>this.setState({listMerk:e.data})).catch(()=>Object(u.a)("Sepertinya ada gangguan, coba check koneksi anda")),Object(c.b)("ukuran/get/all").then(e=>this.setState({listUkuran:e.data})).catch(()=>Object(u.a)("Sepertinya ada gangguan, coba check koneksi anda")),Object(c.b)("kwalitas/get/all").then(e=>this.setState({listKwalitas:e.data})).catch(()=>Object(u.a)("Sepertinya ada gangguan, coba check koneksi anda")),Object(c.b)("lokasi-rak/get/all").then(e=>this.setState({listRak:e.data})).catch(()=>Object(u.a)("Sepertinya ada gangguan, coba check koneksi anda")),Object(c.b)("lokasi-selving/get/all").then(e=>this.setState({listSelving:e.data})).catch(()=>Object(u.a)("Sepertinya ada gangguan, coba check koneksi anda")),Object(c.b)("satuan/get/all").then(e=>this.setState({listSatuan:e.data})).catch(()=>Object(u.a)("Sepertinya ada gangguan, coba check koneksi anda"))}render(){return r.a.createElement("form",{onSubmit:this.props.handleSubmit},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-6"},r.a.createElement(i.a,{name:"kode_kategori",component:u.e,options:this.state.listKategori.map(e=>{return{value:e.kode_kategori,name:e.nama_kategori}}),type:"text",label:"Kode Kategori",placeholder:"Masukan kode Kategori",readOnly:this.props.isEdit})),r.a.createElement("div",{className:"col-lg-6"},r.a.createElement(i.a,{name:"jenis_barang",component:u.e,options:this.state.listJenis.map(e=>{return{value:e.kode_jenis,name:e.nama_jenis}}),label:"Jenis Barang",placeholder:"Masukan Jenis Barang"})),r.a.createElement("div",{className:"col-lg-6"},r.a.createElement(i.a,{name:"kode_barcode",component:u.c,type:"text",label:"Kode Barcode",placeholder:"Masukan Kode Barcode",validate:d.a})),r.a.createElement("div",{className:"col-lg-6"},r.a.createElement(i.a,{name:"kode_barang",component:u.c,type:"text",label:"Kode Barang",placeholder:"Masukan Kode Barang",readOnly:!0,validate:d.a})),r.a.createElement("div",{className:"col-lg-12"},r.a.createElement(i.a,{name:"nama_barang",component:u.c,type:"text",label:"Nama Barang",placeholder:"Masukan Nama Barang",validate:d.a})),r.a.createElement("div",{className:"col-lg-6"},r.a.createElement(i.a,{name:"merk",component:u.e,options:this.state.listMerk.map(e=>{return{value:e.kode_merk_barang,name:e.nama_merk_barang}}),label:"Merk",placeholder:"Masukan Merk"})),r.a.createElement("div",{className:"col-lg-6"},r.a.createElement(i.a,{name:"ukuran",component:u.e,options:this.state.listUkuran.map(e=>{return{value:e.kode_ukuran,name:e.nama_ukuran}}),label:"Ukuran",placeholder:"Masukan Ukuran"})),r.a.createElement("div",{className:"col-lg-6"},r.a.createElement(i.a,{name:"kwalitas",component:u.e,options:this.state.listKwalitas.map(e=>{return{value:e.kode_kwalitas,name:e.nama_kwalitas}}),label:"Kwalitas",placeholder:"Masukan Kwalitas"})),r.a.createElement("div",{className:"col-lg-6"},r.a.createElement(i.a,{name:"type",component:u.c,options:[],label:"Type",placeholder:"Masukan Type"})),r.a.createElement("div",{className:"col-lg-6"},r.a.createElement(i.a,{name:"rak",component:u.e,options:this.state.listRak.map(e=>{return{value:e.kode_lokasi_rak,name:e.nama_lokasi_rak}}),label:"Rak",placeholder:"Masukan Rak"})),r.a.createElement("div",{className:"col-lg-6"},r.a.createElement(i.a,{name:"selving",component:u.e,options:this.state.listSelving.map(e=>{return{value:e.kode_lokasi_selving,name:e.nama_lokasi_selving}}),label:"Selfing",placeholder:"Masukan Selfing"})),r.a.createElement("div",{className:"col-lg-6"},r.a.createElement(i.a,{name:"satuan",component:u.e,options:this.state.listSatuan.map(e=>{return{value:e.kode_satuan,name:e.nama_satuan}}),type:"text",label:"Satuan",placeholder:"Masukan Satuan"})),r.a.createElement("div",{className:"col-lg-6"},r.a.createElement(i.a,Object.assign({name:"harga",component:u.c,type:"telp",label:"Harga",placeholder:"Masukan Harga",validate:d.a},m)))),r.a.createElement("div",{className:"col-lg-12"},r.a.createElement("button",{className:"btn btn-primary",disabled:this.props.onSend},this.props.onSend?r.a.createElement(r.a.Fragment,null,r.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Menyimpan"):r.a.createElement(r.a.Fragment,null,"Simpan ",r.a.createElement("i",{className:"fa fa-paper-plane ml-3 "})))))}}p=Object(l.a)({form:"dataBarang",enableReinitialize:!0,validate:g.a})(p),a.default=Object(o.b)(e=>void 0!==e.datamaster.databarang?{initialValues:{kode_kategori:e.datamaster.databarang.kode_kategori,jenis_barang:e.datamaster.databarang.kode_jenis,kode_barang:e.datamaster.databarang.kode_barang,kode_barcode:e.datamaster.databarang.kode_barcode,nama_barang:e.datamaster.databarang.nama_barang,merk:e.datamaster.databarang.kode_merk_barang,ukuran:e.datamaster.databarang.kode_ukuran,kwalitas:e.datamaster.databarang.kode_kwalitas,type:e.datamaster.databarang.type,rak:e.datamaster.databarang.kode_lokasi_rak,selving:e.datamaster.databarang.kode_lokasi_selving,harga:e.datamaster.databarang.harga_jual,satuan:e.datamaster.databarang.kode_satuan},onSend:e.datamaster.onSend}:{onSend:e.datamaster.onSend},null)(p)}}]);
//# sourceMappingURL=54.733f7e5a.chunk.js.map