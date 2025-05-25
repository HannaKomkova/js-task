let n = +prompt('количество элементов массива');
let array =[];

for (let i = 0; i < n; i++) {
   array.push(prompt('введите элемент массива'));
   
}

const res = array.reduce(function(str,el){
   return el === array[array.length-1]? str +=el : str += el + ',';
}, '')

console.log(res);
