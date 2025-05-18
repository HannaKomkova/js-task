let array = [2, 5, 9, 15, 0, 4];
let arrayFinal = [];

for (el of array){
   if (el % 3 == 0) {
      arrayFinal.push(el);
   } else continue;
   
}

console.log(arrayFinal);

