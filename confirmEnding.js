function confirmEnding(str, target) {
  var length = target.length * -1;
  if (str.substr(length) == target) {
    return true;
  }
  else {
    return false;
  }
}

confirmEnding("Bastian", "n");
confirmEnding("He has to give me a new name", "name");
