import { z } from 'zod';
import { Integer, PositiveInteger } from './zodTypes';

export const LengthRangeParams = z.object({
  length: PositiveInteger,
  minInclusive: Integer,
});
export type LengthRangeParams = z.infer<typeof LengthRangeParams>;

export const getLengthRange = ({ minInclusive, length }: LengthRangeParams): Array<number> => {
  if (length <= 0) {
    throw new Error(`expected length (${length}) to be positive`);
  }

  return Array.from(Array(length).keys()).map((v) => v + minInclusive);
};

export const MaxRangeParams = z.object({
  maxInclusive: Integer,
  minInclusive: Integer,
});
export type MaxRangeParams = z.infer<typeof MaxRangeParams>;

export const getMaxRange = ({ maxInclusive, minInclusive }: MaxRangeParams): Array<number> => {
  const length = 1 + maxInclusive - minInclusive;
  if (length <= 0) {
    throw new Error(`expected min (${minInclusive}) to be less than or equal to max (${maxInclusive})`);
  }

  return getLengthRange({
    length,
    minInclusive,
  });
};

export const StepMaxRangeParams = z.object({
  maxInclusive: Integer,
  minInclusive: Integer,
  step: PositiveInteger,
});
export type StepMaxRangeParams = z.infer<typeof StepMaxRangeParams>;

export const getStepMaxRange = ({ maxInclusive, minInclusive, step }: StepMaxRangeParams): Array<number> => {
  const length = 1 + maxInclusive - minInclusive;
  if (length <= 0) {
    throw new Error(`expected min (${minInclusive}) to be less than or equal to max (${maxInclusive})`);
  }
  if (step <= 0) {
    throw new Error(`expected step (${step}) to be positive`);
  }

  const result = [];
  let value = minInclusive;
  while (value <= maxInclusive) {
    result.push(value);
    value += step;
  }
  return result;
};
