(this["webpackJsonpbushi-project-app"]=this["webpackJsonpbushi-project-app"]||[]).push([[0],{10:function(e,t,s){},42:function(e,t,s){"use strict";s.r(t);var n=s(0),c=s.n(n),a=s(15),i=s.n(a),r=s(4),j=s(9),A=s(20),d=s.n(A),o=s(24),b=function(){var e=Object(o.a)(d.a.mark((function e(t){var s,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://kitsu.io/api/edge/anime?page[10]=5&page[10]=0",{method:"GET",headers:{"Content-Type":"application/vnd.api+json",Accept:"application/vnd.api+json"}});case 2:return s=e.sent,e.next=5,s.json();case 5:return n=e.sent,e.abrupt("return",t({type:"GET_DATA",payload:n.data}));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=(s(10),s(1));var l=function(){return Object(O.jsx)("footer",{children:Object(O.jsx)("p",{children:"Desenvolvido por: \xc9drei Mateus | Processo seletivo: CyberLabs"})})},x=s.p+"static/media/logo g.db2103c3.svg";var h=function(){return Object(O.jsx)("header",{className:"header-section",children:Object(O.jsx)("div",{className:"container",children:Object(O.jsx)("div",{children:Object(O.jsx)("img",{src:x,alt:"logo"})})})})};var p=function(){var e=Object(r.f)().id,t=Object(j.c)((function(e){return e.animeData})).find((function(t){return t.id===e})),s=Object(j.b)();return Object(n.useEffect)((function(){b(s)}),[s]),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(h,{}),Object(O.jsx)("section",{className:"container",children:Object(O.jsxs)("div",{className:"detail-container",children:[Object(O.jsxs)("div",{className:"left-side-detail",children:[Object(O.jsx)("div",{className:"img-detail",children:Object(O.jsx)("img",{src:t.attributes.posterImage.small,alt:t.attributes.titles.en_jp})}),Object(O.jsxs)("div",{children:[Object(O.jsx)("h3",{children:t.attributes.titles.en_jp}),Object(O.jsx)("p",{children:t.attributes.synopsis})]})]}),Object(O.jsxs)("div",{className:"more-info-container",children:[Object(O.jsx)("h3",{children:"Mais informa\xe7\xf5es:"}),Object(O.jsxs)("p",{children:[Object(O.jsx)("span",{children:"Total de epis\xf3dios:"})," ",t.attributes.episodeCount]}),Object(O.jsxs)("p",{children:[Object(O.jsx)("span",{children:"Classifica\xe7\xe3o Indicativa:"})," ",t.attributes.ageRatingGuide]}),Object(O.jsxs)("p",{children:[Object(O.jsx)("span",{children:"Status:"})," ","finished"===t.attributes.status?"finalizada":"em andamento"]}),Object(O.jsxs)("p",{children:[Object(O.jsx)("span",{children:"Ranking de Popularidade:"})," ",t.attributes.popularityRank]})]})]})}),Object(O.jsx)(l,{})]})};var m=function(){return Object(O.jsx)("section",{className:"poster-container",children:Object(O.jsx)("div",{className:"container",children:Object(O.jsxs)("div",{className:"information-container",children:[Object(O.jsx)("img",{src:"data:image/png;base64,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",alt:"logo"}),Object(O.jsxs)("p",{children:["monitore os seus animes ",Object(O.jsx)("br",{}),"preferidos e n\xe3o perca mais ",Object(O.jsx)("br",{}),"nenhum epis\xf3dio"]})]})})})},u="data:image/png;base64,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";var v=function(){return Object(O.jsx)("section",{children:Object(O.jsxs)("div",{className:"info-container container",children:[Object(O.jsx)("div",{children:Object(O.jsx)("h1",{children:"O que fazer por aqui?"})}),Object(O.jsxs)("div",{className:"info-content",children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{className:"div-content",children:Object(O.jsx)("img",{src:"data:image/png;base64,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",alt:"vetor"})}),Object(O.jsx)("h4",{children:"Os Melhores"}),Object(O.jsx)("p",{children:"Veja o que esta pegando fogo, no mundo dos animes. Os animes mais bem avaliados pela galera!"})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{className:"div-content",children:Object(O.jsx)("img",{src:u,alt:"vetor"})}),Object(O.jsx)("h4",{children:"Informa\xe7\xf5es"}),Object(O.jsx)("p",{children:"Procure informa\xe7\xf5es dos seus animes preferidos."})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{className:"div-content",children:Object(O.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGMAAABTCAYAAACLQbk4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAUkSURBVHgB7Z09dttGEMd/dlyki26g8Qkin8Bwly66AZETSDkBkRPIOQGUMlXsMhXkLp2SE4DpkkpOl1QKRktYFA1KAHYXGBD8vfd/hvwo7HBmP2Y/AMH0kEo3lW4NqqyUr22cBefYDMR2UIQZcFTpF+wHpKAjXzA9/q30c6VnlRLsIriK8yszIcN+C0mYEafYHdDr8eOIGSG4L201IDkzQ7AdkHNmhuVMS7tSYYZk2AxI8ZjRU0xt26ID+5eE5SMute57X2FG6a4GQGtfrJr9dl1OghsD+paVsKdoTVsyTHqb77AhodtYVbJn6e5JpQuGnWNoWbucmHe8V84eIMTtivo4cdHzXg/S3WfEJcE5T7Va6wo/UsavVatKP62vX9N/DNCE4NX6flF4qg8v8VvzF2xP7rrqmkgsaN+Hl7jspy8J01hKb6MLAnPW05AlfkilS2wvFrZRQiAWnoZoUxX8ENx4UkIQ5wytggAsAhlT4tLVEKRMLyg3eLKIYNSSMGSEty22eqO1OFY/rQOz4EdGHNti6fo5/dBAFMSb0tdrTMJ8+J0exGwRTeq7KZMNYFtIyQu6IcRtEU1oDn5c6QfcjHUIVi0/J4Thko6zcGHcDKWk25fPPMpKWpZxQhifiN6s7ZihHy4Ytw8X3HwkxQ7az7/Bb23pssvvC/Zy9iVPk3ncP6EbPnvv0rIM04tyT83aM497J/Qj61hO1vbGgv1ZrNp3GsgxIYKhpDztt6JLGcK0lhPShu+QedwvwR/tuqRBOzPRFztuEmIGPCRCWAR/PtIxFd/OpjQQBeEW7KbKKIcFnm8ZcAiE41tGYDMY2jUdAuFIGKGbroORE/9glfafV5V+JOIGfEByBkYHcF37SQnLCjc7/bBxrf9OKTlIcL75noHQYPgeVV/havwfOKermrII7QKnlqWpbwQXkBUD0HY5XD+ns958baQ6t23WcUbcZfesocwscBn6vYXIND3Kq44rcAd9U/wG9gviBaHW24Zys0hl5UQOyuna+DRgQYJrSbcDKG8oP41YXolbrBQmQMKwyynvGmw4HaDcEltL+p/R9zCbr1O2ORm4/BRD6GCeM5wDNnWzw56h7SgxEBRhuPFhl44b7CpHsmW0oCTYOOfatK9xObJNJQM+MrYEbo2oKb1NjdiWEznzGqNPfkzFBGz0Xe3YiQC3xtS0IlAYs3FJJErg1pDSBhszYzaq8gY7vZ/pE2y9Bu49n3cF2lq8j9tHIMOdkpwdBfZah+qUGZJgMxiPPVe+1xTYDEjwhyunQILNYKjuWsc+v1VnmxUjHTRowX/4v6xgcgg2H1G+y/bm1DIU3ZvXWvgNttD3V32YWzCU37DZXf05x2AoeoRIc3xLaeU/zJihHxR9SuVcW4byV6W/meks2CopdlrHAewE5MCahHG3BCyuLI+KMF5Arn33M6bGEffprDT8XHPG8Gnv+66vq7BI7dD6ILZU+oqHDziC/aOYV1NoGcK9s/X6mIfO35f9gFdWglHXYnXw1xvX++Tsx1hVejl0N1XXaNXxxvUsd7s2uNsLjxkMwaWLmzVdOLDNivVeRqhgCPeOP9T2bnx64LTPmKFOTrh3fMLB8X1ZVXpZ/9CmZQjO4a+xu205RXSj683mf2wHY3OArZ1/qPVx+I4dT9DqjLNg+q+wnopSdrA0Zug+Syt7wiOURgzddxW0GG8PXVNcqX/Pacm+/A0KayrWQWidAGk2paO6nkxYcKAv9VvXrnDvUHlHj3eN/A/6cbnOfqizBgAAAABJRU5ErkJggg==",alt:"vetor"})}),Object(O.jsx)("h4",{children:"Sua Lista"}),Object(O.jsx)("p",{children:"Comece agora mesmo a montar sua lista de animes preferidos, e seja notificado quando um epis\xf3dio novo for ao ar!"})]})]})]})})},S=s(25),g=s(26),C=s(11);var R=function(e){var t=e.animeData;return Object(O.jsx)("section",{className:"container",children:Object(O.jsxs)("div",{className:"container-table",children:[Object(O.jsxs)("div",{className:"title-table",children:[Object(O.jsx)("img",{src:u,alt:"vetor"}),Object(O.jsx)("h4",{children:"Veja Animes"})]}),Object(O.jsx)("table",{children:Object(O.jsx)("tbody",{children:t.map((function(e){return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:Object(O.jsx)("img",{src:e.attributes.posterImage.tiny,alt:"poster"})}),Object(O.jsxs)("td",{children:["Nome: ",e.attributes.titles.en_jp]}),Object(O.jsxs)("td",{children:["Epis\xf3dios: ",e.attributes.episodeCount]}),Object(O.jsx)("td",{className:"td-play",children:Object(O.jsx)(C.b,{to:"detalhes/".concat(e.id),children:Object(O.jsx)(S.a,{icon:g.a})})})]},e.id)}))})})]})})};var E=function(){var e=Object(j.c)((function(e){return e.animeData})),t=Object(j.b)();return Object(n.useEffect)((function(){b(t)}),[t]),Object(O.jsxs)("div",{children:[Object(O.jsx)(h,{}),Object(O.jsx)(m,{}),Object(O.jsx)(v,{}),Object(O.jsx)(R,{animeData:e}),Object(O.jsx)(l,{})]})};var M=function(){return Object(O.jsxs)(r.c,{children:[Object(O.jsx)(r.a,{path:"/detalhes/:id",component:p}),Object(O.jsx)(r.a,{path:"/",component:E})]})},N=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,43)).then((function(t){var s=t.getCLS,n=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;s(e),n(e),c(e),a(e),i(e)}))},T=s(17),y=s(27),U=s(28),f=s(23),I="GET_DATA",k={animeData:[]},B=Object(T.createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0,s=t.type,n=t.payload;switch(s){case I:return Object(f.a)(Object(f.a)({},e),{},{animeData:n});default:return e}}),Object(y.composeWithDevTools)(Object(T.applyMiddleware)(U.a)));i.a.render(Object(O.jsx)(j.a,{store:B,children:Object(O.jsx)(C.a,{children:Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(M,{})})})}),document.getElementById("root")),N()}},[[42,1,2]]]);
//# sourceMappingURL=main.20a0183f.chunk.js.map