const bubbleSort = require('../codewars');

describe('Bubble Sort:', () => {
  test('should return sorted array of numbers', () => {
    expect(bubbleSort([3, 2, 1])).toEqual([1, 2, 3]);
  });
  test('should return sorted array of  negative numbers', () => {
    expect(bubbleSort([3, -2, 1])).toEqual([-2, 1, 3]);
    expect(bubbleSort([-3, -2, 1])).toEqual([-3, -2, 1]);
  });
  test('should return sorted array of strings', () => {
    expect(bubbleSort(['a', 'b', 'c', 'd'])).toEqual(['a', 'b', 'c', 'd']);
    expect(bubbleSort(['c', 'b', 'a'])).toEqual(['a', 'b', 'c']);
  });
  test('should return sorted array of mixed values', () => {
    expect(bubbleSort([3, '2', 1])).toEqual([1, '2', 3]);
    expect(bubbleSort([3, 2, 1, ''])).toEqual(['', 1, 2, 3]);
    expect(bubbleSort([3, '2', 1, ''])).toEqual(['', 1, '2', 3]);
  });
  test('should not return wrong value', () => {
    expect(bubbleSort([3, 2, 1])).not.toEqual([1, 2, 3, 4]);
  });
});
