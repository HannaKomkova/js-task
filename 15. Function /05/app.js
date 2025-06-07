function checkNumbers(arr) {
    return arr.every((el) => !isNaN(el))
}

console.log(checkNumbers([1, 3, 4, 5, 6, 'dfksdf']));


 
const checkNumbers2 = (arr) =>  arr.every((el) => !isNaN(el))


console.log(checkNumbers2([1, 3, 4, 5, 6, 'dfksdf']));