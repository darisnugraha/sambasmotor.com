(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{1002:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),s=t(29),o=t(196),c=t(197),r=t(23),i=t(5),m=t(487),p=t(33);class d extends n.Component{constructor(e){super(e),this.state={}}handleChange(e,a){let t=(a||"DEFAULT|DEFAULT").split("|");this.props.change(e,t[1])}componentDidMount(){this.props.dispatch(Object(i.xb)()),this.props.dispatch(Object(i.Gb)()),this.props.dispatch(Object(i.Nb)()),this.props.change("tanggal",Object(p.c)())}render(){return l.a.createElement("div",null,l.a.createElement("form",{onSubmit:this.props.handleSubmit,onKeyPress:e=>{"Enter"===e.key&&e.preventDefault()}},l.a.createElement("div",{className:"col-lg-12"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-3"},l.a.createElement(o.a,{name:"pelaggan",component:r.e,options:this.props.listCustomer.map(e=>{return{value:"".concat(e.kode_customer,"||").concat(e.nama_customer,"||").concat(e.alamat,"||").concat(e.handphone,"||").concat(e.nopol_kendaraan,"||").concat(e.merk_kendaraan,"||").concat(e.warna_kendaraann),name:e.nama_customer}}),onChange:e=>this.props.change("nopol_kendaraan",e.split("||")[4]),type:"text",label:"Nama customer",placeholder:"Masukan Nama customer",validate:m.a,loading:this.props.listCustomer===[]})),l.a.createElement("div",{className:"col-lg-3 d-none"},l.a.createElement(o.a,{name:"nopol_kendaraan",component:r.c,type:"text",label:"nopol",placeholder:"Masukan nopol"})),l.a.createElement("div",{className:"col-lg-3"},l.a.createElement(o.a,{name:"kategori_service",component:r.e,options:this.props.listkategoriservice.map(e=>{return{value:e.jenis_service,name:e.jenis_service}}),type:"text",label:"Jenis Service",placeholder:"Masukan Jenis Service",validate:m.a,loading:this.props.listkategoriservice===[]})),l.a.createElement("div",{className:"col-lg-2"},l.a.createElement(o.a,{name:"tanggal",component:r.c,type:"date",label:"Tanggal Pelayanan",placeholder:"Masukan Tanggal Pelayanan",validate:m.a})),l.a.createElement("div",{className:"col-lg-1"},l.a.createElement(o.a,{name:"jam",component:r.c,type:"text",label:"Jam",placeholder:"Masukan Jam"})),l.a.createElement("div",{className:"col-lg-3"},l.a.createElement(o.a,{name:"id_mekanik",component:r.e,options:this.props.listsales.filter(e=>"MKN"===e.kode_divisi).map(e=>{return{value:e.kode_pegawai,name:e.nama_pegawai}}),type:"text",label:"ID Mekanik",placeholder:"Masukan ID Mekanik",validate:m.a,loading:this.props.listsales===[]})),l.a.createElement("div",{className:"col-lg-12"},l.a.createElement("label",{htmlFor:""},"Catatan"),l.a.createElement(o.a,{name:"catatan",component:"textarea",type:"text",label:"Catatan",placeholder:"Masukan Catatan",className:"form-control",validate:m.a})))),l.a.createElement("div",{className:"col-lg-12 mt-3"},l.a.createElement("div",{className:"text-right"},l.a.createElement("button",{className:"btn btn-primary",disabled:this.props.onSend},this.props.onSend?l.a.createElement(l.a.Fragment,null,l.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Menyimpan"):l.a.createElement(l.a.Fragment,null,"Simpan ",l.a.createElement("i",{className:"fa fa-paper-plane ml-3 "})))))))}}d=Object(c.a)({form:"ModalBookingService",enableReinitialize:!0})(d),a.default=Object(s.b)(e=>({listCustomer:e.datamaster.listcustomer,listkategoriservice:e.datamaster.listkategoriservice,listsales:e.datamaster.listsales,onSend:e.datamaster.onSend}))(d)},487:function(e,a,t){"use strict";t.d(a,"a",function(){return n});const n=e=>e?void 0:"Tidak Boleh Kosong"}}]);
//# sourceMappingURL=59.ed524521.chunk.js.map