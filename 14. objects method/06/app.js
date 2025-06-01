let obj ={"age": 5, "cats": 10, "dogs": "brownie"};

let str= 'dogs';

let res = Object.keys(obj).some(function(el){
   return el === str
})

console.log(res);



