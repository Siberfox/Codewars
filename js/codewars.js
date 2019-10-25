/* eslint-disable no-console */

// 1
// function betterThanAverage(classPoints, yourPoints) {
//   let total = 0;
//   for (let i = 0; i < classPoints.length; i += 1) {
//     total += classPoints[i];
//   }
//   total /= classPoints.length;
//   return total < yourPoints;
// }
// console.log(betterThanAverage([2, 3, 7, 10], 8));
// console.log(betterThanAverage([3, 10, 12], 8));
// console.log(betterThanAverage([1, 2, 3, 14], 6));

// // 2
// function addBinary(a, b) {
//   // c = a + b;
//   return (a + b).toString(2);
// }
// console.log(addBinary(3, 2));

// // 3
// for (let i = 0; i <= 100; i += 1) {
//   let result = '';
//   if (i % 3 === 0 && i > 0) {
//     result += 'Fizz';
//   }
//   if (i % 5 === 0 && i > 0) {
//     result += 'Buzz';
//   }
//   if (result === '') {
//     result = i;
//   }
//   console.log(result);
// }

// 4
// function fib(n) {
//   return n <= 1 ? n : fib(n - 1) + fib(n - 2);
// }

// function fib(n) {
//   let a = 1;
//   let b = 1;
//   for (let i = 3; i <= n; i++) {
//     const c = a + b;
//     a = b;
//     b = c;
//   }
//   return b;
// }

// const t0 = performance.now();
// console.log(fib(50));
// const t1 = performance.now();
// console.log(`Call to doSomething took ${t1 - t0} milliseconds.`);

// 5
