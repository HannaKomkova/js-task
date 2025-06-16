function greaterThan(x){
   return function(y){
      if(y > x){
         console.log(`${y} больше ${x}`);
         
      } else{
         console.log(`${y} меньше ${x}`);
         
      }
   }
}

greaterThan(10)(30);
