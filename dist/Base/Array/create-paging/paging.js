"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.paging=void 0;const Guards_1=require("../../../Guards"),getCount=(g,a)=>Math.ceil(g/a),paging=g=>{const{itemsCount:a,page:e,pageSize:i,paginationSize:n,onPagingUpdate:s}=g,p={page:1,isFirstPage:!0,isLastPage:!1,_pagingPage:1,isFirstPagingPage:!0,isLastPagingPage:!1,_pagingPages:[],pages:[]},t=()=>getCount(a,i);var P=Array.from(Array(t()).keys()).map(g=>g+1),r=[];for(let g=0;g<Math.ceil(P.length/n);g++)r[g]=P.slice(g*n,g*n+n);p._pagingPages=r;const o=()=>{Guards_1.Guards.isFunc(s)&&s(p)},_=()=>p._pagingPages.length,u=()=>1===p._pagingPage,d=()=>p._pagingPage===_(),c=g=>{var a=_();1<=g&&g<=a&&(p._pagingPage=g,p.pages=p._pagingPages[p._pagingPage-1],p.isFirstPagingPage=u(),p.isLastPagingPage=d()),o()};const l=g=>{var a=t();1<=g&&g<=a&&(p.page=g,p.isFirstPage=1===p.page,p.isLastPage=p.page===t(),p.pages.includes(g)||(a=p._pagingPages.findIndex(g=>g.includes(p.page)),p._pagingPage=a+1,p.pages=p._pagingPages[a],p.isFirstPagingPage=u(),p.isLastPagingPage=d())),o()};return l(e),o(),{updatePage:l,nextPage:()=>{l(p.page+1)},prevPage:()=>{l(p.page-1)},nextPaginationPage:()=>{c(p._pagingPage+1)},prevPaginationPage:()=>{c(p._pagingPage-1)}}};exports.paging=paging;
//# sourceMappingURL=paging.js.map
