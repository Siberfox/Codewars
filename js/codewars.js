/* eslint-disable no-console */

// 1
function betterThanAverage(classPoints, yourPoints) {
  let total = 0;
  for (let i = 0; i < classPoints.length; i += 1) {
    total += classPoints[i];
  }
  total /= classPoints.length;
  return total < yourPoints;
}
console.log(betterThanAverage([2, 3, 7, 10], 8));
console.log(betterThanAverage([3, 10, 12], 8));
console.log(betterThanAverage([1, 2, 3, 14], 6));
