"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.noEmptyString=exports.noNullAndUndefined=void 0;const Guards_1=require("../../Guards"),noNullAndUndefined=n=>!Guards_1.Guards.isNull(n)&&!Guards_1.Guards.isUndefined(n),noEmptyString=(exports.noNullAndUndefined=noNullAndUndefined,n=>""!==n);exports.noEmptyString=noEmptyString;
//# sourceMappingURL=index.js.map
