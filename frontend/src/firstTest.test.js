import { expect, it } from 'vitest';
const sum = (a, b) => a + b;


it('sums two numbers', () => {
    expect(sum(2,3)).toBe(5)
})