(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{1023:function(e,t,a){"use strict";a.r(t);var i=a(0),s=a.n(i),r=a(7),c=a(41),n=a(29),o=a(15),l=a.n(o),d=a(18),h=a(5),b=a(131),p=a(42),m=a.n(p),g=a(9),u=a(49),v=a(132);const j=Object(i.lazy)(()=>a.e(29).then(a.bind(null,992))),k=(e,t)=>{l.a.fire({title:"Anda Yakin !!",text:"Ingin Menghapus Data Ini ?",icon:"warning",position:"top-center",cancelButtonText:"Tidak",showCancelButton:!0,confirmButtonText:"OK",showConfirmButton:!0}).then(a=>{a.isConfirmed&&Object(g.a)((void 0).props.dispatch,"kategori-service/delete/by-id-kategori-service/"+e).then(()=>t(Object(h.Tb)())).then(()=>t(Object(h.Gb)())).then(()=>Object(d.b)("Berhasil menghapus data"))})};t.default=Object(n.b)(e=>({hideModal:e.datamaster.modalDialog,onSend:e.datamaster.onSend,listkategoriservice:e.datamaster.listkategoriservice}),null)(class extends s.a.Component{constructor(e){super(e),this.state={isEdit:!1,modalDialog:!1,isLoading:!1,listParameter:[],columns:[{dataField:"id_kategori_service",text:"ID Kategori",sort:!0},{dataField:"kategori_service",text:"Jenis Kategori",sort:!0},{dataField:"jenis_service",text:"Jenis Service",sort:!0},{dataField:"action",text:"Action",csvExport:!1,headerClasses:"text-center",formatter:(e,t)=>(this.setState({}),s.a.createElement("div",{className:"row text-center"},s.a.createElement("div",{className:"col-12"},s.a.createElement("button",{onClick:()=>k(t.id_kategori_service,this.props.dispatch),className:"btn btn-danger"},"Hapus",s.a.createElement("i",{className:"fa fa-trash ml-2"})))))}],datakategori:[{jenis_service:"LISTRIK",jenis_kategori:"Kaki,Tune Up,Turun Mesin,Electric"}]}}componentDidMount(){this.props.dispatch(Object(h.Gb)())}editModal(e){this.props.dispatch(Object(h.Wb)()),this.props.dispatch(Object(h.ib)(e)),this.setState({isEdit:!0})}tambahModal(){this.props.dispatch(Object(h.Wb)()),this.props.dispatch(Object(h.ib)("")),this.setState({isEdit:!1})}handleSubmit(e){let t={id_kategori_service:e.id_kategori_service||"-",kategori_service:e.jenis_kategori||"-",jenis_service:e.jenis_service||"-"},a={jenis_service:e.jenis_service||"-"};this.state.isEdit?Object(g.d)(this.props.dispatch,"kategori-service/update/by-id-kategori-service/"+e.id_kategori_service||!1,a).then(()=>Object(d.b)("Berhasil Dirubah")).then(()=>this.props.dispatch(Object(u.a)("dataKategoriService"))).then(()=>this.props.dispatch(Object(h.Tb)())).then(()=>this.props.dispatch(Object(h.Gb)())).catch(e=>Object(d.a)("Sepertinya ada gangguan, Mohon ulang beberapa saat lagi")):Object(g.c)("kategori-service/add",t).then(()=>Object(d.b)("Berhasil Ditambahkan")).then(()=>this.props.dispatch(Object(u.a)("dataKategoriService"))).then(()=>this.props.dispatch(Object(h.Tb)())).then(()=>this.props.dispatch(Object(h.Gb)())).catch(t=>this.handleReactive(t,e.id_kategori_service,a))}handleReactive(e,t,a){this.props.dispatch(Object(h.Tb)()),e.response.data.includes("hapus")?Object(d.m)(e,t,"kategori-service/reactive/by-id-kategori-service/",a,"kategori-service/update/by-id-kategori-service/").then(()=>this.props.dispatch(Object(h.Gb)())):Object(d.a)("Data Gagal Ditambahkan")}render(){return s.a.createElement("div",null,s.a.createElement("ol",{className:"breadcrumb float-xl-right"},s.a.createElement("li",{className:"breadcrumb-item"},s.a.createElement(r.b,{to:"#"},"Data Master")),s.a.createElement("li",{className:"breadcrumb-item active"},"Master Kategori Service")),s.a.createElement("h1",{className:"page-header"},"Master Kategori Service "),s.a.createElement(c.a,null,s.a.createElement(c.c,null,"Master Kategori Service"),s.a.createElement(c.b,null,s.a.createElement("br",null),s.a.createElement("div",{className:"col-lg-12"},s.a.createElement(v.a,{keyField:"no_acc",data:this.props.listkategoriservice||[],columns:this.state.columns,CSVExport:!0,tambahData:!0,handleClick:()=>this.tambahModal()})),s.a.createElement("br",null)),s.a.createElement(b.a,{title:this.state.isEdit?"Edit Data Kategori Service":"Tambah Data Kategori Service",content:s.a.createElement(i.Suspense,{fallback:s.a.createElement(m.a,{width:"100%",height:50,count:2})},s.a.createElement(j,{onSubmit:e=>this.handleSubmit(e),onSend:this.props.onSend,isEdit:this.state.isEdit}))})))}})}}]);
//# sourceMappingURL=70.e4387bad.chunk.js.map