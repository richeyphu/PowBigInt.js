# PowBigInt.js

[![NPM version](https://img.shields.io/npm/v/powbigint.svg)](https://npmjs.com/package/powbigint)
[![NPM total downloads](https://img.shields.io/npm/dt/powbigint)](https://npmjs.org/package/powbigint)
[![install size](https://packagephobia.com/badge?p=powbigint)](https://packagephobia.com/result?p=powbigint)
[![minified size](https://img.shields.io/bundlephobia/min/powbigint)](https://bundlephobia.com/package/powbigint)

A simple utility library for calculating powers of big integers.

## Install

```sh
$ npm i powbigint
# or
$ yarn add powbigint
# or
$ pnpm add powbigint
```

## Usage

```js
import { powBigInt } from 'powbigint';

powBigInt(BigInt(2), 64n);  // 18446744073709551616n
powBigInt(2n, 1000000n);    // 99006562292958...376n (301030 digits)
```

## License

[MIT](LICENSE)
