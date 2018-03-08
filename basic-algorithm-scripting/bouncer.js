// jshint esversion:6

function bouncer(arr) {
  return arr.filter(function(el) { return !!el; });
}

console.log(bouncer([7, "ate", "", false, 9]));
console.log(bouncer([false, null, 0, NaN, undefined, ""]));
//[false, null, 0, NaN, undefined, ""]
