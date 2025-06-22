let promptN = prompt('enter number');

const makeRes = (n) => {
   try {
      if(isNaN(n)) throw new Error('вы ввели не число');
      if (n < 0) throw new Error('вы ввели отрицательное число ');
      let newArray = n.split('').map((el) => {
        return el ** 2;
      
      });
      return newArray.join('');
   } catch (error) {
      return error;
   }
}

let res = makeRes(promptN);

console.log(res);
