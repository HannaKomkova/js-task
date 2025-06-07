let n = +prompt('введите число');

const makeArray = (elNumbers) => {
    let array =[];
    for (let i = 0; i < elNumbers; i++) {
       array.push(prompt('enter'))
    }
    return array;
}

const checkArray = (arr) => arr.every((el) => !isNaN(el))

const makeFinalArray = (arr) => arr.filter((el) => el %2 === 0)
.map((elem) => elem **2 )

let fullArray = makeArray(n);

if ( checkArray(fullArray)) {
   
    console.log(makeFinalArray(fullArray));
    
} else {
    console.log('в массиве не только числа');
    
}

