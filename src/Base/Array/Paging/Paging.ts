import { Guards } from '../../../Guards'
import { PagingOptions, PagingState, PublicPagingMethods } from './types'

class Paging implements PublicPagingMethods {
    private state: PagingState
    private options: PagingOptions
    private pagingPage: number = 1
    private pagingPages: number[][] = []
    constructor(options: PagingOptions) {
        this.state = {
            page: options.startsWith || 1,
            isFirstPage: true,
            isLastPage: false,
            isFirstPagingPage: true,
            isLastPagingPage: false,
            pages: [],
        }
        this.options = options
        this.setState = this.setState.bind(this)
        this.getPagesCount = this.getPagesCount.bind(this)
        this.getPagingPages = this.getPagingPages.bind(this)
        this.pagingPages = this.getPagingPages()
        this.nextPage = this.nextPage.bind(this)
        this.prevPage = this.prevPage.bind(this)
        this.nextPagingPage = this.nextPagingPage.bind(this)
        this.prevPagingPage = this.prevPagingPage.bind(this)
        this.updatePage = this.updatePage.bind(this)
        this.updatePagingPage = this.updatePagingPage.bind(this)
        this.isFirstPage = this.isFirstPage.bind(this)
        this.isLastPage = this.isLastPage.bind(this)
        this.isFirstPagingPage = this.isFirstPagingPage.bind(this)
        this.isLastPagingPage = this.isLastPagingPage.bind(this)

        if (Guards.isBoolean(this.options.onMount)) {
            if (this.options.onMount) {
                this.updatePage(this.state.page)
            }
        } else {
            this.updatePage(this.state.page)
        }
    }
    private setState(nextState: Partial<PagingState>) {
        this.state = { ...this.state, ...nextState }

        if (Guards.isFunc(this.options.onPagingUpdate)) {
            this.options.onPagingUpdate(this.state)
        }
    }
    private getPagesCount() {
        return Math.ceil(this.options.itemsCount / this.options.pageSize)
    }
    private isFirstPage = (page: number) => page === 1
    private isLastPage = (page: number) => page === this.getPagesCount()
    private isFirstPagingPage = (pagingPage: number) => pagingPage === 1
    private isLastPagingPage = (pagingPage: number) => pagingPage === this.pagingPages.length
    private getPagingPages() {
        const pages = Array.from(Array(this.getPagesCount()).keys()).map((page) => page + 1)
        const pagingPages = []
        for (let i = 0; i < Math.ceil(pages.length / this.options.paginationSize); i++) {
            pagingPages[i] = pages.slice(
                i * this.options.paginationSize,
                i * this.options.paginationSize + this.options.paginationSize
            )
        }
        return pagingPages
    }
    private updatePagingPage(pagingPage: number) {
        const count = this.pagingPages.length
        const canUpdate = pagingPage >= 1 && count >= pagingPage
        if (canUpdate) {
            this.pagingPage = pagingPage
            this.setState({
                pages: this.pagingPages[this.pagingPage - 1],
                isFirstPagingPage: this.isFirstPagingPage(pagingPage),
                isLastPagingPage: this.isLastPagingPage(pagingPage),
            })
        }
    }
    public nextPagingPage() {
        this.updatePagingPage(this.pagingPage + 1)
    }
    public prevPagingPage() {
        this.updatePagingPage(this.pagingPage + 1)
    }

    public updatePage(page: number) {
        const count = this.getPagesCount()
        const canUpdate = page >= 1 && count >= page

        if (canUpdate) {
            this.setState({
                page,
                isFirstPage: this.isFirstPage(page),
                isLastPage: this.isLastPage(page),
            })

            if (!this.state.pages.includes(page)) {
                const index = this.pagingPages.findIndex((x) => x.includes(this.state.page))
                this.pagingPage = index + 1
                this.setState({
                    pages: this.pagingPages[index],
                    isFirstPagingPage: this.isFirstPagingPage(this.pagingPage),
                    isLastPagingPage: this.isLastPagingPage(this.pagingPage),
                })
            }
        }
    }
    public nextPage() {
        this.updatePage(this.state.page + 1)
    }
    public prevPage() {
        this.updatePage(this.state.page - 1)
    }
}

const paging = (options: PagingOptions): PublicPagingMethods => new Paging(options)

export { paging, Paging }
