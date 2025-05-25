let n = +prompt('количество элементов массива');
let array =[];

for (let i = 0; i < n; i++) {
   array.push(+prompt('введите элемент массива'));
   
}

let res = array.reduce(function(product, el){
   return product *=el;
}, 1)
console.log(res);





