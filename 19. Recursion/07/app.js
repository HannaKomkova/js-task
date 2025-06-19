const countSumOfArray = (array) => {
  if (array.length === 1) return array[0];

  return array[0] + countSumOfArray(array.slice(1));
}



let res = countSumOfArray([10, 20, 30]);

console.log(res);







