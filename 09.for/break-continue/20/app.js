let array  = [5, "hello", 15, "world", 25, 3, "test"];
 
for (let i = 0; i < array.length; i++) {
   if ( isNaN(array[i])) {
      continue
   } 
   switch (!isNaN(array[i])) {
         case array[i] <10:
            console.log(`${array[i]} - Маленькое числo`);
            break;
         case array[i] >= 10 && array[i] <20 :
            console.log(`${array[i]} - Среднее число`);
            break;
      
         default: 
         console.log(`${array[i]} - Большое число`);
            break;
      }
}
   
