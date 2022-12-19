function powBigInt(base, exp) {
  let result = 1n;
  for (let i = 0; i < exp; i++) {
    result *= base;
  }
  return result;
}

module.exports = powBigInt;
