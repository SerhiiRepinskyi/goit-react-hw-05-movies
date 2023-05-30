"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[885],{44:function(n,t,e){e.d(t,{Z:function(){return i}});var r,a=e(402),o=e(168),c=e(444).ZP.div(r||(r=(0,o.Z)(["\n  display: flex;\n  justify-content: center;\n  z-index: 999;\n"]))),u=e(184);function i(){return(0,u.jsx)(c,{children:(0,u.jsx)(a.s5,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"96",visible:!0})})}},723:function(n,t,e){e.d(t,{Z:function(){return x}});var r,a,o,c=e(689),u=e(168),i=e(444),s=e(87),p=i.ZP.ul(r||(r=(0,u.Z)(["\n  padding-left: 50px;\n"]))),f=i.ZP.li(a||(a=(0,u.Z)(["\n  & a {\n    text-decoration: none;\n  }\n"]))),d=(0,i.ZP)(s.Link)(o||(o=(0,u.Z)(["\n  color: black;\n  font-size: 18px;\n  line-height: 1.5;\n  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    border-bottom 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover,\n  &:focus {\n    color: #2196f3;\n    border-bottom: 2px solid #2196f3;\n  }\n"]))),l=e(184),x=function(n){var t=n.movies,e=(0,c.TH)();return(0,l.jsx)(p,{children:t.map((function(n){var t=n.id,r=n.title;return(0,l.jsx)(f,{children:(0,l.jsx)(d,{to:"/movies/".concat(t),state:{from:e},children:r})},t)}))})}},885:function(n,t,e){e.r(t),e.d(t,{default:function(){return j}});var r,a,o,c,u=e(861),i=e(439),s=e(757),p=e.n(s),f=e(87),d=e(791),l=e(367),x=e(44),h=e(723),b=e(168),m=e(444),v=m.ZP.form(r||(r=(0,b.Z)(["\n  margin-top: 20px;\n  margin-bottom: 20px;\n\n  display: flex;\n  justify-content: center;\n  gap: 30px;\n"]))),w=m.ZP.input(a||(a=(0,b.Z)(["\n  width: 250px;\n  font-size: 18px;\n  padding: 5px 12px;\n\n  border: 1px solid #2196f3;\n  border-radius: 6px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\n"]))),g=m.ZP.button(o||(o=(0,b.Z)(["\n  cursor: pointer;\n\n  width: 100%;\n  max-width: 120px;\n  // height: 30px;\n  padding: 2px 5px;\n\n  color: #010101;\n  font-size: 18px;\n  font-weight: 500;\n  background-color: #79caea;\n\n  border: none;\n  border-radius: 6px;\n  box-shadow: rgba(0, 0, 0, 0.24) 8px 8px 5px 0px;\n\n  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover,\n  &:focus {\n    color: #fff;\n    background-color: #9bd6ee;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\n  }\n"]))),Z=e(184),k=function(n){var t=n.onSubmit,e=n.movieName,r=(0,d.useState)(e),a=(0,i.Z)(r,2),o=a[0],c=a[1];return(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsxs)(v,{onSubmit:function(n){n.preventDefault(),""!==o.trim()?t(o):alert("Hello! :-)) Finally enter your search query!")},children:[(0,Z.jsx)(w,{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies",value:o,onChange:function(n){c(n.currentTarget.value)}}),(0,Z.jsx)(g,{type:"submit",children:"Search"})]})})},y=m.ZP.section(c||(c=(0,b.Z)(["\n  padding: 20px;\n"]))),j=function(){var n,t=(0,d.useState)([]),e=(0,i.Z)(t,2),r=e[0],a=e[1],o=(0,d.useState)(!1),c=(0,i.Z)(o,2),s=c[0],b=c[1],m=(0,d.useState)(""),v=(0,i.Z)(m,2),w=v[0],g=v[1],j=(0,f.useSearchParams)(),S=(0,i.Z)(j,2),_=S[0],z=S[1],E=null!==(n=_.get("name"))&&void 0!==n?n:"";(0,d.useEffect)((function(){if(E){var n=function(){var n=(0,u.Z)(p().mark((function n(){var t;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return b(!0),n.prev=1,n.next=4,(0,l.E3)(E);case 4:if((t=n.sent).total_results){n.next=8;break}throw a([]),new Error("No data! :-(");case 8:a(t.results),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(1),g(n.t0);case 14:return n.prev=14,b(!1),n.finish(14);case 17:case"end":return n.stop()}}),n,null,[[1,11,14,17]])})));return function(){return n.apply(this,arguments)}}();n()}}),[E]);return(0,Z.jsxs)(y,{children:[(0,Z.jsx)(k,{onSubmit:function(n){if(!n)return z({}),void a([]);z({name:n}),g("")},movieName:E}),s&&(0,Z.jsx)(x.Z,{}),w&&(0,Z.jsx)("p",{children:"Ooops... Sorry!!! Nothing was found for your query!"}),(0,Z.jsx)(h.Z,{movies:r})]})}},367:function(n,t,e){e.d(t,{E3:function(){return l},Hx:function(){return w},Mc:function(){return h},_k:function(){return f},uV:function(){return m}});var r=e(861),a=e(757),o=e.n(a),c=e(243),u="https://api.themoviedb.org",i="4bf150e89573609a4e50188ee97df75b",s="movie",p="en-US";function f(){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(o().mark((function n(){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(u,"/3/trending/").concat(s,"/").concat("day","?api_key=").concat(i));case 2:if((t=n.sent).status){n.next=5;break}throw new Error(t.status);case 5:return n.abrupt("return",t.data);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(u,"/3/search/").concat(s,"?api_key=").concat(i,"&language=").concat(p,"&query=").concat(t,"&page=1&include_adult=false"));case 2:if((e=n.sent).status){n.next=5;break}throw new Error(e.status);case 5:return n.abrupt("return",e.data);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return b.apply(this,arguments)}function b(){return(b=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(u,"/3/").concat(s,"/").concat(t,"?api_key=").concat(i,"&language=").concat(p));case 2:if((e=n.sent).status){n.next=5;break}throw new Error(e.status);case 5:return n.abrupt("return",e.data);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(u,"/3/").concat(s,"/").concat(t,"/credits?api_key=").concat(i,"&language=").concat(p));case 2:if((e=n.sent).status){n.next=5;break}throw new Error(e.status);case 5:return n.abrupt("return",e.data);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function w(n){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(u,"/3/").concat(s,"/").concat(t,"/reviews?api_key=").concat(i,"&language=").concat(p));case 2:if((e=n.sent).status){n.next=5;break}throw new Error(e.status);case 5:return n.abrupt("return",e.data);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=885.46937528.chunk.js.map