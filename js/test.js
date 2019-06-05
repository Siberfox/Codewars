/* eslint-disable radix */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
const a = 3;
const b = 5;

function med(c) {
  return a + b - c;
}

console.log(Math.sqrt(med(4)));
console.log('hi');
console.log(b);

const array = [1, 2, 3, 4];
console.log(array.length);

array.push(9, 10);
console.log(array.length);

const f = 'me';
array.pop();
array.push(f);
console.log(array);
array.unshift('name');
console.log(array);
array.shift();

const array2 = array.map(number => number * number); // Function (es6)
console.log(array2);
console.log(array);

const joined = array2.join();
console.log(joined);
console.log(array2);

const source = 'Ветер,Дождь Огонь';
const arr = source.split(',');
console.log(arr);

const arr0 = ['Ветер', 'Дождь', 'Огонь'];
arr0.reverse();
console.log(arr0);

console.log(`${arr0[1]} и ${arr0[2]}`);
console.log(`${arr0[1]} или ${arr0[2]}`);

const arr3 = [1, 2, 3];
arr3.concat(4, 5);
console.log(arr3.concat(4, 5));
arr3.concat([4, 1]);
console.log(arr3.concat([4, 1]));
arr3.concat([4, 5], [6, 7]);
console.log(arr3.concat([4, 5], [6, [4, 7]]));

const arr2 = ['Киви', 'Апельсины', 'Груши'];
console.log(arr2.sort());

const arr4 = [1, 2, 3, 3, 5, 3];
arr4.indexOf(1);
arr4.indexOf(3);
console.log(arr4.indexOf(3));
arr4.indexOf('3');
arr4.indexOf(3, 4);
console.log(arr4.indexOf(3, 4));
arr4.indexOf(35);
arr4.indexOf(2);

const deleted = arr4.splice(3, 2);
console.log(arr4);
console.log(deleted);

const arr5 = [2, 3, 5];

function foo(value) {
  const sum = value * this;
  console.log(sum);
}
arr5.forEach(foo, 7);

function isBig(element, index, array) {
  return element >= 10;
}
const filtered = [11, 3, 7, 50, 25].filter(isBig);
console.log(filtered);

const value = 'Infinity';
const number = +value;
console.log(number);
console.log(typeof number);

const value2 = 'NaN';
const number2 = +value2;
console.log(number2);
console.log(typeof number2);

console.log(parseInt('12px9'));
console.log(0xff);
console.log(0b100010001111);

const n = 252;
console.log(n.toString(16));
console.log(n.toString(2));

const n2 = 37093870;
console.log(n2.toString(36));

const max = 100;
const min = 50;
console.log(min + Math.random() * (max - min));

const arr6 = [5, 2, 1, -10, 8, 15];

function compareReversed(a, b) {
  return b - a;
}

arr6.sort(compareReversed);

console.log(arr6);

const arr7 = [1, 2, 3, 4, 5];

function compareRandom(a, b) {
  return Math.random() - 0.5;
}

arr7.sort(compareRandom);
console.log(arr7);
