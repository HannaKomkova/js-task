let array = [1, 2, 2, 3, 4, 4, 3, 4, 5];

let finalArray =[];

for ( let el of array) {
    if (!finalArray.includes(el)){
        finalArray.push(el);
    }
}

console.log(finalArray);


