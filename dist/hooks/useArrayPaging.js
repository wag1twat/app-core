"use strict";var __importDefault=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.useArrayPaging=void 0;const react_1=__importDefault(require("react")),Base_1=require("../Base"),useArrayPaging=e=>{const{startsWith:t,pageSize:a,paginationSize:r,onMount:u,collection:n}=e,i=react_1.default.useRef(n),[o,s]=react_1.default.useState(),[c,l]=react_1.default.useState();(0,Base_1.deepEqual)(i.current,n)||(i.current=n);e=react_1.default.useMemo(()=>(0,Base_1.$Array)(i.current).paging({startsWith:t,pageSize:a,paginationSize:r,onMount:u,onPagingUpdate:t=>s(e=>(0,Base_1.deepEqual)(e,t)?e:t),onCollectionUpdate:t=>l(e=>(0,Base_1.deepEqual)(e,t)?e:t)}),[i.current,t,a,r,u]);return{...o,...e,collection:c}};exports.useArrayPaging=useArrayPaging;
//# sourceMappingURL=useArrayPaging.js.map
