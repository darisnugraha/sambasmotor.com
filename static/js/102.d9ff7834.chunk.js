(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{1052:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(5),c=t(67),o=t(33),s=t(160),i=t(161),m=t(44),d=t(83);t(172);var u=(e="",a="",t="",n="",l="")=>{const r=new d.default;let c=[],o=40,s=0,i=["TANGGAL","MEKANIK","NO FAKTUR","JENIS","TOTAL"];[{kode_sales:"AMING",list_barang:[{tanggal:"03-02-2021",mekanik:"EMON",no_faktur:"SV20210203-0001",jenis:"ada",total:15e4},{tanggal:"03-02-2021",mekanik:"EMON",no_faktur:"SV20210203-0002",jenis:"ada",total:5e4},{tanggal:"03-02-2021",mekanik:"EMON",no_faktur:"SV20210203-0003",jenis:"ada",total:55e4}]}].forEach((e,a)=>{e.list_barang.forEach((e,a)=>{let t=[e.tanggal,e.mekanik,e.no_faktur,e.jenis,"Rp. "+parseFloat(e.total).toLocaleString("id-ID")];s+=parseFloat(e.total),c.push(t),console.log(c)}),r.autoTable(i,c,{startY:0===a?40:o+15,theme:"plain"}),o=r.lastAutoTable.finalY+10,c=[],s=0}),r.setFontSize(15),r.text("LAPORAN MEKANIK",14,15),r.setFontSize(10),r.text("TANGGAL : ".concat(e),14,25),r.text("MEKANIK : ".concat(a),14,30),r.text("User\t: ".concat(t),14,o+10),r.text("Cetak\t: ".concat(n),14,o+16),r.text("Valid\t: ".concat(l),14,o+22);var m="<embed width='100%' height='100%' src='"+r.output("datauristring")+"'/>",u=window.open();u.document.open(),u.document.write(m),u.document.close()};class E extends n.Component{constructor(e){super(e),this.state={}}render(){return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-3"},l.a.createElement(s.a,{name:"tanggal_awal",component:m.c,type:"date",label:"Dari Tanggal",placeholder:"Masukan Tanggal Awal"})),l.a.createElement("div",{className:"col-lg-3"},l.a.createElement(s.a,{name:"tanggal_akhir",component:m.c,type:"date",label:"Sampai Tanggal",placeholder:"Masukan Sampai Tanggal"})),l.a.createElement("div",{className:"col-lg-3"},l.a.createElement(s.a,{name:"kode_mekanik",component:m.e,options:[{value:"MEKANIK01",name:"MEKANIK 01"},{value:"MEKANIK02",name:"MEKANIK 02"},{value:"MEKANIK03",name:"MEKANIK 03"},{value:"MEKANIK04",name:"MEKANIK 04"}],type:"text",label:"Kode Mekanik",placeholder:"Masukan Kode Mekanik"})),l.a.createElement("div",{className:"col-lg-12"},l.a.createElement("div",{className:"text-right"},l.a.createElement("button",{className:"btn btn-primary",onClick:()=>u("2 Februari 2021","SEMUA","ADMIN","2 FEBRUARI 2021","ADMIN")},"Lihat Data ",l.a.createElement("i",{className:"fa fa-print ml-3"})))))}}E=Object(i.a)({form:"HeadLaporanMekanik",enableReinitialize:!0})(E);var p=Object(o.b)()(E);a.default=class extends n.Component{constructor(e){super(e),this.state={}}render(){return l.a.createElement("div",null,l.a.createElement("ol",{className:"breadcrumb float-xl-right"},l.a.createElement("li",{className:"breadcrumb-item"},l.a.createElement(r.b,{to:"#"},"Laporan")),l.a.createElement("li",{className:"breadcrumb-item active"},"Laporan Mekanik")),l.a.createElement("h1",{className:"page-header"},"Laporan Mekanik "),l.a.createElement(c.a,null,l.a.createElement(c.c,null,"Laporan Mekanik"),l.a.createElement(c.b,null,l.a.createElement(p,null))))}}}}]);
//# sourceMappingURL=102.d9ff7834.chunk.js.map