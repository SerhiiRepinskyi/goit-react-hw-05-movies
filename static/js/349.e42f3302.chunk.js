"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[349],{44:function(t,n,e){e.d(n,{Z:function(){return s}});var r,a=e(402),c=e(168),o=e(444).ZP.div(r||(r=(0,c.Z)(["\n  display: flex;\n  justify-content: center;\n  z-index: 999;\n"]))),u=e(184);function s(){return(0,u.jsx)(o,{children:(0,u.jsx)(a.s5,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"96",visible:!0})})}},723:function(t,n,e){e.d(n,{Z:function(){return h}});var r,a,c,o=e(689),u=e(168),s=e(444),i=e(87),p=s.ZP.ul(r||(r=(0,u.Z)(["\n  padding-left: 50px;\n"]))),f=s.ZP.li(a||(a=(0,u.Z)(["\n  & a {\n    text-decoration: none;\n  }\n"]))),l=(0,s.ZP)(i.Link)(c||(c=(0,u.Z)(["\n  color: black;\n  font-size: 18px;\n  line-height: 1.5;\n  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    border-bottom 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover,\n  &:focus {\n    color: #2196f3;\n    border-bottom: 2px solid #2196f3;\n  }\n"]))),d=e(184),h=function(t){var n=t.movies,e=(0,o.TH)();return(0,d.jsx)(p,{children:n.map((function(t){var n=t.id,r=t.title;return(0,d.jsx)(f,{children:(0,d.jsx)(l,{to:"/movies/".concat(n),state:{from:e},children:r})},n)}))})}},349:function(t,n,e){e.r(n),e.d(n,{default:function(){return k}});var r,a,c=e(861),o=e(439),u=e(757),s=e.n(u),i=e(791),p=e(367),f=e(44),l=e(723),d=e(168),h=e(444),x=h.ZP.section(r||(r=(0,d.Z)(["\n  padding: 20px;\n"]))),v=h.ZP.h1(a||(a=(0,d.Z)(["\n  margin-top: 20px;\n  margin-bottom: 20px;\n\n  font-size: 30px;\n  font-weight: 700;\n  text-align: center;\n"]))),w=e(184),k=function(){var t=(0,i.useState)([]),n=(0,o.Z)(t,2),e=n[0],r=n[1],a=(0,i.useState)(!1),u=(0,o.Z)(a,2),d=u[0],h=u[1],k=(0,i.useState)(""),Z=(0,o.Z)(k,2),b=Z[0],g=Z[1];return(0,i.useEffect)((function(){var t=function(){var t=(0,c.Z)(s().mark((function t(){var n;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return h(!0),t.prev=1,t.next=4,(0,p._k)();case 4:if((n=t.sent).total_results){t.next=7;break}throw new Error("No data! :-(");case 7:r(n.results),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),g(t.t0);case 13:return t.prev=13,h(!1),t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[1,10,13,16]])})));return function(){return t.apply(this,arguments)}}();t()}),[]),(0,w.jsxs)(x,{children:[(0,w.jsx)(v,{children:"Trending today"}),d&&(0,w.jsx)(f.Z,{}),b&&(0,w.jsxs)("p",{children:["Error: ",b.message," Sorry, there are not trending movies. Please try again later!"]}),(0,w.jsx)(l.Z,{movies:e})]})}},367:function(t,n,e){e.d(n,{E3:function(){return d},Hx:function(){return Z},Mc:function(){return x},_k:function(){return f},uV:function(){return w}});var r=e(861),a=e(757),c=e.n(a),o=e(243),u="https://api.themoviedb.org",s="4bf150e89573609a4e50188ee97df75b",i="movie",p="en-US";function f(){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("".concat(u,"/3/trending/").concat(i,"/").concat("day","?api_key=").concat(s));case 2:if((n=t.sent).status){t.next=5;break}throw new Error(n.status);case 5:return t.abrupt("return",n.data);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("".concat(u,"/3/search/").concat(i,"?api_key=").concat(s,"&language=").concat(p,"&query=").concat(n,"&page=1&include_adult=false"));case 2:if((e=t.sent).status){t.next=5;break}throw new Error(e.status);case 5:return t.abrupt("return",e.data);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function x(t){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("".concat(u,"/3/").concat(i,"/").concat(n,"?api_key=").concat(s,"&language=").concat(p));case 2:if((e=t.sent).status){t.next=5;break}throw new Error(e.status);case 5:return t.abrupt("return",e.data);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function w(t){return k.apply(this,arguments)}function k(){return(k=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("".concat(u,"/3/").concat(i,"/").concat(n,"/credits?api_key=").concat(s,"&language=").concat(p));case 2:if((e=t.sent).status){t.next=5;break}throw new Error(e.status);case 5:return t.abrupt("return",e.data);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function Z(t){return b.apply(this,arguments)}function b(){return(b=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("".concat(u,"/3/").concat(i,"/").concat(n,"/reviews?api_key=").concat(s,"&language=").concat(p));case 2:if((e=t.sent).status){t.next=5;break}throw new Error(e.status);case 5:return t.abrupt("return",e.data);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=349.e42f3302.chunk.js.map