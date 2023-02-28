export default function canIterate(obj) {
  let result = false;
  try {
    if (obj[Symbol.iterator]) {
      result = true;
    }
  } catch (e) {
    /* eslint-disable-next-line */
    console.log(e);
  }
  /* eslint-disable-next-line */
  console.log(result);
  return result;
}
canIterate(new Map()); // true
canIterate(new Set()); // true
canIterate(null); // false
canIterate(10); // false
canIterate('Netology'); // true
