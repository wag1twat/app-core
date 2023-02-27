"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.paging=void 0;const Guards_1=require("../../../Guards"),getCount=(a,i)=>Math.ceil(a/i),paging=a=>{const{itemsCount:i,pageSize:g,paginationSize:e,onPagingUpdate:n}=a,t={_page:1,_isFirstPage:!0,_isLastPage:!1,_paginationPage:1,_isFirstPaginationPage:!0,_isLastPaginationPage:!1,_paginationPages:[],_visiblePaginationPages:[]},s=()=>{Guards_1.Guards.isFunc(n)&&n(t)},P=()=>getCount(t._paginationPages.length,e),_=()=>getCount(i,g),o=()=>t._paginationPages.slice((t._paginationPage-1)*e,t._paginationPage*e);const p=()=>1===t._paginationPage,r=()=>t._paginationPage===P(),v=()=>t._visiblePaginationPages[0],l=()=>t._visiblePaginationPages[t._visiblePaginationPages.length-1],u=()=>1===t._page,b=()=>t._page===_(),c=()=>{var a=P(),i=t._paginationPage+1;i<=a&&(t._paginationPage=i,t._isFirstPaginationPage=p(),t._isLastPaginationPage=r(),t._visiblePaginationPages=o(),s())},d=()=>{var a=t._paginationPage-1;1<=a&&(t._paginationPage=a,t._isFirstPaginationPage=p(),t._isLastPaginationPage=r(),t._visiblePaginationPages=o(),s())};return t._paginationPages=Array.from(Array(_()).keys()).map(a=>a+1),t._visiblePaginationPages=o(),s(),{setPage:a=>{var i=_(),i=(1<=a&&a<=i&&(t._page=a,t._isFirstPage=u(),t._isLastPage=b(),t._isLastPaginationPage=r(),t._visiblePaginationPages=o(),s()),v()),g=l();a<i&&d(),g<a&&c()},nextPage:()=>{var a=_(),i=t._page+1,a=(i<=a&&(t._page=i,t._isFirstPage=u(),t._isLastPage=b(),s()),l());a<i&&c()},prevPage:()=>{var a=t._page-1,i=(1<=a&&(t._page=a,t._isFirstPage=u(),t._isLastPage=b(),s()),v());a<i&&d()},nextPaginationPage:c,prevPaginationPage:d}};exports.paging=paging;
//# sourceMappingURL=paging.js.map
