let n = +prompt('количество элементов массива ');
let array =[];

for (let i = 0; i < n; i++) {
  array.push(+prompt('введите число'));
  
}

let finalArray = array.map(function(el,index) {
    return el * index;
})

console.log(finalArray);

