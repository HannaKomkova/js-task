let n = +prompt('количество элементов массива')

const makeArray = (elNumber) => {
    let array = [];
    for (let i = 0; i < elNumber; i++) {
        array.push(prompt('enter'));
    }
    return array
}

const checkArray = (arr) => arr.every((el) => !isNaN(el))

const makeRes = (arr) => arr.reduce((res, el) => { return res * el}, 1)


let fullArray = makeArray(n)

checkArray(fullArray) ?  console.log(makeRes(fullArray)) : console.log('в массиве не только числа');











