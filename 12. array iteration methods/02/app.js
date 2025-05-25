const array = [];

for (let i = 0; i < 7; i++) {

    let num = +prompt('введите число'); 
    if (isNaN(num)){
        alert('Вы ввели не число')
        continue 
    } else {
        array.push(num);
    }
} 

console.log(`Первые 5 цифр -исходный массив и 2 цифры для сравнения ${array}`);


const finalArray = array.filter( function(elem){
     return elem !== array[array.length-1] || elem !== array[array.length-2] ;
})



// const finalArray = array.filter( function(elem){
//     if (elem === array[array.length-1] || elem === array[array.length-2]) {
//         return false;
//     } else {
//         return true;
//     }
// })

finalArray.length > 0 ? console.log(finalArray) : console.log('Массив пуст');





