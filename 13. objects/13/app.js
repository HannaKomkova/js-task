let arr1 = [1, 2, 3, 4, 5] ;
let obj ={};

arr1.forEach(function(el){
   if(el % 2 === 0){
      obj[el] = true;
   } else {
      obj[el] = false;
   }
})

console.log(obj);
