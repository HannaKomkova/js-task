let array =[1, 3, 7, 7, 5];

let Max = array[0];

const findMax = (arr) => {
   try {
      if (arr.length === 0) throw new Error ('массив пуст');
      let checkArray = arr.every((el) => !isNaN(el)); 
      if(!checkArray) throw new Error ('в массиве буквы');
      arr.forEach((el, index) => {
         if(el> Max){
            Max = el;
         }
      })
      return arr.indexOf(Max);

   } catch (error) {
      return error;
   }

}

let res = findMax(array);

console.log(res);











