const obj = {"a": 1, "b": 2, "c": 4};
const arr = [];

for(let key in obj){
   if(obj[key]%2===0){
      arr.push(obj[key])
   }
}

console.log(arr);

