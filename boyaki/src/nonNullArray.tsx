export const nonNullArray = <T,>(arr: (T | null)[]): T[] => {
  return arr.filter((x) => x) as T[];
};
