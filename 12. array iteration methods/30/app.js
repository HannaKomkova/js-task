let n = +prompt('количество элементов массива ');
let array =[];

for (let i = 0; i < n; i++) {
  array.push(prompt('введите число'));
  
}

if (array.some(function(el){  return !isNaN(el)})) {
  const min = array.reduce(function(acc,curr) {
  if (curr < acc) {
    return  curr;
  } else {
    return acc;
  }
}, +Infinity)

console.log(min);
} else {
console.log("Нет чисел");

}






