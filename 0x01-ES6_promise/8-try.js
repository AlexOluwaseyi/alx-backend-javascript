export default function divideFunction(numerator, denominator) {
  if (typeof numerator !== 'number') {
    throw new TypeError('numerator must be a number');
  }
  if (typeof denominator !== 'number') {
    throw new TypeError('denominator must be a number');
  } else if (denominator === 0) {
    throw new Error('cannot divide by 0');
  }

  return (numerator / denominator);
}
