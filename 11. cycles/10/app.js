let array = [-1, 2, 3, -4, 5];
let sum = 0;

for ( let el of array) {
    if ( el >0 ){
        sum += el;
    }
  
}

console.log(`суммa всех положительных элементов массива ${sum}`);
