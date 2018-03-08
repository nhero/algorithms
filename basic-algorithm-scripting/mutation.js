// jshint esversion:6

function mutation(arr) {
  let str1 = arr[0];
  let str2 = arr[1].split('');
  let found = true;
  for (let el of str2) {
    if (str1.toUpperCase().indexOf(el.toUpperCase()) == -1) {
      found = false;
    }
  }

  return found;
}

console.log(mutation(["hello", "hey"]));
