(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{1044:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),o=t(28),r=t(197),l=t(198),c=t(18),p=t(591),m=t.n(p),i=t(557),d=t(5),h=t(9),u=t(33),k=t(132),g=t(27);class b extends n.Component{constructor(e){super(e),this.state={dataBooking:[],member:!1,reguler:!1,listCustomer:[],customer:"col-lg-12 row",step:0,step1:"row",step2:"row d-none",step3:"row d-none",step4:"row d-none",step5:"row d-none",step6:"row d-none",columns:[{dataField:"jenis_barang",text:"Jenis barang"},{dataField:"nama",text:"Nama"},{dataField:"harga_total",text:"Harga"},{dataField:"keterangan",text:"Keterangan"},{dataField:"action",text:"Action",csvExport:!1,headerClasses:"text-center",formatter:(e,a,t)=>(this.setState({}),s.a.createElement("div",{className:"row text-center"},s.a.createElement("div",{className:"col-12"},s.a.createElement("button",{type:"button",onClick:()=>this.deleteBarang(t),className:"btn btn-danger"},"Hapus",s.a.createElement("i",{className:"fa fa-trash ml-2"})))))}]}}deleteBarang(e){let a=JSON.parse(localStorage.getItem("list_service_daftar_temp"))||[];a.splice(e,1),localStorage.setItem("list_service_daftar_temp",JSON.stringify(a)),Object(c.i)("Berhasil Dihapus"),this.props.dispatch(Object(g.A)())}handleChange(e,a){let t=(a||"DEFAULT|DEFAULT").split("|");this.props.change(e,t[1])}nextStep(){switch(this.state.step){case 0:this.setState({step:this.state.step+1,step1:"row d-none",step2:"row ",step3:"row d-none",step4:"row d-none",step5:"row d-none",step6:"row d-none"});break;case 1:this.setState({step:this.state.step+1,step1:"row d-none",step2:"row d-none",step3:"row ",step4:"row d-none",step5:"row d-none",step6:"row d-none"});break;case 2:this.setState({step:this.state.step+1,step1:"row d-none",step2:"row d-none",step3:"row d-none",step4:"row ",step5:"row d-none",step6:"row d-none"});break;case 3:this.setState({step:this.state.step+1,step1:"row d-none",step2:"row d-none",step3:"row d-none",step4:"row d-none",step5:"row ",step6:"row d-none"})}}prevStep(){switch(this.state.step){case 1:this.setState({step:this.state.step-1,step1:"row ",step2:"row d-none",step3:"row d-none",step4:"row d-none",step5:"row d-none",step6:"row d-none"});break;case 2:this.setState({step:this.state.step-1,step1:"row d-none",step2:"row ",step3:"row d-none",step4:"row d-none",step5:"row d-none",step6:"row d-none"});break;case 3:this.setState({step:this.state.step-1,step1:"row d-none",step2:"row d-none",step3:"row ",step4:"row d-none",step5:"row d-none",step6:"row d-none"});break;case 4:this.setState({step:this.state.step-1,step1:"row d-none",step2:"row d-none",step3:"row d-none",step4:"row ",step5:"row d-none",step6:"row d-none"})}}componentDidMount(){this.props.dispatch(Object(d.xb)()),this.props.dispatch(Object(d.Sb)()),this.props.dispatch(Object(d.Hb)()),this.props.dispatch(Object(d.Nb)()),this.props.change("tanggal_masuk",Object(u.c)()),Object(h.b)("daftar-service/generate/no-trx").then(e=>this.props.change("no_faktur",e.data[0].no_daftar_service))}cariBooking(e){this.props.dispatch(Object(d.Vb)()),Object(h.b)("service/booking/"+e.target.value).then(e=>{if(0===e.data.length)return Object(c.h)("Nomor Booking Tidak Ada"),!1;this.setState({dataBooking:e.data}),this.props.change("booking_customer",String(e.data.kode_customer)),this.props.change("booking_nopol",e.data.nopol_kendaraan),this.props.change("kode_mekanik",e.data.kode_pegawai),this.setState({customer:"col-lg-12 row d-none"})}).then(()=>this.props.dispatch(Object(d.Ub)())).catch(e=>{Object(c.h)("Booking Tidak Ditemukan.. Mohon Periksa Kembali"),this.setState({customer:"col-lg-12 row"}),this.props.dispatch(Object(d.Ub)())})}setCustomer(e){let a=e.split("||");this.props.change("alamat",a[1]),this.props.change("kota",a[2]),this.props.change("handphone",a[3]),this.props.change("nopol_kendaraan",a[4]),this.props.change("merk_kendaraan",a[5]),this.props.change("type_kendaraan",a[6]),this.props.change("warna_kendaraan",a[7]),this.props.change("nomesin_kendaraan",a[8])}getMember(){this.setState({member:!0,reguler:!1}),this.props.change("pelaggan",""),Object(h.b)("member/get-member-all").then(e=>this.setState({listCustomer:e&&e.data.map(e=>{return{value:"".concat(e.kode_customer,"||").concat(e.alamat,"||").concat(e.kota,"||").concat(e.handphone,"||").concat(e.nopol_kendaraan,"||").concat(e.merk_kendaraan,"||").concat(e.type_kendaraan,"||").concat(e.warna_kendaraan,"||").concat(e.nomesin_kendaraan),name:e.nama_customer}})})).catch(()=>Object(c.h)("Error Get Member"))}getCustomer(){this.setState({member:!1,reguler:!0}),this.props.change("pelaggan",""),Object(h.b)("customer/get/all").then(e=>this.setState({listCustomer:e&&e.data.map(e=>{return{value:"".concat(e.kode_customer,"||").concat(e.alamat,"||").concat(e.kota,"||").concat(e.handphone,"||").concat(e.nopol_kendaraan,"||").concat(e.merk_kendaraan,"||").concat(e.type_kendaraan,"||").concat(e.warna_kendaraan,"||").concat(e.nomesin_kendaraan),name:e.nama_customer}})}))}render(){return s.a.createElement("div",null,s.a.createElement("form",{onSubmit:this.props.handleSubmit,onKeyPress:e=>{"Enter"===e.key&&e.preventDefault()}},s.a.createElement("div",{className:"col-lg-12"},s.a.createElement("div",{className:"col-lg-12 mb-5"},s.a.createElement(m.a,{steps:[{title:"Data Customer",onClick:()=>{this.prevStep(1)}},{title:"Data Dokumen"},{title:"Data Service List"},{title:"Data Mekanik & Catatan"}],activeStep:this.state.step})),s.a.createElement("div",{className:this.state.step1},s.a.createElement("div",{className:"col-lg-12"},s.a.createElement("h5",null,"Sudah Booking ? Masukan kodenya di kolom bawah")),s.a.createElement("div",{className:"col-lg-4"},s.a.createElement(r.a,{name:"booking",component:c.g,type:"text",label:"Nomor Booking",placeholder:"Masukan Nomor Booking ",handleClick:this.props.showBooking,onChange:e=>this.cariBooking(e)})),s.a.createElement("div",{className:"col-lg-4"},s.a.createElement(r.a,{name:"booking_customer",component:c.e,options:this.props.listcustomer.map(e=>{return{value:e.kode_customer,name:e.nama_customer}}),type:"text",label:"Nama Customer",placeholder:"Masukan Nama Customer",readOnly:!0,loading:this.props.onSend}),s.a.createElement("span",null,"Otomatis Terisi Saat nomor Booking diisi")),s.a.createElement("div",{className:"col-lg-4"},s.a.createElement(r.a,{name:"booking_nopol",component:c.c,type:"text",label:"Nomor Polisi",placeholder:"Masukan Nomor Polisi",readOnly:!0,loading:this.props.onSend}),s.a.createElement("span",null,"Otomatis Terisi Saat nomor Booking diisi")),s.a.createElement("div",{className:this.state.customer},s.a.createElement("div",{className:"col-lg-12"},s.a.createElement("h4",null,"Data Customer")),s.a.createElement("div",{className:"col-lg-3"},s.a.createElement("label",{className:"mb-4"},"Jenis Penjualan"),s.a.createElement("div",null,s.a.createElement("label",null,s.a.createElement(r.a,{name:"jenis_penjualan",component:"input",type:"radio",value:"member",className:"mr-3",onClick:()=>this.getMember(),checked:this.state.member}),"Member"),s.a.createElement("label",{className:"ml-3"},s.a.createElement(r.a,{name:"jenis_penjualan",component:"input",type:"radio",value:"reguler",className:"mr-3",onClick:()=>this.getCustomer(),checked:this.state.reguler}),"Reguler"))),s.a.createElement("div",{className:"col-lg-3"},s.a.createElement(r.a,{name:"nama",component:c.e,options:this.state.listCustomer,type:"text",label:"Nama",placeholder:"Masukan Nama",onChange:e=>this.setCustomer(e)})),s.a.createElement("div",{className:"col-lg-3"},s.a.createElement(r.a,{name:"alamat",component:c.c,type:"text",label:"Alamat",placeholder:"Masukan Alamat",readOnly:!0})),s.a.createElement("div",{className:"col-lg-3 d-none"},s.a.createElement(r.a,{name:"no_faktur",component:c.c,type:"text",label:"Alamat",placeholder:"Masukan Alamat",readOnly:!0})),s.a.createElement("div",{className:"col-lg-3"},s.a.createElement(r.a,{name:"kota",component:c.c,type:"text",label:"Kota",placeholder:"Masukan Kota",readOnly:!0})),s.a.createElement("div",{className:"col-lg-3"},s.a.createElement(r.a,{name:"handphone",component:c.c,type:"text",label:"Handphone",placeholder:"Masukan Handphone",readOnly:!0})),s.a.createElement("div",{className:"col-lg-3"},s.a.createElement(r.a,{name:"nopol_kendaraan",component:c.c,type:"text",label:"Nomor Polisi",placeholder:"Masukan Nomor Polisi",readOnly:!0})),s.a.createElement("div",{className:"col-lg-3"},s.a.createElement(r.a,{name:"type_kendaraan",component:c.c,type:"text",label:"Type",placeholder:"Masukan Type",readOnly:!0})),s.a.createElement("div",{className:"col-lg-3"},s.a.createElement(r.a,{name:"nomesin_kendaraan",component:c.c,type:"text",label:"Nomor Mesin",placeholder:"Masukan Nomor Mesin",readOnly:!0}))),s.a.createElement(i.a,{first:!0,nextStep:()=>this.nextStep(0)})),s.a.createElement("div",{className:this.state.step2},s.a.createElement("div",{className:"col-lg-3"},s.a.createElement(r.a,{name:"tanggal_masuk",component:c.c,type:"date",label:"Tanggal Masuk",placeholder:"Masukan Tanggal Masuk"})),s.a.createElement("div",{className:"col-lg-3"},s.a.createElement(r.a,{name:"km_masuk",component:c.c,type:"number",label:"KM Masuk",placeholder:"Masukan KM Masuk"})),s.a.createElement("div",{className:"col-lg-3"},s.a.createElement(r.a,{name:"service_selanjutnya",component:c.c,type:"date",label:"Jadwal Service Selanjutnya",placeholder:"Masukan Jadwal Service Selanjutnya"})),s.a.createElement("div",{className:"col-lg-3"},s.a.createElement(r.a,{name:"tanggal_keluar",component:c.c,type:"date",label:"Tanggal Keluar",placeholder:"Masukan Tanggal Keluar"})),s.a.createElement("div",{className:"col-lg-3"},s.a.createElement(r.a,{name:"km_keluar",component:c.c,type:"number",label:"KM Keluar",placeholder:"Masukan KM Keluar"})),s.a.createElement("div",{className:"col-lg-3"},s.a.createElement(r.a,{name:"km_service_berikutnya",component:c.c,type:"number",label:"KM Service Berikutnya",placeholder:"Masukan KM Service Berikutnya"})),s.a.createElement(i.a,{nextStep:()=>this.nextStep(1),prevStep:()=>this.prevStep(1)})),s.a.createElement("div",{className:this.state.step3},s.a.createElement(k.a,{columns:this.state.columns,keyField:"kategori_service",data:this.props.listdaftarservice||[],tambahData:!0,handleClick:this.props.showBarang}),s.a.createElement(i.a,{nextStep:()=>this.nextStep(2),prevStep:()=>this.prevStep(2)})),s.a.createElement("div",{className:this.state.step4},s.a.createElement("div",{className:"col-lg-12"},s.a.createElement(r.a,{name:"keluhan_konsumen",component:c.d,type:"text",label:"Keluhan Konsumen",placeholder:"Masukan Keluhan Konsumen"})),s.a.createElement("div",{className:"col-lg-6"},s.a.createElement(r.a,{name:"kode_mekanik",component:c.e,options:this.props.listsales.filter(e=>"MKN"===e.kode_divisi).map(e=>{return{value:"".concat(e.kode_pegawai),name:"".concat(e.kode_pegawai," - ").concat(e.nama_pegawai)}}),type:"text",label:"ID Mekanik",placeholder:"Masukan ID Mekanik"})),s.a.createElement(i.a,{nextStep:()=>this.setState({step1:"row",step2:"row d-none",step3:"row d-none",step4:"row d-none",step5:"row d-none",step6:"row d-none"}),prevStep:()=>this.prevStep(3),simpan:!0})))))}}b=Object(l.a)({form:"ModalDaftarService",enableReinitialize:!0})(b),a.default=Object(o.b)(e=>({listcustomer:e.datamaster.listcustomer,listkendaraan:e.datamaster.listkendaraan,listwarna:e.datamaster.listwarna,listdaftarservice:e.transaksi.listdaftarservice,listsales:e.datamaster.listsales,no_faktur:localStorage.getItem("no_daftar_service")||"",onSend:e.datamaster.onSend}))(b)},557:function(e,a,t){"use strict";var n=t(0),s=t.n(n);a.a=class extends n.Component{render(){return s.a.createElement("div",{className:"col-lg-12 mt-3 mb-3"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-6"},s.a.createElement("div",{className:"text-left"},s.a.createElement("button",{type:"button",className:this.props.first?"btn btn-warning d-none":"btn btn-warning",onClick:this.props.prevStep},s.a.createElement("i",{className:"fa fa-chevron-left mr-3"}),"Back"))),s.a.createElement("div",{className:"col-lg-6"},s.a.createElement("div",{className:"text-right"},s.a.createElement("button",{type:this.props.simpan?"submit":"button",className:this.props.last?"btn btn-warning d-none":"btn btn-warning",onClick:this.props.nextStep},this.props.simpan?s.a.createElement(s.a.Fragment,null,"Simpan ",s.a.createElement("i",{className:"fa fa-paper-plane ml-3"})):s.a.createElement(s.a.Fragment,null,"Next ",s.a.createElement("i",{className:"fa fa-chevron-right ml-3"})))))))}}},591:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n,s=t(555),o=(n=s)&&n.__esModule?n:{default:n};a.default=o.default}}]);
//# sourceMappingURL=19.69444f58.chunk.js.map