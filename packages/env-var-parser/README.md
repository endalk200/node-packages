[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)
[![NPM](https://img.shields.io/npm/v/env-var-parser)](https://www.npmjs.com/package/env-var-parser) [![NPM](https://img.shields.io/npm/dm/env-var-parser)](https://www.npmjs.com/package/env-var-parser)[![env-var-parser CI](https://github.com/endalk200/env-var-parser/actions/workflows/env-var-parser.yml/badge.svg)](https://github.com/endalk200/env-var-parser/actions/workflows/env-var-parser.yml)

# env-var-parser

> **MOTIVATION**: Every time I use `process.env` in node project with typescript I always run into type issues. I also needed to handle edge cases where the environment
> is `undefined`. That moved me to create this simple wrapper for `process.env` that solves all of the problems I had with `process.env`.

`process.env` wrapper with type support.

Use-cases:

1. Type support for the environment variable

```typescript
const variable = parseEnv<string>("ENV_VARIABLE");
```

2. Default value in case environment variable is undefined.

```typescript
const variable = parseEnv<number>("ENV_VARIABLE", 3);
```

## Authors

-   [@endalk200](https://www.github.com/endalk200)

## License

[MIT](https://choosealicense.com/licenses/mit/)
