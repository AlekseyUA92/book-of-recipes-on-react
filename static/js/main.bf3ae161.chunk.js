(this.webpackJsonpproject_food_book=this.webpackJsonpproject_food_book||[]).push([[0],{25:function(e,t,c){},33:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),s=c(18),a=c.n(s),i=(c(25),c(4)),j=c(2),o=c(0);var l=function(){return Object(o.jsx)("nav",{className:"amber darken-2",children:Object(o.jsxs)("div",{className:"nav-wrapper ",children:[Object(o.jsx)(i.b,{to:"/",className:"brand-logo",children:"React Food-Book"}),Object(o.jsxs)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:[Object(o.jsx)("li",{children:Object(o.jsx)(i.b,{to:"/about",children:"About"})}),Object(o.jsx)("li",{children:Object(o.jsx)(i.b,{to:"/contacts",children:"Contacts"})})]})]})})};var b=function(){return Object(o.jsx)("footer",{className:"page-footer teal lighten-2",children:Object(o.jsx)("div",{children:Object(o.jsxs)("div",{className:"container",children:[(new Date).getFullYear()," \xa9 Copyright Text",Object(o.jsxs)("div",{className:"footer-freepik",children:["Icons made by ",Object(o.jsx)("a",{href:"https://www.freepik.com",title:"Freepik",children:"Freepik"})," from ",Object(o.jsx)("a",{href:"https://www.flaticon.com/",title:"Flaticon",children:"www.flaticon.com"})]}),Object(o.jsx)("a",{className:"grey-text text-lighten-4 right",href:"https://github.com/AlekseyUA92/showcase-on-react",target:"_blank",rel:"noreferrer",children:"Repository"})]})})})},d=c(8),h=c(10),u=c.n(h),O=c(13),x="https://www.themealdb.com/api/json/v1/".concat("1","/"),p=function(){var e=Object(O.a)(u.a.mark((function e(t){var c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(x+"lookup.php?i="+t);case 2:return c=e.sent,e.next=5,c.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(O.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(x+"categories.php");case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(O.a)(u.a.mark((function e(t){var c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(x+"filter.php?c="+t);case 2:return c=e.sent,e.next=5,c.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function v(){return Object(o.jsx)("div",{className:"preloader-wrapper big active",children:Object(o.jsxs)("div",{className:"spinner-layer spinner-blue-only",children:[Object(o.jsx)("div",{className:"circle-clipper left",children:Object(o.jsx)("div",{className:"circle"})}),Object(o.jsx)("div",{className:"gap-patch",children:Object(o.jsx)("div",{className:"circle"})}),Object(o.jsx)("div",{className:"circle-clipper right",children:Object(o.jsx)("div",{className:"circle"})})]})})}var g=c(12);function N(e){var t=e.strCategory,c=e.strCategoryThumb,n=e.strCategoryDescription;return Object(o.jsxs)("div",{className:"card",children:[Object(o.jsx)("div",{className:"card-image",children:Object(o.jsx)("img",{src:c,alt:t})}),Object(o.jsxs)("div",{className:"card-content",children:[Object(o.jsx)("span",{className:"card-title",children:t}),Object(o.jsxs)("p",{children:[n.slice(0,60),"..."]})]}),Object(o.jsx)("div",{className:"card-action",children:Object(o.jsx)(i.b,{to:"/category/".concat(t),className:"btn",children:"Watch category"})})]})}function w(e){var t=e.catalog,c=void 0===t?[]:t;return Object(o.jsx)("div",{className:"list",children:c.map((function(e){return Object(o.jsx)(N,Object(g.a)({},e),e.idCategory)}))})}function y(e){var t=e.cb,c=void 0===t?Function.prototype:t,r=Object(n.useState)(""),s=Object(d.a)(r,2),a=s[0],i=s[1],j=function(){c(a)};return Object(o.jsx)("div",{className:"row",children:Object(o.jsxs)("div",{className:"input-field col s12",children:[Object(o.jsx)("input",{type:"search",id:"search-field",placeholder:"search",onKeyDown:function(e){"Enter"===e.key&&j()},onChange:function(e){return i(e.target.value)},value:a}),Object(o.jsx)("button",{className:"btn search-button",onClick:j,children:"Search"})]})})}function k(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)([]),a=Object(d.a)(s,2),i=a[0],l=a[1],b=Object(j.g)(),h=b.pathname,u=b.search,O=Object(j.f)().push;return Object(n.useEffect)((function(){m().then((function(e){r(e.categories),l(u?e.categories.filter((function(e){return e.strCategory.toLowerCase().includes(u.split("=")[1].toLowerCase())})):e.categories)}))}),[u]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(y,{cb:function(e){l(c.filter((function(t){return t.strCategory.toLowerCase().includes(e.toLowerCase())}))),O({pathname:h,search:"?search=".concat(e)})}}),c.length?Object(o.jsx)(w,{catalog:i}):Object(o.jsx)(v,{})]})}function C(){return Object(o.jsx)("h1",{children:"Hello, this is About page!"})}function F(){return Object(o.jsx)("h1",{children:"Hello, this is Contact page!"})}function M(){return Object(o.jsx)("h1",{children:"Page not found \xaf\\_(\u30c4)_/\xaf"})}function B(e){var t=e.strMeal,c=e.idMeal,n=e.strMealThumb;return Object(o.jsxs)("div",{className:"card",children:[Object(o.jsx)("div",{className:"card-image",children:Object(o.jsx)("img",{src:n,alt:t})}),Object(o.jsx)("div",{className:"card-content",children:Object(o.jsx)("span",{className:"card-title",children:t})}),Object(o.jsx)("div",{className:"card-action",children:Object(o.jsx)(i.b,{to:"/meal/".concat(c),className:"btn",children:"Watch recipe"})})]})}function S(e){var t=e.meals;return Object(o.jsx)("div",{className:"list",children:t.map((function(e){return Object(o.jsx)(B,Object(g.a)({},e),e.idMeal)}))})}function _(){var e=Object(j.h)().name,t=Object(n.useState)([]),c=Object(d.a)(t,2),r=c[0],s=c[1],a=Object(j.f)().goBack;return Object(n.useEffect)((function(){f(e).then((function(e){return s(e.meals)}))}),[e]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("button",{className:"btn",onClick:a,children:"Go Back"}),r.length?Object(o.jsx)(S,{meals:r}):Object(o.jsx)(v,{})]})}function A(e){var t=e.recipe,c=e.goBack,n=t.idMeal,r=t.strMeal,s=t.strCategory,a=t.strArea,i=t.strMealThumb,j=t.strInstructions,l=t.strYoutube;return Object(o.jsxs)("div",{className:"recipe",children:[Object(o.jsx)("img",{src:i,alt:r}),Object(o.jsx)("h1",{className:"card-title",children:r}),Object(o.jsxs)("h6",{children:["Category: ",s]}),a?Object(o.jsx)("h6",{children:a}):null,Object(o.jsx)("p",{children:j}),Object(o.jsxs)("table",{className:"centered",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"Ingredient"}),Object(o.jsx)("th",{children:"Measure"})]})}),Object(o.jsx)("tbody",{children:Object.keys(t).map((function(e){return e.includes("Ingredient")&&t[e]?Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:t[e]}),Object(o.jsx)("td",{children:t["strMeasure".concat(e.slice(13))]})]},e):null}))})]}),l?Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("h5",{className:"video-title",children:"Video Recipe"}),Object(o.jsx)("iframe",{title:n,src:"https://www.youtube.com/embed/".concat(l.slice(-11)),allowFullScreen:!0})]}):null,Object(o.jsx)("button",{onClick:c,className:"btn",children:"Go Back"})]})}function E(){var e=Object(j.h)().id,t=Object(j.f)().goBack,c=Object(n.useState)({}),r=Object(d.a)(c,2),s=r[0],a=r[1];return Object(n.useEffect)((function(){p(e).then((function(e){return a(e.meals[0])}))}),[e]),Object(o.jsx)(o.Fragment,{children:s.idMeal?Object(o.jsx)(A,{recipe:s,goBack:t}):Object(o.jsx)(v,{})})}var I=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)(i.a,{basename:"/book-of-recipes-on-react",children:[Object(o.jsx)(l,{}),Object(o.jsx)("main",{className:"container content",children:Object(o.jsxs)(j.c,{children:[Object(o.jsx)(j.a,{exact:!0,path:"/",children:Object(o.jsx)(k,{})}),Object(o.jsx)(j.a,{path:"/about",component:C}),Object(o.jsx)(j.a,{path:"/contacts",component:F}),Object(o.jsx)(j.a,{path:"/category/:name",component:_}),Object(o.jsx)(j.a,{path:"/meal/:id",component:E}),Object(o.jsx)(j.a,{component:M})]})}),Object(o.jsx)(b,{})]})})};a.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(I,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.bf3ae161.chunk.js.map