# env-var-parser

Node environment variable parser with full type support.

```typescript
const packageName = parseEnv<string>("PACKAGE_NAME");

const packageVersion = parseEnv<number>("PACKAGE_VERSION", 1);
```
