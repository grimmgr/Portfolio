(this["webpackJsonpreact-portfoio"]=this["webpackJsonpreact-portfoio"]||[]).push([[0],[,,,,,,function(e){e.exports=JSON.parse('[{"id":"1","name":"CHASTITY BELT MUSIC","link":"http://chastitybeltmusic.com/","link_display":"chastitybeltmusic.com","role":"FULL STACK DEVELOPER","description":"A website for the band Chastity Belt built with React.  As sole author I designed the site to reflect the band\u2019s personality, and implemented a backend and API that allows fans to submit art to a Fan Art Page.  Band members can login through a private, password protected page to either post submissions to the public page or delete them.","video":"assets/video/cb_demo.mp4","stack_index":"6","top":"-20","right":"-10"},{"id":"2","name":"INDOOR COLLECTIVE","link":"https://www.indoorcollective.com/","link_display":"indoorcollective.com","role":"FRONTEND ENGINEER","description":"Website built in Webflow.  I implemented the design the client layed out for me and ensured it was responsive across all screen sizes, adapting to design changes throughout the duration of the project.  I also helped the team set up a sign up form in Mailchimp and integrated it into the site.","video":"assets/video/ic_demo.mp4","stack_index":"5","logo":"assets/images/indoor_logo.svg","top":"-10","right":"-5"},{"id":"3","name":"SE7EN","link":"https://se-7-en.herokuapp.com/","link_display":"se-7-en.herokuapp.com","role":"BACKEND ENGINEER","description":"Bucketlist app to track and explore things to do before the world ends.  Users login to add activities to their bucketlist, see other users\' lists, and see a map of all activites.  They can also browse through random activities that are open to collaborators on the Discover page.","video":"https://drive.google.com/uc?export=download&id=1sL9v60aVFq81baHLjTtCqj79F-YzyxRA","stack_index":"4","top":"0","right":"0"},{"id":"4","name":"SELLING SUNSET EMPLOYEE DIRECTORY","link":"https://grimmgr.github.io/Selling-Sunset-Employee-Directory/","link_display":"SELLING SUNSET EMPLOYEE DIRECTORY","role":"SOLE AUTHOR","description":"A project I completed to practice using state to sort and filter data in React apps.","video":"assets/video/ss_demo.mp4","stack_index":"3","top":"10","right":"5"},{"id":"5","name":"SEASONS","link":"https://grimmgr.github.io/Seasons/","link_display":"SEASONS","role":"SOLE AUTHOR","description":"A weather dashboard for Justin Bieber fans.  Search different cities and the background image will correspond to the predicted forecast.","image":"assets/images/jb_3.jpg","stack_index":"2","top":"20","right":"10"},{"id":"6","name":"BUDGET TRACKER","link":"https://trak-ur-m0n3y.herokuapp.com/","link_display":"BUDGET TRACKER","role":"BACKEND ENGINEER","description":"Practice in creating a progressive web app and storing data using MongoDb. User input is saved offline using indexeddb.","image":"assets/images/budget.png","stack_index":"1","top":"30","right":"15"}]')},,,,,,,function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},,,function(e,t,i){},function(e,t,i){"use strict";i.r(t);var c=i(0),s=i(1),n=i.n(s),r=i(3),a=i.n(r),o=(i(13),i(14),i(2)),l=n.a.createContext(),d=function(){return Object(s.useContext)(l)},j=function(e){var t=e.children,i=Object(s.useState)(!1),n=Object(o.a)(i,2),r=n[0],a=n[1];return Object(c.jsx)(l.Provider,{value:{displayCard:r,setDisplayCard:a},children:t})},p=n.a.createContext(),h=function(){return Object(s.useContext)(p)},m=function(e){var t=e.children,i=Object(s.useState)("undefined"!==typeof window?window.innerWidth:400),n=Object(o.a)(i,2),r=n[0],a=n[1];return Object(s.useEffect)((function(){var e=null,t=function(){clearTimeout(e),e=setTimeout((function(){return a(window.innerWidth)}),150)};return window.addEventListener("resize",t),function(){window.removeEventListener("resize",t)}}),[]),Object(c.jsx)(p.Provider,{value:{width:r,setWidth:a},children:t})},b=(i(15),function(){var e=d().displayCard,t=h().width;return Object(c.jsxs)("header",{style:!0===e&&t<750?{transform:"translateY(-120px)"}:{transform:"translateY(0)"},children:[Object(c.jsx)("h1",{children:"GRETCHEN GRIMM"}),Object(c.jsx)("nav",{children:Object(c.jsxs)("ul",{className:"nav-links",children:[Object(c.jsx)("li",{children:Object(c.jsx)("a",{className:"nav-link",href:"#portfolio",children:"portfolio"})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{className:"nav-link",href:"#contact",children:"contact"})})]})}),Object(c.jsx)("div",{className:"header-center-line"})]})}),u=(i(16),function(){return Object(c.jsxs)("div",{children:[Object(c.jsxs)("video",{playsInline:!0,autoPlay:!0,muted:!0,poster:"assets/images/portfolio_background_poster.jpg",id:"backgroundVideo",children:[Object(c.jsx)("source",{src:"assets/video/portfolio_background_720.webm",type:"video/webm"}),Object(c.jsx)("source",{src:"assets/video/portfolio_background_720.mp4",type:"video/mp4"})]}),Object(c.jsx)("div",{id:"background"})]})}),O=function(){return Object(c.jsxs)("section",{id:"welcome",children:[Object(c.jsx)("p",{className:"emoji",children:"\u252c\u2534\u2524\uff65\u03c9\uff65)\uff89"}),Object(c.jsx)("p",{className:"special",children:"welcome"})]})},f=i(23),x=(i(17),function(e){var t,i,n,r=e.id,a=e.name,l=e.link,j=e.linkDisplay,p=e.role,m=e.description,b=e.video,u=e.image,O=e.stackIndex,x=e.logo,g=e.top,v=e.right,k=h().width,N=Object(s.useState)(O),w=Object(o.a)(N,2),E=w[0],y=w[1],C=Object(s.useState)(k<750?250:270),_=Object(o.a)(C,2),S=_[0],R=_[1],I=Object(s.useState)(!1),T=Object(o.a)(I,2),L=T[0],A=T[1],D=d().setDisplayCard,P=Object(s.useRef)(null),B=Object(s.useRef)(null);L?(t=0,i=0,n=0):(t="10px",i="".concat(g,"px"),n="".concat(v,"px"));var F={width:S,height:S,padding:t,top:i,right:n};return Object(c.jsx)("div",{id:"card-wrapper".concat(r),className:"card-wrapper",style:{zIndex:E},children:Object(c.jsx)(f.a,{in:!L,timeout:800,classNames:"flip",children:Object(c.jsxs)("div",{id:"card".concat(r),className:"card",style:F,ref:P,children:[Object(c.jsxs)("div",{id:"card-front".concat(r),className:"card-front",onClick:function(){return A(!0)},children:[x&&Object(c.jsx)("img",{id:"logo".concat(r),className:"project-name",src:x,alt:"project logo"}),Object(c.jsx)("h3",{className:"project-name",children:a})]}),Object(c.jsx)(f.a,{in:L,timeout:800,classNames:"card-back",nodeRef:B,onEnter:function(){R("100%"),y(10),D(!0)},onEntered:function(){P.current.scrollIntoView({block:"start"})},onExit:function(){R(k<750?250:270),y(O),D(!1)},unmountOnExit:!0,children:Object(c.jsxs)("div",{id:"card-back".concat(r),className:"card-back",ref:B,children:[Object(c.jsx)("p",{className:"close",onClick:function(){return A(!1)},children:"X"}),Object(c.jsxs)("div",{className:"card-back-content",children:[Object(c.jsx)("div",{className:"title-wrapper",children:Object(c.jsx)("a",{href:l,target:"_blank",rel:"noreferrer",children:Object(c.jsx)("h4",{children:j})})}),Object(c.jsx)("p",{className:"role",children:p}),Object(c.jsxs)("div",{className:"content-flex-container",children:[Object(c.jsx)("p",{className:"description",children:m}),Object(c.jsx)("div",{className:"demo-container",children:e.video?Object(c.jsx)("video",{className:"demo-vid",controls:!0,children:Object(c.jsx)("source",{src:b,type:"video/mp4"})}):Object(c.jsx)("img",{className:"demo-pic",src:u,alt:"still of project"})})]})]})]})})]})})})}),g=i(6),v=function(){var e=d().displayCard,t=Object(s.useRef)(null),i=Object(s.useRef)(null);return Object(c.jsx)("section",{id:"portfolio",children:Object(c.jsxs)("div",{className:"portfolio-container",ref:i,style:!0===e?{overflow:"hidden"}:{overflow:"scroll"},children:[Object(c.jsx)("div",{id:"card-wrapper0",className:"card-wrapper",children:Object(c.jsx)("div",{id:"card0",className:"card",ref:t,children:Object(c.jsxs)("div",{className:"cover",onClick:function(){i.current.scroll(0,500)},children:[Object(c.jsx)("p",{className:"symbol",id:"arrow",children:"\xbb"}),Object(c.jsx)("h2",{children:"PORTFOLIO"})]})})}),g.map((function(e){return Object(c.jsx)(x,{id:e.id,name:e.name,link:e.link,linkDisplay:e.link_display,role:e.role,description:e.description,video:e.video,image:e.image,stackIndex:e.stack_index,logo:e.logo,top:e.top,right:e.right},e.id)})),Object(c.jsx)("div",{id:"card-wrapper7",className:"card-wrapper",children:Object(c.jsx)("div",{id:"card7",className:"card",children:Object(c.jsxs)("div",{className:"cover",onClick:function(){t.current.scrollIntoView({behavior:"smooth",block:"end"})},children:[Object(c.jsx)("p",{className:"symbol",id:"arrow",children:"\xbb"}),Object(c.jsx)("h2",{children:"BACK TO TOP"})]})})})]})})},k=function(){return Object(c.jsxs)("section",{id:"contact",children:[Object(c.jsx)("p",{className:"special",children:"email me.."}),Object(c.jsx)("p",{className:"emoji special",children:"..\u3006(\u30fb\u2200\u30fb)"}),Object(c.jsx)("p",{className:"special",children:Object(c.jsx)("a",{className:"email-link",href:"mailto: ggrimm33@gmail.com",target:"_blank",rel:"noreferrer",children:"ggrimm33@gmail.com"})})]})},N=function(){var e,t=d().displayCard,i=h().width;return e=!0===t&&i<750?{overflow:"hidden",top:0,bottom:0}:!0===t&&i>=750?{overflow:"hidden",top:"120px",bottom:0}:{overflow:"scroll",top:"120px",bottom:"40px"},Object(c.jsxs)("main",{style:e,children:[Object(c.jsx)(O,{}),Object(c.jsx)(v,{}),Object(c.jsx)(k,{})]})},w=(i(20),function(){var e=d().displayCard,t=h().width;return Object(c.jsxs)("footer",{style:!0===e&&t<750?{transform:"translateY(40px)"}:{transform:"translateY(0)"},children:[Object(c.jsx)("a",{href:"https://www.instagram.com/_instagretch_/",target:"_blank",rel:"noreferrer",children:Object(c.jsx)("i",{className:"fab fa-instagram icon"})}),Object(c.jsx)("a",{href:"https://www.linkedin.com/in/gretchen-grimm-75b6391aa/  ",target:"blank",children:Object(c.jsx)("i",{className:"fab fa-linkedin icon"})}),Object(c.jsx)("a",{href:"https://github.com/grimmgr",target:"_blank",rel:"noreferrer",children:Object(c.jsx)("i",{className:"fab  fa-github icon"})}),Object(c.jsx)("a",{href:"mailto: ggrimm33@gmail.com",target:"_blank",rel:"noreferrer",children:Object(c.jsx)("i",{className:"far fa-envelope icon"})})]})}),E=function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(m,{children:Object(c.jsxs)(j,{children:[Object(c.jsx)(u,{}),Object(c.jsx)(b,{}),Object(c.jsx)(N,{}),Object(c.jsx)(w,{})]})})})},y=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,24)).then((function(t){var i=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;i(e),c(e),s(e),n(e),r(e)}))};a.a.render(Object(c.jsx)(n.a.StrictMode,{children:Object(c.jsx)(E,{})}),document.getElementById("root")),y()}],[[21,1,2]]]);
//# sourceMappingURL=main.b9c3dccb.chunk.js.map