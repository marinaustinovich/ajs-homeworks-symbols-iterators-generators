export default function canIterate(data) {
  return data != null && typeof data[Symbol.iterator] === 'function';
}
