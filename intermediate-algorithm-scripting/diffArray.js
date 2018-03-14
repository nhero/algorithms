// jshint esversion:6

function diffArray(arr1, arr2) {
  let diff = [];
  let diff1 = arr2.filter(function(e) {
    return arr1.indexOf(e) < 0;
  });
  let diff2 = arr1.filter(function(e) {
    return arr2.indexOf(e) < 0;
  });

  return diff1.concat(diff2);
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
