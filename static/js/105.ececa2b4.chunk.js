(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{1061:function(a,e,t){"use strict";t.r(e);var n=t(0),r=t.n(n),l=t(5),o=t(10),c=t(67),s=t(83),m=(t(172),t(52));var i=a=>{const e=new s.default("landscape");let t=[],n=[],r=0;e.setFontSize(15),e.text("LAPORAN PEMBAYARAN PIUTANG",14,15),e.setFontSize(10),e.text("TANGGAL : ".concat(Object(m.b)()),14,25),a.forEach((a,e)=>{let n=[a.nama_customer,a.tanggal_bayar,a.no_faktur_bayar,a.no_nota,a.jenis_pembayaran,parseFloat(a.total_bayar).toLocaleString("id-ID")];t.push(n),r+=parseFloat(a.total_bayar)});let l=["","","","","Grand Total","".concat(parseFloat(r).toLocaleString("id-ID"))];n.push(l),e.autoTable({head:[[{content:"NAMA CUSTOMER"},{content:"ALAMAT"},{content:"HANDPHONE"},{content:"PIUTANG AWAL"},{content:"BAYAR"},{content:"SALDO"}]],body:t,foot:n,startY:35,theme:"plain",rowPageBreak:"avoid",pageBreak:"avoid",margin:{top:20},bodyStyles:{lineWidth:.02,lineColor:"#000"},headStyles:{lineWidth:.02,lineColor:"#000",fillColor:[187,187,187]}});var o="<embed width='100%' height='100%' src='"+e.output("datauristring")+"'/>",c=window.open();c.document.open(),c.document.write(o)},p=t(33),u=t(160),d=t(161),b=t(6),g=t(44);class h extends n.Component{constructor(a){super(a),this.state={}}componentDidMount(){this.props.dispatch(Object(b.xb)())}render(){return r.a.createElement("form",{onSubmit:this.props.handleSubmit},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-3"},r.a.createElement(u.a,{name:"tanggal_awal",component:g.c,type:"date",label:"Dari Tanggal",placeholder:"Masukan Tanggal Awal"})),r.a.createElement("div",{className:"col-lg-3"},r.a.createElement(u.a,{name:"tanggal_akhir",component:g.c,type:"date",label:"Sampai Tanggal",placeholder:"Masukan Sampai Tanggal"})),r.a.createElement("div",{className:"col-lg-3"},r.a.createElement(u.a,{name:"kode_customer",component:g.e,options:this.props.customer.map(a=>{return{value:a.kode_customer,name:a.nama_customer}}),label:"Nama Customer / Semua",placeholder:"Masukan Jenis"})),r.a.createElement("div",{className:"col-lg-12"},r.a.createElement("div",{className:"text-right"},r.a.createElement("button",{className:"btn btn-primary"},"Lihat Data ",r.a.createElement("i",{className:"fa fa-print ml-3"}))))))}}h=Object(d.a)({form:"HeadLaporanPembayaranCustomer",enableReinitialize:!0})(h);var E=Object(p.b)(a=>({customer:a.datamaster.listcustomer}))(h);e.default=class extends n.Component{constructor(a){super(a),this.state={}}getLaporan(a){Object(o.b)("laporan/bayar-piutang-customer/lap-pembayaran-piutang/"+"".concat(a.tanggal_awal,"&").concat(a.tanggal_akhir,"&").concat(a.kode_customer)).then(a=>this.setState({listLaporan:a.data})).then(()=>i(this.state.listLaporan))}render(){return r.a.createElement("div",null,r.a.createElement("ol",{className:"breadcrumb float-xl-right"},r.a.createElement("li",{className:"breadcrumb-item"},r.a.createElement(l.b,{to:"#"},"Laporan")),r.a.createElement("li",{className:"breadcrumb-item active"},"Laporan Pembayaran Piutang")),r.a.createElement("h1",{className:"page-header"},"Laporan Pembayaran Piutang "),r.a.createElement(c.a,null,r.a.createElement(c.c,null,"Laporan Pembayaran Piutang"),r.a.createElement(c.b,null,r.a.createElement(E,{onSubmit:a=>this.getLaporan(a)}))))}}}}]);
//# sourceMappingURL=105.ececa2b4.chunk.js.map