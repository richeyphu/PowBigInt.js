/*!
 * PowBigInt.js
 * Copyright(c) 2022 Phurit D.
 * MIT Licensed
 */

/**
 * A utility library for calculating powers of big integers.
 * @packageDocumentation
 */

/**
 * Calculates the power of a big integer.
 *
 * @param {bigint} base - The base number.
 * @param {bigint} exp - The exponent number.
 *
 * @returns {bigint} A number representing base taken to the power of exponent.
 *
 * @throws {TypeError} Both base and exponent must be BigInt.
 * @throws {RangeError} Exponent must be positive.
 *
 * @example Here's a simple example:
 * ```js
 * powBigInt(2n, 10n); // 1024n
 * ```
 */
function powBigInt(base: bigint, exp: bigint): bigint {
  if (!isBigInt(base) || !isBigInt(exp))
    throw new TypeError('Both base and exponent must be BigInt');
  if (exp < 0) throw new RangeError('Exponent must be positive');

  let result = 1n;
  let currentBase = base;
  let currentExp = exp;

  // Exponentiation by squaring
  while (currentExp > 0) {
    if (currentExp % 2n === 1n) result *= currentBase;
    currentBase *= currentBase;
    currentExp /= 2n;
  }

  return result;
}

/**
 * Checks if the value is a BigInt.
 *
 * @param {unknown} value - The value to check.
 *
 * @returns {boolean} A boolean indicating if the value is a BigInt.
 *
 * @example Here's an example with a BigInt:
 * ```js
 * isBigInt(2n); // true
 * ```
 * @example Here's an example with a Number:
 * ```js
 * isBigInt(2); // false
 * ```
 */
function isBigInt(value: unknown): value is bigint {
  return typeof value === 'bigint';
}

export { powBigInt, isBigInt };
export default powBigInt;
