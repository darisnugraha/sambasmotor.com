(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{1044:function(a,e,t){"use strict";t.r(e);var n=t(0),l=t.n(n),s=t(33),r=t(5),o=t(66),c=t(14),m=t.n(c),i=t(6),p=t(27),d=t(10),h=t(52),u=t(44),b=t(67),g=t(410),k=t(388),E=t(422),_=t(393),v=t.n(_),N=t(160),y=t(161),f=t(399),S=t(394);const x=Object(f.createNumberMask)({prefix:"Rp. ",suffix:" ,-",decimalPlaces:0,locale:"id-ID"});class C extends n.Component{constructor(a){super(a),this.state={listCustomer:[],columns:[{dataField:"nama_barang",text:"Nama Barang"},{dataField:"qty",text:"Qty"},{dataField:"kode_satuan",text:"Satuan"},{dataField:"harga_satuan",text:"Harga Satuan",formatter:a=>"Rp. "+parseFloat(a).toLocaleString("id-ID")},{dataField:"harga_total",text:"Total",formatter:a=>"Rp. "+parseFloat(a).toLocaleString("id-ID")},{dataField:"action",text:"Action",csvExport:!1,headerClasses:"text-center",formatter:(a,e,t)=>(this.setState({}),l.a.createElement("div",{className:"row text-center"},l.a.createElement("div",{className:"col-12"},l.a.createElement("button",{type:"button",onClick:()=>this.deleteBarang(t),className:"btn btn-danger"},l.a.createElement("i",{className:"fa fa-trash"})))))}]}}componentDidMount(){this.props.change("total",this.props.sub_total),this.props.change("tanggal",Object(h.b)()),Object(d.b)("penjualan-rosok/generate/no-trx").then(a=>this.props.change("no_faktur",a.data[0].no_faktur_jual))}deleteBarang(a){m.a.fire({title:"Anda Yakin !!",text:"Ingin Menghapus Data Ini ?",icon:"warning",position:"top-center",cancelButtonText:"Tidak",showCancelButton:!0,confirmButtonText:"OK",showConfirmButton:!0}).then(e=>{if(e.isConfirmed){let e=JSON.parse(localStorage.getItem("BarangRongsok_temp"))||[];e.splice(a,1),localStorage.setItem("BarangRongsok_temp",JSON.stringify(e)),this.props.dispatch(Object(p.l)()),Object(u.i)("Berhasil Menghapus Data")}})}setCustomer(a){let e=a.split("||");this.props.change("kode_customer",e[0]),this.props.change("alamat",e[1]),this.props.change("handphone",e[2])}render(){return l.a.createElement("form",{onSubmit:this.props.handleSubmit},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-4"},l.a.createElement(N.a,{name:"tanggal",component:u.c,type:"date",label:"Tanggal",placeholder:"Masukan Tanggal",validate:S.a})),l.a.createElement("div",{className:"col-lg-4"},l.a.createElement(N.a,{name:"no_faktur",component:u.c,type:"text",label:"Nomor Faktur",placeholder:"Masukan Nomor Faktur",readOnly:!0})),l.a.createElement("div",{className:"col-lg-4"}),l.a.createElement("div",{className:"col-lg-3"},l.a.createElement(N.a,{name:"kode_pelanggan",component:u.e,options:this.props.listCustomer.map(a=>{return{value:"".concat(a.nama_customer,"||").concat(a.alamat,"||").concat(a.handphone),name:a.nama_customer}}),type:"text",label:"Pelanggan",placeholder:"Masukan Pelanggan",onChange:a=>this.setCustomer(a),validate:S.a}),l.a.createElement("div",{className:"col-lg-12"},l.a.createElement("span",null,"Jika Tidak Ada dalam list, silahkan klik tombol biru untuk menambahkan Customer"))),l.a.createElement("div",{className:"col-lg-1"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"."},"."),l.a.createElement("button",{type:"button",className:"btn btn-block btn-teal form-control",onClick:this.props.showCustomer},l.a.createElement("i",{className:"fa fa-plus"})))),l.a.createElement("div",{className:"col-lg-4 d-none"},l.a.createElement(N.a,{name:"kode_customer",component:u.c,type:"text",label:"Kode Customer",placeholder:"Masukan Alamat",readOnly:!0})),l.a.createElement("div",{className:"col-lg-4"},l.a.createElement(N.a,{name:"alamat",component:u.c,type:"text",label:"Alamat",placeholder:"Masukan Alamat",readOnly:!0,validate:S.a})),l.a.createElement("div",{className:"col-lg-4"},l.a.createElement(N.a,{name:"handphone",component:u.c,type:"text",label:"Handphone",placeholder:"Masukan Handphone",readOnly:!0,validate:S.a})),l.a.createElement("div",{className:"col-lg-12"},l.a.createElement("div",{className:"row justify-content-center"},l.a.createElement("div",{className:"col-lg-6"},l.a.createElement(N.a,Object.assign({name:"total",component:u.c,type:"text",label:"Total Harga",placeholder:"Rp.",readOnly:!0},x))))),l.a.createElement("div",{className:"col-lg-12 mb-3"},l.a.createElement("div",{className:"text-right"},l.a.createElement("button",{type:"button",className:"btn btn-warning",onClick:this.props.showTambah},"Tambah Data ",l.a.createElement("i",{className:"fa fa-plus ml-3"})))),l.a.createElement("div",{className:"col-lg-12"},l.a.createElement(v.a,{bootstrap4:!0,keyField:"id",data:this.props.listbarangrongsok||[],columns:this.state.columns})),l.a.createElement("div",{className:"col-lg-12"},l.a.createElement("div",{className:"text-right"},l.a.createElement("button",{className:"btn btn-primary"},"Bayar ",l.a.createElement("i",{className:"fa fa-chevron-circle-right ml-3"}))))))}}C=Object(y.a)({form:"HeadPenjualanRongsok",enableReinitialize:!0})(C);var j=Object(s.b)(a=>({initialValues:{total:a.transaksi.sub_total,no_faktur:localStorage.getItem("nomor_jual_rongsok")||""},listCustomer:a.datamaster.listcustomer||[]}),null)(C),O=t(173),M=t(390);const F=Object(f.createNumberMask)({prefix:"Rp. ",locale:"id-ID"});class B extends n.Component{constructor(a){super(a),this.state={}}componentDidMount(){this.props.change("grand_total_all",this.props.total)}setBayar(a){this.setState({bayar:a.target.value}),localStorage.setItem("bayar_rp_rongsok",a.target.value)}render(){return l.a.createElement("form",{onSubmit:this.props.handleSubmit},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-12 mb-3"},l.a.createElement("div",{className:"col-lg-12"},l.a.createElement("div",{className:"text-left"},l.a.createElement("button",{className:"btn btn-black text-white",onClick:this.props.backMenu},l.a.createElement("i",{className:"fa fa-chevron-left mr-3"})," Back")))),l.a.createElement("div",{className:"col-lg-12"},l.a.createElement("div",{className:"col-lg-12"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-6 text-center"},l.a.createElement("h3",null,"Grand Total"),l.a.createElement("p",{style:{fontSize:32,fontWeight:700}},parseFloat(this.props.grand_total_all).toLocaleString("id-ID")),l.a.createElement("h3",null,"Bayar"),l.a.createElement("div",{className:"col-lg-12"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-3"}),l.a.createElement("div",{className:"col-lg-6 text-center"},l.a.createElement(N.a,Object.assign({name:"bayar",component:u.c,type:"telp",placeholder:"Masukan Bayar",className:" form-control-lg",onChange:a=>this.setBayar(a)},F))))),l.a.createElement("h3",null,"Kembali"),l.a.createElement("p",{style:{fontSize:35,fontWeight:700}},parseFloat(this.props.kembali).toLocaleString("id-ID"))),l.a.createElement("div",{className:"col-lg-6"},l.a.createElement("div",{className:"col-lg-12"},l.a.createElement(M.a,{keyField:"no_ac",data:this.props.listPembayaran_temp,columns:this.props.columns,tambahData:!0,handleClick:this.props.showCC})))))),l.a.createElement("div",{className:"text-center col-lg-12"},l.a.createElement("button",{className:"btn-lg btn-teal btn-block",disabled:this.props.onSend},this.props.onSend?l.a.createElement("i",{className:"fas fa-spinner fa-spin"}):null,"BAYAR ",l.a.createElement("i",{className:"fa fa-money-bill-alt ml-3"})))))}}B=Object(y.a)({form:"ModalBayar",enableReinitialize:!0})(B);const I=Object(O.a)("ModalBayar");var T=Object(s.b)(a=>(localStorage.setItem("bayar_rp_rongsok",I(a,"bayar")||0),{grand_total_all:a.transaksi.sub_total,listPembayaran_temp:a.transaksi.listpembayaran_temp,sum_pembayaran:a.transaksi.sum_pembayaran,kembali:(I(a,"bayar")||0)-a.transaksi.sub_total,bayar:I(a,"bayar")||0,onSend:a.datamaster.onSend}))(B);const w=Object(f.createNumberMask)({prefix:"Rp. ",suffix:" ,-",decimalPlaces:0,locale:"id-ID"});class P extends n.Component{constructor(a){super(a),this.state={listSatuan:[]}}setTotal(){this.props.change("total",this.props.total)}componentDidMount(){Object(d.b)("satuan/get/all").then(a=>this.setState({listSatuan:a&&a.data.map(a=>{return{value:a.kode_satuan,name:a.nama_satuan}})}))}render(){return l.a.createElement("form",{onSubmit:this.props.handleSubmit},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-4"},l.a.createElement(N.a,{name:"nama_barang",component:u.c,type:"text",label:"Nama Barang",placeholder:"Masukan Nama Barang"})),l.a.createElement("div",{className:"col-lg-2"},l.a.createElement(N.a,{name:"qty",component:u.c,type:"text",label:"Qty",placeholder:"Masukan Qty",onChange:this.setTotal()})),l.a.createElement("div",{className:"col-lg-3"},l.a.createElement(N.a,{name:"satuan",component:u.e,options:this.state.listSatuan,type:"text",label:"Satuan",placeholder:"Masukan "})),l.a.createElement("div",{className:"col-lg-3"},l.a.createElement(N.a,Object.assign({name:"harga_satuan",component:u.c,type:"text",label:"Harga Satuan",placeholder:"Masukan Harga Satuan",onChange:this.setTotal()},w))),l.a.createElement("div",{className:"col-lg-3"},l.a.createElement(N.a,Object.assign({name:"total",component:u.c,type:"text",label:"Total",placeholder:"Masukan Total"},w))),l.a.createElement("div",{className:"col-lg-12"},l.a.createElement("div",{className:"text-right"},l.a.createElement("button",{className:"btn btn-primary"},"Simpan ",l.a.createElement("i",{className:"fa fa-paper-plane ml-3"}))))))}}P=Object(y.a)({form:"ModalPenjualanRongsok",enableReinitialize:!0})(P);const R=Object(O.a)("ModalPenjualanRongsok");var D=Object(s.b)(a=>{const e=R(a,"harga_satuan","qty"),t=e.harga_satuan,n=e.qty;return{total:parseFloat(t||0)*parseFloat(n||0)}})(P),K=t(395);class A extends n.Component{constructor(a){super(a),this.state={listMerk:[]}}componentDidMount(){Object(d.b)("merk-kendaraan/get/all").then(a=>this.setState({listMerk:a.data})).catch(a=>Object(u.a)(a.response.data||"Tidak Ada Koneksi")),this.props.change("kode_customer",this.props.noFaktur)}render(){return l.a.createElement("form",{onSubmit:this.props.handleSubmit},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-12 mb-3"},l.a.createElement("div",{className:"text-left"},l.a.createElement("button",{className:"btn btn-black text-white",onClick:this.props.backMenu},l.a.createElement("i",{className:"fa fa-chevron-left mr-3"})," Back"))),l.a.createElement("div",{className:"col-lg-6"},l.a.createElement("div",{className:"col-lg-3 d-none"},l.a.createElement(N.a,{name:"kode_customer",component:u.c,type:"text",label:"Kode CUstomer",placeholder:"Masukan Kode Customer",validate:S.a})),l.a.createElement("h3",{className:"mb-3"},"Data Pemilik :"),l.a.createElement(N.a,{name:"nama_customer",component:u.c,type:"text",label:"Nama",placeholder:"Masukan Nama",validate:S.a}),l.a.createElement(N.a,{name:"alamat_customer",component:u.c,type:"text",label:"Alamat",placeholder:"Masukan Alamat"}),l.a.createElement(N.a,{name:"kota_customer",component:u.c,type:"text",label:"Kota",placeholder:"Masukan Kota"}),l.a.createElement(N.a,{name:"handphone_customer",component:u.c,type:"text",label:"Handphone",placeholder:"Masukan Handphone"})),l.a.createElement("div",{className:"col-lg-6"},l.a.createElement("h3",{className:"mb-3"},"Data Kendaraan :"),l.a.createElement(N.a,{name:"no_polisi",component:u.c,type:"text",label:"Nomor Polisi",placeholder:"Masukan Nomor Polisi",validate:S.a}),l.a.createElement(N.a,{name:"merk",component:u.e,options:this.state.listMerk.map(a=>{return{value:a.kode_merk_kendaraan,name:a.nama_merk_kendaraan}}),type:"text",label:"Merk",placeholder:"Masukan Merk"}),l.a.createElement(N.a,{name:"type",component:u.c,type:"text",label:"Type",placeholder:"Masukan Type"}),l.a.createElement(N.a,{name:"warna",component:u.c,type:"text",label:"Warna",placeholder:"Masukan Warna"}),l.a.createElement(N.a,{name:"no_mesin",component:u.c,type:"text",label:"Nomor Mesin",placeholder:"Masukan Nomor Mesin",validate:S.a}))),l.a.createElement("div",{className:"col-lg-12"},l.a.createElement("button",{className:"btn btn-primary",disabled:this.props.onSend},this.props.onSend?l.a.createElement(l.a.Fragment,null,l.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Menyimpan"):l.a.createElement(l.a.Fragment,null,"Simpan ",l.a.createElement("i",{className:"fa fa-paper-plane ml-3 "})))))}}A=Object(y.a)({form:"tambahCustomer",enableReinitialize:!0,validate:K.a})(A);var J=Object(s.b)(a=>void 0!==a.datamaster.datacustomer?{initialValues:{nama_customer:a.datamaster.datacustomer.nama_customer,kode_customer:a.datamaster.datacustomer.kode_customer,alamat_customer:a.datamaster.datacustomer.alamat,kota_customer:a.datamaster.datacustomer.kota,handphone_customer:a.datamaster.datacustomer.handphone,no_polisi:a.datamaster.datacustomer.nopol_kendaraan,merk:a.datamaster.datacustomer.merk_kendaraan,type:a.datamaster.datacustomer.type_kendaraan,no_mesin:a.datamaster.datacustomer.nomesin_kendaraan,warna:a.datamaster.datacustomer.warna_kendaraan},onSend:a.datamaster.onSend}:{onSend:a.datamaster.onSend},null)(A);e.default=Object(s.b)(a=>({listbarangrongsok:a.transaksi.listbarangrongsok,sub_total:a.transaksi.sub_total,onSend:a.datamaster.onSend,noFaktur:a.datamaster.noFaktur,grand_total_all:a.transaksi.sub_total}),null)(class extends n.Component{constructor(a){super(a),this.state={cari_barang:!1,bayar:!1,customer:!1,columnsListBayar:[{dataField:"jenis_trx",text:"Jenis Bayar"},{dataField:"nama_pemilik",text:"Nama Pemilik"},{dataField:"no_ac",text:"Nomor Rekening"},{dataField:"bayar_rp",text:"Total Bayar",formatter:a=>"Rp. ".concat(parseFloat(a).toLocaleString("id-ID"))},{dataField:"action",text:"Action",csvExport:!1,headerClasses:"text-center",formatter:(a,e,t)=>(this.setState({}),l.a.createElement("div",{className:"row text-center"},l.a.createElement("div",{className:"col-12"},l.a.createElement("button",{type:"button",onClick:()=>this.deleteBarang(t),className:"btn btn-danger"},l.a.createElement("i",{className:"fa fa-trash"})))))}]}}deleteBarang(a){m.a.fire({title:"Anda Yakin !!",text:"Ingin Menghapus Data Ini ?",icon:"warning",position:"top-center",cancelButtonText:"Tidak",showCancelButton:!0,confirmButtonText:"OK",showConfirmButton:!0}).then(e=>{if(e.isConfirmed){let e=JSON.parse(localStorage.getItem("listPembayaran_temp"))||[];e.splice(a,1),localStorage.setItem("listPembayaran_temp",JSON.stringify(e)),this.props.dispatch(Object(p.n)()),Object(u.i)("Berhasil Menghapus Data")}})}componentDidMount(){this.props.dispatch(Object(p.l)()),this.props.dispatch(Object(i.xb)()),Object(d.b)("penjualan-rosok/generate/no-trx").then(a=>localStorage.setItem("nomor_jual_rongsok",a.data[0].no_faktur_jual)),this.props.dispatch(Object(p.n)()),this.props.dispatch(Object(i.Ab)())}handleSubmit(a){let e=JSON.parse(localStorage.getItem("BarangRongsok_temp"))||[],t=e.findIndex(e=>e.nama_barang===a.nama_barang);if(-1!==t){let n={nama_barang:a.nama_barang,qty:parseInt(a.qty)+parseFloat(e[t].qty),kode_satuan:a.satuan,harga_satuan:parseFloat(a.harga_satuan),harga_total:parseFloat(a.total)+parseFloat(e[t].harga_total)};e.splice(t,1),e.push(n),localStorage.setItem("BarangRongsok_temp",JSON.stringify(e)),Object(u.i)("Berhasil Menambah Data"),this.props.dispatch(Object(o.a)("ModalPenjualanRongsok")),this.props.dispatch(Object(p.l)())}else{let e={nama_barang:a.nama_barang,qty:parseFloat(a.qty),kode_satuan:a.satuan,harga_satuan:parseFloat(a.harga_satuan),harga_total:parseFloat(a.total)};Object(g.a)("BarangRongsok_temp",e).then(()=>this.props.dispatch(Object(o.a)("ModalPenjualanRongsok"))).then(()=>this.props.dispatch(Object(p.l)()))}}showBayar(a){let e={no_faktur_jual:a.no_faktur,tanggal:a.tanggal,nama_customer:a.kode_customer,alamat:a.alamat,telepon:a.handphone,grand_total:this.props.grand_total_all,detail_barang:JSON.parse(localStorage.getItem("BarangRongsok_temp"))};localStorage.setItem("headPembayaranRongsok",JSON.stringify(e)),this.setState({bayar:!0})}sendBayar(a){if(a.bayar<this.props.grand_total_all)return Object(u.h)("Pembarayan kurang dari Total Bayar"),!1;this.props.dispatch(Object(i.Vb)());let e=JSON.parse(localStorage.getItem("headPembayaranRongsok"))||[];e.cash_rp=a.bayar,e.detail_non_tunai="[]"===localStorage.getItem("listPembayaran_temp")?[{no_ref:"-",no_ac:"-",bayar_rp:0,fee_rp:0,no_card:"-",valid_until:"-",nama_pemilik:"-",no_ktp:"-",alamat_ktp:"-",kota_ktp:"-",telepon_ktp:"-",jenis_trx:"-"}]:JSON.parse(localStorage.getItem("listPembayaran_temp")),localStorage.setItem("headPembayaranRongsok",JSON.stringify(e)),Object(d.c)("penjualan-rosok/post-transaksi",e).then(()=>Object(h.c)(["headPembayaranRongsok","nomor_jual_rongsok","BarangRongsok_temp","bayar_rp_rongsok"])).then(()=>this.props.dispatch(Object(p.l)())).then(()=>this.props.dispatch(Object(p.n)())).then(()=>Object(u.b)("Berhasil Menambahkan Data")).then(()=>this.setState({bayar:!1,customer:!1})).then(()=>this.props.dispatch(Object(i.Ub)())).catch(a=>{Object(u.h)("Error : ".concat(a)),this.props.dispatch(Object(i.Ub)())})}showTambah(){this.props.dispatch(Object(i.Wb)()),this.setState({bayar:!1,customer:!1})}showCC(){this.props.dispatch(Object(i.Wb)()),this.setState({jenisModal:"CC"})}handleSimpanCC(a){let e=JSON.parse(localStorage.getItem("listPembayaran_temp"))||[],t={no_ref:this.props.noFaktur,no_ac:a.bank,bayar_rp:a.total_card,fee_rp:a.fee_card,no_card:a.no_card,valid_until:a.expiry,nama_pemilik:a.name,no_ktp:a.no_ktp,alamat_ktp:a.alamat_ktp,kota_ktp:a.kota,telepon_ktp:a.handphone,jenis_trx:a.jenis_trx};if(e.push(t),e.map(a=>a.bayar_rp).reduce((a,e)=>a+e)>this.props.total_card)return Object(u.h)("Pembayaran Melebihi Total Harga"),!1;localStorage.setItem("listPembayaran_temp",JSON.stringify(e)),Object(u.i)("Berhasil Menambahkan Data"),localStorage.removeItem("noFaktur"),this.props.dispatch(Object(i.Ab)()),this.props.dispatch(Object(i.Tb)()),this.props.dispatch(Object(p.n)())}showCustomer(){this.setState({customer:!0,bayar:!1})}handleCustomer(a){let e={kode_customer:this.props.noFaktur||"-",nama_customer:a.nama_customer||"-",alamat:a.alamat_customer||"-",kota:a.kota_customer||"-",handphone:a.handphone_customer||"-",nopol_kendaraan:a.no_polisi||"-",merk_kendaraan:a.merk||"-",type_kendaraan:a.type||"-",nomesin_kendaraan:a.no_mesin||"-",warna_kendaraan:a.warna||"-"};this.props.dispatch(Object(i.Vb)()),Object(d.c)("customer/add",e).then(()=>Object(u.i)("Berhasil Ditambahkan")).then(()=>this.props.dispatch(Object(o.a)("dataBarang"))).then(()=>this.props.dispatch(Object(i.Tb)())).then(()=>this.props.dispatch(Object(i.Ub)())).then(()=>this.props.dispatch(Object(i.xb)())).then(()=>localStorage.removeItem("noFaktur")).then(()=>this.props.dispatch(Object(i.Ab)())).then(()=>this.setState({customer:!1,bayar:!1})).catch(()=>Object(u.h)("Sepertinya ada gangguan, Mohon ulang beberapa saat lagi").then(()=>this.props.dispatch(Object(i.Ub)())))}render(){return l.a.createElement("div",null,l.a.createElement("ol",{className:"breadcrumb float-xl-right"},l.a.createElement("li",{className:"breadcrumb-item"},l.a.createElement(r.b,{to:"#"},"Transaksi")),l.a.createElement("li",{className:"breadcrumb-item active"},"Penjualan Barang Rongsok")),l.a.createElement("h1",{className:"page-header"},"Penjualan Barang Rongsok "),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-12"},l.a.createElement(b.a,null,l.a.createElement(b.c,null,"Penjualan Barang Rongsok"),l.a.createElement(b.b,null,l.a.createElement("br",null),this.state.bayar?l.a.createElement(T,{showCC:()=>this.showCC(),columns:this.state.columnsListBayar,data:this.state.dataListBayar,backMenu:()=>this.setState({bayar:!1}),onSubmit:a=>this.sendBayar(a)}):this.state.customer?l.a.createElement(J,{onSubmit:a=>this.handleCustomer(a),onSend:this.props.onSend,isEdit:!1,noFaktur:this.props.noFaktur,backMenu:()=>this.setState({bayar:!1,customer:!1})}):l.a.createElement(j,{listbarangrongsok:this.props.listbarangrongsok,sub_total:this.props.sub_total,onSubmit:a=>this.showBayar(a),showTambah:()=>this.showTambah(),showCustomer:()=>this.showCustomer()}),l.a.createElement("br",null))),l.a.createElement(k.a,{title:this.state.bayar?"Credit Card":"Tambah Data Rongsok",content:this.state.bayar?l.a.createElement(E.a,{onSubmit:a=>this.handleSimpanCC(a)}):l.a.createElement(D,{onSubmit:a=>this.handleSubmit(a)})}))))}})},388:function(a,e,t){"use strict";var n=t(0),l=t.n(n),s=t(33),r=t(402),o=t(400),c=t(401),m=t(6);e.a=Object(s.b)(a=>({isOpen:a.datamaster.modalDialog}),null)(class extends n.Component{constructor(a){super(a),this.state={}}render(){return l.a.createElement(r.a,{backdrop:"static",keyboard:!1,isOpen:this.props.isOpen,toggle:()=>this.props.dispatch(Object(m.Tb)()),size:this.props.size||"xl"},l.a.createElement(o.a,{toggle:()=>this.props.dispatch(Object(m.Tb)())},this.props.title),l.a.createElement(c.a,null,this.props.content))}})},390:function(a,e,t){"use strict";var n=t(0),l=t.n(n),s=t(393),r=t.n(s),o=t(397),c=t.n(o),m=t(398),i=t.n(m),p=t(391),d=t.n(p);var h=function(a){return l.a.createElement("div",{className:"col-lg-12"},l.a.createElement("div",{className:"text-center"},l.a.createElement("img",{src:d.a,width:"250",height:"250",alt:"Empty"}),l.a.createElement("h5",null,a.text)))},u=t(112),b=t.n(u);const g=o.Search.SearchBar,k=o.CSVExport.ExportCSVButton;e.a=function(a){let e=a.textEmpty,t=a.handleClick,n=a.tambahData,s=a.expandRow,o=a.selectRow,m=a.exportCSV;return a.data?l.a.createElement(c.a,{keyField:a.keyField,data:a.data||[],columns:a.columns,search:!0},a=>l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-6"},l.a.createElement("div",{className:"text-left"},l.a.createElement(g,a.searchProps))),l.a.createElement("div",{className:"col-6"},l.a.createElement("div",{className:"text-right"},n&&l.a.createElement("button",{onClick:t,className:"btn btn-primary",type:"button"},"Tambah Data",l.a.createElement("i",{className:"fa fa-plus ml-3"})))),l.a.createElement("hr",null),l.a.createElement("div",{className:"col-12"},l.a.createElement(r.a,Object.assign({pagination:i()(),selectRow:o,expandRow:s},a.baseProps,{noDataIndication:l.a.createElement(h,{text:e||"Tidak Ada Data"})})),l.a.createElement("br",null),m&&l.a.createElement(k,a.csvProps,"Export CSV!!")))):a.empty?l.a.createElement(c.a,{keyField:a.keyField,data:a.data||[],columns:a.columns,search:!0},a=>l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-6"},l.a.createElement("div",{className:"text-left"},l.a.createElement(g,a.searchProps))),l.a.createElement("div",{className:"col-6"},l.a.createElement("div",{className:"text-right"},n&&l.a.createElement("button",{onClick:t,className:"btn btn-primary",type:"button"},"Tambah Data",l.a.createElement("i",{className:"fa fa-plus ml-3"})))),l.a.createElement("hr",null),l.a.createElement("div",{className:"col-12"},l.a.createElement(r.a,Object.assign({pagination:i()()},a.baseProps,{noDataIndication:l.a.createElement(h,{text:e||"Tidak Ada Data"})})),l.a.createElement("br",null),a.CSVExport&&l.a.createElement(k,a.csvProps,"Export CSV!!")))):l.a.createElement(b.a,{width:"100%",height:250})}},391:function(a,e,t){a.exports=t.p+"static/media/empty.02c14787.svg"},394:function(a,e,t){"use strict";t.d(e,"a",function(){return n});const n=a=>a?void 0:"Tidak Boleh Kosong"},395:function(a,e,t){"use strict";e.a=((a,e)=>{const t={};return a.kode_kategori||(t.kode_kategori="Kode Tidak Boleh Kosong"),a.nama_kategori||(t.nama_kategori="Nama Kategori Tidak Boleh Kosong"),a.harga_pergram||(t.harga_pergram="Harga / Gram Tidak Boleh Kosong"),a.presentase||(t.presentase="Presentase Tidak Boleh Kosong"),a.kadar||(t.kadar="Kadar Tidak Boleh Kosong"),t})},410:function(a,e,t){"use strict";t.d(e,"a",function(){return s});var n=t(14),l=t.n(n);const s=(a,e)=>new Promise((t,n)=>{let s=JSON.parse(localStorage.getItem(a))||[];s.push(e),localStorage.setItem(a,JSON.stringify(s)),l.a.fire({position:"top-right",text:"Tambah Data Berhasil",timer:2e3,icon:"success",showConfirmButton:!1}).then(()=>t("Berhaisl")).catch(()=>n("GAGAL"))})},422:function(a,e,t){"use strict";var n=t(0),l=t.n(n),s=t(448),r=(t(449),t(33)),o=t(160),c=t(161),m=t(173),i=t(399),p=t(10),d=t(44);const h=Object(i.createNumberMask)({prefix:"Rp. ",locale:"id-ID"});class u extends n.Component{constructor(a){super(a),this.handleInputFocus=(a=>{this.setState({focus:a.target.name})}),this.handleInputChange=(a=>{const e=a.target,t=e.name,n=e.value;this.setState({[t]:n}),this.props.change(t,n)}),this.state={cvc:"",expiry:"",focus:"",name:"",no_card:"",nav1:"nav-item nav-link active",nav2:"nav-item nav-link",nav3:"nav-item nav-link",listBank:[]}}componentDidMount(){Object(p.b)("bank/get/all").then(a=>this.setState({listBank:a&&a.data.map(a=>{return{value:a.no_ac,name:"".concat(a.atas_nama," / ").concat(a.nama_bank)}})}))}setTotal(){this.props.change("fee_card",this.props.fee_card),this.props.change("total_card",this.props.total)}render(){return l.a.createElement("div",{className:"col-lg-12"},l.a.createElement(s.a,{cvc:this.state.cvc,expiry:this.state.expiry,focused:this.state.focus,name:this.state.name,number:this.state.no_card}),l.a.createElement("form",{onSubmit:this.props.handleSubmit,className:"mt-3"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-12"},l.a.createElement("nav",{className:"nav nav-pills nav-fill"},l.a.createElement("button",{className:this.state.nav1,onClick:()=>{this.setState({nav1:"nav-item nav-link active",nav2:"nav-item nav-link",nav3:"nav-item nav-link"}),this.props.change("jenis_trx","DEBIT")}},"DEBIT"),l.a.createElement("button",{className:this.state.nav2,onClick:()=>{this.setState({nav1:"nav-item nav-link ",nav2:"nav-item nav-link active",nav3:"nav-item nav-link"}),this.props.change("jenis_trx","CARD")}},"CREDIT"),l.a.createElement("button",{className:this.state.nav3,onClick:()=>{this.setState({nav1:"nav-item nav-link ",nav2:"nav-item nav-link",nav3:"nav-item nav-link active"}),this.props.change("jenis_trx","TRANSFER")}},"TRANSFER"))),l.a.createElement("div",{className:"col-lg-12 mb-2 mt-2"},l.a.createElement("h4",null,"Data Kartu")),l.a.createElement("div",{className:"col-lg-3"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:""},"No.Card"),l.a.createElement("input",{type:"tel",className:"form-control",name:"no_card",placeholder:"Card Number",onChange:this.handleInputChange,onFocus:this.handleInputFocus}))),l.a.createElement("div",{className:"col-lg-3 d-none"},l.a.createElement(o.a,{name:"no_card",component:d.c,type:"telp",label:"No.Card",placeholder:"Masukan No.Card",onChange:this.handleInputChange,onFocus:this.handleInputFocus})),l.a.createElement("div",{className:"col-lg-3"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:""},"Valid Until"),l.a.createElement("input",{type:"tel",className:"form-control",name:"expiry",placeholder:"MM/YY",onChange:this.handleInputChange,onFocus:this.handleInputFocus}))),l.a.createElement("div",{className:"col-lg-3 d-none"},l.a.createElement(o.a,{name:"expiry",component:d.c,type:"telp",label:"Valid until ( MM/YY )",placeholder:"Masukan Valid until ( MM/YY )",onChange:this.handleInputChange,onFocus:this.handleInputFocus})),l.a.createElement("div",{className:"col-lg-3"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:""},"Nama Pemilik"),l.a.createElement("input",{type:"tel",className:"form-control",name:"name",placeholder:"Nama Pemilik",onChange:this.handleInputChange,onFocus:this.handleInputFocus}))),l.a.createElement("div",{className:"col-lg-3 d-none"},l.a.createElement(o.a,{name:"name",component:d.c,type:"text",label:"Nama Pemilik",placeholder:"Masukan Nama Pemilik",onChange:this.handleInputChange,onFocus:this.handleInputFocus})),l.a.createElement("div",{className:"col-lg-3"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:""},"CVC / CVV"),l.a.createElement("input",{type:"tel",className:"form-control",name:"cvc",placeholder:"Nama Pemilik",onChange:this.handleInputChange,onFocus:this.handleInputFocus}))),l.a.createElement("div",{className:"col-lg-3 d-none"},l.a.createElement(o.a,{name:"cvc",component:d.c,type:"text",label:"Nama Pemilik",placeholder:"Masukan Nama Pemilik",onChange:this.handleInputChange,onFocus:this.handleInputFocus})),l.a.createElement("div",{className:"col-lg-12 mb-2"},l.a.createElement("h4",null,"Data Pemilik")),l.a.createElement("div",{className:"col-lg-3"},l.a.createElement(o.a,{name:"no_ktp",component:d.c,type:"number",label:"Nomor KTP",placeholder:"Masukan Nomor KTP"})),l.a.createElement("div",{className:"col-lg-3"},l.a.createElement(o.a,{name:"alamat_ktp",component:d.c,type:"text",label:"Alamat KTP",placeholder:"Masukan Alamat KTP"})),l.a.createElement("div",{className:"col-lg-3 d-none"},l.a.createElement(o.a,{name:"jenis_trx",component:d.c,type:"text",label:"Jenis Transaksi",placeholder:"Masukan Jenis Transaksi"})),l.a.createElement("div",{className:"col-lg-3"},l.a.createElement(o.a,{name:"kota",component:d.c,type:"text",label:"Kota",placeholder:"Masukan Kota"})),l.a.createElement("div",{className:"col-lg-3"},l.a.createElement(o.a,{name:"handphone",component:d.c,type:"telp",label:"Handphone",placeholder:"Masukan Handphone"})),l.a.createElement("div",{className:"col-lg-12 mb-2"},l.a.createElement("h4",null,"Data Harga")),l.a.createElement("div",{className:"col-lg-3"},l.a.createElement(o.a,{name:"bank",component:d.e,options:this.state.listBank,label:"Bank",placeholder:"Masukan Bank"})),l.a.createElement("div",{className:"col-lg-3"},l.a.createElement(o.a,Object.assign({name:"grand_total",component:d.c,type:"telp",label:"Grand Total",placeholder:"Masukan Grand Total"},h))),l.a.createElement("div",{className:"col-lg-1"},l.a.createElement(o.a,{name:"fee_card_percent",component:d.c,type:"number",label:"% Card",placeholder:"0",onChange:this.setTotal()})),l.a.createElement("div",{className:"col-lg-2"},l.a.createElement(o.a,Object.assign({name:"fee_card",component:d.c,type:"telp",label:"Fee Card",placeholder:"0"},h))),l.a.createElement("div",{className:"col-lg-3"},l.a.createElement(o.a,Object.assign({name:"total_card",component:d.c,type:"telp",label:"Card + Fee",placeholder:"Masukan Card + Fee"},h))),l.a.createElement("div",{className:"col-lg-12"},l.a.createElement("div",{className:"text-right"},l.a.createElement("button",{className:"btn btn-primary"},"Simpan ",l.a.createElement("i",{className:"fa fa-paper-plane"})))))))}}u=Object(c.a)({form:"ModalCC",enableReinitialize:!0})(u);const b=Object(m.a)("ModalCC");e.a=Object(r.b)(a=>{const e=b(a,"grand_total","fee_card_percent"),t=e.grand_total,n=e.fee_card_percent;return{fee_card:parseFloat(t||0)*(parseFloat(n||0)/100),total:parseFloat(t||0)+parseFloat(t||0)*(parseFloat(n||0)/100)}})(u)}}]);
//# sourceMappingURL=10.15a41277.chunk.js.map