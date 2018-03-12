// jshint esversion:6

function rot13(str) {
  let message = '';
  let rotated = '';
  for (var i = 0; i < str.length; i++) {
    let char = str.charAt(i).charCodeAt(0);
    if (char >= 65 && char <= 90) {
      rotated = char + 13;
      if (rotated > 90) {
        rotated -= 26;
      }
    }
    else {
      rotated = char;
    }

    message += String.fromCharCode(rotated);
  }

  return message;
}

// Change the inputs below to test
console.log(rot13("SERR PBQR PNZC"));
