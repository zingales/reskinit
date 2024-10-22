import { getLengthRange } from './range';

export const zip = <T>(...arrays: Array<Array<T>>): Array<Array<T>> => {
  const length = Math.max(...arrays.map((array) => array.length));

  return getLengthRange({ minInclusive: 0, length }).map((_, index) => arrays.map((array) => array[index]));
};
