(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{486:function(e,a,t){"use strict";t.d(a,"a",function(){return n});const n=e=>e?void 0:"Tidak Boleh Kosong"},489:function(e,a,t){"use strict";a.a=((e,a)=>{const t={};return e.kode_kategori||(t.kode_kategori="Kode Tidak Boleh Kosong"),e.nama_kategori||(t.nama_kategori="Nama Kategori Tidak Boleh Kosong"),e.harga_pergram||(t.harga_pergram="Harga / Gram Tidak Boleh Kosong"),e.presentase||(t.presentase="Presentase Tidak Boleh Kosong"),e.kadar||(t.kadar="Kadar Tidak Boleh Kosong"),t})},992:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(29),o=t(197),s=t(49),l=t(198),c=t(23),d=t(486),m=t(489);class p extends n.Component{constructor(e){super(e),this.state={}}render(){return r.a.createElement("form",{onSubmit:this.props.handleSubmit,onKeyPress:e=>{"Enter"===e.key&&e.preventDefault()}},r.a.createElement(o.a,{name:"id_kategori_service",component:c.c,type:"text",label:"ID Kategori Service",placeholder:"Masukan ID Kategori Service",validate:d.a}),r.a.createElement(o.a,{name:"jenis_kategori",component:c.e,options:[{value:"KAKI",name:"Kaki"},{value:"TUNEUP",name:"Tune Up"},{value:"TURUN MESIN",name:"Turun Mesin"},{value:"ELECTRIC",name:"Electric"},{value:"ACC",name:"Acc"},{value:"SERVICE LUAR",name:"Service Luar"},{value:"LAIN-LAIN",name:"Lain-lain"}],type:"text",label:"Jenis Kategori",placeholder:"Masukan Jenis Kategori",validate:d.a}),r.a.createElement(o.a,{name:"jenis_service",component:c.c,type:"text",label:"Jenis Service",placeholder:"Masukan Jenis Service",validate:d.a}),r.a.createElement("button",{className:"btn btn-primary",disabled:this.props.onSend,onClick:()=>this.props(Object(s.b)("dataKategoriService"))},this.props.onSend?r.a.createElement(r.a.Fragment,null,r.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Menyimpan"):r.a.createElement(r.a.Fragment,null,"Simpan ",r.a.createElement("i",{className:"fa fa-paper-plane ml-3 "}))))}}p=Object(l.a)({form:"dataKategoriService",enableReinitialize:!0,validate:m.a})(p),a.default=Object(i.b)(e=>void 0!==e.datamaster.datakategoriservice?{initialValues:{id_kategori_service:e.datamaster.datakategoriservice.id_kategori_service,jenis_kategori:e.datamaster.datakategoriservice.kategori_service,jenis_service:e.datamaster.datakategoriservice.jenis_service},onSend:e.datamaster.onSend}:{onSend:e.datamaster.onSend},null)(p)}}]);
//# sourceMappingURL=28.e8da5fa6.chunk.js.map