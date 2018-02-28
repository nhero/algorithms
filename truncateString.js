
function truncateString(str, num) {
  if (num <= 3) {
    subStr = str.slice(0, num);
    subStr += '...';
  }
  else if (str.length > num) {
    subStr = str.slice(0, num - 3);
    subStr += '...';
  }
  else {
    subStr = str;
  }
  return subStr;
}
