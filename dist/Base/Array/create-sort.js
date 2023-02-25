"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const Types_1=require("../Types"),Guards_1=require("../../Guards"),Object_1=require("../Object"),createSort=c=>r=>{let d=!1;const{field:e,order:s,orders:a,onUpdate:t}=r,u={_collection:[],_order:Types_1.Types.Array.Sort.defaultOrder,_orders:Types_1.Types.Array.Sort.defaultOrders,_field:void 0},i=()=>{Guards_1.Guards.isFunc(t)&&t(u)};r=()=>{u._field=e||void 0,u._order=s||Types_1.Types.Array.Sort.defaultOrder,u._orders=a||Types_1.Types.Array.Sort.defaultOrders,u._collection=[].concat.apply(c),i()};const o=r=>{Guards_1.Guards.isUndefined(r)||(u._field=r)},l=(r,e)=>{let s=!1;e?Guards_1.Guards.isString(u._field)&&Guards_1.Guards.isString(r)?u._field===r&&(s=d):Guards_1.Guards.isString(u._field)&&Guards_1.Guards.isObject(r)?u._field===r.xpath&&(s=d):Guards_1.Guards.isObject(u._field)&&Guards_1.Guards.isString(r)?u._field.xpath===r&&(s=d):Guards_1.Guards.isObject(u._field)&&Guards_1.Guards.isObject(r)&&u._field.xpath===r.xpath&&(s=d):s=d,s&&(e=u._orders.length-1,r=u._orders.indexOf(u._order)+1,u._order=r<=e?u._orders[r]:u._orders[0])},G=()=>"default"===u._order&&(u._collection=[].concat.apply(c),i(),!0);var _=(r={})=>{var{field:r,noUpdateOrderFalsyEqualXPath:e=!1}=r;if(l(r,e),o(r),!G()){const a="ASC"===u._order,t=Guards_1.Guards.isString(u._field),_=Guards_1.Guards.isObject(u._field);u._collection=u._collection.sort((r,e)=>{let s=0;t?(r=r[u._field],e=e[u._field]):_&&(r=u._field.handler((0,Object_1.$Object)(r).getXPath(u._field.xpath)),e=u._field.handler((0,Object_1.$Object)(e).getXPath(u._field.xpath)));var d=Types_1.Types.Array.Sort.compareStrings(a,Guards_1.Guards.isString(r),Guards_1.Guards.isString(e),r,e),d=(Guards_1.Guards.isNumber(d)&&(s=d),Types_1.Types.Array.Sort.compareNumbers(a,Guards_1.Guards.isNumber(r),Guards_1.Guards.isNumber(e),r,e)),d=(Guards_1.Guards.isNumber(d)&&(s=d),Types_1.Types.Array.Sort.compareBooleans(a,Guards_1.Guards.isBoolean(r),Guards_1.Guards.isBoolean(e),r,e));return s=Guards_1.Guards.isNumber(d)?d:s}),i()}};return r(),d||(_({field:e}),d=!0),{cleanup:r,update:_}};exports.default=createSort;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkJhc2UvQXJyYXkvY3JlYXRlLXNvcnQuanMiLCIuLi9zcmMvQmFzZS9BcnJheS9jcmVhdGUtc29ydC50cyJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIlR5cGVzXzEiLCJyZXF1aXJlIiwiR3VhcmRzXzEiLCJPYmplY3RfMSIsImNyZWF0ZVNvcnQiLCJjb2xsZWN0aW9uIiwib3B0aW9ucyIsImxldCIsImNhbGxlZCIsImZpZWxkIiwib3JkZXIiLCJvcmRlcnMiLCJvblVwZGF0ZSIsInN0YXRlIiwiX2NvbGxlY3Rpb24iLCJfb3JkZXIiLCJUeXBlcyIsIkFycmF5IiwiU29ydCIsImRlZmF1bHRPcmRlciIsIl9vcmRlcnMiLCJkZWZhdWx0T3JkZXJzIiwiX2ZpZWxkIiwidW5kZWZpbmVkIiwib25VcGRhdGVDYWxsYmFjayIsIkd1YXJkcyIsImlzRnVuYyIsImluc3RhbGwiLCJjb25jYXQiLCJhcHBseSIsInVwZGF0ZUZpZWxkIiwiaXNVbmRlZmluZWQiLCJ1cGRhdGVPcmRlciIsIm5vVXBkYXRlT3JkZXJGYWxzeUVxdWFsWFBhdGgiLCJpcyIsImlzU3RyaW5nIiwiaXNPYmplY3QiLCJ4cGF0aCIsImxhc3RPcmRlckluZGV4IiwibGVuZ3RoIiwibmV4dE9yZGVySW5kZXgiLCJpbmRleE9mIiwib25EZWZhdWx0T3JkZXIiLCJ1cGRhdGUiLCJpc0FzYyIsImlzU3RyaW5nRmllbGQiLCJpc09iamVjdEZpZWxkIiwic29ydCIsImwiLCJyIiwibiIsImhhbmRsZXIiLCIkT2JqZWN0IiwiZ2V0WFBhdGgiLCJzdHJpbmdzQ29tcGFyYXRpb24iLCJjb21wYXJlU3RyaW5ncyIsIm51bWJlcnNDb21wYXJhdGlvbiIsImlzTnVtYmVyIiwiY29tcGFyZU51bWJlcnMiLCJib29sZWFuQ29tcGFyYXRpb24iLCJjb21wYXJlQm9vbGVhbnMiLCJpc0Jvb2xlYW4iLCJjbGVhbnVwIiwiZGVmYXVsdCJdLCJtYXBwaW5ncyI6IkFB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TyxFQUVGbkIsSUFDRG1DLEVBQU8sQ0FDSGxDLE1BQUFBLENEeERSLENDeURLLEVBQ0RELEVBQVMsQ0FBQSxHQUdOLENBQ0hzRCxRQUFTbkMsRUFDVGdCLE9BQUFBLENEekRKLENDMkRKLEVBRUo3QyxRQUFBaUUsUUFBZTNEIiwiZmlsZSI6IkJhc2UvQXJyYXkvY3JlYXRlLXNvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IFR5cGVzXzEgPSByZXF1aXJlKFwiLi4vVHlwZXNcIik7XG5jb25zdCBHdWFyZHNfMSA9IHJlcXVpcmUoXCIuLi8uLi9HdWFyZHNcIik7XG5jb25zdCBPYmplY3RfMSA9IHJlcXVpcmUoXCIuLi9PYmplY3RcIik7XG5jb25zdCBjcmVhdGVTb3J0ID0gKGNvbGxlY3Rpb24pID0+IChvcHRpb25zKSA9PiB7XG4gICAgbGV0IGNhbGxlZCA9IGZhbHNlO1xuICAgIGNvbnN0IHsgZmllbGQsIG9yZGVyLCBvcmRlcnMsIG9uVXBkYXRlIH0gPSBvcHRpb25zO1xuICAgIGNvbnN0IHN0YXRlID0ge1xuICAgICAgICBfY29sbGVjdGlvbjogW10sXG4gICAgICAgIF9vcmRlcjogVHlwZXNfMS5UeXBlcy5BcnJheS5Tb3J0LmRlZmF1bHRPcmRlcixcbiAgICAgICAgX29yZGVyczogVHlwZXNfMS5UeXBlcy5BcnJheS5Tb3J0LmRlZmF1bHRPcmRlcnMsXG4gICAgICAgIF9maWVsZDogdW5kZWZpbmVkLFxuICAgIH07XG4gICAgY29uc3Qgb25VcGRhdGVDYWxsYmFjayA9ICgpID0+IHtcbiAgICAgICAgaWYgKEd1YXJkc18xLkd1YXJkcy5pc0Z1bmMob25VcGRhdGUpKSB7XG4gICAgICAgICAgICBvblVwZGF0ZShzdGF0ZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IGluc3RhbGwgPSAoKSA9PiB7XG4gICAgICAgIDtcbiAgICAgICAgKHN0YXRlLl9maWVsZCA9IGZpZWxkID8gZmllbGQgOiB1bmRlZmluZWQpLCAoc3RhdGUuX29yZGVyID0gb3JkZXIgPyBvcmRlciA6IFR5cGVzXzEuVHlwZXMuQXJyYXkuU29ydC5kZWZhdWx0T3JkZXIpO1xuICAgICAgICBzdGF0ZS5fb3JkZXJzID0gb3JkZXJzID8gb3JkZXJzIDogVHlwZXNfMS5UeXBlcy5BcnJheS5Tb3J0LmRlZmF1bHRPcmRlcnM7XG4gICAgICAgIHN0YXRlLl9jb2xsZWN0aW9uID0gW10uY29uY2F0LmFwcGx5KGNvbGxlY3Rpb24pO1xuICAgICAgICBvblVwZGF0ZUNhbGxiYWNrKCk7XG4gICAgfTtcbiAgICBjb25zdCB1cGRhdGVGaWVsZCA9IChmaWVsZCkgPT4ge1xuICAgICAgICBpZiAoIUd1YXJkc18xLkd1YXJkcy5pc1VuZGVmaW5lZChmaWVsZCkpIHtcbiAgICAgICAgICAgIHN0YXRlLl9maWVsZCA9IGZpZWxkO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBjb25zdCB1cGRhdGVPcmRlciA9IChmaWVsZCwgbm9VcGRhdGVPcmRlckZhbHN5RXF1YWxYUGF0aCkgPT4ge1xuICAgICAgICBsZXQgaXMgPSBmYWxzZTtcbiAgICAgICAgaWYgKG5vVXBkYXRlT3JkZXJGYWxzeUVxdWFsWFBhdGgpIHtcbiAgICAgICAgICAgIGlmIChHdWFyZHNfMS5HdWFyZHMuaXNTdHJpbmcoc3RhdGUuX2ZpZWxkKSAmJiBHdWFyZHNfMS5HdWFyZHMuaXNTdHJpbmcoZmllbGQpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0YXRlLl9maWVsZCA9PT0gZmllbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgaXMgPSB0cnVlICYmIGNhbGxlZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChHdWFyZHNfMS5HdWFyZHMuaXNTdHJpbmcoc3RhdGUuX2ZpZWxkKSAmJiBHdWFyZHNfMS5HdWFyZHMuaXNPYmplY3QoZmllbGQpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0YXRlLl9maWVsZCA9PT0gZmllbGQueHBhdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgaXMgPSB0cnVlICYmIGNhbGxlZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChHdWFyZHNfMS5HdWFyZHMuaXNPYmplY3Qoc3RhdGUuX2ZpZWxkKSAmJiBHdWFyZHNfMS5HdWFyZHMuaXNTdHJpbmcoZmllbGQpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0YXRlLl9maWVsZC54cGF0aCA9PT0gZmllbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgaXMgPSB0cnVlICYmIGNhbGxlZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChHdWFyZHNfMS5HdWFyZHMuaXNPYmplY3Qoc3RhdGUuX2ZpZWxkKSAmJiBHdWFyZHNfMS5HdWFyZHMuaXNPYmplY3QoZmllbGQpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0YXRlLl9maWVsZC54cGF0aCA9PT0gZmllbGQueHBhdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgaXMgPSB0cnVlICYmIGNhbGxlZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpcyA9IHRydWUgJiYgY2FsbGVkO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpcykge1xuICAgICAgICAgICAgY29uc3QgbGFzdE9yZGVySW5kZXggPSBzdGF0ZS5fb3JkZXJzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50T3JkZXJJbmRleCA9IHN0YXRlLl9vcmRlcnMuaW5kZXhPZihzdGF0ZS5fb3JkZXIpO1xuICAgICAgICAgICAgY29uc3QgbmV4dE9yZGVySW5kZXggPSBjdXJyZW50T3JkZXJJbmRleCArIDE7XG4gICAgICAgICAgICBzdGF0ZS5fb3JkZXIgPSBuZXh0T3JkZXJJbmRleCA8PSBsYXN0T3JkZXJJbmRleCA/IHN0YXRlLl9vcmRlcnNbbmV4dE9yZGVySW5kZXhdIDogc3RhdGUuX29yZGVyc1swXTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgY29uc3Qgb25EZWZhdWx0T3JkZXIgPSAoKSA9PiB7XG4gICAgICAgIGlmIChzdGF0ZS5fb3JkZXIgPT09ICdkZWZhdWx0Jykge1xuICAgICAgICAgICAgc3RhdGUuX2NvbGxlY3Rpb24gPSBbXS5jb25jYXQuYXBwbHkoY29sbGVjdGlvbik7XG4gICAgICAgICAgICBvblVwZGF0ZUNhbGxiYWNrKCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbiAgICBjb25zdCB1cGRhdGUgPSAob3B0aW9ucyA9IHt9KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgZmllbGQsIG5vVXBkYXRlT3JkZXJGYWxzeUVxdWFsWFBhdGggPSBmYWxzZSB9ID0gb3B0aW9ucztcbiAgICAgICAgdXBkYXRlT3JkZXIoZmllbGQsIG5vVXBkYXRlT3JkZXJGYWxzeUVxdWFsWFBhdGgpO1xuICAgICAgICB1cGRhdGVGaWVsZChmaWVsZCk7XG4gICAgICAgIGlmICghb25EZWZhdWx0T3JkZXIoKSkge1xuICAgICAgICAgICAgY29uc3QgaXNBc2MgPSBzdGF0ZS5fb3JkZXIgPT09ICdBU0MnO1xuICAgICAgICAgICAgY29uc3QgaXNTdHJpbmdGaWVsZCA9IEd1YXJkc18xLkd1YXJkcy5pc1N0cmluZyhzdGF0ZS5fZmllbGQpO1xuICAgICAgICAgICAgY29uc3QgaXNPYmplY3RGaWVsZCA9IEd1YXJkc18xLkd1YXJkcy5pc09iamVjdChzdGF0ZS5fZmllbGQpO1xuICAgICAgICAgICAgc3RhdGUuX2NvbGxlY3Rpb24gPSBzdGF0ZS5fY29sbGVjdGlvbi5zb3J0KChsLCByKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IG4gPSAwO1xuICAgICAgICAgICAgICAgIGlmIChpc1N0cmluZ0ZpZWxkKSB7XG4gICAgICAgICAgICAgICAgICAgIGwgPSBsW3N0YXRlLl9maWVsZF07XG4gICAgICAgICAgICAgICAgICAgIHIgPSByW3N0YXRlLl9maWVsZF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGlzT2JqZWN0RmllbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgbCA9IHN0YXRlLl9maWVsZC5oYW5kbGVyKCgwLCBPYmplY3RfMS4kT2JqZWN0KShsKS5nZXRYUGF0aChzdGF0ZS5fZmllbGQueHBhdGgpKTtcbiAgICAgICAgICAgICAgICAgICAgciA9IHN0YXRlLl9maWVsZC5oYW5kbGVyKCgwLCBPYmplY3RfMS4kT2JqZWN0KShyKS5nZXRYUGF0aChzdGF0ZS5fZmllbGQueHBhdGgpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RyaW5nc0NvbXBhcmF0aW9uID0gVHlwZXNfMS5UeXBlcy5BcnJheS5Tb3J0LmNvbXBhcmVTdHJpbmdzKGlzQXNjLCBHdWFyZHNfMS5HdWFyZHMuaXNTdHJpbmcobCksIEd1YXJkc18xLkd1YXJkcy5pc1N0cmluZyhyKSwgbCwgcik7XG4gICAgICAgICAgICAgICAgaWYgKEd1YXJkc18xLkd1YXJkcy5pc051bWJlcihzdHJpbmdzQ29tcGFyYXRpb24pKSB7XG4gICAgICAgICAgICAgICAgICAgIG4gPSBzdHJpbmdzQ29tcGFyYXRpb247XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IG51bWJlcnNDb21wYXJhdGlvbiA9IFR5cGVzXzEuVHlwZXMuQXJyYXkuU29ydC5jb21wYXJlTnVtYmVycyhpc0FzYywgR3VhcmRzXzEuR3VhcmRzLmlzTnVtYmVyKGwpLCBHdWFyZHNfMS5HdWFyZHMuaXNOdW1iZXIociksIGwsIHIpO1xuICAgICAgICAgICAgICAgIGlmIChHdWFyZHNfMS5HdWFyZHMuaXNOdW1iZXIobnVtYmVyc0NvbXBhcmF0aW9uKSkge1xuICAgICAgICAgICAgICAgICAgICBuID0gbnVtYmVyc0NvbXBhcmF0aW9uO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBib29sZWFuQ29tcGFyYXRpb24gPSBUeXBlc18xLlR5cGVzLkFycmF5LlNvcnQuY29tcGFyZUJvb2xlYW5zKGlzQXNjLCBHdWFyZHNfMS5HdWFyZHMuaXNCb29sZWFuKGwpLCBHdWFyZHNfMS5HdWFyZHMuaXNCb29sZWFuKHIpLCBsLCByKTtcbiAgICAgICAgICAgICAgICBpZiAoR3VhcmRzXzEuR3VhcmRzLmlzTnVtYmVyKGJvb2xlYW5Db21wYXJhdGlvbikpIHtcbiAgICAgICAgICAgICAgICAgICAgbiA9IGJvb2xlYW5Db21wYXJhdGlvbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG47XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIG9uVXBkYXRlQ2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgaW5zdGFsbCgpO1xuICAgIGlmICghY2FsbGVkKSB7XG4gICAgICAgIHVwZGF0ZSh7XG4gICAgICAgICAgICBmaWVsZCxcbiAgICAgICAgfSk7XG4gICAgICAgIGNhbGxlZCA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIGNsZWFudXA6IGluc3RhbGwsXG4gICAgICAgIHVwZGF0ZSxcbiAgICB9O1xufTtcbmV4cG9ydHMuZGVmYXVsdCA9IGNyZWF0ZVNvcnQ7XG4iLCJpbXBvcnQgeyBUeXBlcyB9IGZyb20gJy4uL1R5cGVzJ1xuaW1wb3J0IHsgR3VhcmRzIH0gZnJvbSAnLi4vLi4vR3VhcmRzJ1xuaW1wb3J0IHsgJE9iamVjdCB9IGZyb20gJy4uL09iamVjdCdcblxuY29uc3QgY3JlYXRlU29ydCA9XG4gICAgPFQgZXh0ZW5kcyBhbnlbXT4oY29sbGVjdGlvbjogVCkgPT5cbiAgICA8WFBhdGggZXh0ZW5kcyBUeXBlcy5VdGlsaXR5LkpTT05QYXRoPFR5cGVzLkFycmF5Lk9mPFQ+Pj4ob3B0aW9uczogVHlwZXMuQXJyYXkuU29ydC5PcHRpb25zPFQsIFhQYXRoPikgPT4ge1xuICAgICAgICBsZXQgY2FsbGVkOiBib29sZWFuID0gZmFsc2VcblxuICAgICAgICBjb25zdCB7IGZpZWxkLCBvcmRlciwgb3JkZXJzLCBvblVwZGF0ZSB9ID0gb3B0aW9uc1xuXG4gICAgICAgIGNvbnN0IHN0YXRlOiBUeXBlcy5BcnJheS5Tb3J0LlN0YXRlPFQ+ID0ge1xuICAgICAgICAgICAgX2NvbGxlY3Rpb246IFtdIGFzIHVua25vd24gYXMgVCxcbiAgICAgICAgICAgIF9vcmRlcjogVHlwZXMuQXJyYXkuU29ydC5kZWZhdWx0T3JkZXIsXG4gICAgICAgICAgICBfb3JkZXJzOiBUeXBlcy5BcnJheS5Tb3J0LmRlZmF1bHRPcmRlcnMsXG4gICAgICAgICAgICBfZmllbGQ6IHVuZGVmaW5lZCxcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG9uVXBkYXRlQ2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoR3VhcmRzLmlzRnVuYyhvblVwZGF0ZSkpIHtcbiAgICAgICAgICAgICAgICBvblVwZGF0ZShzdGF0ZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGluc3RhbGwgPSAoKSA9PiB7XG4gICAgICAgICAgICA7KHN0YXRlLl9maWVsZCA9IGZpZWxkID8gZmllbGQgOiB1bmRlZmluZWQpLCAoc3RhdGUuX29yZGVyID0gb3JkZXIgPyBvcmRlciA6IFR5cGVzLkFycmF5LlNvcnQuZGVmYXVsdE9yZGVyKVxuICAgICAgICAgICAgc3RhdGUuX29yZGVycyA9IG9yZGVycyA/IG9yZGVycyA6IFR5cGVzLkFycmF5LlNvcnQuZGVmYXVsdE9yZGVyc1xuICAgICAgICAgICAgc3RhdGUuX2NvbGxlY3Rpb24gPSAoW10gYXMgdW5rbm93biBhcyBUKS5jb25jYXQuYXBwbHkoY29sbGVjdGlvbikgYXMgVFxuICAgICAgICAgICAgb25VcGRhdGVDYWxsYmFjaygpXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB1cGRhdGVGaWVsZCA9IDxYUGF0aCBleHRlbmRzIFR5cGVzLlV0aWxpdHkuSlNPTlBhdGg8VHlwZXMuQXJyYXkuT2Y8VD4+PihcbiAgICAgICAgICAgIGZpZWxkOiBUeXBlcy5BcnJheS5Tb3J0LkZpZWxkPFQsIFhQYXRoPiB8IHVuZGVmaW5lZFxuICAgICAgICApID0+IHtcbiAgICAgICAgICAgIGlmICghR3VhcmRzLmlzVW5kZWZpbmVkKGZpZWxkKSkge1xuICAgICAgICAgICAgICAgIHN0YXRlLl9maWVsZCA9IGZpZWxkXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB1cGRhdGVPcmRlciA9IDxYUGF0aCBleHRlbmRzIFR5cGVzLlV0aWxpdHkuSlNPTlBhdGg8VHlwZXMuQXJyYXkuT2Y8VD4+PihcbiAgICAgICAgICAgIGZpZWxkOiBUeXBlcy5BcnJheS5Tb3J0LkZpZWxkPFQsIFhQYXRoPiB8IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIG5vVXBkYXRlT3JkZXJGYWxzeUVxdWFsWFBhdGg6IGJvb2xlYW5cbiAgICAgICAgKSA9PiB7XG4gICAgICAgICAgICBsZXQgaXM6IGJvb2xlYW4gPSBmYWxzZVxuXG4gICAgICAgICAgICBpZiAobm9VcGRhdGVPcmRlckZhbHN5RXF1YWxYUGF0aCkge1xuICAgICAgICAgICAgICAgIGlmIChHdWFyZHMuaXNTdHJpbmcoc3RhdGUuX2ZpZWxkKSAmJiBHdWFyZHMuaXNTdHJpbmcoZmllbGQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGF0ZS5fZmllbGQgPT09IGZpZWxkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpcyA9IHRydWUgJiYgY2FsbGVkXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKEd1YXJkcy5pc1N0cmluZyhzdGF0ZS5fZmllbGQpICYmIEd1YXJkcy5pc09iamVjdChmaWVsZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXRlLl9maWVsZCA9PT0gZmllbGQueHBhdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzID0gdHJ1ZSAmJiBjYWxsZWRcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoR3VhcmRzLmlzT2JqZWN0KHN0YXRlLl9maWVsZCkgJiYgR3VhcmRzLmlzU3RyaW5nKGZpZWxkKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdGUuX2ZpZWxkLnhwYXRoID09PSBmaWVsZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXMgPSB0cnVlICYmIGNhbGxlZFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChHdWFyZHMuaXNPYmplY3Qoc3RhdGUuX2ZpZWxkKSAmJiBHdWFyZHMuaXNPYmplY3QoZmllbGQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGF0ZS5fZmllbGQueHBhdGggPT09IGZpZWxkLnhwYXRoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpcyA9IHRydWUgJiYgY2FsbGVkXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlzID0gdHJ1ZSAmJiBjYWxsZWRcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGlzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbGFzdE9yZGVySW5kZXggPSBzdGF0ZS5fb3JkZXJzLmxlbmd0aCAtIDFcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50T3JkZXJJbmRleCA9IHN0YXRlLl9vcmRlcnMuaW5kZXhPZihzdGF0ZS5fb3JkZXIpXG4gICAgICAgICAgICAgICAgY29uc3QgbmV4dE9yZGVySW5kZXggPSBjdXJyZW50T3JkZXJJbmRleCArIDFcbiAgICAgICAgICAgICAgICBzdGF0ZS5fb3JkZXIgPSBuZXh0T3JkZXJJbmRleCA8PSBsYXN0T3JkZXJJbmRleCA/IHN0YXRlLl9vcmRlcnNbbmV4dE9yZGVySW5kZXhdIDogc3RhdGUuX29yZGVyc1swXVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgb25EZWZhdWx0T3JkZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoc3RhdGUuX29yZGVyID09PSAnZGVmYXVsdCcpIHtcbiAgICAgICAgICAgICAgICBzdGF0ZS5fY29sbGVjdGlvbiA9IChbXSBhcyB1bmtub3duIGFzIFQpLmNvbmNhdC5hcHBseShjb2xsZWN0aW9uKSBhcyBUXG5cbiAgICAgICAgICAgICAgICBvblVwZGF0ZUNhbGxiYWNrKClcblxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHVwZGF0ZSA9IDxYUGF0aCBleHRlbmRzIFR5cGVzLlV0aWxpdHkuSlNPTlBhdGg8VHlwZXMuQXJyYXkuT2Y8VD4+PihcbiAgICAgICAgICAgIG9wdGlvbnM6IFR5cGVzLkFycmF5LlNvcnQuVXBkYXRlT3B0aW9uczxULCBYUGF0aD4gPSB7fVxuICAgICAgICApID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgZmllbGQsIG5vVXBkYXRlT3JkZXJGYWxzeUVxdWFsWFBhdGggPSBmYWxzZSB9ID0gb3B0aW9uc1xuXG4gICAgICAgICAgICB1cGRhdGVPcmRlcihmaWVsZCwgbm9VcGRhdGVPcmRlckZhbHN5RXF1YWxYUGF0aClcblxuICAgICAgICAgICAgdXBkYXRlRmllbGQoZmllbGQpXG5cbiAgICAgICAgICAgIGlmICghb25EZWZhdWx0T3JkZXIoKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlzQXNjID0gc3RhdGUuX29yZGVyID09PSAnQVNDJ1xuICAgICAgICAgICAgICAgIGNvbnN0IGlzU3RyaW5nRmllbGQgPSBHdWFyZHMuaXNTdHJpbmcoc3RhdGUuX2ZpZWxkKVxuICAgICAgICAgICAgICAgIGNvbnN0IGlzT2JqZWN0RmllbGQgPSBHdWFyZHMuaXNPYmplY3Qoc3RhdGUuX2ZpZWxkKVxuXG4gICAgICAgICAgICAgICAgc3RhdGUuX2NvbGxlY3Rpb24gPSBzdGF0ZS5fY29sbGVjdGlvbi5zb3J0KChsLCByKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBuID0gMFxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc1N0cmluZ0ZpZWxkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsID0gbFtzdGF0ZS5fZmllbGRdXG4gICAgICAgICAgICAgICAgICAgICAgICByID0gcltzdGF0ZS5fZmllbGRdXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNPYmplY3RGaWVsZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbCA9IChzdGF0ZS5fZmllbGQgYXMgVHlwZXMuQXJyYXkuU29ydC5GaWVsZE9iamVjdDxULCBYUGF0aD4pLmhhbmRsZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJE9iamVjdChsKS5nZXRYUGF0aCgoc3RhdGUuX2ZpZWxkIGFzIFR5cGVzLkFycmF5LlNvcnQuRmllbGRPYmplY3Q8VCwgWFBhdGg+KS54cGF0aClcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIHIgPSAoc3RhdGUuX2ZpZWxkIGFzIFR5cGVzLkFycmF5LlNvcnQuRmllbGRPYmplY3Q8VCwgWFBhdGg+KS5oYW5kbGVyKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRPYmplY3QocikuZ2V0WFBhdGgoKHN0YXRlLl9maWVsZCBhcyBUeXBlcy5BcnJheS5Tb3J0LkZpZWxkT2JqZWN0PFQsIFhQYXRoPikueHBhdGgpXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdHJpbmdzQ29tcGFyYXRpb24gPSBUeXBlcy5BcnJheS5Tb3J0LmNvbXBhcmVTdHJpbmdzKFxuICAgICAgICAgICAgICAgICAgICAgICAgaXNBc2MsXG4gICAgICAgICAgICAgICAgICAgICAgICBHdWFyZHMuaXNTdHJpbmcobCksXG4gICAgICAgICAgICAgICAgICAgICAgICBHdWFyZHMuaXNTdHJpbmcociksXG4gICAgICAgICAgICAgICAgICAgICAgICBsLFxuICAgICAgICAgICAgICAgICAgICAgICAgclxuICAgICAgICAgICAgICAgICAgICApXG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKEd1YXJkcy5pc051bWJlcihzdHJpbmdzQ29tcGFyYXRpb24pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuID0gc3RyaW5nc0NvbXBhcmF0aW9uXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBudW1iZXJzQ29tcGFyYXRpb24gPSBUeXBlcy5BcnJheS5Tb3J0LmNvbXBhcmVOdW1iZXJzKFxuICAgICAgICAgICAgICAgICAgICAgICAgaXNBc2MsXG4gICAgICAgICAgICAgICAgICAgICAgICBHdWFyZHMuaXNOdW1iZXIobCksXG4gICAgICAgICAgICAgICAgICAgICAgICBHdWFyZHMuaXNOdW1iZXIociksXG4gICAgICAgICAgICAgICAgICAgICAgICBsLFxuICAgICAgICAgICAgICAgICAgICAgICAgclxuICAgICAgICAgICAgICAgICAgICApXG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKEd1YXJkcy5pc051bWJlcihudW1iZXJzQ29tcGFyYXRpb24pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuID0gbnVtYmVyc0NvbXBhcmF0aW9uXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBib29sZWFuQ29tcGFyYXRpb24gPSBUeXBlcy5BcnJheS5Tb3J0LmNvbXBhcmVCb29sZWFucyhcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzQXNjLFxuICAgICAgICAgICAgICAgICAgICAgICAgR3VhcmRzLmlzQm9vbGVhbihsKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIEd1YXJkcy5pc0Jvb2xlYW4ociksXG4gICAgICAgICAgICAgICAgICAgICAgICBsLFxuICAgICAgICAgICAgICAgICAgICAgICAgclxuICAgICAgICAgICAgICAgICAgICApXG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKEd1YXJkcy5pc051bWJlcihib29sZWFuQ29tcGFyYXRpb24pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuID0gYm9vbGVhbkNvbXBhcmF0aW9uXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gblxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICBvblVwZGF0ZUNhbGxiYWNrKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGluc3RhbGwoKVxuXG4gICAgICAgIGlmICghY2FsbGVkKSB7XG4gICAgICAgICAgICB1cGRhdGUoe1xuICAgICAgICAgICAgICAgIGZpZWxkLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGNhbGxlZCA9IHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjbGVhbnVwOiBpbnN0YWxsLFxuICAgICAgICAgICAgdXBkYXRlLFxuICAgICAgICB9XG4gICAgfVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTb3J0XG4iXX0=