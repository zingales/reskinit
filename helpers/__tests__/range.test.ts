import { getLengthRange, getMaxRange, getStepMaxRange } from '../range';

describe('getLengthRange', () => {
  for (const { input, output } of [
    {
      input: { length: 1, minInclusive: 1 },
      output: [1],
    },
    {
      input: { length: 5, minInclusive: 1 },
      output: [1, 2, 3, 4, 5],
    },
    {
      input: { length: 5, minInclusive: 10 },
      output: [10, 11, 12, 13, 14],
    },
    {
      input: { length: 5, minInclusive: -3 },
      output: [-3, -2, -1, 0, 1],
    },
  ]) {
    it(`should return expected values for input (${JSON.stringify(input)})`, () => {
      const result = getLengthRange(input);

      expect(result).toHaveLength(output.length);
      expect(result).toEqual(expect.arrayContaining(output));
      expect(result[0]).toBe(output[0]);
      expect(result[result.length - 1]).toBe(output[output.length - 1]);
    });
  }

  for (const length of [0, -1, -10]) {
    it(`should throw when given invalid length (${length})`, () => {
      expect(() => getLengthRange({ minInclusive: 1, length })).toThrow();
    });
  }
});

describe('getMaxRange', () => {
  for (const { input, output } of [
    {
      input: { maxInclusive: 1, minInclusive: 1 },
      output: [1],
    },
    {
      input: { maxInclusive: 5, minInclusive: 1 },
      output: [1, 2, 3, 4, 5],
    },
    {
      input: { maxInclusive: 14, minInclusive: 10 },
      output: [10, 11, 12, 13, 14],
    },
    {
      input: { maxInclusive: 1, minInclusive: -3 },
      output: [-3, -2, -1, 0, 1],
    },
  ]) {
    it(`should return expected values for input (${JSON.stringify(input)})`, () => {
      const result = getMaxRange(input);

      expect(result).toHaveLength(output.length);
      expect(result).toEqual(expect.arrayContaining(output));
      expect(result[0]).toBe(output[0]);
      expect(result[result.length - 1]).toBe(output[output.length - 1]);
    });
  }

  for (const input of [
    { maxInclusive: 3, minInclusive: 4 },
    { maxInclusive: -3, minInclusive: 1 },
  ]) {
    it(`should throw when given invalid input (${input})`, () => {
      expect(() => getMaxRange(input)).toThrow();
    });
  }
});

describe('getStepMaxRange', () => {
  for (const { input, output } of [
    {
      input: { maxInclusive: 1, minInclusive: 1, step: 1 },
      output: [1],
    },
    {
      input: { maxInclusive: 5, minInclusive: 1, step: 2 },
      output: [1, 3, 5],
    },
    {
      input: { maxInclusive: 14, minInclusive: 10, step: 3 },
      output: [10, 13],
    },
    {
      input: { maxInclusive: 1, minInclusive: -3, step: 10 },
      output: [-3],
    },
  ]) {
    it(`should return expected values for input (${JSON.stringify(input)})`, () => {
      const result = getStepMaxRange(input);

      expect(result).toHaveLength(output.length);
      expect(result).toEqual(expect.arrayContaining(output));
      expect(result[0]).toBe(output[0]);
      expect(result[result.length - 1]).toBe(output[output.length - 1]);
    });
  }

  for (const input of [
    { maxInclusive: 3, minInclusive: 4, step: 1 },
    { maxInclusive: 3, minInclusive: 1, step: 0 },
    { maxInclusive: 3, minInclusive: 1, step: -1 },
  ]) {
    it(`should throw when given invalid input (${input})`, () => {
      expect(() => getStepMaxRange(input)).toThrow();
    });
  }
});
