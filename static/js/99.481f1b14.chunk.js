(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{1055:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),l=t(5),r=t(67),c=t(33),s=t(160),i=t(161),m=t(44),p=t(83);t(172);var d=(e="",a="",t="")=>{const n=new p.default("portrait");let o=[],l=[],r=40,c=0;n.setFontSize(18),n.text("LAPORAN KARTU STOCK",14,15),n.setFontSize(8),n.text("TANGGAL : 01-01-2021 s/d 20-02-2021",14,25),n.text("LOKASI : PUSAT",14,30),n.text("JENIS\t: ARG",14,35),[{no_terima:"0.00",detail_barang:[{no:"13-02-2020",kode:"PB-200213-0001",bruto:0,persen:"1,048.54",netto:"-1,048.54",pkg:"PINDAH BRG PB-200213-0001",gross:"WAHAB"},{no:"13-02-2020",kode:"PB-200213-0002",bruto:0,persen:"200",netto:"-1,248.54",pkg:"PINDAH BRG PB-200213-0002",gross:"SUMBER BARU"},{no:"13-02-2020",kode:"PB-200213-0004",bruto:0,persen:"300",netto:"-1,548.54",pkg:"PINDAH BRG PB-200213-0004",gross:"ABC"}]}].forEach((e,a)=>{let t=[[{content:"SALDO AWAL \t: ".concat(e.no_terima),colSpan:7}],[{content:"TANGGAL"},{content:"REFF"},{content:"MASUK"},{content:"KELUAR"},{content:"SALDO"},{content:"KETERANGAN 1"},{content:"KETERANGAN 1"}]];e.detail_barang.forEach(e=>{let a=[e.no,e.kode,e.bruto,e.persen,e.netto,e.pkg,e.gross];c+=parseFloat(e.harga_total),o.push(a)}),l.push(["SUB TOTAL","","","1,548.54","","","",""]),r=n.lastAutoTable.finalY+2,n.autoTable({head:t,body:o,foot:l,startY:0===a?40:r,theme:"plain",rowPageBreak:"avoid",pageBreak:"avoid",margin:{top:20},bodyStyles:{lineWidth:.02,lineColor:"#000",fontSize:8},headStyles:{lineWidth:.02,lineColor:"#000",fillColor:[187,187,187],fontSize:8},footStyles:{fontSize:8}}),o=[],l=[]});var s="<embed width='100%' height='100%' src='"+n.output("datauristring")+"'/>",i=window.open();i.document.open(),i.document.write(s)};class u extends n.Component{constructor(e){super(e),this.state={}}render(){return o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-lg-3"},o.a.createElement(s.a,{name:"nopol_kendaran",component:m.c,type:"text",label:"Nomor Polisi",placeholder:"Masukan Nomor Polisi"})),o.a.createElement("div",{className:"col-lg-3"},o.a.createElement(s.a,{name:"tanggal_awal",component:m.c,type:"date",label:"Dari Tanggal",placeholder:"Masukan Tanggal Awal"})),o.a.createElement("div",{className:"col-lg-3"},o.a.createElement(s.a,{name:"tanggal_akhir",component:m.c,type:"date",label:"Sampai Tanggal",placeholder:"Masukan Sampai Tanggal"})),o.a.createElement("div",{className:"col-lg-12"},o.a.createElement("div",{className:"text-right"},o.a.createElement("button",{className:"btn btn-primary",onClick:()=>d()},"Lihat Data ",o.a.createElement("i",{className:"fa fa-print ml-3"})))))}}u=Object(i.a)({form:"HeadLaporanMedicalReport",enableReinitialize:!0})(u);var g=Object(c.b)()(u);a.default=class extends n.Component{constructor(e){super(e),this.state={}}render(){return o.a.createElement("div",null,o.a.createElement("ol",{className:"breadcrumb float-xl-right"},o.a.createElement("li",{className:"breadcrumb-item"},o.a.createElement(l.b,{to:"#"},"Laporan")),o.a.createElement("li",{className:"breadcrumb-item active"},"Laporan Medical Report")),o.a.createElement("h1",{className:"page-header"},"Laporan Medical Report "),o.a.createElement(r.a,null,o.a.createElement(r.c,null,"Laporan Medical Report"),o.a.createElement(r.b,null,o.a.createElement(g,null))))}}}}]);
//# sourceMappingURL=99.481f1b14.chunk.js.map