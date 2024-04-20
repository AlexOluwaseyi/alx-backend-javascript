export default function cleanSet(set, startString) {
  if (startString.length === 0) return '';
  let str = '';
  const arr = Array.from(set);
  for (const value of arr) {
    if (value.startsWith(startString)) {
      const temp = value.split(startString);
      str += temp[1];
      str += '-';
    }
  }
  const finalStr = str.slice(0, -1);
  return finalStr;
}
