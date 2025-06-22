let promptN = prompt('enter number');
let array = [];

const checkArray = (n) => {
   try {
         if(isNaN(n)) throw new Error ('вы ввели не число');
         if(n < 0 ) throw new Error ('вы ввели отрицательное число');
         for (let i = 0; i < n; i++) {
            array.push(Math.round(Math.random()*100));
            
         }
         return array;
   } catch (error) {
      return error;
   }
}

let  fullArray = checkArray(promptN);

console.log(fullArray);
