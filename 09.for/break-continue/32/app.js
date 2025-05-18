let array =  [4, 3, -2, 7];

let result = 0;

for (let i = 0; i < array.length; i++) {
  if (array[i]<0) {
   result = array.indexOf(array[i]);
   break
  } else {
  result = -1;
   
  }
  
   
} 
console.log(array);

console.log(` индекс первого отрицательного числа : ${result}`);

array =[1, 2, 3];
result = 0;

for (let i = 0; i < array.length; i++) {
   if (array[i]<0) {
    result = array.indexOf(array[i]);
    break
   } else {
   result = -1;
    
   }
   
    
 } 
 console.log(array);
 
 console.log(` индекс первого отрицательного числа : ${result}`);










