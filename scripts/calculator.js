const calculator = {
  // Because of issues with floating point math
  // Use toFixed to round/pad number to specific length
  // Then convert back to num, will dop trailing 0's
  add(x, y) {
    return +(x + y).toFixed(10);
  },

  subtract(x, y) {
    return +(x - y).toFixed(10);
  },

  divide(x, y) {
    if (y === 0) return NaN;
    return +(x / y).toFixed(10);
  },

  multiply(x, y) {
    return +(x * y).toFixed(10);
  },
};

export default calculator;
