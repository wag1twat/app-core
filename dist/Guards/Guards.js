var Guards = /** @class */ (function () {
    function Guards() {
    }
    Guards.isString = function (value) {
        return typeof value === 'string';
    };
    Guards.isNumber = function (value) {
        return typeof value === 'number' && !isNaN(value);
    };
    Guards.isBoolean = function (value) {
        return typeof value === 'boolean';
    };
    Guards.isNull = function (value) {
        return value === null;
    };
    Guards.isUndefined = function (value) {
        return typeof value === 'undefined';
    };
    Guards.isArrayConstructor = function (value) {
        return value.constructor && value.constructor === Array;
    };
    Guards.isObjectConstructor = function (value) {
        return value.constructor && value.constructor === Object;
    };
    Guards.isTypeofObject = function (value) {
        return value !== null && typeof value === 'object';
    };
    Guards.isTypeofFn = function (value) { return typeof value === 'function'; };
    return Guards;
}());
export { Guards };
