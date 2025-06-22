let array = []

const fillArr = (arr) => {
    for (let i = 0; i < 5; i++) {
        arr.push(prompt('enter'))
    }
}

let fullArr = fillArr(array);

const checkArray = (arr) => {
    try {
        arr.forEach((el)  => {
            if (isNaN(el))  throw Error ('это строка') 
        });
    return true;
    } catch (error) {
        return error;
        
    }
}

console.log( checkArray(fullArr));
 




