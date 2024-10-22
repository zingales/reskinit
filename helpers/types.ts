export const isNumber = (v: unknown): v is number => {
  return typeof v === 'number';
};

export const isArrayOfNumbers = (v: unknown): v is Array<number> => Array.isArray(v) && v.every(isNumber);
