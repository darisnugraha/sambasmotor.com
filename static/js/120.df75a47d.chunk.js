(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{1034:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),c=t(33),s=t(160),r=t(161),o=t(10),i=t(44);class p extends l.Component{constructor(e){super(e),this.state={hasilBarcode:[],listSupplier:[],stock:0}}getBarcode(e){Object(o.b)("permintaan-barang/get/BarangByBarcode/"+e.target.value).then(e=>this.setState({hasilBarcode:e.data})).then(()=>this.setDetail()).catch(e=>console.log(e))}setDetail(){this.props.change("nama_barang",this.state.hasilBarcode[0].nama_barang),this.props.change("merk",this.state.hasilBarcode[0].merk_barang),this.props.change("kwalitas",this.state.hasilBarcode[0].kwalitas),this.props.change("ukuran",this.state.hasilBarcode[0].ukuran);let e=this.state.hasilBarcode[0].data_supplier.map(e=>{return{value:e.kode_supplier+"||"+e.stock,name:"".concat(e.nama_supplier," ( ").concat(e.kode_supplier,")")}});this.setState({listSupplier:e})}setStock(e){let a=(e||"0||0").split("||");this.setState({stock:a[1]}),this.props.change("kode_supplier",a[0]),this.props.change("stock",a[1])}render(){return n.a.createElement("form",{onSubmit:this.props.handleSubmit},n.a.createElement("div",{className:"col-lg-12"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-6"},n.a.createElement(s.a,{name:"kode_barcode",component:i.c,type:"text",label:"Kode Barcode",placeholder:"Masukan Kode Barcode",onChange:e=>this.getBarcode(e),onBlur:e=>this.getBarcode(e)})),n.a.createElement("div",{className:"col-lg-6"}),n.a.createElement("div",{className:"col-lg-6"},n.a.createElement(s.a,{name:"nama_barang",component:i.c,type:"text",label:"Nama Barang",placeholder:"Masukan Nama Barang",readOnly:!0})),n.a.createElement("div",{className:"col-lg-3"},n.a.createElement(s.a,{name:"merk",component:i.c,type:"text",label:"Merk",placeholder:"Masukan Merk",readOnly:!0})),n.a.createElement("div",{className:"col-lg-3"},n.a.createElement(s.a,{name:"kwalitas",component:i.c,type:"text",label:"Kwalitas",placeholder:"Masukan Kwalitas",readOnly:!0})),n.a.createElement("div",{className:"col-lg-3"},n.a.createElement(s.a,{name:"ukuran",component:i.c,type:"text",label:"Ukuran",placeholder:"Masukan Ukuran",readOnly:!0})),n.a.createElement("div",{className:"col-lg-3"},n.a.createElement(s.a,{name:"kode_supplier1",component:i.e,options:this.state.listSupplier||[],onChange:e=>this.setStock(e),type:"text",label:"Kode Supplier",placeholder:"Masukan Kode Supplier"})),n.a.createElement("div",{className:"col-lg-3 d-none"},n.a.createElement(s.a,{name:"kode_supplier",component:i.c,type:"text",label:"Kode Supplier",placeholder:"Masukan Kode Supplier"})),n.a.createElement("div",{className:"col-lg-3"},n.a.createElement(s.a,{name:"stock",component:i.c,type:"text",label:"Stock",placeholder:"Masukan Stock",readOnly:!0})),n.a.createElement("div",{className:"col-lg-3"},n.a.createElement(s.a,{name:"qty",component:i.c,type:"text",label:"Qty",placeholder:"Masukan Qty"})))),n.a.createElement("div",{className:"col-lg-12"},n.a.createElement("div",{className:"text-right"},n.a.createElement("button",{className:"btn btn-primary"},"Simpan ",n.a.createElement("i",{className:"fa fa-paper-plane"})))))}}p=Object(r.a)({form:"ModalPermintaanBarang",enableReinitialize:!0,validate:e=>{const a={};return parseInt(e.stock)<parseInt(e.qty)&&(a.qty="Jumlah Melebihi stock, mohon kuragi"),a}})(p),a.default=Object(c.b)()(p)}}]);
//# sourceMappingURL=120.df75a47d.chunk.js.map