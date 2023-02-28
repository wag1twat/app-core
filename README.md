# Not realease version.

---

## RequiredEnv

##### What problem are we solving?

When starting the application, we may have N keys in proccess.env and some of them can be required. The RequiredEnv class takes env keys to the input and checks the library using runtypes (the contract is being built automatically) the presence of keys in proccess.env and compares with the type of Runtypes.String. Check is performed when initializing the class.

```javascript
import { RequiredEnv } from "shulga-app-core";

// Example#1

process.env = {
  REACT_APP_API: "https://anydomain.com", // required
  REACT_APP_CI_TOKEN: "hash",
};

const env1 = new RequiredEnv(["REACT_APP_API"] as const, { checkOnInitializeClass: true }); // it's ok, no error

const values1 = env1.getVariables(); // Record<https://anydomain.com, string | undefined>

// Example#2

process.env = {
  REACT_APP_API: undefined, // but required ???
  REACT_APP_CI_TOKEN: "hash",
};

const env2 = new RequiredEnv(["https://anydomain.com"] as const, { checkOnInitializeClass: true }); // oops, throw exception
```

---

## UrlSerializer

##### What problem are we solving?

When developing a large application, we have a large set of routes and we all store them differently, and if we change the domain or the path in the route, we need to change from one to all routes. I'd like to have route inheritance and IDE hints for quality DX. This class provides inheritance from route, link and query parameters.

```javascript
const serializer = new UrlSerializer(root)
const users = serializer.path('users').build()
```

![Users](https://github.com/wag1twat/app-core/blob/main/assets/users.png)

```javascript
const user = users.extend().param('userId').build()
```

![User](https://github.com/wag1twat/app-core/blob/main/assets/user.png)

```javascript
const posts = user.extend().path('posts').build()
```

![Posts](https://github.com/wag1twat/app-core/blob/main/assets/posts.png)

```javascript
const post = posts.extend().param('postId').build()
const usersLink = users.link({})
const userLink = user.link({ ':userId': '10' })
const postsLink = posts.link({ ':userId': '10' })
const postLink = post.link({ ':userId': '10' as const, ':postId': '20' as const })
```

![Postlink](https://github.com/wag1twat/app-core/blob/main/assets/postLinkConst.png)

```javascript
const postLink = post.link({ ':userId': '10' })
```

![Postlink](https://github.com/wag1twat/app-core/blob/main/assets/postLinkError.png)

```javascript
const extendedLink = postLink.extend().path('likes').param('likeId').path('user').build().link({
    ':likeId': '30',
})
```

![Extended](https://github.com/wag1twat/app-core/blob/main/assets/extendedLink.png)

---

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
