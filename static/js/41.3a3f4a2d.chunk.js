(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{486:function(a,e,n){"use strict";n.d(e,"a",function(){return t});const t=a=>a?void 0:"Tidak Boleh Kosong"},490:function(a,e,n){"use strict";e.a=((a,e)=>{const n={};return a.kode_kategori||(n.kode_kategori="Kode Tidak Boleh Kosong"),a.nama_kategori||(n.nama_kategori="Nama Kategori Tidak Boleh Kosong"),a.harga_pergram||(n.harga_pergram="Harga / Gram Tidak Boleh Kosong"),a.presentase||(n.presentase="Presentase Tidak Boleh Kosong"),a.kadar||(n.kadar="Kadar Tidak Boleh Kosong"),n})},980:function(a,e,n){"use strict";n.r(e);var t=n(0),r=n.n(t),o=n(29),s=n(197),d=n(198),i=n(18),l=n(486),m=n(490);class p extends t.Component{constructor(a){super(a),this.state={}}render(){return r.a.createElement("form",{onSubmit:this.props.handleSubmit,onKeyPress:a=>{"Enter"===a.key&&a.preventDefault()}},r.a.createElement(s.a,{name:"kode_warna",component:i.c,type:"text",label:"Kode Warna",placeholder:"Masukan Kode Warna",validate:l.a,readOnly:this.props.isEdit}),r.a.createElement(s.a,{name:"nama_warna",component:i.c,type:"text",label:"Nama Warna",placeholder:"Masukan Nama Warna",validate:l.a}),r.a.createElement("button",{className:"btn btn-primary",disabled:this.props.onSend},this.props.onSend?r.a.createElement(r.a.Fragment,null,r.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Menyimpan"):r.a.createElement(r.a.Fragment,null,"Simpan ",r.a.createElement("i",{className:"fa fa-paper-plane ml-3 "}))))}}p=Object(d.a)({form:"dataWarna",enableReinitialize:!0,validate:m.a})(p),e.default=Object(o.b)(a=>void 0!==a.datamaster.datawarna?{initialValues:{kode_warna:a.datamaster.datawarna.kode_warna,nama_warna:a.datamaster.datawarna.nama_warna},onSend:a.datamaster.onSend}:{onSend:a.datamaster.onSend},null)(p)}}]);
//# sourceMappingURL=41.3a3f4a2d.chunk.js.map