(this.webpackJsonpnews=this.webpackJsonpnews||[]).push([[0],[,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),a=c(4),i=c.n(a),o=(c(9),c(2)),j=(c(10),c(11),c(0));var r=function(e){var t=new Date(e.time).toLocaleString("en-IN",{timeZone:"Asia/Jakarta"});return Object(j.jsx)("div",{className:"headline  ",children:Object(j.jsxs)("div",{className:"row ",children:[Object(j.jsx)("div",{className:"col-md-4 col-lg-5 ",children:Object(j.jsx)("div",{className:"imagewrapper  ",children:Object(j.jsx)("img",{src:e.image,height:"220px",width:"240px"})})}),Object(j.jsxs)("div",{className:" col-md-8 col-lg-7 ",children:[" ",Object(j.jsx)("span",{className:"head",children:e.headline}),Object(j.jsxs)("div",{className:"content",children:[e.content,Object(j.jsx)("br",{}),Object(j.jsxs)("button",{children:[" ",Object(j.jsx)("a",{href:e.details,children:"Readmore"})]})]})]}),Object(j.jsxs)("div",{className:"time",children:[Object(j.jsxs)("span",{children:["Published :-",e.more,"   ",t]}),Object(j.jsx)("br",{})]})]})})};var l=function(){var e=Object(s.useState)([]),t=Object(o.a)(e,2),c=t[0],n=t[1];Object(s.useEffect)((function(){fetch("https://saurav.tech/NewsAPI/top-headlines/category/general/in.json").then((function(e){return e.json()})).then((function(e){n(e.articles)})).catch((function(e){console.log(e)}))}),[]);var a=c,i=Object(s.useState)([]),l=Object(o.a)(i,2),b=l[0],h=l[1];Object(s.useEffect)((function(){fetch("https://saurav.tech/NewsAPI/top-headlines/category/general/in.json").then((function(e){return e.json()})).then((function(e){h(e.articles)})).catch((function(e){console.log(e)}))}),[]);var u=Object(s.useState)([]),d=Object(o.a)(u,2),O=d[0],f=d[1];Object(s.useEffect)((function(){fetch("https://saurav.tech/NewsAPI/top-headlines/category/business/in.json").then((function(e){return e.json()})).then((function(e){f(e.articles)})).catch((function(e){console.log(e)}))}),[]);var x=Object(s.useState)([]),p=Object(o.a)(x,2),m=p[0],g=p[1];Object(s.useEffect)((function(){fetch("https://saurav.tech/NewsAPI/top-headlines/category/entertainment/in.json").then((function(e){return e.json()})).then((function(e){g(e.articles)})).catch((function(e){console.log(e)}))}),[]);var v=Object(s.useState)([]),N=Object(o.a)(v,2),w=N[0],k=N[1];Object(s.useEffect)((function(){fetch("https://saurav.tech/NewsAPI/top-headlines/category/sports/in.json").then((function(e){return e.json()})).then((function(e){k(e.articles)})).catch((function(e){console.log(e)}))}),[]);var y=Object(s.useState)([]),S=Object(o.a)(y,2),A=S[0],I=S[1];Object(s.useEffect)((function(){fetch("https://saurav.tech/NewsAPI/top-headlines/category/technology/in.json").then((function(e){return e.json()})).then((function(e){I(e.articles)})).catch((function(e){console.log(e)}))}),[]),console.log(A);var E=Object(s.useState)([]),P=Object(o.a)(E,2),C=P[0],L=P[1];Object(s.useEffect)((function(){fetch("https://saurav.tech/NewsAPI/top-headlines/category/health/in.json").then((function(e){return e.json()})).then((function(e){L(e.articles)})).catch((function(e){console.log(e)}))}),[]);var T=new Date,D=+T.getTime()+6e4*T.getTimezoneOffset(),H=new Date(D+198e5).toLocaleString();return(new Date).toLocaleString("en-IN",{timeZone:"Asia/Jakarta"}),Object(j.jsxs)("div",{className:"App  ",children:[Object(j.jsxs)("div",{className:"heading container-fluid sticky",children:[Object(j.jsxs)("h1",{children:[" ",Object(j.jsx)("i",{class:"bi bi-newspaper icon"})," Daily HeadLines "]}),Object(j.jsxs)("div",{className:"tm",children:[" ",H]})]}),Object(j.jsx)("br",{})," ",Object(j.jsx)("br",{})," ",Object(j.jsx)("br",{})," ",Object(j.jsx)("br",{})," ",Object(j.jsx)("br",{})," ",Object(j.jsx)("br",{}),Object(j.jsxs)("div",{className:"type row",children:[Object(j.jsx)("div",{className:"col-md-4"}),Object(j.jsxs)("div",{className:"btn col-md-4",children:[Object(j.jsxs)("button",{className:"button",onClick:function(){n(b)},children:[Object(j.jsx)("i",{class:"bi bi-newspaper"})," Top Headlines"]}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsxs)("button",{className:"button",onClick:function(){n(w)},children:[Object(j.jsx)("i",{class:"bi bi-newspaper"})," Sports"]}),Object(j.jsxs)("button",{className:"button",onClick:function(){n(m)},children:[Object(j.jsx)("i",{class:"bi bi-newspaper"})," Entertainment"]}),Object(j.jsxs)("button",{className:"button",onClick:function(){n(O)},children:[Object(j.jsx)("i",{class:"bi bi-newspaper"})," Business"]}),Object(j.jsxs)("button",{className:"button",onClick:function(){n(A)},children:[Object(j.jsx)("i",{class:"bi bi-newspaper"})," Technology"]}),Object(j.jsxs)("button",{className:"button",onClick:function(){n(C)},children:[Object(j.jsx)("i",{class:"bi bi-newspaper"})," Health"]})]})]}),Object(j.jsx)("h2",{children:"HeadLines"}),Object(j.jsx)("div",{className:"container-md",children:Object(j.jsxs)("div",{className:"newswrapper row",children:[a&&a.map((function(e){return Object(j.jsx)("div",{className:"col-md-6",children:Object(j.jsx)(r,{image:e.urlToImage,content:e.description,time:e.publishedAt,headline:e.title,more:e.author,details:e.url})})})),Object(j.jsx)("div",{className:"newsbox"})]})}),Object(j.jsx)("footer",{class:"footer",children:Object(j.jsxs)("div",{class:"container text-center",children:[Object(j.jsx)("h1",{children:"By Utkarsh Sethiya"}),Object(j.jsx)("a",{href:"#",children:Object(j.jsx)("i",{class:"fa fa-facebook",children:"Facebbok"})}),Object(j.jsx)("a",{href:"#",children:Object(j.jsx)("i",{class:"fa fa-twitter",children:"Twitter"})}),Object(j.jsx)("a",{href:"#",children:Object(j.jsx)("i",{class:"fa fa-linkedin",children:"Linkedin"})}),Object(j.jsx)("a",{href:"#",children:Object(j.jsx)("i",{class:"fa fa-google-plus",children:"Google+"})}),Object(j.jsx)("a",{href:"#",children:Object(j.jsx)("i",{class:"fa fa-skype",children:"Skype"})})]})})]})};i.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(l,{})}),document.getElementById("root"))}],[[13,1,2]]]);
//# sourceMappingURL=main.f6b4347c.chunk.js.map