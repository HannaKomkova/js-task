let n = +prompt('количество элементов массива ');
let array =[];

for (let i = 0; i < n; i++) {
  array.push(+prompt('введите число'));
  
}

const finalArray = array.map(function(elem){
  // if (elem % 2 === 0) {
  //   return  'чёт';
  // } else {
  //   return 'нечет';
  // }
  return elem % 2 === 0?   'чёт' :  'нечет';
})


console.log(finalArray);

