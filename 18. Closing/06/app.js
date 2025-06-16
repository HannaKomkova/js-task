function checkEven(label){
   return function (number){
      if(number % 2 === 0){
         console.log(label);
         
      } else {
         console.log(label = false);
         
      }
      
   }
};
checkEven(true)(12);
checkEven(true)(11);






