
let n = +prompt('enter numbers')

const fillArray = (arrayLength) =>{ 
    let array = [];
    for (let i = 0; i < arrayLength; i++) {
        array.push(prompt('enter'))
    }
    return array;
} 

let fullArray = fillArray(n);

const checkArray = (arr) => {
   return arr.every((el) => el > 0)

}

console.log(checkArray(fullArray));
