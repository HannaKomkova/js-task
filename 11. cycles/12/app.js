let array = [];

for (let i = 0; i <10; i++) {
    array.push(prompt('введите значение'));
    
}

let finalArray = [];

for (let i = 0; i < array.length; i++) {
    if (array[i].startsWith(1) || array[i].startsWith(2) || array[i].startsWith(5)) {
        finalArray.push(array[i]);
    }
    
}

console.log(`числа из массива, начинающиеся на 1, 2
или 5 ${finalArray}`);

