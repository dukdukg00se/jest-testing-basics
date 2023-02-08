import calculator from '../scripts/calculator';

// Addition
test('Add two integers', () => {
  expect(calculator.add(6, 4)).toBe(10);
});

test('Add two floats', () => {
  expect(calculator.add(1.4, 3.8)).toBe(5.2);
});

test('Add two floats, example 2', () => {
  expect(calculator.add(6.41, 3.991)).toBe(10.401);
});

test('Add two zeros', () => {
  expect(calculator.add(0, 0)).toBe(0);
});

// Subtraction
test('Subtract two integers', () => {
  expect(calculator.subtract(6, 4)).toBe(2);
});

test('Subtract larger integer from smaller', () => {
  expect(calculator.subtract(4, 60)).toBe(-56);
});

test('Subtract two floats', () => {
  expect(calculator.subtract(3.8, 1.4)).toBe(2.4);
});

test('Subtract two floats, example 2', () => {
  expect(calculator.subtract(1.1, 7.8)).toBe(-6.7);
});

test('Subtract two zeros', () => {
  expect(calculator.subtract(0, 0)).toBe(0);
});

// Division
test('Divide two integers', () => {
  expect(calculator.divide(8, 4)).toBe(2);
});

test('Divide two floats', () => {
  expect(calculator.divide(10.5, 2.5)).toBe(4.2);
});

test('Divide integer with a float', () => {
  expect(calculator.divide(10, 2.4)).toBe(4.1666666667);
});

test('Divide zero with an integer', () => {
  expect(calculator.divide(0, 5)).toBe(0);
});

test('Divide by zero', () => {
  expect(calculator.divide(333, 0)).toBe(NaN);
});

test('Division with a repeating decimal answer', () => {
  expect(calculator.divide(2, 3)).toBe(0.6666666667);
});

// Multiplication
test('Multiply two integers', () => {
  expect(calculator.multiply(8, 4)).toBe(32);
});

test('Multiply two floats', () => {
  expect(calculator.multiply(2.5, 4.2)).toBe(10.5);
});

test('Multiply two floats, example 2', () => {
  expect(calculator.multiply(54.221, 2.343)).toBe(127.039803);
});

test('Multiply by zero', () => {
  expect(calculator.multiply(312, 0)).toBe(0);
});
