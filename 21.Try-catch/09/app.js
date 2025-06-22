let array =  [-1, 2, -3, 4];

const makeNewArray = (arr) => {
try {
    let checkArr = arr.every((el) => !isNaN(el))
    if(!checkArr) throw new Error ('вы ввели не числа')

    return arr.map((elem) => {
        if (elem < 0){
            return elem = 0
        } else {
            return elem;
        }
    })   
} catch (error) { 
    return error;
}

}

let res = makeNewArray(array);
console.log(res);










