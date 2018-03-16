
function myReplace(str, before, after) {
  after = after.split('');
  before = before.split('');
  if (before[0] == before[0].toUpperCase()) {
    after[0] = after[0].toUpperCase();
  }

  return str.replace(before.join(''), after.join(''));
}

console.log(
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"),
  myReplace("He is Sleeping on the couch", "Sleeping", "sitting"),
  myReplace("His name is Tom", "Tom", "john")
);
