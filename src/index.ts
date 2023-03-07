function powBigInt(base: bigint, exp: bigint): bigint {
  if (exp < 0) throw new RangeError('Exponent must be positive');

  let result: bigint = BigInt(1);
  for (let i = 0; i < exp; i++) result *= base;

  return result;
}

export { powBigInt };
export default powBigInt;
