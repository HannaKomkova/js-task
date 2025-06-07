let array = [1, 2, 3, 4, 5]

const checkArray = (arr) =>  arr.every((el) => !isNaN(el))

if (checkArray(array)) {
    const findMaxNumber = (arr) => {
        return arr.reduce((max, el) => {
            if (el > max) {
               return max = el
            }  else {
                return max
            }
        }, -Infinity) 
    }
    console.log(findMaxNumber(array));
} else {
    console.log('в массиве не только числа');
    
    
}


 
