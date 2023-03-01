import { ArrayOf, JSONPath } from '../../types'
import { Guards } from '../../../Guards'
import getXPath from '../../Object/get-xpath'
import getCompareFunction from './get-compare-function'
import {
    PublicSortMethods,
    SortField,
    SortOptions,
    SortOrder,
    SortState,
    SortUpdateOptions,
} from './types'

class CollectionSort<T extends any[], XPath extends JSONPath<ArrayOf<T>>>
    implements PublicSortMethods<T>
{
    private defaultOrder: SortOrder = 'ASC'
    private defaultOrders: SortOrder[] = ['ASC', 'DESC', 'default']
    private state: SortState<T>
    private setState: (nextState: Partial<SortState<T>>) => void
    private getDefaultCollection: () => T
    public cleanup: () => void
    private haveBeenInitialize: boolean = false
    constructor(collection: T, options: SortOptions<T, XPath>) {
        const {
            onSortUpdate,
            field,
            order = this.defaultOrder,
            orders = this.defaultOrders,
            onMount,
        } = options

        this.state = {
            collection,
            order,
            orders,
            field,
        }

        this.cleanup = () => {
            // this.setState({
            //     collection,
            //     order,
            //     orders,
            //     field
            // })
        }
        this.cleanup = this.cleanup.bind(this)
        this.getDefaultCollection = () => collection
        this.getDefaultCollection = this.getDefaultCollection.bind(this)

        this.setState = function (nextState: Partial<SortState<T>>) {
            this.state = { ...this.state, ...nextState }

            if (Guards.isFunc(onSortUpdate)) {
                onSortUpdate(this.state)
            }
        }
        this.setState = this.setState.bind(this)
        this.getValue = this.getValue.bind(this)
        this.update = this.update.bind(this)
        this.setField = this.setField.bind(this)
        this.setOrder = this.setOrder.bind(this)

        if (Guards.isBoolean(onMount)) {
            if (onMount && !this.haveBeenInitialize) {
                this.update()
                this.haveBeenInitialize = true
            }
        } else if (!this.haveBeenInitialize) {
            this.update()
            this.haveBeenInitialize = true
        }
    }

    private setField = <XPath extends JSONPath<ArrayOf<T>>>(
        field: SortField<T, XPath> | undefined
    ) => {
        if (!Guards.isUndefined(field)) {
            this.setState({ field })
        }
    }

    private setOrder = () => {
        const canUpdate = this.haveBeenInitialize

        if (canUpdate) {
            const lastOrderIndex = this.state.orders.length - 1
            const currentOrderIndex = this.state.orders.indexOf(this.state.order)
            const nextOrderIndex = currentOrderIndex + 1
            this.setState({
                order:
                    nextOrderIndex <= lastOrderIndex
                        ? this.state.orders[nextOrderIndex]
                        : this.state.orders[0],
            })
        }
    }

    private getValue(item: ArrayOf<T>) {
        if (Guards.isString(this.state.field)) {
            return getXPath(item)(this.state.field)
        }
        if (Guards.isObject(this.state.field)) {
            return this.state.field.handler(getXPath(item)(this.state.field.xpath))
        }
        return item
    }

    public update<XPath extends JSONPath<ArrayOf<T>>>(options: SortUpdateOptions<T, XPath> = {}) {
        const { field } = options

        this.setOrder()

        this.setField(field)

        if (this.state.order === 'default') {
            this.setState({
                collection: this.getDefaultCollection().slice() as T,
            })
        } else {
            this.setState({
                collection: (this.state.collection.slice() as T).sort((l, r) =>
                    getCompareFunction(
                        this.state.order as Exclude<SortOrder, 'default'>,
                        this.getValue(l),
                        this.getValue(r)
                    )
                ),
            })
        }
    }
}

const collectionSort = <T extends any[], XPath extends JSONPath<ArrayOf<T>>>(
    collection: T,
    options: SortOptions<T, XPath>
): PublicSortMethods<T> => new CollectionSort(collection, options)

export { collectionSort }
