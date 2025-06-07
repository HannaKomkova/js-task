let array = [1, 2, 3, 4, 6, 8, 10, 5]

function chechArray(arr){
    return arr.every((el)=> !isNaN(el))
}

if(chechArray(array)) {
    function makeFinalArray(arr){
      return arr.filter((el) => el%2 === 0)
    }
    console.log(makeFinalArray(array));
    
} else {
    console.log('в массиве не только числа');
    
}

