import caesarCipher from '../scripts/caesarCipher';

test('Shift +1', () => {
  expect(caesarCipher('abc', 2)).toBe('cde');
});

test('Shift -1', () => {
  expect(caesarCipher('xyz', -1)).toBe('wxy');
});

test('Wrap end to beginning', () => {
  expect(caesarCipher('wxy', 5)).toBe('bcd');
});

test('Wrap beginning to end', () => {
  expect(caesarCipher('bcd', -2)).toBe('zab');
});

test('Punctuation', () => {
  expect(caesarCipher('one, two, three!', 5)).toBe('tsj, ybt, ymwjj!');
});

test('Case', () => {
  expect(caesarCipher('Paulson', 10)).toBe('Zkevcyx');
});

test('Case, punctuation, and wrapping', () => {
  expect(caesarCipher('tuv, WXY, z!', 2)).toBe('vwx, YZA, b!');
});
