import { z } from 'zod';

export const NonEmptyString = z.string().min(1);

export const DateString = z.string().datetime();
export const DateStringTransform = DateString.transform((value) => new Date(value));

export const EmptyObject = z.record(z.never());
export const MessageObject = z.object({ message: NonEmptyString });

export const Integer = z.number().int();
export const NonNegativeInteger = Integer.nonnegative();
export const PositiveInteger = Integer.positive();

export const NumberString = NonEmptyString.refine(
  (value) => Number.isFinite(Number(value)),
  'Expected a number as a string',
).transform(Number);

export const IntegerString = NumberString.refine(Number.isSafeInteger, 'Expected an integer as a string');

export const PositiveIntegerString = IntegerString.refine(
  (value) => value > 0,
  'Expected a positive integer as a string',
);
