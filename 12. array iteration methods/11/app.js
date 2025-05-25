const n = +prompt('количество элементов массива');
let array = [];

for (let i = 0; i < n; i++) {
   array.push(prompt('введите значение'))
    
}

let finalArray = array.map (function(elem){
    return '#'+elem;
})

console.log(finalArray);

finalArray =[];

array.forEach(function(elem){
    finalArray.push('#'+elem);
})

console.log(finalArray);
