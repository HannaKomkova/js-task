let n = +prompt('количество элементов массива ');
let array =[];

for (let i = 0; i < n; i++) {
  array.push(prompt('введите строку'));
  
}

let finalArray = array.map(function(el){
    return el.length;
})

console.log(finalArray);



