(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{1070:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(5),c=t(33),s=t(67),o=t(160),i=t(161),m=t(24),p=t(10),d=t(52),h=t(44),u=t(389);class b extends n.Component{constructor(e){super(e),this.state={columns:[{dataField:"no_service_kirim",text:"Nomor"},{dataField:"tgl_service_kirim",text:"Tanggal Kirim"},{dataField:"nopol_kendaraan",text:"Nomor Polisi"},{dataField:"kode_supplier",text:"Supplier"},{dataField:"nama_customer",text:"Customer"},{dataField:"sub_total",text:"Sub Total"},{dataField:"diskon_rp",text:"Diskon"},{dataField:"grand_total",text:"Total"},{dataField:"action",text:"Action",csvExport:!1,headerClasses:"text-center",formatter:(e,a)=>{let t={grand_total:a.grand_total,no_bon:a.no_service_kirim};return l.a.createElement("div",{className:"row text-center"},l.a.createElement("div",{className:"col-12"},l.a.createElement("button",{onClick:()=>{this.props.showBayar(),this.props.dispatch(Object(m.B)(t))},className:"btn btn-primary mr-3"},"Simpan")))}}]}}getServiceLuar(){alert("ITS WORKED")}componentDidMount(){this.props.dispatch(Object(m.v)()),this.props.change("tanggal",Object(d.b)()),Object(p.b)("terima-service-luar/generate/no-trx").then(e=>this.props.change("no_service_terima",e&&e.data[0].no_service_terima))}render(){return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-4"},l.a.createElement(o.a,{name:"no_service_kirim",component:h.f,type:"text",label:"Nomor Service Kirim",placeholder:"Masukan Nomor Service Kirim",handleClick:e=>this.getServiceLuar(e)})),l.a.createElement("div",{className:"col-lg-4 d-none"},l.a.createElement(o.a,{name:"no_service_terima",component:h.f,type:"text",label:"Nomor Service Kirim",placeholder:"Masukan Nomor Service Kirim",handleClick:e=>this.getServiceLuar(e),readOnly:!0})),l.a.createElement("div",{className:"col-lg-4"},l.a.createElement(o.a,{name:"tanggal",component:h.c,type:"date",label:"Tanggal",placeholder:"Masukan Tanggal"})),l.a.createElement("div",{className:"col-lg-4"}),l.a.createElement("div",{className:"col-lg-12"},l.a.createElement(u.a,{keyField:"nama_supplier",data:this.props.listkirimserviceluar||[],columns:this.state.columns,empty:!0,emptyText:"Silahkan Masukan Nomor Service dan klik cari"})))}}b=Object(i.a)({form:"HeadServiceLuar",enableReinitialize:!0})(b);var v=Object(c.b)(e=>({no_service_kirim:localStorage.getItem("terima_service_luar_nomor"),listkirimserviceluar:e.transaksi.listkirimserviceluar}))(b),g=t(388),E=t(173),_=t(397);const k=Object(_.createNumberMask)({prefix:"Rp. ",locale:"id-ID"});class N extends n.Component{constructor(e){super(e),this.state={columnsListBayar:[{dataField:"jenis_trx",text:"Jenis Bayar"},{dataField:"no_card",text:"Bank"},{dataField:"nama_pemilik",text:"Nama Pemilik"},{dataField:"fee_rp",text:"Fee Card"},{dataField:"bayar_rp",text:"Bayar",formatter:e=>"Rp. ".concat(parseFloat(e).toLocaleString("id-ID"))}]}}componentDidMount(){this.props.change("grand_total_all",this.props.total)}setBayar(e){this.setState({bayar:e.target.value}),localStorage.setItem("bayar_rp_rongsok",e.target.value)}render(){return l.a.createElement("form",{onSubmit:this.props.handleSubmit},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-12 mb-3"},l.a.createElement("div",{className:"col-lg-12"},l.a.createElement("div",{className:"text-left"},l.a.createElement("button",{className:"btn btn-black text-white",onClick:this.props.setBack},l.a.createElement("i",{className:"fa fa-chevron-left mr-3"})," Back")))),l.a.createElement("div",{className:"col-lg-12"},l.a.createElement("div",{className:"col-lg-12"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-6 text-center"},l.a.createElement("h3",null,"Grand Total"),l.a.createElement("p",{style:{fontSize:32,fontWeight:700}},parseFloat(this.props.grand_total_all).toLocaleString("id-ID")),l.a.createElement("h3",null,"Margin"),l.a.createElement("div",{className:"col-lg-12"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-3"}),l.a.createElement("div",{className:"col-lg-6 text-center"},l.a.createElement(o.a,Object.assign({name:"margin",component:h.c,type:"telp",placeholder:"Masukan Bayar",className:" form-control-lg",onChange:e=>this.setBayar(e)},k))))),l.a.createElement("h3",null,"Bayar"),l.a.createElement("div",{className:"col-lg-12"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-3"}),l.a.createElement("div",{className:"col-lg-6 text-center"},l.a.createElement(o.a,Object.assign({name:"bayar",component:h.c,type:"telp",placeholder:"Masukan Bayar",className:" form-control-lg",onChange:e=>this.setBayar(e)},k))))),l.a.createElement("h3",null,"Kembali"),l.a.createElement("p",{style:{fontSize:35,fontWeight:700}},parseFloat(this.props.kembali).toLocaleString("id-ID"))),l.a.createElement("div",{className:"col-lg-6"},l.a.createElement("div",{className:"col-lg-12"},l.a.createElement(u.a,{keyField:"no_ac",data:this.props.listPembayaran_temp||[],columns:this.state.columnsListBayar,tambahData:!0,handleClick:this.props.showCC})))))),l.a.createElement("div",{className:"text-center col-lg-6"},l.a.createElement("button",{className:"btn-lg btn-primary btn-block",disabled:this.props.onSend},this.props.onSend?l.a.createElement("i",{className:"fas fa-spinner fa-spin"}):null,"BAYAR ",l.a.createElement("i",{className:"fa fa-money-bill-alt ml-3"})))))}}N=Object(i.a)({form:"ModalTerimaServiceLuar",enableReinitialize:!0})(N);const y=Object(E.a)("ModalTerimaServiceLuar");var S=Object(c.b)(e=>(localStorage.setItem("bayar_rp_rongsok",y(e,"bayar")||0),{grand_total_all:e.transaksi.total_bayar+(y(e,"margin")||0),listPembayaran_temp:e.transaksi.listpembayaran_temp,sum_pembayaran:e.transaksi.sum_pembayaran,total_bayar:e.transaksi.total_bayar,kembali:(y(e,"bayar")||0)-e.transaksi.grand_total-e.transaksi.sum_pembayaran-(y(e,"margin")||0),onSend:e.datamaster.onSend}))(N),x=t(6),f=t(423),C=t(66);a.default=Object(c.b)(e=>({kunci_temp:e.stocking.kunci_temp,listkirimserviceluar:e.transaksi.listkirimserviceluar,noFaktur:e.datamaster.noFaktur,grand_total:e.transaksi.grand_total,no_bon_kirim:e.transaksi.no_bon_kirim}),null)(class extends l.a.Component{constructor(e){super(e),this.state={isEdit:!1,modalDialog:!1,isLoading:!1,bayar:!1}}componentDidMount(){this.props.dispatch(Object(x.Ab)()),this.props.dispatch(Object(m.w)()),Object(p.b)("terima-service-luar/generate/no-trx").then(e=>localStorage.setItem("terima_service_luar_nomor",e&&e.data[0].no_service_terima)),this.props.dispatch(Object(x.Ab)())}handleSubmit(e){console.log(e)}showCC(){this.props.dispatch(Object(x.Wb)())}showBayar(e){this.setState({bayar:!0,grand_total:e})}setBack(){this.setState({bayar:!1})}handleSimpanCC(e){let a={no_ref:this.props.noFaktur,no_card:"".concat(e.no_card),bayar_rp:e.grand_total,fee_rp:e.fee_card,no_ac:"".concat(e.bank),valid_until:e.expiry,nama_pemilik:e.name,no_ktp:e.no_ktp,alamat_ktp:e.alamat_ktp,kota_ktp:e.kota,telepon_ktp:e.handphone,jenis_trx:e.jenis_trx||"DEBIT"},t=JSON.parse(localStorage.getItem("listPembayaran_temp"))||[];t.push(a),localStorage.setItem("listPembayaran_temp",JSON.stringify(t)),Object(h.h)("Berhasil Menambahkan Data"),this.props.dispatch(Object(m.w)()),localStorage.removeItem("noFaktur"),this.props.dispatch(Object(x.Ab)())}sendData(e){let a={no_service_terima:localStorage.getItem("terima_service_luar_nomor"),tanggal:Object(d.b)(),no_bon:this.props.no_bon_kirim,margin_rp:e.margin,total_bayar:this.props.grand_total,cash_rp:e.bayar,no_ref_cash:this.props.noFaktur,status_masuk_piutang:e.piutang||!1,detail_non_tunai:"[]"===localStorage.getItem("listPembayaran_temp")?[{no_ref:"-",no_ac:"-",bayar_rp:0,fee_rp:0,no_card:"-",valid_until:"-",nama_pemilik:"-",no_ktp:"-",alamat_ktp:"-",kota_ktp:"-",telepon_ktp:"-",jenis_trx:"-"}]:null!==localStorage.getItem("listPembayaran_temp")?JSON.parse(localStorage.getItem("listPembayaran_temp")):[{no_ref:"-",no_ac:"-",bayar_rp:0,fee_rp:0,no_card:"-",valid_until:"-",nama_pemilik:"-",no_ktp:"-",alamat_ktp:"-",kota_ktp:"-",telepon_ktp:"-",jenis_trx:"-"}]};console.log(JSON.stringify(a)),Object(p.c)("terima-service-luar/post-transaksi",a).then(()=>Object(h.b)("Terima Service Berhasil")).then(()=>Object(d.c)(["noFaktur","listPembayaran_temp","terima_service_luar_nomor"])).then(()=>this.props.dispatch(Object(m.v)())).then(()=>this.props.dispatch(Object(C.a)("HeadServiceLuar"))).then(()=>this.props.dispatch(Object(x.Ab)())).then(()=>this.setBack()).then(()=>this.props.dispatch(Object(C.a)("ModalTerimaServiceLuar"))).catch(e=>Object(h.g)("Terima Service Gagal, Error : ".concat(e.response.data)))}render(){return l.a.createElement("div",null,l.a.createElement("ol",{className:"breadcrumb float-xl-right"},l.a.createElement("li",{className:"breadcrumb-item"},l.a.createElement(r.b,{to:"#"},"Transaksi")),l.a.createElement("li",{className:"breadcrumb-item active"},"Terima Service Luar")),l.a.createElement("h1",{className:"page-header"},"Terima Service Luar "),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-12"},l.a.createElement(s.a,null,l.a.createElement(s.c,null,"Terima Service Luar"),l.a.createElement(s.b,null,l.a.createElement("br",null),l.a.createElement("div",{className:"col-lg-12"},this.state.bayar?l.a.createElement(S,{showCC:()=>this.showCC(),setBack:()=>this.setBack(),onSubmit:e=>this.sendData(e)}):l.a.createElement(v,{showBayar:()=>this.showBayar()})),l.a.createElement("br",null),l.a.createElement("div",{className:"col-lg-12"}))),l.a.createElement(g.a,{title:"Simpan Data Harga",content:l.a.createElement(f.a,{onSubmit:e=>this.handleSimpanCC(e)})}))))}})},388:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(33),c=t(403),s=t(401),o=t(402),i=t(6);a.a=Object(r.b)(e=>({isOpen:e.datamaster.modalDialog}),null)(class extends n.Component{constructor(e){super(e),this.state={}}render(){return l.a.createElement(c.a,{backdrop:"static",keyboard:!1,isOpen:this.props.isOpen,toggle:()=>this.props.dispatch(Object(i.Tb)()),size:this.props.size||"xl"},l.a.createElement(s.a,{toggle:()=>this.props.dispatch(Object(i.Tb)())},this.props.title),l.a.createElement(o.a,null,this.props.content))}})},389:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(395),c=t.n(r),s=t(398),o=t.n(s),i=t(399),m=t.n(i),p=t(390),d=t(112),h=t.n(d);const u=s.Search.SearchBar,b=s.CSVExport.ExportCSVButton;a.a=function(e){let a=e.textEmpty,t=e.handleClick,n=e.tambahData,r=e.expandRow,s=e.selectRow,i=e.exportCSV;return e.data?l.a.createElement(o.a,{keyField:e.keyField,data:e.data||[],columns:e.columns,search:!0},e=>l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-6"},l.a.createElement("div",{className:"text-left"},l.a.createElement(u,e.searchProps))),l.a.createElement("div",{className:"col-6"},l.a.createElement("div",{className:"text-right"},n&&l.a.createElement("button",{onClick:t,className:"btn btn-primary",type:"button"},"Tambah Data",l.a.createElement("i",{className:"fa fa-plus ml-3"})))),l.a.createElement("hr",null),l.a.createElement("div",{className:"col-12"},l.a.createElement(c.a,Object.assign({pagination:m()(),selectRow:s,expandRow:r},e.baseProps,{striped:!0,noDataIndication:l.a.createElement(p.a,{text:a||"Tidak Ada Data"})})),l.a.createElement("br",null),i&&l.a.createElement(b,e.csvProps,"Export CSV!!")))):e.empty?l.a.createElement(o.a,{keyField:e.keyField,data:e.data||[],columns:e.columns,search:!0},e=>l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-6"},l.a.createElement("div",{className:"text-left"},l.a.createElement(u,e.searchProps))),l.a.createElement("div",{className:"col-6"},l.a.createElement("div",{className:"text-right"},n&&l.a.createElement("button",{onClick:t,className:"btn btn-primary",type:"button"},"Tambah Data",l.a.createElement("i",{className:"fa fa-plus ml-3"})))),l.a.createElement("hr",null),l.a.createElement("div",{className:"col-12"},l.a.createElement(c.a,Object.assign({pagination:m()()},e.baseProps,{noDataIndication:l.a.createElement(p.a,{text:a||"Tidak Ada Data"})})),l.a.createElement("br",null),e.CSVExport&&l.a.createElement(b,e.csvProps,"Export CSV!!")))):l.a.createElement(h.a,{width:"100%",height:250})}},390:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(391),c=t.n(r);a.a=function(e){return l.a.createElement("div",{className:"col-lg-12"},l.a.createElement("div",{className:"text-center"},l.a.createElement("img",{src:c.a,width:"250",height:"250",alt:"Empty"}),l.a.createElement("h5",null,e.text)))}},391:function(e,a,t){e.exports=t.p+"static/media/empty.02c14787.svg"},423:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(451),c=(t(452),t(33)),s=t(160),o=t(161),i=t(173),m=t(397),p=t(10),d=t(44);const h=Object(m.createNumberMask)({prefix:"Rp. ",locale:"id-ID"});class u extends n.Component{constructor(e){super(e),this.handleInputFocus=(e=>{this.setState({focus:e.target.name})}),this.handleInputChange=(e=>{const a=e.target,t=a.name,n=a.value;this.setState({[t]:n}),this.props.change(t,n)}),this.state={cvc:"",expiry:"",focus:"",name:"",no_card:"",nav1:"nav-item nav-link active",nav2:"nav-item nav-link",nav3:"nav-item nav-link",listBank:[]}}componentDidMount(){Object(p.b)("bank/get/all").then(e=>this.setState({listBank:e&&e.data.map(e=>{return{value:e.no_ac,name:"".concat(e.atas_nama," / ").concat(e.nama_bank)}})}))}setTotal(){this.props.change("fee_card",this.props.fee_card),this.props.change("total_card",this.props.total)}render(){return l.a.createElement("div",{className:"col-lg-12"},l.a.createElement(r.a,{cvc:this.state.cvc,expiry:this.state.expiry,focused:this.state.focus,name:this.state.name,number:this.state.no_card}),l.a.createElement("form",{onSubmit:this.props.handleSubmit,className:"mt-3"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-12"},l.a.createElement("nav",{className:"nav nav-pills nav-fill"},l.a.createElement("button",{type:"button",className:this.state.nav1,onClick:()=>{this.setState({nav1:"nav-item nav-link active",nav2:"nav-item nav-link",nav3:"nav-item nav-link"}),this.props.change("jenis_trx","DEBIT")}},"DEBIT"),l.a.createElement("button",{type:"button",className:this.state.nav2,onClick:()=>{this.setState({nav1:"nav-item nav-link ",nav2:"nav-item nav-link active",nav3:"nav-item nav-link"}),this.props.change("jenis_trx","CARD")}},"CREDIT"),l.a.createElement("button",{type:"button",className:this.state.nav3,onClick:()=>{this.setState({nav1:"nav-item nav-link ",nav2:"nav-item nav-link",nav3:"nav-item nav-link active"}),this.props.change("jenis_trx","TRANSFER")}},"TRANSFER"))),l.a.createElement("div",{className:"col-lg-12 mb-2 mt-2"},l.a.createElement("h4",null,"Data Kartu")),l.a.createElement("div",{className:"col-lg-3"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:""},"No.Card"),l.a.createElement("input",{type:"tel",className:"form-control",name:"no_card",placeholder:"Card Number",onChange:this.handleInputChange,onFocus:this.handleInputFocus}))),l.a.createElement("div",{className:"col-lg-3 d-none"},l.a.createElement(s.a,{name:"no_card",component:d.c,type:"telp",label:"No.Card",placeholder:"Masukan No.Card",onChange:this.handleInputChange,onFocus:this.handleInputFocus})),l.a.createElement("div",{className:"col-lg-3"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:""},"Valid Until"),l.a.createElement("input",{type:"tel",className:"form-control",name:"expiry",placeholder:"MM/YY",onChange:this.handleInputChange,onFocus:this.handleInputFocus}))),l.a.createElement("div",{className:"col-lg-3 d-none"},l.a.createElement(s.a,{name:"expiry",component:d.c,type:"telp",label:"Valid until ( MM/YY )",placeholder:"Masukan Valid until ( MM/YY )",onChange:this.handleInputChange,onFocus:this.handleInputFocus})),l.a.createElement("div",{className:"col-lg-3"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:""},"Nama Pemilik"),l.a.createElement("input",{type:"tel",className:"form-control",name:"name",placeholder:"Nama Pemilik",onChange:this.handleInputChange,onFocus:this.handleInputFocus}))),l.a.createElement("div",{className:"col-lg-3 d-none"},l.a.createElement(s.a,{name:"name",component:d.c,type:"text",label:"Nama Pemilik",placeholder:"Masukan Nama Pemilik",onChange:this.handleInputChange,onFocus:this.handleInputFocus})),l.a.createElement("div",{className:"col-lg-3"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:""},"CVC / CVV"),l.a.createElement("input",{type:"tel",className:"form-control",name:"cvc",placeholder:"Nama Pemilik",onChange:this.handleInputChange,onFocus:this.handleInputFocus}))),l.a.createElement("div",{className:"col-lg-3 d-none"},l.a.createElement(s.a,{name:"cvc",component:d.c,type:"text",label:"Nama Pemilik",placeholder:"Masukan Nama Pemilik",onChange:this.handleInputChange,onFocus:this.handleInputFocus})),l.a.createElement("div",{className:"col-lg-12 mb-2"},l.a.createElement("h4",null,"Data Pemilik")),l.a.createElement("div",{className:"col-lg-3"},l.a.createElement(s.a,{name:"no_ktp",component:d.c,type:"number",label:"Nomor KTP",placeholder:"Masukan Nomor KTP"})),l.a.createElement("div",{className:"col-lg-3"},l.a.createElement(s.a,{name:"alamat_ktp",component:d.c,type:"text",label:"Alamat KTP",placeholder:"Masukan Alamat KTP"})),l.a.createElement("div",{className:"col-lg-3 d-none"},l.a.createElement(s.a,{name:"jenis_trx",component:d.c,type:"text",label:"Jenis Transaksi",placeholder:"Masukan Jenis Transaksi"})),l.a.createElement("div",{className:"col-lg-3"},l.a.createElement(s.a,{name:"kota",component:d.c,type:"text",label:"Kota",placeholder:"Masukan Kota"})),l.a.createElement("div",{className:"col-lg-3"},l.a.createElement(s.a,{name:"handphone",component:d.c,type:"telp",label:"Handphone",placeholder:"Masukan Handphone"})),l.a.createElement("div",{className:"col-lg-12 mb-2"},l.a.createElement("h4",null,"Data Harga")),l.a.createElement("div",{className:"col-lg-2"},l.a.createElement(s.a,{name:"bank",component:d.e,options:this.state.listBank,label:"Bank",placeholder:"Masukan Bank"})),l.a.createElement("div",{className:"col-lg-2"},l.a.createElement(s.a,Object.assign({name:"sub_total",component:d.c,type:"text",label:"Sub Total",placeholder:"Masukan Sub Total",readOnly:!0},h))),l.a.createElement("div",{className:"col-lg-2"},l.a.createElement(s.a,Object.assign({name:"grand_total",component:d.c,type:"telp",label:"Grand Total",placeholder:"Masukan Grand Total"},h))),l.a.createElement("div",{className:"col-lg-1"},l.a.createElement(s.a,{name:"fee_card_percent",component:d.c,type:"number",label:"% Card",placeholder:"0",onChange:this.setTotal()})),l.a.createElement("div",{className:"col-lg-2"},l.a.createElement(s.a,Object.assign({name:"fee_card",component:d.c,type:"telp",label:"Fee Card",placeholder:"0"},h))),l.a.createElement("div",{className:"col-lg-3"},l.a.createElement(s.a,Object.assign({name:"total_card",component:d.c,type:"telp",label:"Card + Fee",placeholder:"Masukan Card + Fee"},h))),l.a.createElement("div",{className:"col-lg-12"},l.a.createElement("div",{className:"text-right"},l.a.createElement("button",{className:"btn btn-primary"},"Simpan ",l.a.createElement("i",{className:"fa fa-paper-plane"})))))))}}u=Object(o.a)({form:"ModalCC",enableReinitialize:!0,validate:e=>{const a={};return e.grand_total>e.sub_total&&(a.grand_total="Pembayaran Tidak Boleh Lebih Dari Sub Total"),a}})(u);const b=Object(i.a)("ModalCC");a.a=Object(c.b)(e=>{const a=b(e,"grand_total","fee_card_percent"),t=a.grand_total,n=a.fee_card_percent;return{fee_card:parseFloat(t||0)*(parseFloat(n||0)/100),total:parseFloat(t||0)+parseFloat(t||0)*(parseFloat(n||0)/100),sub_total:e.transaksi.sub_total,initialValues:{sub_total:e.transaksi.total_bayar-(e.transaksi.totalTukar||0)}}})(u)}}]);
//# sourceMappingURL=46.65c7c0c6.chunk.js.map