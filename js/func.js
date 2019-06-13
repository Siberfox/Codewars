const result = (num1, num2, num3) => {
  return num1 + num2 - num3;
};
console.log(result(3, 3, 1));

function func(num1, num2, ...theArgs) {
  console.log(theArgs[0]);
  console.log(theArgs[1]);
  console.log(theArgs[2]);
  for (let i = 0; i < theArgs.length; i += 1) {
    console.log(`${theArgs[i]} argument`);
  }
  return num1 + num2;
}
// func(1, 2, 3, 4, 5);
console.log(func(7, 7, 9, 10, 11));

let z = 0;

function recur() {
  if (z < 5) {
    console.log(`${z}: first value`);
    z += 1;
    recur();
  }
  return z;
}
recur();
console.log(recur());
