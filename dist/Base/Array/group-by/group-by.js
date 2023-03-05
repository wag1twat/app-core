"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.groupBy=void 0;const get_1=require("../../Object/get"),groupBy=function(e,o){const s=new Map;return e.forEach(e=>{var r,t=(0,get_1.get)(e)(o);t&&((r=s.get(t))?r.push(e):s.set(t,[e]))}),{map:s,values:Array.from(s.values()),entries:Array.from(s.entries())}};exports.groupBy=groupBy;
//# sourceMappingURL=group-by.js.map
