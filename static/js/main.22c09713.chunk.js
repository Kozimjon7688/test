(this.webpackJsonpp=this.webpackJsonpp||[]).push([[0],{19:function(e,c,t){},20:function(e,c,t){},21:function(e,c,t){},31:function(e,c,t){},32:function(e,c,t){},33:function(e,c,t){},34:function(e,c,t){"use strict";t.r(c);var s=t(1),i=t.n(s),n=t(12),A=t.n(n),l=t(3),j=(t(19),t(2)),r=t(6),a=(t(20),t(21),t(0)),h=Object(s.createContext)();function b(e){var c=e.children,t=Object(s.useState)([]),i=Object(r.a)(t,2),n=i[0],A=i[1];return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(h.Provider,{value:{movie:n,setMovie:A},children:c})})}var d=t.p+"static/media/home.122f2303.svg",o=t.p+"static/media/trending.7d3a2abf.svg",O=t.p+"static/media/subscriptions.8626d17c.svg",x=t.p+"static/media/library.8ea77692.svg",m=t.p+"static/media/history.f7ee2392.svg",u=t.p+"static/media/clock.bc5a4530.svg",g=t.p+"static/media/favarite.bbbfaf49.svg",f=t.p+"static/media/liked.09ce125f.svg",p=t.p+"static/media/music.0d1bce23.svg",v=t.p+"static/media/game.f5249e65.svg",B=t.p+"static/media/show.a9b6520f.svg";var w=function(){for(var e=Object(s.useContext)(h),c=e.movie,t=e.setMovie,i=[],n=1;n<=100;n++)i.push(n);return console.log(c),Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"sidebar-wrapper",children:[Object(a.jsxs)("ul",{className:"sidebar-list",children:[Object(a.jsx)("li",{children:Object(a.jsxs)(l.b,{to:"/",children:[Object(a.jsx)("img",{src:d,alt:"icon"}),Object(a.jsx)("b",{className:"home",children:"Home"})]})}),Object(a.jsx)("li",{children:Object(a.jsxs)(l.b,{to:"/",children:[Object(a.jsx)("img",{src:o,alt:"icon"}),Object(a.jsx)("b",{children:"Trending"})]})}),Object(a.jsx)("li",{children:Object(a.jsxs)(l.b,{to:"/",children:[Object(a.jsx)("img",{src:O,alt:"icon"}),Object(a.jsx)("b",{children:"Subscriptions"})]})}),Object(a.jsx)("li",{className:"br",children:Object(a.jsxs)(l.b,{to:"/",children:[Object(a.jsx)("img",{src:x,alt:"icon"}),Object(a.jsx)("b",{children:"Library"})]})}),Object(a.jsx)("li",{children:Object(a.jsxs)(l.b,{to:"/",children:[Object(a.jsx)("img",{src:m,alt:"icon"}),Object(a.jsx)("b",{children:"History"})]})}),Object(a.jsx)("li",{children:Object(a.jsxs)(l.b,{to:"/",children:[Object(a.jsx)("img",{src:u,alt:"icon"}),Object(a.jsx)("b",{children:"Watch later"})]})}),Object(a.jsx)("li",{children:Object(a.jsxs)(l.b,{to:"/",children:[Object(a.jsx)("img",{src:g,alt:"icon"}),Object(a.jsx)("b",{children:"Favourites"})]})}),Object(a.jsx)("li",{children:Object(a.jsxs)(l.b,{to:"/",children:[Object(a.jsx)("img",{src:f,alt:"icon"}),Object(a.jsx)("b",{children:"Liked videos"})]})}),Object(a.jsx)("li",{children:Object(a.jsxs)(l.b,{to:"/",children:[Object(a.jsx)("img",{src:p,alt:"icon"}),Object(a.jsx)("b",{children:"Music"})]})}),Object(a.jsx)("li",{children:Object(a.jsxs)(l.b,{to:"/",children:[Object(a.jsx)("img",{src:v,alt:"icon"}),Object(a.jsx)("b",{children:"Games"})]})}),Object(a.jsx)("li",{children:Object(a.jsxs)(l.b,{to:"/",children:[Object(a.jsx)("img",{src:B,alt:"icon"}),Object(a.jsx)("b",{children:"Show more"})]})})]}),Object(a.jsx)("ul",{className:"sidebar__list2",children:i.map((function(e){return Object(a.jsx)(l.b,{to:"/channel",onClick:function(){return t(e)},children:Object(a.jsxs)("li",{children:[e," - channel"]},e)},e)}))})]})})};var C=function(){var e=Object(s.useContext)(h),c=(e.movie,e.setMovie),t=[],i=Object(s.useState)([]),n=Object(r.a)(i,2),A=n[0],j=n[1];Object(s.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/photos").then((function(e){return e.json()})).then((function(e){return j(e)}))}),[]);for(var b=1;b<=100;b++)t.push(b);return Object(a.jsxs)("div",{className:"home",children:[Object(a.jsx)(w,{}),Object(a.jsx)("ul",{className:"home-list",children:t.map((function(e){return Object(a.jsxs)("li",{className:"home-list__item",children:[Object(a.jsx)(l.b,{to:"/channel",onClick:function(){return c(e)},children:Object(a.jsxs)("h1",{className:"channel_name",children:[e,"-Channel"]})}),Object(a.jsx)("ul",{className:"inner-home_list",children:A.filter((function(c){return c.albumId===e})).map((function(e){return Object(a.jsx)(l.b,{to:"/video",onClick:function(){return c(e.albumId)},children:Object(a.jsxs)("li",{children:[Object(a.jsx)("img",{src:e.url,width:"400",height:"200"}),Object(a.jsx)("h4",{children:e.title})]},e.id)})}))},Math.random())]},e)}))})]})},Y=(t(31),function(){var e=Object(s.useContext)(h),c=e.movie,t=(e.setMovie,Object(s.useState)([])),i=Object(r.a)(t,2),n=i[0],A=i[1];return Object(s.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/photos").then((function(e){return e.json()})).then((function(e){return A(e.filter((function(e){return e.albumId===c})))}))}),[]),Object(a.jsxs)("div",{className:"channel",children:[Object(a.jsx)(w,{}),Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{className:"channel__box",children:[c,"-channel"]}),Object(a.jsxs)("h2",{className:"channel__name",children:[Object(a.jsx)("span",{children:c}),"-chanel"]}),n.length>0&&Object(a.jsx)("ul",{className:"channel-list",children:n.map((function(e){return Object(a.jsx)(l.b,{to:"/video",children:Object(a.jsxs)("li",{className:"channel-list__item",children:[Object(a.jsx)("img",{src:e.url,width:"200",height:"150"}),Object(a.jsxs)("h1",{children:[e.albumId," - channel"]}),Object(a.jsxs)("h2",{children:[e.id," - video"]})]})})}))})]})]})});t(32);var I=function(){var e=Object(s.useContext)(h),c=e.movie,t=(e.setMovie,Object(s.useState)([])),i=Object(r.a)(t,2),n=i[0],A=i[1];return Object(s.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/photos").then((function(e){return e.json()})).then((function(e){return A(e.filter((function(e){return e.albumId===c})))}))}),[]),Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"video-wrapper",children:[Object(a.jsxs)("div",{className:"video-wrapper__left",children:[Object(a.jsx)("div",{className:"video"}),Object(a.jsx)("h4",{children:"Dude You Re Getting A Telescope"}),Object(a.jsxs)("div",{className:"div",children:[Object(a.jsx)("h6",{children:"123k views"}),Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:"123k"}),Object(a.jsx)("li",{children:"435k"}),Object(a.jsx)("li",{children:"Share"}),Object(a.jsx)("li",{children:"..."})]})]}),Object(a.jsx)("br",{}),Object(a.jsx)("hr",{}),Object(a.jsx)("h4",{children:"Food vs Drink"}),Object(a.jsx)("h5",{className:"date",children:"Published on 14 Jun 2019"}),Object(a.jsx)("p",{className:"parag",children:"A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action."})]}),n.length>0&&Object(a.jsx)("ul",{className:"video-list",children:n.map((function(e){return Object(a.jsx)(l.b,{to:"/video",children:Object(a.jsxs)("li",{className:"video-list__item",children:[Object(a.jsx)("img",{src:e.url,width:"271",height:"150"}),Object(a.jsxs)("h1",{children:[e.albumId," - channel"]}),Object(a.jsxs)("h2",{children:[e.id," - video"]})]})})}))})]})})};t(33);var S=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("svg",{width:"116",height:"25",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(a.jsx)("path",{fill:"#fff",d:"M7.941 3.999h21v17h-21z"}),Object(a.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"m11.615 24.822 7.517.136c.012 0 .036 0 .036.017 4.186.077 8.265-.165 12.439-.466 3.33-.23 4.12-2.612 4.533-5.454.514-3.431.628-6.904.359-10.36a166.79 166.79 0 0 1-.038-.493c-.25-3.306-.532-7.023-4.495-7.708-.844-.147-1.705-.277-2.56-.3-8.097-.26-16.266-.325-24.381.23C2.62.576 1.065 1.98.67 4.331a50.658 50.658 0 0 0-.459 12.88c.266 2.974.575 6.45 4.143 7.168 1.92.394 3.876.41 5.835.425.475.004.95.008 1.425.017Zm7.056-9.3-3.958 2.242V7.163c1.43.808 2.849 1.613 4.27 2.419 1.688.957 3.378 1.915 5.089 2.881a7174.704 7174.704 0 0 0-5.401 3.059Z",fill:"red"}),Object(a.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M96.724 22.747c.084-.316.17-.642.265-1.02l.18.253c.066.092.118.166.173.236 1.56 2.022 4.706 1.668 5.669-.667.293-.707.526-1.48.562-2.234.09-2.47.126-4.935.078-7.406-.024-.96-.222-1.946-.527-2.865-.472-1.48-1.806-2.158-3.366-1.858-.981.2-1.74.72-2.327 1.516-.035.045-.072.089-.119.144-.057.067-.129.151-.228.274V.866h-3.432v22.376h2.942l.13-.495Zm.432-3.084v-8.184c0-.69.335-1.209.885-1.575.73-.477 1.471-.235 1.74.584.144.454.258.938.258 1.404a392.174 392.174 0 0 1-.144 7.505c-.006.266-.12.531-.233.785-.27.607-.807.86-1.471.707-.676-.153-1.035-.56-1.035-1.226ZM87.827 7.505h3.594v15.748h-2.805c-.092-.54-.184-1.094-.29-1.73l-.032-.198c-.125.18-.216.318-.298.441v.001l-.127.19c-.933 1.326-2.255 1.78-3.816 1.538-1.333-.212-2.135-1.226-2.314-2.889a13.855 13.855 0 0 1-.078-1.492c-.008-2.457-.005-4.92-.002-7.38V11.725l.002-3.678v-.554h3.636v.643l-.001 2.67c-.002 2.67-.005 5.337.013 8.008 0 .507.054 1.032.144 1.539.102.518.484.707.998.672.832-.065 1.406-.672 1.406-1.486V8.2c-.03-.23-.03-.442-.03-.695Zm-21.134-.012H63.08l-.006.424c0 3.827 0 7.671.012 11.498 0 .478.048.95.113 1.427.24 1.527 1.023 2.459 2.303 2.647 1.597.242 2.906-.253 3.84-1.603.1-.16.202-.313.382-.578l.166.969v.002l.169.974h2.793V7.516h-3.595v11.988c-.006.82-.502 1.38-1.321 1.491-.592.077-.94-.112-1.077-.696a7.27 7.27 0 0 1-.155-1.527c-.018-2.648-.016-5.3-.014-7.955l.002-2.658v-.666ZM61.227 15.9c-.01.424-.035.849-.06 1.273l-.018.319-.035.425c-.123 1.547-.28 3.525-1.472 4.587-.831.73-1.884.996-2.972 1.032a9.285 9.285 0 0 1-1.46-.054c-2.29-.341-3.354-1.338-3.737-3.82-.436-2.866-.472-5.779.048-8.644.538-2.966 2.392-4.016 5.274-3.82 2.692.188 3.894 1.927 4.21 4.404.174 1.42.258 2.86.222 4.298Zm-3.656-1.407c-.002.288-.004.577-.004.864 0 .934-.037 1.868-.073 2.8-.017.428-.033.854-.047 1.28 0 .343-.12.69-.257 1.009-.173.413-.484.643-.957.643-.484 0-.855-.236-.998-.667-.373-1.11-.333-2.306-.293-3.484.01-.317.021-.632.024-.944.011-1.58.023-3.166.023-4.746 0-.217.064-.439.127-.656l.011-.04c.191-.62.562-.937 1.088-.95.539-.011.97.307 1.113.974.125.577.203 1.167.227 1.75.026.721.02 1.445.016 2.167Zm-11.118-3.336c.227-1.101.45-2.19.69-3.282.192-.884.394-1.769.596-2.654.233-1.02.466-2.042.684-3.065.102-.466.293-.578.742-.566.684.025 1.378.02 2.092.015.29-.001.583-.003.88-.003-.307 1.115-.61 2.18-.907 3.228l-.08.28a2815.754 2815.754 0 0 0-3.056 10.743 3.265 3.265 0 0 0-.113.872 476.322 476.322 0 0 0-.003 3.91c.001.652.003 1.304.003 1.957v.637h-3.51a7.528 7.528 0 0 0-.015-.177c-.011-.118-.022-.236-.022-.354 0-.354-.009-.708-.018-1.063-.02-.755-.039-1.51.03-2.256.225-2.301-.394-4.44-1.012-6.578-.09-.311-.18-.622-.267-.934-.455-1.622-.912-3.246-1.37-4.87a4083.27 4083.27 0 0 1-1.37-4.87 2.518 2.518 0 0 1-.062-.271c-.015-.075-.03-.154-.051-.237h3.582C44.65 5.2 45.41 8.778 46.2 12.393l.254-1.235Zm62.377 5.344h6.052c0-.73.006-1.441.012-2.142.008-.82.015-1.628.012-2.44a9.899 9.899 0 0 0-.294-1.957c-.34-1.368-1.124-2.411-2.595-2.665a10.711 10.711 0 0 0-2.781-.1c-1.692.165-2.787 1.15-3.289 2.754-.125.389-.239.772-.305 1.173-.371 2.406-.305 4.829-.125 7.229.065.973.37 1.945.693 2.877.347.997 1.119 1.645 2.153 1.946 1.4.407 2.805.407 4.174-.124 1.741-.666 2.775-2.824 2.201-4.505a173.9 173.9 0 0 1-2.102-.105h-.002l-.904-.048-.006.103c-.015.28-.026.5-.048.705-.024.26-.06.513-.113.766-.168.779-.586 1.132-1.304 1.12-.688-.005-1.124-.341-1.214-1.126-.091-.814-.129-1.634-.167-2.479-.015-.324-.03-.65-.048-.982Zm2.613-2.07.001-.886c.003-.862.005-1.696-.013-2.533 0-.265-.102-.543-.203-.796-.204-.495-.628-.631-1.137-.631-.508 0-.831.254-.956.708-.313 1.112-.287 2.245-.26 3.384.006.255.012.51.014.766.915-.011 1.747-.011 2.554-.011Zm-39.374-9.94h3.558l.006 18.738h3.523V4.474h3.534V1.65H72.07v2.842Z",fill:"#000"})]})})};var N=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("header",{children:[Object(a.jsxs)("div",{className:"header-left",children:[Object(a.jsx)("button",{className:"burger-button",children:Object(a.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAARCAYAAADdRIy+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAA7SURBVHgB7dJBEQAgDAPBBCHQQSFOAMMULDCTX7sC7nWsZpMoAwKOs9isO4TKq22IKFuRMbdJ/wJucwH2YRlUwsP23AAAAABJRU5ErkJggg==",alt:"burger-button",width:"20",height:"15"})}),Object(a.jsx)(l.b,{to:"/",children:Object(a.jsx)(S,{})}),Object(a.jsxs)("div",{className:"search-form",children:[Object(a.jsx)("input",{type:"search",placeholder:"search"}),Object(a.jsx)("button",{type:"submit",children:Object(a.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADYSURBVHgBrZSBEYIwDEX/OQEjZARG6EhuIBvABjCCm+AG6ASMoEGTa20tKcK7+xx3SX+TXABIcayONbGeopHVswiFVKw2MMipldxVo1GSZ1YjFSo1a4gqzRpqRZPRCsG33+YS9EaCzZIzS76Lg4MEepTTyJkuDuisapTj4Mfyhba4leTcCQeymD3k3aEcHcktNrv+YXb+ZaYmuqwEG4KxSh22L212lcLPSRPDVXGsC/yymhdXQYVrCv8oVifv4IDPcNXgLiYOabumYQkUGVbYCQWGhIOg5fEC/khbh5U/cA0AAAAASUVORK5CYII="})})]})]}),Object(a.jsxs)("ul",{className:"icon-list",children:[Object(a.jsx)("li",{children:Object(a.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAE2SURBVHgBtZVfSwJBFMVPuVRgZFBQINRD9JgPPfT9P0EPPQQFRYmKPvhnBUHBB89xRx1mZ3d0GQ/8UO9ePHPvnZk9AXBBnsk1qmlOBqQdSqyRF3KF6kqQLTQli1Dipfmu5AkO16P5PHfiDcNGw8T6IaNgK0rMNtJ/PpCmE28miCvNv4V8letFxDS7J0/IKpM0li9yB1N9TDN7Pr+k6ybEbqOOwTeyqnBMsxn5IMuihFPEU6fMKLZZUDHNbuHf8lsVzcw9/ba0CUbIt+yG1MknsvntZaZYC+X6IT1PXIf6lfzDcxv52rgsWpn13Le1U+yq1SHO3SRFbXzH4eqTqWWiMbzZCbF3o+aphXZ9z+zKqr48XamVuq7U1roVTxMTbKB8B+4jd45Dw1Y1k6SqzlBNquSPjEOJK3a4OAZ78Wm2AAAAAElFTkSuQmCC",alt:"videomaker icon",width:"27",height:"20"})}),Object(a.jsx)("li",{children:Object(a.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABwSURBVHgB7ZKxCoAwDERTC8VB1J9w9P//RPwFR6GLg+AVApZstynNwStNLulQLohIDxYwgww2cMkr2o84VjDqQAIDOKol2u90qNZkatovj56mmU1N+1Gb5T+S3ndwmyXWb1lBPKem6Tn9oDynP8npA1ftUaD8h2RUAAAAAElFTkSuQmCC",alt:"menu icon",width:"21",height:"21"})}),Object(a.jsx)("li",{children:Object(a.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAaCAYAAACzdqxAAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGDSURBVHgB1VZdS8MwFD3bCh1M7EBZRUHBNxX8/7/DBx98GE6YWLAPRQSHVbzH3JhYs6YtvuzAoSHtPcnN/UhH6IZj4ZmO18KHmMEEcWTCC+FYORdWwk2b0RjtSIQHgfk8YodRiyDdP9FxCG/CAluOJSQ8FV4LU29uo0L2fdpY4AaNoxlFRHmWK336mMF4k28TbwaPQdrTMV28QzhI78JSN8bgJmpXhIRz3YUVXSGOSkX3Ybz9yRY/KxZwbnURtVgKax3bXP8lPNdnif6wRzBrCk+9jyr0h7XhsaS+sI8a/fHHJlZ5g7G7wl26XFckVpgZcYX/w6Uw5U7PYcqSYNowJz/QD/zeVt93eU90BajgLfqLEp9qT2H2jIRHMSRvo2B3OoWr8RrDF0rgLoWCg0eYPpE1Xg4F47T0G30GF0SLQ5jGQi/WOncE0w9ehc/et7XOVXb7/kqhBjSD86SGu12eYLwNIlYY3MECrpnb1sqefY+WDIoJM41KuKuHO36BScvW/4ov3zxNI8Y2MGkAAAAASUVORK5CYII=",alt:"bell icon",width:"22",height:"26"})}),Object(a.jsx)("li",{children:Object(a.jsx)("img",{src:"data:image/png;base64,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",alt:"user img",width:"40",height:"40"})})]})]})})};var Z=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(N,{}),Object(a.jsxs)(j.c,{children:[Object(a.jsx)(j.a,{path:"/channel",component:Y}),Object(a.jsx)(j.a,{path:"/video",component:I}),Object(a.jsx)(j.a,{path:"/",component:C,exact:!0})]})]})};A.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(b,{children:Object(a.jsx)(l.a,{children:Object(a.jsx)(Z,{})})})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.22c09713.chunk.js.map