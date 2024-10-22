export const expectNever = (value: never): never => {
  throw new Error(`expected value (${value}) to never exist`);
};
