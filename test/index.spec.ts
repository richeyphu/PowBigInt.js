import { powBigInt } from '../src';

describe('powBigInt', () => {
  it('should be a function', () => {
    expect(powBigInt).toEqual(expect.any(Function));
  });

  it('should return the correct result', () => {
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

  it('should throw error if exponent is negative', () => {
    expect(() => powBigInt(2n, -3n)).toThrow();
    expect(() => powBigInt(3n, -4n)).toThrow();
    expect(() => powBigInt(BigInt(4), -5n)).toThrow();
    expect(() => powBigInt(BigInt(5), BigInt(-6))).toThrow();
    expect(() => powBigInt(BigInt(6), BigInt(-7))).toThrow();
  });

  it('should return the same result as `**` (negative)', () => {
    expect(powBigInt(-2n, 0n)).toBe((-2n) ** 0n);
    expect(powBigInt(-2n, 100000n)).toBe((-2n) ** 100000n);
    expect(powBigInt(-3000n, 2000n)).toBe(BigInt(-3000) ** 2000n);
    expect(powBigInt(BigInt(-99), 6000n)).toBe((-99n) ** 6000n);
  });
});
