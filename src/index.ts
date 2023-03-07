/*!
 * PowBigInt.js
 * Copyright(c) 2022 Phurit D.
 * MIT Licensed
 */

/**
 * Calculate the power of a big integer.
 *
 * @param base {bigint} The base number.
 * @param exp {bigint} The exponent number.
 *
 * @throws {TypeError} Base is not a BigInt.
 * @throws {TypeError} Exponent is not a BigInt.
 * @throws {RangeError} Exponent must be positive.
 *
 * @returns {bigint} A number representing base taken to the power of exponent.
 */
function powBigInt(base: bigint, exp: bigint): bigint {
  if (isBigInt(base)) throw new TypeError('Base is not a BigInt');
  if (isBigInt(exp)) throw new TypeError('Exponent is not a BigInt');
  if (exp < BigInt(0)) throw new RangeError('Exponent must be positive');

  let result: bigint = BigInt(1);
  for (let i = 0; i < exp; i++) result *= base;

  return result;
}

/**
 * Check if the value is a BigInt.
 *
 * @param value {unknown} The value to check.
 *
 * @returns {value is bigint} A boolean indicating if the value is a BigInt.
 */
function isBigInt(value: unknown): value is bigint {
  return typeof value === 'bigint';
}

export { powBigInt, isBigInt };
export default powBigInt;
