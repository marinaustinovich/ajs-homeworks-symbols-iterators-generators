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

