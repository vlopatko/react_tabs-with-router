(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{32:function(e,t,c){},33:function(e,t,c){"use strict";c.r(t);var n=c(23),a=c.n(n),s=c(8),i=c(2),j=c(3),b=function(){return Object(j.jsx)("h1",{className:"title",children:"Home page"})},r=c(17),l=c.n(r),d=function(e){var t=e.tab,c=Object(i.r)().tabId;return Object(j.jsx)("li",{"data-cy":"Tab",className:l()({"is-active":t.id===c}),children:c===t.id?Object(j.jsx)(s.b,{to:"../",children:t.title}):Object(j.jsx)(s.b,{to:"../".concat(t.id),children:t.title})})},o=function(){var e=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],t=Object(i.r)().tabId,c=e.map((function(e){return e.id})).includes("".concat(t)),n=e.find((function(e){return e.id===t}));return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{className:"title",children:"Tabs page"}),Object(j.jsx)("div",{className:"tabs is-boxed",children:Object(j.jsx)("ul",{children:e.map((function(e){return Object(j.jsx)(d,{tab:e},e.id)}))})}),Object(j.jsx)("div",{className:"block","data-cy":"TabContent",children:c?null===n||void 0===n?void 0:n.content:"Please select a tab"})]})},x=function(){return Object(j.jsx)("h1",{className:"title",children:"Page not found"})},h=(c(30),c(31),c(32),function(e){var t=e.isActive;return l()("navbar-item",{"is-active":t})}),O=function(){return Object(j.jsx)("nav",{className:"navbar is-light is-fixed-top is-mobile has-shadow","data-cy":"Nav",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"navbar-brand",children:[Object(j.jsx)(s.c,{to:"/",className:h,children:"Home"}),Object(j.jsx)(s.c,{to:"/tabs",className:h,children:"Tabs"})]})})})},u=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(O,{}),Object(j.jsx)("div",{className:"section",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsx)(i.b,{})})})]})},m=function(){return Object(j.jsx)(s.a,{children:Object(j.jsx)(i.e,{children:Object(j.jsxs)(i.c,{path:"/",element:Object(j.jsx)(u,{}),children:[Object(j.jsx)(i.c,{index:!0,element:Object(j.jsx)(b,{})}),Object(j.jsx)(i.c,{path:"tabs",children:Object(j.jsx)(i.c,{path:":tabId?",element:Object(j.jsx)(o,{})})}),Object(j.jsx)(i.c,{path:"home",element:Object(j.jsx)(i.a,{to:"/"})}),Object(j.jsx)(i.c,{path:"*",element:Object(j.jsx)(x,{})})]})})})};a.a.render(Object(j.jsx)(m,{}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.6097eaae.chunk.js.map