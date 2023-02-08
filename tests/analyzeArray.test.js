import analyzeArray from '../scripts/analyzeArray';

describe('First object', () => {
  const arrObj = analyzeArray([1, 8, 3, 4, 2, 6]);

  test('Average property', () => {
    expect(arrObj).toHaveProperty('average', 4);
  });

  test('Min property', () => {
    expect(arrObj).toHaveProperty('min', 1);
  });

  test('Max property', () => {
    expect(arrObj).toHaveProperty('max', 8);
  });

  test('Length property', () => {
    expect(arrObj).toHaveProperty('length', 6);
  });
});

describe('Object with negative numbers in array', () => {
  const arrObj = analyzeArray([-2, -177, 0, 1000, 4]);

  test('Average property', () => {
    expect(arrObj).toHaveProperty('average', 165);
  });

  test('Min property', () => {
    expect(arrObj).toHaveProperty('min', -177);
  });

  test('Max property', () => {
    expect(arrObj).toHaveProperty('max', 1000);
  });

  test('Length property', () => {
    expect(arrObj).toHaveProperty('length', 5);
  });
});

describe('Object with floats in array', () => {
  const arrObj = analyzeArray([-2.123, -17.82, 0.1, 100.6, 0.667]);

  test('Average property', () => {
    expect(arrObj).toHaveProperty('average', 16.2848);
  });

  test('Min property', () => {
    expect(arrObj).toHaveProperty('min', -17.82);
  });

  test('Max property', () => {
    expect(arrObj).toHaveProperty('max', 100.6);
  });

  test('Length property', () => {
    expect(arrObj).toHaveProperty('length', 5);
  });
});

describe('Object with empty array', () => {
  const arrObj = analyzeArray([]);

  test('Average property', () => {
    expect(arrObj).toHaveProperty('average', undefined);
  });

  test('Min property', () => {
    expect(arrObj).toHaveProperty('min', undefined);
  });

  test('Max property', () => {
    expect(arrObj).toHaveProperty('max', undefined);
  });

  test('Length property', () => {
    expect(arrObj).toHaveProperty('length', 0);
  });
});
