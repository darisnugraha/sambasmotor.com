(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{1049:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),c=t(5),s=t(67),r=t(388),m=t(393),o=t.n(m),i=t(160),d=t(161),p=t(44);class u extends l.Component{constructor(e){super(e),this.state={columns:[{dataField:"kode_barcode",text:"Kode Barcode"},{dataField:"nama_barang",text:"Nama Barang"},{dataField:"qty",text:"Qty"},{dataField:"satuan",text:"Satuan"},{dataField:"harga",text:"Harga"},{dataField:"disc",text:"Discoun"},{dataField:"ppn",text:"PPN"},{dataField:"sub_total",text:"Sub Total"}]}}render(){return n.a.createElement("form",{onSubmit:this.props.handleSubmit},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-3"},n.a.createElement(i.a,{name:"tanggal",component:p.c,type:"text",label:"Tanggal",placeholder:"Masukan Tanggal"})),n.a.createElement("div",{className:"col-lg-3"},n.a.createElement(i.a,{name:"no_faktur",component:p.c,type:"text",label:"No Faktur",placeholder:"Masukan No Faktur"})),n.a.createElement("div",{className:"col-lg-3"},n.a.createElement("label",{className:"mb-4"},"Jenis Penjualan"),n.a.createElement("div",null,n.a.createElement("label",null,n.a.createElement(i.a,{name:"jenis_penjualan",component:"input",type:"radio",value:"member",className:"mr-3"}),"Member"),n.a.createElement("label",{className:"ml-3"},n.a.createElement(i.a,{name:"jenis_penjualan",component:"input",type:"radio",value:"reguler",className:"mr-3"}),"Reguler"))),n.a.createElement("div",{className:"col-lg-4"},n.a.createElement(i.a,{name:"pelanggan",component:p.f,type:"text",label:"Pelanggan",placeholder:"Masukan Pelanggan"})),n.a.createElement("div",{className:"col-lg-4"},n.a.createElement(i.a,{name:"alamat",component:p.c,type:"text",label:"Alamat",placeholder:"Masukan Alamat"})),n.a.createElement("div",{className:"col-lg-4"},n.a.createElement(i.a,{name:"telepon",component:p.c,type:"text",label:"Telepon",placeholder:"Masukan Telepon"})),n.a.createElement("div",{className:"col-lg-12"},n.a.createElement("div",{className:"row justify-content-center"},n.a.createElement("div",{className:"col-lg-6 text-center"},n.a.createElement(i.a,{name:"kode_barcode",component:p.c,type:"text",label:"Kode Barcode",placeholder:"Masukan Kode Barcode"})),n.a.createElement("div",{className:"col-lg-2"},n.a.createElement("label",{htmlFor:""},"."),n.a.createElement("button",{className:"btn btn-block btn-primary",type:"button",onClick:this.props.setCariBarang},"Cari Barang ",n.a.createElement("i",{className:"fa fa-search ml-3"}))))),n.a.createElement("div",{className:"col-lg-12 mt-3"},n.a.createElement(o.a,{bootstrap4:!0,keyField:"id",data:[],columns:this.state.columns,noDataIndication:"Belum Ada Data"})),n.a.createElement("div",{className:"col-lg-12"},n.a.createElement("div",{className:"text-right"},n.a.createElement("button",{className:"btn btn-primary",onClick:this.props.setBayar},"Bayar ",n.a.createElement("i",{className:"fa fa-money-bill-alt ml-3"}))))))}}var h=u=Object(d.a)({form:"HeadReturnPenjualan",enableReinitialize:!0})(u);class E extends l.Component{constructor(e){super(e),this.state={}}render(){return n.a.createElement("form",null,n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-6"},n.a.createElement("div",{className:"col-lg-12"},n.a.createElement(i.a,{name:"nama_barang",component:p.d,type:"text",label:"Nama Barang",placeholder:"Masukan Nama Barang"})),n.a.createElement("div",{className:"col-lg-12"},n.a.createElement(i.a,{name:"merk",component:p.d,type:"text",label:"Merk",placeholder:"Masukan Merk"})),n.a.createElement("div",{className:"col-lg-12"},n.a.createElement(i.a,{name:"kwalitas",component:p.d,type:"text",label:"Kwalitas",placeholder:"Masukan Kwalitas"})),n.a.createElement("div",{className:"col-lg-12"},n.a.createElement(i.a,{name:"ukuran",component:p.d,type:"text",label:"Ukuran",placeholder:"Masukan Ukuran"})),n.a.createElement("div",{className:"col-lg-12"},n.a.createElement(i.a,{name:"satuan",component:p.d,type:"text",label:"Satuan",placeholder:"Masukan Satuan"}))),n.a.createElement("div",{className:"col-lg-6"},n.a.createElement("div",{className:"col-lg-12"},n.a.createElement(i.a,{name:"harga_satuan",component:p.d,type:"text",label:"Harga Satuan",placeholder:"Masukan Harga Satuan"})),n.a.createElement("div",{className:"col-lg-12"},n.a.createElement(i.a,{name:"jumlah",component:p.d,type:"text",label:"Jumlah",placeholder:"Masukan Jumlah"})),n.a.createElement("div",{className:"col-lg-12"},n.a.createElement(i.a,{name:"sub_total",component:p.d,type:"text",label:"Sub Total",placeholder:"Masukan Sub Total"})),n.a.createElement("div",{className:"col-lg-12"},n.a.createElement(i.a,{name:"discount",component:p.d,type:"text",label:"Discount",placeholder:"Masukan Discount"})),n.a.createElement("div",{className:"col-lg-12"},n.a.createElement(i.a,{name:"grand_total",component:p.d,type:"text",label:"Grand Total",placeholder:"Masukan Grand Total"}))),n.a.createElement("div",{className:"col-lg-12 "},n.a.createElement("div",{className:"col-lg-4"},n.a.createElement(i.a,{name:"tukar",component:p.d,type:"text",label:"Tukar",placeholder:"Masukan Tukar"})),n.a.createElement("div",{className:"col-lg-4"},n.a.createElement(i.a,{name:"total",component:p.d,type:"text",label:"Total",placeholder:"Masukan Total"})))))}}var b=E=Object(d.a)({form:"ModalDetailReturnPenjualan",enableReinitialize:!0})(E);class g extends l.Component{constructor(e){super(e),this.state={columns:[{dataField:"kode_barang",text:"Kode Barang"},{dataField:"nama_barang",text:"Nama Barang"},{dataField:"merk",text:"Merk"},{dataField:"satuan",text:"Satuan"},{dataField:"harga",text:"Harga"},{dataField:"action",text:"Action",csvExport:!1,headerClasses:"text-center",formatter:(e,a)=>(this.setState({}),n.a.createElement("div",{className:"row text-center"},n.a.createElement("div",{className:"col-12"},n.a.createElement("button",{className:"btn btn-teal mr-3"},"Pilih",n.a.createElement("i",{className:"fa fa-cart-arrow-down ml-2"})),n.a.createElement("button",{className:"btn btn-warning mr-3",onClick:this.props.showDetail},"Detail",n.a.createElement("i",{className:"fa fa-eye ml-2"})))))}]}}render(){return n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-12"},n.a.createElement("div",{className:"text-left"},n.a.createElement("button",{className:"btn btn-black",onClick:this.props.setBack},n.a.createElement("i",{className:"fa fa-chevron-left mr-3"})," Back"))),n.a.createElement("div",{className:"col-lg-2"}," "),n.a.createElement("div",{className:"col-lg-4"},n.a.createElement("label",{className:"mb-3"},"Jenis Pecarian"),n.a.createElement("div",null,n.a.createElement("label",null,n.a.createElement(i.a,{name:"jenis_pencarian",component:"input",type:"radio",value:"kode_barang",className:"mr-3"}),"Kode Barang"),n.a.createElement("label",{className:"ml-3"},n.a.createElement(i.a,{name:"jenis_pencarian",component:"input",type:"radio",value:"nama_barang",className:"mr-3"}),"Nama Barang"))),n.a.createElement("div",{className:"col-lg-4"},n.a.createElement(i.a,{name:"search_value",component:p.f,type:"text",label:"Pencarian",placeholder:"Masukan Pencarian"})),n.a.createElement("div",{className:"col-lg-12"},n.a.createElement(o.a,{bootstrap4:!0,keyField:"id",data:[{kode_barang:"BR001",nama_barang:"OIL YAMALUBE",merk:"YAMAHA",satuan:"PCS",harga:125e3}],columns:this.state.columns,noDataIndication:"Belum ada Data"})))}}var v=g=Object(d.a)({form:"ModalReturnPenjualan",enableReinitialize:!0})(g),N=t(447),k=t(6),y=t(33),C=t(422);a.default=Object(y.b)()(class extends l.Component{constructor(e){super(e),this.state={cari_barang:!1,bayar:!1,columnsListBayar:[{dataField:"jenis_bayar",text:"Jenis Bayar"},{dataField:"nama_bank",text:"Bank"},{dataField:"jumlah",text:"Jumlah"}],dataListBayar:[{jenis_bayar:"CREDIT CARD",bank:"BCA",jumlah:1e8}]}}handleSubmit(e){console.log(e)}setCariBarang(){this.setState({cari_barang:!0})}setBack(){this.setState({cari_barang:!1})}setBayar(){this.setState({bayar:!0})}showCC(){this.props.dispatch(Object(k.Wb)()),this.setState({jenisModal:"CC"})}handleSimpanCC(e){console.log(e)}showDetail(){this.props.dispatch(Object(k.Wb)()),this.setState({jenisModal:"DETAIL"})}render(){return n.a.createElement("div",null,n.a.createElement("ol",{className:"breadcrumb float-xl-right"},n.a.createElement("li",{className:"breadcrumb-item"},n.a.createElement(c.b,{to:"#"},"Transaksi")),n.a.createElement("li",{className:"breadcrumb-item active"},"Return Penjualan")),n.a.createElement("h1",{className:"page-header"},"Return Penjualan "),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-12"},n.a.createElement(s.a,null,n.a.createElement(s.c,null,"Return Penjualan"),n.a.createElement(s.b,null,n.a.createElement("br",null),this.state.cari_barang?n.a.createElement(v,{setBack:()=>this.setBack(),showDetail:()=>this.showDetail()}):this.state.bayar?n.a.createElement(N.a,{showCC:()=>this.showCC(),columns:this.state.columnsListBayar,data:this.state.dataListBayar,backMenu:()=>this.setState({bayar:!1})}):n.a.createElement(h,{onSubmit:e=>this.handleSubmit(e),setCariBarang:()=>this.setCariBarang(),setBayar:()=>this.setBayar()}),n.a.createElement("br",null))),n.a.createElement(r.a,{title:"DETAIL"===this.state.jenisModal?"Detail Barang":"CC"===this.state.jenisModal?"Credit Card":null,content:"DETAIL"===this.state.jenisModal?n.a.createElement(b,null):"CC"===this.state.jenisModal?n.a.createElement(C.a,{onSubmit:e=>this.handleSimpanCC(e)}):null}))))}})},388:function(e,a,t){"use strict";var l=t(0),n=t.n(l),c=t(33),s=t(402),r=t(400),m=t(401),o=t(6);a.a=Object(c.b)(e=>({isOpen:e.datamaster.modalDialog}),null)(class extends l.Component{constructor(e){super(e),this.state={}}render(){return n.a.createElement(s.a,{backdrop:"static",keyboard:!1,isOpen:this.props.isOpen,toggle:()=>this.props.dispatch(Object(o.Tb)()),size:this.props.size||"xl"},n.a.createElement(r.a,{toggle:()=>this.props.dispatch(Object(o.Tb)())},this.props.title),n.a.createElement(m.a,null,this.props.content))}})},422:function(e,a,t){"use strict";var l=t(0),n=t.n(l),c=t(448),s=(t(449),t(33)),r=t(160),m=t(161),o=t(173),i=t(399),d=t(10),p=t(44);const u=Object(i.createNumberMask)({prefix:"Rp. ",locale:"id-ID"});class h extends l.Component{constructor(e){super(e),this.handleInputFocus=(e=>{this.setState({focus:e.target.name})}),this.handleInputChange=(e=>{const a=e.target,t=a.name,l=a.value;this.setState({[t]:l}),this.props.change(t,l)}),this.state={cvc:"",expiry:"",focus:"",name:"",no_card:"",nav1:"nav-item nav-link active",nav2:"nav-item nav-link",nav3:"nav-item nav-link",listBank:[]}}componentDidMount(){Object(d.b)("bank/get/all").then(e=>this.setState({listBank:e&&e.data.map(e=>{return{value:e.no_ac,name:"".concat(e.atas_nama," / ").concat(e.nama_bank)}})}))}setTotal(){this.props.change("fee_card",this.props.fee_card),this.props.change("total_card",this.props.total)}render(){return n.a.createElement("div",{className:"col-lg-12"},n.a.createElement(c.a,{cvc:this.state.cvc,expiry:this.state.expiry,focused:this.state.focus,name:this.state.name,number:this.state.no_card}),n.a.createElement("form",{onSubmit:this.props.handleSubmit,className:"mt-3"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-12"},n.a.createElement("nav",{className:"nav nav-pills nav-fill"},n.a.createElement("button",{className:this.state.nav1,onClick:()=>{this.setState({nav1:"nav-item nav-link active",nav2:"nav-item nav-link",nav3:"nav-item nav-link"}),this.props.change("jenis_trx","DEBIT")}},"DEBIT"),n.a.createElement("button",{className:this.state.nav2,onClick:()=>{this.setState({nav1:"nav-item nav-link ",nav2:"nav-item nav-link active",nav3:"nav-item nav-link"}),this.props.change("jenis_trx","CARD")}},"CREDIT"),n.a.createElement("button",{className:this.state.nav3,onClick:()=>{this.setState({nav1:"nav-item nav-link ",nav2:"nav-item nav-link",nav3:"nav-item nav-link active"}),this.props.change("jenis_trx","TRANSFER")}},"TRANSFER"))),n.a.createElement("div",{className:"col-lg-12 mb-2 mt-2"},n.a.createElement("h4",null,"Data Kartu")),n.a.createElement("div",{className:"col-lg-3"},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:""},"No.Card"),n.a.createElement("input",{type:"tel",className:"form-control",name:"no_card",placeholder:"Card Number",onChange:this.handleInputChange,onFocus:this.handleInputFocus}))),n.a.createElement("div",{className:"col-lg-3 d-none"},n.a.createElement(r.a,{name:"no_card",component:p.c,type:"telp",label:"No.Card",placeholder:"Masukan No.Card",onChange:this.handleInputChange,onFocus:this.handleInputFocus})),n.a.createElement("div",{className:"col-lg-3"},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:""},"Valid Until"),n.a.createElement("input",{type:"tel",className:"form-control",name:"expiry",placeholder:"MM/YY",onChange:this.handleInputChange,onFocus:this.handleInputFocus}))),n.a.createElement("div",{className:"col-lg-3 d-none"},n.a.createElement(r.a,{name:"expiry",component:p.c,type:"telp",label:"Valid until ( MM/YY )",placeholder:"Masukan Valid until ( MM/YY )",onChange:this.handleInputChange,onFocus:this.handleInputFocus})),n.a.createElement("div",{className:"col-lg-3"},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:""},"Nama Pemilik"),n.a.createElement("input",{type:"tel",className:"form-control",name:"name",placeholder:"Nama Pemilik",onChange:this.handleInputChange,onFocus:this.handleInputFocus}))),n.a.createElement("div",{className:"col-lg-3 d-none"},n.a.createElement(r.a,{name:"name",component:p.c,type:"text",label:"Nama Pemilik",placeholder:"Masukan Nama Pemilik",onChange:this.handleInputChange,onFocus:this.handleInputFocus})),n.a.createElement("div",{className:"col-lg-3"},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:""},"CVC / CVV"),n.a.createElement("input",{type:"tel",className:"form-control",name:"cvc",placeholder:"Nama Pemilik",onChange:this.handleInputChange,onFocus:this.handleInputFocus}))),n.a.createElement("div",{className:"col-lg-3 d-none"},n.a.createElement(r.a,{name:"cvc",component:p.c,type:"text",label:"Nama Pemilik",placeholder:"Masukan Nama Pemilik",onChange:this.handleInputChange,onFocus:this.handleInputFocus})),n.a.createElement("div",{className:"col-lg-12 mb-2"},n.a.createElement("h4",null,"Data Pemilik")),n.a.createElement("div",{className:"col-lg-3"},n.a.createElement(r.a,{name:"no_ktp",component:p.c,type:"number",label:"Nomor KTP",placeholder:"Masukan Nomor KTP"})),n.a.createElement("div",{className:"col-lg-3"},n.a.createElement(r.a,{name:"alamat_ktp",component:p.c,type:"text",label:"Alamat KTP",placeholder:"Masukan Alamat KTP"})),n.a.createElement("div",{className:"col-lg-3 d-none"},n.a.createElement(r.a,{name:"jenis_trx",component:p.c,type:"text",label:"Jenis Transaksi",placeholder:"Masukan Jenis Transaksi"})),n.a.createElement("div",{className:"col-lg-3"},n.a.createElement(r.a,{name:"kota",component:p.c,type:"text",label:"Kota",placeholder:"Masukan Kota"})),n.a.createElement("div",{className:"col-lg-3"},n.a.createElement(r.a,{name:"handphone",component:p.c,type:"telp",label:"Handphone",placeholder:"Masukan Handphone"})),n.a.createElement("div",{className:"col-lg-12 mb-2"},n.a.createElement("h4",null,"Data Harga")),n.a.createElement("div",{className:"col-lg-3"},n.a.createElement(r.a,{name:"bank",component:p.e,options:this.state.listBank,label:"Bank",placeholder:"Masukan Bank"})),n.a.createElement("div",{className:"col-lg-3"},n.a.createElement(r.a,Object.assign({name:"grand_total",component:p.c,type:"telp",label:"Grand Total",placeholder:"Masukan Grand Total"},u))),n.a.createElement("div",{className:"col-lg-1"},n.a.createElement(r.a,{name:"fee_card_percent",component:p.c,type:"number",label:"% Card",placeholder:"0",onChange:this.setTotal()})),n.a.createElement("div",{className:"col-lg-2"},n.a.createElement(r.a,Object.assign({name:"fee_card",component:p.c,type:"telp",label:"Fee Card",placeholder:"0"},u))),n.a.createElement("div",{className:"col-lg-3"},n.a.createElement(r.a,Object.assign({name:"total_card",component:p.c,type:"telp",label:"Card + Fee",placeholder:"Masukan Card + Fee"},u))),n.a.createElement("div",{className:"col-lg-12"},n.a.createElement("div",{className:"text-right"},n.a.createElement("button",{className:"btn btn-primary"},"Simpan ",n.a.createElement("i",{className:"fa fa-paper-plane"})))))))}}h=Object(m.a)({form:"ModalCC",enableReinitialize:!0})(h);const E=Object(o.a)("ModalCC");a.a=Object(s.b)(e=>{const a=E(e,"grand_total","fee_card_percent"),t=a.grand_total,l=a.fee_card_percent;return{fee_card:parseFloat(t||0)*(parseFloat(l||0)/100),total:parseFloat(t||0)+parseFloat(t||0)*(parseFloat(l||0)/100)}})(h)},447:function(e,a,t){"use strict";var l=t(0),n=t.n(l),c=t(393),s=t.n(c),r=t(33),m=t(160),o=t(161),i=t(44);class d extends l.Component{constructor(e){super(e),this.state={}}render(){return n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-12 mb-3"},n.a.createElement("div",{className:"col-lg-12"},n.a.createElement("div",{className:"text-left"},n.a.createElement("button",{className:"btn btn-black text-white",onClick:this.props.backMenu},n.a.createElement("i",{className:"fa fa-chevron-left mr-3"})," Back")))),n.a.createElement("div",{className:"col-lg-6"},n.a.createElement("div",{className:"col-lg-12"},n.a.createElement("h5",null,"Total Service")),n.a.createElement("div",{className:"col-lg-12"},n.a.createElement(m.a,{name:"sub_total_service",component:i.d,type:"text",label:"Sub Total",placeholder:"Masukan Sub Total"})),n.a.createElement("div",{className:"col-lg-12"},n.a.createElement(m.a,{name:"discount_service",component:i.d,type:"text",label:"Discount",placeholder:"Masukan Discount"})),n.a.createElement("div",{className:"col-lg-12"},n.a.createElement(m.a,{name:"total_service",component:i.d,type:"text",label:"Total",placeholder:"Masukan Total"}))),n.a.createElement("div",{className:"col-lg-6"},n.a.createElement("div",{className:"col-lg-12"},n.a.createElement("h5",null,"Total Sparepart")),n.a.createElement("div",{className:"col-lg-12"},n.a.createElement(m.a,{name:"sub_total_sparepart",component:i.d,type:"text",label:"Sub Total",placeholder:"Masukan Sub Total"})),n.a.createElement("div",{className:"col-lg-12"},n.a.createElement(m.a,{name:"discount_sparepart",component:i.d,type:"text",label:"Sparepart",placeholder:"Masukan Sparepart"})),n.a.createElement("div",{className:"col-lg-12"},n.a.createElement(m.a,{name:"total_sparepart",component:i.d,type:"text",label:"Total",placeholder:"Masukan Total"}))),n.a.createElement("div",{className:"col-lg-12"},n.a.createElement("div",{className:"col-lg-12"},n.a.createElement(m.a,{name:"grand_total_all",component:i.c,type:"text",label:"Grand Total",placeholder:"Masukan Grand Total"})),n.a.createElement("div",{className:"col-lg-12"},n.a.createElement(m.a,{name:"bayar",component:i.c,type:"text",label:"Bayar",placeholder:"Masukan Bayar"})),n.a.createElement("div",{className:"col-lg-12"},n.a.createElement(m.a,{name:"kembali",component:i.c,type:"text",label:"Kembali",placeholder:"Masukan Kembali"}))),n.a.createElement("div",{className:"col-lg-12"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-4"},n.a.createElement("div",{className:"text-center"},n.a.createElement("button",{className:"btn btn-primary"},"Debit"))),n.a.createElement("div",{className:"col-lg-4"},n.a.createElement("div",{className:"text-center"},n.a.createElement("button",{className:"btn btn-primary",onClick:this.props.showCC},"Credit"))),n.a.createElement("div",{className:"col-lg-4"},n.a.createElement("div",{className:"text-center"},n.a.createElement("button",{className:"btn btn-primary"},"Transfer"))))),n.a.createElement("div",{className:"col-lg-12 mt-3"},n.a.createElement("div",{className:"col-lg-12"},n.a.createElement(s.a,{bootstrap4:!0,keyField:"id",data:this.props.data,columns:this.props.columns}))))}}d=Object(o.a)({form:"ModalBayarService",enableReinitialize:!0})(d),a.a=Object(r.b)()(d)}}]);
//# sourceMappingURL=57.c5dab345.chunk.js.map