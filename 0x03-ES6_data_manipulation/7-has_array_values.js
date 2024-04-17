/*
 * export default function hasValuesFromArray(set, array) {
 *   const arraySet = new Set(array);
 *   const diff = arraySet.difference(set);
 *   return Boolean(!diff.size);
 * }
 */

export default function hasValuesFromArray(set, array) {
  for (const value of array) {
    if (!set.has(value)) {
      return false;
    }
  }
  return true;
}
