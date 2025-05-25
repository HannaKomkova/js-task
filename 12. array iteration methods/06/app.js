let n = +prompt('количество элементов массива');
let array =[];

for (let i = 0; i < n; i++) {
   array.push(prompt('введите элемент массива'));
   
}

let bool = array.every(function(elem){
    return !isNaN(elem);
})

console.log(bool);


