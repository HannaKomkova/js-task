let n = +prompt('количество элементов массива ');
let array =[];

for (let i = 0; i < n; i++) {
  array.push(+prompt('введите число'));
  
}

let bool = array.some(function(el){
    return el > 0;
})

console.log(bool);