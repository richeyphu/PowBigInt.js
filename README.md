# PowBigInt.js

[![NPM version](https://img.shields.io/npm/v/powbigint.svg)](https://www.npmjs.com/package/powbigint)
[![install size](https://packagephobia.com/badge?p=powbigint)](https://packagephobia.com/result?p=powbigint)

A simple utility library for calculating powers of big integers

## Usage

```js
import { powBigInt } from "powbigint";

powBigInt(BigInt(2), 64n);  // 18446744073709551616n
powBigInt(2n, 1000000n);    // 99006562292958...376n (301030 digits)
```

## License

[MIT](LICENSE)
