"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.get=void 0;const deep_path_1=require("../String/deep-path");function get(p){return function(e){var t=(0,deep_path_1.deepPath)(e);let r=0,n=t.length,o=p;for(;null!=o&&r<n;)o=o[t[r++]];return r&&r==n?o:void 0}}exports.get=get;
//# sourceMappingURL=get.js.map
