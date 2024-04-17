export default function createInt8TypedArray(length, position, value) {
  const buffer = new DataView(new ArrayBuffer(length));
  if (position >= length) {
    throw new RangeError('Position outside range');
  } else {
    // const dataviewBuffer = new DataView(buffer);
    buffer.setInt8(position, value);
  }
  return buffer;
}
