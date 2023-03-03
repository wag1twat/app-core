"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.deepPath=void 0;const split_1=require("./split"),memoizeDeepPath=()=>{const t={};return e=>(t[e]||(t[e]=(0,split_1.split)(e)(".")),t[e])},deepPath=memoizeDeepPath();exports.deepPath=deepPath;
//# sourceMappingURL=deep-path.js.map
