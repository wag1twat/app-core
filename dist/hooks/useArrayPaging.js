"use strict";var __importDefault=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.useArrayPaging=void 0;const react_1=__importDefault(require("react")),Base_1=require("../Base"),useArrayPaging=e=>{const{pageSize:a,paginationSize:r,items:t=[]}=e,u=react_1.default.useRef(t),[i,n]=react_1.default.useState();(0,Base_1.deepEqual)(u.current,t)||(u.current=t);e=react_1.default.useMemo(()=>(0,Base_1.$Array)(u.current).paging({page:null===i||void 0===i?void 0:i.page,pageSize:a,paginationSize:r,onPagingUpdate:a=>{n(e=>(0,Base_1.deepEqual)(e,a)?e:a)}}),[a,r,u.current]);return Object.assign(i||{},e)};exports.useArrayPaging=useArrayPaging;
//# sourceMappingURL=useArrayPaging.js.map
