let n = +prompt('количество элементов массива ');
let array =[];

for (let i = 0; i < n; i++) {
  array.push(prompt('введите строку'));
  
}

let bool = array.every(function(el){
    return el.length > 3;
})

console.log(bool);







