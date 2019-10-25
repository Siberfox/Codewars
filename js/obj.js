/* eslint-disable func-names */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
const object = {
  name: 'John',
  age: '25',
  'fav car': 'tesla'
};
console.log(object['fav car']);

object.age = 26;
console.log(object.age);

const dest = {};
Object.assign(dest, object);
console.log(dest);

const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};
let result = 0;
for (const key in salaries) {
  result += salaries[key];
}
console.log(result);

const menu = {
  width: 200,
  height: 300,
  title: 'My menu'
};

function multiplyNumeric(prop) {
  const obj = prop;
  for (const key in obj) {
    if (typeof obj[key] === 'number') obj[key] *= 2;
  }
}
multiplyNumeric(menu);
console.log(menu);

const testObj = {
  age: 35,
  name: 'james',
  valueOf() {
    return this.age;
  },
  toString() {
    return `name: "${this.name}"`;
  }
};
const a = +testObj;
const n = alert(testObj);
console.log(n, a);
console.log(typeof n);
console.log(typeof a);

const object1 = {
  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return 42;
    }
    return null;
  }
};

console.log(+object1);

// Calculator

// const calculator = {
//   read() {
//     this.firstNum = +prompt('Задайте число a', 0);
//     this.secondNum = +prompt('Задайте число b', 0);
//   },
//   sum() {
//     return this.firstNum + this.secondNum;
//   },
//   mul() {
//     return this.firstNum * this.secondNum;
//   }
// };
// calculator.read();
// alert(`\t a + b = ${calculator.sum()}\n\t a * b = ${calculator.mul()}`);

// Calculator New constructor

// function Calculator() {
//   this.read = function() {
//     this.firstNum = +prompt('Задайте число a', 0);
//     this.secondNum = +prompt('Задайте число b', 0);
//   };
//   this.sum = function() {
//     return this.firstNum + this.secondNum;
//   };
//   this.mul = function() {
//     return this.firstNum * this.secondNum;
//   };
// }
// const calculator2 = new Calculator();
// calculator2.read();
// alert(`\t a + b = ${calculator2.sum()}\n\t a * b = ${calculator2.mul()}`);
// console.log(calculator2);

// function Accumulator(startingValue) {
//   this.value = startingValue;
//   this.read = function() {
//     this.value += +prompt('Задайте число a', 0);
//   };
// }
// const accumulator = new Accumulator(1);
// accumulator.read();
// accumulator.read();

// alert(accumulator.value);

function Calculator() {
  this.calculate = function(string) {
    const res = string.split(' ');
    if (res[1] === '+') return +res[0] + +res[2];
    if (res[1] === '-') return +res[0] - +res[2];
  };
}

const calc = new Calculator();

console.log(calc.calculate('3 + 7'));
console.log(calc.calculate('10 - 5'));
