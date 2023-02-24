# Not realease version.

## RequiredEnv

##### What problem are we solving?

When starting the application, we may have n keys in ENV and some of them can be Requireed. The REQUREDENV class takes ENV keys to the input and checks the library using RuntyPes (the contract is being built automatically) the presence of keys in ENV and compares with the type of RUNTYPES.String. Check is performed when initializing the class.

```javascript
import { RequiredEnv } from "shulga-app-core";

env = {
  REACT_APP_API: "https://anydomain.com", // required
  REACT_APP_CI_TOKEN: "hash",
};

const env1 = new RequiredEnv(["https://anydomain.com"] as const, { checkOnInitializeClass: true }); // it's ok, no error

const values1 = env1.getVariables(); // Record<https://anydomain.com, string | undefined>


const env1 = new RequiredEnv(["https://anydomain.com"] as const, { checkOnInitializeClass: true }); // oops, throw exception
```
