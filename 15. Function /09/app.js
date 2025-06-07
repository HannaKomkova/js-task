let array = [1, 2, 3, 5, 6]

const checkArray = (arr) => {
    return arr.every((el) => !isNaN(el))
}

if (checkArray(array)) {
    const dublicateElement = (arr) => {
        return arr.map((el) => el * 2)
    }
    console.log(dublicateElement(array));
    
} else {
    console.log('в массиве не только числа');
    
}





