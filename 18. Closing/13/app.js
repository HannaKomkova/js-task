let number = +prompt('enter number')

const makeMultiplier = (x) => {
   
   return function(num){
      console.log(num * x);
      
   }
}

let countRes = makeMultiplier(4);

countRes(number);





