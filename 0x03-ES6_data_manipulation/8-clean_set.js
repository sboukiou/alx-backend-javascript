export default function cleanSet(set, startString) {
  if (!(startString && startString.length)) {
    return '';
  }
  return Array.from(set)
    .filter((item) => item && item.startsWith(startString))
    .map((item) => item.slice(startString.length))
    .join('-');
}
