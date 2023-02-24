"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.nonNullOrUndefined=exports.nonEmptyString=void 0;var _Guards=require("../../Guards");const nonNullOrUndefined=n=>!_Guards.Guards.isNull(n)&&!_Guards.Guards.isUndefined(n),nonEmptyString=(exports.nonNullOrUndefined=nonNullOrUndefined,n=>""!==n);exports.nonEmptyString=nonEmptyString;
//# sourceMappingURL=index.js.map
