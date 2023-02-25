"use strict";var __importDefault=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});const Object_1=require("../Object"),split_1=__importDefault(require("./split")),replaceAll=_=>(e,t)=>{var r=[],l=(0,split_1.default)(_)(e);for(let e=0;e<l.length;e++){var u=(0,Object_1.$Object)(t).get(l[e]);(0,Object_1.$Object)(t).get(l[e])?r.push(u):r.push(l[e])}return r.join(e)};exports.default=replaceAll;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkJhc2UvU3RyaW5nL3JlcGxhY2UtYWxsLmpzIiwiLi4vc3JjL0Jhc2UvU3RyaW5nL3JlcGxhY2UtYWxsLnRzIl0sIm5hbWVzIjpbIl9faW1wb3J0RGVmYXVsdCIsIm1vZCIsIl9fZXNNb2R1bGUiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIk9iamVjdF8xIiwicmVxdWlyZSIsInNwbGl0XzEiLCJyZXBsYWNlQWxsIiwic3RyaW5nIiwic2VwYXJhdG9yIiwicHJvcGVydGllcyIsInJlc3VsdCIsInBhcnRzIiwiZGVmYXVsdCIsImxldCIsImkiLCJsZW5ndGgiLCJwcm9wZXJ0eSIsIiRPYmplY3QiLCJnZXQiLCJwdXNoIiwiam9pbiIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBLGFBQ0EsSUFBSUEsZ0JBQW9ELFNBQVVDLEdBQTlERCxPQUFBQSxHQUFlQyxFQUFJQyxXQUFRRCxFQUFLRCxDQUFBQSxRQUFlQyxDQUFLLENBRXhELEVBQ0FFLE9BRjZDQyxlQUFXSCxRQUFBQSxhQUFBQSxDQUFBQSxNQUFBQSxDQUFBQSxDQUFBQSxDQUFBQSxFQ0R4RCxNQUFBSSxTQUFBQyxRQUFBLFdBQUEsRUFDQUMsUUFBQVAsZ0JBQUFNLFFBQUEsU0FBQSxDQUFBLEVBRU1FLFdBQ2lCQyxHQUNuQixDQUNJQyxFQUNBQyxLQUVBLElBQU1DLEVBQVMsR0FFVEMsR0FBUSxFQUFBTixRQUFBTyxTQUFNTCxDQUFNLEVBQUVDLENBQVMsRUFFckMsSUFBS0ssSUFBSUMsRUFBSSxFQUFHQSxFQUFJSCxFQUFNSSxPQUFRRCxDQUFDLEdBQUksQ0FDbkMsSUFBTUUsR0FBVyxFQUFBYixTQUFBYyxTQUFXUixDQUFVLEVBQUVTLElBQUlQLEVBQU1HLEVBQUUsR0FFaEQsRUFBQVgsU0FBQWMsU0FBV1IsQ0FBVSxFQUFFUyxJQUFJUCxFQUFNRyxFQUFFLEVBQ25DSixFQUFPUyxLQUFLSCxDQUFRLEVBRXBCTixFQUFPUyxLQUFLUixFQUFNRyxFQUFFLENERmhDLENDTUksT0FBT0osRUFBT1UsS0FBS1osQ0FBUyxDQUNoQyxFQUVKYSxRQUFBVCxRQUFlTiIsImZpbGUiOiJCYXNlL1N0cmluZy9yZXBsYWNlLWFsbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgT2JqZWN0XzEgPSByZXF1aXJlKFwiLi4vT2JqZWN0XCIpO1xuY29uc3Qgc3BsaXRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9zcGxpdFwiKSk7XG5jb25zdCByZXBsYWNlQWxsID0gKHN0cmluZykgPT4gKHNlcGFyYXRvciwgcHJvcGVydGllcykgPT4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgIGNvbnN0IHBhcnRzID0gKDAsIHNwbGl0XzEuZGVmYXVsdCkoc3RyaW5nKShzZXBhcmF0b3IpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgcHJvcGVydHkgPSAoMCwgT2JqZWN0XzEuJE9iamVjdCkocHJvcGVydGllcykuZ2V0KHBhcnRzW2ldKTtcbiAgICAgICAgaWYgKCgwLCBPYmplY3RfMS4kT2JqZWN0KShwcm9wZXJ0aWVzKS5nZXQocGFydHNbaV0pKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChwcm9wZXJ0eSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChwYXJ0c1tpXSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdC5qb2luKHNlcGFyYXRvcik7XG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gcmVwbGFjZUFsbDtcbiIsImltcG9ydCB7IFR5cGVzIH0gZnJvbSAnLi4vVHlwZXMnXG5pbXBvcnQgeyAkT2JqZWN0IH0gZnJvbSAnLi4vT2JqZWN0J1xuaW1wb3J0IHNwbGl0IGZyb20gJy4vc3BsaXQnXG5cbmNvbnN0IHJlcGxhY2VBbGwgPVxuICAgIDxTIGV4dGVuZHMgc3RyaW5nPihzdHJpbmc6IFMpID0+XG4gICAgPFAgZXh0ZW5kcyB7IFt4OiBzdHJpbmddOiBhbnkgfSwgU2VwYXJhdG9yIGV4dGVuZHMgc3RyaW5nID0gc3RyaW5nPihcbiAgICAgICAgc2VwYXJhdG9yOiBTZXBhcmF0b3IsXG4gICAgICAgIHByb3BlcnRpZXM6IFBcbiAgICApOiBUeXBlcy5TdHJpbmcuUmVwbGFjZUFsbDxTLCBQPiA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdXG5cbiAgICAgICAgY29uc3QgcGFydHMgPSBzcGxpdChzdHJpbmcpKHNlcGFyYXRvcilcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9wZXJ0eSA9ICRPYmplY3Q8UD4ocHJvcGVydGllcykuZ2V0KHBhcnRzW2ldKVxuXG4gICAgICAgICAgICBpZiAoJE9iamVjdDxQPihwcm9wZXJ0aWVzKS5nZXQocGFydHNbaV0pKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gocHJvcGVydHkpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhcnRzW2ldKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdC5qb2luKHNlcGFyYXRvcikgYXMgVHlwZXMuU3RyaW5nLlJlcGxhY2VBbGw8UywgUD5cbiAgICB9XG5cbmV4cG9ydCBkZWZhdWx0IHJlcGxhY2VBbGxcbiJdfQ==
