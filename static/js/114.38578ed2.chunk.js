(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{1049:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(5),r=a(10),c=a(54),i=a(67),s=a(83);a(172);var p=(e="",t="",a="",n="",l="",o)=>{const r=new s.default;let c=[],i=[],p=40,m=0,d=0;r.setFontSize(15),r.text("LAPORAN DETAIL PENERIMAAN SUPPLIER",14,15),r.setFontSize(10),r.text("Supplier : ".concat(e),14,25),r.text("Tanggal\t: ".concat(t),120,25),o.forEach((e,t)=>{let a=[[{content:"NO FAKTUR : ".concat(e.no_terima),colSpan:5},{content:"NO BON : ".concat(e.no_bon),colSpan:3}],[{content:"TANGGAL : ".concat(e.tanggal_bon),colSpan:5},{content:"TANGGAL TERIMA : ".concat(e.tanggal_terima),colSpan:3}],[{content:"BARCODE"},{content:"JENIS BARANG"},{content:"MERK"},{content:"KWT"},{content:"SATUAN"},{content:"QTY"},{content:"H. SATUAN"},{content:"TOTAL"}]];e.detail_barang.forEach((e,t)=>{let a=[e.kode_barcode,e.nama_barang,e.merk_barang,e.kwalitas,e.satuan,e.qty,e.harga_satuan,parseFloat(e.harga_total).toLocaleString("id-ID")];m+=parseFloat(e.harga_total),d+=parseInt(e.qty),c.push(a),console.log(c)});let n=["","","","","Sub Total","".concat(d),"","".concat(parseFloat(m).toLocaleString("id-ID"))];i.push(n),r.autoTable({head:a,body:c,foot:i,startY:0===t?35:p+5,theme:"plain",rowPageBreak:"avoid",pageBreak:"avoid",margin:{top:20},bodyStyles:{lineWidth:.02,lineColor:"#000"},headStyles:{lineWidth:.02,lineColor:"#000",fillColor:[187,187,187]}}),p=r.autoTableEndPosY()+10,c=[],i=[],m=0,d=0}),r.text("User\t: ".concat(a),14,p+10),r.text("Cetak\t: ".concat(n),14,p+16),r.text("Valid\t: ".concat(l),14,p+22);const u=r.internal.getNumberOfPages(),g=r.internal.pageSize.width,h=r.internal.pageSize.height;r.setFontSize(10);for(let s=1;s<u+1;s++){let e=g/2,t=h-10;r.setPage(s),r.text("".concat(s," of ").concat(u),e,t,{align:"center"})}r.autoPrint();var b="<embed width='100%' height='100%' src='"+r.output("datauristring")+"'/>",S=window.open();S.document.open(),S.document.write(b)},m=a(52);var d=(e="",t="",a="",n="",l="",o)=>{const r=new s.default;let c=[],i=0;r.setFontSize(15),r.text("LAPORAN REKAP PENERIMAAN SUPPLIER",14,15),r.setFontSize(10),r.text("Supplier : ".concat(e),14,25),r.text("Tanggal\t: ".concat(t),120,25),o.forEach((e,t)=>{e.detail_barang.forEach(e=>{i+=e.qty});let a=[e.no_terima,Object(m.a)(e.tanggal_terima),e.no_bon,e.tanggal_bon,e.kode_supplier,Object.keys(e.detail_barang).length,i,parseFloat(e.jml_bruto_rp).toLocaleString("id-ID"),parseFloat(e.diskon_rp).toLocaleString("id-ID"),parseFloat(e.jml_netto_rp).toLocaleString("id-ID")];c.push(a),console.log(c),i=0}),r.autoTable({head:[[{content:"FAKTUR"},{content:"TANGGAL TERIMA"},{content:"NO BON",styles:{cellWidth:20}},{content:"TANGGAL BON"},{content:"KODE SUPPLIER"},{content:"ITEM"},{content:"QTY"},{content:"TOTAL"},{content:"DISKON"},{content:"BERSIH"}]],body:c,foot:[],startY:35,theme:"plain",rowPageBreak:"avoid",pageBreak:"avoid",margin:{top:20},bodyStyles:{lineWidth:.02,lineColor:"#000"},headStyles:{lineWidth:.02,lineColor:"#000",fillColor:[187,187,187]}});let p=r.lastAutoTable.finalY+10;r.text("Print on\t: ".concat(Object(m.b)()),14,p+10);const d=r.internal.getNumberOfPages(),u=r.internal.pageSize.width,g=r.internal.pageSize.height;r.setFontSize(10);for(let s=1;s<d+1;s++){let e=u/2,t=g-10;r.setPage(s),r.text("".concat(s," of ").concat(d),e,t,{align:"center"})}r.autoPrint();var h="<embed width='100%' height='100%' src='"+r.output("datauristring")+"'/>",b=window.open();b.document.open(),b.document.write(h)},u=a(33),g=a(160),h=a(161),b=a(44);class S extends n.Component{constructor(e){super(e),this.state={listSupplier:[]}}componentDidMount(){Object(r.b)("supplier/get/all").then(e=>this.setState({listSupplier:e.data}))}render(){return l.a.createElement("form",{onSubmit:this.props.handleSubmit},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-3"},l.a.createElement(g.a,{name:"kode_supplier",component:b.e,options:this.state.listSupplier.map(e=>{return{value:e.kode_supplier,name:e.nama_supplier}}),type:"text",label:"Kode Supplier",placeholder:"Masukan Kode Supplier"})),l.a.createElement("div",{className:"col-lg-3"},l.a.createElement(g.a,{name:"tanggal_awal",component:b.c,type:"date",label:"Dari Tanggal",placeholder:"Masukan Tanggal Awal"})),l.a.createElement("div",{className:"col-lg-3"},l.a.createElement(g.a,{name:"tanggal_akhir",component:b.c,type:"date",label:"Sampai Tanggal",placeholder:"Masukan Sampai Tanggal"})),l.a.createElement("div",{className:"col-lg-3"},l.a.createElement(g.a,{name:"type",component:b.e,options:[{value:"REKAP",name:"REKAP"},{value:"DETAIL",name:"DETAIL"}],type:"text",label:"Type"})),l.a.createElement("div",{className:"col-lg-12"},l.a.createElement("div",{className:"text-right"},l.a.createElement("button",{className:"btn btn-primary"},"Lihat Data ",l.a.createElement("i",{className:"fa fa-print ml-3"}))))))}}S=Object(h.a)({form:"HeadLaporanKartuStock",enableReinitialize:!0})(S);var E=Object(u.b)()(S);t.default=class extends n.Component{constructor(e){super(e),this.state={hasilLaporan:[]}}handleSubmit(e){Object(r.b)("laporan/supplier/lap-terima-supplier/"+"".concat(e.kode_supplier||"SEMUA","&").concat(e.tanggal_awal,"&").concat(e.tanggal_akhir)).then(e=>this.setState({hasilLaporan:e.data})).then(()=>"DETAIL"===e.type?p(e.kode_supplier||"SEMUA",Object(c.a)(),"ADMIN",Object(c.a)(),"ADMIN",this.state.hasilLaporan):d(e.kode_supplier||"SEMUA",Object(c.a)(),"ADMIN",Object(c.a)(),"ADMIN",this.state.hasilLaporan))}render(){return l.a.createElement("div",null,l.a.createElement("ol",{className:"breadcrumb float-xl-right"},l.a.createElement("li",{className:"breadcrumb-item"},l.a.createElement(o.b,{to:"#"},"Laporan")),l.a.createElement("li",{className:"breadcrumb-item active"},"Laporan Penerimaan Supplier")),l.a.createElement("h1",{className:"page-header"},"Laporan Penerimaan Supplier "),l.a.createElement(i.a,null,l.a.createElement(i.c,null,"Laporan Penerimaan Supplier"),l.a.createElement(i.b,null,l.a.createElement(E,{onSubmit:e=>this.handleSubmit(e)}))))}}}}]);
//# sourceMappingURL=114.38578ed2.chunk.js.map