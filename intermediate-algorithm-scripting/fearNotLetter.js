
function fearNotLetter(str) {
  let letters = str.split('');
  let missing = undefined;
  nextLetter = String.fromCharCode(str.charCodeAt(0));
  let lastLetter = str[str.length - 1];
  letters.forEach(function(letter) {
    if (letter != nextLetter) {
      missing += nextLetter;
    }
    nextLetter = String.fromCharCode(letter.charCodeAt(0) + 1);
  });

  return missing;
}

console.log(
  fearNotLetter("abce")
);
