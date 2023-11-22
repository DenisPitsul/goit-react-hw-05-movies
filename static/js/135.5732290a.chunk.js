"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[135],{829:function(e,n,t){t.d(n,{I:function(){return u}});var a=t(861),i=t(671),r=t(144),s=t(757),o=t.n(s),c=t(340),u=function(){function e(){(0,i.Z)(this,e)}return(0,r.Z)(e,null,[{key:"getTrandingMovies",value:function(){var n=(0,a.Z)(o().mark((function n(){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get(e.BASE_URL+"/trending/all/day?language=en-US",e.OPTIONS);case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()},{key:"getMoviesByQuery",value:function(){var n=(0,a.Z)(o().mark((function n(t){var a;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get(e.BASE_URL+"/search/movie?query="+t+"&include_adult=false&language=en-US&page=1",e.OPTIONS);case 2:return a=n.sent,n.abrupt("return",a.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},{key:"getMovieDetailsById",value:function(){var n=(0,a.Z)(o().mark((function n(t){var a;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get(e.BASE_URL+"/movie/"+t+"?language=en-US",e.OPTIONS);case 2:return a=n.sent,n.abrupt("return",a.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},{key:"getMovieCastById",value:function(){var n=(0,a.Z)(o().mark((function n(t){var a;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get(e.BASE_URL+"/movie/"+t+"/credits?language=en-US",e.OPTIONS);case 2:return a=n.sent,n.abrupt("return",a.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},{key:"getMovieReviewsById",value:function(){var n=(0,a.Z)(o().mark((function n(t){var a;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get(e.BASE_URL+"/movie/"+t+"/reviews?language=en-US&page=1",e.OPTIONS);case 2:return a=n.sent,n.abrupt("return",a.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}]),e}();u.BASE_URL="https://api.themoviedb.org/3",u.OPTIONS={headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZDE3MTA1ZTU5M2ZiMDI4NmI1OTg1OWRkZWRlOWNhMyIsInN1YiI6IjY1NWI0MjU3ZjY3ODdhMDBjNmNlZTEwZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.S8IgppWVE1ouikuk0fV5PZzs0a_uf8nC7c6XXjA5guU"}}},514:function(e,n,t){t.d(n,{Z:function(){return r}});var a="ErrorComp_errorText__dt8qk",i=t(184),r=function(e){var n=e.message;return(0,i.jsx)("p",{className:a,children:n})}},375:function(e,n,t){t.d(n,{U:function(){return c}});var a=t(861),i=t(439),r=t(757),s=t.n(r),o=t(791),c=function(e){var n=(0,o.useState)(!1),t=(0,i.Z)(n,2),r=t[0],c=t[1],u=(0,o.useState)(""),l=(0,i.Z)(u,2),d=l[0],v=l[1],f=function(){var n=(0,a.Z)(s().mark((function n(){var t=arguments;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,c(!0),n.next=4,e.apply(void 0,t);case 4:n.next=9;break;case 6:n.prev=6,n.t0=n.catch(0),v(n.t0.message);case 9:return n.prev=9,c(!1),n.finish(9);case 12:case"end":return n.stop()}}),n,null,[[0,6,9,12]])})));return function(){return n.apply(this,arguments)}}();return[f,r,d]}},135:function(e,n,t){t.r(n),t.d(n,{default:function(){return h}});var a=t(861),i=t(439),r=t(757),s=t.n(r),o={goBackLink:"MovieDetails_goBackLink__0L6Dl",moviesDetailsContainer:"MovieDetails_moviesDetailsContainer__dxxs+",movieImg:"MovieDetails_movieImg__5UJtY",movieDetailsContent:"MovieDetails_movieDetailsContent__Eq+xA",movieTitle:"MovieDetails_movieTitle__0CAOT",movieSecondTitle:"MovieDetails_movieSecondTitle__01OqS",movieInfo:"MovieDetails_movieInfo__4EKMk",additionalInfoContainer:"MovieDetails_additionalInfoContainer__I4ndN",additionalInfoList:"MovieDetails_additionalInfoList__LrD0C",additionalInfoLink:"MovieDetails_additionalInfoLink__fMh92"},c=t(791),u=t(689),l=t(87),d=t(375),v=t(829),f=t(55),m=t(514),p=t(184),h=function(){var e=(0,c.useState)({}),n=(0,i.Z)(e,2),t=n[0],r=n[1],h=(0,u.UO)().movieId,I=(0,u.TH)(),_=(0,d.U)((0,a.Z)(s().mark((function e(){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.I.getMovieDetailsById(h);case 2:n=e.sent,r(n);case 4:case"end":return e.stop()}}),e)})))),g=(0,i.Z)(_,3),x=g[0],j=g[1],k=g[2];return(0,c.useEffect)((function(){x()}),[h]),(0,p.jsxs)("div",{className:"container",children:[(0,p.jsx)(l.rU,{to:I.state.from,className:o.goBackLink,children:"Go back"}),j?(0,p.jsx)(f.Z,{}):k?(0,p.jsx)(m.Z,{message:k}):(0,p.jsxs)("div",{children:[(0,p.jsxs)("div",{className:o.moviesDetailsContainer,children:[(0,p.jsx)("img",{src:"https://image.tmdb.org/t/p/original"+t.poster_path,alt:t.title,className:o.movieImg}),(0,p.jsxs)("div",{className:o.movieDetailsContent,children:[(0,p.jsx)("h3",{className:o.movieTitle,children:t.title}),(0,p.jsxs)("p",{className:o.movieInfo,children:["User Score: ",Math.round(10*t.vote_average),"%"]}),(0,p.jsx)("h4",{className:o.movieSecondTitle,children:"Overview"}),(0,p.jsx)("p",{className:o.movieInfo,children:t.overview}),(0,p.jsx)("h4",{className:o.movieSecondTitle,children:"Genres"}),(0,p.jsx)("p",{className:o.movieInfo,children:t.genres?t.genres.map((function(e){return e.name})).join(", "):" no info"})]})]}),(0,p.jsxs)("div",{className:o.additionalInfoContainer,children:[(0,p.jsx)("h3",{className:o.additionalInfoTitle,children:"Additional information"}),(0,p.jsxs)("ul",{className:o.additionalInfoList,children:[(0,p.jsx)("li",{className:o.additionalInfoItem,children:(0,p.jsx)(l.rU,{to:"cast",className:o.additionalInfoLink,state:I.state,children:"Cast"})}),(0,p.jsx)("li",{className:o.additionalInfoItem,children:(0,p.jsx)(l.rU,{className:o.additionalInfoLink,to:"reviews",state:I.state,children:"Reviews"})})]})]}),(0,p.jsx)(c.Suspense,{fallback:(0,p.jsx)(f.Z,{}),children:(0,p.jsx)(u.j3,{})})]})]})}}}]);
//# sourceMappingURL=135.5732290a.chunk.js.map