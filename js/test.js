/* eslint-disable no-console */
const a = 3;
const b = 5;

function med(c) {
  return a + b - c;
}

console.log(Math.sqrt(med(4)));
console.log('hi');
console.log(b);

const value = 'Infinity';
const number = +value;
console.log(number);
console.log(typeof number);

const value2 = 'NaN';
const number2 = +value2;
console.log(number2);
console.log(typeof number2);

console.log(parseInt('12px9', 10));
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

// Loops

let y = 10;
for (let x = 0; x < 5; x += 1) {
  console.log((y += 1));
}
console.log(y);
let t = 0;
while (y < 30) {
  console.log(`значение y:${(y += 2)} / такт номер:${(t += 1)}`);
}

do {
  console.log(`значение y:${(y -= 2)} / такт номер:${(t -= 1)}`);
} while (y > 15);

// Func
