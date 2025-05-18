let array =  [1, 2, 2, 3, 4, 4, 3, 4, 5];

let finalArray = [];

// for (let i = 0; i < array.length; i++) {
//     if (array[i] == array[i+1]){
//         continue
//     } else {
//         finalArray.push(array[i]);
//     }
    
// }
// console.log(finalArray);

for (let i = 0; i < array.length; i++) {
    if (!finalArray.includes(array[i])) {
        finalArray.push(array[i]);
    }
    
}

console.log(finalArray);

