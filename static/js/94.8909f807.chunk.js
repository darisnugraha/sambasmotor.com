(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{1037:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(19),o=a(14),c=a.n(o),l=a(54),d=a(122),r=a(15);const h=Object(n.lazy)(()=>Promise.all([a.e(3),a.e(82)]).then(a.bind(null,1007)));class m extends s.a.Component{constructor(e){super(e),this.state={date:""},this.getDate=(()=>{var e=(new Date).toDateString();this.setState({date:e})}),this.state={isLoading:!1}}componentDidMount(){Object(l.b)("islogin")===Object(l.a)()&&this.props.history.push("/dashboard"),window.history.pushState(null,document.title,window.location.href),window.addEventListener("popstate",function(e){window.history.pushState(null,document.title,window.location.href)}),this.context.handleSetPageSidebar(!1),this.context.handleSetPageHeader(!1),this.context.handleSetBodyWhiteBg(!0),this.getDate()}componentWillUnmount(){this.context.handleSetPageSidebar(!0),this.context.handleSetPageHeader(!0),this.context.handleSetBodyWhiteBg(!1)}onfiled(e){c.a.fire({title:"Whops..",text:"Sepertinya Username atau password salah, Mohon Cek Kembali",icon:"info"}),this.setState({isLoading:!1})}onSubmit(e){let t={user_id:e.user_id,password:e.password};this.setState({isLoading:!0}),Object(d.a)("users/login",t).then(e=>{Object(l.c)("userdata",JSON.stringify(e.data)),Object(l.c)("token",e.data.token),Object(l.c)("islogin",Object(l.a)())}).then(()=>this.props.history.push("/dashboard")).catch(e=>this.onfiled(e))}render(){return s.a.createElement("div",{className:"login login-with-news-feed"},s.a.createElement("div",{className:"news-feed"},s.a.createElement("div",{className:"news-image",style:{backgroundImage:"url(".concat(a(722),")")}}),s.a.createElement("div",{className:"news-caption"},s.a.createElement("h4",{className:"caption-title"},s.a.createElement("b",null,"Sambas")," Motor"),s.a.createElement("p",null,"Sambas Motor Admin Website V10."))),s.a.createElement("div",{className:"right-content"},s.a.createElement("div",{className:"login-header"},s.a.createElement("div",{className:"brand"},s.a.createElement("span",{className:"logo"})," ",s.a.createElement("b",null,"Sambas")," Motor"),s.a.createElement("div",{className:"icon"},s.a.createElement("i",{className:"fa fa-sign-in"}))),s.a.createElement("div",{className:"login-content"},s.a.createElement(h,{isLoading:this.state.isLoading,onSubmit:e=>this.onSubmit(e)}))))}}m.contextType=r.a,t.default=Object(i.f)(m)},722:function(e,t,a){e.exports=a.p+"static/media/login-bg-20.770fb86d.jpg"}}]);
//# sourceMappingURL=94.8909f807.chunk.js.map