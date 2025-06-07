const n = +prompt('enter number');

// function formArray(length){
//    let array =[];
//    for (let i = 0; i < n; i++) {
//       array.push('enter')
//    }
//    return array;
// }

const formArray = (length) => {
   let array =[];
   for (let i = 0; i < length; i++) {
      array.push(prompt('enter'))
   }
   return array;
}
const finalArray = formArray(n)
console.log(`Созданный массив ${finalArray}`);

const getArrayLength = (arr) =>{
      let sum = 0;
      arr.forEach((el) => sum += 1);
      return sum;
}

console.log(`Количество элементов массива ${getArrayLength(finalArray)}`);







