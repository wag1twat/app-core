"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.nonEmptyString=exports.nonNullOrUndefined=void 0;const Guards_1=require("../../Guards"),nonNullOrUndefined=n=>!Guards_1.Guards.isNull(n)&&!Guards_1.Guards.isUndefined(n),nonEmptyString=(exports.nonNullOrUndefined=nonNullOrUndefined,n=>""!==n);exports.nonEmptyString=nonEmptyString;
//# sourceMappingURL=index.js.map
