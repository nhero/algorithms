
function uniteUnique(...arr) {
  var flattened = arr.reduce(
    function(accumulator, currentValue) {
      return accumulator.concat(currentValue);
    },
    []
  );

  return [... new Set(flattened)];
}

console.log(
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])
);
