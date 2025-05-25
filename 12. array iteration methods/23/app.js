let n = +prompt('количество элементов массива ');
let array =[];

for (let i = 0; i < n; i++) {
  array.push(+prompt('введите число'));
  
}

let bool = array.every(function(el){
    return el % 2 === 0;
})

console.log(bool);
