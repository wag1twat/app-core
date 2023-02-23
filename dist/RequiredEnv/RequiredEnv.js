var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { Record as RuntypesRecord, String as RuntypesString } from "runtypes";
var defaultOptions = {
    checkOnInitializeClass: true
};
var RequiredEnv = /** @class */ (function () {
    function RequiredEnv(variables, options) {
        if (options === void 0) { options = defaultOptions; }
        this._variables = variables;
        this._contract = this.createContract();
        var checkOnInitializeClass = options.checkOnInitializeClass;
        if (checkOnInitializeClass) {
            this.check();
        }
    }
    RequiredEnv.prototype.createContract = function () {
        return RuntypesRecord(this._variables.reduce(function (a, c) {
            var _a;
            return (__assign(__assign({}, a), (_a = {}, _a[c] = RuntypesString, _a)));
        }, {}));
    };
    RequiredEnv.prototype.check = function () {
        this._contract.check(this.getVariables());
    };
    RequiredEnv.prototype.getVariables = function () {
        return this._variables.reduce(function (a, v) {
            var _a;
            return (__assign(__assign({}, a), (_a = {}, _a[v] = process.env[v], _a)));
        }, {});
    };
    return RequiredEnv;
}());
export { RequiredEnv };
