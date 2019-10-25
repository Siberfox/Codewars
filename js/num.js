const n3 = 3.5;
const n4 = 3.4;
console.log(Math.floor(n3)); // 3
console.log(Math.ceil(n3)); // 4
console.log(Math.round(n3));
console.log(Math.round(n4));
console.log(Math.trunc(n3));
console.log(Math.trunc(n4));


console.log(Number.MAX_SAFE_INTEGER);
let num = BigInt(9007199254740991);
console.log(num + 10000000000000000n);

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


function randomInteger(min, max) {
  // получить случайное число от (min-0.5) до (max+0.5)
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

let a = 0;
let b = 0;
let c = 0;

for (let i = 0; i <= 1000; i += 1) {
  const res = randomInteger(1, 3);
  if (res === 1) {
    a++;
  }
  if (res === 2) {
    b++;
  }
  if (res === 3) {
    c++;
  }
}
console.log(a);
console.log(b);
console.log(c);

function randomInteger2(min, max) {
  // случайное число от min до (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

alert(randomInteger2(1, 3));