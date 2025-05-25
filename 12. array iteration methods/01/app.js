let array = [];
let finalArray =[];

for (let i = 0; i < 5; i++) {
    array.push(prompt('введите 5 значений'));
}

for (let i = 0; i < array.length; i++) {
   if (isNaN(array[i])) {continue}
   else {finalArray.push(array[i])}
}

if (finalArray.length > 0 ) {
    console.log(finalArray);
    
} else { console.log('Массив пуст');
}



