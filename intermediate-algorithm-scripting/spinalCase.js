
function spinalCase(str) {
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2').trim();
  str = str.toLowerCase().replace(/_/g, '-').replace(/ /g, '-');

  return str;
}

console.log(
  spinalCase('This Is Spinal Tap'),
  spinalCase('thisIsSpinalTap'),
  spinalCase('The_Andy_Griffith_Show'),
  spinalCase('Teletubbies say Eh-oh'),
  spinalCase('AllThe-small Things')
);
