(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{1095:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),m=t(29),r=t(7),c=t(5),s=t(9),o=t(27),i=t(41),p=t(196),b=t(197),d=t(52),u=t(487);class h extends n.Component{constructor(e){super(e),this.state={}}componentDidMount(){this.props.dispatch(Object(d.h)())}render(){return l.a.createElement("form",{onSubmit:this.props.handleSubmit,onKeyPress:e=>{"Enter"===e.key&&e.preventDefault()}},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-3"},l.a.createElement(p.a,{name:"kode_customer",component:o.e,options:this.props.listmember.map(e=>{return{value:e.kode_customer,name:e.nama_customer}}),type:"text",label:"Kode Member",validate:u.a,placeholder:"Masukan Kode Member"})),l.a.createElement("div",{className:"col-lg-3"},l.a.createElement(p.a,{name:"jenis",component:o.e,options:[{value:"TAMBAH POINT MANUAL",name:" TAMBAH POINT MANUAL"},{value:"AMBIL POINT MANUAL",name:" AMBIL POINT MANUAL"}],type:"text",label:"Type",placeholder:"Masukan Type",validat:u.a})),l.a.createElement("div",{className:"col-lg-3"},l.a.createElement(p.a,{name:"poin",component:o.c,type:"text",label:"Point",placeholder:"Masukan Point",validate:u.a})),l.a.createElement("div",{className:"col-lg-12"},l.a.createElement("div",{className:"text-right"},l.a.createElement("button",{className:"btn btn-primary",disabled:this.props.onSend},this.props.onSend?l.a.createElement(l.a.Fragment,null,l.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Menyimpan"):l.a.createElement(l.a.Fragment,null,"Simpan ",l.a.createElement("i",{className:"fa fa-paper-plane ml-3 "})))))))}}h=Object(b.a)({form:"HeadTambahPointManual",enableReinitialize:!0})(h);var E=Object(m.b)(e=>({listmember:e.member.listmember,onSend:e.datamaster.onSend}))(h);a.default=Object(m.b)()(class extends n.Component{constructor(e){super(e),this.state={}}handleSubmit(e){this.props.dispatch(Object(c.Vb)());let a={kode_customer:e.kode_customer,jenis_trx:e.jenis,poin:e.poin};Object(s.c)("member/tambah-ambil-poin-manual",a).then(()=>this.props.dispatch(Object(c.Ub)())).then(()=>Object(o.b)("".concat(e.jenis," Berhasil")).catch(a=>Object(o.a)("Gagal ".concat(e.jenis,", Error: ").concat(a.response.data)).then(()=>this.props.dispatch(Object(c.Ub)()))))}render(){return l.a.createElement("div",null,l.a.createElement("ol",{className:"breadcrumb float-xl-right"},l.a.createElement("li",{className:"breadcrumb-item"},l.a.createElement(r.b,{to:"#"},"Member")),l.a.createElement("li",{className:"breadcrumb-item active"},"Tambah / Ambil Point Manual")),l.a.createElement("h1",{className:"page-header"}," Tambah / Ambil Point Manual "),l.a.createElement(i.a,null,l.a.createElement(i.c,null," Tambah / Ambil Point Manual"),l.a.createElement(i.b,null,l.a.createElement("div",{className:"col-lg-12 mt-3"},l.a.createElement(E,{onSubmit:e=>this.handleSubmit(e)})))))}})},487:function(e,a,t){"use strict";t.d(a,"a",function(){return n});const n=e=>e?void 0:"Tidak Boleh Kosong"}}]);
//# sourceMappingURL=56.cdc2d201.chunk.js.map