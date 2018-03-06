
function chunkArrayInGroups(arr, size) {
  var arrays = [];
  var start = 0;
  var end = 0 + size;

  for (var i = 0, len = arr.length; i < len; i+=size) {
    arrays.push(arr.slice(start, end));
    start += size;
    end += size;
  }

  return arrays;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
