// Sudoku Solution Validator

function validSolution(arr) {
  let firstSqr = [];
  let secondSqr = [];
  let thirdSqr = [];
  for (let i = 0; i < arr.length; i++) {
    const hor = [];
    const ver = [];
    if (i === 3 || i === 6) {
      firstSqr = [];
      secondSqr = [];
      thirdSqr = [];
    }
    for (let j = 0; j < arr.length; j++) {
      if (arr[j][i] === 0 || arr[i][j] === 0) {
        return false;
      }
      if (hor[arr[i][j]] || ver[arr[j][i]]) {
        return false;
      }
      hor[arr[i][j]] = arr[i][j];
      ver[arr[j][i]] = arr[j][i];

      if (j < 3) {
        if (firstSqr[arr[i][j]]) {
          return false;
        }
        firstSqr[arr[i][j]] = arr[i][j];
      }
      if (j >= 3 && j < 6) {
        if (secondSqr[arr[i][j]]) {
          return false;
        }
        secondSqr[arr[i][j]] = arr[i][j];
      }
      if (j >= 6) {
        if (thirdSqr[arr[i][j]]) {
          return false;
        }
        thirdSqr[arr[i][j]] = arr[i][j];
      }
    }
  }
  return true;
}

module.exports = validSolution;

console.log(
  validSolution([
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
  ])
);
