const obj = { Анна: 95, Иван: 88, Мария: 92 };
const n = 90;

let res = Object.values(obj).filter(function(el){
   return el > n;
})

console.log(res);


