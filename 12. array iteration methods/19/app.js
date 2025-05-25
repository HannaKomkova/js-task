let n = +prompt('количество элементов массива');
let array =[];

for (let i = 0; i < n; i++) {
   array.push(prompt('введите элемент массива'));
   
}

console.log(array);

let res = array.reduce(function(num, el){
    if(!isNaN(el)){
    num+=1;
    } 
    return num;
}, 0)

console.log(res);



