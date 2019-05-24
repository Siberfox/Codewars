/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
let a = 3;
let b = 5;

function med(c) {
   return a + b - c;
}

   console.log(Math.sqrt(med(4)));
   console.log('hi');
   console.log(b);

let array = [1, 2, 3, 4];
   console.log(array.length);

array.push(9, 10);
   console.log(array.length);
array

let f = 'me';
array.pop();
array.push(f);
array
array.unshift('name');
array
array.shift();

let array2 = array.map(number => number * number) //Function (es6)
   console.log(array2);
   console.log(array);

let joined = array2.join();
   console.log(joined);
   console.log(array2);

var source = "Ветер,Дождь Огонь",
   arr = source.split(',');
   console.log(arr);

var arr0 = ['Ветер', 'Дождь', 'Огонь'];
arr0.reverse();
   console.log(arr0);

   console.log(arr0[1] + ' и ' + arr0[2]);
   console.log(`${arr0[1]} или ${arr0[2]}`);

var arr3 = [1, 2, 3];
arr3.concat(4, 5);
   console.log(arr3.concat(4, 5));
arr3.concat([4, 1]);
   console.log(arr3.concat([4, 1]));
arr3.concat([4, 5], [6, 7]);
   console.log(arr3.concat([4, 5], [6, 7]));

var arr2 = ["Киви", "Апельсины", "Груши"];
   console.log(arr2.sort());

var arr4 = [1, 2, 3, 3, 5, 3];
arr4.indexOf(1);
arr4.indexOf(3);
   console.log(arr4.indexOf(3));
arr4.indexOf('3');
arr4.indexOf(3, 4);
   console.log(arr4.indexOf(3,4)); 
arr4.indexOf(35);
arr4.indexOf(2);

let deleted = arr4.splice (3,2);
   console.log(arr4);
   console.log(deleted);

var arr5 = [2, 3, 5];

function foo(value) {
   var sum = value * this;
   console.log(sum);
}
arr5.forEach(foo, 7);

function isBig(element, index, array) {
   return (element >= 10);
}
var filtered = [11, 3, 7, 50, 25].filter(isBig);
   console.log(filtered);

var value = 'Infinity';
var number = +value;
   console.log(number);
   console.log(typeof(number));

var value2 = 'NaN';
var number2 = +value2;
   console.log(number2);
   console.log(typeof(number2));

   console.log(parseInt('12px9'));
   console.log(parseInt('FF', 16));
   console.log(parseInt('100010001111', 2));

var n = 252;
   console.log(n.toString(16));
   console.log(n.toString(2));

var n2 = 37093870;
   console.log(n2.toString(36));

var max=100;
var min=50;
   console.log(min + Math.random() * (max - min));


var arr6 = [5, 2, 1, -10, 8, 15];

   function compareReversed(a, b) {
     return b - a;
   }
   
   arr6.sort(compareReversed);
   
console.log(arr6);


var arr7 = [1, 2, 3, 4, 5];

function compareRandom(a, b) {
  return Math.random() - 0.5;
}

arr7.sort(compareRandom);
console.log(arr7);

