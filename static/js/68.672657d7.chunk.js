(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{1002:function(a,e,t){"use strict";t.r(e);var n=t(0),o=t.n(n),r=t(33),i=t(160),s=t(161),d=t(44),l=t(393),m=t(396);class c extends n.Component{constructor(a){super(a),this.state={}}render(){return o.a.createElement("form",{onSubmit:this.props.handleSubmit},o.a.createElement(i.a,{name:"kode_kategori",component:d.c,type:"text",label:"Kode Kategori",placeholder:"Masukan Kode Kategori",readOnly:this.props.isEdit,validate:l.a}),o.a.createElement(i.a,{name:"nama_kategori",component:d.c,type:"text",label:"Nama Kategori",placeholder:"Masukan Nama Kategori",validate:l.a}),o.a.createElement("button",{className:"btn btn-primary",disabled:this.props.onSend},this.props.onSend?o.a.createElement(o.a.Fragment,null,o.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Menyimpan"):o.a.createElement(o.a.Fragment,null,"Simpan ",o.a.createElement("i",{className:"fa fa-paper-plane ml-3 "}))))}}c=Object(s.a)({form:"DataKategoriTambah",enableReinitialize:!0,validate:m.a})(c),e.default=Object(r.b)(a=>void 0!==a.datamaster.datakategori?{initialValues:{kode_kategori:a.datamaster.datakategori.kode_kategori,nama_kategori:a.datamaster.datakategori.nama_kategori},onSend:a.datamaster.onSend}:{onSend:a.datamaster.onSend},null)(c)},393:function(a,e,t){"use strict";t.d(e,"a",function(){return n});const n=a=>a?void 0:"Tidak Boleh Kosong"},396:function(a,e,t){"use strict";e.a=((a,e)=>{const t={};return a.kode_kategori||(t.kode_kategori="Kode Tidak Boleh Kosong"),a.nama_kategori||(t.nama_kategori="Nama Kategori Tidak Boleh Kosong"),a.harga_pergram||(t.harga_pergram="Harga / Gram Tidak Boleh Kosong"),a.presentase||(t.presentase="Presentase Tidak Boleh Kosong"),a.kadar||(t.kadar="Kadar Tidak Boleh Kosong"),t})}}]);
//# sourceMappingURL=68.672657d7.chunk.js.map