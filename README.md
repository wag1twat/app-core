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

const env1 = new RequiredEnv(["https://anydomain.com"] as const, { checkOnInitializeClass: true }); // it's ok, no error

const values1 = env1.getVariables(); // Record<https://anydomain.com, string | undefined>

// Example#2

process.env = {
  REACT_APP_API: undefined, // but required ???
  REACT_APP_CI_TOKEN: "hash",
};

const env2 = new RequiredEnv(["https://anydomain.com"] as const, { checkOnInitializeClass: true }); // oops, throw exception
```

---

```javascript
const serializer = new UrlSerializer(root)

const users = serializer.path('users').build()
![alt text](https://github.com/wag1twat/app-core/blob/main/assets/users.png?raw=true)

const user = users.extend().param('userId').build()
![alt text](https://github.com/wag1twat/app-core/blob/main/assets/user.png?raw=true)

const posts = user.extend().path('posts').build()
![alt text](https://github.com/wag1twat/app-core/blob/main/assets/posts.png?raw=true)

const post = posts.extend().param('postId').build()

const usersLink = users.link({})

const userLink = user.link({ ':userId': '10' })

const postsLink = posts.link({ ':userId': '10' })

const postLink = post.link({ ':userId': '10' as const, ':postId': '20' as const })
![alt text](https://github.com/wag1twat/app-core/blob/main/assets/postLinkConst.png?raw=true)

const extendedLink = postLink.extend().path('likes').param('likeId').path('user').build().link({
    ':likeId': '30',
})
![alt text](https://github.com/wag1twat/app-core/blob/main/assets/extendedLink.png?raw=true)
```
