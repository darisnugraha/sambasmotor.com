(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{1025:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(5),s=a(33),c=a(44),i=a(67),o=a(42),m=a(480),d=a.n(m),p=a(482),u=a(415),g=a(10),h=a(52),b=a(390);t.default=Object(s.b)(e=>({permintaan_temp:e.stocking.permintaan_temp,pengeluaran_selected:e.stocking.pengeluaran_selected,pengeluaran:e.stocking.pengeluaran}),null)(class extends n.a.Component{constructor(e){super(e),this.state={isEdit:!1,modalDialog:!1,isLoading:!1,listPengeluaran:"",listPenerimaan:[],step:0,step1:"row",step2:"row d-none",columns:[{dataField:"kode_barcode",text:"Kode Barcode"},{dataField:"kode_supplier",text:"Kode Supplier",sort:!0},{dataField:"nama_barang",text:"Nama Barang"},{dataField:"merk_barang",text:"Merk barang"},{dataField:"kwalitas",text:"Kwalitas"},{dataField:"ukuran",text:"Ukuran"},{dataField:"qty",text:"Qty"}],columns2:[{dataField:"kode_barcode",text:"Kode Barcode"},{dataField:"kode_supplier",text:"Kode Supplier",sort:!0},{dataField:"qty",text:"Qty"}]}}componentDidMount(){localStorage.setItem("FakturTerpilih","[]"),localStorage.setItem("FakturTerpilih_detail","[]"),Object(g.b)("pengeluaran-barang/generate/no-trx").then(e=>this.setState({listPengeluaran:e.data[0].no_pengeluaran,tanggal:Object(h.b)()})),this.props.dispatch(Object(o.k)())}nextStep(){switch(this.state.step){case 0:this.setState({step:this.state.step+1,step1:"row d-none",step2:"row"}),this.props.dispatch(Object(o.k)())}}prevStep(){switch(this.state.step){case 1:this.setState({step:this.state.step-1,step1:"row ",step2:"row d-none"})}}handleValidasi(e){if(null===localStorage.getItem("FakturTerpilih"))return Object(c.a)("Faktur Terpilih Kosong"),!1;let t=JSON.parse(localStorage.getItem("FakturTerpilih_detail"))||[],a={no_pengeluaran:this.state.listPengeluaran,tanggal:this.state.tanggal,no_bon:this.state.nomor_pb,detail_barang:JSON.parse(localStorage.getItem("FakturTerpilih"))},l=[];t.forEach((e,t)=>{let a=[++t,e.kode_barcode,e.nama_barang,e.merk_barang,e.kwalitas,e.ukuran,e.qty];l.push(a)});let n=["NO","BARCODE","NAMA BARANG","MERK","KW","UKURAN","QTY"];Object(g.c)("pengeluaran-barang/post-transaksi",a).then(()=>Object(c.b)("Berhasil Menyimpan data")).then(()=>Object(u.a)("Tanggal",this.state.tanggal,"","","NO PENGELUARAN",this.state.listPengeluaran,"","","ADMIN","01-28-2021","ADMIN",n,"BUKTI PENGELUARAN BARANG",l,[],!0)).then(()=>Object(h.c)(["FakturTerpilih","FakturTerpilih_detail"])).then(()=>this.props.dispatch(Object(o.j)())).then(()=>this.prevStep()).then(()=>this.setState({step:0}))}getPermintaan(e){this.props.dispatch(Object(o.j)(this.state.nomor_pb))}render(){const e={mode:"checkbox",clickToSelect:!0,onSelect:(e,t,a,l)=>{console.log(e.noFaktur);let n=JSON.parse(localStorage.getItem("FakturTerpilih"))||[],r=JSON.parse(localStorage.getItem("FakturTerpilih_detail"))||[];const s={kode_supplier:e.kode_supplier,kode_barcode:e.kode_barcode,qty:e.qty},c={kode_barcode:e.kode_barcode,kode_supplier:e.kode_supplier,nama_barang:e.nama_barang,merk_barang:e.merk_barang,kwalitas:e.kwalitas,ukuran:e.ukuran,qty:e.qty};if(t){var i=n.findIndex((t,a)=>t.kode_barcode===e.kode_barcode),o=r.findIndex((t,a)=>t.kode_barcode===e.kode_barcode);i<0?(n.push(s),r.push(c)):(n.splice(i,1),r.splice(o,1)),localStorage.setItem("FakturTerpilih",JSON.stringify(n)),localStorage.setItem("FakturTerpilih_detail",JSON.stringify(r))}else{var m=n.findIndex((t,a)=>t.kode_barcode===e.kode_barcode),d=r.findIndex((t,a)=>t.kode_barcode===e.kode_barcode);n.splice(m,1),r.splice(d,1),localStorage.setItem("FakturTerpilih",JSON.stringify(n)),localStorage.setItem("FakturTerpilih_detail",JSON.stringify(r))}},onSelectAll:(e,t,a)=>{var l=[],n=[];t.forEach(function(e){const t={kode_supplier:e.kode_supplier,kode_barcode:e.kode_barcode,qty:e.qty},a={kode_barcode:e.kode_barcode,kode_supplier:e.kode_supplier,nama_barang:e.nama_barang,merk_barang:e.merk_barang,kwalitas:e.kwalitas,ukuran:e.ukuran,qty:e.qty};l.push(t),n.push(a)}),e?(localStorage.setItem("FakturTerpilih",JSON.stringify(l)),localStorage.setItem("FakturTerpilih_detail",JSON.stringify(n))):(localStorage.removeItem("FakturTerpilih"),localStorage.removeItem("FakturTerpilih_detail"))}};return n.a.createElement("div",null,n.a.createElement("ol",{className:"breadcrumb float-xl-right"},n.a.createElement("li",{className:"breadcrumb-item"},n.a.createElement(r.b,{to:"#"},"Stocking")),n.a.createElement("li",{className:"breadcrumb-item active"},"Pengeluaran Barang")),n.a.createElement("h1",{className:"page-header"},"Pengeluaran Barang "),n.a.createElement(i.a,null,n.a.createElement(i.c,null,"Pengeluaran Barang"),n.a.createElement("br",null),n.a.createElement(i.b,null,n.a.createElement("div",{className:"mb-3"},n.a.createElement(d.a,{steps:[{title:"Pilih Faktur"},{title:"Data Terpilih"}],activeStep:this.state.step})),n.a.createElement("div",{className:this.state.step1},n.a.createElement("div",{className:"col-lg-12"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-4"},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:""},"No Pengeluaran"),n.a.createElement("input",{type:"text",className:"form-control",value:this.state.listPengeluaran,readOnly:!0}))),n.a.createElement("div",{className:"col-lg-4"},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:""},"Tanggal"),n.a.createElement("input",{type:"date",className:"form-control",value:this.state.tanggal,onChange:e=>this.setState({tanggal:e.target.value})}))),n.a.createElement("div",{className:"col-lg-4"},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:""},"Nomor PB"),n.a.createElement("input",{type:"text",className:"form-control",onChange:e=>this.setState({nomor_pb:e.target.value})}))),n.a.createElement("div",{className:"col-lg-12 text-right"},n.a.createElement("button",{className:"btn btn-primary",onClick:()=>this.getPermintaan()},"CARI DATA")))),n.a.createElement("div",{className:"col-lg-12"},n.a.createElement(b.a,{empty:!0,data:this.props.pengeluaran,columns:this.state.columns,keyField:"kode_barcode",selectRow:e,textEmpty:"Silahkan Isi Nomor PB diatas, dan klik tombol biru yang dibawahnya"})),n.a.createElement("br",null),n.a.createElement(p.a,{nextName:"Next",first:!0,nextStep:()=>this.nextStep(0)})),n.a.createElement("div",{className:this.state.step2},n.a.createElement("div",{className:"col-lg-12"},n.a.createElement(b.a,{empty:!0,data:this.props.pengeluaran_selected,columns:this.state.columns2,keyField:"kode_barcode",selectRow:e,textEmpty:"Silahkan Pilih Barang di Step 1"})),n.a.createElement("br",null),n.a.createElement(p.a,{nextName:"Simpan",prevStep:()=>this.prevStep(1),nextStep:()=>this.handleValidasi(),simpan:!0})))))}})},390:function(e,t,a){"use strict";var l=a(0),n=a.n(l),r=a(393),s=a.n(r),c=a(397),i=a.n(c),o=a(398),m=a.n(o),d=a(391),p=a.n(d);var u=function(e){return n.a.createElement("div",{className:"col-lg-12"},n.a.createElement("div",{className:"text-center"},n.a.createElement("img",{src:p.a,width:"250",height:"250",alt:"Empty"}),n.a.createElement("h5",null,e.text)))},g=a(112),h=a.n(g);const b=c.Search.SearchBar,E=c.CSVExport.ExportCSVButton;t.a=function(e){let t=e.textEmpty,a=e.handleClick,l=e.tambahData,r=e.expandRow,c=e.selectRow,o=e.exportCSV;return e.data?n.a.createElement(i.a,{keyField:e.keyField,data:e.data||[],columns:e.columns,search:!0},e=>n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-6"},n.a.createElement("div",{className:"text-left"},n.a.createElement(b,e.searchProps))),n.a.createElement("div",{className:"col-6"},n.a.createElement("div",{className:"text-right"},l&&n.a.createElement("button",{onClick:a,className:"btn btn-primary",type:"button"},"Tambah Data",n.a.createElement("i",{className:"fa fa-plus ml-3"})))),n.a.createElement("hr",null),n.a.createElement("div",{className:"col-12"},n.a.createElement(s.a,Object.assign({pagination:m()(),selectRow:c,expandRow:r},e.baseProps,{noDataIndication:n.a.createElement(u,{text:t||"Tidak Ada Data"})})),n.a.createElement("br",null),o&&n.a.createElement(E,e.csvProps,"Export CSV!!")))):e.empty?n.a.createElement(i.a,{keyField:e.keyField,data:e.data||[],columns:e.columns,search:!0},e=>n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-6"},n.a.createElement("div",{className:"text-left"},n.a.createElement(b,e.searchProps))),n.a.createElement("div",{className:"col-6"},n.a.createElement("div",{className:"text-right"},l&&n.a.createElement("button",{onClick:a,className:"btn btn-primary",type:"button"},"Tambah Data",n.a.createElement("i",{className:"fa fa-plus ml-3"})))),n.a.createElement("hr",null),n.a.createElement("div",{className:"col-12"},n.a.createElement(s.a,Object.assign({pagination:m()()},e.baseProps,{noDataIndication:n.a.createElement(u,{text:t||"Tidak Ada Data"})})),n.a.createElement("br",null),e.CSVExport&&n.a.createElement(E,e.csvProps,"Export CSV!!")))):n.a.createElement(h.a,{width:"100%",height:250})}},391:function(e,t,a){e.exports=a.p+"static/media/empty.02c14787.svg"},415:function(e,t,a){"use strict";var l=a(83);a(172);t.a=((e="",t="",a="",n="",r="",s="",c="",i="",o="",m="",d="",p=[],u="",g,h,b)=>{const E=new l.default;E.autoTable(p,g,{foot:h,startY:40,theme:"plain",bodyStyles:{lineWidth:.02,lineColor:"#000"},headStyles:{lineWidth:.02,lineColor:"#000",fillColor:[187,187,187]}});let k=E.lastAutoTable.finalY+10;E.text(u,14,15),E.setFontSize(10),E.text("".concat(e,"\t: ").concat(t),14,25),E.text("".concat(a,"\t: ").concat(n),120,25),E.text("".concat(r,"\t: ").concat(s),14,30),E.text("".concat(c,"\t: ").concat(i),120,30),b?(E.text("Mengetahui",27,k+5),E.text("(.................................)",20,k+25),E.text("Penerima",140,k+5),E.text("(.................................)",130,k+25)):(E.text("User\t: ".concat(o),14,k+10),E.text("Cetak\t: ".concat(m),14,k+16),E.text("Valid\t: ".concat(d),14,k+22));var N="<embed width='100%' height='100%' src='"+E.output("datauristring")+"'/>",x=window.open();x.document.open(),x.document.write(N),x.document.close()})},482:function(e,t,a){"use strict";var l=a(0),n=a.n(l);t.a=class extends l.Component{render(){return n.a.createElement("div",{className:"col-lg-12 mt-3 mb-3"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-6"},n.a.createElement("div",{className:"text-left"},n.a.createElement("button",{type:"button",className:this.props.first?"btn btn-warning d-none":"btn btn-warning",onClick:this.props.prevStep},n.a.createElement("i",{className:"fa fa-chevron-left mr-3"}),"Back"))),n.a.createElement("div",{className:"col-lg-6"},n.a.createElement("div",{className:"text-right"},n.a.createElement("button",{type:this.props.simpan?"submit":"button",className:this.props.last?"btn btn-warning d-none":"btn btn-warning",onClick:this.props.nextStep},this.props.simpan?n.a.createElement(n.a.Fragment,null,"Simpan ",n.a.createElement("i",{className:"fa fa-paper-plane ml-3"})):n.a.createElement(n.a.Fragment,null,"Next ",n.a.createElement("i",{className:"fa fa-chevron-right ml-3"})))))))}}}}]);
//# sourceMappingURL=42.6fe04281.chunk.js.map