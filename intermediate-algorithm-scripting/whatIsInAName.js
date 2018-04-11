
function whatIsInAName(collection, source) {
  let keys = Object.keys(source);

  return collection.filter(function (obj) {
    return keys.every(function (key) {
      return obj.hasOwnProperty(key) && obj[key] === source[key];
    });
  });

}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
