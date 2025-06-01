let array = [];
let obj = {};
let n = prompt('enter number');

for (let i = 0; i < n; i++) {
   array.push(+prompt('enter'));
    
}

let res = array.reduce(function(sum,el){
    return sum + el;
}, 0)

obj.sum = res;

console.log(obj);


