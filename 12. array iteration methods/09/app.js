let n = +prompt('количество элементов массива');
let array = [];

for (let i = 0; i < n; i++) {
    let item = prompt('введите слово').toLowerCase();
    if (isNaN(item)){
        array.push(item);
    } else {
        alert ('вы ввели число')
    }
} 

const finalArray = array.filter(function(elem){
    return elem.startsWith('h') || elem.startsWith('a');
})

console.log(finalArray);
