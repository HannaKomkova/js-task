let n = +prompt('количество элементов массива ');
let array =[];

for (let i = 0; i < n; i++) {
  array.push(prompt('введите строку'));
  
}

let finalArray = array.filter(function(el){
  return el.length < 5;
})

console.log(finalArray);
