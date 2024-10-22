export const sortBy = <T>(
  array: Array<T>,
  params: {
    key: (t: T) => number;
    reverse?: boolean;
  },
): Array<T> => {
  const { key, reverse } = params;
  array.sort((a, b) => {
    return key(a) - key(b);
  });

  if (reverse) {
    array.reverse();
  }
  return array;
};

export const sortByDate = <T>(
  array: Array<T>,
  params: {
    key: (t: T) => Date;
    reverse?: boolean;
  },
): Array<T> => {
  return sortBy(array, {
    key: (t) => params.key(t).getTime(),
    reverse: params.reverse,
  });
};

export const sortByString = <T>(
  array: Array<T>,
  params: {
    key: (t: T) => string;
    reverse?: boolean;
  },
): Array<T> => {
  const { key, reverse } = params;
  array.sort((a, b) => {
    return key(a).localeCompare(key(b));
  });

  if (reverse) {
    array.reverse();
  }
  return array;
};
