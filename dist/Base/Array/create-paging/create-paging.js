"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.createPaging=void 0;const paging_1=require("./paging"),createPaging=o=>{let p={};return e=>{const{page:g,pageSize:a,paginationSize:n,onMount:t,onPagingUpdate:i}=e;return(0,paging_1.paging)({itemsCount:o.length,page:g,pageSize:a,paginationSize:n,onMount:t,onPagingUpdate:e=>i(Object.assign(e,{collection:p[e.page]||o.slice((e.page-1)*a,e.page*a)}))})}};exports.createPaging=createPaging;
//# sourceMappingURL=create-paging.js.map
