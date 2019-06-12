/* eslint-disable no-console */
const array = [1, 2, 3, 4];
console.log(array.length);

array.push(9, 10);
console.log(array.length);
console.log(array);

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

let c = 'Wo rd';
c = c.split('');
console.log(c);
c = c.join('');
console.log(c);

const array0 = [5, 10, 7, 4, 4, 3];
const deleted = array0.splice(3, 2, 'zzz');
console.log(array0);
console.log(deleted);

const copy = array0.slice(1, 4);
console.log(copy);
console.log(array0);

const arr0 = ['Wind', 'Rain', 'Fire'];
arr0.reverse();
console.log(arr0);

console.log(`${arr0[1]} and ${arr0[2]}`);
console.log(`${arr0[1]} or ${arr0[2]}`);

// Sort
const arr2 = ['Киви', 'Апельсины', 'Груши'];
console.log(arr2.sort());

const arr6 = [5, 2, 1, -10, 8, 15];

function compareReversed(a, b) {
  return b - a;
}
arr6.sort(compareReversed);
console.log(arr6);

const arr7 = [1, 2, 3, 4, 5];

function compareRandom() {
  return Math.random() - 0.5;
}

arr7.sort(compareRandom);
console.log(arr7);

// Concat
const arr3 = [1, 2, 3];
console.log(arr3.concat(4, 5));
console.log(arr3.concat([4, 1]));
console.log(arr3.concat([4, 5], [6, [4, 7]]));
console.log(arr3);

const arr4 = [1, 2, 3, 3, 5, 3];
console.log(arr4.indexOf(3));
console.log(arr4.indexOf(3, 4));

const arr5 = [2, 3, 5];

function foo(value) {
  const sum = value * this;
  console.log(sum);
}
arr5.forEach(foo, 7);

function isBig(element /* index, array */) {
  return element >= 10;
}
const filtered = [11, 3, 7, 50, 25].filter(isBig);
console.log(filtered);
