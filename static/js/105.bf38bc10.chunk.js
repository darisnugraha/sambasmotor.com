(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{1077:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(29),s=t(7),c=t(5),i=t(9),m=t(27),o=t(41),d=t(131),p=t(94),h=t.n(p),b=t(63),u=t.n(b),E=t(49),k=t(197),N=t(52),v=t(95),g=t.n(v);const f=b.Search.SearchBar;class x extends n.Component{constructor(e){super(e),this.state={columns:[{dataField:"nama_customer",text:"Nama Customer"},{dataField:"alamat",text:"Alamat"},{dataField:"kota",text:"Kota"},{dataField:"no_ktp",text:"Nomor KTP"},{dataField:"tgl_lahir",text:"Tangga Lahir"},{dataField:"handphone",text:"Handphone"},{dataField:"nopol_kendaraan",text:"Nomor Polisi"},{dataField:"action",text:"Action",csvExport:!1,headerClasses:"text-center",formatter:(e,a,t)=>(this.setState({}),l.a.createElement("div",{className:"row text-center"},l.a.createElement("div",{className:"col-12"},l.a.createElement("button",{className:"btn btn-warning mr-3",onClick:()=>this.pilih(a.kode_customer)},"Pilih",l.a.createElement("i",{className:"fa fa-gift ml-2"})))))}]}}componentDidMount(){this.props.dispatch(Object(N.g)()),this.props.dispatch(Object(N.h)())}pilih(e){this.props.dispatch(Object(N.j)(e)),this.props.dispatch(Object(c.Wb)())}render(){return l.a.createElement("form",{onSubmit:this.props.handleSubmit,onKeyPress:e=>{"Enter"===e.key&&e.preventDefault()}},l.a.createElement("div",{className:"row"},l.a.createElement(u.a,{keyField:"no_ktp",data:this.props.listmember||[],columns:this.state.columns,search:!0,exportCSV:{fileName:"Export Master Kategori.csv"}},e=>l.a.createElement("div",{className:"row mt-3"},l.a.createElement("div",{className:"col-6"},l.a.createElement("div",{className:"text-left"},l.a.createElement(f,e.searchProps))),l.a.createElement("hr",null),l.a.createElement("div",{className:"col-12 mt-3"},l.a.createElement(h.a,Object.assign({pagination:g()()},e.baseProps)),l.a.createElement("br",null)))),l.a.createElement("div",{className:"col-lg-12"},l.a.createElement("div",{className:"text-right"},l.a.createElement("button",{className:"btn btn-primary",disabled:this.props.onSend,onClick:()=>this.props(Object(E.b)("HeadTukarPoint"))},this.props.onSend?l.a.createElement(l.a.Fragment,null,l.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Menyimpan"):l.a.createElement(l.a.Fragment,null,"Simpan ",l.a.createElement("i",{className:"fa fa-paper-plane ml-3 "})))))))}}x=Object(k.a)({form:"HeadTukarPoint",enableReinitialize:!0})(x);var j=Object(r.b)(e=>({listhadiah:e.member.listhadiah,listmember:e.member.listmember,onSend:e.datamaster.onSend}))(x),O=t(196);class S extends n.Component{constructor(e){super(e),this.state={}}componentDidMount(){this.props.dispatch(Object(N.g)())}render(){return l.a.createElement("form",{onSubmit:this.props.handleSubmit,onKeyPress:e=>{"Enter"===e.key&&e.preventDefault()}},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-3 d-none"},l.a.createElement(O.a,{name:"kode_customer",component:m.c,type:"text",label:"Kode Customer",placeholder:"Masukan Kode Customer"})),l.a.createElement("div",{className:"col-lg-2"}),l.a.createElement("div",{className:"col-lg-8"},l.a.createElement(O.a,{name:"kode_hadiah",component:m.e,options:this.props.listhadiah.map(e=>{return{value:e.kode_hadiah,name:e.nama_hadiah}}),type:"text",label:"Hadiah",placeholder:"Masukan Hadiah"})),l.a.createElement("div",{className:"col-lg-12"},l.a.createElement("div",{className:"text-right"},l.a.createElement("button",{className:"btn btn-primary"},"Simpan ",l.a.createElement("i",{className:"fa fa-paper-plane"}))))))}}S=Object(k.a)({form:"ModalTukar",enableReinitialize:!0})(S);var _=Object(r.b)(e=>({listhadiah:e.member.listhadiah,initialValues:{kode_customer:e.member.customerpilihan}}))(S);a.default=Object(r.b)()(class extends n.Component{constructor(e){super(e),this.state={}}handleSubmit(e){this.props.dispatch(Object(c.Vb)());let a={kode_customer:e.kode_customer,kode_hadiah:e.kode_hadiah};Object(i.c)("member/tukar-poin",a).then(()=>Object(m.b)("Tukar Point Berhasil")).then(()=>this.props.dispatch(Object(c.Tb)())).then(()=>this.props.dispatch(Object(c.Ub)())).catch(e=>Object(m.a)("Gagal Tukar Point , ".concat(e)).then(()=>this.props.dispatch(Object(c.Ub)())))}render(){return l.a.createElement("div",null,l.a.createElement("ol",{className:"breadcrumb float-xl-right"},l.a.createElement("li",{className:"breadcrumb-item"},l.a.createElement(s.b,{to:"#"},"Member")),l.a.createElement("li",{className:"breadcrumb-item active"},"Tukar Point")),l.a.createElement("h1",{className:"page-header"}," Tukar Point "),l.a.createElement(o.a,null,l.a.createElement(o.c,null," Tukar Point"),l.a.createElement(o.b,null,l.a.createElement("div",{className:"col-lg-12 mt-3"},l.a.createElement(j,null)))),l.a.createElement(d.a,{size:"l",content:l.a.createElement(_,{onSubmit:e=>this.handleSubmit(e)})}))}})}}]);
//# sourceMappingURL=105.bf38bc10.chunk.js.map