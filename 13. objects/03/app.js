const obj=  {"a": 1, "b": "2", "c": 3};
let arr = [];

for ( let key in obj){
    if (typeof obj[key] == 'number'){
        arr.push(obj[key]);
    }
}

console.log(arr);


