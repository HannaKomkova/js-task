let i = 0;
let count = 0;

const countElemntsOfArray = (array) => {
   if(i === array.length) return;
   count ++;
   i++;
   countElemntsOfArray(array);
}

countElemntsOfArray([1, 2, 3, 4]);
console.log(count);
