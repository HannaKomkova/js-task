let n = +prompt ('количество элементов массива');
let array = [];

for (let i = 0; i < n; i++) {
   let num = +prompt ('введите число')
   if (isNaN(num)) {
      alert('вы ввели не число');
   } else {
      array.push(num);
   }
   
}

let result = 1;

array.forEach(function(elem){
   result *=elem;
})

console.log(result);

