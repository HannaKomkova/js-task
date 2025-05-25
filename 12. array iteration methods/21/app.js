let n = +prompt('количество элементов массива ');
let array =[];

for (let i = 0; i < n; i++) {
  array.push(+prompt('введите число'));
  
}

const max = array.reduce(function(num,elem){
  if (elem > num){
    return elem;
  } else {
    return num};
}, -Infinity)

console.log(max);

