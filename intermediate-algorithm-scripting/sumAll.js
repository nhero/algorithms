// jshint esversion:6

function sumAll(arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let range = [];

  for (var i = min; i <= max; i++) {
    range.push(i);
  }

  let sum = range.reduce((a, b) => a + b, 0);

  return sum;
}

console.log(sumAll([1, 4]));
