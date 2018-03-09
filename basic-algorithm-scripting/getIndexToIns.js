// jshint esversion:6

function getIndexToIns(arr, num) {
  //arr.sort(function(a, b) {return a - b; });
  arr.sort((a, b) => a - b));

  let insert = 0;

  arr.forEach((value, index) => {
    if (value < num) {
      insert = index + 1;
    }
  });

  return insert;
}

console.log(getIndexToIns([10, 20, 30, 40, 50], 35));
console.log(getIndexToIns([10, 20, 30, 40, 50], 30));
