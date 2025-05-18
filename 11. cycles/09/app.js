let array = [2, 5, 9, 15, 0, 4];
let finalArray = [];

let i = 0;
while (i < array.length) {
    if (array[i] % 5 === 0 || array[i] % 3 === 0) {
        finalArray.push(array[i]);
    }

    i ++;
}


console.log(finalArray);


