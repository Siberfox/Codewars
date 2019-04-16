let a = 3;
let b = 5;

function med(c) {
   return a + b - c;
};

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

joined = array2.join();
console.log(joined);
console.log(array2);

var source = "Ветер,Дождь,Огонь",
   arr = source.split(',');
console.log(arr);

var arr = ['Ветер', 'Дождь', 'Огонь'];
arr.reverse();
console.log(arr);

var arr = [1, 2, 3];
arr.concat(4, 5);
console.log(arr.concat(4, 5));
arr.concat([4, 1]);
console.log(arr.concat([4, 1]));
arr.concat([4, 5], [6, 7]);
console.log(arr.concat([4, 5], [6, 7]));

var arr = ["Киви", "Апельсины", "Груши"];
console.log(arr.sort());

var arr = [1, 2, 3, 3, 4, 5, 3];
arr.indexOf(1);
arr.indexOf(3);
arr.indexOf('3');
arr.indexOf(3, 4);
console.log(arr.indexOf(3, 4)); //??
arr.indexOf(35);
arr.indexOf(2);

var arr = [2, 3, 5];
function foo(value) {
   var sum = value * this;
   console.log(sum);
}
arr.forEach(foo, 7);

function isBig(element, index, array) {
   return (element >= 10);
}
var filtered = [11, 3, 7, 50, 25].filter(isBig);
console.log(filtered);

