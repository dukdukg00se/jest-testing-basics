import reverseString from '../scripts/reverseString';

test('Reverse a word', () => {
  expect(reverseString('Paul')).toBe('luaP');
});

test('Reverse a sentence', () => {
  expect(reverseString('Hi there!')).toBe('!ereht iH');
});

test('Reverse number string', () => {
  expect(reverseString('123')).toBe('321');
});
