(this.webpackJsonpnews=this.webpackJsonpnews||[]).push([[0],[,,,,,,,,,function(e,c,s){},function(e,c,s){},function(e,c,s){},,function(e,c,s){"use strict";s.r(c);var t=s(1),n=s.n(t),a=s(3),i=s.n(a),r=(s(9),s(4)),l=(s(10),s(11),s(0));var j=function(e){var c=new Date(e.time).toLocaleString("en-IN",{timeZone:"Asia/Jakarta"});return Object(l.jsx)("div",{className:"headline  ",children:Object(l.jsxs)("div",{className:"row ",children:[Object(l.jsx)("div",{className:"col-md-4 col-lg-5 ",children:Object(l.jsx)("div",{className:"imagewrapper  ",children:Object(l.jsx)("img",{src:e.image,height:"220px",width:"240px"})})}),Object(l.jsxs)("div",{className:" col-md-8 col-lg-7 ",children:[" ",Object(l.jsx)("span",{className:"head",children:e.headline}),Object(l.jsxs)("div",{className:"content",children:[e.content,Object(l.jsx)("br",{}),Object(l.jsx)("a",{href:e.details,children:Object(l.jsx)("button",{className:"smart",children:"Readmore"})})]})]}),Object(l.jsxs)("div",{className:"time",children:[Object(l.jsxs)("span",{children:["Published :-",e.more,"   ",c]}),Object(l.jsx)("br",{})]})]})})};var d=function(){var e=Object(t.useState)([]),c=Object(r.a)(e,2),s=c[0],n=c[1];Object(t.useEffect)((function(){fetch("https://saurav.tech/NewsAPI/top-headlines/category/general/in.json").then((function(e){return e.json()})).then((function(e){n(e.articles)})).catch((function(e){console.log(e)}))}),[]),console.log(s);var a=s,i=new Date,d=+i.getTime()+6e4*i.getTimezoneOffset();return new Date(d+198e5).toLocaleString(),(new Date).toLocaleString("en-IN",{timeZone:"Asia/Jakarta"}),Object(l.jsxs)("div",{className:"App  ",children:[Object(l.jsx)("div",{className:"heading container-fluid sticky",children:Object(l.jsxs)("h1",{children:[" ",Object(l.jsx)("i",{class:"bi bi-newspaper icon"})," Daily HeadLines "]})}),Object(l.jsx)("h2",{children:"HeadLines"}),Object(l.jsx)("div",{className:"container-md",children:Object(l.jsxs)("div",{className:" newscont row",children:[a&&a.map((function(e){return Object(l.jsx)("div",{className:"col-md-6 topmain",children:Object(l.jsx)(j,{image:e.urlToImage,content:e.description,time:e.publishedAt,headline:e.title,more:e.author,details:e.url})})})),Object(l.jsx)("div",{className:"newsbox"})]})}),Object(l.jsx)("footer",{class:"footer",children:Object(l.jsxs)("div",{class:"container text-center",children:[Object(l.jsx)("a",{href:"#",children:Object(l.jsx)("i",{class:"fa fa-facebook",children:"Facebbok"})}),Object(l.jsx)("a",{href:"#",children:Object(l.jsx)("i",{class:"fa fa-twitter",children:"Twitter"})}),Object(l.jsx)("a",{href:"#",children:Object(l.jsx)("i",{class:"fa fa-linkedin",children:"Linkedin"})}),Object(l.jsx)("a",{href:"#",children:Object(l.jsx)("i",{class:"fa fa-google-plus",children:"Google+"})}),Object(l.jsx)("a",{href:"#",children:Object(l.jsx)("i",{class:"fa fa-skype",children:"Skype"})})]})})]})};i.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(d,{})}),document.getElementById("root"))}],[[13,1,2]]]);
//# sourceMappingURL=main.dac6d0d4.chunk.js.map