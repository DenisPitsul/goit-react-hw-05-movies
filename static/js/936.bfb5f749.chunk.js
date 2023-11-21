"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[936],{829:function(e,r,n){n.d(r,{I:function(){return o}});var t=n(861),a=n(671),i=n(144),s=n(757),u=n.n(s),c=n(340),o=function(){function e(){(0,a.Z)(this,e)}return(0,i.Z)(e,null,[{key:"getTrandingMovies",value:function(){var r=(0,t.Z)(u().mark((function r(){var n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get(e.BASE_URL+"/trending/all/day?language=en-US",e.OPTIONS);case 2:return n=r.sent,r.abrupt("return",n.data);case 4:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}()},{key:"getMoviesByQuery",value:function(){var r=(0,t.Z)(u().mark((function r(n){var t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get(e.BASE_URL+"/search/movie?query="+n+"&include_adult=false&language=en-US&page=1",e.OPTIONS);case 2:return t=r.sent,r.abrupt("return",t.data);case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},{key:"getMovieDetailsById",value:function(){var r=(0,t.Z)(u().mark((function r(n){var t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get(e.BASE_URL+"/movie/"+n+"?language=en-US",e.OPTIONS);case 2:return t=r.sent,r.abrupt("return",t.data);case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},{key:"getMovieCastById",value:function(){var r=(0,t.Z)(u().mark((function r(n){var t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get(e.BASE_URL+"/movie/"+n+"/credits?language=en-US",e.OPTIONS);case 2:return t=r.sent,r.abrupt("return",t.data);case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},{key:"getMovieReviewsById",value:function(){var r=(0,t.Z)(u().mark((function r(n){var t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get(e.BASE_URL+"/movie/"+n+"/reviews?language=en-US&page=1",e.OPTIONS);case 2:return t=r.sent,r.abrupt("return",t.data);case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}]),e}();o.BASE_URL="https://api.themoviedb.org/3",o.OPTIONS={headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZDE3MTA1ZTU5M2ZiMDI4NmI1OTg1OWRkZWRlOWNhMyIsInN1YiI6IjY1NWI0MjU3ZjY3ODdhMDBjNmNlZTEwZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.S8IgppWVE1ouikuk0fV5PZzs0a_uf8nC7c6XXjA5guU"}}},514:function(e,r,n){n.d(r,{Z:function(){return i}});var t="ErrorComp_errorText__dt8qk",a=n(184),i=function(e){var r=e.message;return(0,a.jsx)("p",{className:t,children:r})}},9:function(e,r,n){n.d(r,{Z:function(){return s}});var t=n(87),a={header:"Header_header__HXQOm",headerList:"Header_headerList__uSw9H",headerLink:"Header_headerLink__3H7qa",headerLinkActive:"Header_headerLinkActive__Gq3Ab"},i=n(184),s=function(e){var r=e.active;return(0,i.jsx)("header",{className:a.header,children:(0,i.jsx)("div",{className:"container",children:(0,i.jsx)("nav",{className:a.headerNav,children:(0,i.jsxs)("ul",{className:a.headerList,children:[(0,i.jsx)("li",{className:a.headerItem,children:(0,i.jsx)(t.OL,{className:"home"===r?a.headerLinkActive:a.headerLink,to:"/",children:"Home"})}),(0,i.jsx)("li",{className:a.headerItem,children:(0,i.jsx)(t.OL,{className:"movies"===r?a.headerLinkActive:a.headerLink,to:"/movies",children:"Movies"})})]})})})})}},375:function(e,r,n){n.d(r,{U:function(){return c}});var t=n(861),a=n(439),i=n(757),s=n.n(i),u=n(791),c=function(e){var r=(0,u.useState)(!1),n=(0,a.Z)(r,2),i=n[0],c=n[1],o=(0,u.useState)(""),d=(0,a.Z)(o,2),h=d[0],l=d[1],v=function(){var r=(0,t.Z)(s().mark((function r(){var n=arguments;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,c(!0),r.next=4,e.apply(void 0,n);case 4:r.next=9;break;case 6:r.prev=6,r.t0=r.catch(0),l(r.t0.message);case 9:return r.prev=9,c(!1),r.finish(9);case 12:case"end":return r.stop()}}),r,null,[[0,6,9,12]])})));return function(){return r.apply(this,arguments)}}();return[v,i,h]}},936:function(e,r,n){n.r(r),n.d(r,{default:function(){return p}});var t=n(861),a=n(439),i=n(757),s=n.n(i),u=n(9),c={homeTitle:"Home_homeTitle__duF7K",homeList:"Home_homeList__kBzvV",homelink:"Home_homelink__GZBqV"},o=n(791),d=n(375),h=n(829),l=n(87),v=n(55),f=n(514),m=n(184),p=function(){var e=(0,o.useState)([]),r=(0,a.Z)(e,2),n=r[0],i=r[1],p=(0,d.U)((0,t.Z)(s().mark((function e(){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.I.getTrandingMovies();case 2:r=e.sent,i(r.results);case 4:case"end":return e.stop()}}),e)})))),_=(0,a.Z)(p,3),g=_[0],x=_[1],Z=_[2];return(0,o.useEffect)((function(){g()}),[]),(0,m.jsxs)("div",{children:[(0,m.jsx)(u.Z,{active:"home"}),(0,m.jsxs)("div",{className:"container",children:[(0,m.jsx)("h2",{className:c.homeTitle,children:"Trending today"}),x?(0,m.jsx)(v.Z,{}):Z?(0,m.jsx)(f.Z,{message:Z}):(0,m.jsx)("ul",{className:c.homeList,children:n.map((function(e){var r=e.id,n=e.original_title;return(0,m.jsx)("li",{className:c.homeItem,children:(0,m.jsx)(l.OL,{className:c.homelink,to:"/movies/"+r,state:{from:"/"},children:n})},r)}))})]})]})}}}]);
//# sourceMappingURL=936.bfb5f749.chunk.js.map