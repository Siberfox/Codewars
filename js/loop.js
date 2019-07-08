let y = 10;
for (let x = 0; x < 5; x += 1) {
  console.log((y += 1));
}
console.log(y);

const t = 0;
let t2 = t;

while (y < 30) {
  console.log(`значение y:${(y += 2)} / такт номер:${(t2 += 1)}`);
}

do {
  console.log(`значение y:${(y -= 2)} / такт номер:${(t2 -= 1)}`);
} while (y > 15);
