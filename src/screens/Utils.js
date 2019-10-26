export function resizeFont(ch) {
  console.log(ch, ch.toString().length);
  if (ch.toString().length === 7) {
    return { fontSize: 70 };
  }
  if (ch.toString().length === 8) {
    return { fontSize: 60 };
  }
  if (ch.toString().length === 9) {
    return { fontSize: 50 };
  }
  if (ch.toString().length > 9) {
    return { fontSize: 40 };
  }
}

export function convertValue(value) {
  console.log('value', value);
  return value.toString().length > 9
    ? Number.parseFloat(value).toExponential(2)
    : parseFloat(value).toLocaleString();
}
