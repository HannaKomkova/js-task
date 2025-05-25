const js = 'javascript';
const n = +prompt('количество элементов массива');
let array = [];

for (let i = 0; i < n; i++) {
   array.push(prompt('введите строку в массив'))
    
}

let finalArray=[];

array.forEach(function(elem){
    if(elem.includes(js)){
        finalArray.push(elem)
    }
})

console.log(finalArray);
