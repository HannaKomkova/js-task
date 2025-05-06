let array = [10, 20, 30, 40, 50];
let num = prompt ('введите число');

for (let i = 0; i < array.length; i++) {
   if ( +num === array[i]) {
    console.log(`Число ${num} найдено`);
    
   }
    
}