
function translatePigLatin(str) {
  let match      = str.match(/[aeiou]/gi);
  let firstIndex = str.indexOf(match[0]);
  let pigLatin = '';

  if (firstIndex > 0) {
    let start = str.substr(0, firstIndex);
    let end = str.substr(firstIndex, str.length);
    pigLatin = end + start + 'ay';
  }
  else {
    pigLatin = str + 'way';
  }

  return pigLatin;
}

console.log(
  translatePigLatin("consonant")
);
