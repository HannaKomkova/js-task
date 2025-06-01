let obj =  {"x": "hello", "y": 20, "z": 30};
let res = 0;

for ( let key in obj){
    if(typeof obj[key] == 'number'){
        res ++;
    }
}

console.log(res);



