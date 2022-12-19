function powBigInt(base: bigint, exp: bigint): bigint {
  let result: bigint = BigInt(1);
  for (let i = 0; i < exp; i++) {
    result *= base;
  }
  return result;
}

module.exports = powBigInt;
