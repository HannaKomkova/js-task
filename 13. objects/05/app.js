let array =[];
const obj ={"1": "a", "3": "b", "4": "c"};

for ( let key in obj){
   if (key % 2 !== 0){
      array.push(key)
   }
}

console.log(array);

 

