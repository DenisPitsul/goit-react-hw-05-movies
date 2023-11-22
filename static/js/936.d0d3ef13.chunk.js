"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[936],{829:function(e,n,t){t.d(n,{I:function(){return o}});var r=t(861),a=t(671),u=t(144),s=t(757),i=t.n(s),c=t(340),o=function(){function e(){(0,a.Z)(this,e)}return(0,u.Z)(e,null,[{key:"getTrandingMovies",value:function(){var n=(0,r.Z)(i().mark((function n(){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get(e.BASE_URL+"/trending/all/day?language=en-US",e.OPTIONS);case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()},{key:"getMoviesByQuery",value:function(){var n=(0,r.Z)(i().mark((function n(t){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get(e.BASE_URL+"/search/movie?query="+t+"&include_adult=false&language=en-US&page=1",e.OPTIONS);case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},{key:"getMovieDetailsById",value:function(){var n=(0,r.Z)(i().mark((function n(t){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get(e.BASE_URL+"/movie/"+t+"?language=en-US",e.OPTIONS);case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},{key:"getMovieCastById",value:function(){var n=(0,r.Z)(i().mark((function n(t){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get(e.BASE_URL+"/movie/"+t+"/credits?language=en-US",e.OPTIONS);case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},{key:"getMovieReviewsById",value:function(){var n=(0,r.Z)(i().mark((function n(t){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get(e.BASE_URL+"/movie/"+t+"/reviews?language=en-US&page=1",e.OPTIONS);case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}]),e}();o.BASE_URL="https://api.themoviedb.org/3",o.OPTIONS={headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZDE3MTA1ZTU5M2ZiMDI4NmI1OTg1OWRkZWRlOWNhMyIsInN1YiI6IjY1NWI0MjU3ZjY3ODdhMDBjNmNlZTEwZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.S8IgppWVE1ouikuk0fV5PZzs0a_uf8nC7c6XXjA5guU"}}},514:function(e,n,t){t.d(n,{Z:function(){return u}});var r="ErrorComp_errorText__dt8qk",a=t(184),u=function(e){var n=e.message;return(0,a.jsx)("p",{className:r,children:n})}},375:function(e,n,t){t.d(n,{U:function(){return c}});var r=t(861),a=t(439),u=t(757),s=t.n(u),i=t(791),c=function(e){var n=(0,i.useState)(!1),t=(0,a.Z)(n,2),u=t[0],c=t[1],o=(0,i.useState)(""),f=(0,a.Z)(o,2),l=f[0],p=f[1],v=function(){var n=(0,r.Z)(s().mark((function n(){var t=arguments;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,c(!0),n.next=4,e.apply(void 0,t);case 4:n.next=9;break;case 6:n.prev=6,n.t0=n.catch(0),p(n.t0.message);case 9:return n.prev=9,c(!1),n.finish(9);case 12:case"end":return n.stop()}}),n,null,[[0,6,9,12]])})));return function(){return n.apply(this,arguments)}}();return[v,u,l]}},936:function(e,n,t){t.r(n),t.d(n,{default:function(){return d}});var r=t(861),a=t(439),u=t(757),s=t.n(u),i={homeTitle:"Home_homeTitle__duF7K",homeList:"Home_homeList__kBzvV",homelink:"Home_homelink__GZBqV"},c=t(791),o=t(375),f=t(829),l=t(87),p=t(55),v=t(514),h=t(184),d=function(){var e=(0,c.useState)([]),n=(0,a.Z)(e,2),t=n[0],u=n[1],d=(0,o.U)((0,r.Z)(s().mark((function e(){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.I.getTrandingMovies();case 2:n=e.sent,u(n.results);case 4:case"end":return e.stop()}}),e)})))),m=(0,a.Z)(d,3),g=m[0],Z=m[1],_=m[2];return(0,c.useEffect)((function(){g()}),[]),(0,h.jsxs)("div",{className:"container",children:[(0,h.jsx)("h2",{className:i.homeTitle,children:"Trending today"}),Z?(0,h.jsx)(p.Z,{}):_?(0,h.jsx)(v.Z,{message:_}):(0,h.jsx)("ul",{className:i.homeList,children:t.map((function(e){var n=e.id,t=e.original_title;return(0,h.jsx)("li",{className:i.homeItem,children:(0,h.jsx)(l.rU,{className:i.homelink,to:"/movies/"+n,state:{from:"/"},children:t})},n)}))})]})}}}]);
//# sourceMappingURL=936.d0d3ef13.chunk.js.map