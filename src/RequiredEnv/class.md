## Class: RequiredEnv

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
