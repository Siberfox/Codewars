/* eslint-disable no-undef */
const bubbleSort = require('../codewars');

describe('Bubble Sort:', () => {
  test('should return sorted array', () => {
    expect(bubbleSort([3, 2, 1])).toEqual([1, 2, 3]);
    expect(bubbleSort([3, '2', 1])).toEqual([1, '2', 3]);
    expect(bubbleSort([3, 2, 1, ''])).toEqual(['', 1, 2, 3]);
    expect(bubbleSort([3, '2', 1, ''])).toEqual(['', 1, '2', 3]);
    expect(bubbleSort(['a', 'b', 'c'])).toEqual(['a', 'b', 'c']);
    expect(bubbleSort(['c', 'b', 'a'])).toEqual(['a', 'b', 'c']);
  });
  test('should not return wrong value', () => {
    expect(bubbleSort([3, 2, 1])).not.toEqual([1, 2, 3, 4]);
  });
});
