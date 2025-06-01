let num = prompt('введите число');


let res = num.split('').map(function(el, i){
   return el**i
}).reduce(function(sum,el){
   return el +sum
}, 0)

console.log(res);
