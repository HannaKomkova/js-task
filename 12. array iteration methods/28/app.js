let n = +prompt('количество элементов массива ');
let array =[];

for (let i = 0; i < n; i++) {
  array.push(prompt('введите'));
  
}

let finalArray = array.map (function(el){
  return el.toUpperCase();
})

console.log(finalArray);
