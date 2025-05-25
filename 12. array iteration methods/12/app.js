let n = +prompt('количество элементов массива');
let array=[];

for (let i = 0; i < n; i++) {
    array.push(prompt('введите элемент массива'))
    
}

let arrayWithNum =[];
let arrayWithString=[];

array.forEach(function(elem){
    if (!isNaN(elem)){
        arrayWithNum.push(elem);
    } else {
        arrayWithString.push(elem);
    }
})

console.log('массив из чисел', arrayWithNum);
console.log('массив из строк', arrayWithString);



