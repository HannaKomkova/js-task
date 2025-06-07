const array = [1, 3, 4, 4, 5];

const chechArray = (arr) => {
   return arr.every((el) => !isNaN(el))
}

if (chechArray(array)) {
   const countSumOfArray = (arr) =>{
      return arr.reduce((sum, el) => sum + el,0)
   }
   console.log(`Cумма элементов массива ${countSumOfArray(array)}`);
} else{
   console.log(`в массиве не только числа `);
   
}



