"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Guards=void 0;class Guards{}(exports.Guards=Guards).isString=r=>"string"==typeof r,Guards.isNumber=r=>"number"==typeof r&&!isNaN(r),Guards.isBoolean=r=>"boolean"==typeof r,Guards.isNull=r=>null===r,Guards.isUndefined=r=>void 0===r,Guards.isArrayConstructor=r=>r.constructor&&r.constructor===Array,Guards.isObjectConstructor=r=>r.constructor&&r.constructor===Object,Guards.isTypeofObject=r=>null!==r&&"object"==typeof r,Guards.isTypeofFn=r=>"function"==typeof r;
//# sourceMappingURL=Guards.js.map
