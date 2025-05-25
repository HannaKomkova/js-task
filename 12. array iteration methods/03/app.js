let n = +prompt('Введите число элементов массива')

let array = [];

for (let i = 0; i < n; i++) {
    let num =  +prompt('введите число');
    if (isNaN(num)) {
        alert ('вы ввели не число')
        
    }else {
        array.push(num);
    }   
}

console.log(`Исходный массив - ${array}`);

let finalArray = [];

array.forEach(function(elem){
    if (!finalArray.includes(elem)) {
        finalArray.push(elem);
    }
})

if (finalArray.length === 0) {
    console.log('Массив пуст');
    
} else {
    console.log(finalArray);
}

