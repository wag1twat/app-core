"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.paging=void 0;const Guards_1=require("../../../Guards"),getCount=(g,a)=>Math.ceil(g/a),paging=g=>{const{itemsCount:a,page:e,pageSize:i,onPagingUpdate:s}=g,n={page:1,isFirstPage:!0,isLastPage:!1,_pagingPage:1,isFirstPagingPage:!0,isLastPagingPage:!1,_pagingPages:[],pages:[]},t=()=>getCount(a,i);var p=Array.from(Array(t()).keys()).map(g=>g+1),P=[];for(let g=0;g<Math.ceil(p.length/i);g++)P[g]=p.slice(g*i,g*i+i);n._pagingPages=P;const r=()=>{Guards_1.Guards.isFunc(s)&&s(n)},o=()=>n._pagingPages.length,u=()=>1===n._pagingPage,_=()=>n._pagingPage===o(),d=g=>{var a=o();1<=g&&g<=a&&(n._pagingPage=g,n.isFirstPagingPage=u(),n.isLastPagingPage=_()),r()};const c=g=>{var a=t();1<=g&&g<=a&&(n.page=g,n.isFirstPage=1===n.page,n.isLastPage=n.page===t(),n.pages.includes(g)||(a=n._pagingPages.findIndex(g=>g.includes(n.page)),n._pagingPage=a+1,n.pages=n._pagingPages[a],n.isFirstPagingPage=u(),n.isLastPagingPage=_())),r()};return c(e),r(),{updatePage:c,nextPage:()=>{c(n.page+1)},prevPage:()=>{c(n.page-1)},nextPaginationPage:()=>{d(n._pagingPage+1)},prevPaginationPage:()=>{d(n._pagingPage-1)}}};exports.paging=paging;
//# sourceMappingURL=paging.js.map
