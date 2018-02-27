
function largestOfFour(arr) {
  var results = [];
    for (var key in arr) {
      results.push(Math.max(...arr[key]));
    }
  return results;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
