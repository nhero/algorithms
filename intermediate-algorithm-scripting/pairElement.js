
function pairElement(str) {
  let arr = str.split('');
  let results = [];
  arr.forEach(function(element) {
    let pair = [];
    switch(element) {
      case 'A':
        pair = ['A', 'T'];
        break;
      case 'T':
        pair = ['T', 'A'];
        break;
      case 'C':
        pair = ['C', 'G'];
        break;
      case 'G':
        pair = ['G', 'C'];
        break;
    }
    results.push(pair);
  });

  return results;
}

pairElement("GCG");
