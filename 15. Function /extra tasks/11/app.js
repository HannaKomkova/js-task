let n = +prompt('введите число')

const generateArray = (arrayLength) =>{
    let array = [];
    for (let i = 1; i <= arrayLength; i++) {
        array.push(i);
    }
    return array
}

console.log(generateArray(n));




