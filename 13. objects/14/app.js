const array = [1, 2, 3, 1, 2, 1,2, 2 , 2, 3, 3, 3, 3, 3];

const count = array.reduce(function (acc, el) {
  if (acc.hasOwnProperty(el)) {
    acc[el] += 1;
  } else {
    acc[el] = 1;
  }
  return acc;
},{})

console.log(count);
let arrayKeys = Object.keys(count);
let res = arrayKeys[0];

arrayKeys.forEach(function(key) {
    if(count[res] < count[key]) {
      res = key;
    };
} )

console.log(res);
