(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{1059:function(a,e,t){"use strict";t.r(e);var n=t(0),r=t.n(n),l=t(5),o=t(67),c=t(33),s=t(160),m=t(161),u=t(44),i=t(83);t(172);var E=(a="",e="",t="",n="",r="")=>{const l=new i.default;let o=[],c=40,s=0,m=["BARCODE","NAMA BARANG","MERK","QTY","SATUAN","HARGA","TOTAL"];[{tanggal:"5 februari 2021",customer:"OCTAVIAN",nomor_bon_return:"RT01923123",nomor_bon_jual:"JL129312u123",list_barang:[{barcode:"919238123",nama_barang:"MICRO BEARING",merk:"GENIO",qty:5,satuan:"PCS",harga_satuan:2e5,saldo:1e6},{barcode:"817236123",nama_barang:"ROLLER NMAX",merk:"YAMAHA",qty:5,satuan:"SET",harga_satuan:2e5,saldo:1e6}]},{tanggal:"5 februari 2021",customer:"OCTAVIAN",nomor_bon_return:"RT01923123",nomor_bon_jual:"JL129312u123",list_barang:[{barcode:"919238123",nama_barang:"MICRO BEARING",merk:"GENIO",qty:5,satuan:"PCS",harga_satuan:2e5,saldo:1e6},{barcode:"817236123",nama_barang:"ROLLER NMAX",merk:"YAMAHA",qty:5,satuan:"SET",harga_satuan:2e5,saldo:1e6}]},{tanggal:"5 februari 2021",customer:"OCTAVIAN",nomor_bon_return:"RT01923123",nomor_bon_jual:"JL129312u123",list_barang:[{barcode:"919238123",nama_barang:"MICRO BEARING",merk:"GENIO",qty:5,satuan:"PCS",harga_satuan:2e5,saldo:1e6},{barcode:"817236123",nama_barang:"ROLLER NMAX",merk:"YAMAHA",qty:5,satuan:"SET",harga_satuan:2e5,saldo:1e6}]}].forEach((a,e)=>{l.setFontSize(10),l.text("Tanggal : ".concat(a.tanggal),14,0===e?40:c+5),l.text("Nomor Bon Jual : ".concat(a.nomor_bon_jual),100,0===e?40:c+5),l.text("Customer : ".concat(a.customer),14,0===e?45:c+10),l.text("Nomor Bon Return : ".concat(a.nomor_bon_return),100,0===e?45:c+10),a.list_barang.forEach((a,e)=>{let t=[a.barcode,a.nama_barang,a.merk,a.qty,a.satuan,"Rp. "+parseFloat(a.harga_satuan).toLocaleString("id-ID"),"Rp. "+parseFloat(a.saldo).toLocaleString("id-ID")];s+=parseFloat(a.saldo),o.push(t),console.log(o)});let t=["","","","","","Sub Total :","Rp. "+parseFloat(s).toLocaleString("id-ID")];o.push(t),l.autoTable(m,o,{startY:0===e?50:c+15,theme:"plain"}),c=l.lastAutoTable.finalY+10,o=[],s=0}),l.setFontSize(15),l.text("LAPORAN RETURN CUSTOMER",14,15),l.setFontSize(10),l.text("TANGGAL : ".concat(a),14,25),l.text("KATEGORI : ".concat(e),14,30),l.text("User\t: ".concat(t),14,c+10),l.text("Cetak\t: ".concat(n),14,c+16),l.text("Valid\t: ".concat(r),14,c+22);var u="<embed width='100%' height='100%' src='"+l.output("datauristring")+"'/>",E=window.open();E.document.open(),E.document.write(u),E.document.close()};class b extends n.Component{constructor(a){super(a),this.state={}}render(){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-3"},r.a.createElement(s.a,{name:"tanggal_awal",component:u.c,type:"date",label:"Dari Tanggal",placeholder:"Masukan Tanggal Awal"})),r.a.createElement("div",{className:"col-lg-3"},r.a.createElement(s.a,{name:"tanggal_akhir",component:u.c,type:"date",label:"Sampai Tanggal",placeholder:"Masukan Sampai Tanggal"})),r.a.createElement("div",{className:"col-lg-3"},r.a.createElement(s.a,{name:"jenis",component:u.e,options:[{value:"JENIS01",name:"JENIS 01"},{value:"JENIS02",name:"JENIS 02"},{value:"JENIS03",name:"JENIS 03"},{value:"JENIS04",name:"JENIS 04"}],type:"text",label:"Jenis",placeholder:"Masukan Jenis"})),r.a.createElement("div",{className:"col-lg-3"},r.a.createElement(s.a,{name:"type",component:u.e,options:[{value:"TYPE01",name:"TYPE 01"},{value:"TYPE02",name:"TYPE 02"},{value:"TYPE03",name:"TYPE 03"},{value:"TYPE04",name:"TYPE 04"}],type:"text",label:"Type",placeholder:"Masukan Jenis"})),r.a.createElement("div",{className:"col-lg-12"},r.a.createElement("div",{className:"text-right"},r.a.createElement("button",{className:"btn btn-primary",onClick:()=>E("2 Februari 2021","SEMUA","ADMIN","2 FEBRUARI 2021","ADMIN")},"Lihat Data ",r.a.createElement("i",{className:"fa fa-print ml-3"})))))}}b=Object(m.a)({form:"HeadLaporanReturnCustomer",enableReinitialize:!0})(b);var g=Object(c.b)()(b);e.default=class extends n.Component{constructor(a){super(a),this.state={}}render(){return r.a.createElement("div",null,r.a.createElement("ol",{className:"breadcrumb float-xl-right"},r.a.createElement("li",{className:"breadcrumb-item"},r.a.createElement(l.b,{to:"#"},"Laporan")),r.a.createElement("li",{className:"breadcrumb-item active"},"Laporan ReturnCustomer")),r.a.createElement("h1",{className:"page-header"},"Laporan ReturnCustomer "),r.a.createElement(o.a,null,r.a.createElement(o.c,null,"Laporan ReturnCustomer"),r.a.createElement(o.b,null,r.a.createElement(g,null))))}}}}]);
//# sourceMappingURL=109.95035a3a.chunk.js.map