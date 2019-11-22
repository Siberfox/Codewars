let y = 10;
for (let x = 0; x < 5; x += 1) {
  console.log((y += 1));
}
console.log(y);

let t2 = 0;

while (y < 30) {
  console.log(`value y:${(y += 2)} / step:${(t2 += 1)}`);
}

do {
  console.log(`value y:${(y -= 2)} / step:${(t2 -= 1)}`);
} while (y > 15);
