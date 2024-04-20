export default function cleanSet(set, startString) {
  if (startString !== undefined && startString.length === 0) return '';
  let str = '';
  const arr = Array.from(set);
  for (const value of arr) {
    if (value !== undefined && value.startsWith(startString)) {
      str += value.replace(startString, '');
      // const temp = value.split(startString, 2);
      // str += temp[1];
      str += '-';
    }
  }
  const finalStr = str.slice(0, -1);
  return finalStr;
}
