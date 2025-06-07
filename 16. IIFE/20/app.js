let array = [10, 5, 20, 3, 8];
let obj = {};
obj.min = +Infinity;
obj.max = -Infinity;

(() => {
    array.forEach((el) => {
        if(el < obj.min){
          return   obj.min = el;
        } else{
           return  el;
        }
    })
    
    array.forEach((el) => {
        if(el > obj.max){
          return  obj.max = el;
       } else{
          return  el;
       }
    })
    return obj;
})()

console.log(obj);



  