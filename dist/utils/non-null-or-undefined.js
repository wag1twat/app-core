import { Guards } from "../Guards";
export var nonNullOrUndefined = function (value) {
    return !Guards.isNull(value) && !Guards.isUndefined(value);
};
