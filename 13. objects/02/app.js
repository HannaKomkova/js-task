const obj = {"1": "a", "2": "b", "name": "c"};
let arr = [];

for(let key in obj){
    if (!isNaN(key)){
      arr.push(key);
       
    } else continue;
}

console.log(arr);
