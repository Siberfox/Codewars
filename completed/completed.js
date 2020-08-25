/* eslint-disable strict */
/* eslint-disable no-console */

'use strict';

// 1 --------------------------------------------------------------------------
// How good are you really?

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

// // 2 ----------------------------------------------------------------
// Binary Addition

// function addBinary(a, b) {
//   // c = a + b;
//   return (a + b).toString(2);
// }
// console.log(addBinary(3, 2));

// 3 ----------------------------------------------------------------------

// for (let i = 0; i <= 100; i += 1) {
//   let result = '';
//   if (i % 3 === 0 && i > 0) {
//     result += 'Fizz';
//   }
//   if (i % 5 === 0 && i > 0) {
//     result += 'Buzz';
//   }
//   console.log(result || i);
// }

// 4 ------------------------------------------------------------------------

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

// 5 ------------------------------------------------------------------
// Rectangle into Squares

// function sqInRect(lng, wdth) {
//   if (lng === wdth) return null;
//   let a = lng;
//   let b = wdth;
//   const c = [];
//   while (a && b) {
//     if (a < b) {
//       c.push(b - a);
//       b -= a;
//     } else {
//       c.push(a - b);
//       a -= b;
//     }
//   }
//   return c;
// }
// console.log(sqInRect(5, 10));

// 6 ------------------------------------------------------------------------
// CamelCase Method

// String.prototype.camelCase = function() {
//   if (!this.length) return "";
//   return this.trim()
//     .split(' ')
//     .map((word) => word[0].toUpperCase() + word.slice(1))
//     .join('');
//   }
// ;
// console.log(" camel case word".camelCase());
// console.log("".camelCase());

// 7 ----------------------------------------------------------------------
// Categorize New Member

// function openOrSenior(data){
//   return data.map((arr) => arr[0] >= 55 && arr[1] > 7 ? 'Senior' : 'Open')
// }
// console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]));

// 8 ---------------------------------------------------------------------
// Beginner Series #3 Sum of Numbers

// function getSum(a, b) {
//   const max = Math.max(a, b);
//   const min = Math.min(a, b);
//   return ((max - min + 1) * (min + max)) / 2;
// }
// console.log(getSum(0, 5));
// console.log(getSum(-2, 5));
// console.log(getSum(5, -3));
// console.log(getSum(5, 7));

// 9 -----------------------------------------------------------------------
// Vowel Count

// function getCount(str) {
//   let vowelsCount = 0;
//   const vowels = ['a', 'e', 'i', 'o'];
//   for (const item of str) {
//     if (vowels.includes(item)) vowelsCount++;
//   }
//   return vowelsCount;
// }
// console.log(getCount('asfsdgojrefjdskweaaaa'));

// 10 -------------------------------------------------------------------------
// Get the Middle Character

// function getMiddle(s){
//   return (s.length % 2) ? s[(s.length-1)/2] : s[s.length/2 - 1] + s[s.length/2]
// }
// console.log(getMiddle("test"));
// console.log(getMiddle("testing"));

// 11 --------------------------------------------------------------------------
// Highest and Lowest

// function highAndLow(numbers) {
//   const num = numbers.split(' ');
//   return `${Math.max(...num)} ${Math.min(...num)}`;
// }
// console.log(highAndLow('4 5 29 54 4 0 -214 542 -64 1 -3 6 -6'));

// 12 --------------------------------------------------------------------------
// Shortest Word

// function findShort(s) {
//   const n = s.split(' ');
//   let count = n[0].length;
//   for (const item of n) {
//     if (item.length <= count) {
//       count = item.length;
//     }
//   }
//   return count;
// }
// console.log(findShort('bitcoin take over the world maybe who knows perhaps'));

// 13 ---------------------------------------------------------------------
// Descending Order

// function descendingOrder(n) {
//   const res = String(n)
//     .split('')
//     .sort((a, b) => b - a)
//     .join('');

//   return res;
// }
// console.log(descendingOrder(123456789));

// 14 -------------------------------------------------------------------
// Decode the Morse code

// const decodeMorse = function(morseCode) {
//   const morse = morseCode.split('  ').map(item => item.split(' '));
//   let result = '';
//   for (const item of morse) {
//     for (const i of item) {
//       if (MORSE_CODE[i]) result += MORSE_CODE[i];
//     }
//     result += ' ';
//   }
//   return result.trim();
// };

// 15-----------------------------------------------------------------
// Next bigger number with the same digits

// function nextBigger(n){
//   let  num = +String(n).split('').sort((a,b)=> b-a).join('');
//   return num > n ? num : -1
// }

// function nextBigger(n) {
//   let arr = n.toString().split('');
//   for (let i = arr.length - 1; i > 0; i--) {
//     if (arr[i] > arr[i - 1]) {
//       const end = arr.splice(i).sort((a, b) => a - b);
//       const a = end.findIndex(el => el > arr[i - 1]);
//       arr = [...arr, ...end];
//       [arr[i - 1], arr[i + a]] = [arr[i + a], arr[i - 1]];
//       return +arr.join('');
//     }
//   }
//   return -1;
// }

// console.log(nextBigger(12));
// console.log(nextBigger(1323));
// console.log(nextBigger(387286));

// 16--------------------------------------------------------------------
// Sum of Pairs

// const sum_pairs = function(ints, s) {
//   const viewedValues = [];
//   for (let i = 0; i <= ints.length; i++) {
//     const currentValue = ints[i];
//     const difference = s - currentValue;
//     if (viewedValues[difference]) {
//       return [difference, currentValue];
//     }
//     viewedValues[currentValue] = true;
//   }
//   return undefined;
// };
// l1 = [1, 4, 8, 7, 3, 15];
// console.log(sum_pairs(l1, 8));

// 17 --------------------------------------------------------------------
// Sum of Digits / Digital Root

// function digital_root(n) {
//   return n > 9
//     ? n
//         .toString()
//         .split('')
//         .map(Number)
//         .reduce((a, b) => a + b)
//     : n;
// }
// console.log(digital_root(4565));

// // 18 -------------------------------------------------------------------
// Equal Sides Of An Array

// function findEvenIndex(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     const left = arr.slice(0, i).reduce((a, b) => a + b, 0);
//     const right = arr.slice(i + 1).reduceRight((a, b) => a + b, 0);
//     if (left === right) return i;
//   }
//   return -1;
// }
// console.log(findEvenIndex([1, 100, 50, -51, 1, 1]));
// console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35]));

// 19 -------------------------------------------------------------------
// Maximum subarray sum

// const maxSequence = function(arr) {
//   let mainCounter = 0;
//   let countSum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (countSum < 0) countSum = 0;
//     countSum += arr[i];
//     console.log(countSum);
//     if (countSum > mainCounter) mainCounter = countSum;
//   }
//   return mainCounter;
// };
// console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
// console.log(maxSequence([1, 2, 3, 4]));

// 20 ------------------------------------------------------------------
// Moving Zeros To The End

// const moveZeros = function(arr) {
//   let a = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 0) {
//       a = [...a, ...arr.splice(i, 1)];
//       i--;
//     }
//   }
//   return [...arr, ...a];
// };
// console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));

// 21---------------------------------------------------------------------
// Directions Reduction

// function dirReduc(arr) {
//   const t = 'NORTH';
//   const b = 'SOUTH';
//   const l = 'WEST';
//   const r = 'EAST';
//   for (let i = 0; i < arr.length; i++) {
//     if ((arr[i] === t && arr[i - 1] === b) || (arr[i - 1] === t && arr[i] === b)) {
//       arr.splice(i - 1, 2);
//       i = 0;
//     }
//     if ((arr[i] === l && arr[i - 1] === r) || (arr[i - 1] === l && arr[i] === r)) {
//       arr.splice(i - 1, 2);
//       i = 0;
//     }
//   }
//   return arr;
// }
// console.log(dirReduc(['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST']));

// 22 ------------------------------------------------------------------------
// Human readable duration format

// function formatDuration(t) {
//   let seconds = t;
//   if (!seconds) return 'now';
//   let date = '';
//   let minute;
//   let hour;
//   let day;
//   let year;
//   if (seconds >= 31536000) {
//     year = Math.floor(seconds / 31536000);
//     year > 1 ? (date += `${year} years`) : (date += `${year} year`);
//     seconds %= 31536000;
//   }
//   if (seconds >= 86400) {
//     day = Math.floor(seconds / 86400);
//     seconds %= 86400;
//     if (date && !seconds) date += ` and `;
//     if (date && seconds) date += `, `;
//     day > 1 ? (date += `${day} days`) : (date += `${day} day`);
//   }
//   if (seconds >= 3600) {
//     hour = Math.floor(seconds / 3600);
//     seconds %= 3600;
//     if (date && !seconds) date += ` and `;
//     if (date && seconds) date += `, `;
//     hour > 1 ? (date += `${hour} hours`) : (date += `${hour} hour`);
//   }
//   if (seconds >= 60) {
//     minute = Math.floor(seconds / 60);
//     seconds %= 60;
//     if (date && !seconds) date += ` and `;
//     if (date && seconds) date += `, `;
//     minute > 1 ? (date += `${minute} minutes`) : (date += `${minute} minute`);
//   }
//   if (seconds % 60) {
//     if (date) date += ` and `;
//     seconds > 1 ? (date += `${seconds} seconds`) : (date += `${seconds} second`);
//   }
//   return date;
// }
// console.log(formatDuration(52));
// console.log(formatDuration(3662));
// console.log(formatDuration(87888));
// console.log(formatDuration(32079121));

// 23 ----------------------------------------------------------------

// const array = [[1, 4, 8, 9], [6, 2, 11, 1], [8, 0, 3, -5], [-2, 10, 8, 1]];
// function matrix(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     arr[i].splice(i);
//   }
//   return arr.flat().reduce((a, b) => a + b);
// }
// console.log(matrix(array));

// 24 -----------------------------------------------------------------

// const array = [-2, 10, 8, 1];
// function reverse(arr) {
//   for (let i = arr.length - 1; i > 0; i--) {
//     arr.push(...arr.splice(i - 1, 1));
//   }
//   return arr;
// }
// console.log(reverse(array));

//
// function fib(n) {
//   const sqRootOf5 = Math.sqrt(5);

//   const Phi = (1 + sqRootOf5) / 2;
//   const phi = (1 - sqRootOf5) / 2;

//   return Math.round((Math.pow(Phi, n) - Math.pow(phi, n)) / sqRootOf5);
// }
// console.log(fib(3));

// 25 -----------------------------------------------------------------
// Which are in?

// function inArray(array1, array2) {
//   const arr1 = [...array1];
//   const arr2 = array2.join(',');
//   const arr3 = [];
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr2.includes(arr1[i])) {
//       arr3.push(arr1[i]);
//     }
//   }
//   return arr3.sort();
// }

// function inArray(array1, array2) {
//   return array1.filter(el => array2.join(' ').includes(el)).sort();
// }

// const a1 = ['xyz', 'live', 'strong'];
// const a2 = ['lively', 'alive', 'harp', 'sharp', 'armstrong'];
// console.log(inArray(a1, a2));

// 26 -------------------------------------------------------------------
// Build a pile of Cubes

// function findNb(m) {
//   let sum = 0;
//   let n = 0;

//   while (sum < m) {
//     n += 1;
//     sum += n ** 3;
//   }

//   return sum === m ? n : -1;
// }

// console.log(findNb(4183059834009));
// console.log(findNb(24723578342962));

// 27 -----------------------------------------------------------------------

// function sumStrings(a, b) {
//   if (a > Number.MAX_SAFE_INTEGER || b > Number.MAX_SAFE_INTEGER) {
//     return BigInt(a) + BigInt(b);
//   }
//   return (+a + +b).toString();
// }

// console.log(sumStrings('712569312664357328695151392', '8100824045303269669937'));

// 28 ------------------------------------------------------------------------
// Split Strings

// function solution(str){
//   let arr = [];
//   if(str.length % 2) str += '_';
//   for (let i = 0; i < str.length; i+= 2) {
//     arr.push(str.slice(i,i + 2))
//   }
//   return arr;
// }
// console.log(solution('abcdef'));
// console.log(solution('abc'));

// 29 ----------------------------------------------------------------------
// Sum of Intervals

// const test1 = [[1, 5]];
// const test2 = [[1, 4], [7, 10], [3, 5], [8, 11], [15, 16]];
// const test3 = [[1, 5], [10, 20], [1, 6], [16, 19], [5, 11]];

// function sumIntervals(arr) {
//   arr.sort((a, b) => a[0] - b[0]);
//   let min = arr[0][0];
//   let max = arr[0][1];
//   let sum = 0;
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i][0] < max && arr[i][1] > max) {
//       max = arr[i][1];
//     }
//     if (arr[i][0] > max) {
//       sum += max - min;
//       min = arr[i][0];
//       max = arr[i][1];
//     }
//   }
//   sum += max - min;
//   return sum;
// }

// console.log(sumIntervals(test1)); // 4
// console.log(sumIntervals(test2)); // 7
// console.log(sumIntervals(test3)); // 19

// 30 -------------------------------------------------------------
// // Snail

// const snail = function(arr) {
//   const array = [];
//   let a = 0;
//   let b = 0;
//   while (arr.length > 0) {
//     if (a === 0 && b === 0 && arr.length > 0) {
//       array.push(...arr.splice(0, 1));
//       b = 1;
//     }
//     if (a === 0 && b > 0 && arr.length > 0) {
//       for (let j = 0; j < arr.length; j++) {
//         array.push(...arr[j].splice(arr[j].length - 1));
//       }
//       a = 1;
//     }
//     if (a > 0 && b > 0 && arr.length > 0) {
//       arr[arr.length - 1].reverse();
//       array.push(...arr.splice(arr.length - 1));
//       b = 0;
//     }
//     if (a > 0 && b === 0 && arr.length > 0) {
//       for (let k = arr.length - 1; k >= 0; k--) {
//         array.push(...arr[k].splice(0, 1));
//       }
//       a = 0;
//     }
//     console.log(arr);
//   }
//   return [].concat(...array);
// };

// console.log(snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
// console.log(
//   snail([
//     [1, 2, 3, 4, 5],
//     [6, 7, 8, 9, 10],
//     [11, 12, 13, 14, 15],
//     [16, 17, 18, 19, 20],
//     [21, 22, 23, 24, 25]
//   ])
// );

// 31 ----------------------------------------------------------------
// Next smaller number with the same digits

// function nextSmaller(n) {
//   let arr = n.toString().split('');
//   for (let i = arr.length - 1; i > 0; i--) {
//     if (arr[i] < arr[i - 1]) {
//       const end = arr.splice(i).sort((a, b) => b - a);
//       const a = end.findIndex(el => el < arr[i - 1]);
//       arr = [...arr, ...end];
//       [arr[i - 1], arr[i + a]] = [arr[i + a], arr[i - 1]];
//       return arr[0] > 0 ? +arr.join('') : -1;
//     }
//   }
//   return -1;
// }

// console.log(nextSmaller(907)); // 790
// console.log(nextSmaller(531)); // 513
// console.log(nextSmaller(1027)); // -1

// 32 ----------------------------------------------------------------------
// Range Extraction

// function solution(list) {
//   const arr = [];
//   for (let i = 0; i < list.length; i++) {
//     arr.push(list[i]);
//     if (list[i] + 1 === list[i + 1]) {
//       while (list[i] + 1 === list[i + 1]) {
//         i++;
//       }
//       if (list[i] - arr[arr.length - 1] === 1) {
//         arr.push(list[i]);
//       }
//       if (list[i] - arr[arr.length - 1] > 1) {
//         arr[arr.length - 1] = `${arr[arr.length - 1]}-${list[i]}`;
//       }
//     }
//   }
//   return arr.join(',');
// }

// console.log(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]));

// 33 -----------------------------------------------------------------------
// Calculating with Functions

// function zero(num) {
//   return num ? Math.floor(eval(0 + num)) : 0;
// }
// function one(num) {
//   return num ? Math.floor(eval(1 + num)) : 1;
// }
// function two(num) {
//   return num ? Math.floor(eval(2 + num)) : 2;
// }
// function three(num) {
//   return num ? Math.floor(eval(3 + num)) : 3;
// }
// function four(num) {
//   return num ? Math.floor(eval(4 + num)) : 4;
// }
// function five(num) {
//   return num ? Math.floor(eval(5 + num)) : 5;
// }
// function six(num) {
//   return num ? Math.floor(eval(6 + num)) : 6;
// }
// function seven(num) {
//   return num ? Math.floor(eval(7 + num)) : 7;
// }
// function eight(num) {
//   return num ? Math.floor(eval(8 + num)) : 8;
// }
// function nine(num) {
//   return num ? Math.floor(eval(9 + num)) : 9;
// }

// function plus(n) {
//   return `+${n}`;
// }
// function minus(n) {
//   return `-${n}`;
// }
// function times(n) {
//   return `*${n}`;
// }
// function dividedBy(n) {
//   return `/${n}`;
// }

// console.log(seven(times(five())));

// 34----------------------------------------------------------
// Find The Parity Outlier

// function findOutlier(arr) {
//   let even = 0;
//   let odd = 0;
//   for (let i = 0; i < 3; i++) {
//     arr[i] % 2 ? (odd += 1) : (even += 1);
//   }
//   return even > odd ? arr.find(el => el % 2) : arr.find(el => !(el % 2));
// }
// console.log(findOutlier([1, 2, 3]));
// console.log(findOutlier([2, 6, 8, 10, 3]));
// console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]));

// 35-------------------------------------------------------------
// Adding Big Numbers

// function add(a, b) {
//   const arrA = a.split('').reverse();
//   const arrB = b.split('').reverse();
//   const arr = [];
//   const length = arrA.length > arrB.length ? arrA.length : arrB.length;

//   for (let i = 0; i < length; i++) {
//     if (!arrB[i]) arr.push(arrA[i]);
//     if (!arrA[i]) arr.push(arrB[i]);
//     if (arrA[i] && arrB[i]) arr.push(`${+arrA[i] + +arrB[i]}`);
//   }

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 9) {
//       arr[i] = arr[i].split('');
//       arr[i + 1] ? (arr[i + 1] = `${+arr[i][0] + +arr[i + 1]}`) : (arr[i + 1] = arr[i][0]);
//       arr[i].shift(0);
//     }
//   }
//   if (arr[arr.length - 1] === '0') arr.pop();

//   return []
//     .concat(...arr)
//     .reverse()
//     .join('');
// }

// console.log(add('1372', '69'));
// console.log(add('00103', '08567'));
// console.log(add('888', '222'));

// 36 ------------------------------------------------------------------------------------

//  Bubble sort

// const myArray = [3, 7, 4, 5, 2, 1, 8, 9, 0];

// function bubbleSort(array) {
//   const arr = array;
//   let swapped = true;
//   while (swapped) {
//     swapped = false;
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] > arr[i + 1]) {
//         [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
//         swapped = true;
//       }
//     }
//   }
//   return arr;
// }
// module.exports = bubbleSort;
// console.log(bubbleSort(myArray));
//
// 37 ---------------------------------------------------
//
//  Random Hex Color
//

// function getRandomHexColor() {
//   let color = '#';
//   for (let i = 0; i < 6; i++) {
//     color += Math.floor(Math.random() * 16).toString(16);
//   }
//   return color;
// }

// console.log(getRandomHexColor());
// console.log(getRandomHexColor());
// console.log(getRandomHexColor());
// console.log(getRandomHexColor());

// -------------------------------------------------------------

// const input = {
//   ' ': [5],
//   d: [10],
//   e: [1],
//   H: [0],
//   l: [2, 3, 9],
//   o: [4, 7],
//   r: [8],
//   w: [6]
// };

// const buildString = m => {
//   const result = [];
//   for (let i in m){
//     for (let j of m[i]) {
//       result[j] = i
//     }
//   }
//   return result.join('')
// };

// const buildString = m => {
//   return m
//     ? Object.keys(m)
//         .reduce((acc, cur) => {
//           m[cur].forEach(e => {
//             acc[e] = cur;
//           });
//           return acc;
//         }, [])
//         .join('')
//     : '';
// };

// console.log(buildString(input));
// console.log(buildString(''));

// -----------------------------------
// Masonry push

// let cards = [[{}, {}], [{}, {}], [{}, {}], [{}]];
// let count = 0;
// let arr = [{a:1},{b:2},{c:3},{v:4},{l:5},{k:6}]

// for (let i = 0; i < arr.length; i++) {
//   cards[count].push(arr[i]);
//   count > 2 ? count = 0 : count++;
// }

// ------------------------------------------
// Carry
// function add(n) {
//   let count = n;
//   return function curr(num) {
//     if (!num) {
//       return count;
//     }
//     count += num;
//     return curr;
//   };
// }
// console.log(add(2)(3)(4)(66)());

//----------------------------------------------
// Sum Age
// let count = 0;
// function sumAge(user) {
// count += user.age;
// if (user.children) {
//   user.children.forEach(child => sumAge(child));
// }
// return count;
// }

// function sumAge(user) {
//   return user.children
//     ? user.children.reduce((count, child) => count + sumAge(child), user.age)
//     : user.age;
// }

// const user = {
//   name: 'peter',
//   age: 40,
//   children: [
//     {
//       name: 'kate',
//       age: 20,
//       children: [
//         {
//           name: 'nichole',
//           age: 5
//         },
//         {
//           name: 'ivan',
//           age: 3
//         }
//       ]
//     },
//     {
//       name: 'john',
//       age: 22,
//       children: [
//         {
//           name: 'suzan',
//           age: 1
//         },
//         {
//           name: 'jessica',
//           age: 4,
//           children: [
//             {
//               name: 'buba',
//               age: 1
//             }
//           ]
//         }
//       ]
//     },
//     {
//       name: 'vlad',
//       age: 16
//     }
//   ]
// };

// console.log(sumAge(user));

// function sequence(a, b = 1) {
//   let count = a;
//   return function() {
//     return (count += b);
//   };
// }
// const f = sequence(10, 3);
// console.log(f());
// console.log(f());
// console.log(f());
// console.log(f());

// ----------------------------------------------------------
// function stalinSort(arr) {
//   return arr.reduce((acc, val) => {
//     if (acc.length === 0 || val > acc[acc.length - 1]) {
//       acc.push(val);
//     }
//     return acc;
//   }, []);
// }

// console.log(stalinSort([5, 18, 2, -7, 88, 20, 109]));

// -------------------------------------------------------------
// Double Cola

// const names = ['Sheldon', 'Leonard', 'Penny', 'Rajesh', 'Howard'];

// function whoIsNext(names, r) {
//   if (r < names.length) {
//     return names[r - 1];
//   }
//   let count = names.length;
//   while (count < r) {
//     r -= count;
//     count *= 2;
//   }

//   return names[Math.ceil(r / (count / names.length)) - 1];
// }

// console.log(whoIsNext(names, 52));
// console.log(whoIsNext(names, 1));
// console.log(whoIsNext(names, 7230702951));

// ---------------------------------------------------------------------

// Sudoku Solution Validator

// function validSolution(arr) {
//   let firstSqr = [];
//   let secondSqr = [];
//   let thirdSqr = [];

//   for (let i = 0; i < arr.length; i++) {
//     const row = [];
//     const col = [];

//     if (i === 3 || i === 6) {
//       firstSqr = [];
//       secondSqr = [];
//       thirdSqr = [];
//     }

//     for (let j = 0; j < arr.length; j++) {
//       if (arr[j][i] === 0 || arr[i][j] === 0) {
//         return false;
//       }

//       if (row[arr[i][j]] || col[arr[j][i]]) {
//         return false;
//       }
//       row[arr[i][j]] = arr[i][j];
//       col[arr[j][i]] = arr[j][i];

//       if (j < 3) {
//         if (firstSqr[arr[i][j]]) {
//           return false;
//         }
//         firstSqr[arr[i][j]] = arr[i][j];
//       }
//       if (j >= 3 && j < 6) {
//         if (secondSqr[arr[i][j]]) {
//           return false;
//         }
//         secondSqr[arr[i][j]] = arr[i][j];
//       }
//       if (j >= 6) {
//         if (thirdSqr[arr[i][j]]) {
//           return false;
//         }
//         thirdSqr[arr[i][j]] = arr[i][j];
//       }
//     }
//   }
//   return true;
// }

// module.exports = validSolution;

// console.log(
//   validSolution([
//     [5, 3, 4, 6, 7, 8, 9, 1, 2],
//     [6, 7, 2, 1, 9, 5, 3, 4, 8],
//     [1, 9, 8, 3, 4, 2, 5, 6, 7],
//     [8, 5, 9, 7, 6, 1, 4, 2, 3],
//     [4, 2, 6, 8, 5, 3, 7, 9, 1],
//     [7, 1, 3, 9, 2, 4, 8, 5, 6],
//     [9, 6, 1, 5, 3, 7, 2, 8, 4],
//     [2, 8, 7, 4, 1, 9, 6, 3, 5],
//     [3, 4, 5, 2, 8, 6, 1, 7, 9]
//   ])
// );

