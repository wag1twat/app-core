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
import { Guards } from "../Guards";
var EventHandling = /** @class */ (function () {
    function EventHandling() {
    }
    EventHandling.scrollBottomRef = function (ref, options) {
        if (ref.current) {
            if (Guards.isTypeofFn(ref.current.scrollTo) && Guards.isNumber(ref.current.scrollHeight)) {
                ref.current.scrollTo(__assign({ left: 0, top: ref.current.scrollHeight, behavior: "smooth" }, options));
            }
        }
    };
    EventHandling.ifScrollBottom = function (callback, enabled) {
        return function (event) {
            if (enabled) {
                if (event.currentTarget) {
                    var isScrollHeight = Guards.isNumber(event.currentTarget.scrollHeight);
                    var isScrollTop = Guards.isNumber(event.currentTarget.scrollTop);
                    var isClientHeight = Guards.isNumber(event.currentTarget.clientHeight);
                    if (isScrollHeight && isScrollTop && isClientHeight) {
                        var bottom = event.currentTarget.scrollHeight - event.currentTarget.scrollTop === event.currentTarget.clientHeight;
                        if (bottom) {
                            callback(event);
                        }
                    }
                }
            }
        };
    };
    return EventHandling;
}());
export { EventHandling };
