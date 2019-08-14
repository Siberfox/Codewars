let age = 25;
age += age;
console.log(age);

const email = 'mario@gmail.com';
const result = email.slice(0, 7);
console.log(result);
console.log(email);

const arr = [0, 1, 2, 3, 4, 5];
const words = ['sad', 'minimum', 'apple', 'zoo', 'elephant', 'graph'];
const result1 = arr.push('10', 'L');
const result2 = arr.shift();
console.log(result1);
console.log(arr);
console.log(result2);

if (arr.includes(3)) {
  console.log('yep');
  arr.push('zzz');
}
console.log(arr);
for (let i = 0; i < 5; i += 1) {
  console.log(i);
}
for (let i = 0; i < arr.length; i += 1) {
  console.log(words[i]);
}

// function test() {
//   let itLet = 'u see LET';
//   var itVar = 'u see VAR';
//   const itConst = 'u see CONST';
// }
// test();
// console.log(itVar);
// console.log(itLet);
// console.log(itConst);
// if (true) {
//   let itLet2 = 'u see LET';
//   var itVar2 = 'u see VAR';
//   const itConst2 = 'u see CONST';
// }
// console.log(itVar2);
// console.log(itConst2);
// console.log(itLet2);
// for (let i = 0; i < 2; i += 1) {
//   let itLet3 = 'u see LET';
//   var itVar3 = 'u see VAR';
//   const itConst3 = 'u see CONST';
// }

// console.log(itVar3);
// console.log(itConst3);
// console.log(itLet3);
