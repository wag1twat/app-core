"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.joinQueries=void 0;const has_query_params_1=require("./has-query-params"),joinQueries=r=>e=>{return(0,has_query_params_1.hasQueryParams)(r)()?r+"&"+e:r+"?"+e};exports.joinQueries=joinQueries;
//# sourceMappingURL=join-queries.js.map
