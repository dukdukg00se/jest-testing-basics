import capitalize from '../scripts/capitalize';

test('Capitalize a word', () => {
  expect(capitalize('jimmy')).toBe('Jimmy');
});

test('Capitalize a sentence', () => {
  expect(capitalize('is this capitalized correctly?')).toBe(
    'Is this capitalized correctly?'
  );
});

test('Return already capitalized string', () => {
  expect(capitalize('Paul')).toBe('Paul');
});
