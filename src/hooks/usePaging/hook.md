## Hooks: usePaging

##### What problem are we solving?

usePaging is for server pagination.

This pagination supports page listing, navigation through increment or decrement of page number or hard setting of page number. There is support for switching pagination pages via function calls [nextPaginationPage | prevPaginationPage].

usePaging also returns other useful properties for your web applications.

```javascript
const pagingProps = usePaging({
    startsWith: 1,
    pageSize: 6,
    paginationSize: 5,
    itemsCount: 10,
})

pagingProps.isFirstPage // > boolean (first page of pages list)
pagingProps.isLastPage // > boolean (last page of pages list)
pagingProps.isFirstPagingPage // > boolean (first page of pagination list)
pagingProps.isLastPagingPage // > boolean (last page of pagination list)
pagingProps.nextPage() // > go page + 1
pagingProps.prevPage() // > go page - 1
pagingProps.updatePage(10) // > set page 10
pagingProps.nextPaginationPage() // > go next page of pagination list
pagingProps.prevPaginationPage() // > go prev page of pagination list
pagingProps.page // > current page
pagingProps.pages // > visible pages of pagination list

// Ugly example for usage
const getTodos = React.useCallback((page: number) => {
    axios
        .get(`/users?page=${pagingProps.page}`)
        .then((response) => {})
        .catch((err) => {})
}, [])

React.useEffect(() => {
    getTodos(pagingProps.page)
}, [pagingProps.page])
```
