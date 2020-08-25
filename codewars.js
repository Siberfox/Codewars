//
// Longest Common Subsequence

function lcs(a, b) {
  const obj = a
    .toLowerCase()
    .split('')
    .reduce((acc, val) => {
      acc[val] ? (acc[val] += 1) : (acc[val] = 1);
      return acc;
    }, {});

  const result = [];
  for (let i = 0; i < b.length; i++) {
    if (obj[b[i]]) {
      result.push(b[i]);
      obj[b[i]] -= 1;
    }
  }
  return result.join('');
}

console.log(lcs('abcDefef', 'abc')); // "abc"
console.log(lcs('abcdef', 'acfz')); // "acf"
console.log(lcs('132535365', '123456789')); // "12356"
console.log(lcs('anothertest', 'notatest')); // "12356"
