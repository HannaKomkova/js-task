let array = [];

let finalArray = [];

for (let i = 0; i < 10; i++) {
    let pr = prompt('введите трёхзначное число');
    if (pr.length === 3) {
        array.push(pr);
    }
}   

console.log(array);


for (let i = 0; i < array.length; i++) {
    if (array[i][0] === '1' || array[i][0] === '2' || array[i][0] === '5'){
        finalArray.push(array[i]);
    }
}
console.log(finalArray);
