import { nonEmptyString } from "../utils/non-empty-string";
import { accsessors, defaultSerializeOptions } from "./utils/constants";
import { UniqueException } from "./utils/exceptions";
import { Guards } from "../Guards";
var UrlSerializer = /** @class */ (function () {
    function UrlSerializer(path, options, params) {
        if (options === void 0) { options = defaultSerializeOptions; }
        if (params === void 0) { params = {}; }
        this._path = path;
        this._params = params;
        this._options = options;
        this.extendInstancePath = this.extendInstancePath.bind(this);
        this.extendInstanceLink = this.extendInstanceLink.bind(this);
        this.assignParams = this.assignParams.bind(this);
        this.joinParams = this.joinParams.bind(this);
        this.link = this.link.bind(this);
        this.queries = this.queries.bind(this);
        this.serializeQueries = this.serializeQueries.bind(this);
    }
    UrlSerializer.prototype.path = function (str) {
        return new UrlSerializer("".concat(this._path, "/").concat(str), this._options, this._params);
    };
    UrlSerializer.prototype.param = function (str) {
        var _a;
        this.assignParams((_a = {}, _a[":".concat(str)] = str, _a));
        return new UrlSerializer("".concat(this._path, "/:").concat(str), this._options, this._params);
    };
    UrlSerializer.prototype.build = function () {
        return {
            path: this._path,
            extend: this.extendInstancePath,
            link: this.link,
            queries: this.queries
        };
    };
    UrlSerializer.prototype.tupleGetter = function (params, key) {
        return params[key];
    };
    UrlSerializer.prototype.joinParams = function (params) {
        var _this = this;
        var tuple = this._path.split('/');
        var map = tuple.map(function (part) {
            var replacedPart = _this.tupleGetter(params, part);
            return replacedPart ? replacedPart : part;
        });
        return map.join('/');
    };
    UrlSerializer.prototype.assignParams = function (source) {
        var keys = Object.keys(source);
        for (var i = 0; i < keys.length; i++) {
            var key = keys[i];
            if (this._params[key]) {
                throw new UniqueException();
            }
        }
        this._params = Object.assign(this._params, source);
    };
    UrlSerializer.prototype.extendInstancePath = function () {
        return new UrlSerializer(this._path, this._options, this._params);
    };
    UrlSerializer.prototype.extendInstanceLink = function (path) {
        return new UrlSerializer(path, this._options, this._params);
    };
    UrlSerializer.prototype.link = function (params) {
        var _this = this;
        var path = this.joinParams(params);
        return {
            path: path,
            extend: function () { return _this.extendInstanceLink(path); }
        };
    };
    UrlSerializer.prototype.queries = function (params, options) {
        var queries = this.serializeQueries(params, Object.assign(this._options, options));
        var path = "".concat(this._path, "?").concat(queries);
        return {
            path: path,
            extend: this.extendInstancePath
        };
    };
    UrlSerializer.prototype.serializeQueries = function (params, options, prefix) {
        if (options === void 0) { options = this._options; }
        var skipNull = options.skipNull, skipUndefined = options.skipUndefined;
        var result = [];
        for (var key in params) {
            if (params.hasOwnProperty(key)) {
                var value = params[key];
                if (skipNull === true && Guards.isNull(value)) {
                    continue;
                }
                else if (skipUndefined === true && Guards.isUndefined(value)) {
                    continue;
                }
                if (Guards.isArrayConstructor(params)) {
                    var _a = accsessors[options.arrayAccsessor || defaultSerializeOptions.arrayAccsessor], pre = _a[0], post = _a[1];
                    key = "".concat(prefix).concat(pre).concat(post);
                }
                else if (Guards.isObjectConstructor(params)) {
                    var _b = accsessors[options.objectAccsessor || defaultSerializeOptions.objectAccsessor], pre = _b[0], post = _b[1];
                    key = (prefix ? "".concat(prefix).concat(pre).concat(key).concat(post) : key);
                }
                if (Guards.isTypeofObject(value)) {
                    result.push(this.serializeQueries(value, options, key));
                }
                else {
                    result.push("".concat(key, "=").concat(encodeURIComponent(value)));
                }
            }
            else {
                continue;
            }
        }
        result = result.filter(nonEmptyString);
        result = [].concat.apply([], result);
        return result.length ? result.join('&') : "";
    };
    return UrlSerializer;
}());
export { UrlSerializer };
