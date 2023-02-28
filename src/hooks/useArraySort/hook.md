## Hooks: useArraySort

##### What problem are we solving?

Sometimes we have to sort data at the front and the default sort is either not enough or we have to write a lot of handler functions for [].sort().

This sort narrows the types of processed values to boolean | number | string and implements the shift order ASC > DESC > default > ASC > DESC > default and so on.

The order update is implemented by calling the [update] property without passing a parameter. But if we want to change the property by which we sort, specify [field] in the [update] parameters.

Through the property handler [handler: (item) => primitive] we can customize our property value in [].sort().

The [field] value supports JSONPath autocompletion.

You can work with primitive arrays without specifying [field]

Null | undefiend values will be moved to the end of the array in any sort order.

The order is determined by the [orders] property. Available 'ASC' | 'DESC' | 'default', you can specify any combination of values.

Performance lags slightly behind the default [].sort() method up to 1 million objects in the sorted array

```javascript
const arrayOfObjects = useArraySort({
        collection: todos,
        order: "ASC",
        orders: ["ASC", "DESC", "default"],
        field: "id"
});

const arrayOfPrimitievs = useArraySort({
        collection: [1, 2, 3, 4, 5, 6, 7],
        order: "ASC",
        orders: ["ASC", "DESC", "default"],
});

arrayOfObjects.cleanup > reset to initial state
arrayOfObjects.collection > sorted collection
arrayOfObjects.field > current field
arrayOfObjects.order > current order
arrayOfObjects.orders > current orders
arrayOfObjects.update > update fn

```

---
