export function resizeFont(ch) {
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
  return value > 999999999
    ? Number.parseFloat(value).toExponential()
    : parseFloat(value).toLocaleString('en', { maximumFractionDigits: 8 });
}

export function executeOperation(currentValue, previousValue, operator) {
  const current = parseFloat(currentValue);
  const previous = parseFloat(previousValue);

  if (operator === '/') {
    return {
      currentValue: previous / current,
    };
  }

  if (operator === '*') {
    return {
      currentValue: previous * current,
    };
  }

  if (operator === '+') {
    return {
      currentValue: previous + current,
    };
  }

  if (operator === '-') {
    return {
      currentValue: previous - current,
    };
  }
}
