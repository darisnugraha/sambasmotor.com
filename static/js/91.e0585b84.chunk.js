(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{1058:function(a,e,t){"use strict";t.r(e);var n=t(0),l=t.n(n),o=t(7),r=t(9),c=t(41),s=t(59),i=(t(132),t(38));var m=(a="",e="",t)=>{const n=new s.default("landscape");let l=[],o=[],r=0;n.setFontSize(15),n.text("LAPORAN PENJUALAN RONGSOK",14,15),n.setFontSize(10),n.text("TANGGAL : ".concat(a," s/d ").concat(e),14,25),t.forEach((a,e)=>{let t=[Object(i.a)(a.tanggal),a.no_faktur_jual,a.nama_barang,a.qty,a.satuan,parseFloat(a.harga_satuan).toLocaleString("id-ID"),parseFloat(a.harga_total).toLocaleString("id-ID")];l.push(t),r+=parseFloat(a.harga_total)});let c=["","","","","","Total","".concat(parseFloat(r).toLocaleString("id-ID"))];o.push(c),n.autoTable({head:[[{content:"TANGGAL"},{content:"NO FAKTUR"},{content:"NAMA BARANG"},{content:"QTY"},{content:"SATUAN"},{content:"HARGA"},{content:"TOTAL"}]],body:l,foot:o,startY:35,theme:"plain",rowPageBreak:"avoid",pageBreak:"avoid",margin:{top:20},bodyStyles:{lineWidth:.02,lineColor:"#000"},headStyles:{lineWidth:.02,lineColor:"#000",fillColor:[187,187,187]}});var m="<embed width='100%' height='100%' src='"+n.output("datauristring")+"'/>",g=window.open();g.document.open(),g.document.write(m)},g=t(29),p=t(195),d=t(196),u=t(27);class h extends n.Component{constructor(a){super(a),this.state={}}render(){return l.a.createElement("form",{onSubmit:this.props.handleSubmit},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-3"},l.a.createElement(p.a,{name:"tanggal_awal",component:u.c,type:"date",label:"Dari Tanggal",placeholder:"Masukan Tanggal Awal"})),l.a.createElement("div",{className:"col-lg-3"},l.a.createElement(p.a,{name:"tanggal_akhir",component:u.c,type:"date",label:"Sampai Tanggal",placeholder:"Masukan Sampai Tanggal"})),l.a.createElement("div",{className:"col-lg-12"},l.a.createElement("div",{className:"text-right"},l.a.createElement("button",{className:"btn btn-primary"},"Lihat Data ",l.a.createElement("i",{className:"fa fa-print ml-3"}))))))}}h=Object(d.a)({form:"HeadLaporanPenjualanRongsok",enableReinitialize:!0})(h);var b=Object(g.b)(a=>({listkategori:a.datamaster.listkategori}))(h);e.default=class extends n.Component{constructor(a){super(a),this.state={}}getLaporan(a){Object(r.b)("laporan/penjualan-rosok/lap-penjualan-rosok/"+"".concat(a.tanggal_awal,"&").concat(a.tanggal_akhir)).then(a=>this.setState({listLaporan:a.data})).then(()=>m(a.tanggal_awal,a.tanggal_akhir,this.state.listLaporan))}render(){return l.a.createElement("div",null,l.a.createElement("ol",{className:"breadcrumb float-xl-right"},l.a.createElement("li",{className:"breadcrumb-item"},l.a.createElement(o.b,{to:"#"},"Laporan")),l.a.createElement("li",{className:"breadcrumb-item active"},"Laporan Penjualan Rongsok")),l.a.createElement("h1",{className:"page-header"},"Laporan Penjualan Rongsok "),l.a.createElement(c.a,null,l.a.createElement(c.c,null,"Laporan Penjualan Rongsok"),l.a.createElement(c.b,null,l.a.createElement(b,{onSubmit:a=>this.getLaporan(a)}))))}}}}]);
//# sourceMappingURL=91.e0585b84.chunk.js.map