const array1 = [];
const array2 =[];

for (let i = 0; i < 5; i++) {
    array1.push(prompt('введите число'));
    array2.push(prompt('введите число'));
}

const finalArray = [...array1, ...array2];
console.log(finalArray);




