(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,function(e,a,t){e.exports=t.p+"static/media/logo.754b66a6.svg"},,,,,,function(e,a,t){e.exports=t.p+"static/media/social-instagram.bcb1bc7b.svg"},function(e,a,t){e.exports=t.p+"static/media/social-facebook.5e5b85ae.svg"},function(e,a,t){e.exports=t.p+"static/media/motto.2ac2b05d.svg"},function(e,a,t){e.exports=t.p+"static/media/leaves-half.c64fb01b.png"},function(e,a,t){e.exports=t.p+"static/media/Menu2.267efe0b.jpg"},function(e,a,t){e.exports=t.p+"static/media/Menu3.da72f335.jpg"},function(e,a,t){e.exports=t.p+"static/media/Menu4.8fe110d2.jpg"},function(e,a,t){e.exports=t.p+"static/media/Menu5.c07814c6.jpg"},function(e,a,t){e.exports=t.p+"static/media/Menu6.73d3a4ae.jpg"},function(e,a,t){e.exports=t(33)},,,,,,,,,function(e,a,t){},,function(e,a,t){"use strict";t.r(a);var c=t(0),n=t.n(c),s=t(12),l=t.n(s),i=(t(31),t(1)),r=t(2),m=t(4),o=t(3),u=t(5),d=t(6),f=t(7),p=t.n(f),E=t(13),v=t.n(E),h=t(14),b=t.n(h),g=function(e){function a(){var e,t;Object(i.a)(this,a);for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];return(t=Object(m.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(n)))).state={big:!0},t}return Object(u.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){var e=this,a=this.state.big;return n.a.createElement("div",{className:"header ".concat(a?"header--big":"")},n.a.createElement("div",{className:"line"},n.a.createElement("div",{className:"stripes"}),n.a.createElement("div",{className:"floral"})),a&&n.a.createElement("div",{className:"big-logo d-flex justify-content-center align-items-center"},n.a.createElement("a",{href:"/"},n.a.createElement("img",Object(d.a)({title:"chibs",alt:"chibs logo",className:"logo",src:p.a},"alt","Chibs")))),n.a.createElement("nav",{className:"container"},n.a.createElement("div",{className:"row"},!a&&n.a.createElement("div",{className:"col-2 d-flex align-items-center"},n.a.createElement("a",{href:"/"},n.a.createElement("img",{className:"logo",src:p.a,alt:"Chibs"}))),n.a.createElement("div",{className:"d-flex align-items-center "+(a?"col-10":"col-8")},n.a.createElement("a",{className:"navbar-item",href:"#hours",onClick:function(){return e.props.onLinkClick("hours")}},"Hours & Location"),n.a.createElement("span",{className:"dot"},"\u2022"),n.a.createElement("a",{className:"navbar-item",href:"#menu",onClick:function(){return e.props.onLinkClick("menu")}},"Menu"),n.a.createElement("span",{className:"dot"},"\u2022"),n.a.createElement("a",{className:"navbar-item",href:"#contact",onClick:function(){return e.props.onLinkClick("contact")}},"Info")),n.a.createElement("div",{className:"col-2 d-flex align-items-center justify-content-end"},n.a.createElement("a",{className:"navbar-item",href:"https://www.instagram.com/chibs_ph"},n.a.createElement("img",Object(d.a)({alt:"instagram",className:"social",src:v.a},"alt","instagram"))),n.a.createElement("a",{className:"navbar-item",href:"https://www.facebook.com/chibsph"},n.a.createElement("img",Object(d.a)({alt:"facebook",className:"social",src:b.a},"alt","facbook")))))))}}]),a}(n.a.Component);g.defaultProps={big:!0};var N=g,k=function(e){var a=e.type,t=e.location,c=e.address,s=e.number,l=e.hours;return n.a.createElement("div",{className:"ch-card ch-card--".concat(a)},n.a.createElement("div",{className:"info"},n.a.createElement("h3",null,t),n.a.createElement("div",null,c),n.a.createElement("div",null,s),n.a.createElement("div",null,l)))},w=function(e){var a=e.children,t=e.className,c=void 0===t?"":t,s=e.outRef,l=e.title,i=e.description;return n.a.createElement("div",{className:"section ".concat(c),ref:s},n.a.createElement("div",{className:"section-title"},l),n.a.createElement("h4",null,i),a)},j=t(15),C=t.n(j),y=t(16),x=t.n(y),R=t(17),O=t.n(R),L=t(18),M=t.n(L),A=t(19),B=t.n(A),H=t(20),I=t.n(H),J=t(21),S=t.n(J),F=function(e){function a(){var e;return Object(i.a)(this,a),(e=Object(m.a)(this,Object(o.a)(a).call(this))).onLinkClick=function(a){setTimeout(function(){return window.scroll({top:e["".concat(a,"Ref")].current.getBoundingClientRect().top-10,behavior:"smooth"})},100)},e.hoursRef=n.a.createRef(),e.menuRef=n.a.createRef(),e.contactRef=n.a.createRef(),e}return Object(u.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"chibs"},n.a.createElement(N,{onLinkClick:this.onLinkClick}),n.a.createElement("div",{className:"hero d-flex align-items-center justify-content-center"},n.a.createElement("img",{className:"motto",src:C.a,alt:"motto"})),n.a.createElement(w,{title:"Hours & Location",description:"Come join us at any of our 2 locations!",className:"hours",outRef:this.hoursRef},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm-6"},n.a.createElement(k,{type:"calamba",location:"SM City Calamba",address:"3rd floor",number:"(049) - 530 - 3041",hours:"10:00am - 9:00pm"})),n.a.createElement("div",{className:"col-sm-6"},n.a.createElement(k,{type:"lipa",location:"SM City Lipa",address:"2nd floor",number:"(049) - 530 - 3041",hours:"10:00am - 9:00pm"}))))),n.a.createElement(w,{title:"Menu",description:"A menu with a wide variety of options made with organic ingredients. You\u2019ve got to taste it to believe it.",className:"menu",outRef:this.menuRef},n.a.createElement("div",{className:"leaves-half"},n.a.createElement("img",{src:x.a})),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-6"},n.a.createElement("img",{className:"menu-page",src:O.a})),n.a.createElement("div",{className:"col-md-6"},n.a.createElement("img",{className:"menu-page",src:M.a}))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-6"},n.a.createElement("img",{className:"menu-page",src:B.a})),n.a.createElement("div",{className:"col-md-6"},n.a.createElement("img",{className:"menu-page",src:I.a}))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-6"},n.a.createElement("img",{className:"menu-page",src:S.a}))))),n.a.createElement(w,{title:"Contact Us",description:"Feel free to contact us for any additional information!",className:"contact",outRef:this.contactRef},n.a.createElement("div",null,n.a.createElement("b",null,"Email: "),"chibs.ph@gmail.com"),n.a.createElement("div",null,n.a.createElement("small",{style:{float:"right"}},"Chibs @2018. All rights reserved."))))}}]),a}(c.Component);l.a.render(n.a.createElement(F,null),document.getElementById("root"))}],[[22,2,1]]]);
//# sourceMappingURL=main.5a5567cb.chunk.js.map