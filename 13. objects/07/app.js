// let obj = {};
let obj =  {"a": 1};
let isEmpty = true;

for (let key in obj){
   isEmpty = false;
   break
}

console.log(isEmpty);

console.log(Object.keys(obj).length === 0 ? true : false);
