let promptNum1 = prompt ('enter number 1');
let promptNum2 = prompt ('enter number 2');
let resNum = 0;

const findResNum =(num1, num2) => {

   try {
         if(isNaN(num1) && isNaN(num2)) throw new Error("This is not a number");
         if(num1 < 0 && num2 < 0) throw new Error("This is negative numbers");
         for (let i = 0; i < num1*num2; i++) {
            
            if (i % num1 === 0 & i % num2=== 0) {
               resNum = i;
            }
      
      } 
      return resNum; 
      
   } catch (error) {
      return error;
   }
   
}

let res = findResNum(promptNum1, promptNum2);

console.log(res);
