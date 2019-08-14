/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
const obj = {
  name: 'John',
  age: '25',
  'fav car': 'tesla'
};
console.log(obj['fav car']);

obj.age = 26;
console.log(obj.age);

const dest = {};
Object.assign(dest, obj);
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

function multiplyNumeric(object) {
  for (const key in object) {
    if (typeof object[key] === 'number') object[key] *= 2;
  }
}
multiplyNumeric(menu);
console.log(menu);
