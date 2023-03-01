## Hooks: useCollectionPaging

##### What problem are we solving?

It happens that we do not have server-side pagination and we need to implement it on the front.

This pagination supports page listing, navigation through increment or decrement of page number or hard setting of page number. There is support for switching pagination pages via function calls [nextPagingPage | prevPagingPage].

useCollectionPaging also returns other useful properties for your web applications.

```javascript

const pagingProps = useCollectionPaging({
    startsWith: 1,
    pageSize: 15,
    paginationSize: 6,
    collection: [1, 2, 3, 4, 5, 6]
    onMount: true
});

pagingProps.collection // > array of page items
pagingProps.isFirstPage // > boolean (first page of pages list)
pagingProps.isLastPage // > boolean (last page of pages list)
pagingProps.isFirstPagingPage // > boolean (first page of pagination list)
pagingProps.isLastPagingPage // > boolean (last page of pagination list)
pagingProps.nextPage() // > go page + 1
pagingProps.prevPage() // > go page - 1
pagingProps.updatePage(10) // > set page 10
pagingProps.nextPagingPage() // > go next page of pagination list
pagingProps.prevPagingPage() // > go prev page of pagination list
pagingProps.page // > current page
pagingProps.pages // > visible pages of pagination list

```

---
