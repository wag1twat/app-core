"use strict";var __importDefault=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.useArrayPaging=void 0;const react_1=__importDefault(require("react")),Base_1=require("../Base"),useArrayPaging=e=>{const{startsWith:a,pageSize:t,paginationSize:r,onMount:u,collection:n}=e,i=react_1.default.useRef(n),[o,s]=react_1.default.useState({page:a||1}),[l,c]=react_1.default.useState();(0,Base_1.deepEqual)(i.current,n)||(i.current=n);e=react_1.default.useMemo(()=>(0,Base_1.$Array)(i.current).paging({startsWith:null===o||void 0===o?void 0:o.page,pageSize:t,paginationSize:r,onMount:u,onPagingUpdate:a=>s(e=>(0,Base_1.deepEqual)(e,a)?e:{...e,...a}),onCollectionUpdate:a=>c(e=>(0,Base_1.deepEqual)(e,a)?e:a)}),[i.current,null===o||void 0===o?void 0:o.page,t,r,u]);return{...o,...e,collection:l}};exports.useArrayPaging=useArrayPaging;
//# sourceMappingURL=useArrayPaging.js.map
