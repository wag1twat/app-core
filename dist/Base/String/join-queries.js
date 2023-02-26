"use strict";var __importDefault=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});const has_query_params_1=__importDefault(require("./has-query-params")),joinQueries=r=>e=>{return(0,has_query_params_1.default)(r)()?r+"&"+e:r+"?"+e};exports.default=joinQueries;
//# sourceMappingURL=join-queries.js.map
