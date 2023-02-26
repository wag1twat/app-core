"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.UniqueParamException=void 0;const message=e=>JSON.stringify({message:`Unique exception, you can't use duplicate < ${e} > in params`},null,2);class UniqueParamException extends Error{constructor(e){super(message(e))}}exports.UniqueParamException=UniqueParamException;
//# sourceMappingURL=exceptions.js.map
