import { powBigInt } from '../src';

describe('powBigInt', () => {
  it('should be a function', () => {
    expect(powBigInt).toEqual(expect.any(Function));
  });

  it('should return the correct result', () => {
    expect(powBigInt(0n, 0n)).toBe(1n);
    expect(powBigInt(2n, 3n)).toBe(8n);
    expect(powBigInt(3n, 4n)).toBe(BigInt(81));
    expect(powBigInt(BigInt(4), 5n)).toBe(1024n);
    expect(powBigInt(BigInt(5), BigInt(6))).toBe(15625n);
    expect(powBigInt(BigInt(6), BigInt(7))).toBe(BigInt(279936));
  });

  it('should return the same result as `**`', () => {
    expect(powBigInt(2n, 100000n)).toBe(2n ** 100000n);
    expect(powBigInt(3000n, 2000n)).toBe(BigInt(3000) ** 2000n);
    expect(powBigInt(BigInt(99), 6000n)).toBe(99n ** 6000n);
    expect(powBigInt(BigInt(2022), BigInt(10000))).toBe(2022n ** 10000n);
    expect(powBigInt(BigInt(10000), BigInt(2022))).toBe(
      BigInt(10000) ** BigInt(2022)
    );
  });

  it('should return the same result as `**` (negative)', () => {
    expect(powBigInt(-2n, 0n)).toBe((-2n) ** 0n);
    expect(powBigInt(-2n, 100000n)).toBe((-2n) ** 100000n);
    expect(powBigInt(-3000n, 2000n)).toBe(BigInt(-3000) ** 2000n);
    expect(powBigInt(BigInt(-99), 6000n)).toBe((-99n) ** 6000n);
  });

  it('should return the same result as `**` (negative)', () => {
    expect(powBigInt(-2n, 0n)).toBe((-2n) ** 0n);
    expect(powBigInt(-2n, 100000n)).toBe((-2n) ** 100000n);
    expect(powBigInt(-3000n, 2000n)).toBe(BigInt(-3000) ** 2000n);
    expect(powBigInt(BigInt(-99), 6000n)).toBe((-99n) ** 6000n);
  });

  it('should throw RangeError if exponent is negative', () => {
    expect(() => powBigInt(2n, -3n)).toThrow(RangeError);
    expect(() => powBigInt(3n, -4n)).toThrow(RangeError);
    expect(() => powBigInt(BigInt(4), -5n)).toThrow(RangeError);
    expect(() => powBigInt(BigInt(5), BigInt(-6))).toThrow(RangeError);
    expect(() => powBigInt(BigInt(6), BigInt(-7))).toThrow(RangeError);
  });

  it('should throw TypeError if base or exponent is not BigInt', () => {
    expect(() => powBigInt(2 as any, 3n)).toThrow(TypeError);
    expect(() => powBigInt(3n, 4 as any)).toThrow(TypeError);
    expect(() => powBigInt(4 as any, 5 as any)).toThrow(TypeError);
  });
});
