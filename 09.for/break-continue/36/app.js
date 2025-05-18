let array = [1, -2, 3, -4, 5, -6];

let count = 0;

for (let i = 0; i < array.length; i++) {
    if ( array[i] < 0) {
        continue
    }
    count += array[i];
    
}

console.log(array);

console.log(`Сумма положительных чисел: ${count}`);


array = [-1, -2, -3, -4, -5];
count = 0;

for (let i = 0; i < array.length; i++) {
    if ( array[i] < 0) {
        continue
    }
    count += array[i];
    
}

console.log(array);
console.log(`Сумма положительных чисел: ${count}`);