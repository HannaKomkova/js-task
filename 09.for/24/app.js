let array = [1, 2, 3, 4, 5, 6];

let sum = 0;

for (let i = 0; i < array.length; i++) {
    if ( array[i] % 2 === 0) {
        sum ++
    }
    
}

console.log(`Количество чётных чисел в массиве ${sum}`);



