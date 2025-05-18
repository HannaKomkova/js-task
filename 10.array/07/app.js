let array = [-1, 2, 3, -4, 5];

let sum = 0;

for (let i = 0; i < array.length; i++) {
   if ( array[i] > 0 ){
    sum += array[i];
   }
}

console.log(`суммa всех положительных элементов массива [-1, 2, 3, -4, 5] : ${sum}`);

