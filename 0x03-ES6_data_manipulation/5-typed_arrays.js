export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw Error('Position outside range');
  }
  const buffer = new ArrayBuffer(length);
  const int8 = new Int8Array(buffer);
  int8[position] = value;
  return new DataView(buffer);
}
