"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.createPaging=void 0;const Guards_1=require("../../../Guards"),paging_1=require("./paging"),createPaging=r=>e=>{const{page:a,pageSize:g,paginationSize:n,onMount:i,onPagingUpdate:t,onCollectionUpdate:o}=e;return(0,paging_1.paging)({itemsCount:r.length,page:a,pageSize:g,paginationSize:n,onMount:i,onPagingUpdate:e=>{Guards_1.Guards.isFunc(t)&&(t(e),o(r.slice((e.page-1)*g,e.page*g)))}})};exports.createPaging=createPaging;
//# sourceMappingURL=create-paging.js.map
