"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{5415:function(e,t,n){n.r(t);var r=n(5861),a=n(885),i=n(7757),c=n.n(i),o=n(2791),u=n(470),s=n(6731),d=n(409),p=n(184);t.default=function(){var e=(0,o.useState)([]),t=(0,a.Z)(e,2),n=t[0],i=t[1],f=(0,u.TH)();return(0,o.useEffect)((function(){var e=function(){var e=(0,r.Z)(c().mark((function e(){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=(0,d.yE)(),e.next=4,t;case 4:n=e.sent.data.results,i(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e().catch(console.error)}),[]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("h2",{children:"Trending today"}),(0,p.jsx)("ul",{children:n.map((function(e){return(0,p.jsx)("li",{children:(0,p.jsx)(s.rU,{to:"movies/".concat(e.id),state:{from:f},children:e.title})},e.id)}))})]})}},409:function(e,t,n){n.d(t,{TP:function(){return c},Zh:function(){return o},tx:function(){return s},yE:function(){return i},zv:function(){return u}});var r=n(4569),a=n.n(r),i=function(){return a().get("https://api.themoviedb.org/3/trending/movie/day?api_key=b4310814d45548a58ae7b609ad259609")},c=function(e){return a().get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=b4310814d45548a58ae7b609ad259609&language=en-US"))},o=function(e){return a().get("https://api.themoviedb.org/3/search/movie?api_key=b4310814d45548a58ae7b609ad259609&language=en-US&page=1&include_adult=false&query=".concat(e))},u=function(e){return a().get("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=b4310814d45548a58ae7b609ad259609&language=en-US"))},s=function(e){return a().get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=b4310814d45548a58ae7b609ad259609&language=en-US"))}}}]);
//# sourceMappingURL=415.f9de2524.chunk.js.map